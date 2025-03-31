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
    "3UGNPmgD4UuZWS4DN51oD2Ju2pkH8B76fxH9BrVmfcqnRTcVNPhCDPbXUZH77JQBXagiaTaMnHCPtobAe5fmXcqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dLrieKJf61oLW7A98giPVAYSi2fSshTCAKdg5hbM7XGviXbDNuPvTcCjMY5AHno8zPDiPUwZKg67mA7f2XWyR2q",
  "key1": "3vxWo9aK88yJYx1fs8GLVL4JaG1DC8JqXHogJVuyQi4D2nCxk7FXyq319dFrmup17RFvg3PzhC5fwpvSXdijfaNg",
  "key2": "5a9Ehnw5dRwRPvjHGd64suiyq1p6m6BFVdacRVyiPPGZLJuQnEXcRtQYhubvZixQtMRAGLrjqpa6DDHpBVWTJwt4",
  "key3": "5oH2PiDj7esRgs7AQgjyBN6YNDPzWdkH6chPkpZv3iQJEi71RY85ygc437t7q4Khrgoj2daXHXN9AYZwArrq7Jn7",
  "key4": "2uQheNQ8trfUepJ9XadiGpFrr6RQpfmJUvtNoHbENuByUBh8YsB8moNDyBX2CSHK97deeLffo396hPP9j9c7fb2",
  "key5": "4TshNjZAQMugkFbb7RA2KLSz6qrc6T9cwg2jrLUAC3rkiBU4cg8FCbYT6FfjMfaWjGZuAq68pcMQeB4Pn3XZbxAg",
  "key6": "5E9WNo5RD3B7Dmn9SpNuRhkChTWMEpRZquwaFSW56JkHuiYxo3FM36Zsbj7Nf5ACBvdsQBdwgggZxktsGAM8TsSo",
  "key7": "55qgzKmni9T635NotoMgamjqVW4qLa8HB2ybXgrXMCkd2oc3fvQqafavtigZvaYxMfoBxk1HP3WjsFpRaHAz7yGm",
  "key8": "2urgbAQVpmuNc6Z3i2PUHZJUMK85HTvyS523gfq1AGetW7FYHmrSgNSruNLaH8GvsJTincDVSTF8JxjZ66afXQyc",
  "key9": "4oA3Qdn3NaCpWFzP66hLzM7GKsaoHVLDzDtJfGcng7M8DLJgkS56nmsqVCj8Z1PVmkYdL2eunnp9iuPpEwoQj1V",
  "key10": "34Xear113Qej8ownjKrqqiGKvEr9Jxb6ow9qKCQkvJ5aUppNDhuCeoHFSTeJsiuhczagWbcURtyqiyZmJTZpxVKa",
  "key11": "4nUVGJoGgA6ZeU63aGSY6ecAcFbUsNLuLnLhBc5Tt3ttaN1TeeBvQvJsnQjLGcCWaTGHsEV8De66nWnxjqT79ouP",
  "key12": "spk1vMkArt7EZz2qsg1exJ7KHkHSs5P15D9rzdMGWVTccittGsDnTNs89Vu8eCS85wVDeAcWJoT4JDSoqbeUFfq",
  "key13": "Qrn1UkwuKV4QxALHEnMbi83UsAicFA742kvJAV9jNtYYcuruzLASGWjUHU4RFUijUiptufGWYd9MqmwS4QedNfi",
  "key14": "4chNUwTi3jxFo725KLe2PDtxmuWYydJZHzP2umE7rbLUW4ogj3hVqGKMVQJdq1pLnwybxPz3ExB4juoHSuZQH54Z",
  "key15": "5hAPWFk3HRqsRPWJvi4KqMC1LsuFTed3JfJf6m5FvnVeXSoVFB84e8ghqvsS8rW3Cj7o4NA2CJqc3EBAscYjRDZk",
  "key16": "3pD9JSuw1pVDTmi9Qeo8qQYt8aDLGk3o98aS6JZnM8fdcozkqKQ54vmhfrD8f7mEHpzJsYuyCYc23bKshz5X6tFo",
  "key17": "2ZU6Gw3ydY5427F6cwpZM6oQiNQkzHpUMXscwo9KW9fVXLehQsVPPTpYNHgijr5qN1VrWWTzkv7pLFMPcb6hb1DS",
  "key18": "6348Za8Frwsbuw14RbS5z4pu119KLcAKuirQphMjUqgxTJXBMgcMzcu94RsrNdriGzdQy7gM9P9L2ZvmVJWhYBPm",
  "key19": "bqQJZMrDyRZa5Gq7W279oyeAzWJREs8BvD6azRsvk9X8bQysTnPLVDkthYxeWvuZNCz4kaL9NPXj1YVskZkER8w",
  "key20": "4JHq2JahsgJtruMnJurSFEgZFGN5ujbeo46F7FwG4gWCoeUem29RiZYhrB6J9sv7DP971KR5xBEMQGjRgVpnesRz",
  "key21": "59MpZLYPePBsQf7aGbBxrSdivzG97DQSNb8EL8WMQLz8Kdr5NS9Wfc1xaDWhnWsFPTEB1uVfotogN9NgJ61wkYKR",
  "key22": "gdPibdwQc2fKfjtnAEiig3Tmrsu1Q3jAfNhJ6TY7E1vg5BV4CCcGS9ffd2tAMj9kWtgAjXsyaZAkD9VP4JeEr3m",
  "key23": "W8aejbqV7UdMkRRCc9SEeMhXcqmPmB7imLVEjGTDHr8T9bXGX6JrYcMANidSM1w41VmFBpiTq7QX4kJ2nUUuPcp",
  "key24": "HXqovn9e4bgsLxfPdKxYYM5ErmixYJDSeXdED2ajqcKJNhfRFkTdVm1DuDiAPM3Dra8Q53pggBWnWmcUawBbNh7",
  "key25": "5mLqaPcSYzVpPxVp2y6zfUZJyjxw2kPVUug8qv1MMGppoJNhSxpjwR7cjECEC5Ht5RpU1A9bc3FZnbbpSQSgZmYQ",
  "key26": "2kjawcwVpWDe1mVFniukhzVuMg1UT2LYmHMpeKMvXgB6YkDwn7gFspDLjHZDvn6wjbZnrZdkq4RBFdZis1nsjqhU",
  "key27": "4DMRbvWhEpNMShXWQ6BU2XBqma1vJWdMuWTMA5NtmtTKHHmdWz5EiN6nW87pCHiMRDeyZzFJfqRmNuiadSetG5pL",
  "key28": "2uZPuhqVifEsuhnqsLwoW16yGF3BBvwiPwc1u6m1kTUMmi3BRXv4kRzMDMjqM5n6uDKmGY99znJ8YhCtR1yLAEUc",
  "key29": "2eWmK8gyRztMQ6fMjjiFmTre9X3qhQ4vYJL3Q2MuML79hLCTsVFWvFCM3KMUeU4HzzYgRgKDDLBwqNJnqfpHAFRw",
  "key30": "2wJTPxc5ThZsaGGrYgDw7qwB16sj7Gx7yRouHuKwnxAjjmeFeXjAGxWdvpubSf5PhE8HtKYBfSPEWk6iSVkgeHUy",
  "key31": "4QjYYEdhCfids5swrkcWm7ZtdkN3H2Z3bYS7dsLTM6Nb1QKkR7YcBf4oNUodqZkiRfmMR1JePug2NugPYXth44ed",
  "key32": "gdxkoU6EUmK1Bs3Zf8McBsyCS3R2RPRyYCoT7Dm6BvMNGC1oBhm1yJTUqtLxvrxk4iGHiVzJL4tZHdXQ4p3hr5K",
  "key33": "52HcNWbr4BHp5yargAnFkSsuEGX1Km7jLQGWQjpDzcm79ZQkj2qBUK6S4hF7VjJb55FN3F54j9b11hds4uzX8Usf",
  "key34": "3hrEBdiS32sAUAV1D6Eo9cPSesS9QhzYEzEXr4bMbNvTzJsvvNfPeamNh7MyGMb174tVw2p77q7Wa7L4rHUacw8h",
  "key35": "2JiqRJ2DCdgX38NTs9X4JKvFUJ2ukFcfMfp7MXAdX5p7Rn5svVirREeZ88ze6oJexiUqLtCmLL1tr5QEpaaiewfT",
  "key36": "tDQxfnnM4a9Jp8BZE22WRPRh8AyesBq1Qw7iBMrJ6fHQ4F57A5rmZSikwEbAahtXRq1cZNXe8UMPUfFo3tDN9qv",
  "key37": "GZNWzkKYdM2mFQHfUqs7ha1EUmvNmUqgpw3bCUS84kqzdN58bpWfgBspHf98pUHMYvuo5Sgmfz2RXkqFTYzcbhX",
  "key38": "b1vtJFqQa2atPcTGRQ3sae1wEBLVEgQs75Ci6H5ymRbCL1PwQBt5iFLRrnncJ7CigRAQ1oSphq581mSSePt9BbX",
  "key39": "65CQDBHeyakZs2Rph6RqkVxqqyY4tY9wAYNeNNWpJ3TEtMbiMuAybNo7yCcAwGDT2sYHq2XVa3hwyZ6y51FYvTp7",
  "key40": "3s8ig9A21t9rZdMn3RnSN83nMnyEyzZKbDCJV6W1unbppVbxMP6zr7EAfiehrub1SPJb8DR2e8gK5cKCYiC1rNhg"
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
