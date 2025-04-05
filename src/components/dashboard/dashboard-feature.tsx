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
    "x4sVPeYcsN4PjxqMfwkvbXXVHsEy7eYuVkXtbqxxiEPGZhjEAnMmVX6wVGGCoRYzLcyyxUK8TdvZXrvDztHNhTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xu5KrC6fA3ZgJTw2zUwLiLsWznZ9T34VbAe5qDozYcfp6TGqpA2bWWdJgeijmAVVFARSLHkuqe2Bv9LF6iVsx61",
  "key1": "41RfHBxmkcnQPtLLz9YGXckY1V11e44xd3tsSrBX4HW72Nr7ePecgR9H7qo9cpmZiChSJd8UjF4ay2vVKnQhpyBW",
  "key2": "4exP8W1uetRQiihmn4GTB51ibhVVRuDTHiRXTGgvsus7r9xvCmiBchq4anmVjcCnoE4sd1iiLHqBETV1CCpFeyHJ",
  "key3": "oYF1hViE9RhmbKxbo2JfVxmzTnELMraicbdAGu9akadTmjyihqPwawM5vQoKCSuWfC2kY3yrv33ra943zEA3eZ6",
  "key4": "4DQtkquom48aUG8FFz4UsBPd2wbANp3fdZCWRN2nw9iFFRhjDB2zaJoyr1caKtyYRQnN4MrGCZmZUyARUg59NLVV",
  "key5": "3Fmwv6FfwcTk81dPeBYAZqK8uD1X6cLF1DBhFQfF4a1CGnC3pMLaDHvUybXJpUxKceVdJXSG6c42jyQkp7Z1CfNW",
  "key6": "25wE1ucLQXbjuzZrZP1yi1cq57RD5d9zcJiVStQpzTibTs5DvdnUddmeDWB5wLHnkCeG2t2UvnCjxQk4SEmuGuUq",
  "key7": "4CDA51nHU6zxUFbg5zdjF6bxZJ15mcC5weJvp842jp5znaaMyjEzp6vtcrm8vxt91CBihxG7i7YGyAxUxb8boo64",
  "key8": "41yXTHmRJgUpSGNQYs6irNR3DVrXWJvGBqvMUBNLs6mfWMSyhhkFeAFiBsCzfY2BpKr5Bu1YFBHMCWu1aH1XgG1g",
  "key9": "4iEVewFESSdAoXmgLFVepZEgggZwyjscPUsFmXHYTk9yTrccxxA3TFFhSR6HMnvnZb8gZmUDeoF2arFqtbAdKwo9",
  "key10": "3iViE3PamMU4t7YDFdcjnE2L9yssaG2hKeShT1bKQy2n4u6CTT77xmKMpAEwjV66ZPupge6UM6iQtd7CwiMF8fA",
  "key11": "4p717u9WSvQtcmPkSoboimXPa3kB2ytn4iRLYM8HLqcWLkL9mczAZcxbczJiPgVCPeRv3fdCU2FwhSRffdqpuMY5",
  "key12": "ojPFLwufvYiCqLjGd3qvQygbfhTxc1nKWXZJYzZAtqZg6mXmXPD4R2Dp1TfwEtKT3GzPFh1mAig7dpPLMMiggcu",
  "key13": "4vukJL8rVQQo2AbaPV76t4JnpJTzsfkDfTAzghBW9AGznn2bYqVdhFPH2HGDShxY5fHVg8WsJKEixVvK3zs9nYv4",
  "key14": "iqpSpLmVMiy248VgWeadSauTsMds73DdadxRxqNzkQTuwE1RXMkZpW3PAfpidZNTpLU7bBoZFaY6Jg6FzPxCpRD",
  "key15": "2KKe7fjoFUYtJdA9gbwKoCpQaRwSWLNwW9cAq1oNamc9mujDbiM4CSekWwiQk7hk8L7FDGWpqpZukLcUes8L2me1",
  "key16": "3wesf44wq4hXxfsjKN9m44A6q2thMfzWhktJR7q8bLaoHMxXeaRsDgHgmzVgN1LyuyVr9rqTGSR9LzD2ACcgsnbz",
  "key17": "4sQnKz3fypXM2CGkhpTToHj86KfHcJrLjoYY65kTjdybzmePy6G4bkX4iSJzpfbM1gu1SNXT7UecDe555yETPnYp",
  "key18": "4T9Fqw1gAFTjKt8L4Ag2e8jBkEL88MT7w4FaEgqRnmx6VeB7ekhA6CdPMaGgobQx1nckzcFtPqzWyfYuVvAQv9LK",
  "key19": "4WFnLYpLCVCKAaLxkwCgVXw65grz7A9EDFRNB81qcC1faiSeojXzg9ZSiKhX5SfH9ffNumggEYGJpbioEyeBv1v2",
  "key20": "31pcXp94iTAfgEX4mKcRTL3qVQBYqvxxDL8knyQ4nxkDf5vKBz9nvGwpk37u3oQT6AReiuq6uyy1be8KyHPVoMq9",
  "key21": "rGsVVj9JvfMWMCXx6j7cGMdNAUxtW1LFzy6J8ES43nW1KZjownfNAWQu7Pg89yL22TqfZeNYWnYM65ZW1pNbCzp",
  "key22": "5S1xFukmgRuxivvUrHRLiAbHaURAXHE8uS54Xm7b4ZJ6wyi7Lu3eEE5JQCf7yJEEf98yja8k3VRfF38urNCfqZnw",
  "key23": "2U5YDxAgnXRH7yDyLafH1GJXBJVub1J8P8URvzf3j2zTty2wMCXkg468QmHvDBsRcNAoo68eX8at1fbDPu9yc7Xb",
  "key24": "3Sde7irax919nuK5LH8VyC1SYAPcsno8DUikw7YqV4GD9dEyvqasqTjUt9kj8WFfQu8SAcLsQiC2NdKTUUhiJN2w",
  "key25": "2i8jAvyUgdV1UpS48MCYyoXFffUcGRsVqr4usEqa8dMGBCNPEdhntKPoeCtuGp5RZqD5YzCf1fvnwAt86kFVHehK",
  "key26": "5BeWJXzmHbXLHHwXKiNvYkPWKVHyx5jbvmm962Pdy8kwjW4pxfBNEzengLyA27nTKsya8YtvV2ZRoRXEu5HQEFYL",
  "key27": "4JAj9wAnZrRNLATFRFso7TtEghBAm158UDB8bMPF2Xi2TnFJKMCLeCG73dToGHCHorELeCaXZieLYmwf1vcgfp2A",
  "key28": "552eSc9MvqYirf1wwKEC8N5cKg3Lqm6CTm3FbNs1dp3DfjMYih2fd465jzK6Zb3mY6eQgyWvVtYMKoxyn9Z8Hue3",
  "key29": "cPcCvau6UosNySfJ2ZgVaqQ7vG8vjrqbjm7LHG88EsPZXsxf4Hn2cJYuCZEHvqszLbBC8kgbVmyj7uUbJaxCLoC",
  "key30": "52ahFLYcq8t74LTcVEE9KbDKqk9ijs47nwvLUFabrnd1bgT5KqdykN2u7FML3TUUbVm6LTuuqND7FopzFkvq9eqX",
  "key31": "2a3Pi6Z7M4Gqa71y837nmjApXA5LCaMy2Wj68yC7UR9W1JMXG2yrb5yYXvKZM1hXboiLsXy4sUerHbVMvdtq83VD",
  "key32": "4Kojrs5jjW4bFX9xQkeCFDEsQ8fg2pn8Y5KthssMgLfTbDqsit7h88aCY3CEKdMQjDhExb1zdeE59oZjmtAgbJ1G",
  "key33": "4fHXEuQe4mmYHmg6hCWnjuYyKZvMSdxUQRgq9kbtCUkYzS8atKRKHX2CdvKs3TJiD6v1nap8dyajhKC7YjLSkMga",
  "key34": "5b8T6tvd5egK7mRBdquGqgWTxM8EvHCKRm3q1iFQc2b2rG2tGW4uhSnDHGVQp5AFdTBCYxzDUDPrcW23nmrnASdo"
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
