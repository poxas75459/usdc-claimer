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
    "27gPjBCMZgkhppXFBUhGPbdpyyPx35DuH6fqtJw4Cv7KbsfA1s3ZWozEsxEKUvwYUC2yAE1d1fZPqzkmppDNacHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NatP6XzhUhj4r4nBLPwzCeCXVeXMrZoFLaXMyYm8U4XVae6y9GP2yzkwikw1ihhZaTvb12AQ8S2YLYH81CWwbeC",
  "key1": "58161VaynREMaoYgd61jd5qefuCymuVqBGSsozpCn54bbjJpn2uDc6jETHcuSGF1VSjjWWhW4K8Sbe3Qf4mFCRcY",
  "key2": "4EbRUEiyimGeZPoEro5GG6V8EURdJ7cwagwp3UDk2PW8G7mv1WgCgSxJCJ4eF3c76DKLgsjRpdxZvKGQgZdck388",
  "key3": "X11H44Ki4cUTo44Akgr7H2Dp6ozjwz2Mxd4D3M8yeL1u4X1FQkoCWFuMMxEwyHBYqATUf2yEGSSNwGJNYwGjdyj",
  "key4": "3paV1f8ithLpenJZzbm6vEzPHo7YsKBSoGpPW93zXWmCS72mbRP9ehrQeeXViP4DprTKbRWjEMabuZWDKQudcjNE",
  "key5": "3t7pLtFj2jASRs7ippBKayrXsq9jJbn8qfysvEogG72zgqo2PcgyJCBefWCVfaEFPPVpXiaZAizQxxGwbQjdegMw",
  "key6": "4gr1mpF1ADUYmG1JJgQEZGhoaPz5gNMXVsneEWKY27Vw3oRrkiKSqkCR86TQo4FJtf3ihR91uY8RnHjTrzSnXBFk",
  "key7": "eGHeqqfqhpj1q8U3zkythXiuav5EtR1aEX84v5oL8pEpAw5JdpFseUsT5rZRncZNYi3FFeEe5wfU9S63uGhacPT",
  "key8": "663Z1EwhD7d4dsMBndSPra5HSm9o2ijUGb3uZYnAjoDj7zbnX3Vre5kPNFw67GisU2ZPmFpWBXJ4RogRHdmsJFof",
  "key9": "4xDf2khMvEbozWe4ypxQWzog5inut9UQvoqUczu1GPi8WkP9255iZhDw44V1YvbQU2WyjGprHYLzyozZcNLAvigi",
  "key10": "3t4tkuH1JU52hKRJNAYiZkpjZ8YpsPmPb39PMqukPfpG8NaaSYFgQ7XYnH5PisxMrTvGH5p2MvtNaJmZXETP2857",
  "key11": "3mdiaHuhJuPubVjDRHNJSEefci9YZKn5S4JDo5xj2ecUHze7xH6CdL267zX1oTjLhxAT5ma3N2KF16AB4ot78nQs",
  "key12": "2iQfX2EGWMV8ZSyoCRHeWiGjGKhapHk68iT2ywpRiAPi5fiAMsnHxMARPejGShgbNoiuRJh6HSpJu8XjemWDbmLs",
  "key13": "2Ykek3Hk94wi6gd2krFTLX6j1b9d5uaH4rs5PGuHcC93EK5zPwuCxP4XaESo8HeUqJ2jEbPcYhbLCQak91rPqK85",
  "key14": "5DKrvQLxBuSt3mBrBzn4EDsL14JbryrbBaPSwYq1DKt3ojx4HfQp3GwdimEcnpVhAH4JTfDXpQ46nem5qBamWZnb",
  "key15": "r5wmLFmVPizPHgNBtqryEBwgov6DJN4dtHRHQAqcf9b2dxSa85xYKZ88icD1KqxbPFQToC5DV7iHgANdV7qKaJf",
  "key16": "QFCDVKy2W31Divh7be6bJwocZojCxN3aWH1iuHujj6Df7yo9kAG6HqBP8i5rybfQJJ3VQCDkeFHGPVTdTxTBL9u",
  "key17": "3At3QrkaXwrEsvKxa48B4EVg2LMfEhcj5ZFmHvU7wTNfwyJRyV1AQecztMLQENxgGbipjivREB3YUUfj7NpmypCu",
  "key18": "357GcqjnPA3iRGePfUfZfamvKmCaS35JKjJMvKBoyeo2297zQwr8dTEbk1WcvAY3r3KaDzTHKAZyVxuRNSaLZayA",
  "key19": "5sJ4ABfAoFEFr138DzCrY5gwVSwfs1xFLxUKyuU8MC4xmUq6Mez9WKWr2mjq1e9V2toKm334BaFSvBzo9Jvi2xsk",
  "key20": "3vf4mJCJJ7YskveAFiDKWFd3SvzZNgVDNqCpst1ZEFH3q6VMF3XY4vFyTtrrEV17UaevLgXtq4WBw3aEev5qek5a",
  "key21": "2mrvv17RU36JoYCscSPu182wmqmd3igYEzAktChNdHaykaPCpTGTQHxad2t6XbNBkthXFLqcoJGBKaWUv8RH9KwC",
  "key22": "2ajeXioARTL1VLdcVhGj7zJUkMchE97xbND2QXEeEtc99FQgs9yR2noNDcUZLR5fmEz16Lab8vajKZvkShDX77rf",
  "key23": "4WGbwzrjPeiFPipwqGKRK18EidLnKS3atBJwfLMQKJ1TzrdeY8wFicQFZWiTBW39SLSkcEcZvMHd9GmXFXeZWz7o",
  "key24": "5Utmn3CHDjfBYje8BsQHKs9Vwo7CEAmNdaqo8sVFbfLBPThZrXzES5uYLuehnd7QzGcGshQtgrzzeYxeDdp4bruH",
  "key25": "49xEhnqqTc7jxHWWrLi1HQ5HqP5uugKugphNvLEsPkBgGTVHv7MrH2d981mDGHYUpAo6vM8n7GtbmSMHLcyvXBJD",
  "key26": "dbbxMT2v33FAkSwKx8qkUSeQGDkwmSSGsc4rJ2TGZDivcWp75F9ESzFSt7KcmtUCNwMHumHNtkGt7qaQqffbRJ7",
  "key27": "5WLM98GMFcVzoyfSXNDS8NmsR3wzbVe646denjxCRj8j4rVM3FoXJGdCUB4DefeFJptwsNVRFTLgoGEmH6DKxrMi",
  "key28": "562RDLTHZY2wmdjn1VrVuRCMAXYzLHCXdqHo62FMnTsRFxPwWpQxj2vLGaazE2Si82PUi5bEB84qqs5f3How8zCh",
  "key29": "LThkDisJvayuLZWVZj8jM3YhNAVZNgxjoEftBdsfwxJqYjJWYkq5HEbWFXn8iH96DCaqLpDgD9xEbJFS8nqmdWJ",
  "key30": "4J7jcnDp6v3ZxPWRd2r4tBUywZ8xtKVfYDGog1DsQ7KKE9owDz7nm4kcPb97S42rnCLs1z2JUYbkYDKywfky2zC6",
  "key31": "4ko9h1c1PfJYmuCPMuMhUVhWPFvHCenYn12uaG5p6iCvBb1mKJUhmA4HgJTcfaz4CySUkmRj8qSxeeXTSBjzriVU",
  "key32": "SrNQVjP1SA2k2Uo3szP6RymQecGdMhcMwCueeiSF9TFttJkpfjdnPhMArvKmcmUGVh64kJJdbnZ7DVtjhB9E6hr",
  "key33": "3LvCfQGByBJgX252b4v2PaXQmrDnCEU9tGcdM1aQdtnaxb2HVvSXqL6ArJrGGi3hmmqdBVcEFKpRsxrJQqWFauwE"
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
