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
    "rKcuzYDcoXigh9CkFbC9g937kHWjx75Sd8zhsn6GXUzNHm84xApBiCn1ES2qTxFghbXSQBrUu7wwomBVEhHziMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qWskHUMZHZU8dXpW8EseJb22qLxnePbYwcGxRq1LQKGCYL44RF1KmKGFpQDbpgZYHFbZLXWVC9zTe6NrGniLM9j",
  "key1": "hBcig5ZgqKhgoMK9E6GKrGdG2iWF2B6kNAKJAQENhFrnT39stQwvaRmfrvggdDGBx5S3NV2xmuSKWG39bcgF9mv",
  "key2": "2uTcwqFHC1rhgzwGVH5yH7A4J9iQ3HoemeqAtVp4cp73HJWQKC8dEj2ZgrLuTmnToTzWcCr8DM2aFN2rQANK2yny",
  "key3": "bTzgQ77u6Fnz6t7Y6xk3ffRsEnHa13v4cyKSy4Lu4MvYydHi7oVXF4FrVNLc8hfDEyJChujm9uGjmV7ikiTUDME",
  "key4": "5ScuNVyrCQ8GapjECXmauLghdTEMsfudwyuzHkdbVCG3FmPMJjRDmDi8rjhdmWa4b21TAJaGococLiAt7bQuzUn1",
  "key5": "3KmGGNBSJV4jpivHmoR7GtM9iSTR8NNg5mgJViiAn2kEeiwgBycLKqxwBagajX12EVvmqWGAh3LNn6SuPZjGHYRz",
  "key6": "666qjsWWjgSJ4qN6EDYCfYbPTWgoua2mrjSTCHCVmkKnxXw2xjg62UCTE6sj5H8XP1n6NAYjqjaNdT6kUcWE2CM1",
  "key7": "3dewMed3CgEntLxTcqgEqc9224jXPLjt6EpcHw57WLYdyhqv9DvLDtXBNsq5jXqYRGHPWhtZFHeaj3Uj2idanim",
  "key8": "5pDkcDx2jsWCiN7NMF1T6xUzDAdSG9H2TLX4FGBZ1SVZgwgtmbtUPiZzNWG8bShX4obW4GfL5oUrcP7varsVYZNr",
  "key9": "5Y4VtdDD5RmTofGNtF6f9tPJbMDc4yP4Jtkt7DHvSj5vdWeJ3MwLM2FDVT5yjSq1fVUAu6gvtw2c1oPWmGFv6U1e",
  "key10": "244YFnrMJG6pX2xt6tHQf23sBuSBnpuns7rwAQ8zwL5Yju8fVaPnLXGHMpxRUV8DuTEHLEBgDV4DEp3GQJM7WNww",
  "key11": "4RjecffQyWkLmJKcDHxRDk6TkMff1A5d3zRn7RNVFLgtgg23szg9K2vdsbKneZNeNdRBYwPUhAZNhq59hepoiAQ7",
  "key12": "4x8z8Bc75y6ZbT5LUsBE9Aqri5s6MYbx6Z7WUPhG8fVa1HLDCCq9ZCopkVz33bGqkxCUsPEvrP8qY3bscwxLaSEx",
  "key13": "2QSKfaTqfX5ztGnseimq7b82YEMGrq8xp1gHxMdif4rSb8LezD4GV6Un6keg68RkRcg1S9NY97NgJiRgnG3pdnhy",
  "key14": "2nCzLJuwuJkWAXup7YE2WBDezVeXDEo52s9omx3grPSv3N8DJx4WnHtAsH1oMuvj7pyHcfwdbuyFuQeeifVGmcMC",
  "key15": "HoXUbRnpHDRom4aRciA2tdex91JHu1nEgMgm9Q5A2YZFPNnSAcC5WbehGHJYkFUe8ZYXjPEKmwrHEfLnbqsnoYG",
  "key16": "3Kqx8Pi1rZNNQXAdb2hvWdRMGSLCYfdi2xzWXuQmBxup4TrYe3anC5iGrntdNbAJTDn992YdEkbQZtSfzXFhtuTg",
  "key17": "4bLhujj8P2GdoQiS1n83tEbYkviKEXNZwuX5uP135Uh4iLSNE2KhD9DsXYGigwKPqsVsrk3HoA5dZX3cGbSUx25P",
  "key18": "2ruvEjrce7ddjPjS3fzhTNQkbQNzvXFMzD9ASxvKrdzPxCERbktMBDxLzW8H91yArtT9skHFNWfsF5ve5efcv6Yz",
  "key19": "4ebUjUoXRCCRNN6KR5mbERaVqxk69yb14ZMsqcwWkg3gEeL4EKsz98vEK4bpmEcrAbAQhG4Gg3qbewxcmjZsixkW",
  "key20": "5AeT8yW5BZjaGZFFEE5jTPc7aoGczNin3o7itPwDoq37EEyoYQQswmK9gjWwX1F27LxJbGQ3GxTKTvpSgpCujxZg",
  "key21": "2txA4dTVs37ncAM3iRdbQFMFzKk7D6bE2J55WtJecyY9hbFB1THxkNPxiES4BEH4CHmq2Vfs88bc9RhV6d4v6Rmv",
  "key22": "38hwAy5ivVwXSBxfdx5bpWpe6cFcYvQtd4SPXAvrtAbKH7R5WjVHWZYBidcVsft6VWwSCB31NbwH2TXL6dtauhdf",
  "key23": "26LHE7gPWfy1zb6rpmHkijGLMBPV7WapwbDfCLZh3RYSNGSQCHDnEBhczATe7PLKMLFA8bxeCtYcC5PgP8PgfDRq",
  "key24": "5oPNHgWo3jjQhmjwU4KCtaCuK9oVyVzLHZ9umgHH3auurBAneQDzNTmeHAAgnfkRuR3ZCeRrZBb3meSpdajAyfw8",
  "key25": "4ZbAUi7kV1uEfCXeHa6VRrK3RSP3jp9E46fnzz7bHYyjgX4qmBHemj8CFxQqZ7MSZjA5obG62dmdEWdt2TjUxpjp",
  "key26": "rmjccuSgk529f9GgcCDzTydpFC6zs5LStquRXCijW5iXGGuAtLeTDf8tqWBPuDoHbLQrwQqXwDxwFB16gQxUkwu",
  "key27": "4Qnuu2DgyBhhsXus85rp4E7BzpgJtc7DfCmtDGrHKowMHfmvprypq1thT2iFhUi7yyU8ka2B2WJGdz6UiJ6NHYVL",
  "key28": "5cYZMUVHanuDjpL8iFHjAyt8E9uHRxBFtKoM1ARYh76aQQGXdrv4dN9GD4WCFVMrPtyUQdAjHumjYu5HjYWAig7o",
  "key29": "3Z9MuBXAg3Rm55C87dReMrFcj8wRDiGsB8N98Pvb488t3bc3MgxQhqjacEKqYkeuDXppN26y9tJyPECKAoYn8hY1",
  "key30": "2pmJLtnPYbHTAVbzbVGZynuqwYiR1VwnnWBrhGNr96Hw12ER7a6QwkWR8BPJLpfVcLbJHmFNNsd1mMMpDKVPtVdf",
  "key31": "5qKpnwsFSZD4ztVXitjzk9rB9v3V8hneCY2SYMNQon2XcgymVvt3wmYa1a8mgAaZZRGbtsLY25SZNqqufUFcwf8g",
  "key32": "2Y8ocv9PEUSfSSeXURvMUN2JReqECvFBkptMkvXVoozxwQJLq4hYEAvBBDczqieBjQpUxdCx8GZCtARWG3PQC3GH",
  "key33": "4sBTRC7zWropUiNQk8w3eGQUfWAc3cHDjFS4jMf8tUtJHtPopPuQg82nPTbjYSTxpUC7NtnVK8KAnVy9xBjPhZkR",
  "key34": "5qGnz7zAepHTz9oAUGP4ytudq7T7AM2EiNRGG6Q7jqp4ejHGTNtaPKBwLPEMBY6cqezuz3GfrhSFy3kRUiBXQiKR",
  "key35": "5Lec232BYL3t3R4zTo5TSZVAYyobSqfbpeP7pNAF3zJape7kyEMC9EGTZwDK2cHHGnRYfjPGsxhggyKzkCtsLuB",
  "key36": "56KC1iGpTLe7JZUCnt2Y9tyyGw9u4iNkY1kVzpighAT2yYDjBkRwAFsd1sGh7SSiwAc3CQKqZyieoFGsLLRU45kG",
  "key37": "3d3QhMHMFRvj1tskjSGSpmC9APZvqC5ULgmuvVhEkBW3Rfg4Sn3RgruSCDDbcWzTPCzL23gPdTBamdSQ7i93v3pS",
  "key38": "3X58LuPwXxvPmPnGwJ8413UjAnD7XQnRSSfPdt2a4oKZj6LineZiZje3S2GUoc5ZPp9cVVnZXCHvrXVvRg2vD5Tw",
  "key39": "3QYJRgqaMy2DgNL6PiAeswyhU6iMgbZnyN12dJ12HANLzMKxHuziFnE6x5tBeN3Y8GmZcCD3q8PtGynBHbzj99Qg",
  "key40": "2Zw7xmzdqMc22fCSbnx4cX3HFXcJLmy7QooxCp8WWtBmzaC4mY3j8vEgQ4ThCkTU5bAm1uaT3F3gUuqkF1oHefTL",
  "key41": "4mVikBpFxdUL2bYonDDqBTcKDwuRm7wyZJiPqRFCFLvChg9WRd8DmfAQ6YWD8AdvFSbv2JEfbrgHmu328wdMegiX",
  "key42": "2AMAjcogdZgfpTDqetJisuLxf2o3qhxH7EcC6nbzX82aNb5RWDpCTKwawz5GtiDBxUHKcatpFzefXzPpEYF37LPi",
  "key43": "28xDKPwfn9j1FXXvkGRcHQoadyqTvY8ZDCkwrMRWrDktLcVdfZxoKWmAk5iRXBLRdFJM2qsTV2GykaUGgRPn866B",
  "key44": "4uPPSWbN41EsTwE7cyFpfUwthWFLQLREATPVpP19PTn8ySMEpjvMDUbSPX3fXkBeMkq6LfA8G1yWcREBj9KmmeKw"
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
