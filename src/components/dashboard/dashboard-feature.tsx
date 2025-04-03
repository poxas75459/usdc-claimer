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
    "5Z9fSgywkifEHBhpFEnAyVrp8xdZsf65QN86st4Kx87hZVphWoka3aHomrhAP7QKy3KgMV4fuzZUxomMHor7P4TT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XsypbQ2zRCFx6RXLLz5kLT4D5zkAouNxHHabWamyJwm42NSnpNDxR3oY63wBMGxP2iJqLuVEecQzSNQtc94US4v",
  "key1": "4NfGrzaz5APqgA2Fgqq4Ax6q7816Q9rd6JG7XRYDmSJjF5zd9dprPWb2iPtH9gJYcWf7QtJrvLHK35gxYBzt26nv",
  "key2": "5JNYzkKtW5Sfgq7LuNnxXog73ryBMQRRytrmqSHAwBkMquwWsqVWKQGL4DSJSXwZ7Dbz5SXDVR2MRxwM62srPmAh",
  "key3": "3QPFVXyCUigobawkCncdDtdP9EE39SKdWdFe7XiZKYJkdLe8aYqcYi6asqWfdtEoPzbtT4yiwiSBvLehV5kDLZrY",
  "key4": "5Cq3yzDmon6QVaFEGUquUbxxwxBVgHfV4q5pNntNLMae2DupP4ygsC3my7aEe4uRbxrcFHinq3S2ddG6wbjxXMSM",
  "key5": "65EBeYmpRAZxPkcJ2PnHhGg8npanzAxnYqHGiLCAbBdsgKmCNWLTUiiuhyU3ZbFEywEW8JquntFxEwV1bVzASM2s",
  "key6": "xywHKjc2XnSD9U2MSBoNSkNWFYtgP44LKMnkb3yWoz2Yp9kvQhzRr1ifY6cAAb5TfsqoLWcqWhxkWQEj5z9UWzi",
  "key7": "28XN9RWgwVaN5zS6gtNmva5bS4ysBZbDkWGpvgGtsZt4m7n5iMghNccj43X7518BzuV2AHdJfx4KfSQrN8HVkp34",
  "key8": "6YErH6gtG3NwJwNeVx6bpFvgXXBmNyk2ftkXFzUgLwE6GyJqX614AqDwPaSRbz8QVAWYAK1VYmzfLu4oAAUnNMB",
  "key9": "3KzBj3fM8iG5eHALATtoMEa3ZvFCygCGL8eq9EJqYjEM5hqHj5rvWtY81XG9DqzMdso1iYaFqTCH2vDjx81VHVGY",
  "key10": "H6yxCR9ydcDeAXbZN3nyXpe7biSZfJfJ3f118zGrjHbyFfVk2s9TuNuV4MAxZHgLY6DxJayfah3kXmUa8Z59a2G",
  "key11": "5RBB2RnUBeCtFdyjA3o3RsmyF1dqwFdXYyss3B4XugtkHExNvvBiC7V6YTE1VsvhRij8SHw36RMjjj3Fb8uXoZbo",
  "key12": "4MNPU9XwhUcpog28A215KMpXkS7M1yVX6MnDUijeEZF7ynrwzDYMGppxRqyX35jNbYVMpFgebUYR5C2Q16chG9cf",
  "key13": "4RioTyTDWeU9Jz3Y5QwuWqtbPBL21MVLq57NcRActnHoTDd5a73tKom1GbZAoDzVhg7b5r4kJCecaXx8ZmbD7nf4",
  "key14": "3uUqUaBxY9YmYkP57og6dQKRFas8jdhREpDDnxB1Nko5fwketC1eVTyHkKYDzTY9co8PQivB8qbcwAc9mgL1yLzx",
  "key15": "3Q1LiZc2zpZaUE4nK8kSwaJVhgRoCnaxxEpM4Poa2nr2wV99F8382m4Si9iJkw2dgAMw2qSp1pw89yb8LexjDAEU",
  "key16": "4PcbFQfwTY6tTv9HvSkLijLhWgy5gjFjFRskrUW1k6UGeERKRpgJrGZbr6yeB4A1gZw8fe4DDR1u6y3XTdfkHv2X",
  "key17": "4bFRfgUURHNYuiq2kndeTg69mQz1PqT4eTipafkAfYcnv8kWS6NZzZaBkYWYPxgxrwDTbjdCugMknDw7nY8mf8Tx",
  "key18": "4we4JZftHzHHXdqUU8ciVZ1wtwRWVydALctzUokHQ1xbJ7GAm7SHcQ39NGqHBYTwL1Pevu94ZYZsWFDPrxMQXUxj",
  "key19": "3ca8ZZrxYrstNc5FTn1F4uRXxgo3PvLAgBHCD42ayRJTuuxwTRM9y1t8nhZWyULzrWCVzryQHRH3YFfx1JeT5MB5",
  "key20": "4kHn9adyLjdpnYqUbvf2Gb9XTf69stTaqw7PBgJgUrREHZ6ZJCrhsDLHy5bBFwEQu7AorLzomT1W1RLrAM3AkaEa",
  "key21": "5GJt4eBZa3MQoeuNzYSDDYReh5m887y6xngepuBMpzPeU7A4m6ajByMv5URP7RQG9gEabMSThKxfD6gYuX3EuMJo",
  "key22": "4APsGSjoGJtTYn6V4bwB59Pj7HemksMW52Mrx1SCn4SdT1YVSDZtbkXGA5daHzp4TrwsSdfy6S6wCY7cxQKAjHJq",
  "key23": "ZTC6A3NR1QKhjXNKzRPiX9vDxuSTp3MekZd5JcW4zDAKPbWUHeEZBtWyRGHtyaYHgJevAzHgZtVahn31qEvD8d3",
  "key24": "39paFLTpiKXcd8bkaBTfzGzpZ2Szd6cPtkYgZbCyZ9dXTeryDaW1EfoDCzk5eCvMhQHKrkriy2CSi4y7UuEEdxqc",
  "key25": "4ZocwEdXDdTtrhZ5sDrWQW73MXPZ33a2ZwQ1DCMXoDKqnjyNsNThAph5JfKphY1Xn7brSfdap2FwHUWwapjPcxNB",
  "key26": "4iqViMbgLEDmtKVUnjhQjDRQSn7t6MxXb5PH7WxYX5Fie3toCASiLtziVPHF5euyLUmfJbuhfTPck1rfu2LEbfqQ",
  "key27": "3mW4jf9UT1uT66G6iKxpkdJEkvhryQPH6rwKajj9McQG63HrTAZ9sg4NmZHmf7T8R2M7ATCDPzYUFVMunnqsPd9N",
  "key28": "4dRWDppHUsH7x7dL4QyCLnKbmNyDCz2j85nn2UrJ2v9QEjsgfdiPSa2CKSmWRvgU1TRPh5j789nKvHM92UzZJTmu"
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
