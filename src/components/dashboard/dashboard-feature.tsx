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
    "5b5LUgBom5sBUFPa1HpN3haU4FdVy9Qw1kmjtaEgnrcCuYoyhN3x1q6fEajeAPbLDs5tRMdKfVwRURzKn8jMRiw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43B1ypZGB1PUApkvExNv1gn44AhHbtMqZMjdce4VeqSZJKbyajhuXP8f3by3fYUMmYS3CzBws6PmPtJeUCWy67MR",
  "key1": "39EDJBQmSiRkTBe8L2JjeUQPMmkYGoih2HXzUmoxCD4A7kt4f5PnVJJEzL555S88XAhG5d81VGbknZHuKFJpe8wo",
  "key2": "2wcZTXRf2sQnrZGk5MFRWkpfxeLkhjK5Jo93iZ2UeW1u8zqAsop2CVFnstrsVwGtKVrka8djBCyTVhBzz5XCh2UF",
  "key3": "vfa5bN5MpRCP5zNPufjzUhhxDEzSP56RrALZrTwxzuHuaYXXUw9wQusc9AyQqGpaYTY3AWjj9PByorMxsGSds18",
  "key4": "4a2nyYvj2zrvqcnZgyH45guFR5xnDG4kgLSFXNuXg7JRTizVX4r7tUvBDLiEcfcF1fcKnN5WFnRRm1F3FHNWQ6KN",
  "key5": "4HzVaKy4kcJRgcJBd8N5Dh6NKF7YrdtKrk5c5RhCAnXPmbtJ8iTWghrVUkzu92aBVT6ieKx1zeW6tvMunt3JRVeh",
  "key6": "2UapWz2P62oLNkMCithY9Hym2836tFns7SEWbcrVCwEZUZoT1rzWs4LmygwbWWDWrAWPfWgsoPPSjN9gHyc6wvXF",
  "key7": "4JG37L8yuBTfpT753Uy3BJbvuEbpsSnRWPPDSUubCPkky6xZjbu7Q28GvKts27tiETB9BTLbRJH4UJme77K4478Z",
  "key8": "3FrY4wS98FmRnmcS47SyULUW44KnnKEeJzZ7wSMxEfwcH5N5kcfTwuL3QZsDPji7VA3RG3NV2FC4HLymhACLXNQr",
  "key9": "2u9JgQGtZ6oBNVkkMRABi6wcqAuJe3x2Aa6qkjXEew5m16YDwED9GmVwuRoFA4m2WUG5xrHzbCHwu5tgnyXJSZTL",
  "key10": "3A5AYLpeGhGhSTD7zFbobAxJd28dEYfwvyKbieZpbVx6fNV8MyxTGJg3iiJQDL2g7NdtSJXmZDW1XsU2ek5iDz6Z",
  "key11": "3XZC7ru2iGTRZpUesAvgvZvX9nBPjob3cZ9nYxVj3J98a6XcX8M78e5wtme2VEPeE9AgoWQQJxDzUBGx4HUB4ipg",
  "key12": "4DRcv7z5a3eQCoP6R8Zi9XLPy14hE7AkNRq5gSokLACPACoj5Fm4eSE127gZzhZkKvZ3m1UUrFh36b9HqSAJuSyp",
  "key13": "rhjGAi97eR2cZ7UR3YnZcJSc6PXSNYycUUUgfL5AVNyR8oEeV19wfsYto4j6KFwYjFasBCNBTnzaKMMngwDL25q",
  "key14": "36TMLd3tGVvuqjoHrbzpNkhVS5B2UM9W74EMhN29DUdeWErFh4tpeR2z5EzDN5etyzwdGebaJxz1PU3NTqKtP1U7",
  "key15": "3hNKFWCPm26KCL1Kr4Tj8pWXBkZ27oZXriQekcvSWrdDnkpzxmQZLsg5x2SobFpMnhjJgCnjAmxVM9hgHCTGeKbv",
  "key16": "3H5Q8edkWX5VXThU9ZB6mMkgjdpN7k54RFWu4MDr2UTcdJVPqb9ehi5teroKs3XVPC2vhKPFmhy1JQVk2N4wwXFG",
  "key17": "5ERxovfTCCG64SB8x19VEx5NQ2JKZpZBKVFq4eNLbc74ffK4rrcrpbanaGsiY6JbRZGUj3YrcoEZ5J9NBpkBk9Fr",
  "key18": "34AENmXrYwqb84bfwEPAHeamfPDkT7Zi9QrsWHfEUJ9FZapH4XsimuzLcT5oTdfYbtBsHxRVa7Cc74g2p8mJsxfe",
  "key19": "4pzGUHW9QjjFXSipweF1H7ALjgR9XW15r1pLKF8Vg4wPpgVm6MFoWK2Ygn6HqxJ9BMsXrDjEKEJVynv1R1qAYU1q",
  "key20": "52qVRYWXXBXmodv2viPrPFNEN676ZXsCRQLE24DdsYcNZKYSirJ3zzpNtbRcNHX3WeGuixXce6hNJjiuhm6tBRgX",
  "key21": "22u2S26Bcdv7R1NgkUULqUYbzTnH7JaDyTpfTVsP9uv72w2WBfyokQqqPhJu45G3mDfCEs2m3ALDcj3f9Nu3xve5",
  "key22": "261rKd5Le6fQgLmqmD2qd1zdHPVomrKH2GDFtyqBVVLkw1vaqhqS13ZjyxeHnz7QegvimB33VX1dx5teuzkNHJg8",
  "key23": "5v19pkGpoHGkcnr7EN67JzgEUxwwRbTsoe6wZCV62PaxM5P4rauSbwLyESD3NKddXGvFeLnX3aophkD9KxKUh2io",
  "key24": "3CigBqC9sRVW1GdSAvW3U4ZRGvCVdvbFvLNja7sciBTWaokNf4Y95BQS9keXdw6uh1HTcUEMwaqJkvxdUbujjT1N",
  "key25": "4b6RqVAs2ACY681ocERJcEhKRmyXgm8ih11ebE4LfbBBmA9KP3Tn2Y9rBF4LE2Mgh5oumaviuDHHes61ffpkVMiJ",
  "key26": "3qpswNctHQfuKy96WwqwtnSFpgwqdBcF4FPgD7EpVw3hubAyMMtsvs5v2XaGJ8qRWny2TEcbRRhjRiDnbeDu6Biq",
  "key27": "XXK17Zczo4SEcSdNW16k5hUJo61N5uiekQ7N8coFquCfneJdTGSa2iSu5gq7zpBWsNJ4BCp1m61csVjS19cySvM",
  "key28": "5aQ8pgJiRHopMQVuDSz6j5uBsrh5DV9GLsbgwS56rvi9bqM5uLLWMP8SKSdq2Fwgp9kN74ZyesqJvzm5VDugCh1c",
  "key29": "4Eus4VaJdQDjFSqD9gTP6qrbEZ3EUh167uUSnPdSL8CHXpyjbrxoCEZRRj8sYPN3scSM5dY4Tp6VQBJ8W3BiQRF3",
  "key30": "2gY54yu5JaF3LUaQ4YjcosNfU5X2zzHkFs7bp3jiHYFTpMXKdWXnDmEw2eyPwBVSDappZZFkB4cwMzeMNPDbgiBe",
  "key31": "5p5EcvsyrYvHc6o1xAWoGbqW4djcQ4K1GXWhqSdNN3RFz84od9CwXMPSsfefJUpbXb9c2iSm2uNDzMykDypqfTmo",
  "key32": "3BcjoyejJm2igYLGmA758jDraWJRbwa4Lv8Fr1kGEXiteUeRSJm6ErLmtZ1ADMpt9ckPe2iv1jyr2WCS4dQisLSf",
  "key33": "czz3yZUD7yoeD3FCX2PtN6GUayZwgLck5pZoY5z8eseHR6nMWJFqhCGX3bZVBeEYaceBmBUMUmMVR77QKmrkJb9",
  "key34": "5a9FfjKGuCsEhU9jGN7FmHCMGFVHeh4HpnFHfmw5UsenR9NT1SpK4YwSYJRNnj6KmaX8tHMRrs9186Q18j8NTJGH",
  "key35": "57KceqUzum3mzaFVxT6eL7ytjH7z3mqD4XNXicoWWurGwXorVZnPEMPR2xfQm1mRjGwNyoThitp3aAL4g6FXxffD",
  "key36": "U6h7YqbPnUVJLsuiwrAFv9HUAM1HNF1WyXr4XJvzkuuWBwiDrHmQQ5knKxU29DqohPFWJEFXFqWbR5cxW7C465D"
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
