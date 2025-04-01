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
    "4k3ANPzYtxdLtZSnAgdSW4eRF8dKNDQDH9P4nSve4ArvLbvyyc2EB4e4eR1CWo1Hyza6yBQ8q4QFUYGofXJk5svM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Es9vzxKGcauVXX1nnptJvMtxEM2XZZGBiiJdgaV8zFWPeaUswW3VtChjvrksKMQXYDZbfL4waRCb5gi724yefib",
  "key1": "3AzY77YmwoCzDuVdRnmafqkRktznit2MoQJpemta458mUPccH7D7omCwrZKj7WA2uS4HHYTEVyr4fCeahkZCuWga",
  "key2": "nkVMixV8LyVtGSZtCkXQuuFWhoBNV2dcur21b8r1iHegoZzcwgYpTyj2x8m18qFd4XeCB799nzpsPLKpRb3oY2k",
  "key3": "31LXHDhbzo59vGn3nhhyUxGr2wqayaNPdKH2pRzTE6WEEfpi6fRFgQVjv8iXuuZb9nTzBPJ8d1bA6GCEqxtBWjN6",
  "key4": "3nokXmgGKX5YjWQitmxBvGZwZSXwxATQ3gGBhMbzXpsozg7H12QGWnE2YrVBRY4S6dNXGc1JNYz5JYpZQ73XfXC2",
  "key5": "2ZyUksA13eGzHkDZhMrhC3BdH3TfW5nUnry8nr8KH2NGaiXCj14Gpuo9EeqpyHiHXh96z8eHxusttcvc8QQEJzv4",
  "key6": "XeQZPcQSKEU1FsFNu1E2AwH6JB7WsuywPA4hcRrGPQdazHQukHHnSrNWzY9jM2FmihA2xHpr8JQK2DQvfien6uA",
  "key7": "32NXSCakufyr7jdygjz8qJ6yTGdeTsMUyBW4NjPNKgQo6x3ikEGrPehbazCDSz6RFXXjM6abZFtuzqy3xLSRB1V1",
  "key8": "349V2YNB8C6nKcSEhiC6C2tQx6fmPptQ7S1dzQnbh3ZDHatZpeaEq1JL5ySzvkbP4QVvzjrnWbdVp77ftbUADgSD",
  "key9": "4GrGDkVM1DSEwrcMDT1o7F3gwhp5EqpnNEpnxeenUaUM743SH4cHki7tDAduSC5f5Mg9s7vPijWboY1FMEURkgSX",
  "key10": "2TPXuXA3qBmbqe7pMTCVwaunnS2vGZHUdSjgqTo9st1MVpufnBQfJCSMdF4rqJhdjwT97RjMGKTNLBfYmDSfBJ9a",
  "key11": "3pcx1We7Y2xW9MCCtuSBcuXRio4ATCzM5kY1EfHbAACGzZWQxM6gLzT8ZfMFcBU2atgFTfC2fMGx4n5w3CMFPMqv",
  "key12": "4nN9Bs6n35vTyKyA1TcMrkC4se36USCmUzXadNHq4XwhDsswU5p4BKys1wbMwNo6XYXzjWX3WaXaHkzxRa5VUbd2",
  "key13": "3r9rRp4KLQqsfHixNiNQwSXMXW1fzvQpyRYUJZLoa2Hs879KBrkUhuURuprH2E9bowJz7kVSCtusge21ezNaE6fQ",
  "key14": "657677aw6UDNGQ5Bv2VFqGtgki9v4k8NCeK2viW4SH2iiC7AVnBDkurx23wqHoZzHrTcumhLrnSjAUk5kiG3ixEx",
  "key15": "5gRctkzsgjG18XAxz6BENRqsi57U1uSPPtQkiNpbQ3g5vm6AH8rLDYEsjvqUKFWCMpQEfkd4GgwR1SdaeCKoBikb",
  "key16": "3bNzU8tWs4ifMoMCGYEKFL658k6GvXSCQLU1bVe2pHPqgQZpjwikb7qxg7xs8sAedspMrj9amkwM8n33x1Rz8xmm",
  "key17": "27Zi8HyKNKZPvg2bRE5U9JWvvAv94gcYTLwJMJd9nJSdAQdqnYakCpWFAKEdZddGnFWsTiyC4azzLgEczXeZqEbh",
  "key18": "45muHLhCfEzpE4DjMzViepfvES1aomXvoXwEXm6V5s2aWnS719mWzoxNDUgQqSfni2bgxvgSGm36wtzsWW5F4mFc",
  "key19": "3L2YGTbaWaGAPkQ12x4a9cuSVtfseDmYN97jRcwwEM3mexedt8rEzvLc9WkrgQrC2LESjUGXic7drSXUHZBeehrU",
  "key20": "tFRS7XWBk39a34qAwzgVGBLk7z6hkDAcUd9JFf1qZM3U38mTDeVrTCpCN4BcQtWm5HgFFvxa7Ax3sskmvbqBMYe",
  "key21": "5dmKN9hExKQY3xgfrSL7xmvwhm8MNjBXoYhz1WaQN83rfNdjL82ZUwnijA8YQdwh1bMmXinvFAG1gJbcRc3CDv2d",
  "key22": "3ZH1dDghrC5PhQChMk4neAdy3YeaVVoFDMtDepwg84QoYCrehrjQfYazYq4CAqGtKvpysP1JxY5x2tnD2vxEg4Q8",
  "key23": "1LVhKuNeNBgZHJKsRGS2PzsCkshCf31cJB2uYjtqcheYBZCpKs2z2cv7j5kLJThAAHauhHdcpf9HjxPtU6tbny5",
  "key24": "61bieE9oRjkRsGfMfSYefqkF3WFJXPKk6c79JFcPuwyF5c3jpbBaK2JfNwK5LE1wpA5gScnrUaSywejkgTCyUDzJ",
  "key25": "r32vweKVAUXSr5LXpbGKYE4EZLzZTLZLLpQ4WPo8Y6Qcig1euX2mqyJzD9FQf5kSzxeYfFFqNKJZuZVFqJX89oR",
  "key26": "3eoKA2ZjbSxphfBMej6TKKXxvkDeY6hkggSoW6wrMkc7KDAjfRKJJbNvVQJrrANuyD1zi9Fst1jzBAAk9J5HfQDV",
  "key27": "hSq9GTZta7UhSqn8WMKrTEmZbYkZdnbee66b3xAFkLKmRCHHJBFzonNhHQtLvp6BX7aRfxK5dSbcjPgmGXfT9v6",
  "key28": "3dgetU7SVvXEpFv11xACk8abB1V7HAQf68LQaExVNbz3ALLX26XaomgEnJ1XCU4A19JvM5VTusuVc6k5U9RgrELc",
  "key29": "3Ap1tvdkArN1sRDeMdjx2nhF5cK3PZDW2Wo2qYATGRpYGd6G82zJ8MgbyzbcADUvTCb8mQ4eJpdUVGHnWLg5ajFM",
  "key30": "2nAThJizuerELAzkTbhaYQqkaFCDft9WGpTinn622mAKUbzUDZr3XZwAKhc3cxMNV3uNsR96nnvHdoaGZ4H1toXk",
  "key31": "fCaT3TPdszyhCy4LGzMsjB9Nf4CwD7cojfijuaKqRyvvKaFedLs6qycmaQusCvuMrbBhD56YK1ZkDwqCwx8xaTB"
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
