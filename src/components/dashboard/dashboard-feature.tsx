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
    "4mZQRjToPwtmvpqiQzEgNgADhC4RypPadmtg2E3WYkY9mrndx4Cjg9v1EyC28YwvVNGNrtnULhCikPVhCyMBznzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mw4GsUR1p81WKSnDigXoaamx1NXpXRzw5MkKVQLBYGwofNEnCoAc9Rs5eDru6NmvRd2pxYNMNemrxeSahCyr516",
  "key1": "4Dxxb3ir9Jr6nfGJfvrV4gBSU1aJuDCRYvRrFbCyXwfpbWAiaG33x3zBDTe1sduesUyrLEb8d2XucqQjboz57eZU",
  "key2": "4ghPoeoqxdUxzCWWWwyN1HNzLNQyL52Ddx42ucNGzagdcNc4mAMvV5e5g3AeaZmBWqd2hzaRoQwgCtf2Gmzqoh6P",
  "key3": "2cyZGjVhazdrRoHwbCxWwSQrTVE5h1Enz39QecDqzvChDx8j16rcTD9PVcLycm5yqtZjzH3iRhJ8UnW3xMfvpfVD",
  "key4": "4MkSGYqBqLixJqWEhPphVYtYJMqD7pRbBSoTofLbmQeT5Qwtg2yVeKkYMSL521zbjhL6grrwy8FbKqtpXF5JKHTJ",
  "key5": "5JNQvSvCCRPcAoXjPKhZp73JWijDzDj9QQcB9U31YQrEBqJkKvn8cb8a772UfTJ7sC9afzKFczgVdqcuFadazdNe",
  "key6": "5kVcBSKDLdmwbtVSFwrRtfQryU11s8TWkkt4S254PUp2XHeYBfREJouSNszqjFJSE38Pc2F7fKCYmENokEQrFPrh",
  "key7": "3bsvRYqoTbh2y9vtFiZpqtdpBKx4eSCbmPHwJcHKMFmorhtyzWAP4QeNvBNz5ZGeVLW8nE3NBp6LAkRrJ2xjHTA5",
  "key8": "RHpQraq4QciduSZzUDWH17QdYCeKw6HnKXEc7CnYLeo4EPvW9QhkCysEesNCfy12vyDdaX94bwFNVe3PAvm96A4",
  "key9": "36KNtNPnUap5oxzhW53hNdbQf1oc7uq3V1uHHhUb3STijfMZjNSjYexQtR48cVniFyPfvL1csgM26vjUpwdS4qWD",
  "key10": "4ivGyrYJQPrfvUbZuA5JRnKK3Edpsjj6RBZBSZw1gFz4ZNw2gcVLA4upzkMmxrpK5FxxqpZ4k7RqjjqxCGN9f5mr",
  "key11": "4GQcwDue6QHmosCbhj7jqyfMh2m2EA26SdBdwsSte5PZkFryBGXZ4SsPMBCRDdgj8bx4UQYxoK2eK2Wr1cmfXJqX",
  "key12": "4hMeE6fPzBokHy45kjh8SoeiWBcHHpJgvpUN931DTPEZxAPNZ3Lw7xkLuTowXfDoMXwWFfeYNp58PVYzy6tXWpt6",
  "key13": "4R38kc4VRuGpw8ZUkqy23u83rCG4y7m9s83buYW5TkosFwgtGfz1mgDeVBGmUGVhn6XWk1Pjb3V7g2zybmtU4v5N",
  "key14": "2H1pvFkR5rVHoM8NcSWmEBzsNrcY9kWEHb9iizkmJpTeod4YmYE1ce3Q5GFW1FDE4AX7r26vYu7T9ZJxjSS9pTMg",
  "key15": "5wVceSsjLmNoveHXRxkfyfFu5stJ6E8zA1LVsykrYNx87hmrwnWt1BKrYQTeZG9jzngvJpKMe5raR24xYP48u77n",
  "key16": "47iYzgPmqm6mRv6m4bTSAACkmJAXMTXNaUoyPWVrtsgZevCEghqC55o7QyhdB2km4TYaQMCEAhwpj6Yz5dVeqTnn",
  "key17": "3xAyA58Ybcvi5nWhzNxh9AL8aVHsFVkTpQVpr3jUWtBUpML3GpuNu6oTAwWgXpfX3PdsfptWpoPE7R49sMmC8xEk",
  "key18": "3LBQs1LLXuPydyvtHLQwjotG4LBn8Xyqrpbr3qiJWGJtS4LXfwDx1h6RstrVWtYhGzXk3WFMbmA7pDDHmaJM3xrr",
  "key19": "4ZTQjRN7w8sKwg5maY2ojxZbeK93zep3G6UF4SSoKW48PqHQvrAkJ9goK5aY9xXaCzFq8RnPsuHkRDFErafMkqAT",
  "key20": "674RMZCefMYJ85SxuuSqouo22G7y8EarAeCWHibU1uS297CNPGFn3bueB58M848JiE2Pg9U2UPtQdhiatRWVam6n",
  "key21": "5zxFu6vEbDBEjrywn4RdoMfuySbf9ErapTTM3Udvhacf7L3HuVGY7vFymwAaqpFSxJbWNJ2p3v12T6fwV6Tk7xyk",
  "key22": "TrYWr9BwQ4YVyRTER96a75zVc8nohS8Rphr3XxxHRAadZmqjGeCZZK7YjcoywJ6UVjhw4yBQraWjftNjnQ8tbj4",
  "key23": "3SSn4GdDicaYSZzB1FtQ7a2uudczyTogVVaPSB3fPkdCHgvJSsyAK9mcLW8YaDCCZBX1eekXbbWNhZM8qJafze9g",
  "key24": "5fLuCVswtzqP8robg9XHGzRXwAwEkW6Qk4dqLzMx1urEKaPW2uaByn6FQWfMXFrTnQLHf9dzWTsYxa1ufCBPpXGr",
  "key25": "5ts67es95acPX1HmaR3ix6FPFT3QoPg7Taof9eHqJtAD9hjKDCNtSk1zefZKib7oEpbfjKJL2yEhdkzjywxFRUns",
  "key26": "4pUa984WYMzEF3p3eyffYwiYimi5xdP9ssonTApQ41BzkRtKmpCxvPRWTyV7Q7RidWwy5mY2tjy7qNLT3ozLNvQo",
  "key27": "iD3VTkPmwpV5WFLXG2MPPPjr4NVtUBNyX5BkfjMognyLyas1X9Qs1TRruhc6F5ZX19q1wfeqiC9ivHicWsyMCoH",
  "key28": "144997Yex69hq8oUjGfuqjMK4bt3rEurccKV2Rj4pWz89PmQFWAHGbvSanJDe5DNeCvmUZ27AqwkkmYqTCR14zd",
  "key29": "2yF1e16Ltn5QZvQrJW2ZB3nHmHueDkVF5S6KfngVdgFiUSF2tJb93BFAXCpZ6mNBLNFAGx92jfJemoB3mfkN48wM"
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
