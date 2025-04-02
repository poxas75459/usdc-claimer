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
    "3UBqRb9CMRKSS5VacwYFbNY5dLrJpsWFRBK3xw4JZ4goNXLfjUx1obfxGzYCCmwJN6sDM7MyHD6KkkVCnjP5mp9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AzMd1j1VnvEsttsDC1ZfoxkbR5goYW9wiVBEfLxMZ4Fu46s1kPHSyuwLsoyWHkj4W1wpZfezkncmDTFArkKH17A",
  "key1": "2XmdfdHAfcgB8tZYWBknbM2Y5AKgRMYiXGTa5idipeYxY9ii9QG2X6jF8hPJ3RpqgwnYxujWo7BykphATkyJeLWb",
  "key2": "4b67NJGgRDwUveSrC5iAvs7adGeB9N61dNhfr4YxHK7v7oJS2HS7vbE5RGsF8ZMjsedWvwdEqxkPYZFpUbtuBMaN",
  "key3": "3yD6YKPgcgE8oMeYEyPCRoRstksLuUDdnsB7KooK7FSanWz3ttQnmpi4FWWy5Absv1KHWJ142ECSVqYgDNpvDNa6",
  "key4": "9oSyoASdwKmoCXQSgWUgxbvzfgqAYeDCXJZb6WfFQ7xqRFqHv9uAaB95ws2vqMBnvJJnY4SpALUV9KM1a2ZkCnS",
  "key5": "3osrrdxL6jpcki45iTRX8rXUdB7zvYi6ukcQEixXVbdySWBSMhxo6CX5BeeC7aTi6vfdYHRcY47TKSzFzaSGoztQ",
  "key6": "FiKc7NjNmdmob752P26acuunrQEm24rry1i5KM81ZfxweDBJA2ndjyt1CngKBic8UivpAirRmPMawjA2nJepQwh",
  "key7": "4AmtXfyi5mYZxNcUvcXzVrBGCCh2fU65ifm5kFmR9sXHc1jEg8nezTeMVLAqnC7SueuTkt3U8PYWEzGSVMQSotKd",
  "key8": "5Zo77YiKhViv6GpiFtkvAWmC8UjQEkppeZRv4UZ5fCvcB36autEstmWRxinKbA7tVBQUpKPjoHzns871hZ7vRqMK",
  "key9": "2ub92WPmxK2UeCPwCGoMtnbzChct4s8G2yC6wpeb7FJCLbAt4tL2QUeg8wxnVjhmg21msDF1tWtmRzekg7R2JTb",
  "key10": "5fqHJyZY8bZhywDWDt4hEZV3fBBu3b5dV9DjqmHWvwwgztvnPeGQ5fFRHwp9CaCkygLgQmQ2gAM4NpV9nzjt3kjL",
  "key11": "5WJsAvyzcvyxSfSRsvYEMx2myTYncaheZdCpmUCTFHkisonCKdX9C1LJUq6TRtzv4z7jminMbcQLhG5b8LRr4uxQ",
  "key12": "3r7d9wDPDQitmaKmrXrUVzw8iZmcZVNcT4u4hvwUrgLFxymGwPANc1xE5yrcSFFGJ4x95Ua5YZsqEnmptM3VoUzo",
  "key13": "3za7idAcmtR3Z22f2dGsvtiCcXL7JqwXRdMjWrX92dX8CzoeBDF9mR7WjQhB2Wyf38q6y4oJHiMrn7wUJ4zNcgG1",
  "key14": "KmLxQpPtSRrMwBcDjNmTovyQcBv8mFeFD7NpHMq9MMeshhEZBnGnZFkafU2yYtjPZNzDKijGoAckRcHYhtepsfR",
  "key15": "2FZaLzPrVwX2YJZUBKPtZc4VXwaH4TdHjr4evgJdCujVda44e65BKkX1Cynae94UUgdJUZY3jL7LPmt9B8Xpcrgr",
  "key16": "4oeKrnTNjcjvhA7BpVuDb2DgVFxgf8Wp11AinuHpyaqeSJQTM6dGgMivL2x7ripFhbmnjM5wgXXRmrVvf2o4WBuj",
  "key17": "CJdGeW76xpQsAgbSazpucjR1BL7KuhureGsvUPQXUae3i8m1ZxcRVqbvi8rxAamyH5ZXiK3ubk1nczq9dvQaFxw",
  "key18": "3rik2MqN8YZFUfHqVJJBBfXTsXQLQCAPYT4zCic8i6PZgk73gYbRVFziT5T7yWmbqMj92P7pHkhQ8mKo6Jq3bdp1",
  "key19": "3EE5WaRgc5wTv8ZxRvuwhVhTpJw68n3JFm9uysTG6rKQZsfW8oQ9B3LDTR7UB8ueqGptuxija9V6m4MfAHy2bDis",
  "key20": "2oYgXnwduVFMFacsUQ7PS9LxVwnzarNWZDWBv4cZUPZmVrpyeXYwWCsWoydfxETyQKDEKwZzqcpjfuh32uWXhYR9",
  "key21": "mbeGCDB9z3hnGMB1AgpPUwg9oniqkn3dCPkEnUh1iyMhnS2SjGcTTB1MF64hWguWq6aSrML8waroXkAdmnxzcjK",
  "key22": "2d9YCLfgih1iMVf3qYYszG4xyX5gbvmfm3iKb586kQtXZ3pPewrJwpfxVT5ZA79SipSYaEvsaQhMsoN3nwghdjTA",
  "key23": "pRawonRnQS1xpgtPqAR5s52Bzt5v2JA6ivrFBXUAaETDuPoYX1SvdMcU5NskwDdzBnM6mdFHo5wV8YPBHmKNTuK",
  "key24": "2oJFdpZH7bZ1FhNhrfG4ibuVmdkgaviHFQu1jpFY7a6SSSftEQogNPhckC2hfPKHvnmKNjpuSugitgseqn6KEK2T",
  "key25": "5QtfwD3Ch5uJjaqsRN1Asb1TRUyRxgTKjs6Koa51TCcKtCbsAe9kkY6BKMGKuzjjVc3EQEi3M9nETyPJSCsq5gza",
  "key26": "5C54pkefYo3RiDwb7S5BsdsrtqgzmmpV9CCALLFBS5b4cdb5AVBYv8NnG1Gv5AYBo5516gKUNzTufHLbjmvE6iGb",
  "key27": "VJ5pehvdUss81EBDSnyuzrbHoEuam9qEtwcP8cUzVJjmEzLmkKjthWUJ13VGCgovYAqarFxxBcchjzQBVKyrgsA",
  "key28": "5dAHUWYR1KTynp9KUi5Y7M735W4QX9qeSMoXLPwy872FzQSB9m9cGHd6kQjoo8WumAeSmNs4xFMnM3MvnqPDRbah",
  "key29": "2nTAMdGyywgaL3jb9QBcVT4C6HkzSDfdKqxHS9QDvmmVg3FAp2PCB6dPNmQxmsi5B7fMycjsKCFZNbWQuDGdydQS",
  "key30": "5w2r5NTybkqSoENrZfiBBkJvCH9B36cGce3AmJ9B8t6wzBdtNsa89My4phM97PAr9kbwEA3AFF2UHHZieX1ntAqx",
  "key31": "26hPN6NYXe3tCuwYerdEeRMBJQx2VycHPKr9qCPjGCt83osR3HDRfEkd79h7qaDsa3UZHsG6uMcWmQ3bh51eVkTZ",
  "key32": "m64w1TBfAyXocVtAcbCiwkWPZPcs9PN8LsU1bjjuQNoMBG3BCQgf1KzMGtyNuuDE9WLFC3FCnfxtY8P8etpqdy7",
  "key33": "5A5476WmgD6X2ckVoSRvzhkhQdzvK5Y6SzD1W4vru7RRP8nyh7umiK7wx8KWCTuskBc6QWMX9tEquHJ9HAwmvTX2",
  "key34": "4kh6ayKTWrpuxjjvU8k5k8sn2wfiQjnkekfUaqxBpwpwsfLZ1zEKRcGhseQ8ccqbvSt23VpCkQZytR7TADq8zWRE",
  "key35": "YXkdAbcDBuiSqojhDkTAYLdn6GZb7qtF7e45RBTZPeZF6xLAnUiXhWnh3sANndNfvAiAu8pSGkuKjwG93gQYWBF"
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
