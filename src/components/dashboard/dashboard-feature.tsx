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
    "k7xs4QbWmfbpfTfdZpEtw7X1mEP6Xq5EZ3Nd8HkDv4HwMywNUrSquuUPJfqU7dauqkqk94HTmWt5ezN7Z9zUJ5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TYNW5q1Kf4641JCevi4BW6LwasrxaYfUAkAcpYyLDBxvwJtA1pbwiDygDU1aU8Z43PSzgkVigt63qJwbatifYtQ",
  "key1": "6phiF7Girq3GwM5bujvdxY3SvHwbwvzJLwLbwiviP2jcfkckbg9wd2KKBpkh6Z1JMbWqWjxFZTXi3hYZJyJYVam",
  "key2": "4pCMkbwsu6z5CAj1hm1vtZUNKCHy6Nd3egWNxWLYApkhL3HpiLe3GcozuYq3Fde1Hvi7j2FeRsWbnwrcPVgtJwjP",
  "key3": "cwEtKroZBsPNDNHXfLodAbiwKaJ3Xn4WCqoqEVVHVrLZE4iCe6waeJgYzBKYNLJ1zuWX6ubkvByRfuyUXwjZr6q",
  "key4": "43qwr1V5gah7JiXdpwJQSje1ca3c4i3MW16eoJZDWakpcdNMqpMPiTL3wtkRRPvp5MzraGDqd5e2SEioJWwccpfF",
  "key5": "4MnS7inxT58UzBcPUZy49SNncKb1D1n3x7Kn73cD1aA11DmnXXZD2DgyaFTCPPawLbf47YxryHFQ3k8dTaVdMoJw",
  "key6": "5ZV16zbQVvYgJZkqTKUr5yM2JnXCkidcmvLUSQg7cyvc19YqpQt883coMjT6g4WYyNU2PbZSUtsubY9oSArGGvwy",
  "key7": "SfBt8qHFPujmNtLP4iTzx9ewK5j7h3PAcDZisqLSoJXMhsbpFkVHVN5Q3hA83Y1vVDYhhSmT2Xo6VFGcwS5c99h",
  "key8": "4tpJNc97vQ3J3bJ38BhXg2jnPbxhJdRqHXtkenXFkRZUzB7xREaq7SceBDnd9ruZqttDiRu8Wdh9nPHgG6WxEpCF",
  "key9": "3U4cNgm3mt1NT2B8bmoZy25zLXbP4QHBetDVyPi3rr1BP3BTPaPAqyZ9uUX47LcbUmPo9AppsvHWhCswbduMEoEk",
  "key10": "4mT4vATdrJxUWh8czDci5tLBEzCv3hMFeftvLLUq68GEFxpbMqEiTYHJuJtt2hEFemZL4wSma1dhWubHd4c3Fg3Q",
  "key11": "2fkJ8su5zHFqX9649jUzemyiFvrRxtFB67Z538Eix9GFmFJGvBzfzDS85wUkngN6FsPhGgCjCNPy6t9LuY9GQeWr",
  "key12": "5RyeiWFv7TwegKZou8WV7ZxV7iztDuJnE5jfQ7HoXFJp6Jbr33vjLXa9r5GqHnfLuxKSJMMaa25QPPmgEy1Br2tv",
  "key13": "7GHRcLPqdkwNyZVjH5WHMRcscqAwLf3jAHPfCCneaDTww6ApGZ8bUoYugL65evP1P2vYK8jR1CQPjsgD3h4QY4Q",
  "key14": "2FJvKxMK8yv2AhjrBniMouYRVtZnsE2JhSfJ8UtpMf26HBb3doBzLRwwerHYQniLGfzwS8tRLd1QD5NcE5Y2cowC",
  "key15": "4W4MqyPnFKdiLUpi5vinDWiS5DgVeHyy4JMEXKeVJbDYGvxuaUUcFnLSDnDDMc4TStJDVY8S3SaDcJF93mkt6jkd",
  "key16": "3GxMfeUcFRyK9vwWTaBrBgTZ3h9HkcsYm1vjHfrLsyTd5mvvLzghN1mZD7kyu6HNconWgs58VD46mmncQvpnSWYS",
  "key17": "4zBEUuUHWzrKBhCyBDooqgwHJXdegCiZTXLXiiQRU6r31kzdCgfEr5b61MtTw9NA5C2gcUyhVqCWT8V795inudeq",
  "key18": "nrnqfzwqWRgE92Q9bB2fm7zHzcg9yBJA1hk7QbPf1KJPk4JZssRvbjHxQAZM1qvnAXgLJn5LFJdkY8tJqZKkrkS",
  "key19": "2n9NC1qMDb2QvbfxE3PPisJC7ZvjtS2UMU9MxGM2PbTSHYdPqWKJJDG3JQw7a1a81Zk6hnGDCpTt1p47WSNU2M9d",
  "key20": "3ovZMvW15v8VNaW6ra9NuFwnv7KMhjetCVGBBeBAW75kxsfnAzE2pvE4MvfRjdp3xJ6y6w8cmJW2FSK7GWu7LXbo",
  "key21": "4QwB3RKTjXuT9te7Fcb1i8pnXpp1R94qSigH1YqvFbRsPy1v8TrX8CEVF98ShCJuLgeVCNZ9a85cJG81L5qnF8a6",
  "key22": "22oRssKxxgJfhY7pdNCxkzmPBNn9YGkkucJ9c47HJksDWpPvGsN53nPh827mJ5A9D7vrv3D7SUyJt8ZpPecNqG6v",
  "key23": "bh3RpLNqBcAsw1iwouHkxumGkBWFYQitsnopE3XvE2EnP3xSq4imkrEYDHiMVSfqm2tHhp9kEkYQGkmwqRCoYVD",
  "key24": "3jnK7z6rW9KUvoRiCQnCn6pvTLzahjFGycZmWPvmH8BGGDBZb4tiUDMJNDVxTeZxMb8rAWMnGeFAWxgPeRoBMar4",
  "key25": "4kkyW69vkV8x42X2Dg38ry8zJLkvrJxSSV3CF7fnmCk4BzSxk8452A8bWi9dMQobii7EXcxbweVjYq5zbgXuFAkV",
  "key26": "44gUozNLffdLb6vMo1P3TYuqCpNCdw2biqaRjMBcU3b2uEpriW2cgDcThMP48w35DXqH6fVP3Mc1Jpbq2pdm68d1",
  "key27": "4ahSmg9jUjdn1dn9iJgmNSuw3oUiuwQd23F5UbQTNJffkQ5duDTRy6sqpedWdNQthaTqwKcCH8tCtpr3sVh5nfdp",
  "key28": "62pZAzkerpsmeSwM5xLsnxpeceLmyn69zgj7m25EsnG61Joy4J3kgttybtS9Y72NDpVFaW6a2pSknZhk54sYasJG",
  "key29": "2euxBWwb9k6qgGdxpTVR45VwXssgqmiTYjJDwep4qhsRoEPo8trEsQqsFUEdg2wZcaz3WMoLtFbjtfgSFgx6GM1Q",
  "key30": "2ARMobNgeCHubiVe97ZMhGwTTthy5b8iNvYGt13H58HawUWaBWM2cUvZkK33NmbMhLsHYx6HgKaPSY997W3JsMvc",
  "key31": "2VfDdHgym6aPU63gEPbvzyGvDyhXAueY2kKrSPBSQidPs7VDDFNFmzYWSq4qTaPLF58sGZTG3tJgGszu9o1EyMpV",
  "key32": "2qg4XHiUSdeShwyNGiZid72DNwoFbzHaeQVzcoqzz9D4tZd34nSbti67VStkckkRaT7dRT8N9RcfmBqBt99YQFtF",
  "key33": "2BBMaA5vcSnthT2vcgZpLGypoV6PcCEy6NGZNctMq1piHWyxbHsDcZ8bWWWxrFrUhUha3RFTpGNXS8g17UrvNGZD",
  "key34": "4HiV6BfTC7BRqRDGrAvCT3GxG2zNnuhcHhYPJgRppsC5cyigeeYu6h5MS7Y2JLCEuAVjw28xSfh4dXw2LN8McsK9",
  "key35": "5Haa1rsjAST4N1ivCyj2Mny6kHeA85AyfPDmJdfAMdMbhrymr4cuRyBVaeAtYEzhgqoKxzmnCLocdUpXtyDFEMYk",
  "key36": "bxdaKKHryA85d4oKD12XGXNeXRNBzdbdzvc96mKN4CP5ssFYbNGWzPQRFrQNWHEw6jNtvSKdzCPUB9u5eaYaVZZ",
  "key37": "27NzXtdEWiwHY6s5cN6iQJ44KqqFY3RhmcTwsaf34Gtz7TYBMFUwbKugTrWaRzG5sL48XCfqkFvxE24RhvbFvkdt",
  "key38": "25PpuQkKWs3qCcXt3mz9BmuiRLMYvERCaVzvCRKemH5tCBE8nLjy5g7bCmw4VwfnQckJBnju4USFaBrMY17Vddz9"
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
