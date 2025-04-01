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
    "q1Si6K6jx5whxK4VvbbL4Her36YK1wqkDaWGhHwvGvXGVmZ5DojhdvUssLiv2ApF6ghKc6XEtw8dVRB717G4Ehd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L4tD1aBZe9tWkqwoqfZA72ooHQmRL9FaBpcMYLDCBE6HAEtUBA4cQ3R1piGzNHy6wRiia6reVJshT6L5idUbuuW",
  "key1": "2eyWQw6TsnM84Dgrg1VUcXMgW7XdKcJB9hVwLm4qYfYm4ktko3pC4grMk4iWb8N4JWnePEN4CMymF2boUG1ED8Ag",
  "key2": "2ma2bhhfurBWN38zu6tZRPumj6PhprnCgs1oeYFxieBKgBmxyNQrkjWiHYbt44Twm1XSC8qD2LafkCQV1DNGJfAd",
  "key3": "86buqqVoDX4K33ekC5mjaUDqn87ahonYjvbTuw9LG2uGzGY1v8KrXeWHxx7gSAyFubj2Jo6dJGQfWZRXn2TnNhv",
  "key4": "2eZbH54GZwzrDsYAe4AdVQrt8oJySaZiTf4o2BFDXbEa8W81me7ZS7FCzY7j7crc889dczf8xz1FCywj1GJTDnDv",
  "key5": "4XsMJwx2fewDUCAkLPgVfYo9f9KtPMgTGUcz85xyAgFu8wFq4cBBeU5jBg4KaonAkbF8XPgCuyDuYGrB3oZdFvpD",
  "key6": "3RNBJ1tyan12sGFS2pr7Nq77NVtPBzezCAyV1EDxgYAUepZFihSjHnVcoH172J7XPo8BtMiuVE8djEKXZU9TQBJR",
  "key7": "5LmZha3KDrJPsRzKKtS3PvCYUZnxo9tKnePooBDbivV6VEMeY1CkiaXhPgdCj4k5kRqpkjcSGnC3jGviTV3ytt7k",
  "key8": "5g1DLU8by86xbKGka6u4vemxpE64cZt31GTJsHqqFkSiqdLdsjCDbZmCuRTkD7nGmf6AWPqJWBpNwdqSE1TPQrdw",
  "key9": "3afAiEcPh9cncyGHrm4EqaMFLU1YuBjfoqbqndY5tf3CAzNwkFBk5xBKE1WPyJSssaBEMk9Ncgjq922jqZqE7iGU",
  "key10": "2R7ZA9wtJYRrFURGDt5iZjsHKSRnMCcXB85TtbyMqwTJuc4KAfYA1oULDSvmN4yxctLFDKGycrpoztfJx5ttRP5S",
  "key11": "4RSeMokeYryPx4UpqTdQbm67JYBKJYoCPzZdz8z6fmT7AxGaqMpHMvBNSpnrNSAiLk71zbF2cq9V4A2ByxMHido7",
  "key12": "5znC3eGyfW2REEQ4oeF9KNZ37wPwjejQwsD1auao3mxFpbVnXbVMcbedCmT2LCqXMacLXmDVBLZhRJxTSAHbpT7a",
  "key13": "4qf24G4YwdzguGrifLRRoSpn7EWpW1qZQkYeczu76YEXkzGeCUrfV5yUpxDXamUmNht45d4tBfXqdcc91x2BEbg4",
  "key14": "3qDJyEAVeeTfNb7orz8F9rcojwKBXgQU6KFDwiNTBGAmF5DfehaUpLB4T2iFCLJddavsDCtwD21ztygCk8MdeAJg",
  "key15": "gyW922mZ92s14iriE7tAoLZ63Wx8QMxbbVCEE6yikTKShftZNPm6BVBNMcSUdHGYyiz8JRNetKJcUG1piSVKysm",
  "key16": "KfHwU92tkErpZC9aG5cM38tw7GuLJriyLh9BRHPgNptGWFoYfGHYxjwCr8fmqR7hVvxwx9hUjBr4wpTHcSdv2pq",
  "key17": "74WyngfxFEFEDHaCFSsjn3decsvufdAXWVihA4uYAKdpbTgRKv6eyqjpvhANBELobji47yJdiWpmA9AFYxj8atN",
  "key18": "2CStrdgBhcUGHbNp4g63AwHKA4Way4TG8VAo4QAB43xP9JHM7zVBc7kanb2PcV4G5mniKYwAgF1G3hTLxMypJieS",
  "key19": "5s5zwkUXwKYEpXDJFVotJHeCgXvM7e4xZuGQLH9tWCxzXoTk2zzsit8TAaZ6RjmENSRJHcdtEEpzWLUhFA1cVHUH",
  "key20": "mHNCXhTmRoNq5Dgdh3VnzzhxKu4CCDq46Q4kgEpyrrSmT4fbjPSqX6egCyaSK8N2QDWEBU2sGYtCytyJCVLcN7B",
  "key21": "2xVZcqcpGBwe7bKZ8Wopvr65R61m6AicSstzVHTah7MZbqTTwFcF73HRRQbtQV1GQgwE9EQyrFbtwXPwY22siYmS",
  "key22": "BqoaPJM4z2hXhGKJjqce3mnUg7Qms8JdmaL5aDxsK2NF746QcvcB9VxeWitbLtjGdq5PNVA9oFij42ZSiRC7vcs",
  "key23": "5JKuRRgv8ANgSVg7xBMeDn33GhwWmkcdwep6n9jWJ8YWdt82bnHyzDeA6VMvMPrSKT63xykHj6ugGM37kXxrDTjq",
  "key24": "2fffCj2w4hAXxR7JJhqQ7XWnJ3XEaVzPvbP6JLeGKssk4PL1dhACshMGYsmx6eozifWvGP8QnKwg8duAaNdyuweN",
  "key25": "5BkERQNFvhuMTFyqbMLLWMeWmuuTgGXMsWaddurGmhsnhu2nSzcY6LXHUJz86i7fuEwurz8Xt8eDuR9FigVYBsyW",
  "key26": "2VCykpHKs1BDEWwtgwhAXdMmxw3yvbbhenPpVu8nSszVWoJUUb2PCZBSep6EAfmL9rgB2HznKu4ZpZ7o4AUyGCcF",
  "key27": "2YYaxcqgvbmdHxwgYACRqzneJqsdVuLHJcKK1pFSKhzH1CasBk5RWHtjWM8EViV5p15tme1bRxf4F1rZoepUFJJX",
  "key28": "2DAZmWe6TRzmNzkbjZJ4pn1DtNsrejxdNDFa2Egzsw7sr95ig1ifb3DYYUo7cukC63b9u9cyXoT8Xm9nuHBYpNQp",
  "key29": "2zj7DXPL23YT89ai476a8oFQ5cQdoeBCteRB8fgKVsDdzQawVwLm41J42AqB9sJUT1E1KtfHmAgYbEQJAfAnmmeu",
  "key30": "51ZD4L1gJeQ6Ndsa6hqEUBiH4RjRC5YddfgTuDAR96A7iD9hsoojcBN9eS1oDKashzMrWAntxPZefggCJkZBFQKg"
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
