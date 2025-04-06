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
    "4SFoEeQBBHPjpdnJEwbxjEenRDoLUF4xnMsQsBiLfrkqTv5agK98dDk6RphWYk9ALHJzKr34guwVKZUxW7DFfvER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nAMX2LL4cKPhCoFFyqReVMpwPds54xU6H6aYvmRoGjeEqtB6xQHWHPAVNjMGKFPdoytDom91dL1UvkDZtnouswj",
  "key1": "2gYAEz4p4xdp3TNaadwYRB3QXy8d9rPtUtbQQAiXeqeRgpFjhqH6Y1Q6xz3n3hc3hUQ1iYZoTKqCkaWmvVNB8qih",
  "key2": "5gqvFEBX2oC5WVYCn2awXoqskfQJcVZ95AuuvpntDhrhJc7tjv51PZp6SgsXXXPaGn45rmx3Bct7CwBx8SD8yeed",
  "key3": "4WhyKvo8MPTesFu9c3afRuTBP39tr4cJpX3tu93i2M2cF7MZSFKeEdRwDwrLz8DTxyTkaPM3hFFdAFW4rCTbpoTt",
  "key4": "beXy63VoWqzJPnWxsTZq7vfa8yxdu9gRPd8pgSwFWxEHESNgQCrvThSkGeHzSM63XZDro9c4iNsTzg3CCtAzuWr",
  "key5": "21SPmQVPvdXWxHvig7534kt93QKgNHUmbiqYoyjQnkC264hcrMnJoYKFgkiNa6qagiX7tKjkGa3dCs91FcGtBVWz",
  "key6": "5irzAWLXAQZDFUhBcpqycufRSNRoxCSeBbnfyxahavBUALcWNypeCzwgJaN4o45yGCMPj968d18zQ8SXXeKo2Xet",
  "key7": "36bYbGjh8BzLY7bufDVQ7Gkd6PLYR5ZRPhB7xm591ioamfq47XjFXL5RasrdkrgtvjxhcJLba9xzNhprFYGhkeTK",
  "key8": "V5uaCAB7urwuZAoG1C7xvuZNgU2VHZ1Jbf8fsa9WS4PD2tKzu81MFhFk3EmRQxc71p2i9ySuLDjmFjG4idz2h8R",
  "key9": "3LpxsWrncnWEcjPseQwLC7cw2GoSD6BMvaJa9oEwXVH1Y5QzU3x1JUMMVboTTHCHBGdorKA5roaTU2cBMijEWepW",
  "key10": "5di9C6fMaKR4sDNbLxLsEKwJt3KJdYPmwGvM9fSBEV4UmjXCAEfq6mNc6PDyDHkhzPkVG4LgJkjCSqhzqqo565x9",
  "key11": "4Hdw7ikeUKZXJaAJL1jTDE6cxJeAZyiDTLWzo77zbzft2zzhvtMaFCxyxuN3XYAVPYPRnwc3GCHSkhNKAf6Nnhc9",
  "key12": "2shGanohuEdSNUVB4oCy5jhMUZtX246oDjEhH3tJEgw7EDZeb3UqqVhLwTMNrCX3tmckvddNenSmax8gpVHbPatp",
  "key13": "2HKrPb3RizTaMtboc8DKoKjsSD7t6L4JtKmG2w15f3PvCtNJurXQYtbVLK81hdUKLpLRm1aCbaxEcf4UXfX4UDe7",
  "key14": "3jDHQzkDxiQCyxHAbcjyrEh28hdGPzaeKGzwmqvGVm6A35D29unwvr15FLVVzJDf6ETfQxTP3MKquifT5GSTq56Q",
  "key15": "5voTJRbK61oGhf9tNBkhhy1GZSco1QzBt5g42LxWa3GC25fs6PX4sZARqW3fFkZPw9Umd5DEFEykxzuRoiAKqQQ2",
  "key16": "5CT2xyFrTMrWdcL7TynXuhXFktaJtiFPNdfqTJUJrtbs3WKQnrQFQUXApgnb73ucargKsd48KbGHSpLMWA7zr6vz",
  "key17": "4oUagu21Jg6hA9w5C2o2af9QmuY4EYFeus7T8VdCBgf4kmHHSAojtb9meBXipux2kX4uMTDNNphEBtMveqK6GSgb",
  "key18": "5Yr3r3eGpzL8wkWke7fH5m9cuJ5NndXFhAgtfP1V4Q85cKMShKrkP9DW2L7TERtLeGjETfDPW6NVRzZp27rUzjtp",
  "key19": "mhTefpBWCKFtQa1rCgXT5KXz6zciZFBWacGYSc2gFrjnrzyjGRXbCmZvAH8xExro8Ce5RJUwptxjPq724ZFrQ8V",
  "key20": "2mghwjDfEguzhWWr1vbLnpFiyPZa2n4dxEQ3ocv5KRTfFHVQPDwGMa9nBztPw7Rx8Udn5TPn1Y7CyvBYDuaMnNsQ",
  "key21": "4bgfmD5XmdLSDCd6HpnNYQ4iyMUQSCzGPFKXLeTTBiQggJnWnAKh9F98Tae699qHbHonqfqkv97R8wp6LfxrtErm",
  "key22": "4AthPbLvoSoBWZb7JUfdwtXNUiPh2d9nmaJ4LGNCk8PYDj6vSgjvLnVxn6tpUjoKY4J9bDyniYw9JgV3v8cV3Et5",
  "key23": "2YxZDtjuoMc83USHzYeqFVBxFRG5A4r8Ei1JvvBhvPVetw719k5u2ZWpMrbngA5LqoUFr8hkssMiqLiZLDqowy8Z",
  "key24": "5G68QMdDg4YYQoAE9ovyKMZBXy4ehVzGcB9qhpCj9qZQP9nkMCnPUMg8ggG9qLZp5jaBSBmYDCsjcDi5CKEpQT8t",
  "key25": "39Ffk6hithBZwRXdt9qnXChShFr6kAK1XvEbdCEJUtZJ4FrD76TQGzkS4EnLs52bn9hkkF1xC9GfvkyStJyLYLrh",
  "key26": "3oMzTdx9RjQJBzhMsG93BXwu3gowfTfw75PmLJZRYJru9KB3vhNhaauztMxjAFxt8Mso7Yjhk4AcTNgr1hWjFArY",
  "key27": "4UuesK5fqY6BXbSrAQFdNuhNmii25utBYSXn9mSSENJQP1KaKBYnBR25ocNFZhKQAJTx2ivRQoymRqCz4KSTA6PE",
  "key28": "4khdN2XymmbptXzLfrQkC4PXcn3xbeSVtkX8nN6xqTieajHwiohUxGsibKHPPFj3vr4YQW9yDh1Wx6CjsQZhSxEC",
  "key29": "3NDSezRdsc762fWrSxdU2M2J5NrLBthYrXCMDkiZ3yuN4KiwgtMxwM4QVi6DZUMmpmveziKyJDzfCiyn1ZAsKMtd",
  "key30": "4rbpvfx6SqRXctLxcZzCiB5jphWKXTzDYzazz4e6VEQ4oFAc5wKohLaS7GK3fx5YXss8oxSckoZY6X96oj6tfmSu",
  "key31": "36FekvJdKEwTq2iTTLK5Cmj469KqiyHBnbMFb5kNREPn6qpBhXYzx49Rj8TyhvU6X6g99w2htmTF8RQzAQxq5BJH",
  "key32": "2ei9HwQs9Q2RdG2EPeTta5YSRwXnpCJVvjz5WW8JzLGpddazqw2jbKdxwgbGz9YFVWaaPW5xoiv79cYQnQfAwDAD",
  "key33": "4eLXUkwKdQvXSThCxTPVLW47a4RaRxU7snUYFH39272tbpKRmeWZemLCQfA2SBL5P52g6ndwseyGq8GzXhA3yXxy",
  "key34": "4FcG3d5SUngSUZmh5Z2DSmyU3PRBemViRpZaepCnZfvooJ89taXahPRNY1kAbX4so1EEYgT5fbX3bAakWiTUHG57",
  "key35": "4yWRzzCwFLqhCBGprFYyKYf4rLsvktAbRg76c2r4SJAxBtXSguWrUGWTXszBgotLfFV11vmvLXhK4XVt9Qm5R696",
  "key36": "25kxentZqZYa4fUMxbTyrNyhVTLb8PfzYAbTsH7fku85bQ4k1dZ6GBpK2vTwwpo5gaWq57QGLmQSgRgHqTMiNsUd",
  "key37": "4Ehdpb1JvnDcq4bjfqCWpApYz4QqxspdmvR1h7q1dryi25f5z4XY9qD9gN8kgswtFieFuMvzwbn5dQhiXQzBWuUJ",
  "key38": "2g9LDbv7EqVnNpo3T7A93oGbvCzi3L1YfpZUh9dHFSuNvihaNokLHZHgVrkPLWdmUqNa9raMkBJJUjFXuVFWxkgm",
  "key39": "4MLNn2dNoeVzWKd7hjNvWBaNHzEmss41jUBxpvnVR5BbeufaeHcemeiAXncy2XwqVjF1oqHSToH31CqLqmWx324A",
  "key40": "4yHW3wdfNETG1mBqDUufKWQe9pNk78eqbAy4j6a52yLH6wVDWmjBPG7iuFUYN5xw8EZsNjbF5G9egmA26AyqYbMi",
  "key41": "2FMm6yyvRZH7RvnNvLByuHtauAnghscvUJJ3ycivJeeMKaAr2MDTxWWMbfFVSTzxsG8f6Vavqt99pNjEbmBoyZDH",
  "key42": "21R2WihLka2xz1qxKJqUQMxYMFAMaKpSUr9rGdqpTJPHnQbgirZhmMpzyNzwZUjrpV6UpY9NWmP7r1CHG7DG9qqW",
  "key43": "4kPKzhSrGMpyk8YGS5MXdnu9dQK6D82eHv8XGFF8NM8Kz7Z7wrxPNnMYME2cspJZCVEGCb2McJeJdxpmY7rTgR2B",
  "key44": "3yGF2SEtiSGLLyYCb6uhWFseAxeZS1x1kuGFQihjDUCwzUCeGSa6S4A6vGpg5QC1BUgekfQHvncXBQegwgwRpVN3",
  "key45": "FEUmzYVebG8su724wZBWqq8vtALQ5n6HRH1Czm1n4BfspCgUvZJt9oJhTQse5hCGJ9qXNHpXAis7MrzCBv7UJAZ",
  "key46": "4VgNqUi2hzHCpV4xCkTr98jVWvTXGUYWY5iVhnTYweDKyfv93yoTGLPdCLg8uAdXhDemyJ8GZiJigVMRkdGF7Y3d",
  "key47": "fqZYwis3hr8WMgTHnxFB7krWb2YTE3zFh3YGFDCf36pAWKGu3c18UbgwScDhT6AFAhMbKtf5gNnEoanD6jvvmVA",
  "key48": "pvJGEExUMsFuUwDTRX1Xh9JCevudYDUHUBdZ7htPwzM7eMXnqpyvBQG5J2UfBc4NT3kMF2vxdF6sZJLHseXcHgg"
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
