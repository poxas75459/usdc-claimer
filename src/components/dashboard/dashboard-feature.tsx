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
    "7BHC1wN92DnnK1c9hVjxUx6VUmC1KpHEozbywJXgRkyKLtfwz4GBn7Vo6aw893w3FhKQQ59SYaCswg6Ymh6BF66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n5TUzfdzmczENyxoaoqTKN3gkuH735iCZurXdWW9B3CF8biE6MQj9a8vY7Kmxe4H8471MFNQMkqekWvEQGghpBt",
  "key1": "4X6kETZwx5yxxnW4pY5BacpBwGkrMuxvFw7Cz4as8uzoxgVFu4dkm4KijArVLYPyNDj3xXTUuu9myhkjWHzrQkm3",
  "key2": "21P89cFZgyvCs3tKN5qox1VTUGu1gqqZXCxMNL9g4EQhji3ZJpt1RGugBeG8qxe1jW3K51vNMzbXVRmhmYeSi1sm",
  "key3": "2v2tf9i1tnUL2CNWBooCDzdCdQ8cjdeg1ycBacNsGSJ7DkQGqgtc2xhvB35kKTSfV8AN8j4TCspikDhQ52nbyXtm",
  "key4": "3gX6q4QqiLA3DpWWkNqonVfqHFQpns6qLMaiUpBZkZ749SqCNTb7hDeGW5wz84VrXgdWkPJtRzWg3dk1mccYJWdX",
  "key5": "mmtVMEujKKLccCWUcQKhMyt7wr4xMQRTV1sS9ndnbzqZpB5TNbhzhepJBFahu6o5g3aCP2P9Wzk3CSUDfqq3eYt",
  "key6": "2A7AayJUzKaPQp3tXWaaf6KZ5bD7E4NjxPvnZd2Hi9TGazQiGPXLNRmhgvgXbVQjoY6BY18nFQ6psCwTNu4Lb9ok",
  "key7": "4tNg17FwUA2Z1dC2kH6YTGVwd45yETJYG5TEFHcdCuHShMoD4XJM3biTgPXFogjgx7A5NapQY2fkASmdmTgnhCMG",
  "key8": "5SGCexnmjA6MDcM6rfWBHVfjQMpMQxQsGu3Fvphv9e5mwer65RM1xyTCaKJG6WSspn11Dr5EnhY5GMCqkpB3UBBs",
  "key9": "5Xqk1s7cgSx6eJ9LnJKagfSjCxWBdJ9kkfuWJJm9E3aQgbgdiGWKVRpv5RqgmzhEdVyr6VZQ5pADgVVBuy28pSW9",
  "key10": "4WMP5dqgxVPtGCS2qdnsMShc8dupNsY6TEeTtv4FpFDsn51Vh4mTEvmtG5SqUnMrhM9idKn9E9rAUpsyZPPz7N2Z",
  "key11": "5KvBH94fK9qfzkcaR645NbQt656HZPYc6QNYj76SwAWGF1G9Hqt7oRReQP86Gr9gVGgwi1hjVJ4vndr1tenNQWoF",
  "key12": "2kymh61p43xeQswrbeF8i5A1iypQotECCHUuJL88HvBvPu3VZhJUmnS2SWWXfk6RS72iMYuAEW898hq5xmTh4pff",
  "key13": "2MvMigpCZy4Gh1LnpwywV3eAuwXcBfXmjXBrmf9T7ikcGTxzZDQNWz7hhTv3hEwXg3q4hvDwX6N7eYPQMmDggBsF",
  "key14": "3w1AvWWLAhZrfyszooC1QndouatLG1GX5xbQwx9AMhmMnGwje7Y3YYPWBb977we1uMgrqPvDLqvHGU1tX6kEt7an",
  "key15": "4zmtT1EYjSGMqJeVpkbGepQEaYkwfK4a8EWExF8JU4Vd8wCP8ANAy2XXgXkGeGnUjN4ua5cM2aAg1EjMRRsyk2n5",
  "key16": "2wUm2xEFdNnaLbCjM9YmvXvDvmv9oYZ8tvCrLPCNWRQpi3TM53DDPAos4VDqcoyKBHrWWSHMB24zF9wzbjJcjEZU",
  "key17": "5PtXgsBTk6H581xCc6tbuZcMHAezPQX6JXRrFqVybpuSCW6NCM1gCC6FkKXCoeJqA6KnUMQ6UFzP7UykpMLDrgnz",
  "key18": "WYXBbHzqznCCQj4XZrCtBA5hRQDkKYHX2HttBJDnVUhYJU6bwKgJbiuz1LcqffyPruGqD5ysFjeiFQpfqsqQWiD",
  "key19": "2iBmDdRgsYU6kEDRigkmbWTgpX5eSH1METevrGSk1zkcAExWmKFBBhSLePazf3nuZv4cNptatEBW4jDahdUobLCg",
  "key20": "47k4cJkfs4hWeywroTXd8eYnCXtEn7zK8hpDCdGTW7NaLVboSjrYxVqihgbAEE3ouRHKTW6bVHRxSHqdnQc2M8qk",
  "key21": "28KhubaytRTVLfQtmhdpn3uCeTQoWcDteWaGXNpkLXvFWRk7ZSBEYWgoxGHSs6cxsvhS4tLMNWiRgG1rUGLQzNvw",
  "key22": "274Y7pHagXPZeZJNWHjYzxF3uouDxmr5QuM13YNFwfHk7z5eHZV3Kxep6jYjVRNTRqGThVU3CWfFv8pSdnwKTcRf",
  "key23": "2Hvuyf2LWCFmqrvPBsnAWZYCXQF6W6uSYMSmeSmmUDEA9KwNCDkpo8HqcLFysUJa6VXnLe3mUnHr5wgzGe28hMJm",
  "key24": "4eL596enNoL12SWD5cTzCBoRZdkmYRD86XqCvJDkaP8UD23y72Zf4MSrhNLjiNfMmmMvkW18pKpsNUm6Vugfexet"
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
