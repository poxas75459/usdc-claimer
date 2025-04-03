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
    "2tp8GLgNpNayNSX1bZcWQGug2HNvBuEfAEW47cBDsdBSLhRTGum9LH33YkhbzWgfVTwLbWA4wgXV99shrRDL1SfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21FHg99SBv3gsHh5msewGT2qykLvpjioLSXthv2AHscbE8DhWJWQda3wFQQdn7EmNbgDMskGqadjaJvbMMDPCXWC",
  "key1": "52JAPH4d7bCU2N2AKoAY1Q9rFQhL4v7veq5Rt5MYRtreGM651k6UV4miA787WXjtvHDm5RroBhAFqZk9YJxyi3o1",
  "key2": "2iBJZYhHKv5gJzHQMussEZbYLkWt4oNvpQFMi4GpbvC5qWabmgL6DvNdzTgdMKTkvxMsAZMYih6ZB8BvjrLiU4T",
  "key3": "4Lsdhe9z2C2tH3ip9Z4W5TXnoSbjoRWswB9TKwg1NUHBT7s2U3k8khAvAH6KKFSRAsabvuProbcE5JZugeDKGRLV",
  "key4": "28oGYqvzG9NEX4D23vNPFsZUtVhJ2vrbyRzvBpdzdvBwWrbnJ2movrF1o3ybXyCG21bnfJNgrXser4kJryowLYa5",
  "key5": "2qfsNxyMJCxdgntPXZD3SzzRYEpoipLT181yjNRyhPhEEvJJXdbxekZBrLcGpCnMQHjj3rL6kmiTdwyngf3z8BpE",
  "key6": "5KafoqzczfsfZQXBLq6YhUjYA1WQ7NrMkw6C8mCvvLpFVPxBtcJkxo8x1z6px7ddGLT4des3Z4M75rN8CqeenzVT",
  "key7": "Hub175LLwzV8jYgUwB8FLCihWVYMtb8cXdjV1midnKUUaQ4jqzqX4voAxaYLUABkNHVVqDSRfwX6rpEbLWGCZWW",
  "key8": "3tKwzwgCXtXJjRrNQNPFs7dR4pv2atb1hipd2BqEvzTBkoynqMvw9gMmpm7YLJUgeCQnS4Xb1tVMLXFoc3RrJpCK",
  "key9": "5UtMJBiz81VmhDx6nituZUzPvP43GXiYupHGMbVCoLdJQhG8SERv6ueAqRSVDptiQCD2dabQ32GN1R52zmSQ7miv",
  "key10": "668r2HhERzHcHbNrqgXyAU9pMdcUdScbnL3iL5YyCwxYQvLBt14UzvE5f6T2CzhRiKZ8WGh39QDfyXo3RP5mzQZf",
  "key11": "5TgctcjJHiamySjciCQxU4wC5JWGufGkTx8pBhBp18tzmjXzxo7cjSTSpAJ2fWfzmx8bkM25nHS5n5Ntr6GDfF5W",
  "key12": "5mw9JTrQ1YjaNec25wxdeaf4T37wXxvq6zPh6oHpZmNLLSS7sds9CV9EDYcAeJ9Ky4qASM5E6JRwKoNPDxGJWy2M",
  "key13": "uNpe5wLU7yAGfo8oB8zgMJfrg3nmpzHVn5HKWcFFKwk2b28nWTjwz4mSNBYPof3pZwjhPDuVb5CYJtuMGYA3emi",
  "key14": "2huUBLNejdhMdQKQ6qvSbJ17hsZ8FaXC6JiEP6XnKKmqmE6yp7z8KKrLYMCdzzqXFSmS3TqFAxzfcvt4t2ixWtKG",
  "key15": "3m8WnW4B1XJageXdTndMVFHwY1Bw72yVmbiE695Ttn9beTjinYRQ3kHwQMFiCzWinZvg5Gk1c1H3m2SHiiSwasno",
  "key16": "2DXDQ7nW9QFzCAtUnGgyb6mxbTr6Uu2iNM7DpcdvM6ZuJaqWGfwySV2sGhtg169oMsjX7E4HNgH2KmGFvaptoJWY",
  "key17": "47DgJCh81Z7Ggkw6hcp8t53gnrcG1ayrEqVJyLt4Z4N5pp9Z9bdqv4SegYRgsh3XRKp9qguFGiatenXrKS2ZFtqQ",
  "key18": "4pRr5gt5kJUPdCjr7uwHexDzuBJr4FBnxS9iVXBcDEdmJDJMtRYyVicfkSpMYRtYYHMkVZ6RYfWeogwR48yJbqJD",
  "key19": "TsGPfmbZuYLcdP3ExbxFM1g3atFhbeEEHQ1GFdio1WWrpjKy3cs3uTTz7ez2TwnsGUgsQRqGywG3UhrUbVkyvCk",
  "key20": "3qGpnn63rBjp2EX6Lmuxg6kwsnnAHbTojVYKwJHVqR9ADhBSw1EvSdFumMvks9sXiaJ4nYnM4ryTURgkCuTCWgxb",
  "key21": "5spySY2fcXSpBXEwjCXcEK7mToZHJy89P385BsWkLnzSa9scUtJ32iusF6obo8hYp6aCN9bfHuU9doBtnR3EH3gw",
  "key22": "2WpWUtPJnTxxQyEYWgqHXA6BsabmiP8A4gE1tM4F6HyUUAcnuYETXmARkTjdCRfz8MSfeaYJmyDNKdbNhwJ9m2HM",
  "key23": "5Denxx2QeeMrajES63gL9UZzVQ523oQbJBnSkViTx9K4X6zbyCNwDmMAcM3qJ1A7kX9hRBDdWfFFCXHNWPYG3hbN",
  "key24": "5AaR3eTPik6q5sov3a6o4XE5PjnnZPU2kEbzHEU2wVBSXaGRMaFJUED6PF36fmPZvitPnzHB5GVHRZ7wXiAgWu57",
  "key25": "5dXmu1tqaFjAgPgLHwJzQCGBkronczs7nAKAF77HzUxpYjPgBV3eXWAMEZVg3JfMrbEopRMfUp6rS3rMeRxnWS7b",
  "key26": "43yf26Vhs3BXXa5xbcFvL7z4FJX72sMZA8KWwc99GMoiDeBqA7shSKr4N3ugDupA64cAbjWgjWSbmGY5BAzHZqWW",
  "key27": "hyaCBiAW8aRhzg3DH6pshafA4sv3Fpm8RnUkB4RcnhTJ6X1wb6MxAKB9Eo87DHvXGqCmsWzD3cUXDnPx3MiGyWY"
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
