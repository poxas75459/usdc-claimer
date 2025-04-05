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
    "2dugepD4fc4CTtTHFzCafqHLnDVMjkGkc8VdnNvbjNAXq8r3WYDsPDSDV9eQeDLn6V3t7BRWEKc9D3UhhwZQSV67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tE8ouoz1RhgV7eeQaeabLdSP4uf8hsfZEz8ZRHDUeaFz1C8PTCiSEFETr6suftEccyRzAAdBrPbd9fSRiCiYrBi",
  "key1": "wAxU5d9XEmMuK1t7tqiuQk3qa6m6XiE1xmU5GcSHzKRRjs6E41aiDHMTBWm8Ua2kHifWh4zyhMWmE7rNUDTYapj",
  "key2": "2Hcd7jCgbPazX548SXhg3ynMRM7gqExXjRz4Wx3BXurCJX2A1by1VQ5sMJTbEaJi5ZVGfCvVTzWSGnYEwDZ9tSaD",
  "key3": "5Scnj24LA2SYbWXfUi9ijmZrry27rAhRhuvx5rwukhHrcAhmAh7AnTeqsMj11KEXcw9Ws9vZM4HGwU5JjFSV9Upt",
  "key4": "DesN8urAcC1Snrwo83vtCSB9aRZp2Me4zd3ZfcmoFkEbzvwhTwrcu3f2QnzP1foAr36fUWWiSTZm4Mhhf4FtowW",
  "key5": "8Ty2Cow7teEbkCYfiiFGRx9bNYVCNMh6TzAxxYEZiaVtdyC1AbvC3rxGENqy5pM628qGGQPZwpEomhar3fS2ma7",
  "key6": "5ASDJAuSpah8vD9tLf6EBTrfT64yHj8gmQFS6MDuY4JAA2UapXhkGezZeF2xcEGLPETJcLB6sP7a6NqMexmPGZj7",
  "key7": "22fmGwdwbxLYN1LswMTN1iCmmQT5hyTiLSrjFDrQ6KHmDUxYAt3uRwSTsSDWRWY9BNojjcB3A9aazcySHknzZyKh",
  "key8": "65PRVGAgHM6VHTsaK1iN2Z33fuN9BnTU1rgQTh5VUc4BJFBqHtVN5ZihNtF9MKrndwHfw273yuwLuJwbMTLNnBo1",
  "key9": "3ZkZL3wvGksC5eVWexx7QUhzW6yRQBRpHqQNSYDQuBPgsapqTtQvSHUHNxxpBp7EKPX9oJpTZFWpeTQajdNWzzBT",
  "key10": "2zwipRSbcg8ypPfZZTtTxoe7CsnHSPpVo4XecVypAwnuiej3JjcpcNi87FsAyh6Td27S13a7ivAfTspwPk11LtjN",
  "key11": "4UyaNRCiVuCRj4TT5yEEs5h9PDxTTr8xpRymoxm1fDGh6e7JMnQtJuuD8VuENZNExZk5Di3ecvR3LVHFJwvjgYmV",
  "key12": "24rsrs1iL77vieKAWAoVduo4n2MCukWuZJH1EWqZ6GNCdqQesSEZf85pUGmvZerLkPvWUcGpNBCA29aCqwPwJYt3",
  "key13": "5YJPFWRVoecBjik1Er21J19pHGAEmiZNitCVb3RKc5CbXMjVBEtgU59YB847uKs8oMkCXkJ89amZsPighqaaAqzF",
  "key14": "3MRXnZ7ud7jbbhF2Q75LkovkSpm4MS5pdyYrb6HG3aTRwEzx8ecTN3172Cu2wnGPNEv9KCrsBTQSCsXnUp1DuuZ1",
  "key15": "5kkhbgnaCzQ3QfVPgBPNNREMzrXimhFUvYw7w9Sc3R4mfYEvXeyXKXAaC7bzgGnMn4FPxSCnm6oxLi4WKa7BRo98",
  "key16": "SNQjae5RqzZDuS7h9i9C11h7vhbviCcqDf8aXaL4yAiKPKZ25C4D7f9H8GSqEhR8X91Uv766Vh7bsJercHaein4",
  "key17": "5wDqYxBwRcyXaCYH9KTAcEqmYhVHxbJBE21ktx5dFHjLZok3gyLQwzouKHQ52TSHAb2PEyjnKpghRrkLUSMm5yDU",
  "key18": "5TSPAMFtreqbKL2Nrp3Sf9bYNc4WnH9cCi1SZjYSVA48Sj3ZCjbWBDbnCbpJZDrxvPUxnjn7AtPxpMDt92pvA39J",
  "key19": "9NAHYNoivRSXMjS5sgTTekhcCWVSBZfcm8XHEVGmnY2qasHbzNm3jdD1Aky1f5MgnSuaiMzvyx5beWQQn6Zbctz",
  "key20": "3JCbJNsjjb2UdmEiaVnZ2NV6hhH65XSwURNZMA444Amg28WY1vxgmExzRCZipUfFPYcdsobjnwv42ujJxmP2CH9K",
  "key21": "4VHBF5btQbGpuNecEH2ofBzLTxsrcj1zLoke3EGtha7ZvFZ76zhywSU3sTietukPVqEaiD3BCL9WqAjX3gpjcXFF",
  "key22": "5491LGJDBMEGWp5Lp5Cf42NUHtQttEmd5BaR81av5xLESSvESYh426nduj2DG4Dfq5PgjeTnmQ7QA6jtQWSc68Qs",
  "key23": "ZiPY7JThTn3xLiiEZgrACNTycci9x5sGSNLFKyGNYGNvSPvS23AzY3oxbv6J68q1URvbVWekr6zgp5LFqsmc7Jj",
  "key24": "4Xj1kTe32HC5bY3XMthmvHc4hozbQeSWvxzcuvHQ652w5SgkDaae4B7o8MeGtV3EcEPXAvZs4jLqakPVwuafvDAx",
  "key25": "3N1tted535kMmqQums8DHmJH33X5Kc22o6bHk5EyD2fQrDPgm7q7PQJQQDeMzX8BcQFbDeFE95MupaxqZa2RtTVC",
  "key26": "4aYWCsucUuk62nqtyW79KP58XnRjgmx6zJPr6aDRxN6kRj5dwj6aCmJEea4wWGfGAaKfiN2H9QCixq1oVkezNpBw",
  "key27": "hHgbzhY5kBk73PUNydfSBmcgdqicdvb7B3RexzEDTCRDiU5rDV4JNSdgL6VYnusfciqeGfvg1bDSbNCoMezWWh4",
  "key28": "3V2dFwE5XnXbAyY3ASrCgSpe712rEDvErpW8wfkLxfBrzm9U3h53DycL67bfqyQxVBT4dQJ3NFbmXaL1wptd4Ty1",
  "key29": "2UBiKGzPrX7RsTC8HnbH7oBzn964pjB1bPUp6P7FjgCyJ7YYruy7FiP6RCTiUzqVZMynykffNitUoWqu3nw6ePCX",
  "key30": "3SEqAA9AEMhmYmABXjnXFE5Cy1muVrAsY1bq1MqdrGGgQhWNGw38igmKA8jz7RKCWCrPQ8wmsxeAUhwPfBNX4bRb",
  "key31": "4WAHWWDjwQPMNXcVRd3ZrweoTVNFnAAXt1EMzXRU2RqHiTwwMoHeaZAzZjoxK9RUvAN3s9kHEJmFmzQW6upMWWuh",
  "key32": "UjAGsPFgtWTLC1PeBLnD3UUx82ghDCiANRv6fjBqkknWRJ31Hh6qMzGcBnt5quRhVq26QCpuGR5n1ftRVAM2hxX",
  "key33": "3fb9154BbofT1xms6P3aparscd4SamGH7Lx79AJp6wVTLUYvvyeXUerAFHCK2FHRH5k6xbpcUe5NqntSfW25yiix",
  "key34": "5rN9VfxqmHPzVRGdkKktEEAxmWBNay5ujpfQb1LQN2dCQeb8HJsX4HMBoXZ6CBiELNvxD8mT2ZMorjmTejooiMdY",
  "key35": "23DwK5w8pcpCbA96gm2sEiQzBtHg31mUdNmt9HoBiJpEDMgPcZcBGd883Y21P6rbAozGNvTRm7dqgPVCifcoenF8",
  "key36": "2CyEAuAUFvX2tZUAjiwwD3pc211ELULWFc91SFWQzsY6FQaQ6Ud69RTafepefZsqHtHMgsgaHmwMcTMpkkqbF4Dx",
  "key37": "3qnXfXAdemRTx4JsvrdbZeQchiTZ5vFh4YAjhhiG828gnaCAA3TizTv3No9bezAo6z2n7NGAfQ1uQLydEAedHZzE",
  "key38": "2U2DgAeMPMAn9WTGKmkzW8RhQeYaT1wrB7DnjbnzV9TqyqToqFmsUK9RGxPX85kuPjbsvXR5j9e3fNdgSNgaeFb7"
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
