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
    "345G8Xggf2RYwpyzkMHv9BJ5z7TDeTProkh26dmYEkzW15GvU1iaCrkSx4K5TWR4rb1zsw5YzUwnQ2nFCdYTJQEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oWwqxHtFshf5xWCgS2pnsRaN3ufkcTcJQT5QYyAZaCSyuMsZ8L82Hp4ScyrJtAzwzFJEzmZn9g4xQe857YPEvWi",
  "key1": "4oUDznPCb82iTSMuVHDReCHdUu2mYQWTWRCPjBuVTU5c7jTASdYSFYDV6KwYbyHv3ZRYb45pzEY74BWVLBmnvmvD",
  "key2": "3f3TdY2ChRE9673fwpTgPBUGfHAL5Q6Bg1CQuVxUTwYkRAXPbotFwp86XjwWaqgam5vaz6jvQjSNSa6TrHqUoNMn",
  "key3": "2gzewmqh7Ze6Wwbmm2JZ3mfbZGGao58VUztrow4KigUcaoxLr7CnfgVXAs5woRCSVvk46kxtVLk1NhrAC49uqHNU",
  "key4": "2r5RfvEQS6xw5Eoef5BU5RGJukNQqkc8cQUqMCuFVXzZuZn2DmnSTrx8ZvbxR6DYjY5NKhQYhJpFHYTFbfGULSz7",
  "key5": "NbZ1k1MKWo62FaAAozbkXmUE7M3ch61syAEgLKTCfzdLosvsHg3dLidduFoGAJuQtoE4We8mdP5ep6sGzzBbSov",
  "key6": "2KQ5CNABgDMLrYfagW5UDLnGzx2ViS53oUFwATivbzqTA6oZtp8hgPNFgwGqoUWv7kXfMbKb48buENfkDPMQYSrq",
  "key7": "Aq2sJdmkYUkgGKR6uGTjXiRg6ZszmaR97qB3CRSyQgyaoPYtihc2r5xcit8awxcxSEFrV8GzxggjEHCNFsaiKKD",
  "key8": "3VrVDQuS3rVvotBWVbqucKHBYFPomjw6B4peXN67NspjMSkFCQmGrWTJqrRH9z6k8PbJBzEP1d56829QQxZSGB8b",
  "key9": "5r5ecw1WLK5unUamWivwQnyHvVtHbyjPvM2D1qEw5tbNEsKJcw1KZtEQvMSdRxUyetQsFgJCxaHpy4A7Lx7pKztw",
  "key10": "y5vfvQGTpQxiCfcj78CrqqWFB4uSzR8Ls4ad5DKXT14fnBGbpMdHbfM23stamGD5q4qKDfQsAJd6bkNUtnuhF8A",
  "key11": "3GgvMQPHKFihB9imYi4caWUbgTkM8RRGnnEfNiL1WDQF283KJT6e2qCdnGNb9KjrdzF9FwHjuF1qGai6YugAZR4h",
  "key12": "4RALPKkEvAGCD9fcrNLKyqsPgYFkHcKo1iYFBhLoo9E97DiBJSP88ZGCjTZTSBLCPbn7ufaDkXxuBHUxmqc3593p",
  "key13": "3xG63r3h8ELke5v6YMXcrKFrtHVfd3xN4FSVgH8DnJah2HPgZyowirw5PScXXRoUZgjkN8nrWU2UbrkoPdf4vQtT",
  "key14": "jhBbELdw8BRGMpMSz8Nbq3GZhZfaLRs7KZnW9ftMyWL311eBkSJaqKYFnSaSYrRcxkyu89kqtcGc78BYbsrer6Y",
  "key15": "vyhtU1QSzj7VnobsNE7ywB4WCdKRZ2TT83Q8vKLmnbHNxeoi4rCi1kwGbNAAybXsTEWQof2v2W5b24tquerNUvF",
  "key16": "3rKbsqSfJztvTE6AamU6Z6UzjojBYSaArT8ZNSHGppH15Z1UwQFzh15hV2jrp1YmXaqaU8B7smw5oCGMMngxVXkt",
  "key17": "26X9yQLqPokgnkoZDV8pdgTwbwmX6K4Q7VYqGkChHpwf1xZrM3TddL2dmF1HZAXWfpE26SjyBTbTo1dHBRMbMPE5",
  "key18": "3TqGrEAuoWHEzZpcsjYKi3nwMG5QbB9y7bKM8V8Uhnt3BQTZVD8oQXuBrMgaQ73k94jMWp57io19K68YuXSfpBZD",
  "key19": "WAxb5aeJvzbw4QhLFLe9NZgaNeKq6srPDd5WshZHocedZpv3EZhXQKwN8RQ4qxt8a5TWyqFgSx61wbV5t2ej3QQ",
  "key20": "2mXHA6mN5svqWfoxJ58EeAUPy7Q21ZDbWhbAPs3q8RbRMCm4gwmh9S9LvUd6Em528ZGYWB14GMD9zuHx4QjHnCPY",
  "key21": "4HUL1BvAsF6jYkvbbZcz3uS6jDS97ZUXB31hVeAK75J73hKgk8XADE2VXdTCdfvhEZqoCJYDDHCSyvsVFMEe1SEK",
  "key22": "47u4obeoyoW76n2zCrEwoBmGUkHaCaUwRwuuJE19t4Xxy8YQTvBVnyCAUtKULUsoKXBCQ4uAmHbVTbLMzhecnvxh",
  "key23": "2afPeYHt7au4z6ctpPXwfEPAXzGKpB9QfNW9Mx5TFmYHCs3YoyYjjh3LvX2RvPo5YEVhvqvbquLVFRk3keQv69FJ",
  "key24": "2YAv8HVd7kyqL6gpP85AFzJWA5to8kHQoxaqhtaVUmSLozUtGBNF6TdiRhDG4siTF7i5xaESBekV5xkRucaonMPH",
  "key25": "5F42NPVnBQ15C9Jb3ytQ3DYH329gLkjrd1nN3SRBp7xiemGi5aSKGEcYf52cXUB2tYCDydVFupVFMC9Prg96eDhy",
  "key26": "5sQ6EK9jbkdPzk95EcBqaD9KX4vFZbkp1AESr1PryBzHSPtPLR5n9nebHMDE4F6ZojWTqjEZSKxr3K31gSbzeJVL",
  "key27": "5RCs81NSajx4k8YhDyGVpV5rbwgTHbiHFrByH2SbAwAa1e1FZs2D2x4FMns63t3uvYqR5Riayo2bpkszUZn8AZWv",
  "key28": "dxds4x1XEkYTTzb2oCYjKVfkRfCQiHkdqmTpVeddxC2r9eNtTi3msDDToUF2mqa5EmivDWCybgSUpaNcgKKJ4fe",
  "key29": "4evLREZ255CtsFDsjZ6L9enEkjXSNXpqZEJKaHwQFNiuhgRE4vyFTPAr26CPrzrfwFexrr1vQSfSLq6XroJAG3PF",
  "key30": "35fRTSFUVzxquGKQVfSAP43Bmha7Be1i2JYx4NrFVsJ1cLgSHXiWUjkreghwDLfTgHtWoqdcr5wekvpWGkHuF68r",
  "key31": "55ZS1pgMX5qBvKvkNAWZ34DGvkdLUKzyKwGEv4RjZTyxvzh6AdaRYb4DoB8okXW6WFWqbPF7754EfJ6QtLMUgzYZ",
  "key32": "42etCURJaSrz7YZu3vQALwNgNJfDU3VtmRFky7gQxDFffwkiJpKTxrfQaWM4dS59zf7ySeiV2gmft6svmEzA45AZ",
  "key33": "3gT9CZ6fcvxumxr4ia5kemo91ke2cfp84qoeUJLpApymJFErv6o24wXBahfCUWrxh5C7XbnP48b6tvdC8AwNqMrf",
  "key34": "5DHL7Purx6zA3DijBBzTN3BBq2bkDnrKGKHipNdvZeD96adPZvyo4v257tFNw8FiBw3c3rLHqZeuKbhD5ShJK8tR",
  "key35": "h7U8J5SVjU89SdJCswWsoNWuqLsVFik5GHnpewkmCFpmkzyziRiu3ezSboVBwtmHpHr38BePSC83XLdsspSG3Nd",
  "key36": "4HURMaeaSiWhrjmKsQ1MXWMbXFhKE9bxCy43Hz2aR4chhU8KFnTXWR6BFmPWaAkWAxbFQTpLVpanYWE3ob12yGJ7",
  "key37": "4bxW8E7BdB2SDZGSdU5JtFzwazQFWLJsYbFDVCcL7tRNSPsSFn36Bfcp2DgfRnjR2zEeQoJMfK5GQ9jr8jf2ZAWp",
  "key38": "gSmLpJQSTLcz9PRcHoTJ3sfVft2CJAP7q38iPWeSrBzAYrKk2RMrBGWLds5EkZSjcmsnxseFY7wNxGM7KmtVL59",
  "key39": "24d8XiRU4XdpTogtJmsKZBSqzNbStxpSRVNrbGyXLV7LutoSssaXevmB3fM6vdSTvbxYrx62f47vdeE3AVwUmCCT",
  "key40": "6qKFirZRHxGJuKeoSBdPC14hK2MFSx5fMs2M6q5dJaB5z27CjfmdrM3yius7Q9FhxAazhMdewcjHZ9oZhCyYcBn",
  "key41": "Q9rMjRdPJKoGJxFfUfXPRLBQFiejYb2jxCZitFqVGeqysS4c3rMHkrwnCwuCjQF2MUjWkbw7DR672rshetf4z64",
  "key42": "3ir38n7dCq6jEA94UaB5rWGDUihix45BT9PyZrbXNu3ywYZx3tBc2mfYdroVshQNUHuTfr6bksGVa7BPGQV8fy5x",
  "key43": "4DJpuYeRhkg7HniNV5nNJNpmPe6AMC1b1GK1qEPzgbQznMkJo8s6dTBdJWJrfCbtkX6mMcLJnnzmzHjeAcQ7pgWx",
  "key44": "3Xrx3UHNUiR3BX6oYorMBReJdtKZMrJViKw4isnW77ToUp3ZSEQVTif9wWtYH3YTd5UjNzJCdMTbszVWXb5HCcvt",
  "key45": "3ZWfcGWJ8HJqctcUqLv2sBxxPdZrqjaY5hCCi864Q2eRDqBSdw86QPeV5pKeGvVYRs8EMTeSCp5WWTWyFx5RdPQh",
  "key46": "457ZpZeugNSNC7SqzNjeRsc8ic7Gn1zXpHcDrwb1baNqeEJDrpxtjtzRdD6jB6fsR2zfNPJ3yLZS7yXgUAUgHuvG",
  "key47": "3rLBUSayUineruhhgzDQZR7zPiKNXzwzX8zEWnmXR4f12GNZvqfcmGqSiQ1pVtrdRb457S79yLiEjdmbK1VXWdEX"
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
