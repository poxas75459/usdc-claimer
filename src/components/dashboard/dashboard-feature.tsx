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
    "53ka2nfZcngyMxzGBZ5umdhcWEaCC6WJgLV7PxC91pDNHGnLPnyxD5W7SFfxh4pbB6PECFDJ7hoqttKRzrijpYp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dd48wdm9YzmM2G8cBpmrYZCv5yUVB9JMs95kJx9F7LPBSBH8uYYWahUAdsqB7v82q5jSBffqe8ctMJ29ebUm8PR",
  "key1": "3Yb5gkxfdKabaYwa8vZBz3MKw2pxqQsc5KYMFTYRb7hArXxHx8RZ6eYCG57iwfvAF9DpQYNxfMe9Si59sDPFHCP4",
  "key2": "bjoEgtFamUG6qG1ygXJwii63R4JLqrey3mDEnyHusAkhQKcviNwGUm7s4LVdxhdJpMSJ6KxLKH8VLQMHkc6g4yr",
  "key3": "RmBGLTrSWUZ4dtyLVaBj5uD86bEPX6PzhU7qR4F6Rqr4bLZgPKJ9j2DaLyxU729PTFqdiex92K7aiPq2hce7h7x",
  "key4": "5PWCS3e5uh9gb3n8gMj62Jh1QFQB26KP2VnaY4JkDVDRxQymsTb9b7K6aoPmFD9x8rsd2CMQJkXLGMyZkuhToaHZ",
  "key5": "5UsWyW8EWiRS3Piiob3oF49HkQSVYiCqea7k2osd2nvvmtLBFwxZScAmCr2QBwf116qbQcDKJ4xdJiHUJBxHQTFT",
  "key6": "3FyRpXiRVJsugBermpWBmQMm1xXT4QrmLzak398s8mW5JTrZsJoEEAptwPZWNtm9H4raEZTyXBhshwsXE2oCuiwN",
  "key7": "2Zx1FeK2Qonbzpa2aci6gzc5YzXrSXTEQm1qUXq3rm4psuh1cZ6JnmcStTJPUjGZzDzVfzWkSBoP8aaYeGt1t6R2",
  "key8": "3mL2pWrJVU9df18wJsZyMgdFMKrGQSWfUN16keyLMs1wUxoNQjG567ViFmmyzzpRApnA1ZAesM3G1zVSjpxSmpqJ",
  "key9": "2CqKd5yvs2kvAcu6DtbDt8aNxx3hTttFcKswNkQiPsvsmdQ9YkZBeUxcDznLRhgY5CEuwHam7AD3DzhpKY9n1x8q",
  "key10": "5uN8xku1oiAAuifChyMmgqknU87AbbjAXCvnDVLB4iGr7pDzTutVeASACSSiZ27Jp9g1rprZttEkYN84YNXfomCj",
  "key11": "2KsDsVQrhTVuPo93JN9yHvbmxJ9zSvKrxfUyjHMkkUH78Uep7P8WzzSKogsgHB5eSAtgYHvXvuYwBHUh6Hm83M8G",
  "key12": "45dEPMBU9AJZhmZKY9SnZUCxYS2d6gAgkg5M13ZboyZrVnThm2QMNJ4WmzoUEuowDTrJR6MhUFY91bXea9sjK7BA",
  "key13": "3UXzPfFsRG1YgkT2J28dWoCU6yZBg95Pv5zdhVNmPytkrSbtpEb9ftm5jWAmnswR8n1e6N6vFcTuKZxVHnbnkpfj",
  "key14": "4vBzYSXQa2pbRmtfKqVFHYA8biteA2rKXCYMAwc9U8UA1ipjFQ8DGisWpiNTe7ZAnNNb6xkZKh8Fte6zi69c4hSZ",
  "key15": "24gPae2ACYGrPoSPKKmC5HcMvYUYnNykxkM6ZcnHJtZ5JFSiH8L8rrnST8un5RakVFWNAGwXD4Va3JaDr1nXbx9G",
  "key16": "23FWnkWQaDqiuhPY7qGH5QhFYP6vnrWW16EyQ4XKo1EL7zsDiWwk8JbwfJo3V3d5CaekLCnWk98BtDtWW3XMkS86",
  "key17": "66CcTNQHo7bQwx5HjkE4mW584Q3ogiLpAkExmxeZ6HC4LiR9cnEm49po1Y2841ZArijsnEmpudkP4HeyUkep82Mk",
  "key18": "3ff3vPEcgdbCDqdoZTN8VmbazhhQob3F62X1FjAqk93dxd9C5BviMBFRdR5XtZRFWkddy9825dWDj9yvJD2UUFix",
  "key19": "4WZg5zvijHR66ZohN3gSica1Jun9a1XBpxqu86Pa16kww9ksEEDFP6CvPhyNTheQ8bsHRVFqaWXVvmHxsrNAYnyW",
  "key20": "5AnJh721VSkwsE596m1Rz8qe8uhzjQP5w2jRsneKGaLxshwtWAW4YxG7yAAoyKg3rKv8ZR5tYTT8EnY3qyRUjNNx",
  "key21": "4gbmmwXFcZMrPruv3VEERe6hGUa2R9uyff3kHbiArZc1keh1F1YhYEqLbxmLG4ycJzqBeQCsv8uN52GECv2HJSa9",
  "key22": "kQDY78N5JrKCBgBq3Fdu6dhqGpZHpoP2rLtb5E11WxzcUx7AouuPM6FaZPdsg18S8ph1yJdnF3rxN8WwzaVSG2B",
  "key23": "2H5XjFmnRfaiYGBeBKWTZV4x69wdpVxj2VTBqTX8CTcGkqyf7YFv48RbAQDNA36QqbeFhMXtVJqESLaiCRHr63h6",
  "key24": "2hwctdAiWZe1ERmUUWH3mQpeqEN21LW3Fx5Mpw2K55VXuucenLxLXsuRuWMhSV9iGF3dVEBCYk5NmrnAES6anYG1",
  "key25": "5D9SfRRyRTkAELydwAyHb1udrskNSBfvgjYHa4aFnfdvtf6nwD2AXfVgM6opuGZf3Y2R5t74gxumB65u7Vka8yoQ"
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
