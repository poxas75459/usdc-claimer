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
    "5YUjE3MrEiRrHZuXSVguAwYKoE2ReN2jQPt7sCjzBdUSop72DsDC7BNuPE8GHN8dCDiTTLidbo5K6r58e84Yr1o5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LLdZ94ShmesGKP7wPqpgJPUkGwRUtQ98PeRvqJ9iwMWswaxquDSARY9z3grM3F4vbvuRrdPKGbhimtb6DuiLUrN",
  "key1": "4cXZeMqUdzRCbZef8WFpN4bz4EnEuxwF4fnPwxJEUZvMbkfChykbJDowQmiQku9ndrA8Q4FJ7um9T278AfYy8v7S",
  "key2": "5t2iP6ZU6efRo2aMPR3KPToFYdC8KcFsxrr2YbcxBXZvmhLuh18JuZmUYKgGQkBewrQDpeCiCjqgZ36E9TqaDDLX",
  "key3": "4TBc3jdassU5xQ8bocEhxx8Ch3BdMv6BmrUWt9dnqeXR8oqBLLi2AodzXHMSrb4zjqkbfkRZhuh4ceuzxBffLabM",
  "key4": "ZsGmqtMgJ1h9cVp3ojnq9kdsWAJPZqcDBTQU4SmJ5ZcrfS3rKq5aWpNb8F35GZUhGki3tQaEmhvdebBHh5NXh8G",
  "key5": "67jpjvcs3YmFV42Rm4QgwvC2XDENNz8c9CbAMfJMFDRFst5snGnVpTVM28L59x1BtPYa1RdeWy9tZBGX8xNrnUPJ",
  "key6": "5gw7wuRHFVTdKbJw9fQQtmQY8SKHTRLWks9P5dzfPPopmQGKaoydVbkPjwYhUyk2ocTPLVT71UMRa5st6SUyw9SV",
  "key7": "4wePyFSLMDKw2dg93SLRt3b2oBZYDvPJrXWARzAzbPnsu4xZeH76GSYVektPdY5G3YvDeAJgsKzWmNj6RMgZ1b9c",
  "key8": "4uFnCnHvA3crLbSA9XXTwv989HPQ5TBhTuyPZTQ1gozpzpBaYG6fbtnQbjdBkoFgmMBZ7m7nNNLbNLhTfrksQ2vW",
  "key9": "5euvbYC43vs1SQEby8Ae9cGoYWJ4s6yLqz7idQTUx4wvxcfXsbb7YU7h4cbeftBaJQembnAhe1ncBHUKRffy2V1D",
  "key10": "3wX73TZNsiKCeTvtfmTxKg1eAbuG6N7xdB9ZtiPTmhjBgrcPfJoVK1E1NcTLajWuP8PWm9JVnsjnt8rgWTBUh4QH",
  "key11": "3Sc6mm8aLfXW7vNtqchQpjM5CvK8MkQhFWrp2AqdbzBjTiRxKyA5Dnkv3CVn7ig2eHJTs8tzADcDHPPpyKdbqMRJ",
  "key12": "DEj3evpD6PXYbV78CWgL6ne25Ev33XpmhRR6HG1oQwMRpA9fivWSpwxjzHt7eVNeXzQNV9MGKJAT2AeWFEM7Ucs",
  "key13": "5EQb1vf4ANvdsZYaqfZavFZf3VvmbtrfTRGarTfqRmTSpoNTxNPcBFJQcMNpoDaNDhkyJCHPB5N2DP9huUsGmGmf",
  "key14": "62nC3mDgYXmMHi1KAurbe7rEMkRa8sDK5ocSwRxxfsjtu5bePRKKq4N9uTRkkGmcjmXxxrCuhMnHz8tpLGGtpuUc",
  "key15": "NjEL4SnUQUG4yDDfQmZEiWHm6NW13JhSccSHUavk5v9iUPKWMYFDU5BWF6TPbtvQGKm9EFF8XcKYzZSz9VUgQnt",
  "key16": "2kS2jQT8VirHpA4WEQWrbgx8GegeTTS5Z5BQxyvYyKDdU9zPtKznM9dCjHTpTyLwAwDYfpNSj9XEPm2WBRsr4svx",
  "key17": "H2ZctS8gUuoVwmEud49Lhas6XQcRWEsCPk92338ZvmYiK6D1U4HZwAUno1oqj1sfZvPPKQ3u3BWAHh3PPMWQPGH",
  "key18": "3FTKccu2PutGLdQ2R1G2swvtyZzRYfmLTgfejAP6VNhRoB5o9Jat2HsXa9iDmS8toRdQzVLWL7eV661gBxcreHzD",
  "key19": "64zVH4MpNxuW4fGZ1fhCouXrDuM51uQmvYD5p54vxJkb4uZ8LRb2G3tovzzbQEDQdGJzv7fT9MvpUdxSXDSNVtjq",
  "key20": "5kMHBS5pAqbwQv8ks98BcuxuyZM8hm2Gwk9qsYfQjaPhCr6Rt3RXbfj4y2c31R9h5HvzKua1nEcbjiaoHJ4wfJxa",
  "key21": "39kX63qzsSWzfbpo9b3UYcUH3yGfL7QmD7CxzcjSWgwN9vriLbgU5Tks5K3pDKmjzhdv4cLziyXZUQy1MneaR8FY",
  "key22": "2jKVgqMUPLxVSLes5JZ1f6cfTdm66gmtV5KbBBh5W2X51eB3SzAcgZYbEaWK4M8NZJkmKiBXxyx1S1xdTzLXRojr",
  "key23": "4NZewvxAd8TGyH9Z8fFAe6QGapgz5fE5yy4AsDbKaz5L394swhyvB459ciWWY18SAcuF82a7uCYc4Fgd6v8DrxiP",
  "key24": "2yck8ZbWeVE1YQxkoNwk9FMbvWkKvsDfu5guamPwJvSZbGDdU1d9EsGx7dE6WjE6uV631R9Z8XxiAid5Z9SZeCbm",
  "key25": "48qWQLohRLCHkP3Q98KAeiFHoCW63wUpKCxb6HCjVAebWKUVpEz7KoThe5pc5JP8YVvPv5ZtmuBcywA1CwrjJ2h6",
  "key26": "JtrNpUffa2fbCsyPAxnmLdTctkPLfMeamdw7sEsCzkw3spR5Pb3fiHvhWovQDL14GH1cnh1rombEGwf9Cvw1k26",
  "key27": "2eQFMxGWnBpvjFVMKnbkLY1wTV6NyUzHmrT6REaYFxrdnZtTiXvfiTBwymguk1jdUx3tdMF1Viavdq9xtWM4JtUZ",
  "key28": "4tEDbNWMQ3XYJz8XED4eGh2qeyyBJsrRKx2o7rX7YvwpNVemCVXVZmCL2VwDbDjAGubUH8GnkngFSmZSrivGxAmc",
  "key29": "3jwBFHWCpKLC322HLJ5B52ckoW7mr4LzAVaeF2uzTaTkJ66X7A4s7PL9tcWBQk35qbiVHpHPDt79DpQjPUjrn4Aw",
  "key30": "228qJTQgAk2BensHvYxhxXRHB7T7Qh7sQ2nUa4czKiowTXd9LHhhzSpheiGnttpXA3xWmmjiLuDoF3tBLXAueQk5",
  "key31": "27iAFTu7iWTPtFYpaoAhpGX6jRDcR2aErUeayyJiwFzc94XFCM9c7gtyHBRqsN37PvZ94fCLCfmJY9t1Dkk1sZGq",
  "key32": "5NbFnCBz5Q1JmEEVbSJ1LFXKtZhu59qjHrcxey4hN629NQWbxyDHWT9Shkr5HJqGzu6wxgGnJnnWw5REn8XK4tLJ",
  "key33": "2kqiwiP4PCN7v3EuQzTKg8KxDAJq9kzZYJm8ivqZTxrPpdFH26Vakn3m1mSyXZBVJFcMRVuyDxteMxCsCTobf7KL",
  "key34": "5o6EfGeyBapXt28VPLp2Cu7tWSGnMi6f6U3wMHjn6Yj9GrBUdALD2Npxhc1EHgGAcMfX7QPfpisqzYjixLNGQvxz",
  "key35": "5VarrVzeEj5xvtqZt1iJ6H3FoFkBiZtTfVcvAXzeWKtge3jPtN2XV7tZcYjXk4EApLLG3yWod1yk8GzW3XukUDzJ"
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
