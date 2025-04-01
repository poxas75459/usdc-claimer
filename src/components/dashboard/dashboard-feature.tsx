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
    "4jbaPZ6bWQpM4LuHdEXWWPNHrTGC4idjjyFSymuFaFGqSKz1vXDvPVDNA6qc8F6f1ou2Q4iY7EcrV4xR3Aep5cUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dT76pwfc4AVyoF4iHCFTFm8RF5aD6H9KnwtPutZoKr4wB4q4zeEUgctLsYTGZzWHGXE1vEfg3eB6tYr7Au2mpNy",
  "key1": "4LRXX7PJqNRrPDsSLG8FT3AsBxhJ2EySawGeL5Vd1ZWwy52JdApWgvsdzuAEaTvyeqwd3vU2fGStRYViH4GDMHBK",
  "key2": "45dEYNJNbVsG6eBK7QjBFbNMCwBV1WHMNpkD3JDsHkEYLiGxNDZyvHJ68eiG9Q9n5h4gfxixg7FY2v1NAUQWQLFr",
  "key3": "bxpsfX1GY4jUmBhoLnyzJHaFrESi2WZP5WarXijZP49JzfDRqUmWobhVDZSG7oe1JMByCXdrpn6TFXJAFH5yeUD",
  "key4": "3WHydrRuVwhahzKk89A6voGt6ELSkUQjFVmSAefVkuUTvekxTpBPrcv1xHsPtnZoXduMgQ9LNNu6ehFhWN3SDfiG",
  "key5": "4PaV3iHNJSjmm9ComvfP6CPqaYSoA7Kcg29c3uDW3BafYG7VE4y9duZ9gNvqshCHzSgj7a16ZfLtPX6Px6NB8q2H",
  "key6": "BuC4w5YxNoBiPm2rJPJwqiyTHNKy3TAvs2UMnojJNrQRTh53HTmACdjeAwFmusYg1BYSByRyH5yQJGVR7xvJ69M",
  "key7": "2JZ3yiq4KNgRDoWbZC2FLhbr3928f6khAXzPWJEWjq7BUJpGxeuts37Xf3UpmeM7fY2jd3jaKVFzhLcE8ky96FQQ",
  "key8": "3Z6qNb52LwxT3vn7DMRTvKXDniPZwFfqWv5LPbP6iuzrdo9EBDZaMYEXxUaiUSPjTuXLBugH8Khf1ZjPVMjauGLE",
  "key9": "5v1rb7wRqe8o9wjN2wGT2YZTWVsKvGM4oMufz8BB77aYUYhLmQAbfVCAtiCxFKzFwNqBsWB3ztnfa3Jz727kHARd",
  "key10": "htmRVzFDZ2dkVD6MBj3em8GLAv2SVuPZdTHK8b2tYo5GnZB4xUVPnqbrW7jMbxobA95ccbJwkhqCDaocQxeCrGx",
  "key11": "25HkSbEfGwJ7digrZEbaeZKBz2Htp4UoCZ4wEQU1ptzSN3D2BHVEW7M4KSBEEC4FMmiRHaCsVNJYHotczZreV84N",
  "key12": "3Vj6gZ4jDL7PTXVhtNWyEVZMEphoi7ei9M6jNissdUbLzZzy12bph8g7HrRtzLFVPqX44W7adew6iNSXFW82DG5u",
  "key13": "5o9JP6LnnwbzhpuFhSWrtVChpsgQ9Qmjs4BDtWREBQqL6uRqvMRj6v31yiMZ6djiKUajZJrJLUg2qm4NqQYTmrKk",
  "key14": "Uoko34XkimDdtPm7TMkPFscKcuEQdQphnhrmXVHNHXmDoKnVy2P8xzSB2PmQDEXv8yfUdyoVEghdj9AbGmcudDM",
  "key15": "3Dx2GqBVhVzsjVx3pjS6szkVas5sk3Mi9VWbhnv7cPUedQ3RoKkht5mAAFkGnkwfgnFpVcPTCBkgit922ozyk4ww",
  "key16": "126yX9Pn5DnyRRYPEAXXXi6kHUkVNeB95UTNogED3S3jXgWiSTDw1ccuF2QuoHB9uhXrH2FmiupqsEbRXFfvL5f1",
  "key17": "5UA8v5UZu7SHo2NuVGAFSxDVdC8ZsLbfirt2h5UY7d6Kgp8jDQndJsQpyEQ6JhkDjREgiZL1pyrQTbkPpfULg599",
  "key18": "2bmDF1wmXBsf3hoBwVqcrcMPBe8d1NfAcUyDuxi5AoYzSgQYdL5K1GXbbHXezLmdQEg515k82kH5PJTNupCA4r3Y",
  "key19": "cHnsY9mdY5mWNamncKbH6kpvMoHxvcmkizZG9DUXDDThfHmKGfX8mogMECWxzLPLbJA5c7WefcRYDnCeaBdqCQT",
  "key20": "2hu8fJ664ZuzbTE7z7zsNzgfNFkLjaVcrXB5yBnBHX6mrx4QYQpt2381CmoYCkH8Vo72jdsHyVEQFSNseLWN4uHW",
  "key21": "zXkz9x5J95U3nM3DDEbCwwWHibudWZC4TVofz9mBfBkXbEdUigsxFA6oCbCfNsJ8J1WFhawZV5yWMTQwGuvPSyW",
  "key22": "3z8UGtFfuwjh6p3f7Mwd9kxj3bmb3Er4snubn9bmA6fCshksd3pTt8BQNv3GixP4Hw6LDooG2sFufRAY2aCppJsC",
  "key23": "4AAgua2hE4L75rYEtQSv8CefPRhxcYcjjm7fqAfoc9qzhr68awF1FrxzghJbrrfzyrnKbvHwYGUepCRnLLfcYKEC",
  "key24": "2jtwMSuqtadQEE29EeqrZoSAnvLuahVs3NGpxNMZbtVa6SxqNUgGYXshQ347jk7qpUFdjw6vAvRjmCqqkALPMsYk",
  "key25": "2pzRoXKtb7T3M3ASYWacHAxBXUFy1GPswM7sHE9V8uRU9p5cJrj1e5p1iuXFSb8RbuovtiDayZddwGN312aPkKXW",
  "key26": "5QiyAZnZmnDYRDUL9DAdV35yT6h7ZEzhsxLEM9FSisByH3n96kwAB1uaLa4xgmo8EatDwGZfAR31BsGnbijpcvun",
  "key27": "5ucM9Cinno3bFxVfp3VnUD6Pmg5QHvodQJNcmb9Axnyu2BCDhkHtf8u86dmJeeDG4fYnDYP1x821tatAVLKy8g8r",
  "key28": "5WLqi8Nhr23Yx5hYqHwv5JMLqu2ZApsTDeaRSWhq5wb69kSzXhsmBCALMRjRe48ESuqZBerYAhsKUBwoiRRVQK9B",
  "key29": "3jEauHGWGiong3nfNdiLz3ZrDzno2iyWGwNMCbLLPhG3osbuHu85GjNG5HVkEkCfo68LbkWvWqqkFQQY5as4az32",
  "key30": "2e45NWjGA8RGDYNNsHvHbvsbabPyHgsisQFQ17NjDdomkKhiN5jFsXUSiSqAN2WB8Ah8Qsn684qTZFDTHXJdc2b6",
  "key31": "4qWFsqXCEV2TBmdPcg3izMCdBWen5PjULawEbhKx176M6z1uGYJqddtmwyVYxcf2LNPKTVib8f8jA8vrnwnbtPyN",
  "key32": "5UTdVFRV6e3xV2xS96ot6kS4JHJq9UDLfb2a6By9GdhVUSgY28BRbVEkmNTTrWNC6vYxwFXv5ZYoTXp5vZ3yBzpD",
  "key33": "45VtRouWfaVMEjQHvsSFwkKJBetXge5CjWsNESuo5oreo6VvGXwPG4gR1MxbnuHS94To7w96oX58rbxsF8znw5Vj",
  "key34": "5wc6MNib7a6onXmzVHDAvQtnFaju4Rnz3C5pNNoody339tXs3u83xHgFGVpbL4yzaPAZwMxz6AHqXcmmkAsoEQZ5",
  "key35": "4UDw5z6iaeU2uPpAeoaugdeMa8zBfKnkiq9AzTwThTz1EVVZKZ136xFbjHjDs4SiccC6c5fNsiG6nC3qaKk4AYdf"
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
