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
    "zNqCMZ9hB4owXqSqfEzmWFuvDmVwsDY95D6YW7VN56nfiC7J4xkeG9JsRRxHQNKBnjazZJgySorfQWkWMjDyNDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4snJH5SjWrfvrLRDjLQeQvSggb11U4U6M88QMraZEjwMhtpkVxxX2p46nJucEds3ZzpRdavubeytCH9WexdMzEfd",
  "key1": "2gkWsz2y8thgvyGnxReYHRZ4Y2L1NM32Lkr3HNypjwNESeLRk7SgprDgg8vszn1eNekZmtSHs5i2NtCqwLpStQXH",
  "key2": "4FTAhztrHTyRzs56ZGsc3PZX5FPPncbjLcxWerErUxVhKyq96tqPqnfkaiZrr1Vi9Vc4cGNNSwq9hgswf5cRmJfj",
  "key3": "3zv6yxNdJMuW5ujG1nKDvsrB2sUXgSw1Ek5eKF7t3AM2MtBWnaCdJBvSUFcd1C3HBN12cmrECfHjGc4jKBc4hmzs",
  "key4": "3DzoN9PKaUCmSsj1DgBytsC43NMVLBXKpa33ctoBiaunZJCgLJPqkgtgxqk5LqmgssEKqvnjKdeq5nf63Dn45M5i",
  "key5": "3KgHhamQcygZKbnCjEasMznQbQ2w5fvNvrpmgswYrBsCjuawRh1xDkLf9AMTbF4aFxoQappAqprH6bksxepWJ2jT",
  "key6": "HpEEj59tER7GEBS2t4mafk4VGFktb7Er83zCkGyBCJeWjSLANHg8cTmFBQibJYpxr49d4sjEDB5dniAt7Ht9hk5",
  "key7": "5wJ4Fi3hK2bQKBF9wg9Z5q1FQz3GQnXepoJHgfM1pimYhoog897BtbAviPzGJvma3DwKrH9e5u1QiXsZbBMoGqG5",
  "key8": "DKypqky43f3qNbS8Zk6KbKihKtHePRbybA3QnRfpoRrAb1w2prH1rkNFSq1eKRtXicJntQtgtYsMG7HznyufDCb",
  "key9": "5GZAuBGFhKaFcT4Y2Ur92us3Mp12jhzESYVvZzqu2NH1Ac7i8NYjfEzDtb2fEVSoFxEjLbTMreLuLRJYDT5pxbnC",
  "key10": "5nYTe18F6StHBpUDnfr5Qgvs1cLcGSA9FmqsqyHFYrkBH7Yk9qsNYE3UwpzoyRi6d7omfZQ2dz9b8FgVtGadcsD8",
  "key11": "RxHuMizVtjk8vJFUGDtwafTFjMvN9r9EwFynx43edsxMXiex1qw8Uh1sNttA2Xt9iVccHbx4nkYuEm6rPEJsgs8",
  "key12": "3Y2EhKpi1CTFQBWMe3gUNSRPpv2dpY12SkahcS8AiwPBVc1DER7bSWCF1Sr1zQkf8mMh8g6DhytXPj9DuXimKAF9",
  "key13": "2vPTk65hiXhJUjRdhPj6jmzfLdg5yY7RZfuZdGV86tUvcMBgHrcc4RDzccG6kaccVejmcNbS5YY27GfLXiC2ct9g",
  "key14": "3RnPAqLBoTaqaniGxDnHCq2qtwcajp7JKkS3xi8TnDtaYKwwdViZdC88wLEctgMJ13TmgPyCPA3evWgMAeEBG9Rg",
  "key15": "3Ed9YdFNU2K5iEwZA1u1wPCMjmTFKa8JpsBRrBKFMzN5DvP8bxD7Vvcyy8u5LLLumcFBrwoNpbavVopSwhwSSL3w",
  "key16": "5XYvSJWv1FnHKnaf5ftQR9BxMXMUgzDb4XZCH7pH4TSgRD98Maxk2taYrfq1WWdPZg9bJdUus3aLZDwGxi9NpygZ",
  "key17": "5imLx4NLT5bQUuxvnPtqX2RaDQos6nTyWuv8jBrwFeXJF8gtmKij7CSSQWYN1E88nwAgcxhtDAtRZc4vLuoa1xNG",
  "key18": "56iyEVBwJ3r3bmKLNFsro948hNVwH1AeMFQmHiyZDnsNnjNTiSiqKhRL98MQ64iV8WDQeySjUS2QV4fVCZb2D5oZ",
  "key19": "2Ej6wvZtNnDbXKcz24TZdDA9WwLEc2N6Z3CJ3cUNYHsXiEWWomgP9zckLc6hm6cUVfMKTxtLKCH2tZFPK643sHu7",
  "key20": "cCCnFXRztQ3oPbsLifWukA8a63FxLjMWysz1AmCx5MFjkQw2aeDqQDAm589r4encJQgbVhyuxZgGfY5hprizB9a",
  "key21": "4A2pAgERtLFY1h7HpvR7F33LUX3qXchYy289j5YG3QXKTEJDs3EznhdbYHhHfZFcmZQui8LgK7hqrSxxDbeg1fdM",
  "key22": "APpYk1Mh927jJ5nEorhvUaRm2WmmTEtSvTjAAhoc2yr5KdA43482f3d1cCu9G1abW28Y9DDCw7Zuq2zzSgWf1wa",
  "key23": "41NhayG5B84RYV1JPThTHthEYyrUfEgJYbXgRN8mCYiiKwDfF1LeZr4gKQZyDZaPhM6UKsHdZHLMozDgMNBZEpbc",
  "key24": "4xL5dFhMgiqzCNRo6726JjgVDFamtWuzXgrtiaqmJ4doAi4JtCE8CJvB1hyAL9rmFx1bNppseS1pErGvikJXurd1",
  "key25": "66vMSynjr6Wo27JXPfTDGY79XDAPXoLCCci2Z4joGoPrvcFNJEGrZ6MA6Yed8e1QvgxVm9UHueNYeQVvKv9Jm28A",
  "key26": "5oTMewqnpmHkKipGrYS9RJknvnsN64fdfffzK6MeaWF66oLZw8DrffsxpcE4CtePopZgNqyn2QEB9tEafnkVt7oH",
  "key27": "4JkKyj5F8i2uRQQDDAKPZ3QH8eEYsGLhQzEE8mYumR3BLuyzvJM77rpSXmi3mXCdXtSvczhUU64fNCZKxKxn9kJu",
  "key28": "64Hco1SXeddQVvaun4nnSDXGPC6LHWrrx9mCrSjnoB1TWBCRjhSdwcUYFxBcnqS3EDjFU4ibHkkanakMim757nSo",
  "key29": "zoZmahFCggoJY7HpcYgp19wnTQkxpq12GfHLwP2ducdFUx33yobGvdszXrQsqZFjhhz8JznvMokqfbe57Q8ScpR",
  "key30": "2PjZgDmhUAdxB9G5sKr7oGZuXKVVAbrFCTu1ZrThgdFcDZhcc9aZKeRbLmKH1FRAGFyG4b8WufQEitLz4CLGhmEz",
  "key31": "5qig85zTifSVvGzyZ8SoH4X1vHfD2NFPukopFEu9BLXkJJaGZgqUAvgATLokDdSgC1KdoA33kZ9bB8kEMWMyRnf9",
  "key32": "VQQAsue8A9EJEh4VUBicSvUCvhxYY52iqyzYMUc52LMYx1i1FfkwryqmFer9bw4jBTShBEjwkKoumYs5yphhJcP",
  "key33": "4MyWggdgvgcP4w3mRmP5hyLaJLX6habG9KHDzy7W3gVaMiCHgCtt1NqiZUFTc6Dcfx4gcvidZU7cbY8pscAANcXY",
  "key34": "5KsJDy5zt4yiw2mj1DhR4XKzC1kvM4aXrFuDDd5JQd1gbTFc9KU8mGhpsuwJ1mFUk3yXcymT38NpyPfyg78HbfqP"
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
