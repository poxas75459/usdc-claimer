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
    "3WZeBuxA5WeXVVrkUcyJRNGfXcf5bBsgnLXVhiQVQP4wnjadEZN4y7TTaYL1vGi7hvif9o6DoQtFevAPrvaKCvbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49byZPqb43jyVY5wdChnBjVVYdDyhmSMS4ShSbTgX99VV36ahY8mqk7dQ8N711R9z9zHdSx8HWEhxch6io6hoCop",
  "key1": "hdnm8QTtvVV1imX9yeQ8C3VJJN2xWvCttSfYpMJkyzvjZyoSRQn7sbtkDHMnNGvH1bXMR8QMVFHNdA6FEm9RShE",
  "key2": "3jpLrAbTBYpdVsJ7Zb6keWfUcTR9VXsEodp8CkQ4TMxM9JjbgJ32FKApzdE1GhGdoTWddmr2fQNvkPKogasJ3vDf",
  "key3": "x1GZZ58K5pPKwgQim4YNMLobaDzWLFEdAKP2EneKVKBrMEPNkyM6jCnJQWQ2etXTvq2TG6mEBTk4iXpDniEVRju",
  "key4": "27WEgzXwZzqYJ8yiksq2RjotWLiiYvBi1MYS292t8dbUqQKxocQ6Cd4o3o4PH8X76M7Pv5jvp8scwhirtgPUniU5",
  "key5": "HzETgu3S4aNcE29RoP3tjzjP11miR8aXC8Sdwjaviu5H3wbvDkTDp8X9pPh5NdALyRRHBZkJ6wBQeKNZcyNXqpq",
  "key6": "2SReuieP8Wookbfit25Me25nmxCqGA7h8eR3FTnprxZhZJ3ZwgEgKV5ge7FH2GeQdaLyna618sx3UA2BXzSBoya4",
  "key7": "38uyATa8agdEMUGToDmSiu4oXsjakPY239A6osb9Dzomy8fBDr1sk5kCuvG6qfJwp5PPZ37KJZ43aPzRwBatZLm4",
  "key8": "cb7KxHz4ptzg5jV3DJraYGui6b8wmXLQv2exoiaEt8hd9Q4zHduhLYYTcZam9G9K98MQk5fHH7PXQcJgaUJwGzS",
  "key9": "5skLAAaHqFCrBRcM8SZBK65nnXzb1d43aj1kXmtTG7aUw1aQhP8uZZ2zCSnYdccpNePJDfMQBhZK6hF8Z5aUw2dZ",
  "key10": "3sJ46dLn4dkXshxjFNTpGoDHGASsBwbosFhii2vTssfmRTye8ibP8kMvDgjw1jHZ9wNWTiQ1twWbxN6yByWUPese",
  "key11": "2smfuiB31rqtF6e5phvX3PfSmNWjEjF1za9bWg6swcPfg8WJKzoDnqPgqE8Pqk3vtz6J7DxbixrWkebx5YDkC4ZN",
  "key12": "4947Fhet22KEtmW39ZWAZmLVwgrjB3JxDYw2NvVbaxXCN6XYePD7pmpF6uuUfebgiwjaEXjn39ZgqY7k1QzEVykw",
  "key13": "54YuLzJaoq7biCBbU6tp1WSY8qXyVHLYNKjq5wYRS8utm1zJDrtoRaZoFxNNt5tE7Qm3XPvvU8KSSQKPdgd7wjJD",
  "key14": "2Ghmo8xm7epakHAztBU1QiSoKrNGdGFNyryB7a469yurA7mD9urEwLxKXKfsUEkEX2u3AWE6RKQQgvMcxzkU9KW9",
  "key15": "R7s3pH6MN9trYUC6hFiA7HsZoeg3r9kh2P7FH9VPkc7tSCAx1GQa2v6uRdcZEhHM7UPnat6aHNdcbsqDztXpYfe",
  "key16": "4QwdntoCAEhaqetfEv2MWJUqYkjTq8mXFwAxR6jDF8VYZCa5Z5gLPDnCZn72MwkZeq87KsMnqpJroEATR2LjRAjY",
  "key17": "4QFGzNoH2GvXzemTqs8tcHsfBU8EXJmr8tByk2Kga29LVx4iaCKermxMVCRJBdzUR7s1u2dkSAQhgUrcj6KaU32y",
  "key18": "Mvw7DqaDQATmPv4UfLQQWsU9A81mBPGWbCq2EDZ311K4dRcujNtFCdQunP4Ka3PnVBsecnZ5UjGuXQuyYmTHYeG",
  "key19": "67iK8aCFZktsZHtQ11akjTP2BLd84XLrjgGzPggF74STsbf4Dpm161X5Cwhg4t9c1GT8zx6m4vjY3YtwFxLJQdVZ",
  "key20": "33XMJSGgij5VFei287ztdWxzEukv4SbRrJ29ATjAzcqCdUJs7ENy4oVwLuznCovbBx2nGGpyDEvrsDLC7CBDzqri",
  "key21": "3EJswYRKD6CiYLvVXTUSWej3vmxemmWBcBivnXcpSpmKbdYctjAvNGdiRYEXuh1HjA2h9zxNcL3MobDYRhDGCauo",
  "key22": "37wAqsBT42V6k8Q5Qd8eiCGV2ZG64t47Q6CXa8MBL5kkivtZVFmx7DewN1xiXGDCx63XzCd7Uiph1Tbs8HxsJKmA",
  "key23": "3BtMjJ9SvFtsds8F9iNVZa4aVejaVGcN7pV94vhQtYdi9Lt3269hS6VUM3YCRTCEMg5wYSNybS8VqeTuaMDVWHiS",
  "key24": "7cruW3njVerqFCpiey5ieWdgYEMbkqy1fGvBE1NwyNPVbgFhQbNx6TEBeTuX3hzJzFDxW2fsFCr8pVf7Pn5cFms",
  "key25": "263eQpDmKZUwPAuUG68WGVfBZX2oiBAiD9XnFjS4hT6pwTr2Z3MLtuncUbFCoRAtZMf5NSoUq6iQzqXsYSHWSpU9",
  "key26": "3KmHL1E2zwLjaXoXepaRMm27aETwPEU3x7VWK2yTr2Q6E2xCzSH31KjAp2CLh25kiwVm8F3EXQtgrt8BfMczD5jR",
  "key27": "3KK6yAYf9sbmnRvqugpoVxx7tFYfmMdiPYAaS3foga4CbLuN3LnxqRLuEiWHd5pxZuE28yPUyPE1b6GYrC5DNci4",
  "key28": "4AbWWWkfjvK8SjZskyKafyYTUKawAxkb4j1mMk4MaDYBeduL5k95s63Tdj4UJ1YqxGixXeMknS8eadVq7DZVbiKg",
  "key29": "D5qs4WAd1PS1ZjYQRpGDnipNGP2zKxZv4jqnVESziCHbUzZR31Une6WX8JoGcfydngnfMdXQP3BXDbx21jZTrRb",
  "key30": "268A23BfJXqcqvnUkEwygLzFwsgbptfnD3oKaeK1GfXaet8MwupcEotiFaBbQmheDyi1oCrWB663KbH1cuwqGcEe",
  "key31": "5cB4AkWjLRP7ZRzKZVoGtJWjgyWA3aPFntb5YE4f8dwAhrgUZ7A8VR3PUzWpXos8zButJGFTteyqpqu7RkiDtGkf",
  "key32": "4FtuoD3Z3jc7JHM97UzkBoxLSiZrN8b3pjMEuyLRKeSDVfKS8nmAbE6bAhqFenkkdx8ie698ey7zd8C2RonhV22s",
  "key33": "zPipKfjBUyJbqUVHjwGNn17EhcbTiGFso7iw18vEmHEx5Xukn2WC2mThUz5wxfJqeAPivp9YqTfQXH8pjhtyYkm"
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
