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
    "bxi8cf6ceKVc2SovZA1zy9uDk6FhhAJLWVVq6dW5fxpu6kErRyo1b4ofWotqYf25WcjnXBRkhVzMvjRNS8rsgxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32gKQi3AKc8xmeRBN7Btr34Z2Avg9z8hv6erLJjxG3LNJp9kbJp5ZoSxzZT7HceVkWzxhHjCLPqytPXtwYr4LRZE",
  "key1": "4oG922UtNrHn4awnzj2NbTfz8hEs3rTHsLxKitVwPL46tzDAk6eLK3J41g4TRBKZuTGimv66sHiXNfyYWFmUSSL2",
  "key2": "ifgwB4ub1fjRkfKYFHM7AuWFq2bESPWz9ukYi6zwksECG8KvmpDcc9T7gbpEpKPgRckoCSsbxR8Jir5tW6JrPnv",
  "key3": "5xZUWGEiW3JwF7i6UQYtaL7ZNujpuEpxgjhTszgrxYJZKqKtcoekxnAt3n8tuSoWcLcVGR8qV79dF7ypTDF67Snk",
  "key4": "8fdwCnTY6yH3o5uPQcLqwodLP5yt1pcQzrbwhAjbFfHMgb2XycG12aRfq1vb9faZSkCzvmzzQafYYHACvWoFqB8",
  "key5": "5SS4iXuA4sDm1iKSvZQDtPpm2nS28cqhm9cHievbQ5Jp5yUmKL6jKa5fEyoeLs6WyLmgaczU1CfxqKoBSD5FgPgV",
  "key6": "34ej6h6GL58cPWnDxAS4mJ2SoKLCHvwEVbzUngvNeDooEdCmPbZmfthgqcZPoiD64aLheYCCjPHDPPUiWciMEG62",
  "key7": "3N3rfVSYgvDyVqMRh6LQ83uGm1FLH4KJzRPiQBH6xXQk6Yry8LDvpoS2RsKjuRiE5vgqVM2stiTS5SVuLXAuYu6z",
  "key8": "SGuVbG7Jfux1qFCsmBhiHnGBchzLExHSbLDPRFizZKuuiLpcE78zt44T2bwxpHRrtMgixxxYGxTRLFtKd5LCwK5",
  "key9": "2rh1ahAsnjNvwPc1M5PRJPKhk25LySvtPi3bYiQDFRUNCGVvH5LLcQEg91KXiVuYpVEYKyLj2cvikguWHJrZT9u9",
  "key10": "2cwqJDsjFBsnnRBA2oJZZ3fTwH9xA1aynaa561g9pb1CqsL9CYBxfjThK9fM6iMDB46AAB82JcK3v61kVVDEgjvu",
  "key11": "3wkvtU85kP6D85PrMuP3sz7h3mna6nFbLCfNyYhQFj4PUWfFiWoFcSVxFqevpnnZKUxY8jkBmUsgtYEpBmhcxrb",
  "key12": "5wUwNPiz42pCU6jkuc1MS2AG4jCfp4sEXBPvTLVu6GhRccAwg96SXzJkcruggLMDpeTfLQNikYunJRbrzjue7vAj",
  "key13": "5ey77ZXhuL55hZwf5Dk1Hq25KiE8A89DCVamz1E3uhpkwiwP5PKmzWjJVN4tcy3is9uFZzSGaZ55yvUBsBRWHmoA",
  "key14": "3qdCemyk6SVeMLL5KedHxkHbFXoaiDkScsxnhVrUmsihEM2Tr6STTMHvw8KNPN68QkJGvTYK85bk2xKedTM18RH3",
  "key15": "42KWVaddJNWZUejSis1ZXRak6oSC7Q7rwLB25CYcPFftTFwEV3Su3WcsSERWq9EPJUeQECv9z9YZgyWJGLJWvchX",
  "key16": "3xikQwibmSMTvntRctd2N8kJB3QknwQczoeqzbknXMhQEZMiu46Qd98HAebH1tFeCNczRvXXftMLLhzudtqjyvvV",
  "key17": "KcKABzGy9vvDRZfTsHgpJfMaXRWqPpUCKaWVeWvgvqbGj7fffroKzSTX7q9SeRBWHcaYtM5ZyhL6essrBWH3d2m",
  "key18": "5Dy4E6bBXXbb1ZRQBcZ1rtxM1cQfHfaK5tzRuJhjJ2mV6bmtSLKrdsBFX6fmd9LtbWL5f6WvxcFNRojrs6FQe9gs",
  "key19": "2jpjSuDzoKk45MXU76SdftnSSp9KCSuhu6CoyW9ttWNt6xm2VLC5fi5nQWDHfwRUzqPZwrN3QLCE3C77dTKaGTcm",
  "key20": "5TT1zS6XcD877DtpZ6VC7uB3SmX6fFe5L1Wuv8Do7uZrJWoPDhooLbzVk17T2iYQ1rTFrtGYpprNiMMSiWVF8S8B",
  "key21": "RXXKTv2qYhBeGAJdz8ipZHsBUP8rWDv35QLnzNoveukZ6rExtoUy1vmXZFM3wajFf7a4y1ZNNJLmw62dZxdMpZe",
  "key22": "4E8voGvqbr19qYqiaYqs17Zwff3pewvyXy7YpaosBPjdFy2hvJzpgM4nBF5wUZQDSsreGLtRFQLpcFJ894zxYcra",
  "key23": "4fHg2ewhMxEPTotufxywiBpp8icyLrSsN6pV7SPNEVkRvWvDQfPY1dEByA8yurgxCwFxsLF9cy4M8VHZNRUoQV7e",
  "key24": "5cHpiZK3LjBQh5KYbhWmraveS1rG4bzsYUWiSrGGjdCZuarPeW1GbgF2sKfSxFKjG5ejDitrFtpvJQnGE9agxQSs",
  "key25": "3HkwBByc3iCGFHG5NdAp6Q7zCmzk8JEeYGi953oYa57GkVp9dVKQcnVkwoguGGv7d7nBZdm9N8kX183uufsjk9QE",
  "key26": "2jtiCzin8jvKLGBjQ4WYKLNvBMRJjiYEuEUGFLPdFRWQUjbTvF4amSik2D5U255d7rZoqT3Rs1DJDmUgA9X2heKq",
  "key27": "5CYcTtLtRc5TuL7JsvQjnBHp4WQycmZ1HwnyhDCfQSFeo79Ca6CcSJBsD6ko5zwWqos2pHzpkd8sTQ9dKdmaPaWg",
  "key28": "xfJpAzVub33GBwehfLbHH6AGs2WEUVpmuCYkvHAovNqTmBDJDPzqG1ugK2GQw1XAHt7BpQytoDQmgWhHdBnJafV",
  "key29": "5K9oH5T3Vr3vqQAvBXdiztWNyLr9hTFDK1rRBJXHdqVNHuzbhN7oGLL5BvhiUuacWRWbpra9rNSX1MSCZeCN2nti",
  "key30": "3pMx7ZsN5NtZXnHdfVaR4S9uFeUn7Xr2UZ9WDQfNCHEWy1Kc4rJJzUXJLg4KdsBFzgGs9mKbynwjydb7uBNPXsNr",
  "key31": "2sAFXkwGoJ72vxKTVY3nQCbvn7D2oQgM38r3ruPaY8u1E8kbcL6oBnWv8NRGorMdYUB1w1Yax6nYD2KxRbES7PAR",
  "key32": "23d9CdkRGNE4MfJv6rKgMDWe2D4Gw7vg91jSZxvvGRK7AHXFJNJ96yWWfPoE41Rzc7BuasCYB2KyLXv6ayDvA8Rp",
  "key33": "2o7QJRp46wbssFQTA53sJJ22KPHktQkgVLcRjESbEE3nbYUS4i2HGzaMjhCQfFVbi7Nax9BaueQckHwSSnPvKDf",
  "key34": "4oFG7xHJiwbqRm3Ekfn9aZdhzwgwuUv9bVW4oi69FnCnQ8iogNo1ABhQd9cL67QvNCewT7HtxQHXtz3esKgTaCqq",
  "key35": "3s3tytUVyFRZ9y6hBb2LnYJZsEwmQUvrHxZDtB6rtMHHkyEh3inzbgZjodt9ZXYVxZyGCGUsWYTFUkaaBRThgdy",
  "key36": "26Ao5PaM2DRXpHxyMpwLX17reXBitscU68QjSquzrXMwBKV2jaEbawQ7vuwB7XTL7EsK3rNn57eFMxSjiQwRkJoV",
  "key37": "3Wb6fRAXyFxVNzf1A7ZdNWkEMV7QZpJAppUroks2THEYAePM9KDAao7DBkBVq9pJjZ9c9kQ8G82EQ1zozdpk3nhK",
  "key38": "3VfXJYzzxd3Yr4mKo13ZuysQ8K7pf8NESR9MPjUT3qv5UbCPcwLqwBvZu3tn6LtsKir2FzkytN3WFfxzWAEGBehH",
  "key39": "2Tez5x3KNvaBpDsp5QJmBB4mLPnPrgZC3WtZ8t2o3xfjHPj79GyJryLx78m4N6CyobCq1mxTYB9SvZiQpbRkUaN3",
  "key40": "MKqdHmXPuwnVXBFEq6Y4Z8r3cFBHf9VUwjSpioedhRC5TKFgZpEV1cjNbu2f38AhkaTxafXrS2Yc6akY5opuCPr",
  "key41": "56z4kB2donVzmqwCx7LXKsCVWiAEuivqHXuWoycUsQY9aVvUunyRtfV4qP293WBxNxdVN2HBNDjty34didJaHAcu",
  "key42": "24HA5PcpRhxUEcCA4MkbASGaUP6PVz9NP7WEibT4ckT5ny2vexZNmRMh3mo2jtoedVSqKHdDCeyD1MXoPxnzKj7f",
  "key43": "324rn83Y8m7oNEuP9gfsyHUuocNReiNCfnHmsZjCCvsY9qMyvhDP3cX8v7gjVkw3pd8UurEmYDcD9eYmbDHpquMP",
  "key44": "7f4ZpxSmo8iB2kNbqkea3xnq2bKcRZieYYSBBQBwyGD4VJiN9L61J6SZnr1PXGVSmpatekhptcUMPekEw5vxHXo",
  "key45": "AogvMeQXPx6YoSqyPh4SfzGcBbu72jzPq5TxXKb7GdiEiunEqufraPdcAwF2nJyH5kKRncctQyzootNt86C6hav",
  "key46": "3NNc7RbVL3bfthZDdBjoPcf2RhE8mpq4gqfPZaZdHeMvjovLyXqmoK9AxHcWE5UxJJ6XwgJQENwZyiUS8DeLf2Jj",
  "key47": "2L72ztna4DLYiAFV3PxeCjqyyjiGnASRdBSFCUqZdEvumRzC65CtETPmFbX72qhyP1SQPk6eyvd4m5XYkoGs6fab"
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
