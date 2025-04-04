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
    "3njRjPUuwChZtpaDsxP8pWTNErULxSQTTYL5VQvSSYrB4djsE2YRCXZZBydFHdnLEjkHhYwCexJiVWwYDwTW7fRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53uHdnu3LF9MNmjr8aWD8NC3Vo78MnfUE6iDUJiXsbTWmVspAoz2NLPXMta9tB4yNMtUkc7WAnibmXwkbydDWqsp",
  "key1": "545psAV18ED5SZ5KmzP5wzUu7g1orW4A58k6tahXZx7Tnaz9Wm9SGkzRpH1D8t3JPgi5PhYy6CXz4qTUY1PPv6U6",
  "key2": "2xjSrY6ZYjMf28QdaEou3tfzDT1ptkcdeAQ986KdT2rdUzh9tRrvqz3gimf9zX1qvNfEoza93R9ptuGsxXWNZAuK",
  "key3": "Bq1oTAfDY5Ya4Duim3mxiwwFH5bdqmB3AbB3Nd3SB4t8oJCH2u5grPp49Bva5SyKk4JhuhpsGripU3QUWE5tmE2",
  "key4": "nJ6Lk7o4d6mWGoJGY1LozzxjkDbgHp7GxS87Z9oEBp4fPwmPYPpZLA3TXbW2FiDv4v6DSf5W674tjDwEHxW4JpY",
  "key5": "4KxhmfocxYCPvERc8rsNJrNhT2bCF1bdEhF7PHgGzEqL5KdbbYf6gpN3S6wvmzzNiauxFpaWuaULo4vtQPx4bXpZ",
  "key6": "qHbt17KsT7FG1TJis5yuPJjVzJfhVBLDiw63qbKBkpwshWfudJWDtapUQgbJG43kq2G4USL9d9uaWaxhr1s31V8",
  "key7": "hrcEoQ7pxmkak1AzPwu1p7oBcNX6J9MqnnuuncrwdeWE51puNb1CoaenMUmTH21ywxu6kfKKyqACWUPj4EaqkbE",
  "key8": "4Kw3peMZ7gMe2akesLt3gHT8b5jmG3QvSKkoAGhR36CTFDbqbas8wrsdVhJSE2RpHMQAMTkQKieWF75W6fgVoinb",
  "key9": "Hi9qHAS4aDUXxbdAmrUHQ3L7NTZYaqVc8KhHXBQ1CuyE2a6uUdw26qCu3YYMTMnBAEySrWyVqk2Fu3KHKZjerdv",
  "key10": "5D1F24EeMovviUop6BYqDgxe8cpAMe9caNyCuTg8LAyP4fSuivK2xgWGmeyDT4isFXtgGJu7uK4YYENfamjWX2e",
  "key11": "39UGmtFZA9GMkrXTz3WAfgwk65ZzuxrSm4jahi1ZdmgT66fKqPrewLpr6bouMgzcCevFrTenCzZZptSZ4YGmqj4u",
  "key12": "5a8ZxmYbmVjrcMtskzhxRcNq924WfGzw3EgBeByQHW2RbUos5EmmR4wZG8UKQ61LKU3L8cVqx6ck9pY5chLN6bqx",
  "key13": "2gyUU961JEVLaCdQ9TCXTzSK4ChqVh3HPyXfH1kW98suaTn7oMAsZeBFDvK4qgurHvo63jKBUaSzSNaLGtxDYxoM",
  "key14": "5z4koZwyp4TcxsCprihaTnJdLZfHfi4JXyvySTyGUJBFEsV1SyexprQ8iNfT2v6PZTeiaZVH5Yg9u9SLNdBJWsVf",
  "key15": "4MhSL5ayip7SFH8e1kwJJmehceeTYryiYaXUcuX29Wh8SeoXxZuj71e4eGCHxpadWqrpH98aXWHWv3mbxHKZzoPa",
  "key16": "2ygkP6YUtVG6hjP8VwhZGtZ3qeWxTiW3DuepJ2pVH9FY7LsBiViKHLCZ6ybsLm1zUJj423GE87vQgK24fBwUH6rX",
  "key17": "pUsB3LR532opvzdnZTJhDaJdpg6L4ikyoR75TfDPzwPq6vwdakeoB4p4C7dYNX3gyh6v2wLAWnEjYg4Z1hCMsdj",
  "key18": "2fWHRwnYWAQMoPiE8GX7MZuDNnnP86SW984hN9eSR2Qjr8SpNjGLdNPxZs6V21Gx8g4M4rSprDEq6g4uX3Hfrv1",
  "key19": "r5MmVgcTUAccJEsmLn28xn4c2gxzQV71SVeUgvRhxVxHVZ3WDYSkqJkdnf6SYoKH3f555PX1mQ5yv8rfvckAW6W",
  "key20": "4oaemT3LdHS42MRYCWbL7J3x1eyXDMYdE72sxe3kFD2nDc17zDucRDr1JwzrWNP1JWBzMrsW25LLcRtnkawsbSQM",
  "key21": "5VWsFSFJe59M9LPS5PY8fmha3qaSeLaXUMVBUhqxYUrYZExmHa2X5cGTj1Vr3ZSEyNouLkpt44eeAGr2NPPczMkR",
  "key22": "29oJW3zEW5BF2ebx9bZPChS3ed7hpuiBAtSortsvQ8foQv5icfCZPpEjxzHE2G8ViCJUwnLhFXgiiNydscjZxY41",
  "key23": "4bkQZ4BvWXV8p2Ek8VpXw33Aa2Kou5w4fnEiL1wgpMZmVz3NUUgWR1aVqGvgei6PzAwYXFgRe7DV2n7e7PiWEA75",
  "key24": "4iSd9i1Pb5P6SSybbpZKYEzmACC63YnjDsNBp4FuFqvBdeccQmuNow5GdMdyRCYdLf8htdxQQdptzgZRebPrpjn7",
  "key25": "We69VAoEC8uJAxxpAtvZs73KZsRLjjmiY1G7hHsenBWZUNvJSWWnXzDQHsbYyeueyhnYN7VZFLzQAMSJneKe8jp",
  "key26": "5Utnjug3HESyK9ZaPVp8K1EmBWZaAcbHcJkSv3688Ri14XF5BW7YsxEmHthm9MuBtwK5Gnzj4KQ475ubTtKVeynL"
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
