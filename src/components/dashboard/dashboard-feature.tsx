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
    "BkQW2cZzsz1BkDfh4i4At7ZX74K9xtxv9xAWsYWHNzRN8FBuAvFa9tzak5DxMrf8dkN2egDKSXq41ZhduRebANj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LX8Uu1AMkYrcruCvS3zS3zJQp1c6TVUJ1LBr3DhriNV57h4gWG6N7qGfrhEPp5QistHnvHdWhaKpsffcVrwZ9xc",
  "key1": "5SkwNEBmjpNNQYBbnFK6AVJrXZm4vNoHx27LdBAanuAaLtetVk8pdWkkYFqKXws6f3VcdjLwVZbgVRXQRGEJzARe",
  "key2": "5VUFwRh4tRuYVpGmW7ATeTrgKr9A5Xmneb6Q4Hfb73A9cATUmMkK7ytViPTncFoRcZoZSBscBss1NCDJ7riWX2nr",
  "key3": "5dgdWmJZFGP6EE7uWSVhZegDizZNxV5FsgmvrykDMTM5kdViExFe1hYAZdw3niNVtHeZPSqfdcHkrgnei4GaEbjU",
  "key4": "25Gd2RbTTdsJGg11FYzhATkyN4WAoQ3B6STdRoRZyB6iZxewr73xb4N4aBYCJhSa6gktAaQfxf5n7HycbHENKKTC",
  "key5": "5pBJJkgsqBFFxbyLtPv2odqWfdaJo37nujpLLeaoYYoroqYZkEKVe21JZtAPAYe8FshNE7ssqwHQmLnHyDQmTE5w",
  "key6": "5HKgpu1UH9xj7VUdiDKTwTiVUGyqXqFPn1LZqRVDpz4q2N5EebCezSesU3dSCaoc4A4iXpjCV8bW36ivpoh1PY2i",
  "key7": "4wvgy8CoeDpxnJwnGvhQEHUkH2LBXP9KfXLfdiJf21VRtNJwJZCE4vR7dCj3agxBCQytySZ4L696ZL6kD8B71gBi",
  "key8": "29ewkpmwMcGQgXDq1LQ4cRuC1XWWHCpRfXaHUMSjA6ufhj1YoMpw32EAkP2MwV93X7HTwR3hax5egHhxih5xKF3N",
  "key9": "3V5pZtxsKHXYrYDsPzNsKu53VE4GBxir438dLWPN83HgsQ1Na43wXznjZNd5nbYuYCX6psvECcWVjthPXUeeo56s",
  "key10": "Nbzc8tKpTQbhguYikqPZdWFGusb9bof9GsGQGqyAGvLeXMw6XMb6Smv1AFWLnY7fZAzZSuVYxANbcxWo5NBtYYK",
  "key11": "iAe4Q5xwMnbPcnQ59DarQLGoCphn4W9RVhmFr3wj78PxGQ8oMzkEmZ5bZ8NvhuV45hNNPTkdAS9cHsQ3AVf6g2U",
  "key12": "63KQFVDm2dpfgErAHWxFG5bewz84NQDMnF2b5VBjtDC4ebpij9S6EkS3REUFRPUyUaSD4p53TidJYRq3yoVU9o1s",
  "key13": "CVEJ5YHR1kAdCqgYrykZUupCsFL84zPatzUHG7vX2yza9CE8fWk5UBXdjhkkUqKUZoT5niQ8PD5PCnLCrJ6Ukcd",
  "key14": "5H8f3MH3aZFxkntLWPy6nerjjF1BSiPxqrbSYZFt23YJk8fN2HukUKMi5mSeuH7HnR91gnajYu3V7bD1MHWpwiPq",
  "key15": "5HbMQr947UctUy4vAkW7UZVqnRjs4SdXxi4oFo7Sr6aVhxM145NUPeAx1tWRkogsBgkZqXCC2mFYn9BxAhJtpe5F",
  "key16": "5HS8UfzpayVLMeN22Ga2LFpkfbBQ2XWkFdPhY1NcFZH6jf68EhCg7E4QnfmtqRRJhXqpYDs1zgZgQSZ7tkiAgq9G",
  "key17": "3rj5RBsutUHGSbB89joUUWMSiL415AFwB5r1JDWsGjpcTb5rT13zc8oFqzfDoQQ4wKdwuAKtwDEUPiobRW2guvh5",
  "key18": "2zmNBc3Gm18z6hJGcRW9f1NjJ4SNKpfGej7k7fLt1SUmC2BDaUAngFbGbtJdGyAzsmNseEVEpeT1g2jwAFGosyds",
  "key19": "2FPjDq8kVrui7UufPp7QddpuTarG9ztq6YmAeawvsubvX1JRoy54TPCNAErwc1BkmbEmNMe7tb3Aki4PBWLJmDxX",
  "key20": "3Qyb7E966ScJ7HJY6fVkrNVVND9URAtrK85FNRDRRvkBKf9XgBdGw91iivoGxBNNGM1BzY7ibzDAgcAkFc6Cf43Z",
  "key21": "5E7MhKqfjqRNZGAS2f8jRMCR2rX2pRavD36YDfMa1RgGjUWSxeqarmD8oew9UgV17yTFeii4PyGZYMXDuJC2cNDL",
  "key22": "31J6w4FuvLb3mn4m6a8ye8MvphLp2oz7FiUMcJjTrmtami5rztPms4WHeWsRk74MAY5RtF3zjaFx3QdCLEv7sTBH",
  "key23": "adAjTs2DUNwBWywqnmGhThbNtseZyE5mNhHKLi3X2TBgLASkaKKJ33jmtez24qmWc29f9aBtfnpGP8Cd45MwB3E",
  "key24": "3hNotYssRVDYdaAKmsBBY6Awh7Gfvw6QmvJUDsv14ixWerhovsdx8BvrV8CWb1QAsbCEhsEjt1V8pdwu2GmZAQZm",
  "key25": "57gD87ucu4jWpQkaSvBS9Seph28wC1qu5o6KHa2iHpSMvfcLDwzgYgmUkgPVQWYP65y9PRduuFCTCXGtBpppc3pi",
  "key26": "Lby2De71ZtkvgCMEe8xQRp6WXuABMFtB53HTVSSt2VEprU1ugj8fedXfcwv341oosuxxfYkPrMY4TKfM3qFwtVX"
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
