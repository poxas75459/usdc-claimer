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
    "4WMnrjbLvgjSQdBwhKmZZe3K4HUeGBQ7YxLZ4uhWaAKPdpDYr1jLfE4JbYiCVJcWJFb21CxpahECvybzb7peWkgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23H72dryNhA8bCh175xx1cygZDUoLZNKhAJBS8P2gToHeCrEZD9uV9fQCwo4nucyMubKQAPRQSoQUacvivBkTGXg",
  "key1": "5aPrFE8e7sPm9R37vz9f3XmPJdGcSvC1Sj1NiKJKXVVGj5ipXKrWwwsmWCEvTr7ntcKEVogjxPCovTk1EXrv3JnK",
  "key2": "4sPyxUn8urkQqsZgf52Cv2Pt1EeZsxF7kqwu4ASVznHzx4ARTzpbdGRqCWbrxb9fjbeSCnKWp6spYfxnXPaPmcYr",
  "key3": "2oH6dDuh9S9WYjVNabUR5tRuTTVJxGabEEnLY2Yh999H6TVL8Nsgc2QTbmWofkuaKfqbzT7ABu4r8w4CeNDGqjzW",
  "key4": "2aUzvUUE5u94fAANrq7h4bi7FfL6dbviuqepuJDrWiuCyRkawkTyzUpN4jGk9CARF4xc6nyeFx8BAcfW7SSn6w7m",
  "key5": "tztZ1ck5fzwwGaqUauPpYw1PoYxRH1DGTahzbtZRe2f5a5gvqpaES7T9fEy3DTFCh6nFgnqrhZzzuX14Zm6e1BS",
  "key6": "2UXjutwPiqY2HrhACAa9NpAL6iPAf2WUZ44JbKwtFh5yGbAN5YmKL1Ky3mZx6Y84KA7AAKVWP6SCeh7EpxnigVL9",
  "key7": "5MAfADFxkc7GKed2RyaGvPTpqbFmRXW3NJbyNJC6xyP9cbPZBdMHJbT5Arfwby2n3ZPivNonr9LyTGJZhQJtA6g8",
  "key8": "4xmcv5WjKiNGYtHvAkKerF5pXUhFPAHMxxWa8vsKdU7ANAF3fzMsJaUwkBWEpWtie8XoGZREMZUMyfrS5x1uwyiG",
  "key9": "575YY1K7pYNJs3EpP8ueU5E3KBStrdUqw33j9Rca1NWtexY4gR2gK5JpbGE5AcGVmgmktn1Yy6xPTNcz47piHZCH",
  "key10": "23qKYV2EVE73g3h4FbxWMEf3Ts853yyW7NSzdhkbj5sJSAPX5hs8T2N2SnfVL4LMaiQM13EonZ94he8jMziEYdq4",
  "key11": "455knAH3PhT7WKXLd24ehX13UP9Y8UU56ssfZoBjM798a8x83rufPT68riSTBvhfJe2G6a9s1Na6y19iHeXR2m6E",
  "key12": "2vtYsx8Aqm1BZGiBXEG8rAkMrJg8PNqincYhkVzXSUiCq84yrWjMJacYMoPWWcmKcFaHuMzsUzyhgCjfnKMi9o3e",
  "key13": "3czobGUVqPdTopiDsxn25v7n2jQfHaS8kvsDFENMhMp7hTaKqaVD2uzvccZnS7Rxh93586GVrWhaq1T99pttN5zV",
  "key14": "N7ixq5MMJz7ZvS7AXZhe2P9b5Q92YvV2k16xjYsGRNsf6CdByLybmSSY4zPH9uXG74fMbN9H37kdm6NkeCbwL85",
  "key15": "227Qn2DEoKRkfQit1mGpSEiSQDK68sFKjFKXy5ABUapeLdUDManGDqQXpUZDFTFa7sCTspRZfVWksTvSSw3x9J14",
  "key16": "5Zv7rxxM86zBgNHqC8mbQ3LVkmqDiKoeyihK5PdDqsG6hYmAgBfNxSEZ4ww8GsFfLyyP8CGsL49ogzeGq4KVE5dX",
  "key17": "5HwCmq2sDAAddt25fsQshMyn1u9BcNrFmNUg4FBwDXRJUQdUrYmkJqmiADhkdZ5LGLPKYM2fnT9WmboCSrzyAs8y",
  "key18": "3dBm4nnM5eFeTRKqBwRnUmyMuMF3tfpS21JW8Xc2AQaVfHJrFu2rq3Y57o9YMZ68iu1Qxe9vjnKb3hKYP6FrGJRn",
  "key19": "4tWr1tjH2aUXqn2VSp6XdDSNdtRHsA33EUVRnJkSrwYyRi92qDa2urnXL68yKStUmGg7cr8VLLPWNbskmX3mA5WN",
  "key20": "4xa3YoGzU1bKJmJfBp3g4dpxrbXwZtfTvrvuPeTqZSaf9xQTowVDTQCQhYijyyUNZDSSBHZyzHQjCKxdEXtTGGrY",
  "key21": "4YdRUiRyrbkpBfrMtK1Qhy1AjydfBBuvyVK3jvTpuTk2qRe5Xkrq1K2Kv8UeQ2YofeFCKmaJHAaMF6rYxdh6irpK",
  "key22": "589Bpk7XpJnwXm2T6wgpdzBt7wWZKf9aVRFD8Dfovb1Vn9C7xRzdR2PRnQpt37yto7AyoxMR36W2sjXa1cnecusC",
  "key23": "2L4C4QcaAz6FNGcpvKM4dsgeeFkY9zuYiX2jJTTLRtwtLZ4rkmgxv6rTzr9A4FQ9KRyiZa9yVyuykgHwgo6JMmH6",
  "key24": "58CEk5ezBQFrQr9odYxVLXF5etFboXcGGzKfkgzUoi5SB4tyney8Wn9DfhKwvD7JqYfDUsw57vNkGmVBtF5Vv5Ro",
  "key25": "4CC79k7yVP6sud4QdZRhUmnM9qeFph4C6LaZY6Uk8ZNUfmmcGbCnroqWKEM3TBW8zePqtoPgvJSwK2kiaMHBKgPM",
  "key26": "27D6gZtSfvKvyD9wrx91dsUyMhBp4nUZQjueJYudqCu8Md84Ki3LARyHFKXox8a1L6NRuvDaWUTKTMBnbA3ZAZ9U",
  "key27": "sG65GySGYoHGsEq6ysi4Pu3uUNTtVAnvxpGPGnQBAJjo4DQUVgK37SCWAaMTJ49rbBvYN4J5RrAx6nPNYbLeXh5"
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
