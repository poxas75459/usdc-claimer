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
    "35WHoZdq6RbafiBNewcW3d7tW8ij4dJP96YUayvAEprup9sKspiGkopYCfw2xD7jWxwxAzj38zNd5xCs2y6E9zU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42TCfbjzxbLgUAGNvCXCoKCLBR3f7myNHiaPsEUw6jiSMg49Gg5rXX96CyqnqsEXkbdQi3DpHrLdbTPQYuw4mUqe",
  "key1": "5NuWz5HNVf6Ecwqgpx43QGjyMHYBnKwQemZAsEL9hvS32zX7ob6rQJvvtyiVhWhaaREvApxyEX7tSWi5HqGsyNdH",
  "key2": "QN32RuCgTyyVUZ8s4NtpK7bw5H4cMRjNhrzcGtfrhyW1FTaoivKuBBenvWLfWU3kp69woXnd7ZSQSWf2mBdPfPw",
  "key3": "3f61PNaEntHVjmYu7BMwTyEindgbpEV9vdZ76BF4bB9KiE4PDbwEJgKkcjCUQEbdbLzArkkzpCbFZ2UMbd1ipPYW",
  "key4": "65AfA6zg7epXTi1bksrCwQRzLcLeQzpkG88T55RRaH8hLoRTKF2ETMakzfRmtkZW6ZDrowLgYxZNsRi2Agc65Hok",
  "key5": "3psHYZuTZkpBZEsRuA4PteTMHiWMTDj5MKdnAeX18YpKAURm2JTxuHjA6RNsnJHuq2dHZd56bhcZRo44KdJpzQrp",
  "key6": "3aMt3Cae4kNfmvoyPiLuSa26EjD8cvEzFXGUSjvdfzKF4XyVtHDbocdjdstD1aGv3hAkv6TarfevWQXQTJ87cVUu",
  "key7": "2aBPVzNrczn6p4JRYZ5mDjacvcs8GCjrpYPPySRD1cGz7UurphvBEN3ExtqZWce85NWivk4A6HHztUzKyVCnDwx1",
  "key8": "2AJGsRFSFbqbC6jKBVe3jpkHZMYvZGmMqBRpfkxDQo5BXmJd4EHYTJ1z12M6dpPmBHL3wfBkkCzDkw55W5QjTCnt",
  "key9": "CaMSKmgkpvEMxcbukaWPZV9f2V9CXtV1kmM2uwU18y8oH6eFELHGsRRJRmnoHsqZGUq3c7kpgHo7TUh5oMLzpGi",
  "key10": "619fyjKRu3BsMBdNcPpizwp85xuCv6RY1q6BqCu9JU4vNzHP2HapGjSXVPiKgeystSRNHrj7Pg1cnQhdJa37pYTB",
  "key11": "4fCAQJZDko8LTU4Sz5QhCCAHkGTyFp1BN17mWhqvT4ngUQJxqdoMfpF9MQvhS3CzU9Gtkn9myLky3EnK4sY5hYrk",
  "key12": "3gBjHQZJtACkKHvJtqAg3UATuJAgWpNm98emyEDrMsgLDmvzbEnJqm7LbG9xc8rSb2oKX72D85w4vzaU6F6J8saG",
  "key13": "3HMs6pASvgsHQifNagKnWBjBzmW4BpW9c92ziq3MedzHjPuMi1kmoHCAhEdgRfou748omnFkqjRUasNkRugL9ZD6",
  "key14": "2CPkeqPoJdMzDL7gKDLADLPGwjTE4AC5oECoieN3wWr3VyXexSnjywc9DEieMyCHpUFSXYzSUecvgRWfhPB9sd5M",
  "key15": "5BZ4zfZfSXwJQ3sXox73Jk31m7fqked4xvWPPWx86vADQXz7nZVKLWxzg7H5qmCxc2owE3sp3oad6dLgNKhxQp3i",
  "key16": "5rcKjfEbM7PM7GmTbnNbhBsskLRxQ1M9mwzGEFgR2nToe1difrfe434oxgmKs59YLHrgEBeYhFrozcPcpZ7xCLLD",
  "key17": "5VV2vV2ne34y4z4AsWkU7W9QtZogGRxUaoze5dsfptpXzbmsoQUxkxEaxp469BLSEbMhrr422XD2ivtCDJ11gK89",
  "key18": "4YpFbWBseaDahLFG5WYQUKoFmEhvsFge2d9ANQhkxatrEGZAGkqyPpKYe52h6nbk4asXRW89VEjbVsFJ12LMfhao",
  "key19": "61zchxqyyFiHpH1LBbzsCoC1Fjbd9UeRPH3v51UBpJrDmmapEiBNUxqZ9XHAT9UKzaVnJXNSCkabLY3r1JN3U2gV",
  "key20": "5cdwS1sDiyF7N8PCwWNgyHGTSDrLyZjWezH2YMnh95UwDeF8YkwmdmztXVFDECY7wJz2BzFAfVDZANPM1K8EhAAT",
  "key21": "5yCWP6xiGh4dmzVqEJSSvDwHTBR5V7Ew6tmxdzLhTnYw7pqca1dyUiumyLDbpUyAtRgpTfjfnCw3CPpUTQQ3dt91",
  "key22": "3ZS8F6jC8HaqyypV3Gxh9TQZgqbVRjXN7kaArzCq2Xp4xLY4hdVWpywFEHT1wT4YS1fjgKFtuNjm97SaZ3Jse59K",
  "key23": "frJFWmfq5esDutTjRRD6GqRGjbCkFDsuFSZcVXxArd7MfCeYzEStKCbaCHdT9NBVKyqd5E7gtmURNK8caSMcpgx",
  "key24": "5bU9Lk4k5D2n1Zf4hx65Uey9xKgRy5gRtf4zFUposCmLXfoubXgRVMbcSJ1ELrPZgn9kLgZEjYPNE3apwVZKJoFk",
  "key25": "2vJRo7Pb9Zkv2Pec8LttwSGjJt2ZPLUSWpN6ZqAbHdtfQWodeJo77MXA5EthZ5Tdk6PXKTuE8rmHPHUHZabrsBk9",
  "key26": "A5bfPX1pp7EnBCn6zA5Y9sfPiUvNT1TwwJ53dS76HuLcdhDJFXPJzTCn9HykMaZ8LboFV45GiZf2gQr2X6PB83Q",
  "key27": "4RCVgTgWKL7HFNGqYvucusHTVLZqXNMzMWryrjjY1xqjgLRMTcVaRxD3VGY8FfvStf783QRrv7Hq8EzS6XbDc4uD",
  "key28": "5EJBRE1kqhPNLVwMogaNKSv6onLrpfgaoLWg8XPZCf1zvqfgqpftQT5gierj4X9DY1oeX8iUfyUyRJpxJeuUMqhT",
  "key29": "37TEeZxFaiBDzroSh84XiC9neAZwfcE4CqRwDytrEgJ8TZrVfKvVqqPFY9aWsFHWimF8e34EFqT4K3KTPqHmNV1B",
  "key30": "4cyHuEJ5ejWsBUvUEjdiMSmzYuMzs9DvaBMFkkPhMESN4UNPEJjJ9PTGkFg4i42fMwQFghcacJU9gSZuvKMo7B4P",
  "key31": "WxyabkjxZQEErh3h5MVcbZRoa7Ekxz3goaeTqFMFHcKvdHu4A1dES4hthwkkLmXA4QnzuU2UK6MnL1ckvQFMwb5",
  "key32": "5hXmoWoUxwF5RbSyLBScJMoNbHwuP1AaP2csMhTDNFQ3xEQe8b3iqzQHHamkroLPDohL2CrEscnMZjqtbkhs4gvh",
  "key33": "3pDE9nis22e58eTEqYSvKS6wJPuNsCwZQ3DvvhJnKKaLDRyN2HUSaU1U4vU2f5TcJAYCkGJLxVX88CznjtrBv9Jh",
  "key34": "2FSUDcY6ig2S861tM1eimmKJnEUKDtBL7JZWW4M6t2vFW6H9bfLH3xySNq36L1Xf1VEwQfMiH9scfLUoTiu5iGkR",
  "key35": "4CWaCMexzvW6mZLaWGZTvgqiBatHHGmxkZZUNt3U2jaLrg5hkYyhvDjmLo8fdWeGTPHXdf3StkzmeMWu6hkzCB5g",
  "key36": "41a3CuykXB7D6zdw291cX1swUNpumxfaDRJnpS2d8jB8PBFH7RWm2ew55raHubTk8gnYKqR7wV4v82hswxyTRbLA",
  "key37": "iHeQEN3wpkEWi6A1XE5QuR9nHLxH16hrzjh2eumBhVDUHvfBR1iB7ivkuTjrpkDQ63NyP8Li5uJxBYu5Z6sHEVx",
  "key38": "3iLnx6Ss7tV5TKavTRUYFPKJHwJJJAsv7Vu41TJhuhdxXFB5CTuqKkMaYnZUwhxYjHzxDGcZjjKPQtjvJ3d3oGM8",
  "key39": "FjkPyQHKt6pzWMRyLiHijWPKuNhrRUceYmtF8iNBdXd5D56qRRygecDev5gkoZ7TJbNnbT3ezKyXyPne8oHpLJR",
  "key40": "2QgXLfY5rhgMcAgSWF5TY5VXuaMfii8DMkV4B8mLDd8KceUz964gQwEyuuSEWzox4nSj8i1ynnAUHp1SLocao3WF",
  "key41": "kbHMVM3p4QnYz1Psxm7D6q3GwykcemJjb53GsYQ1NGRdcvQabCPBkwcG19svT44TFeWzguAZe9pTg8fBNC3ysEn",
  "key42": "2gJn4sEU9TVw9n6NiKecoFzvGVYmxU4L7TzS6q93RR5XGjJ2PBaLKeoUHqzxBRSgoMj4L9r9ugYQXQD16zXf9Uod",
  "key43": "HWLHy8QkJRGUJdhwc58ba1FPjtURdxpKCKvNBpPMqZVTDDwFzGbrsKMTLvo9HysbReYot8CtSGFDK1J33Zq97Aw",
  "key44": "cNrkQcGc823EdXQJDmcs5ojAKwGBqQSUUm9Z8LF35yRbF2ivVQxVZEtm5SV7wQTphnJ7kJmPjp93TZgmDnr23as",
  "key45": "5nSNZbMFNtkq8sBfGZbN4AxQrgrMxwgJbq8FRd83PXGD3xNUxWBtWsRRbbZaug9aVgFFDfFVAVA7g276ERgTHoQR",
  "key46": "Lq2y6prYCqEqDz9cNkKgThBu7pVXEcpfWKd2dyfcZrjDASTbRH1mEjrPLNSfC7KekY3X1WYzZ8ytG2fF3gNpy4G",
  "key47": "2AfagdwNThzHUN9fmR6nMLUjWUQmzQJfpSPmJtnM4WEfVj95YaPbzvTiy9M5x6d5cQAAdKCrT8hiYnqpUZZKKQM1"
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
