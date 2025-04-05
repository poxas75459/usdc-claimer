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
    "TDgeP9UKF3rGn4GahsSWUSrHwoYeHhJWpybL1cWoSmdun6BYJbZN3ZYD33RtccL98uMPpNDpTGLc1dex5LK93wR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32tQQzDKpaShFoem8U1Y1diuGqAG71X9ab9As5rAeHCRkrno71TmS8xa2eUMdbREAkhYgwqk9xG1VrVaE8bCHSYn",
  "key1": "52fcMEqoSzpreSxEXFucanphTNKbeueWQ8QTvanRhQnHdUFZBFahVxpSHBWGkqLyXqcjdC5ioxqobJH1LmHTCPmh",
  "key2": "2tPiAap8HNKL7VpNFueN7YQVGUw7bS17vtdqndUnoLvSmPayikHUMrsVdza3f4L5X5oLSRgoWddAx9SoEKe9iRjP",
  "key3": "5NBNF8sAUDQJaWbAkDgwBcrouaByK82Kd5jmNPVjtFyFUQEgNBGd6hyb58iPevqk8ndGEzpwegQrJbjd87J8d6kE",
  "key4": "55ef3DFqpNedzTYN54EzBgfK9L9E8LnByZ5CnjGQJWrxXehAYapEGGwR7dRMGjrCFxCoxXry6x6FiYap6NcsEeZT",
  "key5": "4Su4WRWnpQJRyoqhcUpNFfx6Kv9xcKy9Dv1Nc72uWRosNcLzNbgkvUu6q2xU6m6xKNqwr4bDGiguX7b36T87sRyL",
  "key6": "TmRecV5JLPxntEoQmqNt5fJD17NmQrf17anFaibWzFS7fnqaRqutkXuHnjhQwr9tjC12M31XJfAu6xY8H4zLS82",
  "key7": "5W4tJ8MWEMhuUQj3PSmKLmifLnxfF2a2k9k4nQtQs6JUVNgi9DfkeNjwuFqaxGwqinT4YQjTTPB95RsyiXbBuFQ9",
  "key8": "5EZDrowtioty5iijANkGd4FXbFsosNY9huo56v5i7gkJEQZ3izsNEY35DswnL4naTujMgDrCgLDdTXhPK8D72a7J",
  "key9": "4o9jBS2xhrB1Lo1RStj66HfNX3vnKDoVRMSUP5C4PJmCUuHd6t37kQjFUfttRaiZPZRCePc9MYtqcoPzoPZnwnzo",
  "key10": "3EiFpWU7xvqitZD8vMzxsdWgauyvgxs2c6TxQ1C8VFWnFTo8w1XMm1eSHQr1XyExH2Dc4itCZ4JEf61dgfTafRSR",
  "key11": "2jKAPmmtVEgSGMFxcLzpa15csBPTHUbUATdXjt9gYrLTJpEvnE9J3HsgG8hG8kU3zQfvXN9joGkwL9Sk7FUW9w7V",
  "key12": "3EiBuFXJNH3JagheBAFKFvjwmxYnkK2cQoesvGjnv5XG7KQ1hspT2HnGfSSwzCy3tcKpkPiCiHzyrDwFtxoxL9wW",
  "key13": "55PxijvMEWLZLD5NKrAHALEqSqX7GUnaFf1GewijR5qXd5KnUjrQDKrf1anMVgA5voDnP5JoSm8QzGHYxN14tK5v",
  "key14": "5cs4JmHUB7pXaC6LomygLBTKBmku2V2yWYSAptoJqjd5hzw7GysjsnjjU1NP9G7W4wrReGAioshZEXmAExUHsxn9",
  "key15": "3yZujabrSWTEL4fYLsiuV4W32MqE1mBTaJEf5ozXdfC95FmHeCQHRXHLmybk1YTgFavo9fbahumtxMn7VooHDH16",
  "key16": "5qef87KcE42TGw3dGHtj4g5byyCTqm7baXZXfGWa9gi2eTKELXRuQuft9vWJSM8xAhZY2RYPPGvxqAJhjTtwp2ur",
  "key17": "39rRZUZ9FvhLi9HXodKK3jVah18grx988Aw3H6mHDovBxi2H8RECtVsckGZqoZKNW2Fe3y7DG4Hsyo8cmMLBW4h4",
  "key18": "3QDr8Ggv9Pe1wAD6vYXCd2UetpNd7MKgkZSt4GZk4SGVvPkfv727ZeptDkQRrxwdjRauuqcduQJEAEpGGtc2Gk5L",
  "key19": "4hSU76WQf96s7UKnua9XiheAGjuD1GybqXBHd6XtWGKjcwfvTXL4bFAxPXGxMNtKfPQ2aikgB8chTXJvVLN3sWbQ",
  "key20": "2ytg3Zu24qk4itgbYXVEDF3SGxNhWV6YamtEVwC16hGz6XZ3Tq7yXQYg5j8vy4AsJFxwJUeWtDw7fT4Dhi21sT2W",
  "key21": "67PmmsV38qsygA1z91LCLSgedix3T9QjRiexkFb3X5CzoN1AADeHpchpP1UhbryVx5FUSsWpXh4G7wJ3eVFkxcWn",
  "key22": "5GUQr77shXWqZsXwMURmF6XPeqe7Z5axxKg1oKpdb3cJKHNdNK565fCBuKkYtXFW4v8NY8sK1YXi98FPHR8f8VRY",
  "key23": "WyjFwHdw2dY7ZSLVMmYKdJFYjbzq9MvHwkVD8CiQ4GyJEXWgCrPqmNP7Q39EVGHptv53B4DPK6Qm8mVLnaQpqRi",
  "key24": "WiUnDzpr9Vd5aREfaabo8y3G1B4L4qWaGiccujNhc9YScMetQY28uvyWgVAtHY2Sq5gnjvrYitTbByc3cmgRWhQ",
  "key25": "5Y5GmFFgf7RrbyWYzNLvQsm9wu7cDZaCSMLh3Lhy7LvnhYuNg7RHHoo7LcevBx5ThHS3pU2HzewwupnwhvCRdocD"
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
