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
    "5zeyf8aFqhwCYaHzCfPVjAxNFKu5j4WCqABDUujqeL2LK3tavXawKrtkkBvqPnkFUCgkAn3yke5VAxg5J7kJVuTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VQNFWongoT16H68Z2khXCzPwCnirqhVqj4wUS3uwq1LchkmGv53jd7vDYFsaT221N5JrHPxia48C3WDG9qk1dQF",
  "key1": "5MPgN5UhdGakB1CJAV3dtJQFMotFKjLzvhiLEJ4fbW1k9Ln4kMdpUAtvGJyniPbyRyQNxTYu3JP86P1djqpvz6PV",
  "key2": "3CxD4uiUqwNukGoqQxdUdkb8Ei4SGRMfAhYRMxr1MBVqshjy7cUtnQbijwWVQukPRviGZ774FtwNtxgyfpdhwe9",
  "key3": "2m5rpU3pSKRmfKY4Wij1qKKWD5pEtTQN4BtAAsUGpX2iE7d8TBRiUSaBaEf98GycWt7r3QjNPzREug7Y4vjAHn8T",
  "key4": "Naouu6AM52LLXKv2MP1jUrLNeMZ59vxakzfmZ2BRNfrhbRhsSyAMPSW8EXCgo7jub5nFyskdot9Xcv3GMkzY7Kf",
  "key5": "4UG5QQrpm8ih64KiRXQkyvQoxuiQMXfAEy7NUztgy2MnsibhYSZzb3LMPtc9iVAsXuPWW5RGpPqpxg4BsyzApg4Z",
  "key6": "Cm6SpStE1aZvCFpdkyYW74iBfemjqZWoemrvnDKfgezu2Zj4wjtVb3RfGcSZSJQvRg66sdA8BTFvohjXjurtotc",
  "key7": "2aDWnZyHY7HLAGbPABpNsA9xgYFo3SUdke8u3BWMHrQv2ZzA9Vgqt1n1BypCyZSEWgpahf33DmMeRtfFD8698sWL",
  "key8": "62Q8v8M8vJPg4DZcULfGYFJR33aXyHgJrLySXHjcwWhKU6ZV1PcwcETJxEuGYBUTrCcAddJv3CeHacnxJwGdSb4B",
  "key9": "47eavgssZ7iq1KrJMPWrRqXUweNhNo59t12HeNYvzhXPZML6XFxvKxye5M718mZCB8Qr49MaKzmDrr4pU65Zvcyz",
  "key10": "3XMoj4dJTkLqgveQR8utDXiT7TxyBm4SwgRhZXnXtnPxEnfZfXUqFsoHAgoW1x1vJ1tU7ZokVyBA3dQz9mY6Hem7",
  "key11": "3B1QZ64CZASXnHuruAzYmv6zAa7UTZc8wjscHvHSYry2B5XF5WMKD7jJFK5WtNcmpRpRHZtqut6d5ma2soMfrerb",
  "key12": "3ohpVx79GNWPSYc3nbw8gS6r1meKJN5EfKu6PmtYWkHLHPLaMki9sEActFRD7u6RifsNEVr8X3kMyRfmy5n7s6D3",
  "key13": "wewoVbrJJGhHERkfSDNDJrB1JirhWtmVJ9jLvUNGuV791wwqFy9p5BinGXUYebmVFyp9fPVGeR4hwmr4ivezrL1",
  "key14": "4GLJqf6a15eFVpPZcvd3XmJkdmDhWZiRT15s6ZitVHKY4Fh2aRNrKhKex6vqvTmBV66r81ivYw71HVVPdAcSmYjk",
  "key15": "TGe8Ar521Xjcq57SGxsDqTD7SP1Qy3bza2QohQKk5WDoTA32s1FH5pq2zsrMVjNnpQxPqPTTs72WRDxfaEfDtiV",
  "key16": "3rXB2wb8PDGQRG3GzNCCh8cenivr2vGmu5CvUZjPo5X6ft7CAqsYz8i5V9Jur2zMq8hRe9FzzMiajnfjoJR5upig",
  "key17": "66HkjHBD4tVLFAoWHgkDXndaufuFiv9UjjBy8ChEYW8ECT6WikkS8TpFyrMQ7ca1cwNbzvEfVK1DTWBXZ4Gehd4x",
  "key18": "357Xfz3ZvEkY6wkuSSURknPW1GGwEybPVBR1cVSgHUo1NJDC8Te68wSvV79K49sTERdH5wK1osGGnCpYYZ2Xt1Zn",
  "key19": "31fJist4v5FRDMpGch51S4bD9WsBxRxX7VEMm3N6sMwbnFRspsN8vmEsbLLx1bNsUgdHFuQFUkyuT4MkeakEvnCo",
  "key20": "5vjEKVZQ3JRShdrkseLhvF8gUnuLfbFq9Cgf5vQNHxxvCVCyTX7aTZTv8RbCMe18sKC3KKtLVAN8ULxuAK1PRT8d",
  "key21": "2eZKumpGa4V7gDKuMwsPjDNEo33nutXLc5VjYhQnQGp4sezp3KkEdMDSf7qWpWNLsPJeFYQ1E2sRhf2jVjNWgkuq",
  "key22": "5WXRGZzK8wvdzwA5kFNkhCDRPpGLf3Lt4iuvmyyprqYMDA1XFNdo8wvnodEpuGrijmWLaHrpTRjae4uNK4UMgap",
  "key23": "2Qijcn3yzRnFaMX1LRs9Q1KPptCNZxYmtCoGn6uzrYLZeigUBzavUA3W5o6JF1e1ayoTdLLsajd4ykYi8kMu5MuW",
  "key24": "5FoTPE7m1YWh9LWBgm9JDNMfubg3MU4hFXyu6bfGg7kqCdqHzVV3izncsPBBzFWU7RWiakmYNBxY37S2R2uET4B2",
  "key25": "56ZHikXzypdxWDAuypoHhcrYnm4RwyjfTzbZKiHAtdFnQLzqcbzSLNZs9mmTK6U7xq5vZJ39aiYDDUNRtvtrueKF",
  "key26": "4agxeKTm7UCDQDWeUtnuwoy3Df82PWjKSQDAKFTua9q2MBpcd1j2t1a3q4gv8mdLJR6fZA5dRjXHGr6bGecpg4fa",
  "key27": "42c9sX2s54qjme3VmivzzGUC8ZcbH46UcZNPz3x7pwT3X7KkB6Z5udaccgiZVNJaaEaf5fKwjJ2KTXkYHtHJ5q6J",
  "key28": "4GWLLvFE4vYyyrPcZuFMGYtdcmKitzYjQkvzRhY3jWsTwNcSewbe3aKwKkBAA6s93VL6Hd1Bj7eJTviUQ5sDgLwK",
  "key29": "3TJHXmWykCCZfs2oFkmDV87FS8iaYJZQ19N19jskUfsZw9iMBsmEUiKJiuwrKucgpvGi1fEiHv7UfAzDyGhWS5Y2",
  "key30": "55FkMJeCdwZmVoiDNtT5FvGfS7QagNvxg81EMLEWL1e9wFNchDsuK61VQCCj9MCDyxB7xRGaq4dmFi7z3K7LNQDh",
  "key31": "53mKoS1ntu8kxDCBXVAsNJEPh5wCMLpNzfW5DkX2P5vzGK2e3vYzMbrvshh7HzcDU3mebSr8dqLqGGfZ8StCfiwf",
  "key32": "5kJurvD1YBttcPq1bRMRLWUXD71AMyMvk4DksxwAkxUTbFARSE5tPAgkfQnHvQRcGgHTAKcf2xNE5A5AqX4YQ1WR",
  "key33": "3aoxqzLmP4Rn111hqvM28XN7CAEgUMx2zmheoTDvwuc6udS1WLCLzZJyx2sKjRaMJWdMkqSmaoBYnfPe6UmpvKrY"
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
