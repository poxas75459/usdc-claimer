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
    "64ejEqDBkQyAJ9PnirzoLwPmLb3zKgpb1SWwSM3tGYAMsqBXFwRwyQsrAoSouH8Zg8LcWRr6bwkMFYMP79BeAaE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YTFADqkfsUX3WFx3m4t7bgjzkk21C8zJLp5fi5bzGRkBtjqoqpTwQdTXrmCjsbWFHqhwvdgvNeqrEDip2Pk3P1b",
  "key1": "5yF9bEhmxoZpq3GC4XZGAn3XjSBRZ3Xy2Eu2Fx4Vw31WcUJxyUMkyrqGgrQojcmxjBoExKxkVjbJ96s7Kx3UiKo",
  "key2": "nSFjorjY28bPAnT6ctbVm6AQw66kRwz4KpLE6Hw5gQNK2nyhkjUiSJjp5SEAbJX4oDMS1zb1UATJgRcaPbG5Qcp",
  "key3": "3ANvrzkAaeuoiJA4k83tDsgvthQtp7oz11141BqqujAWaLoraS5w6mHwgQ5JAv7GPRqK96fds6EQZXerBpRVeTw",
  "key4": "brvKgVZhrkTmw8t4vX6qLfQ4i4CpvsGo8td6mQHgpF1cyDCzcVsy9PwGQUt2dmkzFJ7HpfX6PWnM2Yj9UYMZJug",
  "key5": "4VxhjNJuHVn8ejcmaTxjMqBTzn8z1EgtQtz8Lmy2ADmzbYVJR4jL7MugRWF2NzGr7fWTExvV3bJcV9xWWYAbvv3m",
  "key6": "4MstfXQYf6EGF2NExGDQSAWBsfHnQzPSkb5MhhH7HckxscJd7ukUhHELNcLVwuxEH8a8zNrK74dpZ7U4FjaGGCPU",
  "key7": "3Xps7nU2rTGCmQmjA36BknpZppSmLwESbk7T3YwoXP57ka74zxa9aAboake1qtuuPE4oCRSH55zR5rUEhP17J8pA",
  "key8": "4tVVzCqtPJYe9BBN7xKEs1Cz4fu58SbzpHbHPNn9HCLpnHDVMJG1af7HcnGgc2VkLMDEzy9F3steFffEiqC15xHJ",
  "key9": "4qVRGKJf3ZXy9phXhEEn4smn4J7bsEksyBo7tRL3PbgePMvtRF2vNEWNobC1LaQRXH8cpTx3gWLzVVZSzBbgSzpn",
  "key10": "5SnRWUqLi7WxpFAgmL4rpV8kAd36CGqAM2xT2HpnmZDdENKq1WM3RTkR6STsrYtv28JoLiFhNd1VT1JfhcmEbZCM",
  "key11": "3pXhS4srhJcBgaShpGLeyzeAiBh2zssKjbaqtaqsZTaYnMiBD8CbZvJAnvpa26WPf68MhtC4uk7tyZkWYwE8RdjS",
  "key12": "c1PafbC8QrhP57hU9fiymoZQxpAXvk9NwHU8fFChUwqcMNPavVdH7bdFUzw363T3gpQREpQc7VpVFpTqpssTvye",
  "key13": "4hKmFNbyREbD5C6Bm6rhYepr8E986HZrrNo6jvMtAfvbFUwbYGu996BypkFJR1oQQDRFXm6zx7kVkMipmoe8VTKL",
  "key14": "pk5T8bJEFtBjP4GRyijXE68fSjtMKb4QvPT3kjsVeNeDHwserPnPy9J6PqVcHKeq5Z52Jfi1bkwpDdJodSNwhCq",
  "key15": "4nCxv7YB3hiDzD9SnYpx9ZduZNAVK9MZnugfJuLoLttMamuKvYtZ7R4HamHDrc4vQaUfc4vbq8LYsAQX4T3AUhu3",
  "key16": "Gp2fJNQjgyKHsCvb7P5xr2rs9uBXsQsAiUedQaYg2pryqjGzrvpCqT9pJ7dQsAp568xZR8xJEiWWn4b7K3Rzd4M",
  "key17": "5rtj5WLPD3owy6jnofDTaWKsnDbuz8aWJB4KfuFvxvPJAt5BNJzozuUQbuhF3PiAy8PDwHW5j6n2Ued5cX2pgjri",
  "key18": "3EZyEQGgwwcNaGs15cmbyT1meSxZrUUtcRN8GchxfWKaiPGmJhoBL1dsZDDg5qqhob1aFMakf4cFxeu8CKiwLAyF",
  "key19": "53BhVGYmWHheM7iJK96ZXVabB7R5xvNEBgvJrHKf85FjNh6ytvto8eW5uTfPQgCgqJjvQryjk9gNREPyy6apYfr3",
  "key20": "5oxB4UrzmE1kuHmSPRpj5fb71P1a9gfLhETc1DVWbYmFdrzJZgzXBuo9oF5uxYvmrFqUiTjmWtWQsMrZMhpdhKZ",
  "key21": "4uHcABEUC3jNWaKRBNYcV5RznenPLwFo9eKJ9DQaJvngM3vsx3GAMQV8cT4namx19Qg3pxhAyN5y9gXFwneBomVC",
  "key22": "3y9G6BQcZWFozCR2JrR5fFkN8sPCvoaUtNapH5bvAAKqiaQ8UivtYHTsrbcbVdcLnVjAAQff1cizKXaNKzJLJQdi",
  "key23": "qC6bqUZpZ2CRMXoToRUnKHHUBctwaidk5dqgHhWNxwhEw87Wrw53Y2VGBBPQgeZCTnBWYWhNCHZX2xMD3iqSu4J",
  "key24": "25Ucw6HKPEp4d13o3bNbmKJ5kP2DxhBNGFVdgBSw8d7aNXSCFmAFMPSYirZRHQPgcYVSykye2vBdYjAN7NqqYquK",
  "key25": "3vWj8z8D2iD9DM5vyfR5DgUi6wiKUz7c6KTw5BDGzyZacax2fRCemjF4uqdLCCecdZ33zagMUa6VxysNGqepXEUt",
  "key26": "3AJvg8JsgtGcgVuSX7GxGTt9sA3AamzfJvFa5dM7L3cx9ThUegH3Ug4g5x7uhZDJA1dwRsRuCeQeKzKMw9TruKrD",
  "key27": "559rH2MKFxwYX3v8pZPz49s2HMbgT8CHmGakzJ1mkQiAtiWQ7B2z7BbJW4Udq3YJAJKGNd12rXEmExxmpkZba31M",
  "key28": "ekNfhSsVgVtNhvQdx73YBFm5HCvZ1x6ou2Q9vmmUbQiFd4V5Yh4BYPupLkPTRnMD8pHEPuV4qxbuzkakXPMp6ir",
  "key29": "4Ahot2mjZdNyYUzptv1zzE9ueXBUr16iQa1SyiPq4rD2r6NxRtzvcVKoJAg2ZEoFymZzWkiwx3pB42s1fkhUTFQf",
  "key30": "x19xMGhzXFMuNr4H7uVuMHyhsBHQvFKZq3jbvUL6qR6oydw3Mjv1N1yhaoYj4V6YRpoj9mQyRLGVC41DwZmDiBh",
  "key31": "581oKBk3XCaJWf6Gr9LiKnFtDERGS7icBJkYrwTxDQa19RXuUHgJ1Fz3saqRiPLsqMUTonQxbByP6CxiKyYUGkWE",
  "key32": "KrZjyTDvEs24h3HZMgAPQ9cokepX9h7Tx3tPjQTLCpEA72WmkcBS1tX1FsE5xVsoWAwaqqLaPSn2pLEZUoiTLSc",
  "key33": "5Ujfb5SK1sEdWtYpvDPZTSRNp1Zn7sKxtQmpxSJ68Vi2PSd6pTMZSLr5fvvr6NLQPy6XmpYVcs4DmZ7C3KbZWv7N",
  "key34": "2r1sxmZWrKHmSwRbHgeDo8oJJQU9V9xFXV65nWJkA2CZowE7Rx87vdSMJ2rYVjpuUu6q2VAwFirtvN2rRtuKhQE2",
  "key35": "3Qdq3SM9mom4xGpCMJXbQ4SuDmEM11JkD9sWL9csJrjAGhBqXoAf3GKA4a4VYwFGjETztw811u5gXw596nvV13Pp",
  "key36": "2q7cDR4L11LmPgY8NqHqUUL3LLXbfhDi36Ven9CZJ1Ct9ef9pUSdyh5Bh6uPyEEoNPoLmaKb4ZZqfqW1C4zKAmuY",
  "key37": "53Rgc8eozZFPvskCZoU8tvcrqipq4BGfz5ozdNTFRorVCYx6SKS6sTwqj5eMVUJjGHVX2qx2LFqjvuwaeMPUr7KS",
  "key38": "3cwNNj6b8ossMEo8rZ3RorRcU18K9pErbaRKvaeLr1tNCYXJVDp1AVTe9ZizgrtGe9ywqY1MPBiLCuSGU4vJjQh3",
  "key39": "ZiYAHzV3U22A3ETBfTJrH48TnzxCACRFZjuojfFLmAPX3DRMcCC4fd3wbThMLAV6t4JNxxYUzBhbFpnGLPGHZbq",
  "key40": "2sqZFbF2N3aFSQnns8jwSxuc5ubyEEwLfGEpEekWueZSs7kvncxDDxnuhydJgQwVnXLdEgMMFfAEKNciZiat9mja",
  "key41": "3bgTKreAPJaCkz4NKnYV6nYZpEfkomonYtzXZ5Z6HLS5bEdtX7GRzyLvGJ8ehghetuq9xamFDLvp2sRHTha2juFn",
  "key42": "4Z9LA8gZDGwjqyob4wytDFqfXq3W4MPdmr3RtCHEqW26KniHzURFdrKFLBuwWtPqi7FeiQeamYQj5LBRij91hc85",
  "key43": "3zuucmKRpK6vHigYdYqq3ZBpfQFaaXsMWLuYPtGEtc6zhEb5wW9QirYQeLEdghusqt85hK2boKeDqgnmC4jHgBCZ",
  "key44": "n6nSCsTVLGCj8SHGSP1GiSXQBFD5EFmgv8ghxi7yDvVASSVetDoHeF4iakuWmWDTtbbqhd64zHzSGmwrWs3deok",
  "key45": "2R6XJhmwVywZrRgrSzZAysvoaRZRBE5skjN3S6Q4ZHC11skA87TDfAiLeqoVyJzNtgNFrE3aWb5eMHndtXxYepaH",
  "key46": "47tEAA1ohcdKvY7XaakdHUQjL5VzGAHi4GeRSAyRFzGoLwdspki2nj6UFGx2ETNXwJhtnu6d38o7ccSg9iFWyUv2",
  "key47": "5xtU1nWcbMPYHrW3fVUv3HrN9uaB1E6m7We38vpe5pT3R6VoRU5uBNoZtp16i5HGvCQShwUyu1DdjUc4qAdJJSkt",
  "key48": "5o58TXLpMbzjB54BQ7YAVo8oZ9DMPN4iP1s9Z1XSrrNjPLKUeCRavdKAvfXcyQgdmsh4HDEM7J2VqjboiXijVTX7",
  "key49": "5QNSfasC9kjuwDfxYoN2J7jfShoGdxF7ntGxC9GCXchGS5qCGHHcN1FMg6GKEDig8sNs3ezXd7Mx6W818Z4vhdq"
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
