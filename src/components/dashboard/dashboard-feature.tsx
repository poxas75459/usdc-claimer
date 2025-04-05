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
    "5HHQKt5QvEX8SnijEGLXrcwiSRPtFnqQYQkGs7qJKLgSdBo4hts3MswNMfSbaDZjsNhRuPRPvqY8SSAPiYGv5nKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jxb2T1BmAD2TftDt1nGGi1dDQKwtZUK3acbBYJhhH8PdjmYCGcKNB3xQbJbPmSa2eKR9oWr2VT2mjCUgQUb7FMF",
  "key1": "2jwG77krJVWrjTqsUyz3KdXKRwSdSi6y5p4Zi8EhhpoFLMZCa2sU8QQi5vuKCK3qp4FM1Q8PGUAd8PuwCfPC4Srm",
  "key2": "3JwERm7iPJLuKjeRiYV79ns3WBZVZECQZUpscc9eWqdpkomVSR97wnL7JXzjf2fuemGZYzfAiDTezZ2iDs5Z5odX",
  "key3": "46AffpTb767mybSZ2EfzjGYo9R7dWwuCTvUmjzvQGtxTUEAun6BimY4K4EhE7nwHhCHkvYXtxCDoRwSyEdAZMXMH",
  "key4": "GJkq9RtwS6fzwLL8p8pTeBr13pcqaG2NaD4idS4621JjhgRqfehKU77VkeadcExvQUDTmoAsxdoodkb1Jq64eJB",
  "key5": "3mq1jH4HNDAVUGxp2NV7hbqDMUnE3EgCPkz5T4rRZFBoHe4mcoUsmmKyLW6ZBriThErmxWkmSRMxKZwWhLAr9iAd",
  "key6": "28BNSv4j4f8EsWe7NfCMn1ErxLuuhxng9nkYMypwJVw35X4kFK3p53T7vbJ1bBRzFKyjoFoxWeT55HpMsaiU7jBP",
  "key7": "35qfMCbLT7THu4Xx2ywN8hd2bmpQfbm1ngt6rvx99QMvzbTVerLzLRvY1TmjFGfXcwnhvd5HfJcEJEmLAbWSvXKo",
  "key8": "265kDs4hspLUbgPwzeCVdwBr8MdzeemB9VzVp6158v4BR1AUwUda8Ftmo62wgGY5JRxhzDwyL1bLT7HzevUgh3Rr",
  "key9": "4GSYBMFVMBz6t47dt1ZDVocqHuN1bPciyN5iBL5zb43YqvrfrttkvrxbDJcFjYCbLR6EAmVS8wtRprZaTwDSoSDX",
  "key10": "2omDRy7FwV4VYjr3ZdyUFjPNy1wRnXHq3xBohTCxCAZ6gx5eBk6evpL4xBMdA4vbKjkd5R2ut2MpdBu7Q2YBs8xq",
  "key11": "4NX5dnZNmXi6v7Dy9Ht5QNFC5Lwyv53WSBV3RgxuKh5kxgqUt8c4w5G5BuayrQNipvLk5SDHBYwnVdyNKmHkmJKB",
  "key12": "4tDXKM1v1ERSjP3wvz6QGsZqmTxfVp9V75nwZ5eJTgcMaAM7sedpf5hCBWBdTUsoMMabRbCQt7TBauvY7kduRWRb",
  "key13": "5RZWEpRzbTyzTqixhdStEd55q7S17JurvAFCk4HBzCx4mFxUXwWkvX2F9SHXEbYkpNBLX5teZqLwXNu779k9eMT9",
  "key14": "4Na6A4CUkS1TpiApy4n7Jo5vvmmVJnPkLUL2fmB3m65nruCkWwVqGP43ByoLMRa3taBgAWDSW46NtUaw7RPjyM8T",
  "key15": "5xq7dLeopJAjkZJkiCWjFpbB6rPyP4J5qN5wjVrYRKMpenJH7UVCAS2oD7KT9wTTaK1b93UYY4nriEV716GvnXv",
  "key16": "pxMCQGb96nX6grh83z6nD7x8eiPcwjysZUBNzLXs8GjrvJ6VTtoKXamojkrk8v7yPaLDZtCcxkmbqNnFqyCbFzv",
  "key17": "2caHyAvKxCHLHT6VcztwAqiBWRAZhEW89eJg6EepSSCXCS8z5LffYFxCGX2cpJjdrHBRmtHBCD5XxZwyRg5DbCrN",
  "key18": "4zb7v4ohqu4C3YefWdZ54dDtxgiCMzMPsu9FedhbUapKLWSeVpPawMchbprx1XGqAjustXVSZ8upgzZznN2C1dja",
  "key19": "39uVjXVqZ6HuHvJemLo4DT9Xdh9VyjbUiZNEkpEbdkvfGf6Ur9bmqMTX8tX1388r7XZSBS4HjRkAfwb3nyFqr242",
  "key20": "4ZDq7Gz6i7LJXW8XmHc2Ef2C6YQELEfmnAXjs3wm4WVLLmikJ1M1hPPsvhE481ngXPcSTtF56Gk2np5jMck1UWPo",
  "key21": "4NGkXD2JK31LSt4GsAKN9DM1hKVxh9GVNZm28rLebxn8Z8AYQuS3nUg1t1SYFjcxPBjLMjke8cWgd288rsk8gopu",
  "key22": "4YGPMJHdgkdWuAwUUDpXJeFkmfy1yiq7oKmauzpFciX8ugcC9w88uXfNLduULHHS4Cir492aieu8DNSWJxDETjMy",
  "key23": "zyni5HbcWQcRamA1RGRz6RB1hrxg7CtWmTcRCT3Yssneze41zsk3tRBETiHUnq11v4p4i1MwHTWxau41Rfc7BwK",
  "key24": "3JR1oa7hDPtgTvjL1KNgbx7xn6A8VAUHU4HtNKN1FrjUpwE5mCxUA57aFyXNRsoh3rfxfStsTjPAeDnhFQZ4krGo",
  "key25": "5756piMDptnVFnpnN6c9UsHh3Ladxfso1BEGcwkDwjjkUphFtcFV9WEh8oVtqkWdMT7aKNh3aJ6Mdc5RdiLEonRr"
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
