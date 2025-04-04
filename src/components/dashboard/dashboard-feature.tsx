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
    "5qyNMbEZk8h44sSTRHag85jdKzuYGhRBdFmctosTEL9ZEFhBPUEcfgjzACVgwmotdFumAXnTY2Cv41onKvn6UqZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AsygkrYAi16BdS5SpLuyuXjuiUeUoi9T7d6iqUxPmKZZqiVgGTTFury4akLzoybfM8F6hrCLvcC33nKdd8CwMo1",
  "key1": "4sadt5Sq2j4wAurp5ZLr9Z4Z6UjM3pmPRZhV4Sss4YvR5kTnn7PdMrL37tNC12LWieUU6hypDKDDrecVuAxzBnRR",
  "key2": "53fgrEM9Aaryn8jVV9SQ7HipAzPaFwbqWYaz8h1wkJi1wp5eVqWKsgpMbbAEQNKPL2sfSVcR66cggC58RNyJhQkP",
  "key3": "VkNF3xKuehyUAMbV84ThhPhVpN5jLQD6KL5YUPuZ9hD3AAJjQrrWoE6boX4fw9aQRVuPY5N6JUgZb8VLJ5b5DZT",
  "key4": "4nTrmdeJTabUkEcoUU88Z1UGUrMininucDCMmuaGdwc8RHdBnUrpjPcJK9LtzwA9oUxQmc9powhK2CuQqzfnPAUE",
  "key5": "AjtdoRheqyGsHSSs4SkiT76g7M17GAyZZfYgsRYyUppRErN8ijj8utmqfKTFZ4UaxeYxxvUZpBeumMgfSDgABfJ",
  "key6": "3K6mWGK8VUA5oP71n3WVQX6ZBidwWN3CHJcCtJgRdxHXL28bWGcVyfnT51o4C3b2ecz4kDZW95D5iZ8gQA9TBuLF",
  "key7": "4mvGJgyC4BVH4PsfM1NGaNgTQnuUSsMYwqqkQWmrNuXuWCu1hEz9Lh4RDH2MiHJyNWXC5tPiKpDSNZjZE6aTnAsX",
  "key8": "543ceMZeu415NZLt6q2qyYwWe2YGJy3pFG9N8gc7LPFaNHG3hwhcBdM949gTJLbeXJP75ze43L5mg2unXq6KDHwg",
  "key9": "4HbotRyk2jxd24LVYtU6kXv9rNJbGC27HNHe1otZcFyb7PVHzCrsym273bwjZ1Gy78sc6Bm4MoKfuQLP1KkcC4z1",
  "key10": "V3GVnYsvTxvhJXs9Uvzh3VoQabNoCQA21Hu6WtwzUMSzVkNYfLHGM7anoLn46QW6TzHtmgQmeBwSZwNxeHJP3Tt",
  "key11": "2A9sJNJTj3N8gMjXEFz9AoUTVh8muGAB4f5c4zqwBTtzwDhRV7MbwKtBLyXJVJKzXove2UjELYGUzuhazYcRSFcL",
  "key12": "oQDuYXKkk46jM4VREysrgixsohXNwGLSoiA96RRnwdeATzaxFRASxioWxRFqz9qnwZxP23qsBfzzsGT7t7wVA7J",
  "key13": "skTsqFR5v9vG6G5dgvnBJ2qvxrr3DJqLpHYnGy3HXkj2nBy4hQ2vaXSTYkfXzTu4KtKXEidzRzGSVLWYBamKPhQ",
  "key14": "4VjhZEZUKAKH6qrSzkMWcUtWAtikKuQge346ERHpBCkHkzipGWB6dDwzcnKfpBMkrtUDmAKSJgjQvTbP8gG45yEz",
  "key15": "4Jjd3acK3sBBtkkv9uVVhMmFxG4cPHYpTrQxpFodXDobunNqeYmJh2sSdPU2DEwjZcLm9qHg2rmC8kBsmMuwTvRe",
  "key16": "Kdyo24Dc5FmhdxTxowSH8WnghLFEZYnARNudwawDZPcyiJvZBPFpKBkBHyN7DwNwuFd83k2odynr472eX7Lm3S4",
  "key17": "5gvpShjxB3fLANLRXMtaT475KpopKgjrqUacDSLnkd2S6hmoEAqhuoCiEUaraoXzJYwugTg11K99iHsu85HBij2v",
  "key18": "2amTrsdvE3hN5pnvmUepYQZsksde63zeLvEhvxBQoPU1qRGjpKtUgPTxq54ZzzN69pNpPJEB48SUjEPWhdUwPexz",
  "key19": "2t4gPA9JnXr3mHkg1p7udrNHfsCoj7dCuEHJRvTbG9GEaofkZazrEePGEdRV5uLZVMDwq434FwJZbsJyWZCpreS9",
  "key20": "tfVMxF9a1gTeMiiN1RDVaWm366dDyu5m1MZyhPABzi38iuSowmb1NhCB2Db4TmLgioM3a8krwULCgAppx2fAwN4",
  "key21": "3piJj6NdqsBgjq2UKAsSBRTKSjQDUHXnw4XongGAf9Aq4hPz8KvdUMkdaXkEQcqKtpf4YxASFhvCNTizruggdDmc",
  "key22": "PKX8fLj3AqbWqikwVjRdQo59axgt1W3aBRnk192NprPqkJ8evataM8Wg81DHwJgeSS8bqqcvRXGWf2z7kfiNFfc",
  "key23": "4NRaNq8cVYQj5BnJUTghJDSF8ySaBces71fHpr8md6ggWJFhiTyTmcMW18JnUfXdN34kCRgsMwte3Hyyi4WdUF9u",
  "key24": "ruS1rGHhoVA9rSCodj6nD9AuT391cFE6CfnbBiTM4TTe1JM13jfTwbbctNKgf4WPYXV4exD2nRo4psBA8uvEbXZ",
  "key25": "3UuCgp6hJ3x3i7i8xE2fSXDhNqq85mBDcEcXTp69HyafRkjSaF21yg8SsN6nCM3dxReK6PggUHhb8C94EzRBJofK"
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
