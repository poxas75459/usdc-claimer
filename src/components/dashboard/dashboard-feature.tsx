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
    "5kic4Mw4gdJ3VZfQ9iVBxzHiTSNDfghuynRupW7fUmUV5pJeJcmRDSUXh4vz7vvm6nPBqzzjLnRzdRTd4KJZzaJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dx7CY1tvPJCuXv8dTB8Lt3v5K9nj1u7uTpSqqtHi65wpJUJq2Limqr9FtYNfkdNQhNLVAgVZvDPfWR6opBqPks1",
  "key1": "4pUzGN6eeB8WCNzxM4jAR4BaqYSovwUA7Z73qtq83EdP7DdBPp21jFVU9w7wKFQAAvMHois4Y9kQHvVnJHNWLZrP",
  "key2": "yQjFGv1kcKYeowtKvMaXxntEadqYWRWBP6FEqW1aYoFjzVddXzb8r91x4KeiCm42UQtDW2T7ujKYb3ff7ib3N3m",
  "key3": "5syFxNCbogfxZbv1hyT1dkmaUZRr2NbeYL3t3RERyJC3gL8B4JBE4cEJuGNFHY3YtaiBZaU8bd4YASmxhjqDVwtT",
  "key4": "5FVQZakYYcDJEvn7nqgDrJ4eA9mZiTDYcDDjxuBxRSmVVSK8z51HS4uKLTrJgRYdwJvmPDipb9NLberkECz3nekP",
  "key5": "3RyHoB2tzDCv4dTQYi2RrRdgf7Z23mmXxoGZ7ercZj2G4L5NSj4KVwvYZhAU64BGYxpZPX446uG6ZpWhzXvDc7VR",
  "key6": "4V5PQxL21XPWQquLrzndXY7wd4JbCpRibGASJTqndg87cyMWb3JZreNMuK4LGmBMTXQn8xRmVFdvhcQWZdYAb6Pc",
  "key7": "5MWAvdmHVVHYWBRnUi3TMXEjA3SJT1sCCrQtraFtyTmXK5f3C1Zk8bCFVvj6ca4mveAP7VqEnoaeEvkxyxrkxFQg",
  "key8": "4cJQAPrH8f5dHAuiA5L5rTMzLpGMUxYj3mYBcLXpiqzt3pD8uJua9b6TNKBX4HjaJTztnX6TtDUmyyKyWD6diquH",
  "key9": "356bzj9GdZkDBhmdqf5umAnA7DRCMUye3n2YL2NY3YL5Uhz3xLJVWQGtoHmkZBxhWogP8X5JHotz5ANuD8QGZ94x",
  "key10": "3MKfp3AGwQ78gxVVm6zyEZCrD3gZJAD1Q5vN64KxQpozndRLW4Btssr5h19fSAQAvPTR22crN6w8jA3ggqsotjim",
  "key11": "GCtMGwSP93cdV2WkfKXj7NWFdU8GBU6b3LFCXFYPhgCYQka2kLF9uzfRugNsTB3hT8qYEZiLbh1Xvavc8aZC8CC",
  "key12": "bYHYbbdrk8Gcy1iCfP3ZJnMLsFfH4pEN7ytAno6QFoMhUUH1fYDeBrbQDMarViEg19AsLjbvLnzBnmtumM71FB3",
  "key13": "5sQ4vEGTVbaQ9nLobQedFAQ4ah1wwySo2HwBtLJkyCfqjK6hmMAyksmmjP8JMBvgNZPgXLkRwLiNdQdqqUmC8vxJ",
  "key14": "44feJYZC9XiiTCtmYv6bvLC3Yz4mB6TfdF8GikHACpWkzNxP8E5BoPESQm3deGFyMH9NaizJb2UaJP4DpDZxhium",
  "key15": "5U95vjr6pDqjrn9afv9vt7Wt3NLpmTQDcGRQtRTpB7zt5Vg4SPfrdaBD7G9N7Q29pMrbok5uXMRKxdbqpZHgUKFQ",
  "key16": "tnCHAWiLWwwbQgVsLPvFe51wYaJUYvWTrca3P58vpXTjuu2zfo85VePP9a67TgJKBhnPXmXduCg4Li5x814L2Ym",
  "key17": "3ba5CswgG6CD5sQXSCTs5KqT5iJNzfcp7JFWifsp14vMLMqnjGZvdZ2QH8m8a2VVDxZoRQqraE8HHKTjqHPJVUsN",
  "key18": "3tjHgMsZNVjkZ4mQ5zVzULGH5CPHN3ZNoSKuNA24gKxmgcHk1cZ7phngbpwrfKefifWMNneiYVk6MsnPn1vzjKir",
  "key19": "47S7wwUZr9S2BpfkN5CeyEfquQsqvug7fC7RPKwUwnzMyvaKvnFfbfvR9ndwkPG1oUPQcSLz4dowQAqbUeBp1hnp",
  "key20": "2pG7usw49JX8zxJFTPEtzCioSWJS2tBEo9tPbmteUmJggzvgYcyp4gt2JKVpUvjpMZsdrBkimZ8fzPr9xfa6PpwV",
  "key21": "UaffUux9GNe9vbwoqxHqWXx2K4dYNGgXYfQK7wDATrUP4JeT9QVrC2VuPb5rRTzzGJtTxFXX8iBD1WpGuix9aNU",
  "key22": "6KL34N6LemnRSPqag1TmiDMsvx7TEVD8YShD4jbvvBKoXnewoKuRaw9ZHrxkPdJXte4ttpRbcrf1Kz76qmx7YhL",
  "key23": "3KFq5BLzidk5DN2NVYEBi3TLsKtUAn7Z9hijNvZkpEouqcedHrk6MTPsX3APYqFucSJrikSbHutmubstmHoY85Tm",
  "key24": "3QguznnKZgw6Zfis7fC82sYrqG9gid4qeUtZiwKQgWY9R35GuFAdj49Zm2BiB5yMgzEr23epLqoJL3hNCgAHpX6o",
  "key25": "2Bf93XtUG52mdeXYEyBhd5fT92W2Y3odyaTSkmJNa224k9FqessvfeppGZ4MXxzDrhZwNwkRzDwozTUkx4BTyiq5",
  "key26": "4Bb2B3uDnjLAuK6pB2Vn6EyW4uWaBLoG6g6T3ZwAsUEdgt4YcDNhuRfZBUphW3HZW3zybVc9dMgVqFfQcVaPNxWj",
  "key27": "5sZHvytzq7DUY8REtwxa681MC6sop5WjC5S2ZVZkePofEr2ooJNLkdeqXFxSw3iF6sskzUr2a31PeVtJb9SjooUs",
  "key28": "ujU81DijpvY1WP76cFkWUn5oBML756KmQ8SLBPPVnBGVg69joyh1FdHbjfYudDrWRt9RN33mqgcLz4rSbeeC3ga",
  "key29": "2J1EsMLDSkw9e4HTBBcmdfz5g2pn2XV96sLSrdciN7PbALMStSYAf2n19mNJSJfnAkdnjQPZ75t4ei9kJphaCXnJ",
  "key30": "enwF6eP6aWS62cBpJuhoRHnjf4JRoWpR9ezS1XqaAC2CCpKB8EmBLkLFa59uaiQ7C3dhaw4zcNJCYWto6iNa7p8",
  "key31": "4w8MrkQy79CUXck4uQJ79qdatcCcjkWdaDY4os69fXdMQ1Nb7AbubSmfERr1nZw22De1xGt9KjXDFBCyR5N7AKZm",
  "key32": "4NsfqWptqXFWBTvUbzte5TyBRC9DDFLWjGBfUw3Ri7z6BFkppbemz5dViBSBn8dmHoTK3soadxN6mmiCWfamHi8D",
  "key33": "45UYWNwu86eSHyDPHUDVgXagQxvbBG49QECjgdQu5vxCJdXH765fcdmzW9bbhRLk5yELSC5aZ5hTtz7vCnAd17DP",
  "key34": "4HKubhg4PTsZVEMZUhEgZtgRaBXKug9Reb1AjmJidtMCWpvLLp1xYEyAodrkF96pi998dzHSDER2DLh4puhbSSkG",
  "key35": "2BVhHKBBaZUSvRZ2897mKN2AdkCuxQR1KR6VNLRqmSQpnHLTsYXrEFTr2whPteqwmRqDfW1Ac25QhQK3mJCdE3bb",
  "key36": "2Q4qaNA3pa9NB5ZhAQ3eMnAYX23hoQ52ZhafftySWp4MN5wnonLba7LooQE87BhTNw2FHwZJV7WppteTVeBmjLkZ",
  "key37": "5igEW2Xsifz4oHEKLLFeRoXTmGTVKJhksJMNWtyCxad3c2PxWP1RjDJFf8uyQmdpn2eQ48RntnkuxcSKdaRnVLeY",
  "key38": "3oXsnvPkp7d2vRQocoTKCdAhmAXUvA7CdiQYxCsYHraSrkMzBofWzVybVcdSAP4QGjk1HAP56n59VcN1j2x1tthc",
  "key39": "32bP2PkhjZrBDUSkjMYWDg6wVTKMEuaGXumGiAQhi9hPgbd1f8CoUrBjdoLVxbquJD46hpgd3fw3VR7cGQfcBhi6",
  "key40": "4Z78cvT926xZvuxC1RGwvbxTAsmssRwDTCbYJdmfXgYWESWboXzYqWEJMQufwo9mrDdgWqndxUYLjbsD3jxTXEt8",
  "key41": "4MXCpZBVEsPQjnAxYb6quiM849mfyzfK1gB5yq2UierGkf3ikCHBe7YxrDmr36ehLzpnsG21LNVhR2b3t75ivLtx"
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
