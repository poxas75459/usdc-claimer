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
    "5Sogh9RxE5eXwa4Y7vFupNCCACoTTZkhrEHHfmbK53kTQRcFGgVdWb77bkHbhJwvkVicQKM5u5nzWKtYVr8QDpNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63rtujqtf1mxmVPYwaCK2rknbBCPMUmoF3wE38b2DE8XDZX21tuq4ksYeW463bsncXqjbnvC2e9fTHgzNkKKMFSC",
  "key1": "fpHqmYpNn8beamYPn39RWEAqfiVMM2aAHXq4L4feCjDNgCTxCfVfzAwmWr6wiVZcpSe5htFbJVRjab6Ear1ktUE",
  "key2": "4dpfNULJPRg8Rb8oJJBCRX9CXeTwPzZ52HV6R8hudw3NE3U9Eyi6pPztkhQAsgxJbECCYxwoRhroCvGFPKTr6ghz",
  "key3": "2iW86kWCfVRMNwj4bKsTLe95dKZeMpxMUSdijRiZAqCPUibkbBfD5k9wzdfy57WToanVM1D3Kxv6TbYUtWojVtHg",
  "key4": "3DWFzcGgkfiJoGS5wzra7Li2qFCjsrsuYfjXV95sQ4VfC5LamSKmZC6GNhjx8rVeaguYy3F5qNosvi4vmMoEmKkU",
  "key5": "63tQjyJC7QtMSsThGscLaprVMzXcgukooYaEQoQrLSFXcTNRU2KH4W8xfDbU2ruJ4Pk1t34pUCziGovqUpQsRRFv",
  "key6": "4vi58EA67LQsPRZAeEkCRFmc3mKfnW9QkskJiKCAFYWq3VrD1NtbrUGdVoCDnQorWFqVvtcqsPsvQzmDt28gWhk3",
  "key7": "2za5DLYiWFCDX8mFVZtbmCf9PSus8G14zZuabXyoQwJaKHekXYQSFYFg6JrisSt1yzmXiiunrLDFQRZ25qBnyvmy",
  "key8": "53PX3eH3E2pq8Wsh3vmdQmh9tXTBFgjcPSfE58bzpN2RgznPrCqGMrD9YVbsksFqFjCW4iKikfcPdmrVAgGitNd5",
  "key9": "4ewQS7nPzbykkSSjF67mB7XfqhTmv3GN3LpRJh3VDoW1yMCSs5qhCHjhCKWRA4ZK7XR7Rsho2zazeyD6kPL6DZzv",
  "key10": "5mpZfgCoQRzSBiMggBGxYvmTPRr61454NM9UfWTixRqKR9scayoKBoWHFDikFG7w4KTHuDzzL7rSidkmf2qTASQu",
  "key11": "2mLraG2e2yqvBD9QLVHoUtQpBT2f7dHsJf9FTxvVLoushmWPwGm6mJKTdLLNg3aRA3p8TDNQQJSdnhqTqjSPAUyb",
  "key12": "c2jUo9XGpqjP7uyYG4Uykg8yEhtRJ8jG9wf5gPCzF7nkK27wGVXft2uTRbTVZNKrr8g2SXxRoPTTnP5niF6AM74",
  "key13": "3vh22Gidr4XcRetWyMhR4vj9ZbYoeuqBgY9s7iVuJfmnDc3JLtD8okLxTQubP6Yagi8NdDXnpeNoudyKq7DzQciH",
  "key14": "5EQj8WAMpTbjAZM5RyCwbJJcGZ5zkPgsTYNS3wSLC3xNeciGboL3ygyiZgLYQ1j5kDd9YkqfDoeiArZFXjskX7rs",
  "key15": "4f6oXn7YZHvboPj41co65BmHugdBeNNaVYVq4ZtdSNxX41h94GRDFWKmJYseG9hL8XiP3xEV9BHXpaWL8CSfCQAv",
  "key16": "2LwmZCNNMibN17c9Z8iEdpy2pFmmtFwj51A7ywrQVtBGkmZ9VjhruPuodVSHkz4L2kbS8LraMpuiQwknAQ9LyF5f",
  "key17": "2DW8HBWhjmW8RaJsWyuPDYExoAVY9i7GbwDqn6r2rVE2WKYmTECzaYjM8XSh8qeM8xCLtvMz7RC1igGfpifEFEmC",
  "key18": "3VH43EknzEsYbcuH3SdrzXXR2j7MMGyffPEFEQNNLW6yMJfa6mbbtzTLvug52WwoCZ4gztEe6rRh2GjDWLmrMEmg",
  "key19": "38b1bAn2CfwuSnDgV31k9hh8tmtbu8B7dxTrmdooyLT1rwmDCAZExHZ6z1UZwykYMVUA6FD8HXfha5c68YJ7odgc",
  "key20": "5Hdtunn6S7U717REcyisGm6nnMEBAdWLoiKECASFvwEMq2UVyfwTphnArgwQbjfyMY4K8Fyjt6i1b5vCksQSTYUN",
  "key21": "9dRVZL1cH73kop8RaS8dGwoT2geohHG78qsb3jD8iSRo9TfTCNaGQLMYCyQqEvLkQXkMrLX1JbYAW8DNvJEsrG5",
  "key22": "5E54qssnb2gDacZA7gkADp2pjYmWM4PYpTwFyk1VqE2aYs14PgMWbwD5ahMxojJCsND6tiMnw2u6bgqMQbesePo8",
  "key23": "owkpqnGukXPJQSWqFsyGNNArHeJTqt5kjCy29pMXt5f5dvC8fBQycLmwmQTBqwYFEcWC73ENYWxqvUj4xJuqfNL",
  "key24": "55YUiLAfLv6cc61sFGnDidh1KQLKpP4nQFTdi2kkbzoJQRZ4VJAWR4ydyR4jsFddyVGL6HUQZwm9mR9ATC2tqqKA",
  "key25": "4uMQTTT4cQsjbJ8aMjJYkegv4T6bd4JAGU8rQz37KeNgsY69kawKwqpLWA1KoBpkgLBmQzG3hqUyktSxUqZcg5nV",
  "key26": "5cA1sczAfgWqXW5cYUY9zSN5D6Az2rHkLTQVA2NVr3MnGbVwfiCD1RYwdkEnTWA2CABnPgvAm76zjwBDKXuwQ2z2",
  "key27": "3erJhLg7CqRfJwwGxn38DMrpEckXpY94V7DiQRzNgFwFCdzzwC8fcXar73tgUbNyhKFYsBHW3SyoRjhfdinb6RQw",
  "key28": "YrSFh7PCwWyeBJBF7k2JdA5Tjw5Jr3EQgks2VPpfPUDDqMs9vAYfDyKuDgJiXPZU9izF8ukgyhtwayp3CM6CkQP",
  "key29": "yQ7HbnmG6YepfKRtLx3tUVHWpBa1G6eH1wRAiL6Z4Lx8zHhNnJxz51WTy4aGN2ypHREUtoSQ7hq3v7jAcCPqjp9",
  "key30": "53bZBPL5ESkQLy4kLh9WFP1AuGm7S3yFeQ1PZGcPsz2GCm5wTDog9ZnNKppKerFSLDkzwBSmLgWozFPiwaeKvoB3",
  "key31": "4dvCPSDHaP63o5aQ7mGTLcVG8JWze2UaLC1dxx1LXK5Zq7LhzhD6hTEyzBhvU7s6vnsDdrJZjC23W6iPJLbT6Bmp",
  "key32": "2fpN88XVcyXoqu3w2EpCyeeVXv7LpuZdNJeFurKgfHPzr8BeDDUD6yJ3vC8n89YoEiuFLoxnRQdyJCmm2Wsh6eyE",
  "key33": "2zygiFgnqHmaQTMd8MuxJXohqCu83QBsJRH5jiLEeRuMnMw4V85Fh29GgZsWF4TsVsttEGMHakCmLsxWx1C8dD7s",
  "key34": "4Fc8SPqTe7YoaETNptyQsayRRL93Qk2wZCK3kLcunLefdLFsvN2m4ZQy8ahk1syrFpLpF8wxgsVSYi89cq6TgvmT",
  "key35": "4YBLQg1A3688KsS6gnHivXx8BtUwEKKvM5HBc5P1Rv2bMaVHwdYoG8PnqogZwgz79sx5puoXBMFMRVhPM3g8ATj6",
  "key36": "2L5XY1L82KPwqFYPib9MNy7rbarEi92oonC3J98WUE8DD1AbEfpDEf9KQxteBRKKF8JVbMbB2xirz8Rz7QovNzW4",
  "key37": "4VG24C7Q19VhAnMgtZLzs2nYp9sER5AypHT9haVRn4u3DRhdBLGf3n2d5DERNootHYyH3UsGoWQVkhLShctJJ9ED",
  "key38": "5eYUgVRL44kJWDf9iKZESDBnXQgL4FmvGSuDwMnQeQHFQahqQdMf9NZ8V95fVqqQXefrsw31bqcEC8jeX4oiVJZQ",
  "key39": "4LZ5yDp65YQJ2BK4m9qAgJpBquP4EMYti3k2cSakpf9MXegzkFkZ7x3KzeqLCkh42HvM7TXVjvqxcft57dhxV8sy",
  "key40": "3YBpdPZZWt17RRxDrFK6Vvbx2duGrqnFZrmrKhSiaYYk9wZAZp1XvY3GfxbJyuntrpa3jXb8CK6LffEhEnp66Dh6",
  "key41": "4RZPaXGusDy5vYA2iVopsGSYDFyR5f6bVFw8WLCirsMNWVCXRPnKFex8GoJY1h8PjdGK76wf4LApEhuCtE62xmGC",
  "key42": "4ipUDhWDpPNqiBipAbhQU4oF1tRa9Kn3sLP4VfdMHKiVNBTmwo1SHQdTWWCTKHbZHFRFeZYQSrH1uEuZCys88REf",
  "key43": "b8efQTZZU5sc7vHbFgwTCyTx2RVy3FwRVYLbgH3fFfK66mixUjriPyGsa18Swc9bNaHeCPDHHEKaYSnoS5a2Wj4"
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
