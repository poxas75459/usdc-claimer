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
    "sKmT9WoFdsJuzKRjEmWKHmKPSFzGYtwt1uUHPH8Ev4Te8BQnFsSKsfsHqtT7raeYubRRUAqQUmeFEZwWiMAgyrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ffeb3MHK4TMiENczDFFATiWLr2oyaEyhaPHss3qCneewBRP74oJN1V9dDfP89rQ1p5KDPQNFqEnAvu3SUzB3FFr",
  "key1": "3NJqq3N9iGyRkuuJ5s15UXQB28pSSdqjHFrxqX4hjBRe8iAjb8QC6HgthHDR97Taofyp6AJt7ksaCksfPeYuKTaj",
  "key2": "4EWpLUHA4gyNLhFMRpTa6bt5yEyHWj19kbJb1odsNTpeq7CDEVhoVcCr478AarLxjYzivzLSWASEqEnEtbTZm63a",
  "key3": "4aUJq9L7rvQBxVE5ae1GTCWM44PpQ26jCF2LKcT1aMEpaZKaymboYsAoPpvpA7VjhvkdYJ74pr6F9WK9zbJKaohv",
  "key4": "5DCThYJAPpLbmiExm6cC9ViyoCKGQpvWV6YAQ5XQX5FXDZjHv5pGJPK45tTCxtxzJHPLZhgV3yim5aSsatNJcVKD",
  "key5": "2qzMHuCYsoP4WhjqaTNkHs2jHgoXyecg4Umwdp2yBPsXGYNPFz6eSdZBC7C28v33kxp3pZywoYmyKx3i2f3Lg1wZ",
  "key6": "4b9BMTXiw87netsXa9zpBQYVF4rnLZyFTNLXCeTFsELSYDgxzk2Eo9rfc4K2yxSV51RfXpGcXyvs7QWdrDn3hMTf",
  "key7": "3cKtfiaVeT4AzZFd6e52xKVctrCmmJaHGa4nDqrkNMCzYra7sG4dwQ4rErkVZthZ4ekAQmuyvy5ju31KqagnEF9C",
  "key8": "3NtrP9GH6qNmi9PznezjryYPUf1YnsAu3xcJN4g3omwgBHizJNhF6sEBNatzwNKVD3RYoZywT2c8CYpYSmLyVSNd",
  "key9": "4NDLcuE2RCriyQGGyV6Z8S5A86XmnbSinsuMKgvwpc64TFVwBhA5Hxq2BGksqCwGRC6YFdiu6Yqcm7RgftfriJb8",
  "key10": "3hwCrm2m7pbuutEzzxfKC9PEN9DVG4wJ8pKuHLUfUw1hdbz1zDWDanYTZckR2wMWRLS58N6grLzrcQcyCrLqKefX",
  "key11": "4iDZC8QNoSnmrj1wUe8GqPysowGDCo42kmb7ZcUD1h9HXBnaoLuvpD8QcB58TFq4mmRsMaUqCd4n85cTfF4yhYmr",
  "key12": "5U9FBmuccCfUQWNE9dmx4RK2B2dH775fWBEqjXyaUU4BbK8Vrkz4UcMW7AZVEu5hJs4i2fkmoDmxogW5hAni83yk",
  "key13": "5kzmWxp3wrSRccFbFm5awvmpfqZDQeBSys2Vrf9TZcr2TtxLKtQ4Evn1Qbs12L7wNZiNhi26EJhNNnaopGxhSF6u",
  "key14": "2gZkyJdGNYiNtL5Egy78RZt7jLrByY9KwobPtbFq6TMfBRJFKahy5UhQVA47cipocoXMYWAbok2atvpwuC3hnVnX",
  "key15": "2LivwjJvCLrAT2x6ckS7d5DKofhWrV5CaAAtRKJf5oYV3HsH1r7SLCCTVPJH6mnoLNG4gVYDQRCEf7Jo6duGXZPm",
  "key16": "4FX8VSFN7JVrdAj233S6LYfvBvXL8s37mTTs8RWgSdbuwHJwmwiMYjr9Dsj7uztg8DRNBceupiRfZ7s69HUnGRNY",
  "key17": "zUyDkUTrcujHYAEEzHLxe5xXPc9J6eJjFbCAPBWZzeDBs7hahmeR7iLFJRWV1jP6Sjg9iZKu9iRzbVbZ9XZFEzX",
  "key18": "2uJ9nTGJtdfp5Epoj5dkFwbWBETFSNMhFmtf5yAbrfWA3WBqnXwqki1K1v1urDRHpqMLvwWwnX59vM3xGNRQ2kRf",
  "key19": "2D5vAUVD41keXs9ohJxTxVHbSaHAXBPveZB2Az5WpBrQQGZwHmRV2nxjh3NgV54oKBLQofqmgae9JUMu6A9vjt5a",
  "key20": "5jCT4CTLvEDn9T9SPWLhHRrdmEpAARjamUCsHUFv27Ny9urkU6jDZrGXYtBYncZdzNS7xwrEx94MeDRj4TuL9cCu",
  "key21": "3b3CMU44B8byie1QJTLq9yMLZBV2eEWKznzP2ak7bCptSE7hG82FZ4xemaYaZEnAHwb5JXRGKxnqF6KZXMvLUAj4",
  "key22": "5pfxRMRMXCyH1cj15Suj54EqERBfVogEh6KLssxeEdWWeLfmbg8jNAjPeaWjshu2iTMM6JCpWF2HjwisK5EsMM9L",
  "key23": "62kx5RVbEhJtCJPzXcn2M437QQ1mTT7dQkcsT9gF4Y4Dm5raCqaVYbEsfqHgEeHt8ewpGSGjja2hSvXXmqGSJPSb",
  "key24": "rmvwjyeHtLqxQTjkJ9pcPt2RbuFv5XVKEF9hTMf2AwxzMNogPJkG5tp8f3kPmSJU1NozzGiv8ZmgEHkc2KWqg2v",
  "key25": "2z8JPLz7GrLYj9tvyr3y6R7ruKPur96zeagJNTp5jzr79jQ35fZfZ6D3U8myTo7nvF51uEDE8rCU8uicz4xfaT7z",
  "key26": "3zBS2ok3vZCbkM7Lph1cx818dECXESzo85TT8WxvL1SHKXkGyRge94k4vWpFK4LNh1D4D2bRzyLWo7skhH6csRqj",
  "key27": "6745owFQTJArSCgHB1nVqAdrMM29m28pbXQrXbbNHJAdEzXLktzMnEiBwUUox3NFys22kkUF8BCPnrx7dyFEkf4r",
  "key28": "5vE6g8Bu8VkMcELE479T9qafKvbg4QpSBUrxBdwavrf5Sp5s44KeuDWY7aWC2CNv7GJTtK2x12hsww44mhFupUh1",
  "key29": "3vo7es1A2BSyxcTxo7KP5zhLWjjMM4n4msNqnF63WnDzpXw8NQkjvA6Cc43rp8cCaefNdQUQ91VMrBeFjWgDHeSj",
  "key30": "X6Dy4uM94T839jZ33HsoTxaUayKKD2mJMg84UqxzDx8zfcn7oXcHGwsysN1dWbyEoRLu51VP31HMywWhjny4sep",
  "key31": "2DY3ZrSXn4o3VcE1wm2c43sA24kHPYgd44RZAbHQyrWG8i13bKENAu1BMTQCCXdKzxn5znPkJdFV2mKWkgzVUBzN",
  "key32": "Cgpi8H26ECTWyTsibPMEp8B8Yq8DssPbVxPiaW5S1qwTXbRGg79CQt8SPoNjJpTKXC4En9PfoJrBGDWRsARnKgx",
  "key33": "2XvA8ABnNkS8UBtP391nvUAVrUB7e8yTkS52r4p1atXaoHcjXkeasUvgnKB4rRUeqtRumu33HSqwePPhLM9NzVxq",
  "key34": "yjyCxxvGh3MVDkpvVbpjNbjXCH8dzE13uRgvf3Zvz5aU8nhhLZrr2ff4Zuno1rmnBpytjE3DhwdQo9CXfchnRjM",
  "key35": "4bVmCY6EQtRy6aoFY6B1256QZKG3g2hNH5Fm8bgbxrcf8AL7ZQEwB9EczgiQQ5wJrEt7Hcopd3gWAqTJNjUyVAkW",
  "key36": "4Y5tvvVS3PgD2sKwDKGJzabxcgwgv4gbaTeifhDmu6hw2S8XHWGtJtT4hPtsieEnScvatovmrWnrAHv4a2UsempW"
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
