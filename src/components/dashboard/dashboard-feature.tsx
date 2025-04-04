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
    "2bCrG6yaMhtDffuE5HeobMJmbVBkRSuX5C6J8sNvo9zeg6Hs9GDFhsSrbv3SLx1WjuVnYtigU1dd5DNLwZSCsMGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34mkmYyUNk7erszbSg3GZh5oExYqVwekjUmgLmToCepDGwAxfG2dfmdWcpyQqHbdcTCUeznH4foR73zaDZnvDUE4",
  "key1": "3ZK49FqAf1vVwgJBU4ho5bwXJdXWUmRJRgMND3Xhs94zhZVKYdqnfGqYgesberLLwLEkX5xXHwd7YKCCGoCQF3rb",
  "key2": "5C9AkvDwdZpK929BDbKaP2bopKoVcTfVVkteZ6PMti1BtTgcDsQhEnLxUxvaVFCVpZ2GzbFUUJW9zBnbPzT2gipS",
  "key3": "4JHE2LNaUBgxW97y7fhJwWsECi8EHHZhdyzjzTANEgJcJyhMDWkQoC6uLyv667UdmZxP1DYkKRoPzWhTn6jbQBbj",
  "key4": "4GCiXpV5mducouKRbWyFZYGESJ2mdoHsWKdhkTujvwzJHdc8CLqnbpsQsyyXV98w3bPtqyL9FzSdXG1XYtHTvtQL",
  "key5": "5uXokgM5ricz3nLoPoXu9FZT7iDPJKjZYN9gbd6aQAs54pGuXZhgLWYG7JjovGDLd3q7SJXmAt3U72DJfdmarnHV",
  "key6": "2cWy8QaoCNR8qZreXq5WEwxUtVvfwe8p8XFz1SCCsM6rP3gnBjatS8sSzcNjH7bvcUHNnMe5hmjzF7nU6yXughbq",
  "key7": "rPKwsFPYvB9yfo9AGNUSyrKy4oBrncHoLgmoMDV9zb6BEHZPZcMZ8gziTN1e48PC1kjykYpFuisuniC9MjTAKsd",
  "key8": "57uNfZecRH97qzPPLCd7g4PtSWU1jt1zgrq52k4BELCVq4teW3XX5voybfW3gc9xFoWUZ1JFtVi9irkh3mVqdEf5",
  "key9": "2VioyyGwdjz8gXCNGZajr5vmfGszQHPiaFUGNCRSUjb83r9ZAPeUjeRgZB4JxHFN5UywS4bKEte9P7BgSZfwtNMy",
  "key10": "3ysbZ3KqpxS5Hv4HJt41Qit27taYufYQqyeiGRfPViWayRG7JNv2K5CXWLmJQcvztGiT7S28SjQVxRQeagRDew43",
  "key11": "3voekB4ESRwgTw2v3FtHvi71QSsDqDDPoU7JPnKZaFgYSAaEPc1zRi6AHH33edYBHf26TaULz2PMECAUeAojKq1E",
  "key12": "4ywUnGAvJqHf1YgcL5dNGcG7RLozHtntmYh1Z2AZaQfE53SgPEGwye8H6ueDXWQkhER9b8XQJLRUPrRoqXHqMe1B",
  "key13": "4zmN9kzeW6t35cVYS2k6z26yB3k4um6d7PSkxK2rcWgASqSN6m6jiEsdrchmwDFirsQEWRoiruNF86AXruR7hX3N",
  "key14": "4kgw9mMDPDVXCBzXLwVwuEokp3pLsyhvhs8r2tJq4J3JXE8P4u3LcCx3ypKuTFMzko894k56SKQmC6UMN3NtMgkv",
  "key15": "2da8XEstgj8JBePwSZCr4SFvvX1LQmk7mkoMELMU8SEYKcHFeQrZLLWD63L9hKzNbJEZmDxBLnnk8KRLZ8WyBoDE",
  "key16": "5mYYDLqNU9wiQCiQwZiqNuE9bcwqPBaBB9Waa2KA999SN3sdGnmtYaq3AiLNDzyETM9tmAYaihLMLB2C9t8EYe9o",
  "key17": "29Qkn5ackzRDmsSomX9sYQNW2a3seD4nVevaU1RgqQLxQVEuCVefNJiG4taenyz5hZu9KKa5iyMAfYF6Yv9k3Cxv",
  "key18": "4PNW4M9aFRQ414b5Wdeg6mPsZCfLrPLNJvK9S4VEYPD1R7vBvSGkSjrfNFHCnjXonfU41fTmnv6mM31eA9Wjq37b",
  "key19": "28VgNkSosaYN8VcCWadnD9GRx1TvxKv7x36RQsgp2aVY9S6no1VtiAmifrmoLjBhnDBSSV1jpESv4okpgFYcaz72",
  "key20": "2W5oeWCFApJWhRT7LnfuZmPWvHZQWuSKjuuWbuNe7gHmwhBJcmDuQnH4WCzNE5CKnzCRFp4Tp5XYhHupnd1tRmZ7",
  "key21": "3sN44UhNNhE6ZhHmJss2NHbGe2P7GJQ75XNqS8hk5LjHLjgJZRgyxNLeSQYhVF2vfGLDbciPXYkhtdoVL6PMoXCB",
  "key22": "2JJqdHSYEuCe7CZeV9yQeuwsryfAr8aZTbbg2NC5FvdxFKtiqYgnHw9PKMVqcdpy2ULVQjMi1DtXs7zYiXjKvLV5",
  "key23": "2WnR3MEwX71d1Uz97ogckqrweihdzdmFC5Ng7Wtsg98dBfEzK61V5Q8RKYQKRAukiKR78ShVzmFiMC36CHipUjeK",
  "key24": "2xnKKsGcBgPv4x3FuLibBGdA24HTAQKvJHUcMFgUeswRuPGuAqpsB5mFu9GzGyHiSq8FwFKcn7fUHh3ssAi8SwLR",
  "key25": "nCgz5HA55jwgQ6ab8W5fUkoJXqk9xjvXavY1iELGzLYvvokk7TVR3oe294C7pEBW5bFWMsiWhUvP1FxoPSj9fVw",
  "key26": "2bqySryJ9H7DDtY4yFgFRFvsyKbwC4XhKkY3LakssuKPfr429perkUX45PqBmeLk4QQHqZBm2jpH8g7g69V31rQS",
  "key27": "5E9xdy63bc8rdzE3wUpNcMR9yb8kYprkASJkQkMLUs2vGtyN6JqHu6HqYmENVRE2egskvpe1iM2NGKf82daSbp3s",
  "key28": "3YTU9JijRKWJPhq1E35sJR6G7GEcsFWVhCJ2SaHYVDCaJz7vTHSjMFhBbJuBBKefoddUbKmsPNE5qgJDXYzdaaqV",
  "key29": "4AvDCfFFDYUrzqGofmEdcUdLZ6HeuCWNNPunGw689MWZQB5dAHYgaXMwQbe8SQE9WrSGnd7tNZPvuPsCWjFb2KCd",
  "key30": "5exsUHjvM4DK2hxoGkdShWQTN7SCcymz2JFyqrWhzNosVP865Hj2DFgCzw2SR81gUqpNKBmok89XZbc5g3d8wJbH",
  "key31": "5jtjG87Pes3PgQnk4wCifv5FuCPzB8kkEFQtaBX7v1Eru9KUvWrA4MyjabwBoKViA7CzDdpYYRqbJ4sdaSSxakkM",
  "key32": "4uPxmVzTCpA1vdZU1WfwMtoX8yWo3mxhqNn9dvtNYEbGC2jgiwtLCk5a2wmnqKYpfgKXgmTjgG31z7PXNy4pLsuT",
  "key33": "5tBJaBN2q1cQdhGP4Qq8okcHp2cDrfVmXi2t8Pk54CsZRD5WP3MnaU9HugPCynSjygan7Ch8G9oVsz5RhMH5EK39",
  "key34": "SKASAuPEhR9h7rvVsP9NEE1Mb7LVvLjr1A1irf2umHy2NYi5QKHiKEAwCPFqt61VyQQZGwbnmffk1Hz2uaCWVcD",
  "key35": "5TQC5kCb2KQNCHWjTc7h6ZYpPJbzDSF53jwZhxaX8bCN9ykcWY8mQQoaXCU95XA9sHrmVZbwWh36gMSaZ7oNWyjd",
  "key36": "46DvxGUdB3DVy7anm4zQc1E4gMGgnBMuPvntb5G76vN3djdTdW1qKpUEccRAf3tTBqbBqPzFq2MHuQABWn4FoEZU",
  "key37": "ArLKPakCgbTp2DqucN4VNv5ycuT3N7AL426K4MYiiZn4MGeQP4x1a5fymBMpRtiCTU6WHboMv6fXmDNpjfJzE7r",
  "key38": "2nVTHkVASMXdbWgezn98GiVzFZooqK6HZkL5fCfEyrWCmokMo1mzppQmJS8k6gmUsxnMDp8UJbLQiTK2wWzGVS7N",
  "key39": "wDqaDmqJRtehZMzwykxRAmaJu4iQkJExTYFWEREytS5KM98X9w6dGBQUKnZcvQ1mnd5DSJqJ1adDHBmqWTsd8DZ",
  "key40": "Ld8Ta1gbRUmHdaj4jjYUkG8FaRKK514Be7gEhdtrqdhhTgssAYtwjbpFBhUCcd6ud1ZL7ftjLggRRbKdicJ884p",
  "key41": "2bSETgLckzgkL6WXV3jYarGxp5QmnrpcXyyEXt66GemyL2TWLN9x3DJ5CXVVpYq9DaVcw1GbVqDpoc6FaBinFS1L",
  "key42": "4XVFKmUtwT8VTbJgcLhtbuLbZoVWAiwugcw4vSda6taYuUfnCEgYsFYJWn6W9Yfqk2AdtHNgr3UjFUJnSgQsKuBa"
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
