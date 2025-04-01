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
    "9AQ4KPtf6XVwN5fH551yiELYykvmRaENnW2JjFdSV93hat5W2EzoKozRWwVwkeigd9sFJpDMbEmL7hsj4axyyx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kjVQb96rUW1WhuJAHn4Twg13FF2czvLJ2icLbJYRaSFrNPs52HqDTHmmpNtFBwtL9Hkg6EykkYFnA44Mc7y9upf",
  "key1": "5Xep119iV4dq9ozNT7xH4Ke6cVMKr7hdxy5HnVL5VBRr3N48GB6CbSCcicbwwnke9tQvm1sboYUwRzD5wKq2yCj9",
  "key2": "4MXcvw2cWNh5KT3fP5Fe3VsXUQpEh6LddS7WMGu2uBYweQVPygi8Kj9YLhwDorBjd8JzHih1RFYaWcsQQGqPe1s4",
  "key3": "aK4VrHxMZj8fiTfJH6fXWtgcoKLfzWFrE6TAkozoeUuAjCd6XwdonyGJLtm2ktWMUs6qyTTVQotv4MKKgPL1cWV",
  "key4": "2qCQPhqnYF4RRKQNtuJQ4p42QHR1hn2eyEzfKTFkKRCTVVcBnzWDk5pPFj8JEmLstNEomX6bqdAGGcPJbiMEfh3x",
  "key5": "6ts34P8HU5AGGFKjihxRUZR1gD4VLjTeuT1yV2rkvGvcMqJgMxgT5nsT3tLFEmNExkt3xqZZjKebK47fE3L7oWq",
  "key6": "4A8b7vsRGQu56NPCn8PC4ANAyzF18TMSR1qQt4JY2Rn5ar5H5DczfRF3UwkB6UPRKPAx5W5QzBp2bfKACq5BKdzC",
  "key7": "4kyiz32b9SY9qMXpUKzSg5MTpFzNANBHdRrpMdX4PSMNLxAuL5ErPLXdUe9bmGFbi3dH5S8xwpnXbbxS8zs2pqxP",
  "key8": "2GczuiXXSrbyCSA6Gbq2hL9HMxU4bY2nq9rufUtcofFzA3f8QAw7YM5PtLQ5iQ36sieUA4o8gKTvzEg7QJRgU757",
  "key9": "56ajpMUMtuFHKf6TKSc3Z71qFsDgnBHUJzZ2DYpUaYixN1F3tNH4rq7kPuCQKE3gJ6orydeWABEdA8VcGm76hqkt",
  "key10": "2n5MxJSuwMkdTQVSp8CcGDryS3dEcXoRQFRUrcQHh7qPmUbexvAdFiMrXHhnq5dnwcrFcH76KDLChSuRBc6yshrB",
  "key11": "PBFwNNkbt6v3pxo83kacfKTHw4tUCwuJ6UfRTkCBrgSNhHkikZR5HAfnNWhNmWuBqors6Etqj9ezq2vYnkUN6DH",
  "key12": "2zxsk82XFxG1hcWthM4X3YxqLCruXTd6aPBHg27zMVNYbD3AdE9q9qnJpLK5vAShrYyqqS1TkNbDYaaGvDVSu2XX",
  "key13": "5UvhgfsuuWGZokww3HDLDDAQ4x9SYwiy6sUonZEzfuA7zPv6noaex8X59MRTbnsEup84Xr3G2gpoRqMx8BJ1WMqu",
  "key14": "34EnknQoJSBsQcSMoEFNtAgvxE6Zts2M3yU3SCPqBbonTGrv7d8Q5q1JF2Z2LAruQQNfwSc1AKwJk3nnHwPPdnta",
  "key15": "2WPySTVfwUBG3A5Ft1kdHUTqmnxgERsGa878dCyTTqpAGfz4CyvGn5KtNpZNjdmKYPQns1mxqzJ7QkLVCVMdyrYo",
  "key16": "4PyzppAMDjTxw1mxRRgmo2VFrarVcz1DLJTh2wSMa9HtHk4ZG831M7RWBpsbeqTwDxYRMy3PvenmZ3M9vCcK7wNk",
  "key17": "4S8eiDAyfUaNBSsNosAykkmvTYvBwhBsiDJNXH6X3Xdd8hrQGNGgwYvgNhQojkLoGvLRzgPDHoUaT8BFST6jCjWu",
  "key18": "5yyRFc8pexSn8gyqaxmSvmfhQ1BcU1nNzV3qqifqU6C3yo7M8CCiowsQuMWzEThzjCmVt7ap4UJRf6pA7deXKQL2",
  "key19": "5WdnAWtG7mw1ans3euKKfRZ64p3n6Ap4dETTSZnKknGCe6uY1nE5BDiguxKGzaoNFLdJsykzmSUg8NqgEXmhe2Td",
  "key20": "Hdwkh9T1BTU5TqA5n7N5qbSdfjVgb5iz1HoMCzE9QL9bRK4KDhq7rK5oBAFnxvsgMpKUkxvNkgAuDkHRmJaN7uK",
  "key21": "3pBe8gKiwHPkMv47MTPD9a8tpEQUwXc3QYdmxmAZDR9vRZzgJ8CLgqmtnKTA5hRGSrz1wNhepJaS5rQH9pdbRk1K",
  "key22": "5VhFqL32KQ9JYnn7hVvQCgKJKchBaAEwns2eU24LNeh3ygfKpVuqDgws2vbuAwAkPhst2PRamGG1NCFaTBPJZU1X",
  "key23": "3SkrsF5vC9jRoKfGQYgAN3EQ9jyYnpLdSGXS4W7FZqg6qAtSHViXcb51B6YtxWA6fzGfcbizB81qSgsqAodbz7R8",
  "key24": "EZDzHBWr2reS4Es3V1AhCqVM4SoS194X1EPMDPsa7rTjUCyMNEsSiQ1zxGf2tYpSKH8gnittUkyQgEvUiDkDwrN",
  "key25": "2yZg6p6gf6qcAXNhP7fjmqPgxj1FR19kWEnpDTUPBcangP4beWUaSwWNxTSzUJfXTWnY7qQSc1rtpnraWA1mEExT",
  "key26": "1Fwzx3A9GY53HSTi2MYLJRuu6JYqakn7x7G3ufqemvdFMbU5fHyw4dBSfEHaMe1yTgYmeSPLQoy8ckmn3WmAGVP",
  "key27": "4x1pha8WqE23gQSU9C1gArZh5k8yWZo8x5UtbK3qVZjutLqxjeZkHJbP7iLDGP1cbswcQ3MiUxRhw614is1Ypbv7",
  "key28": "5efAUsQy5pnfup4LajFLpYBKQ7oCHNy7NDmCkYdRQdr9uuTnJtEpDhFMQqR8N5yhLwkuPJ1ieC5fjn16oGLEyMAd",
  "key29": "EMJ3qh9Y86MsyJzN2QnVEXQ9Ne9JGRMQhc4WQVLwMjAgmaZ9vcDSXRXXT4tyDNDFRmSjVkzSXTj5hPrLTFHaYNJ",
  "key30": "ipfpSdXQjc74mRxd8nHdhTXqqXYRvLB1XZxU896dQ4EAySRhL71CVScWVpiE2u538398Bz1qZLfHQ6rsKyyDpoU",
  "key31": "DAghbfH8bnwoaG9MFDtEudNoM1azVZGnxAh4YmQQHyH7SzXAe71Et6Y9T9REn7VyH3k4EUqB7ZoZsjYuKP4c5Bh",
  "key32": "3RRqkRnqRqqmLY4SrPJteoJd2U9RmZBrintQjQ2xFb21Gw4CpkANBRzmDFPBQ9SF1iq9dwGEEKWNWZkzAFafkqVn",
  "key33": "36HkiEBtu9UcworcXzBz2Tkwp6XceBizjENmFjCA9otXmLWP1kmiXswPucnqWDNyUYKiRsHShGaMPJ3miK2QndRr",
  "key34": "2tnQBM88YUsbs9XaWcLhXkFV6NeGgi8ex1oBq2hdsiAdsUdNxJcWKgmR9fXNkNRzqXM7p8Ty3WzoHp6YcC5wvrKB"
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
