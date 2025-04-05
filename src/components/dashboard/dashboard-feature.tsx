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
    "fnSs8hiG87FJLHLD2tX4ZYpAJRHH6jHqNSuYmvMopfdhcfEgcQd95iq4bTbgedjMSMSkeEAzZ8vmjGat2EbUQ9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vaEyZ6kN8moexUgYCFSBJxiKQWvKYv6CRbC7GquhwiMrQiw7VA8DD4M5CQgndTEUE9AXhihdy4C3KGx7n9pxLSj",
  "key1": "39i9TePgHZFSiXfoufVsfKr9xSMYM2y562w8rAYcst3ntnqrB47Lti6tzZPSr29UYnbKECSjE2k8VHNZ5xQHw9iE",
  "key2": "59PEEQ8EqPh5oiJaVPAHqDYYHQJ6bFLwjt2rUgSfzaXVrnkUXZ6ivvmfFt7EjbWp8LwtZekLs9cYPZFf9TtGCSWu",
  "key3": "2FErvsharuVwEveXbg4RwTNnXhVW7cb9C1nMwEMjsNFJxpcWYV288PApjYaq6jLYG3EQx2cXoc7ebajydCviQJVG",
  "key4": "oFB5G4bTgHjmn9k6kKaB5aQteNjNMtbK4HuPQXDUgzjRfvM5Jjm4HFunpnAo8Y4d6DT7xuUe6e2EBBYY2eR5nGj",
  "key5": "5PoMF7NK4uA9G8KH7Myb1CWngMGpXPErvKNF6ei5YG1zaSZqqi9vVuudPYBQnmE99VKj83pagWNegnECKDAeQ1k2",
  "key6": "djTcR2k2YjQeSHo6LDrmSdRVho5wpZhwiNCarQAGxiznYRYfVSXyf7XvvmuT5sEaNQQdcpVRCmeV85VuKr8U5Rp",
  "key7": "5hgVgoLsTQNb1nGhv6kgHRf7GkDjNu1KGtrsbVQBhCdFFdJ7ZW8UPph8akWS1csiqLAfQGfJ9WhtqycJkrz919YT",
  "key8": "4pzCQbtcRHwhY3gexBPW2nodzSouCWk1Wm4vzuMBpSCRNhTuEeorb9KJjtScqppZJwbgQanvRo9kLzWJ53aGby3E",
  "key9": "5Va21Z5hBuGT9N96iMYuD8bNoHx7EXEezSFh2xKnNMW68fqRst7HKDG95g39Mxsbfwmo1qoaK1MiHk6bmmL1Dqnw",
  "key10": "5NcCf43HZbcYpPANuum2vCp1j5P6nLLyp95xEXwW7X6c5KRS7r3FgQ7bUwCfyxRPUDzctKt7xUZHoksk647nbMxc",
  "key11": "6cA1fCLyQiNJYc2yNJGktKu2kewEuWNTJwHsLESN51cryBjfedMPZSBo1ReoiAf3xEfG1ZdbfnTdR6MVyX7L7rH",
  "key12": "5Svjp5f6syxHJqeU8zZZAz86XzKPNBNBPM3EnqgEJkR5ztXb6kQAMNzqRU1HkH6ob8Tr55etFM1J1S4b1dhFWcjy",
  "key13": "5F8g5F2WcE9DpwtJHjB9g8qytUfDj91mw58tvSKPHFiETUneSCorVj9qr6SwCnnu3FybKHqLxqxfHFpis3o4Jc2",
  "key14": "SHMfey6Jk74Zxm8GmxwQua2rGWcyLiUJjhDwsraP3KiPrFSzzgpvHTVmsUuawmpa1pLqZ2hEvrtL3QNMTJR1m7t",
  "key15": "4AzT8krkbtep8ZpPPkFLQEeUWHpDNbwHCAf6RfyRyXfAxsz68Bu2YiDeKZfHzGcFQPgjhU7FxThUWiDNNYGBTHP5",
  "key16": "5XvcmobDyA7XDht5Myq2rUqjgtU3NhV7T66iA6ZB5uwJZzxRcantsctFemVfPBNSm4pkbjYtFXRA33YSWo3Kt8Dx",
  "key17": "32EstDbxKzN7MXE5KmrZQw1kwM9q4qbLayVW2UeXWXwmX2AdNDXTdEaS8hVpAiiW15dKsndB9fs4YxDEugcRgZgQ",
  "key18": "32p3z64LUtGKsVb13v5yxWJCSb3km3kUQhMzTGswrPTRCTTRGiv6CWE7aXqHzwnyEBGh9DVPwg58PQrHZ81CUzqV",
  "key19": "oQfLXmpHZrikFHmyBPg2ntFjKXrXGhBEK9mNcJHgcK82ujxtc9XihbdQh9Tthkes7SB6afJBVohPy6m1b72DoPB",
  "key20": "2sK7mZxA4YUFECAT3YBL4a3R4jbc9nqsTrdXiEnRhynjCyq3LHceJmwH4hvTk8C1t8b431fLQCTvFbnEfhoRAynC",
  "key21": "2VBNjQ9Wv62SQJ5rhdbs7bJy4CAAdz78V9X6AojHZNN3RR9aewDyYsnNGvLMMYTtxTUUojXHgJ5nHeg97YaqRDu2",
  "key22": "2LbZqvReYrmJQrrTGboRuptwdVWGPN98N4JApKpoy2P7LHonLTkd54kNPZdZKDqmhR5PLPsNF49y4yRVY7NELKwA",
  "key23": "3WkgvHBgzaPJsvnXQJExuPcLiZYRYtKyVC7mnEynZhvKVj6xTqrx1J84ZVZgXGhoDrNEbZBRAwnWzLMb816pRTcA",
  "key24": "65tP6QATz6oc6Z8fNWHtXqCEzr4vqUqrHmze96sbzyTu8rmVKWhbSDAGCFXHi6BxcN4sr7os1ftH14Z66Bj8fZry",
  "key25": "7JwsyCcgFJn9r2xEx5dDXjZGGawtGqXC14DdkVimzsbUf5tjadcHve6X2QXSHTWdAy54YkZ2tKxomJEw2mf199b",
  "key26": "degswCqDVw5H1edwkdGURSa3ft7FWDLswVAtLM8hmTz2cd7aV7s2a8n1scUFStfWZAFZ9mu9cJLHeL8NcRtrjdH",
  "key27": "3jAZfn3EEJpvZxqX7nw4A76iC7FhuYbBkkBR1nDjjCtLEidPdeeu27yhf1aPJRaJ9r4cQxGZF7YruW5MtHhxEZRn",
  "key28": "3MYwVz3NDRX76Pni55Swrc7iwj75FfbJSjyAoNjVfp1wWZ3EawFLhUFGs9YQnECCbuCRJ1s8croinMievzgWWRRm",
  "key29": "ZN29CJjG1pADGkPbmTHLQxhNHKp6S7Usgrv1jG1aYspfRDb4RFKv8CS5Jhnc1Sh18EBxYhy9fofFd4f79xYBDyP",
  "key30": "33Bd7VxBWkReJmMBaU5m9wvyDHVv22jejhQD5FmfGWUbKbDQEab25RMuRVfn4E8k5zysK9KZsrp87D1PLNvV6rdi",
  "key31": "4fHGD8WurrPjdu6TnTEKDaxPZmhMMJuVzJv91MmuzYgRiSs6d9bGsFUoHyr9RPPyCozqr57ZXu1x8cAVFsQWgjgK",
  "key32": "2YLFuULDhPGTmHbkJUT6fGVvrXd2AegBH1KZDTLGYnXtgYLvhuGzYRHNdK43TbWj3uxk96N9PBN6cx42yFYRxsVB",
  "key33": "5XpkP8Lo1kkyW8NeKA4ggA7XeBbMoLeoyYbzimdU8cSVuY7dNp8tkSLoQJ6HX46wfNkzpENG9eqBgYzE3tRLVkGc",
  "key34": "2bkg2RteuqmEinkSHfceXaZV4kPDmkACmYybRQ2Zx6dBPbPqqV14fsJc51JkfJ1b6gQJYTc2dDe3BNb9N97Xz7Rm",
  "key35": "4wEAPPyfMAwoSH6mvoK54acBBAyi7rX9A1Wg7Ca49ZDXK5gRWJdZbu1dBfG7rT69fivKFF7R9shXPZMzvWA3JBqh",
  "key36": "3GZmXDziUh2NRVcAoLE3aLMY7z5WqKBsgsh5p5DNXrD8b6YMiXkPSmHZCrNiTpC3JHpWxGP23MEa6S6VGRMmXBT8",
  "key37": "4LdgrJ6KpZ5cqpAK1vY9nvt2ahR5HPzaDrvE6z6GhHSdd8ZxfmeBgcHPyw23NyTE8GVtVLfdZzAF32x48HhdQtsJ",
  "key38": "4PkM88tEdHszj1hQeJTddWVQ4eqiUTUaaEqEHvuFynw8VMGkqdb1WnTnA9kWW941p6j3pVbN3pxEqSnM4itTB9cD"
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
