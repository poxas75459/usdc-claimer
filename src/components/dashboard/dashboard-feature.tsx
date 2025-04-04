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
    "3PLarySGRJuBk57CTaNtuxfhG5VS16vFDaY6PzYa3yuHgbFxEsGFbosB6AJAFLnweo9uwk9kqYzyArxZrjEd1iFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eouGpY9Lad8xvuxAf9vkJrsw1umxsVYW9WvaPoeCF8WVWZddxHHi5ndBY9zAbF6BmwxMgtVz2P5iCch37idkTU2",
  "key1": "2zjkNMeZRVPnt7cLtp1mDR3A5fxE7xn91cqhEXgJbg1ezZmmWeox27eopnhWW3GXiCxCfsVVZt4LfrZmTqPzZa3Z",
  "key2": "562rKycWjfDq3q29iu7YdG2SXNEHwM5ZGMg9zakN7gWn31LANUMTufnwkhmGdVuNNTfNjCpr8UyP6o65BaeWgNGY",
  "key3": "2j5WW8c6fFHNsrrpLFtutYs5D29SndNXDKmU332czrxKbinGRE9CnsHK4YavnP2mKeZLooGkUeYmkR3Sasbn4hva",
  "key4": "2PxnBLuq1h25y1xm1NZZk67YsaVmYizMpZbopfDZvkkcDeeGSUz198Yvbjgi4TyMD71TDe1TQ5p8YdLkVPBUT1BV",
  "key5": "4sF8rMMirmi75c7Hjixkwe8q1mNkoEhD9NWp68AyW76a99dNytKkRgPtkC777RvmzhGFCqtVejhumX1WeGfh6ZiN",
  "key6": "4Cb1FXRoXMWUK7ExZC4G8vmUC2ucFL2PcXZAtHgr3ticjk3ShUQaHF71EWPWwfusDi7AcLe9roTfr4S3QxYvRK6F",
  "key7": "2vaxoRS5hHApLnGCZTQvLrpLbCiKxsjuCkpeuiXkrwfGLUrADBm5cuWnTpm77PXxh7Cs23aCYuN8eUswg6mxXJEk",
  "key8": "4vojvGaJ6iDJZdASdUQ2BGkVstb1RUFQE1Mih5Rew2vQiugJ3x7LdHtX9AdLs1mpTroJtb9MAzDf92bexJUeDLzs",
  "key9": "2gLsBa85CGpioBA8XNhDRkJg5avxyMUNoi73EggHsW8gaJtRqAPpXpUacUXB5xpT4ZCWzYKaQAbCuwhF24nCSmq7",
  "key10": "ybaMxFKrDsEdmHj3vdfZQ9L6a3eb9vzYJHWfDwocV8JqfGjhcCkyiU5U6An8M6qgWScTGDDee7HVZPfC3mBgpxk",
  "key11": "2cLSKuCNfw84Drckve1hZ5KWTnjLCpLQUYCksJ5f6FTarDfpUWkbGgx25f8isZWXF8XBZq7zJu6NDFEVirvcvdKi",
  "key12": "27ypVMAV9CuHU5441RDqMEMcQaJFShDqoquJ4dkACMf1LR83iXih3PQzMqjvdNNLhwRKrEwuDeAx6r1qzBZ9NqSg",
  "key13": "5AEemKoL4z6c7XVF6DEjHAsh2q8HEmPhNY2ER72oTjFoXe1rCWp95nreC4oCtFcK3DJfHUsNqkyUhFpR9vauVZMZ",
  "key14": "3684uBrheiycuNgHa6P6LV34uRx23Wm8oVz2beAj4AMs2vCbQXf4auDgtb6QiCpBB3MrMjQdrpASHEaUFa6E8izA",
  "key15": "4pxGwxTSvMCoWsKMoDvY7b4TEK883ENap1x5BjPUspBaPnNx3vH6R5PTrGBXbnVtJ12a3y1sejGAZf9joToZcjbq",
  "key16": "Hdz5f89tfieAdfDYss2NzLD2yqBwxG81dUo8bpZemGz1krqGAFzC5HqyiPUVV3pFkX55Sdv6Fa9nxC9eAwF6yVf",
  "key17": "u2YkhyQqzywoK1BrdZ9u8SKtApPSDqeQeumfzZvp1zbVW6gJLfXknaAstS6Pi5fq7MkYw8bs72Cz5bmiG3F21Zb",
  "key18": "5DexNC11YZrQPWpg5XLNLgwjkvSPPmoAFxWsJdPNs1drA4jtX62AnoyUYBvJp8CPH22ppkPFkxU7sQ6DWmsrLsHA",
  "key19": "tdeUTis6b7t1AHjonweLGc5uuTwZ9LM1fSn6PcajBof33cWCsspkpSK9rU3Y6Kd4jC4MSczsEcdtKg547qv623U",
  "key20": "GShBUXbcoycJDnpvgohn213Uf54mzJikTiDMXhNsoRvU4rYEZ8Dt1g4ELAcDwGDonezwHUKZez4mz86L8gC3EA1",
  "key21": "4oFxYTWRii1ZURhckSTJT3e1Bo9xTsJkXrczb6nU89WSLH5iWGnK9WmqSfzVNsxMGYoF9jXdNLp41ADMsC5TbiZA",
  "key22": "gzX4vniFCw7GowTd72YHK7K32MJ2XPtjVNP3jKfirBk8931x8Wq7vorsL6a4J5Q7gYGXSUknBzgYNTrsBqoonJY",
  "key23": "Vgvmccuw3qKvo6jPTgaLonvbCwT7d5C5UL4G5Yj9oVCkeYhzYNPhS9dv5Wxs9fAdbaTMboUapDKR9euF4KPGxae",
  "key24": "3Uiv4AT7EXecEEeWMrdVyUaG7ujJ49TjhEkgMajCmSQhMaA3tQq8Gn1SAZV7i9G9337bis3pVKo6wqsJFWXofWPz",
  "key25": "7ZUVDHzPbksgkLdpLM532zAa2BfG9LNHAGB2WsYSfmncsftYSyxAqaWaSVRwFkGXmKWEmXUpDJ8gLoQHXZjuETF"
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
