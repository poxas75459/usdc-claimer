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
    "3963EMLynnLp2FPCdHroBJYiBTiV8MQbJ3F3iPvcnMSsCPoKTT1kdwBvZTi7F8uSqMy6e6fWYnsh9w6NibUKsPw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u8sLdEJMpmbnSVvZyDqwcC2Z6txZo7xC5ZDy9wTqwu2tKwWAPiQv6E8v1fe5LeBCH8ynbFXruiSsdHfN2oyFSrq",
  "key1": "32DtaCuveRu2ox1jEu7pKLQTrfoHUQzkas7p9cHemoxxFEwU4MhUE2n8kjeSRgp2o1EzMbMVadRp3btvkKb6BW6h",
  "key2": "5Umg1G5VP9rXuW99k8MbtJxybuLen1MVHG7fPKvSKfEpXBtPtQ1EyGHsbYPytFVvrw3NF6T4xW8axXud1g3oCXCu",
  "key3": "5hGTxeAXJuVPnbQ2qhMcd4Fr1HKhcNtMSqJx6LLh2tePQDk5FRDqy58fx5Tq4sTd3hheq4VbEiiKAytt86GC2rQm",
  "key4": "2wDtP7ofCXMPXKWaUwJVJdH6r6Y551aeF1R3V5kBk7eULGoFAaz1qheYniupq99Unw58qUmx2pjUeUDGocQpzJHr",
  "key5": "5h3ZBZ1XtQaob8uYbiZrrPtXNqnb6j1W3epahAtpADr6oXijwQquV86XXyTyLqXqrKpk5SKEqFWcNDvgzP62hKcJ",
  "key6": "2SN9oAYoqoWfRXxPJ9H4zFH6mjDmv8VYVXjbN2kbCukNEyXj54GsMeMrH911rSDvm3iYipX7HsDV1vGf8ZPTRbHs",
  "key7": "5QG1ZKQSrBWUXp4yKASYb7wuCeEA2rp1SANqhTbDbjvs4zEfwjMCfWfc22vK8jRpiEtYwZ9WiywDb9tXDQda9EsV",
  "key8": "3ZzPV1DD55SbGDRqa1ipeVPxCMN2ygBcSk5ZvCm7fiEFy213UQLVGfM1vuKBiv1sJ3PkYCPCX75aPgfmX5NANUzi",
  "key9": "5SGgECRSCDehtFEvFUhCxmXbcwyCabA8kr8CMtgnqgjjaYFoyrUqGW9ZTy8iFP7vAeRA4URMrYGgzir8a2SYR3Qo",
  "key10": "4azvFLqbs3F48eE1XMRnVbtTR3hjGqbPnjVdQFrL5KxoT9JiyUiZSBdVfjPDexB6JUmtjGsa7C8RgTmvVSKmx2PS",
  "key11": "2r7VxfCii398iL4fz64p3Mn9FuAsBdnckDMfPe9wznQhUmDxxmFEMsteW6jL2ZzSqF4WfDpUo9LUPKXN7kcM9RLJ",
  "key12": "5R1nMfmhXQhradFG1hBXwWfQ925hxaWTuYJwQSLwCV6w6gPxcHVyU45mrRqujhZBF4S7gFyLWqsRZPzzSvz4opzy",
  "key13": "3D5UipqRqkCugtrfDPuxs7XaJwmZweTmEBwT4ErtiVS5NNJQY7rQTnsscxZhiGdb86RCxYNrSSttqho1zaJw4Q16",
  "key14": "2e3cgs6XG2rBUpUHVQy3RCGZyyJrnpaarqWGGY65xk6xwqEmCiUx2Gpk8WfBHvtMt8pqTTcsXsVURkhLX4gNcLwp",
  "key15": "46ocKg7ZGhcAWmcu2nsDZMNYGUuqs8QGX3W5DtwB6LtVCMEhik7tzmqCHAmRQNrqUoGkJMfqRkL8HpB9yfeUrYKp",
  "key16": "5DgAEq7ivhoPqG3VFFAcfV9ngTdza7GdLBDL9RdDmGZFRFDjMYGJnfnkNJF2NLtPZ9v8gSXf6dd1PtfdLY8CUtXJ",
  "key17": "EVCLqbbRNYkX6iUAomNjqm4JnXUf8HAyXyiiyjCkALbuLGA22czySo6sx9cxXFJAYd8iGucLWwhA6qqroTCFZNX",
  "key18": "YS1m16gmRn2jMDFTqZ1nxzUJhyYi3QiWmVcwPfmHVzHcYmZMQS52GnpFXzB6LUnpoECw6N4HmhdgumAVEJoWjg7",
  "key19": "2i2ZjGtkffqsVWum7pEdavTXn6iUohJX7RzBFtKG1eLEjWXoobsUMqtRVkH1qv5P4Q9MYPDevHrN2Jf5s7JTJQPS",
  "key20": "3HAzUNCwjdxKi4Tx9oY572iJ3WXvo45x37mWY6hXQZwTV5GgnJFMyr2Z2Vx5pZ5vtoe3UsufYY3BexcFEv2wnthA",
  "key21": "4gRqPEde4xhWfXwDmm7eKUmQ6P9FHKHC6kp1pdaxdfBwp8tGPPd7WTAUunPrwArjnq8FgTTkUqcZj6SMDZfwDu5S",
  "key22": "26DW4pVLNJFygxBBKB9au9YHqxShjLQXGi6ze66ZQLbWbFxnsqSFHnQvgGMnJYXun546hAuPtXGCwpPA2Ef82Jg5",
  "key23": "LkKi75J3yrBj29S1BQuWcpvgevQqamp1Myxwv9DpiYhXDeUpoJHmDdoHiK9qvbJTFuSFcyz1YVrdfFFZVy511id",
  "key24": "2xd7eN13AbYC2iWkH6eAsp4Gz7Fk2QDhofY1CVdGnDAKeRsj1AQ2U5qNf76BLTi6MJ1Ai2HdwnzRaZtzUsZGgZGx",
  "key25": "5yamah4QWctoPGxkumqGz5E6cpqRtTnfMcAzYvXiyzEubLEhV1zKDUZhmSZGo2WTXuJ7gvM8Dh72Zop3dPs8fE8P",
  "key26": "2gGxEekjsfzpKXNdQEyBmiPwXEfCAFhKRG3rDJWhHRSy9zkBKxtpSBvSZ67jFpJidX7Bza7FViNVQhypPq3U5Mim",
  "key27": "29RahEVeVTwSySSYEMUiSQXkiqJzEjQokxzzQM82Gyeh86j8bf6T9reSrVm9vrdDAkkmjQCLGRdN9cD788PgEjAe",
  "key28": "4MBdprYdWdwGzeNq5q5V9uwqT8fVUAPzzaEL8SJvTK3pVvYVoyLtFKWNB3Z5JqJZCJG9mNLPwzVYYpPXDsj8nuQM",
  "key29": "5ktkbcM9DmmKr5ErRMk97LTGSiu1CqLThCU93LvpnE43f1TcgjRytdRx8aPwpy7PRUqLTtiJa6cUmjLghW7VoUmk",
  "key30": "2XTmwT8pDphcheWKLv7UnuwLvvHSNbj1b7h4DX9jTR5kHcykp9AsefozfDT55REDzpGD55xrUTUVNULnGYtQNSD2",
  "key31": "32ivo4sFYtpG839XTLKnyHY9F4GXW8uds6ius7YViYQHxDAy6xxkic1gYr7obc6Msn94xsZg75cuo8CtGKEHM3t8",
  "key32": "2C1gCdtCf9vVwXa1wbH27G53oBpm8HZNcn43nW9Hi7q6AfV9bbPi7yjgxumy5jTigGU1yFqDnR2XSHWMBqaVWsS4"
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
