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
    "2LKKBWXGuQNvVpyL2kZjEQvsbsgNBdt1GtDjf9oDVVSLeMzKXC1fZtFWdJtRumZbrYvax4PU4KA58fWqvepJ8rWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DqzgivbSq2sZs86purd1ZPNaXVVbCH8pYo5J6iicr2CgRm81bjTw2wJhwp3ZFMquTDACQw7sY6mnViRxKD1YfEW",
  "key1": "2B1dCuQVwdU9qiBLCg7Bjbk4YKjAtSHmUsxvLPqhbg628Kv9sLUW6GMFYHqcmA7toREsAw6fXUykXFu29bKawsuv",
  "key2": "2fsAm9LruLUXiMDei6zkzdiaziVv5zhFCPy3KKc1y4LZM2YyFePFCxfY7rXPjwF1asLo8eyGusvmn9NxEHvBmZwE",
  "key3": "3h9KGRn4owm3f8SRR6uzAWNp8xgxsVE2XH28qKaax8eomA79N5NRWuL76iawW4At7JrvMAbtcZKx7u9oSJKTE48S",
  "key4": "3aHHkM1MFSxxbi6mvUssaRtuEZs2YasKtHJs8aRRcZdt8muxan3B6xXhb7wXAAovYQoFManwrTtvL4jEnY2HXJKn",
  "key5": "5BDEjkr6pizizD7sYxDSDSpcSVE92rVMwFw7jd8k3Pbo67upfQcjmGA9811VKBGKquk1Lb56ss5D5ps7hTxiiTjf",
  "key6": "56oUPWZ8amPDHBedz5h6B6a8NH3ivCiGVBgeqWTzhDLmfJ6Hgeo9s8931eNEsQ8XksffhWMDXEej1PJ2RxFzthYr",
  "key7": "3kzbtkCVEMUW252m6hVBoXJEX46g1kDZ77Z9ioJDt1Lsed7uqG8Jop9KWkPKP6eVYDdqDx3KeUfMY24ztPZUkDdh",
  "key8": "23mWwAu3J3pdDjvZoQz4zRWbYd9xGGYJcjPXEBt7r6HvPmHDAjBEUo1tKBafxi8yHybrH7cmj2c3ADaqJhB5niy6",
  "key9": "2cdPeprwvqE9qsU6JM7uhSGSJbp8XDq43eYtKEqo4RTq35iuPWicKdZfRkZxppVx5z7qigtpQKJBnJV5GQKecp34",
  "key10": "3KE3FEDAfhHKyy3JZQSnydQcc7JCCSaXi5t7urUdHVFY1aWGJK1uBaepjVmtsTwzBB4xrUCA9RhvRizUj3aLyu4x",
  "key11": "2ct76JX6GMrwSqWNXomJwRwxYN75FYUraKHSMf2AgGRYpnj98KLR93b69gMZeu9VA24fkRBexzm1LKi5AZ95AJhD",
  "key12": "K6xB849kxwxmMzc49mmGW4cgd3tnLfDsmKPePRAqxf17QQt1GmhMqUTifvRReujNGusw8P5RnxZUGdqD5YF9EJC",
  "key13": "5BGmvrGn4esoH4r9777d1QZfmXX5xvzN7vzGGXWf5F1HTqB9hvkXcHHb1XEPpLdZxAKc945e2t9bjRdXcJ5Hi5W",
  "key14": "mPJ8uh4Zqynq9un4bLuhPjMofPXQU8PQMDSUPZXCgZsMgFsZrdRFhhhUtR37EoSnpWeqS7bF9V9WtxjSibi2R4G",
  "key15": "3j7HR19RhGyqXA2dCTiqfq1QjvBjJ9AWPvrFJcnFff9zgCNQ6nUDX84xzsUxSVpGJou9d24nqxWFiwHD49yywRS2",
  "key16": "5HSudCGytx5SaW3rXjDGcVWJHRFnB6xQ8Myh6dR9xA2P5b5hgPQngvJRdtobxSZhQ7C13pPXbbXj2kkDGYSatizz",
  "key17": "53V8Nxz3B4siEqz53jhF9mSF2mMfneMPbYpVPLDupfL8iRUeVxvAjXb66t4YgcTqz6vkukUWEn2CQghSJghzYc3Y",
  "key18": "3rYUumQadBjrGeNr1yq3QJnJZ2EL1HosvpesJdeKJUYqfMczeCz6amRoXC5mwu7XdVYSdTei3wQWo6YbatftcBMW",
  "key19": "JaEacNZzRWmHuD2rXNayw67fq1wA45pz2diYWXeNSvUSLmEgYY1ECv1r8Pt67KCg4MSrtAFwUBYvth8VcwwajX2",
  "key20": "5uRLquiHxUmQVeavivCmwQKmH5JMpDHaZur2ykySDTqq1r4GLGKW1NaTLCBKW6zx7MoSYAoergTdY6KBhznUQZdX",
  "key21": "nykou6XpfyVr8qKyrTvLumiQe1byah1aEkdVZh1sraCYjb1SZ2LhfbjC1Y7xMUG1aLyKTEVZ2pbpw68yDtqrf4D",
  "key22": "2NfEyzWxZ9hiHWGiewZbsV8zsmhoZWjrriGSS6wdthwd9qy84A1Zf8ntwc2FU5vmpViSYbF6PTF5KJ7MAtEMN2Ex",
  "key23": "A6QqhKV7NJrT8HmRsUtkgKpKCmW5JZSKFCaCr1F4Sd6vnn5xyMPtPgNzo1Co92npWJSM5KqzAnTnUiobqGuC5gv",
  "key24": "5UeNYoMmUBa3yLAvwzrr54dkZdNz9pCspLyrPd8SAPRo83MKsK4UBDN8t9SLMGZTABXq5U9AKJmWmFKqzVXegnLq",
  "key25": "4KfUi3C9oxaVv4AXk92Sfw92jB17PjvK9aJvUp3ZkX6qb3fjjCpsJPTgcGQBoANSHAe96M4b1khLLSkhUtS3tKGY"
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
