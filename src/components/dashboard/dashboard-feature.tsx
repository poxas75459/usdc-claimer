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
    "3rYn8N5EuUazfLF3XEhLjy9WYufZFt1cCA2VD4WvAKJt6bB71hEkLXmYi6KBYxspkcxzDzV8D68g6a1FpHPPVNGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q4xxKmMLAYkKCar5arUXzDwyk9UVA4Uonk8RMnMFkxi5o7zFSgUGp4JR42UnoG5pYAZUqtwkgqSNRqAts4R3H1L",
  "key1": "1gdDTWx2b4BkpxZRtxWqivSKygz56bsnsw7gr7YiKpbX51QforSw1jhWoC39nUQYrWz9aUgmDn93yuUoYGgtk58",
  "key2": "2ynDd7ns1mNEPUpnV7A3M1jV4ynditn9vnMZidtAgDdkYxmPE3MxZnUvFXEXQCW2NeSTsmZCVxqSLBicoRQC48ZR",
  "key3": "4ooJm9Sj727EhK16C6n8pcRY62ULd3o9xDLe4CstmN58YoobtE2VhHEUTbTPZ3MGPTFCAKTUHftLurGNrrxCZDBr",
  "key4": "3ZmKdWnKQUSRYdiBFt3upq1grsiLSFMWJu1c2nxotL8KArTHnzQMNPeSsiYBSHZcpUgqtusTu6Q38PkEMxBSomuA",
  "key5": "2DSwPfjnRrg25ARpAShyaWETxHAB5gavC6DA7TziGMhZkQnbmj7WHZ7SeyZiSbXvEHLrWasTtxe4xLT7Zaj2ifkd",
  "key6": "21U2Rr3yQJmMRmnUEMorycr7MUZ8SJJGQKfZAFe5HCjrDK9EJnJxWNhhMNCbYhRyUpUxAxbnHkUvtNh8RR71VvA2",
  "key7": "RPVpvcWFQQRknofsVppPcRzwFuymZE8cdLJ2Zf1vJn37Rh4hQj1fxr31AgzQqqbKd4ea3Nq2Pvi17pmrGfPtjUp",
  "key8": "trSsXBbNuBAH88KhTiDV9C3bgVnn6NHi6QtnPDabptLeUvzpjZsndoqGybKxVe2a9SXqJhxgNUVq2vqkHpomzxa",
  "key9": "59uRUuwQQLNKeYob4Y4QKQ128fnfBkXbbfKZytEnbDtsPK35Fypc6LWU3Qfq9691QwA1fHxhqaD5vV4jCxSgn11W",
  "key10": "4VdGbSPXTWti337cLUbxjde1d6ybT7hVzw4KKpCK8xCEEEDed8T9yFroqDWqbzBAA3qRm65bmg82jHdfzQDokxyJ",
  "key11": "4srGo9c73YPqoWQUpzp48ZQK4rw1e5zn8MmaT7uPnrrj8Q9T76rkX5WrY91sNSD8HBAEMMB5WuSsdnsZ6iSq2pa1",
  "key12": "41Nw1eGH4Y1AFvGWvHfGX5uU8KDfgweMHuo9RZxGB6BYr89JpHF7HiUqSY854ycBteSCpyc6WZmYUt9UR1Gmk79d",
  "key13": "5hmrE9fTy5M2LwK7p6TkBpjq8ahBDvxsFC8BcauEzb6jebKfx1bRnBV5qwUHWr5KgCBCxYniyT9UbMTzugYJvez6",
  "key14": "LXwAWh64BVcqTJ193QJpwXbVHT4jZBFM8poHkex48WNb5CQHwzNEXKaXsz5krKU5LatUyChAjpbJaNpjsjfgR6B",
  "key15": "3fEWSM6rLRiet3epoYRQbfiLyiYiGvVwqtVVV7TnYuRazyeq3hBQd81AJKUD7sUoCaRsjeQnxwEUur31S9cMM2KT",
  "key16": "5SqKrW16tt7WVv5Zv2DfyPheRpiUhfRZxAPuWwMVsVibtkcFzRDrANhoWTi3ybLmucRcSZQU4RixaVDM7soFPajJ",
  "key17": "63hzRepqpVyz5cGpmMSPbjuG4pbXmvUDRrtSdNXdtfR8x9sGegw3V2QYtiEwzFPTSDDmj7bM6P11hTscjXBaEcMs",
  "key18": "Wfh1pP9T3AwrgT62QPtzXu5pSQcJ7rzev3KE3osQEGYptxQm1QVfcvXRZr2EdZx1Ke97BZ8qMB9AncPYHEzuhvv",
  "key19": "EbA5eCsyxRwN2vktT7pifYimQjNmyw7TEAE2t6ytEgHrAGnZdEr5he4Vh9718ZNPBB4WjHywVgCnekpequMHxBd",
  "key20": "5j92NcMXP7JBovQ1hsWgiSqpWZADjRMDMvnJutXbm8dc4joiN374E4ATZYjG3ykHHVxFnkNdBdBu5mbx1Yc796w",
  "key21": "5pmKVof6eSaSwnhTxAbWz7kQyGiMm5sMoWpQ6an89LVdZmtmTHsDxCZJeMHwjnDTWBkgLZsa8rv1SbNn6jyRhVQD",
  "key22": "36m23aF8E76MGwwjKHiDYDs92oG4FqDjT558bGQsLqcUJPCsL61FuqHpizqoYRSXG4aCj2g6rZMdTidMgJ3TMNCz",
  "key23": "56AMd1Ceorbcd8uphwu9Q9YGH27T4Ao79hs6cHxdtNZbNx8gAV4a5QDTvrUkZG9GGitPcYbfogu1vyD6MF7giHpr",
  "key24": "4WUu5quAougsFwZ2vD5pbWJjceqBht5Li9TG6kGR2AgZApxr8kpiAFNhYDB7BNx4XQjgzetB3AzJCcuqvF4WNe7N",
  "key25": "4Rqtv17P7jgU9vcxHTbANrMsGFC5oCCkxB9H1192M4WyM77jHoxQ58MXENGh28VT9szLRmtFvptz4xMCN1iJGnyn"
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
