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
    "4QFXkzewHwBXSWChBdccAWwn3K4brmRN87yRf7uEjMDroRywWtHu5wUuV78s1GkyTE8fcSXx3bmnaXRxsWd5JdEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mQJrv4kqxWn72nUJ5gj5jZVm9n91bWa7Dh2Dgec8rbRMa7dFch7cZZtQBuGVqadtKELfXiGuLej7XoTMCT8UG5R",
  "key1": "2HqnMNwn93GX87QakRWLuRPiafesezCoe7awLru2Xsfh7XJUqSAdAcXZMqnsmE7kGvf3vHRAgu4vqWTTQp9veT4P",
  "key2": "2vLzckSmrD51TcZJRc5er2UiEJS1NL5vQFfwzD4XtocYsDL2HceXSvyPgqmaTGV7rKfKjKVEjAecNtpQF5gKKvnN",
  "key3": "9x6uERJ2BZyXPL2Xp63zNbdGTciFwF6h92SN9nsA5bE4fwuaHVmNECRgCtFEuzM5qE9FAYD6mrjXNmpL6bznVWp",
  "key4": "y9eYwucPwgTiG8wSkkQjQTiSUcbbnEhAHMncGCjBsY8qhioRBbBHYaspASBe3UWtP9GviQ4qCwwHcQBn3RT7ScZ",
  "key5": "2SeJpqciY2TtmrMYNCrK51DZwCqaGDjTytcvWCXERB2GXeLTBApX1CYo3sdASZcxbwgRc1gXZobmidBKyASsMgzZ",
  "key6": "5sPf7xPeccQtotPW1yGpfya8PLWWUJw75pWSUYNLRTJqiqiWaVdSC8F1fpP6MPYFxL4jChyuAH9aweUvpzgJeVVu",
  "key7": "5EWb8dPs9JhQH2yKdpgZb9LidzWvHBWcEkH5tEdNY1xANZeUvHgZTMrC6TE7GPimBvx3VvLtF8Qc7wTYbWanPHZD",
  "key8": "644YANVqy2bTA2hw3jhdnqEMqpa4km26Bh9i45ruCxjG8ymueDtMUkBRLNktKHrqe6yBh8W1vCteKXhvod11AvEk",
  "key9": "5AE7EZqZZ6MqY4SgAuqXFybbPeo6yQH1hVVk8i2Nytqm1N5Y4ZpCJTNjWcecTF2bTYFpWBwyKTWKiR6yRGcPY2VV",
  "key10": "28CHqzmBejCyMse6CPM5cTog88fgLkVzHj4VqpKVuRCPFEb3GcHgGSwAXoxSaKMJYtsUNX67SKsTJdTipSqFi12V",
  "key11": "69CxzoeqrfCTcCyf3UrsXoHBixjuxqcepBViGHYg8dwBcjgHgZLLNFC9SyWWFgwjB129o2xAkYbhikjSRCUta9p",
  "key12": "vuYcPZWyQogmCSfhtMEYGfuaNv1hT7xV4EGtQhNiFXpqmxTYR7urV2dKdxavr8WqwVM72sm71oxsuwESPHtRLp4",
  "key13": "51XtYWTDJav8byfSa8wpsGEAAvpcMnRSjnMxudzvb5Kg1v89BxLKau98N9JmNJrs4dxdB2zh82xXdeCRRDMaVPSv",
  "key14": "2hDJoCgxM6XbFJt4LuwxgTQdq2SiSrm1eLozRa8TJXYvSLeKCNwi7auKLsY9DRtEB2t39aXXnDZ5X5WAX1EFdZ8j",
  "key15": "582iMWsyPFBQZWUZQw35fH6j3KzkzYp3jC63m4MiDTwmWudFL6gyZBjYRFtDMUbpP1FVTLDwsrhiPnDX3DdMssaL",
  "key16": "2dxCSjicSBz2Hg8MFmx1pZCApAgkux8wTDVNgsibMXHrys9AE1aWELfMjCZEzUFqoP1naC2XvCbn2WgmeLX43SR7",
  "key17": "2JtqzSk39yPf1Sk8E1uzBnrCN8hFXsrv5jmtwBq7mPcTDGQXY94x4Joz6EsLKvo6rRHHPKxVhFARW2eEufNRYJRw",
  "key18": "3L63mwKVyrH9ExE2CY2uVtQkV8U885VejAHXkq1mXAV8hCZLhEymw9hTpvGbs3bt36mcMsuNZL3vn4urkFWeTYtx",
  "key19": "4SJvvMVWVs3bt7W3MtwfKXzd9wVVVhGZvbDwGSsou9CKMJvLkqACsBUgTwFNCDDzGjMXNYpFjfpPUSzYFpx3k4LM",
  "key20": "4cWF8hHt4HVHpbdg4htRPZc1immGJ7XuQK9SY5WoDiZiwf8Q6KNsugm3qjYwQzwtWpEVAzuhBQXoqK4hirH2DZjg",
  "key21": "4fpKQJCu2A2v6eEenBfYQFf4UVEkdtKjSX2Jg9ueTpHTvSkNU7tEQzrX5PFMx3AgNY7tHhoNbWn8YUTxme3md1Q7",
  "key22": "RZZtsBuaduyEtL4DdxuCq9yHo4Bten7naHKghseZujDGquZ7t3hVKtTKbDMt3Cu625ac4eKfz32WdnAt2rCUnm6",
  "key23": "53hTYBRw8cqa2r3NTTfSwNochwvj9rKaPggJQAfF17owBLhakd6FYBxUpLKjf2xP5mZoE2Zpafsjzv89jtEUTBGW",
  "key24": "4DpCTvYLz9tqAwdmJvb5R4BPihnsc1t8sjnhLMFwXNpXgpbF2ZyUNpDGLFxXEjGMEzSesYxA84CE8vCnRNxUoUai",
  "key25": "Nu7R1GuMSUrYEsjyp8Uqt3y33XQRbao1KD7pV3riVverrj91wTLpUerGdkaymSePM5e5DuqR6XtfDbsdKyNy5Tc",
  "key26": "pNdvUe8Gx5sqUH12oxytWe1whwQQvMiiV1gjFoyE7X355Mgs9DfBVq8RcDZZyDCr57PwfEVf4iaoHPwd2EAanJ2",
  "key27": "4sSwjPFUJxGh6EdvMBwfNQ9Zy7dVXPzAfqREp1bAbFEeeYf48CmxKux7j4PhqPK7C8wcsbHLMhoGLcwRUVhEgtPr",
  "key28": "2peSJhUPchy1vwiZQzcooYyYRkEq1JnuoUbettxT7PaGRe4SXbR9H9RS4W94Kjv7m4RLczqcDaYeKEBT2JTprWDZ",
  "key29": "3CQKB6oJqXyD9qBBeqGKyTdwDz61oeUnS6nU79wn2HxFqeuqtKkihDZQFg6PMpXvMV76K6kbjnJeCKeZCVzcNpdL",
  "key30": "2KJv9mn2PbXL6XM7fbHzNnUSJXPqHqCNFCGDd2SkuxDUJtXhhiZyjg56hJQkajWoJj9Z4w4w3NpzoTzLc1GW9JKm",
  "key31": "5jzqsprmpFkKVE3EyoJWr89aBBiaKisYLk4YpuoatkExUZDUeX42DWZde1hyzXAna92vhuhdLTtG49PHuP8SvD1Z",
  "key32": "5Wrgb3HdvTd7VjeS9ZLkLYnEp15Bnnn9EzE3itdRxGBeZWr32UAAvJL3Xu3EVh6RzrNujQbHv4VGNvQtME7LBQC9",
  "key33": "jzaiRBbfM52tvBs8Jq32ob6yEqPJF6aXoxzAoMH35M1wUn5XhHmejgzteCBDjCnAbSYf3PMFNdQbp7ATmXtHGJZ",
  "key34": "5Gxv2MvmJnQyEypMWG8vQgqASJJkRkwgcdxA8mS1raA2rBNMo2LX9PKZVMvYutyLSUTLpk74hM28jiDxKwGTnzKQ",
  "key35": "5ATnv1Rs4VkVUDRTswEd1riXF6ZXPehCxaprSj2L1dfjsS7CppGkVEHU6oPLKhoBy1nLzt6kmsj4ERKnujtBGW47",
  "key36": "8ApeLWTvCsqCuFpg1ADUNMKG6f4xrSzP8r8DnAacX98mjsbQ2pCRN8knicoG8JQF8Ytnmp58GANMUKFeZwtky9H",
  "key37": "5YKZAbm8PHiArVgrsryekRyMMhEbaktfgZRoYmKjZGYEVXKEa7SyauyZxPxGJWP4qLvQ8LNpsR15GYiPHNnJUGE6",
  "key38": "4CEc6dE6UimXEyhnsoYaUHGDbMJCYtKCDR3eta1WoTRgsw7zkzm7YSFXqV5gM1SQ5VSSN6EnQzHGR886zGU9V6g5",
  "key39": "5vLfgzvsjeenwZjXqVaBd7Gz88FtmMLv8oAs7WBis6kUmB61SCtxinKLtPbp5q7FYqKz4eGT2KCqcB1atHUcvuvo"
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
