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
    "u8VZN9yx31oP1nPoGAqch5xXLPjVrPnW74jVCVWARAKBSg5Knu3qS23pbLYWcMTY2auMwhcusqovTTYNnXvmX8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FsUGpeziCRPv6VfRTGc6ueAosFQJNvDW5KsxjSksUecPAoVbdW3r1MbtE4Q32GdywP91GhTfSBY4cFLJfFhs3F7",
  "key1": "2vtFTE3PqaLKPZ5zo3GzgrkN3E58jMoELiQQyrQmev2yTHqY1n5AuSp3qKwF1NBykmBnnXFqiRbsiQbiuxa3wMma",
  "key2": "5jmG6TLBoSq7KjG3SQQVeKdLe7WYh8C5CPPg5WRsdffXCU3aZaERm1MST7knqD8CgUjzn1eAyVtZmZNvPix5JuFz",
  "key3": "3nqqgsWZSSCKRCNknRGPDuPVBcrc4C1DCx3iUJLXoP6wqdC7LaJhhwFPafzHvGAwwR15UP994mpthbyV68Lb2X3Y",
  "key4": "2Uh91MKWDqCjW9TCSPx1Ju6JjN52bNCa118BVCDWWS2yNSQN6JFcrMUNH1vNXqButvUXewAGAxMLxkrEjBsfK6hh",
  "key5": "466xsdunWUFNekekFY2gT8nmxviAR1EAVYXCuwxqdyNYfFYAJdowcXNwJbPe4R4F4SVFLs8NN7euMjkFCNmpjGMc",
  "key6": "5et5ZBqTBtnHSnJzyfrFdjnKB9HnJiPJEX7HDHeo8heA1Kr4MMjDXTpERJ7f5PCKG7A5rqEaBQ5B9Hy37cbATLNj",
  "key7": "5QsyCttRuKBudtB345SxQC4NE6nxSEpnrrwJm9HvfBaELHNYBspajq7GXmJf6hWatdVNUZ92oMweYvV2sUT4YSGt",
  "key8": "3Wtr2aR1SvJ5a8d9zrwUK1feNjMxcsW3rSFedmpku4sqiaNY2wWXxdd1hwW63g7z2RZ7u3c5RC7ZzXwePNMzBMca",
  "key9": "5fi9t1FyE9dCfm1CNxoSYbWtxsvGaLiZA4iTqCyAezwg8QW9U1uc65RM372UFGPpTHd9go4zatxrpMqHbSNSFMYK",
  "key10": "HR4P1v5CRTWBNJ57DWsShScTMB5W7TiLp3sutiMEh45MomnVuPXsimeuEzE2BEAYoDjJWD1twaM7H9j2r3Nkfva",
  "key11": "61R14j8gPjwaqsUjMHQ7CFvNHtJnya9ujY7xijECqFsZCDxBVFJi8Zp7vFsdhxqhcsRYcQ21wnYsku4iz1N6Nw1U",
  "key12": "5agMYAkkRYgVS6Cg6tvxLKMmigr9tcqHkarwuhHv6mKsMTHEo9QeAJHWsoVyeyjRxDxNsJPM4Sm6Hc9fUsQNeQBF",
  "key13": "3M3YQnv9kRuYvF831Xj1uBksic67QzPQ2R3MoAHTDJ9Bhbz85GA5x8qjUuySqAKbzsdrDfc3wJBf3BgdfDqcukXm",
  "key14": "2aCo9UrcGsBfZCyQoCvVhttdV6mC4Q7HfMWdErMjEmf1fgM6gDLWzPKRR9zfWAn6g1sPcM7x2W5jK1sSYwJnVGin",
  "key15": "5DhFNHUNa5Q1WtgsYnH424Wfbr6nocyYtdSfDYwNG5MzYEu5nJKw5eBD1hD9nA2AmDzZt8ZiCdn2iv8Mzkzdwq28",
  "key16": "3X71DU8EcyRE5H3epfAMQkrhx1q7zNDEJw1RxhTNQJiGio9HienBnNfo3xzVLixtuDASk9m6N8zPjUnWXVXdtBCZ",
  "key17": "4AQsWungS55gqkNRUfx9wKQtLYNZcs8KdLvdbFr5VCVFNRD5iMdXyBkf7zyeBsTQZKDYsrHhHfPsqbnzcsxDk7WJ",
  "key18": "Tb2Zb4cJPGribD5Ut2kSyLRYV52bgcnBkPMY6ZZNtsBFpLMt5Jq55mjSQaHEeJ2xQDD4UJWMBueUCUQrTQBMdHS",
  "key19": "tkLh3UeRWuQ6pXcFd9f889oQ3cDrikmwPAwxPa1G51Q8ByeNFHUpU7JVmUPaZ6TBtTeHbXqyd3SUaFX62HEUtQS",
  "key20": "2vUQ5yykK4WqxbF66o7JPWCuhnXqq6QGfRxur6yePKbythkXrjLQrMa5PEH1hbsyXk1VT7Lf3pobW3Mcwn16HqZC",
  "key21": "21pCruEtWPHkLwv8F1x4Um15YGhoCeQ5tH554jwENNbqn9epifTsyGmnyeQwXEmqSjyK5eaunnjhX1XYD6hzbXe5",
  "key22": "4K6YUGVeBocxbq3NEnY3bYsGsC7wHLmXVA8ik2goxN7PLQzB9cggQxpxZurNUahWfiEv2tusvRMWVV7afELMxfrq",
  "key23": "2KtS8KgJHhkHa8C2LdYV5eDd3Crx7xJkw12r2pkmkBq6UQvE8Dbe2equf99L3zM49bRcdrUq53xVUivErm3uPz8q",
  "key24": "4QTzz1Txb21df4TxYuZHuL5pZMecmLQU1BNKmZSLXSYjM3amKm83yEf9LpqDR9CCkoWCojhGCCbRBKPdQ8z1DDmb",
  "key25": "3ZPpdCBggqGJjcTKYbNKfGrxpy4Air8mWswCef2haL2fn8Myq9k8HQyb9cMkiGEoapQcegsi1ztLJGuBnt3cLJkj",
  "key26": "5v1epYdikpCksDc6CrL9e5BKuA8Aufe88prCvrgGtkqDfd57ebxeB2BxKyvHkDuznNSdqPhA2WkMtg2sNF1Z5yte",
  "key27": "3KoB2UPTnN6aBVPfDxfdGPwkcPsLf4CezDykyu4LVB4Y5xB9VmnBm5dpazcVgKj8xWEBMrkEVAjFAg74HdAMdM6Z",
  "key28": "9apFJNp66gt8f3oNBsHZi6hnj5PwXe3Cq95tHXzNvRjYmSvPcWTJPk128XNEiSQ6Dm5R9G38g37yS2Ff29KATLR",
  "key29": "5jvvCzmdvj12Z679cfHNi3wiB6chJktAgszh8uKmpd1hM33hMkx26FHFkrMaReubDaSUv4aQqP2xUUY1ZjRmkdss",
  "key30": "5PFvPY8wztPMvrwkMPA58wYi3KQGZSEWHV422z4qBTBd76U3FCCVBx9EQ7tKhPqofmEy32XM9JXBR87CfdMYhtj6",
  "key31": "4iRaj9b1KoDNaqm2dFNwG7geXAiv9Hm8FvC3SyPNV6fthVQN8a17Cf2g7BSdJ3AP7ESKEtT5bNS6asyZssn6m7hx",
  "key32": "651ugfw3DxurUCnkPUHqmVhjtj1P4f16KjXW2VkrQyerZEQv7wibKry5cyvT1TyZ4F7DLMXrkV5PdKnobqErcNGV",
  "key33": "24YSmFMrQcQmQvojs3nxS2X5pDSjrES4aL6s5PHs63U27dYct8yuiEwbaKNQiFyuLjMsT9gVLB92hu5DiB2ntQK6",
  "key34": "2PdNcPitv2iRqFf8gNXbqrKAzxiAUP4Ws4d9Ppztaq6EA8B3wBVfYTWsAKCfZWCaMX447wpejenJT15AyizsjyaM",
  "key35": "5NLbnhHSZ9pDnitxiypWojEY548teqsgprRQVxq7YvBcNsVKAhd6NTDo9FeMWvgbMQ5KEW1txn1HMQeNv5dakmuB",
  "key36": "38mZdQkorMbMyWYeMyBamPgGbbaxrWjPsTKQW6BWqGxjfFY5SHXYwbd55t3tep5wdJZSC4QeXKzyeEpmJsKBLHQG",
  "key37": "2F7D3T6FXYxe3ndWBnfqRr1MzTQC1H3acNskW2dJ4sTbKH6yBmSrjcagQcXUcSg4A9kvHREcz9G9AWeFUXriuFxG",
  "key38": "2GrA3pfvtD1s2ChpMg5iv2FGd4Y6efkJokEfvPBEHFK6Y4bDXCsxjRTyKThn8yinz12uxFhBWvvAZbXNsbmy7NQj",
  "key39": "3kCFXvdgmivRPsXZZSDuVqC5xhyB31NpTMn7oFFfVZFVrMKdLijB6wxnCic1xfLo56mE1qBf2trLGitaMC8H79qy",
  "key40": "4VqvqwSAy3fwhA9pw61UZnrXvjiyDZNYe5tSz1KLT1YPXuEqiBqE8tR9t2DKJHffUyDdGauANsCh84fAwxoEQe29",
  "key41": "2j4fNFzQiUXjHEuTvwzo6zqCXQjz9vZj8BRpA6MDXAyLHVaYjbEtxYRUwVMd3gkp3Vnrbzb2QYZYt8APG73iqShj"
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
