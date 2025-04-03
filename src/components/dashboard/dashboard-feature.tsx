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
    "4KQHQNYPS5ZV4D2JKsZm28291cka9z3eTRVdExqwZBp8LFuenv1yCoyobPXqyRiXYxwnXDbbqyaQjJbQNoRmoMRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f2RAapdxbsJztXHwPgBY6FXjxS7eipy7e3E67vYbnqBkTFWWWPXdDssfqWtjPomPxzRoe41jjL9DmKxLZZ4md36",
  "key1": "65Gm4QhvN5ARqpQavZLzcKu6t9WQmG2zXqPE1vBzbbTuaatRPqWWxXMFXRFzj2Had4pH7wKo6YNcmkJqFb5teZAx",
  "key2": "2XK5FKbQiuHQWJCKuX1A5NQBEnM9CnQeB9ELMUqXMKnefT3NJT9uMsQtLyBkMdKdrBG2FM9fVCB6Rmage6x2gAmB",
  "key3": "5WidKVN9t6SEauqYbYN3hupDbizU6H6zqtBPXF3M2ssLJr33HTQbupznzDkYvgZSbTwuMN9CmPvNfku2N9qFPnJz",
  "key4": "4FXCipeDAr4Bzp5TETG3iwaso1P6tJjgeEvoSGc8Hf6PZ7rFgUNNPC6NPC5GdLkXGxmHPxdxDdpoXsHrQrdLci1B",
  "key5": "4PQi43XSPZZM56FpJaBzQA8cKxozzzt3wppAciF6z9Nkha4wP9bdQqZXk65KrmnhmAp9BNwtk6DBxahnFChLwopf",
  "key6": "3rATTnqnAm5LSGZU94mpxMQZqrK6toxC972xPBGqmRWJWz8mpofidXDKyXV5Zzi8wwxhLLkNDttJrxDArP52Fns7",
  "key7": "QVcZzrVsoAL1uUJcYzoCfZxdH7q6zx4BVXhpfHh5xAiHaz98kUjYtTGbiVGWV98CQB5UuutWWJ5cY7AK67GS6oy",
  "key8": "YtLjDiLm86EdP5wbciMxfUZrwAWCJ1eVw1JDtZXvTm2CPmMLYhTxAaGvoJysJcaGNkvvdEHW9H5gDWPUnaBQH7h",
  "key9": "4xpcxydGGL4eowzCk7HETgjxKBWC7mjzJH9yGaeCu2dBWx2eQoTwsx8gyZWjjMP9KaNKC7yPTHo2M9YZLbPgauG",
  "key10": "5EHV5Ts8z6ncnjVAkGbsLotdQJX8jChxyEtJkG6nG25UP4ZJ2Q6EiRnTiLPYTajHyvrbSHkXmB3fq9GsZ18ib9Xu",
  "key11": "5tpPjWBJVUqvFWEceuuHcgBwSdUSP84L96FSzZXMNrErLEgNGfxzepc6DGZCyHduyBoMgTodadkPaDLhEZFqRZNH",
  "key12": "49YSwSLF849JtSVT62cwnMMg9UctVga2yRq53Rhd8kWXrRgCg3eX3pKk85n9i8MHbjVRGRcnYAjmWXVFi8F3oUCD",
  "key13": "HXcrVfk2wbXG9dRnGrpyq6KSrcpvJKRRrX6JWsJcurody7RAQfnfU7cZG37omP2UynQmUsREdur9og43egkiZ1b",
  "key14": "33nHYEDHKkqaDouH83q9xMRP8NaKH94Hy7QdXrgFnpUwNMXu6MZhHDW84RMnB4p5NBDRMDVVt5HYaKTcvZRjwbap",
  "key15": "X8UT9YQnsUrBC9sCbb9bzYiGrqJeBEU83rBFJd2mLHjtxb9Wg7VfVR9Zk8qeK649Z7Vz8yuQw3MZn3bCdgDasxr",
  "key16": "2ALZEomUt1JJR3sRkHA8ukW5ps7je5NsN9VWF7r5jP2eS2wcrF7uKwhJ7WFLoWU6JgUHVSH3vvvBVECRWdru6Efs",
  "key17": "5bCumJAdz7Pf6GZq3aMLXbf5BTFRcXSFjJ6ZsFrefjFYsRrVdiZjMHV9GN1fDnkpntkdZUvktDEjp2FoV6pNPYuH",
  "key18": "3thn1cAqDYyLTjVpTMG51CyM3cUNmUwqeutECikek9vX4DrZyX2fTEkFCSUqPgzV96GxqeUY3MJ16RYpbxgsF4yG",
  "key19": "64VVnrZTZPnAyJ6ZTJTsrdwb5J6NiuS7kKU38B3LDvaiTQ1aVdz51bh5nwBFKrbzMs2PrAUjWM6pf3y5jWyQ3xD6",
  "key20": "36KxcrMrEP2LSKGyUJ8PRxJpRLtuN1GMB2ZkhGnRi4pbvGktDasd13KqtaBUkDTDcx2VHH9c2MgfsdZ7Ct2Ttbc2",
  "key21": "2Q9YWuVKi9aXPBvWHwsMn7thh6DER6ngWY3Pz51TrAngK8HzeG3orU2A3hM7eHC99JxBKtnJ8v9PKeCQWSY8xkTd",
  "key22": "2YkS9cGLUnLbS1SKsWTSBuvmb8po5rxgBmfnUUoJdMQtFEL2hLKUiBH54Z29GGxGoQA42HzZr9ZCP3B4k4gdZXRG",
  "key23": "CGRC68ajCTx7V82PwzWL9P8t4pDrDzHmjnfoKFTj9YWy2h4y15BgbgpWtdfXBh4FgNmaj16hCLuGVuYUf23vC37",
  "key24": "hXSDuGMnZLfCRUV5GSSEZHwQ4dKrmBezdao44Q2kU2KbYr4MUYL1gBQgVBXHC1qnDduP227VPiGnEamPuE79dyY",
  "key25": "2tFUBCwV9WVmsBJgaF3dK4ikee86k5tgA5VvmMhcnTfbLzDrNREo4k7AwWCMSCFHAhaEE5eRsQ99jZPPiUfUSEWj",
  "key26": "5PksfPrMVGiWRFUctAZTB2Pe6DtZwSWyqPEbD2z6rRWMwZtNPhFiAR4dSZWf1NQJBJEHCMN6dKRyebrcvwSnhy3B",
  "key27": "p8CxwFKizKnZY57TCwXasKkaAAx93EGdNWLzyNmXmoLpw3FRkr77JggVsELm2Rg6AsmYC82J4cccYXMrHxPzJ6S",
  "key28": "PAy1kYchRWRqJK2LSoeiGCDw9zdGZGVxRFtex2dVai1LgjbVfJZRae37ACG29EKMwGrKyhRPZ6TBuUoHgwJCffh",
  "key29": "jrm54z73KT5iCxzwJGZ1Dae3pUYuXMKiPX3vhRZfibj7Q2VfxBbH47fQZfiAeTDDBhE7XWWiDP1MUwhFfPhn69D",
  "key30": "2WJFzEu3iL8jmrauvGcffNR9siFJ7eTzph2V4nPTNEvnsrL78GLv6G5rKXYtwRj8n5wPE3nzGFAyXjVPe61BcFam",
  "key31": "nKVHNtWAmiV3Yu4zMTKF6DMFwt1BYCdT3QaSoTF7EXwUaD86P5b7eSY4vnLvnwgZs3WhxU6Rn8jpChmQSoKMLvo",
  "key32": "5izqrDhKiRW8E5tvnebh8DNAGteMZ2aF53HaE5kYg31ycGgHGAEWhdYqPUuEAq8cfQkgwUBAk29cFWMCCr6b62xg",
  "key33": "caoZLsLqQS5z4vUqscA3rZ6UqnbVjo1hg26VvxJ7Mf74xQUbH6BdpY2DVfHkqEf3MxKctpBrnYd9aCnESboTEW7",
  "key34": "2wATyyBq8mKpxQwkdhHR6oDfHr7RhRGTdRVTL9LxwtNc9hGJnFoJ16bxihbsFEngMKZWudfAH74J6oRWjnibugUt",
  "key35": "33zhkeEGh6sCxGR6LPKfvZrT94dMunV4iAKg6pQCL4AeLaUsVhRhUmdWN1nhMQ3ehxx3pnDbh7RAmMWVL96TSpX3",
  "key36": "3sFw9GqBBuEZg42vXn6RcnWuaD3kFiwKZ8qihwTpMn51QkYLsVaNQ4JK3WUsRpEqrDmLGH7JnCF44dH2NMKKnApr",
  "key37": "sjdYgKwoazuWtknd1uugYUFU7HxA5GHhofo6bMEg3M9HLFJcoPoSSV7JqNnB7PKNM2SfYpikHf3SfZFH2uui34e",
  "key38": "42JVtQTY6JwhFEPJUrAo14uSFNgTBg8ZJreSS8WtNNmj4f65N1ERwMQoDaewsud4bQetnRxB3hj1LGWLh2uKe3Wo",
  "key39": "SkD2uUuE4FALP4ZZipNH9byoD4m3bwaHhxavhwFLw1hKjZGxPYsKfD4RPCt7xNFKmboAgsXdv3rxd7wJMNweb43",
  "key40": "ttjes81awVx7MzxtkZ6HTSnsYeu6EczH5V3R9uP5JAnfnq1Hibv5JSLo1Qk62mRxpumbgsrM9AF436Gk5e1fMC4",
  "key41": "4PAYwJoCCVWgmY6xZSef6h2ttVa7gxfiq1V9P1YLdZiLRn88yhZ2QcUiq9qTfLxJGuXNCYQsYERSmGNdbzbydeKt",
  "key42": "3Pj6GHj92E7suDLVsf7U6XBdw63Je6SZyWQrzrzB7AFn27hXy8mG12PvaesdiwLMqsHMaDnemN6iuNxRhMJUyEEs",
  "key43": "3kQgDnPTCE5P7hDkphfLwtGKTDf8Ngywo18ZqfYtG1t9pGgB76SV9owp2pid16nw62jSuCjZuCiM65dPhbRYs9kX"
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
