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
    "4qY3SUWGaXAZF2kh25oWBWUivNKZBLXWTRVzc1eUvmVcAgn9oRSUbYTipjQvHaqkGm9wbgNStFo1idpy5MZkwaNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4458KKCn7uGsqXQALWp5X4HsbkU2rJgA21iTWeAumKmjshSus874TbS4DFbwNi1xDzmXQbSYYAnKegyFSbsZPPAs",
  "key1": "3U4i3RAwVxiSjTAP2gG8oZTsXpTi6oEhCX9n7QUhuv8S3tj5WjEdAoKD7KPbfr9pZbk9ehYdSHN1SbJ63pG8rs5M",
  "key2": "4dUtt7oWuTm3yigmoPpP4TULEARgEwWAE2MK842s5DzxTdsRQyVdaKX4xn22ADCgvSCyEeSeHhxbeSs7L7Yo9es8",
  "key3": "29AJQ3ut28VKrTbmLtTfA8RbxyArrSk2mYKvAMxkhoyhfYA2R8DPxVo3HSqaKKuFLRnfGCwvs6Q4hsui7hysoeyV",
  "key4": "2e1XpwYeMM1A8e6KrH4iBn6muHr8zVVRnJcJdUUFw7fXm5yWMF6TB69YiXhxC7ExE1udR6sqgcRPxsjftkEx8uyY",
  "key5": "3sL1LZuRDEwxKXpiqA2y1BqRteVqqvCGaYgzcnyuh63yeZSNMCGgvHECpQc5ZFjdKHphj9pgssRvj38Mya2Vf1ZE",
  "key6": "64MnvjSZXBkmib2mVFse5poGSikdQKcMVKG3TQ51WAzb8ACCaxkuiB7QZZeMF5hK4wMbfEnQ5AgXoLNFhJDLhJC4",
  "key7": "eLPTHoqndVZziBugFn4X3dRwBdoUC8omZDwggbuDr5bk1xLtDQe6vinT5yvzQ3DtBxrmtrEGePu91k3jv7c8TKe",
  "key8": "55S5YLTomwEXDSESGjQyUkUHXxnVGbTugcv2vPJgGZykCEAkzGhoMSnsM6yHHLmYVJZaChDfUtusMEFzXUFLhsnf",
  "key9": "5FfbQxiHBkJ9PJw8piCcDCyCAKTLEcMxrhwTNdjYPM2kaa2nmMkptmKqHzSXxP8KxTk8MmeNcXLcuFPkLKRpWoy",
  "key10": "2pswchdAjra9WasR8F1DdbofYaKqBuSU9RkYZssFxmALePsrUHnZwhMecH6BQTCKUhanW43pwW5qranAc7dmARnE",
  "key11": "4jzhM2jS7ut99GsA2u5mmprw6WeHfdNibEjFH5TmrK3eXoHmCUqZ83BZUsWUqzBpWmmGQ8sK9MhUmeaJBjC7EUN6",
  "key12": "36Y77ZHQJWNCZhA4NsEnpuwHhKCPBxpd5fVR7THz3cwqvzRGun4ot39hDjEGKWkuyHfsBdCsmqYhCJfiVgWVDGxX",
  "key13": "tH8Ydt9dgot3mGZXTT3CmZthjz57XyPQYP3EL7sDXFwWsMrA5L2huyD8ohK6a5mtMnJzhkQGPrbpoyK1gFPSFcN",
  "key14": "vtUtStvWBMUxsJ536D8J2mzWpWo3dhTCK1UNVtV2ZgzUvzefmXg5ZY6T6VTx1g6JnzqjJjLfKAn91kpm1bNpuDu",
  "key15": "5ZToDTVWWWNPkQT7uQbUUufPST5foszppt1zDd5skdYzxFRPLLZ66UmH8ELVMDu4yVb3n4DW6kjTDT9zGBjF6nCf",
  "key16": "2T8F9X73LuWwCsjukcM61dK9DUBtxRincKnftGANiHy2q8h5anPtCXvFL95jGbXoiDMdf944XgDPkYsaY3MfS6Ph",
  "key17": "dPWXUhTgqdDwwK2TH65NmR9YD55wXcrYK5qTPgGAVbfx6NqPUmDUy9RDoJAjF8F32pUR2tSh4WC1KJdFkoWBzhp",
  "key18": "4Je1gu2Mhv7jvvMfVZfDnST14YrrWDWPosPJdMWNzfkKP1nY5BCzXfMjYRko6aosfG2SvRh8nnAykJzosbtUCsGR",
  "key19": "bt8pE7NXVEULix1ZLitBRzaqLcW6uHZLGekLnRXmH26C34KsGzj7C8qUPrrLesAF3rq3DWWJPXw5mJYkBPD74ve",
  "key20": "3fJzgSxSQMD1K3idKWhfL3UHw3saVdXdeZC6TousQXnjNfUMocEKXxZhow6EU7xN3t3en3n3LtCFP7bghsqKhsND",
  "key21": "5jA3uXQfcj39NgpdT1LEr5jCCSaBXLCisQFmp1PDq8ouuf9GBhE7gPDTDCGxjdHLiGAt7XQDLkVPCxNEt3EY85Xz",
  "key22": "2SUaGKf89BdTVX52BrxAjqXch3pC3ywPkYFrZT8TMBKXBCtqkAPyZXZpv2jCR4h9g7YpKqAFXgtGLtFjRvoxKjoh",
  "key23": "2TmSGmmvg1ZAocyWaiVZ7rfxPFvhNwGeXk79cngGYZwctXzRybgpReziekKEAWPc2MP9ARU98nhYXRRtziypwXca",
  "key24": "4PXnUDZ55nQhGoHQ7N5SY92qCqhJ6edBFz5chFXzMzxAQKKqjbksFqsVxsQ5ajBKmXhxNt2fHLXz5G9RRii2YfEK",
  "key25": "3cbWcDTgmUis7GZTH7ejX6gcFvwjHc5eYXZ1E2JdZ9BnGEaSkYQyMLdJ8yZ2RLziJtiA9g8A5FjaVmu33pT84zZ3",
  "key26": "UrN5UF3DzakjH6eGJReRK39TFK6QoFVJLWcDvP7Dgp8HdySBEj6dWbczBQVAwsAL12bYcTiRJV8ywwyZpHbigPw",
  "key27": "HnQJ9qK5NWtaLtbBd3xjZanCwPh9rZ8DPAP6LyPTSbRHK9BQ1s9aghPUj24vLh5YdeBacACUzNeVWt4iDhjMFsm"
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
