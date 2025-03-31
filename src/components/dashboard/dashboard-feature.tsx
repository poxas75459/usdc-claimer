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
    "3JA6mPKHPtN5Upnj5x6YJ1qbMnsZaTzq6C17Ep1uGF6kCfnMK8xBJSgRNghRjNVamC6QMsEFuAJE2xV2DhHKVzy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iXiiKv133qvTiT9DXDRvaNdB5MuwDyMGTMUjojRUopddL5Gk3LusV8MjDWLcFh5zN7MjWsJJVPYgUqGAznPhNLP",
  "key1": "5w2abAMP27HeWcbp172s7kwTVWB7yfohj4Vhjst5cWPrNi6xK2YDCG4SVCJBWtXoaxPEUke3m4aMoKCGBSG6jURT",
  "key2": "4mRXbFrYjHP8bVaC7UJFrBCSRN6EwQt1ogQwEUBfBXDsDHaS4XkENaM6xE5hB2wUMho5QgFuPULpVzL91MDN5YPq",
  "key3": "3cGoVXL7ARoCzdnXdAjP6W5nUWcgsLJXNEdc67fETe595QwjtBWVKGB5J6HQjxMKrKMbsRjU7pBebAzBevtuZMio",
  "key4": "2YuHqF8WxejBu7TwSU91yZkBb1t3nLse5ga3kuEBu8NaAQ9ooLCsAETUckDEF4R33P21D6aV8onbgRWMbaFBTJ83",
  "key5": "KUjvTfE4PxbmWqFnYbAvurbchuGGPHQ1fuhCPtnfgHq1LdgE6avmc3VENbMZLDW7pYVWPWhypjm8cjpHKixBxFM",
  "key6": "Rk8UNUx6CmUmhLEbo1gJuQdc4Yho5Aap5t7wESQp5nUemSUCK2GrbcBjvqYwdZjtM9Ydymivw1nLhwrCeB3ze7H",
  "key7": "2Sfmpv3UJCKoAiBdiogZKrksnJNzfgBCTGHW24jbrq4pDrVQGJk88wg5CB8h9ejXwhLoUpysfRSWnmxDtk37BDrv",
  "key8": "4NyDoCwoAMJHHbBYmd4S15ZigoBcKWi2HZnTsauFTZWHGVfoLG5RbHEsqAsnuBMHDuoHrcgaE2u9Wf1ZamZ9eoM3",
  "key9": "5wvRgqE7UzstkMqV5GEydFjYc1Y3xTKwW7nmN6oKQqg9ktqvmcZgi5A7KHvS3YSJS3wC5CQBVYcrZ1nMXiBfrXDY",
  "key10": "4n5NZqkP6J6VRVtBPJnoY9XMjwnCAcnEDbyGu1zHfNheW6NfmWPxQcDrsNrjsFHkFxHHH5k856iYpiRfjSpNigis",
  "key11": "2JHCXXCd3AGVf9rp8cnxzj47nZpBx3J55VoHpJsCw9R25svxUr9T4qGyCLFNcBLXsfbypRQv5htGpqL73nqCZ7dT",
  "key12": "5Sr3LSv616QwnW34kWVAiERwJgRxVKaWZDmB8QdWQ46mLehZYdnAREM6mnx9Y6cY2k1DmtFtt5XVCjXweuvsL6gV",
  "key13": "4M5pKtd7YKjKem2w2WWWE5Dhc93Avb34eMy4H7bTAPKbw5cyR7qYGG3jtjUA2GFetJtX241qVdiazSGkH8jk5g8o",
  "key14": "4DXMznDX9Z8MTtNb74kXMqBxFWRXKUUGwmGvNt2jA2aKYovyqdT9ERLfsrxWsjxr89fht4hRBQjCsra3ioF77MC2",
  "key15": "Eon1oyHu1fU7EuMvDSS9i961i8c8KrzhJQJMqPiD99XoWady16mCxdSxjqvN8PTb1VNDrmsRbsEFpvd3ub7m1uW",
  "key16": "PhQMgvQ23kS2oYPu4g6T2DJpcua7ti3yAhXZmL2erVWEic7PRKkqfiaXydi4CV2khk9NpjgyZrSB5tJ5EZjNt2z",
  "key17": "4cQmACA8PhQUNYAWx3wK8Ygi5wLuKUeCE5cwQq2M5GverrqVLt4Js52hXuaXodwfBJmukWAcM3NTAsiurBJb68mv",
  "key18": "26cFWt1NiWgQUrqdzs6GBRbzRYZjfwh4Dpwu4LSGYAdBvYmNCbTp9SamUxv65fyvSY9dVJcmRAi5GLuUrM66MNpJ",
  "key19": "4du1p9Het1DpTdQ5rGXDYqytvLYLzzuf3vzBKfVuP5g9GXifWf4vEwaRGvQVvVHtHhfryFLdUWGzR6U5VdYsSWzo",
  "key20": "2wF2owD4GTwfKkXPxkqZrJKK7EyixaSwJwYdzwvjrjC3RBrwDsEXe8rrhQD34DrKYoZ7JLPEr66ibDzN8P6LNtq1",
  "key21": "5bUn6Qj6arKEB1ECHJCX31QyUuQSrZri5G8ZfpxQfhdCaBFSsafWpeunaSSqgXryzuoUivXKyM5eFbz24bPB9JHb",
  "key22": "UaNWpKtGVbuSTPNU8gkpqur92dxrMHrSQMj1VVJLuq4FFCFvukZ6mWRXQyDVNHZGSHVDBmDxhnsUky9Nz8x4L3o",
  "key23": "5u9KFqAAuHgchoE8Z4ST4YfjJWmAdFV81hWqCeR8TYfARprLg8rrYkPrP6AGKb9QYMzVmdYsvoDvfNjHY8yv4z6o",
  "key24": "39o5hJoEeWhyeUKN4LT5SFffTBygFL1SFGD2sLGSqhtEAfrqXFXuQdxSqx2WEUemaEWiwLTRi45CqFQsigRSbjXM",
  "key25": "3jPR21iR4EwW67U8MzW5vRJrxHJVKcpnF8XC5ErrkDLa1TZ7QsQsxh7cqzqVazzsjQUQTJC2GgX1EW2MGBY3qWRN",
  "key26": "XjpBdRRYrd8gxSFuKVqwvBh3HvuM5GXQbZsRdgr99pxbMfgKp8V8fm8SjDaB2wjL2HcKCdeT4EwC2V1VPhfqTJv",
  "key27": "RF97yJt4HDazJprqiyRJhH1XSgvLYiaUDWnShTbNZy8vzrRYY1WQDh8VuWo5XWXujAavKSA6yUBB3Xdcvx2N58K",
  "key28": "4dQSHWs833GgEWj7QqNCG3dbfar3dGQUb2ipGzTXkjspu8p9KiUhpGzw78LXoZLQYk2616WKfKJpbmuKMpEPwPD4",
  "key29": "MX3DBYiRX1QWRBJkoqJXt7VYcsMzf9uLrF88Z4xBSFpdSAtJz4SHRtyYLjWAPebbtcdh5bmqx7ai8xY1A8BHfmm",
  "key30": "48G4WwEJFbTXWBM5gcqrG8SsHuewsgttzbvbSaTk4yk7hkaHmJq7hGGnkVDGqB8Z7M5WYRHB1nVquDhy5A2LttKc",
  "key31": "3WzjB4gSFVUuvxdWmDpDmxgCL8XipzMakCGHvy1WcH4jZM4Ma26eZ7y9GW6a8K26Be9q7Zy4obVEgRHLFemYPz9a",
  "key32": "5hp7Mv7EA44ePkdS9v4MNdnks5LpjL5VESDDjGYHskZrhH4jbFmWBdmZH9JMAZ2sgJCUULwKHejWvtVyriR5F9X1",
  "key33": "63TUiguzELffdwzdKz5ZnqwNDGozAng3Y18tBEiHmTg7QijPXFXmEttGJdEDsWYANeQqaC9pW9xiZsha98KWAXif",
  "key34": "4F3SGgDjPCq3Hnhtq1zJn7k5broEJaWiyn2nkUHjNiYaZQjakB8nRXZDdzzDMzzgwtyfnxcHy2qMXNb9bmhE2mCP",
  "key35": "38Kndf6NZWEp7MzjtKrcAZzUv4E3cGcgWX3fQi1MErLoyEXfHWqrucUrGozDfAGJxrdMWZR9cXGfoUrLztjVAAQm",
  "key36": "1zfpuWige5xiqV54JuGBSu5HNkjtHSMS1SyPw9qScpSnEeXiDNZvRumiucnzRdHkpuvBC7qqWoJaPiXMWviUEXN",
  "key37": "63BZvHbcmXpxsZcQycNLBrtdoeEXMhHriK6cxVaZCQvG4TR9ui6TKhU9AW8qqwFwnDiGKWW58325nVGc7LrpFnrf",
  "key38": "5FjG4kKR2i8HKAaDLa2sRiKxrdKxGksx6EEQPgtYGxeUCseebvhgv6M6LAEfZaxM3pzctuSbUcKyEgQyvycXmnV",
  "key39": "2xnT85wq2sG71K3kVYW3WtYh5hzzCmX9skStPbNHsKMgp7GyVzBS8Yh6rMhR3oLYJt56jsWPQf5omfq6SjS3ciw3",
  "key40": "3YSoMby7hK8HzFvXSHCea3cTiUPMBPkp5wUZEAYxCa3f3ixFCnfGYNPvwQN5YMS3VA7QRS2uxqXFvgeenRqzrXwp"
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
