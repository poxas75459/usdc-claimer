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
    "3sUPjkehc5H7ZMSzRw1SwryMSahKn5VJedNkabhVAFATDVdg3Uets4WrHtdiRVxLSg5ojGieD6x6tKA6ARK9fx1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gRPhejFW3poJSodk1MPBZ4w7Wbx7KXzc88UhjtKNjXu4hokELFSYwpp6qBzoJ1B51fm7nGjRjpHfeC5GuRnBdwf",
  "key1": "2k1rmgZpog37pnLUXvuF7Gg3zx7UgaeEV1ZpyZw4vNGNueP773HidwABYti9s4m7Ndjfx4cKgxappAqGXgj3v3KM",
  "key2": "3TRVVu8s76vqtycdRhxhWspF5WbWJtBMvJLwEj7SkRctByxn5SEsHQE1Bwpq6QaDeuVPjFcsWiA2U1sMyXs1pRHn",
  "key3": "57UJx3B5GB4CtHqZpa2hRwgpQeJ66LfvnCzqTWnWdEE3PRZwQugwhcLWCgZCpUxhTHm51euXbGkUF8o8YUaXn4JR",
  "key4": "5AEFoMS9tCobPH3NsumfNAtqyfjRSX1kuoNhpYS4kGdrnaVvKkLWetHqe4m812d1HEmpxTYyCES8jB8yasLfmp5E",
  "key5": "48QmVd3FKuocGD9Xx2acfkjDJsw3PHJphzqp8AUi6TgBRCeMyDBz3Hph5jtNe3EngJJ8yQtzKU82kFQTKDzQYstA",
  "key6": "vZRMkXvY45k7EYKEahTFzGjwLVPurBkyUL4gYHGL8PchXZdcW7WkMFgG95KQJDzCh1yQhmvvbGQWLhAZsZLsS9b",
  "key7": "4cubUCX8sFNcxi3XTG1htqMpoxU2re3yvwxcfQF5mjMCfxHry3uXvXZdAZa7U3j2GxXRAUpKRJH6cGs3jxmQmVd4",
  "key8": "21epCiVLrno17LUFqi2GYLU8rFbYogzkHU5gMSpJcW7dpaWJRbcCVCB6z4sQedzkWdrSC39bHLFPx6o6pQaakTbv",
  "key9": "28wB2MfidxUKxoHmobYqzvMxc8zP1VLkkcLvNSmUo6VXhFBFRbCg7W1csUErx8xmNCgztWey6xS3SPCBxn3nx2pH",
  "key10": "36snvxXGnEq23dMhLypPxZ6NGAnfFbwSG2A8kjtnFgiR2EhpoAXjBrFSzCdCKVZMdnVvEUine8Gwx76dGAbQDKyz",
  "key11": "4T1QMgDmUo7x6ourtty2PjJoiQgXh3C7c15Mr4rVVsZcDRjxkZGhpjk5UTzFy9awHyFvHEQJok5qwzSd4ykBTJiu",
  "key12": "42bWS19Nmowyf3H3BEgdbhX979DtUoxF2VXNSELTA59SA6Mfoy5vkB7GS89M5hoqt6pJqqiXKQaTmRns4WraVvhf",
  "key13": "3CgxWc8LYK5zQ5UK5U38cR16UdAVT3XnVkAAbPJ3uNipD1DhquUidFLpftq8jyFSga5xFdoomcgLqeyMNm754gp1",
  "key14": "5jx8qwsSaA2HbGJxDczosCvvGrgddgTaPGaQd9Mmxg8pNXpCQ12xprQk4oX6cEskg3yDRJrKhbevojEFtW2JRV4f",
  "key15": "4uePViY14UoSEWsxQcQvaizwHEJNWuPU8YfDiCmjtzxb4xVxsMvNGykPFQmKprGjZwPbsfxNnq8gHQBsRQoc9icW",
  "key16": "56nnjAFtQurTXFWS8V1fLDsc7FRdMFZgiSmpWCWX5occFq1gBrMc9xPzGBfbLVWV1FZovU2Ec4tfN6ZGuZD6zUH9",
  "key17": "4HoVWGzpCARCFa681aSD91yWApDfuaUjF8YU1FJFeXnvb8PSLiSRRZGKFhWVeht8c3nQX47jJpa9EKMg5in3zGEi",
  "key18": "5hTFCCHeJxBauJxRSUXttneqkF4QkWVQQMcsSM1aLy848qN9wZwgco235qqmrJvvoF4MHPGNmsuDBxy2zTn678CY",
  "key19": "3tpLd7GmzV74ahKVuFAbZvPSaZ8HzrXkSXCNK6YRosYCrqAZz6pys57KhBvjiUNvB6BtYNdsQVuvTq9y7NSSgurZ",
  "key20": "5qPZoM5BNTjrMcfCd6gegwJLQb6DZHGtCX57mYFkNxFovfQ551hxuPrAc8EnK8P8J1kXbDZ43ygkFCvbBy4AvFc9",
  "key21": "9jErJXG6cXXMGufkdzrttvQKqjFtAPWmnd6GHoMw7h5yNZ9XEXqbFTQHjynLiNgigvzJeM8hjEcus7fyzb58YGa",
  "key22": "6E3MLeGydTa9BU3aZGHkx2wkro388H72WrFbLexm5WMKFq1FE6ZPMbXKg1AD37XK7tdtBGfbqxwpj4H2kmCsqDX",
  "key23": "z4MvUpXSN6eJ5Qswyn2sgTKsZvbdw3BgQS2h6eA8uYDU2KrAXNDzbvowXE1TrcTSvYZ3BAViDNTSpYrmypXMdqv",
  "key24": "38xpZjA5eGfc5hSbZVHs48KEgJPPErirZMYZ3qXdt15fCF2AUbxd9MuLkrJBrWxoptjaKMt5FrdUDgRH52D6UXZk",
  "key25": "9izmLwAaqV6vGL3JVyPJEKPJ2bAJCXq9YGaYxCrw2vSoQaBpRHwberFvrvcQJUdkRQnm9Y1iot3VocXTR8VmctX",
  "key26": "3as4mnsxnpdaeJk7PJHoi3CHh7XMyuyXrfozRRbm6vbJbwSg84mG5zGdDxMCH9QMYLsqQArLajBfse771hBE2WpG",
  "key27": "2d3HW6WHxQkYqryX6hKUxnJ1EYny7DVkZKFV2ygbYVYjnUocxKL6FYSYfGckxhnt6CpbW9di3DPREVMjjZzWiUtx",
  "key28": "qqL9SDxbddnwRKH6Jcw4u5Mr3HrL7vtEc7nHgMqDzyoRSMUGsuQwd9jKyyuSTfbuFC1GQ9jSYivdNeLUYJWr4gp",
  "key29": "52NMyQdRmEkuvNmayGVtZ8UAMhoAWBAuvncmpZf2nZsv8HjuWsM1b51aw4Hnjrz5cEY3tHhkWwoGUtqaU3xg3BDa",
  "key30": "3zPK5KxWj2yJQeuW178wzzUvGSGVXS3iySUQ4fwEnKPGvyj1iKfkANiNPxkna2bow2VixQWcgQAkvm53CTiKiMZs",
  "key31": "2khEEV2rBUdtWofg6KjJRVaaa3NFNQURqnZLTPhyqVjCvoHDJ8ebRenKh5renYqBGP5Qp1acQQo9o4hNx3aknwz2",
  "key32": "4NiJAV2eU9pbEgV3Nyy5vK9nt9AdTxzf6GttQDoYPG5JPtYkEUXVCd6EqiAt4zw8WjALaZj8yPTrLcuSg8j8Rg2g",
  "key33": "2QACQHhviXRdpSKNiGN7pWvKiud3Mgxjfh5NgRCCiEBeW536yWgHnAWQuYcnWpsmsJcbYFFtf7CYrMXndsPPnq38",
  "key34": "3wfWeMuSrFeJwmVzMWqRBSQSNtGwnWnWXVqtJpAo7dTYYXCHBCbrC99gWNwcDK7JUWmtEu7Vy7NGQhZNoj3ZKHDg",
  "key35": "5gkjgYNbNgX2V6cYBzCX3pSC23JRT1HWcn7NGeL2kitQNtawnjyYEUvBZ2U2Boev36Br43jaompcztKEtsdMSke1",
  "key36": "367FhPhvQW3BhNEYE8yK5CoRVNPY5kSwidNwmituGCjDbmHdJQcN2rgMcpvLKVgbwxpdcXhM2NmWgAAf6zRkcv3D",
  "key37": "5rVMz3YQWtapGvUjCifDZpL1cCsFFSnFkaqym3EqBFBvxsysyJAd4jiX6tmFzt8bfEFUaQJbDeT83NS6VqxmWWAo",
  "key38": "5rP3SPJUsirdujEon5LH8szpxvvLkRARz6oxyh8K4wX7pDiNn7H33waMRg8SwhCSsmpRKPm9n9B4jjtYvAVBJP1v",
  "key39": "4iUt3knZtSxC6JinqmfGDaTC87r1o8FLXkAPWvw3Rj9L46qjugf6z8vD1DEqK1fFfrwQTTZRVkZHFLNh4ooS88uy"
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
