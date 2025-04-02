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
    "29WwHjjDqwks89CoDYvQJ3HjmoKGyFn3znikJFn89G88Bibg89CY2qbANdr8AgxRGvcHDTvU5zmTEynQtsfcBYgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UPwL893Z66CAThRsXSEmT1W7nDDQgqMDTuNWibENhpeyxp46q5td4NBqKAeKDwMoj6bmLKL9jijPYCxnfRTm29u",
  "key1": "2op7jv89WP2LkRUcDAt3y91k5cbCCbzS72QR4FR3P7VFqpTV4Xn36aQv48FSLKbpTfrm9nfWexjoVhWXcfVAqnwy",
  "key2": "P546pfubjo6VkDKvMeHfgdXeSgMe6gm7Jt9qTLfr4DHyUKN6TDq6YYAxWUh7EaCsmSGP1MsM9PqVvhTdq6bHEZW",
  "key3": "3UCvvd9qm3sDPBW8XbmW21AZY1odgCr5ZW6srMzWQzgiNc9Jf2Ldq5247fKbTatkLuBYTg4qM2Ly8J6nN1DePkWh",
  "key4": "2cRfcbv3JPfMd4cDDvbmEo9WeFRA888rVAcHkp7FbnEKiiwaTeNivwzgZUtvs4uK6DQTeUKHxmZvzP4XjnqsQUMj",
  "key5": "5W1XYznWWBbLSJ1xvVQvJ1jHxGQFEZcKAC4Ud5fP4xzx4ZTvdbKrgh99gSoJC6Kx7wEwx8MskTQFnumMm5E278hK",
  "key6": "62ZkiSQGiY2C7dAWDg6UsunQe1PF84m9eaqb9U564zUREo9YQRvGpv7UyYWDFed6quJKfh7HigPq5AB6Md49fFum",
  "key7": "5zR6FfVYjVtt3F6g1D2TkEcExBnVdonc2jTj8FEKuAuUZkkEJwu1EAUjU31QSxoPzJgWrgEy9UzW4JpkKQvtGvsg",
  "key8": "YYF1aHAxy6eLsN7ZsJQkqxBdo5WwQS4togzZdfgTKMLb7qfVhvyzKujwyfmhAduFv3ddHdcFHEDPrKsWxuWLKGi",
  "key9": "2BQB9ndr4ZBBz3nBzYVFVYoUD9jAXrdX1TzdP5s8RNoQiauM3XZxoZajnrciHWj7t8fmMq9mu4H2fvhC9GNriJd3",
  "key10": "2sFCch2NirECXNY3mpDRrBbodT2NoAPdFjhF3vJtdRC9P7M8pEFhxvWvQMDhv2jF3oEkCCLpEHE8xuDPuqLLb3L1",
  "key11": "2nouMKXLea5ScnBPwMarqWmR5UJGhaQ3fyTsgDNNdvxPrZVZtBwvCKKmh46xKHSJ9PQXdFFFBJxuPtFoUPGL5gAV",
  "key12": "2VcjucHjpt5nrboYW7QG4Hvv3i5AnmYUYYkLBh9rPd5KAkX5ewK43RgAh7yJV9xMoXULbnZJ4iod4FotAvA3ZqX7",
  "key13": "3kaxmpx73jH6Sapk48f2sjjcH3J6yt4QnvXGQ9eRBVfMGjjvxSN3u9YLQkPGAJZo6UQeKBM8p65dKYvVVf5wKi74",
  "key14": "3ZUxPMsQhvhwU8X1AZPQxKh2Jvf2xHbNuxmm6DzKvqJUuTsj4W2o2WvJ3QFzgzqJynsF3wsg2hkfWTKGrLZXo9H7",
  "key15": "QwFkS8JkVWpnYMSvrKrm7dmKDqcpdxtUJTGRTJHiuWJVe2RC54e3zWem1uWxN98dU7Puei3mLKRsFwaA92skyMt",
  "key16": "4kMuLc1t6yiYP7Md3fUccydNH3mxSQaZMzCVLEVPhFSbkpw2AbQZd2gNGaz5rEd4Euxx9Vj12itChotd1HAKJQQq",
  "key17": "jSnrbNHiW6fMmXVYjWpSfLfBE6bFaJdTSXBsY3yRCg4QCL6uMAU8HCmfH5TiSHtWJr6jc8mEEyf4TWVYs7JxyNn",
  "key18": "4LPS4XPJUfE5B6YWQGCU1sRG3CjyVeokMp4wjQJftKEYckjX8ua29MNo1kw9kGEeCnVBqek9LVpuV1SW2WA2GP4J",
  "key19": "3H2tDT2mgdXBRDNm5mH36GkmJ3RKwp2rCUGxvFuiCdapd3jXhRx4wJrGjU5uetcvQ6DzHaSR367DW71phQooumgm",
  "key20": "5xpVBhpi4uS1YGnTq4MWLFK1TnRxifAiUzqGdby9rj8NkpVBGBgpLWzreFsFzYNVJvWiv7xjw9TRDapLqy7Qin8w",
  "key21": "Aug7NCdyAB5PE2PYsVsiqgqXUmFU59GNmot4pSHD89mNBc23pkZYDTgMx5cmRHJ5BTYL48WFDdZSNUsCKjNQCRa",
  "key22": "5LnzHCh3AKzYaAT9zepfgG4bTLMzSE4aJpfN2mEVhFPC822kurgBBhuxSPhtB15WzPSnEXx2Z7RvHZ5RWWhTEVvv",
  "key23": "2zTwRpHZJZ8k573h2LmPDUnkELAHyVW6ji6sj9EYzJhEQCP5JMGHn9pmM79KbQNyLMSQgJdBz3N4zkwXNacvHBnE",
  "key24": "3zgAfZgog3oMDbJ4ehS3RTjahKNSwHXSGz9mthiRZDJuuRCgNp3FCbw3zW8Kgzopec31y16oRb2wa86KFecmyqPC",
  "key25": "36KTHT9oSmvurJ3i5HvzdHU8f7UegjvEcLRLNgXjKUTPo4o7bHZNP7rwnA3jvefyrA6YC5Zub9jnxo1Ura5CfBhY",
  "key26": "4u7DkzqhjNKbTyLyW3TAigFLBgqPZeytGVDk2KZeXXfByi1v73PVMJmzKTQaGq7oDArtZR2QtoVyjfR1Kux2w8tW",
  "key27": "36VfMsqdQD2ug3NLVfQGA1gRwLWTLnkL5Xyyt7sEtE74FHFcoLoBRnTWqmNurAPCxdkgP9cgL9BfySWiFb5mwNi3",
  "key28": "62Hf9GwJpuEMQBH8WVKFcFUZFedNA2xpq6ftj1QiiMKyGsYpcYmBTXNFe1UPk5XrdPebSzrQUiUUaw5g1w4SbU6s",
  "key29": "5vpQ1AmudkiqYhkp8t6JJjGvVz3iT4xfa3Ct1wGSTW4VVoFjSDiRPGobHduB98AtVZUk7S731chNNrrHNMjPiS1E",
  "key30": "5J4HoCyQRd8vvVFJUS6AcBkY4V471rbg5ZME9cu5VySDcRDuFGi2Riao9HGWxZfK7S7iVQ6MfSEFi7uJsQw5f78v",
  "key31": "2joiXWgYSknA8fiZkfgZ4XWNHsaNko7rZa7vx9ALaqtCXvRdVPcVmBLd7WfZETjKkTxHr4KyMHxaDiGJqtYrhUav",
  "key32": "4KYRbt1ekfnD8gvSNTzKMSkH6yDExjHzbZ645xkNZ6Du8M4Np8HgRs48Qpn7uVCqngCoUeAfVPCPkt93RAUgWCm8",
  "key33": "3mVGNBfXqpBky1YUT5SdoHzoacirrAJSHoVwZbPRH5f85eZ3KRoHkJ5y53u9hXfoSnCfqt9Ynj1togMmYDKPE6uc",
  "key34": "4biYCVozYhQZPtnwa2FEb1DUJ1g7zR6oizeMySALBrac9KnnKVSm1hLE1vQoUwxMfDfrpaFdQ7tA1zxrcxG4JPNu",
  "key35": "3EijyAdEnFgftXEfV4WJuutycuyxTrCcp4egx1Spvg4NytiTAS2PLohQ9CEvxbSxXcYyjbN6v19aCUwo2fkkrMw8",
  "key36": "2ZyLHcVrbdseUMcU9ZoseT3HNMAwFhxtwD8GAuapCwhfJpVRvhhsx4Yqi2JUvanmURNrozzovPeQDPmpyeEZzZgi",
  "key37": "2949JcrTjGGyf5nK4pe1LGwanPCfr2GbVegnLQ368ZZdMpCQwGxbjVZrDo2pQj36anoYtYYNsj6ZgN4DBCN12h4u",
  "key38": "2QEwJ8goQZWNcEJaNXK88kU5EBVXDePvN6YpiBLNNYVubU76Pynx414fJxktYDHJNpAVukhZiSUffRW9MWMLd1bS",
  "key39": "3qeyohCKN5bcuM6UQ1RLtMbEViRZVBqpCpWniteV5sxX3rxRB7p1KvktCqLweLrADWmWPWMXvu2ibq8WpuimzPgU",
  "key40": "4i16AyEbecqsewL5unbYUP4MqKmzrUkq7Gc1xxoH5iDM5UzqYswE3UtS1e4Xk89L6HXakdEeUJupBwjRu4V6vdL9",
  "key41": "3Bukhq9rZuUaBzGxWyfGromGBKt9AQ521qhnh8op7qnp64qg2EJv3ke9g8zBya97vUrgihmoZMNUqYnPUvCu62Qx",
  "key42": "A6TgbffFmkG4YdBXYhBDffR5it6VgzLp6RMLBHnJ3DK5sbNPk7bdssi9FEfaz99KhhqzycBa7r9oJ6Dxk8NpFpx",
  "key43": "4iLStzSitFbJVe9VSJjDwyNpMqMJJRxJW8wjyhf9vhGQjNMr2rAWtLHSiUCgGn2foDpiRdU9B9sa1ttju45DtM8S"
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
