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
    "5BgZTQ24JNLsFRo1YmqXe2CJxopxQgx4ZCphUdfXVQHNJP3Mh2HEGVruuwXyTTdYmNc8uWsAPfGeJMvosRu2n9H8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1rMHLVWobscfdhZxwJik94BwHW5iE8Wdq8V6XxvCChb1htddFZ28GLFTep54Mmo9vGbtMSRUKByEXnBnUWCdGGh",
  "key1": "PbRgUG5VHS5WSRWpZfnP4fvCZKBSgtaR332usCY3R85Xykm8PpUyAe3xGHMZprQzTgbAHX49UBpicVUry9ru5h7",
  "key2": "4qJ9z95DtqWLSueQ2ECqG57mg5xfYUCrUx9iVczSPMHKqgMwmzb6DDA85sDxePZwKasdi7yYrCtjdoEnG3jVMUt6",
  "key3": "jWDNeR4pxgYzMnzuVhbxZFKuE18Ue5ZSHEt9KE3bkBZKjKW67EmEkP9HohQH3cbYVHUzwsuQEhJWnMpCacXeDWX",
  "key4": "5Cy3CAPSbrbqgzdBKbcg4FZ4Hj3fs87UQCK3YP5YucDRgkeMLNDX8E4xMp4xChLNaoH5aXSehwanSoeQng4ZsmfV",
  "key5": "2W6JnL7BcjNTo7oEsvcGhqp2wPiacRWrZXwaXKZaJcGqCJLbYMRrZKNZv8Dp4Q7y8QckFyvfJbYa7ZJMxuSLtGy9",
  "key6": "ghjvjqrXCzHyVm9bNb4P17cdPy5Z47vGMGujurSSsP8BchTeU3pZHXgkM59gLQe5UGnSkeGCnvtiDtoN2QJbczn",
  "key7": "5wwt4rDkvVRQ9X8Gpx8DRCHCFkqUD96Xb3dViz2xprU7mEchZ7n8fWp8XXB9cGYDzcrWgvdew1Uf1ZPSnnZc9Vgo",
  "key8": "517rMHJ9Gv6Sh4e54tVDb947bKwpjWDg7ecmG8coB8ApKH7nespPADzkd4k4Z8RnNPgouXFkubXarMo1GKkGUnK8",
  "key9": "57gGPwWEeyDNKDaGT8Mvkhss35FLMmSQbARvUCmY14FytpJkE7f9uiPMT6LpS48Uk1YFRtSEe2B2j5fi11kyneMq",
  "key10": "3S3ymkvgyhyDPemURaTUA3fYaAbG4AuMmrUoLvWa77JshrjAaP8XDgBvKyw6DWAvEBS4eMMs4fuA5esybQGtLfwx",
  "key11": "SVbEdGNDSg1peag7LA8LgYWq7zj6NygVyMvwbD6cqDF1SCytockC3uihhEBnLgW2H3UVRPhJ6zkCTWuKHvJSCwA",
  "key12": "ov5sfDWYSJH1Ns6vBjM3osdSRzNUVCoHc1VxXNZuFsuo6z2fJUxdbjJ37Sjc1d62ZLiisu1vdbNAdSLphtyodWe",
  "key13": "3sHePEYJa8hofBVLKqf1FUKgp8CQY2wzxUmVmsJ4x6WNJB23DCijxW1z3FtXz3hR2D7ZG8UzN8oMqujv7AepDzkY",
  "key14": "65LsDrmNZkzFDaRJ2DKeto6V2P8gncqEy2BqvhrmSVpo7hJY85fehviXuVx7qE8omx2FP4Fr1txCLaA5vhHBZZnC",
  "key15": "2smWhRbLPLTE7D1XiqLHiDXjtD6xewPR9XsKPe3fm3eAKjYtktdwxVjyA1rSb3NPGvvbZczJefbhD1Znoiv4pK8D",
  "key16": "5HpFhjGhFhceAuytZJr3cetHLU8Pj1Rw8XbRDoTGWjNZzL9KeVAkBFAUWpBsfdaYbsxWvrTDqkNZodFh7wjdp3pG",
  "key17": "4rhoFgxfCiZ2kJsq6jigr5cAEGxiVwWKo7xSaek1BigzmYNYhV9LJG8EJ9qZDFxBpyEtUneUB9Sy1KhiGcojQ24o",
  "key18": "wSSsk91MNnoj2EpdoFk2vxPbAYMr1d6fMn5UHS58fX4vfcWntAowkCSREfkPhCdLTvHiLcqRevftGL8wxuoYTco",
  "key19": "5kYPhyFUnXNxBRrbg8oGaRoxRVQehSjWGEZU7BkpVTHKFpAsiL9K6ZH7G1b48nVcdJtGgJ9yon37cRv9SyKfD1u1",
  "key20": "5zcgcXPaNNnisPW2WkNbcUDzRZK6x68A4Liawd9zy4SskAfc5P7uoyA8BrouvKN9b4Hk6SbmvYTxDvgEpLnUTzzj",
  "key21": "3kJxSZG8ze5YKqtqw2oVMCdFW7W3xfauHrVnbwCQWbHEuAAgny2tjQg4XGjBjSaXmWMjfLP5JbfdTc6PF4SjALYQ",
  "key22": "Ds7PExvpQaFUqzRpPhqvpoiLjMyZtx841PRkiMw984rLTs8eZiTUpUsGtJT4SbEcfXidhtR6n5fp5HL2qQSvruN",
  "key23": "3yu438FoZSusiqbWW25YcJUHg32uRjiZXNf2sipicTmFiJKjwgrkWURUTzqmNK54kmVyi2PN6ExSzPC5jvj8WSNz",
  "key24": "X82EcH2UctCpdcgncH7MUhqpxyGDSQfwGjF4xTCJozvkLC4Ya2EV3kmNQnYhUbfukBfQfsE1rEYkRr5r8BHr2i2",
  "key25": "2WBKRANKmehJuP28u2huML7xPLaL8DkFDk3HooiMgb1MjDBvtGmh8KGK5wzLTonTkWBs6M1NZBVzAn5LYteKb1nZ",
  "key26": "5u1ER7WBivQBmEPZGr48q4xS2SPNJkikpoNpbPSCs6YcdX1Dzmh8Vw8smJmEpYYuVzj8csfvnLdDrR3pm9KNMwor",
  "key27": "2JzHBxv67bRYbNkaWf5VmGbnpAdmsmrj3Hov895g4zpJxayYmEZ4GvPpdxedHdNLnUVz6p4j9cvQbjd2mUPpG9Rw",
  "key28": "aruhH3ofQh9kqZZjJguNH3XbTs5oScw7KE9dCD49iB535RnvX4Uikc51qjbtB481r3tYRwpECrSjUxKbt7XZo92",
  "key29": "2MXPZhh5WzPeGa1NPoCZuYYciHDMubnJtveQ7CYPh2UwtJGmRgBSweZDfr2fABHyPJo7Yg9q2w318E6iQhytZBRR",
  "key30": "43Vo67qk6ZPc5DPGRbUeTVeBc3BxWp49yMNojeGcFN3pncnmoTxRAjPkPB9GbwW9F4roBf7DSDUSJUn96KKF5nsY",
  "key31": "4oJvYsjSKow7B6gSGxFW6fh8vb5CLLYa6qfon77wH7xE9cQ4pnEbR4MosT88XJnUxjjShPMZ454QrH2P8BWt8vcF",
  "key32": "2X7ipHoSF6Wk2qCUNyDMwzRogVj2PzySwMLPPmgprJ4u1SUP6j5GXZoUGMo8bt9oxuUnHEpcueWX4uGVP72GdprX",
  "key33": "45iBYgxxDoQNXzhrAVgSLywZ5TThkogn2wQTX9AVhAMgfz43Eztc2j1EbRLZEU31oBCWPneM94oqczHFcor2LC1W",
  "key34": "2wC9UGAm7giwbHusV9BfjEdShPPZdDNEL65wKzT2Yu92y5yiu8mqyuoyYqmjb6snPPhAPcgaiUjPGk6K3bxaPFNi",
  "key35": "4Q1SDW7CxkvZR7vbqFQQ8oQPSb7RXyx6cXn7HUiYWQi57Z8ygDgNiBpgEeRYD3ZwiSYzKMsN6UBWpiVD6CsnhK7m",
  "key36": "3mYUrbhyERLayYNabaZ2tmNprZPc9XPHZhDPn3zjoywZZB7KYtuZWvjmwz9r5brbSFzzY6cu4xQp7Vw6er11RE4A",
  "key37": "4i9qJL9UquGBFXb17G7zPHxoB5dqdJX2Q9MZ7T8xaMhme6KwBEjL9kQsPNA8EoMZLMssZvTtVgXUaQW4jBkhiFP1",
  "key38": "5KTK9H7xG9AF12U3pBfR2JmUve435kMkFKmdunfQ5skzbXZN9Zhm6LBnF9uAYXx59XPg5DpphpwHAyLdjtUoVQrp",
  "key39": "39FvHarNDYWACVaY4wwkFja36juVTdfuY3JAdSQzBSJ9qJqnNxbbjaE3RDRr1pfPrexTep4v4SKFkfBdqXvgRRFV"
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
