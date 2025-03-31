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
    "5AP4Fv3JhUiEuBAez5JdzBSSafPRRWB2VRdMpFJTR5cUcBwimQrvLiKJ7JBb4TznefvmjrDnznawNkC47VxxgGPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uGaCWv5ggRoTiknCKEAs2nhCrUxBfvVHwUosGQuK6TGQ1pBq9f25nKQe2uxjkYx3LTf29mSXYsY5RBEwbkx6iwx",
  "key1": "7gWbqW5j9XbFj6pe2rW8pV7TpNDj5TfDniCRpVE9SaNgAorhUFn1ANs2SNMGfoHa6FXP3vKvRjwNSmvBCnpxMze",
  "key2": "3mnhTSrtBLmmpXEJsTVf3X6JKeETZbnaY4GX1VbooSY1uupTvdwQjS9KF5CpXQ9EDuNuYtN1VrsueBXZWQZqFiML",
  "key3": "2qP5C1fJnimbhLQ5GbbJNGbhnR7y3Lgp5JTAW2NY5YjR6XfYZ81FSdJFfSgJwnEKvVV7qrcjJGji9S2jCZE1uxYU",
  "key4": "5MWVv2S2EXkf37ATWbjmYFZrWpXFNpW8wRBL71WR4CKpVt1sFQ6cZ3vrB6SKYqimuhLZJxaobW7FiuTo8jRedcnM",
  "key5": "3Zde5hLaW39zgwB8vPjk1ZYe3r18EvPqxFhsf3M6nzoyHbGNUfcd6pMmPo8ewCrPpyjZLit8SY15yhjztHGy5oya",
  "key6": "2knBw1hu33r3tdEKpcnPrmTTN4dFbUeJ3C6aRECsDj8wM5QTfUWZYhnECLckQXhgJ8vkKVDViF19NdHXzXAcHoVv",
  "key7": "48Pdh7vnwzci7rGtXMAEoZ9cVg1MuAnaVeVR9AyM3BUrvpe5VyovWrBXe8r3gH1kgmXzSZAw7RGbqLU39GC46ANG",
  "key8": "ZP2cxUeifxVoKMyMPh61e4em45131gcPtm8auEEywqbXwKyCzGagn2ay4icSjc8ekpRx1W13gmw2GkkpFTg55xq",
  "key9": "3GrjRUD9rbdDgajw3uEzgKhH51rpD5d2HYEJSpCMVfTYwZhtY4cpWoCE4ELgAho6G9BEATGFGt8qCfue5BPVRHik",
  "key10": "5Sqd26ctV8jaYEWWZjSQvNgEqrNS6DgZaSLufeark2eot7yaT2HE3GReGHiXeTz3LqR2UTt9L2eE5rphErov9kpC",
  "key11": "56CNaHgJs1wbH5FW5AqWzYnxMmVhTGyS3mXMQgmqLgUdCgYSXy6NUhdthKkijxDWhaCzQPvHDhy1JsLvhheUq4fQ",
  "key12": "kcmVe9aGhUU29BCrpFKcLRGSCWdt225Y3y7TsKJySazYQc4esq719Nb1reknSBppzQXyQEjPJitvTjv9nswfCov",
  "key13": "52gg5RZ1soTSnf1EZ5ea1noVze944anqLdYbMFKg76vsw4kQjeEKwm3y4wXYo3i4NEQ9WFDuG4LdjAn6jMVxDqLT",
  "key14": "5SrZchEPKxZVjX78FTP6TXnrFw6Lcwr71aaWnLosbCbc6kRKSiPAnC5KgMVAxo4vg9M5Ltcw9igLdY9Q4bL3hroa",
  "key15": "yzMzJ5FkoAnAFwQyQx38h2UBKzuDUuA55wXDd7i3AD9oLDJmPPWyngJySL4EMMPHDAeX5Ron5ZYzs9NxmKCE9Nv",
  "key16": "4EVXod38xeuHh6wvxge7VqDUpQEd8jUTbHdFrTqhLhZGr88Wu4bRsnXGGkDpRU9f6LtHsmsJEwkpmKqjH1FvmtJG",
  "key17": "2SNDavnWnSMvWopEQbUpmTbev58PJf1Q7pnvzKGZEFbKzth7Kc5HavfmYDMdkcX2MUNsgYNYUQC8J64UsL3GqXMg",
  "key18": "5r6tAjKerCgSuZwdyGuCYf26WK8h5CiMyfX27CumoM7TFs4cQiBzRYjRee9yn41eEKrak8wbFTUKmiwxxN2tvN26",
  "key19": "4MrRKYmaUeBj4HiypvKdtHFG6B5DBCN9T36XaJgKwWgezKmWiiUZsgVMfrvPkfs1rpDVkEhK5Q14TZaji7ZZQZsN",
  "key20": "GV4WeHDs29ypUmHQRgZCAvwcHJUn8zKanq7CicVLPAfUDYEf6WNBVdKYQs4yPBm7CmeUW5VnUCZhn8R7oChC6Vw",
  "key21": "5zYF4jvoEsHLztBnai8bULbDvmi9x7e3fJz9v3EAS8iUGRJN3brQqVFD2wRLbqAa4MXdEph2WTwkQ7MAqLxmK31g",
  "key22": "2W6S4Nan1ZrHNYnKdupgueKmSvZbwaBtsJeHFb2QUYvhsAwg9zdc13zTpnDngXppNXxxo1M8RquAf5H54VktTGk1",
  "key23": "28Mfoo4nhZUAiUmUWRJ7TosHVj1vsbqt3Jmen5Mg4qoNCLARFLiNyt8P2KcPQc3zbxUTpURDH4PLCg7bB1c6bhpE",
  "key24": "deUPukohEDF9zftJchkUU25zfhRwcSpfZSwZoP4MAYeTMgWXqwpJX5kjDtp86zGkx2qnJochGeqyXikByqG7sP9",
  "key25": "4RQTtY2XwtWbQAK8FSYaoGpL4iEcJgScJHX957B3z77PJDfNSas9XWPwKyKGAYJB5UfjStaHpSYY7nZLuvV2FxvZ",
  "key26": "2BvwaQMDZx8rsKExEmXMGMXwTy5NQbCwSFGH4Xd89JYpcjaC9uSxBzv37GiCLSYC88pd2Aw6cCKCZnVezCjs6rPU",
  "key27": "3aYGsjy7Rng2T19wqdNiMKdm24ZndE1TrN2U8Biq9SiE7urr9dLo6JAFrKrATfHJopXT17cbHTbCBoWQBZb7KNfo",
  "key28": "2Ndxtt72zj7B6WMHev4vejqqQaYNkHYsgTAPQKkkzmwaKGUx6TS8UY4qqQRfC8e48zE8EQbT1YSSwP8J6orDQZJg",
  "key29": "4J5ZUmG5rPriioouHAiePTwkNuFZmFfXBNaKZGKwGx9KXtLGArPbWzxJDngk2NJDLmRK5T27i9PstDajNMbBR3US",
  "key30": "64iAiyUM7h6ve2paRBVUy3UAtsfApuSpdndsAvmnQMofyr3qjMe9WJPNZYXymwCghoT7U5JFvNuiDXsG2S7QJjpt",
  "key31": "35iRPAQ6qYmSbkmZn7YwLtmnNpVn7hcT3XgN8HJf3J54JKLCtKjfLLTr5EHateMn9u3H3aX8qzRBD9E47JdqpkqN",
  "key32": "2aQ1pW6g6iq76ZRtbw9vuARUTsiR3BCLqhYcL2YY5ZbHAr33tprR6RMVjUpsfoNXWNm6hpFs9QWw5P6KNwS6PmGU",
  "key33": "3tX3pXsM1DoRo2m77s7T9AWpJoQJLj5atTTEPXN6CoN79BJFx7RK8mqaGVLyYbvkryKBpq77CCppcSyqnx2UFg82",
  "key34": "25i5teD1huxZv8wERmRheJycJNXSB2ESp8Q62hWQg8Db1vhrcafvcPE5aNaN5XMp4dpLjPvcqzXYZgq4ZHh2R9jW",
  "key35": "4Y9bnLmrLVVtUWgmS3HRKLpSFiTM68oTh59C5ibHbkxPw6TnJgG1AmH1teanYpo3M34Eeu753k4FjsE6PEhNtpE3",
  "key36": "5zzNcxpjhsexCmXMt2DnQjCNKJkfSWn8gQvQUykv61PuyUZ7aE7eJcKX7RA9T9yPv96vWtVeHXeBYtVtfxXscdH8",
  "key37": "5ogAzxZE1y919wo68wkZo1HBXXoZcPcsXQrkuUxgGV9jK6LTYWQTZg3wcaemrUpQe5S6AK6Cgeep2oahf4nR5ntf",
  "key38": "3G5uxy3D1grcCuj3feKK8Ca7EApz7iuVEDv5DVpxifu5iiSA9kRA7zVrZJa7MXmieNFBd3nqeB1GEbrY8aW4vYEe",
  "key39": "UdPvgWN4usD6vBiB9pAmjLpy82rbY61zer8nmj7uZRxt7jBRsqJ6RghVFed4Yn3ZwowUeikibc2gMrKoGSe6Suc",
  "key40": "GaxZSWFdVJwCauY1jzdHTVdeJ9ZPDse9nZbRw4ZwXzZBPzFVFbAVvhrdSrTeYeL2B6CFu1oXLsze4YnCVMcFADs",
  "key41": "hdiocvKjMK6gXeC3D7zcbk8wUYD9Ujz18FcKyVJDkwcKEJbDuKFWwMqpRC3YihhgxLaik6MqRCaec77xDC6rXwM",
  "key42": "66sP1MEJAqU5ZAkTCQvGSD5j2ckVjURhuwQX2ADeYKnC3AHw5JV8zeAj8DS7FrqVsxUtVkCfNRQAN3t9tTUEZWzc",
  "key43": "3nkBUYDMcgD7qZaFbzk5qQM1zxduEkDYsUjbjL3HZZvvjmth498pFPTSzQihBMCus13ejQcrDfpRvEFnKHFwauYH",
  "key44": "4fX1CZRS6xDu16vx3cMkHxfhjbEQDbUMneY8S4EEKc24AU7yR1nHezP6fYqcnd1LGFiFmbWwXQWJytntfBy9nRta",
  "key45": "4mTFSCXbAfbad48ne6bwcEwLxGDyg9W2wL8Anj4KUPcBEnLhPzuvrN873xj1Em2M4frMb6x3sHgMaZBqZn5GmFKn",
  "key46": "3B2PPjUXBwjJ6qiwfRNaa3JSoNeKKkDXwTN5QRM6MC1o3GGavHskCy6DECsshJYLRiPmSwfrZp3WGTsCrrWudJ5h"
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
