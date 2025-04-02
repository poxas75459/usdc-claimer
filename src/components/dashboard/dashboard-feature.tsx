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
    "3fGm2PYbmLsME6uJ4W9U48pZfHRv3TW6CnW64pDwEW3tqTGUD2SfXFH98dRTaGP4czfMu6Dqz1KHsC8XNtwJsUZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HrVqgf6HpgNyG2CRWuRmwYx43q85Umhts3dk3phcYujB9NKbwFr5CzdFPs2VUtycmgNG6WGvrjsraeCD8MUP8fL",
  "key1": "3NAKMvSriPuaHkkkBAeGfkKVTozMthEuwumWJmxbsFPW2vMYhZiqA7oDVFwsezHwu7QP5y1JtJaL8Cm8jvX8KF78",
  "key2": "3fXFsWPSXY49bqeZxWceWnTTRRaahME7sXXTp4pLcnbXAMVQ5xZpWxXc44yQngWWpdVP7xhUi137iUABzeaVaX5p",
  "key3": "4E66neGyV25a95tYydA8WNtvAf5KuB5LAy7jVSyVkkWBgSzS2Rf2YvuvsoU95CtUUWJSC4DkgQuRELudLhrGn5nk",
  "key4": "57VtXv71kFvn2YKL9favD2WgGP6n3dfSTzWvyPGuLLzGXRjwCVUURXDZMtZcZNWHN8EKBj24zq3jvMNQ7K17Y2hb",
  "key5": "FBUARKN4Wbdgy6LeL9XmL7yrmqEeYMn2FAQtLymDUnVQ3mPxBGk6ikCeatc2X1ma59zFz2TxYGdMgGJVtGKw4oU",
  "key6": "GtbsVQEqr6ARFMzF2LcMijiKSZcueY7s9djPDEApnMemVXCfEYz9h2BTBwP9BpGZQK2unJ8YGw61C23Bp3ZAatv",
  "key7": "Fnc9KT1y32HNgyrm5JnCGNp2rWYTRJJLHhdmRYzm9eLna5AHbVonG9scfcueQma5gLaKujuNkhhJhbsSBUxCsTr",
  "key8": "5otmxBfsnZ6dNDNKY6N4pWc1AQJo9brTfz21CQJVVEFofnX7wfKw6ssxRCZKKk2b6WWus4UsjCidNdnQuhm4UiVC",
  "key9": "4nmZD44dwEbbqcCMin6hfPX9gDJBCpMLXnpkR4cBdie329j6W4t63t3amzWzrNxLtcL6UENgseCcEBvLpFPgaz7B",
  "key10": "22L3bT3NDAhYNeWRHpoK1sPAthQZ7cX2wMeD2YPdo61ehHpPbYnQtdTbk7ZZu4U5WMi2LK8NtinV4dAUXXAroaH6",
  "key11": "29JjUMBu1BB1t9gBEw1jwsq1rpk9BmrDFtTg29h74uv5f1DPyzaYiSh7yFdsecgPTA3MaMfMYmURE3m9cbAnFNHW",
  "key12": "5D6cmeXxD4T821KL4bVU7y3EWmAu1tUra8J5KHnTijofoTCp4BsCcpiV766n2M9Gfv6VL6QF1aLHVg1Kph8TMZzH",
  "key13": "59fnYQB7VB5JaKem4TLPkTjwNVkzhsHFEYCisfm3zxumuWFRUVaUo4Tnn7RTJ7kfn3Fd3FkoM1dAcD74f3TJuQMb",
  "key14": "FVn5SV673N9fhq7n6EBeHoGqyB1LFFw2nyruEquzUTgWisH2d2MBuAjc2Qyo42wMFSmjNq2r1rgFE5ZvMRZK6dM",
  "key15": "rmwY2U2gU2GVD9XRQxXYGUFMhGVzLLfimSdJvm8rnrUWnoZJUKxVd4NTqSLtX5eT22LJ9A4XBy4z2QiwFyD1rQX",
  "key16": "3BkfQEz4xCgT6PzNwKS2Rg1oCxXHtK4vn2ZRKRxTpLzyDL1RGAcvAfX8rYdRJpWn98x4NF7on2Tc7hmJyPukPg8P",
  "key17": "4rUSKRA6QvHyJ568dmFd6pXYaJ7rrvuVk4E7wFqDEMD6ppqyaaRQt2eFd6PkjRbUpBKszHiTyecMYYS9kafmXbWR",
  "key18": "5hqmZ4AGF83GUTkHQRn2QmBLZt1vKp9mNaQRiGyGgAAtj58abRtRssZcw317XHiqJ9V1sXT1bFEzdJeUJENjTW8J",
  "key19": "5ewcX9UzkQBy5JXuwQY5meAwogcGjxFDTiM1sr5Bza8VrWWo4YkMpWNNeFcCQ8pf1bVGf36xbSN2ZcFtrtRmdRBt",
  "key20": "3tBCnGyeSJThBjakEZKgEeF2XQy98889arypwe4DArDX9r2rno5399XeFvCaU1n4gfzkdeBhArhD5Q27jyYp4K76",
  "key21": "5tqwUFyoQXqoGxbnYRdPy8hT3nzv4gaMQmxUGfvPeidtbhePe76XTx7cFzHiXUs4zkqSpshfzPdbM91iH9ihC2k9",
  "key22": "2LMaNs3gFSfzTuWpzaCsE4mt4HMoZzsmVGzvw123x9REaZ3gtRDwXTpwNgw5keCWVEDPXm4cU7pzpUHjrSHskyug",
  "key23": "5YrEi5b7oNTR1q5vaWpWQr9em2cToD87934scNEsk2GyoFKdCayKyoBzqauAptVhN1YDnG8KJdTnBEVSruPKGXVU",
  "key24": "4VdHAVNHGimEK6mWiynaScbFj9hw3Bs7aB8ALPoRGHhqBhLZ6vMwNgvRF5LqZVZJe87tk9x2GXUxo84gexECjvRu",
  "key25": "5QqL3VLZeEYpYAmEQ1FaqFZ8EYzX2LtrkKJYP8h565PEX971TRaZNt9w9J9HM76WFAfvB8CeXwdHaDeaC3PgZLsa",
  "key26": "5THMYFh6GtDGaWQuwp7vj5T4BBHbB53FzhotxLNefC1EyM1J8D8wLfhgiKq539AwNgjKu81ZuW5UJX6Z1VdNbKJe",
  "key27": "4sS9uBngbV5dTyNdW1kfyXnDv7txaYb2ye8Wzrq3kgh8BpJKNfiA1TQxHqjfDgQud1oPeoPePcP4tVyJuTiCnsyH",
  "key28": "fGReudLPHZkH4hpZ2mJCWRJEEcHbBdAPLeF62455J3cnMypeT3g1yrvAVMP7HpjTpNDUjKe3WXpJxmm5qsdhEPp",
  "key29": "5gFYAqVrpq73K1bi4mveT6Ev2qT6BAsHWCDh4e7aPoBqEUrsNwM5VUdDsNSRNSaXqpSEDbATKsYA8CFPrTWm4G9A",
  "key30": "4cCq3aksqdip4zMeTRf2QgJNov7XDgRs4He88rtYsouAgjaFQAi24VwHGjfUuyFKkyhfYGc6gNkHH75Mou8dnCWT"
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
