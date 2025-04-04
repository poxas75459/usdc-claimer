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
    "3XMh3JeyFTEA24PBCfEhGuo78p7qwF2hzkntaXTDpECzUP6BL8sfwXT1S2MFTGvFPXUr82yaA2FTksMiVLmuBvvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HiZNbsCXbfGkmkD3akNcyqkTj2YEtonDzFW275Zmaw3hcc6qu3sYgVHi8fpDSDPtpECnHAsV4NH4E6FYPkuStMz",
  "key1": "3Xj1KuoWPywdiL2KBaDPcVXfoVohks8A3GsrrQgmY8ma2GEKZqsJfFUbwh4HNygF2z5LcdLdnLxmScnJvD7JN4vW",
  "key2": "4nA6AMv3tfkQhwYf8P5FLNZcipTuPmE3RMZUcjmuxRZDr8jcRfrX9U82SH6u4phfXMJKG7i1e73F1rfvVUNdBdiM",
  "key3": "2nMttfp67QozEwnXaKa62C7S5AwkcsRwD3HJ6FhPscygphqwpTxLTUK5aepBVd8dtwNFEzst1mnYE8MUzYYNB1HP",
  "key4": "aUZEt6vY3e3ufSicSY5uq2VevDeCwFD53Y9JcFVXe8KvcLsiKzbCQPDS45UfuuPLg1AN5RwmLoD21Zi5yREhPDJ",
  "key5": "55SGPJnujmv3tLTgMEZsNX5NgA35UCEhoZ8HmcJxdE2kEeJC5QCk3Yew3j4kygU8tPmgn8h7zADbx2DsGeyE8UPS",
  "key6": "Yt38wfri5S7RJRQbokEJRpLNoUHxczTC51fR2yUCUdRPqbZqBRZ8VYGeSeXSGggdHsZhYXR4jkKvTUyvfppMxVv",
  "key7": "21bfpcxwicFp2nmNPh4KGFgdYkfZT7mkEyUhaqSwk2dyHyH4mJupbeqif2k4VJKDPMfN1t3k5YkZfJaSmfc327gw",
  "key8": "654KNB3WwHET1PKRS6vPCLQTwvQXDtWaS8U1sgqXbdd2MF6fZ2tcekN7Dhjj8s8ccA2aQixhTd6eiu9XWRNn8f7G",
  "key9": "J1wbFaM7jc5C6CAngeFwLFb1fGs9DazzvXoEY5gLr7bvvCD62867TXQpge5jc6TMkbKYikRqrA2t9js32Z2Nxop",
  "key10": "5yhbAxLkCtXU1v8Z6cUT4vTZtgQTdXTDk14AU1hmU5hwKuYPNFV3DHgmmzMLg6oCR1cxvPRfyRKCBEVVT1aMjofZ",
  "key11": "44kLKJHagA7tJjcEstRasrgEAgGYLpvB3LCK53bAeTo11Qsu9zxsPgeiYXKibUN1SVKbsJe16ZzWpZY9Ch6KVNAm",
  "key12": "3FyTJx3xJqeoQWWvNXQfKbWCXwhS8Dw46kxP1aUdAHAovnwcXT6EJhczq11VuLe7f5eQGk5AEc9EB6BhvU3MDxgQ",
  "key13": "4t5R3omFeFxccWG8tC5k66CoNxinvsLXCz4rTDBFBvsH3zazP7yFbDFijZnhNCfPB9Cwm9X1mZ5QPCS44RmJLBUj",
  "key14": "3S2CPKVrVr56ktt4J4on6pKJhkpzDzxH2sDDLaq3tTd9cuvBzBGmw4p7urKzvcJKtkhXobkxPKUhbBj1dJf6uYS1",
  "key15": "4cgvbYNz9EkDaM4EwiMZztAXNxWtZ1iFFLbFUUyVSqz5VsfqmTFvkHrUa6nMUgKwYuv9SuX5YQkKzDuCwePqEpmj",
  "key16": "44A4Z5PDqYhMftdn3erjuNDiWcLudSLeQhicXiVnnGy6vagw4HiB7CmbgU5Db5HJr8eDyjvZUGT1pphCQpuB4oyX",
  "key17": "2tDxrAV3xSH3pdX3BaJojwa8NAx2orSH2qdzMYXnUdhAU5rnSk9bjaoKjCj8nsDkyHeW16NZNDQz9ofj5xRHVka5",
  "key18": "5paRYSgpVYiT3RPtERBUm4i1FTnXfs48ge1Pna8JeRZguCpwDf6Qj9sisShavRfHbUv111WUCTd9n6PWiSNmuysG",
  "key19": "258zqzN7DAFFXuF5gpVAoEDtuBS3CamT5GLEULM6KNwQ4tsGrCoJP9PZhEkGGMWnm2nm9ubAVZHY1kgeEeGaXibD",
  "key20": "25BfDqjxa1UGJb5PiW5FvuW2qL6eGVkPZeeh8iMt5CXmkBDiiEGAd1qCUpv9sS1sQFwBwzsSGny8ttXSPQMTEibX",
  "key21": "3PuB8HKGYbzZNsqtEHpyKWGu6tN8Mp1Z3Yx5oWnEZz75oUirBoCn246L4zkDydbdNJQt6GfZVnnSFjfFrd2JgcwJ",
  "key22": "3s7avVfcZWFREzs3oiVWExSuUXwwuPJ9YA4tkifbp9eCfnSZpELAZWHPCu3oPTSd1D1W1eVZmUEYMLb9uC5814Vo",
  "key23": "3pADT3DnL1fhYuaGkaknAykRCYistYKUHWFAdVEi1zvH5RAyE1QyeqMvJ3Q6TA9k5899mTnBa8nMDGnTHzzfBTii",
  "key24": "3U6tiRqDQNc1BPrc2Aq3gRhnG4UKzgcH58Lx4BkCCcWejYfkmot6GvBsuMpbns9oorYXcfmTwd5mD58Z7fpQtgBE",
  "key25": "3AhGvrhHiDu6Ev92nLsP8wwRcirvBGY5pwNiGY79re2XehJpk5AVXsqDR6u68d8Z1eCyTe8682trVJcGnrM9SKT1",
  "key26": "4MSR2yL4a3c67QxaeUuRQhShTmLyHzwWsW65L2BhPNLFDCEHmWdZVxTT1JEzvWKz8yd4BeAsE2qhnwCTv7qeuCao",
  "key27": "2UzQvQxF5S4ejin8hogHi94kuRcnUPTHLhRWSFnjnRdeybDo3LKXkb5CzkU1FGwXfZuZD7wZY22bwj338sUziu5X",
  "key28": "2hy3YyNQpAQfqtQQWznP1Cm8vfnwn8dcN547J84Ufy644A26AvEd75CSGv97QyrehX5Tbwm6ngXqSD5ZBW8qeNsH",
  "key29": "45bDV8QMR8ACEEjPULfL1uPxjEpKDJbaRxguV4TcoAhAuz247Pv8awt7kJf6rSjYqiB7LcYqSnp3SoNWf4xEq7Tm",
  "key30": "5trBuTJuR8LAJUr3WzpUypn9mKP71exj1hdnZ8sZXu7D9GxZ5rS8A1rjFLvrWzu5sHMpU63Lo6RpypLE1Gq29bpg",
  "key31": "m8hnNJTKBtB2kqP2beXDWTBKU6zvWAyPJKAQy4JWZ9UjorpcoWRB2KxYWppVk6MJmk84wSg24wPKMVo6T3g9LhA",
  "key32": "4JcZNoetCPFvw4X8VARdrp2xYooeDXuPURmPELENfPs6wDZobFCJBkqo4cgqxFZSiKiWswqnnzQCr4A5c1SxwwcV",
  "key33": "5oNufDAQNketwpuLzUVYvgP7ES4AVBPKNpcLgey6VFB8uADdFD52SYAkDi1iLC1ESd3b48Nhqu8GLFpg2caY5FcZ",
  "key34": "3JC3UgQE5yPH93xvyN887DTQs2SxdyDx73kXUhCJQeEKikFQWQEDSxJnLh7JYLwy9X7nWRsWVBBQRt5RaSGsB8xL",
  "key35": "U3UbvihpW4rMznGcGGWc1DkzMJVURazgHzopEVeKvA9WfvjDnRkSEM4ghYqgVdVXfYmpVYbtHuGNAoe3aQpiquB",
  "key36": "Yt1jQuBCQT2NKTA4t9opSyz1cJ6fxSutWRRGbqfaRjBAEcmp6Hu6VyEhr8Kqjc5PxGnRn4VZt1eLUXPDo48xgiS",
  "key37": "eG8Jf8ev7H2urj2JdFnh16x6nueCsYGA5d1unSvc5V5yagzmNKg84x1s6siDQCUdHwWbhqiWkY9agBXydRBwmrT",
  "key38": "2gMymAuLpSU1ALbd5EuxYyGpwVRvZ4qxbzD1F2mGEqAYPnzWXoHgENYhaazYi8tdJr2Wj7m4cb6JW4xiTGUFsA7B",
  "key39": "21BYYcGuBVFG2ggyyHf69pSHBGD6g1m99hc6kaeYC8mZvc177GwpiVudNTzXAarCsxaS7SqhqjejRb7unTjUbvGJ"
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
