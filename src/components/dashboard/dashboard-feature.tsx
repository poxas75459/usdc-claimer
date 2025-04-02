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
    "2iLKtpJgqFNZHUPtw3UtCHkRE88uu94eSRuaPE951ZBYUDoQM8pQ4jT9YgRxcZro1HN4iu6GJ3CqciyhNkMbhtWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RXgj1c4WvworfLMreadCmF84qPWTyv4qoXjBz9Vik5Xo5DCmvAae8uFTJVa7zwL2Y4N9FcrshUm5ALNPhLGL4Rd",
  "key1": "4vi6wMYCYAgZsstyNpRH9APkrJ4RWQV3Mk6h3uYJoGKE9BpA6YjWjWBx6DJMSF4JaobaUQcoRUed8D4TCLNQzVca",
  "key2": "29V4xKxqdUW4Xjx68CVwNiCYNJsWWCVLpJnEva8G7ahStMx4nSSTSkAAZ7w4tx1pJHKLgGbFptXLkg8WGUspEJcv",
  "key3": "2mcM9LMum56DKxDRwnWqDFvsh1fC27g5ZQJAPPkhBrAQ7aFRrXKBycmnnAbyi1dRk4syAWHB6JQUB4eR79dNrrKH",
  "key4": "3g4sysDLeXW7wuio99Zw7F3fruworphpvvT87xFn2SSWRPMaiZMGMoC284ESgbiFDe5K2RZ5T5CzDwvYULq78dwG",
  "key5": "YXKQLerJcLmgBdQqtEsdkJpiSoQukMVSrAmf3BDqebYPFeTZJM5pQoTy3mLUebvNaMMiwf1p97X6DBMYhP4GyBj",
  "key6": "7vDAr2qpScdb3wq9LhytdCGah3a3xSRyWGbXRpK3jMe6bU6k5ssv8gqCoqYDjgK3SgkzGTDtCAdxWvU9N3QEd5c",
  "key7": "5DpwQRmNymX7w8mTVhodrik5Ba76nD2fkuyyWXq6ncUnKwkQz4rAfzE4c3BcpgNdJwkbn2N3kz3J2zrNrdZMvaYA",
  "key8": "3VsESJzdhh9YgBqiGkfKZhPH5NLCrue9hSghTUVVp55CofJ88kyCUU7FUPTtVMfspJSnw8YUziRQVjyjZRZTHP5q",
  "key9": "3bpKtvRtg9aA7s73MaX5cvgVP1rcjY7WHAdegfKSHoAN1e5wShFMH8pnjpUGuBS2oD8nkgB9uC37ZjPRAB5XaiPG",
  "key10": "Ss3fxDp61qcZsDB3BvtsGcHBNecEBfmwjJnYXf4xPvJWWgwwvgj2gxdUszKQnRqDQVFyyCaPf9uWViFTzWngJyh",
  "key11": "2c21cD9Too39onABd1PYVHTTgkNpNEuyfzHiTWAoeZNYTDdsrrWGpxBtMqVs2CAhRdk62jxJa45oVKpfc3NoHqpV",
  "key12": "4Sy8HbpJBVdRNB9cppmCSfC86jwerTtS1rb2tGL2iZR5DPBuTToPf6dj9Ap1LPEHnsiZxc37DCbLyvLEWX3v4hf6",
  "key13": "4mNL4HLX6D5QhUzqHU1d9piy77vg8mAzGtMgsADxUiSh6sVZZXV2kmYDBqtCz88WHpt4CD1p1A8FytcH8hzYzdjy",
  "key14": "4u8L5Bh2UMwqDDVDsEA1K8bERDDpH1PoXYzjt8z1NhH4pevebEpnYw6A75amgRM3uok3JFqk8gdrCBfnjvURayZT",
  "key15": "44vh4ByJbhkQLidcURygGdx3CWVob4341K3uy7XSHFRnfGyxp7onXj9ebvcHJxwj1hH3hhU2VGmcWHsCeBBWyWb5",
  "key16": "ksJsjmG84tDN8LXkj1jHSApSaxmNksAMryMz1UdPAN79uHjjbDYRAF7cVCiuUzXR3wsTzN7BmRW9TTdXpY142AN",
  "key17": "2wMMBcoWFJq3ZcitzgpG1F3iueutYmHJUCSA2W8YmeAgKsNxDyJFACbgbdeiMobP2t4j1HNBBwawYwDUz8NfsKos",
  "key18": "2XXefGJ9ex1gs4yaBXKH5RKe6v7vRGALLvBCQEcaMC437HUWZNoa6xnSSGBgbW1gRcr45cPuf7cgGPtrax4gaSGB",
  "key19": "5KgMTDrJh79EaaC8YzGsCYyc9j3zp9GBtZ3jVykRo8tE8uxPyzwRPCvCFGtpdndph2sdoo9yxM23iH4fJ9k7GQHS",
  "key20": "2Bnt2M55WH7SPfCJ7jUaHw8bHskoaQ3Gct1fMYZZNWyUAXSfStBb4KC6LWPkYJPHNt6wRPDRgEUDhxn9oYLMpuim",
  "key21": "2nCABEzX4YptvpduQBmmLFwyue6ijzvXPBLVusUcz4xt2yG7NXZpGs1wvKX9WreDFjCmMBqaucXNxo9Nrm5QVsMy",
  "key22": "RmPjt82b6d18K2h4oz1VefoiMUot4hF4bDuNXKSyf3FZT9URCmpgjjmSx7zzvyHvffjNywS6i94i6j7TLmdnjEn",
  "key23": "3XeVwqEC9zLLU7FwQAA4QaMyPXHWuQar4KMLHsCfwFDq7knBhNcKVfpMxXuMJ4ir5XBUi1UKqCjmVP2k8TyBTZn9",
  "key24": "youy3Scn3SpKqjPzy2AEdMpKtBqRxrPNmC5H9LsX9cKyprrC2ZEebHmcrMSeTxhyshUzHcSefLPeBVXWsgruiqa",
  "key25": "4NgFV93bhsVUS68mNkoDMWhusGEBSNFbcJaN4XpnQhySfeuQAQSXMmZuqqJ1ucF5b2bXEKo2whik2xt9P1hjFyKV",
  "key26": "4mggwDjmYyv5CfZkodwfw5fBeQoZVBqhMBf4ZWynXpKBSipoRzVA19PoeKkJQY6KuViLad3oEPBYX7HPHzTwpgL9",
  "key27": "3aRqM2E4a9u4f1CuW5qBShynGcaLZAYAyt565oZawPNmHVUeWXDkHZDq3QRRjSgjCf2JR2yuqEoRbYVCarVk6hUE",
  "key28": "2dC9m6ehBjzmupEhbg4ec7LnMnVsXsGNMz3jdegG2vbiZR4ZkvhzKHBJkePsf2FVKGBHJZkZ49J9qE9faM2jWbYu"
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
