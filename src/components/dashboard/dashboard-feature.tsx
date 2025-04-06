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
    "5KzSb46qTTcsWyTZffg9e9LpuwHYnRLQwYTHX3L4XtVSFBtLYnPPWwCBEacpFjTHrTiFhdgs2FiTpp3XnRBtuL7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rJGaZ3feQXYe5apB1V3rfts67Kh7FduTiVxGoa3xpmvV2qkQYfRbFdDBt6gKt5GdavfiWsG53cW4B97eXmtSYgT",
  "key1": "2ADtSJLEnUkEzdCXMWJtdn77ZdwdJk1w86k3aHhTP5m4GyYsovyqsyxGdy8ajsar23983A4ZY4KKgW7H1yjoFAZB",
  "key2": "ohV5bFy1FcWk3Yts6BmrNWis46FNzf3JVFABu5vmWjeEvhShykT5584pyoVdrHe86mjusQryBZwh1boxF44zo2B",
  "key3": "5Xad5FzcMkDejYVxsxFcGi5aGmRwH8RYtYZbJFzrKZPERfNzmr7spHuZoCyxqb4uQ1oZw5jW9TXiGjRBCtmrHGeE",
  "key4": "U9RE3B3pLsYZD12ZVqPU4r6tnioz4Pioxqnw4cky7NG3um3dYkCw5bZNfrgALsGX1Gr76unf9bb3jjXuQm1oao2",
  "key5": "53EC6Uuc2DG2BpsciiydXym8uVM9Vm4ASMoY94WEy86TdN7xfmpdRpDKa4hXnGDCdoNLoEDzaeEXF9h1Aq2RyagM",
  "key6": "4FSB3rEWEGX3EE9h8q8u9aDfjPZ2YgmjYqmzhm9d7NA5zSRQgvbfrRLBe84jJARe8tdcuQRwjc61ePvPR9qZoUj7",
  "key7": "3VFaq2SqcsHcoKELfBnVpmRFYd3qukszGEGBJpceDRCgHeG6s8x4Y5mxM98fBNg7TvBeoj4pnsUuzHS8gz9QKBTc",
  "key8": "2oqHEqWT4KueRkx8HgSg6draM5txnJcFfJqE52onHe2L2kp3Da45LR3cviYYmrFTuvCBpbTmrcVhhvmtxNr9ro63",
  "key9": "52aXDN58tbMRJDFiBaLBHivg2e4hfJvkPFEotH3u1wiVKk7KDJU7HPu7MryezPuyXRfFeMvY4k5ZTPHk6xtwtBQK",
  "key10": "3JLQu68otLcVCwmAoHSvBWZpXrcf3XEeVkuXMNbibiqbhVz461buS95N73vyFqSxoTLSyT9LTgYATcPiqAQG1EZ6",
  "key11": "414kg1k8aSM4hTmjhAWtXKWAAPtjBo1r4DckFnAjJUaZqdoLXFffgGp4a1MEzP8J9gR2aok9YH6PL2Nz3UkZzcgE",
  "key12": "33LvVpAJdFSU3gRJNGM4ZenzCAW1G5R5vCiNZUWixmePMzJn9VntY26XKSFWwkNNsLWXsRri3V5BAZZT6o3udFap",
  "key13": "2p36NEuGMD9Xews3U36aFSca1NtHrkrgx1xunyb78FHWAqfXaqXnZTxAMK9WTvNAhPtfL6RZdSpsWsS2RwiHQJwa",
  "key14": "2K7oqJLfDAn3MsfwMB31Eh4vjPEBBPYK4sN1QFSuSvU75BtUAcWwcMDBG2c2xsLeYAyhf6t2RNpght1ok6LcJa1T",
  "key15": "3YFg8tTf5P9h3LHis5Gx6FAUwziqnLAF5Gm58zbGbbGgB3qmc5RB2sfr2Yga8jpUyZCFrkZNqE2SXTBSwUwh2Pmz",
  "key16": "3RKvsrfZAVeJP6GZ6SpTzxqnMuiavDfkx1QamXAY758hEzvxTxCfMdSGbUpDMkyaCh9Hq7yFjwtzqyFjddBNwtYJ",
  "key17": "2DbNwsYNzR7KrhvNPWMZj8zEEgvnkHp8C6KLtAdFQjNzRGGGF8PE1R7Z7vXwKES5aDRTPswyMwSbfBuqaFrUz8cv",
  "key18": "2uKjnj29ma78nDM4wEsbsnaBfyFcmiC1J3MbmMgKJemZh8jYC7RW8CEHzsCBMLtEXcBvzNEbWg9Seu8XU37nSJf4",
  "key19": "4XqzCixnvSsDkpUUYdTLbY4bZjPMZnyavHQbi87UWhyqKXSmGP5C2WJwD2VudJZjy2Xi6CSHfDbaWQvVrkLk1yu1",
  "key20": "3KfhWQXyvG1ppkzhcWsRurzpMJtvNxKAhWEKJjc92oGzFCthRPZNFVmpZ59RSQLLdf63F9zMnDWuddPhH4tGECzH",
  "key21": "21VVb6cUBSV6GQj6vQuNLQPSBk8dhNm7AZvvkULbaWE9Y2ixBUxu3n5miq61gfGwRc3WRgUKCBk8XpDMbnSLibgZ",
  "key22": "2DxBAJJ3dVwC1JNBVpRBHZ4JLaKeccasj7bjP8Y1EnKZEqQtghGSivHpvhavDjRGr1DkYNhXUuJB7W43i1yKrV9t",
  "key23": "4BhhWfEzcdopv1HHHXWVNtyp84CnUJNLXmGCt9BJQAdCTE6wHNFHZKJaA42wUN3MPjA8qRXf4dT3LvkzndBwTJRR",
  "key24": "4PgW2rjwzuLYSwKreB2Qfu6AnA4J9t8hkpErJ5rt7gEGCQ5Tqac36s8MjATE83xx2zzBAwdCMjw3YvQb3LwRH33w",
  "key25": "4xQsPV2kK5Un41bNVDWv9yjAH2ypVCWSM4V7mHZ7WxC32JaRSzz4i9L6Byg8ZcN2XEAD39hN1SjUvZLk2YnAi5rc",
  "key26": "5Ea9jpruyr5dBekqNJWQjHSPKe7Y1gRKGatrcE7Xwg8f7NptZgUn5hMc3MbrAZV7EE39eqHb7Cjp3rtZjxCWKUJ2",
  "key27": "2Ux7DKZvR2mCYaL92dRyLAWH38sncaez7C5V9K5x8U6QLqY5ri2wmoChWBgVajvwerYe8WzuoG3y2Zq8AbPWNESq",
  "key28": "3g2BRZYQ7pyBMxhCUeU1nUvQ3MjqHMq1tSfg8zZDExuErtoMEjWVHowpYxW5PjVESnYUZjoXjsMh31XxxaCZcAXz",
  "key29": "4wgUQm375xHbzezaNND4WznjZjjFWRpG7HBhwk28T61jNpkctK4LRCHFSQnvX7HCuzMWh8csg4L9PeCKyCn79i25",
  "key30": "64DUyAhEuNrJooQLJaLXjCPYqZXeCEg7Aa9FLR33kPu4gcXF25LvYPdFka2K7xU8qchtvivspRjdpVhYLAkA5SRE",
  "key31": "2MxbZTqgT6KjZ9jjGf4aKMBT8ZKmFFp2z5F4LdcnbPX8e1Y664e1bVfMXK5zKGcn3cwyn5pxFKH2BYMRhjweacGC",
  "key32": "5S5wf4hfHAdaHSq61aAnHWQ6rj7ckJTx42BjbwCZJ3EW5Biqw6GKXBbngiiZFGG6z6pNWk7ePR7eTNwjTxgMArgb",
  "key33": "3qYDtj7ouB2C9GLPHGGJU1REoXTT8GjZ9ekxmTKmDtHzVqM9MDUTxAzuo44QQYePZZuWuJkMapkUAaVtMKLHqz7T"
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
