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
    "3g9wLCPpZ2zGouXq6ThswwiA51L9GgTFq3mh6PqfcKtBAKHj6Nxye3LEvk8GPWW68ihf12aJoZVXD34RyhV3EJai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Rb3iE6JGWuM2QRtrPLcEdC6R1fgBEhrNQGohAib6Ubj7cjmLqWZcUQgAyRDH7qt4wRuRxkYS91r6cpcT1o67Hu",
  "key1": "26p3sAq83vMTipxrGmEyEvoA4n7DqLCHNWpWWL1bSNpeXHfqwrPXDCsxERynVMcYXC9DRTL9YgHXtLp9TRctiVu9",
  "key2": "3vqz37K1gLiDsQpkRWcnagC8ibK3r3AwFWvsPbzRqvovK7XNKbDWYGQrtmsVjkNyTpPj1mrJiZN3RD75BxBW3Jvi",
  "key3": "4TYvS84DVvTHj7GwVqtbrGxs8DhwiNs4KvC9xNzcAkqYjerdRYgy7diHmZotH1CwXbMQVNb448fDmdkTCf7Q5sNr",
  "key4": "5HUcb7nCWoHt3E5HxKgDj6Y829EYKSnGBJSFz1G3euWnF8ZWfQCj19zg8AwbiVQY5igsBCD8waNSg8pGzuMLUi5w",
  "key5": "5GPpJfLKjmQZpKuopfvvkje3DLTwHsrAfjicn6J4B2TbsVYYEhuysg63H5BbWdwES2RaQPiMpwZmreCkQ82xFKhP",
  "key6": "3tTtCHkFqdoapRxmyPpaTCtMBsD21k3aCqNrpW4X3o4nb8CW3oMDQ5rEM9wUqz4tyJqhKFpf28VBqFrhbXpYwCbb",
  "key7": "47PVmHBvJxY8xtH3tgX6v8NXgZTYf8BSk2eeNbTpooFpiDLHpNQZmjtKKhCjHy52SxRW7tGTgn2norxk1SqA2QQb",
  "key8": "4P9z8DR3SxRJayXEee4h1yZ8cJ8xxMrd6TDEFZDN2Sr7FUdagRb6zUwyPUpH3Hyk4e8KXZbeHJBnBh8ZCSJ6cgdD",
  "key9": "jvyEVSEFeikP9W8JAs9qfSUgRMgSbtxq8J2uxKbYymFigpw74FSsEiTuJecTz2puKaVKFaYZaKsMoSM3ZzobPNe",
  "key10": "5HRfCWBHdCj5bQU5zqcdk4ym8giujrv2oQGmk7nxtZZgvbjmkaHydQrwrQDNSYfXqgKvzg4vMhEJCRhD6ixWy646",
  "key11": "4UMs3HkD1eDT3o1NteE6no9mTZ1xFek4tNkuJhkEpeqULEusJuay27bfR7HXWgKtMSB8GUJXetzLpdw7yNgUsmur",
  "key12": "4Mh6WR4VgaAt1p2nfA3drZhmfWAETwo52dDtJCr7uat6dw4vK2oEq8snvnW1hXHY7G4RD31Up1eAXmppRA46sFb8",
  "key13": "2ZYqBmmR2VMk6d9RRcs5FErXhTKNpnBzcEjgDQrvdvCUV49XJebCtPQ2jJ7o8nbWqeavvxpuq7DWmRBt1qiEBfrv",
  "key14": "5iRV4cugUQzapGRfdLZNLdWoW7hEeJ8pNTzuPQ4wtAb5YPfJJ2KRbPYstofUXvyfLS4XaTZd635kGRXiVp9SFmfv",
  "key15": "3xTp9HZGMHy6jtfGan3u44WFP6mJA33qR58vJtDW1HNHkRh89mr9ayJMhqvw2AxCijkEskuHXswfsPCiwNHywR1",
  "key16": "4MGUUjvThk8azQ4Yc368j4jDcjRCvLadrpTxCF9BDLfhPznwxAuAbS9RZr86UtXd7AVmdCTtd5icum2NPdwBBS59",
  "key17": "5ukb9ofLWP9DkcyLibYheyQNwJqKwt3BGEHPYbwFVAsyyruPozu2QPnb3PimMgtrC6JHzTW5hkwYgsqsoxozeArm",
  "key18": "4Fx1mTxznkSCYch67rkFefxrTTe6smorPRoVDFT86PNrj9ZDK9XVgL4RwiS5WEXA2gdPbzF6srWqtvegRkdYNVM2",
  "key19": "o6rX54QHwdJJUFLKPbudedLPa25iS6s4oPTVNeWeTWA8QfwThDyNE7QYRThBouEV7ZGF4BVyHzrnm1icRV4sHW3",
  "key20": "3oBgnNGiejqn7VKxDUhXHE6mb817rkNHb4AKKPUPpK3CNgHey1GAMdSyzxt56ZcdCG89t7r38aeha8HUZGeWYLPE",
  "key21": "63HSauoDbDy65SDUhQiR6QD9XP2xnj3Yh4nFYJqvDMrxR4aRkp4uEXK2t9vHAt6KgwPbL57UzZbKXsQG4BjjSi4T",
  "key22": "h4NvtmvVoYkzoiXhWeL63sXhzD8icuhKjt4SUkogiuofvnm1JSCAWvzAs36dBwXjLCyZz4abH7UB99ry94BBrLq",
  "key23": "3PqNxBPc1bFYiX6AXhV1HkmFxvXq5yNbpSJnGj69HRxtKqffRfsXbY86g5MPTZaqkEDY7jj9KE4P3icdGq2N8RK2",
  "key24": "3ktBjx4CxbS7mcvbiMH7Lzuu4VXKLCBGwp1qfhTUyw4GW7QiRu3kPg4wzoQoKQSpbVX1HtEpTCdNwVKM7fqqU1cW",
  "key25": "2FwytMcjGk6JcJCMokiEG2avNwdNCMb2oeA74QN1h7SKZYJ6wAqeEzMXffciQa1s6j6oCHqM7FwcneM8Bef5ohVk"
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
