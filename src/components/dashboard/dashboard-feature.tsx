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
    "5HGJRjtnWhDAqcRuHkw5DC8pw48fAaQXqRd5nRBAtd93a7cRbgbdtMUvfwaH7RN5X8WTKBYUKCDYWkbcaWQn92kX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63yfEpQLu8L9UgwsGDubrbgFKWeWSugE8W57RkGJ6WWLUmYnqRLrkzJ5vtDBxySWn19VxmzA8zdbvW29vB8cd9Xx",
  "key1": "4GTdqzmf1SLV7zzvw66SWPckDABQzRWptGt2BbVnj6qJC4uCeiexibeNSu9wmUzKJevZod9gTyE5sSV9CyAwFi1F",
  "key2": "3Tvi94EmZNCPUuFFHU15pc6Z61Fr9jY2BZKw2t8whx9xMST9szw4Xq1253yCbaQTgqYUWxYtBeB2jck7dANtjCkU",
  "key3": "4QJQUGRK8CHRokZG7s98NxCPQjhyHRjVXZTckBppRDdojWqMYZHTqpp7Q4s7zpGtSPbQacvH3mCEuxzQtYDpixcq",
  "key4": "4Ubf9AUdcD1vaiuvfnmFbJx6NbzRVxx7UfnbdVc7Py15sHuJpJXZQH3WqK7GSZmXqmfL221vYY8o8KfRtgorU9dJ",
  "key5": "354zNBTQQdid1uu4pg6w3GnRUNxRNiWtZKM1GnsiBKrnD72j1mQHGS2adgncRQuVURK8GfUAHHZwAY8SaazZiZ8r",
  "key6": "5Toa54xfRu3uwKQXmaV7y95zdCeyRXkebyAcNRDUmmewu5mt2uD8urDkeA64f64gRfqtx9EdK1HfX9RCURYoNN8A",
  "key7": "4BFreCrkK2Hd3oLfEKSgMyzaFJ7AJyVb9Gx5EqjoziE4Vhqzhaq5ZLJ5zhSa3JDLLkkgTCcbtTeWuaem9bmJeNiA",
  "key8": "vG9zhY6ihpQXEyZoiwCMTvHhkT1DV3U4sWGKHZ7iA5J3hy4y6dmwPLZ6QSviUQ6Lhz8tUoWUWk4aeVPDw8LGhzZ",
  "key9": "2s6ymMrGiaW9xobiLTwyutJJg12UouJhHQxbCntDx9EoSxGbW3DA2Y2gZqQj86BwUTkf5terdPjdJURsr7phDrqh",
  "key10": "4G4n7sx1b4eRX7u9q4DYGLMcDjfTLjgN4CJUh4BJyf5w6ATCZZsCMr5UxNXFZ9xgC66ot6KTQE4CV8Tcnon4U3wp",
  "key11": "4S3r89yN7zVJwp3PvEZAeU3wBee6dRxHdfSuxqR8H5xknJnNsWRqqjzK821ELptdscXUuUDsbMvZRB3eySGqmaFL",
  "key12": "4dSMp3F4cgtpvTb5ZcKEnsREu7BtvYUemxjgWmDMhTnAt2JU5icDqog9TYEQg8zuD5vapvRLJ8MfXZ2wDvp1ZdU",
  "key13": "3dJUoBpjdGegtJemsX8vcgxnKxrs3jERkLmbJa3ezq2r7m1fhfJs4b1TzEy32gHLn6FQ4VsvH8FgDkQ2bVyX8KAt",
  "key14": "121GidfxyupUxL714ZCrtAtJEervYQYnJt2NB7SQrMywsGdXHACEBAna63stDm4jwKpmfy34U3NbXKYiT7YQwFy",
  "key15": "36z5T7SHPsp7qyNwaQGSSc6mwdahn7EgK2oDQXcKgdyvNEwBs3U1a3i5An9rPtNH892ouYvb5CFPFAP77uyDuXXn",
  "key16": "4GRqL7k99TiRyTCD4SEjEouv32i2CJ7QyYf48S2zjhFFBsxdSwWwT1uqU61X3NFueiyLmD9Szgn5huRKFM1pEj8f",
  "key17": "4RBpF4PfbzmfYNwUKn4sMxpWmiXQr7P99oKS9hxRBAxYrnw8opUy6NNGYXXetF1v2NJSC5hXG11GdahwutNFrv9X",
  "key18": "4bw2C6cThqaXmMrqfjPa9SEDGDjwn3mJtzXTXXvjoTh2KgctokwoLYDTu8sDhwAcruq9W65Wwkm3WmirePrKN8B9",
  "key19": "2wjp6x1bkWMhdcAUKdLLeQ2RxSNgbxCvANRsosYbAoag4EXMNQ5gafY4dg48igcbBtdPjbT1azuDxiNGjc6XVCKN",
  "key20": "4ngfTz1ptzfB8HkUxTtYHHdbmp75F4w7kMz5E3Cri3UHCz8Hs9peugit2gywVRpzvHAFj2PSiAGDsutDLZmcsDmT",
  "key21": "51YN9gt5BZ7BuuQ2nwyceQz5heNZXw7jSRE1pBL3kcCPbtVUnqmVFYMPcWteUdHHDvkd7dZCY6QKAvjFwhfo2U3b",
  "key22": "5wCszJJY49zHZZEWt261syskU2woPdVXTRxngkLrwGKi8VH9ByVYB4VVCL54payyjTCQdCLiFWG3G6y3YPxQMUBS",
  "key23": "coA96QxMkEXqihApmLRbaqKH6LhxjTFDo6pZRVVGfAtqbgPobvcWBuNbTuwR3AJQYs5dHPmtcsGXaRobPac976s",
  "key24": "5KsUt3ZsqX1EYuFYdDaGC9VBao6nZ64ob3Mduj6eZpt2gPCga8reG8yMjtQ8QJGxPsxRsNYAzVzpyX9k6EyishA9",
  "key25": "5tWuuXcwpnFTDVbm8W6hbPZCH5vgdgEQYww9S2vbaDkAwWrs757Uvtynr8DTZyAitLTJFx5S8V28rsszrLqE9XaK",
  "key26": "4zZmTt7aFaoxttEpR4ZKRNaGjeKZhBibFFNYvgRW2ymfehfm7PEeHQTezAgZSUNZ3oMudBjmTkVV4URAwJJ5TcjU",
  "key27": "3PYm14m4RpAiCvoDBMcWJYyGq7yTzYNf7E7FT4cix2w9VfQa6bdjh8K43zrQFrvkBJC97QDT96MuBMXh3pxaoh2J",
  "key28": "4xWqgaNzYZLmUqb9aGaMRAxKKER2zjTPvmw52so3ajRAQFvNsRXr8H2Ry4p6mgASfA68C8NtfqAPUtCe2o67tzFH",
  "key29": "8ATkzvSMtgQYzRC3fyY95yp36jGyb9185Edtz4AnbmCWYGChfHVsgYenkdogdbXuzLUrPEj9p8nZepfiAGhNg4G",
  "key30": "33fpC3B5S6doHk76wu9nTLNcA72EzSeQie6ak6BS3mPJYEvZEgnSB5KcEkHDL7z4zR5VasphTHEz1r6qfnGH2ypi"
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
