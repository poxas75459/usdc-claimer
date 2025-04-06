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
    "52iWkY2WAN4rnrEEtucAj2yx5JdE4U6jKFXjTZAaNHK3TNdjv9YRju825k9sC2e2zMxpTUXzmvTU2S42hw8PWqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WCoGnXVc3tic23vqXNEDaojH9bzHs9PwNZmvYWqCu2fR7Xbfc62MHtaxZsK2ZpBXXwaD1hn69BSVHb4kAbxySnM",
  "key1": "54U9RYKqKnEVrbiMbcMq3wH6aRf9StDW9jiHJQRsfHkfhMp2JZXvMpN2r1EYqaS59sXUc57W2K42QHYLUWRiPyr9",
  "key2": "4NU5ibL1y3jVrXXG636aZxekvnMi33HTTcThaWibiA66KudYawFW96zSJDQhQsW6etfgE6ggLfCXHCqGer87QKWa",
  "key3": "2hMp1WisPSurAAXthG93ZHutHyszDr5V8zHm2FW7Vaenx2kiczpem1H7n2e8mABkbY5kHv5zVKuE4gZd8GePjDS2",
  "key4": "53wXb7eWVQBjkghNMXeJXEaCm7rLCQVDwhmEjgWSGyMgBgsFCWPnoBRCNAw7usJoQBATJbUwi8twmmc8oFZh5E7J",
  "key5": "ic5vJEhWjoH1H1a7jCRPqWQiKf3KTBwE1ijpyPNwb13p5bvzBxBZZXatGNhun4bgnBiumM3rV5GM4Z8fQsUBARm",
  "key6": "4yjcebWegUN5fVAmzDUogB1BToVF3ZSZp8BroMXSbmDF5ZfzBjhyGuLsHZ5sZob3UnR3vp1fjdLCW1rY2GbQxwZZ",
  "key7": "5596fUf7KAT2b6inSYewwXqE85WvQU2KKVp9viXbubJDuLjqJ2YwwDAkJJzhsKun3sVxbNWaySxDBx1WAt9KwDL",
  "key8": "5rPgeZwLHWm4auuS9SC7p7nA14fqRWaFH5b3Ma8cSDdEb9gUdd2odG21rGTZTtp87gVGoHSzrZWgk5kyVMtSzrGr",
  "key9": "4qLMnBhUyMwzueM3XnY9RAufPkk3BkL8JgWka9sUpTYoFsVTuUCSrjjzTPtJ251wMuTkLMh5yBKBWoHM63uyGBxY",
  "key10": "ESsv5LqwQZELqgyQt4QoUZZdqf2gQHfS4oRdp5FVWUqei3xpiT1kJJnxGqSHRyT3CSteEZzeGKD4ggJ4PfRqfoG",
  "key11": "3vdFjdmC2tPhJQnDzW7tgs1Az1jBqtF9KcTqWiUWP5aYVXcTQdGJcG1vErX8RkXMAsAg8TomZXMx9D6VUCxtdg3x",
  "key12": "2NK3DdqZoHV2EEYCtnkcpgWJNsZT82pRRSKBcWcL1hfkWkomguuf95hV5soa3kjMNs5Jc9y4xX43P7XA9B6dpN37",
  "key13": "4Ci34t99XNn4wWyJkozE7Z15SgMBEXJ18zid44BYMfWvbPBzLH1mJKCHsKjkYWaJhg4f2A7NQSnzhLWfjxznDMuU",
  "key14": "sE53djFYyGeYLBY7X4BEYoTSzdgf6YcfFjdmYJJzqX4iVi6nNUtboELNh8nHw6DaMvhjNbe4MFLe9HHtm1AUcJD",
  "key15": "3ncgfegvrBw96CQy36dpnoB7C9RBLbNX4w51nv1w7Dmh1WnMpANtuKWeyANriUygScr9VVXTAsXKoawBADcZarit",
  "key16": "25wqMiGQYZsZKxJtasJaBLDYXW7WjbfvBw1Nkvdp6KvTiwS3Lij3qdGRCmmjog7YSQiiLHN4UAtfY7xQ4APX8iGY",
  "key17": "3gKLpFCebPWPyAbutGwiM3NeyAbsxXaTqghueskqPR5Zp4VhnukBdZYGT3Jrf1KQyqDnJHfSAvMba8bNi9syTSUH",
  "key18": "3BtFHpHdKLBfeYxrAhLZcwJVAptryWGnCABTSdxYuEtUx6eF3Fmj2vm1BmXHhKL27kVAMkSEoGWNFDFCVcjZ9tW",
  "key19": "4ZyzwFZ9RDwicmtmxbK4KbjBPfaR7o7tBdSRbsBoVKshXb6b9W2YbkzrpvAzzMcM391FxxF4twRdWS3aS9EQCtG",
  "key20": "5utbGQUhSzb9LAyBGjcx5o7W537f7qpkeNzKxBhg58wgQQvu5A8P4fYa3ihRWqAwGq76ouWPjXUvJ2tXa5DqsMv4",
  "key21": "3kYnQPpck33J3xNY23koBFHyZTwsnHp19dsKZnTrxrhVcubJrY3a1oXGB9t7bX3UgihccycYGybmj9PMmD8Go8di",
  "key22": "3Cz3kCKkHFzfxhfuwbFmmJ18D1pxQdQbzUgFwbfxgCdMYjvrfcXfjLbfYB67oGtDVTH1qGQGjbSMTp1uNg6zKtHF",
  "key23": "Cd21XSVgsAdiTckytizYsqBpsn5ddP3zFVPUiFcixUoe42vFYADnVxHbuwYjh9aowjsQn9KufjZN5mkm97DEGXw",
  "key24": "JzSypsZq87VnB8W4WGxbGcNy5AKqfCReEScjpGqzm89c1LyKdXhpfuDAksodf55HnFpiCF6UUQfifEHrkewppY5",
  "key25": "41MhBXeowCuetZtVJv6n12wFzfJo679AzQE8qL5kqcaHExbP2JcVgsyoV4JdQ7ZdwtpaAowVfvjBMp4f31ih1s3k",
  "key26": "GTmkufbuR3iuYsYgFu1EuW43T4WaK95Tczz1kVm5FWpw2srNSTF8vKSmbW1H6MpcZhYU6KgEpXcQdt6LHZd8np4",
  "key27": "YWSbajzCy44scc5hfuGCLzsGYAgPoT6ynbtf4Jm3KGWXDDaQLNAhgUjWY5SuvVNe9rTpZPcoLRSMS6yL32gqeqs",
  "key28": "5sv6JRvN9ZyaMJEFBDM1BnsYGkGsEV4qWrgNhc5bCuhKeZLj7MP5aNzQ9JPhpfkF2Zfk2dz54GemJbSgGMsud4UA",
  "key29": "5SMSjaua6ngGWB6Z2gP19qC17J9x7oXLP9yDGHSQF6thfW5zVHM8HgB1oKJs28wp2XEomUKuzKhRLLBqhwy3svDf",
  "key30": "259mEQQXnGJapZGG8uiZVk5DHvGfJ61kDjgb6FBTPdVBLcKSvweKKuQXzAz7yHptJ3Vt2UqVpETqYT6wRcVymPjd",
  "key31": "iMWivyL3ic2rEVnAS3xCyCaHSDV9LMmLx3GsyvM6pWDvZgXQE8BhkKwXw5eNM4gVjvzH9GVYEFZJRFadSCkjjoe",
  "key32": "4CLFKFfJpAKnerYxcnMyLaD4J2kRkYby4peWmHtP4B3aUUD4sRCEBDAr76CsnoJ1BNSpSqrzj3DuLkK53MB6qRAP",
  "key33": "4qQupgE83kcDYDcD7UJdKXWfXJgrvTcycVBnPUnDKX1zDJVTENFzVxcUF8srHJ97bzjLDF8HhZ7AWL9vRvmq5LEL",
  "key34": "5KQreQ6EuBVA5SExNtB4ormuXW6pXu5THCWy9ydoR74XtvDemMauBCfpNnjuUoJBNabjfezwChXtvg5Uup4NwRx2",
  "key35": "3CULUhi3gLzfoD2f7cFDuSH2nxpALS1wAA53zkZhiW1B7hzp45MrF4KpddqgtHvDwc583WhB9nRZUftXgj9uMcFE",
  "key36": "5i41NKb5W16U95D2k9jSrp4kL2stwXH8BpGJuzFrciKYEo8VeBTyN1N6n11RPCtXA9BShjNL9pDDUZxQvHsKZCQT",
  "key37": "61c3vmt6MayLZqXNZZjKjfViMsjjWKkFZVW4u3KVFnKbquEWewBpruninx5CZxb57pesKmBb9nD35warH8L1bm52"
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
