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
    "5UcHrkxL1xv8AobEKNdNxBRiLzA6ATzDqVUvcFuLAxywduMApDr9yKfkPQhVtK982rJ9y3di74bqLsi7GM6StmK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LFSUa2eKzoQuXN8FZjJPyK7fHzzPVozWdSmnceyvgYQtBQQpgPd85zLwkWi6uibJ1poGCULHVjvv9HL6AwiurtL",
  "key1": "4co9tZHkYDGTRVBeFWKoAc2wxvHgytpi48vPeaMNfDyxrbxmQ8KbzD6yZ47ZK1J8ppncAzFsPvkRHD2s8ewq19Pq",
  "key2": "3UPcCEipzAHm5DmavYaPvfC8yBbzyzw2bEsTXgDyDBQXgE9Vj3uqgNPkZp1YfKXcNfNqp5vxLzYWSoVF2JqbsD8s",
  "key3": "3Xj3vUvAwG1CrjxNdieAKbnXZfwikWwHUuLUeyafqsDsLRRVsCU3cw4biCHMnDfB6h5ABPrE9zFGpwQcdKrsGJWf",
  "key4": "2emWHWMWAzKM1xoHzgcxmxjMHsncEKeahxAsvX59nN3pi2NF2fUUCPQFQ8nvU4JKp6SDVMWgHJNC2X5Drc4asLff",
  "key5": "Hk3cGtQ2T4nZ8EjTr4Tq1xoEzqMgqGbKGpge4mMhVdU4Hsd2iQYi19SSDijbvoxa1YDYb97Qcc3wviUwZk2uEQm",
  "key6": "2TL7uG1sESWbE5ynRmZTAX49wEPRcow6PVPnANNJFp378gpFDYWMvfr3g9XMrRa9f8Vd2nbD6CENpQ7HWJGeuZKY",
  "key7": "2k6szE2ez2xQwUXuiB3hkgZ5sjPJdCFJPQ4QGYPdZDLuXa1Zp7mNmJaaRmAEigL7BthzYzFm6yQGyK4tkM9cNdNP",
  "key8": "2nx7thY9azx6kJE4Y6yZZEjsVjjppgcmY233LBWaUox6KQZRwGxdcZqWhZKurHVE2SJWpXT9C3hCoqntfRzQHz5k",
  "key9": "4DmDFuSdPQocbcCnggUuGXAUw2qChpXxpPq96tRVqsfDPbYHd15UakkyfkuwG262hQmY45zz3A1C1tSGHoZx7Akv",
  "key10": "5KfRkcDC6ifqRZUGjnBUsfUZ3bU651VjnGDou9CWzok9uD8CQ3KvGA7Vv4VNSbd5x7fwUH2667UK6G1pKu1zf4LX",
  "key11": "2cr9b1aNNNaetJtneuFJmRk92kqREtjyTAFmwcgBS3DbYZjLH3jzSqDxXMBukXHMmBYvNt2fsjFpWFx1nN8RDMcE",
  "key12": "5J5kbwRMerqbvskNbQehrcLxJu3AccqHJLNWhm6uLp6xgSMbtHMARtCEd5LPBkwQq51iS7xBb2esYkFRoUM2zJd9",
  "key13": "3t2TgrkoXzG8BbTvijyyEcj2ZTiJZb9LjhNgRttaQzBK2KXSHQuoZxspXeNjwsy7sbchDgkTHFMPqytZb5v7b6f9",
  "key14": "2XtFpnx8xLnGssiPCCdvKk5cbbX45uhnLtt5ULvAmszSnax3zsjM4EkhoSwYbRVXCJzM9UZoXaxc8jwQJCYaHJB6",
  "key15": "zBZ7znBugg5eVSSvxtqLB7jxdfmXfyDYTjBgJLyjpRYhfDUhs4GxZV52GNYJ675N9fW53XmVFY5KfS47qfKxteY",
  "key16": "2t8jik7mqHY4ZGftysT4gho7B8MyYygGHnMBRyLQnxeFUBgxhdWWRYUFqxKNTc1ZPvKH9tmzmawiHbTA128SfMTW",
  "key17": "3Zf9zrVopaKsj6hYoqWkVp4u2248F8AQqZdWcvtN8NMMvXCoBTpJgU2jTkkTwzKqtDosqDxhWQjrjTr9ugzBGtDY",
  "key18": "Qy5s5eqrJ2kLdVNUUrd6pQ6ZZ1odXRGCzgX7LaM7HTB4eyDrgpxnXrG16qJ54JKGYrehq2XKY8YHxpNYHX9hveq",
  "key19": "4YSkMoHxmPa6LoFFF5srPQYW2w9Qx8tDaQjFgNVopr9b7JXj6Am2mUQGmeu4XJHTRefdjV7FbdNkMqXcD98gneqU",
  "key20": "4yuPcwWeJHJZhQEfo3bJvhY3sfGfCxawdbbAgfQYgUPVLwDPQxEWqrTxG4EF5gicKaxqmDmiBKhmpoX8jgLabv7k",
  "key21": "sstP8q7sJav3JJb3xxDiEpLkoSzvmQfALtBQWVTE2mbobjuSViZPWKq4hwBAochQSuGqu7huY18GdEABPNyKK9E",
  "key22": "3jXwboD2DfGoC8RyGotPvUZPkM85N66bMcxjowBH3pjN7kZySU5t6W8yHKuqtjKuSf3CVrY2PJNxV8tP8muei4Ud",
  "key23": "471zbmsEXU7AvmNq2UwydWdQXfinh7AFptL6QkHG2zvQW3r4qzoPUjVRdb44vQSdR6MT68adXQ9fyeipqrHGpEYK",
  "key24": "2coaBUNp6oR14uEeiXudDxrL68twft7N3aCQ1yfW1RHd6Y6cFq4Wv6SW4RcJoAACNLb3MVBGDA1Z7e37oSRJR8Te",
  "key25": "2b9cFANWQk3i4n6joK5ptRiJ9m5udXdYwuSfaUpTxcMyc9GXcbx27v3vrvkao9GQogFhjmzJZ4xN1TkQkev9HXCK",
  "key26": "GsLocz65R2YJgJsq6NCGxHzQNbkfmjHNnxUHhb5Vu1nZYqTZXYrVQVFutafDYdjd4pTNzzfXmwLgCNoNMmJN4e2",
  "key27": "3TTpbrQeMkgL4ZwmGvzuCHiUmcTDRV2G5EAe9Nav3Ygx9dLveFnvm2ATrV6dWeqYNXB3kr6gJvRKkkdQ2FiUsTYe",
  "key28": "2L8DpTh9U9ivZwS9GkiCw6QxtfgizUFzFvosnEn5gHPNB627miy68p2tguzhqdswNdxwfmU3jvrgMvsRM7HMcbMy",
  "key29": "5arJTZfrD3YgsLjyKFWPSQHTiR5Vevmp1LoF9Prt1YxNSASHcfZNCUJLPcQiod2o456Bx3sKHN6k7JoZrySXzhKF",
  "key30": "4MmqMQq56fyLvv4RCDQRy6iEA9JhTwgsJSrg9qwK8VGdEVSYCYahD7bK7LyT3Jgt7tqvCCtmxHR9awSzcyZVkpNn",
  "key31": "1ruAKjEMrULCkp5ssYihocRiek5up1hyk6qbYNmCa58w8XU15hNzzKPVMpzewrvd8hQL8ss4phMpryUwhVxUTAj",
  "key32": "4sXhTNf2y7iUkaQ8zEHvGwugBQT4MWYry7eVeUJsqBoGVE1HDmNHeUG43TZVRJ76i65pmvrG5837eRrCnbHnLXyw",
  "key33": "5csPgKvwYqNtprEZrtAtE5WZ9BLTtQExCPzFRnzweSgdfmCjwunAyC6NoMHHwJ3aZ6Jq539hfBdVKevsxpNFdreB",
  "key34": "5EesxuN9PB2BbjCQEZyjk9xPnPBvkxtAJaXqqKMjQ9YbfaXYQaRzbKsfkKUNgsQ4tFndHZSvCUwErbKordXZb7YL",
  "key35": "4FTCYTz6DiA5zbW5r4wDHgYdnKpcq6xscJoQxrMA3DJWDCTy87tFPCfRv3PziU9xzfiyV46odVXtu4J1seRheqn4",
  "key36": "WEFxSPER1J1i4oMqfzjuxjejRkU54ar1wC48rWVZp2VDcMgsjegrvinhTYp8rtZLScWoCcjGDyoysa9versGKVW",
  "key37": "4AcE5WB4hpFdt4Srwo3Yvdf4gD7PYnhyfZhTp9A1it1av4UBZQbYhu4h3dvfyuSzrRcst82qybJjnaBhrbxStfTg",
  "key38": "67iFaPtHYWbkqdG7HNYCdidiQPBgWnvMHEGg4vH7kSp9B1X9BpFtFNPJkyvNSE8BKXRMpov8YRBDvLGaP6xRjrEr",
  "key39": "61WUDGPfcwkgPov2LXkSZXxw6K8nYytwABsFBFPqpAkx5mPM1x6Ed8w5gfYnrSZVEhM385RHGsVxYbu82WeFyhcF",
  "key40": "2RgRg4SKuXKVCdXtHH5bVahAMB9yVLXzdciTuYvbKrRKuYbb56ra3SmueY8ovcEzHGLdUBESLNqJceeam8xzWxCA",
  "key41": "5nbRWWbhr5Pmwc766v47Zk3ADw5qBKo3sBxf3cD4QYWhaEge6BmaMwNg7XEhS2pBysn9TX7aPtksrRFhDrtTuG2S",
  "key42": "4VNxtrqMme4WiZVu8C2pBBjmw4aMNqBc2WJ1qh18dfJ3Gxfq2woHR3NeZLijQNY67VcJgz2PuheQ4n85TVqXqjRy",
  "key43": "3s6WuZ8gSQqMuKvUgHFbuvdPx5atk5rGEqcfwXL5uZ5FoP1fhjAmHTNPGCeGaXpLW5VEdHgVWSzKkxrxEsVB5SqW"
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
