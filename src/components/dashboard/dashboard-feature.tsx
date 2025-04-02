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
    "4D88QsMHd5G3JUkGGTxCQq2y1WXbsMcCcVYu7KLwnsexReDCqub3ZXFGwg7D9JTTjMVYDVCLhMFhpZRw6PA1mWiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AaB4XJiqaKSEL8sADLBNGbU3UndXtdtWbHrWP7a6ZeTY8gzPB6E2VvpiZy7hWzjJWtHkuDstJRErDFzqyuGpdzL",
  "key1": "2LqsVjr25RCpN55K7ovvo4cZ6my7UC6MpSByLrpQBUTBnBcoM6Lw6aXtxTvBrUzZSjsX6GEFQbkC6oJQYQyCDsBv",
  "key2": "59zHXUm6AiN6BkypppJ9G8wb2oymtvzzTbcQqYmZJKK85LdwmR7oeDS3QkhCJjMeqeBPByMW8pm7MnQQVHVbt6zb",
  "key3": "2CDQLmyMuyMJ62V1NubGHF1R5oukmQQPyodDcf3TTxmd5KxFatUwo2YXK6ppiMhLcq4tAoJyLnPwrxZfFnRybWiK",
  "key4": "3CJ9CVGQjR8mgDpdHEjFtZfTqLTgD7f3TbPMk8Yyuf4HT7TtF7c8MNv2irkHGd1zejVkw3i46tDj36hiBbsCSd3R",
  "key5": "4edLf4bc2qbS41SoRzgd2tze2kBmqhcg9HTLgSpLVsUfvWKoNSwsVr1qCzJaamynZgPntoQfmbcdY7yQApcaY3HR",
  "key6": "qPFAbW83o4DUy8KMzGXePXwVwzKMKFiu2C9vvQJuRjFmH2j7htBz71FLKqTWgweDaNek38pqiLZvvnSGcbmvjjP",
  "key7": "28wDAJ5aK2TxRoLhAggvLxqLhsxZVCcZCSC4S3EoVZsCi4ckGH69NQo5KGiagJuyBn8Dxqm6iCEfnBwYfVQk5m3V",
  "key8": "5WPHY31m7Z1zuh65hM9WXDEnLgHcvxXgHMw3CdQpCWn5AcJVtyH6ZVHgHeM6bAqNKDcWyuWhUgAKRCSqv9o1XSG4",
  "key9": "ZaagaSaRFMN1JWXKiaLVzd8hmiMqHd2x1WaL8RfX38dQcJdpKTLxPBfmjm8XUnN1w8ys8rJ52GabbQX9X8YEqdf",
  "key10": "3UFRCzzb68hSQLg9fd5igmw1bTrsECbwaL5aWKgcAmHK32bD6zDUE1f6Xz6uNJfFaVnGWesExJnXuMDYkRe5eesy",
  "key11": "5vgPZFGRa4G8pwwXnkeNeohTbVHwSrG6Prj6yh79mYDofmHTWhY9cx5Xhd27m7e6dNGozu7z5WG24XrkZNRyFjNa",
  "key12": "3DcvEqLCdTSSf6PesCa3oXBg1opE2pZoWvJ85c7bAbSqUKXeu1ueL4gbT1H17cP2mTrJXqEdfDczprQkrBz3DbuQ",
  "key13": "yPYsiwk829GUS2CZZnC1A7BVCMeXxiJADBZwy6gi5eKP5H8F2rTU5pPfguspy7dpi31SVCJWACB9hSVfFkx9VgE",
  "key14": "2ziG2ZzZJeTzY3K2MjWYSZ8CZydcifhwmhcuYqbooTFarLWDSoDFPAcB8UKku6n83XQj33c7ET5rwNuwL1ayu6Lx",
  "key15": "2RzMkh9VcXvW2x3B36WKr5jJy5Cagceu5WaKWQhNQz23ia7q5PDkC1umrrz49Hbv3qfwWCNvdEnB6WHCA4j274y",
  "key16": "4vhewvN5SsAfRGhbzXYnATQtu9jjSKU59c1BHxK7Anmuxk3rmeweczRF1GpwKxRpwtkc97sHyVAP6wasQFMnYBZc",
  "key17": "4kAohjxUnBxm7dcN7rLHi7DW8XsG6eSZLm2AJNy3xMwQfymaUcTXHCdQW2n6hTeux6NsVVJuZuGsmnytqrhNDHDF",
  "key18": "sfyLFoqgvoD8pqKNpHWGyDXddEKHS8U2BcWQQVvaFRBcRE2T9Se6aQtZcRJo64Es5xhhUe1Br8aAunGJ96TkXtr",
  "key19": "64q4BpjE5kAhdkpGvpqMXuaoKvj2PBVYm3bHM4VWBGEAjF7yqd2HCVFoktyN5ykJiNvobTBi6t3dDL9JejMyKU5w",
  "key20": "2kWXzQJT7NSnjsa8sFPhDhce7PtkZok1VmQXeqsTetoC3pbkE5V99EEfVTLV8dvbeJEV95gkvm3JyE2SGgFChJet",
  "key21": "TyfmKo9tCuuiYCcx7ZuQDqrRUQtEbxArjXeGHBwY3ftmwoQ7Pmy3G8mN7qFucAyTdKMMdpbQqNvpdhc8Kc9N7oq",
  "key22": "4HNTpnxRoVCYxwJSknzWmKLbvU25HGg6shWGTPeqB8FPwxVtjPSjqSbFR2uUbfeSHThUfc5AvPDtAgXa29NkhtFt",
  "key23": "5pTren4ZXiE7vwHQybbS5VPWkEpGi3xKRok9Fw4qRdgFpmL6iQ3cyScyr2yZLjaPhiCxvaTwonhqkNwmwxY3Jo7D",
  "key24": "3YaRKGcnMXG1Nrc58xZpKBZMdcUBBZpFnXRN8H3icZp5ox2yyqXXMfsg6XdWXzaDyQtV7wgnTsNnNTWuupw8y1Uz",
  "key25": "3pvMK4VhUB43rHtzAA9opdMVMW1pCYrEYD2U47Vbj5RQWJRQYtf5jzcVWzTwFotXPsmNtP9f4ngu8mmPTDiqcPSN",
  "key26": "4ijnP5pXZSWZ2RUAVY5hKvJGGiHZhZbfz3uxGw77dEpfxE5NxrCwMxeMScn5icBHds6JCQYeWhAfFdnMBBPcUr2p"
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
