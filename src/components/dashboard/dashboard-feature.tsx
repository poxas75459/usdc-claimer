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
    "64d4vHW72ZjT18fLFa99tb8XP58V841DCAibHvANyQiviz7W9skHrBinFk8Xrf1ZYVZAZr5W5gQezLdUBP4VzuqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "udw73VPLmFTtGCpEAYioerD8ugTFfo6DbjHUDChVuAYFDMe26SKLnadybtBxM9ejEqjQt4HND19vPDmhqKrsMxG",
  "key1": "cdCqCbfLVvojWhpwaF7nQ75ddTtX21ma7pqTAos5PsYhi7TJsaat3z7W2oJ1SNo53ifFwmuSJHkwz5sifU4RU7g",
  "key2": "eQ3XUvSizjarYd1xRYpMZCsaXWD9UCiVckYSB6e4ems8fMXThrTzoaS6qHXS2pG6zzuFSSBFpS5BVBf62MnjTzA",
  "key3": "2sHxNVWf5dXeDvcjPU2u7HgFK75Zt4CgF5smsWWdDSdj68mHSkXe7ZDpBpBNRyETVd732iCtzDq5UaicTof721WN",
  "key4": "3j1Qcfi7Fdb7H3bVps9Mb9Ci4Fua58YsNY6fdXfi7z5rxnBikDT589w84EsynZQuAFdsD9iki7QDJGcQsR5AvwPX",
  "key5": "2Jz6UjARZJ79qDv8U2Y5WdeUmMDShPoEED83MXcJmTcqVhjd1nHuUQB1qBDc68CAQ2HXqTKWvkZBxHrqHZ6BAP1v",
  "key6": "GkmBs3sTZgAjuoNL3jni11bRdpfRU4VFpPwCyTatJPzyzEGPwh6ugLpUPC3o72G1rwcEqQAXcCMFksvQw16vPqs",
  "key7": "5Y3yPcgX9xNgmwckvwwC38vnvn6zV757p58Xwu5umnvLpy4qqdiN6DtrKDaSA3yDW9kFtBFFgVRcQg3K4xp6DvFq",
  "key8": "2Uy79eNwVNxLdLzxsHMhWyfcRE7adMVVg26CPqQYpf9XuDHxUm9dLLdRNqjXBVhtkJQYLJzVj5mquhY8sgWJ49cE",
  "key9": "5FuMK8uSsNBJh1j617H63ANq13Ck6b5TNQX6ZiYewUs6CTzfRYV87L6d8xg7v8hrG6G1yryXaGo2Ny3dNBPEAysZ",
  "key10": "2Gmbrp27B6JgumaLtycdXPegcASnxL6XrSPGVkYNm6EswJTD5Bv3BijBpckbeTgeuYvzJpF1SU8KGajSDjrKmL7Y",
  "key11": "5ZFNin3YhfE1Yk8H1vxBQAMdvXkhFx3waj2GhjqngKk5qdEMifUu5BE5TABELmBKVVGNwWdTvhSvMZPsNMm8W4or",
  "key12": "2dq9QuxqFdzt9AauCEvzcLbGdvpjEJyTmVzFn8zVBvUokWmmp1VD48Yvo4zzCpavT2SA2YuR9pBUZH8rBXGzzq3r",
  "key13": "4mEaxQiN8ncx3vWwJGruWB2vUgCMzky4tTzHJFUc7rxjKouLAGjzRb3diMALkdvDYwL5wSsnY8iGbkyowhLrDqct",
  "key14": "4KsfhkefFFoTNfF9cAaF8yATVgQaAN9iTwvFg5cMFLZHvKGG9di8x8zxDfzU91j2HpPc9NKptPLCA3NTCeuUiaxF",
  "key15": "27aBgCjfb6b5GDAbcmYGx8ZoxeLacfJgwUR6Ud5vXqc891E1eQ1RtBEUU2ahCXBsUE7f6Y2jdLEUt1e9ctJziBJf",
  "key16": "4hmgkM7JX5485cye7UPn1D4KiBHAe8gDe7Ef4De1KPgQoMfhpmqP156RxJGqUFcftevCGhwkdTivEzt56QPU4XSK",
  "key17": "49SomqYutDiNsG3QXQ7qoLixxjiA7Q9LJqAbX5TbihxfEL3TdSVXoj6zk6fapd664wf3SN1Qr9fN7rK9Hk5kRAiu",
  "key18": "317vcH3Zzk4bkhgom3NcktviPqn5fLYH54FGxKN471sU4MZPEhirj97DBtXVferhVynboUYfR64j2VgKJ7Z1AF56",
  "key19": "63VejNWnzx4EQuSzSaPEUZXmvoi9r96z9by2WfiKJBDo3KST2WVncZQX88bgA4yDYQ5YuGhAcTYGKZsmJ8aKx83E",
  "key20": "4J9n2rH3obikeBgQbu43AHufwucg9Zfk81bavyZr5bBYnLBP8uEQNTbfQe2gn7HfQfvS37f7c6HzW7JcVUbyRtTU",
  "key21": "3uWoLvA23ptWovtXAdURdiXrbBWq8ujvcXmesRcaDbEnrrtVJVGtSAiK679rgnaRRrKZMVt3iF8nw8kfLC92rKtq",
  "key22": "5ie3wEKL9hrqSzdPNkiyGiGj4aPFtxvQ7DKpdh7TLWZJQSkWvm6Yd6QhHCCdBRX6Yp1WDUqAA8fsAqvdgLcSMBnM",
  "key23": "48pC3GZosRLxUsuywocsuyGTTQf4S2YQMYvv4UztBfV7gf49PkWput13MbdpgcKHQeVb6B7mtjA7K5Zd2cipLY53",
  "key24": "23UyRr5REmqG2eU5W6hJ2crQf2V7JUrLitqzZPJnefci97eeXdH6YmPWyrSqrRLM1gFRniEH5gF7P3WBziPFDhKs",
  "key25": "38pnpiNfCXTBfKtuEcgGvAezT4MvDE7bbj2VDhGkToPpDkNKqG7AGGFHheK3pPnGEv8BMuWw1hxNsBtzNaJMXrff",
  "key26": "422S6WRmRtH662WhsBQFcZiucvzo8Ybd1vdPxFPSMGpLHngcZgkUuykSvej2ch8hXhRnmHG1buQGAHrC2DEy35Wk",
  "key27": "5YXSVDAFH2R83udTMjCBr917xHxQxrUi2t589SB4HP51a9tBESjRux6pS5HUKshTvBPwd2gdFTV1V3SKdEpp61Wo",
  "key28": "22qB7phxuDpb3QW1RVJD8Ri4AYgoHN8e5Ag2ZRPy3fiS5bi8MjeNbgHqRmaqs7ZvmvuCskNwyDVg6aXza2YSfd4y",
  "key29": "4KvBqN1p2ZUnGN4T2ahtdhpfvL652QQ18hB7XKmJ8S1Z5Y9Y2ZyZZvqJ3oQxHfFHeMxeYQ1QH7uXEhmkMRRCAcHo",
  "key30": "xeVvNeew8dHNb5xwXdEPSXWsdnZJULMtp4F1TaxSP6RLYZAGBNhiZLvz2src5JscPpemH4Dg2pbEttEZGouxj38",
  "key31": "2z4oCscaWtMb8RLtD5GNk47rohrXuKv9EagHtkiYtPScrumCcU59EaYEz8pYQkomaZ3NzXb75xMUhisbo69X4ebg",
  "key32": "2nt7xnLgTsvepVy5CA9JWSctfKwpZehJDJFuqdZMT5Qc8NjGNem3kdBXiTXbonqeeeouVRXTyHBPhc14q9koMMwz",
  "key33": "4VBDpTiq8ZqA7oDEsntB1waXJbwJeJMnPnJ39FJJiJgY2RyM4MhMpBtKY61u7sxN3y2LbaWa3GPBJBM8RbPb1bk7",
  "key34": "4g26LqyxitNGmAsh22fSZYJVgBocQJiD5tJWMt9g9ZnUKYuhmJuEhAyyQuZoTBdndzma2EGzde5xYceoyBc1zrTE",
  "key35": "5q5WeHc6TMzApUNzfDkDv17gDZ5FY18BKUYxLfMSLb3x2eERtBzuyZax7mdFZSky4CgHjDxemVPqv2hDwYaZ9uVx",
  "key36": "3uyM4wNPUbERBfYW7Ay3YAQMuEcPixXFSrFUfaXnRiKDyDXUHpsC5vhJMg49NLMcDN4UD6Jof3vjLPvVxZSvrRA2",
  "key37": "UGqTDorXb29mZeisAPxpJmJvAeiCDWDjA763ujCPj5xikervPmENXXKJ2bFx5ZW1orwEbFr1uQWoN4SGjKypWpw",
  "key38": "5cfj3yaRUwzKxEo2khT7Hd8hs8YbctyNx1Gq5avxkwxLZEyzyAEAGM9ewYieC4Rr2vw7cFJTij1KHso82fiUpNE7",
  "key39": "2T9ZNu5h3kPQ8iZDmcDRPVaBxLndgZm8yw31KUs5UXmTHhM8LffzPA8khwTmmGwHccMTL384hLAJ8kQSWth4B3G4",
  "key40": "2dHEwz2L2Pa9RMqjsUoQMbm3kx6UiQtw7LPGPkX7Pk3KCmMJSY4zcL3HhAs6FnhUA97TSGWjxiPyKTPrDmitbuEk",
  "key41": "4cZXMJPDQEGsD42hVBWrjAhv5TQsMRYZfzcujLBU942PHseWDp6bYFXak1j84CYwPFQ4q2Dhn1cZwdEbxovYSceC",
  "key42": "3oPpsxD5t7x2Kz9wqbBTQvPQdh6sxf7rPfFot8hnxR9Lwxi3LAErMMnZuVaPz1pFJJ2vC4g12WFtB7n9zyQj1V2e",
  "key43": "5aE4vSfKPSPqAnjjZ66PeH82wBpT4zgtbQztjH4gKDC6Gg8bstP1jteCdtipgTp7HcCkhSaQQkcENuALrLMroySi",
  "key44": "ejaEXiFavjz9RyjT1hWuZsBsmV6aZKtr5rjLSJRtRPLD3NQJVdWdfouRQdRSKKj2cWsi1fMH7wUprRfTDhWvKLe"
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
