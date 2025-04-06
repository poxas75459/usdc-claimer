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
    "5tmBywVw8QhWCy5rJ2MrQy6ks646G8gbKj8YJXJduJK3GJwiYwCj44Cr6BE9QMKKV1PnXsot7dWqrShzYrG7Xafb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eh58cX18sD9wXPGyqm1vGaVdgznodZD16b9GxgxvasbmZRdkNBE4weV47cWgxyGddQa37Qf2fnii7ufwnGEBh73",
  "key1": "2aBefZVEWWHdb727n4FCXLccULd9PisWXmAGuox8DKtzLbkHATbeKbMebqrGJ2drTUguMztXiwoYitv91Y883LEM",
  "key2": "2aedgCFf9A23BT47mQpdzeVCqgcYLdBcH3QR9KFLo9PapCFiZ26p4LjLcrJfqrNGs9Djbkk57EX3sWJTpPMFJ8GR",
  "key3": "5tMZVRdhZ6yxZDorsWo7Ys2mmuoatRTrjKNVemztHG5LjRNfAcXXNtWX2F2wn25MSWRqrBBwaBeizuiZCHCCrfrX",
  "key4": "2zqPTuvjNBn9tG1LQttGn8xVXCKRpUetuzKfQ4Km7q8iL9wQsMBtAXBNcuvHjEKyPoPSVnKdsR1odZmWBCjXZRev",
  "key5": "rs3GKByoasMiHEquWeDWwjATYNxYFG4JUzjKyjESqhtsH9HPKemirmVXAxLNfV8762LeeNJhtsiB48YbmwykytK",
  "key6": "4RxQ1FLAnPHiowY44z7A14mRBHNpfXLawtNrczPYDdxmc43YcZAPu13sHdcsjtbnApqkvxjLGQMzvTXKx3MYvKyW",
  "key7": "3WyMgBT4Yj9FVkww9io11ccB2LjaS9JughqgQvGuFpz4Gxe3A8m9c59Rsy8h1vt5JhUquLSuLjmHtPZFcz4q9uGH",
  "key8": "3vbQrvmrtNUDYXUpcVrBMeGW6cCdFG4815U8kRwUYNtfQd43gtYMBz8fRxmVbyoP6oD5gEbXuJ1zcRxgVkxMwq8d",
  "key9": "2L7AdSLqp2NUtotfvfLQxCoiSuiq7ecAohhV2jtX5jdn9cDCLhKGTNaaU6F1Zb9s8JJfh2SFZW6Gq7k8fPjyRif8",
  "key10": "4zVVugdZjbyxtQ55oYTYD9z53eQ9GheV1fT4ad1J42SShHCwGr3kukDmFnvz4y8by8HLopVnFVD7bTWm2AJrumJ4",
  "key11": "3ZpUNn1GE3zSYZ8ptzq38E6BpLe3KWpmPPMaFanU4fg6FtSeMZVh39ZnXPzKhckvMBXuPTquCpo7WyogeQF1ULYQ",
  "key12": "n8ukDWw4yaLnYT1MNmWy9REfhCbBMG2aBN7opuJpRP1TbpFUWVsv4yGP7iepmkXNvTCFZXszkHyd1i3eszwHJB1",
  "key13": "59Wno8NrFGTaLD3ybE6NtcQRRPkhk5fUTfafA2UHxm2ZnVcF9iKNCewgRmj9FWuMMkjSCbEEsruwmjoV9UJSoCoE",
  "key14": "3azA3KEedjDw1hM5nZBz31hL7gfzPkVJGhqcZEvF5zW9xD7E4Thsri1tU1eq8ThU89eEYU5ck9YkoT8BpeGFPdem",
  "key15": "2CC5v5ofCRNLLLduowhbNTDQGhyUhJyLkYnYmv9ggAGXsAABts8DLwtFxAhbU731FLt5yUp7TEiQ7xBdf5uV1hsZ",
  "key16": "5jg9GVpTVZjw7ofbk3NuwGdzVJsMTrAZQncBijC9YP1Rsk5Hv2roKVvhAuWDXBFr9AFVZkzgSTnxM5P4gNn5VvF2",
  "key17": "cVVxXx7xzSezFrmaw2QWUnP77dyKfWcvBXMKscmzhwcEokDVh3JMDL4XzmMvfriLxZSgujSJNV8bWxrg6LAfxxv",
  "key18": "4zR45ARHnDaHS1bwGn8juiVvq1tEH8AH2pCyAGXsLUUVtEoWz5Xyb62tVS19UXT8iPhopAFQYHeK7C7fQ3aY3guG",
  "key19": "5N2ytYPWUuhTKWGX73oJspNGzt5PgtH2Z5FSt2HkKaoCedtAmLEkruKG6LFRK1KMRQ89y9kDEwMnzFaSFTn5VQJY",
  "key20": "38Pu7G5v5knsJ73neXSEa4VC89UFyvBHGKwGnjwbNd6uSG9oHaoTx6RpkXqAKkkYr3BcSoDsJBVc83tyqvpR5sA4",
  "key21": "3svHu6QQnQVXQw3QrGgohAbqGJXy8CiEXp5QhmVhKWNd6UjLweyDMyyvP4F1R4EvYMcaeiufqs5a7MNyLhQJGiF3",
  "key22": "3SfmSZL5Zg765GpKCpGtsAxT1XSsHJwkW5mA9NbcK5rErQPrpPTCYNx2ea36hMJntDm69tGHoknzYjYmuFwAGUqU",
  "key23": "28gWgZQcmEtEqiE7NyHTZzk719SRRXE9DKdUhXwMrjCsuMTbD8vYqHqGYA2M4fBTu18NJWCvGBgyDJWrevqC2uZo",
  "key24": "38q3HjJxegrUPq4dACNrQ1wSwpi6Pv7WT9uKoRTUrFKfT17N4hDLXoERP2Mbiq1rUtF69vikWbavwMJ2HGN7G5ce",
  "key25": "krMS63j9HEvfBX4YgqBwTHLNRJaRQuL9TnF7381DU2JFN1RTnkG2dWpHLYxgwULFt9CMkzEjyqeqffhD4cwE6M1",
  "key26": "5rffzqFoqJ9xn3Fe6zUjvxi9TmZNH6SRN7JLWy38JF5NTyr8WdqDp7RnteXMcqp2VxMSUU2zV4GBB6WqeU9bU7wN",
  "key27": "3uFCXaEBZcbjVomj7Yw73LMmJPACbfX54FmcficaSTEaS6quExgrm3tZEMbj95TAshF1ptDgzBXem2TuNWc9SLS",
  "key28": "4jrYnn83JGstApouwzKU1ewCQEKJWkovQhsNdscgYazmn2B9PGfGjAoadLgv8mmsd5G29iNXvEodzUAkRDzXDuTP",
  "key29": "5i3K6krqx7zDaZHqR4GoSF2RvXwvrWWWisCesq83p2tUdeBuQ6gfHLrDDGgHyvp2bxseLXrrQxW3rwwSvC7opvC1",
  "key30": "foZerce4aAkQo86oe5b12qMEyv6FaVhus7uTRhDUEAhg4KsdrKaa462UHqLjeNLcRDJdcpk1sSUp2WKBKtYVdeo",
  "key31": "2ja6gCTJBX3T4Y6TusX5P6zAuqibEuiiX4NAdzfuFaQKrfq71NZChJ5BaJqwxqhw64ydL7uUijhZXEiekgHyjHKR",
  "key32": "qvQJfCXLELesH7A88h6bMsZ98fmawABnCtYW2AV6W6kXaTsyssHPdk77vX4o9DvfsaRLDwVMq7J6DDqQoS4RptE",
  "key33": "pjwi2wgdtHivy18FR3uJepiUMREZ6bovKD7PqtnNjufUMz4SmzcKRuRcSSSy4SmZC1mJYxKbyZhhW4S28C8TRuh",
  "key34": "2Cufgu3qS98ak69wnMRBtKbtLcRiRDCKaQgBxFRo5S6bhgjjsFLB3Xhag6QgCFFonVWYrVueoRopKTtBtqvYQLc2",
  "key35": "PKmbysZRBjLMxZq4Uw4sb3zCohngTgxn9U3SRk1M4g9L3WggNchVapAdmVMZv8YJar6JHCwAoP8dbEoz3xSotrT",
  "key36": "9DAWYm3yhZA15Q2fZZiRJFs8JsxXiZyMfj7jMd2bNdaRSGfmyu7xmBZL2vueCxC2Gdjub4YNe4uTfSCxxNocvg6",
  "key37": "57N1LBWCzBrHTVcHnDkKCpLVnqYh3bAz8pGp3zLz9G9a1VkEbkTCqt9wGjpzhnvkkJEqhatFhqjUE2PLhmMgYu6m",
  "key38": "5zXsg6Cs2o9p4Ztu9bAxBJ2V9UnSuejiRJiS1zTMRGJhSKKKNM5fYCjTfW749P3WZf86mGAKkpZCBa24oCeD8byN",
  "key39": "44s35rER6S8wsBfaYtxzU1X1vVKEq8yG2jnQqDwhZFHS36ACMRgD22aefoVkgzcdsQfXJN7va2za3V4sW9U1R8iT",
  "key40": "sFaXrTbkEZhiNwJkeiysh4CoF3DqxWoXCf7ReGA5boekiYc8LNBrMi5HqXqjpxbFZ6QzZoEZqB7puhXb1ZBpttj",
  "key41": "5iHaUobXWXgPxXgZeiJUXmdCfua1mFVjNSx6r2DUuBRA9ctLX481tmtZfMAxNcso67YZq47WQz9dq8ukwL6wGdAR"
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
