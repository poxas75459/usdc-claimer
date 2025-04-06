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
    "5GGVtMTYx2dBXVd8zwm6Uwu7LD7cXBGj59kjjdZiu5vjX7jSRHXCkxbNv34mQedfPFMstS9j5aHMt47Vau1KbrA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJxG65tfowm6jG8gFopwG21We62crrA1djpA43gtapMoJuhxYsMX5bZzeo9x5Jbe6hxioQY2wMFMgcizW2LRbgz",
  "key1": "23UtDkWzQHgFchvwvGLsUcQMag5mRkNz7MEYaZeJiZhZQVwD7gi5vJMZQyhM4wonQbPzfbRpbeJTH6VW6FqYoaGw",
  "key2": "5LoyvQQyHahU1dRvAi29eVUsrmmqxTngmoVXFR1qxb4Fs8vVerCgCjrRoAkqYZp6H1UdHm1ZTnhyHzG8hYJi6bED",
  "key3": "5ZKvej8hegX56p25BZGhiDwwXERoSKjNMdYfjYHV6arWgDRoSLBJJciAhC1JGhpWpKeuqbRKVHhXdRHfNqT2zTpu",
  "key4": "9ZucuJ1dYXVbdYSgb6FnfPRm5kfALvPup77LfEbLx72EYADkqrE5Sw12a359riBbs7xXgXVZWdX4tunMFXh8VjZ",
  "key5": "3a8pUSs35nswvVZXtjJq8RftWJdyXbDRNVeTQgEjYHLvaCnGYQkknfLDomajUrocftNSZe8UCeBpCK9bvfoExajd",
  "key6": "secPAPedwM7K3Hh25m9vbaCZRM5uAGuaxXmbVaPNbudtS5xuZD4y9ea3qVUpDHEpZnj22VjrPGcrs4L6tBX6Ddb",
  "key7": "4Uh6ssbXLqtXh9fa75DSS6hFN4JhHMq3XGbgtCoTvyvKFcXecqbtVex1ZLosThUsCAXfNYEjJv8w9SHitcuZsTEX",
  "key8": "2ErWqoQWfuSSrszFR9nXCRax45qmkcQjJ6wdWK6Q4e1ASBvFM4JE2eGDoFqyU6fWMUgeDHBkxyfuzNxHENSwGBcv",
  "key9": "2xpfVXJouVUzCRSiVFKWdJhNs6d5hcxhJVW2T5ocs6KduzWme3YJNYDGY1Qhx5iEjMiNU4LUKK35WXX1BTpUtJ5f",
  "key10": "3Ww84cUX4JMdqsCAYGJwJMDtfccFAybnUkM8XMPQHEDohAv8ciDBKS9MPqPN2WZvAN15k9HByTnWGXabqnUGQoNa",
  "key11": "42ZUHsXB6MWQbFWt7cnCGE3gVWRtAspUrVc1i4LTACwsmdDzEvjfdaU5tKLeJLmxrWsYx6PNzNMAhkPMMWSXYe9a",
  "key12": "5ppFVwC22b4JdCB4K4txBHYdciV9U6xFXFHLsSZzFLqM1rxrLGwvdBCDd5ctHFbJqDDiscXfzM8wvn5XvRprF8QD",
  "key13": "57KCZnU5ApbQAEFn6J7BGtWFDPKjHUKwqHUE46hCvbAXgse7aTg2uuin27mCozg7T4TcHwXvCfj3febAMVURoZGJ",
  "key14": "64RaE8ZqHPzLjdfYffGuaSyCoc4agjp2Xh3xn8nSp4bUfaX2icPpxYkCFxfGeY9WVUP117s6MVpDFDWM3Y9ofZ4M",
  "key15": "4tPp5QJjbgWvTJER7DaNAV7ZjkPYxV7jsQHsjV1fnsYKuTGzNZRMffVxWKcbvshxSiBSJUzgm6DpycDnbwBtG9Ny",
  "key16": "544UDsFshTzs4FMLkHZxx8RjHUishv69YYemoJjgoDciPf9aD9EdpmNf8kLNcPQnrje9iuLNtV6QAt21a2udPKmG",
  "key17": "2wNcraiyaUCjoyT5kEGUzuF5be7tApQMhQc5ympVchMHdJ3qUrugMpi1ut8MdnJzBsZo36ECs3TCtQP9W1bvog2i",
  "key18": "iBYhjrCA5H5zJMUPvmV58F2ic3H4nn2d6ZY75BB63qvq4ZR2cnN2rWtG7iwdXzJiKDZFQMsdGMszL2WshZtJsKt",
  "key19": "5GL51weeamwSKnYC9xTCUkUxBkkdMLc87ZKRmTHY77dzVUPCj4JtoL8EaP9oekAKj1SQXyirKrBbD7gKvwoT5w9G",
  "key20": "5TkEQ712XSUggBKuQ8KnkdNs1uGquuevESRCekYg3UZYrhnwwsmMcnbxJjdLKUJfTtL4NfExQSSQftbNTFUFXv1d",
  "key21": "4D2daNuATYpxR7zYuYmQyayLxFnEbg5fqJW4JuTq2qRuikmChBWXYhTNPXXB3A43UCi2EPp5J4ACUNThC2SkUc59",
  "key22": "3Reb1HigMbQzGLqSYCPn3GNpmQ4fXGrMx5GWhjB5zDPa5apaiB26kn844N5FKWzHpZfsCCob4mt8kvbvvbSDp7wh",
  "key23": "RyKFRxTEoqk4h8McP9GGsqnRZxpa25hZy4Na6oXZWX6s2in5UqotnNkei7UaL4tbC3GjuC4kWRLymEZNXJTDf6H",
  "key24": "JDErAMeLBGyX191EDmSv2hfPoqdJ3KMRYehLsZmdnZWhJ89tFQo2Hkwd5ubdSXYDibp8SgkP2YMtHwkYVjo2v1c",
  "key25": "2yiKrY9Htye5jgUjAVNhEYEC3GAGXhMHLWJZSU7SvWCGkvbqurG5UEzARRHdSnF21BTycxXViZtRp16RddJ86W2Q",
  "key26": "563FpJGgCuXzAtGdXXm6acZWDHEZHtaSzJRyBWVH68NmyM7MoNADs2ca6HNpzmzFvdnT8ryt4XbiSmnkAVuRYDYP",
  "key27": "ZvmLgEaZQKHQKSP9kQN9oBENNhtjEwubfpX8rE7BzCz4fYutdgqQNN7XWWhRWb5YKh8816Pab9Me5YandvSnVNS",
  "key28": "2qC8iw7jHCsXgVwnFEt4iq3t3cKamDLVFVVRECtArMN5xeFCkEmd2Tq5M9GJ7FKieQCpgXUFBU5sepuvxVk3xiN",
  "key29": "4BPsCfMykpmqT2pxFrJt4Ns2F72taSebcp4vBNaQeB7KG9bBE5Vh3UpKFgEkixPaHQ4jZy6NfcWLsMsBhHC7rq72",
  "key30": "zJ8gL8wgHac1wGyA3Dcs2Z4orsrpVPzmcBnfJHwLoJfnuuQoy63Bg6P3YApZfvz9p6FBXuSA53AGnKfu23FPAxW",
  "key31": "4dg1d8SqmtHr9fN4kDJjq9X2DJgThdUgfG4VBAn1rTGddTX2rSaUH1s7cU84osc6rGr8Uraw9aaNS4JoLLVpyF2J",
  "key32": "5RvhZo9ssc69o1CnssBrcnDpWa3wnvMdhx1ZWaDLxAXvaMiyCfpAYuudoUP3jkfteMoHGyxDxFekcm2jaJ8JdBXq",
  "key33": "ychpDTfJN1TMFmsSZdVTXT5wQxFxSST8RJuajPzRATUK9qhnZEo9ddhFeVo12GFPDcuqUxjhmtwjYbytgALZsrG",
  "key34": "58XX7koEUxtJtyn43PC56nm2F7PBvzxFYJqTbYr1XMweLXqY3pBX36KMgab8GaMPfAdubU24Bzv5F9HZTjYni2Zq",
  "key35": "28zWpnn5Lgswe3zU6canS5H77pTH8mj6cUow5m9UpQG46NcxDLeJTm6RhSiHttozEPMbciQB1yUf55QQWF2Ycywr",
  "key36": "2M8PFrjB93gQjdo8PoEGc9Nje5qPdacKLGU1SqYt1AxGToiqDPU1yehAg3AcRK7MqxptrPoAf8qmCdEmBUntxT4T",
  "key37": "3D6RmH4Vzu4N885365yotH1AaZJeP92HfdQTxcvomtp4S4icwCwTpUNAc1E46dNbTLdn7TT9J7ueyRwHY9XXmjLJ",
  "key38": "2Hv9LU8fggjsxZqQAFfK2rdGpLtYx7kqg4i1YJ7XtZd7XwRt3FbT9yGQXvDzQdDm4YyELKTxUMJzT1nXXGrx7p9y",
  "key39": "4PGBSCNghLrdectyD9zEviEnHm8rWN8W7J3ZHUguZNRupBkoGCwmfVWJk3yWmPW6ihezALMDGDH8iq8rheCLDp6W",
  "key40": "3BSpX2sZUeQZxpW2XARgyAMzStzQsp4FVWvBHU3qaFtZ5wQpLJ2nYJd3W1y5D7EQNHtmAiQCyEDyDkdBypsQNh5J",
  "key41": "5tEHTKBuzUZ7KYy3Cev6yz2ciayMepX8hLBtroVfj36eYs5hTjwXJL8VQotRXuFGwAHDZdWtL92fCSJyjTVwgHct",
  "key42": "fqtHnC1V7rhYmH8nAsyEiLW2i6UKznWaMZZZqAtqXaoUjRi7Sbv3vomQGNkFW5rjoNgHyEajbtfq2WX6unBZQkh",
  "key43": "4G4efc6by5rvoTJfUpV39C2Jp9xBDieZoVK5Mt2FDeq8fuw3Pf8N2PJ4QLX4F5o78MnfqjqR4prQTvPiJuZ9xDiW",
  "key44": "2gvqahbBi8yt1kf5a83GAP1GWU3T13bk8Paf3eBjyxw9TjkDY85oAnPRWejgNRvegybUvQEsa6gYJGU2GjmsusHz",
  "key45": "63J7WXJbmmVubEroZWXizpSovNshQRsrDoDeDHnLeJUS1f6cxNy18KdoiKkEb5CeWWQWdDzzDTPJnUppqA9w6AEo",
  "key46": "3o5BCT8hcKMoj13u4K7oYDit6vo45PsxSsUGPHRkj2EZMwtoMqELKXxuCg58LYDZQ9MJV3MEXqAELzyj5fayWyai",
  "key47": "5rdh1SXAtr6uHU5bzYShfaGCE95U4rqvomdSREKbRvVPGHp3NkyY2PDM6QFkekhyRQdDd2e1Qe3j5ieKut5RqCx6",
  "key48": "4ENKc1NKD9Nm4iGJXMzCCLLwfV3bRpFfgKJWmg4H7jqvEBNnbRsd6Z23bF3cxG3DVmSaT8UXxaJVb9EvkpDYmqX3"
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
