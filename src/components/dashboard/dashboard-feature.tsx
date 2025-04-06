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
    "4PkMbD34D6NKBpKyiyEDC9uX55dfQi5FsgyoLjf4QnTTNbUPsH54d23YrtgS5TqeCojJ95HfrSwQ1j8L8iKeyNS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RxpBfMceuAiPb2P7DonaesWmHHbJryGo9Ci2bz3R7D5oLmW2XhpBKt7eWRqYLFiLzUwv56aeqMvvg3D6MkLVdyn",
  "key1": "5Aa6osMMFdesdidbRjZaXSiMBqUzfJCRCyLz6iY5H1akSrsxtCL3Kr6kH6mdJmPqtKwScCZDjvEBPLur4LJnFbjk",
  "key2": "5EaFRvavu6vpPNhjiKxZpgkPJMiaZN74evPLoPJs2fJhHoxjP5PhtLb2UXg1SogB7NbAskqCxZ7jVBDGGSWpBKjS",
  "key3": "d65jv3RStSBEaZUgZLbjonsopNXERVv9cTcZ4SMVnfGb9pRG8YWWPs8ctu4SKoXK8gibw6qxt9ysvTbvU55m8a6",
  "key4": "3uMQmjJifUSfPsLpGU2dha4qy1j4meXomVcfXp9zusNQ2ig4u2Dc4LcQ4gbR7gye12bjaNhseQKz6xjwynYZhbw1",
  "key5": "5isQ8jhBqhBdWLXdxEyU8tJHCkTaQ16ngBzuc56UJQVMWEReMGA4kTPXSZfaekvQ3qGp1c9GSPMTnGC3Stz3Ys4T",
  "key6": "5zGzEKmf5SDWdJTRNYs5YQbD7himzNqeYbBYamnwt3gWu916jC1tMWd2Jxess4uh3ocdKTvePdUahxdC3JKLFmFw",
  "key7": "5DP8HJEmBbA81EPgG9bZBb94KxDN3v6ivMoXcSajR7chpGKGpMBs73SNgRmFotZH5W8Qu2BREEFBLnJU4hdFRcT6",
  "key8": "Xo89ipXpJZBfyN9y2UjWi8m9eJWsnfU9cE4XyUN3ChKwW8TLoo93598egtaFPwLdSToHhiDWNhAYv8vd75gR4MN",
  "key9": "3Ay1qp6kKdhGfw7iSG3iZkcMyw6PJsGg6RzT2M1KXXKJPin6NV1E7BHZTnN2NhezuVv7eSTQvNxzjVDpgCg9jEGt",
  "key10": "5QsybKGyKZLq7i3ZNHgaJgaSd1UrWeSbPMMJY2VnZLezrb8k1GZrkQrw6nMRwydozrSJvzEUCsoyyz9bS6vUuYkW",
  "key11": "26naqhjV4Ab51LLxhqL6CsA33Lhw698h6W8yvrYtrmaxKYwDE4FaFf8JXbAu3gWRiLB2DE2KaVup6DdQHP7MaFhg",
  "key12": "2nGHVY1RtbTBd4UfHityPVg4Rt2ydE42wbnWvoCW1kzDdwDQ9uxM1XD6dLTDVr3L3Jh3LeRFEDDt6Ww9JKihxUNU",
  "key13": "3Hr7szRRAaRsevb63ng3Zt6HVhvjq8fKdjGRgYBDYbDn9Gqtp6BNp1hkVwwPT8FrC33G5mtLzHEtgU87nzmXYF1p",
  "key14": "24DJGrDFvqMTEYQQQP2gJctj7R86HRYJZqMpDiU76YXgCxAr3v5QZa1BYFA63FpqV5KbgsGY2RCbHNbgqvPJxHeh",
  "key15": "3Pdbxxb4X4qNXNE2SFG19Vi529UWQELZ13GPJW24UXbbVvBe33oY4WTRKm5DDwzJwN642wHxPN8fkcj9PV32LwFi",
  "key16": "3vzYNHTM3Kb7sNCX1pCKFXtvvMonuCvvALs8pzYN9W256bX5RLRfm91qAdhXFfSdoweqBccuVBHiV1xkKUD6ttFm",
  "key17": "3KoGrk9jaPBw7Kgr2hSDjFAzUH4TkBkWS4cMWpD2wXXr2BCyaBk6BPPPy4iM3raD51qDFPEmmqnwczfFAbmCKg1F",
  "key18": "61GUFAc7vAggd47FsuMZXrhAnMRnsk6EetD9J61716KXHL8sBuAQJF3bmeMznw58DbFzn1RSdUupR8evD7ooYfie",
  "key19": "5e2AFrZkByZt3jCk5Q9fQ3gRqYDzr6XD2ew9zUwPThULMb7ur4fTAotanXaLA1jni8yhuaxeY7aekbnWZh3R15cB",
  "key20": "9oZbMGQvGGbVXCiTeY8KuRcxLK1EBzybX65wrEhSugts74Bpir9H19Edo8WJYxrazBN6Cm7NDSEnswD7MxwQpvE",
  "key21": "3FSUfbXetntM7hcfQDJNNpc33XtDxHLixKnbrjkMzGEDHVLGcLSHqX1ihQVEintoyHwqg8yU78vSFbddPfH1GgpW",
  "key22": "JwwQPMaGBbWN22fzuwUybeceMHagkoFvrUFDfnfWeDkv9LsmX44Xrm3qDYkzUDwXVqtcJaeQc5hg1bE4JSbh5TH",
  "key23": "4mWdsZUUVKDZu6EqgqNkVmKPXmkrKMYbbseaVfbjKMYd4bVrBNSEDkKcXfrDSVD7LQcdmZcKAMg4qBoeWuNt3twm",
  "key24": "4M3Dx8BGFgC4YDaC5wVqnjRavMt67n8yBYwfoBwFoi1sdeFh5uRUc5qFrgexPLFsXNdCLfZD77KHr6bm8ot5SVfH",
  "key25": "48THkD8RnFf7f3kFXY8kcAkLqki2PNd5hR4ijFMpfceGMDj8HQYKrdejrLdoQNfa2AA3H5D7Uj6X9oL3grAsgh1w",
  "key26": "5qGFBoTqSfSLSPxssBoGHnCiBnWUz6A45EiiXeTQznkenrV4GoQsrDRAJdHYAHk5knBdbAcN2kRtL8tLiLayevcc",
  "key27": "2zauK2gdRU3o31qEkjvuLFNopKcWHhwe4RtScpenBbXy5NqcMQvw74MrT12b42HV8mj4jLtH4ZHu6xsYEpXoV26q",
  "key28": "5Sk6yLPB9Ehd91sDK8QvKLAPRnDonC6rs3MzvCPMaZvSmRGo1vKNtiBP4SzJdqF2cq1sAyEXrJpygfK3ooGHTPDy",
  "key29": "3mY8ECvGbs681LFA7ViF5DTPJx7WzseWfLFRjwj2PbrFJSWrXTj2SfjwXDTZveWyXmQzrtPmB3ufHy1BiSvhdS4W",
  "key30": "4ZrnDhb9XWQUNzzLtsf57x4hTaNfL1YwmbLFFveJQAt5WE8JZe3VTvLjJof8tQ19c2VwvNucucTBNSPo26NYSxu5"
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
