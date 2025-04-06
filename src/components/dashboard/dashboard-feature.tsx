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
    "48YgqShKXvAE3VK8RwskgPZJki5ZwcSZyaoaiw1rgfKGoSix1VREhzMPRofdYM9A2t5YHFRjExCWyrfyVXYywzrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BEqV8aHNk7L8DNTtCPWLAb58LWTsWxhMsriN4SarU9eCidzbkTnWxmScXjAwpURVXNRgNkoV6nRCnetQeZ1okE6",
  "key1": "FRFjzUvLDzu1ngHdpLjvmAUeyzzgg25x3F4uRVrL8qnQk9hGZrtTd38wwJCuLtFnpXpqU7uW1CX1jWNAnRUmJQh",
  "key2": "pHnqdAXaUDN7JjDJETuaHDqxMH6gKLUS47KiH3tNA7yjnPTFM69sEyVe1cBEZTTwLYTQsFXtsfh6UvaB7ZUK3Cc",
  "key3": "4PbNKViDEzQYyfVkKwSqYvmcWrcVpcdWFMVduFH9XGtQ7D8Y8jkEavpwEuFz2ERTRVLjwbQKuinQBuWHXmXX62nh",
  "key4": "25UZggivoGMhQPHaKxASHmyxpAkcDTu9dbNowzVSpQk8crAnPYLKnGybJGcpzdX1pLCn8RB6XWAzzFRpgjocuzwq",
  "key5": "2rBDxTGUmT6xcbhpdhrBQsbrmiHj8k6Pd2ti62ZeGz9Wckga5SBm73Sf3f6mZzRSYP1hPVY8RurKtgBSStnnHCkU",
  "key6": "4CkuxiWvW2G1HGDWfH2dDQsYfyLRkjMMBL7Nab1HQxU18t1YfYKEkKKSfyikXU9jDy8VBrexieVK7p6RrWAiReYi",
  "key7": "5CTdv2AhsVo243sPJMqAWzPy5sZkbuNNH6yRtExunXLrRVUe4sGaQS36FVA9VGUfjaUkCpFGGySwSR5uu86FcgzC",
  "key8": "4Lnagd4iq1U9cvufDdBtY9StkWsGe1K6YnL7W9DUh4z9cSwicARHDUA7okEycaxZfGRTfHdDK2pMpwvZ8V1Up2e4",
  "key9": "4Guum1x2bvKgg2L3WDSS7bjznp1SWapJ2Epi3Y4HSfYydcpfeRQC6TvPALFPzKJquimMLwsc1cbJyUwV7fZ29MUN",
  "key10": "3tTdC5cmwrzp6XwSYejCdHPPx4j3Rg9DxXLzJgv1TUMgNQFjaiVVaBNfV4mxXy7h3h64zyT1S1LsH4WNkhUu6a2u",
  "key11": "3DEpBHa7ZCmBDPXDv4KnRjDCuonUT3BA6r3bWnSzAdLcFgX8QdP9mwiSHMFftgrUCoPfFaKxocEvJCrrkMMFvhB7",
  "key12": "5hRsnvpQ3Uai8oBnhVmS3fHmbPxXEmcJRh2zcYoPBxpgczYEpvE2XjsYkGmvqvdVQt4GtscssP9fhXEAn9aZLmLZ",
  "key13": "3qD37hPcxwvrco38Nvh58K9y28T4vaVGjMx6ZwRhsX7tW3MXHKLpMtfL7TkgrP4YJEwWN1Xg1LQkaboKEsqCxnkc",
  "key14": "vBNHV7HpREbP6cjSAWZ4BL5L7ksPRtxwhNw98wo6gTDoHGtjCb2bMdtNuTENXrZDogzfdjNT8AQute1b1U52kxs",
  "key15": "4XujBwxRzYp9Brj3q6cattcEHUrAWW7EwHFA8ucFEuhieBTwuTtWHvVoZEZW7Kg57xkNY3wuhG5gjQETXBjk2snc",
  "key16": "3V6ezGE3JbknktMMKK1rf8T5rVcxc4fcAmzTdvrXABfwqfnWVSFCPppFgB9Tzm2hfw3FA6h77VM8SykEtSx7pzyQ",
  "key17": "3Cw5rL7SYK9eHVTvkZqmUNsQd2rMKocz5mUUAmmUeqne3UTEoA7XQ67pUfhEmZzDV8z613M4PNtoDcrhY6xq8DuA",
  "key18": "2NxBMU8n6PYEXJH4tWXfqX58F7MrbrSaCzZsUKMx4BgGhAAfjVea9WajPHtt3qu4HdvNERV8MAXq3rDrEMdLKXSG",
  "key19": "3PpTsyVPpN8RCojtao6pwAPrZvVVNvwPaNw85GVpRjhfHDqzPJiPaMUjH32RTf6NYgAgsWp49dxZQPhzt6MDgwHB",
  "key20": "3eiq9TwBC2WG31P5NyDgP39P4M2MiFoeK2Fu9UoK9C582Gkokf8RixJPyGy5zyX4DURiJbvnxLFjo46Fx9Kujvti",
  "key21": "5zg1HTBKZwyVhQ3nqSJeJAAXg172zUu2BaFZBv7PsnsX6vtzi5YKsJhEuBT77foNw8LKWtguShTGkBa4QFddKhG3",
  "key22": "2GCB6iFBmKzdimNRVoBq7n2xggU3g9udnFmrBwtSfh3bHwmmYuKXgmzNXCzxJ4f54cAR74fjkrABY3FadpL6iWHd",
  "key23": "HM8wfXMg3PQyzbMJcvU9tj9NDZY1jtzgTxzLwyKZYSpKGeNjm5cS7CwM8X4XvtbNvvqhG9Hfe9q94oLdcPPLYAN",
  "key24": "5VVthNLUEGZhZv5bJypE8PcWJ3ozLxo5vhXqC4hMLvVYRZyBPsiJgJj7NPEEfkwLcDAArAH7Wm52bo76SmpGRzqT",
  "key25": "5NV6WBccdGyAwCjdgV3xwnwrA4EGm5Ctd1FNS9QSkEBNE1K2BqoHsSJwP9Sbb1Knb72dRx1vmnbtBkAz2avChJvD",
  "key26": "2e2nS1sLQPqB7o1Bx7fHgREjUcH3wervHDEDpogS5BoGkuzkEG9Rf87m3kCDhor54YgV5yCjMRpPED7rLMmEAAey",
  "key27": "3PkJcPTbAsDtpA9Wxt59QBsCcW6GhRtGK8LQDzCDX14pWyRRyFhEbSmc83953tUoP2jpKb8ugXbKvQzKkEmSYyuG",
  "key28": "5oPo3M3yXvSyMbbBZHJrHVVSGMhSr2TABZDjJzZzhQJj3gDPWUXXLkRYbmUCGvn23ozP3CrgPKgEN1an7xBLnuR8",
  "key29": "2EpBxDnBSS7FDsqQzm1B7ZsS5H3CEVRS24BdkjC6o8Z9dmqjALzpeUcJDxSTYPMMYkDQHrK6nNVm5UFh2yVTKovi",
  "key30": "mTQGk5w1JdgkxkZbyvikoUgibV6Tjtv9MitvtEK6vwGuCbGU8ASpfnqLb9PEXVaNeW8RojYtkGUK1WD5FCLpSJP",
  "key31": "FLAK2ia2A8bSKAB2it3fzUiaZJYRPZAegn2op6DGM1Jn8Ev5sh4SuC7GeHaWTSZfBpd5HXHPMfa2EZYWx6ijqKH",
  "key32": "5MRhRLdDpR3DJwWLZXLChGLPVWEaH3uQdwao36LNkaRHPN6katQa4EbbgFi7UMamvYuzcrCYD7kWVuV2T83bKuM4",
  "key33": "usgnqZtzMC14SjXKdThb5irErS1SbDa9JQ28pW5tPP22Qgxh65W4k8B3KSExzUYuQWQYR1bzAfEQvLo6Q56K6W7",
  "key34": "65AGCagX2a8uD2gaKUqbPF9umWFuPyUM7kGYygSk9TRunU3PYA1obQomtptM3VkRxXbWpwVBGggZxWTob81kso5J",
  "key35": "552BDbUMNoYnkwwLuhzQQTk67qdvByLxd2VJV1qy1LtXtFM2fVoBVCV4gxTMRwVsLHnyFpCY9UbB9CdQfHRVZaM4",
  "key36": "241BB5dn42uHArGqdCcz1L1iZFfzaMhhnSaZXuEhTYCjJ4xUv5hSv2YRBdpJrCnSfxWsKiZgwb6v3X4rK38GmEti",
  "key37": "3iteFLeKjSDB8bZz9HnovKpJ6rgz866EnyDUAuKJRicPh3AYWNYqDvmpem933Hxe6RXTcck6XhFV1tAp72gEnsEQ",
  "key38": "5sf8AZMReUagUWpzK7icUfQsi9C3dn4mmch35M1E8GsZKVDATTZSqbqBmTxfknPjpmbFYgnGFfSbmdwoo3NMfXWV",
  "key39": "4znpm2PRsjjXaKPbaMndhYiQNMT2bRExMAq7CHsSBttVTqMqBHUEHUUetzdQJDSSnzHefSVjXirYQPEwYHYhKKa",
  "key40": "3xAd7N2wUTcNUSUzTFZUTCqEjSqNoE5M78Ek7p4kgwmdQM8FV8zwDAnZbqKbUBb5nozMdZ5hY5vQJL8fZx6TbLEL",
  "key41": "3nfnEEokKHSztoCW99gkhvP9erVWYCYp745dGw4TCFdjfLDoUneFN6EDJW9kBaKZPwLzQTt1wz2nybeQ3juwEJsT",
  "key42": "2qgy8h4HHjEauwDcZ63fzKutSoqwC7RwK4URKecjNuNeS3sKTvGrwQe1qk4GefxKtyGpDsz5QYvcUmYebdkxkfUX",
  "key43": "4fhXD8xiw6iqtwDiPwRgi7MGqfqhTwa1KF78VwPcXZWcpaQtwHCrpZrCFM8xrCSxihHCgzzdk6z7xAK98GaLWVdK",
  "key44": "4jstd3jd3jnbWzdkCgwRsLMBvHz3HyoNVvsJFjzno7Yj6Xwsd4riWGAa1b3ihvJZBRd684moZ8LNXG4Z7TtgVhw4"
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
