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
    "2XTwQ9MKEi7FouNJog1gvLgrWtSJPDBcyxH5CxSqW3KFLq5P26UKcCs4ti3iscF5saKPufDEiLYZC4g89cEm4PZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EMz2VYDv7SNPVD8Xm3jfrwZdZ8qGRzAeS9aH6stfxX89T5X4ndoUktiHnvjaWSn9KDkucWhYxcZhYqrgGj9sGoT",
  "key1": "3vpVxRniMStwJpq667HJYdXyjrqwFWJEMCDm4gjYVZCD8qQUP6rJ9ww9ujkQV3t1Cx8jh2WFzA9ciPhx8ggt8uqs",
  "key2": "gxEX8L6TENm6AxwCfqDVfn7GuByAYKqSBdLEEW9wztsGeAJJ5SYmP6Y1Bbbgty14s2fSEcGnsNcedtduSPPFkWj",
  "key3": "5zSkFhtfxZvXTHnRDboEzdGXWvLNUoMte2mvTNVRV9wJP2KwJkAjNofqd7j8gVjkLUSx9ucLQG8h1utvzFMJ8o3q",
  "key4": "3dGjogbGzB5jWSXob1MGbxChSMXtcN4hRMprjdP9ihdiLQTo7bWV32e2gF6X7ShLk5K5rwK4zeJynv1pQU6YRAcT",
  "key5": "5JyAxCWVGAtRJbAQDjwx8q1vFyr41kKLDZHiE6G2tdCBoT5W16hwUjTMV423v9oJXwWnjzaFf6xGra2EeQiyTHJF",
  "key6": "27xXprVKFEqujNEcidwqHiBbiTKc6UYri1e3EeKG9mjngQ8itWLXz7Yj8SPTsvwWpPWrNkWLtAaHP9eoA1VAKrcG",
  "key7": "2aWGqr3pPxwgSN78KdfzLMUegfVc1rs1RdVT6tc7wJ2Eh64jSLp3yQGE3vsXUztKa3zRNyJtYizfLdTzFfdgH3RM",
  "key8": "2KgJvjMUHdgbEfdMXrd9czkt5hCyeKjFMTHXEH75wJcWZc4gJkQqkoxzXbviUEPG6crDWmsQCbrUoc7Q98D55zKU",
  "key9": "5T28JmEz7L8NGvPZBPogocd4yT2RzaXgKWTKdBK9ovhn8DAU4CnPrqZg3Dwm47Q4PymtSyJHuNmX6MPtdWkY1gio",
  "key10": "36ZBVHcyxeynnTSNhT8REbEhywqWBVvhZaHr1eLrHrtcrzkkSZiTEb2feoUGSatKC15p1Dvzm8CtcpkKqxRs1NDN",
  "key11": "49nMpm5esiH29xTX6vr28HtoiieJe6QfwgSr1LMBYxc58j1EsZgyicAotE35yPqpCHB4rKsekLTLsirKjjy74XYc",
  "key12": "5p3jEZhxci16QLt4ZPKMokmzCuAXZJMDtexD8N4AJKUbS4oQ2Vu24HXMAZ4HYjGjn6E6S4eor7vdCK2h5Gxqy9W5",
  "key13": "Smg9CNHwKnFBjiv4YycTxVSvK8F1CAgvBuCVmezPX4ne8NvGfzZx1BcSJPpVyD6vduRRVcVNj74VDdTzrFsoXpp",
  "key14": "2VpvHAYYpTAnrjAgPNXKuvhVgstVEcpPdudBtYz888iPGtgz1Q8W2nFNDr3cdUpup4hirjEnCBxWr9b2XPUxfvHu",
  "key15": "4bvWTFLVDixVXX7yhzLkX1o6FuQ3tchLcWTys6hThZL1fw5WZdntmuQFuA6379YtZ9HWGdPiKZzT7QA5gsCqqs5j",
  "key16": "oEoPdrL5GhmpSWC47Qar6zWD4cixGsDRkuQmV6gRjNwZuThAyA2XCPxBB42CrJ1LxJkTQr8XJMcnVM2j3yar84h",
  "key17": "33R5LXJWj5ZbT9jHL4362mMkoi4CsUGNhK66zYo3RctYQ9cxhR29DS3VZQQs5J8FtntHyCHCp6akLLAiJSkekY4A",
  "key18": "7HLfzRjMXJkaZuvaFWBrJBFnsLD2dYCmKcn7u6Fn3ttfYXHq8p6d6bd2rUahihNFBnJSz3WA9yCmpaKMb6g2E8z",
  "key19": "3HRtzf76UcUaSsYu8U89aLqCR2uRLStMrXfExF6d3XtUjQjxCQ6t8CPTtzYTFHYXtVMfvcuHMMhA1t3SPb11LuUG",
  "key20": "22ngFHqPZGXSMEciUgb9w1iadnrcetbjKSB1fAvs7hkUqZxZvEET1D3sNJzeMqQnSnSs5AisWuNLwi8XEELK2axJ",
  "key21": "2DXiREhR8MnDk88LGUMAbPBcvG9FaN4Dqxf3METWynhHoqdtR5rdBXgcgVcBjsJ5HNbGLACY92cMr6mEEqcJczbT",
  "key22": "5U1wGARHEsSN5AfnYQ7AkT68dtqyXXKxVjpbsJ4GRy7kxoP1AX8ve7ue4rEZtrkyXVCvRMkdinxevydv9Ck2L52v",
  "key23": "4iws5fgybMZev9gWaye9MtKXZz48HimmBzfJ4hdCUENm3TmgruFpvzFobom4meSkgBnvtroQRhQhKaJeCpiNTJqG",
  "key24": "2RGHCiFvERoeoVSzhw5hBH6wLisASChfDJoDhSaeGjFQZEH2kkWQdvoqvjid7nFDsbnnhpxaZh9b5T2Z8Qpvh74E",
  "key25": "4NTJkxWXtHuC1nQoDSwydxuuKdbSYcfvaF6PewUjBcRgxwzYGnHpGE36GQ6xrAHPeBfyWwK43KH1vUqMLmPKsoib",
  "key26": "9nu1PUMVMSe8H3p47FAwrYyHUHJsfLhGxDwfc4Wn8dmcEVA7K4Ae8M5DpQbfuJxBciG5KVyWNAYziA8AmAb8Exg",
  "key27": "2sAph3zdFo2RiB6M4qsB9BGxTNwdQ8vSu183S1GwjTCjuEaiwMkTnpddZPHhv8W32dvj7XRo6kZtDfbUH5Uv19rD",
  "key28": "YwGgJu3rGbozECtMayzHawS3PJfFXSs2auFZbzaz1Y4KSu62FBUjJ3ZNP3LALo32bhijdAfGNohY78Tdz6siAky",
  "key29": "24TXhy67MtNon2Uim6HzuCmtVMEMF47qLMAoKvpakRH6JrsBAHtyCwL6kzznLWhNoxMhqcK2qvMSutTJQ58TA1sc",
  "key30": "AawZ7nAx5E4SKUTA8kGSmq4fCU5pxXKZVMWgF2JgpAdGsdDSBddsEfZm4UBEQYEZ2VdSz7R7PqnBWmfCAhsYZDQ",
  "key31": "4wj5bac3aiF6mqFZcGkKCcAZjS77bLVq9LKpZhZ7fFhNNWKwKXa9dFsP3fnE7JhXymsDdgs1HjDgg28FJwpnWvae",
  "key32": "4X3RoxWtqMMkcik9BmrX11GKee4PDqz7DcUAtKoqCRDNepgb4zc9UKjFmqF7CgNUSQEjWs1VeJ9YUsfBTK45dC2W",
  "key33": "5Lwp6bAuqs7W9kbvjPREnCkAbv4e7quFr2kvaVQDzkg3X3t9gYbv74F9JU96VCTbNM6oCdZPbrbFpEEi6agB9fce"
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
