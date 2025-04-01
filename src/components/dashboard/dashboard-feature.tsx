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
    "4BgP2XeHN6NqADkNAurAww6KGfeqJhtiYUdexdE6jpjd2hYgipi8kv75ztuAAHq1B1bPEaG1emUCqrS1oGf5Qoop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "632fDLpsEPQpRrh3j3P6ZhCm32XttLG6szNuvaejodpLseyqyxtK2wtaPyxArwwefqK7YSHDrHsfj6KHz22YhJKL",
  "key1": "31Jvo1vPiuBur8Vobdh3bnKAQFrgnWrEwDsH1TX1mMXS48EbNMUjxPGacuFNciDu4a6qgmvLCP73aFSer8fkFQGu",
  "key2": "3XALLpcrbWsQjZEGQVsH86cJKsub2Br9oswwMfR2s1zGuSkEup4RuVqTVySYm9dudPbh2nkwQgp7VYgTWYTcUNV9",
  "key3": "4q3FroXVce4nUXcP91FhM4app4w92ov5aQ9bUTR8VDcPJiLVi1eHKy5wPZz4PQ8Fgwb3SQGVEecnRQfrLkg9Mdvc",
  "key4": "efBBKyEBWvQDpfxh3AUsHwacKE6cfpnVFkMCxtPSUfggEhra5B4hMzpL7fzxTNi7eVPZKCxT2SApbkgtHkEsvSH",
  "key5": "2rRGWWLYH8UFNek2FDpUtVXHkC6PA5zvNWKa5mEcjNs6p9vUcfmBCbbQVKK2qMuWkHacjGSxE4QwkFYcFTapvBD7",
  "key6": "52za3iuAAXEhyRXCypP5gXSvWrzcKUbHH6GMRGNAZpG6v1FLg6DCgD5Mpv7QRBUHRfJGwEkgB5DaEVQx6eLqEJky",
  "key7": "2MPdhVvjYicBG2syuQgRfYUhi6ficpfrajTkHeurNwB8gChhzznoqkAvkehRvK8dKzUHpbhPRiTVuADDAWsybFJR",
  "key8": "4Zz1Y1QDGYqmg6jex27CaACFWcYGWWcCaZZdQkYzz3g4awZoykkynhRbvUmjS1FsSxc5dRPZmq88nYxdX3pZzLRi",
  "key9": "29LS6eHWJbZU5NpKMogDSEVAqViMDBCsJbfikbR7zL9UYyaeHkSWk2uXeNjH2Qu4wXZqH1Wdg3DgahCn8ZiojPYH",
  "key10": "5UWVoaYuq84Rug16WMC7Q8tRGCr6oUEJnLZyuLKbDNYHkSYRDBhxATrNBZTmUm3rZjbK7bBCapm629yavdjy1Bns",
  "key11": "26uZGXBzMRrPAQuoTop5LdgiCoWJnh3rbf5q92tFNLex4q7ihBBSZ8Cf9vHDKvExQnE56CBwBAuyMAGpEvaCXXEk",
  "key12": "5WqsM5R7pdHZNcvoB5BFZvYAVSQNgajYa4T8Lzgx2MSJovVAt1PXySmhgLrg4Us8ivx4MN87YrAwpo4vXY4EqUq1",
  "key13": "2VFpocrkQvgpTN8guGD1tSjg7NkSq7GYK9PeTNwN6sMZgCRkeyuQu6yk1HWLNUV4gWPy6kVFbAjZZ9TBkQCvH63B",
  "key14": "5BoN1hF1RzrsiB2tnMnsbaVNTAb9d1yUA1viSVkJ6RFS3v25sU3PXhdaGSiSFVLybZW6eTKwm62RquPEUdLububk",
  "key15": "2UVHv3BbTChWxLWNktEzyTmfQop1d8YR3cEoRMdbdf4rM6RYRvFVwK7fNLDjXGtgU8tv4CCe7VWzxFJyvo4tgWth",
  "key16": "fVsR9qQwjUKvds9Kj2RVPjcoEhSotPDMKESfSDmBgvucybo4DVUkEXZCxhCaWsxK9uiNMKyqpApmQyYs97SuhUW",
  "key17": "3LcMUzXfQsaKG9C9gs2zdYPpiUJLNraTTF3DBm77mNTdxQeSZezmt6SR2fQB24LFMJY3qZSvzVaNrR6ZMXeUGbA5",
  "key18": "3NG5xAypxfR2GySYpBWvmMj3iGBchXz3CE84aRYQ2AQBixvw9qqtn3vwqrKoNdtvs57oxXq8MVjdnSkDDFuoFk6K",
  "key19": "3jJKkigKupVgBKveq7eSy9KByyszD5xU6gaqnmLzCUekc5U5fs3SJszFVcyyuQRmkziPcy3kbhqvfs5eSjNY7tTQ",
  "key20": "3ZWMA6gGeNi67NgwDkio12EduquqnV95rbryDu1NSzkTw6LM6NeJD9hMF7GQYaqf3UCwcPbckzoPcjAJfGA1uZJ7",
  "key21": "3vrLDQhTZLSLPZxGQhBwtMeEB96o1pJZi3WwWr5JkiThYn6rJt84ZPdN3iXQEHuZsYLh8HpFSoJuHp4yUrCKwB4u",
  "key22": "5xVavyJzDnpnN9yX4CNanNGoFMNFSZUZkkeVzdZH49JN5UhdngqK7hE2auCgJ1pNi6Q1AMKapDGWHNpzXBRaRUbH",
  "key23": "3WKhQ4qRDaUBMHZDJTproNNXSwMZxh5j2orarmcxioFPQQ5hbG4SHwK38b3CvYtVxpmPymXAqKpyBCpmrVHTq8az",
  "key24": "jq7sWVWCHqzNcpKZivFcqh3XaTp89hwL2U6FHcPbmN4ycjaAZEQKbL7j4CyRDX6Vg48o7N9wir7humVoTA9iS8Z",
  "key25": "5ZWcuJEHAPoZNGpYtLBn5hPzXNcwb5HdGNnd33P1VmsVrF6Cjs2xGqYFbkq4tZRdFUfnCCrxWPacg5dRwTMgWa3X",
  "key26": "Goz7bCSvAFiLHRKB9QhkfKQQ54f3BKnrbHsfHpBMD2Utu6DNVLCCbmXEG4KMWZMbfxsVEPjLpKmAqFZ1F51vkmC",
  "key27": "4k7eB3KGw59v6U5ZCpgNwvN5bE3wy9pZCvjApzM6JhLX6MWpnDN62JrQgJ1r4hAR1GJeopAeABcfGH2oiasP6uuc",
  "key28": "4sD8HVdcbryUrhfWF88JVyo2bWZ2hELaojG8bpoSPCvjkYNBZa7pqAJDBqniTgxrXG973XhSCYW2S1EeHCCQ98D",
  "key29": "2ib5VKoX1JTyZeMQbGkbzqwx9kmZUruRgmcbHeAPfGazfb1LMPLAgqLxEEQ3eAhZo64TepBjKMmcBHLtM3mFjvWt",
  "key30": "3WcV1RR6dkqEkgY9Pw9By9zX8wU8Cx5ivHcMvCnkYJg3Mptwheb9MVHw7B6HSesW9fsyqMUhXuFeb3X8UWuYWtNH",
  "key31": "46uhTuqycjWAUC4dCK8yKw1Yu1UbXwNkwSJKvjPTEnbK1dRBj3qLC5TxFH74SN6bvfSXzfTLjvoWhck41F5VXaiw",
  "key32": "5PeHTgmp3N3Pipcf9qHUk3owGWsANFdX252p24gPAvEAiaoLYnBLJWXhJgwYWtTejEiJYur1NUUzJFWzXKxWmssQ",
  "key33": "5jTpktjbkJhiP759W6Tjwrk8CqXKGVNNx69eDWcm2tpRNSnKuqRY6Kjr8tdmtwatpbindPd2EpQFPETXmQ7FXfPL",
  "key34": "64MhZZG61oJ5PgpXZcJAecNtWSNzvwRKoneMubVsUTBC1FBo9Eas8crxeGqh7g8T1m7wU5KJLbsxHM9w9hHibKSF",
  "key35": "5ZzxgyrMsmTPLPDQvoC8zBVoZjMUNSdKzdM76gBPWyQg2ceL9stK39QZ6k3F7ArzvUZniMhgcf8Uw6Y7YBmofKA6",
  "key36": "5d87L5R2vmHmYKgDnyYaAR1Kpkjwp39wBa3LnH5KbsXmQkJqc968T1DhkmoBj4a1gu1owW77mYPfKcc4mDDBwq1k",
  "key37": "3GJaGyFk6DCZvmDvTHoEauyyESiybRcxxv3E6kGab1ty7yhE5nggYmMXAZ6K2h2gGD3hN2cziB9WYKffRhTPG6cr",
  "key38": "27APXNqkAdb7yocyoszEZiLCAJkgx6W7wXzsBfXu7w8pLHJRV5RQtsJPGRkwBgkxkoioL5swcFJZYSRVYT3XYcCG",
  "key39": "5Ec3oMEj8DuNBGr8ShGAzanE7DQRqtZASzbbosdH1nr9VNKHFtiyGUN94dhBN9MK18PyhcWq7roDWm9JuMdSSwra"
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
