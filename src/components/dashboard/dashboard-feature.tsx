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
    "2Y6SqvSX4UijTi6fmj9LuxGCPuGTdM4eAvGWcNzoA3VwWL91Ja5LZDNz7sshZ5qDgyKoD1YvbUNpEo8i5FyaFKRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G9TpaP67cEaBfYUBAsyQirDswDh5hgG5nAgtGKuMwsgGg5zK8ywSrZ6ncd31uefokmY7yPdGkX3TDrrTFc1wMAs",
  "key1": "yer1eDe5sFo7ht9uHSE5BgMuYYKRTQs4SNMPTLtRFydJ38M1haaFtNzB1do5LAV64VgnCkpMbU3eLTRD6UsYrPS",
  "key2": "3RozgMwPefwBQ1GyAuwRuryY7DPgEbt6jxE3a8iLgZsU67Gz8WFp18kHXdsmwuH9L1peaurWhG1kadf1oj4ECdoN",
  "key3": "3pDR9BBHTD4j4t3kXcQqdErGM21sPjuvBzaokfuVBW2GJPA4N8v8kchx7Wb3WRgUHeGGVcphSdAeU2sStWbDVgjb",
  "key4": "4mNEdQGN2cCqHVMiZPQ7uERZmveQx6mdYXWoAPFh9vHarBxuqNABBouTRhDWedHGZYKnTvSuQXE8f63APj1yyDFJ",
  "key5": "4FAbtBBbQq4vKmkikwKMNNWSC96HBvhbTY3Mjrz3qgacTZreQrLH9PVGdYZXepw8oHpKui3wZ2j45s3oFrQ5Jkpx",
  "key6": "gLtaSa6tQikBEoP4Skn4LJMMU5imvR1B4dh13ASWuJKxQoDTzjyP37uTZzdxcN81rbXYaHZDzJLxqzva7h6bTQg",
  "key7": "3Aa5DS9FBaefcR9MfCvUAGsVdfHpmx4GwD91QHEGEHJvs2vm1tpWVGVE1QLXhaPCyHixEkGJBeFbtRR6JqdcLsf8",
  "key8": "5XpkFaXytdyy7REs3Jo1cfTa7kCtcNRqGHbLbGmdfZUa3sSntWgxKdxcsYFLN6JtNMkyct1r78Wrqu92oXiitsuc",
  "key9": "5ApmQxjfT1BwdPP1Hsahu1bgmFRaaTFvytoZhJLZWjn5sh1UFjpjPYQhFPebARGfrkk1m56x2wW43CjPAgogbonf",
  "key10": "RvzthF4Pov1xxw1qGAivMfPevxSUDpkoavHNnbY2xmi7jDrGopWqwidDDY3THHBcMDdoWf9DTC2ryhsNYWEDowz",
  "key11": "J4pzkudn1ZcUDtSyc2bPF62SqETn2UAAH2rgnpGvPqgLG5ezxw8yAUSmtwRZeqxwLWWsxwiuiUtmrVngpTrYiTs",
  "key12": "2ErdHC6gmAYF6fLTmHHsRBnnSnAfsRoiNfgSHGCEBuMLZAkc5Fd57fnL7VYqcbFbJrbACtNdd6nQNDCxv5ysCKY8",
  "key13": "3v7pQbBGWCfvD7djfb3EKfLhap4zAzfgiB7YJdpDpdhQzDmZ9U6va6mpgoJEWofzGmbQtc4ZjoChYiAqWxNbkocf",
  "key14": "5M6hVVU1MNnR1hvZskJj1G7S3qt96iWGd2vSbhYdySTyjWtza28cL4k5Ta7CCwEPQjEf7tmg7pkBcQuxnyxzHVbK",
  "key15": "4p3uAkLLzw9Ac7mWLTecBgHwbiZjescCsDPoYSi8RSNezXKCV5sZb7qMt28Lf8epCAkxhgXLLFxMgmHh35gnkpgQ",
  "key16": "5UHwtSV7tXakdX7GYTAJGUJsryZqwA8HRT3eqXP1jqYwRWvwAjKyHHJCgeDtG1NWRoCiMr1cezkQnE4t8wFxXZ9",
  "key17": "2f4dpkrpC8H3RVj4b3pdbckfAWdBTmG8udbvxqKxQoJXy54Cg4fRsmRPoeyFqbWURy2eLLrXMygBHA3MWeWksrvm",
  "key18": "2egdgFucEeV9J3xb3hGZ4vYmyH2Ghpx7bbLSXzWzT62GakorW8LDSKDKmFM8GubnT2EZoRjMD9TAqqsuwmmjnACB",
  "key19": "3DLrvfpmwvZnuSrecfzXohkQwC6JV4s8SfgzRqwidinM4zM6ABzGfu7Xk3Z8BaZJ6JxZirvjHaoMfQuJ8PRQcgSo",
  "key20": "5FrsMhLu66aHypNrvEYuC21QrcVBfe9DorW7uwbHpE45L2e5aD7B4kdqnScYvzkunrvgqgw5nR5e1sM2DD4RYdHs",
  "key21": "5v9BwxQ1AgrcVsuaa6G4RGLdckGMutNafvWWdUVaVWERVaTH5Mw9eKZF8LqC82gXZyXgeNUvYFEujuHuamZCg1jM",
  "key22": "3vVeRyqU28WJNiS1KFJxBvd3PTMoSLHFjuMphXUNkRkbj3e9Ax5u6ZuhSQoTpvsa1MbRD36wgyAFZuWV3e4mSKdz",
  "key23": "wm16jXDQwex7Am1Z4eKH9LSDH8dyoRQt2be89a1yfdjmH1BYoVNEso7BDcY4kaLajv2zzCY7ypjHAF6ecYzs5N2",
  "key24": "5inpWoQCGe3QbRTZER4XGxfkcmWHXPo1He1fZiPgePD7ArDFNvps86perY7v2XCR67WTp8nFp4yvXyoLyLkSKr3w",
  "key25": "559xskpDqSkqNdZ1HdsyNcUxygXrmgqvWekophS4UUqc6FViKkTuUryibYhxaeupKfXkNTuHNCgCPLxAfqwxaAUx",
  "key26": "5SeY75GfztZjnKvbKYZVqhXxhGsc6Sz6hQ83T4cWtkhZNEUDEBw8EdkUGAB75s7p4mPJCgRpJnyFGWVxXVs1pwhV",
  "key27": "MiJTyRCx5ekBw4nMi1yyANKQNr7mnoFwcj4MyDdQkWp15cpxJApxUrRyWupPeSdMYeWCWAW7S6RDBgDdQCxwBLf",
  "key28": "4XEejutTDtaXJkwXtpEUFhPr9juZHRSPPtPQ3HFtG7hDykWKRZL7Lc724yyEzodnuQNp5Q2T68VbQdF4VrtxwbkT",
  "key29": "4Rc1pUZpePz4LZnLcYHoFKrnt7FDwS2tiGBXPxPpb7VNpK3qxWyRm2ucpBiA2bVxcaaWAWYjaC9zMyNUDvKByVDx",
  "key30": "33nQUHULQrMUCHs8UN2vxAFmn4Xdr6wMgvURi47D9MUUKguVX9qjrjXtdw9EGH2uNnfrmJT8gQMHN7BdBi3dHPje",
  "key31": "57B44ZQo2nS8x7RasqFPJ5gaimFqCV9zna3hYYgxek7kocCRM4wvmiB2wms84BDDNiecnyhQxcVzgbrohjrG55FM",
  "key32": "4HhKwVnNhWgHT5sGYi1K7rCXttpQ2Jud8tY66tECvTFQE5JbKj93GtkACMXvpwWhDF8VgQAjaoBTj427QCCELnHU",
  "key33": "4bo52cjDsDNr8fkLQJL47XjW5tb3w4GagCPV9iEwA4EW4mhDjQdenD5WsCYjyfpThbgHKpN9rVNtSNJftrCbproh",
  "key34": "3Z693RqfSRVZ5rt8uBagqMtKHwbwAuCMut3yr8oeLn6xS1Dk35djwpxTo5FYgUMMxkcJ2UQYfHz9DFWGykmq6d6R",
  "key35": "5Zr6CexxBwfkkXV2YuqGycsrXuFZVVEMu5sSjYVkviWVJRkt5tZJ4oo4UDE1nAkVsLKAminP4WL7HGYCvdq8prkP",
  "key36": "5BHV8zFGjpimTHbJ4gsHWpEaUd4a7Ln6YjuhvLdjHiZcAuxJBSkAWUhSqGoXb2kj7FTNVGUz9Tg4ifsYxeXZPdyL",
  "key37": "5JJgvDp3bYMJSGLrrV5yaHVeY8ZZuMNbVdkGTn8MGEEq8iU2ChyYYhnsBx9BKBFyFd2XxqeYxdLe8JmAVh9CfQyL",
  "key38": "5N1YmqB16o2GvqncotpQW4oXpujd2WeXzHEuowCeXMu9Nvx9U9yEXB5pkEixx6oKkpff98zZPBtdnDRQ9gWbNmxU",
  "key39": "hkSKGG5raXzvdjo1fe7wuzM6LScyiNjPtdfFzWuSsoDhiTNhGLitAMWPQmaMr2mgCFDE2xi2F4SPbEnqsv86LGZ",
  "key40": "5VuZ1HaSVUAUKn1TXVNS5pJc8WvYufWKbseDvZDLvPvd7aXBj93bFh7bX7kb2YsUeXmGPnfEV8PWjq5PuMWkEspn"
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
