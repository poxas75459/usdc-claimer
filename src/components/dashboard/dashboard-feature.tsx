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
    "2x5pEMuNwFK74S6gRYTjZXBA6Gx61K9BcYvg4Wrbbc8CGfSocMH3i1Fhe8FBYiGqaR44ThD3sZUHDFthcG9YYFMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cJccTeF9YFxX9R65KGcGvKapEoaJSqNXiStcFEwBgJz6wmGBqTxZkVuXuDwgxzkLCHMCdQKRWjH99NpnnvhZWCA",
  "key1": "642TS1EbA5wbFyPg7p5hhzKadvwU5xnPSjcC6kohRRGFwFMGba8XpeBSXvg317M1xpeaXjGhFW74RfbYoYds7onU",
  "key2": "AxXgfhs82gSx4hzSqmJWHDjimvsReLUzkJci3bawzeVQyduVkcPqhvBd4iokU8wuYQ3QsaQtKmLASHMmnazte21",
  "key3": "2MjQTMyw8AnyvCnrQVoSJGvc1UvJCsmxWzXjHi3cG6RpF94ww9EXerFPCk66ctxQV7cBqn8rrkkcs4kpP3rrGoHn",
  "key4": "5j62wP8w1P3xfNvF7qEMN6hDbccj1BTLkfGEs2QtWJDojifUojxDFgfBZTYaJpCgFiLYDfuUh4rpavHw2nqBSRh4",
  "key5": "W48JNdv18pXWVwYjff1NnbwRHWyxF954TTLGVGxxkrsbc9nCq8F3MKNgAjqQAtr6owVGXDdVhyZwg8m8dFAco4Z",
  "key6": "D84X6pzQkKV323iutK4itvC5QiPhav7xW5jdh3W4MEKhqMRukNQYVyftd2pvP49xH5Xj9D7DwhJVuYxBerG1d6N",
  "key7": "64447XkdcYk2kLAzcvT9MYHSfCuhJtqsTk1i4Mb2zbsA2ghu5fCN4m3zGZtrmt3qDfKFnMHrRr3At3iJcNhXT8qB",
  "key8": "Wwjb4FAT1pfQ2NTktaYq7M5jdv8affBwnTyiuPsvioepAURvsWASTubicqvajHcSHd6ZZkhfU9b3fFajbj1kzWb",
  "key9": "2RmHMbKUqdn3jYeszhksXdEpt7KtpEUZCiirBsoq186bSvUhLCQo6cY4WRuyU57sZe9eiz2tygQA2Qy5jDEUkNXH",
  "key10": "5ZVTEdV4hkbMFa2oqmvP5awaJNcFjHcDfjskeVTzqp5J7urgLKqg6WnjVSbxhrM8xygUWFpdWkX14rsc2PfyyX4B",
  "key11": "56t9mWVi2pVknspnDCGndu2YLz2X5i4daEfBCek28KMFL1nCGAC6Wz3rWPwYgT9s9ErjkcMN1S7NBXWm8TRPcuhQ",
  "key12": "2HWS9DTQMhH9cvQi3h9FZCQXXQveT3eSZ3u8SDsHECPBvr2yAmYFiBZz5BcpXN2pRhtUM6za6UV1PP5e3473eRRp",
  "key13": "5uUHiDTu5iRGnWceYVyTU4KKUg9Au4sZZa68mdRf3wjgG3D1qFM6GDtZSVRZ3q91Qa9MhVPAY8dtyxKWJJn7oySG",
  "key14": "6L3x5kN4ausPfj8QfHcVPmKvb6DEYdmSowVvArqTcLTH3jgqytvD6DrmEk9xSnSJL8WUcnPQ4vAYBrdXtkqC5YJ",
  "key15": "44AJLNw7YjtoQV76wBaEn4VaPcVi2ibhD9kY7SdJXu412znPGgwge26GjU6HmpVqjwwHY9n6X233VbcVu3TJ9WU9",
  "key16": "57VsU9zuNDe2jj7pLVVLTR39Y4isQw6V8AR4zoj7Wb2MYcZDWsPB3bADxN8j3yrgFYuNwykNtFpQ7mVFWwuRWUcS",
  "key17": "5MM99c6LgtpB3aTe2R5qry6ShL6RiiHNY3gg6N8ukbdAuhaJsGswCdtxrz1SR5F7axBKsG17HRLLTWzcfPNNESFT",
  "key18": "41pRze2HM9kc8E7mwexYWWhWnaELifcErK3yFXev6X3Y1C1GWKnCfYXWNU72xjaJKAbCdszoyHhSMj2ctbPhTu3f",
  "key19": "4kw2WNQjGeNivMWkUAsUEcpunCnyp1PTzSV4Ri8QpndTWP9XU74QozyaiZ1sFPJheo5H7tT5TNyPZ1WixsBB2JY9",
  "key20": "3wGBYJ3i7nzTjt8W4nZFE2BQciAg5ba4CgnJ3zvREXD8DQd3XXHkFnWDv8J1FjmxPpxhsTA8uSNrnEx7w5jJ7mbQ",
  "key21": "2THwhLXbudqrEMXreuFBLfVNdXXQfp6eL1vp1CmM9bPVm1cifWwvHxVJa8bf5duTXhPowsZ7RcPp33o7tKGmJDWj",
  "key22": "2h3vJfYa5LVtZnEDEyVHsafJP3mMPdm2ESZRHCaRHBnykgG8BEAsHXzDM5kQt1hQD1WHiV9g3c4oK3Gx3Snqtz6Q",
  "key23": "4kAAAWf5WcBjTgjhLFhQU2hcJYoyCbjuUWZgqKsVJ12uTmHwxAH66Mto1EALDhPKM5ufuYoqLcqWGDD7bELVBovK",
  "key24": "5cg9LxaR2cbrD2zsVFpsfmV89Y7hm1RSkzYFnVee8BzVtjvCe6BKmUaZJ2fDKYNfe17HUFryMnPtmwDAKekqsPj1",
  "key25": "t85GdWdrykw2tgGWY6FjC6MoBQs4ZUSXtP6AhS9MRStAnEE2Timf2yYVReQ7ux5Q8kzS84HQj3Gbvj7QwLwWzc8",
  "key26": "2XbUWXbr898fGaWStahgfbxMUxqgXUysp3QwNiPLWNwgiDetFvMDsY6xngKEP7M4rW9swqoQV1UnuNShS1pUiwXe",
  "key27": "2v2S2sWh3zCCsMQDWL9aBDK9EyvNj7cKBuQKSKoseZHkDtyn6zeYWRx2Hp6NpZya8V3waCWYhjizrjX3fgDAzHe3",
  "key28": "3EHQcufuaPAx2GDwyoFn1cG9VBRhc6BqzNYpCxKqsMR2ToSUa4ZgnQDHnW54td2vdkpmJqnxczNudbGmNnv93EET",
  "key29": "4dGzg7vfp3k5yW623EaVyuGARh8NJMa2sEu3Jzg4z2dvKo4zPw8tP54bixsaYKwDyNzKrHu7yKozku7RtAHBSC7e",
  "key30": "633iEj1uSdMX35rXerSBdyjzeCazgZmBUCp4wp4xzn1akCauy5HWceEseLMDCjPHokfG8SYowdVXxux6X8mhBsSB",
  "key31": "4TA29JAZ24bQsckRLY4U5E23JhWm77PjMJgFVgJ2A7xLCoWbHfwVWHuDNUVit1xDPQLC3chEbjXUnN5QqswFXqXd",
  "key32": "3eynt79aYRPff9Mjy7zLCTKk7CqKNd5J9yY9zppuF38DcQ6VJx46cRJkSgv2Qu7anaXKxueMakYKP4imWrcZCddC",
  "key33": "56v699mTaeWR62xmNaVSSSYTB12dXKJ66TNiirbe2cke3NAvqPQEHQC5V4g54Zxv9E87aBiem9RvivjAxgDe9GZm",
  "key34": "2feqBkSqWNBr1dCwu2DBQpUgMj2U1WGRwqLMioZjyG8fRTrjbQwfGwB7afZWe2twwQe8hHfwVPeEVXdDFRxrFgUe",
  "key35": "3fuZHwT1JCnobcMhjTeEYgAeMmFQ78ETtm67A6wCZm3vLbHFkeaAj616EMRQNMVTYmUQhcwGXwe3aVekw5odgNMe",
  "key36": "2cEVMTihYJFCzV7E83rk63pyUVy8hDu2CygMgjzoDgXjn5oMPFS9UcD8e9R13TandpJQvJsMdD6u1nLRGNJHbFDB",
  "key37": "2eYoyd6HgiTrEMcdEDSTx7kjiHVwBU9KrnZSFbhVq4DzGap2tQJqDYZQVjfEYWyDqvCBbfaTXNcEQwrNfZHQ3ELx",
  "key38": "3eHomKUVsZXj7JKLtMyaGRfUAKaoVy8Po1VNeiMeXNZkAJNobGToue62aBKcizkAuLS3TxV9RR6wpgKZMF4A972E",
  "key39": "3mCDso4BamCJdc9mHVc5NTtA44en6CgC1CDpMWnT5FLoK6fRrPu13JXR3Cy6LNQYhSabAhy5Hxvt9pG7qVMCjwjD",
  "key40": "2sCHfHu9KsqRRrv9ZJeWNT1w2qbt47yz7CnscK973vh95Af25AQzCBUoEEKBLGVScc6h6brooh2YR7sj3N4LcdZy",
  "key41": "5Pgd7fd6UBVxveDAkpnNgsR4ihUX8zYPic6pXB1xroqJt15bxBUXg3hLr65Gkon8gdeMWwtP4txhkk9qoLk8E4jk",
  "key42": "2hLQWK4gUiG48yYKSsS1tP3HTW4tq1LHBhBocpfyR7Y9aKrNk8CmYhYayeYJ5Ngz7e6ERR2Uj5uHhupoaErxsvHu",
  "key43": "4Vasr39Uaw2QxuHZVDbQtyXVJUQQz7kVi8apDRd4ayv4EenoJRtsD8KGdPVRKanGUoJBJzfhjuJhkeZD7V44TnWA",
  "key44": "2ChF4pQ4q5ZyWvr6KreWGn546Z2YEHQR87GcQoAwpGH2Deau11s13LT4ZUWQhDJXJtZdRuf28VsJpjBwzDFdcyph"
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
