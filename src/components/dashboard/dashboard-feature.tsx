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
    "3Gn4NVnkMqYp1fFd3NahHDrenBssKuLgvn3MjTyznJqhLJMegVwbH9TLjZQK5V45JZdikGnzpwhXXkZGN2y1cLUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UE7EUkP4CtP2jcgrAcBacqJc9Dn1ZUZJwuv1AiYYDBftHwcYnRiEk194sauiggnwTVy2qTjj2dVsC1PQeeKQCpj",
  "key1": "MwSTiwMvXkVDQ78umfVgXscq9nefo3cuxUj86KJUHoDgCDFbMNQX1NtHMNTMzLtN2tmJ2rT3qk4Q9ajYkyvrv2v",
  "key2": "ac2ESEG2r7VrQxe1VZgwQEDBGKZX8mVrsEMWBvTRFoRjfgs8nPCEUhZX5rDifZaGExRCHnrEETv55WX39FTDNHw",
  "key3": "2mJdC35Xg2ZMbLYFszGkxx8z1TNdidq1SknhzpZSD75urfdH7hbGLbjwHk1qoPHu79aCiB6qhgp6BLKZLvqnJLtx",
  "key4": "269w5Pe7LbYLaiGuAW2rA89qSz6iP1WRjijidoq4MZaBihARyx3dAGG3QijgRcDvrSuF1iuoFHVKz5suzgRVBpTN",
  "key5": "26JdKuFY3Vsg9wgw14nXg59ufSmDGqvANFeNVvnoqzCPupRkvc8S4WxQNvxk3sowqE53cLrvBZTQ8NScvXe7fzUU",
  "key6": "nRUDdkZ5Dq1niaEpn2aGh4X69BhFhjhcjTCtH8hLeSDNZEeAuGEgizRXxdgdtWokcw5V5yekcaGSgH3zeujw93E",
  "key7": "5JV3wPFPX46cukboNzRryD6sqDptXFL4NrungDBJ6AQc2syC3BmdNHWHBLWpHHFNLxqjsD6ewQbVZKQP1yUuFnDb",
  "key8": "5Ja2oczEiosVYSdsTzfdmnYHUB3Q3SyxdXVX9c856hJtfubqc2aTKfbiUkcuDSVix2FcPQWZHyepwLA8ijjZUdvz",
  "key9": "3gP56ubJQpqd1JgfQy8TqNLELefFWxF2azvptZWPXC42E8h9DPNe7XBNqjVx6ou2ih2iUBXs5yNtUQaegvMcskrV",
  "key10": "4Akt9kMLtd77nDXYniX5jhki4JrL2g8YD7Zsm2Sq4aGWYADQKqM4v2ev3DF9jMimvA5ThJkyWsaMqa2ZG9XdyDf",
  "key11": "2dHcykWvus8ud5aFBgUbcnrNdCn9XzsbSXFg9a4rY68qi9nvoZrRee4Q9ARWibyjttMgGx1Htn3DX9Rxzm4joy7T",
  "key12": "AFFWk5QuTfRs6ikU9SL9uLndJxGoG7TKejkDkiof19sKpqi7UMBp5yrSjdMCCnQEFs3Ze5vzD5ikZ6drJmUatQ4",
  "key13": "5xe7qhGr49bGcM6DCgeZwLAEa6hRd6ezghYSarPfVeagAoW1Mu9EovLTzkhLKd7yydQmD7BvYjqDngt4tG44wNyq",
  "key14": "22DfukMUyhmp8E9dHWXsWhLjijgDjCu8dQssHjijxGtxtNL6ryxKYWfu7G2HXS4qtfWrLd7CAYfCdWtMhvq76CSb",
  "key15": "3h6wZoMjQ3ANnvcfuDzjj647wJnrjZUpXV1xkeJMz39rc3THXkpTaH6dw8YaHN4FfwRBf2TGRQsvz6TG5uLRqYpQ",
  "key16": "ek8zfqTGmdhKudmeJgJmgPWSDwh2E3FZ95XUjzf2AKkWyQo6WPYpufozhsgGzXnNnn3dgiLuts9Ay3dtixBL5Jc",
  "key17": "4zanCLz7gqCJTJgt8Qo1YmWQzrDW4krd9VFMwcxpRvaYpfpXLEgyj9g7ZZLZQB47akMeEhsP11CQDjiq5VZGLXeb",
  "key18": "L5nWat2XUKDaWJNFwZtWzsHeEnuVitz7DXWhFxMwE6NHXZxsGx1t7mWJroYLwFPoN1BV3rJFzjP7Pq1HoWAqrTv",
  "key19": "FeKs1vfyfTkXbNKN2W5jSDHdRPgVtpxG3q1cVQ19MrgP9S6Cieak4erc7eRvUJCpHoyhChGseZVFo9uydjFRhhZ",
  "key20": "4nPbqKATo1tXmMwgGMhReVpgPZsu3exEiw1dx8j393K6qPruaZ8XqfsPQMoGZwFXBnkwEyJZG2yPioVj1nKjj2L7",
  "key21": "328trzJ8L9Brc9JmNJ6kCeE9xxhtFEKQveqLcTZiWdfL1JK1o2iK3JX7q1rn5PC2JFybF6rbofKGXjQuLA8LV4yH",
  "key22": "4vPae7s5qKbk8QzFaR7pcAnTgRj3jvJStgiUxDxKuB7LdoBKXb2Bq2Gg9anTCvM9FHyGd1YKgP4fUovFiFduVTwc",
  "key23": "3dwnafkonpvJd2uW2aCfNdsFMVcFdi8j3rhBhHe3S6DjLGkBBAQWjvXT3XmeVNLFydTaecMhemvdBrNqxTYz1Co2",
  "key24": "4kGrdtr5xeSyMBhPuC6ye1PRusGT6KmnQ7zfap8Fs9yRJTZs9Mcp9yttZbhJN7wNrfnrvFCvihVcL1a6QMT5rewJ",
  "key25": "3yY7EmbCYrw2n421chhVVRXz3eTHPBnpDnG6TyAZmFW5VGCCwgAa8tzhFYv9Jhywdx6tdQqkohXC1Cy9eBSHpoKu",
  "key26": "4Dd8pZrDdkhvKCcmrjCHJbTQTqdrfyGAjypqpoeNjTkvFUayqAzd6hGxWHswpcr8fAhvBjsYsqkr2cpQKp2A1fzr",
  "key27": "44Z7QzaxHBNNXTK6McB7dgdR99p3bcjW69vWGxDjCzRocRd1JrxqeoJmRSfpGkqQQK7q3Ut89wduJ3vib8qosE6n",
  "key28": "4HhYDNvTCBPXWPF4bE7m1VksukEnemVMZt5MnUsiF8sWSyjzkWAubYGYJiwJsUAiYYXV5NF3usV29tAMvcTXdWLM",
  "key29": "4cwapEWEPJXSN8TCjG8iDjTuf3TR1TgUxDYqRzGTLH3ScyY5hFMPpW79wwjVxqp1KcKNYZtQvr6cVPLMnSovmNGP",
  "key30": "Mx8cuxFkAFLP67uZxWmN3kX5KUZksW34JaPEPL9RWydH9Hz9dR5K8K5HUddxkK7NHx8iRAeEMwnSQjraQYBv123",
  "key31": "2p24DEHoQ4PRm1MqxmZQTAdZtKjBgr8emSzKQnfJDf5fL4aCDL5R2BjgzLuDgCng2pj4TTE1fiYWs7qvXmYZWbmC",
  "key32": "34sWu5MJgNR6gdMKyv4pck65BJEUVzvA16ui4VgVkPCKRtH5jRueyqo9Bk7ecuVGca4eKCCwX2SvrMG4Ewqomtbv",
  "key33": "64jEEB9ziBRzmTpxYSTBtXDUDGHkDNhJM2s1Lf9RqTdSufXWCX7vV2wU6TvDskehz5LuBjwwM6XxKu5k8RwmofWF",
  "key34": "61Sy9xYVLWTgHdTfC6z5RWmYkN9XMH1PN3jV2nzHYBSSha45dcZkWVEB9vhhDbrwkzeQKRNvkKBkUXGVAE8HJQgi",
  "key35": "3TB9REBCpVZRWMNcM3kxBLfWVhWjbaDqWYd771dGPBfeXTZDep3Y1rVhbGZFsQp5KJft6FKXZz8xZWvefTaBMQAE",
  "key36": "567dLEzpvfZ6MCVuDzMLnt7mRWo7zLxxoAcZz38PGRBYc9ygyiUsb7vCvRyxjc17kGTjPBwofPytW5XLHTr8J9KB",
  "key37": "3eaykg8NF4k4iFn3w6bwbZKCZYUMz5RkBQfGVcUyfRkCcnqRmwFaG33KiMRYSeuEA4uiuasfPiF1ne7AkLMzrZAH",
  "key38": "4nUyjwtHx3EEiXkaTUE9uoXM8qBBd649bwWKFFaxS6iCs4mDFWepeabxLbYw8CDP7xfCAknCmXHpkwjwPMfoeBva",
  "key39": "WsnaaLzxxXuzVW4ETsfjyeL9FbcVjTSjdZJ1sMBYP2gVHjuGNgJcYqyz6h8egMQvhQrL1zcdnhw4YXTemtPdY9p",
  "key40": "3zCN4iq7izceA412sqRCf2jun6aYBDdonL7KaZraVj6GkmWkEmMnigMybUVsfiJGHk1ahE4ogcXiAZM515ARSyLF",
  "key41": "2KVY459c9P5rJuqxkcCcmuGofpyWtEgrubSCbpBJ6iKtRmEJ1gMLcfiCUuTgghG8VUe5B3pykiuYayd8MsUM2hGN",
  "key42": "2hYkBWBUoom7wGZjXTgk5v86cSAuWV6BvwYGPRKheuByVEbGxVmc6YZ3T9mbFFwhdrRbENS1DzVtwFs48kCgqKNn",
  "key43": "4X3W1XJs5jQmMr7zDAioPD1KY5aYppBuHMUZbUnH55Dogqz7WVWPkF8mN8vsTBxmw6pLmZiXsyvMWGomUcRNN2ZL",
  "key44": "3yy1k4AsXTKMBTACiCvv2CqFJAWwzDwV4Es3D8ooyqqCofyqLnxjGuBA22TKyyNtZZRdcX7JYoyzw4wwXEKQf1J7",
  "key45": "3x8Azp1sYv6YMAmhw7QUkYXwJJmoYKJNYuqGgQgisHq5bZBeSixqNsiLrv5tq1PMnWCq4pmT1QqJm8KWk6XJyCJy",
  "key46": "3Zonha7WkWCwQjY19MvM8opKqVSyiQeVM3GhNiniwvyEx18qCubZCBw7zEXVJXozLJY5bi2NGBC89HwfNbRKiuex",
  "key47": "3ZPxER7dpzX5iua1tqxXd3K88VqMTrZTZkA1dkGDfEbBa9kigUcqCtkv4AcHhpwJhmJCfhtdUQJiJB3tcT8pZrtS",
  "key48": "3uCt9jHrJasyFLCYKNpcUFNpHzP5CM2pWc7ejKgmzXn27adBYXut78V8zTWYugJriiBcT7Hs4mRppWj4CX5MBish"
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
