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
    "4bybU7QuB5n7mkWSNTSXC9s2eZa5nn33Ve3GxCWxzMEZ4grqmKDJ57tkdSk2rkf8uUMdCvyNXYWfnrDcksPmybWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oUqoWgUKStqALm5mgxnVEmpK4QdoaF8kQ5rjx4m5NQeAhX2G843LennLTLL3yuopsRDUq59DR27ZKp7gPN1bnQn",
  "key1": "4XAQVEjKxZqnF5UKTcwhVzvsKPW55maio2zRp1UL3dkuHr9tfkKqoyitf9hhWMnrgbXTbvo43rvC4sxZiVGZXwpD",
  "key2": "7WXW3c4PNi4DVf3rAv1HWJDUNhtUwqf3fo3QqheQANjGvvp54CU3Ea8oUpMpPAYYxj9mo8nSgUSDAmKkjen3dxS",
  "key3": "4ABopNH5zCYJGHpL5fLBE6WbALH4SnfsgxE54Cyyp52g56cMnKC675jgHqfNrR26HFamdreMjXjYQLBAePW52Mfz",
  "key4": "4QmGp7dNCPboMHcA1t1uUzfgGNr4nMKM86G2RQiUFsZ2bXvJQ4fD877mSrTNZxMoGFMT4u9h63E8WUm92i316w1Z",
  "key5": "2TJXAvZsPuTQp2UEHQRTcKSaWGcpdefnNyipXEMnDUTnNMGNrqcjT72ytuxvUDA1jH8wtT1ovGKhbye5nwY7MmuE",
  "key6": "WdYXDKvVDofKNQ9B8T9yWujtD3HTxo4LYBew99FuAdXVQzn6RVkwTGAjsuqZtLMSrwHZemZ5ny2tj7KG5sW4pCG",
  "key7": "34o6hMAccz314iTCfM89W2wtT88c3Ba2RacQdKpxZUE9XKpnduU7BMRrodKCDEC2XvsNpNMMkEYi8BNMaaK57KbZ",
  "key8": "37v9oppZ7LoFBk1nDwK8wMmhNKXV2dYnnNnKXkzEaYTwfh5kKcdBGHQRkeA8vz8i5CUmtofSrrvveGxWsni7kRb4",
  "key9": "2UjGhhnXH7N37nwgtNrVqiZQzL4DpkUkHRShUzMjrBdCdAuu6oHv4v5euyMzPkC76XAWhdUF5bvM4UfrHoBNASmJ",
  "key10": "2fc4C3grFQjSVM5a8aYjDuhAG3iYoheyNHovH5qi1iu5Be326HEgC4csn743zGgkmBBFnriSrJZQxbjTgAJdbrCv",
  "key11": "5k94rKLidCXGCJFxPYZv44aHLxdSDMxApbkstFHCbwMTp9cgnAgDdJCrMEqY1Ec65s92ogwz3r6MpjYH1zd1Sy22",
  "key12": "4fSE4YzqhxUUdaf71v6xtNF9S9aE22E3psNRcqSd3ZKwy5U9gUW6TiF7yTbgC6DArFXNeaFNvBEcd3nvibuRs4H4",
  "key13": "5UMEzRiBdRXCphkx7XmfGtmbmAFZPDPYBC5djsQUBubkx2xjChaMqBVksSrXJYf9FsousdeNSiF56oSwifAJe4VD",
  "key14": "3SBqUTjgUrmT9W8jRWgKBgEAsZnVob2PQq912DqAuQ9236EpFsAbRnTMhXBUPoD5DqR4TXZj6D8gWqy5rFUEtGyd",
  "key15": "5NmVGvUozcPoPSiRMYwZJ8bpDnguMoVUKdUDd5KfBC7cQQnzTea67jSmHeBU9RuP1HphbqjhkjhSpC4thQYhCUij",
  "key16": "47PZtWDm4tXJEejrpxSNkvgaee2MorKJTNzZciZfyQGdk24Pife2U3urSLH5FhhuL2ABFf5dvoYJKesGzim2EftS",
  "key17": "VvRfRGFq7ttWwqAQpfhYYaj8B7PZWjK2h5jBQPFvk9d6pUfABzhAooG4Kz95UDJZQYeAqReNF7c3WAGbY6yDtLV",
  "key18": "3eZLf5Kcwi6TFt4sEZEu2sRzrhFNQQAHrBnrV2FrpdDWZuRDYvsv67LW3UMvKdMgkhcKvMqN4L8JBk9VAP8xgKaG",
  "key19": "R19iHe47Dz7z1QAZaW2igZUXESuijTeWXFoPSA42EukbQ4vmvbRM2Xdqw7TPqK9wRwmRH7cJEd2RL99XqCHwwVv",
  "key20": "2mr4fHSnv9ytGZXvnHaGyPvEuHbjCaoJZn5WfhctFEmEcmoNJamjkTnDn5P7s51rDMKpEgcHB2G29BtjGnRDZagz",
  "key21": "ZdmQB4LAUSZaAPUoCdf9Xtt36hyjktgZyDtdtToBF8Cfp7yHEJp5KY5iDEXPGmr4ix7V33nJRNaS35RZwwfcDX2",
  "key22": "3gPf22qP5EmLjnCW5vRzRHZrJ1nRCfJEWJJzHFfGG3qu7EYfjCp9KgHtiaAEho3UBCzTGtfRTpQPwRVGDCxdE58e",
  "key23": "4C6QBmiZ58f9GCQWUCug1VnqLR1NEHvH7yecWxcqZtNfAHrp5AZPzYFvaK8nNARfMqBBKd3FzT45d5Fr7EtBcjHy",
  "key24": "34x3673r2MeGZKAB792j4jchWLkkMrg5nu3sbGvX2A98R2yhxHJcS3QxhfQyGQiAE6UihFVK1FGGHacd3hv3SoF5",
  "key25": "4dqGA9vKFJNR6Cm3W16QztAPQTuS8cnebisWUy3XkRjVwK77U1yE2oAky7ArTqVtpZ4LDWhaqgB2Do3hw4bSNJWU",
  "key26": "2j3koKPHNJXBBToQaoCXttPxMu4tMScEfxQy37WqWVebpgA912UjwqZ74MXg3KicHAxQ3CFz2aZScFe7nGwhqfUX",
  "key27": "66w49pJFzY1ukhbH7idBWFz6cegbhEtXKymvBoZShTJCC8QwBkZkntkAUoqRx313Fqc1Nq3XzrjgyHXBQHtM5NJN",
  "key28": "4JtjrJb5vy6qFkzAhxCj12GX39Er5ypbKpMYeUgMp8ZFNEVP6VL7wsedqJwLi9mXT97PR51XDeXdFoLudcWC4f2f"
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
