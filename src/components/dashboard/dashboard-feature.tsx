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
    "eBQeZMqMALXgR2f9DwBU7YRBLnNBtXRVL9hki6YYsLVUqHSSwgm6phYeMZ8n5enncW5jAq7aqAZxzPDsHTJ7G9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cbM6Vy85o8RmWuRkSTJJxctTSFVg3rHT9Nk1C7juE8gTbxtx44fnc8UR2Rio9SGxiSTJXiTpAo7esvWm3ute6tG",
  "key1": "srteCS9yP6iv36RtiutJcVehLwBkGnQ6K5vQt3wvDd7TyB3T2tU8MEnVursXrsRxyj1h7Qwx84zwQ5sabbuAkeC",
  "key2": "4rpqJ5SCZvGYd7Ws159BMcieBCYwvR1irGVTNgR28nHPE44iYHCE7j3oBRvMfGKTKSp6KHf9vozXgEjnoCsXkrUM",
  "key3": "5CBzoz3L2Uk3bCih5q6JM3C5mZrTU5GEs6LupLD8LKByWbs3iERJrkw4iRoUAHK9Qm7ZUycurBR6SpjcK2Kb9cSS",
  "key4": "4SAWr7bM4erzamdUvM4g26BDa6DGHHqGQcPA3JY2k8BVmCtEW4WX2ThxzaaGzWpbPTGS6HcTnXkmf4CKaBkbRQ2v",
  "key5": "3Yq6zXX2PAgo64pY1AmqjRMR39T22L4NYfzeNSYVfe9MKUe3yLrZVCovAtGLa7CqBuyWhATr9QX6SbpTqRrqnYnj",
  "key6": "3AmpaMp856JaKvFouvWdq7kBYhN6VMqfQddv368hgDuG6qiv8oXDJES3RpP6KKjsoTU6RZA3ikLhSVhj6DdE6YqT",
  "key7": "eShnuTsurXisW55FAzYRiWbMxeqH3gsb1hs1WHNEBD2ZwfotNHx9hzFLLgYvrC6PvFxgFXznW12RHVBC7oNabbp",
  "key8": "qCb5bvJFFrX1joWrY1SP5utC5XZsiteNXJDP3X582peM1bf5a2PxqPKFZ2E8WQu94L5BGYkNZ1SMQJPqcuMKpRG",
  "key9": "3RqXGygNsk7TQjSUGdFBFBqgT4owNUR8p46GKVS1h19P8NSLwdTBMk8PEpwzuuGQ3Ma7dx2KsPWrcEAhXnB7pVy7",
  "key10": "3t3hzYXFqbotmEyW4L1MW1b7DmhbTxVvkLqxWmFFp3QakQz3m7x44vZVjQ994rixTUrWQKL44wgqDnSQ5E7w8JJX",
  "key11": "251mJKf7Jzqk7HPrVe7kHPAum5vb7Sv87i9hyarwrLA7XvLt4iYzK9CAJ7mz7hAxHc6qKG6221ZDUJgfpfSZVW7u",
  "key12": "5sUJiERjypTKF47aHKGd4eVkKwrbai3wwuCRiEf2rouMr9JFPj8rpW9ae54QwE91QFSTo9KPwSBfJm6rsMDHUfbf",
  "key13": "QUGXVSnkXBu7XxFmD6khhKu1n1uYTExmKmWhGRjEYiRMRQEEdzEnAAahTipgejk4VTC8bnGeuNFig4kmYLvejix",
  "key14": "hsb8gN9MLza8ZnzLt4JtC2XxpNSGMp4xSvjGKBe4hvjxpcMywXSnjfiaemWEHeuGWH1Go1Ex5T9aFdS8BDNeAQg",
  "key15": "4qRPf1RoULfwf5RkXA632NApx8Gn6qg29w4JUcCFs7ZzDUhUg4x28sMrbSkFsG98sdrBjHybY89mKcCUrDSxf691",
  "key16": "zmtmZhB5Z31EeBqgWpx6n7riCgYjk94wok4uuoyAEQuUmSL9J3yYgbHA7NHknsg14eCak6XcihZWvqSV2htLa9v",
  "key17": "3XSg7ZLtJh3dQ689oQtZJtPMJrYhZAhUDonj718kn2X2Wxnq7r5akDqYp51E3gQ5epCgbA1e8mn4Dob7XTBb4PrU",
  "key18": "64d4iQ2etrQtDAUG4bM6acfi1EgU7kCcYnY57NeBGsEsSrFqBybCxbyE3wgD1oyopTURNLbq2AK3pUdsyz5BD3RE",
  "key19": "4MJgv3irJtxGU3uXCiGvM7azQf1HDbDkZjCk3EaEGu61Gww3srTAKG46Mg6DYbJ67mbzEzaG52LEtKJwbhBt7kjC",
  "key20": "5UAi2cUcQ3atpBk49ejHHQ3GeQPH3ybnuBvT2yAEwGWYMCTHHxFiMcqBt7b9UmhALtuBDwHkywYZUVpKWQDPaaKU",
  "key21": "4afZeFW1M5HDEyZwDFev34SLNLRyZaz9cYbvUZag5n9z9RNLzXJCnKqtxNdFWcHWViQUWt2iyPCmR1RUPSVVuDJ9",
  "key22": "5mnag1XoAqBCB4ZpdzeGnjaERo7QodirJdbfTdowm94ayugywYf9cyEwv7YvexGe7DwxCs2Ln7WrUU3N6RnDxu5o",
  "key23": "4NExFnnzBSgnCsgqhkUL5AscHqbs6Hkb9kUPbGf4sbGmbLtgURzkeK2gzMmiK4mmUSibyygbVWsXJFXiZ6juWnox",
  "key24": "DEePnXpU6GHQSiJaeUnjDVQmEzkP4JBB7CymhSbxLfgt4bp1exebr8eyJjFsC7vafNDcoHa71CSoQrkdsTV5QwD",
  "key25": "5fAAYrVvtSMe3iSzUfBNpfjQcWKGjfDNJ3HgCTPj3nDS7qu6gG5kbp2wN14KKeHWyrmoPmn8HLc3FAgwWoUZRu9f",
  "key26": "4CkCwsj11FUNp4dyAE1xW3nxJ2QPJ5vqgqQtocYX17kMJYEUMoEZXkxiT5TiZZLzbdVP4snfN1Kh1Pg3FHTVRQwQ",
  "key27": "dbjEGc6Yzoeq4iGSnUzj74j54hpYXhXHqjsuzyK9MmGTELCGTYf7MpxtnmRbYKourUfL93NKconBw1BhmMkSuhn",
  "key28": "4sWjrzbEMSi8MN8sFkMvB5xq6wCFSYcXV77zVj3acgTZp8oM6L7AXNdc4mgU5zacLFWabTSXkeB5CUHfeEg6mvwP",
  "key29": "36HN6ffoR9dT6kqKjTvnaHSKeLLLSz9Ui6uowqwaeNfareMCCBY5AFmT3dH3BqwiUTeTkbBi1tgQZzsJzumXaQXt",
  "key30": "HWLehVtPy2u71pED2W2wEfozvL2njFWCGs5FHtfczfmGTTtpueGBEiw8dtfNNwW2xPNnpGFy7xPxkNFZbEU3KRY",
  "key31": "5C8npcQt9AqUnC1WKLQ7ArR58Xs14GUmBMhR97aHVAhmhLcX1toGRdKu2pGsBkdq5QKfbM1cFByU2bjYKyp7B3bj",
  "key32": "4hzaRJnRvEoPaYBCUVkMEUmztKaR9FifxJNEDS8cwC1jXTjNNN9SSuffeyctK2sMLsKrRfcyypsXU3PAdHG4cxfo",
  "key33": "5sEN6ZP12ccM7VByYLdUjdTwDYfhBj9DfMGok6czowiEPFRX6Coe1VAZC8azRV51vrvoj31qb8gG71Va6uENdtAL",
  "key34": "2sGoUhSsxQW7m1wTV3Nw2n5mSc7hejAXPz3WCMayTCVFqJ5D4Wbq3jYsboHQihjRdLZ7gUzHwtuNp6RxEoFXpnws",
  "key35": "5kM7sUaK85uhQPCHXFvtJcYHyhXdbZmrXCfVXqRD14RLyg84CjnCdA7PoYFNLyWgGwwpuvRhajgVGXMpMMx9UdG4",
  "key36": "4SR3cMDPGSJ9krgCLtNYFihQ9qy4KBxQsLKKPb4nezQsCjcwuTf2nnNqmYaGtM9Ur6LH4KgtuA9mHxNdScsesueo"
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
