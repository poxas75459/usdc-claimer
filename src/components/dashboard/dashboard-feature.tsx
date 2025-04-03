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
    "pxAAGDBupFkLJq3HzaayND9J97Z24YSHmuh2ev4z9u6LNJ8joDwzorsJF2WH7k3wE81VH7oSqf6ZyLszpmWKZi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zwAdWSbwxXVNgqpbQtMErL1JPCscncEWFD4KKw1AWgMcsUakZMN8et9bMVgYhAWkgmczoCeN1LoDwFVTwU6oKwP",
  "key1": "4TeGepN889bPo9VTHo4VLH1hXDgHxwqeVn2kKrWZnh8CPmRzZ533rAqx3C6NXQkNXFZMuAYF31QhDYpJffKbftgy",
  "key2": "5ncek1nJRh4Z29aS28sWXhvcyZJGp1n2gVSDQHWdx7Qhj5eN5Bh1nFgwJkGGJvDkUt5N9JHNoUrAUNuBr89FaUK7",
  "key3": "4Rc9rvsF5hNzBHVP5QnnBsZMU4fuCbiELsefZYKa5mFk3szwFh8ckFFDSRBWjLndMpHG1CRoXguUcwKbNSwszGbK",
  "key4": "4snFVQy1zasMVGGpSdgtoJJPhuets3FgD82SXoTnrqmtkhZReUcfbm3EVrLRRKn1oNvgcu65ExsHRoiaq3qYpdkD",
  "key5": "2ya2gKZzUvDdTAvm1Rhfk7Whcow9YgocKFiAizgmTEhxnFQXGaAV29sHeTU7aW5rDpCXMSpXoNPtmqGH7fDZsvtm",
  "key6": "TpLkUQjXYAvMjxT4bjUioZjxT95LC8JsCudTptiUDx994JM4vmz8TW4o3ZRAJy8Nq3pgap1RUqjA6h8ZrGBk7Z7",
  "key7": "4XLzEkut5thzk4nd2LHCWgJzW6jwh6VkyLMYFSBodRxZXM3xvf7cKLEq943x5Ha2NkeeHbEavRzFhGJPHrVLrmxN",
  "key8": "bSaCY3tdwZG5xiLCVo1rLkqRdiTdt9USq5MXEpeDMbJv4YfrFANd73ow5xFJxXJdGWF67QvKvy6taYfBrzRd4Ra",
  "key9": "5aKyBetXGRG4uaArFGAVoPqQVPCdCJd4A8mH5Ppuaet9AhxvNBoYuEyd1A2hPz3grK46BL24MrsA1U7x6wf3dimY",
  "key10": "4eL7jkPTB8V4woPpFD4j4dWX3AiiFfbtipbXEKEyVoYCmCZaoL5g1yJrsdwQVnmLSTjrxSkaoshUjrRjnMbEx5x5",
  "key11": "4BLpPUmKkumDKgFJkFLT7idK2ndtKgapgKxNcMRtDyzDRT6FUGYf1ymroVvoFanXe7W7jbMh1myo9tYu2WcbhD2t",
  "key12": "3aMpDdQ46CvVAWUib9mpwHEThtw7HV4BfHAkPvkVSR3J8G2c25pxYt1sVFZ3Hd7cCvzbsi2No43RHBhenPR3zGAN",
  "key13": "2GAtP1z65hnffQC872ZocE8pL6BqYQuhPQabpcfRxb8N1LMwk9SVk7okis3wtaXEwKLzio8Qcgu3tJbLjD1vGBxG",
  "key14": "2hvXqEiYGqcpmJ7u4oxUMzuuesx5EzSvh5WUg9S9cDgzHcavTfn99yCiaYqsMcayNV6mYmQmaP9LLTRNNExb3h4u",
  "key15": "5Yp1ubjG73i72LjZZ3yDbb3ovsbd6vPGQ7Yo2ig2h47oNKC9jHXPqcaHnPMrWD2xFTMTzYFHTD6ehdpYRygx2dz",
  "key16": "4nY4tgxsZJXCawmSRGTycYjjDscN17ea2125vbN332PQ4hMKNMVUCtouzSCU566koJ2VohtPFjQcacvJcjMNpVzM",
  "key17": "5kbKPKLirtAk25CYenJ8s8qJfrpwVb1Wr1Wp3hbPc7ycHDja2WC7a7CmLGxj9NXJWMQ7qRSmn7xoW8uRT7DKbb18",
  "key18": "2GMzkqnsfbAbRJCH4v2pfc2XnhhuVVbd83TzqQtaKuXzN44vzm8cWytue7rwyuDaiPW2M34fwj3ud2ow7fX4pJvP",
  "key19": "3CaLLwjLciJyWvuKEjLsvPuXdhhtzKHAMDYyb6oeByhixwfEKTRY9KNkRcxastgTsAohqtvaFkB4jfjXZwtoLmGp",
  "key20": "5FoLgWP216rFwWM3G6b1fYVa2zjpTijouhW9qPybyAir6Zm447vdWC7KmvA3YA6NADtqMwJVLY2Su5vMYNzXxMGY",
  "key21": "fwWgmHgLEBjPJaw26cJvDyUAkQSuS4AjNdiM2m5SrNosK4nw7atso792j8cibzoa9zDfVi67FQ5h62RGVx9qpYC",
  "key22": "3PMLfDJh5hQMvKZzTaro7XV1nWoqdEjynHgPYhBbPkqyK2qzsi9P1dg4ESXoA1pyHDjstSSCaEr2NtBUi5BXDE27",
  "key23": "4GrrycjyLXh78eNCTm4fD6S3vQAJ2CfbrnQyc4strzEaY4JoXT4gX2XcocfEkqe8YbFWBvTQoiCLSLFg7py1XWgA",
  "key24": "PSQg8NRNSu7fK9NEURAoHjeFJT4Jh9eUZrcE3qe8E4ZzUvrkJXHfhCzqZ3Nw57imFASMFuGJjKw9H8KsXWaFWhd",
  "key25": "5EttmFU7zZp59XK1ACZWAbGxaVgUGZBC3HcnJ4TjTnVhKzZhqiEUqR5TmFWEHJnmRPB2kg2jFRjQY6drYdB7wy71",
  "key26": "sn5wgQDeVKer7nL4MnVmYwZ1ifJiH5LMfycUbM3RuMH94MmyZPoRzPup4d4U6wwysdgCos33jz4DyxDyz6F2S2x",
  "key27": "4gnzVaLDd1a2WSEZkDx6rYALcdH9thEzGCP7AJzLneQ5ZGjmoT5JBok97oGNJcHMabR5u6CkCGgsKLiciDYecqgQ",
  "key28": "3rHTFUbuybpVo4b8PUbhWF9Mt4J5S8mFmBswpqXvgNQCXYHEa9u6iJchTSUGSYAyvS7hS3y7nUXpByzVF39ed6Ed",
  "key29": "4v2aXpMaodmAxXsccAeLt4Aig7qzF3o8kjyLbZDC2t1LqY82pLR2XFuuTjeWF7sqeV7ARuKMqfikQM4M59zfeeMs",
  "key30": "3mYWNfaXBKaGYJvw1w3gCwZZcbo6aGdkaDHGrkGMqvXjCpiwjpacda6Qd5ektZd9TfmnXDkc39Yj6ysDXne8Nb5H",
  "key31": "4v3Tp3gbGhxy2mj5jRKt9gonSX6RqpkGztzCDnKyq4vH86TEco2Yecv49RJxTQCH4kgFF1HAD3HZyhavp9ZRpqjy",
  "key32": "37SxSPBZyNNaAi6WKv6QRX5PyoPUvJPmeRNbPXkM8NJTYUkEUTaqTHAY69rDzdG4C2AZHDYTGkqgrMcbhE4vuGQQ",
  "key33": "5EHRxf33aCVm2LTJLb875kGswcq7HdKTEMaZfYNtBMLvyNf3i3Rk5AVSgmw6YLqL8etyBzPbpu6kDEi99vfa5XKS",
  "key34": "qmBK4tpNYQ2Ci2tWgAT64wG1rDxXyK8u9VKV6tcuh4gyzbhgo69KUWr4c5y5nXoM26Ta29ryVfCTqX8migesFg3",
  "key35": "2UDnMLfnFpSWdoVmyBGhuyeo7jA7FhouFUnb4czdD63rLQPrUunHQr6Picy8ERaQxsmVmhDSHdfzLXMRcfvzVEDM",
  "key36": "3L72VT5xkKVSvpA1ij3Js1tzQGqQdT9N44wZJePmSyZfDYcshhySHkXALajxepkVuaW6XJ2QoCcrNS21HriMKHQC",
  "key37": "5u6VrDSf9nrkrUjmqB6hYUe3FzEVTNqnurw8DAgwHnC4YLebHmJXm5vRDdoCWxeKwAZrSB1mPA3qppuKDseJ5TNg",
  "key38": "4pLGFSm2yLVT8EU6oseuiJQFRGLJV3ZdtoDAHyGGmZ45pzDBy8wRQ2YxuvjX9Q4vkYb9zfpPbXnpUHXGR1hSp6dS",
  "key39": "2ufdgXFCf9Y8Sk1eUN8pu7uSbKwLHitC6eqWMnP3CBKJy5CFZ5iBsMiMGKkJVCzQaqb1MNA5GMhhDgqLp1g2BinH",
  "key40": "55Bbv5ZP64yunco14UAUbMjHRfWq3BjiHe92Pst71pN5hujEjB5DbUANsqzNjHCLL6QfqwgUKHKpHBkCxTqbea6q",
  "key41": "27LfirbTin7cbf499BMZWJMWaZrnUggX2BUqnCe6Xb8grZNuQQTt5XZTLM2YPCy9mwU54mzXqJSBXG1mSo5pPGyf",
  "key42": "47z9kticCsPnASxLJo4YQrdHwWwhyZvof92CySpW5CS4SnoDAqjMMiGjYTAiZMerztxbSJUPKZWfDvGBMiPDbREs"
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
