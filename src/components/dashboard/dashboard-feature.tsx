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
    "66vUuP1BYPrAUiERRnSWNcjJ3afrf2WmFEQDVjDBspWeQupSFqY3kTTvY9tExLLmdTPyw9p47pfKatL5XySjCR6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EL7qs1kUAjxVXx9xEcS29EkvtD3xWtLfznJSB28kzE3A8nH6yfBvb3EnWZFWBbYRN4csig88WPMi9g3HHvkV8Nb",
  "key1": "5PCQB6jwbBqbktGM8uL2pzSVripxgHkziMFEH2NHkPafknaGwU18JMZimGgSv8UJtfxfCQQwWJStaTKc9FtWAJad",
  "key2": "4BPw2QgmECh8Wuqu5YHy41i8EQFDo5QWrMPSuXz15T6nXwGWWD3t2fYmooFvwMqnt7KjEuauNAkMe4Qrq1hQd3eh",
  "key3": "2bTRhAuiLjq7rbpk64uU7ZpH8DC2oqLvEffNfK3KspMhs7BL7W916B8XogbX3qaH3o3Lxv1tF8yCcVMA3cpRKAWp",
  "key4": "4KTqdFwAXQvKKvdGjah5wL7wv3ge3ftxgW3XJ5Yj9ohwzxcLRVN8wm3E3o2Kx1qSsbSezbsbm556FP7NYFaYjVxM",
  "key5": "2a5ykUaXMtpfnN5u5UMB3aqT29keZS7PrJC96qFgx81bq9PEuVCx82YX2gEh9bLUhW3ENkRBtnPQRuTJMGgywZEE",
  "key6": "2mDCEeGtESW4jE1gAPL9pJ8qtzqPops2dykV8mY5FCEHysMkZbA2FQEX3V61ksf8cUMW5wHMmLMx9YFKypBbiq7S",
  "key7": "4hcbLT8WyHxLWpu5FSk6TZCLWEKJKny8aFAm6NJ1GhfhJXLu4HhtpMcYao2jG494cwQ3tHG2AiFVawPHT5kZJEx8",
  "key8": "3tCpDnvHy7cBgakmbhEDHUgECniiCX94tKiuzXADBFREies3pHB3K17Zr24fSxujXQGXp5RnJVzumE9KkDPVK6Qn",
  "key9": "67GsQBg1F9UF1pmtK4fjnzB88z17HczFN5tBLB5PoDLcpUUje9e22ep6uFzKjoYHRQKeTm32RT4xAzuAvgc3iC9y",
  "key10": "N6eWT7KHZvZRxbKCcbkHyrdBuj6AxctTf4dwLebFzrDUHeSmP4SVTr4s1mbdrWjvurHHcQNmXnXwThPkkovBPvp",
  "key11": "5rGw4mLHBv3M5MKmNbnUZCjZgBGBjYVWyuMEvZmTUzLJPCBtDRMXFMTetKpQoZ11Mj8uEfdtgYjtqFLq5DWQMjbK",
  "key12": "22XbLcgpcKT3ATMs81WDZAYTyKoWa2EzYAKcaPnNuhFEQsN6owzdi8VscPb5xWJjcphwiq6e8mNq5EsD1Qtc7nsa",
  "key13": "5JWBn8pzJhETfFCz3XfTRGw3WwBa9mw3M8D1gCwzaHqp9X9WVU1DbGFJNp9dYGXHZF4M9GDgKQW8cvSfsmpWQMQ3",
  "key14": "2UsShZufS8SNX5vpkBE1QuUTdTK9Ca3fqHQBg2XosJUYFrkkevoAPgy1skQ7xfNbme3Z7Cp8in4vWUGJx4kpeqRX",
  "key15": "2LQeXgwuMzS9zn7cpG2LgspmBQi7LC6ZE4U1bv6YyQpANYL3nZ5f2GusVH3f3kkK5DxMeyzGuyMwhZkkUk6hc9sp",
  "key16": "fY4bDKdHaat69M6SLhhnxBBtHpH1uWssnbAH1LiXafDmvbKSqxjvFni5jmX5Xp1HyLS8h7ctaqppk3J7dpQkb2A",
  "key17": "pksiaoJE1hnRgZLs4QmvsMqv1zY1sVs5MGisF7Cw5PoM2YyUqWF5wnvXrDsvjBZRdBLKe2H12JHECMbKGmwUspg",
  "key18": "5UoaidAbZ8526eS7b7GZ9WvwodnpanFNYFv1TuqKX2ySmcKaDXkxSnQbD2EudjrdUnSxkXXMvGwuxNHBfDJNohHJ",
  "key19": "5KcWaXyT9TthK9m75VRSxVTJYMEmAiwX2WCSNk6cSE6pqKJ789QukEfs7VM6jbxzSgstMyW651yXpBmqfUZdVu4u",
  "key20": "jNYMAi5DP1h23bSy3YQoh4SLAeovk9ikFPARHAEosPPvYeCYw1hVnHTUx95U2pkeZ3WhWf7gg285NJBwmDT7os2",
  "key21": "quvgv1siFkHiUSNiqxM3qXb25BTSA1N6Ng3JZKv2ZcJM7zXNCRJ5PcnhwtcAXPdqAMuTZ545qSGNhi17spxhLKx",
  "key22": "4gVeFkj3fssQd34LMCxydCXonvT7B1N2EQdCtAJzbhG863Asz4fS5jixjDN8x5f7inegQXC4a89ZdLE7JS6wfB9n",
  "key23": "XUTyd6aRD33LwMAm6cgqUUtB5mLwe7Zmt72FyrRfEt7E7TNtw1jWLRQaxSCgVnA9uMfHvjhVGz3Xjs1QBd1obWb",
  "key24": "2oas5usBCxThLRQNjGr7ZRcGkhwquuDc7Lftp5WnHZZgKG3fC7FJEMLPhEXNzf7LPZ8bwwa5sSugbhEPWBFPcP3Q",
  "key25": "3XBkKwNgZx1LQFQE4npPMurqT6FiahY2ZAs38sHPDaV8svpxNtMW6uRBM8SWA72kRtbYsUtPKnv9jWzaZz279jAX",
  "key26": "5aBpuRY9J97FRvkCv8Gf2VbM6ume5kqhWbWhwSPFGWda8WbQt8xo16WzDvtEj3ELeujusbCEw3YVei4b37zVSPvZ",
  "key27": "2rhiK9NpiVqDdx9YMPK1oejkXaoQVevf63gJZQZmKeyM41vzenihLoWfebiKQqavNJVVpmU9Xzdhdtsihu5JNNsG",
  "key28": "2Y4eJGEH7hGUueTNXsMZYHZNirBUaaKBZtea9Uasy6jefFpk3EQHfqiQAifRXin7w4xnTY5jFpjbTREC2ajuiCW7",
  "key29": "2iiBbDX97Ao2RcwRj7TxhJh1Rdn5AqVxLHXFybKnxvReoe3RJKUPzj8Xyf8Ve8Bq2AV6z6zp5VB2epqWyJHV3DXh",
  "key30": "3Vgp7DQDSq2v8UudYxrBXGCmM5RnVANNoT63Li4LRjaw5AyaUwzMsFzN5K93ErtbobP2Ykqgs8fRKnh5WMUFRajm",
  "key31": "5Ah7TjwSFJtrpTTrX4QNdknDQAg1RGr9g7SZEZzxUh13G6ZJ4Un48mr7yPY9MgjH5VzheLAaGb4dyd8Uy9PuX8eC",
  "key32": "4mZaBor5rW82BMXwsnVZZiPysczs2CjMyK6eJTYEEptMXx525LqzNd7eVJ9XuJCgi3YByy3i14QVmtkcPjuXc34Y"
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
