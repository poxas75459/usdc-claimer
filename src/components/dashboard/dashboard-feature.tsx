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
    "4NQHaTC1xEg8bcWuWnuaq2Cnjf9kMHdhYpb2RRvPyipodEgLnShFGaaSTAXPE8wH2ciQ5aptMApBCeFQiEAUrMF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MujzwximnSpAURMccFLf1NY8dkdxmJVCu48VZcj6uudKGUz79g8aQhvkZwV5a91gdvCSTobpwQvBmf4dntVRx1m",
  "key1": "4BeG8ZVauaomKQ3Pd4NvpMBRsd5DJvXusg5VzfYJ5DFGxXAVFRTq9kxPPRH1EaCvpgmWSPu4BnmLpcoA4XLReQVV",
  "key2": "5m7Ze7JTaYtPncfetNr1PsquP6pDsm5CFwuvzJzjFzmwK5Q6W79C2Cw4Pqw8L6KFj3oAQcJS6e8uDBnW6abSKFss",
  "key3": "NB8AD2m1J5ZDYh2X5qGNCodsuE5xMj1FkgKe5EAfjanB66wbVpEmo6j4UQ2EbhHU2qMzuq2SJYhkM7QtcbMB9EL",
  "key4": "4cvCskWCmCfw6Sx1pYAPbhz8jPpk2cDL7C62LmhfWQo8XGL3xc8CUeJyFh8MHFNxoCyZg4646zHafsQsiorVMguW",
  "key5": "5GMARCqMwrsUjucmbu3zzHZS5UQwjCv2hSW7PyVEGQpzREb9sxeKDqHNQKVhHAJUb9LByZcStPdMFWZxYFeM858F",
  "key6": "4J4eWUYmdRELfKWcxGh5tt1rjrnp7DnzuqquYnjXVSXyt4FNeAFb2u1HWiZkaxLxgg7fXYmYsgvjNHJQfP92WSVk",
  "key7": "5619e7Nt7EWshwSWsVrmSBuFxgda9EBNKPdnoppSxGLoJiyD5q1cpm4QAqF353GLbHVZcHSABFUAgqHPzqz9rRS2",
  "key8": "4X1EV3PEtFEvyMcHXrc6bdPwwVFNuvx8at4QgcFsch45fX8iuHrqHteqzWx8tFJByXGE7thoGep2PcnHtKfUw8DG",
  "key9": "3d9yZhKiwqYP8b9Yoq2qhB4LWdEFxuXe2V1x514a3fQRaKybcVrXe9bsBTpAKoKG9oNk7QJVCMqhYVYX1sr8y59K",
  "key10": "4nphEPdqFauAgTtAisk32iJmFfxDWVKS4aw7rEN4BRcmRAbYZP9fDzECFfKgvokLvZgoSw9xDMjdLRwH5edPFWve",
  "key11": "5KSzYMMMK4rFyCNG4Y7xKJH2WDLqViYppptzEunbBk2iH67i82bNxo631nvp1NBvoA7KepTphWrLt3w1ztyqbjxL",
  "key12": "3DQsPEXvBxUbo5YnYLCHdPrPiAtkhfuV4rBNLrXyKA3BjCxCGz2myHDoFV6TMoEpdghEyrvsTxkytnQk6MAmtiN1",
  "key13": "3JN8gT5dAHX9f85mUMHdAj2u4mgV7d4krAz88TB3cL3wgkNEWnoVc7WyyACZmzFBLLKnAY4dHPSL9cC3scDstRSe",
  "key14": "25Sph29wCB6si4Ukrbcxs5BtPovs682KFcqQmYeanez8TiNKwDXGf2dPK8KxbiuyCCozpameWGTd8YYaFQSFaGrm",
  "key15": "3GyGLcaNAaGnozds94Kj8nbSxNywy1bjJ2JodXfcsAg4HSH2hRAks7NWoEJiv1CH2wCvb25LYjRQExN6BWBR48tH",
  "key16": "4RRUYuDJvLrQtAFXANvKrtqhtFfcedFPRY3sEiEXyyQP6r79Lh2dy7cNJAekc1ynrALZeLpWxt95qnU39xzJ78T8",
  "key17": "afJfV52HDKwfuFoxtdv5V7VgXmNSqqpVpM87yiwyDwNvGMidNfUuEepSNn2t2cxF9Z49xnScQeUQntHYvCVMD5q",
  "key18": "5y9xMtfs6vLQBNFe2rSEqEcAKVXntVJc76buqD4rczKpWq14HtEoQmRTsBeVzs3Rcgo9FViHjLKpW9633pW7Uhvi",
  "key19": "2UG5kpujBy99UyXgx3oodXNvEz51DmwJUen4m8XAiCT9TqxbM5EvwZRXDAejVY9eSeq8YqSeSBwsH9n8PWS3YUXc",
  "key20": "5HKY5cFiBpGhcKB4CnM21azmSXGDU7BtUKvPtm5YRaufKivgsZDkvzveL2sxPp2oS6TzwdPjHGU1oZqZXXa1AQY9",
  "key21": "4ktQ9Un6kpnRzpNDWBgt4Mcntu4s8UXA5p3RvCoWV7cvdTM48GmjEAvNEi6H2X9RuGoo9CV1SUzWJGVQtkEp3bFe",
  "key22": "5aKgZz7Dm4JfdVHdQoQsFq7SnrieEwf5p7h7uUHJw3YdspTGiHsSAtbV6d8PmyC7uPeQ4ysGQEXJxEd8BTFHBgkV",
  "key23": "qBwRa1fz3rkj85YPkLqNXBiJxdgY6Uk3Biuz7WrTQKn3cZXcePpi249bmELZtiuRNVB4DGXExs9XEp9K7gChhgd",
  "key24": "VXe6ndJbZLdgf89EHvv2jhwLjN8WtaWbtb9bDo9fRcrP9zZsBLWP8VVMvtTndDc95kd5cA2sNV6jF5JpuhsYSqz",
  "key25": "671BmziyKBPHk3xNfi6RrX67p8qcDkgCwzRCuwQUHge4dPa5Crbwe23MoV7VDu8MfP5jd5DLv6i927mtdmbxBQDx"
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
