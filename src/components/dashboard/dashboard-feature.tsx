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
    "3CPWBGNyNsi56nXtPf2hMe6XUZtx9WYvwRhA7dsgVaDocqT7Tbj15xtw8ouLccxZeh6Gwwq15HaRg7v8wszDc3ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zx2yWKyLr63qC5xDc734De8fCnaL8fSmRRzwXsUrtBPgizThdwPN4NzxncyeDKiDunJnFV5cJsnagDVdPPKmsYX",
  "key1": "4RtXa9QyV3nXEAJzmY9TjXeFqGo6bKBqrpitbbS7AtENJ2p21FgjCmTnfxbqxaHcu98o173qBUqTm4zTRx3Ne5L9",
  "key2": "b5U4fhEYStPeAv8QmYKgUqkUM9MhytX7DBUvQqiWZzUK4kuPavrRLZzESbZ6hfDjnVcbSaypTm511EtziZtkYmP",
  "key3": "4PS9GTdbvysogZYzogd6L9uHcpb7wsdxyPYt8v1bWLDVPiYTBCBDUFyAFXVKjgcTYQqHErijg9diRfk8Lis3gdQ",
  "key4": "2hw3GzZnF82rEqefnySg9Tn2h6DDCNe4Mzm3GR1CtTuSmKst4KM7EQBtefnb8o3xQrVgNAnwwaZ4t2wnhuVoJ2UK",
  "key5": "3mZ7cGDGBfQeg5UU4FBu62Fnjwx35gutauLN7NkPGVCrMRbeCo2utm6MTxzDudy5rDJbwhRKuHUXk14RH4Mrw1SE",
  "key6": "5FUpM1swyyqz94KKL3dft3HmrWeEPdCd8TunV8i76PD8QpL5WSJ2pj937UPZAWVAUHve464cqn7KRUiVBU2kw692",
  "key7": "5ZeKp62ZuBDbXN9PtpyoG9BqLazC7TbsoxEuacvjbpu8QpD5nVTn3typmYi6HcqZUmtAjxfTr4x5osJHk8P7pLbf",
  "key8": "5DY5gtc1caBHou646tkYAuJWDMS5Mg6qi8EMteKQQHr3RoLranPvaUdPVw61hwZH6gxtxTPR6eUH4ybtFfWC83hX",
  "key9": "4ZHdbJhEvUtPVggh4E2J727AQvtUAihtMhs5ug2uFtCE4u3MiRmtj6J5mW383gcFvGhxiFNx1DZPZMPPpSHBSEu2",
  "key10": "M2NgZcdUmfwwubtvVYwE99HueVVGkKY2NTLtxax9H4jNAHvgaqTfdQXSqCcopaLBdcu3sqRqMjztzse6oas8LZU",
  "key11": "cNy7jWXMT2QWFyg5KiVUfRnP5QQZ3845oEYrNFpTnJjQUr7pEQgZCGUmvgyKuWd21W4MxQ1q5xXvGBNQzCAhoMy",
  "key12": "2U1QhghmnNCpmCZYykpF8tVQm2x9yDSWECjrRcT89KLj6qTp3AeAztP33R7LjXzcVkw5Hr5Ft4EmRYpcHj4WtUZw",
  "key13": "4dPhXqYi1gfD7E4oDwNNVAZYJ31oijzpNZe9Kq3Z4DRWhWFbmeiuknEAKSGgqjUFibQzWmA5C86bjqCo27LT6cYc",
  "key14": "2f8g3kBGUNMQsqjM4W5HRXaMN3MCWyGPBAHof9F5SoytMP5EMUods6ypUVmaNqhefxdUY7S2KS8vVMDn5dLWEneR",
  "key15": "h3zgbuotxVdc541rDoc6xSAYdEETYiKiGdCi5FtLD8ZzzU4nU8UTLhnC7FZqvpjRifh9Prv5wsf1zv3sL8jyXVq",
  "key16": "5wEDc3k2cMvWMKgm9Ebyakn47h4gu3vZZ7972L4n3eh9ejyjpaPijCiAXUj8eeQCG9XEzTEctWvkgscsn6XSRb9Y",
  "key17": "3ZG2c3j37JJ8vcaahp7rykX4r6RZPz8ehdYD64wzRR515Y5zPTSpeobsqLeHUUeyUDcZg7J1hsUwruSu6yPsHsTA",
  "key18": "3iMPSahdmU9bzFaHoRFx8Rkg7VAmBA3kr6XHmfLi3WyZqUCSszUFndi5UnEgMegKdCtCbBUs93SLqB5QYsMiJ7Z4",
  "key19": "28QEiXWHtLyazAK452CZs5Nbi9pZT4aYduYjeaaKS4wTfpDqQmdpyAwaqb5FisbkW1QnU1GJF8mHBDcddYYnKMy1",
  "key20": "21LCu3oRn6n97wr6VWJmu6kHRaoUaKB6nRz3LuHRDvG5hwmSPKUy8RoATiM4tPU493FYtSm2aq4mbsc22kDWNCZB",
  "key21": "2YdKyo46wVgbmBgTNNAph13cJVpDovCMrtHwMNsj3GbCMbAzRiQNDodH33X1fmBYhAv6x3TALT9AMoByFLoLsAJv",
  "key22": "4bRPejrXTYkAqbgN6EiTbRgRcFdNBag6m3ecLgjBmX69gnP6hxnkEHTNVw8Nxbe4dfWCck8UesmKzjDcA2HSonXE",
  "key23": "5Rz7Z8tPZfdjYoforyw9dHjMzdhNzwLVm1Zsk7hGJCSAbcJNd7BWG3HStF1qiA7PZG5aLtrVbneJ6ksu36kH7nCA",
  "key24": "4L4sipvBDUGSPsyfyn4fqBHSVR2xuy2Vtk1sSaQEH4SatE5VGJKKRH3EkBjjuf3g7UmZjPaeJSSKoa3HgSJacTM7",
  "key25": "5ddkHEbF8EYN6cnUbBu4NGoJoPmwGqJYbB5WTWeZ3sNrSutUKBTcvFiu2dRiFfd1Y5zhmkHLTFrydrfDVZUurrCw",
  "key26": "2PXZ4f6378sqK419cq8Nk6u3rjB3cSYc9FCAhQMZWkwZbmvZES3GuTxLDoVReDzjt8RJTj7LnRHZmpbVQrE3tupz",
  "key27": "BsQrFF56aQcLdybnWaxJKVkDNYZPYSBwoGYjbA9vhsL4SkVE1Hs1ADN7cmnw6aRbEkayFfhQPTYpVCNx9PPKd4m",
  "key28": "EZWfykk8Tc99q77cVbbkqLd2Hy4CoVBdC2WH7u31uFcS3hrecB1TCnEBaAiVA9ya4438NqDNEGHEBnMnEyLo46A",
  "key29": "ZUjySei8LHnke4b63D1EceYpomWMq1FTh6h3obYwMfVtZUKSsLM68X6XkdrMyr4E2nXzgm3dsTpAVGJfEuDWpcd",
  "key30": "3dtMZypQuxq5hkrwLHhDG8FjU9fEBC2UTeGMicKWwfAZqDiLvfF8NxhSYRp6iCSHNiZA1pFwbLmbRAWHzhL2Z9CS",
  "key31": "5QCGu88iP111GWnKJzYR8cSdxrCmuXokpF81XNFzwKTDJ2ZUyHr5FqS1k9xcnymvHPhhyNMyHp68eTSHq4WMD155",
  "key32": "121HWjvD5gSf9tsSB2MfQiZeDKeQsDKrnjzd37wroBhSEq4BpqcLQRJZA6o26n2neqEYFW5nUXHqJFXxpJhohx2a",
  "key33": "2i6EBLnDz1Sms7jPmWDy85QywjRp6A8iiwy3Dfq6jgvS5XV32wghaSD7UKXVS2mT3EEnS56VnhDLLgBDnZ32J8aC",
  "key34": "2aBDFWfBrbAjpxpZALLRqT2z4NxRJP5ZiQh8GKRRbeoZtaFyH8YkfSYbdjY1rRzGJgKrrvi5yA8KmDwrFsxFuNVV",
  "key35": "67Es1ZL79qe264z4Q91YxbPoqf1QW9ZCVhW8gMU5r4cgcVo5C2PTT4vdJ4Hw7TqRvou2KpUSCTzbHPVTcffTdvXc",
  "key36": "5uBp5cowtTx7LSK2qo99WVk4ghLSTxuubxWPDt6TYdUX2qzrguDXAZLB3zKPEM5ykWtTwBnRsAKFtxz2CmRkwheD",
  "key37": "5k5XzNWktAR2gW36m42PWJ5tKuoivSER7D2fyQ64eXfvr59kBFXit5FMy4X2ne8WEAWRh6M4UWZuJeV5iQ7ACsvM",
  "key38": "26S9xqCYys8UZefCjU2mCAv3yc46cuXB6BJJPw5pvrThJpg8bByEpyP7EUJbcViMxgppFpbFpoJTtEXT1jTZeBTC",
  "key39": "3Qo29HeNw7hrnC5hTEZJqkpTRFgqphyWqnsYJ6Bc7JapLEA3anvxCcbVLBt6eeaE8RiAcWciU14qXVrdjtK2xyps",
  "key40": "vVYT6sx6y1pJLrvG49DQZKVYf2vetHkBgvWC2kLxg3zGAhGm11cxBfSESkC5Vs8iJjujyXGvd5C5UFF42p9YY2N",
  "key41": "NHbt29Wqus9wGm4dH5vndAJT3bZvntxYNNN6rYzNFC7qxLSDmU12LuuhkwXko4Z8bKjTqJ35QTEZPpFa2E6x5GN",
  "key42": "x84GZiaRKjhji5gHjLDRjaUxA9WsUr4QJBnxYm6v1f33B156bPZJ1oCExCsQLYoFE2MiVEKqwV4qjiW3tbQSuw7"
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
