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
    "4vzjBwVWZQxorYRE9RkDW4CfvbEkGXbwvDHDxNSY8oiSFxzUynRfTxcW3EuhRtAec4gEzNYmLhjbixdYooyTX9BR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kenPyCTT8ZYFjCYd3KtjTvEGJAUCTAKqdyoopg7jFoztgBJZR4nbc6GzoGgaDVryS8PXzDS1q3nsrQ6agXvduJD",
  "key1": "PHJdnn4L1uahyrQMRWmq59XmttUbhtCiqvkY8HhUEbiLXCcqFFUaj28iHh6cLsUomg4SiD4Htj4UKQUGzWiSD44",
  "key2": "4kz6xNEpWBcKG8z8FrfMbxq9eH49bU2C8APH8yjPXZPXQeE85fQrWEVPnoMrvTWyr5R4zGWnVaxdZ5YmDs6HYs1t",
  "key3": "5XRKah5cGyp86gZ2U8pv5QMyNijf4MUNKG4K6bNh352QzNzKnPpdGJipg9miyPQ1fdHLQnXTSXksDsvRdNE87cXv",
  "key4": "3zCLxMM5gP2e8pTHCT1AB2sBAcQSfkDCb1WLvxCLLtaAFyeNS9tNEPJLtJtCEKG9QfYKYKAyw3gRk1SBbKApjCgy",
  "key5": "jHbgJiJpsYq8wAvPd49GyMFBFWZDqTFkKZQsfqGBm6ttfzTYU5g6rrbi8rNCJfwMhCBDy9xaw5H3CpH5HGdZ2Uo",
  "key6": "2kiCxkpNCptPvmq5i7TQSVWH5DjFS7JWCVy926tR2RwNWDFFAG3X3SpASfHn97fiyyRNfDffhVh5puJLqS4xvd5D",
  "key7": "55Hgb8R4XuoBwR1e4VhdJWChcVFDm5D2pkNtp1rue33JmSHPWYaV7PN6CdhMSdbcvYtyAZ3v3rVvT1YnprvSvoHB",
  "key8": "LBQAhcYfE1TYuxcPZwN8TbvRsgkPhx8N3QfmeYrw4wzk7HuSKkZnryx6dJEUQh7PfbdRD45TJoHRZ6SiqpmXMcv",
  "key9": "2ynhBPHdxeVUCwpoKcUxmieDsKeDeDXvJiBRpbumVALpdc5LQLmaNFqsntYq93vYU9RYEfcG5wNiR8dAXXh9qkya",
  "key10": "JVezmbqrb1irQGpCruTnHZidRsM5jP58ViVVP9A1zgtSXp8MvMHBCxhf3BwCekMt6oAsXK9C3ggM2yWDewApGuB",
  "key11": "gd6cw93WqSaCQTzN1AjPeTtfmUDndPmBqH5bfrzhWPLdGrqEahNmS3qUAqwPthvTWzdxtRzgiDijKmunnwzfY83",
  "key12": "4LPRNMRrKoDQb7JUvHW8rXBxpe5nPeKibCYZXsnXy869zeWBE9biwsRrBtHG1GntsP7g5GJJtrsmXVKYDME3ZuGP",
  "key13": "5zb27eLxq8wUZtZzbzBCUgoLzDnRGHqdbDPRDFkDCyUMR7yTSidcPx1b1P3QU5QYvLr4fVPP6UpraCjBf55SRJoL",
  "key14": "cRiuuo62HFug1D6Gix9P5TWpv7HtA21N9frCcZFqwtDqXWszUyDvbyLTpbGeQQ8mwg7dMMi7pv1seHgarQQmuQL",
  "key15": "2DKmih41Ctwc6Zz5wUYPcJCP4q8P9WT5KbA1dxZHbgbLMtjrBZT7nu1PaQQ6pcKETRCCM4Dv45FPYx4grL2s5bvQ",
  "key16": "47TCqdHQa33HRyhd5Qvq1NLdxZmf6ht79PevYawLpQCMUXJ6FSMU6FtBFJ1Y49wn6Fvu6PosKgBmFN6CgtoKqEqH",
  "key17": "2fRuDbRWnbefEyQ75tSMtWgwDFDEx65azfgJj83gGmzS9Jq6dw3TjnLPbc8CqP5UvtwjYLGTGjx4teCT99uAkWab",
  "key18": "3fed7mHjR4j4XrQScoeKcuJeGBRX6P5pt4mvnrwiXjW6XaN3Jmhd4U7U9dmcY986aQu31FVdftYtyHG5QvESpHa1",
  "key19": "3b97GiDTXyouLaQq9UWq9QTK4VciyNECPwLMSacGsjTskCpzKhF1fGwEn3fqXdKsZHfNZ1MXybHYsAcfjSie91BT",
  "key20": "JSwtgYWV6uWxQo2NfRGPx2LsxWXPXRJxTJDntVvvLQKTQbyerfLaM8Xko3dhBzEnadEM5dnd6hc3ZcCgLB8QdvG",
  "key21": "2bAwosfw5cNGBjSrRyAXc3weDi1s9rcLuBhATNf8pURAa2jt4cfcd7gNk5izBuzU5pazEDYJ6fGADMqp4RRhMqD3",
  "key22": "5a1Ex1ZXUJRtwwVJHvjGqY8XjZYmknrR2YNK9NswcRuRxMcXkxEsfgLWDJS1G2vnYCg5JiFXoUf6oQyi4wouaKdE",
  "key23": "RGWUmg2gTjkShBKhM815zMEefX2ycYjyALu1CxL7Ezf1CXaJEDVNicHc6AU3gF9MVXkyQ32ACfyybyzbqdxV86z",
  "key24": "2JCGaYQKH44QE2srEgma66xjbPDHGX6RFNuQQfnNv8vtB2Px3UzZt3YXmgthHeaPJ8sEyhfL9SP3gk23VmFAiFTN",
  "key25": "hVQD4ypnd3hw9T7AzNfi8QaDmcAdYqM6Q8QZPXQnuH9iTnWVDprcExz5wrnegqJtfuhxUu3yrfrSCGHMD2HvtXa",
  "key26": "3khE5fgsTMUCDKnvRzJTU2NcWMMudENQd9446FXynDyjrdetDz3pNAZwZKD4pLigFqqgUfGYRmeHdxNFePhYAqGT",
  "key27": "21TZ1Jvjr9M2hFL67Vm31oHsrbeNRGZ6JxkfZk9u113gYU9JMgYCCLp9r4atWncQLaRbXh7sonEZPRV8d2Y6umgp",
  "key28": "38GHLdX9dr87Xyhm5S8Px1SJzcao9i9ZNBDfcLjTqHZkXH8SXugZ38VVFwqu7rQW5zHzyGsfSXd6Ej7638vaRgMK",
  "key29": "32HkCFtg4PDyBE5ewJ99QdRB9gddWVyScaBrJthRKRWcyfFTfG2GqnUMN5q7R8ouDFHd5H3x8hAqAnXQV3oqYRdp",
  "key30": "5tzGfTEeeoMVNsk4WpfR69YKH8UgXexTWGUHBgiZUrdPZjdN1j5w8CbMvTqAA9rH2sUX8QwxQ7FULNtGmRfFeY9d",
  "key31": "on88MuYW2voeSAr56aQhW4r2fvb2Fh3Jjkiw8eAKMBAzKK3ERiuoPzpKhArVDXjMsiK79qhChB1Nkji5mRqxjJ3",
  "key32": "3gsrqxYy8NdFA1Vs9rqXCi17BuoLTjWBx2iaYHKpPWQ8rQLKwkCHdYJadMF5cfagNfjyNCnxitNJpArP9Easa7md",
  "key33": "2QboqapqkRESmZAJ9GVC4WSTfrXohqPchjXhPA4ajfE22GcZ4Tn7hgE19Kt4ivhQEC3YYm7fgTFbVHWv2Gx3M66q",
  "key34": "33vxnwNt1QZhZKvdPipN4WjJsNTMMLSeXTqj9ZSnLGEjzVcjERfAhxowyBawSJH8ARD2k7oiSTzUrdpmrkV96f7F"
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
