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
    "3cpyxV2HGFcNu1Mf2zQp75VzVGy1UxrR8XEEF4pBH8yZ8U9SBoJZ7GYGeRY4BYAvLrdEX8HDdPW8MLeYTfDKXgLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31gUsuPYH51mBh5NfX6nKLpYzzj8qqK89RJ1GLmZ7qVWfN5FoRqKsML5xZPZMjsPRvcmUGif9Vwbw8gymi5VwVk6",
  "key1": "5QND3kjTGktZGNS77NqheCRmEqxUA342Up1uGjV9CzEkbdFYygVBSnMdWhK7W3MutMcUuMksk87xvAZgr2W9Reof",
  "key2": "3SzSv9v8ecw5Zb83iWr7UaAGm3QGh78pgABNJzmyQDpNFeHQeGpEZaKjufQJqagXCtkEWeBmJTsir9Xv148qnE3y",
  "key3": "5SWoGUqThyVh6NaKGGvF8J24D692N99rxuC1yYNPNUcJrKK8UqSxV47HWBytKoLbhVaCZhB2oVCui1vwPScz7scW",
  "key4": "5GKXe5dJ14v6sGjApgFocogx6cMuAgPjjtxBLQHr2UMzRa5cJdfLP3KqpdC9KbbRJohBm62J5Dg9X2bnEdxFukEj",
  "key5": "5AdZKGkiXv1BNxXaFJgX5kb6A1w7KujfKV6jtqBpXYkyFhfJ8JP133L7HHhC3CdVsCX3keqsrpQqC9BYoq7ntxz1",
  "key6": "3rTkNjiznnRvHHzb22U4KFFzvUj4Uq2JFDMa4Usd6jGTaRhxe66ieFFp33uWtUozsCP2DF4R6xA3DnBFAqGKtct3",
  "key7": "3JAbpiWZLbYVFXK92Sdu3Nv4MS6Cm3745mBto54vvm222MxGRGZFKPFoRcNcck8CwLG7EWkHz8HRZyxzJHqcb4Ba",
  "key8": "4gT6jSzU2EsozY9ReGPjcAtuAqRFwqpFedQmdSu87BHFcMe5m8EfG54Adt5kjUGAtKxHCU2c9XsjgQ8BxH7zZRwB",
  "key9": "29cRy1RfZJd4CoboaZ5fVr8JV2tz6EKqrMBQYpSevdkb7XXUxRTD8WiqaNJMEJ6yatX8AmbpT1fnC6RXdGYu5UKH",
  "key10": "3KdQXbH8z9dxJkCxAn5AqSSupYFYDHPvDMCb4neueddSwrr2a4hfmAVgC24sJ4G5E6jFXrQhBS2p4uJRaFcJz6xk",
  "key11": "3S2dudMHXMTwa2FCTAJBuwNU6F3yVA8FcMkmVrCoc32f9uenTYVM2XohSrDS79sJKtKwp9jknjK5mMDVfoxd5Y1U",
  "key12": "4BnLUdjGbobuF4kyXZbJpRkd5vuHi1Wu5Bhf9gs9tc5r122vHsCmQm7SewhitUkNNhQp6Yf5m9wZKH83t5LiWdiZ",
  "key13": "bsbpS4xJjCFNEyeTidyaVC8xWznx3KEe1KPT731vSi15TS9cNzg6dJNZ1aj4rZwmDhYqhZuBkL3wzj7UzBQKTcs",
  "key14": "4EgwBdwbBGHu9Ga9Fr35hcsRhk5MpE3yCwMfSKiUHnadKWMmBGLa47EFTDMAKaJcaoNLDCmQmkcC26CFbUWccdAS",
  "key15": "24UQEubfH798J32VLyn2qXqMREx1tFndomUnvMM7ja8S7E7EYZcv6Y2kPaFWe6N3cETEtEF9HrA9KHigJeL2Z3Tb",
  "key16": "4qxpin8bsAUYmWFFZkXYqdNmxoVJa9HdNTZW3GLyhMcr8VMeEN3FfsGtAjTWYt7A6eCZbWoW7fAmmy3rBJ1T1hcm",
  "key17": "BAmuMbG9eY2E2GdsfKkr36hNB73mBgedGS5uUmUs2mPYNzMUaaBFMtrQWsChQiW5uxT4t8aQsVzXKyUNDFzzhA6",
  "key18": "ijGqnsVjiVLdaus5NxRxCq4JvhWwCv4J75AsJAgFNGJPKgdtC1P3PeH3Js6BdsnaipMR8RkTxomh1zMnubrrGVX",
  "key19": "3qqSxD3P9MXVM1Mc2Cyz8mA9UvA5Xs5ALUVC2FDXQFQLwyBWbwK7PHWrE4erFh8ZFvgjcfiuugHPVpd8tuJH5HmH",
  "key20": "67frkZ7uQSssEjx3weAayHvTMLKh6Y656Uyovet81r6LCdNQSesfWAUt3G3Ddk8JYxuxWBBCS9Cit83zdFavs3bS",
  "key21": "5N2g5EeWVkJJ55JC82VfsZ6JUjXsbY2XZTRMsiHhZBiSs8dM1GzK47DC5jKSfWFLc3vZzsKpkLwzSoPfLyfnfNyf",
  "key22": "51QGzbwLK3NxBFeuKhWqFTkTcrVPkmzfZXbanAehhdXDqACdzzhycfuzzYBovwaExD4J8LcpEM4dbrFrNaPcMmiS",
  "key23": "52ic9yGdRNC8YjQZx65jm5aYL7z4AiySDxwz9KGm1QkhGCVt2BU8tcbwUdHpsGdNtiGZBemAqciwCzqA4n244jmJ",
  "key24": "36BFpZvNHu9axmmHhRjLDJLE13G9QrPw54GkkQnL6rVzhJj9uHvsea9dK3c3UbA9maPkGttZCn6UyVPSUrycGTGn",
  "key25": "4H64NzgkmSSK3kU2BdA1DBP8NWKEV5GxZTn8fYwgfWmEfm75NV6WcSG4qSRk1dBaMiM6k61XChoLmu7NaJ7ZKoc1",
  "key26": "3eNTJ6kjbssJjWDAb2hNbPNdUC6ZV5sxoYygrMQZRnDuWd9uMnoJ2bp93ypnMKfH8KLJKgu71TuE23JF8G7b1Gfg",
  "key27": "48EMDs7YeQ8ynE71bP4w6sCRBZHGTyPo4qoQjAWyKcsSnci3Qu44fAH6LgoWQw1ZsQ9HuMd6rGsEg6Fq2jyNeUwt",
  "key28": "4rEUhdjVS1r9G2x62Tr3D4RfTX12GJK469u3nJKMq9CKtd7uafpuNkGTG1q5zxzabvWc7d1eqwn5gXmES7Ac6qfx",
  "key29": "54B32ckxoSArocHWe41FFME5pY5Njg23U1HTnCHGefSjMPHMQvLcjsomJNRmgzntTpP1G2vwVDdX1WnDgRSiywXY",
  "key30": "2dtMHeRVcxkXdbdDo1E7iF22v9JXxCoVQCAWEbvg7jHKhujqLUPvuRwEUdUMBBXmWScPuSNcQcNgbjD3XxLbkb78"
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
