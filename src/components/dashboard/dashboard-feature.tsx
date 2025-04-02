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
    "3Ni8y94PngwoHZav1cTgdWERrBw7EpKTmFmASF8LQ8CC4X2MR5v9cHYN1NPuYRyjFPpiKm2NnZ8TWL7jrvR6Rsqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qxcs8Zgos1fa6aaQ5rbKtY7qWw1R7qSjpZzciWeqEcnAuncVhiCTRPZNKf7ytknD6uxi5kWE4nWxZhS5QZ8JDjj",
  "key1": "4VKrgkQ8gWYgFFr2AMvr1kee2NnghcdJfBTDbJQkDhLmFHRfDrffkxGoEPwnHyWKzxmTTrLirEoJZmgXcgMabUPC",
  "key2": "2PENFffW3osUyAkuPLmumo5XL4xKLzTExStctZWKA9hksP7mgNgWX4afAQ8dC3f6oF46ytDQeDifzA6UnJtQtZfW",
  "key3": "4X8fsHxhxnRqeGF3K17u98MEuo1g7nu4nnv14mcLR8DUkqS8v5tVB4M2YyR1xhAZiTATupjAvpNSa3u5PrKtcJ2V",
  "key4": "3Ji6npQArcYuHsVGGzvNRgvcnjQt3gNoPDd8weV4oKCQ5hHMWUvc4pJFv3S49t3zRB7XT8NXLawAfP1nR2ZNErTb",
  "key5": "2CM9CY9FnNDHt9WNop1k5tKHtwiYM3Hq79NM1Bdi3wrM8MQ1qoPDDDbSb9W58pPUeXVpaPd9vzDk3fNC3pvsNi92",
  "key6": "2cgX7oKqVvZ5gXe8yMCBaVinWYetR8z4hzSoaW2723F2Z3PMYuYzQ8ByK5iH4ChFi588CEtAhxs8DPbndNBtcQQQ",
  "key7": "3teE5m3pNjEdPNLQeHdMSf6GaZjm3NJGqCTYibmH4cPzRtHH8Wp7gU9DTeha5CqVxBqiqv8cDErgUf335eJiMQAD",
  "key8": "AZMMmCb7bHhtcZpLRQhQSsE886s4f9bS6dh3X9FjtHaRQycwNXnqJkVeUR7YfQKczihzanKjCuU5C4XKoUYoyvh",
  "key9": "3T81V2d3wVxir9HxeWdofCt8naxT82XbQZnyWGBvd1ibpysbM812tr3mh8QEfKUU3GzpoqAHWq611zEdgGzuBrPC",
  "key10": "584sphpNNAns1iVGsQvPpV3yGwWV35EWxnWUpv7MtGvZpVjNg1nXkTkrQVpVcecSwXrQPdRNSHBTDkzw9LDTjRmz",
  "key11": "5VUZ5Ag48aUyJJVhe728AY45Ka2Jk2CqpDapmDHMAbBWNAg1b2adsjxhVdVykiVvfnTKiQ792MtZ6AeqiDqYMUd3",
  "key12": "4hzTTKwfBd8xDRyWULuuV9ehjaTcqNY861veZLU4BFXjFdcHrDZQf1EpCUKSqR6VoMhqsJWDCjfVrfFcRFQi7jD",
  "key13": "514YJKXFaE1wyCiGio2ASnwUVuCtqUpnhPMwdBcP1qdyba6VDpL1asYscbunY6KMnsoEigBt5qYnNg25FqUy72GK",
  "key14": "3bLaWcy2NPp1KtxLYuSYettbPTChXD3fYpPoE2isqWtxwMeRXSeyxT6RjaXjer176sagXRnRW4UcgQcMsSmEh9fH",
  "key15": "52B3WyAHR1Vkt3QffEUgbszFW58uXp9dkiz23EUi8KEWQptVFyQAC2cSfPqqdG3sXPyRmABrvktu29NCsU4SaJWK",
  "key16": "tKiFSKVnVEvr9a5Q2DtaJpFKsXFozVhWc5e2oM447JWGVtz62gNbAw7CmARCFYVYqKeyfwandtZ8x8vQYoDVka8",
  "key17": "4psZ2wkgNRFBYw4d2fFb73Da9u5fciXtcUUcLd43Evf74kVJMgLPYF844TxmJFHudTs7VjiTCPuaQnBhXYp7aJf1",
  "key18": "xwtHod7sgHgncZjJhf6YMFirnS3AAVSdjMmzbhzintUs4W7Cjzf1Pfcz73Yw8CcZTRK9dFbPt9ZQKCUd6UEuYU7",
  "key19": "253qXK75nqfmPFCGpRzdcNDM2EF8CgqS37KZ4hWUs9jrRLaQyfeFKxDfn8f5XTGBpK4XAuYw97mx9WjadBNUT2SR",
  "key20": "4XcRg2RhX1ta4QqXDWynrC4oCXBaHyUKHNwx1s4oyjytRPb1ekHw9bdnFuoMDMaqEJ3dPSH6dcDk4cdxpKxXHj1h",
  "key21": "4qqC46MwyuVetesDEz7QEKm7atrJfcDUw4kAzUnu93uEKDAAFYU3hkmm6as4MAMRymk9yQefciEFsuf15M94irsB",
  "key22": "3bAreGsrkUtcuDnurFurtG3Lktt6CEpHqeZhRzCVo8zFCCYQRa5tF1qsHW5CP3pyUQJ8WceuRtvarfdMszHKrHL6",
  "key23": "56xcp1AbXf1o4b1p8GQy98WdR6udBnrNsyDLr4QfN6V4vL9ybZEiBdP4ggcqNkDfSe4RQpMW6onuStLgDgsucu9r",
  "key24": "2fv5iyM9b2qLJgiuJNMN1HVUv9ozNgDQaUwag6Eojj5iUrSrBoBF1Qt7NiMAVgD9WLaoCwckVN95HfdyGbcFfrEq",
  "key25": "5KnFDp1AzwMZzheNDB9hSeDAA8iSca8DcVGz2uaByes1nK4nPaoxxKBD8kxHULQ5bW9CMchdDmFLMv1LM4rpSdxL",
  "key26": "gFsReKdQoyA6FCwo5HRigYR8t28StEe2VtdFLNE4DDKPko29N5KLJPjKATawxLiRAhATAdvGwpHkwJM7jUFdK5H",
  "key27": "5vTTAEAYB8gD6hSVnAo9oY29kuDNcnSKh8sVpeb1QQpQSb6mVyFvTCX8z5sRKrLL1DkiafD1Gj3p9Vi8VFri4Cdf"
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
