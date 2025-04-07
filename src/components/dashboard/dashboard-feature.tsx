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
    "yn8Kboi29ikxLYi8nsoJKR3HmDRLCWaa6egVm1m4TTLNUp5hj8CsSihrHvv9XxLARy54wVCWkYrfk285aGLgeiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eEzZMDNBteC2YMpPEeCxwC7JTF5JqSiZqjuVc7rSzZWUmpGFAq4ToQXaYe8FQTpT1atU6rcoCZajMGjHJ5fbAeV",
  "key1": "2L4X7QBSGNHyRcJUHvyegdkJ1NrvphKgKZwmybGCjz4ggKrXx1zi4NWe2vj13vELTrU8N6wy4yoBcdFtf4qAYYPZ",
  "key2": "329b4vTg3RH8vj5B4MfndsoViLVWAnTuzPjdXvJKR9DBtYv1ybBJjnF1HArvBLzw9ekxJJVmshcESMnXZWz8TTq",
  "key3": "2fcGyx3LS2bTKdJXgDyjPywKyv3BiuhpHNvnRc4Ld6chNCGz2JMxThr8yJr5zkEVYMrozZmLnLMtNqJPpU8ScBKw",
  "key4": "33sC2eHHeErYcqQ7KsbVZSNAf3kY3SXPconxX9Ui5uz2e5UU94VU3uKJG5YXibs1Uffh3gunzx44KcZvYzUnBXcf",
  "key5": "3uu85ASKkxGVHSx28NKy4skJhNeEFM3tC4chS5wgeQEzmrV1bEopG79cvSRTBLATcpbadrBF8WoRjyKKTALGHLcM",
  "key6": "5XMJ3qN3hT4qo89XUCR9o8Hjn5kVmS8SaaMNMJF8un6Hjta7cGozZt14o28Tuivu8kLKzpfGkoumfKDePaLrNeZC",
  "key7": "3HJrb9GTR1jNPHKonsuhhy9j5yNU3fQtgX4HdjnFuvQBAZ4CT5bu2eJXS533pymtNX3TVDg95QXCf6ebUFFCDQdT",
  "key8": "6218ir8VyLDhDjC3yRqg9rE8msUaMEHQPTmB8SFA7K3vUMZ77YHjhDyDERd8YSYjV1MpA39fYTRJpxK1N1qrS7rP",
  "key9": "4yvUJGwvcL5W5fWxgnKFbqundsKtrLquU52RkLteAPZMnv72DxLpKWQUMUMfuKRJueKEuViTS72d5FxrMxwndU5c",
  "key10": "3t6uw43of6czNeeBw3eXHAY7vNP3PdHyjFFoD793uzhhciNvWZEWpK3KNBCFqvJdFbNF9VhjSic6dxJADVPiqQeq",
  "key11": "2i8aPqhyaQ3GbnaD8b1Az5LhMgCxuezVTqBa9L9hnR7v3g6kyq8ZPS96xWmhhGw9dZqjDb6xBrLr5X5EpccjcvgX",
  "key12": "3Me3S6rbEPDmeNpHEzMoqWVNzJviF93Dmi1QHTzWPhLyqm3MUFeE94f4sLt6HgYph2QDtk5etMMmws5719oZ5BF9",
  "key13": "W5wKsTbEyop1gfgzGPHeLK3nSeQ9Fg8YY99DXR4X1hfoN9KFJxkufC1niVQhwSRvpDcuLw5BJ9qY9aepx4ex9Rh",
  "key14": "cwp8XrRtDMbbSG1sYjnPYReGqCapJqWDwjfDPmsHHU6SQFLdxboQMUYkNz2ymmq3jTynRF16ZAwe6GidwBtwZ9U",
  "key15": "5hZwEc8pgunMWVgEjL3zZHYeRPpLzNWYpqRPS8CHXUmZUdGke8ndcnEmBbqKNkDTy6KwTU7dEJfGoJPTExTvA9tw",
  "key16": "2UdVCcW2sgLH7A8KPpoBNQyJ4oQwfitaGT31UCUgZqgtp2XqLfBJrBs7AXXgD6FGDW7ifR815DWugnmQBNEJnPDu",
  "key17": "52HP8bh4cMxtnchaekwCAnizWX9JAfXUnpQRz7YUVjs8EA5yuAWZZnejvTuFCJzm7hci7TmX7XYVGh59KaskDTbi",
  "key18": "3EDvgx9LwmtUUnmPPairK9EhXmHCc9yZJ3ppFGWHHDNF3QU7WF3Pz83SdXCHevp355FthjFKowE1UP7UUBecfZxj",
  "key19": "zE2rm6JpT3F7vr6k7uk6Lk7jgxUkk7XTptVdTeS5tUc8waHKDjtgKjSa5cBxnGU9VBvgDcNvX6rntmF2X42mkj7",
  "key20": "2q89n7LTVyQfuWGUYxbiKCWszUioQjHHnrxoHeMXjv9UVqFWUo7uzocLMnoT38bHf5copJYDuzVbiSWEvXZLgakb",
  "key21": "28BnmYnGoCEiMb48epizvCZFrEnutShm5Yft7jxYUAgtWfE3hoog1dCLxjP1vp6PbqPSjNga4aHiB4sy6ZmgiAja",
  "key22": "4Q6Lvg6bVSB57c6B2LdQFTo58yU1C46BK5nzdYZJdPHdmtGRcEmcJPv9MLkGRF9WEjSgaM6W33YocFdW8y3LDh3a",
  "key23": "2pRP6r86rPfgydAbeoHUBcbeF1H1U4cD6cyFvJoAVwTZrb6kpUhCE3ArMv7kwjpyLfuNdioCvFMVLZSCZf2mR9zj",
  "key24": "3skdSF7t9kLWVRzdcw9UyHLSTDkvkwRvnwq6jHrRfmHNQ4zYe32JiJR9BoEyMeEXFPpFtFFDME7bQxkuzmKEWtPR",
  "key25": "53RFVW1qvYJ6TpZNEABau8bRtHHnpCh9aaBL6XYfp1DRYHonoiYsBYDtpBQq5AsKz95NGND1Fcr576Aou4mUKNbp",
  "key26": "4VptmUmaGU2bHSSXpQewbPgaCAziM4se1cNrQcK2ekwFrLTAhBLufz38aoR67XEHhwHz5M5ftsu5ACP8PsBYs5TU",
  "key27": "2ZTqukM53yZuTyQa2ofK9sr4tkADUWLqzyfzkrss2ZcLwidqYjwys7fe47KxLU1rY4Kn8FFNFMQ7QZ6akfDczHru",
  "key28": "49v2DBGE4scLDjELySJKoTzSQM1w8Ln1qPo6zJ4AxPCqZ3w25tu6K8Wp6zTuQ49SciCDfWiWJWyAofv6MuovKE62",
  "key29": "ZUh6pcfQarWyPNkKmaGRKoWFARQ8GWHXWKQJDUQ6YQqGVotX1YtNwirqHPBCrAnvBjt6CuH22LkamQuicN2K5hm",
  "key30": "2jdgXHT8ujxYpzW23wvF9f8EEPamug1XpY7DMkYi7XtfGzoDRk55XkKRU1X6VRNA6TsaPt4KKxH2rdk2iAgvKfcx",
  "key31": "2QorhTAzZtZHSdiKQVNpn9JQAWAC4EA2fcJcqD8LRRcSFcYpHF78TBB95hMrbLWojx6teJ8psyEBZDG59ihj8Ebi",
  "key32": "5QJzeZNfPismDM8ErZAB6AtSMFmJdMqdRamBvJGJTJ4gyi9VGocz9ZiYidmYTmktKA5NkcuKLoRyoyFfsvKw7UN9",
  "key33": "4Tbm33vvr2XbbMfEn9kKmdjzDzV59TfziB1y2J39u6zV8JtSjyWWwU4ZMo5j3dDzhXGa2yAo8AeAPN59LLoNgEuz",
  "key34": "tFoxsEyn27ehVgESgUWfwydVq28GspH3QDJBmTFSoaSNwCkquw8MvDS19hkseggd7788XSggP9xrEaRUFKTULhy",
  "key35": "25uZkFvN2mAuDoLwq68sFMSpJkmubfqfUyqMzqMLcYvdNTxCzqGHDf9ycCNC7zCdVacFH8ysvwd87x5fvLpofaoZ",
  "key36": "3rfcUGeitQYprKAYoGQpx7MoMagHMRC1eWRBG9E85aoZtogtkBih1uMgYzzRg9zzYiKgnxw6szfZsMkXGFam9V2n"
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
