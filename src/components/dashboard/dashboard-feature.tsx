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
    "41qfpuvx38ZvsLo1QTGAHn6mzTn65wesLLxamKEEuJAcPujAoBDdTSLpHpvKBf1xZVbHV7XMXjCbZTJ9B8EAFzK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vRm5PugYdfvtpidaKQoMJfHYQVYjZcm1AqSM1xVNdWS1MCppnFYR4c8GhUn3WefZRi7TR6aYRJ4KWbiqJ5i5Uzi",
  "key1": "2v4nbvLNaFYt8k9nPPhfts5GihqoYERvbKmsNDNCCJpH3awtFbT9w68W9EB8khxusppBUJviVKPfzdfA5ajrj8WK",
  "key2": "2Vz2cvh588z8XryJG2xs1QMdJUq9WeD8aqisXeHLbvjuyqKnapdSEREPN9ZWHVNxU98sxLZ888hrmZ4j7XnyKaEn",
  "key3": "4myNtnhfFdxepd5EQ8axW1t3bUbgRpLk1Ti3jeRWoxgit1dQTRytGE9jeN55fdE4Dhwc67cM42oZcv7ehTrkwLFN",
  "key4": "vYJfEe9XWgxZJ4r3WL3kBLjq5J7Mt2iL8xwwHdxgDePZ4ZiV2UDfd9hpTZhqUSUxp3F65JxqwzVy2zonhLCNLHd",
  "key5": "n2Vmp8nHjBwDAEnGMRno6n2CFo9mUA9u25iGMhXnFsihgzzWowUm4QCTDE6ZYp86V7MPVinZThWiCx1XQoEXCzY",
  "key6": "r6NTYVXLXRFbGzhjpSnVLvX3TvzxUtME6E15iZ9tiuqFSRAqSGfW3Bxe9hyk8EGQ1ifEpoWqEze81MFJ1ZRFCKp",
  "key7": "3HmA678eoYmRStHXSo92qe3nhU9JuqyUTVAUN58QoAZ76jGwXLcLTN4GkLcLMezgyRS9R6EaDHs8iAHhaVdD8jMo",
  "key8": "4bseKdiujh9fT1v3Zdbvf2yeokJqeGsMNkg2J8xRa2ZvMbuvmdGwGF5XdimBpYxDAhM71SDQLrQPJszXfeeXhBBK",
  "key9": "3uMu4j8FLfTsk331CftTcoHGvEcttt3zF76QJz2JHM1Ye1y8LQiqLtgcJDWsxXcT5gY9NtbpAfmZefTM2Zobifbj",
  "key10": "4YLsWS1oLZRkD7BGbmWGRWfW85svk3ZGspvcoH6zGAaysac3Dd8wok6kSv4RzKtwr5pYMpbzNJ6zMjfmJzo71FKx",
  "key11": "2n5y92jCLBiw8Cxi6HDBpcMrxajtGi2UD16SbQ7mMB9KcW8R6FfcM3kGCh7zg7bv1ENP4ppxF2vkAe8MjuSTzUX3",
  "key12": "2WGknHXb96Hg69QrXYg2HLdHYPWuvnNs6PqdtujyJR3J3ibRaEKPAHi3ukd2cADtutnToukKJ3ioKH28V2yTMye7",
  "key13": "5BFbyzcAYuFTj8wZaMGequu1fop54LbCNeFFuHCuw6BVCi4ctwEHwMSd8BaHEYSVKsRxQvackJ56Bg7htrrAH9Ub",
  "key14": "2nspu5M7DRbxduCqmo1rrUkmqPPigQaGoR1fs1Z2KbnEkjoBRusKziaufbpb9qmtMirMPLVi4QCWcAVhRE5mTaVS",
  "key15": "46xntjdC8pNyCE1cp3Wz878QGDhPEPU9HRsWk5BuA3oqtsxbRUsu1srti31nD7bj4QqbNBuqbgTm67crqyijrXK7",
  "key16": "5LvTfuD1YTtesDBMvYVTJ7doipX5x4WMrWadmYrpRdf2dXhU4go11vx7ZbRdyqHF2iuhmyCx91GYTx4BgaERq6Dx",
  "key17": "5EdAGd7GUs388h7x2WoGZXViVeDszHzjyP5TYPAfkVJFAwmz8h9DqD4bQcp1dhHR26vZXyj61bw5ygkny7SEJuEW",
  "key18": "4HbbKVbw5asCWJngH7YDuvnviDyaydK5HtXt8Zo6huhx7y9tv3H2Hbh8pQfVdV4obZC9kebSQY9Vjoa1VJBB9hn",
  "key19": "5WBXiFZCLrNk7ajJu24FotPqrCyhknHGqcF4VtgNCC9ygHamR2xDtA4ZPB8JNDFG4PDPymb3gnMY9UGCECFk9zmo",
  "key20": "53XeUMv8WGfeu9A29dcbybEZwrNVB1EULZDX5UYKwDrE7FH42wkceKeHHwi7UVSFMDzP5zYtcKAobWnYkUjsLiVW",
  "key21": "dTM4FqWhZKqgaZvCJNe6J75zHAu7ST46eDxpnBs9aqUwBuqBe9rzabgZWCxh5NstT3XhZgavCKdBcbibr8Q3w6C",
  "key22": "2oTUtP5bfNnFNuB7K6U3bdn9tto1dSaquV6aMCZPY3zP8UkAuQ2F4ruXma4Y1iTdXXCYJt9zobrHZEWVUM3bEHyH",
  "key23": "4uWMMKfExAUyQnqXBdz3P7icmqkuaxnxdfjs9a7KUUmz2XeqEjZUxhpX9txePwdwKaKeKswv26v5iXBZfpPpppoC",
  "key24": "3Qd5y81ZduViFDc8DQDLhVaYRYa7T3SKru3RMvip3sZJkSCA7rhmLGKJsBT1Aqr41JMevwkRB7e6tzV2inhifKGH",
  "key25": "4kUoAsCbsSqfp98cXDjdZ2Brc5VYXuLmSE45u6Z5r9JULoVvnq7dNkJLxCRv7546LiEfEzg3zWkHeTJY1rxLrQqF",
  "key26": "2C6e1AzYRPYjHsL6DsbNjmrFS6RC74RSHqou1xaFEaHsDPH8RDNdpmphtxHyWQ7s9c8HNiacJT8Z6csWzw6AAKYY",
  "key27": "62txQLWLXCgdSQiwLdWnz74iaxCMgudaTGwMRfrtPWectWxJGg1U8t1shziAMY4yA7UDKpnvWvJbpUqryUeU11DF",
  "key28": "3MTwCPsa716s2rHAHDpJAwZfokLYZ9Ji2emrg6487XMQFXdRrVgBw13vHURhDeTEQrJNntp42RknrP2KGWT2zEpw",
  "key29": "3zg4qsho8SWLz7jq3vvMjtqMb8iivFrNMuXzAP3J6nbjppgj5XbPxaRcwtramMJDD2kK3Zoj3nNorWhWTUR78eLc",
  "key30": "56i8F7SD9czxkNjehMe5epPNAoCQTMmrGAvg64n9CAQZMt3eEoqoaF8PDMDgADdTf8TkEaeSKsTdeV79ZpeDJ2rW",
  "key31": "3udHEtG8fxFvhX2aKNLri7TrPR1m7eF6iiuG75TE6DVX4PMubxGpQdFRoXb1JAtUg6igTvgwFW6XzBrkWAavJwgT",
  "key32": "4zvMXvfPbtaoRGTuDdKcNPRTFArnHsJzLj6jjmNiSYKQEhhes3yfprQJZKu9Z7PzqRCikwoy3JJWXAk5KXcovGMv",
  "key33": "xzcYZvUmRVmFfixid78Tbx8hNh3HWcEbvwMVkQzJFaByEse9Bopj1HGU8ZiUJBiNCfCUuGk2CMpshLwijHh19vF",
  "key34": "4tVp5BQp74VKWf63xqJdPWJhUkacHxF1nWNsXmJDMHa212d6Vvxko8GWQvToSjnMpk23KaCN1UM7PrsEXrTBRqcx",
  "key35": "7DuoKrQ8MpZLptUTuZ11KV8stmGER9A5V9q8791yMmxipvVLy3m5PDioLXL9qD6R5ApiH3fUfU7Gi3RwbwBBYnX",
  "key36": "Gkqn8v44XsJKSJWerEiKTXqaXhGKkVnbr7HS1saMmwSbY2aCqCCqHmTCTYiFDnaLaJBFTqToHwtV6iLozyyKeYG",
  "key37": "2zTaA7eMrt79EWEgGT37AgB8knRpFpNxN9aezradPyMQM1nvSrWo8qn83yL2aF5Jpf19KGZC49NYkyALJxx6fgJv",
  "key38": "5wMfFM4413C7eZh2DKFtiaaP7E18k7g8Ykv7qNfqhu2s1MpGPafUYXPDqzXhMBt6WyuvMuZiRkUzisj7GivEWHGH",
  "key39": "5ht9Kn1Zfh3HRQZpZxLKuCyLGPD6K24Ce3m7PzAEjupKGQCT9G7wD3yGikmmB7L3GEXesATQuQciBiWhkWVg22um",
  "key40": "2QtMnQ6K5og56pBLmaTTDcDnkxeg8ZyqYuwpS8emYS9CYYRqqXccmFEPe6fD11W9nNYoNWGpCw9UmgD1Q7WcuJFA",
  "key41": "Pwy9eGDFqoB5TU7fe9W2Lcfp7mKZtcqUPJnkNRJYaDYnZoPcGhZzb4KyhrmTFQbephCBwMU3scZLw1Zg5w3EwhV",
  "key42": "5AVq3zYsjeU147Ngyb2YVYMzdrUdz8sog4v5jFbBSCL7Y8bm3gRhtznEJDbGcL5MTUbShpzw1pNVmbKSzDiKxxVz",
  "key43": "66AqCiX7pkVKuh4BRo7rCYTH6b58SvoKcdKrqzjuatevJLgeH7y5xRv5CxiaMUQVtnwqq2YaMmNTz5My2DPSiMHx",
  "key44": "35jQ13nQFaJmP1uNxpUDYMqY35ejxP6wTURfuJzFJ5zsvBpTkk2niNjWy78dBTuEMxUjtZquHbHViCV11dB1z7Pi",
  "key45": "36wGt2VFHLFkKSPZh943JM5spsxk7A9sgzwfWhxpf8x9ifyG3WCfJpMT4zXxgECejYajXyszkhvqA4nqtr65J2cx"
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
