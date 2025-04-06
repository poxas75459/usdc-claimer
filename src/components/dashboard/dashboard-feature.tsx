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
    "BY7fm8DgtdeQU3Byg4JBAWRYC2w2MbDDm2W7guBycCDsex8WjoKpqxv7JFMGgEsLv82JdisicB8eKqbFZrqmhoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M2ZzggUAB84B5KYbwvfRGkqDe9BV4CeRF2tZUtwC9HcxcWeQzujaLPT6PGauEVN6qaL9fQN2SmXL1S93dTW2BSA",
  "key1": "eh464XDWxxWkNGTUiPyVK2GkaPcgEA1a4FvRQLZKwyYjAhzU6KhrqQ6keN5UqMLaUe6fm2cYsV6QCFJywEKSxSx",
  "key2": "22WrEsH4LRSdR2YpmpHmqSrJVmjZbXUziyvitD7xr4c2CBX2o7mXK9h1RxNL5Zkcq2kaRzPfuWb2QR8sS1g7mSrS",
  "key3": "5SNx6v8QUHA6F2fVC3RxQApfNbyJikn7DNjR9p2trWE7FmjF6LBy9Jn4KZpuQwGFu73TDDkbyxNs6Gw1NZun8w4E",
  "key4": "K73Sai8hb5KvKxzsPpChgbq9XP7qaKAiydXP5WeUdSp8sB555AhjLbDxmJdfrSgEebA2xw9mqsbvAMhzhsKHgoF",
  "key5": "4QLqBYcRSeCKfSTCxUZenqMVY96RmNAYWkDcm187nbi8xH85CmAbxRTHfiigEwc3Z7KVspVNNuY1gyj5fBBev81h",
  "key6": "2ToSyYD3MrEF4dvLZzf1Hi47uhF7VfnhBCtUXCsLXT11yqTJGtFWXFBS3qEvFbn8DxECW6wM9CzKFtAhtyLJBkvt",
  "key7": "5aDoYvhcJbbcW5mVBPVDX8rqeqNUuoHryZucSWgMQX3sZih2m14FDNmV9RnwEv43PwWfqoiwFg3oefvtaqXiex4z",
  "key8": "4zLkpqxsyCTzGnj6Cwy6y5p4JuMNZ2kVpx6pRzvoZPYfjoBDcRFFy1Q9QJY6fACVC5c9qN7Reu3fNPRLJmFphPKJ",
  "key9": "3mbsJP5yZZqepSp1fTvmtR6j8BZY6gCMBBEMWV5DwuwzjPgcqsVShou39pnZgAZzhPcRoTJ8AH14AtsTFHJzNbc6",
  "key10": "4yQyN8511XbU5Y3ar3qak8eu942PRpNdsytfT43QXdbG7cXcFBVD76gdYtP3f2q64Hg9j7HjojsGSpiwHrvSJ8rE",
  "key11": "633WVx8UYE5QN9xzjbi6uChAAJjEyZw8zzGAoMqZuSxJANakmzFvuB59yjUAnStTyAkyHUQriYXmmiEj6qwp417B",
  "key12": "3DCBS9CvgsiSj6F7SHQ8mkzn1sCkCT3LaUWwsKyq1bbXSs2FUnPv4d6dVwmWvo9WaVcCZ6ndJiV3kPQRNofkmH1X",
  "key13": "5Et2LRsYuc8nFjVypBK9rHh9Au9xYF4A5iuQ6Hj9fzegr9bNfWn6bfb99YEfjnCAoz49nB22o3YdHYSojLP8pgk1",
  "key14": "SWXEWqAkGU2jQi8NYU18GL1gjDA84pcweptnampqawJh4NMPHhNoidSA62aNu5epEgF5LFR7xjWSvUkHQutA4fU",
  "key15": "4SiGtNGKeEoKtC8vBBu5G9rnS86iY37XWa8zzPoEmWXZ3VZViy3Pk1r91Vep7keht1tziQze6WDH6QUDYDdGnWgy",
  "key16": "5R284bvDrjtsY5vAhu5p2imL5gv5AyDHXVdGsEdBxjunmQ1xiRX1xHtzn79aDMxK7Q2deugxJBtwBQyefKGMvsjh",
  "key17": "2aBi4nkjszQEJwnoNV1WujQ4PjTmJqTvSX8kMTVYWfUyXP8Jo8mxhR8LYjZS2XGgZXEwm3oZnAmCRG4hkwnBEizP",
  "key18": "4RayoMyVZkDLSYL3pY2KpAu4LeU3tjNcNdXVqH2CgU1JXZWRfrXPYqMoFzi2nfngiBJTZxRLRzFJF6BcR61Y1VJj",
  "key19": "3MrGtwQky9e1LPmUovQNVQtXCuCsCcVKfJEgw6T5ZRzEa6qgRQsdvwqC6eQVtzCkaxAS64g4cfWxKYfrhxegvqvE",
  "key20": "4JqufwsHSx85vKYgVi3i6aj5EFQ94AijFQjskv8E4u2V3vx2fXppkbQVQ8D2UrhqDvtpQA3kfyJJt22d9xkds7XM",
  "key21": "4kwMd441jGS4FH8cmwvao3GcfLuCp27qaQeEt61Yqt3yUYn5gL6ohVCG84LjTDc7bG72K2ZRc26iptsvj8LwbGax",
  "key22": "3j8cNwEA1goKxR5BiCeikRHnhdzVnq8EwpBMQc7Ax7gGCJEtSrTjbgmnk9hWsnTbEdw1j7FD1aPLFipL1cqtf99o",
  "key23": "3WHPqrkafVEvyaFBZj5ii8PVbXqThrs62HmCSjNtGyUPSo4CJRGLMmAGJEfSEeLm4FMWQRVw87eSK54hpXQmk6fH",
  "key24": "48j93TiHTM2axiGDpquwzMqvnqTJVQcWmUG7MqDhE5kP3Pgd7zQdFWNUKP4A48jcMDApsFn3e9CNyExqULRQx4cC",
  "key25": "4Tkoxb85UxeNhdBUCtb36Qv7mxKWnNd3Qn5xi1grgGxZQvQmx88c3H4thBU2MWZib142XVdFMt9HzVSiLVuxBzL1",
  "key26": "4JWa191bwXKipscHrmJ7KWu2qguBXJ4A1sQSbFrzQ1nfr8RvK62NpFEvMd49A2y9umjLvyPpbip8PqJUZ3RXpCNS",
  "key27": "42nyHbnsfA6efeAG8g6rz6UtW985sTrpPquzTSMW7Ld716ymXpo1368SBQXDaB7B5DCvpvh8WxUo9L5i1djKa8UL",
  "key28": "3kiSr1crjzUDizGgtJN23aqC5vqAJP6oYwG3K3SUkB7sFyhrGV7PtC9kKTKvQfU24pZCRJEoVnhajLHbdfWkUbSC",
  "key29": "3ayjEWQYGtb7rmFK3ySZLdA7us85Nq71RDhCxpG7ojYuzTGfpJ4fwvv92ocVV9aSLvJJfe17GriVGs3a5kwHNtDg",
  "key30": "5rPGpz9FUVFPuXQqmcxHd6WPiMGoYkpdSoJz9h7c6Q9zL85DbppFbNvv8RVFkf28fdMgbVhwBSy5Tm3bztv9ig18",
  "key31": "5oGVH8u49NfHksLUNzNuFcxjj4Fejz9CJTxMJVsG8d82morrvA3hevzMAWdG9PxXJKFqLgFF5gHRFLwaLotaCFeX",
  "key32": "5iY8yj3ykpDcXBRZdFn9TowWyU5rYfNbCNieVxP3EP3JPtDBSTnx2avdkxTTccXSgP7y8ry9jGydeAuZDSM4mX7m",
  "key33": "4XgFtc19w3Uxx587JZ2KHjheFHZFwgB2PrFESCLPeVkCU1TZ58rZez94myVdjVeU9Vn42oDLddBtsijncdcAQFa9",
  "key34": "349jvUZfLqwtihMF3sXD6t3UHG4R8FUh9Nw5hKD9Errrixi5CSUGWjP6cYVsnm2nfRduWWd1yGABP5eM9XbmW8fu",
  "key35": "2vHsBjqTha6Mjq7f6WaMUMnrfwrVk4JiB7WyehiS1sbW1XfcuhVXmQudsacNN76YWGH66KdGM49e7UkT9MqEC4M1"
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
