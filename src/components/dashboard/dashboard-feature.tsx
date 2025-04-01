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
    "367V2tYbnXtxWncEFXW7ntjPEt5Lx1xv45o5f8icyk3wQLLxuS3sC4h1mPFDwrGsFkDPyoyMWaCCUDFY23fdsC9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wvTC1WiYbs1v5u7UwRQvJASio6jcDgsk9ys7kCDjfQwZto81pHnmzewnU8WBVv8bt6CJMj9LAmKfFRS6pngJHdb",
  "key1": "3hZjiKayKHNiSFQUexboRxQcgJQf1QahYcbXPKj1ua2nutFH17H9tchaYkbyhPgrTgK5h5MyZHSJCjbYLMB7VR9N",
  "key2": "2nZoT79yyoP6YaicqjF9eqvasjScApSa5aQYD1TcTSCMr2L9WVh4Gn9VCsoUAy5NrudfFyesqxdD2AUFo1Nf2Pxx",
  "key3": "dJphur4mgZvAj5xZnUtS9p3skfeHcewbLFLM93bFx483jSDpDQvSoNZQQx6uXmHP4WbNmsSjZRv9rbnFBGw2bDe",
  "key4": "36bsCMyZb8EXjP1VXKbftRYFzBoTCU17pEnt94Q13LHh4Jbjk3sStPFNDrvGDF2zQ8mLko1KAfMKjYZqBbRGuGac",
  "key5": "3Q4uSs1puXcx9s9BNFM9qLLHE7Ty4CiAYXgmVMTcnvyhFmf8Bgmn5hjdJg8aLkC4wPffj1kVsdrb3gisEVWqcxsE",
  "key6": "3MnbQT9c662RSTFDLKWvdnqnf3Lkaucsa41ZwPvr6JrjGfwGJyK2jeK6uPcLtkL1irCgeXHhbRMZi87iRwEAXgiE",
  "key7": "2dcN8wuBRQzvDG2Dd3ueJ1ioKb1JWPNjn4mNgWm3Tu5AM9upV4cE7pfgmjFHs724yZpiDMsWEa1yyn1ov33s6KPQ",
  "key8": "42MPMKMKjaZeyPxoF7eBSHKuuJCRzVKA6k7uvm9y9KW8HfUnqrfx9qH6RzWSs8MEFu3rpV2bnVcqJTjJdcAwKrds",
  "key9": "fVwPWdtzehSA8FaDZu5D7XoPFUymQ84Qn2c5v5kH8mS5Xfe6V9xJJYhuiuDtnUhtPmX8i9XXqDdckFPzaQzm2ux",
  "key10": "5CyXwSTKfqqgUnHEZDNUgPPhZiyLhMsdWMNeHDgsiR7p8Ph9U4xXpdV7bPGSzjza4byj4KBNDwUiKDfgeXRngDhp",
  "key11": "2qh4b6HdMd7BaxigNTgxJ1K9wLuoBRaFCu8AE3eE4qVx7TP8LisdmrZf6kKcwp31ckDTwRSwLaiHhvs7jqKjsjUL",
  "key12": "2KHBHTG8XtqUC7zDX6T4L8G3P8YjJvB3L6KwFLR9k3ks7QEz5qoy9KHdSQvzH2diXNfcJNca8mj6fs9u4XBQhHCU",
  "key13": "3AyGSaQBKqqAPpPhLDTj289DcsJDH6oMPzWoVSUWAu9awBQ9wEbUVabHgqkadfhLCGUsNFBvwpTQcPzaYgwaUYUB",
  "key14": "gXvRZD9xXcEHVjpseppD3Zgz81oZn339oxMxA7kx4MthCBGKqKJevdkPTeCqgFcuosVqVj6FSczgojQGGLijq3B",
  "key15": "37guTfT7to7nTzqxiGCRScKkrcCNbHyA3AEAHha3Cx9chq2NHHE8VgDpmr7ox2z2qbxhbfXtNWT7nchuqnMh5ira",
  "key16": "5mQ4D5WLHr97BCx5dbcR83xpLzVJpjq4p8KBgWGnFhJtQTsxyTSn9zzvG2YUi48b2zLi4L6XBQQ3kvTcvev7T23k",
  "key17": "A2bWKEXHig5nrRE4ZPap3BNpWQX5TYyXuK3CTVSjWG9P12WbH4wayfaJPwdztgt4Xpdo4oGec5H8xA1tPuEpXy5",
  "key18": "fK35RLrCJdj8aX7gap28iSNCJVfm8gjAbx4SmxDjTLFgkN2KFcG7Sgp5vEcXYrBfbHKcDSEAq68u4R3jTUgJ8tG",
  "key19": "3QjEsQRBmYZyE9fU7KtPjv4x8hpKgBvbzqm4qnfYZ1eVquJCxfDLzhQirYWNnttkoGdVoNpaPKrkerVH3Nisp3hW",
  "key20": "5tNKcpPDe7rZGrnn5tf9UBYsbEBqwVs6G6DwnPR3fUuK26K5nTYUxqfgJyjZ7rxxsDprUqNCVbr795G2g6ykqp83",
  "key21": "5yMfknvTbtjbCSGQjcPmV1BVw9Y8RNAePfNeTzUP7pwcd4ytCYTaWWaHMcBLbaHS13TaXgbjg7UZAuk4uVngssmL",
  "key22": "3Q772EK4QRqqRt4HFnAn5GH5k1n2Yc8pNs1Uj5kNEEP1D9netvnSxqzMDq9ar5kGy1ZdvpwnbmT9ckqbwBYeAw6G",
  "key23": "26omYZ3NaNCGJGHQNAM6ALCrWguQ29dGLpKxPRKCCom8U31wzJs3E2vAKUGTcc8tk8mqUzVTb553LNkvufyC3ExF",
  "key24": "3rKxKrxQmWH2jeXUWodtybCChmFuzcXhxcF6ArFDRCFh2A3aEFQmMs8SnFMAhu3R6x3y4VBjShWdaq7brA6Sofwv",
  "key25": "f2C72qy6maCLDmGHMAqRDfzF5cwxgifWP5b1CZtnRMGKQrzufWrhBVv6rru611AW9JQE7c1pFQXWhXcXekKd8xd",
  "key26": "Ew2gNRqDLPBURuqTgcbYgAfEZrwdtarin4i6G9n6kYVpSUw7sSUbJ89a2PSQ15opoD8UHKh3hLptE83gaP52pDT"
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
