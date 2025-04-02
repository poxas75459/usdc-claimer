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
    "3FfuTyGJZHFgABCHN896viLLaWnTUjwtxkmW9QQX724A6QfMTSw3ydtch1Yjdwe6r2FYmS52VwwTJiawcqHG5ixg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GBn3iAsrEfHuhxd86NyHXuQNHZLAk37GB7ALhesY3e322V39AK7axfHKbq7NXN7bQi9cAMBseYwGQ1Fp1cXHEE2",
  "key1": "5TUiZs7qe94h3zzUgjmgBq2HT7eKsDWvr2vkxAbLpg8VSoofgZ5vobPEvJwQcmwv6C6K4u961msVqQZiGXREhSPL",
  "key2": "5b4ymTZjB6q2AZEG28mfD3mfhyxnsAWt7YUjMsNchMB5iRt9rKXHQgF7h4bQtY1vW6MfSVV5EApexjR7ExUjqaf",
  "key3": "2yiAnwVmwZzW2uSSRpFEQxNGsnJVocTZYL8Gg5Tis7sGnLeQecXAhWdqcoyRAPh2FCLKftBbERnZCRxN7AtMeTnw",
  "key4": "3La5qu8wUFKRY8gnb9cdTfmpDp1TqLuu8gtQaAgzankTUkr5crvkCazMQWcZq66e3mwdKtWnaUxcuRiGUY7crMae",
  "key5": "5TXd6pvBorUPRfZTiLWdL2HcW6VLRKG8eMVxbWhwr7U5sxWqh4MhCTMjGRUhxhNfkUGqdDxr3iPY72PjUcFbzDmp",
  "key6": "4ttkp1492xy9pchwcSmVKRhBXSVqS1pRdjaLH36JmAqZGviivo28sPWfbYCfumReBi9c7hLYXmk4D5ZG3nnfmseu",
  "key7": "ttBX6LXYVimub7QK2LtBQC8LrgN4fTkmwiVUzRgfV4JGTJ7F7Lk5TgKaZyVNKCyw7GXfJ5JMtm2DQhk8mdQBAHD",
  "key8": "5vCuWjrXoeWoon1xgfNYofMAQJks39mAWivpgdVk6QgvEkqkmTfoKy22AakdkCkZ8btfkjbu7EwzMAiaCQkvyW8s",
  "key9": "4u9cgHCzaBFdcPWyVeQ6o2SxaAdmhDpkNudLm42VFd3tyrhXA178yUNmxGbxiM3aLhQ8owgWDsbmuH1jgRkWwhQB",
  "key10": "4sdDotNwcPqa8GsNJ6nRbgrGZvfz6X5pEU9YPrFqnimhsZEU9wBafXq8Vh2QbR2cvfPVWtEJVvNK43Y5CtH4Jdfs",
  "key11": "5sjVhS8DaUxKqgyheokp1SEtvUeMvkMvaQKRxm1sfgwUvp1FnRihpe6FhwiBLfrpo17LjZHqu6QSFrxxDpoFdQSH",
  "key12": "3KUGUnH59v9dZEQvA4epJX3n8QEwMXP1Dv2GXjXYvgbHNLbZYeB4CcEZHJadme8vJn6Xj2v79Kic2RgvE1P5W7hS",
  "key13": "4WEijy6cobh7ss41zsquB96k9a1nQ2z8kibmLB1H1Y5XDNoY3ddSQ9bY1PZFiJJfmTJfP1PNPG8UsW4CGW29CybJ",
  "key14": "4keUCxFVpgVpChdk337F3Zq4TeNLr7jVtzhYzdFg6gkYUoDRj9bBJkenUe25MLDP2z7HLHMsPhRpyLx9GwE7t3w4",
  "key15": "4YkmxTGw4XqcnPY3vKprCu62K1bcARWZCidQJC8GNPBrdHuJejcnn85yr4URzQKXawVVt4gudaQ8bpG3d5Qyb3C3",
  "key16": "53F5fpLN7od6yodP8mBp9CLwNuwTkiMkjJPnNaeDnj2L4f1WS9saqnZUj6pCX8kffVY1M2pNjmjkeqxWXZxjZf6K",
  "key17": "47x6GykMeYGXyGWrvutMefkNFbZvXhPkDjaq22GGMjWGgZxpAmXVxbEc11CW5VmekarJNWEi7YptGGm5LvvGR7Z6",
  "key18": "5qDdy5n6BWXwX5FSt56BtGSMxWTLKcDDoX6KzeVadJg3BqHyzECvPtZBp2tKkdoT6Ym8yX8q3n4PPtpXNbSvzyDx",
  "key19": "HBLzL7RJ3yzTmrB4QED81t3DVt63Ta81RpSW2G46M2PRoo4896AC4Pf3S8FWjfZJ1JNyYFcqRCWp33qb6sdj5Dc",
  "key20": "4WjoGbgUUM5SEErEeX7TS6AdoYejLbVxg9SvnD41DxohW9Zj4H6EbXacmPBGCztTiJSY4KeHM2PMvi3szpx4sE2t",
  "key21": "sP79daSTacZZoN6w7GHC6uf3sTaHUonEPcrBw61BDbLFQazsXx8BHf3b1YzPnLW8Le5hZVEw1Q4JC6mHHkNUY4Y",
  "key22": "4uamsSfpyZR4TKhPfXGg2p2sGccPGDCHMygByGEHr8xWV2zbmgmTeVdXeM7C6aGGhTLkB8e9stS3n4PXKo9LV413",
  "key23": "33CHkShgrjZ3mHCT4tbopestHAfr85mADsmp3QVgFsFXCLTBosfZGng9sguKsqAbqksgiZwDqFD99d4E53SrbEn4",
  "key24": "ngLqgZ1ZmTnzMEzXTHt7Lc9z9qpCo84G3iAeUDUf2gGV5S9TfeW92qqzSh9fS34qpYMEySBRyZfrKgxZSbbYiww"
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
