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
    "vEXmvqXUMQYqeqShxYLdisN2Kiwqw33SUigDWRegAMfLJiddJxEZVx3FrDhB8E79Yo97STvAgv8LNT318eMMTEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p7DJG7JLxLs14NjExqf6WHnqxGxHhGr8jB6XqgW1goZUhBCzsrLyKGW4VL6JpKN3zNtnX3L3oymvfHCMYPkThr1",
  "key1": "48BemRUoSZQK7ppEtxtjhqdUAbGk5PG8iM98vJNzYHCZwxTC582BTzGJCujsrrWDDWEpghrt6W4K7P5GN1gX8cZd",
  "key2": "2yL3ubxnj7jZN21F29qqMWPRG54D1KpNJBNgcuCeAkMTTgjgNLE9CsfQP2264o3QLmeGUDAvuDgr8ZkoZwwcwNPo",
  "key3": "5hA8vrSHttR9jySwWHsP9UCxxKrADmeSxH7VdNif4LC2a2adEdveH1rH6F8y8qAAFHuXcGsJmaE11N1t9SKhCJye",
  "key4": "3HTa9vhVnSB4LLphXErxvmpzyq7MqNHPns5ZJhTWcZrBTEnqP9mZrCfiateZ4P3U9X41RLSUkdVnSmrAXty42Jw9",
  "key5": "2kV5n4NoB7e5wHPXib9GzB5dV9My7NKSsX6wzr5PCcYs7RSMZAseiGtqb7TSdEVg2bgoeMDdobJniFz23zBSSEPS",
  "key6": "o3ddNEroaPG8EASCaeAjyr8Ead2Q6vQX1PCy5P3Tt2kEb6YuYLY1w5m6tjzP7tQgbTnTbi1eacvxVPW72ZsTdcq",
  "key7": "5aW4vpfFYSBY4xiaXJiP9UHYrJJdZcS8bbdarPWew8gjjrG1fSoqbfaP52Qhmi4eEVKjHpJKNpXn2oU8QoHzP99w",
  "key8": "3WNW13xYRSYX6FwAZYDFAhB9kaYSB7k3iHmbLkWMtNM78PKL6ESK1T8nSyFreUx9gzLsjjTPGiJtzaYx5U95SfRP",
  "key9": "5bi3EEHGYTHpbo1ZWaoQp4e66qysBLgGZiA5t5CCXMpnnWcc1zMBsRntArNHMyfZWwTGEPbTpByHDn8hjee3kAyq",
  "key10": "5qrFtwZSFSzKZR6MgSEJGKnShnX1zuJVqLaVxMWFbTxTRLK5uhafVz2fR6KcGdKzrftHx1cYM63JaKykoKHeAR9g",
  "key11": "2xJRLnUy6bJZtXXs6nycPVCceueAVkrYyTtbXJ7k5Ydj5KDzTu4nZtLfm1mJUxo7Gnr2xhs1HzX2QYnfJR7iCwne",
  "key12": "3YFn471akTC55cLHxiPKmL1tJKUxCqdQnkfgAYwWpLKTHDHrgdKL8BpvBX7iFnSCfX5SLdsnWm6Rmj5s4GDgiCDm",
  "key13": "7SXV8VEbysWjt3XyJBZon5DGLgxtdrRry8n8WV2si7bcXRutxcLpW9sdEttpy7S1Nbujg4a7g8FpwLmk6wFogbp",
  "key14": "xDVeBp8R58durYKJ1ZmNWJ3S6yMJ3mK6TE9MN3dfdvdVK9bhG1W6XuqvWz6sTs4RvdTS9MJTTsVK2JXKJoE2e8q",
  "key15": "4K271jeUcvGsBg51d41eRBe5yFeEihtErPMYD3e6ysKQ9qvV2ztwi1yjmvH4eRe4XS8NLaY19kMm5LS4kazbqbPR",
  "key16": "37UQSpiXQX6m3pXC4Ho8ychjjMJdkxrCYcjN692SZaREPx1pUkz1usnfSZczCLmuMroR7KyDRQf6z7cEp2oBoQKK",
  "key17": "2tWDaksfDbvTswUqCLmhoKZhxZVNeynHvfG81FHtcDgVNanWQoN1DAspESfwVW74vN1yfiSZy3eE8884mzFkhaSn",
  "key18": "23C1nn4kTCbXKJcruB8pGRRkEnfee94ZR2BWFVjLoxiT9zE3DGfdvqDaeQTWTXjerfoUaZD1rPSzjeikwok485ED",
  "key19": "269GRurNgUjoByRMyFXHTC2k9Zv3j3xikoudqcZFwiFjKEP6UkjWicBEqB3tD2icGwvuwLZfrvbBuq5RFRgnoins",
  "key20": "SHnx6QYXBJCpTF6jJCFRDYMAgGr6A8PLW2GVxoGZjw1uwxRJPMthSr52mkfecR6qskm2iv2FN1j1D45Q2QwmKYf",
  "key21": "3JXLBLVDQFnr7bdPPN5jRJbdQHDMLRSzLJx7Bq1JhBWiTtZdiH6DihCvoccHALQErKYeQGF96QyVSY5d3xCeCKZf",
  "key22": "26nBDXxmsF9JkX5jMabfs65jXp17FZP7YtaTKrWorJ6PteidMvKRLbdYQHQqoaxuefkYkfVFzKLa5s4T9kXytCQx",
  "key23": "2ZBuUWsqRG8o13eRiP9whRTeRiV2NuyqdZM3sMJArJAiZA7hQD21EdrmrV8DLDx6Ac3Fn2mmWKzotSbdAkWXaXVu",
  "key24": "3Be61sgn2pcpRzxLQRno1AfeDvy6YjAwvMN5ifpWhK9HsQrVEcuSyUD9nvRvKWGetcFinnL76mrPdTNgRY8kCTcY",
  "key25": "51HNaSpueJiz43eFzfRsVq1eGjRueLsejJ3WaFhsr92kiSnGFwVjzddv4h4T5j52mFWMrVjeVhV6wm12VHNcvXVK",
  "key26": "4aY8bUNhz2wigWiQjkqAN5ciqTQ5qYYvdP6wd8K13xNMPzzf2KjimBcowppqU9bETEDj87HDZG4y7sJzqW1L1S2T",
  "key27": "5cjZKpBezBpBzkV7jPjGbBDCEQCzryDNvbGYRjYSEv6PfY6zyfG3gGCmuAjxjNC5gyXzwYouNyk36D1FTsDxnpcH",
  "key28": "4Acu3yGevBAQbgQaSiQV57y12kih5VLoCk9EuxdDkU3fFm1n7khhXHdxahDPUNZoehAdx1uUYUyQ92vkczmycp7G",
  "key29": "5np48q6pJuQ9xNdHv45qDhXifmrFFi691etaA8S4QUiGUvu16xgKM49vvRkKihHzgrTjScK46FzLf3pSpMpEs3Xd",
  "key30": "3Pog7LjQ36d3Y48jzpg5ytXHKGQSy8LTw6UbeUb42eLxV3QM6UsmSpcPotwsQwcwdu1KoR4ae6rjTiC4Vnzdz7zU",
  "key31": "3EzymUu5qstNFXgwetH2NXVRS5nRGQRax1qsPy9pN5QGewH6tQZA4PNg9DJSmAVMbEKefPnNtQF5y6JSUtjnMPiC",
  "key32": "5Stu4h39nY5wckyCjCvDbZza345eLzU5ozi9zx58BW6AVt6osFQDmhBEwkermLLh91L21SZDgWQHowzrcSepTNsw",
  "key33": "2tAo1B4U5BcnW8E141QxBkc4jUnMGscAtoeqEZMrKEd7RHTeFHY4iwr7gFSUsmX7oyhMrCiLExj1zPJjpykYAMtf",
  "key34": "t2h4o1ro8yADAaqxNXZU8vWtYRtJepNm5phtNdm29teeyBut1vPnhVbvAW8eLTEkekvEpSdT17meCaHmHV4ZrDF",
  "key35": "3XCeJ5PvPhPTFcgeQaZ75Jx9kc57JXDtWNp8nAggoApK8kaZbDGLD2V9pkUpbShRog6oNg32ZkzEprVwpbwijXJF",
  "key36": "5HajUKQ8dwLwgrcrHnVrHisn9RR5JdUvTPg4JJNVFruxtPo4jof6vELosrKqAA8nwPhvoD4nXkjixpwpEEvdGMUa"
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
