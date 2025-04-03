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
    "yPFeu3uiz3dDi1UeBogJoZj3dqzQXTVcFZ84961HeTnpcQxrLm4LKo2t2NYyBFy4AeEKe5X6E2Lki45EddSE4Bd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mJnm4eWovYcKtK64nz5DodVZMbiFhSVgRA51MAuvQ2pmUjFFe5W3ssjG5W555jMe6vkAc2qwSEvpkCntEViQerf",
  "key1": "3NUDWoAEBEiQBMPLofk6xHecdE5U47JfDsYQ4LC8iRacAWCb7YF5vdyP7CgVGy3XLADgsebtpxTsRrYDZtriaESG",
  "key2": "2381MmmpUTbez59RJFmwVBL4EuRnVxUUUHhX5VUcD9uiMYphYBSvg27eLLZVuSjy6RvbV8M76Ts3C5uBpnmNJPUm",
  "key3": "4SAxeW8H2fxFiZbJbXtzLQeoiyuMGLzg2MfsFHPLutB4hVvKK3rg1AuD1T9ArLQhg35M5CzsRyPVGKSY1vyM5sDk",
  "key4": "2eWp4vBfGpe51n82MuykU2tarW4yJeynhfwhHMPoEqvpZgfd53fVX9mh2fq4uLNCeEE586bNn4k7Kyh5iqRvDT9C",
  "key5": "2MmCqGMXKZebtMsz5UVyurnP2aJexUMQjHrtzAPJBP6hrR31f7HVmGtRkrDZWPSXqa9Va4EPx1J3y6ANAGZRRTHv",
  "key6": "2pZEkFqaZQ2gng9Ap4KYLkDtunCRnksoVgRVkqjSrALq8snvq6vKmewgM9Rm9My1KFUgZB8dufs3dvidrmJyM3oD",
  "key7": "24fKGDoAo1867977UsF393LMAqfUdbANJH8pneUeeqYDr4pxPfjjwVqz5nLLh73yJoVF6yhHBcMAyvyL5rV3pU2u",
  "key8": "3Npof83vEG1JFQmcNM9E35vBAp2sCTHin5CwCaCXQLFBGeYwddVUxsYSxtW3T7P1wFu1itcAHa8K7XjEQ1t15vFG",
  "key9": "2TurDLSKg1EVuiFByNkGYTVeRC6t9pfdPN18zTj53if2uQLGHLWf8uCvdtL7EToXiCyhUXncP1uWabewkiduzZSn",
  "key10": "2ZqR3LGmgbEEzFDSnv4WyP28oxyXMmiwtVSvRBJDj7aRhr8tLSiVQoY4kFkRw8JXiPoZmFbiiR7yB62NmX6WEnr8",
  "key11": "3pvJpAJQSaA3hG6WLeveZgnE1vCMVk23pSVgfwkHny48W25yQSTb2TmTLuM75ZAbVFM9pfZtqMeUxKZ7mJZJ7KbT",
  "key12": "3nipZnkaKgaivNDWZDoyT8yAK3cMRkoDrb8iMhEqcLq353sgJtKy3wEeK5V45eaSKhYvCmJqmvAsotDFMtGSWuma",
  "key13": "XaJ1HsEKjuUL3REMXEVjdMinBTpzazmT9GRuJtr6iuyeZg4Z9GNUe5mysBVuyryxjtGtyhfGRxBDZ8bQ9YnN99w",
  "key14": "2Vbv2AF7M2hMg1Cafa69nn28SWPesJgotGMmWsPzpt39Kjm83m8ndJPmDzN77GEZods4m75yM6aC4JdW1xD7kidQ",
  "key15": "5QdzGait3x7RLXYwufmTkVR4UASya2BqWEkJQDXwv8q8ogkdvVzdoVVxTLAQQKrAJovLznL5wLK9AurUbJY13sak",
  "key16": "hgWXAe1ifXAJj2CMLAmo1r9mSKQ5QDZMPMBaZYV1E4aY6vKaYRPZgLeieW5FHGfo57o482DK7oMCJ1WgnY4MVnx",
  "key17": "Mt9f4a2hUVKNhWuxrNK9fkX7mcHoKE4EYGmCmSimdU4GKd5Wc99ADgfTDAqLTwrenAq5v32ZWZd7cVEc48gEQmM",
  "key18": "41bWCeEzBemkrPaRNkQWHzxnWSSGJ7jQfuPUrVYxqEJBq5CVDNCaubSYQ3NibLd3oFAqeVxdnddnokf2nDx9CpSY",
  "key19": "5AGSKsEup76Cif4HEMtxMf5o2ZqhDR69RDaG53Vc8RG9ici1tnz72WfETFLeMvZsnPQfgRsP3gF59Y68oL26rogZ",
  "key20": "4dzP2zdmrcNdeRfaC9h1AD9EASoJuQ7PHn7RZz3QdGGgjxsJuTGcqWuSPj16aaft7wxCv1Luf7WsWv9yZT6sTKTJ",
  "key21": "2P4vhSuFSj5n3vzLuxeWTZuWkggVc1qgY2kkVqG1iVMXc2wr45CyE3nVcHtbqq3MNHDwnPbnzDRg3CTenPd6MMEw",
  "key22": "39gP8otDGyrK6s184VGFCQMvgBvnBBE8QRsMVgnhnJNz81PiWQBJSdcNznhvHeam5K2VU9Lat48rNZJMWMUXfL7C",
  "key23": "5wNpsiUXgjT5Wz3MD8fGXEMRMKqbXvNyetwZmJsr2siSSEgZu2SNnLtcSJbkya4xhruxuedvYKNUbeeaV5Fs7Zqb",
  "key24": "cU1LGoXBfuqp7ERXRXCJ55psiybG2vumg15DCtB5FxZZmWPhNt3h6TWBrUrG6D8UQ4go3onc57WH5c7HqQjKXQp",
  "key25": "8t6Nq93ftejNjMtCC5e4nqeYhTA3RqRXqodU98c7M25rkBhkvgeYbUrBfL6p58bG7g4UuCFDXsmWfkSRrQZWxUY",
  "key26": "4shKcipEXmmT6eYKjstctQepZYhjf1Ezfeojz9RyLo64cyBJSJvN3Dtu3Ru5KbX19MXUyhnTpbf5f8S33noVAbc4",
  "key27": "rto8FNSkjXzhK48Aayy25K3mwfPGg29nVdGoDrmFPFbj45Lr3ioXhKuz5aziwj9aVQ5bvEZyVhcD4NyM3mWe2oQ",
  "key28": "46gKyn3hwko8Cq2HDeBbyFpsNv7RhMw17PxXAyoiEJmeeQuofzRw1nFhwCrWm8o5iCJqUcVWiVuvw2VShxusZp49",
  "key29": "2h6EsZ2qZjbxcQmBkgZt2HsQUwNmaVRQWLBt8T8o2yYvCoySFMvaJVtGZ6NCfSreGjTTyxE9HkaXuTpxvj7cDz2H",
  "key30": "3dwgtLDL1CdDogDZ9LWpVMaSrTw2cEBZkj9qEuHsNpMLZJtCsoBNps7KqsFejFk7zakTTZ9opFyMwiUntBFm1kKu"
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
