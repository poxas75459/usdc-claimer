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
    "5jxgC5etuEVEd4L5ogP8rzPGUG8bo4HaoBGQhxcb8iZQ7j1MeRTbfon8k4NTKwJPSgX49u9HNVLiJ9KoLpWU2UYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JdYh6QJpTKpTwuYNE2MCvNDGfo6CheFgL1MeWH16wCy4i2goHeo3XMC5ijtajGi94k65xM2Jmmp3M8cvqaDGsYP",
  "key1": "4n9MeYVok8rsgmBK7B9UfNyT6XSbr4c3hVZbuADsV6rGpYP3Kg5tvFX4dhCxr7xURKPBbAoxkG3WsKD5ZW4oAgut",
  "key2": "4HKikVt8tzkxM9FG4UaiSvKAXeRujcCAT65spEqe1QEnyfhcSVshKShmc94hCR857inhzhapkVhtNGKVQbrtQK8d",
  "key3": "2ZzPU6vnbmhT1WGP6k9qUHx5BXTTncAw8Gj1TsA5JjkXMYwgn1tBL54gqUekggqujZLiQXiBEeBV353cNBXbVncM",
  "key4": "3Hirhu3i7P5BdgebYhxS2zKHyUm1SSnJacKwCnSgGLsnaaMtdfd53iukTczEeJQ95QuuYhCru8vVV7a7JC8r55c6",
  "key5": "5yRF8n21nTgyvppkpNYmebx8DC8LYrLsCJX9oQupZhwqx8YfsYbt3K5ZV1tfaHLgTH7na4JPxhmuoeeDJifnBjWP",
  "key6": "5qeTWiHde9msy25bkvFrp1uD3qE6ZHtWkzCW2foKWqNrPFZ4HjnAFjWoKFhPkB3tuXsRPc4jRnKE8dwTfLbe2vPx",
  "key7": "3msS3z9AnotmYF4ptcZKgy8mk7eKTSbtizSzKXy5Sj4T3KqTSSDfnSpbqP7WcxVYdNxEWmnwYxQJYU6X4WueSCa1",
  "key8": "4iY51UBjzAUNKbuRiDH39ayBNBjoQmKGYEBWVaTRTcB3TGqqHSNdymRSKtf2TQELjeb5TJ7UgYj23HooSWPeJrja",
  "key9": "3BKwZBAqBHX6ZWoNrayLivygAKwxbB8RmfV6jkyXmVbQPjRwm2522YfxsBG9Z2mNrqcaBDobtSCoHY7yAvvHKZz5",
  "key10": "sBjz6suiqk6ERhhovs8gK8vb6XNEfYyEg78VVGyab3DafsRZiiTMFL5CRbdeM5ioDt735RFosae2G55jKi2Ra6E",
  "key11": "4k5KPHREMBNax6yBKaiGNwoykoMhQLR9Jh6QApv2iJs3Xm5wQ9A78HF6h5ZHNUmC4Z6qHubMmXYMsyEaJTNjW31S",
  "key12": "3puKLrSZXbSJMESJqh6GQ7Wn7984hwdQW9RSfT2KoGB7dGibS4WANi4QudpkwwRMFKpzL1nLpVrP5QFEN2b3rSWm",
  "key13": "3yWBBUTHoGbe3DXXsFX14A4ocqqrFQd4ziBWSZhppBvmv2aW8Np9Ef3E6v31E7Dc2pTqc7hN4HKWQdA5M3XykZZn",
  "key14": "4DeMMEqcTYBCZwmaxUL3FQ94Vh5qzVLWDrKDwR9ufgmQGWsHYAwZTgzdssE4HVrvB4PeuLYZ11iqQEVxbFKT19cf",
  "key15": "392MZsYxj7XxKbqcjCVyrNR4GHLHYS3pV5mWsa6KdJmuGi9iBcvLqzxCqkQPUugBA21khJdLBKGs2byL2itePzNM",
  "key16": "39RA8uaHL7pKdoZnfC6evoe9pZtvhkKkQmtWqHEAnzC3eou4gTz9Uv4J5MmbB9vpT7nHM527nR8Mnc9t7Af8KaEy",
  "key17": "5G4DWvwm7jbGNfe3PxKR3ZhvswvwB756MdyZwCYKhMmtfDXVY1tqUfEfLVCV3TLf9xB816dsFiNbjNGk61ydrJHc",
  "key18": "3Now5S2cD1TT3ijvk3RiWhLcXTp6NsuBCFdXGf4XoGqjariLatgTUQxRZQT2ZabtWMc5vBrYbjexHrHPd74Z49Ej",
  "key19": "3F2rxRKQVKaG6eJMLvvMu8Mf2KNG7bcAAKypoVn3NEqGzNhMraJ5PytQ7QwR2sBK25VH8MgdE7N63eWxb9yaQubK",
  "key20": "5yW8DNXRMhPrp3hpEC6QyFFSAULdKHZdS9XQpQWFsHp3QAbWqqnURCFL2Vy1RP7C5prcW9dh2coEQB1sLzFwp4jP",
  "key21": "42KVP1yZqRuGSN2bidqmgzSMNcNsnbBko7WmHAEusB7YDKUrb9ft4xmVEHbin9urqCtoqC4V5vU3VkWxNue71izQ",
  "key22": "4XUshmWuYukECmZMbGv3XrUcjxFLj8ej1wrJanA95qqcTabY3GSmBNKbvXKXB1PP8qjYK61XssECnhN9cgjgiG3L",
  "key23": "4AzDYq3xjEiCZM7LmEUPpQUGnsY4CHMSXz1e73CgRtMkzK1DMHWs4q3cdQd3LdizhoxWwDLfHWAwvF4Yu5CvkXSJ",
  "key24": "cRNjaaUsxtyBmsyi9EmDB7Lz91PRy2s66YEBfZJKPfy4mDqW4Zsd2kmKVmhXfabmR9MRPTtQZvxfTNcnwZcgGHN",
  "key25": "Kpj8EKHJWysmutD18jXkJqAgCqrKEG7Vhe5c2YK7PJGYYaW745jLeLYRHDq7aiv2X92z92XEcn73QacDFaLWTMv",
  "key26": "C8ucqpoMzQzXE8tnmHCKHEuvCiZkkLfjSvpgFG3m6c9SigGsqpjga8KN4XzVt9VX8ev3nswQdLVZZQVN5ozfyW3",
  "key27": "28NjEQMZDz9x4L4FtLqwcUodDi4KAgMowHGuWeKduxwXThUSmMVsaa1dVJV5YSb6MxMjTKgHeX2js3vjW54whnYC",
  "key28": "FYEPffeT3JHEekeEoUAEV1EC4vP3isSFYP72mrrcpByoVVkQUvmeVBEDr9Kzy8b2E8VMax2CkAxksENfGYLZqs1",
  "key29": "377tCkRVzAajr4nA4fwwbtvQxkXjB7yS7DKMMcU39hkYMQ9uMEfNbeZKNKG167efDz1Fc1VZAU5dhKxBmscu81n7",
  "key30": "22tjRiTCBFDgwA67XEcxHHcE7Udkr25awfgZq1scisiq5PmqTEVzHf4ACsnaHuQELz9HCzmg7oeW4KTizF5EuGfM",
  "key31": "YryiqS7d4Yigtwjfr5LsD8yVsh3tDs4CC4c5CrW3qYryYUrNKPxwZJ4hmvU3xGLZzkJ3cCjcbpngpzzQFYwbAt6",
  "key32": "4V1GKXEacuoiWFKDKX5YrPQUV7hWjzj6oibz1Ke7K64TRiCzzoRs2QJqvcNtJ4eTCuKbQEYum7Uv1oXZxfdnVntL",
  "key33": "4nCPFAwNLjeFUznJxEDui1qDd2Kz3hQL9CrRxMqC2FnHVygqVukwVvtqRRAtpkSDzt2DhR1j9byXKfzWWDhr7sD8",
  "key34": "5vpGUEnVgAKHCmyN1JHG2zn8qqRNXEMeKuRv6rhnNdHdXdGp9vpBBZ1EKB2QfEhhaZoVy7k4gf9hezaxeqVUHWf3",
  "key35": "646sQxfhHH4hb7MLPBffvKxnYRSvn8b7zSMb2FrWPPkaLjqN9eQaUk31Mb8H5wAdAJpALg16mWKquBsLMYyYCUgL",
  "key36": "2L5purg5SWmJA7RXgUVNAc8R75Qa8n2aawfg9yW51BGsfqj64R6BwLKZMZ7hhL44aSUtXvM9dfKgfQgn82aesKPo",
  "key37": "n5Up8Bw7H2hjps8xoLv1P1YLcGTCvskiU2TQaPuA51fvpmWjeYLiH8Hfa5zjqbDS5mwSyhuz38mbrJjUequnKBV",
  "key38": "8Wrd4dycEtQpKJs2X5Gkgv6e6EyHmhA8Q2heQ8xtbZA7GbyDSuZB1ronT7R1BfweM9yTuJHjUGWCZRbGTYn5wrc",
  "key39": "HEv8xkPfToRXBUjasPA7VctmDxzkJvmyJvsXvCQLiYUDno8MBJASyoAp7qV1ghm8rD8tyFwmRKfZ7Yiv1NcTnXL",
  "key40": "3gmz5KxeCpVtYoUiqjynagurSYxtMWD6qYNUbWhUszoUUsvygC8Zn9yy4kFVjFJt2fAto73gbKKec45i7tBnmVEz",
  "key41": "5G8Ha67kJPG1KoLuYcWifq8T8d7tQTtm7SM8s67gnp19Rb3HFuDszwMPuWepKrax1VXk4kCPTVjmL6ax3mZHh2WM",
  "key42": "GvUV6vtdVB6MUNJe1n4mh816UAgYfi9tufgSz8Xtc6TzxpuLFRCh1yTMP29PsRKU5GDKFG1HUU4ywbVnXBP8TgB"
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
