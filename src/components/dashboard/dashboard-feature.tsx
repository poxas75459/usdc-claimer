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
    "4iJRmEBib97MDy2t8sXf51txe9tEwP155dRWVpiT1WoxJpk8Xa7M87wF1QuF6NsJwwHA8esc2DA4oLcg5BKu9ttx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVh2CE5E81Y8tN1n94G1B8TaAdWhjVFC2BtXYtYcjHWneV99FQ8tdyTtJMTrGTsEwzsqrgscizKcVBTCdAay5cR",
  "key1": "4HytMqiZzpKxyk4jd3G1qmPCtkuQnFXTwU7TZkU8ZQMG8Z5P2Lg87DFDSBewuioBqZ3rUK54k1LNJvovT3Zi2XtN",
  "key2": "4E3wjNXw8rTcGMAKWYXUmL2dRQrzqvdL9efStNnL1k733y29DWMCppzLp817cwM9YaQgiwfSVKN224scKdHoXi65",
  "key3": "23aL7aB7fGK6zF2eHTiSFAdmKu37ay4zZ3wyXtaarQnfcg16cZy2dKqb7izgrL1CY6QFTfkcsaes4YeWDWoDoisW",
  "key4": "4XGsK7BYPfXeYzCFf8f7XGGHJSsB5foybbCF2GCU1CCvVU5JACGUyYzqofbp4jC7m2GzTirF8jGf4DfJfTj6cEYo",
  "key5": "66RA1Gk3nza6bUR18i4yLywHC4xpCEd8a9BT7tgJxNL6akkFamUgyPPcXwCznm1JimjqTd2L8NLQuXe1VJRTL9Xo",
  "key6": "3bjYmPxqpxLY7U8or3KBTrDoBy1pKKkS9MKw7CLHZXhuFh2ZD1c9zasmyJMzKBU2Fivm78DQguwXMGPFgJHPAWvo",
  "key7": "2MUdykZiQxpsDbNoSLGjWn2LnmQJHLr9qqxiJRocZ2fHtApCDoy6F3iTJxouQFSVK6Hbun1oezFJKR4qahGAjhFJ",
  "key8": "5iW6ULeynEuLsAT4rNtFnVcRX2Ah8Bv7DRVYmqWQ9A2ZfS3owWAAKNoji4wNnQM3BxaEm5eZpDhG7NhXxNrYra2G",
  "key9": "4YvXcRxZ52EwYXFNF9YhLS5zMfBmEEer6aDbwFmMjpWuh5wYE9XvwXoVBWMcTZmSt1hWyVe5cLxQNfWTiqvyfnGr",
  "key10": "4TMnwpN9RDtCdAvSCEoUm5rFb1tCyquwP1KsZRiBTYunCqaoVma9xkM5mRFHxraAu2ugKBfao2jAxLYuenGHUnXt",
  "key11": "2SHwxssuPb6zsupRB796jxoz8tasa9bMd6nLQuE8uScNL81WtVUJR2U2MqjGmgSsic36fFwH6QNEXwtP6wBxVD5m",
  "key12": "38Enn5K6NFuJsZnQpzxLNKnRCGvuKiBY6xV2HcCTaQ6Yv1MPJ8Qi59eR2m3AiWo7nKgKMgAqjkJyYdcnVaG7tHAd",
  "key13": "2oA2MqyQpVAFkJZDM539JYE52m7j3XBUFaM1666cgDyEArTdYEpDbgvVfoodssNBVcWDXGdU3vMuCoTZR85dKRP3",
  "key14": "5Ddu68ATV5SxSzGz6zZ1CgbjSZpDmwDraaTnGZDeiwC6281DsWhcYWCyjNAccPjSzqmzJMMur3LCUFNTDZD5n9xL",
  "key15": "2eBV5J6dGaUHkT8Y4akq4iwLLtdEhHXoCazSKKv6xxGypqGFu3NeerbH7LejLENgeqiMk1btoJJPdjKjGLmz6XGU",
  "key16": "2skTgi8bbomfCYWwve4XnqJxKzxkG3aooX1QxZEgCHGAeBgqEs6ezviYjuxfkBfCzrPELiPFKd4SQAFPMjfKucGa",
  "key17": "5u4av5TctS2h5vVS3ZpcUNbZEXabesc53J3E5mfkdxiWzwgcostWhoFyJDarcKRucBwmsQrqjAaLSRq4qMDT2iLP",
  "key18": "4rPf8aTtS2Cx2EVEQh31KKvMaowZRtAvRoDkoscgsVpXawpdrboaiiramLLWwq3ryBvEgTYQknPoUAosGSFJDaaf",
  "key19": "22v5GFWf54jQVebNCjjB6vhkVadsMxRBiTzRk2WaUTSQPYT2aQj3BhfHaeDRfa6Q1eyMVuVrHwZwBTJQyjbi8dHJ",
  "key20": "5Wobfi3Jysu6JBD6DsS2Ep9AnRTucRNhPz9eEtJbnyX6MPitZASxokh1BPpdp7ptMCXGvdScB79LQfXqjbSrrqP9",
  "key21": "2aP1NMUWcosTF2mc36X4e21nPRC2A1JGzmpFGRJf844v1DvNfaGjYyHPUPNzg41bsBDowY2upgDLBvYdTQPfr4PG",
  "key22": "4vQZMiGNforRz3aNtYNbgqDQQdjawuus88AmDkrWAdncLungVNhzrPiCtHDr31g2varRtkooMjzndv2q4NhXgNdk",
  "key23": "2umhJsUMZkJ6iCVbifXxeTBXCzZuw2xkcHKEGjwUtmm4dEp39yXLtqnGhMCc2mkZM4zrqvGi6MybTmmrfCyeikbZ",
  "key24": "5gx4yQukYfon1U8TgKXqCp5n7d4k28EQnDVX12Wbwwzx7jcJ6nmveMT32aVrW4xHeJcXYTdYGag8aXeFU5bxJTHf",
  "key25": "3TymzmUVEexbgvxvZhu2xwXEky1exv32hoWjDDN3R66dBW23B1bkfhYYdCsiFbUaWp7URfKMnsxTNn69kmw41XVd",
  "key26": "3js5n2RrYRgmaFErEpHMab8EECTTE5Fwxf8ZDGvSqyo5L6isv3mcFZ9KisJsk6TeyDwRbsJov2FfUwPqLbF6wniC",
  "key27": "MivRHAHMWyER1mF1LmrVv9a9Wb3iKfo3KLA1ufZQYexv9n1JiUzyiqsfbj3L4tQ8TbtEWM1HFHJjL3We7uzuJNP",
  "key28": "SsuUHcqVbCbFUkzj5GJaXm2CZHqJb5zHPYFWZyU7kvcsmdy1TeBX9JdrYBSaA2DXx4yXEoWBVYQn6NjVNoN4Miw",
  "key29": "5p5ozKwcK26qvrH32h7wvPqAsnVYdhq18v857tkqtbT1AR619xfyDK9b9esh1gSwsMjNPZ7M8hkSixikPCDETbkS",
  "key30": "5qVyGgjbQ6dJcXF2D5gUrEAcAyy48AcpLfhyST8HqpYdtf5kX6uumJEiV1uLzF8RPbTtvPZ3WAMEQVX22Mh175FS",
  "key31": "3imZSHXq37x7SUkVEmtDFoByBCNGs1CXeokNLvXJkwEXA33MaMmueJQq48g4v7xFtJ6t6XHRbg16miPpDZh3iD56",
  "key32": "4w58FLoToDqXwNYANZYAattis1FGjMcpaKBCJkPadbWEaPzsDw2gCJJWvpDR4yuaQHptGFVVQ3SiSepa9A7EDj33",
  "key33": "49FLKAbyHkuiFFXmbd4rSDEwTDzEK5w5oTkDitirRtLo19hGKDVX2e4Tao2Fwqd9fZcDyNWFgC6ggSnmx4gxrGcg",
  "key34": "4uAGMNaqXZkP4o3xX372ZuM55dkYVSasdb1n5i5efGbmwhcpCGgNrqembm6r75XkXNSy47BWDbQWxbuxNt11ax8u",
  "key35": "3jJZhdRX84mfnDRNVctk2eCeKGnEFibot6VQT4C62NHLWKBfkSzw7cvQPpoiubgiBahQuiJ81kb4Jme1emV3yBeo",
  "key36": "4FVHBjWq6DQfvZgpED2b1H1NfX4MmA75vRSM7FbJYY6UJ1sn2omASGNehsABakTUtHiuojAS1phznuvmWbAiGJ6h",
  "key37": "2XNcnCxBw4noGBt8yoFmFZCMahLJnQ3WCyVjZezbc47589GbqNYyxzyEmHV1gFFQSYdjjgSTJNa5bCMoCm3CcZzM",
  "key38": "3wven3dJwHB8ZfoiNaJLWNYkPHC2Znr3qE14em5xgEdqBjrRkZz5CiZwXpoUbX8vMFqexpciHsm8XkKjV5rLd5oL",
  "key39": "3f9nbFrf5xqD4S8J2vtfLt5nNoeh1FzppNSHoH26SxMYdDWhhDTdNcmcS14x9diJ5wxx4mHBG27WPwcipD6poo98",
  "key40": "2jHhPSvm5iCuDRfzWcujBXf4x9mG8gvkaG8icA9fByZoFJvkRKBuYknB6g2iZ1cpE5pQHeXWVQAAGdGtYut1n17n",
  "key41": "41dha96nC5vx46XghjrqRCYWWeyfeCZRuhJj3Q3iaLE6eSnXR7mkjTKmFpLsNAh39YSmR2hsXdWhLYBfYEx6CBwW",
  "key42": "5d8BTqcMoQGZB3mzDy2h3wKf5Xa6HUuLZCSCEU4wwUvZvMb52HWnnVSbes1CQYuExr7WBLHiwUtWHMYW2o3pxZ21",
  "key43": "5X48q9nfty854QrxJQ6wjLZKtDaWuQNZc2kTxNfLzkq5cPHSiXnhA4HuW1oYe1ShW8kv5XtptFxPX11LWe5f9xCY",
  "key44": "5L6oCgHWKRVYzpNX3sNFjYy2GtKbS81nhENsN4A7sPHd1JxP3dXZGGgMWH6kNuqMkn6pXk38XnkTgCuHTKfiSPRd"
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
