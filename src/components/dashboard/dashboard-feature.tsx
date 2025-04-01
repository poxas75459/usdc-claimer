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
    "4nG5YC4oumWZ2k2YSuTy5FCJADHaipKSoS3hNY4BVtCMzWTR1z7vkidFCmCDfwjtwDgra8DseVVw36CrfHbq4LaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37DC9GobPNP66E89DMS4gbXy6inz2WFyeSsbFLqjBJPn5wogcVW66LfkzTvUtCc3svv2ShvXwY3EdeHsUSPKeZdy",
  "key1": "2Swa6fFnLbUG6TodcNrXt5Yf6bqBmY43Hy5dGmiTT4sfYT3x5Z6KTM3ZqpDDsHSdNDdP4PHLLNEquMhpBuKypVx7",
  "key2": "2juwgeD32DbS3nWk1uNGa3PCbZiPtMDBiWmRvijGMWEvqZfmt4Ft9SwBqZH4HzTGT3JykbvH3c8mTzMLpNaGkTnf",
  "key3": "HpEBS6xuw2dspz3hjsoimMhf4yb4nKFy8jsHFbQwbJg8Rxdg9JPK2YeHbCZP5N1Gs7bzqFXC1apHchwgDxjf7sU",
  "key4": "z2nupBH1jAg63W12xpvHSJt9TpgQP8xQpnEUPURufuBws7dBJMAdoYrwJXLsi3gfZK1MtcN7hNNxh5XphAA3bM3",
  "key5": "SayxbniYTgck9rN3vdqLteqQg4sMSGhNRFDmBRiTHY5Lj464T9zYrDQwfE58FQ7RSXxaNM7pktqPxvCM8vXnbGY",
  "key6": "4unaji6dRy4RpP4HRLjuKoMKRoPXT83PDVUQEPZrNMtz6STzL7EC95pmMvqff3dk95wBRzXvefno5JfW7tJHcYRz",
  "key7": "4L55Cx3m7S2b7ub37zzh566gymTrS3LhY9hQaLDRU13as3pKK2FfQMV469BX4wMciRqzvdgKtXVmWkXhsmVjtb9B",
  "key8": "5WVaigMoZGr9y9FNwYx26aAVi8Wtap5v3gK2bLpNFX5kUkW9MPyGLJfgKSWfy8fqsN7tT3a5Tb98F1r9vCyD4iuC",
  "key9": "3xKwVEA7gDGBbn7t93JvpcS9wFqJ54YS9qzUsVWzoij1peUDsy4YhXMSADtHTS2fuR4jrjwwd9wRFzCGkqXP32gf",
  "key10": "2vkK51aLkyUxaKYWvqMc1KRvCkwNoQ6USyhRePWGxJP5fwJFFbRj6sLywGVpufPQDc2Z6rsudoBNjXEvKTfcY8uW",
  "key11": "3JNxAYvBdCSwE8FzQRAEqWwcJcMzzYs3QbTKVNyrbGV9P5dko9fa6LnL6ACfqs13Yzm97TePrvdsCzh3Gcbvao2J",
  "key12": "2A4DEDxcRu2xcF7TCnnZMZVuFMtqHdrBSkcoZYhY9fTRgSF1mroAoPmGYfxdyFeKNYFsCBjkJZo33mtgAEr1uJUg",
  "key13": "46TUrZ58ok9acXgResqmnc1EMgyec9tDy8hSms4478w6qK53gLRzLysmV3UeMAJnriKKopQheYDRDN93MutQJkAw",
  "key14": "5WjbcXTUEhwcGx7VpCfDJ6sYL6SAyMNbQs8FRcnw2wWF6nqv8yv5baPL6j4xvrcTVa9T3euS8Jw8f9U1iuzsip35",
  "key15": "66j138w3Cj6JRw61K2AiHKHgxp4r4War8WYymcEtLsirrFyRVJP4AqXXMgm673oYE1eZuaRPFhzc7pupUsvT3aer",
  "key16": "2cSL9tsbYrarmzbLxRtrcg45r9xfTjXmyRyY2SULKkoVd3DjMnZK3VPfjUTCVpnd2YpjBHB83vKAYH2Hd8R63pB1",
  "key17": "ghgBWRUeZvc2FGsXCicf9zaRTVy8gKcBSpgdgdqUiG3GSrHuYY82mVEzjdL1FTWT4LSQ19wEqGhzkGD6etQQ3A1",
  "key18": "JVkqc998Ewtr5QXtyph2aTzQ24wuAenaTJ8JMrEdVaKQtfoTAHEatP8gwwJxeHtR9x9MC8ZpuLXEMDfD5LinpcA",
  "key19": "3M4gRboiZU3Gp3kNDiCoXVPp2Z9V2SRyFKw59jdCUThLRAj5bnqBVSjXbX8wmqLhVb98CWztu29wzEZGm3cPh43Z",
  "key20": "3WcigAR2ihYwU2sycGfbFpJGNuar9iG78rpSPYhSSgjvZGjoqyeNg9ukY8RRsx1EhxpWnnhmgqvaddXGNFTRkpA4",
  "key21": "2kKr1KyQHWn3R1PuNV3FdsmrP9hWMENpc9oTLXmRrgkgfCECJgMUoQhyPnKfLpBLwKj9zL93sjuP2ym7Do59fBEK",
  "key22": "3z5dvfw7T6y4xALCskt2AnpWyjJRPPgmRMYp74t3ea8x3KVnjDAHD9nQC95PLHxnYX3ZWerkoqWZDgibtWvVsLyR",
  "key23": "4iPMMaFqVtMwdzErq8SRK1boXLAFRQw49e7mBhCwGyCbUGao1Jz6g51AHZz4ipAWSwkCBd1vNoLZbbLogsqV31Gz",
  "key24": "yTamVsV35ZTvLRutVnP88ErC4vMDkFdA8VDvwypvvAbrWM383kLipvNeCZsJn1MVi7TdzPE5Btj8EGZQnm4PsKu",
  "key25": "5JfynX2LrnKjSWrAQ8HmJD3Nfb26ZHMxBhG8V9PmNv1EXF1uDCW7aRqut1XhyY75GDnkSaoL7RwHdAA5rbNi4xdN",
  "key26": "27W6kCsgNRbiXv9uCQBDVRMGGaHyiK8XuSBiRq35kaWtEMqDjZv3LvKknFhXakMkPxfe7z2RzAk3NGxSNW5Wc3W1",
  "key27": "3MwppUim7TqpjhNNK6fGM1NHTYtREJ6rDQxuBGjmUfGTJmaKscJqmtnWiuJAWqtfjK8mC4xeWWi61GYScH8LMfic"
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
