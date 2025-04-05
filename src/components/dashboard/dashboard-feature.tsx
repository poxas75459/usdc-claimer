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
    "2F7PtWYrvh142kr2htdYYaYGhrt9xWbv21gm5XwVNoXpL9NCbb7fnYuaBZihuQLA6QjqQRQX2NnVUtqjm3npSpdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9upgCaySLZSu6MLMFha6km2r4RHcgQ6wiEgzco2unLE8y9WRLYvV5qNmNPRuw2Wq2YycvAMq8Y8qWtu8iHHCun",
  "key1": "4H6TVBJXJfMEfkxzNwwPMDCZLGp1mA33fyBeNHFchETiL6hZ13tZnno9ketxyT8N1AWyXZyB6BLjmCcxvpSmKJx6",
  "key2": "5n9GU1EZW7Qz9ieYJvbvV68ckzCajsxHNrLuj6EqaZpWuDyfnQecqBBZ6EPW2Xc9Zogv771eweHQzCUTkKLe6Uzg",
  "key3": "jSDkEhatpYUrkSpxgURak2ns4dfkB2vHo8aXjwofkPhi4v12L4fWyBvDAaMrbnv82TFEXLtgHwnhCAxM4w9xUB1",
  "key4": "5m4Er5GveSnCT5tr5RScRAWFnDXJTsuHxQNj2yse9kZdaXFG2kFUCDiHVtJWfTCcuJq8BJxv6ocAAJR3hSvRLc9J",
  "key5": "3zeZCdcExiNmzNC2582PWW7gm6kfNE5hqS92jz4jQ8EN4T2q6YEJx7Ls8tFozgUm9tKTiSfVhuGiPzjQpsfkSBCe",
  "key6": "2AGeFVDi8hKFeKp2UXgihjuPps3XKe8ev1uXt1Zj2rSBppnPXbW9gbW7QjnGktou4FBLzcEa52ssdzMWEd48ujYv",
  "key7": "5Vfo3sEtrZyGvBaM4nwuYrhYs1VqGVf3gefmueaNE7fRnK8uJ2kN7FBrBPKpQThD1aft7mSS777Pmsfqpyc2qQ34",
  "key8": "2E2K73VxMnBfLDDmQaFvZWYprevTqGZoFx5MiMVAFgJhH97Cp8j1rThjGpqQkUJ4B8zzVTkDmjTiBVMUroQ73JWr",
  "key9": "58opaxtBLvFQxR28v55KnfMVKJQkyUpJGMoSaic734PBNxKvRpaqQF3q4P21ur76zY8qasPigCwR6MTtZkSJsNtu",
  "key10": "3QSU3PAwwrPyrToJxuNUpahHM3vnXdkxeHgtJfGV4wpGgRxfGYMUKbv9hRfLm8tU645f6J2ddPoR7Xdbmqt7eT7f",
  "key11": "WSiqYaCGY8B6uNesM7KVUkoAEmQF9NHH2PcpNxsaQ7gUQFB5Mt1gYMU9C2zjUazpBjtEyFueZHvta2XRWYvtaqi",
  "key12": "38kpbxiTGdoGGgwcPhbs1fZF7YodzSzFq83T5FSEVPyeBtYsfEbTnDwPGLXuD32yB286RX1DgpnaeY46L1GT36dZ",
  "key13": "2JYvu5hem4uYQ64NKWnJgK3kt3sxig2j5A6M8FYx5SmjEjrUVMcfE7mH37xSvoz3jy8ouMebx6rALUJ9AQK3qYRq",
  "key14": "4mYxSnVFKhRj1zmb7ZrcPiRhphtmfwSe4eMGWSs4757wYpGVJaSpWbyR8y9j4pTVSMMbyBSZxQNjYx6End9VFCxv",
  "key15": "3h6wfjuAWKyswBBnFYKcV8Vzkw3G8KjKHJ9jHc9yXXDNdVNf9LhNtnRRWqtXsPaupkEgBMRK2Vgkg3zbJS7qtRSE",
  "key16": "34RNDVSsqYug7wshDwwLy3xvU12b1zH9pkJqF3Pus66ssqQ5cLhhKQj35dJm6g4xH2CosZJd9Dr58XQ7hCdjojWz",
  "key17": "2vdtDdnnQuGwFZNSxntz8FuWUD6gKN5u4k1V35GtXicpXqh2P3bNoFzdBayh1ksGu8tEG1XXRmBGx6QGZG32rbFa",
  "key18": "5vSAbTeSJHMqvnmNToAQ4V36hckcqziqhGTf8okVNpW99kTUSBJt75gUCWRmAZbC2YFfU1Th9RTxvhpQDrdgySQy",
  "key19": "5ET66Wzv6zm7JPkkmTwvC3kvZvsEDn1KxD3vTc2JjouU2V3xR9p9sy3cYWy8QwQ5YkCwJKDxMEew8v4DiJqq9LeR",
  "key20": "4JHeSXfVaK2F43GLiArbKtf2egKAUTjRj6RanpzEMLj5ckU9aT99XGiuNAxF2ysn2T8VPT12inHkgUpar5iw1pjs",
  "key21": "5EgNfoqSC5CPQioXTgwFsi8efsBvYY8x99oEqDeDjNEnyjzMhvocZrY8BxWX7xbawP7PkCDTd5ubUXTH24p61GuZ",
  "key22": "VA7XGDWD37JMARpBYt2MKP2JH85CTJGydtNz6RBFJhxHMhSeGDCcufhaiXEkRqdqXxxoTwAxxjbevq2W8DLhAi3",
  "key23": "3tygx9B2r9SZ4KRM1d2YvtsHY7EwtLSHjW62RYFQv1HsweK5bqbPnTnxvBm9ssTSey5b1TXeF8P9ErASeoDtfmqA",
  "key24": "3ERidD5tRKofBaN2dFF1bJgcbf4GPoGEimf2SFjxazP8kNxQ7o2wPhWC8wr6xX1vRTw83t2yufjorMazNgxZpLao",
  "key25": "5xnmJAPtwoqPcg2nYBdgCz9WntqiEi1GR9mpwdAXUHeGNR27fpgxJC2mN8pxLY2xG1myyhtovD9BmrjLAHkb7v5f",
  "key26": "41fAXfwQqNu7dCw6WTdCtXvftg9N7cpfvie5eFfCCzJmyrZRBhJ4M3Gb9VaCoL9JVmbYrJKKqdPJCnHnwUb4UbcH",
  "key27": "4e5VLoq9ofdLFFks9rC4RrYY3P8k7vroV5vUVyVkDPnNLZ4oS6De1TnD737mK4QdZyaWq7DKwVRdHFQUV6jUJYt6",
  "key28": "32HEqv5KSxqy2FBwGX5QnTGp2PFACdQ5fgrDNXtqbVbzqZuBWoscTA7ZiuCiBC6oztuxsPGj3kXt9pVG5F7bjvCb",
  "key29": "2TxKswmoNMJa49Pr5fCdEft7MxFcotaeYRn7RNpZPCmAMK7mGFMeLfFAbfm82wiLAGBhFN6jLwcypgNi4ZNDL9ET",
  "key30": "4Roi9YMQD4v1AUWL8mqmo94H3gb3szgEHtmuZewraEvXpCzDxSyBxmJ5TUvf3UbdewX9koJgSCVijUQxzcHmMeBd",
  "key31": "5apC5y1zUmaU1xVzgp828xpro3nrMq5aergM3mmYLHzsev9P7mFsP6PDDcJ1Tn9NMS6DqbxfnTsWgmyZcvLRYkev",
  "key32": "62nKJXQSv6h66Z4Qm1xPcx86P2ZNqGJff53ANsET31tznVSrxwxv13CdvWURso1ULWW9zZPafyNqRTKv31Lqb5YN"
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
