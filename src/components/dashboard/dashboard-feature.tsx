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
    "5xR3B5h7swVYMBHPnD9L33VrsRCwmEZSVkWP7yNaeUkdB7nsunU2RTGkg4CtPFzGm5fUjQ6CBfhTiUD5JMyXDhSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238XKAXkd1HVB5gdeo5QcbT9ne2xLJXC4Mf2cbM3DqgP5jiWvPxhaCFuGvPK7fMkgt4wTReZTY7MdXapzRWvJWhW",
  "key1": "35HfqHzqfhWPxsyh4LcYhP5q18CKNKuENigwK5EzvKy5xAE7ryUYMqih8c6NGc8rrCLPxhLtcGzsppqDySBLRYHf",
  "key2": "2x5CuCb1dQVBmRqJn3tya1qMYqwS3aSNzRaGdKenrm23qFVQFL4ymxdcHHoe4Kx5NzLYLkMF8w2JS6PT8LSMsdpH",
  "key3": "ngyWVrt1tw5DypGkUkWAwRtiDCTLhT9W5M5tzMfakW4xcLTEz2w9vV7cHU37mDQcfCi1oRwRfpbnUU966QVbyQU",
  "key4": "4y4zKkwBkHLpXRZoppiZ86KK4MSD4hEQoF9ruNX4wA6YvXWqUiNSSzHeyW7Nu6UQ3BmQ5uVxLHEBc8KuyYwnPMv8",
  "key5": "VqpxtQZ6Wao3RfhM8Wg64VnY1FbxfbB99KvJ21ahN7irMXZWeXLZhXgG6cWEeCtfMAfiygaMfpKET8ocXZGbCnS",
  "key6": "4HkU4wvcbVGWBprSEgcGjUJHZ5AdboiPW4oHgAd39xnY9PQg9WqReNoqi3n3qj5dj7kbEQJgjxbJWBLZXa29bg35",
  "key7": "2tj3JqCGyRVg16275nYrozrjx1eV8D7MDHuyLq8ERqXCtwYgQMgLobPJ3nkibiuPKC57PL95KEU7MPi1MrvFJScD",
  "key8": "2sLVBY2E5Z1XaHQTcppKZn994n8iiUu4n56NgHPPFuLvJKM7dphyQna3H4WHxC8LQjWT8f6aY4uxzFa6QnZ9hEKX",
  "key9": "27BN2PiEdGdbkVRDN1bybfw7tWnT9cw9f7UjEedkR5f92jyBxJwLocKjGMTM6TWE5F6dR5YuPmhy9f7eeJjwvhip",
  "key10": "4D9bT7QE1Lw5JPD4eLHyqXraCHMVvQxcec1TDBRmSmk3zyr5MgYYKPvFDdrCyRjpezKWTRcyZ82sSzHx8w9SpuEz",
  "key11": "3ocLBSsVkvBTQUBKjPUQrzvDnuJBhi8cT2TrPFu5YwDMvz4WB5psaBtwedFguGUMcFnbVuKYqYe7hufKqERP3biH",
  "key12": "43taG8GcZuJaNVFVZdvzE4AYGq2YP7AtqmmQLv9dmr2feizBvWtuAaTv6v28zoCuzMdkNGrWkgQXu3eJjquWBfcU",
  "key13": "5q7KuC9vXRgDCcGbeAcJb51N9mRm9aBfuf8wP5M81FxisXCN7RSqBiUf4w75aQ3gB8L4GsVpzyiNSzgXhip8bUVb",
  "key14": "4FjttPWoj23VeArtL6mWzikJdcZPZ2yGX2hHMmEYZfJyAbE3e3wohL1EXen6uuh4SVsPJKgotSv4BkCa3oENFDMs",
  "key15": "5E7nNTGGXxqh12PrANwrXn4diDCUn5HgtaSfx5cifJJZ5P3DZTRzSvnKH27BNEvHcWFNsDsWXPySuSFbhJmAL8NM",
  "key16": "3VZdM2iMPjAZ2yTwV1vG5xRdwEyoeWCb9S9VpGx5VRnLfML39UD7cHw6AcGGDNJggoFTE4sW9qHtsv6FUagrQjG4",
  "key17": "PRJ8eCRdHynheGSirV1fmppaBhgk3tTMUdE32TNDM6swnVQgE2Vukq3txxmHvSD5BHisDs8onHEaWqViP1KDVBg",
  "key18": "4m976UXi1GSi2Urf49x4QmYG1kUpbZYYfMaS7YyBCzUNMWYcPiP9pML4DF8gsfsr2nmDFtKxC1Mgz8ge61ZqpvBd",
  "key19": "66YdSh3SEiSdwuRfcyMgYKS7KXMCTTAwJ9W4g8cdW4ReBALiaFkfPyEKmgNGjB8wNLxE4MgM5fRctrfPUo4uxeFX",
  "key20": "ZsXm9jdAmbLJdHBPok2fAmdiFYcfqvDd7CkVkZjtys6pd5dexdm76cfAToBhsGbZhx6QMNtpFnkEU4yQyGaw31p",
  "key21": "3P22QZXJfhFqLPSNvJBddGyaaZ9wJCEbxeKwtoQaPkyawPwxb6bUP9orn7FaqKZBua8vXvyCuaWv6hKgYMPHSp81",
  "key22": "3WXM7FQeNLUDB5Ehxjzc9WCSDNJS1qggkAtMbmed583ExEuXRvQyqTWm5nzTLpbbPfSGvLx8UpbFUmQGaysC9SgS",
  "key23": "2LecpPV9RbBeeEfVMt4BhwQUNBEaBMzN7RAdoiuJjvCGmDoHgRTzAHord1EYprGj2XZ4UDLHcyaJSKzfFTF983sZ",
  "key24": "4YAGQMe9u68YZ3PM9x3Jv9NMpqY5j8M4y6xUERyLQSA5CVbQzrE44KJqtxAptDSwnv8oyETuxYnu1EQsmktru7Xh",
  "key25": "5cRUq9j4rWuidL3MJWmXPWLFdxG2xF5wAEqkcDQfx1HPyEaiFXJMZK2quwRZHPHudX6tNdBuWoPGBFqvvJhixHqE",
  "key26": "ZwyQ9pc7nUsjg96gFHgRGEpmkRibJ22CJZ5Wo4uM2AzW4UrY5ApHUY89hPXthzLc74fGozfiiQ5sCwQRSRATUWH",
  "key27": "2oJ6GU86mq3LaX3zwcZ63CZ4UK51hu39ZBEcxYRyN8kqUhniDAQ4Xg8t89fj4YEgRnWwEbqXVFTWjp2jo7Njxx7g",
  "key28": "ZuopMP6V3Y9vFCWk3vrrB65ipPTNwtk8DCaSUUDbhZTaSNnAfvpuosUqF29RRFeBKyhJ5QhYEGzRwak7BmpcArP",
  "key29": "5T3DKtkMwX4qQ3jLWboiuQu86BHG6VyfSNt4ssaWopWR3ibwrrPZbPo99VwUu7WzoBSLJXVj17L8h8aKBdy3zyPH",
  "key30": "2XKQCcizua3DZWyNTyzTv37kShfnWnzvthgYVpQ7pJ4goWhTKGy4oyRyt7HCkMQpvpzcU4fSX1QPYe458sTzaPwu",
  "key31": "3apq7MTsWCZqLwpVVgR4zCiy2MDWG8drFBJZhf3JnA5VT6BRPGHee15jy5uV9NHgQbJj1kUhHgrFqjNhUs23ze53",
  "key32": "5YWQ8gZtoe6xwmRD8TdoRFwN2tm3bDnn7o7q6itt1QybA2muAQ8iHKpMTwTHJTPkjS2TXnWw4JgpXEjVSZp7vZQi",
  "key33": "4ppSXsWGTpxX3eTfwBHudj6jwaK5raEy3zdfD9XybACtFDY6nBkfs2DhQFeKoMqub4ztHA76Uiq76vXtxUu4ihrq"
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
