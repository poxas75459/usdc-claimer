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
    "2nRV5qXbQqQyd43csLgVjKmPZKF99fJvuA8VaSLcwWdYAQ71pk1zQWdGitAmjqHeRzMq6qCuRinK81smCbHo693L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rDa95s3ZAxnZEnjVb6J3XgKh9h5LCPhqSAGueSHrsh982zPtwUaFxd6pEwdgNx1GwTRivYrqyTZrgQxG5kaprT9",
  "key1": "Lf4tZyCMmZ9yM317SCoYuVph1iy1DqHHBE6vSTxChnPBw8QpSpDm5fpbW1U5t3uKEetMukXH5FVpPZBLbCtxXD3",
  "key2": "4mG9GqNTw4PTZePa4GMkiyoNjK1LDNm8PXBtMeDvSaVeF3mgoKXfrcAJ9d15KFL8rGm4RyHQ9jfqgFnrQzDEASKc",
  "key3": "3fK6h4g87LRdvqWBNmcK2mvw9efQgUwk1FUeQyhuNsFWsxMdnWHYAwFrxw1HwLtnUbzjCxmrMzK6ZVg3RpePpR7J",
  "key4": "2qM1sJpyx5Ydue5X29VczUhsaAUP1KAHKymu4my2SYEZAtmWGN7dvfsfTwfRsvzHUC5eNNSr1fcSjB8GFPG3uYnD",
  "key5": "3e3EEjkZ2AyDyVixFtk6P3KjDfAJsdYsrWz2Ucep75sGpu5qXexZLEiCeyoq8iDqCVJNieE3zLBAiJQxsBfNCsXS",
  "key6": "4wAwpXrYhARYYUVYNWmgs7vKmDQyFzwuxnDhq1cN37JzzVrjUG64GDD7ML6UnuUTN9x2jKFazVmtiiqr73Ko76ZG",
  "key7": "2Wd5WCxKAdCdCCZGwbXfodevr5QuqRmFwngj8ie4odAM8arSjwvXb5bmJWw1uSs3P4B9QiwsRquTvBkTki9Wn2Jw",
  "key8": "2iZmUYnrutvfvpTCPb5rVBiUsaKDoQoL4FGutLxQiCBKREZuswaysVMX1p51Gv5ABdekzpKAg2wRuXN6dCwpMtwA",
  "key9": "4wd2JoeHu5pwM985WyapnKFcm5kqXNKk3ERe3m2LVwf6tf7BrEfisYRQhA35jGdPKjB9dxCk2h9MaoRVdBxKQWR9",
  "key10": "2xbA1KFqcyhusN9FdQu2Z7PczLWKButDTwuM1qMduGwkt3YVqKtWqRgbKbDk5YmJeQQEREwR6rT1i1FoVftbjnBi",
  "key11": "4RU5AvxEYVoDjV7a6MTyxQcNQnCPyixnjeAjwWijv61NjoMwjqaVAyqtr6tnejCFZiH3EArUJaDVypFHMq1gmL9L",
  "key12": "xaUP3RrZDdavS2RfRPxSxRh4cPqkcsx3du1CxJyDV518oXwbGb9WYe9qUxJtteWx8hXufxfb64LMdb7JCoUaMHt",
  "key13": "25jELWx8iAfPiJqSGBjxJPwnYnqmYwHkBJQGXRL5aAdfagAv74Mfu8rR4ksVjLA6afPjX7TaGCpttedzmwDScxgJ",
  "key14": "64FpLsNkoxRUigFLFq5cANgBjuLJFaCnQZkYBGWTqCL5DVDCF1JDD9k9ufPeTTnVczSRisUFVdQ6otT8pXaeXiAu",
  "key15": "3iNqDXit6m1ZijS6tQbG8YUJNfnEkWk4WsR6pWrWWFDL9cjU95TGwQSfJfPMz8XPpz6TmWYwU3GBrN6r5YCniXKF",
  "key16": "2BGyQz2b7QtcF2DBB4ibFCv7rB7dCVMwncJw1RovLFPrC8ecKdP9ZMbJbdHays7859HPB3SBvMossmcY1oBJms2S",
  "key17": "5rKKtPTVCYMiH4xwj9PprJTonBXMQpt6rXYjKpsPLviY2T4Tz9vHpPmYcBKBKiL5knpbvhLjHrVFtnNehhW6zjjP",
  "key18": "4KQYrbYJDX5iUemW8P32pxFvyNSokGjs93JSVxiYMB5Cr7tgct6FSCGks19TgTpwH5b6c2f1azkL6NwBzLmWc1Hi",
  "key19": "5HWCPEBvYez8JbJxorkBa9mPFaopgutpUmaCtakg7RSAupYEmPStTS8EdAWj781LoLV9x8XDZ6cRFhGn4EGMcqA7",
  "key20": "4ZvqWeZqPdRHCJyaBadAarYL8nZMFdjHjA8cCjH7uRCZ429HpZW7bSEjgbkrdYnhsnMz7uFUunRmkwyW7EiW57da",
  "key21": "3vShrjc32xXCrbxNZx7FnCYgStVLTawNryyNBy1dNHsii3NiFoE2sJnRfrbNkemUr1MVGayF2SZDgrrGjESTntZU",
  "key22": "J6L1mCihhK6LUbLQ4FmQycMtzPjxvFPZthprwZCKnXVooJ7vH4njEe6f3rs2m51RyX2idh3SGgZinvQH9D1q5ZC",
  "key23": "4piM6yV24G6gsGYnBwg8WPqqueY2Rx65Er29b9gVZrfRmZ1gBuRSx1xt2PUqpSvGLiFBxBYfpjcLKwC3FK4r9xTd",
  "key24": "37zuiErNcY16wLTUL619LAKR8CBQX6ghFj1kxyCmCCAEMhHt2auAaVyD2YhhjWG5r84P4nXerXzd2jgP7FWBY3Qu",
  "key25": "2DjXBELaBHt39Zosq8pyz2MAohMTDNqRDkeqZYGJLTZtaFECzwHmrw91JgW7RsWEGGhvRtHM5drrJws12oKaJmYT",
  "key26": "51ArXbxz1PVU5VA5UpAnE8tgBfqiAU1MWp2XRLD5HoMqJCHfD2QCHQJPWM8ZLtdR63J61xP5jwueaFxb53PJaFSG",
  "key27": "42C9oLjt7aLS8UzYagqhN2N74oi6kVELSDyQyyeZ9x6p5ZGC6HCU85jq8XfDaAfp8zt8kMNobDS4bA8cwpf1fbb6",
  "key28": "5ABWK2PUkSN6rMWryQphTiZqhV1tSoioJBoM28QtLmQZR4yB5hdhNd1r43AgEH2ScXJoxEFnYBYuLXFcVjf1QAhW",
  "key29": "2DWsr77V9dwrRKNEYzbfeU4fwo68E5SDd99ymd3bebMKRwqW2Ms7GJS8UkhSNajwNx3RFbcZptYrkz6ENeAMKYtV"
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
