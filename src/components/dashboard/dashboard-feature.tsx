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
    "4szJzgpeu1UuamDdyBbovPcpR69wuGdGePuWKk8QtEbtZg2dKvVKyZ8fwo5FM27CWD2wrJuYcuCUCp7fSgnfQnrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mta1fgkM5xsomXre9E6Siz5iqcDs7V1X6NCEzHASaJZ3LFF7uTSmh6XXXznkVtUTVd6rK6uaRvR79ceCzZDq9HA",
  "key1": "4GCbTnmUPNqwWRJYpyC38N8obr6tG55bxqo24Q58fJsYB2c6SAMvNYHJ7wQQ1KzPfQdhHWEjbAaLCrHSkdZCMjuT",
  "key2": "dVki5JdwLjaQkeTu5tB3DCfYm9SehQj4nL81CwDzqQeM8bW3oLKfMQmdACbWtWcea4E7MJZHnaB6avvo1qmmN5K",
  "key3": "3dY5N6e9XexMfCvEUq3ysu2Wx2L6kcd8bBgNRxDwv7racDuo7Nao152Ab7SexDdgna5gPiUtESRxy6daDLd6MGMb",
  "key4": "4u9D4zaG25dKwPcMPUG9rhdGTCLR7Sz4XWK5NsZ8w9MeMviaMEnP1UKJMfbCC61Fp751ron2jfqcU4p1wPR2foQ4",
  "key5": "5ohTZD89YUz9bVSnv9L9JF2SZEEHvuMyYwYyCwMQUzmuyBeT4RgLxMnUTPjPMRrWcqMPb2RFXEHUUnXbnXUzcrNL",
  "key6": "NQDJsua59j1SLsJfXUi7CSnUnAEKbCqvrxX4Vi5aSZCBGGXwWUZ7EzEu1bwQFfE6B53JUBDwDrdYekGJbcFC4fM",
  "key7": "3UEALDpd8NvCQrMjXmW9iWGseW9LButydm1P1VYSMczyEjFNXMDoaBLqa6XYa6Autp7Xe5QA3ffvGwfrDXeRBNzk",
  "key8": "cWk7wobGhiWCnmitriGAht12cnRnN5dRtdCxxXQXv5Kvtn1KeMoFB1bW788MA6trsk9Mfz6KjhPivgpa67cauNu",
  "key9": "bA4a1iJa3uoCUExu9rriNGvr7iis2xi86p8vj5UPjBFwrjSabBCpt3iZN7kG2Q7iC8MPz5zF4E1zF9CYToxrBZt",
  "key10": "5pXTCY8H1bxybVUXQTR9TQFkTMoxJw3F1EW56oXyxL8CGBS5AH8g2fNnsKexQWH2sVfqueSQavpTk51tjLfhPmdL",
  "key11": "3qrsgP5WFgwq6iGHCmYnaXdc4ZrBNjRLjeHTtAmRe9c6LmthkfsCwdY7HTQoAEnHCXSznTxJBA5JXMPSWd5vuV6m",
  "key12": "2kvRgdJXZBkHvizJiDQH3TenqucCxKknwpNzrBzQKNwkDKe6skKKJ2onCZESNbQ72MJ9WNkTsua7gURESBLiWXJh",
  "key13": "3LRAuiHSa4Vehugxq7JPQ9Cfg2kMjxcDy9AmH1wZ1p9tDrMrWMTY1sUbsPjj6kHnW4DQrdNGYjzJ7rpQ1sHrkNqo",
  "key14": "2J1xER9NTkzZuziiJVC4NXaVHtQiWmJtPcB2t4CSzW7aL7wKSB2aG33QRBBEDo14d7RxN5qDSMLYcx5d8UzFztAq",
  "key15": "4fnmbQrBPTEbzPkzV5NBX5dGpjsEngcjpYesUqYFiLtBUDERnkecFUMWXQVAos8GGMJUAn5JW2qT3Ggg4NPmFjiY",
  "key16": "5thgAPzcBky7Wkn2Lg49CYkfBWsjRMBjPK9we1TeZPB8YrDKqPhtr8UPjf2BQVZNGeX87G2DF22buSAJP6zRu4Sy",
  "key17": "4r8Bbt3sgp21W5MDGxGex7ztZgB9U9FCJmGe3uBkERXDRPTB82TrHpBE7tjsrzFvvotLWYfy2tTTBhp5dxokHK2q",
  "key18": "5rm1NVcWJTVFbbSUMpjo9P7RyZUxmQfmmKA5w5632vzeCUZSbc6XhyEUYGsfxq8jzqCWPQmquCaDdnWxbkToafAf",
  "key19": "4QH67vM9c6zHQJmxCRoCHvBJqJs3xf9WK4CsdsSwmztJK7LsuHRqZ35ih9RB2nMZBZ83c98Nz9s9XSYB2c5Ywgun",
  "key20": "36FAn71XBrpVLzm1fAkRMZUeZ7xVEE2seFv5dJX3bM7C9WhyRRzE66ndXEaTUhcGSC8hBgi7zMvRrBeTZ47wYyPt",
  "key21": "2wH4EYr8VPZ4qk3XayBzBXUP9Rnk3AmMk1v663neGokk7hQUusCUuykm6csbFZp58ZbCE7pFva1dZqd1Xq3EfxbL",
  "key22": "2pp7enRNQz1h1TRNx6ABrx2sBtFEohiAQuWBhwdPA3qvTHhB7yNZuZd2NTnwFLuAqDfDhM6idh6GYcN81bwpf1FG",
  "key23": "4xnDvALxmpy3Foqq38iM63n74insAkBx5ddrknUh9E7aUSQin2vTTmPyPNwRLMJ1JzQ7b2h2JHd9nXh8Ah5KuyQ",
  "key24": "2eAgzd9pgnWTAkQuZ5nUhQSkGrSEB4RS4mg16LHkhswbkRoFFsxvM2s3TcnA1gamiV8SjCuJ4WbLSPkHmAZS9EJY",
  "key25": "rSyUJJA2hbktbc18Epi5ZKQQDrP83Aikop5L5W2WbGFLpgNvBZGopjwtSneMkccJyXkJrCaH5rbs2qsGwsdvLgQ",
  "key26": "46d3UdYHrV6CUR8KMyhfQ2UEGeiBZcguyY9sR4eAu2PuXz2a9Qgems8FPisvukWVX9cqeKNtM5tAovrBdmz2BVj1",
  "key27": "2Lkb7oDWSfetHnCptqzDYemWbrTpgtcnJxRnqpngReYtgiUwSw7hbNfnLu8iia5C83HyN7VJSENGrpauwT6cTCzy",
  "key28": "4Ca1vquMLuDmnynD6AWojRtZ8bQEnYkfncH1nnj3atFqtJuReu5DWzHnXU1fK1RVkwpw9dnVuUmPg78vynamAGGj",
  "key29": "5yeyuwFNmCJo1e7aRVX1tYfUtkpzjJaNj1FPJ57AiVyA4qF2NirqrwUBfNAe5dJ4omw6ffhmvy5NenFwyhJjfkJu",
  "key30": "kbMNRuS4NqFp7epUDNmRHJZhb4QubskajLu5aa4nJsBZRzpKE8kqmVVbp6oRkCn6JHgHCSqAthiGMQzQh7asKQh",
  "key31": "679W1wthDc1srFvv8bfNawdGET7Nf3ufqQq2BSu1kS2h2dJhqBVE87Bp3NQv1oAzqqtax35ycCZ14SDkmm19ACeg",
  "key32": "49SjdQcQAqQYgGn4m8oZYns75aB1L3zhWNYeLRfPBYbkezM52CJMoUuR93N5cnaVFzjk2LHeLxMjeA7se8ME5xAt",
  "key33": "2Y3k13nDSQ9xjM3tpsTxpkWHQ93ELT3T1axB49U8N3FNKL4fwdA1SC4EEuFZhYmMGxwqrdmJe8aH7RJZ4Gng7VMG"
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
