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
    "4hb98d26VSB4m2RM71emMbm2tThgfTcapuu3uwPR4gwsNjH1t76KVQPmn8Yxvrr6nUpuXvBbAn4mAcUvjMSA2KDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eGHJ2Hcinh9VPCxYuXkVLbiD4v1xspKDoj988sxxYdgGsGQRrzgqmBvET1qNe6LQN7xTd9D2ZaG4R7ZbeJp4hf3",
  "key1": "4GEcZ7BikEe8Y2GHP7WHvxv6R9RGNFhsbTq3PdyK4S7Y77yDCjyUN1deD1wiTSfgKsb9VQ6JSgvHjPecKAYWj2pn",
  "key2": "3iaZU9yaTMwkFdUseeV8obauZgVE7TuwJ3aeMBLhTQaGXR4TAxQrvdtXNuvZ1rJkF9raW1co6DWDzCv2JEyWBfwi",
  "key3": "4jAm5wmw1j4w6cGcNJuHCQ5rm2Gi1gH9fpqwp9nCXJBXVTWV6L2WM1PSsvTXq6rGd72eBjHv5kuARE2Y5RPfAzEU",
  "key4": "p37nGEhTQqPjZUAhLT4M5et6h1gv8j3po7wjN35DL13CrtY1z9TSrZpmFhANYzUerVRJMjkARLBbxzqhrov4h3w",
  "key5": "35kw29KHkGeDQDqnCx4ifgNY6K2HL6JMHdSfu12ihuNnGNppeBJd5ESpaqkiaTuuDd4maWxtmRXQoaMjAMZVmYcL",
  "key6": "5iveHhfyRqhKKCRBZFFc3C9xmpSxBMBhXuEq4EeYcXgJjvp9Yc9q3hiTfuWLYyoGGyMzx6MrTmr8bL2vS4tmESew",
  "key7": "4qBxsyGnz7J1a7XbaczDKFQNvMikW9fr493HjdvCh3vKWMVmgBhCouwEoaupDQWPqghyQo4kuWkoDBmZ98ZSC2YF",
  "key8": "5r7GkJQeUShQsdna6ZqtP35ZCqx9anSKuaJM26dZwpZKMChqWVy6sNYKs7psvf9gt8ofwtPktuRkZrTR5bZ4jEjU",
  "key9": "2rWeozadtPNr1P6Ns8axspL2yVgA9TqZ6dyDaBvraLuiCTx8jcowg7GCS8kUTe61yHVxFCoGq1PEwZAZdGuWyU5k",
  "key10": "266jwmX3L1h4HdgQsJ8X1gq4oRP5RucLowfgjfPAo2aJeDwNArYp6J7vEkcs7fGWefcgJtWWvyBAckqWkVjxKYus",
  "key11": "554p1ob3YP5XQ4qsoRFELsjurE3G4icHsZHEE15J3yJTUrNSXq3ojQ67oUodXs7cv2mEA2XJGSFNfAjVZv7NKsy7",
  "key12": "5vFWuv61iqANx5nyqvzVj1UKV1oJj1syKtcN39U4hYdvAurb8XbGX519xzw99DCa1RKJda9BzUWb8ZAVHKXkzxts",
  "key13": "FZtJvKBJjcFaX8aW5Yj1Lpbvi41MXw7qEf2rXgN62buxFVu46nZbhB7ZPJpbT3cwJRthpE37Lsa31kR5zw1H76a",
  "key14": "513QkzHBGzbmVpjNfojjjCUpHVshJfrKPyDt53KTQ8Utw3TXcAP3XFxu33AFAnX749rm7pcWjHL1CgzqXZkS9Es",
  "key15": "4GKdAjt7YhZnhDWBNVuA7gdJyNfFa13kJAiyxtNjj4Jx9mX2JjEokGGPf3mb62gwGf9m2cLzKzU1M2WQNAgD2MnK",
  "key16": "4QYXcjvecUi5YFv2yP6XjYgoCDSwsvt54JHtJPR5txL1nHBTtaFgzA4yJx6ExuZLCfivbkag2tfwYinGVHKxNijs",
  "key17": "Z8jPYf2kmzpxmbsRFRYwbZ5zkhzzKJtv2Udgm84mUzVXLKL6z5kuWiEJkgr5D6CEz7t7q6gi6USULUj46pu2fvy",
  "key18": "hmcD62i5KEWLErq5xCjDbPcdC6Dzqp8vjdeSH1LJZ1GFm28GBtd1swY7igiFQX8yPrTaV6iaiJKUcvrzSkELRuj",
  "key19": "4BR1fJUsWih6gksHdmdCm7Emqs3j9qcmj8RvffXpzj3Sgc38bRmsLCH6jTPSYx7hvxrVT7tuYj5jf5gMcKwH5Bbw",
  "key20": "2DGq3zJUrv3R96mdeuFkbPkFBXXYf2VD6kkYg5rAjrRc8paVMGcUBNMB6nsiseSQSHgKpP4C8E1AfEKnJkseFpoC",
  "key21": "21wLdpbRRrExwdFzwFkRr5i1kCLm1oBbnRqm1UBAoc9hrJnRg2ZMJwUsd7YbJbejATLfg4uR3iSh2HNNS6pdYtB3",
  "key22": "3CUMURrQyvWkntvYoY1heqemMeYAv5NbdVbsv6cJ6zy7PizNkF5e9zwMZ8mijJbPe3CqrrHG5hgCfoxsLjoXXgnz",
  "key23": "4uhWBDWxbchbPpb22KRJeKgdRLGjDtuadYtgh6ZMMpqCx4fceR74JGeS3vPeEYNErrcZCfiLbaRxBzwTSHFcxkFM",
  "key24": "2QMcZyg7sZj57Yjbmotp1V8WK8otd89GdVBvU9w9NdrVEgmxfV22ewXu8ydhzEf2ejVhwFEczzWaFjXytgmCaeCw",
  "key25": "AYcxMkmu3h1HqDKHvW7Gufodid42keCuDeryxBWVW2XkWmtMKdqs47p9z4K2p8kdcoZzgFM8ymvTfKaHUR5iapf",
  "key26": "3F7X8rQ1zDbAYbTDyxkGkU83mMVsTAybKF8eHH3vpG4nqbhLft1tREsTgqaKddENY2J5U5ju5x2HkU3sz8DNZ5vo",
  "key27": "2QzSQ2KGS4fr311aK5krY75EM25pynZqHtn9LvPx2rgXAki7xWmFwqmMYTUTMWH5Gy8j1fgjrV21XNVMva27HQA2",
  "key28": "5Ad2ez1qA3nWWevfiKJVPFhsg3qsQNG1wVwzL3TDF8Euo4LwZRk1gxo6WMy725JLzabCBfEb9PFVHoouuKJHVoxX",
  "key29": "2HmMK6X978yuHazphhwstgwCwn13ULH2K621tS96VnF1wpWvDNhn12wYPmkt7p399q8DYycJUN3nQ79jbLUhZ7MX",
  "key30": "26AfWdaqFaQZKZLW7V1HvgBEmH5d1VUeEVBAkYqZJKiqzyev5xyGiKtpauDw8bS9TpHSNXP1qAV8WisYk3UTv7Sa",
  "key31": "3omFwxVzRy4DwBx6AAKPGLBj5p3PReQkHQVaRvchwHBdkGcpRaQ5xKPgQEx4rdfkobbvPDgMJdxwHWApj1S1gu1g",
  "key32": "2kYF3VspgUYnfRaYUUTGXvyTntDhKwxCW6ynYVohqxJCk5RcTv9PCsv6pcs1H8N1MhzbTE9tMXGmcmq4JfT1G5uc",
  "key33": "2ovojNksBgRNjq3dSsnm9fcVJd1FMqVfm2LoUHZcNNcA7YstbSVddr71w6vHGsoLEHRvYKLUhJK93qdGRnPZZZkt",
  "key34": "3UxmZhCAgxXzFXHRRhjpaugECsWYfWcjyHQ4SpS9rdoWDWz6MGYT2dFuxpGCGcvFkPn3wt95E68sZPZTx4jWrQKX",
  "key35": "5TG8JcQb2Ldcq4539GHyBJ46E97PrmmbxqkDqFuCNoDvuCs9tvNUtb1dHX65z4z4WCz61NjhA4t6sdKSvxbHaab1",
  "key36": "5MmnQTBMRrjx4vUigMnbrrzVK12J76mhwKFrKwdvjWcFwjNDNhFc387qSZi8b4DCaxERP3Ga3a29YSfcUx4nQAxP",
  "key37": "4njYrushETgQdzfKBveFhbEw4pdGejTwE4RkaZRtjFyHfpeppXdEY9UATfLjnUfVEvGjxbXhKYRWzBXDaGjhagZY",
  "key38": "kP2gAJgYTReh4HkJFTpvkLuTw2Xrmh6VFv419A2SXJsMi4W4bYyb3FGC5dbwYtQrvrYU5sN2K59VvowPgFc29sU",
  "key39": "5vu4vNmgggSFKPbSAYtkuADoHbUYsnSWmi7U6sDAe84WDM5AaggsHPSYW2uecf1bnjHjPUCrGb3CwykJivcMgtn2",
  "key40": "4mqfqy5niU9aEQomadPbSuxxPZDCCj69QP71HpSHKgdg4dzVEJTzrxwTy9Sf88q8JUzsVVGnT8GvW3Ch3vWzrQ2e",
  "key41": "DgwGB9eFHcJTA6W3JzHuAZsPuhYaXtSYKckVG4gx8w754QemxP3qXnzVNEfymGnVnKRWCFAY7pZKhcRwnSYNA2r"
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
