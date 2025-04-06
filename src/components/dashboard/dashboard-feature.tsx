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
    "4GRreCiQao8fHh1YtZunxQMrZaYyuet8XkJ2T4arfby9RbeGpn5FTG2eX8tZdFTHB41iPwLwQ398fM32bM55J5JM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QWG4jHssXxpX2DpeQLZojYvE3GsNPuw2mZoQ8z54AQ62L3VRVEVA1JnKCEiJ5MLCpkGbQtiiKPos6Vcutosfu77",
  "key1": "VXizRdn9VHBxxSCwm1fvT42VsnibxxqZrRDH3PTFkyj3ZP4B8PZFvx6ccagrvWb5JSAKTbgjDY5fj1jAeoysn2h",
  "key2": "o6MLxVVxvnyB3ELPeP1UDkeKV2TQ4YXhiQ5yp93w48aDAZ6d4tvYH78QDRHKJbo5kupPeY8xzzGENrJ9By5ceXu",
  "key3": "4wwSWTC4tmYgYNQs7sxrLQeArBEqC3idx4EBWUVDfy5Ag2MHSDanqV6WoDSPnawSezpiwxGXr3o5SMpqEeAekCJF",
  "key4": "oJa9vpqtPGqF1pWAhQN5nRdD81vybQYiK6Y66jFj3UmGTHUywVcHinVWxGWsTfywBLjyE37p3MM1DFKJGTGN67X",
  "key5": "2N3JtSpCL78c1u8pZVY2sktwCUEdBoxbJNvzd1ZutVw5mCqbPMSpw66P6UJqfuyjTnVWPRcj9uZjXcCGZAYfvuiK",
  "key6": "2WNMovYTQUJ23tsXLaUdzBcB3vhVGbAd3g9jUoq3m1J5w8NsfoQReMvPw5Z2L6oLeQAGNUbGVuWLQc2rxrAWLGXD",
  "key7": "M2m5cDgSA2HhbWqfF5d7W2SPg7AFyZB9SeBqTejCnKHDTVJsL4PfXHn9DsHm1XZFEAzQzVSY6EerqjpTH9KcYWP",
  "key8": "2HoobzqDeX98481LU6GGQvvmivTTXNpsfyc3E2E7uZLoGuVohAg9kVGzYBT9Y4XQg7JXq6akWNko8Qr3Qy6M2pr3",
  "key9": "5mYs8KzuY3BTEoebmCAN8vBsLsqogPVN6gsK3zRq4VtRE8Z8EuaSx1a4sTiqNExnQqn5UEiRVs6vub3gLRqeozY3",
  "key10": "5eyJTJGd56MaUg1D4FLm9gcS2EmY51SaYgPDkEKnHSJe4sD9htw8u4yR7EHGHfbUaxWEbCXKsB5k18eQEHsLv7Rj",
  "key11": "4Du4GP9Y9MMaYKd46wUTx5XTRTQEmnUw7ne889vn1Wdtz5ZfPVUgT8BTxmvwFpj6zvq2anGjQ54v2tTvkayKq3Yv",
  "key12": "2h7QHkJKpQeB8MCvNW1XwKXm91hhqcjaw7dDRK9m8RKtDMhmeYzUJiHTvoGnCgTqyG18nP2RbXdzqeTtc1tN9drj",
  "key13": "4JMm5ETozCJYrFhqBeZ3eMzX2WJ6rozmjqJPsr3ZNquEy19Jifjm6RWR6MaJ9Y3jVA4wktG8urbdB99vx5ZfR7ZE",
  "key14": "nW1UXpjU85tfXygzqCdYu4YUmqNU2Td1mpRNkkDDzzJ7SbwqjfYMpVrXoiJTnGH61Bj3ttHbtN6gx1TcsDhFqhw",
  "key15": "4u7egDigpK48Sigpbi7r7LVUYJ3J7tuRd7vg6ZQYUAiWhLP68Y9FqH4HhvR6swAzH1tLedbcmCiJyMDhXsiYP94b",
  "key16": "2KWzAYztfrpWpn5CyDAs6he4msKnwZwfoGjWjdRKQSPPQFFuuFb8iJ67hpNJhqQX531H7Th7X9TvjddDmSPodqd2",
  "key17": "3nF4REU3ujXkCagUeP2wqSXAAsNWnefVjP6qYKLcdnANc5y3F92SXyrPs53uTjqnGb2YYdhEvYhYLNz9JVmc2VWU",
  "key18": "3R7zRYsWGGbW3rfnYdgDhvf4STH45jmobKKUsND28dogkdDRV2bbqwxzjxufUj8RGnW1pJcdhpooajisMVTPm7gS",
  "key19": "M9MxpqFJVPHKxsrdS3tYzbc6kRuAb6BYdDaCjyzEQntDr2MnEtCx9wmLWMh3EYpNCWeR9cxabVMYKsCG5NHiRAz",
  "key20": "3qjYdwxisGHE9uUtdNVFp2a29QwJ3fckMPpD5Bqun6wbGx9rXLd7xZds31bXiMmLFrZsPxjXTZ61rrhqJbYNKGRp",
  "key21": "X2BzRqbzdb6rcqQxApGoHxAjsqob7nyjdf4TCRpBDUvCPcfz1XSkpnfRHyyDqqtWKBaBMqjAxteeBkG1jfFnH49",
  "key22": "5dYD5mSuNujUGKdW3gRiD9SsijaJHiWU2sb9AzcNb2RDoUpoEXh7svz6P6MdkwAzjbSCCQVEkt54pA1ebGJFYM19",
  "key23": "3MWsjmaoGQGgmySruBGKHirNi4ZPDtd9AfkHxF52XSo7TKwLont5rsdpAWQaHLo67jSJakJNvvsKYWEcB1ssw9LU",
  "key24": "3oFZT8MoDHw2RniWoM4LQwDXAvqh1zPSwnARkfTrtPkMvw6X8keErf7GA3gciqbnHUzYt2qc8GcGp8Nz9HsmP3mE",
  "key25": "47ASbmKmYTJs7eKPyeEEJJP4r56jvdLWdB8rH5kgXVkRC3JZQQ7qJaiAi5KaHbMABbk7DPLA3wQgDNVtSPQHhgNU",
  "key26": "AKDuw5YH6X8bHmCUFv48Z1XNV14aL1X1e75xQejYgvRFtta5JWJGTn7MYRoeyB34XyaWHFsbHnSnTFPKmvzLUxU",
  "key27": "3nUn3d2uRo9rv149vdPNYhKEsCJHAC4JRNEKWdMwZhUTr8asRqir2pnwotPKvK39gMgrdQfD2RgA2iEQ2in8H41f",
  "key28": "43LQhsCaQnmVQ2LVPun2YTK7uQNMK7aghBScg9wx2Nohkm7Tr3tgmo9DndpK6nRxib5VxVrYMJ3hAggyQsCt7sS6",
  "key29": "3vAnk8zhDNcnJWPb8oPkmf1cguDXtxp1SynBrKxhAL73PA8YSEAyj4M9jJPYw8ifKit1TFLVQwLoEo5HwEcNEPMW",
  "key30": "2fTs6pi2hFCdemirRQxM3d9xu1uXVxq2XF7RtfuW8oUFJohBVremRMZNs1q1woKVyE2QGjLJBppSnd7wmZ7GBEL8",
  "key31": "5PCSx1zLMSgWgr2NC8YWbQGxchkHPnyhsHKyT4rFtkYwY1FpZVLT4rbFBk2i6URNvNEVX61mJgMQaDkdCDPKdpam",
  "key32": "42R1ashTw1U3jaAM4TeZ1BJQ2JoaquKwfJyff1aEE8AXyVKWeJJetfFYZEJWLma2SGy7bWWH9JFU34JG2csoUkq6",
  "key33": "3bjGYoak44ihgn4hubAmVPv96snaNVuA1r5VfzvjB5mPwHU7xW79hWzKbCLH6Cw8jsh6wQBqiHzZCoJFmMryUshT",
  "key34": "2qGLmBoQ5We9rUwNfPHmpuoknZQiEys3qg1gRrgUqJyaMzkQSmGhEEgZbg7oFqcqRvgz4ZrUHpUBULk8qmqfUKng",
  "key35": "LEP8yu8Xes3btwXo3sE13J5RXzww7N6nLANAZswykJU9Dpa22NUmDyRizFXespmyRxYyzEhti9DpuE2xzaXTrFk",
  "key36": "2RwuBqwcWvSct4CKuyVVgTvNTxSpizaqjEB1ijRZrtfVba6PUiNjvZRHuwWdZAzawSVrXDRVXdkojhS28eUBXV8W",
  "key37": "3yKRqqWghgECwicvNmYw8179GUYUBMQeENdUnQbJ8dg3RNr1BeBkx62kXkeufuUJqmTesssWPpeu2PYwiyZbdoHB",
  "key38": "5LQsFaA5fajGy4aNdstk77H2eEz5aR3q9YPeUuoUmnfArhNXU8i4Ua1Ti1WGbkoALoCgWLvZQTdFDNKuq48zYYBC",
  "key39": "U2AJH7L9i1T89UZYeob989roqg2xSrRJPsJACoUfiA9mdkEXuvj1Pyz6ekuF7Jz8hQLHm2tusRvNE7qzxCLhQU2",
  "key40": "4spNJCPjTiuKTp2uZWtpgQGjTzzoPf1kwM4sQjR2TUdHbiYk9pWh19AZXVxvpHHhSdWfdEqNgFyc145ArLiT4zbw",
  "key41": "2hoGrPL4hHfF3wJkGmvHZzmMgaNbuEKsFzwCFAcfmmioSMLPxygWMnMGJoLY9RuYy9KRcdMVfb8zVCRhj7Hg9ZPe"
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
