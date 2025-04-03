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
    "3DKBhjTEefAdtE1DUwqtVBaeE1t217fAZ5jHUWsSv4pvJA4sSUW8ZEhJo6vbd3KBkccQ8sWGCFb3VVb6r8yKwFQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DjBtEezD8hgdingK8XXJLgk1HnfaZmnPLUoTHg3JUMievH5qC61P9HqeN8iHHKtSesgXefziQmpeE2tNdnWgTd6",
  "key1": "52AP6yQ3brHMErBoGrXkynAgN9pRx9Z8ZVNqyvC6jzC8vWMEKvZn9nhJRZUAEopY9qfZmgbFkhvaF13xaURCr8y9",
  "key2": "xnCmdN8pdfP4aPszpxJasQ9JoRzgX5qy4zKSxwcekgepByAwTNUU1YarFUgEWozPVqoKLHe92MhDMVtX4snjCBb",
  "key3": "sGQDhiuGAoXdueK9S8bCN8u1bZS67xrCndPU9JWCn3xNtS8Jc13HtS5Aqzb4sncdg5LEN8KAnSQQJtnpmyz7cY4",
  "key4": "2EscSbCVbTZBDocNXTd15FaEt6cXGX53kgqpbHaNKq7bpa8WccBV3fqDTdQ6fLtczajZsmrPCrhPrQ8yvEdK6UAH",
  "key5": "2NwpPkEXwKVYCAByfLqKSWjcxQEjYtQPCL5AUJJWkdBuhvAcY7NSwQR3ThxQieaXqSfSAzvWidc9XtHeiwSsWhZR",
  "key6": "34y17vNLLi3usof4gcowwfSPd5Ap4j5z4CzF6F9UrcDKi3rNBiBBqjdg6zZJGgsEobAHgkQjx6ocGNi8CfmULwPv",
  "key7": "52ShbcCXVCJJS51brAEZpd6Lpce4sYp6K5c6HLXHwoBqgdbUnpDxckhroadwn9eMeoSFAGBxxgg6QoQtLTkGax9V",
  "key8": "83H5dKrwyPsMrXwxSjX6jR8YwgUx5DqKWfxrEGmKYAqbdzuXdvn8HDJnWzt9k1Yf4Kw7hoNhYqfWYBoFFXYCefr",
  "key9": "3QVbBKzMvM9xjAzMpnykYipffaCQ8XjAxBbWBYHyUY2JRifMCAanfiznFgCUZP9ssLFddcMvBhxu5Y3Mx8LyHzq4",
  "key10": "2GpiWpbHgAsWvBir9uKBrUNsL9QfaCwgAQPM2CP2gnvYALXUed5653w4tZcRHmvDJF9inYiQyA5LDPV9dAx2ZzMf",
  "key11": "2jtBGuPyPRDhioH5BkjQjRGj5YT2udMLwVmECXzLTbQV2CPRqE5pVFsABj5sRBpEMXkEyFFHLvdePCecELpPqRjo",
  "key12": "43pXoRnb7G9bio6zqqHLhPRYwZ8W4vKSsYUse6tgPTFWVxWENT789C5pPF6sXyR9KT5ftFXQBpio6dosqmHsuDRh",
  "key13": "YimqWdcGWqrdLXMrENHR6tyjLAaAfBC4tw541bse9XycCR4qFsLcg5JtvSjmpkkMbppFSwiLeEhWFQREeCpEVhw",
  "key14": "2NuT82i9vBgBZfuQbqFHLiE1pawKsRXFabnaajGTpC8nTK4K6RjbjE7Z932xRdovnejxwnvn3kY9ADnVdMMZQCpK",
  "key15": "2kf7huk7gvo6acTGFghG42t9Ao5ektGzHFGxzecuUgxQ4xiWXnrwnMEqPpXs6KRbqMn2pXvRMuTHPAeyRy6godNY",
  "key16": "3Df3PSv8gQMj1V7ic9WeaZAznGQHyVtM7P2BqTKEnT1YBLh3neKCu5VHuMtBYbj5sfLW5s3sVjD862oEat6NtvtL",
  "key17": "2aHKz9bqozBsTLJGMAbvFQv7v7rH9SGmBX5QXoCxMxXgdRnKnQCYznpyYezD9gDS3Vn7Gbvp7ka3rq9kJnEzwtrZ",
  "key18": "3ZtPDV2XP448EcDs1eiSYnoi59Etd8fuamS8sD4FkhjGns41pRXm3nFCMMvT5Wur9p7Tu5iFnksCHLRXNnnxMt8k",
  "key19": "39cypMvYGaauYeJfug1T3j8LWFfyLynN48y9z1rELz2bubSkUAqhq5kb4gnaCYohbPUD2eTxC9CMvHZHwoKYVXEu",
  "key20": "5337DvfLgXiE4bveRUQKAKDywGKWuSfz9FVKRNUuuMUBE4BfEKKUuHrrVmJ6ocjq6tdzxDMgMqqnDdaCa1UaXyZF",
  "key21": "2Hda6Mt2JCzeZcssCgoHnt7k3zhEoTD7TNFQLMiWUixXJjzgwumemWWLTc68Y3rUWEfjRiGkfzHSzZKNMiCQLNQL",
  "key22": "5aHiMD2LUsrYojFSTkd7XhkLsLyvfxef4Qv99ZTGKHRo7xdyweSLcARw1czxdwg25tr2mcGw5o237gTzVqoPyjBX",
  "key23": "v2XCo73ZyZE62a9GGuHcdDvzvVymyBGemxYF1RCYDy9EBicqp2BXtEXrmhicDUtU5W3MVCoPt3zxuoiiHM6dZgi",
  "key24": "3MhehzQc3v6gbrgiAML4pUMB2uYadnjCkhHV87gEtdDx7C3t9BW3VVptQVhZg51yxSyYBGSt1fjwFEiinj8rRs4J",
  "key25": "41xirR4CkddkUSSY7yCTfUJJfea2MDaTiDo5uZ7DB3nipt5cjTUQzvgNxMefPGDKxgr8RAD84rfqKBf6HuiKPQEx",
  "key26": "3UgfqkwhuBEhR28n3HmhBQebjfYbBnPkEPP4VYvwc2K1FLu2DF83C2o6qbN5qnfKfDhm91siMtJcw5G25KMiDEEL",
  "key27": "2E1d5pQh68wdemDUJzj5vDuvPq79yM9mKis4sFAwr1MKR6FBh4vVUEK758agstd5z4bGfFcpHyU6DzWzKHUzUjeW",
  "key28": "3Di2VTE3AL5rBNU3BntAYR3BFJDsdHbD1x4j8WgxCvGfw2utc2FnPkW5KKnXcwgjfHzFskQ55bYN3PBATpJAvdwm",
  "key29": "LHu2CQLfjJsjfSNtUi25SVAF7ZyXy3UMSj48sXX2EU6WZrX2p74Nj9iMs7H57DsFm3h84ZoN5XzkghPwfmRd2tv",
  "key30": "XJQtaMoy5MVoDq5fqDpQQV5c2Bib8jkn2p5e2N6UeqkjCizyp2eGm9NZvGaExyN3fsqUi88MUJxJk6kJhpuJyZ5",
  "key31": "2J4cdpgD3f7Zryvq7pxMGJPF9LS4d4fYvFwYuoyQcU4aRoxPkWkQrbpr479npipJGBe7EaPNobHgKbAP6uyk9s4P",
  "key32": "59bKxocWga4dRfjy9whfAS912471JTrhwPYtFobRe89FbAr4Y31deCQfnmj17ohk969iX6nCdD74U2NUhzgXCMir",
  "key33": "JpYNERJqLbjU9r1rEogXm7s8VbpWj8ZkGeF9b7X5NZvaSErGue7mf9Re7DbqAyeQNoxcPiKc6rTsxVaRpJXkpRE"
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
