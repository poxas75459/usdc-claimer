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
    "5QTP5ih7fZCEkTPakxNfkNQgvdG31MAJ5c9G2YkEut3wuxaWAD8TZPo7W7AbiJp1s9sfqtj6ycU1mJWVA6F8zYAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yvDJFhpcJG8eu4eqeHbfdhCU3zjXigKuovWduL7yNUEh53AfJPAvmNgxBmppeiUDLVShqYvj44ZT8zRFFmoXZPo",
  "key1": "4EDEMWnHSmM9k16rkRuFnCjZNNn2gB5PAyZKYiGVUNZDAaxaQjGZmPBBMtZxck8g15zMbrU5dh1F94QN867BbPa",
  "key2": "4tEvszCPSE63rcfQMCWeoPhJJYGxGY8x48ERzNbD5xbrS8nhuuDyMTW9vgTqQAGvmirQJ9xLNGVRsw4F6bwsrNNz",
  "key3": "2nAPUNYNj2dmm11Z7gvkTEGYBUuMZ2L5syKFuXrGfPeY2ALiXGeHG6KuYoxJqBcguA5yRPKZazXddJCj3ctH25uu",
  "key4": "5PLcdo11sZMeHhjAYYcxUnxGEJD5dzL9rt7ytN4Lboj4nW7Vg9rmbFhhsgrZcoLxSxpAuW1ZXYRp5ZeQSVKccEbB",
  "key5": "65RXC3kMN7nVR7qyiAmsmA3tgMfsLnomtqt8v59MaueetvDt6ng2Ye5wJfX4WdnUESPg4iiaRJb9YSy1TZQuUZX7",
  "key6": "3oSbbA2f892gDYmwNmjtUCrgvXGXRXNoELird1tqFVgyHPmwbnDoDGdzwW7H2Vpvt1EUVmKwQW7ae2dovP6TLXAJ",
  "key7": "28AWxoQ8kQh7LqkRMMgwzRPGEL66XP9XRBnVAczi99KCs1o8zntqDzAH2ghRbcx4pJp92SdC8wjuHejEkFSJwfgD",
  "key8": "2UgESVAB3fuxCPDtsZNs5CiQyuej1bi5wujwPPf3SR4sp2aCa8zg15dGhD5BNa91nrq6FjUmiz2gXgmQvadSShGz",
  "key9": "4B8a59rAZuBf4GZKk4Sre62xmrV9WE2VvWB6gwqK9EpDVoS6dv2eLKWQqWZixc7PmjSnTARvvURD85g1XJpD3gFx",
  "key10": "44uXP8mEMpSE8qgemyrFUgtCXFvzX2WVBfDNydc83EknUVgBpTyBbXBXnwrpw2FBEpg8j816cMxmrjFUXBCVn1XV",
  "key11": "3bZq623o7HsQJ3SSsEmzhBUNgVrHLt4QasPDPndrmpg2AKrTpfrhZLYFtA73Z7Hk6k29bwU5Cdvkv95gVrFdjKyG",
  "key12": "46KCkCgtLf5MEmYHvregvotBkvRX8wcMB6LmHYGvSKRHdxq956zD3ZGgDwWVdH37YbseftAa2XB2snUiqaHzx6aS",
  "key13": "hh1ozYEQzwU1mjRTcfqjzrLHdB7R4gRALu7KNj3m7d7u838qkgnMdjxYY9XSDFSAVcpFS7bPnn1uBQmDcpm7HGs",
  "key14": "BDa5YYKXkxtvuVx9vr84q3NjohVn9RwQj4vj9ah9TnKifabudLPXTf6FWtSME5Gz5db6LhzkMq9Sdq7TAGqcedV",
  "key15": "STFy8hDRjbGtyvHbodguZJTF6VfT7wRz3pHbnw26irpvR1pNa6F3rkW9BUNAifPuV6q9JKB1hLLAhDqRkn6CdMw",
  "key16": "2NiKqhnu1TxaovmhouTcic9iAM8rN4z7yzKnJqc75DhpGw4pTbKTF8CL7FyS3XWsvN8Y9S8e9Rkuhc17DBwqWSsY",
  "key17": "5bcPwLAkpTvjCkfs3xbJLwGvg9EjHPNdswdMCUvGbUV1bmagRy5ii1NoSXkggjEbfxfVWhNG7d3Ja7QFgv3Gm8tJ",
  "key18": "K7oe4F75dG7UCnAxn2pHVGUAmMTwp5eo6LzaovE2vTaU7piDLmJVzRsgkBBww8cj5NoDg1Rxc2fXHAKdaJnUgfA",
  "key19": "4FpZYJpPiyYTDhMEzAA4bZUrbPF8TPpCrT43G9Cai1jSRCEqwny9koXF8q5tpKHEwGtSWmmgWrr2HSEwo6ZHsUSo",
  "key20": "3gaTwQ59LkUaacieQL9XcJGgVJLjP9ev15K9FmhUaiPJVrutiK52He1cswL8Apf4uUGyXCcZBb7AyYfpwPWYvUTv",
  "key21": "59hcPQM5Y8M7ghkBiWcZb6j8QDiotAQzbQwbPXmf98NcD1Lhn8vyUGUCoNcJP2vJ183m3r5YPMuN4PWETvsj6n84",
  "key22": "4rYfLPgy1fqVLyqrwkhAPKdrtAK27c2MaYt35n9UuMEQ8rY8sMoUvauTikHMaEs9YaSkbjSNqn858Kg9ZjNWz21",
  "key23": "3YtzouX3YwhV8ZgwWzsJYBXGeeyk94cucjS7DbzTNdBgVGVoW31yikrTJMspaZ6eNeNHeRVM6JLVArfiW7RKHxpu",
  "key24": "24ZdZsWwuKwXDY9oiaqP4VHd5HrGQLtcR8QvMQmgati1BMtvmNdGsZjhR7ikUxVmxtNyJJyAjAirN5GZy3UpNhBd"
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
