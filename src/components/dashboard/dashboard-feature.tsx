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
    "Q5dfVpsYondFxevRRQjDM7jfNN2FdJdE2pwMXTVezE873xaN8BZzbT4FFhabLW6feNWYbvz4iy7qtNsE1qDTGCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yubsKaQYPMdQQUAzo4o1HakTMNu6TXWzAPMCTYaycEUQU4RdBhF18auApRuvzrTLNdHL2HUQ6XzJP1m6VH3hJw6",
  "key1": "2aG8ZjWJfY4BBbiUkmDRtWNczKdCBXNPmWsy2tD3a6UvcQF2prw4C5hcC2gBMC3JgW2hBWhL5MxtPwxvtEtkjJgm",
  "key2": "5xbKvSEfH4KnUgxwL9uMxHkQCnt5HYLPncQRYqEumNxVgkNWKDABDvjbsoBVJKKYvb5wkvPB5zaeXKS4ewhKvMQo",
  "key3": "4mGkNjfXc9eaPnR4mJ3rgB9ei4WmMkSsFZEVp2UUgbiM7c54hq4KoxJy7Q7boWNkpgmrMGjBRyJ5JocnXU6YeYx8",
  "key4": "258E4cEBtGwB7XERZrZCFwNWKh7fovzmEUz2vJZeQPTsrV2dqqUwHb5kFY4Q18f8JHUnWjZw4QNudW9gncTDeQgM",
  "key5": "2MXdA7vRVLxQVFsHqHigJwbnKgw6CbbL4cNkWEJvqcFvwYb45Rkwz4UFLg5UEJiEiEpEi2tY63v2EDYorf6RSuBA",
  "key6": "3rSmJhnHA1ksQQiwR6cbrKRAFrUns3ibA65SpNrj18bVe9RHFQRfDhv7xJWfdcuy9D12ACPPPmjY384veCv6KDjJ",
  "key7": "2yKCzHCbWttyDy9wRpaZr4MFjyRxT3Zar2hUJRusRxZLhVGjATW4Y6wnUsZcaoUZRLGgpqkanwmpKi4CG3vQpCCd",
  "key8": "4jaNbYZ85S6N1vt8i2BbD8msKWrEAKv3SrupKfpHtWCh24cvzA8XVQnsdUBKgGKMkSShsa3v5AvWRYctBpYifXeG",
  "key9": "4safFpzC6ZcADaLWB3SwVajUnXmWzebu65DQrvuJkGFE2cfUuYM7LnPFe9jiqrr9Qn1ncLhzgQWtdFvsEh9LAKgS",
  "key10": "3HUukgfF4koaMqFHDNG5XYYqVj4XwDoRSw8gRMj5qQG8WwtMh8sheDQUq3bKUy3s8hjCJtdQbiVrtdFNrs7jeRDG",
  "key11": "4BXPorc9GfKeSpeoHEkNd6bNM9UmUG9c2oKAnchnvf9TigiiosVUowAVqqTJEQYs5xKFNpFSsMaiZeRD61R5QP96",
  "key12": "npE1EomdYbHGHKamhsrJE2XEKnZdHbzgaGrru4Z2XLjpcJAP7nsJfu52EV7V3KzZTsbHsd1zHTZENys6i7aL2RX",
  "key13": "4G9yh9vNExehHWSqMxDbJRUBHdeYmVkRU74YFttQWZaKss7GJFnZnoZSDvPNUMU81TXjEmSE9wLVWBsV2ku22Rhd",
  "key14": "2ULqTzye5xgQShXoVwMfkZEZt48kjENZCsmCNJBo7KpMDVyFkgze3JHMzxqpPZRhvZNV1LJXgniW9U58q289D85d",
  "key15": "4Qs5Whv9r7YdaCsqiGKV8PW1RKY9eX69UzxAFGf3yes27wkobrWK6WTkYqq5w3F8QnFFgZLJasMSfoMN6sHK38Qu",
  "key16": "2obNQsmBayFnGrVoFSbYiiZWJeXLNzEjbcVt3kGiJqE4coAPxcdEW3wsdWeQz9TbHYiUMKPzRpyXoX8u6JtFsnKV",
  "key17": "4nmVSKTNrJhWppHyzA8dForuMqeAt6HQawd4n2Yf95gCe8NiA36Som5cYgMSDfnLqUJbJuQW2QzywA4vPiPhny6g",
  "key18": "4iPPSXiKYnUdpKTtz458RYmshB3dMC624hEpWT7J8AQ9P6AmexoCoqJp3NbGVhG9VajvMg5g7NqHWUqFTUCoqG6S",
  "key19": "2WorGTbyDAN95b7Mvs2M6MdXcDwjbv6Wyqz29LP4optHeh19jGD2TgdZcLcUTgyoYHu9BwkjviQ22jkjfbgJRCRi",
  "key20": "4r7DTi3aPW8B4S4zAmKvLggvdZYhW6c8RFAos36j9nrSkCFQH76tB41qKmGJCaHbkQiF3VQDLSAJb1zozPUc2UJn",
  "key21": "2CGY4FSeytAU69YzdCkiXEtRCJCMfqgzJMQ9Wb243fFmGTQPtVfWuw2vc4YnLMnLjF1JtvS5UeMuJWGNugvp9iTZ",
  "key22": "3crZQVtHKhcpmLeyBF9nUG3ePXkKj7xVZpjJ8bbZ579vdDWDtLwGHpXnbMaN8cKYZo4AG2yZV5vT8j22MjPWw9V9",
  "key23": "AHdE1jnBhpbT3Vs6sYJnzK3XGSBoZEPSA8QZstJMKvHdLgDk21VVRnGpcPgTXnRamfqbVQHn2m7Nyg2DzVxi2S5",
  "key24": "4wsytgszQwKe3CxQjQvTV5EvXU1mtnmzd5xv8qYUecGc6ghXJ7FHL8wFfVs5yYk7Nat1jUvNmQmqnjMJXuUWamKR",
  "key25": "2vQGWxTqSf43v1EV34bhrooiHBXWeR73YU3kpwWLv238WKZN7XkRB3z4nqep4v56Zt6pWjpdr3uViAvenXFQoGb1",
  "key26": "4ocMF7bLSds2wG3aKRqBwE8cif34myoXKGAe7f7QEA2WyPdX8cafRAfwJX1MjphL32ehcgwhH9x66kdcS6fUhKPK",
  "key27": "5ZUVorpXpo15uy4QAYn4LQLvqDbxeYDov6LTMSq9t7M1WDBBLGSTiqWDGvbc56NawzSjxc8XnwA8pkhkDnqBvJig",
  "key28": "5now611spjZxYQkifreMJbWsX6aAihbtSpinKSYghsRM67NUgPJnYsssUtRYNTXhG6b6Q82s3gnMjonVXwTsNaYe",
  "key29": "TfACCKukc7dGfuNEMZsmiQw4Gsf8dKLMnKHAJcwXVwncDw443cu1jwjEJqKq2XGxvQ1pQb22h3223SbueVzcAxe",
  "key30": "4mFYB1LBZyDU5iFkFA8Qt9N8NtD8vBpR9vfy9gdzA6obm64yRNFufsGEktvs71c9npsKhLeNe6aJiTUnrXzqcrpb",
  "key31": "4bkdXnmjCgScR5dn3d9b7NPYYLjAqPjqhBCBLS1qZdHVe8joBbnFU1HTpkX7CC8U2tTARATB3q8xnpHvP7HhC7gy",
  "key32": "3tcwpE8uYEWT9UAz5E5svW1VqALAsqia7ZK2HGWyfXHaEXMrP3PEkmNctbUQJUGSNTUMMdM5jnjDnNiQCnpqam8r",
  "key33": "wqwqAnkouJK6TvZ3bp5KKZhEGZkFkc4kYuEjcCby19pGYBaf4KAMTKnD6yh7xidAv78VXeceeevJcEAyXRvHgzf",
  "key34": "4x9qbvHEdWK5wefLbzkMeKNAqqDSYBu8o9CLri8rBiDKp9SD7aMzyzdRdo6UbYynhFjrzzi26kpCqAo6U6Z29Kps",
  "key35": "TcCjbgNPt212ZUuECvPuMNznfiSXvXbY6WpeW9XytPAPf8CY3jraCqdYtPeZAo7SKnBauYoGpXKiExPMXysZSLZ",
  "key36": "2pTmx66RtcBkz8a2GXdxm4hp6VeLjLB3efnFHwWxqCtd4vT5eafRbCa6Hxgi2mzZmZnJnivNVWLnh4DgAfDmrBi5",
  "key37": "2Advizv9zaZ6g6ZYGBX3ArPZu93XNZiqBoYUj72eEQzvLYrn95ARXM3psx5SFbjxwQpD6iHQ6BGxmag3X8TURrNX",
  "key38": "33wgZByVimgkc3ML1B9nB9vtapvJZSZnFkyzTZjoZsdbRTYnMQHsx13FeXHSvpfryoCiP2eJbZMEChZ2pDZVo2LA",
  "key39": "PeZRieptD4cmKtrMHknFTGmHXiWctHaD9S9taPi8SNUDYZtKPcatNhQH9rAYfiALtSpgiAy6ueXWgiwKVmUxqAG",
  "key40": "4Vv1hYmH7m5jPSPFFFCpECo3GwcEVx4zX1igHGKoTnamENE8zcmt93dQBfTgTxSs21gePQQGRm3qihs3g2AQDz25"
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
