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
    "4SUQkdnu15vAqLjmecdCPbQeDtER8hbq7e7Qtwwc9ymsGtN74XrwfFwTbLrp1DRLDJgtCJ5rR4VANe9ffNsTXBZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LLuqxgefPFxXv5KezpFCg3aztLq2iPyDTNnSK3A47YeAH71R9kBCeDtVHQyzMJyucfbxGg55aq2Qw2uPMuYZbiN",
  "key1": "4xGwhRghcrMKbC2XyZPPH4dzhMs4az6EjX87RuFZ5TQkgAVPEwJHjCZtWeYpAS4vo6Q55PQocGg51hnyZWwmJRhM",
  "key2": "4bFPuH7UViuV3fpE4ZZr1ZwK7v6JPMJTaiGh4PtNomGQPFk22k88eRTRiq7i3ZZq9m83seVYe1CQf9HoJQuhc6NL",
  "key3": "426QEjmwn6xqJ8VmtW8Kk5wp8pPTfmkUNTpqALVy94L2To4SyxCczfTgB2FF8H9B8jY498hPfrZmN3skYPPg6Sx2",
  "key4": "35tvsSoz1bGEAv4UcmEq3KG1s7JKwerApB1eE6FjwqmoPQUnv6KjmMdxp3jErMFLhvokqw3QJguFkRVV6ssApAjK",
  "key5": "3Vxq6QCiQVsenn5MD31gmxjn1qHSJ8MsBAKvE7Faj3zwj8tkwehgQgUqA99pZZCWtpeWJSvCuy43KoBhbbikXbJR",
  "key6": "Krx6sSwaKQLpTKzZtZGWPxgbKa9T4BrJCmHFpNnExHJPHiCV1LAByLAYYDVkAixDSnL8xLkWe4E7JzH8P4vkj89",
  "key7": "5Tcb67ki7zBs4kQvyzNhhrV8mzwns3S9Rh9m6sGtnpSgPwJPpddyhDauWY2C4g8A21e86Y6qJxfi4kvxnd7hkW2N",
  "key8": "3n4zNRy4Y1ALSDmfqfw11miAJqHny47RwihxuH2tctaSs4WnXuBd61KaMQCyZcCTDgXb2zV4BCLsvnexKBwwszjh",
  "key9": "2rD6Pe4qLKbv86sypAGdG81CCLvsGrqpG2ZR7wDwye7k8rXuRrp9DAbRoT5JMUHsxzYTkRJd2twXwrYezJD8qCo1",
  "key10": "4tjQ8Eg4r3vMUAWoXyZY1gzKH9v1T9PJmkyphAUqpj2ahf36y3bRdTGFcosB1hGBPonSYHgeXHJqVEaKRxqfMfYb",
  "key11": "DmAsdwU3qH1kcZC6LJK1WbZmFYD8xbakp7XryWvUxP1m9SCe29WMnd83MdwkzQetk1v9jvSH3kLATejy1cgvMPz",
  "key12": "VgaUhSEqMpPABcKSKKoVdDSKaMVBxt4f2TGPqK26cWVXZwkqeHNUUCXnGyg3cKP4LvKiise1hXDbWM9cEK8VyTF",
  "key13": "3BdKSPpejZkEuF48UE7Xfd32bRnZ4zBARxXoLSDtHgJAysmLwf4SBcioUDVLmkNG7JSkUGa5fsu9zB1dMZZVL3U6",
  "key14": "5XjuSVkT1BwLJKGMsXGbA39GLLNGXyJHvjuHjpaHsRwmpcvctZu5rBaxJhkwWrTZKCC9WACxuWgPwG3Nr1wfA38K",
  "key15": "4kVFyXHd8XovmrmFg7a3t7L7yMC1aah4RFMwb6JaQUhEZVW1Vv7qrR7TviFvGEaU4mxLdSKm8a6jpoGjkJyPfNi2",
  "key16": "5N4rYTpuoU5Qc8Gy6rdYLH3H7Zr3uiLhB1BadJArLp1mq1Q9jeD9EyLVYawKkgVNGAygXm5qzcENYqvK7U1iQtjy",
  "key17": "3Zj7g3m9v7qrmm6pUNGvNqWFmtkcFJtXMfCNVFEGrVGvreWCPQTtYd85RPQrgCJgTJvsbrUwABqavtWva9DEza8c",
  "key18": "5RXhqWuhXWRCnkaAz5p8L2JBXbszvyEA41XG3vxJrFopvd4jn6DL6KNWPRD7aJ3V2kXX61itoN4PWqDzPfXmLBYs",
  "key19": "MCPrfnBPEdh7TRNRSpvxMZ8ncDRQ8FNQKK38yHobct8zjt2cK2nJwmZtSoqJe9N6GFeBKHpZL62WfQLAh6TU7wY",
  "key20": "5crGXdXL7BPtkNQX6ZZmrb9tgsfmAn2bifFKEUFU8aiicURenJ8fgC8koXEf3b4bCbSE1XX7vA8QvFSRmdpjbWbW",
  "key21": "3hKLrDKPR9favgBhkjA8xkCoHucuTjvvmTcFCWs2X5h4JWT17mCeG1WytVVLjkRDRYEMqa6SeQ6USMo5e6inAfUs",
  "key22": "3s3i114r5By9Uocpgz8rc22iSADC7eaD36PZ8RZoUuSo8bnsYFtadxqZ2iSYEAPREmJTp9Jabv3H7mckmM8rpB3m",
  "key23": "37meEwMeVUMY5YS6r9tArhmBpDwxd5xnViUCcQWxJafQXb5d6aDBvkeCE1GhqSrZ47FnDvrwHAkRg9iG9oYitH1y",
  "key24": "4RfQ5f7hZwvGZqF4VZorkvzwBJWiD1ZfkDZJpWpqSpTkrrDCpisiobBBgpeyNStPBJ7UDLLQxZEZY2e9uVfkoujy",
  "key25": "2MDVRTGathhBc4Vf5HgfaV75ST6KxYc4pthEY8KMNGBsU7sfhEGb16Zipiq72qQCoxiKehcFMm6W94ZTPhS9UJWf",
  "key26": "4h26TvwKKHCj1JnqiY9yWmRn5NbGwjbv7aoujqaFYc8PP8P1hEVWrK7FrzGh99q7kSSGoXUGuBApPJmz9ipZa7jh",
  "key27": "5cjz72VSELX5Kk9C8dnKb7Pm2M68pJwJx8WVhYutbA17TgvMSjGvFzU2DoYHCWGTGcVvUfNPQcG97zzMJpErkgsx"
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
