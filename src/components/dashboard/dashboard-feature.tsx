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
    "5SP85PGSkEtx9d2fpsBipVCd9fRnK9cVZJiPi8zFAxrmo83TqL2jH4rWaKzBE92niC9ychhySNLacM2H8xWQAmj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1LfKWrY9YoxctHPE5K93Kqi4Dc263Ac38aMuLyK5j5MmA2BvtaHR6z5N36Ya8TxDB1vyqKwuKvrWWdNroh77Kky",
  "key1": "JMyRTXKGNeaqmYzsKMA4MFsJyjRgi5p5cHqfsJr261p766WzLa4poXLn4CWcxRTfBRNMSmhX8VB6ab5aEkkBsjk",
  "key2": "2A6SBNkFvo356LeFrLVRwGZ6LfUMvQpx48HsN2ymQtm5KwApXeLg4c3shy5roNWf138zWqTZ7buK93SaUXidpeGE",
  "key3": "4xJvjxiVWv5FaZCE3MpTU7zQwCxmg6QMB4VCAiTVheSbDDB9vcXS82U5cuiz2zf5PLaAPBHFDt5APHLK6qZ9Be5C",
  "key4": "qoU1KcxxhNiUt6LRJn3XLJR6xE1L798xm6uLFcvkmrWif87mERfmVBUgFegdUk4yz5UoRUyfdCa4JPe4gDaFYjD",
  "key5": "CXSZV3JeJkcv6rSJ2maHj7X6kadKKMFPNG5tx5mDn5gPt715ptswPJEZvQbfa5U5uf5o92cQSSrUG8xEg6RRLNj",
  "key6": "2zFqk6MvadzgUJNkcHtyBC5pVKV1v9SuRmm1BRqqPY7ZHF7md43U7EeA7xKrDbfHiS1yZHt5wgmVY5c27Bosf4r6",
  "key7": "5EWnTH13p9UZNYMNPAYqVd84K3dc47DPvnokqytYaxRNmZoFtpFpCudw6ShdoyU8DrJFtjUEathyMhWugL5xT76D",
  "key8": "3P6pgwgDzPpU17Rkwiv2BNFAJnoYurV86XpQgevzkXwQT48CoA2kmUnHHBDHwXGwu4JbmGoqSo4rJHTPLTuvhprM",
  "key9": "2wvHJpjqwn2X1D5PH4eyq25NEcoZEqhVsQtAzskupcbCYhDEmEfrSMUHpFZ94b4U8Ny77RJvdq2EpKo87igqtUxL",
  "key10": "5eN7igyRuhp3nH2LBasBkq6MZVC8e6ttGYs4Qm6MVZ2nJ1gfLD6L4ythXdgm9adouSfPTxWrfKGHtGJwmA7aSLam",
  "key11": "2kjD3NEie3F1bDzXiVoHHUS2fwuDFQPzH9CEWxbmdZ2wi4KWnPKi3H71sga2dn4s9dRRnoDoLWhQoJJ8ZvBR2AxG",
  "key12": "7Snb2eATMWPwTZWhoDRtia6FY2APnipS3azJ47gujgC4XNgEwNjyD5nQ9aiX3iV5VFEP27nfJAeyXT3Ndygnioh",
  "key13": "34vRdfSb1BDLGjw1acBQxpLeeuV5PiHjSfL6uRUys2CgBtdX5FS5SnfBkJFyqSHXJDZ2611GRCURo5CtE6GrNmWf",
  "key14": "4N3MNWBbxcnFER1DYQDDwUPnyE8UzPkmzYXzR8Np2NWnpTtDRicKFLZCZn3GrWwuvzi6cJrDxVcgcpJAGf2PHb8g",
  "key15": "5vSAHE7hoUZvUwaivydtdFNTn4wsmu2dggDJBH2U745Nrx7gjt6BmBrfpzyPizxDHCmQVoUmQ8WZBL9h5A3EB9W4",
  "key16": "2Sx5jwfynk2jWq5osYzqYnyYPX3Bi6KBXmUSbK6G4yKJ2S4zhFWZcBMXiE1f3aKzmconMx4BDxZqgfXQYBeart6N",
  "key17": "ESmg8vcydCUGxjNy46Hig8avskCjfyf1TPhgJv51g9UVAJGUBPNA4GePhduPfTobLNBMGqxZsxESArq4FeR1gio",
  "key18": "38x9uiCZgJjkKyD3GA1Su6y6Kq5o3VPXSLzG3wSGSVBuzHESUHgiitbPcVHJq3RXsYjApfwTKSXdJzs7jZLfLREj",
  "key19": "55f4egEhwt1Aar2HCSkCphq6gC9gNyR9j8bsbxzPt3HYZTwG4LzVHSqzH1og7NzSWaohueLZcSVeBivtMihoWK6i",
  "key20": "3AVqg8q9meu3h8yTqxfTkSah6SFYyaxr6fyRRXTZHx5p3myE2yVBKGRaBFkr1Drr7Le9PDw9sMkvvZTAdmxbcVE8",
  "key21": "3fnQkUoRAmZgtZYA2REKG1Ue2UnuPQGPGEpUCtfHFm4BTp1Zt1dQrY3ARjZ1DzGFXjUoXBE59WMo7s7G38u8sD7R",
  "key22": "3QPQLvVDjceokDamiEDUrf8U46H1iUNzsAyFkNYYjKn1dmdoSqCZU5Cmvo7vSnQPQJWbY6sGfrpfbmDQGBFhDp8d",
  "key23": "7awozxFCtNXkHi2qxJn6jUguskGy3HKirZR2Aj5dFWnguDZ6WUoNWbF9xTKJ5NPvCDeaLZu8LUZU7c5gCdtZVM9",
  "key24": "37jRQ7SrjzULPL8UUAnb3cataMzsrv1kmAYW4gwJFJEYVRZXPABBqeBfe8rMJzmgR7Mi9KR29mWTAcWrohPgG5Dc",
  "key25": "3Sgt2ihxewvnJH8cLSBUGPJtAUrKVkEgsBhriRKqA2dptZt4V2t6QQ1m3Pm1SmcFxkruJQERaHKNtHYAfjsg5g4W",
  "key26": "2Jcdpc3GGRpi4w7pgTELBxWgtDRcCgSRLbwMQevTVy68kWyHN834y64bwhhQCUNzkry99U5rdiFgi62dq7RnCWjV",
  "key27": "4fcqMnibrbMJDkYRTtaiaQNS1rfkzYrnfW2oAyizup9orbCFWpPb175p2avozRzBHaYuAAuFP75p3firUTajYC8o",
  "key28": "56hgtX5Ev8pFsQsPAqWq7KQ7JHcn5YY9cKaaw6vPgJsB5fLtzzaP1dpewq4jZ7vbDxhRxiS65d2jLvPuijC5ASFn",
  "key29": "3teHYnJZEU9tjL4kAQCY3Gtz79bFp3r98XzDeiAXHojcMhHQHx31Gnosa8ucoECN13q7uYUsZ42PsernomuoqNrT",
  "key30": "2fFaVrReNL4kmd2maqqLioGiKp8uPgpuG64vmc2wzbp53U4ve1iCKhuWgjJQyXcKmYx5meBQTKhQg7MT195kCJh4",
  "key31": "52vpdfYzb2tDBiL1Cp7EKp9HUFTmeLuvJx6XmSRZCoV5psapnNhpXnPxscAMtLXqZB7h2ZYdqmLddkMEFoooTRbY",
  "key32": "3oP89shCEoGPzfFexVxbMzMs96MQzrwimMf2h9BGTAYq9c8KW32oxp8SRVBjxKLCFTZgrbnQxjZ9p2p6LXj5MEGj",
  "key33": "4kn5VG3rHdF6JFgFjMFxaqp1pcFmx47xEPBzkMBdHqabvXHybu2Qmv6WEtX6SqQtZ6N1bvNFz1SM6v8aqa5e9LAf",
  "key34": "3zPjG1pHyf4pfoGhGYpr9PwPjjrZf6bQGKghXDWXvkFhXhwn9g6fxuNZimG321joy8evQxLiY8KF44xgc6jH6Vo",
  "key35": "3XghPZombLKiRg72tQ5TSagscWmxe61yA2nojRj7tK4i5zCoqGLS9anuXuk4SpBTqD9e4vrdWMJ78KzmDrQmRezm",
  "key36": "5Nd4DwAYpzKJbnfWtQ4CkqbMRCoWNj7YdUajYsmL6fG71UAzoadK8SpzVCbvs5jFihtoWQigYctBC63bsfejyR5p",
  "key37": "tLq7qFCiRd4m9eRedJ9DDN7sirPyXHKZpHwfDf2FuT8RJerVqPdsvyW64wAqrCFnsFgJxmgNg3Tsorna5HC45HW",
  "key38": "2MTnW3qNDuxuxR4Vn6B1QcnXL28n4xU1WPj4RnRZV6D2a9eDrd3xC1oM2DaTa5kLYQWaX28AqwWSxjzZSdCwgESD"
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
