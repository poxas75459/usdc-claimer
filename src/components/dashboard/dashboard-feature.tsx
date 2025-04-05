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
    "yE2MLEY82v51noU7cVHnCt4PvLHoVXk41Bx35TmxGWmSpgjea4C14wTiBgXq5keEWrvBRfSZh2A9uiVjaxAxuGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qpndjrm29hfRy6uqmYF191cebxiKxodWUWfCqrf9bd81p1FLFxm5fHw8MBxkEcaCeL3aMQaeJo553PSdhjst13T",
  "key1": "46ccMqCDGZ4viuJDz6BDKocr82yu8DJvP7zadp5oWqPArFyHMNZNxTeABrpcqP8f5Qr7ctBcCSa47Demtdgu5CxN",
  "key2": "6WMJoBmrH5GEoaBsW6SJ4qsUBsUmYEjWCxjj9Bn1ou9WYnf9rFus6EqX4JZqiP1v2pF57NSkD9YRDWUJqTxhTnn",
  "key3": "2mDPMB2h7Z38VTzatc6iiYXPVTeAjdNCktM9JrFFZSBK4PJ9K9FRDiU8PE3bjVZqoARZQocDZB6g8qBaiZjagGf5",
  "key4": "jHCwQay9CKKYB6YuW1q8LKwrMNNeqA7383ScYeXf5PjK2JS2YcwN2MbXFxmxcJ1G5n4aBj7CSWh3X9o6GpGXgGe",
  "key5": "2t56SNjThzQWJNhM2fJP3Mkdnxjm3kczshzYupuFXeURofmfJKRbp9d3g4uRhQrpgGfPKf5CT4GDWPEePaRjQ5T5",
  "key6": "2nkiFNTghUob4LoaKAkbekeAVE8mFL8HVsWBGpPX23QTiGs4HzEcSZexw9PvyZWp6LsrMje2xEvWiK7taNeAJZYN",
  "key7": "3kDRZLTZAVGEbotpBwmDpHSXzGfXP6qpwP1A4b6FBi9s3vpm1pq8hamDQraaohgnkJDR53pAD5FjZKU6zH5vQoWv",
  "key8": "24rHDg55Z1X6g6uc8pZFhbCRiiNxLrFaVqWcSGZVJT7SgJWaSmjEHHiKUftyVo371uyRqYprug9NkxHVYCBMLhkz",
  "key9": "44BEeka7AbQgdWW8ABd8qBqxeQUTBe21dxgzAdNN6US5FJ32xf5tFgYeX18RozzpNHaWjnP9BDci2BdkjZ2F1aGd",
  "key10": "211HyuUSnthWEJ6SMerDgtFzpyzBGjRkqLUVUZDLFnBHbc7Cs5n1pNgUHB8S8HQhDSdti1rxwguTDmBXtYpQ52Xh",
  "key11": "Wr2VhavScWDjTdb2ERyNhLfXRtCUsNYwgk8SVHpnzddR37mwwQ3jYqvb6EXkGbRALMyMMBjFrDN73jFux4S2sXE",
  "key12": "3hU7QSDEML9SRTkQhhBSzbo5HWHP4CmeJMHszVo3nxoCCWd4TxiJ6aaYPxcgbSMcGdm5WURdEt5o5vSspCm8jGRj",
  "key13": "3YHZZhDj813u9C2P6AYGpMMSb55Shdeq85YHUA1A13VZ6X5hvCKus1NJg1z3oMzN3MTmffctoA8xoTnnpecKgqXT",
  "key14": "3pJuUSpChJi7McFeuq8osUMRz6U4KzX6Y39hTtUBPyRoKpeyc2Lt96fZ5aYkor651Lc7UQRAMJ4MfxgQ4mvs2jAG",
  "key15": "2Y1WS5xDT4uh8Qcom9F2EUzmwbpiFU3C6HsrgWCK8Ja6LCs9aaaR2ZhTTZQQbbRJFP3gtV18uchZ2U8P56kvjcnW",
  "key16": "4xWrJZ9SP2do9XQmvxgHHtWYrV9wUB7FgMEZWdoRf3BxxQtuHH7iceRJzwaDYXpC5fADd6yWjpY5hYkDqXX73izq",
  "key17": "3VerYjCQKPQ5pQn7oN2tVpUuH8U8zDAggGr3b93UwHRzFWvitopnE5Pgc39PJoV1XrYvzmrdsrid18unyRx3c9GX",
  "key18": "394WaMYRvnazfENmMSUWDjVEF9yKmF549CYHeBpHKBngXX68njZ1bEnguyrCqxSwdrcw18bSXBvbKj4Z6r6S5F2c",
  "key19": "tN5C98YjfWCbruCruuyC76hF3ArnhXNcpdTBQ8tiNZV63EVBNnQcHaa2AbokvYNQCGYW5PKDv5uTdKro5ZwY8ds",
  "key20": "Y3wBYqsQAVWVo9RysRTro7KdYjoJfxjeBCzxLaUhK3UTswJAAJLHoe37vFaCzjad8VNSsiTUq7EsjBG3fRVgZLH",
  "key21": "4ZT2BLjxqiTPZaUfupMpVFYz7wdzNHP1LLWNrxSHVUs2XAh3YGTwnuESDPysrnNeEw1fgRyLuonj2xQu73BskRYm",
  "key22": "4XNp8N6um9Ab1RRiJsHtpEgJqNE54nqCy8gWzcStThoaTrMTUVHqZmWUxXmE5MefATFe8GzhjVwAoxz3WU8ESZ2e",
  "key23": "2LYsgzbM3x1iZPxJLrV2Aq26sbVZ5A4zTuQa6koZ8HE5jGEHJr1LPXXZq47PttDS9UcWTQjhSLEfNxzUfoL8VG4d",
  "key24": "4gHn8JiTsGwRweGQ5Tuf9pS1GQ8zg334hB9p5W8K8X2nQtJyXDpvgoXaewTvrp8BvPv3Fxi7tSbHGbFY9MdmqLN6",
  "key25": "5hwqxtmH6PC7oxiXC3wnG6D4SA52hiGVdB1HwkgNRixgqCz5XNThnrgtMYn2oCEDx1qFKnB9kCFTSQmKdeDfDACH",
  "key26": "3YyqzPrLQFJFDcCBAQERNDhM1XLi4zbBtELuHbxSFJBSL9AN6MCgcfJjZYTx5gh9NrUyyJtSH9HSVHJGGme4wHXP",
  "key27": "tcGkmcWbEcjcSnw3qgYzkWKqVruqqAnBECe3ps3Si8QjGNsgNWxfSqEFEd7sUdQPWMgmKggE9P4DP3X9qcVTkYG"
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
