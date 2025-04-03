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
    "3XjKzWvTJAJaZwpwGBfJr6J55bNuXjMZ1GSrax3KD8UwdVBpFPqRtYfid7vMproNoxMK4ygptNnh3qWND9nvb553"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61MsbuGTgdeEd4CBMHcnqx5HUetfXDPN5yd4vTHACNjMZSJmV2Xw3GpPnS6vGi5uA1YVc8fQBtRVjoEk1tHqf2x4",
  "key1": "VHsKEXabXEZjfQ27MAWZ7fkxewS9tmaR5YLT5yLEYxEPhTMtWRSo3erkHoRXqiWXpa9HSB52UidrZfQnkijmUB1",
  "key2": "3yDEUQiuNExNxULqNdAsc23PA76jtL8e5gkf8uPssMWYXS6T8hmDjBoxTfrasfDbyyyQEUbi2UUwwKceAP9xz2E9",
  "key3": "2taCvqLegYSNorP73vpJFH2YMrJdX34XAaJdMRxAKjqee2C4qv89uU3PCkogA3mcwjk4Z8qBw3FTbBdSszsDge6Q",
  "key4": "3XdK61mgSdbnqqK3XSMsPFjtxYLTkguSc8SDdgHPf6n6JrCBP1FdYi4vd8pdAuxw239qhfomNfiDTpfh7JSRxM4S",
  "key5": "4Awf6eyiHqMjPyevzkBgHDLeExV7PuxG178NVgGHhvrisusVnAUzY7LSQFUryHM46ixGzH13VowqkEg32hiYuf7K",
  "key6": "3EsLKJ2t8VRUXbaWwZS4eWhhBGbu6RpHT7AA843rAjZc24QE6FYd2xUM7Gb97PsZrFxU6TN4cqiDjSFwFMQ2KafS",
  "key7": "sKqYnExduEiRgcCT45rtf4XXoZXcDW4AyLUupwpJE8LVjTATdJoVesRZoXFYkiFfwBfw3nktoZvYp7MPMsC5Zok",
  "key8": "2CgpucYLcqfyFq1MXqHyAaYBVkyUif2fKyipaT9stsfzFduxHYn3YPiqR3wvmqMgUYbDCNkM86EKQ7QiVq7u7sHj",
  "key9": "4Eb7HMmbvL7t7nqTDgBivV4jdt5kr5HqU2aCk7sd21ongaHfSvZvK8UkMAviAREAtUCZj6wMdquiZMZFRuj2J62W",
  "key10": "3RTVMioTh8vdNfmw1UC3CCtVKKkbCtBgjTNGNfUFBcYM7pRrKki1AP5J3R5Lza8tB9nTfJEWbSYNfKKoiab94zDs",
  "key11": "5Q4VhCnjaRfj9bu5B9AzrdHhjSiwfjighpRByKQ4UCE8iMJqxDncacwZC8WneBCZusrRsLrGoBAPPJTUAGQo7zmj",
  "key12": "2U3sxFbWVe3boUBsCDrwbotkZofekSf1DceyhKe8bqxc74XmvmHYEtzHs3Z2S7xZxGuZSvoGaC3wfxSzbs8B57iC",
  "key13": "3me4NRHD7FjzrtJ81jEiTkeEDt3NqyhMLWz8WuRwCs9U5e3SATvRd8uDnxJmkvFjCKQY6qSRQyE94qMB1x7q3XGE",
  "key14": "2LQhy6MAtBfHWDof4B7Pw9mPic8RqLXsVGL2ZKZmtUFtuYJT7pwRVtLhwWbnq4XSXG73f18u7HAUU69AYkn2nvoi",
  "key15": "3goVgC9AmVKabjBr2fyD5xAcknUwJj1d91LNsoecuFwNjQysBBG3vPC4mPiArrBBffRu67PYwHjbCUTXV7r7v4RH",
  "key16": "5xvJyzCY1umGfzx6UxRFiMZA2h1qJD6BUh8wMKztxZjiLax1mmaF7nZYsfkNhUAQojYyCVRwy8S4oAyJxEtVSGys",
  "key17": "4AXgPhaMFkLpjwgrysD7116mAkbFr64J2y1YcswMM6FreW6akRoic3EqHk2z56kek7FRAkCHMrhifkGzXnQynDER",
  "key18": "2ej853W1o6NgRjqKufcUT5TippNNXjzVW6XnihbB2tAV4oLSFcFCDPtotb9cEMFsQ291LV4UsBR2smVPd9rNNuM6",
  "key19": "xzeRAm36xinWENagEMkf3aQPYqEpPUJjAYUj8Lqv5AkiQFoj3zNDEJhQyWhdPwZGDrkux4A5H49PRbRNnhvbWTz",
  "key20": "NXycVQuL61W3Z9W9dMKegfZV3UQWDFinxhTRcEWdAF7WV8W3tyYxnY8iU6Bu4khK7Z42vC7ZddhoM8HHJaur8Hw",
  "key21": "3PEaY2LH3oywW6ahEUPLQ9gAGgQiG74JFRMoLHweuvvz45GNK1rQHtYqFuqXhMaucFLQakRoF5fokJXgpC6vEwkx",
  "key22": "2qhLE4g3NQqTAP35gphxzoi5rNMpJnhQ2R8sNPMGLkZ7MvPsasfsCm9YHEd5KFaEJgm7e5mjTz7bFAwdDxtmP4ft",
  "key23": "5MFKV8TnsejU2PwaRAW52CrseTPP52VesxcjAMVH79PqsV1J2RdA9tYaVKFAJ8adGPHqKcMBaf9zQBiW3f7FiEs7",
  "key24": "21DTQjjooAgU8tBwgLTeKirzmLPauR8B944vces6fhY25Bro4teG5zSjdXCa6aoLeKqV5bnR7hypde4sXrerDj2M",
  "key25": "H2a1rPguk34UZSQYGNTQ31Brvq6vkoUtCUtraFsfssv5hDP4ssZddyeGgDhnr6CSPLdbzv7YBvvz9qEoy3HJbHF",
  "key26": "2iLAUaewvub3vntgGftKqegfbZzJNmxWeiGTTChNtgj88YoURuU4TpbabXWzPzkdtb3QNRVfexgDuTpEFWuzygwg",
  "key27": "3cTFR1AeqtQBch1PiiVSRUcz6hsYPB1v1boBE8WDFWXThxDwsRwEA7dgGwBjwqVNramxGzgTuL5hH2cwLw33PBTP",
  "key28": "41ZuhSzZFngPYbikgfwEABPYNFAb5DLC7J7VFGWaz6D6RtnXZTD7NjsxqHZKP56knVrgaCvqaRcofqPNYreLZ5pY",
  "key29": "5NCX6W7AUZGHytZby4hgeBCNprF7t8uS5io8GqohVvCSpaJxra53fahTH7dLvaCHEWoc2VxjQjn7ZCstCKYryPJ4",
  "key30": "4oZ98quPM7uFYGeG3eosQ3rsnb2F38V9hEWg9GMZbfstCdLV5meFmUooBFb1fP1oX92oFbK99pTTJ3938MVkMw4x",
  "key31": "2tpgjRbEzA6KzSR7JCigw6DKpoqUkwkxrnB2AMSpHrqRxJd5YQaVX4jkQAZtKkuze5zYAwFXJyMPHaWWm9KVKhU",
  "key32": "5hvrXYS1L5hb6cGVP5jtbEGaj258k2uSJgvAEjvFKTucRW53i32GA4uNTqPQWo2Dvxe3RKHXxPw6iYfUSPd13i6d",
  "key33": "2DS8Zq13sKNsHzndkWLP98bLCjkZs24vZZf6X8shYDmk3CpQyzeQoSP9vxZC1pUZtVwCTR8p9gzFVSMbgcjNhkGf",
  "key34": "hXqtwHZt3Fsh2kzJgi3p5cQDqJ6P6AUdLiFpPZzsVpVRBcuxHKCjE4awvLVZkr9yiughy9GDiXMRUn3VPugqSWw",
  "key35": "5AVfM7KHxG4khFSSuzkmhRZudkuHWpNCNPwpevcV8vH4dFs42zN9KB5cnXoWCgPkMH8kb6Jg7FbeA3B4K7FXvMkC",
  "key36": "uBEbuV2449SbfDnuKRwPesmZfgVWXiEioDZwn1bNsnqRBJXMn1bdidxobMCcnxbs3uNSPFWwWoBLYMgpztR5s8c"
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
