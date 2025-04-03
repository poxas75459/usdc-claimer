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
    "3sKv9KMvYyvgSnWKPEp8k7v2W9NveDJZSsWZNSYrho4SoAB5TQSj7XEGHT5JsXnwWugnNL1xKjsRZs5KgX8UWpZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6RrpZfQd6Kj7txicxTLnqEBQ3sfXqWbySeD1VSoPB9YtW2QuUVJ8vavqvEvQwU1SqpX1C8nRN2epFg6sP81d2mp",
  "key1": "56BMPwzHvdjY2WMhFaoH8zaRTgrUPFWxP1t5soFzPoaLS8pBAkoi5J5HQGZbVaaV1dKU4HG8xwk8kLMm6b4WjLPU",
  "key2": "4NUe6qeTx78k97bTncps7Ffr5hm5R6Sn1Jq5jjvuzgVsuCkEWKxGN1RYKBv5Cemrxq7yZeB5vmE7C8AfeR71P9WT",
  "key3": "32nVFWRGiMVYRjJ1GdmS3eXv3TnfHGVdeVQoXZpzXA4b4iLdMv89pMBrjmzvg7zHVJ6tfTjr1aiVwUyDUbHktDYP",
  "key4": "3zSG6AAQVMGakyry3YERBYcfhBRtja4A8vojp12472iCbTU7h1Cq9k5m97jJUi8C6hRhEHSJ2vEYCoYNbkaWuSw6",
  "key5": "2HoExxsNJ7LGTVVFF6P3CVE9gPxcXizrgh9nC7rchBxY1GELAbtgeH78eMLf4Pc5JJWth3DTxwJ2MndBT6cwQcwd",
  "key6": "3fihoXszUaYF6qPKvATPtdQWrDb3BHEPwNLF4MaAuB4CHbLFVsHaPiLy8xzXQo9UQuxsbmuRgJw4Nz1mMgvaJMgz",
  "key7": "hLDEdE5SafB6HxaC7dKobrrL2vsZioJ6JT9wy3xpnSHFJvFyoALmRi6HjCWbePpsccC54QJ7PnzMcMmZBXkQD14",
  "key8": "29jf2BmaC7dUfUrPZPsEZJR5koLP13ivfvF3TVQDPpmXyGfACjAG7RTo1ay2vujWGwpEKz4jdz7mniRQWSQzSE2x",
  "key9": "4PkrRTkGY5cqp4uzSzsf3BAMzy1T7sNvDziB62LDSePQBavefhrfMAywYNB2oBjZ5QBwGfrTMdEsqEHyhMGG89rB",
  "key10": "287DY5CfVRw3GvD8iNZkX27LiWGdeunmWhcNkZztRdpwY1NP9Gkm9Zc7szvDzXyJNxmLzBiajXunkK3pinmC7rKi",
  "key11": "exdu9yRgtVQE55TLJvCX2yJQ7EDnCy8qLRQ3XawMZveKFh2Wcvnxuj8U98WQQNKzpTbrnE5h2A7pCRcpfh9Q189",
  "key12": "DbyqCaS1sqy1AwQEgJFqonyborrdvGrRPbdd3kFa7FmiSXDNAA3E8WXfVfsPTbwbzVJfkggQw7UbrFVT5icncPt",
  "key13": "5YpquWgjnXawJyd5iR2e5bDijaXH7Z72VN436NiKorebzNmT5mJoiSs81Tjf5eoJRCbCLxWQoSsbGuQihqiarDgQ",
  "key14": "2wErZ9oPLp9HREwh1EhGuiAvQQoPLuTCWLnV4XbwwKmcu554CJ8WGwqJXKFnCQWvvUHCyBsMv9EC2zbHXeBudcnU",
  "key15": "5MUw4c9H24StCuTBzoi7EonRxUyvxtc95D2RrLnTF3tCGDdZKwBtNYPaWBNybZQp5xsaQNHfgH9hpHDvztkMrHGi",
  "key16": "21T9JNzexpMVgC4Vzu9VV7QYDq7Dt424JGvn3KbXchmkxRQqezCiqQxGsbsEpvVXBFYZhhvDzFhuTz2ZvknxoeYT",
  "key17": "2sRy6kXGMLGkzQpgdNZ6ap4tsvWLX1ZwLXpunEB7vfRubfr7dDgwC99PqSjsVWdtFbsjeYvjKsKGmuUNHZm7Jk7J",
  "key18": "2kg5cfyWDmknTDYLKr6ix2Gr3jzKEqW1h1HPCJGnHfCY2Fb86tpf4iwTJ3RfuEFuehcHxM9c4SgLehXCXu5urAF8",
  "key19": "PE1f3Js4WQ4Gsqw1JtiDkNJcUf5JFpJrsr8ayE4TJThUR3tdFfgdcKznEANiD4f2QbFJhKiqKRETmvfYgU6iPGv",
  "key20": "3mLnfx1KVY1QR6AgFCPRXJhL3wauoEheQHvp97xGwtB1pDxzu8ZwtGRnNVNvo4C7ocy11FiBqQuEALZeCjfLq8qB",
  "key21": "33ZnM4JJDWryVUUpu2kzUoU6Vkp4fdWLMVQNxYQv4PJu2EdWT7eNXRj5QzB5UDiR1CibSvFhpcWJb7U2po4Av4pK",
  "key22": "51uV5ZZucSqbwVVqAjN39UYoLDdNMy6jY9gePNrxUx7jnnQRke5mt8FhKhuZAGTLjxiyVc61hgedrHvbUdUjtPxF",
  "key23": "4wToaFgHrrBxpXnZe3qvgwNGseRw6Ef7wVZV2AFddtmJu3QD9bcVzcRbgvYbu7sqmnSdLirXNnnNVLfyN7C4tVLp",
  "key24": "439qpkwdY65VjuaExa9i7ye1du49ZmY6s4vqti7YzGckzdaa81yABBCJHgKdq98nQn9Sk1XUr3fEHbFEVNAvKMJj",
  "key25": "22HfEGttB9Q75MiCQXD5QjNpa3QrnSpe6Rxje9XcSHwv1bdSVLD7dRHSjsmoLiQHtdZof6gReeLc5hcghjn4H4R6",
  "key26": "57Z8BAz1oxNwn97xYqhVeC3pPp8CSwb3Rco7gyDPG71Z2rszXrARfrXvbm35AcXeKk7zqApd5r2bSr9Zan6Lko1j",
  "key27": "3HBTaNw8H3A92A8vjej2LWVkvc8P63SQCJ6bGsA8BFrMM5CFw47QgxhrJobeSCz8JDSsSjPCEqvVX5ERFKaNerd2"
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
