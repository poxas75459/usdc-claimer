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
    "4RH2RoEti1FBqkU2AM7C2Hg1Bw5PScnZu7tv3prunoAYk7ykfWk7sxV9xSr8w8UGEhNpZx5DypNMXA3ufyyor3s5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VSRLSDX3HSCR1YUf8g7CFcqYnHx9JQcGnvCcQNTxnDfoqtQ3AUtXiUofQFbFTa6ns49aCDaUbZZ4VJfEaEXK9nZ",
  "key1": "24Y4Fz4VwzJuUpZwExCe1hBrUBwjmuW3WdQNkFk8Y4vc6njECzUtmVqyKJmCCErt1Mi4sL7aD7JXsadZszFTS774",
  "key2": "5DYMgSGShmg3xfiUZnJ7RXAKceyUSEjAmSxMnxtssvwZjtiNYq1Kc5QXo5qg89T4nG6jGiEUyyhmY8ULCTEz561k",
  "key3": "5RqHnDaGpDtvDw7VwA7Z4ZCVsZ7wRqwLB6YwqQL2dza4kDK2vHxkxieTvRB4d8AFif1mErShQvCBpsjeme4C6K9k",
  "key4": "YgCMAU5S9p3N6fmrnD7yoHaLQFJ6DCmqiB6C7gnt5xSHYhXfWfGGfS5xeV5nr4Pwxmp313SfvEHdQvZgnXwEfR4",
  "key5": "5mSDDCzw4YQ58QiFjPeBWpRjqs4p1e4JQx9x6qXYCStEjWjzf1rgS6oHbvgTpNu6mmgawb7gq3KNJVHKx26n2hEm",
  "key6": "3fMg366EckEgUAkWJCyyJ4F8RBATnyR3t46nBnLSPQ1KAz79gKfoceA3SDndy6WtQduBvVwK2rLJUr9UGk59YcVt",
  "key7": "2Xz5Zjo5AiiDnHsP9mCSf9RCJqBKe345AyaW8aaNCvTTgQtAsVHiTM1XK78YWhmu4RhzwpxMSz7ttvzp2ihBeMpu",
  "key8": "63GD8FyRkiULGHdUak4pBXSfNq4jUaFuax832u29J12PRcqg2e5cW57RAFTYBc5yk18DcB7Ja9bi6Nvtoe6wM9ur",
  "key9": "42PjABJnCTqmQ1u37nz7tXE7VPx6XGiZDieDYKt1nkXd2kNWKC9HpBmgDpY1z37NEYshM4Y5SJvX6YjaLXWWgLEw",
  "key10": "4JQTFHTfmmyNVr7yPn2xbEmQZ75d1iR3ombddqSbtCyAaVQNPGbaTsVc2stBDhJfgQwQeDAvMSTukzPho7JNuv2L",
  "key11": "3PVXdnGtdcmM1qPb8JBkBeyhELRezWkXvfJ1macLcukuJG4YER2KDnBdtYbAsXg2r7Ug3RF1ew9ZJC2EK1zjRYhs",
  "key12": "3K6V5uFgsGB4iB5Et32HeUeDJQgFaQvQfnQRA4cZCjCzk4TyJ8EESJ3EWTqx2R7haY4FSszQnP7Yh9JSsjw7tKah",
  "key13": "5ZqwnayK7x1Ag8tjJPA7ihbfPzjqitrKzGvRmPqKBh2cuBrC6PA1fTfxSHu2EKwzu4AuZmD33SC4gdv2tjxRikE8",
  "key14": "Sugdxc2H4abABCGp8CyGXQxkAPZaiarb1UcdiEbquLa444f9j61Ek1FjGK74JxtUzGwZe9gVayE9gVE7vjruFEe",
  "key15": "4Fs4k7xGsb3bR1iYi9tr2ejoEni6qNEAee1kvk4h9axMAhhtcR6FeNT9AnBNcHsBsBdXkeGVEWj78Jk3i2W2eDrQ",
  "key16": "DsGzzTMgF8UsLoqPs8xr3d9Cp57c89s2zun8joWy9ZAFzghV5mBsqW8ZBZVFeUNKSWgMjJW83SbejfrVBXesDrZ",
  "key17": "ybPurdp1HJcxvH1Lb2H3KTdTTp2SbFGaZRP4FoQRvnmtqYGFP7bDW4nTtBTUZ1skpNGwiCjpfPyjWxQVregSHE6",
  "key18": "4akA3hmCsjFTrswMWCAGiYP8Cm5Kczc1Qrfex49M12L63tBS6MuiMhYP6raBBd4Zxrx5m7WdozifM7KHDVuKNbNB",
  "key19": "4UQ2QMFBUAsR2Nei9dwZnP3n3tQsn8igJMHVfzeD2NzGq2HBZ1prtDy5zqc52rwJWupnfkyMPT4Xrt29yW2q6woa",
  "key20": "GjuHTQ4jy5nijNWmWKn2hz5RvJuYN2jXT9CJiRuv7BFv4xyokT9RKHPfFJzZgRZJ23zvurAJXJuXYwYKtXmL8hk",
  "key21": "5cTP12EXBpSbb6L4z8FZGNqU997PT9rYPa6CKcr5w75cc6kZzVapYRPb9avbH3cwMpf7UFoMrc2sm6612kHoB27R",
  "key22": "3ko7YFtW3W3rEN6epaSAQwbnEALPjUuVHScjpvMkMSfLKS9ypxYcBaS5KvdxMwrob2gzsk69vXbvr6731HarDdvr",
  "key23": "2WnaHZSC2wsd99zjzByBaasFagyvYVcDbcCyLmbVP8FcEe7eJ38SKmfSYHFRYSvvVVX2fNqeAx7xhbHMEMX7aKof",
  "key24": "2NQXhrJySn7jwethzZ6F57MBKSgmG4aWu4hqvaM1MRvbuaRedwtJmAkvofbGxgN3dM9WPyzhTsJmbwh1FHPzbfkr",
  "key25": "3UZLrfCUDNGLTenCbHkP57PuxJieRAmo4C9w5ZX3u1pC6ppoeWaBLArmqFaAtCCknCo5xQcrm2tFWvvTZEXxyhHd",
  "key26": "ZWGjaGzbMK6EYBUmm1J3pfK137YJEqtwoBmcgfdff3d8ebkbW8D64afYCUNcdXYQDn7nc1FYiWBSs1XSf4uVcEU",
  "key27": "5enXomzcGZomC9HqjTNpcdR56zN86FwAVWSarRyFA32rL69RudaHCHK4SNonEpbfregpPnNP74qFuGebGZVYfBmt",
  "key28": "v533MwLC9GJtusd1yUpBUJX31tJsphWm2FGBwfJXVSNGq7zDwD9eWcBHQiaw397LtBupMz81Payjx9EyjoGu7iV",
  "key29": "5utk6KjK6746kL3QZGJHQ9yijve7jaUZt17e9iArhhyBNFpD7vDWPABC6p57JjXvd2TcYbfmeSm5aaXtTPGnq4zF",
  "key30": "3ub5mN1mp2g1DKvfp9aJLgMqgUsZCacosrZeezwrGua1RHyqJfAFSwNHZqDkYJuyZ8TdFJ1URDbVVFUvNgY8VYUr",
  "key31": "2yBE9nJsGuFu4GFVkxqjWntPCVV7Eu1qH9QwsQxmz8a5T4ZPT68LSZevR3CnMfKz5QCnZKqjMWhgtzRd41SpboWA",
  "key32": "5DnmEe2GQSDbmZdncLt2YL3xpYfroAZ2eYXu9crVUGKN1M9ru3PVdei7Q3vMrK42gyaVAtvsjSwoj17C1CdgWFjY",
  "key33": "o8G4wJ3Zdhx5zcuT9xrvDZNLeetHcLn2UeSAsCpgheCgCcem4SgxWr9MTqfYjJskMRWYXVUku7tS39gCGCdFgoV",
  "key34": "3pBwnUyECwrbbx4HMANRVXqwKWoaWd4EDwweHj4NSjVyU2UyuWbw4m85vzVhrbmPC2oUPpSiksMH6a76tjMUj9Qs",
  "key35": "3AZEbZxiWZZpeAWs2PjfsCPfM4zsmXkHkwx4PXieUDZDcZRu8GxKS87VYwfMghWcKKweBDMeM33oj66tSR86tbBp"
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
