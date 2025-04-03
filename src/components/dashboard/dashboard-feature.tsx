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
    "5Btbx2yuA1qcjk7zaN5dPuGMPeEPk4FgSAkfkpn9aqBP2uJH41zzpK5BPRsmJfDBVxVVBBFTesba55DFqtFeegjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BuZcf6yoxRZeoNReMuGA9nBcsGnidXs5Y6KdAuj33hHYBY1GSyMsRpfZLXUzLWMa4eXCbwcm8FuuscurzccdgiS",
  "key1": "2RAFDgwCuekXZfKs6m6wV2TSXwxM7MrVxcvkC96YLHKYHgovunZn4YMnTJS4vkRiyS7coVzxxkx3bfRUUKZUFram",
  "key2": "5LHaUK3WizwxeuZHzRpn1FkRuZZdz8veWasw3HqmhqYoDDVeudvJy3c8uxwqFcTXgCxfTsjMd6r6csGGBRY1yZSD",
  "key3": "67n8y8bJ1TSM4BFjcnF2fUPDjC9hBb4tfQW3QRPuwgif1KLbm6hDj9pNvhy8rDQoqcXZBauAf7SYn7BYk2696BdT",
  "key4": "5EFNQAMvN2Wk6ivYXXw7MiBaWQzTsXdF2roQNuDpvNtbTwebdP69HEq2egyusntSX6Dn95eGJ37WKmNUAX3ffd6P",
  "key5": "3omZiEBimdSy6XQmUSjwUCstTQgNoxXuBkvQpP5juhLWccXeWusmYqQg982PJjdQuCJKuGsFcFHXqTNmqPMAxsnz",
  "key6": "5EbR2GZ1GGDTTKGGMJPcFMzSpBx8dUL6VaENEkqEmwaD8iVsW6dPwv5atUFGZSuWiwpqDrVC55rUFffa3hUqU9UX",
  "key7": "2ETdasZYo4ypVZF4w8ynQ8tPz95cjK5qwBG8patLawNMTYGAnGDepx84dhtAe9EExnuthhNA1e1tDqWwaQrNpAkd",
  "key8": "sAHiuXnoHa3ssjDk9LorguQcwxPyjkijH37raVooaqGEELCmggHV4y3mXvHFb9iYuKW4t9DX4um9sT6ftCgzrV6",
  "key9": "2bhbaGJvXF46cjNXZYNCVHXeAvs5mAT7KK6X59cbmwhgNLVfPveXzgkcLBQtReuxLqNjtxs5MJT9Gj2BjGmajeAu",
  "key10": "5WhvVCBVha7WGdvi9MzzaufFheNU4Gj1HYhdnvzYBAfevn8bdBXdCGyjPKwd1bKQJm8pwjinMv2gMdS4zveSscNh",
  "key11": "WyyyHfVvZqZdSmJCz4KhroryiGjkEEdWritAAc3z2q8NyxwvtWn9PELpm1CpTHRbH5rWeT3akdWzQJXYHcDWATE",
  "key12": "2bChzkp2uogDdfgPx1su2Ud3ov4wJHaYNLNRht7ssBNPSyVNTriov4ofybY6ovj2ygLYziaV9UdGSfLA7tuBv26d",
  "key13": "2DemX26ffU6QNrkyYiy6phtzf1TTNTJaqZV8dvnjGj8i5MgXxZ5MojN3s44oDMe5A9bebbmda2cchhC7KZ5a3SK3",
  "key14": "4Rvj79j9Td3FmBNESVPTR5m4ezKLkCMvsWmRxtXoysWSYJgrmuiGLCZfXDqQK8ZKv3nuPEgafXKMr3GpeGCusbzy",
  "key15": "5vdyryvZPkWrDRh5R7auGjzyRzQsR1Mw6gWrMvDXhxXP4BihAibaCXA2tPw9Jm9Bbs2hPYeLiDXPpHbsZfHFz2rk",
  "key16": "5pPK38MaA5hGU3TtJnvrQPWk97uWrHStsBgzzAjjrwLgHFGHbnyTLgSAckyiGYsbXv79xX48wYS8ovBepajLtCK2",
  "key17": "tkwRFKqvFnwoeWsA1qtjgcTnChmDwqFpD8meWym3RYEbaVy5NuSxZeLnytbFQhQXjRB8zzKmYjChcirkiyD9CwD",
  "key18": "46YkUd2utiM2Lps48YgQgDttnDV65Fwkot33aTJJYQ6Trd1xbeibCMS41jpmZsmfoCjaRhDj2ss5DeZzz648ifT5",
  "key19": "3DNePCNqS62je2hf6V8RD7CjekixJjRgMbC4AY8kjSbzixK6v6BWihd31tiRTs4u2iZgpLKrBo5YpZVbXbnGzSFN",
  "key20": "qYBQinybKv5LbRjVa6dSF7Go5DD2WGnDKSgobZ2ecCzWn6fSBNLPFiibUy4jhnuPQn9H19AHwPAdrANzNAy6cNX",
  "key21": "5ioCqH2Hz1EMJ6BHgM2uy1VnwmSJJjaGniaQZkRBUSPj4sFDhw1j6YBMtAtH7VnpwCKyKknLvQMgXrN5V6GyRESH",
  "key22": "3tAYXdeUainUFwoZkG3cQNbhmPnhhqjZrZxZ3MXD4TLJFpYXtfMoQC2M2s242Ry7cBR9Fag2X9x77dJLnP484Np5",
  "key23": "5C7iwyPMiGZQy2rGDxwxyaap18ALbnsWE4oJ5jZzwcSnctEaaqR7ht1xbu78aVuGyNdB1UTSu7NakPYP2sZnvD3g",
  "key24": "3bEtrx8YLKzuKTtuqTxivavzsyiTP7cXZQwGzA9q3Bm76Vum6HEzndxURTsTi284C486CWiLst4uA8JoAdCE3gn6",
  "key25": "3YRDVTDyMijq68LApiAQ4qDNPz1mDda4i1AdtgnVbwJowHd4JhYmmhYME5GMoGrTgFMELLh2FViM7qiw3nN9hQAp",
  "key26": "2BcPVEni9xFH65VGqwJE854gZ5G3ogaHLD4EZBJtXw38jYgnj4pia94iPMELmg36QJvJQEScFrctnWHHTefZxDv7",
  "key27": "ns4GxdYLwJJf8LinNFkBAuyDqw16NEUrcoGNZ6P4cKyky3GxyYhBaB4Ymf8phWGRfsFeMSYdf6zN69uPSt1gMYp",
  "key28": "5TStw6WCxwzXZQakTQd6Venj1Yj3RHbNeKKrg1AvGHYiV1QwJ88CtGZHUYsB6NeKyKx2D1BDfQi6yUDWB5411TE8",
  "key29": "NwgevQzLgtQhmwuvGM76UU4hwScd2AtCd6JYgd4VUKDqhmLyqTrFzDvvAykqAYBqgZcZUJiAPinr8LFNT6oUqVM",
  "key30": "5z7wTLzQSamtY1z1afbwGdsCRsEfHkTDec3EihhY3enc9UpjCBhKdHRErPTqheq73Wpjq7NUqTiHv5rmCHmkBku7",
  "key31": "2HzKefX4cYGaJUXHr7mBSgwErfJkd2WDNkoXseHKRQGUCkmhajCSnZTHGRqobULs5p8B9gaJevK5nPBpazjDTNqc",
  "key32": "4A6sRaqxu2CobeAu45Y8Bfyti3QTT5Wnnmpkt17wJhw755g2ssCcjLFqZHRGjb9chMCMQ6Bh1KJaZSwR4j9pY5wo",
  "key33": "thpeq9TPaZAbmE5xTLnT8eCmQZdqkDFYEDCDRBAHzfxrSoStjJnFY9gSZnnPkA25vdEq1wS6PbvooKxexrX1Ch4",
  "key34": "2oSqCkktq9WPLuuNrfdwPVgmZUjWo79MtdaQP6ayAuvf27dvKDpdewysth5ZUm9FcJd59MX7z9TbargUmLyAMdQ9"
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
