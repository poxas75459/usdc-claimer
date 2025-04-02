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
    "5NtzWifmPWH4NHuLUy2231wLMMV4Ejya85sfJwps77QKGF1Qwj6Gr5pLzFznjRYrgQ8cT2UVy281E9aai2XwVT3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ks9aZQM9HJmjJwMMqqBSFhyBkkV8begAqoGXdSYDGGgS7pUnatnZnHzE6ko4heWqKR1WWp3cBViSmb3Gugb9XQM",
  "key1": "5iuUKi5vz3n6GgHr8rRd8wbJF1rwyJpmJZSQQbJMPbjixkYUEaQdSpgJ2jzHD7m8wQDmj1mPTL87YS86bZ1CraaA",
  "key2": "5txxY94hLEo2r568oMrcfHWhYsFR96yXmpVmwZAmJmLT3CMgsxEnsn24uAQx2fGTedjTFuf1fMArFgTYzxtcjAQX",
  "key3": "3ibGw88Dk1PmzdvfetacYkTyahzqcQBhBKMoUkZbgCSNBemgXtwYR7oDkNUKX65Yr5UXFkG8dNw3b2ioeMMfNAqg",
  "key4": "2PcjnunpyBrTZP7N45fcCuKoAjaHpiUcdX3XvnELSnrs2JYZgfnxXWgbptchQJSq6sYDQDvQ7mdh3NzACciyET4c",
  "key5": "41XEfM8tNdFqCmxVUAXsFcAjzoGe6sC6bLaoCcMTFUEagYnA2ZPZZkEYfsQPXpCZtE9xK2PBrdb3CRhYVVrU75ft",
  "key6": "2xLvcQCQ5rg4QG1Z2DemTzWmsSLGWqmxiEHfAVp3D46637e8coUUQsheKckc6SRj3hxZBQarmfwYHCNptVZqQkNA",
  "key7": "4Pxqykm7UiPsUD9bMLiFw5kMsJAVQ8YLXvkvSBb6qUAKmdV9qrjevPyHAdbbZJTinavp86kBuAVNuwYKHVVnXQ1Z",
  "key8": "3aLNz8a5bdX9UzjJB6vXjuXphfcvmXWRURV3x25AbR3c2yVD63tjAzDBw4pazbu7yGqVTT28DGXhJfEqVKjtZ898",
  "key9": "2dF92YPDEd8r2Mt5iN9gNHHHzMRJA5tziWzXavXJ2EqiC2jgWPTBHVMNx6vwmcSGznGpobTHGZrfAFq6zSP34J74",
  "key10": "4giyZt8Qzi6YDN9cvEKEGzE54EyG1d6ynkH3ZiQnJ9PEArnMqD2tkWKLEN3WLcR2S1Bycs5KUQq7EuvcD6TPUnvc",
  "key11": "3vzhNbPqKgeu4RPTPabZdKCTLwqyvGndESc2Sw56DjH3TDbr1rwvZxx633LwHzXqLjSdTeSdopy1tyXMfY7UGigA",
  "key12": "38UXvTPDPwgRp9kDQtDowpuG3KYgCPKe46AyeEfGRGSFGajTBciL7QEkYunud7N9r9DXVpXTmSdPQTV7wrZBBCyf",
  "key13": "5XB924Py1ayahrJ65TfBWg8eL7mbzkCk1vbHpd6Wdm2z7EEHGkRWydR65NHFe81gGScaKnByz83JJAaTMTvA7x8W",
  "key14": "5tZvzDkZjo1hY9DR47AYatmXLrksTwU5Lh8fGCCoqGXMTGzNN4fx24aC3M1xFmrn8AADxGbrfaJUAUJPN9y1xnw9",
  "key15": "27uHQtboRTQduY798ug7Bg4EkzKv4ZQC94Gq4sZ68Tu3dbJVTWc141sJzkSGYnttoE8UQQfRxtatGzQeNjFbJWaz",
  "key16": "2HVqh2ndVsLjZBH2oAERUSKAxpMsVx9H5gtSKTi7j9nQxFFv7mHSmuv6wSJbkQPqrh8dXczPZ1Ffh5qRgHxtRLQe",
  "key17": "52jypnqUa5oyGqiVo1L5ToTmBdsH33F9utzFA3URBH8CgjpRPwcDoASpqMHgbXBshKcHDqmUwondGHuNNhwpPTFy",
  "key18": "TJ1fcaA1XYickkivJEEGjGRLAnVzCorfCK9jNDKGLsKMbAuAzTxsic8FFKesyYWSEQnoZGycesQQ1m2tr2RVdgX",
  "key19": "5C3E9JKox3wcU8gWyiQAaaQ7yo2hZQVk3RCYCxhqmmYaVQsEZZS3eFVezC7MdGdDquy2SWFgwW2vzNaGt4C9yMaZ",
  "key20": "3fcrTR6h1QbuEm8PuBZThAFLrqK1Z4Yw4esNGCo8ESdQrZr4dfT1uhZMPoRMjYbNutn288W9p85FU2tHwjSKKS3V",
  "key21": "TN38LRsmbjayvtui7m4pXZz283nVi7seovVFYZiP5AW6qW2Vi7pbjBF5ifGGxAUEMa534Cmpp8as8UoRR4fzZqK",
  "key22": "2oAgtmsbz87AGSEWmaMfyz9WkveXhpDC6Dzn68ffRGe3QiXhAc3XKQMbGuYfV5U4UMtaSwaGF2UgjaZpiTs51H9",
  "key23": "3ckFHRVPgba4U2FoXDmAzffSyfPfwj2abRpuu3EaQQ6Tse5kL5YBHZDmrcqbdq9ArxX9TD9LyiFfkZfiGMg9vqE8",
  "key24": "4Mf99c3PTnJAFLbZqobFPBQg4MkTm99qVnXe3i6u73PG7uy2fWL3uJ38nvNG74Gz4tiryntuLHGVoq6Bjb4bZUMf",
  "key25": "5y4NFk2cqzZBXpkLuBLoi3rajdqDXePcEtYCTYvhgqzSRPfTkDZRG4oByrksQNN56ksWmEEG73YVnub6aTaBD2Gj",
  "key26": "kgEWCMLzU79tLaP88gu4yuyQ3zyaxdmDp94K1YdAFHzV85e1CEQDztwmB9husKwUR6g7hnsBqsXzTh42nPAYDLt"
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
