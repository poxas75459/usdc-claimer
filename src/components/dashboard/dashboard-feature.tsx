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
    "46cYrznJUw96Qpgw3TiRjjSZ3Nbreh4hAX8JBjYnqA6oa46f7YHze2zewKgnfFHFbd7DDUBjyUcPGHeV7sNE9jWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uZrSJSmsf3mQ8puLrA31bjemS2ZAfJoYF6vSQznm3yc4xzB8ibFwyCGSKBMbwFeQtoJPvMpkcENjm7eMqRY5E9F",
  "key1": "5zcfNTmKHgDDYH8PuPgGSNGUxGdn3da3nq5zZ9dY6fgRwemFzLbmPja72V9wodajqznxfhn94S7pwHWDisJeCeNE",
  "key2": "43mdapwRWsfndkXWzSV5vTpvkDpfx8NehyBByPJuqabvm5cy3bzj4bq8cUYwAzZ4D6mZqjHEogxcUZg5LxW1ZA8s",
  "key3": "44DdxKHHWKoLMujepTeTvoKPCKY1Xb2y3fSR6roHzVes1pgWco4CG4M7yfXA18JXCJxdK6MG7omX2JMcpfvFiRXd",
  "key4": "3oJKwbHrgpnaScDs7wv6aWB3AdozAUqrCJemtA4YnVFvZ8V4GWmrYpugrQGCSVZrMv2YQ714fjTah2YHKFcA5b2L",
  "key5": "3LPevQM7dJm7Cnnh94pvRqLtJGmicDNMAxktsqhmT29pDMe8c4L6wJMtKnpCxnnFhjL3SPKy5Qb2EKYf4Pgm69De",
  "key6": "2hzU2B88T5UWYJuewr4vsN9p1QHwn3UwV5ssV6XLzR3fo9bSU5YdnDQD4jXgfxGVSDs9kyjTGqSqyp2aLbwbedbb",
  "key7": "3g1x7Uimt5adCfq86G7Ha6f6jTPUqcNTHc8u9D6XrZzsAkpJx3xvXFht7esScwoyDiLCAVqJAPwd8F9PkmM2yTcL",
  "key8": "44tcRJ8uuDE9mRVi9VQHeyHgod3MuQNHnCj1VEzRkfogdnQbhTTXQXFmsT18g9PmbjiczhnwfGotce4cT11i1LL",
  "key9": "4SXWZ9pxGwka85uq2QoQUawaRn6vqUkBL28KR5LNZiVs44Y9MASo83qgV2Ffr1NeN1jipwqw1YeHpN4cxDVkMmJN",
  "key10": "YfojBqV8F6DV1cpzbSdMYvo22ejqynbnWYWV6AoZYMnoVMiw5wFRLr1MeTiJ6j3KNMrV2zgL868AropGBX9JmET",
  "key11": "4MAd4sPFAuJDX4fbdCdKmsPmZnzCr9C69EZp3im8TwiixuToWY2RYEo71WpGARXRtzWRaq8qnNgAFJTuyBeiatz6",
  "key12": "2GQ8fGxwrwAxVVzYBxCR6arSjJ6XYs56b8ZXtpHZeSSE4pciveodLopE7dZVzkhm1UGogSGTU9LBjtpG4aVWSdmb",
  "key13": "cLumLnMgqwdjEfda7fv1oze55Vyd2XZ2qcNA29gqWKyeoZwx8CBprTa2DgKWUPCZszM9DiskACEfDFuQVpDyqJY",
  "key14": "3D9LbHaWmcSKH9z4Xw3EZ9ZdgtjQpDSoYRF3zhVSVWBL6b3BEnxaxnoj3gKaoShct8bn9xK1ZUvkVXeFCFVUGd1f",
  "key15": "29bAdqvPEkBkMCAJh4FyqJGn8JdqhffCBycyFHRt4mKhUvaGVxBExnaSqDwXadi8dWZJGgb6xLZ9S3maQcWoLPKf",
  "key16": "ovK3mSqtqRwAfyaegWSuHLsq9uLH6yheZvNc3KqexmyZBeHUFM1m8ecrnjdN1QasR5378kVMkRwjtoc537gxHy3",
  "key17": "646L5o9umMYV5FayQHCR5KscEptCj3oxgv3hcrSsWghFPBJYwun42u5SY9hwHRGT8pWr3KTbYivv42vhgBku3TcZ",
  "key18": "5oqqnJabc3xn46xxs7BUDT4jChwko1CY9SVLrEuWcLYEvbjSzfVbnbULFVMwxaSXto37bMgf6NKM5C2Zk3AXwRuA",
  "key19": "55jhYFZFx1sN62ihYEF8gMtZGPjtWHLHwEHxaJmf63dBukFTw8gMv4csEDev1Xh4kDmfCwy7Ho13fnfoJH1gxeXx",
  "key20": "3AzbTz35bVeAjmbedypHujmfYtKouvMUT5uXoPo3CzCDgafGdHQ5AM7uqVYcfWF8VB1W8vnJrppFBxLcmNSznwp5",
  "key21": "5Mk1JADvUXu6wnaKRNsW3BE8GXwMg3pbSf1yP69BvszcKPYeTNBSjoppakrya9W5so4i7VBmyyLJnbQf3YnJB3t4",
  "key22": "4535VJATnzSnmm4k4nsaPVChnN7esf7kZ9s9v2bgDEW8kkZ2A5B93dnVfTwoUcdQbmpZLa7QaZcM7j4Zhs8WxVuB",
  "key23": "38EZwA2462iGLGLKakQTDNWuPC6LPLroyzFzyW2Txp36MHKBEmeX5KoWx5nXsnc7DFuLsw69dYLK3zrNSgZ6Wbkd",
  "key24": "4BbceVbsdmBWcUSzT5LvrwMkqEACLQrAsUdeAzvc2SiN2LUcdZzdkPzRFXJjZVYbW1ks5DoPGRDhKLewFwZ1bbPq",
  "key25": "4UovcTmFoaXFfaaGrcioRZ5zoZxopskVL2vFkWveMwMmJjgo6GziTdi6tA4Gajua2XcEoks8ZD9e9zPEdRyCSF48"
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
