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
    "3KAXH87fUgTneJdizM9LboxBU5B56bqCXDDHF36BgED96JqGGsbm1j11CjaFKqjE3FiueNRBfwF1aL9TLBYzg57r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2avNckKyw71WmRYsTSUy6ttzXTiRNcTFh5MrENGGKTNzox79BgfFJtyTA1bCKzGH7fPj28nYsTo2PKUscbVdmJ3P",
  "key1": "2mGLykdwD6LWh2PAnLhiQfGyJQcJTKkh6Z9iyhqXG9VUTpxchETZsFSPsYonQJPSEwtC7hrr7u8j17E6dUsZoWJT",
  "key2": "QZaiNxUDeFCnjfPJRAHbontT1rAgg5WH3pxD8bDaXgUHRvfJj1HU3Dvn1DWnExwB7Evqr7QDDrsq6Pdg8j2jQyR",
  "key3": "2Z29YDzpAfYhYPd8tnMProgXR2dFiGwznqNUy9LNwdbKVyRUZx6pF4C9ETHEFf5kTv39dHqyJk3V5mBAKDiVrxrG",
  "key4": "PDj11RqVL1VnotkW19p7TDkLJGEGdosD9WJ9KDRQw3WJjPTpPHJUU6tk8aqGrUHvYiwqbCSkrwRrRUfjxPVCwUV",
  "key5": "3X6zdUUomHVttwbiP1JtaTSumXL5tw8Gdw9k3mTxAUNHgp26aWe8G8Ev5rfpsmtvLc2dmR8TnL2jZjh6NGegGxmV",
  "key6": "3m2ArYBVhhZR3bcoRVJgX6eD5YJrJztfhDAEAUPf87b6cuBkTC9adQQJtfL6iDz4w6HbL7AZiZUBFedWzRMHRk5X",
  "key7": "294tVrUCvj4s1sLNb791RV2bzM5PeaNCusHBZHRRpvHeWDVZ6zR7QrjdDxCSLzQvxo84tJ4fYTKfFJHQ67F9rAHq",
  "key8": "4rrphYMZabzmonmmhoV3nicztbnDx8w3rhwr26YA65JbyQkTgLiqsN2qqQVwzveo2ciZYaqE5dMXXbuuVvGELtDJ",
  "key9": "27AMVC5h4LRMCXCDTVhcpwdb8LVC6vYSq8ABQJw1Ykf9JABzKgfwdoa8vb77v6xDjjGaJviQMRULU5A8CihxxZeR",
  "key10": "4KbH6TGJBpfK4g6Xe5U2zi8aHE5gvbqEFCYRrTLK8fYwo49TzS1v4VpWdvJySsNmTcFGM3a4Qu13obPP69nupEvm",
  "key11": "CH7aZmZ6c2CocjvTATEt7X5K5Jmia8Bgwn7F56xHq1HSgdMFvRms25GvQCsYBYdPEimt275VtWHwZV3rXH5td44",
  "key12": "5v7oMSTfWigxvpWU11txgcEfHMnxLV2RFyvEfwnr2gQc392oQwn1WSKC8PN3qDfnhQDM7NrwfNZifHemGd7PKvjq",
  "key13": "3h7zQTytjDmGjmkpLyyh3PibbgMguTZoV287SucfVCDEsNP4hJtgEzcGohpX4K6a6qpTFrrWZPHwcxs8fhbTpZ61",
  "key14": "2smY9aXNrNhFVdavvff57u3Jk14mtC76Ws6H5q51iK9fGEgoeDJS73X9GfAoTGPtSd8b4RMkWtVmeoh2qzbCyx7f",
  "key15": "3LHj3iMteG35aCxtAZUcWBd2TAGmN8K831MQ79TgRFRpqMWwJFQsMQikhAVKDTDtsetMDhGKC8SAGifK6MYkMrYS",
  "key16": "5yVgNozamZPGDUooQGAGbDVNgZtHU2RQZ3H5A1Tg3iENDmsAcxc5FPi4BYzY7sf8DvxK1kdeudPjtr3ViKmZJkdE",
  "key17": "2dW1gzGTs5XHDPz3nHEeji2Fj1HwyhDEX4xe8NEWfEsPdmftB1rr93YavPEvurE8vmGhvmTYCFriUZWjDr7V6vcn",
  "key18": "3GN1vdXdKHa7m3adZBCazWAQ7dmpi5D3ukyn5KhrJic9aghc3ze8sz6D78hE9x2nfgeW4k9D1VG5mvGpBzRZU1Yc",
  "key19": "3d2EfdFCHiniTf846CY1QMSEvcdSmLSqazJXpgonbnEppmsjebh9A8QWe1sAz9BaMGHyTBfrB4npQsQSifvFqm1j",
  "key20": "5TBT1idMWyfN6Gz7STp26hUcL16qKgJfJyqy1Jtr6phs4q56z3gPX9LVEaMdWkztiibpwmEFhWTwgRE65oxX43kN",
  "key21": "5vRgC49W2LaLToVRBpufzBNzGuLVmRELp1KNHjJJHoXRECFMPfKADnzDzZjwTuw1SmcDnKGvG6o4wY7NsCb3urQ6",
  "key22": "4E7SFaz9rrmt2CrWxpDuYTw5mhNddE3i4Ymi139RLN15uaGzATpfnUxDjX4NRNePBKVwWmAPgRy9qbfXLYsGr2wt",
  "key23": "4DfA7SoXUKzadq7iiHwnmaqD24XBDW9j3yPsyP7yYtDzrdvD1axPTYsv8msKUvQ2jxUgTJSa3NC3MLFjVesHkwKn",
  "key24": "4cx6z7rG5FGZa2Mx2ZEVsxNBH2FhVxnMDoT7kx1n1fezw4vAfrTzPVtkMdq1XcFurdKtn8YFXYJXjLGuetKUQB1V",
  "key25": "64jP85QRezNWUdyD9mE4tpK9vdcLAxbo522fbvYx6VWYGe5wpv7g8U7CQ8gqpf6FqPzvyvF9qPBKjVSESJdYMKBn",
  "key26": "36tp84QaF1xpuM3qLigik1kcMmD2iq5KHZ32h5uSP4SuZabzFydLVKdxJiPSgGWF2CG6zkN7UpRSQmAyhtpPWypF",
  "key27": "XQk4dojUfUmKKGEYfJLtJhPWBUGnDJsm99PikVwECVb1EBqa8n2FwRkJhu1KhJF1wdo7mV4jNCJsPPurPv3HS9V",
  "key28": "5ZyCfwBxUDGsiLG8a7ABW4Ro67LNNi8qi1LTNhWtThhBYkxmKH5uhK4begcnsoYZkTSqqYWgLQ4EBfeiH83ZEiZv",
  "key29": "4dY2R4E8ziyMG7ibJpuKovD49gYn7L5TGJyEwhD2gGj9GqcxpGMSNpyJft5ArCn3c4iF3ENVMG7jKSvhz3SgeUbE",
  "key30": "ESrYqAz2MiMgGegrfFKi5bfobvVwSjARQmibxuihqcXphRA88nGyfaLK9nzqEKM7MXf3MgRcFw5ExB77knEmptf",
  "key31": "3uH9MiXdCTB3ujmC9Ywbeqtnr7kRzCtYZ6z5qyLZ4nfhauq1d8DkyYKyEaVZLJ1KxwSEvzsiuAb2CK1L6bzuvAtQ",
  "key32": "4pdCpYVsgNVf8uoLszEo45JqQDoHGNFsFonnDdBTxEUeiodr3GwEit5nJo4x3LpAAnrY3UsnoPAE5rkUoKoeemUf",
  "key33": "4Y292vP8NEMUHZs7fKwQsPE4bwNwGMd1pnjJPqMEtNDB5ptNhsBYBBt8ZMYsUnD1SAjvBVbq5W2MXJTPA3RS94H4",
  "key34": "3vj3LoKB1ksKyZvsnjP1PazxWSwcMwSwxCn1nsp2ZhacYXS5Kh4PnT1ub8JKdq3hXtChpbTHrbiK69wGATs2t2rk",
  "key35": "267bMnVawDJT7367izsZ3L7K8dma5uGbFTyQn11HX2L87HHvCE5qwEeBkLRqMhYsEmWy9rxQLesYJWQtBBbygiz8",
  "key36": "3ThVFQRxQuk5NPttJMiGBA5knTpdTxEpRQVnzkQ4A8xuyzCq55F4XhSW4aCLv5o6nsy87Ngu1k2cx594JsxvuPLh",
  "key37": "3RH7SXhbYDeS1578ST5YDt9Utcp6VTBzj794KgEKeWa4YR52c1hFdkuSBvUoJwsetWPWGv8ih5i5cACrR7Zn5jrK"
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
