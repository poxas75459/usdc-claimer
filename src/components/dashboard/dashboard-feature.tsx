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
    "3T8F4ttczbuc6yntdYwZ1UfGTKfJepG8jM9UtiGw7BGdu3V8pmkXaFtF16UfA8zHBq2HtVyJQ3B3JptKLAvMhVVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rupDPFAQJN64fdijJZ6wMuiZzktjF1c6EaTiGVZ9EyQdbCqBuXRBN8SKrtCwAAejyjgEMHSa3Gqg6wRqFQkgF7C",
  "key1": "3ABDgjTg7Hpih9cayBESq9H8sy6S1BBmkANQ6ParjJ5b7iruGyD5YeNawhxudsHchr94WMeHd5zzrR2icWSNBJvs",
  "key2": "28RdR7cmcvYND1MFY7GbBsCsiZRQtrqPDxNhjyetUwHChgcVhzMNbjuLLRBd86GWEqmAcpp3sGiP91ZKhgT2ohw5",
  "key3": "4Pof559M9vkj1cdcnvUSXNJeRzqQUpJUXiTNdMaB86Lfo7YL6oYSHL4NpaEbH9VuVdVEF8ciFvFjR1cn1hLP33vA",
  "key4": "2x2aAKk5CBFSm5kgr7NPffqjRjLakzhSSw3qMVwhg3BYE7yQKSGZRfPjpUK1KYawjPxkWp2qHrH1WuuWNWVM9dkQ",
  "key5": "3p7LG2kXu7esSkzKdTDe8EhJSkxACGouEJdhjVck8vXCpR5CJ6Vkn4TG5bgafioBp4nkMgY6BU39ban7yoEaES4T",
  "key6": "2UDWx6dTHyPFegJyy4nWk1rtAVwFhB85K8eG6Uv6N4grEYpUsXVDpMDRNomji3xsc7xoCYkFuWX7hZbTHc5GoBgx",
  "key7": "FqwFBKZomFW2mgTYzf8iJWia438EDQiPTJxcVB9zykhVVYENYG5ZtF79FrXpEZ6LZLC9EYQy5qYnCf3HFPVb3sC",
  "key8": "4ynzwJXDtkvgoxRNnnE9AiECGwsfeY4ofbfHApb3ZQLYN4x9wXKJuugVUi9qN2bvZzUjabTvADXF1LAgdzDAJJtU",
  "key9": "3VZz6m58CQkaNv25XCAnwSPuKVAXGiTQ1vN35bHbpZGxPauF7hJ4fvmX85HoUwsCatTLVJNVhVHJPjS97zZ8qPxT",
  "key10": "3tC6x2CCEzAHfhrWWhQfUVn3qFxcxvAvi9vrK7yPmWWG21V8XCzVAyA8q9oBN3LSwt7GUw11pQsuNMvkbCGLEVer",
  "key11": "39714LhsgtWAdSiH9qB7Tfsdqg6sddJYwraMgebdj7BjjUZvv7qLVJi24b91EFpo8XU4yhHNCcCYSdseBnRiKoip",
  "key12": "5488DU4Woj9DNjwtvYEV13YADEe9MzrEs5r3AvnqWLY1MJvjnhqjwv9iucHw1kzk8NELs2WohmYxP5pUAxwrs5e4",
  "key13": "5BE37pDGCAutqatTZYsMBXhryK9c4ZKtht7hDwogkTRUcxurrPEWvQEtQNs3djAjpZYitmiyQUEVeS7y3AsAjJPZ",
  "key14": "4Co6AzzA6MpYKKJbApJRsZhdG41phr4nFAEmA5K3VPuPXSV5zj7sAyjdaoMEBCXtdh4iaZqcnmXNpnkGBgNqK8Am",
  "key15": "5bk8n2LK1uKUAoQvv8URgEmyMLBKbxkLiwuuYx27aaET72aQGNW6K1YPWfXisHmFuDc6zcs8ZLmeB2AYo6d6x9MJ",
  "key16": "grNTY578yLa81S9BV9icfPfBtwSESKvoTVJE8V22LCTEoR3fbD25Hf19fqpMd8xGaNt55V4u7k9Um2T3V4nS2Pa",
  "key17": "5xaZEPnj2kFzBkxdXB7gAGfVagpmR6Ue6Fu1TSnxx4ENxJVRhFYghWxT5twtSR1rEvVYprY6g9svBpUovZfYZh47",
  "key18": "2o1YHYnr46DZGiGbnMqBbchQNyTsC8ndNScTiA5AxGaSyiUDzmpu9aTnhhx2t71AYbRtKAE36GMJA4rGRvnQLttX",
  "key19": "2GaPLJVZnCGzk2UiUJMuNyH5GMgjVYyG6oCKpsocrojZG44dGKxwEgSbT7r7TzX1ViTwDbnZs27QitibwyKZerQg",
  "key20": "dxjLxpmn3737CYKsyozLdjkiNCuaXBrb22rqTjtjDBMryvddhvFDT4sSyEr2KsH1CDEAj7MxVHPHURgSdujhxHw",
  "key21": "4KnZMjad9v4YtXibnkkhQir2yBS8DHV6SeMTheLWbwLDmivNXMwZ6GiLD5YnmaGo7YdkfYwT3SwaZuo85HLsWwFn",
  "key22": "3jJ6tJ4E28kjzGXuPnhzZWF9vqnvAE9jZKyfWpjkjpwwafz2EYBCvWLYC3LVm98WM6hKEYecFnyfbYTqTambD69F",
  "key23": "59sR9gDchdgnBiU9CprTEVdmN9AGLfmJ77yG55YG74cUBLAS7v439Mnjv7uu5KArFC4aff6aZSqTHPBvgcsfvcgE",
  "key24": "65NyUbykGLB6asSuqGLWTNpN24CUg8mQuuWzFMsC2arxGm6EJqM5q4xtiF3UPxCuXxjppH1dead7r6xn8TznPnRo",
  "key25": "3dD7Z8ZwF6SM1Y3FZosDfQfNnYyPD6X8SwMrihUG39ZAyza9bLNT79xTe5uhfb9UZ2rMZiCJ2e8PE2rSjMjMQPev"
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
