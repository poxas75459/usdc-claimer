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
    "2ERV3RLVDtbekN65F2GfiG6tbSi6XkY3Up9gPd8SWcSqdrTH2XvGYv64bZ8BefjeiHewcLXEjaZZs4uWGhBuCmPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PndML6V4ysFza6mzbPpVCtbPn7sj2D8TJ9v79P8jFB2mCYkoJCgWy8as6xesjwKq9GqPPqveci33s9MheiAHV9d",
  "key1": "5zvSjKSVuzSD1m2HdgqgDhSPguPxC45NYBNz75nEVGdfVG5BcjDq5AdR7THW5SFdxoG75vNXiZoEzkZuY3wnEicm",
  "key2": "21nfvo9zXwK65wAwy14sMNYhGQutwwkkuRyPRXXgSsMxUenhYPaDG1c2M1qqfndPSp6UKChqpNXXZ5x63iCkurkz",
  "key3": "a5UgosuorEVeDdwf2SPkBXNgtFAac3KruLmMG81oBE9spuo3EMHGdJy87pUsAPFccHktqvSvMgEuQ56eNSusjGf",
  "key4": "5QkiD2krnqwHjdF35Lcw6Kd454LtCUqKzBpE8PeDZcEkY6PYa1wiAUwe8vGShTaEsfBHGskJkvmQJoSaLAE1WacP",
  "key5": "43hf6Xk76trRLcfS5J8QxUnMXfq7U8Z1sdsWctfo681GS9VsbqSJzxStdKjGo2M1Nxi2QUg8rU3cTBnbzmuAmuQN",
  "key6": "nGbzWPqWmMkGexXnC1GnEnRd3yufax5efSUWiei8ykxkEijrPnnN9AvwtNoMn52rRcL6ekHgaLbcWK1pTmsitQC",
  "key7": "3BeAUtrGAX8mCZ9pkbgtAJUgBLb3msQeSbuzoAporugPmYWUE7jGSbJzu99Yu4h4A7cQSXBmGkD6MJvNmvfTyUKo",
  "key8": "2Nt4Q6SdNDrDcvEBiX2jDPKMxUJuZsSQoL8V8SKeo7dFRkwaT66hsUXjfQy9fKT13wSwmquTiTbjH7jGtzLAzmtw",
  "key9": "2J7iqhSGRJiRNciZ5VFK3XRWBDt6TjemoMaUd1ATBGaT4nxbbZzHebL3JeqyTLZPG4DqngUwrYzUPvjsQkj41L3i",
  "key10": "dxyAENh5oEEJkobtbi3HsxCrjWRyqd1oufanGitDX7vShh2JvpuMhM3n1J77g6n6gRuSFC376KPTSHmr6oUhSxY",
  "key11": "2U1pCqJ6iGkPLgZCyxqg6t7XLTmT28pChCTW911UinWbtcM1bTypFkActwQAv3aNWGBQ8TKGDv4GEs1r2Zmg2hso",
  "key12": "2NLXp8vqTw5H6BQrNhgGoLb22pAoKahkMLgvdx7SogYJEWJL3EUWirHkj6Kbvsak7kFdVdamWuEFHR1Luw128oGj",
  "key13": "3K7ruBgZsmCF7o7xxJpQEkjaFZZeucE5yMKVNY2RMddyod1dpR1FZWX3wnRQaoo7Qg8py6yuEmRvg6vQs6Yb9Kan",
  "key14": "3zsKHs3cvFtL7rnPzDod1bPxEk5ntApkhKPjxHjvtHCXfzexs7p6bBnPXQwWrVCDUBdaBLs2r3cG1fGycaNsQ1Bw",
  "key15": "2aYZNSCUT3o4KNvQb2jEmLaC4Z19cTeYN3kFbZmBVVkEqFJEzUme77GvyZSJyPreVuiYb9xUmk6eumfzEAk25Vkz",
  "key16": "4PB5jPViSnnDLfBGGi35wMY4zu67FX5dZU4F85SZiobatKR639GypkkJ23Gr8cELbcJscidBbkWs4WmYrT1KQREt",
  "key17": "3FWmZzNw5nSRfqfCXFLuVZbSb4e99ic4uktctb4BMVS9u79rkG6QMWWRx98a1aQ7513id5WGV9mkyCR5S5peaVwm",
  "key18": "5eoJ1ZYxRLnhfv1KMXR89tbrEtHW8wwmDrkJwrSNU5t7TLMA9Wo68MGRjZV77jwKfEmKhZpFsssn7EisX5xPUbtP",
  "key19": "3nBXLVu21iDs7M99HrCg6ZUd7NbzqHfSwmpNSNosofbbVZWMiCXFNzD4Nh4QEkyy5o99VUmXGzv9KBbDJ7uH4Cfi",
  "key20": "34ETVLEfwyrHQ78654HjpRmhksGZ1eT9CWJLqAN2DXXAeNPrPwM6HQYrtaoqD1PVqvErRzfRXtq4VdTwSkRGfx3i",
  "key21": "52A914FWQGD2ZsqSFHjmkHxLRxCpNHfwM1MenSD8fUdtWhnE3YM46fvcwqrPXr9AEPvunXuRvBYitWLbYUggthKu",
  "key22": "3DTiC6iWFrdHTQMhivH9tztWG3jbQ4d9f53hj4hkNuUnCVAt2Aok8HJGhkbLtDLXydyZijRUHekBB4c3sm7YMa2c",
  "key23": "3RsbKELxkNBGB4UH855NQKc3QDCxZrB2V2MJc4YkrVpZmRCkizt1XMBzVPLtPJ9RUJi4uZMqCjnvHfKXvfSgHNq1",
  "key24": "QTsn5P9HUqJTwdwMw5WEx5bTeY2kaXCJVg4ER2qFeKd2xWaQL5y64y2GcLC8A7zTjRA4pMdjoaMkBkP7sYX6Ph5",
  "key25": "2bg2FX1NnT7zfQxugrun3pmwrxEWkXKwjtPWcfrJ7HfS2rpkTqXbpkgKk9HD6aykxTR43dowerzrzVuM7zC28wGz",
  "key26": "2oZCsNBwmMRMFb12Ye2h66GsiTKTVoXAMTkLTGFhsxSR9TLCENT7TNcSV86KKKJXYu9WmiNfwmZK2NL7SA5KxCPL",
  "key27": "5mPmFcaorHmVPFMdM53iGvwnXEBTBLpGErMTuggTpy3UcbYJRZxg1VgcMSaCYF8TpgYgG5quR85bTRLgpQJXeUu2",
  "key28": "h4ckxctBmWMv6sueqG7XcBNxBoubACmt9EywhKHm1ZBpx55ZNRfZk8BvEvrsuBjcm7Aio9Jp11ZzRdxF3qgr5bU",
  "key29": "5WAz5PqfdrXb1HW81DpfZyRfp7oegD4ksetWP4NMe3vZ3pWxXQ383SNNSmAkBoxUb3YzTitSkCREkhC4HkgpL1d1",
  "key30": "3W5foxN6qG1NNfR6joX79LTqFX8qPhbhQ5Djg789ijLDtvLe65HRzyJ8ACPAA6DnXvhDsrozTvA6WbwpivmFEDhU",
  "key31": "5U56V4XSn92ML62PFTTaERNXkytH9qKP1DE46r5gWggdGmGb464nWTCQG2bt5hk85ZqWRd6bMMstKhSAX3MeyFYe",
  "key32": "5FoFpnrnQQzRzSh2XZ9kxWKLJr5SDqZFQt3wnxkJEFHTNgJAaN5w7Am7TPR8F1qLa5dvZfFt9fgDiFnvgp3CmqFv"
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
