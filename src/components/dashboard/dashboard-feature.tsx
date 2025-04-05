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
    "2UA3FjfySSJYHf5vaqBAH2s5PpPL6By33iggv7ZoGrkgjHsSmQSNqSkb65eKeVdjZdeZgFTvjzpsAEuNYxcr1wY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p5m84VZJQyM1Ug9yNBAMRmehHqmVSpawZhFF5y8H5KnkWayfFdjsv1rvXSj9ecvytE8RXQp9fkS163SC71vEJFv",
  "key1": "VqQTJEqfBvJUvv8pXQaobCzMCKVRLjdvmD1XDCSP61kTVPyTwUPpSciVSzvJxVteP9V6CMyAnUmBNNyiZfRJ9Ka",
  "key2": "3T6PZhiatK6Yp56mooziKMhcp8MndC2cSsULa5x6zxoLmcKtv3tJmFpv3nCcDDFZU5ofecf9FDHQRSD3Sv2Boo7f",
  "key3": "PwTD5xjufeY6iCBSkqMNQzvf6Qc6qKRuB2hzebbqfmziu1R2SUKt2MKVYWo2ozpkxjQidxQkqjRpQdDZWjMfisB",
  "key4": "5RuCN5gpUeWzy88x4cC15d8bA6S7DCnQvx6Gpb21cjvZxQabBJNfhuXD4WW3XaPv62nex89QLbKT7X9LiGPD8SCF",
  "key5": "2T7bxDnncNNSvoL8MmNs5iovmT938r8TC4W6tyAYZ9wdkgFBerjkVGjacQrZqVMzPcD8WDNqjsrLcqgb4N7u4RcA",
  "key6": "2ECHv1sZcoCmjqZMQ7mssdFeJba4TMt1miENEgHfgkZZvwfQ9B9AKoCDnANr6xSmL7pCbP1zN2UMFJyoRhFLVdgy",
  "key7": "3cLXNE6qoGj2AA4xbpXDKhrR3QJsWv3wDKb9HXSKRgaDxxPBVfNhjUvjLYsfXptKdTnGeDBSoABVp83GFHDjBoqt",
  "key8": "3yvoWPSnkd2nAH4QHxfiaQquFHu2gwr6sEH5G6MtFAHjp8fWBXVz5k4cSQxtVKMvXxVnyfDpRtyWD8FZ8a2rjbTZ",
  "key9": "kM4CdEBmEKHD4Zr1mjs97uXvbbLrajxE4Sm5NXG23TQkYdEoTHj4LcL2PSMqW6Jiex3yaYpdDwVFtT8UpH5GuqX",
  "key10": "4zfdWBpoyJCRR2XUHgY9iadKgjCBxkDWMAR41gKmMxMS6i2AheacU1SnDafcNG7MLSBhXiUWNeuy4oWrDTbpMfun",
  "key11": "42gkiwBxWeWrfZCSGq6BL15xPsyzAQVF38MAwShnp752ECp6RgYxr3xEndoo2fwGAm4Jq5AUeBGMN8WWPPu4VYKE",
  "key12": "c5NqpxcKtc1ec7eE9LLxBbXrd8TktYpR8iPg3mQddi34EZdTE3JvkoerGyvspNBhZkJEqRP5SJ6ShpgVKGW3WVh",
  "key13": "2QibTCmPLx2KfhS9swCxGt33pyd9ibJTKrJ43pc7AVGU1VMaxFKJ3Pd81wfTvXbkzhRxKr7ToTMR7NBuTA3dZn2Y",
  "key14": "4NnVBDp6sXa1RhseUtDFBnx41wt5LnM25KfgQNnm3HtdtgHbE1Db3pcNgQPcALUXF37esVzB1kyrTuiDbnrpgoVS",
  "key15": "266bAZDufbmXeLG1WrfoxqNQ71hH8rTAToSiyU2zDHfDteZqW891S1ZA5uaFtdbvUZD2YoP5xxjayzFf1VEUzvpx",
  "key16": "4UbSB1BHHVjmU6zuVNe5esyvQZQN9yBZFZFXs2asHEqnApGYPreVYjFvD9wr516hnfkN1r7y1JeyZdzqqB8cJ8Zw",
  "key17": "3A5WSusvw7szSKspsKA7rNjFTT5hvZTxHG9CViNBSKKfjFgnE5KG88f7Qo1reniDiEeGk1aKDHgD1Sn74v1d4RW8",
  "key18": "f2xAWBtWF4DHuzSiiwnTBJXCwhBzkWM8Pgd42RAkma7XayJhAGdBmQ3HKt9EfLbtH6fuvwno4j6AeLqyLEZxsGz",
  "key19": "5kLopGRXyPboQjmJHhmwa3Pyusmsmcx3MGe7eaGEprhy7TAwm4EiT1wJZcsqcLGdFvDn9psTeCh8LyYa1Nd66HtJ",
  "key20": "5rvm3tuyRZSLVsy218etT4ejyJSdBYmeSW4f31HcbCiVFK5TqzyWKvKuY94VKNXMu98o7vswyPBNoKcbUMbZg46B",
  "key21": "Yym4DPdxYS9yGMJTDYRPS8uEbXuY5pCcMtFKagiX5UTY9vGdzRu1AUrxCWiZQrxAdojdhqmpguFZ9KTnLSNq6uJ",
  "key22": "2VPQ1tTsk37MWAP6AC7rPWXVd55QKUrxzVk8xF7bX8xbwreQrQdM6AdWvm2z4ckCz1q6aJQTtExQSqT2MKArCh9o",
  "key23": "JcvrNy6syf19hdg5LXsineqtGeP3TYkd2A1ZRFbT1gBEiHtNYTv6XSWwMNLy2wEpbvhadAyuAwuNjgDyhkn9edi",
  "key24": "iwNwx6JjgEYWgD1VQpeESdTfKac4xZ5rtmL534DKpxe41NdupmSGSYQ19vKxpzQGLy23fGrQLF8oMUknhG3u8HK",
  "key25": "4sQqENryhDGHTck5FsxWz3fZXEE7KbeDSqDTZLuWXb1bf8EruCfJwmyJhpHHUNo51Yra8UkTRcZkoNPGE4c5mN9D",
  "key26": "5XnNnMySrrwpmhQjiMVVKA2RnBSBrf8GEJa6ZFjhC9oUdWUauzNmfzwU2GzRhTdrBjZymwvbecH3Bhvf9UxjWyZD",
  "key27": "64H6FrieQvZd8JvacNCuz48vCs986w41c8MvTwddXL2gHn6jW6fCv2MzqdrEQHKg5CKQgtmc4p4edRHputSx8ZUM",
  "key28": "rUEk3uMDbTX6cG1nFxN7XX91zoQDXHnSgxpgpMSoUafL46ZKJc3dLpy3AXGDrQmK84s1tnBVVa84PFhE6yVRKe7",
  "key29": "k5siNyB946Am9pT41TzA9Fb7BFRxhefSDdyvTUXt88N45mVcedCjVvQumcp6CHrDS9c1TG6kxESXT3VVUVd7Fde",
  "key30": "5aP4nXdBU7upGTkzpP5fEnrmdXRPf52LWfHhbVqLrivcfEqBFDoGRCBskTFFHW8gRrfCJCqacsXHQGqG3aGhTpWC",
  "key31": "5rczn4zZrLaXZ2UAwjCVv7S6T3sUGvcAQTnjSET2kb3tX6c2bfzaQX1S6kJMomCFSE93jzFVGxetoxF4zjt58qBY",
  "key32": "5bbw2VHBJxEw24sXvpLTD5ha7CTXXP984F4YU5Mxzeozp6ropxjcUQii3CqwbD67WKxoMe74A87ZdLAiq2axic3C"
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
