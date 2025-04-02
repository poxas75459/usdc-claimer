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
    "3qHJRDviuBJYEDyRTPbhFf27z9NjxHGZ6nArTgyJYTo9x6PJSXpLAc7RFbaEwpfTyYDdPdge4V4WnwuCXugb9uyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58X95SQjK3QKsfZ986YjYXF9gxxBVa1KtUULZxDtjzUePS8Y2Q8H3V3GiTEXzYMqg5fvJvDJGC47wgo3qg8xRtM7",
  "key1": "4fVhjATYUc1z35dzrE3VB96g2oYd5zDWZCvf5aE6eKAqW3SH7qERsouAddeeiJomkK9C8PAu52TPsUPBkRaz5TxM",
  "key2": "rEYdiTuHDpGqDgDXs5XoUxXDWxhfxrdW3N7qVGKLuSt6xVsPMQEQJBD7kwkuh9vbo5S1DY8dnPPHUmhBytV2rj4",
  "key3": "4qz9wdzS3ubbws2G8ikbwoVeFUBuNbAfxd23Fo2heqroGxag1RxB8HKj5jNxrj4ojK2xg6NPBHoBYqWRPg7ggSNX",
  "key4": "33FhCprNacPmgM53hrJp3eLrwbA1ifLcoPhz7LudpBjp6EfPfF58WQmUdWSJBpCP9cYEa6RwjwnfoVHgVqGCAb7L",
  "key5": "5As1Pnz7tbr8cBDGbpKPcig2vQrdme1r524ryzkvUfwKRJrFsUuZemNmxHzZkz4H1YiJB4p5uuaw17dz4uNhEDqd",
  "key6": "4jHFysLsVtFENudgz5TGvaHcLF2HubFxJ5aNeZarjz7afdf2YcuqW1eyZ23n35H9xAdhHnfWjsvqTxvYr79jybr8",
  "key7": "fTzte81qQ49WvuNqNYYAccn111P7XZXq5v6vbGmZ75bJJS3n73yNYFknraWb4ZT1LDwy2GgEjcqobC25XaLsJvj",
  "key8": "3vCavEsh79dsjLBRwm3QqEUjuFbz4m5NFJoZQAXkGkquzCW776y76h5c6dEXu7SodAirN19jwh1qQLqFMnE4G8Z8",
  "key9": "2gXNzpSNb7jZ5ozuQ9R2BV4EZ1cDNg3J3YPEymi3pXuWQUAnfKbfbaPMFt9iGWu1G71gCz8AojAvS1uXj4xesfy5",
  "key10": "5NiCUJAMzRFD69RiNSGheRsEsRFuLYTNsdrBsUviotdnzRrPdyf6aU4G4jE4UkmXrAg4M3ZMLAQFwWsCCSjFdkQZ",
  "key11": "43FDC3zZZmKbw8B75En6VY5aqW4C3ocQSeSinwJ3KqXLLqVsPttEM9a7orczX6Rvq5cGLv7AWub48Jpexfb9KTm1",
  "key12": "3EU1XyatHntFzExcyX41iAj2jSTXycbuLu1Pzig1xRa2yVNBJATsbeWDAMcdr4ppd3V2M5Be2AdWBe678kA1VmCZ",
  "key13": "5bFsEdmZFAvmRs4VhsbngCmJUjP2XPwnB3aauxrxsBHehxnw7kDvsaa6dsFvSuK3EqCrxn23ufcCx57ovN9RD8Nb",
  "key14": "5FWRQriiXYsikdJ18PZRds2cpWw7r8hJx1zu2rXfiWsmmY9eqRTKZLRT1ytVzQykLNKR7z7dRuTpgv7DjuNxGGHa",
  "key15": "21UMJmWuXFkeByNBJC764Arvnq6d2pHaZHYNAs1MpsrZqXb6QJozHb1UiomE2Lhcarcg3YLhNaunUVnUAvkrJ4th",
  "key16": "42edKp4mEWZtwsrK8A4BFdBrjAKx23RedWMtBW4E6VKxqciawqaPhzPUQzEbS2E4BZPzYBSw6V96T8iM9saBTVj5",
  "key17": "b3dFfYYg3nq1jDHuseZNYotmYASWrNHDFh13xbDSKBJ3NJmyD1GzYbWjVdZymuRtYDFTtjjofGiWyB6gmWf2L6y",
  "key18": "3uhTe9iPgSNhUzQLRMPX2MqLwi7XfupExHqFJnEsszj5Z4YNZu2qyBghP5ZKCVHrxmFsgzHPL31vsHuX6hYqHsex",
  "key19": "3WLhwk1x7wwoJ5M1Tyw9Cfe7cf9ab4mTpheccq2kNJ3Y1kc9GFSNYN73W9Xn2WhokwW4f6Wbj1zcsFd2EDg1rnyx",
  "key20": "3aeTKqRHZ7NwD8Pjx1TApMKJXninm2qhVJnEN1BZm9vHMLAuLwD2E7mDZ1QyF1ab5LbJBnWLVjbQDmLEmzHykvZQ",
  "key21": "2Fh9J6yeykBVC13TT4dMqEbxE47y8dCRgFqbJ1ziX9KPdowoZo8mPmAJZ71x9RE71fmRGfvswfFHLDq3RqBWWUH6",
  "key22": "ChFE16SnKLLg5HDp1chJcNyKhPc4A3MYo1Ko4CTL2o5yZ5X87qSXs1f7iRqfA4VgUx8hVgDKTsifqVQP6Juetmp",
  "key23": "ZSbzsWm2SoBuhuAfGdEmciUGgRFLWBvmJhjgLe4TbqyeNpNSzzWxodge1gKtoyH4LGKWQAd1ymNT7DZqMT74458",
  "key24": "5vLdV7ZnfoWpR9iia5xHgAzjmTxmEjGVN8mcNmdhQi8Nr51SKCUzEKZV1ySM1hKqnWyXmBqmBCoDSzd64cbE2zLs",
  "key25": "5GimxhrqH6S21ezbQkwgY9juJHCom2Ad84YGJv4ZwCVD6D1SBKz589xdGje6uG2X3Yj6nTm8nwqRW1ZrVi2nkfG4",
  "key26": "3AnkbQgUKFQHJXjsyDaVRt9E66v4gM12v8cMskr7Jro5rZFbMzmXbyFnYGzuAQ9Qs1XybNtnqjRqjf2nEZW35WUv",
  "key27": "4c5oC6GrF74SZLsWdPnM9BUCSsb8EhSCsLUCzoxX2kFuhywwerhQ5sUpM1jWqubzG3LRk41D1zEdaYx3DNKDHYHA",
  "key28": "5Ygcnvao1FHT11L51xfNXf7To29e6Jg6XoDJrjTfEVxcx3V9hnYyyqJiWdfrhaUVmgp9cVvKHhMshbzqtEeJEaC9",
  "key29": "47nK9wp9SZVqbduiWe99joGnDLanJspEaacMhW7sKWohqHoa6eyq5hAjimzMZkUQXrNVoDEmgAPgMoKtD3xvKcvb",
  "key30": "3XdD8mJ26UDxp4buHob2MtArb3JhcvJzWK3cvTGAobBVoG82tUGfdWL6fyuDEjY8m9Q4dbgg5hCJnsmB5T3oerJL",
  "key31": "K3ajvF95JbbMMoSaGyyn16Vb3NKf6tiHuNtXuKRrnUKL9HAnT1cNutVAnTuvZdSvK94UphgJnZdGQCafxJXKA2G",
  "key32": "3gb8DJZ7W3n5Db77ur54r2dCb77zMb4dBjQWf5UV56xcT8gPJA94okKxRrxNT9Uj5MBNJ2cmrpHATuPiw6dnGXQA",
  "key33": "sFXdmrQ1UyopZr1uwmahZk9g3ZKjwPitBZRaPtZ3jgrhfanDqiUnKFDKzYZL2GFxdA3bHKa6mEsvdF1LUAbfH6k",
  "key34": "4PowReW6oyjJU5RtrQHoZdGt8QeXbr3R185Zqr2V9KgxQKidC7qMC2FCWaeY8RKcBqq4sTcG3bPLDJRjePdsiih6",
  "key35": "4dSKB7sQp5NNZT8nTF4rhn82NBRRRToVS9bjKHb8uDdnpVVD17RRAejaraWvwazFjaKroiVjHFGzbzDo9PpGPouu"
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
