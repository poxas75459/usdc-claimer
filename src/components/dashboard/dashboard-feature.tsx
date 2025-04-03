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
    "3ScF2Q5GRJtBsE2Vzd5t1C3NNJbJ7B6GRmuoRfe4y12BzDengnWd2vFWspDGet5FwkJHtjNcrkeHR6Rk8Jd9zXTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yuUrQXsg65MPtFqfQ5tUqk7rkEXTRXqwgzt3P4YUJYwovwmyrt7auudjfhkPnu1J9x7gLugiJp97JSnPNwhxYkR",
  "key1": "65RmWVbjBZGL3GfVV3fuqRpyX3ESWtMBk4Z4FBbdwDdJek2HKtEUqp44SdARpM3cdKLcMFsbf7AZb5fzTaJWqfn2",
  "key2": "5bUsd5Z211byrtf9cRe6bcdJxJttQ1rxRtdfDsboGjuVfpuN6u1HnCdRANRfev5peEppLaerGXqJ49s3HGMownhi",
  "key3": "2XrZmZH3W3Qj2tiHtABunsgKyXPEzuDgedKi4uq6WrFPC59vTrRGZpWacTPziFfmZ4xn7MEjTC7qy2B8GaneFn5v",
  "key4": "4kL4oDEHsPCgx8ZFJhKW2GdSa1rxgSeL8kH5t1eqoaCaavC7WV7DnaQASc5deX4ABL9K2b7KYE1RbhR3yXiFjmuu",
  "key5": "4EZJXydmx1cnRLhZRnk86NEmcRHj8UQjw8YDSCSjLwzVPQhRCZ71UMdTLzmAFGT8xS8Swnb1HThGUDri7etagWjY",
  "key6": "5xT5uUjVegQUqnsPN5Nu6NoqzKQqmk7pPXUWrvBn7qPG5JsCXNrhstv24eAx1GpCjKfuPHKjr5cSkGtyppysNaz6",
  "key7": "ULnf7nJpcbV52vW3TM3LRYP27oMaF4w7nEQ8ueCB2Uv9dwZCSG4dzBS9A8uZcRa1BvRDcM2KL44zzEkS5BAPdBb",
  "key8": "4xYU86svNZu5d3AAhSMaciiPPifsawVCfJEuR76nsDqzKNSLkP5WEj5xRJM6qH67FGeMiQVt5UVD3ruD3AzvetBh",
  "key9": "2Ytq1DUqzv9tyD7DGivz4Ji4xWAzcBLw7TtqvmcNF6Xr4dfWkLd3BCzj5mwWun4zHxnZeebTgK6zBCR3vk5cYwp",
  "key10": "3BpfTP7i3aXJqrbrG7vSTY1UCCjhFZr4BwdX5jAx9dWhJvi8nA4MNLy4c8Dr8SkVHWm4TtKncL8cr44eY5duGdvW",
  "key11": "3nsBkTLXm54NwEFP5UpgquVRPz49sheBfjfVyQtPGZz9aURwzg3FtHm47QggsaQudSaSW5Z1Krah7qjDdyuN2kRv",
  "key12": "58rjtdPN2RwWeo78jCwetz7nMQp8Ka9WtrBT26PuQRRRc2jYyqYC8zrY6EYxFNCG65zfmZHhGRxp2ct56yRrvWxK",
  "key13": "3XhacVuGTUqPrxWpdrkPXFcmFJ6ckPbsd5Rsv5DPxWDpwMwq1PFXNER6NGCG2Yrg62TckwKVToJ2jQF45xDgDyYt",
  "key14": "2wz3NJqSmMv7nTzG8hGir9azS9yDWELmPZLmhm1z8WopZ347vXM1H5iJ5nKBZhLyRRUAoXmF2UM2rPnFLZCnMysJ",
  "key15": "5taVq5SU6VcGfbpdvDFGRfVW7Qank8pUvCETwrb2nJU3aifBVMvkxnZxzyBzikFSMAT6zGgUZQWQFSZBD9vGureD",
  "key16": "31M1mvk8KbBRn3PTCfBmpm49bwVDiQJTMtJxgEAEyeyxWQFqg3BUztiLCQGUtXRFbV5FsAaoqkwqRgrzK7VhY4eY",
  "key17": "eU4ApdDyvetkyL2ghiCN23tePw3tZKgU3DepDgDJKFGe3Y32pekDAtffSvVG6VZeEuWC36bAmyDYjGrh4XFscZa",
  "key18": "5FSAmzvLMGm2wGawW4GfsC9khroYewbXuuwU8jujwhHCRxsm9YkAZsmnwAUzGvSLu1LpMsuz8Ugva49n3neEQvKq",
  "key19": "4kuLj6Tfx1ywquQV4peuHrB997YSCUFnZvBj3oAGBkf9rWWMUAHsQgBPnVDZMFwFodCxpKzEVAHWu1Y5KrHrNdZ4",
  "key20": "5cwb5Zk9jsmEDzbk55Ld2Mp7dxe7xU6bG51wrAd2h7hyc38a1X5jyvDgAUiC8oPJK3uWXMBzUxP7GtLVPjPqtbWX",
  "key21": "5pVRdiakr29pKA4CFVYUPtahRA97S337ti1xQkXEabMV2SdBsWLLDdpV9isDeYtFbFRB78BYwaxSRXqhaQnns7q4",
  "key22": "2k964YXCxePZ6H9rFHY6Ybct4tZipe1bWU4w8oFukvMqFByiE9GcxLS4onGbdV4fMqBPod49jWBfP7pmRW8CpwVL",
  "key23": "RRWWZSyfAzMjHbkQnpKyuaXRxPQALCWbWSc6vZ2WqkQMHxdV5X2yniKSu9W5Jv9BmoubJz9ezSuN8n3VnsrJp63",
  "key24": "46NuA3pEkVELvzwqfHqVHRmntwHK5NXhGSndnNTNwkAzoztMwZwKLhZLgQVKzZ8wEmFBFxxutJFQzLywhviAUmAL",
  "key25": "3KSPhvSH5YiWrbNc7ixqWpyuwqido61sbneibZ2giBRNczuYCMmicqZ8e27aZ7WMcPYVRugyNUuezpY8smop8x2G",
  "key26": "3P2ZFQ8zJZ7zLbJg81Zb7FuoZDeFh7NNLXAh4aWF7XbGPSVGQD8Y7bCx5Ddj9F7UGitmAb2tB626HGaN2BJc4FBV",
  "key27": "4PECccT8FsSsJwQy1cTz684Ka942oyEyp4RKHdShAjKfekSWxpqGQTXKjADuYVfXZCAELju8vfp4Fzz2oRPXNfqr",
  "key28": "2kksWJEckbzFADgqjwa1wPko43si4Q2SjoizTEwXs3aqWXkSsH9bPyGw9QJJ8TeynaHSTVqo3S1XuFpDJveKtvqP",
  "key29": "2S6Tga7RTk6YSJEBgwowDcR5Byv9aj4MrbRmeE9oS2q2zwAESFUaGk5e42FWieencd8fkutu6wgkHSuMM7C2cfQd",
  "key30": "2sytzBn8TYtR1pKxWtcQDwz8TAZAaFY6KLDZgCTbWkKxTtf13Uk9eytZhgC14UErYPTbZJmE9jiCDCV84sLF6tXP",
  "key31": "5UgYF7eKQcPNmexqhYYWnArRbA86ejrqGjZmEr2tatuhSnJHGAwuRmE1J634jhPXFAqGuYAHgCt7CrtuyahUmhp8",
  "key32": "3z2K3yyTZ9WxYxokLGUamf2DxpjPqGtmpQpzDhaWR5nsLcp5shhxypb1SJ3sWBXcM8yGrNvr4wPXxaANXeB4yfX1"
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
