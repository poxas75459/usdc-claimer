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
    "28Cd3xSuGHZ3TpZ9AjXyqwdLtexfjhbfJdUVaz6o12HPg78zrXz936f8ZyaCn5Xmfc45rTw3CBTSPUZVvRQw7L4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62i9trKRLtXus1EZYJE8KHLAdbfcEwHptKcFWULzSMGAfQUqYUJeyT11Q827PQEBULTRFg2WayvZXX828y7AR5a8",
  "key1": "54Az7iSbHKkweNe2jPTYZGKeBg9nb2EedDuUj5WqR3hA3qpUAWvZ12txQ77RtzDA2kYyjKZuzTND678B7kvXHdx6",
  "key2": "nMgwh4HPkv9uAm7nBLhcjmeJQ5L1t2UXZPCqAqJXhFhPZ4cnfvaKf8w91DXNhw5YuFa9MKFsxn7TR6jtjwjHfmJ",
  "key3": "3VQxEpZyuLqaUGdufKZNVVEE5M6L6TDCoqbuafdhN7tG3e32VakQRxLxtTWSiCCCVeHaserbed8TvuaJLSqzsL7z",
  "key4": "3USjpsvkt6Fu14wHatycSzgRUiz2JQQ2DgiEJdMhdB3VYPMtvDyp4MUgm9xjxcycLmT5TvgMJfyBSmcUezS5kVKb",
  "key5": "21CQiKmHGkq4DhS4BC611qTyS2kMc78ADcPtuWtSRZKqvBKofrKRRjJvFTkCEWdmadfmApMChvvKMM4SfBV2PqD4",
  "key6": "34D16aqSATSTYtd7uPhgBKptUCe79JE3fxaTwmBA2iN5twMbiTRV2nQEFMDYGTWdkDDUUpNUcf1aCMCbUdk52FD1",
  "key7": "2wSz2t7bH5Zhx7NpfVhESWCK7JMmM5Nz2XRANPz5RDHEfP85gu6jZGyecnYcVd2twtiK5D8TAkiZjcrVeB1tHZXq",
  "key8": "4xrxsB3CVj68KPpRhuNv4VfoMdPewc8JEbxTN4XoVxVuNAQcjEwFtQR6NwS1JVV8jAiH3FB93oeJCa9CfMdgKyg4",
  "key9": "2xBxhMS2TqR3rkYR9nL9xLqEADCnDNdUzQX8gsiuzZcRQ885YWvrKa3oqFGyxKtc8pt6Q3cjPSBcEbFgthms9a8R",
  "key10": "5kf35oym6X3yfGBHeSebV44X85Rpu9hvCCYLZTnn6fm7tCRzn6CETTZbV9BxFvAg13ghiuLcHiZ11yM1gvadafok",
  "key11": "3uJJa8EBwXFGJa1pie88rXQayMLpUsTkinyq6nZhFB1xt2aMVBM99DNBKwf29yrDkD3Yn6AFYrZMkZWe8Pdnd82S",
  "key12": "27QkrrS1siGRdUB8hQTZB471NwBg7UdFBTQhyJoVfHvM8YNyv6Xx26dzkK61p7WRW965GEG48aoJqp9BYmvg7jE2",
  "key13": "3h46ZTzfdqi5n69FvjxEfdCPGeh4M4UhpcNXJezfe5W2DbQFMDfcByKHaCn4GsxFixcXYsvioj2FfecH1LEgRak",
  "key14": "4itp9PcztU9EZRBJgsVLM7PYzgKC8m9sgjyNz2DvxCbeqDaoNAN63fqeGkR87AAHXxL24NyDPqzCZ68iQH583Pfu",
  "key15": "2WLf1eGwsuX6UawJQNZCnoi499iuX2H52E12KciTZBr7if32B4p51NeyL5FJZUkDNVA2uiSUcXFom7HRcoqZNsvm",
  "key16": "3RrzPixMWuvnxrZuARaLBpkSGAeJ2XQPS4WcfkdrZfjhzgUsvY5p7LhXaCHMymzTXUgxWyS1rusyMQDkoUEZm1EB",
  "key17": "45NtRgQMnH1Vq9e9GrpUPm33vzRUSaD99rH8sygAULg9KVWMyZuJ5D8BjKaTPmGXJd7GWRwRXpMnnGcVjtSHFPoc",
  "key18": "EYaYZGFFGyMFyRo3N5ZhnfSrqKhJL37opZdPt98MGxH5J3uRwt2e3CzYApUd27T8n7GtLV8ty4cRVUP6DKsFne5",
  "key19": "6DDTPfBXhaHTJw9rc2GA8CgiF2mw7VANZ6PSx6biQB5buaSJDLjFSYbs36GjpLJX2BPkkRsoAhnz7nuABKFaLfb",
  "key20": "GCm1myPcFFyo5LaaXWLUpJUKB4paFEvhAYSkgaxTfqAqxnmk3hy7zNGuAy1tcEjQL9wkVqfp5M9n9a4nPwTnWHH",
  "key21": "DZynpiyKy4fCEM6ZpA23vnUJbu9shTfJbjaWXg6Ry21iXoUU6K5yTN4XpiTWJzpXPEZCxTTf99KWbUKc93fuYiX",
  "key22": "2DE7J5DgdbtXBpLEZKbx4BnLvKJ4inCVUJtNNbsNixvWHa1HEkU1HtG3S8rVtCe7HW9wUTAJTeoGH7Sh4ZVw9xE3",
  "key23": "kBX6GrMiN9SniL6j4MGF7LXmiEhs91NZs7BBVRwe7yGXLoDGPD8bY6TzsC6XJ6G6hjyn6Z2rm1RpDRsSqQ1rtnh",
  "key24": "3s5xZp6UPNvv9V39x91dA8UDyudGz4okkvmyMbQT1SWr9ZupT24bzR4kGLbvFWuXSzFZrQuqNW1qWd5Z9YjVLdNg",
  "key25": "276ZzhjaXJRShCJrjQxyeLApNRnkSLcPWYyiKPWj9Vs6dD8GqGRN7s19oWN3A3pNPM9Et87Uo5UDMyaE7Tb5K9vY",
  "key26": "64qg3kyEpyyfaexwW1GCU2i3A4krfHSKPdT41cDnTk2NY8Z1Doy59VDzgZ96Y7Cy6SK2gDvKfTjKqA29acxv993k",
  "key27": "2r6q1miW6pyUY3Mr1RuC7MQwxgeKKj9XkZi7oqjfpCyyo39weev7zZeiDqesHVUAt9ccjwVzd5CosJFEgQLLEAS6",
  "key28": "4BkcRWTdFZadw4PEksx3r5FAvc74TdNbH2GdYszoZRR4woJBXSigXbNgCPR6WHAhL8cxcCzp2KCZTBDMS7CB1mUc",
  "key29": "4whkFL7dZuwx9kKFG49U7u74xCH6AAPNW8myrezYyVK39VR8sS3GKwJABy8vERYef7tGdsibMpXUAqhspXnZH5c2",
  "key30": "3dckpdWP6oq5qkJqFdY4p2RKhWrrTKm4DgsDWkU6SP3Ey3eZQ1HCwDgHbQdPfJvPjtDsqzB5rzc8tYzyxxNdFuGm",
  "key31": "4fyJM6c3sDhTy7yA4b4E9G3w4ipUGNeyp4RK47GsGbtWwbMM2pVUvXHroQLgWyjGsGJ3YTkatiDEdgMADSvgrHCE",
  "key32": "65MXmnZ48WTbxgyHR8cjbW4TiQjA4wbb53Hhkn6hwFh7B65E91qvsvt2vXLf9wKYPhdur6fwyfRrmVYAcdweuE7P",
  "key33": "2ZBy8H8cnx7i4HPYoFzjCqEXwKfMkKMVWmfSUAqiTjSRHQBdQRBbtrzhbKMjuYsUbQmbVxKPm49KKdgcpo6opG9h"
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
