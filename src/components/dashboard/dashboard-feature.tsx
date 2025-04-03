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
    "4ht116ycZPRTYjgjVrnLE5f3S9RUk3CuhB4VcdPR47KurU3vENr5sDcgRpjn6QgB2jRUUAoEB1M55ztkYfGdVht3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yAn75xTMzzh2MPQgdmq94i8DuhCg3AvEfbqVAtBmuzhTMNx2SgZuFfznBbTe6LsWUJ9QuTHK8EuTLYu4TsFQBfn",
  "key1": "2meKPVihXwteD8Bbbxyuwa6a1gaktxZMyZpbfTEY7BPvoBuns9atxGKuaFKMm7PK5Rwyd3hWmBNy2DN1QkPWp5SM",
  "key2": "29qpoydXmKf137DTN3hGHi3ur1aBzSqbzhmoZ8gLXkzqWQwVzSSxpvihD5GGJKpQ82GQtRoigoUcN2xVJmqrwvmb",
  "key3": "tQJzR9hTQuj8ieHPpyhLipJoKiVurb5WBDeSco2rqJ2MuHiPNWDd1QoensFpSML7mRrh1gMyV2zM6g4vXmE9gUd",
  "key4": "cdkfw3SYhSU1ZMiu7vJpzDYnGZvLRX4PFLzgnxYAxoNWo616P6YKrKhygpnbX6jFseCSXxHoRkvmjdV8qjgjAJU",
  "key5": "35kuGDYpq5G3HPyLfBwvC3ZHxEiB6QCSnMVQjTiNn9BqshhbZb428ut9UmhaiXCiUEaNpAYcvmCLb718V8GNJa3G",
  "key6": "4qQhi7SwQ77fkFtvDjVb88vHDQh2eswXGT7bneMaJjxfYELoNaoKezvcFa35nLjK9aEuJUyZYtpCZJoa4z9K6QfC",
  "key7": "4aKg6n1t4NZ8PCbFaJervv9D4j1NkreHUUd9L5pJQPMH2w26WSucWHcnp65AXAJ1hkxDsZMoiBaNJ7nJYxhEEAh4",
  "key8": "5VVu2iYABTdDi6hFkUSZgy7xqSsJqGDY1KW2bNvSfvNTjmNQ1H4sry3Xc2LhRdkc54P484kAQ7u61CWD5R3SYrAS",
  "key9": "3kohPb2WLn8QW5Jp8xD6s5HGL3Ga9DZP8UtBwChWjZCJFUtPcMAYtFvDx3dq2PB4ewcR2tLtvaZHfLDvQfm9f2Yy",
  "key10": "2YEZ3wPGW7uentjbBK2wb6BpmLuSb4DJhXc7Q9shZZF6v1ZFwNAk1sB94uUS9GRH6fos2XkgQEq3YPmvxSyGnXYP",
  "key11": "5vWKFmmcfMDNgErGxURLXvAuPCbUVwDugEyGZthML8RLYVrYn1ipsTtMAdH4f8V92t7Jrf4QWBEd9npfMWZPgecf",
  "key12": "43q5C43priVpx8ZRz4LoTEqhkTSM9yJ2tz9fxauzJq7dPCdCj119sMvXHrVmJMx8rxyoJjSjnBKwfuL2doS7qBij",
  "key13": "RFew2etHDGhbha2ZNvXemaF8zoaRRPXxMx3AxkysnuQZsZgVtqqfrUguC7DWm4MvRUxZFCEtZfUP8j5N7jQR5a5",
  "key14": "2cJrDo4Txxv1QoVgRd5MzvWTnF1KiQuA9mKkKSD8SsjWTX7DHFxSTk7Cz56gMbmSbtHaQs19QiZGkGrwgSNwVNph",
  "key15": "qqkCDZjxeXNMBP4rCbM2nZkVvyvY4tcT2pB2YpHTmLXEveKiQ391R9TAtCNYb7Y5rNRXk5pnXUQhbYJVg1phTHL",
  "key16": "DKCd6dKYfjMRA4y9DT84RK1DNvCDAtCW9Ae6DmCUhywD5nQxouZgwTrvZvy1HKCDGQL25zd7EY3xmwcUX89aTpX",
  "key17": "2ShHZgJQCtjxaSKcDue3LbNYNpQpbBcLxQQtNfzWxnu4uSmYmPNSKjm7v8mfFZcmbpmL1CcRprL9eD5Taz8ggVgi",
  "key18": "442PF2bawqgpDZoyG1we5UFidv8ACxYa1xo2SgaRRaotYNTfxReY99NNyNPAqyKjnJgT6pQEeXSLTXUQVnQBMR6s",
  "key19": "2sUJS3ejqdewAMXxLbYMV5WJEbMCmxddMLf9eXhyanMJwxc3Rd9MhVoxcPuUY4taFojDiLgWFkdAjVuDixVYBzxr",
  "key20": "4DoAJNGA7AMLNphSoUk67gYM3yA5bcKRMSsbjVd3VYcQEg8YBQ2nVqhV5jvyEKh6EQ3Q6Ffnx4dTHsPQtHng59wc",
  "key21": "2FPZKCuER79buNqNHNUKjaMadR91Tyk6iyLUdN9cAtHirpw5duFsG58h6eZPkThtQmsvKfxThnypQMqPWre8eHxK",
  "key22": "KBUBt8PoXVvNqdYH99Ww99vWCXMaAH7w9ZewxeA2MWmEYUixfUicioc8FbjhE5Fz5pE2gEfNUa1ZCaraQAocUvj",
  "key23": "24sv8c9pPtfT18JWXh3HP38mBi71UKsVhcpyLwfAc4YCpgFCaZkavDdZRN1YmE1Q4mKhUZiNVcei92cXV51gUm8i",
  "key24": "VZNdqKnX6j5iFWNjANohfPs53C2RWJr2gWMpbs8vWWM8DTkKcF9zJEbGdj1ZHFaguzhdvDztHrQk58Gq9Hecs21",
  "key25": "4r5q2h7qHC5gLeVvjVYDRQZxYexgNBB2TJQvENavaGTsSA4fQmxxUgjBvGRXFXTh71oeApJeT2nDrqduD9YkggEi",
  "key26": "FAqLwWahFJGP3YVGWurBJbGz7aLp2fBeASPW7UY6tLdzCQkUwu4G9Zb28dHYUXeMRyztr1tTWRM8eRXh6fWzB1H",
  "key27": "5qi33HpSUHQjrcKuYABwsk6mpSYK7FN3uHHoCMBJc7MvsyrM1YsCf52kaigaNkgZVM2Grsf4FzufoUqa46F3v7e9",
  "key28": "4bGAp5MLBKCaaRFwLLKJsETHsfmPK1rSMzhxmZhih3xsp9gaMY2XupsggJV9CHFovMSFxq1STHtcJRdbQ6Vw8gNU",
  "key29": "5pJBU7yAgrXrmBwJBSGWfHs9wJs6pvSgLsPEFBvFnUPquVeaXFXM8yqvp3SeYkNa7QRcmHkxCv7ufgqAENEgX4hB",
  "key30": "676fGTvhn7YFnEyhmSGLab3xPcRLk4Y8ogMtwjWjWr8qQVM3YAyoaZvypQufCxRsjBAYiJsUE1VCZFvKgUjSrYkB",
  "key31": "3gxeiFh9XZpazSGsUvt9LC7HXrcJkExP4bs3ATRdAD6g1YLgE9JR6tUXafbsd7TdpAD2YCUH1cVxbW2cnupMvoKQ",
  "key32": "46KAQmdh43Ntyh3ieQCckhFMc45TXNuQbVTn6bT8z2zbxYRKUymKDPeDhrAN3bC7CVN6iqKwNvJoLpQTnk1AdFjF",
  "key33": "4wNK9YLVUdriGQ3C5xcsKsbKoX4TPn1WznnodL5NZRkf8mNpC4W3Hqg7jzdRhVm2s9T3MWYmbpFpmyKFtNmRyzi7",
  "key34": "3qQhjAtw6usnqSiGrq1V44USx3nhJtdceYVHwLxTFMymmgzt7pKKiqfwoTyZTYBooJbnxBmLvZGWdeBgjiVeHcYH",
  "key35": "8LfbVsR2mxWSiQVwQZ68StFJcosnTSGfqvBzbZorpS5ag4jTHVeUSr4eWEuatxzoCnMxkbbF5hfx7WFdQHzJoTb",
  "key36": "2HvyFEQLxUkHCnjHzeuj1LWXPozbhfx4KXQgo1KWptiJujbMwjESVJcbLuyntF9iN5QmmaP3j5UBdRmB7Y6YovCk",
  "key37": "2XhA6oVDLXh8NAxY5Uf3W7Savxe9E1tvPuvRxaCtA4BXxKvU5spfQjSSNKcH2jJte2e14bXUWezNzxRuFmoox3u7",
  "key38": "2RXAqEtUXJgVEnpy4iXrDeNQxRnSy8euJfGP5V6tFkbc2QMnkbQrBufKcktYaUDUEtzS3txjSRqjkdvhxdCpRKkv",
  "key39": "5AH27JwJjneR63kSyTqRSiNP44hhmAnMqS7d6voVRdvGUntvk353wE4wDnEBnNxwQrbM5grCZYPk1XahiQeNQVmx",
  "key40": "2iX1PkMsrTPpX3XYe6cKYRCP1Wx2P4UUH5EYSBPFYKVNCXRkptN7inTBsMDWFtmKttS2Hc1DXzTQ9qTirKP49wHz",
  "key41": "pYt69q7AEXweSoaspyi1jtW4R6cW39CT1roL82aWKy32Z1exMs3YFvWp4srDdguDSyB3YLig2zDxibGWJVKRogt",
  "key42": "54bCLHgEhkr4UZPv6dMdKSL5X3gohKrHmFV2kvCCMXCnhPdcBsDCDnFuWUFkgLbh5orHWX1gE1zQdvgu53FGHyx4",
  "key43": "52k8g25t7tXDutWs1YL49pjsEPtqGDFjvzs6NqfW5SQXUfpK5LPtjSeADi49PUMUMXsec9sPA5LmzfrUqKbLVDs5",
  "key44": "5y7nm4KBbuKmfzuWrxsXgoGS31QUkY6LPkcrzFKMcc1L9YWxxAWAj9CPsXuCa5C8SvizwjgsWEZSWtvHWCD8xzmp",
  "key45": "2Y8rL9nP5r5n2K6HZzz3pkt5VH9wV72Y3WVnitY4rf9Vc2A2HupRTGTphvPYWzUVCTXi467i9XgPiRghnKABuD9T"
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
