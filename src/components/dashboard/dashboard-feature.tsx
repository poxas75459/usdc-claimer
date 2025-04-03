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
    "5mFXKWnDmtTtt8L51Ho494p3CVu69JRMbJ7gJFhuUxucAkeiVfJXirhFXpKGhu6yXV22hBaWpBwZfWM71ugmKvs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dXwxjTkFYiaH3pXdSav5Be8XyvZJc6ga1j4umTaWSezGMEt5X5cD7MkhRQ797LgaRFpw2PXYdWgKu39vbghRn1W",
  "key1": "9ABR88MXHvYXaX9rXpXmBd5WZYNA1dvFfUdaiEhRoBmtF9kM2RSGFqShWhc3caVwzpL2TXdCoY4N89sgfxLkcG6",
  "key2": "5xYu6NR5m5LzX9bGBXRG1cGmHD4ZoRnpGNdmt1Bq7LKnDRszWPqsB7gb1P2ny2yVKAxa3nkMWSCb85syGHA7Ns6C",
  "key3": "5MkFHjRuCgsBNtJViFWEnKWnjr9gKsDXeqdo951sCSM2uEjUMHxb7JG7hX4Hf6LEo79avxkBWFRqqYLvqHeU2wLp",
  "key4": "22kqC7Lf5EP4y1vs2einagFdaDA1eH3nrxUvBLRgqCFtZUX15f27453SJJmR1ojJpbomxiJc2i14w4ETuYBWTizf",
  "key5": "m1DMjejPdg4uQwSj3XUciMuEPJVpKxhDKvuafMmh3Ee3KTfThLUUEcdCeQh9P2Gk6Apvke9jr3DSJkGztFdGYr8",
  "key6": "oZ3vo5CteVpPVXWpJi9jqZWMTyT96MKrqNEDmN3zRW8uyQN2sY4SbuDA47G3ynSkYLPzZyZNmFudVBmCtcayME6",
  "key7": "3VvwkjiXfo1XcjjSkoVCS35Udp2s52EEz2cMcdxq211mp47rArx3Bz1bgVBpDwkLmGfb5JXCAMtz4MBWrzS9yf6q",
  "key8": "61XgvUkLMhAtGm4YNbWvDqCn7UobmYPDa2GrxMrKYCxw2QWiJhGcDrdEEiNL4PExmRXdovTVHhJ2Jksoh4FArrfX",
  "key9": "26qSmmAT4aPKYgvE6K3sgiME3ffYb1LGQU4RjRVukeeqebwY4h72X2ik7p28C5Ss8A1UZSN3og8Wr14p3EAoQXk4",
  "key10": "2736tNNiv7HFg5rRvvvp2H2tpeaRQAwwnV4JTJc3Xm8C6jixSmkjZVgtbM7bVnEMQdpSRyoS8Y4CSEinzmKKfPtM",
  "key11": "5xkQHM2KKM9GxgbRBJnDJiDPNkoT9M7JVDvFzXR5DedTXXh4A1ERnKcbYomooTt6bP2A5zWKv2WqqXWkf8KSWhax",
  "key12": "5Kyo82qQbH8Kj9KD16DvaGfGEkfzoundLoHjyHQ59JmSEdVvevjMVRQSd1u4bs9zuNawrgmCBwVHSgP7vNbPNj4L",
  "key13": "25UyNVfa8Brq2AcAB9EM3pR4EQTZU3bNV4H3rpGMYFjq5EprdnvmmBDXhBvQuSxGDPzE5WBbrWTsdtuSpKR72udS",
  "key14": "2JF4AAJjzTLmzieybf1HHHkzr1wjegefuNDSSHjqjPfmFQEpubC9YVsZKuAqaFUbSAJs4JFm4fe8LoxV1XdBpK1n",
  "key15": "2x4sz5V3LkUCrtfsxLkcwvFoG4FCrchmYqEJAPHbXAAoh3WqWy4zsm4rr3CLHskFkztfEEHEwRJfmA6EMtGctNEH",
  "key16": "4ABq8ZfXB95asj6KUEHsoBn84q3V2oprNFnbdrRrufmRLh2i1zvibgpM4bQQoPKzhdaSXXrqSWRTiAEyc4KjQQEC",
  "key17": "5E5qBhEoBcwMFbFun8rkw15EgWRUYPam4YkRoq9X1d4hKLS1Q3n4HQfgnb18RA7XWaucv3vapdYEbbpUytQHSowA",
  "key18": "4VFiYXUh2nVzkp8cE1XWF1vdpU8tevUtUt4qiDTMMWTMWq6S83y3pJEaAp9CUk2WJzw7LF8YWBWuXscj3znx5Yux",
  "key19": "3ph2CMBeoxLBcFojYTUksvuBfhTkBVyMq1J9gUjQqDNT2hbumjgxgfA9yr9Pwjwcp64zE4SrhcB3RtoDB5Ykjn7w",
  "key20": "2Fv1NaRydwPyZrrH1smXuvmBkZ1RURVzzdzwZmARJ5JMCN1sQFcoZuNDKQafK1mf1TxzTBfBXFbLRswgCBjpY38x",
  "key21": "3vue2S5WA6ZWL6nZ76ipgRWqQKP6hafcZU6mhCjVXac46C86VHEXRphxqE3RHxcm1dY1RNaEwA2LAxfFy617H1wC",
  "key22": "zqWiZ8yWrckp7MoHJiGRwRtN6m9JRAAbiWtay5bWuqCRYbxijPNHnpnAtpvyGbYtXDHTbrFtnCPoZc68j1szK8C",
  "key23": "2pZV6K2hrcrr6WzgNEMsUCs2JHSGQE9pB5QbhfkQUxMLtuk6C1LcYPe4LNcKXsYxc49MeCKsVXsfVCz4ih8U38Bu",
  "key24": "FbSrWssGf62TrBKKh1HQuV6TmyA9ELDCAmHaMBY7RApx7NDKFY8oFmLCzwxN95qGqTFAfHwveBNUukx35h4MJPA",
  "key25": "2yNccjq1CZyWn3jbWToBqqbD7bF8yFs3rBQPDXhaqbUy8Gra2oRCDtAPgk7uNyZKhNTJpfmGe3YH9wnNGXtJizcR",
  "key26": "35eYTS6niqoWVHZxQjnas41k2LdceJzKaCWnqcw35WuvnXaodWMxAWH3xGU9YNKF8AqKMjvuvZodMmN7HvhUgPAY",
  "key27": "JgFquChE8s1MFmeVKPXnb8BXF3mXq71Pg5xgjvJruFjbd5wt7uL8rP5QePe819JYZARxuByodVaRLwkhWiykzKL",
  "key28": "5t9WxuzDWC8AQF8yoKusrBJGVDZmH1iDyergtv6C3o73dDcvrPtoYGp2AbW4yaLxtcVd7CMXQ1ARjC7ezwtYM9Gy",
  "key29": "5W9SLPE2gVYL35gmPhGotD9hEj6CvrwvtcYw1rXc5dfxDTbZsD1GUcTAcuGJfJFBGRoLMwfdetAiDkhrPxbYBYJo",
  "key30": "3KnL3hjnBoGJpbZPDAQt8miewGJHYgDf9AgiTJZNzNNkzD98rqp6HwzhBQ9Q7KiB6dGt1NZZoeKBKVQwMLxgMipB",
  "key31": "3v6sQgbuRELz1HLYu39jEUW21JmUeVSj4UGqcKi6i84hJbBhw7u6KKBfXj1nh7T2fuunJceNxv4xbcgBiHufhu1u",
  "key32": "ZwzLrBA3L4u6KRrzzkwuPSynnoDYU3dHT6LxEWJo8vguqRXJ1kdzRpBgTGEemzYYocxaNTXdDY7Vm2qX2eDTb2A",
  "key33": "49E9CdeVCSW2vsHBvscxASsATYLWVwnYHEyqndBtLfny2DpDQS81id3Kncx92Gm21We2Zjp37xPPdkSNsDMvNdvE",
  "key34": "4qvXKojinF7HeUUn3inDitqedUwEzjMSgUQUphTxSr69q41N83XLD28VFYTNsUA8KzhSfLzuT4sv4udALSHydWon",
  "key35": "5Tro3zqDAhVzQmY4wZNz6ddT92g93rAUyQ4MPQitDLRuedy5LEjveNTbGfTCAiDpaJQWBVVXmsNuSEXz7msCPBNn",
  "key36": "4QM7bbDgiRfZBzzrttkiE4cTm6X1rdbgQfQXKHXpRDSDRctt8KFHrAtj8aN6RC2x8ayr1AeTFVTtN7H5CXhJRsh6"
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
