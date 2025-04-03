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
    "57dUo6NBPMpE9P6EJHjhAa9Z9fQ3TQzQ391P2uLBU7iUYse5ejGMYUY22XdiQvwvTPPbdeNAidDwH3492G4omsz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X6V6Q9wHz68nJn3AnJHcY6GUtLHSGDC9XP3UZWBAqDELh78pUjJBaXiKYq14SqNzBWnSHyWTp35ahaH66RNw8zD",
  "key1": "3HG6fpG1QtAM47kwa8FG8eb7JbiWVVU63DLE3ZydUNC7sudgsXoypCrxk99FG2GF9GGW7Lr8ii8WV2iDgwFg1FLY",
  "key2": "5xHeFUQbYAfCMUUW3ZdeBGtAtFYnvxyf7U9bg5SiEV4iU4AhLxdW2VqVeVswVk7hM5W9LH2T977hZRwYjEjPuG8W",
  "key3": "yGh6Uz9YVu7AbQyi9RWEt9iWFCpMPfkaP6SSAco95Ufq5AdXdPJgfW5ok6J4JuKVdD4TydKYgFvPUH3DgvTNBt8",
  "key4": "4Fk1HfcxQQsRWhD45Wus5YiUrYihdeHcwXrUScNkn4CfdP6guzDrefHrWddKnH3qhfzse8MxvFnnaq22vits5ZmH",
  "key5": "5W4VU3kSRh5LVUbiHA28RamS7nVX1PevGtbV7F5Y2NToMQs3CrkSMyhPcS7Qhh3p2KdjePyqD5m8Wh8XU9HCKPsY",
  "key6": "5DQoRGMVEWo88aTN2t3qUtzKtKjcBnKLMHGQvayzuM64oKWsNLM918XUAnRFrDiF4nQmoeDLyT73bZBPfenG7Dhy",
  "key7": "49V9AgCYUCegeL9bLjZqxsS5ygF65KG76GnR5D21saFY8FiEX64TGvdk22m4GdN6F9dwPUt8egoDLvC2S8jkssfT",
  "key8": "39nfgJS3rBH9ot54XfRKLz2J6HXYFNKpmxNit9ynX2H6joXvF2mtZ2K5qgVosSjGR3YrFAzLRGRnrsAreiDj1WjZ",
  "key9": "pNf49ECM8GejKnfmGFnvWsZibpnwdMqKP12Umk25Tgk3BtRwMBtzWWNwhF5fCnXuyDWRJ8L7ez1iMsnYsz4BYhz",
  "key10": "9cjSHmffAompDkrZLzMVNhH5GFxxJmirJUydzoXFLe3g1sEZ3KayN1nucPa7Z2jSzo2EwvmsZXomxfw1Qqvj64a",
  "key11": "4LJhaoDL9TsHQytVxhR3ppyATHaecQ38LQ9HifRebiRv96L2E843wpBRqgGAqdRPnhH1D76bahxS2tmBdXJvR1k6",
  "key12": "KruPfEekzZjWpv9M3FdPRL4tyYyLBHSkDotdot548Bqxhdmkmp7iTkggCo59RhCsmpTGR4o8sYoZcX9XcMyyDAv",
  "key13": "2zW3bActMBF7Bfi4eVT254HqrjcRprhR6oAW9TLpWB1qfdWKVVkcp3pCtQAKwQyEqUXiPNeira6jhdJK7URGV1t",
  "key14": "5NXBQe43U37xwSeAZ4ZtXao3ZuUWt6jLDC7evvsSvstvCUEk7oJWjCT8UyofNzqtvu31Qi3V9dGH2ZEppokxMfeP",
  "key15": "24wXL1ybYsCHbtQGAhUenPivCwJUBw7J3HXWM1trcVYPYZtxPDC1bDpqigMKiggGm2zFPW7MjwxaBMp8wSJEyQyb",
  "key16": "2iSwUuCvdanQN5AreN4BgtpAhMC6riehZ4vCUfYiSG8xqww3gn6K2PRoRPu2PwVC3Q1x6i2F63vUsF2yKYLsd7uT",
  "key17": "4XA3LaWm7ak57e3tWvNiLrWQP6ibUo3crrBti3jPU2Br8ny7NLoqQiYXWyhViCThH2wE6xx6KAKBfn2SMn3zBBZo",
  "key18": "33JeA6xk9nuoo5r9ciaPePWH52eX7CoYpRxnAoJ6F1kZjrte2jeW6u6HcS2DzFEeHVoLdhNcmVBtW3NdeUR6bQoS",
  "key19": "62o7RYEEnRcXT8iwWiTfput2DSStdY9KzfvJHuJu2xjrWjfVM58sh7XoRZgSbapeJAQ7SPnoNjjn3aKH2xJkVwAU",
  "key20": "3gGo8SdUsJpFRGQkvmB5CAMRqCrDzbzsMXBz4LWfZwpEWyxdEk8tf9fPMUzC5DiYTrkARRyuKrMcQyyG44EcoEPi",
  "key21": "2Ltk7MKbex6gvPTJk5N7NDzHWBQBtieqAVt3aAa7xuDkMd1uGojpBsmGEccLEyRpmCffqPbCvwDGExd3AFPDW2aH",
  "key22": "2vkCWuwyuLZxNuTeguxBfKyaSWQpAHp7pbqWyUHrg7hikWXUKDpeyBhiyzVbH9XEMApyoXsJrKAh5TrQLsLwHMmY",
  "key23": "27rZzpyoUcUutsjDXeqsDrATWgbbu28yWQ2161Um47iD6BLLtvmrmqxoMa7SGi3v2ZrHiLpPmCox2D8DPDmB9P5J",
  "key24": "4SppDUvcKMxgJkKVtRBdispcSccqzyU1cjW3r46LSQm4sMhLMbitvKE4ipEZqkcm1qp8iaWrWGSNNbbK1xuwEzy",
  "key25": "4dLufUrNJ7BchrRwmWX7aQ9Jnf4QWHHBuAu7DDV5gEzHMwxkcUsSqaUMe75UvgEq5F9tZRi2jvxgNRpC7v6C6mT2",
  "key26": "4fE3TMZYetRbAFrofghjn72JgZe4HEhmeo1MemLCUEA146o2U1QLYCSMB9MkVu3Whbwdmr6fB5ue7gnJnpVUEo33",
  "key27": "3Y3RAHq2g6xbmx2qaqMuJKRbqKybZoXvHNhur3DGSjngjHgnZZahMGKPRpmAv3To8qvw6oQ1Nh5cp26dxKsK31Dp",
  "key28": "4Eis3FwNWAqsnv9STeZMSRjL5HSdyb9VhVv8yXu5vaMH5V9cf3ReXd8zEdJDQfh827cKqkkHuV7xgQLXXAdjnJMP",
  "key29": "5icvc7XBHLd2Zu1QJ8sHYJDtVuvePEsfvqcngdPyHuZKWd1kB2rou2Q7WiZRkigHa2bQ41JbKC1iFbV22xqmpumg",
  "key30": "4pfqM9qFe39rjMAumR4BjKBBW9V822QCVi6GcScc4FEnk1YiUyyBFfwdePa9fkb5ZFEWu2dX6UN1pbpijYBH8ecz",
  "key31": "3749GYvR83oZPtZJsaeRb9Mu71ULebxKShx77s5XEXjUwWsae8mRCwn3vXAbt6DJ5rCWEqkSQwMzHjrdKwPfyQpV",
  "key32": "57uLYppU89UZfsgMzhUpGN1Hbo6izuupVZyA3oyKGKj1dSDqRXG8LCUT8WMahQoDwzja45LSUHojeXvz9yK9kHEn",
  "key33": "2w2iXTWrX8SkYmbZgEXyVQwmvzkYtzBvMwGDcgtvJMixTDk4mfRiKzHkjA6EXMXHRXTRMeQpZaNBiLysVExLqfrF",
  "key34": "5Wi6TRzgw1uVF5HzCGUxEP7JnfgyyNuHyThTHCASDZxc1P7jCdeTGp9HzKxrJvgLTzEdN8w7DMcD8q6paPqWetdA",
  "key35": "4y2ZrVRqL1a59xq6WYL8WjtLb5ncGvKfMqXnFkeW4oFb6cJekSgCtyUPjRJC94FAhanwRHH5KPxsmcwfC2nR1X2K",
  "key36": "2PhRoL1KkVQz3GiY7ooiosaXXXqyKGCLC8r3V8xrNM1BNJHL8hxQRtZqkeNGm5d7kzg1bsVsLvu8tcdBKFyS612o",
  "key37": "vSiUP3j2S8KkitaAza8wzXqqcFgR2K7NFkg5xqYmfwk4me1a5YKv9STdfZYTScDV5x4uednG1ckqdV3cr7fXYPD",
  "key38": "66BrBDu5xWEZcYzV2buLzQsFtd6ge51Q4hMRsvyw1qWNyEfBYV6WraGrgduQJhmM3gw18tkL4asPLc5ed98oEP9H",
  "key39": "yrBQE2jVCk7SDe56dRTMDTnDoMvwYx6437nN7qT5gRw9orh1vfPTFLLZA7XgaSweLiUjvcYB45Fj1xZBrhT3y45",
  "key40": "4bkgH49qiVAthun7FNz7g2HbcKKEwk6SYGff8QsQdWY2gjiTZeRtFgptoEcdJNN6GZUoCBfh2s2gvUugbSP51V7c",
  "key41": "2bxW6W1PCRWq11HiwXmENSvQJEQvSLTQZiskrqo6f82qU5nfLj3nSJiFfW4dmd5wduC9SBWv45goQbkxd3g8QyeN",
  "key42": "4yGff9vUpJsKGK31qcy9nUkkBorHzcPFspCTBoW4TSodJgKbazqP1SFZjZCtZKFFHiuiKfTZqhT2bvpx41S45ZtG",
  "key43": "2vVWiMq2y7FZcxKEoE9xbg6uDWkPHk52aW2h8yiA1vBUrPeLf7Sy3KpB9WWcqKkt2RC9gzim5A5uyhrHFTWUDH99",
  "key44": "dke3NwrNN7S5BTbzCwfcAm81rUmseZKbnMvVHBrFBEy2weegHmAJKrsPgaaVAB67ocRtukR7VdFLK25NqeWAtXy",
  "key45": "2aQotz9hp7GP7wfXtQkPE3J7rCEEHebtagjqBsX18yUSr6Y3BpmXJ1gaHn2JzkNKepSA9V121orepojz2SjnTJm5",
  "key46": "GQChK374BfRwS6BSbV7jsRC9usBBvqhvJECKA38p3tDYhdK3NGLCkHz7TxSbZPEaKtcgZFBCS4G6HCe8mxuKkL1",
  "key47": "vaRSZhXBJa285sKLp7kDxUnK6hXXMNkUL3rJdu6QVzzRuyg1cqcvhmYVgyYJA5GSXQrSdswb8MjSykNh7jeLpMM",
  "key48": "5rpLs9kCr1VJ17SiueY2E9zjsqLRE6RtvuCW4qruhhrPcrSufBh3yeZ2GWG9jdXm43cXWZ7o23rHY16FC7PQbevN"
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
