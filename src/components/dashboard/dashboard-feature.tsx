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
    "3kAAdevpYvXEXNozrMQuoXYhUvCaApyhWvSmyt78Y9yDPHNn35iKPPvZoavAewPwdd2HnyT7hPg9HLgqPi7Robqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dRsVRZtvUFm4hi6NMhYQQQLopN8mFPSD5ewPMc2yx6ptpUnsYCq5VJBow2XGenKrs9piGgQPmV3vcMQ4mvMYgb",
  "key1": "3iHFAe9SDV4JxWaMRdUbYHEHD5rfkD2dgGm7Du7pKXoyHbiMoQqo5ksvAPn6DbHLm1RXjcoWJe2br3fxAMycNsDD",
  "key2": "49kUEz5Vd8ACKc4xMaHdp2Z93PxCgA8yZAtPWjZWNw9Hp73pm5TzR5xtjNzTRo3KtX8tSEv2u3wpWWNrztqGKiFE",
  "key3": "5LApGTdXN8riHRgwWmTtfA2dHKetw7gAmeYo2Q4cnT5BNXwAPFGFHDU7tqyLzZ1dt47k6hcWLc1yASEtLGP9WBQg",
  "key4": "2ntLXxq9CJ45KP9UTYCo92sYs5qu9oZes72tS1a4ufTPqaZnkfaNT7QPuHmoh4ujQb9eFMEQnsorpiYBsCTqcTX6",
  "key5": "aFi4UvfTs6fD1GixBBZZ4jrUnEkgSDXeCh1rB4sDJieBthY23zjyBAhHjTu3kCR8WnPVDCiZD2vrX3z1Fwz2n2P",
  "key6": "4XtMaJaQDLLeuRnxcqNeoftrBxqmTZK5CV89ZFhUyYMecvwoxzaP15LCy5Kv3f8JynQTBRy3LG9GZa5fh1DFQdy9",
  "key7": "3h6kgkbeCTKtTZ3Y9A7eYafCP8m5tceFQ73JAUWBRpeH4245xnRP1At9fCg4QA5YFMQPim7AAMvW21AjSpbnr9wq",
  "key8": "3tVsRvZLdoXkTAjaLJeiEFLSfYLoSGipJr91mw1MGGfPtpZqKxj9FkrwFCebZEpf4q9uMz9YBTHRWpPb5EeBZxy7",
  "key9": "4JLeaeg8m8vG7dZf7E6K72i2EEmgv3HqQQNdFUAqdAeT6t8UxFCyYvNdP99hCDvF3QbQyG7iCEVgrRya1hwZ74fF",
  "key10": "2yXkzDvFwkT1MBnz6A82mxKt1SiXFMZHTE79tCfYeKnYRS3cMBtTRj9ahngxMbsrWeazAKuXaUZ97XAbKUKDHV3o",
  "key11": "3cZpsxyZxgAJL5ggRFkBt8XVyhTB1e2LeCC3KC2BN2W6pBwaJcwBENbEPp5QdVaQrSH5ewRywLkhrDsqiRDshkcV",
  "key12": "2evSHqnmex9zLzSAAjyDDX3kdSiaF96Jk6GCyYCRsfAL4WXYjLVrm8cLeZ7sRqqwH3vZp1FhZ7MbkuY3nGuXZtYq",
  "key13": "Z8BfEr3ViEmHaWsgL16bW2LHdEWSa4CMA2uDptfARCgCwoKJgi8bxpZQsyGvBKFzMWQpHRvNrZdwXtpLvgCbSWz",
  "key14": "TLhU3pBWxeEZ8pAVqw4SyHVjE1iqCucJyXH4AsWKFWaVKCRz3ZCgefESxwRNoAh9fRum7ES5Lqy8koeuqQANpG3",
  "key15": "42C3jmLwYYEaWNmtwrTPAJrD5EBo2fiSrn2zCkdMzDyKTyuwEExBEFxVp4ESpiT6iguM5AgsJ9LkNBihpNPWMGhZ",
  "key16": "2QYX22Q9tru24pHwfoyeJMH9oChkLpULLBPFxx5arcTSSkSTiUpUTzh9ryd2R443ZTEPEVoV19DjZ4ktTQjJQbAw",
  "key17": "2rET7LYHmsjZLAqDBbkkNykmYxGuYaEkKFSHyt8wahF1wMoJcWvmgv8pum7zBSCATUK8ANm389G64FBPfvr5FWid",
  "key18": "4jv4HSGm9Sk1smAV1PrvxzmFycV6eajg9mihQNBK63Qu3QG3JGfUfGYojTquuD5sLbgVKagwTDs1xpSHQVQ7qtPo",
  "key19": "3TSbCdCNPCKr5q3yoW1zufaTmKjCyyAmPwHbLW5PdfAt8ybpwbuMij3cKXmugpGWry5yWyYLAZxvg7NzmNXXkNxv",
  "key20": "5Efepw5t3rvEBRpjr7FRDwERb5r1eDXrHQdy1r3NCRj9CZgUyrMoXu56Vcq3sinB9v4nWXLC7xtVUDFRdh3WpGh",
  "key21": "xewy2drWoetscY99Uk7uyJrQtWHJU1CHhGQUf4NMz6SuBKDAMetZfnZ6wBo46X4PU86fXae1xPFFHZdhyWLN3GN",
  "key22": "28u5xmx1gpv8MCXqQFYydRRZUJ6y5DS9UYXu7wJY6NdqCWdaE5GGUh5iMQjRsAEoJupNXV2bomSvAqorkHAAztZx",
  "key23": "3Q1LdmTMgMMb7q3g2DeDzbPLSzPqcRVxXrtYwW8RPZCo3eutunHB4HgLACioGxvW7P8VYCAGZGjstET3rWPVx69u",
  "key24": "3SQk1AshV7LAyj2DmpdoPGg2gz7Ca6YLBFbsC4crC4VMGqHbJpr4e4WsWhKEA2rjK5dTEEJZUwUN5QTkzrhJDFBi",
  "key25": "iL4wShZBFL1P56tR94xEEZ1egh7Zzp6H8bDf7oGyBLvzgeBeyUEXf7x2b2KojNAm5QuRWxSYxeagnZ48uo9XdVB",
  "key26": "4AtT2U3A5Hnyob9E8d47AR5ptysq62nXNbvwZ4BRtX3MqKfNtaBzK6TUVf3jsg6vUbLjzhk8UoCqn6DCW3qyL7gH",
  "key27": "3PkExY22XdSacgXTxESzwRN8Jgr9YxTfQF14jX7giDQoeRB7QNg5PyPFPKwTzZQQHoL3EKHpKpph1xHyN6yYgfSw",
  "key28": "KcqDEqqEkDFFiGX6nHnxarnQSZBVAmKk4kxs9ai6AhNWCXvcVam2YzDKTyGFkpii6dU4TK4jihGMzJiDyYNTxDk",
  "key29": "3XYzQBy2Nc81C4qqi1GF7PFtDzit1xuYNYr4HKwKNxFffYY22vmNG2dHnW8BfariwTuB7VYyrZ992KV5Br25vSmi",
  "key30": "2hcSbefjbkRwhxhmUvstTLNq3y3GD57mFeQmuMY62QivoHVgG6WEMvendogg1dySTXNajw6x179wsYbQ41dNxiv1",
  "key31": "31Cq5DRSAkggoCSuR2VBn2mZTHpB7mhX8NN76C2HRvZ22kjWSyeuJfEEGWeJzPBQna74KZ4bbka7PxKZAiqSmJ7g",
  "key32": "2QYeKDEEtQcVK3MVBWNVBaq4WWkWtwq4RTNjY1nQTgCnCeV6A2pB5HtoTmAksDy9v6KJDwLqXtn9soSiWjT5VMFz",
  "key33": "BSZ9d5uRWzbrHGH8r9VjcBei43DqHmw2Jxvs6H9qmNHGntJ9qPxTTXZjR4kib7yfAZmxo3A4rPJqc46DMRrz2fc",
  "key34": "5JBAjCNtBs7ygUrKgzJYZwyLWHshJmmYpXDReU7mRyzgaTRQfgEwQhDekUHVVpDDSM74g4eLeF2t3Z954pvBUPqt",
  "key35": "4cdehDhbsqD8N1MmN8JLWZ1tQc29VisF4BK8ToMJDnjsE7SqwWn78Qnx3txyhDS7XTP6iT6hkg1eA7wc6gSHcijG",
  "key36": "5QgCjvcaV1z2YoC3zQNRqFCY7zSr3N8atXWz7XMpKGN5PuPVoK5tvUHfWEAncPUxbwKkjpQ2KTxaZjTATQjZwSzL"
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
