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
    "ftLXr7GAhrNuNoYEXBc6SPLJ6nZ2zbPeeUEYkpoRhfSu7WKUqHJQXfZGJBjEfZHqnX719jCBZoneoYTMbjg33wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2va2Az2Fu2zfUAdfue73Lht528a3xjGf96nys8HZsdvPbeu4SAqKBQWtjMNgtxGih1qFph1juHXGhLACP29zWNen",
  "key1": "2UyQR9yFz5knjre7bRtLJkGBDphCGCbznUbY1oCjQTrdFaFnGCLcfaPSm14WsfxTbhjRTNeawhsHAzj7nfPVYNt8",
  "key2": "3k9p4VXHEW72ZbQMURjabqS6FenbxszuW5aKa1DU6x1JjvkkEzftXpEPEg57sNSkvRXuFoejTUwc9Eg4gr2vFwbF",
  "key3": "gHgicMRvwoGq3Uuym5wQ7J8dajt5BEbFF4nMih9AucKaWP89cqEZ1euc4ThoRHnK3H2XKN3RCMB2LYgLPVXp2Qq",
  "key4": "2SpdKtWVLBg9gM1qD2vNpNbAKH2z8dQGW53Pepwbf8NGGQZZNPantuCFLAitVsgn9kNiiLZcZVGFZ7GjcqSfLiW2",
  "key5": "2wEKp7Y5WVarBu3HFimVJF77M7gpHWV256Rx2JGZ5gs4ir5pxAUod3hjqygdJ214iZYCQjM51wQo7e3WeQK98xpM",
  "key6": "92ADYJtMLtGQQtZrrNUcPmxorBPXSXQhPktPXLzaEZLs8imCa5VbLKKtxCU9hrwWCoa84PYYT9xdQiFxRrufuEa",
  "key7": "4zsotZQwGsSiQkQjzieVRMN8ndoQoNFRT1mzLd5QDiBnvaMAj6U2FYmhdsu38zMnv3TX8MrFk7TnDpq87aMasiT7",
  "key8": "2eaiCHTfUdzBK13hrQyLfd4TTV8BNxL7eKpfjCnTUgDkBqxYep1ohdGisn7Qxccg9fF4k27HxD5Po3Hv1q9JBTqP",
  "key9": "5fdiZW5sDNHC4u3NkWFgPYrD2NpsrtEwz39aNFZfGXjJdkLXarhHN3S2wrY2KjFTqBbZwAA3XyxbzAoBtGE5kZnu",
  "key10": "5KgJxesLJM4TCkcY2YYfkDkuYzDY8EcvNuCy3ZdTTc7n9oPfnxHibvSKAU3pMmXcrGmeGsqQStkuKDctjAH1EgzP",
  "key11": "28nK56mDbgSGtiJ53azy1hxWbB8dwNUiDqKWhickP6RTjjLV6wTeTj64GAh5TFDN4rdFuX6aLF34yaFL5KwUeQbe",
  "key12": "5yoLqMHwFr1qVd8o4YRMiuqdyfVWgDWpL233djv5jPYFk4gEtkyKvtCFD5TDB3VcN82uNedZ8GTN5WW64BRyYbKe",
  "key13": "2hbY4nwp9vATEmEBpDQQiCcgTJosqtcBK3mM1WdmrNiK3uXSf3tTNivnyDDBaEC14J4ZPxbDG8gF1YPz3sm6nRYJ",
  "key14": "UT5ZtZRndi9xGLtPZBE16tCZSHg2tRKy2hiiFJh2jGqs5QunJUue4fLVKgFPeP7VQfQY7XP7VSpCnaHBXgKAywh",
  "key15": "5hFfyuN1ZhSaN2U2hfoyZniF3uoZpxnpqzjE5ZynM1Q9wxjyTZTTViZSNzHyWtSQ5YvrkzpzFuwsHvRpCXesYUHk",
  "key16": "3AJy3gtHPeSoCrfjXg2ZqgmZih51XhThxPPCCKDVRvQPTYQ3UTN8ScKEPBQVkz6BaD4CE2eGHCXCDActX466WJFc",
  "key17": "2XHcg7AqKuwRK4hNhKAUT5kdHRHmhAWxFDMi1xyNHg3xin4SQXFrV2ngErYbuecJzE1eaTMP46r97XfmjEm3dXRr",
  "key18": "2TZfHWHV2Lr7NmEXizQj88t94okvGicB2s7BJiBiiy8qXYxaAXaqXD7gzX53PVkbqfwd68DJxx9VYLaNxJT8Pc2o",
  "key19": "3CMz8vbmvJwjopKFQwwxB7uVUEc63RPdSmUgUwEvhoZyow6yhgsLMGyHPYjJZV2tj9oRwCsNgd7jiS8SiYb4pw1A",
  "key20": "424ZJjH2hxKfQdx3XAb299xb6s3Py5Rmb355pnN8hJD7DM4WirY4Hekfxtq9AnbG9ifVevXNv4UdihbddvZAgQD1",
  "key21": "4nCuSAJFAmRVnrzRQpowuVSgi8vjkMnaQhapDLWtc9c5h33NTnuF9cL8fAABBa52sFTRxsgfMeUzXfsViABBhL72",
  "key22": "5gecyrDi5oJwjo8SgsKSda6c62WetgMHiNSXqh9kVS3r6xRzMqFYP9H4rer2gCR5MGBGAM5YmqDnkHScST6vzSBs",
  "key23": "eBBiKEg37xkfiC4wBSxAD6dSfMRnnvFQ5FCGRZ2ea32KXm7eqsosKhVHH889qhQKUb926ejCZ5kuw6Y5MrPseTj",
  "key24": "5hbX2riwMLjWWNBeWEURpEeFGcPjG5HuNQcPbxTPSuSew2zynHmTY6GZAnv5dHxNuU7BDvA7ehnYbYxUWuZrByLC",
  "key25": "26t1H245Wwtvp2GGnqWsg5mB43YSEiGDbBLYjtgwBNc2i3nKzn8LPGQbfgekRwqsMaGuvmxuUQDiQQrmAaoMgpAM",
  "key26": "5vYv9Qmfm5SRXb7ghv4XmiULZvL1T5cPTPHcW1eiZenSySXVaeSipx19jXP3cNxdfGgq5Lq8NFQzRFWoxstjYymf",
  "key27": "31LRyC3N33MF8LWmjjiMUU2V6kauzqu12Lh8jbq7gQAai94vx3ZDJX87aCxLUHbd398zQ27ygCDh4wfDW4jtkaAi"
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
