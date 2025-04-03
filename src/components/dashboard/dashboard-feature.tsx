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
    "y5boES8ZZ1VuWWDhUefmcRPCnU2DR6LQyMpujFsgR7igiVEqF3YdrB9Q4KccdP8aekX6hZPwQeAUjzMycSNmCPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ysb3Gfyh483Pa3fD563UGz1yuBa5s5UDRrigvxiRmKuE4shasY2Ni51GMDQ9sPKiAZ66iaZgj3mxmfg6g4ohUNg",
  "key1": "2UWkgYNQWLJPmLTMxbheoCkEk5puBV5GquTxTpUhQEAF3LcUrAWPYQ6etPTqWWcFpqC6US9ps5yAmcM5KwaemdYG",
  "key2": "3KZPjwVGzttGDEk4MqLwWtT4P52TGnuarLWX5D3jezMJ3MnNincS9QHJGSQZJdgaGdXxWdZAn6PE7CEJ4BU87gRb",
  "key3": "3yBwGuX4QiB3aKm1MUAhvJUakwVTKYjNhm7hbYhdAbm6Aq4U8fcFMkHk1UAameQrG6LP1Wj6WTXoSBbzswgYoegL",
  "key4": "27oKcddNZxxeckLF3odRRuKMrZL4m949A2rE81d1tT4G9UwEFt8eeArtuwXDNDd5wxGzLEXLWmMMcF2R8BotDo3x",
  "key5": "h9MnnmWzZVr8cz9cosNg5CQSjLcHiArnBRfnWekjqHysXDCh8zUWzmXtBpdYvRfoDQnXSBq94W77yZePjs1WiDw",
  "key6": "2DQnbsG7EU87e6dXnvVW1fuZik1NjAZCXCEza7EUgxfMmf6NzwTFHYyBSvhKmk5EBf7VocrYtZyARwqQbp1fhBQc",
  "key7": "3g8dcka3Er7dMjZhHR1Pp6tjYB2rcxVdk8CzLgsuJ1KXyw7HdAU2uPQ1E9ByhLM7LPXXymjVd8QecM3mZpaC53mH",
  "key8": "36QymYvx9yCFKTTtMgWKsVhCeoSewpULw7XGfyjWmvnFpoNkpiDeWafvMpVgT6jZxahvskeXQVkeJVTUDPzV3QBp",
  "key9": "3cURg3nRVURaPZcdGsHv8YZZR3bhLdaCVzcVVMUxb1RjC3bxCK3o52SyetcaqqiCPCcafx3jF15AhzK1D1WnXzbU",
  "key10": "2VGmSLNzereNzq7teGjVo5KhGvyEWD2pgwyRFYnSBFyrPyKEg6dAmXeA72foU5Yyyhvs9Kk8Mq5BSryCRScqrNkk",
  "key11": "43sPwsjDwsz4b6xoD4FLLEJu8em2fKb6E22UDYdPtQAdCNjezh87gY3x6EQ5AYqZctcwiSC5uSmGezG59QceFut5",
  "key12": "3xHbm3vkg4ZsZz8KdqctHiByKAbK1fL5eFRUThuGJfNbyU25Zt1uc5bmw69owkYGFRUcpuGXNKLmAu2ytpsbavE",
  "key13": "4xxLDTZqjYomypWrgqz4HzpPpwLn739F46imrVXv11TxTmHJvTyhFjaNAP1JCZ1FKoaw3XfHJU6Bokpnj9WKJfm",
  "key14": "4XrkQ9YtCfsNZFcsHaNS51xszSAJwiZD2T1EeFLi9UgRRjJ9QASJDv3krDMxfgTSy7E5s7mdf73xasAfKA2kxNqh",
  "key15": "2XC7BjGGCVG1aMJgWd2BcF1UKb6rZk7C4hBm3uNYi78vFgJ1D6SJ6iH9QT3JDCtEu3KTFAyRa8ex71iwuF4MYK1X",
  "key16": "4Td8QF2wAUJLYHJFc8MFtSQJ6bgsQJRxtHeYHTui4BPZ5hbsaZ8QEaYntha3qHZs7R1vicy84hZ753URcm7PYN9p",
  "key17": "w5CKWsZYJu9uXy9UKPz5fHsd2DsTh1NtoStociCspAWzhLFGVLcpWMBHMZhTaiuqtYNFw652L5KYFU2szAy9TQo",
  "key18": "5ttuuwGicTRDVF24x3uKrMjL4yWeBVxX3y7KB9PVdwa1JUtbCSU37HbMX4NeetSJXTp6qeQiDDjwNaRuizvBwNJy",
  "key19": "4eJuaTzh6d8DbnLhvJaWkqVqhF3X68LrVUyrz5y1ND8syptjQ8gdUpkavbN7M8m9Mv6D3iHDW5PYsHT6N4LpqSNw",
  "key20": "E7H4RPqVN68Gnpzq6u3EGNs6zYLvVRxXyVixGA5Kai2pszTQJ6XsVjaXCaaiiXTvsLLcN41gpYm2HVKDdRGPjCc",
  "key21": "34nE92BT7W5C1XWW6oGyVaLDCvcS6GcibRS2d25fDrf7gXQF3oCoMCZfmCHLGomiHaTVHVU8B4R1tEsmHp1jRZQg",
  "key22": "4USWUMeqzkWJJKLdS5c4iRtXQ6ZcBkG1RhZLfYqE6G6p8eFDBjnZnG5YZztN7T7X6yJyaBH6tbCKZCgwzJVPDAFD",
  "key23": "5yLnxCo6DPXt8tTCKsnhHiXDMnqsiXgGv7tSzv93dTxnUL4Vv7ggATLDXPgYQ5QXhTadhTtzsSVYMNqzoiPzTfzE",
  "key24": "3R2JYCh4uUovWq2SC6MUwdp5gt9q9CVVSBgugATdwthq9AxEm952hyWgb2PJWVHGRqMNgyeiiWz5NXqKpy8Qteej",
  "key25": "4xFZYpSd6EMW7quLhQLK86NPccVQESAXu1hXnee4vvrVkC2P6B77uJHqgBuDPdtZTpD3UemkLvqstsWaWFhSJ7xn",
  "key26": "2Bw3ZM7mJierZdt5i3R41DrRGETE9e2cJTRnHwo4Fnia86Swxmnctp12ScVMkVrEQF5o9QVnK1sSyA8YrgpV9272",
  "key27": "2kAiM4e3vdqaFRmF7C4FEynY1KcQr78qFccg84oq2pp9CCXD4G5mU3bDdDdsWSDx2AA2ARXFa16H2t8N8H8zy4eN"
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
