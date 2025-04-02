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
    "4D9vpGbaupsU7S4NpS5zCy2NkiVfR3UFLPBHox8dQwVGWKi3NAESW5hreNZTP3Xq54nvswZxMghJAvUc4GujeURZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38qEGsderbEAE2LRcydqYBf9cDRz2NU9Bc181J6i88b9CfbAV2GsJwYokBkLj9WEwQ5FyqkCUe1uJWWq9NAc4QZa",
  "key1": "J3BwdoefBC84MzVs5rF2AMnfGXGdU1QKZp7qL4veGegLkDtQP5fR5uzu9YAX3GwHjkExQodTaKwgW2jhKtgVrQV",
  "key2": "5FdAU4E2UrMKXKpEJvXLbaoXHoKAs5TqwGnCCT15PGWPQLFSBniUFgapYHxwfS3r7FDWCKMPXWQMae6gwbigAQ1m",
  "key3": "3u2ZoxeaZdBvxFyjY9HJ8VWYHsFWPxeVmHREN8nWJexq7kvz6us95ij5vDDWVEGL8V6AASRYMJ8agy3HEg6ESSWb",
  "key4": "4fGscSrYayxbUMXSyuMpcUm2Nbb6RhS2dLrkUrpYRpb9oMgVjubwh4G2cpyhMfzmXRpkPT3p9tHccnwBDc1ND8k6",
  "key5": "2YvhS4sosVrRFhd51XtSDoFrbw7PrcHmXtWPVrD37fyEZk41j3W3MVERTALyNAUxZARZtUbekENvMf8CUMkdbhCe",
  "key6": "5ZUx4saqmLkqeWdjbnCYAgpoUzs5GHaGi46GxCFSCmP5wvMQRZ93BwnntzVQ5ZicTp7JdentV7UmhpQTcKs3Daxp",
  "key7": "2rDWxfyianz3VKwPAN1rMCNcgq1qj6CCR3vYEKteGkoSJJ4hUgRAe63ZPYVnQ7sepswaMSLXM9boKj9XZi8Q1ycF",
  "key8": "2hYknAEcgh4iT53RxFqUZiyc5QZrKBkThCXkNqScvfTN6hkzsMthixE1d71BWBVBTq7GbgRbKCnCDMVJ58EhnUcK",
  "key9": "3LhHCb3g9soea965XyeqMqEzRoBj2VdK6bvUDfzhrbVY71csy8tnq9a3bZqJLnofq8NCsFjXDd7ALy7w3ccryDwz",
  "key10": "3WXfxpTvEzUjgaPE1LDUMwjYM6m7S92KiS76JMBWhGbNUvdaXYoadjsS25SFK1urK9RbHLoi1QojnjUqZqLknLcK",
  "key11": "34pcQhNLDVJxXrjqVXYP4FFqwK8fN1r4NWtDMPw7HRL6WjoToZnzQvVVtH8tNLMu2SvkENBzsbULRvs3vJqSu4YS",
  "key12": "5WdUDkuXUypPvz2HTv747rAhcDH6x1HnCoyyqT8j7XaM8GsuVEgNgaNpstDphV3YnkCeFWccMqvFaVWA7YEomPzz",
  "key13": "3U25oGVPt38YMwWoF1wuqCUxJreQkVz74pFMPwpYKUzK8uMjJ4T5UoHkX8oEhiDkqTFYsZkgxDnGkEUTeeGKj2EN",
  "key14": "AVCyp5tgiavWsKNfu8Ls95wBHd3yciGvne7LmGsAXs7uEU7Kfw4s2XNgoThAF9TJ4vAmu1DxdLWhh5sTEkvcMcY",
  "key15": "4sasyK13nbq8daW1LEWisa7wsLQsuufjCi4UuEo3ea4ceXLySnhBfsdvUqfaHf5xkRdNfJrwnA3XQDQ6Zq2ygcAk",
  "key16": "5eVr5BaRdh9fyVqRfhXK7M7y5NcT3Qzb9TgzeUQAK3crEn2W2wnVrieiwj7cZAzJ3Jn9aKeNNMCHZz9RuPwwNYsR",
  "key17": "4Wmjp233cGkwZjdckwdxmKzQdz3t7q3h29hr19CKoD78w7fYh9jQcJw2nxLCqcP1bgCCBmiUShjsidATw4J451ML",
  "key18": "3Cg3wzpBfYdfvcJKMARBYPGKqC9T5ncXqCShWycX7WSmM5b7R7y2QG1tR1yGoYcyFc4F5L6p9djYMpsHQcg6cZUY",
  "key19": "5RERxNZX535AKyS8cj4q6aMSyHYsuUXBXMJ9auZqbTSQZp5RXBCJ5sBj8cKRRdr8DwifSLBjvnmJuyUHtdMiFRRn",
  "key20": "y7Nt945jYTrqKEtFqMr4it2kH3Bn6PSkdiSoo2ABoxaUYn1P9vzWPk5mvJkJgxq9vNSRpAFHqWYKD9TqaH8vK3A",
  "key21": "2kVJ2SqJgqNW3WmHRnam2pnp59ZM76nr8e1nzYSAHrGvK1GYPghKzgFTKsqAhF13sNfP9WQF7AY4fDcd2sGp9JNT",
  "key22": "5fJtfPVCVVxC6SyjG8jddCaBeCN66cYff86FdpEKu658j8ottaGmixvQNPjx2SSZwyfA4SCzB4ChXYfPUTZfiqgR",
  "key23": "4wsyHXHFZueJeqJn7WBjbGcqRAZEjVQCccjua3b3x3e87f8CqS5JBNmmL9sbUeJn9MXqn9GBsCM5UCkkw25jMqoZ",
  "key24": "2Dcc987ND2Sj4M5XSFu1uKP1tnA6CTpE5FZQzgH9aHKabqWp3C7xDBFKCsSdod23KS9LZqxcFWYiucmE3mrWRNM4",
  "key25": "41HQyaNqDhkncgRbSotrRWuk9es6wj4L8VQq2ofeQ8DDur5mDYiCdyjW5Zs8U8qFr1yNdcLqL6oha4BdrwKj1y5a",
  "key26": "3jfbhSnciKyLMDATioBSDGt43pNEcdFZwQNLbuTn2bvnvp52QQuww6rPM28CyBnuhq2ZT38C6Z9NRK6mh9jwvYBv",
  "key27": "5bN83gxERnvf49QoBirxEoTbZq9dMKg55r8ewC6yBh781twZWfZWH4x2XGgMbvxpN8M4tJxFbPKEKrp34VF7d6jg",
  "key28": "xfnuUGNrKzZ4TJqCsX2DhLSGDGFHnLCnthNxuHmX5UdaBtkQi4xq2Mzcc8A6wViDTbwfmRw2VFviFUumVqPfr6M",
  "key29": "5n7zkMFmie8sovibYRua49e2ZnjAixnJmXhEvro6cEvPcXqVUXkVdt9xaf8YqM42Bfpxa9bUmJk4fC8g8HcUoJ57"
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
