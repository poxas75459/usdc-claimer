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
    "2WsormUHDCnZ68JscfQUXCHDVPYvcgoA8yFsWm5mDp2rxvARxneYKHjx1ozsKguLuzgMgXNHVYuL194YxbmmPnq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XZ9XRPiaRM1duipPphugAfEGnwbqf3iw7Hc4pZ7DpXkQC624k9ZYoxNVqZCMmGQxkVtbX3Y4BZSTmKjpyd6DLs9",
  "key1": "3Qb2fbPnTjh9p4gjD3AT1mmn4nSipTKTUrMuxxCiiojHQWZBs3brCSbca8bGKBFxzQxzWvcJTY3Lfeq84i5qDcwf",
  "key2": "4dMNfyRjEa8CVErGbSorhXpQuRMKkocPZKWMG3jvv6KLtJ2cMYmKevGfk57gYcBziauxMaj8bGgiGHExPDKSJ2nD",
  "key3": "LTaZpVuFgaLAZA5mU8Kav6y7pbAcmBFBpufbjfnATgzxR4MwhGnaZamYprWbaHziWvbSUtmnKCKvUGvLcjodUZf",
  "key4": "3WhUnSEdT5fA1dypzEPQxXMZv4tsEoCRGrjD5TBET8DYgkhftbDHouFVV4X2PXjpyRP8KkNdMrpyVtCkNwfoRDT3",
  "key5": "5G3Rrw4eLjuoQfpPzJoHqVzo2MK1EjhPTbCHDtM2uiTRpJJx6Z1Zkrid2dco4mVMJVr7xFdQFsoykzLnfZuxH4Q4",
  "key6": "2gD3DUukJk2RvmLrygP1UoxSDFKVJjopujPNNSY6G2YonioGbJKUT51Y6xG9jF9q9EXZFM831CXbmf84qU7XVKBo",
  "key7": "GZKJJV4ok11kNaNebNugxBvNN5hZjM8URPCBJ4kcmDV8ua5k3opugSnELmUKMDnSa4xpJSLioBN1h2dpBhJRURU",
  "key8": "3ZJCQ7rsDCBSuC8FE2gHzkP4ApaaJaDhzZkXKkYkerRN6tw1QvELcgzDHJKUDpjYw7ahPaQusi6MRVYA59c1TCSA",
  "key9": "2gTGZyFPvx6XEHMBCgNyGhuFpWRWZexpK95yaZVFtVk9JQjbhSkJzUrQfv1SDZh4nBmywG5P3di8QM7JyWwcYikT",
  "key10": "4x3og9TE65PGvfS9U21eoX2jttPuHbJ5oFpjsGbTwVTiHsai5htu4onQ4U5Mtd9CNCvrKnXK1g2kgEjLQPAisMWx",
  "key11": "293DPEsJyJdu5qYALKMbXwvr5nKa5U3ttFJTzoNVjjTqnx9qjx91EdEK56jjdgWfzHnxthWBJLB6hCZHoo62gzXq",
  "key12": "4SEY4e1qK1WDBUyPxuAjaLN9qDoZSLLpbeQXNkdr7mPLtu7KXD5NXBvwVj8kK2aCHSYWWThp4Zs9KqvvYTjx8U3T",
  "key13": "2LUtGNGXbPyEJ9mywcS779T8kjgV3KJfke3UdnfAHV6xxNXNpb3nT2TARo4JXr4UignmizSZUU7RRuEgZCdC1Fys",
  "key14": "Kmahksqbu8W8fdkVcioBgfrdCZoRbFv5B7MKPaRJFeQgGBrm5d6f2xm9v4LHwx46xdqpcQsfrCka2dmuTJpWYi9",
  "key15": "NJ2MZJq4wJD73LfzC8apBnMrB5nmJKz7XQyRN6z3HgVDwU5GhSGTG27HuDk4qXi95hnGrQfBmCXAdM3Had1M2w2",
  "key16": "65gYBTS8tNx9pxxBrTbhg2y1btFF3XbLfkA7tVAyuXNct1YSugQr3myeKzLwNtTmQMoP9B6BbBWEbqm8daknU9MQ",
  "key17": "WmbdQb1DSfhhURiujQt6jqUAoQ7FjtY1z4Wxq8EjnHMToxc9LV7wzWQwn6w9iFYtqPXYFqKcgGEe8W3GGjTbWre",
  "key18": "5xwA8wMkjAr5iPe5Z6LCx9cYTMeZHboXV332ZLvaKxPainMrWZGst37Ko4p4qWLgKv1foYmNjER7fqUMhsDuGcrj",
  "key19": "61AMxsi3n9Vs8AArj2ybsnYzFU8BfNHArkm7xBKqbrn59RPGdCu53mgHDQzv2QrnBajw2c7f8XHsrNnAHJ3Y3sq8",
  "key20": "5ZiS3vPRKvo9Q8xcxFTc2mmQXFhBLfNQfiy1LpNwHbFfxvLrTqsAz66VCZhg7R7zgjg44G54FTYvUkcuivsNyDiQ",
  "key21": "5w4yyUYgPkZcKuaoJQR8HMphU8du94nTtAXamCPhbVRc3C2ckMGS7nZFt4sMhC6KDHDQG8R1WpQ4BFZKct23KGJe",
  "key22": "5hhjtmYHgNEgGenZacrh6y9PpkYkMg2ELRQjCcAZW6kTEFjRXTXpQPm6P1SYqUsotnCVea37ovSYLticmNP3WmMf",
  "key23": "3RUFLEa6M5V2FUefRq2Ga4JZ5zBECpdJSztY9d4pBSFwERotzuwUsP7tkHRjCS5TWKsv9DsYAZDpusUrS3ykcyiJ",
  "key24": "44Ctua49b47tsYyuZKSFYUGRBwbxoQXzBMLcau8AwA4dhkTy2PzcwSJruDafNfA4WqySk1AnufVjr5wpPjKoryVL",
  "key25": "xqAfefxqvqQXYAVqSgXupytcJNAp6C4qWAWFFwPdfQTs3KaHdaq3pEDRwWyf8sjZKZEaHKw1oWvwRPai7JWHAjv",
  "key26": "3LbJmkyFKQqsac5saVpb8d6qd3FKGS9saFtHVN2R8qLCVbXjdKrPBQekNNe6Pn5jBH1Lcy2F8shpCDcwtcWLVWjU",
  "key27": "5HRRbXsS19vMi7ifWQ9nJHSGnL2jmEGozg4kfxswkKKQZmZ8YBXceH1vLJRtKLea61EqMUpVs87GTjTXNJUPP5RW",
  "key28": "3Zk5vQVLuPhjoUHbUckCRJdsJ2ZoosEdCns55ukQc92mBsdf7qLWP6gwnVBsAmB6nnkSmnW6vVfeHo2nMZaCCxve",
  "key29": "63tz4mzRudB4KPLhy2HTtL7GzVjj3Kve5mRdqU6JxtrFx8v1wyXDodeuTGMfyuhsHgvuQQ812HcyWj6Vhj45XErm",
  "key30": "4ZA4J99A7prsrQxiz6o1JrJpHgsnC6RznyMVZLCCKpw3bLTDdGAnDVi5u3o8usC3UsyWGTLULaz4zdKRhy3fdak3",
  "key31": "4xVaiokYLvXPbUHdNz4TiAUvuwEtRZe6GDau6N1rNpEsEyuZsHhxPeMAPWoYTjyRKZipc5dfWwJqFEZZm1BiHENa",
  "key32": "25Yd937g7B1Zq5cEyMr2hi6RmffQBPJjtDRBguqfNSd5CwXuGy3uWx6ui5TvGrUEYLoFxAcQrsRFhwgJuoenQjjT",
  "key33": "33fEyna2d7WjxZkN1WjzGJRmBU11EMDxsGTMBz1NMFo9G5fmMXHYK3rZyPSDisLpz5937RPRPiYqt7QNgBuBAtqh",
  "key34": "5Euu9yvYhGb6jRQVHPCNy7B9rEZQ47oC1L2DBDPrQNQFVkCLp15bnngaeADNxrzwTZ32yzksXtAeXMikCEEhDq6p",
  "key35": "2Wt6tJzrxU1VJ8ar2EfoTU4iXgoMe36S7oj3phFXJkXgo2T5B3HFHVrujFEKg5T9tthTF2GacCL1DeYTnA6vFktC",
  "key36": "jGB3QR33BSsM1pSAeJSQATTXzfBoan2Up1ApsEs8Z9q5fU2Fg1v5qayJxzWVwRXN46XvNoV8aftRpdnrmgnAx5m",
  "key37": "5EroFYCGhqVs8tFbopNULfntoGKxt8frYsTmP5AXxQarT65U198EUdBA5kAk9ws8j7ZKUQPJr9x3YsYLhfvKWxiz",
  "key38": "wzxCbiMHu1B5BJqm9VY5KFoGchJt1CTcfKMcLhZcVdLYQgb93nUpUJa5wnoyHj5H3DgF5b2jURdCb1opqVb3TDs",
  "key39": "3H3EiqgCaywsJRA9AH8cRzX88WD1Af56cDphCdTmn4XKur5MRU2CQpdjyBbf6Eoq6XLnyUkagbLMXE9mCbeeSbiK",
  "key40": "5s41xVP4YDd4ZWoH71WffbqLQgb6A1E6pzUtDtkqPLCUP8irvteHL2e2B8AGEdMFgHKtVZJSCCBZTgM2ArrVxgDy",
  "key41": "4DGhQAvhw7y8tXs6rmkGXrUiVyeBCGKWcTMFwH2wmTRtFnyrwFGh4BJjjsftSq6wSuk3zfUKJwGgAKwy3w44t8LU",
  "key42": "3BUFauisn8HCZsd28YFVQpkNs1xBDMFBuMhjX3jvuLYYSehuyPVKhRSShKp15Qk6xdGaYVWxVCruDMcLjt6uY53o"
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
