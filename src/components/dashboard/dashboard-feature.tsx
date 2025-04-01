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
    "Vz9HF64BT29mRzepGi4zBbvWLs4J6fWmqqtBLvteJB6bNXiidQHUWef1FeX2VuZifBi3F8XsagzEuHg8MqtZ1ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PsDVCnwAAiKyGiSXpsg7GM4y5wSuFaQts8ZeBUfU9ESvK8EEZrxW4igswQvvvuS2RJz7e1pJp6ZDzevyFtHKHPf",
  "key1": "dN3F6zATLmpFLNZpHrpUEhrVGn9sRJtiP3pxUnQfHtPedPVRrBzzhmDiaJXyGUc8wN1oa37B1ra1tJdktQvdqVv",
  "key2": "5pu8D57ERzWXcZCDwCNFayPgWamp9zxMnqHY6febkgzQgp4sh75aMtx49Ed45PN9oW7pCyMQPyHF21TLB2dt2jwy",
  "key3": "4jbV6SQeuiJC31z5ZnfqD1FGzttfw1ou7rL87PymuoamKfmqUiyK8c1XEXap4s6K3syt7BiwyWxRfVNn6wS745rz",
  "key4": "HwHVFEmSHeGiscJPBCyxNQVJE7ozEPHEQSaNHTM9RtAoUC5C7Le67dGnwZKTyPxDuUjktnVEyWsWYsYsgLhUJDq",
  "key5": "4422NV4jcAscDMxiNFmFvn86sn8XZjdVws5wATWraSguwxRNMf5Y9ZQU1s7ESkuaFkWvdzCMoMpUYediaTdAfhJq",
  "key6": "2nUpFA2k1zaWDJ771HKBrtoBAdHsZErJmmypw6gfgaghFUZr2XjwPAb4mb2bg226zaqMz8PYvFoRgJ19xL9J5hpC",
  "key7": "5xRoApKMUDy9zRiiWXvMWBpCWug4rhqYFZCVfktdoUfHE5msAHfBxP3i2HWjfLmX7Nu7LLCZAJ3RYRAgwgms8QcR",
  "key8": "3rSnoYUN4WZh9DnisPxHaahzgZ9FHuvtMW4oewVm5DUKHd3T4C1odS6ansVyAvvE7Nzod3Fyn5cui3AVVyoragHV",
  "key9": "3Y7MiVH7mCPkYprt7GZMRpZrCpijUUe9NwCaeQ6PEwXgzrFTWfac7U993t5VicEGUi6CFpNuxUBsWQpoct15d9WR",
  "key10": "9urYN1Sfxh7CM4JsPzPBqFjGJfiPwbqigy68TXnFGRCz6Mg2bK3Qb9mpyFcXKcY4VFuvSJiwmjzXfKbbCWUqEFP",
  "key11": "5tGJCbDpsFoEugf5xcP4VvYDZtkRB1K64EWYCTk8xfSrrH4diRg5nfxoW8gHuqLayPThpBKhc6s7mJDTDQiCuRCh",
  "key12": "WddJG3T9d7edqFN38zB3xqryppHYSV1ETKtuLsyGrik4MveF1ztPQQwNR63uAEzi84z4xgsSkyAnwcdzaeT5rFz",
  "key13": "3PYaz3CHDPC3WxPPdNKmCa1WbW3vrd5k1SkKimbnmPj39NTwgGJJQ5cq9ReKfLu9KDaSYQ1mrmF5z2itG8RSjeEJ",
  "key14": "2Sp2g2G18snnw2BbabZyu253sB9MENpMK7LVb4JGpwRB2Ao2jANvVM2MbTseK235m47Ww18ccKdfS7JRPmScd6qn",
  "key15": "2reWs1qK2N9Nww43EsHvD3hyXuF4BCvBhUKiT3iThTz3nEChUHM9ZjPwCx3dHLWwzn6xnge3ncACU1Xc22JSkkaN",
  "key16": "JLLH6imBnD6FGX4LkKVjhDiZ9PtSDEsR8V9vQySa1ZmGLyjSVXmpZpRZ6WbdKn3WUXMTbVRDaJ8dX4h1w44ES3S",
  "key17": "3kA4sWbU3jR9A4thCJ29R8S7GyQpexh9akKfJKjPptgr8rwaq646LKmyzwTsQCosjEz8jdnQWMw43LfFrp7vWtLo",
  "key18": "3izA6XkRp4N7TubGdNEnTJ3SgnndFR31Hz6G9xCSX8r9gJZtFy3gEeF8UkuPJ4iU3B7gmrCDA7yNSNvjZfS29dWS",
  "key19": "H1T9GqHXCNuEqhz9qVWBopZd3zS1sA3fxoTSSPayhd3SAH4D2smK7BXdDNSu5seuteFHTBDKL7ikie7K6wqZuv5",
  "key20": "27V8aiABuJ1jrgYggrJY3p1vMFmWn7pdCrpvMdMGbwcEEwRpGwKjgoCwaRNbhSfKUucxMaxSBLEs6gTnCWsSpdwf",
  "key21": "2b7hUG1JrDVAFESzAwVV6Cnue29WKLeyQ7naT4UJwkj1YNaZyTpxCLBfe7SWKme8jdMnbVbVuk51xFjV2wzEyHQm",
  "key22": "5KFCuDrhqRg9vF8agJHar1rRgupxti9QjYAY2NGabmBQt4SQ4s5SoRmk9SkHtMBnQBTP1U9gKbDP6A5c8nt7b67z",
  "key23": "WAJRvArfeSFSgNhks7tca9k1QbY4jGqMFVCXtij3HXPG1odfqDuSVfwV2W3EevDhyZVJTBKxhR6536EczmZRyEs",
  "key24": "4K3ToTeLFPDFHizypaAedGigZCpK8VKt6rWaZGR6hbU9Cj3udaLCs1iPV8CFvTr9yxfgDUPwBxtW9puP7jvXjj91",
  "key25": "2Mz1cRTkJryEzSWvrM4nL7yFaGoFAWJQFGDAkbZfGvgzF5N6Zw6uDee3fv7kctfk1iuKpursc1zE3ckuVie35eUG",
  "key26": "4F8x9VansXesHVoqnEgvqREH6ERmzDXNaT89znouvRST5QKs5a3D88SUjC3kQXuqHGurxosiJEj9Zbie1SobCo5W",
  "key27": "36UeUKgD1Acq6vJeND3KVbEbkv9HVhtneLfKvSUdbBsAyKkYxKxoFMS6UvmhTdYYQPS68v8ZJofzLQRYb26ug39n",
  "key28": "ZEtJjj2xMC83CBDLmb2cvK1NckxHpT9fNAhZNa93PsELbEYJGJePBHg5BoRkaxpy5QoAqTCCw7Bss6uNJDR2mio",
  "key29": "38DEwaEJpkZa3DbTBggm1wdKp13yRe5hvoGerA4VrSg7ixtAVRNhqJ1Qum3fMZQjTj4Rj4u8KPRhz14vHgjuVCiC",
  "key30": "qutCpP4WGXjXiBUft9vLsM2LywopTYmeG6LHXiGQhXQWUErhzomfZRTraeDTJB1Co1BQHW9wJB9Tq14EMFKh45P",
  "key31": "4rnZ4g6gx59DKzkW7E5KcqxJBpEwZfp55dTP1kp5Cx2JJD8JTzLr8Fwc9x9Vdp2wdM7DxrrRhAgKrDwqJ4gzjEpU",
  "key32": "5YqziaoJW5S8dDSnFPswPt4HWSjCL2b8pbvHauPEP7cz1kK6aRSpyAdnpWhya2jKHwBGkQ5AbSKUZmVMZuvFF8vL",
  "key33": "AFVTx2kXWdRyEHkTcm84gY4jcpzn7VoejPoXZy3k3vXwTWujfxiM9TYBdex7NPeaq5kXG6nixjVQ9x8bpJFautU",
  "key34": "5jxMicHiaowwrAwHkBjCo5b5Tn9CZA9MvrB5i9KnyAJJDNEmpj5m8brGzvkdQLxnmiuVoWWqueifyJ72nF7SN9aX",
  "key35": "4QACqkMmKQj7Kd796yeJggAzUUdV7HjLPxKFqeLxQBaohHep8r2gYpKu1GVB4b862TG8LdJDN6qwNKtTXbUj9GMK",
  "key36": "55hpu3bk7BrSsAqbfwHbX95v5akGqvuW9FMGLE6XHTkQvN3e4dsQyTnVkkNDiwmcjjsNF6i4qK8D8dmonEJKYhB3",
  "key37": "3pys3LebHrh1oG1FTKWp7H2hhvc8bY32VVhLbnoXGkJNxwyoRy36hhtHyCQhom9WJqzP2sJBMVAmt9GqxWTG51dP"
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
