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
    "4Td7HN96ghVwU97iUKbtVgZQFuD8SdHTy9jZSxBQaFyWcmucaswKi2Gv9Qo2NLG4n1B71KpkqXHLtNBMttVgn3dB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RHmussrPigwBNRPM2tw3bnddcoaJKoVfk7vY6ipmfDSwZg2yWZXM3CcV8Yq738PJwu9hy1yh5ZzSmNP7U8zEyGm",
  "key1": "2jfvH6aJEHhvgbuUi43jiY51qYjF2ew28iVB9pFAP5xMiEeoiyyvBq33gm1Cwf9qU7amZEQAPTLQtL642drKhyMV",
  "key2": "2uYjRW98hpjokE5bboZsSZyQwrRPn51bsR54n98BTkQCwJApJ4NhMFj3LWLe62R4jhksnUcF6eFv74HsN3A8Nfbg",
  "key3": "2jcoo5uWjt1a8UxvTZYkyBKiVbMqixRBE98aGyRdz1qvhYhYqHkzTyVQNH7txty7MMEWuW4Rnuv6RTkrnxi1rpSZ",
  "key4": "4UJxbzB5GZFPPDKqyV7yYAB3dLET2qQ42fGLhkzwj6xr3a6qNVVET9VWkVEwHBdoxvzb8F9CFsxFvqp2pU4Spot6",
  "key5": "5VVpinwdeLb5dzqmU2BLZravy7yo8fF9A86KcwTx4G761cYv81FaykEGSNbRQo61noWVz9c2mmWGD2xhMycMKy2v",
  "key6": "5y53ot8Bjm4R53M3Y7MdBjAeUBRMuVm2iwbCrndh5wesWCTzWVMZMydCqnvDLFagk9FK8NBJX4v5X2TPivEBc92s",
  "key7": "4BFFwSVAJghYkv33Wis6psq1AqAvG55hffNfPtVvHaBaVkqryDswprTXjzLmZPfZgA5U9YuNmykwqBd4nbqhmQKj",
  "key8": "2LLDEcAZtnasBuhEjkR6UAXXtTDQJXm7ZnQFr6KPv2J8Smc3vmT1T9iG93fDuX2W3wFtERGKLxe9gZsa3mgB4FxE",
  "key9": "3j4v72E2FQ12md86DqWjNbxjUVVp42gyZqVRY1g7EZGMuv8SuWHA7z8fER5bn6jPr6rNn9pMQZTZA2DQ6wg7QVfo",
  "key10": "4u7waxqTt2KrX58bJPMgUSXZ31Z8FUGWzCfzbFnbH6AaNH9yQ8GNp9B5RGHZvg7Hq4hmtPf3Kq4MSzNsp4bqJuBj",
  "key11": "2Uz4TDa21eqWjeozE85kYsSXrmo16FfFMfouSAinqEC9i5HT4j2oZgwQBsWie54Lc9PKeqX5uRKvj1to2SEGViKS",
  "key12": "GWhMQuyaZLZsuDz5MGrM1nbTpcM7i2bRqRgXJyc6t2zMzTu7F77XAoRPXRmZgVp2Lf29hay6szK46XJHWTVrLtB",
  "key13": "3STowy2RALP7QRnytUhXKyFsBFqupBuKzbTS419Vko4cS8NXMLGCeqPBANKGd2KPTCBKobwnWUivbKRW2pXAAhDd",
  "key14": "5TMeNLXbFVJi1ADFdKW47G5SipNKiD9Jrs6FqDE1qsTk6c2drvagewdoNAo8R7raXDmtv3mwQvNPGEx8yc8iDyYB",
  "key15": "5SK5SrwEQ2B1wmja1TXtX5JyJ889C9zG3fgcDosXKBzNMENSmSf7v9Ew6ApbKZEFaqVfp8McvWtZFwteqt82bBzQ",
  "key16": "3SEXZoMtS1T5mruEsZ841J5kMsZvNcgeXS3LUzjJYH7CAaEfYBYNi396Mv5jPaKPNJGQCcRkQZLqiQS2rdxC56rr",
  "key17": "2CkVaPqJ3J6eG5wrMcjpYf7xFCXwTwUhLmZu8S9ydHfuNy8V9azq9e8tbdNndV42aKhXf49L4ruteqcUuK2cE5dt",
  "key18": "31fu249zJbjQx7jL1KF8Rb8BqMmHR7HvE5oS2P1fCjhVkaRup3uTGjm3hLtJDuUSGgnuGbfNtbX3SDAYzU8UZEzC",
  "key19": "4cb6Hi1MziHQDXkaFHh1KtJVXRZfoSUs8fVCPz1ynbtPGSt4CSD2vYwauBNdvin5ev2yE8BDBjeAGqCQREZyFgSQ",
  "key20": "5J1KGvtjjr1UQ2JieKdmgP9Xsi95HiJjX9eYGcuFumEgQsmeoxxWGdGgA1gdrcw7uxFmG8Q2CvwnKsY7P3MTvCYU",
  "key21": "63wjMmTDWbsLCFrJqv5Mb52PGPsH5PQTgjuo2QRSdbVH9eT2YQ9yEsiWnDij5fwZPSJyQpqF13QU6FuG6pa2xrYG",
  "key22": "4WKGpx4ffLkWoCmLK71D5RRYXBKkrChzsuYTacjByXSDAxdVzNjbq7f6RrRf2nsLJ9mPihjj3CM1LTn5RgCKb2vD",
  "key23": "WJ5Ta8iWrAz8QzZsrsCk3hPef3jzSxDb3JJD1XedpoyQjx4tcZ2jPGc6vq8FitMa6qiw2PfU9tDoEwPjXKYgMVg",
  "key24": "5EbB7U8uQc2pdxPY82hX5dWRUGzXNXvyfKE2XBvbjKnw4d19EUaqwBhpSJ8Kq6RWfyFaZ5MfjSBcVaqKErhYw121",
  "key25": "42aiyLZW1bk9xShF9yZXULjLEJgotiUfRm7pNzDvqNcvZNTUf2rQpqCvE269KUU4UTMSGAyG7Sd9fbZG66DkHtN9",
  "key26": "8arLxMFHmHcbuwwacb5xtkFmWNKMurSe9Wi2ctyabSiy8aYe6H3AwcKuQ3WXek6Wug7PLYD4TFbGTmqZ8n72SeE",
  "key27": "5AcEt7B6mf72jyjs2Pcf7eV9d2jR2R3YwZ1rp4N2DVF1kZwp4yPaZMc6AFjmZjS1gbDQcapKgdW3vHjtQiiRMyEf",
  "key28": "5d65aZv8Nfu9ADKo1pg3EWtsi9BWsyj2Zq8AaFny98ZvgVkUUhry116DSgcwu4QzvbLy2uGz3qjmLZcLb3WmeEWq",
  "key29": "4rhSFi2nDicjdBCZAj9uBUQhRy52MY4NxyFfACu7cVbbaVJiNzWHp8RzBVQomJnPirdMZAjgMgAHzxH79tVYq1wU",
  "key30": "23tkUSpsVmt4yFPomxVrM9NxNc7FkGfoBF833dBXeRqHAYHmkcmkCkgaLYYy7KiUCSxWFeUMKfb8MZHmEQT4oAkh",
  "key31": "4Ss5CgyoDs6Yyg1ubrWtsmxkSG8s76TZihPietYK8PLhiAEhSH2Zm8vC56VS91gUP67unB9DHMDGuPtH9hBpMYgH"
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
