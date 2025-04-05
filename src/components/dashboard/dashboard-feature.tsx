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
    "4rvLKTqiUTRpkJxHLtNui14vn4jqznauKP7JcyKSqJTgNfducCDkKvbbjsy9GADgxkkhHShAFLZ1gYvji3B3ijN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QTAhAbC67KA427hqn6uwaojNzRVK4LKkEXsoWPjRg2RJhYh84AcxG6cdCskEyQni9DADFYX4coCVA1C8gmdMvQn",
  "key1": "3zoKbkHwMUi1kXx4VkQ1RTcgXigi4hXoGF52bbYeUMpLhCbvBFoECMgYvSy1t16hjqFMPNGdnBqhzkhBCLaTUQgk",
  "key2": "2dAo1oUiy8UFsNgqZX15Gk4cV2fLrSLi4hPsw4582sQPYDmce7cBCzwHHYb3VPAR6ZTqq74EjVQACMZqzLHHqVi",
  "key3": "2MjP911Jcb6ygFGZSoDD7ZJE6GqLTLrNXPN4je4NJpKapEMrKz9DMbRhbDroRzQmcof6nuUsSArBF1CJTu5JDDF",
  "key4": "4AoGWdsrvY9yTdaS7YNkRfui9Von4TYTHmNhXGNTcvfEUHdxWdsnTX1ghxGaUdt5JmwM7m4uFDPVkCs8z1H3B9kT",
  "key5": "7jDMf1VLeAxxXkzhyGJmCXU49g2XwHXQNvcPU1CDtNDihKckBgHDdX2s67yhxHQffP2HRMfPMia93hFHsKWrN7a",
  "key6": "5gz9cqFgHvTrnWkZqGyWUh5n33fodqyRbB2oiTHZ5QoexqBsBx2E711KqU4qWSygd4mRAcCRtPkX3f2YysXjpBKf",
  "key7": "24YrqPKYs6e1Dj1gk9V2MwLZddLddqsSD3Q46fUAtZcyi4ARbSDDQU8rTDystVULCv8ryd5DLebAaMYnv1Lc7mb3",
  "key8": "3uz6BXtVgXyrcXcgaGqQZVfFELjpyRgncn9Qs5v9VacW2wRV4AVctsypcfSR6yWUA81NtRWjvvAn83MT6d9Tvcie",
  "key9": "4CQSQ8hT8AAw6fHtsyzxW9KaAJYuDmfgJ1H81YVeppfynehbYPNcUz4vDMtaCELPxj8oJmuPnwFDLS7ciYC49mgF",
  "key10": "52wSa3xAnnCZbiVptygL8Y8h3QE3bEb625ckAYzQmLVAGJjr9serfZ4tPjd8k94Dk119YWvTu1PueJ7MrsoNaq1y",
  "key11": "SY4Mb2sFk2Gg2iGjTRKbQ7RepjEwTCqJKdEVb2Ttygqh9c1S3DWLH4EGwckEepNwafJwfYqjHNyNJ5YApoyJ5oP",
  "key12": "35Q2aCXfueweBS4Gba123uvzZtKuVHap2Thi7xiRtzR76j8kFxpYojaqLAkkRnt1F1Mq58gxTiP6RWWQngyXzrRH",
  "key13": "2LFQJXtVbdT4dXe4xZqNAdt1mxAQMZoV35YbbprKgSYyLxQpRFd6vj97pbxmcXE282CSeiMRx4XRNCQCYvtHffbA",
  "key14": "3aHQB5oHUSVwSL9K1NzzPtdMXQaBMhGW3PKqqie5cnnp39T8JJnzMwBP2ayFxCspvY1JS1A9ybZKuCyMMkNncsEo",
  "key15": "5gdnntdbTL6FJ9bR1A4rDDcYFQEbqrwGTTrbmvBP36Vjbm8gdJuiZDgaTLCTCSDSLqZo7weqk68crpQEcn946qR2",
  "key16": "2eJn3LNLqCrnRCToQpovRvGefQTXHZZsFv7mvDseFSC7yFq4mTkEAi9GeAdhqdFp3AegVNaVBF1cYiXH5zRFrisZ",
  "key17": "TzWGqbBfPB9PaNNbmAb7SkhJHgPeTV5hnZQPRNhUPdRxrGVRARfbk2Ct63KCTNuG2srbCApAstaaLuhW8ruopwF",
  "key18": "bLd8cGzwB43y2BeQgEDdGABFi7m9GVswwYYwYqYB1YNuQn8sU5tT9kaYdAZkW5ArCib7tme1zmcRYA3hoaTxsh3",
  "key19": "4BsbYQtf63bh3E9X4aHx5qFohc2sUsjwm55yXDMtRfm6ehBUsMRoeVxSdYdMqZuo8vQ2PvQ9giwoLe7XYqFPJMT8",
  "key20": "2M8kmyeT51HksPQWLgN7TyESFZJzi3dNN3JGvU5KNTGKG45bubE3M8E3Dtwb4dszcAWgLv93FCibKtcPe5dwZZ51",
  "key21": "4ozHk4g6pQxAWeNThC5vwQZaMELP22YktdtC99ktzkkvuBnvGF3YHjTBNgRz1gicfYKC7XFthzEWz59Zov54g8Tz",
  "key22": "5Kv9cvr43R4jCrbTsbUFVMKunKNA697q9QuwsAq1ojzwvucCLpPjJjiwuVCi7EJnRpUQiF1VcHcRgFcvdRYaQmvM",
  "key23": "yPcJsUko5VWuXhQabsNmX8jHtm8X3LmhywzU5dZPxYzjqB8UMp35qAi78eqsuVXzMAv6cXvdeGWzm86KGy6EFCF",
  "key24": "5XYSpcuSYvDqSCgXZF2wd533mJu7jVqELuK454hUktK3vHJb6it1Mb2ZSSzcaKa4ghBGPLF9tq1RqPH7rL1X3qBs",
  "key25": "43Z3Q8v2GWFM1KJBuj7d753CAF56NbrURChE9BrB5Unjwhs1xvkktsNwo5nf6QhSoFA9jp8MRAC61B1tsAsfkpNc"
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
