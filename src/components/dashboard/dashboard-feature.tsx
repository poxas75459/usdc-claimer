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
    "44Qovqq5CBArKYYC95LZ1fHaFs42tCtP91dVaCJdqcsn6Pj5HmmmehdmyWZFFiuUUxMBVXwZ4zCv5y1cZcAqjLyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fzKzSyNmA75sHAGTuE4dTpFdSZ9ZurdXtUNqGb5RFenBxjQCzaLPaJQ9j3pcBPRZ63qbRqbdXao5ukQberKmvA5",
  "key1": "3JP68pP42mw8N4ZzV571QKN8WyUahT4NTKqgznpcNS5Yc2iw5mugER1jLFNL3Ubx5YDFjSJJoE3CRiChUmNKLQZV",
  "key2": "3KLL5mkrENVUybNmWNuzF2pPrKYQms11o1obejsXmv2NHTYKKcfgp8qPC21qE7baSvZ4RxhZSFBhGkwVUV7Dhikm",
  "key3": "34wGZSN2DPyfKPhwx6z8vF8pCDJZZSPxUUB2XJSwiBsGhonwFspdUbEHkRwwSGDuzrcnd15kjY9N6viaV6uMbQpv",
  "key4": "5ycvSSCKRRcBbNbpRweEH6LUxqyrm1HSUHu5rg6USWPFEhkRDQXhrcwYWq2GRM8K5MCSjgN7bztjT9pKoSmJBF1F",
  "key5": "4LPomLieziwnQA8odSBJW9hW6UQMBCeTEZpr2aGB6eMMqX4M45emVFNt3PuQFXLnModQrWs35t777UhYHcJJcLnB",
  "key6": "4gMxJPXmnCLrczotVqZum8guBHsFiuUuWJhKgxoaLdzuPLZwaG3WpFnA2CWb8CNbDSeSgw5Xj82UPCEfS6Hoch6",
  "key7": "4asDWWuCih5i5ApiBmHcdyHM8VGRbp5nVbVify1tqHNjjcBb1bwVHE6vSc61azYho8K3iTmHEibyzCyxybpWgFEL",
  "key8": "5xnpq8q35ddf6G6QFMKNtvgsnVWkz9KhqPCftWMDNoRMEhAUE2hjccgQGGcj7sZArJWvyoQDRd7R4s8Vs4EQ3ohL",
  "key9": "45DhGxXfQxJMeL1VGyUoRgrfZeqExB154ZGMUsrXFhaJwXWMLsaCCFBK7dA4CpqGuGtcgXSEKUvTD7hY5244jUN6",
  "key10": "5aEYHCoE1PS2VqaBZ7vVPMCER8bzTSVjQdjxJprngptG3EyzdTuvHF5Y84MgSoZVR7uNExWBnSp5LVwGG2oDtS8d",
  "key11": "3fdHE2VxgoSV8u9gFmwuntrzh2ncw3hgyrLm8pTxRNiu9Ksz8SBhPzvZ6JZG1faiKNfLfrHLsg9DGq76juSPiFMj",
  "key12": "46QJ9FMyNXpWLFY39tg5bM7afeAvJmu85VKdbRsKiTkiqxHz5vJYx981wpevqnh8UdNqX1QHKT75yGNdeqFkpLbU",
  "key13": "233ke1EcMwh3hcLQy2mC3avCcfVWBJetRbkWxmRAjvzAsFhp66yquiLgqTv5xRwnbQReiiM538DhDnE7gCqzgAvz",
  "key14": "4NX1cE141c9NjzzhyDSe9ngSkzwYmpTD2d7c1NTzzFnT72sgPJiiuXAwziyMtJpWwEfXXvdEdx7V5uekY42P85z",
  "key15": "5PscAY4z28x3mgwPLwo614qgkuqH1rsF8FTyWX4pkknC2XLzXgYJgzkdRkozLcrQY2acehBSAsdvzRK5wywC2UJZ",
  "key16": "367YdpAQjR6zbpudxBF1Ek73FRDw52btWA4Ud5VwQYjbV9Uvx7udVHTNSFt4gzwBPj7yEkbggAt1GujPTJAQ8Pwa",
  "key17": "4okKs5pUuW8HAZXvkLQziZQ8CoPwjbbTH3Ytekxw2bR4sQxGQUEjesmCPHfHPVJZqEt4qDwTmQNoFDvg4GZWwUMo",
  "key18": "5yeXZbzpkNeJFy8DaygNKWTePn4oUvLwKjhYJccrrLYaoY7Rc4koRfqAFgjT2xyXxSE74ipG77L356VEHHCaoPEz",
  "key19": "DpZaNmvTM4pMu5fYipT6PCGqW1rbRwpPwmQZnmJNDfQAdpGMoV3Qm1RRgCqbLnVzUZDKm8fCpD5XYdJEpmYrCre",
  "key20": "27GNU7RvGoUkMj7grRaeh7wtzx22gP795SH4Hgp1PQHcXLyaRHskhf2Nn34fv3K41LhQ11nr1s2mSuSdKgw9SsUr",
  "key21": "XmWrFXneywqFqsyJJLwkVtKuUiyGApmgsu1YgQuRz8DK9GqoobXSEh37aRMNxZPvYhFujZPnovqo82UdYRwaciM",
  "key22": "5Xqj6fzt2frqcS4CVXtskczhGLeZN4ti83A9KWyvEScMZTeZ89AmR8EDDziHduAshsUYBFNtSjGxMBV1BqwuVXXy",
  "key23": "3wjWMuQZdGVw3ifZCKwKzcHWjo6cvVX85GiQyuQWX2vGSrKeDvgqzNkzudb4uzhn4dhgzaQmkBHr4auZgnJPvTPD",
  "key24": "4UBPMGf8Zz7Em5LQtVcCaoGkKFy3Pj5MDPxKsHMaKU3PtjdTyBfAbn1vofHzxSE4STVBHmekJ24up5DP5m9Ty8jQ",
  "key25": "2EiUSzKSyEfyZhdu56g2gCrPuKimXCefjExVwGXqD8gfADkTeed7fHMYUfN1zJtBnTwycf1KofcvfzFbtPfA6X58",
  "key26": "2XyNWFP7gHocs49BnLH75k74e6FS3BXbmctAMr6xPepEPssoaDbN9nGKERRRvsoNjKywgiPsA8hjtyo9umkkzcf2",
  "key27": "2fCNBNGDVcYNooPT7fX8MMMXNJJ9XPo3kDXV6if5qFT3DW3RnWpvk9x98Lmo5HHP9z4QxKZurHfWFrAzcqGBtPBw"
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
