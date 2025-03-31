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
    "56Byy146svwMKuZ1kmNZiogZE5Zv5u6nF4FsrG1yMJPEVaqpYfKx5yR7hG5jZK1iNFMqnJ9QrTVKmaQJjvR7QdAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u43jeUP4eminrr6aJKGaAjniQoMXrFNbXXfrkJQT2NbkniSwPfowunPC4tjn7L7yNqZTyp8j19Do8kYP9Q9tM8c",
  "key1": "4NHqnZ1ofMdxwsQZywnL1dAesqvimeP1VcsxDRKRur7rNvFPDZAap6kgSbPaMHTU41Z8bkVGUVNW3K8PopCmVTn6",
  "key2": "4mrDq4W22MbXHSiSiKHgi49AagFcvmVq2AA7yUg79gtYrgjWUyb8NfJ1aQYTu3XsZ39RQpXqx4CNJVg9AnsSZqAB",
  "key3": "53w7YLTtK1t4eAGNAV34xacD491QPDyFM35H3rSjHLkMNgn6o9kNjKQyx1cquG3tQrMRmNfMVqaceyRHandwsaPH",
  "key4": "5Xz2SD6WNppv9QCiKiEX5MabgEhKqXFuVAg5wpmWEKMzrSsL1MnvNhrrxSfMztQCUvYPAcB994Q89HSidAiYBQDH",
  "key5": "3H5upZCF3pfSCsduEYcbL7vdzXYayzftM1TY7ojkCWt7Dhe7ighp6Y4tkQETns9a2tT4ZPpiHDe3N5uM6PNPzAcR",
  "key6": "3f9XjGuqWUvaUz9ZUkypAdJ3i74EGJJ9se5yk5ZzJtgoJmSP6yqwrSyico5A6vHp2cdKePzZwDwwug6E218s5HmX",
  "key7": "4GLuHvb9qysJ7uxDob1TfXpqcaFPcC67p8RjVRu8dqboU6HU8MuZSnGFUbT8KkfSa5X4eaxHdxWcccGG85KsdZfG",
  "key8": "qys6pqN8uFAaNyi4h2ZciTKKs1xZ8jhS2Tb2ovFkWwFP9StPFZdxXZ3SAtWTcqbUz52L9b1yZ6MuBd1UncYPN4K",
  "key9": "2aZd4xddGNYYjTRHf9vojPth18UbsmGtJ2EQr3Hj774DeBqKwt5HExcDtExVrsEnYoDJmC8cZ6LDGm5fAviEE9Lu",
  "key10": "2f1a17AiJBAVuAxRuATd57TVBTw266zWM2o6uDZZ8m1H1BjWVN52d9s7tAiatmxmENDhTxzK43chyxcwx1qqznt1",
  "key11": "2WgwdTHQBSWvB7jjUYtxMZbjK6YuGAQByeuAnsTP7wRmVjauZm1Ug7qeEVHiHSMkoTffijNnb9hbgyo8nLGqGvra",
  "key12": "5KbNyyFbQHYvk16vXyhBW23jhcHDQt4nYnqq4UEQCAZcgr1ZvZrxeDu126MZ5XJDmFJdHeEuysNnt1LJwrgrxtJw",
  "key13": "2aaSv28xxiD8QYxzC6kxAqi8c4v6QndVgMMfuRMLb5g6mt3n6Z2S4iJH46dQQ8eYYxf8AXZLMEtTxxd4okaHYZao",
  "key14": "2Z8sU966sN94nqxa41BdC6dbzWw3by9kb5tKTPAepwgFzoqxTZAjSKmXcXhDENHmkyX5mzNYoaqmy2HCXvHqyyeq",
  "key15": "3q3QsebqLtM57vgxLvUTXLgh5e7Lu75AJEGw4fc18z2PRRHr543QjrRnvgxyP9yGWqztcPa8D3vjWDySb5z4J7VP",
  "key16": "qpccMscLZpEiYDeVcPvVg9Aoi4EGd26pmJz685gmUR7w3ra5hNuz1MgJXwPD3zpsPrPeXzkjDCsCyQRpmDnnGxA",
  "key17": "43iqPs7PknRsbABJwiHDfoq2E3ssJAXV4DntKx3C7DHBxussEvvfkNHBGM4J577LbEwVS4TSntUeoAQ8TuJL5T7a",
  "key18": "1KwFHcAn3kaLwKyMJsRoSW8GB4ENg4xRnw9gfR6SnudxiJCqLoDC3U1roWeoYMLfjVx4gPKLvaQ4PwKdEPMcv4A",
  "key19": "3ZHPDMk83UbFGd163oFH5iTfPQT4nfK7e4Jgj7PTo4Z98FgN2yGU8kvSDpz3vaYqMikfsDtwyXFsJvofH3wtEevz",
  "key20": "2y7JhSeQyuupwtKy6GNZCfDnWoZ64BsyxiTPpautTZZgnZ6jukRa3Mv5LD6firc1FGi8qUan1LrEfVGVowR2JdrA",
  "key21": "3LizvrXq8A6MyhDPds4DsgZC1CJEQXqF1SGX9Mk8GB5kABS9fRzyw7y6bb2KBGU6Utbz779Ld7CiDUmd1ophKhRe",
  "key22": "65iKArRmGEE4YTdipVEJveMCRmqMvamBJQZHLNiBj9cHQJgtqrrTDTc7DVTrBgiG8YgJdvEzc8tJk9Yftrk1yF6m",
  "key23": "AJiEFtL96pqKeZpBCANwe22nYr9UyqHuXfNYRDsP5dLhfMCA3cp9QDCRFgev9PsDFXczESkMmBsbaM1ahX21B1g",
  "key24": "3AChArhR6d4AM5GZutgoDosqTccJGk1XmwHK9N8HD3zfCBpRCP9dvxMrBD7dGAAHKXotxptgqGUSQpW9JvHfGgcs",
  "key25": "5Tc9PoCKPweHCESrg55nedkDr5dALw4zswoX21R8t8NPsquayJDKafv28wpK7rSKtuhX9fHEm1F47mySeikG4gYy",
  "key26": "64yjyZ3jJuceSUsgKJq5m26TSjfK3V9GbAZGGF73uwmqe2K676i4megf958Wnxmu9MyuzNDssoQXR4MEbDmciwEQ",
  "key27": "3xJnEqJg5fiVGkcRbSqNpQNqgSAkvGBkyn1FFvB3N2NbUWpEDpfQmar3EwFMhNy7NLn83eUwdsxDk6n58GkXT2RK",
  "key28": "4c9bxzijb8whVUZwAubuyqpuoQeZuwRiFSdtt91s2HsB6pvEPqYq8cwQy7vaARjpcytUaZPLRDgp1rndUXRv1f5v",
  "key29": "2iT2Qcsen4M7zT8SYkKLB1mDwEAVeGAoPdguxyY5sBK4gRxm6mJHybuaHvfmWCXJxP7iEpKQjaMjbh4oAgamhU2f",
  "key30": "4hXc57ZRM2NUbHFnubazgpwtgadYEAxdf5uB5QmJbMe5z23Pmux286DvybTwprY9RMphWL9mM6CdCoHK6GP8Ajun",
  "key31": "3gsTJB2ia36KdXmqHbtLAu3RrrsjzEWktMYVpwrHxo3cj1gZAC4P1bs8Dt1NV1pioSHHxLPuovupKVmCKFt26yUc",
  "key32": "5xTTaHZUKAB6Ld2kHUsqjjkQ1ebHzUS9188gpjnYFnTmNUUSTMwf1nx5dAfABhYv6UzfVYbCLDYvkFY35a1aFSue"
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
