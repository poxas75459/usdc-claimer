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
    "35fPkYFGYBrhtgTAcQqyeGcQEEf8caSREMG8zHjE2sWw4qpN3BzxP22wmBLKbge9UA8LuNQxNmt6YY8veQmbWcin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qsygJVDRu1sfggDPgrfiAtnJn2XZVpVRrVg81Pdpt3HcEfkjUfnfnfWNXmr4JGUUhgzdnnCX8uyo1CFWmuBEBSS",
  "key1": "qHaxgdqDpAckdiJiP8HWMXutG4D43NtGRji24nEQPnvNy32vXD5XgXXKdRyd1gR8sYE24fWVyM1f3N33SFEiMav",
  "key2": "4Eoq18pN4BqZsjmzTnFkQ17FD145T5GS6sjuxpEc5DeQaQANQ7DCRsUKhrwcuWBc52VGQ5EGTvu21crdeNwQFyvQ",
  "key3": "27aHkMU9RgUAv6Jbq78Kem653n5VK9EpLVuFptkxuLNKpMPyVNtADSXjAdNMFsfWMiB3eDZxfXfZgEc8fFC1DtCa",
  "key4": "5PS7E1k7YDibpAgz7UJCPd71GNZo7roP4QSKuc9PC3U3C2MN5aDYz7Jx5RjaQ2sHd4ThN7erYVy5xEzk2KVJBJcN",
  "key5": "5WdwGypxyWiAjBUowBZKTkXKnC14sBbgSwsrgQuXpXPE6DFCzAtRxQzy9rv9K9Ps3Luz6X3hcDRrdvVPjU3BoDWt",
  "key6": "5edAjYK4bcxbN3t5BpE3NWgcEdsvdZFofnyBvqGSErQjM8RyqJk6A675L2wiUPFnKoFjys1WEQUqbJqKAuNR9YbQ",
  "key7": "2osA9zzjZokBtayj5FrAAgNfjWRrHHGxx2aPLxzqRWXELCFy9vwZBnx2hYJG3Q1LFTqsW916WBepNm2nvDc9Patn",
  "key8": "4vnUhZiXXtevnpmGw5DCKaTYZ8av8DTspdGuE97Ju2vGz72ASehyLjxiHX84vuSLE73c488D6g21c6jMKn83euim",
  "key9": "2P9Fi5SUfqrJp2L2XZLbS68AAgPcybHG8jfBtuWmiP5VVz32YUeP8AQMYoiHetNNY8zDnDePzetXqjoPLeSs7iD3",
  "key10": "5Lq4AEhH8dWepsZjUf6xGv2Euyz9Sa5jaZxGUTcmUARanJd462XcRR3nUzGCqyafD6ce7H8rmzBhx6JTPHHajEXQ",
  "key11": "4AfHKAraCVGMj3DCwGBXheLWY5h62n5XfPPHQ5TSNgpLMXhAq2gXqWcdW1BJMSYftTFXmscS9R5rZxjnMy6n25ax",
  "key12": "62RC7WuFyCaUTSMN5NF9SDF4y7x5GUKXE7BvV747nSHSskstvvWF2z8q2FhPyGJGfBhFHBmaMNLBMUzr8KuE6Mn2",
  "key13": "jRH6wKsiPZmkUqnJbLEL5MdwFUdPqWHV6t8AMoTqXsj6dD2kbB3CqqXFa45jGhxgs7vGi9eJmvxYNKo11urfomr",
  "key14": "37g8Ls6VPWD8CHDW5DwhD8BVTzHp8Fbmg1eD6JDh9eYFgFAxCJUXi7TtDjiiUM5kPCoFx13XefL7GkiDT5kDioAu",
  "key15": "47tBXAuKWfgdUVq6umjKDw52x5ieYGscUjYz2oCcmejFGGuAQ34j3jjxitmCibeQurcV3F8n5U7QenNXBq68GZT7",
  "key16": "4MzLk3RZCDoLSeSX5RmMsz1DDnJXPeDnh8wmc4XY81miGCquXbdwKU3AqrJ5Mtb7gGtC1qKBKcYn3yjvrru8Pm5R",
  "key17": "4WhNFqLWkU9vbbRhUXaFqp8UXMEZFQvcKAFY4Uq741mnmhSVqr2igJESKxUHcm2aofpJYttwyXw5bmTr3Zko6bvP",
  "key18": "WrcZgBY37sumdPanQNF97PsUSWow9vn85PsmHfx3hQKGPv1PcjbqzAuy7mPk4pzqNFyMdmgZkNkmZFDLrz9EwKC",
  "key19": "25qcLGjGRYeWBXgwEpj7euhfmhBaezz6tk1kwdBtRw2mRKhMabytSooVRmJzsUtRyLnKJesFT5HokhzSHphKfCvG",
  "key20": "213QHfVtgB95afwGMCsDTRWDb4KrBpBmUyBdVt3X1XcRXGtqd189nCZp3EVVUqKPkdnCK5tdetC4K7A86BBt3pYC",
  "key21": "4pseqPyhzroptYHsGwfqy4e8bekhuT3cL2v1oVfmzhWAQKVWcbxUdS1TyXLCmuuriN7iLpS5TQj5NNmXUNCHoY4d",
  "key22": "2X2GjRfrBjDNFGtJ1BUaTnJeRyDmmxkrEdqksSqBc1UfJH6mC24Wab1CBameRccUW6FQu4gV8ra7AQWaf82GRucG",
  "key23": "43fMPLUquZKeEfvpxoRELefAfkYCrJoTmjX5uHetPzDeT6yNxoGKN2tCbvYxwZnUpv4pSrVCzfZAm84efbTJzPfe",
  "key24": "xyH3rPSzyR3fhW8iEh6r7bikAbobLmFttJPSfGu9zmu4ZNj8tQHyQaqk9kgsdoe8pA5ikk1QKfq6nue6EtCsBk1",
  "key25": "4EkM7g1Q7pevDsMnFJXfh9T1KS9vgvKGARaXuL88aQVa3vjykdxerwCsCoYVYbhFBuPMh4xccRHce4NmbjQEKrAy",
  "key26": "5G34tZpk5umAYPecvxSuDDUutkzRdoDyLq5eBBmXPZTiRhACdJ9KPNbNWn2Pq4cMqdPVJFg5EvFEJ54FTPkqodbC",
  "key27": "5ht5eXHb9ooeNqjbVc8eGfoPVPtFdWqdNaAJqGwiTyxHCRy1Ea69gScuXNQqnhfFMXzs2fTC2ta7J9irBmKQ6Std",
  "key28": "2qBMhkmxdFBcbu3UaU7nBBqYF7HNba8sCyfxR8FAy25Exp5dJDKNmaUcYavzXNgL9T3ssYXWv7PXz53irrDnssVn",
  "key29": "242aBQBWunREMno6uBS7QhUgsr7qKWTkD9JXUiBTT5ZopgYiqDankJDAhWPtWbWQu7kP3L6inf5Vxu9Xvx4Eqdvv",
  "key30": "JkRdGYjKf6eEvrbDpKpzPKjne41EqwrRnZVmiJDvqi6xaiqDf1bNzx1HDDvxGKMUettGY58ZoEzXJSSfQsZT7U7"
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
