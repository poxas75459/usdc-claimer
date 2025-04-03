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
    "27tsoKyZMcJR3jewaUBckZKnpYzRqG524n8Ao8uBQg4QCaNviKVtpFwUbnznYTBf42XPFHBsF2abWxmKovchKfgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vVd8NHfTWhCZhzLQ9HN79ziUkxfcy3XpWXhPVoABjYLTvHyXyuMXqi5nXJoQ9xp1dGYpvd1sFw3kYUWNwTfrNhf",
  "key1": "24rA6v1oQqdkU57RWyQhkXLJkQL2ATxHm5VdKwCMLCaPjpM3GUTf3C4Zvaozn48UXa9fuqCeYGfKGV9QzaDEsHJg",
  "key2": "4btq7M72nbqmP9omu6gqDBMipZE3DaxJoe2GMAMHaCJJVsEc1KkMRDdFJn2xKc6tQupmH5TRbm3Fe2L5FGnQSYhS",
  "key3": "44uyBSyWeQYbuPuURmksVh7wezrY3cpZfZ2gZLAGRWyxNYEY8HfrhmvnAQHC3wHnT4CMSbmCnNVpJS7UDGnEWjRA",
  "key4": "5t9ni6aB37NdpHr7C6f2bTxgKCusuEqmfY34cd7zK9T8Pw34zBR2189H8sgFHJjYutkgSuww39jeSko9TksdHxph",
  "key5": "3PZZrjV7VGBydc6joRP6DH7i8WWeLGyG4WUZQQM7s1sChW6p612GxXQbuTyA1AeXhG8GM2vbZJ4VkeC9FhH5BmDj",
  "key6": "2wFRjAy1ihDjQGSEgXjdN3TDKHcNqfXpTCNqgLu4Zirgx2iUUNKWxbZRYsAFa4mCD3AKDvpDz3MB6CS2rNHeAHs6",
  "key7": "H9RK2LF1EXh22HU5hgJJ7zvt9pS72yH2hFSaU5XG1S5bHrffahbQknEFXxRxc4gE2senVgtm5uBuhzmsZjLz3qm",
  "key8": "2r1Z5oga6mARuRKhEAWWksxNyRaRFXd1AmuokaPL789UTF51vgF9CGjeSnGa7Rz7ATbRkFwZhet6aW8JJWZGhyte",
  "key9": "JeQtQoJPvHcPjzrNVbqQRjc3XqeSy9hMYqqz5Ln4AWCCmcLv81JVucxAsZkrhh4jPYZatqGCi17HRbeiw9j823u",
  "key10": "bYN5xJVHPABKb4Wejkw52BAyhAWPmt7ibh4Gvk6okyx1J4gJt62U6hdcPG349YkW4J6V6kzqHGJYZ3ZXPbTD2bK",
  "key11": "3HNLPR8cbPCmLqayAGt8diZQyeXBi9mYwMgJZN6xaqubPxViMcUCkja3doRSpKV4aJFFrPqqGiYMuf7amGGtb6vm",
  "key12": "3jMrryu1NW7SGen9d7XY2HnELX1sN5aUfuKysbRiRMLFLhw2MvUSEbcKQCDZcwMFiADWGXE3JYG4KvvUYU6k2UCy",
  "key13": "5eaZgdyhqk97XY9xnaPv7GZJQuRcvi9Ea6uCWZEiQqA2TJuWXoQSP2swhurR63VgPh74Aympub1EgNJSvXZ6kwM8",
  "key14": "23VTuv3m3V4BqnDGx2ZFgKxUHvXCwzKgVtPD3re4bmTo8NzNbDLGsUVNspT3QWLGx8c5MkVUBFfBYfsnfZ65sefB",
  "key15": "2xyaqWmUasnfGJuExKMZguBeHVpfg5DsAhdm5YnAiVoJb1BkTuvZ9BtT6YJ6BbhYmXdM6EQGSf3XDSJdi8yw8uQF",
  "key16": "4iLMRffBMYmjTMWjG1bexzwSjRz5ZE4AvYmGXLeQEW2nB2ZXSvymFzGRwm6Gwni5ELeoro1DdW9YuxXhS4A6qg8",
  "key17": "Sdn2AHxhGQ8pzSwQanRA4vo7TFLpXRJf8jYG5JtvyidLYLn6Bm3Hua5S7upwLmbrdPWvUcseqcRJfp73qN4wjnk",
  "key18": "3115A5tmLR1Sx7R2nGxtcYSqKyuMxZ1VzYoM8h6gy9wwG7sxd3jNrgkqTXAvSNjwKkC5kX842EdA8SS39fiVuhsm",
  "key19": "4M3knus1L21yvAs2PwXB8V5sMxEKTcowa6mxzYVPzjRjif4bsnPh7yjb57krPGKYAWzHZX3PtgSAXwVFYnJDxsph",
  "key20": "2Tb4KZHud64SjgojMt45FpE8EYWV4uCvR3vuVnMUvYP8mFf9aqFusnNw5bKUMJCHhdfPyvfkiEbgEpQzK75bjAMo",
  "key21": "2CgsnmAbRRrSBGNvycz9a4CYNc1eH1a8WRZHU8VVsV46inagHn6PAD28JbYiG5ZDKfzKVS6EqmpBKHFgj3SCygyW",
  "key22": "2e7WJp1MEnLyqnbyK5RQYAimCWzAwd8eJUuVbrVE7MUVikrJC7GbdttkZRzmS9U43mqjaFbuNgQMFwHsAXkGnhJK",
  "key23": "5KeCoy42njAVFKcs8nrV61MQjrkZimM7tVwMTtAjC3uBtCkB9FmSyFbreLrrgs6hv4fi34dTbEWCzzy13HkHsdir",
  "key24": "41cXixxBis9dapMusX2U4b6uQMLiZtsRdqGyFPkXLCUEqo9H8X5tPCuqkYSH7dV2Nn9WFZx6vkNbCMrwuTyupXan",
  "key25": "4jAC3i4sP6FnYgDf8eaqbodtmYhaSEZMvaN5xsn6YSkac7AbJjjzCRRtaBDPG5gcfxV26uj8BWR3D2dw3G1jkX4b",
  "key26": "5NPbkHfj37RhYN2T7eHmNRXP2QVFW3gR85KvTvF3RVZAKuBXkPhzU7xiVGaQTgjFzQRPuAtCguiaeZad7k4JtR1Q",
  "key27": "22cGeeui8bsYgR7cPg2j5m9JYschnhBrLBvJWh3BR32CZUYj3GEtbJurBwhKutyNvTbVzRJuBU3Qo5F45psonAZM",
  "key28": "2qjyTPTF6K785NtvPbyLgiVrKxebgkWBstDcRGSmC6DLWtBsEgs4DhePRfmfyfaKfyH2NzZQm6XJiUKuD3mXSdHD",
  "key29": "42wUAfk8hodeWW6uaV6gamLf4WdvKNDoxnTvwUKXztkMkTxBXJjjmPjpEzWwGfcN6zEpMKFY3F751cRYtAZS7M5r",
  "key30": "2KvSggeGtUV8jK6s5idVPb1KNC4KJ2p3iZujzDBj2J7V6wsknQHjd5dHcsEDzRS9eujXnvz1FLasoDvuQtBqS88c",
  "key31": "4xtK28fVtteE7417vF8TyAKEAB44k3wLEcxz6WCoBTBHRgfe49BBJ5zTHvBQmWc83G2vU9ni1N5Dfpk1Ngss3YYQ",
  "key32": "5p7J7CFSV4wvf1sAYvQujBtUrCQkRh2zKb3wNTeYmmqGU4p2bnqgrx4R7hNgaY36bi26p5EW1enVMCXpjuDQAfat",
  "key33": "4eKyG6ZgqxGVn3v34TdsxZs8fVtDqM7894Xg5HHeyEL287ge3ZdAt42KqJp5cMBieraZL6bknFTukFtn87asJNqp",
  "key34": "3teKMYi6LGAKQMdFgCpmGGLxWXLTUhHz7rgYq5idmJaXonut3SXQc74stsXNbgG6anWk2U7be1pL2nkpGxevYWLf",
  "key35": "4vuTJbouW4yn7wmv6AZtzd1rUDHkbwDT56ZPan7Mr16jVUNKL81Ezu6z8wPVtaLUy6jMTuqpE1Szz86H944jgYpb",
  "key36": "5hwEMp4oFbmA3CRZP9tVEFrMjHvk6n7rLbq7dpgQqMCJZZiZYhdLdqZQnM7vDPmMZ5cSpyHoSUMkXWigBH3qSXnN",
  "key37": "5FkHGAPHSD6ptsJidQ1g11MnnqVLMowaQDmCG2HZaeLfbpWLS1PpWbsAkEbX1r7666su2uoZMucDKL5cj9yQmU6Q",
  "key38": "439XXYvi4hGXfpv2ZVjLLNsQC4cj4XFwsXLNotVdBHDkUe9iDFZXQTKU6R2AyJSkD4LyApNRQnnP3TDZrEQWGYk8",
  "key39": "4cbYUdcs6a6RgT8NeS54HRiwmtEhDBDjEbSVQHhG2KJ54W7gLnNgqYFmu97sJReX6rYwTR6z3diDYG4TcVKzzsa6"
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
