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
    "24VRQweWhpgRAuSgXTg9BefdbfRn4oC74X61sstbARza2ZnFJhM4re7idc6bSktwL7Gsrgt8hQReDF8Y35peHYGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rBmTV975Po5kddV5ZhVeHckumEiwTQ2PbUKBPgwaRji7T4fw7NVVkJC7ve15woKNcPiJcQfP3F1PYhvbWsfchES",
  "key1": "4N7zSLmVuZvowJZ3wcAB7MfjeYntf9kB8ikixj1vKyGWCyBz1MkYuzXD63iREvKpag372sjdR61nVrkF8zvjWn8b",
  "key2": "48VRAsBinss2aaF6iGmNqtoZL24Cyc6PGz9jgCCPaYs9hGJ88S2ubUHQnGENWheAvMFfsJQGu4gZSQWfU8hdmdgb",
  "key3": "46LHT4R7sUWkESs3DXrcKkkE2zvYG12r7xhd5NfUbXrmhgMJabZDw7nXMF2afmdeeEgKUXf3XmR7LeyyUcgEhTbn",
  "key4": "5D2XVxq1Pfw9jxndMGvinqesUEJyPDJVQDqD4UMP4hUJJipctBHngrKB1RJQxyovKtjTbRGP6U4f1vpxTVQiwmbo",
  "key5": "835EHHSeAb4974JnC6tkxA1Z3pWJXF41ba5oBit3zJ4EQnXADsd3sjvnQfCkYQwuzUvjVS6MiwmV6hWekhppXAo",
  "key6": "2TUg5ETu515X289fezpVjDeUR268TnrEJmETEZYQmbw3Hbjoi5ntYZpE7orM4QWdE5GBY1x8b9oSSgvM2AGXkXfC",
  "key7": "2sqcHWVRVWAw8nVPtEEkpgPuH1NNiT6Chp59fuUXq3RHdvn4bJZa3c1Q392JGkDLAuv6zfHysYyuY4PZBW4HJGLc",
  "key8": "59u5i2eaajBSqPweLfjhFP3DKNvUWvGjdEGYgb7Q9kw6oxi9wTY1tzG73LYvpmyiYrQX6tchQVq7a6ZmTDuRMMiu",
  "key9": "1aEmypG7zpWmbA8gWdUxd3xfFLWnPYXLcTiwxY3qTVFQfp5cWJfKg21V9tCLusWRmqipeQPqQ75nSCafRg8ySyU",
  "key10": "47N65Xx4zaqVdVJHVsfhZv2PHdNF2E6opRHweZMEuVL7oyjBrByjRm1XCjVk8CmfquLsdSMx5PouwpjDigbhiftG",
  "key11": "58uGZqVyRRv6iqoDqEJjWbKwy5BQDfR7F4uCnSHRAe1PZdx2C2QyLzNQ7czxS9BvVKCMYxGtWkQuG7MsTKZ9poDv",
  "key12": "3iAGtdSt77rHfBaAMWyRRRao53kiVXrSTSTYMud8m1QqUhe2ipeko7SjFSDafwCyVJ14Urj8c7gUFLdELjPtnUEW",
  "key13": "5ocerFAMTesYjE4H714bHN7TiGKc4gsa5rjvqyio1De18AyWpxrLDzH3aZ7PkeLyWcDdguGvJqYbnRAtVVLT5fLp",
  "key14": "21CnMcadh53DKMvzqTYgCkom6J8eh4ar32vojREXgdcgBuijosssXUy5BH7rT9jzsxeyiKdwo7i2Ns1m8aaFrnxx",
  "key15": "4bfXG9nCnpumtU48LRiStzSfnvz73LbX8iCTTEEWbTPABZuUBmGHR1UVKpxo5qqYhgyPBYrssFfM99vh4XTGXBC",
  "key16": "4YikTZoAwBeWPMTNaYTrLr9LBpBCuoZ3KYKWqd3EaZt3ZdWh9FfURTXGDEqPvmxkAzcSYCrqwCu9w8rpuzvodZd5",
  "key17": "35fo8jsrPqzNsqyNcFWzqCAFCkrBoEiUW1ctHyByPC563MMhWkB7RYzZKqUUBDDxoSTRAsyBLsHVqjbsLbWmxiUp",
  "key18": "3zGZJrCH9hxUD6DzbKxVDDUcfiwhxHvTVaNqZQ8fGFnnmaWz1RTvt3EX5wvvfpeoy6E1jufULYWwsuNFCLTpM8V6",
  "key19": "3JHQsHyfkKw4aTDERqJ5vBHwGDZ6VhLhnzv4jAgHra3pVSMyMykKjeUdG3P6KyHMdYHtRM8xHh5vwnG9DwLwJUx9",
  "key20": "4LwQTFuNa97FbSJ6FGE9ywDKLCWmndZbEd5P38g6G11D8YpQj4afNKUAavBrRUi7xzDSj6Qp13c6jHNxvZuRDZrd",
  "key21": "SxXY4YUDdd7u9gGe1G8WPYSuaRx9nphReR8ggPzSexwXGJWDiDiJHJEohrvRJBEFXLYcfzx55sx3kGw8HCH2VvN",
  "key22": "2UvkjqNZZnsZTffUxMmz5VYgGAv191exrc3sVEzwgo2eVu6aUhpiC76453ZMQFJL2m5pm77PGro92wPt2WyM8DXg",
  "key23": "2NkU3haqmM5rtsa7hWCyxzGRnubLpz82ANAmdCj61nqs1fC2R4sUEYcvozkvXgh4JBLsib3H6pz81rKo6KWcGmtL",
  "key24": "4hYvPCmTtvxHNS5BFCVuAMHD12qi3cLZFFHtjbXYg6qG32KnW6yhtpSYa2BMp64hWcyFydjKLqoFH36zEZD6sFSb",
  "key25": "2ap9gsaDnDAZuiqbqnn3V2UL9S4KZz6gKJYeHBrfQFFF9jm3bqrcdx6UDURafLVMkhTWuwkGBheiav7Y2sti6Tn6",
  "key26": "5mnE3mmGtLKecaTjfeaEn4eyHn3WLcG2Nf92GaCXFEhfEiKS4bTrmnkfpiPbhktWF7eDCZhsLLQoq5Gv3xzr8uXi",
  "key27": "65YbrwUtvarRptFWCG2qtjmwTs2dVzkJeL2VWAqeSb1DxyEswhrJ7gePx7YS9pBmSeC1wEgHuVp4covDtvf1UnWS",
  "key28": "3ocwgLtFCd2uEngfJdFEwBHftCnG579YidDuHSDrpaJeP1GQgrXQoiSP9r1S2bQW3UkMWdMv4PtWY6vVE7ndg4CP",
  "key29": "4SsM2FZc9Ha8CT3YMkQEdVeZLeA1pnjNYmvaD9brPF8Nxo72HG78NGAVeATkqcFe9MxTd56YsGMrrXGGMLnHLaR8",
  "key30": "32QZ33zbN4HbN7xk1TDtiiZj4BPFAtn92CQ2hfsG79XcgYqqWmoRXc5MaBY9DNgWaYcpzFPWJ3x6mUDfuXTwBhhH",
  "key31": "D1gi1EXv8WXjkMjHYV7U2SvpJ8LMoBvpLEq5YUW9ekCJtgqPAhCuUHxQStbM2RUj3ABx4WRykqaa2YvC2oAf27v",
  "key32": "5SvKuFLnaCjNtwR2Kng1LhLn27udb8ZMMmkgiEaes3Q2mb5JSPWajQoeC5LRFTGWAPAB3eNvAfEfom9oyqZPrcZZ",
  "key33": "5VKJWx8DW8pcUjRiGhnR5CHm8SddHYvHhHLjvZshhDWsHw7dWiF3yk4a2BRaj3X8q19DKsi2JCcLuSbh7pWuomw6",
  "key34": "36asp6VLpfjsBWvrrk377pN2ePuQjHqDhAiLkDwKKwPhC6RY9DHkcWmG5aXvKg4Ks2Z6kyyCzT4xZ9vfXkNPakdD",
  "key35": "3hGKSy5NdLj493bX65Y3tPiXTiFNTT9uLpkR6bcRPGSf7Xe1pHzE5o8uu9oErDwEnMFYC4bgCoiTCbC8iobT4YhM",
  "key36": "2bn6CcUHFNpk3Jp5ymUvQw7WWdw4pftyyDCqgVJMAoDgEETeaLyAnTzEDG93xQbUWGTz9iaqCvh6b4vVsqfiShRv",
  "key37": "2KL4BGTHwiA2fmPpM5hQ3Z4JSQW6d1DSW2624mzh7tgHZsLx9txQjm9TucnTG2x8ggL7MUPLvyxfEdBL8ogDN4We",
  "key38": "wf92Hz7buBr3r1N3xEGjM3t5deMxDtaDWcv1sqXm2MotdbfKEuofaKieZjeSBSfPferJj91Dx2H9ubtPjVzcAJX",
  "key39": "2SA5BJAw2bCduineS494sYMYVLY1UTYETVNzs8woUBqnXRhsBVA857qhBAa8jGpcmv8gAcHsYLJZbzWnyv3nXZMP",
  "key40": "ScWKXnpHvGz3gS9NKwHyajgFngjF7GpbJd8RRwpKWbcGDd4qfs2bdREu75uhfzZw87UmDkEoHEBMpYpGeMHErcj"
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
