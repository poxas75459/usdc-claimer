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
    "3N2xSP24eKdwAu5yaVnjZ6kxdNSy1Qmxe4EdpVMujxsRWbUNm5puBaMiUQMA6vaeVJTo6cfQECVr3eRfLVKcVYFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JQZMAGDgdU14vojV1M5KBiYKUqYCTrF6KwZeELk5nvoYof5SMD8SUjkmZHqq1WbdpdD6miaQXGxBrxueHtR4823",
  "key1": "AQceEh6czLaz5YSRSFbxAnftRd4wJExoSB9s65kQHpZSocJTdqfoNo5DjLH3FVtpwx9QkYG7isTKxRQDEY4dUY4",
  "key2": "5caxWkJH5p9Y1JAWzuM6mc81DzNodLLWY2KMbzRsbdApEqk1EUXrAAmAdugav9zHNpqt23q5QYudpYMppfPuQYwP",
  "key3": "3dacJKnybQ1R44Dga91rMEZ49wTqxz8ost2sd8fMWG8F5qHCQhFWEFxTaes8cr4qUmMNUSicMEkpsuFbVtP5jd1Q",
  "key4": "2aQHD3WQVgGxJmwxhEKRuDP8a6LBDwqLqovPRzPXYxPkndRpT53dmyuqWo9tmxxFyvd43M1pX5Pw2WsnbyMXAZpi",
  "key5": "4R4deYcHZZQcznQNXnaDv3q7qRGsCZG2CQwmBMGT12Uv1vVnt8URL8nzLqUnf8wFCF9GtQ4QzW9YQjj3BhDhAZ9X",
  "key6": "2zCwb4eZae9XwU5cEw5J18mxWYuZLLgVRoWeGoFdm1CQqQo3dfRs6dLFYb18bTHTpdHBJuzfixrsQMkBXwKpfeTU",
  "key7": "43a3RUyYra6zMUjMef1zqxrqgABysfDjZhKxnkRKPdgGSghtMz4EvCVCM1H4n6BFWqJvybLLToD4Ho4jk6BgX3Q1",
  "key8": "Yw12ib3CGuW4rAumN9cTR8AFX19648LJ3sVpKoKrB1hUKotSVwovgLRb2fwPaxowEgBCSMjwwCmAaFjXfKPabBF",
  "key9": "5UBZz4q9DtjVxrgUwRVea9uZby3Yxyvugmjj1iGABaFkFL1c5dYeGCiELatvHkxK2nvDB2JqgtF5we6GheZS6iPP",
  "key10": "4nwxSffiucoK74BEsbKBS9qTU4QUuezYP6VHGGLWtauBow8TTuKHnYhGDWnVERrm6TGKJgQuS5xj9A47PN2kvHsP",
  "key11": "2nwMqbWDrtTAmgSdvdViCNNSuq24rV57f1ZL2n98ERejSNTnbbeu6TZ3ndCjMPrEMPMNGUAT19SEKmx2QFygJUm6",
  "key12": "L8xDs7gCn7nU5WSkySkkryNf7p6bUYr8wkWJB1nebR2k9vvXHDEjmMh5AfxGbCFmtretaezD2NdSKqMcu63Wymm",
  "key13": "24iYUHU9B6z9Kd9CVSDEhTq1jgiyhGrTSMHGCpQaSqoPS8SHktgRpAUMmSK9WpWqoFGoiFb233nMvHUJUmmtkQpt",
  "key14": "57dcJLmV41J9771pzkeqQFc2GdYQrpoAyeS12LCzdnVc52ftG4VjWnqEvNj1AeTGWv6JRcf4f3m4pt5mJLrTF4PH",
  "key15": "nHtikCVfiMQf4bT4kB7wAJUV8dzaafJyf7TrAgCxsxr7TD8LaqKBRoTYAYfNDKVFm6VHRRA4P34QwZMECqhwFLY",
  "key16": "34cnQrr4VnqQXAU3LdUXM5t7FrVJu5LryUbV7fn4yTSvhd2Aj5H7aN3C6Zgi4jLr4Cb947uJJ7PTmJbUweKBxjoe",
  "key17": "2zrcVEQtPhhhyf5hRTsVZGQEFNNfdyooygDHoUrosrpM2XT87XBpeV63mVoXc2V1LvWWju731cWqwVtD8EbXW6A",
  "key18": "4btFAop1idw4dQzdC8EryAmQiBkRrcfDYYmY58hRq3tHAb4nkg4nFCiKxVjg8eRTcUA6jpVnsDqTcgJNogjpZ8Yc",
  "key19": "ncq9x7h8UbKo7VYMoQvA9NPgHzpfWbZKWFBe3oPXPNDr9Ja16MZhh2CPCvsD2sAM7cMYTKottDbyn6oYBb9AARf",
  "key20": "A5o9XH2xfVNNoH4bsuaQMbmvjv15EYcYw22NgG9igoS2MRN8fheooTpHWpksaPZhXDo1xeEKXmdfg9S753RKZNZ",
  "key21": "3oiciP7bca6H1ayhSjqveBRp2xwjduwTkbtFrki2aseTVkNpJP4Dhg2xZEyncYADhev29FGcffatyzWCmnpFb8XH",
  "key22": "FugFp7gRm86chrMwn6ZPyDaBTAgo3EGFLHqZv77t2tSuXqnKBr7q354eXHCvy1pyzFBdwJHvkrxJhiTdSPLkvB8",
  "key23": "2zhqaEm47sr8me9Z6rP4BYNUq3Y8GihjfLiKp1hWuCXmorB4ophas31K6Kr6XZrPNT2UKUyGFE8fx5PzWs3dd98g",
  "key24": "2WnAbLhQkbVf6LaK3eQ7b5h3sFWXCni1F5ZTsUq1FsvqzrD5Z2szabZdxLi7MZpChZxuGWMJYK3RB1dCj6shwgKf",
  "key25": "3Acw6A2Jt15QF8SKuwWZbYUoCJa785p8jyUM5pp4iYq8zMngA5XpsXKP69cNdtZysqNS16hh6dgSgfYMaUFAAsgD",
  "key26": "38htS5tss54C4gJnwcGSzQcM1Y5897uMR5F9zr1Qig3qMcrdTHw5g2aEdvAKVZQCqQKoqHaW8yG3vkhFF4AgGFw7",
  "key27": "2ufDM9XTuggjoeN1VbJWMgvNiP2FT18Lh8tP6WWhTcAs6V2MUe9knpKBNNSUnUCNUQGTiFUPW8TRDrwQfBad5VBZ"
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
