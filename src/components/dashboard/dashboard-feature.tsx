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
    "32rhmXfbRMarUD7XWGjpKR9T9nTvCm12fs4iMLESR1486Pduk9qBgGnVoB8a5unb2SKR9tMgARNgdYEJKnxQzejV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HRCjWzcwH43aq8aQNeHrye5EyuCs2z7DbuWFGtZfpBB1fm2Q1WE6AFZztP2bfR41pCTgi7jiR5rtMrxwg4kwZf7",
  "key1": "2CmStZDsHFAnbA6FwM84N9koGAbMg7ozKuo1aYsZLSTsSxrnsFLNvPMNBKBPRUTHSxh7KEfHrukd29yF8Piqy4fT",
  "key2": "qxRAw2dxLfAefRaLBpmBdpR4ADQgQwPrXFunnAnDWjC2Q9ChRmQndcvHefS2Yh5UVdHyv2EBiAfbxCLq2DAsnGM",
  "key3": "3NNDnRt5CnJoGQnga2JLHMTULxGojmvdWagVr4WvqPxCbjCkMqtZ1s5dx5Yy6hrG9gkzwCd8HmpVCpFhHcEqZKf8",
  "key4": "N6NEhfNZ4mGgati6m46SpTqX2wyis4vemc8gWwfbn7SN1666ANP4Bxff7HCRNGHt9v78NXwNZLLPCnUkewWfgfh",
  "key5": "48g9NiUd2NDPcEaVHxQxxcSdBQW7ceBD7pG2UoyVfHv4HSMyc3KLJRdGHFoZMv1CC5ycknbtBZTVtL4bHKgr8miH",
  "key6": "q6pRSV6DMovZhunrPhfUAjWAueGWCqJFD4LLXMgWhcoxgvxyewB1Vd7NMyn8iUECccSYktZgg5nKYDy8YjJzAdF",
  "key7": "5BAVT5mTxaaGGsJG9ANVpdB2SZtHt6NMNJkigLq13bFffDsD49KsXAqmM2QQdrWjrdEiZrF2oRG6t9u3nGvDMKyc",
  "key8": "5K6ZfaPmtwSCvwBBc6FUx5VVwfRAYwTW3SqbKQ8yMYNykUMKmMEuxs8Vji8s96oftra65Pi9rnq6MGbjpK8vw1PQ",
  "key9": "43DesQoZrmjTPLwSjqpS1LG3CEaqe8xWhNairmVAre9KuUdpi6hC443tBDvKYrpqqsU2ZaNumEu87EHoibKdckps",
  "key10": "2RX4ptiPuZpySzNjdeSjw5C6EaxTKe8d9Gx9UFL6YQyhgVZqb2rgxBLQdVQ3VVHFGU8BfiA4KgvNfN8xzSJzVyCP",
  "key11": "2RRkhkD9vgyrimYj7bW6Gx6ABHEyhsNmQmmnv4moJTahgi3pxogXbuHyPXhmcyZy1yqjsA7EieZ7qsJWM3VhyQMP",
  "key12": "2nHf4g8CxtdVVrkRrUGSD9AQscUWEZZLsAydQaYkZTMFwK7CDfBtxWRK4auHadWS97fj2rbrNcUtoKKHYjc7tGhU",
  "key13": "43WeAWobbhWtJJCPVr9XtaabTugmFvsL8MbbsYUcSKVpoE7SjmTCUSyTn3MPBu2AkHM9nusz39b6CYSxeU9WC6fS",
  "key14": "tLunFLZeRPvAgmhkQgZLMxTcZZaxLSqknPaRHEMbefFoi8687ip2jhMr4uMyoJjheGX42uNPsd3WV7TRv4FArnR",
  "key15": "5ZvpsEAb9J41tNSnScVAsPs41wRWQ5hoSa7rQdrEeVNz3Vs7a4neEQZpcAsjMucgqzJ2NFqSjLJ1NoR6C2y2qXjY",
  "key16": "4ZtAKkApQvQ55aHQrrc4uNmVTgUocTH6yLeNGH1EFDHbJfyUQum82LNFVNpSPw9S96JeadR1CjkgVNuc3ubm1CKn",
  "key17": "b3ZrHdepqV8Q9y2x5TQKiKBPD4H2zkeD59n1UC2CvQwcLwQCXQA6djeoatg9r854DZYmco5bpsCEpuN86zQzGNW",
  "key18": "2AdepTRSgFkG44oHk1P8epbRSaWf7k25n3sKD9s4eqTTaHLn3f2MQBDQVazstPQzdosLPmSdCew2o7A2x17Ah9th",
  "key19": "5RN8CBFXJJ3v6ftJeRcVZ7YvKoiC9rdjbUHGjfCe8cZ8tJfoqFgaKifXBQcnwTDUnrbSgv4ts3nM5LWgqUF8hx1h",
  "key20": "3R7mbwDjqrcLL3RqtDAgEEHjyjaari6MDXGokUkgjazYZ6mYZHJ7hCN6Mx9J1Ky9uEGoZGe2BXT1v6Xk9AZaaZb4",
  "key21": "32yT82Pj8vn3poEz4P7yJazjybgK9NjNKa8A3cVbhck8oKDUEvcep1RQeN7QMHa9C9rDKuwfDepsWSAA3RRqXRPt",
  "key22": "42Q3Cg4eeZ6zNzMqfvz7GeJ5PnkCDXuUoq3PvBAqEgcgYS7WJSH7jH24ajvy4ChEpV6xyU8odf9LFGBBfm7CV6i4",
  "key23": "dxkqnU15pysiSWtvzDJJ66CiURPg4NXLPZEh5zCkQwrAWQsnFKit1CiRAe2AS6VZj4VNnNBed7UEZmSxRHfdtDk",
  "key24": "2TmMbypf3QzLx7EPJ3V7jBksXGa425rLcAjn5FEdZ7SojABCpUNmSafp6ZGgxBehv7f5KptVwcosS4j2UwynpbZX",
  "key25": "3u8SU8hcNByMQn16KSfxFq5FvW9W54bhZWoW6Ez7SREqLWYE1cDaZwsqSXfzmwZC9CygLZ8NJwrXiKB5pr4sL1K8",
  "key26": "5tnzrB899boz2arjFU3WbfTUpc25HGH8M1iXAsG83NmwS694EfDtLFuag9JPVmsM7zsSZXb5TR2f67UpQWb5Xzb1",
  "key27": "3f4kDVFGnHh6Yyc6yzGY6r7ZkYX2qEign1pa1iW4oApTjSvB599ULYhABxCe8dZ13moKyaXQuWQahUBdyfemhLTv",
  "key28": "4u2hvM6StACXvCWFnpLV7SUuu75nzxriRXdLFhMxV8ojPjaxpedHNntWALVjyje3vbKBwwiLtdX2B68e5qRECL9j",
  "key29": "5Px7sbU2dmXmdLzzsq33dozKJBHzFXbmKFPL7kHp9JBGLRe6EZq2iHHCb41bj1wEwQSL6a1NWE3S22o5oDKQDdRZ",
  "key30": "6zp8kjT3bn2Vi8duedrcybkdF81mZw1Dj6hqpYgRuEx7tMSVueBs6j4rmVucuwS4PEoVeSeRm9HMHLvNaHGoYDX",
  "key31": "3drrNoV1tH68EXGUJVJBrFNr5voNtkdK2LdmJt8UmzhuBFR4X7fGUbsopNmba7rdDfZgsB9UxaPZp4kBNPdkeiTr",
  "key32": "Sr4DHpGafB4Nr9GrzW2CM96zjotKQXxQGta83rfK4VDt6VWHKATMppzVKyVUfcuquYVUmGU7ABGLiLApkaFAUoa",
  "key33": "5vz9uD5ybTHeHppdMG4emrXRiqgWbd6NASShw21BXu6XyA1DtnG8H6tnnMR19LH6coKUfXj2WtWcFkggqa7YA5Xn",
  "key34": "3Vu29QmUFjnHKqZ1mJ2cHy4RrPfXmuK2wDuU6Z294gPrsrtu5mtNTQjArz7a2THxcZpjGW9qSaumuAzxZ4AbSqKP",
  "key35": "3ST8R7XthT9cJ9WQz4J2QEzkhVFdfZfsL7SmfUkwMzRtAYjcjFc26TmSDArsTpLGpWVkXLyDWaCz6wZFakPsUfgB"
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
