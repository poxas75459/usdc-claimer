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
    "2MvRaWY6rEx95AvwuRtiTWcDRT4jSnXfNrP1oHtH9GwkzM3JopZaWW6Rq6cPs3krKbnwYbGsoJNCSxCeLAAVhez4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47qePs7kG2QcRG7QCHuXyY92PU2DswSUS73SSy7jSE5WohpkswRd3AfdsCxMhk6CzGSmQkLTM7H5yjzfw1LoZ2kT",
  "key1": "3BGr5D18zPHzsiT7cWe5rYJozMX964qXYqs7AxdttrTjw5MzU5gwipdVcwBGt1sSdigWaPhBFHfJ4NULzPuRZNDB",
  "key2": "3DzRHyqcZgrH8Va9z6Kdwij4kSEUZ6fhnCt8Q2DxFBsgSxk3xw1yMMUTiyw51TY9wfPwa85BzQ5N61WQaFyapSZJ",
  "key3": "4zLtCPRKcFV8sVN9XHhfsnSu7YwWRUtJGR3RnBrSjd78rdide7thrR7MzfUhZxRz1DUYp3A1tV1Vrt8xVPeKmm1Y",
  "key4": "e2R7NV3w7parCX9zguiKMKewiyEarBHUi3B7XW6qNjneoxJS5WxPVbJEnEpCVRBreAMXaPCBMXhKZd6qVZwz4fk",
  "key5": "4EMC6TdFo9ZSp36MiyS9MdXXHTwVK1wnTaECJH1vF6Ht2YTvtgQhtBFGrxvH7MrZpDvyr3KAopcKspBzEkthcWGx",
  "key6": "2iFrXDzveDutyRRXXahsnmFouLcHKNuQkX1W9epExbKUpTG88U7Cmur2F9rPtwcXrthsvKgDZyWq52C1BRjP352n",
  "key7": "5ibopGMYdsXpoFNpr1vdquTytGHB9pyKPV5Diwu5DhGig8KwAEqfyeLtenSu22K6MQTSBWShdUTwSG5XYeBeyWsp",
  "key8": "4EcCt4FXtWwwUAtk2jdycUJ4vJBShtkenTMtwiftejcHZRUafNCx75Ca2w3FkYy6KjfSQC3bjXGg2GdjAei3X9f4",
  "key9": "4htpgncyd7WciNN21TcEH1V8prGXMRBgAURP2n2RWMxMnexmN3FEVztFDhxivB9e2xyAqnkaLcQg44j6qcEsmofF",
  "key10": "2MVuFwJqnHrMNohHRv8fy8zJHRExy2S9zNfEGt342yfiJYqKSawVqgCw1ZZkbJC1tdadzwjVjobnJoNMQ37VmtAW",
  "key11": "5KNJpeoYL8rZG6TDb9LxcULD6Q83DR6G2Ss1Fg3CVSS2h8L7ch6FpyR2btyvnVGoe8rQTW6VuqUiW4i4bqACrA9b",
  "key12": "3doJVoupkhDgSyPtzH6XaUJ4KkhRkXA7bCZEsLSPePckDznvSKDdxgp8cbfJA9pBCPqjMV7fKNzgP1BTYU1rvgCv",
  "key13": "3v8J76HGTpBLwwCXdmo5SDA9WP47NGpZBM9Xq4PuADXJDW5mXsxKgwcWJkis6dgMrmLdhzbbwpyTmqeHK62HLnvX",
  "key14": "37yPkHTeDCy39mVeaSb2zoPPBn6c4vm2R1Lr9PhGTNBiQVDhmHQUCiDvisjbdGDhDWMwxeryPYCPvRWNpncwa3dJ",
  "key15": "5A84uMtgQhLr1eJr1PqhAZboVHmcmcuw4Pqi9NVi7dJzDidVTSi15YoBjJCr78BDdkxgdGH6u45mTQ42qhR73s26",
  "key16": "5zBKrnBnwix8gevKW2aHwTLbqNzuHDHY7jqdzQkyMPga1MaEFzmLizdeFXGnaQzRAS852yvDNiyXF4SXDNwYcSbZ",
  "key17": "4VthkVJrX4TdUuabzieZzZGXetYoGJgW5xaVyqbRihMmvz3fmHriXtqq35rRzqPnfJRMQM5VQfTFvG4zLCdTiLag",
  "key18": "2ecoLRoJvhvCZ6tXZx4rFPNnQ4N8pDZ5jCDVcuugvN7aFjz6GQKNCie4pKD2TwEWEFNYo9BJM4AN5nNCZzWSb3QZ",
  "key19": "558GhwnqPSrxFAxVWbAKWEFH2hGQ263jVgd5tYssqzMZLatAw2EJhz7btP5mL57yLuC3whxA86WiZ589g5DhJWTb",
  "key20": "VhrvKUXunD83nKqe5UaMgHxT4LDGfYTSoPwfGX98PXSTFYXgDXMiuA8HeVADFr4bQAYZqMsm8w1ikXsPXbEVCr5",
  "key21": "4kB4o8L6Kg3d2pwFWBNh5kDQAHKKPNZKhNQrJsPAyoqDAgu52p94EGH9xB6a4yqPDythqHL8w8q41mw2BKwH1Pqo",
  "key22": "45cst3uSxAsWpdLcPgynZxYYbfdBHALs1UvSbX4AKmMW7fbSVg52P8RRLjS2jgwL5uu1wytgsywTwck32ricM12R",
  "key23": "3oZ9o6n5R4YwgwDvt2wKrRKLYKPdf2MCKksCpTZVBoJYJTj54y4ZJwWxwhQLBAWC3mWRvEobvfsq5sW7M3RGf76K",
  "key24": "ebwCqxyY21uz6h8tvsfWedbb6xpnR14hhD6dLjZ8bQrmki4Fwh1ZoCNAZJ67aiYZqswm9F3KhK2PgHcptmdiiDD",
  "key25": "s9v5JTo5HKLMcKB1bJBdjHNrnxmgtwvzjM5QKe3RAJb2eQWQhQvmWG8Tke57f9ixReXRfHJeixygm4XyXgNHJGQ",
  "key26": "55wq2o86Xak3d19F2UM2x5hySVfCFmPbK51BzyrqAkbxweMbVkStSnyvdaCzFVRGfizJfGtE3xapfmYr8YuTCn6m",
  "key27": "4qHehsvggocYPMGcENCKxekvZM1pEPWUfZcMaQWGcXAcrxY4JQ6Z5GquwveSry9jEC7kgkmXKSc7rUFf3E69nYW9"
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
