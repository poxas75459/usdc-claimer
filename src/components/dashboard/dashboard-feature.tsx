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
    "4f9J2n2jgqyvG3vL4zE9Qgj4yJmW5zomoyRy3hyM2uFovtBqNmsNHEBHMiKoTfboLAqUiuPWKJcnPShE8BGRKU1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Db5FCeHZiNKVdBez2EMeXaSUCnUpPAaqYvKpQuDKkpd4tkDQaSm2Kc8wZ4GWpaG7kKWh4YcXn1YJZ1pksqrDuFw",
  "key1": "59ZHE9raRDMM5BQWuv41KaK3K6EMcN68QRxZcymZnrzFkyhzz37JyzUXxjaBaUKDoKxTe8b6LH9UbEVtWt3V3kmz",
  "key2": "3Pt5SYDJZuRSpCqAnuGYSKNQbmubKdrVCnMVxTBM7TgM47f4udEaQftE6KgXMTc5pDMcSM2SCh3KNf62ynraUuMb",
  "key3": "3H96MLXivZzRi5gb5ZC9L78hUqKKnU8cB44msRuMbY7MjsohLtMhPoMF2mQDrxYDkC1GwdjeBL8WUNWsGc1SVhqn",
  "key4": "3Ued5bW7aqd2pCZgRRiy1NfrN4jP1o9mgoLYvcTv54FZPQQ3yjyyHYC2JTmPW5mWn8rPNc7TVbPcLWhQVjrfznhb",
  "key5": "44sGb6Uv8zT8qbA3MV646scW8s6sMGtgAzNTZcsypux3GkPeTQ3WcHVbJB47KYnnZ1oLioaEFUUjCvawsaBzkTFe",
  "key6": "4daa9UizqGa5zc4MV3Gw3MQk2XoLphNCGNrw4Jn6HAhwGs3cPGJYiGJ5tsiJypmM57Y2FDLCh8JdnBTj43jatVzi",
  "key7": "62rKyTH3JVg8PGaGnBXj1y3kJBo3C4jidVTKewQG7tGguKP84Dvfg9fYBMaJf7RTVRCkugUHVSJRfzVFZ1t45W9z",
  "key8": "4csQfPsRDRc6H3UYp7AR23JwW6MQsWVhfhBhYWFL2ChFQNrGNy893WUoncXHsbg4buE59t3z6ZP1r6BqhJwkmPS5",
  "key9": "4nePBh8nBUiSqco4mSxEYU755RPF1chjKWqV8YRjDrE489SBwtVKX4RjVm6B12yd1U24gDjxPnNn6BueJhpw1rFo",
  "key10": "4uzPkVt6r4fcWt9bAWDhCbnjfUjR9T5mtjdFr4rsJfke5hoVYLcZHnZX4j6y3MWHb4JLLAJcnU9hUQde6W4vxbzv",
  "key11": "5ZvZ3oW3PtFCSgwkfR9uBboerAAb2avisKxcGvU1aSaPBigKmpm7vsFbCmkr9vEcFmcjitkjz1CbauMa4DdFgQ5D",
  "key12": "3Yx2iKpcfdRjoJdXprgsZMPqoRwuT9wedgVvui6F5jKMX21iWmjEKDVmLvFXgSBsdoEPbjAFZ7cdoNxDyRhYAuwf",
  "key13": "2nC9FhhfQuRKSWHbUHvvu7fA2mr3yoRnJ7XwxUJ1pzNaUgcEDVwqWMN4upSWy5k1SmurL9prEyDGcCt7DnYa3JVM",
  "key14": "5GZ1uH7h9UeCS8PVfEsb6omkQ43Dh6Z1w6o94uAASKpEmTzhRRHwW2wwFhUAFZvFXajd7G7ofGbPbshp8RTz412D",
  "key15": "3Z7kGdCXQVy3QZCgQTKsTd82NKtwstjomkpNyuMGewpMqk1fKP6gdsZDU9gbxbKSG1rp5DX1gnJVC9jN9YsmqMi9",
  "key16": "Ng5MhKZRmbD8cRy9knRS8KN1pDZboVH8Ms1LTVe9KWRMrgcGf1EcuozRaN6VZ9Tr83keXaNV2NXdrrrVgCxBBsu",
  "key17": "4vTsr6rP9DpHPmq3RMrygFg4rNoKXZypg1eJNQJY2ziPWAfPeAovBWCVTJQBdoybUvuVAiWyEunRbPXhRfsND9a4",
  "key18": "2QpXFTZ9VM9LmDni9ZGpj5GRyMt35xbQrJS5ypyaPa46khrHdiMHCTMpx7FBnd1LZc12arSW82dXoPBhfHZzn3Xv",
  "key19": "4SH9Nan8oeeUjLUQYniHBmBJQfnYNL77n4LwRsvYUHyQgmrd85n48KiZaQQZMLv4wF1sMBu3k5wpH4ATRMPvpMTa",
  "key20": "3gixy1VuBFxyFJo3EhcbcJj9LQVmQNrh1zLYccTHRPGsMZQVA9xYaeTPTy1doFrWMV6TpHkpaQUZne3WRe7EiSRu",
  "key21": "2YMMd5sMfDSDhotLuMCuKSBZqxt3xGq4QC3HZQAXGC1LvH76RkWQVoKrcFNU8cnHWQxRhT8aPfwvH5ejX1nHhby3",
  "key22": "bwKFJeEXKSetuSCRmNCNqEk8R18mr1tLZZMJ1oC74jPMsf84z7SmjAUmxZSGw9Use64MZKPD7FK361E9hrKxDUX",
  "key23": "5N2W5DH2FsdZfYeauBQ4UJQ5PBYG3VHfwXT9Vo7xEKvRtHFhj3uNQZTfnhAE9oTUhXf14yHLcsySpfNrgevTh7LL",
  "key24": "3AYQn3Tgt3pnFUH75jHHwFCkhHKp1dMpGhCn3g2grvLPH4gQoMFLsKJZZjpwfrGa5sH5iVDnZhEAR5dpvBCfzaPs",
  "key25": "7ioXJFf7zbSCnggm1ubrEefNPSxb8StnBH1Lm6JQN4oqu9LvD9n5Zu5t6fN2n8kZ81T4rBojZ6AzL2GaNkkvRzE",
  "key26": "4uibsqbiQ9MmXuThnhyhf5CaHW4uXYgpY6619DpHpe67xQdJvR2n8hJcGzVc4hmf1DFgScc3owHigEd7bt7FVtWY",
  "key27": "2XSBExwJFzPEEUFDLx9HCZcQ6U1bTXC93tgw8u8eEWxcfVBppJVkzw4teTqWM61NrL2STzSTWWrJnEE4SKvhj1Rx",
  "key28": "2oAfZqxQPHMJZA3uoSwFztPGpMg8QNS7L4sQWAesPkzkYDEmtsbPBvFJ8whCA2Y7RFH2mPYXv3ZWN12dYXfkggMb",
  "key29": "5ZtYk87Wfm7GMhErMuvpucNXv9Vzz8DBVtyBaP8NK8NpiLJn79cdkNhkxWaZbnw9dTiuRfzXqdx6MzbKFqXSBMWx",
  "key30": "3WYmbZB5jf2qT1W9pgwGHydhAhi63WZ5pCjPpDEkQLo7ooQ8EDCco1pcY2gb1XXicSydVQuZs1BmE72YuEXhGVa5",
  "key31": "TyJ3BA9GT19SMEw3fE27jqR65u7NAYt1TLEYKNGSdkq4SGG3pDauDQKwBWLxLpzvCpvdbBQJiowydFY83v2ZEQL",
  "key32": "3jpW9GxKf8iBcL4YRWGBVrK6JppaDrhCKjqe11LVp6G1EUTvGqavr3zqJsitQLazGYeLPh6SpPcyopaWh26mJQ6p",
  "key33": "2VQUXA9uoSPb8VuuhZQAnLB36qo5kcmhyoexd36zMQuh1sBbkvnuSbMZzzzESgyvoX3mugRTJMc51jNxrZ3vBFrm",
  "key34": "65wf7jb6yd9zwrPHLt7rs2ernxiTmHqJj3CszsTz2kyHJwEQUQDiNvAz58zvwEvhSEjYs4HEVh17g3mXPtsBtNs1",
  "key35": "4oVBAcPRnedMT1aAnRvkzHpTb5R4jtKbVpJEw3KceXqVoANBnxeqoriHgPZQaLTM2H4N7Q3cyQbioTECc9GDFcn5",
  "key36": "5srtSTf2wMQ1TEFvU7Btd8ak9M6pHFcTN82JmX9YRkNvfQZ662vtApfqwRXbe1dZj6HuaUbxkEihdmEcS4X3PjRw",
  "key37": "wFogwB1Vr1HH12mzMN8GpT1ziSN2M6XrRvfsT7xAGXExGX5pVwV38RD8ZwBNurqC5h1NS7fBUuzUqYgGuZC7pu7",
  "key38": "34VPGmberduwUoY2PkFEQCXE7BSQbmrjDpH3vrxMoDHg34CMbQ2ANxo2MWG5DB5H2RmuKHeCWora4xhpsz7oMEwo",
  "key39": "4KvLrauU24Xo9Xk6yVKN1bQpQiFZx8iwRkVKzgPJp2qVtg9u8WUztg1Gm4Ty6thmdnnkBagKnxhGRRes24dDJo1s",
  "key40": "488ibhjgW9NnjXLsKQNA4pcp36eXws9N2W4gqV2Qta5nFS8YJ2KXr8kxCY1im4Mm5krQiASK8qSyU3eSCVaGaoVG",
  "key41": "CMZbLZWQePHUkPWXAMxc3TUtpgyAkBQYp4HjEcL92mr9R7vtmvhjJ3dWrsJ8wyCraZ1KFj4MtTjUxNFDBAFDkXq",
  "key42": "5D3qayK7oZBSSEvw1RekWoDzvkiAmXdSLAvrVBHUynpS3Eby3GF9Uznr7a6psLtT1j7CN7e1fcztFEeiqST1YkAC",
  "key43": "26436BCYyL7t7V3xVXppZSf8Ywezu9R8dEEgd1tti4Eea3SowSn5qNTHkdNF1YrjhvLTFfiJpfeSfy9r3y6QbAW3",
  "key44": "2vrnQoSQAqKPM2VGMc3j2DyjrzCPDBcpyjZR4owusCKpG4BVSVcUHRrQmQjpZpW9cjSajyYVzeJRAxRaXonnU3Fp",
  "key45": "xLNFrfsT5zbHwdhJAT3B1ozt5o2Wk57z5FPCbWywWRXkur89zuD4BN1e5ykHTL9Dm219475kgN2W2ddent8THKq",
  "key46": "4Mc9DiQR1w3iSrzhvZb1rG73ks9iqU5ytLJm6DHFqKg2aeGqvvvhyDSEG5TmcPbyXscyPayRtdiTEmPRx3gNBP5H",
  "key47": "1Er6w95QUiwv29FNAQDM6AuKoQUughxpSFXTE2nwH9TALN7mkqVAonsRFey7b7r5hESLPGhWDeVJYcqGfts9WpZ",
  "key48": "VQbxqNL2ziRqy5SftNuChwEMD2YxiE77aBE1NqQr5nQCNy2FwsFYH9NgSxM42KLMGB3BBsixfL2NtXWuzznhqpN"
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
