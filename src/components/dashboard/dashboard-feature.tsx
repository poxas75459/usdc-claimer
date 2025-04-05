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
    "5odjeTDbXxrjvgQuMTwDLckpw6fYSvRt9i4DGEwyma3rbzjgZdeJzYiUNMimxwNKHtAaADMhb6jFMdaLXAcYHGD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1jLLnQo5c28WghPsahoNFyFxeNd5dQ3q8WT2WQMn2Ery2yYfc59aAYbueMAC1yhNqCS46oxj4rKCD9VEB6etnEM",
  "key1": "299aAJJwjy2fd8AEE9MrED2HnMamHW7eTU7HD6bKhAKJHXK5LQN4mYVnHy1Jknmgg44ivyjP5F3oYERB2ix6zvpL",
  "key2": "3FjAXV8Z6qy2rLAYmYy6upvzTjqMU7T8zUjHvXNVmXumEp39KXnaw3tzX7ZYGdUpxDrPthpiYTuoSJkdy6ZjzYRx",
  "key3": "3mdkn9Ypa6CTxmXKveDjKspxU4TBsmBUdqmEKNiHGQJcRFaU6zM6EQ7o4DNpsA28DDSRbswkYdnDUze3t3rvuYUk",
  "key4": "kNFzuuTsUNNKdFPxA3kggZnRMy9Mjrjxb4EKeiprbhDhjBh2wFoT8GQ7QH5ZG3T8QF1Eg6DxBYiDRcgw7qSgHWr",
  "key5": "5pXC2X67V5Lksm9t6ZcL7xAv4wUSWNUATJVXr3H4gGfpUqcDgoGmKU5n6bSApmuuKvmnsSMTnvnV7HRhfyv2666",
  "key6": "hZWZTwxitReSo3yYnTcvxF3kcFucqZ7djFDd9U4ZCWuuBUgtModJvTQAYe8c69nzmRrrku5yAxXy8B6qLXtuz7F",
  "key7": "2bRMNSA9WX9E8BLAUh1UTXbK7B6VdQn9HB8aaY31v9hy6NhpVQGvyhNUDn2cm3ZtUdNwtzqJxY2Mxi9UYWSc1RPy",
  "key8": "34kGcneHthM11aQyRowZM5zLgTJxvUhRizygA1fhxJ8rXuhFXaYiu7938TPafayA5hZ9PbmRWX3znd4xiQ4N3V9N",
  "key9": "3dX7p17rm9vFYVGfNPSUaDhArawcBDzXAMcyKxiUR9QEPQgsXEeez9jYYJ1Q3n4xFxVAXHqjLmpfgXR968Hamo8q",
  "key10": "5wMhM6RFv9BUoyVLkmgFT5mDaeX8iMBCjdnBj8Cvptzd7nn3qdFaGcDys7ep1L11YVHjs6oses6CExhaGpRhYDMd",
  "key11": "4RsfrD39jVnjEuWGevqo9qWwdmerDYqV8D4ujX6uerop1J6wzZKu99TcgHhA45Ckowrc69rcrhs1J8DxBPFgWJY5",
  "key12": "3U9ikva3ekcR8UPneyHo6nymdeKf3gvgp4pzusz8NVsm5H59S1Dsgy8hf1gJAofHx8Jcha2yDdq1h2zkpU6jnGgE",
  "key13": "3BKWyXmhW3GHghAuTJLLrrP2CWUAbCbBtqdPYDDH9QevoHmYNFr9qhbjbf5tPjDfk6BTtanj4mEoPirscanSXFef",
  "key14": "LP1C7EtxL1YFy5weq1TjpkbzsuUB78NaGeLiHNgWdT3YbTAQbsg6pf55e32N584d23fhMtTSyx3Tgf8vMYeENET",
  "key15": "31eNLPQCPx4VPgBCuBXLybTbDKQ4Sipm3XtBVTVZZ4wYYyRwUKjVL2RU5bnjY5aewUC5LyQeLXj7bx61wqHXegSv",
  "key16": "5JsqxWC5ZFoVDVNp1JjcaEeqfyysE6AqwhZUGS9YaDQfVht342eBemneoFa9hR7C5K3t5XG23ktpfYop115qPm5g",
  "key17": "3dq94xV2nj1HJXUvKnywtVuTU6SDan7kXatmoKaXPj7wCpiCRzPBzP6YAxbpPa6D6fVzRJQRGsvfTd3RY7gcf8Yn",
  "key18": "2J4KmG7kAwHoGsNFotxXEPuGeC7Wp41joqqhGYKQmiZw4VKYVmP13TfTFEwB4Eih7EKaQcE7QdRkX1Qodi8ncvbJ",
  "key19": "32buLsY3VCnWYRq45cWaAjkHQKmRQa6mtobEbQL3FMZSbSYqubym5YUwmXFmWiva5KybUi9dsUSYkQV58djFDveR",
  "key20": "5tdUKjfNxFuMxXexSgQ2kqkoq4rczC8VydtAr3JB5q4Qsbw3n11Hggpd85hdxE5J1z32WfqZKrYUoBJ8LX8E1Xzj",
  "key21": "4jj16VkxFRKmvJbpstYeG1py84Ne96x35QwJAV9afwvqhTQvpDEpgLEHxavmkZMnakaqEAWZ2cadad8Z6JEnkhfo",
  "key22": "2FAY3iM32wDPfyW5tSZrbMWoAQ165JvmDq8mFpxmt5nz1MgSPGuBDRhvR3rLuVto7D5kx79gQMu5SHWTJph84GQm",
  "key23": "f25ZbWibb3bp3GMN7PAUJCLohwSjjTwvb19vg1EhiWyEB7Ej1YEtsgCq7mHLcsiZsvB7Xd8V5BxnH2WLb3WTQKZ",
  "key24": "43YhEcFwoChCzU1ahHqWVZQjV7aEUmMJLfNXnHaz6boqd8bbSHJzz9icwkdqhqnUHqsLzTuEU9EjdJcJ4X6QXSas",
  "key25": "q1XfPRYDd5TFAX6o1HtTP2DzHoPgkjnPG77Lw7mkMYznHT8Gd8dZfGfFwAJXwmwjv9G5S6CsfGU5GHWYnq8rXou"
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
