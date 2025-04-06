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
    "5cFmU8yktr2g1TMyWz1Curp8p9YyqBRjMrdyCR51JC3oRkeyyawr55Mx14jbmPhHoNHFFrM59yY1fDrreC8NTrCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AVEvkhyhFq96iKNKYbfKP4aL8WzNxwj6QyM3eCusy1W82epvgU8rgvKdr2y1thTAnxxpw5JLGHhnLijE4Qip16n",
  "key1": "3RQF5hrfXit1Go4GsWxXcxWG1RKNdeuLaNmBPnYEfMzJz4BgcSUp2PdXU1nLsNUB52Fdr2QaemX4TjjH3aaNynY5",
  "key2": "tREBKNADFodh1QhNhfe2jzYU9AKdtmbWiti6YcNTS2kZnTshuxq4cj1QspPMmZ73c7uxqT8PUQnSg24Xr6Lezhx",
  "key3": "SKyuTgaRA1ZzFpt2agxqgDgfQFXG94bSi8obBXh68DLZTpRhtp7osXPtziqUJRfc7RpRJ2pk9ko68WG4owdwXou",
  "key4": "5Sy37RyfPj6CxdXaR2CpjTwHSZk3YFgAhSfxk9htgVJrrbGpg3KBpWk33chJ98RBXHntstWrxtwgTczYAsLvU7s4",
  "key5": "4pauerBdEh1MGmSku3akVcgbbkKXc9Ha73raNx4YaHZB3kJYLXk9AhwzrrSgcYMj8SBbRzqyyH7qRthz4xswmCDX",
  "key6": "4uWqPwmLyDYd1Cg3XS8toyiPBBSJGQYkPJMsS2KygzmGoEHVfAcPqhZZMFWKvSsJwWjozSbPNGokeLVY139G6Fmv",
  "key7": "SKayDFEXdJfzRRzNbMjA7867XPmg49EmTV9o6HgUdEewjZfyiNusDUXAC2fgJTMHQL7SvXsVa85EGDYdm7z6sSg",
  "key8": "67e4qDZwtMvhpDJpDFx6QTq7LrqCs7dRvx6k6DGvSvczYa2SpS9kj7wk35YpwYNKeMJrmbvHj16AR1FnkFQP3BGj",
  "key9": "5T4UgroQS2W8nm7UT9C6HQZS8j1ariZm12K8WLFViezquPwuFLUEVKh9Qw3QeE7atXeRQAYtSeRZ3crgr7MuyCYT",
  "key10": "4g7CAUD8XxjVNPSpcJvcfVkcgiAw6ox73NBzuGhoXY52EsC3qLEGJvjLoi25KWPareqHyg48Q3Gae3MozBLphSkS",
  "key11": "3ATiw87Rvg2KodUhkz4kusKVwoY4G92vexcJUUFTbTL2sugbNNk8A7KHfTrFkZL49B6HABdHZ7mvN9qr3x8vbiEa",
  "key12": "hc8RKigLxB83udtxD6rLY61SuKmXKkCCH1MfXKo9YfRzpaKyTCQMQwPDPUqqbuVm2Dc14fCo3abJwRGrsJQDMMc",
  "key13": "2KdqBpysEf9Mx2MSJ44mgUoeQozY3Ep8pbeJRUbsi8eKnaJyTUSiLZWzBaDz3RZfT67PpUqmuXQ8yMZt1AKp7on2",
  "key14": "2Dn6mvd254JKMtyx3epa8EhMX5Q8ai1LftmQpnSEqQivRrNV9AiG7684rRRzkpEGU1yQaeWAd2Ptnm4wbrDYaoCj",
  "key15": "UzmyX4p3wRkxgpnxuhUVXKaMds9dEdCYYJ6MAsCfuV9zZ1vJyxV3h9xMy3cCEsMQ49d6pv7PVEtmE2TxxEoh7ky",
  "key16": "4kbyz86x89oYJiacpERAhzcF1YTYeAyG2XVUFuPAXfcc7LytLzRw5jKWx9u5dmPeCvFa2jnvFE1E66ec6afSdnYg",
  "key17": "2Uc83Ah4Fugj189wds1r6z6GJgVpgByxEeHpcKiqfAwvrgs1yhxW9cjQyT2sMc1cgFsEwiX656aZMVhYh46eji8h",
  "key18": "2GrecahNYBJj4wvE3GK24j7wJwsTGrnxk3pJ26Ub5AAsDdF5YdqzhdH9F9j2L79fbXV1fXogZkyXJJxhgyrYZFKX",
  "key19": "2Ncv46vvJAgf67tn3Y8g4nAtfzyQa93f84TnL9c6cfxb8mfg5HgQcXrFhEsR2dM1nPXkVbDMU9MGFiWDEwuKzvf4",
  "key20": "2MtZS7r8F6gvFQ5NbH3b19GX7P1jaEhtFroFSXZb5SRAjNw7d6fu6acyz3dzQNE3gW8wkLZ4wWmQfrqjTbW6tWVQ",
  "key21": "3vJYh9C4Eoo97SyVxFsRtEGcKRS9Mji9eY3wJmiSBbTya5VbWGTKhACasbVHV62b1DT9yDQKsUy7vSrxAoVZMza2",
  "key22": "22wM89oJkZRMy8Eccx9MzGDaeiwCE8wq8hSTHMnnb36YMfzBxsrsyTv6zRuMhEKGeaagsczXmuqeRXUst7vaDQeN",
  "key23": "4pyHYqAoNs3RiXyknhcNtuJHWUEyGiin7Qq2bDy6dJ147ixxY7vxnJGqYrqVTJi1wVbu4JKVkS3BQ9EaY4LtF7bn",
  "key24": "4o9udDCxibJ1FFUnDpsuwUQTg9StMQMHvrA46YgaWURhJ7XqPqTpkgmD98c3ccreG9KBETbWrFb2GeUFiHpTek7m",
  "key25": "5oTq68tqwNJxwKwk3H5GcMVTeXQSvWVoUzB9VcnY23nd9U9y3KMcS56KJkqgp4bDUjQsUhvmoyPbrmQ4BtwQ7Hh3",
  "key26": "3hK6Si6Zw6np27FHszsQay87vPogPNb4WGSxmZMxDK3P5jB6iaGNDsqrzjrJ3nao3veAzoEG45eE9jG4JfFoNTg5",
  "key27": "33WZbj2aL5Bb8EfKBFGX4PVJ1HziLyAsfRkz4qGgWARUUzyUKmMGCLg6bPrzLgN1iV73ssMipQsgAKLDX1Vm4Zvm",
  "key28": "hxGdZNZRkUp7GcBeZ4BCijgZCL1hN85N16bex2zyD1P9HkyVYaph1bXxbttXkvtjS7gsvzKn38yb5AiDt84xUnG",
  "key29": "3KSEmVprUEv5p9pxMpevZGBpc4w1erEbzNQSiuHE7uyc13ypDZGJst4UyUUgiSCM3onyVJGQMuAptsCCwvH9jPD6",
  "key30": "2oWdxzCJrDwQZ4zTSggb6u9Ks76uExU3iegi698sgiupCGbqUYZ299S1VxSwS3TLAEPkAw24F5QzWSGXy3bG26sw",
  "key31": "51qsRk7iX59neUYhRooY5weUmLyVrPTKeJNPMN62wxkLoaeDcVzSsbLsHtCxvPHTzHy1BrJzTvHnF6ocTrbx8A3p",
  "key32": "B2on6FZ5Bt4MsGDVBqYsGj5QaDBBKLb7YcUfhsboapbBFNyRr5k5vVWZbFPniL5wjVHMWdBR35bDvpzJ1FWJn8x",
  "key33": "57oC4wUp31KAFaqEiT7RFzZgdjuezzUYv3aud33DcM4U8WGksvCPrasA2bx4JojC7HjB9VbdHhu4q4ovg2XECu4C",
  "key34": "kShaZUmq9rEySZShZDjzwTXFNg5j7MTVVPb41Msy5jUqMzWpbEWZMFkXrUKF8U3z4zNkTsxD4SFC8ME9dPvF9M5"
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
