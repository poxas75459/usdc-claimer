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
    "52j94LHCcD6ss4vHqcvCM8tSYFZ4mVPuiiFpnzWPtm4SZYM4MWhBj4ck85AUAN42zWV2LTqQt9MKW4DF8N2oFZ3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2niDZdXfcKgXwogFUyNwQ3KzQ877PGnSnAfXx8g7igy4vsmuUiGsCNaj4LJQ31UNuxjiRec9DcizCEwth5fpf6po",
  "key1": "3L9HzBUGYaL4rUARQQBN4sWzcGXmiKe1BWGeqpwwFKkpCyuRxb3atAaFTydwRezoHa5dRA6ArhNam4xUHodqnkWt",
  "key2": "3NZFSHJq9szr7jbBcoPCuM3TCZRZ9D3HyvDPPXGJLLer8Anipice4F7VsDDAjhSxqmhGtwU927tUjVLyggf456HY",
  "key3": "3knD1w89DCachfH4i4u7NToSpzNAYPE1K6ZRtawk9vYSbevM7UGX8YDKwDjejWaWubqdHBEjHrs7Tr3dmN8t4EGf",
  "key4": "4bNUJTDkX2oPYLwSPe3XL2171txmwZURDAgN5hASe8xLmxSGjfqYFWsWxyEnH2DHdiMG5YMkCaaWCBnCbYZPetaT",
  "key5": "hPbLPq8o8suc6mrRRm28F76e26bNyi2wjdLKpv1Akx5TPCJwpaU7C7iiiP1aRHNSmnWm6hSRPc8KBug384dDjRn",
  "key6": "54MmpdrmkeJUsQFYM9vVWjsHRytJF3hcQnvfjviFJb9n4ngnvkArYiQYrhpLQHYBGnPL16uGgEWEV6FVMJZ1GEcy",
  "key7": "44fFSenjPtivm2JsS1jUaCwq8B39pYyZiDWUSXks7Kjn683G5PHdqsMh6aMxP44WQG9VHKzBjgh2CtyLM5ma9JuN",
  "key8": "38NDJNFtsZCfe5oWRt5uHEfLtfb1QiifUK9xrRxY7ZzgHvZKybcyQiv8bJmKZbTw9XPH3WDX2cayGDLkBxvXcLZA",
  "key9": "5jaPtCysgEgdWViLjKZfX25vU92HZ1zb6j7c4fZrvegFSzoUM6MmBEN2VWQyy8ysKC1VZ8zDZ2zizxY153TSEMup",
  "key10": "3rp915UHP5qBQqjPBKJKB3Jx6fP4mhShbMjY8v5o8xBKJC8EHR6DPmj7jgHfoqX1t3NCXRK75CtZmgZ68KNeKKoh",
  "key11": "3FRRtMkdcuyrxWgkNDwKEyHRhyGmXHjdDmxnwjqbHP8KvB4SuVCJ3TLPRMS2441PXa7BUJGTCVthWHm3iLejShHm",
  "key12": "2ayzrYENwskwcY4ZBKZn543vAd1HdhfWf5cCdhVakYveN3kgXMV9R7isb4yc34MHJdP8d5uk59bmKhssaNqspDBZ",
  "key13": "cN4Mozr1NThCcrRrucVnZfKVFqLfM2qMfQD5o6aBjK1cACijgtFW983Bfvq9FqM9yrZ73qegTqjuYeuFVZLm6Vu",
  "key14": "3coA6mYQJHDmzH6yV5F7ARMzbyUm1jtPhhgG8zCdoG4Arzz14Tn6i1V4znoAXiynLSz98NVkZHBxUrRVjfPAAJwm",
  "key15": "2htuoxh6MfuNJmYqMsE2ZhuBrDAzVgM9eGPqtDRKr8KvpqWbUwtrPVfwgsGUCewFGMkL27AvEdX2UAwD99UCnjtz",
  "key16": "4oTRo7wVahfM2s9UoGbEbzbvq8knMP3ka7XucUsUcD3mbm7NxiGd8j7ujmqpc8EN6bDKfnj6pGhT1YPMZAx7dn36",
  "key17": "4tJhvBVtawvArbTFNFDTUPHS3YEG8XDW9Qh4YvgRCM8r2g1tA1MCYK1azRHEPTVtHP7sUVCFKiKmSEFSaKktniNU",
  "key18": "2KR6ByVMPbtWh47UWwQwgf4Fv9KTjq8RJzEazgvaTNjDGLuyfqRGiMErW2mehLwtGkhfSUKi3Ws5vAf13eVjEBU",
  "key19": "2Tg275W9zFcK2aRwH7A2eMGwJ7WUVZq7gmovSS1R5KEFE1NQ3YPeowFCLeRTte6GkoSWnx7agpVga17YEBPxVZvL",
  "key20": "2AFm1mq8TnamB2AFZMpTNJGEmFBLdCt5AzVohb6gWrqjqbyLurvTnaNJEVj7UzDztAk5Bhn2Uf6j9oKSj2DrGBVe",
  "key21": "21BL9bsRKvARENqrGVkcjCKZgjrfv7m8wY9cKHVDDHwoTVFew19zV3gmucHggjpEcA98UvF7hq6gCL3zSuzZZKBF",
  "key22": "C4vNbRxhzjsL5Ja5NVmDsVqUK5VRPmt7rjWUsVKfnfi7RkbBLFjFoXkUyiy8pxU9iw39WWwrPZmvgzJvGqwgK6n",
  "key23": "ZXRr49DCZkLXXKhMjeAjFxq4gmsxbKhqbyiUiwxN6Y8BkhPXQPbgWFb4Tz6wkVb5ax7GzZDYBkuFZcVfStj2dWb",
  "key24": "4gQh8GyQsG837Jx486Cvjio9HmPLYpo81NBCo4476GeTfo8zT4tEgykaLWJzPpkrfrX1ku6k9waEfX9jNMnLX6jg",
  "key25": "3ea3AafSp5KoLiUSuHHHfcfGxkdpfChLJYg4STf1oTsxHEhzMhXNB9NdYyCfQQmqBbdSmcDcciV3hFCD9hxqUuSK",
  "key26": "2VEPifQvekNPSwqBDckKUi4vapWiKhGPUW7D6GHdmEi9xuyZJ5voLwmyV2Kc782913cqDWSMxtrAio2VgPc1S3ah",
  "key27": "57wNh426CeGrJeRtPtgw3or5at5Zyt6T2riJcUTMGyo29KcxqKCMMnRX8v3VC6wADD9UJQQoEuzvndc3WmvJD6B1",
  "key28": "4VEHWeNsMQqWMrfuoP4hGe8WC8SsoGuVUKAZf9JPFm5KX4PuDjowNnEKMTHCSVwAv5eHs1qGNAcXmSfEnUw9Zkea",
  "key29": "64wfAGUxMuohvQ2z9fsHNBZUMjvdZfFEYrYeVmBaEfMCoZkQbMeirhvLRnLYCYJDLi5RcXUkdYiStC9wsrsustQx",
  "key30": "5rX3fHhrTiVdCJuNRuk3GXxnmDHaG8QdQdWYRyvEiUeMqnPKkwsaXyRnMGmyW2weYvnx1sz3DpNh7hp9H8hv5enG",
  "key31": "2SozzoubmndTTfkCf3bfXgCCeCqWU4zZA7fwXGbGScezK9b5Kn2Fq9mmoC5azfdNwKgDFNu4RhirGeuYF6pFASTE"
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
