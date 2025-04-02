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
    "4Lv4Z7JyiqKZLDusJ2SiT8VJg8answJ43uodDsxmWPo9zNCRP873XfPnqy4ncatft9tZe2NarPLKAHHgeKZEhVP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cch1PDe2ShgKbn2QZwNpCMUsroebCwF1zgTtUiuBkDFjBzeUqKRBLff2u1CmpcpqipJC81SVTX6fwaonyhmNPYy",
  "key1": "2Xv8gqNSiGMyjdNCsTJC7KEpjD9f8aRNFDPBHBF4CZTJ6LHJMRxTw1B6jfL833kHiwJaJTHoUdv2VQYon69p8NLS",
  "key2": "3QUAq5iaQM5T82TWu5PiSx6rBkuFvGvRuHh4W9Jjo9pembuN5cMGbxFywM6YsMNSuZm86jsg79Kck343v72VXMRS",
  "key3": "WZLdnfxu4KAaa8PiMAeBci43HPUiJCoD9PtSH7z6ymDdQkZ8Gd6fLRFFp73VLPwVhgbMJJW1wTk9Rrtoe6tuTFY",
  "key4": "2SRqeieMrVSjiU3uhJCWesuGtBccM5XJTbisYvhsbibbNJuh9mGEFRSBjv885fZygYBTFaH83qokfXMx7fwVcsYp",
  "key5": "D1cpV1dQRW2ddy2FKLAfe9UqA7heBkoriUJ6Bt8foBho9Crh3NVU717JKkHE521yZ1v973D5R69iwQCuc8qoh18",
  "key6": "2VVkgktBBT8qVoTd68pzWFg4YfCA2zMyxJd5g75ooWxMyUB3cwbMrW5fZAPqwx3n7c7YA7HtQFP1QH3x8DNrHgpe",
  "key7": "5vDH1LAvHeNNhGU51rfNiCY94UNPG9AXZ45wgxEh7ysAb8FGvbeCErCg2PUHQPLvd8KdxSuG3cqzQj5ZJkJ1rocX",
  "key8": "2yqZZPuWuHJxvmu2b9LGLpmruyB35WPhDwLzEo51PM2iPmyva6vQYyACPchNwe6uqkHqm79WVZ63San8CkSrEKLi",
  "key9": "126kv8j6xNWPP47o5H5Ar5C4eaf8yVf3ipDrWh2aRUbD4oxKS2yT6Vv5iBKqa6KFwAPA1BLcFkbE85Let5HqTSSx",
  "key10": "648cxA8dqy6bpZSvCuEHpjw3KKH88F318WFQF5xtMe7cZ8ZeQjs85eZrVUjWxh6zFfZsUHJydn62pYby383mnANt",
  "key11": "3A2EVbximh5ppNgfoVdxsrdNchqH3arwohGnZsA7ixdgAqSeGYaupvs8U8DaQZdHe5Kt5JYUeChvW76eG4XNKVfH",
  "key12": "jUFSmEYF3PDJ3hqgNvh9qcWXiCbMCu7XmdX3RNNzGWjBtX75toU9r4VPxucqRhLcLPgocPPS7AL8VFYPKpr9LKh",
  "key13": "5T4Ew7qspESmQgBn7g3RGu7dZ6UVaqezQwcWLmMo6T2JPxj3BhquibicDkQmHpGJ9qrxj1hs4kBmg54m45qhgYUE",
  "key14": "3PR2K1uPG9fHJEeGbDgaUhezZcSXAk5qHt2betR4CyvMtxzUTmEvTDwncjvgswYhz4Y9TSPbPEWWEkb2FLiN4i3k",
  "key15": "3uspSfvcvvZKKtize8sZMGTkEWDAQWLKMRqEyu6zpDLnR2puBPctHFeSy61Jd6VcWFzFWkeg9cg22Uxc9ArHVeA5",
  "key16": "V3xtB2j4uwvqfgNM53B1FuoCc7YBn9an5jrFn2eQHQz1SfJwfgaHHQD68JGVL3atS3LDVepJNQM5cJTRnyL2Nwg",
  "key17": "5khYCdHmFN7BvppxSUAspULjLJeeRx5VSmB58psMko2rAyAK5Tp18ipLW8f2tHyrK77uMZSdMNwKjhQ67e2SZmeZ",
  "key18": "3bgNNE6nCy8m2PrBwruRua7GxGM9e5xZMaZD94ESBoemE1VjqrgAyLxeMrjKE7UKjwwh5bE9CWMPVXpUiuQ2Jsa2",
  "key19": "67MaVej1azxwB5MtPYLEaL5hQitC7qA8QWbK1mSezpg5puS4PGFWPDJLgyt3DACgX3qKYtttaWN38cTEHbAJzF9f",
  "key20": "2HeLzxS6pB1QDQgpG8wf8zdu5VkGaeicpfybAAkgcC2i94q3PRNb3uo2VFjCzb1veU7Bef3p8vbLhauz7jbzs4aY",
  "key21": "8k6gFGr7vL8bUkjEj8MWoqsHz4CAGfw1LWoJXo2QM5AGojqR62S5bZiaTfWbnTqkwsbK7svuAKKkfKzc831K43j",
  "key22": "5e3JeyusDsgy3NiQBY9mvb9fCKFgb2yH182VXkczEkYbVQuU5pCVxBtvRpeFG3wHgnjYSPfFtsx8GUgwoEMFvs72",
  "key23": "5VWJKmmAepCFJLLGvPsTGxCDWeWwNiCaf4MwUo3Tn3hVS964uPAP861eQEWa4hMVM9gtPHopnMEi1E42UGuTigT9",
  "key24": "3t6MAHvozqkJJYpAGW9vwY46UqyWRuFDTq67jktiBF5KXejtcFYVBMG1JAmCnADTj4BgBHLu5pUEKrSBYP6y5hJ5",
  "key25": "H4FXFm59648KuqymLZHiSjbyoRJPWiyWmsaGWswjPamFBtYBVjx8jMCTCfgyzneCqgRuQarvYRsHUUnEnXomtoN",
  "key26": "4nuTKqyC97p5CzwC4demua3nfUeYs5rmTyDxxrusfHMa2rHqh5E1GZvg7BYE5fSgSWioof3uFnZA5umrxNAsWECf",
  "key27": "3Fv6xdH3hXd4fXptbwGStjV2bp6hhMXtL8RdUZWaMM42dyASNEH6GnriWg1UDHxyF8W96sfCdSWap6Z7n4v2J1bx",
  "key28": "gaRDDj5q1z9uHm6FPMGEBWKPsxQhwMgaMj6T7QRsS7amqRnQZ3Hzj69UuzKhMZEwuJLLaaCuWZHAZ5z3ag79hfD",
  "key29": "5Gemh6qy2LM2maqgzvjRKDPkz6kh3kYPGvAXm79rex3ZJsujjncbJYdGTsidFJjaccQQSU2ng4AiFaEkeds8MaSz",
  "key30": "3aewFHnSFeH2MdHTsKwEZobFXXE5WxxzNYX7A7SptK7ii2yC9Tf6EhrtCtLhgAzwB9q2ZrWH8zMEhah95X8iG7e5",
  "key31": "29shCdLad9PXZKunSjYRPBvYDJqLvQJ1ugLDWbRaByxyATJLteH2QpkDASw7ZQTtMBM6WWbBbdtgiM9H7KWhVMPj",
  "key32": "3CPUCwLEwit2L6kaPfc4XAZ4Xu4qxfpq7jNMCjNGHfkJ4YnVPWWXs9RzFKChU9sUJ1nXcwCtcfMrvHFDxLuX6Bm9",
  "key33": "2xwXSK3E96Qrf7sp3ArbgSTyQeARvNHyA182GC1QrdRkFyzxHrLq6pE8FmCo9ssuDqkrTpAC3ke1c2BeNTzy7CAY",
  "key34": "2EVVBsHTFQWEECoQ3ttExHiTVV6WTWM9nHe3p5VatWikJnT2LV898LU6HgdSyidvGkuVHZSsr8RgEVN1ZkW2vmEa",
  "key35": "2MkXE6auofpRFXKMZQeMQMmDRqrAyeEW7WT8NwWbBJarCGgHXq82zS4JRV2HD8S7uDGt8ST8Tk8Ap2xEavJtjnkp",
  "key36": "5Dz33UAMDuXH2c5Cb55iwMaFWXs8WTFnJN27fGC32gXWDm7NocUmvQS2qmbe5hqNVonXMeGZTtoANAqd2S2ge7fH"
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
