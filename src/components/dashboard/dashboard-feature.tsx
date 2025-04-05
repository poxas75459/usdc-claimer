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
    "5RXfSgmUt5sR83JYavrw25YeLm68mwwEuTtDibsniTBx6L4naZHRw6hUzsMiEfMHfNPts5rHNLmarZkZLyptZ44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R6RV6JcJEV97Sg84mr9TSgpJ2vQDRG8ZGfy9v2PReBxW3LnYwPG3diMCVnGqTonQgTHW3vijXvYZVdeDf4pB8re",
  "key1": "48znozDS8DGoJYHPwF57oTCA3hurQsbUwty5UcMy2ggjd2p7tLqp41gKHk5B2QuqGQrzSCNHePbddgdF5TTEgz9J",
  "key2": "27weMHoKRcEVyLxX7aFrPk4S6ykSaYQJR57nWsVvF9pwKfbNE9GtCSXQqoqwUD48R7nem2o4w1YFqWYoxPUptaPv",
  "key3": "2fSVS2nohUiBsKhZ4rJypRSA3o6M8FyRakwqxz2qEb9vAPySLNEBiARvv4hQHCNXsbudT79gunQZTgSKhXaS67nt",
  "key4": "2c6zw2ACMgK598H4S8TLhdo6SZwq35qta6VQ9Z64yChDcbbGYJ5ouVeGgm3VmmoMnKcfQV2otcCwHsNAF3mH9NYX",
  "key5": "3XtRWcufjcastPfk7xVs7QAUBJCBZTStntet69EZpmvxonBm7kPBdW8gqGyvXbxLqMJpeX6TKJZXcH7i3mWdGsnD",
  "key6": "fFL5NEpoaVqG3WnmmQJHV5cGZVKTnUMEGeJopYgS4tZb96CaLVcUdnutnjDbkuyS2a3HsbS7YeSvzzUrdPokGSY",
  "key7": "3BxcuLDEYxP6ucSSx9iQYrVnVobPZVKoHridKpEMXzrhGUEhZLUS4k4iocLU4PvCraFeTJbhWnXw5FGKsfH9GhbY",
  "key8": "5nEFnyW795TEZ3uHv5KzTrd61UQq6Ap8jfjXz66GRhAcKUrma2NqqxyJLAma26A2CAi8mpPFrYDTEXTtFHN7zxz5",
  "key9": "r461p3WLCqzK8tafa3jAhkWSwgJreupzRRsGYjbpXP63ZzuYUgykqP1KFdmxLWVDbKVdqVGdtHN5v1xeAwwM1GN",
  "key10": "6yJEPrTCdhdJuMEe1GNNBxQhPJiHZYcnrUTdpy9FHtRWQ86xB4hTZ45ACsSJWbtrVHZH2f4rg41E1vHBLwJrnGM",
  "key11": "8k6ipqLfFKyUbcdUi6d3QP4t8aBRwZYwhVr2P2yUP6vT34izisVAStEjM26Cj68r3TQizm77uN6mthW28n58Ly6",
  "key12": "5pdeDRREUkz24UwWKAF2Fv2WL6HpBun5dkKrpf8TAXRV3GiNKSW4ychn7YjmWc4shD4kx9nyY9QvQkiponzAU8ud",
  "key13": "4CBTf9KetDhwgtJheekJaGWR4Xh7yypbTW9X7pfsLh58R6kHAiP5uhLokwVVMbQMB1gfY1EbLy9mTZv5PgcJtgDn",
  "key14": "3tPbwf3YxvNUR25DUQkh1pNw62Gx33ubrnA6UiUfkeeUB6DMHpQvSQwmxtmhP1DVVxHq7LR642vj8o6Gx1xv7Dz4",
  "key15": "FrSzxHXtNyTTrSnDbbroL71hQKuzRxkGsiLWaFocGFaEkxQjaMCoDQ8fuvHXoi5PTGBnxWiHgrDrm1nAmkDn9B7",
  "key16": "aSRUMRPvmWSPbCS8NEYkJAbMLGQBhn3qsFG3vdjjHdcsQ8qfDqTkePGYH94X2rX2Atw2FRRsTV6aF4WRDLapU4K",
  "key17": "2QZZQApvL8jNEr3Qcz1X8pFShsJZoKPUyDtHd74XJ1WsQZEd9LjcGa8VaR95cPixw7U4pu8giYzKkAtPnNF8Ysnm",
  "key18": "2Y3z81JKWCHwAcXF145yrVEk4roSoPcukuY5w4GfcpwzyjQ3qwGavdefvaUuofBo6EkVDbbcCwJcpGMzCZufTpv5",
  "key19": "2PLrVJV4K7ieuhWDf8TzHRtZtCKzM7yQhU7DHReqhBufppsMeHCnqbJwpuryNVrRfFaCFTquKHcwuXxctb1iDmP2",
  "key20": "49z5Wivehn5x1jFNfU4Hm3XASFWN3fpSqRJCzRbP1YJ2usjZw64ddamJqkAyHAkfPP7W67LgdXHKgGDGzRZJLSaW",
  "key21": "3auNnLJz6e1gVo9yfURy3SMRtU8HUxNRqkBWsguVRsLSdkg2i9eCj1Yb3YCdKmyQQWU8ZGT1uu3dzeXd9SpFEa6d",
  "key22": "2YdoSfrNQver1Gfet33zQ2NFpAQYfP5WNo1bkFXEzqAbKN6oBzqMqqtLoPioxJrHZk43hfbzJRJWWa1V7JtfskPz",
  "key23": "BkuiSaVvUJgLsEGA8LwqY5SngsDzadXXArRpQUkspZeK8S1hPZX4XTgCtmekpvDy4E6Wjt6KDAZQrn5G7DVank1",
  "key24": "2Fwvf2gfkbq7hZ1zUSvkfaWABqetFhVuCSAosHMS8oJC4oEPy7dhjZ6kcSA2axv6q1vur71j5VdBheLWVnVqmqki",
  "key25": "3Gh6moPJTQc9aJJMbteDm5dZFrY11Bs82BWHNG7md4dZiH5X9ug72RgJbN4Zu8xWB513zmSvxMcGrJgVKVtXKu1W",
  "key26": "39C4ir733Qc54NE4UyKjmeoru8ffD3dbVNhDD5YxrGBvTfJE6WKJBUdT87FfZHfucBT97bSWwyXxk6CxkMuPTaW",
  "key27": "VyHtD8CN2zcNnpRS1tASYTeo5QakLMQBwARtTzMoobTguCjeo2Q8iXjWVXmY1rjAD8tnsd5Zq2zHVJ2vnzDDkmT",
  "key28": "LwHnJsbS7hZoC9G78ZLPkjJXX62svMEktywqbWUpb1adKFqZAWBzBuLUkGjVGgSZBNTaVgGfXAwpCSEXHUY5JY5",
  "key29": "TYs2nvaTHKPW3QH7PmyasXpRGJn1WyaiZgQXcbcCFsSMbWQLqS1TfeJHHQHeVKrRDKDNkVEet2vq3fdADecqSnp",
  "key30": "3LBYYfgZaewE29DzGbyjS4uJ8pc6yN42N78gbnSYDJUccEjJpeZ5NPuWTJawQAyq9u5a5jkuk4Nrgt1LozvvKqE1",
  "key31": "4pfHAsw698Q4XmT5ADUukBoVyFztbQteLvW4AAGpbZHA4YjTMRx4bp8bSQ7BgVsLXR49mXDJKWpnwRgqw9CR4LCT",
  "key32": "2zrZJBbcAC2JUytfkUQqFNx8NA6YHSWdVuN2hMJswSuPBbtrJCsTx6XAngvogbcm5GTQ6BZqyrvRpFrmnKnhkiwX",
  "key33": "4cFQQaeqZ1pSDWRAtdqB12EtndbCrWDNexC7QWyAmD9HFdUxEpBWuDq4Z2XHJwQfnNmM7oEjGYMZiUJNUgTbvocV",
  "key34": "4Xsfa3zfTM27jEbqrxytyiHydf41Y3p4YhetatLiCo3frHqVzwNhTeyrarus8jfDXDaKQDtqquLHrbg1eRZKutwC",
  "key35": "5wyQXHVazZEuZrVTG8yTS8Hts8VZuYx3tkbayDdwKNhXLKyE1kkgeYupBoTtgFEF9VFw5GCPZip9bNSKZcnTkT8U"
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
