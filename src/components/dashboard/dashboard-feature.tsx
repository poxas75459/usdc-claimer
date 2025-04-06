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
    "3uGNh5STJTYirwAVdkandfbCQX8i5SMXmRjZhf6frGYhsmpfWdtDU46B9qYvkipFTPAKKhXiCpeTHdviJx3G4wet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N4319pkzPsy5kuTjtt35hVpq3V8RXp97zWnrAVSXpdfeGiKinFSRvSRNZFx3SQqhQeHCXDjRLDrMVTf14YXRdsK",
  "key1": "5eQ3VrMeyReBfxCqpWaaF1p5b1Ljn6TfiSh6RNGMsbkr8eKe4tLK6C39U5wa8LQaDwR6wahMbUtvXrEh9BNAASR5",
  "key2": "mAN3ydPWbxAzj9J2YUSuhtZq6hmARLFEavs4nQza4WGLk4VwRC8hP69TRywBuY88JsvjMRpXtsaLuxH54CudNSY",
  "key3": "4cx6drVXpc369X5eJT4xNajiMU9zfkDb89jqHYPY8wSu3Zt132C5jiULCxmxaB2FGsq88FWGxtFjdpNywKEFjKte",
  "key4": "2XKHMxAoXsKdJZn2kRpFmAPkF4w7qFy3vrC5NpZXuTRrAh8qZpDVfKDdWC253r31dzLpfZGpgTJ3kDdXvFk7a1oZ",
  "key5": "2c1ar48CswJAA6CAEHTWjjrMNURnNxSuvbdwH8ZnZZyzczY5ZAWcTUSYbF3gDnZ5hy5eoUYhhX7ENABqu11q4oSm",
  "key6": "ppRjEYRYL6QiECxmrMtUjSNWais8qpdB746z27WTLVPTZ7eCahosN3MsDoxgiZLdKMBVgA8ec12FXAozXwfs3QE",
  "key7": "3pu7HvNHmGHxNao1XLCCGkAmLFqCTb3GbvvUfo1ybBewHMAfuM5ppaE8YNJPncbF5k9849vfW2hDR4peZzC9BkuC",
  "key8": "2GMEBXTM1t9cSrYqWvMUYYsP19oakrD2CuDNNTQAVpR332VHYsUMkBXzuuE1ZTki1NJMbpofciFskMYQF98Akaqq",
  "key9": "3J39sVsnkrb8n466BXc3jvn7SV2rQoRxfncoaygELxXPow8uHC4oocFfcEgBXMXeAzu19eV9r6yhkfX8PUzpNSkm",
  "key10": "4D8d75ByNtJLNeervVX1qScbYKse5WRaiucUgbEoJTi87rbPat9T9Uoi8N3pKp4DKM1iTamojogCdCE4Dt8irWF7",
  "key11": "4e6FFPe5A1S1kwTWrSqs4E4nk3LD12Af5Thn7vpPwwnDKAKuL2SQ7gFDzczUzSGR438tuxsW21yWcjUob3Qtr6N5",
  "key12": "1pcvNqdhtyqfwqn8fTsWeV3tC9b3N34xzLd3wkwDiSH15QDXP23c5zigeJUTy4hNEmDV9xmKrunpEAbLsdasm9a",
  "key13": "YUeJA537Uo62eC5KpyeMWDyh3tptSESeo5VfkMssxqCJRPxnHXmfCk6hGoySpgsWhPmA9Me23aJqWK3R7a6wRgG",
  "key14": "2Piy1xjrGg64xKCjtELUCVP585WtxQ7K7fhQyrCxjUyACvZHdzR5LnZB6hLbwmQiyJCnnYY7oigZADv9bnBxFFBy",
  "key15": "5uKSREUnpk1t4Ga47LRyAzR9HpS2akviNiiDu2gHERgRsTN4C9K4n6ugkYV7pRGUdRzM9p1uoZJRndjBfBeg1PxV",
  "key16": "3cjv4qSReZ8hyU31Ukg9s7yCA1ZsC6rbaJHGzBSFRH7RLxg69s8ZwkSg8nib7vKGXvywadb3cbRNVtq61G549vT4",
  "key17": "4KfwHUDenyFXp7GPN2GAHYV8H4Z69UfQp9VwgmYm1ttYBMpAUa7AjPzfGBPKPtPLYw4AUq8iQSvfuBw6qy8dy1pU",
  "key18": "GAzRmuT8JkBFYPJT7HwVTBTfAcDojjTSDU7sBBkdgyK97D2LWz1JyTvddbufAKScKz8y2oxdH7QayTWZKoYLeyX",
  "key19": "563vbnWskhwxY8HxFwQPY1gfN1Rm7KNjvrdV4ysiBuNNbgwErm32eZgWvL7WLzHQVwA6YmFRcNjuBcCcA2D9xzQY",
  "key20": "CnbHafeWDQQXH2DHZt27YzvnnBu43nzEjhjh6P5rgzVfvsTkEkp3sASH1t6xvQK7B37QTKegbz7rercEo4cCCyf",
  "key21": "37Fr4TFmRYWDXNFPwy61FCGKtqEsNnyoVZ82U3ueuRBzTwRUhLuvaXmcDGT5ftTot8QHVz6AGgXC3cHhNe16Gk2s",
  "key22": "49m63CBydQ3PYp9QgUF4Mi8pLJf1j9HY6Rm2sRHYHoUePgWQg3ARytix59gSzFMupShzzx8P7P8tou3RdKMwgXPo",
  "key23": "3NmoHH4qvqN3qLhYUYrjaEUBmAmxfrVdGeH2f8ftN6JzP22JTG8E3U8oUZcJ2qMX4oiHso1RiY5wxRw6LJtMojZA",
  "key24": "4qV3UrxHby2ZcUHa796Pckr5KFf23ykj9T16wt7kgVhBDTb3pLg8gBErmaSQEWap3Ap4M7UtkqT8DEmZcGc5gv6X",
  "key25": "33i4nywjv1kDqdY9akBo1wvrvNixpknwSR2dV4bwSrTEa3sZ6Tiz7pdpcs7uyFyciygZqoy77CVZLm5ks3PzH3SM",
  "key26": "562z2ujvnYgvnwVBtQGqfNZL9KJnFpP1wfcPUKBHsb49HdEEMD3ayixH4Sfbeu1kv9nN2ecLX4C2ouug9SC9b5V1",
  "key27": "2rEb2yoorqm8JKxzL17RvPvGSu4f7dTUmx5grdKZJAziTwbntGAqekrD3k7juUbzyCVrTB7AcdfG4tEYTD8ruMcW",
  "key28": "3gpM3xayf5HSfLqkt62EihmXS2SiSYXkS1MYxMsgLX8VSP9dqaXzb3Gh7fpTocmfdrZHHScoMXWUTtAtNpP7Ho1R",
  "key29": "5VS5yAhKSFdym38PCdAFsbzMkQexArUcWnGqkH8b6m9Vkc6d7UQhv5EZH46iAdx7RT1JZQbRCc8SzjrsnzMdc3YN",
  "key30": "3okQgntfuWyefH3mcXMTA98HW3B95wUos6B5RCgGdQSeBQqd6KVNoAShLKd1T1NQy75u1eowQZbML4r3xznWp7yF",
  "key31": "2knSnuVLEiNumxMoQkbqxR5D8iMhWp6Xxpmb5JaAXLYZsQ77yFMjKsHN7quyMDQd1AUYnjMqtrKzkbUzoY7Jn4nL",
  "key32": "25ZJKcJ2a4RXSSf5F71hyCv6H1hxSVCDPQyY2CRbQL3DfuSRfBRz5nb96FHEbHPLA7pYC621zzMMVyeYdecSi5N5",
  "key33": "4yQTHc1TYKWqHL9ZNLn11KfCXAuDyKV4W5At7adLuis3MpobjsUaP5TTfNZ49KEgyr92uwzkm98XraZr5N8bhLKe",
  "key34": "5wBPD2qvqJBbgcjjdxqSAzQp7eYhtvxueEgPkXaWkbXXVX9CnB9pSuwRRn5aPY4mmucsnyD4EQvMC6unb9kiTV4d",
  "key35": "4SHCJZ55kaiJtDGx8ZJtsWdYKR187VL3jELyhF1orLXCRPZNz6izn7FZ9sgWDhHT6qazJiQt2vkA7gbpbjPRr27s",
  "key36": "3ZRTThgMZGJnBemHsQHMBfQJEoYnK6tnuwY2X74C7snjFU2XhLi2tTtx9dtgo8CTWCiJjrf27KW2VZkSsPLyjqmh",
  "key37": "51gAPgvfWd4fH7wPY4R1VXGTQ57x1vXuymJGwcuh2dCR9CWyrmGyj38aFmyYjvLCGGKScvqXoAf5DMqEmH5fJFvM",
  "key38": "64gvMcmVj8dYFnAtEeXGJPrGrgPCMvRpJtQZ1vgwmFnRcXR77RL92ZaxXanDbx5PE1h1TNBa4vVYdedJ7GnCNPUP",
  "key39": "42yZUAfg2jDQ2Wxg959eCHwjvXfZdCuQtESg57RcyBiVV4C8if27x5e66qb685a3VhTYGornj3pP1HAG5pgSwhSH",
  "key40": "2YVw7A5AqakMdwJYU6AZNLqdJXWsfJfAwAJit9GyQ7KNpA8zUmiE8NujbxWch1xdTw6X74y5AH1NsWqQU32hcozm",
  "key41": "22QNrS2EioHV4GweL4z5vFXvRCGVH5eh9wfMgZBbSe3J8ZpUoWc8uTEaN6N2ddzaxoyTaxHHLdWfisaT7kzhNNL7",
  "key42": "baCPXaJGi6kfb3QUD8GMoB9c3u7gEX9kVUr5MTbYfqpXAGLbXkfcJMKsnpqoMkiP8UuNVDy3BXd2ufhXdKgwmdH",
  "key43": "2Mck4Mxr6UbizsdFJbNCAf1WA2Di8YTFUPmWiBZ1CCFKEGrCPSx4vuWTtoAwDGz9qm5M4oVWs4XPUmGqCjAVCx48",
  "key44": "5PxmK22TQWGM6Dkch9YGSqqPktyqRvcxKj3uPW5e3MLbQWtYKBjDPkyJcMX8rYDCJUPq9mGda4cg8ezy46YuiLen",
  "key45": "2h28awESoSG2wx7uq2r3MRbJcF3A9brdJFnqRXuJ21cxmMiDsh4SGsccPM4vnGjSq2w4PB5WMsEt9s859cKfhesC",
  "key46": "4WdRVv72gD5ZjxA9YetkT3AaKvfJ6WZN8i2JjdAffdVEktMT2Cf8RBdwXtYTC1ZdGDP9AfrzfJMgggG2CYJ6XErA"
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
