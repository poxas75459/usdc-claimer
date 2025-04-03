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
    "3CsdjQEpZVv932sZwmTT1vroEEsyP3sd79ko3BgWbVPmQkQto4kPnjCuMysASztFA7Q48Wz8Eu7VyGosSoQXTnDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U6D7Hgu5DQkWaufp44nW5orvnYJzXX1mQxHGDDyQZjjVncmmoqBWD5c2YD4AEd5bQ36DcwYWLfjZKpFt3syK9CE",
  "key1": "2brhZf1FycFCsicJjZ9dDKAQLWkAvgUcytxwXzC69LjYFjU3foXtav2YhE7k3CMciqDNkKfzc6BRxhGgJEkxrGZv",
  "key2": "5FbVZWwPRi3fGn7XZEMwvQ1zCA89o26XXjKG3Zrrfou3zkNA6dFadrFcrn2P3ZFyEDepYf8YsXq5wNxm4AwPyQrY",
  "key3": "pnWsdbTJe4hynXCPsNvRXa727gg7esR563R6F2LXF9evUwvbhbLXi92B9h2yJqU7L4Q79nupCZohcWbDgC4sBtv",
  "key4": "4QHbW39hGVhhS5aKG3xDh1W7hnuYPS4n1638j5jV6TQeYVjwpPup9BpZ2mVSd6j1BX4NtVM7Tt7LS24sbvNcoBaN",
  "key5": "5gLozzDMzzzPAAZqAiMAkYBrBteeTK4Nrt5Y6avfsbfWw6fajcunydsi5PT9jTm59PzSUF5FTFdYeybncVyDBK9W",
  "key6": "4HpWJv7EYFM2VPQaSXT8R19ZSbFtqe5HB1NzVCsrtnBq9g4f7NBgAXNJVDP2CTRTAS77xaQVWG6YVZRERCpLzoVZ",
  "key7": "mnfP5rQGW1WZDLUGjoXjso9f9VZCp5JAFwsbJ2GVx7vLrqxecPF5KafLv4tpspJwXnNoRCk5z5c5qDCxmgeXztN",
  "key8": "HJ5NzF2VngrmErCFtidgWXVZaaUbeQutNMRnfLWvvJxDF5wNPZoZdLy5PebuBGV47FqUWLMBZMgNex9Jb3TKMia",
  "key9": "5j2t2UDTgUFYmbL7Z5j8GhbWi7s9ATKxwzTJf8rUbXFK3NSnTwvy3aqVYbwuAbngkvqVgWVWMTQttVa5H2stspEd",
  "key10": "VGuEQ9RMjppJ7Vxce1dcn7HU3s3SkBe1pF6LEZuPmKcGkrkdFtNidajtHaNtJ8y9C5xzYwtuKQ2vyHPfvjAch2D",
  "key11": "3ELKFVGgydYZmheB58fwmhKne1eUqA23BCiA2F3UsSmeQor8WRZdwot7RrEwELA9an9XexYoZcCgEfF62ARsWgPP",
  "key12": "5jRPLDAWfKSXYMb3NwYrNJ6M7F3CyrZNmygwdrnxgcndubRdVnsFX4xjW8YnvwTY1kvWgpEnfAm7GvoPHqzn65gC",
  "key13": "4Eb9AnvzAF8AkKDwrofmhNE9sCeEDgDBb3piyChgJhE2BtGE1WXKsJeYUkS3iprAJHyjcxJWtcVu6SECpzhPgypy",
  "key14": "61g1zFFmf2eMD842bi5UpUuqRRDbmRC64M3sdNjewFBWvmzZGHaYz6MctjVmdqf76vcNRrZSRmEerR8b9V4LNjis",
  "key15": "5Y1U4AgD7jgFpoMvK1u2yneXd29sPDFFxfBeWncoN4cVx6ZamePNrB1vJPNQYW2QdhYTu9yQXBTz86Ksc7uQXgmD",
  "key16": "3FyhpZLVKg7exBUt5iUrhhBWVBCMMFMgnMNxEdyFHmgeCSN13QUJxXWxBz5mw5qJPXtf4uGKaPnuiY2XTSQmLw6c",
  "key17": "3azTxYzfqZwVB7FS7biztFQXWff4aq2bqQLQLimdjKvKRbrz7sAMV9Mdmnnt5gmAqCEFXyGhsB4V699z2FeEPse6",
  "key18": "bGRBbVAMdWEFT3wtP3zeDJDbohESENqGQcGAXtJUFYjesAcig6MYD3nLwcbGcgFMJqM46tMMUUfyAjGGHXS9VDs",
  "key19": "zbqhSZQ25SuaR6gTM8UuJXWEc7Htrpe4UozTSSmBNo3CUDVc47vfyPKFBESHifW6ywJ3hnAoGnTgmrLVh6CtR3e",
  "key20": "8av8H4mdE2uUMq8LE8E3uo2wuR9xU7DRc4Em5VHjbDJ93nn6LkZhpwzesXX735THcT7HHGjemq64foL5JnxKxxs",
  "key21": "2piByX5tdAQZUGuQaGcMRjPfQpczZ4iUZdKJUWzqSdfHg6jbaL8W2k8BtAsm2zFSPZjQ9LfXm5tpkwCeHe46j9bm",
  "key22": "3SQphU6xeUVb6tT8efXTq9H5HFpgvUyyjtciGiXSBnwE7uKyazj29muF83CwR22XXHvUyFyAxn5mhsdHSSseqBTW",
  "key23": "2aZDapFg1bhrGkUzrqXQuMQ6b77fWh1GjfijNpXLU3r1h6Mn41CGYeWNFvuusgDm5B684q1c9KYuk2gbeFBKtuAD",
  "key24": "UcCkUSz1en1fM9Y5e3aAwKXWEemjVAiQ4o2aVDy7JK8XAdcjWWptNre7NtZxBm1CwHDg5KkqtYFhPhLQ3qouSW4",
  "key25": "4ggeni7FLZMYdzoDZjBpYr2gxFTpKQccaeLUdw8PC8jYZnFdi3zK2xA27QNZqYrYBSgKDQHvoGu7doLo7p7V5usu",
  "key26": "4FSRBo74uBRykFynhf396xd1g6iBWm6ux33ruoAVRM483g5bg1yiuDe9CyS6RLLbfy4rWL5ekeemw6w33xv4Xiuk",
  "key27": "4wsMWc9FSL4qEcqEMqQUhSpt1MLgi2fqjVheBFxQ8G43djN6kbbujJbndXWKXNLXXPFUji17hZJmo2qkWY3iN6he",
  "key28": "4PGY8octyKjdVWxsi3fgVSVPuvqXMEredmJiAnT7WVj2rofLt81LJroGqjjk36BUu9a4w4SfmpbS29XdVRUxxzJj",
  "key29": "3xFZy6t7R6ghWhK9W554wA7aFvryhSzdQ6SfGT7im1neyrciaF22SRWewwq3E6FGJNAd7Eq5AXgPVW1cZJ8pJLvz",
  "key30": "31huskgi5k3Xm8Zhbv1byMJJvwRwCneTSDmVhyBeUveMGwHWrwyJYUpE7nqN8d2NfnH2Y3KXoU2TySAYDQbp6KSA",
  "key31": "2jG2sRT9GbCzqEh17amv4vZ1xxDRzVCrGwc7aJrvAGWj8CzQTxgcGFAHYLFVyoT69VvfETmyysUMaVWpKQnSmtkd"
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
