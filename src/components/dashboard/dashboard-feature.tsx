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
    "5qyznnUeS1UZZFUiWS8qPpMByEYUWzC6SfAEVibCeGFZQSbM3K5iWCEpy9MYrSgT5mBU7M4pGtSWiDERhQZbL9VY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jUDHDaDJY6n4q1aC1zvWf6cvDLq31yAGk4jufgwxLEp89bRybftug5nDGAvrpNBFQeciyMm4GQFtxat9BHmEqF6",
  "key1": "2S755G99o8ksUp9cuEAxw2h86PRHJLvVeq4ToaUqDUsdunoo6gPeq4dmVW2wVDskxeq6AVGdUqAXph3rHBE8MJUf",
  "key2": "f4488Wau5h97EuvDMdKWvT2Limu9uygFmtftEbkpYfhvvk9WKNoysVLjtKuu3qHJxRfnB5TtyuBL4kQYXQ2RuYF",
  "key3": "2W1264YED88uvB44ZP62Bnj3csxvt2riPv5q6GPyduQtMinSzLov47BAUab9kSbsVDff26VEQrDEfqYSNATBW4TM",
  "key4": "5KxGd8FfzGkC7knyvnqawnvkhpTedxWN5yHNToCaNDgKvWPNGoWbwGo2sv32Jd9KLfhEgJ9HZs58rc5ZbQD8hud2",
  "key5": "5Sky9vbJTz7qridq2WRPi9jEBwPiHguXfJsqYiwAP8kZJKGYNsGfuTWx33pSBZZQa7DphKbun2t33wG12DKhW4D9",
  "key6": "4R2P8ESi3tDdSQ7LhAt3sob8Nbhp6uHxwDnh18rzFKfqhyTnf2nq7wn89ZVN2TyRiXY1KZZJt2bgxbiDPhXLMkv5",
  "key7": "5ggJpXAkYxNfeM98qPgVGVFy3J92T4SHwYSpMkarUSkAmbQoZ69GYDWvZVEWPZSvMRBUF4MjfQ7kc9DmAsA3VK4B",
  "key8": "tN3rcQF4NV1eRh8tkWSFEi4k7V7Xs28dRkhztz5RvKyfVYt17ViCztbM2AUcQVi2QFb1gwoXqXog9oKztd9mKyE",
  "key9": "62psBhpo1fo5h1cifAyiXrueYdw5Dv2c4jrSwTsWfHG92DTkzAtRB6geZjSxS7gMX6btDjH28Wrtow6ptcx9RWb7",
  "key10": "2obp2pLqRC9RAtQuY9rvrS1EPRMfuqYJHESEzxArnjX3yhFcx3P2t79KcV8gEJfwFgd3YSK7hKXzCuSkVedCPYVi",
  "key11": "2yAZLoCqmmoy8pBgoM7ZESXDkkWnLZDJff45i2GkebiejjfXJ58Nt8G7oCazHeP3ZzFbmmRGxUVqEHn5StbQRonD",
  "key12": "5PHNafRzj77GiZT85xWPVBoAZjf2ApQTGqcXSoLreF5vS9GXKV11TW5QUazJUfc8URmagHk36ruPXejjXB7hqoBr",
  "key13": "7DD299YnmM6fCK1ig6EqsCe1g18Awf9onHH2ojqmAkJZpSoUckeTi9Q6ZwgmzVLY2xUMoPpvdZ22vd6mu8iLWLQ",
  "key14": "2MjbFNd7eikarvp8A4wUa2Fn6DWqg9fdnoKbVQLA1vgbY3oDfHVDpu1W9FtesRazZaWS7bE4kjaXAiLW5K5Jbd6f",
  "key15": "2UGd8LTxAKeESWzu3MVTJLnTEUR555LAqRqcNQ5nMNMRxz3GTzvkm16tP8hk3QtNygrutvpiGDfzhLRuwraQWYFV",
  "key16": "5KFrfLa9vp7Zaa4nK96bRy6V33ru48Kbqa1JR4EMZ6kW8YNP3MaB4siZXZmPhU8fd1ua489pc8AQuJHTphM3vZc2",
  "key17": "4YW3LWzomVXhG9bPmSdpmupoVR75joWjkK9A4pEKam8Rh2No3Eji9EG4Mmr4XE9GmZPJq7pkckivF8AUtoEBcYvE",
  "key18": "5RZTUEdoeE1Vbg13pEVWrT5QVVLrfLCuA6duWCp9doVkq2J7cERf9zdwd9DDgnrrcqUDGv72yr6BTPrpBGbgtT86",
  "key19": "57HERdEvk2xoJf22QY798jcj294tzgVXRJHLUf8HNhXNKsCk4tSVGxiuXFAopCmAqeJUqpEz3B86Sjg9UtHgiSuL",
  "key20": "2qFoCSx2yAKiJVJ5xGCTCuWiTWs4U4bkFkjBy1dDnqyQE9rkB3f9ZfUHb5jucidxPT3ARGk6XiLEa4G9ZUx1DTh",
  "key21": "DjxFYm4vWtfHVERDRkD2KMMMDvcmgyAmFhog4vkr6JxdJaxfDUi73bB8WEiR8gBkzCRJUWh1juPZKHvLSxzf87n",
  "key22": "2pHqd37gGRREMUXLqtcWquJuXGVNerdhsmCdT6d9RFLPtVQxFgVQuwed1kFet2nFrTHHXKccuKepr378UDVAEx6o",
  "key23": "SPizwnZp1tyMUG5Hb5okVcvX3bKsnXPkufFDQtcEyszsPcfPcGromPna9UTRw8FwnwW4vvxep77PzZpnQ1Xsx3P",
  "key24": "3CncRiKMFvh25aZjN261aamyNzKSawAgAEgASimraJFp43AMr5A3PFPrvpEXv2rJuzF6Ea7CpK4HD6jEYoDd3Yd3",
  "key25": "5nrULgVjMCGZ9rNBvpNtwJrwZppAVvBCrnZ9CSUqsgDDAtVQyYPfnUkEaut8b2E2nkGRKTheumq16CQUaufovL2y",
  "key26": "J8hTiGSS6xo5PKKTUb3aoJHyuBBbDMdq9GaNsXWgH4jPhNbX4YkUcUrNp31UfdeWpzmTtB75baY2KP5st1wHC8T",
  "key27": "3pxAAg74kCmJahoqHdPmieMGfUE4HZAxK1WnoSXpnr7eacs2xhm6UtandUJ3gA9QELJ3UMfozGn4P2xKEArKqd6v",
  "key28": "3Hybzb4kDMdNsCDBUcckrNMChtjPKZ2xETE8uKXzvY1AUHWHzoY89pZiXeDjC2nv92KogNJu6KA2m6aSAefgsRwM",
  "key29": "2ehJSEuWW1tfgJACRicSj2B2nzTAntDGN52aq1eDUg33VqFcyFawnnxMXpwJMMVRRsdLjHJeCKHeX5egdJv9eMkt",
  "key30": "3nbb5LEEmcr5EQWxRh9DD9KXNaRfuRznJgkLfw13mbNAVz6fWWdKtzVSW3WaWHiBeScF3DY31XyHpxRtTWAsj6hD",
  "key31": "5F7e2tJ8mqWtno5yqAZhUFam9TU3R3rjEz6qbEMX9Qtb7kWVEAUk3xFt2bWYqoyjrifqPBEfnrKcTSkWyQDa165o",
  "key32": "4D6JaFms7zKeKbR7cLCKqZAC3SBv4WWFJt6dRV36VR2tEzbK5EfgcmSFf6aGdXZjTEsTSqnd2g6gTMcU3jYb1TsQ",
  "key33": "CXkppLG5fr9BoAeuFfYuCTX9mqvYt5oWgtN8cxi4F2ykjCriEnEnsNkrkJRATqEajPpdxUEn9vyTZGYFU1BSZFu",
  "key34": "4WZh77MjvWTQpj8LKsVMTLJVJgJvwFeA2L7GcirNoW2mSv29qHEfX7EjfSpCtj3ZX4i13igPVjaY9t3v8pFLuikS",
  "key35": "324uX1RHJRXcpX1oKVkB8X9MPQrNZujEAFj5QH5BPn6ynDXDP1FAB1Bb7ZByWF1XkngRYYJjBHWXodCJLgi9FYpG",
  "key36": "5BJAzKfizY4nq1fJ5zegHC2b6gzw2BMEKMY35BwQ9LEexNQNnHoakaNZqFK65Uoht2HzrGYBwkmCa4JtBLL2vygu",
  "key37": "5C3BDzcYet4kQ2Dwqz7KsPA4kWXfhwPi1Kavt4tEaa3K4PaxrahyciFcNAA4RhJqQyzV9dr2o155gDn3tmGEdFDp",
  "key38": "3GijdjSrn2uiJTNMpU5UMJkhiMV7UdVGKhA9BhhjEdSSUiKPABi5gmHha38KGKd7ub6zBra8AwX9FvsZDt1XaJuZ",
  "key39": "48cMG4mL4Ce1AsqD8uNGoYFnCRWrcVgUkdG7DqWmUtBBK5pFSpMDPCsfzVpFpu9ehBWXR229rw5nHzwFpVYbB8yH",
  "key40": "4Hvutujoar6gd4K8XdERgBzeu43QLK88Gapt2PMx9iaN1Ym6sAYfBrauA8rM2YsVBQJk2YEGYsXCZxXNVmvHoKu5",
  "key41": "4WbHPNzBxqcs8vixTQN7z4Ktt4u7j8JVhBWThXietJVkNBSNdnCqVyGuxWPSEmAN3kHcsbhhA6HSeL1nxjwqvv5V",
  "key42": "2KcMqo7bfR4w8NA2SHyFmWPGdx4oCpmyHSPFBVmKdCu9UKZFpwXTc2mGvAUNn35Vjm5sSaPjFiHyjBNZC14R1GZK"
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
