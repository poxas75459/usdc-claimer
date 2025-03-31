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
    "3EzUDAK9asiCAF6y6otUqVKshT97hzvB7HrJLLqk5thaFDDcx44kBC8RYVqQkdpSWsqVmsFDJH496mPAnEsZNVbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AveJdRphArLvXPsGRNnHDpr7s9rW3eznqR2Nq8i7v5G8jefuhMpsKDBpFZD5wYGRRycFRC1N2ULLgHr6bhRZvxf",
  "key1": "3AxCMRHpFNLf9WQ8fGqqaEGRnbbop3N44yzD9zXWiRRBMkAfrxwPTUpc4622vK9cckLVCkZrq5FWpzdqz87yH49V",
  "key2": "5KRzwmHi7KYRcF5d5gzjWGoEum1QmafZr5LFsSKKhtBqnNqu6vmByRhne6XNozhasKUG2RpW1v34Rys1zFMb48ZQ",
  "key3": "4TfwSGiYrTbtufaakVQnVGXgmNSC4JHtbACzhsSqrFZU2hxGvE5uojYSAXVSDUA2ZUi67UWxwHPupHuv3CXbYtFe",
  "key4": "4CVCwB5uzduvKwRVX831MmerUjvDYWitwoPvS3GcoWkPvVAktD77d2Phz5XRZccoAASbUpu1hvhQhkaa7guow5Fq",
  "key5": "Zca41Z1dq6x6RUKp4LPhUXKEx9SyUXE32GL4AxSVgLGy9KichWuXsV7ahFKtSsgnCDZ12kk7hvm6wwCHwASMbqL",
  "key6": "4w9jcMS6Va6UMbF5eNU5hiKR3JGKXZD8ctCfYEU8WKzb5Q3Xog2xhw46YMUVSgC5VMi2Uv7akHtSTya5X4xubvFw",
  "key7": "5FDX6BPbedGs3ijZbMTZkmmDD2wXxBHHASLz93EJVsVJ6qpXN99qYm6VRJzudCUiysb6bFdkaVU83K1BKHNost13",
  "key8": "21ERPs13hX241fttAfCeZbGMQPojA4mLNvDSG9gbJRhSK2Zi9eSCkoyjfZ9HESMczdSuPhwwLzL8qbdjLtqNu2vL",
  "key9": "3E7Uf76comKuPe7PdUgydxB3ZeJDSKWBLJMwh6hi64ShmF9hF6L6q16AkAWraRSi6Nw5fF2Kfz15wH7mFxtEVxHi",
  "key10": "2Frgoh835dGrc1Sh6gp1TC6ZVt9afwZGENDcQH6xfwrkjMYWu1ibhbic7XtQj1TBrSbTcGGFbhtXXkF8fTSkruni",
  "key11": "Vn4wKDmmsam8L3kyMy9H1Lvd2Eaz7VDS1wDEfFi1UZEtdgySXgUGmTrWSzVB62eDjmtKH2Wp5EmKYqdoQNF7Eqm",
  "key12": "37kdiRG4BXSdx3wFWP6K3WpzNJssNsQKLJAfwK4PSTSkF6xY5DnPKczDj6NDhGLsRcEzLWKaWxuzFiZ9onUnvETz",
  "key13": "bCRZ7HTpdyyN1omxPxRKofP5JrULMfsH7xKPVzyxwqhJC6yZLbti3z3tzGBUGgYttXPy72gApFfTYeVm3BX76ht",
  "key14": "4XTZLZ5sQzwWFPZtBuitAaSY3bLeWj8ivNMUURLwtnVz5CQr1VZR8JpSekKBcK4m1Lq56UDFPWSrWkCLZBcP4SCZ",
  "key15": "2vThKmXgpEZV8WWdZMeCZLQWbmaFpWdNNgtV2xjZr35sD8CycGjzGXifUyQSycaQSiRyev6sBh2YahxhEhoYz9aL",
  "key16": "HmTur12ytD9gGsroZ3s22ptVXpWZH5S7dd5iTHjZSwjyVRhCSomNJCb4srvg5Tk2WT87kmV5YuQAMVRTQbipWeX",
  "key17": "m3UXEkZgDKDWXvAS4eUL7SUwy42gkVZaUFxBZUzFxvVYhxd6Xasstr3g9nwt5KydhAxhs8VpzZD8rvma8j6Hv3G",
  "key18": "5RMhHrugXL1CDECXGpwUwWq4c2Jyjna9LN9eCpLZMTL5nqVMB29sxRSq3KRkdAM5x22efcqd3zPhxJHrQDZUWHNm",
  "key19": "4KcSBNSK6hkmWez6wq8tcsAxPMYFsk5DuKsMz2pPH2HuKjHeNDmomTD9BjEhYzTxKkXL7LeidsFgi9Ue5cspcQzg",
  "key20": "36X3tdnZhiR85qJd6mRxGFT3TKoCxzbRgHvhQz3U6bkT8KRzZSPS6Lq8HQ3bMYSuzDc49yF4husnV8ASUwGnTNXj",
  "key21": "sLHE5GK5LooqnJgDr1CKBzgVxxiebzsyPm1K4GbvuP5w1A8XaX6iMPS8HuoooNdMpNrHoT7Put4EahQoqk2uQFT",
  "key22": "5XpNT9DTvMw26TQEhwfFX1ernBegCDEWd9QDv35G8j3q6G2XwrCpBqcZt4cxC9cXDGb1Goesws3buuNQp3FTCMLE",
  "key23": "4fezhK9GBUDRpZfJWh1rpGnsGFroCQZoVNCu3uNJoAjz5fovc5xjtauyasNh8czELQ72FqRhxDYwck2DiGMhuFsh",
  "key24": "4ahJ9UxYEhkupEkJR4D8LASwp8o3KbHSYCyrZaJb269ie8HojPycYqkeACJEbyydQcFZGTNhFmNyBm4grVcgEcjD",
  "key25": "54dS4XfhjE3kzuirqCSHkTkhxDqMajVXGENB9ogQWKWfPtQJcVdJf9GWRfTmY4MECtBCUbmSecaqtfPHF2W8Jp7f",
  "key26": "45V5XvuAqY66FQDzGNfRGfkeRt7Tp72RrU4QrsweqKm9MAW7Z2aJXLgezBkJ3gaDx7J1pDYn38Dq6LxVnKnRr2iH",
  "key27": "4gwJS9Ueaw7dQd6Y7jjJfJ8p46W1uwZSd3v2hw1JXHUKkNELFrVwQLJLvvTpLQqYjqWfi65ps4pifC21u34V1Lzo",
  "key28": "2CCxgMhpRyBFqeTjAfz2sPiMDYUXtiAkro5yoxgFBrGzGk1TLcGnxnDmB848G8q5xiyZGmsX7cRaLSrgjr5wZRiZ",
  "key29": "3Xc9432jeeVtL7NsuUEGKdm3qBdpiCZZRCeBoBb3WeeJgocf8nBRGudWQLncsL1WhZhXAcnnu4GvqZxd4WVismku",
  "key30": "Tdo8Jngwb2EhgGpDatYdhYt7TQrvNdDNaFC43m8tDntS8jj5WNqtt4VHeGApJi5zuuCjcC59RxF9mo8fj1btdXW",
  "key31": "49qohyUqjhVHV1gY2WKjHxq3MmnSb63VEDRvnMu4kEvnWCjEfrXNS9QhBrj2xr8JmWCr2DMrF221NApwfEF5ZkSb",
  "key32": "5trzQQc7TQXVV71z1xjzxvTNcgHpyXUk1SuKLGGoBQgzq1WYHNoKLg3hcxRJeAb5cpcS7U63jKebTAmu9NiPnnRq",
  "key33": "4dcAJzeqMYhqHmjbqkpajY9KZYvZGdAXwsTp4Cun1TRwtBk2euPeztpSVRb8FJjmLSCUcUnmJ7vbZacjQiSdbhVP",
  "key34": "5Aamgx6LaWHuDtyh5PihJ3iZwgLGoDQYeSfBpRJCvsT1boPQMWTw6TkAbEmuKfHiktHUecNSQ4yQ1NyQcYKATD6B",
  "key35": "5zLuZVgK4UcGLzeCpPG5YnHWWZxynycW3tsvnAf1zEVFHSqiXwkteUeXS2BcqagbuNYGs8giFy4R78eBS3mtYQfN",
  "key36": "4uaggv9yjcLsmFXxGJqENM3S1hyBnpaVuuS2BH68XTPnSzXxcBRXq3fvijFENJDGNXWo4jFba7NpjLDyme9VvEVE",
  "key37": "GzSjWgcKNQTk9Lp8QvoyYjupXSsY57oU7q3udwRrM7whjWqsGgNotqEmqZqGRY3ntFtFuTWpx99gLuikk9nvyMs",
  "key38": "3Qar8G9jgF2FK8pgAS49FoWsmAmYb25LqUxEoaazU5CQi9ttib5DkgY4PzQ5G8RFBgx9FFupPYWU86d4WMxd3mDa",
  "key39": "54wcmdRvnwETE8Z2HyeNup1N2RBkG9m8PgM3Lw8oymf88nuhJwpYTdND8gyKCQndNkRsiAmevWUYmnnUhK5kPRNP",
  "key40": "sGpzoSGQHKHhB6M9Kn3YZXwWTYnv9aBF9KHvYgKQ8sw3X1nKvWPusMswXYX8qC4yKYM6DQ3t2j5MgtNxNhJYztB",
  "key41": "2driSpvxGwjXgCm1WpCddU8u3rZFr3z4Ab669ujZw8dqRP5kV2H8NYZj9TEuhevPmrtp2tHZZUaAuYasKsAKoDGA",
  "key42": "3qn7sd4uLqo6RW8VfwFtEVL3kEWn5vydQEEq8veVgCu8bxyNDYSKS4euYHtLReKkoPHcZaVfat2ZYzxKdUAGv8mn",
  "key43": "3acxnc3aFnXs13shH9nSi3kFUKQCyyNicDwdHtSA8T3jyQoYhc1nujsntxotvgEF1xsBihBvG96KpZJPt1CLV2Fp",
  "key44": "5yQWZyRkwctDspbaJaxrboVuhrWCPTXKbSaFWoHhue4ozAi3tkqFRT8V7aedp89J34htDmuy7xi7qfzDof4cgnh2",
  "key45": "2uBzUg5ciSmvZeL1dRkken3aZBauGF7LtEdSNZPkhugzX7kP4i3dXFceTSuhLWygXbA1BrW5Z8UuxEyQomBf7Hyc"
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
