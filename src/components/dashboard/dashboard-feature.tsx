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
    "55nWLHibWmEuegkjFbS2MLNUwLtEY8KGnyr3Ef7y9roYQK1JwiVRcHSPPnGRHEn2WZ3ixas5jNxdodzA8LGuQsqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oXe3BLfDvdmtydg8VBmDErNRoi17jG5AbgRNUJ8edAGYAaJPmtSH6nz9SW7tgKz2q6s77vmKikWPThxnvCSxu11",
  "key1": "2BXW8jZWoA7wu9eVoQ1rpgaKyUHBQ18hure2akpxqq9CU6THbY78d5iBXJM9CnBtqsdmQXbg8sPw6UTsiDWoVXLv",
  "key2": "4ePhzPJkWwghbnyduuZRXEP4NZW81sav8HgtmfypFFSND2QXUnxXAyaK59tbrdiLB8jRg2FPV6hxoLsTtFzrc6wA",
  "key3": "2cZVnJr9RATkctoeydfhQTPjepjVCGsRhoXaUjiDTXm52G2TvnvRkBGA4GzUhKiKeL4D27hW2G3G94SicAqsVk5z",
  "key4": "35i9FuoVgBoSLLqqewxdnr8FB6Vey82CUcFkHccBqoDwVaphGffjozJ4VfLNAbA4XhvtLLXJh513yTRfcWMg6kYZ",
  "key5": "XDoY28RyqXUHJGuVi5gMEKduPT51xUj2VvNMgDsVJmSArGFvCYNAZgZBKubpzJbsuzwLJry2bzGBnzMVjNpNVnx",
  "key6": "4s6cMB3bJemmGhcwM3Uc8PaE4gUGDsgg7YqQ9MxujUTBZCy3GctHMoAidZH7SZLQG7gimHrdCHNiSpDaVbf4bruy",
  "key7": "5hGGe2eXUq4GBDUH2PKFzGyKEj3SjCeSkVSMckBB4xkdDM9Y1aUVGoWaYDG4GKJu1Nrn9pWX3WXsb9C4YozrRRp2",
  "key8": "5h7ApqFp9FkuS9pYnrRyBzV2Khco3ewRNK4Qj9WnDCoQET4zrvuvdYdaXaSxcQgtaseV68wKCpu3WzhtBoM2kasU",
  "key9": "4nTFx7gAajgm8JnsrML7WPjZPbFT1SgyqkHNzYaPVqbuEnYT33CJAo96HdkW2FECVGTbcXojEngyzRpewHigkEaS",
  "key10": "5fRJKvLNEMgGwTm5d9tgYviDWJMzpmHxt2L1Hpy47QY5aTRXUVYN2C4zK3Fwor5ck9jgEVt2Kfx3bpxPVxTJJYSx",
  "key11": "3CLBo6Y6FoX6sLhdY4k2wcd4HMuVv5hY84ofM1eAPypWXSXrpS9iwMyYGZKjtiFPNsStXaBtUGFxmjVsFjuhp97E",
  "key12": "5ReGBAnqLt5f8ccCgEr879ZHpxMaAXjSKCgccVY1SG8tzt2EsprbVbH1zoRb8RyUB5xa3YqykJq5Wfd6njLBgfx",
  "key13": "4J8CWUo6f7xZWozR5XC5UtHLd76Ten3v5H4czYDi4JcDsCydqZDDJzsw3hrf7b8tSDpPt5AJmLKfPSVZgycXw5J2",
  "key14": "2aN51Dq3YNZgpFRAL2r3NUFMDifCdBTzibJBnwhSivPmrofS6ntoA5sR7JFfYtmLwwyMn2mCp11ZCnCXXakjEiDR",
  "key15": "4i9AfBVwbp5SdwcgC1gw1ebPorXzDriTfPBbB9BHrtdtPhX5fPv7HDNmBHMjiPvm36MPdpJxgtKt8iWv2r48vGe",
  "key16": "3bWrfFZLAfDiDNCELRFm3rGsW6b3NGdkm8ok5aWDyqLXHr4p9ZHvHEuFgENbL3wWi2iYsRCE4WpR4LVbSF8xgLpF",
  "key17": "4zWyjeHjH319q2zKykwvEkotfqZAocYwfLiTavd6cddYqLFasnicSo6XWDNpr8epS2sfjW3SMfTDC84G2nsquP5Y",
  "key18": "eCchMiSbAWd3pQtVPtanj2AK9WCjjM5iA7unz4XotXaBMjjbSSRMtZ9PchFCNVbuDXAmDNXpP1Kd3pUdT5tDAew",
  "key19": "5i7C89rwEhZ2G56TyzBXh6H4NPV8XXnjUzVTTLKM6uj5nMP2XqzGjrKENQYLNMqpjViVFrWAC9nU5jLSGQDkf9CE",
  "key20": "DvLN4v1VGPyuioVfofYmxkQRwMookrDKhCq3qeZhKz5Zf4dTKgwXLyDknWdENWWMDQgjqAKoYpdqCnkpmA95VJU",
  "key21": "3kTcQN3kQf7asC5JEPoyiAyK3foBiTGNqBQCBJqG218k6CfWYzMzzyrAvdVhGB7wyE8MGLnHrCHZELiwQqzd7f21",
  "key22": "4FjRrZZXPe5tpHApAjN2g7hNqmQ45Ci7saqp7QKH4wvfKa6qPJ7MPCfwfbSCYfLaUCvWroaDRCy5NQYb5RmbiQ2G",
  "key23": "3DX7BzPA5s5PNCprUwEeLzcVwNe6BKd25RTiJ2Ahib8sB8eG3mNKR3Bo1WhsoBHUDPEmFY1yaB2uQwC6Ht5GsFn1",
  "key24": "BSLnq4Y5RbbGPD5sMjmTbXdLENP2D2WopV8PaSH1EjCFmr9PnS5MC1QpVFW1hpNzuasJSqhrsNEbaSVmJNvpA66",
  "key25": "5bBayaEkA8CLJk8znkBd73qNs66psCvCr8Kg4QSGU2p5hmmXJrqGCjyJaCn3pCdb89YrzWJxGTL1YCfKtDGwLHW7",
  "key26": "29smRjHYk3KwixPp4ciqeQhRTN2ZrRPQsEVQx2xToBJZkYM4V9PgruNMeR1rn4VzYhYxDya6rppGHEV2ZrNa9Gmh",
  "key27": "aLt7fqJYqMSgTM7hRA14WMrtcKWHtCxmHjLGqiXvvseuPfEVE8UUszH4po65LF6DxNNArgNAyHoSpcr6LJYuuNu",
  "key28": "64EavJrdZqLq6Sisg7qkk7AmYZV2G8bTUvkwWb4dxzKpncxRdAkhiVLFjdqC4jGUXsXtiYijTWEpnbx2rBv9gVcW",
  "key29": "2XsCzrxvnuQG34jRe9S4EgTTBL7dohByN44Dgn93cyivmnyj8KmhZrD9So184TNzv5dMDZmBkNJv7jQGtuoNytqT",
  "key30": "5FCh8GEuvmZejTQXwYmKeFhpPfRk2UaCNBW11ujpSzsWFB4JLte5GQ4CW6HhX61Kn4GrQsZxhVKHTiydp6GzfzYR",
  "key31": "3WpEBK91vkHowoHeZkKxRq1cLGU2SjhZQqAZWgrGBSq5Nww23JNzKkLmdrRYUzXCrffqEnDVy6x3MpghggC7dcMi",
  "key32": "4iKJi1mHDVekzzg2GqqTMWTv4p2nuK1Lmn835Prm836FKG9QA5mwnTuw9z8bschCYhu9XBeNjab1WWfSjCYmM1K3",
  "key33": "2smzTjthmzjhJmi9EHRkCo4NeNZBAgitpN4cXa422iYBNnzPbz15Nt7qY44n6kjSrcuXmnPr5aNezV1h2R5DJ2zi",
  "key34": "4UyT5jjjj6f2JaV8PbEw1RGEhjxcUnKv1kpzRDxTf9QqyUebtcc7fRowccbuwhJxCSuGYxzkHMdRonL7mxwMCubo",
  "key35": "4mcG369k9yz5KKeVpgAWo8P9YpfTPhsHCri6QCWkHaY8HU5Z5zMo6ZVv8gWvfQi8iQ2XsMSikApneRrcXsPMvsNa",
  "key36": "Y8yvs1nPAg9SMuYq6ffcgNTmpeU2RFMSodmALmXuaMuK3i9nUjyvQyMhodaxn6xuf22GWnUSABiAmgn2QkH6cfW",
  "key37": "2VrNCoTvrS4cxmKWhGYLv62dpjTq5mdeos36Zvvc81ByK9C1X7V6jLhZcEfR4XCo9iUgAraUEvwJmE5CqH833ZeN",
  "key38": "3FwtayE997aA13GDTGHH4xtu4EPsLE93C2xqTvh8H1isM6ivbwhE2JD9GU8THqPosxKSjaTT4Q2LxFZjQSQ8ddSi",
  "key39": "2ww82RVQH2t8VArcAuEr5Y5V6fNQrsjmXub7agf6j4xPHMWX7o1eQ3DVmZbZajKG24FiCR7CG5i7nry96dtFqHMd"
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
