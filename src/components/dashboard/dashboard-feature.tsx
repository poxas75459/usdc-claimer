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
    "uyrsMQ66ysHws66vTmhX5jWfJshrwpVjhAhCAMuRZdQK1XxH9WaXgXTETPgopCfmyeaPcewvDDpJM5iVQkzG37s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eyz5jK825kbM8zzYGfyNiWpeDTFwo771gyvJv3UE9cgUgqhEvzRHiEFWtN8nDeaswkzZV8MuqjGZQ8GTHRNDnUG",
  "key1": "5dbmfQ45XnQ5fjWr2muEU9d5RoXBUbHxuX9bTQ8cUWBVquhVRgW9PruwyiwxwwP3y8qhcZwnSkz78eToyD7839z3",
  "key2": "5PgKcLMRMz2WdV5YEWiL3JdL28PeZyVH8HP4T5huwfLHEroWxQtVQ36THKanT675nSebNUD2zYorTSUJQLmRzNw5",
  "key3": "2PJdZYyBNCuVbLSN5cjN6j4H6KuQ3wGZvPtNAnvpqd9pe2L2hV7jTJ14XV1uaGq5giWLmPeLRtyuZ43ggTgfxwcJ",
  "key4": "3FFzfvWVLbmQBoxaYuuGD5ypzAgSsn4obFbzJ26zrzvSwM1y4ona7AW8zsx5Yh2YvSnPzaJRZP3J7PwgWz8CK3b4",
  "key5": "3GcYsHiTR3h53GUXgvCUZa4yE4q1SGEggsSBewMERn3BD62BMq3sZm4c9PG6iH6FDaKw3rpJkLr4SCiqAgBncWhz",
  "key6": "3CqV2i7Vqj6ggzu3eJFi5kQGt7tKFUDZNj9Uqd7AmPGGR5zUJipd9tQWbn1o7fdTnSFLCPF2PmDgpRcBbhVzSdrJ",
  "key7": "5a5eq7HeQYerK7rtdGiSbyCjcgsqfsVN612AohHm6pE8UREaDyFo2Npfeo28PaLufKSENnnS9CUXTtUrjPyWfiv4",
  "key8": "3fuFi56pkfG85VPnDv81krSo1DtRuqvPsEEMAYhQqJa5cQti1eLjA1Yv63DLMyGmXFbvBNuX4tyFxqpBQGDMBEfT",
  "key9": "3BhF8BG6aF73Ryw2i1vADEsbgvCXbHAsbRmqQs44C9Y3rLg3pkgX9cJtYHKKtLct8Gocs8AXfgWk8z3fy4td6t2o",
  "key10": "4n9ao1R7yhyEQ8Aes897xr71JG2Xww291qtdVVoK4eCevNGRaihQG7wALSLZ3d2c2S6DjVcsVfqcSm48kREQvn4V",
  "key11": "KuNpLzMMpF1p81zDXmdq3Dh8gf5pMazGC6RHUAQUjVpAnN3fw5u2r9QwDhgj1eHJzjq5mMULaAcf425Jkbpyb8R",
  "key12": "5ojfitpkADk8gUdPvh4mUA1ydMnhHZUGwRGR4ps7MrqKzpBecfpHuMT6ApwrzySn4ncBNTbbzPoL2dHibgSzc6k6",
  "key13": "2ooxxeBU94PYdSKzRjZSWh2rXrLQb9suAkcrPJ7LWDhKpbs5wegDeqyQdthBFfdnyKB69ynnKT1NBVHBFvVusNSf",
  "key14": "2hMJrc6iYwtHbRGbp9UrQZise28Jr9JAGEgCwmvshzQcQ2NqXkVQcuhBEmzqJzTfmwYKnv16j98Zx9Y6aaZyxBsk",
  "key15": "52aq4vcXp48c5KJPLqpR9H3N55mWFNGTRivekGKBr1dBKKRqCsHn5Rxnwx3eBZRtKmXFiGNdVMxPwv2moBGj2vF8",
  "key16": "6amyR3qD4wfR2BQp9CHGhTuRHDmq9H7SchUL3HX8LSzR2Ec6tP7WSFF1z8kBxuLEgDSPuKGBeBKr9nTLWxisu4P",
  "key17": "3tWW8PvdpmAf7RMbz9Pcxst82QwdhzhcxizVxiG2EfMr6fxDcquP37hzgXzgRiPpNVwFatTwfR27VW6WKjdhHgzo",
  "key18": "2AdsQEoXabTZGoifWoyE8MAFsvSttmJT4nZoam3DWY573twcqvvoAVHEFyFDPyj4YGzSHnnx74ALeTv1HKQwrHts",
  "key19": "3aRHsSDCduSFS3xUENgonbRZ2WWv8qKWNFSmoKDYY8pd3mgf9mBHuGQEghTfjJApBZfiRSGwmHW6GB9grZDgqs5E",
  "key20": "5LkWLUboxZhwp8BV2dCnAf5rbLeZKN7N35KaiVesxyBKMmz5d41rfyRebeHLPJGRauhxru8AV9KkmtCtjiLe7Nhy",
  "key21": "5o4g3hh6wKHFL2f5y1cTbgvMzGr5V5rQ7ddWP2xCri79dHKi7PmskWNzs7o4KXehUHwz2AEKqLuoujsgLGAacp6n",
  "key22": "3jd3T7emU35nVT6qTpUTquwgvbffb7RvmCoynkaExzEUgyAUNroejtssqqvEVxgMiNRHZ8CrXP7w2Y8dJuWusULe",
  "key23": "5TBiC7XBd7vLdNLFf2in5hM6eTMya7ojic7aU4EpQvg9yVNZufzTX7XJUBsfosD4TJZAc85rxrW7riNKZKYnAJCD",
  "key24": "5DaPEvoWzbPB6gh3r6kh7ks4BmvPk27SEAq7CLGiEADiLBSt3CRsqAXta6Nd7aX7jGphAonTezcft8Dza2USHyFr",
  "key25": "4SM1vgt9KtbY6Ym5eqVgjk6FWVKTj4xApFafUHBF4ia5YJfNZM1qQWQFcuNs8kdcT28jBqdwobKWknxuvr36pCiV",
  "key26": "mBpwnYaowxzHKet7g2Hve93ind1Qk4cvjNBCmKgoKFqM4Dh4Qn927YTtoAhwYU6MSwYCVVBW3fTrcaYVWn8pi18",
  "key27": "4N7RcFM6Xkz4qAb81aNtW3T7Rvv7JXo3UUFYNhyx8cZeVAs7myawRwkPEuZ4JKr5gbf4CKva6RehYwt39AnjMLg",
  "key28": "5houaXLDiCupjV6wzLW879mdcyZ337ZMihaTG72GXrchCiaX9SpHyAT4nwMjHL6WCQV8Pgnpn44cE3j9aK2WEoWH",
  "key29": "2vLtdGbp9TvEeWztTtkKW2qVJLDrR7eUxcvyDiY93K9NNtQCCZ5Rb2SV2i3gYrtwzeNfLTZ9C9wwU3uF8E3EZxGb"
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
