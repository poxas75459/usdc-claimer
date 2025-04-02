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
    "vvWYrdxUbATsCDPHSCyAKZPcp7hnLhGFb5WPjvqVEzwatSQ7WSnPrYUy6nXcWWhoYK2Aod3wHLrYRycH712tD63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2evAfngMu2PPdeZoub9cg6LhmPQ9h7CUoF5jXCXabSiqvedqmRypBoHZLeMTgub3ArGwkdp581X9nKUPasubHM8F",
  "key1": "3mc9ptBsnyvGHXgcMiKpGmy4BgZY1mcBxqBXqkgTGKNihfZ2RagEECcWNqD1NsfHsPF6Y8nHZA7QS83bQKAHmyCs",
  "key2": "3cDib3zmUYgGs8MAgdkaz3z5aYYbn45CLWbDmgcZMA4F4PnMJ5NnLVcpg3RSQuwdYuE6LTAiF8N5oq2Nr913ntK3",
  "key3": "4fPBZmqsZLAHVefD8Ni7qcHnyhxwZ1DSd9zYLFyMrDYkAk1zHEb9PszAbQL9X3gZ5Br7Qh5UGafPApnc3VRzchma",
  "key4": "5DqATa265CEcY7wzEvxw1x3cHGKkLy4KVwoGs9ESvBY1LMKYJWxXxj6KMqgZgCgaRAYrKpMvCxe4zd6FotWuRTPD",
  "key5": "2mPZa62mFcbbUdmLbAwBho3p9hQmzpGa9154jgz9vwKbZYD4MToCeGibFQx2QzZjdDorvUR4sU2vWhdei7iiYfma",
  "key6": "CAX1ja6W836JSvmy5YnehxuaeUFM5MhBFVRPqMYVeuEfy13mRo721os7puCKTgFeU79XL9qWpfhPxXvadXLfSJR",
  "key7": "25hjwKMNGwkRt2pHhTVMKffmPKYY37GTa3UrQQuHiLD9EQHAyjAUKMAsMeyWfn2ZoWNg8pKHydYzAbSWsczumLJ1",
  "key8": "56f51d6gNsDP1wXe4PHJRLZs7eVwUuSHr3DHHc27BRs1qGbPAsovkATnPu942L8NFJbKrfjda3nVHiN9VhXyME9H",
  "key9": "4gJTxYjPvc9JDCeS2j3uxzM3dvsmvrxbyG1h31sVvNxSE9bbRRQjMwm9Wf1j2K2FraYoTXQMa2JoMKGaJik5HQSH",
  "key10": "2YPNCUgHpAgzipPxcgZyaE57jVwMmmxnszRy3bDodna8p6GFtjWCFm5goQrjhgiLfXiaKkhJL8VXwUunP2hwWaKx",
  "key11": "2YG4mZW5QJyJ1325Y9P4xn1pkjxpf2hWvCHsiGDSSDZZzWCRzFPyG4F21Dudwxs4Ti8tDpUs8ZkejXrervDTm8yA",
  "key12": "5eX9iWmx26coqUBDZWG9W4n4S3JBTGzRrqo8ZvabjpMkTpKjivXbneH5yTpAsf27VRADwXi6TQmcjrMBUjrsBSwW",
  "key13": "3Y5oEuSCT3bzSgeyUyQZAq6usn66k89kHx7waHh9peM245QwxmWaFp4cKTiH53i3spqQvhw4DfDvNiiB7o4ptU7D",
  "key14": "5mCv4nwFbG3vjsZZrehhuajVtq8QmWAZ5xhZvEGsUwsgKrUVxpVt9hm88u7xK4Nix6nx4XtVrjP998YBMiXDdopd",
  "key15": "i1WqgwT7Bpfe2pdLr4YEEtb3iReSAtbSebP2wz9y7BdxSzK1Q18a4xTxBJmvwAKzhKgut6zDYSQ14oDacLJzvuC",
  "key16": "56Y6Eg8m94fyVRAXaJUdUhBEuppfoDhMVAurxg8PUTvJr53vcWwpYzheCG8DrvsYgosXPh96SCzyzs9LXP5WufJ4",
  "key17": "3zCG5vpVqPeYonAQDiEoWifuVih3QpEZ8psQEv6msrXpiuYGDhB6Va8ofbB2t1XsEYce9PBQSKDT57BFy8vphQcf",
  "key18": "3F53sZzzW8Vo3L7fcx6kTTfvQzXWAUWddV4ABHGo1g7Z1qoaGQKwsJKRHx2BedHAstTpb4iVZxQWFwj57vXeW9tH",
  "key19": "67aZT7Whqb8pQbUYJ1Uo3heBHTgCAeiYyKj5HKrzhrbwXwh4BrLVuMBC1KNtrm3Lfr5VPUYeLwNVEXbRjfKLdjNY",
  "key20": "2mM9EA6LCKxj1EYTSGQYuDNpgtjK3tK6fhHY9azmsVUAutkxjLDAsAxdoKkXSdBrTYvWnCXbBsq2MrL6br9vMqYD",
  "key21": "2SDo51E4v4pZDamBJ7VL3ABzVKuGhfSfsHvShbaNDZ7fZuLRG3n5PcugdhtKbXmtxF1wq2A3kGhhixsEtKGnaNUr",
  "key22": "3E4MKzxqFRG5P3k54vcSejNr4b15hVYcHFfjaXZCWXhrE8fzQDVp4g8ixxGrr3jKRiLPRgEgQqVnaqsFCeqReHxh",
  "key23": "5G7SovjLDpwzowdyDtysMrBf6QMqb4A83Z2yNoqUcF1Zro14brajb51PADv3MtsXDNzZskpLwumuMYtz3JyrUGgt",
  "key24": "4MXqQ8jUy6hiV61KgEXo57B33AsuLtCr3RffC481UwRjozEwatzNUacPCPosdMfMkstEataTgqrAM73AYS4vJyMa",
  "key25": "44auPCQxD24pRokExKs4oNrA5CeR34TqrfkBzwa9VxES3hz4YpH5r79yrBZyNYDZjvwq6STDhyaNVe9MRNv6VspJ",
  "key26": "aZaoocEPBiVYuteSnUPHSUviHkknCiDD5VYnLADVfzzdtX81WvYarfLTytYjnksbv485VjnPPXcyKgqrgwZ84eE",
  "key27": "JWEnah2XhhkNp3iemCV9JQrhQMJgPoZSbas4Ur5bAqwUGFniaphgxPbsEx7x6bRx82b6Yw2AjJy1nRZ1Q7PSiYC",
  "key28": "3X5xQsxWr2ywCbKpcovqnz12R9oYWfSXGdC7Lb2Ggv7sFChDt2fCys9ddHidg1jzNjobj1MrFMDrx7Hrsooc3w1o",
  "key29": "5Z3VJgQJKH4D3NFfoKugLqfE7WXGNsbR5dbSfyxRA9VDPe4Mw9KENHAXkTnFAYiNZUNXZY3xmznverfQqhxqw3wc",
  "key30": "4jBWitk49X6GZN44iPEDxAHS1Li1Pt9yeHCMbic71rF6JEBSf25cCnFRJVXAkSwDqQHA8mszM7u6CC3U6sE5sjTt",
  "key31": "39JXqzW9UYpxDuXT77CPGyXedL1dbLYMj1N7ApHBGRV4witjtji4sbro6eV9QmJrWrB2nFyUthoBJaGFL67LtibV",
  "key32": "2bt8WkEankC5HQhYjVkReJFrQ6zzTbUWs6dFHayHBa3RDHQygiz67G5wuwkyTsccZodqGUacENwovgYGgzEzcmQj",
  "key33": "2vbtEQewLG2Rm7hnnDYwzGWRrGKJMBMqMA8YDXGXjoMvkHexGkraLZJa15LQA7hcgtKaNpnCETFopxaNu135ZSB9",
  "key34": "2Q8f7tBfeBvzwAq1p953q5aazGvvsDyAA25w2gdNRK42ziGT7v3f9nLq3waZ4MhwyHD6fKML7LWhdH6EZC7ai5Bb",
  "key35": "2J8dG3qoJFUpkK4TnHZrEfaipkauvG5s2BauHC65QkEBJXNesYUSaL74Zy56r2HBL8MGiwjyZo1rmc9GyHyfaSvE",
  "key36": "2rBXA93uAeMCuqh3Ryroo4qobTuYzvKzZgu33y5BZ2VMXfo8cxG4R3EPxPgLy9FaaVNEcTstBQ1Dk5ZmiuVWTKCj",
  "key37": "5khn5oPgTEN8RyUTsXGJdmwiNHwAJFUbgUvVhKA2owZnwxASxrFssUsPRjTdyLLidKVueCu3VY5DvKaUBz9tFqjy",
  "key38": "2KYB9RyazPCsYEVynNFPoU5khTH7kTdXVLyMn6Rk1cffiQ6b7TUcTfyWKx6tfKzLzLP9DasYAZGhoUzRzDSHjqxV",
  "key39": "52m5NMTQ4bunNdojnmpRGhs7P723QrfBXfaW5wTcKgiPJDEQrm4UvHK1MeJNF14J1NnkvWwjEacBNFYhewMgjCvx",
  "key40": "3z9HxXZctizoM9DnCb1dorFUBANRLyWRdqYncWFwrFGNJecsp2bsSz1BiDgAr76CKSjY75Gyc6uZEFgWApkABrTJ",
  "key41": "2BuofCs2PZ3LjFnxVXo3BuTZLKeP874sHDXVwfGACtwPSeAtcnQB2oVSkm2SkxQV9gpbAr7gE4HEAnwkB1kxfsbS",
  "key42": "21YGnPC9iWbbiZsxsVnt88GVRsSmEKUpFEq2U1Pzjfz9UNqD7oqrgai7FWH1ASu2qdix17JNNKnYmQ3sx29fVyau",
  "key43": "AYgELLm7ozVf4TJvf3GcayhrMCXMqYCiwQKjZJfhvAjfM1sK2SC7UvEdw2MEnK4czqL1jUQN3zS2N1biYGXFvr2",
  "key44": "3yGCm1ZjQ5PR98Smycrvfq6kfykP1JKTmxPLmhM2Y1u1U4Uo1S9AEwT1W9U2eM328m9pwcruipdbgjqsGob5roDh",
  "key45": "2atQfeKsRZ1TpHbonLb9FsAFAHVuqAWUVG3rgzW3NWP1S6dagDmTNFH86CpPdS3RXShb4tJEPvzCjAQ9kmTcMe1F",
  "key46": "3nw9H5BsB4CHRxmFERiaCadovcwQ5dA2sM3yeY1BtfSkkafaZQrbJ6S6QqT7rs4THgxkzFkZR4TPkUk3Fk5HBe9b"
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
