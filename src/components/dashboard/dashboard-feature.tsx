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
    "5Cbh4f2bUEbgKpcr2dymPuE1r4WRLQodEZEBkEbUZjwCv5aXDwp9w9qHXvy2d4UVFjsbc7jYALmzU5GN6y44bSKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mCL6uXZGXdMTdnb33yae3zhdXdA4Q2vdk535m2uWHwprwhvc3nrJQyZ4ixdFgsben8meVEDz8uCbbvDXnybthEV",
  "key1": "W7mA7BN2PK8Y7PFBGUFNEMmMHZJbVg3DsXntD92qTqgpvRmobmgiA8d4JY3UZFHxC25B8hei4TJ37wGks25j3Cy",
  "key2": "5DWPe4aekxq1a4ALu4SueYyBjtS1gVQLTsMuD1ERFSXYusD6vAbsDkBZ7NKWfFGidmymdosn2bMyYQMvjRWRQWyp",
  "key3": "3vyeJK8sGWMdowr3VXBvbtv97K9wc6tZT8nwTZ7xaLNss7cRAQQDiRFVFjaBwufepZasyJiMvTgHCc9KzDBPG6cz",
  "key4": "2rfbkHRkzqo88fphsDKXzgghZvwzBQU7zptpRzforzQFhMDUusuERFkF9h8SYjYe31VKjK85aWFYZogPcm3cD3rU",
  "key5": "dWvNiWAJfTXQqP6hRgCLZMqqay9z6xgPJKps6KjUJJEZSfkpD5F9P6k9zSd4bxC2UCHLGJBKssTjkrJ89E3VFFk",
  "key6": "37FazbBrx97gzKXS3hJ2h3K3736X7jNjbiKYRAADpxv6yQ9BBzS4kU1dxe28KMKNVgscnqDXmbMdVD2i9cUy2zca",
  "key7": "5ZQNuspeRC1GqPpo26MVfQY1JCwXbSnQqacq4FVMfLXYNf3R7vmH5UCStFoRaQQeGtgU7th8s4Ci4x9wNSrJs7M8",
  "key8": "4VaqnzHoFhPq7fW91KzHaRsvq3ScTmaheUznroVyq83Dk1p5r6rR1yATtatbHxjRBGiCh1Ta4Rf3aMcvMMndsKoG",
  "key9": "5ZZreKPX4Q5pZG8KcFt4BAyZrziS5HSmmyZncd2Jc3ENYrNTNHN9bYCNyURZ5rfydtYdnuRW1QToeEKQ94sjv5jE",
  "key10": "3Pot7aGt34FAjKziquDEB1CSq5MK8jHzbr1p46Jv1hwzwsozXuQkkuZyg38qPBJLfqsLxttr3UUWtPJZaFsyN9ye",
  "key11": "2Xp6g4GKJxydckSkJxQqNLWF4PgjSxcbwFmj1rufNBgWwshgjBE4L6pC2sT6kPN5G13qqNMYdQWnC67zQfmWHZiE",
  "key12": "3jCQKcg2bfCfDHGsxVxApUMW9WG5NpJ6JHyibsQJyx1ZNBKnHMkPt7Xs9urLkWL2w9G6b9WmncF7X5FrtnxPiA9Y",
  "key13": "jiZitTPNRSYYWzA7QNQ425rPryB8Q8Y6cFnN81YF4WSTL7DhxYBvXKbs47st6MmZ9BsE3nmMCGXRFP78P9ezpim",
  "key14": "4vPDzGUSf9k85Ni2aWQYgm4T1dAn1oMrgp27h4YuxoGxGBxQe4aNEn134gipzCSJ54wj3R4J4B4h45pzzNge1F3D",
  "key15": "2F6yVVo1B25XDgzx7UJiUPkUftt2FSRruzL9rT1DasEeZR8NYuKGRMnkj5fWZL1GYjx6tRBDyZu1DHt3kBMzvcif",
  "key16": "2Yy7W2MYSUQebeyiUNK5TZeodqoA77cj9PMnCbBxXSL3gC4b9rr6Tv7zLTnXEWKQtcAkGnESYRdtuP3g4F3kG6g3",
  "key17": "5DH3DpN3RkSjvzLcNLj231kxa5Cbpc11reHNSfKwWLGgHUEJt3dJyaPNpoHSLgrxmKCjKE9x2TNfBS3V4jpbJHY9",
  "key18": "5HUP9zskAVePbXVLxBivge2tD62jXECTDpiBtyKmoiqNhRCgS1Xm3e2sPKc4gZdY6dk3Prw9KxBuHAoDFN36nPhh",
  "key19": "3mguVqmE8D72utmVF4aPbaXREqfrVL1ofY1w3A1dc4aPqHQzfcgQcn1Uh9CbJTHo1QLzQz1iUZmqdbd2FwYzGVpe",
  "key20": "5HbAfscAbZpWCArZgWkFqv68R5RTUahWvSHJKemU6zGdpLZirVbLZmrh3UtyEtb68Bf9xQDEajmk1mx373KXWJZ4",
  "key21": "4h5ptjHDCSHhBrVmbmPX5zZyeBJv33x4SCJxjk1J4ohTnQiev6RGENnkLLZNA9RF97M7gLGtQgUPaoJouWmgg9ci",
  "key22": "49Mh411Ex3fBsr8qYdGBGsqP3yGjs7CNgrGTRYmo7gdawyrhybJsgjatR3kabQZKwCLLnjCMjmXDBntVmLPZgv6p",
  "key23": "XXQnvMwfZTEdeN4EAETz16PiMEP3KuHmAARDj9uVN8xFNPY7agZGN6sFU1rPGVEByaCjoob6SgtUJMhSxc8jjiq",
  "key24": "3fFLMRNV5FxTUsaHpDzvB2hFbecZrrWKG4eZrnpTTNznXd9Zu1XNn5zmcbGEuyPUcD9RMfPZhHzebQUboTaWa3SA",
  "key25": "4sjsxiNCi8W956MbHLwwDqPjCppe7qPzdWULcS36wyYGQBwZ3NtTPrwjuv5R5XwLAkJRp5EJsQPcZm92gLb5SJ2V",
  "key26": "3SwXDhfyx4bWEr1hHU1AUnETsiLEDhBMfTpmurXoHFx4SdZuGCjbkdRjZYCqtQQ3f3ERjRAnHW9mpMXRMnQzEKfF",
  "key27": "Dq27XkLar8Fxfosin8PSgxULwWVcm9gm57tSTK65Sy44YqJAf3w7dU2x8rVFjKLuAAu2KovNzBfTSLyeAKJzzhS",
  "key28": "5oUi3xif3G2Yx9fGpwoNo4SKVWhJeWdMVFYmQ9pmsitEm1fzTPbyNG7pZoEQfgj6paFnuH9tvVnvKBpBrGiVwM3y",
  "key29": "4hvMLqEcQmTirH8CYQpgc1wTDYwAjVcLcZLML6pSxbWYAtZJ58254PBKhGo4H7PJ4zm3MKjvXb2e6NMfEfV4uBrT",
  "key30": "4jw1xNad62rgPX4eJevFGZdUPkYifcxgjJ7bpMPaiBz1meeffQfoPjsQuVSL165CCX6TevFsGdu98fHxU5oGmHNd",
  "key31": "3MnfzRBvvVh8fbzXgLKLP5vGDLRoJ9tn5ntUx1spuFkwgbVZpnyvTkga63hQuAdxzgErHhwBjB1KavCcjZU5WjyE",
  "key32": "u8A18wVPzq2SGGkccsttEkCp7jabSmjGXBoRz2H1D61KTz1uCkzEsi1dLbnh9FEG9iBhstgDoxz83XwHaTyxJfv",
  "key33": "3Ltimabvor3EodkVe8thqr3smNaLGcaVY93TAQcySJYcxi4JXMtSU8iuz8SiPzyw7YyFMBqojZYQq4Eg3QZz7M7P",
  "key34": "2X26LwUiePun8DYfj8jv33EpkjG5dkwekExxkxhy76d11XyTKucgpUpXdnmVhvFQBWcG3MeKvkHEUdg9RNyz9bJA"
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
