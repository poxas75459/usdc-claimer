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
    "2WDzwB7SrEJgdx4Peq5sBAxEagyQ9zQEUsAnECjsa7BXYzJyf7kzfyxCJar65hsst4bu8Lj2PGp3au13nidoat3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ztuBGMbkSMaebMFqMWkwUnogAUPs4iF2rDNvoE7ydjrKU26LxeeWNynZjNYSB2TtgGewFDDgnSAUxqts59C37hm",
  "key1": "PKANPt4VVuzCywNr6DzBx9Lrcx6gTxmxy8nEHomHVgv4hYhx5MrcXvUAQUUWcwSb637rCYrncAL197mKBkGqcqs",
  "key2": "5zXNKGoZnuhYA4LGmbqJNrWKdySAL9DFAgbyd3hUUa2CFg9TDVrrszaqzTZ3ZHgfMziYvqYr8yYUV4jDjei3wXD5",
  "key3": "3JoAzwMmReLmp3KpYuFPiE2AsWfCXRGe2N8LKVqsZjUeEZrgqpgwvXngrCxzygMtLkdMkCozfp9GqTCsPQsj8nz1",
  "key4": "3MC3vJU7yMTET8zQBKYAVJxcPRzJpnAB7Fv7F6gyAjtgYJPvdwnxL4yzce13xUqckpmqFHoaaArexyWYVsMWnAqU",
  "key5": "5XucpmSifQPD4RD7FEkuWkYJUtnoqExvGBPiQCSpGNPShbo4ijnxKF2RJPQ5jYcLUuomE64hQPrmNz73yTPM9zFJ",
  "key6": "56z1xM7uRpiipdMG9SyW1Li4YNsZR6hFVjV14Zo9a35Ln9F9Edpyzc8jHZm6be5JhK9nGU5J7M9HEpX6Ddv3Z6Jk",
  "key7": "3brePgCbJHYxKX3wir2zM6XwmsCmV9YyCir279aqAuu48oWfnddbiKrwPrEZWaH2T73D8HjHy3QfaSxwJmNvmbTu",
  "key8": "32aT3GQzd2SBKmvub4NQkobaHLempbEg7LfAnUKC6AgYNgJ1bSxexCC6cMMJNZrwCEQmQF5p8jrogaagmxsPuNV2",
  "key9": "65ndhRK2cLx16wi3xpjm6hTPvMSfXv8xHzF8gnUrQfCPqLSkJ53DpsEhn4vAHQStfkcqZNucv1G4iXRz8kpvGJtb",
  "key10": "4qi9JqrgH8njM4TvPpnv45QwuMrVhXQob8WaR3gnhF9TfnL52zVFUprJMZp9htzGwa7CWz1HFKdwFviSXUk11Tzu",
  "key11": "5uB4Acynwngw76UMXHJ624v5fkzy2eQCB4B579fQnYB8uUF6uxKUcE6yg1Kid8rLsYcbppy1SZ1bJBDftXNC5wCo",
  "key12": "4hZBAFZJxFzETWpXHycncwizWZBS46BosJTP3hgVd8pyNeF8QZQce5w8VgJu58Dpskd7k51Z17jewXjHWutkWtor",
  "key13": "BGr8biDv1MsLgSUEQrziYYsag9RDcXAQDwQ8vhTzRP7SWwddGLbKwmZKdiP5s9nev6YWCMbkUxdDjcxahwupiYu",
  "key14": "3Toe1SHogemakJkNNUYiGkyUxJQV95TspXCGAFsB5FFVgCDszSNS7afHkYDXN6UcebVYd6MeHHKSgHXDZxSTwrKy",
  "key15": "4immquAaj4fQpUNiMnjBogqSHQDm1apiGMz1SZAbXYaD4SgApzoMuemK3wnAmcUhdr2REkhfzbfu486kph8PDFM6",
  "key16": "3th71e7HUgZAkTxBgnXAMGxxHUp2zSSviFPi72FHh7PrcJkqwoCGV6gZ6nocURrvHBNzBt6VmBnrs4nbULc7Uzhb",
  "key17": "ggR3wdk8cuQ4ct5eqpReSMeLPf21pkKMy1mWWJKGKGcxTK5o5Csn72MggyyGAhkdNfN5SrMDPHKqv6MpWZz1kjH",
  "key18": "674HEoruY3emuWiTD9XZgp6KNmptukiRKkY5J9J5h1ndSiNiD9sKexf5GXRVCXFZZ41arod3MQM2YxPotzZrFFZ",
  "key19": "5Q6Zf6sbdpUQebx1EmdzRCkLZpZZYuVH2ThnPH58UmSgH5adncMhMqmgw1f4gBfWxEv1FbQrmrkFgXzmg86X7kQj",
  "key20": "2CVy8ZHGwk5MyXNcwY8G5H4ohQnW4S6SFjaLgyjTrUybtxemPXhLV6VnSfPsnw8enQCP8nVrGNZmVFmPHRwmU6jx",
  "key21": "wAfm5PFcqgxwi4SXvKwa9dZcY9PrZmK4DP2uxjHwBnh6kqYj4Q7DFrSczhYs2JMGiDcoCbAMeBuyb6yU4FpvHiJ",
  "key22": "5TwFjqjdHzDgHZbswEHK8dErDUyX2dWpF3BfEESAASXjeLm88ArgRKEqozgHuB4eboZvMmZ1S1ygFeXgVFbz9WBA",
  "key23": "4roZmo6SB5bUHtCk9KJzFBawjcZBhQG1QurwzMBu5yLArRY6bbw7kFAAVKpGuD1Y3jGVN7pR5JmSCLtk6xcRa1Pg",
  "key24": "5THCsLjdMCWvdSgAuoAjrvU8ZRkbL369FDWyH46VwCqievRHufx7281ouRU2Uu24yAGXVWSQmnrumKGF7SbzcEYd",
  "key25": "3d83g9ogp2NFpaxQJLTrzX7vZ3pCUBDce2GpimGMUGyQsifEwCVD9Zeu2hp2QTYsBa4Bd4DW8J9tc2niqy4JyD98",
  "key26": "3CVyASDtnXB69qfxZozdwxjGM5W3BnRzvVbz38V8aMitoa5rMCcppt3UYnKYnzw8FvXZSmT3fp6dnBv5v5vmjR89",
  "key27": "4GAzYNsvrWLQweouu2kqCKmSbsYBYrHRGUDLDRAEWzdq5ocUZyRjaZfZc3KtrQqYsqKjQrFhK6F4wByYgzAjZqB3",
  "key28": "3bjBwiab8LTPyJj7TBpHfEKhkoB2XxdE6sy6ESgsP7sNJtB7vcfeo8UkgED9v68BUuDbedhGwPL4eTcdqsyJBdzN",
  "key29": "2VTm9k127XLh69KUYfVpgkqT3avM7JTRXCvQ3cAx8ek2wAV27eVXqy8EmnkeKS7hFmiP6QvVbMG4kAkCuqEpip1q",
  "key30": "5rStY6tsSDN51bqJkxPjTUSbTEo3E7t4ptjxtBDhwGc58pm88afv9KnKyLZJacustunVxRyP6kfeLnGAnmSxd2uo",
  "key31": "3bd9Xvhae3cbZcervwZzz7FG3Dxd6UwV5U3QUZfAPvQszen1E9e7rDcUCZhZJKzr2wTYwy72xhqJR8tEpsigwTYG",
  "key32": "5bi54GW1523hzqFpC8DpPESC2EtHiNfTT7uD1ZScJUq7BFn8U6999pHxXir3jsKGzVJqA4QvAKf9BXjTdGAD1pki",
  "key33": "qTdTnsgzGTycexTEuat3an2R3SGDJk4xTuas7yF23xqVjFszUKWjUudQ8YZMNAJGToCFVsGqFsRDpsQw2CPqv9t",
  "key34": "38U789w1KKiMp1D9Bnk1DpY1zekju9FQZqTs7rjkL9tht45GppkixJVnyXHDueSVBsRKmgz3SvqbVfRBzKdCbjrV",
  "key35": "3cEMTy8rgSCxhfDWU1xtxZspD9AgVNERq9g71MJkZKemGmJrAAJmEY5uAt8v6oz6vSwvjn3Sytra8RjXmHQ4iLeL",
  "key36": "ZDMuk9TRzxDfsdigdDCh8bbWEMUG5eLExCPqaEZMRR5NZ4HsFxwUPUek8tYTyw9QNHoccC9MWW2rPpnA2k7FtHY",
  "key37": "563BhV7DHXhtXoqh6xgFdFEnUdJJveWNiarU3rzkJ7gvM6b9CqyJXzP81veNfFuV9iFxBmuNxrpL5sPA9Puhzx8F",
  "key38": "3aybXhHAwfQyVJaTDEpkefGGHETRVh181LisKzcA3vv8wEz8wEjr7c95RqxwkcN3vTrEgnceEy1j2dPyzPJQrn15"
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
