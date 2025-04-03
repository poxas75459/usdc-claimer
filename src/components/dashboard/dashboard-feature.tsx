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
    "56iWWHbqmyVyFfLrn66v1U5o4WaNzpqzKiBiY9Te4WYWYCTmpLA8oCggBiAC3GfiBU7Z8ed7oysVJdzeuk5tcNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H4jN1piH89pMANp5LLoT4fvg54KChPg76h5sK5ZDGGqpmy4jb1DkqMCMGMsK15aAywhoFVY3tuhtR579HBSp3QG",
  "key1": "5b74YXnonjGtnJxF5D77hxRoN3jnJdCzhV99HxpHzdcvoehrzrWqm2NSoLMctATnyBxQ2JxobcMGvMFR1Y5d87BD",
  "key2": "4hY2ZZGu8Ex6zmp9SpUFoBED2n4T6yVWY9cHUCNMGRZnTDdQE5p6d8ta7jiLroeRQSXif9GAH5S74QGekND5WZm5",
  "key3": "5mp8Hv8T5eiGgvP6jpkgU9HZdZfWLZMFS2YLAe6a99NZhS1gTPB371xydq8q678AVLwLKsg2YzFkd5WJP1yo3SAq",
  "key4": "5yBmdg99NkYHEgMyyKSzcEDJbA4PkYQgzybYycPi9y8UZLXEtqUvpJ7eSQDgd5xr76UExQepXUYgftyws2pM4sf4",
  "key5": "3eG32JqR227mLCdL87FGaNhnYsz7wbQWQ3qeX4TWSChdo9DL3PMNPXy5Xe87CGtpboCtdHDf16VoroSteNfM7tf6",
  "key6": "4Sf7TkivnNtTxSdx8EVd1bjLrD2C8iPVPdbV647UJewzEzBZVWCSNBwBKUvAoQy9cuizSFD9qmcoakRv4N7omnrA",
  "key7": "2bAHVNtVF2rRJacVL8ytB8E8qALx4TapssZVpK8Bh2NwETaga9UgfsAie2DSzy9yb4qdp87wCV5bYAXz9qRn2M5j",
  "key8": "29ezo4ftchZdJpezDFrLwdsvvUddYSkF6vSZLzTTNCLxS3hufu75T1xy6eSgaLLzq1WCR6NeqaNsDWvasiV3WU1S",
  "key9": "26ucReAjrCJAXNKaQoXDyTtG5TXWfmPggK5AaGW9GawoJDmF1cAnTC4cfw947xxGuxgYWVzA55CYrUqarwnTY1UD",
  "key10": "5D5HiVndbL6KZ5VJiK5odyRWTGzk2Ehwpcp4Ln1Lif8kgQgEpiYcn3j5KcvbGoxwn8diEGoF5JHmeTcNj5BoYmtE",
  "key11": "4rPn5WwJcNXuUkvoN4jCuqr4znKqHPA4KujhgHWFJ9NBnQrp7qrYWX9JgHf2FnVKG4LrQpFn7gPTJSy6uYpdgj33",
  "key12": "4NbN6nCDpaLKndGtvSGDL8HebNE7yyzhYiBqhDr2mtVmcZaYPUEZCZ7h3MpFAgDyTkKqpa5CjjL1f4j9TVQhRUWT",
  "key13": "2JpYgLNXLYkRqenYVA9Bki1uPxTxgkgAhod4onFTqh5Eq9vbvve6poQ4wQorgD6jUMAL9tD8uh3TEWkdqK55FdgG",
  "key14": "2WkiTcXwXSMggsEgDF6tRRWPAYBtKuj9EQ2Muq5pjpwghUfLfDk887VRHacXxMw7bxE7bZe5KJveG4oqZPVtu4Q",
  "key15": "3mzTo2nMwHxpZ4ChtQ4e4JDKRk5DGc1cFVK375FqbE98nA4R89GoJL7iJUmUY54ToFKt2tPbRPR9rXUNLrqQpA9s",
  "key16": "2SFETB36TL779WUUfyXVxUunNTYuJFyWuywvoEGWPqMTDeKsfThdqjPA9GrxV6XSoTa7ELejNpKTtcAh94xfno5Z",
  "key17": "33Vgt44r3MHFGE1ABREJPSbVfBZ39gCBZuqAHz9mEGumePxV54GdWKvPCqKkdEmwNTdxW86UCZnGXFJpFA35qnLL",
  "key18": "2Scv5Uk6VbbG8R6oWsYcPDhBTqrNQF4n7JzNwSYAsCX1DhcJBfeeaaKmEukg58rxQmHfTH3w9EYn9igSRRv8NN2f",
  "key19": "2oGWDkExavRWobvjmAYTt7Vkazwjno86PTnGpAP1dQqGmR8isUWTocSKvEBm3Cym5G3UPcV5kud5wXx7ifZrefDZ",
  "key20": "5rmanVwv5KuegxJWx2gs6W7iD5WZu9jgLzzsLXcAxZjXk1LEJjEBWQTKUjsyLWeq7PwvrxaWpdHurpUT5CaTRbrF",
  "key21": "3JfRRdE4g2GcKgTVxhJfHwy3gDmEcPHQQCiBdQXxy3giSgxZtfempPGR5FQo81YAzjzcXzM8kWPTRawtJjdrKT8B",
  "key22": "5VYFzgzPva1KjVJsWrkdJke9dCbHs6jC31A1x5RA4P5L91uTN2VMrPvAqeZWaL7xdHtKkW8FAc23Tqvd29cbxdmS",
  "key23": "52k87CYYigvomRTjBTh6HDiyshe4vAeRbTMvSSQL7bvAGsYEPHNhVwdBxF2kwTtyFLrmPHKxfN9VjQ2HS49uDuga",
  "key24": "3cDSiXZPxSRPn9Wetjs3n9McQKJ2UCyU9ifyPcnSYFisj81qCHs2ZabWFVriDAqYDX1EhpfeuaZ55JxHngnYG5e1",
  "key25": "2GJ2GA8F4vNz2b1jpqGspZNarFJzPJiw2KvuE9yqphCK3UQdi39Nxje52nKCMYFf6u8S6kMUDJFEjeMiJijDw7pG",
  "key26": "4CEe54afoz3HYUy6mL1UeyGqrWx5qRzPSkrY2K4ZtHHTeELd4WzHc4qxMHzeidWfzGwjS8uQouQUm8kvF1R7txBR",
  "key27": "2gCsPjfr4cPJTEWjAXfrRZaTmoZQ6sEDqqbmpPYv8FJPm14127VLM4toJHrAKRJ5bUNdgbbTLXgenvDYEKW4wN3t",
  "key28": "5m7tGgDwa6U7RkdcdRJF35NTLnrWiiLr3KmbEoQpXUWDaw8xYLaCBnVXBvsrfMuZmVrSJ2MEoay5chdrgJroizPk",
  "key29": "5VDNj6KhCnzAhAX95aEgj763L5wupuZHqmMM8LFhs65JhUgbMD1c6SbwDpmyDmR1W5fE9ubxtGZcJB3RJrchCpbv",
  "key30": "2jfQx4o3dki2k4kCRt9rdvmm1MAcxLz8iRUm2xk9T5TDN7Z8AA7sPckQWjgoiTi4PYm5C4Q5uEZkW2adFk78wuyA",
  "key31": "3eqdRwQJMeG9Y5aYsztKiXkS8NNrvmomq8dvkmg7AMAyAct4Q633g9VeZyHM3hyMCx21o8VkZHX4bBWgh9QP6Ayq",
  "key32": "45K2s8iJrrhvKE97CS4yhompkDTGToiHhg2MRwuvMVuYZ3Z5VqH36ZzQvBiNic3hwDDNbPxsftzzaWypdpZvHJTk",
  "key33": "SksNSUMsS8svBgDMY2YGqyoa3Xj7k4vnYE9wTgXRSbZBa4GA237Yhex2RUHP6Y4M7SxEMLLu8W3dnxVqv2YmM5F",
  "key34": "5XpjSYvUNurYfFov6KbjepTVtcN7RiK81oEraXVgyd6UipmKKki5rbZEsJUHVSmn45zyko9Ve3ugre8x7UHg9Tx6",
  "key35": "5eKRSwTgfNZopgULK5VtuCQcxsZVQsuXhzrkBhvZ324pkYzhhoTxtV5zKcy5WrKy4uvgqxxTLA7CBh3SzfhTpLcc"
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
