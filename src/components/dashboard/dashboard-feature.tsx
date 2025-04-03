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
    "3BExxybEP5MCeXGHFBsZhxTdytGCMpEsMncpUJvuausAH3P8y3k3FPuFRAkk4AF4YG5abXPS7Q8WShx7C6GyFTRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2caiffZd9mhpUGkLogFnWZbz9B4wK9tr51tiawzFcVtBbmpjyFEjKE6qpy7XPcu9pFyxVBpMRBRFt7fGsUS31qum",
  "key1": "S4HDKH7tjCUZ1HJg9TZgodjDS7TayWZH7sAKUqZKevbNHnCmkJT9nTTYLEhP5LE1JJt1mruUmJyxyxMhW9xRUHf",
  "key2": "3K5UhYCuvbx7pcA8yh2tRKjXeZtJuLogTkcUuvHHe2hwgF1hf2n4gx7jkEJsux4HMTxT6tVb8Q7fz4K9JnQL5879",
  "key3": "2Dg3GYrjbHUrSAovRwnozibkY2dyk94owtkzYYiJSSKp8JTGcQ3xTXCLTGzABfQMZXdHaZgVTfC4PLv8mQ67r3QH",
  "key4": "39uaekTE4HErxqPJtnDzebSwwnmQ5oQgkDPKMFV78RSjpxCMJNvjJpH54aZ8RYZ89yrH3vtByEWBgZJUatUsakYM",
  "key5": "52Yubw7srr9CxDGEwEWb1t8DrBAxM8FiKvnKUZxvbwmyFbBAqiS9ErZJkrX7SikS4sJaMBnjzARgsP1AVvDYv52A",
  "key6": "2wW6QTZ7YKU3zbrCab9aeyPyLn9o6Nk4QdE8TL9R2PKDKvkvSNkt3dvfftPENb84Ai3c6KxWwcd9Vo4aNAi1Gvrj",
  "key7": "Go5MzU5rurUQcho56TukeyZAaNrbEr7Vc6aPD6fghcrjxjW4Y5URt3svMyg3Fv1ZTAAhXb3G8mh3MyxZ8gY5XR9",
  "key8": "2G3D62gdw4o6DG1vFGjpKBNCKAPiZWhsiQvjKofe3i62U3Q6XY9XbSdzRWKx4KZLZNhFWRurh95SFw1bE7naHKta",
  "key9": "3KEJWuXQqtBcvhx5zkSLJJiY43pzWxU3m7vQJ8jDYME2E4R9poVm3QFgqVx1ou1sC6CAZg7ZJJzTrR1ZiM6hUn58",
  "key10": "2ffnvPDWBpAJoSxvBUddPMgrnr3N7gYiAtFCyBmWeNgSFUSpGSMaAmUnzTQ8DinB5qWa98MgqSemuvePYYv237A7",
  "key11": "5dGz3DkR5tULnthN3RQSbdFbpgPpaSDaiMPi4mN9ewi7vAt4KK2ViNnqZRHnqPU67CnpNXDYUHgCLD6do8CZ47ta",
  "key12": "4TXvoAVoKNX8dKxWeo3vYVKGo4oSPnEiggLXbkRXX5HxCpDedEkAhs4SKKCzhKYBHVdgQ8xU611Wkevy68ARCU6t",
  "key13": "47tEvNHNRSHstomoELCS75d8NqjDWD597zoR15ZqZzHBGkvfEP9qqN6s7pJkmubuktjZGrrNxR5UL58K3TFhtNDh",
  "key14": "3cxf4MLoP7jurjWnm8vdWiFpdqPcaqyF7LweQxxJHNN1bLk6Ssr5LXxzMVms75LLbgnCvHg1USY86DngGfXCbgA8",
  "key15": "rDg2UPgziGHWeykQnvPJ85Vaz9iwBk73XBVpTJ2EacHVPum79futyupPV8URRHJvmZqQ61nskN3esqYvedDN5dY",
  "key16": "4U969CLfvFUKM3TV9sZSuJCmGhzXy2mtbdizaY36o6KMGkBKHKYW3WQgJ4KgeZM48KNGxc73BFYvY58GgegDRfhf",
  "key17": "3pfRvYDLB9DtPyAQnY1Lbh8oQjCjB8G2LjbWyAHbsPQAFi7DQJRdJh6HFE5pWVGnNSmY9SaoHnjK4coWgfvwhAxF",
  "key18": "5BawHnaHfcimqRhMqP4wZWgDxcpYHQ7ET3bkqLSmne7oVPAS71apSfX8yKfMTfQjtSAZ3fujZZ2gerciwjcg9WPj",
  "key19": "5yu6kMLCNMsrfebRzHdkmC5zy1A2wvnZ54HEoELGyb9c6EMhRzTfUqHnVZBm6Lq7nVNrJEUj35az28wVcYtxcxyc",
  "key20": "2NCB6ayYgneoNTdfFf3mELexF3DPR956LEyUmMuJKpbSWpbT3Cp8pWrNdueFz7RCxinwC2VFZtQDNLhqfhC1QTk9",
  "key21": "29Rwb2PLPWyS42JohxnHi8WKwtXmoaRxtLC8vSU36bU4vuR1LX3kyrqc8aMSXZPUUHR4adPg1HzdfAVW3kPJ7LB8",
  "key22": "38jwxxxEVp1613B5Wpy3XiG8hUaL6PFbYjmtPSXniz6Y3wiGWCixNPXM6B6zUmpEXuP5tLRWinnW2Q9TBNZRuuEm",
  "key23": "4ekDqoXT9S11RAmt2QxNDJ1d7Pd8voAGLXn1kkH1Kv5nMxhznamkgGTWrTe6BnJn9JauUATruJX8wGSvuu6Qf9vt",
  "key24": "3kvdvi99DD7h6RjVf7W6h4PPLTB3LpbVFMzXTNUcJyosLwFujBLocEcYfsseJ2RFwtsoQjGm6wfyHiA1XeXqvQiL",
  "key25": "n5nYSuKEyj5E1P8ZxkGFyCV4q1HjBAUNHbEWhbNni8eu6DWHgc1nxssms3BbktMVDw9afAkPs5wJCpQbdWsbv1n",
  "key26": "61ANmqtBAZ6uWrDgTpYAzA28CmD8UEifgXcXPsxjQLpsudJEChqbQyaod1sbRb7LTzQWGh2uCLaWJvxJdVVpnia2",
  "key27": "5NdmEwTVb3WfwVBSS2vRrCboaf9jL5FQrJRnWSpGzRWi8vVJhp6itGdkS1zcFg5WKRRgZQ2m9Bk91TML3yAShfbc"
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
