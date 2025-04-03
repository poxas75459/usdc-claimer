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
    "3mMDhy15zTHhZeHtCg6t82jU51bnG7zfpnqj4xyoocDSSqMtMuvMG3dpxtYMWZKbLdhZ9UgPBjmrDYfpkoGftuuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bmz2WC7zkuTPezg6abBN1x6f3qqbTKynSVi5BkFmcHz6f5LCihA7VubBMTdPqWfzPdP9H955tHKWarbJmsV6qKx",
  "key1": "4ic2W6JJEsM13BTRz1fdiHkPmAtSZ5DpXCmt3D7PSBwqphWG3Y8X4Jp2VqeqWcmLEM9fPpgvtS4f2RY6Xfy58Hc9",
  "key2": "2YQrVmJw5pdo8yVpvPkDFHn9QVz4g3TNwf7sdgJSSpPP6vtqjxEKF6k9fyHtexh5xrJ66u6s4w8UtLt6jzEMx9V5",
  "key3": "A8uT8TqxpdCneUVE9tAdzz7LtbNQ8w91abyNQqkGxG5QRQ5EFMKezeF4r9nxUjXYKHaodtFzgiUNYcNvr7UkVQR",
  "key4": "2Dc28HQ1CAGe1qeRC3e6FKS4a2MMF6WSCLh5duHXfD9oL7xcx7fCU7MeQdNEH3o12ZwPEpAFLwrBR8DzJ5ZF6QQV",
  "key5": "3YvN1YjdxbbRmrzm3C9KqqfW4UuvKPanLdcM1GqAkT1YcKD29Anni8XoQmJ2ExWyrYDujyYchMpBzSPKbfFTbaZ5",
  "key6": "25NTKxFoWP4VzhmYUJgeySbd22siDaHAQStoAM181inagxLaNMM8SwjFbEsexX2cNYmzfadHns6CJ4EmkuuC8L8b",
  "key7": "pmkzVKWbEDApQb1DMmhxcx7h4hLxNaKT4WSnymkEakoFmN1y9LepqPhPBtxn3etJGs3eAQppHszdiijJgjgDgCV",
  "key8": "jk2gtThLVbtUn1ABt6LBrCqdzrHoHCaPqF7RBjwTUy84cixV8itJttVTDbuYdZsftmtMCCvEngk2d8X4QgVTtLF",
  "key9": "5TEfdPYvf11wjoNvcitbTtRWUn4eqz2pjZSqYSPHB4aRLGXrVtrxaB1HAYrvvjqWcYLFfPig6rySJ8nJmyTwD9RL",
  "key10": "4uWhTbgqfuLk4FTejF3ZTvGjDPyemcR1KmF6pEhU3JZxG3Wgy1pWq5VH16q3xiJcc6chdraCmMih25cNVsnZo8PX",
  "key11": "4mKBS4APZfPYXswk95bCBgTz5e9WnZ7VQ4JMs8bBfjHKKpyhj7vVCT7eCwzxpbwX6UdeGd3tHVrZjxv41sqfTzFz",
  "key12": "5L3xU75wcNDs9q4Z2EYsGPc3YZjcrGMpkLFfiMdnmzRjK2gVnVQ51zTEdpoUCiPrBm2YNLVZcbFeJKFb1eocEUPL",
  "key13": "5Hh7yHre2Szwg3yjyTarSUs3nbyfXcMcJskxsDHPLSens6Kys6TQ7Pt8dnC9BupoZ3inBR9MYBEt3XkgsTrZCzsE",
  "key14": "5E58951qZ1DRvjTwPi995ziEfzku8czJkLz8KiP4qjDavoEh2ZQJVM69vVHzytynNQVfy9tg1C7vwSMNF7cUmycH",
  "key15": "2YxY6Wh7ujx5xPRQZWcrdRa2m5ov9N4sGQTrv6DYEGLcR4CvSmQBKrb3ah3rSsUT3VLbBKYHA7kj4wmqn1ETwpbX",
  "key16": "23QGAWwb6bCW6NPjsLvkyn2dVBcpw5ES7fLCaKp77zcpoFQHBpnwKy82t7arzhTjtcaGH623NW14m7iC8tSEuDpk",
  "key17": "5rn8i51EsNi6zNFbECRjpArftjRHczhRaQTJc5dZMk1YHZzrngbvJsMQh6ab6vLmSTzANNC5W75q2aYpYM2PFmHn",
  "key18": "4L46H3qkddVAAmUnnYqh6F3CqQhrQF2h4GJHwPuP8AYAoRCSumTtKgvffXnZbBtNgdRdH3RHf9HYekvPa52h3aKU",
  "key19": "XqJHMkwWxCdqmtmc3CGkSBJbz4sFk83BrgqsjV1b8BFG6CsaZv4uWrWZGdK8F2tDGx8hxxLTB94iLyPxEDHDjYj",
  "key20": "5VCHTSePz2gouqg4sQ4nWW4yVdY1KP5m89o8KUHfi5Pm3bQyNCJar9RuX5bAimhJydMT1puThvHs2qm3983Xy5o5",
  "key21": "4AamN2qXk9B8X7EuUTwDVQuAdriNJeJWKYTJ2Y4MW9ddcSCzaCjTTUF2hHSWiaYGfX5jyeht7PxWgdGU89ftwBQB",
  "key22": "CbvmtoWmmh2duKKPc3kNjxRxffVF4XFSrU8ohL8kHW2ueTX9o19gGjXUveDpVzbm25weU6YaobpfDb4PEoSeugV",
  "key23": "2UWWUPQEyWzsH1RBqrTWhzwWcyooX7zWaEyTzLTpMiY4k894YiXwRWvC1mp2sC26ZNANzBeZzgBPi6hBVxjKBzXR",
  "key24": "5gaKrhFN23fE2y25u2tYtXgvV3XqusnmsLEabpMMHzxaMYutKRxmZCtvaLxM9ppsiCEp4gXTNdXbdR1yRZYS72NB",
  "key25": "231UU1zr12hbN9wKCzSSWv38MhPdc5g26vtfY5nKXhWfTr4XCPmAZQ1bKn96MLbFrhopbGUfaFsVWue7r4cxKC5B",
  "key26": "3E55A1r6CjHTUe9FDdjKedvBPuwz2wXwUuNaAnYLVi5UBmJgyvy2n66A3QUtXh8CHhDS2io5YJ8KpEZeCnHVN3cD",
  "key27": "5kEynkvGXS4YjpK8WMuF7xbjNgAFMkjnsVnA12KV8abyXuzfrqkETNY3PQtGJd7eSZ6Zguzh1Bbw2phAfPg1En3x",
  "key28": "3XfMhp7KDbA3oVgMeqUUYCfXzBSHm7zaDXxQSup2EFuHTi12fetQzUbQU5NY5Awxr7UacEpyFTeV1Szmp3aDRQZz",
  "key29": "2YHPDuGvcdP5JSp19D4nPm2NfGByqDWiR3uz7kcqVSrGivpTqFN6VebgY7V9K7cVTUaRVvpjDQLsLFhUbyjenDLV",
  "key30": "2Y5yHtEmbJRxaQtkvXKfzFX7Dn8dybPugtmmMQJ3JrxBjEM59UKQTgBDRQogLMk4LTK7ZP2XBwYQgM49V43qtGn6",
  "key31": "3wjF9s96Y6p6c97ptMPVQj5NpmhV6rt14ScjzmouiKt9SHecinaQMEHGN81eANSrNUQkFKh89Yy6vGK6BT8kzEov",
  "key32": "4T78i4LryBispwZKDG9W51X1xm4krjGMyt8Jrer6N3KpP6DaNpzGueCeYwbWkUDPAQxh9ZyUaLugifzb7UNUJAD1",
  "key33": "2c6HfB3pp267kyUb3rudrQBvugbNZT8D7q5PENU61N4t6v8kpPG4VvmVrrbyUyqTzFWAB9bJrVYZywh88Hkeiz7M",
  "key34": "65UX2SdhPU55SUit5Gkn18iQQQ5SCdW83pmfmMFngcG7ckvWrZrAGwdbTn3cCSr7WJ7GpupRNbZB73tfFv9AxqRj",
  "key35": "5XTQ1bXjMW38Tpat3n82mgkc11V3jnAwgXF7MeANR86iaUBSgp7M4WJKqT3vSfSxN4SuZkUXAyGndyeszqaN47jp",
  "key36": "2zxHo8uBgrDM1cBFhraCp4FpVZzpNJAMinndx8vRo9uyymjUt87mMXoRtRfQUt3rRui2snKuW27Wc3LwnA67nDEk",
  "key37": "2aNk4xxgebDfTQhgvmonPjwmijSsTXiRLQaBH8GBBcAaSaSpuUXfdK5u2SST3bbcwAa9Tozzpmgnd8kNvTouqkbz",
  "key38": "2H1TyYCrS94jwdBnZ7mDQhpLigsiSubvXdrDRVryNxwyJk7DajcX9ytWRMf6SfHCc1wouTrn2qcHhWavjdxNBde8",
  "key39": "4DvkBai9RBKjgfevuDDk3ANrasbzntx2fXQ7mVhtYFq3sqrqSzdLGEr3bWocwGtB4wtwyjMerf5LCTgy77maGFeH",
  "key40": "4xM5BEfFaUpbf1M6VqgSaCTaSpqkx82KEgbzUyCFrMSydW84AUANJYykiyY9PCJ1p1D8xbcGomK5MnDHzvvv8usm",
  "key41": "5aDsv7P6XwVyWjTXReqxkrrGZvYn72PTLV4ecuKGB3yiCr6k7N3EEmY1FwL61JtbdCBdZhQ44cj967XFNiumELoG",
  "key42": "xD7zyFdAG1VUrW8dyrVjAEeca2VpyzsHvM8RexKVHjsVwr5yxnmxrdB8bE3ySsfFWQpg5rE8DVTZwCZK5HQbrJa"
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
