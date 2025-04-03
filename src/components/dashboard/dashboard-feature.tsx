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
    "hBGTuPWPKNvyV3B4H2BaMeTpza4VWD5wRh5WopesDPuaoymgcvHSdob18RLU544s8Kax1ytmdyf9PtwGx89ijoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UN2yE4WDfo9mWsb5GikTYzjRitmcrDCtb8Sdo3gNvQNVfti6ni8P36zbNZywg7pwAHKtTmzvz6XTgm4gQCYz54h",
  "key1": "37UYSkZe2ohZVzgGusFxUJdG6PdLXhntbyQyaYcPicMDh1aK4CwaTXocsYQRJGp9RCEAxDWvoLDzFLQf2Hmd7ihr",
  "key2": "35maDSoPXCBtmjvfFPxvWWauPDXYykZNAyU2APtxZtox2Ms8Lu5xcLodu8u23nXsSAV6hEtnDV7aFLB9MoUoeaV2",
  "key3": "3V7AaDsQL62YkUmqJdPCzZEQ2yzGV8JVcTVLD9poTtMiAAjwBGWCo5SHpDHPjB376ASN5Tf3LEmafiT3b6bQg6UF",
  "key4": "2X9jcfHTrCrsmr7GwjsFneC4gvWvxDmoAnmzCHWg99aKMa1hH1E9ikiU3uvvF3wfWQZ769bXizjMVTeTFG2GwGJw",
  "key5": "5zkBBMybeyABt8fQ1i23EC9YtFYzr52eZdhTq3KmLMu4iqpQMibkcZYUGrinVd7tekvyyUmWMPKp3fEKKH28KAt3",
  "key6": "4cuTRhP4Fc5s1bxWmJc5h3tXbKe3UsFNV91UQZywJCBGP4KxVAp24kfUYUssfpttcUbkbpgVSZxvXDsYJsXmyGho",
  "key7": "rYEqy3qxEcaQG7w8JcuPUfmGkP5VapUBpYtDLMJxsBJFt4SgkxdF7W8m373Ukw8jsJi154KKivQfqWJqke7KbJ3",
  "key8": "44CqhLQuCR34UHfC3R9VwqhLx8SfUJDiQu8U5qp2noHC6aFq6crHDZgEoUU919nnncetrUAX481iZKALPw3pdgh9",
  "key9": "vLg7yu6AL8bQ879rmdyTBVEeHhJ7FwyZ14EQ9tJuJ2vS3pLUMGu397JfUQZhJ8YQEhDUnXtHZNweco3T5u4Cc5q",
  "key10": "2yDCpJoyRtymuLvfdcG4WfDm34rhVEWQFJHgqwr9Nvc8QjkngVd4xq1e76rkHSKnAQ6Y7cjibHQrNxHZaritWDDZ",
  "key11": "5h7azpyd63n4C1XhLEG9JHKZSAMt3WvjfwPBw5giA75uYgR3pkXtWxYehpvzGSauy7j8pTCCitLDif5Qb7pcjSmo",
  "key12": "4o5f5hKjtgzRpMphDq99vRTtf2e1VLPYToWvYfXDybNurebVA5gWiSe5Q29h8KwA8bQLmHopYYjMmfgqtXhhar2M",
  "key13": "ECAM21vhYZySdyYt4WJiQTYre5bBU7yeYQeG9fbDN6PPqsRqwdmvUQxZeT3cTGRQ1fBxiwzDRMfrnMsLrg5go4n",
  "key14": "4C6zGRGMbjZowpdgALtGEFwhjuCV7q8hc3Lau79yLoLHGnELJ3MroS6piF9uEJ64Mgsq7maxDjTVY7Qj3mmBygrD",
  "key15": "2bvthLTMWREXDLSeSJ5B8ch5Mi6q7d19dZKnXKaa6FwZv9cBNWnzoFvLxAv9Y5zRobk8wFQA2mg4bJ7eu3DrQY6C",
  "key16": "d5Usrv2wuy53PMy7onoBo89pSKnZMVG5t34aeanyuaiub1Asdbg3PQ9vEjmtbjDKweWKk4EYkg8jwZ16mkLxrBs",
  "key17": "3JZcwQiZWyF8nWpvPQfpToqGE1eswyN57QY9PqcVHfbKW6zDRYsqe616FSt3YTnnqGjFBLqiDCcqKp2jtCsgmDRB",
  "key18": "2Lh4cjyyszwmX1ykRqAUZUhaynTnFn58PSSJV2w1HxEpwne4ZVSpNZWn19ro6RkfgUgPyDmtUG5eVMxgJv8bi6fN",
  "key19": "37au9Y4UdtE69cUSs8G7HkJphQhUoTvmAvx6dv6Q1djEdEvP2hz8kr9bC6Cc89eicHsZK4bm8f4jdnX5ioKMjdd3",
  "key20": "5paNvoDnj95eJ4Rr93GRYRj7XUY98bhFrSGHZag5EM9FuLvUhLJRox7hQw7FH9nTfzHhEAFvw18imjvscV1JKwXC",
  "key21": "3YgBHzwqfV3zPxqSGHrczJUovFXx4yhHuHkQTuzYz2mkQ1BjNVz3Duqv8SWyu7E2xWuCMs492hkC6mx2dHXvKjDy",
  "key22": "y87MXPDqgArihTpeoJVDe3iR3d7n87KiAa4k4K2DGAsMyUwVz7mriNc2S8WqXj7YZgmiP5c6qcVSoYtGU8gDntk",
  "key23": "52sGaYJ9Gdv8BvcqFsDkeHRpY4zj1DzRRg5QzkAbw9wSNkZknTPantiELwUEs1ibseVcdVduw3JDuuSes8jaNzpg",
  "key24": "3dWam69PK3AWNiCFBgxuB5PG3aYhutqCC2gPLC9rgvVZk6NX4DXPR1vsT7hNbhMqCbnRwL1m7GBQcLy4uiXKNyVv",
  "key25": "5ajfUij4PZZZ657caUmSrGka61QpUVpyTGWqCEGkZ7Xt274wSr9yF7Y3DRAfhpEXhWRND6eSikwy2XerU7RkpUhB",
  "key26": "2S8WtYM1EPL53EiQyrrFmPdsbdbnnUwUVmF7SpnDk8gUvXux7BRqVmbE4SK13LX6sQdMASMMcoufdgzvqLidSPtV",
  "key27": "UEoQ7ZgpHMRUnAxHTBnn7jfQMyFnaBQyPHUNQCJeBGQvFcSoeLMRcUbyqGcLUyxVbFAHP5kHacHn63UwM1ntzJ2",
  "key28": "5xd6Syc6Bhz5QYFzUigYgGec6oEXpxhUdUuDtkJ26gz5viLqeAG9Z4pEcYWFfef5esPKvajHgKxsrsZ9UTCUyYM1",
  "key29": "4oheeKM9H5GXtZwkGQZqkLiwtcWZfwzavVEoUjp5DG1czkwnZ4hwMs9aiMBnLDJCb7z57QzuuK7aU33bbKooES4L",
  "key30": "iv8EgvLGFVQQAj4u9f4SMcqaWQXPRWXP3jyFFE6UFGz6qVDPD6Jn8Lf7aFyzjmKbhh1EDwTY7tkCyRKBHJKWFTg",
  "key31": "4mJcqJdA4Qg73RevFiN4nYsa79D8q4xWdfsUonFiDU9PfWLxVkBATMxw7nhgLAp88F2fVmjJ3RvC2AsJRmSCFWEP",
  "key32": "2sRRrMo9Er6RcDkC2JvBYGrZbSj881QEj5AVkLbBYe1P1rA8UQS9eAb4wy6Cbga7hKCYvEWb6RnjMFgAFd7bQha2"
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
