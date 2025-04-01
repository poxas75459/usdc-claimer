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
    "33oqHMFyAZuF55Znjgzgq4FTmebXL8Sg5kPW3RjawL4LTc3po4mnr6Qxf4qquVERGURjgHdAdbRzQSjw8zoWPAFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SZ81LkUnMYfktahk9b3XjnrhEAZNPvrPTL1Xm1RywqB42JhXCcRLwpbQfmxy8AybWUBGvQVFkw4VKcoSczhGeXJ",
  "key1": "4ixaivMh1iVYyFZynYjNbqkG46pibHcqXi2Y7fh9yohNo7qReHSwX8DdcR4hTetunLnvx4gvrMWFHU116fnMYS6Q",
  "key2": "4g87tbHWads8A7CCWhrqcXx6Mqxj9tv1pRr2ub2Hw5Cs9UeEJmVHd5PVfwX3p47BsZdbyfZmQzeH5gdeUxXYpb3J",
  "key3": "3pR7esPQpXKQd69TrQSJyhDdNzmke3EpE4s4GenX76HTRj4eMwf12KQ2uJSwMZUa8C1HQ9dym9CGnpPJwHRaxVqo",
  "key4": "5yNkmwvWNUjpYsNKhvfvo8PeCtixGV7gmHHaECMYJcfQ9DZVDZJmyR4ku98QuzA4MjpqTMGwJCMi8LgtjWN9ZtFc",
  "key5": "3qopVNEtcmS7VYjA8Yk3PQD3Ht7n9xN49LvGzEqiVfSygjcazpBRtb82VT4aDnhubTPqMXG6jM8PfQCimxrmkaek",
  "key6": "3ZADUsNPxsyAfMSfqKB8BcCiB3pDBoo7zYoJkd7X9JXVUNg7p9YovcibbeLW3m7AT3ULtu1LWiBzqNj88AuJ3LQ9",
  "key7": "M26KxDfViFin4HAKViC4r2m8Pip8jm8XPt5Ahj6BEcUgQGmv1nZhvvzam2Caoi5jHitRvFAHoUhZzEiVcU43CKp",
  "key8": "3WTDofbk4XyWsmm4U8zXVpmi6zT735rT7NEQdPmPJuxr37rqEoRmehV8s9eHYspEfVfksGtg4mdbjaf18xRmywfb",
  "key9": "4K6D869cxEyokQfR7FRp3ALNx8xofJCiVftPfnyJC9E6s2c5t5As2iqzgDsQjaFyc7nuu6jA57EmqzKECe9SQm36",
  "key10": "2oigmUXhUrvJUjWaNfwb6Dp4DEGZgSWLMvyG64iM8TwvcdQAGLK4JMag3Tk1TRx42yDjQ8B8PB6utXhzsid6WKie",
  "key11": "uNAfRcjtMzLP1X8pcncYDLrgrpQSXcVwn8LYWwaRFhyGTBQTkCL6YstxqewK4fBAD7swYQ64hYCPcnBXmx8drZ2",
  "key12": "4GaUDMyK4SCLKYvaxufo96UnGqsqbvANCcy61e4thV98Kes1TPWdEZkkLRLJyCbxsc3EYHiSAZfCrfovmyzLgzvb",
  "key13": "5cNkrUpTRhomH7PhzzPsEh5BQ2faMmkoC56gtRy8KtB1wGQECYmEYK1gwfBoGunAFNa8ad5wW421RDwAmSQhpA5t",
  "key14": "4yXgf4h2DGGqf5VwuKKhyhC61fDYMCtMd6GvvFUSpHbV3NkNEaaTo8Sw2Mv744AfzJmE67tWsbEpzzsB5vpXrEpC",
  "key15": "4Gq3SDgyTzTDsr6aPQQU4naTSBLtQaxgdGuYqf81c7v4fAifs4mgs3zp3jNrSPu2Nc7ioBzsMdfkLekfg8AWXXBm",
  "key16": "YcTSo3skcYCd4HbA3GHr6iXFNztEzNa5aaPUPDDG99yY84VP5pFNBgTMe6PeX5F8FuNxZXRxQpP8Bcy9cQcTXmJ",
  "key17": "4zMLw2zSYa9rmDtJVjvDzPjMFoy2tqEohnY5PzzzvKYkndoZ8X7gWDV4zScjUTtpQYbFMtDwPabN1oSn4FJvkJLf",
  "key18": "5KBrT4weFQQiqL6P4zFYauPwjC5Y977EvKD69jNr2kadEB5xaYeFxRmbx8JV9Xk9gw9QJLpFr3pstwUZw5FKLKDP",
  "key19": "23nXkYuHexRizAfN29KHg33WCL2ZpSnyJPwUrseknGfpybpKbbyHbmMfSGfZ7a5xMLxdcMwMm9p8hanYAqrAasEa",
  "key20": "5HfuiYYmCad3nJkNaZAaqm7XyPhNwqDJViW8kCavXrDyJFjPQCd62UoBSeYf634fvKsgEhimp4BsotqVeijX5sxJ",
  "key21": "5qc7xwXEbNCw1KS6udour6iFvyTgkj1sEzwcULRe5dGkUSjzDFyNGFTLxiy59NBEiaAzqhuYJ4FGnvFRGvaJ3Ujz",
  "key22": "4BTssfkDcoTqjEkhGwUAQnine7gjyoMJxt9rEj6jAag4MbBGyesTitS37zyLhHBdPKDZVBioAdDvaWBjbRXzmEpP",
  "key23": "51T3zm7X6pMx3PgBkFSTkYJV2vYuDiHHjqZTEVP2PX3NqhVz2So5c8NXC6HrCgrFz5AFwvb4bETUWquWbp5HLNEV",
  "key24": "4Dtsqe9iqbCDhtcXUfNKjqeRYWFdxRTZonL9zzZFJWoUashehojkneFus3ULATWVxvfXVKJBY9SPSiwgFeRuVbU4",
  "key25": "re3CRe9gJre3ixUVEr97WwdbXYQC9N7Wjoz2LvqfHe5X4QnnkAWiaQRqBUTLr2wuXTn8iCAkFY5Ry7KGLD56Qbe",
  "key26": "2UGaBpaZszAoZEZexpz1mXxHQxzj7vjosb6ufWd6E3aQidrzhSA835muZfhTV9WspFpNjcpgXnH2cs17ov8zRFGA",
  "key27": "yFscaR5DZZwriUi1KzMAKffkhVpCveyAWAqfgAhyH86LAiwP1SzSUMcq2ECSLtugAezAPakiELrV8e5ZDo7Xkg6",
  "key28": "wiYXzhFR2qkrnRppEd5orYeEe92Qvm1ZErytMNt1vApMjNy2UhcGCD4trL2EixTc7ZgRhJFQJjXCpiY1vHQB3cn",
  "key29": "2E1kraXgfmR3StZdbhU7ttJwv7qiH2cQRZfSHYsjfLar45RA8DMBTu1Je1KFenrtF8ShAxcrLbboYd41QZTmAMt2",
  "key30": "4zGiXsB29rC4Sss6pQhArG65GZ1EiEMwVvseBAqNTc8m19WAmxdejPfFapGi954tAptcjAuFMdPUq4EGVDs5YnR8",
  "key31": "5zzcq7ofeAABLFL9GJLKJ3BBKmufbm2G6R5gP7WWoJZZaoabJsDknTdcgnVR8pSnnASrsLGSBixA2s4MvXFm5e9y",
  "key32": "2h29pKSA4q3oVPQPaRwK9EyCQPknP6xT4kMWQ5cx3LsakPNSi9nY5vSewijFBah4R2xgg7G7WkHD8FvJZiGnbUVy",
  "key33": "321LvJa7wSWWXQ2roiHBDkirT8mgRTM9zJ6X415FG82fia5ecv1GrK89kCnoG7SzdATkavUdrgKWVDFThE9tHFGf",
  "key34": "4dZw7j6FH7w7DiMHqmzprqMwyL7mnmwRm6oWBJiEfoMZXtrBtpiSNL6S9qQanoyVsUqrR5rdG2AuxzxocFNxSPMz",
  "key35": "3KfArYZcbspL5cJs75Riqtiyp9vpWzyfYiiewnS1mP9ZFvAEToMnReimiNZo1tLcqqZxHyeZwqqM2D8KkZsmLhqe",
  "key36": "3kvrudABLFQqQdBS3i4BsGDAdFd1nEeb9DfTxoWJ8g35beB91qDCgpwB49W9SEr3WS8k7vw7vbA6EWnVZqrzxBmq",
  "key37": "5iPDFJ8GuXjMjengrwaNu7sLSV3JCdNYkonWmfu5WT1ULafozJiGyjTjSHnsEAGR2hKDvdtVGGrJKmyrvSJe82nF",
  "key38": "3X8SURu7UvL58zguxzgChox1Fg4ggbLS1y4Qq322afqPRpoacT8yjw2M8b75KL51xfLqcdKen8Axm5Gi7MSfgjQi",
  "key39": "3BzsGMHrt9SgGPMbMyHWzKoCL1AGvN3UrZSeBMJSqPdK7PGXpbz4wpa3sNKMZNktgshjvLm9M274ndUS8sPahDW4",
  "key40": "2GQPGVFNf29LXuhDndtP4cDe4efHsj4npQrUEbHBRUY6jGJGm85kpxwn7Avmaw25QzzjFHqL3WSzSZE1dPEc3SA3",
  "key41": "5qmXEYmCGJ9Wu73is2tMtjpPx4mURKAuoGQohiac7AQMcWDeYg99y2E1DxabiA1dN2GuE5ocXA4Tx6C93Etp9wiv",
  "key42": "3qHrxNpmWcFuiYUftcuDDGaoAVnZdRkWpNGHVyXQD1LvR1eUNg73fhmLY1P8C1UpY68rLBfxifaDAGp8LUS3So4p",
  "key43": "5ScTK5dehrZSHco4kKngcWgw6tRmUcJ1CLe9pqoHDThBGHimAdcLFv1Qq6JupVGgQUEF887XGy1pacdSAyETgru6",
  "key44": "qbndjfarhw3cHHFucaxnLgXTiACgDYHboJxvPZBpvqkXTwsxfWeoebjPbtNdwGFSftpwvaPyy9zYVmMNpnE422U",
  "key45": "4yVrtaGWyRzbu9JZMsM8sxQ1Qqb5bhTQnfhosCnV6Aw1ygCiZb5H5nv1sS8ADPfLsbqRPiU389DVYn95Sg1V3VBE",
  "key46": "5jjVsuTjCbwxep5gXT7cGSj9PeuaMM6NeRLoiEqs8chJJQRVyUAhvqtHsJb7Cz5hck75qBwkSWZXgp1e66Sx1BqB",
  "key47": "3rLXfrPRCf7q8FLi4jHKhbf7rj17L83GvsNtWaDc8LGQFEr7EK9Bg6tsyzngdPVwLR3WsVPN83rLLtLoTMiQxccw"
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
