/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "9EQ5ToiUpMAT9EjxV7foQXKLptfcFSZq27sY8CMdpkNFkSGW6sp46FPxxte6yozeqAV82TfxDWyJ4Var2BRCzv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uQwmgP2KsXAsysniDM8XyCwj3cSc7uJbHZmRnfuXYfFxoKzKZ7Ndz1fHpiuz3sn5SqqXqAacrUvDj11ZcsZMiK7",
  "key1": "5tRMAPjUu3ZeUScoLkpz7eAeLVzr5ZoQChU6mqWN6khoKMSVBjNRzZgswyHxWK2DRWUVqCvQPC6LveHfrXMnzvQm",
  "key2": "5pHBbbCKZGEohS3o1xkrBq1pZCNjCS57S21VH7W2aeXnFRnLS5u6CW3VGde9Qu8M1x7unwz8n2DSP818rmuZLmAT",
  "key3": "4m6ZfNbQz3mMTP1LmazSvyDAhqfMUSKiTSbRizj3eLqFTWowPdYFH2GeKmqutimH6fseiY365eQetd8qHXj2n9L4",
  "key4": "2wx3U7YJ6zCKyMkq7MSkWWBW6HbMBEVXaDi2fc27hegDXhLDp7ATASJ1U2c3TUAtSYBuuEZZFyhCC1frqJk5txEA",
  "key5": "2iUh2LZcZUsa1PUFSgueJpTua9ydTkbXG6phybZYDkCMZL5Q2ip9Ld6orxa2dheMaMpDywPT1mqA8tBMq46SVjKi",
  "key6": "3tRQ33V76dyuFALBviPfwtMgL3DzRSXo8YtJsBvFYWoXxKM6jaFqv5Zwc2trcUJqikQY8NabjkTx8tGGuQHa2mZG",
  "key7": "5JnCf1zkXT6GhzCbPgP3kr1ufy9RuUzRPr3rVSKHbMhgr2QbCg9p9UC3J9kyrVQatWXCGrTAf1BA3LJDdeiAKGFi",
  "key8": "5WQVfhC8UfqFBNiGkFaRzAFSbW3sfmvR4dUNkaaag5Jijx5UqCqBSLgeCqsGpCg9ZSN48PyNTMpmP4D5hXHQQgdX",
  "key9": "4mnZHCjiNRVAqwmC7LiU36GuNw49BfJe5pDfyx8iMU2cWwTSVvxkG3hvBpXdoKEZFH9r9pieUGbxzgqe7afrYBRA",
  "key10": "4NxfUMgsTQjK9nJVmkrgZeZe2qbbmdYcQ8ppCVXc4Gor26deabZygGP2PPXx5xnmpccCpbtkTitoFzYqWUnhWbL2",
  "key11": "2JEirz4SEGHt6pbxK4bumfW416kP4pVuozFdttftXVuEqVAZgkphkb5jCeFNdGoM9TFFF4Nc4M7frRhWzk9QAayz",
  "key12": "4SX8JAnaf66vjBx8oL5chCD3A6u6A47BzpoULtW8WBruU2RWbJRX58PEwLRkA9GzfhzhCeMjV4qFF3M4bZaT6CPP",
  "key13": "3H8YfWSmzuqbFXkx5PXpimDqR8sboNoY75Nz3aSseEi285T1GJjLyNQ36q7tuWDjUpy2Q1UZ2kScSxqWmJ79ARyL",
  "key14": "2DoY6kc2792vmoNsi16FrVb4AMg5YbZfSmbJ3Vmm7gEbpGxdgbRv4z6X3hhYu85Qg1eCtonJsQE9KT4oJ9P9QopK",
  "key15": "3qDeiUmuTvCXiWoZ6M8r1C8bA929MSWuKc62ZrDnV9VNSgStpgWh27z6QfCHDbgyeLP8PQEBkWdcAVVqKxQZ4G17",
  "key16": "3dXzcdMzp7sprGwTpa8AFhKSWsjKKpfjq9R1uQ3mAxbh5w1VybSxGyfZ9t9w4UuvJ8pwdVXF5XU4nZekLyvjg7Sw",
  "key17": "dfDRjcCJer3nuJz5JvQMUHZQGsRZnxS1XKp6rEDYKgpkTs3TfrtAHz3JFaWnWhRdSh7zYe81w7NKBZSCHbK5Udn",
  "key18": "35sHsbvR8RiUzHr4V8iUi5AhwPhEbjnNszwxtmTkawEZKEQbGYYjaNyo3YvkSfarjDjrUzZ2s5VkSgGdhKkQA5AN",
  "key19": "5r7HUFoSqaeFqQXwJgaoXLkVT8uuDmWetEJWQR9pTbX4yUUmBA2PDivt5p3HWCsvXF6XWQAjRoUq6kzTUzKc25kq",
  "key20": "3XCKSELnTWt5V2AXZYgDx5kVpNVMns7RpPdZTp2XMsJmH4ZR7iTV133oGRFtfdTRxGBH4gC7bWdfUoXCUSQGpTfc",
  "key21": "3kjjerv61qiZmXPKdRQJ5tBoyCpBZdjBEu1LLxDWMYQrVYf731gVmkcSAuHLp2Rg5g5AZvSprxwpidjBaNHCkEjx",
  "key22": "5cAxsqhNAM4RK7NSPpaMjJ6Ryd6YUJxPVcxsJRbgJ9HEzS3Lf7KVEtAopi1Qh7hLRGVJ3Y18o3aWmi2pgEehezrH",
  "key23": "AqzqgS6ZcJeS69jrp63y374uFShEApngD4FxMq5fP4FFksc1EB4DZiSPjkLnTERoC6wbshcuNvBQwGsBV35UdD2",
  "key24": "2T33qPx9QQrSdtGXQR19Cd7jJRkLoPRExWdSQUB7s2eQJqedtpTGDWUmkyMHvpvh5eU4UaNEHB8xnuCL6DWe5bnh",
  "key25": "4WPbbJ7vpcKSVNVKrAiEhviHs7qgiGMigHQX31nMfXUdae8yLr9cjuuMGJuwLDAFYqxzhDVRLPsqSfrPbFMn1BCX",
  "key26": "3tzz93x3TbnwZRRVRQ1dEZtUpCN242Mks9tZh6CXcEh6i8kmorbGFfpss5ZUEJVPRyD3i4DJ9ZannWVwyuQhK5Rg",
  "key27": "4QgckcHsz7j8T5vpcmmxYjsuUmZnaQ6jgn9BcLNnE32Ug8q1FnztrWM7jTAbyDLM5a7bZyYdgt7ppcuEsicVjYVj",
  "key28": "5sLcQcx5B1r6cv388CLM4ZeZ2szf5fxTki6SCfYv9REcKz3n6z4BiqwT7yEN27tFBu2cu9uzPo3pAzP45DEwJVQf",
  "key29": "3jdnFohBj9SYycxsXKSnMJfJFWFJA1fPMQs2YDwYcvt25yW2n8LvMKGCXezMbd3mEDfuzcB5Naiow8eByk7bkV6B",
  "key30": "3NjgFj8Q2vJCGiUDwjVYQs8f1kfGTbs9qGTR5gBxwsr5T9hZbTZ8Q6mcsNLEVJY898NrQKw9iPeMrejXxZcRaUUH",
  "key31": "3iHVH2E1rPc61ytVWU79rHnHW3e9pRKV7UwQ774jtPoKqiEf3DnR2X82XVq4pLsCYXZqfFZkhB6BiF7tEBSMJFGy",
  "key32": "2C5XEppAtkNaPH3iuVhqHuegt8gKAD1FJdfJKb1yh3kFy3LT5WKFBe8jAyBXun1LLsXRHSLLpWjFEDEAwuK5gA3M",
  "key33": "2sHRq2kiLKKysDAPQuiyrYpTff27T5BUUfdF3LaohGpv4FT49JjXxUmabnX6SVsK6skBAdVsbaswMcDcRUtpZmwN",
  "key34": "y4HPodZ77RhDPzViNdziVZbio8EaYtbG3pimhZcufeQ7BjEwGdno62sGf2yUpw53zZfTyWWnzfUkXN4Z43z4Pea",
  "key35": "51tJxNKGbHeDG2fkAXAFVZhiiD9tvkUiV8BqijNKMGhrFXLAjsgcrJsY9teuoRbX3cdYcau7QH9iKxdhX59N6Qv6",
  "key36": "2dsJ8jHPCPvkM6Ugy1gghRG7iBwPiy2KbkJZkkg3i5jMEqWGv3riNGbvWYnmPXjjrZ8QdchEt4kUqeUq7vqpoGhb",
  "key37": "uSC9QkN2NZewnWU4ww3Y7WLqjHPH2ctFsArgBLh9ZQP1LuqqFxzabu4ZHUEtvEVeFNxxQuUt9JRN7hrXf6PXgHX",
  "key38": "3x1EMHj1qcFGNMFZJRfjh96nqqaLZzax9qAAptBN2ezUR7bWvjuv6dbeJdNdPFrTh9GSfgvcE5Uqcpqpnc6NESFD",
  "key39": "4TRr1xU8xDFTWxfGTAg1QPYmBDFwVt4TGu9WaEC23GzMzNr2r7UWgA1c54uRE3ZUV72WDMoZYFMvn9yY4xXnrSFK",
  "key40": "5SihQNuHvs3eiN1YkB4s1xGJAtksw9ApLc773zsjtzdRmyF49cwZjc1SGaWFe9Vgbh7PAYQ221WV8u72LNfpejNv",
  "key41": "5frBXsykEu2pciNBnqxBW9oMGZnxhuhhD2cZohnDsi83cxB9WqxJzjpH978VifTCmz9VLHj4FmvT523w9PMWjYZh",
  "key42": "3VLX45oq9qk428yFAP9G1LbyEBh3hEamUcRVRivAM1hgptirKQNmVDBSH3dbPxGDb5rTAhXDnaoT1F55PPniA2BT"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
