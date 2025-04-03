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
    "3dtiuhhLrUVdgeBRNFV3DqTgS14siq8acX441R38oNtZ6UJEcsY37ha6sKnTdbyp1RAFHYTtnbHYXxTm5jVYUVcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VLTFsND9ncC9eQeHmSr167fnsrG8amBSPaaRgnBiH638ryP9MXUUu7Dp9fuvEH5QEFUok5p2DyTm6nQyF64zfDJ",
  "key1": "5C3m8ECHphwdEQVY6w37PYEZPEykfJrVnACpHwK8HuhJqtvWXFsMnjhkexXwgZjA18hnQ8QZHkKJpTXwYc3PvRpW",
  "key2": "5WFSroFpknNK7r56fLd9fmayUrohSTDiVBGoBayfBeRtgC8tNoicPazrP7gwB3viruzZywamXiF3uL3uFrvsybSj",
  "key3": "vMkMgen6SJxvFtq8zmcTqY89fY5aJFBogF3VGjA45URn1HZg8jH56DJiqB2hPQTwdkE9VgsC4oCo2UfpoP5PwWP",
  "key4": "2yb7vRSmL85akp5BEbe4QqzNSuUpBz8usG31GPSnduXgfc5HJW7ys43xanq5P5kC8rCQfthWPPe513624jb8LhES",
  "key5": "2VXgA1mNv1TgS4L5MtVnQE6kunpV2apnw8bNrVkNaH5T6Jry49CjWDwRrSTUfEYC8amifVQcnkpmhEjeBFBobS35",
  "key6": "5rzq9RJTv2nEsMDmChrmiBBfTgteqrHwSZid1aEZaQEJHsANHayCWXx6343UpXSPoTrypD2U8gVGZDJdWrpN5w2u",
  "key7": "4a46XVnTaCWGD1gi3Nwk4qiWmWwQSrFCNudjDDM721cgs55bayM9HGrbuxtNtptXnpc3WcnfEMiYh8Q9F9s9gwpN",
  "key8": "egiHxi5VpaMHRgdGMpiyweQxG1PhqLhnWYtYdHkrmjzUSorrdfU8avCszojKLvhsbPYFCa1xmYKB38xSVnuPNkU",
  "key9": "3ieewGxSg8oQgYbRkKEkCuRTveLnXjqRYiTpK73aYzzWHY2k1agX2c9wVb2TA218QXyfBxTzhV3e4JFeib7zRwKv",
  "key10": "R2rnbeb4DvLYsTUuxBCk8q9yZsPeRudFFB1Nejz6vQYK1i1YFAeJbwhAanF7HcewDBbbriLy4iikt5RfF6cCoZF",
  "key11": "3w69LGKXSdjir3ZHYMyXcpG4fS2FxnenYofs96y2Cwjow7tvQLnLkj9UNByMHdyXJnFowr2LQoMuS3yKKmDqDnAx",
  "key12": "4biG3u6PrR7XPdP1ogZQRZu1Qv9zY4B84AdPDUJAGzL3tkB2gxEk3pa8QD6uR5SUP6fcbdDmJDL9J1hdfsz78ngW",
  "key13": "5XGUroGyQxz4LfrSWP3NbQth27PScuRqAmLeJLiRo95qqGcoWSh9SB7A7m6oir55sGRdu5T4E3YcKw74sRe7W1ry",
  "key14": "51YF4m69jfZbBsuoHuaazwTdaw5xWhma1d4xHVAJGSgo2cTnwZeVx4J2176ixodsgc2TFyQWC4zaPAn2Tr7gTmSi",
  "key15": "4rrJ3H7R3thxRqbvLVvgUwFqzevpribRxyTxVwpUMmB8VSkQ8vWEQwtSLEJNQUn45Xmj4Zi8qGHYCURRtE7FdVA7",
  "key16": "VxgPZEPzug2sQq2YiR7isM2S9DgF1RXzDNqoBjxdZgP768jJU4xdtVhKEWgHxFHB9ymyMgdUDi7xSSYYiZwt8Ed",
  "key17": "2AobHrULHm7QZ7io8yVMdxW19bwgNSKSReKd5KsXnGmUoofyaczhJWYgwRAjgBqb4aFDYh7f31f6VcCsaLUvsCZZ",
  "key18": "4QCwZcJ3tjbSrwNDPcwjeFvc7AbfFky95WfzS1sFd9jbAevbf1AM3LpJuJngNRZta8HndDW9x6yAJM7JNAnehc4",
  "key19": "4J23kqTwgezy4TzpHgij8p43sDjdmyeysi3cDLKZzRr6t4yvyHm5pdwW4t8J9nFvTWAXjQK8xQSTMzRv7tg68sHX",
  "key20": "xDpwiwZDWpum9gW74WKCgYNUxby5MU5a3fwJMAzQZGYS1xrnLJy6LtPuQBFkSaP1kDLJfPXeVwhswQLRYarjMCw",
  "key21": "23rLrWScAXJV3CZV8wqceqxb6MmWzPKn1biCw7SiarUJvdRKMGfKUakM1V45Q8a4tVg4yZoGzCqYZxWhBG21Nkdg",
  "key22": "2UrnmjkpDQr9Eq5CdjWQ1EwyWDxjWb71TdhGhYJk9xgVEAP25Wn8c5E5VCMwewrgUK5cL4QaQQ6GCHQcpsV9drH6",
  "key23": "2y14SGW4FcqLxuDvpNCBXEU1VffNc2ghWUxPxjJ5zTCCYGDwCacF1sRk4zKSs7zevRUYW1Zs6GvF45cEPFq8UU7a",
  "key24": "54JXBWTZ3DBQdhnqoUMYUo6Ds5Mi5nJdCtVcevwXvyzQEZ39hkoZ1DrjdcoXXNhP4ZrWDyERdn3B8kSjCHXx1AcL",
  "key25": "w2rSTotozdFqbMNrySqEM5BB1rRzL6hyVnowsNWmad3jewf7LLhtyBu2gsPMN1VsDd8QNMAxQJKiav2tSaK1EmJ",
  "key26": "47JMEUv7Xi3Gxt15CNMEdgBuAfY64NAqA2CG5W7G3j3KEBwcPkWjWdbkzLu1JS6xzFCrrh2XfnTRcW7rvD42BdmG",
  "key27": "UDeGHEv1iNmZQquvfn1pH5aDNXqAnnY6JyRpGeLNCY1X7sb8VAG354b99zjNtbxTXF8fqG5y2gUrXMeL2L2tbEG",
  "key28": "5PFpjZK3zHvHfdPS3vkDgyuCteUbhJuQPUydKCPRxwjPSZvm1fEqDSeSzF4nCmpmMZgogihUjtymUkuGKEoCubRh",
  "key29": "3BpzArG9Rc4iepUKybvh97ZDR7BxgPcnhxELcDjVXfkq5hFG6QBCq37Zytqe8nBTUspAhKoz9R1H2fD47HbS9TV2",
  "key30": "3La6BqH9km8yCqrfQDFZLcNDnJ4jz5ZvjDvycTDQbZwgWhHwkpCg2EknWSVehG4UZ7JP47BzsFVAnQinSs95mBrX",
  "key31": "5gWWJydUhocpW6SG8c89YDkKwoCmsowWkxDT3EQ9Cq87Yyr3U3CTQvxECkCxFfCvnLsQPngtbVRpCBsaMaDBUsHh",
  "key32": "4zqP91a6S5FCPDc2C1LPErWHYikpVysGzC1VSDj5Bd8vLzNYGWcDpEL83T2F8TkvV6KTqWNYSrTBgwGhFKK3hhMs"
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
