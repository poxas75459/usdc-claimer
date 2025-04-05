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
    "3m5LgKhbDVLcF6MreGfQkmFrjFauNbMQ9ckVc8fW5ShhjPS2YmudDvxcAE74od8J95Xn4WSYnTU7R8rYphDj4ih1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55zE7ojeh3wojKzZq6iwHx3NR2vz4erjaZJHoYoLnDDjidQvcW1Tz9oXrtYJZdJc66k22Un3FW3i45MG13ioUBZ9",
  "key1": "32eCYv9s9jsNpEnL5NawB88dYh9jyjppAHY85gKVfKkFwqSE17D5VQVEYGXJUJgyzoYLWoXvd8jiRNrBHbKuJxGt",
  "key2": "3DtnUHJztyufr8mQZbWTxhdURqUBqd8fV2tTwag3QcH6Udber3hxESLroZfoHHpUYHzandACXmhetKGjSi6vM86H",
  "key3": "5dUYsjzPuGV4YDuJhhktLLChJaouJKNNiMUjTayYsbPME2fu1x4KEpLw9tGRQf3oXEYav9TkSvvko3kAK7teZhzf",
  "key4": "2nx2iW2BjZEKjaEttnL6y61BcXy4it86HLiEGD2vLoPsvxDRRtuFjXJkGtzQcPsYfUnw6cyrwnF6ZtT3nUiy3K3m",
  "key5": "4kzifhPHY94cfm5Nzo7mbevLU6ckaZFp7WtQ1nwrXLkJBdzGpZ7Mmziqh9S7gcFB2vXryuXWefAbctyA6DRF5shB",
  "key6": "37V7jmDZ3imXszepxxDBtK9UoLVkXq2oMrQcaD6z8ZShZbcpa54ZJLf69dLFcsEzdKY52SqoW5vYmEo7ad1GpLtQ",
  "key7": "49ewQ1YdXdKbsDS7oZp7C6prXLnDvk1QdAr1wtuUJbFwB866CmskFexgAuYjTiFtwyty4ziys916ayvNTv9tdw5R",
  "key8": "4U3yP76xBMUJM1nHPbLkxkeb7fcEBPxpm1MZVxfoQ4NNgTyjmHX129De6B1sRGjgDGjHR6ZqjgFr8V41wdJ2XmRv",
  "key9": "2nSLeTnbxaVKKsZBueZsi7zJKDWGAncLfNE1LFQ1HGtH5Hw4XaqcE5pjanKrP6CKfMSo29cUsCvefjq21ydC2GNG",
  "key10": "xiwJNz2HDdcKYugtQ4rzcfmwnjCzLPB59XHnzFJQQ2Zr49GmSQiVvmif4YDd6D5Nq3qjHDUZ91RhY5GP999tMjB",
  "key11": "37mfLAJmxZaCUYF1CuHejcA69iBfXCuMxV8DSf3pxUPxAttPxPNEdLN3CCBafM7YVkbg9eATrG8MtCUPj2CH97Zb",
  "key12": "ouFGd9D7mUrARHkXF6Aoz4tE8jizCLXnuivGKxbkAjrpqMFftsJMN5Dif4JAZDpWQfTFigXLiSDURsSSbARRn7g",
  "key13": "4QiqFaKd8CA4CaSnvkNurN4hQ3BmZg8UCDKzyVbBuZJbWKM7SzNe2jCRAkUP6zAvKrnv8EYgYviafFm9NKAqAdSk",
  "key14": "2Gw7vc98Td17kaLbNA9UptzFQsTtKpmm78bRwzZSr3sZKAzuLpLGX4rAh3ooQQRiVR2HxNyyo3jedQUbhRFJMhJN",
  "key15": "3pVsu5oPFP4n1JrSzYkd9Pvc81vzxjEER6DdvbpnTS33sTbdhzb1yjPu9LbMzfpsDnBvjY7X4ynnx8tSvst8QByT",
  "key16": "3mGD4Nwq4c9cKsDVNfJqqQYkQvLsCzt5sFBDxwDsamcHfHAsLSKDvXyAtjdWEaYWAznu1scBKp2xz6GBRwoAgr3C",
  "key17": "KRuYJj9SQZbbkDcPLCmb1eX98L7TPZgea1jo44ADkim3kWgRiqbJMsxEzd6T4RXn7nqi3aWyrDGXgpnPnf6Tnwx",
  "key18": "oPz8Qt66RZJu2faXxW6488pfgBzzfpQ5YChveKmHbwW29TFET9U3fBY3aA1mndWwKWNHbLLwTkPJ8U8suUn3rSJ",
  "key19": "4PNPgHJXiAzxcJjXSKrimiDyBZLWhQnef6wWa9QBQZFKSDjBcyKgMe3u9iaDgKYFU4pHUMxYRSgfBjH75TBC4Hvo",
  "key20": "2XnpUCFefEFZtVA6nt1QnLzAzGhsiMJHmBi5jenMcaUPtee16wj5kDWvsXe27Vj9mrBDpTTPipUsn3eezeLYbXee",
  "key21": "3EiSRvGnRgjMcvKUVvmEQ7K4hBfSDWqMbZPWcbNM2WQuW7ammNCEG55QPKLYfz18ubLMrKkkmoCe9LfMBp1JbksP",
  "key22": "4UjfGBHTf7NPbYqxPoUyqb2NRYpWA5T2qJ7k7LZyCyygpkTnGVebeYjFF6rmrqt3uFipodWyU3yX4wNDZ2X1GDth",
  "key23": "2uH6JtPqzFcjLRCMBTbpdeZrhFzqbDZsqk7mPtikifqZ6Z9MJbuDFxDLKd92cw8fz3JqjvWvCpd8D11h2raWsgfi",
  "key24": "43u9xhsKDE2TFu7wjMT4oWpGduiXqEj3FVJZhyAPDBXZ9Jpg31E8TxjTTn6fEKbN3KMcLsDG8Bdnu8Aw7naE1eyZ",
  "key25": "6AyXCPXuZnwcXWC2p6TGoJPZzZwFcadQZjQBVY4zLRHPapT7qG5ACpbN9kTXm25Fg5srDawj93Ai8DkGotKJgyk",
  "key26": "5BL4RWEWj4Td6MpocEogG4VEUCm4qb9GY61mQnZm5LJyyRvAz6AEKqCzdk5ua2jpFQUadfVLQR2THQf4xCXf3RJu",
  "key27": "4tAd5Kk8BMBr6Q2E1EgafBwisaVHnZbD86TAEWsUjbbLiZQGcLZaFLkhkiZoH7taskBttP84UFGrf6Q8jJd9TPTX",
  "key28": "2GR8KRqAWtakL2eFv1NGDdCHbjy71UBL8ihtPTZYgk5JDypd9sNnLE4GLNscf2CYvGN2XmMUnmeUsryzceYLoSDF",
  "key29": "2rE5NocWPicykm3Yduc7ujaih2gPUXX8f5sDtcUq6DHER1L3TaNq3udx1JQN1ebPaEkY95G2nxDkNRcAnJw3SDFT",
  "key30": "4AjKQ1QAJ8tKV16hs6PGLGo5C56EDcTSKrgkdqARUr3SFhMmMzikt8Qm6H6Mwicv49mQbcAffhyqRA5LGg5d4yd7",
  "key31": "5HBzUXDWV91oKvDUQp4beR2P5NjxCBPANoSr53jZGAr89nm4yadzwnTkD8UXNrR3ETw11f43pB2bDhwU8RZop9vW",
  "key32": "84M81ppnirqiPNwFF143d4mBNjH7HdjFVJaRm9UadCqnkPbnm87pMnpZr3dTWE1hJZbHLw76a6Bh7qZrdiZLmNk",
  "key33": "5TfMka69gGHKtkdWfbbkVT3HZK39u8NLzQXECdk8Cn2VAhDQUJvZsMCjK7xEfByZFEbtSpVry5EX7hCgVJbKJnQt",
  "key34": "2NFqpxVrU1H1avxLqvgtHj67QtHcSnydoeUEMqvZ95zfJ5Za554wNkkAzrzujhUTFNsQKKziPYa7m9WeRHborQU3",
  "key35": "3DU1LAtgdeQA4cRTaiH9KM2Zm9me3vaPoZ1k2nVcRQMmvRw8KpbPPGmZLhBmBynBGXX67jBKutc5RfVqVMesdSe1",
  "key36": "4hJ1UQdaYro7Sk9FPoSPLQ6e6KrfbLuoaNtsBDT2neUcD2sPU1SDAAPY2mr2unAuvbKvpJ8h2HucMaiinp9JqSuj",
  "key37": "3Bx5Q7PubVBS1FJhaHQwekVngsvMzeqspWEPzr9mAHxYVLJ2QiTCERUvDGSBqrAqEt3sqsZBQgCeKabbaj6Hn2Mk",
  "key38": "3F8Hs3QbD2QYKbaQYvzhjs1dBLsbi3Bfxkuw4fSyM5Nc7Vqx5u8NV6oy7EPLpVaAPbGo5trp7rk2ypVBV25f7yxb",
  "key39": "5MX2RD3xnTGUJ85qvi3RtXkxmER6ZaTu4Zyr66UD3JpmjDigG2Rt5NoBePYiWHNSot5uffYXTiupMqrqtWRhqRMe",
  "key40": "3Wqkc2EcFpc7FFu8hsfxejNSExiDuLCJYCSvLtm4wdkbhbjDFL8cgY6SqweZYK7TWNmi7fu2fKuhBUFB8zivNjAq",
  "key41": "4atcTihUb7dA77eCXwyunKGPkKoHjx6e6jCF6VpBAH3aHU5Nk9kxpcUNfJWE2oxCuvHCwoEqcUqCehEdmMTBYkUe",
  "key42": "3f6dpr5WyX9ciVpa7dpwDa9tgCs16f2et4RNJEP1bpiZiEsbHv46LeBfCafcNffuamJvx8M1NVL9LBVdhphc7BF9",
  "key43": "3oTCCDdxjQwNJztUMwuoCLZGrLGiwaQQRnx2i3AgXaLiJjDzvBjwSQJ79XxhgWTZCrWGetsKTrPok1noA3vY63oa",
  "key44": "4JSgB49Gmh2RC2G9eKgQ6nrkuS6ynQLZeAizDMahG8P47N5cWsW9etAxgvhvE4cgDhNZGP9tUUe2VEXk6rqk7aSx"
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
