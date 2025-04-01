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
    "pgZTj7AZjnFVL3KGpH3SUFGARjNMKrQVYcfH4GpuFfVkXSPPVtQBbjQZAzwJ2g8h8oT9zjZtJoLdZDssfkDgE1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "623VqncCv1hQx9ZGNAdY4kQiDqm2fdie6BnWB2FAk1YtA6axqCCtYyyN8Pt8o9jxoZqqzsbpbJFSSUGkZmoa7Qbb",
  "key1": "3AyXrQEgfb2rCTbveBCHKQSfCZb8ogV2hFqVBgvpJfWSPWYPiJshGGdzYNFB6Ry6KrpTmCqZhubuKbh2k1PvkYsj",
  "key2": "4q46YPwpk5VFuWGeEoZQnZWSq9FpiUvpMBjRPjjvjLKbH8NCSFjsGqjxnwJeq9QopTprdoDiZC2hbTk9ph69jw65",
  "key3": "FeuXxLvDrHBANv7MaBR6spv9nxrGyuHGYUohs7F85xZsUMvy4JfzQaNgJzzAfHW8hJvUh8LXgZoYJ2fU7wbSvTi",
  "key4": "55Px25Z99AvGUqqyfQgY8fudEWrk4k6CEiuRZFd6NSUDjR91aGRqga4y82mRyvkuYutevJwa3py7LjC6kkfmDm1G",
  "key5": "4rvhfgwwuk7KU19QtAjAc7RXMSkZctCTo5bXu7rftufgvLTHKuUFPk5wrKGYax3QgSGYovK9k5vTHDjX4g8kHRJM",
  "key6": "2yoWBPWrm47rLDwvKGW7uibkLx7DioYxPSX7xaxVUZbfnvsisu3eKCtDg1ouzEAM5wGoU5BY26KbTrnFdWYHv87q",
  "key7": "5VkWpFzbF7QAkkuPcDUJJnYiPWK71u3Q9A8bAoR3huhMvo7Fie6R9BUbJSVwNnPjhZZ7Ua4Thu56oeUGDNfxkQ64",
  "key8": "42AuwY4pVXbKpV38NhPtpkk9y9jo7Amb6J1oH1iXzmHv1NdztyUSnFpF2LsopRc8QkhHTHAPTkfTAS1Hf773QqB",
  "key9": "oodHjFW6eCad2qgWQ5GsU8u9EtmMwYEMx1Tv1L3TfEEp6Zgpmc55LuJSAp3Jy3iaJv3VDm41AigpqwQb4anPghM",
  "key10": "3m3nJUf39Ccit8HoqkmEFv11Ay1AJmeA3rGqt2zLkVYmFkvHHfbq1exk4VZkae6iPS4QdA4bEALKDEhoSNxM6r3m",
  "key11": "5Yub13hKBXGcZ7m6ytEVWSDnbtpYti7v5V51eZsKFCR3tRbE3QnNc6DSssP92PMsCHQU5yRJXZNdQ2Kpeuttm5ie",
  "key12": "5Txvgs6vyGEPLVzMUKMXXFrGAvU3JieMT3vxMDfopNVnhyT4k47Mu5d4E3TdjSwWtxHPggBrjSjdosuVWXF2fxn9",
  "key13": "5HKB2FjQARCvtkA2Q8FAj8MGXsbVHugZszKTZ99XKHEHLJHCEcJPTXcYK36MqJgXwbMDnnmh3Cz5ep5c6idiEzrV",
  "key14": "3Q5p33YbqGfTABgLZkXJVaXKGzJEs9oAwrAcC9fUCfEcodbZW2g8PSsEWF9fYrKcbHArRFpHPGajYhTXGji4dWud",
  "key15": "4H5FdZfQJXTCa9jZcAf7xsdPJHrLCCrTjQczHqhsDHTNa4xyYWD6vtH95Wzf9GBmptjZTZpLz1173aYEQ1SuHz6M",
  "key16": "5cdaacHxZnzSDP492q9o3TNt7y3VK3cyCUK8RjgyX9dGMLZArx2rCfuo6Mi7ootfmM7Survbs8xvnD7ejnfWEUau",
  "key17": "4845psXetYfqHVA2z8SWgJZ8kvsC6TPLTgGvtvjThzi5KV1hWYH7uLog3wy3C8UbhRQFnW46GKewvZnLdwt5ofz9",
  "key18": "2M6Fc9CC6dBjurQL7ggKJ7MahjZGs1vRpcPBQMQvTyQUfvCGajFQHSXw1tpjZCqidMxMjwgHUBmZkYek77ocJ11M",
  "key19": "3qQ9XdBkfdVHqJSeP8hY1ptkS83JqbggbPm2SWc7MbFcDBSU5dfJWZgTf3NUjyF5mZAy4ooZdHyzzZBheqoqhbBv",
  "key20": "4MrP5YVLdpbkMXkMMdzCxSC5MG1Vy4GiEXDLyUY5StxsGZWmTFXNis1hbheMVxjTBvkbkwKozSU5J2HDpCcywxpa",
  "key21": "2MPJ7miq3zxY4rBU2FwUAK7bLAnxDVaBsTBjduBxjWa18uiVS7Mqmra9neF2gPfXbUYh3a6fiBNQ89BkVKYzq3WH",
  "key22": "3Ye1dxqP5CZRazztHh6EbPD12596ZpvnJg6j7e7337593WmzaMhWaRgKHAB5PTS4uFhzCn69L7xycy1RAfF6x5ti",
  "key23": "2yWsa3RfgbdHSjmbd5Z5NdF5fLUu4MLp4zqrpG3PhFP1PvzNNyGdrgxgxLVFcxty95ut8a62H8cb6pKADRhp6VYF",
  "key24": "4vYTiy7iLUTFFWqVgH3wiMkfTQZ2YEsNYV1emnbsZNW2Gba5X5mVc9hJ4xEpv2KQ3fMpDndtJ8YpX8vzNxHdvuiU",
  "key25": "frRnSf27vEGB6ounaa2zAGCV54JP5KTHtemo21tGx97dzkJurtx257DwTkZUBBDEdjx3EuQWd77p99SPBB8LCQP",
  "key26": "4pV5y74QpcVHoCUT6BEVgCQ71esoUGtbm7n6wT8RBbmV1GB1LpGvjSYr5VP6b9oyXiqdtRyqSfSumuohapiXChB2",
  "key27": "3k3FgM5BaV2DVXqRQnJeTSkdbjButR4yBpgoNjoetPKZHSPTLPPkMY38NgB53UxnwqhF8WxwdsxCAB9VL9Ho5Exh",
  "key28": "5AMGthkikFKCURv2XSxoCFYkC6bD8N5sYPQHGgjZ9AVENvTAw62JsNtWhbU78HeVcH4Lfn3Ec6X73uNziYhbNRSh",
  "key29": "4z9bAWzqnVUNWE3di6LU9nbqBsdM8uC35CmRVf7ddMvw5zXDStXTSGYvuoxRHnrqY8nCCHNdGD9iuhAycmBmv4zm",
  "key30": "3Xap1yTJEFeQW1K35Qo55wraaocXL7GvfqEkg3SGimY34fAAJHdg3p6S6UkmSE9tpv9aqBq7PBGsgLcTdVaodcyg",
  "key31": "2N365MT6KbQfsyeUgRaoni1PBRPPU8f4AbkDpY4F9yS4n9gK3VLMKBFpRUZszXeUsJpmFJ691iUEYYzB74psVndj",
  "key32": "5dPQw7LYRPn7mSMysazZHVaTiGZvkZ6Cx6T31iFy8nkjv1Z8cVJpoeta5zZj2iP6nJSF47gKuyxPDvtbzypXLFkc",
  "key33": "5qvm1BgPKf3CaUCmG8hMtnLvrQy3FviKhxqU3Wmsp7ZqeHDa5ZVkvdW8DnBy1AGWBwsKTsVcJhFvbdoLuXBFqNAw",
  "key34": "5FVbTCRzHW2G2N2msTm2ua4kr9a1oeoNhLCRmjk8JBF9FoetrUKbpWUZUKTXKjGFLGQqnAz9T3BuCwXfKTgXPByq",
  "key35": "4z64UwJGpCqoZGjBMnwYhRepVuUd3XJJuVtY2XrXmoyy7auQgfUEZ3LYaxad8Mzv9FpA6BvDm6rdUMJhNo7gVyMt",
  "key36": "3f9oqeMvNx1zCW5ffbN3Jveaoe44ce26WUno6bzczUzEL6WESzTiBtuWpySQYaw7fT4UHnBrNeW526pWQoyePmnx",
  "key37": "4TVfpg7G3TuSPFggiFTKRCUW5xSmHEB2ua23NCRVmUwjViHNxzZcFYwUpi1BSVRjQRa5phAygk2Wd4Q9j4MrTJgG",
  "key38": "2mCwLNhY1mzkp8yUs5GF7Dh1xwjyVgCczmooUfAWig2hKTPW8K1Twcp63k5z5PKZTfNSi9FGMdbSdS4Jd7eQDUbt",
  "key39": "5ixge8TME3hv1ipzEKZj5ynoLP6LCKjZTCGuyPs9ZXLByjjr4qGV7JTo2rEtgvihMVoaWf14iCi6ogFnPenZwCfB",
  "key40": "4rev4vp2vSXtH4rmzaCajbqnbKQ7smFdyFJhzLpoPKBQfEq3bAA3xdEDUqtWTuvbjixfVnVqnAgqXkRN9AJeYPpS",
  "key41": "2VqZGLEfk3yvcPRWiizkDYNcRGKBdDKkXhVQ2gQkWQUDqQHE5VWUcf45ChtcKpjzTidQuJqFfxvaaz6hF41jHSpz"
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
