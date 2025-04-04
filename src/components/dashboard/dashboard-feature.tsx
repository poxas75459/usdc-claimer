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
    "3LCLLP5BES3PoHDuz7EMMS7kmqDnNyjVHfAyE8bRFijUA9WHs4zHbYw9ZrjudTZtLCsbY8mP1R1vcbtRw6KFMV4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pf5ePSSkiBkwyFvjTEHhFJQ9jJGyCPRyAmW4G8z98fGJU8KopqCMMPE2L6swpkDDpRKvuZHckVZdWkDrQ7AArf8",
  "key1": "57epsJCrbU6N1rqpZEkU9Peg1cSP9Byy7xvA6t4gtep8iN6Da1CyompSe9TQbgVDevZ1uCymsjemGyuJAG9vKKpi",
  "key2": "4AH8vctYAAiR8CSBRsxjRJ3rrm55Ay2SSiDPEFDNLcC86BYej7mFgppeeFSYrdadm9t1EWfvUaUk1CmcoqAV2mYZ",
  "key3": "5xz682gzay4iRsmaLR21J5EV3PA8N43GU4tiQ1gUhVVdwBzvHTpxUp5dPNMsaPCmeQqigg26NmMJc8sqUrRW8QUD",
  "key4": "3Wk1qBrQiMcfUSjRiFBDsnDwXRBaTkr7JXKWsN9UFFibGpkEGMqBCmHMeFonLkn3uGcYMjHSzJCgBfC8wiVYregb",
  "key5": "32UGxCgdLRAJ5DQfbRrExFDzB2GZzfA5r81aqExoaDhvJa4CAJakvU9gkTn7S8inudbYDh3ZmJRQAFPEMQ2cwcp2",
  "key6": "3WEhs3Rzncbvcd5qMqHzeAkYy3JCs1rnQVwJkwtT9bLByzb6jw8rHHJV864yN9yir44r5tp8hdEwrfzuhti9w4UC",
  "key7": "2kh5rGKnze3xcCrfuGBiUBJMpkGvfcFtmcCy8ouz8sn9QNLoRedcJktAtvMcAdNTL8AcRxVeqYQ2UQehhR44Wtqf",
  "key8": "3Dgg9Z9vbLZY5xRTLgzrT6pSYkXrHqHWSephoT6PPUyCn46kP4ffj6QYVA7Rv9d9MQGStTMm4iifLruzoSkhFQUf",
  "key9": "24nUYC8spd3fjs33SgSvA9fmZppfsfEqF6J1k7QfhWrdbN6htz63oYvgbFRBoEtZEekUJts256DfuhJbvzH4imHj",
  "key10": "556tZfNgVsqW7wWszEraRo18PGC1Vj8gR8eH6D9sfKv4QQKMQ2o3vpwNsXsqrKSS3DZRBnEHsxhrdKwTi3KBJteB",
  "key11": "nydrV45hVrGQjBLErCDpMowXBDFuAaeU9Z2WmrvDEkd2E9JDvLsZPdPETx4LD25QkPPjtKYz3Cdkd6mQdZuA6fv",
  "key12": "5McNQqpoTMBWXUW8KGJygVfoHd9HEH9n7BiYWbPgRMW11e3jEQYdzfwr438rrzRqicQwG1ysDUjjcRgdBXUYrFMF",
  "key13": "51WpbXoSPztbsNoJ9dQTBb34L7fyxGLk4ZsmJsn9smub1ocGVCndGuGqPnrjHvVCWoPKfK9kUmRiWa8cPGe4krrd",
  "key14": "4MTLBjoCxEEWDXnTQcdGnFn6XQvhXb5CeN1M6HuBzoEzGs9yMjRoBVJ93YScy2FznFaHNiaRZWx8EnWJJYDYqxX6",
  "key15": "5VsnfoTQfuRfCiUgYaw9QvwFsQwbtyNPkSZrFXE4EEGxfvv4n2zXJdBKiHD7rxDkAhzmcVQKPzTmYaVvMviqJZG1",
  "key16": "4HAX9thQQytxX7R5kAG96BuU6Mqj15j7vGYBMjDbcR9KorkTdccCcQe1u7xQ6RyF9gwepUshmm9nxtiSGP7vA66V",
  "key17": "2cAnWNivpeKmQFWerpfCcot49Sdm1Qg3pyz9t6vePYGU179LVAfrHSNELUosLBJHNYy5KiHNtHDjRSiQziKCyLHX",
  "key18": "4H4fDrSqwAhoHYxLrZJtC3vzzXMY6yLnrdxBTGMDe15aSWzCxN3ojQhSFJj8hgonGrdUs75PKERx8eJsDCWBkGj9",
  "key19": "4Jz3SJEL34rK1uomV3UHwDJ2yxerTvUCxF8TaV23LzAh2dtHFjyGEDV4iHoDxvZivhdRdvKgzod4Rv8q2BfARfBF",
  "key20": "5PaBZkwToahts2L2hhx5h6PcTSEgUbfe8xzWGEgGAKTJFKXC88eaHJDGGRJw7HLw1dLf4gY4TijX3dj2aghPqabR",
  "key21": "3gYosTimChmJ4cjMnhgwWgEnXJHFtCNz4nbgYEWKmUFhTCstVnwZtMgYDdsH3Nw9Zhpw6bSsnrHzcHVN44gSKE5L",
  "key22": "2EpiuizHgixVRotpT46tbQLC7SZn7MKcoAJfC3LrER1ZAAzQPuHu7xFHeRLGmK5xRmPhEp2isCQ3xEvKDgCYTNC",
  "key23": "2XE9mrBqkYKpYPKLaxgoRgbcxctGnWefeyH7r6Zk2TbqsTFk4a3XphyoRiyLHS9T6EutNrx7k5PVz9pEqL69tr3o",
  "key24": "4odvsEeuYqmYSdnEwRPC6t3NKfDN3bc9hWyK6rhyhPeCUhbZKku9GpZAXFpBYZQCWfBvqS5t63EiS6j9a9zesJkr",
  "key25": "EcYNHN2Dbv1pFMr8E41BfkiE8kmEcoJvTwkpfagwdtHR2VGYVHEjJF1jSgVQXwqrY7imsDQy2amBB521cBUqWa8",
  "key26": "5W3oymkVNLAczaxwe8w4k1Lax8szo1cmPAouHn71Zva5MVUy9j834sBbym78an2SP5n4rRU64FGvcX1a8mKDx3PZ",
  "key27": "2VVaGhD7WPbxUrLhDVqTL8LZZcYxEfeBrPmTXEwv5BVPyfbzZiPn1Vmt6ijFdyboPFksnNb4RzqivgFfSdDQjBsq",
  "key28": "2Kui4nYHyY7UHKNCzKEJqYoxTyHuJgEqKuQqXVVbei3qfiUoYZpYASKsH9boj58Ks1pAhhZCq1HFRdUm32SqG3Yf",
  "key29": "4pVC3Tdc4G7N1ibtXsvSVKwEL6u5HABaFd37gGau4XdvWvmA7sZvmwzRA3woHh63faFAvadbNJRKjpCWFsPZT3dY",
  "key30": "juwZcLZCjuoy9SiXhtn4EgNULBKhL6M2YvVTuwPD5dYAdxi8RbmrEEdiYRbyDEmGNK7asPKLFMgQsmrMR3TZSzd",
  "key31": "4pcRHSM2ifqkbgKBCEv3RQZ6YwBNjo3JDvFDdEEcU3mSZ6W6NZhBjuyu4LZusQrQkXbbtzq3Rkn7adPy8Dh44LMD",
  "key32": "2Aw36nqHoLVtnKSstMzBM42hmcigLvDKNPop7RVib6t8oHdT5hC2t3jsARpkGmCpUV1fwqMJ4fTfDhHuwmNY7ebe",
  "key33": "2gJScGbXSyv9cqoknNHWLX5ykrJXBUq4VfAraaMzoZPH3iZhjtF8SCobVSNHd1scB1qddVTSndS9X9yh8kjbtsda",
  "key34": "fupXJSYFhjDvoynw55PQ8Q1hmTnpwEsRFW3dHoX46yViyAwqnsgEZYXN9ZLt11zovTCp1GZkZPBBDohSGkXH4Ut",
  "key35": "kDZtPoigJ2A9uJSui5HUqtuSXyrafMpMZvYiaFw1XGLdihHJxTvhYV9yzcXUpNAsuHFatBWYNRE5Gi9XeUXt2LR",
  "key36": "FHEn78whkY5K7Jo9ntbTxzRt5UcywLJv6syCGk2NCDrrnmUMtbHj3VAuYrHW4eRi3XLSfsy3hVcgcjDcURHrxBN",
  "key37": "yckW5you4W3wfRNuLXBdnEx6GKJBwoCZGK6LX6nLHt9nSYE4scvD9VZwhzpFveDdZy2g6URqGhqvL4zoWjuTdoA",
  "key38": "UFwG1WFtm1kNGLkc83w2Edm5kLU4Sm3Xygun5vLJ8ohfFhz9Z6mJt5iEGNfstqx1SgyKg94gCobwb9tHurQpGAg",
  "key39": "4mYAvwe9fZymrZftME1TZfv6v1LtdTDn3CSti4Qpicxv7bdX9rPZ7qtr3ZQ4xqP4jS3F4mm6HgmJg4JgQvSdKu21",
  "key40": "33qagTdrdUpHDEjF7NJezMCdathaxjgqqKjrsLtS2xPRsySEequ4sNCNUG7fzVamoKy5mQr2EWPWTdcUyZiJAu7M"
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
