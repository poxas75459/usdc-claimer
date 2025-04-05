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
    "CTqxBKP5UKapbsvouvTzYRKcLv65AGYvzF3ga5Cy74c9ypGppbnyFCz8PduBQqqjHJsjNTXfbPhbjSsm2oXzW3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h61QpDDPCor8BXF6FkwsgPS5FaHbVmZwWCLxBYJt4H54twaA3JHsD7scStfEHuVmscXwWqB43iys4LnCGgwQbxh",
  "key1": "4zecgw5zn17hudE6MRSiR9jKpdBvxbCyEZzn18yK8YiwTqHUbCJEkddsv2mzcLt8YDof2odSWASRBKwzBtUpB6eB",
  "key2": "659YgRsgt94khLTmtjwXH9ZbiZ8FNDAGJ9j9ZtFNuyCf7MKXwNaALyBVACH448Noa2oZi2LrLqv5RBL9pVsr1yTR",
  "key3": "hXZsL5mG8i2yK7n5e1sQZrkRcgepKmZ1w8ADrwpLywmRxS2zYVogPfyPuSFjk2akZgHVrWbCnXscxBGcMfUKLva",
  "key4": "5XuPNb21zwjQqtY5P5KyN7CgPiGt5q79H4xEQknxRABr6m8tRJBMKGSNyai7cym5AzpUXZ6HL3Edbe9V97Wpqoym",
  "key5": "3MZ1bBLVSwV2UadTWYYTAqnsrEBbQDgrMK6PXnfMsJum8SAx23DxG4oan53Ffqe52PaCGUt43Wuq6f8xCzcW7qQF",
  "key6": "nrPCQerxPx5mHScZFgmHeukrAoD7q8MiqdsLTC4HefC64RF2VE8U5xGX4LNA5kYeyRKTcGphX6Ea6MaF5PD4r2Z",
  "key7": "65RUoTiuz1fD4wbebwdJrgpDzQJcEWgvsct539U2PrGoWUYJeNbMEFR2nkQSSykyThDjenGLqYBzhkhxPVhrAw1v",
  "key8": "5TztHyPy6G9eU36L63xSom32peMofFK1kuiUhtfJCCqFr9AU1nRtmip45sUBc7DgHqovbHHnN8Yqxtqn4EG3aNbm",
  "key9": "3HjFDSn6RvfLxmzyLqW6VEYQM8XrPVJLPsKBhSHXnvBivLo9CQNycsbc2vfsZCLEjK9aT8dpM1mLtJGpZZWjae8j",
  "key10": "2fMHd9i5DZK2Z1sfshmYfzkgbP4kuwGGmNxApRqovEq79EjLfnmua3Xx8aTtHEPU6rhrZMNn2auHjdc7LYkxpj6e",
  "key11": "KL2oa1o4dwHxt82zy5BMvNFt5PwU5jUUeAf35M5BvojCmQ4iUDBSBu8oXZGdAwDqD7MabdMKHXwoUy2GfX2zp3C",
  "key12": "3jRhPtEgyhaLXhC4WZB5qYGNmMx59a7AqoNFnVwdnup1454SbeG7cHJKJogpu5AKYgXi1uG4ibk6UnnnHyEMNa8U",
  "key13": "2aoFgzbPUCyHRDdHZc9XqTGrMjFuaRu4FH8W5s9x7LN344ViYdVZ8a2jXaXxFqwCivmWGF3J4zMKKhCgAUzsjajM",
  "key14": "5fqSuvaAbaDS5sJymwe2yqK8gYJDSqH13kjNvqHiN7qK1Y84HYdvLiXgfwifUvCDbhMwCjZD5h4gUhacDYd8eNub",
  "key15": "6HggmEbTuoVVEVdgpnxbR1RyAPB8EktAWPvnztfh5j27p8ovH5f6dsWxFnjoWsCNc311d1NXr88qfag1N3ZSsci",
  "key16": "3o24QyqGZ4L1gyHzgwbDCZEGAXJuwhrffTygCf1oAfmaNyk4TjeShYYbbKhX3asccf2R6uiwM6Vvjy62Xh8tMEoz",
  "key17": "33Ccekpy6yadiogHcWwmhksWGcAzKedWVvzWjuxBKwLsb75Zm1FMQyj8EYmitjfoN571cj3NVT4UrisnBkSHdfaS",
  "key18": "4RPLcLD8Rrpet56xuKr4BwY31oS6diDDMLgiMng1LoSf1kdC2o5RrptB8X5tP5Nd1u9HFttnaF4XAmksLCpd4spw",
  "key19": "5MsqKA9wjpXBoZDedUngUzw2tWJ4XG69BM9827U6iFMokAZSpDon3dE1BrKNxs3kVLBB1EeQvsUKj4dLAGkbUYSq",
  "key20": "4RezCAuKKYcTnNHyzio1BcfMgaVWPU7he3webSD3963YRwpbfcj36PG3o5Hfv6oweZ6L57FpZ2mXQyFqowZXmwtL",
  "key21": "6qdxMY5RD5H7UUM9wyMAXGs1TMBwMJoR2iTc9LZk3RMfhchkjwV8Xu1UfKHHKswAT4zEebVD1QJhr3q5kifQfmb",
  "key22": "3kiogMG9RPk557RuwvdUfSR84ZrEkPSKeiwD5YBvugU2MH7q4yuDurMQP7oMiZH2BNP3Raw3DTn3Hu3Wawdg6FPt",
  "key23": "efkvYBbjvA3XUqLMGn5Ve4deDYT8cBT8haEwwYu3aNDxVch6QEPUzRdTgrQYHUT7Qy2fk5e2ExBB8aspZhFfJPA",
  "key24": "3Xya8fzfxWt2Sqgovv4CL23MFGBxWQJU4RvnDGJ1bv7JwUiPAogFecur1HRoSggx8u3rbzJtxwLFzKuDWC6CQPRe",
  "key25": "3YR6VwP3NYPuGUqHvyfZgsbRc7R2rWFG5BLeQAYft5JZfvZqKZ541yc96LunhS9U2eBo2h4tyEG8XAkfSEzXd48W",
  "key26": "2uMa3cuDCvz7ecZVa7vKeJBNwEWNNBcdC2JSz6bCehJzFxQhLayLBQghAa8HNUd61iARJLaGEthk8j7DMkdxRpDX",
  "key27": "2BuBcDDvp6nFDGWgwSVKPo6tWyLf5Cr2dscMCj5BD8tGWsYAFsRMhebAEceKLkWs7tmkj4E8PhUbVgd86tTGn33u",
  "key28": "39yN2u5KjeFGynVTzJpNrGaW6cS6XQPAzMPGqhusrnTnt9LwZyQBu58DVcVnKLqE92d8KtDJh4Y5XPD76mKJZoVi",
  "key29": "56KwgkAATNeo99aRpCEedsQcMyAasmBvwVRi4EZtxyrabPhhxwfGGYnAZBXEqBWUn3Q1A4YpkAfqjATCo3kvaym",
  "key30": "2Nn2CDonVFarKY8KKvoT3eFRHj7UiqSdoa4eCiSzD5utaLpP8yszJhtYzEdM8phspmW5yXbBVRK6hQ59xWSVCTJd",
  "key31": "58xtyBDSAJ3r9itnt4cVqxPe7w6CKFczNEfhnJiRG376UKNVygGfqzxsvS5EvkJDsDNxq5gj5UikAV1hfBot5HF5",
  "key32": "3jj3DDWebkCmhv5pHTnYVhs7DTqUVQ6r3x8WKn6PC1hM6AiKkTEBv83biRqtE2QY5XgtVux31XAJ1SHc1P7Zb2wc",
  "key33": "4E6Gygarj3tsbhMsJ7WVRSUj3BstDmPdVczegNcs2PoSuCgTJ56DsEpVMqF2ZrfQk29k9r42U13B93uLp1wfaSeW",
  "key34": "3aotcfXWY5H3fEXXiVXvj9DKr92msBTNnytVwL1v64qhSZ2nmZkaC5rLofkwqNdqjbEbWQX4uW8JqZjfQur6gAwu",
  "key35": "4eGHej7bKTsc6A15eoq9Z14AUay2vP2q6o1vJT19AdDiZqUs6q7HazLmayHKteaaNGCAeFiBV86G5EbZWqrDqQ7a",
  "key36": "22exmih9HfZXhjS7tWB8xcKsd89wrG71wuCDQMErnagYTpf67kTH42UMEm1aSgTME6Mwkmec1SddcKCJTLhD6g2g",
  "key37": "2ACsxT5AdTkjcFuLXRWPTup1pU866DnhoseDmw6pDcVori1wMFtN4xeezQHPcWRhUxueY3pYtDrs9wKizduSUN6F",
  "key38": "64PZq45RhXyJtjV4SZySEMRFPpLiSAUkybUSSGHUyAB5HHco1jrP9HA68XhvCFRm58DAsiy5DVxK2EvzLRoCpS52",
  "key39": "29oeBGgV5GR2MJxTDSaX2KfGfMbuzqvwfZUXcEFMgm8Rhq9AAqtYi7GrJGdxLx9Bzxs7HwqEYyyNQKxEp38tKKxm",
  "key40": "JeCdUqEAcZp8LFx3MLiJv9c1HKFbkzkWhbpbgG4ssFn8og7GKZ9GPQF1nQQ3T5nYzFSwADWY3AZsQuUX5icWJNR",
  "key41": "3bD8LUz6qpFbhkupiWZremVv9aQLnEHuGUfNBAahM1ZmvHykBRa34UF6tQNtUA26Eevirt8MjPLMFGuRcXibHFpi",
  "key42": "S4p8aAAWq6Tkg9VpHcvn1kwqrxUGGRvWgoW1Y2RLNwzwP8cStcmsgyBybmFgUbJD63iNPfNQGpPy8f79je8ay86",
  "key43": "35X6p2serZw3WRTDSEgX5CSu5wRi7pirNSZ521iJkxiskxoGjSTKk3b5TSNJ8XW2BQLnTUpefYZiTMqC5MqvfyMQ",
  "key44": "4QX7bYwpiAzcon1G33P7U7MCRgci2Z2tMgg2xKGyV64FnKdEWgSMshHrJyvSvoCZqd8DXj1DvEqBNLDzKuLAU9LC",
  "key45": "3weduZ4duc6KL5eVyLCawVtPvkQ73AtLwAwZQqS7GHt1ADRUBohTvRYdWQHRd3N5jmqB2L6D2gzSsAQ6uZ4JYbHs",
  "key46": "2uEi9HoErWHheefpq4DxRxnWuyPuXHejXLNSQBxddStUknqkjDEpGDpbHLsQKCCtZ9cn7DAoSroeEvxgC4o9u7aC",
  "key47": "HTUttc2ratGTYf8MqMzGTwZApjEbJ2Ub2dNdrcY3RtBzriM8B1fZCVNK42kbwoi7WjhxWkJtEhyzT1hJV57AzfL",
  "key48": "31dLNo6bF2isFMqZizq7jP48tsHziBhafiS82EcHbwQGajAqomKiFrUwMBL6aQ3Z9nb7H5hD9Z3t9dxyHEkT6Hwm"
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
