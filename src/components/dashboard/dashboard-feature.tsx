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
    "5nrwSriuDWvY9YTUyhxunhmFpamqcsukh1Hfm7Vuj8qWEAHboavSdiu12UUnRCt54CPe3MKXinyH9zCwRT1Lc15M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VSzr1A6rwSFxnnvQkBrDVAA9gwM9ogETZYsxxEavfbr1dbzKR8xLb5EJZYjAg4NGmJwGRb9cRk9F7RuADgkrd8w",
  "key1": "4C5GsUDnrdnoZmtmSro86mHnt9ijX3SfAv6pNnbXPXm9NraTVkY5kPqXJ5b1sK5kdcxXG5g99F86BodXwJsvQ3tF",
  "key2": "3cfuTNFYtuvwSabYr9PCHbxGhNfuJn4N4bM7Qk7kCQiRCUz9KzeBsAUPrvGrTn6w39JwNhKR6gBz1NsPPxztF5DL",
  "key3": "5qdgbixsnW7NQ8MFy5vDGb6gEQKgEbJC46kiD7F8vxRX6UXQiZ2GRH3idsohAmZe839L9GWUb5xkhzVAyHhxDjT1",
  "key4": "2sji9E6b8UB65gNWQquUQmWevGy2dQnXMuYoF8oZwAKKAFfKx5jkGuuFgQGfd4w4NSEicfWQp8aTrj81Rvww18Uf",
  "key5": "3kF5r8pB6vkmmDX8SNWECySrRuvAY15hqm8rv2TxR51wkb5rFhpJc94EjLS5vqNxX6PMUD4Gr9nbHGRULD6mxziw",
  "key6": "3tJMRTVVWxv1fcedJramAGyUc3Q83HfLL34FVhyk6nDYQ6Ywv82MgTVnxM7euoxmNTzgWGdBMmFEkxu27RnRut3Q",
  "key7": "VhNdnKjLC7az9sdLwjei7swdCdKx4R7e9gg3Qmb2og9Bjbd2Xgpy7XxhNmt2oWwx3X3RuwLBioi8jfHBpMPByL1",
  "key8": "3nKyNwf5eibRrogMdUjhXWnNyKVNnQtd6zxVkXaaLXKg57A1NdqjqVXMobit3iyoLh8GM22F6YcRNSv1Vm8U1tat",
  "key9": "uv3Pvkj7T64M9zuGVcN9aq4yE4361mn5eXAYuBhouDtA41UzUqwGn5RuRGqStkyJBPChLVP8gH36BUGNeEPHujH",
  "key10": "4fPwXdMVYju1pMfCMGPHVzzhyPMHnso2KEt9JTDS9ZZfzWPZhTwBsj9ewZRoerBCbYw9Pyro26fGLafzgM3T3meB",
  "key11": "3RSf7tQRARt2xACcP9TxC9qYq1oriBuePWAxeGTRRU93XexBsW4DBqa9tiQN4KzccjyJYwbo8AKotyC9rasap3KE",
  "key12": "4iWWpFufho7f12ZcGjNBh6cgm6vfEsVN3oCpAXHyvGoFrfMAjWVCxFo49o5f47sQ7p2FPFEB8wyXHZwWAnVSFH6B",
  "key13": "2aNEmQ9g9tbfemqgZs3thuWLNVFcZDxSQV4nM6c1wQRpZNGUZ3u6ybRk392oXtMrGBBq1YsmWqhgCZ54dGaGGycN",
  "key14": "4RuRXsmx8JuW18jJzNLNmkXma6fCLZ7pEBJnRn9XHZPgmWhVwUeGDtxcy6eEmQqRiWmwAwCkFNYx6roXr7mQPU8X",
  "key15": "5gjioxpKE6nDB3RHqSYEeKLLuLfmbf7Aq4FSA4iT2gB7FKT729PaqRcnY8ogmvHDxBdQorruscATiZK2iTUpuCPt",
  "key16": "3RXUmpBLUydyd93zC6Cse5c5NkmXBFVEGBQQi3aHCBhaiNq4WhjEPNj9Jr7SRxs9f4MfsRc2MMsdJ6P9AjayugvA",
  "key17": "31uA7WKChW6W5fi3odwJVTuT7KygkWG2TkLRHaG9du4agPtXXY64RDAAHCDeRGzDf9Eo6dhRvT4u8EyoHdG1dHV8",
  "key18": "543ZQPHcZvoZq4GCFqLz2z8aFDFgdMvT7BkB6cVnzJwxkG5z5dCcFNF9jAq6ZHQcVEGQh2psxBXVFvDQGiiZubgy",
  "key19": "3XaaG9DGZbJhsxHHrFxXrU1WDTspJsZD2RyywjU9nKR3uRf2QKGH6zYKJeopA5iAzm3kMc1kuXA7DWuUKzbUwdik",
  "key20": "2iXqp4t4QHU3kfHdVhhnTX76T6sDiKWPUp8hB93zbfybb1egxcXAiCmwzjH15sX4aQV9cqrtYWqRLKzuChcXCr2t",
  "key21": "NeJpBZiLgeTqV5xzcyrNH4AmDz4TPNCEGW1R5dpkzL7ny55D7mX5ZsqrRGJaHAiNYDmGQbBgeChhGmiMW6EQXGK",
  "key22": "3DLzLBiHZ5sPHv8xqieDATt8NGDPGgfw7apQ8Zi5VDJnR2Q5eBUoPs4Fn3sABySscFZertqjfKhkXjRvtwAbeD6u",
  "key23": "2G2L5UJ17FUhTY5LMth3aZHJbbm5xJqybzBqPz4zjqsYTZMvsbXkjmrZYVKvV4jAs57pZ5mTevUnW11KYdKsfrZx",
  "key24": "Qj6VxBj29T44BM1vfoLWSfcVNTCmxRHajXvyYCqEe2TCYEGuAgWbo4yUEfMYCu3zbCLiNEDuKAX8MfPFd8WkeQn",
  "key25": "3MEVnPAvRxhGmQZUPqwt3nVMuK1HK8t95jwWNo2U4uLrzbmx9CZbLWoECcjvVw5vGxqjtcgoZS8Diuy2LR9esh4i",
  "key26": "WT6JbAZywpP5MfR7uubbm4mNXYgMcCmM4TWnJohEEx9gQxVE16xnHRyQYkYCBjVYSHqCjzvstvn4PFfwtSTmcvN",
  "key27": "5Hd1LngBhwBm5uyhjFpdTnAbZocWDPW6tvjVHrrf2pUNSSRRbBpxTq6cmAhdJEjQa7obJD9pdHBZuLwtun9vpoMX",
  "key28": "2CgzCkACjtrbUQjyu8vwhvJhRbyc4BSMnDZcDfG8zkxDPMA3BW7eZmASpsMpfWikTzXGy489V3ZrpuBes1wBUfyz",
  "key29": "421LNWZfGEAYxY4ivAoxhrqWiUKcnCGhgGneCfEeNQ83iJ5H3mC6vwoCEhYorm4QDTDYRwqpyUZhFtcZQYaWQ7M",
  "key30": "2VwcJ4CH5cr2U3iL8iJoakNuFHDF5eGU9L2CHkTAa54kGm2dQEAUQxKuqhTgqt28kERuXUv9bRF3zrmRk8NiDceG"
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
