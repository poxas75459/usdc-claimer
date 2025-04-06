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
    "5aEE7CRcp7rMVcMrjB7kp3XRgpzZrSiv3vH4XGPhJboNqgdW31wiU6mZ2CbE5nAy1PKWqeUtaWBfRRESEtj7y3w3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33GchA8yanwFRTag5deUiWjrkcFhVFeh6t8oNTsbvHDU9dbLKp6ggasGB4BNnywJ5gwYfdcPWiDukLhtQPLvkX6d",
  "key1": "4bcekLxTWEDerAGBbnTWMdtyYaF5o25tYha155suzjPYD6wxsTBxYq173aogRh4XHQyEWou5xCso3HRN48vNBaYX",
  "key2": "3Cpd5ywdZB1eG2Fh8UeC95qkv1SBTBB4B5afjXJR6s1C42pcZzKF3SpMR6ThBE5NRM7Ujf6RZ1GV1oMezahGRsbN",
  "key3": "2BtPsD73E5hfZWpgdJZJN8sGzxgzCJGkk21cTSKWCJznPVu97tAAVUvvrNguamyBtsf8sgDn7pLtRfXS2MNNoCBE",
  "key4": "VPztwCcipDDc6XzqpJwGBdpQWRq5dDeMnfn12fnifKiRHHAARQmZsffqbJww29NDnGQFMiGaga1chQbKfeBqZX5",
  "key5": "HCSLrNTmadjzBjKs3AXDt6tJtEhyCpQKzgVBzFUyFkjcmZor6q5XVVcbz7vDG2LG71gAgLkmoe67Jmt4dmVtxQb",
  "key6": "EyVUhvV7bpZybxs37rW8m4aUr5iAyzjKzJ3cWuGYNuVxHvSn3uy7FPkEPMhmm2EttpvY314P9vcdNMHqKPqyGgV",
  "key7": "5nB9gV9xjKD8LNebNSUZfscacbgGmoiarX6coZkgGiHGiQBDt928Z1t3ZmzsSWWbXtmGJGkAwjg3YW4qVkpPvFB2",
  "key8": "3uwyX4iRL2hBNxwNCr3YFdSXTKZjegE2NVytMCv7TkH2LdCMQxm9Nva3G1RCStoFFbcg9jTByQ2ogFkFtYFDpVcA",
  "key9": "5pxW8ym3gXGnKyVb4Aeg8LfUbRPgG88m1qofEbT4TWp47wVGize2vYMnZoFDECUBL9fXsUJe6fB5Y7owFYeBFNL1",
  "key10": "4Sfi8rEcV2JVGAEWqYbWc7yntbEaq6d1pAC3dc5hXtb9xA4aRE9Roo2Aij84Qu2Sgm11T3Y8W7DAUYNJEVBcnrUd",
  "key11": "2bSFPNYviEVCszrojenwpFAipB54RLR4Bn6LcceS6sBi3AGtmD6Z9ciR5XGyqvSG7p7u8jVKL1vEUtv2cP4AQf3S",
  "key12": "4fnqeNizYmtGCxhjuZP1UgZQutnkveHUEzpasFMX3REy6djnX4x3zvdQLbYU9H7C6Tq1uEuyW4vkBZcQ5UGma8Y6",
  "key13": "3oc1xjSc2swDX7digaA63CmgRq1zwxB4rR5AdCuE9YcLLmawBQHTiPfXCooME4C1mf27DFzQBQWvF7tZLCry1AJA",
  "key14": "4Su3MpSuyvnCe7Qfk3C4Avo7q4hApdhVFJbT5f8toi5tuCgXbZYu2KKXFvkDtUHT5XL6cZMY4i5HNtj985j1mc63",
  "key15": "3WNcRVuyAfax9HxhNS5pcjjK2B3aVzkgFckcMtZCS3PZFUU6pvrGYcb7e1q3cfrSBExyu8uhvkdAoFdH5K1kEpcU",
  "key16": "5DxNECbCvEMffd4WVVxxctgqaefVCpFsorjqw1Cgan5tathvqnMhV4dfJYsgpKDDvGzWoMnrpECLyZznJdnuEM1m",
  "key17": "5mNwLnP2EJG5qvdU8rPXqLu1vhJquzfaJWLYk48BdUzMnauJdSypvjAKmkKSZ1mL55RaJneGuvRYpvsAoPt91P8i",
  "key18": "Bt3cLD3SXy9kWh4FkNZmWVSKvMyavHDBZzE7aBeAGqT7UevoW3qQG4Vqaf7riUakkt8jaiuaponaArEzpV38zCw",
  "key19": "2uV4nExHpqkGzWum1HpErcicWGEiAfxhi88PZqMZQXYRVXCP27uErXx2LFok4ranvHF9BuuMBPedVzEwqVhWUvfo",
  "key20": "64JguczFBg77HFR8BjC5bYNB6rZPVeu6rSUbs2WigTzYLt47gsGkVvkLn4jfKYZq1GoYQ3ha35sKZyt2ZoR5Jv1U",
  "key21": "4bP7KQKKdnxsTDp7kq9nznDhbxtWTWAgmz12Qe8dUyWmuXBS6EobsjaTfGDajkVDibqGEcyumWFuL5SrQ2EojWY",
  "key22": "3VUznV3VRTomUTajip7ujJuNgsctz413hj5LwaN89Fvi99JTJhJAbXfZbh7rMP5ryi4azrLvfRYJxJyz1jHyfqzF",
  "key23": "41TiU55VM7V3BX2vDdVgQU7NhkYYxyDfC3QdMYAXQAAgaHwRgp6hdPiqjUBq7K6qM5AU8a8TkJRnJ8E4XF9GzbTJ",
  "key24": "8w1rbVmwzhq4N4RD3EkYWZrYBjCUCMdtkmryzKGbFWRSCQxnHDLET2QSwMH3N5ZgvfLfeENyJX7rRL3arMXpFfR",
  "key25": "2uJNEtJn1irEF9dXxGJkq4U2S35M9tkkNfxMNAZ5iYNXxsEhv9HJmhktqByVCGqPM8fS51nLcFd6zHQJAPvefUgh",
  "key26": "4LgJzitam1AQxpJToNiCaiU9XgkjgmUY84N2USgpPpnrwfzWVDQPjX5zjn23hHQpKbdqtHtPGrYzuZcacCP3BoRb",
  "key27": "28ydYDr7PqtgMcjjo6nn9XQmShUJ7v2M1tfaiKYpapytGQNnJpBaqUK5AqFBZ5qJ94qHxYgyAXCSFTRrWX6AinaV",
  "key28": "2voWkTM2AmZDD9DqWBMBMJD8Ff6Ued9FSNaoV9ZgL9UfhAmwoHqezdugsUtYPCsyAF4aZAaccoKFF8qfBy7mrGDq",
  "key29": "sgtBmppn4RKQaFKrgooTfv3Wcc5ce1pEXumqsmekzCVBe2chnSbAq6iTHVWgZyRX6JtfFoyGvzMGBcAqzwian2M",
  "key30": "4Xbt5Jt9MLQkWwueGtfbCgRRfu4ddfYhdy3UBHw3VoAJSpAVnsHH6NqoZJoxGiKwVMN2wuDje7me6ckU4DMne1vE",
  "key31": "4HUEaCVQRG7DXmsezZQ4SavdA3VGeN3QPAh2htdzFWwreQ6C9KJYXakpGwdxgJBPw1JKruFQFSf2Rss9ibGp7dWc",
  "key32": "4fiq1eVVRQjQ3Zd75QmFRv7Sdxz16qwqp7gA69pny2LXYN4k53YGiPeXwcCRgiTtRzd3rmpveodQeCG8AdfPdqNL",
  "key33": "4Vnt3FdsW7pQymYRmycCsGzYmwcPmii7CZfeqCzvLV4BhBHbwPiRJHQAZGwjHe8J4xRBi5FsLUTHBjaeQdABc6h2",
  "key34": "VS5LsmJy1axesccxdkLa9TPKHr4V8WoU5t3qp3dm6PiBkLzxsg2Mf6AKtxCTLQ7uKobkaMx4G6zQPHaf3kbfC5d",
  "key35": "ReGL7PJ5eFCJp9guvViNiqWzhtnQHBCJPGxbX8HnSQTF1vFbgYH8h88Nss7QceqKnLH4WuZTZMaFSD44qyquQ27",
  "key36": "5qBN45GrtZ3b4FAdcd4gtPdqZMPZRbjxL5bVJEfN6GxHWcDMMUR1EvD7xRCGUBXwaaZU9L6NjqMoXjZz1mKvYrWc",
  "key37": "56in5MARvnZv4zZXa4VGUS7rLB7y7uNgwNXtZKSxLjM5pNH5AhLzezoxbgDB8rfkQsYAPExL56rZ3Xcu357Gt11Q",
  "key38": "qWndrVjHpX6972ZMWzxKeY7NNh2QpHbfhtVnm4aDCFGjmGbnkZNFMNmh7H5WDrYEdc3wCV2Pav5N8trYnnUqh4E",
  "key39": "3ojEeGCm7yfsonksoyHRRpjjSbKf3KeD65pAGicWFZdyDKetGe6MoKUk4o9GtQ5JAeHPyfc1b6HD5XQQGnxiGq82",
  "key40": "4qzdSzHzt2N8G21CqThTR9xU4Sug8ApfyEjEXhv8WDUJumD2pf5AuqyDWxitfXgjpjEAc6F4ToWdpjiGwQtHGXk4",
  "key41": "4EUrutpoMh2sAL7pnJvv65K1GcXgP5kJsb9fnYH9QDq7vNCAuD154M9iPPH5ehMooyApAnbL55vesRCbKUbWph5t",
  "key42": "3JHwvULK28cb1G6Tz49Gs1WM1vs81wGrnHkNM3D9LTPCnmiNLmhA1Zu9ZUwFexdhaxqmS4e7YUA9d2EoChz8Ptyf",
  "key43": "CsoGDTuAdZCRXABuWJdijAyJbfwi8iS9CC8RRH5rbVSqZLw5fEshhXzynEFfd1ZALBTQHkmmi2FbdtG5YyXRyZ8",
  "key44": "f8dAQNxDeLbVn3C1bfYnw83uhkC7pgfBwNRigZJMz1mzP6HqLXCGjLJhvN97yADr65BzucPZQFUD9t2qYQVEfHc"
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
