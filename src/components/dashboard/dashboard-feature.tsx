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
    "4PuYLySqiPi5CxE5Lp5ekpAHUYR5edVnEnmNt9RR5b6u4z2dsPMT9t9x53KQvGDAUUWvapPSof8hMGQX6SYJuGHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fyjq8g4KkaFoqYfGNBKsMwThqPwfEusuenrfXwaJ2m1DwdqJk5nr8YY4DUU1GSQCHwcfz8kbeZvivxk8DuWRVu3",
  "key1": "3dMmbsaTbymC5uXX8pTyAUrNzomVUXp8BaiW4HYnVMJnsyc8Yo7x4rvqcXYHWpRBWKD5P6WcW1y3wLA6HQz5Vhqq",
  "key2": "2m4QXWeDn4zZF9m9ri55BDv8T9Zxw5DvRNLGwyzQTtXEfAko44T9ACBgWJiXCLgjtsQNTuefeJpT82fQKJQQsHB5",
  "key3": "2j2WsXCjvEHZ9YybBRVs1krUQqDQFbPS9RYej179WfG6MHJEgdqu5iKPK7MhLu5NwupSdY1pi4bLJ6yjuBs1mTaC",
  "key4": "59nHGHU4bXoJG6GGEaehi4aACPo7iPZBBwisr7XJHNpCS4dtoWQyA3s2vMBJStaevtuQ7dNStGtgvmQGn3oWdL4V",
  "key5": "54gPN9kCthwqZKgjTr2Kg5CNst3Ct81nLraM6hRS2aFAbsAssvYw7QSZZbFb2JtVbSrT4f826qemW9xaH9dkQ4SW",
  "key6": "2Ntfk3NiyLb3Q96ASPXpzaLene3srk86dJkezRaBMHgszR6Kj95PBjgbFyTitWnMemxgDwW27zYsiseATmBUaof6",
  "key7": "5S4ZucSqewvYjscyASid5yUzZvd6wKNnFHGTJLBDybcNoxcym7D1NJBJbjgi82hiz6KuB8hegRqfFb16EtyhkbmK",
  "key8": "3kc2aiNEvbzz1gPQsCqE2ftrKc9YKLGq9n6E8cHg7zvz8Zw9XenR3z5LhiEJRkPPESHDhRsVss1pLW59ADAdogYg",
  "key9": "4E58zvapN7zu2rxpgbqi5sTKSQwRXTKe1cDu3MWHWVAeG2dDuwVk74x1YAwEtGZdaxoJJLzdWjzcaXwzvtLwHRia",
  "key10": "2ftvsoKtex8HUK66V46EhNphU2jr6LQ71iqTu35fufMdCu3x5ERD6VsN6bG3jMUq5ZQ79zbfZYRG5SR4CQydVc88",
  "key11": "5TeeGL4ueTdpK3FBevwBg9YrKL2b6CbMJVttjJmcp3hEwariE3L9K3jpjFxWHz2MMaoDFqAvtftbD5Hq3DUHy3tN",
  "key12": "3xKwgmtEVmfdcJyv1uS5ftsAGPiiE2MVEhUtH9278DgArH2GNfKyK2AQtCsYXonorromNBxKhcSgHfZXAqWkqMNs",
  "key13": "5G5o7zKzxvqTThu6f5MqC8odibH4uNVowmbuSbsSV9dxsnTfW5LtLa9JooVb8FajcZzaMnEMrfatFt1oWfYU6DdY",
  "key14": "KPhvWJd6hR3kFcTR4pwvbQwVASrkJHfxDzqX1HfxiAgG8DzpiBC1f54aYNUfP6GNz7LMWuWDuCNWnRFMDZxr4D6",
  "key15": "6Y7WYbEqKXiePyUbioEv217w4bY4JDhSpbtbUBTELVwyjzwi6N2odjUYr5DgvtpQ48428Kh7nj1K1DotAcoPCPU",
  "key16": "5mLgrwF5XXjtr6zfyLgAPpptWx3TDEhaNhhADf5jsGBsXMQ5Hdd5Usyni63jvdLizsMoxfL3zAsM981aqscoATmp",
  "key17": "5hZV85C3AVGHm9aRwqkeEYMo9crjJSoahRYD3ZJtBsEU5DpomxaFEv4sDrAuBpttpaiHHZNA6zLWxvSnfcBUg91A",
  "key18": "9Fn7rQcoPQDPDdgRfBNdLh66AwJRJJ7zHMj7Xei5LEThRTLi5Mbfmxh5KiMgnAGqxPh87jSbop86PGRDRx79Xip",
  "key19": "Ld8ABoFvZ9Ys7vCnnfkFfGzP4VUhdoLroU4SUhVr45bvgm2aQ3q155Yja7s8jL4MkGrLRHg1wEiksRikobbi1eR",
  "key20": "5vvo6f2QZaiayjT9tPLjwCBdrrcdnqBy8F9RXQHGktw7jNx2Z8AoXUthtziovRag5VvaLGhyLCtm1tBY3h5GZH6g",
  "key21": "N1fCKRcmFVAnhrYN4Swzixzc6wKZByPwGGppK6XactUQZVsXmDQYHePJeR4fLSQqASs38BHXtX3JX2T2jsHnUn3",
  "key22": "iTWnjRuNpKhwkDVcN5YtDMwnxWxx8uXxZZrQLahtpfrnPLrAN1n7q7eujTWipuXSQ8NdiP9tkGoGTFqrpQtsQrS",
  "key23": "23aK3S4RyvkXJiufxpBGnkGnoERo2oVkrQdLwybpqz1rtZuZUb756TAJ2C9Wb9eKTLuBUTWgUjv65eRF5TD9hDDw",
  "key24": "64hxHQ7LeTtoS7MevbYF2Dn6kPBw2nZV4ENnhJmnFjhWcxm2YBpvfhwPR5CZ4VJoLJ1TnCVa8yMeY3SLbXBgtmWe",
  "key25": "55MifXmj8kPrwKzcJt9HH2GQteq4nPSspTPDAiUSbHGo469bhCsyyv5ZmyK5BrMAUGsmqiEQjxAnpcUsoyrSpyg8",
  "key26": "42xpd59rFyiMV3AuFQVjukT4dWx7shEPrwbmytK1mCUqJ8AJVU8eogv8Wi3HHS4YnkvwSwWQLVV43VtBBwcSed9J",
  "key27": "x4FzSjtfnwpVVZ2Rsta1xi6kUHmnhR5xXdv6ESrxiQp2PtV9GK8twymrKGPxGrBSgRhy9MFNU7cTfjL2AXrEmqo"
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
