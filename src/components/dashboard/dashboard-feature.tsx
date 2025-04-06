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
    "4xXmCh2k8y4MK5jqL9dA6FTzNy2tjwRgAyAA9ZJLxKAMKQhjA4x2bqHCuWKz9qejKbSP85oNdD3h8MtUbLxdjXve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EW2SGMN8q9Qt6WrrsaDomN8E4zzE9NHjfgXqdt1UefVQgD4AmGN22xFcMWcysREVJ1qCdTyR34BBnXY6za9d13A",
  "key1": "4aKgjSHxXQDoAvgHSw4DmTQ2rFjpj33hkUdpoF99oEem4jA9PVXrPpgqnfU22NbHBTpa1uoT9zs5UBJJTcwfGFsu",
  "key2": "5oiXiZUQsoxaExNGR7wngx7db3NN6FHGCiZUm4GEEcYHYF8VifAB3xZWXgaHSKJA6vtruFEWju8YpCjVzm2MqoHP",
  "key3": "4zLg8DXa2q3jLDn3vx73xptZZt3G8bqAgzCGHFsZkqAwjbwq78v3nMVEzx4PidAK39Gkeh4kGXEKbjZaApWrQheq",
  "key4": "yxqoy71bT7kPam8BqzJoqaBLSuRAKrQH7NXF9bU8LbKN7s2pJ6vSJhzgbqMVwAxXsw6AmVpqNpgCBjHe8h4zN78",
  "key5": "4j3NTE9pYHwhRN43B3TsftHJniv63wt8GNdq7C8JJsDTSYdWvVaC4boXWQHGLYsX7kGy4Le4unEtFNpRtpQN2Hen",
  "key6": "26KjpgK7YqMNKGTQFG588VaRvQSTjuc13VFgv8NCTwxUwqvThFwgxyaAk6W2twGHFVA5mLjDfXMspBhEnLjr2Gui",
  "key7": "5T4oTi28EE8oEyvq7DibqCPafG335u3KvdEnZU9bmqp5eTKEXL8mtjTHwayxDZ2UWd44N9uBmNNdov4src4e4xPJ",
  "key8": "5kx6JNSechnJxxzzHzzKfgoVU3DT7royvWSff6dC3ciwM63favZWof8ougkDyEbzp5MYHKCQ9xnyFjq9Fm9yAx1n",
  "key9": "3PLitJcBQ5dTEXDzhZpk94zPWqbAgSd816niUwKtxKtJt8Zt6BnzSZrmiwpiSUWVS4MVcFrChQ1Yta7WwgsJ3AwJ",
  "key10": "2en6TQkwM5KqboQ6ckh3MkWa2GKfvo3K2h67Dsm9BN5NVW8cmJyqdV2hcvA6RUA2Xjipk5qzesrsYzA2i86E1sKX",
  "key11": "4nGTk3n3f43ShMYCCJrzS9nEuC3s8uZ2Loy136WPgQuhPAQktAWTsi8fqDt5LksoVrCLn88E6cJgEcrVReA4BVto",
  "key12": "3AqJGbLv4Z5z8JMWSFizr99nKwYRnSyndR8dRrtWpc6vPhcX7rRSPMM2rVACRc7bQLp4GRyFr3Q5wFvMPMR2fgsX",
  "key13": "cPhxjtMmJ7RYi22gPe9o9PsXY5PZ7QfiFaVHJoZXGwvmKXsVus5qbZ1MoJR8TRwS9w8htq61xd6UfkkpdNp3w9o",
  "key14": "53LesqofN2kuPVUJeE7kqnkX6U8HK6VGhwz8mBGDs3tukfqHrvwbS5dsakVSEzL1bW1MEgiYkEgC9Cmqre6EDEN2",
  "key15": "5fEVGiQaiNRSjN49jU9UGe6tUemYwMGMWw3MnnvvVmUJ1zRKvC7UdKG6Ke3JY4ihxRYodPqzZ8anR2gUV3gtSYyr",
  "key16": "4pVzteAjT9biivTJN483mfMUx2QRsdi1P6y7YppDxHniuww56SwwiZ4FpHGuxw9j5YhY6jFcyL63iuPNGrU4naDM",
  "key17": "4yT1woqU9Grv7dbuh7bBwoy8Apz7xiVQxcSugsqxKxLvkeVNMuJCvjCixxhoh2q3FteaBpCbWZFFKgMk9kgFzfGf",
  "key18": "66wYXViRx5oyMdBC7XxPRJEq8qSWDNhz1HMGjzdCtwCcabcBGQQWUStQcnQD24Q69D8FdqsMxZ32engkH1uvmgso",
  "key19": "5n6hvQ9VX1Sb6WkWLwDJ2mGwjzabD6NugDSscGgnvjXJbFxithdGKCCTJXwupKbvtdDkRZLAz43gw7qxk7d8eRQj",
  "key20": "2wAkbr3vgGFxPcoJJYAqaacyfRvtcRM2YEZLasjHm6xt4aVFAMC7CgSbk8rNaxsr3fYtSxtvYum2QsTFLxvdrkTd",
  "key21": "2whfEvprNqAGA7ywpU7ANhH64tUjaAUK9bYiBkZf4qr1fj4bHdmnz3cyrS9JkfXUh4bdBZUksPzRjucPrAoUzvt6",
  "key22": "tGwpexsGKg2VBazsWLPigejFyhJyk5oYYRVuXWq4WduGByDDdwSGpAifJALdL7JsPHV8RAXwt43oGRa6aN7JTjx",
  "key23": "2TU7wwiedkhbE4cvHdqZeSv3hk7JTTkaHdyyzvUhkPgaUW3xvSnQvVbJhfmu2m9C6qnoXRaQTwtauEqbXKSiMzqn",
  "key24": "2MdKCrLZLgw5or81G8dVxMjqEh1wSYaGdhQC3EqUr5LyWbDRZciQLYoBT5EVqgfHfRQ52EEwQo4dC9gdNNkuCVXR",
  "key25": "5ACtuRndr8fcWo7FzDxk7tJx3Tj4knGhW4s9XQAy9YsHuHkdYpoz1Pj1LkVKUhUT26EG8sgXxcuXhdtieFezG2pv",
  "key26": "4xngZgAqv5XmesURa32mtEGjtqcy6Kj3onwzndcYpoFhpSAMPmCbGbMdTc2wt1MaaqUBCcQRsJGBw3HymrridPcR",
  "key27": "2NaMzRSGVfvnqJHBMvujSmMpi5mteaGKi3Tr8YcUXKw94j3TGCic4XqBdmdhjtWSBvCjHpw6NXAx4dr1nux5Fzec",
  "key28": "23D7wyk9hYopcmts9cC4bGR8jFaiRsuwGH9Z2oww5d383EwWDvyJV4Jpnym5G4xvCsajXAygTBF293HXfqdP5NCh"
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
