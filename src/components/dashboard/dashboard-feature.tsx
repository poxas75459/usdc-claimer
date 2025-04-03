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
    "4D3Y83cKygYQBzigUKyoQoda7Mo1dPiVRyd85oJLmM3xizmYdXs9qbTPKJXCNMBigxmqTY68RUj9bmWK1818Hk4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BM84bavABwah3YhrRJ6qc1ZEMABbQRwjPMNctyqrDdvqAJMFvuTNWHd3ELhZFHJwBv6EixrWHLS9pCyKmpggi5V",
  "key1": "3zqs58aGzBLx4p5Cbf2xCqzdSSATzPBSn1UGPbSmvBgPwSS9tEEU7xs83ugdgWG913kCK2NSGwQVgr9do53aUDzR",
  "key2": "3fqMMVQVkgagehQMdM9BappgqcHawzZGNAq1E49C1hMCezbt7F4yLygkk1wuaDWMmKZK2yTSd6JuATSEtkYr4LY5",
  "key3": "2eQiFfKeZhHWVxMt8CKAvMWFg7B7BAeV5BFEyryqKnFFMkUM855KzyD6JCNQthDg6zLJ4e3u1sRNMVxJeEgjhBuD",
  "key4": "4cM24sEpusUZacez5DV5a7H4KtE5U2tuxbGMnDonskhviMnMs9hBd5koXxoENoAUvgyEnmrCqaz4AoSGbsmCHQj7",
  "key5": "3X8a3PaM82TLWWMTR4qNt5At7o7MjdxTbpVMjGZsEqFuHvYZQin1xUpKA71TMJPnZr9WhGLrqEuspP69GM4Y99E5",
  "key6": "5mfiq3iejV6zkRYSLS33s4Wpqc4zrNW15oc7kxkvJpZ7HJQKpXsDUKB5DPWYpobrJYPawbBuAf15HX2Tft19c1CR",
  "key7": "5CnzMdbmCnyrWcMqSy8f6jFcabroRDrNwi1tNQPpzjiiMzjLRkdWnTH2pNT3SroNiT2NBwTnudtzvooFW8uMALi7",
  "key8": "2QZPm7GKiecvJ6bMp56Mtn7uK8E5URDstSybKes9CUTbCmRYsyedqDxcrJ2ju81NYLT1G7L2oBXkXZetTHi4LUQj",
  "key9": "3ZwPjKuyk5uD5duwGBaoh1bjXtdWTwbvctP2xK7nF2km9FUNbFnJSUVsXH4UfQ4xtGcU6zG8iAvBEDz2wguHVrZF",
  "key10": "5nKpfoj4xgTwz56oSo7RL1tQDD1kFMVtUEU2MXUjqUEqVjN1exXMkNotn5BdkmU6Vj3Eaa534KNsudmFvzaKuKGY",
  "key11": "3VpMHiwptVV9FxAskBGeydNdndPvA4ZDQuCH7pKqaZzUUdwVnzSYBnD4EkfBjqo6TzDM9g6g1tFJwD4aJe3gemSY",
  "key12": "1w2hwtGw9x4jsLUfnoMR3FMPAakLiafgkfL7yJzdDiWt2KHCKPbC6T5edyP2QQTzFsutboHimVqR1QidJQC5yiQ",
  "key13": "4ZWAEXTEAPhkCAAYgkKrcc1gpB5jF3oGCmE7wbmDPq5ggzujVVTBEKpcibL9ms3Rtj2tYpEzBaT2jesVrbkDgkpb",
  "key14": "3yXY2RaDFyPZDuxiaNoxhDNmqpwcZrseDeYAzADQ9eENYT2w36pGPU972QYmhzTV9kVgZntANzC6bPqiXQZQKyze",
  "key15": "2PNfVEAC6AhU2T3tfDjonrcYV6neQZWpQrgsEs9fYtFcRr9sWFKV54b6A5RSC1QUevdYMFvK5sgYUzZzK1BiZovt",
  "key16": "4URc5JHJLmFBG8F5Vw9eRvC4y762f3HAC4mNoCR9BMAL4mmzv4iChiDp1mVNaFUQefSfpP7s4tGXsbGjyEm5vkZM",
  "key17": "4XhfUMvc3Vy64apzGUy68ScQ32NJo4JbnhHx3CgBeB1QYbYikxZi2rX5PSPAwQMBbJpsUYntzRhzQVs3gkwCq5tF",
  "key18": "2fnMzGomDBpj7zoP95M2ub4gZYV37w3YU3Lwj4vbtuGboFLjDh3hGw9JWAQbmTPL7PpBLTz1RjTuGvxMiRwRZAuN",
  "key19": "3JHoQyZGbd1S3vMUGf9wqEVrtetuyWetb37g9SFH6cTudrgNZpVLLTg8LP4twaj6zHkR43vJBaRDo2tDz1GJuiaH",
  "key20": "44eM9zsWDAVKXGJraMod14vVqR5UXMJbFXpSxhMew1oWnZNiBu4EUfCMnK84wDaCChYeH1AeC7ugXFrKvedFd89e",
  "key21": "3PSiPekYgzMJbPwf88yGPMn8KfYEomzaS92qKgq5fd9y682aGusx3Yneev2MhznqgYR1Y3AkxHz7phqJrLsZ3hm6",
  "key22": "5zfLU2b44tJRibmgZ67y1fwo5h1phQ99DeHu1WqaxPqdjzdkUqYU2sKK6dyg4dSzPZC4pUbEqZ94KtrdjyscAwjr",
  "key23": "5KrCftozwEiN16rsz1jwq2Fpwq7hvEWAwMpX8dzSHuBeoNPJ4sq6Q9fCHLwrg5CVP4cM79kMGw2c2Rphy9hKHyax",
  "key24": "5s7AfpKsW8GhgppisXHuDxRhv6NEDAzSMFg8uqdDLBWCZaiWjVN4Ptgg68gyFforQQ1Eww2iAU7FLa1XNYkcj2ga",
  "key25": "3qp9JnSzSQSZ1QxXazC4fyL9C5ao3oXZbkYWvyvGdb7Mk1pwzj1Mw5yQ2YK2Wc9LS5w5Pc8wZSPKhWhkzpgyFg6s",
  "key26": "3nJDsbaxys2hDZRa2DLqoKqvvUSRkgzpmYZ7BswAGcJ8ikPW3eTeovpMZaDZmsdFj4U54Jd6vAr86c2jATCwUB8c",
  "key27": "6B4iunJ6TkPGi1NPBagjba5h4QQnc3SbhhLotf868GszetemnJLFD2c1BbNfaAyFreVJPH31oZGvjhc6QdG5ixo",
  "key28": "2yEicsXNhroq1HVip5G5aYwMFtuDbi4ffh1UC4FXk1rGDQAwfsJPo2z5ohjvjGsKw7wX8BrK1c1zeTWovs6rTfWA",
  "key29": "VdSCJiuWrU4JMEy8az5wWkZ59WtrQMAdQntcJuDEuhbpDjEwsCMbY5H5DuK9XQvwcLK55hTNv7PctGbjE6SBgVA",
  "key30": "52YSpf1J68E7KhyKFtoEhofKmH3SZHY5GsDE2SMxksdApo6tvHCwsv5oMYFzNr52XEXVfsNmsE3EGP4tkvBDDdUR",
  "key31": "M7FH6NF7KucBgMH63gdVwLAw9gfAF99TC4SSB94d5YFsubZcbbfLkPX87DmddYd5zoZLdN9fygTnBqVzpa5byNM",
  "key32": "2pZgF2rp6fmZuravtFgvEkcJxLYZsp4q5e9tXaNr55VrhFo79HFhPfMef5wYjoaLBTdFz14Fe5ytRi7dU9CH1rZJ",
  "key33": "5SDdayHFhfXQ4DyLvrRWNkZ17KpPZFDJV7Dxnh5E1UTyoCzbi5eWymgxYS7UZDwrw9FQuWM2w5aiyJqzZVqYXoYV",
  "key34": "3JKnkZQ8XueNomT3LKd5JuK2UQafhoUgyukWdTWBHMEcyUM6NViMsGLd45cRXf96cVra8fRWPmicRcDHU8TeYwWh",
  "key35": "3yvvxensg1tCjABiRzoudxjUhWwaxnJA4jPXnpp726wUdzLF2e2o6KZEsVvxy5je8oYDiLWCyBHzvXz8cT8qBVaU"
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
