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
    "5UMX3LMHNieVh4jgo3R2RSJF4doVXKR9bisrCAvVkDtoP5zcbLmQpu8f56EPSgs1TcV7BVVmXvaFK63VWXvHu8Ye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7tHw7N7TLZipgjvmv2vFkrSSSoTWnAxJye6qh8UyPY5pxCPH8QXqndHxS5mvgDgwn7TJ3dVvvHSuuZBjYriBREX",
  "key1": "u4FaLBXgMFNMGEnbQ6Yk2pigvofZKFc79vFn3wkqj9t992mVxPgBhEN1gSSQ3iTTbam4TrC4mQSD5Lx5WKFW8o3",
  "key2": "5is5kGXDQXkmnysLC4iADLzzWpGGnRcV7svuAvotS797JDu4kwzhzb9HECWaD1tpE7hMQQQaiF82dmi9LXndcwZa",
  "key3": "42k9kLfszqPPu34J1jBXgtD5PyoZXkPHTJ2kMaYGjfS2han3qqgYmWdjhgsnT8t9ZB3FPERhCsT2fyLY1aEUbU5E",
  "key4": "44StYuBAyLGnkPbcmG6TGvaYTn5zi7k9kk6foBVMG8Y9dZ65doakgRfEGLLDQwXoyzf1yr1gJT9Ezn1ocRy5mieP",
  "key5": "66fJWE2QuUA3DN3qb3WKANU922BDgSvFgEnMUe4xBjt4Zq5D88HCnZZHevvUdkVkGTuUc9NQfTsjW7AxsgidXQU3",
  "key6": "3EvSGHAHSbZQk4dxWviNR2V1GetPtFGbUFbN5Fer4P9QY5cfBfL2tVoP32b9LAfZECmeSW7vVJfW2YojkKUPfZLU",
  "key7": "63fUAu5cKFfpLnnGhMA7FL48zVKwyoWqsXguj4bDbTDNYxqqsoX772TfFMAexXeSnt7qMyLnNS2BAHse4TotR7gH",
  "key8": "4xgt6L93Dey3UhSjE3TLzMUP66cnbizTLhmkB9J6tYuZMFMWgq9My4YmcFQHpTih7vBauZrsFd38D3phMf9be75a",
  "key9": "4H4SfA1kSE4tuV9VgiTJvnqKEQ9n4h5wcb5gW6gR8wsRVcSfbxZEbn1UbfYXZxFEaMyxd7YeBwYEMnLuH19VcQiy",
  "key10": "3kiYGPKdUX7dUcDimGGvdLWWSAerzonqpWBEznFbYazdHE3mPPjqwnR3tPr8LZxHJZZ2CKcYh6s25HsH1fhLDxw1",
  "key11": "22sfgh6vPjfz3HYT3WktENyF2nu2MJzcsHYM9BwnBRxCcwqwf8qci2dzTbrFGADYso5LCqYYT6bSXR5URg5LXuEs",
  "key12": "5YaeCADFwRpy4maxpffnAW9rDqD636aGe3LYUHftY3TTrfJGJdZ812Zkm3C24c3ZYE4hWdLHWxYyfDMmLr96H3xS",
  "key13": "3hkBqGkHZvedLkSh1PzwJpkv5P9Dmr18qvANAQVkpHna7Txhc3UQwLHaBfUrHnBfAMnc5rRbt1rokUamujGJmv4r",
  "key14": "2Efp8LAFtU5pcnvb52rUBbHKeqDy1ZXzSYgNU9TiR9bBZsB6tGNmdv2D2AhATxqiqRYXAZXKjvqG5pp6v21xoTp8",
  "key15": "2kisJRnzPFtUAWDc6KYkTGYgeXneGrJmdft18kTfz4v8tkoto24GsHVLH7Dg94WLL5t7ndJtvpnnitJJMMQJW6YF",
  "key16": "nY1nXRAczd3sXK9Fo5ZpgdrzUj6jGKLj1NVipRkoq8Q6ohaK3WqnijY94rLMeQQcmn2ifxYCajKiC9aqsezsk65",
  "key17": "LHUYpJ5dNnxrFy3g3hSEfhT7KR5sGcRkXRniPFFF64Kn6SPtrK3te4oSUvCiNaS4UgygZrbyntVfWxbfm6q3orm",
  "key18": "3Q3c2ung7ohnwTkj4R683jb5DF3qT8PZHBNhbo4wfzJ3i8UXSKBmKrzn7Y75oWkJM41ztWFszfpJRhB6TXbXke8h",
  "key19": "5mc1sEW1QeW8NTBrFACBC6R4WEmoLwYyGNBum5PMQhB2XDZJgiTo3xyfNmPeznfueV7FyiLtGq3T9aKUrL1tKiTr",
  "key20": "xmoHc1MCK6paFHVZ3rHJAEGdvqxs8AdsxL1C1DobHf9pjZMNvC9gq7TDFFJnXfSPDRWMnrzEZ6R5W891fdkZaWV",
  "key21": "fSAA4hzJM25XfgXD4VJnerwB1jRkUWcHtqmeLnUieRC5wz1zfMYbncmjcWP1dzKUX2aaK4tX4kktcDMpUpdTCuU",
  "key22": "47E6GXzHzbkyDLh7R66tVDZS1pTwKkV7Vj2uubWMF3pFFGnbNbBXwJ6XUDi1YP6s5XnA8Rv95hK1jdTDbR2q66Ji",
  "key23": "2NagnRXTYg6tLgbSf6iJjs8WYZeTWPdq8ct5QpDwcqzkQrSsv5nkAXtgCtASv8zDSVsGAb3y7rfb5NgvkudjTyJX",
  "key24": "zUfF9CVwDF18dmDpqaNo63iULpLq3ZoN731KfdnoBAMU5ACW1oTFKUfb8bi2zAB8zxfAyod6Xet4YLUemCrq9sy",
  "key25": "2iP4iD3AtqZSTdGJuZrc7rPrU8hAvNF3UqE89BBSUtmNeZykqRZa1JmqkHvyN7BYLxoqsS23yzVB27gMHdQGLmYm",
  "key26": "WhRZ6chR2M6jMCdnbu4qiQQ9DmFzdYjuZbN8nJLfccJS39gwFvjR7LKcn7X8RbvPUZVr3b7c7e89qErnBEAMGRy",
  "key27": "2jyH9wiPwcsGgZf9oBfkgDM6Lz7RDgRRHNG3DL34XCtbjX9Qy9dypt4svvwzuoux4jV2PntYUx3SgCFjT51aYirf"
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
