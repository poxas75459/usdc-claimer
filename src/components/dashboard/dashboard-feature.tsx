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
    "N1iRXnwRhogWFnt5kcZ3EFQrGnfKETNNgXCauKbpSEhkoyiL8xfj8GdKZREY9U7azcwQaoQQeRUbbDZpgViU25E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AHz7T2zkiArJhHZmjMyUYEzGNBDSfemz1zj4kZ7homJ7bpNSzU8W4Zxiq8AXN93Mtj4UHNyoL88GbgFHoPbmREs",
  "key1": "2FAJDWGQBHbkQhcYg8oLNWBMnReyB8jBoQZr2tHg9x3Ja3yoPwFrNxYdjr9W3E7FaB9dFPS7eQcPb2dPsTQUz3cd",
  "key2": "2TH22BgtEZ19yHjpq86mYC2KFgAy98Ypz1DkwiQezu24xdfUVnznEmkhY2KLFKWrfVyoS4YsGME58tJXVvMApDRF",
  "key3": "EoHNPJE37741RAtz3fzFJCKrTRKbBi48KBS5ghKay4C7dy558xBmS3rLntrMx35pyBvQs2XBuFRmKogCEL3fR2C",
  "key4": "31cM7jmE8kYRPohKMnebEse4WE33gPyfyP2bqg3up8a1Vuxt63xAuH2rsDtDbyWYhJacimbCtQKy861VEmRLUtzT",
  "key5": "3TuEtdAXEHBCitAGtN99Zugzc7tpPg9jzaymEecTQqPbUojXYLr57cv6xBbUUmyCgAJJe7nDG3SoFTBTh2M4ReNN",
  "key6": "4sui51ZRNqAekas9HAr16eXG6sJWPyqUReFzKd4NTV6BwwfTgjHwZHmivNqcVGP8r9rDnUqxPQhHgJn3dMz7mojR",
  "key7": "2zx5utfXbwjQJUDioCVAweBLqRckHKXcrLqJWFdCNPjeNwv3p1b5R3DeqtQzHG3m9GNYbHgpJyKZr1UQGkaECL8B",
  "key8": "5mPw2eeTgwNwY4WoWMBU3aH8LHL56iG2HGks5jh4QJSiPQaUQm8iKTUAmxXm6GoAMgJQ7eamfc1qCyGdD9JaNmFF",
  "key9": "52n7cy84yuddhiRLCzXdbhh7vhGn2itHiQB9HQ3gwJc9X4aKPD4xzGU37m5ESyFjwrdiBum4cKDdSd8rCRxAqiPZ",
  "key10": "2KudzaxARANpjUu78Jcqk2qy6WBxt3LwkQTfNfDXpeou8KTM5iLVgRo8xkWVBKGGMLez6CHiFDv7Zwny5jesdJEU",
  "key11": "5QRN49obfiaKQCJ8DifBUXr4N1KA3JokPVxQ97Toyz9Qz2oVUAB12VD85p6krcKsZ8g1dtjfJUrySo92Z8oLkUYM",
  "key12": "3aFESRVHLSoeAe1PsXnd2KQbebbmpKzYqT7e3ZPymnh1SJ3gic1FfdA9cJqS2fK6hRzkvoz1W1tyMkzwgThLVe9w",
  "key13": "5BdxkwYn7k1jcws6qguqBQU85f3LBiDb78o3iwzWsZGFaycJKWGg7tuRuv4F7j9uSmBypmoZrnaTee3v5tdXvzLe",
  "key14": "3VdKCVaJXPY3Fyu5qPKPbcjWXB8dkR5m4cKaWcApBLSSaGgyGCHr8ZE5uVRQohwukqZ68BYet5MWGzgaE2VdeCxr",
  "key15": "2RvLQhGgnZ8tx51L4b5GRvyhPSPzeVkurDa73MDmYaPTinTTxQfVVxVbJyUHnUUh25QSfhnsT8gShwPW9z8Wijgj",
  "key16": "5EJzV7S3AsAvm4wkd35WUkYTV2ZaZbVMSyAp6Vapu1fjHfQmzhyz5HLXcdujLgJVUJ6ze2hkrBfYKiqV5Q2JEWf4",
  "key17": "26S3CJ2tp6hSjDr6sqWgh2bjMfkhmjpQC6zLAXKnDQ3dHsKnsz1yUry7ab6DCVovoqvc3oqE6kLypyakwvgXfZBU",
  "key18": "4e9fzqravGSw67hh914xbh6oz4ctCGb9LujNXx2NjNd6EmK2DzqbYSiSL5ftU9Tw2tV3MhndSK3NtUTzVPnS8enQ",
  "key19": "3y7kkxSqf4zZmkpGucjwHHVeVtJ4JEqhoqqSNooTXg9oduHBC7ngdNue7rk4dbquUrwK3uv9iYPWJLEYHkqndGMk",
  "key20": "56ZAbNAjwGmfnfS3FcZQZSUPYivR2gvMD473RxthsyAEAzzf4vE2YPQnKkf7Bp9DZPHEjTs3UTeQBg16vjX13DaB",
  "key21": "4xR5x1jL5ZBVg3UYWKVkybvFfyFJzraXckZupbk8hEYFEHtqwowb3ap1vMyZkzvvh4oP7duQBy8KMd7QXiTnynmy",
  "key22": "2wfsDUi1pGxKGpcyYrxejhZVFDo4YsAQqgvi4GQhy7x1LWcMgrxtUsvmr3vvaiNWTJ6FkZ6xWdXcuFtUxbctP7t8",
  "key23": "6cR2fCF5GwfAgVvy8nGk5dincsZ9h9j8mi62u9KqX6DDyyQ8yfaVbnvUiQrurG4EesEhokmMatAV895bq8j9Ryy",
  "key24": "2XMVaiVvW6xJV1mLGqKWaqWNG1pYyRACuxkwbxN5UkDDEHNpbHFo3empg5dMFjZDkhER71mAqrqznkMpkBnbNF6Y",
  "key25": "2Q4Y6bBmog2mkc2S2nm74kubwZ7amZaYEDYzQREpBvUf2mviHDo4kZHAMmzGPjZeNGZUCHykFk9foE8rPMUaKdd5",
  "key26": "3SYdSRtbNgFnjg2MSgpZUf3aSFMVwmmeiGrD5ZeBKYu1Ps3uKVMDDwRD3FbiTJ4aMHqc3ReLDriTdeUUT7tTc4E1",
  "key27": "43ezJNeS2TurzupUthJAZ3TJoYVHTPrWW6FRk9hRwRTEyJViNbSr3V4VZDPzaZiNWCaSkr3TQ8icijUSw5p6M7uz",
  "key28": "3snEzkgALLPHjzPNLmy4ogwoLG4ftXtSZzdM3L2gngLZha6CEFA8NacUFwCuxx5JzyGPKGh3Erge6E8yEh5KBxXJ",
  "key29": "2VaCSR273cJQ4MyR4ZpdurqsEA1Svhgg5tZZjnjo5HjKmVynMn1qwAUN6kqtBBUnbYJ1PKXqsbrJPGxGA1kGyZJp",
  "key30": "4qT9e6EDMZfABxJfjQc9EkvjJFQexwVxmS2cKCM7JTRchzbkGZT6yanrcxPJYBP2sdh7ieNujMTHnFix73d5Er4f",
  "key31": "31nehxDq4rM2kwLxoBAmaM8WHQCPVbWPM7DD6Mo6d4G4SFTBTaiikDJb3pwLNmWdSoL2XKcBURDNXhz2voBknhrg",
  "key32": "5gEExCYfdQVbRvLNvcrunsGwe9QDefEJ3zTbKABNgTrhXxKtPMg9NWc91Wj8AcdyTQRGzxT3jErbHayfR58A4F6G",
  "key33": "2y4CJEFZpMkG265KXzaKPNbYTkdnmJ1XGpJVqQSMBRfFHpXChqCJob3xH7Su7rp5mfbHTHjuV5c2nqFYWkL6JxZw",
  "key34": "5i1RfZjGWwK8e789ELeDtQ4CxTHwmkyLZMjamzqnbn3eQRWpWKDeExD2QzXwgu8SwE4dU7NtnfvXgAk8529m7Vii",
  "key35": "5RnPXmVfxCTXTU5N6JiunPvxF8PVUtmSeNFWkJPXbcyX9LtBWUhYq9nC4oVmmww1LcAp8AtZYLysHugaCKDJDuGx",
  "key36": "mgXt2PwxkF9H4MwFXqY4pVqKsCEFMPgHgsgD8cC1NhEMtyUvFaGF2TAL8Zas8gSzH9fv834aR7WwwTjFaFgrktp",
  "key37": "3mmzV5ifQeirKRnoYDMhT1n8jjCDyjrUotxaYUSuK2cJiV14qizVTPW4mMgiDMAnUdQxWVRADpmHhJo3oC4yPuAJ",
  "key38": "cs49dENg8fz4b8LH3PH5KVMqoTQvG981Wc8DhaJoCGPq5fzqjCEQeSh4KDRXsnjx6Uk43HcMDMRXLP53XEfvACc",
  "key39": "3b2qcbSLqPVeMrTJxrUKcZDy3d9cGD3He4DxZaPetPonJaB4CKNjRz3my5ErXcEv67twxHdys9nVMPTBPWCCnXHm",
  "key40": "2ZoHBPfXqe6bPVHjy6c5mSpZSTy6rK7r2E8BT56bHCMvLD9uXjznvateTkg4jCrQjRXERTMUvC4h6ufTgiVkCUhE",
  "key41": "f52FzKk8G918vvFfzYnT2N6SSGvUftjWQ984pHmH1v1DRXosjcBLz3P924gLNWpTa7c6wXKbU7rvxMPgtxKSrt3",
  "key42": "5eZV4SqmoJA3g1iPr2jLuhLa2PYFdum1ShaPCCdWyiASXzrRs6VWgU6igqu2PLTaivkMgfceBhizWaBujeV2zZGW",
  "key43": "5Y4Cm1xuiYE8VheCVoNtzUmGREE4MYBYDyN2cxA9E5ojUnYmeJTHzCnZzMMWCQSuJB4Ly15Qd7jWMhZWinMb5N7U"
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
