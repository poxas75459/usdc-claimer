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
    "4R8gahH5kLCNuugmnAr5uFFMtbjkjXfTdg8J4u4g36enxnKSKQpv4m5JJuLrHMBKMJuCWdUYcLmeoq9JQ9C9eZMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t6s3hfaphVqWF2eEHGhDHzT82RWA3XJAC79FZR9CmJRwwEGZt8royxszRSGJxucyeZ7tJSFm9sWpDu7xjo3ea8a",
  "key1": "4ajzzZ52uR1fgPL1SPeuZbxjiuFhvXuBLKBJBNctFCRLN8YXbBSF1G8An2jdWM1VZCzqQ56RfXT12U9Ecsz9XCGC",
  "key2": "83UBkWo8JDQLKn5SLgk6d7eUMpsZWHA5dfLCvjUyWHrqE7ckbUVn4DFyU1c3NyYY1Yda6nzSvSoMuRj8SULJLCT",
  "key3": "26o4ALeG7aqT8nxNLan8UtQoAHZSKaoWE4YovoFfmZDm7SpkKU9M7mADTC5E5h4H8tMT2YWzSQRmCQ9ZVCn45WrQ",
  "key4": "2dTYPU3tHMrHm6TjC7eGBHokQ3VKL8CNJkocau98UGWR2KecffC2RjGwGx4kj3yNHZKZzQKkenvcWpjHaj8a8p5s",
  "key5": "umEpV4J4UdV5bjDfC6cskGUkGChkFs7JWVbRUHihe7PHXjiKWnMKinDeB8Erc2xYinATmuhy9zFxrUst8tzYjgk",
  "key6": "hWMX3c7KATEFundsAP5zy6T7NSL8syrd4ncVxZ7B2rydiSxKGGZDLincFwe7PwjRHprrQ7ieAr7gzjaawnGSsFw",
  "key7": "3mvGuny2AvhM7WfaB8gLwHHDnguhyqvtafRrGWpaJBmxc9vjyPTfwXvcvJ3MCZdb4WWeM53Bt5hxjbv4gxpzQfKD",
  "key8": "5FvxuyqcrhZQxnurLVhFNEHVXX9RXvVo1swGanQD3zpfmd3gGwDo8h1FrFnkrr94PRftKYA8CvG4Ew4hVZV4eAwC",
  "key9": "6483XxAUfZbuWMA15RWbbfFjBBuZ8fTFBzqvQBVpn4uW3YhMuMNCJjfdndbsBbjBxr7HFmWww26TdqKBAz94EF1o",
  "key10": "pY5ZLvHfYtq2JXHSiCZzcC3MMTgDiTXTpeH4bu92ACpDcEfKwPQAr6CHNLxZCwVTaAmuz52gBSfMwVagPdediYb",
  "key11": "36MsatdtD7qkYgkU7v8PQ9HiX7hVjFRnuvxNqrwtLEBeqRow68oCf6CLnm3rSLQR1fxzRhTN3NU2wBFgJks9wuLZ",
  "key12": "4jUKJ3ZFJTEnL4YDZRYFGXGLpUQtjcFcbzJykefvBCo2cGd5NA3D41VBQ2YcDu9QXXRHBAAo3LG8RveK5th6CvDE",
  "key13": "3ZbwJ1jRwVW8GuAVuBWC9qBWdWxccqCTjipiQE2CS3ULpTkxkZYUc4VHzmkmCrQiSr8d2Pk6aLn9Ltq7ZMZTHEjr",
  "key14": "4LCAKdufZZgssCkZnKcfGChUgJideSRg6cRfwKVJ6LNHXatvqz1dAomebgC9vhu39hZF8FziYnUt4nZyJ7AffeCV",
  "key15": "2VoX9hL26GvSXhHAaWkcbPZqWZ464QB3BJMsxDrCVCNHMG9DtHVhX4HDzRbN8DhPYAKkaPeGyAaQp2xwgtrXNTVf",
  "key16": "5NdmumdRLaTKhpUb2SijmRUbvTpLQzxMtrGTkcUrb1zVTxVZ1hX2dC7b5k3YYpqAiSU4fjprhnWozypSL1fb4w8t",
  "key17": "4HfGKt6xDvCqE8kwfLvHBVNeAP3kjCFYerKm2hPsRaxEN7qC3bwCND8p5UGdGzvA5iDqbQo227DVycjssNNqwtrH",
  "key18": "2nkLx7UM6gXiLa6R4kC7SLrqYyt4pDCkSw3eSzKKcb3e2Cu1oqHPLHADkn68oxRGCyMzVwPD9pcKiyKboWUWS9hK",
  "key19": "2uV13Ac6siooAKpZTur8mNd9ZZ8iPasDUpZFNTJrYBv1Ry9B4FiSfHFmrgv782rufrW1UQqLa9DTYK1SRAptim6r",
  "key20": "4R4LxTEokCRLxrorJYjdZyrG6VFK8BkJ7AT3hPBwC5z8KTdN2dcBXjuJxbpEgTznQm6rMBPEDvsefxE9M1WGv5Lp",
  "key21": "3Mte18VZ6Czcba7pR6qNRivGj2AbnPgzd2JH9iM1BUq1fYvzdPNjkJCn25Dc7ZhRkpMgTMF1u6fGeGn4Qr3pcZ9d",
  "key22": "3MhdYuPv2GFtzUcFfdR6eXbhpJ8pUKsCX5J83bpT5GUaKRgq1fBNkU4sNyZG2bNq7VKinqA3Y5NCXV8rzg1GeSQF",
  "key23": "Ja4HP3XJRayCaXZCKLdRhBanSjMkVMKimeX5ECfiUtJMRJwYh26V88mYMsGYkEqPr1A7iFFDCDxVRjoTSXWEZ75",
  "key24": "4WWqGzCbRkrvyEFkqzkhrsC6y8RXpMeWQnNEKWrDLuA1i9jBvH2JN3swxRAfcpAxTfQrCfX9ap23sCvt1iBo9Hi1",
  "key25": "49AjUjMHeN4Co3dArqjKgFAvU1NQm4u8YquBodKTnygoyF6ygH1sh5mYjFWq3mgr7ebADoArqYA7M7p2BwSjE4m1",
  "key26": "kLiXVsLn95GjeEiLFdARS2jE1R9ma7VfN9Z2tq1DysBXjKvxJ2FHrZ5X36L8Kkcu3m5329K91AUVGH6g7qhACLM",
  "key27": "3PgHU2MRwRw4VVEWJCkx7uNfQMmDn485MTvgV1y6YPesqJzFoWpw9Q8ykYfUpHdetwfKJzLwC34wHqnsNkL5JhDo",
  "key28": "26VLWyzMhFwnewsByVr5YFVotGHWQUpvtvapURxKN2ays7PSEbuQbLuNiMPuoUpKNH5xdByMMm3L27y1sANDe9dc",
  "key29": "3nj1pbhYb7CJGjuy48tmM28ESQgm2jzibADd7YUNEvoPv44GPbMwhbSNrgsgF5A3gmw5dK3Cf2GN3f9vFdQtnfzi",
  "key30": "5BfnzypR9L2Uk28FSWoF9MydbRHgA7e666MAk1nQqSD5QXTd7Q8Ap9jZTU1AYJnb2ViAHr6kdqaon2T2W8qeaFyi",
  "key31": "2ixT1ji99RG1CXMRNCUTbrFrTeXSJqoDDTdf8kttagRwDXYz73XAW54ZGL5NQR4vBZ1HE4nN8kbY3YRavL4HX6rm",
  "key32": "4KWY4rsibvz6pUGNoGAbTHYr7u5qqXjomB5wvq99rNvkjo8Mw4dZKoMmFmkkDN93NStfdr88NpFvDXacmdBMgFrt",
  "key33": "fqW12fSRTittf7PhisCCKor3SUayCmri6LCGyCLJx7Td9mZoJodsjmcgMvzx2aNjXxkWQ1G2wH3jTBPjGskkrjY",
  "key34": "3xFNtPMaceynKrNgCNWaUn7FGewTuX7J2ZKoiVBdNh43f8UAaNxXzHboweYFQFCyCEMB9RJFkkaK9hyMfVBGJ8g1",
  "key35": "kyeStfyZHdAMnoJsuFZo2ByZ4H7aKjLHBzazikgumkPb1WaGLvC1awd3QVn2qh4d3wRH6a4ZkXt8PBxecNGovNS",
  "key36": "obd8hy8WaGv5kPr2PKaEJvz3AcLQBQwissWbV8uwH4buyH41UMtxW2uD1ukuJYbRf97mWNMYLFv7MpBxAJRdNVJ",
  "key37": "3MRSxKNh1jyW9jqYnfEnMwtY6vkNYCBKNETMmaUN25X9Kz7VjxfZdJc3ftL9e6HJo6ea4xguprbLUJ9eB4SnY8cP",
  "key38": "2CBw482qSgAgh4SnQyT3r8ZHKx7tVaAdp4HZrTahZk6SYTiNaigvydjjLfJgxkcjszktT7KbsFzRnVvwaMArbRHS",
  "key39": "27WpLJr4BAssBegskidT6F9cuQzpaZmDddwtmF3VYEgYT65hvH2EA4enSjD4c9noyAjqPz1hhu9PYSfJnjHijJVr",
  "key40": "3tErWaQyX4UGBpEffjZG2vLrmPcdva9H4Hg1BFZMnSFLcJjFTKKJwmajvJEKXTgtX9HQRBM4x1BkCf5mEAG6ofRT",
  "key41": "SU6Aj9XEGrWbtiBaS2NbB4iY7zeRDhgFzQ59Vqy4E5RyAu9rTqpPTrETuWp6drQsbJM9TAzo3Lt2jZXMHEukbTk",
  "key42": "5ZqiMBo9Ctq3QjYTm4t1TL3vSxj196F79i9nB3upqCEtfZQMLxU2pYhLWaWd7h3gaU5XLtkVYesooV2tr9Fccb3k"
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
