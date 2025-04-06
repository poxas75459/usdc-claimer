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
    "4phZ94byN1UrKUWonvzDT5trwetMhRqwAL5pPgtnXiHX7X1QAC5WeH5GUfAeg5iQS8tq2x19bqugy2iku4jHzzY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mbxYkuhSxnGD3BbHvx2GDA7PwufCkhHg8qv7UxxfXqLAncQVS48LAeqzCK9mstP4LR47jBzAYLmoxu1iCjALWch",
  "key1": "3AJRY3Dtan9vwM69YP6ZDVmzbxLFjHRX41dwPYt1ePD2bQgnfH2Ygm1Da8aLEMQA8DPSfcMYgCVvautZwsAD16ui",
  "key2": "cPpao5dqkdNaqvSejtaw8H7g9pCJrpEshtZdx2wdsRyNvTDMJa7caCLBTp9N5KQ4cBtrQPif6y9GhkrvycQTH4P",
  "key3": "4LgnvVDBwRxwbrQeyPf1VG6UAydXyZW19HtHkLN7SXXaseWCANEjm4JtGUJPfZXCM5Px7Mu5r8SqrUQpEKJ6VaRk",
  "key4": "4GrwxEXdpbBa4DBMc3h57moGegeqaVpRaEm2eY9XXe11XoaHXEXQRetEQVTkDpMzG3aD1pUrSiLyZSC15FUgwErD",
  "key5": "4EHQGwzG8BCMy3MBz75p7g7WiGvgVWmaz4XLE3Ka4eAsRWG4RVwVgG2Nouu9m6j1duAWK5mpt2AfcFZWDwxxRxWc",
  "key6": "bg7afu7LUNqcDYpNGNDKwZnwd5x3AgdFRwq5Zw4fHhg2GHNkTjjrrcdPyVqgP7V4noa37FtQFmZjcECzMqSGijU",
  "key7": "41mhgQhzZwhJ6H7G8Zbyj8WrLypMP6cumz4nE9AQBQx6NdsZ9X646zhxgcgznJjDZgGC4rjYLQVSjFgko1ZrBSJT",
  "key8": "2TWK9NxL26hg5CM6Gg7s8FjnB5h3FBMv9Ly8qucCKEk1RFFg9G27qc63eiLFk29db4ByjQu8StWCx6euhsby4dQz",
  "key9": "3i7i69ru25ZN2h2uYZ6YBnWVBkL6qmWEp6BTtR4swt8nWzLUz7UfoGD3hUQjm2ZJGWXYEnhhWmSNoZbJpvxUsQzf",
  "key10": "5qMC7AmYCKNebL4fYg9SU5ac3Krb3P57zy4X3UqHG8vJjfD2NJBGWzAKGkn6cpskZXv6SECPkHdMvh5VurNATQFP",
  "key11": "3goWcpaUsxTS52VdrFwgFUWsViDhDxMxE1RJQCn5Nd4Y6AvVbMjSw6U7g6UkdZ48j6piuzK1kEXhzUqwo8ZM47D7",
  "key12": "4kNx64cGHLqYMosvrewr5vQ3cDAJUDGLhJgVbE1jCK2oQKv1kJ1VXKWGn2ZmNwLQwgRs9GuotDUPXXP3jmFa7P8b",
  "key13": "65VC79XhhA3FduEe43Nf8P65DiCGgDvpF5nCjhxYBk7BkZQHLbYLwnTBRAMdyucxAiK34G1yJ374Lt7cS19Bjo3S",
  "key14": "5nprMKyHHkE5ca1kufkBeaTGDtbxhCNSScuLoTRKkBrTBatjW6RJvkn6qQzjUv8CkxZEQHEFdg3cmCabvDeEf3hu",
  "key15": "96krWRdU8GCNvh4YBB5d4mtWY5FM7ZayNX1VHgyndWicS5aoHNGatLobmwYWSZQMD4hRFaTuKTWYfskKaF3SqGp",
  "key16": "4c89p7saX7ZRoDhd5FYdEmY8kzBAY8s5DRYsf2PQkvFrTYKEa6TykdVDRbehnpvoDPcYhqkGQwHdqsUwgncpBZHN",
  "key17": "3UcHEgvr3TwmEdi6BfTiyyzCk5HS6JTKcC1Bp527yDQpn5dmuvcuRa2RBNWEoWWR1yv6bpL97DFKCC6cf2AiGFWr",
  "key18": "22xAtvv7kC6NVShz6fgTqdS227GLdNxyc2nLCEjddctHX6vwxnUtpzZ5VyvkfSiu8KV1e4a8GhaBV7zcApyAhe4a",
  "key19": "4XuPbW1Hj7xkn2UWx1MEwgcoqEaPa25TgukGkhBN5KDbHdTH1v7cq1JgqRbpgkEAfFPfDR2A68wgazGyEf5iLNHQ",
  "key20": "4rZBLep6mHuzNwz9auqBdGUWHnhiN4NBHJ7iJBfJiYDj6zxevqgAg3QYN6URMwgaGAbrHpJBWxGkq4Q7vGs3JepY",
  "key21": "5ym7CA8dEwLEhTFHF9CG4wJkDaTrwHtXtx793Rhbgxhiihq9GZ8MsDmRCAyhQinndmLKkZE99p5uQaocYuQFapCd",
  "key22": "2WGQKQtTU5nBTgAyQGidPyQQnqb79BQMbYa7zneZAvGgQkHd8QkRdHFr59o1LvH9isttzMuGVg4nMukjq1Xvp5c1",
  "key23": "8y12XuxNMPq32PagqTpdDyVz7op97PnvoubuPbsRHCdK7xCvLUAD6SDyRPvn5kzgHHWEuvwmpXunTK1KvL3AzVv",
  "key24": "4iU6fef4Ess6mxZMH84nHpGiixUVe5KuuwZ1y47r4jtDmk8nWAQqGbPtonFov5GDxbGdQ6ZkE5qNWsynk61RdCiT",
  "key25": "36i6if1zSKGYE6YfrumnmrrQUmpytj7p43W1NCtPx42zVL1nxxqrMBBPcBs4Fph9MsL6zyG4Zqx3PzjR546i1Bnr",
  "key26": "48pCGUK3VReGUC9SCTrJUvqTAFR8UoPPd4sjncpJeMjX1taLffLjAVZzQf3pz7NkbzWeEoEqv5vGQoHr9DjHiTgA",
  "key27": "4tEjpqjzW1oXx5ccDdaYssgazutzs1ooaMb1BHp8KJyNhhdjtrERH6sEz7dkzC6vyb3f8zVFe7F2uCCHDBdq4g2J",
  "key28": "5h8kMbYyFyqQnJ6pLpiVF8WMAQPQTYFhjNSKMa7pZGCasxZHFZBa9vasCPF7obTc57pNgyhuxjMrpnNmNDPR38b5",
  "key29": "2tTqQ9X3EVZP45TQwdDHgEhPUfCfsGtUTKzGEVYzeLoKxFVcmn6bx7ATKoqMe9bdKfTUQhTWEGv8shww8NDEPrUs",
  "key30": "3qqg94XCpf7nKxp9tZejSNAmhda7igPRPxyXjsCu96bazg54n7Txestr6NJLuFoz3bbfteoxrjybwjWpV3KcJQVp",
  "key31": "5Ze8fKQNAk7zhi3Jahm5CH4Cj9vi3Kvk7JsbM3SjusyY1qMrDMSwkrY7m4himuAjphNK63fx3PHuDs7bt923wEUF",
  "key32": "38jFdvYpPZVWsBqL59nNrjx7rV6fE38CZqakTHQCt9pP1KJsVMKorcqfARQ17MDwznFvF7p6XgHRbXJksyTkJ5Vy",
  "key33": "3S7naJpheaYVTGfWmwVTgtNWQ4EdKARkdDr9DWHmXeb5veAHCySCkzLRGS8fSvKzxmuFphdNQSaqbEovzKi9xhQ8",
  "key34": "3y5Sb1Hggv4s5QhYehoJ4uSSrHKcgzjrr8y2ko79mTGrU4XfEDwJJ4nuugqAEvN9VuAnSWPJKLXjoBHaov2hHtrC",
  "key35": "3pNbn47pQytBgiLsRkdxQNTBHTAgnN6pHBibCsS6DVsnvk3BdVqWSY5UySHvL6yeZoTwofCU5ohseCk7NFKNoLrA"
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
