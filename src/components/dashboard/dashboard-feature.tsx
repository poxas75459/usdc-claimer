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
    "DdwDwK3dPJEozY19jrgMHDNPd8hV3m8jL5tc56ax7V7GG2bxx5vx6kNTtc38vV9fmLgZ5QkHDdTCSNjtCrZ86bV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8LgMcMdsjDvfgUntSCZcPYSLZUTRQnY7FgM9u3bdagQtYGFbKJgYPxhpN3hrZboZfvYFkeumPTns8ycmFkVyj1P",
  "key1": "2rwypXKu8HPe6L7psmS1Gp8SWpvs9JRzEHBc1KzHAxM8SdRNiNNVCrYd5K8xeNgFQ8Uz8zfTL7BQYQuYPF4ZM6FA",
  "key2": "4gEWuqWLExABRCrNpwT6EqNpnrMXqzJtVYweCkmUVgZ6LSGTXfNGZHea74S4AWPqkkjXnkXpNEmZpRavMrmXQSeJ",
  "key3": "5sXsc4z5XZKNzWRZxzrYVgBTmrxHsqzw4ZE4tXrMQqScvL4tHA8Sw2So1cpT1uk5YPswzoUMKxhDX7RpHKMXm3E9",
  "key4": "5fnHqnYjYjdQfHfjbLA7VFtWJorFrCj9pctRBNHe8ywwBYuNMg57tfzvK7MdmE1fE4MPXruPQCQoJLEcew8bi1cP",
  "key5": "2qtprNH72eafNJFKwn1AXrLDwwZH9TA2ycngJS8s9pCspcB3s2UogCEm7oB5J9mpzqSNcLFNUdJivZeXiFPjrPmd",
  "key6": "3Xfmdg7WVE7aBUa1ucf5ec4XcuA1hGF4bpVFeSdhDfcoXb341TP4eXXsqeHMgUQmXFY2tWcxt4tPFxu1prmJ9KeB",
  "key7": "2UsYexgCoqTKvJtAh5yV3sYUVkpvx9h9agMSitGoBZgH5tEf4CgSngVJWMjAu6B4iMGTNvyMLgZQrs7AEprdPVq2",
  "key8": "3Fb1QcbkP9jPd7fDekgUpMu43xL3BhGgkp16ihDpCBb1qgRLf3QaPFRRcLddcsYzQ6CfqZaW3xswPDJSE6Lgmfse",
  "key9": "3WFyCuZNdd5vtKsULdnZHU3MKLiL6b8NNdohhw5cMk3mAk56dFYGBFaYPkyFgiLFQ18WSvSNV3oxzFgVmmbgDMTs",
  "key10": "4AoBEBGxh8tCjy8BBmGXXyj6XLtSGw5Db55q16QsXhHmwP29NCR3vrbDkC6FGghoB72rEzCS6j158jUnY638H4Ym",
  "key11": "nXCBnEmsgeDEDoYygAtd2U1UBjz8CtaePxtX86W4dJJrAM3kxSDFfLtLBALFLFYhNH6D8gZwf7rBxsvHGhnypp5",
  "key12": "2MSiz5obAZXDj5kqjvD951pjQ3CigH5xLY9p5YVawvdd5QLi26Kigbzo9xFtTjMd4zxrgcMCsX88HJ4Dfu88VAjw",
  "key13": "F3q7zvm8opuZovYewNtSV1ND6RAXypEL9goU6hpGduiw8yCPF5X31NKXWywde3zgRuFxeFoCZNPWnPuQouvvk6x",
  "key14": "44NJaakX5ttruFoRxe4mb8zssQMx4G48di4fCLgjE4Wff53t4ioZvHAvu2kWMrM67WtWc4MBTSQMpFL7B5hdBfz3",
  "key15": "665pbjCtkBG5UK11mKgQz9b9Hbocbu7iqbPScU4GHiK2JUuc78XvB4sFhWjusYkHDQpPWhnTmQYMH2p8f3Wb4gKk",
  "key16": "5FJWcBGoLLTAsBwixtsxMvcfvc93tsFaGcK5QodX4EseH97Yyary8mPTisgYnijdGB6GSXTP6LAKtyL6ZzRzPCd6",
  "key17": "4RWCFcbBGSktQGuTaERKShE1xSk4M3E3P8DkXmyTpiDCiiasg9v2R69qGEEDmD8sbk2aRGqQFoTx5XcmYjPFm8Hb",
  "key18": "2fKjAEPjz3kgiSG2vTe3zqbqADwqLAz5DMDn6546bqjUPPtN35zf2ME7WmvWPbATYrDBNTBVCbmUtG9YXuKxSJt4",
  "key19": "4s9qo29TnLqoRZbvkrD5kh51RB43Z6RJ6TmJcTr6fSZ8ybCety8jK1BBmqyLuJZHbMJYxXWEFLpNPEhrkfmg4FB",
  "key20": "DvshTF4V4WV3u5VBzo8ooUq3fVE4amVwrmRyVik6gJtBGezdCawVnAP94Uee3XFcfWK2C9DjC5kDVonH2PFvKKV",
  "key21": "3EQRdD9p2hwMe6rQNkQdvWC1CPXhKvXpXP9Vd7URwPD6bq7KkGGVk96VFXo7W9Dw1erUcrkLErmR41YQ5tdAgPhu",
  "key22": "3M84bVPjjeeJHP13UgBYiheGFt4bTMFmHFauRJ3xnzsWKxQSF7dQagyn2DPdVCo4JW9LA64uaDZsqjs65KHYNbGP",
  "key23": "kGeFvCyZ2DxQB5XvM45x4pEYTwVC9ptVhbBUQPWdWibck4oZHH3ketJR89HUKhHRxNrFnU3Xx3sUjucXnpFhvBi",
  "key24": "ovDp3hc3vWBUkEQfaeWQHvQK3eTSkeXD8e9Wfd3sZkDJvV9Gz5RnCZzKeYUWeNkZrfJ6dMyWphdCAHeB6jiwAZ2",
  "key25": "GRdPZ5f3FEGew94FcofLby1FvhqdTn4mRKC2MEW8fxEZQ36yogwp5VjFmj66zJuBCNsXmZiedqFFaePH4jxuqEM",
  "key26": "5ZtcZHvzVPVA3VU4iTYPGZUtSQpdKKKjEBqKmVntyVDnvs5TcZVpf2cCUSBTZHSRURmfd7BQo5ZLmF1yvaTzofUc",
  "key27": "5sSVfhPq74tM4JsQX6j1mv2zcNWHx73zpMqjzuhChguDCDWvMU528jrLLepPwnaGVwAjzuhcSNtFrgXFkhLbQvJP",
  "key28": "4w6CqXVbHFKPWYUmpD5QMwhPU9emQ34TzMjvjriNjC9EWRtsLNdE2nQbPtY9Q7WhKqd3sDA32dVBXNk8Zi7jyToi"
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
