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
    "5S1fWFE3RGk99MjHdaB2Th6qxCgBaSozb6pmK6e7HnRutG9b46DWXMPYhLMabQt6e6RCELYgLBT5QJhvSBB96ttQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QumowotGo7Vs9HXGekufhVE9qN9HJAjHvBXobqXjJiBmRbmdSY1QHSBMRFRuRMqLPduzojZdSaUKfjWe9G7kmPy",
  "key1": "2iBn61rQJVxNzr9VyoM9aSL2Ubyr2Ap1oQF4iZKjQUfQMytHoBn8PQ4qLAjgLF4iMwzsPQr95iTfbqxtkftTto6",
  "key2": "2MrnJX8Hmx7Vk3ZMbumXwdxrifzaEfAcnnkf19qySoZuLY1mzbCVZvEJJcupRdQgnJNu1MwobFbYK3FQbfjGceww",
  "key3": "YBzsPTkoBgR9mudqzUNVcqqLPP3UVStSqK7DKpUmK6VvFz6Vr4qarSjxgbEEtpFModkB1GBaJpDxYmyMYLxam9n",
  "key4": "LF7yLf4DwzGuS6wf9LGNEMom4nk1fHpACgb5F5SXde5EEcSsfi8tQ1BZyVx9SfRoynPswrYzFjHkMiZUE3SWkQ7",
  "key5": "9Fjtcodr9r65A8KaTi2FBcKKdxMc6jqM4fkwX7rhm4gMo5t1cnTQaSCnkRMhjzKicAwiN67NqLpUpxw21cKS3zD",
  "key6": "3oHWGGztHLghxqeFoUL9wnXkXyNsrroPKNqvdvFEipeJmbXWr38wUfytgXJAJXg4Bw1SffoSNVxckBxyjp2qxFT1",
  "key7": "35zo3SA55kU26hwjvBWY84PemjnTD3LiUCEnbpCr1zDB2pwJU2BUhepeJzafjdZWffJ2UTbSuhZahLWFd1TtxSkY",
  "key8": "2UB7fVkZ3V6fJnwffHS5518GKybQ6inPWdfejL5PZC7389wP7G1LE651m3467j8CNrdyr3sVreJ3DiTfUw5Cbj8X",
  "key9": "5MgxjsrGJBkr2yV4qNd2brA4NTmcceZTCAZSrFtnWrGBSbvYnpjKjaeSqkXHKLUQjjWox7GswQ2sX2PEh3WNyN4S",
  "key10": "5HtXqeyLhyBR8Lw47e4rLmxXpoSofSad2Ji2rD5yXnQ6KkefypNfCe5ZkvsfAkxiNw5wyzr6S4Hm2QSKMbxgV7XU",
  "key11": "5XYvpRBzv3uRepYWWcD1WfukLdpNk12RgFiNTFi2dLUuRwAAJRTmtqEEa5jTeVYRy3Qztkzfis33qo9Qksn9vEVn",
  "key12": "3GjUGJz1pFLghy4TLqdvuGnKcwd16rFUmBGvsjxyDvZYzfE6daziYUB7wpH6GLAdw4hW6mgcEY29Sknt1v8ERnRv",
  "key13": "61dSd3rDLPCaXjcRicfkT1F3zdikPjYRgHw4X1bHgxydi84fsDSsCbrof74H5ufiWbarcjyjYQ1XMNvAb7FtsgFj",
  "key14": "4i6mS4QqtJgv7VxDJak7tcS3zp9FmRvPUiafNGSCoww9MpwZEG78Gg521EeHtFPqP1KapyinTqkg1GwTFtmew9p5",
  "key15": "2mitptgiBzPY8mHKhu5PdG5uARQA5UZ1oS59etRdRr2F1Tk3uqebmddrhAW7kQoXwpM4zdBNQEEJxzNyFjMmHm7x",
  "key16": "4smm7rihfqbPvS3dCMWMf28RgNHs49LS3ZUdAQp2djEKjhaW7HbkijgH8fS4tJCM2P445JZdfpFut7uPJoVd9f6T",
  "key17": "3kzitV7R9wrrGeVu6M1fxfdz5gyq3DrzDDkE6VCtGuZwqWcVxTzzcH9jT46hKztiqCBuxeU2dLrLdFMsBgcB9NWc",
  "key18": "3MBZW6rMQ9xupYMmX9Kv1XDK51HYJvHWisqdW9xZGp7sAYjyFjVBidMZW7DmyhwaU9uUfEjMpCGsyopbwM4us2ur",
  "key19": "4tb4Ejtx8pX9r9wSFJbhoJH9RCbsmfaHk8NpdcnWqX4s26QtBeFAgtsByLen2HaW55uvyCVE3wiqEeE8DSpVLn5W",
  "key20": "K8qfmhpgUXg9hzg7DNs3bGhszj21tdQujWuj3berW642tSWnDvxwcDw8o8wjuw6yRPrkFHv9mnKi6koprsYFKj6",
  "key21": "2piZw3Cht178Vi8yzbv6YAtK23wwWoVYHiLDMSx9Nv6BgrsSPJPU2RA1dtWx7LHgQAeR9oEyoZrmiVKvSv3GjB3v",
  "key22": "2b2YmQr4oG2YQLwPqJyb5Txmq1uMNVWhomumoQKe277VCJTtwVhwYTXbW4ctAvX1AwLgATinojssAJBJSqarH7KS",
  "key23": "2Z26w5YTYq5kVLD1VsLnxUXBcmbUns1xuRywp1KupxLktt6Usg7t5P3Hh6MPZhTwzVd4szBAhcUddyMfgmpucnnX",
  "key24": "4P96kV7AEwaHqFNQo56rLWMndtckUzH6KQ74RkzikJqNKsbZVUKsJvVqRmv6obqJedn7DYSiZQWAsaJNDxxKmZkk",
  "key25": "22fRxkK8PYnvgQ7inGuYNpJPEcBpgjR5sN9ADm8JVyASepfbu4RtdVm2N86TfKwvdNS8XKzq4aE89wCMQtpeUcVT",
  "key26": "5te2GB5qwCcrkv1Fia6p28f1ZheBqbSFdqDZbDZD4iwhQe8vx4oKzCoT9CzKEZ4pN2AAf3t5kCpdoyygUb7NsuWP",
  "key27": "xqt1sVTvzeFSTGChDJe7JVVtqzSrNvMM6YbB9ZdbtX5XND1kxkT7j3ouR9wgyayFrvjhqDKiTuvEprxn6HYJLKU",
  "key28": "3a8hfs7SHsnuEE6XYBfXg1yik4Uphtgf3SfsspU4jikuehq2a3N4cYWtJqrEePStxJygpKzkqZCuSWm6S4G6ivBJ",
  "key29": "3T3js1FLukNyndrtJ4E1Yx5koUcjsdmKF1oWYw7zX7kmdUBGuXtz3rG67inTFtfjFyWnA9gS58GuhWBX671ULRCx",
  "key30": "3SvV4h3UA9UpJGvsTdzLhEdcqVgXJwrieunqK1Uw6UrSYa3XGptNKLdvvH4KkaPaePiPBBCXio3iA3K5go3F3Tw5",
  "key31": "242nmHo1DNroyntF14M65uW4KnpqAnztGfNWb8jbSDDLBMvwX4VwahT5MRRddYeaHd1QQfdnKb9z5mfZ2ceZ9beS"
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
