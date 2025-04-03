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
    "4te5wo4HX3gPLbLaBpaQXmUMkXz6744L7YHeU6N12vZttLBJB45T18mQc8PrzHoAtW6LYnx2rgF3J6kN6ETdDFwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w5WLCtMvEEgJvAWbB8Fcu8kpJpN8avc1VD2wZp74vU48sySXsjGEVrQeuMxJZonFaVqt1S75uBamZiMoBqtCLqN",
  "key1": "jEQ7J8KMxd7fBA1j1tD5aT2wai5UivKpt8BWg99z6fYhRS21phmfB9z8WKzwZYQy7u49C2RXNuNuaPG7itq4vkm",
  "key2": "58E3W2z5xyxGuxG8Z2x7LYG6ikMRvSJv4X2PNukFWxQb4Mju2ZSVNuds5ckHAEJN6zj7PVFuQvuYGdsKgKNTGAzE",
  "key3": "3v7X4NfNwZzbJve6xQkHDLWNYAb2seBZhQZDx9MA7wnmoFnfbCBw9N6KNLcbUfwZEfrwVLHcnWr7geBvgbdGusBh",
  "key4": "z4CUchcWtShvB3X8BPLu7jLtDWLip1dcUpTPRjLma1Y4cf3ovUxGccDZUbServ9NkXawrKjA1zjUHCNFcUMWR5d",
  "key5": "2xm3huviUvRUhQh5Wc8rpYMumixrV4NfhwEknLqydN5cG38Ypf4qwCec2vco6Z4gDy9oh7T49NmCs5uEsveYN6mS",
  "key6": "468xXpdxMm9U4MpmJvCzgtGNh8XZAKUwfjpAiHR9rbAJknNiBZLSooNwR573EonC3sg4zYKE2p4FGLXhRMQ6qqyf",
  "key7": "21ww9RENJg6Me8VZa2w1V8wWKLxcinBQugpfJ2r69wBYk3ow4bzimYFxFTiZ3MkSTHHRMVPjYEC6hXo4ZSfPpBsq",
  "key8": "4oNTcfvQ89KvBWddgaQXBJmxnxqjqv81uLgWN11cDy4V9uCU4CpA2Jge48dKe35A7ZjN5eK7pBWvvqtYrDCFNALA",
  "key9": "5FFEEdLAjMFv71EvdNAL66n87gRYmVNb13VChrYKkBzJCJNm1q5MShrjXn5utMEcWNLutQ9jnjysV6McdJzExC7V",
  "key10": "4btzxgNygjfzirSTsZocSRnkViE3Mf16Vm6HWPHKr92QL8YhL1SnW7N2VQXqcJBAovjp5ygvnCnUrC3LbVTXYhNR",
  "key11": "hCjxLHbFSXgWTXkoxMcPnyADEkWNjcmnXgTu9MjVipfNGvtPPs9geTarVQBDRkfaMFEYMRpcTbjDouVrZZqTRDi",
  "key12": "2qpgR764hCN39Vn5vsFzyPhRD1JE5rfZzdGDGbsuniBCoqrpktWc1t2CRRDCGPfFyXVEWc5BRyb4sBTyTmtwvhft",
  "key13": "u8EU6VmPwVNpR9yCuGrmHS12KWtsSnsb9csrRkAzhEuSdjNeHnMmwZfVsvo7P2zkbFTYbiKwZJyTEFUh3MyTDje",
  "key14": "66CJx9sUvmNzEyW7HsxWh4o7AAfRVpiS85ZPbtV4d5ho6ix9PTKfbRYpywsLSGHqP1yKQMaet6ZzWSuS2ZDBXAzE",
  "key15": "3YwYi5aJftRp5esh3YvCUHjwdfwFJLDAZ7fP4rddKgcdN5Hk47c6r5WiHwRpoeuvKoj8WE8GQQPwiD6c7dJhDSKQ",
  "key16": "3PWW4zQHYT6vDLujpMWuAjvgRDAHBfnJRDAoM8LkfgmzubjmH8M2dUcyk79pTZkCWszxzTcwzCt8ge2SdYJGCAE7",
  "key17": "2bAQwpf7NRu8SXFWMkJ2PWNpBeoN9finKJnkJFKLSwnatnyogBCqh6CMtEtXbLqHoeJaLBqb1W7NN7GGjYGZZVvC",
  "key18": "4UMwW6FCDqmSXZiaQmzym2i9ERXzGq6KV2vmd3avZLDUxsgzCTkNDAA5Ke2qBa6trh78UUTzpvwNmY9P4fNX6cqT",
  "key19": "3wKnHmtvEkxcMHyufKtwhKWzYm2k56xhQTijEU4Zm88nRcC4JiAknYBbg5YJJxYwX8BvKRz1AvAfqWtkHSEoVbPc",
  "key20": "3ojFCqLHdRkUvhZMw8uc6DneU3WSZathtNvcAaYmBJ2EGBbEjiQaFM7kU36vkKGqqBMZ4CY69GzRjbGGkZtwK12r",
  "key21": "4w4vixpTEWgPPbxuyuumdCdCNSMnaWxcomSTzpcu4W2kactHpDE4NWxgg6AVEb2R98R2sqSeVakWhzhTYoHgMFUe",
  "key22": "bQdzMHhz5t3bJFACwpkpZ9L5FeKugLKNiRLaoV7KxYKHPKQ3ersardvsdFTB7BhaBt5NFb4vZYa9huBi1ogMhgm",
  "key23": "PRD6fSLSDnaCCWxaVAsJqTWmauvq6VrZ3Mm7AM2dAVUY2btrUeyW8UTHLnwEJ1KNY2kifi2EVRiYhqRnbdHi5Gn",
  "key24": "5af7yf25CPg2FhxQi5j7gQ15HcUkg9cGoYx13j4V328Wq7uV9dJUJpWktNSrjvrtfY7y1KyscCWW87KPwqJxQkEs",
  "key25": "3EoKjAh3UnfQvbphtsngdbaQN44p4DcsNmHiA7BgehhGPR6yyZrxZednUUqXCFMm49JvAsLrjCtnrAx6ud4JPgqq",
  "key26": "2WtkYV8NTJx7Z44meBuW7Lt6xnDqaavqeYssGQLh2Ef55ajSJxDgmCA9U93ePuRSw5egbQ1x1d4priq7c4yv9ufY",
  "key27": "3cmrqt4Zqhow6BEyjrWa5VDTi8jq9DiNCisFrjXMUaDkXGxvKhzdmVeCaDPNCNyvh8sy1rkYMTdWKHjEQy73kaXn",
  "key28": "bea8DZ95avZeQCWEuS6qGTpigRfCcRRMcR5Ma3WQT7AQVXkTSupTrhFuPGWkNGwS216jChgkoCRUEgpoSDjeZUy",
  "key29": "63Gpgm48d9vD8doxBmpk7c7s6VeWHrctyrNQsY2RmpysMXJ9hx14wyTSCm91DvgkVHhGWtNFe9cMQ5kZaVoJpv8b",
  "key30": "5Li9eipVQHgXBeMiPzNW3u5sKUBJ9AHPwcYYV6mzugw7tsWEzJi8N9ctHfZa2AvY87PiEJqa3anUctU7sXV4BYGu",
  "key31": "2gH1thy9u8gJrpVByGuk8C8efcBnSgJbiUz3ytgtiJ34GitrBkty8aUZbCuYf5MQurTbv967AbaqQG6tLm6qVZdH",
  "key32": "2m8jUtrPrtyyitu7u5tPfrwTeFtPxQuDeHc9ea32GBr6kA5XgCjgkWor9vcLnLeDTxU9tDcnaY434xD7upoMcTRb",
  "key33": "35zXKryTsqcXGBf6otgkAeUU7gzmhYarRFkYb3KsATNPjgWZ1gbXW37vsjS8qsk3FYMc8upLZmuDWo7wNWTLg7oV",
  "key34": "5SD94F9AeJ5J9fyHEspMiK6nbDmoyZ9mGaAg2etNKWJo7c7MfZqjiJTV5fNKzMJmwSC1xjzppb93twXBFYYKqqDF",
  "key35": "dXVBu2Y5fwXRVBVGvfb2yhV574o4XC2u3GSoCir4kkYBVoinntLyM1cjEz8cDexxtHSry3UJfM5ui4PdMshqHw1",
  "key36": "VVazpv3SkZ6JrSFK8NLeQucyhoetDxkym69zMX1e6mPs3wTge8X3QyfSvmvTbDTJTyWAa6CMrxqPquGTruxMsiW"
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
