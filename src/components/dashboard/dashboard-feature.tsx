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
    "2qQfnMuMQrCd57nFmyadJPuQQoB4Kd6CrkpmCciLXqAdBogJLxkCAbjQdRjvsYxcisVS1gUqEsCcctpM6VvRA9Gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uwu6q48orarGk5B2mUybV49iWyeGn8RBMsewyekZ2zBz8WNB2JT7E8jvMF19e8ziNpTTXFT5cfgizFLRPgZmdc4",
  "key1": "5cy3ipHbrsgNpMLNds3zG8GXFJQLKmzT8rUKKheePkTy7rKdxx171HUWfojzkwPJK5KpiqJeZSuzW5U3TbXb26Q9",
  "key2": "2TBtEErShiriR6igjd243GRyuDFtGeUcVmeb7UYB1eNmkuJunxAN1f1GgSzP6D9n2peVaC3rJ6Nk3wT47nbQLyce",
  "key3": "67g8Qvev1fTXHmryUino5xdCDLuKvUDWwQCcmYFuAWrTZUpsMiZXHrk5DkUZ8LCnk7xKWaAb2bFfZ7smhfqz46pg",
  "key4": "47YwDHargVJdwYkxLqqTKDz6riADpMoWSgwFQzR3efdJAngpRmSEKfxFMi83qaWfY2pVBFKHH5Dm2mgnBxBo5NTc",
  "key5": "2oL5BZngDetzkR1tCxFWdsfwZAnhREwVhMAGAKxVRCXtoTN396mZ8Xycrdxi8KYSVLtAMffBpMje6xznEVfN1cP1",
  "key6": "46AxL1LLoQLToGaLPq9h2t4dfpAKbhtx8eQNiUsvLv8yZeuHaNAkw8igdbD2sjUG41f4XxBVJx7SJ3yUW9fmznNJ",
  "key7": "4Xc9fbom2wB9uhN2uT57kNzDTERzJt5bVg2c9XEjVHGUgaJZxyU2S2WVBTYjw6Xk1CDtr2QLY6pYFRQxxJ7axUnc",
  "key8": "4fLi8cbPu7JbXbQ78KFPLNaMpu7LoyvTk5ZQANBPRNWZixdhaVg4uSQn9AA7du9ws8zneq4hPBMGtLXVQ7pLNLpH",
  "key9": "36CwxchcW63TiXVsSyT9yGYnG6jsm9HHFF4T4TFx3pfAhz87jUqTdrEdKcu7xfWbLtFCT1GVWMiCaxF4RwrzLnju",
  "key10": "VMt7TFqPm9Sqf98EFrNuxzeqBAC9CtQtaU4hFdh1hH8tpq5pnaD8hdg6JSRqTXHJf8vyq7j4j7TAU8yaQ9BSQzt",
  "key11": "5WaQGwcuMPwRNrjr5F6zdFE2f4zQ4eyuCA4vvwhFnD46n4NCQvYUGdX1GZgRCLQ3BTAULkdm4L59QQTvd87ZNhdb",
  "key12": "5c874nRusjpMseNfUH4dx1wt4TkCXQxa7fgpjRqppHFMwVhXvtLGSpriFzmnpQXqajjXzvAcfWtzbxTWSbJbvKH8",
  "key13": "38TPPrKLqxiBx5QyucKGHA3uQjWYC8tUc8ggw91UqdgMd8eKSkmysi5ef2vBhTvyuo9S7bCE9bkSmkQLRZom7CQk",
  "key14": "RUoNQWi2KCn1AT5rxREkTi4SR9cSyZF4xBEXvaWjJwqCNtjUeJ26nCiHNXRbq3zg8ofHgAAsqQTosJdRuiRZypX",
  "key15": "45zrPG7GuT4ubVS6p79gEGL7dLciRH5phj89AxofeCj21v5CiyshTHA53gY3x534mFZus8xKdi73Ku8v1S9DiRWn",
  "key16": "3w2xvNewhQr2SBPdAo6yq9jcsyyUTggZ15B5sWZZQi4c9To5w2nuVB4UmqQ1wVBBdQ5Aceqv5VKdLpzxxah6AXAS",
  "key17": "46RinG9VGtbVqLYC2bksy1S5VyvPsNbtM22N4xczThU4FhVu5fop2s4cucFAhC6R4FhpwJw1XH4Uc1bFEgzgvAL9",
  "key18": "2biK477WxdCjhBLFTtRSWMwKYB9gFZcAYRERJEG55F4g7skBobrVwB8foSsyQVY8VA58zGtmd9yzTt7G8q9Xf5hm",
  "key19": "43JG1QRwSUYd2aZhG8wxH2jNGvxGQmf3MonMcJDj3DSD6zPp27GQjpWrLEVv6QVdjMWYiTaTdGCqYYT9kEj3kaMp",
  "key20": "59MAXNqiCNoJW6FxzmTNgcqn1KDWpR8sBHGS1aMAgJ77bRavkD3irRDmMiQqj8mMgBzRGKuoHnTKFTiKbr5GeVX2",
  "key21": "2LcbyEn2pydqscKBYnkoBdZJ26umbVKMd1KJhJABYxcNvER4GKPR5AuH1AVJRHJGeudRAUALGmXekDiVNeu8yxiC",
  "key22": "2CSbJWHrT7mVyv38NcSDYN7z8j8rJVbzAJhPzMTH9kbwBGRBm9GUPcWVSET1p1rNCpsRw47gQwc6LE42AcssWMJ9",
  "key23": "FYw9NvfEmEiZAGytQf5rgmyUWHjcLWYqwdhCEAgvvzrJDF7gQap2NL5zqZqbxvjHXbREkHVNNKC3zHrsvbMjeUb",
  "key24": "5TJsdDjX9xPACoBRoqYhpFbaEPd4LrPULoY9ToF8Cruv8DJmvmVbHgti9QP5m4Dazkpqb2YK9csck4TmZyxuMWvU",
  "key25": "5mqLMJrtrjoTiXYX6S31j3d5DDXyFs1ZM2TQkv7G84nMuHBskCwMCi19oEHjsMTBfqrouTnZXCLeRkb4ZgLCxJMk",
  "key26": "3XiyzcMYkFr3FJfUjFBPRBnaiW7Pxa5qR8j7MXpK9eXmGxHNJM7111RZ4YkqVUkvMHmvLjqac6WnCzNQ6TnD9eek",
  "key27": "32feJfvwj6U5711SAS7T7aXEd6Q3HBFGM3sgFz9mu99EhVjT9b6rWRfLxRSA31fD3zFW8YCTkGSE12rFHCLeVCz3",
  "key28": "4KZxfQ1KedducMVHuThQKREciowTx46kKoGSY2GiSCybYLstEvuunKXZPT6DUVY3ufSJ48QbNCcrw5rvESLHLLc5"
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
