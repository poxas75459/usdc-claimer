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
    "42HrfZaBDEouFRzi1SMfhVzygWea7RMxcgtbdDSn6NVRTDvHY7XcuJiaGRRpssXKFhAmBmjhYqTYpANaGpsYCtB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kNFgDDWBVWkR4g4XmGGuQdtzzHGdtuEAtNcRDeipkQJ3V3mYHhkwSGHbrhYmcvqcBWc8KqC3FEMxwUkYH15yuAB",
  "key1": "BhpyXJmoXMPvYqqXnqV222H48KhMBXPHSa2eC1eKJxUKkiLnsnmerQEogVyfGnU8AfqXYZhhKEaqsZazmwVjAvc",
  "key2": "3kVtSsRbvLnyn2hAiRMCfwGhnveCGGv3EAtft5T2ucUUhbgearoewjNXu7pXptbyMjNEWDKvLYynBK7WbNFKimZX",
  "key3": "4qzije36jv5RDLXVay5pZZsKVJP8Ps8nbnvvKncnCg4EDoeHi9hAjgt16bKWxYzvckrkKcjay9Kv42WFWF2Nnhtm",
  "key4": "4osz7wTF2ipkYtYuLGhJPZGWFLUJuckAqSTFhyDK2tTPVL5e18iaUj88YLvv5mWUnumf9wC4xrz9VtCkKLU8DtL5",
  "key5": "WXCqgMgRbSD8L6CPgyLevWhGoAsgB8rre78tpdBteuhmrfpneptX1YLSeCUFMgi1UBfbqTa6LZV4w389q7Fb4is",
  "key6": "54zr7D1pJ19BtzarN8nvE1vAzNreDwWKaXRgeabbk13JVv2QHxq5PDRsq2HxdpgsWbUqCNTtMb8AbMQm5WmmzfDV",
  "key7": "4meJgRVCLM5pCQhkcLgLkr3pWa7zxJ7jgGZgqMrHDbCwEbgA2PuiSJRB6GA2SpZcfm6z798Y8gD9WmoSGH4sE6hV",
  "key8": "X5jnYRBt8WmZ1auvt7AxJLCUE8QfXzDwpMwMY8Dqfw5npK6zdtzJcb7xGXZK6DgDXD6FFSdhopXysoNaj4uNbMz",
  "key9": "2tXkLZ2az6X3yGsxDQvD8YM5Zs5v3P1ygRXruGX6fJJawPMMv7ranFP6AZj5vrzzmFosuXz1LidizjjWftXyhmKB",
  "key10": "45WuLRxmFTkQvx3uMiDSexXitvmkVAGtMvMEMpYhDoanN2rF4LZ8hNk5FMaqg3yxqR4TcQa4ixMJYqLJQvSEU3gV",
  "key11": "mFrX75shMVrpCBUoFkQgCKMbhKcpd88uLY6worAEbUSrVCvBUUnXQc3iUv9ZR9tQsSsuJgmdiZQSTqmFXuy1yhf",
  "key12": "31uNo7CBnNqknrSykMXYqrGSMrxDr5P9wfBahpw5vYFKV2Pa6HgwHvp7U8bqo4YYWfuMPanYCTSEnG6XGPmX6DPn",
  "key13": "2Hnw4jSpRY2pEX9RB2FHrXmzE4bHhM8tDEBeiGy9XWhKNSrzUWL9hF6B3v66wvjjDwcczvxcdmNCutyXBu2qH1dP",
  "key14": "2GySCdERgGxP9E5BvArNPeNTNRzZRH6xfpyHz3E5HPThiyeFU8afPwYkNBqExjSXym6f1Du8qEKPCA9aw4r3afH6",
  "key15": "4P99BvcWGu4RTPVis6thineX4mzQp5RtydYyCxabYvHjUibVHKm9FrEokN2ibih9CyA2951TR2iaDZWwVXx5YpP9",
  "key16": "2XJsMQP2yNGmiWbVUsRmZUNJPahxRqAuXYkY8p4oYkJixUx3PhuAmqpHFkx9TYwy1NNG9zvQfJuuDU6SKBE5dzmi",
  "key17": "5SeoZfTV85gm6RSdsFyudHuDbDswH6Rawocic6DXQusGFxcA2Neemp4MnCXMioLnpLja6qbvXrGvSEMBGKLQi5xq",
  "key18": "3CByfMs8sNKhi49B9QhU53PMMwUSSsuCP9ihj3E83Bqf3Gdo3cFGAkGCdkoZQQ5rJdHvH91JQRywksCV8jHoJCn3",
  "key19": "5aBJRp87fkADtdwTcEsvkhR68JamZDpPcaWvKu3DDy1Fd9PkpeZAuwQ9Xoto1Ui894dHDqPvVzepJKBkaKkGw5fi",
  "key20": "xZ4fusoRKciQkJe4dshQrLAucsDDe1e65ox3keV4UusUj24gyGgx8TjdmzfwFLTkvLvtpSDvz3XqnUpZRrAPY9G",
  "key21": "4hE7Fiyi99A2RbBPzy8rYvN7xpBKBAW5tbz6RWRoGxQerjDWmB332jFthagBNDU9hDAu2jsC22h8PMcZwaV6QpAN",
  "key22": "3LrqF1zavrAFFfAULNgxpL4CK9rd7AxYz1UpxDmC3TVDX4qMn8kv7anzMzLKGK4QDRLy5tHHXJkjZvPx7Zm1veMZ",
  "key23": "4KZaLb7Nwz6r2dDSSNPcDHkj1FYx4EEZctDLQVJ2mEUZhyEiPezLFNtykrC8zgT89C7yenVk1ysRNV8f684avyYU",
  "key24": "2zWEWp2aCNcLnK1SECYNDCUa1MULedc9c5px7f3v7UJFwMDMNQbP1XWvecPgZ9YkYWBXT8M4RNLa5793TdTfc1pM",
  "key25": "3EvRWmn7fPF5fU6igVvU4W7zXvNfw9GeGDmsWVvr6TFdAWTWCYeTDRFaKwa1jzwey6n6KPb9cTpkeaxEE6ogSzUK",
  "key26": "4ygPfujYHgD5tV7ScPeS8rEATpZrToLPvjhQfCouSNaUD7AXhzNYL6ozu3XKj1zLZsw5SbmGqC4HzwScHZ8EAPBp",
  "key27": "iUzvxB4tShU9FLN67XvDRK68rSNZdS2DHdhc9A95DX1A3TAsM3vMNPUCtA8D4x8QHAK72aSTFYBwYitKiQyqTRe",
  "key28": "58a6NnPg3cfdkRDF1iURNuTVBxYC7vyfqi47Se7GHHypSkAxGcH6d4oJHfceuAnmKsiRWDm1odSZnAejgMFwrZJH",
  "key29": "5WZ1RNnsGt5x4aKaeKtzbYYAiL3AkhCPZ4URpWJ5R1QPNztHzXGJRusQZ9p6ZFcYyGu1UFQfRhfmSSrnSP6siRNU",
  "key30": "2yJdskuWtotA1TokaiQbMrk5SRKE3AHpKu5TXk1SbqCSHbTMnu9gdJRNcvFduSwj4gXMVXQYokjzfAhmG3mKThTE",
  "key31": "zQyBNLiqMud8fLLZP8NE92z9rS3hjCDQkLoeu7ZLmwZRfWpMKandDwYoEVycWZ4n2y53Rabkwb8XR3Vr6xfaELQ",
  "key32": "2sqHpHdswMMYMxpYSzAQLTDpJAb3cJJ2fATKwwcFjTvTE45pkpKwtV8pAePDS8QZ7KakChTcxEVasqto6eoxjuQm",
  "key33": "2mDfgJaZ2y2xYaEPWvnscgTA8d8cH68J7rcxxwSfe5sThrBVtZz1NMAoyct9zxPRNEgTn6dxh8j3U56GZaUJjNC3",
  "key34": "38ATgNmKS5Qfk7srssmHsLWxezcdoSH28zdh7U3rvhg5zAD4YaR9TRMzr4cYbDkgYsut29m5Fp4dsSmwTVYtqUJk",
  "key35": "35yYThNqMxYsANrU2S3Y258LiKaDx5Re8yHjJuBQ42cKvvsopwormMR2H6STMTxZYFb4PWAfoGAPziNNEqjx2HrX",
  "key36": "565gjnXurnCrhjph9YaTeTCYMd8if1oJWoLHazMj7jxSGHKWiGjQdpRCgLjswXo6JGar6zxXnRVRV5fET9DapmxU",
  "key37": "5rwzos1iu5M8JYJG53S3QdNCRwQTaQDjhVKrrxkhniSBwifTdCNZEXgHZwqpnMGRkoy193E2K3wDoeHZ4SMStzKK",
  "key38": "2FivX4cs1C5BktkKBU1XhzntT9ykMYQaxsT2atxvLcJV43aq76JXBdiZ9rsKzWKdCrTtmUqEEEWXng7mHYH7CwjD",
  "key39": "5mUjZpFBVKPEaMtmfUN8rDBzLHL9Tit7X3PKcsLUiYQ2AUTEZKCDCx6gMWnktGgATqU45sXVivEYXZsbHs78ppvP",
  "key40": "3fbWSenmoGW6ntku7u34QZsiYpzgFET5f99Pxww4zLNGNPGjz6bmgtezrerxdczTfLFjHftt5q4mauykPuYYS7S7",
  "key41": "2NYVjbx35PnTaumsmZ1LV1hvQPNE9S5fYpGEbGqzc1UhtzJQj4S7Br1WwmvvbHh7wAK4FHNzVp2DS1HwnCjPrgir",
  "key42": "5X25bJrRpD7Ro2M5da1TTe5wKPXdKoi32ibKMsWhTBgG5H7pJi1WgZ7W4ur5M5W6jxpJN3ZjDG9JrkHCqpBqCEo4",
  "key43": "3qfo8wbdjR1DjtuhsoRaThFAGvWhP8JBWQ2ctRP4QLPs7UcvA8hQiMiyHb8pG3Vv78itQ6XvBXNhGaGvvmAw7dfC",
  "key44": "43j8de85oFBFMg23BULCrca1PETC8xYyGT3FJAE1v6CE7cL4Npba72iVH8kKf2fK2E7KTB3LPyNwUBM2Kjpj5Qnn",
  "key45": "4V7Z5iFQzMKGUDEruzMMqQoMWHNTybAiYGWT333gVANcNXPNby1Bi5XsDAqxuHBtGt3VpTQzmFM7XNkQ5sBiW6DB",
  "key46": "4em5HfUR5qfph2aePBF6mEmmnqPAiZgvvhNDAjkPFD3TFH6JbnKFXVyQUoUgQHhzPmBHgvwp9iYs1v4Ln2rxY4XX",
  "key47": "648x12ue27Y9nBCAFThPvQt6JamkAXDCZVZyFea4dNZ1tWijCHkM3u1og1RLYQw44VBkYzHES5q8Dk3NHJ9ShzwP",
  "key48": "4FbqvVN6BuoFSTgErXU5uwxHd7e15GtToBc29XdcgYJSDTdUNNn5YfzhC4pQtJLEmx3oBrhNvCTVMi9CD9DMxVmP",
  "key49": "52ae77BS1PFN1uKpTH3RWHZrTXEnsn5aVMxJvm3hZa1m24MwGn2pf5pic8BzwEoL559HnxZxwWuyDVMYs5rN8QRc"
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
