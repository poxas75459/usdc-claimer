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
    "5fX6RED2KhASZe2UcSQLRoadBMGJbCRWJnCPPhJJwoz6axP9GiwGUTjbDgmr5Jw7vkfmq29KovTpkgca72mDwy7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2To22KWb4mVN36YuvtLaSiRuzdSKfP4yJHxaqx7yVpbtTMVoqNahq8mHF5BDW98UFnwjDrro35aMWEzaHLe7Se7t",
  "key1": "4ffrM8M38iBiaBLwvEQnejc74oQey9d1dJbCVZhSta69kMQLAXtqmf62pRWbwBbnNxojugVNQ2WAwbwPQNzsLZDu",
  "key2": "2kbyW5iuj1tFhugJGj62oeg6R7ZT6AjXZ9CMPZtTadJpj8XmuNfbfA9H79NhpafU6TxQgvJNecVVqT86p5ozFbbp",
  "key3": "ve9pr9DrJt3ZpGaQdfdjDbLJczxRTkaX3nLLCkcQRBwFFahThKSurcui3MGSEq4Ee88PyW5oVNeeGpu17Zb9nKp",
  "key4": "3HHmMQf3URGqjy6hLXx4fML7kR63FNDWZX7RN4EJ2HavAWrTTTktjjdvxzXVgmsVNB3cxR2H9cf3EPhq3ZLqAKQk",
  "key5": "5A7xSZ1QXj6ncWpWAhiFj5QKiXRDMsS97jbXVYazNhNkTcePR4RY1txLMqiYYgURbMNGvevXGMeJkvH4GZzZBa78",
  "key6": "2pRehNFxJx6NcVKF8okay8tmsjTAYQBQ5ydSmkXMqxUjj9e3c7GSGSZhvno86kqMz6otymycoLCnfrMs5KJzZJHG",
  "key7": "QfhhWYhJAV5qGdcork997PVNQEiccifoAxavyizcMMRvBdXUaxFy3eVAPfShQEYiuzSU9y3fKyhmfWiKsARdJAZ",
  "key8": "4B3Gbir8no1nvtgAv9b5B9ZBxiFpkSq4dUWJpbyxve2YyhtagAPt6pw7V6MJEAFBrxDAfyETCn1LzaxSHgDjiMq1",
  "key9": "2Y9zZvesc98XehRE7aUEkJ4LY8maz4wM3kQezaYrXHcuUdxLPPKBkrVgkboqqwnedKmMp4k9R735nYeY2iath5Et",
  "key10": "3aL7kyZBpwDnXCHmYGJLWZEp5UD5EufdcaQChMH7aeikyvQmkx16E14rxc8rJ7cq8tJBcjt8miBeehkTaz2dnsJ4",
  "key11": "3tLTRsjUkgVzStLuYdehTYAAPi8QzEvL287N6P2wbFfn3s6PYpk2boyJBcZUXHaaffhv1qq8K3AGwfFFJ7EyaGRe",
  "key12": "2SaC4gQzVNwACAGL7k3edjYCXHHRFyRAo6bA8Nhap8wXyQN9suGnbdVdYZWARcJDxKkCVNHJUs8Vpi5rXcv51npt",
  "key13": "5sEcRqQUKtPRJ16Yhr39STe4LAS61UsYNKmLGcRRHv9G8WkMTEXRKQyKUbiC6ZA1D7paJUZJ82iUkKoT4XJmNQXQ",
  "key14": "As2kNxwirgkbrFQKFqtA4YJ3rSgDt2XknozY81BzdRHDVDnwb2cQDLdtggyk4smTGUfu8Gk2ZgbCzmrrQMzHnqk",
  "key15": "TpnHAW3hb8XrGPMDcrAZjiPzf3Aw5z53GuR9azhe43YhLc4c8HuGcWXbmE4B4xunXBpJNRcJjN6pLncANgy7pE6",
  "key16": "mUxqmGveLwMY7mQnrRdVxyQbXQoH9bTxtpbBJtPqAYXj71r8RtTA11q6dScKnXJCn7wSgPwiCbNBUC6HmSwSbHD",
  "key17": "3aB9NJAsEUomTAF6TGJqM67EqvbMv4MoYKiEXu9e6VRk9uqtTo142rttz75ES4xAah6YJLaXVnKQt238QMBnEPPd",
  "key18": "5pceGj1YBhdnqQpFEYbQGyoyjtgWNzuC8kAP6AGWv3Z4s2PwyjnnUR4rCyYtEYx7NNJyJx2fuFPHSASnCn5zoQLj",
  "key19": "4kRGmzMUYsWMiifgSmsLL1B25Z6qhEdgneteqNzUXHsHfE335Y7xBCX84MrsMK8hgJHWp52fu7LRBEeRWtBui54N",
  "key20": "qWxFwBPWkdQRndBEPbm2D3Z3FsyGP7fjE8ksJgjhqFUdDoAmwsDwsPBuYhtw5WSVDUL984sPi6AmBxA8azfDmM5",
  "key21": "3WXGtGGQbxx31kcUTsnmTjYZrvFLqocjRtJGkeRUNozPmhEnqahSdVnNhayDSH7tQDbZNQw9iouFZ65QSn6cYBtG",
  "key22": "46FNnKHaxSdq4SL1aWwE8gXLXyb52HVxpPKuckgPisnCovbToR6ZotMLHAj47SGYADMw8bj8sRuCXXonrNbakZEH",
  "key23": "4aRBGa99RpFjS68QotKeFe9RmWArhjX8ppWkdn9uPGy7EJ7C1vNMiWnMTXexfSgqPg5UfvyeceKGVCNNX955tvWe",
  "key24": "5JFkF2jgsdiVJ5nHsRhFQTP4YimtGLzmpDLy6VihXS4ouTq3bU42LMTSKDezo5YAs4Ns3ZbCgGJd3ytjY2tyu2pg",
  "key25": "493YGErhWRo1p9VDrfPgpa6xdYhuxEFFwst1rsaw2oRvcWEu4L1vG1yCmEtQEAtHhqx1NAEbBuVhhEo7oDTSmvAX",
  "key26": "2iQp9BmqBd2cGgB3CNHCU3yPW6b7EkmRxsshixJRXsaMRhxHEkRfkTzetH5xSSwpiVuYVromscxBLjxWwK6Kfciz",
  "key27": "2dEwYWUR8Bnb15vXzVFrHLr9Px5e3NXMEu8iiq4xpPTtt5qu2pxR5sXnx3ciWE5QGyGNQeyMnUE5yn68yP8LcUEN",
  "key28": "2dYRjKFM27Wiy9jmBSbpQ2ehyc1jA3zJQ8YhAoj7TutGvEfv8GyEGUGQGtSeqVfe6xGZMAgRhyNFsasBazC5gwEy",
  "key29": "3YU4NJgfCySAevcymirh3pU5QbxCr6qZdZQvGYinjcpZdjLVUwzzeXktvxC5jnN6irWS3Rmm5GqSvYkdGj3nftWQ",
  "key30": "6umwzr2jTc4SQJ1VE4Yn7gBJQ4HdH3mGHd379RsVRQgNj7yc7T1aFG6ApvPLr6wftxJcSxMYN5VsfUK5JCko3PC",
  "key31": "DEANxAyfC3wfPhnGw6qkLjReux7p5vQUkqzH1ZSV8tAtbQdciymaDwUjwV3sD81bzshW9K5vaLtUYfBmQzUrtrs",
  "key32": "2C7BnK2HP34YAfg6iMY3QeVpyPq3TpjJyvcLnJw7GubZCb4uhgZh6YT9FdryDMpVhdAJq4VrxNYHRKR2cu2tQNQH",
  "key33": "5hx3gLXhmwMgJu2S5pt94cEjmthVNkvXR4JjJwJxyp6PQR5DpToRSjUdF6Zj6Kv2zuD98MDRd611QQtUi16oVAB4",
  "key34": "3bNd5BEkFnkpSCPZH9j4BRL62ycUvpuNoZaTZsHPNDYpvvfwMo2m2b44yQzTvLYJZu7PoJMvgWZPTTsbwUxDxyJW",
  "key35": "5ZvBbbS2ciXnfqSNQDTqbeB1wtXAZ74uXXjKaHpNAnzA5mBbJ9DU3ZsAxdU6tTyGLcHPM43iauGsGcKmJmQtTTjL",
  "key36": "9cQjo6qZLJGbJ5464Nnm87AhsQFEyWd3ewkUubfNX2qemQb1H84v7XjJiTouh136Li8qq6sBvh9Yn8FLY36WjuP",
  "key37": "5g7YvUoAJR31kxrLqZxBjLmZnF3yYkWJ4g7ZsEM4wAXk8bgw89BT3nSvgu8Ja6jjVgewgT4gVYWwFr7ovKApN6Dc"
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
