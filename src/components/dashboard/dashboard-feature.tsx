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
    "4PnecnjDCTgMffBsRij2KbkYSykVqGxZCz9gz5dCVSuuo2HUfWq2wSA8i8nnYZtzBGGHCAHyL1M79cCaZYRJrpkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wvfV5dCKpdsffk8HZhgPgXDkGyhy65FCF2CL3gWm3NitcbAMphaQJSQieGvz8h6TRnG5oqLm7gzDCs5tjpYC3qQ",
  "key1": "5jGLVSknKgpJmzhoF5KSb3YJMj8B2sGf9EAMRTHUrBzigK5MxNfPjqAV7B1xwXbkYGdHMaK45s45MwrmMQLqeKNP",
  "key2": "4ohQQhB8Aqxv5CsY2kYzXu9Rc5oN8KkKYrSyc18RUW6Gawyty6LWUYpnK3W1vd5JopVKeq5e1rbkxu7eJP9x1ETY",
  "key3": "3GrECtccyYE5HTBfzFWycTzCotXvBwJwcVDfShQr5T48PksNM7eLeMTBgWm1Zq3Da3otj7eAGWYySfPwvrCPkP6q",
  "key4": "4G1EhdbywcdHrGKGmV4fiA5a2ZXrcpHVdXc1iom94fkuEfy96mESoWSiY2t5vhdjTbALtXT8XtjvN5szsxJ8cnLD",
  "key5": "4k64ZzcD6bur7VdmLtjsUbLKuKcJVDEA6RLMtq5Bz6fUMjA9L3tJU5ky5481EDDoYpTbGnjfhEmFWCo6cp4kLmr8",
  "key6": "Zzbo1fKFdQThJtow8PAFgj5qGVugwxkoTrKeuVkae1QHi7HhkDgw3Kt1q88ccEAbLKEnDeZ7tjKqv8NKtkYSaJ9",
  "key7": "3a1CYXPNHnDySqAtguzh3rwJ1hxdCvWkUt4juGrAuzBxcyfVRbNbSyHyrWNC2zjuywo1EzdRsxtdC93gHNtFcgUf",
  "key8": "3FA9r7XXLN5jhdaPRDB7rdG6Vwv8CPUjDEXMxrXBxSeEykhSCihHJPuJHAen78TtcokKC2VuJweExZFv7Qx9LjHL",
  "key9": "3GmreBAmnxmdZHeW9ED3KkrXB1QXUGUqRSHSfbmVQTzJAKpRT2siagJrBvo98uQXG1KVRkpKkq2Pev8txLhSAdcD",
  "key10": "2Q5ux4mSHkTAVW12umDLyqty3JyKKHmEsY2FNZZA7LaFdoqZZyToEmT4NugxiGdCRLGwdbkGf99UnRYwP6yLzSkk",
  "key11": "2f7q2cCxTpfegWcPMFw862STjBLDQamvEFrtBJMb77jaRwmBwfZkswKdW5Ea6TZc5LoVQynUaKtEPc4FJy6h88Gx",
  "key12": "MWirpBQX9Jj5KcFb5MTzVutkoz4rkg1kjYSn7EtySNiRSxHQGQcPauQqaVYnoj6kjeVdvbn9Afx4PpkAR7jtaFk",
  "key13": "23DS1rmsem5D9EGKyx9kokBsap1PKZzV9iL4cHWbXMaujRvJrsZtJYr6KXrQxmaDYYqX8yzpWrZ8GTtSdyDMC3op",
  "key14": "5jHZMMkQtUh1zzQmVvgbuP45X9kSatbCSjmbUji1HzLHKWkc9ajhGKbZ4X9i8qXxvT4VUy25F7FXNawxqUiak8Rb",
  "key15": "52NHj4hh4xCN2aB3KRsL4yCdkJDmmaGP1nonhunDHW1z7hXzyDjnn68sp2heFWR72VurQa5A2obWu4N2gkBSLzjJ",
  "key16": "2BaT8oSnPTEKtPHRCSn16dPunmx2FiE8q8DuGG26f1nWEPFWitVpro1R8EhRQwJM3ykVD3iNsGm9CGC6M9Djmbhr",
  "key17": "3xQf7eCeTgit6gHnrWbrXdUkrm3s6yfbcz5VC36BTKsJfbSE2dtes6qAy3vrpbLzt5FU4uXx9w1PtLyuz6tgJrEy",
  "key18": "5kWPmGKeyADThyjkCSWTdpmuMBkYZfQZaBzUj58Cr8p9GvS3S5ach9w2vjnZdMQTHMF3svukeVJTW7LAg4bYHUjp",
  "key19": "ftj8kTJRtVspsvRzisjMtcbaXuktjGRgK4Moi4jthMxvDzH1Q2t1YtzA9ZzWLGqrtD1msoZ5p3YXq2ASGk92ouz",
  "key20": "2wJj1rBYtqcNGgmetQhCCedDgck9e6wJoQbdzdSoMEQnQFndDQpgGATmixh94gbzZfEhepXdL27vxzif2DfAtfGj",
  "key21": "3LvFE3W1JB9GmzFa9o5p6GmSvKrrVcjD7JQyoHAtAJDQ6NtS9ipf6Pz32ZM64zkswSM6ea32EXqRhRZyuwoiH9Kh",
  "key22": "57GNbrge7bhj1oKNxcEin7N6Afxi7ydUND8wqBdP6s3Vx7frHK7EcZwCmPx8hecUq4eZGf3gLVA9mgni3XLDP3Zj",
  "key23": "442wzBt5DMaAiG1q6eFp6tdisC13tQbZXi3MeoDsMtVwTKP5WVFRgMPKzMj8ymsnvyHAxBumWoChh9w9htJB9dqb",
  "key24": "4udC2xhjLEWCGAdE1tJnGuTPooRFSM3XWna8agVZjyq4eJJb3FzZNxZpyUAS5cbapMFG9gQuCtV9nof61xTqf52B",
  "key25": "5DmEMKHuwRyBZpQMY9wFqwV7QWe1tWQG7aELJRFP9KBYrJSDWZvMjuX9kLudH7jJSaV5pTnTm99x4rsoNmPLmc7i",
  "key26": "3mpSZWEw9qWo15XhPyVgw3RXy1AB51WkX7wRNUh9HfGQ5UwfhhFTBpNn84g7nBU8YG2GGjdKQK3JXDjLohYzMNsZ",
  "key27": "5nETK3d1yhoGieYyMMpDNo5oTbq1fypx8ZTBZeFkrXbeyjTQYRGoSdW8Ew4eip6nbCARLuwVZC3Ak362ddy8rG1T",
  "key28": "4H7eMco55D6qmJDzbAUqqMyYJwWYooNXkGS5Y9KPUPeyCbmJNfeeEDcTWXF8C13Kd2hWYKbGp54PNabhS6FEMPra",
  "key29": "3tfZpWNfLC35898KNhgACY3TMn5PGMrvgtcuK53Rxi36MyVDaUB6mydYpmr5zdUrtN4D2M8gAp795dHpARuxebTz",
  "key30": "5wCF7y3f6k1cGFMZs6bG1UB2XJybivjWmjGJbL91ALiCDdXyr88SS8A6N1CEEgpMS9BYaE1G8rvnBFkunypSts9x",
  "key31": "2eKTLoXJbgmdfYsigRpGgjUHtuQBrQRnbaJrttp4cknU7ibAWR7P91oKxESZy9UjkGCBdeAwByRc9f8kdEGyiBb4",
  "key32": "5w5stQUL7pY4fwgfcmziY6bz4A6tdVfHjH7Y5MAJaiwYs4GU1iPiJuAZ6cXHCZ36jY1HDBFmk1qxS623Tdb2eZD1",
  "key33": "4fomTvQwESEx2G1t1Dia6Ur5v4WfxxHWphb4Nn8KHEyW5Tko15GYxqYssamo7kfLeVBV143MV6WaBcJSnc7oPjJ9",
  "key34": "46cp1VGC11gB9yKpfprzHuydwwCEU3k8ZHHjGnnbY9kdvbjb23pCaXkKpDcJMqCcxsB778vRBsgTDWZqaiH2QHYE",
  "key35": "5YaDjh37abU6yyB5kJYhdqsXh745pPB7JHstuw3SHW5tgtDJr3qng12L3BUd6zHKdJApXUjZ7UkK39rRsSUpvdTQ",
  "key36": "3qoSnQoRN2zbQfc3QFdbipwagZSUS5DKogcW238qJ2HeikQinwgmzMbdnVaRQ1s9UBFo8oGS5ZKyVb6b7J4X2qas",
  "key37": "4csFqAnJqATv5sdFBELc2YfzTG9cxaZoCFdDxFvDQwttCsQek6aZiU3REvjuQUCDD2VtC6QZSj3gyE1pyMv2XtoZ",
  "key38": "22TvXQiRkhXcsV3fGCo15RvNGbEd2GNZMQxqGD4KZsZwN6XeKUc4VxLH3anJibi98tpyNV1Jd2HxvXxiMvMdQUyk",
  "key39": "3aD5PJwnQnQTTbANoLuupgzLiCT2y5DCDw9242w2F7ee64KouxRvzoYEmPVsvqCcsbsF4EsxjyvhW6M51DFFZFro",
  "key40": "4Tfs4nXimBYa5ZZz8HYkB5zYeYeya4tdj3j34Bhc7E3pmMbkiaNGVir7wwMV7w9aMCJNQNdFviSDwwzrJcJKLzeU",
  "key41": "5euxCNaqG2dRgKNXK1xGfu8rBUqBWvXJ4owNhdHYEvS8LkLM7CnkhfQa92xC1jkCJKj5vK9gmrdEiuud6SuvRzu2",
  "key42": "49FXrQ1s8uX5qs1xTfmPJFzV3YP7atKUovvnkqihgDnJzbUYx2gfMywQgD152hUeFNoD4SQFSTTbvEjBKqsdnsgn",
  "key43": "5Qo1UduGhSjt6yt6PPQkALr1x8W6L8TH46eW8TbiUDYKy6mi9pswD6x2nNt7o4zcmvjN86XXAFA2DY5DaQ87yAot",
  "key44": "LFce2b1RXNteyyZMwcNavHa4SaCBmNPx2hrc1ytpUaQYmd2wJjmm4TCsbzLCUWTS5W7an8icPs2wEMpDee5jTLi",
  "key45": "5nrVQWwm5TJMUbuQBAL5v1C7HEDPdTRwK5Q3AkQmwP8oicJwxnPBAK7s8Hih7eDrUsrUs5nz3nYZu4Vz8vfgAcGV",
  "key46": "4JzZwHZ4TRoAhNoqqFjfxhsQURUt3ZZzKwboj14jpnHaE1cJyYpTTD9Y75Pvid8kULNLeaS7j8asFQGpX6Pb3mHj"
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
