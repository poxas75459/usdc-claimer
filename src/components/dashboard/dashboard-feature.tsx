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
    "2P6QxcVTp6n9fjbnssPZ2cVg4EVt68LfMY6acnxP4HJ5gPLCTLJFvZCD6QKiRUt7PBSzDeAU8jjS2eEHpgYLtmMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z97dsK4V39TJUedgrmooBrBe8Noku3QQpfPrJMfG7XTLz92oTL2eUAnkPUSKrD2KaoM84M7h3jNoUHWJ8pXsr3k",
  "key1": "2GfGL87yvvaB1dhpYUD6353RBCDM54WLXi3UQZQm5iM1S3EuTHrdMK2jKankmhL8z75VeZbc9uNgupWqD3ek54my",
  "key2": "4g1EzsetwxtrNwh5xMYa3vHtGgKjj1nifVkrKP17rp2wJQWTaXv24FWdT1VUiUiuUrpU82AYgkz99JeL8czXGxkz",
  "key3": "3eXcCPFVdJJvtdH15W6QB8YaXDE3UhweMmzwW7m5y8Ytgg4Pt4ECobm6ENxaUMwTbw3g8eWv69reqbg2gjQkZ7CL",
  "key4": "3puM8eQwsVtBbvWrBSy4dafFxhmiCHBLXnWtZNhfVScwenSUKJbP9FgMMMBLWj7nVigByd7zM7hugtpF1xx6DUef",
  "key5": "4F2JQJd7eL3kxjjHo2xt29RPCMYkXrxQYDujby8bfxtsJZ4DsJGSkgZJu7nYXvJaVaF51n2HUDtQktwo33mj5RYx",
  "key6": "4ZfCrdS8E6z51ZCmNmMzPd18NJZRp5Dv9bJATDxNTF3Dy3GYUrbKUrbMwnXHEeYfb1PUvmgxqVuKWWN45AphmUK5",
  "key7": "2FJpRrAVQYxoGFaVJSgvMzLNCZWvtczF9PNDzRxXrnSQNBzo9ysDAfSwbEUSrkSz2DiPdsunvn7YEcDhGhir4gRR",
  "key8": "2xXPk55T9jWf4qqKLyaeTTtQjRvdKctjyn5dw5RXztW5Cw5YLCxFGjfXtJU2dSCArXBHDsudXFh843wdANcBprKG",
  "key9": "2buZKg56aMzFFCydJXSN6KQvWAhAFszGiF6ECn4pczM7zsANtAMuALXeRQsxtMp6uYuJQxVUBGvbbFn3hwXzhmMe",
  "key10": "3U5GFJrvMsHvzfKr2mXvioVYYup5dyEBnjt8F5oadY28dAMnopGPNim3BMuqr7deURHnuwZ36sLMLD8RFQjFLvWZ",
  "key11": "62KmBLhpz9EZBYPgd3g28W3DT1FpP4KDRpsy6FU6utB8WXJBCRaqGavtr4RExzeiGNussPKoY2szcD5sKYybZwTW",
  "key12": "RihBZtNyF7LFSyxBkQMQZyWuDPi6keZSg6YcZQxY4KKYgE743SDYDmPc36s7dBQF2XYiwdZvD93Rb25qYderRxV",
  "key13": "4R36sNTSnni9SHBzoNYpbcNKdm4oopdbZHLxCiWS7AaVKqjMAhR9uhsCfyqpShFZx6VotapiRNmrQWWnoBqpXP7B",
  "key14": "5eaeLSfeqxZoLSJGct8Z2QPNULz8y3coezApi5Lw9oHkBBwS8NfBQuw7nFCm2yQtSGqKGN7f7NuNSFFteyDadmTW",
  "key15": "28MkW5RaBXYfWzHzaFnKvbZLsK88rNYGzKTi6pu88PF6Bdq4ZZWD54JRJHjan79X9uSo3B6bpFeikpD3H15qtG3J",
  "key16": "4WVJaE7TxP41qtXN143Mxz6sRwDX4NXs51pnVqhjwoFzSi1yLWkujJHvbkd9sV2eEbjiwYRVnWavxjQgWBppssM8",
  "key17": "5t2zySxG5QboRJGXEWFLCjPNrEk2UNYdgv5kYhhFm2fcXd7cSmMWXNXtEnXxkb4oEY7dehyLajkDzNVo1XmKsfrG",
  "key18": "3V1Aftjh6kG7Xbeb6JoYas5sSUESLYtMN23UKwjrqXRyxzkE9k9SFGMiKCwqPH9UcLQbWwhipbR2SXaSqX489Uja",
  "key19": "mW32fNmVY3V7DijFtHAJCMrGpNSDbZD5f38PnSC1eFqDbq2XdkGBMQfE7zgmAofm5SEqZ4RqvY5yvkmb9WFahjz",
  "key20": "4frpr7ELbzNnu38JYo8EfKf54r3rn4H8nYnjReHMpSRygizzdbXCztuwcnowpUZLAw2QefXr2pJELMtXKh2KULoj",
  "key21": "5hcVqiPUZiskL6AYLTBKCf5RbBAQxexRtdE2BBwAkkDPNUEfeLcaAAsFGSSL9QcN4H2BnXNzviZQ9i7WoQxUeWvb",
  "key22": "5dySKVHDM76vCnZZ7Whz3tGEeyboxWBUDkCofsf4PzkJ9VL8y8zmYDYA2i3HcyHFZi1DCeJLa5FxcVCWNyPeBSQh",
  "key23": "2jjz53QMRrYShAmBGqkoqWfGAPv46UBbqRtSUZwfkbfiazygQi9QDwNyrRqSHwQ95A9Cchi9BS7G5ju4Lc9bsA2g",
  "key24": "4344SW6exQNYKk1dZykGz9rx8WUe984mAs56tWnjv3v1SZANrD6KRgFDpq9UYYJosYh9h6uJzp6SviRuC5RJnW4C",
  "key25": "245zjJE2Zz643giDKRZssDL9GNiKgUjZVUmsjVZhAbTwaSpVJDmgRv5bDyuo2w7mseY8fcHN5ipQQe4mZPwrS4La",
  "key26": "3fkRSYkvX9eDDRf5dsH1x4gCabvZ616UJsiJxxzhZcFqVqC4HscPc9xdHVdjeJWtDrLuSQwwiEWr3dvLjbq8NFXW",
  "key27": "3bbm773LBh5Xt39Jx74cAiGovZLyLLn58s7yRc8wrNMsHfGXEHMwVYXcYCxjFRUaS2XQPu555gkAAgSoaovBosoR",
  "key28": "4UxgcS9MAAsYtxdNokRgA1AxMGieDDgbEGff1S2Uc3UUcqBrgj4AKgvpNmHa2URM9DnMNyM5WCJuiau1YDdTN7yh",
  "key29": "m7vTRiZX9rUcqXBDBP4VcxR6X2oaYjHcBDJSA5jRiQDyacMUhDSE2HV85YfEu9CNbAReveLJUvfyxuQpi43wh7x",
  "key30": "5pqYHMfb3jt6NKTiYCAEzWu5wSW7AMpezHERKrm6RYqxyHzFoxrWdZxnzerdf3SXmeusMoMhXMJy1PmfKZYT4A2p",
  "key31": "2A2w8Fx2nPua4DazEBdwQ1T3JAVaywJj6hASJTdGqr5K1BinNA6QVyweCKTx266X6Bo8jm5w6PKFxAAbCBXjqQ9j",
  "key32": "5xNRPp4XWW1BSpNomVth99CvusWBNVqH74GTTkuA77BC4qoznyySkxng7UMvnaBXLRRk8c7tNfh4XMTXfvAzDDac",
  "key33": "syaWnVysrGpWfnFN9bpFMZxc7XXLbY11sfjZ8Zx13ESJZhowagKkvNG2puX9NJ9MMV9WXxjMuVCuHgFUVHTrVre",
  "key34": "Njtc4BYns14QadmWaHuv9KyYgkRzyPi5MLhPQTcg2xxC5n1XhoSB4HnyCiNQYaBtPhVP7ZnYo1Rvfpd6iDJVzrM",
  "key35": "3dVRAFqAqMC2aD153YeYAwyneXycCG9c7KM2oETenuhpLbRJ4dud3reW2DNXy8RZe3sV7Bg9FNJZWmrE26vWWA7G",
  "key36": "3rRbovxFD9aLYjYdqurB9Hj4qAwnMSLcNqj2GLcbre3xe2jYCtZyzu69AciaQtrqTQMpcDmBhtvVvizNgeT9TbjT",
  "key37": "5ZWHabCaSgRMKraaeyx5yCbNvKBy85kWe95cPSmEuk58cgKBdyYw3pc2ZPeytEevM6JDGENyJgVrbDdpdDMZz1gx",
  "key38": "4Zscdr8wJVAAEC3MJYwPddKaunYu1jGrLW5ghURu52SyA6Ld8ECbbCzcgdq83DmG73BmTwdSNJV8y6qQitjptxNS",
  "key39": "M8nsySU97RbCW1EBi1uuPyPB3y76WQ7DKgHuXLG1eWtiPXmMHdK3pdrzcYj3V44C6K1Gvtr68tPnX6rRKRSPQVR",
  "key40": "26UvNZnxmnJX3SfsaW3hDnXQEXrj15wjxFgw4eLzXCZr5kpGFvrPKL7MvFqJw41CntZqnQQvqW3Jy5E8x68gsE1P",
  "key41": "3wNo9nwZwCjc7gRZz1ufCu1XzXqo5bEd5U5UeDjBotoegfVPAhHS3EEdwLnjzhdBF81M4vUVA8wTzq85enBfpV4t",
  "key42": "3bQ73KQCFBAwqhUBUMjEz6X8b4enJ9LgprSxaAJTNprxx1su2qiZ5j1ktB9bd1ha8xv2K1WVSfYxTZdKYiADVnBy",
  "key43": "2SxMSSYVU9mcamBnDzi2by9J91yzXLRnKHSsb35ibyUoGxa1zFDJ4TX8W15UNiecgc5auq1cwNdF4uPjai13gK5L"
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
