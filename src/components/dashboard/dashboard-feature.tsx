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
    "2hzeoAV39QpC1ejUqyp1CgGjrsCiJ5TiPDAejMumUFc9xYqMpV8BegSRYJixmXL5yw2tGLUGTxicY5ZWFfuy9Zog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tW2zACn9XwDeKa5UZ91hHmyUVa5hrzkLNgfjhZaTBZaPHkfjg1Gaqcy3cWAGdufrfywQWt39Di8uRAZSEVLDM6T",
  "key1": "NQ7tpbPEMgJY5acLSRZ8NtYVEHXvWCRTHVDDmA1dLZGVQPMiYtcVhyXdFwCjry9k5EPGygQupYcf3jMocA9LJ1d",
  "key2": "R6hJHge7whw7G13E4eiP6X3PrYumEW824qdffns1Xkih7c2odh5nnmfnV2oZfNoyZXAoeQ1k3zSHZvF3Pq5uE8o",
  "key3": "4GK56p7rebH7oFRa7kH5WoUgdMZGK63GGtTAdWg4NDp2jqnuFYSoCp1prKz5Vq4iqWDnbtDJUDCid5nB2y1SHxxN",
  "key4": "3GLA2NtVPwpwUAscgveHGMs6asRHCmsE48zSp45ai8kt9d2sqBghv59Du2h79XLXFteAja3Jx8BThzCragvigQXP",
  "key5": "2zPmQhbHSXmfScrnHRdgRSRtYRCa3LmdF9Xh36fogH4WGzYfrf8YQ9tEzUfj1vKeoJDidRBG4NLjRowA3TA98WTv",
  "key6": "4bBXgQBFzTmagzp56HUrWJyCiBgxbp3pXCzYu3sRmR3T2f1PiEAdifKzysjGtupkQUtZMbuEBmxSVdYRJYf9d5B6",
  "key7": "2Rr6bbpR3Ng3FN66y92TaqgAUYgsHfixtWinoL8gU2LeuoogBJ3vt3Q5FBwyuHGRatZnZYmKmTi6daRuKwEF8x5Y",
  "key8": "5gJUQ7qJUfpnB53pWuCuAuzLCzos137u1VAHTvzRGqzvzZSiZxzcfUompQoBWcciy2qVXxAz4Ph5FMH1Pejcqose",
  "key9": "3pD4KhbdYsJdxNsGHPk2EHeXqHipXpxA7UdYwvj1yZc3P6c895eycrScV8DTA4tQJYTXvEB3n9BeUEP5wqCYEesv",
  "key10": "2B12fXXY1mgoJ1uYL8rmQRPasjNG6bZGNXqxHsQ1u6nrE1DUX93Ln6kV9n4xe6cxV2wUq9ajd3eCmLbTRz5TcSDe",
  "key11": "3KEY97AyhwoxYzN4dMyDFxbZqnaQDHjZuoha7DVr4HM2Tg4mhELQtGivGARDyvesS4cFavqqbVJazj58R7Mauh4w",
  "key12": "31szJ6kzdXJZ4abakDPdJmCEqPaczV9HcFsHaSYYEZtDHY7uWtRa4SpAxAD7ZhXJYjMbzMyLmdLaDGofhV42mmTJ",
  "key13": "5vQAxh32dAuw7szkQLmsLAkTMr1iD6MrttWcLALLZr3pzKmR2KVdsouUQw6Qccz8jujy5LzjoUhvGJNg1kRYFmGV",
  "key14": "3bUxzPFfhNvYD8gs1f5TcmX4xcLRzVz4FWpPEynR5piKPks8dHCD4SdLod8r5wV4THZQat5dLxXcXK6EPFY93Fak",
  "key15": "4dVTJuJHD9RFbbjucVVxPNBRPvGGY3cv5mourj38fAwKy2r5MwPPvW9TL2grrvyHio1ZUNaigVYTSK3Kz49YioWc",
  "key16": "5P3G5CgeVsxsxDvuF5Rk4UZUNUCRyfe8mdiCE3haatygeqwfay9wmhCqK9JQgu82Cq5r2jPPWM3PapZ7SHZUpR2w",
  "key17": "4rQxvbGaVmtNTbYXoFTQorwG26TuvWxHsrbJJunnSHyJ7X2eECsUyLJq5CYGEhMZ77ifDNN4HZjfPT5Ht8x5jswy",
  "key18": "4yhRWUghhB6uxMRWHMCmJirNpwzToYnRkwxmeLP8G5HJzAPGEPFhuwHJ9EcGT7pTPK8PgfwLM4GhoNHn7xwjkBK5",
  "key19": "swaG5oztsyGmLD9cgwGadd3UTbgkyyDdWjZfiiyoZ3TwHVPfcf5eYGTuUS4t3oGoAAimdYF5vUAGqNAw6KjwKPu",
  "key20": "2EodNew6zJ7HKmTTEtK1qT42f1we76qB3UUZoKEdwTQaggzKa9NgBN4ssvxhgDum4qtxui8U7ygV4csmNt28MDjt",
  "key21": "vRwrncLYCboeAHuNMJP9ht9o5LT4KFqJSZXbJr2LvNEcAnZsZb99z3z171zUG1xKcJgKRp6gFCyPNycD71BtNTo",
  "key22": "22Lw8rSzxWhef4bsdMKfPBZaW1GgHCz3fPhqRp5J8EQH7F6YEsZ1DSdLjJ7NUXvsTkuU1ycziPGAtoMCjEtQtfMR",
  "key23": "4fvzgiVHEG3muEVELvy2XHzeCpUQATm4URahBzvXtKc1upi2QimznScyfSqAWitCyigpomT4W6qCRHTY3P9DLMCJ",
  "key24": "2VbWUL6RZLX1EzHD9rsbN3ZyUDjMkEWJuorhdtrc2zaSVZRhphYkWD7SZD1uuWGtrcjHAGYecHUzhKMS1JuPaNGq",
  "key25": "WtzHA3x3Ax7boiH5guVLc5i4Wq8x6mJVdFhSbLc6Ycop4GaXMYz8Z7Mxi5S2VDQSA7EZXrAUqQhPMLRT39UHmDC",
  "key26": "5cot1Qatt79tC4f4ZySAXJAGVpcR4BMhnoNjpQjXeWGReAtCZrBYjZ4jSH7hb8vpqJ2tCRSNwjqFBNzPGK8Tynma",
  "key27": "Mmdfz2njWKkJqDE95gr1h49n4uJXpHJNiWxHsVnnzRPCzi38SUU6wn5nFGoTB3U927CymPacwxi4oma5F4QnUyu",
  "key28": "5ooVLi8zvhC72W81NnJEP8LVpjDKEcrAksWWWJcJGdV7nhsoAaLR3GXFEB4Y3zDZNjwo8KJvjFeVZDvwBLbQPRrV",
  "key29": "47okeC8LbFr2w8ZmfEPLckDt6BJ3F7WLnMiAzaY7KjeY4MKMJU9VcSNfE7m25HUoaJRfqtGENWMFTsuWTnjYHgAd",
  "key30": "516GqBujMwXMX3BBn1jLgZ5Guevr7ST6eicVzfi1VWMh4g4caJUM2ogDZ1djPEZgNDpvNRdieZzAWs3zRoKYiStu",
  "key31": "3vhmPDCPnKXT8KQ6a7kWNGw5x3a99etcND5NVa38UoDmBA1inAeyj2Yk6ixiqpxfbMt9HTHs7364fThHiyRqy7Sg",
  "key32": "5VQ5Z5C6UE6TgwjAgFfd8NdzXeFjf9HdJ9XeCQJZmtjJqS2fNKr9v7W5R6r6QjFBcAXZD6rmHUMZHdTKKqxE9gVn",
  "key33": "3ZtmCsdd6QNsPQKVpz5h72z1WtN457bGVCEpRtayY94Zs6wydF3cBRsosiihw1Qha5oFyYb14bVYzEmqZWJZggYQ",
  "key34": "2VALtCLG6YNrtaY4KkXQxsKtRnq7VVionecGvN84EzwwZ2dbRCbd5GCTd8ZasfUXR4YwCwuj99LoT3vwu1XBSrAV"
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
