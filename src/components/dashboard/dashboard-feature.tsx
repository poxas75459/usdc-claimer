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
    "4aKy4qy3HoTPniFyNTGi4ZSkD6pqHEDAAJH8Uk4FAZd4azKRJoFLB4CXXWKxvRuC3YFuYk8LBZBLpXgsSQUyjxMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pTfLy8qrPn8SMaY4qNyLCLPPoan6UE7th6D1NnxDSZXeECN2DXDY93aoxb5DTYNpfz275Faa9r5k2uqSTwUxdBS",
  "key1": "65TczpYZrArysVdCj5St6kvS1Bjm9V2nvPuZJvKqFYur6kKPqwAbzZCkVG4nWz4r2HZVRn6qeuTBy8eYHVg5b2eU",
  "key2": "5KxwWJW6efTAnqBh4bTiipgbXbbXHcMmkw3525d6YiWoTmJbZmquCjBsiMCgDVV4vAVBxKavxAaCkGdM7LnBfyBb",
  "key3": "2dFrdGbQm4KuWmxKw2tCaGyeQPAKcv8ko1itMZ3AALVi27oNwiJL6R845SP6Z6pKQuPMSuSrLQGPCQDbdZJjjRpG",
  "key4": "521qnXfw3sQH2fRemxLyHP1GhwoxMC4PxaxoWRTSnvpwyGt5yZww4tD3sf21bbAvhpnxDarsn5YrnBcCgEW5os5F",
  "key5": "3Mbr9Wqeoc3qehfuy5aR1QBiUzVSmF9prqXdP19JPB4BM4mayHo4Pze3isAWfvpHKfdGHnGrnn8kJjFZih4B8mGt",
  "key6": "4i7pAMQrmXSwDswPtJa4SiLsndwWoxoEqkUzX4tSjfeaL8Ws7ngL7U4FRZhGA8wbw8aC7akFUPc386oRP8w6oz6U",
  "key7": "2aMUHmWzavdJhXeK6kkQNRADPgGWQewYoyMdnNpApjsXQuNUaCsMJaxijgNSSe9BzkEsteF7fee5qgQ1ioq71whk",
  "key8": "2Tfz6gNt5HV6GmUpP13QYn4g1kfHzhqiYKwyU3R6kjfuKNdYXFXcrnSfAm7Sa8YyB5Dht6U1FbVUa97yWedgysrT",
  "key9": "4mAA9pkwChqqzHnMRRh9YSXKcBy1fxJHbABLGKqE76EZwLpFwjoEWyTMjn1bCWBN7j1Sivmn8bPRc2t7gM1PKsY6",
  "key10": "5YHhbq7XEy9ehX867AeiX6LL1RtNRP5Z1XzdMLa7HZvMjS44eFFPi7YmTRektP9BuLFrmucaQMwK55apEbctm8FD",
  "key11": "bwxYoaDC9Y7RCXB3LDLrjizZoKLbrVkt7a8Hg9Y41p863Md3HiUwgLG6dLiyiUyQWdDt6vJcaKjCeWhMKKEBzsh",
  "key12": "3uAnjb47mN3DayioCNzmQNnE8FoiRyeBytmDcvFjhtnTNQ8nyD8WmY1KFgr5vrDkiUdxMih55BD1PQsBRWr5z3hu",
  "key13": "5kqhsngbackEictJrJRsgnRDoPhJWBa99LXfFtPJiXNnmFwtxArdyf12TXbG23HxKQLTZKUDU4TQ5VokA82yr7Ja",
  "key14": "2G11By8s75uGUd4Cb42MPv5i3QtoZhNsnTExGaU7Re6hPvfYLmEt6FXmoVZKoa61VMosdE6J75eJsBkJSkkC3LgD",
  "key15": "5o3KsMRNivvvfv8HxWauSBqfKVQu1va2a6VbRqFZNL7q6oVw1brXghZi6D8tWQR6g5YvTtuEjKkeyko88sDLE6NB",
  "key16": "61KFfvNzS6x2pCqoapdHeYA5vjp7GBZYtzNM4immC5FFgfSW5pfJnwxRQrDkkSgJokNrpQ2F1atFT6Juw5yoRvq9",
  "key17": "2oi5d6Br59GSNsnG978dNgHeD9uuYMTfx1mQBoqjJpeJ4apaaQw3Y2tkvxEJTqk9zqqmD7Br7BYcpjJdmzw8p1TA",
  "key18": "3fqh2E5cMNXxx13XYbMuG5QCc4Yvw92PS13oYS8heSW2DhcCb2XNUVzXcYWwtPvUyxzwbZQbmVyykFfB2FAkhgqD",
  "key19": "4vj2566ghVAtqM7jmqERVnbWEF4oTXahoSJpzjcRRyjKmfvhpg2SvDH7qRdkCkf7EucohxKfo1RwAS1pWrQHjBEk",
  "key20": "3tjBXcvustLsj298Lq4J8dcEA4aPj33EkS4eTfvRtUwYG2FUzsRNj6f7g7Ny6bsBRVqNttJvUkvNZd6yXQVSFCx8",
  "key21": "WBfoJLHoMGSX94ZmKrDp3iC9co2qs2rpk73FZDNjcB61rt5Sn3Us2sYJWwWanXokroSzmCNStkjtrhEVaesPMFG",
  "key22": "3kggacQZnukGA5QcyUpst1MVkK3idy58nk2Mx3fahnNFCh8oUCM6dHXmnMsEvoeu4CTqYsGi1xJLn6TYc4Rrx8bW",
  "key23": "JAfax6KWGJv8abwQBgZFKA8Y5XpoMuq7YcUvNPmZvodaF77uBAnzq6Cbjhcd5z67NGCRvYNBxUF1CzNMFJKNGj7",
  "key24": "2HzzCPtfhQLix3gW74w8UChBidYnXK3az2aRVJiF5uDLJ8QMf1JwCqrvHihqcuqb42SnJ5CrPmA13SfMcWeFaJSn",
  "key25": "DmjvXy1hcafwKvgBQXRCCTMKVJYtA2DHePihQL1yMJYMcg1e13g1JKTp58rbNaXoUuGKX7Ha81t5vZme2XTbAqt",
  "key26": "2iSEnxtmXgEn7JprRaQioVXwd57niabWhQn1MYMp6cRCTrHtwZCZazMBdGLy5hSKxJsKgaw7FEPLCwLEDcrGXByj",
  "key27": "UfWzvoJcPvAgzJZXZKsNBJeLUivFbWzpMTexxe2gD21Dd9PkJppPJMPJt8gipGNSUgAQBoNF93B4Xt9KtZHNJEZ",
  "key28": "4yZQ48eQ8oWx2HGzGSDofGJuTmvT6ETDbiGa6JakpUaM7S3hYMBSdz3tEGmM195bCGkt3dfNMiQhVEfsZzusnYHx",
  "key29": "2konEyECWDsZWFvjC5TwxbDTGTRzaqjczdTnZ1Py7u2H7nQ29NccTDe9xXcK8SoHGP5AgeGwYyP7bMoaNfXApGo1",
  "key30": "4h1JaiU7dQrqSuArV6swYndHYPK8pyvPWXngmf6UR1CzdT6hdCyR4Qt6Ngg5J9ZPhgA5UKMjgMGRpdC5ne1KPHWq",
  "key31": "3XaMCBBNXXfRp2dpz6q463mpKfbMskPrx2Ryqd1unMprXrY25KDcK6dofJcQWpocC6FYe8P8x5hjs6hZjTai4d5M",
  "key32": "3x7bHcXNzfNy69PtQqkSj5bsPDbwvHuyKvA6BNHPnu65y7AALKhXLnWogXNPEbWVcVbHjxC6BSxLGEsuBDTtBw62",
  "key33": "634tkUnwZYQFv29ZDQzeMzxkXS9AJ7mSTka6wrjB2vhYXqs36WGUcmbKmP3nQxrBYzYjQznJUCxvTw2BaPMVtWCL",
  "key34": "4r3uBsNnRYzc2G7vEvqm1ok9cADoJqLoTeYeEi4gunMmVJGuASCDDzKqzt8pyTJetGeG3ZvWmLKYwBbWL6eJ89RN",
  "key35": "24WFcfc32ayJ1Euc8FBh1YCZXUC8d67SteqzsJbVjXtsHAvrYCFTnDieGPYEbwtCN7iUEa6TthrFK6aWZtaMCBzk",
  "key36": "3b7tckHqe4nxGztcj8tnpsCKSz9rBcqa2ZmcKrNrhDmMnzFbkbieuW5mvdudPmuHuYrCrX2bLvruzeefzwSJciTx",
  "key37": "26rPtb4zgkBiqbpCCBNSzRYTYS72uFAdTM2XP2Svtf73eqJUZV5K3bMTwvptkDM3BcCQpCXtV52W7iw5JdJnYSgF",
  "key38": "2dZyCtKGo398RYK36DB8ma4DZDKCiHp7EJJWvmfNU17NxSqwwHPcT3df9NsQ8tAxu1UcfT2fCSzZWMHfgQzZ1kjy",
  "key39": "4VxC81F8yR3mLDPjatrrGrZ4yqrLBqDP7mene7b6DHn1eVqjdzcbJ5YvqJ7GjepeYMTu7mQNjn7EurDCKeJ6n9KX",
  "key40": "5H33KK1dmnuuTRp6t6CDRq9AMyxVSiMtWbE18VX32pgfNmPEtv4yBW6VJMXMjbUEJSHtr7C2fG8hAiNLUjFfUN6Q",
  "key41": "37xiC363d26XPi3ArdKAsuDvvnjskqD6wdxSvAGsiXFk7h9yb98XSmqr92C7mtSQnuy3Y3fVdNpWj9BLb5BxyG2B",
  "key42": "5yzHivh2L1o1AF7KsZVD8UXtqCXES31M3sXahJncEau98AwJNBJHKwVGZpQ3is4SGPai6DGe5pTLze5LJhhjn7B7",
  "key43": "4rG9yXay3oDNRFQVYCTpWcABESSt8WdrwFJSCWKrtY9U7adxLqEj2RnMPjhxmmeS412tXeoRZ98JChVP6bzafLXx"
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
