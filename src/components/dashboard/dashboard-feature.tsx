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
    "4La7RYUHERDRQHccacp7BL4KVgrZLkJ23qQicV1dDexpzVoAnnc32W26e8RvzfCuPEYiwmfGao3M6rKLip48KDha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "438QqMUmeCV7ivQEGMqV1aWsCZVi75UaV9R2pRfcUFwgCM7378j8BGTaoHtS3CzLhVp8URBmmXHPuSszZvHB2WDf",
  "key1": "5sT6uzdhoCGapJ4P1nvs2DpB9fDmXbDWJ1jsWpof4DbQLwyQpzqgaYCFakv6epwKXUTAxGjP8xAzSMGtd79NyyVs",
  "key2": "3QpeanRNWEAfmth5wB7EnG8uxrodjwenRJCP5y59pa5e4M9HqhxenuV3q4fPy4M2aQakcRG7MBCjZXi8UFTqc67S",
  "key3": "WRGbMJhZfP4gommTypp4BujghMzKXHKv4wMRBufXxugvJwbymjyMCyg4qJh9TyF8a83KybwZp2rbaPtDHANpXvM",
  "key4": "kR9AF2kcL52UJ9ntdpwfpLpcTjHaq4tY9ofe67QF7bwnmgc78fyR6DZmy9yDRHy5pNzSogx84Y59iuhVFdx6Ase",
  "key5": "61yBkbTX6BzhrBUVnJhuDokgNdBMynjD89UFaVp1anL7zqBfqkamDizCCLGtuKNmh3mKkkE22PzxFyfD4PXtV9Rb",
  "key6": "55VmGKh39PUNbMEDtk2Dj5P8VCFTbeGsip8tduMK8dBT4A9dcnudmvhZAVpHRpq829pPX9oMbbRSyDWixpBT6rwm",
  "key7": "3QNffqUqqaoyL9jDiCnJiA1UU2esZab9kxHYVEdXtM7c7kfGVAXBU9hPV5PLFYxki1De7SDEsdPBpniCmvFDtn5Z",
  "key8": "FFTFrQhjw6CosTanBQvfgo2yMWdFNfVTTKGPjwfYvhNc3ya6jocb1BQhyVmNz9j7ujh8FMeSAFerzSVa3v9rmyG",
  "key9": "5Mw4kQVPZvJWWc6n1tcb7N1vsa2rYEev63wJzoaPvtQ2SVhgBzJJqffMC5JQS6NkAVcE7zYk2Bar6Z9kUN4rMoaJ",
  "key10": "2wzNzcbWYzv3k7LbNsfaT1mbzTM8WK1aT5L5aADUBWNa6rrBkVVGq7gVRiYX3pvZ4mZm7ZcgDAaBu8dCbht72u7K",
  "key11": "58wQczx9SUYKH8tNcd97Gm28FtKex5PbGpoAjd3XqSaAzNtbzgxtnWgSXH5eX4jGXnVZ8aFMec6dR2LZra3aivCe",
  "key12": "3Zkugc2XTzh1xcUovopXtZhgqZuyRkJrfVwPVjc92BpihVp3tJfx3zpMVocfRpqRA36uxAvZVFRMLBSxjPWbZU3w",
  "key13": "2s86LfMGrJb6pa8ReeuY7yNvMps2WYTkomUqZpJxgx8ekRhYq7MMFJbtEAgRTQE7eMUaSd1Gs7TLEy5RhEPAn4nL",
  "key14": "5kB9Ugn97ua1LKme2wvTDsFGaXaJguUE3Q1bCqHUpk8iGKQagxRNsUAqSft22nDFFMq5i8h4GYCkwiAPBjp6v7fo",
  "key15": "kAQMnLSV4pTQngT6NWxnDX4y4KGhNZU2tQ5q8mQB3mCsdUo3jA5Rx1sajHKiCanTD5QsBz94jntL9sGkq1bvqBB",
  "key16": "5u8B57pPi6GnLWCkaoJSz9DLKQxoFN7wKLnahfHPVt4hNhsca5CYtT7LWPDCGqoARxpFnEcwEfa6UpkNRHHcCyF5",
  "key17": "2J1G29efpfj4vWa8civJTtZZwT8rsN2Pfbthii9FUUy6gNfiNz4iVyKTHusukYWfMFJifRsEEAgJkN1djpp4Rprn",
  "key18": "2jgYMpbTLheXSEapCj7uTaZvXNESNec753uj6zXLCr9XVG9vMgrGQkHt1BcopMXpTE9SDJ6p7K6PbcKB17Xt7jEW",
  "key19": "57Mvbp3V2ZBbxbUaQY9qQh1rXJd4zWLNTt2KY41cNg7Q84QpoWBByLwgeXaYfY5FD47q46KsWpE6i7wkuAAANMuR",
  "key20": "5U4sy5cRWv16ggz3S4XN3uraBgBCZB4oF2939313nNsrhmbcBUYX48YuHGFnLbYi4Una3AMmk8NMjPZA1UK34GZL",
  "key21": "3DdQEEZeJ258QsM1sL8SZ87NLRY2mcSnwvGKviTXx6xjby5tcqWsWnewtN4b2cZaAefKBwq274W2brWsf1fzSGfr",
  "key22": "4pEMFnN3CQWUGUtT27rUwTJ2qeSvRgzVFtG9VZi5gLa3FPC7wPrRsDqqA6VTsRJfZV9iLhNeqAtEUS2N5YBA2YG5",
  "key23": "2ho52Tv5t3j5CUu5WMXyfnnkUUqbdgDTnwU6pQRGKbf2J2Ap48jgfu1L1baPS3YS3S4JLd9S95dneGBbDgMRw7XR",
  "key24": "29z19VdNMi4HRhnkqjPfawVUVEnPhzwiPNrjtPEhuJKmV5tmQ6eTCkWVhtruYzJQcDmhSZpGCj9UvVJ1SYBjrEGA",
  "key25": "5PWPmUvYup1aCgroFKG74GUWP7jNaW4bE4BbTvYeivu78yjEqsKDaAwSZLFb1LHGYyUuk2ABzg31MRNvAK3LWCJL",
  "key26": "32kDC7qKFnURJ1KaART3UvQZYxFgchM1bfwpChZbdqdhmN7izT8Wh2Rpb7vCfjuNx9ZYGwBRFuY87R8PZRiYbNcA",
  "key27": "4uQDhx1qSeuMfDLSmte4GaQtyer7Aw3gjYRsCgYmZF1MA8dRkJyRywgfZxfKd5sRGkm3DJsjBcj1C3ebk1gfGdUa",
  "key28": "2Uu4rk2s5Xwg8bNqU2sUESafjfuC8doC6KW3qXedLKUHDpnmypVnZxVXrh2Ccqq7G2WQrzND3WqWqy6k49aFXcw3",
  "key29": "5PQZDTQSEnU7LSfBfY6mrMthznM2BxcJ5URtJ5kqNJRzbwyfNcY7okNS5hgoiVRvMxTpqJea8cWRLpnGxHKVojjB",
  "key30": "3FTBxPtQsoeBqtZsyeQCDVQiWU5gF943VRSe42hdLdoKkhrGZGiEbpZjzJYz6T8pQgJb5HDnZS8A3ghCAZutJ4XK",
  "key31": "4Bwids6qa2GioAanMCbwhGVWW2hX3KVE1nR3Qx9xU85tvjHjxDs448MdtBwJKHMu7LDWhWyW6KYXjCAafQMJeyS1",
  "key32": "bio7NXDLSCpNitJnFEFX9uG9u9HiHTdseUxnsx57jE4s8XT3TdjGbDwZS1UdFMrxY2EzDicW4GZVaoEdmru7WHP",
  "key33": "4EnqJeJVAWA7NaQaiEFLNZQbVGJQsry2vnRi8QWjAAZNmx2dNnLqBMuLXqnroZ7YwWkEzuQyvJs3YqGNtyqisyyZ",
  "key34": "4ViiFFtJdYRbhjuoH6fs7kxCc19CvNxuYvSr7gnBB3Cez8z9ya2ee1mEmkLudeMteayfRUGaJdXmoDW7WcYPnUpW",
  "key35": "2mBq4Awneprngo99muqCYonKWJUfEJB75VU3yy98bUFdcGaeWYQTVPkqjwgLi42kTNAYDiTWBHewCJJbR4XP4ahH",
  "key36": "3S1RrRyEZHDFSXMq6saDH2VyrM4g2nrJ52Vrwev6rbD2PDCmyNZwrp5Bjd6L6jwPU6EqpxBHuXmC5APW9AKDDjnx",
  "key37": "5NQ4MMmXXQEviRvoM9iKaPKwnyZJmZPM1HPMZBQ8DWLZA3A3bRZAsXsa2t4GQCY55V5fHjW19XtKWjyaN52sSpbG",
  "key38": "4EkVjvajkMTMzPXHvqKQsuP58heBPvUS93nsmBpCCAeok3NhUgqh69gEkmG2G7aQuJtfFGNhsojTiVTLdjAiewLZ",
  "key39": "qGXfas8BW1iK2KZbr14JHo4r4bPgAewVwYGtc71DotdPTYPJJwp645CphNnEL7Zbh4mg7WJVRara8KDpTG49vjq",
  "key40": "41eGbGLs1C6BvGTtbPAw82Ec5jCp5cjk4Y1hszUHyoqWMydyfuaCtfwNWmNXUifPYRUT6dJKevyf7EwsJKoMapAW",
  "key41": "iHmvRsvJW7LnHuUurm7fY9AaWKNzqJyPjyngmzf9aiYSgGBQqAvobXxMesxojNvagCWozfAynnHiygX978WpXjC",
  "key42": "5YD742SZbQPucNLAcoocwSL7CeMZqchAMxc7ehQYXHudw59EADLQQeei5CJSkWn9kUd6LnTVRF3ea6apSHWKcP8i",
  "key43": "3QebNPAifguHv72qSq6hDPKvmCLNhjXSoWS4DD6eX778SNDud9RsnPQiCKRDFRggfS9nf5h1Yzxv1bh9B2DUiwqz",
  "key44": "4Jajk4CcR71FFRKnV4WNZ9ddwpdMFz71ARRnoJGMpZC1pfwrsUrCLEbLpngYV55k3B2U46MEiyztk9fAoZimJpNH",
  "key45": "3UPmwMkAmua63tZz4rdst4Sinu67aGMhiDM8W8YSNJu1HFQ4XcxTEaVziuo3ywtKDqbobXh6GzYaRtum21KoNMHL",
  "key46": "5MA8tdGkfJkDCwpq5gQ92Z3ePbRYpzWt2LDjEknd6df6CLLmGWJ9uFQDDCUYYqWVcUed7ir63ZdktqinfKZV4Vg"
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
