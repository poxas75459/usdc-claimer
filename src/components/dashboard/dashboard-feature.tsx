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
    "65pJ78gqbHcSnmPdAWRPPDAp7MLtUibnDNkcrztBqbcJNrQrnbW6R6K6uZr52U2yVzgGqWXHH36eWfP1vySTjy4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f1wYNkXHHWcDPyxuynao9y2bqqgnFKSCvdrUygw5rUPHsxZ35n6QFJwLQXC8cgLupetr3ea55LRtaNP2R8vNdY6",
  "key1": "5yPsCFLRfLi8msz4NWRa9mUfhSKMoeacb1TvGKDN49hUbUHKWczL81Zgm4QDFyyvcHzAquKVCggDep4W6wKPTCC3",
  "key2": "2v6gRxHCBzfW4BNpRixafkYvWb76MQxqWBRCfTCZYmrzH1h6TK57C47AYYzEWcmHnyCsLGqrx7FFmzEemvH6kDNP",
  "key3": "5D5QAiobn2VNQZrPm51Bu9EbhVFeisDBjY7qehg6T4EEzuUqk2wNoPyu4GTA4m2i11z7YRjiK8xbzLWoKeUTMmQo",
  "key4": "2pVuqdrkDLPyDG3XQ61qEh6DHdZrcimGmMRNJ7PLwyR1encfQpEz6SfRkoJNt6f4EXoW3CQo7j1qTvJ7wKnp9ifC",
  "key5": "4uMNkhThCfw8T343ZuGya3u4HevEjdSJQu6oGKd6ebdjRUuLomkhJsRP7zB2asrJHMK1UNJD4dz3M47P5v8NsgYT",
  "key6": "59kNLrQrKQEASVpGtjXq5kBm7fPJYaabZbbJeizGhWQGhyz15UfbbqPFRdLzc1y4y1Nudg93rNSuudZ6Ak8E4eKc",
  "key7": "2mSpSEyYXAUSQuJZUMedAFW5fXEwdi844ixMrm2nZHk1hhQ9zWwwkcdw3F2NPSYtchHDQyW3KWFS9EgFh2Dqna33",
  "key8": "5rmvGXqHvhqQVjMdywUcjUzdfRk623S97PazJv1UDEE7C4hRYxDNbF9vFtCfhR2voj9EmxHXyuBUTuyR7WvEFn8N",
  "key9": "2GUs1nCx2Wg3ueo5xYqzJxNCkwfLF7xFXokB9pRBvrzcU9prbG6mgHTbRpvwa2qA1DZ7UEkTxFakb4Z1qRV4eBYS",
  "key10": "4qAszVDDzxsewEe9Bbk7tUnz6Sc7V49Zd5vRPeio78on5YFE6p7yGprXdhERmTdmeJgpUXYsjdNHnn3ifxF7Kh8h",
  "key11": "5kaMskBSjUmTsaDMAk4rk2NAUdi6JHe8sRsT4PWWAhtN6bgHZprdxLSiE8whuSfbjbcYxA7a142HAZR8B3D4T98a",
  "key12": "5YuKmLPgsa1j6jUdsk3vuJnLUfLhYAoXBxjEiUiF4yUbxVGzSsBhKiL3sZxBVJ2g2XyRvH1niuCAkCdUapDjsNQ3",
  "key13": "38y4zw8cjZ3fsBRp7D9LzwzD624m8JCZfnRyVy1e5km3JCoXFsDfy1JV924Ea7tW8HFbgrqv849FnAHKQBYLwtGP",
  "key14": "4LjdNwDvJK1XcEzxpbBJzUp3Bdwd7w5yAffy4JzAa65h4rkUqheiJp2HYAnf2CBuAFAeBoJo64V4cN78nAgbKQup",
  "key15": "aqTBfPA9W242PW3BwkfkUVgYRe9vFijEgvBzFc9euVzrspjKu5beJN7D5a5EFyZyqmfRcwPf5jQjudB8E3kedh7",
  "key16": "44D8G27qSq7m2csFntx5669hHw4AMkPdoAexmCJG5vePkLNFkNLArxoCFPKcDKLGmzt5eBU4r8CcjBcySMCD2Zx",
  "key17": "2NctQGpDbZDE2z13zWro47asByyhjbT2Nt6qC9nvQ3RTdL2AHFK2QjmfqPDAkwUiJxQo2H22aKX4o2TSgVoLFPe6",
  "key18": "cNzwxYXKLFRabR4u7v5uFGP9CnmLS5R5yWu9duNZ9ewZB4yFJnWHzWopsXRyAuQs2bTT4bGPZ16wt23wNcKq5A7",
  "key19": "3cPmVsjcsRoLhAQvaYzh8v8jX9Q429uWWsnjniRDSdvRyBWnDv7aP5fDZgyPgPX2BKokgF4MRhv7RYpTXjXzc3Bs",
  "key20": "iD8J8Jp6ysExxkhHoX4Rxsb74d8vQcJeKZ4nB6S8UMaVkdWDSgya3yN8gjcqpyAc1ux2wTek9uUvMRUDjuaEMv4",
  "key21": "3VbgobaA1gHnbMv9JM9dG6knWaVrrNMPPRYakBgq5RjX8WG6ddm8QYLU1jLURENz8fWtFoNzh5SBRm68nspupR8D",
  "key22": "2DxwNr7EMVd6ZkqSQpk7Khmkcx5KGSHgtGuDJjGhpJtMPexbQDj3v4iEaTMHynQagYoBqPYvXvParCRs7k9DxiYY",
  "key23": "P8uYS52YNDZW8YAtqznZYeQKv2VoQiKF7rnWSJKCzR3jfReMftv2vusmw245wvWCe4HbDYcc4HfNNMmTyHsVDDJ",
  "key24": "4331B7VpvUvcrDqL5jWoZ9iaGwExgCk7egs63wvRBtT2otJDKcn6KgDd7smm2eEnFkyGgGTKDD7r6kTwfMBDFBPt",
  "key25": "3Jd5FdgHuQKHmJc6ni6UchDaEHV74JtBwTNidCZifdFWwcYKbbKJ6iZnK9E8XnmaboJXd8ZCRe2mM5eTdGmLvJe8",
  "key26": "4E4YreFmy9gdhm1EDyyrDj4Pb3nfacN3QW1cmg19a1qLZH6TkjmF2oq76N2AH4L27AZhNsTw9K2jb6WYfkCzSZEo",
  "key27": "3nmEzRUe14xqpMQKauaPWDigLRE6RTh2HMWTr8eEySLbVdS8b5KFvKG6zFjLk7mpsxvug9r2qkJWdQBMUEtuAzd1",
  "key28": "5gbTdsVDoR3rdMs7aXdgsShqJTYFrg1KZBXhgr2DuupPtsxQbfS6daq5yNtGeh1MZ8JaRy946VecdsvWwPfmNt3N",
  "key29": "3NuVBaZ6d9D45jTJvj2eet3pNF5WGmQppKb5ou95jBDwrtEXmRgJPuHGnydqp7z1irc6f1c2GKMSWvkTGYTpCZfk",
  "key30": "5ihzTCZCEZLMvLRH8WVKP3cX8W5GKopDQDu4QhLkUaW4kgg1y8LjMehYKDbX8btGbwwqqexve1ccRMUmxtrKrwYQ",
  "key31": "556GiasjVcnhhESUurjg8vHXwmHmQziU9snrn6LkfmFt5BQKCETRSxZSeMS6sV4NJEfgmLFM4RL8m7JCnHy5YtXT",
  "key32": "4J5xXjMm7gs7q9guwyDPN6TJPb2tWmLJZ6bRRws21GgPpMEBBQBBDQEkMH7xuByDGDaRHK9kzhfMS78K69PkePtt",
  "key33": "641voZozBUF5qbvQvLvohw1XxY6EdVuWbWAf1zdgRP5nuVQiy8R4QsvLTjTyAgdj6KwDWWsG2XRaygMidZkzQmte",
  "key34": "2Dtmmx5QQdwffBX9NJoSbRv9J9tzDv6PaLGyNJ6hmuXCDis9SCqpvnMey7YUexVBJeqC4XNBGJ8mkPcFyU9SgcNX",
  "key35": "4a8iULu3nKBBifPodNMLqGczpYupgicp8utAZAAoVNwt7b1w6ZrdD4ewQZN6j1Ki6SK7nUVaVd4ywoCqU7qWsCU5",
  "key36": "2oXBVQuePQKGHeot4JtdVqPf1sR2kogzAKkwX62kpLed2J9jU71D1Ea6N9dTFW7ZyosCtHJ6kKHQTHVkPcMv3Kqg",
  "key37": "2PpEoTa2QS2zsbjwSfHAkRk56mbCPQfgRk63ySJkFU9NFFZnSmFTxaU96vbrMTcHAEPgaMSvrak8iZnQUvxTE4vs",
  "key38": "3i1BLGUrMuRpYMYKJDXXGhHxyt7CFoSiLvkvgR2jjuZrdTNfGwFq27thhpoSMJh8xJ69LqQRHCn1XfEdg8L4Uu5W",
  "key39": "emM7qSBs4FfmXE8DWrjA1zPTtCedS1KE92rsF62oLmQ2N8RY6ZFrhS2F5EUVmkzASbe2M9TWDfmU5woVoZpynBN",
  "key40": "4bqz8ugWrhiYbghgCmPn6rDGJCFUVRC6X8KHtJC3CVNso63PkdUGqZHL9epCPkPjw7bTWdHUZetNhsJffVczaM1M",
  "key41": "2WBAxEB4NqJjCdATnbHqMoaTHjpAdP4fDP4yRDLcAHsK7pVFSrv7CkFsYTiyNbshkRSXQ7AezvZWWHPuqiVrRxzh",
  "key42": "4eACh4NcCsJ4MpTYwtfFDjnVwGcFoykgg6tXEeSR2wJwNybRuKjFrP5Vvfyc1Zs1BNCHimWzS4LWSC6YWky8FhMh",
  "key43": "a5KdSmFbx4i7K2iiW4SpG8T98kxkdevEkWde5gEhPS2KR3sot5xgXsofA2unjgBt9fF6ak4TsuhzcpCmVKTXyoZ",
  "key44": "5ghxgRqzrALA2MfebQzGhsWFoP1D9bL6C58XvRY4L6zE75YsEsUM6EMCE7ttEw3rf5kXSCzxgjdxPDWar77kyCin",
  "key45": "3hRnknrewEAAaK3b3F7mATFnCqzvBwsBwmVJ9QaCJyZ2rymVoifhMnNp2VKWp34FYwgrw1Ym7MhZddtS72fVEBxz",
  "key46": "5bqXhJRxCfXrvqWLnWtTwSjaMcRaHL6TvPb4zwakatPmJi1dP32oKaMJwMe3dUmUd7m1zhXRHLhiy5z8GkK3P1es",
  "key47": "5wJWWpun9P8UXQ4jbZgDmmp8mVydZZubRtyvGNe1xCj8s5wf38zArzdt4YhiP6RSG2cFEoijbAhX6EUzT7K9ZjKu",
  "key48": "Ff86bBSTm1CBoEUcDA2VL5uR5115yqqnAScexSoke4PEv4zKYgQT4dcA8EXaDvbt4CFoRi2rv4FB8Udf87FL91N",
  "key49": "5YYcw9NJ1CingPnzjWTEzKTnRXBtfAaR7DdA2iXzPQsQvVKDor9WfYwoCGRgThHauHexEEruXNsJ1FmyHese4F2F"
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
