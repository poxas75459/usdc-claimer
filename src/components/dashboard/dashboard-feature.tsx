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
    "3rggKcMSdWnYS47JY77RU6zFkAQAvovxu1LPKsNYrWSzdjviWsKYP1gKtwTdbj8YUCFAcjtprBrnA6PAfPosTH4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rQ9KRxTGpioxsCKTNghvTKZcLQKCkf228HyuGUMwwgb1K7afHAG4ANjY81c2WgajhSPWi23PqUrmk4QchczSKJX",
  "key1": "4jBcgC1VEsEytxo7N2bbmuiaB3mBwcwzcabVhcxLr3rsP5cxjNMDRECQoP41yMeNRMNGpCg5sLPwDjCzhAJJKZE2",
  "key2": "5HgdKPWQTpbQcbi1LuJEL91CauCqwZngTy8EfoLxsSgxq1GjDcqcpMxQjtdhzhsJ7vmYQ1dNVNJ3J1CWZ5bK8W8H",
  "key3": "4iEo2BACz6CCb6s1xy2b8moLTwQioGoM5jpKgPYkHoFffsuc4mjqgxKnLLNK2HQgqYaGbwmMk5rbkX36eBUqt53M",
  "key4": "2Kqp3UFfb7CKMkbhSVXPQGsndn6JqNXtRQpskvM5jGDyxJeU2K73VsjkQSXCQZT7HEijcoY3QpJxW8C1WF4aTL7j",
  "key5": "2rRNQJ8HgbYmPd9i9ox3t8UH23R8kHRzzySLUepj9vcnqFRffDzo5tXYEXK3wwq9ugUJmk5enuC5nx23EReYqf4n",
  "key6": "5uNrHVusZUDoVYJCsE3V54zdp2vVD6DwvevCVn93iKvXiUc6doAPGqvQ5i6RS4VLSYwKcpU21iXjxnu8gdF3GnYF",
  "key7": "yxu55PvCCeBxCroLgPRbK6uX2Hj3UhkbDhXPaCX8MDqYTcGR9HYaP2YmKa1epoJR6MSuxKeSPFKyErJ9nHvid8z",
  "key8": "2ieW7escaiqjcLTM1sLPCCmWggkPp58ZgmXruYkGRe74cezVsRJTHHYWiDSj1C6TCaUvkqGGTukbA7dkQzLz5cgZ",
  "key9": "VsrCTPvP3ViyvF2Z9KhGzy5wDcZnysyoJF3AdSMmmSzfmKFgpStPWAd3DDNADSjvkiWsaHD1qjk2qjBTc6epUL6",
  "key10": "5dNbQcLqquaCsCLHCMXxAQJ1WMzaxzFm9Eh3RiBQ2RHFRSCfJZM6HG8erfTRcEAqTDStSAHcSMhFK7dpWq4Ba325",
  "key11": "4rFJwDSiYF1MtuSVn9UiqN9KBkQCppmtseJLSvNoovnchuQBEJko8PTJEhgeJWrpYCEmgXVwDnDpacM1bCCrK7gJ",
  "key12": "3rU61jWUw9BiiKFP4e2iaczeasqmd5piHEvqpkQ3Zk9kBHKEeEsAqjJC6WfEkp2fhiPQWTd65crM4RaC6B5SnoXo",
  "key13": "5szW4CDdhpzqkCkH41SiYe5jB7Fe4ooft5jCVZtUxsovyrLBRBEMBv9tC2Ss1g7bPmm9fksAWLKjEjeFDQhH1Auv",
  "key14": "45Arnjg3Bs3wFqhxh7dmyp5ekaANf9QdijcGQHYD8JKn1R9NskLsGgatKfL7YAetsABTCe7pW5pTPhsByZgizZAp",
  "key15": "4y1v6ykgLnwx4pGb3gamyfmn5Cyk1yVDTjcPY86X4Y38EwyGrAe8t9CLXmQmLVEu9bfm5tTSGkdRWofBYM7uqQvX",
  "key16": "3HRWSEgHphM3ZXAY85HCEsc4ZnZWoTWzLLaLLPcF6Y1ACAdv2eDPF85ERurFH4EiUKzK2JUtBjdf5154sx6RjteH",
  "key17": "34ZdyE2UFNv7NzYt9JpG4sAGvGT1zi5uT5ndCpjnoCmoA9w2nqiJ2rbRoMVLEr7yRaExZfeH8HnXxMaHdYxA9B1E",
  "key18": "5HhEkDCJ5U6noFEQ3VXqjyt1JXK4FNEjiXxbcaB2SEJA4brWfy91Ct7SonxgekRRjRrV29yNzSqPuy3N4ucAoqgg",
  "key19": "3hz7N7dBZZwU1VUkFB1kEDuc1HazcUfbz2Qgzr4Sx2egVt2ZehL85eM6mJMCXvYKx2wKKfUEPkrVbeqWrqC2GmPG",
  "key20": "65MJ72LFj6a6X4tsworosJKWoDLrVb7PrhN6a82Xoenf4qdDkZMPLhpwds5JkLyKZattK97aL84jwJk9csdBCy2p",
  "key21": "4NuqGPJMiAadhcpvevu9s1UC2cStFsM2TQfBnGJBjRHVvJTNSzyH3VfBRpuqoWhzSwxVytSWqWGrhMC98joiexUf",
  "key22": "z1HYPmNmyKQ4wNxFAye64AUTch5sadG6ZQmKut9hQtKJtFQw6ZHLmKNCBN9TwbS46mMStTayBYQq646YZKNweMF",
  "key23": "624ZNP55Ec4rEJPZ5RwYtEDtTBgEKsAHraH7xzegksZJisCbdXeFhUbrcDnCPTAkXrkHGc8KGJuCKWJqc5VkQFvz",
  "key24": "5up8kAzyTgLggxbS5Ebeeh3j64vPvHNmZqjyyCXGDsvqWXzAzTgmfRx1btN1NH2RSKMJCkWAcK4gbAj4JvCnLYuN",
  "key25": "zHt2JMP5ob3HacvbXWxnNtE2ZTs2gzTSxtbHW1RaKNKJV7AcGbA2eXSKz6qX2GZoUuD3EDxoJeXenGLtTS5op8V"
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
