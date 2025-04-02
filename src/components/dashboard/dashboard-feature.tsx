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
    "65aK1MZhedwPrswUP8M5cSQTkt1RFK61C3ADrEV8vnt6MvQZbGroZqRhwaSsFBMuf2Mfeo2RvUjNU5d1FVx4Z1vG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zi4NyxCyMunkXCVzUbwKGNFsk2xNgLTwCkVmRQbhuVeL1TnY9VvDSd1VcAMAu9jvHqj1Rv3b2c5owavU4YNNpcq",
  "key1": "5xg5KBMC5GT6vAmxS8rgVJSK2cHjb6R98WodqU1EVW4HLi65oyoHECkz3HnRSeLGXRAg5ppfTsNJ5BawrRdYhvUx",
  "key2": "qLuHGDWFqcX8PCh8EFMeHyPJiuBuDknReF5EJc71cs9fh5dCSK9RbFRcRTaM6CwYPHqpya4xsM3DeFcE4NMip2B",
  "key3": "6236xTMEkxfdubmTgKXLjWnDqLQiBGLufLzBmwZgh4heYeg9JjzrL9pDik6MPQhScXq821o4mTRXkQWegUma4RZA",
  "key4": "3YcKipp7hZSMH79HnQaaYhNos9iA26mGDH9AA5dZDm2KezxxPXmGGEgvtg4cZirQQ5UxVAcZuW7P2uctgmhS76Xm",
  "key5": "2AMBEzEpKh5fHWMxkiEAaaoNPVkh8V1fagmmpZDqC54KiMXqEHA66zSmTKnbpPKsXbiZDTy7TwiNRssYQnZcsGwi",
  "key6": "Bn2D2PLvZqKqXRt4ioL7pRLtxxSgJdSbNzXv4vjDh2VJhikbAFMu6tsj61M4CMpU7PophBBBBiBW9qMgrv5b6R3",
  "key7": "XeoU4q3c5n1pQSTCSVWEem696wPH4ZCg8CuDssrpQtWaX4QNo3pWDd5jJQFscK3XG6UUxtr5rikCnubv68c3k24",
  "key8": "FBx7Q3CEq3mU7vdUoL2wiPoh15R1yXRKBa2jsdY9RmKwXUGVrZU5Jx9Ayu43GsQjKSobzynymL3Ea4YLS1pZDAv",
  "key9": "5ZLSxUabUGg3jWV3kP989hcTvszHyb22LWh23yybaERaogx4fornU8XiH7saHDRiMfMxtm871WLiFzs4EgSQRa6p",
  "key10": "48mjciCQ1bP58M8u1RQeLdhfvJYDp8DNx7n9KqpQzrQD3TBvpefjvv7u3JHcMhunwerdNdjWdmQQ9yXDhj4fAtdV",
  "key11": "2Sf2kkgw2Jkan6bjs1rHMbeGHCcuDiEgMUYtmXMFYBH3EeqLtoTc9H546WkbvyvF2iEd6nxM6eKudKogj8WLKaYh",
  "key12": "26hpS1GFCCG3PD1RbjcnjKRySaQAFb61WchUsaP3sUUqjN1EGzXMHr7s6YHcuLuWpgi1Gh23dUKjvsk56faQenXd",
  "key13": "4qQ6iCcvA75yx8i6Jzb8dDBvPUdddAX3uKNVH1xuxtnNwwRewet5hjHeMNAPsecdqxWSwq9AFKxVJzXa2MMy6nQ5",
  "key14": "2e4aoBDbWxhyjdceZzbwU3D2WDoqCbtxzxqCYZUnZzEyHWCcL4iVF6gr7D3U7mMicxBW8TKoQk4varT74EMwWRog",
  "key15": "2eTFqMKaCEmYwE1XUmAmGquZGATzaKRa6Z6eChHmDX1JizaQgcHpKt1N5AiHp5vM18T7GxDpP5p4d7zy1a8jheYa",
  "key16": "4S6ReAWiUm8uStAZqJEuBQzwZky9oPa7g2Sa3KsEfTmcPRqg8zoNpuCATVKvNmhLLS6EqVVhh1EtpF94dWzZehd3",
  "key17": "4rHiNKytf5yW5Z7bXE5kDQ4aBt5zCQBvcSJLMvZdop7pQBC4A1mHn2RA2bQL8ad1fQ6obdsoVvHNhUHhw9xuB1H6",
  "key18": "3wevFnk9j4xNLZfJjLAaToUvDhN1CQgRYHf5q5NJnxxcNzh3rDPisUhxe1N3m5bErUFCbmXHBV1LzWTuhjxthN1m",
  "key19": "47o9Dtj91d38ALQw6J1LfnMVqu9NCK5Zq2NuThMRfP6zRcYHeBC7ec9vZVYy1vJppYEoUhQYdayAriN5sTnSnLQ7",
  "key20": "2rDqCCbPeLvCNpmv58tb1hknAsr1NTJzWe5fxxqJvaqGxh9iupfF5q1Bg9qcWK1YCfGx7bU2dVWNt2Qoe9o7rPUW",
  "key21": "3MwwGVD8AYLRvmP7nDzBRLQNKo8ivqWoGSCVHRtKk7L3WUAxPvZzWCJEimYmTycx3yq9tNFHcj1kbk4vswNAXWXV",
  "key22": "5TpWZTHo6VpsPNngucvRN6Ye8YbLdWoW5X2YP8ZmxEgMx5dz2okkyb3nqG1eCx3bkXRM28aioY6VnFyQ2asAyTDR",
  "key23": "3smbmkGpZpSsS58qqbKUJTcaE71Pvk6H8LaZdmQ5hjt1Q16PwFF61FLNcZUTK66o3j7eSn1y24Ybor15D4bTgjn2",
  "key24": "4119BHMXt23GLW5kLPN7K18GKCWpzysG85c3ggxsEH8prgeTtEFAS3sFjujaLAHWyNtLSKUWkK3yXExC2jyM7ikg",
  "key25": "4rBtTK6kMDxG85VhVh1iJxfJMDwZiQmknAmrRmkVG4P1vNSesLngBkqM5UiJPm7ZihHfgteqdUyYWr8xPxEiXrfj",
  "key26": "43o45yQ1eBJKm4y84V61medUYgjFCUEsyFW4wzKL1M7i5R46cuTeTd5cZAK3yrw3SoZMbB3zwcembzNGiQEnFx9L",
  "key27": "3zwwarb6AMw7aNi5yxhw8YNpoQ8L9EgJcPazU4wCXj4FnZ94VDqJUt5bBnAhYPTjy6FGLVq7AKwiC9J4K34Z2wge",
  "key28": "LJZU5t68PS8UhAEbdqL96Mc8HHjJ5c32bRWiUENcKt2oUxoUMzxbMqm8t5WUdiELicJ7g1BszZZTzZWsxR5zWDk",
  "key29": "4sgNtsLmKPRWMaHWEHhi6aDumsMCgPQ83egDv2kttdmVryUaihv5uxbNDLqS2KbBUm4JkQSNx1KtzqamhKuqLaSZ",
  "key30": "3L8kt5J2hWi4dLD91hemCN8zdQSBKRv6AaN9awZjdSZMQxaEtPK3mqyHWbFgLujhh6EEhTwRUApghDvZdBCUXNNP",
  "key31": "GExvSYLwc3zjuEy5PVLnfCWAb4LteqyrBA2ckJYEURepsgnanrwaFSnm5RAH1H64vu4HwSP1kuRgA1evHfFaUzh",
  "key32": "4ECejsFyWdGkpMEbtcsnv115bxH4DLD2pgCewPGpxMLVDXhcGXJnT6Nc7MKqf2snRQdToyxAyU5oe5vemp5CcuWN",
  "key33": "2RQqbNYXCY5YdzePY6s8qRHRXG3ZVoJ3Aj9gs7MgEEtsTJZgitFrZp6d2qbeeEBuf3175bLBkoaRhjcxcLnjyh1k",
  "key34": "4GdQrCX3gpE6RqQR7A8Ez1Tyo4ZRUd2oqonpv67hr3vX3HAjUAad8QFHpsomTJRoHZHZ5gywhRhQc18Gi7LhK5gZ",
  "key35": "5FdqPRQ9UsvShWxKX1VSdZ9En8VpwvZCgBXwMjRLKkMysycoZSAkkq8nvrc79Kmr3rSMUMscPZgmwj6AuE7YGrVL",
  "key36": "44x7bgK9N2jErG1NGYtxSUz5SDADZcA81Er1nJMsPtn2rHLekeQf18VCf1B5JqFyLFrToCL7Zn9Un6rQWJphm9sU",
  "key37": "2fnk3nY6KPTpQCfidBCBbh64ib2VnS6txjD8gB1q86agacESETGipfJDhPXs4e5BSQdMM1UR8QHTFekJgYkDDLt9"
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
