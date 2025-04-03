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
    "4iaGLj6hM8JvzJUbstRuH49Fq8qKkHWbvUJ3qixgTVzGDC1NNz7vgdza4rt2RCsi6excAMxFq7TCfWwz4nJmLLzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wYrem6PRZoLih4FHpEbRGEirKUbAbwKdhJBEWTdpMaymvXfki3wooYAgr26cPtpqqTWSKCB7xJsZ2oeUwHuegod",
  "key1": "66rTjqKnQ31i5aMfT412MePyDzgL6WDEHCDunQwkPEArHbxZPdqyuMJMmy3yWaqDMnXaFiHXJ1da5SGoMCvg92Zk",
  "key2": "5CuFMAxKzHc2oaG8W1BXr1MqV7hxa92cdmVqHQ8JFWzq5YyjDcYcp9L5arbNWHa2r4mfFjEbCdhPtJJrGZAz22KU",
  "key3": "59nZfSM7VNmgMjZHAKFTFuLZTejLabNwywzB75D9Pc5kXcQA5W5GLpP4P28bih6xLAcwiXfjsr9HKuSiJwVcKxsm",
  "key4": "2jpyvLHxxkb46VaFE4LYM8ZsZTPFXmLJsrYwk7YCNeNU1hj3toDLGVxk2B8eSXDWcitf4bG39uChR7QMNcSoHYBD",
  "key5": "24GZdGLDGo3Kg2MiEVhnh7VQdarcw4z5o4vcYvENYuKhvZdqBg4MszgysznVZyJThY9Jd1tqeVVS44SkRESgaBew",
  "key6": "5XKGRbdvwT1Zym26dwwe4owHq5JmRz5o6Jd79PKt3k2cnwLeb4KSn5sXdNdYsBnFPd6L92D8TPrKLPcc1mWRHEkR",
  "key7": "4bBHgCdABAKh1rysJgmKWmPqoqjxyBHJTcS4R2HQmZQQuQv8qMVXSwBKmmY1FABWwsYAJUSSWYrh5tS52nLjfoNf",
  "key8": "3EpoNn9x6ys1SztL5eHa29xWvgr7u1mbhnvL4QiunyCJzmG56CWPqUCbHSbgCJXir1SNs9u3MPrg8eYNirrefUgv",
  "key9": "4bGL4yUMgRYKG6gm1yEnMAvKwuxvKxsrnABvQ4Ghc63xhWQtaCi4GKrRDKpS9PekyuynzYekcdJ4qvQGLrxDEkW9",
  "key10": "ZFbJeSKftBuHNQyhEnpateNipJCmGRuLB4bAgKmqNVTBftR8TamWmJhSPJG7LEEU7iiFMRgbvd43Dd7wDUKzynA",
  "key11": "2UBXh7HbHCY2kX4fK3QK72Nb5P2c5jzg9S1sacwqaeufzGkf3hJjYeqqywy7fpoxebZH4BPkGCDHntFH8PvFFwgk",
  "key12": "qPgYFPaVHWFtLSV15aASzXKsuxgacNBwKdfhtwSRUKtfFxUaZWpMZ23Bs5RX6h452y9srkAegBfUeMCQARcfyhd",
  "key13": "3Mvd28XzXp6BTrGrVi5XE9VQqssEK4qrmEhAhnxkrbVbB19D8KS4FFoAyWTHibaPKJq6KRgQ6f9tpDwF1uKY8A52",
  "key14": "ZBCJcmfUpyevg3wcwLoAXKGivZibwuFNbvj2isQiNHqo7wBCjdsRkA9WDSNi614ULbKDDm5EjB4xCHArCusUocL",
  "key15": "8AxWR9i9jDtBtV8TURKySftGSmyPVSx8AmdrGCr4jWZHBkkuiM7CJLqK9b8xCsE7kWZLVnPFMhuGyrGLM9tGgoZ",
  "key16": "5cqwgJiQj7EWVYbcgjv4gMs1mZWC8Bkc8MNRRSwqcLNdTgZPmXJ8bhoQKrkhRCSW6EYgMT9rrDBQqtj7gcvvp6YK",
  "key17": "2o7Vqdd88K21p2n5iSHiXp3NBBnzMmibwtikhN5DRReBniKDKuHbZ1wUqeL1FZLFTCReYATswD1HS6ri3g5Xyj25",
  "key18": "3EzBACN9Tio6FeqvYoP3CUCZ4Q8yH32woPGdPA1H3EE4EAVzMHwtjwJr3jWDwnfURZ8HFffQbn5WuC2GcTKzu3KB",
  "key19": "4YBbPVY5km5RXi56XxCRGAYTp36Qwc9J2vk7pS2H27H2RsnDDCMqqPYRGq33qNQmYCjEwWRUCJYWwXKB5CEyEjhw",
  "key20": "2tLppZhABtj2anDzh8FspfdSEqBc2Lee1c9n5JRWqBHqDCv2FmpYJv1rEnXASRHr6qksBNx95uUrYCGh3U4QWRda",
  "key21": "4yJGyWfdTudrvcTzD8tHr7MDWzwwqPkY3YNbxNzugPmCvJXyE8quDTMReRph5ZYGaYi5rSViGegtxCsu8tWF94Km",
  "key22": "43vwF6iJMJwgakn6C1zvs7aavzTpD7RSXr7tSzNAMSTQiCSXELruMENsRh7skaDoiEra2AYfxvbCEBsx4KyFxDR8",
  "key23": "iDBRdFGA8BnDM7sJP2mQWEXM8aZ1ajai294xnP9WAcPfWaptHc2hxs7UF2vLewiDLkyHFs8PkgvGqvNkkkTaQZS",
  "key24": "5yvGfDfxv1zJ74NN6qeToJdncopuJBp1UvFTZ4eXZZCp8KGc5nN1BQ8qZHvWtMRPmGwg4CXhVbfNrPPaVTNFksif",
  "key25": "5kN3HGpnMSPRpWatG8FyaXZi6D2CcSLQzBFDoUNX4svqgEzRQNKB4PqMbfxG73J5NXiR47XxaFncUzGFNhQ75ENp",
  "key26": "4NdNY7NnowbBAh5ZMU9C3o2hiLjD7YwssGwirRwziTNpw471iSAQ6ycz65dFJ5LSW7csvh17Hy7eYjyCTNoTd11j",
  "key27": "34GCrBQjCAbMcdDu2k35ZpQ7NwKM8YjfFz3gTm2m4awutHXG13p4MMjdSR7cbYUETKKxrTdwu2JwpKye7DkVKsrt",
  "key28": "5u2V17tx6Jsumak4npdX3PJiAvGRPFFvRYHSTMyLp5WaQkTiiPHwrmk6byJ9R8aJRMBN5KtEyCrAicanexccQoor"
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
