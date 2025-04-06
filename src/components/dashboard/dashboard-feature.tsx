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
    "2ma4cLDZs2X5NXNiKaN7TRNFa2gcx2FWubqKaRZmSm9MCqnxoNeqBvJNzypXgA1qbYN64BVFqY7WLms23YbQiqcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "amWKkFFPtjNCPPhDjx7Gq6m1NXQHjmN3dLAEnXFCxwmkDkFre2eiNd7NGcngpp2bmUM6Hj9rTRvfFUd6Q9W88RW",
  "key1": "m1rYbYKcjJhzV5qhqQE8ihXBMkmedrwSUxy4Ay1WNfNj3kF8uMrn8b7pi632UPwwSaivuw6LKtDAkoAkAtbtb8n",
  "key2": "2tULe5n1ZFForVUyTgVcpMFjQQg8SE49fWjRZETCDX9wfjfruXHfWBSF7TE6YhmdCNvT39JxUno3RXjeWaMwWRc3",
  "key3": "5sXN1d6etNh5sohw1vRNs3NHE7hdAXEcmKjbq431cQfNsSBSKKqmoMDs1JhxV6XdxdkefXKaKUXfHC33SmnLiUtR",
  "key4": "5EM9gjHSYjv9EbX7auwMP1LgnCbrcLJjXTnyQSh44pfNv3ZkXZtBzLqQn9jmyywqKUoxirRABffyK5YMgNaGANoH",
  "key5": "3kaC3puEHWsNi6DUTvPeBniYrcq3W2phj7YtM61kSJoETmXXZ2QUbDDn3mqsNXvMQsYowc5gCB8S4zjWQk5EAni5",
  "key6": "X5NQpzivoUoUg8Y3qAvTjGDrcWrhV1ZffnddXCq2aH6S8GuUGQmeKkwhJ3rhHg8frsw92Hz8x5QDV3axCkDqc79",
  "key7": "2rR94vntnBdm8urQzFhWgpT7MEBr19UQnQUCDECEFnskj7S6FjpgAq2XqcawfqZ47DqoBpPiCWtBXrqhwTCnYdWq",
  "key8": "4vZDJc6KY4bD93bU8d5s9VZLMKZyAYYJAg3WWF6YPFN2m4VmpvbLUUztYjukCvPgMBG1JonWuvjoZCSpRs7N2zSw",
  "key9": "328WwejrgjXnc4pk4HBkTWMPbAqH2YzfqMngcgvjnUVi3U4Y3upvrd4ZcPz5aYJbbULvJrAH7wztgt57Ek2p6cQG",
  "key10": "3HDMVytrhoC4oKcCdfnawg1WJ4GCV7NrbzHCj4GPx7FsfdaRRkGCJb2r7DLBu3oPkAWZ5iNHmdzZ6Bph8p5XzuTb",
  "key11": "3MdghZd6HpAKsSxW6NWmGKoyWzjNXQ4U5eL6VkzRSEw5iNhAVaBXUiHQpRyQAZsZ7cqMECe8cxVhZuU44MZtzV7F",
  "key12": "3NqnrepKmnWMvz786MfZXqG7EzGxihsYBd1nSp3ZauSjtqmX1wR1awK1itsikBVseuMCqNxkUxV6nkXCoChsyWGw",
  "key13": "2gUg9SaZnqJJodBXMBkbEb9EKN2gbPJSaHGXR6tTTkQVKnc2jkzK6r96GfRPDrkb5o8xXNcZqPLFedeHkHs6GopH",
  "key14": "2Vx6Ez6PbumSjpAJSA7wAzxmVwqSrvngFuhjGLGZEKyFmm5dz3pKaR5HxUztpcg3au896b6WJWbfo5PcS5j9K4rM",
  "key15": "3jK9jfiS5qrSduzfDqWGZ9CTHpxs37AtvSjecUpvXprDYQAjrUryKx7AbQqWkfwMdy75gCcQ3Jq91S1aC1mk9cMJ",
  "key16": "5WLrCeHspcAno8o6e9LJV5hdvcyjmLC7YCm7Qmehy9Y5NW13a2CKugwR4hje2MnmNwv8hXsoSHMzdBZ6Jia5ySkR",
  "key17": "5PX3yc97hjvwn1cDiHGtV7jWS8svkDnCCkp5TAwsgGiCF2YoEXsw2wcgVXptYEWjLadLG42TSPL9JjcGD8KGD9Kg",
  "key18": "wrMvrQfevLg16s3VMBZTBzr1vfL8MLbu68YL2T7P4Baj3iPY8rp6fjqueBfiQmW47VFr4G4BvkPaGyAyAKuscaE",
  "key19": "2FTZQGAt8B3koYHgsuPUriuMcJ3RQg4ngZqAoXBLXN3BaoQYyFtvzaGmWDVcjwjNWejWPV824cqEA4Utd4a6BwCf",
  "key20": "49YYtpAKL21Kre64EQrmVCDKuAhgkt2jcNj1A4Eeh5DEvURuR5t131yPxsszmkEvydpoErZ8EuHFFd9PMMdJgkbS",
  "key21": "5YY9WqEXDgCuCs8jy86773KrhTnqKVx72hFVPdcrdx9GSJ8uzzsuE2JWeW28e3iP9RCocCV8Bxb2SSKJQ45TScAa",
  "key22": "9y9MNSKpkTBmBJzTS8U6UPncx1RHUWNpWNhcy3V8NZowH1hjAR3PJVjqN28p6usWSBiAfKPN3LPoRybCmtnj9XU",
  "key23": "ENtyoCEMCST79qUMAnWsqbidbEQLyG7o4MY3rUZn1CFRM8jKDWU1NWSvuKugEgDK2FeooWotHj7YbQpAwerKjRN",
  "key24": "3WLZamYVEDAwDfuHYTQhA7ZiSq3MBkZP4HfWwFnCBTsHMTAbM7RxWELZiJ5wf4PgTHfgE4DywyKF8TEGNpokyZiU",
  "key25": "3HaTTFFWatLuQcsJ9vNxLLhcko2HySR628WUWWG4JSTgPtsWRWBSR6LYVYQnQbxAxELJRiq3kzimviQn19nvmdak",
  "key26": "4FxFzR64XXvfju4qcC7DkxwjbvksUBB96SCUCgivzJJL4gPNeYXFdykNf67wbJD6be6o5wRp2EuTGJ4L6uQH251e",
  "key27": "3GrQbwDeEJMp2C8jNvUgXy68yVmic6gD427RYNiwbL3z9pPc2dFyj5nonA3Pw1Dy7TznPmURZEmsELtysnQEJsTB",
  "key28": "jM7pH5xqCcKrhzv4Qrd9EsQLdVj9KhibNyGnJijVxJ5XoGUEXwyeUmhgFiXCUhqKfEZdaCqu5fam2iVW7e8GzHh",
  "key29": "5M18dEi17YeK6xSdVgCLosfLyxLQWziNciBhRb5GgmDiqMfZzQbmNWpvBszEhmBEioaXndz7qgnVGhm3xJ5zX9LZ",
  "key30": "DCs4HihD3hqVEXCFm8jydfLHp8zuYvCTNjSYbD8ouDjL2zV6HkjS4FMBpwX6um8GXLnGXzQLGC8CB3veYiabCww",
  "key31": "5QR1PgNKX3whhtTzEAdkvatiybCu9dJUvpshumvM6mRjqNUuZaBQUFTJoUcj9XUo5FTHKZ1xTmg1rCPfJ3hXTZPN",
  "key32": "3UrV6wz1cfKEYz57pFCfuzNf3kvZux5iXS1msuo3fXTWzy3ZMjaY2t8bE7akmNSL8jTJVcaGrXhRJz2BrSvebew7",
  "key33": "4Vh3cfkzdFZ9Lr6R1xmJraEN8Le3HPeb7nNoqCMVib4FFaapxS2X224SjsVN9FycwQruxpidmnuqmc4WhgLtUx9Y",
  "key34": "gM4eSKzCJZCiodk4BRLL4uyr5PSHdAFD7UCy2G1eMpno7E3PJi3Dp5pqihMWzhE3hPf7DAt9L4bqFw1PKp91nfH",
  "key35": "4DAHa3bk2GWLNPGTTvig93AqpFDVjJbnvdfrQsBvni9qHVm93scBk8AcJnmZAcvtmMhUhCA4ceUfBaRTm6Qc8vky",
  "key36": "3QiSBtUseng7p8MdCua6vp6DKx1NdDK1BJSm9K9GcwMyMNiEVrEtD2CkXn7vuBPpCCh5kYysC4nDu3tmj1VkTGgS",
  "key37": "33rkHteBLJHqgjnu89rXSPrctfufc5ig8pB7dPuE8GevHoPtBujjhQE5hnY77gAuMYDgo8JcDUasvsiX4yS9Fqs3",
  "key38": "qDcpmdLgucL2fZg7dHzsdwrsUrgeFfqiszdum1iaWMiaakpXrYSWQ8WLSdEtsDkEzm3JoLPRzuxtqjRUZ5Uk7n1",
  "key39": "5diXjWtw6WM7HYF7B7MVqHw7MgnxeNHR8pxDv4Cf6qkXShxwaXx49poZs2s2Ea42GLsj6CqhgrJsdKKujHcBke8E"
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
