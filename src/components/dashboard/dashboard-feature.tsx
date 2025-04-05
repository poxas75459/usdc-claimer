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
    "3QDtYPGUSTKqNMDQYZ98pCnRJdtHtHMBhwCpVzUVrfvxkBD6cffwKwtS9ceTUHWBha68KsvfhWWFhzNhha5Z4XYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yQx7obhHuvCMy9UfiUx875q1o17DbgSza23skFM9CyovwM8j6jtXgfrq5sT3CGNhoGc5TuY9gHaWDmuhkDhbeEF",
  "key1": "FGPtDa8KhpDNvytN1QPgNkd9UyCxV7NQhmKcS2abCNkJ5tQy2ddLW8QfgYdK6jTU3CRXf9LdpnTkqtxK8xidBcV",
  "key2": "3HutREMJyYru9vEe3iTzomn9FqWyRS4xcaSxqmvhjv2oQLUKfrprzRphLRdb5PkTj9BXKoEfWFBWAAuyYqs4Zoqp",
  "key3": "chxTT6g9LW7xJHYyRjDdKaAwwSWYPStDZTmVr1adFAeToXYZf8nnj6LVX9r19dJn7P8MkFQnppN6qthSEVcFuZe",
  "key4": "3RCWnSsTojGKjCF8RJBGP7SburoQE9WY1VQQPB2Xjypn3Fi6XwjFrC4dUxmFmRRySbzwJNhVECV8uxD7KanDnScg",
  "key5": "2CrNyHmjV9hd8z6EyqNNikQWEEbzxfur2NpyLuymSgqcTHswoi8dDLgDnPDHUygCj48Gmm7QTtwkaHwusNFLAXjK",
  "key6": "4qb7UFzq7ozHzm6qQgx4KB17xKkBJx7rck4CM44WZrhxmcBNsjKwfMXtiMC3Ssm3hDuQ3cSAymsB6p1SrUzsXDwk",
  "key7": "5jm3YPVkXhvnXiR5bai4DX7vnv1Kzx94aQFp84ZxPDidi8cPbkRUS7KPQS8PpEHzUuNP4bqGk9cFe2m9FXS4Xceo",
  "key8": "65yPre1pDPXcMh1hJdVUB6suZRNrs74Nn9FDYNnCSbbT6ozU9zDEBUtStBAUZf2b4S69LBsyDeNJgw6SKm52TxHp",
  "key9": "CVqTXnJAAcy6TqL7ggcPdQ8H1SAnYbmkuQMW76vfKz97CPqHNkbHJwbdZGmUAVxzrWgmueWnCDJrWyALaBnwUsa",
  "key10": "4TwmgCu9TYSF87KCujZ2CCYTi8ZWZjtNLFwTQJdjocH7Ne8iQTZbNrRB882WrFJzbFKmq4DuBxRHW6zQncBsirSm",
  "key11": "3bkrac3BtSgz7dWwxNcz6fP3pLeuK9Vv7NceWeJQPr9QB7w9D44rfEGgA947yLWeuEuQnBadcNd2FYZvMxXUBtZF",
  "key12": "2FomXJbdRDP34A33qLLfNptJJfARDM8uXSBTsP9xkuc4dEawJGGyjDPnRCk6GKQ9nFLWnqQe3huU6MQ5Ff6mdTXJ",
  "key13": "5D3mfbstgiyzbMHt3AgV47taDDU8eWNwWWzwN8dNQg22WLe31rf9x2LJGPTYQHBLkviFym7c9dor7EFBqkGDfZep",
  "key14": "4pE5FesdLy13ZvReMASQFYWst6U5cVXQ1ASeG4JqsQBiLd5rvKbtYGDhebzZp4FaSaCMR8vhAQvH7fF6WHGXtYhQ",
  "key15": "5Bv4EgnxyBduKnCAAMpjQ5PtiYVpB2P3wExacEK21QrigTrV757bJpQKpXyDN8gyrLKoHu631wLtj2g53a8DHgen",
  "key16": "3Y7eYMhtcgxGxsBGoGHqiGeWeGRJTn3S4oAB7JpmCozqprUpBCZXfw17EoKUmUs9Jux8PiGMvHFGY8a7vTpn7Qxx",
  "key17": "4TvtVLjbiLx7cohtCHYYeXeUxAYv1QAsWZhCuZbsWNXdsMrhwnfTo24tgxPEvuMHdmmxwX99Z8BkAU3kCF5FsywZ",
  "key18": "3AfHqY68KsdqCeoGMLNFiMeh7aQRuSijtXmSQvmLto9whb9Gfgwdd8P8qkZTMw1KbfQ33ToFMk38WTuBXtRdo33j",
  "key19": "3zrtVBg8MoEP4ZAuKet2kbkzLmKKmVRVe32WBhPNWVGv3xyr2z1ZVbu4x3Sqy4PuFyyqxFe2k3p3yQPJfUE2r6CA",
  "key20": "Q6evoCrNgtnDmGU2xWyet3LYh59CGYSqET2DK1Mr2x9aPjRTZg1URj1oUD4wovox8GPxVeemCWxuVLrm4M7Ugrh",
  "key21": "2A5CSJjcZtHUodK9bmjgxQwm1edPtnrXBUJPdUtmPCaHGgMw87eoqXXcuD6D8d2h6YVS33UGj64EZ2jk5TSJUpBv",
  "key22": "4b7EEc9QRbGUXRGNbyWvfSTXmtKenCN8pb2rpV5M6jxu2igwDaDagzwJqyPm5B4FaswqfiYNjUVm5qxcVpLC8FAL",
  "key23": "5quF7MpB2tLGi9a3tmMvyMAf5eRM3h9zu2pQQANFGdgtbfzhpCHHzyegmHDbLNXpwJ1oRCCgr9aUvjLmjRnE5VaT",
  "key24": "1229iSnBMYcet4DL6AiWky8D5hqK4KFdqvAKBCzu4YV7vAfwr9V849A3wDWkd85yHNnUo8jPuD86zskPXAeZKqW3",
  "key25": "ga2aCXxQnk47Jo6LcEQ4JDtGsFgNqfo7b5NAGaTcEauYTnJjggHGQF5isrYQKw1XtGkoLpXmDnmQVSbaTDmDkm8",
  "key26": "3TnymNFJnx25MkmzTx6farw6xx7gyaw2JAS1NYanpkhthwrKXZfxXQZKwPei724nxeTafAccMyA1EFjckp5zUVeB",
  "key27": "4zMkTV11hmr4HhVmNfpGtHSJEFWbegsj6A7JWPCDgrZjsgZqks8TFzasqyKJ8whTnaFaLKVt19FdpwmfCFapDR5c",
  "key28": "3B1hH1Xq4USysTFSUP4iDyoMeftHnGuBQaW6MGeyPcUzDv7g9fNYMVFdhpjwfcsFkYRnqDoDPzT3HRwQR9eRLGKg",
  "key29": "39EVtCspPBAe7pUQZU2wQrRfFDGWG5LcuvmqTrSCVmTmQSkY31ZS7TMeBt8YwoLMYis7pUjytJ1gsV4iGrqSkCoc",
  "key30": "3U9TTibpzvSmphNsB5MerATtBqQVQ2JUHNwLDfx44Dj5Ja6xDwtQEgQwmSYxBCQm4QNRPpc4DDYrcEBsg7iNcEu8",
  "key31": "DQQhaCumKL4sKt7EFXYd9jrd5D4UgfL9yjCv97xqw8W1LYxU78nkcr5UU9D1TZSAp2mEF4K5yYxPbBC2BFsisBg",
  "key32": "2gm29PSWJxCUC92t8GJptEXsL9oZiptnD87T6B1jabro6dwo2ZTEH5QWyDBKotkoahJnqAgj97m7cd1TzB5Hovmr",
  "key33": "4cS84otpG6bpa4vFFA2NteGMxSdreJgo5tGzpeJWXHY9d2SP4bSwLzWvi4rk5gsadCqQPqog6rSdMUVxQv63J1SK",
  "key34": "5teYYxGzjEtz9sJh8keqbScJh8GbrwHjuMRwtcZwjvQBe4vv3qCdSRWw5iJReWhBBAB4wYPbid5ouxVG1BrSkYAf",
  "key35": "4gqQ43kCjVxugGgnCV6wQszXLZXTfTnVUTgHUSXCHvYeUQNyXRNerunRkFfsrc86BEdwpNt8wt6vJMS1g4dwkMjy",
  "key36": "2xtdiHA3yuK4X4f2Dd4kk6kCS2aYHaDCFhYYM2XRiUAhzAxf6GHJNHS3YqYAUFJZMybSNEKxtPyWDJidqHybcRYE"
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
