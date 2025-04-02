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
    "3gk8rKJjWDeM8KAkeUKZNiscgsUvHRRf4waGLNshAVPwFLuiumy2T8okZsUeUNuzo8Q3xgEFTZGhpWnsCavX9D6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vefZqUvt91jek64M77sXyWu1sMT2U7JtFJushGUUsPgjMVoWNJjQj5MvLdvkaRJdQekNdybUKRqfQtVQ6TM3MFA",
  "key1": "4wnorfHLDipQELwWhxWGoJ8nRWVGddiEMpPD3qwMmFAg1KccYzfwQ2o72yYjejmExmQxEGBJRSPCUwcdJFFSbgpa",
  "key2": "3XfsqCc47qDbs5gdDAmTMsCH5Mny3Yr5G6WUc1pvynU2R3AyprhfgNHrQuWoqYWegwkAvfNA9xhoqUea8bepni4L",
  "key3": "3d3LkwBeTJTG132KwwKTGKrYdDs5NsYzEQKp71ybADaEzxWeNh6DeRFfCgf4FHxsLeXeqAWwqQG45C7JqCd3VaNn",
  "key4": "3qEP8CvXaA4vbpqhNsFhvW8CtXHcPnAbsdbDs1mpJ92ZzABiM5bfq9bvdXuLkaC4pJAscRfpPnpcgykePYUJioue",
  "key5": "3AqQTuTFefywh8KakEqVNpv28efxe35d2z4XG7ux2y3bSzG9a9V8L2iX1sRysHrVz2xBmdrahEsQzymx8AMoYFUs",
  "key6": "2fNisWF2qqiHLTtQnRUt35nKhJF533jX6F2cM53AsF6QXikE8L3UvtnnajzDj8rbaKNnPKk9tnkihFkstpwXhd8M",
  "key7": "25p8NJjfnjfao9KYMJvfmgDaSdNVYPiFmCRRc2jY73ScAiMphZxXBqrMcNHwyjAPn4pyjfmMEPcGuR1Tg3ABP4jE",
  "key8": "5JEzQSF2xAeXKbJCnjPmg8yPW6RQhF4NTPpGgP81rKBzxGxReLDbRqPJbBqAGN64kW3bPgCRVYZFxJyr4kRnwVYf",
  "key9": "58jhpdcqGkkJNE4zrPprymfwvHuWQXp1dKKa4Dj3tYKD43SZJmbiqwNa2US32r97jh53xDsiCCUuRWmpLaYb9FMB",
  "key10": "2VUTzYMyHP8J4NvcCGk3cgKwRQ8FLncBMtHjiQ1M2RFwYq9saEsVhS5XZCvP6o5SRGdckVKum8DEtRVSn6fGG2F8",
  "key11": "3s2Va661u893icXyLD6SRR5ULuFy1iCEaLDFd1dcS5AZF6xgapZDFBBEGHpAmzkoUbDSEp6hBYVyiDabEKJRVDUg",
  "key12": "rN3S7dhPmjkfAnsbhMgBoqaJMb9HRwKdPoVPtkpdAtBs8AMB5mWCvBT1AUg8Qq3xfjjrxFRpwxZv9uxKFKJaSQZ",
  "key13": "3SfFuz3hw6wxrR2rFXNukzGjGpYYpMLEwo8jJS9d6FL6grfpqmnFen617N2goXMfhZPGRVxPbSNTfYKcStiEorSg",
  "key14": "5i7sfCEgEDUA7nsyCFPhaDexWU8J1oBxsu8m4XctZsoHhWc1c766NfCYrDekfNGK6PyHXAMSUKr9CbarVMddQvJU",
  "key15": "4z6Vokb3JhbAfEEpjB7aj3vRpXjLsYuB2JFKL9NX5Q7sjuySjNbkMXUm5T7AG2kVv3SUiB5tLsbidvsja9mLvr2N",
  "key16": "2LhMvyWD4CS4wijJuN9MC78zk4sPXn519X9PM5nVP2PUU6iPNfAbBfnymb1MEqtojp5oB5JVaHU9HmHtAoXrgRtM",
  "key17": "65Y4VwHsJbHypmnaQznB99osrniySNt1hu73guPegjnYhn4kCUfwdTXF7wE1AkZ7CuNtHyrp6eGmoBY6YiqcVdMt",
  "key18": "3MbMv4Vs524QKZb292NC1Fy8pCmJZKnVFqpqHTA9b9EVqigPYsnfFhTXYPehAsaP14PqVqZdMAW4uVhGWD8bv2CJ",
  "key19": "rLn9fF41wVbLH56XwxzgX84LmVJoNLiT3Lo1wvDVRt9Gbcg18vEgb73nZYJ7YdsaPqMJtCVywE43zWTtCjywq19",
  "key20": "2ENEVRfHWPFbLjszVXNsaAF6shTbMGjYvxhAi7qGNAKftTPnD95aaLNshLTxZJKtFY1j3XNJm4UocWFP2AB1enAK",
  "key21": "39b9cvKFnxNZRNGmTKzPhR1RwKQWn5ZjJM5DVyPzuuSW6PY6THZ2riCwk272GX1VAeUoMD9QATwHXpjkcgE7541E",
  "key22": "4c3w8T4QV36B2zNGnAuuLY5k4ATaah4JXCxSfpP69f2o5NpMAnnAgKLYJS7J1w8cfBvNzNo5G643zSrSEsNxH1NH",
  "key23": "RMLvq2vjG8r7H6cSAfzxNmm11H3n5oi2bw22KeJ9Mrhs3VDJXk3iWMvvwgBx5D7HEQ4KVqPhcUhT47FS3fbnYdU",
  "key24": "4yUvueRdD8od3mq4Rcnf2AtXtMzCzaAUX9tW4uzpyCLA4wMYgxvAsQ38fGdQfdoo6tCFo1xbcL1KRTDyBuRhTy4b",
  "key25": "3GLnCrw9MzpZytGPQhStAJ6WY8nrjXqek2HcQZhGcmG3wTkPSzR61eiVBEyLn2Xou7UUBUBS2g8VZi8wzjNKPG2M",
  "key26": "5KsSfNDX7X8gksDpSQm9sC8Ub3qZp7eAq3e8hPMkVBXCsLtKshg6fuvbW3Puc71VJeF9Fn4k7vt59utJ54EYgUPz",
  "key27": "21ghvoM89NfCK2HozGHzkUh7c8uwXW1WwYWKSiArTTPERunF5oCKpWgN7a2XQbD4gyKNUaE82Sh8NDrXnfAtJPHK",
  "key28": "5hqfwz6rxdC4799r6jwLUW3Hju3QT4iUcr5DSfcf5K1QdeD32v5dxYX3pRR69LC8sS39DmzDfW42unnS9HK5Rk9H",
  "key29": "VLxFEDpXoaPDRW8oXMnXksTqC2DnJu6J74vwvyPS59nvAm6DThDHdpHEa2T53kWdbN3xMRAfxHw377tWcUroEd9",
  "key30": "28nvm86uoWW1L1kH4YZKs7YpMUiXwGZPvQYcjhxvP3AWC5a8nXVrfNbBxskLUKdmNtXANtyLQ5nYh51RF1jWxorZ",
  "key31": "9N99dr3c9jAaZhqWfCsNtgcgRtBAbsoHoVrvPJQJx5LEMtgXUR7A8wgt9rXsjYuXPD5Kb6c3vmEsN68hFQyhmkb",
  "key32": "3EQFMgDykMGBa33D9nSWh5cGaatDJeLCDTRqkT6J6joe7Jzo9UZhQ5kR2tggcqusAgyYRfiCPjuM7UHvSAxbDyuX",
  "key33": "3HTdnnMrL8Hsfvxj2Y4EM9bkr9zhdXojj2JGDgK85wH1EpwkpaWDYMQzuu67VLkW6sdygAcpoUgZ2HqE52QEK2jb",
  "key34": "42ct6WUUHZndKNGhymmfwMtjPDRyqChuqXbxbtWC124HkCWag9DHcH1d6FsSAqdsdr3AnC3nFUJufRVACYLUSVgU",
  "key35": "2Rpc339wVZ1BxxDyhkMrutdGWXhX3F8Y8HF6NRjgm94929hZYQJxD9rgD14bDppzzVe6mSMsmH2AL9DSmLHqRAmz",
  "key36": "59SWq2gJaTncqX3eS1RxAsPwGP4Ay9VyfFWP9jWTGjaoo5PYYqTxs7kZeXjxnqFTt238AA3ivzoHTPvHpUdr76pP",
  "key37": "9BXCnKyM1sm7arvNno8WgDbQpWphQDRPCNpkcypJHS8rVJYwbV9Y4gqeHvoCHQwCoMB2yfeUX3L568uMenbfKDP",
  "key38": "4QNsp2SnQfGKEK9igShG62Hz5sMDDVX6W4f63ftZkN7wAznnm6SayLDqKciSxAH283T9MPEknYBd1Axtm55nTNqx",
  "key39": "1kr6cWtynCJ2zutNSjPAHWSNpG8PH5bcZnH6xuzxKa3egbcCPBswr9Xfd6vH3yXDj28fgbpx6cnGEx59FnekxGs",
  "key40": "JLaaQ2eNzCFTFzyW16uQ8UfHfZELam6RA8yAuDcQUjW5oWAYwGZHoJzPqbzStEmTuLDQktZHYgcrxw3DuZdxsch",
  "key41": "tAhSNDoznKxf1FW8A7ztRr915JoQBT6kXmRrWSU73diHfYK3zJAJGrmhDYdVgpQ7E3vwPB9zwPfn2tWhwP9DVzn",
  "key42": "3AQAUc7mHEHNaFNkoTcEbMcQLmp5HGgF6uCk7L9WtqN6by3vdAcpzGSDTYwP83cmeQWjhCijNfz72NGKWgiSA7L5",
  "key43": "32f6GRcBbPhYEgBge3PKyWytqo75gcR6mEBufaFBn4X9Ewcme6Cdvxw1R4UBiqFBv2MmpLtSECLd5zdJ4mzbKjFY"
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
