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
    "36HUtuc3ocvTgy27quDGzNNaXaWRjxmAMaQYX6DtfyrxGGFrkkqTJcYxa5E3wPGtm158YoaAyq3HZ54htkLHYQ5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Crft2YkK2jrZA6DFtXY8HbKRtucaRgvzk7PdYq9DZZU2axiKdrJ7tYduc87eg1LG6CVj9PVgg3P7XCkX7iBup7o",
  "key1": "Vgxh6CV22cLWcHFeQyK6n8aXVXFWqFWzKLABqobojrqn9u7oBCndjs6CQMQ3Mt1rcHNMxaSGC6S17Wt4iRoWskR",
  "key2": "2sQRPu3KivDEGLva6C1vAvW6PaJteM2hd2rPpp7DmSLhZ2uBPBpU4C5nKthby8pH6G52gqj8KghfQnmFCZD4AiCH",
  "key3": "Ud5i2XBhvbA3gyv5hpXs5QCTNKsW9qyzxU4e75h6kghRmGhV9qmdvCcqPECJr2XMutYD5q98jKiEVkg2jxjZkLU",
  "key4": "5fTWL4vFCAshUr9BnreVXF77SAzuHAdoErMfgrDXnYaC5YEXygNoW8bjTMYuH7RmuF4mM3P7SHEF6rsfFmd6rk8X",
  "key5": "22hGAtiiEC4os8EML9puZmGHyvU5V6iHqHeaixMQyUgGCuAjqn5iKRerdXyrNM3f2qgaCsYzjnFcMA9m7waHtABp",
  "key6": "32CWboQtJLfQ3M9joX5vXCEkwKaFmQoF5RwVj6SSF24zgjU6AU3H49MSdaaxFDiJRnaFCB1jCShZLsEKLBDJKNkr",
  "key7": "5yuEerNQtKyitjE54XXi5NvGoG2jbr3yLSrZ4bWmDqgEMDMyWViJsUMbPxZmHER982hiBeVAphhPacB5U1HzL3yF",
  "key8": "2Cyhe4oK6dMm6wDys6DxJDgn2j3TXzJCEnUvX1breubkbuPQC67fMyM3gggyCJD9REdccTELuKj8pBrHorvMhZNr",
  "key9": "5kujDmh9JghrJMGKJXcn3k97Zn4ChgYurnLAoSfpnKhwJnFXSgrgWqsg7jJs31uZoPBfTwenAdcebfsCiWMcWfuc",
  "key10": "2ooxoZUDufWukuUAUky3XPLWp2mA9V5LsA6QH4Fmxqwid5dxh1iermAVm6kKCEjawzCFUw4na65uR2k5vNo2YFFj",
  "key11": "2gkY8PqBabeGoQ9McKsXWxGaj1jFsbjnnimHYFpuSj2JXbTPVs4a55gzA3gJyvA56MovuvNwjLxsJc7GQf8g1gf4",
  "key12": "4xzyRYo45vqSFnV1MjcXaHPwHxeSpkGKtvrGs1NLQWwznYGQww7unGrwEZsyDsjBUjRZxpTbTzC1X2zfFb2WQqAt",
  "key13": "2sH7ddNeqJDU3n6ss3hmDAwhb3bgsD5TQAcYY27VxvTKSegMGpUUsFJkBZPR4BDWVKtgP1WNDqUMFLNfoK6nY187",
  "key14": "5cRsUFzcYJCNpyjQr5t7TEjTy3U4xdPsdByFvFVoiNeScx7YUR6Uux1hN1MyFJTccsgZdHX8cQ6JzVig1V4PjmQQ",
  "key15": "g4oigrfBEtDMYLVuK5NTv78dCsKKwkofNCSyVkcfiKEJz9UhQZdAMxgnmtghCJu9EM6AUj3aSQoux7bF7x895Wk",
  "key16": "4RcX86c715e13UysrFw8uVu4eNYBmiJtVimps7maaXCA8FP3X3772UsFFbaVmhLA7rRMxLMCnxnbkxr8x7TY2Rry",
  "key17": "4SuezpJWCo7EfPtysSLpes86A4w7FCpjvKSVjHmFXw5sAgkhems61orrfuSVAFteBxhNL3mbbvrRvdroQxumozyz",
  "key18": "h1t1KonoPsGtdpjhSyDA7wNoDbFLgjTkpK6H4T1g3yu94DN91o4DVvWoe2LjrLkevvoqvZRWmTRbWjL8Mmx8315",
  "key19": "2BetmSjP6a8SbxbqHEKWBRnXFzoPXKArA5vyVGqQNmRsGvMwcCE6iBFgkB5G7jxHw1FcP9bjScj6gpyS6rek4rPJ",
  "key20": "3vUH7hfQGWALbUBp1zxunHiReZKytziv1iet5SV7puqGQF7jpzCPXzAnAZQwXjphAga1pVTfJG3ob6rrcmDYi9kH",
  "key21": "5yQ1pZCtMUsV6rU1Zwp7QX4rxfVztaqM5iJV89UwWrjAF53MbK38YCaGdnJq8udBEP458UB2M3jfyydAeJdRTq1M",
  "key22": "4ADdm8VQL14eRXRdQfQLDEhXzKtUPMH8eBXjh3zoGQBo6hfm5nPmDGwVoTGRgestLU3bLPyAGY5KY7EpcrVSqHxk",
  "key23": "5H4mZmn9LhMfm5tSP1DHaRR11qksjPwMcf7gc1W5XYBAcrAzfhxEx1SwXgzFP3aVFc95UprH8duu4rjR3d76iK6y",
  "key24": "5DgZ2U7w7Y1KRMBiZHpCaTm1pp3dxEKat5WabkbQx5hEt6n77e8fVpWWQxzttgB4TJmpFDqPHqgWiN3dy5KqYiV4",
  "key25": "44PCAhoWMTH5NevV4Mg8DTmrCkE6GTg18Mc15xNEeyNQVs5Y7FpHVur8rAm3DYDv1DsmZX2WdMSxstLVNVsKhka7",
  "key26": "35w8NXCT9259PW1BKFsUswwr5Qm4wvLxg5MRfscfB7iHpbviq4gHsdV5og1uL2UTQqUgAsiRiJtbT7DP9Kq9ZQhZ",
  "key27": "4tEubBN82WVaETMmWMZDoXmDm4BVv5iFbfLuxpP6ySgbbYzwMNaVhuvgXJxRAA8KPVgnmbonMcHioGAtefToXKka"
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
