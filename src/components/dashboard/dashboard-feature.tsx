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
    "3jjFd8AktehzwnpTDNr2G5f5F8Apn5nJaGm6dYDPH4R8t5FsyDUCRLj2QBtSMBmQ46swzEqhE3b9JngxYDdjSzpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GgrpgUw21ao1pH2bQrGfcqeNeqQJhqjUqsuAKLwBb2ckpUFpo5UN9ib8HPzVWXdquefNptis3NixsytQuC137CW",
  "key1": "y8t6RGtgBsyVkwZYhsMoY5qRPtBRkAppXEsNzmaowNoCh97fQ5XGGnEnQtUYFdmk3WoiaQaUxf4G6kAwSPv8QZ4",
  "key2": "2S14ui5BQJT8cWqu2uUhWGFrC7LKnPsAjsruwh4JHrdBxLDTs9tkXqPw4RhWCvt28JsrTpVqwg17sfhkfLS9kGjc",
  "key3": "3AEJWr5zbJfFJ6GkWfehn9oRDetxLD7Rq6AdSHTjoNeVPPQQ37JT3Uf2WrMfqkqFdMkV4e8TchusLek3bkWbB3e",
  "key4": "2tiqkXXCieSnxGY4YJpD5Ci8jUiC3LRkZCP4L8PJh6q4gZn1Ah9RQDZY3bmGSNPZs8uB24cbadvHMhBN6V1kg1S5",
  "key5": "2TG3dW4pVKtJgNLiKrm3bVJcYbjijnqJCbDBE3oAcYgqqXRBzqk8SCRjukXsbGnVH594iW9vM6rr4CfAfyoQaduv",
  "key6": "5hZLAgC91RjdN6NUt6PPTB2FnSSMD9rXC6tHcuM84wwLygirwm3gujUcofsB2coJ9f5yfugQAeXnC38psLk7J9h8",
  "key7": "2DVyfc1VgyZwytacZeDVvFqZisJ4ooBsqxkqrnHKCo2ZvqfG3P9kSM2GE4ymkNKvA2UzyCpZTU7fWEosqbdzLXqu",
  "key8": "X5gwBALRWGsYbxfEo71sE5yxHUWxj4xL6wYQ8P1ZZHdh6GfwXP6GXhtY2gssdTGWQeLsMfKMZHpCQb5WawaaFcj",
  "key9": "2muDMnKGc442h6msEXgkPEg31pV7xE81KtyQEo35TQ6ojCZLjhVRGN5HBj18uJgEmzhKgCDYUJw5fqx22sJsU2Q",
  "key10": "wGLoqpVEpTsCxTDpjsJbwZ8UsF5G3b8wDvF6x5Vb6FV9Fjuj5BS6KMJyJu2NSwaab9GGQwKMNkGAx36xeHywSAc",
  "key11": "5menoUG7bWzeGWqK2Q8ynb7DXpcqsf8gKjKnbjxfJ189Rbum4YeLqNNhoRQ9tcwqedcxPQ4bVu65bBHuNYwrEojV",
  "key12": "4z9ALUsFRq7CsH9o4jEtfZM8bBPmBJhxvEwSCAH7RC7bYYY1c3gpW243aCGRBGB9fd9aB7HgLctrRBF4uZMEhs9o",
  "key13": "37Vw9aXqn9GrGofzKJuxB8JBC7StG4gb89T8Jt47nzkPX98WvpmHR7R8SDi8FYALVug3QsEbzkvxpWn6StDhop6X",
  "key14": "4pvkQbm81CHQCjaJmuWr3qceBZaRK38KF3QhWQQxYkCcNJZGN7KQePcS2gi7jBgqsn9FR4STLU5kHCpY49h97tsw",
  "key15": "5QurmKFKmtusmsWxPXHtN1bSgyQKxzMTWPLyy17rXNZMF9UdipLDGAs2Dz1GaGZCfHJr7eY7h1QTDohyCTbR9aSL",
  "key16": "3yjmzGARUhxC8E8XiTG69i5pDnCLNqKcdepoGQyYwNjjpzkrjKaDuGEnegxGaCzyoHNDnWKjTFcCXTCb5MXJZyFW",
  "key17": "4hVsNAVv3CPLfak5nSo55EVroBHw86vXFtM33TFz5TTjugFJSv78JGM5vwcGXtfzYoM3N2xBC5JrZUmo7KVBX21w",
  "key18": "6RhcwCqqLSLBms6JaQo1bnRrZf4zhqAaHMoVXYWAqFofxK9vgDy3nHqxcQtV7ZJDY1K8jLenqZFWzxbuVpSwyu2",
  "key19": "4keTLiX4KdjuPmt4zzEJfjoKfpuouPF8QYg6pmk4XqsXZfL9TXrsbVkMK4NR4FJJbmoZo8DCkb8MAKytRKEFXF1y",
  "key20": "5kYNcEUHtVqdbWUKE58dYDWiu851F7y5UYXKCuDQD2LMssPahLkcA8JzxYTsz8Q1Ab3ibjdcPBev1hUELimaY3HX",
  "key21": "oVhxknzQV2aZpYgy8xDudmsRGQsrUZkbX9bHXCVYHDDVa8yXG2A2AudAo5msvWizCbtgbuKRVMyMcPdJjE3EFL6",
  "key22": "3bE8Zhux1Xbdz1n2xgDfKQQA2LEcGSzu4NkgD9YMHEerRe9B2uusedQuW851ShuC4W4KUHRmZoPVJTrm4VLuDPo5",
  "key23": "5TZKUpJeu85rhuxEexhvFZYJn45cvtZU2kxujdqqS8udeU4eci8kqqGoArEWQyVFnaTAFNYBig6xPRaeMoRaSCWu",
  "key24": "9tPDwEaXuutwRKcQ2PsHVD8qcSLrRpe1V4bVUtkfxCVt113bVK2mnobMbDH4VMFFSsL3guPCNXqgtnB4f4Gp4da",
  "key25": "5kfxdnPBpqjE5RNd8KGNFYqT9SmWxbMrZwLKpVNi3qmJvvwLrA4shN62hkYrqyw9KmUFZ5zQ6qPMj2rv7y1k3c73",
  "key26": "PCZzLvPnkgShh15yHeQ4zRyJrApLPzzr9bNAE7NgL8PCVs7Hgz56mnbMQ3i2UB5AwvGqg7Lfia1yBZooCbKm8bQ",
  "key27": "2LAxQQoqEyokztrSWWmKhBHL9qUMT1Gghr4gW4pxSHinyQmEjSWpCTFGC8kw6D5sAv4vBznuUNhgaJxmfwFw72gu",
  "key28": "637qddqAXRN9v9KvjBhhNuaCsrMjE4jvG5iwhMFxFaGx5JxQtZtCCfxcM95A6VhJawu1jeZWFArU5BomeaEE8Wbo",
  "key29": "5qStpZxLLinEwFCAL2NsXcrWJrdmAdBN45ku9kfVWPuPAJnvbdHttsszGQtrzAp1FkGeqpaioASSSzLKyyLBcN3w",
  "key30": "mACr2VZDVuyjx4cwnxRdep9nYB6T6QwrccZKoiuRL1PCRzi8xtzfbiPYAUSDYPZ97tqA5WvnNiGbCP3aTp8J6dm",
  "key31": "2kBhotzUw2kxQJpEs1rqspcURhMrkRW56sv2FzEc4jS6Kb6cdzE6pvPwFkt71N6eZc7oeURs6qUyvNYPBfRMr27P",
  "key32": "4GfwxhwXqb4FtxNMsbdu2okP54FskPsBcdzaHKsEaSMpxzBTMEZ7zD8hNCdRA8XdtsieUgLPhaYCTWLPJNrz1Hja"
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
