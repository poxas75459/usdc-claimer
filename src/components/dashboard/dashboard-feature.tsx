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
    "hoDegcodLmW9Sdm1Uebiw1weyaiwufVMq6BnJcMXgvHnV9Q5sf3ufb7uXETSKQt8Dd7dtBhDiy6SFreumB9ryGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48RxxfJDFpv4SnjiLqqBpe6QT5STwJvRuJyfTQsCeY3WMFK5jeX92g3obsXWqix3DqNihMWzpKCKXVmCnnQAHLhe",
  "key1": "426AemFEkMK1DEpwH77M5pgRpfg4bpcLMpXeVpLmsjV4DtvaXCSW2uXYYgjCT9VQ2YfuCREvvBNzdcumfSY9fSgF",
  "key2": "3wCZboqxiBoycFvShW4Z4upBCBv1bDCLJ2nSMCF6DMUJaFqBFhcnxm9xZtAVxTqLgLz4Aw7MkUwu37s5MvStDjE4",
  "key3": "2G5UKpPnKtsJnYHcFau16yF6Vm3Mo6SNrayJMdCNuFXE82yX4pvqK87Tg8yzkPAAAFXKpJETcpZMDuxPk2tfpPFv",
  "key4": "3G1Eh6CVugaa7Qa7KupKme8RpynRdQ3YUtcVkT281t3s5ZfJktpBBUiUosBBFt9br9zfgaLms3f3kqeqg8JrviRH",
  "key5": "5MN2Sd8BTZqL4BTy6ET1KqLcgEthefdoPpAdkHhiq48jJxuGuZqkhZ3G42iwrndVxhyxovG8NM9kLeqBJNijaazv",
  "key6": "4Ayozmkv65jWZqGr3UVL9MpdnLx3Z971oKWqUGVguB1TzXfAhgbnCgiWpzXLrUJmbNG5YtVxxmr5mMEm93YR5Fwa",
  "key7": "CrtURubgkpLojQyifJoSspW1rQCTTBLT8hbGpGUZs8Sp816D6ev3nnYfaCnWCzUBmrTiRcoiymbAH4iw8RcF9uE",
  "key8": "5mhvZKSz1HTdjTRSEhcDK8o86Svk75YBJCBxmNcpBJgBhDPJns538BNLXsruMfm9y8UYtCo923xd6eAjEHBF7KhL",
  "key9": "4bFLsLZYV3vjeNK1be1yet15WDdBXxUCeVbcif34iq22rHK1pFX256qWw4AR5XtM7nkcEwW17JUBPcygQNMHwR1J",
  "key10": "3B5nLJ9mG5ccuQ5y4T3X275ioT2hEZ9pnAKK9N3PvVMQasnhVxLyDcQ7eWwDwmRBQS6gb9nNh9RjppCghCPx6C4H",
  "key11": "4Vdr5UvRzuSwkzLyPmhL14rKRdBujHXTFdDZUvhEtNe75x5mhnu6kcpNHBsfDXxi4ZRyKdsfHfmTrP54AeQy7GT5",
  "key12": "3CH6dLqeq2waZXDBrAJhv4fmtXB69jWhqXG8NTQEZiV17D5dK67bsNDS5qeqcRz3nV23eRJZzrQH6LXwq9qKxt45",
  "key13": "21QCTkicD2Qv3gg8kE37CfvPhUJ3Ab6w2QdtfzZGRKhp89VEqa89DyMw6LmpqzaocBEDF84GSKsAQShubJkY1PmG",
  "key14": "2iBEnmB6umUNW3Nod4ewBp5Zyf3iS9YrmWwfcpgP62jkFPe9m9WXCZG7VkFcXYhYcGY4PTvUSoTdCkbijLZNXTj6",
  "key15": "3CxThhs2o4q3zhPM33hcfT6Am7HgyS6MtqqCiyBivooxWDKCQwDmpzbDi8dYr8QoBp3zSUTm6tWzbYgsou2mKmh",
  "key16": "5BtBDYy4CJ4g846PY3gmYWKSno5g6RZKS5qwhyPHTh9vjoPEg8aiC8AiEk1XQEZWNDdgUBNbXW3tavG632gNhnLY",
  "key17": "FvFrBVFNnUFBanfkTsU5V1gtzF3LtWJtLWTZQ74XjUYPvA15umTjSGai7ReZ8sCTQd6w7VupvynDkAkzVmKJYNT",
  "key18": "5HpXMBkwNrakQdLHSGkYh5rJM7kSLPJy2RjrhGFnQaZPp8Dykyu9uF2gKWj9ZhkA5TA2SN9Wh9eVs92Ww2kJEC5v",
  "key19": "2XoH3HybNHMvs7LKph6TKrx3KhAVc68GGWFUHZvecoSXyDMPsmc9HPYDnhEncrK8q3uxPBWn8wJqEN3vAQ14mghj",
  "key20": "5H3iqiqYsureSMb8XQytCHJiuYLhFeQiuVRXhXgtozoFyCRYWPT5onuNU2i5uRja7zSs2fdZoH7KjLcSi9t2kDsh",
  "key21": "4eEi2WVkTkwVeKZBWZFJN5UPfDMd4CGMQ2PL6ii3ZMNhWNg1zrAAhscSbPe64Y3mkjeFwsyrZN1fBQm62Cn7qDq2",
  "key22": "fYgnv582y6SPeh6CYKWjDAdfdqNieHLXuWXcGwa4mXBrF62jwAGe3QjrLR9jizdbSq3N52ny6rkdEDzMWT2LiEN",
  "key23": "5bgDJBsmLbxkTCyxVkcEo9oszbq4K7qXH8KkaEYQGZrmKN8xhBjSwQeekk6nhfL9hUrmPxtZTRRgBDXgET3Sbj2w",
  "key24": "2q3iAqXTV85ib3CMmdkXyunHYXGW3KfNzPNQgmwFsUUQ4i31uQ7jD7ZLFNa2RznRQCoxQg4KySDSrtuBbcsm8Yxg",
  "key25": "GxqnvDUUN7ZSNURLnEBr1tkU6pcTAawUwNqd3otrcawx1vYms76EPki1GanZ5L5VEcjPhWD3dkGuFKS1bym4PKR",
  "key26": "4jVbgrmFuPZrTw3NZt4ej8wYRnvfwwhAx9HoR6Hx143Xqk3i1acoguCArV4RcF5Sz6pm354CwQFUQnqkD9G82MBt"
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
