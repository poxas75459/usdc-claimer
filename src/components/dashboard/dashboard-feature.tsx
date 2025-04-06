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
    "3XWJJMY2TySnfV16V1qfrA827P8eXsXSWqLGATmMVDhF195mZNdvG3b5ygP3nBkgrkAkz9R4vM62aDu4zQWG2KB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34FUPiyA9jeJmeXpbtvihAskgKE4VeeSDqGUbYaMvND8txTJ4VX1V8CiHTZRbBQiFV3bTg3L3xMZNULnMCoEyHrn",
  "key1": "5D1Ej78LUwa7UNvK5YWYc9JPqPjbUvdNbBfU8ibgKkXUbsJcym3py76XSQdcjE2i9mMu7s8KPY2uEtu54kad9tkW",
  "key2": "5eLmXNqsskioELbEUNcxjrfQtqvnrsbbh8JYbUyKa2oWVDuFfE5Pgv77m3dn5ZWJFj6wosMEzeacNLzGGfuVSFAV",
  "key3": "5A7RmeoGdAshaUkYb6Wjg3K5iLn8o3NmHh57Kvp9kAgfVpPkRZpGdTHm19PSwrSxz1bXHraBHC4x57iosv9ed1hK",
  "key4": "4hukbkLFLLQwiLsnp1nLBycN5NBmzdPDgLysBFMEAGJo5Va5RKKauXAqKzujdYXkmopSaq6ojgntgntGrd18d4Lo",
  "key5": "5JpmRxMdXMEGE2YRN174eHpyGfLUHq5PQmc1LPmeuXkkvWrLEs6k9n8ca2WnDvB6h2B6U5A4z7LmxSZ8jnfE83Mf",
  "key6": "3yFbQ4ehFMt2tSjTgXJci5hPYdQ9j6oZXd41RRfMpHSJoomYwde6DFbhHJwmva6tcc2s9GyU2ckcLSqvMFYd3xt3",
  "key7": "413uCmK9oaMs1AFReXyqFm6jLAy4jyE17S6TVHD5iCgNktMFw3MXNX3UhVRcpJpwhzZ6x8P87gpAonZD3VYGTqGK",
  "key8": "4iKUxJuDV2J9suYvi2KuQwzQr3FPvzZtTk3hPmCuim5RtnEA7iPiyDmuJgrt7GGVpNAeng4Q59ipkBhMkA9PqPu2",
  "key9": "3xtjZMZ796d5EwXKuyFLYaB9im3VxkXdiNRxDDYGFBaYmVPWeagQ2kfXGw1X1orCxbiq2fsv6RD8Qr4TDakARCh7",
  "key10": "3yhCnBDaDGiWXmnADgcJf46hTSCxH4RUR2AtsehTsaaGVjfif7Hha5xMMtreNgv8odJKBDKSbSJLE3Y4Krk835Mm",
  "key11": "3ftNerbTL6vVFJfS3bFjpnVbWC5hPH9so6xWkhx7MnBFBtkkBquv42fsBaLar8oL5NXdSHZpjuEBYRv2enPaRUbD",
  "key12": "25df4HFMDYL1nFiTTp2ipRLWmY6Hq7zgSzNApwAWV59nGLvCHDKd2rzysH3f62d2E5i3BfNE39dCSvULV87Anh7W",
  "key13": "3qHxteoH8EQJkRYPxNbr6k1YufUwpPMdKh2Sp9yCCvDckLRmc1jPAbpR32qQkee4UGuvAUmbj2umfzrf4vJe5spi",
  "key14": "5bm6NRDou8Mjzmm4828HhWGDsjB3pAeJ455oFGfZx2rbPH5aGhBotaJR6Q7RTpqo57LKYGDrMLddZJYHkRtUvKXv",
  "key15": "629b6HoKMXckjYHxNRVdAZBGa4yKnscHsLADht5RK6Pa4NygYJRzQSxywzPTeBa6zdQNvRgnBsdXZNgCVMGDNnpX",
  "key16": "3yBxrgKE6L9jJqaKhvoyrzPXjAecSpwUAuw9hWGmT7RdgktDyFmdxsF5zwFS3oc2Z8sEXkGaVoBbhJh3Mjd5aXNW",
  "key17": "3xs9h2upbgynqW7iHw1H3JXCuLc7nmaB73zFtkbmssX64EiEohZow1DJdTc14y6UssxPDAcYS9a6V8vVuBvwtdk8",
  "key18": "4N8CXzZ9Ls312MDyvuosQWV8AcJcGdMTQoFu2f39EhkgpJSHpgsi57RhfHj9ofCAYnFRCbvvw3HtKLdfrVWtzzDZ",
  "key19": "5y1cAVPuyzp4CzLusQx8bX64vJaph6PCSPYkNpv5XHHohgL77yggQhJChbZQahQWGQuha13DrgCMw36Y1DafPJcS",
  "key20": "5Kepbpf6TEd3xwscY66GuFJZAK2uvFjhU1wccofrvULtsRkoxAEykgL973TqUekCcBvGbSKz9q5JYazPDnHtgdXz",
  "key21": "Gvzin219NSt5Y8bmrdM8hLWgmWLqXNZw8zgRQ6FgvmpQoXmw4XjAEj6wgLN8PWMTfA9Hkg9pj3BGah1PEWLigNL",
  "key22": "5ApwvqpY5jbYxjZRF5ncB2kJfDbsbLcPUD38tkPymum3yqn3t1UinV3fdK1odiYbjdx3Cg3fXpSyLkrx3twkFhZv",
  "key23": "2xWWNm4WwkCdJavUPoXo2rB48QwUgspfnacYtzHZYML6ERsBi4sjyf1syriztoPitNYqDRMSNdkS86TS5urS6YN7",
  "key24": "2ZsLoqGEtS7yphtCoHdEjFbD14XJoiaoLrrAjPvA64iVnQ1nHiGKPm7Y2FuCAtAstuVXN9RMgz1AL89TTTfSGSEU",
  "key25": "NSVWAsdxyJxp2zNaSJAdoFZM5D3NwehPiR4AVqr7m4p1Cf3Rre3joC9J6oosdTt3PjFedVX8jSxe81K24cxVpi3",
  "key26": "udboiyScA6eJ6jzKNR7zRD8yFpjy5FvTzzemsCwMtfcJ3QYwYsYmm36GNaB97N9DCT2WZDgoJrjp3UoE3aPKuqj",
  "key27": "Z8nPSAdaWTTFku4NCE1TA1SAL4wwjnYqm4p4bx6i3U8roZaN2cMH716pQ58QNEeufyxgDfj48o1U5npF7mHBgHF",
  "key28": "2a27chkgZcqBohFDBzkbt3FYrMFZMZ9qnuiitUrjEDtTEVf6v5S6uAtxKb4q4Zd7hNFAHYGNkxqf5R4jhQM1B6Uo",
  "key29": "3ePqbHCCMWibxVN4v6KAdNKUJ87LDnoZSZBF9jQTGFVrw46nEcpP6wJW9MksZyxtJ8eMbC4Hm7xVKxU9bsasuunB",
  "key30": "5UNLckhmxbMwG3ekzcPDrjz2rY63TMjnUGaATZCFNmPBRY2N2KDHn5fVmUvqXLZBxASW9r87C6LzkqEm8Q7KSpqe",
  "key31": "22kTBzZNYz8MxbVZKTiy4Ctcamgew5rGH7DwL6zwEbpWuVFVYcdZcYftqzyTFQB3drRNbqouVjr8WFjZ54fWQ57i",
  "key32": "5Y1kA2MLtu1eXfewbW2bRNxC6AcHttURCwj3KLY34WvL5sWwMJmeCgFxYwmoW3De5RZU6Hn23TxEJZLjwnWeUM9e",
  "key33": "2jaEfeWRQcdgDeq8KH8F9K84c8wBkVsdroZ3xNF1GxzKdt5qnoxB69YrpvDnby7EJJhhi8efvNtQPtVopkaT7Jpf",
  "key34": "2zK8n9H7h5mgCHmnR3qVjh9ebAETFJAtpynuw7nGrLcSm2HZT7WAy2QeZb5a1uHiDaqr38gA1nzxZ9bXrkZE3c9B",
  "key35": "LnEqNsNJDmyxVHLMBn31i3NGzgyBMxaujKRQaPTrsBhvHfrDGS97VNLsbodmAQrSKKXbfhd64icNQ5Gbm7BvdXH",
  "key36": "5tH5v4MKy4Q6Uqq3ThCn2U2Xmy8V32Cyo9YRNz7dgozip7oCZwS7yBwmU5Q6hV2guhmx821oVeKKJ97zkp89yuva",
  "key37": "4AeuDvU8VM6GSHTCY3WdLa4Bd8qChUi5kSTHGUn9WUqVAS2udupJXLoEMS6iWhbPwhq75eHqo8aWCpp6MJVgpL5H",
  "key38": "5JaHMRdiE4Gtd2KyautHPcxsaTyz5uKxXk3nLK2eQjckGQpzTnCJdP75VcRchNxVSmZDWkwAsfK5EhLuwH3kjLEZ",
  "key39": "5UX551HtjeJfhzpU9kea43HmKELPFyeVJajsCJ6Z7LnD4NWSTgvU3AJFSyBQZwur4S83222tM7tTdecQ2cV4Z7SB",
  "key40": "5C8rDdNrypwpHnRUuSWpndf3C3fCcXv6qUN8Ed8jQ9kPF2KujVhtBNhEYqDFsuHduqu2CLfAfQicsNjAoyEioj4B",
  "key41": "21MWZTbGtPQcRZ4hWHMGMWGzBRQ8weJLnBWk7zabzGAbJb4Ky78dNJSTGNtvS1dZbXw8UzzHsJz9cmyr1vJaVRUX",
  "key42": "3sS8maUdM2jb8ZdNuK1SYzFZ2SFLS8DjtHwJhrfW8c3uvPqyfPbcaSYSXfUVvfmybD9xg2CjggGCnQdJvYWJKEM8"
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
