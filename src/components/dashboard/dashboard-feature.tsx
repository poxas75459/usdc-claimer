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
    "LoTsWMyn46isQ8ihiuLiWPMdH6yUapA7mMzcNaa8j7RvcoYLEHzLZBkYRhbRQT87oastQ7LW3u6VRBH64E7iQND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HggJLJLXJCsb4Wp4ayKiPSWx7Tbi9TEixfBuxmaaVBcXHj5zseMtXA1HVsCaeVcUqHb7z5dDNpRwyfY4PwLw79y",
  "key1": "3rbomzu6pUk28HaANuHniK3VV7chJvCRyKi9i5HQNH2TjVJWRosquyYmyV5KP9mpLTT7TADsYeXu1KURgjdWAHxz",
  "key2": "5UkX1ujVqETPZECUrMStoPP6voxZG9Rf36LoiusEFrMXcE2b7UporN7SHZgBKuxy5t9oytWRkxardhCHApArHTe",
  "key3": "23x85hZuYfFnECRgAZ4VfYHt78NhEGeAQ51KUWxPMCDzcgu3QS6X1nHqKLRmM7HPzro2ANbjjs9z4SwhXGaM7zXA",
  "key4": "mg4gY5uPP9irmn2wnVrArQHxtzAcEi4RbnYzxqXxxFSeC7LiQ3FRnT8ZLLynNzYdRfcuNkNFy77d2Gk87VfTdXW",
  "key5": "3ATkeJfvY9xgZoDxR9HD7Msqy4MDxKNSuWhDRkc98UqeE12a491PEqTqWsThNqWdntA6gWM6gZDYAd78CYYoKUTT",
  "key6": "4fj4FqSfTSMvXaWGR5Mfhc2ApJT1ucsvn6naCQrayFddpM6vBeMQNwH8NcK4bNHkJXPAunAsQeWREC2DcmW7mdA6",
  "key7": "58XyNbB9chMEfYeummvAo1arj8TGMD5e8maL37eA2iPRdhxooMBB4i8kCtJj9zboDkkYg468RZVZ9GS7awSBWnCS",
  "key8": "Zxg2AFcEoBHuBtP6BitotsuuQBuKTrmFR2XXCgj1cScVvMG4gTVQdwphcv7cnXWwwYWx9y9eEYR7g7k4gLMygxi",
  "key9": "48yj7vtmXTPgxiqJ7XP2BguQx6cZNfbwY5tCHnGcDfm7KrQKtprv6otG38Je21rXWQLtWyjTKj6xXQuuGsLkDLJZ",
  "key10": "2PPtfi2Qq94pBnYaETygTa8anhBNVEdXYY1geNijbpNJc8jr1ms7juHnAeExDVLfP6yzVoHbhRwyFuz4vxvrUowE",
  "key11": "3edMK8vb5BQhLDutTFEWc1BfpCa6F1KWiReEz6UkZVQ7LdckBFUdB1mpTfBcRcJzV1FjAShoYz9r1J25s545JoLh",
  "key12": "5zuTnKCJu7Nq3zqZTLuWZ7Vj2tZdDbcXNENq4EaKvFcJEczyU4JmeDPsP1qYgxa7fJR62rc1SmxWUEQ5Yi6mFisF",
  "key13": "UXEDHXB6Sit9bq7JdoJG9urqYZLrhHkCVakN3QG3tgLhBsk6JGvdfEECW1yuRZrdsk2grDTfte521fnB5hferaF",
  "key14": "4f14TLXT4YChMhySwChvbKGeqgjqziUkj7oDGh7Dztfuqf64t8ReXgheTkRzN3wS5bfsiyk7q1qo5iQXYPuUezCG",
  "key15": "5k8BsPEmirBUVy5vW28xqWzi2uvV64p17SJw7sPPBvz2xMGnPTAaJ4YcJMwJSqE7aPjuakRWMGuWRBjVfwfpUZa7",
  "key16": "5RzfcRJvBHYV7nmzZ1BH2D6FPqUZCheP7Q5osXNpHMHM12Ut4MykMzBwqt5sZLTQUd7oQ3JWYU7N9fABodPzwVTh",
  "key17": "36LF5c98j6xQ92zU7mpJs4DT4jUCKYALru3wRxPscx3ohJKmBF4odNMaZK7a1YzmS8oSnPw7Cz3Q9eDuJ29cbe1M",
  "key18": "jVpM2DUuNBEysxvahtMTEPFa3ovxAf6USTvdSq1UkTkQnn8vpootUUrY7ieSGJD2Tn3dZcxmCkUtbLWQ793JLda",
  "key19": "2mFFE8oWDgBd4DGu9JjfN9Svm6BEzQVfJmvZyre1HrE7WpvZBhpoHvZda9iRWVkCpfo8KPxScJi2agTqYuvATLui",
  "key20": "4s3GpSdCcV3GfuvBxyZxuSq3VNEdxFDzFE89buS19ViZHJaMagX6VjD5dnACkhceU5tRuBL8SgGWvA7Ry3q1FW6",
  "key21": "5tGxGxWiqGqXnWjXU92PEQfBe1HvE71UdoNbM1SsfYrz74k7KBorMFwXULzSaFnFC2eohk2Bi6nT7ui2NQ9GQzg9",
  "key22": "bbKFosbiLsCzYck9C2Ba4G3wK7z9sCWfjUd3xenb7vHvZhkwRNeGPx7usMtyH5zNEvD512oBCyRWGcVXzL9whtn",
  "key23": "3BiePR6rmRQFZY62wXBdkKZAdCGAYWgNosofEmf8kwB5Dhr32YHWu6ef1u6EJ8PFnMqrT4zkKonzY8PhVJ7CTeNF",
  "key24": "2iDngV4Gj9snyuBejgd4hyKHEMG4bBLbySwXFHj6Eb6CY1hA1JBhkWCLeywPmzRncNLfCRmtdq1TuupZNdRjfWgS",
  "key25": "PpXyuZnLSpKwpvDzDbMg6PCJ4nXYsGcd5GK9RZ29sSMJ9ikvNQYxdXpT1PxRoSfW5Feym8RRBc3wbSPU395QPZp",
  "key26": "NFQtqL8WoF9Wa4DJfoCLy89RvCdbWjp5zgwjnEVErPhYW38yLXVaa2u5HgFHXnNfEQdVByEKtaqZcQT4ZixRYJb",
  "key27": "5qrxp77CLPYpiYBLSH1sJ1wJGujXTbnEyT7E81fgHMYnc9h52jAALqmcmjLEtsD6vJhWrVr9QJK4apPRSTh9FM3t",
  "key28": "5cKmZbzs3pxmHCXfoyDgjVevno7ZPgbNDN41W2TCsVgCGBi6Lf7XdNHMTPhXKhpxrq2v6PHkhJ4s2ypP9FSATx7i",
  "key29": "22medAuRc3aL9B82Xq7RJsbrM8n7G6P7yShKpKApsVLw1Dvxw1NpB1rwdEdwTGAAXdqEHFD73corcnyDw2dxXGYp",
  "key30": "3Jt6cxFvcuvXadL5j7PKfortR9WbAme5UQarzXRF1BzafQhzjzPKGt1mdjH9hoaQRtQ7euGSW58JFiY1enBxxqAs",
  "key31": "34xXqqGhCpGgrB8MBePBPraaRRxwv7dJoFFNmK533KWQe7KCicfA8AGwdCFEP398TJPtzLrif1HL2BtzUJLrNnHU",
  "key32": "47MaYzNr1fprJB5cV94JBTZ5XGiDETkaavacA7nu4yM8BGo3Mh6ZbLLe7dAMqwESZhMYfkkV8UL5BGxSgknX6MCN",
  "key33": "3XBnQaXMFEPihHd5cwt2Yo316k54rYzfrgGSiDnJ7Q59rmH6MmVsGuSiBWLKppsZJXc7EKsdR5Wif7thUKNXgGWd",
  "key34": "3FJD1AHXBbfuhboraq8xw6Jz6mnv6zYZBmtTkRLBM2fdXMH4WVHfBwA2wy5nkJ6q5RsFg72VBsp7N61NTH2FGAgc",
  "key35": "4eYqTGvSUjx22LAEj5NZ1rRpndfA4LnPCovhXx3eAuMaf4poqYMHrVxRDJ9eg93j73oFoWFkQ4Wuk1eRKeW1Ldvk",
  "key36": "PS3B4FJR6NVaVr1mSZFR4GMeC3GwRoRX5fsXBnmtppZm2orwdyNmL9LEdLFy1PTfWG1rMTbeciw8CLcFKMuYy3i"
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
