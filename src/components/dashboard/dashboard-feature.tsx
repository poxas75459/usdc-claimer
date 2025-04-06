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
    "4DpmqgBPSzincy5kG28ktYUih2gmrt8jGngSm4pKWeUi9rv3TvauygnQrCBt9EUKzdSbYr3aRSL2wRFNozDFWgyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f95qM3J48ff8FfCj5Bs5wCzHktiyrR6yFdXdPZHraPAsZvmUP9z95avRPi7cy6kX4fY6gvfReayi7wim8k3JHaw",
  "key1": "3Hgi3DGCsAzKPTBakfDewebc2Hsy3iC74XdwBy9mkFEuB84uWRoM8fpGEhPYcbdB41Z6GWkqkuwaTnzZXkA4jFFW",
  "key2": "2Cb1LxedEKSwUfvrG1PyHHa1SbgVdnUN6FdDTKvdvm42jHdid73wr8kddjjFkizeJTE6A2efcMoc8SjtBjDwwD63",
  "key3": "22dg8ZSUYSeiGtjAVP81wWcD7xAEWgn5nfz74SKqC2BGowVRThCd2VjyTZbugH8cgjv1w6nvhNcCM6jvbsgbS4vh",
  "key4": "3Sct5rnogUnsrgwe9QfTV8Q8Eb1FQhrCxJ6JKNAqmNTk48hmEajEjLYdiR8QK6ZwMJ2yeHebTUQP3kvp9TiDYgct",
  "key5": "4fPG7vNJXYcQUaBE8R8QcerJeqkWXi42HF1JiY2gZ9vqGe4mrForxaFGfDT6J5azqm7tyawT7CZWXzC9uZC9No3m",
  "key6": "4kgbz7q8HVWa6EMkjJ1yJ5rTq4Ykfs9yHaP5QnbeMWAvHdN7YWBc8FB6BJ1QQcQw8bj7RCX6QtFznDNMVmU3BP91",
  "key7": "3jJejTZTXWb4FvKoe3WMPthopxXmToV16akhRsRpz2L6axt6TGELgwiaLFXyZ2sNNfbb33z9iHKm7m7yzu432qv2",
  "key8": "4XGi94RTQjTFRcohy21tYoUrSsWBepeq84zLAn3Cg3morPQMtHMDoXpsDdtLzmLy2faBQ1t13xRrjvKjwtE4C1jZ",
  "key9": "5jqNgByrjLoHDKB6aK1DshgsH7WrAiEo15mP1x27tT2rtuzzmDAvxDsFhXiX78zwtJWGZAd2TduHJXvbdfAWkgWQ",
  "key10": "2NXUxkU8oKPLeQgQquJNSSK8wp8tJwy1z6N7ZQR8yTKh1ctuQGdjpmvw2tCux3rPb9niitTzQbXSgyT84UhgoR9Y",
  "key11": "3JsK45RkF6pNhWU8rY94qiMZgTDno2hsFQRp9aR25hYheBzQ33YwGnDRFciEYqN4P819Nfi5Pb4SFLJggAHohWVU",
  "key12": "2avVgs8B2pjYBiN1Q5MfYJxMDf9ygfuL58ZY8TiaJBARAoN3e1BvW8VDutuhB8beRtV8ZDtviGwUTdqJiXz439zq",
  "key13": "3psVj6dtdzu7wpeCV4wzvFUS8z7bRgcNo4qb9ixu4LSibR9zZz5BCfUnEPdFe5B3xkb97UoLskpkpnpusc4nhatn",
  "key14": "3RHMEfye91LXaFKSsfXGmTcBV8Zkgf9zGRm4m65uwLC9gAuumqdAaHfpMQz9bbTsQS1fRwv6jtjg4NcsYduybupF",
  "key15": "2wTogreh4nX71JzUrKKSPGYSTzBhKJdCvvawGJ5uonhcD6SAP185cjAVFfEwaYD9Kwv4ehsBgaf4Qr8s9paeVDeW",
  "key16": "2dsgPEsyhBi62Pf2gTbfhJuEQuAk2AuN6zU3UdV3eyY6cpZRNvrnCzx22w5F8VBx3DXaScdzRAk82tx6G49nGcPU",
  "key17": "4BM7LR5Zr8NebX7DXME3SrVWHi9wPWMSVQGNzxn6JSLW2uUeKYuUV6s5LP8wHP5VrypzfJeCJF2NxrjCbEvABgrM",
  "key18": "knS8TmE1TgcX1h9HSHT1j6k79Frvz7CWjLymonV8x7gLkGnUF3N5bgTRuthbXA3caMtzLZBpe4aX9qNQo9aXpRe",
  "key19": "2HVCyG7MFSC7TCyFBW3TXMSo7xXyjy5yr7UyeEkJvjkJ3FhyrZpaQr2yyHVPQVX9qipDRBL4s63SyietM1yChHVF",
  "key20": "ZsstjQk1zd9QCg7Y1CiJ8Sncbg8Q9DZSob4xj6ceXUfSdQDZXRxXKgWRqbyzRj27Wm3U2t9LhvA9YzG64Uwpzi1",
  "key21": "3wjDhtZchd9ajtBPzJM4S5DudjypFKDkTJDv6cSPgfVDn8ShHp1BPPP4h55bYcSAstBw7wuXwGUB7TZbDLCdQMdz",
  "key22": "3qjBmBxuVTcP8vmy7qoab61UpfN9VYxJFZT7XQwXXpRvjwbTgkhmaKWvQr6mcRa82AKTtAM1p5JjPQqNszqTtaLy",
  "key23": "4xTRpDvovbGRgDiQM7FQiPa5gM9z2ppgf6BdLMWWSTDLdFfdXETxdXqA6KVD1rzqLox3LwvzUrM5ewSqNZgaXNdW",
  "key24": "5Nqhr1Wj87R9S9t6F72sEZuopFcd8g61VfRrBAsW2tcyTJ7u7FGqQK6GHdzfs6otKnqUU5NqRGntrne1dePFtyaR",
  "key25": "ckPCpTDYWmK9ynC3CaZXVpaUrcKy4xTNPUsUqcnmY4BGzoSv8bBBbxFC34xSAMMw7UzoHv7X9GXgNVSK2f2rMUi",
  "key26": "2LxisZ1UpVNgzKpFWBfDvkLrZvrHzspB8zqJJfK1VMFnmudEp3RPCcHdwX3FgpHdcCmKjFK22MK6YdsG7QKSduM9",
  "key27": "izBpyaCyKtg7eb2ex6UN8YiJG6GdPnHVhPvmgbqPo1BbzLZ4V9tcFN7GBzxWW21WY3rRhnk3w2HucyMcuFT2Cy6",
  "key28": "T5YayaDwscjZsZLCymnmUDqoY9CWdgXz3UfmNRkoWXNLAHE2UivtX7HuZfHPkRJb8n4qgxERRXXH8zttpQRdkNY",
  "key29": "2hRz54EAaX5YVszAQVApAasadBy4SHUHh8dVBxwkrtCDKp8LuRyWzSeNNLxYUgdJRahiR6xDkBn4Tr8SoxMiMneP",
  "key30": "2yWRrm24RhXqRk1dD87FHu5BzJCcnNQ2ZjiRC76WBjPwqaEh9W1z8WtGHZBLqyuYJNveeP27HCEixPVfTEpwmJTz",
  "key31": "7657eHxBX8rzeoECgTabUpjFHoTXtXceUzkGzazJVHLjYnvjqFWXn8MTJp6DxSxdmjnS8Hmc94JhGw379GrfeYd",
  "key32": "2qhUim25YUZtUnDbxHpMhz6Z7birz5ySwnpmX2Yd9q9K2xZfM4M5kgNJQGEWg86kpjQjWwm3KaRP5RhHrmRss78p"
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
