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
    "3octkQKLTSZUrb94dvopHZGDfARXpAew5LLDPqmmsLNTQ6hgVMWNNZNVsG6nuJCA8baGH7ZUFNJz8MgZ2jq1mKV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SYVkzJ9vY1yF1uzuFYrLVTmdEG7aphnfmo2LKcHpzumgFm1ADZYauCqumdhE23d2K1SVYZLBKYK5XjZKX1hoNWa",
  "key1": "5gbeBPoWXfyYJrCaHrqdDbSnSirZSt2kdXnkXBthPEijBmStrFazLugQa6f4BXqBVipVdUaekf5xGcu7NDqoYmYw",
  "key2": "Tbg7a7EKvjXsHUsAYPfWchSAPfvKjcx3vKygFwqQu3B33gPm1Zau8HgoVyXF2JXgEomqMGVJ2i26odgKEN9GLAZ",
  "key3": "271WVSrsvkPWdAD5tdMoWQdBfdbxpxnNB4xK1bd5Wd3Gy7sSK4DyvFBoHrU8xmes9h91pC41ReYkr6QusE4nttHE",
  "key4": "3hqX5JCR7kM86z6hKMQxvnDCSij24RgGWyNy6QE6h6vVCbqbVduQCkowKARfvZSMGY3vvengnAYNUSvF8HwaKntD",
  "key5": "3hs3J31YXexdCqMPc5n8qNiV1YZEWdB69KfKs4wFJaCbMc8pWDHydGdswsoqkorUGuoEgfsPUGND6p2GBKAxxJHc",
  "key6": "2FLCyZsd3pYvKQG9s2w6XwWTzCthzyU3oGxw6Fz44mNqiJewztJeoRq8ziNFbJSrTSxrz3XTWtxm1Es482qgkMiW",
  "key7": "3ffXnpAqkiAtTgmQMrBUfjigxe1sCYR6bKRS4dzQcWxt1SQQn3vE9C9NGKsL3bLLsaJkC4RiowqrtfWWcNuxiqQ4",
  "key8": "i7ENdCKSyxbRmgFMUV9eEyoVKR5iZyoncumbHRkKqVHfQsypbEjkpLQ8jVQBQD6CWFBKQ27jW68RAddmrA3TKfr",
  "key9": "3Jch4ha9D9ogF9JpzFGLMyQPgK1k8x5RnLqyuYhwHoHqcduGB4M8fziW7aN6dRVUhHzFXsabJdGjEEW3qpJjkDRp",
  "key10": "3nTJ9hkh7d9Mw2koVzF5QMo12aze9QyBnfG2QUjuu7cnsZF3cv2sDhY8V1hCc8PUSY5VYufrXZRTczVRqjYm5nBF",
  "key11": "2p3ubRXr8gpnWgsvnizdZ7W2YLC94P6jBJEeK2CLrExkybj293xXAATPJLStcRT6EPAPs6SWF3YQBAYWDhgLoMqw",
  "key12": "mNX2YHNopNjmQ5dfNkyaUKqgRAZSrf1vcbc2z7hHsh1mXxCmpMXJRzge8okfGBsutb1E2zPVPKCH78h8MporNpG",
  "key13": "25J4jLVMgws1jJBdXnGiuDwdrjUhUiRAL7gHDLjxyz5HHaP3n1qw17fLUn8rwCqRk8nZNCpVYd2tj9mAQ56PgnE8",
  "key14": "2CyujtLTf8t3aJUGgqAnEFPj12p7KTWS3RPfKP4e3j9nBXq6NTYfvL1fpFadMPwTH7i1scuVRipJEyYr8VrpqNxp",
  "key15": "2ASJAJF7nsLhSwjxRMmJ4k5YqGeLVCcVwFPoFT6AhBAm2YmyiEVVr5g2JDXvoeEicYwAPfwtjMhqBm4P9uRrJiZD",
  "key16": "4mbmgrAcSgH1Xm6HR7rtiivh9wMMqvcA8rir4peo2Xs4rGjZtjP8cDJSvvGmzxaJPoHN1mJ6jKc79sWLafg6Dih4",
  "key17": "H2PogDiui7jwNYFvREAc8zXUmAiVfmB87kFKg5pZAY4gmERNGFVnDeer8eYtnQxwjaDaTgCAkih3v8aETA5og9i",
  "key18": "vxwfNw7Wgs4s5ZUnGM7iEiFTLCHPQBwAvS1RQ3gArQ78nqpeFLYTS6XitE4PsovVHhvdtCehBiGeS7VczcHfTBg",
  "key19": "2EDjC1fFSnSpxLJ25oG7phpLLXt4vGyXZLmUX1rNNVc8SNnQiBD5Q7T5Rs2P8JVoWSiovigsyYmiqH7b8rvUFXji",
  "key20": "5xjJ3XDKZMh359ZkCorBSzQbzfG2E5K2Nhk4d1wNma4wkriBtbx4Tv5vbQz5vUHY5H2Yb2Lhf7EZhDLq2QvNJF3s",
  "key21": "4Y9cNHxMj7xRGPSj4jLDSh1b2YryH7aA4QTGFXYkh34QiuRznpLoU2ovVTMXBzWFC4d6Qh1YHXC6TyJsQ74orA1j",
  "key22": "epZ1YzHPMYsHWJtaZJq4RbCsSBAqgEua6etRJP9Z7ta4rJKdn9iBFDFBnrkcYnCJv6J8HfRQm3HixjancDAtFC7",
  "key23": "2jSmmGJPk2owX13TYHS2XuPZXCh4XrMXJxoBU8EkiRoWwWbAj1Y6RCpnk3mW35rCjK3e22m53D76nbDAC6Mjwirs",
  "key24": "2rBVi58MRYH8rebpdLn1Bd1RjDbzK59SexnsjpZ9BEau1cbav87hDdwxR1fDiKtoY5BCt9xnDwhxuGKmZnbVVuAB",
  "key25": "59QroHpVGk9xQ4EUKRpWEgK2vuFTMTEPPZX8W8r3drPDMLga5knZVQAj8ixgQjcmkifvJxQBPLPvhpoYSkwazbKs",
  "key26": "sY1pHKNFMA82x1cXfP5oaL3aKEp4k7266eFgnHThnfXzCksZ3PjkptMdj3hm331y2G6F4m9iMVpC8YTFv5Ypk5D",
  "key27": "2XYkwco1UTZBkk81PqCZZYAxjhvviSKdb5TuNujhqehN3aXRPLFTA4r8jRnVCFUapqWHLwoffF8FSWmMxkkG3aJX"
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
