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
    "5teW9LyWgmVmobJgr6JAtifCysW2YWFgYJWSjh5NCmuvnmo395FKRcVaowdkH351gM5PvDDv7ijzYPxkFXW7sufy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eK9FdnATSjdCkz3844Yah2CaMZ69K6i4HCF49R8vwmpjMvXrH9wpKVfZCwmra1LmNTJq3c78q9CbWZu5K4FenZF",
  "key1": "66jYRX5wZN9VDWjEaNJMfyF7SXXXu7UjxzatXcbtUeXs6vsb3xBFzqxvnAQm97vVBrtcWtYqUzWPaAxv6Q1CHoMy",
  "key2": "4SgnFAx197b415s7LfB47TbE8XACeZyedrp7b8oJqPB7SiDkFXKLG5XwxSLRFEefuUEjPGHWke6CfWWkvnJVE2EN",
  "key3": "3u4ybv3HaVbL15p5UeEtnXheyHT2BfzJL5tfD84PGtxq1dVpynfduTZybxVunR3pD4V5KqFTCa7us98EhhaF8nhx",
  "key4": "3R1TfGurRqDhfCSZZHYmE3mhenMQdMyVHC1FHuBDCRmTLD5VvUmRBcdy63VMQbGKQDHzwtCXpBHdYKmcPNaGNvbY",
  "key5": "265QSCTDgzedVjoSChSr9L8txezbDHunFWMoR91Q9bsoY9YcX3Xoi3zQ8vrM7eaAAQgMsJ4uDrbZVhvqv4zgqCRp",
  "key6": "4vvUbBKRGVeRjLfbG6WVAkR64LPz9aHK5A3xasVTLsVXUUPUwZm7kdo1AiGP7GhB21MsiLR3556L3912DJaAGp9c",
  "key7": "4iGkEwHCFsv9xmbjoU3gLzCU2nm7UYu9kmoiuBy8o5tyKPc1AvawUy3ivHyLzsLKuuxLRUngazT6fcSmyTytHKcV",
  "key8": "5kCjSyiSBxRf4xx1hEE7vCRFjRs5KA16eWNZwyKYdcq9ctgCgG9rCRpUDKpFPw9aa8ZsE5NuZpwV3bzKBekeXfsu",
  "key9": "2vXFg9yXLmZpsLQ9d3WKoGyDYKpis6UqAYq4ksTkj2gni7UBMbytx679n4WPF8bwFWcUhMCERUeBGQZVcd2b2muv",
  "key10": "5GJwGs3mnpY2XxQjZR5LdeL3DzL3gxydbkVE11xGjic6F2HXdPxZKwDPddPZknA43U9fWo1kXEsq9vC9mG1KuDzw",
  "key11": "4188wiZhSiC72zUsF2asSw8jZ1oEv7xXkWhVMzsn8ZyPfNiKg6mdBdi2aQBQkjoZofqHDot3Fia3JioUa9LuqRWJ",
  "key12": "3irj1WTeNkQkdJRHw9qeDRyCrPTjQDTih1TX3fPMuWwKNXvuPafS8ek3odkcTJ4hXcrJJPTKFVCXShDDHogx4z7t",
  "key13": "36xGByVvk4X7xtNL4XWtNYU2nSnVrKEVTkpk2rvNpHrsBVWjHa8fe65BUx2J1jnhU9k52Mf2dimzoLEzWQ5hgGib",
  "key14": "3NnYdPwHFdu5yu8Z4Wkpvzd6nGnG34wtCu2u8xE14QKbKfLrcdDFSJC7Emp1hc82cJQAMZcSTWanxNEX8sFpC7YM",
  "key15": "tEycPK7SwuJtqPsutVyh2gUDDCnxLztTz1j6XG5Uao6xKiMcWmKBngiD6HRUrUYdjYnmQScJCjRn6QtjazDFQFB",
  "key16": "2TnUq7pQvy8FpKzpCRw3kRJ1MWCiHzjAHi2pX379qCoqWMJaWAboL3jEVXnNCFD7HPW7MxXf2HC2FLH8MuaiKd3R",
  "key17": "3N9aujCFsKPuuxTs68tFPxtvnf8CK7zRjcctm8CR62s5RsNt5UNtkZzAi1XyfjGpXzptLEB1AFxYcmtJ9aCAT1ES",
  "key18": "2pxcR5Qgw1rJj96xgoTrt49LeXjStgWFvDvNQVBZVYC4Gz9SGHA2GGq9iVTKsYdXmm48jEDyCrd171khWNed64md",
  "key19": "5E4vpRpt8Zfo5UhuupNcU3Vawt2SdTmN9ZrYBrkhzwHXM4Mpqp2GSvyxrwmBTApsc4sddYnmjTfQN8caByqseSvJ",
  "key20": "41M4iu65p9vZYpWsz8ASFHPzHQG7ALtPA6Y7tosAxh15umSU47CZnYJABfe1zoRXH6yaiPshexXUCPcfo2ZMueyE",
  "key21": "B9cb4anP4iwPDthp1uCK1GGdUmbkoMGSe2HASLedEp82w3DR6X7WvwWm6vBdVMB28QFGSGKAq1JexoK2ekTENaE",
  "key22": "4Ceza9fEQFVvMn4yMbUssrhuXoaqTXZanf1HNjQBBi2WRt7dcZ6JCfXXp2BZVK8WjW8Fnf7RtSiymFMzDHPyGJZe",
  "key23": "w9Yf983vLtPGtgxwaosVK4cgE1L5KZ321mUtnL425ASJKR9ZatRbS4vpXiB6uNtWnLEzW4kaZsJDJmXwwtei6zq",
  "key24": "CcRW92DZo1kZPvYAeC9TkQ53iYXMqNPooWYbEgo6tKhGY1acriXoxohAn45QAuGiJaSgh2ffoXM6TG46Jbgp5qA",
  "key25": "2TQpGjrFZroPxYJpe2ReYRksFUoxsWhqYkixaDQRgRPwCHppfaFRTDxPx9ySn8BdJ2CrktEeZ1j1EL1R3WjMnm9F",
  "key26": "YT5F2XaU4CwVQsMYAazyWBh7wM1Rw9pUdfD3ZNd7DVmL7XLKZ6HvDzPSenuGft1SSYAC5Bu1RN9cAJYx12E324V",
  "key27": "3BbWDShxQT3rjvK5hDzXFXuXqnmcScozqy1zx8QXACCLBD5R5KFmws4zhmYe5cb919TTccoZJ2umqP5RrRfupEEa",
  "key28": "3RwBDvhmzP5mBhu4b4m6VZB7bKcN5MtePmGGbQfYndc6YAq6qpeL5vgEfy8iajgF9zsquJwGBAqCpJNdMkX3hUea",
  "key29": "RRceyfbULT27M4DA9hCDUuEPG3k8GVjBX1WBhQ79AnU4XaPLXAApT154yYRcjTzRZXBpdRX5W4gyAGsH23xY5A6",
  "key30": "3AoChxkyt5rjH5NTv5ReiwY22H9AgajqzsYkRu9mVNwnQjZivkbvaHcC492uLbpLxF5ZMMAjmckXWKVByxkG2A9F",
  "key31": "4KQsH7TooCvDhV3Q1GdcSa22SztnQXsJmXAhKJ8br2NSHYKcKYmxxDfW5hrxt8U94MDWLe95cV1hFFA5bAGxVTk9",
  "key32": "5AKUtd3i9sBybmS2G9Ef6cvPbB1P5SKhXFM1NezQ1Nx4ctm3G5opVNf8LXGQkyiKo85Nbak7TE9LVN3kiFTM2Bze",
  "key33": "5VfDtoSWzsUubwLhSeJDXJx8FKJ8AqoDhJCCq4swHeS6mtnEqbt3BUnrsqiB9GeP2mMT3aSsRUuWtEBfN4hnBN2i",
  "key34": "39sMVfBx4SQZcXX3xj2PnYsDWpHZYCi3Xm5A6LEuRjbgFtSKDf5S1VqRwXav7bXeB48Yo3xtPmmNyHHXM3DEvoEk",
  "key35": "4LFEXbFLqHruvyPjFddzgny69zB3gcjaPRuyijUCV4pDwLrZir1Ht9S6eL1JX22P6bGHjBbgUrKYrUtUcrdqoWrG",
  "key36": "4j8aFqCUBVtSGyZ6C5htyscyTcPc63nEvABLKSLYC6aqiJRPBHh84XQeRwdDMvGkyjs4iMfCMG1K4eNiPf8p6aZU",
  "key37": "2iUf8YYVXuTQ7iYzUum6Y2TbCUNtSjsqz6yHHC6JLAPe5bnCd22Sq55gQ2YKdTENfWN4Rz1K7exoZMWaHnwvrYig"
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
