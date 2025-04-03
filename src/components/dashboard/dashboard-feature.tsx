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
    "47HoPXSRuVizbdEhvnrAvfLZcH4KkSjkg59cVzMqwNLfSW5b42TRMTv978XypjyhUnyViQUfEZHgm76PjeFJdXeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "476NvcQqyYecja1M7gGjsFy3tDCwXwXm1a522gVXg48vb35jyLsVAeTVnRmfPBiCRffAu1yg2FJAgzCA9vq3s2Hh",
  "key1": "2FUkuWXREa5CuNYTqgNv5LuyKJEAqe4djqhSMSwSLmxFwEHJWUpHv4eCW9XYLeMot9FQ8XXJWJqyvf4bKhH8N2qV",
  "key2": "JRvdyniCSoVK6xDSd6Q75FM6VXdzaAZzhk8FCjikQGEDXe9MSqXr5hLFuAVZtCeiZ9sgkuUSi5u7fFmTr2uRgKJ",
  "key3": "4A4vdsNkkKkJeUocSsSKvCsMSJDiKqqQ99CaavtvBjftxhvZsLX5eA6VDs1wFXbwcV2NuNV448mgscnF5mjA5zhT",
  "key4": "53B5iKjQnLL1BGpeH4RLc4hbmzumqRWRAGUNTT7oTzd9Y8Jc8VzkRptLABSw77Xzs9fuVCAdmy5mueMQXosdatiJ",
  "key5": "4mJ22Mg7LHEkMHSWEQZRiPaQvj5CpPz8rijdJduDqTyX6zgPts3XfUrNUmwD7h8rmPZa56KLYUAVVrP3v6xXshzJ",
  "key6": "32LnU7z5txkTevFDdasXXqdfCvfdDwK8oy2SZHeoQgZBpNhn3BDTnb927U4NV8AX6STv8GpK4gY3X3DQXP5GvWEE",
  "key7": "3Q6SDcefvHko9fEpzAAqD9j14oBkEwygc6RoL3ow7arLKu2Ayq3fwbstVoFDBUnNxuTiRsr6KNUHEDBGUKLeiK28",
  "key8": "Wbko4QFgCvByYoauV6sGEQMn5j371Za6DQdMLqViaM2xR12DreUdbKPfhiyUEB7ptdZ6Kz1Je5NEgLhtphEtCGw",
  "key9": "2YZbfMAE7ohD8LDgRWD77732SrpeB1Z7hiRu9QSHUxTkXBF3bRdxysZc5z7bj5w3aWfnpUoc8QxVYSbZYxU137K7",
  "key10": "5BDKDAi2jfpgtcv1fuKTWJTgBu2g6nHEbTEkM9mQKECmYooHKbpQ6WC457W5HV595T2pAXWbhtHS3eg718KbQirD",
  "key11": "5StwVEdSdGkv4TfTEzLm52cEwaduN1SjyH7WqKWhYzu3B4To4Vg2AwWKNfVBx2JE47qfjahpmz9vuraQwp7iX28y",
  "key12": "55xruzUV7j8YxHkHmnjzTtAENrxehFsNzE2UNKLwME6zJm4Loa7apeaRe5prR8fSsmK4SrqwnGndUa6hSkg78f27",
  "key13": "4iomGT5vNuxatNEY9nkT65PNEWx4e9xZbjZmKZAFuYwCE2sLedbUV6tEppTzcx1J1CeqpoUsDF7nrCjXnME9pNcJ",
  "key14": "5QRy8TF3BUwcGsbdoG1HTSNAxaxKj3HYPwLg6oakD5Sxyv2pvfoCJTTgGEgpf3fLtGfxnVDGErSwy2z1zCTwZLbo",
  "key15": "2pX3aN9Gev4hm226J1ETevgcNFnLnY1gi66s6gjyJsSp9m4oiSUF7En6WvStMhL5UdgytchWvYdcqRGpRc3ojsZB",
  "key16": "xnrw5TqirZimR7YRyv2fsfzqyC1SY4v7B9csHtXWUZyymcq8CkLuMyUy7z4WgkcJMP8SCMVny9EVC3gwMaZpurs",
  "key17": "5QMQtnsBzSJX5eFoBLTioskm6d2KZZQ7q2Fo6xxZmf5Hg8LLep14BYj1LRU8Mjn4jGvauZaokPaCk9RJbGRfaxYi",
  "key18": "41rCZFt5im4tvUgU3ZCoKfwyxd1FtGjxWPwV2m46D7gZVhsFLAbddivzFTfmNiVDPqwfW178LmTekUyKXLsiNfCe",
  "key19": "4EKCUKj5xxpKtxphfp2gMvRjEjZZBuTk4rJdwZvyMUPot7SFqyS9t9wYv3Ug8jqURjRVZNoH86bMHkkjJPyAMJx1",
  "key20": "5wVUeYB6ZiDysnvRKzP5QbU4V5MuRgspSwv24s3BohxfLAibwee9GN9P4kA934sSENoMhJHcziQUsKMMcEhTs6gp",
  "key21": "pEmAG55BCaVYxhvTMcAmbC49Qp7u99XS5BZeVDS56ruh7NzmEQJB9rbuHNp6gHqW1J6Pr7WAUMCGPunEgcmz5SP",
  "key22": "3QAPP8YXsLKwL6e3G4SnQYdiLxgpQrCXW214F3uBZt1miKPbtqK8qWZHAjBx7XuBAuM7rZeM5GZGb9JFkbH2gDA1",
  "key23": "hC8Vc2r1FbKfHA1yS95TesPeuRPsrxvzxBf1jEsgnW9mj1fBnr1LmAXToWotqw1hSLyRo3ctiRfcfTVPED5rfkk",
  "key24": "3FXXBXSKGpppjWgq47TxTqR9EYJhLoUZUk38grpKwkmdhWcHFnRWXVD8sBbzTQKhkGXZJ5EGxEF8Vjara67a3mVV",
  "key25": "4o1hUyCueEnMnwe4gDsSbfWDbrkHBBoXVw7ZjkgPxtkkYEBfqQiM94X1mEiEN1GQgH59oZe13BKpD6Hcb45Ejghy",
  "key26": "jny8dPpjbaBvKiLrpMJA4Q41a4EWABaH9GeGast2ExFwnDdXCta2RC6aNPwUhd96qYup8YQaGmgeYXMzHzPuUHt",
  "key27": "25q8nAHM9Bc6BRyddBWv8bHXo6g3T9aFqXXPwFrNp2sgUYnGnFqRuNSXoVBx8Ats4pfUKX4jmZfhU3Wm6aoUzcWe",
  "key28": "2cv77hySZ8SfKMQZuRtC32HdcDQj2hgXB3uggXFokacgxAChFNgwLDspDCXgdDD3G8Ds6U7YBgEJMPrcTbSiVjxB",
  "key29": "4GG3oLypXU9fvtJrtnMF4pXMznu1RKGX3w7MZsZ2HcLrRcwoiqi8APsw8qGes8saULDhe3hFGhESdNbpmRhe1ojD",
  "key30": "2uLAWfRPKPq7uRkkW2EEU9ARxYJ3fUJTrPoA75JbXKxL69WQycv4ys4nr6r5dNsZ8w1sTffHK6NEAgYU36thpgPo",
  "key31": "2TaqW7TUcYNEnzWJWJa7aAkhdgwsrTPHEqvwA6WobaRSuMMhAMKyRpKvvYq2RXNFLu7nk23b7H4P4bPFnKPXSng9",
  "key32": "3z6QFDfUHPAhCnwVtc6b6VAFsCLxZk6RWM2Q8fmdwVKLhaDrgEzNWykc91HMm9eqQ3brr9rzZLi2NsaYEfdP4icL",
  "key33": "5AfuM3LPy9onVWxo5X778Pf595ZzzyVqfURUJJiJ8Fa4evqyZXFTBK4CgQN2VLFjgsVCr5rygtr69GEG9ootkn3Z",
  "key34": "21beA814Rq3qmNrQjxdiHRLmfST57HzMKVrjdNmBTRgwjw6wCrvWEt4LMP4rBU3GpmdmguYwdA2RcPFnL6ffne95",
  "key35": "wRNZprGmEUBevhyPQm6JGQd25sLNNVq8bY9SkFHFouqPMrsEBgKo9LddXA4MySiYSuXKKPajBxqx8zjFRJBow6T",
  "key36": "FJ6tiy8DzS8o22Q9yCjmjFznjn38w1xkUVTjoAk55uvE5yZfgf6gW7WgjWBjQR122eTEmXNf31uyqkXC5tSfi3n",
  "key37": "P6Xz5sv9xgTUEa9Kz5JqAoS8rUdPBL53u2KdF4VTNPPPtoiGPHh7iS1i8qc3PD5fVccJnKJyPC5h9Jhw5YUDbQ6",
  "key38": "5UPyTUU9Te1GX37G4g9QidJuuc4nytqtHSQ1WixpQ9FLgwL34W83wfJa3SUB3frCazt2SUGZpphaAXu66y4ejLJa"
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
