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
    "4PNC17GnNRq5EgehsrFKkc5H71QYUzukB43BQsSkm6mddgheP3JCf1B3qRZMyvk4cNgq77LLEP4VPi1whT6hB88h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "267kH8iR3LWWm3eMFSLBRJb6G62Ue2Qg9uuegF3nQgHV3pryY1ZBQehVZxikHfDVLeKikwRvrc4gJNQjV2dMTZYQ",
  "key1": "4QvVwdng3BRS91ybQBV1pBLjvKgxz956uks3C49wPGyYqWrQ79LQy2GWM35qsh6tFRfBCMeo1u6dEgt7ehqGJEzD",
  "key2": "3yXcahPgDhooudvJoqJHuH8316DvMdZJcvSRJJpQQxFL7fa3kCTU545NeofR2wH5phtSHRScET2zFPLk1xCLeeaG",
  "key3": "u1B1wksF6QZGV4rRNxTM33wM7595Agukcewfj2SwYwuQKXry6M6979v5zhFV4KzbAA7DHc6AxreTyjdwTaidwoQ",
  "key4": "R8usmgHNDaZyiePYoW7U1KenSKQygBLXLb6zXtVe52Sw6U8c16tWD57oYsEpyC5Bci294r4oZXdtYHp4JZFmkNb",
  "key5": "2u2AfNJoHgVZae9Y3c1xV4pGjZdev5rXrX5dFsLnyvTJ6Q18QR5X7QWR5rjzMHJMhhegTpAUKQ1MfABNB161KhF6",
  "key6": "25wvyvf24nD2AWsLiGADMXvPRnYSAQkuY357sNzAGo97Zbtk2oeQg6atbdchu8kH8amqFsZRD5NhuPmW6HJv2BNs",
  "key7": "2hwkGchYcFaqqsSFi5We1VzTfeNPBZu3dYYsu2hW89CEVJHV1SBJk33DbDrdrXztSwd1UL1arWmcE87VMe7FGTxU",
  "key8": "At3UeUzu6fKKrDoSM1DSdteTMiZ2SXqKQEbjiAc9d762ux335v9hx5jqrZoT5rsxPAsRxzteAwNZRzVQDup5iWa",
  "key9": "4y7AT7Z2c48r1tP1Uqftrhp46Fyhbqb6HFKJ3W91YML8Mas7yxu7PGgmYEC7Ba99gk33xcybTLHfCYfb9iXCHCNR",
  "key10": "5sQxBkdAgqu2ebH8XyfpPAiskwDtUkhCxaVizoK4cXRNxTXipwm1AyHWbL15LuKxH1L6imy6Zfe2UBAwnhQwHkuJ",
  "key11": "5AHJcfMLjwUbpP6XpBRhSkbppxQsGGxer4T1t5KSzn5Beep2udZ1zFpTSxSyKDxugLJ7BzaiYprFb1PXLUhTbnaZ",
  "key12": "4vSkCPccwuffmU5ctx9cyZwqmqHvkKHx9yvB287Px4LgNzWz5AntfcvtZxhjyZGu2tb9khA8xTPiazX8smx7SKkz",
  "key13": "58qWJWDvnvCrveikuDUSfPszjDc5pas5weYT2NxR1GtBQcJYaJQkPwCAkos3p9sG7WYvog37H3sh6dh3mfSnNoS9",
  "key14": "YxDktAvWS5fcYVr8f4RtBPWw7FwLo2MNK4NeysvJRXqGuBTFWYnTELJLiKFQJr6W5fkC5roBqiv7YdYuaUMiX6n",
  "key15": "2GtZnojfYpyWdRN5p2s3Vnia2VssGHQCBfY8QPXXVKUuMSyX2CqBYKrwi8FhBm37ztiRbzqH9K7Sg5avwMya3URL",
  "key16": "2aZ8rF44CUSzZXnTiaMGLQ2Y4YTmNqtGZnrdq6Nvw1FbxCLGBGsvgxxD5YYS98nzNxNh5CCWzJbV28gtCk5LJXdQ",
  "key17": "51tZeNWxkCYXZL4c7LQyD2xUTE3igLRsND2FeTkz41ncaDLir6VWPAsagpWamctpBmcsLDr3pRxRbRenZhQbPSsX",
  "key18": "3WpWhWrFDhinnP3wTeSuCFhKzN5xhbtbU1fWENuFnqkxsboNU29eQZfi42aoPRmS1ftUCgt7LnexpoWvMUo51yfG",
  "key19": "27HJZXUT7Pk29QCAg6GsXRqraiaEPcNPCApPKMPVfwoyYQha75p84RudrogF6jMGMELkM1e2KApydcNMDt7FEGpz",
  "key20": "4PNaXjua7NtMjDoKjupmduesmsube2B6hRirwABpsKYoTt7gnnWUF9NsMRiN44MaWokDp9d8oWT58fLFJxJ2Ch1W",
  "key21": "2JPYXtcHU13zJYoaxqHFGFhkeyioFLH1p472vdi8pMjy67QgEN2k7cjFKiraPosKNzkVSSj9YCcRhTuQEmKaeCdj",
  "key22": "5mucS31ZHsT7TW6QAiuLnoyE1zQyHoRQFm5CQxShQyLfDWEoSjmXEZNFTzUDPs68jYk8XVbV1WHztHxkAyHt12em",
  "key23": "KYLRsjvmadMAzS5Mkpo9xLVVrJReRvW6MuCpWaJDrrn6ukn2e1fsvGLumMwkPojKRLR3d3KNNzX2N4tNSQpA4Lo",
  "key24": "4VeGBY1h7NnWnqE1yQqZEiSY7YXevThzxxJQNBKiJ8V2Tysanbpv51XHAySbDX2QuV3dKe5QvqSchxFqRgBbZRhh",
  "key25": "rzwXNje2buhZQe4bb9fUVXdT7KV5BK9WytjLKpwC6K3skoNwipDpaAQJ8TshiHoW71VF3jLyomin6YKQN6NQrEU",
  "key26": "rby63uG78JMEXG1Wvh2j1PhUw1jm3NedZ6ENByXLash9Wx636CvhnSHKX5YYr6UWFkyeizw5cbP8Y6BnuDL8qxS",
  "key27": "4aWSEu8xCPuMY3suTgtyaAkxCDc5RTRMuziGprj5yn33P1Rqo7R9nCGeGcYqHEhfy4uTH1jwPNxDFbDsnL1KhA2b",
  "key28": "2sYdbizGHfA7JfCexDW5LP6Y7r4mLvFPjpUXRZBfCqwYKRcVSWuJ5QZGoWZrA9ce2GPa58kJbaRLdTzdK1Hbb19P",
  "key29": "2Y6oBmwQc56HZaWickh4H4ZrYrdP768QDQe4CAEzgniMioNewYCCZCcopXHq3UNc48F1AR7KeTeTDBAbpdY7ngZN",
  "key30": "3AVD1mxKyDsamELqeZP4qxKrvtqmDFMNaTCK8zrmUTcLfoKrvPsqePvYmJwu2HaoV7F1Sx7HLRez4Lxrmkkb6thv",
  "key31": "5XiBfnPoevBgTncTKr3NQWfceaAWUf2eYF5e5JSt8ZX2YN1J7eeZhEutA2t1doYJf9yqDZDJjzjUyRMgeNgtfuyD",
  "key32": "4WKmMhA6P3EGgLSThFERKEEPpd2Kmoif5BoGurw8b4LsrRPFsLj2kkrgNbeJzYacyhjAaABQL42b6gwU4zx6hf3u",
  "key33": "3DBD1UzftUbepzAv5P4MCddFdk5ZMLgFicWBLhp3bUtL3QmPBUypujuRV7QGDJB3pv5fce1ZruAsptnCYhRy4oCL",
  "key34": "2CppMJyXM59D6uHRZoRzEZuHbFK6nSpPdm817XwVxUBwcxw2WTGZZg7HGGLuubPYN6XEHJoPcvcZH3vieGN2546q",
  "key35": "2mFMBxVVuVE837fMkRNChE5bKj2XDD4AtN931ZoDuQqe7S4oeimC8K8qGcmpaMmyWeasReCCgasxL1sqUw9Tre2C",
  "key36": "3qQ2525HFzDzfPWfY21aCYYE6nYaVqbEjiUqfsWzLBjR8bKcqCGVWidLQCjKWcWC5fr3pH68KnTsVbv9pmc2A7eV",
  "key37": "5VCsmhBfDDne8U9VSi4X3FXPk4RBmjKF5cpae8chuUzSzww5HruSf3N1uxMvoem4y3tkuWd65cysLrjzFNptnJco",
  "key38": "5HvZBXEgnXvCVCziM7dVF9kgA5qENPgBZWgebqA9xMR46fW1ij6xo2pQ6UFjMT7ia7mTf3tZWUsozqQeSmtW89dq"
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
