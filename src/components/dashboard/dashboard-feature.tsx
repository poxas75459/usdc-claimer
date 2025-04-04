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
    "5ffdb2ZKGCW7FrAsdcWimPz1ECgFHD5pmpagSEdakYNZmum8vdFcXXJ2fnKTPFxV8kE8wUSfM2SCvZAPpgJvgVUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29fNqkrrdsJJBY3vW19Cv1DuNeY45Udr5hhfBBb29sPy1LAx5YFC3ZCBwaRWxdMSBPgnZZAmK3Wdg4GX4785RnVw",
  "key1": "3btmPHj8d28LQseCyLi9GDxAm4pW35SgYBcp6NgvneTVfwKFbRFuQW8H9gSrEXC1oLiT551hxh64uVtc3o153uiy",
  "key2": "3um8qhALiAc5FBHAzH7RvEHeqWVxmWTKKSKLSPpzbWgejZiUqH1d9Lcrkk4rTPDC8up9U2u3mPDc7L65FKCPVVng",
  "key3": "mZUKBYqq23SjLanbVx4x9HW2xEVrQZC8eFW8wsehmzUxfphnxa8tX9StxJcEubm9q2UodTcQCdjzvBxAGre4jmU",
  "key4": "3W4W2bqpfFaL38Nr2Xjv6ULjVGHFbeKE7CBEsLdQbto1uPw4E3rg8E3QCjd6tAkRigm1p8Ufmdb7k9ZdJzjJ8ZTU",
  "key5": "3vcJgcEmv4a7aDPc2sNdnGmqbKWhXAVB8FtrttCDnjWPW9aV2MaEK99SUCbhm5aEniteoFSLHstELdTaWoP8DCCH",
  "key6": "4NyPgNVCg7fsuDVyhz2DhV7mU4EFsmUswLoBqG4tjruRkGKTjnM6r9jGVEEaF8egn82gqcvzveuJfQQ2B9kaA1JC",
  "key7": "5M2oSPZGbtTSGZoLHSBjMYr6NWPNbaqU2kqyJp8YidyG4vBmp3jVpMSSJUoBQYyGK1kehwxiJ59HinDXThQyf7pf",
  "key8": "5nFBu8rM5zJuGjeHrT3y1AJjbn138Ex7NyY9WoTr6pzuh4B6g1WwtcMpB73LafnW9VcWonro1244eCVn3QrTCGvN",
  "key9": "3KTKpFenL1FykrUXnmbVNBp6TDhj4tVyzJjuPYo1NGrWNHmJUoQgqrATHLbj7EZga8JBAbYdCrNnFTERGdFieUEn",
  "key10": "4Dpwvmb3o8Q3N54Ho2ZTgkemakawLTogF7yMRyySPD1DJDC4Domg7EVuUG2Fkd8jo23Q26ywrXzprxNF3SunAHjH",
  "key11": "4Ufb29CyxXPU7RzdQwxJai49SvTPLmUqDsB17xWp5tzw7Ji8NyLdBgz9yd7PEqnhz7dsFpECvPrRgx6EiuoB7kJQ",
  "key12": "3jUtodhQRBwrNvmrHd1Gx5EyB7aHWfgLSdPF9kho9BiUTJdhTpJeX6qQEvkoGf4ikdY3Lh3FyWribmhxyZMYmCnJ",
  "key13": "5T537XJR9j14t1ABsnXGXBtkUFy5rWNU18jBnL9T92gtWPAjdzJFJf148LNEh4jYitD7Rq82d5DRwGKSpJK2srwg",
  "key14": "5DsmGa9W4Ny1eSsC712JdLcBEmduUAivpuaW7XY1ioNh95SmP6fNnsQ5fozKmqyJkMUspBisn3AkUaGqR3gB38eT",
  "key15": "3EQwZuBGkKcC4DRA9z7WqFdA8wwgGwfjcQXCupCvmEeAQEYGjZoZ9a7PPh4Td28iNb45btGBAtge7SZD8kva4JBE",
  "key16": "2v1hi5AVC6fdX3EtopZQR9eQ1ixECzZ3APcoQjEs5mvQWkrzHb2QVrB37iz24hW8p66AH8rztPyGAXarzYYgQWPx",
  "key17": "Q1jgSZYiMQGCBH5weDsMBK1hZVHMxf4qutGH7hNfsV6paqF7tkV4Ej6J337L9bwUXW85Y6nmvV8HJ1gXX5PFr7t",
  "key18": "GEJ4N4YXxXnTGES7brTiPZw6Kn9fNxmhZ2ckTp3LHsXn53zFgB1KkBVbPniJk9yYKg43udAqRJakCP72odiTUVr",
  "key19": "2sPus7hWotwCU4B6LJk67qS31iob2xyyUhTpV4kf74eA6Khegg3TQErJpurtnjAagMRsQRen8bzJ4nr3rotFvANN",
  "key20": "4kL4ySAtBD4j7FgmxEV1uX2nd5SeebEJXys351Mbemf4NtdkE7DCk52SqEJvRbL4kWidXjJXkKrtnpgBm6Ns81m",
  "key21": "SxfUcyi47BmPrDXeR2T9vVpdwkt8C2CoM8LdE8sEEoRurrRHDgtvFGB5MHLRkP5CuaSFcgjFjizfEHHugMpQdSM",
  "key22": "2fXSaLetLtjjUMTnXAz5dkyHCmcfp4hgUhAp7ARGVi9jPd6t2GSMLDdKNvS6dPcebDavRGZC788vWVmoAQoh7KYQ",
  "key23": "2fFGFhq8RTiMGnC6EarGtvnr4CghDGcGrJCPNAwcixRDQgwkXXZHdzSwEYyT16GwpfRpLDqiXXgvnC99Nee8ZZpT",
  "key24": "vk79PMwHu8u1S8Ng5hCGUaZFkXkYukJ6ga265LSi96tbGXQoW8v6JrahJkHvJNrXwA9MaqYorqxcupVnAqgoW7X",
  "key25": "21m3aGCYxZzKqeYmFTHMXYW1Ci6KS3sCmKZWvBL1FUkuguiUYr14aPJqEex8H2eycQfhnJ9PoK7aXCTbT7H43DX3",
  "key26": "4PVEray28PKFYRd8G8szMsS4a4Aaf496NbyvhXjKJkvF6ETUUc8aNFJiosPPqRWKJNBRRpyoJAwUsf6uyxY684fR",
  "key27": "52y9ewjiav3MhytwxjYRzaSgoJbMuUBg2UzNwtKr2SQqm1RGDKg9UgMD3fZjFr9mdiC4zetTaTPjLM2HSSpn5Bbz",
  "key28": "46uEmULMsypuXECskAfJL6RsefJ9iLdTbgkFX64ZhiWoonUrKFNwknH21zjK2sQE2AiqwrsrtLuctSVtrjnFwTAT",
  "key29": "YbDAjSxi45DHmZHw2dGQw455uuY8WjZ5KAGqF7FzsdQTaAKaJFgkncGcM3MeCEXf4sAypgpj2ouXitCNoyMjogz",
  "key30": "5cWVJbe8PU8UZuBgpDxXKcGaKes6MejtJuZD4M4MiTVPjSqn1r4mPjJxsZTPVp6v2ARey7aNDKB3rLrugm7uv6M2",
  "key31": "5hkZHj6du4c8Xfi7GHyG3G1sNYpEo5QBkmgGKHeBewoUT1wT3ftHLxzndtsPjW1KLC6ukCvxX7W6Xf2pFwbuL7x5",
  "key32": "VzsQHGAARsqqs5yxbx4JXx6vQocU11jHKa2gXk7DjTy81Z1QkdHoooUnJeDKJMBUhiTmPHAh75YTcRQQGLZkwy9"
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
