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
    "4HtigeWuJcemSB2a24q7NyvzbKQ4k1ygdA8iM17Q3PRSmsWe7iSUfhukVeLhdwCGZeBHdhPWZNeo8jM6rQJwCVYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qgVCrE1sRNg2qGSLP7u7M4NoRxoucYjNebhtoLJ4K3aCJkqReSSoEi6k3rHzAAihVyEj4y3yXRT6c6unmiL4HDS",
  "key1": "59qK8uEigDwQ6BBHP7ec1EYT4XEYBZSxVPH9o6MFMmiHeWvSmxNgFAgw78E7LhwvAiE7Sqf4ULcyfQGGYvC2pj8t",
  "key2": "2c7rUSMJq395ZiGSGzdeZcX1y6iLJ9KJwKBTX1vPK1RMVoF5uDsGBti6Szuo1Yu75EqmE1N7q9KGBbBAp8W3KGzo",
  "key3": "uM8ShLHUdN3wD5s6CSUBkBvKDMwqgtyXsEzitkdKvZbfA8CPuh7jRD6juzksU3MRfowZvVEQdfAmKaaTicfg7XT",
  "key4": "4LstzRgVB85DFSXSCwNsLFMd6BC1MKneP9CXfmHDnYKPqhk3FVTtLDZppfQSuX517maZaigQPjbuQ3fgGSrjPdpg",
  "key5": "4UGLnfoEj4LFuZSEDNjjgfdzbavQdwj6qEDFoHRJpYpF9QVAde7ucqUqsqVtT8b9PU9PxhxMroRJuPAgqydHDXc2",
  "key6": "2YS7VWbmoVKGVCMywxrJkrWJ1WtiAM7k4PHD7qCZ8w3voqay8G8uzbeWhhy5Pm2MZeqb8yiEKULEbSdpmN4UxCzg",
  "key7": "3z4M1fp4SWLXNFevUvXv78JRdRt51f5mNhghgVJzhEXCs2HRjNHWpSV4VyxXB7Fux278n8JLmNmjmm9nDt6xFXzR",
  "key8": "314gVCCcnYyDcjARNHWu2P6gByBGzr969qPqFpbsXHz9Y9J9Z3vhFcHiR5DDchJqrCqyC44n8qWKvpH4ntKQmjtQ",
  "key9": "5v6iFLKuMuWRJheK5j2Lvszp7b59vW9vHVWAgBkXfg2kygGyNJLd3huttFUVePS6JMKwUmj8Tad79RMhnzmyHwy5",
  "key10": "3P1BSyBU9KejA5ch23mmSLnDbXB85Kdso67pYfBk3jdhd8ExoE6fKvqxodyK8kMbZxr1A6AKub5Rish2a8C7zffi",
  "key11": "4Bq5ydxb1fgtwJbFhChDq1oGwimirwzxXMzu6P26BQpPbBsgJoNejLB4dXx6riS79jpPS1wY22Zvve8ipxJqbLqa",
  "key12": "3tM2TVpAiiEDpgBHef4LE2Yo99Jg2ZwAiUBm63mMD3uk3d7JHdy6ZFeRE7jAiSScQwzq87RXmGpmjvfMzFtzybFL",
  "key13": "5KTApWw6aFLybCuqZ7Lp4YofcWQ4BAR5WF4kbxpfivRSPkgLVHdPfzhoqejmbgZXrBGdkjXgT4Xwr667xtPLqivX",
  "key14": "4q8Qsn68Q5N9Ug9LkGcUgXmY3NRy2EkajtYBSYFD1y4qNw65MMmDKSfGBib3nsRJHGxFCuLjA14HuCdfLbLBdem6",
  "key15": "5SFt87tuHXek1F6RgKbGLqAfWJhsTUrdwn8tdEiY1MWAD3usTkGyLBZgbam9cSURzQYB6zcUR9E53ZMm4HPtJPTn",
  "key16": "2LGXQTVHNGyZogSVrKsiFmELnTFEJUvqBgfjbKMMYTiQDSuvFyBPmxpKu56H778vvGbEetkM1cGXusHLCKiqcUKx",
  "key17": "4MHVXSN4ByZar66HfkFrCumTV8Vt8UztAN4a2ZXoWBp3vdNiFZ3XAsZUURYag12gdwxuBJ2WcyHBCJXPuSsHqNKd",
  "key18": "2VC4SYSdYBiQq2Pm4fnPBgJGZAkeq97zwLz7NL2epDFjHgKqvKLAWsNGyyqgtoqQGuDkMUpHghvT3kc5m2QHXiBi",
  "key19": "4qy2ghS6CV252GGcj26N3Gjze4HE4hAm26UXYMRMgWNgRbDaz8AL1j1jpCEMqevEGJuoBV28Tr1RZhCwhGsxAJpP",
  "key20": "3qRa1YRwV3tbhpFAXZjwHm57RdXx7PiHbJb8E3vdHfN9HRM7ED1UXQXf15wNZ7ZRfDAWTZ4Au9jhunboFqcbqZ5x",
  "key21": "z8Hp7yQNY2uG364qJvbNqnkH9vq1goPY9Q6u1NFukZG1Rp8Vg2nNWPqBkM62qe8ibvqUzxw1VrrsAEB49CoEaZH",
  "key22": "5kMWFeVwhe3tU7f47Ba4rgqP12xUUr5gKYaDJ3ER3fARkjmwmm1eFik2Hgf6ADtwj3kC54deniP45t2E56VBhKdG",
  "key23": "5wxfmznANcRRm313EyKEcs3SG4zTW3cPt2nRxpk4GfCB7HZWvpUUStz3M42e3FgDsi64mfRVU7T79PMzvea5ZG91",
  "key24": "22gv9UC5qpae6MYghmdQRjsDetReRYtnkCqdC7br5txdnz1dPpLNwnLTUxCEabV54P5uZHXvCeFwtMp5wEv6S1fp",
  "key25": "3vJ3QvnFxoDFg4Yado8wTrDNceXPrKZCNcLoP8UEX8B1M51mLFynVChLrUxMEmmsFA8ymEqVnjZUVitxxcnMBbcf",
  "key26": "2qj5KcCeMektXCXR6ztj3pmHXLw39bworbPSagbLSMtGi5gZZCGaJ3h7WxPN48kfE4jtpLizJpxqTfNPXazj5Nzb",
  "key27": "2AviUPF2wWxMPLdvhStcvXRTu32mXiJEyUnrNgceJ2Xu4g28aWxuAFewVoUpJcQF3gouCMMJg5T7VZ7JAVJu1KbN",
  "key28": "AYp9vNyoWnTgPoTjM8JCXXqNL24YrKLG5fZSu69RHYPwk9t9wMAA5SbR2tCpXG3UfLGVSB5U16rR7iJNE1zPLU4",
  "key29": "2WzQL6jadvSpQTFQhNjN5uHGcs1aPBwxSNSxaTgM532rP5MDy9MNw6wQuSPX9chQ9veuqJxehzetq5PLC95ZK7DE",
  "key30": "4a7XH9eMjdPMTMVJxg6iJAzdVe6hrbQphxevg5SL7D9vTX5wpiEHMce7LnWNjubRRah4e25Gw5UJKgKAJ54KCP82",
  "key31": "5MfjF1cBxQXi7WMQKgYreozSgWvANwzymD9pqwcNEwzMRJHnekVZpmCH87DTA937fcMZfRjyCuizpFbiQ8phuyf5",
  "key32": "5uFdTaTezcshEPLWMsrw8ov7TSEUCLKr3m2YMNnG5rETHdQM4GiLkJ6vr1731aznTH8trnDp9JCSdf7QAhcM5ky2",
  "key33": "3dQVdsinaXSeQWQvbPUUfMFPRJEwCo5uWfWNEDwp7vbPVUZCdX1nir6nz6BwKuryGX5ubmocftk5WXnrtU4iLS8x",
  "key34": "2heHyftjxguMrXNbeg8bXNNvzeiotnem2caUXMFUeEPAsBz9P9ByhgDb4NKam9NrtHxykfgqebfUd9A7TBds9iAk",
  "key35": "2WfCxVgzFsnkVsnMHCgDAPABfyGbgNb8891fYAmssocE5LAPy1u4CrPoFNWD57cAKP7vXswAhg9nR8CaDKPJ1TQr",
  "key36": "2gXrxf44PsoXCP2cdpB7Vg9TjDHmuKvBtStDkhWnyuGzNLr5Qd4kNMQZrLtJfmYgvioyhbgyLT59c9TKpZCkT7Ek"
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
