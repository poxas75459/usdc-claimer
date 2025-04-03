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
    "3ctuoXx8zHdz9JD2WRVZYHHqH8wpXSQrqMjy71k3RQUbU2JFbh6vakRbCyBKriR4KzmC8eRsTbUH75AFduSpzrYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r6an1JfUJZks2wWw8d7a39a4w6QJg2dRZ2SShdec8UMHwEMkgHA3wiHxdS2DejcN5Sp4ULQQzH8o6YdnSmunqR1",
  "key1": "5rVSfjucQwZxPx7i7PTfjrUUkNJjxnv8XEcmYtJfuMwhyvUugDGzURhGx1kfYYAGtXtoK3eNjQuNQTvN7RQUmB6M",
  "key2": "531gZmhHTDSGWRVR9YbWm6dL5vDZkukLRoN5eCs954bukMoc6meG11G9KJi7aRAkWzCsoysmdA317LRJh65QScBL",
  "key3": "3RNEWCqsr3bvULD8JKZEZsKv8ogVwLAcmVd71dheVHfSn5oTGXGLcDR1gcAU7EPnj88tSfT5ioYZCdjVtSXuPbfy",
  "key4": "5WWJNnVivrEm8HBKa22uLwGoxdD7mHp4TqR3dFnmaC2tTwG4c4fge6bRdxyFk7hCHypbzgYGVETiiEB6vXwXZ1pk",
  "key5": "4NMf8z6EYfuAHo6pMs5Pr6bsDs5ixJXEoSfPQkPzKHEFQwJiwvyjH7y3DsfnTtUrs9iUwQXDpqhBhPZry55WFscv",
  "key6": "Ditw142LGA58SNpg3awU4XwQwSqcZ9NCcovcUk7UYJjV92TjMTWEnLd1poFR7251XvNNWCnzBKjTbB2oVGodUny",
  "key7": "3B3Um4Kc7wQpW6k2HRR4itmyBwHFdVkRfuhdLrzDZcG6DM18AGXVazy965xzVEEXsJVDacBE2242F1BxpkFXd7Xr",
  "key8": "28yMeGx4YJi2FYDYv3kDWQwjSLiZ4CyNoCWXaoL8Y5UjQNYsytfXooa9XvLUwaGywSvcmyXmGaxMjV1XZSBee9cm",
  "key9": "4ahY68Zcutm7QwwzgVSJKMqYf2EH9By3raosb2TwPEAYRpwak7NFMbzTnfKDQmTu77YwWqjzDkXJW7HDtHrXYpK",
  "key10": "3YhiLjtKDVvCNVZKQ3gTusqnvPLsetFKcVN4iNGhjbCPywnMeEGUEz8zUdoeQMN5eibehDjRL1wVqasByiiEjsmz",
  "key11": "3G1gvkDUa96zfXyBuQiVoD5qbQXqGFwRaYCViRW6fsEYwD91ra7kL5vFBXsqMLgs9SZyYrrwmuR8QS3fpf33uDx7",
  "key12": "2kThTCMKBpP7zqg5qPMRhsKgQCauybKo5CLcPJFcJVAshMExiHYEMSidxs1CvUzpJXZaCKL1DMxaQBbqb7VaZWB",
  "key13": "3PX62FSTESbbt6DJqYdFEB5stEjPfnwoGQiFo5Q7ncfMn4xorBheuS53pxHomtviVtKtPhWiXVyfoyacSvZPuGzQ",
  "key14": "2yMFo7gTuL35BzxrFhiLz6Pq9pvawkMFQkCApovP6j73JoLiFWgZNFVySouNxLQ2RWpxzRm6bE3TMAJc9fRHpBgB",
  "key15": "2kqoGVC4QzdY8YTqa3GznyD55otikWsDNKjQntChZtUa3SijB2DGcCKG8aKJrtyYzCAhX1SKci5WaG6NUtvrwCof",
  "key16": "3WjinCpmv6ppJroFdUSkLQFLUgQ5F19JbW8hjKSiUxdDRwa7KFg7HUfax4zRzxY25pGjvbxkrp8ne2NJVk4QjXpi",
  "key17": "JikRbgCPEnLDeq7P7voBaYKMFX9URMC7kTWBDGud2JWzXj5Ev91kR7ZH4o4R5wGtodpHAzfLcEcjQ8eY5jati27",
  "key18": "2WpEQy6SDK7exwazz5QmjBd3v8ugSfyhwotLvYV7GpdEjnkE9H1fybXFCFPXuLjZrrQMQF15B6mxfAfcg8YmKSiY",
  "key19": "4LDavneDDZ9mFqAScgvY1tU9UZ9GwhNb9jVr5FEdzxP7iGzeacvCvSbHReiJmouyftSKaoSEfeJpMEN2DqzqDcg2",
  "key20": "ZkW42qo3HKN6dB8A8PdpBxh6e3MnBGLwbVpVU6LxbWe8TowedbM7kpAHCvRybmhzWBGwNgedZ4SYLQ9dbSaTUL8",
  "key21": "2iuuvQsYVFH3VduJKkrfsWbNjaBxsNkLnR1Xr3gXdwA5HtwmrtmoAyJbWvrHwsmP7KjRPopzzuEXo6k6tDDpjAob",
  "key22": "39RxSPZMd1aVPcdS27MpNyqXmGDJpRFbGKdmGbqj6CPp8dBJ7CRXnzQBGkSt2SojbeBRsYd46WASaieWFnzrmpAn",
  "key23": "pPajiL97EJnk1u8fRsa4gckUTpJryAkvXsmgk6tVFCyqbSJx8mUYmPPaucc46tXBNAxAm7VeAVRJXgQ1fS4Dsmf",
  "key24": "57H6zD7uQHsLqpKWsxL7iJwS6stittSGe3YiDXQNLU9rVRCr94LK8BfXvwuKKyQ6unnHxHbEsgHjZx9YB36PMPZs",
  "key25": "3D5sBwX7PHafZm18knn6o2fY3U3d5sBqhGwgZBBFb2kVDFL6DMg2RyeZiseW7513Uw9W5r5Zs7bdwN49pzSu165q",
  "key26": "4dsMCSJcRaz5FobiMau212zxRjtusV5bzQs3VDd9mrJy9Kzqqgfq2Huncxahr8PS7mn9qSbdo7L2KWNnhxrCwvTk",
  "key27": "4yBUfb12iZ1c4XocfUCZtYFNtDSEWUFWYayXLGpn4XNL75vVi5VBcP6L1G8jR1Gru2NCh7J1umpsfMtH6LESLR4K",
  "key28": "xMoZhx4Wu8hcdn9v1DSyK4fvzjovMEusTWNknFykntM1YkYF1qvhftEvK66kxGPsqtwrir2Dru3FmciJ6613NvU",
  "key29": "2Mr76wphZ5Y6jKZ2VxRVicwGPfBq1XLRrwAGx3X8L7BpYNgnzecDzejJZtRBu6QTTbqCYksAMA9wWgucPfTnoYia",
  "key30": "5F6sbzZsWBwohSs1RbhsokAhYe7EiFTPsHPWsjm35YPV9guf5qWnzVcY3PdpfdUJV7qL5RAbC4QSaeG4eqAUpnj2",
  "key31": "3iYnubHD13ZA5tQkckCzazRZyZVizCnCEt4uK4ASELs8a9koUuPCobBZ4kKr91TmMsafQsDB2B4Yd67YhkUMpuw4",
  "key32": "X4hKZFZtUuG99iBapbgh3RDoa9DixoTnZrdEBDTxCxinHQE41bbDPBKYL2zzKpRhbmkMtvxTEsddfCm8b3zbgFe",
  "key33": "23agLYDGH3Bo71GjuWXjF2gXrLtQ4ajUXMT356PARGrUEfwdHkRsXwLEjBgeJGZ78bSeDxWa7z9db9Ze51WUSK3x",
  "key34": "2bVwTGaRdFnTFrLxUpGwUD7a6itEenMgpMYn3b23e8uzZAyFRWuQFJh6sybknoYoSzf9kbN1R8ni16meJEWpRNuL",
  "key35": "3NqvV2zTLFJWSYBXvbYMfmNSUdHWdg8FHgvvsVRAsVnvtmMiiyVkaZ3zFCcDuEbzmBBkJuTCqh37sh8ooj2b7mnx",
  "key36": "2Hg2iFapCWR9qNno92t9mKDEHkg1qzYq3rQcvYjD93HqaUcbRGP3rm1a4U74hrZKyKRE595sVGMFr8MtKa3bVwC8",
  "key37": "2YRbD1vX7XXfNDz8onUfifN8oC6wvvQmatmz7v8i6J4k1Yyfrr4U1UDVXjdbxwpMpwJp5S8eiUkAwHkj79tZv8Xj",
  "key38": "65Ssxj7zPBbYXjBcXywBzocQ9cZY8aK7Z6vPMCvqCfpNwKCo9tXbsmL8BbMcKP2k5VheXmag6TBJuYwA1bo5Uuxr",
  "key39": "2SFNYgsisnJPVDh8KtCiWTynHHa9dxdzdJ6ETymPTmd4NzA7qh1gWEEcWXhf4XESu9PXLg83wCE1hz2egyZMKbMS",
  "key40": "2csVzLmmgbRrAJd4o4VLz7yy7NXVL36cXa6gVFoaqVo7BvAz6XQDg6HSpVbECaL4G9rckFcB4eFzPaCBzutXLx5E",
  "key41": "5bmQAvqLZfEdvqAnrnVaqc8V2ijr8tRaBwvTMiAK1zEpHnFREyt8VjNZHtZkiJ9RABEGXU2isN5BpeCoAu9quBuk",
  "key42": "4BDqZZd1cvLjPk1xuRryEMhVPvJegMSjkjD6iNfE5bvPot4ZJgXfFu6qR8JY3si2kMNnvxYaqebPs4Q66rkQr1HD",
  "key43": "4EapyANKzUZSJQhLj4tD6p6mBAmLQQ13Tj5exacoNjvhC4443qa4kryjgDR9L9RuFL6jqSCv1uKY7erFeeRdN4We",
  "key44": "5d63T3c6Rt4ghEP1TAWoNUWzhRzNXAeTKkJ9wALyrD5dx8seVpKjVjNXWH1bFLH9RMQYUrGJemJ8AxxQ4zUAVQ9q",
  "key45": "2bwfXJ3FtRCLvSFqWFq5vG1dhFCAz2MroCFMnt6GeVjj9f1qQuYW6MUxcCxtB5UnABNKCMhJSEJ7CEb8coVQMUKm",
  "key46": "24pt4i2qhRP77hHUg8c2i434Fjt3ASZjSHuPrCKuvK3myj1j6AXBpBfhSRZ51QCtmpYvLjQ141apeckY8KvQXSwa"
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
