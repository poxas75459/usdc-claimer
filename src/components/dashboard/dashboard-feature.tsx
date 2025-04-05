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
    "57cMHNmfs23CuzEUUyFgqH9cEvMEXFgF2uvZpGu7NAMMDhsMRD8yrSRhchFsFv1PAysEv98uwtUfyxH7vkkHM9ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KXUmeaW5CPoAro6w86KYmgQRZuJ6UFZsw5Gk6nGhkgJ7r1xNsHtHCoeipfCiiJBQNB4PSJr8Nc4qb3GaZPzcja8",
  "key1": "4Nb5LpKzRcXGGc3ns2m6nKgqTzkKcnvUL62v9ahvUiTSCBdUGEs5VQgKdArU7rQSDzrV5gpBhVPG13aqnVZ3moeH",
  "key2": "5ivKeatcpL9132Ks6bUSEnuvoTKu11nVamHcM2hiVHzA5HQnhJQkqg3ciJyPL4wM5fPwGzHxaJzatUin86wi9Qya",
  "key3": "n7R5P6qrU8xnCUv2vePoSBCoDgD5ZioKETA1Nu6PL3JxHmxUXAhP9nAwNi3BmPCAHznYKPWT11H71jptWLfaNq1",
  "key4": "BkLCBLQBM1y64pXd8rEhpq8vZmiEumkk6kqKoMp8622dAzS71aMrmZ7FXvZRm2SZ6nxoF2R5fPeX2kQkKBcFX3F",
  "key5": "DpJzj8LQsWzUMxVQ8quV9SxKnc9nH4CH3ho8K6pZ8DBud9DG56LDMxyfMWiPuNycxix6zuNXE2KuAWuUVGBc9CA",
  "key6": "4ziE8enHMGJegUFgFcqvVJW8w9xATAra2yZzKob6FYHBepjExHt4VTuebWANo8RpnTvn59sEcL8kkATAmqjKzLVF",
  "key7": "3jb8LNRTRmCHZT5EW1yDCnv5XvfdKhoW8RFdPrgn341hfKp9DjzxYY2As9mq1KpYsiXW9r1W9cKEkgYRcQHprYfe",
  "key8": "3qZQDYV4Ur2SfEiVzvqAsznxfPWS9gJMq6s3X1NFF6TcQHGxPFCS6E2xubRsqVe3Km2i9Ls7AL3TpWRZ4F6qytB",
  "key9": "2CXTJRDJ6uDeT3M1hXohNQNQUJiYFGLyt1AfxcQ9rzRQxjmR39KbSLumhJaVtEsanZWWVzG9s3gJNgi2fbULXEw6",
  "key10": "3Sj2sTXA44fUGxo8ZA1pRSKbWyhYRLjXy8iFuMBP3KUwwmGcp9n9UwPt3sz52keWxRLC7UFXrG6PuhEU3UWsZY1V",
  "key11": "iiDb5GwJSdanEpV9UeHRgZWvps813SkDfxbxfKLmpefbeLDjnnvB6Znfw1h9tmUJUvJG8rk4v6nuGuwCi9wHzPX",
  "key12": "49cgqWFNisCPLi9CKsf7a9ZhHFntWLCYGp3gQP2ccEHoK3BGVXDAZLhNGorw5a5UXdbeRdkJvLFpnGhnr3HUTa6B",
  "key13": "AzdT8CJVk6x7o3AKu5F5RMeQAx76tpSEfbB886FmHxCAVkW1LpBwq5Addnum6rwjwHXk2zT59Hc483f9d1Kq5Xt",
  "key14": "t7kjg5oTgqmXcBRGb6EbCqEoj91asMKswPABbn4fMWicK2KLVzk6poxQYNVSEWSwpPqf4Jp9FV9UGWGhGeMUfoo",
  "key15": "3T1c1xTSW6Jchu1i1iyCkDUcaCz2cvnPfg8DNKByaxs9YDeiJGWKmPPSSodqkehE7xxm9F8F6qstmsoDdGVDejnv",
  "key16": "5iptSEVTNKk9PnZ8McjniuLvMMzdvMQKzYnamw8ifKNzGoVUawWrdBp27XM7Gd77WypdWxG5UVSMpLcvkHqVro5f",
  "key17": "5WdrHM7EAHG6Symj71KREPzE6r3BDXTZim6Bv1A2LcBBRVNkRLsY4t81F8DCvapPgdtpMDhYTrgxjjRVWPbnfFPG",
  "key18": "3vtZqosDZKzmYSifZXcPcccnCCasyvzmAdCKqw5oU7soNWQXRniQoCz8Aa8MUGKpGeEFn1UCth9jDuiH7sw6qMiH",
  "key19": "39ZeEpWAs6LGZaLArubiHJDrreN3xaB2C2DUZsmMQptJLNAKxepVdYqJcv4LuAWX94k3mX2oFas3Rgr1drP3jQn9",
  "key20": "P5R5sU7yEnrGDWGoumcVsC1UtCJT8wX4QxF5L1H4RSxQaEMwMdMNesEu9nagi6TYThHLnWpwHeZjsvhjpioU1FX",
  "key21": "5DaiyTDQDDhNCgiJZ4kGpfvMphLQxevaWAJtXBRGEz1nihF4gB7qSTQy18JoMeoK1aKEP4f7jQ8LU8mvLHw92M8s",
  "key22": "oKq95MBJG43GmdzsDCxoasAR1x8p9nfqghfeSDQ7FZZ5RfTq77iuX2gaSQNGJX3WJEY6f8D7DhiF5mJhxgR9rox",
  "key23": "2NG7AGJiGEjQzGhx6ujNSBdUipfitqABZHL1EsXcwN2GpXMpGC7ppD7TQC4qbRzSFaQBd4LPXLrTtgPv4jS9pVKB",
  "key24": "636ZryZt7dsMbPkByW3SFoFzBtmzYsYnce3nDm33hZr71HZMMf1x67fZ31dF68FMUKVjANnBjgVqabJbDfg5YC7T",
  "key25": "5WiybBsQBYiNhBymPYWgdNaZp26uthNwr3ADyd2M8bZSsfneBqceBsFdTkJeZXEdr2v9qmt2U4p8VkCqiyX4ZJTD",
  "key26": "e8bSPGAPnZwFH8xBF6BFv1fkVgAJzd3euXd59R7GQz5u2T7ed8yYtFmG4Gr9cMPQyygoGZECEexsbgBgb3Pvd4q",
  "key27": "2bhjXLd1e27SMgcFqFGUoeFotWzBo1LPWZYbULLeUk3nkdJR1pGCRoFE4xu4PE3Bj4zvH9czbE9sKX9Wz43AagZF",
  "key28": "2wqNHuuwqiPC14uxuZqzsANhf2FM3njphfGKThxLoBLVqCxYw9Yf6DVSux1MqoyYgkh3XRnt8DMsFDy8ePAnYaDE",
  "key29": "Jk8rPFJPicNvjPZyym2fiMQuGnfYWZnAzLkEG4B98iYLG4c1KUJ5WdNyYHsjTcz12fcGHywxb1PKNVaz1FEFmmU",
  "key30": "43BaotAawwEXarq4Km1ut998ufXP1sK2A7F3w8KpSJWDyBSJYj5qpnFVTf5itGKDtMToo4KfdjAtdg4VvZxFxdeT",
  "key31": "4NqaaUhRWdZ1kZN9JbijHTujTcuhE7EcqyyLUvmM4dd16MhZE65pUxV7eR4P4gpmcXt5hS5whHr4xaGabVpDVjGz"
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
