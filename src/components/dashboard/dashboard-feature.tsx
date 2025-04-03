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
    "2ATnXwb99GtEbTwB3UPjyKGGECjqS7DLyuY13aUNzcRdgopHRGqoPDPR1NpSr1KoTGGs3bpaVPCy6sZDPaJjSeB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGZeWkEWEvTrbm5gzZ9uX9acG6ozKHyFU36SCxk2rY6mWTbESzG58wU6U3hF9CkC2xhMRuYNKCvkDHbPfdVbvuH",
  "key1": "4ZWCpizG3rwQCKkwVAjdhAvYhSr3N48iYnAxKoGnJ8KyjdVcaxYbgso4qfG8nBKToZrLVQqN8tAPX4HF9G2aEAMa",
  "key2": "2wdLP2wnRiVetYbNSbndQj2wHhW33Mjt3ihNkjQYVdbjhUy4C1Q5cRPEP57HAfXrdiaXvJh1aPwFGiamvdDdKy8N",
  "key3": "T5XjDXu6czENuf2Em35x1Fp3UD2BHEa52tBqMEbicovDJDnySPTVjf7VMx6XDrPcaR5ovdXhDHDoHpez6hcdpHK",
  "key4": "pisS9ozBYr5zfS6xvQzdvLxswvi9USGjwYAbceFhohuresBnhamCn6primagQ7mU281nywTum3gNha7nT5SCHib",
  "key5": "44mwQCe49q3rJNGXMgbAQMpGHEzogzbs53MjcjjTHFTTWKJETcuPcxBXe8mLoGMBBUCyNRKFMRSpZKofztRfBDSZ",
  "key6": "39KJCXVwGQSTFjWsCcmfjSN5fQFxW4cxQUnmN3ih5oxEiTJXpKJw5oCSjmMJddtU7KLtw83XR83ysQXYV6fbyQoB",
  "key7": "eebkXUW8Eb6qAmT3gFrZKHZkQM6n5RUS5NuJ3Xpny5aNCELEasmjL4vdqLJepnBdabDoYajpTNELm9PxRNKaMkR",
  "key8": "557AnEwHNFy65ywYBXWzvEDvQ1K3YD11ti3aPLLuuJ182qjU2gujyV5u8g2mA7ZDx57QHM7DuzXKz6g59gG7UGqm",
  "key9": "hCXcLEGFc7gsQHh3k7qWEhdmrrqiAxzcZsMRQEZR8AP2DwaDx3u9zLQqhU159mFFRP3Mxuzu5atSVhcmav8Wkgu",
  "key10": "5gdGnw28GY7rNizE6YVsS8t5tBt9cX5nFXzznHS1UKgyUHCSidqcig36ntu1EH3RkCqRk4tEVsfz5qnHc78fbVVr",
  "key11": "63pmvhKF47oVAguUZDk3Y16qmLb77FDYxRipA8r3aFEaV1AJQ215iSEK6RYEJz5hzvnazozxJxv9gEVVygqbQ9mY",
  "key12": "291HWtJ2zEJyJXPeLrcYeFpSvPVfJxEbrQusbp5AMbcrQuYqKL8KHcSSTaiyTgGgd5tcArUQrKhsJ4csmygg8jmw",
  "key13": "a1uRWdVgqvZcmVD3idBDd52nv2YgnpFJDG3etrUncGeXkqY894mXMeyPemyDZNcQE2e2txqPzQHPiYUxqrctW9f",
  "key14": "W3aecFRmc2g4vMgxavsCHkV5eATexhBRFWYESvpsLQVSkcFLL5g1a9FTrZiNtxDwAwm6YQHuWTCuuJfRdoX455b",
  "key15": "3s2hnS6AY78LeAt9AR5tuxqbim5G6EdkhjQv51u1cw9ECUMJqGgkae75Tf5goAPdHLW7GuS8cHNjLLRebYTdg3r8",
  "key16": "4nHpJKG4TFKfMCcZc9cvoxN3YydkrUqDcxyqAmzhixr9m5xxsw46voV7qPesbQmVwCCY9pttHL4fQ4Xagx6SPEgf",
  "key17": "27o1jv9cUTuP3yxqHyFjPBFqKAh3wx1iYi8KsCmMbbjWn4DMXjwRC2FokPVxrwVQzuyy4pETq8Nw2PVNG9rd9qye",
  "key18": "3aBn5faVbJMvfMrRFBhrHQpqYS5q5g1dHJYmEq3iWfgruqBAnmJcNtpEa2UxwuMjXQH9jpnxSmEqirKF5JjehRCU",
  "key19": "4ae6CdScFNLeexCrJmYJ8XapoLW3bRs899KWARkCqYAcmzLdEBEa9fyiFXA8yY2AbH9miMn95w9dsTKGXCBAvMVS",
  "key20": "3YsuKtrLGFQGdXYDuRJPr5cmTPJXXSwJTwh2RB7GycUyyQDWcKanugPez8431EHNjY7EMfSj8bqKQWrWsohkJqaa",
  "key21": "4HTJACe6vB7EJKz6GTTfVqQaMG8Mxtx48vmGUsutyrk9QaiRrb6uCUfJA4BdFiY6L1zb5WErhjkNsLnUiueeVvYb",
  "key22": "58FUYcLK97qacBFfrZMmqoP1kcqAKZ8kZaPxFfNoyNFBSNojC6p47A88P6YLhwHGbHBroHCZqYcuz9xWfJXJsXB9",
  "key23": "KBwicNduW1psJASoHmRMGGuEvqt6m3GE3NBafFhjpiMFavD6ueAiKiCpTKL1npbhcD8wtoFN1MRNEkq1DFSa2EZ",
  "key24": "UqScxaNYbm3r8rJ5akUH3asn5wiJSTZvyerQEM9CNTc5h5kJcfP3g4kxQLp7oMViFFZzotk3YzUwAaonZq96xch",
  "key25": "5Yz1HtyQ2eSjqBZsU1SYsTrR5YvYb3qHJ1Mq5NW6jgPF913yDjwuyuQgiABBWvz1PStcyi9soZxbgkg3H1zoVHAV",
  "key26": "2QDr7DR1W3pWptgjrcbvHDtVTRtb1AFxmPcERWVLyttBdYeDaoeAneYc9eByXCzNTRofQhwN1QddnLjKHpusqoE1",
  "key27": "27d5smUcLBurTcjUBKRpLRoJj4EJjEJTUHJER2vSKuyEKJXcqBXeQrb9ozAde9ZQGM88PxeY69BwzA7Fb8KxbTox",
  "key28": "qqnqKbj2ndUpmkEtP9VqKcqG4vpYGsHkJ6GVDVTAoRQU6BdnvSmSgTzB7LnoeP3hspwmmJp5AYrqGzWuYxQju4i",
  "key29": "2Mw1QV2MQtnhapugihPZSJ7Bp7UhSpcCXkUaCov5AQNsecqpN2JERzkkp4VUykKWzB29N68iATht5VmUEBvuGVL6",
  "key30": "5opxwsWdMeZmZnPVx9rJvLyApQyxfYAExbCWN2SqhzjQHjZJXfPEckhcFPSvvjpf86sgutsh4ZcEZUDEmxZSNFdJ",
  "key31": "491bTfbWSzyAcG576hrUBK7ZGrZPio6uH94z2CeQfHAeCBsDWo7ZysscmN4TEYkVydsXU28U2xjF3YM9SJ26ZMBW",
  "key32": "55m1w1Ly7pV3u6qiyURNYdgbxptnSi5XuuLeT6vcP4Qg5MQTzdxYURdohshtrxzdoBbM2CByNEMCzDjsGSdKBbeM",
  "key33": "7BCJUWzFdkGSQpKfrBCXUUaQ7qhc7YLScJctnjCAk1qTYQh1SMRS4yqSL1HMJiFNWKZvg45b9kfqiSy5fMdtkpt",
  "key34": "56kdjEWevXBmBfEiM3JDuXYBgUwKYDrF6KsSMtJgED4ny3xXR3n7bp2N2VZiQ6Qtc1fgMH67qdwcYcc2xmqeDVA6",
  "key35": "5FJeALXT2ZgBQA8v6WHXd8G1qM5GHjVeZ1w8FbzyeYEMvDRSqp4RWXVZKxRzjQK97pHK2LuoXmpDFeSXzdYkqwLK",
  "key36": "22V1Z9H9yyTCYvu2ywivd7157sSTMDvJtVErUPgvUGkPUikeEz6nSuFcxwMuS2nvP3iP3Gu6Bvt6fC6W8PPKFYsf",
  "key37": "2rLjBfUkgrGXqj3JEgmJkZicZJhV9Xk9N3Lf4fo4PbXKWxJsFwKZ6JdCNjGnkuNQvvPYLDB2rNcUVohDiMtGbESY"
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
