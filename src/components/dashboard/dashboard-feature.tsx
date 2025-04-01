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
    "2QereMSkBugvg8nEyKZa6ky86znamy5jTWkgvVaDaYEMAz4X4GneLWpSkc7WGHzQdZH1Rz5RSV5vKN4NoaL8RWvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WuTAdjDFAAPBfPWs3cUgTfcBJiXNXnC7NiWXcs3MoD2wMbtfY5TyJtLzREQTmc7VWVkwjwVbPs7UpuAchVh1WsV",
  "key1": "RDn7RLGXtbw1KrJiTxGSQCtEmRdUYyR8rFJQkCGaid5viVXoKSnMUhADszfNv1rL5esgRxr9Bmy9WydsGNrQSjz",
  "key2": "3f6Q2vmQVxCsybUWq8VCXueuCacf5AgEr9ETZyo5x3isHkQi6f4PDPjNy72sLhiftaNaGh6WNE9FNxcXjKscaz1U",
  "key3": "9wpBMVop3MHJtUtcH5H73u9qchmKDeE2XabcApHji5Q2sQnt5r3QpGBU7q2pAjjySxiQZFynLnQNgGdmGFRN2FJ",
  "key4": "3Z8jYPNpiJzLpV3zpvVw3r677Xxn3F3gNvQg7vJoAYwGCp4ZgCYPiXHVdNLCn6Usjwd5Ef42MB2mE57HhAy83Hk3",
  "key5": "3L8yrsM3G4iHrX4ybMGYzBdMQ442NW1x1Fx3C9rW3vUsDB1TFdMgfeJWyj8hUDMbnXhoZbmBKNhpMXeXb6wUD12r",
  "key6": "4d2VzC7cxCGq1VwUj3sFcuqwbc42FSy4YWbppXEe116oZxWfuHsvPTcLX9RZXttRjRLLwVGA8musr4YgnnNS9fFg",
  "key7": "3mPqpm3xoHtsiSa4gKapt1ZmQZzNYYgtaU1aDUEop4eNG1BmYWRQgGwQa3ET1wgR4fH78JQnTwVc7VD4sQJcUhw3",
  "key8": "3xoWk3gQ2J18uFoixteVgnJgk2VUCo33wRYhM8tPtCTztc8qeAGSa3RWF1gpZ8L4DmEcomVPcf35hw8GZ5AoTpwu",
  "key9": "49AeujQLqWe3ucvMPdfnyKBNUZBiAGpzhFn2cYmN7s5HkhAQnsYDJiiN8gmQBRtoBS6VCU9JuNBb9hBu13gXhqCv",
  "key10": "2YGtmoZeuENpcN6N25npT56HWHr2WoXJbMNmKbA1RjXW8XpTrTeXpcR9YWcbkc1YRQfz2vFswSKt76wENpaqw8jC",
  "key11": "39JsZ5Sf2XWk8WE2TKUkD3kCay8ArwhUd24nU2Q3Ctf3QhcfGiLdU9rRXvcoLjTDrH9yEH64RiGMkCZar3DEHPGp",
  "key12": "4qB9vmMEqKZ7LRh2xmh3EPstVvJYVNDkM2x1CrrXosuYrDGLdCkmAWJ4mGcK4z8KSWRVq4nwTDkFerqU9VaBrYsZ",
  "key13": "2aaofToUE5Wza7hqDn136jgXhBftC9uwKVHtEqx8fkwkrAKds4AZ9zFQt4QpSwgd2sm6n6iZ3Pswf4Q8SbyHSkUc",
  "key14": "4JsNnTsihi8BQgPWQpRDymSgrYvub3uCDW5xgrs1nHAH4MSzFWzYdN82CtKmkoEQyd5RrdRxDJK4CkL5V8b5Ktu6",
  "key15": "4XQt2mCyu2JHd5GDQpcVqnwD9MVJsyGR4EZfeTmGUsrrNXnjPi3yS539qp5KrPTvyfWogwPyBik2PURWcWcEptAL",
  "key16": "WqSNfJupMN7DsrucJGCFTMfr4WjMnN7W4x13uAQUT6ta4D2oEvMuk9ghE7jYMPUzzsdRspDzPCZCqzNqrt47bTb",
  "key17": "3vCetDVuzDm26fE66zCo6Se5QDrmvu9R57PYQGPm2f13YCuqBTKM4nPuwA1qtD5iRs9MxqT2QnS98pdzTUg3rZz",
  "key18": "Wh3RwpRHEWqMjrLKi3kVec7chibuLNoNQFpBP3dxrSEMwxQMxf5CFrrTh2SZFgox18jfS4bpYue6H6ZbEeHcLRj",
  "key19": "soXHEWzsc3zRDzSN6f2QkS1kqQKGKL5rEd647mWxvp8yKxJxZ8PfnHTJ3UAF41fgPMRFYTVjoa7a3JMeJYzbQio",
  "key20": "2F7SgKZZJmQzGjufFhZ18KKwJDarNknuEc6kvHrL84vk9GVLi1yHxyb6CxjfKK11bLw8j89kghb42za2AoDHztMC",
  "key21": "3qzU32tEosaokjWpweDSC74q8pN7paSPnCusG8g6vW4D4RVQhWyntqDsWYfMYFWx4DMfcFk9aAgqsTLZ1jPairD",
  "key22": "hRxPQ6AM7qc9jSgBtZHd4BAZVBQ6pdvTFH9e4KHoQSGGWHwGJSuidLUfXM3gddeSqtUWGcGomhgMhn4jfC7ynan",
  "key23": "4dF46wWZ4iVAHHanvWcxt34zpQPbXmKxBeidPQkNQ97yHB2pE6KKgzykxx1pNabvfU4zDP6TJEijeqCaktbUwCwo",
  "key24": "5aGmVxLkBWLoGDK6r4KBUxdgynRUwQ1cqhFgPaLuH46xiJRddWRgqxuQS4K6vFbh3HwH1G6gH22hf4qcinfmAJsj",
  "key25": "5eyEm7nfUsf56Gi9YjGTosYvGwcsVC2Zt3tztTTob2dFR2oe1HucpJiShYGbsdfwu7nZj42cN1CtA5sB2e9FRXfQ",
  "key26": "nyST1RNd7BN62FqsLYYmhpQ5beU19GdeqbQKsposkh8veGswTTHuxUyamZQwppWtZwdnzEtngzvNYGsaUrj7wEw",
  "key27": "4ug518ccHtW4nTpwrdou4DwXbu16WeyR8NPvgVw9x4m2dug6yViceZ15rKAazGovKSzczXDF2jDQbmsdC6TyXxag",
  "key28": "3FfcHqhoPqv5yj9JmcUnN9JUpnh8gErx3x8UDXBsVnz3bkXUSm5ZPy3GLhBbhRr1UAX9oSWf56eUAFFYRfGCnoHN",
  "key29": "46MoHHDAui9ipzNikwBaGisB7cPSLUbiHProdnhbr2PzYXzvuRydWDFREEHR1QrShCN2YtceYDCZoxGSCDNgif73",
  "key30": "2ypn5kF4iWpBQt15EyPNrLbo9mbfotNVEPQWBVRcqfk7K4G6p9Xm4PzWfBzM85hJy872gur71UL1pwYMCfLwpB9Z",
  "key31": "3b4wBbhqUqCBne9om6azQh1GzZEAFbHF3W1fDfwqkC5sPXt2LUMiQBP9LVFiCh5xBZKQetdMcwYbtbdqwe7ZpfA3",
  "key32": "2wozfjTyKPcQjsUe5554izVCfxKsj7S2nSmugKTHKtMYY41LV5CSnYCbnWkZ8gZFp3TophXSr94EGrQmLaRxoiKm",
  "key33": "4RiHZtxL7ehNjifzBdCmyqt7r4cadUtffYevgauPePzoDmWFsAgjDerJU7FaD1KpKmPsinuR6UkHqxBCHu4XzMfK",
  "key34": "2B81g2HiREEbVngaC6DyUeXBeeyNdK9u25mPGqGbj5RUf73QqD42BmEsP2f3EBjw3GMp7ECpnrPASeqj7TrDFPFw",
  "key35": "5b6iMMhyHRPsG8d6GLq8UoMJGdHr2ZnVfy85HLtBvFLBFshzg5hAsz3o7z6Fvtb8m4sWMP5aJdN1RvhycZgeebVK",
  "key36": "9iPFNK5Pi5DEbpb2SbPRuhopvqJFEZiksdFWWPXGXZ7o24W2aWeUTsAs9QipKtKcSniEVot1v4TEBd1aqCpzd4G",
  "key37": "3nfYBy3mkLqVRmq9LyhczHWfTZRJPqYyAJUidcHpdTPB5AMMhmdVbG8uszY1TiFS81KGUKTYScLLxSQV8XmmW4UT",
  "key38": "HFPn9yetMBw1q8Wq3WVXR4jy84gxY8Ty9fpiWERGAppfe94L87BNGusv7KXm4KkXVoqqbVkwrn5U9L1idgRvs6u",
  "key39": "2W8AvbSMBc1WYKqY5hNSkzwg6oR86CmXX3vBuGsdDkkmsFpf1Y9YCgVphNnGgL7pABkqUs1GgoFepczkvvcSUo3r",
  "key40": "2KChg53oYEzU2sARhAkq5ABykVLX8nBWYTrmJRF6zTeLkFAgCz1ASrmPgjXndyAvKtnmET7W7nv7jkTxhur5FbTh"
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
