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
    "5hrQgAhTeA626QaL7GF3MkN45eAagc1d5vVBPpR8v6a3G9naiPcsvws4pmNbriRJZPw39szsu59tPkxFMjHcEQXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AaknwoFrS72tkn6WK9nhJ4u9Hsu9MGG8iHXARXH8Pv5vtvEKmyL7SsFu6BT6Z4Sh7BXM5EWDteE5JEisor9nWEH",
  "key1": "2FGJGVqjFk2H2j53wBekUk4ouahKZv27gXyzeQnasgBRtWnoyVicjaJfPmgf5LtzqtgBD4eodbadLsscCf1XP5i4",
  "key2": "2FcQjawZ8KdVmbboq6wpA62kWCqcM3xHXXRPxjVEXWL1MSsvatJR8x4ydHdo2psXnP6XZJcJTvDaFPtS2Px2iuYp",
  "key3": "43TptuzQQ1MiShAz3U36FaDXacbp4WpjxmipqbfrUUV3EKSSkP7ZjNotS3ptiNy1k9oznwmnhnPNF9n3Lo2sBLvJ",
  "key4": "5Jn3XVbubRcXMBLbAxynsDu8pb8mqKt1vZsgaQTJFw2rCyojYDhLpWEPtwP2nUWEKdEQ8VAgShqqhDNpvBvQWoSs",
  "key5": "5SKecxa1iZw6oh46Ei2NrdqWhXPzH68vRj5ZaM22kgbhdMPxAL3KemMpQCZaBddaHgH6yWyVMuCt75tWWKT2bjKd",
  "key6": "2aKiGqJbSk6nku1dLqLtTAmXWudHVijdoDkUEjAeD6e4gLFZcMdwPKxYqxtH9VzqzDawiAtjHfvTZ8ByxhUJWriW",
  "key7": "5V43BrFKjfqDU6ZWAfWakyWKyCWhsJrMxqWLJJ7szmREkpis3W1dxi1XGRygoknBxfPwbY3RY516Y546QH5ZZ6Lg",
  "key8": "3LdwcXrrhGk94GLmCuCWp3vsBaYwasDAEdJ3qwUQKPod5rNJxTHGQncvWXcxShvFrVSbxEA87GuWpcvz4MsXne7p",
  "key9": "3bYzSKoqUiT4mQZQkS6zN9qvBtmmPW8fJ7Ss5aJtox2zZEbSfBJGZkEywhasgHDoxFnmKkzhsmz4L8m1DSqYkpYJ",
  "key10": "3PCHuGTC3hrc7acA1xezjy86qA9yzdDhdYRwq7bJ2Qo8CAAfSkRzaDijgDSFE79vB19YrX3XEGz5Ui72hVq8sUbf",
  "key11": "DSVy2FnBeJ37cQHtzUSNanxoSdA7dBZqErpJS5vjnJMqs3dfF17SELSH5BtXe3YzuM1xCbUTExkeT64RgdWgukX",
  "key12": "3eAD1ME5QFw9sxxeVURHGEqwFjfEe61XTz4pdvsgfSgvprJ9fTvEgVmgCzgir9uxLUVg7qvt1FgoAWMgh1oQpE88",
  "key13": "5X6okQcbcEB56f3BrsXMYwAeKAJ9i6Z44fr5VnYzpVJoBf3Xn8sHjVLZ8knwjVe3zDLjzHqFc8dd2HbQmxgEcTPS",
  "key14": "26WKbz49MPe1XAxrEV4Ys2uAie5PPNjWpy5P3MK9XQjMLhyQYzYPrbMpcxSk3MqRNZrY1rBuJetGmMVHNvXuVf8b",
  "key15": "3N2LqMjYEdVvtyspVbZd5V7Jk4VWZqoe8dohkwbbJ2DtHGXPsSGKnaJz3aMha66LK8PN8NUEsxiXYAmQNanzmpsJ",
  "key16": "N8G3gHajjrZmaeSZiA9xTmixPuygPNFuLqUiLX91xx2X4L2pMPeHHJJZ1WDEgUQvodnXgU4XQzTMV9dGVwDQ2Ny",
  "key17": "5SiBhxgLTBpmWV6v3RmhKXv9WLz65v2tGiwk1SkQvW58631Yv9JVfD1GAzX6bDiY8X81oTGWoMsjJ6PPPdTohAGU",
  "key18": "4wDwsWAMZYyWs4Cv8ECc8hSoJeBHiBygMfFCc4KEM9PzFsAaPUFrP7P5SpPt5EX8onTaMRcnwJyWTnfHTHTcvwSe",
  "key19": "2Vom628wyWMtcw4BiQenoD1pNtjqJSyZzTPHsZeBKWGKerL2txWNvQk6sHoBL5cScAKmwC9gvuTLbLSLmfW6gSHu",
  "key20": "2EUwo6yXVbyp1EnGBwJqaZ9QXD2xT2rxYNkwSnNbg1fN2ohsChYKfo7sthPjCSCFUeK58pPvSYsushZzAdZWvCZq",
  "key21": "5nM8W86DrPQ8fAKEAzsYC39NYx7vhmt1fLoyesYwxkKrYfzgVZFvyPUrrr99D5ZTpjork36boV5gHRkvonNEMbbv",
  "key22": "4uhWGPBQEroZtqDdV6heYyKvh6wWq9SG1jW2nCKizShP5Nqef5cGGNTYYmhPDbZ5ofEgVXyLrvossYYq8WGCsk5p",
  "key23": "25rDxPpXx8jRDnwQxnHmqtWoMbnNwMM3mWj27LmpsmoKu4CSRyrPN5BenXviFZgk9cim3W9ziyRFCWJBR32dZMM5",
  "key24": "2JFz9depF8qbsYp6YPnkPpZykBba8RmczBscridqnzrheNHpvvsuYDXsxu1PoruHLXSN3rLcykYV6h4KT9RcgqxD",
  "key25": "3xq9a57nWs8hrVovmqAwhphdfJaET8tM3G1313P5nxfGFehAyetknNHAo5QLuWNKWK3XrfCeurLCj14dgY717Jqm",
  "key26": "3k1p7vRLG147ZRTkWVi8XmLN41m1qxktEjiD2intngGuUmiYvar8vNbiX7rrTsK6i3YTHL87YohUescL1qEgR7xd",
  "key27": "4pM9M6P3E2kPMy1nHRA8UvdNzPssvKBHcKKBVpk8eXPn7pi3WDfuT74Md7FqSgrcUdMhiFACHCfsaycvNPMQYPg8",
  "key28": "46junz7eJE4hsCjPNKQUGKLjKRczUXG75G2iu7hqpZCqhvj1g74QpwAkHC5nzXNJc6hAMpk8bHK2gYyTCrsbU5qZ",
  "key29": "53zH9P28acguFoXiUYRnpZ4kpeVCJpjsDBUZ9kz5ap4cV7bqjcej3f9km9EPp7dw8MkUmjPMmMoAtQfV3ewacRuT",
  "key30": "XAcFU5i5bNL6Tki2NWgDXcQa73nPmQgVuepT79UKqaGWdupKBMez2eSirusejuttDq6Zu1jBQUXJDFNsHc8oCHF",
  "key31": "577zbSR7rkBN6rMPCryBPDA6FkpjBJ3B17Bnz6czZh8e5uod8ipBvz1CEQBh9nT2E1Mezv72VSm3Z1C3z7PYHJVt",
  "key32": "3amMvhoqsScvBcuTJUXp5tSTN839Ze1Qn6NwWVhEnXqZHP7bGrSTL2AQD3xLqBKo2wpevBQw4rwZ8SG8hJzP6etJ",
  "key33": "5XDhz5T7oeGqrgoN4ryhxYZwzxc3vFYfVUz5DkpgAKaR89UiL5jbXz954Tmaj9Mgf7JgxMWPDJun9vwSnR1SA1Sd",
  "key34": "5urUPFD4RbCd9MUAvBvSifzUGNPgSTf4MsEf51RyGUPVfz39WCzjUVM19JCfz7d6mjBM7hDkCtavUvbREfSBimoL",
  "key35": "2oK4rk3rTUsfSy793yd6S2E1s9YWwDoFxxyfFdE1sAgg3ALg5wwRkXVzafXzauBDf5qTodLdxNXxfbMMLXMojCDZ",
  "key36": "bTWeobbPmDktLqUYvdv7ZFhTT1hQ37r6VkhBWtH8xhPJ2Ba5D2rAuhmgRHDAf6big8acQWSayqWZUCtcdEzqKAX",
  "key37": "5JS84oad1FL4Cd2dK2Qpj2tbDJqnXipC4CSQsGeCF6GzVWYXugm5GtNVCVmjzaP8pyVDPxUKabTaEDT1L5qBV1bT",
  "key38": "5b3R1WjtBffAonph15mhAerNnrmJNa11Xg5uqFoJJDPh4vfWBuGmwAt2u6TkmXSPeWPPWBCMP7Cy5Q5pUM5AZMWf",
  "key39": "66aUfXKyLHFggZwETRWRBqLHYKshXWeSjRmTtFAP82r47LiEwnyp2vcZ9P2xKLDh1yLuZHCRc4WKfrTmeLhWdvym",
  "key40": "3spVkQ2mVyog1vDY2kjnXSDhqZBMZZ2XumyqhmsULBzuTtz3rcPa98BeWPitVuimGLK8KDBrMJNxB2xSmPB8sY4B"
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
