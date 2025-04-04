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
    "2BBWvzGbxYwyaj1PPwwEPVCXcWTtH1RcfxMJhTD7sseX4A9UNuiRz4qBr4VjVgA3Gaa9ReB8AWJTgezj7Gk8niUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UZb9uLozd2yvStfLLWFNAWswwFSg3drbDYfAsXvpSsGkySTLpWPbkHmGf6z9d6195p5jEN8fJHBL1xf66uxRmqu",
  "key1": "zrJ4J55Z9WUg2Ust692KNJpRKaBJVmsCzVF6YKjDn99chE3Pehc5DmYFNaRLy774cGxxNn9hYh1mzx8DfVnus9L",
  "key2": "f1WE6aMFBbN79pSXuBM17KzwURMqK3b1Qix5nMpX8Nqd48zfCJjxuaAMZk2dgw8Tcsbcj4gASfr6QtokkAZkDNW",
  "key3": "2nodjcn9KWZtSd6oGfzaHNf6Md9by8HdiE2i68GaBadNiqSjqgV3JaDL4iTyuYnsNMxohTRjFBpaRgBzQrbwCz9r",
  "key4": "4pzmABtA3eGgEniTeqmkb13sEJrokzooZ2ZenGazUBVA5ZCzBHFPCct9WQvVJqCq8f5yX5vSyS6Utri6LjpWWatr",
  "key5": "5Z5dQ7qeFzq5PufZjJvZy5NfhxPiBZuu7ipwbF1HZ3Be3VmZBJzRGmv6umF7fGQR3ZQg4SuyfMBt3crnHq7mDSgH",
  "key6": "5P7MnBiviFhhgGrzkGGCnBYuCwMk3MpGtXQXN2thruD83qskzqmoc9pqjMyqZJycVr5L1MFdXqumZqHDNEbrHZrF",
  "key7": "5tuFqQPHvqPt6uwukC2U4KNiZ44zEUBKmRLz4QYSqxiPVHBdaifqq9y9Uvv1Efab6XN2CYWK2XMU76d5NpUnpYxi",
  "key8": "24by2uBTnpJz9xz3hEq9eHWLyrNHoR7LeFKtQXVWrjZGKbvp4VZiySru3ionJSxq9nn2oZhXpR7Ys18ojgHV2Zcz",
  "key9": "656SRb22z5k7vAKR48A3tr41eoZEuRgtTyPXa8VGTL5HSUpnWNQimhX1UM2nMPyCjRsuMUxyoKzWxnGRuP3QQcvU",
  "key10": "3YKg4m7L38JkeVcePqJL2QTtwdsqYyFfAZBHHA5RdvEHigrYvsdZDgTYht19E9RNSC5aVNdVjejpKuX9AZburump",
  "key11": "52vcsZFx2mEXNtFWRZqW5xRwSE4db8M2kdqM4efUQbGYmE1SNGbqNuJSj3TiAzg8cdBXjcvngaJqxgmXeeaSV2fn",
  "key12": "4KHFZCnPBuHFbrBTRmJp2g1jun9jKtkvSbBggsg9DJUnaFhE7AuqZUX5LfjfumDacmjD3TWL8x2wkqbtZgwkZveS",
  "key13": "2Es3g22QLCnoSUtbQV23XzbLGaA6Y5TAhwRrhdvMYvNXnsp6z6w5zCtPRrwNjvYAEGkJ73Ww8qZTumQn7TwSuix7",
  "key14": "2xjhsExXpUv5BLoRhzrhozqw7Zm8K79PraJh62fr8aWBokrQvZbA3pZj2zpch3riNtvosc5mxDgebujuFQU7UHU6",
  "key15": "3WWqvaDZvzmrCA7XBBqdsUuGxCUHak5pFJUmZ2SSbsqT9ct83YFxfnPUgVkaZxtgEAuP6R2W8ewQoGmkaZPnxvoN",
  "key16": "5dA7HACbp4EpjVBzrK6aW1MYjHt6FEUEaLUVBsijJdMm2Q4n3A1FoMZ1HX34BNZ5W6NdPUAhGjeS5JXfshEhZah5",
  "key17": "2xBZbbqUSQs2VKjc6jKGEPSTP87e5aW8t2wQ4K9kbrsJgecBfQqjNZZ9cN26uPWmv6ArLm2ZAGVCstvPo8HM3q8N",
  "key18": "5Tkxxfr6uqxJEHtq3jjnmNXN8YCaurm4TMqNpVuXs4dHzfqKrFJYq4yihwgtPpBA3zkoNV1QNnkCZMa6RzS9rTST",
  "key19": "4psNeoWCFm6rFdgDMfeyWrChRMVu41KToALj7qm2ACiXZg6QxVLTsr12YxD2TXK6459LNNPoE1cq1kT63V1reBgF",
  "key20": "3yJYAESJPHL2QA21K4EzrW736Ay6iBLC6mg3mim3y2fB7MqqqhYZ6tSppUYLdyR8otgRiv7vRkDWGS7ECDZghrsY",
  "key21": "4R3UaP3PgpNRAbp82588YQnVqw5FnweL5fvenbBeL1J4Eok7KextdCgMiGHZFdA4VZxVj6xCcmJ5B777is42DMrX",
  "key22": "5Laq8SrehoTepbRxcYXpTuc9gvuUaMqjg54G2Efnaup8Z4M6tjzibqQxnea4bQTjRZJxCWcmwEDA5x47vscupZJo",
  "key23": "4eFzTqYnXgYpDRugGojLMPzwnM5xH31EfDKuaiiMLyp5Xq1asmSVFyhvemjcPoM1QKtPv9pWzYmXiTE5QusBjVh3",
  "key24": "4vq7rDWzRjBsugay5RUooeJHZ6L9zjza6kYF4QEit1aS7o76ka5UG28KHEb4kxDawYQRDjvMfJaMSYv4uM6VcruQ",
  "key25": "63kE12cvdWqLEER7Rkv4FZJVkvk3wmYfdK4yJCsgLgsx1upKhrzWJtCPd5bwBDn8jLR7PSSZuBrQiEXqPSaHsSAx",
  "key26": "Cz4rPjB6Vp1zWDP4f1R4a6nmnVhy2u56e3rXyphW6BLHZnCR9PwCqjRXTWMhX5BAy7CdGn2ac1Vkk2k5JyxsRKG",
  "key27": "4wG2RU54KFWqxosyo4cBqBXL4iuNxL5rHXsTc3HgpHxxeTn8TUAB27sfrXLG2vxgCUjKeWEzf6JR9K8Nt1xGUGNU",
  "key28": "5Vc2HRz1mMQPuvFhmnLzQyMGFuDwX511owSTxuJ9QeMcmEaYimwAHpnBF6VLgqoFBFJ8fw8YgmZ8qP2rm27FhbBX",
  "key29": "2dNN4mgRGa14BbbM6TyGFyJuKa7hnonny3WGRXLZnsTQYgtmDEPb5xwdtDNnw2efAeCbqxyu3ApCtfj2xHAJCosB",
  "key30": "2XCqMLFvtj8L1h9nD2agRVdRc4yJMKSrC752qnjWY5kNgpJwSiCrW5oPRuQCC59phVx7yP3wjsFG5kAPhL8ELLb4"
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
