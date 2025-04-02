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
    "63P3qnjhX3XyMkJcrSx1J8eUUhcErwhuDqgyKCPpj5Ud5LRoTD8Y7DF5QANPgt5MqzrHZURrRo1uc2qV1598TFZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A3zcfoGihfnV1E3CDtBwRVUT6tKzYuGo7NoEfKVyCb7U5pG8Xrd5SEQEo3Fbjhg91NHKXaw6iP3DcRgNDdLk8ka",
  "key1": "2kKgdBUGSq2UqPqcdZEdcdBcytRamp3ccFSgq4kHs7Ycwj1kCqLrKcPR9eKK1S6U6n4G2CtPFLTWXvTdXF2jNYBZ",
  "key2": "wN7ZBpdS6ZzHSAmS6YCQDZzTw9TzgKJUjymoqPzmY3KTxAEsDL76L65QXcxRUoY7BVUFRXrHz4NAGEHPQeaJBc7",
  "key3": "33ps2LFn29tpAsyAGqjLpu6kSqd9JFiSiet3PDzqLovxkGtpKqDbVQzqGdU3Hk3DsXNksc6cdzYxbvDFnYadTkVt",
  "key4": "5Dczp9hrsqQf4iFLorRCP8Vpz6mCmNQ2ASmMee4CwkTzfCT6rjSSDi1CbuNdgwzzTsPxDGEBdvz7qLCryt95UYJn",
  "key5": "ak5rfoe1HUR4BZk5PfzEzh9jCxozoUSyFmAgMwM4dtsLUTWmmzd7a5ojpwuLFWNn9octSWpMcqUA3z6YSYMHVMw",
  "key6": "26VAEm4RofbqmybHZZ4LAZLEkWWbWQANCJiiodCKSMaPxrK7kv3Yu4AP4ePgfC9u9qbHJxq3irPfAX9K2vr5sDro",
  "key7": "24RFph4wcfxg7zEN5t6iKhNwfkWzffBZE3LgovfKEPu2AzXpEudQJySjFMqfiD9RJvHfNwWuqCNehQ96MVTwrPPt",
  "key8": "AY6unYP3e6JXeSN6rKaZ3CZ8XPA7NJF4s8jSHqhEMJQSqgmtfLyYEisgNeUanJ5CGqTEFbphWTuhtBhqKYqT6tp",
  "key9": "9QJ4sQpuj2ugaV4cp84j4f4FzgsWVVyhnGkhq5Skyw1dsyH3ByoeKx81WM7S4DoaDuBmE9HuKF243zkpwRBB816",
  "key10": "5V5eGekHD4wzHDHzLn3kBiXT2WHyb2H7DZBgEo7SLiv4nQ16s8FMBho2JBJicfQcXvWPL5AfTt2Q6tSLmGV6CWKz",
  "key11": "49y1ZavwyHSFHcMm1VRorhk8t8L4ZSZZXDiucHbqJ1S9KpcU1mrh6kakKGrfv6FzHdiY17wk718ddXKhfMAi6XRD",
  "key12": "64xZdyD3aisLCj95dyCz1MGGYjxyYuCq7UVoCWqcFGoXiQiZxDdogw1SyUM6Txs1iUtMuhAdNMozAMg2RBndfp69",
  "key13": "5HUqSYistrnesgobmmPfnxiu6s1B6dqBNrvr9XFDiUFqfcbw6rpCFTcxGQZpsd6ChWLUaoD4Y5FHJdaA5RVeySNa",
  "key14": "3F7JFApM2tWVrWEdgivPfkpkA5xk6NJ6MMk6o3Cw6jGeaabbPX2M3sqYV3HtoRfD9RU2x7YwXcfo19zNfgFMi1v6",
  "key15": "NQSoH1kqgrvEinWknQBf5ErgBRw1XVEzqoUnKyJjGGpz7hRQLK3QwcT4emqwiAkG5PUmmtV7PhNJbKyCvJktkPE",
  "key16": "5izcDuRDLaPosaDqFJeZu94sqhcqcAmxv6ECtgVKrbjRdE2EjtXQJbjRyfzs8nbtTWiTR8bw9GwhZ2baN937VvRH",
  "key17": "4hUR8MyG5qd6BQ27QG6gu1vv7vdF36q3KB4rM8LTAYpDL2ExdXk4RbjRko8HThFwUbULja7abJaKyrT3EVggSJqS",
  "key18": "2M4RVqYuXqg6jLR1y5hypkGAZASqZLEQB5jDaE2vFqzEGJV7nzru7ufoLVbaCngoML5gDAcNdTnPsBehR24NjQoy",
  "key19": "MGeQ8wUtNNkYCyx7qGhADCbzEWTq71ae2p1cBwCePuC7W2VSQDRcjFsarAsWH6LAVUYvyBHA4sfuWRgcjgBg4u7",
  "key20": "2PnN9cb6S3G68WaUoeoiTcCrNjoKiFt2tffWnrDUGXSn3FRLHnnbyHkHJBWYHSvr6KWxtysTePCoaASXzUX8V12u",
  "key21": "5YzsV2zbm23tQTFXHUifHxk8s8UD638XxybPAJm7yEc5VbgQvocPaPy7F5mCPCodUpN7hCVvKCrLqRzruKp9dsJm",
  "key22": "4xxcsvJJ9sZLonSY58z5huvgPbkbMeFfFkJZ1x9f7SUf7bYaDM98NEDvisQkUvRE8fs8xUp2YwdjcBqdabXpGDpi",
  "key23": "9FcuWCViSAAHrf55Uu4a9XpLJCQ4BgjYiqzUMV9RnB44MKjHBpPwB2cJrPJtz4483X7ZAca4BxDzLFkuG7Preax",
  "key24": "4qDeyu8uRUCjo69QS5N3APWYm9vjg7xo1yMZeSR8rsQiwstTzhJP5a5unC4PrZTrGWX7PiTQ8WT7HXKco9JQwFQb",
  "key25": "3YpA5pg1kb2kPdiikJyuw57DqsF5g5NBA9dhXTNocEkKtvewdb83krCh27i99bPNvJBDCKAMpeFSVEqFNQysMcQ6",
  "key26": "5ZeCjsda8yeUFno3GMADKBes93GtSGvpvCrYV9eAmAprWsN5ZMNidmcsTYYDELQt66C16oRKuG69uW7aefr69BzM",
  "key27": "65GPEq2bDcMujkaqWrSbkmMtkhnt3MEB6NeoiWDXC5QoMPTyj5e9RztvWXxF61sKJBHTs88GQJ5SA95dTqQxSbw9",
  "key28": "4Zgp6NysaBa7b2KgELsWbMYGCVaxMPuoDEHTDUBYv8qYDayMPx5bujAbx7VMgXPaBspDNq9jHCAxQ2Whbdu6HZnD",
  "key29": "4ZJqQMFDqb581cChaDknMPeSakU3rphtZFpvSR644gAfDohu39GyvH8yVsriSPNRNMtSWiKt4LHyAcU1iB23sAZ8",
  "key30": "2s3tFXnH6ooALbSqkMwGT8BfwEgU1NHigrpcrNRXvs9mCyZBagqJV2fxQyfLKmmM3SUSAmPgWJPABBWkeT3wUsAV",
  "key31": "3wq7a2kyF2dAhWMAE5PkDyT7X8wX3fddy5pDhVaf5oypM3NgR5zKfqii7VxMtEwdgpaUknnoFFVfB4LVvjcr14ux",
  "key32": "jHU2fQucZLoXP2BmUQxSseo45y6vy2kJCyE57jE4QBuNcqPDh9JLaHvV4GxzZ4nFtTvuJ2e4dDRxy9e2gwz1aUs",
  "key33": "2f6rofxj51MvNUW2BzDGzxyLN2TicTt8gz8LFCzRLi9wzY1kbLHxXwYfdRa5ekhiXa88XLBNFStoaWXhEKxeRz66",
  "key34": "2BfPDjwQ38LJsGaPEkXAu1TPetQY1nhtCY7JUBkCvdS2LBW5gcgMcn4jtQLPnyKLEUq6p5M8m2prJacJ9fUexMqZ",
  "key35": "66ybh2ycyQ3K59CPFTsnZABe17vinzxoavHqF81sdSop4zbpJfd3F7ha931uzsbjNGYWKL5fo8UY8D1hGMY33E3n",
  "key36": "3coEct2ybHE1pkHEe7NVSNCxgXsgZb1Co9Rthujh9vZX1BFgiD88Mghnd9wVampknUeSkxupVc48G7YyuPpdr862",
  "key37": "7Efv6yC4yyLzdh5mKKFTAyVfs8onUW1EjmkjviFx7Q49p8TcSAjUpsJrBaRMGUaumvWP8cYv7kk1KXNBUHvsWgp",
  "key38": "5iNQMWoGPCnF2cpKPXx5YsD187wL4JTiHmcNMto3sYxW8pY5wxGQSJ9cb9ySCgxRxJJHWxA3YkEXVJhuZftENHzH",
  "key39": "5KgMt8EhFTixxPLprLVq9xbKZvTrZWQmoijd4k49CtPswWggLmryhZaT5ATpMdDsH2u3orRdyJ1e4snpdgSc3jf4",
  "key40": "2YKEE4szEr3k2rHEG9s4QzkVpX1HAAU9L2fS5qV6NRr8uoLTBC8h25cNbXMJ7nVjPndRjEHahPrzbwPtHF9W5SQ1",
  "key41": "4bqDNUf9pkRG1ky6EBMfS3X9k9TsEFftrmWc6XC9vAZHNapg31iSVVbbKiEYoSGLLUwChtcHX91MLc31KDfPZFhw",
  "key42": "4yy3e3P64UwvAWzfpHh9AVUK58qGB6aqbsAk3vSyGXyBvppix2Q1wfB9pmEv2MrWWWp9Cn3ugJf1dqF1WEogoYD2",
  "key43": "4GvDMeB9BV8z5QBJxNp7HdsX4YVs6ADrY1bpUypc1Fjwsh9C4KgdyU7gBqfDfKh3yXArZpawjeEz8sW6jvJBB9o8"
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
