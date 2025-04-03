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
    "32k8RoSZBmLyzu8HnEuVaRSnpN9DghGELwAjdz5fC9J9uGxg6g3k6TX5ogupWxAg46QSMq15YLE3d8KR6SMTzSnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HvMygcnz7kxfaUDYQaBVkcSP2L8X3PZHSYHM6T1j9x3YDVLFmTpWq811NdeV7udhiSXF61uZgMf6Vn1dTyMBw3a",
  "key1": "bWqJQYXoh6nBycbuuTSHaLexnMgjcsegVvtxsWxgA4CLr8b23HiCY8TDb7GiVQw44PCppjPXcpVDn3prBV37GUv",
  "key2": "3x6mbqQmMcvXwX6T47Cm7DCYXswh5emC88iGnMaU7EigrswV5yg2gLmi7YU2EraUoccu8bKH871JQZgXVVoy7w7J",
  "key3": "M5EE9sjEPnwjX6etpB3i4mgFxDb24kvRdxWXuTkEpRp5vL9ERq6WZYRKoeeZ7vdSVgges8dJAQ1fAQmN5BycWiK",
  "key4": "28aae453n4ZoC2szBgDQvkhk522qHFadrSTtAjL3AXUe5636SFNDYivSAx8CJt1rscTZYev3DrHEjamPUG8K5oor",
  "key5": "3LdEke6MECf9ZDotKaYfH9ZKgNZTnFXLEqeUqya78N2Rc4xLyt2fe92zoSW1X6SXSZui4F4be3Z1gXLaRX6ZFUsm",
  "key6": "24fsCCbd9p9xJhxdrgA6LfQ1GZwG4xCJ7cNgKLoFHEtuXZg6gUN7viy3dDcD44BnuCVaRJaRosymkPU5devdYZ7K",
  "key7": "4cgr1GWJcATpWQ8jkgArz4t81j7y2SCBjvWTV2GKb3U9Y3ZkkHpRAiYjmd8TYkgN4ktShNRncoKk5dKBxSDe3Xts",
  "key8": "2HAqiLc1wNfu29KMrNEEyGsUHENz2WjKpmarWCJp6YN2jr8iPWm7NBviqHzWU3zrxXf1WdctZsxLsRoDNcZWkyUP",
  "key9": "218ojCSSLMF9vKk4oJohfJSo7oyz9S8LBVWH5NdvXPD2sjTnQhc4VkfdLxQi5g1Hf1E8GKAy1Xkg7Vr8zk6BtMT4",
  "key10": "awFmrowptgyUxGBp9KnEA9zYh7QPqDoh9bXDtkMqqitzQEm1Cc8DQgn4CTWdewMKyb1CvHGGDaJtrNQax9ro4Rj",
  "key11": "2LxuaF3Q13LCrA2gKy2cicDj5WiCZKxGzibkhTHxjzUQhMdVmvtg86XpRGiy2d4W9iLYc4mE8sP4AomoG2fZB3j4",
  "key12": "63bNX1uwwdskMuz7ZgdFkycH5XhSSRx1N8drybMS8nSBseT5bFvJ6RcsNuDYF31K8m8USwen7S3jDAwkxshqnFrW",
  "key13": "58GtmFBejN6v2pjyXgvMJ3EwXkeNKiz53g87sPTQx5ZHBCkh4PwWnuxbo9Ggoa6vdjUEjkWJHHuxeptPAk2p78j2",
  "key14": "4EAQ6Hw7YNMfc1mAUmXFVwumfGxCpBtp5sqCM6dicjWBkKEFqSDW5e1EbqN4LW2qH6MAB12vmpNJBdBKy2WKYXHq",
  "key15": "2SzHnBddRMsbMWczYjrwTuEuxGhYV6eiAXk1UJ8x9iadK7NQLpQASh54BaWUPEy8A7NAVwjB1cBstRAvKrBniz96",
  "key16": "CkvcR7BsqXfESmJviL18H4edDT9951fQmES972rUmQPB1WDyveqT1MEcTSp4tjRieEUebebcp92sLfMAp3EPtGt",
  "key17": "29NpDxyTyigT7wT8H1YjK86YcCWCepGjwq6qia5uy5eFHPRLbqvKoXc1kpPd67To83Bc9S798JGhCcJGNt6cS26U",
  "key18": "39EomxrEaoLBJCFe35JwvJfnQzJV1N4qWF7YzmB9fbGxxhVY31Weues2EBbZRr8m37RtLckrH6MYkpMNWxEjcLRa",
  "key19": "2vDnXc9HngyxZVKT4gT4uvVrXY1UkyvkPrmWSkBS5JjQnMM8gLnsGUZzoZZwfAQExL5NmdsXctL3etzLRPgU7kAp",
  "key20": "4kePUt9GZXaEYbH1kK8XgUXVvtrNuGGtsWhhJGcBwgxn9XUygppc1xVGAWqWKQwRmW13da6bf3zF9CgYGrskmyQw",
  "key21": "51HRBix1rkH9dmhgNEJXFSfYCibaxtbsJy1KascAN8HHxvbybNUYTkwDAZZHJV7HjUHLF2Sxry6pPy4cJEex2Mxe",
  "key22": "33treYc2GW9cYKp34474RXyJfepTR5wxkpCq9X7RaKxoyjKo3Rap5Q81SvJeuWsM6B8uZ8XztaC4tSiKqAC7FLpP",
  "key23": "e4BXMaurX1anQTwvXTRSxbHDb26N3CyrADXhmM1re8VaSQSv5mBJKVB4PSuAF1EGYSzCX77kSAgP4bcQYw7aWYR",
  "key24": "3Ytxfwy8zCTtA1EthKLUybTJK79WKzjMciGeyQT3KpsyCQk8jru8DSwSwUasfPK6eMNTatEJonqxRsuhkvRuFHZ4",
  "key25": "5Txmbv4NNyQ31sPjPB8fXaWpm1JCBLaRkYvvFtgcduxiJmjHDgVxVmAzyRMk9TxmUuetWyEbe8XTMtUrHq8LqAbS",
  "key26": "4aBCn7x27BLmT5GYNdnGAZ3UgqvgzzFTfynQKJfHmziQPdtbbXE6tdZMJmnEAxoXLc1Vn6HCdWT6Vz6aQgrzK8Sb",
  "key27": "5eCSTzGw26CaUBXTf3KufhbrWx4oZBDbXRkE2yB18cigvtdhA4i9x8L6GGPQizYBixoQYSeWX9PcUv1fZ4aJN7u",
  "key28": "56gixaYBuB3wwZGQca1MiSnjFeP7PFGGC9JVHC9noSps1Yu66kQVy29sNwRA1M7GTLCBJwCDPCeHzTgKxr7vQAFA",
  "key29": "3A6bPvP7JGvtvGPwxrJatcNQH3jv9Wf2a994GTah4Go7tehD3BdRk743Fu4367cYFDgc94SvpqPeCWDSwFtxreeU",
  "key30": "3Wxdz5FTyNqmM2AcQ7nMhdDV51iFEMqvRq27nVPm1mZEvuhDx6ZsPmRQoDKcggbPhd6PJmMDGEusLxajWSa1qTAT",
  "key31": "2cBCJRfgwtJ4qtNJEmPvimxwcUyNMaJ38jtEJpyzCHMk5Wqnp2aCHRQ7SpTNFPo3VH9r5ip2YpsH6JcH2NN2LJfy",
  "key32": "4hbf44y5nX59NponeDxPaVke2gxVfUtD73Q288GeEvZTw4JP7swxgEH8UYp51BsSWZx7Z8HsC5R5rWJujPwR1Xy2",
  "key33": "46dxr9Kg6sS7G8PXUPaGazLCA1sFJ87skpC4twBkuZ9cVje3zzpDZ45PTs8E858GVWvksXSAyPRHmLmXWRU85xh1",
  "key34": "2P6XGbFHv78JhMujsWAvoZvNPuJZCPPRAEpoT3t5AMREuZzFjEK8LiytUs1p4Euph6JiG2GnXR8FAW16ZxH673V7",
  "key35": "2SkfWCiNjy5yAx5K1Rx3Qj4U1xxB6NTMGN652Qs66TVaM2Q3q4vdau3ZTuPit71TfGPbTUxTSnKZsq2MszBY5kUX",
  "key36": "4VJ2DAJuKLbXCDEFdX7i4eyDTgYRZiEzs4YzkrDboeM9CTJGtmK4njaQA7FAhaKJ2emMbSiKHAt4YNf5x4xsZPBD",
  "key37": "2SRMubxX9pRmUtJicfUqvdw9U3KdN4E76j3wX71VVHM8fjM6Uzwc2ENfbbvircUkE6TGzEskUZuCaMWKERi7QqCB",
  "key38": "5kiu3RVZXnojED8tBFxKj8CCQ19Q3o29qPTr44JDAzhv51VzdWBzyfSfa3BdSuPWNVc67Q85KJb9r9inueUVivvq",
  "key39": "4q8TjNoGG6ot1kyRPPxQjj7NEorY4vFvRzyjoR2rHyYHmb5SCwz8NR7wstmrMDgRFTRUNHcjk7eRDsRdcQUnCmyD",
  "key40": "3Z7nBEAaseKCDw6gMozhZGBqn2LnrdaAgmsVkGsfbvoqyszjFWHZfyDpWwTYGNW8mtLquN8W9KucrP2uQqxwaczr",
  "key41": "2QTf8LBKjenWKC6DUJvUqDQmd8muZkeWqyDRFLKbWmh54NjTr5G1XRcTNgmWSC3CXKbw22kxmANsAEPHHVVRFBVN",
  "key42": "2EmtqyXPu7F4wan9v2PG2SsFdDJgb3Gs9dUrgLxM9h3kdTihbb61ZNVpguo6BtonFNoTwD4vpme7VVpU5QQi9QJ9",
  "key43": "5G1xxjiHh9XeJvL4gyJD9etg9isuhw2KWfeepWAXhHBz4ntH96Z41jTT3sWsTpGfKdcBoHnfMGYgM1musfJKQMpc",
  "key44": "3ux2yEsYTE8yGQi1p3hLeGEM5XcuP32Z2T4W7YFqTaCGfjZANJ8pmaFZwBLx9ddEF175PF71dSx9SqVmGM9BSyJ6",
  "key45": "3EsihaP28doF6R5RVV6mVPGqdJQNsjM4KXdNMhrkcuwNgv6mfMtKC3xdUKKDKwvRpVXKiU3C2H7PKEVukWAkPyVC",
  "key46": "4pcuG5DpjHrVghkV6yRhRzEd2fh1r1fRH7CQFv6CoqX6buWpHoEQ7ebtiPvge8KRyHhYKEDUPVTBmvTo5CuvR5c2",
  "key47": "5p4TjJSEVmEYDyvczdrqNeJec4cNoYW4jXdq2qauBdMxqU6tqLHUZvJQjpVAfHHEg5x66vmz4tqwRr9pTRp9iLgk",
  "key48": "4tisGFeVfVq3Kh3vG5snRX6yUTz2FjTY2zi5wedH5BoBndUegPPQ5vUJ5NhEKwn93ehC55Rqp6YJCiyrhCwfmoz1",
  "key49": "3KPYHL55CUeRcmJBVWy71Mmsr9A5BkiKMP7b22wxd9oKmwR9iBTrB2MAUi4qFAdkXZafHp6msJf6tVSKKYn9xzV8"
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
