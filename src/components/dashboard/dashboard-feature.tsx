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
    "Gr22PSWGbqh4L6dYq9Bb2NJH8hn5qYdf3sXKYcpzqtbqBDrAEGddxhCYEXRK2zNsYTeBZaXULStpso6FBwaq1Da"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TdYFqWp26tT9M2qveQMHzuxhr6qNkQ34rXn6Z3Jca7A7eYiTaRGMhwM3wRkNcogZEc9PCEvTo7URNSvZjRoVepu",
  "key1": "4LwVWStPNZefztQ3FN9kGW9Rm9uRda9Zcms9VCXu2fdcxhRrHq1U5EKxacHpe6J2fNhLc7SepZkgwmBGvx1DXrff",
  "key2": "4pKJk2e6pYMKsvfVHocijtQeT5MyKGUvsQQvsHKbre7Sr6fbKfH3PVgti57b8xBWo5jfzDZuoZyWCEK3d5FEmwoa",
  "key3": "5xceNxJDvGvEhUWC2L1LbMYmZFkusHmB3pVgfRpfL2uZ4meWt4UaATpZ2mox12AxuJ5CxEMHo9qAL12F6YfF8xiv",
  "key4": "5y3KHuaoqQ5A3H3hoUDj833jsxQ4n9Cj7Y7GHJ9TsvVqikS1fwN4thPviSZj5LLyvKeewteq5XcsvPS423J8sor6",
  "key5": "VZJfsmbDSwgaEzEma3QnJLsHEtYGehSNNBUfWib7LN8yXVqrm2umxFatFRXc7LJ9Pa1ZyY3d75qA3WPkRaDQCPe",
  "key6": "2FVaWQVUqWUrNCS5dtPgSWtTQ2HdskNkauuT9AP6y9yzTWFvgwpRRp75dCP8VGMioLXPiB4vfY35kuqquKhUMkyB",
  "key7": "gkGFYq9DN7Z1gzr5k5SLKpN8pJfzNVyCNgJM4f1grvaytxB1GV3wt6wuMEXQwEERvkjYw6NeAJXhTxdvhaJsbv6",
  "key8": "mCYtsujRi6v1qKYXKMnVJHrqrf73ybh3ps7foq2QxP8JL5Ko1jPTiAnEnMJjUzyU4S3GktfBCv13Y1s3x3s4qtj",
  "key9": "33AHEjGuXead16EGqwxR2PnQLRTG6Yu338UHQXDMubTvHMyTj8aqm3hsmM4zbdhKN1VvdbEaXYXaV6bJYV33Cgtn",
  "key10": "5GuEdNhfKqsefvjA4BYjXsAVcap8gJAcGQidCSC2b9BMNYHu6kXspBbGHjqejjmv6XBiznxGf3m7ve2zs33X9TrU",
  "key11": "3gutgviuXQTtNasiwdUBr2cLj9r2pj4Na6zfuaEFM5FZLidpbEY4s34EVZ86RhcgGhjjkaXeBEZhhkfXCACyKH67",
  "key12": "c2tz82D5KXTAnypdqTiMF5qwV9FGaPrRtLZD3CbJDzEeawhmHpDye9ai7ipVPmmLLzrovBZpgEfHT2JvFNi6r8T",
  "key13": "2N9M2dwhScGHeMU4ncWd2Cv5bW166WsJ3ZHBRMaYV355DqBgkmaV42tRiaCPDCmA71mD7krMWZ9G6T2dwJesjQky",
  "key14": "4NBukeyFgZBMD1PbZsKYdqPcFJqCiMqi7ubK8zaaPVu1iE1Yx2vTv64r1L6XtpBuZ5tDDa7KbWWw6KAxB4iq5ryR",
  "key15": "jis7R4xGMHiu21rmoVmBDQq5F8pjTitifiPMznCWu7ZmvHFeh85Siw5YRspvpL7tRwtdd9SmUV68LNvPzq2phrJ",
  "key16": "4Qw6wexeGUmUqm3nnkTnBWHATZcZLH1bnAF2Yx9RgoHzShFo8PQYM22r2Cbbx1WZUfqU7kGEdjCGc9jBfkeV149F",
  "key17": "3W7reZqqDUc6pFNac23E92dAo2euihQFYLERrXUdfmD8zfsabxcnxxNwjuxSWJrwDDzvXDaUF2icoiV5dTLutz5r",
  "key18": "AAZ6nprxnEqrGfLFovCSEGnpVSDTB3S22QmsFDC8c1SnguExPCuTpXw4VnEwSrfzERYekaB35skRtXtxnPykLTW",
  "key19": "4AivANtDGjQUbFX4pcMNZtdKPTThZMzFnixFsSQ5E4MZ2Dva4tgCVHBE7ybDMvcnbjFooPt65R4XNEY8VxQQNPhA",
  "key20": "5Ezt49jQ7gRiheMwznofUKJZuUMiyJrzdVRwiYZvv7iBR3v6qCJp7gfN8zryY1WL7ktE4yfHYQckbzjZH59weZnq",
  "key21": "5A2apc8cT6wA4Nvqe56RB5Z42btXGADM5cppuEEA62jsqQieUAA9o2brCyQD4awB2BnPfQFSKgKtn1TBJGeeGUFD",
  "key22": "4xyFjtW9e8vkDgNsgmD6MusbCRGTKRuPaqa6c5xK14DZxkgrh9sHDWwT55q5UGmDoG9ZLJucArbHDM32niMmoBeS",
  "key23": "2tRBzfQ6dRFupcziRziDEeQPR7NFnZzd9Fhgfp9G4wGriXNTEPbYeBWNWHqNRdrVH4NLAPYfwGNMRYQRZRqjyn9n",
  "key24": "3ZkCGc1zg6unh6d8h4We64APVVc2ZK5L1NVVRpnL4Jb4kQQyU3bf87UC4DGKx8C1EZ3eaAvVBgombN7nQxqm9pPy",
  "key25": "3SU3hWpqnfnLGbHhFEw7xemrD1QbBRf3JkoFDP4zBAgRBHBGkM7RpKCsAkYtZ4Km52YtTxqCLGB4jALyEmoH9z9d",
  "key26": "33y7D3hRaEVwjT7MhArcgrk6AhLt8o14gv12jnmMM2sWJfzdM6pw7MyJZdbGvt2uE7AJy9Gtf9FXZqTdkhpQ1tfY",
  "key27": "3yjR2yiPZjrSWqHzBQwpr7Wj2szUJL99rdw3AYRV5tTaeGZsi9Webt34dtU4Zj6WXFHgYBuUHPg9AFAGLt4kssHQ",
  "key28": "4LT3EJGKQozzjjTaQb4B9ezy4G3J2u6PDWRjgeJhMzQBkwvf8AN1R9nhnJrXhUgM8Xgc3EnXWwiddbhiesGv8CUN",
  "key29": "MCHo1VQoS6viKProiJmyMT4cMFd4FkxE9SW9mkEwpmj5Jg8BdMTX58c67aEQLR8XNfhYRn3cbVPcty8AtTLdn3D",
  "key30": "3aoBrK7di4NjLpP9Lha1i2q4HeHR25vkmzVyJjg3NgDnk5zYiHoSg1xhotXgcJNU9aUZXVx9PD2GeXyf8LQSYL7M",
  "key31": "4qzaoK9WZwWZxqDKYz5NXtGUiH97wnE9DRWtNeETWpGAcN97b1FhKRuD7xPs6KE7QHkuTvJGY9Cazj9RwdUQ2Nqi",
  "key32": "4tZU2G3ebcnbxyshfEEu14BUqUb9vMFp5YmUN7yroJBVePnkd5JtVbdtCw5mCx4JZiYooNB9j2aBgAMV7R95w3iR",
  "key33": "4tmb65nHiSVSEKRGm1FwmanxjGvhZs3gFpHh4EmoDWEHscs6AowQUn7mXt2GccUF3CTpCYu5inN6uARbT4fHZcyG",
  "key34": "5zUbU4tqtiQPpodadrspHXtLPfRHKPuDy6LndzeoqtM9Yj7Ym1JQAPJbK9PS5c3JeXkTibwFz8JDQ6wAangC2N4d",
  "key35": "2fkT9KUwo7zDX1XxHyA533dv3J55g2sD2HvXWVq133dgmXu6QjJwV49merz3hKNR2yRVCabmDRAXNWYYBktUfMBy",
  "key36": "bcmR6VpSVC81W3Fyue59CRYvESpAtzTWwqjHHGfyC5fhqA6kTXUwcNrLpgaupYzGjTccL37eun1CMoNXtvJAAMr",
  "key37": "3GJkYQEQEBRvrhPt2Tx6JqM9R1uc34HcQsVxAW6pEouZpz2smLimtaqvsM4wUe2bh5nVWAGgKbXFz9TJM1aBMWkw",
  "key38": "aC7UjXw3FedBAuQ2YYR5WZsYniV1HEpjdFW9HY4eVqZGZPT8xKtXsj8JJ5TQ5XqctVz7ppyi1HuVEsvKW6RrP33",
  "key39": "2sqx1Sbf7n4ZFfkPFFmSKeDwtZko5zXJYzAbCQy3kcjevw9tQGizLsH46HEudjgMfvVfDx1CwYUy81odVSPQ2PAM",
  "key40": "3C263NaoZygcu3CXnEBQojgzUPr8kKmddLV6NtWKP8Ec38fkkusi6LeGHTdUPoENvG7JHC5qAysWFKMP8zjK53w5"
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
