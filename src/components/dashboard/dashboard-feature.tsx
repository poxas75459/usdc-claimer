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
    "3umNVNkGFdVpX9nGVXTyAJj1V96SQYHTKbag28JE14PrXQCs6BWoRSm5Vw6doJNKGbh4ZCVQxEKeUZDhevpe28Ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wWVtg3bbSosWbKo7cDD8VroaL2Num3uiwbdgMBp9jkdcGmrDRVirQrU9sRtpSbDQZYLN96EvXZ6uYS11AmV6qb2",
  "key1": "2Pu8HJMkVtwY7RyfrHW7QCcBFCkzcn1Dhuo1Jsf5PzhwEXKcYdAX3Fk3GKM2ZcZpJiR8aWHAd9hbUvqfrhopP1kg",
  "key2": "PNc7QeVfcfTqgEKrgCXvVmYt13Hxd8i3XiXTRRiAGZdfq5knZTohn2PeVUXGnPD4QcquZJUQLtuespSATujviiK",
  "key3": "XEbVifMAWikbkdmTVCbxusha3d7WdfQ3inahzCGgYxpn5go7NudqvU5ZQEWmBk1YknsfdCL9PwZXu5h4sXApcvK",
  "key4": "29aoykVKk494FSyiCqcPNZdgqFsp9FyBgF6ncev3Jg1Xm5xssvvLpHy1SkcH6AXoigu1XhgCsdMf8woCn3DJujsa",
  "key5": "4q25rPkLZuAThupHbXVJBpPkUuMVo142UJdbv5L2ntLh2nLnu1DrHUcPFdhcabUjHYjCXVwDooLhb2QWCACzy68C",
  "key6": "5DQhkdX3pdHC5JMYPWxq1NwV97aihQdFa1vP3WfmYm9LdaEWTAi6NQaYhKMASLY3qzcGvaWvDBHJeYp79vFuVWYQ",
  "key7": "2XyKPCRcoan66cWAuUCA5kyvuxuj7N4kfsJQKmoF6DfvDgpnqtANMZ47Vy9CjzQMCoHFDebPp3gZBER2zcE8QL9J",
  "key8": "3EZNJBfrKUEkYvY4S4bAU4xKDSQDgAkGV1fmnQt7SmkwhYSzmf1FaoVJgTQG8ZyS974LYN74JHP56rjQMMCtJBEt",
  "key9": "3trFad5sbfg14LPSCJkaL9u6fpXU8jUDQfSgYGYqpSwgxdATHmD1XY9ZasLMT7X6MMFEsBU7x87ZzqkK89QRhBvh",
  "key10": "WKefDEk8z57THxxMCZyyrGkN2uAPrfRobpK8Cqumxyb6u99Chad8YFD8hJzSb3a9bJiHnitSgQv6tchx3SCVrCx",
  "key11": "236pR2wM8ZtpLeGyMBsAis4zGpWnUFMTGo7bhjUynycRvqTy97RSAYH65PoLsErApZkbVGyqi9KAhEDyshU4FKH4",
  "key12": "2JSTZrSrV2soL4WPRXTkQd5oJxF1UaDiwQ2nKk1LjPDadKkKeyB7Se8vBiZV2gitTamVfnuegjmFEzU9gkq15ET5",
  "key13": "5sq31P3GfWvcumovqCC1nkQHBq7BqcazrsCc91Z2jTmTu77K3ogrSRv8pibZSWi7qfo5Jhgc9CwLcsAfAm89NT8A",
  "key14": "33iEpiYv11HvXbWFG316pK49dNn7frcsAv8HUGRDt2pcVAT25xCzaBrcATjeY1nAQtQ4G3nUjwmCpzyDM7vVKL1E",
  "key15": "3sBi9A35QrUPDX93RM6B74tLz3kHteMg8Zqy22rRw9aetXW6WZCWsCY6EJWafbC8DE271Wsf1rvfFkghgpfcuYAG",
  "key16": "5nB78by3PTjJ888vauGWcZsAheyHE8ywxHBac4YHxNssi8pM2tPASbXpFikan4y9cjAzdYsDUQbyv6BtPZU1YMTd",
  "key17": "3EJWuiknGGwwQgERrcGgTEd117KNkyr6cb2WuoYKbyfNJYDqgYx3sAyrRUkt2ayWLT2xBzQAinMtX55c6D1xdybk",
  "key18": "3TsqbiZKsbS1FpTKCkDwf2Pf4aGZ86JCgNfT9jCfrroyr6resxuyJQ7NMY7MhUUqDoEcz68UqiYhv4kbJaGTTxic",
  "key19": "2uQLpQxS34TXTDq8mgHT8cECsGouYryHNp1PTtuUa4gUSXP6jcnDi2jBGsbuUNMmKiapdF2QwLZdMSxKhN2RNUJy",
  "key20": "58NJd9Gk5YiycNMVVWy9Gnm5H6b7m9MvHw3w64Lwb4NEYVujVJha91oENpjkZxPd7ErWNPxyJWzW7pNE8Q9V2GT4",
  "key21": "5WQWc7C1g8qszZeuotvFVyHs3hPHbdb6FjrR5HA9ouHtw9n7WBdQ6Vzi2vwbV4uKGap7pmZpQvA5PUaue8u1LPqX",
  "key22": "uyLree8wZQwoZLWPt9GKpLLTCDB65uaxpHJuu6Ek59yZ78URxy74zzRKWdbRHZBidmgzCFeLhrYUdXjqvcmaW1F",
  "key23": "Yn5S7JfypatDn6stoFLi6MPK3nwDnx5GdkCVuPVGCph1CBgWN8mH1p86Kr1w2TA9ZpdSQ6rmFqQmTxLGPJHfyg6",
  "key24": "5wCR4enEJWFUpDhgeCSTtB7YLErPguZWv5hTigg9baUbSQMmVm7YyPP6JQHgoWT8EBP9SEkdodop33BBUhWD7AuX",
  "key25": "b14FyAy6oFBVe5PJYJJMac6sDHLB8LJrjg8TpMxJ8Dz59XHfFavNfrDy3E5hx1FNcb94JYCPEEKKcsR7HhNU9XR",
  "key26": "kkgJyfxeYi2WeyHPEY8VndvUxzETMSs2zYn6XNQLgMfQ6n3gPGLe7r5TQpxaD7nZk52GWSkm4a3u8YvVDBVYaar",
  "key27": "4YMbQ1TjkBb3aQhbQdQGugmayX94AQ6in8kfAMwqyKTDtq7cfadRxCFvwN2Hcb5uPpz77mSq5o71n7SEqxNRBofp",
  "key28": "4LoGZ7voKstK1ShMdDNQzzgkng88tqsMWEPmGyYjMdG1U3ZZUhHfBj3f1TqzAfE2dj8qWHEoqsgWNJosynRCoAZW",
  "key29": "4Ug9mphPgt4weADfBZnd7Wz1euiMgCgyCHdvEzdfETZtXSbZh3DbEsnrDjKc97UxGdQVdNueRcMu2u6nPC54XR5k",
  "key30": "5W6BF5LjmJ7fGPVSmdCC3j7FkqbPWUnympDJT3u7zr7db7J2SYM8WvoguW3Khgrr3GHsurAiqzPGaPDuL916inCp",
  "key31": "27YYZPcYppg5sAdRsUkUi9WTaA7jQeUd88NzT68o2zK3w7RCe8xMFXQtLVhN8vfVvVApsaYZTtH44W12s12Psc5w",
  "key32": "5sbXi6mL8qE2Q2uzeg29eGmsxSZyqYMbEuM3dy18zMPTiFRYC7QzFKfGhqhMXzRVTwsR3uhQcxMEzkFudyx33aRA",
  "key33": "LP5pMMYroKbzaU8biUwDjbq8Eqgf4xvKd8DLXqyjHVLEzkbKHdM8jZf46iu88afRmWvjMVdgwEswmR3t6FXFh4E",
  "key34": "4ss7gyDZNrK3NAJtc5Y1pQVRsPTQGkU22fsN4g6UfBcVjtYoDB8E6J64fPZMPs3etC3fc5E98NVnhNwRYzNbiw74",
  "key35": "4GDFHkJNt8pTTf8Uowj7kngn7Machjqn9Fnb9pSb8VX6F6Cr1AQzS5HWyGyrveSQwqcw1ATq4nCKGE1a6EbASbeF",
  "key36": "2ibjTUhbHiEyHTVdxKNfP19D4jb2wKzzizHSbdXfqhHTY942nLfVinA8wLStwwAYmLiD4n3RQF7KAw73dQ3tzQ33",
  "key37": "3yWxpXKC4RoB14fC4x7fsAeZJUh7MHmMNJGVLMhRGzXiVPdiW9cYwvhEKcX5sCEgez3o4uDLZiVKHA8zDwTW7xAE",
  "key38": "2eyMUoFHBFk6owRxNyxcfQY6vrPP16gXCVPeNSiYUBT2Bv1PLysTVg3ZKPyzBQ9FguBJPnRwHP1VLXzL3zcKpBtQ"
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
