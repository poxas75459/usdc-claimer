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
    "3hwT7Nbav5ZoiAGbNZk71Z6UpJQ7BfMp8mt6Cq25VVTkMJ3ytYv1vgEP98oEWMUBp2vy76YKA2sUx7wvQk26XEqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tMEUFdspYACwH8AgCnREr66HJghCQd5yWQ8Ty6Zr7yioKRnddtaSwCkTfCxomjuguFF1gTptHKYRx4v5BzsehhA",
  "key1": "unVW6F6W1vSyvahHhDwvXGEVE3YP3DeGPsHtHWr6kLhVvDDFp1CvHWvt9S1BkYdiqeTv25MmuDUea3YdtYbL4qt",
  "key2": "3oYgMJZMf6S9cgQxKH7vQCSo9hbc95zGvqqcSJLmiiWzjDevXnNuksHkMSGoAAo6geAk3aZQpVmavZWmmqD13ugV",
  "key3": "5zNyhXSaiDAwGaoQ6AJireTJGgJRJ1LW5TrhRv4wU7DeizCp8BTwbUPLaWahH3tT9xFzy3krobZ2NZM5Kik9gNjH",
  "key4": "fWNHrCd6ybWzvbeis8H4VYmzTk82yUc1bJxm2UVtN34LA2NBWLtMeRj1uAxMTpLZr7QkVL23mpJSn4vNDXhbWmu",
  "key5": "3wHPk9xFR4dXzxrwkcgjSFTFYDD43pTrheKwjsxiM5sua3MYstQMLyHhhw6M4HHqHRKJv7Wy9AokLbkN8FbuqNXw",
  "key6": "4jQBGc8nL4TkCtYujxhy838scaCA74SKbt9sfpCnkxYcRYjQsoqkTj2AHkLf4M3DwrLhwZdGdAFCEUYXEY7m77Z1",
  "key7": "4qY8iwcg8uxkSCu8nsoG2Kjj6Gou1yhCw5geEqzTj4EoKcJqkFNbAohh8QjT7gosbsgFEpAkaGPrFKbSUe2Ka44M",
  "key8": "3vf72YwDvVvvVHMQyPWtbkfPh37wGuqMEDYjRLbdQ8MCyeeSBtRLH37vz52U5ZhftKBFzxcLf6793uh2zpc8nxPr",
  "key9": "WBZAc5UQPR6m74Sf96ziZcEJXm28VXYMwvw4ifwQ8p1dt7poLDRcUfpyq5YWg18h7Txsx1ABqYCoqVhMuwckT5C",
  "key10": "5eYZQrdxGSPvyEZ9MNnLZMuYrAZb94B3kZQdArFzFerVCZ9b4WXpgybDTAAiwt4jqbfb5TPAyU1pydShYttkZr6S",
  "key11": "3wWwv5Phs2ykTgywVbLf8FXwizDXLHGLiaQekJn7faYXsgBGj46Vt2RTaaS6imoJYRrshkkGEp3KTYniFjBU6UN8",
  "key12": "HjC1GcvWav6Y8fLnvDpTdprfB1AohhGfwiciKb5t47ro5YPSQwGbvQHru26QwX87Hysc72khVhvZxWt5Far7sK6",
  "key13": "PQ2twfah2iSUzA6jDnVhtBGMwLcJDpmVhSAGdfnYujKhEaaijEXq9iL89ornChGnRgnTunchyec4NurzWCLUQt8",
  "key14": "5RirmAjCDY71z7JZiAnmU1Bnm5TE4YxToLHn2oFayQ2sGYBVoYPTptq9pm3YpLKfLzdnwSNLhffBeEaB3Lo69XRG",
  "key15": "3ANWAiLkR2p4LmQQ9iGX8JvV8JfnidcaGS8FveSKvguiJg5JBpgKcNrisjW6SmkJvsU71PqYoxERfK4SdPWTW1P9",
  "key16": "2XfvmB1X4nR7dJjc6rsJPoKnHNX2L5UWib3KGXoefM9YKoSewnGKy5i5LEsXTcGoBF6SpigGyP7PZY2UAt1iNmqT",
  "key17": "2zZy4cN9qCbNgdbWLSHBTL3YpNi6D8pJtdqcwk7pAXzFbLF42fqjLEGbzAfbFLvwMvhvTMDXLC6E4iKjbZWRHyom",
  "key18": "2v1VHNiytjJ83Z9VhzAKmDXWKhfBSc6UqJW9ZqaeTXmuWVntWpyXzrr5F7mekhz3sEJZi74oPEaUyfTtYwVvcthW",
  "key19": "3eLbWtBtuR1663mU25xy3ZUb5f4HdNks8Ga9JP2GyxjkAMG3BMFNSVLhMTWEGidJc7jXw3kF65b1ZQeAWUq5sFJo",
  "key20": "3v4Ra9KQYoXbkBye2p5RLztqNCZ7ntRsKtnV5kjyz1CDgnWpigt9aEdynVT6JVzGKZg3wTJ37Tv5AuwuVsqaJFBH",
  "key21": "5Qy99arbdwQHWMsSpPzNVuTHepNgmqo4hz8aAYPjLedLUkPD8bYQdoesutn1KoPnZpUrxfRRCLy2wF4tcGef4gcc",
  "key22": "3pgKqp9CE83ba3jjFDGjo73ofkTtjnUDH8rqfFmhyCPwa9oLGxn7TN49cMAP2PXRoWWu671hCGAM8P8AL71ntRy1",
  "key23": "2n9Apn3SfsJApfSYx7AxQeJn6wCSFthHmLYQiPzM2DTJHsNMnmuUAGyDV8YqoFiytgbPk1VEkjnKSuEQ8AkM49Fz",
  "key24": "iiwaMXJgSiLFPWK9YsqkauxVDJU5KUjEwukHrwuFNoEA4ve7tUtpY97uDwp2yts5Y3AGreao5ZjJ5gx4miCKFfA",
  "key25": "DQaSQsfXhfXY8LM46xF7o5C3rD1f4yX8kzq5eVbrFfL8qPRsSyN68aMZ2TijWdEMWEvT9whoxAWwnRGmTLARSU8",
  "key26": "38jJ5bS2z8nWjqMyTqpjpkbFgmnbiVWafif2YFvR9zNaDNXzcgmqxrS63MFF2jttx3LSfKFD8aSKME1BNMueoLe",
  "key27": "5bRYRpRAyzQpJ5CBYgPxzqLEn9YaTHhDc94kDAcJdx3WUpPSyWtUer7kF26GSyssapG5TKG1q8V9BwRneV21VDUs",
  "key28": "23vZkBPn4sWoAgyKn9xaD9ecesdCWTPp3TvLQxJnMEGdBDGbrhArwzH5dLVKqrP3q9ydLq8a5vGiH6RCY5P18wix",
  "key29": "6wGvAX9iEBSpbq6QcFwG4gMXkMnzQUS7CoAbPoma2QssQSGb4dnRknDjgmFut98iSQQQhiS2yHktQ2Qqsr4ASEC",
  "key30": "5VkTvvLvYy4T1VrqgvDysdM3rE8TSr5BHgC66s5fbJieP2XEy4s2McuxTuY5pbg84qUkhEsMoqPKcTXJWGj9YN17",
  "key31": "4GSzDDJucHKqEjw1233B9jo9iB8xdShZquwvLngYRS8ReMUHfPXD1HrpVMBqJgrXtwy2B7K9p755oMo4EoewN1FX",
  "key32": "5bh7uFfvjbmsyUGRK8qRTYaG1DAMWoY6gxK8JyhEheWZQ94YtBTbjWzXKpqJmYEZvyi3RCNeHHjRpsKZXnSxL6D",
  "key33": "2st4WVJgJmZVNfs6LGMMcJ57Yv3AQZVyy6aLxJk1xAT6YcJDZ9YRJUsj4mKtRJ4nMHKUH7eG94iSU6yF6qsQm2aP"
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
