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
    "2Ew8Ce3nz8corcJfeUW2qVugcmdtdAFQgApGqoyZMQ2KbiDAGAtd3U8hCCdETzb1maNy1xYrm8NSDvhcYYmzA8XE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KkWCKfEt25X4jHfwt1cU567ggAc6bzQHrpzXb4sRnVuhTEgZsnZxBFCj3mStKB55MXeudLrZWNVFSmtzwygGqDE",
  "key1": "41a7jMPpkE5WPGKAvTiuxTAwZjB1zbSSaPnDTnLXXsjxPCkbxHV45jHFZhyDDx6XakdoVFE8KPqDMsBcp4FZbTSm",
  "key2": "4wyHN9Jueo8nSQ15zYLR7xvYovt1FnUrN2kn7FMRdAdaEnnjcZHgQ6MKVd5FrcXNCtVakK1Ha79F1SbphQtw4VPh",
  "key3": "4gVf3ew3e2VnW55ErHkes27knLKSmMVkZKHAfSXLPxzE3oHsWdtFwK3xtUc1ReVknZxMNoLSRK4Xs2KJVSdPGJwi",
  "key4": "Wsh9vK1DgfBjaRxD5osM5iKYCZWV8jpVKHpqRrhRWysx31Z3AEgmWLKie6QaRAdxRfoAMTFPs2F3rpDXgFZTabG",
  "key5": "4r3RPowpiPKDxFEdcciRp5wciEjXAG2BkdVW4kFgD7k9R8M71geHgfUbKmpLBAqaijb3MjKTwQA3jMQcLGHDRhPU",
  "key6": "5EwKyDnt9sp9JC2WE6eqJM577Lf5gB3pvgNb9WUEdUchUAAdqha7rzXSP7CyySuZ3izmQG3z8xtE5E6xLUnz6tdB",
  "key7": "3ZhFGb7LPpTWLqRP1jVr9XKgxByJSufWKgvRcpu2FVg67tHBGu8KaQ8MeAU6nF9RXadEUEN4dG4Y7S13QMUJCNJr",
  "key8": "2yWSMSQSrBkwYPU1A3WQUnvyGP5ZjVE6PVd5e6vXgnvqBn6amGSme1WwkuiEXgJvLtjPVte27GjfGbEdneZJJGJs",
  "key9": "2KTG7ad6YYNSdMLVLdzumEjz58tW42HbrcgYCxscNsHtiFuu7C2gQkpfaFpcFE2QxD9u9cL2tQQvyug1aumZSn6x",
  "key10": "2mUARL13jtFKAMkZkmCvjT1PZpCwrFTCzXv6KV95doJHLGgYY8a2uyMTixjDKCG7AL3QWuJT6HbBqrTZxsCtJjTc",
  "key11": "CTUyKjHcDv6etqMLNPkS83y7LZvxuZj4nTkYa8boNLshSSbaoEV8ANH9VhKU9RM6zJbNPCw8H2HH3ujGcnNKRQG",
  "key12": "5Fka6YCiAH9LHbRWsgGCJpQoFaaFtsnRnpRme1mYB5Es9aG1oBcKtjEjXovxSgBR4xNjBPDqkjBzHKXkfvgvTqco",
  "key13": "5qBLGGiZZfdygQDu39FxEJMyW5fYvQJCALjyPEKHML3MfGRzcg5dLBtKsNiGcyzPKr9wibw7rPMQrbsinKJEmN33",
  "key14": "3H1jR63YQCu2X8K5sNhSX4Ra7xcbncGG2BVvRHw9NkanLhxgsXrBNXUEun9mrDuoog5F8vWa7iUjQBHLo61PBqNM",
  "key15": "4JbVBAifUmShgiPvFYkq3ytHkvvqdw8UcTQsi9XawWgxyJroAady2VRpWohdHM7q6HnGVwrU7cEttDSqBQc7QB3b",
  "key16": "2pDVyuK6mweJX5AWJaMPfzqPZ2EU25Qep4Qzd6geNmsPi2dFPzK2wYAziaN5bLHq4Wkg1UXGniCtmozLjrqUbMzT",
  "key17": "3US9KxJTPyyCH6kKjiAoetxfkbFPfckZZ1ZcFHokqcWGr7guHdWbWAwzfFRt4QBBbRcbXZubHXYtwQFW9yNw9Ym5",
  "key18": "5S52KMQzfLCpJYp5GN8rn3pqUfS17QeeLkX8uZ51XJocfcmggrf4P5Gh7yaffapcofDwFG3Miqg7eHy2tsumm2q8",
  "key19": "5JUNh2cTpRy1dKeWkkWVkPjZciynnGRVgKMLCCTzHTzk6hWkZYeMHBfszqrUNqa8kWuTtXwFVjVw2tnFepxigCi1",
  "key20": "1cV6i1UEra3BZ8rtY1nLCpow19FQhLYmpSg2QjhcZwtzjCnXabTEtcoyAtqvYYituNaHuD2XhWGYS175rvPXGpb",
  "key21": "47Yh1LeAuVbgyE2PNc3FRAdRsuv3yiMScKYkYpndyYYFaAHDi8s2TvYCMAt7KizgxizP22cq4jod415R7a6nTQgW",
  "key22": "7XzJCKsk3ZLhY4ZjpA7BMgFHrRdV2Yap75E1t2HLPF8giEpCYSni9Guxr2XMUYYmRXuhYYsmb8smTo9CSE3r51S",
  "key23": "3U7f35hNuoJfw89eMCZYzHa5KevUH6uFQpwk5zV6engdfnwRHW8fqazEYNNEdyHFBD6GQAPLYGuFz2M8cRiQLd9r",
  "key24": "66ShLzHpYTcnJF1EA1TTs1QAKx2r3KoYAUQSbaGJvqHsV8Mt48xjQKPU3mdAjjnEeoPrc1qkfSRQPzLxtQcYuWGy",
  "key25": "46xaACH72zkEirRtfEoci4wN36ySYZYffZyTjEYpH3FGpREDP5yn8rundNHLcUdwnuiLpwisVkZjhiQAiPAG3gFA",
  "key26": "ogCGYmBoJ4JfoPxpWoL5TFzFURpq1z5beVTrneRkPyEa4XUVVVe7Q7AUrU1caWtU1nrA9DtvWCPFo1LjcM3pzxU",
  "key27": "5162z23iCQndx77PpKDEdrW1ebo8J1cCrwUDfRVggnNrf4axuh5HxHRzW7vMnbUctthE4wC1hP5QcSMtXLhhUDJN",
  "key28": "4LYieQFMjJk8aLwy3GWptmLrfPZH7YMDxAizYEmY3FavSgBRZ8NdSEvfzKaLCPzyF6AYCAbvkZbxHYEwkcRywxEm",
  "key29": "43iZmT7iK5SGLS8KYcP9E7arxgGUS2mab31cS1ZEsaoAyS38n38dp4Ub2SVxR4pdAwiKKJnimqH3RtgSqwFfitXz",
  "key30": "4Nz1T9Fyrh7LRQQvBUJUoHrhmXSsSmKjLPShDmVNVyghaL1BFdTKWbqQxdgF5ohbgWW3jnF5cFLPpP5ffrMzpVXf"
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
