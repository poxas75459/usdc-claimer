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
    "5AxDEKbdSo8d412kYCwG7zTDqkzUsQx3mmZzNouCtioKLb1C7RezzoqQdcdaKedWFtfUGWED7RReRzCJP1odpsrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gZaGhZ4ucwtiveafskjGiR9ecF6NuQkeunSunSxNXXRVtMkFPypF2cW2njTiciVi63XBk7eu1LArqwLuvqDKm6j",
  "key1": "2fqoNKjszy9KCSyd5TL4c28GbkKo2MypM9VfEyV6bEyTjgMxAw38U9TUQQD6FYVNbSsVWQx7jgf5AtcXAMUfmhDr",
  "key2": "2qe5d2aMjQW4kjVhdG8LbQVS2rXEApRo4bKjEW2oabrxpj4H6aSUUePJoYsLNAPMsLxjyXbGe9vtDRGN7zNhHVCP",
  "key3": "4z6rLMRrw4mhwDRPy4JMv7o4K9iuXDg7C2g5Sj2XtZQJRbJ3PNJ6JEnE8ydEqaRhUV89RvKpX53akTKy2mxbAA3a",
  "key4": "2UzJtb15yaUCz8nWtVzwrSkde8YA8c6iVGG1DggZP7fvv9wacLyPVojiP9wYNsHkhy152nvY6J16C6uRaBjd4yJD",
  "key5": "33cKVvqEDEmiEENMt52F23uMf1WzETMCYsnUjDedLsPeEVpj7HTiNAHyR6uMgtmRvQAa6kxZGGStUA9JdbcJ5TTf",
  "key6": "4dBeMrEwoN9hKbgAfgEtNzQncRq3LKJEoqNQFcDf58HgFYPJn6gmJ3UUFDXh1bjAW2t3EbEJh8JcMzp6UFPe3Hum",
  "key7": "AqAUm1gMUBViVrTXJf2WNh3uWFzQf41JGoNZ2DEnPSTC2vPaNNG74pHg9RysxDSj4KunvZUPAAisyYLFBsRnj9m",
  "key8": "2BSCwszz52pNv2Dn3RQYAJpbbAEFVFVpWPyBmRgrwUx6gehcRF4SYNGPsiBM3YPkrnGwiLaymiYSENeTQyQjEMsQ",
  "key9": "2tzPNjraNNvj6c71tPvn1CZ9ZBxHp81WeHMgaBirigzoiWREtVP6fkfm6hVN8zr8w4ZBLyNZKvVkAWAvdGQSDNGz",
  "key10": "51MnQvycMuT2aS56MGvZ3hL9wCssbFfQMR9aY3ad2PJJEr9ySgF2w88MGzNeMdT5FngLUBJndDoCUJrcgrL29iTP",
  "key11": "4FdfVh2wjbVttn8fHsYc5EZBR5vtuCQ2o2Bc7yksVdTE7M3uuckxfxi3CTBbZmhJUKA3ccET9aTCYP1fWfpXfKJF",
  "key12": "3cHUF1EDQubNRVspAufGFAky6LyLxCcPgezHboPFAXSnMRiKeqjRFPni8SnCg9jdeaQxi4FDQEHNwZYxXdF6UfwU",
  "key13": "4DZWn7ZAWZbv5AWdT94Gttm3faas3Nne5iCcAsGrjgkXfsUoGEa1VJrQnwdmhiLiwGNwwCz29ftb9nhRwE8AAhbH",
  "key14": "PKF5CRiTqMeVQjo5graGLv6GQgCY9uzRx86xmVCNqcXNXhjMYSZeMHxx92MFvRPQ8aZA8TATxG4bC6uMv2JrTWq",
  "key15": "21t3QtmcWkkwG6w3hBy1G5JkNbT96o1eTJiBvXoqmg3T1XfWe7iz67ub5zHAo5tyhCSkubeFfwAg9s3eNwnjVpD5",
  "key16": "3cxeTiHeJsUmjdCPbtsaBd14VSVsWH7jCDwfsEdwy22TKZEvGd1jNBBsYny5zqciyvrp1Xc4ecr7TmfeYYYg7PQd",
  "key17": "4eRg6TQZWjredURCXdWZ2XZ4ESH3hxE64A6tFRuvVJGRmfmZG4kVKzQmw1L7Qo6Zo7P88kk6qGNCGN4zPEWvLsNw",
  "key18": "5z5uV2bf3hWUrmX3CUW6J6JvHNKQJnZT7E4ECPo3GpUAiyhmQ32bGURa38THXgN7gcaBrq6kAtd7E4urC8QTGiZf",
  "key19": "2XTYorS366DVLn53yKRZ6WkZsmi6v26Ru7UCrkLmUo6u7KGwnkhrHVw4HLG2ZTqyrjPaQRMskNGeoo68Z9JQzqfz",
  "key20": "2N1EubLFsn1xpddw97R38D2rNFQUfRiVqGM7d7apCBhtkgr7QzRrJyX3122KydZGybTm7KE3Yo3tKHApP9GrQHpU",
  "key21": "qwJuUypGqF7mscMswQrHmwCnrBBUx853btYy3SCVx2ZMSRBP8DdcKojQxx3rnvU6q5FbqtsbxSnyp8LGWdgxoEJ",
  "key22": "28aBHrVebokekDE6YpmADDiVnA67Ho8bo6qG5T9grXhhX3XbKQKwMbbsoid6oMBovBrUVHoAu3fwYMy6qScpCS4Y",
  "key23": "4wTiYXDnALamRkRg4jV41r8mGpx6yUCTVESDr9Z9WU76cyP5op87SEvatmUoUEjTphwx68v6pAoyR7fcn2wUKcYE",
  "key24": "5ZM4d9cDMX3qPPDGL8z3gohoR2fgpBkEd2vdHE8Z4ZzJjuVLqYDo3P4112bPWt1WEfmokmQbtA2HdTcnAritNNS9",
  "key25": "438vqHZayg7Qkb9b4nshGQkUWn9GjyjwG2msgT5wLHTyqv9997bLXaM5G38vxXen2UiRw2HA4ahTTgdWRGDLfrVM",
  "key26": "hfCPx5madGbggNN2k2pdHpBhq4T97gVTCQKaUtdgGj5sgwSBTzHWDMDTgFdPYvVFSQBrEw1PwejZwQpze1ntoge",
  "key27": "CSDGWRAGcZTpqADGHkiM7cACeq7r24uuJFfX5GdTYQUe9WADeq3c2e6Lnr2WXAnsyvvk7eZogEA3krrdE1Bd6i4",
  "key28": "513PXuSd5TDg88q2kDjPDqYkHgcLAjKpNaifroAoTRXTg4VzVsThwPz4jVjozUpR1tGowvxVPrX3gE8EAXy9a5zx",
  "key29": "2s2orab5SQrdq6pRfjNaqXiLq7AkL4FusmDq9YdFKrcfRjAKSr9hjnGQ4BYBWT7vrBZWMfNuiFxNcFcZhLZrGfEJ",
  "key30": "3nf2NMt7YF8EtyqZ1nyF8fp4AotR6y1YwM5GdHK75DH5B4V7Q8uguXQ8TdbhsbFKEzujXxmQjHD3YzSUnWCu5JwC",
  "key31": "2Fdxmyag579TRPqyExX3EKeX4mDT81XksqKaAj94a18mBkR946j6rZtiyaowrs4bt8WDggDxzM3Skcs25QwuwsH9",
  "key32": "5pM5fzrBmw1KRNndUdshMffBVHxeT7SVt3HLXBLQtv2rqAd3DEe1XhYo3MieGRkXwMwoW8UkPuy4JMZWU4yecpHM",
  "key33": "2ktgB8ET1ikDgSSHGiAQLQoE5mywZQjGhfdAd41pNh5RXi2bfpnQ9hHnKFp81NfJFkbkaf3ttkdv5SNUosfU3fXJ",
  "key34": "42EPP4KGeee1SvugPUQd9etMSrQVR5mbQUQ7Y72dMNNUPWgvQvZYtesVYebKpVDMxo1KiVSMGC94VnFHxatjnrvS",
  "key35": "PRHBvCuudfyeXi2HnqbTi6h3zmcd1kC8XsoHMhDSzm8gF1obEVxqXNQXJMFkKawBzA5c8Ym7fi9ptGbDNhrn7sn",
  "key36": "2f8vDBJmxB78riftWWp79mjL11d8QKV83j1qz8TYRr9HE7aWmeyCWSqHSVSzLoY4AmWFVwDtbUEujimNre3L6gwX",
  "key37": "2HDYfVhZB2gZ24Nvuj4dY191aDCFhnZSLwhJGkituZqvrvZpTDycG9rMB9WaDhfJactxkCEWwCjCSoCmMUKxgiza",
  "key38": "2QQPd786M4DJTHWSaxJtEEQfWkqaiQRwygX8ZuN6mavJEEE6ig3vhJ9eko2CjvoyWi2rEKD8j9U116GevUyGSp2G"
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
