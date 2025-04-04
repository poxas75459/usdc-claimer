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
    "oNxS8AdDrnyBvdTWhq3vk8pLN89LHqW5HEYFUagjVnS3GjzyVjSUPNDAC3neRV5W9uXbq1RqgRTzv3YBUntCpwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nRWcs21kWA3Uhk4vAWCfyUVfQYSc4kBYHYJFA4rGW651nAy3mwEXLhR5aMRM7BPQkg23GHqfDM6H9cZQV5M7s11",
  "key1": "3WwF9GGmocKRPTxB54jAgUD3KSUH9S2z4tyveeNHnmoc2vNMEVYH2zRPtQjqzs9C3UzMneYnLNGU1qipFUuJTnxc",
  "key2": "2YG9yZWKaCnA9k2rCTWs7AnrNWJeHa2iJFNhAZptzdvxu5NrXifj22T9Y6dbruV9fg65wJ4Msv8LZGnyHqw8t4qZ",
  "key3": "28ia6yjbcVtgkF8SzMXTkNs84QXkqKYaA9J7xXxCf93cc9K3kGUpj43p3idSoypaSn1HhvBkX3zYtA1nDft8Qe2F",
  "key4": "4YRM6afVZcVu6ejaJwk55AdgPsvTERXXjT8pULEG77KAANJ3a25ihTk3RXzr2ZsCH42khi6FDcyfPBDRwkstTV9U",
  "key5": "39yGfDp7SKuPHaKVSvH4yE5Ge69rD73NCb2nsDsMHKwoUHwKRWktLtm6S2qcVRkvRbizmZgxprafAVLLesjxws8S",
  "key6": "RY4nP1fSVKVagYk4azgJZFk1hFYke24TgnWF6mBZXi1L697W8B2ebAWe8upJs5wGk1Rm8XjfbTmg5ejwjFNicFY",
  "key7": "418vxGfABPoq9rrkMeSgRyFgesxvW3XHwBX1rtxxReLMbYLSWG8zAmpu4ZhjDFwTkAzJHLXcWyyTGXzf9r46pkQY",
  "key8": "3yB1sSNA2CjtXYS6Hd1YWBiESiFHxpcqdEANwY6KpxDK1QsCEUMJfVLADkQhNqnuESiE4sgBMc8v5e6RtTcuGpKV",
  "key9": "3bN5nJVpFnJ93r7gNTb27SmCMP8G5wzDCfPxFBHApEarBPzndFjGARXhfr7i1B72fQsA6yEyPexpeRZCVKPk2nKJ",
  "key10": "oQcE34rdiEA1fjxh9ZjnHDKXestyStZ6PveCTeVE5kb5DZ9N6UBHV3oEfuUCBeYuHxMHBhQBeUtN4pr8wv1kZts",
  "key11": "3jNiekk1R1cUMho3W31XTirFuoTpzbrPgfSTrDXxY3M6DTY9XqCvTNqLvYMZzZfvPjt1JBCew8JMGERYgWY3k3Sk",
  "key12": "56UQDKZ363FgHzfKfe3wnpgGA8D8L7zPUZMhXedFuyoBcFJNJwurhBoMtbV3x6dq2UMJy3aENABddy47mxwU1z1H",
  "key13": "3EybbKCC4PQewiyD2XmVzNxVrng3EebmC97FYmJ1UuyC1we4dvkVP1hqsdmk351m4UNfrteXL1VtAmnVRWd5x2c6",
  "key14": "28xZjXbT5bUtfhKjH9vMcEVeVCMks7rj1HPA1AaRpD2fZ36QtHXP7sgGa7jLC8z2A7qU3iidKAYoVBh7iBRK389G",
  "key15": "3AtYqWi3AcgYU19vQwdaB8oZasbR1qtG8yp1T7YLv4q47FmLxssQnxNofakunJgQ3L2JNeYaddFEbuj3Xe11tL5S",
  "key16": "5zLhjxZhYV4zqbN4yJrPfQ2Q4GwaDKGkqAhHhLaVQLYgN7D5sHpEo6MdHzkqqpa4pqQCN7n4QX3LZmRT6ru8Y1As",
  "key17": "4hhXbo9nD2LRDaZYRaAhDHTSTMLdYzgvHmEhSX4U3Lkk9VY5rFS9PZWHjVf9fN5Uf7B3HpsGSryDRT7FwgKDu2en",
  "key18": "cbmzvboPtMTYwuBGJzu4XY8fbvc5AiXbDn4hYxryDNSxY2m3v7rkw4FQRgcFHM3zFApXbpwVUccRrdyKDLv6sqK",
  "key19": "5tbnpkb2sdroojZf3ZuuyPrNeVtxawW6w7PZezKSd3tZZg6oALzRtaa78amkeMFT5D8UTWKSrRFzrHCiPeQ9ocoq",
  "key20": "3GanFRDMQxWVC5SM3LgjH3367h52n11ndcsNw3ym2PyD8dbXXcK5UdqjBJVEjXgkhWusGjeYQ3VViJefffsx9fjs",
  "key21": "4H53zvGcn4SQdat1YwmdLsGnYUQg5EdC39GALS5oVkKVaHG37gsDh6QUenD8B8MnTqXb5TMTv8fdys7pk1pYTRDi",
  "key22": "5syTDfubWCQnYSJD143Sedg6YB4hMPvZinsn4uoiUcj3ZBs3rSTNorKN3MGtSAV1RV5mimGNZGeYLdhGVdGkuepu",
  "key23": "2gHxv2XxvUtNLJZQWM7phcBZfqQQshZ7RFFfgH1W8cqrzD5UiMYDSd2H2EnLRHutEYfcbF3mTmgxhkPADvou9WcQ",
  "key24": "32Bj3t1gZ7t2yP7XXVvUnp4zoCNM5mZVgZCazUSZhU9PM7cTkVbiiZbTJNfY6DruBvzmRCXbJhWKmXYYafswjC6E",
  "key25": "4L7E5d6Ny2aobVU8FHV2w3qkYAZe2Jpdiq66qxKx1i6j5VkFiNBo2F1UoHPErcthEGcNMSX4wDmd6w7p3bme5wzn",
  "key26": "5y8VJNG5z5eyHc8TWisb4nzGD5ud61NEkw44hKmeGww8Ei2tB3yqYobc7x2Tz3GcGDTnVYsAJPtvSp7sGBJJuEPV",
  "key27": "WJtr1abQYbAZjV8iWAgAywQUjK2vbKm68uBwYr3uHx2LYESP5sqDJZVRTLZ36rJ2rm22jeCkdondzEfzLeMdX47",
  "key28": "4KdBCNN1bLhvvd3bXgHZ4pewBM4jQLmgzStF15E5LzgqKbfPMd1gstvfm9nu1g2LSgBRt7CnwmGmAQAjQqbrLtLj",
  "key29": "5bfZA3VT7RTSGJVAYg3CzVMtnAoVh3AaRTs89dpqh53RV5kSRqqET8xihuMoqa3wGFDhADx69tEfjdLu3NMhc9qw",
  "key30": "3VmuvLQcWWsr9uZHjAf4BFfYHfNnveovs7X2BhYTC3zgD6GX7qh8EUvsWDAXYYQU9Rc7jsKJhv8rGGeHuYv5q8JZ",
  "key31": "5yk5wmPigoMEyGKyeJKYm54rBhUHcitwq7EGrTp5wxKxnWVnqQuFZ8jfDadvLEhXKbPZpr8vcGV1W73EbaW8gpxw",
  "key32": "21FE3uVedGdYAm5Aw8EgCoBCyDYgY1ZaQAX5vxE15SXchuexUd7gJBZhpSRncYSZCfbWAVHJ6NTsgRn9xSfb59aT",
  "key33": "21NkeHojriyiUuVwNqtt1enP5kmV2tBja8awq23efzBatfLjVWn1v1s1mdWQai8ccVovCgB5nezMrJCbrX5kLuRi",
  "key34": "3XNqa1nqmdczi5ZNnh9793Y8BKt94Qw1opb4FvmdGdJC8kDDmMaceUaHvEeG1pbdwwAcsgfNzJzYH7vuAFL7jgQE",
  "key35": "3fV8Wmf8sx2pe8u7mVHryFFSLKAqBTdfg99FCahM3SB5kN4Q7GzgX91KMaUZ7JRaY3jHSxkYB8Scd1jKwuYSmYMy",
  "key36": "3oVNgG77K8c3i6aSPpoHfKTM4smkn7LEZEjXMtUR7bg6eXfvAC5GQMM14mRbi7UVFAVSqw5AbSdb7eQ4GSYP3a6v",
  "key37": "3sFknV4XUPECEZSGN45nnZko9xHTXvnnzZ2vGtftrgJLZyVTXsATjd8nU9M8enQG3MMQPELhfsrrJuLXubfhE3kf",
  "key38": "3Tpvc87CBzfzbS7d6YgQ5JD3TFgv2kTguFtdygn2KWwjmXKartufbbRZ6uynRoFrxtuwztSXxFd8VhTCcv2ZEcua",
  "key39": "27DPTVu4Dg7XW4axfaU4yFVN2av69HHC7VAMnmSCvEjbV1rD3RT89tXSB3GSTMZD4YYDNbq7k1Vft7ykLoJfHJvf"
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
