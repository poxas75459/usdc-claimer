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
    "5j4vJVyNxSX6g8jH822DKXxXP7dfgAE7sFndfiXJWtzbfjSpHxrfycrMVxLP5tjrhTX1EetKtqUrPZDncPh6gvwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61kny6xsas2RPfYaNvcQ6cRx5v3V4vsXKHPb4M5oY8qNdVqRhsRzQ5jATEj12451dQajYjt7rX5meSW3f9DHvEYU",
  "key1": "4TBu6PhrkJQC6qi7eMRRfBJBYNejx2gazhvHQCjfmSuYvPbJE1x4a376AhS6771WW7NqKBjVGJkmZxwfwhjJZH5K",
  "key2": "2f8HcL9i6S5vis1UNvXRqvyFLB6ELtHbq9YX3zgSXcGukRRC4YavamxZcQsQ1sqRFJopdjx4NfJGqRmwFQp12bRN",
  "key3": "3GqftohPvRxFjJz1dxPpkXUN8LkFHZkv17hkh3rMVaoXANXHaW7eBmn8cU8fKkU1nT1aHZWxxdq2Hrje1rvMUs35",
  "key4": "2EgdDW1MZkWhHo9dKQG99xNH7iAFYJYBfGh8G24G4VgeRxshVNAvfEGnhFPctP5h6nEYC75gti7rNF2FYngCYVB7",
  "key5": "obRHmAe3k7hfMGknh3oLonh1Aivhy3DxJbAuu98jjMEYjHE1aBreRamjBGiUYU8sbEwBy9VgXVeRbqjp2fq8UAq",
  "key6": "43wVkU7NDX9YHDZEMRgfytowiMYJhkFKgNDReBWxetjeru9aamqTnS8DZ6hdR6AUDjpRqtbn3fRjmR5ujpwCVNcc",
  "key7": "3KexrgaXPgjoZRKVaqJTJ8EUXPTfuW8LBezS7HzvPqny6gT372M1YoMvs1cn8n3iSAZ9HqWmbjXotN9bjqfQ987d",
  "key8": "2a49wUpikNLYtR2JorfK4196ijsLMSXQpUQQGWA9ggXtv6g3me6Ts2gFM3xd9RUDNGFAihWRs8485mNbJxYwLAUy",
  "key9": "4zVbzjZyJRUv3XkKf1ixbWBuz6ahVcfRKg5qZ33S7kny5WctEaTmmyWcqH2o4KzGAg97WM2QTeAwSy38diak5hyr",
  "key10": "Hj9Rc9HTtW4Aj3v3cmUjDPsE4aP3NdWr8FBhyQF4Rt4ZCEwt5rxZyD3STDYN18LvjXGhW7LT9fkbuBdSCE8G5Kw",
  "key11": "2euifMw65n21tQxGPHvxEZEiSnMGiZaHJwc5Ym8HGkbea1FDzJdqq3nTWtSeQshHacMXekiQZaH2qzR88p6ShyiD",
  "key12": "3DJcAhPB2U15rqcM5tXV42UBVhxiJr6qre1tovRuL9w8o7yp8Cvvrj8BzZScjTb3drGXcXjQ7MV8NL9KGPTd74vp",
  "key13": "28oDNAdgKoKKGQ3ANusQwzzdkcKWoPqxaVZrezrKTQpPjyYhL9nmdJuzf3uF3fsGFWTRxDgW575pppkCQrQRnYBK",
  "key14": "4z2biLpof9CzagJFLwEbDLw8NUczsPKrsmx6zdUiFCYGMav1PH1K3GQGvsZ3wE4danx1ScMap577HbYmyo4wcXxM",
  "key15": "3jvKnohJmHcWxsWigV5ynSD7JiizWNsdEaB4s5DzAv9TEg4qYVyqhLFu9BP9Zt7CWeXtrqi6qF79MKmWpGjstEZA",
  "key16": "4rzpknNr8qPrUfNVuZj7wG89VQbiG8Lwv9pjPhAfSum8AQCzENV9HmVdgBYetS2SKxfoWGsTbB5afXqLYjPPZKfY",
  "key17": "4asRRKFCGjrAjn2f2TTYeenFZzpxajtQ8MRiz8AULmD7JGJ2aEsAPXbAYNWeDAKKukSs3iAVdX64gvVmrwMjURKK",
  "key18": "3Xpxg31ANa8HFPaCetSq1i8UYCudG7KVe2cHpnrLC6fe6PaudgDjVsKwa1Laq4uQvuJdPq9kAupm3YiRFPSrZPNR",
  "key19": "5MyZoKe2h7Lbx6siCYYpqbk4ed6Su4GRdZa3msEAoa7GdbeegSdwcDRuiai8PBT9DrN3X3kL6TqjU4bcS6aRQovh",
  "key20": "3wtfiycYH9UywZ2Eik1reaPtbaXm2EhDtFNasaRpMQtAh8JLgZ2bJHsEG9VjEVqCi6JgSMNWCeJZWJzHiHZaMkhU",
  "key21": "AM58pQcD8uf4qGZkCrzmZoUZqkAcME5KBEBZXdPc4E6cQzBDzYg8Bh2YpZuChXGc9HdZ9nEFTnAvmZ6JpEYAXcg",
  "key22": "sonGKiZYPPL7tVR7SjH4LzXeRLitU7VsdbCMHp4rS7MhkeiAxRAqjxBR5kQmRt4gzqty4ExgQRAfuYxMfkU19p8",
  "key23": "cUz3i8btYe8b73hXjgBHL7ZnpkbHMjYQTqLJQuGRJF2FD1giBeTb2gp8EePKMe2ocg9rfj8oqyJ7xTpNEL2xmYr",
  "key24": "3K9s48Wc2g2G5hZgGJ9tpi7GbSwTDpEtqT92oSKz9bgXPH1ck8v856pPQm3H32XQNsyfLKjmWAHUxLRnpWqLDkt2",
  "key25": "5TNQ28CS7zCeRAzRbmy7ELw7b19TZKh2sYs7War5K43Wmr1Ph9JMvraeTxMyBpL6Ldfah4kV5jbbiwqGC9wXrsJ5",
  "key26": "57sgXmXNNAe77dWNSKvmEVCcrWcLDj3buWQdctbZuReNQ6izzyh6WASPDV1SiPcth2tCo3RZMQfvcggD7uNaTZWP",
  "key27": "3ud2g31QvCVqUSqZMLmtUNGE4RpvSEyuCAdtukoiEkmNFnSfLq4cZLdTzd29SRDzLdRHihRhWVX9jsFESzxoMcj2",
  "key28": "2D43zwEiZuit7q54QXHX8N4W1E8L6PTUgGRjNC5Wqm5zJ3Tdvb5WWTfLcq1FztXqtY98MZeM2Jv6qy3QW6Zgr25j",
  "key29": "3KbDQufA8cf4WRwNEgVzPa6EZUFJJesk3LU4oPSMBofujb4xd3qAXTsAVjjhWnSVLnxvhGBAJKdJwxF7Hi5yB1di",
  "key30": "21vCwPF78V1TRGLwKSFiqsRn6Ddb8qmausETE1UdZf8xXiuWMXccPLc1VbkP1e9jNNQAWwR2iX9kFgaVa232M7mf",
  "key31": "3rhM81Zyq9j8pp52jZ4wyNTHGutUP8G8QQMeSdgLnjt7RPw5CpVfFHP7QB1FbFxoUrLoDEpmNSvJgQRCfz464v3G",
  "key32": "5D3KFuEmSvNjXJsW1unJzPWJ5poSX9JhwAZVbTC5WnEFwRnnij6Yni5YQZJK5S9UtUn3gvLJPDAs3M1nQeShbndF",
  "key33": "5RVFkrNUGUiqAKknHdAWny11WdZkPSS9o3Zyzc6EsuTWUqE3LeYmxn2taSjUzewey7bckfA1NePkSyneKaEwgL5z",
  "key34": "3dWFpQnotZ8wfXTMnNaPCkQThuAWPAxUyP8a5hBHUqzy7T2iqp5gLK3QhwYw97sFBiJG7cQMnuLMH5mBdMDGPL13",
  "key35": "RT9CtpZL96iwGLG488hq6USbhjRvMiNrxd6Yd4Ev3iA9fPFQ2dQVDhkd15xMxehZcssFioNrh5LgJDjgn9rLYAJ",
  "key36": "51FcM8Gcjn39XFDPtKyZSoVANLgWzmv5a5HRM1iCSattqULQZbEQKHAQwvVXTU2RqsxeW7ER8Fby7LrGPScyxrbv"
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
