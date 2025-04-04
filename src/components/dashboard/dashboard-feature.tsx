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
    "4JyoiVEYknBBTfXyeiXFDfd5dKR3wt1RuRpiaB7BTvJVPrzxgNi2bLkXezww37BiCtw5UQ12ca3KfhAdKeDhsYgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i8xSSF6tN1kSZxtMFfCRGt53DwisaDgBQqHwADTGygnXbMhTNfUeBAci9yKKsh1z4tLnSEqbEQojtSyJTQCzXnF",
  "key1": "2wTqqd9LeWw6P72fiRPq1tL1whdHKBxmekH2onQn3tJpb6R12NeETzc4e8umQY8cv4smdYrdkwraVhqtUS6oAGPc",
  "key2": "4umcZ9d9sWCC2PtZCGrfdqTAkbRNZUanrHN16bGvJjDoRrNi2mSAoMHu9qSxcYzXTW9PF4pPiDiuG1NLP5ok79vB",
  "key3": "3KGnUAk8jovoP43NQT9fdkrEtvtnMQADcBs84wtjKnzEdk9JFuZNA8LRbuD97vW7bTvCEE5WMNUwYBdENTAcPEVf",
  "key4": "5K3KujyqyZ1LSrwHHKB7SaKXyc4zuVidSKHDYuq967TGLwg9vakySm98Za7W5bYnc61apjq9yWY6cMBdgCsk3iV6",
  "key5": "NWAzd6sUoq8EP1MfBTQUp36ikCBAciSVVrq1ppi4auL6rTHWeEApjKvF5HjiADbLrCnbfsT9CopTxJ5YXFvDtoS",
  "key6": "4QCYMRwVyedFRTc2wn5ZkRFz697UGx5knTmcK3UmJcFBP5i74HsLTbJG96iXY7UkvFsWfb7xeLKtyvCv1vwhDsVE",
  "key7": "4Bqy2zsGiBEEsAxXWLBxNvQ23BBhcsnLTSKQdkk9DARNdC6CnHaEPNzXyfzfaXLZuxEWRVpEt3n5Gg8a9PEuqjru",
  "key8": "511R2Vjep8yPSyobtG2kXP1m1zHALUCaD9cvgr8cTrMHZnL5QfJDQ4TU5XX3hQ1LjpFdUrcj2CEyP24c8xXCvbFa",
  "key9": "3YeGPVLHmy5yUGLgCtYq25qC7Fn2RPV5BpsPe5ezTUY2w8ShgXmbVXXaDzRJymqh37kKVsVkhu5SSmzEgTx1gNQf",
  "key10": "5KDh3xu2G1r9N2cpQVMSBaBUBTD8DFLACgFTWrSZExvAnc44Cs79NAL4pSM1e61EChzS8eULjjzvb133i8MqDUJE",
  "key11": "5VtuqsJYDhmfgafL24VWy8Y5KeUt78cb3kdo37h27ahi5SFTNegbi5E8r1wQfP6dJcsFecCWZu7GiPaCWCEUFd1d",
  "key12": "3L6bdpBUXGaHNP6WPQmfCqBi7SEBrSkFgFsjM116JUUTomB1PPBDDvkpreQxxwzpWtsyswk6zUgFNy5XwozYqm7E",
  "key13": "VGSkLtmQEf5WHSBUUEmeD27zaEqq7LPaqyuwAYZ2ZsDMS6uSCSYBcFbEPgzQX5bP2AvXkzM27187x8wsTstbNjG",
  "key14": "3FkTWJXtnPGV8qghVMfxSYpm8Ymcc3eupErqKxYHbbEY8aWMU8UaYiAEo7cicUaZkRad5jBVHeaWUe1qvydtNtbz",
  "key15": "5JqwQ6334Hz5t1m8NQP4tEUgpH98s3qkvBaKfE5RdyFsnpjos753eZsehHHZhTRq6BMAz635JBaoNPydDVZ42Lo9",
  "key16": "4EVY4nTes5s1X7KpKEUHALTFaJZDCLNNHKENTZvF3G2E7f6UaAqTPS461b7y3ovapUUskkeRu9MnEwJjXpY1UXXT",
  "key17": "3wC8w6ExGBwgLFNpLUxjicXqJyT7GoPJKaM9T1zu6wMc4DEuChyYdT2XwMbKUsmNixXAZf2zXFPTGhB93aVAf6g6",
  "key18": "5EUyVyU8RFQJpio7jhAQjcNqgzzaav6gV7wEh5KgRQtmNT1PfTLNBaQoWemS6FBKUqZZnWY3BtsCMgkUc72FiEWa",
  "key19": "4RzPxMVHRrqwx2jefWwMLigNwJRRTaL2CJkLvjp65wtZguZWra8Y6Z7vXm1kyTBroWN6jy7JDXiWZKgYu1jjsXCQ",
  "key20": "2bYBD44ikuUmJQcitNynRHvx5kBpgqvmnyTaxoFtEayHyzASzfdV9h4PsNGAxFCBigCzZbY8Qoecn3aBLWZPG6Nd",
  "key21": "5FXjMrXiYfqaT8owmAYgeJQGe2ANzFiH6F6keJP3mc46PwaPYT5vPQJfkfnr95XeuQsKtRNXuA3eSDG7THxVDGe4",
  "key22": "47MRG4PuvXRKb47uUmFAtpmwL5i5FeHHZRYdo7LRaymrg63MZqEegMqefNQJvozEUXFm4z2qB9CAwg7igcyhNVRD",
  "key23": "3KxLry5oBEiEMBmkSFgYyQuxuLYnvNJR1nJ7kR72sA75umraaxe7YVMDg8nhYBZ8m5ziCGjh5V98mbdBWrNErUGM",
  "key24": "53DWf4PfW3GRGBB1tszpHsyrZUrkeyBkh9HADustP7oLqxRFhnHUX3mhhEFnoEmkwXn6YsUTAf6FQnMyYjZNXiNm",
  "key25": "5JW2MhNNhYwyp93w11jPtEmBoPyWhMr7aHM8WsyKotG6oWfLLXJgcaNhzf8KSkjYuUwxpian5zZVyKF7bEBL9ysx",
  "key26": "4hxzz2J5CCMPS4fPqMxcd7dZrj8xvQTRAfSDnGGu5b1CsshjTHHxVMoX4NZgttJz6NuSU6MznhUzyrro4PGzJD66",
  "key27": "4ETHqiusUC3pwGaN9WgYC7uR2bjqTLd9FcVrg6kU5vbSBEZr1mrH44LFVH8rrY7gJwqk5APgFg91BqQ5K3S4nrrA",
  "key28": "4qm8VXFJDpekSJBXmqrJVRHPB78uS9f7DPZUxTaFjNkc9mZPxFHTGhHBUCXEUDr5HYpwCAEaySuVBwpx7wCXZdXu",
  "key29": "4J2qHWtXV3gVDBAVHatPPS9hSGx4CEcoQ4UpFjTrSoFkiyrnpW5f8ev7MPD95LsHxVzhA7VP9AiCADikx7sc3nbF",
  "key30": "4SJneWPxove12TDmAAPTDevAr1n2US3LkPimNp9YPhKAbHk2J8niS5Dh9DqNrutZ7TdKtxk3cTe3AUM3YNZp24WQ",
  "key31": "5gifG1BU68MuTuVmfjoz5nxEiZV1RwsB9CHtW5p5G9m42hEWgD7yQdq4ZUxcYYAAsKufMwYrpxotFbEnZvJPWyLu",
  "key32": "3Sto6JpXWvaydEJM9gNCHeG9FhNDGm3ed3kp9GS8EPH41AP944ax1kkEZgF27nY7HK3CGCQLpJ7yhCwqpXTyCCBj",
  "key33": "j3tSBcL7ErAz9KCLPbd7jxZm71b1qknrgWrUCzf3kr6QDyhXL3rAJjL5VyyhQBgMZm5gueiTw1JJxZ8QtCS1765",
  "key34": "2XUjYKYqoa1X1bc6ovmvB8Dd2gBaPh5AoH8ZjHv25J2EBERdeGKLDcyLR84XLvgSpKqoLohGZXJJDM9tWxZnTQw7",
  "key35": "QV7DVVhJqWvpvZ2RUh6ZVeoVbYaxrbpKv6WBSiswAsNef6YBEW59ogRbdVjJ5QapVAgJ1Yi3fkq62ibSzaYmddD",
  "key36": "5TPJo58y1ejKoHTyfebXYQbMciyZQ3a1gHfmgTHSP93y2Qb1xpH3euPsGqgGNEYZYQHBavRb78qVQcMEHScpCLA5",
  "key37": "dKtB2PfdVyDW61w7yKNmYgwARdAHsC7iupDQfYGHg68YrsEENkjNv8BkewNpf3xfwMDPzJCmPbdAEFCgZJ7mzH6"
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
