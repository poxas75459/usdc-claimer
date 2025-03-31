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
    "3JzmT22y73V5jsVWAPfTJcpmAQfZSuGBjYup6aDXURLhov3c8ejBkvHMio1EjjPYNAEjc4pbAw5Q9YTZHMisgCuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Q5qnUzBHoRdRBs6Wf8mQpKwjiJzLDXhwZe1ouPL5mECDYQayoNNmcTdN4cK3Pp6XgRXjfHqtBbFkRSMVz3huP5",
  "key1": "34DgbfB2zKsvYwnF3oWcfC7sXxukgUD9c3x8zHstd2USbVxCzuYjuBXjrnoobkAP74DGJddvkJotpgF8bKHXLmnv",
  "key2": "3x1dHnxqQs68hpY78QqTf6YDXKgtXT34UHTXekCXpTfMLExbZyP1icnqq5mEQJbbK69tfLMNti1R3XcGvbxVD1C9",
  "key3": "3XWEK7f1TsMiqriLWeHYdirztzETKewvQKHcFEXRTFX8S8bKDTNXTEQUZRzputEHDEckSHYPtyS9SfV59cEaj5ok",
  "key4": "2jcNhJDLzj27rpKehN6SFugjXDinzmTQdHUzbAAp1k5vhP7HBZkP7pSnyhJYNiNKt5VK1LN55Urfwxrjf32nNkzT",
  "key5": "5kFmFD6RKvcjGMfEsER1c3aa7aYLhiq5S6ppfECCgZF8Uj7nZG1uN3VmxaHcDheQx4KCpUXrfx8EGFDCvmkwdfod",
  "key6": "5QfpevEnB3fi1kWHcabCZw13KE4zrh5wgzyKtHods7caHu8nRm2yE15ckvkUdDRwY2veFL8xLtDCnevijR6uxsGh",
  "key7": "5kmRQDjHzETVNfMd9cvWMiiFhvCYLZG36MX9BJhQstZ3S2BP23w2EQvkNW9zdzQ9fyQDxhHWofKo6axR9fbdZgqD",
  "key8": "4vaaEgkG1fbF33r1FKBKECm7vBeRvR4RCR41RhwL2zw8b1KWwtV91WW3AtDg6DPnrqNSGWstmEdRgfzrn8fnFc28",
  "key9": "4n5g2Nc86cUTrGYsAW6ecZQQX3TSvAjynDChYj4aLjP7YTd8RDgTKrwcRAnvqcNGNCHRJncEYtVPpkAG2WLriihb",
  "key10": "qzLtnYJcbmgbLnaYsTurA3hQhoNJyqNSfh5DidShxe1HhpPYCJDxYMVCWALcVVXzHyqtteiPhSTJ9FwWtyXaYSB",
  "key11": "2n1xWEgegovfSz5n6zAtZ1d6ov6UV3Yats15YTJXupFRrzrH1UBJzmYatWC4TsT5hMxvsYC1e6Vx4avHewDcvEpM",
  "key12": "24mhYpT8zswCcMncLjcnAvBmjfuH16eXUGLFviD7aNBvsQK13sDB52PrHFoYoQrMvMft1pgk3A4aSBwmexvA17cy",
  "key13": "3wvswRSowfGPC79f4NLrC9ywhf3W1fsfVzR5PR46u6cwwsE2FLQW1YtgM5WZzbDwk4MozzRjeKaKR8yiQvqxyypW",
  "key14": "4wbKLtjPobg1vP9a5pV48WR5UPH3a84BwMUibchTr65U68Dh9UTF73H8wtYkRDoPnvvEXRK39bJRRjRc4syvaytP",
  "key15": "2qpDJ6MV8fFqpoH2tWHtJJbUikztod6VAXhWK2jKgQQy3Cwh8TCQhVEb9oqYAJP1U2ePRBPh5AZrRBb4wPaj4Nb3",
  "key16": "3j6ByvvLWC1LUmRFxqrw5LePmCqmJ26Ms1jrDixGxjzzGoURsLwswUPJpnFheucsZBHCVude1a9txyTH7UQajXtE",
  "key17": "7witL6SBrkaLmvdsw9x6MyRFyCVf9xqS66d5KvwX7geDDiFzp5qkftsAwMvs9b6TrzQcD4yBpmT99TMuEkNJdH4",
  "key18": "2ZfzTHY1GijkA6H1xtWSgctnxGTJcD92zczHqENieSwRaUY5Mj8QvVcfuR14oaDw6ciPqPhhzRoohMBmyLPHDYNR",
  "key19": "4Y3vEedGzimb6QDpotPLEec2cZK5x6hjQeZjs9LRzxSUAVuCUfyZJUmn6WtEo5fTqp91QU18dT1kjxsv4uwCdgZc",
  "key20": "3HXK1N7K5XnCbEXAifGbX3AcwtYCUi9v8mnmEf65HV897S4gbut2xsJEJiiBxZMfYHyYGia6oaTjZRGEzJDTnATt",
  "key21": "39Hs9295ygknGvt6sKxzgFcV15ERYyKcicoTELoxEPAahHZ1edHumSCSzfDkQbVUHAZqLiHucM2nN7Ppwbon2Nqb",
  "key22": "5nakmiYLddwCw5tyX5tUv4bhTYz2asYJ21aXAC4tJVVeEYvbS1MvXgX6jgpkbFXbhAJdqosrR2X4yYmRbdDf59xX",
  "key23": "58GWw8GWTsVYEzHkUq5BMcjqvuoP3RpPG85GTt4iZFMLLtdMMYgWhZzHVsSh7S818Pw6JneMUpdXAfQJJHJv1heY",
  "key24": "4aJqdRFEdF13L3VWVrSZ2CCFqmy76QzRWdy71YEe55i1LcahrMQ2BN8n25AMLoyGq3XiagvtRGnLEMRcieigZUTb",
  "key25": "5qe9g9KWU9uhFLuHwAoqJPw7QntFzuj47oaujGDV3CgEnyGDAEhBMJbQkAitjWwqoPcQjbmmvd63b5MnQxrVc17f",
  "key26": "3L2dQP11gggddE9xSK2Tvz7KiraU7XBR8n9Wbva31Qsn3efe6ydHBnrESycvD3Q32yLkR2HgKouAuZYfFkozzQEY",
  "key27": "5wJfkd3BAC4gmegL7vPh4QGGXZjgnBcf4zzCesn7A4qsA17RgpNYdwMLH8GNSciJ1Gd87aVsTE587SgKGDyEYRL6",
  "key28": "4t3EJFcqW3Z4kRyxfGUBp3nq9ddJVYs6bLo4mpGA4R488YneHxPseYgaAy1moaKrmeT33ZzqeWeVbFiZHb5Loeqc",
  "key29": "RZJKJxgi6yGsSCcZQL5CPBVdajHuC4wHGRy6HEnNcpkd7ETCqmaZSdJLAqQedzGJNLjV8ZsxAqEXXV8RJBd5yQA",
  "key30": "2ebBW2zaacJRzsgDbgAExUbuXGcZ8kx2u2PtCyfxx2CTQe2xiP8SM9H2VyyxqNXyrNctMeJDkDuHKWfF7n6xhYZD",
  "key31": "44zvSqHbBqxE4SJRytrVkwvPhFvzcjNXKnUtBnuXn144BYb6q9tXgCFtGnKKbLPjuig6cX1hPUywteiASuhJkcNu",
  "key32": "381mf7uo7SCoDZ2KuGMPLyZdTHBrg3apbagWR1xTi562JVt6aeUqN5wn3xNF7dNgkoZ1yXJZtPMeN71sVuUxrPGd",
  "key33": "iNswXzuMDTcgxgtiad3Tx4C29fSqgji2byafockX359BkjvBajc5GENCrZBw4jqyxrqrNcPMMKyWFENF5WFLw89",
  "key34": "4xw2sQM79KWcsBv5paTtZMrGEcFcSYP8Kjc9rfgKaBebhbWCjQeRPLojAZPam1N2tj7Ev89GiYZwBvYBLp3dUXVj",
  "key35": "4zppEiZHbdia7KHNXqCJnLopVUWXYrb1JHX89xj46o6azVrR8XB3KSZKfLM8xQps42maDs4vUWKLtamYdoiR69yx",
  "key36": "5SowtvVma8F1BdJHcmWv8Yk8GZjjmTfztL8Bg7rY6b3wp7M8s1rDAzWAdyPH4qebwRo5RCsKHUDoguTzHWuKNnjx"
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
