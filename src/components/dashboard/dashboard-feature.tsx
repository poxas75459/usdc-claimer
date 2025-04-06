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
    "k6KKCfCgQKjW3CKFd583zqFrf4yMKLCPMbQUz7kVArXSqrY7LVPp2Rbs4mVJFCFieLrR5WEfRgX7ojwEwMbUGxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PyqUTQHFd9ez4eybZju1WJ4hvsuMN4sRGpcTwRErvyt4SA8UiRPg3foYj56fD7rct8PehxtjxX3y9DH8xYhfRmx",
  "key1": "7Gys7a9Sy8UfN9VjtkMNsYSEK3GJjMHahgc9nvHB64T3YMNYXWZ751awhKYJqAATJzZhKykURhu5a1J5yK1wTfZ",
  "key2": "5f522XQQzDJUnBTyPdnN6mzbRvGfFGJDA51YQAqNEWEQQfYyB8qdUqhQFUCTKJ8hTdYBX9vXAaDc4rGMvsq8MUBs",
  "key3": "49dY3RaXs9LnKrAxCBFPD85awcxasMaJv18BEg5yCmG1gMx3FzBtjCbyzkTFDQrscmLmRPHVBRiKVcN1gqRZgDYL",
  "key4": "4RHXrjnTD7m1Bh6d2DsEjq4hbwxeR92zbViGXMQNHLwdA71ZFo4qgQUXhXqvDLtm1puRhnqE7QAuN3Fkizc588iQ",
  "key5": "3opPmMo9cbxzu5SNBXqYd5FsLtw2cn7DQUfFvfT7hyknJw18jbu3BsKzUSiwfaciJDmFtcAo2iSax47ckcdJe3d",
  "key6": "2oEXzMfbmLj5NudCZaGvobMZZnDknmC862UWNqs1zd3knYHiMaFT4ajtpzd8x89qJ6HtexALcZWsN5cY243GE9Wv",
  "key7": "23P1aWNgQ5MqYXYit4vCaHnh4eVoeE3ctHuVALZmJ137v18eZWz49BH1wF3aC6XUsnBpjvUTCa881GkrTbapb5CZ",
  "key8": "54bsAS8FSyzZnRP3tHH6UL8fiJAg7uuauciYMftYiSkfYojDTyQBP6yJF5e83X8G77zWVXxinQpknvZiuK8VQDjT",
  "key9": "2q9K9DXvNJMk2PnKxNZxdHxhrT6DEUfzqKAFZU81xs5K34FtHkjXq53j1wEKrHm2iZ8JsMuLm8kGGydeDp7wTWEt",
  "key10": "3qLnF9QsRwkPFyDgUdKdD61r7GL8BzhC17CmdrxB3UocrSfSY2f4EgFrG18UouEHQjJJZe1ZSQPcUNiN9u4GXQW8",
  "key11": "3J4AFabvTAhTpKpQrJi5KZ9p7Sed4RR1s9AAmDsqMTRBziT1KguSGqGVfwyuquWs1desBmNn3mfXEfsyZDintXFC",
  "key12": "4Y2zcHgNNdjXjPJAVaov5N3eRRg8nC6VitVWJr4aVpCgMwsFhUXHhEmbWcubUNGAyXzqqDZTXBxiHi41xNS8kRpL",
  "key13": "ti8vZkBbk5R6jNNQp7R3FgpxB4E8jNjEawdmVgs5y4VhDGpEWkZ9kE6rdH8zjNUC3pQJRnNaiH57iq7tk9Y4DQX",
  "key14": "ttXJkjE7DH8pWP6ouQ16d37vKxxLoNVWPXRaf9bHB6n9xQ9XTRRwVofcDkSdmjWaii7ZvrdzaBZRatc8YsZ7N3j",
  "key15": "5d52b7jmpEy45Jt1CHR4aavpQDVjJzHyaofndSHVsnV5DhGurDg9RthUFgrCFtjXMxx5BAco1raNmX2sgfHeE6ni",
  "key16": "3DcnW4BW7e9uJwNqaED8VrGVrFx16ujCHNJCzxNnWvz8yFA8dx6ENuBrKtDfYtKUvKyzg6h17dyLggkfuqq8osmX",
  "key17": "5otzzfRtynoomQErhrwAjtiJqZSWpnAqCBdBXL2AuuuevR5sKTgf2eMZMDRasgvPv8wYgdLiHQvN4weXzpEA2sQx",
  "key18": "2FR5SNM7ZF5tKP9ANSHjpyAmbp23niBQN2Gzxxf76ZXtGQSrWQicXkdrbESVPmKAbgafFwrTuQTufigXUUNtBGPm",
  "key19": "33ZkrJpTY6LqNdTPQBauhEvZ3adtdzZdBv7PDzJS7nCij8Hgtp26rr7Zub65xhFvz1GuGBrpNQP7cD9BEFg3AvU9",
  "key20": "3Q6YhnVYnxyt3D5FegW7PAAQFcXL98Fny9t3oMdNUN6uLNoEETbsPd49mpKiW7XGUWDMr7zyZGMkb3b6tQaTtVA4",
  "key21": "4831pZenzfafs6sbnQV6Vsbg4JEYjkyKNkAcbFWyFyMbsbE41GyGZckENr8weE8EtS67KscHoiv4SPoCZ4xuFVuH",
  "key22": "4m6VDX43ipmBfdKD5kLV7XEK6xs99CewpWx2NW2K2pXBiszyhAB9nMns41JB9fQh8oMCcfSXLRAJ2J7cy1QFTmt6",
  "key23": "3J4bdgeSe1B3sVjMKP3ayAtX97gNkTPTeJxgDMKKMaGnorrcEVQeFgeyYyRX32ZaE45Zh32Z6tag448rkmwnGneo",
  "key24": "3pr7WYPfcv47HUArjggH4c4E2ymw3cCddeJDT7Lrbv8oSzNQ38Z5tR5VmK6X5e1sRCuzCXNFP1ayFfn49fr3s7B3",
  "key25": "4TyKA7a4a2nNgUe1RUDAHDi1Egzw6dXqoWjGKdBoXgEqQrGBkL2i5xFtoEYnjQSu8wgU58bTTmPCPDqj5whfNPRv",
  "key26": "Ga2p4XLtHGBTBqiu86QLDxATyiJvwatdCCQ1Tot8EU2ahzJt6Q3pSe5ymqrV1A6NcsLg4ZDYet6ai8HiXYuGAWe",
  "key27": "35qXaPXNy7VTwEPmoZREuQygrPQHk5PW5oN9pt1uEhG2HVsAckbmsD7RhwqVANK1Jar7rBMDGfd4LSqB7XSFu5cw",
  "key28": "3E5qXqNpRnPum6KDvKLSfu4toWtV4D5q6LescdGLTqqTRaJNueUTBMwPzbnirXGNqwTNFy5SVQpXB4AzXJcLknAh",
  "key29": "4BBnU51eavZ7rYXFSvhyDYt7cqtwFsMvRGjgegZmQjymQ5zZpCWotrHoD6R4RP3xvEbsCeh3YXPiBCmeVsyibR3T",
  "key30": "4aQFbB84jQvfRN7sn85LSbf6mVpQejBH14MirqRTjEZ8w7uw6sNcMmwrQjYgQKZiUtWWFigq3FkrPMdsD7gGJPki",
  "key31": "3xMsEnWCmTR1hTPGneF6hrLiFG3QZqnTwSjgt3qBAkLdyg3P946ZZzDuHBHCN3miLrfh65Lg5RmgnPhBpAyJWTf7",
  "key32": "3nGCVwMSK4zmnpPjYkt1GpVDg6a78SFPm914RQn8gSG2xFxf2EuVDVXwW8FhncepSjC9PocNLVNVLujexzwh1H1U",
  "key33": "nz2JDC18959ELmmyyGEKzipd272GvuxjxpWjEVUqkpLSX4bVjUnFzSMJtr5dvtyPP7iJ9CFESnrsRag9ZVEcfBG",
  "key34": "4CcK8RpjQz3pVwLJQVpMRmbTofLL4NbD5PhZEy5z3eBXnqmk96odcbFQsdB9hMP2NU3r7PUfmq2bnfdispQCaGn1",
  "key35": "QCtwgivzJxGJmRe2rBLjJ4ApFPVt3EvbAPLRsTz6ugWmVQ9rrHFkwkMMfepWf9JLg4RrL6xQU4k2D7Uo5mBWDa8",
  "key36": "2uWkSoFjy7SLsiJdfr2puF8BBWm7egyTPFXfinHvNc5fvngXcTSxeY7TGCA67tqSLAjnENB6HM2BXMrNb7i7p7ZN",
  "key37": "67BV2Q6nKcxJHSJdD5TsuPs4FjPDinRnSbY8fXseN925thdNKwfQv55eCxMS99dH3RvapCw4ErJtv2MErmKaEcZJ",
  "key38": "EHNjCVLCMUKhMAepA8uMTpvJzmFuZXmL2tpHP3r5rMoarP943AWptchaHQn3fHLAGcTVjNHNtXPpR2mDq5MV5qx",
  "key39": "33QfB6XQgGnGjgYVAKVmxysxjAqT7hzbS6cEBsp1bQ17oB6uTTUJ4axN83Z7gkmMqPCB42uykqyEMvn5pDj631nD",
  "key40": "5JK3rdQo42dWC5uiMjAbGXJto38bFRUJ55oy2CRmZi24QJrayUBdW9vvB9KXQzV9sDLoiztKaswKgY7jiXedbMBJ",
  "key41": "64dNRCJvnWmRys71SFeNAT9WrNxgh6nipBMcLamHPJTjUxpuB7KUW8XbeTKdG1chY8kzGW9JW8WLoDWQzZodpNwu",
  "key42": "BxbqPWs8n64QdTBNVp7MXNdjEFahHkb5NeZ9yRBHLvpU3E3CjNbbR2Aofrym76ijfbfoo5c3hFRCDKqc5BKQP7D",
  "key43": "NawRf4n7spu2P2ngVEPb2TWfdgb3tdt8Qj8dVztuU7X3boqvDofgrrMrVUGf1SEdTCdpSLGZxnxGpqtJHHFf56k",
  "key44": "3rFu9PUZmaipbqVhc5nKQe6iZumsHBXNtUF1ZKoaUZQ2m7iher3taUFDcSY7pW4bsFtxqzHvAaYt4SRnvzyiiczg",
  "key45": "5pFiCgj6NTTibwoig5o9oM8KC34GziNxZTGGvWnFiDiwaAXosyppXpvQ3r2wBM1XNxipEruVUkd2GwBoM7Vmjzc1",
  "key46": "Zdcs45YENHDqdcgoghxTbqZJDkv3SUKha19DucH79BvCGf7NSrdi8AdNcYuLkXzdxuWK8Y2y9SWz9P7EaEJU18Z",
  "key47": "64WwihhimSqRvVwemaEugBXGQpQRNPg81MTXxdFpicuRA73W2nLfjEMwWjGM1q2HfBVy3UM4xmtUwnTUb4VRh7ES",
  "key48": "64nfCuMm7SPtTVT2jJeFaHPXpb4wqZCQyF5iAkiG99VaZyJdCiYwNiGDZfu2E6uofkCtjxjcbSVGUEyz3oiy6TrK",
  "key49": "3gaW4UdfQbnJVYa5dDGwS4mxkfYdDD63JJsV4Cuu4Tvo1XMhrBR5NBZaEJq6YeSKvsEf2gC12AfxQADkuP4Szth5"
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
