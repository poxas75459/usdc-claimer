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
    "87oi1e7ui9jV56P31u8Dyni8gHyH9ces3HjWHdTLp1xchN95sTnCnjF2cgc8yZuSf1FE5EDvNdYMYEVe3qkkbT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Kb4gFjJAWVRJobtFZwJa7D3g5CUeUetUDn2uzPkyVZi3EGFR6B2Gt7MZC9GWhPCJrYNX1rmcTKgXgBEwYj4JC",
  "key1": "4UPikUJXrcd12kwkkB1ANqoE346rrfHxsoa2DfeoAyeV7MBkzgt6fzLC1KAJsDG4tbH2j8RR5gbaebPkJs7kxBMN",
  "key2": "3ZB6sn9Fpq8xxgukBTmxGL7KkDj68ZfbUmE5VCSHnDoEA2PFsX9mfbekXNth53nADHD5mphFLuAaZxYfpDvuS7BE",
  "key3": "2BLp9crUrpBAqXcYLxYV89xHJxwsbQzyaTGrt9pqrnMvKiotQnMsb5TekpJLvCUUgfWbkcnDZw1BsYQdaefXt3XL",
  "key4": "5Dt7tzCQP8zpKmaezaNH33MReMwcVdoco9xppNgEd8BhVKcSkaxLiThCvheHrF9u96qADPL22pzXgCJVh9uNY4oF",
  "key5": "LqmCCgTGN3uRmNNqNnLiErBKM2yUGQH7AJbnunQWMPxAF26uCv2XNiNhdibf7KJ8CvVkgWxw3EC4mfSpPJ9YEpe",
  "key6": "3pRzhA2NY6wYzHBHzhhn6qSc43ovyZCdpYCvNswLFGaSLLkUWJUECEaX1vxWvN93oMc8MFST3yJ7ePRxGVn56cSC",
  "key7": "3XeyNxyZ6mR8ht9HJ3mm97nVn7hyFwsws8cRtsrryKtX5UrJ6s6sA6gYPMPBCYdsiTbUy6AGVenrttvqSyo2QhEf",
  "key8": "4GJR2QXSLYjGrMUHVKscPjnBarYhrWA8YCnxdoGno73GbuSTVMxg6mdVeQEBFuGrdHGQAQmMmzty1PER4xsU4oLs",
  "key9": "JVJ1a2Cfrku7nrfPZa4atNYdgN5g1utLE38YkSGxxsoqEw2VVsUE1W6PyHy32VS9BhLgKKKSftUX6Db7kff24be",
  "key10": "bGAnJtuMnbA1GPvivosoWxpRbBr6HUSuysp8De8eGVesaPC22hkEURF2wxfLYyUAcwjyG69G3MuwuW371pZ5MxR",
  "key11": "54yY2utxDAkNSYqTgSLho15UQ1wYzwt3ZLDZgqPpNKbz3KaBS4y6cyywG8C8UbJVoz5TF1bkYH5Rbg3zdaT8xJya",
  "key12": "3QkRfNJ6ZwH4poJugvrKAxrV972m2Q2ZeeQhBR2x9gZwSX2ygpRPtzNC9b2NYgpP2VvfiDcChRofcMUaPsjwcNye",
  "key13": "4bJakbuT2bEurfLmDmHVUjgvW9s9jcsQrqyeuo2hVvCXwRXMZNQ3pbnC5pzx9oDUtA535QnP9voazrMLwqx4vMHM",
  "key14": "2z2Wj7gEakpHDu2AVY6stSGt6y5cHnL2ctAkLACovxwKeccEUJXsfRroMiyuZfe1FXF5aR4d2HAEPvcB2iVkh7rY",
  "key15": "5i5yKzHP9S5KcYgT1gd2dU4WSbcUdBTK1DDbJXBrkaF3pVc1XqskywhZdwVKjPSAQCBbBo35m2hgetEvbPdNvUJ8",
  "key16": "3BeBTGe85ABGe6u2RC5haE1zTYbStLMdvbxLxSmSzYZshaCiGAxPzh3h56CC8MtqjjA89JrQB9dZff4xeWA9R5Dd",
  "key17": "5X69fFfevBS2kEtduL3o8vk3aWkg4WQnNjg2CpDAePsj2HmTzGesQ8AKVkfyMY9cDdRQr7V7Bp5g2GHmpagNY1uf",
  "key18": "4Q5fVZFkFXevwxibfSr7PJpikHCtXPi2qLhjdEjiYxxAeP3nuif2KN16rp7Hk2HjYAEQLkhCKhNUApi98ZLp9kHs",
  "key19": "bapb8zguUgEzFMU4353Vfdd5T9qvZY3Qq65SvoxHMac6GzDYpwbvDT1z3vnU1k7CHMFxXmGA3nSFe7TB52N459Y",
  "key20": "4HL4LQKUoPjd74go6JD1V3dCMN17YHXDovuu7ZQwKSxgAavPXCzcdJyRTTQWGbd7kt7GYXCdAHmmYadefRXhhpmB",
  "key21": "5SqMRTHqCMdfgSthPyLMX32Xw3n8agTw9PqNV9v6dAgRXjV7dM9X8iGjTGEFyoh3e41Mu2gub6ixvU4x6MNXKSCF",
  "key22": "2Lu6pbmY3kSeatzHQBUYsHtaVV6aaYxhCunHyXDyFEJ94tkquUWDQKCWBCpDT4Eu6ZFjtE3NqHRBKHGB8BnzzTy2",
  "key23": "5s799EdgKB1soLVduVhBGvEnCZfih1cjs3eaqdWEPqWpxXmDwEsVzoKVcbWnS6RAb1Z1VgJgKx2riAgwj2k38DAj",
  "key24": "pmZcmoVcPVecEvFhMLmagJpbmwJY5XRGjLiwwUWNP6WCQLkEDtQ1XEtmiT1xtKbNqUtTkB1t8qYrPkt5zEgTWRi",
  "key25": "2dbDH1VsAL4TcnYd1b9yti2ZhMEavQqw8h4P1ZGcZNv8awNQqX3LEApJnjkUfo8S6kwoc8rY9nbTUhgnLSqHTh2a",
  "key26": "5nMTAzWiv3S88MNtMkSXRF1s36VojuCVaLAqv2BnSQjhdskcGeyWumNgLX6RfDjRJMjoEjJdsddRguF57FHSrBMY",
  "key27": "5w93UuZwYWALgTBGYNaYYp2MEb6MLzdXfSEEdz7W6ERczWwaNMrNoVitLfsY82fm1DENQ5abHzhL4gQ7hCSpdGbn",
  "key28": "2xBRV6MUaSrxbjJKCx2gYdo1rQMZZe6nXhaPCfie18iiCmphMBpm1zp1MYbwmPnw7cM7BQP8ZMq2qrcGYMVp1JaT",
  "key29": "3uFQcQYkEqMUaMQWooud6fTzyjKo6Jx6QC4QekyEF4YL1kBVtnNf5dG7BvP4BFZZN2sJNRhyRJB9xfF55A7CabXL",
  "key30": "4LVdyrtZBRXKahDS1yMZpdfHTywesDF5PU6hYw3dpx3pWFBUnJ3HLe8uR8U3veY8UFtwavkgp1cuHUicD4973gq9",
  "key31": "3PwmGJs3W1JtcaBwAa97qq2Nbj82bFmpCfRpiY8Ym5Fdg2ZB4Hvp2WKMG6sodnvFJVDw1k4dKMwEoR2J8ffTy5kW",
  "key32": "3VX71doS7M7kJ4dgX1JA7fQePE1FTRKvG4nKXtpX6HTWwu8iT8nd3ymikL9kRR91NM4UAiu6Dp13akEGZzZ42koh",
  "key33": "4BtfZEcM2bGJkpipk15mXZuD4TyvnSVSLtVqDYSEJWpnrQPi42RQwD9cmTLgo7GUtr3f2vU18o64KsJ5m4fhGpZG",
  "key34": "2BYGYpSJfJQRY5DEcJabpJrbpbZE5EnyWYTSyCKjuW7KwM72bptyUau2tpYXHeyFSyDL5vb9yBvJAkocdPF6LoVw",
  "key35": "5F2EkjC4EYZrwTqWvF8nVCcMHJnJgbQvhjn4dSYPUDWNRGJXh8mMvA2cYnjcpFvyrimNgmdnxYyUzobxSZTwEq3t",
  "key36": "55yAPdWmaLhUGMRC4mj9i1BcX7WEVjwPEvsBr6x5V4HmdHLYKLnXamoGQPpULRWjKwE1cXjM1EMERjcx7bqKRgeH",
  "key37": "33FLS2rqQjxqSMWKZ2zsRJrra7K3uqyDEFsdDA7dha82mPBxAvBz1JPvmfhp5LyVak4zyDM6j8BhEaoPHgGAixYi",
  "key38": "58QX47C9N8MivCi24J5TTJWAzgnASU77wZASij1RxwhPx2X9hmqEyWKfHNx1argoPCpuSaGc68jNwC12kefyqZtV",
  "key39": "3RZk1eSRxgq7boQ6cphnEN6RTDoEXpaoqSD5UefDz4gUjtVrNFXE84vT78JsKJj827D6DyteZPPKQJGza5634RwZ",
  "key40": "AL7CN3gmbxnv7SaaFeSYecbW7dvmsjd2XKFZo4CjSF5aWoJx8S1sE7urYZJ6Tn48WU4k53V3neoPm8ywfGx5x9N",
  "key41": "33T7p5mLiPBjhMYUJVyQpXtzBuXXCs8GGTbLJ1XLWrsh6BuyQEd1tjZEQA4QkNn3srgbdkt4BftJSzUiKebviyFd",
  "key42": "3JQ56T5moybqTYgyyTN62ykJouHV5Co5UoWgE98hMrMMghsCUKhbJGAoKdDaVht88J5kFK3uTGLwVk4xwNc6Jzak"
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
