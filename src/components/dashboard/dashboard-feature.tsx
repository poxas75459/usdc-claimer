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
    "5MrZKogFJSFT9r64yf5uDjPfHvmsQnDoQKTzbvKxD9atRPX6hh6H83ba6GNSFScsjkNfPQrHxME4jZ5FM7RPBhro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLKeKE4SDrbGbM721zNFLcMRHjRYD5jCPdReMBwpLgP4EvXAvPRFYyPHetHZ65r3GhJucDTETC8DTNeU3BMwY8q",
  "key1": "2j3DWxgUNk3X3NpYz6PECX5p4x1jtB7i1Rtg2cLeK9vBT65wp89hijqrd5rfjZEo8uBBdud5NMexxbKoBiLUNq24",
  "key2": "2UFc1TWDESbZ31qsTcg8TpfVKgx5Qx9PQcCfDiBpkmg2QHCTRfvS6DoAmB6hkNp1EJHURAmUCr6hB5aSTXLyz9np",
  "key3": "4D2RVDjHzGtM34deBWpvZHoLrapQDgm58zByZKXFj7LmsKygQZMzmahcDzd2Bjjn45VaHTaEChxX5Jfn3jVGgD3W",
  "key4": "3JD26AKHUHaPT8CXxN9ahPe6rP3FskqZF849HSttwxHohVeY6aAxm2JaBMyALqQttRWtrBvDL9zJheoqYwyJDEM4",
  "key5": "Rmsh1U43vCKDuM2d6Cf6TB8MocRuKBWqw2rzyaYMKbsAceuSkjagC3gGWJg1cTsWt1rKw1Nq75VWtLW9hUe6i3Q",
  "key6": "3XAT53izxak4bbdVkSFmtX8qaBYuAZJT2EizeQv1G6RaZEN8D7TFoeX6ZdnRfNVaEsJa5JomVJq5C6azJovoGE9p",
  "key7": "4zT4EE7wQfSMwFgsTmFzm8GZxiybYYdD2HwyY1skfDtaznF3ZVLU5m1er4w3NsGLQDwszepg8mGdQnuUYm4Q4D4C",
  "key8": "5E2ERi2p9pNWhyYbPiBsroMKRCoZoQJaUWqqWkCSRUgR9e9AzfTtUmBPnfM6pzAqicXjue2tV8peyJX7vdPbmm9Q",
  "key9": "5wNvR1DZtoE1PVzV2iMBGpgDBDEaLzpw4CVTwjQ3WWWB5TmSGbkboupTsQ8xTbMnj1kUtTYWWeZ3L93HmDcHqGGL",
  "key10": "5CX7WNgijg5DzuNx7T5rpLm6YSwFKzUMeJdu73VHJu9y3Z6z24BeP5wxJv2yDApdF2aw7PJznRWComPdSYTEuEY4",
  "key11": "2xndRL2VN8fKYzhPG9Jz1vjM2ccfGboXbthMU1XTLhDpemZNj9grvkPsR2jdEFNonRJCr3fAkMMcSGAyWwumaa9q",
  "key12": "4rPkjQRL9EJwy5Gn5xyN8Y7xnKCXjfbCkD1RJUcacEK29ijNJjchBWe6LgR4PmzSsFryNF1jiSHtzyxdiUDNANmz",
  "key13": "2ptxyrhx4VR3Lua5cgm6VNLrHAhCZi8ThisiNgJCVmcV58XJ4gP3ZPfLtQTfRGALqZbSRNnJ2rP1M32MKQWNUAr2",
  "key14": "5tMG3sK2kdKcqw3ANMU1Q7neLuQ2XwyrSwdWAkrawyeewWrMGKrGXBtUwecV4huRY2f55Am4GXnx191DUbH7VDc8",
  "key15": "3a2N7N7njHMowWjesG1uoHVXQhL2DhkeAomf2HAMdf25uG3Dgk3nbSR4UK9p4Fn9wLxEj3jXruGmMcuzWuoU6ipb",
  "key16": "45nDuE8Z2EJpHv7Vam49wkcWjqxoEwgm4Tphigzx51LgHs5eex7wroKdbo1WQvGD8wn9E6QfNJcbNb1EDLdeX91g",
  "key17": "4SNYBm2mDEDdZPvSnFFwcAXjbDaGQqAFKmqK4DU5AurBL7KEQ6HswXERe1dLr5ypGZs3AmG8Z4G4gb74x2ZJ7vq",
  "key18": "4hYDcU6w1nw3RygHkkjSxwb5h6jQfe6n5QCQ2tSeQymwXAXudc7LuUs9wqGkgxeT61ovP1NgirJ5X5uwBrbHm26Y",
  "key19": "X7NJpmcLmKQ65b3vs4zcvcuLdKujQFpgxQaMJhEodKaHQTohKyNWma3RXhSTD1z2TpZ5HzfKcknNeyhmiQzDpnx",
  "key20": "T3eCmxWB5sSnTmX3ruPZwMYaAutdLrYBKn32pxB97T7a6dibDjSe2o6KyKLfuyDFzRpxdVi1M3Dx4kg2omzPVdv",
  "key21": "4EF2EYYKKWykcGVqBK1pDPtF2ucUXbXgRuyrspqXPNrY3do438qvw69WzbY9cPDiGFfXRJ1pW3YXd6iRZMx5MM4C",
  "key22": "4xLP38Dfn9nK8bs1ySpe8JmTfyrM9Fv4pARjwAEViPVSuDyQMJRub47uL8K3EDoWckBEmM6bNeHGwpCKdQMLuSTd",
  "key23": "4JjhLQyJcZL9UYEjvt1aKJh9EXYxA1dAun3EzvHW4HxVCMD5gph2R5QQkBvVsWg2rcuCuqoqaXbStpHRxPRJRUQF",
  "key24": "3gNs7rcGFiFfNk6mb2aUewPp9UBDkB3Rcyz52WaNQxJQMZkXhWPN79QzSHFcTg8ALEjNX9TAg8ejUPxK9doofosC",
  "key25": "2b6Xzn8ik1jSYi6jXh7TRgMEMXaB2S1NqvihBbkWfLU4mz99iSTho277eQ4SMQjFx5imC46Sczbi4cww8Q3J7W9j",
  "key26": "PEUBwtTBtd8BQMM6AMeCtQjUhSiEw49LLDrBpr2UF8DmzoeSRptoeusrqqbY1pnKXFScpTcwtwMQgxWXzaX8Hs2",
  "key27": "42bjPq4BmGMAEC2MBKxViXktUP1Jrzooxt4BYTcVabr3X8Vmn8ttBY3azPKDXAEhcZvWEuBSLGAAN6ZWL4ws5UAQ",
  "key28": "3vKZcfa3Nvwgx3Fi9CbTgLACntsbxyjbVvtG4kZ3bpxF8KZue2okWTD2iEiUebgwViS8WtNo1mjbWaSTUHLC68EK",
  "key29": "2Z9XJmie5GomA6ibWuGHiPfSUG6hXNqNz4CaNvSYVWHk2FV8LE42wtouTV2zNXF9H1Pj5m9MzX1HutfKbPY27K1R",
  "key30": "4kkanYdJpCkKewMfuxbG3fuKRE3oMyqkpYSonNjRG3Fx7a5vqEK6hkGQaerYQe1cakxkWyX8dipjjS1AZokbqqur",
  "key31": "5rJQBxYT9bRJdPecTYKkFxi2WfjRCryCm72dpfdxHPdsXpLpi61SoLCKdccpq1bzyEVKZ56HbzvPtpmQWiqwcE5G",
  "key32": "4iEVUf9VEyWrLgShGdNBkBsxa2sNMKsXW5ex9oQN8gnog8Y8qcx46iKsCyQuHfSEx6pm8ogudnPKMYxJfshj4FzK",
  "key33": "48f9FuAvQokDLgbitzDPXQPHewXShDgRR2DsVjLvknvFfqQPCQejwovGyUkhxG8LHz4vQiSWjtfCb4vyAEs3Fo5c"
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
