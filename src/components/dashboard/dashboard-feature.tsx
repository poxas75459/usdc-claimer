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
    "4GxoMcrE4X3VHuV9dYcaHQGnfs7FHDWLu77marpbQsvWco3KZ2oVrJVYT2mdeR7bAjHLKRr6M1mQFMPAjFXmDxu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41avcHz2yYTsEZGj3gy2HhbAJWRC2DSoaF5X4cJL2Le7msXzYHX15TwFi4FQnMNijWMgD9abnrFAXUzPhQivTW5B",
  "key1": "Rx9aJ3YrVWaktjjk8x9AruNdSJZTDmG5BPic9yN9WBm64mB5VcGXEgKdYjS3qQRRWWgMK4acFbT32ftJHfuBfi9",
  "key2": "emMVXayfPMHZXcfDMtZREgw8UWbw3HGDwyWQUdw549j1Naq2fTwJ18rdwNCtByXt27d2psZzHCVV4th1oQxBa4F",
  "key3": "3wqaxam1WUt8H6926NA6v6dCaDMWWxQgqHmcj8PGfdwi57c6P28WXodS45D7Wb9LVYoDz4XQPGKJGFEUAnxqSw5t",
  "key4": "JWxnsp5SzFScT8NVEsvmzP26PJwsX9D5YBv9oVU2CJqZSnCMNFxSMNEtnmX84X66RKWsDJec1Sc5XU5HdK5YG84",
  "key5": "ocbaCpSL6BNaqFqf6waKkXWuup7nQYhbdM29iPJHefec6nNxJiFmv72RQX1kn1gyn2HCTh3Sqj16d4b8vj4761z",
  "key6": "64STXcj4uKLM7nwVH5jRhqkNpsZqYea6yuHaejPxq1BNajDKr2vzHsi7YKUB2nGjxNWV8TiuUSYCgQZ5YGAC54CY",
  "key7": "jfgMrzUC7qy1tpfUmA5TjVvXvboMmYLU43uhDW5ufLCQvZTBxoVEMc5TjQKngWRvzSaGykozGGCPVMB1pXR8MBy",
  "key8": "2NcHeFTHyzneuPYfZxMFpVS8bHT4oNknDeCEMuy6MdGcg91xNTr1GBN9kbE4L7smLmo3MWJxcb9uQd5eCssFhHxc",
  "key9": "61YQ11A8e5FD43VJbb1aZE75bHN29xQ2wcCiSYeR5nQNUWUVrMRLeUnWGaoPuEEL5iJtKEBeERowLvTgVKfcS448",
  "key10": "2ZYfkfijn3nzfuMdXvCaTcPcZ7e6igZNx3BXdbSfQSmcGXc82jvQeGvBE845GHqxP6Hq95uTKv5oNh3K7ETGkjsX",
  "key11": "3ZWSvp7qu4jQfs8VqFi3BqXmG4pkTqJXinp7A1Hh5qiAiHBiCJRf9rswfTvvWhPwsV6hLfdT4Pc7sJzeCv2vvtEk",
  "key12": "3evKEivb3zBT6xQd1h259fv1pRZCDywPKdA8RRuaHCpYzbWpXy3WYaQzYeKaWBCfSQrTJ6Qe2sE2PTo6rHG1BhW8",
  "key13": "21r41z2oSqShXasGS6SnQHRHUoPECLBE7gYq9aLNX6trJQuTtPJdr8hUhRBgWx18CWNG77T74T5hRqgnPRpyU3BF",
  "key14": "2LBSg19MfH6ZGPAL3L8FWykVGSnBy8mD91RCovadmYqvKXUji24qieXanN6Ja5YQP5a8ZFPFTTH8uMM74TfzqEv9",
  "key15": "2B9kTJEu3fqLM2i536oiu8hz33yQvnK7CvGtV4JyX7ApW8P5fcm4SmFhwvSsBzfRmv6TpQMMVYfFWCVBFFBZidwQ",
  "key16": "5fRunsH3updT6cSyWe6qZADY4ePtjYAVKcgztYHhUCJDFU3tFP8hnuUY8otUMHeMgzi37eDW758k6ScN8GNgLv3E",
  "key17": "667scVaS8Ah57bLtCrQ5sipJCqCcP59EVjihhssytcGB6AyYwFLyHz39nZZh3UZqTsVCsrq1NQg4ngCvjUtXc7g9",
  "key18": "3byAyszHNMkjtEhYxWiKfJUMFYewb38VDoux8JUEkYvQb8aqqbw3ng9PfYNezbbzMLCX6vNMj1fZNiJAZxoCEu7B",
  "key19": "57f2z4JK73v1Em2JxnF3VpHkYemTRgATHF4cBV5ZYXJEWRJQ4fybCYUDqHU2zXMX1vJmWXtEnhXqMZ4HJYBZscAx",
  "key20": "5wsf71hxxFRVcE8qWmRqMu5b13Fc4KZM3Vtdy2q2TYGL94qQ9CLw5ZYY883B4Znv6hBMfsRPFqrH7qYMr7Qcuy8b",
  "key21": "38tXNcPW4FLtS4qEhbgURovBSyoavEvCwfxcZgEtpmQ2sBBQbuFj48Cji1BAP6jArmHoobJHyjDE3UmM3wFpij7U",
  "key22": "5t9kFW6esvfoxs2Jq2Jb56oSDwZq9E5AH2jSptiHQuEk8ULmQMz17Nd2n7K61x4zHgisuPKzqrLXBcnxFEaF8LcA",
  "key23": "437t5ggQtRq4yUkv5rdArGoXmUX4mfn3t5JXJKD7yRCtLxYKU9sSydZQe4b81XAB8LWRLjEJG8mVav9GdcNuZML3",
  "key24": "4yt4BeWnspUitWipkZ5LQWFspCG1aeW6VTWcpZ1acx9xbKj9nZ9okKtGpNdguBLidpP2J2RRkqRmo72E7Z4NBPxB",
  "key25": "3jE5YnTLU99Qq1jWFcPoGwYQpCK3jYHaWqeCV8P9bqmM4HMBygJBpxuLqqoG9UfcU4qtCZoGv6KCj5HLk3YJpJHs",
  "key26": "47tgc3LmwY9preN2z9EZEfTWB1Wkc1VbQvkMkrdZWgVAy5bmpaKRSXTZAuxFh1uAD4Fxv9cpE2g2iQ4dLtTdAUtG",
  "key27": "2T2SdycBWesjaVZVNUSeWhKP7p3aqAFTXpeLzvWUkFyACciF1UYCRa9D65Gp4AmjBvBjAyzNqPjKjkhSZ2cYEgzc",
  "key28": "24rmiJrmTt7VDE7J8h3B7imTSzWGVqV28oRjNWbJuxA2wgSQk9bwNZ8hLC99rr9M4JJsUdchGvPvvF5yma3dR2uA",
  "key29": "27XiaF432oFZ6nAeUqYqX3yPavrQuHj7owxseBSKWsFBLSxNn8UmXd8FpUsvAb3PWah1VqaZhmU395534Q9gG3SD",
  "key30": "5MNV4YXxkYEWM2E31Q4F8jfUaVbEJizzDCSeosJGP6JbcAVMjyQPgLf4ynANogFTgz57n5oG8MA2QG2p1YeZhu38",
  "key31": "3zDwXGY25GkM2ABtd9GBtfbdNUdT7LiPEhWx2nCCoaaG1vNSKCXNqeaeMKHMLYomhn6iQn6cFRz4RvE2c1hL3zfD",
  "key32": "3NNHhojUcBTjuX6Ge1Terc2wkzG2HN7cQCWhyPLRM8vdkWp3BdsjAyiZZ65GvN24dUi4vYRYWg7jjZQNn21sdY4R",
  "key33": "5aD56oUr81jfNmcUZhSXcEyhuBBuofAP5Dv69y7FVRSW9gm5hWMrykaDoRmJUdwynfub8WBpUx9EY4gmYeMqzt5Q",
  "key34": "3XfBsWeRjRTAqeykZJ1tBYVDWUgQrfUyBkDknGF7qW1ivBVvTrFpoBFGkDwmkmbLSpBiJPGmbZsSLz1g2SHUtMqy",
  "key35": "5Eev9YVoJH56LBHGA1G3S5AMzDHqtZV7Ejss1eLhaJgDLTFJGKm234E6KL1NLx82yoXHuNCVM1MFHXwZQkLwtK44"
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
