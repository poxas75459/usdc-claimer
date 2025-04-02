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
    "5ey6D3thaXKJYivZpaUvcgUdAaA6us9MgbSaEfCPHusD6AEJAK8sKt9ak63UEETgyCp6yS7FWWJvvqxc78VCectz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65KSTxp4WZmujF5A5FLynDjWuu3CCxX2h1y7kWwDoovVYvLHpfRnvqBvQwRVd3RWdDEhwTTmgYrUodWe3XTwqrb2",
  "key1": "4Rb5rrSJcHoXrB69VTL7qfDrhJozigs38wR2kNb4H8W8U87r5NbuckdjyhvtDB9twvbtnDE5R5sfgfsQYa7n1wR5",
  "key2": "5LEH8PHTRaj5MQAJ4s6SddiyBKKgcBZnKrkxx9t9hkprX9hKEhQVNv8ZNUYgrBhpuxUkQkSFoj5NFJ28QLZzfRjs",
  "key3": "3A7Hknxfb55QMBefZxEaFAQy6VWM9iRWErACaJuRydcVewPUDxcLzWy5g7bU3W9TYtvfhXP2KUX3SaePWpvnWj1R",
  "key4": "dDtmUCeBzAfdz9ZgvKdPWsRzeygAcnqSm3cX8FPGrqtW7CqSXTDv6VsCAQLTgV9Lbpgdth4W1fXaGAdh8ScaLSN",
  "key5": "2cZ5joKCmEEdr4c2Qys2gLCibmaLUb869EAgTyPiL18MkvTaqx1FykdrQDPHDNMAs2J861ppHnHLFnnd1Qxi1aXj",
  "key6": "3LdA6hhi4DXq2tayZaBGG95LBeCcya2nb8uoUeawV5zZjztr3NhnE15553aK27UL7Rq5WhQo8yXyXsKeohyzK3V2",
  "key7": "dtcbzw4vyPxF8xwJ1LUou5k3askYeerynMEeo4qBm5g3Bq8AjEzFVnpfmX2K4JHbTvNLLZfnMqMXfQSfadKVRWo",
  "key8": "5SBM7C7HV7LLHU96nbZvYj9iKfPNeQuYidsZLnccqn1BjwYwYHks8ssm1jrLzdwi1UgNFfTthYQ9HxrTWbSQWA8G",
  "key9": "4N3WUmca8bASvUHp7JuyriqQH1YAqjuZ66VNC8F33fQvzAvXb1QYNbgpCqbBeuhtZNGzeBHxcbSw9GJKqxJNgXBp",
  "key10": "5an6bkgS6rSEAE1f5E3io62whQK7iky2gKSVwraJyDNvgDYsGqPnTe3njYaNJN5wZpArnXnfHpsukfbogJcY4Gmi",
  "key11": "wbqh6nmguocrfbgF9HGYfSpWYJcWWttzHhJhXgNgZMYd4cGFLmnuFzmGNxDLDNQjs2SASyETye5uhfSYGkqehzm",
  "key12": "2vDoECSiAg3nKbUB2HTbaoifwhPPW3Zdh8CLCuD7MypvLKGLXLQH2SxYep8KDDZ9dS15fh7raTBYA4wYicWEdzLm",
  "key13": "5Na2VfueRUTmjgGqZAAjhWnr9Y747rH52Uqw156sPCfSmkybBw7nLigsXjSh9Qc3kHTkFq9bnDKsJYpoxTinmunw",
  "key14": "63YpiL8dHznbrcztexZYNWRReZFLcrDktsvFugFCKxKeZzCrAjqTp1bwaTKCBvd8Mn1zcCBhdoyHfqMCjPRhc9P",
  "key15": "2p6ExBRUeRaekgqnr1g8QDfgpwt4naZ4LGL5YZptCETc2cgLQiwu2SagpHTyQkQgW5bbDGwL4zF98ET59hTt39ZZ",
  "key16": "2e1uJn1Xfw2D1Wz2AVvtnau3ejhErvTB867ADzjDNcAoFhvzBS1kpiFT5Rf7S8NGQkPgwCvHyCWvS9xDkRD3FQHz",
  "key17": "3kxi1dbUuQydez7vuoCNWJVHJa1FbYgfpyaq7r1hSEQsPzEnDEYCFdr4CBnaj8SPohbwWWnmrw6kYoNPVzQikW1G",
  "key18": "59BNvN5MApYBVGT8GF7nLUjQ1EzpRqCBE6Jhq3nb4MyWe5BZsp7Yjw3VCqDW7v1V2RPB3V1s7715YPf2on13dv5H",
  "key19": "5LhCvhFtv3YhoUWbredJJZhu3xEcM6VwyxAhDhkMV6KppbuQitPy356y9tW5Be8BPZrvCupmC8dzoEppiT2DwNTV",
  "key20": "8cXzSpJRymqcPDJADHAHsv3CCopyXa2xGDpFAsRNcQdXpcF4LkiPSsJxx2GsLPzerBSu8fFNfi1FuKSERDLBiq3",
  "key21": "33R66MxqZK2snF4u35s6wdMAL8BJVYJWQ1LmRNsWs5xKNXLr3Xir7rF6zwvVJLegkZZUSVSy48x1pxGb8nLy4zEr",
  "key22": "5Y64LNj3tfR96DWKTF5QTDvVjoCkdgzq5w54kZPG4goT555nxxjPkkQHtMi7E7ECB5FbSGh7DERjVTC331kxiLLa",
  "key23": "c86dPzUSwo1FrRMDR7Rd17YkFnS5a9ekuGw92PKjtXpdbQkkDVShPFoyY2E8NTcqZytkiSvCRagdTFTaL8ginX4",
  "key24": "b6yxrJqkShQaQaVDaiPmbwKDnkpk3An354WviweCLiSBwWn1eQaHFXK1Sd78xQJ3VAPeYDwm6QdHQHg1ZB2rGbH",
  "key25": "2icCMLyENTvye6mYxz2bCTTRM2Y6QNYPJ5eYf73MqxuL7UDtiDFdTVmXNUUYw5h71vBGQiPdCKsRbV4tncdo8EAK",
  "key26": "4PDn99nQwZNfNg3cK447rMFrZNYtSqceWf7UYD3WDs3ajSnx5Apj2SwWyCD7YhvjSK2JQMvj4jD6s5fbk8fbhH8W",
  "key27": "41MUuzNoeAqfTWhr6RKk51Z7SWfBCgoYtw4H8jpB9DFs1k3WwZdiVE9iR5sF6T2r1anMe9Gg9JM2SUMeV4kKMoxQ",
  "key28": "4FLw8KNbUoGVtwgjFRPvuYERkSR14PbVxUbkZGA7pgvjAJ5RiHKfySsuThy2J262zjhaqBoQFfPcBXv3UGqEemEf",
  "key29": "4coDocbBoHiy1qxkhvB8jeoY29YavnsSAgECLmp4nLUmMcyDuF1h8YVboij83HR46t9nrJGZFSCkCiqZqTS5GtX9",
  "key30": "4cSwFuDRN229La7Yz71n8Dw9tUsP1N5RKvM7yAZUGCKz5fa732SApjEWyK3yPdAqutA55c9vDtNaxXP986f25Zoy",
  "key31": "jWfGJ4GRGbrYD6zJxgnZFjToDpB8BJNHEg38TUaHmi53X88Bw9EbqwrpY3fNUAhq4MVoajUuBugREUi4GfFqmCv"
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
