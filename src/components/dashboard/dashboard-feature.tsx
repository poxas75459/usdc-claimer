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
    "UVyUpskPswYGQWuhxDCTQc7thXsSTLpEroGMfyxVP1NKDXwihh5FVqTMzjw8u1WJL9wf2ssbSoRjM27BTEumRU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28aX4UqdKZV93nRgSBW44hzzu1LoEPdZW16ERMwvX22Mqs3aasCa2SNW1PpNH9qKMiP7Hi9hivoSsbqcmCfYnTgy",
  "key1": "3JAFbqpcz3ngJmspJKAyfoWf7336bgTMCxnQWNJP5MmEsm4KqgAcxdJPpfArcp7M62pyLEEvzvTCgAGTRMQRJaGH",
  "key2": "4rqEM84JcSeoZzCsBsXUNCKYVoRDmQ4KgsykGDKysWxRe5EnaCkTPJ5iCpGRrA2LU6FSB3ykYauoysTYJsZh3ezh",
  "key3": "TckoXXPnPjKX769c2fKDMCRvWiDH3XS1Q9wfPSMBnq6rFQeeh13udYVxSn8ZoyF97YW7jvBtsb8LQg3BTNdGWCo",
  "key4": "2c6NKq8g6o6byiX5M5jgKrdNG19iZXAB1Qv6b6kebaNXzJsmPKLauK5tgEHXAeuREy2rtoLP2SyueXmWNqxepe78",
  "key5": "2t7ZaoMEkQuLCciRqv8T87uB5rqUgaGgFspKi8Nk9PXPyAdPtastkM6DhKvQ6Ge2ACYYREpj7s7xrQUE8D5xQdc3",
  "key6": "281TmG49QEkSEccJLySJG8xv29vKdaWkhuWN4ubM5LDCvKHjwVL6K5dPc8d7LJ5twShiWdcWRKWCTeMsnqy557Ae",
  "key7": "31JyfWnbaFUmeCWxBuMX8WgtkmtyKyJdPVeakJCMnr7G1KKuwCf4M6zoZ424KBcAc6y9f7YunkvvZpUmEwyQDsq9",
  "key8": "3A2GvCLu4qCTPC1gJ1NsLVi8Zefirc9hJujwSd31NS3FyJnxT9AQmaUr364m7xC3YL1g7kjhEMEarjNrRgkoVnns",
  "key9": "2k6Cg85iSj2Hfh67uj5Airm6J3RXjuqCAyp4bPbcsNg4phkQMQHRWQt6m8aLW7yuhhmikbKqoNhvVeyLEfK2EAbx",
  "key10": "4u5XosDGv5SPBpqh4q3Q7TMEhfKUXGm5NC9z4sXWv7ncDuArLuFmkuyue6GzmaRJm4fPr48pcrGTkFzp5EqcUpti",
  "key11": "34MdU4HodQGuxYLWVeVSLZhtDa8VjpZKA7EG5DpAjMPARYCmrVZ5aJX46v81LRyirZurjdMvZ6Ln1QmLaaY4KCyn",
  "key12": "3cvQjx3eK5XJtzP5ujSUtesAYg5mHpFfqdGYNcEEAGcjZBQCvUgmM7wLBuwt1TTDC2k4tFt3orqWgfdfUzWVKNSq",
  "key13": "Cy8Zz7qYiip5Skrd66AnuiydorLG8mQv8ob4yjgWDrw8gqfvjDGSpDK5SLNgMypNHRA5oagrdXqcsWgT8RwsLSr",
  "key14": "2y8J7f9zej9wzxNcjcLDHtZ6KymTgdk253foaxHWnDE4LDytUpEQeXoBqmNrE952HV9W5YufReTpBk4dF6PRAFZi",
  "key15": "59JRWf8WdJ2CRZYiTogmtqhPixR8UDesbEMKJqxBC7tFL3jZQvWvgzr7SqNRfvaxp3vyeR3CjzJw56fo9n7fe3xw",
  "key16": "598PKjTWqPw7evMXKyS7xgvY3FbB6oyiFub24HTgZ7pNWRzHkNc5PbF3RauwWLgwGUKe6Ucg3gjns8M8vuEmjXcC",
  "key17": "ivzWwStSDqUzRUWfdXzWnPpvJHmR3gcdHN66RmAMFYsMBqhskzPtxaVkTU7TdpTBpg77ea8K8XpYhtf41cEjMx1",
  "key18": "2jqJm98dLm2GmQNfM7XMiZMwefYZ7bYqvpKCyf6bGHQwhh1m5rEEPEfwnRRJdCzP5i89JKWjfQaoyoqN9GwQrguo",
  "key19": "2y5SA12xDZfpKdWZ2vfhjYHH3wRdBWDgtt8yFEMZfrpg4Etrn7Fqdkr9mNZGciP8bYbyorMXuRoCk3ZwwTzDqNFo",
  "key20": "2cbchdEEbh7BsQajoJqs4DimVSj7VKF7XF8oCPCZuYqoYHweHwiMzwRXKCjnSmDGHVD74etkhgpYg53RYevieu99",
  "key21": "33Gw4hJMjxEdUAGsEgLNPFkjB99aNDoSMNNrpAPfZ3zBYAhdzfURbaztVXKQ9h2FB1SH3gFnNC9VXLF2JBmgyotD",
  "key22": "3mM6axRYsjkQ3Zeh9gzoU1EmvFdVw47vtajZU9zXJKKhKQTjubyQVo9YePZQV6s7mQWJWFdSVroSWcqrJc2i4v56",
  "key23": "3EDCFw2eGAbqShvg57KKJ1W9dVM6GA1QY8umUWTQM1xwEY3GLuRsQra31S22TWYtXVqJiedTNwMPhvaiSfpnCajP",
  "key24": "5dVFqnfAuAYCc2RHThfZweuWCw3y7Xk5z7bx6YCEwoUoMhWt2sbPYqz7UEZHvkPsAAbxcNdk9jHfXq2EpQEkv8pu",
  "key25": "4ufAgc2GH1Dwcj76TtPuZoB9qEG1W9jHdGLT7zhZUs7FiN4ubf3nWLj3thA7LFKcCxnyTCC9m3uerSAKdSFoiyvw",
  "key26": "5UMSNfv2QGPhB45y9ommM5NC7B3PtpvuAJEGu3G3SRNj8gW4FgVa2MaWDs7VWtHgyaNQyDtthRNr83WtcmuPk83N",
  "key27": "4FNdEL4esd4AcSiYevFxo9cpe1ayCsxAc58M6g66GvUboJuJFxqn1qRCMDmDopZhqinwyVHWkvdnYXsECyNNjtWU",
  "key28": "AfTtJSzdP9DuT2L4nPdpaDzvLagG1Am6TmZMgnM3j3wUwHbicMEqpS29xjRs5LJExpXtYV6qxJP1rMBmU2X14At",
  "key29": "j9vHDVx4HVJFJ6tP7zDGCsMKZTNKsRi4LPn6ex5hvB1b84GdXX4hEPthXt2GNYFtgNeei7Q4zbvYsnVsz8tMro6"
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
