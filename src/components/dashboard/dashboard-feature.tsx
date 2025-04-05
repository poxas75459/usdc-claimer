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
    "XHePYUfnvet7oPwsR6kci3PQRZTSUa4j68xpJLWs7MEZQGRPD32nZwhSGfBbnbMERL58SUFKRtRvNbL21gc2YBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kMHMGMFii9tRzi86YCTUZMTVmJwxPvVnCdx8yK8Zd4WsaqJtJ426BT8dme1CmNkD1ENV6vy3JXEEgHi287HRVK1",
  "key1": "2F7uWHHbfQ5Hf6Tyrw8vLsa7AZiMvUZyHFWKi5qgWEFvxbWpusgs17rThZ8JoXkiMPXWDQfqS9KM78XMEhXdisa3",
  "key2": "2HnKQJkZwMvaqVEU7P5VCYvnnTDUUYcM6hehkqdjGB2MjSTxm9hgi7J1bh65HjjnxZSSJF4CPcNo4W4xNfyGezq1",
  "key3": "6FNJzx7RsArLysVUMBXFoX12X2sZA6h4EcZb1uix7botxL2oy6doEfeyhLKtieYP8oCjxK6JJwuzZecAxajKgXg",
  "key4": "2CGnt5bpjdRCP2GwmcB4TMpFbWqSohdK3Ce4s7pvJz2pU4WqawLPjEDd1jQzGDE5XvMJ6m294t91c2iAgCu3BmM",
  "key5": "5qLPqxrretapigBFp637rhXJ1QS1iujU1xJT1J2cU6U1AuR8huk7pEQzDeuxeCitZhUc9kzNvE6wEkFDoLwLYGrE",
  "key6": "ZNTuPL7rHiQHrAyETBjg8NMuFPxBaeHuVeFa1YbhpUnGsVojuZ5gMfzZMvLAEg1A5jAPjXCM6xmcSKJc74Bvsjb",
  "key7": "PzmCkWhYgtkE5Ggi7hVQ1EPV97G4yR1YHBwC9aXJLBKCdaxRtzDempEQAN9sP5XbbZ4nvzwoG8pQbub3PTjoXEZ",
  "key8": "6wMJpz4qdwk9wZ12TgfxAfnu4qadqZMHjzQHqrbgKf68S8Fd2doCgL1JssgGSGJdwgRotQb4wwVVNvFK6S9ti8B",
  "key9": "4DSt7AfC3jQSzRS2CtkqutWf4jpAm1wooo22bxeWLm47ww8tYskXn6nG3GnqZrjN1V8jufsjYRX4QK85vpcjk5yR",
  "key10": "2gBiBwd3j6BUJDXLbGzZgpAUhoLs6rnTpmiyD88u6AofokqVerEN2Lhef1knLfMVhvg1D9R6Sg3NVYgF9ohqXRFN",
  "key11": "3KV3xUh1jXmaHkmoxc6rN2Pi8tkNfT8X6yrdigPaRo3ygPobP21s4svwbXLX1XNafQtZDeg3WLCYFA4h9368wDmQ",
  "key12": "2nR76mHGETd3kRN7Q2hXwovqjwU1UpWQ57owxj6d8T4gac9vi37QygqVGwP8oswJc1YyBzLTofZckbvCCgHH6gd2",
  "key13": "3gvrRymuoQ9BFeZ2e44BkSG7BWk5J7tnNbZxAAwTbYwwKgTJw34szkMLEGv2vi7kwJPnxKHzywx3EaeXTAx5G8yD",
  "key14": "7JDD4BWYgjNmTxmbYoGs3kJxpt233AtEJoQARscZH6QcsugUgvq4tdNRgb3dvirgPh6PsZKYd2oC3qTCByjkJyc",
  "key15": "2tavBom86apcJ2zyRbv95rkMPyRydGY7iQFzRE6guFTkGA7SZ7e5zR9XStcFKjR4P3h2TkMFwmqS6h9vgVHAPakX",
  "key16": "22Pm8qqnycLC7EYGSMwPmtCmBZiCXfeQwgfgeYDuLwZBm8qbdMseHce8CsjxRwUG2RoXCGKgQ9iEoD9Jj3eFtQnB",
  "key17": "3Y8qqCg3kWEXw5mgLXwdAnr1Cs63mXdneErMhZdPQnxZ2HCVbqb3WwFhVT4jbgB5Lwh7shupnKYpW3wJqNobuTdJ",
  "key18": "333kydBnDmMS534HtdhK5rttyY6Dov26y6Pfc8qjLFstLFhtHMoGZihyjMD85b1ZvCj6qGS9gRw3TU46rrcTcb58",
  "key19": "27CBzw3geQU5jTGwnEVPRbnYRAvL1MQAXgnXakAuskHcZWeD8z8UTWhDcMa8VhoSTCjpeTYJ1hh2nv4ktj9V6bwN",
  "key20": "5bEGPk6CFXZueFoGKV9yoy5aoceq5HqJQVvLwdvMos6QnjmQti9fye2Qt5G4v4ExFv2VaCU2wGuXxrjHfybDuWgR",
  "key21": "5JALj995mWv1PFFZgdvm1hcxEWPFoU6mGeXNVca13XrLf95D7Nzjo3bttVcDqy1wrJVqsCEdE3cVNL58pfHQ56U6",
  "key22": "3fCDFRw2fanRbkvdLKJP6xDw18zcMeSwKdMeRE7T2qr3ppv7XkchV47H6e4sBDxT1AZm7PZvenQga3AxsTpVbpx1",
  "key23": "2aQku6WELX7zhceJJT9XF3eqY1kasYd13xuS1PPdtGf2584isrK2eF2MUW7xtgGeofrtb27c8omXUATfVazbuNpg",
  "key24": "2udgPc2H2BUp3FHyeF3wFmsRSCnpQ3UiUgcc9c1Z7CsFMx7bns643ZDhhPqcwXE2LZz6v5SZYQfpP7erAqtpja2D",
  "key25": "47mzRubMTqmsTgNQ74z6PkHpVSgYJueVZCWTyH9fZJmjUYKaqx3uUxAtDRX9DmTWx3PT6EzryUgjuXmuon4Tb2KP",
  "key26": "2of2LawyBkX3x8GR1ax5MQTQVSPmUw6XdSuagZCqEdubZqmLdxLDkA2t16LnqmN2ZtAU54DG5imXRaABPi1Tw2dH",
  "key27": "3XDCxWLdrjwZU5uUCMhXi7xcAaj3nejw4aNPCpouybyxSUWUbrQVyTCYuQHFssGRvDFewxFg9YGYRiYwE2pdC4mq",
  "key28": "35CrXZE8er6xdo8dt5bfKJXZ1v7Z9ER8nyNiN8Uv6Vu2QKQ7HmK5RWVe6XMu5jWEEnBgVqhFvij83WqRhzgmUQBN",
  "key29": "5FWfrZdA13XEqfC2PFx3S2i5gqnCPw5xmFtAKHjBQUHGpw9UoKovepqYNdhK1m9LV6mh2LJr82MKzRo46Q9M45qz",
  "key30": "4TGtpXRLUui3fviw2SCYu3PWUK16LexrbtRFzD6pHN2hU23W4K3gsB77TeS1U2gaQH7yZgH2M3PcrQ4dBtb3K6Ct",
  "key31": "4M9YCgjLJ8xkKKarPnq6SZFnNyK81jV6eRLkTzyMRckUw98d9RC9jDjfYncxeF95v8UcKh5DjRQ8dxK5f2CKfpP2",
  "key32": "4P5G9edTY32TdhbuMhUwzDCkmX5MjySFbXkN8qMzd7DWuJDVPcfrSKnLxUwZXZMFX2N97Byf2KD6oqfJGMUsquBZ",
  "key33": "2jLaTjCpjCfn1iqzAJSK7QUunh68NggPJip85eYCnFzh5tjqwFU1pq8ZCW6X9tCu1zxWEobcSjMqeszaVysanwLE"
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
