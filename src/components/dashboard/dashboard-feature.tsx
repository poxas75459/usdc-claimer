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
    "4A3k3zJ7XYMZgyKZs5EkhLxmV4vDpTXQBj9w2MeZowVyDp8j15WFY3ceLvGzkLCnkpz3arfNcWe5r8rjA7gqHGtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YqBKMKyDRfXuLsvRX3rpxzgsPVxfb2CEcCbAq51XnLXzURXgUs6K9GsAgSFcDM9i9eDtEY91viGhstF7YkESeky",
  "key1": "51fJWNrSg3c1iU8F6oHFsri6RtEQ8fke1xkBoELnGSXaEEmNGk6V7jddxHXqZBYEfUzxZCDFZJYrW5H8xZRudndZ",
  "key2": "2LTmWhdjsKGstgJecrn5P9St3oscPNcjebYPxpU2igkfFoRcqr7TLnxkuzmwERMKdnoyHnx1aD5KuwKYp2SdwCpJ",
  "key3": "386aTSfcvKWqH79EMX3GApxpcoj4kH2ukshZizTrmdUrmkj5mwmHR5np5bhh5k7hYGG2N1VKJbZZg7VK8E9L5hjP",
  "key4": "2qq3DwMBXbGmTgFdMzi43ABLAvDtEadBjYgrNw9YaDWjNT15U8kmUZod8f5Vw3zBL64e2Ub7Pgwe2yL35F43odjJ",
  "key5": "3mZmHaemdsdXiEQgpEWxqffgjyP5RBPdod2R3utKuetdDv6ATGH5ybkU7HjpPvfniEeF53mHESQA411FSzJ8hzbk",
  "key6": "HYEnV2Nh8D12RYkQ1PkhB7dYQQTKSiftugTySK7533z1UDeHqzuowTuLJp9JouRavPYiPgkPXHnwqhRX2nd6PSR",
  "key7": "64WuDkZhyb9ofCtCqk3csYZaRXHvLsi5m6KMsg8jN2Ya999f2W1Rgw77qzXbVm8yk3TecgxZeiGBwcqwL5kzRGtM",
  "key8": "53KNucCaeaZRYibpBapxmatCpdTyLbgwRzTu9TgtfFrHxm6Pf3EZN4mjPZh6CQgiVob5nTxsNRbDmF8mBdhgbX5m",
  "key9": "2sbBUDRm8fps3nEViZEvUTQznYBVdQMx4uVHGKYxF1rRyyiJveSHL8rkB5cmbUjLUEh3MKsF1t7ufUWEQna9ATdK",
  "key10": "41sxAJHb4CrX58bQ9evde3nn5heUNWkUk4CJocnbP3PqgdgyPJPxa38WGMzHotmj4EAE2Ji7L7wZSjv1VVcSNFE1",
  "key11": "2cbumzjpk4wT5WmsGkv5ynJNZhmmANAF4NmDF1iUYJfZc81agkvzi8iqRpsS552XoGWfq2SutYbXs984aqQS4FES",
  "key12": "8YRPwnT1yNWP7mETDQieJhKwuMcsXoFvdBHwUyV88CXuK8CqitcBtNwZtPkz7AzZnwE1UK2UFCbdtjFCSzffjKS",
  "key13": "2gKZbP5o4Fdqecx9vP9WVY2EvGCjgSWRN8ueVrtC7McVp5evdcmHe5jAnEDougFsDU3AEDkR6z54FiAYzAobipqn",
  "key14": "5UGm2XtrcqM9yFV6ncBcYaUkJzx3ugUYgKoWWDmJwmemNgpiFZKNUW1KWmHqhuzq2QkebEbvg6nchGWE9niGPDTU",
  "key15": "C1iLKFrKNhEaFg5GWcqWQY2kMbhtxPEnpdhApqWkFVaFbXNYfR2EXQkEQnDT3eVkFFieDrUinCfRg16tNmTUgW7",
  "key16": "4C9jpx1XKnuNnHUWSeq7PLiK9Rcytiz6Uhs5YPdzwE4M2Z8fY4YtDzWMQnR47TvaZDEN1dMPPY4GyKq8yH9rERhk",
  "key17": "St8Qf7rGdRuvUUiGWEZ1nebrWoy7pJKqnq6942hp21zpPJUmN6ADSnU6nq5JwLb8rwWj4D9J6tJArqTNB9e5S1U",
  "key18": "41PUcb6Y1noyZpZZsCc1YJCLn4FAkuSPDqvwzgwQGWgNKbJfH1tQXB4ipiVkPdrg386w4ZTrEWQpvRipn5no7iEP",
  "key19": "4BoyurV2bqaPgsQUvk978DMjzQqocZdovttHjMLpGgLN8gZb8Gb61SCmbq8jbXxNS79jw7RHTPd82scpuEvGfYza",
  "key20": "HkWpqrzWuwVVqKQjkFDF6p6qaHdTheJaAuUf6zgKH2sHp98e87ppLf5pVF3keQ4Sm38A9QSPvzSPVCPBUbnn6rz",
  "key21": "36Bpy9eeq24ioLU4dMtjT9g3tfpbKk3frNRNzoGsTQZhwjMZX4eMZ8TpRcUMXiTxKDXTXy6rchaLPiwZEECcruFm",
  "key22": "5CFppq5BgmZADZnLnjRxS4QzVfQTAUiA82KjwZZYPpVKzG93jNUu9LrYQ1GmW7fAShDWo6wgsgQrkC2c6bC22jbw",
  "key23": "5EVjxHWbPMsyEMYeVctFy9PJaYmpA3E4uzMEPHupERWocyWGpVskXMtRsbWMaAXqVCyosko7h5Smj8QQ1zqXJBqX",
  "key24": "3iahQhjbizyLP8ttniStn6gzUjgda4sLP4qQx9AyvRBvZ6cp3E9FHgpeQQUt6RjuuBg9BthRn4vsu8wJmsVCuk96",
  "key25": "4unRZLMBqpuT7PzovMGw4AQC5iny83jktNtt1yasRXhFaoYzNbpgBE786aSQForLzHR1PrtG9b3R8aoqPrrR4QUN",
  "key26": "2fyNGqZwKNSm65JupSsUKnjTkoWE6RumugApcjCi9VBvK6DFaAXQWfBnwrGdx4dPUmiwV8pqrAiAoBn45tvLZRBX",
  "key27": "4LLfsrecMKW6scTfgoZjvnb3bFshfMhGcrM1CoXB59Q377ALytZzHeZNwyVhh9kzYteeBYwQYDCTin7m6CtyiFUp",
  "key28": "3HmxZkqz5BuaDoztKN6KnxKiJoeN5miftWGouN7ZoWCpZfYSVTXj5a68sXAEy5kNTTmGdKrioketwZUmmKuD3Vmv",
  "key29": "4gLhdhVGmwTHs5xc9XxthW2aJd2Q2Gkgx1PXGhVdu88p6XGUzZTcXzNRdjPfKgZMNb3hJHzKA8eJAEtTPwX6yb7g",
  "key30": "4eESr9h8ron7XnmGSysbQGiA3VnZmsgVbpQVo3C624cuHJE6LnAG6y9fTxNsnTyN9gFtFdGYeQEa3PXYwbTtmS7R",
  "key31": "27H6793LiS6eBXSc42E14c2BFqHmXEdxs7hAPxbbHSTFztzTBetaTPdc7TUSxbei8NeqGUkov1SPNeKYBw8LwHJq",
  "key32": "61RkSo9fCCNaFxQhGXKgpkjYhQCnSHs9sjuZmYUhidotn2xFDdURpmLHTo77m1Zj49Tfqszm7Xm8y5PWpVVa4SBb",
  "key33": "TCSLmMpbXy5EGdBF6Tkuk5vSnpjnZyHVojZRtPRLoN9jg9gFV6W9dh6AB6QYEMosTHFLRbScAdmSM6FQebqj2tx",
  "key34": "3u19GBgXAUy5JV8gBBb1yDrrA1Sn2J15bFiaQXuMxvvwXZZdx8jP3jiCYA8bZCWwTWtbGWGzvj5GQ4o3HDCAYMZY",
  "key35": "5XiLp1L1v1Enh8QPEu6g89gZe8ei5DdGo2mMdu46YkSLAvsZLRMGuWGeNZhV3kGwLbwdTrcu9dqyedYsq673teLd",
  "key36": "14ozNrYqrg9kAMFEs64nwMJPtkJWzAei2YV3d7CTfy7uUqcoVHwq8UDQbhdbxo83LdEDL6KcKon1z7ow8eyncNJ",
  "key37": "32anAA99tNe6cqAwRqV1a241Ju5ijpyftw3AZq4oN8N2Fd9dDcD2oE1hQ4Umpy3P5KX2zJDqXVgaFWPXxixXH2yB",
  "key38": "3LgYDMMehrqQBUXvoxp8UXeqMqETPKTCayrFHX6NPxbuRHfDSzufJYgjeWmPq4ZGfR4dpPtpjRgMGY1NrXJJnbHv",
  "key39": "5oKxfcviKe2kmk3baHBTBt8dfCJyDhY915fHALhJte84YXPLB2Cdz24CgaVpCpdKhMjzmUg9cLeSNtGEkjPQW278",
  "key40": "5KGdJSZAsuHnMR1zbyCdRufN3a3im4ZD54Zkb2UkN9DLGzej7V66XsVAXevGY82veY6QvYxykfNZm6zsKC2gLHTj",
  "key41": "3Jut6gxnQCFMF73xfyCYEono9KPHKJ4oZijiePSFY1xhxD93oR1J5TWDjv5ZduQqCU6jKxJKRyETX947ttzCiM9i",
  "key42": "2rG48PTrFu9ZZd2tqPDVfNNzU1WNEkntUzJPeLaoRjBUamirnENsMLqCVimiF23A9z73HXPCfQYDZNktXS8CAksA",
  "key43": "3BS8w4BYhV7dncD7MwH2tywu3N2r8vP2VCEDpsK1AKHjDjpK7gKCcLF5Wr5AgR96pp9sqajq95tiHHPvifz8T3te",
  "key44": "soYYenkG8qjC9kJ7fFshHyTNwck29TQNs7QK2BgQJcXri8oLEFtuP5oNVJCjzjdprvLBRKMRnCKi3vDMasBb2Rf",
  "key45": "5DiPkZ49JBV88ipYCRLhPwVcZWfoYvZBb7hMcV1nPSTbZMfkB8zN8NMboxncMfVsEjzs8zcTsjM9UpELeAjHEMkd",
  "key46": "5YN5Hz4QUvmZWUaYs66tgPEqbRjfNQ73HPHYmJqWRyuXvT5ERYVfTmL4RpNp5SP6Z1YkarGxaY3KS1ma9vsq6aXY",
  "key47": "5bj7gBCqWAmEmFSyCxswuu65RdnVkZGRWr1gv5acTp8orNCgr2xeBYUMwEU8iC1g9WheiFPuqAJejHazBM222vX5",
  "key48": "4bqWQkJp2fouXUuhARbqWuPTtTm5gJHzniBszXN9qZScbPUqvXzRjnmwBbeeSWL9MnFLHJmypZ7jThgvKBJwV8fw",
  "key49": "5Yx3TgiVKmAvRiE3ESzdhNuS5M1ynmMi1nKBr5dTHZ1uoMQNHdvW5SXrxsP4EKSxu6rP8vqqDcZ7yXHbyEA5UCMx"
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
