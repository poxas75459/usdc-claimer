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
    "3u15UDywsARahvWsxkER85LxjtRQRk2mxRCk69uezxmemBafYbAngMWGf1GkhN3Du4ywKW9sWm8tzZTWqNSzwKUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37QEgQePT9ZyN4yo412odXb9Bi7etQ3Vkh44SQRaRCcgjuTevtW916xfU9yBDKitSdwNRUu2rwLRBMmjctf7vA5H",
  "key1": "4gaE6t55XwX7rRow4DWNggtW87fmcN7iqBu3oGSgab9XweZfkeYPXbcRD323nopTdDzddcHTLkvL9yB3H4ir915A",
  "key2": "2nQv7HTHvcis5sw595UhzQPPecv1U9i2nJtHTp3N4cNHsz8TJGyRVxaXmaZvgg7bdYi4cVabtjsKvGc6szxUKwf7",
  "key3": "wZQuiuTB3UL1eAzxqAnXmmkCacmKYeaNAdSeEj7cQgsfPd8RXR5QCpBnukmk5d5nboMwg8RU4DgupusXY37k8sF",
  "key4": "5Q7ZnYWMCngzG1NMVppmtvL2g2xHj1qzvNwP9M3ALQ7KkBvEjtKVYYK3AhqjpnSHxG351HCeWV4zz9xRn8zT3P9w",
  "key5": "2ZvSmiPkJ9GeLsm63AxgZfSKBmGwyPNao6HNCuTbJdFUpgBYsoS1mhXs9g5Kxaxp9NgovKFKVpnVhTY9HoV8CcRg",
  "key6": "3NfpyhaUfV2UbTr8NpdgGnEaRdfGG4rdUCmcEaUJa5ZaEJZP1dwTwynZhHknGCWrkHkN94vyuEzn5PSXvAqgHWAH",
  "key7": "5c7ffVcfod94Emh9sgTh8wYXsj9UBkoGfpSHSRRHYMEGPBddD6V9Q6i1FMscxoaXAWPbidDa68dkkYyUD4mQrWLY",
  "key8": "28XiFWUhTzTKYFkhEGQvBNQ6SDpHh9bdvVWEvWAkMiJQRWgR8SYejWZoq5Gz4Tq9hFmzPzUxxb6zhxqJRxezPuH6",
  "key9": "4udqQPdrXveYo5fkkfvGb4DkTodJURk6mUysuRbNuDCtnTtbrCfVNeSsiYc4o3BTMVgoCa1bYnvg8uZheTkw6K8j",
  "key10": "2EAMCDdREwZvTcSsv2NypLNbXSdPgiP9KewoMiGE6fYS3bPXFcrj859VbP2ExF6BTakNBKcZA7KSHFVCiDSqdNmF",
  "key11": "fjnPdE4suSyPi2h7GTymLoSgsZGLy1E4UvHc3FnewWqKpU72MTeXyehx9v6zLaqNSPUQYSsk5tUspVcfWzBfSBF",
  "key12": "5aHUVRwFbRHqnG3HM1k6QUg76BWYm1ry33FdjpgnP1WqH1qVsWTCXe2DrUNHpupnnaZtuwp9vEJUzVdTPYFSinqd",
  "key13": "4sFgJtNLc3BGZdtUpf4XjyNKb3kQw4teb7EHyd8iWj8CQmNUN8rdL9LLhH9cSdTFwxbCrvvfRHAyJzfzjWS3TqB",
  "key14": "5YiBWmVGsuLntT1Y9nFgqzmNJWbsDofALJSY5Zep3m4qdvcvwScfQrSP34GTWkJ7FqM4EDQcUWQ5t2uqLgeuSyc5",
  "key15": "2FpMAsG5HES5VrMQzRKid2mjWoRMuFcqsR3vRZS24AT8C6iCHQDKCUWrd5C3AaVsYWcGKitHYtRW2xeSDeSBkLHS",
  "key16": "4mDVRufoarKnm3k6yXyKssVhzYNUxB3hHbEsLVzL8pgAkHH6rUjah9MXvYATbxbpgT1fBSqdgMWGehp8YcjthzWb",
  "key17": "42Vk9cs62qpMT9v1yvfKUHX931LD9tdbALyjYaKxD3knvbnicmFTuPa1QC1Q4v9q5z9WF3FwpwpoNECypTZGKzZE",
  "key18": "4EZaBeHoG1tBQPmkTvEE6VQ4widWxd5DRMmAuxoHCrw8UtNDWob5rSBg18HUDXURwYkWVdZtbqtHzUByvHfBBKzF",
  "key19": "53J7GghUfVU6rzUQV6mkB5DCVbX7azjPTsdLvy3JvvRj8uQZTPqaXnHv2oKagE1E26f33hHcPPbyqN4SdgKpBV55",
  "key20": "YNJKbEdrPQuJ6upwvcyE4cCen8xjCeFvRz9kttUL3joDip5yEiBP46C5sar11rqf9QT5221vc6oS8tNdEBDRwUR",
  "key21": "5MnCfF7BEzF62daAW5SbkMJreihd7tW4jJdjsgZzsy71Cd6ZaYfJF6sdn5QTmY8vyovxQHbWpHkbMHK3qoSeLXBt",
  "key22": "44VNVoi2idPxXD8dQCZYfxhCHb1owAsfvW7cWd93jNEkpThTwQ4Y1kNXVsksaEQW9AV4LtQ42ckWQDUsmEf5tixT",
  "key23": "2FgxJdQ9RyPkLwontyJPp4Uc5u8TT5HiaL3SAoCuAJ1d8dMhLKy5LvakajQqaFzaWHLar62DqbxB1815dDigN828",
  "key24": "5wKJ3TvW9jhYhiHnoFJvz844iBvhJQHtteVhas9VXApAajnTijVsVov31u7cevEeT28UQtLj3F6zpHneYcJigR8N",
  "key25": "3N93c5diKNj5uurDPor14DocT9jjQBr51scCRMcc4zXR94AxWu4XsLCQwCu9FGdV3prr3xBSPDMBNsdQJxeqVWay",
  "key26": "5XxJeYvBFg73FimjvkzMiTmUEL4nWFRdyKKNM2CdviK4Wutf89cZNCZtJqaU6rW5sJFrukNuLXnwnRFVHSz9Mbah",
  "key27": "5u2dBrzWn7cCiP99Lq65NdbJw3moHX1wUAzQUCHHixZrmRNgCptvD7DzaLtwLtrVtrGVGKZkJHpvuSxcFoUjDBLS",
  "key28": "sFSzyCDzyd1G4RB5QtCKTqsu44K8UvQFA5D9qxdBUoNh1ELJGrZXA8AVy1VFG8NumaR8foG4QAL1rvdiQYWiSWg",
  "key29": "5YtzauxZJjngPHQtKcq39kvYQ1gdQ77dRePFbByByPopaXGAeG2uoDk1m5kwgkWA9pNbdM6vwNLWfULn9q6P9hiD",
  "key30": "ccZW43mKJv2h4wcvqoKHu6XVS1kFMn8mtBFXYo89ZGoFABqNbVw8mE3pJgCoSP8wuH41gGwEGmhyc5UaunDzvPS",
  "key31": "5LBihqHWMFZBs6BbSqaRHoQdtLRAXFRN1DYgxkvPLkDq6R4YMbrkGN7kzVwKukuJE2pg8MVDTk5YR4uMmqzqqAWA",
  "key32": "5v9HVssC6imkDh86xKoS8SsyiUHffVYTX95utZswTn3Mp6AMg6F8PUbr5mv1NN7Mrk2YtMvECJuqRK3iVF6PossH",
  "key33": "3fy74nS5xtKhHDxg5t7SbUpQrrogZhJ9RiZQhyq8n4dD3Lrs6bUy3VbshoMBq6uxHGNxUYtp4Gx8H74nQq6NAuGB",
  "key34": "3NozBLrynP6JZeUyLukzsfavx28zBua42VB299bZL4KdzVp6hLCX7QwXkVu5eqdXgkSzYzSH7gtVgiMdgSF8zToo",
  "key35": "y723irf9L9fK4crv9kyedhHJbVqWwFdx6SqGc3iAttj2TbMhiPorQieGLR86KPEmPEomNVzBxim9d7jhCBvY4M8",
  "key36": "4zCdHxubnMGuRG1B7AHHYEn3Myj2yNYn4cgpthfZdU1fKjo7ZiG4bvpUfLg6iYRqh5qiLQzB8P6MBxuTCKQHS7AZ"
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
