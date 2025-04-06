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
    "5pavtLXF3DpLV6CY7r7JoMa2g3V5iyhoDg332gwM5mMrjSv6gSHX4bznKaQEjWRpSjaMEN853DmTUXBeNPJTrhEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4czinhFCUFXUvcvkVDxHfXKnSgeY9HfZ9b6xC2LkSCMNqCKbi6kQ42SorR478HEoZ2wY2JJFdtLGnSVtrfqfD7bu",
  "key1": "4rrCkbvHxv3ZrAfqygas9yFyssijwygQpsESu53C9YoryCGMxEoA7CuY8KKjFvVomd3HTbcL5GD1aBrSXw3YRjS6",
  "key2": "3Ah8pMKvdmpvJ5U7bzsxnpgaStgvXx9BT9weShqZpkyQhMrBzk8YhNKGFzEcVjTL7784X5BVEwLDy1HSfFxby767",
  "key3": "jg2UpqqH3qfoVY3JJZhDNKXoHsxBvbzbYuffCZEP3jNwyVSNTF9KxwQ9vabDFMn3Qpbk7an8jxHs8F81XpLT21E",
  "key4": "5uNLzL6ZLFBZhs96kGe3QWPHpTyJHR5sgZFn7nzd8bppjx8gvB23eM13BeayXaG1T5vvmjtE7xm3rHTJLgZMHAK8",
  "key5": "3sA2cBB4UYzZFUumiSHE9erLvZ5XkMnxvdYXcBfPJbsZiUA2KCvSGyFyX78WZdJF2kQYgnWafmq4bJgombz5RAaP",
  "key6": "YFuDcK9bPHFYae5n4rCYRGovdZoHz45KfCZnFtRUyUN3W9czopD3wk2vz8Q7kRsdDzH6VJCwgze9V2reWTtztiS",
  "key7": "36KKo783bWLWkhegW1JCqwcaMS8N9nRrp9bBTNapqntACDNMKzXh9gUNJoXPEYEAAxNhexhKcAEzkk4pZ1g9dvZv",
  "key8": "222EjJfTAdv1JBA3vAfkYKZWqZBJoXGkH3HCkiRzPHAix8spGSjaw1ybT3VzFZssUSniNhPa7M4yG71cX8iDUEvy",
  "key9": "37xPfQbKQbQ8fq5d6TeCMkn7jap3FjKjJZ2Rt16yz7FT3obqCQRQJcbLnZkSk3GVscnCken3aDpaQcz9wHd3zM6K",
  "key10": "TgK8D49ejS5C7mASzZJ1oMLTjZ78n6A66RHs1noRbZXBexdXJwtJSTQDPxZeiiSj2CAicXFmWT4oRj6iEX88J5e",
  "key11": "2LTnZx1Je1vFsy5BZSsGyWEujxszE552iUnepZiMu6VXhCBsjRP75ybN1Tg2GuoCYf6AY6yJYnze8PT9JcQPG1kg",
  "key12": "2w6SBRHmo7ji1yb3BstsJ5GzHTFrkPBHKxKpCHG5VJx2c9uRw7CjY3ViP7RFTvr5UoLeij8zzi54b4CYu9WM7r3k",
  "key13": "3DVQLuSQzvxKW8NnFr8D4ZLbvYB7VmpVHtCPfqwAKkJE8D6G1V1EHRcpRkbvCJa2CPSEjYLuiPFVLpCXCi1kfcp2",
  "key14": "2jyrTHyC5XcpEmaboQujnji5jD9yJiZLWf4Eu34w5maHwFBdobXywdC6y9knp7Xh6x7WLYAm8ttGFp1X35vGy9T4",
  "key15": "4iiuAtko1RwVbfi1q1EYLCfPP5ioeSzxZ9ADHQbU7KGS45YDKWmQeQubE2Q9ZYyvP8QVLjuCoeRkbQpXtCrfbfxM",
  "key16": "2PP36JjNHpWtGng5nXrxYk98JtFJg9f3PR1o2BG1NK88yowgU2X7hEuLtv3mtSJXGRcVJe8NSDMtnxzaPokjvgiE",
  "key17": "5WBpiht1r9pAYf1bQKutKtru6eqdnDDhzbCv6Ea7rCKXP2fMYGeyYNBMYJ4QXHHisD6BCnHooEMM3YuMyaQCeur",
  "key18": "3f5tpoRFJVkL8bim3o9whNKWwv7Xa38h55Q13ZUUWBVtyJFHQiQPeAsuAZeXai7sRNohHJShzzDYea259LgqkMgn",
  "key19": "4j6tLWDsagFHfiCVbNCZTbr7beZP2h1QdkfWCZCnuEqA4CWFczq6ioeoVmRnhsAzByThiaSdXrTpCq6kErJKmTC6",
  "key20": "JpqdKb2HudhDnT32LvwNDwernW2WfXC4WV9M25FZB9G56Vd8qPBqHunpGB4AQaS5VUA7UMM6eQ9NxcpgBiApnGY",
  "key21": "wzGbQ7eujwaRhiwaawBcQSEFiKtrKX4Frv3zTTP9GKRyE8J8WsvYWRXFc5cBg172Yi5rAxp4EBt8zDZDBarbjQP",
  "key22": "3MbnPJT8tazix7zzHDchnQ5rS4ugxZoff2yL49HYhBmSFLXZMPkkKixqnwyJ8vPeq2MxLGdhVpebXywt6QQ9SY8j",
  "key23": "2aSPHpUNGWUSgUUG9nnBbSnKLJjbSutapsJvF3kmVBEYvXCCne1XJk1oBRMBoBf4RoC4jyQrMnjS2H228Etu3D1",
  "key24": "5qg3sbpNADgMkjg538byPPSZ9g3NCaoprBmTfCA561Wz2ZNYuhoUQwtuNkJRRGxPqSqrxPyzbMMkrAPhMEk8qpNc",
  "key25": "HLfF4u6X7oo61ZqzMoRqXmG4VpF9matSvevThDZSScU1pRKkC9VB2WCey4etj2e4iT4KbtYxPqoiTpWu97UBh1x",
  "key26": "NviZZJ5YSWu7msLZHbhY9UtSGoFytXKX4qBQQpHWCvFV6vhHKDhSj4eXMvfRaVMWkYWDGRUqv57HhncXhJjs3Kr",
  "key27": "2RaTveEFUD4dRiB4rcrqa5sq6H45JoamohYW2setToGiYdQhEKZGoVHRsRuhc9eGWLdVYH15ECKaxsZAEMmFHqeC",
  "key28": "5DtyuvLMZxzYXNL7FkbaG7APNCc466wtauAYPm9G6K2qfHu91ATx4NkJj1ENUfPz1TYFHQu5RW5rHPT8izMA2RWe",
  "key29": "61ruqMSQ9bZtoM9U4fjo21bnw5WLqfaqyCPesnjy2pwT5krxuGkGh5pxKMEAgiA749AsRJJtwdCNEaEfqk2vF875",
  "key30": "5L24X8k9AjvPGepD7ju5EydreRJU2t3kwXwHJsgVXbYvpvfpS8zYNj76zSfXPYpd5JNR67fUtttttsaF3w8c3Hvv",
  "key31": "FYRAbb96aHw7MNG5huzzXkCYubYy5X32oNMFNmtSNj2Z8SxmTj9phsRdU5yrEtUHiQfX9krNYH2Gc7E1LqhREsh",
  "key32": "31tsc4x5bXw8Xx634RQBpvr6ALRrVRNSbJVapD48Eon2SL9pWHxz46gRmuQpaN8u5QKWFztZZ5ioT5eTLmPGa2VJ",
  "key33": "zmoNYKLjck868oB76b7XthfdnxjnD7aUBc1265gUQzQaGBiPoFALFs9dmGddWNXEb43oBt9SdirijLn74p5SZxG",
  "key34": "4mYC4sz9uUTtb7xKkmEZaipNTwnV6NaBnLUg2HbfsPqf6EfJX8zz8R8CnibCELtvLdHo5Mnc6JnjyP833v4yRzLy",
  "key35": "42Nx13Dgrqzw74q4fcomJRGd9T3YFDHJM3EqLmfaFsdWQWYWU9W3ea9oCPL1HGXDJCVkF1TTLwD1ZDMNFTc4XaGt",
  "key36": "3xUNxUvg5Nro9kPGZf1TRW7a9er4yNfaCQx9sp7mMxppdMqJTEJfpHRLQ2wJbFxdAsEvmUxNnZaJyUKWjSHyujDj",
  "key37": "3PFteFaPXqGPyWwJSSXCLWGi2f6jsSN8JF7Rnq9zschEcnqoiJ7WyYEePx9ptLnCfse6gPxExXNop2LFfdcECGhT"
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
