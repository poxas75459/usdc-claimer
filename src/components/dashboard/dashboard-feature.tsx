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
    "5MiRXTszi2DJgBGuAgoJ4uLM6N1F8XkZXzrQd3sCzRCJzHDd8fq9rpma8VnTvu4tcyLWmbqY5sA2fcqrWsziwXjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UwyHXxBjeNUP5jLqDPKt8g24j8tiW7gkfr8e7dHU5cxptpXv6BiErGEzoGkxkaCE59MVfGFqEUM7fQbmW892sKX",
  "key1": "5ebEG6cDnqh5GTGKVe43FyG61eDoj3VNiEgJDqcD8mT9Bp3DK2pRauioowjSyZXZKXfWgYNNvhc1UqoRRydsR9fG",
  "key2": "4KeUzckPPznYRo8RGQQvvRxozWKM51AA8w8GhLNfD8Erhyzh9kCF4AXaLBtoP34bGvcS1zQkxo9tUx555CdHaZL2",
  "key3": "3beoogt6xAL99Nbe2pW5ty8sCz5oi7owdLnuBZhEYGmM1PSTZMLwJUXgpDkgPvvfTefL6Go2v2XfSQoJx7DSTU6M",
  "key4": "2N4MCfp4Ehim5bKjK7obFa6K5DdegeNaxksSsREH896bhSteJLLZdtc9i98vqm6FhwwYHH2MMzsctpFVVA3b3mAs",
  "key5": "5LZ3yXp2KNZAcw4ZPnDF696Qv6dNe5fhSyjULbpaaLm6FLjkcVF5bZv5Q33Q9534a99sPwX1cZRg58WK7L4TWr1P",
  "key6": "2WTpL8ke4Qtde4BUSriCiC8MfQRHCTwZGPPBfYx4cEXkYZcuhKjWYKavRsVnUhz2ytuJRmAY9z7GWtBA3XzXcfFx",
  "key7": "2JpSA5psrvqNttTaruoh6vuzDCAviPoSLYUvBwh11ddK28a5KhKeCxTyBnHmHXc4nhSPDNVnR6ctmwMwAZGbki2V",
  "key8": "4Pn7eE61ZsyX51Z9u8ec9yDrUSRiAvnXG3fg6YW1EkMe555F2m7fZymzScAG2yxgoUdHWmdC5dasAojbFd6UxZQL",
  "key9": "4xABe8MN2dQoscGqXhV3BtxNeFnejMw5fSvRD7Uybae6kXVYZPuArKoKAxjxmwU8iRzvcYpdvYFbWeoTA82svTaw",
  "key10": "LYTxiGiuQr4Fse1WpP3oWg7VGQZu2E6Z4DNHjuMVhxYnCj9ettWeWhd535H2iQ8M9iUdfNcBSG2rhv4obNu7s3B",
  "key11": "58q2r7GnAYRpDD6R5imtjNZedUzY9bmJdmYV6eMYBGy6oNgjDGnq4zXLyV5oxTXLS1qvC95Ett3zjP989rh7FY6L",
  "key12": "3ngZfemTdgtLoMSiESkL888cNeLWZWrUtzHBh6B3vF3es6TmF5B8y1phHPSVmQpeeoDMK52gLe6mx6mRKBQdq7bj",
  "key13": "28bR6otBxoVamCUYTPNA2jFCm6sGLDxsX1kXweu6Tn44H72QFUFfJpzTHCbr81YP2JbQRVeFgqsY5FiVVqGMBQm6",
  "key14": "4kjf4sqbhxeGS2F1Mn1qtafKkxwn7vw7WeUeLC5CEAHfk3NsoGpogZ4E5W41TXw1SfwfHtc1uHCFR6YhykojRYvz",
  "key15": "37CDjXhDBxKn7asURKFujmT5Q4ZjMaaRdHPMyWP2ZmtWWgehfvn4R9NDcXXnd8tnsyYRUy78hpHgnhAKH2rkMUJg",
  "key16": "4DJ13mmtHFh2z7QfBYrmNq3tgQpdtfGYLfkjyrynW7r7fSMKMr7kSDuPd47LEZSyLVN7aRddRChA2Tm3EegWazCj",
  "key17": "3u85BURsCcge9yyQfY96gFoFihgYvbZRLGdAYyC9ZMYwR5ZGwyvP7mGnCPrGk5Bb96q6bpw32dwbYfsD2BDufSWs",
  "key18": "CwpaZZ9SWcdhPdXEERYHAhQCNYW37BryCcJ8vXqKqEjbM5zs575v3bQ7nkdzBVd4VeuVX3vPhJH5W63CkxpEkWt",
  "key19": "fU5WMvL5HCUfqk8ZD83pSW8is2JhxJj4vhgSq6FQ9uWNSMG6gAAEYn4iAy3bfvvkNBfCccdHqoA5aQg2hxU4pw1",
  "key20": "2bbukitUEBLsmaRpoHtsntsRNYtEDMz6me11SKJA9JaQcbP9LY5SPUcxq8mr7yUM97iDaH8tZtindr51do44Yjxq",
  "key21": "2SWtaHJRw6NZiHzbo9ZxLMDroXrrSsznqpmLkiaLpmLLEKyNWDeRW48aDwgNU7fCoBgxfsaQWUs8C8MV4gdAi5MR",
  "key22": "3Ft4VCMhwQb7UVX5VLrNMvJAXM2K17TEJ3HEjWD1BXSu5KojRTcJg7B4wdvKTf14BkJCUh6MFJzMiGm4Y5g9niGB",
  "key23": "5zubXbZPhAZ2ij9pn2hN3sTrLts823EH466g1ehLbgdbhoox2qedETMgX22jS6NGsKFCQKjbZUyXN2iUkNztTMfY",
  "key24": "3MS1j4xdHcKzk8CRwvmuMoTxMEm5HNBzXiaGanYjbb3YtS96A4W16P3wK2Vq7YU8wp7eU9iHcHU3aU39udStWBJp",
  "key25": "2droNYSZ4qn4bkgqBbsP2YwzuRG8K6MHyS83dqj5nJxQByFvGV3YYC53VCvCVvgSfJwfRADmY4aKg7FHMbdBQS61"
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
