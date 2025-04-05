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
    "51zsoTLJmLYTiz2WvoQDqvcprpqB1grDxkHjyVGVhdjxhQuvAvZjccsGLqYAUzskCNpUUHNCkKR9KbzAPvdDiRTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Cgb1vA3Pd4q2CRFooH9SFTWcwPBunYZgW8eoLzeMtvXjhdXUU3rpT9Ax8uaHS7oUokRDcpapZNnwqAH3ayifgS",
  "key1": "4Qop9ZcBCzTkxZZesmiQtdUzohMfeepiy93JEtGgAiiHSDSawjNJ9SGh3Kr9EE26cWJGmEaeuqkoqpU6riFmQodz",
  "key2": "3qhzFoPFXob8McnFradDvUTTaa35H6EWwRx2BTAaE143noFJRCm755skUw71UR1vHfSKv2xY4S1fuk42o62xuZNJ",
  "key3": "T5UPb5hsjknqpcJrBiTfaPne7e9hBx83wBEhszH9aMV7kpk82ymQh5Y6KMJPELPGAt9fwJzqcjQynH44ULR53Ys",
  "key4": "5DBUfcp7FWcDqz9XbTP2fP6fMJHHCgNmbhdLs6cwbnWV3KC6Fss62ECkAVfDajUMwnspbZN7G2mtragyGA5RDBMq",
  "key5": "4NY9ytv8Wh7YP8hfr8EPFnCNZJLhdnGDbRBfjZn3a6mufAPiTfcKwD5AeoLRuVzSPp5bisUUwPWTY8hsJHka3k5e",
  "key6": "2THyWEV1eji2fn91eS1j1u662bk6SFVjF1nuN2DJYxuH7joYcmLV9epdG2EbpsoTYXg5x7uCCUWNNKfhyhPrRiYo",
  "key7": "4CaYRyQm2ZrffXUGeqTdfx4h9dWYXJrwUbsdm4JAs282ycs4DVDjfiqtsqnqmpdrWAGZzPKJ4g8hRuL6NmVEFqf8",
  "key8": "3ar5PtXAXAaN5f6mejiT3p5JbFtaj3R812f2vg1kx68Uoh3GdY7xd4fEitu4RyKzuzLMNPEvoBQxg15fJNoQsW8V",
  "key9": "xoGjVhkjwRGC7jhkHhDNwraQHywAbJy2eitopbRhFDDU4aZ2GwL5GitqwyuBiAcUmWCLdbXrvBjsAEry7iVPqEa",
  "key10": "4xk3hE5wscEeg9LL9CFx3vUKYtUr8QPdXgHDFoZXf2AJwQ47nuSNXthHEG69oqNCqCr7qYHovS8Z9Zw9yLruFUBs",
  "key11": "31TDQ1bn8Tw5cKnVCMjuAQ1jCYiUCVLjFRfq1y5tVHezHGYmU8xtWR1Huy5aQEvMiCjyFVirjexdUi38xrpfRYUN",
  "key12": "4frM7hjapoMMDjZW91carry4vf1ZzEVK3stXTGLDsJCQSKoA4x6uPg5A6sJYYrN4VGFoRpURV4ELY8dSxb5zDeVM",
  "key13": "bBRt8tPuwjzSm2rhN6tXBwNqF32bidibWPZRpjJBBKz4rQVpNimfRnPHDK5wbBSM2yg85ebPy9inPrVv1gDHBZj",
  "key14": "2Bp2TLJZfa5V97Q37eddL2QNWJvtTgjhTTUp1FUAfkM1cjHFL8DqWx68yrCRKh7yr18iJNsjqogJDoiaRXssgNt5",
  "key15": "2o19nTt2SLauWLAJwducEj25uoBBVuUGXLeNLim8f4j1u3hsDomUVSeUfjstFsNm6XEFeCH9AUoFTyz6UcwEeYT3",
  "key16": "K9WDz9d56ZgTR4NC7ttPaQEmA19cLnzBuovt9SoodR5DHTPm99oTPixRcPEkBhSYky5FT4wtAdg3zfF3ECWQ5TB",
  "key17": "X2VSseYLRDCZGN13FRZHt3pUg6TR5Su9gmNnxKUyjmnJnQdoVcv3WhoETASH3VbHf9c9xmhnSz2ppCZYgyNpvpo",
  "key18": "s3b6PzTdsL3RuEdY7UXLi8KWcfRHyLHddX7wN1KRzy67hkRv7d4T6M3frczW3Q2qvDbpXFTNQLergvf3VMBXRwp",
  "key19": "4PWjyix2JP2HsL3zwoksvGnT1ojV66rC8V4mAPaMe5Uz1MMj8Q9azmxqDSXqLMqPLKDTWCGPTifhyXb8bcwN4p4o",
  "key20": "2trQsfzU25TmTaUfuzA7Xu8ctqAsadx9uUrphekaHx3mixZiLbKkp8MwDw8L7c6s735kYge9nGkZbPqYMk7Nkcrp",
  "key21": "49g1WAEusZgtqTXaoRerka6HBxPBTZNzzK6Ear3GsktE4pSkhtoVUnXm6zXzWWwtniuMfCP8fQwAicedwW1nrhJW",
  "key22": "2PgzLDpYFZZbVmABB7mrkYuw6zcckPpP8Uv4fd65MQgWfXrMShMMNFRyuXE5JN8gtxV5SZsiL44twTQBN81QVjZq",
  "key23": "9wXLe4azLPSA4t162jBcCnWKT4G8D6JyXiaoqqMs9U2dLpfJJEYG765V6gLRbezcDsCX1Whm72Wv3i9Jvr3aSwa",
  "key24": "5T8L7pzkRjUMxkT8fbiiUmcdnR1VCb9aBvvmfzQ9Z7ZQTTr8LYRnu4qWEc7Y2BDjyoCVAwTRBKiD8J9cnFkpFnwq",
  "key25": "2H9HLrUt5mGEbSQfdnE8SLUGGKpJ1CytDkXHFssyAtZHGsVRijska3wGXY58LZSyJYmshChoWRXSb99tc1ZYYmo7",
  "key26": "mxGfm4L3RffGasbezHfYLvWgaa5xtTm3EBm2D92w7rmKhKDzGgnxQvcwtvuJqWxUpSAFHuR4oEFio3pUxjANNU7",
  "key27": "5Qf7kqN6DchPPfNoSWtTMbHTpENxZLKRztUzKPAADAPJ2ao5iS21ytKNK31KtEm8YjUS7SRqwBjECPvLJoGn7pC1",
  "key28": "4V86A1MUAooa2mgnyAmq6bX7Q7RkenVhq5W9GcMpmQwZdugbfVpHedCFEX7HGws5SYhhEv8uwDRaZz4WBHDdTFbs",
  "key29": "Rs3ajEy2RyPmCwwUdAzPMYqvV5ntEHjTHLiPQJLNBpGu4mJ5xSxUFJ4iUbrmrfkz7BMonTbZZ7wF97gpzqUoCxt",
  "key30": "4udww3FLsZAszd7QWr6YXquu3LNq5wSaUsbUYf7xYBox6bzzfquBb9egCApJqfXd41D8rwPmAcTcyf3ZqddWNGUh",
  "key31": "42sMaKnhSew1kPKqkPjoqhkSqAfzpTPQfGHLpzU1DLhtG1UwoFkrtyWt6SSfTZMabe13tnv3TRUC3kamNRmih8dp",
  "key32": "3DKYu2fG2gPg8EehMCPvCcpG7wbKMaz8VrYbiTRBENpUf8WKqFANRArUoJG6NMdCdwb9GuQvJGA2znTiUiiMjrj5",
  "key33": "5nc2vwiwqPSxsNacvaPbHuYjC3CV3ELBtzk7R9D7XxFHB6zAWiHmKrcPkCS17ZRDanHjC7FrqZZCp4HTgJEiSzhu",
  "key34": "4dJJhCmYjtzht1hVHRf1qK3ff9R64t8YETm4fzVpX2skJJQB1Gm5KZYAGLbWsAgrwJhQT7ZbKWgLSfZM7bn1jRoN"
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
