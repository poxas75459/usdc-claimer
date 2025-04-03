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
    "4Rc6SVLNR296ZinKsixpkxH7jGKk8nBiH857WjPVuwAzvdhM3qE5TReZ2XEMDmvQBxwJXtY7ibr4dxyXmzkF78wY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fk5QtKSeqFw3EVzZWQz7jfuGZYaHiEx4RYUB86nHTJm3Jc9tNMVSrJTqEBfv8KjdoxJSFXzusKnqyf8pyE5NKdF",
  "key1": "65D9D44FVibLMsTN5vbULeeuXzzHhbPkpW2n2UGfSZMXWak1SXgdcsgx9FLpdkgHCieD3oF3k6JU3yqn7QiqEq6N",
  "key2": "5GWxFzDFXbsGupzZXH66sSSTucvbgtDbtJDe9YR5wpKjvxCcRSszK9bL5mQ13VGPqTkrdkBQECjoZ7DHmYgvqVE6",
  "key3": "AjutC9uG6vfzb6tLyVF6CCSzwubkqoMBaATH3ak6KvBVfcbRKTnWttHSXda1WAXJ2wAExXNxceKJ9r14Z38aZEz",
  "key4": "3VPw85RMELYDnzRaEfoptXQ6Eo4Ea65QyCf4chgQ4hja6azzqHcoCLRj74EAdiBKmG1ekSBaKvgWhXejwBPpmAMa",
  "key5": "5SMTgVyXfqo4YXQuCZt7BU3KjXv3pKTaovX24rkhjuekgSkxhv5A1NrXymSPNp4VpnEJs4yMdBadq3ACQSxxPUZ3",
  "key6": "mtUTCEEJzU74qHJU9fuddsvCRywuXi6GGvnLWbwP4FFwjUfy5eqwMR15mh2qAShjysbAqXgSLeV3xDZm1dNm7VA",
  "key7": "5CEBFKzpwCed6n84Lcvq2k2u7B78Vdeh7TqW2QGYauqMKbcGfzaL1mf8K2Et9ESAyA297CzntQsSw8ricpE4d3Ga",
  "key8": "4n9LiXJThyvZ9CunSvyosEUpduvP9yLRRhyTW9QjL8xQ9xRhLqBfHN6nks7QmgWjBVG1CPhJCWCfGGMmonY5N3cF",
  "key9": "2TNt9tzNZgcwvsMB7RMGYJ5ZGq2uMMYL1DpizGatoF5jx3vwD4niRxwwmHyQZexrXvsQ3gXgBDaUdBNBsZ8aRQkg",
  "key10": "5a19DN2RdksamGSLa1EkHw2ffsyoCnuCiZy3GAYW7Et9hcb5Ao38mivJhEfetGTJK9byVuPYJZJG5tTefahJgh26",
  "key11": "5jPDdC9xk1wLPfe68EeNnFTmKngJ47GF3yDucBsxy3nS5PHqYUaxSEvPB2zye8UMNbjvzyEcmxfSnuBj2q1SKYvr",
  "key12": "4GV94hvBuyjhB7HLFZsEbYtdZ1jXKvji9aayjiMvkmj14ZeX7yQbuyp38A8UjMx6x1dhAeX4YS8UH3hL2JAN53ew",
  "key13": "5P6h88FvhEkGrkxs5FxGWcaZbHFudgi3jbNpgFmbpB2BVYGwdHv8KrzMAFzkeGXjzvQWmejAWp8CH91UXWH55cZb",
  "key14": "6ycrPghwkUZvTNjVqnpoyE6X8VqXwhpqJHjAxbpH2QDPR6uiguYA2YWbvKEKr3afkD2bz8Bo7VtLfi4j4tFt5Sx",
  "key15": "3fmXNq1b3j18KoRMtgmfRE7wuTuxQMmZdadQn31Wy3rttLhkhPVz91HTiAHiVhav4eEZG7P87hETsPBAbj7YxiCR",
  "key16": "3VssDTaSdfM8DyVuNCPs1m27AS77qamPEjDNkuLyBSKPSZydSEWfmgXryFx2DDrnjGMG2U2WfVKYqq2BihFp24wZ",
  "key17": "4B1PxMsmMT8pp6HM7mxDfLc6C8r7iacqfHNGXpMTLLf4uLSz7cMnugxQSgzXn7fmMtYSJNVsiT3mLtHQEpQXmt5U",
  "key18": "5vpxpcgM1xFNVqHkMnVkLR4dJac3FuW4yxLac5EFhjHuKFAAb9Uxyrm3hNWu2bWNC3egSiZ5okZAZj1E92kJCYvH",
  "key19": "grQirBvw4Y7hEc3UKjbw6TtCehD9wCiBZ5a1zUWEEnpDYzkWqzQpmJPifGzDiMg2rdD7LeSvzbxppzQMWFkAbCN",
  "key20": "5choipK8BJRDieR2bUCV8SmQyujPpwCK8mzptdrPxL5F3aXJdYFD5gwPktX8xDi4FfRVPNNmoenXxVU5jaKffaAv",
  "key21": "2qXE8MuJgCgx6TBx6jPqYLjRS5BQypSu1RqfYh4dP31JReLTNPzyXKEESnpHLsNrxpBVDQqBqRav6CTmbyRoCeXo",
  "key22": "5SuQwNDb9VJtMMLZJrzZrSKdHWNo7NXHaQweYHM6qftpbK3PWdntjMgf5vzk2Xrc14BTJ4Lkatt1qEAyC6XVcbfe",
  "key23": "5DWC51t7HQFyfZpjqMch5HrUn1EJJ72bKga6Th4tWY16XRk2aXmXgvTLTgJ74VBGpBHeAKxhVb2Chgh9UqZcx1Wp",
  "key24": "3JkN1UQnSSYcVHkjnJLqLZvdzhaNP76vVatBqWDbF9QebPGeeGdk78bX7S7eaRRoJyBhxb11M3V3uweczBBCKmrA",
  "key25": "3BqjV6BiPy7pt44AEcAAx4tpYyWeXG3jos4yHwELWNfzghZpotmrjvEB44R4hyZxSrfJVjmU1PtcCsHJa3iDpmBd",
  "key26": "nfkAd26oX5Gd81Ynd9V5gQKQmVhBgrzYRErmXVQp9x3LNmnJt5xsut9U162wJcrcf539onowojJcLo2c77QqTs2",
  "key27": "4jqFMY4m3FsYcZ5rP7LqMr1o72F5Cb5c2t9qi5tX3S6WRJnahs8XjjkboZhW9JAQyadtjvAwQNu5iwsyV8iAeXNU",
  "key28": "2XUzpVMsnDeLPyatWcuaFSG5PgfddfxTMK1NTERSqujqQdjK8TSC18ee2UXu9ttZCN6LcNqsmkAPwwoxbMkvSeHy",
  "key29": "5mvcX7j6SXtEcX1VWk4w6fwU5hT5eC6i1gD41cmyHPfsLau9W2eLxTtAoR5qeyZNpwiCywJLJf6fYLCxCsAoeWuF",
  "key30": "2e3EiFQsb2td3uVb2j9mdfF3u7G7p75ra3VEtUYmEshzSz3CeG1ybK1Y85GU7sDX2TaKVt4yNRr4KtuopiyQxfL1",
  "key31": "2NdUS5MnRWApvH6ZtmwrLRkjoaJAAFiBH4oTW42yf4V6zcM57LzG9gcWAVWiBHbmWU89HnppG55TcUuU2Xi4Hun9",
  "key32": "4hv9KTEF43qGaoMDZA4aV3QeJpmwggHqCny55emtMwqkBcaWZwuJBfGGdNbgF8aWyiYNCV5fRtAJQAkGQxebQfq4",
  "key33": "56oJGX1JG1VP6PtSK936ZNNvXJUihbUBxixorowvxnDBZF2gMozui1vvNrkyrdyMZLxPQkumYi5AZp28YWYC8Bxq",
  "key34": "4DGK7KbUyRcU7EEbQMWmchsS73xuojqT8PS636VrGeeQMFKuzG7omsg5Q5rxmVCG787GaJ8Cxw7Bt4AwkWpBGJKz",
  "key35": "3Njo4ps2NSCk1iy53rq9VMRqouKCkEXRVAX44hK8NPPz5kMPaBBh7ZDAFGvRYm8icTDiVYYR6gfNALMcapWfNkss",
  "key36": "2tqQih7fkLHzz5j8pmbJoooNy4RRc3exzsuyKCEtz7wZmw6K9TXWm7JBWui6sVBJvB2UA4Raffysuh7AsyRwybm7",
  "key37": "Jg5bAYabKX2ts53UpR9Ps1AzB8nANegEhxy65d9sZwAFL7iyqYDjyi2trTNnqReae2RVrhzRHYe5JiXX5Ca8XB1",
  "key38": "21e7Ux4DkHWxWUBb1NgKsj8LntwF7mfoQjNVMZwoUhNBczV5ZFZYQzwLPQLGEUpR9dWFEJFDvbL3eMT113yrKT78",
  "key39": "4iNqZzGvmoXyCbtx3DohCZgWaiLXSPbNj4AbLsA6fj2LViEWU7DuhW946AQyBYHEyzqTHbesvRMPFnjHLenwmDLf",
  "key40": "3NbQttgFJgVnZvdQHPtuCziugpwBcViLLrPLtBh9ZAKgxKnKqH1NYpAc4dBmnN7i6tBwQeJDiz12MQyrzPhNHLTA",
  "key41": "3cXEeMq9G1sEeaUU4n2GkCAVLXRTMzGyfVR8zXiYUHfhoMqqGb2ZMdddJsnf6Xka7odFcQdRTdM1yB2aH5AcKsAg",
  "key42": "JPaUepB27eUrGAjZQAhphYnDPmvEnBxAEMVj6JQsjf9pr1Y2ipnd2LSqEj1ZdjEDiSqxP4AY3TBsk9kA31KD8s2",
  "key43": "5F2YDRu4WPtSimKQkRUheJZPt81uvxoMfKFJqqh6qgkRJ5dzrWtHM5FiLrpnAf48LuAUp3U4MZD6wVKogc4EufGZ",
  "key44": "3WpY2ercBm7b8bHnjhxdLFWHrHJc1tGx5BojTqmfamBWjqsATubCUH2tX3tY2efmbA6wBeFN1X4GnvvtCjYg6xii",
  "key45": "2i9znArRaxLpeFj5tK26j8omh43SE11fRjPZ6AxFVRt14PCgPrwUB1p82BPKwazfPGFrvVmLBr4KrBKEC8VXjLmq",
  "key46": "3tnLvouza38HiJXBL9YrdiJ31mixi3XipvRyzUMaVHFVgnsTUVmHEWoCN1D4yBAAzga7cEeiMMyiVkbzR1MfS6oK",
  "key47": "NXVYTT9WsStmtbuhWkfp1cVKgCYFuT4dgLypupFDRq1ciVyvKCgquuCWGagTdfMGbTLm2eXwwWnCMDDTisMG1s5",
  "key48": "3kK5ZSMzKjoUs2C6F5fC3mpHqZttJd7dGpatCU9m8GG6Fa43bGXgHoGCwVxuotJNiJ3SWJTrbfrbRy6xqvctC6n3"
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
