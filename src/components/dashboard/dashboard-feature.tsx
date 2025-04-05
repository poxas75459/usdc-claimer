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
    "4ZzbR4D6xnPndjoUrTGMtsoASy39iTLDPLcQA1gnzETTX6YspVSUPNkqbFdzf9bnsVToGXzo8n5u5wWbre57Sq3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bWjtkAXRGUJdKVub4SFEyaMPoSphftrUQjQeZkvkbDCXdHEjjpNqrSR987UuH9ef41rNpinJZif7JsnGHiYripV",
  "key1": "pGgMAwfQALK2R5v7oPst8Ug5YZFLWgghHZsfFhC5QCY1Lwter29XNfprXnyTntYpu6YKpt2hrCAZ3KZDF2b8jpJ",
  "key2": "z4HAKxT526D5wnVGZK6nSx5R3RWZaMwKjcS4HMovcoLqkTZ95JHtWi9HvyzAjm1ysWEPp18LAxqytELPW88maMG",
  "key3": "5791GiUGXjrewuDLaLcHqQgEnM8CLfc7WVMUrcxJfJBktsMVXLQHGumZJcvjpLSEjxjH8c1joRhKuBJi6sdBmiwW",
  "key4": "bYr6oUzxfciVzPNTKf43dweLom8optGGvZgdzdduhVodTugwA4G1tvqankJT5Xis8uaHwVnvW8sfho6cHdqmNkG",
  "key5": "65ZPaxXpncUeuoVZgGYmCsafugjE3o5tzrQSAsa4QgvdnpvKcSHKXV89m9LKwUAZjB7zWy8rKXuhMLe8SctCKVYn",
  "key6": "44yigqcCTmHY79ymZHdynnXKCEQfYLERPAGQMAX3wbp7b7kMRP6FcdT9DFD4tot8fyq1k2e8bJNxDjkxiCvZt5xj",
  "key7": "5tKDNX4gEU9geeZnNDAKitofbi4ooVNiCoX5aUcaAeADVFRg28aecHPJyZHH6i7BzeCXfv69qUcgbz7B1nhNZK62",
  "key8": "2qrSbbBDfGXKt4KaWdh7dBgU3QYH1RguP2umPapRgTjhsNYHtzCurxGrt8iBAGqSXxFypmjfEAt2JGKbJ4GBYY1G",
  "key9": "4oTqSFWtBMYjTH98HbH16twVgfvw3gZjtziJgoNC73EBRnac5cpVg4x6KNKayzEiskyovtvyrRZSh1FXZKmkQf67",
  "key10": "4jpoWmjYTMcEiESAqKn62Ut1hKzdBw7zZsz1ZYv9xnwLSXFV3Evx9WD9Z71DQt8TrTdfehvoYv1PNP22FPcbB5e9",
  "key11": "EaHe2N9Yf5tMceJH6rCB6dU2MfnKXtNSE4As2bkxrmrvTY3XeVDKiiVV3v3qoA6Zf1HTFYfDLXw9JRDP4TfRwfj",
  "key12": "5ivRVTPimRpsBAgAbJy1MLVnNonNdQTDpgkCqx5S5rn4oXX7rfo8NwiBY9ujENzWisNf7pyxJb46QwA77Eb1k8xT",
  "key13": "5kjDeaHvskcmYfFbTfop2ZRZBtWS655SnqzAT7UyzihuZn3SbcGj2xkhDMaRJV4weHysGfnnbsmFuSQnR59MQFFF",
  "key14": "5KN8RXxEcPhXH8e5R1ceg62zeUcEopnwK2EtiDe97V6v3sNVcTGMFp1WGUUzhbBxR73v4WThAUL1L4kkBWrYjhuz",
  "key15": "3FchyuPGCN95fyP2ktnJ6HF7d4r3FKPeV36Zqrg7snHbY2wiMUY9r16BcmvcHLrQrbCjbsmqAAR6raeNFrGHA1Kt",
  "key16": "XH4je4WD765w4Lf6DL2Fy3jhm8jK6nZHWUxEkayJmiQDhdZ1xwxGxHZ7Vna8uqiw6Ekoh1SvAAYN1eee8hdqQqz",
  "key17": "ZLrm8zmEHgB3PzQ2FVsFjMhNetdf4TJwFSC3N83mgMkDMBEBn4wrp3UCPH8V66MLD4nj4bfvy4tGyRGdZ6Vbg3F",
  "key18": "4kJbWgebgy8J8XWNbaU4PneTYEgzkVKNea2f5FqVXhdPbgqJ692y6SLGTaXoTGjTthqpS95FiGLpFCKYjgfe7zUn",
  "key19": "41yjG1UDL3AXBeiXzi8o95g1dTCp3o2Vsq9fYbuhDUgnsoGixS9SRAPWCV1PSLqUQ4gttxgT7DR225DJkeGr8UNW",
  "key20": "2CqzduMKdNcG7aHBfxJhX5YVscrUEu9d8JbDaHyh59gwYhq5vtoH5TgxhvTwprHCRhW3CydT2PFfMb16J4qthsqF",
  "key21": "4n8GN6y6EUhKYXkCFUUW49ZyU7YkW2NiQxdGCQgh18u7tv6SrFBpR15PkyBVqmjJmQRPEdtEdcnYo3ahA1cgoUWx",
  "key22": "5vsAJPgKwJ8Yg9uos5vQrbUeFa7mQDhW4Z5iJj3tykeug9dNMH8yJtFq1akoGwytSpNFqWNVg1fxht3wTNwDbh8J",
  "key23": "2nsxYRXUvHJYFisomX5a6Ntt2JZpLGYbvTzQeU9mGkqMa8tCsU6GKNT9KmX6hntPkH8MwvKtR4SjXVQ9SSM3m6G2",
  "key24": "5QLyt4MTfmngmH61gghdNRp9pfCsa1njJENk95xajadMmXs43ETVv4zoVgHCJLnMkitFveEjEjXD7e24NfFoq3rA"
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
