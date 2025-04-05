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
    "nx3aeMGYrRxMfhnNDQAuSbymT4KKcq2mffY8D1cs2YtERpFVCJuFL21eFguJRZ38dxfHnusQXDExn3ZjrjM24Bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JMsB12hZBMD3esgHxNzbtKnczV6ip1AFYQ3RR4UdiGCTmSWNEc5LGmfT28eNLSmYz2oXUFEdE81yC9Cyh9tSvTk",
  "key1": "535ZB2HYDXXujNCBY6sFyGkJRzEY4tRmrKQUkjBMmiwJj4w8Eg4uLoMAgesQ4b2uKzzMkJzm4ifadpZY4HGG6JMy",
  "key2": "3B8a7a8FEXoRJZ6B7xQt6NHGXjM5NDbpFvqjAVLPLjTNCSmr1zd34yLvbRrkcgL5irrT9z1W5rWVPbeUSoaRPC8j",
  "key3": "2X1Bhyrs3nbfyVUxirPb8JZk2RGK5ApQ2Z5Ee6Nm8iCDSN5EU4GaB1iuWiBkFaexoZyt559uk7HsKNXmR4sE82sR",
  "key4": "2gNPT5uKZnbQ2FxaxFmrhAY6ewfBNpGSqKm2B4hQ4U5dVeh7i9s8nqTWXsAiDVaxPL8SayJTmW6MYKpYjUmHpfrG",
  "key5": "31RufhKpNEvYiPK4RVr6UiTbmpKHNVQ6FmtJgjnvwCWwXsqCmeEBWyrB9iDMpCvQRNE5JZB4bJSSf4BqAFgVoxMr",
  "key6": "2Ad6dz4cCyGtS74Qr4VucP6JjAScbejnau5YyAirLP6E4ttxH4H1vSV5aVTyBMP48oqhNEJVSZxxno84S5iqve4X",
  "key7": "5QkhRNzei4D1F57vHhd1RbJBxfeqrDKqBxX5s6jJds7nwCXZfiDTG4kMNKdqVNyP5x4cDc3xXXZ4S99swkEPBfQp",
  "key8": "2HZtxiBHbH4CH6sSYNL5hEM1QWgk79hjnERUiYQRQCgTHCUFtQ76AcacTF4nWaav3vrPim54JwZPH1mYvRWxcrU8",
  "key9": "5J4BrM4ud6Tv7XBxXj2infbPLRq2fJ6us4cXR5Q3nm4ySv3R77sAq5wKHWzYGSBcGTUpccLgTEdGDZqao7sohEf",
  "key10": "zT5hPpVKGkDrrgPjnqZbcVpmTW7jTPQ14BRWXZXsW1N8gX3Ld33icPwerqNAPEYPjTBkxpCztBcoPxYuuA1bUtg",
  "key11": "4BfSQGfpUtQBVqzyyvWLzccfoJpoCSucbeXG3hsEyx99ivUDGe9YLbdceS1a7GCQn7stuSXEjJqoqVWzUxgKqXwM",
  "key12": "4Q1R3qHbphMsQUk2aMPpgMCUupAut9zM8h1xYXAfBB6UPKXAt7yS34NLV72mN4oWxrytZWJnhN69W3uegvrgqycg",
  "key13": "574YHj6PxugcdhTfBAGJeUYsmhjCEWjLuy549rm4s12aSQDDfuReCgKqm9TJXXqtPnGScBrnUjbmT6CEegm92db7",
  "key14": "HMjes38DMnojj69jMD2b5hEZM2g1UHbMdFaHCFnA5M7mwPX3FRUPD8AaLAv3kpYo1wA4BGGbBUHPsg268gPn1fF",
  "key15": "5SapwkvYcPj2W2y3izNs5usT217AsUcPaDtS3vtU6drD4t7MCRJ3qzRPrVs5K7JE7Vses8JQw3ZQCjosrLWFxGVX",
  "key16": "Ev6V9sJrtEBnwWtyJHuHsymMdy3s6nXCTZGVZSaGSacWKbzKTurofSLhNnTwCXA7ZaBNJucYdRL6a37jFnFm369",
  "key17": "2fxqwutTQws3ePZVumEQgr58oB72XVXTv1QH5bKJdYM7nWk2ManE4ToHevspk615njF9mQijfDje1RCjtu5D8sB6",
  "key18": "3drxSqRkWW9jdLLwNcpEoLQ2AJ2FWkjfnDyUFVcu8nf5XuTVCDSk9BDfAgwy4E88qyjU2L4EHrmkhShH96uvAMkv",
  "key19": "to5MSKYugVvumjnNE8XEe9jvDQGTBnPY15FGT3BQmCSpypCJSxhvepLbiUZ4hXVXhzA3FvJqebgDLdbEVcDzFgs",
  "key20": "3TnEWE9C4x3VmwsW4Y6Fq6zf8Fx78Zfn9PdttZVviDkEnvEzNksLVj6KyGz8p72XmKsRWJ3YpntD7Pjx22efXg7n",
  "key21": "3ommjjifB9Qw7i6RkSCuQhhfP9eFyu1wNpRDRkHv2YQxQRoV7zkh55u36mZojA5H4rNGhdjLkFWe2EMGWdySYmsy",
  "key22": "eSAzPrZEbZ7FiPj8uhQz6DPMNdjqR4Jk3AnHEdCbodfNubevbecfnUcu3hNtup7bm63ePAPn1eL6nG19EvmQDwr",
  "key23": "tuMdkV7WjzaTWjynyds2eNkYYVHnbBpV8GynAwBsf9C3NTpi8Ewb6v4x9LKVGDAwLgfMJZLPgd6ZGYpA7xZeNNX",
  "key24": "3UVCAnGPdQm2qVXbrRgKoofpNwSxiqErwChBpnP2MMZBytr9Y5U4BLKFp6osMp4dAhk1ucJG6euYqKc93sqqNLwK",
  "key25": "3hVAAcx3Dv8YqeFJQrPncN4K1xkNdbHW6Vuk1XrvmVyqu6Rh6mGDSe5H5KyYy4F4sUxfnwqBhPoteMCqSrf4vKCn",
  "key26": "4VVGq2jnBfszNvBLA49p1gBSr13ARcCot7bjfDsP1BxjCSn9GHjef9MHguo8HrDFcrm24j9QUyicG4PdvdFmFJBs",
  "key27": "2cXMS7jDFMy8djndGBBoFWS7XVsvrkCmcRq2CsE5pECkyjyHYJ6TkQJViZjKex3KrrzZEBh53VQRFjRW43zfekHi",
  "key28": "5prErp8tCxWA1rhxeEqgQ1GbdimVNJoXTrtFrgQA2PbLdzdQQzG8V9MF7PYbWfeUTaWP9mDJjdmbcLbXsauGuQgy",
  "key29": "2rEqiGSSerarLsoxTtQ3vCg1VUfRUf4adF9Z3J9Q8UbSaosh1xYef1ZN6Ucgy8oVNZVd9GG5LBzp8anuP2nSt4vv",
  "key30": "3ichJZ2TZk46vp6mkocffpdw7giqbWvD3bci2npkrcwqSrtxreA4yoNEMKqqRBcB6J8817MFhtZxn88z2azi2xpD",
  "key31": "5rvYsj4a9REqbdyXhyztT7hJ2hyaLHAvXZkqfKvGJT57VjMQSLhX4vu53HHUvPZe2ib6KjhfQPf6j3kaKBxMdLVw",
  "key32": "2EyTtaRo2wugcpz8La17LLTxybqtosCjFcxj3MhDeNhKtU4L9P5mhLLkjRTnazMt7RLUNC2HBNJ3DLZTfpBPkqo",
  "key33": "BKTb6wm5JdBHNAjd662HbbdjPhNmpY8VA16Zg6Mi9K2xSMYxRPyjwuZdmNbaLK51rrBt61tYQxAjnhJXrTr4Zok",
  "key34": "56ncZjoQMHSyWJKQwAonuHrRggvdBsy3mxSeJEpq1ab1T4teV1Nma3JkPdZAMdTXHtM3ouXQRGQn3oeTZDaY2xQY",
  "key35": "b87MB1ddsHDSfeKBLgaqsVGGrE1YHkZHZnRZLy9hL322ipALa64nKCzFTbwhfbVkwbRaiTEouyD9YguKQuZ5zbb",
  "key36": "28gkpGZaecjSp2KyyqYpGG4J4StsUgMKSAy9WKf5v97fc8nAEAqE2jGMRijm13MNEXTuAyLie8pJ9nm6CFAGj4Q7",
  "key37": "5xLQhPapiimTr7KPqVxEd8XDyEREiSUxSFhVTaJuSeGLDPUkjBRt8bt2tMfiE6NCYLtusvVVCZgAnXCVFs39Qh8T",
  "key38": "66hLcZwjoC5tZFGjcCwMfpRncH7Nx8ZVuKrBZGFamWa9edbJBSNiiUPCg9RBaGdbxJkuRaLwgyMt6MqGY8MspWN9",
  "key39": "4ECWLwmqaZPJx7G3CjWYbTaxpZy28yLT8ffVnJsRL5F45w3fRRHLqHGFCPKWqZQRKJuL6u7xXny7ayeE1cTeaK5s",
  "key40": "31NQQpT7F4dmLjkmDkJ2TDB4EdKwT2sPpXmRqbXLy6uD81tV6eWGaRirWQJgz97m9EpnzoLqQiHq2spbyKJ93vEZ",
  "key41": "2ZkmzCrCsN1yjMrXojAJLZvHSkVfk3UwFfTNRN9pjt5cHvU6XxbNy7yk5yBQXSd99ZL6LJdbV7zvuWpUn3xErFWD",
  "key42": "2WF1kJDLERim13D1HrUwfypEevxu8W8m2iBzfsnnHrByysJo7hHYzfMinqxS5XXpsY58qk9J1L9vGornMkCgkf7C",
  "key43": "47RXSzUVjp71ZkMM6GrcTftncGr16gkbN8X9mu2xYF3Wdq23esha1Pq3BQCo3NyzMRgGYRtmKUT4B4zS5SqMvEMs",
  "key44": "2XKG9EayJcTg6BNw1kuZ3BGW4tpkqkCQHNRxEAdMq7yBiZJkpZUBa6N6i6KM5U8AyG5rHpAxNmnyxivQ3bWM4fo2",
  "key45": "3iM7Zv1hmXhFKaWoYjuTKfoxRjB7UfLwJQqypkpqu8CdDbXBMDZmyZ3yRGyjvQc7k3W3CYCK6akLQduY1dhZRtm9",
  "key46": "2YFSDJJBotJH249gjH3LP1z9LKPiaika3LXEGPx95LsMqy878MAoZvgECZyArV6RQyixAk8GmQDujbc5BwktWFsD",
  "key47": "3B2D6rmHwrKUMRUoi4Ceuusp4WiyLgZRARnTjwpmdWh2uxkKX2vBHy2xn3UB4DB2kNnx1rUhU9yBE1qEG52UoVqE"
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
