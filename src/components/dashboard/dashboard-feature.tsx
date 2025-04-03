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
    "5XyVKB8cFkNDxefowpVAvNgnyQ6dvc9wUwybibQWKFx3xbgKDFo6FqgrE9sM3nNFrc6bYPfQQ6QA6PJ9aZDrsBD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mVusbQd8LGuNagQkwYnzeqaVGdijeXwTeNotjVRSm4DMgce4LJP8VKQ6W8682XSEaWwGPGpf1fromk8AxfcRZ6n",
  "key1": "5ketC1zTbPfaq9iz2hux1XrYj3xPYgJcJZrmh2QLj1KqifhCMfWxsoZczLZXMmBMN7bnxsGAWUdA4NPyktQ3fkuR",
  "key2": "58mPM5iavC4csFxcv5WNzqiKARiaRiwFQpChpNGHeVa9iwcSugRaSEgLbswWLhHaQkMD2FZnTVRF8DpMor3CpKEq",
  "key3": "2TMGJehRyniLguD3WDk9tNNmusnK25PTeiRcoNLGQgDpvbUdBWHG5ykzoKcVb2ZPZDR18BdG5AGTyjQFcPDpG4WY",
  "key4": "5XGEHvKS3fguAkjFFXrG6vwigY2XCds6uGk3LiHrCs9DRjBdALSn51iJd9z67nFgiSAgUdmh4f8rVZWVZTqzddzZ",
  "key5": "281tduW98Ugg2eCAvrZD6qiLCE8rzmuzyndyt7hTUR7UyeUxBt8eBV7yvRuo3U1oQn3ztNoBNJJa9jqQj3U6Sbfs",
  "key6": "48FxRsRKu4g66HbHRBMRWQy4yhZ7bmdxxeVcGWratZHa7svCfMtLsoHJYqmcR2hHR1JR6Ku43kY1dENTKprVBxLk",
  "key7": "4hEMyDqv6jjDut5UBJ9pQudWgEkfgAuDLbcWYkgPW56Xy8GzmjMLGsZLQHrz6tewhrcnjFdZfv7P4PuMZtFCdb4r",
  "key8": "EGKQ35tAFotuLSBL7orsawqTjx2CqUDtzDHyE3NWasNxEE6oZKutCh3v5938pqezA8B3eFZo7VQ9eDun7kKUtxw",
  "key9": "64NMQHUhSr4ofCxPStMF1aqYT8k1gWfr1qkHaQQDekD712bge8JhSHnkiYpt8h4pCkmcEZnA9giSJpMhqnsK2Rg7",
  "key10": "2s6YryCLRRbg5XTR8teHwp64SWDVNdcQQ4WTzEPgVTCxiBjBPWputP3ZbqEC2e45v9sM1aM2fjcp3Kva6qwcxUwW",
  "key11": "4upu5MznhBJo3GWhytf4BDFTcwn4Quq2DkcbdhWf6puZnpad6JTbhrRTXmuMz5MU2e9PGkxeoe4j7hL8V9GgrnU4",
  "key12": "5qV7S2M6KeDKKXQUpZD1pb5hE4f2JfdM4x99wvEx8DRWNnNojNs5PUjNvrNXeRKPZmMtQThhWuueU9iSWsk1FFtn",
  "key13": "dKH5nHMMA3a3WR2CLDcuhPp6Rn9S2QNEUE1otEx7LUWJWM5Ao9PKQYhXy41qhwqAPWFJXBuQwkMaQR2UTmp1xhL",
  "key14": "2HxxnQbbKiMcrLpFkHQ8EsbCuwGDzLTngBf3399AYNAUB5eBFkTyYEWsiRDvmdEkzMgZV1dMueSr6ivh6WqCN5un",
  "key15": "3sKTsG6JW63xxNkZogB1CZwsC5YiDyGeSoEGS14JmGPyD9HZHRCrsZ86x1N3L64pc7vAbJzZfW1T757Tc7aFq4xj",
  "key16": "32QfbXQVvLYBiPepyEmHSvVJsyZuv7CZDNPn6PBzGgbbBXQAzynwmhC5cURyxacvpGTor9QpqnCk2afocKFMzCLV",
  "key17": "2SQYkiDZoWbAWXGe8hE1nQYSVCDe4PLVzpEwjNLvbMgFmaS1RcW5UdnuU5zXpXaimWDeiEzrj6qzLvKFSSbS3dKy",
  "key18": "2fsGwMwKNAX5K3dx7BhqSTQo9mttz8vvLiLDSo5KN1PGiiZ8XpEdR8fvaqmyHy5aCv8Zoq9UUcHbpEdgSQs8Qsuk",
  "key19": "4zjRg5tJZUa1hn7R52LVF3qX3taTgH7mWLUYf8TjS4qZohguT23rdksFXvveVSJ5u6C8EBXSBBGCN1f7MEtHBtdo",
  "key20": "2qRq1awGB353Wz77HyiUx7g6NwJ2bX7wLd1cs7b8wjHXBUfvG4sWXB4uKvQUWCHYArW6DdUEsVnSBpXTiQxGN4BS",
  "key21": "5QotFfmU2kYkZnXb2AmNBFSfB6jouA9P62bxr9PCpT2uBfvvecuJh9CBWHurjEenhgiCnB6STFuGrtYkevgdzjcG",
  "key22": "56bZftAmAsZeG9fAyEyA8PDwf8E4zhgjSuEaNUyvTvgQKe3S2FKGSXxeqzHJzJpnvUNFiu479GskAFiEiWg4UGae",
  "key23": "32h7msyEYpgMBdb2VBgu4aQRCs7MwMUZrEVmkvnj7JqjQRuL59AQcvNSsZTvMivxT5MNBcpMhVJve3nDqSR85UWZ",
  "key24": "2NJ49W3TGKrwxqVTYGWxNsDki4TYFUtUNhxvMEiGyYBM67WmzDVxPG4aqQo8sRtEYHvQvGE6Br9MiMh9kqGqmHfA",
  "key25": "4ZBRHYBVGaVAxhBvNDwXpsDkhxnJAKUCA4m5aidHaCDWjUFSU1W61RuAYKvYA4NYhR1zQ35gbxLg8LWsVFEtDQes",
  "key26": "2M19fYCJs6DRhqYXvtF9XeSCwi162JNWRBJtrHDx5NSXjk7e9NqquCdXXv9HR4daS8opdcqcbmfZqjq94jFLkpvD",
  "key27": "2SaB2LGEeVA1FEaPzDeLZKr9S91mNrzsUp5LGUWhBhrU4tvXyNaiJCEPhaoJM64SxmuB3R1djLWfzhktwgTh84nF",
  "key28": "2kXbPSW9b9YdemTsyDcX14CEh4UFeMuEwSNTqyoJL2GxD5cYHU5zmuBcm3q1dTV7ffyKQEMLtRqUhtMWW2qRDyDH",
  "key29": "5qJjR6H5f8P8n2r35QX33Nqv5QkCUdi9ZDsDcwoZYgyVBguaRVooPeuw5QRpYj6smBdvrX1TVybDgtr5sQAZ3jRJ",
  "key30": "4LLbAUrwcbtbSXeBqrpE3RZS4mWVuCwQQgoDofjsTE6uRya88j81N5ovyYfYvaVCtdffNCmV9J2kTmswoaYoMjhj"
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
