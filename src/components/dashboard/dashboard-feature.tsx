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
    "3T5NZPaQE3yKoXLaaW3yava1ovGDbkDdJdTGEFp6YH65H3sE1huMdyj5g8PXg5S6DGzeyVHttwQvsMik15r2qLqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E7T2Xi2X97VojZwvhAW8zrXAnRG5LGauj1d9eXqXWheJxPSz5XZjufcwwgtwvumCqyCTF1XNKsMZ4zi8d2affGU",
  "key1": "5eL9f3B3RLQM8ZdxreqbB724pZS7enk26iAtTXJzKYVHoFfRidvT4spwv2SXfeSPnuis8h7NDxdgLJNY3Fq36pdZ",
  "key2": "4hazAniosYfmnc6XPa75R4jpzEq5R6PU82Z1NJE8fXW1xwAa2gcbj79oLcrfJQH5prsbLgQzwEJK8eWtCXBasUz4",
  "key3": "5z3UPpCAo3gabQiKoTNczMNGfKxjB4SvKawoTQ3tYvftmh8xojkBz3rh9EExw6q5Mezj1GGWG8r3hxZsx285MguR",
  "key4": "42h1C9eDn2J79BndfLAKjBh6ke2XksKh8EY56akbpGxN5jDeGXSDXuSURmhG1EA3kZN49Mez2fJjcVLoFiA4AKPH",
  "key5": "5vgDCrjLPcxpVtN4CeRVHB3WokjKZRx3DfjbH7yNaVQDhkv2Xh4Tug5z4tZE9JMfBu4juG1XVjBmC8ZHhrH7F79d",
  "key6": "4hFsJ7eWF4hw3jZ9Bmb7FWVLDUJx9KYTaVKgfcogUyFMXf11rCw4nAda64Q6Eqj92MKuFZSE2n8WEHkeaPX18Ybp",
  "key7": "4ngTieB7PYugVe2njYs7L7fv3CMkRHab6Mi82ZerQqBTjPM1yf2fXFFRVqVUgWtbZakDFiELGr92WYnoiqHKme5t",
  "key8": "2wpSfGHYzbpQWo7NNPU88mhGjPiwghmWhYANoPp6fR3H6Cfwwv7AM4L6y65MYAJmvmfynC5biG7KRcNxH3uX3FZA",
  "key9": "322aecfzY7dK7F1CTxiMnBzbBSyh24nE6tzaqKrkZigCmpMTbQgh5JLKNc2EdHn2hutzJ5NpPZ5qijReXHsudZqF",
  "key10": "ZU6EkuZXR8SimEUMbR21AxdvfeNqSectys6qobkopibpL93BFxbBgdhvUP7cupn16EhMpEpxvVkx9AA4f2ENVVX",
  "key11": "53oUMF7WNxZd91trQWPAVE5jBVVD38s8sGxybVr7T8KboQDGj99mLRhqrzuTN1QHEhwhQkhwZjBUiJ8nMeTqh7HM",
  "key12": "5b6dCcdFvnNB7xZVTBJqgLCMThvUTEBch7iUXJjFNvDo6dTziFjy3s41xD2ZbGx8CYirYFaoLbsUHbFC8DXEkQbb",
  "key13": "3iU5pYisezfMHokxBBCAmunAWvbLTHK1vJxusmHWNhCo4wU984M9oWgryrvWQix6owbx9dW5ekNgzB2adrJod9U1",
  "key14": "M6bPjsM3qVmwiJ7HGJH4nfq5N9DyyEfqivVTs9RNpY5EUXuYLf5ggjgbQ932jd4iBXb9aBRQH8ppe9kQyxAC15j",
  "key15": "2kywwnhpG7hxPB3w3zrbnQvKWP4pxuQizLsDRfTnjT7x52mJsE4DGV7YreJeh64E4JZVLvYwkE4mEPVvLqJyXJPF",
  "key16": "66iU2TDFH3A1xh2JM2UoPiPoBoq1yaAXQ4MRVXVyUaiK9XZe7PBYJqmD4kJrrj3hBNN2q5mStLJAUFGFXvNaxc9D",
  "key17": "5WSoRwBv3SdvWDpa8YGTEFuoZrLE9CUmNwCiXibJaWxXmJCMRfnTpNFmw1qetCexeUAS2ZjYQhPoqJUVV17atn9Z",
  "key18": "4TkKnsY1BFhnRB1WSS4ZeQcmrPjDYyF6cNwVSKJzZqkw5CRaduCGQ1AyQuo3W67341JD4ayVwxi2S2Z4pk1xo3d7",
  "key19": "3c14pLuFChk7VSEQvMoWyeKZKE71stXFzAP2bhd6gr1idS4CcFtQPrkiGLoCcxF8kxiSHfCSGg7PjbsfTJEJ5j5D",
  "key20": "4DBYmX7sfa9Ynr6LCQVYbkRVRWXQ1hNkHsj89zW5nF3VZpgPBwZaGZa4SF6zdjEZQC5RY5DaEjHFsdFdKyJAL54c",
  "key21": "4gJSAmjdz8AWYUetPXn7L4HsG5qKE6LjVTd4YRbGLezH4ZzNuqjqyxW7VfYrvir76i5s4tCaHKA4TEM3KBVoSACE",
  "key22": "5LikceaAJsbEd6GP5oipeE3Z7FCvzCZBMf5FfoKQxZdESrcLhKLUZvbLu28Ua8GGxuPyYBefcSpxGLWB11ujrV5u",
  "key23": "4jGV9K4vzukVvgAyhDx8atqudJjBiFREs8ko2M9EbpeeR8mCtEQSQF46YDv5AAVqtYoZNSRbB4EeyzQ12cQ2JeBd",
  "key24": "44srKNxSUg7LUiQPuJiRWdzJ18ydxBQSZSeSQWY4TJYxG8zJh7KdARTusxUUVdJnqTi3o468oGgmaEYHuRbHdvkL",
  "key25": "M3vvYP2mtwLVfeUUfNg21hvH9bXUL6kHC3vPtEe9P9H5GTeHQgEn3GnZ8AHUWJ4i9VcJdSr1No2aV1fQ96onGap",
  "key26": "QwmxhECXNAUvKUhiku8jHxxPNaZetpuMVaYzAdGiDoEGrZHCsNMjN93EUmETGu22LLNpJv2F9t8tydcYHKovVjo",
  "key27": "53QzK7ac94HBLFpc9ZnUC1UyDbYXPpBKGWjowFNJUvmWSMGvcYRUHHUJ8y6yojk7PFd5gn5mD7EfLmrfPw2W2YHH",
  "key28": "2QuXVoq1pYMTAoWKboSMGso7TapUpEwbkyQiDc6nWj9gAQqvxxvJZTS24tQV9ADyDKQCGYHi6MMReVnxpCkuF4Kr",
  "key29": "4ZE7ZQ1cKmnDHCVa9JjdjUfeA2w5zXqnmjYg3dL9bzR3BHABEzT34Z1nWUJJRNUeSGbLoeV3xZDstb2n6Dv8FrsF",
  "key30": "5nacSPeU98PezEr6wjXD3W84tE3fuNS9v68SujpxGPBcJJkCrNWDXeCA8Wkt2EhYoQmt8FQjUsqxAA6qxgi9dF6D",
  "key31": "2PX86jNZSko5SG3Gp2T549gs9iddhAMqE1Jhi7ZiU1N3Lkv2g3ghyUywpd9rf2qJWViYDSaJUiWaaqUZgA5YQNst",
  "key32": "5uQnSVJrh6iVQ7oKAJmAXjVHF9SmDt4zFkZhoHv3fHi84nEJA5PecTTaGAAFyuxidxkqyETSmZ17zKoEmKFCgHxs",
  "key33": "3qXAbobP6UrhsKt1jvZcaeVuDWHTntYvqUMXJTMAH8Aag6cnQau3Hv6qD4Ms4vxXWJKsxb1CvsdZrHYu1QANTnbF",
  "key34": "61CukD4DCHupSUepDiVp772Ka7hYykT4cSke81GR13V3MFdYaHasz3UG8YhH3VJiMBGw1P4LiKWtr3ViYctpPaCS",
  "key35": "4998cB1LMrBsGJuqkboLgw4DZc6RzQojgQE2hoLheQ7qJiKmRGX71cTQgRhqCX5nAvdHfPWVxjipyE3tMbtbjMox",
  "key36": "3CrFCmshFLCb91G9jz4NJjwpJxjDK8L2N7CGV84LQ9WFbKbP8bmrprLKeDHQiV8FM4PiL9jJrYAaxp6cxyZ9tVmN",
  "key37": "9ZECuXiptRp1hCPdZMNQe6X92ZoWpMHoq5XL2TF9SxrpT4nu87toFvqnJTj2VnPTNK9XCSCBNL5r7RL5Dp3avPW",
  "key38": "5vmiVyi9JvRPiThiwYE9vTHrt4b75FN2JUmUKNiLmUX7xdeUjMsEJjYjqAt1hwUbKSoiY1aRgSobEMLNa5cFBJcZ",
  "key39": "5LcTaZ3492TYrrbx8ZgLDVGgBFvkS75QbW3XUwDntym7PMbJMyTJDwGyYESNpLENXDcTBCH2NAE4ofB7cVYcSSp7"
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
