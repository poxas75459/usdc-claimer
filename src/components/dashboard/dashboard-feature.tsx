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
    "AvxpA9gTVWmc49LLYpngWUy7AZb69kRCwK5VGzGs3bCUjm1d2hb2EVE26AoLERde5NacV1AugMkCWfrUfBFYMa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TasSmbsE1XQLKfsYDWofYNeHReb6ziL4fwtHeRroriaATpMy7JobLJvpotCU5Njt9egjYrpiWs7A1Y54okrA63d",
  "key1": "5SHYUnPpKBwmQRg5ByYnriSdqdeg9siUf29LRi37sn8SNrbbSTUunpGhWLqSCxWxJGU11BrT3rUgxEE7zAcPTxx7",
  "key2": "iYZC9h8nnxRFHNrJt8t33epwnEPoST1s8knBfYXioqezkfjAe2W3X4m6ejbFyd8VoRgvg21FRTKYkP2i1UguwEp",
  "key3": "4kWENk838RixwCDnGrFsGc7Vmh8Kw4iaRtMXqnXFBJzDL1gvyjdSHvkF3H5bKcXBMUW1TWBqtf931frAz3bVqM8Y",
  "key4": "4yYGWazk8WDeJJpTpHN7NXMDLH1hAPUm9vAkcCDkpuKJx64WEQSZLvcond7EcTSBusnoENjYZmfaDa8zuNkXMG2C",
  "key5": "4pBUb8qRvJihwJ8AdERv7KBoPboDDJFSG5AcGFokEbhW4jSmmapwzdMaFX3PxVQUkN8Md9XjbYvJCXojzVwsgKC9",
  "key6": "21wmHb7m6ZKtttYHaWyx21skzwtjMf5cwZWB8N1y7bbMx1j9WQvaFmYx8qAaDAB3inDeRrzN78TtZ3iSBgi1RfoR",
  "key7": "5f1UxKHMGed5i8Y4LXpGDwkdxf8cfdXqgGRLVtaUicRkK4GWbQA4PXdhb1VhW8dQb9kMNpKnuqBwy5xAS9qYjkBB",
  "key8": "2iuM4mRfCJQjwq772ELjJdajiJnAAApCmyq6ptsTdwvzrb5DcPkRSeNLzW7WwYb3L9wjMHUfgyhrkdgeM4eaPuWR",
  "key9": "2qtA8zZTryS2Fb9pPaopWiQXxFqj5pBB9woWfegUEq7adYpk13Fjq4Bgxqa3sfCpFnpdieBaK6uBb1YUhK3qw1Pt",
  "key10": "4V2E6o4NKvhxJQHtCfzBNjgXRffMdRteL6VyM7JRJo79sg4yXYy5SArA5rHrWThVS2orYg7YkdyP3seDWtYU1MMY",
  "key11": "5qJpG9ErwY8yKj6w44mEDZtmkFn3D6rBBHBERTvrEXG6vqHn5f9itLaPXA4kqjUMQVHnBtKxwkfqnP1EL2xTcsPa",
  "key12": "5fpVmRJLaH5iikrrUFPRU3KqvxZjMJUnnTQAxMjMKx55qqvRTM4h1XD8K7tzsEZGuzZnm3Ws3GCGL45aZ9W5xCTr",
  "key13": "aLiquWPD3Z4unJjJwcyqiCZt3zcy4KSnytj9eyVgp467C9HhnE25sbXBSXpfkgTrgEVg4yTGKtXNXNQcGA7ArZP",
  "key14": "3LUEHHYxSWAxuw6qnkkWTEjUfmPGkLJvDbZHgmMAZZHvGwUBYsRwfE5vFjodhFyq2HV37eyxwvtqW7qMGv5VFAmB",
  "key15": "4ekXFfCgRhWzwwLZXpEj58QgKhyTxNxxQSz2FzEyZHsAGqeQxREEkft2bGyuM2Mh8k99vWbYrsG19fzdDF2izBFm",
  "key16": "XrvAAPq5N9W9icH362QtFhxoGnLdM4LAGm558r8yGqdQTjrNUb7bT9KYtTA5Ae3eeCrv7yhdVxRLjg1fZVyUfBi",
  "key17": "2MAoxfyb74wqwvmUx8LAa2VDQYaKvmvJUCmdrGpDpEgA5r7GW43BhH6tXmtuqoXrUfAtVxk6sQBvw7Avb5S3H7Cv",
  "key18": "2joS1gdpNqPkNYfb1tC6h9beQArrJVQPe3ihSa5xpdXYeqdJZx7h7xsTLW6McoDrk7g5iFTFV6ufpYShXm9hjEYT",
  "key19": "dWhSzXETSNE4juyjJQpsiE4DvaYnpSd7Qf9YsgZM4Qm5Hrh7nL68WcN5Y565PYafq3uV2W7Pv5RynFE6nWLWW4u",
  "key20": "3GbTP1gdsXqPvpFsiiNRtrUbSCkWgcYpUD3bn53wN7GR6R8g6ykNYEPqmYUpp6TK7tr5YYeYRv4QxwumEMspgwzW",
  "key21": "5YsQRmJVH2kzNdqbNjW1j1JfeXFziy3ZvxF1CiktL1yqjgigiQNP954Uhvz3nqpHeHn33CFeCMqsS1NhxyGkYjyA",
  "key22": "2K6bq3dmHwREGjown2A1ESjf5QYWGQBFdKoPcHEuPDsrbSUE1LLPQEHQrDrRdwuJPM7FSmVDaWTXd4HbQ1BE3uh9",
  "key23": "57e3hVcPwXZdQpcKmQ4KvDbEe6jsrCY5JqKXeF1shsuVi7nmnbbL5MPe6X22n3v6qEDRqoqjfnodqayTVgVYGkYr",
  "key24": "8u7VrN1YdRjxJCrVF1Wd6Se2joUuugnXwXkCPxmV14SN1WZD7wdC7EQRQ989EtqPTUxtjg16vyVdXUiPsaWasKe",
  "key25": "4w3hRcY62y55QATU2ZwK3xdCSMsVqvcgYaKXwBfiM4g1eSkTRpZXiejAwhMUJfN3ZppyzyPVPembomgJQu12a4sD",
  "key26": "23MX7s9Xboe6QxQZ1x2hgYnFr4CAPWUEnCEzvsKLAztvfxmaQfSSLvEzU2WTB3FF6Gy2rQwG2TDi1jsiKKANbiSo",
  "key27": "585Uvk3Uu7QWM2mb3dcZfMVgZByDxuPZ8tKRhVxA5kwfaJYPyaGRQmHkC7HLL435RjXSw1sAJeNWtJLe1VWHjnx2",
  "key28": "2uX5Q6UeXZDZq1qEPqZQiT4g3FqAmrASbReP8R7k4npRAwLvdsr7Bf2aD8RwLZsmtcisJ67eG2VBHLMiUoAjXKvx",
  "key29": "3oMo3CWbXhMKsJzm2MLyEfKcZKNn2bPMkC7B25tf1kzrVarpevgamcQB2VL8bDPEtD9GvgjrAAwHhGD5Vy8Eszxm",
  "key30": "3YHx13AhwSnpMMAgF8y61rJjTNQf9snKQr6V3SPZMmbrU87irVb7qSA835ydFRbEKCWzm7jhmmSAWBDqgnEb9xHq",
  "key31": "2UWfPsjfaZGsvcsPvzPszCrUAEFpu1ZtQuyavVzdVoTr6pPTJ29WnT1sDp5QSwh7dEGGcrBC1BiJteQGvAnWwkhH",
  "key32": "2fCPxxJUTtdkBzwJ3eNMD5zxB4p6f1EPtqaAWDL9m4aBEsGgekgZkMvZQQodK6Jiji3qWt1zAxwWt48JaLVtAkGm",
  "key33": "3AnWTaopVEmjAbAaCowXHcpQ3kREyHhMBfhmzhzuDVs2eNqqDAswocYbQ3eFKfstDRy7NUdUY6tovxAHW511YQxp",
  "key34": "3VhX8t9wFpkB4vFq1CU4ddqD1txsg7rFFit4gk4VCfACHuqbJiWkCtBjv8RJDMmkur3FtdHYE7PBPhE29AHD3hKX",
  "key35": "4J8Cx2m9fFEKGPabKtkD5QFHC9KzjB3Nw8pEK14iz325guDo13eRm8qt1h1QFkDdQ7Vb9Zv94E9vbA1gTXJzojQH",
  "key36": "4FP2NvdSwRHhBFhVF3s76DR9NmsTtCsjXv12eLe1CTNA7N65gwBGkFh8hUHsfAFcQjvfsfUMHyRLLXyyBBwVpKbP",
  "key37": "4Ne8L5SHXiKKjRddk55FEgNPrx46taPd4d4R8Tdof9t5oimmwb9qSxFu9tCArS5wgmRD5p8VxYp195Hmf9uHaDvw",
  "key38": "3wJJZiR7ZE5f7RhEQ3WJeGu2QiMQ27gwHyNXydTWLuKu7bUrtsjsviVxE3SzEFndRtkNk4t1JXfVrnUukubhrgGZ",
  "key39": "JNyujaURiaGoDNxXRGnxrRreUoG7RHDXABju9yw391VfQs9nDNdUjN6VA1696Pa4bPpAanJ6DAeC1g9npwy8C3E",
  "key40": "3LoR6A1TyEx4BZHU5fdUb4pk6J1PJQZDVp1toF73pSMq9yT5ZtkHvVG1L8dGxwR9JdeqX4zH8R2S2ofWob7hrph2"
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
