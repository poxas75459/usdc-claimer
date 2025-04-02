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
    "2ukFGoJeB7fJhzokfMrMvYv5KdsxjVa49j2bYV1DW33BurxCWC2MKb8oQKnKibDVn6xKR8TBnP3GdNi6nP1uUQVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LxHcDfBmvyDbM8WuM4SbvFHQsQY38V7uF3UVBEeDA9e7b7TNJg9ftaXNN1fNJAn2zKmb5jD6j1eEvwtffzFEVQ9",
  "key1": "4GFgtUF15Kx48G3tCK9qKA8UPjbwFPAiqVH52jkYWbAu79eHqNnRTsuoAi1EhV91rtBNZLY8PUD63tMudyndGELZ",
  "key2": "3byQWE3c8Bs3Sj9GLnMvbxeJaJXyn4FQoAK3Xa1kK5NDn6UwsdC9VGbPJb6mjJNwnk7ZNffJ36K2qMgNd23nz7u6",
  "key3": "2TZAXEJGmBm1siWUb7QKUhMNvsyxjyiYffdSQpmBwAhfdUEtWTLZ61CCVsLNdC9i7QVWrjG9MLsSZ2ySzgPriPS1",
  "key4": "5fH73wNWCAjAjxpSLyL7xdcirQfmgnKy79u2EcCCwoZ76ppkwMCd3aZtLL9bDjKVopmt8aHFFLU2hNbavaWDc78",
  "key5": "4dkEssdPSTMqzfHevPuSDqS1fzj5wJUeUbyV3CeQeozxGds9HjrFYAdzh64BnohLLLrMN5wMHK3ZAe3aRz71gBnv",
  "key6": "2HCeBcLjzajN9Dt4rnXhaEm3QwhN1k5YMxNDhtMziQKDE4LHXy2pdiWdRe2UyEAvhmATcJPh8rYQvs772aXcWD5d",
  "key7": "4EPSK8xfZXcGLuMGHT9vYMPv28qoh12LQaaeYm8tYtcZTjPsqzbKjfvDQLVD7YkX6vo1V9EnJysGCuPXKVCwUakY",
  "key8": "5tjUxbR5SGKab8uXSY9a9AaqDy6VbUBY6wVkNWQ6Cosffp7zbcRL2EgmL5e9Qb9CsZLsJUsELCuxdAWmRRPbTiUf",
  "key9": "22LLakbknWMjqkpBGRGib7aSUsG3Zoe8h4FR9XaCoxQHSyUbrmcPNopAMwu5sVWugfqgs2khJEXXbTNtxmfceJGa",
  "key10": "4Z3d2FyMrFpURadrNu5h67h5Rdh1UJNggeGhwMDTYoLZpnfVNK8ptyWnT8vUoKu312XbAXMAQQR7UTZs9gdng86v",
  "key11": "4txr4pRmrcqb61JTeAiMqeTyzSqkMU2x6mjgodCaEoh7fW43P3ov8CdRbegjC4eQWsSA9diAmjWfFHbi8wKwxSJc",
  "key12": "YnQ1DorL3AFzHohhm2Gup4pJFQRd6N4HQ9pjs5safPzsf8odTYmVmc2c3mtwzBaxmgpTWM98Tczxk7GGAPMeBrC",
  "key13": "nzFXJCb4s8tUWGgYBPEZjq4PbY2tiPu2ABPEXxKccxDr2zgsGXssRMDK7tVAm7V1mv6AsG6EpfCgK2ScHg5bP74",
  "key14": "5T5KxVAQbS9niVziSB8xLJ4CmxxyNYxgLcGyeNx1XyqEM4ceGsRY684yNZMbyseziawbiHhdQFZz8zQVpiHGF4Pg",
  "key15": "3vpN224EjEUiPhsZvrkuDjGNcKrKLdKkCFV9JK7dPk9QxXars75wSqnju2rPP576tGyNY1b9ZE5gPwd8Y6BBZ2jj",
  "key16": "5qNWi5rZvB4FsCtpbiBSgKRQz9nkYJB6gzfDSucMSiztFNcdC2FCTPr6Gz519YuhWizH84BBHnm312d1J36JxRtP",
  "key17": "bqFNbmNJ6reuowvWt6kuAg78BRa8TPLoG5U86nyg96VKvS3PQo3MzNN8xFdKDPSke4VM1p16jKox3NijsM6c1wr",
  "key18": "42jLb1YaAvQb8wiAja15dorR7t66EkCqPyPstZqJhZ7ujWu81EuGNxtAXXBnCpjf83JbaUAKXQh7E2u7Jd5LPYtW",
  "key19": "D6dsq8g2X733Yohcat7jpKz4GsNb17borq95gc8afEGL7FHcvrfTRqMWHQzuGXp7E9Kt4HyGqQLKGNxXcomiwHZ",
  "key20": "5TBK8bck5fw4kESwLURPstyCbTUgPjdvngWQBqBAayqVymzamsHKqzsxN5isMtKV4ymee7BERMREK7ga7WLn5Kay",
  "key21": "EAwDEUHFzQitg1dBXULF7krGduKBcExRdXeqeJgauZZLRNxgmN39t6FGVGffBKyqdhTZNoW9WxJSzPGp2UTiE6R",
  "key22": "5C6nD4jp947vuZsNDN4dD6b9wVmmXReqQLAKzE1JXPwAT6Nvp6VZ1VbE2CXnjnU8grRFEAoA3EipNcffjefoF9n4",
  "key23": "27DdmyHa2VEDGikrVDuawv5RX1hdwiv4YacGp6vYp6RMykMLNsSG9YSGQPy9MFk1f5snSU8abBxYKa8xEQiL9dKJ",
  "key24": "23A52rWdJaTMQh4wrbrLmpPtGjVLVHJ3nfWzzRxAbjhkDNjuPCHgudWWsuUi8BvpQHDQUuGnPBz6F5ALxvjUqmYx",
  "key25": "4cs19LN7YnENoaaGyS1kEN9X4N4AjiwLiXFU9hAGxmJvCpe89TksuxX8QAFaxLFPWPpMoEnz96FC5PV4x85uu94h",
  "key26": "3MRvR9VpSqc9dqDoBvJPGM1x5M3B45pEQLW5KxWMYanqw3dAdyCAHRPBAHGMbJpztapmgYfPQ4gjPjYToAhPYb1K",
  "key27": "65WkAJxZKTjK3MwTHWmMRLajiLnWhGagG2vT1t6yPt5tAPPieDpU6jMvv32kqRzhZaVCw2m1i4Fq1CcyjwGExZ3k",
  "key28": "5FWSmc7ANTH7rGwStgF52FeqtA587iDsrgXjHreGARFxwh9H46cSVuqh3EZRgBrRUeZ8gjQctgF2uJaRbe98EZAi",
  "key29": "swfQW2Z86dXHE49ek8iELjhwJPTTT2Vm23s5UN98CtMxybMBqHKXcXkrViXS7STaA62NnvknkvAtJFgRDLUagsU",
  "key30": "2abiwsXJBjsdjmDukWmGLpAm45CaKgY8iwsXBgjESzH7WRofsz4WzozZbMy6YwyBYSP76utNBNUiTHw46R8Q8GJD",
  "key31": "5jJEf7XkLt8tQ1QBLDGRq7tVVcxSt5DR7HnZCMUvCpc7nkbbtLh5qist32JCeCWjp2TqfGyf261hgs53Xv4nSe6G",
  "key32": "2AHUXrJsqEASA3NobTVyLWckqxyrZpoQFV9Yc9yCxyfMtKQZzGvMbdhkthkvc6GudkKh4zatN92Ca8rRMf6gD85u",
  "key33": "3NyvQGbHZqPa2NQcmggEfKSk2KekDSXmwMBFfyvHiAp5FbvoX5TRWDHd7VfEERY1Sx8AHPg7g2KVzwsdNbhf6Bv8",
  "key34": "3J91B8VLsJA4Ljafk5ByknkebMfMKKDyJbAQvoruC9D1qfmiNgSa3AhKjrBDbu9UaRZYoEBoGGL8f9K6cHqgDFVg",
  "key35": "34vK5ojszL8Z3Duons9zcpKGxijPntB9JMTnkGQFZU5g48kmhbXWxHyeD1n3j4MRMRWAmniPHnana2JwGgT1Ygi7",
  "key36": "xFQa5fZPER351UtgG1S2BcjKDJqk8nGggsdCXGDHgDfx1tqk5zYpBs9YdpR4ZCEzWEucZM5RcVFW6c42MfDfCau"
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
