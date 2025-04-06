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
    "3UMMeCvqwyVMNy4xsUHNvqmMqrXz228aBG1bcf4vyqYt4aVrjBdvYYCQvdXtx4DMsKo14SNz9UqPGRryZdYLCACc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1P79z6g5FgxqCwPbMv7CPUCpj1iyt2sp1XRmR8BMDHz4rfbyuRvR4T9AvqBiXf6yjbMzDcWBuzGoHrJF2LN12GV",
  "key1": "2DnJ61M7D1e4SzhQ7V6FGkp9C1HYxEXbz5j86eYvL2vQuZr5jDVLDc6vVseUxo7xnBfp9zkKfFyQafX4eeit7Wzw",
  "key2": "2hpwPqYnisZ5D5f19Lv2p68KwHVW5XLc14vrUSt1133Qs4oBU2VfMp33gepCRiZfR1f1WGjCE5oufhDN9joja1B",
  "key3": "5Gwsh6592zAyZqS4PWSDa57nkLQyop2rRgrJpexszMAoguHSRSvjwW1K7VPEctfUBTHZNiFdMGDjoXqEQMTWh4xm",
  "key4": "3cr8JFmBTiTZzNgfCJzTLZHPJbTxMVorULULChYaPDmYqaj4qeiGqP93R9TyiGo1aGXNopGvauNVamj1aJNfG36j",
  "key5": "3EyGHwL5116tyS3MxSnMSbWc1LaE2acKarmnUh4ugK7ymJ7cxCHDFUkmTBtU41dSrbZj6PhNRvdAcqEMkBe1Hoev",
  "key6": "pJWqjCbroEoAJ9eF5jXjrbfSkBjaGCoWrCYx5p7ppRQaNwtkx3LMNdf3JYtJHRLvgNe2Q8ncMbQEuXhumJnagkm",
  "key7": "5TxSCQidj5d3i2tydr7ivrKHCgJpCtMxyz3jUGGn6K47uB3YGARdphg8v7syyfwv3zwwQKcsUGPwBaSM7pxQadAS",
  "key8": "3H9ynfRh8uBYqRHBn3PKmYxUkU7NCiCAaMtFjw9vEfLcWAf6qYkq9ecVaGNegWe1UZ2dXJEwKjd3MrdAY9WsNMZg",
  "key9": "5YaysFawX8WMobm9wBCE9pco4QHiM9XyS7Q2i2NWdxZWLXVUKeSzJHV8Vti5UwkUgQtezf1HgYoDqEAWA1CxtzpL",
  "key10": "88j7JDdJJjuk4DdP2eJaZnj7jukNofeA8csaZFp5p6mPXHDk9istu4WerjyBK4m5fvTAdJBpJKMfzpbLj5t9Ksr",
  "key11": "4Jx9RegnssUPi2Qj5c1hxS2Cs5bpxqe6HMyCEzem4WQgMbt9wRHa7gSj93itUUcuiXfdTU16yiU43Hs8c1Co54Xf",
  "key12": "4iu6H2VSSthQ8WDmK93uYyczHnbNBHognkLafAGcx5rg9x6KmFsxNHAJiKuNE2wikcSvKCded1rnbkhAv74qHtmK",
  "key13": "2zdHvfvz7axM45js7rp44nVLaDrmXGLXr9zoD26iHii6r8MzDbY26FuX8WQ6BqK2BMdzdctLqYD7oyrZ8HaTWTBh",
  "key14": "5KpbVekACC7djT9b7eMA5rQ2Sb8d7WkSob2a52JKRF2xPpibw51fHx2sMwyHMpY6r6Bssb6x5rpBy2y4of9jmyrw",
  "key15": "4HiKLbzhCEPrYjyT3ruhN8xiLPE1xJcFsdB1mB3ykBA71AAunT4bACBxeucnydNtixKDw9XbJi1XxGrhVHByW3uu",
  "key16": "5mSDZ8aGBzNjd6BSmh8y9NzgqpNAFpcdMVjvFBRB4R4VGjbFTd58DdY8L2uraToSiuaiqE1iW5cm31rSWvoE3mgA",
  "key17": "4gyH3vg4reNipFFP7ZwrDS7tYiVNFmXbJAeix9wckbPmoPSjAq13qhZY75ukEyicapGKBZJ8uYteRDCm7hhmXBmT",
  "key18": "2rvoYy1YPsPDyQ2EQbESHZBYXmSt8ivKzGMvvqAjJveKfrdDTJiKpREy8mhQqTVHRruXpf87UQU5PDQPVHz7bmvZ",
  "key19": "4wZTGUig8w7e6rHUNXfQ8vsnPRWDuyKxHUNRepCuTzrxE94EeZciAqcjiiXSM8xPDc5rqb7HsvXdXacVyWPKvdpz",
  "key20": "5SXLSzSLcsXrRTq4N75zcFSaWTyUuib1SPyGGn7V6r1bEGZL2z9YCsqKnSHMYFREMUfTVngvyNLkCCFmMg6KNBR8",
  "key21": "2nAFMbJJePphuurhCVF8r6RY43NifpZUFTqNyzhJABCcCFXZpdneiYXynBzzTdUGzCv7q7pCv58jEUR1nUsW8DfW",
  "key22": "5V8XSq4BVddiuwt6JyEXN8FXf6X4FcMxnYQhzhGyB3ZFuxAPxrFjc7cyxBLPWDjfENjipcZM6VpgvM24doBKHawf",
  "key23": "3am5WiRG4AAAhohUGfgdQf9qBB8sr7cr6cqaJGkM5e5Wb9Kc8Jdvpq4Y6WD1RNDum65dafiv9FeqckJ6V72Qk9AY",
  "key24": "2rKPqbKKh186uL3NxLCYCrpnmbkoybtMqdYShY2SPAUdY1npG95Q744VSjW4MFU4ZYWx6Rz1yjyVYS1SiFQfL6Hu",
  "key25": "24oVPFhyTh265nGDU4QDkuzjUsddgCg1U7Px5PueE1k7KfP17Dn74r8WjjSYeDFgUR8c9Pk8ZRLBhnpk4N7inqc2",
  "key26": "3Fvfpy1hiTMLdwXoQsemZ1HFRovRuZUJHvGjCFbcXy1WBJBneuNrcFuZqptjsvqBack14sCSrDiX5XjDotcGNvgM",
  "key27": "47iQt3KgSjgAwVkkUBkiuaort6mqWoinwt8gx9eLXrr2ZKbvLC6iZtEcVcTkmpWbDNyA53j4uhfJ18wyttBL8vdv",
  "key28": "2wgNTr52R6sFWkV3W8MtZjqnoNzanUYiJFQTyBL7gmk4xVjgFajLgVvzZcQ6orSUREkFDJTvBK4Vq1NpVM99iDHE",
  "key29": "X6HXHSk75hskGWGadQ7Gf4iyfzqfattd5W6jKjezcrgBMyyL6Y8cJWdbuSUjH6bsdEEAFDaB3YLQJxdQPNt1Vbo",
  "key30": "2CqHnEqNzdezZXH9iRZadGFGFeBidfyg81a9ZKnZKvCow1dfk1N81bfFduHXFoucWVzjcCwvYDabwbPaDhmrHS7y",
  "key31": "5jGVS4FY5YvHw4y4EwBGZKh9gvxuAPvADqVz2g6rMXrbB1wx5ENPaDRWCbdwf6QkR3aPzt9fhtqoLSQ9ojLrPmob",
  "key32": "2STxkMyoJV74ieSx1YozuNemJzThr3jVtPGyGTdUPbEeEufD1kuNZodEH1mv52vXV7NFwffR7TLfsXwix7wbxsgJ",
  "key33": "3aQCG7rgQtmK9iwj95BhyHsiRSQVgcftY3VMNZUMHebcjRot39zVsa8XrjMJApva5DMhUzFoMwrTMSVkvLJAP7J3",
  "key34": "21wVMHQzvtP7tMnKSAJNEf8fasYNgJsDHrZGEJdFeR6HSH9DihKfyavZdsPMrSHY4HCdGnr45NjkenCAGPDRRypN",
  "key35": "Zy1iYCQdLU2ZusGYBv8bsBZmLzfpMe15daSy61uJqXVu69CLWZUjGFZwKsF5AqbQMb3F9edTMTMqcbUHmQgGxwF",
  "key36": "NJRG4q99H59sWqhzd3Gq8hbKgjNo6S34e9YyPUwsNsK9hxdY8LRfrauu79WHAUVWnjHR2kPveLD1adTfKWZq7EL",
  "key37": "JzXH14DaxmB1adNMfB4rPV2X8LeTV5YdN8AwseHF2dFcEsmQpT83PVMoU2T5rdRUZg2WMuzgE44GtvMr1SotSSP",
  "key38": "QYq8wW6JM4efJcLsea98CcSz67RWMWgxhKVnmpsQu9xmrUJRGkvw8e6YqeQwrBFTBuenZmMPjHLRbQ3T6xAMaGV",
  "key39": "2bQwTE4W4PSVofEcyoRLfJ61iRYx4ex5nr3iHzXR8iznv9DzfocvuZvLKnE8HLXDTGmjCuPGdtfxpwodHVyhVXyH",
  "key40": "VXJCpXaRxgAwyrKiDiPLbcEABKncrmW3Uv8JJ7c1patdquBth7GziT5G24Tb4FNZjRdgmvMbyHqeoqGZn2Ykb8w",
  "key41": "4ZjTBTp8bPq9AveXPytpSh19QCbwe6HpRB3cKndz7rZsiH9D7cnEkGo2ZYSTBYZHghmamAbUYG7ysADy15bX5JTE",
  "key42": "5L7EvCyfebvQs96mtPhSKH4LJzz8Ybt3vekme1Jr79pLuduBKxSxbpKDKpBfasKjsm6A3r2KetbZGNU6KK3Naqmw",
  "key43": "22fc55LXhkJmwEperz9mnJnNjJkq3xyJTndkwUY9kZH2EJXeTwcM71of1LS7dyhS9rSiuZ8U696nvMp3FgZT75Ja",
  "key44": "2hx6peAN8iqFSzWjwK11WNXVbMEquz1X2MdxKEeuZVnATs1NXtvAfpSRqRCGzW5g5H1RYjnU8yMq3KecTFtBtGty"
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
