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
    "3vR2ttqxECAuGvK7gaUcGaXmcp7tdBEpYtiKjPy3BEQHYALHmGFYWNANShTfKEf4F7V5NZgiwdyWbm1qiCXDJTQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63KBiqHGAW1B3ye3Y11B7NgLr9KAh4unAGNPo9K6hbo7WB4GA7npEaQBH2KtsbCsgSifW9zjnFMQwQjLa4xDck3N",
  "key1": "3JGo3TquduXwBmzRLkPPVw4dM4hjyS3xmWhDCz5tpc5qL6GtuPgWcJ7UF825dEkMFUZUaxfrAaHWpcQD4qPBLu57",
  "key2": "4iiGcrQoN8Z3gt3RCsb2zkPKn5AziWEa91KpNXy1e1V2N83vNjJywEWBnxbWNskt6ybvBcJkKdjd9oNWQJ9vjitY",
  "key3": "zyeGG4H4SUHFKERCswiJXLkuDVmBL6QySAFDgZZ79f9iZ8jqtBB9PzT8qTTbWXP47k1dyVo1Qn8mzQ8eM2nsScp",
  "key4": "36p8WEP1vNz6UFSNDrhzB4n3DEF8gayrdme8E3SmA1yVceEJsz5D5DKRwEBoF7K2oxeXYeuUYMiuUxmPH6KgNA2V",
  "key5": "53y4j66VbxqkB4pw9VxjJ9D5bUP8GvedYsC7u1dKMJbkb3KCeE7QuWa2Br4ki6nj7df4oZBG52d7YWzuT1zjVCdC",
  "key6": "2ongkETyo46ETMbprFbxnW4BSeJMmWJ2HwKErj7F7pGksQTL699zH2H7AzNH3WkqjKaS5WTvndXwukJS4dhRaZZn",
  "key7": "5GmtmrJnHgUM9SRvhkrL1stGp71q9HfRkWHG7BoW1irdNjFZsF2sCJAQBSdXdhugmTsxZyVaVsgiXxPDiF9yiZNN",
  "key8": "4UKXnJqiuCyQwZFSd6tbDtzuC9xH5LTDtYnKjnHg8a9YhcUYC7omuVh7QGqyu7Ns1oy3fQPRD4SyViqaB38gEBQF",
  "key9": "4jjAPRnx2S7wEQ6C7Q6B7JUAc9CJ7abzWAAzd3hi65wHXDJLRaRWVEQZUXmDX72u6giRnwN2KAxbr1jKSYvoDWNr",
  "key10": "666Tyxj6D5F3MYhwMqpDt7JjsHH8rhqvja5a2NpwKdfiJkKEiGZQJRTNaR5Ke5Mq6pfaYNSmZxhK7oZ8j9d2na6R",
  "key11": "61dXLqPELsGdMZ9NaDGFBy881ZL3oTeXwRJkwBRhaifLeLsnMWo4puhF1mdaKvXY4M7NvdZrt2C5QkbfGRJwA5Qn",
  "key12": "3bGBzgKeYvt6GVSM62xNdw7DS7iCKjET2kHML58brzqCPLah5Wjm7e1KWHcbDEb946w354uts4pNditqHuYu6da",
  "key13": "fjaAGgC1BEBytWAPkRBEYmtWVJ2qcMmDXEdqGvL7rcbUEnGhvhcBCN378HA7txZsz6NqdQxaRQ9DGxhacBvbUYQ",
  "key14": "5d6YMXtGx6r8kW1twvgjDHcBwVBqio6UyUJ1dsyzNArv2KQHB5Z1gK3yqzSvo7NGBZCbgvEwUyjpXx3HsVFgUn8T",
  "key15": "4gv9gP1SSFcpDTPZJxcVXpTChUnSA2bai51N5eZ6Et3t62UjZXVkYbgS7VH37sxzdtntpQpgatgSjbwCf2oa6idx",
  "key16": "ij6rJ3ESXdoMgxwdRscUZmQF4DYvGwjqUsh8hqHomiBFqhsVmKYNdAyQA2enP1VWN5ymxWgdrLyESPebnNxPCfG",
  "key17": "3YZznsHaLjxFX461pU8MSsBmyMQvqFG171sy62jy9G82mx3J8qM7MLsmagvNdgXQ7GAp1fR7JMbsHmjidxgg3otd",
  "key18": "2BGX4MLugy9maQHkasXPDw7b81dmWXkawBZFz7VfFq5G2ddcZnj6Z7B2fhR99JUGLRAUnfB9Kr2BLPHsEFKTJNk3",
  "key19": "mbDEejxugcKefoWDqsgwpUPafVcdUMQii2gENn8DMu4vDyyHVBTEyhx71Nfzd6uX8HaLErhYmWpoVozYraU3hYa",
  "key20": "48FMJkinesEYeFEPa6bwSQZjUHX7gDPcHrhgoREuyF8vGyHc6kGu8knTND63WDbEbVmZyLiDMCEBasZbgpt9i6qv",
  "key21": "5sTdyNjQyGbGvvySu7CoLNU9tLpvDUcA5U3Kq7r9QkikWczR7zZDB1Lpjv82dZqpTrcqd2yd8mFx8zovTrRB9tBk",
  "key22": "2wq1U6N7zV2udYUBbrE64FrH3uED53UrMx1ChRrtZRuwqyLeosxpLJEhvyxaGNqSZZpSPTkxavsMqBFS5rcUrQid",
  "key23": "3CWbtEp9wk6Mh3XJcyytWCtvkSyia2486efvm7RTUp625RCCaMnmPwdi99BJuyKRiZJCZ7Th65Y9tkDna5PM8h4G",
  "key24": "24LTn3419WeywxmZWLKDXrNSgwh8vvYJw8fguw4J5aoaEww96VL7nzyFwcXmkjVSWck1eFGagtiC4CuVHZ151eT5",
  "key25": "2UopT96AXSu5HDH8aKt93xigRbfn1zc4xjqgaL16cQxeJuvDwozN8yf56Xp85DQ9uSuWj3X145GP3TU15MrRbBik",
  "key26": "59WVSQySLZY2WPU12he62HpA6aitmDGqKQ3QqVuKZeVCUHw8yGpZG5r6SxZbKoqWvXUtZFC9QXhMMKJZR6CaLog2",
  "key27": "5ACMJMskLj6A6Y216mXwbERpZFBGkYrRgkRuK4BTs3swoqv6yMcbj6PmEzq6Yatf2tonHn1qLhTGvz2iLi2HrgEW",
  "key28": "36uZ7KwPAhMYWxcHWEtaLDaLkLKzAB4TpAPax9EiDfLp4mDyLAEmKeytpWPAYXfKPvweCkJPtkcsYJ7aXZ75n9am",
  "key29": "3rKnPii1AGS5rf2HDCcg6rWdp33MMgd66bL66iKxgf19BVePBxqB5yhJFNQogNw8QzJ2wN75FEbWArFitCcwzQsJ",
  "key30": "2QfZHPiUmtzAWarvYWmSifUMvhqWqbfrbsKG25v6jdPFTVtdWbq8MQhs5XF3SKWKRYz9qPKtcuTrCBftfEowiCEY",
  "key31": "4PZAdLs5sMARNUSiDX8vkA2XVS6CbfdPB9QAKAE9ed3vM9ekaEKe6rp6diDjoAkG73uN1EVpDCRU2SGPFAbUkpxs",
  "key32": "2TAAeMW6ppBDGth41ZvDSXN7ozZSxDqbAovK4SgeYUv769mzs4mjNUfMTs3NUWXG4nmPRKFtQbDJnNvVH9rhBUX9",
  "key33": "4Wxj5apWwnFPe1wuh8LDyKksq6NbVbXRvCr82fpPmhvCbdQSUvDzJhvhVPfpp2Zux4qSpUnGUAxUaonUvigab9Za",
  "key34": "28o8vdNTP2PB7E2sd7zPtVqxb1oizu9ABuHh8YnLiRXKvbphYGAUfzC1DVwCeo1QMv9WBWCCvSDF5pU3ked1f9rg",
  "key35": "3gWDwiakBdMzKWSvwPQUPwTEuqwnXzx8fFjfCBXysjNBeHCGv6Tsh6WoRy5uMdBrLSMU3zuBfpg8NmFtag8H9KmU",
  "key36": "2EijnU3GihLsm4vnHxYYuvt2MaAqxBrig4qSkX39aewH7Q5ybi5EWZ5nFo11mU81Dnc1ZFb9cY4sWtJn2iUMDerG",
  "key37": "4WGMVCAysX8VmAUuWyssn6s32W8t1EoGk4m9xn5C77s4dxLsWgqkYTviZQHbtvejXgFvibKahAXzXzcYVLfAdXZq",
  "key38": "3Mayu7reHEaijsPq4cpSFjV1xkabVxz2oeLJZwn5xeJbF3pFmhq3mHNdTVrAJgBuTJ2SSna1MwQvxBKL6T2NtuoY",
  "key39": "8UegKDmGbJaraSmhjRBBFaZnXus8Tj3URMfR8AMXocEfzrW42oFhFeXqPgLmQ9eHehZoB3di67FnpbJZ4wpy5dU",
  "key40": "5NxVaabmhbLabjgryq9bSJfggKYdXcAHyUUBDBA6cWT9s4nKC4vkuaDicFjtsJCpwftxxQwgdAjfg9AekvVuNt1e",
  "key41": "Q6FGRQKUkCQ5GX8sGZ9eFTRyb1xSezrVwJPRF3xKBqc3nyaRZEfQDgmjkE7CVDvYgZj5yaApUE4X4utFCYUc3ky",
  "key42": "51NsqdCMD6CGuMaSATU4wQBNWcqY5gufQd57xiefwihRmcUu8d4HDUCt2rzW3DwzUSYHwuoM2BWaqJr73LuBCcye",
  "key43": "k1YjmFUWpeT9BaErE5tjqCUAhSE27Cauy8WyNiqDxwhuueVvSSEQKGiV2osumxbyg8EyvwM6J3XoSxWiedejZzz",
  "key44": "3bsPdSz9VfSjo3kTsJyYu6o5aNErbSHofGEyskUa3XY8UrjCfAwDsAKqFpdzXbeodN9VosE66u9DA7gyUNFB3urz",
  "key45": "4a65R1ntScj4B7j3LteKdeYzCq2jNb7FnF3bMoT86fx6ti7p2pnNPTBRzJkrRQxd2BagQTX4oXJkpg1z6t9vqMNY",
  "key46": "2JvVXHytXeCLkpcKkGarPK2unWTzTxKFzygyieSKrTKJmKMr9DZiNnJcunFTmdcvmDRA1MYDdK4pMRm5TbdwDsjf",
  "key47": "5kLX4arqaEZ8hipCCikFjGh7toszu2dmaDr98bDLagYQCoCt15VUsBSaxgPypQUUMdMUmGEvMsMXirpKxa1ARvvV",
  "key48": "9aFnBMs6kLksdGiPTiNtbqWgdkopeA9tJVMzkcscUmcux63gHiJajvqgqPQWNksRn3qXU27s9mdTi67Bh9ANgqt"
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
