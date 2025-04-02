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
    "2mJNqWtkgkKiEBEiiBcZ8KEoNYr7kUUYGp15j1AKude5ZUfwakSgYvCU8me3icovg2u52xGWqD5Pj8CNKwgMTn15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SeWSeTZGKAX3drRcvagd4d1N952YSMcoYbAJZoXASH9aePhchrtTiwF7iHd3eHeG3xViWJandxrzCxnvMVJ7NzS",
  "key1": "ijxV9ntJw8DDsQhDhm7D24nUDwETpFdFvbWHe1YuG52NWVcEFv2vmejUVsgpimSkagmr2eSzPQyDf47pU2kB4ED",
  "key2": "35EGVCb9d16BTSZfCwqdiz4x6ar1WHyQ61pepEm816m7UgHqos4gtDg1p4bmcBy3KjZ4uSB4X9BZKvGWSA2JVf91",
  "key3": "5mo9iuN5DM1QyNkLNxP3jbM8Y8BJdYVu7DaxdcFZV1KvJ7HEQzzhQzdh2gruTGpTrbMc829y8cMDjYFny4tz4uqk",
  "key4": "4b4c47KPVdyBuBtFZN7TehA84h5FXF9dqjTuDBPTaDqkYs9mJFp2vy7MWBuXeWNEWPkdCYRwCGoWvZsz1Z2h7EhL",
  "key5": "3v5VJG8pmKqDKwFZamkf166AcYkDCzcdVy7eLJ9Pjts7S1ess8CPfQjYJZ5eFwg73GBFHdQmsg1J8D974FwNoZtY",
  "key6": "65vLnKe9Gk3qLaCPgrd7diRxY5Moxc4nJxCf1pikFdzPrUVm627qmZjddgDT7SZ4sLXWwDceMbJU6BZyswwLGWa3",
  "key7": "3Qr4hfrtngjy1fhLx9Nev8qJZEZsuETMHaVRjphzqR3qenoYZnzuADX57rvqWERoxn6udiEQqU4XrwymkEovuAiu",
  "key8": "5kPxTRnm8yzyWWUqkQ61TkiW3obHrzr6rNHCUXDcd12E7oQVgZcXfCeYL8PinzeU7uNWHBWXLCWYHrh1hYiM3UF8",
  "key9": "36VedLhTyRaiNwxFVPC6rNP9ZugmyqgqcaaDyNUroCiQVEhQnhQvYd8JC8ARJBYouiy4gAVkB9c1DQrD7yD2hjVR",
  "key10": "5BLRaQUaJXFzsPBdh62oHA5oK44zSNMXDqLCDwZrb6vuD43G8o6hfrqZ7CU7WC3SbnFvh1xebWXZPg9etrtYjrqR",
  "key11": "25DSJKJSfsBxVaHB9oUbFtt9HGg9ZbbDVoCXv6Vjau2HNCgJ4txUNCDBUeUqLboXAsGp59DuLPJfJr5KL45YrAyU",
  "key12": "pwZxEjTnMwAYP6dFdaBohErrWZm78vYM6EFEqxEmYL8ZWZn5XLqc7bxKwsbfVejiN356cf2iW88MaZL97BHpMYW",
  "key13": "5cLEaB8T9vQTmc5ZQJCJxySyy7w783m1fszzs5tNo1kUPaxQfdyQwnR85xvvti9gKJ3UdXsxWPyG4CqTGSNG7M22",
  "key14": "5qmGDyc86BTb1A5F6YsgpEf85V89kGuMgbFA5aU5v88fJnC98xrAaAoU8Y16EmqWPV5CkJRTJozJhcx3e58xJwbn",
  "key15": "4bv1CpWgR5GC3QK6DxvMXapF8jm7XP3Yi2sc3Bvs97CbCdZTdgzytNauPvLCRBJJhGsY4zV4rDuwSp9PU8f96zT2",
  "key16": "5GmDfLWgKkLusVDeuAhXRxdx7is4Lm34FR1BNq3qbc8w5vxjAKrjNrrRyJmAa23cSF9SwHgi7sn5YMSWfqZsgMYn",
  "key17": "FuWssftVTu6nCSgZGoGAbw8WUbDZo8NwCc8fb2kHm5HpLup67epVBg7NYzoaTAbgwzHmSFEjjTFPkJtx82HNkTT",
  "key18": "3VqVrb6JNtTCuGu9V6rKS4ssD2RYa2XXT3WgCHC921Aaw5yvVFgxZHUVWiEA2RddBLPajssY5emo1hWqxkUpSiP",
  "key19": "3vgBBkqgLuL3PgNTnRmV4FkyQYVHiDiFqGvqfr91NHTgCN6eGKWWbt7HMgZYuPz2CjyyCVfCFNbhfoyBWb3jbei2",
  "key20": "2aP8QeJsLtsKfGPUgFhfYBrNB1jRU6vM5seBoNKoaks1SZkzMzoXWmXAmh1c2hhMvoxTRV3MfcGqcEviQM5SrCWC",
  "key21": "VByGhod4KuDT1hEvNPP45ski2M9ZzA3niDHfFMDxygKSyKSEbmwb9zzst5SfFHFdjXQHkjmArS3tHNU9n4eWePD",
  "key22": "4V6y3XHWECHQHXdFmm6uJuAw5tz7RwtY3xbZrnp4DLqNiugw7ViwiacmDAnbSSEtykbTWnHDzs2XF482sXkk2LJU",
  "key23": "5jNgVwqpRC24zXu7KCF4fa9wSGa4pxEYsHZKAt9ofpJCqv5kX2WV4c7nExjYkpnv52ikyRfwSHu7fL2HnwHBWTKd",
  "key24": "4WNWc7kcoZCfkdP8DgDUsioMgxq3DvPYyvhsBBJbCQkyxVYPW23CBFn3Vprv223nfp7ZJfn7cQ4EAdTSzdNNxpxg",
  "key25": "2Uhf2CrtXNkjknLf4yDb7XC3RihZqFLun7FCk6BfhfrGpfkQraxdaxTEjQaMHK1L9HVMaqqehM72DAYY3Na5AbFM",
  "key26": "3hwe1BqDxVoDmM4xxtpdX1kQeDS2p55v9PYAHY2eiroJnKrdJyWCiUzFR52noBdb8CDZVfei1Q4oAiek3kLeFbF9",
  "key27": "2TxbwmSG2RF7wDNwHbGRXtNZ5DmsZNpM47ownc7sg5iQuNu1QivaZ4fQiXp2X1326trKNAreM1noxsGM7HL2xoxV",
  "key28": "2WijBgX957i1CgXxt7pEAzag7LMCi7Aue3RUZ4yuZXBrdqYEudZ3bJ4DDqjuiUWLPXNZpWXCejdTErxftL6hLMcU",
  "key29": "3ddGGhwR24zcBxSmsuSV4LnD4ERcD9VbeHpLDwbi8R945AaMNSsutCrZ1xEE4tFAtwnumJtZeCQmugwfDD8qPRvc",
  "key30": "5ET8nM6Yfn2PzWS2FAoeo8nXgkZuYkK39Jq2pAgkDehpzJcX9322YWg2x6EChnf6E3ZTDj3Y7n2njdiD4n5ZRbbk",
  "key31": "pzhaeE1yvzSPiJDpzAej1XdVCBkN26Syc9fRLdK23N5iJTEi8a84NzmcwPTLXCTiW5xRjXHt29dgycfvJpA66Xe",
  "key32": "4D98zK9mYER31iK3qdL93hXc4tkRAPGqeRix8sUz84yG3vQ1uHRqmnNb5RGh7qsp6ax6vbhSrBunQNmNL2xa8Eoi",
  "key33": "2wLhVBCRLuF1QNKPZFrT7LK2gkRUi5yZBkBLow3iLGhG5RSpd26tuqf4msFHrWp93CyjhKLsaFDGgXcETFEiPnsh",
  "key34": "25YMKAVXEkPEPWLxy3G8bFNB8XaxP79weoYye4qk6RnWgaoe2MCbXoaEUi2DtZMqbxQkarDRhbPeNgWW7Y8yJPQL",
  "key35": "2L62axvoJD2apHi8FKuZBoq5JSQpRRnq51AvKoVXjJqLbhqLUiWorbHHQ2h4svs3wfSibGP5Yu7koLPKrWABmCG1",
  "key36": "4gMiqpfmBWUUr7Gvx2V7firWah7k8A6aFeMHUw1tUgXGbpwyfRbf8sZ3XE6vGiXW1URTCf5A7HKP6XtsiHoxmdVc",
  "key37": "P7UrzJg4B9SbLgLPddMghJ52BUo9D4FmpWXPNA622r34fSiTvCnCJEDZYU6bhECZr9sxL1yYk1DroYLZj7KGt8u",
  "key38": "5mPsgdPX9joM6sn7bqC3HoiogGNivXrirxcj8pEWtqke4r8Yke9GVhULXKKg7J4ETDaNBYGZZdgDwh8UWtofhepj",
  "key39": "63Ko8NkaZo7YtcLrtytTdXKVQRiN4WFFZKyqQAxKqMETXj8f5xDKYZ46VAQCKgfyFALwqjjyD8H1addfYAB3Ejmg",
  "key40": "2bG7LB3ddWYba5UbuSaPgAsxSKxcCZatNg3cHAnqUxvMtYmhQqdkhiT9wV9Pa38Hpb8FhozoiYRL5XX9p2nsMsfa"
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
