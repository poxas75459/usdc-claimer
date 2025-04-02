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
    "52Y2w19wwRoiEfkyiCR4XFCJyah3tS6saDVXukZNWjUf2wRc3bzYCQr9ikMNJFfmBEXKVgQFGBW78V5usMPBmoeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BG8D7mCHA58JEhvyBdyiB6X1QizsMWyJBrmRbK7YmFimcBK3iXMESyq9QoH8vrBZjVDKRV9fgrzuFqXf4mm6W4A",
  "key1": "3qWsJY1Rwm4NRA2TUy2RmmSK5yX4ZcQEyJfmtDKvFV9F9JtofmYhbDZN7joTDaFUVjW1pcpHJYvS95ZK279zTpSy",
  "key2": "2wgfUqrN72mJDfHR2w6HZ383tM2KXK9qNwzWs3GQo7Q3Gh4mHhUgoyu5wfF5qAVKXNhWx7zeikapgFJ6DPPmf9RS",
  "key3": "vutiAghpu2KFm7nT3QuVVoDUyUTNAVPEgz3ryUNbkpzYJsWwVDzu6oM5wcT12wpZHJBdoTocdishUP6kyhybrTS",
  "key4": "FyMpW6qfxhjmxVPZ9hqiRuqbH37NssWwQqihpsiBu5LFecjwaNntVXfSF32HKct6PcvQPit7EMArySLP9T7eVg9",
  "key5": "5aRweV5z61r2KjPQjVqp1rDJGXN3U1n17XbTRRr7pLsVPk6FwvyqtzkcxJ4hQptVNX5TrJpMgixFBZLn2Z8GvPtA",
  "key6": "4CFDTgsM4LTtTzaHeypdELnMhkTVdGCPgYqsvSdqCrWF59mgJS8B3AeZnqSu3TsuyKuTLvSokrn58f4tJM1XDTaH",
  "key7": "3zjHePuy8hH4MFRjvaEzRFE5cNX6Hd96tS1m1p6FrgMjcnkfzt12EDtd1a9DPdKqVqQEmWd56Y1gjvLbaTnfiJq3",
  "key8": "62UGyH1rNsmufbdKLj2HRJWtU6GnvLS35ArnLbAwvetAUNuXqyZaGAjzegPH2FziV4stf5nE8AB2sGv8SjiWNx8F",
  "key9": "54LudaXYwHX5f8PhqV41gC98T55rY43xuRvWt5jcL8vrxwNDXaekFQWDoPwnAwbXCb3eY5PbKtw941wShUTWxKm",
  "key10": "4hwQUzTwTn6pMa8wTRZk8BeD323fPvj53wWUJeqLUiuqJKZfbaw36mZwiYrAc6LwSvh5YFfdRrE4ao2VqGMw2YhD",
  "key11": "4CMqpKGCxtLJwu13whJv8FQ9Q7Tn61c3BzpLzSEc7y5FwZgs4sKPtXQZ9UiYKGJBHcxF8XC2FpVeCfU2avrWvGGk",
  "key12": "3zxYmuBRHPARWbwk5SrJpRqZV1UKZBWT3yxJvvEmptQZUZp66U239YfwHFAgFPH3LKByFueVewzQs4JMaoY4hTtD",
  "key13": "3Mr1NmhM1C31cimNKF7y1jCrHCZWUU3MvynrurDrFoRVD4mDzBh3oC2RvrXk3DcFxaW3NfiLiXtHgCsfTfkEqEPH",
  "key14": "3uFRGQFNRJvuRaLPFvohT11yJyqcqoohYadAQ5jvtGtRGHofNQd3SDScDKLPH4f7xaZ4YW9JZkgQ5aA7PiziKw5A",
  "key15": "21xmkgKgVY2w3enw6XYrcCWZs99NN3ftsXBaKajkL7nS7kz45jgm1toxqhHiAcnVSkX2J2CYK7bmJmpidBffFhzH",
  "key16": "3Z8kAjHZ1P1igK7uqXCApxjetmfENC83N8a8LyTZFXGjhLDMsgGW8ouUfYAcj4z318tFBhdczCFeyC8wPes6Xs2g",
  "key17": "5TfWYw2Pza1W2d2qGtSdh1CAHTCGabVPhMediXFmmJq8oRkHKkcxSQjhHBdf1QP5RW7BCbKLnJhTyU3NzcXASKbC",
  "key18": "2GLTaqXFN1HeKGoHkDSeZcTP7REWX79QBE2JBSd82rURQrSz28GSsNTXkwtfyZDMbQPgvZ9DdxeYwZhFPR9xqYwg",
  "key19": "5hhqFYXYU1AhhFBiwTxQSppx2jwVbSkQh7KPRAXbCQfNs8JxXsw7KCrm5qpLerFWP7L386u3TG4LXT44BXDwq1uF",
  "key20": "tuwhbYxeJZg3haKXkGuJqcGjVJtz1dYNFuFWcZjUdntfgiRGFvMsBmTcYm77eFzwuNe4awfEmfTE5QRygCgTDnR",
  "key21": "4h6u2Z6fr8NNF49j3EUWzgJjnBp9dM44UgH2ZnYg1GCiDX5At8FRS7dV9yGiNBbg5eTDGksp5Nw9SQsEp4SBxQ4Q",
  "key22": "4LH52QmUgtJf2uHfvbHvZcCSVBxBkdD5C2ENqBJeMmRpiwtHcsyNVHDLtojNkZhSJnRsW4G4RxB2npgGKBD75XKF",
  "key23": "26oAkeGxZevv3FZ6FkzwV9VKRw1yFos6njiMwjzfSMJ9mgYGvWSCdoQwCibhqgrXktZrXYnDByCtijQ3oaAs9B8z",
  "key24": "ULVdhcx7pPdtNFmpm8QrQiCZNRAY6CwDBv4hTVtDdW55ErVrcYP5UE4KRMV5cPyo8rEZTTNnmsLmC4MhJucradq",
  "key25": "4DHAh67VWYttymNyVPmXn9zrQMm2nJiHUU67Da6HiGdKw2uk7QBSMF1AMD6jq9dVQ7jtAFV7uv6WBBvSXYPaiJge",
  "key26": "4U82bcECKFQej6qscorDb5wEyxfAUNxqjQncS4YKPcxX8nV63gVieuSS56LsUFY5jTpbgzz1AET2cKVjjh7gZxdx",
  "key27": "58TrrCA7aqMQ9QMXySvMwDWDB8WMR1jpKrNxwDLydR48VwLMp8FjMsgyBahLHoYSUipczwnr8ueVMy6SdweoaMNv",
  "key28": "xiZEAoF38bjqkbxXy7ptS4Xvrtr13EdhLcEnaaiAFhcJuz86413ovDknQSujrtTbbHmY2oFYogTzbaiRaQu2877",
  "key29": "2cTatF3QshPnEQM3Z2JNrkcL7mvj5w2dmpgM2XY2AfMGLGRhLZbB73FWJN55oDBPnVSK1QeUeEABwemgFuZ9uw5c",
  "key30": "5eq4yEqD2d51oJ7396XE5hJkEj5KiSq2b5Suwe257Fj4w1MQKBwPhrbg3R3iF6kkJyKo5uiMVMKoTKCUMwN2J57d",
  "key31": "5rphqGzRFJEepgPdRdNrH7ttyvwjRgFNZtX8j7xrHKowZX2gUM7T327YavKMLHFag8kCwH2hY76uhMeFQhzNfsav",
  "key32": "3JVjyCZjk9ZTZJ1gJCsfL1o5ioskERvREXbVKzUmAKJmcRrCHcNz5BquaxDje2h8YcHredNBss7n3wnU5n7PH8F1",
  "key33": "3NYDH7MHQPFDMzpYqG4qZNW5qqfxt2VQ8Mo8BrByR1rVr9XNSFpx2gQcoVy6Qo9noA8jB34ja1DcYjQTyUWWhsvn",
  "key34": "YwPsvWEb3CjsWE7en5ZbEPd6E8SDHewgyTD9kQLLAzS6CuGwXKRHt35U48oyMRN6F5mF4ngvfYB7JSq8SdRwfXJ",
  "key35": "VGYE1Tjf9Z4pub5RJADRJD2Krnw6XnHMKtgPzNzAwdZvr73xSz9nxHK9oJTD7SZX2vRTdxU17LQW9kCowRtMjgt",
  "key36": "CpKVKYrNH4UzuDRkmj2hHU49r5fA1svHGAZH4kKik6Sxsk3xaduQzcL3wERjMniE1rZJavzACnxvKj5q5kcwJdi",
  "key37": "5Q7aU7HYTPVbKZzfS8CULvGLKrNjuaXwuyqWm8ace82uKLuV867SrPimYLjGJ3pQ8Df9c8voV32prV4aWWkc6wp2",
  "key38": "5Rn4WCtH4wowVU7yHEAHeSeaaiVXp2wEBJ2H6zHDP5bmNsDAcL6ppGfRqTRQrjbpg952ZqEntCFt4s3bGsaxDerM",
  "key39": "pvVtbJYD4qN62wSJzDBpM7trn6FVMna4PM9CRwjU5ujMdf4zPfuHh4b5a3LENWGPsYigNsxMuLXQ7hobSr8nPdk",
  "key40": "4LpJhn4dQ6ih1u4KTAunxnnqLiBkHQEoqeV3ShiK5As1yQ3WApvq22GHSm3Jbi5EYgpsZpiNmzPzbnFUMjDWrBcL",
  "key41": "66y5YjbegPgVGgktG8CWtMTX1E22z9CrZKBmA7xmyJuEoQmjLqAdCM11R2Qf23YUmcTDeJJCr3KGEkioWfSkL21P",
  "key42": "V7vf8zQRi5G6fipP3NxPe9TnnYgCFX4coJZU5qtscfJWWpztrX8CEg1LMd7CZytigcjyYoVAk98YQ3Wu1AmVdit",
  "key43": "4iyjQ6yjPzZsJhpgtLXMaAqGF3KuCyDuf6pvDPfX8mtBDvqAwoWh3kHj2CeVaSE29e9ADv6mxCEtjLXXyt9kFrei",
  "key44": "2Z4y3sNvKY4pYoZwBfN4REeykXwiVPPAb8RZLnyxBDdrsKm3od5o9MZ9Rjt1gm1Z4aio2JUAxmAgGtKybwkSzFj5",
  "key45": "2snxSC1tXJyrWQkpybnYwSrjjrzcE1AkQNCKTLCzv5v7tPbhGp1LBxqMweBuvNmwrzb7wQt4JTheE8bVBP6TREc5",
  "key46": "5LQEBkP8HcnXtxn5r9rvtdhzhnZ7H7FmG6JKHQpPZgSRrj1R7LvQRZxtnAJhjT2vWhkJNjGEWAxmvyz6m6GNXLo8"
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
