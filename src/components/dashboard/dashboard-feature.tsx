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
    "3bfrCMBq43aTqELSz6aSvptNAzQBUY9qEVAFbcvJC6YtK6f9gictExtQPyZXXx9Qd2QUQN4LgDCjiNQwpCQe8wDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d5x136yePQEu2EwWZGLL2gf2SmzVLR24Xf6meAYR9djCRQxhh1i13XmuthynSSxc3em65gh3pYiWRpysYZ9mrpL",
  "key1": "oMajrRPuT9g6HZYGgsvy5CDkFVh3qXkxWVLVKxhkwu7tQp94ACqyikL7MKS3oHZ8Ed47MVpcfmaPfUL1oJ7DTwJ",
  "key2": "5snbogD9X7XStwChSXsafr2bQCZsJ5KTZPceVDR5ZzBAxVEGn29Z8UKXNnZeBt6gXEJzy9HtpQZgRwvC6m1mHYm6",
  "key3": "De6qcKHCmAFweZv1bdz8XHyK3n7HfDQD4iaJnHMCyh59v7tewUirNbi2WH37zDjyexivJoRPw8sVhtGgbRw36Wy",
  "key4": "42QAye77vmZU1AGFJsdC6fzosEWh4FWCLhn8ZCyTbJtHn9nVTB6JYpUY9bSAyS6dBnMBnokgT5FVy7JeMXmvy7pV",
  "key5": "bLxZpFaDJYuwYSZqNQWmQX49oYJ5pmVXkmaM5abTibRoEFhmx3mHxqpYW57YEkSXkHLocPrZck4aCz2CgNaeduQ",
  "key6": "5VJjGT5857GbG1bck78P5KVPreCJpih72hEdsfruRpRs97KfnemkXKamjAY2iHxnQr88TbYqKN4RckwCnf8McByX",
  "key7": "5kSxP9MMqoAcRmeQ8o2pwyK5Pcz5i9NC9poq1vStiYyu6xkU63YFAqusSPdtqdyV7q4C6255xMvEX9WiTdHqCBhp",
  "key8": "4fHuvu45sVfP3xgZbLGWkganVChd3xJmhj8RvFJEShTLUJBhLv51cu19bxWDpSCitDpa6hkwTFaRpYWurbXaFGW3",
  "key9": "4ohggGxKCEzziATfXXW4XCv8ib1Lc1mM9pprMrbhbVMduKTdSDTbYtCkSCbqAbQ8kkW8WJZVuBhXBWCfGUFz4kcW",
  "key10": "3XbSjNMvjV6npCuVTqBUwDRUEY8uq6e7zvET4QUx81a2Te5kThZLY5VPGxq71ttQnGPnF1qewz3uSCNK3YneHMeo",
  "key11": "3xunCSSSEwitT34fPQ6FzYwr32WWAWfGMMG4optn8z8xHqjoRVBbPSpMUEUjnfpfH48WMrvk4KWC7zWdTJwXCe1y",
  "key12": "3CJxBvnckuD8nwTmNKZP5MzFudRKb3v7Q5dV8JFR8qU9Kct2i9BAeqatRK8BW13aU71zBCsTDL7CtwuqcdkLL1Bc",
  "key13": "4oyrmieAny5b8br4SKsJTt4HiUqvnyRyhagciBtjLfzKpJqZTS3QdHsgkNbjsoGFMoj9aq3i5rzxtLiasiojmAhX",
  "key14": "aUnAYGkjiDvbK3VPaDEtQjKgmy9Cb8wjjW3eV6dqd6nXZc5fJ9UqYrv3sgSUAnmDfJXrGCiKrQjazjEcc7FvXEQ",
  "key15": "3bSBx8zY2SdnQMWgZwxLiA17sSUHiQPUPfPzwQZmdsV8RYQddhXjNBdeutN25rMXbrqCxR9z1psDojp1spXkMEbR",
  "key16": "3wqs5SDRqu3KkFwrQuFEtjwJzoEPALUwNFV7BzYrwbFAr7RkTcgDAaeRZdTUMFYodRapgk6zi71jEgHWvL7GhtCf",
  "key17": "3KjQBoSkKZW7vG7RYvoyBNfFKQvS6b5JAkHUGAsdhC2GyRKg3Y7Nkgg73nR3DsLJ9EeDJpAohbB4hMNVwStoUTi2",
  "key18": "5nx9n1QaooSMVtNkJdueZPhckehTDJAZSnV6RYA6CKNxhbVL7Ad1n5it4SjJnzwsCu4cBPeKKe8UY1tUNttsXVnC",
  "key19": "5rKmnSJV5hEBTecr7zePLm4A99mwruQYhiVmLceotLS4mGd7hFNMCMhjEKyWBSHPmaigJ2HP5eVV6GJ2b8hnGEPY",
  "key20": "Xz1GmA5z7qmzi3kSGazZimZZyYvBxwGJo2zsfxchBxJqKs8KrMY42DgcUqm1cF2XaZbeuhpvLLRM7x28NHiWB7b",
  "key21": "61m71j9zeRo6RmM7diLdQzbW8FpPB5uqaVf4eKtuYu7ENPuGoDYWG3p7FRHredh55uWenYEHXNnqon3U4JhPugjw",
  "key22": "4UaM1vxhWmHxpcY4qFXQ3ruYg5uamFkSUqF9whKPib2VknizZvX5m56ctsF2NvwhhjG3tMYKNAatkU2fG23Ukzf2",
  "key23": "4eET5ddpVoWg3vdaGiSbTMsS1ZX8M3PnTW3bS72oUibA8twQNHLg4vJ3Lby1Q5enXi6q89KL3ZUzaX4kAVc2Wx74",
  "key24": "3jhbGXgQw8N1XLopTwg3dLCY1mfXtCMjZvVEGKnXpCEbkQgP4F1R1fxyWArU4yjjFizRQiu23pVN839iFmy6v88S",
  "key25": "21MkWNdUUKNhhE9UizuMBXtdNKazB9vSsT6ySMovaF2JGAXyoooHVHuP5t2HuPuFeRhiVXVrzYe8AKucwiach6v1",
  "key26": "2WHD86acbxogSzApBWyy5Mm2YLABW197EWW5xP7tXpLi7a3hLMo34eVq9RKL8tzsjZmBXs819vGpfofdJkNo7dbG",
  "key27": "4P6kEUiz1HcenfXajFZ4m8iZPj1EqpEZDBxiUjVbuUteTdaKDw3PNvoDVzYs7mNqkoFJ71jFtFzNNfRXwKKrzNET",
  "key28": "45doadaXMBtkkHhNSNr7AXBUzf6q7KR9SyRa1e5MHWh5BTMCZtBptuVG8oxWWvXvN9uzqmBrhUzp6weYrTvG9k2R",
  "key29": "5hRmjpsDrcZebK8efLQ2H3kdFTcHSgHzdNdzhph39Jgu7fFZQ8j299wzpJ4hLF7DTvb756s72gNXfYxT8tKUz47a",
  "key30": "3eQ7DrkiiVxbfYFLRCy9KtaNSAwtUiqrGaWwz5y8yV6NzynA9DNr7691KcaNRk5AM1hLzGWkLaUxVkMwgJACBRwP",
  "key31": "41AoAU81rfFFZ75EfN61o8w9pW63jjQQMjKAoBfTsjf54uKbk4e5Qe9uKXJhJQf4iYgxDhTS9eCDc8LGVEeVjiNN"
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
