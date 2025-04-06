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
    "4KeyTaqadgS8oT6ojDMGPGPzQgnM4kxjFu9jxRCkMxgFADzrhRfdHwCA2sZeW1JtCKvGzx2M7Rc71ZdU93YcK4RY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wpzJJYwVSzyeVzTRSfNhvxMNXJoyQ7e2jsQWs3FAPwRcWkW4TdiMBKGEZpvyj6795vsvc3yU87foWzHVfpYabqA",
  "key1": "4a6nmeKBscuXSgsLKA9UBHN7kXSP3Ts1sgGKGACg3wEmtVBr4AFLkBiddg8cGqTTUHLezowkjn2SvGsmk1jQnUsX",
  "key2": "617RapGkyGpUxAfUAxs16GXasAaWe3W4tBSeg9KMr1UUyPJxTfgdbPiocKevNe3T2FVdX5DRVRzhSpAstdmEYLms",
  "key3": "2vXqfDvgY25JuoNBAZgKMW6btRzQGN59SZhMMSXVrujDUMPtKBERUWTDSXWwdf23RCU5pehLAYqTEmJbyF1GAC3v",
  "key4": "33XsBU1SrPXTfpFbqYUERDwtm8sTh9QryFhYbm77K8CD5wPT68Hb1C6fQVrfE6DQjsUhgHF3AqUuFPKNR3HZoSrA",
  "key5": "5VAqUMRiM1HVEZuv7a9LanjfD5AcqbBsf5avrY1eTUceTbptyBmVPfnCocqB5JZuAJTMesLmB85Syy7KyGUZPLXk",
  "key6": "LGh7iRJ4LncdkgbpuKD5Xu7hSByzuCfra5hUK2RTqVvZ6U3LvNfgXz47CuC7UGW727iKfz2omBy4PLdCTgXeQDT",
  "key7": "5GNrHyvAQePMpq3WwXevuLHSB4xzKdgLQo9wGNZy8yXU6R3sZFXSEbuCJ1VEm4zKom4XpgtU8VJMUfaE9kwxRsvj",
  "key8": "5E6bnMxiDe7msWvsWsSVc5qTVd1y18j3Un2gR7CkbmABtUB98FWPkeXMSU1WcjPH2MMywLjvLeRdXDejdxvPQaZN",
  "key9": "cvXJudWFHFKqFpX4oN6p1mmT5sXhozabTQgGGDj25DcamhhKj7Mm7Loagh2U6KcjBQNeRcmy4uw17AMEGrFoukt",
  "key10": "w6yBCscnoxaJpWBvuf3kAf61TcHrR44FxdA3DhxbR9vKLJtk42vphgawUzRnc11YhD5pU6QqEnX5mVq9dGp6FmT",
  "key11": "3G4XFadXLtTRebwo7ohDEWUTsxCEefp52B9ZMgUsoq26JpVvvLgnD89n21hF5FmApsQJHEA7NYjChjmwUe2MYX9J",
  "key12": "XvfihYu7Uny8XJNNFjB76eW6EquHYk3keRfTdjz4wwR86mReATfA5XG6b9pGzAQqhXYfgWjAWfnYexYBR8j8L23",
  "key13": "5VDneQMwY6jE1zhXP2xuiUnHP4FgXGqnEjr3U7VCMdWTNSCCark2TxDdk48PaitFRUciCPemuJ27q3UrdjSH8Wor",
  "key14": "4jHNADNfRp5gXkMqA3tadPfRTZm7rUC5LxXcMB37DF1nta4sYUyAHF1qx5JNyZfxWMjFV5DkhwouYuJT5yTQ72aC",
  "key15": "53KcWnQa4t4zTyFNJcyAg3UB4Eqn6bwhiRcHBvLUEk8Yc7mPugfKLzbCeumsgRnDcLMnvC7PwKvoPyMbwqpnWVFY",
  "key16": "Tno1n7e83h4tjkJLUySEpt94SmAcz72NaPWd5C6qBtC6ckkpfEvkw5h2heR3RfLaZHG6RYdXR68kV91GRGy1Hvu",
  "key17": "ShFs9Tf5M2Ht2ZFULcxZDxYmVEKqXa8ynofFZnRjfNSW294kghgFcehMHeym3FEujW85mHZRZKfq1ZVkxpEd8NQ",
  "key18": "2RjWZXFqouUBXqFoxyiHBNr5dezZQSquXxRbHDM1XgYzPxK2bvpZDdJRmkLxzwGeGAjjy3qg3h8U2NU9wBk2gYVU",
  "key19": "2PiPgn2t8wwzxPFzbBu9qhZ1m6GzGF7BYw6nvJXGC4pfC8uXpHWoXkwHj9982piepzLvjSwjJU1W4PtcmtnWXpTR",
  "key20": "5x79m8DAm7zFgZ94e8nodA7LAyBZaiFYrFbN8c2ibpe7xYSygpQ7NUdfL8p6t2D2yh85gxZDABZo5H5i2aSFhhT5",
  "key21": "65EoTXnyt3kcfDCehcfCV3Sdp3XFznMNHTERZaVaszwoMxaaPKcFWzXxF5jYLSAdNsFhxWa66SfVDgbGFL6rKeBf",
  "key22": "2dYamdJKwCA3iCaHb5Run5wdk2H9x3z4LCSGa1ZAguUByKTUX1fuk2YN5GyuCrejj3UyTZL1BS5miKZ2fnRaxpTG",
  "key23": "4sHSLhp2BwavzHAZc7zxa4evoFRmr7CpHXefkZzGR3jacJMbTj3VsAtaXrg4mhHWBEP6B9RzVJZQ81ju4ard7zjN",
  "key24": "vJ8Y4TD8q1uUMgCenJskBvZbTNamPSzpRW7zfPGesCaQgujNhH24yihHNLWShHapeo7BVqNv51f2p7uC6jjXd2Q",
  "key25": "pqCntqaHqKrK8bTwACHisSJERBbKSz2yQyMsKFxcqcJtUC7GUkjFUPyyudxpiP8Ww1hyXrD251ZEQbKEsKBSzom",
  "key26": "5Tcr9nBCZoYn5jgCUvo1hEg7pN4vxV8yUDbph8tkBSdtMiNbxAvS9W2DiEE2bbjwQNSfpkhANx2Ev4vxqi5q55dZ",
  "key27": "F9ZmFYKedZKebwc9JGfJkhWWb283GTm7jm5qTHNHhXaD82EJXYobcs71CaKtM5R2DsVMs2C1bqGazzDCY7i6GTk",
  "key28": "WCitXeLBZ5XjVYyPgCZMfyc9HDim5NrQ5R581JXqCVdXbTi7zKhq4JmMtRmQoKG4tNEQ28Mb9Qyu5d3uN4VZKBE",
  "key29": "55fZ4gdX3NkvqDjf1pYeNFHg7QW3jy9maXiT4MushFWNvRDYUgADQSsxuMX1q99RiET9i6hRoTPDjc3QLHzDHEbD",
  "key30": "5BJvFNaWab9RQStFByAxZUCsKpCUxboaZRpqh1j7814yJZFksmVW8Hexr8yQ8tkjXbwZRp49x5hcRPg1o1GeMnn8",
  "key31": "64htbCGdjC9gHjhuWvxce5Ngm8s3NCNSFh5Jq5kEbnsNCKi3aXSRhGg8V2d8PZtNBicNrWCnbTPdo3dfrQ4WRoKu",
  "key32": "2HXw8cnNfhKn5ZBAtjEK9cm2vmyAGjEF8nJfSZNZFiabASLa3mBxz5AEAytsUM4FHF9PyFV5xYF6zTeLjyWzJHip"
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
