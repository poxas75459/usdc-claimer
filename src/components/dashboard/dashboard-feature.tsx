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
    "5ajaT3uCuGruuc4gJtV2GTevus7rhZJZbaX2zTREFraSMSdwVtJrRcQkk37NYuM4RatJLTQXWR1HWHJ6suAGuiKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RTgc92KGCCM6vSBFmUJuAr49uYD2XZaRiABJCjRFktMG7WUS9Tiy5ME35kRF9FhviSvwGqhQ4WUEZsndZjFVMAJ",
  "key1": "3A2chPNYiFfdkTLhARHBQgmroMXJZiNM3ozyYr82mfeitpepQyAAJZx9DCU2RSuQZJu1c2Gju4tcayKeYF2V5roH",
  "key2": "38K1hneKEcgE8BHe8isHBoQHqdgLq4mMbGSwCQrQ3ErEkKYv8o2iiJ77wD2RdPZK1gxxa6D8gW9HZCHxcVcGM8Fc",
  "key3": "5C8xPyPPJCR6F4c6gwWFNUNXxZjBm3o9jFKoDz9LSE98iwjLAzZeHG5YD5hze7TRWG4xBKjPCrwjBNHoS7XkvKFj",
  "key4": "kvAJpcHosfWumh73LDeYaGFBmhYcPvoekjLGjQEHabz68QdkWsHH75tvF4757H6cijNXoyG99o3Lo7gsG86Nsc6",
  "key5": "3wBtAzwFDmpShaPKFmezDN6oWV8evxe4dTy7o3MZnRA8xLNF4AREfwfwSc1Jz5sAzFsKvT8gCTEPPUzx4xhzNwJf",
  "key6": "5Gg1ykRwiBg5LJq7haAQVVvZAuPfBm8UFFgDmqoZEwEiAEyW1tjpPpeQJZwLdHXPZ4DtdFVyeeaXCor7kHuXwbHY",
  "key7": "4pku9MXCWKWbD4yoM6nqHSJojWsxEGUzFZiArP1yXxHH4qDL9iubHFZvQdrmH86YFnnVZGEVwZkhsbKFEfRb4ejR",
  "key8": "52RGdy4uE2jPPabN1dbCPDdzn2fxtYJ9WRRrz53ondx3hv9N3DfNRefmXV6i8TNGFH37nry1rh7qWdtzZAs5B1YH",
  "key9": "5HB7sPn828LurTxaM1sa5fAg4MF4v22H4UtcL999FaWe8X2FxEx6wzdmGVN5PDkzyrF5z7gfAhpj33fVZrgUFG2w",
  "key10": "523KXYXe3R4NCVbpAbtRh97mN5CmtCpZDzDH4i83uvi2dqZ5Vv7NcQNGUjR1hDKxyX44uSn5MVdrixboBcBfZfX1",
  "key11": "4BQKr4HAonJtadSUw3WkoJGGVKLNr34Cekjah216eM4EdXzXMZxNpLqJq3VYrkqToimxUPSXukegpJ3qewkpQUW3",
  "key12": "5TFMgBpEnc6DDXBdMJn2W22rzn9DHWBdBWPpmkBHGyKb9c4pz7c7vUwLBfdSTMhvEmF5kQtdudihSs3WaqFzZZ3V",
  "key13": "4vEaWWtptmReBjZ79pKcQEirDHHGt5mRWFWRPVJqXVrWomPZV5Tmd1Qx88YKDNswfLAdYgrX2AhLsTmPNSWrgWQ5",
  "key14": "3jbzkWmiHemL4MgB9Yf3iwP7cDb3hNtMPvLzchsRRi1PcsRyE1jCJQ2jcpCkyVreLCaCHGGvvx5W4WMMHX3oxNPx",
  "key15": "4JLqBS1FpaLzsuCR1oDJa4FT6MRuwNUB3KCzbMpJZmL4QLZrCN9a8CNn1v27f155WTuv6oWU9Pf8n5H2T2K2QuLd",
  "key16": "5Jn7H16gTLKoKn7H1qru18fi4rQSKKb33k1VKRZNdmGBcXMH1mFomC7p1hn34LP2uh77kEvsevdrgmohF6ZZqVJ",
  "key17": "3RfvQTuwDaFXYCXxv2Y7F1YDEWZwZproLGG9RyxYu1uMSjDL7BUU1D2ky8cmDBrGuJwAUsD3ZwTogckLaeizvekS",
  "key18": "2pzpRXMPdaFo35L1EKP8UDhPAGcHmAxkrXwTHZqV7to9KDHooF8AyxvRmhn5yYY9Bsdosizwmp5ZviWJqWoNB3su",
  "key19": "3xMBhQVsed6DWCFBBgCyFcF5ejT2U4aE7yXA29mqYi5frkQiqGBw1Zv6AAoKapPmrm77LS7LzmNKEbSCUoYHr6nS",
  "key20": "4MccSDT6jZbhd72x7Y1FhJz61RpTwfrMga6t9FPv6VnywJFeHtjsFHSEis8SVJ4i9PE7LxP25nRYsP3cvx53A7Uv",
  "key21": "2YpSPYq85kS2zFMUvRAB3qypf1u8o2nMknGmgMvoJGaaRrFkmxjxS6vToXDxJ5affAJ1CvqoRVk8hj6b6QQCxsYm",
  "key22": "mNShwej1HB7qMmsRLSVdC2njEKj1jEXUNntGPXstT4nndVbR8u3QEJBh2MiscqPwECrdEddQwZSPm26SVhUJo4V",
  "key23": "4d432v5RWuZm2LxAs1RxUV8WkT3Qsu798jLRcAVNTMGKKGM1dMnnowSbXK5axh7PSWwBR2FG6PCe3EU8j9dgM7Uw",
  "key24": "45RYCKtdFpm9DgpQn1uUre5r9QNAcDvxDEu8e3xGTuurFXx9Eeayu3u6UWEngQm9MZVYVtpDkJfw8KGtvotx7jaA",
  "key25": "4vyApwNPg84GsJmuX5xaqKAxPJNk5wpfWr8ngYgVEbzqb1KNvaTUX6CkxWJnXyZ255GWPEu4vSZNJx3X57sqsMqU",
  "key26": "2tLrtuTDduLkgis6qXwFGG7ztQyUeNZsgFvR5GgLvVWP7ERTuUmbhyXXiJsZxbpgHPqoxHprQ5YoFEHeqeq5Csi7",
  "key27": "3r3Xk6LggsUKRck8RUTGK3LxnhkNRzeskrAU4hPpEtYyekp7bbsuCc7aZkNoEPZ4JB1DZGa1mv1dC5N6A7dw8eYZ",
  "key28": "3efU6Hhux1qxZcTiDte75LNF8ChfvMp4LMoGmYa2efib9tJVTqsGmFLgNVBCbNkdTJJzJnPQ6KZsQKEWtucgBxpd",
  "key29": "2YRhKH9ituZoethPhTi34Cx42a19ueHqBcr7MzfKhvVbg8qAcuir8bYrUXDsKL5Qp58tCwHsbweYmQLVv5GneUx1",
  "key30": "5hwqdu1qEFYAMw8vb7H2XC5yEgoQPCueP8vcRgLU7c2swgDZopPS5TWCGL6xPQmDfLsYmmz52PqdQaxTHotAV4hB",
  "key31": "C7CLY5X9oqQa1dgRxoJKjEwZDkf3Mx8auiWqYUeQq8a5cwUU98q6EqXdcy5B74c8xDZEUX3r1v2Aa9qjJzy5ytw",
  "key32": "4z6ntVPd6SPfYaj41anFxoEUk5gxuL737cV7fdWBYzaAgjahh23TqVLRRjCWPSgozwXEmyJPCZsBrxmZPYXcYa87",
  "key33": "5XZFoz23L2UBPkoRUq3LQE7LEcUcX6rJZdBZyzA3zVVthC1bzmYV8HAskGoNfJHKJ9gA2QM6t4inPWbGqY2rJsoJ",
  "key34": "317pFHZSDtxCxbscAhg2D53rbbrEPeZg3mfk4QLARUDEZ4jTMFG82K99ZNz6RvV4y9SqNrJmWTqFRN2NP1PzZtR8",
  "key35": "2jEpKotJkbVqQRpdPccvSBmqK6qzwQtMcBdmobteas7w3WP2tfUErtKkcvaJvKLzkYBh2SHGpzMeDZvQURmHZeqr",
  "key36": "4xKvkV4RnLefC3BZZH8reb6QUddhGKXLZ5DMAc9MHxWsp6Z7sQ9Kq1ptDzko5udti5XAPEfJcDPvJN8QsaN1eZtC",
  "key37": "zjSyNW8jyCef1VFB48PBHpnSwAjW5KZ2qJ8yjJnPuETpMzXDaGDycd8w6bt5p28QVP4gEfXh41iWbZanSDymThb"
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
