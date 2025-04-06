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
    "2YJ2zwCLqsE51WorraDnHxqPtjfeUQzPs57Bwpk6Lo8RWd7dbDQhE74K1qBaCRddQxZx1gfTvdYwrFmW2fTY8ELm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pvwWrStAdsU7g7FJkNn4VdLmSKQ8qXgKWRxyu8fsXUwAYy6cRiwNsTVBQac3WydXbxDGqoaL3S22J4r6W6vs79p",
  "key1": "3NAUjSso8WekC8315ezXq2dbXsG3AZzejQyWZw6guwKwTA84tfMGf5YwQ2h14ZhkSMh4Y6nrLXYhyCUS8YbfMZTX",
  "key2": "4myQ4z1VN3JUufi5AmJ793fBus282uAUXQ57GMa3kd54BHA1kTExHEvnEJegafHFhCiPwJg5o1HTSAiwNec21gnf",
  "key3": "5mPfunbtvsjEy7HHZDx9V6E5fZxcUt5aqLVwkTQ8TVAw8zxQ1HxFUnRUenJaooiEtqj5rxty1tPCFqsp2Bt5UtGP",
  "key4": "Qmz1y3s7Rd8KCQzaKHDNJGGdK5Pf2xqMgpVD3Dz32AV9nNyJqctQWWJhgTZFypvToGe9KGjL5WQriBnKDZwew7w",
  "key5": "osdLCTECVmWhWAtw8qwLv1gtWzqyyzNt3JtytZz9yi4X5dDKkXB8FG3pCNrY22dvvwGAwEfgwXVjFmDzGijRKcP",
  "key6": "5TubzRobWPLdDQTEvUq8JatA7cZpNfxQh6Az5WPSMcnRbKgJc4kVtpf4Z5P6RVZs7uqDx1XFyGvQWbbWTcLuGUA8",
  "key7": "4nHEs3Sthi2jGFCcEuWtDQ34xTuNFRDmHVWSwhY9K7NTSvjHfvKV4VZ4UyhGZrFeyKc8TmKERA1xN5ZEjD61hCUS",
  "key8": "5wskmhZui83iBUP8GxETMVPNkr81r9D4eediSsupsiGkcrH4DKuYLYuHxaQAAYDzymNwcxiu4wiB8EPE3JQEmKEj",
  "key9": "2bAYRUZ1gZqnKCAqoAcph2Vo9qCf8C7uD43LGjd56Y85RoEEdSUWY1WAhQJA413Cj91hpezs85JfY9Bx7LqTski5",
  "key10": "33mjNjknHWk6tLLTgzR1RTCtXy3XqSCbsrX1meVs3rt1Q68SXaRxUgnADDXXsHSaJeMAYd7M7s2sdj5u33EgETRM",
  "key11": "5C94zgaD4VRtZ9o8xbEB1NxiHTteaMV9uzNV2fuTUPfMwf8SuTy545FJus6oQt9YydKccsvDfjPjiCZaBuTznwvT",
  "key12": "Uyn2BEkSh2CbSd5LVaxK5YyiTZNqRB4T3XDU5gjBMPUR2T6TZTRiy8ZRvLx9T5b46Dv8bQZE5bCFSEKkAN4CMvc",
  "key13": "43d1CMNoVc4zZseYNE2jgY1jkQXZY6G9foqARABTCVfMrRF2nx6AoaRy69BshVLwqjS94gBpeLy3LfqdFFWxWkHk",
  "key14": "3a8wXeX7tdk5zFdZg2SMfd96Pk335rHAPSrfEnavaTsMtuCH7XBEh6mjNz6UFKpGz4zZzhRvDBVo7tfHoU3ng5TW",
  "key15": "33A6jfJDCToFnmwU5rgBQFPhz6VL29bTHGcGx3nVz1Mx8TcGzfPAzsvjs2zagMv3ropew3ekAkmPXQWrdFdUPsiB",
  "key16": "STXj8zvCfieK5JSRCvjdGBXhpfjuLr6d57rewPNnujoz6E6wt11RC94KPTEYwqXnoMywDA817iDGnRwMNFMB7HY",
  "key17": "5fA67oX34YgrMRQepqYFrTn1YGHCdFTH6ZaZjbeoDjHQx9mHCKtdfo3QuQbpwtWejf1Vf67jRjV8G5BK76WH59yQ",
  "key18": "3owGktRed4vweRDE8sLmL5tJcib26WWTRSFSGk3F1juX32atg23tMgMjHoUc8AxRGtTVyD9F3VWBjM8gv28BUy4Y",
  "key19": "atvp9isXBD7cyct1DzkD82CBq7GEtRNCouoCh6Nfb5a5ziWQas2dmwHsaRF37R5QuyCaLv8ukCi1PUKaWDL7dzk",
  "key20": "Vni6E2Cn25Re2431DANvUEKPUYfTMtdjea67j3Y61Qsk1QUfzzSGq58KHZ8tKGoZh54xQX2XoRnudzFP8yKgMuG",
  "key21": "32KSPebsFmnmMiVZLrE9V1pWGBY4J1E8BAv9ouc572Dgw9bmZFHusLU1iVQXuFuxw2o8RMq7uHEbE54ofdQ5z3R3",
  "key22": "2gkKjYvqGo8EMx6XUz9wrap5CUyN94sJD93t7igUZVFUusFBoF8sBCdAbnb2opSqBYcFTRmHCMP4TjfuHa49Ucg5",
  "key23": "2iS1vr1hEaBc4g5aeYN8WSfX8DwGgbUFuccRfrMMfxSGpcPzEf9ML5BRmkTgNcZjm3DNeQk3cN35BkdGFDVLg7UW",
  "key24": "4U7zwpobapLDh4psfEUHZi8hCUW9jKHEVLqir5YS5R9skyinf368XFmpjdtQ7q51kEevDXTuQuweqUpMgYUYx7Hs",
  "key25": "4taeyqkJZfQipm62Gubke1zW9WxHViFtBDL1eCJEpJdxLBtmbxwnX8uKcnV4QqMFXiyfnSGFWq4inpc5PkwWhgx1",
  "key26": "3rs1oYBQezW3mwhNJofJZmZCLsN4MhB4obACoififEZgWqZFeSgn4ufYJYKKR5dPE8XgWhfWw5ccz8iDsoDtsKP9",
  "key27": "3cfnz2cJzsfL7SCFteuvxCTPincfe1fdfMKZDRYWgos9HnpNR2Ap1LhRGU2P1kKmAHmgoPm1FMcRkf1pGpr716fF",
  "key28": "4a5xgCPi1FMscLHvYsa6o7cDU4c4MLYbWMXkRE3ggLgMWWKfSdziXANbXFYUqpFughdFufVy56RFvK9cmz426Dne",
  "key29": "ihcwdyNi5CLcx4N4KbqkvDt95JS8bPZfzzociP93kGfbsP5RdxfMa3hkWwMmNxpr3TRy58ySUUf1biE6s4vFPrK",
  "key30": "4V83hYRzDCNTJy9yhJ7e3eFszHMyhVxgyZ2bNy74v8ojNSxMVkeLP1UokXFZj5DMSLWfbj8tDFPPcjLcHoynnZPo",
  "key31": "zUrvTE6PDmuEbrZr96C5bmtH2hkcKJ9rooQCi2ghQTyXDpUujnNyaVsgYMoxbqSXExY4MjpN9YEvge5NFEhc48B",
  "key32": "2Rhjqj9R1WaWjsiXifpCo4Km99m7TdFWgciv87VwHL1LNo5Tts4jmkMoMLouSscpgUYZKHTtMjZBNVfmdXHCT6n9",
  "key33": "w9cSBaL1pUDKcLoG8vDrWfs1FBVjoyuKN7Fbk8zNYck2eASL9RsYfTsPFXWKTvsqhFV8VrXbEgSrXxxXKA4RUqJ",
  "key34": "3k38hqXZDo93d69fZYcDyMJunXBChU6jp7Kuyg85cPXNVyjVUrrS6FHdQ7ZChSqEMQ2MsQsuEEEhxQnMo8NS7nX",
  "key35": "5wPDThdHE6uQ7emSnUTda2pb2FcRMqYjCVCU3E7Nc4xnMmJKDScQ9jVppSrgpw83HvQQn3pfhWqrsERw22oPn39p"
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
