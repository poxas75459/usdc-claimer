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
    "3p5QUrTHrkryinp5sUUGtjxF3nKj6jE2GLYxBYFPiKyreYPaKhVQRyQEwnjZPGopE9ZRS56n5pEbc9LUzYKfbXQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HEsnMHYsFffjqZxYAUmCwrTNkWHahCxZ1npBwFbJi2SqZbRxaqPvghfF37PM5QzadiNB2f8qkwaSYFSeTYBDL6B",
  "key1": "LFTQ6ghgGyXeJZECNdHtdK9L6ZP78QExuHwPXnKk1wdK4FTMmQPDJwhYzT8E6j8yaTVn2qADprqbgCeHjG2Mocg",
  "key2": "67X1nDaRdPcFzm6it7U7ow7yWjmzirKKki3hkrhFwktGUyGYjjk4BbGhEy9qjQnJt4oGoQAe9R4xm2sudfhPaC2s",
  "key3": "rxMxtdCNqtJcm7rzxiudymbQc3BtZmbVu4FQsm85RwM3eSZKrsdYNHoHHbwfowuAGzcVCnhdouUCV6fnsDMneQf",
  "key4": "5M5W8SzL7DSutYGfGf8wMF2xt3ghnbbMdUsftniENJ6g4sHZvVxmzMnkUC5yfMEywVJEmJqper4w3L7t1cCjtBw1",
  "key5": "5eTzYSm6LNtUhmAWsQNqbC1fspZrQKvfRtSGaPzCfuQd3JEwK8VJZDNWZqnj1SFxkTvUV4j2r2FvjjNBxLPj1Rp6",
  "key6": "2unj1bt2Q8RAxE2dUnbWMD5648nCk4GRXGhiqsZ8Bv92NZn93T1Arn7Hts8hHv4uKNZSZTCR7Y94cDyxQxsEfBda",
  "key7": "4K2oQiNmUQjN2drQexsF64egYJGrqsv6v3B3qZMFDztGVZZQdMzjNqA3ZwWHn77UJTPWSixizib4JX1VJH4uyH1R",
  "key8": "4YJk2rtxorBWL8cNQDu7KfffF4Bx687WpksG3aZ1mKgLcXpbmJW3LWL1MsoekNaC8ySq3V4tB8v9U6Nb2bvkKrRr",
  "key9": "2fB1VQWojpmeTHcrPz4WCo6pWifXgLArRKNRTuHNPAZbKEs9emaVgnWNZGuaqGx1HaNgZXnQGsTuKJfF5xhKJPF4",
  "key10": "5j3YLzm42bPM6JK4ohNxkqBN97zG7hw2QkWTHEwUPhhawrQiwco74J6QwfKaepgP1amcY1nxPwV5oebL7rfQo8R8",
  "key11": "4R9Aavs3wdUrWzoVjBbnHvdjK73Cay7J89qEjfkxfgmJCEdX5N6TzpVH8xYQajb7jtmjiyyebTVWEErcNFfyrBfW",
  "key12": "5tvGW1kQ3wrsPZYu5ACBvSSKUV3UZsRxFmkygYTP1dxEapo1sK9FVm3uK72HivUw9tVqhtNjkA8yzshhDVf2wcrk",
  "key13": "sFG8U3yXWmQdr9MuyHFtboUoK7TS7ZbmnwU5cBCPDFLJAwSkSTywaEghGMntV7JdtC7g6u9WrEmJTgH2frjJGGc",
  "key14": "4v5Lme7qw4hxHUKRVN5MfennmW8xU7bDS6LenzNMDvbKaFYUjS7M38PgK25rF2i9NGQmFBKQ1zizxK3iimGVf4Y1",
  "key15": "4BWmTztPy28bKqXT9uc8FkGoPQux7CJFQV8wpk9zxANEaEgp9itThNrgpKFfPgQba16kQrc2ji1Fx15v2RVoZh4X",
  "key16": "3qRQa5ebwsCdtaDJMGVzNoCdWBgGPHXLUck2SnNa9rQPR59KRvKCqCFhNZjBkENzRym5XDX1axuh5585fT9WgLgH",
  "key17": "4pyk3uF28mkXqqDpnkuFrnyT14m6W2SWEFiVsEJQQ55LQuAg4tXj9w6GpfkaCcszxrWGRbxN7HM7yFjMFqYStMoc",
  "key18": "szdpHJMPNSh3shSWek7pjUCsdQyc8BsXAQaneSyxCzUGvr9N8THsNtLzQJsezvrs4GD5AzL3RzzNBuCPidCSXSH",
  "key19": "2Zkhmp9j6qUyxiptzotVBqVrho4NgbZDe957vmVzbuNPCJW7WU2GqHp1cdWGnGqb2XAbuwCrcdwyAh8jYgvqgL3d",
  "key20": "uDpsKXgrkQPaaEY7rCtFQLHWfnP96GDug4hwXJEMBnyMPYt1Uq1S1tEsbW3M4PWwefg2s8pFhmHGdjd3E58L3YR",
  "key21": "3dn1k4kjoPPW7qvT5bBD1e49rjT12aCDAdCXEjhNoq6RikfJEzaweavuLuZ3RW8EfH2sTV3PLkxGLMNvVuNoGGC1",
  "key22": "2Qy44AK1tBYdGyepsyckTYmLFyus7Vmhqcg1SjKwPaWmybnwQ5yWEr94S7XeqUKsq3ewNuBkc84dGW3B6d7Bc4SE",
  "key23": "43EAKoSrUiUB4ZEg2QDoe9AS5uPgSWVTHGYrbp9956CnGpiQHv115iote23SqA7kPFPKWH4MzKBXQsz7hHNBBeXs",
  "key24": "56gjxzkxs8eA3KSbP9Cuzi1CgQto9VPJhmgN1onno6tL1jJmUv5YQU58vFmjSWKBAUzPCCYNbpkoshg64PkzLWZd",
  "key25": "5FyHX85iq6SgdRUscKxvtwPJ1kZYunNruF6W32593t8iAhQ8Q2WyS4tC9Qic36heUnQRRz1Utybvfx1RohRrxkGh"
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
