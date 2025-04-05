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
    "2YBGRZJZFpgmbirNQTksFLvNv6fJvPSodS1aasLHHgpYKzDS4zJ3QyLYbw4fh7sx1jFKTrG1x2BXGEVj8RtocBuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nqRb4xwdjF2iJ7cReYohhV6nTNQJT6ZsSNExPyhJJZLhi3BFoX6SbgDwVuBFdq9JJNPHmnCSMLDy7a1iV2be46s",
  "key1": "Ye67sF8VmkFkf8NFHkFtVkquumQhfAkgop5hyVjwmoHehfZWQV2ZPcWTq1soHHiDiLvYS2oLFZbENhFwMXDvdjw",
  "key2": "2y7YSBUAwWV53pJ8yQphUdCbF88SdgVrhYRmQEwb1iXd3RLPGdXWHaC1XUPLgyofuZtzSVpu4LmYQJsozDs5YAC4",
  "key3": "3BVe8sDcxss8ZKNikaseBd2XskZzP1JKfzSfZ4v2tXWYX4v2nbsNWzGaTjta45TaHHd34FFYKWvGthbwfsy8L65n",
  "key4": "MAjksePE7MpRVfHVcX6WvZxuRmsgMaLvfdLPEUBviW8dKt2zRYJcoWTnnyUXGXcYh9FH7eXcwV5CdQnuqcUSeFX",
  "key5": "2Az3U8UjLHv9v98BZgWBiK6T6jpGSWU1vGkhcH5dU68CLJMDi1hs9fjDanXgQVSg6skxtZejheTRxVJdy3cZH4mp",
  "key6": "45AtarhUrDbRZ6cnycqtsYrqjHL1veNvJGo1bzrPvJqhRdYicHSzKN1fUQYZ24ou7yRfSqoyWReVY5CWoK2d6VSp",
  "key7": "hv1WXpBgKQURkUwYdPvfBB7uNrx6xS8XKKkB9siXXHHeXMgpktcqGXL171FqhTzvCubkgeEipsEGwemzNciC7JD",
  "key8": "3pfm5ytXUBdC9NtJ6Mp5X4dESkDFXVCE2rZB8STfBgPiw9osYHoEMavbaprWTeGcMvE1pMtsaYk9EqY4w7uxXvXT",
  "key9": "ZPxPci18zDZCcBMtqhYQkX4MgHfAEjs79TLaFVbHkVE7Bqxwm2VW6gq23VV42JCTrotrEjYCmjNbeq3jTVmrasF",
  "key10": "3EBHDkEmy2va5W4nspRFJNVeZySKBsYauV4PU9g61Bw1Jegrk1xazvjNKo8rMH7xsRojAtkBe9xTCK6GB3AwEqrH",
  "key11": "58HoM5dVTBbfBdj659267RQmF1Qsak2BDXZdMKL6H3TN6WSiVtiWBBsQvd7GD1GDUFcHKSXcJPrn8gt8LkPbVxx1",
  "key12": "5TB4nGBaD1JXnzqSmazdmXgJZoFrusBmaj7c572FyW3wzKu67AZCPq1qGLit9XXYSBmyqz88EuqkBqW8GVyJt6FZ",
  "key13": "2TUqATZXxTKPzBSYDuAiyJJRDHYk7udQUfJqL2WabsMcnbguhaKw8Wd9a2kVqg9cduAf1FcuBRFgXzgNJJF1mZhv",
  "key14": "4pnRPMNNsBVrj8yL12ZPoVKzQDNzui5LbGdChznkubiBEgay9x645zV9AnNPJATe1VHMZ1H9rRnjSL5L7Wu3Hczs",
  "key15": "41DbctyxMh2ySQH4cPPb6jBS4J6dHx3kCirsB62nXeMjTL9bc8PM82MEWef2VuHy4UsFZRwBJbwKYTuPmJeoSv4R",
  "key16": "4fCLr9JAwwrSN6d7vHmu7JK2SZgaNTLuXcAGcsQs97MckjVs1fydnxSEUeqvSmBSJyuf9ucjgXZVfxwLnsPwHE2T",
  "key17": "Szw6mCwst7ongXeyegnZA6SMzQsBGVgSkEU5ae85hjm2uhtk89hCv6VHmAzuhiEKTdxwB5PgeAtfzA11qNsRaVH",
  "key18": "HmNnPe8gRmipktFPEBW3eHgrttUADeAGhDU9Rr82jQaen4fw9Y9Vy1pCPJbZiJhp8QKdmVgYTFqojF5WvQ3xYW4",
  "key19": "3GrJzQZg86ZdkykrDg64YgJ7NqdgzyE4xGwbdn6oufqemFcoDgowQB8fTcx3asNgmQddaGnYqNZrgpRcMbfLB1SX",
  "key20": "3aa8usXZhtpUu9iD46caLFGKauUikTquXJ4cCG3sjs9qhyqcjcSm2rmkpd6ZMenEP6DvQKUhgJPUArPDxVqFouNu",
  "key21": "2dUYwjd9bwe4sghVmAqbcbnmh41hyHzCrRGcojg2k92rAZZoeQPtZQCmfEfkQs3p98tNt4t4tFu5Yr7uyh2CaPLy",
  "key22": "58FtHtTXJswne8oTRaimzGnC5EniNUtjAKiq26ZjAfj9JfbyhUeS3EGcw1Mw7eqiXFdW92QfhTFFB27FDUzsykms",
  "key23": "5e1A61W3FRVGfaH3EgK1ADDFEAF7pvWDc28dDY39S7u4P9DBWYiLuCHwcppJWQwVGA11uGiADNLGeBwK5F5fGYrJ",
  "key24": "4q7bqfiqzdH1LTgerJuJwPhSqBb1QPGbBscRJh68k5a1BHHt3bEjQGkdnshw3B7jJry8Nu4XfmfopHkeXQxUHFXV",
  "key25": "mrEtUNGXgq11Xnuu4ZPy5cJvPzYQgVo2X1renemRtSuTCZhCSSqLPRKLzuPmmgQEtFVGPvQg1svdZm4ZaoN8Q9S",
  "key26": "2jpLFhAuLs2VWNTb6unpsvYdWL9cboyQ4qDncVHNDEGj9BNuXp5fNcg6GzuQFg2DZQGScBo8VgNCYPZDe2w2xiLH",
  "key27": "5tYvXGG5e6htb4Y6QpcnnNkqCki7pqrvNtCy1vegzyjUPJ5qa4mqAh7mAtjeQGYPoZNFz86SVnizTo98vFZdjG2j",
  "key28": "48mW3mgqTBPEnBqJwdeJXnad1ruDY1iLu5rqwuVoNykM5KUETKQmxJ5ceGe3ZqrRVcTmKrNUiyyLtuyUyFGiDFSm",
  "key29": "c7S5KV1mwpu4v65TQpHidiSHmyDjtSAzjjjLRAmriQehfoMwKWNE76APQkYyJaMeykvjX1bQEpLWW9FW3esG4Ku",
  "key30": "53Nf3sa5s65CLFk1yFhYS6Gr1waA7YDY13pffGK3vgGeND7Xnojwv9jXnKWsQbgrX3NsGNzju39USxhEya8XG5vK",
  "key31": "4ARc4i1RtLExcLC5cRbgk21bzSqL8y7sSxKvpSeE8jhgGF1AV7PQ5QfzbXRB3aDP2yFkh3aRdVU33HTYkuq4V9HR",
  "key32": "4uoZcaauWRNpTyJqhvgeD1x5oDqQ1EkFoUzUyW4Mx72ZiDrLg3WdVZea9bWpeE6w7zKbn7v1fj3qhxQ2498n2hzJ",
  "key33": "2XdFqg9xibxZJkuB2Q6kLZnZ8cCtj5acg9Xs18SrxbLmu46WfPbCHL97ip4Asdfi5DmXqbAhcuAP5f47We1c9rLT",
  "key34": "5D44r86uswsCxkDGXqahKqcW8MiF8YuxX7LVVxopkiwYRMYxQgumfueSFG1m5cipS5SR1JzCH7Pooxa2KCoybdj",
  "key35": "2Y3DpRYj2s26wW3yycoX5CUv2UrzaEWpRyFnFXb1gtU5WsXzD4xmu1Ff5wM8xmEznV6q8CGLAcoY1GiVofWvxHdV",
  "key36": "4LkSCM3jGDw79P8LDVvQVPSJEafuem8nr4DyAfTKunipjU7oGPy7VxYucgB9a8XhXeexrtQqFEkxPdukuVtdgP5",
  "key37": "3yx4T2TG1zcv5ADcpKLLZn5VME9MHmitKRo4GMHfDJob23hpDNvxRi2j8waKd4bMowFLEVbpBckFSsgQ7ksdcfCs",
  "key38": "31SzzxfJaHyfNcih8167UxCvDqRZina6i3utcpZL3e7sk4MfNzfaMKyF1XVjmT9dNrHGJk2wQmgRm3DvTcmpqELJ"
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
