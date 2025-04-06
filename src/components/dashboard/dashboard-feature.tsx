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
    "5eroKx61tgpCXcaEiNjWuYgzNiU5bqTcDtDhrUfAazjPBbpx8WTz2bHFN1YrJioLeyFduJ2CWK8uafg3vArwDVx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64CVFRURwYCEyvaddgm2qfLjyGtzSEx1bs6WPdypDC5zSCPT6hYeSMpz3NmfRmSjei15vgg1wtknw1EgwfhRiZwZ",
  "key1": "2vqNqVBJc37DU1XLt1kf2YRYkjb7kE6QXWbJ88gxhziWhDb8UHuy3VjdN7PgKVjpSpwR3FB9cJ8DHBtAh3TR4uz4",
  "key2": "2W2MLP2bdAz9VPVERARHdhanaJxJoPGBQamThNvSY5goF7Ncg1sPJMT2cxzbnTj46FxTR1xxpgSuD5mgoNkhZftq",
  "key3": "3XmfLx12j9WE4ZZ9Y1YuyAFZkvnMFjLqc4tASERL95vdicnj585nkomurZ9qmmuWBsCBMa5kaCd1CEVP9XEgTiwM",
  "key4": "2GoQXCMnaJ8fDR5EkDgGotPnatAQhsj3rxiRUsLFEtUPYbhQcGghhgCKFJcKPpvinmJ21L5bNmxS8zFJuuZYGAH3",
  "key5": "3QrfLMAHVWkyj6LDmb3zR79ftiYm66xdTYLmBn5Z9MGJd8wtPVnS73dh3R72RfP2GicxhdLewhbbkuQiagXzPS1w",
  "key6": "JJuCLogGNopyBtqqagq7syQdrJeSFjzoqLEy2R6V6W6jMPbJEbK5CD1g5jow5LnkUANPzd7XR1uQhVXDNqWDxVE",
  "key7": "bxL9igPDCddHNpw9g4KJQEuzpijKpX9BS2cPQ1S6AdcYA8G3CkcdWFEYqn2Am1HaSPtrqm3LERTejQFcg2sG9Eq",
  "key8": "dhaZ9icuMgPmYCHbzWM7rw8axDDE5cCimYLrxMzYYEx52jkQa7TxvZ9niwKkECVbyGwLGxCH7fCtE8opK1gbThx",
  "key9": "4X9ZKcNzWyx8dy1mhtG8diwmjadZmqB9rF5h9X3EjmQN37yh4JMFkqxZ1G3CptVb4SpbY29SWn3ZwsdVHfB18SxG",
  "key10": "3xDcC3tCM6wKBZevqejjWtFqumSY8NZ6YsTrg4DxE1kysU4vMbUVvAGNrqBBojDnDpXCBP7WEfUnk2g552FanP9e",
  "key11": "2Ye5K1CVEAxGurijuPnS54WHgam9teXi27HURH8FhiqdMGoWCkjb71gUEdj6AtixikAEtzaZqso6bhmHCp5ZvRud",
  "key12": "3y74NRcxsAhNbF5QJYe1aZe1bbMR18HpnVsgM3xo6CpRT2rcXUHwf4x6QJd4sQgZFhdk9LWQrYdMysoM5WWpCTof",
  "key13": "5zkUoQUSp3vEk4sesmimuxuCMMbQMtSAWWGKJb87KUXM7viXgGXzqJue2eDnJxgXZDWyA4gD7zqAckc8aeTzYwf4",
  "key14": "3zDw67rmQnS6KCiBFoAcAECL2QuhZ4bVCgRurcrDRZPvnEaxegabSRmT5Q2QGnN5WS6Tym3gzFDjS4iC3hUaPXGY",
  "key15": "657fpveCFT1QPYMvkWBZLDWdEJVH74DchgwwQXz6pm6sDjcJXgeLCiHLopxFdQWwU8FT1z3sqb4tXu5qC276Ehk9",
  "key16": "4BWFN3hBNF7UmCQBgagxQWXeFt7cx5kYU3Dws55k86M691qvoPwmp83u3BRivWejxFM9YsCwe8dpT3xWs98m5WDS",
  "key17": "4EH8MMFv2LACJMLFpoZkyEgKvi6EoALeZdZXhSJUVAzbseg6jmPXD6Dbn4ENMREmbX9rVEmjxytMJkEcpj26s2cf",
  "key18": "3rNsNqHiy4E13fXXG2wTgzWiXcCqkgWh4uKbVMgBYoDHwSryvnEQAs6c6cHYF4GCLbnuUfSD3ocaJbXJKuPtcUvL",
  "key19": "5iACQ8wcHFsZPPAYtzmx8Wv1WHTEEsoGxc3CBZDQh7Yp7AmPF4Fr1cRjBcmTPDdZYfr7nz9fDF1vJRGSv13NwMBF",
  "key20": "UKWBpbuDArzNbjtiJEP8HQuRsg4ukTDfNKYK3uMDuLGgvPz5SFgqemp244zUft6y5xEFK13s5LQEJ9EQK3FTdDJ",
  "key21": "2iQwQr4o63vvCkJ1J4yQ3An3DjfG6F5TZhwSbdRdyvzWtVmqZr7cscxXTG12kiQvc95Cctcd4xdr5NWKJmdmcDjW",
  "key22": "3YeRUwD8TqDoyyZbt66c2qxSxpr1YxJ84cGRvsJ819qZBUM9d8a5dUs2x5K4ni8RA41LGFiW2ZtSukPkjgw7L8ev",
  "key23": "5dzYjRLnjyxmnNHcfwkHatzTu6ef2SQx8VYLCrNveX7Y2SF6CfwT1q4DpTbbkGoERK1qP2xz5c9kvMLXqoJdPXKk",
  "key24": "2wrYsMCPGrGcmExoU7EzvhEwvP69dXSCGdq4u2jQHL8vHrtrMzC1KqxYWWfPbCofWhEXE5FR7G6rami2ni1RQR2n",
  "key25": "4XwEr98CG1f33KMmhDxh2C3qSQd7o84mjiULxnkZFDVDKTL1T1C8vrSe6QcNbqeoRy4GKNHwcLeydmG4vQDrN2GT",
  "key26": "5U9DzTdVmgR2WmBuS28SQTqUF3xRVQq8ndhA25fbDK4bUX7hG4PRUTC37CRXkxjA6swe4TJvC69FrNkg4UuxuiCH",
  "key27": "265oSJsYNnDbwgTo8evTErvAoi3Q8N7cSqJRreiZHnCNRQUbRfANZg4Yor9cdFuC5Z9awYL7AxKMgmC29dFkhx1x",
  "key28": "4MMq5dKZyrHqePw1cbjfSQVjWYUKEd6D8eqrxs1nX7bggWge84K7gYbFuPmGGGq53uHsUkD4a3sCK4wnqoG885Tp",
  "key29": "3Cm13gvFP1CghMR2KGpHdZKqxofTT4dkh7bo834VkmMFa5gN8wimccfUXW2MwyTzQ5Lwu8wyqFmBXwJ4CBpyywXn",
  "key30": "3TA6qDdPj4d1WVnGiJpPj3rUTAUxWr9Pkynq9p84KyheU6QrD752rmcdYUq1p67Nwp7YK1jm3X9PHx8mcsLA6kmL",
  "key31": "UrMd36KRKJqiXhfSRhpmAK1FaSotgCNUNbvkYQGV8cj7cgTvDe7BZQGr1qb9yWZEDub3PdHWEiTHdbugQtzhdXV",
  "key32": "3dVe7TNJjMdp1LSpZsrvT19U2V7N9BFL772oVSowZhqSAh3EA8TAQQsEsxCqjexEJPhbeb6K5P2pjkePkS9vGD1N",
  "key33": "5amaivxmMbx6yfxVZAeoJ3ZLmcNTMGCsyNWtcgmmHhdAwQ5uYpMhuvRfTGjzMAc1y6UgCeUnZTeBiA6t1P4uDcpB"
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
