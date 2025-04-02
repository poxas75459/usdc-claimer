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
    "5FBX5DzaDmTgciiu4YWXicgBn3U4AX6edfF7mnYP5dTrKqdrfWQhwwLcJBzBKptyyPE5BTg47zbMtYMNvDk4gZxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K49wUxQHXY5YbgtnSssFTKQEoH1EEVygv3BTFvnx9eB1mrApwUPNk4cWoE8LuHCYQktSX2p31VYqWBk3FM1yQ5j",
  "key1": "57ZZXjXrNXwntsitezzyopcVL7CgDZrgoKv7T1NxBxrrSJVvCokFBvRrKHHUEKRcRp88HqKsiG2DFnzM59bUtjbU",
  "key2": "41XwAaqZ85hT8RjacnUheZcChY1ajSRjY9fC1uJfkKZ4D3WP9RFg2oYqb5M75ZGjCxnkHWv9ugFPEFXLoGZy29Z8",
  "key3": "52U1qnKfymEzAQnc56nym29NpDmckkcm1Pmktkrvuu5UvaJfMNUk8AX1BxEEX8NszAoKAahsypfewWzLNreCKxNR",
  "key4": "2gsuUXoQDbPRHFADJ5orJRpunYqX1JVLZGBiczukNdPUWJv7WYkH41bzMPyaoy5WsU3npaacaN1XgYyDbyZajmnG",
  "key5": "3J3MYuut3fn3Xzuk52fxkPzG4jPr3egP3VZUcxKMP8YviQU3EL97PZ8xA2PauGjv8bXR56Ubh8DQqQd2ZFCRM2np",
  "key6": "3mcVy9odcKUa8U17SPChREHZ7WD1ABKWaTbRzFJAaBWE6SxFSsMxqUfRqJKv8a3FWLT4qCe4dcTVcgMSetnx1bWC",
  "key7": "5g76Khh6DYYSZH8seRTre6kMQdv9KCL2vQGP6CowecGZy97B4Vh66tk3XMdAEhdYKZBoqbGrHfNjHniEQkpUJGBJ",
  "key8": "4D2XAuSz56PEHKQVUGtYW754vX3QwjWe74ooSHBk935Sp23giAnU8Dd4P2ma32qmyNdL5DHoitA8PjVpNeLHESAj",
  "key9": "42cxwSVSMULo28tqq4zfokzxTmfbz6rQMjgzZZncUfZtDyF23Judnn9xtriC3xfphgh3dDMHpGbyDqkGE45eHtoc",
  "key10": "3uHNqsC94Gnhw42844E1aUyohP8hBT6kUQUFA6vGbs7B7giyRwxmqC7TKtTjsAWuPskP1uWS2gio3N7wptHxbaea",
  "key11": "dWqtqHbQTa8mheMFHsq4RDzHDEiuqrrLWFazUNuR3WTeFxscQRjFrHwY3SGF6DVnNnX3AM6wdK13vP9uBVd6sk2",
  "key12": "4EgDuX3uvjgYjjAxke4oPS2BNzQXopYwGoL9qXwjz2H2zjhxqMSH5MhzeiVKpw42mkxkrF3TZrv8PgCRnBhjiD58",
  "key13": "4W2uy3tjZ8i6CiUcRpq8qcNkqHH1kizTpWg8uitQwr8SmCoraXP8fxSxhrkAx51ChsPcZR5qybyuQztK1jxHxw5d",
  "key14": "3Yz42E1mrLdpxPJ8Lj2rZGnMGUNNsK3L6aCxP6FvjJ8qc2LNf7dinS8hZPWMzZFEmB7MxkvCHVmcWaued9Pw1iwq",
  "key15": "3zZHJwwQokdvgqfb6UFB7Gv8azud5Yn6tS3HsZZ3EFmC4wjE5YQZkrtSwNNQSbpGGAJjYToDDeEzaVAUycqYkhZP",
  "key16": "its5GYM1YMyoYNmZKEpEVb7wZTiR8eyshKLBqsSZJLyqVGGHvv3X4ssvMUiDYnMhgV2yqUtayWmsT7pSAMMawop",
  "key17": "5cKcVSBPEZE8kMG2wqBX17mXtXntu2ASXBLga3LgsBdZfXZWDHbs17qcs5cRHpUhQ6JfoQJ9mHJUPdCBAnmth2sS",
  "key18": "J4L2mm1CJBBVG1WpqS1iCPqhQfjeLbsynmhh1uhMrVS5fyTEmy9uP8RrjuEFKUqKhzr2HTpW6qWhM8p5hPssjVh",
  "key19": "5iTDZGpB8bmAqeGZthWzYjmjYhekNLRcD96xKTnp7SinP56TcxH2QaFvMAeyDm8sLNDpiGURtyVNEqBCJEfgNy2j",
  "key20": "2mZRdyCf5DMEozEimnKB86gdax5XryRnMtfRibGxQcuFpfoGMHSC6zcfBrQeoe67JDoKpBYHK1RcYwKtrhZcTcvb",
  "key21": "45Fvxjgg41uqDurfwscYmNYd3Dt4PAmJRWVdqwmt1JdkvAC9q16epmkrTaH2YrUTeRrhzhwnkCEsVBxn3mp6mThv",
  "key22": "ANCxmXUApxZfwzjPdT6LzcMUMNhwKn2Qd7KYYSzxsFeUZd3iYRsHKoYu7Qge9A1UeLFZSZysb722rbUX949izSi",
  "key23": "3EFgqLE84BwoydqPj7LTsGQpPEw4pDhqkZDb6YktsjkrfaaQWCsyfvcdUZ9xYMwT3iMnvPo1feRa5FCvHY9daiF1",
  "key24": "4dNmKkGDd1kzEA7f7NPjMw37qoEFVKMJtX3FbN3sRehh4gpnz3p6Zb7eRFfjYUQdLo7NkDx4vUJXWCe7ob5Ge9nv",
  "key25": "5btzzhNUZANajqgXCMeyg2xm8S3MkJN5jTJ8EDXKLgjigaeq4FEaHLuuJ1kQKEDzDRS9ZUsTYa92SmwLyHoMaUyt",
  "key26": "4M8i4iHEDi3eqB1WUTKYygBVHwGNiFG91vZJWfjaWVaf2YmrdmizhqJ833YmS6Av4DNjJ7L3bGSN4er1mdyGemEN",
  "key27": "21dMn2Wj6SrJaNtbLzLem64rRonksfjKzkcRo6KoYRdN5DmUQJ2CwL6ipNw2PND1GxhLrXECtK6AQgGx3p3qYNHY",
  "key28": "5Jhx5Zzf7PW7iqRzVjU9Xu9H2Z7dQbZSbVX7zFFUbkLZikj3v8hFTqDZ87mPSxrSxcBx62EUuLHDocfk6Tx3V91E",
  "key29": "3pR3i55NryGjbndSrKbFZxEcp35uq2aqdnHmXHP2Y1RukgkmMqMYZxUWXbLFCi74M1kZ4CW3XwMEUqMKcgsvequt",
  "key30": "3q9czvQKUkPWR6yzMFXN6P4qqEYvsXXj3ySH49bNX5Uh7mySx11PJneg7ZTNWfNKSeb4GEhhcyYujNUdJuZD8Nug",
  "key31": "3Fi3pTjyhXd1viqwYrqRossBzMd5sGnUYprYXjvT1dEYTxrjJKLUTreUioG9JJBGJZFVjGW37VjSeUmtuReCyD7Y",
  "key32": "3Rzo85vuxjY4Ve4XYJbp3MYGEUvVQQmNCzUuKC9sjxSDRRTHv2AMuMjiHBgjhsdenikutfxauGoRfzGMCWhwNQkN",
  "key33": "65PZAEB9ukodkPS5ihf33MUZxePXh2CwKKoR1rwFDh6v1pFFhByymCnq7nAGjKmdGSWuXWXymU1qUeW5BcdD1Yap"
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
