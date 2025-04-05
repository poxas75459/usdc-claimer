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
    "2WGeMS7gQ3FZGRKgTqQ3VsR2M8a5R3PDE3KWw6qHYAKbjzMTTqha912q42obT2BCQfjWg2Rbkwtn5PbBjm758vhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65oxiapgq3Dadun6sT7dXydXZ26A4qPdprM1zbq5nWZFb2D9G6qtXZpKMQAprsJDjLbcSbq6KAXXrAp8bUwrxWBA",
  "key1": "4AtJmp3Mjnn7tS4XZrr3jutW7ZQwvnCxNjLbWUmhKERXbMzPTGKZtkncrDpVEvABa36d3vNTNycTfJAgNfuvopf5",
  "key2": "5KcVmeFWbUG4wxuUZ7BppQUr34JU3kJekuCmhqD3U4bicHUz6TDQc7rKi5r6cUnFnrctGXVmGeRk4YD9jxebxm6d",
  "key3": "43LZ1nBTNVBEPgkCy1B2GP8Ki9TJu4Wfcrygg5YQsssKkWbdtbSJmLahAWiWkfWanWzbaiYRmKcfCD9NWfJH46Eo",
  "key4": "3no8L9MVT4aRurWkdXS5n9xkMktHt5v4JDSYmMN2tQJZWyzu6yykht1YMBb9a4sacfCh9yfJ13nf6k3NwvYWrho8",
  "key5": "5vmcuazyZzdcMGbwexKeXe7BEPCepM7XzUKaUw88MqmSH3Bz9kCcq6JpdCpBjNHkdtUoNP4WKS3VNmMpXWqktvbu",
  "key6": "2BDhULZkV3vwZQTKo2GXkPsCRueSeeuPXqSSba81xzyYXtADP4NTHSoKdMYUTwtd5EQPGYqLhKDDybxjdExPhTQW",
  "key7": "2RuWziLJw52RzHnucJuZ4dEaa6ji6oJjgu4D2Meb9Xic8vAUycd4FjtkQMc3GB3KjVkXp2DUS1EThfZNVF8dhWyi",
  "key8": "3NEoWBwQbxaRvBTPWGgAYex8rVpt1814TUo7v27ASzLeGeUAErj4ur6Nq9aaYu3VspCxVFrWHr1XCNf4Uc8mu84p",
  "key9": "2NGJU4YZkLJkZMxFapeog9WWMfUVrCzyQVfM3FRBm4PPp3Dwn1isvqBUQcQk3bHv4dRfiCwBLZ9nb1HohxyhopeP",
  "key10": "2jLTxzyW312uY6GxfkX8itvZ1GpbY28zC9Ls1ijkHtK7wJk7dp6JWHMFb42G2qhn7oW2ZGsKWDopsmQSQRBdmvVY",
  "key11": "121SXPri5kjf7aZwwHcPR8BWp7cCwdqNs3HYCABRb7e6u7ULmFwezxhDttwSB7PU3KALDpybkehqoiR88cKQJB9o",
  "key12": "3vCkUpZJ7tg3LGbvTnZhvJeUAyBWZDwHM8c2vzW2XxymDaDMwYKMHgKpby3vGW3u6ZKGKiBEgYaEpNNjjznWo9Hz",
  "key13": "siPNUKe3iK6BvhoiCyucBg3Se2FuJzU7i1MffmiHeQ11QPoGeukJgPLYJEqVgzjvzspG6SLHeFmBrJ437WoHQJ8",
  "key14": "hxmZh7kNx1GtAwSjmUf5gcc3pMNJfNR38kPhUfprw961MfPned8DatK1qWzAJ7kBQHUQadWJbWPadhoYDYgo4hC",
  "key15": "2jtL5whnK7QFodKVVJYGmLC3scqv5EXwoDwUoe5yHxFKEeYEeh4z5YEiHDtGsLKXDCXtVTCAsk3BkeHx5Ntp7aGu",
  "key16": "47N7FNXCdcadRMSuBQNZEdJqZwkvi6yZZ6cbF92azYjHgkoBHcnG6a9aBK7pS3iVKDj8neD41KRcm1dYqJiGhL5V",
  "key17": "5fD5c9NGxAV2nSEDqZ2ez72uD9nYNXMRotDdkY3etVywyLoKnoD2SgCouY6zy6iKm2PihATTe8QcjyhUp8kWmFrE",
  "key18": "629WZg3cjajQ91xbdza8dev5bCBvZdeSESd8gRp8yU6Z8gas23c8gQ2NrCbSvcuP48xX7oR9Ba1HTrico2bvPdJW",
  "key19": "5eukZpcuJuiCbT98956zscNJnT3oEsbqHhTBcYuZSxfKm9wSTfdR76qcu36UZQ8UJjo6JzJKyU3JqTaUbe2NJtyx",
  "key20": "5C3uLjqonrisdY2KHdtmysLDosjWoanpBgCwN1Qu1zpzXAjbrgoFYR85zR2jGrZt7aNJVHo2fZZRZsKvtxBQ6ieW",
  "key21": "Tca1iSNdS1UYn6sbUXXoCfUkBToJMPTgxtNfBckphpC1CowxMqXQsAZWNYHCnqLtQTmVAXW5LBkxf4j7TKDW2G7",
  "key22": "3JwPHLaZCPJxP98yy9Qctr81Hkyak93G5PaYTeTWvNBYajdeLUR7HVRW6J7QUwx5i44yrzpFaRBtoowk1a76SnqU",
  "key23": "2VN5HYggi5Sz31AiD3mhBmbpHYpv8M46KRb7WMgAUf8WtRgebAN5ynmDxrbvPRm2Uc5zynTjGzJj2asVrFuSkdrb",
  "key24": "JHjbcHEVJL8giRFgYYSUNwaNWRMVyk32aMfzFHst6QphXG2zTBVSb6SLk7rBhCyrj79Gnmg97PuJdPBicRZVPqb",
  "key25": "YxTp3ywFs6eXqCHVuDjN6cQ2X15S4pm2zsfvbfNPTWZxLA8R1H7uD6bE8LhEsBLsJuipRmBZZhe6uUhDQEna4Pn",
  "key26": "2UQAt5Mkahddi276zQo5BBV9saXAZArbWFFkfshJnxrNdrQwfoQEwWytpf5AZ7h8n98HYAYWwqvYpZdfYrUT9nH7",
  "key27": "53ZqwYFABwgtsJfjfHvYCXNBRoWrVJ2uFZQrzuq72u7aXSY3B1QHa6mqGQXCrXdiAe7sih9ge4ErDpiGB9cT5NSQ",
  "key28": "saHxaXJXQM1HRNnB1tuTeTioxmNLowmNFDeHZ83u4jqcTivd1YTt45tF5rA5rAPMTkzJwrFv3QJEBJqtSde18AL",
  "key29": "Ny77ychvuusQspViL7rqUBN82F9HXvUN5EEvxqMVZnnvKrVbvyenLxQERt8DdocV5fmGzYZ3h6G4pYBvWH18Vnx",
  "key30": "mvSsBBY948TQVzEPZmvMrynLvYkAgwYw48rCQfMjbaCh8N5LtkQXtRjNVNRMoyKvhDhAcEsApZRHi4UanPE7Qd5",
  "key31": "3C4MWD4M4tSV9fBmgTSxs1LFLETrftJzRG2Gc5F92wmfeEcrJCCWDXZEfjNSbjCVxXYEGjBoDR2znGaE4ewGYmKK",
  "key32": "4GoJ8ArPHLaYcGAZWCXGoy44WAdJeY7vwQDo4dgsFofiUq12Ay2LDp2hbT2N95SfPMK919tfi5KeU5CjjXoncN8W",
  "key33": "5c9NMpPQKvhxwJx3xXh8PmAxxypt1Yq1SVaadvvQ66C27YMssRNvo1XDuHMZHDEhCiMNrs5A8kmh6fFXJXYQqTmQ",
  "key34": "41gCwyG3ph3USyvWhJGifSyJ9LYSShg2w5iJT6cUmZCbwhvvob2fYEntUbtvchGpQZtsmM1AGhTTsC9rHzDMBqvV",
  "key35": "qDQMGcJ9RNVXTbapTvJki2jVVgXWZt8eZkYAZxTckQzsojB42Gp9vXahxHLYdjJeFoPAW7WEQFjFfLy2s8kFX4k",
  "key36": "3Cg2DoPQTuHVmU7fsTz4xfYByNH9tgY9T5v24mJC995w9nM8A4bXBnE9o7fTa5gz1NAsLA7c2NGBudf8GjHuMULE",
  "key37": "1255ManZNJZzj5uB5eVuA934wZY86zU9pjLE7YDTU3GJZRdkaZUNkSWPLeGDh76NMWVrbY9R9b4Z4cHQkvJoqAwV",
  "key38": "5mWEq3HT4ux8iZfaxrZTemYhxSZaqajcqF321MkWLmFcN9DsPP9pMZUvWTe53S2fV3TGdEjw386kxwk9wZSQTPWi",
  "key39": "t3VKQW2589w355VCkLXtofsHAZZ3cavvu5w1RmANXm9GXwi7oBV5H83Gqg1cShf3By8gbpL7QgitjUccoTkejAU",
  "key40": "3QvfbHtyisPns7evq3j87HHwWDyUUxnTu95WEUd6jQAm5dtWzswXNfT3WdJKA9G1LLqf7jw2DbMuxiBJmhHc8Jy1",
  "key41": "jEhkx5fuzRaZ6bsXCGbPSeQ7XXgbJZ5bb4mkoyv5rC7jKHC1k5cwEPHWiTU8nTX1SetaT1t7CAof9YXyfHNwxxw",
  "key42": "5TKKEZhw6t87fytS5jMWToH84i3qEdsHR8sjtqDi6huFM3mKQyfgoNmcageq1RZaRfXDgKpnrUCrUioWbqb3nN5X",
  "key43": "2gATuaRkNJGteuJ1TzGpUHxssFEWiStezKDqTvc7RXjqo67zB1mgcVT9Wo36HbGkqaKGG3UkrSU8UWwvK1zNTQYY",
  "key44": "fe8yYtwbQoqjhx7wfyfsFPWW8HYZc8WFbgymrovZ7GH3Bd1o9TVpBB1CpUFWf4giQGAoeVFEdqAbGViconnsr9x",
  "key45": "4UtNUknQ6Mr5u3fophbRXjdeJc5oqKCiVTum42p5CEK2qhUCYRyMjVJ1KA6rqqXgrozN6kDpj96DxPuMEL5pEn7g",
  "key46": "2AfNwCHSugDNokwRDaCrAEnmiHbrHwbHzQafkWF8Zrg9Z7uFbr5ViQ93yguDbjuGRM8dMKDVb8gVN35cP27y21mQ"
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
