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
    "4j6XqFohb293jSZ74FvmyiwjDpaooNBf5xDox3iz6S4JxWFJ3di6qXDT4oj51BWDj6jkohdJgX47N76QU9ptxgsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XhNL5ghy9uP8TzHmYWd7gSdZHm1a8NxBRfZSReJpru68sRiFEEgzUMUe57Zft7TBgsLaAT1UtRRfR3e1b6NbEKG",
  "key1": "5nWtQ7AwTSsyMsXkNGDCurKEVsVm61XggWhnCzm6hMUTWYv4YiMvb7YyAH7ZjU8s2DqzydGFsD3MuTE4fheb57mo",
  "key2": "4Gf3MqwkY8RXudaKfhn3CLhrRuKqoSvQgeLcsSSdvpar4SDHtuEW9uu3xSWWHkszDHSkF8bTiaMC3b2eonfb8PHE",
  "key3": "3YJxnw7PQ9ZQ5GoahsvXXgkk2XnigWAKUcxJaGQqxsSQqpXs6FK2Cd2FrAoKbod9PEBKGQMf5bycU7BQtEH6adn3",
  "key4": "4KhNEvAHmGnfaxv1avdzsreghuaySfQheEGfRDaCqqXjX19587VUnhmjjMxH9rK89XNZJEANAUiHyFgjREVEjy8h",
  "key5": "2i3LNVDwwudaD5SKaNy6X9LDJ4QCrNSEeY6FvTyFcz3Z66amCVhmUHRWhQvQyKpDs7DCkmeNywX5XAUwP2M8AK64",
  "key6": "3L632MsXfgwfia6p4GuDq1vtZHhNtCFb3aUktEKg88dz4VanXKPtju66BPCjscJ255htktyNi7wBBJwK8s86cAiL",
  "key7": "xE49GGLtwH3ShCwySG23EHQujBhmsiwKsExPU5b7CN9qs7GEesE9Vw7QbdhJy1Xesnkzq3TYtNxvnypws8YZHBq",
  "key8": "fBjFqKTP7byDjAEnPLg9cJjCa2TKnX61QabUnMmrqW9kqZrajw56X5ALm5XgKt92onVTv9DbsRLni7dUPjXUyc3",
  "key9": "2dnkouWi6CuHpinzogafhvTfu1PzxxBSbwJqK6TBEp1cPU3BqBTLBtaRWQ86hNg28Fjvodw3Upqzb9jt5qSQVNrX",
  "key10": "etkB9RQ2Lqt5qg8zerTFDTZQtVNVY8pCLQB8RrTe12UnLPC7T5DbaTJtC1UT6MgNB4VDH8A56tbkyH91BYo1ECi",
  "key11": "kdifgB7Rev9H2TUEjTSE1a7oPsfTmH4aehXHhm5AmtWebLhGGKhYMdvBw76Zpmyv6N5qBBh7gJAsrhGQdBtfKWY",
  "key12": "388hLAETimGEbCFZMSQKVq8xoCMmVTgF4BkQw9siPRyRdodTgTi8smrEA5fvdq6s3H2DyRizk3b9YkJWGUN4jQ1A",
  "key13": "31ECsUriQWLczB9oLWoq4pfVYUmFRcSjngbZ5Tj5vkwC5VaBofHafS6zv619dzCT2DVb4NXw7TCJKQsXNgMyu5Av",
  "key14": "4H2vQCYfmfqzoatHYJginFHzFkodX6WzCyvNnQuBBpznZzkgosDKytwHsaQbG1yrZBqmFBiX3MUjLrzA7FyUs5vy",
  "key15": "3SmJ2JRRBRkjEyjaWY6J7Z572HebeJaqyLvLCfzqeFoho3Kpsh97zGRUXkvQ5vfCGkuoA3YRLYC55VeGtR9VoEpz",
  "key16": "5JA3moCrZxMZfEC8C8v7wrmmAY6i3D3QRbkMSykmu5x652PVB5ykHrY1vTSU6wA2dNFcesaekSmprvdhYD9FQRJx",
  "key17": "5vk877Bq8pJHCdxXLTSxCWkui8LzdpDUVzJWcgF5zEyWiJ9YLkDE46vVkXzZTZqcbpFJvyyX4bTZMd1ih7ZWwHbW",
  "key18": "5Zhqe8ycKGkApYSkPCzW4u7GTHN5N3rxa6AVgQrv34sWuXYrgQH2ye2jd6KXk7WdpNBBzoz1A7uakUn9m8FZkFMq",
  "key19": "pjf5pdpHwSAwG3ByL5FuXNaamyYfuqWvSnLmn9q5thmDyZjJtyeYLoZiyKdfbTTS8rU9RbJ6UjFyzgNfK2NeuEV",
  "key20": "3PKicoDx4Nj42XBa9FMTpp9NHjmXgG7PNc5ASkv71hAHj1MMbLTNXKKBXoDinx4GtUroG79WpWd9EGozsBwpncvE",
  "key21": "44n5Dyxr5FuNVKvLH19N8jJRMzXPbExVsScCi3jyBLbPGNSdecvyKuJqfLfCApUNQhmstSawMzty5ah4kqn6cFn6",
  "key22": "617hbcAsJZQAHTmZf9zA2Z7Ze5FnLYEwKGRjdZJ5Gn8NoFkMsVAuQjvqFPggFjKXxLHYYV9E7SWPb4M5xACgDD9c",
  "key23": "254hFhLyatybVH7R4roFFThfVHgMM6nfxfHJtAWbygGjRYFny4pAzb9yUZNioVGjeexq7LM5MoF7xHgFghuccZKt",
  "key24": "2cmwgWB6P5RoURPsJYrf7z16zqkEPGtboSPPgqNFc5CVZizHwymDRujEvXZgbVR9JGLfNkguvyXSvqzAMSwhgBxd",
  "key25": "5M6xHhagjaq37dutNMU7cAPQDMn1RP87tJhPP9eMJsVoM6FpUGnpC9HaAXUHpjBmGBt2ymwy7yuc2CSWVeM9nPUB",
  "key26": "5836pg4tZGYWeZPxoZNNUGsjeVq6BcVLsfTLFrZpe68sJQAKqTUZUqHTwGJs1s6Mi2tiYqtYc7imSuPLm38iNkpf",
  "key27": "39ePnrMGNPKrGehSjRADPfbanXrsz7VXuCh7DCcW3pSzFp9ZcPsbtURbzTGYtt3KpHEX9X7xdRkPLMt8cNPdx13p",
  "key28": "69wkYrXqMSQtNGPLiP9apx77RFoJLBcAeYvTCWscUVe2Sg16cAdUu81twvidHiG734kMg73aivRjNWeXMShD1e3"
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
