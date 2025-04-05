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
    "3aCWdxESZZoKHSzXuSh1AK2eFLyxb1aQyBMRfUV5Zes7F6MC9ioNqWHhbYncVMUVKCLW4ZhCx2j5zi6XRtFt6DXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ueZ1PUZCw8oEA4un3GbqomADEEzw56pcffmf5AWFxVdRqKsjvo58SWKoAz1i76cMinoXBrcS3FqXU3WjKogzdC5",
  "key1": "5R94hrd1WGE3LBcZP2rhQ3GvKEp7T5WmgN9pyyXJjKHgvLMGbE8G7BnmJBNyH81WkFyzj88YTwJKuZUWiGkkLTDQ",
  "key2": "624yHt8MdxfMWrXg8WwZsGHoRG5UmTBXPWRqjBoNKXyQzKPhH5M5N77f5Y1nTNe19kXPMtgTCZJ8gjdUrSK95rJE",
  "key3": "333FjB7VNiePVKZjot6iLL7Y4WHaS6Mhpu3wNCnp2YbmHn4qevHa92RbvgkCWuLBc7siQaheggJyX6cP5xQ1TCuA",
  "key4": "5Cu83ye7MFztGoPPH6UjcdT8yb42S84Vi5ETxjha8KDTGAfZwDSqzbFbkCVSjDbbLHnyScWdDPjzGYYA4gbhJQ5q",
  "key5": "36ZyG5uBXKq1TjT3b7HXDjrDMkhz4ucSWEgN2t15zuJXTpDB8mV6JeJaHhoBA5QKd4ShTKkCfBj1RViLqGePxSZx",
  "key6": "5CZWNJpbS3W2t7vfnGXaW26qiP4SdWcfpT2Ar7raPxdrejdSYYeCAaLNnLY81YXWFCeLgXTpaxWULVyyhPZcTNQG",
  "key7": "3sJRVeZp5NqBNpmNQusXLRobYnaNrFmDvQi2ib38PK2BsfhfWK2rwXoTxvnnDJ9iNYJ5JHFEJBUdE7pgZVBkWpoB",
  "key8": "3YahNgMGqPhm7sang6DQe8a4ioNgnBwYoRj9WXFPLpZhK5c8kbY7J86vkkFgjhVGQ4JiQypDvdjTcKvJjYpkAvLa",
  "key9": "4GheTbJLSEinNyrRJTdVfBYsMW3zdXFUt6w5mmTc8ctQKiNcWFpeed3vwkDUYX1DNcrBAzLn371BTaRWHjfnNSzQ",
  "key10": "4bCCBwrgPUdrtJ8rSfv4n6sLcDTzCGcAdG2As15xxNKoQkSGJz9LMvjeyX6GqDspt9qEFVk5zaMGQNb8W7UBhotv",
  "key11": "29VVM9wa7uTBkMiG8trwZSYoDNRXwkC8R4KnpdnPkJtzPsA2KXE5MheRtnFKKp8WGrZbEimuYaXbxoS4Crd2upEU",
  "key12": "53237U6fdgD9bUmJrkP27EUQrBMkZtTiMG9Fhdckaop3W3V6QrCVYsgpUCEuDjafEbjjcstJLqJ3tnYhBJyebvu7",
  "key13": "ZYsSKse4vvLdiepSJtkwS6SBsjtjedjWx5DUzhiv1j6i28Kvgu8ZvsVumDJVpZXWMS42y68sdcnUZGth47iqg9Z",
  "key14": "3BWrm5HYHQAm5zrXb7urviBk9AiiTdehY3Cd8hjvZuzJEfsEL7nHW1DccBepFicMQBKrye4bFcqFAzwYehehNbWn",
  "key15": "4Kq9HpGs1yxwxeHs2QNH1iLqJ7ttC1G4EHqnEKWAuhM5Mw6hpiCyKwJZmJj4sgpqJfCv4cgJoSBDa5FY4YVFjDpZ",
  "key16": "4Tb5tx7bjSwJkEyrUo8nVKZtS9fNuL39G62T7kyUz2vW1RC32CVgjRsNCwtzDXSbxSRMgd7uKbogVqaej13anH9v",
  "key17": "2eqf8zoGT9gE66JGpvMsj5FsTxpj8ExjQYsZPgpuNon46ZRspoQGLgAU64j4AzDcR3ErFT5cqKombpTtT5RyHx9r",
  "key18": "5MB5ZYtaD7JPoaCv2Wb6n7dG76dEbPLvNdmFRBL4Uu3FKNk6MDJvYSdN9kLkpmJr12Kbts8f3sVdz72akxfh8qv8",
  "key19": "bwUeoZmSp8kk8wWyEbYeVQcaTE8ymzdgDcSiFk8b7iL1dQmBCkfNqmYRJSr61FnytbRm7LwZ4tZBFdmZDmpoCdW",
  "key20": "24ym5mvmrfNk5Hpkzynm5w8pY7CCFg7oj8D3Q4sPChvK2sUQtJzA1cU21ypQMa45AT2rSHiKQyYusk1CEXVuDoQ8",
  "key21": "2tSpF3kaaehsLqCF8qLpLy9T7SjWnj8ZMdiE5JMfKREs5YWiidDcSz3eKuqQ1pbV7heFfgtmpTqn3jkBXpAiVDsF",
  "key22": "3uugZuZ3bVSB8z28Z6fbUPJtTLmv8TALCx6WqD4wk2jgB6MhU4R3syAKzzNt3A6HzDdeoSiB15PrDfV33es4gbcd",
  "key23": "5o8zxH9vbvT1BsFmohzbtyEJMqr6EmFh4XzuqoEhquMTKRe2cxjHXrNJ52UGScwsaBYVdddhF2eJgm6zunANcDfw",
  "key24": "5ZSX2rxLbF4RkjYYuahjhP6ex6qL6ooPtge9MXBFX64U3FYzF2uFymWV7eyqiQhpKmzupRneo9ZVkVuFbZDm5UN6",
  "key25": "26x8XDTCiT97fQthgNLXQkTbimQAzABoA3PiewfLRCCjQfygNpQw3kGtX6Nd5aj9GAL7pyp8P8zjLgJ3U4vqmzEN",
  "key26": "4AukXU7GyavrY8mA6jkgwbgkz9PrVupVW2QxEYwpR5PmrG4TPU1qpQn2RFySiqyBxVn4A1os7cNCUZV4kBbE5ydF",
  "key27": "4MSth8iKScZtV6uFJS7sb32izp773ZG8fPg7Dk51uycPER271n14qgpcXeWXoNZJ4FCEyXc4Tm25U3s8B4GABMD",
  "key28": "nRHPUjHcLApE9zgiYECyjcpsr3QJWRCXJgUvsqNQkzi2RyeDVDjNR51kvCascg7FHiUFDLxtGhbteY8aYxDYTVH",
  "key29": "2QaC8y6QBM3Ds453NVtBwRThaxRCoo8fFasDezoDxExby9ccp5UeUJcm2yAb7ng1A8kHjJtyUnSuXS8p6b3RUQNf",
  "key30": "JuQTh17FWVayaXwqokVssBy5b3K9chZhHVzrYVxchfkMsMLkqYgrcceTUdA6S9qLPQGhQuC6p1wdJLVbUf3ZasS",
  "key31": "4pvv98VmspbUG9NzkGbFxMgioFaQw89A2AqUAdgV3Hbr7JdBD4e52VpfU9GaAdxZ32ZnEZbkPYucQkKJkzb6RmNw",
  "key32": "3x89JR3YESMYBvyNYh82PkhvrYmky2eruYr6HVKwugbExXcvaj37eGj473bhTXdznE38VWMsXPG5Z8nRb5HDJzbT",
  "key33": "5LaKVYwFGLb73sn9hth9XZL6c1gNvQwNM6G5xrkyB6hbZ4SCyGwcDAPazryotNZnCm7m8ADiB6xVxsUbPtEV87A2",
  "key34": "2wtjA5TWKdyKF7Dgkf2FmghVXukc8VwSEVGJheeoSQQUgsdhVLsmxzk8pW2nnKYfUbQu5sfpPYKoLtYouTiFP2vq",
  "key35": "5Wi2eZw314qBgvUnigo1BRsmv35gQJ5YyQ7nCzKyCzyqnU8Sj2tgsS4h1EJqrx8RnSARqBohH3RiP84giUWXyKgt",
  "key36": "3wdrdYbkPjWwAk9kx2ENs9YjfvAYhKLNJNPxgDrcwXMdJmf92KdrGJe68SYtH51gVUBU5khs6qhCvSa9QgEqXTxb"
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
