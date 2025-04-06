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
    "4T6ixsQoC3Dv8pEbiRHrmNL91qaDNheo5usgfGSeK2M9JpAkvZMDZH3PFy8JrvoUrSpatfT18A5ZzUk6My1mmVgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jHTw8g5EeEeV9Jh4o8xJZNxSUTkeffxZfee2dBysjQL4TBBxmvnizXGFUY7d1RmegVwsytsmoyzU3pXPhtx7YhT",
  "key1": "yhzrGnwBmwY3kikfg8a1mq2vze7Ujg6Z2KSNQzBpnABS3MMDT7whFC2xqZxFWW2fyaLKZZ7WGRQXjTmLjeEFL3D",
  "key2": "5Bgjj939bo2mavGefeFC1pY8t74xAH3duhuj9M4VQeLCPZd5YvusdbEDpyiXEbo8WQGdnP4H6FLiTzdPDv4wwAQq",
  "key3": "tQhMG5gkMUdLEUGay3BEEqy3NAVmCBh46FQKVQP4JPVFK5zftH1i7qGjMb7vPtdy7cByhJ2S8wnbYTXJxMC3y2z",
  "key4": "ppMxNzwm69BXWDGGttqK7b3st44CxF2T5Xaqc1qYccpvUWzPcH7eyaq9bdAmC5h4A7RNx9YxXGmRAxvvksfwMJK",
  "key5": "dwhPbZbt9dFF1qdLfQ5pWqbB5mEQgMdD9Lk6RXEcvD19WdPtfMtSuW8iqPndqbvamfDgthuXQ87YrAoExfcMhg2",
  "key6": "ro1vzS612e8rZnhXUdMTxjfECifBT56Lyn4esWaGTJ8XEmkpn8H6Sxmu8USsZn8uooY8eZsn5nh74ZuCQAaUXsH",
  "key7": "eBrYRkA9oDWEonAe9N5UjwVwKupJ8zLqRNtQ3ydmob5dHj7Md6ZkRSBGZcki4UGKuW6WDCtwfgWtk2vza55AS2a",
  "key8": "3rYuc1EHPWmurTjkeCMTqWJCucEKgQmumGkFbrkyHrJSaUehtjk94wytcLJvN2gN5Z2FzBZcJni2cctDxvJ9Sqif",
  "key9": "iDsHMJEeiYJq5D5ur7xZtxt3jmLjqfmCt5ybPhx352cZmLJKAEoPAEdYi1VWz6qHW5h9TUN4RgetckH2PyjEBm3",
  "key10": "2XtpxVPvUouP3HC6kW8pMTrFxLuxKMB5vZLdC1VTNKC9kbTPePhqR6ZoznJoGN6A5wCWSFQnTK9uSSDHtCiusLM5",
  "key11": "3NNs9VJnzYiwh13sDESB74S1KTwno171GigHzZ8Bpnp6atukkDqphYpDUTzTAqxuPzmjGmZ4iPLqSxDHhLj4ropc",
  "key12": "2oo3LZLtFUqVbi19sZpE8C6TRQtLif3j1vtC4gpHBkRjrnudH5SumFmXAfSXbHNU2QTrXQu8X5RwgzyRjmaLTufg",
  "key13": "67VfKVbRpKSJ3XAjqgphQJWn2wUv7YDpZrZXbCUFfTu2vvt65DMrJahzCNh78JQvM68k3oBSxK6zQU37EE2Y54N2",
  "key14": "5wJfpqUFGPFbfPV2pDMwgS8aD6RqcuhErNr4pdpgea1iyuswGjiJmsLj2up4HEPTXgA3P8B4PsGFB2bAZKgVecGt",
  "key15": "3F1vedHVP3U3BQWz7xr3ZJuU9cJ6EvDHbZkPVEhtDde2sEo6x2TKwY7ENbwuQx3pausPJ3SjcxJRY2tH8CquVuPf",
  "key16": "5RT1DbEKkELQ74uD5zVUpBKBi648kfsdmFXs3457EdPLsEocCad3X2ZiH23Fn2TCm3D9iYe9RfB7jqNPukFwADrj",
  "key17": "WyHcQxpFRfR4VhDDEoTPbfjtqj3gDt1mfHb3WTQGkvZqnKw9vqVx8uhYYZZA8xEorJpqUsYVrRUrzhEALeddJZa",
  "key18": "s9h7VoPBGtVm4P33qWTLYm3jjjcvYdTPLH65SPiDpeVze36yrjjwEDPKipqyg2WxK9tTpYtzkEn7gGeZAjtHzKH",
  "key19": "5vT8JZQn3fnwqCnARf5FXi6SdBu1k5mRAcAzdiCaYD2DTVoZiDrf9PkUmhSDemSyufQYNF2GmEhCqg7ivQNoWWTu",
  "key20": "5CYam5ckmwkbn9b51yHFkpoheTFDeAgoehMWuGqMURGaSr5iM3YGGsomZCM2PH8TvZsHQsR9ByCWYHDYQxyaWp5L",
  "key21": "4Qm86twdRUwQPPZoH2cuXQxspPcLh8u69Geabq4hVwQCGdC52fSmpaLLspHDset6qGfkKY6PPBvj3tbnbKZo6SPN",
  "key22": "2buyXkEvwBdTBbVtKVNJQHTXqzi2zxCYhyaFcMrQVsbDFVP1TNLsbK4w3jTh4zhme7NsQNYWnM8p6MLQBQLy142C",
  "key23": "5ZyoKoP2JUKTS6oyArDDym5godUtdxKYPBTLDDCotPZNNRYqaPAgRw8cH9VJVozmUX7rkJfD2sQtmD8EXPtiXs9k",
  "key24": "2kKssh2PvoWE5hC5GVj58eo4xczE42nPQ9eQoQyLPKXF8RTGEGEXa9HjkmxaMW6378mQM9zJbQDsY6WsAUw5Srhh",
  "key25": "53MneKqFXSiVAK72zp7NJiX9Hnbj6zi8jG3YtxNN78DkH33FX8KHPbyZPLW63GvPq3mtk1sMCvCPTubt3wvhNXuH",
  "key26": "2q7tr7VCNiYnBMHF4TyVMUe1eo198ZBTZAJWNbrd98WqXx1GRsypN1TQ9aUeJTtJ6XvF2i4oKXuTp11AxCjK87d3",
  "key27": "4a5xFok3YzuLh5rfhqXZwjUjjyHai2T48e72D1FSt7tZct3E8tnQ6YJ9PAF3WfjjVixu834mCStiv31QcLcAAyPu",
  "key28": "3Y7mspNj4PgMueHWGiTpnYPeuzNFVCkLhzD3oyC1ySpMQ9cQZcRbBuJ57g6VmpjJe2KXox3hL6qByabc35MUCaqb",
  "key29": "61CyNa4cuBGFjpifzzopnXGESbkrNysX4Np7zyJdWPuUWYbnSHfGeecvXMcv5xprbdUzWqHCchP513n55bf4S1Kg",
  "key30": "38LNo2MPBxAioBuRv3PjhdCEEzmnDtnw7A6ieHcDoBcATgALdf6gcMP9K43hRhbe3fHcfsCLV9JF8e6xAeEf8nie",
  "key31": "oyaT5JFZEJhVptn8qQ4e1hV1eg2wTPJ8RVXsaXe7Aekk5ES37uoB5YD5th3yozu5Uubjv5ZJq6XU6nrSeu31e84",
  "key32": "4KKzEqqajX1KpizMaG9B7Di2etZWbp8HyWuo4GZUxpy2Syt21jXWxCJoAfDAZAMSZ1gmhHK7JBSyjxW1cPqNU5xT",
  "key33": "xTX2DJSzhJR3bds48bT6nEKb1fdBgAR4zXhqrjia7nUe2M6PWLon71f2NLjxYQ9wLHXgeMBYqe9XyFAhzEqN8o8",
  "key34": "4gbqrDNeUdfqh63ZwEJkRPTeo3KYnM9NSFdttTvJzGYa3PoSdrnQhmaH1d8c9ZZNtC6Uc976RcDLzeJUm6Fbx1z",
  "key35": "RBzJP6F53yW4BU6Qzzkpg2Ndm2aZ1uDDgUa7zVktxSVibhoyt6PftKpwT1aJVJCjvTNj3ogNnh4tUNWpQYKZBmx",
  "key36": "3PQVBfeZfA6uBdYnD26ozNrA8Fo26MZNgSVkcmYxZRpbBsYe6WsyjQwp4n7RCMgwEWeiuMFCAmK6L3JvsG66vUbg",
  "key37": "obm9m1beMMTakxgX97r7Z5TwZV956KozSHbWyqGAzGEo2XcnXQuHHr7GpN9GBtbGNRL7HzpgsveHQpyVLJyfLAb",
  "key38": "3hp7wEoTTjZyaHjGUWdXfFVdPF9octaD3r4uBXBmnTvNaYgPdSRDuXCLrrE4HSuM8a6Mh5UWdpNA2Wbwx669r1gF",
  "key39": "N91NbaW2ewrp4Gvkb7wD5n5NifCbEicjWUquMs5WeC35HkDqmtXNZ7Ebv4gSYdEPG9BtSr8dDaBRFL8G7L8t4VD",
  "key40": "2PHaqfF8WW4LSFYd4K6ewWtPTAExxetPWxkMMR9gpxzfufcxVuCfho63NzJcD3WCD7nEGkbgnHYk1CBptdDxQE9R",
  "key41": "59aGTYK7Eg6zfch24WpCU5ZvnrkQsHxMKqfi5gr4eLeA6NuVFiKzbxeYzpmjHFaYKf1cCG8WV8PGho3DNq5N1quz",
  "key42": "5hYyxyg8AbmBB15G9K6Vb6rher6mbng4sBAkzQjEdQwLjbYzoXbb5gBKj2uHsiizwh6M1tuaTp4P5kAKiHuTEvDr",
  "key43": "2iGfBQt6qm1wi4nGG3N4g2rVDJ9bhvfqLbPUPKdzdJBXvnWqfnryUjjMWUmFYRvQubJZgn6JaFMCojtTuPDcBTma",
  "key44": "4Fvbc4Thiu8yNFJYEkK5KJLFvTrTwibvpprugaPPqDrmuyujAsfCjBefMzjGtiXKnxjSHJ4i2x1q1djSQynBqfem",
  "key45": "2ZM84qTAgmAVp5FbiFLFrdaLWVVWqD57SavkHhzM3R7wsuvCF1KXBbHf9fQcXSvZ9X5mQDySPZ7pmnvFEnfHAva1"
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
