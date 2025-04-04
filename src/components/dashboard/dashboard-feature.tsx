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
    "3pCg7xrzATJYJ8s5hQ2GYuW9hxhNy9i6V6RZBGX15X5NuokFRc5siuezm7nzSwSZGN25VY8wGT6awEBaQZgcP3Y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S5irET5nFMjMqWSZ7XWDAHPugYAXSpFKQbRSC6dXzLA8tM6hYho6sCppUpLRLbVXdyWwwTaTT1uNExVm24wggkX",
  "key1": "5yeAvu9pqgxWKYtvAgoSdS7ddVX2Vrug48TqgNfoASChXTodzaxoRn5ycHA7WJXkKndTJx4FF43J3XrDD9dxTjnE",
  "key2": "5N1Tw61A2rLqFS7gRMcqRkkUvRS1y9JzwuMerLjUbYW7JuyNm6gmwneFLCrM1kG1WrEhkxr8F8oC4sYcX1cZcpY5",
  "key3": "5sbJwaMXrRTWivHy4A62vt5r1DA2muZqMvq6NU9RM726iVtDy8ZCpQWhp2pYgQBuqkYaiGDyJ4m9i4ecEgAUKQbQ",
  "key4": "3Dh8aTtCa643FJen5Zyv4UW6sMDxkyvuFGWokmycz2uXria2gSyWwYW2DeFKd4PB1dLmdr2KBRaFFK3yxXihqRbE",
  "key5": "51XDsgEak4oaTANQkMXrvWDUsTxLvTcvhDiyLMF4VrnFrND9hYq7fdLpaA3Wm7cjrTtmcaWdPhu3s1fAN8qRVrzK",
  "key6": "4rbsQEFNok5dvN9ivm7coT2cDdpidSkCzBCzGFGfGNPj6VB8A59p6UTvGk6HjJB31k5YYLjGDoArmebanxxbev7h",
  "key7": "3hPwVCk64iH9CC7vaEk1tKeQgjwMftgMxGkH3eQzSet1ewvLpTpdEFNhK95HxwR14pZZVwptSBrS95Do4Msjzc1u",
  "key8": "2ScTpY1jZAbHDKzbL1NgxJ1Y5pm8S3J3o6zXsssaoA6g7LbpRb4vopYx9SymSHic6cWg6L21pteRqJ7mFuR7cuQf",
  "key9": "29D6B6bKfkf4gvcE1kM8dfzGbBj2kddpGsA1t244wp5jf4LA2TrgWJ8Jq3iBfrwjh6sSiuW3khYhvwk6rhZ9RHNM",
  "key10": "5TNJybQsHCdZ2E1h8c8Cx77p7zka5DjuaXM14Fa2RKZiqQCpEBP4uNHDbe3t5KBEz92TANASYQ96ER3hEJVP4tkh",
  "key11": "5RzUdAbBuppDyQLGbKQxxkhzYBJVBkpzXDQptVJPbMPYhRxKQBhRY6Gs1wTh523EBW44xC9tVHAtmEEE1ryH75Ts",
  "key12": "HrZRaELmvQUfyZVsWv7pQmFHwcZK84hqysAC6qxVW5LspkNBdVjzLBMhrE8xTVkcfyZfrUy9YXZzFi4p3ai8D2W",
  "key13": "62pnUL5isTZdbRLtk7gBhwAM2EpsSvoRqP8rpGXx9z5mtCMLYZdxqRR2h5MLBQe2JL9JBtz2Hm8GAdJXWQkqkGV6",
  "key14": "3sqp6REFEEiZLzAYnbWvp8azV1uXMRpKCFbnqYpvZoj532fqhikWU3JyNbCfSKrXNDSnTJovfGr8fKYT2Hc616UD",
  "key15": "3wTT4viWo3aThR11BLhtguU5P7fqXezEU4ygCcC23cKeSDBKnD45cDPf5djSrkbyFT3gyCuS9UsHvwnTn6uH6FsY",
  "key16": "3DF53QpTwP9G8QtYqB7GUmKj9ZYjeDntWCZRkfmzo6nL8w86Tove5vBSz6wzgP3iVk442UwcNb8wCbkaGixBLJ7j",
  "key17": "3AoPbNBXMTz7tpykW8EnKjo2SFZhxBdJ1S33sq6qjPpRAnAJfRWFpiCQSqMR8UGc9L5S3eBo6R5VHLL8LUJJ69Zr",
  "key18": "54tf6FiXaRV31DfC1R3nG3UJqy3Z71MexF8QG8puGZiVuaEGheSrLKTjnpVu6GqrGmWxyt4WhLCzyVi38npiSSY2",
  "key19": "5ZbCTpiytTqeCMLBp13VAtavJrCczTh7qStFAQ2jrt8tN9WDCpTC89RaJTvy6sD4XuUFvPvZnL3wpFpSP5sfb28Q",
  "key20": "4Y2bPk9bcNnw66UNXRmdb91LJz4haY4hcc35QAKYfZJRcpNUGSRf31vaUDh8p6DZgC1N5m2jawzpDxchpXizPskb",
  "key21": "BTqzmB9pbdyr3WS1j2QZkgfbDHwtpJJYD9pawpnSj7BqMFioXDMo4io3Em5AfJ5176youGnYqxsPWms4pi2yDty",
  "key22": "3k6Jedad1iana6b8EBeAF7vUozM8FbcsDAGMn2TuY5pctVWGQE7d7i7TE4aFtdZ9irq9iGfCEBe2BJ86vA8KC8ww",
  "key23": "5UfmvU29RV4YnzQPCewKi7hmgfgveVkrvuK4Lpxrn27sLzzXotAnKhGTTtBevFgwtqoSuniUyqWsStoJokT7PJhr",
  "key24": "42BEcmPZ1EyhQkZMsH9zgyZSK3GaShKt34noAGRh4bcwtHzJw4bxu3gusbMfVCAHdFZYMU46sXjeFgADM18qphvN",
  "key25": "2SFkqUQNUBDXnXQ323DdaA8zWJ99uwcJXB9DozQSALtkHRu2CNUXP7BYeXGyiVqSBG7AwhAaxmAJb4FPTHqbvvew",
  "key26": "5SSrVT1kJ9o245h4S51BpKAksd6aeAy9ghHri4TfW1SZut3uyiMDQtmASF9znyYU2E7QLDbPg3V4mazRYSjkmVhX",
  "key27": "m3J49jzX1z22mE1FqruwDRKpmdLobp9vLDxkPd873Chdzk5m6H3sfbb2hDT1t24gZUazhGSSsSAad5Afq2fU4By",
  "key28": "61JUyVjkMUiXg9Kjuk3fAveNpLH8BhU5EYBJC7Wfu6Rd4oS9YHtVtrmC33KxQ7eukimT58zeukg5VvMyBxh7dHft",
  "key29": "4sZunVA6VrPhZb9Yv2K9N4AkHEvX6j4MN4SiEvK8Zs5VNiva5NHoHHUUvV5oC8rggViLe7y7ZQJXH3JGpnL6FWp7",
  "key30": "5aMiFU8SGB9B8HhbatKecRPFtyovBDUz1FeXQnzFV3Hu4YDRm4VYt2UCAMztLfMruVg6mLcV1bq5e2D5PfAuL6FJ",
  "key31": "2wR3gmzLgVb8S7hwBtdSGmV67HGtJTnZz3ggHT41jsTbboWTNfgVg5RFQchjtmd4mkYE7qwGyM5JghsYDkLAYaKA",
  "key32": "wrfAhXC1JL969aSec3K5njK2o5cbeAf1r5zBp6tCYmw1PN98Rh8VAfe1CVRPSKb3PQPRjTC95GMfcn3JpRw3mkv",
  "key33": "3PFFBpoTBDgaz3W8W3NLPVz458XkcmYrFsBFPkNjLjmXjgtUg6fK2mwgAGnd1sUqcotP5aLGZoTG77XvsT2xpW5a",
  "key34": "58eN5gjbYdgLHH8ffYa55a9h6pm71dVJ8A3YiHAwzQGYBMP3MwueHGf1y5EeY9upcvqEbmdppUGAS6oQ8jLs8Xzm",
  "key35": "3TqraPFixsFRtRPF35GPbsLvLYc2E1zbwcrR8yqxcnTnyJ2kivwzgusTR5Tq1HpTSB6E9BqpHsMLU6EFYit59TLR",
  "key36": "3zvBKpb5sCSL29Zjx1WXTLtLJY9BX1azKXhn2Ep5y4mYP3YkL29yJ1ndrpiEqqEkxskm9QddJJvMyFKmfVYQuNU5",
  "key37": "4axuJG8XXivZ6AJVmrmGTFdEg5xXWw8oPkB8nKTGn4ViwDo4TgSyRN8aoXqZJpB8mbuLoczJec5bW6HdHzWuuUTn",
  "key38": "3ZVvy36fv7TA8KTRmPttX1HXuC8ncQdhnrpvyEZRQE8ipFZM7VsbXLVuh9sgMRoh9kUPxo7H6fTLuM9UARvRxi4Y",
  "key39": "2UwfLsRKVveeUezSC5LwR7ro3bTTU4CmtiuxsxAXF4izdaJZsgoUu6bJPLRRvpB8KTyq1E32bgkibNVfMENrmmvU",
  "key40": "iuDmC69TGSzf8aGZWuM6fpnq1k2ogrQzMcyP9EyM5eve9mT8XTFdfAhPDWKWf7ekdD1JK3sXsiGKiXRZghd4Lkz",
  "key41": "qQHKfsc2V3KxK8wfQJQXPDRMFeZNKW1nj9o3u3UNJPCjrFSmHv7uouTfnhgiFRdq1CHeei5iSkeYNU9YXBE2QYW",
  "key42": "3Ygd7fYduWgmcnceRBkxKV9wpvCFzkUcX8j4roo2uZ3UXnR4rLVwHm4bURuaeyFioYAHvkNZp1dkYzDRMheqifmA",
  "key43": "wbWjMMVv1JipRwpysZtWtDuswe6MyrGM4SxiBwSEAdxXUBMzahxYHG3ZqibA6YV9hij1o9pSEga6xTLAxNjqeAw",
  "key44": "4iW7WYo8grnkrQA3BxDgqnvqFQxwSf5Qv4mDibcZGKWwdFUs7KAU4Von8MSZu9aMUBKD4kL9XwxAfGNc6PZqLzYq",
  "key45": "4Z7jDdRndsEdCUpa8UjrUWiPHKhas3pyBAqzcMWErcGHE49PjoeAZjHvVkvAtvRmXaaSS51Vfu1iqW2EUvZmGrv3",
  "key46": "4pcSdC3Xkp3nHBXWgQPo1NqVoFDd7m2MTsKsyk1huWRkZ1smCRjoMuGZcu7pbWpf38hqS3XJAwkjwDcCkYqXAhfE",
  "key47": "4R5UgGNE1G7xzYnQgPktML47EFHPTG5q2mLAj1Lcuyv9hXiKzjYeBz8ugEWnDC7eU2v1ZQgpzN98dwZ8V9xzzM8L"
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
