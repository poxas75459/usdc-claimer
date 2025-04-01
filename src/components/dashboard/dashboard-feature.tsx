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
    "4FHuWkn7EPFAb5XJmqV5irEBiDK9Eq1BJS41fTHnd3cHkmsrAq2w1Wke2GUXiJTYAnQjX7VPpkmXiE4XoNSsQdG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7raDXD4uvgVoUnp2EWSsQszARtnEhfJrRtgbFjHK4RXjw8G5vK9pdT6Yr9NMpLoG5GhtQzz8DsMqnF7MtjdihVr",
  "key1": "kznVw4enMYkN33kZ4ePTEb99K7syvD28vDCjzLuTyBX161nG5nj4sYmYtHENNhtvwrAtdjYg6WqS16hW1ZpmySR",
  "key2": "52Cefvc1tQzV7WavRTaEi1EQkmZNPdEKjtnwGLyp6hbDVbYEmuMa6zyJ79NGzYX9jURyCMMHQJVJ7UWWYNXE7q5k",
  "key3": "hT65WPAYtQ87eA2dSWQsMCjGU9qoUkUbUfTE6GYuBWRnBkmp3X87d19R4vtmYBRaBvKrW4NqVVym2JgEWXMaNdg",
  "key4": "3JCnJNMof9NyXvWv5jY5H2HG1BvdHEdTbVNftgTAo2C5tZ6ZBSsfv74mcy3mC6wZnLEZg7BdohootDP8ZtKRhG9H",
  "key5": "25j6iPEBa2MZRLjw92wGuGP4aR7G5YTSUBERfrygLfTYSR1MrFj4dq9VGbZuBjZUjW9KahCaPvfgcRANXVqWpgLf",
  "key6": "51hcZbMpEgVXzdU9fRELnqF7pnZZGuwcQa8To7xuhqLgNG2JeVQ8xsLLev4vGxNKEs5nWTwXWDzzv5zSWPodUM6s",
  "key7": "67Pr5gXk3tBSvxRF1ftRY6bPsSr9ZG9vCUAk9fxQNb6y1HrHFtHATA7V4UpSmPTydH6XSyTGTHKxFNFSurVVXhiP",
  "key8": "RAXTRF8nF4aVSkniV6AcDNAoteURNBM7E8YHSLmAe2oBXMbbfvTdDJjFQFGyRgBJHuHEB8N7LZpmSennaUxA9zE",
  "key9": "5VgMiNnVLKk5LQgM247xKQ8qgWcbUkP7AyqmEA1hMmNhTruhmgyqDHwtSuFEDTzLgnJ3myp3n1biutGDUEW5xsBE",
  "key10": "27oYdYQyQTb8HBtrpfDxyhmftwT46og8c1nBe3r6W7r5g76qArcfHay3tMsyG41zRAwpa3LW2AVHfZ6aCCjxJgkt",
  "key11": "2SrYrqUKhdAjJWzJzYX6ZJBmzPcNyXiDXoAxTqDRPUZTPt9smnm2RqCSEmRKoXdCbASEXTMf5M5JQmDZh9v5AR1Z",
  "key12": "s9yLrj8T3cuZCUqcbp5wWwcvrBGJDyXXKGarG34MNRGcA5bvbM1NLtjaZiVV4XooE2aoYn7NxyeL2iikevDaq9X",
  "key13": "41cN5iZsi8ztCytDKzxd8RoUe1nFrShQiFuGyUDWj5Wcwz4ymikYVho5z2Pp9Bih7s56kuN3WEKbfC4LTkWLn8WL",
  "key14": "4rHJh3amQorjdjDc16EtrHzdKcUV9WbmbRPCCxrjMA4h6hbpneMmRWYC9U715EG8WAtekvji9Zi9m8Y7Rg8Gkz64",
  "key15": "2Qr31FETzU9oX8AnJk9AGWxz5xGAF1zFMaY5kDLUDoXSTVXza5zpQVi8tvGbW6RY4n8XiSeM6rEYkgP4r5jZArD5",
  "key16": "3JC8bKLrgRhhTcwXARH729PUkZcmLQceUUXEBBfdZfS42bSCkMcjGtgKE4rvXrnAgZbGhjcRnbQdBu6NqbJ3WQW1",
  "key17": "2TUY8gna3JsV2hxDn8eF4RweJvQyZDDgfNLaC87tNatZSmQoJBYthHyADZiK1oRerP4KL1Nzb5ZGRiqKWcTWDTNB",
  "key18": "61GZo47J7rszwiiBw4zLbW9rVTDZVZP5kLtaBMByoSkFunjtzeF6e3ToVGhH5ZjTxmAHtw5qM6MD1e1wUeWu9GGu",
  "key19": "2PWzyKoapyzZrYCyr4TPHzDcRFVwUEH8c79sDyFhGhiiW2jAiXwD34HGyk8rhFojCkjFZuzkLyqksKzQdrSK4r8D",
  "key20": "22yFKW1vvZwSyYzPtz6JxZQGLcLjeXU69WgA8XKjFwm4d3hjDAYKZ6EqMmzzSfS1GnPAb371AqvAPJC1pgeFHhx3",
  "key21": "43hUr5x2rCjpFJ7ZYyP6QgiMUd4Rhnj7RVGCnsB9ycCsFSf4bFMdAVZpksi1eSkuFmxhZ7uqzgZvB8jPAzJKsENN",
  "key22": "3sNBgo8Zz3ZU8t8GgGPpdcsMyW1aun9H99oCV1G49jrYT4wBLVdGxS6CReNMJDCfg7mPJTwdfgfV93hTNLtnUmfC",
  "key23": "4sddmwMnXpUUadFrXv1wE1q8tikBoNaGSqTVuo4nvEUaz3XBmaZ1YbyAoQkP9F63idXa4B5NEK29FUtW2PPDrxoQ",
  "key24": "2hfVQQqivFFKXBy4vLH198cQQthvXCLhcKqri8Czvu5ecZxAKxoCaD2azvDggT2qMrxdAYGxAgkvPWZDqSsAxvFk",
  "key25": "4ZaGSEhqWKjUdaYVjUvTFFXvNaURzzQJmWxx1S2nX5AdyLjnDUpqNUHXbSUYKtmzneoQyhqyiUNm2esmgwYemhqw",
  "key26": "3jxSMPY9ZMtMrWd5sZozNtzmw1d5qC3SW9jbD5dYNwDCbYR9ojZKVHaaghXCKeYXdaVMHaCTByHWGQiSaUAcvWu8",
  "key27": "NkDqwYCB8NLWLNxLjB15hushbuRSuZZ8ySzsG3ZjdBeSKYvbmLYvf2q8ENEVmJhXe4FMA5GML3SvYvgDr63fUZ8",
  "key28": "3q3ZCQGKiN9A7cP2T4EL3XUDk6h87bb7cYg6uQaLhHmkvsUdJ9o2arCpZUDrfwWVYXAhbZt8r7o8ubUhj8QRqnWn",
  "key29": "3cgoonKLZGueHFrHqowpMH2WzyAScfB3FDspwAim2RHBT3zuZYbhheNwQqLPiaDdDPKy9JAgcye3ZmC9pzZaQCma",
  "key30": "C8Eh7foVSuSh3KmZDajTGZ6nakpQ8f9eQ2LsMn2qPjkq9y4Jb9F1bef9Rh5CiJYi9kMxZXuDs5qM7gKZwoZB51o",
  "key31": "2F5tYVEuevBxpfPWv1fAQSUtpquvv3ZMppQe4Mui5bTGHPcyc9LBTmPPBuJQRrmqN6oqpLNgwen1rSNz8Nv1UUQ1",
  "key32": "4pav8JaebJ2rRJGmxzsyT5CmP7XG8RKrcMWcz1aqXQz5WQmExSCRBvFsDWLUJMsNwuXjJwZFV16Ac64UmY8fzc4m",
  "key33": "5XUC9up7t6rgJsfLv5GRqRkNa8nS6pCwuMqGFafx7nAAJRxKVZT7U7N62Stge7keKEcYDLnu7VpYuJRPd4LXZEMo",
  "key34": "oA5W6DKXeRXSEpuXMYcf8wZ3m86tfMa7x78oViPyomsk53VBkNya9s9XXexATfwpAShhHEeZLEqodjbub8jR5U9",
  "key35": "wanpGByC3Y6ArfFeqXZ6WbC39rXjsMCqX4dL2DUambfmS8zQQf1BXACVDcJcAUxXES3zY1ehRTr6Mfapptw5mDA",
  "key36": "NEygusZ34u1jnLt9FJ45Hbv2RnNyNKutaKauXk6fwYUBJwHeQ4odMTdb3oNf8N99swLcLXx5qibr8Mb2KU5jLxZ",
  "key37": "25PmRsYE23amqYY1WPaKkmm6FMfa4ciZfvLvs7YcbVpAkaomT5NS1bmNjtbqyynM5uXYLQpCJgEA4A2ToTqr6VoC",
  "key38": "4mfvpbaDCKwfdqf9KoiCcZc9rZPcUcCZmvDMS5QxfXeGizcQrtp3QM98o6CsGzt6mTGFBBsfQdxsBmRisD74azgZ",
  "key39": "5bDAWTq7hGVd59R6iDAANYnNZCUNKUwTRhhnGJTS813Wu7jki6VMST9ZRj5Bj1TC9wTe4Gf2SWDgPLyP5o1GdLKQ",
  "key40": "57K6HbpoHJ5MeoZ7CEWsLcUs1hwmyvRLF6C3RbXaJKsWTViXoB7Sf8FiEL1ABb6zcWrfT8Bswq2RvDNLmsUMvBLm",
  "key41": "4QU1yUMPzFWSw3BfzdDM5XsyzcjL92Ae7rR5SQXbeaYUti1gCTjUbQx19RBh9ef2GcQUdMv1wqPHfGQ8tCLfv3HG"
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
