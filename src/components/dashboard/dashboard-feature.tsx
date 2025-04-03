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
    "5Q9hEKHB9f7RZupHiy6Lg5mLRBNTahq8EUzZvBVPcUFwHwbiVB3UFmUU2Qn9DJ2jvQUMTyQCcnX95AQLRuX8NntL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BWSXa99Gn1jgne7RaT4GpYbmiZouAbm2uMkR653DDb6MhGLm9ieEvFfZXsgMW6y2scZABnbVVGJ3RU5MhE8AVqv",
  "key1": "2ozg1a4n3omSeiNWqcpxDB6G3bwwLNVML18qveg2sW4h7jbDFeTn4vwqDYhPiU8pNgpQq9YVL6KBmbgu9y7jYqQf",
  "key2": "3qGkEJ1AF6oBjqAui4eaobd9k71JVbQghPXdQ5qZ2f3knhftC2PWkNs5NEKZ4onD3A7MFHFtPu5qDYRgZfS6z16X",
  "key3": "5a8qaFBg2oobohiQsSj8jnktJ5KHBZgHADNohUXv54Y6cCysBRY9WS6KAu2noUCXV9wiRPJi5T1iKcCBV5P3dQVF",
  "key4": "5NeNMyzC81qEL8QpGQYjoCWeQDVLeBEX3DQorFLQcZdo8WwzphmiJERWKaqUbP3f57UabKgPK9WJCq1AFXqvikZF",
  "key5": "NjdQMD8d8pKHkf5zWrM7ss9vv2htuLZFThKNMSLJ2QNiGpidyuxnq8fqNJDKmthUs3LL51UL8xUHuPaY41uiVJh",
  "key6": "3ytnc3KpF2gZpUmkyd538tHLjs2xHbWshjt3q6JvbdcDmTwu9KNXxDZxDZbQkvWSyWXhJHH9UW8WByThPBApLFoE",
  "key7": "2BW4dVKEDvd7d5AxGFM9VFGKAHCTLrXe74s44d4mdLsbxMrmmDBxgZnAV22JxYjYBhz6iiy3GmASMt2NF6LxXPRm",
  "key8": "5Q57DU2yENwFu4HjgE4viyNfp1HNDqHDrZ51QBHsiXFfrY2PXdmdPggYDPtbJ26a7Vn1MvduVKRYFJHEU91AdEV9",
  "key9": "5jnsSPmrsEu4rnhd1oLcvXe3Tr4S7i9xEJy29NTJDiGnkQYRWgkTT3gCngd4WNmixZFCREZF9A4PC9ZBq9ar8zwh",
  "key10": "3wvaX2QnjFgmHuBk56PZXzFrU5hRShGFE3DUHDuYisjJrN3B57jt2UrHEpqfByvv3YFPQzwVmCwxUaCchjNvuLU3",
  "key11": "3arQbMFryPpdeLYeais5gT4vLX3jk8ynWTDo5SWzA9EFu9SdLqRTFpWDCrEF3QVV35t3UTtocpSNYiY8rPP2TEGH",
  "key12": "5QEUrKXTX5BRBWmMrjsfGTmNPYb6qgLnyq4fQj5rTsFNzCqsG5w9V2Qe2Xa721aw7QabA7zNNbNkYYWERVP6kAWy",
  "key13": "5XNqiQ9R1rTCL1YvYucVXNetiXzaHgJjtNyiqg3pLrwP62Qfaz67CiucPP1cPzBiZQqq5gQ3FbyXreKWsdKd5onz",
  "key14": "28uGN4BGUcgprsso41Qabxs25SMi94Cg7SN5Gw3nGJRKdZm9WhgzuF5aCdsaZ17Xb55FTJ2oSwLg6yF5fDa3YKNf",
  "key15": "61qwwrv7hdsWn8CqtDMPCZkSzimYLFG1Pm73ar97baRMsuAYnwoUFaRk8D8jXAoSpyFmCuEofiasru3B9ViGuLCP",
  "key16": "54hukVd8wgtzhawLnqm2osHghFvxnod8WmkT9uUoKCsMVGAvZ4XCnqxgDSPTYBRaiWBXvLMimdUmZpZhsvzJGPNc",
  "key17": "4SXuwYRfCZnLAoxmvv1QVsULttBLMDu1q1p9MErtaxG8cRvwHamXUMeWrsXC5VGhZwtPjKxrzH6BdhFJsYzQ3zKR",
  "key18": "3CdrXcPU53nGSU8isntPz5MTGXD5bFrKfv9twJxq3nfWwJm7ACweaMeUoDrVvzoAhJZSAnKPbBw716mV3q6pjjZD",
  "key19": "3ZBs1i18AznzpSmqPi3k2ppU1E5ptJ6wPRrnDgVaDrg8pXBdjCdJwaaUc68Y4rhfEDtzh1UnsBefrFc9ZpBQJztm",
  "key20": "2hCDLmazpUHg8Pwhw8Vp3GHKVC1GpWYvJk6eYjjCMwNsu9gzpz51i7MRS2d3aFiFB4KANGnvteiaCiD6X7TX8ec6",
  "key21": "3MnhhH4jZjMwVy9rtgUH17dddWYnDQt2ffV1W8uZGKNbYwrN3SeuFqJ7QKw62sXszihHNRT2b6wwt5m3nKMz9Ner",
  "key22": "2UKvHR1T5t4PBSMeUMk5fGKPn7n6fErBo75eZ8gYMq6paUFRWAzw8vk5eFM6GzFQ6paNkK7xEajG3cfZ88sc1xHA",
  "key23": "41wzJZZfcBaViz2iV1FNH3BFuWZXLY7GhxLEs8Uj44yEGJBr8wfnbfp7HVBiUQ1fvFxGR2EnoTZZ29GNWLb6ESEn",
  "key24": "3oLedM2tVb2BwuWEM93xPemQwXbCCLa678EfYTDLPh8aBUwo28Lg4JMt2Qj3zZqtbNTagLhwzVm7pyAfisKnyiTo",
  "key25": "2zuAEMoEgrgmDY3j6Aop2MhcbuKNoSqauXSTn1RAonYAMTNbmC2c81diP7cbG59hFLLwLdiegP6N3Wiuhze43JHB"
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
