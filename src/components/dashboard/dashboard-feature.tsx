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
    "L9xrS15gLLg2hCHUJyRK17fm1jpSpCbqfhXHnBhFqqiN19DVKcehgFcQX6t9wJVnkG5zEN6Lj3Ma8AqpsNs3btd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KbsfJZc4HpF7wfAQkS8Lix3J7oec3cGkqsBLefWejA5ZB3TXki4d1FqusTTeVk4CgA9cdPJsjiN4vqY7WoVKJfw",
  "key1": "ppZKeqi96YVJgvS7Msmq4rieyxHieKMMWBB3CLeYXhisYyTAstgTikXz32uCtweJVvz5hs4nfBcP5xN7NZLrmTj",
  "key2": "PQZepKPHdWCojwnJ5Ks5gTBL3Rm7tssT7K3eHZhayUw7P4SVdPDbJ1ECBao79z4mPBqNwo4e6CMaxEtPChfBhwu",
  "key3": "5GZzuwmKuiJGKDZLkAPBB699p7mobSmjcvFftQZJuPipvZqzxqB8mu2t7i8gHn91smiWGw64oRhAxF8iwjwxcrDq",
  "key4": "2TaeCGQBzv5FbkzSbUMdR6MjdnPFxgdvp6eY8DS4bVZQtpFqVfKrbvs8cT7L2bNFDbhiyHAdWNJMcK7DBZqBe2s8",
  "key5": "4sehQzA7aniBHY9XvcdahAbNbAp6oVd7N1kr2qZY5GUbhCnFgN4PcG3nCcmFyqFmET9soi5i218BcHR3tK8Lxozd",
  "key6": "5R2CcKpegxJiRzLa7HVtxwHHEaxskKgt9Y8krYjc682btuH8cA9mBuFzebUNvpGoX95autGFCFzyLPizS76CE9ix",
  "key7": "wbftSEFjxDnoTABUyH3nfHjm2Ct8gJRTmyCutNoQWjod7qb6v8yG5suDqk82Brnj9DYtGBPXfhX8pdPmwRpVKjV",
  "key8": "54nG3Y5i26R2VZRJ8ygjZ4RfGyUbyyqUPEvmsy6194z5z3pwMdkHFuY75kPUfzhVt7bizosQiSKV79jxpRrm7AQ",
  "key9": "2tc4NFMeC8ckE6SripECX2taYR2SrVPrf7WVo6cDX2nrqTc6FQ1scHBQVFB8NWfgPxt6rbCJGpaTGpkn2j5enBfE",
  "key10": "2vmM2voj5yg67hjjEZiJkRdvqydxUtMYrc6RJBPmuxBZNaC56n427Q3eb65Mj6QmpotPECEu2giq2MFiuNeYVQrn",
  "key11": "t7rrM3uAwaepUVZ16AXszHDHr3ivw6XXgPSZnX8Fyru8fDZ74boUkxT6dZhUQLP7XYbrF638SXdWtkAM5V8vYC3",
  "key12": "3Yyc2dvpgLPzLUvqQtizzAHSvs6Pc72eH7b6ape3LaKEe1Q6AVB4WPbcwAwEJUhJNwawnZ5UKeWrmoDvkxKRp9Yj",
  "key13": "4UB9DDDsDPxUovXFJJ3FrawwVwKh7dGgA3cNPndf3DaE5HCRqDruUp4BtdDeNLkFXY9cdwnD77oVDaa88xnbmi2S",
  "key14": "2wJm5yfr69pjiCNEeuSaGkwDpdMWEvixSjcuADmn2T5ZiCH6zN9eoLDSHA2Eq7RhHLud9Ch146NnJDkMDsWiuu7r",
  "key15": "5aoqxyWZj6SnCZHYKDmq1vboLFjMXCfPFCmbgdQXtaadiDjqenzsUgr3U3WVKUnn4e2P3TR1K4U76SgXyAp4KuYa",
  "key16": "31UB3SXSgMFN9d74MNUxbpJQ19RiArSQWFRUmP1ahL2szDMaR9Ma1ApCHjTBwLcqhRQW99eVki1XMKwnTe6MkPtB",
  "key17": "WFGg4HDotTyS8WybtFiZkgbW17WpCQC3aUroz1Qpynous4XgoJrPCxwZNdc35UyQSs52WNLd6tCVMnGEHQVK3m8",
  "key18": "5NomUy9seQoRodpokbuboD5bCzyHzcX5MnQNHD9hh2D7iAVGr4aEdRow2e4hKFfzH1qyvhsGhtHU9GUwZG7GoijZ",
  "key19": "4ELE7nPUeTTFeyZyrM74ibx8zLZHCFRi4ALF2smN32PtyvwBz2sc5jDJm8p4pUyvtKJe9w2PZLXHvUhFoV7dZWyM",
  "key20": "4NxoL4TcgaMhgGbMaf1aWcaEFkcq7CDi98aaPrTpAL5yPyjb6kbKy6ocQtVpEemx8SdcyoD6FmiigcsZa7hLdayf",
  "key21": "3b6LR2o6PbXhW3dNT78BipxjbMtJF8s4mje7WBaFVg63fznHGmHpnWEbS59zbpjYbiCDKtz9PK3gFwB3i8TAUB1M",
  "key22": "5Euq9NHkGHXkaYVTtwqG1LtL2UEHXKZtEfUc549A8ocMMM6cgYfrzbz6NE2goSYByejVQbNBcLvGHMTNKQNKb25e",
  "key23": "5zkWoPTusnacrPJsscVkHVKieWxSF1UA7HooXwZcC3o8mPy8soruUdctFxA4cLGZs3HdhTXmSSUPrC7S2pD3qTzt",
  "key24": "Ks8L6XgDZLqyXbGqjHU1LXixMxtuek64LUBgFAH4ZaUqdWZimGdityeCXRphRjRPxDzhCDjPtxzTDQf479J5HEa",
  "key25": "3rnPB7twxYNKedBkp3rQNuvztq1LkSr6vNcbA2TrfnSRak7vG3a8SHY25EZ2E8tPiRnEZGGBbcQNntQWz82yChVQ",
  "key26": "52czbhhzxjWu7JPuZegbySZwxCYcaMQULuGMoBDs7kUzknQYMLV2QNY7JL4BfbTJHnst1Sct2Q3SJRo46WUgqmPf",
  "key27": "57uy1kiVvBJENgUE8nSJtXNCkhWiArwZydERsGRJSz5RHydyvwtmD9rH3T4o67rFukJJQS4ASTSSrvYntEQnaUGw",
  "key28": "3LQuNKcJf6CzGJLjxeyqcr9mfMerk9wRm4cmYxWFneYowX3iwtjpdoZJLbSKMZ4nCS6fBRyeW87fitgVwcfFELsd",
  "key29": "CgL7xyKADJq98DyVffFuy1fiW81NKWmMXRCXofATmt7M3m6KGBUMXpsG8PSZK4esWPquBcZA3hniuHKurF58kY1",
  "key30": "3WnkdCEzD6ZJDVLcKFTpLWHCCaCUPR3RrXdV3nP69Zd4X8Shen7LrwerfQ6WuUsyMP5kqzpxhyr1EebLLtrYpJav",
  "key31": "UpuGoBHmTgsfCXnj4V77irs1948gwoAFYjsR6Z9Vk8zjrSRrn9nHaCCujN1KnvQ31hGVLnxuSiJxXZQzjqaa1th",
  "key32": "5v4RYSDj9hpmHQXrot1AvhDTMeLum71W8VdrYPySCwyXpuWYg5nssbwaWphG1H7myJ3uCjoGW6GK2bn72YFGMCCL",
  "key33": "4mwLWpyzS6UmKUwJQz8G2sJp6GVRMWtakkCKaF4mxi5LmqJEmMuywPgMzxUdHutgdVg4jAcxvj6mX8bcEp9LpUB1",
  "key34": "2bnGdAWBkefsRe1vnZ2HneHnHT6DMRppsTkYD3tx8WyACaazxHU4GQABjK9gm7gnEN6mGKk5ectVNZG6b87SiCnX",
  "key35": "3KmfQRvpRhPDqMccN3NiSv9JEauFRxcyJWPepruUDzmHcHvFPh2JJVB3nDFSFEEMcDvS5qRXhoFE7keW8KfU959a",
  "key36": "gZGecANKSLbHMZegZhphkg89r6pXHirdRKqkL3xZ3NAxtnjNm5SUA3AHwbWUEyXEbvgbnhuU4Rz6NzMxGKWbnbv",
  "key37": "3yC6sGf7z8dYg415gEDbfTd32CgpbgnhAWNYtEHKMLXLiUfA15RQwTDRHpqAuWGAG4JR3t1ZdBrxMNPUGqcq4CkP",
  "key38": "2xjYEQGG6K9WNNLo2AqFxvnxLCvDpM95RrvawoqQRrABWzL5NnvGVSCkBsDpLBzrMzBWWuZ35TJ8RQtXh1t8cveh",
  "key39": "2RykRBHkUJRMCVWHM7Jk4kbXHtdDzZGMAiAC9BA1qYEjdYUMiH2WFoJME6Q6q9mnio8Kmx3msTXcnRa65uos9YNe",
  "key40": "2jeoqTsUznU9AQDtt7f45Pkp7TuuyfKAhzBfv2oTf1arFMVu1HB98Axairxu83gJuJnCyGDZUHkNkn9t1WiB3yYh",
  "key41": "2LYLdG6T4Ynh1AjoC72RXbbBpwCi9BeqwEEHwJkP3L5StcSDcAZmPWPBHujyEGG5FFzEQ2R7jLzRqn2GUDpmppk5",
  "key42": "4MsUciKCKnGGd2Fins3vrvPf7KcaRLaXpxk2sfDTZGAjAZb33ZXSDDT5Rk4xp5VVVhy6nqnRuF8xULM1yncE1ppB",
  "key43": "3XfRuTwksCSainbRmXZ345xwVnrTEc9yWiw2R5phSUiCARE1xH9i3dkDz1WTNx5L54ZWYk8yp2ZybeF2RWGAdARZ"
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
