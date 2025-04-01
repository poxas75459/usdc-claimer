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
    "6C7wz7Cwfwoh2qfDXCx7knJj2PN6AUWr5jboBYhYd7xcbq9WvWzdhxp52mXNBxAaaJTkSgN88GdzvcKwYg5LUN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2swM4Qryy3gqa879hWqHzYGHt6vMdCtyiyuVXyuznmfU59dVnC65E9r4Jr4TtywoSHT4FLw9LSzu84AdqUs6BDA1",
  "key1": "4JT5JpP9PJB5tmGKgHmx6pvGooWm18QyZhD48YsBzoT9zouoVNRDzz93X56ouXymD7kBmRFgP9xS2SfsWTgF44Hh",
  "key2": "hjMDgxbHsb8MxhGvtAMncoj4qW3mPU4Z8sw9Ckkp9p137JKHbL3TEB8pjTapu1f57TzRWjzRMsyDvcn7MJyvWcM",
  "key3": "5gLeDhw4HYfwPf41i8RFfkmWFT3y3VccbgjFCofaqFVXZPjV7yEk3AecJ1ntBRNdNGEn9GYuSrf7hvjCxmCoY9R7",
  "key4": "3jRjaYBwN2t9SrA2HsL7y6wBywGqhqccTf9z7gx7AHdR4Fk5jTj6vZfsL6eGMHjtZAUDTsFNcpSV13MyN6DnaYXP",
  "key5": "2y6VLdhreCC1T6xfTegvNS5JE1U1AXjs1tuqsHTbzt2sNk6NJCiaYhTzFNm5cobdyQoWiLFm3FAGn2nbtxDzxbxA",
  "key6": "PmtMXeLZdTy5uBiUWkzoPe2DYSXJ3Fxf7BvfNz2AMpvM7ZNHewLpsRYhqosCyfaQ51n1VbbG5hA9Bt2239iRsUF",
  "key7": "2RjoweDSG8tL1qnJu1VhBt6QrbHUcjysZKqoJQgBpLtTHhkAn5RdsejyaX1cZYotY9nhZJRj3VTRsi9Zy7EoCLAP",
  "key8": "26xnthSN8k1d4Ho9zcfUSLCeX3MfCoHu977yU33SHwQZ8HU51Pc4cf27Eq6X6f3tmMFQoYvQk7RTLALywFdYCJsh",
  "key9": "2PAMS5wsPrTXoq6ED2RYmWDMfGwsHk1YvccRYiJmRAUADszigD1sBCMpKqnsM3sSWsnxt83J6owJUa8a8MNKJazi",
  "key10": "5Bx6Rjy7UKTbYpUYTnRpNNRLWwurpthm3NkhoCEZzJWr9rypPXYoFx1tbejc1RSjEMLSRgAvf4HaZPXkUoz2vLRZ",
  "key11": "8ZdbYz1SxUst7PMQ7vBoXDjDfojDUqiSmCybK8QxtRWJRy4G5AvsXeDTjjd1WGHAKfHwKCZehZ5ihUamN4maBqx",
  "key12": "DrjaHA9dRju31RjXSpeudF1DSu2MeMLkV1DmAVEi5VXiYjBjQyM81yKtt9L3bSNSuNNKRzRKxXghX3R1FKWiNSG",
  "key13": "3bRB3kjJgmZLNY2EbcL2xxjAknSiVaqJ6p1BuP3rineFoZXmxZ6fLHWBjRKsP1GwUiTbgDR8uXvFJzHX7hEraHi2",
  "key14": "EgUirKkxn88FwAg3eYCwXC4qznwLU8iShrfPd6nN8B4vRsb5mURLziFjPzeekvNzHHwanhryLsRt2viQmoEkyCf",
  "key15": "Ef2M983zfTitRqDavY6qhLwSVFduoLU8FuDm7t7Xnf6guSs2m9HpZXTrSwaEyT5eYrRbgL8eX6YVAcC4XbcM7Lb",
  "key16": "3jE1dntWmin9GjSYnLp6G5r1PHHhdUxWJshLXgcAcdEdW1vrRirTye6Ms27JtQZ45sChe4mPTD7XhkcQQSRau4Ex",
  "key17": "ULia8rt2dXgVckyvdxn8uYf8L1YJMQwBWHHReqtpJD2tcMqLBDkmCZzHscfbFTiwyrdb2CWQwpWB5rMQeKPpPbJ",
  "key18": "24qw7FKJrmjYxyeyhp4NZfP6iLXUUoXPJGHvcNDnisPNjPvQtERB5VfrGcBDRZoRcsegx2Vn5U7pmbNWJhaqskLc",
  "key19": "2DTfsKRqdrtuzE1qXSRXup4dQXvYnFYmGkFnT1zLujVqVKy4igMnBpu3qkkvpj5ByrjUdEEe6gEf3NfYXvZcftRT",
  "key20": "3poRpwphxdVggTwurj44yR36kcnUhY7Mqn7RAshG8VhW3GCEoXbZFB5e9ybzzrfbSFWvFQMvE64PTepfyU2HrJTg",
  "key21": "4FZWYfXRF1xra4cboXmz4zn39LZPGSiXrZ9iNvXiBTmUwW3wEJeK2NEYANtLuLqHGW5TP1Gpi7MJo3aPEccu5Dxn",
  "key22": "45iQf1FvtfD6YuaFHVBV8nHSQ575b7LLvGEgQsBV9qMXwYpKn4ibLpaqc767qyW9ME2gyyPpTKL5omBXi3WCqtNg",
  "key23": "4oppkzakQJb2qgpRESyh6fHewUPfUxZj1WhQYYxZerVepRZdKkpwf7HiaA2DpBAP2WgG7txf2BG6BtuE5ZKqvCct",
  "key24": "3SVBVEWkkJEYJbim1Sm1yTzviAMXcEi6HSSFYeySWE7rPcYvrZUnh9Mdwfa6Ex98pVXhvXn3sZrKKKt9WPAKLMwM",
  "key25": "5a7H2cgVjb2v1fRzWmzU4ziUPeDPWWc8AbJ6f8B22NDEcRKruFjWxx6Nx5WbikeiG5LkfzZoPkzDgG9RQrFsG2mW",
  "key26": "4kMtrqs2Q3By339o1PzNsEnwyse3VHPRX7LnNFqSePtVqniXtb8NPRAhBCfcSuvXxnvbAa4ZAJnxL8ZhyhaWFW3e",
  "key27": "475MQEGQx6H11T21b3d2JoqVeekBKM4jAvTaT7NVzn4gTGSNdELVWbL6r8D5AuNwbZCxQNkJCN3ZQdhKw49UvUfW",
  "key28": "fjM59PQQxxWzcfkyciPFmMmu2B38C8BXMH1tEytHQ8bzQ8Fc7EFFkY84EoGEcsVM3RC4bX1cvU9K9dysXRNWHh6",
  "key29": "2jYNnCy86fzh4Ttr9PNttnVuDEqsGFugrYNrVQu72B7FHRFwSvrmQQBYmi5qL656pa4qAPrqqSFihSbuWSJmPADs",
  "key30": "534QH9PAae4jmuAUFHNZmPAXD4wpzGCfDmU3TSJq9ACJVNjz7Bj9z8viP7bRGcB8zdSCFVNQXoBn5zodPpM9tvLj"
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
