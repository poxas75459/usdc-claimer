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
    "sEG7PdK6x8q1wHgcnxNMLPPZH3n1oMVLjARwE843dXvzVLonb5RuXYS7k7UNhFS8TNY1gXBvuUoFs4i2JjEfTwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NTVCcL643EBot4rJUezfD1HZrT8CxEcDow5tTkJjqZjJxgoCiu6v1gfhQBMKbWciyqJ6JPav9U5L523gNNG7KqR",
  "key1": "4bwCnv7X1KDYQ9XzWqBUQxZ61ppgLig1LM45b8S3Ew5MFiiFafAcwfy1BHrVajwpGWcdj54964vFzvZYWczAnus2",
  "key2": "3N5pVHKCXwFWRezsabcPHsoYLvNtEYT7vNFqfYtQZCNg6NjnbtayR181Tx3XkaMQVN2Djs7rxTinfMopsUnvK3VQ",
  "key3": "2H1UPwyZz84PRRXtGTCt4WSQFhpdBZgbGVj57LM86uVBXNxbKeqRB4pkxamv3ktFbwoMazaDpyPfYyAcNW9xZvLi",
  "key4": "2Zci8y2dyAJGMFtFGrJLzggF1o3g7YEGKUpH8aWSy1nf2pGcjfL9eF1K9CuXQY6yGaKuBpNBbh93Rm61kWHjjSGv",
  "key5": "577fMiX3tr1ZZcU2CeCdpVQGkDebYVNNtEmc6fQyYjTNjn6unmVAsE6wKSGZY1wfuS9MnooUtHkSqSZ3od7eCvmQ",
  "key6": "2K7hM6paGH7iQpuaeT2NaiMFu2GRtaXxSFsCfugQAed4t1k4P4C7ov2Y28CkjqbUM1Kzc8kLNKVZ6gwAcdS2m596",
  "key7": "qyr9hCsxf8Y8UBzZbmdrBMi7i8XNQjjfJLoUdJRRWgybJUVLjrdTY4gRiqaxjZJP1mSzKmBsujD39aywaXi1HBT",
  "key8": "56tpeHnAFhDLsrEtAUbMP63k6JrGJbMi382evQj6minPTD6BhcFp53Fmn6NZBfk4QhZA46v16YNdRJz51SYzwzh4",
  "key9": "3zfRPLyqCJWzNyfsJhFx2bxFbosdKRybLd3TyXFvuomiwiX4Z4gXLnxQ9REjohpPjcVp6TJ63vJfRVxq7YkRYaDj",
  "key10": "57o67AMmB1PHwGuFZr32NrXVmowUHUAUAYa5YNfKajxnW5ptCeucRNEnkaRcqs9dTzQLJy2xkjAhywKmZkzjzGL2",
  "key11": "2yRf61aAVAvu61GN4FDiDZ8qKmCPFRZ34qbb2hHxkPyxr9vgF1TiCWQZyBdtxiaspKZCHH1zWdbSAEcqixEQYxF3",
  "key12": "aimND7d1UbubAM6NaTe9pQ49fxC6c4mbG2wed4PJnqt79bM1Zw9Nzyg3EFCyoXxx9LggHH65KxbFYzEJBZzwnPL",
  "key13": "56UfHEKByru4tm3KtsLwybxD3CYogYtqc4vssnZvRT7gipHJU4ZYooPpzPdJGGJcLE5ot1wETiYk9SCMMu4G4H5m",
  "key14": "3DBrrLDmSkELbtEbDHBayfPpgcQUJKHfm3DTzVXsZ1YQBfCLSMQ5f1JVci4bba1z4VawaR1Rwu5CgT27hj74DXSK",
  "key15": "4Z24ycAcdtzvoeD5BjjDCALKqsju9LuMPFbTYs4fktFHJPfmQ1ytFRQLMLjrV2dYNWkutpvDjYZasYjyGiHzTQeY",
  "key16": "66mh22wHYvJB9RYnqndwNr1TK6EHZW16AKgBAGrd3pXyJkcBq5ThSr5vGw3SoGJbqM1u4njWGQg6P2Lb64xBfvE",
  "key17": "2jCD85sNW7ThnTustiqqLXZTPeGLoTH8xW4d88Q1ZFXy6esMccqbPhpT4xuT3bo32dZVVXjerqsPfAtKCfJG7pET",
  "key18": "5pxZZpq7bHSVco79m5dNNaPvEZLvR2iL6WQtzXfJcz5R6ft42bdKXJz9XWEHqjMaVqR8dn8bH1iqoVqMQ1KSJPWG",
  "key19": "2RhUjYEeNrNiCRUZ7me3WdQiPSCNz6HnAxEfWj3M36Yv7M8FoKwzNPivFAvvi5w6FMtaWivALkvsj7mPqDkMq9iB",
  "key20": "3d58L7WsYS9iD3J9pHvnYvz5Vjqn4ySWEmQrzV4FoV5oEwcT5uVRomDCJRzfwx14JBVFku1RFdCF16kFmzPK3wBA",
  "key21": "5voZyhdbXVxkQuZXqZva9NEf6iUd8UFARVxbrJhtw1nQkpETnzC5LTyyZiQiBW16MRGRLgWis8QtzSSkJVpiuXXd",
  "key22": "5ZRgSnaZsfdW7W3Z6pqaMrAVYmw3xjEbxsJmjEkGdiQGoDB2cnugLVaUqSnjPefFwuREWGUqc6TgjRkcGm91Nv7c",
  "key23": "FtKWAapqLCxuTkUHKsSvvFTiUNrLC38dvFVvMbAEs5XGo3coJhMja9GnBf8nEf7knfeWYrWADWRp7U3TVqknXFB",
  "key24": "4gtm5F8rBgC5sRMYLDCEm9WoE7qAJZcxtwYFFti2kGKq7m5MPMwztD99qGZRcrucJBm8wxFbSoFFQKx8tkh4KZ7",
  "key25": "4Ctqy5aK51CqoacaMwgF3vG8mxvFkKxoXFJq2QyEiMrL4NQdfk58iJhfWnX4Ezes1pW78SjyiaqYQNQD5JjU6mxn",
  "key26": "3SzgkxsSGaiuua1ZiAPo5rCYkmQhCCXgCJKFuYyRzVrxHh9BoJ2yjqMXD1KiC1c9nt62Nizio4qNGWZM2nTLDjbm",
  "key27": "iuinpkK2sH5bxQPdL5i79pDFYoXy95h6cXP4KuQEh9773monffmchtBXADTLy8gw1gvk8tk1S2QhgbN8gqMmrvv",
  "key28": "3vZkG9tSLLSmSyxMUGup4fkL2AbcoL75Vdv4MiYRd8j4MMutCXMtyqrR7dDHexwN9nxdDpGQkbqqpricZiqqLy8s",
  "key29": "4B59t4onLYAnkSTEgxSP77SUJDPywoGAFgnXwS5CoBgA6xMPQa5TSYq2sqi4ujM6weJBWuxAeBCPxQ3tSFWYGdhv",
  "key30": "hxzQ67dKdncNQjeQHWGrw1iwbo5wTm8zPxFq1xkF5hn6g5K5otGLhrD7DZXmZkMGPqSyCpb9cB4UWxmDuWcggbF",
  "key31": "5STuJ82nfCD6kCThQGnwEXec3got7njuDsFVLghotv1Q7CZGBSKgjyRJ81qBfx6oXE7feqJTgRbfMsQwRjacFzEc",
  "key32": "4XjLqfZVxEQ1556pDonpFZckBea1hsBN5UtoGsoa96C7wmtSegmU5uawhVKhGRn8yw2KbPGAMi611ZJKTdrJrXNy",
  "key33": "31RUo9sk63ADVJHBAnD4NoYuXnznTccLvfYbvuggusMDtW5PKvhjgDmGF7xhQWvdMnkPyi22HboEWXGeDb9dXHgk",
  "key34": "3yTvY7zFHbFQK5t152EY7ZaVZRjhUTTy1QXqWzQ1xjzCNsUPmfmrnLCtt3FWAATBkcroEMD1Y9dM2gnAYV1UW3UK"
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
