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
    "423EoDFNkyCVzU5gmT6GhMXCTYy2NDsckvKUMhWo4emtW4QHHfXrqzt189Nn7m9iyH7xfpWGHvzCSeYXUUsZNwKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kjAR6Km7K9r3dXpvRPuKsVyANySrihBZtWuhnYc66pKWMHj4cUWfUXWjJGf7K3zCYLHktPDDFbtWAFVprK2WZTR",
  "key1": "3QFTDWdy76NmuPDdKyCEu1ppEzAV9hdoJauPSyoGDXd9jptGLgU4v7sV6fQidVCJNDgaBCWYbUuf5XNXsXcr1sKH",
  "key2": "3eF89CeUL1X145XDVXWff468sAATZeT2szWKE7tbbHvfQ97QAVSmco6TR1ZyzSiY3BKKB6hGgirvLYxYuYEzhuk4",
  "key3": "jKu9zUBzLtEYLenvyPg8nQbL88p3f8ctoJLzSDvKajG7HBLKF215HG2cPAFvL5Ze4Cyqbz1rGsBE2P6GoHrRj7X",
  "key4": "4igEQtMQXBDeRLSq5ZtRpwyg6tCPFkyf3pG5bLbworTe3phTsp5K2r6mcoDNfH2B3TqJbceK64SUPzS3GthZkR24",
  "key5": "3PwF2y2FchPsm2FEw9GQzdVcVzq5PcgJ9b9u2XDctovE8u3ribL8NRmbrkerZY692yGP991TAyhJkqwgALAPdqmq",
  "key6": "MAEGeTn2chM5iGsEwfiEqfXws2rJhGSnLTVQomyhmSvsenFKG4JArZngzvR8amqm3uXUBJCA8LZ9Hh68hmGNP3Q",
  "key7": "8SLzt1Fh8eNVsGY9aMxtRAWxHRGoddSxFJeCQDNVo2dmP3U5A8rQzuNDxQCQfG2yKDsRmdbkoMn62ZHNLbUHp9H",
  "key8": "2V8Tdv3y5WtysUMywXp31kmgVbMMX7EpARxKsXZcWq4D2AKfXAYP3guwFuzgBRofVL6Dc2ViRsSTzAUk95xtmPfM",
  "key9": "4yvdPji39f7hufgg9hmsovGQ4Atr8yBCGU9nPEBB8KpZ4Qu5ZATomybCbn3oK4KxgMjYE8JyXPQALYP7Q5e5YHyB",
  "key10": "4PjGo433MQxZEanh7v5qVUFjAEsJcZnftVYnFiYRifLbtRtEAhupM1HFftQUZowS2LHb9f3w3rmGdyEirhvVYLAi",
  "key11": "222iPLkEFqL8YtdCTzguBxeSTXxcEkGP2Bn5MjjTndwQFBPtxcLVJCB4Xxw3XtRaz8mpDSVAZ6MuwqPRZhUugd5D",
  "key12": "2LzdLqAULo3niNEyWX3hJYQyyiPiw6JEFsRax8jBLhkHonmZCzuSkPr44JAszCdM6tk5wfVSABhRnUx2dtctJ1sg",
  "key13": "3qppdDvhXtWf7nJ8dEJMV4uDwxcvmR2NiRrdTb2gyuRgpUqZpSgShtxotWGJWa5N8Vpwa2iS9UW1qJxmHJiZEFeU",
  "key14": "3wXHpbKy5EghTPsZs3u9LSXbAsm9Rh7EnNMQvwEgoLJ231e8ZuaDPC4QzJEyfjZgXDAghJJY7mxECp4ArcYZVfbo",
  "key15": "2X33N8uz439XguB8gpkW9f8n3PbgKhV8R8WJuERy6D7WLWXpqnYBh9SRdyE8rLGDSd864zriJPUmMBA7qsDqy3jj",
  "key16": "2HRVbKMubBYmpgrKGq4SAQFFRF5Y25bJAUuiKeKzk99pMBJ5pGVDzFNvdCwXLic41RdMXNPvYsnTYZfXz4qr1mr9",
  "key17": "5VMEL2udF3buSTcgRw1F4g9duJ8TNdDuYU2ohKLF67KjFHKrZxHo6iis4E8fmvFHZvZwjHwBCuxduhDgkP6WXrRX",
  "key18": "46uw6a8CzPpukR5b7mb3ufmj2aehxxou8rZA9ztwrzQ5P6ZjW85dnZ322K8oqXNUDGJB4D59qBmohgcPoHP2ixsW",
  "key19": "2ZADQzMJcLiCkEezyhnuND76SsTuFH6UACxsXjaxMZghZVNNFu5nPRpFfQDHaHKrz4yCqzSd872AULTzDRGqZSuA",
  "key20": "53sF5hfBRgc2AuyXtaqf4dkkVNcGn3gBBsdGcAx43ZUn1PHKHNeSYqMKxwG8K8WqY15aLCMpmSeAyyxpcSY2xSa9",
  "key21": "3YdS7kUsFDm4Y99Wbob8WfRgHY9pRDyc6x99fqWF5WiFwcHgEGpBq6S3DKhEjm6RDLrpduFHRZ3hupGBDdZzgd3S",
  "key22": "5YDVj7gRUqjzFSEdgFWRd5jXRrCb1kuuqchvz13jM5zfiFzEU94cGQm87VW6BodfqdyKVHB1fvjyhYBNNb3VQxjf",
  "key23": "3vGUfVvc4zLxTbsz1oM1YGUE2Sg4d2K1HkJzmMxdfq4T3gwnSEhfzYWZdjjSkRZ1rjj49Nyn5mmp3hPoLSwtFWK5",
  "key24": "5B1Trr21Y3CHC8YRBM8TDyT1LsScxixJpdVigfmVNF8samRPzJEEjt6vRooT48nR7f5ge13yZc6ZciJKDE7xpxTy",
  "key25": "4ZaPRoZc2HuQA7nixHUahdxmjCZTgQatoncG2q8q9EoBzVmXkTgspwZAZvzmfjgM2WJMDEh1pP9CXu3gp5SGBWT9",
  "key26": "37kSuRm83TbkiyNS9cVrCyF9t1mHWDAwwN5hbcJWfhjtaDqEXohbwxWnpni8hR6X7U92RDxag9S2UhsSyDTJEsXc",
  "key27": "4MG9ptMr2jkNdJ9puRYnQghYTmDbbmPifYrddSsG6XkS95Qgmb22Z2K9UubRvZ5beAGq1RtyYScS3bQqiMZtwuuU",
  "key28": "4J3rcSi8GnXPJiPikCd76d13VQ3DHAYCsnLfC52Au9Hcdq51fh2Mzm15WHGJxosmBQFcnjCEFcw7Zq9H1LG6zRRA",
  "key29": "3UWqoWJZFsK93WXhRAyTJgfrgXXcrjaSr3fNUep6ZCeQL7dYPd3wpt5pXzGfYdKPbGLJ2AthWBkN4gWh2ZSmdXqb",
  "key30": "4EZ5WWDt5CM6u5WV35WxSpYspirCxDSAudH5bbSzJpeQrkYdmwyY9weYiZyVTqf8Ls9ce8Xmw2SPdpSFxbdRFmva",
  "key31": "29muNYjaWE3HMLcpfYehEJN2jsfDkBmuQdAw3FNHsc1yfmqXAXf9E7TUm3jZmtRaAjAaDJ4qTwAKQ8m3rqmAK2d2",
  "key32": "SLV9gCWizVwhogVn3SSGBoSNjbscJxbTPgiMZ1zzcZdbJFZfxxDcQJBNtpmspHr9S2aAxC5u5DYZLpETjpfTQms",
  "key33": "5oNcdrKBWNDB3fYPpiVwYPo6tbDfHVuPeetLrNyhwmEvsbyUZp65m6PQtt5vF99WUeffyBN6XRSBfDebxsxj2WoM",
  "key34": "4NZU7cLEHrXpsRmkQ3E9WykaaiCjghZKJ8FkWEfj6WFAt3VHkYFrz8mXmaHLvktfjiznpWfCJ3bTr7mbbRLPXpJB",
  "key35": "4F34jtVDyCRwGcfS5iDriQmHyvGGqftVwHTkXhMtQzQDCEJ9pR8DTrkUBGSxYuDsB8mMFeZbnakrCkFRNwpE16Qf",
  "key36": "65N6BRL7YKkcUHJai6epFNodCrErSsmf3Hh37kbyzAR3twfAf2FUFeeJiiX4YEN5RjY5EXNPvdkfdFrQELY9sZsw",
  "key37": "5R5kunPpqE8j48HV7i3wvBL1oKmzHYswL969NUGL58qM947psQ35wCH414cAQgN68qfgd9ijPnXofCsi3aPWwfjp",
  "key38": "2As3Bbxx1PDzghFSQsBE69kNx55sMDjVvVGDpPMr4XQwDN4eSNRDTgD75z77shP3rzUUZAd5unW4EXc2RgCxeSiF",
  "key39": "2Mw4fug8GvSwZxegWibMQtEohRhDrb2TJgPjZGJRYZbAc4uVb2XsaXh3xFDp9ALhYavYJAvSSzJT1Hp91dP1nyjW",
  "key40": "4jJDHztNAczpbZSH2j1n9taobodSMD7nSj8LUttCKe6SZ7w3iThCBqyRYHt3FiZyC7niKr4i7TmrTvYJvasUhk8o",
  "key41": "2nJfHJFDPnjiRbAeNHmBjqdDRRTg5o8p5oDujwgJQz3d8C6GYy6SzRmD91thDX4mb11dhsdh6JBMNBLxoaLRk8Lf",
  "key42": "5wEHxtGHeo3AajuRwUzB9R1UGNjWt3DR3CEQXMGQuTdv4324AJDrxKkmZGfTTFFAUv1VR8i7GEcDsQbpa9GeeRL"
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
