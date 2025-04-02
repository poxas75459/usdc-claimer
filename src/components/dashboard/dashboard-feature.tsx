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
    "dZhu4MFrjwDDt2CaRdkSegsPKLmgkA7TBquHqcSeRrTjKAtdapNHsLUn6cZttQxEyJzknyPcES3fDB8V3VEYZ38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RKwFQ21AJsDTnvHwpT4uaysEGNfvdEHYLb8H7pJ3rieEy1SPRqg6QQvEXV9QNWiZqXX48oHfcBA4JXUTQPhFACn",
  "key1": "5FmZEYYmw6gSancxjPTEDPiKxjv31vyYwo6jeT47obNspzpvoJdU1zHiKFUAKmy3dcAKWB3ENh5RqymB8R9N5B64",
  "key2": "4Ltg9hUFBJXRE9CACusdB9g31DKRHuEzqFCiJCVWUyvHsS3YR4J6jjFmzGGKBVjVfyUYrxdvgSjrw1uppWKUJvp5",
  "key3": "4CXBeRvxbRjaTkZqZTgALYmt5sSGrcD9uZtdK8xSTPiQeoEqsSRGqQoQQycq2xCPgByAB23XKMqrJv7jVhnsMNAa",
  "key4": "2jAHtogwhwu56K2Mzz2BgsAiyceTzV3hT2o1imq9MUA1EbfC5QEAhPtaaKFv1jWRGDRNpNVBV1zMEohbjaPL8gHc",
  "key5": "4Z52k2fL7sqA7PPDK8C25Fj7bGWsNdG4KbxLMaeaDTeRbHeVLrjXi8xHbLd7m7zFFoMi6vcif9b32YzSoXZZp22W",
  "key6": "4e6ynBVTZzEeoa2Q2rVkxtgDvbBa4RuFDyiLRTVi6vHzvYGXyvuWrTiShf1sbbaJHLYLYN8tDx2NniFT4s81Gave",
  "key7": "5jbVmANt3ZsbmboiSsbVjbnwUrPmqrsymduwHYyykQtHLSvw9oRrAR8vNzg3kqsyH27W8SaFtURJFAXSYTm96SHa",
  "key8": "EtsX3wmVqrFX4rKzeLRQ3EKCELUyQBVHTsBGLagaaq5aXCy1aGMiWxhbecbYHCGNkMYwcY6EzQThx2dGUxLmfNu",
  "key9": "2Ms8U7fSs2GE45ARKnan2RwD9KAHcoNYbgi7NoDb7KpqwkPnQeg6QLFtgEnfR9JjJhpkWf49LC7wu9UpcnnworWd",
  "key10": "4z33ZfV7hhYGXYvCnkP6C9QwDtsivw2LGTznf35cm68mdAJ4NqjCqnuZfqsCTSe3kee1vw9ugqd5ng2AC6MCU9zp",
  "key11": "3ngPiWo37aqu3kSA8nmkUeXrznhVa7zh2Yi7UuxbkuU9R5Zdaqr5oRrSAPVSeDc272fkq8eeJcNThRFKnksQjAJo",
  "key12": "MLrHDmEafpJzB35vcubBii9PtN7d23n25pWsCgXbeSXTudyVMaAonJCFKnHY3WTc5NgcUxdmJwScvbYaC8ypm9b",
  "key13": "5DNfa3eiz81ceB3Jfo8FSFGx2GLdDxxFMzruwz4ZCt4CKHuPWT7kqfN9zn37K2jqGEaYK3ruxAXVXDKtomHvEAqi",
  "key14": "4t8QEhxm5VZcJxk6B1jKciBpji5A9K88oVVwNKZjZmEufBZZeAyuaPAWBqWe3eQWA4f7N2hm8T7KXptJjo8taGEB",
  "key15": "Kp37UECKbfxR9Kvbyvg8DpCiPb7hzgvttLEGAQS2pzhanqTzXvvpsGXxfTyZZrbiY9j3Dr9wZMshm5ZZaAhnE4q",
  "key16": "5F176Z4asHB9pmUJF4UGbssSnn6mvsFYLD6S1PemvKkqTBXqeKNcN7xfPSaq2hC1R5FvVaQmYCA5pEuqTmY8JQP4",
  "key17": "2LQQZiY9cvegmB4ZkZk7WsAGVCeGw5KUnRWo9GHQALQ6UUN1GwNrgS8qGTbTNWyDqeQfyhAJjSYbFqD9GUAvL931",
  "key18": "4vw2t1PYg4wvBZZ1SQrY7s91746yZv9a7v1kgPe9f7i8BtPY2Dfwui8ZBYEW9RXLCufK5uytUwDf3ZdD7apzemKC",
  "key19": "5kmjiu4D9YZKGR92BwatY31CP8S14Rp4zvDsrFM2Adb5jLYnzpqaYfYyQuzYpgp2PB2ciVFfdjEyYCH1QzK5vzsa",
  "key20": "EnS5KHM1BDYCyetM8dFzTgpi1fcwo9usx7Bw3w1G5UKvTcUbfSR8Vo1tzCiKo5mYVs2JHWX3aEY9GKJ76FRyxf6",
  "key21": "35go3E896YbvNygZAfL46uFHuczhuQFsk5kuTmJoiHmCdvPgtGLU4g3jxFu243SsJc8Pq6BQY3KJtCB66jbX78YP",
  "key22": "2kMxfoL1mB3CxJMSza1PiVqmMVs6W6xuNUBQtWH7F7FwLLDQPQkSvGtRT8DVS2n7P1MTisn5DPT1qoGjXuvGUj1d",
  "key23": "5RsDsi4anLyeSudWXGF9CpvKLRwRkkQ1Graku1eWtRgFNQ6x6kSauYyv1WxPAdt3Up7Rq8M3jaZDyijpVYHLGkpT",
  "key24": "42zEDyZd3nEpTcs4ueDkDYqmhiGSZWpx8GbDUm4cwqFXX53AqvMAz5Tr6Bk54mDWx5rDMP19UPL6UoWZh6YbzkzW",
  "key25": "44NWRfDGtRJ4sRPp5zdvBzs3wgCyz5UMMzzBbaXqH5sF5n3zPKM9ukLGvDBJftmSRPpZSo5jLymq6zWZD6xJHMmx",
  "key26": "4Rnbprq74kewjogq1SwfodJthHKy7twQCQVCZkuLUVNopcU3PVmmsypsn4bNTMspfh81KhYEhkQ94TDJD1RqtyGS",
  "key27": "4J7cPm4TskCu1PodwL2dT8ZdM1hn8Zwveo52ca1bVN7yfriJDPMqaFR3N8UdJW3bWnhhbtuarzM9L2QosHRmHMja",
  "key28": "5m5aLqTKzoFYbZQEqT9YsLGkrTcVReBuUzcV1JoZsZXgv12D16agY14kLnDF29rAQdUnEQ28EDuWs6ZrZNJQP15d",
  "key29": "4Hcmgm5xPAWXmooyup7r1JQmbUnLuVFrSd689PMyUvx7YxyjTBWhkr3d6LDiP7EijAL5bmuSdqZUd7nfqJkgFcmY",
  "key30": "3Xh1jRVBUGSA4AwNFgLQ3Xeaeu2ot4mFLX7LeSyzcHcGqjeGgP5dH8kWjwLrPckyVmo58XJ3yTCD9HQfbdxTiNrG",
  "key31": "5UpU37ZZnByfGbE3MU9DgPhc3ANSjJdsX4Qwu2tkwVbRWtrxQnki9m447pVQpBWDN3pQVjh17rLousP1Rk8vQo3p",
  "key32": "25o11aPm2b7km7f2u5oFbzZZENwNHJ8vQc3kLo9t28NvPUn32TFWUvdZZtwTizQnTECKc9LXpmaZniYmj8Hzio7N",
  "key33": "4NnyQjpmqYfdaykGjSpcE7ctkxZhCvUm7A2uV4rFAeyFoukpu5y7ni7gn1L8TJxqwB3SS7Z8iVsRsGZk4SeUYdAD"
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
