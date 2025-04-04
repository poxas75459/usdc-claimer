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
    "sH55VYJ1edSULRSYgY5JQVBKYn1JQHkDnFQUAu7uLtqQa4D3njrC96wJP2AzfURSaepHLw8zC7UWy7XVBiyUg1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FxHb3H4ubQ8ckj568xyV7UV5Aj9dPtWdHPQaFRtrmA3NAiqiTvDPm7YGuvPnYLPtnGof9WNZw6E3GYgcLw3Vd4z",
  "key1": "4f644dmANGdes4wgCZ9eEZLfPeTQLjz6TB7zHNnkMiSaDPi9wyzG9th8W4gkpz6LpUgjNvbYFcTPw9SErdtP1MQu",
  "key2": "43kbqGKGpEbRa6V9EsJr15rMzTX8Q7U5iQC8bv8UYDNMKWL4aY5EuHgQDDFsEXLa9BmjDSoT9JtZYfXA7aY5VYGT",
  "key3": "2Xs9woHLfm5yrmW7isynaQXmVRnvX5MYrMPCr3wH4RGiARZVWt52eFEVn1byQkexLjUX5zpJSPZiqqKvsYbaXPE8",
  "key4": "WKHrz9S63FJgoXmdMyvgxcEd5mhQfu6mpuJHDjxHuxrK5vzDeAHqZsxeH7WwhkHxrPeDPSNeshRntvXnSaZcRF4",
  "key5": "4xc4HPdi4yA16nHfGr7QBaSfGwLC5AbkGiatQ9zYZwYGyG9tNn5aCM62YwEM2Co29UjkFSk8syzr7zWYi7WJLkUL",
  "key6": "7hxR8Der1HoyigT63DRzPv59TCv6QX3MaxwCfBSA2uzWmihRJs5uBcMr95DRKfMPSwonvk5GE8aibxnujygFhsA",
  "key7": "25JoAsLsWdsn3Nzfisv16PFfpzhpL8eKNh2gg5fe34obvEyYE52sVpJ9YYapFfdAwgMqXwRB9Rpu4gDqx85xneNp",
  "key8": "3zx9ZJf7A4T3RSTDFES58yuZ7JAhGkemYqX327qDaZmGGAVcSrvkeUbiwFzWTx7xAvXt2Kwc66EShxndpjqdbEjM",
  "key9": "4mnoP53SB95NbMaJ2JDUUbiApJKu3csVSMnUF7Fpo6WYypLzxtUTEXZWfiqL7c65hnLJXUxk7wwZSP9pAsz3Vc9m",
  "key10": "bcT2obprgWuf8Ry2sdNFSV4vgkwCK2gaDsgq8pDUosAEjjbBVcPz3NDSJfBATcaVCCZhoFCWtXvo8fWkkdky1qB",
  "key11": "5XzJpeAKoHVGmYpJPS1J67EAfeHMAWyfGXRyKYmeYVf42FwwTDfXz2kf335iLcnkWL87AhLuWjVZPbEx3VRziWDy",
  "key12": "5UUk6TGiVnbrXqs4zMRqcT5QCt33JBw4ucH6hWvghev4rcDWpRPbgCNnTMrz7ULr3NSwLU1HZpTd9n3bP1vPXaqv",
  "key13": "crmM5VpQY9MTLTcux95Q1JRbSDrZNJQSiF5zY3bniUyTrMbSoMoRhuQPWtfjy3tbkB1i6PgB2AvpxNueuz7ZAK1",
  "key14": "ELHy4DhXAm1govoYwpgi6Z6Dr6a1Y9UyiXw8ojDzhFyLaNdd1Xms87vkJBSm4gRbyPSa4YEmwGiGcEB1aJwWVYF",
  "key15": "oWVM9BexnB9bY9MaghKg895UYP95twHLkQqmNsKqLfK8WV6Xa9ZAYhajMGbtmvMgJJKTEWpk4Bi5cfk2oJziceL",
  "key16": "3JPXFy3raZt7bKtZQzvqhfxFmJMSFeEJSMjwcw2soKJCscCxXZg6iApRU4Zp1VHP6rkqCTZsexDPVJ7mn5goxjyK",
  "key17": "5u7JLy6Dk59XjkqoUzYUv2mnAznMUEv6krycNTbeVCGPZRCjTvCt2e2DywHZDeYMj2Zz9r24JYDfHZXLGkbRFGfv",
  "key18": "5mUxdq2FM2kH9sGEL6yzhXhg6txQWomoQ7dEiCwTvCnL4JcK5n5ywxjKCSxmPys5BChYkr2n5pFSiBQMmUPFjZvJ",
  "key19": "5uKzzuRusr6pjGYpUMjXpPxJM1hS2jgxrNKYFVbK2Tx3Ti4ugqxpkDYPZrVaEY19hjFtL4nLVunGievnNMZE8Sr1",
  "key20": "595JWZmhyD9HZZ2rwF8oq4mkxAYmsYdbdb8MQ1NbohqxqQg3dMctwhfDFqWz2zBRMaWprHiWR8JnjS9fo5sAz5BR",
  "key21": "5qagk2zTReGAtqNcNhhBoN9zvqRTXWLzBrZG3adKVZPn77ss17kfEFhe7DHL2FDJpfZtgLDtMZrh745vcnDRkkNA",
  "key22": "2EFGwj95AwgZTqTqVZ9MjFjkj4Mnnt4AfZXijD2W7XHHXd1qvjmg7zceLt9xoxGsiKudhB3R22N58WNdKipcKvQa",
  "key23": "5b3m97yz1fP7ctvBGMEybLuARJcf13bwAbu1PBREgSXDU1qx8CqKzMWBUDUa3iZwMCbXQ8o1aTLoJMihYBjMWJk2",
  "key24": "swf4wefQ9zU6CFc7za3v49AkNxhvcYu38cYexooUXh1EyWJZRUxoUFRgmMf8sfuA7tArdVW9F2inPgvpSV1q44d",
  "key25": "sHAe9L5CzhhnNzTyJif9KX6H4MBe98xPmVtggqqjESuHr34jyAGq23kVmMZ9JJ2g9bxCe33EiGbwMDKrjrC7mkT",
  "key26": "45Bj4BLWdgoZexMKXwsPCzHWr9nvF5ezLcu5TPPDtXBvWhgSFrnDde66jtqCtM3L2RBymFiQHk5n1F12JEafbSmR",
  "key27": "4McjigYzcHK6iF2uYyboUpdgMBBLz2HDyiFM82dEjXiJ3tkGqhZWJ68oTfZVmpKTf93vQAu1AsDgeiSF3k68LUnT",
  "key28": "2Fqr9jJjTrReMf4hPFf3yuRxMugzyjk3YjnCJR1SWKGfv3kN6EgLC7bxWFfjAcDxVwTHDcYmCJEYtKTdQ2EnEsFM",
  "key29": "4fs5s7cKTRYhCKgjzhm7oWYVmMrrhJYCGhYstFvVVpasVhrgR5rDSYzwgYbsqJFW1wmq9c4Du8FavUit6a5UzbWp",
  "key30": "3v16rVCi22uqJD1vFG5dL4JUANnEPEfLc3kRw2asq9vc29HjzTeQ7bwzS5zcG74RnJQmj1GnDE9WzUS9qq57qrhZ",
  "key31": "5ES65QZVW3yFATsVvFbwL6kVqfZR8385cewQfrGVz2WSYeafB4VcLPZ1dirLhkXx5n9QGpabYszuKfbiJEA45nBD",
  "key32": "357rf7WfoHtDdzpRF7qkLQAWmiXgZq4DXYaLGcUeAsYfQQBubVtcWFTTBT6YHf2L23qK8nKZtqK4nNMivGLu95Sy",
  "key33": "31MV4mLDHDvKVW4sdeysgYjdA1q9spFtgDN4nBc6rxVAuW9SfGqbZuSGPXGmzXUBB1RN6TJce7Dbt2z7v53CbFdC",
  "key34": "4dJ8fXDgBAPWAdHnour2rotZDvLp7s4ghu5XxNA9DK4gFDUMKoWm33wRw46FbuGZrkQVQU6tr3Z5JQjhfC5aLW3d",
  "key35": "478z1mTp4KWRU82tNf1VWqnUBoDWsptkxJMCWkZSc1i5m6fcwksQgdRqr71xwUyvWSgXj1B7hBJMTqFXBas7S9uv",
  "key36": "2t5BZLMjZCUQaTPjmH93j7KugqmXhaYLZn3F66d4gYVGAcH6ue5QdEqP86bELDoA3W26biihV442VWpNR13t7svL",
  "key37": "5zZLgVN9xTJzvQsdT9swC8jJRtSotrLTXoNMYtBwFTVJxf5NVbiVKxrEaboKwGHMV3nfC5R8EJvahViq1zuaR4iP",
  "key38": "23ja5XseHp1teeVcKnzRdwqSgEJmVAdX1JXuCq8khfFMstH7CejjWBg1hkM68DFDehv29vDxy7ipM3V5YfaK5wo3",
  "key39": "2yvkJxjWgqueArM2UCeTiFy3GnR6xnGyXCMkaBo1HNjSeVcsoPsT6bdE9KC2rpmUEYuEeAo5peRN7gDwbScHkRZh",
  "key40": "5LtkBWuWb9zEJCdQumBYokhyYnrxLk1FkNobt5V3rTaSeRBr6XaG6nBE8TierEawobemL9SKDCqXFC7AMQ677Y1L"
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
