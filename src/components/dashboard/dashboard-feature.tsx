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
    "5mEivV746vJcec6g8hrEatGLGcV8jR8DJy3cKSatvNX7ptUeRQ4KWmwDx6bujbz9qsu8iMTFypuzwCueffVfz3k5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQzexUToRSV2oWMYwnFBY6esG28rAsKJpv6Csa3BvA2HDk8ouNo8pmui1nGFuD13Er81pJrYNGPcRR92zwjV7RJ",
  "key1": "62LzR8tFgCGPCMzAtYFN2vzE31rdN4TrxYfJcfFmjDcwzqRoGgCU64oadZVpgRH4fhZ4mFGYWWQvvfUPv5Nnuxf",
  "key2": "2kWhT4LyRMkQsxoHa3nRFhueHJUTpeoRiDCDSnJzwhzPQQKqcJjRLzSnu7LJGDNTZXrSCrtdx346K84gHoT37kjJ",
  "key3": "t917gB2MoTKyFmK39LjUJq39CsdHwthi6Q3Xjr9d8DnhueSjuQTrp3Gh11kQPxMp46uT3h7Xq7dm3RwkvH2xbqb",
  "key4": "59SVzN8qsGybx9tdpegBbHb7o3xCfWeLeLugNbKk65LxQPXJJCr5UhkqvqDGY4B2dFCHF5L5x8wFFaVDaA8wWHJ5",
  "key5": "5tK3n5bG3JZoAUJNc7B3A2nuGd8MgDAkpPMA6ruHeAYYppndyUVoiAPgSgzNZrUAYq7XBDgB2tmwrsABmHW4Q4WE",
  "key6": "HDc5rk5Ri6MaZqLTMkP9doqpcEzgees9mEiT8RgaeDn33AjfzHn4hXYJBvR6aSdwL18K4mWMS8zMrcbEYPtTMkW",
  "key7": "4geKmTwgFewtz9uL6YKyEpoiqxdD6PMAtdAhhGpZ1tFw6HAV3ADpQyich1mmdyFVt8JAoFjKMoJrCFZunLDrMoXA",
  "key8": "2477s5PTpjQUHzruFU1Jr1pqBQMRbNoonNXDydtUrp1evWL3EHs58QNkosEkQGZgS1s86T3SpPmZPQFHLqJRsCEW",
  "key9": "2WF4BMuyXV2CLMv6iW13dKsuk2Jk26dSQu27GRFHShtZyorgB5w3v9bPSCqMyDVojYEv9CrDvWJMeAe8qNTtDzrF",
  "key10": "3sMKUfAoTjJJ8xr3futHKTdRxVSk4oLCDsEVmGehvqyzhWzUJU4148DbGRrEq6GX9tzaTBjym892sfQ7G6ExFShH",
  "key11": "4WKvtE9hSQ281y3Gf2U91dGBLNzPue19PMWvoyDeQA2Mv2g3Z339RGV1oYMU4HUHX43UsknLsZFP6kUvokbZ6asC",
  "key12": "5FXdzdjZKGrdsVKimEk3EpA7C1z5dPAVeigVwJivjZamApm8haKPPA8QMYjKAt3W68Jcqa8ngemMimJ7YXcp4S9r",
  "key13": "64YBmZVcj9Mwjx6HYDjf5qzwsbgysvHKaUvbxy2Qqfqs4fpXuXUMF3X7mCr8Aun9d4oLYpx34pN4LzndmP8XdTd4",
  "key14": "673RxdUZCPphvukWqSMauYZc33RbQKNhWDFoJc2ftAqSfqLJgQxSj5opanntk2XhgipGkLfTDa9sfwfSvzo3oErm",
  "key15": "kheqTyFTjEXMSBF3cXkr2LWJxUGoZLASYJmcaqdWtYbPPS5mCx6WW9CzHFBjRAHdtvCkpjPT7UZLebgx2ew2V3E",
  "key16": "5xpKVTv9eiUSurQskBLx3TKWkukYtMT4L9PF4i7w8H1RwD11VPEPL3QWaBbGN6Q73LEJiVDvGayGiTvAAaq3HjZ1",
  "key17": "5GyZKNrYAJn3Zrqxc5wWGVLJcDEkbdzwAU1BgC3p7CvNzLEa2bw9hR3ZwVLZkJU8i7sgNaYhZMfr4xccEebNeauj",
  "key18": "m4jpJ9H3j59Qh1L1624d1U4SLrkkFj3xVVZ5speXnECp9ZgwVjzJAAg5pDJuciE1pEbQKvwPrLKqDqAiSQ7QcPx",
  "key19": "5Pt3NaEUc1AbgdZx7vZkRo1cT7NqXuW71KSTaWeFix1QmADDmtasiHCsEEc9JsKM5BDhadbqfkG13fUC3vbLDJbS",
  "key20": "2ECXDNkLN8xvQ5RZpJTTAyPkk42kF2mFhKgxu4zjb3xL5MJZJQPQHNATkQfGt3Yh29vYaSshmL5fVxF7C8z4DdYh",
  "key21": "5a3Ajp1LNou4vTsa89pitQ1SpGCFYzgp5mCEBEexCofW8VDVvz5UV9uGiysuyyyMv6UFkGjv1MVnVhCTGE7ZXRL1",
  "key22": "2L5b5q6LZ9EBXVAhWGbu7yZkrCNj6QDWsSByJAwHH6GPc6HsjwSRcMGWFthBW9wMkei3DXY4hcmX8Cxg698KNexr",
  "key23": "4gRXCu9E44mJLJHwZZ7PiWtvySDKv6mmV288LtaxfUjDf3JdgGFz3bNE1kT9cA768AfAmZMih25FQqseiWDBUcAM",
  "key24": "5xoELzQpL4w7vta72ve5GW8SmPtrR9nnWTfa9TGJnHhcyZf94cB9dtFCqvTN3gSYMXc2Z3yKHmH1TC8a2v8LboEi",
  "key25": "2MvSCebWdHEbPoZZYKVj1mrJMuPFogmGx8mGqq1ZNDbg6mSKGWvaphxRGB7fCJa1d3DMtjg5j2nik1jGVzT22bLc",
  "key26": "5HcyJrFemPVaQZKBGARkw8s4qtN56MLdv2dhfkvkUrHxvqNJBRg1PYd4f2KqxfwwTQJ2VcAoii36BBq8CQU5vo8j",
  "key27": "24dQxTL3jTAGXWRuM5Sd9wBPKKHoVchFLquHtzypQtGCHgveRaxbaaE5BCGJup7Zns3dt3foyKTZJ1zdaHXVkkse"
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
