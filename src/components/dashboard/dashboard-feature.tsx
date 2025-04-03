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
    "5QgA7CikEMNbSQKM2GfwiPPmye26o8iqiTK3DZzJGi8r2GUb6Uh9WqFXttn9ZkVaeNzrZTXaHR7VoLVjdyEzpezf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "StBwrhs4nU3zG92qyriyxkXKUH1FxsExzu1MmBHBCE8XGnbLytdDtGoaUfwp16j6CYBSoqL2tPtGgz6YvAYYbwx",
  "key1": "3sGFKVjRCjNoBTgUuhDwSpf8VfDKVvtxuQ92ZoTa7RF4Jq4bGXpBKjAsEXYWVxzMFUw2FwzqkcyWsDFJbq2mrNWs",
  "key2": "EJVMdsQisXMGT6g8LcRqGVuVBMYhDCkmQBg4DC2txktYW98Kh9M1Gkp9Hm3hrLzJHKDFztoNzESrccxo54WMnAb",
  "key3": "3GPjAUM5Evusx3xAzaqWmL72RJfvFM9PpEzhwf8dtqdiuvtkFCtjK7ME2mwLunQdPuG7jA5pPp1xDmtJsvTvMUid",
  "key4": "59LHqbjFQuyvieEDNGodV7f1wzooiNZwB747urVRgJV9tFacWTg7cZ6kJK3SfTRbcLPn4q75PAYKaKrUpAP1waWT",
  "key5": "5a21cJb1GwANUrzT7xS52CjF5nLUNkJstiMMHgnYTRF6825Hb3rxGjuLzK6grjfiBuKieGLBAqxrtsbttnmLaTQW",
  "key6": "294eHcTzn6LTWEkhZZpeSxA77Tifc1Xi8mW6si7rhi44VcUdi4sfbrbG2ir2hnpcyVvFo7xCa6DZzWS53LY31fx1",
  "key7": "3nctn2Li8pMqFpprbv2WReA58kA3it8qtdKF21rS5kavZtSnkXzoRZekQ81DwCL8mQpdJ3vE3BUtiKQ5T7B5WD99",
  "key8": "2WAgpXJ5gQMwm9GBESdQPR6Fo4QUiSpbiYg2Xs5h7f6RjexMWWo3KbacartRUMKVv3pdkejePa2LyAg9j8L7mZhf",
  "key9": "612gyVWnfX9FLVGzjWznJqtZEhmp6WbxWsgSW4f3isVSc2kt9sUHaCqV5bSmfethN4J154UWibS65xFyfMEBrjCG",
  "key10": "4zfa2SX1zHyjmaR6ektcuHD1ULw8WKGvdUBarX79BLnTsistptHKddHaRbq4nT6CvS7Y7UvUvmvkNbZYYqMMvK7V",
  "key11": "2hSmuZb8hBgZroAFd5j78egs5yURYfgoU7kHyyJQYBHhXRguip1f2GWMwRDWhHXVsVCRDEoQKBWrFitrVG2u5gPj",
  "key12": "4HELUArKCFkcPG82pcB285tBPm33xUt1jEJANTHfLyUBT1zBAwavQGe4w3tkzsjBHfF56FhFseWNukGBVJKR8pQ9",
  "key13": "5tPwVzbym9RNd7JLqjUzthfDBz1PEpLiQXvSKRxAvR7cR7VEs2z1Qn87wmAtBATLWg5Ah5vZCT7qMyaiYzMLTCFu",
  "key14": "4qKYuHTQxRR5uFHN1koxCJ1aYn3Sk3KkKEKiwuo7FBMRXabHASY9FMbb7sa9qj4DrBET6gwkqx3Bjz5caWP3uzTr",
  "key15": "27wkRijArZYKwhpbttdf4fF2voCiCA2DCBShoUSGhCnVJF4uGYVYpyScoqyAB7ZdmiSuVCBjhSvdybq4KgXSnurD",
  "key16": "36vYRh1ZWw9Fqzeyw4FmPrL9S4uRMtmETYcYsGGujAJn2r15W8NkdaR8YeC36yW3kZLMcfh9MtoMpWLWku6weVy5",
  "key17": "HWA1P1j5DfGHZWg6628s4LmAvVcwJ5vVGAoGagd1GWaEVWScVQKQFvbuXZZr25cUXGcdieUQvPzi5tgbXR6NWYV",
  "key18": "35eZoXzjt4NpdriH7BkRZLBBtSeGBSnFigU6h9o24eCJRCCdCcwqoRGstCCiXtnovAZestKpYxqmg1QVyEFQxh9r",
  "key19": "48xob7FuUr2b1x4rya7jjkEqpWMzfe2vJCAf3EuordAaYpdgKjU1Bo9uuzwfcfZKVh2pKu8ptbKE4qD7sHTKGeaU",
  "key20": "2T83BnkbAHdgkTr5XZQxDiqVrgKPLBQoFe7LYvPFJHv9BdAig3eRm7G2r33ioWcLiJzKwYvX8YUevAkX7surt3zs",
  "key21": "2Lv8ysndscfPiZBYGE7TUQir3DKDErsS4t2yVCtHUETvm122fsEJV35BDv6EiZJnXn8Ffam9gQgogDcL1SkvWd6D",
  "key22": "ZHg2YJ4EroxFEL5e8b7aGVpShVxY1vq6R2E5z8TxYL56YTcd8NBqxyDuVZNcsQNHqNaQCtfgr5segPpNuS8vQUY",
  "key23": "2ruK3PfF7oo6ekbz4sTq7gmuXPf9V4WLWKX8KGuoi54CSbN6GYyZJSyXu6idqitTL6SzehTzTUBzPsfa8ZTa4ihM",
  "key24": "2fuPK7g2nLgnZH33m5fPwB7Rf4ffg9iqSxRZVrAj88FgM7a7A9peKaeKPyr9eLm23MzTCp83X846XbaMLSAkKQwy",
  "key25": "5VxRJKCjh78MqouTg4p3Lbh23jps29KCQ16QBuJgMbYZWZdqf6tapC31CegeuJvMKpH2L4FJmuEhqNZaoiWhjWXt",
  "key26": "yiJ8ro84stMKvys2tc4UAP38XXrejnfvkE4acTV5UF2ViGd5PPPLR2irY3JexZ5S51zohW7vtVEG9cQjxGgrGHM",
  "key27": "vFPynweGYrL5Cg4PgHTUSCW8riUHL5tHXedcLSnKzXtE5U6bmXj348Dm36cHA58EnsahEENdA7aUXakj1GRjHmT",
  "key28": "5XyLG6rn2oQcasiauUGtSY1aRVtbUrQi4YG7fRj5AW5trAQ4zdXaAohp3BCX3ZnwXKgcFKDPC8cVdMjLbCamaxzL",
  "key29": "54GwMUyd48asGdVK7MgkvBp1rWXRe5SaWvXZX25jxqAPYrg33TPgVqHmUYaDAzFKnDdaMVzHfw1j58a31xkKuemQ",
  "key30": "2fouuoZVJ2PKK6agPYngNMYZx9vfDoKjAJZEbshUA4zhRurKi9RovY6dMSQcxps4BvX8MWz4hZ62ce78aEx648ni",
  "key31": "ttKFE6y8PKd1yfkjxjsepjo39aAMty5TibZCyWZmEAC6jFAtVx5bLk3U9zkzA5QkXV2yNp1FuWi2KhP2Qd9h2d6"
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
