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
    "3X5PQ4RQMv1vguYQHptE6pkcy4LbTURGnv6jv5C9t2iHcWWVX4xvF8n7u1WeU62Nz9ZsYyKWPFiqNq9VZUTDTo5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BuvWuKvREsV4fdyui2bGDpKSf8wRfyCukQ6uUX7zfm6NxuyarMYVbDvFQF1ei5fNnPK8U7NWDkT65eu5nFQrCrF",
  "key1": "5GJGbQaJLe4Z3PXxVRe2wzrRPfFWm6aKzDH9wZBcrsawFacXMJ6MdsA1GoYhYzswEhjQGY7cJqqsABLehsYmRSim",
  "key2": "58e41LZGE9348FeN5wG9BVLtHdpWhqvQ9NwmuF21BFJFQFPxhhpQaei8c5HF443FKaTqvoZHL6Ldm4DeExXYTs2d",
  "key3": "4Rxd94a52bkCqoprtpvjp3JrxYJDCbV8FwEJSbNNjrDhrdxsqoRGE8JJaepmYEPaLjGzPUKzzaB29ZqVT4cxSp9o",
  "key4": "43cQxCRpJ8mkaCadcAaxUtVr6xKkac5oWSbomdjAuXUPJEW3eU8nBi34fRJurhsoKUxTHXnH1U8CJwPVAZa8whca",
  "key5": "34FZ8ie4wSoHGTyh5t9Peb7ZtiBAqmFATwPLM6XNze8JcCUjEQLF2xhHgtWpmLYYriKc13EGzPHEo3A4NvaUSW8r",
  "key6": "3Jmx5E7FCQRFZQC9cWg6vzre69i7YBK4uTZvzDNFFRRQGgbhFduMoB8ZgVKp25uHW3orRWyN3RHqSdziwjistLEG",
  "key7": "5hk92CFDzViZ6e567REYfkjjsGyAxdHGeAJREyqU7jVeTR1wAGpqhJWVFy38Yh9gbyFNDgR2Y56Z4QmZrTiYisv1",
  "key8": "4rjedgtbbVNBQXgWM5ak9rHfcCk1wycox9vqiAM6Wgwm5mKxpSva2V5qucsnw7y7ppRffTs7GiuafQJBV3nhW7Uf",
  "key9": "4XcPEv6xvG6DR1tSC6gVVzUjJ3BwRSaw1JaLnTPd98arKwXoek4iWjBnQWHeAfvhxo1wSvXvak5CQPfB6bKY8gXx",
  "key10": "24phYLT6AxTuB8t37R3LJUHoM3hbBpeDH2eDdYkvpbLiYRAcxEG6ZCuXi452EcrAzfkXUjZqbxQwoRCMrui7yAyi",
  "key11": "24Kg2jGokdrSF7iHXt5SiMJwE2eHxMjyUMMF328jFYxSfW2S1o34cV3xtMsbAGtcb3FEr7LBS4UEwfmJNdeyJf32",
  "key12": "5wQqBjHucgxYrfoeEoDh7mAoL4GPaQgqUhwCLdUHyC79dcdtGeNmQqQuzoStjCkGa5D86qCcjVoL5SXHsRADu4MM",
  "key13": "46Jzpg6HWm1gC6faivzoXJ1y8nRiWsR6dj876V7kNzHhT9EUP2zdmGuEVo1G91VUbiMpnRCft4w6nKmVBPARiGk",
  "key14": "3nfa8Dsy8QRNqbHUXiP4yVmgVhGRsveggxB63PUyVaeg2nRUHqtCqtaRkH5WDY3RKXXpyM9MRrDgGRyPxzczgSJT",
  "key15": "QYVvyh1fE1ZEA4pqDf4PjLm2C9FPtJyQmc9F2GQSHawxN78omQKcB1MuPCp1emeRkqLdwyV7HfgJ2oB4K8sNDuC",
  "key16": "3U99MJqieaGVrhcwNvQjx9xh6faEwyDSV71sUf7tsLeuemZECntMKFBrHyN1HZ1bYxxM4ncnd7H7Ez6m3Cg2Gx2F",
  "key17": "2fEGrfjLzeKdRcKpyKsuW6CN8RawJhjyNwLH3hbxtDysaJP6WuXgaCq9YpSNmSDprc5maHntchHKekU1Qo3HNVji",
  "key18": "21LHq74yRBPy9KdwwmyPakFumetCsQ9CAEcCNk4UpffdZj6mTJqv4d6VLG1pdEDqJQNeu3uXc1t4fTwAMuMhrD7W",
  "key19": "2YTDeSzas3rMQCxQtqakXZCdmWDdhvDogU5GKxG4wGTXErj2eDYax3BhuKLcU5CS1y2PLi8wdaHJ6oMHyQHAjCCN",
  "key20": "5pJ58j4KfQ7Ewabo3ZYwDSmLXpBfXDaa96DirXyvnTbLbgjKK6jp1P4pJBJfCdb5WdKCRwSLKbV4MtGQkMfTagzm",
  "key21": "a5tNFPjo88wP7Gpbm6jD2f4HoeYiBHCmy8f8AQXU9KE1bMX3n2Zb1jSkJhbUSepey1NZdBxUtdSBfm3ZsBnd6YR",
  "key22": "xsrN72p9wpu2dZbLxmAK42KK58KqD6U9GfnZuKzFT67KsmwMYLBijD3j8y2csxyHWUsy4Ap85Nb6Dmxcxp5CyvZ",
  "key23": "K2gobqVQYuLHVdyrwA969ksQ4kEjfavVrnZG5jCwmZMF8WUqqiR45Sfhe5dwaEVRbFyKWVoWHxZ7nEDke4BdyD2",
  "key24": "21Ur2znbGKQsDhYpfQh2H9zRjeWjEFQAUGT8pDyjLmE4s5cQedaEPLLhhd3r7b5cSNTabkXpFue8hGcza42QgNjr",
  "key25": "gwExwdEDpWUC6HfwEJSrWFHfQH4SJdhJ9AnGBDg2HpakyHHiiX7ZEgBALcBnvFGScuffg1yzCfATkFfDdrGgsDY",
  "key26": "YMrzMtdiD8fjWvT9i7FFDfirR4Wz9ds67q1sjj7VxxNWAcqt6nr4ge3teiaU1sQTL9XrTQQw3uwcskgHUHCafP4",
  "key27": "MxfUUv1gcccosjAvqm7jEvt8mJyu3242CY8ARNk8JPEwJxtygbuHRPsHgWp29Q5H5Nri5GwtWPwq5GjLKPCff2d",
  "key28": "2mx8vuE2yUvMy1k3XBFhzQ4ViPMR2h5X6FCK8xstfHoZDbZdL27GKdJMGFsnRWShRMbuiYyZdpUbTqoS1PFwKcXb",
  "key29": "FBe3EPtx66Qv3L5nWiAk2iuqCSHMxqLdzdmuPVDXfqcFHi83Qxkxbn6G7mBsHUt2tPCuMkhmcpyRp8M7A3LxynU"
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
