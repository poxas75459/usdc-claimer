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
    "4Qa58yob7U3FmWa4VKdgFfunC644wUKi3mubvJrknFQ7uD3j2Nhscdzg4MTeCHY1oK4nG2TrZjBxkd5BV14gsp35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65R9zzQrwtquLyuh4ukxFxttCAktEftzaxvab7YJ6RCrp7RsGf4QRDLeHkno1QASZKy9xHGkmHK4ZrwcopTh5Lbu",
  "key1": "3YJj2db4YwzfUiAWdsbFUnGQorsjCuHLzeMh8i8pEPetJhpfnG3V9gQUtbUzAMx4MPGhstJnXq8Dsq6RhdRDANJg",
  "key2": "UGpgr73apG94BaPfr6r3aEDs5kaYhAoWGGZ7nxYt2HD2r96xLDTpESc9ZQpYYsPb4rGev2RMpyL97YZuBpT3KMn",
  "key3": "42rJ4LATzkHRYTi7aCGmxNwBFszTGRCmbPpmXViyNDWmMMXQFaiDEUY9BzP71VLmUDfQA7ab7TYVL6StEhBwcBnt",
  "key4": "3A65h6LHZgj6m9LmVKqTzqhmzzRgknrmDmAnQRVuMPzFo6KyBvUetodeee7rpNVekvk3vmzQXQeXGjgbWEMq6ozJ",
  "key5": "28MVSZTgLafwmfhHMMo9CT8xu8s4VE6RqqAAwXVon2WEUpUG8ji8sroKAMnNdnSpK3encecUKszcYgK72VjBKVAW",
  "key6": "2zUmMRpRwBDnUHDRSCVMmrsB9pJ72GhFupDsYh9SJXJKfrmxbQUNZWRmdRCx7z6NpGketpNtQXMfCr3SLw7caCNf",
  "key7": "mbwATjvZ6RSWbmptSs9zw5qjFQx5Dj7gahns34VW1SD9K1h4eWmzzJJkRXDrW8XJQEV9ZcySQGBwKnU2w1V224o",
  "key8": "5sefnYpJ3yRftNJv9LUGA4N8t6xNW7UbnUMAh7W2ZZYs9TXDm9ZgGPsnKkk58YyoqJUCg11D2dNX4vSuFBfpHzNL",
  "key9": "3K6GVT7C57SJC7ANhQh7ktftitymKuauvVfcAmubWwpKkLCHaswUghGzMTQsMdnuqq7n2fky4Dto4H6ntfYZNxJV",
  "key10": "MJFLwRzWt2fgUeWr8LqHg9TkMPfcyLB3hDkSj8CaPcGpXFWXGH7SbPA5Djnhuy4XJveiZb3iqmtp4Tn1vvCbZsq",
  "key11": "2TxyPovwb3Rnk4zNQoG4X9eFCi4iKnPyEx8djdboQFEX2npXjsPhWyyzPaWbvdcM9f4eo77ZStConaKE8Y1ypd73",
  "key12": "LF5GFquomvQFzWZsMty2AguqZB7huspJujReKe7drBAaoAPbn59hi8xhDpY9rkG4DCh65cwdoDvG4To43yqnowT",
  "key13": "3XsDRpUFGyStWwqDWLG3ozUBxGaKpAhsZVpksstwG7RMVXVwM1j4wjg8BUmPRnktHqXLUP4tmCVHyHQzqsqLr91T",
  "key14": "etcWsT423xJU1dth6uGTpA1dDma2c8p7gijqwJSw9HMgKihujXHePmX2C5TkJgGYQq3HsNVSNNJ1CwBuqbvVEEy",
  "key15": "49Nw1LH83kZoyd5zZMfhEtUyjmvaotK4MfcCadgH8FAFKnNgWR3eukiqK3bXTDu24Ec1gQ6o7SHNXBYZkatZDueF",
  "key16": "csB79NYRcSzBm8DUnAa1Sawr24dVzcwG47uHgKnkZcW9jyUvuaVYNx6z6YVzHZtFDvfr1svwGya7FHnnKVw7UhX",
  "key17": "3jRPh216TFtASwqX76FZQTHpmizGYuDY5mPzwCNvnjJxaxrxc4DqxDLNunYhUmBcep6tT7dkpFsMkUuHrz25fyvJ",
  "key18": "5PXkHyiwMmqTYWSu6jjNrCqjhuPpDrugBnzr6CFGgCWwp8fSFFvpB1ketBocYQqsSvxhXYbLLcHdrA8dyjatNjyF",
  "key19": "Kuiu8LCMmjPFCD9eQUCHAp3wFzChkt3YPMtyoxRKFCymGme74UkQE9nDbUrhX7NwZ3tkL2cQ2Auq9YBMuxKkwwZ",
  "key20": "4G5qaXkSRUSA12NsS7Pymec8yEwZ5KGMmD5LTRLw5PHtEPHLLvwUUNBXtzDWP2KABaR9sPjAD2pWKUPsQYe3XzbB",
  "key21": "2WQGi2cCzHjCjvGDf3j8RZ4JYzxkee17VWmEiGGTDv7Mwhj4g8Bg8VR3f718Gyn18xG2ZvySfLuPnr1Zjeo4zWdY",
  "key22": "5qQvDp2f9SLsc5CMJ9WAURQUtYkEZyPMdnYRG2tJfshTyGAvkh1Kh72ufLz2hoD8mBT5nKTGoJpyeE1YAgiZoGVH",
  "key23": "4eDs7SEyXHqQRHGyybysaLzo87MW4KXy8tkuqWBt7eS3CB6152k3DqFF9nMHtcnywLfQpZDjmBCU1BpF2SAD4BVr",
  "key24": "kng7oKzFXR7e9ZyWiN9uiEUtvJmkCR3VCvWRmbp3NCkt7CnF53UxpNfozfeaNvbr2gj5BYvNMxnj5yJvmzsKt2S",
  "key25": "4sGe1JEWz5eYH8h1eC63Fn31dLs5fwRQ1a513BChsDBPHqAWgouD3uBcqGfNRpFB7QqbjkoboJHsPNvHt3nqoGLa"
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
