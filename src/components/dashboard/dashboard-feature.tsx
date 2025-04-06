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
    "Z1ei9VNdXv742RdCzks1ZmNP3j59b8m5JvavmWgf49FebZueDeFQfLJeBAJgXs4YChyieLHoqPHb8dvAi7jJodt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rTMVyMUnQQ1yNLrKmaAappefSJsfkoQMas9yqHeRcC8LSfZjLAfyEGUsNmsu5CgH18VgxBES4qSR3GoKeBWBiM1",
  "key1": "623gg1Fnt3NV1rnTRKbrPF3vkzH2MxHMxcoCGiqWSw4pUHHmAxhRp9gbTkSPzMt4PPDKU3RriTRPwRsaF3ZYaiAX",
  "key2": "3vyYpWQKqLCGLjpJmB6mTRfzL6eF7Q2k37pBsEVXeE4AC11NkudaZF3apjGj2dXeWV5JnhfPQ3yUU2nyXu7e6Ron",
  "key3": "VkhtHPhuwZrynMxvuno9cCqwXic8LDNJKHCtHmoP1HtkFxbXwhJkya5szEZTfPh8xNaesD7UMxLzi3WZmyATJd3",
  "key4": "ATSyEq77CpSgxMcCC3asVQzsHZWoQUg4BNTWC6QYnFUakpAC4eCKZbf79HPecRtxLu8fbgojTpBjqP5c1ZhJBYe",
  "key5": "2FtXeoV6NfhhVwrvvcvRR2Pi5DUw6iXTG75Ppm4oKFk2QMeSiNiv6y8Yt6VdredWhyW1K1VxN7Lxu2osu1xvQH2a",
  "key6": "5fkZwCoPvSLcHnUXdK86ZTAa15rZp83YbGi3iA4Qb546BJf1fnFYu1eZBAcTLC3uU4Nv76JNqTkjLZRjsCDzbjje",
  "key7": "39QnXSBm45PKEZbhEYpjLVvdXsp58zWhWy1pvqgYTdQCWShdxxczQ5AWQwKrxQK4LTenphtTNwVGxXCVQbs61b6z",
  "key8": "4XxLdtJp9BDjSwmjzh7p39pMzoZjfJ9xcar7mgHbeEs3pjzMmApFFz1GEuLuM7knq77J719tk78qkqyLcS1BMYP6",
  "key9": "2DCkEVRrCfZ2c6NS6Hg2V5RRKHFc813yjeKfXwVJAhrVbTvqg22WHjJ9c87UpTanf7DtkneMRKwEpUUCsqFYHPcK",
  "key10": "5zwwnaNJRnpNUz75GksWAGGqNK3bUVUGQFJ8bbUoV29wrbYmomsDnEPt6rqEwoPCXkB8XkLBLnunT42tBn9f6gSc",
  "key11": "3MBRGPnMR7runjTQpVj4omTd5SreEZHAySdziiMBp9HwrVEjV8XSf4oJx9iaqbqtJHpxZF3kqBiKPFLGg5yyJiPv",
  "key12": "5K7zbxPaDk9gpEgtTv1DyVZnQf2BZ1yGp4ebGJGaHh5SoJsQFNAXN6zqKNGuP4kccT73yW5KAND2UTR8GHoabTpv",
  "key13": "j3Paxj3e7DEWrGw4GyqYmB8Dsmn4Jz5ucWpzfvxe7KryKajka7fgXo31ysRn1Rc4WWFnysVLAnTZdoWXAk2PCN7",
  "key14": "T2k2JSTW5EWoEPv2n4x9dK7mCsDsZwEVBWS4HqGhrmDDD8MwHfhFD7Jx7PANNciZ4XLfx9umejS5GwuTSPp9gPK",
  "key15": "zy3Hm8qN6y2B3EPZdfWpnp5Fx9C7avZbmdBxGVT3jeTuARL1RDh8icXTcdtjtZR19ESb8fguZfeHyz4DpeCA7QL",
  "key16": "5T3kxKMCkHHFBwEvGNKm4RNPLTMqfpAxFGBDpfNRTvHKMUgyFGkW1TqmMER2m1XrcSmHcKcac2DB6g9Wwx5A52CR",
  "key17": "3mAZuoj4m2VuMA1oEEfWPga2Ns5HJXB4fKScmrr4q1NaKkMJavB3MgCtzns8V8BmSRLYqtW71ESWbAPyZcBnKF9B",
  "key18": "4RuiVCrgvvqZhGiyY1C3eni1Q2MMQc1HaJXY2fxNbvB5tWVuNjw4AVGKg6u7hpvY3MEqrWsSkEMf24ydy639iHjS",
  "key19": "5A2mD6tYnMrcYKNKdzukfSnAoB18hw3omXSRqa4AGrqLaVm1QmNuppYCU8xYsi3qK1iCxAx5SvKdZyprSLvVVp56",
  "key20": "3G2T5R2dMecrc1pEbMU3wq5MJY8bJDfmykWqh2WpEiZfwSDnWMBTvQjUV2iaQKZ3KTXiAbCJA4XgZi7fm7Tr3Qc",
  "key21": "5GiCsoLioTbJZagcsHy7Pk7uE6tpKKhhuKYRpFugoAm4XZTAE425K2TttrWv1LXhirVLKGEbGx97ZXXLpegzMcyf",
  "key22": "2eMTnXuHjuKm7APFSuLTryEhKBWskUFbH3oqB7UPMUW6GSd2EZ1CF1t7aNKUc7Y6j3zVyxpQD2MSjus7i4UyjLGb",
  "key23": "4V8Aphbw6vedmyEc9Saq3FeXKefvP1Nt2L3qNQjyNjFJm1FhXx3r4Q1hhfuvwzyGhsUnQJop6iVLYEd9oQh1MBXu",
  "key24": "KLs3Ab7avyJcJMPmAczw8KpHdmvkfDY7NjnCSMYhaqxMwP63mM3juy2jMYB9yj4Smobe45ZStDdkcH7W4VHcHhz",
  "key25": "MCDX3qwzJG4NAMAjwAEt5KfQKqs3UAf7zsTKttdaUZCBmNvYqaan5BNdZjRFpM3B2p9vnXGL97SGiycHqHpfvnM"
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
