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
    "3dYUEF4KaTVyj2LDNcp1qXoJMv28Jgkx8R2uE3fs6EsiqRXS3xwmdfceZk4YgSnYiw7JM5oxQfj9J5udEvZo1rm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nj8MSjcckJcmtxgkp4FGex6VYCnDZVG8d8baffkT8es2LodiiUC2aVZREh4eqPXcEuDv5Vf28W6sRSZM6B24PuW",
  "key1": "3T8arENfNGwM4YvqTBKYbjvrnGq2gNvupSQJ1sjwsVowq16i5xGhto88gjarbRWoV9PJFg97GcRRjfjT5dfxxGR3",
  "key2": "2opmRA32NgSoQ42LiwcwoQ9DFELcbLDULwJps7as2zw2vwkqSSovNvhFgq9xYhLWs5MPr7BrTe2EPUPKzttmL6VZ",
  "key3": "5weNWrbCHJVHd3sVQB1yDgniQUEist3vShWA3FHfwSHgUGenxFWZ3wvQMyvHEiD838TaAp1i6kWivKUJeZsD4MyX",
  "key4": "EoopNAgoSXSrvcf8wPcvgUHp6FgpPUqW1aFUj3dnqVMzSnLMKs9dfAr5vWsNLHow5L3i7AYrs6KXXDJypDgAYgb",
  "key5": "39ggCYKRnndbJpKDWGBGoj3aZfeUcoQUkyswKngKyc4gYDcr7ncRrDWKX6z6A5BcbA9rugo3HTLNTeTmVVwUZEKR",
  "key6": "2Wc3fjiRB9W5CRgeMewfxkEkgdjQYyDjbkAkWijXdxqt1y6FmMfyyGXPCiHyCzAPaCvCmGprKVnoQpCqqH3oPrMr",
  "key7": "63kMFQov6UZC52QD8axoD6KfYN4pgfNHav21siZsunDsYx2JSCiqy6838ysuHdgtHT4KmHfUhN1DmzFvVKzAHsDs",
  "key8": "2sahkBaKdT7MwjWrqF69XXwBMJcRvjzD3B1hnNFYiGfDj6zYEShqDCF7fkoAtfiEth2BwPSBwvxGtKH9hcqg6ZA2",
  "key9": "4WkmAWoUECwHfPptDaooaNc22NcUuWczukmrEhtvghpnPsKFvDnjM5WoyWT5x4rdhZgykwD5P7D3NjRUdJL8QSmF",
  "key10": "2DtaQaJahMFf5ik3HjMPeDEaE7wxqUWMwMjy76LnsERzcd9DqJNExC8on4ULyGfiHG58m1GjmdSteBu5jWceRGWC",
  "key11": "2Yqb5sRFadRt1ZvKt3HasZbhTXXUzR7C4ayC4BX9UCLymowJHGLQNkkfRwyoVs8DDiqJJnLxUPfu1EMAnARueUcU",
  "key12": "5L97gyKH8C3GeXy3bq1URjXQRQLcGckhZ8AJeSTBbBb6D6LPmhq1x1PdQGccwjUgiDo2bR3etTzx8s1nM5PXUJRW",
  "key13": "4b2PB4NrEgyX1czKAN1SXbx79pJPdgd9pz6Nr9VRGXsUQ82xy6VpdXAXbHVNo3fhkGt8pc65T3SFCHk7pYZUyUiD",
  "key14": "2eTFF3wmsywrDvog2UmZZWvFNsh7MhU8FaSxbgwVFtTGwvjoF8UH4wUQw4No5mFxZjxeCkVvTraJHjtBJvPpxGbe",
  "key15": "5Ay3pPCgjDoXsujZycsB9iRx6erN5isszP5YcScPzGsVBBkAZrwCzHa7rBd9yj6AR2gCmykAZPVC95gUkSBLhqK4",
  "key16": "3hdbfzoRyXCze4uu7TrF58gVFHhkvMRLJSwMzpA3uPgFn8MrLvEXiBxtZ6trZarynmtYEQkTQHr5GpRmTB8rFxmL",
  "key17": "8Um5J5buKgDYDETLGe1E2nsAeWD2dUThrJwgmYBJvRnHDKDTDaKsKuH5S6kpMyWHG3Gi1s8YGXYqFAnusb3qtuB",
  "key18": "5ig6PAnSWoQLBnAPEKA9GfKMpkvhpkznNd1TzVkH3CNf217cHgjGEtD8LJPe2CyAgmGHWNBgQqGZwZBdFLLia2tZ",
  "key19": "5Qu2LSefyUS7hq4hycczgMFbwsPormNdJHkiheeDHHKA9Q4wDm6cxTRExKuVcWZHnewVu38nGViybZXDURWrF3Tj",
  "key20": "5Zxp7GSrKZFZf5qUx1or6QCtUyk9f3kng8EbR3qggnHimHFq63UK15y4vSh3GTTvkiafMD5S6fzUCN3pCX48hxx6",
  "key21": "4fN6ST6NzbzRUHYeE7tfmvG4sjMdsRzrt55Sy1b4dT2zr1soK6LjUxzxKG7CiEg8cr6bTHyW4if2Qy4Dbm6GYrvv",
  "key22": "3pTkyUKeCNY24e6UMwvXHQ821U7enTFvyHexVviUFyfYYxT2cyRxxtgDyocNRDUmxpuNUfmqPMRY2wfzxcvJcKmv",
  "key23": "55fwuhYsXgzaNFMcifaqavwimp4itXAM1QUG6eAdwNweeA1ZNnadx2A5BfDn4fWxtSudaTeemiJtQ3zMt8WHbujW",
  "key24": "5vuYngEc9dVp5pbUJuDXvq7Yb2PxbnaEtVsRvwPKTwKUwzKbCAicyVtpjvLQgMH3gY8F1jjz48vNHRyb2WetrhCT",
  "key25": "3Y8W1mJJSVtgQJ5beTsHnU6kTksoZMtZfSpGQGGj6nu97XYh1eEJ9rjeZVN73F2KpuqtKLad8AvFv7M4Vn4cJUiT",
  "key26": "VTyX7r6wV1hii6PoUNKmtyrsbVFbpoWbKhdZCjkYNUiTZD695XZydKs1Pj7k4t8fuNPJd36dgBK7HYrjJZW81Yn",
  "key27": "5Mm1v6911QPAUHKe63TqkDSL8tjNW7fN5waQwTwfPWiXCW273uKgUcTBgCh9HQWpddkvCMMw3MZPQcN7246AHQk6"
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
