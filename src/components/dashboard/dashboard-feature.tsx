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
    "43zVWRAxyepoqerBv97JZt2ph5oNHJy6hvh3eo4T7M5CUU7hNFhQCpBBy2L3BgBsgMLsPx2jX2A1AhzkhyWFsybb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63QPyChksQi1amJ2wheRENNg1bsoz6ZsUZyHTtuBdeiLG4DMCBoWzzCCcwYNuaKDWd4ZBWquUEokfqkToNUbhKR5",
  "key1": "4fAYzYxJzZHszB9LteW8ZPYneABNXetWSdxLVCkpgDKrAtABCPgPCB9479SKRiZYK64qJAW77witS1xVsjhLZAfD",
  "key2": "mEojjLBRsYQMBAqrdPPnQ1ZeGCBoHEFp2gHmXVBYjz7vxmfgjFfCUqJCb8aFRdX3JeG4HRwX6QrDQeF9kzKYBCV",
  "key3": "4ja3JqhR95meQ4sGzxW5SzPcp2wXq2nEbjB8dpus7fFvM6wMF1QBjNbpaJkWQeMdbhijCG4tm35z1tQEEjUPrAr8",
  "key4": "5N5FThwGnZq7DKFAj4Du2dimrbC7aNPFFZAus1umaG998wKWtLbyasvGe4ehFmLp2dxNvnafj4U9PdFNsho8xSan",
  "key5": "3S3uE3Zo7XeEoyVuwyGhoyen4VUuLtSDD5e3u68KVcKpy3iCgwf19qfCxSyczSsNWTT49TBTjGtmMPRqgmJjuYPH",
  "key6": "2mSBfrYzozdH7BYMSvYcdhcNUUL5pLwqVdXtR6Wyj9mY94PPPiJGmWfQQ88ynCy8xY3vKh9TDpTz2PveKVz2XUWX",
  "key7": "2HBQddhdeoNYEbgSDiS4awLmrmnN6mMJ1ZC6bCE6bHJ7C2QssrZzE9UuYwYuWvrBi1YY1WegAiuPFBjZ8hWBUd94",
  "key8": "4cM6jPZFgWKMVU3pzkqo33RQQBoLajDXgE9SrApfKdGraRnbpwaj2rAyZCEo7vvApuK3LWuSjB9PiSHDnxmT5Nr8",
  "key9": "43ydvg67j1YS5f38NkayqZtsHxVfbcFCQ1fmVqYGML1sEv3eZ4fxh7ZDq3BLXPksSZK4QLA8Qzin2ZwFha4i1JAv",
  "key10": "3nNVz9VSLoN7toKzmJUNEwcjiX3qr6MUaFLefQr4VgYiFFztU2GyQpj3VfdU4zdgsDZJ2AAfiP1Ma15Zq9FAc4RG",
  "key11": "NL9Mp8aUaydxoL9pcShe9XJ4mMxunKidQ6Tr4HGdyZu2sCzBzirCR2HjbdNYynDMVqh7cRHH2mt3BSt9TwFHJj4",
  "key12": "SwwpHTsAk7jJqq75YBPQu2V2nFS6hR6HKE2VZsnbBBpV5s2spyrAVRke7Aj6e1stdzoW8JDNJMhPanEYD9BwTnR",
  "key13": "41ssyXiJVeifR5FFFiGPAoVrhFqWzb7XvvNNFWK4F8AiwLwcqapRA67QiFptbTr76RhAqPFgDsPCNX63MzWf92Ct",
  "key14": "3hi8wEkzfiyHvbsJEWKH3aUgwmE1v2zPi88Ld9ZwsByXxNuMzckT5UTGTRE4C5tJX5s3NRT9ZUv3cko2n9MNRw2L",
  "key15": "4V5WkipEw7BK2hj93j1GZY3XzBbrhrMDLeTtDk1XibTEohwmtWtUQyLHzeM1AMqj15Z3zLReytaD1TtpdD7zGQF2",
  "key16": "35pmvsEtmfZh25R4RRG59M9CmuHNgQQmRAFgjPw28gqs8S5Ey3c379NSsHxNUFAcweFjpb7U2Q8KxgppvN1i7Cd8",
  "key17": "67Yt4CDcoFWQ7pHV1Ef78eCKEwY4RXwb5L4Q1V32qcW18kcvBsRYLyouRzc2GY7HKNSietZjSHb2yf1ViFgSbyfg",
  "key18": "3p5RNT8yr1V8QVScHUV5kLMfuuyxdLc21dJSD7uCiytwnVTpCuu3kggzhYyWTgHaSj852yh9qMGktELuxyQsCtsM",
  "key19": "3KwutJHeFKRnkmszrw9zGRs7mH6EoKUiw6p5GuXgXaEanuXMkyBFYjx9VT7YBJjjLJh3wMMrmNgrJY2e5iztW8sA",
  "key20": "5iZu5NuL3nv9UU7b4sFUn6KQeZj3B8bQEbzX7kBAxffxBvWyiPiFfE3RhnsQNCi5AKumoJpbE9DDTxyUGEgZvWXW",
  "key21": "4y4o8VTuK6ZnHRVBeZDHfY2PLXQT25HjamBprgxhgRTP2LuQnLMwVfUbKcTXKeBrziJdoib6qSyZGkWRrDYMXFwb",
  "key22": "2qi6dP2SyQThHPu8kuBnDpw2Thm8JPMQQgPhijfEFX9Nv3GC9yVrEDutX7qa2WGuEgNdSpgzQkrVd1aVMzqFARYg",
  "key23": "5zTH57xAq2TtX7jrmx2KdaHZfdkKWkgYahNGbRpPkqJ85KT8nWo16oEfVdzwobfa8km2Gziq4VnRfohMPPTRo8Vx",
  "key24": "5z9cwHJBGwvXZiNveDZZsntmLYWQquKHSwNyuHvia5ebpW9AexpzAqU9jdDfknjR4cd3VCGxfNAAeVpFpy3dAdmH",
  "key25": "33j4b6U2MQySjeAgPr4ikgL68gE7DnDGJu5tfa5Fx4hEmaWWAN5mWxJZksqsXmJ6LCF1K5iign8TRiyMnxyQyhZL",
  "key26": "5tmWRSUrvjC69JGGcUfXjLs4bvx46iA33neEnDPKdPKhiFhFcmXQcBPqbYExpFxA2TJpYWrsaMzPHJxawmBn51Nh",
  "key27": "3jsTXt2v97GN2DNQecimkGbouVHfaxdPeurJdrTqMWYa4szR8RuiLeb5SBvbBfYjajyoqJkhbpoBVqELRcyyQy5e",
  "key28": "5TGxQvRbYzpjCd8czdJs9tZb5WJ4cmkUtAYnVhGP61ok3KuwnFm2fF7EQnAmfEMnxkP6XTgRHFhE6qKYdc5dBm8s",
  "key29": "4MbWCdt8f6n9ipmAkTobmpeqgvcpzccnteJiSARLvsZ4jQSbRnvNXSyL4UZncsnzo2tBk7mXp71SgLcyxCH17Bpz",
  "key30": "g1rvxycrYRfEZKVHYzgWSkkXJ6xZejAUeCFFzUS6NSr7SHJmcKf1V9hApb8sG3ypn1SgwyFd7RgmaSgykCd86z4",
  "key31": "63hqscCd1e8dinrqDdBTZHwm9ZgUVmoUmSsPYkj4KJw2Nq7hPXpYASLCui5djoQ58k6WS6LbVdPY7B6x7261eWuf",
  "key32": "2VJj4ZowkHJv6XzBAKMsXs4AcYQEiv9bzgSvNCN8ZFWKtXNKP2Zxu9JF7mv4C3RZjxYwNJAsQsLezNaRviKLobtz",
  "key33": "48kYDcJnr3CYMFi8cGVLKYzJGJsuF3wmbFAfHX8Xq9rXKmLaYqzEnWP6Y1NKq9yjjAkHgwP8skQ4SiuQ3JxzH1gu",
  "key34": "g9DPknrm63JMyx2qcw7VfeT6uZBAzXUzHe5j6GdWsoa3FMbKtHAGkeRNTDf58S9n8iXbiok9zmtxpZojBEUA1d4",
  "key35": "41UinPa3nx7hyxBP3wTnx1W67xYX7r9BXrof7rR75dD9LXitH3cQvVTXAK87szm78SZr8e1DRNASvphLKFTqWu4f",
  "key36": "46ifBDFdNcKqcuMjwB8gYErUoVGQkBc568pZVHc3WNL8EkkS6RaugSKnJzXtX5YjpUMCm7gQPeAgheMMFGFAESLY",
  "key37": "31H17xzSMxWBrpwUXm3K9Svbycf1LLTktCZw4PDkZx4UxTKS7vHAx1oeEgea7rkU8NC9nezF46dgSvcR6ATWpqGj",
  "key38": "3xFbeaAxkHSsS7ounw7tSph5YN86iv7E1PbfUgQpssKoFHg21Zf7sKtmRq8QshkJuTWafiBeRFNLUq2W1UKYyqc1",
  "key39": "46Ws6ivRKRTitxpzuNqwkY2ivaSYKywQAuX3xVpjosFXe69fhQvvEAuMBMyMsQZfcPcrgwhoWXxUjogWRGN5VhJX"
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
