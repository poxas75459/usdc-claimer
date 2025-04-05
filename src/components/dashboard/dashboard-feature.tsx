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
    "5va5fnERRm8FJVJ4YGhM9khJ5U488QEGCFTFpiSpug5RZeeUgsc2JAVQ6XJ8zijEBqynQ7K6JgswDJBHEWEVbEA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VduatriSbXsfb8XAsz2QHLGSWmJ4VfmUAcA3tDfxa9ecRFdaMNnWb28Me8xaXe5U7h5RGg5uMqphy9emiBSYWsC",
  "key1": "LcaW2wsa9KQphoTCrbygCSDbqsso1RtejqyQL1oWwXDyhpcZwaHzH9pBP2Df5gZ6aR8s9S3DAQwyd2v5Yy9BgkY",
  "key2": "4pqj6W2M3C1nj7AixcQTQ2GUoExAyqvwuj8x1RJZwjz93yhN9jT2GBEjVRNJQaRATjyN5KiNfDQ9MQEpDw9GJBQ1",
  "key3": "32MpYDBWv6VpUzE5J5jHLDwD1SuQcfDs9Nw16yvcQmUkgLrqBHtRApfR6SBdX4WWnjSut5XE6GSjZgAjfjrWp3HE",
  "key4": "3H3RqD81eqCqXyE2HvWozkJfDrqbtpoKn12aN9BZt35HsmgzaY5FquHT6Tbnicgh97tMCqpfxKUGTVGsaEutU2fE",
  "key5": "9R3rD5ekYzyGNgp7u6XdBMUovLnHaYLhE14Uc95Dk89Thu5KryQfuB1LnQa4EYUugfhxWmd671mivXn1gwvy6wG",
  "key6": "dJ2QvHZFEmusGfdeEgrxpu28eAVH1qyzs7duwQpo64MoNhyN1tAvyuhfvKZLJv317j8vUzLXrHZc4tK6ZqeeAze",
  "key7": "3GcJfkiyP7gR6X39Wkvvu7wNUKTdqfzHYTxVMhB1fEoLwneLdDvQZeNQwvzcjgqY3xvdggHEFbamXNZoqXrqGs5a",
  "key8": "RbigMd3RV9qUKLDfwnZgkMJqfuCNGTg1x6yutD2VSRUFaRmqBuY5x8GCBUKdSTrTYy6wDD23NkCinfwcAVBtz7t",
  "key9": "4s4SY3PRa7j7752mqWy97eHvckpPQczpM9ZXV1Nss8Uk6tTFL7edCUEDFDWfgK8XAuvvykXedyq3RfTW4PxSPgh7",
  "key10": "5f9DJpieHtZPp8guKUBHV9zBSsVgs8AJh2MguN9PAvqAjZHueKqFBA99NwTvTmWwG7hBPbAx6PDKJm7G5MYaRgAb",
  "key11": "4ckZYu4SnX2ysKknBMqomQUKZxVdQoNpo8ubdcgUnJnxBgCsKDUUjRK2RfVL3EPjnSzmrpsHCdizuL27eLc1Qw7Z",
  "key12": "3PFSxkSvc1unDwhQXwYvMyPnJNeCh95cXJcVzd8zyB6o52pPxP5qxXsjdkCnZjQ12L5BdPFDDBQ1njk327HCw27b",
  "key13": "27cRbzxhoHxxzcAL5AwYwUJ6KEi6DPDgc723wMAEZ8NF7e3YrZxMJhrgi9JyfKiv5wGKjzeeRBNJeoJthoRhmxYX",
  "key14": "5NYLV7fEQNro5WPy68nWxx46RGPb7yxDahyJZpTEvsTw5MrufSSfKEX2SZPY2t8foiv1B9kceeCBgoZfSx1uC1dU",
  "key15": "xuxmgead1FARA6fYXyTkYKdePm6ea678JgYGq4B3LbQ1yDU7PzeHVybAsGaxvU2Z7H7yimcCxkhxExJrzo8MUat",
  "key16": "2W49HSiLBmjHi18d71wsnFidNtwtWqk9PbZyFp6vpxZg1zxhWjStYo1ShnM9ny6WWdFvoBcdWAbUL5n4ovGuAYZT",
  "key17": "4WagiDNubiFCLTrWWiJX8z5kETcZwTQ7hBEwbxQgdp5KMpffYAiCWX7iFaXjTdViS2v2DJQqTcMykHHBkMPtuayd",
  "key18": "541cPX46zoYgjWt3mA17WHwymS6pFnhkGyV7ex7H96NkFSaqWzBiYLhMKxHnEnmpf261Si6Xku2pxDGQp5D4rUwE",
  "key19": "43Fg6wJm8jsNTBuE6SLoLEV2w8G5QPJVLeFYjAuTBQXVHEEUvt9x2TiwXKFs2gexQccbJ5cSTxxycLZupVhsnhu6",
  "key20": "4zfg3RRL7CijCcx8yLyxFMTQ8s3zSB4mgDmpDTAjQcmjc2ZmrTX8Qi8WfMW1mkJPRzEEZcPN3nZQbEKRjX7tMMyt",
  "key21": "2PtcEFWQPrkKZxGay1Gjzt7VzWPBMs9ReGrja9nASufyyiFXWrCkzpwYq5gfonPSdS9D1YPxFbdbi1Go9YzuWep",
  "key22": "BezhpU4mRcf1EVsZtsDfPS4o6or2An3BvHRvuZ4491z4nYhrsEMsC5EHwAziJuiecnonQFhvJrzCf66jAPaxZRk",
  "key23": "kabDrXFPUCjN6H1kQ14GjXRHA6TbGKnuZwpiQdUqyHTy5fv4TdHVpZVDaFzVuZag4x6CcVwZJBiRvZx6Qiimrdn",
  "key24": "4PNLjNMpuZM5eJsH5qQTEoeQfZmsHTmhWBzVmigYddwpGetMjYQwsNqdnX2vMdy84GX5DqYzrnisftXbQNFbcx1U",
  "key25": "5tt7kGUptNurxAoCcuioNwU2FruitevV85uVVM1s2ehSjNmpZL1cp4xeWLgeCz4rowqPosmfD3kxdxuysvgnmGob",
  "key26": "2PeRuByNZuvrWmVphSG76mvHBqQdaGGVKngHVa7Yc1G7BLxzjDThNHzDnEnhUgZbVkojN2nksvKFvwAkmd3A4SdW",
  "key27": "5gCJvVT2TBKoSnfwjh2JbpPx4rqTjnCqz11mttQy9bDfQ32PrVqbEGowQBLToqcKfGFmeZrBJg2y6vSh6axhcGT1",
  "key28": "4caPBFynZDEWNZTyqs6H6HmQxAN4pChCSbQCRkwGutCQFRGjK6nSm6imcJ8svcqZsqq5e6kNQBDsL9irpXmsNoL4",
  "key29": "4L9UhmzBfjvjBBmVobhNaCLTSFc9FcH3WG7FzqUBPntRNWCuqW6jJJcZGb3CyFy4Rr45E7jRcsUKz1c4mQaN8bUf",
  "key30": "iibjqTKxQ5RZXq9CGVjkLpY8pRvkbgrssJJT4a7Kv4AZyiFK9SyBZEKRW9YpAezNmb1x3z5gdE3ycA5tC8qxpBo",
  "key31": "5SYH2MV7SsCHiUoZSFa3UfpeK4opiaQnEf5VFUqMwngALJQXmXekZfPouXiXmgoW8H9px1V9xyvbLbQBGs9wcyw6",
  "key32": "rNZXBgcYM61uLVh7eLn44eBGfLYvFC91tqMrtKvZwiTSstZWuNhSBKy75ZgDMiV6ndDoWEoKSixrTTBZaq8J3ND",
  "key33": "MSdxFAxNVWEUeSzkVahJ2njJ1naUurvz23Worrw4WdhGSszgs6ihSDj4aYTNfNqt1AS1cv2aUqn3TVT2EbkzWEK",
  "key34": "5s2Qs6FU84aoa6pMoWDg89SjKPuDFqJ8Sg1C517xbifHByS8rvnXyqni6ukuWSEmZregcE84H9NRaBcKRD9mYhyY",
  "key35": "5zqPrC6rXYyHuaMTRqUxLtk5UABzVpxT1ckFdqseDThauowYbUVvar3r4wy2YaMK5SqTqtQQx18Q3GsvKwfKWuvH",
  "key36": "2cs5xT5FbiF9dD2gTADDyzeVNaDhj4FXjgydQyUG82dG5nvEy8dMZqdM4nDiR7hapHxWxESEtwpizYrWisjpqrZi",
  "key37": "Run5XHaCyfMkky8acfqyb2cN9vs4S8A1c8NqSctSAAvanMU56gB9zPD16UuBvrHNTuDa6WgbSGxqC75htNn3RBt",
  "key38": "5PuysnYHyNh6RZZXqBmSAtXj2EzTFzpqeyqUzLTh2RrJUQ6YDQLKvZwFgy5LS8At3CiyShHK9RwT91kYCkeqVcSH",
  "key39": "3bzb7vK2r6QjF47khRtCYS8Z3KnrLMLbuhyeYHJ4F2nEfk2eoXy8hczi64NnfLo8fDpePWZy1sem6kWyg28YmTCm",
  "key40": "5GrCc1YrVb1yXMNB4boj4XBn9NtdsaHz9mguQxHyUEhNBran8RmpV96f5CPFzXEooQdVVGTNaEuetdwzSSgQnDzo",
  "key41": "3hcWXSP6vVJHf7wFe47YSryEEu95DdqbG6ueqrEs2nzNDCH8DDoW3yfahE7An8P6aNFfpGs37Yz1NRKVzJxbKQTa",
  "key42": "2YKdogFFYEsxV9v4T2L8rJtkCfC4uRvqqHgwg2zzvrZ8tiCrjAcqohHsv329aisVRshBaypwQzCyoPoZxQL4q1hv",
  "key43": "34TR4Af7xUauFBC7RnjmEC2Xk34bajUma9i5n9KhcFuqAV9b33jEsgb8H2MSQ7VH9UU7haE6XVJirzrsZVUb6k7m",
  "key44": "5XTjv6nPK6HFsT9LRMYgfbbU2dGtGzhFeVRoEy9jNeiqz1kkTWKfTZwL54TJ5vagyDit4vfMNK8a3HrSawrYP1dJ"
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
