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
    "3rdYidr5EcZ2b1TjoescKvGFWJAc9qouywFaahYt442YsoMs3KTgreTwb5EgBam5GBYaBS2BFpNovahwzHLsV62x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33NR4iFMurm68ojAuKpo9zjqeCcPMUrqAd4eCn6NgLbKFfTcv2MAwCFKtS1pXFs5SBaooXDuCGcYRZRNjo1H8At8",
  "key1": "4L9VvPuKyq988CptivPoHV9MtiEv9a4BoZ4xgtwHb4Nhb1XN9qHdYqGj47BTisCmwiY79WcXP8QqWs7KApLKwH79",
  "key2": "2GCMXhcpgGASDg2hZ4A7sY7PFsfK72zuXDhQqmezAPaKLLBoaF4nqLn6J6g5SfsfEqSrkMNxyGG76ZWeTqnQcquC",
  "key3": "67VHdc4VaJq2WmxqJPjTduzH7KLDNCezDuvMz7LNdLxnkXWyxwQhwyA8LceB67n1QProKE5pUjtecG5ywnwnjmba",
  "key4": "3YwaXxtgBt1wh7DNEEXA2ZZ4WNoGbMX2us1UvMvmQzGYe4TMve52Mg4DipaLnksRcv1X6o6zUn5y77UAa3w64Jsg",
  "key5": "iHkF9TwFZu88nNTsdxSMbBxadsQbjU58xTHDeynRtAcAeCmbPdwza5aj7FpQPnD8GJBm5LtAGdZWUH4ZWrQFM9E",
  "key6": "3DUQ7xN6HMyki6bWzrF8ijgafYdJUvyyWvfDzG4YGYjqVSDdSSs4KhtzzkVMKV8Bw1eH9CWaJ3VBAY8Eboyveg33",
  "key7": "2YNdQTGQtEar2kXEoeHcnSmsqM11ykMDFzkPdfN1SYmSzdfVnbTjuw14Hm62YCX5Hiw8zhCqScgfLCTEnbcoFLiW",
  "key8": "CFJaz1XtmJ1qkuUv2oFVTwvrf77z4s9iFQL4PwJcdohE9c8fTzXqLT3r7FMChdZictCFAESZsE11YnBgUfqLnKt",
  "key9": "nevsFBr1sith6ALKzYz5ByeEwq5cubx7DAusovJ135kJBFbv8Wc7sCz8JPJ5jwf8a7t42mR5iYW1Nn6jh4pcYzb",
  "key10": "3XbAiA31e5Z2JRYgtZh2exNWoQ1gieXR8rg4FVJqsYDv8aNKgiDeMXsBaSwF3K5sW2LknT9KEinDJAQwSEdn7mcm",
  "key11": "4B8hDtyiippnrDE1KCy7LbJ73pymFkDAi4dfmW9hXg18SUDvD2L6wqyfgRvunVb5YrhpyZLaxtfSxuVwkeKaYxHD",
  "key12": "2bfWYRDQ54AajdKyu2kECzXYGiT24DjHQfRivZ5LcvLgbLPihfnt6MGEvmuqQgA9F3xfTFD9KVLnd42QnR1eBfGP",
  "key13": "uNZmj3nCckwT2GAtBWCrXTbctt5FrRfHPmJwdtc2wKBKsvaNMKPBkPaDoRxEa1uEcBQA1JcCGhPrRsCSEqjBf1R",
  "key14": "4BB6AoNHCjK7P2Lgmi8sDHsModdXugzn7ffBjuxpx8r3yFJtj5incopUxDBNExr6B3S5SKpE8JYZx6udWnUrcj7N",
  "key15": "iCPJmaC2engvfGEorVKvEpQooh5kR5BTrhR5cuRAa6xXMnD5QgoC2FCDCqDCg8fZRyfE8R3vionNXmBCZFFf763",
  "key16": "3w7Rew7NdcpjibA4s27uz5aroKdqUL4fx327zsumAAm59jyUptrzJ3PYWPyyaBZmHLtNDvfLjeuGX2jfGsvLEYRe",
  "key17": "4hFG7VNPyVG9sGMBqQSmEZy1xrSxyjS2r22ucdJn1JmESJXanFyTbSqbjAXzGrEkLTwbCR9S76kTrUkcdEWqbJMt",
  "key18": "nBRetyYYon3ssRDBrKowFjM6H6ubrv87TnpcJSe1AoevEzGad3t1MsUPrkmToZMsfXboSmrSZNzLU18FLx1eGDZ",
  "key19": "5ptfP16J38NQTsDeEcxgXjoKwJzwdGzJvmPK9CuR29c4HYpSjV3bvoT8rVNNsZd6Tn5ewaBYFygMuqsAh5oLjJKh",
  "key20": "4ruj4uzDCqdd82B5a7ryP8rdGQJp6GmzFmA31KF9mxSxNpU73eeZwibLWApAXRdMwK1pXxEidfH6PHw9bBnMK4p6",
  "key21": "2p6kPdnZrEDTmbEzXpEVpBF7wYotZrcuCuCthwj9X1efKdtPyPmcnD82hjSDBTLFeqCwtcuUiLjbsnsb5GxqWPvX",
  "key22": "ksswjxg6r2avEQ33ebLkBWhsf6JNuydQCcbB9mSpMi6DaUHQWtXg68G9Zd8e5G5GzmT7tEhcSHFnGF1EXXQ9mxU",
  "key23": "5YRNehrZBFkLFMBNNVCePLR5ptCcPegbr5TkmPfLTaAACwJgp3SsomkEXx9nWW9ruPJVTm3myfhk7m6JFqJwAzHt",
  "key24": "52D36JmcBY6KDdz5YMxm28aWpetqoiffoZUPBYY4q53eJLTevFRSFQ5qJvnk2dK1L3DXMq8iAFNXSuumyTntUBET",
  "key25": "3zyrkn6u1ysBi2Kn2nxkJPVm5fvgrtzEXbxu8428ji18SjnRmyJKGceMemiC9rftkeMNVaiqgRkSoKh2atGp8YK7",
  "key26": "gg9xdY7sxugxUZhT97R3xd1iT1zUy2BVdLe2cF7yiQJyuzkeHH5XDpwwPju9VQVjuNMz2TDv7jShSWBK78CYCwC",
  "key27": "3hLsi6fjryNL9pU3Hvbfwd7f41WquUCdDkUMct4YKRp1XFxeXR3VvVP1A36XEQnFpKG935ceRXiHGn2Bs5WkP95Y"
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
