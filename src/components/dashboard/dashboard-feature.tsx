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
    "24PRrcBEhkRLdGr8s9pJCHPGQRhs4gV8yrz4QXnRv7ijEkxQBBh5pcfBEhTTJzWt6JgX6BYhZsx14fGUiGKKbUG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LnQ8MFGogFYJba1f2uCZwHpm1nmaTCEDcCiEa4fMsFZEjtsh5gcubzhnicPthhT17avwW1X88itYZX3juquZycv",
  "key1": "3hGnzHbs5dFNvhch5GBBMkcJu8PoZF8u72HncDjd17f6Di2MG3hKxjuHZw9y2BnJxfD2s2A8gZj9HZpNA3ka2HVD",
  "key2": "nnDGoLJA7sXYbbEpkGx45BMKbjDUnF3wvMFVJZiBFEyt2Nd6VCPjgGs2N7uiXyfctZ4FAp4Ca7kYYmMMagepEc1",
  "key3": "2nR4ms6xwTrwzKxoCnE3aWyHHB8k18Uvdoqp7Y9BsSwcEuHqN1XC338bV5jZ8medn9EoVq22jF6pV7kKQVK1PS25",
  "key4": "4UMHTtuPnDcJhfNVNrQwYqpibZpFmm7RoE24Wvn29GpRfvVDf8vKJ1SbNH2JjWMbzjTf95xehuw1cXuTM19MX4EQ",
  "key5": "22mDFNLgdeKkGj2uAmRvBuUvekRtCvPUfnpweti4zXg83sCnaMqpsYjRS5dR8FZWYM3dNYK1iHTqoWRx8DFCtrBC",
  "key6": "2Ci7bWiguQycTbFtcPDC7bc72yNduKuquuLosJWTUqMRvEWFc6F9YN32bhm2AmrKtwhTRzjLVBLK2FpwrRbQRhna",
  "key7": "3rM1pVYrDZZSFjxHq2emWVhobiNfFi4b2XkXK7Vy18xvNnffHmkXGrE49LEu21abQNc4mo6EQ5pWZbXty3ezz4dQ",
  "key8": "2DgwXvzY7KzCFp9fDEEL5zGcz4ESVm5SULk3C8b46EEXdcpgZNtPdqaTSSTeYiKTwsny4cxv54odaqcnyrixG6MX",
  "key9": "3oaoTJ9MEapLyJhHp1wgjwEVcncqNCSrL93gKK9J8PAdGnhZAC4wsU4xevpXnwNE9gXYK51FaXwCnUk4T5x4LXDK",
  "key10": "5SypD5xYye2gsom1wSFH61D5KwJPaE3wfRpJHn8VQYnT89akvmwkPo4nRCsSHjKbHZ6jtQjPd3XcuBrZktszSFad",
  "key11": "CGnr14PQFwtUKJYsi2Zixw9JRr5KTuTFpxRNcewTS2EbCrSX6mE8d34Hg88DSEkPR9M2foKeaVJ5oaaKThCQw2n",
  "key12": "4RSM8PTP4dNNbRZCbarskTkw8oNCYVLYwCEpESwJsUJh3KKGZVn26oQLRvDVCdZAdzk3SJ8GKmKDcZHuYGE5AhsX",
  "key13": "EgQUq2E735eVRR8nR8PVgd4HvRuAHA3EXWYKizS4fFzYQRdzgpzYzUkWSLeYmz6CwshNif6fW6zGmS86FxQTBZa",
  "key14": "vqjUUXGZ7ZD6Xp7ogp8gSH3EHgNtxrm42y4gUHanQft1eYKa8owoVABdn7C1fLSU6JES54BxJpYSwxtjhYjXKNu",
  "key15": "aHoGvDH8BoBWpDPdZpQ4jpHTMWwdj74V21LQqdMVowGvBEiBGJRH87pPLjJSUEtLanzdktvcWaiLKYsXz2u6Qdq",
  "key16": "2j2hvxP7mbsEYVgg6QGRno7DpEtTrcBREQ3qBajMPRRHBU4pRy7YoZwLMQwToQ9z2WRZYaXJmWweuPr5RK7TuuUm",
  "key17": "24cxQq5VJm7sCyVwD7FRVsgyu5rBDjBy9rjy5bXS8em94gwS35tXdhTDaKkbspjRjecBv7k5eonp2nYy6kJaTEfv",
  "key18": "5RnXLWBxib1qhAFdicAiLh6vqSmx8y12XrgnGaAXWC4spFcdNdmJihbxqup3EZ9gZtJcB2rB6HrnA2m2jhsbeoxL",
  "key19": "3vvndTaTwMtjFHd1B4CVPAhfjRVDkBWkVKzZnda5FStfqFY15G24r3eeXnP3fPAefX53dUz46dXDeLMMV3pXhSvM",
  "key20": "39cCbUaBxZvyTN94oKLUvQujvE3npZ1pBrg5vQx6vaKdSs4YakuD99RdidWJgmv4DERS2cUBbrM2ygkYgcEqAzyj",
  "key21": "H4PpwtgXXp3QaJzorYEjoPJ2pDjUmHXjiJieb1tzoKgf59nEeogrb4ajWtxpHCXos5Zo6dS3HcUtekidzAqCCFe",
  "key22": "62LmEv4UUukzjT9xKLe4CCZK4g92S581naqTvFP4BNjojZ4XgX38wyWAbuu39ZzsA8feJn1oQ1WjxEwzYFZES6s5",
  "key23": "5qdn3ecas8Tb7XNo8kW5QL9EmNeVsXp4Y2KPk9MHPfgMziQt6yZ4aWfdzs3FUzuDLHbBPFaZ93u3GAHZv76M9CpC",
  "key24": "pKiTp4mW3q1FEgu6o44pTavyNQz4iiJWGoRJxDJZQQ8F77yfmP4BVMrNFnhz8dGeMjmoCqZQFTEsGusiA2m3tiy",
  "key25": "3chsqmWBZp35grVgzE6FXU2okPRk28mTpQXQG7ZXS3ZqBaxMjz8kU3vTcjD81ee7r7h2Q76mvz8DeH9F6VpFK49y",
  "key26": "7V32gNtWuaEck2sLC8tUn7roDJQXRsP6ThGwQpbtAYjJzxo8gcC4Es8R9172P1dU6AEkN46DDNi2e2KrP73ytki",
  "key27": "c76ezDyiFKZ1oQxGLWvsfAunUQWQ8VmBRtKJY2i2LS1gCVLgFx9vQAP2tpvALXTigSxUgbWC6EfrHjhft8hE7Pe",
  "key28": "5TceAi2YJVqTwPoYcmNoEi9KxRKkX1bA48Ptq9FyvvMAwk6zq4bA86Xq3BgEiTQRkMJqo41H27XMKi92yywg2QGH",
  "key29": "k2MLat1w8KGT4dDMhP5YMTZrTDaLMFojHw11VktJsBsZDRqGcb1ZoMbmAFZBjhwq4HKiutx187CjLHHUvv1dsMf",
  "key30": "4bdNtC569ow78oskhZtV5xWm5yESEHrEGqvhQLh6TQZPGXLrqW3oZ3UuQW6Vs1SHa8V1K7DuC1nQMeYX2CX4htJ5",
  "key31": "2qbNi63ABd4f1YytnxML3BD9B8vC33wdZXSzoo6wXj1vWWbAGbKBTojb6Cs2nPVSAriaiLiwasaHGLiodbjrmdS2",
  "key32": "4syCKr7hfk48aJbUcrpvDEZsuEnJzrFHoNzZy4vMvpDJFoGsrNgRu5gFqCiv9NWBQYypjC4dEbLv96dZp9Tm4QXK",
  "key33": "49PVpZLDdkLeMc5bBHdqtW2HRoeoH2dmh9i7k2jip37qnDvc6X1VCYYmCodrEeKx1RPcj4P3mkZxHHFqnQtuNZ28",
  "key34": "ZK3KATZeeGZAyKUcHqwRwHgdhVmd4rLXuSxUbpkhzspP3B9AinDH9Zuipq8yvZYK1wkHbcd2sP7tfhCYUmBGkTg",
  "key35": "4HbmtqEyb84K32UmBGN9Hia6xhh6nFaCxxwvq4bdjyowwJiUUBz6MAVuRTkxddrVA15YgvKiy2dLz1VzntyT3w7H",
  "key36": "3faYqvz75kaT84qUeEWGh5ezokbjoWRinQHkyXykJqEUWCL53v1KjR27AzA8LX161d9JeLWiw3WJPRyK9RVzZPSh",
  "key37": "2K1dVePgEYXDBrZrLdLWrfuLpiF8L8iSzkVwU41qmqiwYWgvcUExJJ5KNyxyTyAnD18jPBhNUr11eJzwQcyTqnjw",
  "key38": "56QsrJZ3jLwYqthm8LYQ1abY8XxZ5b9SCP5EtWiNRxBqRQR6tP5rFkcAAH3sEec7CtTou8KvqwBbivRuFxnDLqbu",
  "key39": "4stytHkMahfJdYodCSQca4ekkXMKLHxjmeHo59dahprFcBve3ofaULaGs4USjoZLxgRYSpQGsKup2V3sXpeko85R"
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
