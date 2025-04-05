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
    "5JwynQjFiDtFkQeaXX1evvg5HZ21hrcR11SLyfgbaPJFqDz6qWeBJdW8bQ9Jh7C8BwFtJJ3heBcTsGnUu5tH1FHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Z9sBj6tFXqu5DWDJ3CvYrPz6uWS7fJ1KccngRy7Da8Hc8A5TiSzQfjXTK277tzfgBA5L8WdFmKDcmCvs8BiLsk",
  "key1": "4ZQnkRJRL9mvuYaZr3UbG14mwwhVDJgYk3PWgENLvMXppgM8FGq7Mt4qqPdYaXr8ZQdGzk7pF4XZGinWUwgqB4Bd",
  "key2": "3tDc34iKSMsgwCKjJxTZKjn7VGtXAj1HkNi3DCPtYSF3a6XkNmvpM9LRsezU6ah1m9hMTmjNywLk754H23tmduef",
  "key3": "3E84ttydAWDmyAgoxX9qjiPnZjyJyQvWWpfAhvbvEXzgJdqhcHZfnSuSdfhAVihF51AKShbXT26KSn8NCiNKGAdr",
  "key4": "3F59ECzN9zMiJzzyd86Rn1VsFNSFeGrZH6qVy7ck9deHs4YYMXiSBYXgippczQMBB5GfVvHayTCod7ZeX9Qtq5Vx",
  "key5": "2h39vqM7TZTMRBXbAMcnA3TDDCcsCRC9x35JZcq9zAPFfuMnWdocei8aLR7vJiYwpvXmWhec9GP5qP3C8srnE3mw",
  "key6": "2ese4A4Ek1NG9AEwjQW57nufaDQqoKvUPdfRNKGSEN1JRpD5CZiDzAS9iJj6YynCAr5muWC3uYe3dysQ3KE136jB",
  "key7": "4r31XS151Z569kcSXrM7kTVsdQ3wtixGkLGbdbx9YazPFaJituCXgGEPr4pBoPHsdeQ9DLN8xd9yGLiwSdb4dQQj",
  "key8": "tgCBCXWGLtDFVMVu4BruDzKcF99KqCT924WD9z9kiZgQzntHVYjhJieS4rAPfCsio7wfwm2gGeZHKNfTJJeJYck",
  "key9": "3LhPT3HPD319wC9azoXZBT9vYGiuzuggsstaY44vDWxepBXETSrUmrH86sM6woHSiEzaph2CsYVxBp1CdFwdkJaP",
  "key10": "25uLzWzvGhYf5uE6YYBbyBpx7GWPDc93rMRd2MKveD6ryHYLUxJ46jp7kY4mV46fxtsKRXuwtUmQUohfisvZay16",
  "key11": "4wd5U1WsKsNzgmQhtWphYWy4NMYDFZKzAi6tmSABE8TpGMBfkKQNhu6UFvdRv6TQwwonhukjqUzzA1dY513FwV1J",
  "key12": "47AzGiPg2GJRyC63co5VYEStGKUKhDkTaymyffYSw8DqcCLqtjJsibDLXucY9M29w8hZwQnVicHuvN9CwD42koed",
  "key13": "55bZarva9WnAgszHVVBYUB3TR5gXfJmKpGzZPVoNQgmZEDcGbZhwiDABkB7auZyAzzdaWbtuZSUFdC6yms3autmv",
  "key14": "3tGQEj9B9TRtaXitKsYtFx8nBHjjrXH4LA2i61v96YTXHeCKSrYz37avm9nTmD6rhUv7oBLdfjPQKDY11uv2UVB2",
  "key15": "BQ8Jh2wcwDVr8foZFXiT8hmPhpbmsDU34jtQfnVEXyx6UG3anAqcgAzd2BZw7TP3Tg56fvZFHG8nz4RqFzhry5X",
  "key16": "32AjXLRwpiKsrzeVuEMHhH8ivXLCqU153Ldgb5po4iS2rgAKjBuNm2KKcaoML7TSyhYKhDv6EZuEp9nFRoSCEyzp",
  "key17": "2jwkYacqJZPJXFeniWbtwNZrEQunNB6yZV6WZrEkPKNVR95TCm3af6oLKNV4jZxBdavT2ro6jyvzXVmRvSRy6yFQ",
  "key18": "4XStr5wVcndwF1K9M6H9pfcPpY7qYfBPz9EbT5fCm19v9sCGaYWTmtxtS4qthNkyfwoPCpVTcuubnx5cQkD9bWNT",
  "key19": "4BQTEKmADTuhVznnTbDbtRvkhwcuGpRNAEfKcHd2TyWNjqEvnuTzb6rFucr2LqW84MnyfomRaap9gB4qDLFPAXRb",
  "key20": "4o484isy1uVEowVF5rJtehKbk1PqYQ7SQwWLbKaf7BuKThaFiaD6h4SsHGUW3nRyFCF7u2pCHt3H2JyPNXRg7yjG",
  "key21": "4eMskVUSmJjSwoRKbS7tPZiWhqLFM9Ha6vwV7aXmYVPLD7RDJqK5bkLPF2wGuqBgpPfYjqy7G8NvUYzHipqtRNYA",
  "key22": "4c1hMMkwiTLX3g6LcJyvjf2PX299MVUGq46NJzuen6kFpqiLYsibJp4515uq7rH1J9XgQLK9UxrEdKHQGEMuyxww",
  "key23": "3q2wSk7QTUWCoCArqwcUT9Ub2arSmMLRa1LLhybf4cmNWKBtJxxnoS9TJ6MUSUUjFPGTvExQVcRNNebJ5FzARwA2",
  "key24": "3RNT3VUdxTeMopHrnaoFSKUhedHuhSYo7Q7hqhayNitvkeYsiEjPVZinKv2USEVRzPo6EzPFDP1j5aRZ4vZKF6ex",
  "key25": "ouaknbBPwKfLY7FXJWt9nwvbR4FdkvviQ3Z8CT9ejerSpweCUynWamG126bJuptLJz4HbediuFYAjH1CqAVMcPd",
  "key26": "AJ4dJfb3ETTehvtrkNfXXbWXB8dVqvkKjx6p4Rn9wxj36oTSCXt7FWctBBcYFptR3buiYRwJiH9sisSxTFzxoDc",
  "key27": "woeiPg6PRUXpwDU6Yhmxu3R6ZtBcPFZXModuxf1qqvdzh9fZti9fUKbdtNgcFbtcNzxGnJ6r6gbsWrBmKNoBLqh",
  "key28": "PkmAeRUKtGRgHULBUAroWSbHzvZJSCSHBMW4TQ7kVxNsoAAzzanjwtz5Q2PLKZm9fZXfnzhS6UAByou9hLzkp8t",
  "key29": "2K74GAHzJ2AGX7Y6spY3hUhrw6fNj8NTQzxhCjGh4r3q3QRcCHNVRCD2Bn7aAsmyiz8RRonWLi7TGJSEgA1uwNWY",
  "key30": "5FcSmJQmkhst9MY4Y5SWPR5FtLSUYXfnjDd1z1Py21ZaofqMNsD1iS2DoNGS7FEe5SP9Jfktczof5JwSPKEBNEM5",
  "key31": "36zE4hBAE1iZfYQobkaptY31uTp7MCJ4fm2P33JFe9g7W7EaiKXEUSJNhhAKmtxLAotVdsufzZeS2X3Qx2YV54VY",
  "key32": "5MSVsWz7KYvPJ8kELLyzNeX3jqPJqW9UJZ7t7nV14sYgivJmXBefWRQf6dk7cMJA5SLQomYjqHug4XuKSySd3BAL",
  "key33": "34GsvzwMUQGQ13JbukzdCXR3t3aFnhYC75rMhQRh7bv9Mw5AQJBXFw5EYb9mW67gHvkCnwKoUkPr7wwnDkTeZcaa",
  "key34": "MBFg2GA9Cn86TiuA8sM2qpxsdWbSvspLz2GWeJ2QbZBMQFcyxeJc5R5a6rG8Q9wiedZ3uWZpVzPitks3ZB77HpQ",
  "key35": "3ezWPZ9sExXDpNpknBwRnDK5vtahL7JNsow2FLizTWBjVGvmNCMY9iVZSqZb517eWQDjDRk2ANc8m4gtaVt7sa41",
  "key36": "2b3RE7UwWmrvAAbHQ8m4mZcCD3huxCubvUypTp4T7SSX4trE1aw65gxZbtjPCoEAwZ8XKjwFwLuk2eBK54oii8ac",
  "key37": "5VgUsFhaHcy1fn4uJxQTWjaWRWMtzuHyMk4A6MmEUwicqEoQkUALrHkh5dCEtFy8DDkNX7n9G836MJrw5hFzBLUh",
  "key38": "45dYUxfC7VsFAqBmPm8NiE9k59rBQ8eLeK7PZ4YYbrvF4nnbmyuH3Zw4Z4ikbzhsXPtKJSyTw8iKS888UuzVBkfc"
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
