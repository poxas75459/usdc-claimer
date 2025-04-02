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
    "2HpVns37aNBX5oH874zg8CdTkTxCQ5kRw9ShydmHvWsPRXfLSaNM1yFWZLpfDSdZ468gMkiQUcL9DyfzPf4R6aad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sHvgiqyfQYTzWxdKYQDC6WB6LZsEinZbApxLmMzaEkJfRT3oNXdC4pri8XjV5nW1uxra5M8rtq4d84HPZWBxkSd",
  "key1": "2AC1MDPqPZwrjD43Av8bvCTf2PAaHLPTWzF1RqFecb81mEn6PfNcQvvJj15BkU786J3bmSo5Mer7S6mtSpxBQsiw",
  "key2": "3Poo2a1MreRXuVx3QV7HACuHsVPnkpxVupV8VGBzs6S9Lh9tJJLsHSreBnhG7BsFSPzwt9bYCH6WKSNHZfXNfvKi",
  "key3": "3zj3mft6ob8kNiNJumcf3ZkBGkmRLkbFUdaMvs5LvrHUnsK6ahSki3mTDCxXD4zScv2JFFjhztvsAPTNxpK5HQ8t",
  "key4": "5rMYdtS59UFQRAQp56FVfmf8EJRWv4xA38CZPXe8h7goUFmBb3X3T4ww9MyMCZkUfnGMM1urF6R7tppBU323So5r",
  "key5": "5SKZXLNypn8qVTYeqEsT1Vcn5bms4S58jxUia8XiCucoRqkFCvP9i4RVb6Yux4a6rk4omfAUEe14RTQ65TTQqhEg",
  "key6": "2gEWKd3hquMJrAkth72JzTrS3iMGKVJQM3EM712aprEnaajiSPDE3P2mC2EptahvqFFUQXnGiacx5CFcni3AV1Ei",
  "key7": "u8G5BpEhHH3b2vq3qTmNoNse7WwLq8qVMoHsDZ2m5Tv4KUfV8zkuZ9CrE1RW4wMcvot4orx9t8fMJDTLL5BpA4U",
  "key8": "2o3vxJJpxLG1p9R7EWXN1tJ5bifChBgB44qy498SetQf9GdxLiiKDmX5T1LAfq1u38dzvhW8gmbTGoXA6Ad6kxQr",
  "key9": "2VBifTb2BFULkM8PFLF8YBvC6nuvZFWNuNJGg1XdDoM47KGphjmyt7QUoML7nAVfAwMgSN5os3swoMzcvakbmxWA",
  "key10": "43AQRVCqbbyk5jNa6Pn61VidbUCUQqwUQmDPwgaRX6uF9q8kphF2pb66LoifKduY6oV2Q2UwrkJy7JyePi37iN1v",
  "key11": "2DtZMbXpX3fniQgp5fwoVdinHRdV76qbudnzTpfaetYKg8jRyNgLMxVqPwgS7i9oerJXiWxKtHV4kPUnPuT3rGJq",
  "key12": "3WEb4R4BgJWdNcZGpco5BVyx8u9M8Xqq7BorZvuHWweo49jCvmZSzjyanDMfkJdCeHJciLnN5MhBPppu9BtkZk17",
  "key13": "28XXwwfEwPQsJpiT1q7fE1pAG7peZt7aK5LMmTYxPCLtKyRjfh62HosgQoJuFu9XVizizhg79CUEZz84F3vvvHwg",
  "key14": "2AukoZPqnMXnH543Zfpc1nBqzT3QqFJokFdD3ekSfxPYpCYHFC1EQddiZmPHBpMwKnqaTb2HmCBco1umkxao6RNR",
  "key15": "HXrRiDvsJuCx9WmpXXTUkixJSH5JuTPSet3hiTwzGwSm3v6pi9iPVqVC8ZdPzyuuunuanZfKvZMmnSFcN9rJvTt",
  "key16": "2ogT8qmR7X7ZtvJLqXBYcPoiS1hRVeecatSQ2tQNNtorAyZyVHiyDs3PcGDyidAB4vaBN3RywyhGCkh9ydKRP6cg",
  "key17": "oZda47SDRV694aBnj5wpr2MDwP6Q51fEjdBY6RPCHPaNy6B5PDwDLdEhNfpo9JTbiSpv2zyj5dYTnyma5b1tjhh",
  "key18": "34WDCkdinuduE6hv5WMS6PEy7wPNgGBAs44teQECkqfgfLAMz83KWfcYSHNkyNzEqwehL2G2QFMJyPK4Y7AfeP6d",
  "key19": "3RRt5J1ipythNZN8ZGwL7BagYpbKssWZkKuo4emZQjwkwoH2H5GAeH7m1ktoecAj9ruwPp8Tq2HG7tBXWX6J2wXG",
  "key20": "BConPc2wxDEW3b9spjFhJxcUdf2vsGhXqKW6rhYqSjXTAEJPC4w6SUAebTBHvWN434DX8115yC5UrhBZgQjgSFf",
  "key21": "AKPrrhFf6tpXmndjSTAMJC8YuQTRzhERhm9rvdgMpaVeXdLFiLLZECx2NmusJauYQFtajcN8YbTGGe2sAsxTfye",
  "key22": "3GgqS3RSPC4VYJjtkWCkusSNDkXGJvyY94d4LzA5a1hrD4cphU6xXLfppz381n1fP8GnoNWrhTWrscVkCsy4BR9f",
  "key23": "3GMNyEvL1kj3oDhA32Lzjt8YWS7grqS4XM2gHb1TFp96xmCJmkpefEvyutHibfFfy4tro2MSboTjFawU2woAqE9d",
  "key24": "Yjy4BeLHz15bdTsc56HAXjovS4LFXf3SKM86bic9eZ3TuFXUY91z7F4U67PHYP4aq17z2jQRTTo6wog1XqSXdy7",
  "key25": "3BjbKXe7NsHwH6xuQzYYntUFRmnBwqvfA6wyj8Jhmn7rG75kHwTwhPGEZuJBiLSgTDXV9GijojxmEUgyBfcP84J6"
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
