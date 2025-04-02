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
    "6Yordra4Xd2N8v1P23wHhPH5xDapebWgv2M9z7s1CM3UuYmmro3SgSHesZQySZigfCh3uWUNmaV13kKWa9cdPo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eRbnWwBvVvVA4CVJMR5TeCXviC7qkbDuZNas28TXSFSbMQvNMydaotvHxv97gkQ9ieFsZmWr3ow1C2oZkMNxXc1",
  "key1": "3yi9Bd3Euf8nyPw21qKgcVWahN7q7QrFr7GUH4x7BDzGWLsk6WvafWWg2f8k9QMvxz5CdDuruhf7WBZTERatYhBW",
  "key2": "2vFCSraYB11zpba6fA6Qicm212VioGEJdHTrdaK5Gt7K6CVTLNa1aaYRosiiU7xcH2xUSWDjqLtRhtRN6Ax7aD64",
  "key3": "3gZNcgRKBoG4y6BdiBcWUQbDoTxV5yL4vQuSCibtawWG7khqBudAjd7BVXFhAeDN7wFJAH1QKnQsG43GsEM2DbAe",
  "key4": "54ibw2tEAPj4enbxcyWfVH4WQNgP6UMG7iL2mA7iii9mETm5QD87Y3o7pJLAz8MLH66Wegy5oxsdyYVuSdJcDq9W",
  "key5": "53NquANJPuo8cwwXYmPw3PsjYtuYNR7YA4ZSLMPoAKKBHkgMthyFt7CLzHgFP7WxbrxhXdoY2xScAURGiGjCA6RV",
  "key6": "2zwrgTkhgR9JmpvGrw3uPamrGioVEEDL9oZf3NGuE6f11zzM3kHrr4bziCh1zGUF282NtPj5jqHUcoB7E6GxrGGA",
  "key7": "2aCGxUJAgWMNjGQdMcn58nP1QavuYAkqADqPHUjSzmh23qvcTz3tWkN3Z4GgeAevT2k4vb6zVqiiiAf8k9GQrowJ",
  "key8": "2PJ6HoNdyJVT7kC3JXvJ7bKXVg2ME9tdKK6JEYnxUcjQSPHJyhcf241m7UQa33VGtc4nYAVABrGm6edZskX6kXi7",
  "key9": "22UDvTd9GJMGUfZR9oR1s3in4quFotpNtSEiix4RknX87yNFvKSsu7ErimnQPpnhmuatqJpZ2rKfjetyfzA1TXWo",
  "key10": "4277zzvJfShAHY2LTWgZeyGbkoauw3A6kFsrj1mo3tqQ2fExzDpt3Yxx3Ht43snrYqYTvEQgsy5VZZxghKtSZ5aE",
  "key11": "2GRJshueweWnkRqQCFrFEi67NdT7Ub4ckuHAwwaQJb48u9NyJ8nZYpEGFjWdsE55HyJ5XMnb52PLXe4DY9Uiwnuw",
  "key12": "3aCopNuT3Nwj8JSQzxaaKiYeDuLU27AaiwZub8GCy7QqHH42gC8Na9SbrzxpcaMb3aVF25779pf7VBbfeSETGF1b",
  "key13": "3jGh1SDQ4nFRXQWQNchm6otUo54abicr8tait9JdXdiqNZKLDzq5dznTmfT2t9fTvA6BSrpcg2vhEbfddhHg2poU",
  "key14": "522vXS8TtNYGrSXUfEHAeUDYsv3QoVDEio6dVi88bE3hEgb15aRpz6gAMwqkSnEDMBcqP6gGYqCAC1UxWn5qDSMq",
  "key15": "3QSvzvrBapbSx7DE8VVeY9VJiJos8RKuQtB7CJMw2TDhjKD4B48msdeiy6hE7JMPfavXmFDbCzyzX1UgKGBW9q68",
  "key16": "4heZH6HGEvyPxbANouVAHaEqRxYB41PQgbSeXLQYQjjgA6HpUhR1XNXMzJ7kFUAcm2S7aikK7oXaKQZ9hJFTUVrZ",
  "key17": "4i74tn1b35KHWYoBksR1qqE3ch7F6cG9WP5dWEciJeXc8DqfjtyAgQahUXVYBTMeBPZ8cnE5z8iQWnWKSi7foUKU",
  "key18": "3ipkwtzUeyPcwQfm2FjPedbN9ncQdD2SxSfwFysQm2SEoBdUm7LYCg2JAqe9HtYGMibL9dVFjwHhjQe2MVg5myhX",
  "key19": "5wh6UL6Avf2mEeJ2DpQi3hVymXzGubbMxwq3iKhZb4YBFq6NzfMQyTGGJWAsgncd8uG7ysSydPLiebD1Es9CDCfm",
  "key20": "3GeKpEoK8ottLGNzWsXZnWt2PKC16CGUMht9HekKaWctrYN9fHW8ona6t6m819YoaqjbhcqhxYJyD2ZnhiwaMnwj",
  "key21": "2BdXD6kR8UKMHEKa3Rdcam2pyp3JFvTRgwY25ApdqBetnjHt5bRh5M3Dcp5MjQw7uoDJJHKZDhYb6reoQejCmSSD",
  "key22": "LfkN6FXxJpGJrSLPaRFE4uGM5fDtjFEsa45d3VuAXFBKcUMPoMyKNkNhcAfM6CzfxDJLCzZEDgvK4RTHLCxtbpZ",
  "key23": "3WN43Y6f6gSbYdYUshew83DN7BrW3iKkvMwLCLJCXqvBvNDLsVo5bp36d57ZtQ7WPCkw3vXVAyTJwTsGYm7TQNdv",
  "key24": "5v7oVAPNS22KP2g2tNkCFSE9ziGCkhbUUoPBpdCaQibZJMmSfnpEcjBUi4kAy3w9N7jvep6JVpaw7YYN9rB8Bs9Z",
  "key25": "44hHu4Y3Y3sKVjbfm9RsJFjki5ZvRWFzgv9ZqP9REmNSNQVrBKurfrjNs9gcHCQjDUxhFY9gPrc8xXVR2xeYDViQ",
  "key26": "2oLD8cD9KWdmzLBb3DB62no9LfswWrencrB5nyrHo2beoMztDx7UWLgqztZjCEH7wc81TvTcWCREqprCZBAhYted",
  "key27": "4gRrXqRefugnySXfebtyVk1srQBQeCJp1xLUzzc93tboQkPSo4ipSPtt5QnxCeoGn2E3x7J4ANpHpwMbBY1mTJaL",
  "key28": "5eszykfeM3L5NGGkeMb6MtrF6pdsGVUt1DHWKxwNCL9ZHGJZv2DGGsBHX4CXxTW6BUjfWtrp9QpcLMvu9xUNVjCS",
  "key29": "3crXU19USimFSKMipvW6kGHyfWpEQ9yRL25Vgppq5dWcjZLEkxdNZZXC6smyyHsAMBgQKHjxWg9amnMMFzymVC4b",
  "key30": "5wm1u9TZMGkRVpFsm3RERRwFdVWaTeqbKMM5joXEcYBSX1AxTH53Y41AYf2DpgWBqvGN41Vj4DGUPnYNmJiiwfj4",
  "key31": "5hYri5gQR3H3d86modXiFoZ7Djb7fkme7wbnvMsd8i58Z7TQYwRqBTs9pzrwbHw1JyPfM7mbVKqxaHfkt8FvPz1s",
  "key32": "4GPp7CnLdraGcsBisPr5icveoPacumTYgCih1HnmAZqxYr2Eex7petDj5VABrFBugeay3foo3mtmMyFfRn79Q93j",
  "key33": "4G7CRv3AF3zFknJtu86njMmgqJ1Y3XDnitiXVs6B2tZuBJv3tkm4g1yZZD51vhxfCQS2it6iKHsghZPJLw6BUwCN",
  "key34": "4HZnxFj7wj53xmrwDFyQGHp3hH1cv8RwhSBKzD3VP3nyoBZbF2SnP77Ch5Nzd9rv9K2RoChLwH4gYxsUdke9W26s",
  "key35": "4pXBUaZDiRPmFxNWfxBiqF4DqJFwxxzjtRS5xGu9AFcu8vUctQcx9euHKPiPG5R79RuoopUJr328ub8YJEqxS18U",
  "key36": "5HTUM6r9RkoXzR51oabWzK7dmdFnDfaMAqTCfCPCzzmm833pKwM6zv4rYfyJZsJwmgm1nr7QR2WccifkuSVm5u8f",
  "key37": "5vc5pM9xDA7j2F61odvk7MsVmLTGWtenaLNz4MTK59y1oGLEszc9chiAJQYUfruixpjEmpfbmW24LBrQvqwWzcsE",
  "key38": "2qGKqzLKtwa8FWPEWBA94y6BDTmPDFZks5Ztj59wh54vPkxRc7xCcV3otMpwqynyfLrUhDXYdrk8ns79Wc2yYMKB",
  "key39": "3jyX8hVhdvTf6veGhVtxtNbopqmVVS6PYy4RDUdnsBE19dNEgNXaqxW3SWWUEEsg7Z1gWVKgtmc9TjU3z4E8tc9z",
  "key40": "2j25mDExhEWq2n7LUWQCyyu19NWzjeCuF1bbigFiCkJ5qZZvMLJBNSLCkQrP9frkj8dp45qk6fiF866Gy1iGt3sp",
  "key41": "LuT8ea12tUVSiNw8iTXUSsEQXxZJKpGu91SRNHR4AK9X9jnC2UzYu3jjGa83x6mHXxBD1sSiEaZjVWgUPjzAWrS",
  "key42": "2gSd1iLHTvTGXbwfdZpkk4WyQhwp9W6Vkt8KjWM52grKKT61mpQ7hNpcZv2tZyhP2an2uiDAhRVAki2yrnBdKcyk",
  "key43": "33FqSEoQ8kavvcWRPUWaFvrmx3qqysY2xKe6LKXQs54uHARHs3zNhBDEUFZCPFmKJEth5gHscTMqn7SuY9qtRTZW"
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
