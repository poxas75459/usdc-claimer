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
    "4FYRwm5pjM7CvS3VddGcPeC34CNBv8aJt2692ar6te2wgtuWGAnTVYAKyBmT4mxZkPokznV2QxjN9BTz7E8AVrx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HV1TRRkdT9aTDZNj59LrGnqRtkSRhkfPV1UA6YU2u7R76r8UhL2sZ7jn99yFeBPhDiBUCjFAxEDE5dQkaoz5Chc",
  "key1": "7wSmdrkMSBmgXc2Vbtha9D7h8sV4ZhMWhpadCw9e9TkZTN6K6hYhUNubMrWoafGc8wfuWHRDCq9vLXvDfFBnDei",
  "key2": "5JYbm6V59WUmUQZtipcyGdg6pgLi2ch88GW9GHPSbBUNgbXfYGqtoEaPPb9J2M1VDMbvh5kReFm7tzzqjnS6TgGL",
  "key3": "4N6A7jC4FaG7nmjvF75MYHmVzg7fNAvf9tnLZibgJmMbahgvpXy5aoV3HUx48YVXhEzGgdFxb2bX8zKd5eZLx72u",
  "key4": "3hLZRnvXKbkPqRdY18RNFBab9yCBk8zd9WJzvAnmxXzsU8c4UssXaQZyXwoAjCKpuWGwYhfMnPFdkWwvZao39yER",
  "key5": "5XWzGPFMcVTaRAq79MMSSC3ry4BjSLX4rxjqErrtN8mRtg38b7ALJrnzAcVS6JvfJA5H7jtpcfhhA9Cnn52KB58t",
  "key6": "3n1U3A61VZ1VDGxiShqxVaHxyMjdHH441JfME2BtGBAx3TKtDZpcRVbTNFthuJvVZ4sHvkDgdk2vS2UpzFMFmU5u",
  "key7": "4gy4fSRTB7qPaRFRZob54FW3BahpVy7DZ7Gbjtycbewtzr8Z7bt5Pw8MymyAuEpCb2eST3KTfYwyo1QtWZ2wJEGU",
  "key8": "3nZKGf5pibWp5Gu8F6g6rRSArdHKwRi4a1pYq62TxwtdkRvuwaGBvNsHmjDCDHY6VrSoyTN3FHyBTsJ2u4iydJaa",
  "key9": "5v5fyww12zyyCBqy5432BjDS7ewn2J9mnRmkdVv3guCa1ScPahfpCVJuSP2jfvh32oJunRgJvjEHkkwZFyqYHhWf",
  "key10": "2kMQvHTJRCoDfu2BiLhANmb5VX1z8uE9cXP5FM7n7K4nLioVpHaqeFQXn28HdmiQHUtUqmp6sTwZfiVtVuK6Naez",
  "key11": "4rPMg8TVfE4LFWAGXA8E5fm6TF2zydZAxBNc7Ns1wMhgenUg8vuzsQBLfhrMN7vv8bM9GqZ3kRJD5uqT6oufhXsR",
  "key12": "2DiWZNfvgxePMF1FNsFrdWLq56XksRT5qDdRqeVeVQSvLrmucvifkJZtxpY4rXXy5XRA13A5BXBaSh5RfiL5yPfC",
  "key13": "3HNQqMHm5nEhftME747AxYEjQXpWkhyjuW3ERcgNeimBieAax3hsBStHZQbtLeUrXFQBzBvew2HDqd46u3ZdiJuD",
  "key14": "T2VxkM4KipkNyg2Bt2UNTyZqwmPDSwywisWjXrV2siVK9PLiMbNqACMLcP9FAth3i37eMFB5EutnjpDKaNykrfd",
  "key15": "38rQaU3uSaBFyjhEU7SA39CktdiNmgCL14fP1NjdfQQ99ikbCB3iXM7kSHwtdDu8TtjjZWx1VjdYMCG7TEniUbi3",
  "key16": "4Y84bCACSYskw6FdhU92rEF5jY2BkcJxFe3SVsJBe8Ytb2cijssxTsYkeDRE6JNU8f4FxMzzHuDm4AMe1pR4ko7U",
  "key17": "3RwB6DWEuSSuYSDAAJ9QcAUfp2yoRP4s4xQQ5CpioPEnupHJf2ZZCXomWRE9FZYc4GvFaCEKzz54zbmQPJj9NBZx",
  "key18": "49cWDNuHPRmYs4NohVb8SoYH2xknT1X9SZ4jWVFkb9pYs1gYBKsvWE268Xqkzd8B5WTwu4mN8NfZWANaWEhHDq6z",
  "key19": "3aYya3gwWYPjPDFpAcbP73pTW8QAWP1R45FfKwLCXCBrU5o5NqjPz3uByhQoKVyPyGG2d9otscmL41mFzrCr1UHV",
  "key20": "3JPhTCxkM7gZKL8oi5jA2wUWGdo7KQGoJ3WsLmUxzc5EXr5XUkC3E9PyDp68xaiSfYgf3sHE38jCBEecbyTLuoC9",
  "key21": "3LMqx1YuFfR5cKdQHCeqLXkyNRAHmU915Zw69Kxigq4PVyp1dsEkAibf8Ns7UorhT76388ZXwBeNdEj68ipsENqw",
  "key22": "u5wmW1zAsB3km2rJeTjSjchHTd6eKxkyqWDtbdA54NXaTzwPV4rYmRpoHFy58RyxDUeXFc6LLwSprtM8x79qGy3",
  "key23": "qf8P1JGN8HdQXB18pLMM5UGLW3Ma5n98KDx6rmB1aZ7cJqs3vVY7A67YH66w7qfzAagngXtLv8U6y95JfDGVEAS",
  "key24": "hRizNKp7FDJMKZwknW1bz5vhhCUQcQsDuhtLeyCV1AfpMe7fgt7eYQcouNGNvDmKZsP3bX7Q6sgwyhPHKLS17VL",
  "key25": "3ZhFXwKGVdEQU9f57CkpMT6ZE7gqdj3GpQdU9zmjuCXiLeXkBD2spZrepTAfWpBmFyPZr7Cz9VtQ6i6PwGbhLXkF",
  "key26": "2W4NiyuVXiCCo9BgZn5fD1qPA1cZrt9aHg6kYXmjyhpLnAyUfutmEj93t1cTZK9xCPXTXgAHmn7a8Ay82nhpfvb2",
  "key27": "5azWG2QaWBkpqtuXadBju5HrQycxPQSvGTj7KmhR6tcREwKFJHRx1mB6YpvaA2b9fPFjc84UMNo5CX6QQxWrJGNj"
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
