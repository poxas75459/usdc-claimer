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
    "VCA4idmNpuheQNzzDdAFTRaHRAEmvta9X2w66fbBixqTziHo8MgfEarjENZeFLaRobgSRtXxfhnDBsVcDAXTurL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NseAZLWT1M9vYUsmcSuE8AzDvuEVuGWrmjwEwLJNKYZtFEVvz4uYdNbwLDcquPKsA43Yh5y7ji1xopy8bZ5NMaV",
  "key1": "2PF48XJuKhE4vTVXTy8tn3jX6dTFesycn9PaTHGT7ASjkyEcnebdH7m216tG3nTSAW2MGGDV581QTqzTTLkMvG9W",
  "key2": "3LbRY5hhg5QExx4pq3x6kgTiP5KxURaVpvMSCWmu9wZDz4X1bvgHHNctbEetVdTRYwapErtHm7mX9XdozFWhmHvk",
  "key3": "679fDsh3LFqU7bYQGmaU2c1ypSJbAMWF3wGBdgRMJjWnQdEJ7L5by6kWs1pdcN9uSR8C3qjzNvg6jAaMu2LSYRTF",
  "key4": "5PxB8qhKqPdKqEqVsbmXdr2bDDZfijXMcEXsQJuvnhrfTMdhK2uK7sRTUfAfuaYDSjQXCw5gSssovPtPWJqkfZ4P",
  "key5": "3DFtobWK5BzZhFuvmTBMC2J3HK1RZvB1Z4SgixRK6gjCCpix5aYfWCuBnBXwkvQWRavb4k17mtyLUUchSQe44wUJ",
  "key6": "2hA6ztAbMuiBC4S4qNqrc9vueE7jzapHpiuNPtgkjXnCMTizJoCi4HkBiSGQ5TSBS4vVgCmaqY19Jg1H69YqwtAg",
  "key7": "3FgyK1pUzdqhfeuzfGtDej5frScLMdZxzuD1a5TkhmWMyhdrqqAZRtunRcHTbGwJbKe4grApgaV8gyqGkej1FCuv",
  "key8": "2QYf6f9se7rT4ULj3td5pka4QdPYDZ65XXDzWCoRo994qidhTjdBomZd4Ge7Bm1QgzccnnM15VDjRowSRnWhRFC4",
  "key9": "3noHXZMUvWj49GvxGbVCHpUssYKxTGSyynoJcVKzgXpaJLfEeVKKtXLtzsx9LQ2dhDsVwdj1cT9ZeyFLMZMVrDtq",
  "key10": "5ihVzsFALBB3HUZaoeDVdr2noC9ZH8iEbJVmHqe3TeVedX4kX7whckQxV3gfU5YhbSfxJ4M9A1GFiTkK2KgWFWPL",
  "key11": "3dxC2oUbBNptEA1hMhGa1RYf5YXkWZHGmxH6MA5H6oJS4xvJGN3f5j3C1E1hy5w4NAnF78BSdLckjMV6iyEJ7sw3",
  "key12": "4EfVrqAMqGkx3RCNSLYSnAzj7bp23hhVsT9bjUMSmFSSqDiGhJL8oCQEqZCtW2x8dpqUKfhUGitZGZTiNE9Q9zUT",
  "key13": "5tdcRUZ2WLSUcKSQoHUuZwkmZBdMypsTRvDKW7buEpkMNTW9b8LxntSHPysWMNUhVo5Z1EhwLi5CB5stqpkUe2mC",
  "key14": "3aQz3NKEyJ48ZMe18nTFVTmiGEru8kenov3esF6ZhrtE9b4H8pn5bb3WXLXXjD1Mgp6HU2eaTbBKehb6FLJyXw9A",
  "key15": "4rLwN4Q6qNBkPf2hMs7yKVrVKxkuedo8nXRzgsKe5FV6zaq2Ywkq8Hmn8mG6WxCLv27krByWLQW1g1jq1kQBmwDT",
  "key16": "2D3x8XqzZqRZGXuXV5UmvTgahAbtz3UJx3dvLpS6oBoETsaH2847ThguDcgiRLRhkeZkoPTd7Eu76HusyKVp8eXT",
  "key17": "3WDwSCphLQGRSdKPckteFLbaRaq4BTYyBHcNo4Fbdpa8uq95GNkiALoWcyWHxujZAEFy7b7f7x8o3Hxtzf2KkWya",
  "key18": "4hP5AzhHYGQoNr6RUDMNvwUYudrmSZziXnD6uQLwzjVneQ6esKhcKN28RaxbJGsnvbbBvzSxhuerhtoCNhZPBB8d",
  "key19": "5JShdiyTBL1CZYB9stswWNGTsH7sy6MhNDy3pgzkPVrA3YRWHrJxSUGQ7CJCz3jmK1ctBrKamVueDvRhxJ2o2c7c",
  "key20": "31f4LN4HJqAn1tj2gF9Lq6KUT75pP61Gk5L9xzPu9SCertKqb4Pi4witKwgLUvQ7XgokKuL1aQopMDzsbbcZUXKw",
  "key21": "387Ef26opNjoxB9qTLso6mmgCXLSq2JHigt6n7VxfCLjGgShWP9ad51jcRUyxtuTM8xF8Lqi1s1B9Sam2d52eaQZ",
  "key22": "jAZ5e3sxZHkxoDBjS88hAemubTvHvf4jn1a1TGrpoNTe6gfxujC5MGM4c4vu8GncgEMKn4x6piwydbUhaeWZW2P",
  "key23": "2nnpvjyoY6YrdkfqYdwKbade2Rkn4qvtpVUHybSdycKZg3rsfUPQvXUd5AeJPS5zvmPyQrXfTDaGfBAnYKgAavsK",
  "key24": "4UBwSMgmGcuqS366JqU46zr3fhpfCoAW4mqvHwxp8G6jUhEPt998owHqbpzny9SJNkBkZitwd7UBBuGaRmWDbopn",
  "key25": "5aR1W1W15RnygjnMeiRYRmFH6w7yunKr6vMNJYn5o2Y7z8k8STbT8JrrxNJPksFaPuWTsQncY2ZCTByWb9Zydxrp",
  "key26": "yiPUd4ZbkPKHJw3hXeUx7ftph94eeRhw4TXQwQSjat29RzpYFSVpCz1UnvEuuD7TV32J6ots5CiQrwK9MiLVrQk",
  "key27": "48TCC6bcDE2r2stH1FqYXWHoYDzYHEtQdscDtvcSZMf65YMVXYS77rEdu2PXPZBeLTJoRHwdCApu4HBx2Yh1XsE",
  "key28": "FGx7YXA2wdtnvfZz7YmiZr58yBkUGQM8yJg1PMTLUwAwRwZY4KZpdGyDx7xFBUUuoKsEQfD9ghWQGRuwiyVyyED",
  "key29": "3QQs5YDV3jKzvSFbgHd2HPXVbzAFbBfwURm28BZTar8kQEgwT4HcYeikFW8qnZc3HRyVSTthykhoJ9pze5CZJ1qm",
  "key30": "2UmdmQSXn1BMDQxBHhnSuZqoWtBFAbK8YLwuDaimGYYApMWSKDHk2Br5a1evv2XKTuF1RnvBsJn9TZmLxxCKin7E",
  "key31": "5q6DiqPeV3TKeiVpT1V2ukd6HntRtz9FeoywxTuy9861PBb1ywEmLwguCBs6K8qaoiDn3raW1YiH8ppq11gtw6km",
  "key32": "4bDdTPBRQBX8Fv2UVX3qWDTNnoAfZSUWyzZiWEFDDqncLBeDjApDfnpWrnoon2RaaBA4a4gm2X9MwvHsVbBPUEZp",
  "key33": "4VFCxuwga6siBqNsf3VkeECFHSgxfMacMoLTRDA179To79AAXXkHXYLCyF7NHtaHBYGg3Ys9byX6CaVYrbBAsSgq",
  "key34": "5PMRvUqcuBhNKrVr2MPqC96myjQCew3zBBTJtA2rNmPgYAS4Udb4T9mdrZSqPw3iWGPYFzwdWVnXKNqPY4pxdMLP",
  "key35": "ZDb91MvroPjdCThM7BEYNYTLA5NmLT1YqraYf57YbUva2uQkzjqa2XkutF5etu2ieTTW8vNBa2424FSpt3Qjnvj",
  "key36": "5krzvTMJpD6ddEHb5u2YQsTqB4RMTnMZ6wLmV4XtVcNkvmXs52XSPoz4aZvM51oRHBBNBvKbJrsw9yXXUdSEEZwg",
  "key37": "6e7EHAobo1FTsxPLav4EiH1n1j89oG5neYauKAj9ykJYQf4FsaWArPojvuhhqEC6N5B8vPGriQRwqJyGMs3xuis",
  "key38": "436kBJvsBqbPcjnmFfQHzy7nuiieWK3Af8wbxAUqTp3yZZZnLaZKH3F1yei2twtuRwaRh5uQ1dEXaQLnYuPEpsZv",
  "key39": "4euCW1GM4rPvBCnbFsqrCETdsx1w1X5DQ3EUgGxv6M2z5ADgqPcyixUkiV1CnwbGxuVVC1oc2w2QYWn5u4A8VD1o",
  "key40": "2W3YNTG9qb7cqZHpqmweLp9PYKJcba8Mio8RShNzmPMGDEhCcc6Pyv5wbpQpVwHyURbzwx5ARLTVPdNdGJxnxSHW",
  "key41": "5s1hdWrcdec6vVb1mTkpxsNRKHrR9uHZh4NeRNd5vPstuLu1ReWGomn3V1NZJsJUDu86jGNAXYGECMfvxFoXEzJR",
  "key42": "z5Nfowmg5ZB9nU9yHpW1j5X6HAeV7kNpZR1bveJnYRspqB3Kf8VGqHivRtSsAqbUJYq6fByki6PoWQjehN1yyfD",
  "key43": "4s9fad7S9znuyzWXtK6ZgF9GheJPMKTErSvrceerqBaCQGpmBE3H3nS6Mdg68ntsZgap22QNNU81q41t5Rb9iGZk",
  "key44": "4F5mw6511tcPBhYNTpFkMtwsGNKvbN93mCdLrvgc1416K5mPhYUb5Hv85QgdEkWtYhteUEgcpi2CVpcFSYAEbjL9"
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
