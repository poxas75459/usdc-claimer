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
    "4YdT5VuujohcPVRxJwutYLZUNs5MhZQfTLBqdFaStVHFGfzcKE3XyyTQARnerNwS6tURs9hu98qP8K8S86smHFzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LZAJQFuCjr6feZRoAbbwvSALHsdHw84KLwsRW1yMXrtJJwdYSB7o9DwMpePoLDuwgg5ARgzAXNvnmZ2fmErnAw4",
  "key1": "4vASa5f2mvsyUkUpukkxN4a6uamYXrRfx3fH5jFvh4JjJ21L6RPYsNo5eU2kuAHGXEzL619PaSTTqCTKboKVRR6i",
  "key2": "5M64tzFKfb6fF6vpEuGFU5WezCxdLh9SXRajfA1SAkSLx8iVC7XZPhXTcum6zPAQhj7ZNcsj6qjZSpVzKHHvuD5Q",
  "key3": "AKcnU8JGHdjVm2UK2qzk835Eo4zrVcjTugP9SWTjq4BLJoZjny1oAsGMveM6M5SsxJR6E2CC9ZvJCLp4jiq8gMn",
  "key4": "66LT4Uwvb4QMXYe6DrY867HkqKm3Y3BzwH56ow1hEc39GJUCkwz6br2PPJKJMw6nt2d9zucHQgncxmongvQ8x6Ys",
  "key5": "4wevFqe2LayNwTzw6DEQwTKTTuHHQv3jKTjHeoYJYsmxKtBVRrr4UF1ieUCvnxYy8rqCPAtpxdf1jJUpdaY4vcRQ",
  "key6": "36v711YaX33HzfB9AsE4bVtgwLppRe3U1DC6Dh9is6ztGCdrL4rdqb9qwBasca8S78tmzsXyMDnxP1dt9HJfMP4K",
  "key7": "3YkynWzdw8VySS2z9eZu5PeoLGojow8TNN1L2Qg1uodMXUXD1NRM5mavtMahZ2fw5tTbjVpTQPXvHEw6MfGtbEpZ",
  "key8": "ibcUummTXsPoEDQXHcjLJZrCCTgi9SGtDqCGJ7vHLLVzohPwPhtUZgjxUvq9EjWdT78Bu4fTukBZ8LuzUBUkLYC",
  "key9": "3LonZnhvfee3HTPL2oXwjyq1XsLYqB6kVfuCw9zjYLmCD5bkDHuRbPUoU8TG2ft9BLTJ232r4EeB5VbBnuvaVZsP",
  "key10": "3aND8RPbytSt2hG87CjE5McN61JFEsSsbXCY4MifPiAAhWHTfiSgawo2Z1fRZRdw7L9uuZT8gnutZGUsQ11B317H",
  "key11": "4qrVGZyYEGDYLe4WdbUTZDLLmw1TkiPBWWVahwWiehCGH59CWU9nWViq95njp9DVFK8WL9oa1EXEJvJE47ZY9zeb",
  "key12": "WjAwVYvkNZDWaDHQmnYTWAiCD5hTT3x6uUNuzejoNM8UaNvqS7qUK8vXDJkekJpLAcFPNNsQty2rmiF6eE47Xjy",
  "key13": "3aCyf9zVM6pDTcozUsC5BAtT3fT77yisUfBPi2Wn5ko9P6BZo7HGcqGF4f29bKcuBmDWGdMvaWBzfJcShx7nJRbt",
  "key14": "4mwLEGLo7WRWh518Mmo9UQeFhbcbqVeXsuoE8eWjfM5whMDXz5LtYEEoytRVfjuKnHah4Goq9NNP7kDPkrHVno62",
  "key15": "T8oRgKb6NBy7oFqiaWC8yVw6EdmnS8BeNxwvBYWTSD8VktKXws6zRgMqSH1aJDAfBDehDRkawDh1C1DR3rCCT8A",
  "key16": "5QNvprfxJ9Sy3uwiHenRuPiqJpjfhbk4TyNTS5Zju4YNVQfhVLRpTyFZH9vv7jfFKLXezDS1ZacafC4SSoHsGgsA",
  "key17": "3ycwbarBtMvrv5K6v7hXahhHKL3KuggLJmhCRfhHX7cDnoCtid42Lt267zLkRbcCnS7Tyrr3sJUaebLcbSZgd2vm",
  "key18": "EPAdjKq6hdMcET1ejhAyJvrQZDFrTqSJGxhFSHAZ1TfoTk7GWWpgeEtzbRkRX156uBoshzSYLHjL4K2jcw9iEcQ",
  "key19": "3VEEeBhruQAZCWxeFvVc21J7Uh6hdnebWVrvaM8qADAwRjEjni2STRoUneXJHHAp8f1SmhmaEgwuG6vdwkFvvWKZ",
  "key20": "3gKnPGzVfu5kvAae7UZyoh94Cz6GHcy3fh4AFxunQMYLefcGATaA4U9QgR6J5iqgQ7jcFKDJCYMpLrziL7WX72ea",
  "key21": "4VKMYYT3U9Ya577jf5PJcdYPkHquEq26wGcEJ97JbirJFaPLwMWShySu3aiKwJjRQbNHFwAavSsA5kaQeXWet5ox",
  "key22": "kqTS7Q9zZAu9FbP4hZNjKrekMhkcxriW9Cw3bLxZDH92jbx4MxagHvgAifVmwq1V5Zk3FrWG49SSBTwxcMM97bG",
  "key23": "2S7ivbwxoC1mR7DKbUi2D5Fi9ibMdRZpWJtVk7zVJqvgrxAVsswrjQe5vfVQteFpd7vRF8aUkc59eNaRHngWZEGC",
  "key24": "2DDfFvvzf5Tfm7fnWpA1GEANYDA3w9nX5JAvpfSVaoN7VkGGjSMp31d6ryJreH7dBztcb6hoxq73qV3N6Wp2w6Am",
  "key25": "346x8Y2mhKDRGJkLoiW3hDWYHfaZz8hJdeWD6FZ7rt5RPyKK9G7stss4Sbh4zL8qKxvzdr8RL5MkxoZKxnhqZ8cP",
  "key26": "5fa6nvgTrTj2KN2YQZjcEMNnn3io3u6yWEacr444dQnrQ2iQ3c9AECqqCVEKPF22eKUXE6WzrqFdsE5VXEa5bpUX",
  "key27": "33DCB33RfNDyuqqyy9Yv4ZwW9eQkQLTggv7a1Q4QsrWw1jdbJsxCi6wKoxv5aHq6oexcNF4b7EhJiu5vGsSLTzEF",
  "key28": "5Rba1apAtEBsA4B8JEz9KuBLwK5CCYovAJYufR8DGC9TpapeAXC21FbSrPPcicqcHT1g691Vhy5bcjaaZx8ZcLGY",
  "key29": "Ycuxsaof3njjTdgWWfNbqpdJXUCXC5fjYjyBGtkF5j8iFaLwQx8RSzvEzWbXrvMru4gT23RfPnKxRKpoUcrGHJs",
  "key30": "32nnVgKBLLgyEApXNs8J7irCqzqy4ocJhshc5cNh9TEQpLSoFyFeM9S2fsSDSNZtofAgm1qTpQHkwtQiNc2s88LV",
  "key31": "54LhbJ5bm4EAYsr6pUVGwtSbWKfE2tZgR8PNwmjiKv3Lk5w3p4BtcrsVizPaFuRg1MWWFTD5vDTtgqvPQ1uQhYVT",
  "key32": "3s8ESBoudN2G3nmrnmFukNprfo5AYx5h99iMZZgERJx1ihtkQrEQbGtx5GieX2izyvkqaRmMHPkSnwM5fai2KX9L",
  "key33": "3T6BfFCohXYiMrqKbVbTzyVPMbUs2J2AQU9KFnB2gPXW3BuPC1oYq7YNymDKbvM6JXg2rivU5gKEwF4iWmkEGmzP",
  "key34": "3L8Etwk3tLUYYg1m33fMADnrFCUjFRUL3Q9KMK1g1FEHAkM5oY2yv2qZ3n6BkhGUD6mfbavxmZDyGqCkxraKKVfH",
  "key35": "3hoXt8jiAVZ2Rgm23Mjit34chTGjkj5o6mqKtaTEpKm1Q6UquLhJ4rqrubUEMY2A8NvoAd7Y99vmWAvLLU17nxTn",
  "key36": "2DY8JjFvor5qGCnnLDbbwzBUJMePrYeMdJNpZ9hF2cmzxsrazDUsgHjKRXDvvg8FK4TpmeMBpyyzqVjF1VYDdsED",
  "key37": "2bDNwYDGCbaRtNwx83MqdoQmoS2RcLhCXD5SAqZcY7KbBj2hvF3aTqsnqzDyUG8XHyjZitkfrs182MVSZWzFb3JS",
  "key38": "2fidFo7khWMPGswHEnjzknxBRjMpPeuZmF1JGRi7NTe3Djho4z6moVpHaYKfMcyFYCGpzNKCz2VbywQqW4svcSGv",
  "key39": "3JFKyuXuDzujQZpwtJcJfQhaL5Fn1wuAkw76WD33riXRyJNgEfJkqr4j5KUdRD74JV8VC9kF95efT7J9FXkFP3sM",
  "key40": "5m7C8z49aqzRLaG8RLfEjUwApFdRc31CP6oU9VwrF3mL7pmMtt3cSip4cKN5GCjt75pZ8HPCi4jed6pW3uuyMksD"
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
