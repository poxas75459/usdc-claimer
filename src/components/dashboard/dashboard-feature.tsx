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
    "67H49jTvjrpMRYLvGSjZiLH6CAua3BQ4R6UEUdnKfmuU6HSA9ihfBb15xodKNbVjU7BmPtrrPQzDDDssxMRWaX2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RyMknpQ6BGAdMN4nPxL5cpyt32tdV7a5HMVs21HjhbTD2f1fR4ukdU4XSVGbvBZExggthFPSV4k18KXAjJL9vJb",
  "key1": "4ihvQ5jzV5baFmS5LHKBFvpVuob8z4wD4N9gFrBHtg8LWKvms3LpfKu569tfjAgDAizM4t4NamJ3VdwLnb6QB5i9",
  "key2": "4xog887PSkMLn2tnK3YG7Pkjy8pn4sC7GEJjos4vjLpMJgJCNZ2NMQRCT5pJbsfMocKPFS5gnkTTDo7buWaUXzxE",
  "key3": "y8jFx7GRFHwr3JJhj3zsBo6GBC5EJq88rTHB7kwMEoZ2VhwMmxR15co7fYaKWwmcTtyK9rSKNWCoy3tTN4pv39s",
  "key4": "2xanugvNXw3T4FmEH67UuJCrLifKYLhQD1qnsXJ59bh23MEiuGG47SUdKxQ6Lb6jifqftpJUWUmbV3TYvDVUpNjM",
  "key5": "2QUCHmtWBcosC7YGFYXSnBkmStx13ZmhRMrCEN5CprJnPPFmEdm4WxfmvBBZJYy1A8ZQHSoBPwwfLfrozD4zuicb",
  "key6": "59J2oSbAuiqv3wQahZ5RDKo6xnpdGxMzE4iKw9k45wWiHnnraxHKMYovaswTwTFp5RHpyoNih19hFXibVw1K9qS7",
  "key7": "2khA7iAsxfACsoTFULm7TGUBzjrXNbacfd1tBGmKTQLn1x1ShXn8BkMZvgAbycL5oYG5eTx3af4TCXxFkf9fVv3W",
  "key8": "5i15G6SxdP296mbSXS6L7FZ6rwdh6WajKee3FJ9jnDuwLu5h5DrfNiUtZu1gUgJZWXnUtZvEjcB7wUw53yiX489a",
  "key9": "5rUjzgx425L4yKgMV2nZG9wwggKiYPaa71vaaJSdXzRVHH4nb5ft5r8Exv4AWMNcsmiWy5FRFubF9CThKJvc8i9W",
  "key10": "5gJacY7YJWcSqr6jztXVQKni7y6RyL28UDUMPBh56KYX5A77zt2kVUcXCLC5SfUY1ujt52ypbVnjE7VJMZZU8586",
  "key11": "E1Za6dGWRXzrHrCXbd8hxBMAXLRt1KdLudDkojczeRANJjrTnTSStcQNwRgVpYt9GFdBqQJxdnHTUu8uri5Yd87",
  "key12": "4gYc4kbtmGboMGf3LfJpNGrTTVdf7yCJBbkwPJHXpfRkubjbpM44XJUY93HQx5h5EdmVfpzCrvhkbd6dgmUKACHg",
  "key13": "4mAzwFbqiqTqB3Y4g4D3CV3gVwdKczUAk1DgKTcWgcbEaRMobfMyBTJzCkSmqhQymijmEezgcPeJ8et4w6V7vKbi",
  "key14": "5QsSkgxYgLgriKUYVW11rN1jXwZ9ALRni7Ko1eqK6CVKZU5zihcyCmZCTXuUZj1Qc1UYzg5us9vfPZWwE5pLHtBZ",
  "key15": "3SWEEoFNb32AnUKAD9zzvb93dUq2DY7oAjJpE2owUgHHXNFUVKBT2kneCbyX1uueY8fKJhpJ596bnnRhLN7eVWHt",
  "key16": "rsxRouDPAzBvE9bamMyQ96W4N16W3xAHsFPV9aVHsN8tb3EGvzTfJBYzdXofVG16dkSdUMr3Uv9GM9wKJeE8irj",
  "key17": "3neNyCiPQHQCXVXZWKrnz2xWxYDoQ9zVwiV4zYZqRbBCHp1LR3BP4yiRiXNgHtMonH4N6PSEfbxhFW98G1mjiMtE",
  "key18": "3HcwzxzAgmtMTH7EhfqmnEGDDSCRsYoJcmUMntjZzEkidpQomEuFYREW7NSzGzdhuXN7m96LsF7MGVXPMfTNpkkQ",
  "key19": "3jD7LMSDKkgP7525hEZGkzL6hZ94aH8xeALwoqxf57jufaxJU1yn5qH31osZzMPdg2vPwAQFxpV4VBxsksQsUDHa",
  "key20": "T9rtxZiDPJo8UsTko52sC6fVA8JqGeujXsrhke5sCVZqXmwCK9ZhDtfT4HzFkKzg92wJ2FjRd3UsXPCbPmtT5b1",
  "key21": "27j9gcmptEJnsrKAr86R3eBKzytx8G5Etu6yumKFz1xEdpN1FRHK68r1qA1UKk3dN5er9X9JFvLG7KscU8Esjjhn",
  "key22": "4Z8DtzeVcedRmfMnuBMnvkKKUho2YsLtHrRh8eWCT5iD11hGEzEfrpJWL9r1Ffs2MTcuZwvHKkNoG7vhmAqnr3oH",
  "key23": "3XJSXijmhujNrXHJuWbjuPRUwEDsqLkNwABrduVzAAWafaVaFK3RdcMzxNagWC1tuEWjvRuF5cc5BfmLTvkRakS3",
  "key24": "61UpgCnW6pouwuSguRwt1mWELhEgbHVU6pnBnzbq6EMEyP9LqArkcPEwc8dDyA79R2MUQkSHv75w3zAkL3etYs5B",
  "key25": "4bHXoNRzq7LsW4DvR4Vi1J3YEordwUKNDAM6G6YJ6jwfnfFA8V3PRwwReWVC2bwJExc1jUihavoMq9TG1YGGJReS",
  "key26": "4MhyKKqoAmGFT9RMnQz1w5aasqh5t9WoQj9656KCkfSTKGgvqWhwCrUZGHW1hcqUH7bqRv7cf3Dm33mmi1c4b273",
  "key27": "4NAECAF1DDZg6a3vg7PTZ8Kou75N2vHtVj8PgKXtt2RXEr1xyvZFhZN1diUpasqYGVm6XdG1XLWb5dTKXdNf4zsv",
  "key28": "5dNa6ZWp6DZQ9tVzTj6f5HRgZJHggpnmQML3ipFwVY2NnsnMEipjeMgoVj5Daku6d3bCqDEnauQBQHNbyvfLAroW",
  "key29": "2zxtkSkhtoGkdVicFdPiR6kKhJQmBLPYmdpmj4XxKdZfzQWmCK6Lbe32YZWkqjMbt8RQJ6FybGtcVPZ9XzkkB5nz",
  "key30": "Gv6gJ3GFofBGJ1SKdjvwP8FD1sBy4k4WxyBLENdEjRioT2o4g8moPv4DGMekKLtDZ9df2z2DxLAyLMmCpZib5Sg",
  "key31": "jpUDhzLMbN5dgwQufpiTQ3TtL5PsbHG6m5HoTk8sdFCTRbETu6shgPWVRGxbK42f3kHatt6ngYxYFAwvDAQbT6p",
  "key32": "pqjsdE4kk5Q8q2U2gU76xSuooQvkMpdYC6cM3a6qHyG89jZ87Wyjy3HmadcBArAPxW1iUWZ37S2GBxFAcTpRZbP",
  "key33": "3nwS3q8VKfykkBpw4aebP8ygZxWZ15J2SVrbEf5i6iqY5qze62ktrdppNDp2u3QVvhD4jBL2FqfSecxoUnHGCPgc",
  "key34": "2FpK8WCFv9RUiBa3Pekt1spgeTM963t8Tbj6YsmP6NEasqWiXW3hpvwjKcByLBmYNnxNPS8ATB7CashW2d18Bp8N",
  "key35": "2j9KnwwEASrkytW4LZxP7jurRU6DH5bDuLN1Y7VD29SMb2SidT6ChmyTenKMWwwBjUcmvRoNfXnr4KcP9Xsy8qiF",
  "key36": "5iTESQRygXikbMFX9mYSAB5ge4bETrLSMTewwp1Pc4NYAAwTLkh2Z2L75Qa3USgEtAM4rCuwLD9qRqZfNsuBRJn9"
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
