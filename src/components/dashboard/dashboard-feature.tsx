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
    "341j4BX5HmLXYy7R5AmT8ZKG8KipQqJKBKoXUA4kJBQvEeUo1ALGuZRUjhrjHuEt5JUHXZwE25ittbQRDviUYvok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SYLa2asswNyGhqueeuakUZyL1SoXM8MxEukFgjrkb4JosjNptrG8swx7NWFgTXdfPUaxeLGriWYFTRdBWzcMo4o",
  "key1": "m2u2gHMYJyipbiHdLyoVwPdvaGoBXMCXbTmnB2vgKQ8tq5bTQEmgVh6dDqrVKE4SFGupExSsXP8MCdh81QWo6n9",
  "key2": "3D6AKyx5EGTVJB8c5rfvLNgcWfSEhegcP8PwHoJ9P73YFWF8yxcaarHhqzhfAYaCAmdHWcphGKHFVjvZk4niw5Jo",
  "key3": "5otsahM4PpP8tqkFWbUVpBNmHUemhohiWAWno7Fs9Bo5Nd7MAsrbvw2dPokE8vLyUgE55mPoJ2RJYzuXbcjDaNvL",
  "key4": "TkxUSZp1Pi574TjoswZkeEX2YFY8VrqWbTxm82CySPneKiFWP5jy7djYFJQpZru1gMxqdRsY3proQM576xAeN7V",
  "key5": "B92m9oZt2Q2PXEnCjgFKwX1nDd1BSrnTERRJQmiShH7fCyzdKfBbWUFcewV3Ko2nKFng3uTWjdLQhnGCVN7UpqK",
  "key6": "2EqQMDeuVR3axvK3fEDBeJ6Eyw3axcThhMEou1E4nx3tbgnPYZ66Dy4vrxVgYupSyxJ4iwwaAcPqxs1xmeN6tbBp",
  "key7": "5bWRge9ahWiATMNrsywUV3DpGdksHr1KrmbSMyhQ8Zj7jEpEsYgqzF9teMnZKWR7YnMFRF9VyQJVUjJpV8x8BSbB",
  "key8": "5N4FxFCfJjUGApEJiZjkP8LQeGfhjWX6wdCK8JLKYi68dePCzCkZTwGFFHxxSzyTnz7HeufgZjc54Yjj7UEwbHyn",
  "key9": "3V4Lc1UXLFqfSRBBDhfVNnz14V4v2KgUYTgqKqdkD4bGgQTzeND4nR2u1nMVrRXdGQcZ16NReLdZjytiYP1RriAb",
  "key10": "r5H7c4gB2uPr9WpBc64uVzy4geHbHhsfEK3asbWfz8sZm4jL4RHi5niBeWtKZhE3zXn9rpkuv4Nas7DpxrUpqCu",
  "key11": "4Q7Wtco14vEeNMs6NeRJ3Tfm16zJJaPb5n2f7JfN9yB2cbYJfJU6rD9cDHvJyxe8bonRgrmN5P2yxwPiLEwTzNKR",
  "key12": "5F1B19GG7259BZKsFSZTea3LNLgDJF2qQBkEstxF1wpLTYYwLKaxz68uEEhjhZe1Zn2WJbMNi2AyujJujS27hZSR",
  "key13": "Ud1f2cjz7Qe98UaAZFnot9hotR9rjjfqTxPGmjiw25Yi7mhTdYT6XhZuDyWjcauHf8mf5mY5x4gD5gPUyy5Pxfk",
  "key14": "5hRE6M2jmS2JEaNaSbPok8bCxJSfAMwDaXe1nSsTSnX7DBSvwbEKbg1zexhwLWgXKsVSVxsLzxHLYWrrEPqDox7n",
  "key15": "2JbNT2Y7AKWhkbFe3ieUxB3C7U3LGaFQs3qLHWgRmvw3C2JUjXhPbNu3LnC6zteAbJ9vX66pxYbojJpPU1UDZcRX",
  "key16": "3NUzPn8FpDWgYNudjacvq2KGCBTnCbos1n2iLx5XFzr6mfqYCki63jGrX8Vo92mhSf8np5bNSZH1hmi6M7ec8ekq",
  "key17": "4HwREwv6s3ziYnJ2nrNMaCHn84WLtpavubeU68BqV4Ki5S9X4roRMP7BYNryaRuP6gPxgBw6RiRdRYxqf4fEprBe",
  "key18": "4ETqjR1hZzt42K1qFVXjqopNmf1jBGYtoi7hvKydb1J8X1stetz4QvN4q6ruMfEuPq3NY8hcMMPkWbWz9STWXqHw",
  "key19": "Cpujs9sKHRhJFZJWeTAM3HtwWtTKyTYcWs3pgsc41h9DvRnrNa3kvB5a5qYyVgbj9nNuup59C4EC3DjufEtPRP8",
  "key20": "4ZfQNgro6KUkJNHS8KThkt61bUkFQikABDfJGrBUYk8hqhpporiVkSRo6C2h95sWnMr22k1BVHeBm3RMqbvJUrvb",
  "key21": "513nRVyuEFiLnXDAvWULC3Z83DhihcX7smqh66oji3GqEy6MEa825rTiVSMACmbQYws3Mudv7BPJRpBqKjzdMgeR",
  "key22": "6eCovN87V5RjYq1mBaNxEzJUsXyXUAPP3KEP93qgbXQAzyTvh1WwxHdnkcqQFDhzVHfrDXFyYruSFzYEEZaxcTH",
  "key23": "47uR7V9mtqPfsLKPeePVonfFnzidR1GEYSL78LEsMRLwgvqh3kzJqwo85CseLPHfcYXdUHspcqHs5br2YjbmLTGN",
  "key24": "zYzczpQPgZva5U7A29JAhCPKssyVH2E15TX9buCaAManqg7XoKFNuHwYqLCYfLq6saCZQ67Er5Rq5EaJHxoLCND",
  "key25": "5KZruxZ8yvgWkkvjTWdgCBHCGgskbdtF9t89Tiyrmx5kvBoP7hsY2mYs7pSHWXzZd14w9fYk77CcLmMcL4isVEcB",
  "key26": "mRNUJ9rpbA3Yyi1iEQ5uVKKY7VvPzPQqkFt75WjRU3YLVgzcNf723Tbw1RvCWYqA8es3boXtUjTnYNSi8dst2Vg",
  "key27": "NbUkTeUfLvGSfrE8ZsQ4YF5PbdQ6Sq9NTa5oBBcPNkwUcpMcYDh3pnd2a3SShjRB5oSR3jLcWdhqEx5VpdAHg59",
  "key28": "2wCFiTD6N7177HtWqB9Akyhf3gBxWkhUjUR7mMLjUNFGdKm3uFuzKH8Y3wJgBj2e9bpe5qMN6au8qiHiPdyGnsJJ",
  "key29": "P4sWUygN7F7gT1DnBkZ1wzsCcyBjR3w2i5CAPFQkbxdSfvs6KAVNmjpNxDDXB9g1zsG98qYruP6DriEJaRVmWc8",
  "key30": "eEXoXGvcEUbPN3CjGg9RBeNCKAwHsuSGwYFHX11LqkQL1549a72zUppoxCPvWaUQhBsYgCAgR1ZeD4Y7phqxkDz",
  "key31": "35Nq5pGA6XxmDjWyZ9SpFaz2oZcSEBd1HcGtiZd9oexhBqDkd7pH5LcYWY5BBvSVxTaPJ23nTNR36VFHoCQKxy5H",
  "key32": "ubPekrcJmnQa7j4Tr21spc2pqkVyzJG3JdLPJefDmA1uAHtC3CWdD9FAhpaNFBSt1Ue6tEwrS2d9DqqddWxQmRd",
  "key33": "2WBT7Bd9BQDw2X79nJAgzy1SbtirwoUj1ETBFvAr6twTje8fqogczLtx6VXFuFmZTdQJ2PWhA3eDRqCUUXi1Pqq3",
  "key34": "2Ctst3SvXEEsWnmGw2GEtduBJzdH6kzUzDX5dFTTrSaxwz7PcJbesxrLQUCvpdrpYLHymJf5gQpaE8jHhAbLNYEb",
  "key35": "5wwVR1nJ27Wj7fuPPZnpLCPG46fyyqnAR5Cxzz68pr2XJL52f8kFcNyck1mWp8hFfQkRGD9DRqVHZKqdkYq4yW1G",
  "key36": "28SYfxeVDm5SrUmw7zWHn3rh7vHwd3B4pxyA8BHQGBjFpHx9aGZJ41yTEm543nGLugYzYWZH63koZZAwoZB55yHj",
  "key37": "2JLdi7R4zvzSr3bc7zcNxrgQT4D39HsgZ3XzQUWUJupLm7bgiKAad2WARiYJEhwv2V66AzbaFg2RzzZLJiPdLez6",
  "key38": "5Gyr2zFdWdS1jBmJp3VrkvFup7jFD2JfbeuuptGLw4faD7v8YCoUfRReJXpvSJgbgFzYgzUPewukGpso2ApUBxkh",
  "key39": "2cbMSTUKVpD2di9mFZCPDpoGaJYLvZN5xzJVShtDa1QW793Re9jAPjhZPSseh37bZQdeRDp8e2xiFXTCn1RSg5bj",
  "key40": "59Vz86kAjY3bEULqR1VZpzk1EHpRp1nxdL3kqTt8359tWhafC8mTD2eKjw4f4pAThEGxgy4WLDzBjtvbWsw1uDiE",
  "key41": "3Lkqf6ejVbjzme829QDbyLTek9xo1wBUfVdSUp3oyWoDkKwLzWwo2mfjeTj2PAzrJjkeD81BRBSLuN5sUs1ALn3m",
  "key42": "5ipKi2TEuybFbhKoaB8FUBW8pCfFhgErF1YvfDUYyCRNMmdHKr424ioNtFT4ZGfrDHjWtoJSGbePCtP1gy2Wrz5a",
  "key43": "3zdLDZfrstydoqU86wS8sgnwiT6FDYgkrNimXfH88EVHK5pCiWuJLAsgk1QzMEarT5bi6jtxF4kWu6WJN6zgtGz",
  "key44": "63goZn5htXiXBL2qSJNJmWeLpdRAysAzuRQMbvznVGhhzpW2gmP7f2ahbEVB8m786TKuMancBnvZxHghVRcvngPz",
  "key45": "2A876ZiJxNNvzjC2Qx6sjj6aqJN2Y4JNBLXZ4pcaTABtiVezLhL8pQpwoqaw9xbyucm3JjzEhVmiyXZR8BCENsp6"
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
