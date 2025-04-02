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
    "49GFkF3QjbmFD2hx3AwrQVWVCH46KkfxtM5bmL6r9G2MwRBtKjHgHgQRySmr14YJrA1qAxGDwqt2uRDxdU5pfGZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C3V8JVauf1jP8haf83njEnavoPJKWvHSNTPruzXyhsBG3zKMYT9CgBFknqiMdpfno1YGGgsfTzPz2dAP5Yw1Qf6",
  "key1": "3xPiz7fmAchkdhBe5GhR5RAS9X7cqwrEUdsDaUV27ikEjF7KVxAwbF4cr9WCtgUXtwZqKZ7MowrYMN6M5sk23d7B",
  "key2": "andW6DTJpiHoCt51Pyiekro8h1qQu9Cbe5J1XgqbrUzwowJJitd5TuKmmUABNvpKpDLLvH47bHA7vDHrQcaHynM",
  "key3": "XiAuwXnnFK81Wvd4tVxXxKBaWKDFWhQBch2w3VcDJKByXNzajdETC6TFNECojU9r91MopPNcVVWUhkGKf9H6v4A",
  "key4": "3VXDyzhVjXBgYDFzke8wUsMoiHZ5foZPwjqRbiT7s7RQPYu7ecGXqY9pSDv9pYPcBaQ58Ezyeasg6uToj5NPrKRZ",
  "key5": "2z3VQF8cigqFhawsNp4LestxgS5sKNpqNLuytmL1TKHEjhKAJY93di2mEPAtZ2noieQ7BgDXwCUuAh9H71J7sphH",
  "key6": "EXDp8cRvwASkjfACbiTQcxzrJfeJXGEMT17kx8nMD6VGmrjFwwzGfWTvZQtketXV7sSeDq9oogkfYVLo4yhgJH6",
  "key7": "cKe6Bb4dK5zNRsyCVvMXD5XPvDv1xMnRXhL8GDFf4Zr68yTy1DQZ3R7peM44N3o1gauWiBGYz91Hc1wR2cC7QRE",
  "key8": "3G2jPbVq4fjHyDCm2bqp5uKCCVgLrsKc7UtarZDHNPkPQMuehAL5WV2nHcMxtqduzc8fVQ9knVHmjWzDJbDQPyGD",
  "key9": "Ajo9rTK7ng4Ds1j9KJ3coj7YcL45w3CrBBEgfm8NbH2EoYyR2ULyar7LhQR8H8Z6FmAvJh6ijMiH9MAnYNuaHUE",
  "key10": "5QqxFTpAPpNpTtqAUaoTYuEd2Tydi6GFZeYUdVhcg3FiLct6xyU75qknT85XLYFDUf6ndKRs9VzsdDhAs84JoZcU",
  "key11": "2qmnw3Q55z1pKC4ufah4op1CkbhHBU67BbTV7z7Goo2hwPea5UB8eTmtNtSgi3Vg9bi2z8499auToxZwcJiMxK8",
  "key12": "3PLtHD8kXzvgcpsmRNvXyiWkRkfmXZdF5fmDgRkHdAUeSCyPovep8rJq6QNgEGeWwrWtAoY956yRRfcoFMKStPwb",
  "key13": "2FswfBqjSHPZN5xYErAeDAZtm2Qm2dzcHUWs8kG13GdDhc797YywYMPHt5LZ3dkf5SYbFyE2VDE5jVcKUvB3eJTz",
  "key14": "rYFUUGp2BAPh3GpWYN6QpEghZm5tHBciTVkMAZnj5S6deL8ztniFHLefNpnFhdHXTzvcT6mFEnvAgQTKBnfQunK",
  "key15": "WFe9Uf6P1nA6gNdaHULbYoupfAZnSQYyXUmw7geytfX2jThGx4hsSbHk1Z7SAwUCSSPcz4JdkCBrk1N6quWBNup",
  "key16": "4kxYz9iG2VbmQtkmrL3DomnHsvgVKsbQcAs962UQhgRAb9LDhpKuSaMCshZ9wR52YkAvU81fbZyZuj7YPHYTbxVW",
  "key17": "2RDMX7PkbTsn9C8PL46QjtPRiGVQmNmKCyq2QASL7fF12YiNiAWuu9dvVEX4Mot13L9YaQAuJxpc2cxRPYH7Kz5T",
  "key18": "cMxnTtpeabxSbbHmhAWwXKTccJjf3GaYvDTSthUQ4iXLu38p5FXS74TtTjKdzaj6Sh9xJYfbu8LpAsi76zjm4Hn",
  "key19": "5MFVXnvEHHRcsRbZDRSKt14rsv4idBcWR6JcMGD6CKfzwJ61JGijkT2LgaLT1NwXbHjhF85BeNbuTRnyKMVZUWbR",
  "key20": "4UACCJanPifhoCyErKevfjaaPTeNaXZKvNrnBJYbmnUbT3xwLnZSRHJh7hGmtnbp4vqaEdASSoA2mZ1ijwFAY83P",
  "key21": "h7RnELVVwHAHq9F14SHPiRi6XyhRBYvaNz32oiTepTaCqxBxrwThTg97hR4SQHtF3eT7oedcLPEG4Jfjftaygv5",
  "key22": "2Fpf2f4pxZWUtv2Wg1Rwmyu3Baxuw54NMnysmzf46o7s9NqdyvigrCMrpFwm7nKwQdxeToNDFHNrNgpx7GvKW1Dr",
  "key23": "spWooeVCAQjsEw9DUp1pU2HiWh2wK3QpWvysHjAUnGnoGieuCHeKohSNL9B6Jj4LyNpPkJ9VXLokgifW6Gvfp7g",
  "key24": "5jJerT2t38Fp3peMqYHNW5tyBaxczL8UaxsVtHd3CCudNVUPnP6i85D5FKHjHV3ti5aUWZ2xgrZ624o16NB8u2zP",
  "key25": "5Ur7U3SPr6pyrti7vYgHDyRZuCLNJTVRpM3cakizuuuP1pg7dZN2vvB8DG5966rvTeMes84oEJAosUcZ65Yhu2pp",
  "key26": "5SfTEibX9WCnMgYrscwhURuLWQFWHu1GxxHGM3pcuGQEEaYWZWeEpwUntwrobfmxwUhPher34aoNNYnfcnXoLMtA",
  "key27": "4VubkfSA1e8gzV8whr9vRD8EtDzdWQ1QnZEuESCY6KXVbEkuwoxMSzUDSDqRVdZpnurcup33tKRDH2ZvtB9ujXD2",
  "key28": "35Ssxrf9qCweSrimdfsvmNS4uTCZG2LtmtzqXwHvj1o5u1ftcCaFUfiR9hoCZTfsL6H4AKSq83Nic7HHy87qLJY9",
  "key29": "5DhH4AtjE6Kmq3UC1ncZhyPMPp7SqNZzFukzgkEKLb9drfESnLrfFcYTuSeo7gMX4g7pzQRUaoAbQNWaizk1XMhM",
  "key30": "5MWvAafqC7uXjPmJadoDoLfJofYmduZTKCaqFfMVFu9CpRDYbzk3MveB91drHLtwbLqSbQXbstox9nCgZ8b5ZXBa",
  "key31": "246vGXCQxzGoz277JG8tkXBJJ57fKAmUSJSL7LwM4UjtvekKa6ZotYQuT9MzGpWD57G7sCi8R17fdihRTpzZjeV1",
  "key32": "4oDK3Ei4cvZdoGwz7Hr9cuxa5jwqHYhfqpTxGa2PiPgvfSfRzUPHpEz7iZNpcEAamzsZoPjQiUdoQVgfzCch2N8D",
  "key33": "2DcwBGwxAE98MN6ZmkVaTYiFpymADEcxHJ9c3m1DV9L3Taku8iCP84osefYNj8XLaSLGAAbKekbsuoMR5sNrsQhv",
  "key34": "5w88hkU6HZ46SDZueEgqGUydyqRQ9G3Huz4M64DGLmKmwoHtkzPCzVc41hkPYy8yVHxeZQaEFKeoyBZn6gQFZmYh",
  "key35": "4cEq9vSuFPkA1cREqeuFQWjbidLyuhwhmQjzPCSctHcH7GQcCR3mm7WaFzRMF2oMA5pF8CxUmxTUsGBC2ehmWWP8"
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
