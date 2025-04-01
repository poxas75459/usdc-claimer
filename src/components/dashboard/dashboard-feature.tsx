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
    "2VrpuCmUPUTqS9zTuqfhRSEyZ8TsYdKq45RTGxrQsLGhXF52682gYzpNGi54u474uEkZQjnkQT8xMRRkU7sdegfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2utnftq12G1z8kmtjnU47XSuxfo5Brh3j2J1H4Upq2wwyhuEh3m38t2gY3GQVsRsdSPWjR3MCprYSbvePxMcGGgs",
  "key1": "3qMvaGPvpk2iBYi3rhDZmCi7BeeJGaynyC3oboeWivs3WyQAHYGFPuDvTapYkZjhQkYi152oQvpC413akjZUzDJS",
  "key2": "3dGTyLigkMkK86hgJsFTH3wwduAWSsW89YyavuT361Wz3MWmBhB6RXkKKEAePmsKq5EqyXAAezu46bdaQ9j261fc",
  "key3": "2BNh8YsZiXM8qqyJzJh5sNCRHuY81ZwaxZDgfwqXYxk1Q2BXmC7nHG2EBFkJq1b1b9An8Gu2fNxEj9pe9Afe5Yrx",
  "key4": "5Y7S8x16uB41DKZhqXnN8gsFAsRc5EySGXdS5B2KXAvLfSdakhEoLWz2Z34oYCs6q4fvk8tQNxa7FU1SZ2sFMfAe",
  "key5": "2d354gFjyGqeYL4xMpjsGPEbC8p15upzWbJsV6uHQJkPbHhyzKzYE1CzLFZPt2zaoiFN947yznXoYLDij1UyL692",
  "key6": "6VXXVcLmQXuK2XEFRFkLQvbQHqvRjEE1hjz65H3FScwWPXNECTuN59xxQ7FCYZy92iPjWLueMruVyYuiaxuCKcx",
  "key7": "2S1TGu2Lh3We9V1etGtei1L5Pd5Ca8KHdEocu4DQaT8s6aLZ8MyDi3uTypDettJvRha6bms4kFreb51tfF1nMKS4",
  "key8": "2sLL3fxY5fuUtufgKfJTydUyJyUtbrRyv2gZw1WcReyA8Zho7486iB2FgX2XohnM35y1dHCuJ6pecEQz192YZNxX",
  "key9": "35fpExgWY4jEcu5N69ukj4n4kHZHihCYUAkfAuR8B7xmHqwdyakPPwA3FPwh7Wjgatvu5Z5hQsBptNc9osTEvctw",
  "key10": "2Q42X4jejyK2wPLdGWgP5GpTXAkKuvw2xUEbTLjJ3APby1hS4xbHvWWykYG53Fsf8oz9wYK4zRqbqu1SwtoJ5pGF",
  "key11": "2ZnUgMUEZ3bLKMSE12ZHR1Bh9Mj5PH4QQKujgg8QJF6mWsx4qXYSePUyu8uuRVsHLQKUW2aQkbbvE8qsETS1bgpq",
  "key12": "491wCf4vxqTjxZYgLbx68kLeKzmwgUW1KfASbbEoCnB45ZnsAzbnyYtjS2HAncsUbooed8sUeBTX8TuvcyYwoWxf",
  "key13": "5GkdZJamqwNMj7NPsLKVfWEoW3A5cf1fSPMmEnXE1wXNX8T7DKyzheF9Z1yCWGNuLKZw71TwEJCUg7QtRebbk37N",
  "key14": "437fnHGK1P4rhfLgcZLtnVDWKTwMwPA5iKoLFoWDrjgvj1Q21DEpV8VTM4n1JazQzAEDsjhY562JbC5SPjDuaYnn",
  "key15": "4RX1FSzg5x56FHELXW14kDw4gVBqX1wc65mXsnX9yD42QZvQy2jNHs3AxKktn2yyHUCKkKUAu8TSZHCbcWMnj9Lw",
  "key16": "2Ly35PVqfrJLCHa99Xbcc2CHNDb7Mb2CoEavn3ejg91iEacSCzqXQSToFiswPTtWV8yFh9TY9H1HhycPETziB4xs",
  "key17": "4wGZKTBx64rZ4q59AH58nCzgMvUoU43ZZnaSrhn6fVRxspLybPFQanHUW8NrvbcjVcKMACEkUUtA44FA3xQAUtUA",
  "key18": "3MXQ5aeBud6joGQsv1QobMgBQhbsFKNVck7x8xPb48kp5PpW7Uz23WJYPqV4UjsvcXD2tBt39FB56zLbFYNuwcNp",
  "key19": "3b5C298S51Bsf1LFNZ3hjfU2XqjMdUdptJjyNGfyd2U7vYNX1ung5bQrFLxAnJKiwbVdskRxtDwfdVAvsmFfz11d",
  "key20": "4uP1dMhV2UqTFWGjSgFnGPfioE6FULp9CgpTatMGPuvCK2zQWYrfdmQ1gHCtwpyNcLq7jStmfzsAtWyUQG8c379U",
  "key21": "2FHwixPz1YLWyZgs4HR785y6mkPRQ3UpFX5xYhGz6sSGsPosgpPtsJ7eWmUoheop64GooANzGKPqXPdNQRJNFhvw",
  "key22": "2PK8j6NKdLpsA282zU7Wj5Y7bCThTwD2a9tvvpwGZcAPhDKsg1PY4bMGbpfS6X7VXEv3wvHpPTjxn3JWoEWrXpDY",
  "key23": "5AQKDmpqq6F3i3J5mkQYGvmvgEXgtYDvSpbfXESRhsytPd9Jjf85XTSbxCAJGzVdPnoQyrzWTZkAAo2gjU3EQneG",
  "key24": "22sXamYyCyJdvRFX1TZYDbRjYGF4xENC7iVJMceVFAcVXQFszWFPo9B51XTC2w1vSZXUnuxJ8B1LqSGy7fsDWcuw",
  "key25": "41eQBNsXczmoMtgREpqsD4jDffYyMYfp19W9xBStJizpWrQRDraJTexYz2zciY32YzR3JLRDdZA3wJ5MWE9xK678",
  "key26": "22iXM23t4bHv9tZAwGwGiw1aesgAPgb6P8NFfK2tYofoh8MnWCmZy2uWBs5bNjszeVN7qRMKi3MGkkpPzoXNjUJ6",
  "key27": "3uhsi5388YNWEBsNZRhy6LDyYpZSKS3UCMwou7Tr6PYN4xFQ3kLCxAucghmEzotN1dVFbeCSDArMKTtPhLfGAYM8",
  "key28": "2VQQRpfaZVs8U7ZGTCB57EnthTTrTo1YLWt7nYA4fdM3erXBuz5xxBcLZgDstfSjTAZBt6bDv9oEb7T8Jq9XhJAZ",
  "key29": "wT1xrVbj1mkkjSkTk7Hv3GNsjr9Q3bu7B11BnZFeHHZmpz5PNjCUEnTCdPSC512Rs1NBEds5FfuYHsUXaufwkJ8",
  "key30": "2D7DkwH3BzxfHLb8aj7V3mmHqbHtpZg4ZXb4uZKzPQdTToW3wvzJiNzwo5vSQPMMUwrXTiQRercYMKMh2ZRtRG7L",
  "key31": "3r2vt4n3skhTDEWXqFn8VNHZG9ApkNpFzCN8Ud39X3f276ZYWfPwjpPtP6BPHLpfff7G9DwjuhhxWRu9qVucCzgT",
  "key32": "3TxkPsxBb86Zuaq1dJUUX8PqxC5nNzubvM7puqEv5ibKqvpX5BaYFpkZTJggh4nWhXdAzjS5W9SAF8jr77fbDjDv",
  "key33": "2rBwbKQDAxhxtmow5jJNjuov5a5PXmqUQTZCKNwyBYrWFF7F6kbrM6Lqvfgeqvc465msWWiFq2eP3zu4BLHZhdxg",
  "key34": "8WpPDteDWQrGJPH3AGw3EooyADoYeEWAHFdgaE7X2j6HBJnrNyhdF3d1gnJSYQvy468uuqAgKJEDisQqSgq7cqA",
  "key35": "eMpg2gPKzmPyJZdNEPKv3Ek9dBjUv1ew8CuKYzpKHZy6MLKzA1tS3LiJ9Bvti488fjLPYokXa2sQJpBRfwdnR8d",
  "key36": "2g7UEkhAAyQFVnrdr2U916S6e8TorUog2hQMa1ns8mfTC2z6mYx5XMQK76gekgrD4LidbhLmV7Xk7hLi5UaWpxn6",
  "key37": "beNwzb4K7j2DZce4uDk2nGaXJUbcFD85c4GqokbuA4iKhySzpwALEbRa1ucrJ2UohQrmaAxTBQbMfccu7ET5J8R",
  "key38": "2iGE1SP1HtvXfddAvzEUoj7DWBQBaK2sMLUmH8QZKZ36u1LZoanVSWegkcN52KbKPgFT74SuVm7KvPVvo5Vu2LuL",
  "key39": "2Fnq7TDfDzCPzCDNJWBo3asWic96LACB4SJiUxGVvvdcmXYC4MM8iPvjTAz4X9ayaD68SH5Y1NusvbtHh7wWLD4c",
  "key40": "aLZ5wkVFj6fJwx5fbx2ohYhChb7f1ZU6A9M5LbT7y7jSgkER2VEzjzbXabRagZFPeKg3rtbcAmfWgByTnZPpTv2",
  "key41": "2SBRUEUjFPA9cb5atqARmvHrs146dozWdij5Y2CCFZ7suSWe4n4GtsB7Kv7xDhkRbxhpERMybX16shZmKNWuj71C"
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
