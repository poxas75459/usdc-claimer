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
    "4zYkMgTScHtAbEC5TCccNYbC3uttYZyVuGjKjPh2p2CxY1KfonHh5b8NeVkCrmm2eksTR97sdZPvY9Nm6ME4ymGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BxoHR6ieJVZE5v1WsVnGyur3dzbTsBw6Ekqt2hvFz54D6Hmbz2yc3iPvevUjXaaHTd3kTCYdpzz9EdESmUGnxqk",
  "key1": "3fWEY9n47USX1Lonk16Vh1neuTisg4MCRE3XHYxxhY7sFrgL4zKKzprR7twaVVZgDMCEYVdPL3ejV2o1PQdrnN98",
  "key2": "664SP2QSVUn9exPkUCxkMcmmCcme1xQ2GNJnUYLA8kodwuF7arqomouyiHPnPfKujEaL2uiTcXe3t6k2TPnHkpKH",
  "key3": "55RLPXfmkeSpRhrKiPtJCUg1dnk38JFVRwifSp4UJecsqfW1dAcenor4DBfBuCcABuCujN1fGqBtRwReJ8CPxTxo",
  "key4": "2Smvhg8gQbGGHSFYrGbUKLgneAygYPCDb8p8tbhqiy6qAQYoQTyZRs3zqLTgHDURHW823iQgG1mhu7eJ6D8kTHP7",
  "key5": "4TtvaXpKBjmPHZhem6Fbqx96pfJPW2d7JyL7pAywzXmNUkgrEHrYdXfv3TMDpDQre1rN3B133SR1QVCb89H1kYfE",
  "key6": "wzSPFnTLSc8C8mD1vpAwo2R746k5D64P1d6kF6EpcKFPCfHzxgdFVJnYXAsTUZ1QLq1FqwUqADPcLW4SzJkUm6x",
  "key7": "3E36X2PEcjtu4XqPL2mgjS6SbLqstp1757E4GZDyXJogLEzPPSBRYyXqBj8ZW4UwnnJfC9mzFAt6SbtoZofyCr6c",
  "key8": "3zTPPNd69h1QhHdp4NCUGUSFaifSv8hiGn2dYzCeadgLFJv6nNBs94dm8p9eAJf2vwc1UskF8bThfZnLRA664fQ8",
  "key9": "3JNqU8FUR6neP3Hkkqwg7BTzq33un2CJr9pRwa6MxVZaCwo8o9wgD76rSYfyWbhmyUHhSqRyKvTwV39MsntQXa6Y",
  "key10": "2GBm4DgpCRUdwVQvtqyZ43NTFUgCMZychEzxKRAgt3Aa48KZvEV62yyQgu5HHiRcJVGtt1L3ZXLh7WZDpC1eBhjB",
  "key11": "4i8tqDdDxA2jB7z4odNYKbEUVHqFKByKXB9pLFCLDXGhWJ27UPYnkoDc8ju7G3gkPUyLaLYp1wsJEdRiUt5ATPzN",
  "key12": "5z2ExHMUaAXH5g9T55tMnpEsiHUtCHoWWDhMsyCptGUAkBfAqyDR4o3pLFsMUxei1shTPEF7yHG75EtXpE5PPP6j",
  "key13": "61ood5EpUeVLbsrbr6fc86cgjphNGfS2E6PBaAkmXuycZc5CfSQXXMG2HyKVgrqsaPMDMXjKzxE2c7zkp6swf39E",
  "key14": "hxeL2wzufC2GSWuyf4Zkreqjz7VZpQzzd32o9veH1TgSrYuugLtQERMrEx591hAmTUbxTmVeisXe8Kj1DhUbmXb",
  "key15": "3xLGrTEzCLXegeFjiWfCaq7F9UH2J9TgLHypfwA9AGTpKGpx3cgAruobNDo5GZBJ8vL2D4BK1bmX293g4LwjHFXP",
  "key16": "K2YxVVJ4DWv1Q3xs7bxvkQrCMbS2kJmC9w9BgweceUUTf2BZimHeYoTAFNA1JHdKAuJh8cbkceRK4SupXFaQqdE",
  "key17": "5z6YcdvbgiUiajiGB9Fv9X115JKi1TwEygx79G6mGBmV1irfc7bp5ZEYECDqc5T9fqFZ2Uwo9xBNgVv6eLVgK7Bj",
  "key18": "3RPWi9niA1Uzouf8WsuB43GPvZMWptcLeYMJWBE2cNbMbQneULj5j9KhvAPebAbQG15noxp8st9uoHJakZePESDC",
  "key19": "LgdhR11Vym55ApcLuzhnvFM5DMwzMfNwyXZ5Suu5x6CK9GkRiWYa6pm4piu4Cp4NwqkKa8bHjNkcunVpm3y7gqu",
  "key20": "2HRbLC8xETRZu6LiQPpWMr9RRjKmkGA345b1exYgA5zgAyNkKLUEkT4D9tb7RfWWCWf6aKGMbHspD9VYNjt7bbTv",
  "key21": "62bKc9cDCcKdcVnas7hS98VuEbbMRax7WC5oAJJoDs2QNFaqmWdcnPEJu5Ejn1TBx5eoCe5KNGU3NwUihxwV8SGy",
  "key22": "353ZcNTBGWgm3y5MP2NvNDa3ZFzEQWfjspDdtcrKSEYnVua2XF57xHvYCmPNKSkWsAACSAHYcvr7Jqy8rBmdTaf5",
  "key23": "3iJB3AoLNrmppRNTrZ5PYpqVdE3vayCrmE7KKhSPSM4zNCYoRV9KVFeun3p81Aze5nA1WeSn5p2i1tbZYC9bjAxA",
  "key24": "5aLoLdyPY1LaNHDiyvBksL7QminqVyZNXUXKEkakHAhvP4m9mbVaHjhBUFPULswYpyU44gtPX61ia6Zap2MU9uQ1",
  "key25": "35AvvU24F177K37zjAzisfZC3rQzmBMzDpiyHn6sfC3EVxb2Hc9TwhneZBGsufUjDD3vY7cf7KryWGiyA3CoAM96",
  "key26": "w3jgRZDr26hhgxEG1LKE3VZURDvRTGu7tvags9jv6Uxfq3yzJGvXLVFnxcMv6VnLQWyLuuf8tTcv43YKjsbpDKr",
  "key27": "32pgT16yjjRBsYAhkDH5tokSztRdfKp18piGnQdX2pdM4VSpNAsXwyBadMBJXFt4K7Tb12G5Dh3rJhGhgC8wM2Fv",
  "key28": "4tAs19nMT3infMe3pZEkHEhmFbQywVEm5YmhfBhjp9XHipTd4NDKztetUD2JM9NidM6LVsxZz6vGVHbjFfctgnic",
  "key29": "4dVRzfy93qN1fJWCXN5MbXz8Sm753bYx15cpzaQ21sv8qXzP6LU5EzWQfP959Vad2zi4M5LyP9otH1T17JBGqtUN",
  "key30": "3x6NMQuDpH1K3X8CqbvsWSfpZSMTibgfPhUF9Z1cNbHxUCAMHTUQgtXGf5iwutmHnnnPacVj3UbhCTzXqgJxvnGZ",
  "key31": "HLTY9vJdUqWfVkwsbeJdqNgJ4MeKZNtWtT28qqWw7VHybqYrVjnH5Khiin6G1HU6qdaM2KnozQEY5JLBK9Gtq6t",
  "key32": "2kNHTFy9Ax7e3kPNX7LqBGvpDsWeQjdn99iqPWXJvS8Y7inhnzfHyKhNixAm8s98h5TXLXohPrS4rHUHt3Kf6uQv",
  "key33": "4WPBrTiB7pmjy9BQZiNCdbirY8XsXLFKgFhcJW3trtSspfK3UwM4RfVpvkV1n4ChwPgJ2YnbmdbMgmXGUKUx1gvi",
  "key34": "3LNCfVmaeVUXyMdtQYshyRwW5VLNzyopUJKbq26kJDAmH2uB6dXfhiBihYWktmoahgdArvv1cjeuz2VHiaRuBU85",
  "key35": "2rEQmLc8NXZyDrNv1kudxn6QfHXRAy6pELmtuj9mfnAVnef1NNaTnt3WrLhMFJLhqiJwGSnFdBaYmUN8SaMEWfnN",
  "key36": "45h6yS6eimjVBHha3RvMmDeEarpAC8o9zGjHtbRxb9dJC2LPkg5uCT3jWgFbEUt69coCDPr37LEmBgTgw3o7ewPs",
  "key37": "3nYuhACLX1XApE2dASYDjRCeyHPnBdSXNWPW8AeLUqSwZDavVRfGZQU4W99e2mgxjSxhXkY2ERV1iNiu4iGV6Dt5",
  "key38": "5pE4KGN5TRprT4Tx3qxNSRiUaQc5otWnihR1Ta7mWaxtVgia5VNGMNW17Ct1uccCLr8oZGuWFiUf2yHZcdMz2LYt",
  "key39": "62XoFSXXUKYAXSPGg9qKRoaSGAsrChQccybQKpcayVfHuvuCRpod6bzd6oGpUAXKCQoxmjSJ9gkdF3SDSyTPd51N",
  "key40": "61n8qo5oFpY2CFjfcTP25b9fhRhq6sgCUuMw4wE62fscYe92UfUJUjvfAH1juigZRX1BqmQTrYuWu86sCXFNcbxV",
  "key41": "2faYJpHTn9ejc8kqTbQ71xH1bB7YSfJVRzP9UtknkyHTtjcrpf16c5kUsH6hA8oSQUxyopiqLVk39ASYtF7BgQXt",
  "key42": "2YEHvkTp9izAr3mGGkcpNUCVPmvSmCjwxE9CVF6EbVF2SWRXBYzcVY7HhBKWek26yWPPNm9Lhe4YrA9VcUhzxHou"
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
