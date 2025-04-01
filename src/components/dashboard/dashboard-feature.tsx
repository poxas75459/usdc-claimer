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
    "5435fENfw5zsWCZWghR4gkBSZ4Su9ajtMHjhSVTcovUu9ZF3SHhU2yPSzc8NUDpUEcpSN5vLwW9xL3NMBR8pHegF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yetNYFzPXbcPDqqKvJXdXTqFNiRVKsp6fAnNdfnCb7sMrPAUSv3R8BjSCJvUDaSC4aJu5jtmnAGC394rJz4gTMy",
  "key1": "2aGN4wQaComsJUzN5wMNdPyu3qegqsBe7P2tJJsdqRv3gwLU9aDHroEEGcX99vogvzhPosj5V7couC3uiUGk45tQ",
  "key2": "2xsEk8hNuc2xViLrbQnYnTDjL12PdgBuShDpAT6zMDH4Qz3ns3H22qUktkh4hpsUJzafJNfVY7tBMmwoUWXYJwvb",
  "key3": "5vY5epLWrP4RvLMuu2e5FTFnEfz2XL6R7WLWktLy6HEEJLw6XnfmAGH2VGwDbpuwp76cFnvRo5BgGgTohrPkM8CY",
  "key4": "4G6mhpWbWUcULg74QCJj9xekWFDGwWQsdRHRy9dDxmTXHFi3deKpaNvqamgqTb4Jmgim7W6TKsqQwuFqrQTW4rCm",
  "key5": "3qNjiQNCKPoawKnL9ese2NZgr55QJieD5yb24VYxg5LkkoCXxCRbrXxQfRGqASyhnvC2DLAjvt3Masd6SwVnZ7Lx",
  "key6": "3SQhQHXpK5Sk4R2WejdEMdxgHjAgadzpaSnsy9gKNmJnSt2iAJbxQQkq9mzWwEU5JCj9ZRTW8q7h6WMYkXsD1bnG",
  "key7": "4HKVBiff46m6CHuiQhU4i11GXk4yuwyPuCdqDE4wpNV3pRxB1vDTYPADLVSFkf2NhN863u12patELPALcufgYo1x",
  "key8": "5D7L9LnncDJDsZ5So5TXFqMadgTZF5ouLhtWqXqkp4vxCB7TMvcjm4MEPttDNEdRNWM5bo7Dw8bAJc4oy3iPmx7W",
  "key9": "4Y24dgR7KVEFkJMKeEeCPWSh13gaYRZxptN5GgF3B5GPU9s2WHGFTBkqBRVsiBcwppHkAfagcX7sw8xMjCqT5Ssb",
  "key10": "CFuhAZ9eZZLgaDsYCojoXQ4FBd1TwxXwtavaK2KnX77jp5P2AW5rdsKxGB3ZxSPTCXQ1WpkjZGYEK3tTD2ZMExC",
  "key11": "296aXe3rKtt5JmghNXorqCEHMKdWgAAJpRBTgd8jxEMYDw9rxoKbFKKQb5v6A9g7dmq7RBBaCixnBRLzPZKm8ZoS",
  "key12": "4hg9i5cVXEhjtMhviR5KmVCN1vVcZwSJCHWsdRnCsZLXdLUkfwqhAZJcmBueeuXRc1dc1MiLgRJ8X8fDthpu7xXc",
  "key13": "3Lye11BkKrpDXEUPzfwxiCRNSRMo3SWbUo2poDDRWdLLZhUxG1S6iz4VAT6wpR83hhQ1CeoMdTx4uPzCyUJGY3Zg",
  "key14": "4DM1fC2LLyBa9qknqALnzmyu5WRQQQkL5hLoP17mgKC3UbkpREkSFnFGRenA7EoFVnKWCSuPtQWsVbA6M5nPC2KY",
  "key15": "4R2oArcJfcsSJfwRH992xnXHJGLGZCRsFjUFS9NYZ4pop36fj8fZTs61dthBm1E1ruJ95yWG4XgJxKpBmKv1HxVT",
  "key16": "3JueNPP1NigG4dWwxNp2peqwkPLmh6pCft8iUf4V7SyyXyT8rTQRc1hE4QwWiRWA8kqcLkWxs8APnRwWbDyseeKb",
  "key17": "4o14GLJ6m7NwCeU8UtrgY2BjFRneied8UGxk8LTnbJQxaktT62DX4QHRd3HP25sn1SPAVZpUrWxZrDQfXjxnRnAe",
  "key18": "4LxUfFpjsPGW6NnScgmt5TRzazo2LUNJepA7Lb1J59m1tsjitwtFM1sNASddqwwHzXVNySWtRGhzxjApucGRP97p",
  "key19": "5ksqHb2uXVv7vLn6Yh7gsoqU7S812E2gxetsvv2aFcPi1NdQFrUEdKjshWcBbBWCTB8UjV18bfmuBKULcaM4AsU7",
  "key20": "5HKbByrj9cXdkn8ogCFWLB5GGc5f6ArvqPFveYQTtyRVsQ6ofMucYggoMY2YrDbbMGhwMJWQZ6jbSRumJDgRBQa6",
  "key21": "25PPAg9841RgFFSP4yXHdkKrmbNZuzChHxv1Pp3Z8CNrmWhEi2Xdaqm4iG2CT51DMUc5W6wk9fXvfV4DSCSutzjB",
  "key22": "5xKcFnnVxgigXgD5GSVbFd7HdXVQdaRZm36qud9m6jNxsbYXaDgdGNYKzri2LTj7cMDPUz9EvFeSW6KEi8Z8f1vR",
  "key23": "KBchT5VezGUbN5ucxBYbpwLopEj7YthuuafZvCq8dRz5nEb9ZPsS24g2EbuwEVxmPL8y1oKedBydaTonjssQzHe",
  "key24": "27TK83DdWg4egoEQ71yYjhAVdenMnsEn3GbigbE33voN5ccaJ8xTn6ZdgYRRqkPTocpF2JaebCdmWWzteAyFXtQW",
  "key25": "2DaURYn2cukxnB5ZHN695uydZPjdUasnwqLGyJxQuAHXZ6S2f2jG81pLS3tuYrDDV7QnzXnGCwBnXqezuF7cc3uL",
  "key26": "2fLvTW8sxC7zVE9c2KfcVt2JpKs1y9Jno2ppQhsvE45fMNt463QLNk4V4uBJhNvFZ7Ctsj4TVjfRi3gpi1CrBhp",
  "key27": "3nfueQZQn2HkWKxHKP3nKCxbD3qmj8RnHS4oxCXVcE6xptDN73PncMc7iShuL7sVpLRYXTQoFTC4zWp6CaZT6yuh",
  "key28": "3VmwyAw6i8Mih5tRdiPSkeN5jE2bV1t3JYjGgf6njQDsczQ6fvaiUYFwsviAm69B8sdoSLnnBhgsVBBeVgiw9stM",
  "key29": "ynbSdVPPMJa5M9BprXhazksTiPCEgwRU8u6bBtRwenXmdG1E93iiiRzEj3ASe8zPP2nErKh751B4BKx7y3xEHBV",
  "key30": "4DC9nG8UnNNp4GNgYWYF7N6ku4bGWeVwZRsKkuYKq4EM2jV8N1fXiAf4mTHpzrWLUmUPwjVS6GtLTUSqEtvzY2oA",
  "key31": "2qfZLgHozKqEbKNfLYxb8ahsskia6KWoqPc2tbpWiCtfijwaSahXtC8MxjTc36kFtMsedWn35haxVFDPj1t815Q",
  "key32": "5WyhnToa4xtX6KNaY13ZKKhzSyMBGseqMuxEK4RGbo1JJqyYaCWRvG5aEG8NrLxdY4c9ErCyBBBUwQVnEbwhvzee"
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
