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
    "56sJdobDMszfAeAb8DsQggVjyvrK6jE45SRFEbZ12xido1kCYt68WP9NYKaPxWRcCVwxFU12vNx3vCSmDCNiBN2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47uPeW95pHfXcfxqDrnhDisdSoe2VtyU8RX1LxnxNTyjpYgReyfBv7HWgJpfTJaVK29bm584gZi86egFVLrsZanW",
  "key1": "FFvb3N9dGBhb7fodSGvmcAPWQZP8HpWhHNVGCk5Pha6JAJYUfrcbAhhKhSLhSRDkQfBxxTt5PiwZkd472XQFR3v",
  "key2": "prHRgcgwLfgzEjCdr53q7exqmaDqpLgraj51CZURHYPwfvSaqpCys4nvkAbY6iCbUwKGwxf2cJ494uwcPBqy5Vo",
  "key3": "575VmE3z429NKxhNkCnuvo77Y7zv1HDNMFjMZgh1XvkubJqwjU8xVWWkA712mLmyYZqX7erJhTYE2UcSK44GDbGt",
  "key4": "3BXuLHKNiY3ar4NDkpcKUXJRoMCZJeSs2kGG3t4cTxPFcFRJA8tpFjfcjRCUYkPbBrSz6jzZP73ZSHa5cChUpdpJ",
  "key5": "2F8VsfHQYzzh25Pm5GwtAA9Mpdq94RZGnoVWSArSdeWRaWdUY5gBhj1yYRsjSNbYhz5Nzy3aM277B6wCayPZnKfV",
  "key6": "5ihxVT4mFvtBZX15KBsHu2XrrH7U9PryD7UQA1yL2w7mnjzwnQ36XVwTCLBkEDJg5D5esaP3zxXcGjWyoL8K1foG",
  "key7": "3tuZXALfnASfieNfKki2YCiCcZjzeop7e2b692odaNeK8rWdJvG8xzgWbte5R2HvdW6fgXYa93Zm1M6FLcyEPbRL",
  "key8": "5fpcYNm1SE9N72YJm96WzisoZUst6dcxTRfkxmb6N3A3nxEwEk913Jc1WcjWV8iBHRH96dQnvWfmHL3ckmgMRgYs",
  "key9": "2gnJMEB67GvfXFQ1m57urEEQbusHmyGXTW1zMWuZtQAWwW86uCtbMd6tFNXpz8r1NQyYfRFyHEirStUHbJoAnvQ9",
  "key10": "KDtcPvK5bLJJA8ozrX5TcnkqyaGTJNa3efkMTGdudPdsm3WasV6xsYP7jPgPWsLDsMCutfhGQNYy6J1F7V9fXpR",
  "key11": "54Hs8QnsYUB3HguovaDMiU4n4mBP7TFATEwtGqgwNkPaQ4VpuYUgk1dDuFsv3p3s1dF6PycPGEjgTnvQgK3CTamy",
  "key12": "dP18LMGoHDrEMwMVLhHH1gi6Jv9UY5U4z3ThKPUy8gtMEKgnxPKkotYjUBtHbGqndbCLngRK5KX9vwhnwqvBtTW",
  "key13": "5iy7Vgez4aNb5YX4dFj58LCMyQyw4V9Rm9TPMKq9EKeSK8ot157koZUrsaYZvs3qpcERMRVUoEYV161NKnwc9vag",
  "key14": "5UEV3GSFhsNgQeykheem6L12N71C62FbND3NAY5miSzgYiHVPBtmRwTAVGQTjRLbm1Z56bD8yyAuyqv4p71W1VDU",
  "key15": "4JGYvbq37s1i8d7KGunAViGYa3WzGi5RqenrhPvxFLbDzmpRCGyPkZeVMAVNcSAhpjNLyJ487E1KWNNuJdPPFqSw",
  "key16": "2ireTaE1BMZBpgKePMWh13oU4Ld3xrptsQ6vh5ReLjev4mkYMGqo4w3na5C7MX3EZoQ4nPtzoyxBox5zSt3QcMN2",
  "key17": "37yGqcPSxbeNNdtAhwcTx4PUwtMwVMpRzHzj6MHpgaeemgqqiNWj4dcRa7jA1eFwMfSUxUUAcE5VPuiRfmtYQ2YH",
  "key18": "5o6eqdKFiUkaZgCsTR7UtCvPXzonTuHuHb73H4ZTYk7YiqFrBrYRQhNTchVk9Z2ks1FpxomVJTTwmdbHBtjUSUA5",
  "key19": "4MPLfAwCqfEfSLDMefuT43Z3YHbHCottw8cNBFaU3FtJBz59TPyE28daMRW1H5Cq8ECfQXrUNNktzdHLhKjo5gsp",
  "key20": "5uGBn7zbDfbfeCkHgR3UqAxUZ1xDwjCWUDYuyXxyC79qEWeMzTeEsKEwALPnfe4pwbAEGf4d5VzuDYAozVHMfVCW",
  "key21": "298pzpvYZBe4DdQNwhu6y4BfBh6e6QjhxiHwdrNZj8WX26xc8QmdSxDkzfvLzPPhRmMmn3RUw2hmWvYm2AAJyXoK",
  "key22": "2JozqpZVujaM7vCRZjWfCheJ6HAyv5HUau8sZMa52gV3crWcJnHMUuSRUeUofGKmuinTjeUdWwq8Wb3fXoGsFfAF",
  "key23": "MxdWS2V7TJ71QpNZRWMrKbe1oixF3rvU6DqA2N6xqZNh1ExGEJSkZoBiVp2K7UEvcVuxDRbsTrNUUeMrFaBq9PQ",
  "key24": "Ra4jA4qGerSP71BKA8ksAxDDAGozwKLJ4RueN3mFL7eQPQQF8nbeB1arfV7VgxhjAX2DkAaWWmHeQ2RDCMGMFri",
  "key25": "VyttiNeezXh3AUxigocgneGKvJpL2LHvmPUs1hdKyZJjS18uoT3p1qc71H9rSWRqUF6vbBTjaK8rEG2QL3DnGt8",
  "key26": "2mbRzS8Rmo5fVoy7PEXTQmCKQGsepAjJ6qzfuiKbpDDYe1fjunTH2wMvoFYRhKg8vfFa1gXsHTEybeqboeSAVqxH",
  "key27": "3EjiupzApEVgH4R8CZTqEiiVswbCGedhAFjrjgXHKQenuwQKczc5gLhWU7b4QU3w4HsbLozNeahHKAYdyxkXixUE",
  "key28": "31MgNse38raZeqb1VFvNZ97S2WbRiLovio9b8RkhX49eB9UGxoBBTKXv5rBniLTZ6KTD85x3rLf8FxWsuKKLE26F",
  "key29": "2XjgADvxN5MSMwB6PGgU1s9zHi6JAWeGbkCyNPudKvdrTUP2kWxbfNyPLz74ff9pMAKB1B2K8Nb9LnarMk4VLtCF",
  "key30": "4sQCuo3wSEsN4rGVEWdMiRMxRJJFdGoWUQRX4LcPLcU37Guq6cyVcUv7hVoaABruJFyRJSYsRehmdm3wgGM8HqFn",
  "key31": "Qzs6quPeLWBwLtqtASpxYfbHKbm7Le5jQTuJC4chSbREzAZRzHVFyrUUXvFPyFoX3Kn67QJjBtrW2AiYYSciTHp",
  "key32": "3PGGtKyqjmaB7wEr6YXm4Vrpgp1nNT7Bk3sSQWWQ7xfEJMqy45K6D8yyTL46ibumyn215pJRiP2E1UYSX7zxRpUB",
  "key33": "38M42pJ7RSya3TShGDsRczLQuAmJZB623gLFN8MioGCeeHyUmmTDZjLyupg8SEugjwd45MtCpwQNiomD3iLj5Qa6",
  "key34": "8gn6282R4Buex6cFWQMRBnLnYWcuMZWPrcdkZSaypKAbGee54re3Vco4PtmyNoUoJ7BpWn4xKe4qEu22Sryp3d9",
  "key35": "5nkmJier3tn6HK1KioDPb4wkGZACdjQWCv4qBMBUrXBa9GZrWCBVBY87vvixSk8Sk67Drka9t1ZZx6vWbwJatXj",
  "key36": "bBgRRit1BTyMCRonMVaMxBkC9Ps2hfySyb9WayzCseeZ5HBBhZLCuRxFeNKx6PG9sY6ZprFo5qLJ7y9GpuyEdwT",
  "key37": "5MaqG7sEvTtvYkoxayufz8yBMnZF3vdXEbNrQrTVNHYkUAWrsMyFszBZ4HGxovrk5kD3QBgsDf5K33yArg6dhwBL",
  "key38": "jATT7vGkkNJcELrS2AtjxXk2yHkF3F9kc4ZN84fGe3Pi96qUbiksPCPHVcXm1dBDt3wzpSTqsY1AtyB6SoKv2os",
  "key39": "3tafUZFpuZY2oMqnS4EbX2JJDwUAagHCLskkgYxrBFu1Zd6L6VLGFEr6dPPNX9XKfPRhreCh5zhutrFgwG3hKmav",
  "key40": "542fxeBfL7thh7tNjjSPfySGuPPznaCvaB8tvaBAtDJJpNtaL8KB8a7n9TsEwMQnzJtUWkCNWHnBtbQNayVjgbtB",
  "key41": "3i2KaGXf2mj23y8cvvzp1yVsyRUZcGYTofSHDimt7dqn5DPrkey3fJWsqRdQCbu3FPeKStNikzt5TMJg2d3vgboC",
  "key42": "2GXi6cYpwjPSqrskCrFcVBt3QC78Jg7kdtMtbP2r3oMYcwTG1efSZLreeWFFR3wBwYXiAvAkL61ELLsCAXjiuLdb",
  "key43": "2ysLeg4rwk6XGDW8thuptVNM7zZMZJ6CR9HuY7armZvuAL3Xh7UyN9JvkKzxQ6chE4FEcdTnBgAZtf28JN1pCptB",
  "key44": "5hWRjJVYG7ptkt5iAHz6RtHCavStMHusUcNuSMN6UEAr2xGXQxSBUCtmsSfB9ZRg43sAcWYEtXhjdjaP6owecGje"
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
