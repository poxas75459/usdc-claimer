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
    "gqWyu87TEQGJKUSRUQ3VdFv9rzWd1vegkueoPu8d5kpNRHBRYYEpSDNsSDzfzV7fbY5aYYMTo2osb2Sp1pE4VyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CtLmkWsurPbfq2TJZMkgBVXbtc7CmCkj1anuASpnhrF7CKPsK65QgErWVwuumZHjE91ELknfJzzBxqQquqSNJ2k",
  "key1": "67A4c98LMMmUoCGVkob8BWHcSJT7DRgUKQNuJxyV2K7UZDHAus2KmMiVGqzCyRfWm8H6osw6PuuQxmnzPXLVbSjs",
  "key2": "4vXbHkkTpPkU8AgSjXF8gjN5s5gXoWsupBn1YD74yJcgcUCWd2HDWTB7ZuBfV5J5RJmc7ARyehkvtYeG6MYC8H2o",
  "key3": "2FY5YiQoZcWQMs7pw2BLZyddRsrQoq3CETrN9a3gZbKANASDXSzmNAN7hP7d6Dxr7XUyrYmKAj8R4LG3xX9Qaesi",
  "key4": "4vP3zNZHZvbn9Bgz3YVUiwaNboMm7aZURvmvvWnsfyKBcotWHgv4JPrkEtqetcYfPthe3i1czTLWr2biSVun5CRB",
  "key5": "2x1iNrXbHG4zViLnntCS9f1ctPWSZos1dQovnRjKuMctGtEG1oZcfiDXVe6BndsT695TP4LNKYKMkraUD5FdNXEj",
  "key6": "sGFShTWtgt9TMciDJ1LyhKdLoEnjXW4LdsTVuLTUo6SRkNEdnxHUGQzfyRQCEEEE3vYYwLusHmZb1guEzVbjzXg",
  "key7": "dqxVej24GADeN7bGfkbaY56FQ71fe4ZDJGjJRMDBu521QuAiTVWfZZq3fHW5HtTM8n3GCoxjRwD7gQN6xAQnjWm",
  "key8": "5BWFGSFGifbMoTS8t9URYwUYTrvNfyNdygVNHyDoA8cV8r42Poc3S7yHx1nLNcWwaJbGAUT8fZnRnyAdiiNmMTDQ",
  "key9": "5N2mh9wPKirNHQjtVALhjNVGH2n2A2uJV8zUEQcVSamZx2nwGqL9vLWHXA8W2z7NmCCFvmPERYu7ywfkgFv8Q6Hh",
  "key10": "2VtozcZihmYrsqsC81jEybbuvs6d9wuptzZK8zFUJtBGKyaDZBgeq6LdXynsex6YPp1NXrQahfc1DHPs782dnDYr",
  "key11": "TwauuacTni7aGzapK4Gq7kpQtPMyJcKJ141EkJM3MeooLPJmEpvrDo7Hyv8th1eDLDaXQ4YvmHMxTazXfxnCWjy",
  "key12": "3SnK4cvSswd9PNHAm2WasHppQzi1Bm9sErVV5W28aNvgcAGf9GF6afpC7ncd1U3WFo9FmKe7PXhenmx5mh9NAkc",
  "key13": "g2QhiwySKZaC8ncpCzFHkyMvm1FmU8fjXFDaEinEGPURxvN18V5tPKErchLiqHms8uquonwe47jdrPZSseFySoj",
  "key14": "2skn6vd4g9u4akSFa7jryCbVeis6jUYGUqqY6Z81c1VetRqkm1BFnoDhqdasvrD1CoMzR9AA7N9ipgQiuUZUojvr",
  "key15": "2sPU3hk66RNCQXeLbmeTcGGm8XcfsftE9x14vBHmokC1W8Y3D8CyQdJSsxZZhpZdcsxqBnV36TizgGUZDNmSVrTY",
  "key16": "5HA7WdcUXNwCQs9ByD9MeaArARFSqhywAA1aqhezD9xQjXqjFsMHU3bSLXs3rvMcDq6DNYjbL9M33FKrqsSybdpn",
  "key17": "2E8hwcM8AN98YMRe2xtxBa6Fniiv4xjGrUnymRq4AiaC3CNxAZK2AhdS2w9maxQyLh1oeC6TokJaQBe2GpGEDEQK",
  "key18": "3gBe2jHVvdNrXxM2ijibUz313uH8TmtqytfqeXdoXd3msm32ezMqen5SkHZQxspGrojYQFRaycNfcBuxLhJMXEwB",
  "key19": "3H2XhsfaRFcs6T6siu1CbsCKjNbA1GxXBiuLcQW5GsQ7fDoa2JKbTN4k6Pkwwsu8bvsCMH13RgVn97LCu32CZ1Yr",
  "key20": "5uHwfsJ7wU9DHD9BMKT31mgbkuyadatG13UGmGq63cP6uXMxoQjCcdYAVWagPeNiZMXk5xPtYPVhgz33MiaRDVAQ",
  "key21": "2HM3BdkBQtnGHcgpDhYumGLvjwzxGt3FGW2FzdfCje7TU9eF8mkgLf55ZCqL6tiSfoKB5vTE55x5s2PWEdudLWZv",
  "key22": "2GwwvzXuTfDAh3EMQJ6FQoQ2QqYdTBAK1WeDHQEhZJNUFmuHdNZ4WoHoEzYKAXq92j8Qk5fvGXQ5qHBy3SvnR7VL",
  "key23": "2tAM8QhoxBsfSuqQQm13P9bxE2MkGRQd73Z7xNeoGkDpN6CwwBqSJ19hUtxSrrZmQw8oiVSKFVyB6KivxXKVHFFP",
  "key24": "5R36hcJkA738AwyGKEXdErYnS3Pz7i1pX2FNfDGqcrvr7SA756BPF5doVNVTUWCQzab4RNP7oP2EMJhEir9RsBAG",
  "key25": "2yZjHMWLSwMujYySH4huEaiBU8ReRLP6ot1benotMtSKcw623P2kidqaTSPFJnYHHfcvpa88Q896XWv9u7gYX2UR",
  "key26": "4UYZohg4iYoZzvbWSLNjMuY6BoQyuKgqpV8ss25R45YXeoYFpBVcz2SQKjHitqCtfkjfcEcuf3hgMG7urkg7pVB2",
  "key27": "3D3q4GoCtxp17srmVmVwmnQu9DagYBhWNak7D38tLwns3GP5W5B487BVZUPTLizMxxMsmeGC8Tv3ZC1Zmpw49kHQ",
  "key28": "iuvkC69oJyUDoPjfPuC4xKAWcUd3ADBmSUX8mXm2vnaEX5oLb4B81QX3yHRVvAbSQ3X4eqpNpfdc7EfrweuZVdA",
  "key29": "5uKv5gHXCuqF5XRE2TDaCt9JftHNi6CPMp3dUUn6cjkEnPgUps6vzk1TNqYiznPXfZsjLitXPxviBYXEri5nPUza",
  "key30": "5Z96iPhQ1n6kNW7r12muiTWnK9p1tYuCrWEcruTvtQLEScUntNQwY8HhHASJ5KQ28PPjiukra8mduMDsUgu7vRZM",
  "key31": "21zFiD5hamXJFWbtQVo3nAcuiuBrDyEy3pTg4FRbqmuqNJM5ZvPnhcny2HCbGvCGBcoB9zSpfvKFB2ZKoTLNLGAK",
  "key32": "5dSAyq3n4ZjGfQ5S76hJXF4JCN8XxMs8uxmcRUftdaW5ke7T6X6nb6CvL4gEtugT91mEE4biD79n6sqLgfRzmpXE",
  "key33": "2N9bGcuF5bpgG7NWcVrNv6sDehD4ZRtKFWZ7NH2wZuck3QKGJVWGdWKBKCvVvyT1gntgRvFLBmDqrahpkH9xthPn",
  "key34": "2jkDz1RRfhGZ86sw9TUdrq9AhgiEYNHp2KQkJMHqEh8CRes1bQVARBUyKmT2GWNbp2jCQvdPvdjJi47vsNZweuHS",
  "key35": "4quzvqMNLTYWb46Vr7Y4D7DxkTg92MFZrrGb5GpHC7ufStPXxnCi4VLk3cBzv9XBgHEeHUkPmpMbqQCNofJndZQR",
  "key36": "3s7iJfemYuek5PcLzDWN5P9PobeTa9d41LmEv3cyfYuUNrsuEbqkDtcaDWGwGCvE52HnhRnc6SCFV483oRh7bqeL",
  "key37": "55PGggrd6oseNH7b2NkCWc2hGbauPsGmMuV1mH6mdEoWEZRwb9PLqoKbJm3yQUp6zWFwjmGmBET9YJktF3UtPko8",
  "key38": "3ThapkL5C37SDTif4Xu8ENTvJxcHh2rXcy1qLCoeamnreSjrb9eEhZGF2aKdwxwTbPfgCMvtwbQGU4HdSq1txEYi",
  "key39": "22WJLo1HeQxAgK8ZsaGxdGHTuors2CEGfXEbPAt1RtQUdAWnaZcyujtgjToEwRvuBaRCAW7ivPb8g9f3BxjGVxpC",
  "key40": "3cSP3m6EGUbCUxQLrLy9KHU5pLPXUCcBYWaWxmktaHwYpLXPW3gJqqLkQDfduWck8km5y1ernZUAopZhrNVgF4Mi",
  "key41": "2iZn3EiqkHrwNBwGBN2g9ELzsHD7PWYrQqgbFZcrtypibwKhBPfHSEN5vCDiotjrRQkJWUwRyFKMEjbBXrBe9aF7",
  "key42": "4wb71kUGxMaDJ7HoVAwLVqMB8tfet7K8AjA43WWuzaJzHzSeshNiyupX9ibef1s4EodvgWUDQAiPTLSwUYzkQRLb",
  "key43": "395kLSvWkFk5pNVKtgcQPRSHp72NdJxHyvy8w12dZ5ybbENCaFrpxJaLPNgE5uMsQiLBdD6jtJhRdRsNQA35dAm8",
  "key44": "2tKpHWzxgLHbhWZHDsbF5CWVV87Xcb9FsWwafqpyT2rrZuS7cRLR9xentaeeXGqa7idcunuSwiWqZ7LHJFkmRkVb",
  "key45": "4R1DznMTrCXmsurstikW4worx9cpaXqBAi7WKz9aT8r3jJYNgKpRQtmAf7GmKcwVCB8P7UWuekF94b6td9Qsrt3m",
  "key46": "5TZNcygjzXHgvinErhENThxw9xQevW3j5Zh5PEVG1ZiLGWeiTpVWpUuVC6aZnnzpVLgPGxoRxF3z7kWqioK4GAcB",
  "key47": "3tknciDRymtKcNipEUv8abR7v7gRs2EoNpyt6eoRw1oqGg3WvFix31oPy8b1ELYqnR1usJPSADPrvfPktrwjRcif"
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
