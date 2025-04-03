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
    "4W254HVJwaBYX6MqoEVHPduLMaNQqBJKS6A2PVJE7KKgNP8NhUVcACM4UovKpXabo241yEYi16bpVGXzB7HkgeGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s1s6L7PkHqcad7nTxQBaYNaeXP172eZgGNpHD6vDfxMG9d2bq11KAjFpYStmudTCsAmSV7Yp7BGuAt5JAKHvAe8",
  "key1": "2vC8UDweS3oj2VYsvuxkj1MHBd6f3s3o8VSdttpfVxSnvQtyG5BKQeGTpMg5f4smHheGgQAXwhnsFhACCEmzZrEQ",
  "key2": "27KrKjw8a7XKxjFg2f8ZEj8GP65NUFfTirkz84YKjqVXb4CVSdXxA3UtdxZs2Nbhy8RmrJDDo6fJCa6JTo2uH73n",
  "key3": "4AMHgRp1a8hc4jpEnWY8BcZuQSh3Z4zDAHSfMy1oWdnQTengBRBDeJNZg8Qyv2eAB8qKCqS5Xs4fKB2qFXGoP5bw",
  "key4": "co3GM6wTtLiBq2tn8NAcqYDQYfbhn15qVSatg58M9xitEACqfhZR8DQYe16eJUSVZciiYFwGakDBjwvRjt6MM7N",
  "key5": "5GXAk98erqAucnPTaYKauWeEUKKTWXDh2SvhwJbppU4yrmDE16AUmz5qeY7ceWt1TUP6e2MSBPURkN9ahpE7xHyN",
  "key6": "3PquyBjKNMPexwfawVqXy9xYXTrpE19mHhKhpgstYak2J1CgYwCBjJkCJnfyiqCSYtxbUzszvoaw87JXRr9mrrt3",
  "key7": "66mSSzc5FnK4FSNhhH5VJqKTRcPyQmgcfjbb8H1Y3aZDYD1UeESAuFh5eoyX1SyH7SPRmgeRvKCDMHCS3ygM1tcp",
  "key8": "66buBV3RmqZiiQgsr517ZUitcb2hqQhVzrvRQCKU9PL2J9QKxHCm4nTcx9UuJneBSHWwdDqpjdqaUWTsBivR7ko1",
  "key9": "4isXkHzT5kBoWGdnG3U8ACeuHNkkFykqFgzJXMdncvK9z9g8FQC2r1Zrtcd7aECBTULoxhnTsMeC7ajAGenyCF99",
  "key10": "2sKMM5L1ozXmzwDz9EaYWLdRirivJgJHoUTNvyZ2zhwPFYCGQUeFScj4eR87uLrQf1TGmjnNS1SpK4ETqEpPpmEF",
  "key11": "2ErdBQ7KErZR9J5NmxorSu6F8iUYVWVPiYN5QKNSVJ9Gr1x2cH6WgcuftwEeVkDXw2xVGeCok188Q4pjNPF12S2q",
  "key12": "5QA6xpMopteWTxh3x7PrDjYvcb1tq99anXR27xAVcwSBbCr9Ztq95GN49RTKyD2pW1TYVwvoCba2eNSDmQJFpBrJ",
  "key13": "5A3P28TgqHFmw5nJVff5SHwXLAh33ErUoB4qEdehrdBDkBeLRb73nV3hnzaXBWUV7DjaXbvSEhVRsqSCsk57hcgG",
  "key14": "5cjcNwcoVKz1SEGVog6PhqyPL8YxpkbhG8jMkBvP6mKqzZaHg3uGTU4cdaEZgWudRkr1UJF51LkbP836ZTEdbY1E",
  "key15": "5piHU25iVDE8CC36NtQ56YxiQizWDq1wc5aFxqL1QAGwzqrxPQXiBjXP4ppE8w7eBFa993BJxkVd72Cu5nisp4wB",
  "key16": "3tufYML1Ko5iUW3beGLN38BzZmZ4bCBymLjsg8Qt1m9wKcpfv1gxbcgHkXiAC7RjLaAXHDExWUvgmPmgdBRS7gRK",
  "key17": "2DqKd44VXAyTGYnczUtgXqiTZvPXZ7PtT8G3TWZrXmjHzL1uJ6qukb3WyddE7BeggEBZA378JcgPk9zXr2Ei4Meo",
  "key18": "4xe6enqFQehwU1XU6xesXX7uoPGpaMhh3LAE2VTau9GH4S2Mp6igGNYxUrsdq27DDeDXUFxvWxcJ6zYqfRsoFJkS",
  "key19": "3gYogqkiXSFgahAbVTkUAPt2JF6didbyGQxS8CyjdxHQX4YUzq9shoNJtTezHDtHZTp8JkftK3ugBSZnL5ZhyhRB",
  "key20": "3VXujbMrfYbw66D1k14gahpS3fksQzBrkPs6kRMeqr29xwp852DCpDhyecAiqqe4RgbVWLvBrx9NNsT5QGqZWzgW",
  "key21": "4yCnnoK5UmcA3QXAsyr72Z3AE4T64AhcxMpvT63AR9VPSJrPNvBbTbJArFqJ9YhrEWNsMFpskRwuNQw69wXqB5PN",
  "key22": "5jYzkYMZiphA9APArxKbgCoiu2TLckTDkTMe6nZzDsm6snbnsh4n5UZogRQFKoxD8f83KE18SpizsiQaCoPbxWaz",
  "key23": "2GNLWvE3eaekt6aT5JXgrxDb98VBGKvCWW78Xdjsn1WAbMffWfcqdthKHNTnwVvHeGais8vYiw6EoQpntdHdrhmJ",
  "key24": "2vC9LxwWgxVCP2bjwCKMoE8z7ASEc1TpK4RgHvDAam9d4Eeimp3aPuzaUtqJqu2NUJnGRFpL5fkZ1ivY8nut2Pk",
  "key25": "Y4L1iWcWVpd9ZsRyjxS49g7D2Q3WNFxm24hTjhJ8pdG5QY5DSDN3JaPoPA8mmvXPv57GQ2rVUHGdL7tLFWjtN23",
  "key26": "4CgJvTm8LgoPmuRFgpAAu4jc6NC2QfqmSj5GYssCa49Zykmx4cXuP7erjZg5dkgRceLZQneS6xisTXS9Q95KqdCh",
  "key27": "4wyjXqBi7nzicMPe6CPPNBorNVB4uKoNXLqDrMYQm7CzfZUHzNif6kwUQBpji4crbKnucxvKPxZtMiv3UDBaz6Cr",
  "key28": "5XS8S2xKbBmvY6fHTYGQgSRs7eEjUTFiU13kPLuErt3iakkktD3JC5xajdHiUHXq1cP8YviW36zZhCQ6rT1zq6h3",
  "key29": "4PcPspGUEgCCW8MAH4zCtMvRDqzfGnLmLNGa8CKsxBcAPgp143m87xY2JPR13Hj8aLYSku4MHDJwoeipy7g2b3jq",
  "key30": "39q4UcZe6uUcZ3JUaXhhsc2ZFNCVDgh4Kne3uPn8oUkuG3JUtEEgSbMhbrfTJMd2NV8qZhcBeZdcmk51BduMiApF",
  "key31": "4yHUeUaPvkoaRf838PybNZxKZGA3pn2QfAwVsxfkpKwQG9VqsWpZ2iJSz6zTpA2Ac5RunyaAqjgmTrmA5Nqp6ePE",
  "key32": "4dV1PjDvba7FyjNaBGrWY2td8dsanVPSRqGUxwfCLcuJ6gj7NyEVqUqD8fgo66E11ZU6YYhp7AwvipsjUaN5uPWM",
  "key33": "48VJeYCAxP6KkzXsmXSQgUApZJ2ixak3oNJCLWErdkHz8zueD8rWb5CyRHbkybY914mjMgktn1DWUHFHUnX8NCaC",
  "key34": "2LS526F2jG2pFBHeBK6jiyXKTffcZs8eow65rhTRGuxWXBXQdMmDiDNWcHXDeJQC2ZoH9AcDQMUzsz1yg9HybVPB",
  "key35": "3J1yLp87pfWTKzydiAUdWmGkijxwhaMzEYboKwo5gkkMGiJcf3krUAs1f5L41MRq5pvr1Zqntf5KZ7mvKHgAsa7n"
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
