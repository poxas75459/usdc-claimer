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
    "2H214UqrzGg9k6p3DZRosLdgbzKAEXTbWuuL6zqDGqwC13bsfVqsdNHpVruvBHkuH94crAUWLCLb6LUs42e6tHH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PEvJ73kJaZvVU8syFFTLbMsTizrZzow5cj9T1rsMTEptsQDtYasg6cpfvFocmrhcaRhLCkv5mkL7PZVty7wVuMR",
  "key1": "2B9Px8PESZwTSm2Z97pencuBaVRd3icVsUugg88vjTcFywcp4LBhjXesVXNM2jKakF6oJ1KVfHen3StuXuhddDc8",
  "key2": "3bQeko32GKJUKzXzVLskzTFE5VMEe3wykd4QRt58s7U2RAsqCzGuuG8dew7i1YU9UrU36gBNHMJvKU6CyWWn1J72",
  "key3": "312z4yxW6QFYZ5hijMTMT8mhrkv3Cmt9YawuJmXXyMkm9trgRbwoCJxMPRftbqqNEyau57kJKzNcMJuswjshbnia",
  "key4": "4uAdJJrE1yZaTpeDmb4akKsr24LEaJzsWwWmtGzHL9fwu6oV7eA8yRGxUWJ9hUtFHrBxydftssHfP6EaZsho8ADZ",
  "key5": "5XjgcQXV2pq3iTmuL8LNWbcG4eMFg55jTvjyEdHKareZsatU1HV64AkXvzKfgorSAaugiqARHQGbaaBToo4AhTw2",
  "key6": "2A3jYREwHqd8s6ezr3TLVHDB7PyoSBvsqu7Tw8hMNe2NTdo41QXgarBDivs9MWZz1Qvnp9Wf2NFJGW4awUubEcW1",
  "key7": "L5iMsXQ2zESaWV4afBJwBtwkTrSmQGTYhFkZv6iP6tckYysXjncfw9Yj8PBP5BuBgjWigGfj38r2Wr32dEYtWQc",
  "key8": "5wwh1jvQ9FzVjFSBP1HcuzEUCEAXzPBBqHGdf34xvytrPTW7JEn5eGjAhJds5MzsGiJfrZRyqstMj93PzquY2kK1",
  "key9": "639aoWfmodwqJDBkAVRdTV9nxxxdfax34aJ7x3beQXWtdWWjwU2j9mukWdM6Jx6BMGxuiJQH7hgaUb7evfrkYe5h",
  "key10": "25V1jgSewLUrHYHXNcz5MSk9eu6Yp2ehn2z7GsGKnJLPb5ZXvyC6dyeE2a5V9RzYoupNPjSkAK4Eh4TZupFwmk6A",
  "key11": "3waVVhca51gwcvNxad54J4qmaASEmwTXU7D8S1MBEE838Jc2331uAJnFdhKWi84BVBuhHdkKTUNGnsHyWLP6shB7",
  "key12": "5JsrGiWDa1EjM7PNXmrw3EK56e8KajcpchZRP6wsvDnS98jhk6822mhp5LCTXfirvfsQgTbnC3AJi2m1p7s89Tq3",
  "key13": "3oAfcinn5sA13ZWAJVkn5f1fvA88W6NCpJMCqdTJLgnknEPj9DPNHAQbmCKXuwsRrCsFUSYjfFaopz5cUd98iVY1",
  "key14": "kncET74KEDnKjCfaKgv6FTBy2kMpDysWr2amtFvdpCB3M68GygzeeyDocsn8FvmbA4n77eoQY3Heg5igAgBfPnV",
  "key15": "2LWKzvTfRNbPWxVnHUce4wZKgwxKAJXDGGtXCGuoZJXihHvAroJ7eqZEcpBYRXUTTTFf7ThkY5cjnfUKocrvSxRE",
  "key16": "3t869JewQgaAmJY1Q3cm8fCei3EXZf7pU47aqnYndKMpjvtDC7pYGu16QEXaEBPinxVJc16EDz452iK9iA2kmczu",
  "key17": "45sDdyqJeNdsq1Qj36Pa4ogDkUda1hiwqZkBJHuwdoGFfQjje68tuGiKwJW1hL2MyAnUxBuQEK21noimQC8aCJh",
  "key18": "Bw9LFmkchso5nn94GB7F24A5XMFY4g6JxQhX29mRk8vvx4FhA6BbzU77tC27LaCf9ZxLqGaajx7NjJT8DychCXv",
  "key19": "4rxd3C9wAeJMjghgVLg75SaooDKV2zym3ig3X5tdmfSoft97xqY8VMJa6DrcdLrMVy9xv8fgZ54wSdBXvS5vj6s9",
  "key20": "2Mj537j7rmtkY7qo7A65R9aZXfxMDFdEPVSQotD5yMqf7j4oTpzc8iPVeUyJw6UKMtd5MEcB9XKHkUN6NDF9qtyD",
  "key21": "syTeYfHehUAdMJbKKThRAnT4xXqdEMGHVH3BjXDbmXUeNarBQQytqgGJ4R3BDiQCFq7RytJ7Ka4PurLHPFEcC6W",
  "key22": "5TGLidLDXN6uZwVYKfuuUwTseGmNtGngBBTTrgh3cieZyRi9p4Yq7dtGS9jTbg8476hYCsZpF4i88JATCDM2wvaH",
  "key23": "tyzr6Yk3Q7rbBVrMP2Rpc9sd2DfBZoUAkXNdoAbZFJwr66y1e3RTme8KsDyQSLqjLGY1mwbr2qLYEJ9LH4aJkXS",
  "key24": "57EHga6uFYKa5ojbSMN9uxxNtVeVgZEXAZSNryex4AGtrnPwpArgGTvwweLC8fU4cw14oTkof6c8LT7v3tPeZgZi",
  "key25": "38UKCjYg3HKRhQQdCyhd5ubfB1gkxz3pUbuc1f3mMzfTmgNj388CCw9Joif4mcsHEU57cbGqZRLhvB2okCDgCrfJ",
  "key26": "44TLroRB8DLBcA2XdUBbbaKzsVSAhtbVjTk8pMekpm61PTqrkKa1jtJScwAMyoA15PCWKKriJC27LM4C7n6si7s",
  "key27": "463HFg9sy1UwFDtQ7Q3n8JdodkFFiFAqUL1xSqDBaLoDP5d9fWi6xagQYogTDg8iaJq6AJEihaTh93pqe95v3X5b",
  "key28": "2qFXZNMu71gC71BhSJRcbQy1A4oUEJDZfyHiZSEb5cKM2ijpHb35piBgdasBsB7RuTBw9AbrvvqVjWUJmDXDqd4R",
  "key29": "4u2jkQx2u1YHX8jMCfmNiRqq14oJpCm7NzEJ4cV6mDzXETvRtFa3VuxYUe3Vx1pWTT2sncxCTVWvsAgXvxGkfXDS",
  "key30": "5Rv6Z1BtMrHDC4GFgRxSA53eSv7E2KbwFQy4TYvnAsekRySU31hF9MmahxxC5wpMrK9P8khbe68wuwBrFSA18vgH",
  "key31": "2FTmgyBuYS5Rs4LHwBsB5yYJmsdxTbj4bnCiuGRxmBsiAUEc37Vry7R7SaVHXPQ8MyQDB86tja86SLakR7EF2hmb",
  "key32": "Ti4FTpN5YKBDRMesaxnzfq9TnjDdVv6KPnSNScsAMLGRoz5uHadmyJHM4QEnCL7cwKRG7FQ5Mbj2F4JKvqmGhum",
  "key33": "2YGJALQ1yk7sR4K1TnvWydSdWqHVN3NqgSX36BkbLxbdSsj5xn8kmaDNqtri569nHuiEoxmBeBCNRmJiv2A48Au8",
  "key34": "43RAPRD88cJHoamGXgoE3CSK2dWQJsxansWRU37WqigTWiKLSchzVo8Z2TkuRKa6rcs3T1fFpjey9QgkDqffXAxU",
  "key35": "2mWyZrcEPPuvYenHrNz2aymsqhQJGreUUZpqcHRbJqV5GxUnaG1CcLgez2snPF68gffVHP45StzBn5MgJH91zPkU",
  "key36": "22T49tomyvEvUXKxPGNqdnuyjsUt7sVoVNNnh7Nu8H5pYuWX5PaJMB8c4mbsVcwETvcsquoVWKUj8y5xYgqgNRNN"
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
