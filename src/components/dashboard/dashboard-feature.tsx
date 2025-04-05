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
    "2ETHw4AAjdWUkYH3tpuTBoc2ceBaHBhf3kpFJnWxBcGJk8JZmzDjrWVqTcwvA6hTgeB2wE2HhF3wJAeg6n2jt8NN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SJXiLEPANNUhvkwe3sN4kuJCpDoDDL9dqWSUJrQZysRDEn1o15JveZv73HbZva2UDpEtU53p5mV8uf2NhNe7tem",
  "key1": "3fhfyqq9jdjLdthXicQcEurDeEvLij5R7R5kGVEPM1xUevWCVSGBqMGr5VDKjCS8xvLoUTYKWVkfRBQyUXX6ED33",
  "key2": "2oCYar7zDpJ78GrMPE91yeQf8V7QGHhs1nHyuF98kAQbVgkt6qbHZDrwRZZQ89jhvtAUXhDdfWUqDJzXcRRCxkg8",
  "key3": "3RTFtazppEeDnNHmMKwNcqjdHfVbueuDwC31npsKQVQGVN8diBDDB9JH7d6nvvvZJjJ451ZjKKTcozojhg7Cm7JH",
  "key4": "4o3jvEuqHuRphKjBJRBssnf2iHuNKCKbvXmwpEpszmwyraMHYwkmXpsrTeJkVTtKLHz2osW7eaPp79jG8JpR3j7x",
  "key5": "tmNyU7XUzHjpUhjoobvVSkMDdJ5xtXhKrcvy9kYh1RPKPXHAqgJR849q6w4LykgFJdqEwU9xkgu45wMzT7YBhSj",
  "key6": "4whKxXtKTTd4dSysZEJMN51H4BtJLWSFWPH6Xgfpt31iXvZowzBo2DoZ9nAR3fzoySwU1WNvDnj9R6mVcW4vm8vE",
  "key7": "RgvqvtQv35vd9btULxP3rUpyDLexVuiJU9EqqkNxor2V6UYX47GNkMttM7b63c9Nanz2jVbdqdnuZNmYL9iF6rw",
  "key8": "2F2gBci3zQ6kcfTodFRUwksPgkhBkgy3eSi8ctwGTm8VEGDC1UsV3w28CCVfob5pn2AX3ruMeRKxatNqgnx4kwkJ",
  "key9": "21RR1Da3RaNGNF4FFPk5E3nQUr79xwZouUFLakzdrtBfHwBJFx9KwkprsT7bmpjRGJxMRXTdhKGGm687oHUcSHji",
  "key10": "21ifJapRhU7sVrGir5Pu5oREEhNeeeMmRE8QQ2CYRgGMNSf3p1aPXDKv6KWcY6Qu9TTtYLeLLG9fwqcwvF3C3cwV",
  "key11": "RoCfGgzF1UDQtFcBax7TmjzYrAuauRzUEJazzfHQM6vy5EZ1X5rwfCvLE6qTqPt2qnww1xtbKZqnGo3rRQgFi6B",
  "key12": "4KCRybsf3tw9fFALaC1Sg2arfTv9m7uaj9EAtPN6X9N52Ygv2R1jAESUtVh9WisboLFKTwSbphZN7C5yBq6fuvbP",
  "key13": "3BaC4hgyGgQJksup5UgCqhPXAfoYDK2NrQ5krd2T3ELezCZ3uZxVNgPrkY95mSa4ka9vR76MpTxF3nR1S3wJ8tEH",
  "key14": "4WiphEUDCQjahJ4YDE9vmodEbKLKRgcd1PqTmbJEPuBxSDvUAoMvbpeVzjnSbTHPYcHYataqE6EvUx8tP8AG1J82",
  "key15": "5HwGQQEzUzsFtNxjJShu9gWs3VvkQJEf1yvncPSdW86nJs52zcrZkfKGdTo3XRCcctG1Aqnu75hCm2cX3MWmFMq2",
  "key16": "DmqzkukaPKQhPCwKngk7LiCfcBY4vadBCdGmfAfkitxvyBhCUnhwkH5Gcq1ZQzuKnVvXfbsE9FgHdfu9iWA2ycG",
  "key17": "4tokFnZtBsdBu11fzXrcCsAQcKyqP3ifUtkpBd3ttQmk4dmhJNwMMn3EhuzFCiKhPTHsUpXA4LX3h27EZ81EJwnk",
  "key18": "oiPdvnVoMgcMVMjxdYe9twXeqBS5s3NCfU2WJvewk69rehF6BbbenbScwaKMbw2rKoiqgptW7saPXWuaZv3WSBt",
  "key19": "5Tgm9rhGSmjdArfz3GoiAdkPaCgu4Dw3k6hqiy7unzMeiyAbyB5ciVwB31n2Baw4DVUG3hnhnQwi3yZwAj5jLMgi",
  "key20": "5mn8KD9jCTjWXRb9gcMZtYGpnuegSXjbfwK2QtpvS4wuvJ7CGsy97PmytU5YaNzbJJh4o7z3FiT3oBEqj2CtSjzG",
  "key21": "5BBUbraQcxFkjZjT3uWeX7ojDLv9do5r648meffuMwGJi4zBSadcMBv8UG7mGLXvEmPZg1my2hBs5mfE8Er69Sdc",
  "key22": "D1fZVaQWXMpRJ4VR1o8x1g1Fi2Sg27gg92Nup764M6TiiGdYK3Zybt7M9Zfsiu4rXqajSBArRN29NFMPvhLCNUm",
  "key23": "25D6aT29eV8qkcGdTTfYjGQ43o6YU5tHCZgqAxLoHJytf2tPLi1pxCTVHDEninmxubtM2zgjQJ357CMfj3iPbnAv",
  "key24": "HHXQy6MN5ztwncZf5ysWbuKeJVE6Av6sb4jQfTNGg8zMCxwdiF7RripZicPgCu6rK7yn5gZYE3kmRhY67bQraKx"
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
