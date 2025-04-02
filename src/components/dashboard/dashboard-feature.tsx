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
    "2EwxdR11tGetDXmKRzdoi8t5TMeSmcZRqWunbMKQ8xfsNjqAiUvddpXNHWuVZYor6aVcnbPxenEvMm3yV9B8kDmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QNY365VsGSJgPLAAvxr87u9AH5WsaiUgWFhit1NtzVE3j1ScduRBxZa9pQuigYhTpxBamQwLPJWuZ4Hkz6o9LUE",
  "key1": "5QxVvfcyNj85ovVPN2JmPX9khGzuF4s79mnVjMwWeTQW6DAKE3ES89Nz67kb89VJn9GpZrtbDqr5ps7m8HCy9dZw",
  "key2": "5UJVneqwJxzccZRpCFGqm5YmuG8oe4e4ShHf56eri6kbf8voJJG8xNZYuoLAEEnmDcULvmCg1aKombW7VQFGPDc4",
  "key3": "27W38B7kaTrmGaTpAt1T4mz5YPtjL3TMWnfZjY7CawAYGFmpvsnYREhdFVF2yACYBc3fSHodNHP2LHTU111D6Ft8",
  "key4": "4PemN4y3f2vKxWdV1tryV8JXQBVVtKG3rVCfS7jz6AGhMPoNspHA3ZMWteZ4cD11FgBGa75h5au65hxrfw39pdQx",
  "key5": "4ue4MZSG8GSJVx7v6CtkW3hHQFedQ8X2n5yLwuwbYSCiq55mWqtoAHW4RnfXKHrLtVGa5d3nLhNLoBMXyDeLXmgZ",
  "key6": "3m481QaJ9Q5cTsVG3mxToDxxjrPwfmXmpwiJSPhUmDZLEARXHx7zKihNVYZxf4v3VyCxBbjzhqLe56L7wTnSBm8i",
  "key7": "2eXQgUEaWUtFfmnXSg92x4p93ZE3u7ohKCTieuGn2w9afUWJ7RBM1EFrKyH4ohEMoJJsm6YWSRa5yqvrbQNsig6Q",
  "key8": "5UqunYAwtmpX5EXAZjovbT1hPBEFnjP8Q2Nith4hJwwL1BgpeipiaGVzr5Y5MiZ2Z9yAFxePPcWmcW3HCQnCZS7q",
  "key9": "5fBHqeew9kk4yzsutYKChDH7Ls6mxLMnRZoDAPEkq7pgnEuGg74j5LCqWkcauEzzyNyCYqQfdVF4JSv4zfBbXjrB",
  "key10": "4yTRHRQk9gzbYwvgHJLKZ9YW9GuAEsMAaT98oAq5mrDknd7f37mZ6XsoVkQaXvkxenssdogvEKxFDza5baPY1APf",
  "key11": "2coCQvJaknEh3YpHc78XKw3CP1LanG5MqiHnUVyJUsTYCTi8vbLN935EKDBpb4NhECjjge2zcHEoDTXrfu6gyZnE",
  "key12": "2wFbkFBaioQi8FdBLsbN9wb4WHxFqxvn9wGBvSfy6N7Kcd75yXcMRe4PiRJgcBLcvUTbcnqjxSCuS8FMBs6aoAwb",
  "key13": "554oKSdTecWwTeToqBePgDiM6uTtDuRZ19qp9cnhQAWJoWhEyZrnfFdVhNZxr3zD2UNp4AQeF5o37UDggrgChyFF",
  "key14": "44At9n87NgNBBFXtHybH9SCFHFeS8EKZH5wGopCsEmMXstPAPg6CtVh2Af4GLAWuhPctvahvHDoyWX95MsGkx7Dn",
  "key15": "B7uQHR5tusfL55XnghT6B7WdTFQpRF1VFTSUSED4DzrQ3b6ZiExk6g3tacNL9EfinWep1DVHByktNWuZ4MjrxgP",
  "key16": "2TuSBRjDuH7UGGn62aYE74hjQE7fhmeZg66LJp4Doa32mndKed3psEc4LvZn5vLgrexpK3Kf8WzZGQ3mmdsJqtqv",
  "key17": "3aKQZyuEDXhY8jsfhDP3Uo7ANW1kPrUofoxRjadaRkMNyhazq17tjsUTf9qRYd7GRxE4dWFeJ2miA48C4AU3jDTz",
  "key18": "377758oL3B7QhEXNoX9BegcbnpsJhEKMZe3W34xR4ULFKZUSkfBumqaoGexeE6HcDQzE5rWL1sA8PhcamRSBhE3U",
  "key19": "SpkMbvaiQNAiu8m8vm9kStsKiuEEis6c7cMNwUqoX28gv6cxqfNTyNVUcyrkFNEf3ThAng1rYhY1ZF1TVCR9m5c",
  "key20": "2S5MWjpdFN636tgMTrFts5kwTZVhTmSjUzdzvS1no523FpZBemr1tSSM6jYKpUzdkuEn7D2RoFFJPx64hj5ohWLt",
  "key21": "4hxkhhZa1BVzwXiSLrGy4nqZ3LYidA7uBMRt2aKLeG44Mp45vPDTV4Jt6VG3NbPcCZ8zNWwDsc7BaTFMrJo1L3dE",
  "key22": "5Wpsmcu19XHX9STYS2qoCNaoQosdZYVDyiaFh2T7urq6B8NzaCojtenhqnPbRWzeKh8c3jKJ9EcaKkZz1PzxTua2",
  "key23": "h1i5wqbdYCjixuXoz8D6Z7FvzeE6JHagkXYFrqSxg7Qaku4QxxEGmQWreZDKdgKQh6cgjDa3mvrTmmdUZ6GYiRx",
  "key24": "SQDSFY1CRUe9VtiFbNuvq8cwZTuQk9VLbDFNchLBt4Q8oKMEQo6wC6b49kcQiWvSp7Ed13gPxFtHrfGdoxKRqtT",
  "key25": "4qAJCgF9x27E2VqNTSAsKkvbmvxfmmUdKR8FT8ZV4caPZCTy7taTpf9rUr321S5u19q7Y9xTXidsiTGooNACuXyU",
  "key26": "424TADJYiMLdWFzaWGdmBczkENE2afAUoQfk9HWQCcT9CZKYmsh5rQ8dvw8EyvEUJZgrSXRnb8CCe36K7ySY8DRE",
  "key27": "2942p1QD1ANj2yciYKRmni5jmCqVDTcBtRnBm6bn52txKmgrVgywiAdLJWfVn9ukBCiyEtG41R1uiCGFcmqJdNuT",
  "key28": "278Va828CebmGJfj6BN1vYxT9TrY5nfD7M4Vx6eKJ3gS8JPmKk9UEEDpvzn7t9UcufdxKCud1NtntXUWVMWhwEW7",
  "key29": "4HrhV7uTc4N97JQfPcUGUk2iuwHpxVnKk6F8zqoTdYDDDJowhCid5gB29M46ZDZ2bjPbw4m1fVsxcNuSv9He31XL",
  "key30": "2D26cgaZNSTTtffShtTdarDADrsCqtrTAMbhax7asmFVqChpANXUez8RUQd6S3AyJYMtcVPXeTmSHEmYitLntnfr",
  "key31": "5JPTRspgQn6tmHRUgQbxE5Rs9Ut5WhjeXS66vKDzymgZQn9q7L7uM7UTk9UVSf2VP8CnJm5RP68Hiw1eiqfnAtT2"
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
