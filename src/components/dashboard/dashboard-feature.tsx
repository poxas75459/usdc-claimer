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
    "4LrC8Gfm2JEqxek9hwiDtzBkDEpEwvKhGmAGmLfevvTqLa8M1nucCvuCX348EXBTAbsqiqri8MFhKtpeXxjMBn9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r1Q4jpnuegchsF2bD3GUUbfSC9pL59YvLc54CJaCjeBFrBkEEqR5QQ73QWWgb4A8mbJYdSNUvHGFhHYyKP1GviR",
  "key1": "4S2P2PzxiDG8e1yBigTq8Njv9ovWSuj94z5pAMmKPRKn9DEnJGZ6QkzuvJmioALVHYuo9FkRi9pH3DTWcqZ82W2n",
  "key2": "5TH1zeKNnyTtoa4keTnNXAYaLN8u1FZC57n3zf6o13SUFH8kc3ov3nr5anWecxLQXe351DNaJTgLfUuLiLmJJ3Kw",
  "key3": "4fgjXcjxRNqn73VhHkrPQGuwmtEV9eVp6kf3F4wbeQYxiXG6ys5Vwo7SLeM2hPf35zagxyVyJiRJdk9RHCjPQcdE",
  "key4": "RHAHVx933FFhG71V8ey8bbBTt8UjgL1aLRVioGgZVegxvhWP1jMrdHpk72AntYnkeARAdiuq1XegPKgqFUVWRPc",
  "key5": "3VwBj3hBtpZZ5MtGQHswVYMQfQ86swSDy7AsQbg9bCeUh768DzsCBQjtCFfNTCSzbYpu9HgYRWUzv2DoB8vVy89J",
  "key6": "sVG8ewx5WSYpxtrxKNyx8U1wSMUB4agFqiBXeh9JAveLpe9SXz4N2pJanXLzK29qKTJiXKDvGhGdk556R9tmHbe",
  "key7": "6wCivrmr38APvYxmKS78hvgnYWvXYqiWzaeGmujhErt5iFRsEfox5FukYrsXw1yRgr8eZniqDsZ4QH4Ks78wrHE",
  "key8": "39oEg2GwyXkusJaSGjPt7VyHjkEfY4m7fme3u3d83ejTkp1zHmUGgXsLJ2cdwD3b2djatM8zzRnY2kN354Uj4Aag",
  "key9": "5GRZioZnmPkajiYHQd9c9bNQ47HfPZeBjgNSBqd9GiRBZYuxujXSMtJys8oegtWi9vY3b3E3ZddeD7Yp3Cqkm2T9",
  "key10": "FKXucwhhPgHPVMcKVpbyuDPaQzEDLBVaGHoH1xsk7u4yWEgCxrQ1CfJRSeMSexPwNnTe2c5jcWxGjfyhjxykdzX",
  "key11": "3X94bcydT3r81LivXjpQyK9Hy2EZeAVHLYpCNZw8nJUuVfiriDVp9n8SejjyCzkNUm21DP97CJVZAxEgUfyMqa2n",
  "key12": "4nsXmwpio9JS9RAp32sjsMUtyZZ2tgCPrCEerNJFAjrHCvfX99o9X5mvtsT7yytnx6art5gr1UaFoix3y7uUYgeq",
  "key13": "29dRGAYrShfTdyTRhQqsc3WvPXsnBeVDXwjJBwjxe6GekuATNUPPEcTJy2ZLHcTHLxkgVkBXwHo2SXR9qpzrh2p2",
  "key14": "2X3o2X3wixeAEnXV66FK9JaBGTWeUD6FBJie4g1HnBcDJBUbjgYyL9TtN5F7fBM5n1x56X1jwHyBFrx7qtRKe2BR",
  "key15": "5GK72fpvGoWDoiXKSTZWoLxYD8HCVcLgiSvrwfwFgCje3UZ5Ctx6mLXTciQL6uZATzFyGZX4YgABuSA5TpoeW9Rf",
  "key16": "5XC24E1mAHGcyeKw7DdJtdPKppQgGn774KBEJfcrEGnBpXNz2JseG3rdifDFZBHDt7hdwtd5bt8e4gR1twdyGdeq",
  "key17": "4n4SSPegZS9CD5veLVMRknnyqZmRbXjPDQyQP9wmsqZAbJ8v4LPFfq94bScHjyH8rSYTcRoGEmv1iX6PykxcnM5G",
  "key18": "3XpJ6G7VG753TFiJuSZMF9aD8u97iFvyQq5ixxvMmdEd4RF1MGeWGbJgDzhUAMYUDEWnr5SAz3LbKerK8XzFL1cx",
  "key19": "2EvksPW8KFWLGoDPKjaGJKwwMjEuFw9LUhxj15ziRWKGbMnXzXQsf8wDPi4bRkeKuyZWgpQtj581Lp91XpoZUGyR",
  "key20": "5WZrik5TGRFAGo914ymaxFEh2tNvaYZB4vKby3iurVELkRh69JMx4KfXDZVhEBywDcUwZn1PeZjGcPExZSSZrunN",
  "key21": "3bcYpTz9RMHYeS4PqwJ6ZibmtrjR2erHkBJz2Ubxw8qxFYrPJFE7N5UusCpfB3b7hSYE6xevgSvjY55sFkLV7r47",
  "key22": "2sRDrGJmNLGupCSGysBVtpxtHLtgXFYyd3k8Nqrj6QALm8RsunAseZ6Kzi9bgZANTHmNZNwW7nXxUiaNubY3mcMT",
  "key23": "3ec9WikbyH3W72HGJTVhRBjm9XMQAnswBfAKFk9Gm4ubQyysVwY53iQQXmmRJxP666q3GUtnyLzQa1aXzSn3sHYr",
  "key24": "3GJJ29mheZ5mjHG4w7Xk2L4NL5VcXtvSFv366pu18p2Pwa4upUsatmzP15F7T8Ag93dHTY3DQ1M5Zsp7vFV5UHqh",
  "key25": "LNiPPuRHELnMwVqnUeEXFLh9jGaL1d5272wscEHVo3PW3BAjkBkhVwZ47DTVvEnHyWoB1g1r1ZMJfmA1pwpmGDg",
  "key26": "4QrUiiGtmxAfYSaexP1uCJayZSjfXNJ3AGc54UwmDSfd9LvaR9RZ3sqeJ7ymNYQTHVMZfwJTVn8dLHhzQ9vMt8wc",
  "key27": "bUNj7NLAxtZMGuJAZQottp1yJydV13hY9c966sXWnjJGXKfLAgJAtKKrfVsyd9CR8KoFM7ELe5wFjq4zeNm6xhF",
  "key28": "432RJNJLeWwUjyYjf1vkorzchribjoNsExiJToTfW9i6S8g3U2mzzWZhRSpt1XjKzVQ8KDG8bQ8JM3PNASXrr5U6",
  "key29": "3y2YKiqVMAFwVyvfVEzVJBq5fxrLxmEG8QYwg1r7bCAuGauBzAqn6GAvUjFzkw7CKRhK7XNLTAUCsTUykC8hTJ2g",
  "key30": "26DDtZv97MUbc5f9f2q5HdXJ6qXqJiS4LZfZjjwi7PynKWRkVaxJQsyfPgcz9qCh9HxKyCzEfJpSBvkhbNNWb6P9",
  "key31": "2RyvD7BrUoiFkqurvEpLRq8Df3KbxvP73tncjNdrPV3zAz8Xq86pMoFcihiJUsbLvyLq5TYSyPF1KjPoFmDy7rXg",
  "key32": "5S8ixysqPdEtD83HhP7TM1eKjF432YtyMeZnHRDWio2aUWwtnkHt3xjSEUgZBmuKB6xRcfTFKm6jqgyCjD9hCNtp",
  "key33": "YowjDCa6PbHUS9cUhbjRqW8AVMcsU4ybFxruWfSEcwNPS1mE5aBiqN3z3LSGcnsjEH4HmNga5dMap64KGuFXCsi",
  "key34": "L2hCZEWtyCwWrmoVnntNU8JeVE3KCPVYYA6ToQd8iTx9w2JYafCCkTQSbSyT4eU6USy4hje6SFLRxHTzHdpejwv",
  "key35": "445McjzsmHfo3EjmFhN1AzLLjCcXLCHf6KHey7y3zmsjJenoQ2h9SQfvDbXBE9vzSaUvEwPan1WMMUNaemsZmaoQ",
  "key36": "1DgbCmQep8EQbJ9hvoaqK4nZPAWgbZum4mTFoz2MW8URxWjjiiwBEWwVUoHyN6D8PuCtCpD57VCi5EFd6pG5TaQ",
  "key37": "3iDH1RAbWZuM5xNo6fVAfs5BpvCfZziGbLXKxfU3DPShXqB7VPverEVpc29mMPPtmTVw5y8DYbSu6Mr88xkyoMPj",
  "key38": "26UJCrUHpaRaYU3zqfV2LLFhwzbfmVCmTQoznHfed3fo8CAa7XuUrv6veHdsFoC8odm9uPSjZMGhVtxSX17rc3P5",
  "key39": "5hiz2vdPgtgNighecSc497jN4rWRg7TJ8rPSVp1NhCJ3RKNmVAcuduA129r8ACjr9xs5VcisuAHuVVDP31SzSfC9",
  "key40": "5t7t5wodPkqizwyCkam7Jo6QjaEXaz1pGAsw3jnrQPRCeezJJphVD2F8BVSzzm3Gfku3BXR2R31BNdr5R2MuWfFG",
  "key41": "4JCp9YB69eekFiXq2qsdksTPEVGa72SwLjqyfViuxiMAXC51eiQNxmhw5DSLpcf3AyeALm2wUhaL88aab5ekTx7w"
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
