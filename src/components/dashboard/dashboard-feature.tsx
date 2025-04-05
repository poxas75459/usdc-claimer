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
    "2fHL5cccWWtnbWEaMas9XWjA5M4pzUfw3MgPQ5V65ML2soBuPd2d62fADHKGnWhRHcJHEYem3ZmMEJYYrMfSAgpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DnFPRnccPH137UMV1mxt86YjhK6w7mhtMTC6CtcwkkaHB5rX1ZNVpryuDeezhs4EPY69o2StjSq4HghkwNgtFTe",
  "key1": "ULNh9xMHrQxAmKRqxzdaa7SU31yLmv6jg15zUhEUd8Db65twP5BUWrUx5vXAV9LS1kdZE9zVetnUtHsfi3Dm43d",
  "key2": "pfTsUT55cEtBVYGFsroqVug6FfjH8JVJqVLyMpTX6sCndLSXbyiZEsqwj98u56QoAzdc19V5sWVpFiEZ2dWay4j",
  "key3": "4euYd2Jo1ZmoBBqsYar6KDxjVLTmcpg7kPMXBpT6bwufokHo9kaY9B8BvsuXd7E8vhE7fWVJXMVWLFeNvq2a37Wa",
  "key4": "5GxZD7n8UF8zqwJVSYhttdhCHkVJ7hdCC1aqvswdMT19uMtmZduiwcAXf7jUGwrqkGpC5Do9AvjCHDGf13JnLHuJ",
  "key5": "59BzLr44r4fcjZ1FLWkLqS7ChUDmPTkDDJq379uD6MYM2sJhhdzxYbcBnBLkhu2H1YPqhcmFtBFXdp7NuaDJAvZE",
  "key6": "3qkV6gkiz4qeusn5FALVp6CpQQhMZMW2r5KbYZr347ePBFGY7ayxWGu3XDMYxy6mfBrMZZRo82KpAqMQTosr4xWB",
  "key7": "5PsyKePufNB9GHZdPRX4F2MVxAfg2PXeDnxFs3oZch4yfgxRFq9iN1mmiqYiHPFVtn2DdHD2WrT4XANjjk2Vy1fG",
  "key8": "qF79HCrHW7byfv6DNCtdwJsag2jJ3UbFBXC7EftM6fAPKt3azp62eVHu5mu4wHaD5Y3ojFe3ko5ooVKThhxZ6aQ",
  "key9": "VKWq7er17VFY3PGZu34yADiM1EcYBEU88SJyBTCRv7FCwu7mgmfLQbpMLqAMdQkSbVkHrejJzhiNkmbH8hpE2PL",
  "key10": "3cVh6yzG3rRUX2dr8nYebjJnfDdvEts39szWWDDg4YnRUhxmQK1tXe5tz66jdhkyR3ZUyqtFfgpQ7gZaoL3WWK5C",
  "key11": "4HG4NC7KMvitsYH5kLCnTg5e4iimcMe5ZaQMjVPpMCTfuHqwFGjZaVnqgn3ZDVzqjc9smYTi81Bf89WEXP4bEeDk",
  "key12": "5NN7cjk1hSLtLpbR7w9GaCUWe3TmoMyS6Ug15n5nod3ERgHrJDYLVsaZyN8cB3NKz1xauGpZn91MrXETnXh5rXRv",
  "key13": "42adocfk7VJaG9fHoVZxRctRB1DPATWGxwpftKwTtnc9ZhgRiHKiUu5CRpQm1dd2QVQ76cS7MfHLakjmco6SCmXH",
  "key14": "3Gp9tWqjtU2cSVmMKNU48WFD7UszimtqVoNpoXMFQGu3THy6qmAgNnrzbPEjH3HKR1JuA7TXEcumiQne3wngrL5G",
  "key15": "2MjACgRXsKZ1Sdikdk7sfwDAsWRkDSq7KfSVr72mu1is3P2Zjb8jHWuvb6xDWxUWhPMJGcgdRPMm69dCfJMq5bRh",
  "key16": "4RDCUzcyrQAdXGXkGsRdWfQMWrn8y3pGa9MnAHhssYwwAjqcFHNfuuBdv8i2xsFwtVDZiCxBursUfrhGVUm7sS7E",
  "key17": "oZyiCTRVYp2howawcjJJAezbkztQWNu3JMGsgGtoRDQHnGq1Af1jriFPPLuEGSzbnpbAnmfXjtXZaaASMwjJZDS",
  "key18": "45hqAKJz1JJgC64uCFp7Z8FUmtpXG7bFSgDRJEUyRdkNyFvJpmP878z3nst8pHQQiZvnF9Sr7WTPynVGEzkizmeq",
  "key19": "2ci3HmqAG3NCFaVWJ4LMVZc1z8S1QeeMYitX1Q633xSAJdsa6by3m4zPwYfi77BDoy1TmQe4QJ1gwfSSNCQBkS4V",
  "key20": "4zEoK28RpPpLSR5BuPTSs3Z9YcYNJ8omMpzvD7uRjdY2UcZfcBLVEATK9jasjaev4zZh41igGVz6KckFhCjv4J2Y",
  "key21": "44TqZ3aAt3xT8M3evwEjEPgQ7py4K4Zx7WykytRe56mA8M1AvxYa5AT4a8buvFBPtJ841yru9oumqyxSwdZyAYHd",
  "key22": "4kKoy3FytyCow1Lp9xATQgZDbHphkbRjMyrtn4t8Z41jiiEw5YBukESLCwKSHQCUu7nWp7L1V8TUx4bQGE7Rq6Hc",
  "key23": "5DGGTReTNfTWhZcUQvGmz1AS3hXw3jy7dXW91hKJLijzLt1R2DfgustiwcC8cXCn4YUXGKzHxKQkxTwLJ6zNJ9UU",
  "key24": "3QtsYxyzf77KmonVbuHrKQqeEV7CyCbPPUwoxkaRmRqPYJYFDpidnxKmkdm2KPxydLZEQfACzcTjn72TU7Sm9wM9",
  "key25": "5JTVuwqu7MDe7uFm5s2e6otFwQKAQFG4fb3WsDMhnmeYbLQKwZ1f4KN5sdYRFMdPvKZPunAXxeF75z1jnpW1Ch9w",
  "key26": "2LYeCwdGV1U6DnWKezvgttpP5WfE4k8vTJwW1YdnxpVfXuz8Kd6A9WStML1kZzrewxWTjCbp2axaqZVrnrgUHEQB",
  "key27": "2T6pGtDiJwp7M9crbrPuzwLuzVmutzeA5ibDxoPEnsQejXPBxfsWRxwshB9DAfQbRVGdU4D3P2fHbXeAM798Spy5",
  "key28": "TS5jkugqW13SG1DezYeKrzpBCT5DjDBZbyxT8rXWLMU3qGwVMkJEf5HoMg2vExgsmfNmr5Z8tPuNtGbeh3jpeSU",
  "key29": "5aE26dRMWYQciptAWGUZ7cHGSTj2JnRYS3hLT6zS9ZsA7H4B87mFeCMhGcycZTBvzPkUx8ju4CKiG1PudywCSGT9",
  "key30": "3t2vViEstnk5KTEVUa8qye2ubaxXtm2HrZ8c9EhVLtymwLoWYadc17F1zuqqJK4YCY9dnYvZSxK835M1VDh9vM31",
  "key31": "JFXE3aNSA5Gy3ZAuykJTAqojqQMzmQHsHyjUgHHEsAUbjGofTFz3zahcLrWkrJP7Xe9q3GBdTEcqwmPdFyafesx",
  "key32": "631uaunJga6ggaXDcAZNvq4fhpNM9H8c1akhuaCqrSyLbQG1fHsR2FRDzTL2a1YjAsGQceh8k1izSnu79m8zPZyV",
  "key33": "29U5jc8zHEtAkTH1WSPJQRtYMhMNeZLqHBiera21HXZVuXm4QCrBJDAtYyeX4GzoJKwDDgrYz2eT9ZAp6ZfJTdPK",
  "key34": "Lc8NqjCe1EuCznvsDGT4c8FPk2SRFAPtL6EdxNFeibGKTs84BFsxvhNKfBwkBXe9yEjaap4Tfz66aN3Ub7SaNdG",
  "key35": "2WxVyFqYHGZz4bBxcQNJVDD4VhQGLQ1GvpVCGcrE6jUX8g7So3GZtsG7SUuruFmjRAfxr4SnCqTMNzh6PVjydc4F",
  "key36": "3Wk8R9V8G9jhf7owEH7boohyibVB2WB55rF1YKRKFXsP8CFwea49WguJGxEZ8ag9ULRzTme6UBFLMkzLM8EN1VH2",
  "key37": "3FkoCTSUjFSNCUzUcepFf1aXFTwzdsMCcm7BLMjhCfqofXJVCTUakaPH3PpcmQhf6wS11b7R6tccvHXKirSPz1Z6",
  "key38": "qnPqFv4GXd44h2fGqQJZRxjWeiEBXFY6KxBYvM5QPP5XVT4pj1jha355xdk1jmMzvnG9PT7nXqCehmbSktsyU4t",
  "key39": "2fJeLhSs3wQEz1HKASRFgsgY95oZcrxoM5SqhWZL6fSJiDjScML9PpycrpxsEsqwJVwS5F3Uqb7vBDKkqRbpr2ns",
  "key40": "Ayj8Jk8muRVarmWoJPF4vBFoxPm4CXPGRNRhPXt2FSkrDmhetRq8hK8apgnkVqiHQNPNQJjocifFekBhWpnTVh5"
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
