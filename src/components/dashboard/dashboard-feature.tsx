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
    "18vcrzYMNvgWHviWk7a9pC28xVQHsvZ6nYDk92WEDJsHnsdmgiPte1TD7yPXhstj97XuemQsUt4Eavb5r3BHe93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YwNdRt4MPrQfiuJaSEzT7TmwNDQbHbiDuhoDxBocwCPcyeqRZ7R3txzFfutapEfxCHUFbrrX9YFGLqYdQRY79u2",
  "key1": "2ri5s3xcMCvtFLMwHZSsuHxLioRjm1XAmxWb9EX5DjtyRGj2AYEULXhgj6UsG4tRcTg55TNmqqFAHQVbKB9EfM7E",
  "key2": "63sMTrQE9Hp79ZjuPFG68xczt3aLKhWgNvcmsgP7krFcXXyCGsALn7buQX3SwEseJZ1xdYJqKPGkPERv4Rf27jT3",
  "key3": "4QAzB1wGwXB2EfiRuvddJ9kUFD7DBepTicLc6wsSUawaRizmt6hPb62WYEdun7HEz8gdz26yavT7Jesv85PvDeu4",
  "key4": "59wVoG6sjbG338wLsXQUeEztGuTvqT1zPSY6wT17mggEWDBSKXieJfNME8C5QB2gEnJUwxnUHRAVD15tmMZAo5qL",
  "key5": "5id6N6Lqy4wf7d7X55puybmi2c25xtnUiRHZhrn8CFmbzeoezCNEjW3gVsA6XC8gypMzGDQ2yASdJs59pqGPceYW",
  "key6": "5Czzi2MPpAEdZQRdqNtQkkdbVUUQr1MHGNLMSaY3q5UiDHW6NziPK38vy6DJdisKqJdvKpPDtow3sGVGQKpLauzd",
  "key7": "2cYb16vdtcGdn62YcbrqxQ7Yq34RSbV4ps4US5PRgQ3LR8pGtYFtmcDtQwLAWCL9M6MWm392iHPsQyihYmmGx5gC",
  "key8": "5nQTs1wsZKBosDCETQiD9x43Y3h9pGKtG4QFqtmFY8EVrqAagXakKQQ7aHdRujpBoZkfHssxdgHXg3fQBoNcGcsh",
  "key9": "5wSM7YJS9TWrKgqBLsKSfxgsRhGnEmU98BDLptKBQuyFFvDZj9JqdWtcDCMUdmT3s9RzT7RnqozW9y6gBQvdqg3G",
  "key10": "37mNtPGnmDqS1JKjvedPgf5UmPxH8H8PMhQ1pfg7gJiSfcQUuF5b3cMpxFGn8e1sdxDRcLA3f3uub2QwRfLWfjKi",
  "key11": "m7XTQTvvMK8ADX1YxzxJzKkmM4J8wvg5zbY4RScWwkgiZzNCdXrPAxte7ZLv5SSKGsRYo7wbhabyu8hW6jQXdkx",
  "key12": "352J3m4gnerRdu7uwiNDEqCvoweVnp38qzt9eaKPtyYYPkjR8dmmiWRNHo146NjxA36DCR7erRMwo3tWKB2wCg44",
  "key13": "55bs3AkKQK9yWUK5vAuA8E1RBRkfaqFtMpBJCzv7vY2fNSvNZs3hh3H4CrptnEVTfjRaa2iJdzxHkVEKHhqo4ATr",
  "key14": "2o8zNXWvQBFbBDRMuf9PmQjeMGjaGSd4y8j7G42a5dgmgGbxrkQx4JatFci5dKVk8KTjeBnQqqzqm8iXKyh37udR",
  "key15": "smhmGbCk6BpoUyH6b4gYkRv5JRz122nQNDzjGVw7UAwitrofBBZeWW6s7PG5WKEiY3ZnMRtNvjjcRWJWeLH3m3t",
  "key16": "WQXjwHKqiGZCXmgdzHs9KE55pEZjNedkWv4cDobYgpRodY6mmBPHGdSkgYJDmu2QRKDkGAL6enjai3MMu2TUiN8",
  "key17": "4z7yKEtTpPY9fxZMxX1bjfXXU9yKoQXrSGQzETgRTRKjfhZyCaCPEKETdyiv2YDMYqryy98ktJYzuFaHUa6XkAuW",
  "key18": "4VdgjdqWCTKLqq76UacfnAxLFok55y59jRgcoDrxyq4xnd2cBTZLk3KvZKWjtpMMoLebjpMv4x5iVqdcMjbXgKdp",
  "key19": "4YcXJfPa2VyvGKwR3R5awmrevV4QD59iD1qgTbT4QtfCv36djbWkif1XhmudDUwhT2PBuzSmFTdLwX6nHH4Ux2Ci",
  "key20": "wViQjkbHBUN8pUDnhr3jzeMhMGEoLjazLtFhRTrJ7bDnVzWzsMWXtfBawiwS6ibEwAve3dKQHFokg66RxRUnkgB",
  "key21": "2THgb3dPPRGyjG2uEJEeCYQHc4pdn6rnoAfB6TGjk8ZzNv3guEXZgi8xZbgovmFrHnkEcKc5EEQ3rQYHC3vxrxVN",
  "key22": "4tiYsZfqVU1DGVYcyyYiuRwdTY9kDMCtWmgCzqCGRUsDFvFT4qnK9U2SWb46kD6zB9cergyk8kdJ5u62H6eYX9U",
  "key23": "3sAyrcS3tNurJRvxgGASdNDYRCNoXnP7d7Y1okVD3inVEXWza9rbxKsgLodN3MPXPpKnhhY2keUNf13JJNqnYDhQ",
  "key24": "XGFCBSKcNcYsMYuzAVACMRpYsjHvgHRkjAC2HdbPLcUgN26kiT8NUrxshvKPyLAPGp2VsBoWWKLJjnpyYgzra3K",
  "key25": "4TnrKbGU4yf6tmoQkeQiLiEvXNNt3MxzaQpnNa4965KnDuxcTiWFTtAFZyMWAv9ptVcyT66vkwJdynsUC6G8o8oN"
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
