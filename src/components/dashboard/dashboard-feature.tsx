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
    "JJe8ReKu9HjBhdcrYaaHjPiv8dyUAVrcSoWS5R3N7AhMQ6nN98iM99srNewsShKfV8fGQENKn6rCtSEXWgScG54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sXVFcNSwkYR8V4FteT6Ne6f2NDdRdT3WrrX1xTx23Baaepnn3rm37nsm9sejQEBgrvthxj5ESqmMTVudHDRc931",
  "key1": "4Faew45ZVbt4GxB7ygt7knti5yNnqQ9dQTWeEHdoujj4NCFkMaTxwuj6ddkeTaAnEragPbGSR7CuPgPXqqNVwJmu",
  "key2": "4vhh6seNMmcL6BcDWeXmMLq86gWx9FnVYMRoykct96YLBdjDD7iYpPXnVujceX7nhUKgPFrLobyJwHNuzXUSZUjh",
  "key3": "zv1vVFU9ptJp1V5YiaP2J7P62pMct7zyUZVvBcCZzxM9CRey2h3DxnXBtfGJxKuEYPw7UHy3dKYJiqnj1aA7td8",
  "key4": "VXUnNQzXZ6MCitKC5M1Ewgq6FAKAX9kBQzwUN2RHZJdqdfLcppK4AM3e2Uc1gEuBEw8c5XVNEGuv6xuSEKbJ9Ty",
  "key5": "ScLicuBG2Nb8WaS4oU2536UmyB3jJSHUrt51UcHntfA6hBN29acP87uPsu4Qcka6pvo3hAmvTtzZ4M9a55sqwUk",
  "key6": "2tH5MHqm4McSjHtRHV7J5PJ2QUpvqp1qQq1mGbSJWDXFyLbavrthVzBhtKmc3P1Hw8eGb1e3a2b7eBDi6vF9Rwqw",
  "key7": "596B71EJ6XzXLfU2tfnq7TKE7z5JiWFR1nmdhFJmD4c16GyZ7U7N1EvEuqLveSJYoiZ6ETYPjtBfY6F2qyGLg2En",
  "key8": "32noCVSVpdvTuzrZBqBnyTDHHdrXNrbi8MksEhg7mNZDPcAsS96q63U9EhLaNJb1Ly6vyeSPivYcf4mpMRaUjBDw",
  "key9": "59ZwXsMCE6rK9RY9Cms4Vg4uHD65wXBRhWXjStUXU5nrmSXTXe4Rh9sTdL3CaQoe1y1Ggs7UBqGDLoYAbMjKz8Bp",
  "key10": "46eay8w1hswphCj7fzHsb1opr5RsX6DGgbPoHKFzbDvvUZumsLoToKkdfcL1cDHPwSJL6WjCs9Sbov1iMsTfUv8H",
  "key11": "3Jt8Am7EvwehiUghKFyHpVDgZfUXnmLDy2sFWPZCngT6TTsSvjayH2zu7fQEowPesqtUKuUWbHD66DDWtShURPcN",
  "key12": "25v5AFGwC2rahhyRfz8ajFoKPq2KCrnyyXGkqMKKHqu23KzVjNzpNCBvYn33YhCi55Sr3aot3L3ptMLMWQ5mw9Pi",
  "key13": "5JpSNwjYxc7ddu2ARcm8qEFQAbYhVXHYXSGQrhnMsSAp3kKpG4VVbRdmAW1Cg4bXCxDJw49nyV3Gxk65kP35FGC3",
  "key14": "9MmymvmQzi9X2jrc3nw5UDkj3CJURXHsqMyin3c4mNPiAqATtFwwFJsLF4A4ifXpWxV47j6oMTMG8YATM1HWqh6",
  "key15": "AzNQvmeYsyUKjDTV5oWw79XcQsp4AMPgQinp8Cayam47TbNLEw6YNu76muy7zmeJvGAbt2y96r6u113mkdj5crs",
  "key16": "4trAX9fnPNWA4QcyroY5dx7eGve2QwrA6eCx2iSZypQhQvCQriWkfLvCz2xo7TqKSQK8MBmBhxhUhjP2QBgNoPrN",
  "key17": "5zzFPhBrvzzaGCkPw3PAX2ic5vXxXB7hSCwqmtic168Pi6q2BEJMN6URJFZ48FBHaZndBzH9rf1RML6RqvfePL3K",
  "key18": "3Tob3ZBB8Tn6ij1TYFsmqXwxHk8dptrEgM8LkneVSTBcSYuA6HaW3J3aS7hC6dWwVbkpyFPKmhHzA7bMj4kRyQLx",
  "key19": "4hcNorMUNayLYgQ8G7tHEEUj1jsdYC13YCsCzFHzEirazpXZokv6nnz9u4jruncmtFiVkcY7W6j6nsX7PHB78zZ8",
  "key20": "4LHq4WARnzAawmwUL53a5wVGZby2vQcViqDwjdFR7rexYw9GELppL3ftH18DJTdhe7fxAjDWvwkQBXGer6c2cdfP",
  "key21": "2ScNUR54bLNLVoHScvzy91EAw3UGZv5wmqCeprhtN9Lvxz9JK2wja5xuLmigbQDQ16pvBb2LoHogRs7gRbGBQ2WH",
  "key22": "46y2sQ8aQoDKj8maRp398ZbKHgnMAtiyVosBJh1NEnKJJHqwbZmxjdW2r1z7kiyAfoi5qgLGuZDEaGk6HQWJkKv9",
  "key23": "3shHfaoin5Btgezc3zqJ5nEfUJRCbQcdaqbSJsiLigFnwfRTxmv2VbbxfBtmKjW4TJNUrT2wtoNjF6FQLDiACxX",
  "key24": "5EPZZZK1YYDACcz8qnigwa3kgCMNEQVfTvJwD7E7NfBsnpQ9VQUb8wp6ykqMCzpyfmdY4Q7XNkMbaofqSAvDLyVg",
  "key25": "nkz3Ncw7KuDJrDVHeXY68WUpoD3JaXm9EMWPMFjRcgzzVDQK3Ac4NnrM43RBJ46Nso9Nsp5zyJphXNKxPbGFSH9",
  "key26": "5fWCMgvAwjWkbARYyRe6CgyfNDvms8kUp5Td7V5jsUqgQqxrPvF3guvqBsaM76g8EGN6uphs5swncWFxnfricRrk",
  "key27": "3Qixj3R2ENZeJVC9yJzX8eeQP3EoJpwVUxmvrsReqfQDJbu1FGNzZJdhX31HDVV47TkNSWt8mSskKaQu14Spr71c",
  "key28": "5R2K1zKztJ5oAaAoYV3XAoK9yFgbAoWQxdWytL2YtoV7BgJdC5Fvt7RHAMA6mNEZkL9mhdxCczKEmdUZCMSq7WTC",
  "key29": "2dNgC2Q5W18tvurz1CPBU6PoqfAbzDHQvYnDfHAspoWf3kmQkLgU4oHAQ1h5dduyESK2ua9xYWUd6AWb8xh5n9Rt"
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
