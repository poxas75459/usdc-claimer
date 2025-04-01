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
    "64uJbDDW7ZnJED3aNk5vmvNNyreQ4NSuCSnDXTXinVV5zXbnAxxj15rh4PHYRr85wGu4isDngNawnvHZtDvQ4Nzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vr91rmL5qK5c7aHFDDbarMhRQq32V9yaVwPzGC68kzQoHgzUUSBSnmUPS4SLP5BkLutDzMVPLsaRyutuQquco9n",
  "key1": "3YGo3SZSYq9zz9KettUhoCY4p5uFafuTrmosmLcZpG6WZVXgLfLaN6s4UAU4cCs1pzaX5VtttUW4DShRopbd1bbk",
  "key2": "3MAJTVdsbBMexsE51b44eZBV6waHu1kUUjXr61CSvEo8auLoRYXduRPEpdNVmkAVn4u11air6qBzdXFuCBHEhHrM",
  "key3": "2JtSGca4thGrhxzaXoFWunDKngQQrCf2LHML7wu4e6Pq1H7CH84eZu7UyStqUpa8WFj3wj2Zqpz2dNh26RsyT42W",
  "key4": "ajjkjtesAHZPQrA5hfhQDpqsfzoq7XBTshA9NZeN8Q8PDLsrzmDyUzx4NdYb2Cj1qZA4h87hZzBu9TNJsiMBeZL",
  "key5": "55idtpU5hbFmXN8JyDETpGVFjEqWuVGsDeQYCvBQUAYYNdtSq6V6ihZMExsr3rwbZPnrB6s4k3XPuvfHMGQLSKHe",
  "key6": "4wo21b4Lc2ktpkspF4vWt9V5yzN2JkbucJLMdZj8MoPKGzkALTx5JVCvvM9BABjwMhCUTQw7b8ebRfjsYuSoignf",
  "key7": "2feKHQMEdiMSF395kM3PPAihaCdCbothzaeoka68gASNRWdnYjXkNCYmkn6tgbPc3RbfHWYrD2KQAEbk3KEwTBxm",
  "key8": "58SMExPCtYvuUtFoyuYPNL4f6U8wzvBaZ58rpt8BaK6KBEBEZP2xySZKTDzosBM4wFeFH4eJxuvQqe6c9HPYHJ8V",
  "key9": "3jxtZDoqAzJvGXz45nEvD7imQ4EDKDDZcUcf7UDaUTpyRnPDNbrnmveTocKpdSVzgKX917r6LKi12WmH984KHsut",
  "key10": "5nywsPVLP1JKgnv5DPr9HjCimBXVXQGWGy4CLHpUtRoM5Ce571C4BYBzW8eZqokvY2v7Y6a1XWnjLRv9jgiaBiX8",
  "key11": "3JpBKcPexLEKqwW1rAup4WjXgpcEfmGtF9Qsp6qZggTJEZBAnvo8ADvHRYbheWJsYz1gSXMxHN2HmXhY6v9NzYpp",
  "key12": "Y6ap325WV59JYVrD5PHRSodg6TQ8GfrSH6KNMLXCTpt6bmzm1zctK96YbFMurhNXqS4BkoWRVj36hx9aPHH7Ct4",
  "key13": "VuyMWpBCYp4qAeVDVP7deTjgNs1C5heALX4B1X99TXWt7jsH2LnWWpFrSPjRfpgnMf9gK1PbbRBcvxR2LPQqg9o",
  "key14": "2GebTiWpzZ2mQwB4A7UG414CVim36bGNTZNecSyntybFncuXEDuuFwLf41d8HrSu4PpMET77cruN55xXXJYEzcYb",
  "key15": "4WQPW1Zh2FgzUsU2y6ndbid7qyhK1uszWVTE8HbgVpaitE3addBA6N2GGCykr7NVtk8pfJd9aKeR5TWDi18a3rYV",
  "key16": "J8LGTsTC1e1pRgwSdN4wg2BPRxJHyTRxmdpCHp2sYmL21UunmhiQmrswZeLfbqS1gu5c5e49YmnJXNozgZQzDhN",
  "key17": "348zLwjkJbWzzU9B6q24QsjSCH6a9mquYiazL9bcEsEmiYEEeUxgqCU2FTPX98UKhmU9ZZ7SD9u8BM1ZrYz52vrc",
  "key18": "44RsqjowWSe3my7qnHgwJoTfqKeZ5rhDKbm5KTb51y1zubPVcthzSTeKpFZ3ewPjfnraXu3CBnp4xN9weh1siPQy",
  "key19": "3MpUAmr9KuRcLPPx5dMF94tvppL3P1QRgr7htJ46BdKQRnduvH5epxT2ygNU5Uo4f22Rwh1xLzN1FkWwzbUs72MG",
  "key20": "4mSZhLegRBzZF68rYZdx4XaEeX5kQFLJw4hJ6fDQu6ADwUVRzgm5zApvNsPex3T3QtjwnCRKqefMCchjMbAxk7VA",
  "key21": "4k2bxCnmrcvCsgF8rpp2hvNJmEEjM3VNNaBGKQxpa2KpYVJsYseUR9NnG4d1rPsoBmfh4PdsLKwhspCn1b5Zu8Pw",
  "key22": "5PVjDzJ9srtmPBHW4cfWWaoZtbyjhx8S28M6BEDefEJxC86Gv6wTpwNMkoJHHkQAZrQzLfdhRi8tZM4B1QiNJ6Dk",
  "key23": "3fSeMQ3Vk6vaqX8z2kTuJtsnHEfM3suEMNotZ1vpj65f4E4oS1ZGvHeguYtJW9r6Uvq9XjEiN6Myn1n7DLUwqdvv",
  "key24": "2mBSbzUveMt4ZWJbjM91ozvPMJZPhGiMza1oZMLo4aPtrASYuZswQW1tzgucWjKjPAHr8kAxwevRUKUBnu3srz9e",
  "key25": "3G1pLHqfHjTopoiFv8JuXDQUdwZr55JiUk2bZYpYYD73cnTAmwka4kzVefYe5vHERGhhKde1JQcekQTLx88PjCdV",
  "key26": "4jP4o73f5RKF1XfJFXdDP3V52pokkfSRFidmTXVK9WaT6iXiT3PEuaWxfT2vjrm83dwwqGfeaFuMgDgvtEJNmsDe",
  "key27": "3dkhPsQ53vinFVsWwYMsCoM1ijhRNY5gLwVq5Ytke16xWzry3wXBaJqE8vrXdCwAHSvLYbx4xsuwSEhGFFPcbWP6",
  "key28": "2kDTepay3EzmUC4vjTLcs4essszRAs5X7jxbHByf7FzUFSmiq5M5uVch1xd53kds34HP1oPdTJBZawodkLzwuHtu",
  "key29": "yftfaX4nksjgxBEtCV5xF48h1WbUFB96YpAMMARAtEXCqzqZ5wDwzrhjXFFdkxsPUFmDqAoQG7WvG3YuSPTf4MR",
  "key30": "326Km9AeJsQHoTTNJAs8aXoDJb8ub1qysYeA27SEK6tibJi2aCUCi3aiHt2o8Yjcuj8peqarJZ2NNHhJSy4x5LoM",
  "key31": "2YJ4bztFGQARyg3xHhLfg6wVoUC6PofDXWPiJ3gWo198DAvmcgJ2MVH7oW5v8StQTQX4ZEwWodLfNd7JfZzpsgku",
  "key32": "2WPYPZAQSe3XUYydwd3FWYcVCf4ojn3tufkF1q2r36jjZNEAy41u7zUnJvZh9pNmH8iLn1vZTTAHoQ9vqLp3d9FT"
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
