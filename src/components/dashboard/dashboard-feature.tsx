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
    "62DhZsqLFaAx3RwBZBMGywiVDE1f7zXZhMe22epggDkniCMzCkrVmAPwvCvgyV8Er8VAnhjW6k6ayHSbZn5cN9G7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oSQtQVhi5dPChfLyJfPcG6uhw15bKW9iqPiSJwdJ6oYGzeWXckBxvVdsNSxLTabq5enEGbSQKyn1DVD2RZLouHc",
  "key1": "4nVRL9T1igiy46YAX7DXdXVvWhD9HNu1ACRCrR5Au33sB8Pe2YeyGP4xstgBKaFpyb19owiMGCs1KohsgvtfnjC3",
  "key2": "3taQnsZNp1i2gcfHEbmpuGDahTkyF5T1ziR7nVxdQuc5Yctj7BG6e3ui8yTxYireUYYWq9uaLim2nEymK3PS2TXd",
  "key3": "3sGDHuXjvShVmPCPRSkqaCUCrDTxoH1L7WYqkvxw7ik37gYUpVSEgjRLPN8rZBpqwRY9pvxSBjchU38ZnhtVuCX6",
  "key4": "2eG5Y4WRsFHoCy2c3XAZFSuu7M5TCgMxcnmCw6gtgLekExDLKBXLNTNFr4My2BEDF9985c3xpQStnwSThR1uCPhj",
  "key5": "3zU8hfvazyi9N2wMNwt1s2fdGFEQkYUuBswSU984ZLSTrruv8CMA7Qk5KegHaFh9H7qJX5h9ejQJ9T3uvpsjTP9n",
  "key6": "677XZ95Kv9K41LyTQagS1z9kKUt77tyNQ6dDbCUKvTavxjRF22sU2cMxAprUEWnXrVNtNrBpYHCzGf1ENZtPQW5F",
  "key7": "3USPtzKQRHZvRwjeQtzNonTPpPiYpmv24wQHD3eRXS5WgGKaiUKUK6KiJs5H8A4Lc6pvAq4ZhzhZi76ysSpaSF9B",
  "key8": "wy1dbvnrnEtpwbMXpWNRzmBvvszB2AmSb91rzobZNm49KSMCov5ZZ25ogUFo1HWddDkLQsbbDi5f6zc3VZvYSFg",
  "key9": "4767ZRYDxiqTZrkyXLiYQaiKpwyB85DQCi2M2KKwiJuT6xQehCfXEgRXasyHe8gQTNMTDgaDyYtxM8D917bsfJmj",
  "key10": "3Lb53wfoaoMyjRmjbJsj4pQdfsqvpmHwDULQ63sA8ouTq66wvA4CNzHhCizAXCtvPZuAFDvweYYLHWyXFc2GfYgB",
  "key11": "2Uth7zZm2Nc3wMYUBnVKjpYNqi1NUqQtUM6XYqDFR85cLPNZAWTg1zMUor7KyqcPNKwTRbMcoXfx9JRSxYivVXgw",
  "key12": "2tqfQPjprkBU6f9kvKK8noCW2KoybH8CKsrBqxfY3i4ZuQNjnYpQ4aveUo8Jx2hqxVQ88HJmF5zZDEAciGrrzxgf",
  "key13": "2nii7Q9AQgkjoETtYsXLCitfo73p9BHNR9An93eJbjVK7phw36uNuX4SrJiskX62g27paZ7cpWMy1GEX1Am2GFod",
  "key14": "5UkEG8MN6WypgpwZGHQCKNcSaN4HMA9EvxnhPSDKTTMALqyRQ8fhzVuwzWTvYVPa3BCL8HYrCE849BDPmZfVBAV4",
  "key15": "4AtADkV7u1PhRXCyxUmpJa97v5TS8kWz5uWrzs8t4VgAMMvgmyaMurk8QeX4guBr4N67UcZykApc272jDf7ukncJ",
  "key16": "2hTLAbGf5Zr4CzYdhTKS7TkeXPdooHvX98DaVf5T6LjmrcoXVQjthw7Bg4MKt47n4CgH49vWzraEYFG6wGt9iwoH",
  "key17": "5dmHLBeeRXBzTjhfh41femZDkfQ73E4dHs1qy8B7ufQs6XoJx1pNR92veRYBPRWUHXVkeUU5nxr5EFyKhSeskuPV",
  "key18": "3G7CFCBzTF9tnnMCPvB9cyejH8i6USSULygCmMFhtJBbLHP2sH4b4uRfX54wyXfi6R45kMy4DaqiF73bhzZwAnRG",
  "key19": "5QCVUPdacnNUqkpn8nRK5XZXKjn16Y1m2qEqBekAUywN1sHFzHD7FppD5BWFaNQJy5xuHyxtUSBexR6otX8ALgLM",
  "key20": "3yYvzWwKQcLJE3TNNWEXprJDtHjH1icD1PxKF82Zr1ETP3ymG92pF879VMX5TQNz9DUrHRSTs7P9qpQnWn3mqW36",
  "key21": "5yhALxcfG5cD7TDHpmvxbXCWvJmyrEfq3XRXMDwrBh2ngb29n97DPcSiA7FZz5J3T7v3iEZ1run8AD6dXK8Tmanq",
  "key22": "4P97to7xN7FmmT6Cx2hvSQKvHCV5sMfMrpZH4wkAW9a3FgSUGsWE4spoRmD84ohHmr7uHoGof84sU6FpdQDhosDR",
  "key23": "9nrHWZktQ5sBPpqtmD67F4SXKujXw8NijaVK754unM1qjZo7QKvWhbyWcG8RUfd6Sv9QJmsJqbs2JN4hSSMV1R3",
  "key24": "2q9Rf9ZtHnxdWA43C3ZFBeFYBTNUnYMbQqx6Xr3H9f4FMyZf85dDfPJUKYVvMiepfdKunPb3e1HeNGQ1YV5cKb2h",
  "key25": "3LYpdqkVut9uTwqLc7oBFpRLBxH6vaA8q9qh5Wk4HuqBmdvFoxXjgC9YUZnvGC5t63uqi4TesFYbbxXzqYw6fL1s",
  "key26": "4fqzmBZXE3tpCNBh9z7pLuxrFVrfM2mMV3sUHVa73cJdgro6XviHuvQJzPjfaR8uvQPomr4C1J12F8R8bs8438hx",
  "key27": "4amuXpb1PcYHRtdjgLebSDKBSUos71xiM1yx9FKPrdZmAvCGDX6f2YMcVPhVb1j9sLMSXwJJLnCj5RrhJ36XtSWm",
  "key28": "5scJiZXGyAgNPuMywusHqka1VQ7vLrPrcRJU8nsgTkJft2gDR7VSmWBCEP3iRGqagnPv4t7VN3WY4vFe5bFB7b4X",
  "key29": "2qSzSfAQvYD3spmY2afoF5923o41QYwHgJNvqMgbNxe18tSEDhAa9jpHxH3we2iMB7wfjzGeTNpE5DYdLinhcKxV",
  "key30": "Q7xAVCSUZSeW6uEEoFgUBC24HdsvQc7b84hcGyVzfMVcQe4tqdqUV8v97AXYa8vsVHP41s1di4oxc3mcVKbML5T",
  "key31": "29pKSysUENNBKTH1DDZaZX1g6oQWpmpn8X71yesobKxMJAgN8FkkceKLvct5rJX3uZSAGhCsn3M4azff6w5M9UmY",
  "key32": "4nt6d4Rqm8AvtNBiQWsQfxmAPq5vbWS2AjyD4jnreLoiJtdcHtvSLU2uVFaH2dZBrse5P32ZBafs27b3xTpF3BZ9",
  "key33": "5KZHFXhk8pkBaqoYeFbSrjNY7C2MThs1mMmmKKJjU1aCpTJvof7h8cGN5hbJ6X15AGBM9tvRKo4xjUiisGHxjuc8",
  "key34": "4fEvtL8Xkth95eBXpP4FugDibDqfrpbSky2BqhoSVyrboFgPaQskN2aUXruKozDxKhhrxx8E5SW5rkKsHLgibcmo",
  "key35": "5bBGkHYE5mCx1yaDzxJY4oZcLEfJWjwiS8EnqapZwq9j6KPPLN7Po7n6uaqoWjfLpkorbPEVUVkYSGbf8Ye9Ps2S",
  "key36": "x3m75ue6aPdV1Let3EMRGp2q5Rbjkv3fTTcMScbnptFAG3Kxhc2sa4UHFAxuf3t7aAvYJez18wPUrmgDxYf3QFD",
  "key37": "3Pmn9tBxRe9fykS5fM1QQ5zb6YwesQeXcYnmQZf4j7PSsZj9PfmjvkWmnwGFQZy1EciaWmeQgMD1m8Tff9begDJ6",
  "key38": "5J5sHzFKRPQh2vRT29eQqdEK3K7LpKTS41gwpERX5d26ZxFJq1daX85Ys8XNHjzA4RoLtfhiCm1oV8CpMZku4mm1",
  "key39": "3Qrmyic786nLacnpQgjYBeNjBLQAqtvikXFR22BSyZgRVSsNfRG2bDP2Kp7nRCgSKF9yaacwK8sU3JFNBMyHjzy9",
  "key40": "4UahpjvPV5eEHc6Zn4iUJRTciWdkQg3keNbDsj6hzZYDYrCt3kFzz7DY6BBqAcAfwpup949Ht8ZMc7MgeR4jAcPY"
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
