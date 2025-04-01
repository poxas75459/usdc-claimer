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
    "bQQzkWePVTc77jAZAmA1TGG8gMWurFpSrzngUNNWhE5oTxMG47aDCo9w4HKPqA4Mc3hoKeDLA7FgBxjuhwamWZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DHuNMsBVAJkexitbT4QH38xJwUXFMwXekFhoJet7rMRoWdNiVeuPLaKmgntDVBcuFVcfnmeMqAg8G9VZTZoheZV",
  "key1": "5bfyHMugGydpyyfbGPaoxBjGwGhDMvxyYdTycWQYLLyaSaoxKMr4LrdHg9qMenWWRcAEgePASLhwrvuWMqN4onuv",
  "key2": "4D6njexNDTLWppmGRLGmKT7Ezusaoq9Sz5g9fUopTccnzuvBEbQQSDPGifLeLfRoTwApEmc994A3t6hkhU8VZdRu",
  "key3": "42fMNPu4REKzqTRs8fDQ4GcTFyEFwcfuqgjASFEqqQLKGhMt1d6oPi8YsMT9dSTsp16RwjVCreJRFX9iKeVY5WtZ",
  "key4": "5ShGy2XQrFmo8c4F5vSoWXv1MHxER2uwvBssVpJeEvKMReFPkMqVdKGa3Uk43UH6mwvrE6DwCRh1fx5JWnQSNaUw",
  "key5": "4YfP8ybGVA2G45M4oC4QZF5gPg6p5uScxnc3JPX2ESVS6TGfPexfjrfb1XPhUpLZDG2kPwDB54sRrGSBKhoccKDY",
  "key6": "2qEL4sNSZtMQoaQv7fmacKhJdUMFSabgQJKvNsmNTZcch8438cf2P9zS4ovifXowFqdp6gxUbLmoAKpysZWKh4im",
  "key7": "4nqT6Cw3vmapk3zHyXMBZcQWJ9P2cdqbdyg7vJ9sn6R7wK28HyLHGv5oZCRkw361NeYwRxsAfVpB38RTh2t3rwfi",
  "key8": "49LP8n1LKJK5W9CXL6Tej8X1vYWQiGgDQCU4esZv5LMAKNDvNjw5a1M4A4KAsBdHeFLtm8rhJT6fdk28NUWDL5Wi",
  "key9": "5HinKDFuzfaGd62peEbsFuTZbZjSEA8rq98NB83Eszi1s1ZRgiWtBaCAugKYKbMg6NmhicickQqfcAgy4xQhQvEU",
  "key10": "41SLJvzLqTXTf8NeBTJgLNoY7m1G7tpE1ftYy4sN8qJo9z2FACEpNHm8acttpJLNTC6HDKxe2P5RBh6XeLtKbvQq",
  "key11": "K6y5CSzT8rBRZgX6psxgL7gxvbFYcGq6u1j5MB3vpye18eNNQEvstnToFuw6CNRyVapGYtwDyY6UDhr7v5DboUc",
  "key12": "5TwuZnpXMmZFcE7WpGoJBDA3LN8zRmFKDYQurcLeaW3SJzdM2RUubiDjt6FaXpDeYnoqBayNxy5LUNnd2zPsKah9",
  "key13": "d1JJwQ1EeodHCneDdTj29n2jH33RsbvpF3LFoWnbHV4Bprj4e7HmyJXao5BmaK88mZkPU55mqc7XJ6YKnVKTrG7",
  "key14": "5EaaGSCrPdTNRB3uQiU7hyTnLRrq8wNJqEa1pTfM9cn2G38DbBcQq8Bd5HoxxUqMVrTLnVsQuzF7xRV7dzNuFKDE",
  "key15": "4Wmw9iZTb5f89MrqRJRKSVPNv6qDeVNCZjbZVVLQkBRThKMqs19R9uNUmZB3BgCqJRycYKUrbykysFKhy2W5Ncjn",
  "key16": "3mC4KRv32mQMytxtc1k2Lj7DrUEQ4b8PJBSXUsE39sy4PUSqfEm5hC2XuW3YZbb13DcDPPiZMajRrYFud8eNBFvs",
  "key17": "58DvKsK2FMVzY5ySTWK6WPHdVFVabrXqhqiKxra2gKSkujgzJmBMptVDb6i4uv3KVW9warYwSUvvrtJyp5Pi2qkN",
  "key18": "3RRuDQoSkdaxCKUEWkRaVXuSXnHMDUH7zC6Vt3pnfqYXe22nRuDA3skCWM68hd4B4rVo3NQnFzMxhrFALqUPLhgS",
  "key19": "5Q79VbAriGB7PzeaENSgtdHFpXUdo9q6hqLc1dWDsjWSiAEUM78xfq5s5RNmEoopMZiKVirVVMr5J9ovqPnA7PRW",
  "key20": "5QjqXRd4WNVFAtaRXEgtFhZUwZmmTKPDiVCC2XiUrWJCBcnELVpkoANwRmjTo7ceYg4S4tUju8rVH3qkvt1H51E2",
  "key21": "2PpGfBydsaj35HSLHeu96Mf7Q7uKteNvkAcwbjqpEbUaJqYVJ4KffRnL5izddsDNmpEbWqYffZtMShcxr8PT4pSM",
  "key22": "y41CDyi8FTk6yRRLG8HyXBKUAAdLnszmUz1E95UdY18Y6gJFKcvdt4RkzDQTZqpTavUSXJR22ywEUo4Rz3ShXae",
  "key23": "3MZrfjNkQuSsHuDVWqjDqzzk6iyD7BfZhy7LvcRrbpo4b9CrKrGd6xnnHhA7RAGuLNCf8L6Cbamn5F9Y9M1S7c9P",
  "key24": "ggC4zXsRzRGrE63JR8WPNUSMYnghJoMoqNe4y8d3vQF3oQYwtBBiy5azvTtke3X7EPADZZtzjHxKyRq37ko7CjY",
  "key25": "2Qep7dV1SgEAcKZYKaeJ7LYtzfiWy8dVgEaHGmVWE6fUiHCMRvTDiqqQu57z6NmCHXfExqkBLbazzPkbcmVKwZL9",
  "key26": "eNsX18aHejqmJAL69vStEc3Za25ctVbfJtN82F5CNxDtBKMzLZHVLX8JrusB4xyoP1jm7EhNHauGMKYCQQp3Mef",
  "key27": "4GEMSv3oFLD72RL2cfRkNUYDNEAXFZhA6NiRqkAKKbgVebyUL6GJn3wexBe1B3Da6rwi396jrTx6W7qykFAhUu7D",
  "key28": "53VACgDChc4qwyhyzReF9TM5DjWCwy5LLHLNZQPFZdrprfTDCmugbKQYbhcvBnt2ZY2fs8ULKbKPirvq7DBs9CMn"
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
