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
    "mbv7TfAYsBPKsMKpRme1e9jTPvUbXJyQ1WUpTU7pXjUzhXRH2uS4DjaM4bTT8FSVLfeBjxirqbYzuzxxrxZheg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "636W7Ukfg8opgfzy3Xfk52xZ2W3zLuXrWqNwpoMX2F3abauMEdtAyCANkngzs1dgoTt4MqZpTXXdxNz2y9E8VciE",
  "key1": "Wira9EC6CYZWrZFQ3URfDKUhs3MkvEEhcNNNQMpvUV5rMeM3z4R3P8XkmtRuSZ2h78gc8xXU5bC4Y57DWt9ozY4",
  "key2": "5yyyFCR4TS5wpWtEosjLPKixaJnEmKNFMKbeLYKsEoXqCmaVXLaXRUvLYejs1JumK7h8XQhFyu7ms2Xw2amAAQW8",
  "key3": "5v9wwJkkzL6Ysd5Xio7MAUuCbZ89ZoHoJ4GA5LdAkmuU9ein2VEdBLsVKPj2XAQ1FnmoHJEKHx4gsRsFU2ajaPVo",
  "key4": "25qs4VMRDMubQwaDyc2qVrA4wpqGjpcP6b6F3RapZbCt3Xh9enYyQyXHXWdV28kjarsm54pZgjFfLw8EP8tE6aib",
  "key5": "3DBoQLEQkdpxq8FXGyauhvWvFbVm9EpSstHu8oT4TURUHDpmFNsjeLMJiiHeX4yhqhCZzRTnrWhbDCd4M3sQwCvf",
  "key6": "2LtNjj9Fg1b3yc7PnyVXzQgc19nBUxFEhA62TFgtDTxMZdsoX3e8Qxs35HdWfRnxWNW7613RAr39XvjwbJ2qsJ5b",
  "key7": "hzji9uJLYvFGJDqgjhnzJU8y1Rx2Kc5aD4rX3Dktz1rAHFM17XCThECQrymdTCHv76YTm9epWAypjvaKwz4gxmU",
  "key8": "4iepgfEf1BnTNaX7jhmutUS4P5nK7J7u8DRSm8H42etB9J7C6J7yKjoaw4ABnG2Dai9MZ5RPi2U5v4vrjZuU55Lo",
  "key9": "5NY7ASSQGx3H8BJxzqF848ph6uW8bpFP4oTGXsy2HoQrShqHAgdLoVhfFMVd4cFqzbrj5B39hKbCsNxu9rdANrc4",
  "key10": "4jGHS1R6L5FmHn9Jfo842wDPCiBMZriLjVnLnqeZ7MztYJXxbybhodaSFRtRF3ZoRR9HhYCJnGEAhGz6jWNSXf2w",
  "key11": "PG6JHTsLi4QxMBT88NEc9gMrPDwhQwedZ4wz9UCr1aiF6RK1RQFHnCkA5S5CwG8eqrQo8BDcjsnJJQbBiwjCi7Y",
  "key12": "3h43PYMMZ45i7znkMtCRGvMbKjYqcscDz4BRnJM9NftjY4tg968eDyjQFpf8m2uajFqYC48U4ugBmm6wTAsrBUjX",
  "key13": "qi8cokSc6XSF2p7zcEhXnLS8hfewNK6QP5XgGW5Er6wLg26BZC3dZae7mXnHC9MqiS8tMSzVfcKbn2AjPSGHy6F",
  "key14": "hV1WFVWr5wQN1YzzHXj87DaQvHL7tCSJpgfY6BKpeNNTs3Gu7ssEsJNSMJQvzPbxiVSMcB5u4TKszsz75VGZGWn",
  "key15": "3niHV26bzRK7EJSV9BkwDAuyQrYtVpf4zXCvAhUsraCD2HEENRSJa5ZGjzEYCfXWxPvzQ4bmPAMjbrdpnUNhgRR8",
  "key16": "4CE7xGhN9EqJrJFzGYEpSYdmKv6pSaNo4v784sNAjjbMwUKxygJf8sH4cxmPweZQkJomkLnmqnB9eSRuvCPMpQXp",
  "key17": "4vfuMBQnCeHmo33XU2Zs8TwqiiYytka1UuV4wEkZgEzVDBPgjAqwb9FNytfxftp3HXE5BZbmUaMxtmWt79pY821t",
  "key18": "3XsdSiCPXx8bDhuvCqGzudFAZsUzFp6mixivL3TDNuCzcHRmdHf45KiPx1kNN2bBoPn1p96ZHfPmuPv9t7Wox66N",
  "key19": "41xexmCcvx2zQkfooMsDwMNWX877SegbjqdjTgJss3GzZye29v75wabq9DsEN4FkxrWpqPgVBDAAD3o41RQ3YfSF",
  "key20": "2Hhiou2zGgFiqwVFanMJ2fUKbKtU1u87CauJk8z7qndGfb1h2ijzKaTYAyMnzrbxxe8jbbVXDDa6hEdxBZRYgTvV",
  "key21": "2qVDo6FeMyjr3ftw5P9rQvNCVS5iyAQwpPFsnnACRyu7hQcwMAH4zgf2zyu8zAaAA95qepzRhyyGETxZ6uQCtRxh",
  "key22": "4Ja5oYZKBK3WgTt2Qt8kJSU3uyq53jJe41bkJu4SNTtzPfZUv732R1ivbqd1M8qFKUB8gKM7Q6NhKL6AWZdosx8R",
  "key23": "2QSM3VE4mnAnwhiv1Mh5ihUdyNsc6uAA3vLbTu6u1P29UbpiVaW378axchPtiwsEZUiQ3qkZY9ia9h4VL5xbxZqe",
  "key24": "4nWeKQ1TeRWJKxvr3kfprC52jaFpzKMUzcSG8UDHfdZ2ME4AGRh6PGWyRkEQfwdofVvbACgRDGkDUURVyBfRHJZs",
  "key25": "2Ljd4DQjVTgDKoor9NHrYRqBA9Q5HCC9xQ8a1zUiBXZYRDTMe91qxWZ2XgZ5G7xwRDyqmZt5QyecUcpVtK99zSp",
  "key26": "34M8nTNN9o5dhpuKX5E9fxbz53qFJwB1S6WudNNAXstqVh6kKk4BcQes6QZd5kQ12fxZrAxcNDLo748cprob8UWC",
  "key27": "FYJa3kyYhNqmUitCcahxey3fXeyKwuftmk7pK4rwPW9Pj71JMGijtj2BzBnjZX4QxCps6rH6XE54s9bimUqvdiL",
  "key28": "2w62iQwZmT47acZuSVeDMnahjEkgpEa8M89P9Qu63c9WkXm5zTFpVFyhgk37KkfhHbQmWUwAcy1cwDmRbx5jXGFS",
  "key29": "4b2TjDxfNwcB6c5JXDSDusvPf4RuGu9Z9AD1PpYk5VwY3spHmm4BVNhNZWJq2izjWesgiVpwyNgozqYZ6UT2RnR4",
  "key30": "4pYYQYBjpuAkVgfHjHGwAgsdNEsmMQoe8etRFQU5atunwysj7rRnR3An21uvG1AW5BM4wMRFQLtBV3QXF65XVLfE",
  "key31": "29HCq1n4Xh2PzqXSE2kvA83ifoEo8RX6cuGnySKWF26PprEGjhynMSCgUqkCMR76t1Veq8sBhQzgDdDbGYWJYkSG",
  "key32": "4AtYMwh6sA523wHS5Ks7tSiyDWDfnbEge97qeZsqKi1XJAGCjmybLmZbGUxumtJNswKtsMgsVmXh4WXJNoUWdx4X",
  "key33": "59ShhVbreDU27hXMdpLBiN9i26wHkJJMu8bQZTCksQeKwoUjH4bUt5Dxz3s1bwgpsSXt8bU57DH65pDBvCUVAQ31",
  "key34": "2x9iH3d3Hg1YyzRrT1EntFbES2DwUfxk3yc1AuCiw8q3buYv1nSPrz5UnzpfuFzd8Ju41ZfY3H6Ce6JP7QrixyP6",
  "key35": "625aGgP4sWZXsJ14TRbZfxAwUkADp2ehJTQN43BjFN7XMnAZ5SSuNiXkwb8tVhu9u5UngosLG2VzU1JVF5eTZRxg",
  "key36": "2DjRGzYQmDjP6behYyS1Shno3taW7VBYxvAzB2zT9UfuqoUaZmvdGqzXTExip6Kk3equZHgmbWUSUDV3oX3gp2Ww",
  "key37": "5Hg4SFatkN7zM377hJ4XKp1HbSepQMa8TRh4jkfoNuLCmF4Fp6zD42xWiGFJS7JnakzQKu4MDu4kHTpJ5q5Sahnu",
  "key38": "h94kTTb98etUqTkcEh68Vign3DSM8reCZyDBtD3hpqE7nzq5ChhrEeERmfYPgHqhrcZEVfu4T922dJbwz9wKwMr"
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
