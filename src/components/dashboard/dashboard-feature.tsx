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
    "5THBFkfZjDe6b4DocpJDKo1qFL8obQvMx1CrhCLQkrAuFGYszBeyqr9jCyLn5Ac8sKjmZfy4QMDTgnQAVwcatn6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FYxSagtzjtHB6MHbeMsfaMVCVfCwRq4GJ551Gcyxnpn4YE1hyh4EXWDiyy4M4QER6DnCf48Jgy8cg4QrTeyFYNA",
  "key1": "ybRdnrdwdGXQ6jeVKsuiGnECydY74nuz36ZinXS9i7aYPub8pB8J5dZjzoWVfyPa97G1T37tKunveov6nBn273a",
  "key2": "2DPTAYqas9br42sgheQiixPH4ku165r6Dw7pGXQt7nPP3iNihUSbJW3gBg73YoXvoA3JSUUVovBw5xwfB8YU6Si1",
  "key3": "jdamJBUkaqn4Q21FWPnx4i26hsVaGny4vpS2at2phhee6tTG9Z4Y1oe7kZSQXBisfAkaZQJzjTfuLL3u215DCnn",
  "key4": "27RmNcfXxA1LAjAv9SWyeRfs4mdqwpb61YYr3wKSPsWZa6MquuXCxthYzzzgs3KFSMndnm6x5FnipdPeBm1iz7E5",
  "key5": "3rtjjifizVkEEcQhdffudV26Xx43DQfBiFvapSujHjnZVbKyAmyS6xL6zcSUV9ZfUH5MdUVkEcriq77Ai5uA7rga",
  "key6": "2ahw21uSXr9MNR6B9Sm8MzMGJMAMq2AmhUSF1yu8jSNY9ytd77XoZ4WXvnf5R2Qo2yMXKFVJQYuJRfyUaoq4Muh3",
  "key7": "297NhQkjEhpLKed1ZBNVgsLwa12NaKDbBLv7UYn4SHK8J3p5AjHSsYUsDRZLM1UF6LEoaCaMrRYA84RXrKGfeKJH",
  "key8": "CmYfE2HtMR9L5JsMFm5YXgRJYDMeXJSMpv6Q8jURLYkBmyzUedWFmLZTFJTgzQEjoF5AstgVDRr7CDijqaznABL",
  "key9": "rvSeM6KqLPbz7aSpmHtzf8fmPizdE6VD6Vhb1J7oCWYMXFNgiF3xFRXdAuSkHoWvVqr26hXaaDMGsyJ1qYjn2zp",
  "key10": "4HGQJSr7LSysGREYfk4L9WALJpvtBQ5qZBmW8QbeiGe8ujS14LLoXyZGH7Qwog2ZHqdznQc8BkmktK1NLAkVQDyF",
  "key11": "4WymrNzG9X6CdmapTDKCT4ZStEDqaohHcKz366fPXyfutwuNF4b3X3k7ryiyFmF1QbTjyRr2vHt9HAKfKzrTUNcR",
  "key12": "5HDEz66obeFJ6hmkc4ni17RNwrYZhK9fjQvcUYNkvGdYkfhYUqEqcdjL8x6kDfFupV6j53MDszpJ1J5dQHCxr2ZP",
  "key13": "5f3NKehy7esVThKLXs14EikY3a391KyekPpcR2VbuPk6vptxENq1wRRx1YvPqv8NN8roBYQ5eUHaJVMxyNc3sJM5",
  "key14": "5EcokPD3FhqZDbjbhbnSsFuJdeVi6hDR2qGpPPoPQuVh6HVtmPfhccbTvqpuFhfb9hB9toEc8AnJuJju81h7SP5m",
  "key15": "5FviSH5wjMEuehZBYutoYcesBVafttqGUDJSF6yF7PVGgJkM12gNNT5RTVPCmy27CAvzT329pUr9W3fPJUfRiDdJ",
  "key16": "5qKUMDpJpQU58ZjV7CqPXbEWJM8ScdqD6UhCEyFqaYD98pMF3CM63WQWcbjWBkbMAzcujp38oJVLcPiZDTNaqwaP",
  "key17": "2CwEGjZc1Fh6Qgyr8QndX9ebrUcEHYmCMJMzPNYSiMBSNkYjbhqTJgP2a495SLMQjEKeggYh5Lvooav47ErFNRGr",
  "key18": "5TUVz4F3mEgzKcTuZDxphLg9cgp62mU78tRozEk73BPA4pU1SH394iyjJgtT4G3nkcRZTqnDkGAqeCzvSYVuMXPN",
  "key19": "uLGpPUhNn2hk2HjWBp3bTAGwZUpf2J2PTA1f9GHV95nZenmXNkevq6paSW1jTNXKuuChzhu6XE9eVTjRSTKQkAr",
  "key20": "3Xy2FgXW9qkeNsXjwkmZ3isBv3kzRg3DE3fjkk5NgZPgvDxoKQM3MKBhUiGy2mbrMeTPBGzPfN6jpRKnSBxr9e8s",
  "key21": "cYyzKHVMma13UKieyko1L1ubYQABcBZJGCowZqrE5STEx9BfLAyv6zGv9Y6ivjk5PmBiRiXBW7wKbwehkSc8sWh",
  "key22": "48ARCheEFiHB2KHwwpiyrTpF6QZycNTTZSwj1itBPu76qp5TLNbqpr7mirQv6XYKvdmVcDUPP7XrF98AEpW6v2V5",
  "key23": "4vvxFAASAGBVa241RFvNW5arN4NqBzH3kyCt6XEJ6KkwkcbxqSxqzmXaojyrJxiSvSscN1axfFa8vwq9dvvSbM4H",
  "key24": "2ZuChncyw8RopWj4Pj6Kmtgg5MNrXJNyj4axWcu5tS42jNdRppiFRhfiB5U9Hmj7p85mhjmRFfh57q3cPGRdCMRe",
  "key25": "4wkmFAWt6F8ZmAaMMEZHw87JQpZqSL9fLkjxSKNefqyxzMEuD8mfFabK622KHhLW59e8RjpGosSUVgx4KYiEkzwb",
  "key26": "3GrvGsqoM1WcJUKfbaZJiqmCyisoD1nRJiVJBTPNGuX23Q2T36jHGcyJHbNbjwVfJGZUbKkbRrTXfUAmnkErLfWr",
  "key27": "HeK34daN5zfGybncnQNWbudP8kPaihzuLMTN1gJHtYB1FeSN22iftYeaMGNYuJY8g9nLVDCprsos37VHBghrx5S",
  "key28": "E2Wo4Ae7FSev61A9Q6vWeSnFwoDY8ZanpdWYXosWg35xdEHvGD9skJjs61JeqWJCHcV6bgjYqauQkErxuYSuKQK",
  "key29": "5mRyrnnHUq7bKjie8riwPqSzi7pVzBv1T81EGytxj4RwajBzM2bvJPHBndGZkJ15mZjpVt8sbLKywRd1SieKszUB",
  "key30": "28StvK61Ss78tZ8FSSuyWxbSHFuLreSRszWAFjzannrdFL3taS4P4MbBkLUb9wjxjFKgNufaS15aZFavzgmMLaTG",
  "key31": "25VZjcWqpHq3ZY7VPgYn45NF5uUXvtBLzwbQbTbXpMpzKPHdZPfSjaFC3JAJb3TL4Kd5u9DhPXUdYky16AsuUwzE",
  "key32": "2eyeo2UDBc2yKpRPaHwdra6Gkbm5EyMxPtNb2yKHoNKW31UteA8tbv4DxGqaz6eYkZwPu2fRocnqPHDFbjiJ9gay",
  "key33": "5Uzpf9BAwaB5hvedCJCnCvipEUGNY3ZQjbQDJ7NWXmBSoHRypGzyrVEicu17s1EwpqSRiNSiDgPyv1sApvdauSsC",
  "key34": "5TxaBxdFYXj4BdDUTGtkofQpQEPZkQVy8SJ496yzaN8Hq5GZ8Mie4vbBztWgAqTQ8Cv9D5c7yeyXejeMULGdaxeD",
  "key35": "5vvKhsGq72ktYRgr7Zqv9CxxLHbNF8af4dYkYJ4aZxqumwehd9zKhiz8iVHeDZsL186hCtF615TmwVpF735NNAAf",
  "key36": "3wsfEZ9cqqTZSDzC21qnWsKP4pYTWaYgGjhhkEU4NJ1FxoeszSpYANdXdYDm43jqpVSrSjxaz4cVgA72i15dHnsn",
  "key37": "ZMEvVxGmp9eXgfmjwWA5m7osYqozYCjVE5rBAzdCzfRhtsCi57qh4svasA825MScU7Ey4mQ3oHXFaXsVJC9mZpF"
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
