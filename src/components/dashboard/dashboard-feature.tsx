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
    "24uML2bXnmtSMN45TV97RDRFmZ8nrL88t46ezNLVYh9eqEbLVqcgSKnaep3WgvAmmPGE13cxaVM2NitCxEQTtzfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jncBfeq3EC6ZfAQDGua1wmo4P3CAoFZ5B64JkiL3ip923p4Lsy4WDGomwiJRdCv6A1kfDsE3zxZE5cW8fLCvQeC",
  "key1": "24aXvt3Y51kj8d1PM8qnRoz5JeB8atZdr5DyAZ3kF5UjRsSwY2QSamLcAxUrWUxAvPXEWUq2b7DNVpb3JexHUh1C",
  "key2": "4hcprpYrpDdMPQjvf7Hm4QXEcqTuoybUtUxJ29NcbR3pCGfY8RWKEY3MUXJyu4gdWHLJETz7q8yfv2JBBQ6EUZdR",
  "key3": "37oN81ZnNYihx3Gmgm6i151ZpnNuspYgvHtTxFqvsXtBdi2pv6W6iYfvU8SZyvUtpVtVe8zSG4RC2YjHXSrikZhT",
  "key4": "4vumeknKqkwLNJCg887R4VXatBvNhkstN3GtY9MAMpxHG4oTmwHm8Y5yQfPf1kiLEEDgkxG4cvz4bn2aUefWhLhp",
  "key5": "5qu7v7Hh5ZPXXQFjghX34YkNizP6LaViPtG9K4AffsZmQcBED4EFKLVww7prA9USJUFWeJLVdnceNRVzTRJukMKy",
  "key6": "3KukasxDdZSFFUrWL4dH3nMdJZqbVzcuGRSnbivQB6Gfw1VxNNeHAjVWtDQ5c2cDsyum7DgSXxsWufVPqBYAXXjY",
  "key7": "2cZ74xPhh93NcXNcyYSdFbsjLFVwotQUCy2jRqE9gtzKqqYSL6Ft1py9JRrVChQPus9r4WV2aos78fFyASie1ZKH",
  "key8": "3Uy7nqUmu5uD3bgY5H2xTkXZivXqGH4gn4PL5WePhTxrzCyyvxhEQRRUzgrWWwrmSHAome8hQJFBtSFcDAgaAd93",
  "key9": "64qekTUEZC3Y2JE3W3kDEpLzUfx1G8qmQZ257NyYES4rK4EeUhrfQNKgWTKT9SqHXzAc5Ljo3AkeabeHtbMRjjKS",
  "key10": "5wJp5Ch39RMjr2rw95eg9ELBNs7bDYXTFz2VN6CfEaceyqy292huGJTBcjLZKCoTvM3MsTQ7CKDn52aZ1EBs9LEd",
  "key11": "3g3QeSe9V4RaUpaTTDWxEnmnEB2FwuYZfBiwr5hjNvCstZqaM8e6Gc4bcnKAmgCkAcgtGqDsLxuSZWn18kkCuVvi",
  "key12": "5Zbt1wSHceEK15tur9BRKN7GXfAAF4S2iTs5JYyM7eYwxZnzotBiWToDyysNrdrFJkfghmwuzmRPXuetNMC8D95Y",
  "key13": "5jWBGYgt8MHzMKUaimGmzxQuHGzWqK2ntJWQJ9Q7RP1vA6knK4AZEN5D4fxSZG3z2cTyKym6azvFMiLpaD8W5htk",
  "key14": "4g8TrskiHvJ11dJah7TdQWXZgA4g4E8QQX6m9XxAqDvH3TudYAv9mgXBv9kTxJhBoTTTzFqSMcKaGi4DA9ztB4DZ",
  "key15": "sT442T6gSLmL9FLkC8Rnc99b4nPYDp7vR3QvviAFMERavcLU6vaXLGHskR4dj95iG3caj6cuQgGry7QVtM1iU2u",
  "key16": "2QyP8rsLZwZBvcDNMNsgn4rtkLzd8yEeoVavHiBVtKG4pob8FKFctTgZjR8nKAFr3tgu144qdvwfHWHZYNX79PWz",
  "key17": "2QDXXPMBHP5sJMMuhS4cQRTqSeW6c5XQYXoc3DAoa3VGqgsYtkGx2Lk5Bo1mCVyYqJqwDnkhuiYZV9Mo25MnauXd",
  "key18": "4eMbcGBKJV9PEzibzgUx5EouVfDmt2BLErNh8uNucCV9UmVq8TVuJ8Vn2RgvvtBzdhJoJELBPzPh3iwHA4NfwMhY",
  "key19": "2imUuaNdPjYRyPuGTPtXqhfQS1T5KHg37Zi31giCUjScA1sz7az7LC8UDALBfgDSqvLKkYddaBvqHYtVFT2wgzao",
  "key20": "5TRrK9vKWzv4AmFhRqKG59xNppHPt1p3rRhieEh3B4TmtXC93mmvcBX3UGqV2w2bQyjLbeeTTKCQuindytaFxTof",
  "key21": "PWDPcxw3gAa2PdmKdq5wCzgqtND3ejgzXmumnHphNsbJt5z4GjV31ByzCSaa7R3J7wbWnhwK2wb3VnQNdzQGw5G",
  "key22": "4Uza6B3MfX9GY25AryLCw5n51kuSXZKYn1om2tohJ8MrvXz6BpttSL91XDPq8vxzfWSUZKZD3yUp7oTkVrzqtjW8",
  "key23": "3RRr1Jhq8k5XjsY7LJ111nK5Tjh9zj5virS5edg7SR2rWLYkVCGetcnzz4Ev8qJXHp915uJSgfnBCXbXsaWapvjQ",
  "key24": "5Jt1dh4KtEBmCUMbNxG1MuPXR9D8J6kcTwmZBukFGPFpbSSavqwZbcsQDqrkyp2ax9xU8qSxG28YjRe6ntueh8UU",
  "key25": "23kvktFYEKsAj9i6gFP8UigjKESMejUoHSQNxsD53j2KBa9MN3fCXxCXYFRyKBHMeMN1z2FFd3ZgeTqFtQoSKbZ5",
  "key26": "3nkh7A1kAJwfa7vMAcg4YpVXCvgNE7Y43BSsP1FSoGaHh53Cxb99rvM3aCLjjpWiBKVjc6Rr8nSbjnN5SPzKr4Lh",
  "key27": "5gbHDJJDw2VZ875yvyJcHF5hdMV3du3fqn3PXozLdPzEUN91sZhcGj7aFxLtayWwhNWbSHuAcjjcz8wtDgEkr45B",
  "key28": "4h7EqnAgdCpUAvK35UMCWWA93uMmdVuGa5tEaEa6qq7uLpcvzCaT2e5LsoRqFt53toTbpGDeRwnViKeW48bAVaGo",
  "key29": "5Au1wEJ2V9fpagZDb39udtSQf5dBSW87fCeCJz28hUpRKoa66JFqiauUpCJJNGC7zEMGTCeZJojbYnpf7sWa5xcU",
  "key30": "2JW4kNdYJH7fshj5E6nriioK2Bcszvt1y6tpJn8sMvzVCxiTudWzTKaeH8mux7kAF8arY6MJGKakmrrfjwwPSwtb",
  "key31": "4tgaMGTm9x9vj9nZ5LVvW97MpcuK9xXxCuhhd9SsgPh8RKvnsvnqgmxBranypQJn1Lv8a8HDbvgKfR1CgnRJi48Y",
  "key32": "26cP6fn1BNRAEYWt1q3DySsfxJPYgRGvwh2cukrit4HNa7vz5aXaQTDgT9LLsuCTJfKnA92rw5pvK4KiBd7ok8Aj",
  "key33": "2fc4zwteajjxbuKZKu2yGZqj6UBgHskD9U7VAy2e3EP8GRScP1NJkrhxaF9XHzXRZRX4EDiFxrhGiRH8Hj3T82mr",
  "key34": "4BxemEz5tCtwmHMdG33BjuWsBd1dQHVXYB8bYQSF6GaqqpPBdDZdjBsVCfnrGWYibqwAiMyenZXpXmdKQkBVKz3S",
  "key35": "5iLqiqJKtmgxuNUB3rvGLE6BrDo3p5pW5XYdrU8RyJKMdwEQSzhYAiCDEbiXgojm22tTcPuxFqWQLFPxzyzo9RsR",
  "key36": "2mYPs35qByEHsZwtMV3tmVFRoxz2Z51AYWbMjoPG4ArJVSQqduVvP7Yxvx3wUTo2Lm6BijP3d944gWtgbUqR1DFH",
  "key37": "mVWVbh9HBdGWVxqgv1JHeMTDgMVp9Rq3G58PrnjashWbeTiSKFYSq6NA7cPbxkeE429iHHAgckL45wwVxKrbD4R",
  "key38": "28c82QPLktzYGacW8KZKkWXzFG8mouhdPp8HYx3RX9iw76wfQnFjcRJCwgP9XCvGD7jwwC15DHGnZHM613mg3NfE",
  "key39": "4rSMfMtqwvQuPDom4jMcZUSHsMRC74Kq6VQQ5swfnv6rtzUmxnsAYLYm8WCPshVno4eyiZNTKtAh5mC9pHeCBbgF",
  "key40": "EZhD9LDsf792EtDRVuEuJKWaa9YboVRRrptHHY5QRm7PLa6Q64NMrLLyGPzUT9FwNLYumHrdUKJVPaa9tVNRMC1",
  "key41": "Fe57AEtxp7KHB1g9CEna51mWVDr1U8SHdW7XRPeYijF3uLkBK2BowxAn8Z8jVpVEocArx845Gz7PiJbDT3rNGWq",
  "key42": "5J6apzxAtSuw1912eiRHx9TpRcZxCKLCJxX4pmdsR7sGhjv2Q8uw4cPD1QjJr6y9Pm6xx3aQo9mWaGM9h7gbSqhK",
  "key43": "5sdLUfjN55AV5krX5ATtR7jUD1rMGCVabNaMx2U3qsVMJnx5aRxAP8WnQeCTbFd8Nj42kBLqrxEr53eXZjmetgbC"
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
