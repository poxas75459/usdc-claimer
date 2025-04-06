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
    "2QLqEERUA2m7ZxK5fzvEbRi3NgZ9LESotPLn2gCrScEJNooRhbqV1gg4nzkAGbkXFDPu3LVzrjNF416ZYqUbb23c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ihU8ZxEvzktQSETLKUGJHmubkWX2N9zCCdhQqDahhsKUb6355jThTD8xmCZxv6TfugiEhM7YezDQMhgYkj3cLyB",
  "key1": "5pycfEqqvvgCfcAAPk2jYumT1D2yEH3yTGQcCat5SBW1vCVXtW4CuxA7ukuitx5s35p19LqiyyXjvYL52PUJREQ5",
  "key2": "jGJ1YvBdTqZNx31SuCA51mf4CPZB1ERntjumuWNmo386WjZd8Ai9iKEGz3rhcjNDsaFMC8fC4ZDhrpReb711AEr",
  "key3": "5cJ7u5VqAp4EDsdCpXAN2c9V7spBLXypdLPrWMRsxCgkngipMz4CBJRwZwrHdGEntEKZTPUt5TG3z7boJaZQrgmb",
  "key4": "iG94PGuJnZDufKXV4ChpEY9uBBvjeCWoZkA8v5mJHPa7WkbNazthfzK23pwBYNAVrhZmBHYK3MZk8Mq2Zksnw6A",
  "key5": "5UUa7vkzCWWwWTJSU4Br3K5QKJwBfv7yJNeduCnMdbjKexyFvqjqHdQGxRE6dgqSSV2VVygY5K3ycraoRy8ydvYd",
  "key6": "3Mv4afTxCGkfBkzCJz55jz7p2i1j6WQcVmcW519JfDRB2rzckCntig9GF75axcBCvPahPT1E8kTkCcnuefVMRV9H",
  "key7": "3JrNwoehRVLCuuk3EFrhs8rnENzTvZyiBpXMVszu4bGPNHM4G7rrTw3UzvnPxDgjCCiUo4TmZvjJFPgs18ontLdM",
  "key8": "465ezPrvq25JGRdsAcdTQt7oef9EDguFSYSLTdSWv1gNDH1nmo88dnryVHpSL4CpaUpk7oh2WmJArHKsjQEoLSEe",
  "key9": "2SidBqSfWmYLTHV4pb55p4bGydmXE3yWMPd34gkkE3B7cBPL1cgPG61SC4JFeLtifLobqiktuiP6DTo6JRSGccvp",
  "key10": "G2FREizNSgKgmuXkC6WDDFfiYogRrKBo3WFU8FHcPuKHmafRDWGeyE8pxH5Y3F7MHNPenw2WXn3coGD62tbi9YW",
  "key11": "4GhmMD7uhMvFCdmxwSEWr8fEHtieJGhFVznGMTj48qxSVqBMj9koFSG6LPxetVa7hmMCRuzw9abL4QsUptTrtHLi",
  "key12": "2dhYJE5w9Ka9MU3Ac4YeAx5iN9sjFmTijMPoS1VyyeQqqDD87nNyPkPQHAaXFNhs4qLxtzQLiosmCv2aSNRvAzfq",
  "key13": "2aSPhaASCtL89EGTupnXrenyCNqTQShtZcDYKCNu3Jm3sobZ1bJwYwu6yMsVwxWHcJNqwPqKctbVmV3hyp6P7Ybt",
  "key14": "3cfuTuCPH7ueRx9EW2qhVEXe3oeAqFZxdCSRUn4WaVsbKzN4aJKLcWceQgAjnEKHp8mWpBcDVw9aJHYdu1L8ackr",
  "key15": "5oMVVHtTuZP2YhXhMXjiuGqJmJ5sDJPsGJNRKJ2tL5UUwCpZSJ2VcEeQki32CMSPxJKtjFXr7gQJTiVU3iu9Ve5t",
  "key16": "63urNLv13D6gSEYidGhC5ddTUFQRrfNSPPTVmGXJPmjJj3446FdFRDNDjvhnbmr8Ew42N3PuEA4Nx4E4QAZkh8Ct",
  "key17": "2cCQPX4wvHg3V314BjyriNgXCR1yCoBnH7xwuwge8MGw5CqECEefakTEyoQr1FFZdmgEVzdiiZSG4LbFMpSWjv4Q",
  "key18": "2uwpmjccPYNcu7ZnCMvQAEUqs4MsSWEuXq3fJXyi9bx5jWPFYaXeanCxVpqcRqoT4Hp1zu8fvzx5YiH3bTLCfbYg",
  "key19": "3XzyjjsM6hJhSaUMEouooQGavFsaDwPth3gprh6R6Uc9P2wC6YDU6pFzAKbSoD2Ygo9Vrjb7rJYJHPAt3vXgqhrm",
  "key20": "2DoXQvSEg5xSpaokNRbVcSJDxa8UB1NUnDJWqpesTb8QbVNsdtbaZJuP1Dw1qAoPiJ1FqZ7JJip4eMJ2xeBjN73X",
  "key21": "3h7Hq1XucsN3pjN35rkWVavVHUWQXhndEWPCTXzi9DcN31d47zj7KsBD1VBjZp4MtyzD8b14hq9E1F27EfkDhtWJ",
  "key22": "2hSf8cM4N1d7Q52uDnPdMhJYobprXCZPfdpYSh1TeNhDY8RkUnt59rQ42ziEmQwGZSTqUgmYqKecjwdfdudAb91Y",
  "key23": "mU26LQHxpTnusr6dGM6aoXTrrbD32TLkttAAH5SFwarusi6NSzqJGjuVaEGNb7ZoMD9yHtqkDt6U4ehWsZHy4vf",
  "key24": "3RcF8XMMTKtdpJJGgxBtEVkd8PAAAXsaVji8CWNtvhKQYpGRcExbnG8vxKsFockbokmtMBFVamiELRqNTGsdX84",
  "key25": "4NFMJzf7K5J6Xkq59jUTAK9qRDWT62iEn7XfeSNN4XshQvQo2U4qYSpFfRqYtxLc9UtcxAT3XUA4QpdnJWwYJbD5",
  "key26": "4bQSq7UMukCg5jnUgav4GkVSFGayB8zFiVajXXfuvYDoYT2mWD1uzeBU9Z9BVushRS45YzJz9w9gKKVw9oAsJ2g9",
  "key27": "qXWLxEeh1VbRFNwy5tGbDUor9puspjTTgf5bmuucKrcri6J52ffGmhdspxEgyaJcbHcBBg54N94XdUWJHyvTZGv",
  "key28": "4mYYsSt1jxZwoBheJGfBRnddMPq9ghmudiMEhvi3rhULyh54oe4wGVTNP3Z64VjaKWBRzgMMPzi3ETVewr4EdjGp",
  "key29": "2U7w76evVk49yPSpHotRqWwHKh6TvF4AMrGShHLe82Mupto7fvAK1K9MhBnBEpFyUnd32A4efKamP8u6f7gnjpS6",
  "key30": "2seM3qVbJzYMwc4bWCb1uxrZXM61ez19utKYPXdnvKLdFfdmupaMP9xFWzyBeJ2yNoNi6LRhuhatnsLw4BRFX2Jm",
  "key31": "2xwrx2sohF4BiFE52WAHDdQ35fdEKwSZZjxw7cBoGAhPMEs8MF6HobY8gitLqsto1DuwP5vwDPovXwmfC8AViK8i",
  "key32": "2Kx1NHQ1VETJFRqDmLQTeAJNJxPNsv54bYtZRVMMXh186kYMwccYevumcSpEZeMeq41GYTF3YujBw6TwfAYpfHSp",
  "key33": "5J76iaCE7DUJ72UAFZnuw5jiewmfo6VNV5nvuTQ5Z8n3yCXGHX5obLptNQH77UrGRSkCXC77FJEq4rSiYBxPX7AL",
  "key34": "58TTwC6c1C1vDteeLoBEr8rEUemuidvptR1MXSJ1FnsDxZkQu4koguVxqoeVjHcVmS9Z3WHrHYv2faG5eUadLcgo",
  "key35": "5HibScbRPujS5Lt2ZUpdNtLCbTLUjbTd4SVV1hoYS9YNjXqQUSXmSPVQALkuoA6axJeoveYr7pat9byAVmGfeftL"
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
