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
    "3CCdKkmEFM5AR1S2iPAEaXLVb22H1nw6Nm8zRyG6RKm3Jrbc1HuxqYoZCbCeD3nZ7br2QyKr3msgxfYYGfCrUgWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MH4UCUXAdWcbH9Kvd3NCpuCdHqTsdSRRBeqZoFjEHoYLhGo4pNwMVaDJKmgQJcYHqGhyukGXDueXEJAbKNZ1rBv",
  "key1": "42PLPkdBX29U6h9SzwAUagZ1kjvoaUgURfmkQUA487LQjC2cYMYFekQnsPFV9eE2BCEedgCGuoXBMqUFWtiLzdcu",
  "key2": "2YX4EMajCZ19U8tgRBrDswjUGbvuetw1S2DNfDW6z6oqbBno6qfjKViuj5KVGo1kbX3U2VBHGgSfzxqG2MgFTXjz",
  "key3": "aqm6HvWFdmzze9P8LwAknGhre6PCjiYMzF9ENbpVvhUcQ5Y3rnW1dC5TZKPiL6tLaE7xi9hZGyM4s4Dpa4kV3gf",
  "key4": "2roRA3DseqYofvQTftEMVMGwTaiBrxdjdoYeVd57wBmp7fBLdjZ15MuaRKVqcCqwDiE3xYAExAN3J7y89aSyNJjV",
  "key5": "5v4gz9c8cG5zXa5ov5RNWueLef53ii4mYx38MGPQMzDor4ianMC9ViCtfuYGUrba5bXEri1kTDQbYg6hWaD7xdyQ",
  "key6": "3r8KW6TvVVCDXDh6CUxzsCJKMW7uEYMX6LxFEBnhBNvCPfP2b9vC3BBiJkLJjZpUwUCNiM3keWj5Q25rru9x1cw8",
  "key7": "3efXwyHhs1zfKbRjkU389tQPsA4sXui8LomabwCTV7QhRQ8QNKJXUmh4zb9zS3Dx7BiaXFt1oAh7TN4PfS7htUNm",
  "key8": "4ZAocbWAkwS4hhp4Di6TuT5FvYjbKe4xbpqy99ctisoD5m876bvMcRxoU7QnG4u7aoVyn9MoWvyrDPWcVN3mxgp1",
  "key9": "3pVQyMLP7kSVZYYYnLZpPsf7caNexEMXsxrmZuM8iteoSzDD1xXFGPjLuHqHrzm2xoNrXLByN2vvv8DnpzRmAVse",
  "key10": "4hBSkGgo3RosGyKrExmjZi4uq57AHws8YgWQ88Qg8nzYyTK9W75RSsom1LvyQMJsS4aqWhnvPcoTsmBp6QE4i5GE",
  "key11": "3hFyGvNVbFQZiGop8gnqNCSMukSikuq2Pw8H5uqAM6Lr623xuvaogJZb52vy8EzeK8Xo5btiadcT4LrhGE4jbJHX",
  "key12": "4H7yMg9xcG5a3CNov8eDrogpnTLfPQ6sKKR5QrnAngeDNTHHLp1yBfbQrUTPqNttf2B3if7GenmVtLL4aWytTpMD",
  "key13": "499QnDHcpbF4FzdgYKkjF2gAroW7iCDru6mQ7is5xeQZXXVEo38mjuznWERS3KeHP4RcQvCxs3PmFtvC2mBJtwHL",
  "key14": "4buaMvGFmYoik22qWJKgJDtzRJvDhX7LhpnMht2bGGmoo4jtpxaBuNiurM172J8wtBkx3VzNA1QoLwj2c4Hrj89a",
  "key15": "3yzo9iNWe3WkEDusUBZncqhv3rSRYRGKVFQz8dNGAE51es96sGwYd63sBkMqeKAgPbjF9bLA5MrWXV5d3uX7XfF5",
  "key16": "2zGBgNjYfsw34crmYF8Y74meu7LqmQ8qkYXE84o6nFtyZjQEXQv1bQUbt8FBazvonmbiJ9e4bB1aQzfcEZT2uB5S",
  "key17": "jyrEFXcZSMXWLX31dZZwPw5NAUu2KMuVGnNrG6GmSTTjeiBMwLYwvEfxvGNLqGwmpr1FmCb2A17AaakqBwh72Yx",
  "key18": "5tbP86RxwB87ULFVB6H7AMHE9jABMdUmyzR9mk55v6XLAiye9Sh9RLd6LJzySLSMwzZ7nkT5s9xmi8syMuo4N6dn",
  "key19": "Wd789nKfvcdkUVRP1UtwiAaUMZGSkjaYTw6sDbqLyLL74d5WBXusyJ3aoWP3BE8CyLRCjzBTJ9a1V9ysvoGzzUz",
  "key20": "2Z4GBtJ4eReFC8vWVWKJ899CqV4fFbJU7fNrp47eMtsUFv4zBVQu9oCuFqiiCJH7ZMuH7QgtstVFSSJMa9ki2h4",
  "key21": "3FmrcCxajNwDm7QAHxCaF1qtdRHwG2pzh13iYpiDrVGV2xKPBhbNqzaZ2Ufy5KW2FstFeMCYp7G7vqrHXcet11tT",
  "key22": "4ki1y5Gz7g7kfzYnsAoKTkRAjmx6ujTKvKhvg4546Aegzj6xGgypy52n7X5D5Uy5Pv5tafT3q74NLQ361HV64Lch",
  "key23": "5wNkhe47n8QYcFQanJJ2K3WswzurcgyY7CM7n7tg6e6jcJTKT71F8JVwzWKR9gn8GaEzSefZeFZDs7Rdux5XmPFh",
  "key24": "ia9ZqetMp7zsj7FHBsUKkCHGq2nENCqdomK9Pu3w5TLZh2QMNufaS3dxtbSBrkwST6ySPQoa9U4LCHkaLijYp4F",
  "key25": "4dXDhDHXajpog35pjyNKsYYVh7JPfiBsWDZyw69hhi2mYTqVxtR2NnBZiDpi3wWfPrgA9asntKd5PTMDD8wQQz6j",
  "key26": "21u3gTST8ciq1jPdRC3v2S9xmhByPz5hmTKAPcXSXiBVHJRYHo5C6ZttQcLAiLLkAkeTcXAEceyVx7mCodt5yPL7",
  "key27": "4J4yudgtWM46WB7Ppy7rimaYynqLwXF2LX4qjLGS7ptzpSEwpEuAY5vTY2euXGxCrxFL9V2kgkQdFHZyW9T1srrc",
  "key28": "4xhrMWFqCZced9PxxtHcJrhwpk95ju6UauLjp9RrH3dKkwDPY4x2NQVCjCZXBQd9VRNrFLAw7mHdDwtr9yhQr3yX",
  "key29": "j5io9GLNecW2L34NGC3Km9dmVUUWpzi26nAaKQEKnb8vVHTfYRYJEiF8J8dkKMUEGoJtZcBjSXtrni7Z3pBKfEP",
  "key30": "2gY2ADaPG4MSkTZy3RqVYBx2yNew8mjMzj44Fw8vekHsX6yCLfSD7rFqqHhd2udXogGL8rCg7MMu5sT4i7F96c7t",
  "key31": "3h6WZ7M6QhzZddM6D44RR2AgKtb7FrF14JBzp6znoKeb6Ws3iAFf7R4tky95TKTN1VPr4LdbdUvVPhfqCjLmuuDt",
  "key32": "5rbTP6ZbXgFZFE4Tx9khuHno7gWmuBvcvXpuq6HozuEMFBnfpAsZaV2Lr4Ri56M89bfCQVRrncFNujkyiNCKZngn",
  "key33": "16V9v9zUT2riLAJhGokHh5hWRNz6F6WsuPPWGF8TwaREVJK9huKdCWfV8RRJkrbCU7YqYktsGNH574RAsbpGUqd",
  "key34": "3QJs33jbuh5o7qhAwwjeMQZbmj6JbP4GZyapDBm3fgoat2vzSQd6kXcqDhozc2zgVTBPwLtVaPjmS3jpMUosGaS6",
  "key35": "4Fhm8ZVdMzGWBfpqWeNahyauoCfHXUCsZo8Ra1uSHcaPhmuCysN3MMm7qarR984s8mSH9oDv3zZW9s2bkYqQLEtV",
  "key36": "2A14fbMcVW48AyyfJnPyLMXTs2veAaVRGqdsUXYgfuRA5EasG8TWkEibFjJiLqKgWQcdvEng7Te9qBmxpPmUBJun",
  "key37": "qPoE1C4t79ggXiNhCgVFs77n4fi9iwQSm5cXL49v3B92sfnHyYynZQUeJXoDbZTdKrbP3Z2gUitjEpKf6e6Exjo",
  "key38": "5hg6gXRDs7dVJyxiToK4UpRNqvEoB78fmoCCSJMmjes6ghHUPjzZAH7HFhNiQ3RzFtLgpEpfbvtcnEFvC4Uw6j3c",
  "key39": "3p4ixKxJs8UGfGLabdsGaDr2FD1zKhrFZeHnW5NtMQMTydmi9TFx3Eei9jWii79DtC429Cq7PuFpkNHhwaHwtkTM",
  "key40": "44BJc2RdmWfqwf4NdpbQJgNvQuh9hMYEYwhNGmy656dzBBK1GtHk3KT1tf24pq15JWmzDu9VkvPdCL4tvyTqcL96",
  "key41": "3J1iKYA3zAbE7ZrFJhFAnrQarQ8sQjnFi1QxnvkHACYTSsgo6MEJ5vGVPtJEGFMPpryeMoR4iWqEUqiMffnLiwLa",
  "key42": "33ZU8pxSA4dottjxhWuCrYvvTP4jpNBdPE4DzqYqoHvSniTPbphGdwMc3CrJnsJEcMc4iK9ZvGFh6be757wyvcyh",
  "key43": "5gQ7M9rqFSyBYwX6v9sofyxyxumiMJ2D6hudyF2RgQU545HK4cPtXh2DRTSc7EVukRHtvekxUTnw46my8pApjaPb"
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
