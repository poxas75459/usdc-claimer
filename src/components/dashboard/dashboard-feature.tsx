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
    "2sNpDpCMhgxpWcyLbJnkLd1sbASeCWYjdSoRcuVAxkzPoJGvKEta7hChqAgGSVXoDk76azJxye99qw13ZSqD1oyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55iqdCsRbPrEf4Un3yLcWNDHSd3Syrefonvb4jUMYsxM2BAhgxzYz49krCuHLaMqD7ARgq8PrLVqVR4YBpWo2MNS",
  "key1": "3a226YmJMpPrMpGEgbScwSKKz6DvDvYRSrrTY9qKxidZeTYHriwMkjGAh3Y6MnHhE2CzKKozmeyeTRDnYpX3uayk",
  "key2": "2EqB9VMsxjzo5swxTRFEcsCDXfxR78D6fVj29aVaihtuMjKtf3pyVkeRGLC53odDkXX361VAjBfiZq3hhR17Lz3R",
  "key3": "4ZUqZvoQem8hU3MtRAsxgHhy4qiBhBKZuMFM934stm6Dee12fRRBkyLzB7L7CBNJjktxqDK3fkTWXmVefUf9gWA1",
  "key4": "ptLBYfj65iAJnGzDZAQNNRiWG6L3cQh5jX4e3fDUqtp4gbAwVviFJH6jD7zVryqoJ3rVAwNinnttdtgzTV5DZm3",
  "key5": "Hj7CTpo3cGSFbsgQGRbF4KF2rEPWDwFuMDESKXtGXSmkkvYVqCj5Y1QWT4aCRphJPQBfLmSq3aqmtF2buzbQj5V",
  "key6": "32H5VTbTbcmt6B7uT7cczmfbx8UcgqhQGndNvsaPFMejGRDtNtBCmMXnLHeDcQWQPPBcGu2eRJQaiC91Ncwiu3cJ",
  "key7": "5wXdjLMXPXc5ysJfc5sQGYAWy4wpQc5ZxrTgmp981jr1QezmfKnzrWHpdLrvTTEk41NHpe5erGi1rV6oQhB7hSxJ",
  "key8": "3bdcaou3XVrhDJ17MVAiqGFZWw2jEj8YxkgnKGWJcZQU5QAuhTFdvnVFZNbjAYJELQpPH5kuEwWyX1gEJP4FUrLP",
  "key9": "4SHNabeE8gMr44fnC9hKxMfxpW6XEizw6fn8YkVcR4DrF27iue8EogktMAqVJB7gimRzodUbPWePZg4uN6VYLMZR",
  "key10": "5fRhfwQwRiwy4CW5N9VVoRMgmLPVHV1g6rUnE3Jb6Ntdp1eWr7W1WkheKCx87NmrCF2b3nDnhJHacJNS4bX5RHo6",
  "key11": "L1xULXgN2A2J8EtNCqj2iyQQQtNXhacts293dbqbyq7E6pGon2kuZfKaVn9GjDLzfkugYVo16VJo1ker2jL7cRC",
  "key12": "49vnKroAEXXUUD2HSKEUWTQaFgLWYz1RfSUCd6a8K9LBYrLNpVVoHHaYCwYYqxV2tszjnSbk33SqZhbkuTq4C4ba",
  "key13": "CGTdQhdzZMwaTW21h5De3BM5rar5gunw9pmVb9j5syznYHJp2Js1Ciwty2tp8vWNkwbR1pjmkbhSrQW4MqbKE1g",
  "key14": "3PT1bTi9wboDpYG3SgCndHcdyc9RBVyjn7bxEwA1sJwGFyH7dYJtZrabzGjQ9haYkBZLPXU6D8aA8PWZi72VHN1P",
  "key15": "2ZfynNSTMA9KHyR5hk8C4pebA39aC6KFDhJuSnVFCNH3ZyigHnAwJg4a2qKpY2VPp2xB9J3Xxa1aXPCDoJnMQavk",
  "key16": "31n8P1ETCSTZHaLBfm5eqaubH2aBXABKxtVXx8VY2hFnt9gjAuDv5i9ijqnaiTLTLZnEuMtdf8m3e4dNfrbVSQG3",
  "key17": "5G8dzkqdyKHYrxjzWreWoG9XCbDQShLS9GmWqKtfeWKJLk77iaLvU1iEtFj5cTM1XZHCEKxr826QLv3uqTUwtkY9",
  "key18": "4yN7E2M99Sx856yyDCVkfuvhyi6X3NXRz62oyYf6uG4Jww52f4bkKquSHtkzrQX5exq8xpSopomg5L1HwTvLeLjy",
  "key19": "At952BbuTecJjRbiNXVwDeMCraWaWA24UvTSf1vTndkDig96HKGoEAmSSDPeQ7GJsZvKvZi7uZWrTF8yQPyK1iS",
  "key20": "3m7DYmNAEDBEypmmW2uxnMJis59YjFzPpkPZ4hHRC5AGA6rBgApSbpXU67L6fNTVfXHFJecdbx5Ua1xRg1qg1YdW",
  "key21": "2LjCteMp8aVTtXHHgq3UGXqydEC2E6T7smQUQRrehYzV9XdtxPPy1jtXco23CFW8jYna19QUopUTRapfaERtDmJ",
  "key22": "36hiMJMQnBfPsT6Jx5Dw5pjQwaH6mcGeGTGyZVqi4TZE4LsHmTnQQCJWKdPdNfyor6yFGB8NhW4avP5n8TaVNMhW",
  "key23": "4kHviC22Zy9SnAp4j7m6i2f175rfuyatYfzWFJuMF8h8MGxCZdWTtYPqJmwjzKFj3FwCEkQq8tmjH4s4a91qDxVi",
  "key24": "4tDJqAZDq42FuwPLXLyCqcvavbGHYmaqDEeN1aRWnzN7QFodqq7HRf3CDoQri8bbWw3GxJ3kBvSgY7CYMivABFrr",
  "key25": "57vy9xGB4eBX2nvKHq8BndPaJegAtgPY4DX8T3EKTqsQWXdzLpTzXC3boEVpz7UPAoX36L8JcivNyrMhx4LK767h",
  "key26": "38cM4t4GxvF9joaEYHXnReNd3Ygw25qkwY2sa7PtYowVq44ue1FnEvajs8BVTKFRCDMh3zFv3vAArGmbSTgbQeje",
  "key27": "4iZG14dz9m57zUdptEuA2yteqtrHFnPVBpp5L5kzSYTvjr5YhCPa6ebrGesoA9sxa8bR3N3YGbtDBNkM5jGN8rP3",
  "key28": "4gcDkFPHCEcHRWXnhAoQKUDfb2hvdxdMVyhJLKMtLHsEtUa9JXhh9JF42EJnyxT6mx1UUfv71r22iJ5JtJPgYdVb",
  "key29": "2Hzzt8AbHyo7Ud5XriVtsxVyWcxHT9LPRa6RcaqzEt18SLDAh1Ah57pgVkkKeNKcW2bv23dNGNDrqE1nJr55nCS",
  "key30": "3UKvEtZdP21jDnm7fKo8fnB6d5UVJpdLFTKCANmSx6LRbiRy3cvK8Dejz3qLLaV61CmEbst4JCWDH4wc4Mnym9qx",
  "key31": "5aj2qG4sesfE8T7MuXnRWGtcuFjGEVSU53CtNbs34dMcq8FgWfYZ9T8yA5KRjckggxbVYPeFkprnwzH3LK4aVpRe",
  "key32": "Moe1ELa1DuspnS2XcjTSMjnbqjeBA8Ey5u5crseaH8a6Rho4qWijZ1yV3y2MysVKYfyU7Dy7pkYn8pkiTympara",
  "key33": "4SjXjqcm8X6gSCgqFQ9G2Nm23swdEZ1spuLvtLn4Bf1725giVM18LAU3CrQttiArtD5JRE5auFzyter6es2CmUgo",
  "key34": "2vovhpgBX3k41CS68YEbxPxAzXGYzmzBC6BX2J8gNp4C1KZ4nqNWaDXDXkdx8kAwoFDzaJpMs4NFvdWjxGq6dqQK",
  "key35": "4ZX4qPzR2fV49wgkXdSuWYztq6c9Ji4ARHFryTLxThp8Jy7U8wgMLiz8BNLMeyzBSt6M8FqPt5CjAkHGGxpQKD7y",
  "key36": "2gXroox2HjZDjknfpZtU6G7VZJ4AJMN5t64aFcuTFC1WTQqYjhcHu9jwsdo33Et13e5D1HvtUZueEvq9q3fWCTon",
  "key37": "2MKobNuhJ8GPkGM8eeEDKLvYeVmh2PpqpaUrT13dkGgYsiz2iLAWTuvLwtZRhaMibbVsHsd1QrTCe1mCudhr4rm2",
  "key38": "3rV86fAMLs3k3sMGj6wgX5U6f7QJYnxaN1KbnpRPxgT7XPhsqi4QxHyxapSPpSP7UT49NmVw7vzpmGfMMNDLmZPr",
  "key39": "5MAkmGaifiBdSRMMpD4YningAeGE3MYUAakvDWniayrJDhWAuYBFnLZkrrEpcP3c3NVYpYZEND7Raa8g8KPASG8d",
  "key40": "5tyu4qHn84v4US7x1ftY9msEqSXnnLRsc6c8uY1w9vjqgACD33hRH5QxwjRjCmyp4TSvSn1TGsnsstPC1HiM9ZdB",
  "key41": "5vKegetLVn21eVzKDbBTH61cXNk9oXEWZDSB1rGxcMZcF1rXydUwPEgSkqJQarvzdoedZsBJpSxL5QeKqHYfqaaU",
  "key42": "4aJhsForLiAizbr8GZcrJnkikw9irYQaqw8eRWHyjvqVN966HWSivQjS171LxdoYK5noBKuPCV5DH9rmiXZ4Vza5",
  "key43": "3UT3tjj3NDaGKMB5uVYe68Fg49XA8xMVm4CceuPdseDaxsVNU8GudsEoB13mnLGFESoFsoygyEAC3iNJZGucemsJ"
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
