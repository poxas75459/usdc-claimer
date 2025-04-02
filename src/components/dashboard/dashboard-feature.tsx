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
    "4HBy3bMxsjhnmTCR4vmeMwdyhnXeU4Mtb3g15cENPeTqAh9kVt3siKpTu5ti8CcAsangUzHL2fvhGv4GgdtPbHER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rez8bAm8rthfM1yS1BaE4cheauorPjatMAqWKZ6KdRG2NsFbXgxSmPcroS8T442MBcCD9PVneW7eZnWW3SS8MGX",
  "key1": "64broW1MSoMux3Zrs9EhDbYn3UnxigjM5b9mULQFAvoMCc3tZ7sA3JqtVkgc49nvMs2zE2nZcpysQy3FxhQMxT5q",
  "key2": "59z7AyCQ4tZqbP7r7fN6yhJWViqsoZ5svgygvjSeWY5j4sSSVQkqmTmh2tPHo5ymK9zQoymSx787ETm4PEQv5QL7",
  "key3": "riQc7WwUDUoc8SagY2gAByeTahTHu7NX7pboGGfqTdNTAbbxaGFhrAzmAaLsku7jbRUUSZj7KH7qcZWudoiG6NC",
  "key4": "3S5PVrpzSh7b6Et3it6nup12psFQoByEGjfSXskDQCw1Ud7n8ZHbeZgFqbmvnr1wR4b64iDgY5nf8BnwWH5Byx7U",
  "key5": "2whPFDVA4ewEAR6qzC11RvgvYHEC6smDLVJ6YFivkuGT66mzZ8jT1xZ7uPXBNCwuNgd7zPAAtnvaYj8iSEcf7BwV",
  "key6": "31pm75UJkEGU7NMENk2GtECVoeFjmTHZ9R63ZrCT78Snk4mkeVLU3hUqMuXgnE5wtpKh82PCDgKC1ibzdf6pjTGV",
  "key7": "2Mws1bMwEKEffrhSK9QQbrupfscyUMD3BFwvtqXkFXpWyS3x8mJDWpuoKVi2Jb8hEdF5aThVKgP5PcXadg6uQvxF",
  "key8": "4yCXtNChXfkuFWMtUSWH6BzdPB1ySgyW2ZCBkcB4z9wRhuPhKCCi9xPZodjBkguTszMwitetnGzSW9XPHx6c9mao",
  "key9": "4xXiP8paqKaLg6GLwJinPA9vtbnScn319bHgCEZRWX7EmEyXgAAEEeXRMyLsU8tM4AcrahgBFKV2M4B9SHohFg3c",
  "key10": "4kEzg4aNyr4Dzst8xSD5rsuUTscszfZViZpF5wtysq6YTfEKN2tD2uKqCUD3a1RvCYsqDrAVJ2H388qhEXYu94e5",
  "key11": "3wwL2cFHRKNiEYA49J5iRA1DcGZouPcV7XDej5n998iNYQYNgicTaeWJMqXJ712bpZyRD9nrVJDt7UGyUcGQUaLW",
  "key12": "4jMHWDnhx47RpCBfTtvZh9ACw5skZ2fbRKJzZMymtomiFKLzA3gW6UJqpRcaMk2Zq7AxpVkx3qC7eVf5K46RSnJ4",
  "key13": "4MNH35jdDkewoKQsZEt3nyqeLgZNCQGVweWpjnVRioR29rfbSNefqyEfFZb1AFi6k64QFjnVnTDTSUfLHcttzsyt",
  "key14": "5cV35SvBpe5emUNDNPvgLmbZJqdTBRef9f2T1FHiYTuwWaK5gPDCEepG1H1i7chV7HgCNaNpffffKWigfiDRe96E",
  "key15": "4oUFC3fjy18v7B1nYRggfQe8EFE8FeQeZrbL3giKiXieYgjojwFTBR6KLE9ED5c89zrxcaj5Y3My2bbwWZDL6Y3A",
  "key16": "5cA7xHifosao2Pw6H1U4TKxmrkc7fW87Y63QbHqpFULvTkWiDiT7CRxrJcrxuxNWDwsnwwHzpzZAJEvB3yLa1kgi",
  "key17": "25c32pSvWe9LQXXyV1wRGHEJzZ4VzPqbm81RkCW6CDovK79KSfhVidbqgaKtXFvsNcBFBuBwRmm2okzuFMKrEAQ2",
  "key18": "4nXxjP9JtrV3T2m83QzShjXdFMUSLgtcHijX6GWwY2JY6eG2eyiHBJDKgRxHKqzS8mdVuUnmvtnJb5tVCHX5iMQW",
  "key19": "5438eaW1a8jgeDF9euZ9Vgd1PkyAB8gDuEEhXtCmVePcBmoGzaCZHA7PbS6kgPGJZEcxYYKNivp9y6hc2PeEFbhp",
  "key20": "DNNPdJHzM258GHRAaPJgNNN3kZkfdnKpnihcRBquYv3YmSyibfx1EpPcdrMF3C4JDZr6Mu8RaNQeAvpyDyTkLRu",
  "key21": "5fMCHBmYxXcH9yhGo3dMzjCWrN7a5oP8bxudxPEkmTJ5nFQWvSrfk3kauEjLuCz5mnhXm2iBSM85M15UxJkeY4Cn",
  "key22": "3XNRfGMV92ZePSq66fGSn6KAX8QW4rChCrdX7JS7N2SeMZUzk791bpCMG122eF3tfRx4fk14CUEfoaU5WppPMAvy",
  "key23": "4Q1noP7aSpyfGNeEqiseeZzhmSyMbSwJ1hVoCYMYk1uJLoaUZRdTvkhuwt6G4qEEM6EFhMkYiXnkaohQ4KRtcUiX",
  "key24": "4MCDMqmWyDU14991nrrgy5VkaFervbF9CmYZXCS1EdfuCcxVoytFh9PDhtt1Gu2PyZtn2wxSy7ZKyL2KN2ieakuj",
  "key25": "m3dujDfAfg2xEK6nwbZCVgxaj2GhLK35ht37kdputeK6EK2UDz2vfbrHZE5rVPmdtgLSt2Kw2NvMjAvv3h5aCa8",
  "key26": "4DEJZfy4sHeG9Cw5EcY17u6jxyH3yqyaiDEGoRUvjrjieRSYKipaMXg4yQr8ATYDHmCMGvLwD7TBTupzXNtyv4bh"
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
