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
    "5vxSs7XX4UPmZ5rRMmz7oqrW1F1s2q7q6jcduc4RGKdfEwY9XKKpBdm6iqwKMDnuA83vDc9niaQMN4CXb2aDdULU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i8hNAUsEHWcMA6QfpExDyEDdStYuC3dC8R1oYReseJzcFJx6XGoHXjG7WWbxQ7mBm4zJgFqf44vhsvE2khnBmvQ",
  "key1": "5p7T2aw9VwQzT5T94fr1Qs4NzB8nzoYBC7vTaYijkZEWGG2f1QRN1mkRihvzmJ5HeVLtLjjChw8L5o1oXrXNUuyH",
  "key2": "4RgHtyBh6bm94rev4RzxZmPHgJzAEUdxGKP4oMJ49hnihSikaVUq4dSwEfKHLak8uSBZpsVLcCAjyxviXvBHvZuN",
  "key3": "2PuNca9FSqko5GFLrTRix1Wt2R5EGUgr18jnSTJvuupM2J8RKwtfgESovG7GMrsCNMshsHVAMHjuX9FVWeEVk9ve",
  "key4": "4YQ29oz23dfwhE5Q2QHiSyK4w7nwm79aTGSe6ggW55RXWGp8ybtqwQ6Ysk5f8xsbW9mGBkg1mPceZptD9v6khtao",
  "key5": "2itnN9n3SfxM3DBaKs99SeuLwu3u6PubLmMCi9pCv8zgJjbCXnYqMiiKhuVoSoPhozJ9HGGuCUoSag4oho8JHaht",
  "key6": "2JeV9FkvQotJBgsw1rRWa9z9hTetU5epbq27CA8Auw3z37F9BPeVy7mwKiLajrwWgozthfvJfRcVd5qWiR1SVVC7",
  "key7": "24uDW9a1wuqR7zodxCp4beTqqrLnfmdqZFk7XjMnWqfvFmZ31UR88aZb6mGeZkdYaaTZr6Qn2sRqykxovknK8hJg",
  "key8": "5Q6xj7R6q5eqcs2J3HpMfu8g7k7D46gaVXJW4NJ7W5DJBEMsPCPvFNsHCeKnp84H8NTovK3KW6BiwMv9Jyjn85eK",
  "key9": "2LZenirwGnhYz5fZ4yHe9nwvCxdr34x2nksLn1y3NgE1aNWeF8qsHEoQYterHud7SdfmqPJ3vRMtSWodUAV3Bzth",
  "key10": "3ZVW9XBPcSJXhCdEseBWnsUGH1sRaQbLc34Wkx75JBtqyd2THsMX5h4MEDac7DJYD2DFanRboEmX139ogV7ga6rS",
  "key11": "2J4PVBsjVoohhscUvxj8cTjfNHXcaWTWHK1i8tWUjdSTuiaJP6xmYjTfVRrEuzAPHjDE4Dm3dBdabhz8ST3NdsBU",
  "key12": "3USCy7qpFcGHRNCXR9CCivTXo51DnARNhBrteyQHc3T6LqUBvg8YsaxKMiXK1CwjaM5jgz7FJFGzFNrR7TwhDCXi",
  "key13": "4cKz5BX7PW1yRwMDqL8bEhWbkyZVP8zUL6BJJ5SZVvqbZnvEESPF2PeLNKvtmxTAXYRxBZ3kMGx3rgvmUrfD6Xmu",
  "key14": "4dGnjVJX6FnSj3izk3werufndGtS76HQwH2bqTaeuZY7iVxFRgPbN51jJsXT2KCShzTjrXEKY6XsnNCZV3UxDy7s",
  "key15": "3NGNbXp6yaWv3X8oLZNrUik9YDk9xbnjRJgWHkB69maVz1WzkSb8ujrBY5K6BWj9CG6BeZtrT6v7mJDVsz6uCpse",
  "key16": "33K3JZxrkuH6eY45tmbNdLFLVGmFUrTnC5gngdy748RAk6UoxiCQ9iEmNdj7pmtMxoS4DfsfeRPMKrNoRJmApbNz",
  "key17": "4HJZM3tJ8QCxPCjvurPYHRLUmiV9PhuQVftnLTGWxqyfQsfzqsfoRSnkR6vpj1MGM81FbxakcyRXR7awTkKVPJ98",
  "key18": "2Q4BxkX3XC9nj1sEDHTcLp3KSPm7U3GR5GvtsHoURDrgxn5r1BPhBNtDt5kUSjTcdP4zhGoxzn94Ph1Y2zByutwx",
  "key19": "5zyhizHScPYtFzDaAo5s4KNqjstd128yPB7VSAjX778rM36tYUjK4oM7wRGBgFStWpQmAbuQuKEBvUzKLHJkFEHt",
  "key20": "2iFPdfmY3rUpBzvmY5wfAbvueQ6gkhCj4UFU7BmYDfC6yKaWNwfrimoP4xAJPSUDYMoh7uWyY8sttUrL9NBJBXyX",
  "key21": "4ToZfXSsmC8kfzrnEGhSn5yggu5PGhAUFAUuJi5htdp3BTYUCktz6tmsprJKGFauS77TC1kXrbnbGiLsmabkZqpb",
  "key22": "5W7kc99Wb4N5nrdY9pkTX1f7BZc5kayTVtfkriW7PKhh5cskFSTU8fXKHhdi87fbacd9feCfKzbdCKuvhTXYwxoG",
  "key23": "3uZTsALmksVZyh8zcv1MZ57Uh4LHuueGQuwhBqTpZecyahwXjDrYEBk7M7uSgMuUgykZ5uQN4jezNek9CV6kgLPt",
  "key24": "3gd2EvQyYgR8b7LJgAB81LX8LuTafEc5Rf7TM9Ef2HQ8mwpLfFxq8nA8PsfercwiYduo36b2mpPF5FhqW6HryK9v",
  "key25": "2e6HwoX8sPsywzetyfhSLntJC8uZXQLQR3HFDd6S5s9vrUAmAo22PSR6EaKQRh4AgUpbwvGAwc2SUiGnRMghzMr3",
  "key26": "5PU1vh8677xYxtSj5oPPDhRB7EFfApUGkBA8wb1x22rJR9ymxDY4oMMHnErbS9RozDFTahPUDJr7mZ8XQD5wypfJ",
  "key27": "2L99EqWdBVZNPQCcKa3Mun4DE678ddxWaDov28owWzdce8knFCDCGJ9btCHnCiwAJpuZxKtL91xbnC4R2sR38V7",
  "key28": "4eJY2hfGAWAvKexmsb2a7obSNpeSdA97idFb3jJ22oUgKU1DxAinHmSABenRvKwWfaSmUj6UvRAFXG4voxhvobqy",
  "key29": "42sA4tz8vu9zokNoUk6KFV7B3n4oYFtmZoTqxBZJHdDcUqGFbx3iBXfueqHFYg9BwJs69ZaYGCArn3RpLmG6xoZ9",
  "key30": "5FVkbZqg3UAPTTufVCrZg2v3oCHB8VJC62JNwAsX6wBa5qDLHp8B4LFajXHBLeKJocvLHpdkMGVhfpxx46tYdNgm",
  "key31": "4wTJi5y5KvM8RRfbVBbRRSqaSZJjLFDBHZ1Wjfa2xxLEA17EXRfAxTbREw4aFZBWQw8RoPH8fugC5DkPmB5WCuiC",
  "key32": "33FBZC73j8Td5Rje3AoL7g4B5cEA2bDGGDSp2esUZ6tfjSSH9g3Qa52vYLcRoJSennu6HnVX3xYB7fSpTDiVSYZh",
  "key33": "dXun6LMLXdRkeymwDsgf1XKuBLBQPwZWxttVbeN3dXmMpZ5hjierN5CZyMrVkdtXCQSBqvPafy7pc5ZqDtkydh2",
  "key34": "DFtwLUK3oy3igFi25BnfxozvwSwAjjXER3w8Gtmw3HmWYHr5QxRRZKC1dJpqaNgU2RGEyZmE7a6q2RAmA7ySXFQ",
  "key35": "3Mps9b5HGeDWGAT4avfaZcrRTjYRgrWhnvVaBy6V2YLWrkEbSQ4wjg9aDbxcmTRN6VGYwwxZcZGVHswkE6m91kbi",
  "key36": "5dK6W8PnM6YYz84b6e8ZihU6jveRhrXsa1GaDqs9muBJaFnmp67kpwfrskVssph685Jop64ZVbu5QSd1Rwe3qjtU",
  "key37": "Z5qyNac86W4sVAaXuwF4FgtMBkSkrWXjnLjJ2Ye9wLk2naSqRLwTG55BqKi5Lheg9duiTNp16eeJkMKwbjGkzaT",
  "key38": "46mXnYSv8xjeLvVUrpTB5z4uZ6gr12bhSNRvKgAmXPjk77vPz9MRau75KtcCoFMNXDcd9wNko657JofNg9s9muf1",
  "key39": "4LNp7baEtTKwfka8pemnkw5fwFnzqSHSXssPh88qeWQ5eGDC5Qy7FYMqMUijn4Ch2iFNs1a4Nqf2rNbsKc3phyoo",
  "key40": "4yki7QUerA9BtJFA5G9KmzQe1ovrH9yVSWvfHWWtaoy4i4qmPLdHFUm77LnJCAAUrToSv4W9WfgarNy6cRxry3cp",
  "key41": "4TknLsXEg6XVNugkV4CzSF8BuMsfsvMyiYeiAjZskzYb97johBwkmdzp94JuMqbBeFYyXAfWHRVPYNmwu3K8jMJy",
  "key42": "422deNsWN64dMHRgC853hk1zrPCnD3KKcNYgpbCtu4G1K5dA2Ft7pTxXXVLQgzKeT4QuP7WmFspfGdaKaAMCPpwV",
  "key43": "2JVFBBxe6TsDq1LXqUnNyAco7pdajhp6ZmGmiQQ6hDSdi9hFFZuJooQjZKyVh5etok9Pxa9XbmFLCz4WYD8YppAR",
  "key44": "2MhEzt2yzhNa2MqhinAREPsndHsBVJgSmiVgcuk69tkhzTU5bWMrpcma9pdS472Y266wHw2TVqWR87iVR6x4xiE1",
  "key45": "23STsaCEEDZCTP5AjrXMoKbZvtdBKomVGHTxR3CH7c6Da2EBKxvqs89x34DefiU3xaUVNU9c8BhAX5izZjfLb9Mg",
  "key46": "2pGAPnPufTN6ZgAMk3Y21JS4YdnpnWbxpJnugRKWjU6smBLbitLc9rRPLBetWWCn5xQrN5PFmgws6ZpsV571Ef47",
  "key47": "aRoq7GKs632d4EsNHScFRpkPbE85E6zUKAuUMhank436DEGPMJgPXZ6aPayjQC78YLb9CZhu2UDbvJnBTNvXjMC"
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
