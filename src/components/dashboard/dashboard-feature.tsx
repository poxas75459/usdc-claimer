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
    "5E3KC1agUUvxZdvDNtTXztJTLnRF3kyuhdcuRkobc1pkRpC9sDf2CaWX4x8phryACXGb2G5GhNLq3XS5FAZ2VMAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ky65YDD26GhAp9kiZJ6THfLSLekZ7ARcTtzQJgL3CAdbY3wbQid9DdB4GDdqCQf772t7f4aLF7F1eC7V3Rfcyf",
  "key1": "2J9Via1yrWWr77pJQjtk4zbmbKVKVAExqzgPLEXfKj5wwRV1CccMK9e1am89fa4nL1QbE9UKZDcRxgRuuoxMG1Sk",
  "key2": "4GvcefppREdF19QnMeztjfsP3HmVDHPP1eSbj6tw4Hy3AZgsCUKXHBgsFyX6qKauVkfMHpUhb9Z6pdxFMgfqw89s",
  "key3": "CHCvMukwNSaxM4s9AheYiV2XdT3Z397CYVmwEEq6HMyqkCRg8w8qX7YbspqeZsqVGTL5YpbH19dx6i255gAYJR1",
  "key4": "27Ak7SQwwDyzvaLSRtZT1SEHJuEYZ1Ec5kMw1xKY3rNTVVox6Hngt14CMTbWXmAqtbPRXmMnqkZh5X5vpaZg9ZWS",
  "key5": "3ST7a1bnp5pYnntXuuu9nBhx52ktNhxE9YufTu4iStqz35n79pQnSTn2od7cJ4xapFV7buE5BxNuXAzNxycR3rRS",
  "key6": "5vAHkY1UsFKTfpE963eNMwSWYxY6oBT9CG8XuJebazKcqkj9vGgB8AoMuy2xhVU9cuRYBLRAtQVxNR732SkrUH5w",
  "key7": "2xxW8WmBXQdCdRisWqYRUhS1ayvqu3JkBWt6gRuoDWoWRhFu5pSGocWp7zm9d7bqz7jGnsJK83w8DotQn7SBUjsd",
  "key8": "4KusZabyVurijMj73ZA5wdkRHzKNHW5GffMMzzGJJjYrH5dt3kvHXTn7fz6ppnZmCbCJAXsF1BAvKroddAAUiRD9",
  "key9": "5P7ZtNh2Znp5hncZagqBBnhfG4aDNKWEmKru1fVvHmJWEGawGyVpu1PAzXJZVeL6q1qD4uzkbS4iqqZPGEAb4gAh",
  "key10": "4y9eAU2V3S1Uq28diEkwoTXAzMhi3oGKKMq1cnqMCa8HAfjyWuMH4fjyh8rxzygtcx7Mn2BYhbALghSjamsvn1eb",
  "key11": "DY4niamscvgrCHvzfebCoZZbso4i4pCoSfoWTXsNSsgr6q5GaRBMnjjYzDJXeSJU7qP9gMZ8c3fsU1rTvG9Mwjk",
  "key12": "67vgZCPThYoTtFSXPMwm2gQbeBqbN3sA5F8nQ9tYF7uh2gz6johSy97w8Ha1mQLftKWLvWcUdNHZHdp8kfizVGh",
  "key13": "2X5gJHT1FZNoZCRxAnLTJK528NorXr1iANHqX4HSgGhubLBUuqp4R46FHGp8Jr1SggCKRKg2tHWY7dU9w7css5MK",
  "key14": "2jf75REgED59jjcrGkXE3aXP5kbsy7UCRFYMr1ygojAuMTh2T9FgcFHbZ7n3JVCWJ3hidJ7cwbvQavfeozTAKJhm",
  "key15": "Ti9PFpCPz1MjZng1PZNKNPUv7JhHscQsCLWJBrwpVKxjAcLhuDetWSsRhDDn2Sh7GK6wVzBFZefTTx7C3YXR4K8",
  "key16": "5B4pc1VzXKpB2QLx8N4CiJsHiMKEEA38ShKoj1LNH9fZ99iY3DnHkkwk41tKbhocywnP49LBi5HvLGcy7SJHr3Dg",
  "key17": "4D1BL6UwChsfcuKyvtZSK4L5j2Ms8Kayzr4MXxb59kFjGtUXkqFGqTh1vjJRNbyCPtNhPjDKtGGWoP1CJhsNoSw2",
  "key18": "4txJBGpLMqXB8aoEvYhiKCfNxBkG3cWpi8PZp46cUCdY1VTFvRaNU3v2G9AXeAwPLhduVA4AdsxN3X8c4zATLpDe",
  "key19": "VEgvAea5Sai8tPq8oV6jeZ6euZ5fT78NKRNqNFpzwc7sxLLn4dLjhoaTgf6pjTVvajmHZjVpE2GRgYW7u6QTMyw",
  "key20": "2aWDs1iuL6XEkFuqWtWpTDEPXc6aqsCEw5tXYrP51HoohJ3DcULRKhny6iiUwAetHMYUXb5fGtnBjW9bTdMsg5tP",
  "key21": "3K9RRh43fCXiiC77miH9tqoLB58fSwEuiFQmdRnHbsaK4phEZxtZf7YKM9QY9LYX8zXaK87vbDm8xPgLLYc1RxwU",
  "key22": "26yUu6an91XgxSUp2WveDsGQopDi5Q3FpAb9rC1anyG5JQZpR7sxA1bDN9g9niwekHwDLqcg6GpyQUWpu1gxWrzz",
  "key23": "2Up8ppKFwSYQtbCPvrGdEowHMNhF6fpy1ikLppjKiZa1iuDFg8hpqWMx85wN3T2KoHaUmj3mznhGdwBszWeR7Spf",
  "key24": "WAxXMehpyTLTCJVmue5A962rphZJhYHGEUsbLhajxpxtR228hKQnCzbssetYPz4XAuh3cLXd3gPrNHVXos7gCHS",
  "key25": "5S1pEhXa6VJh4SuhWAgXyRHx5XUudM5vD6EbKSunnsjrqvVeC3Er6HAbWDgKUQPJ82zftYYEkHDtEL9CPSPKtGZf",
  "key26": "4DNGd2cASm2bHJMXDvQ4kVKSrK5R2RKkoDpu7GQVdME5Z1V2J9mtyCmYqPuCmr6c1QGRFfr12raW5Cnj7PuxCYC2",
  "key27": "3GEsK9f9uHuacv1F7gy1QdrWeLXCwSjK3gsiwbcPPLngnVnvUV5MLyXAfbxHVViABjuKvbsYcoUqmWCVYZt3JX76",
  "key28": "AD9ER9L997LpE7bQBDJXdDPBbrRWvaKEtNXSEZimRUt6vSMXmzmQDsyf2wsQkLiFKSHzjUEzB2n2XHGuU2jECg1",
  "key29": "2QFmXrPwiRUrgjdXdqEBUw6kR7DDj6xGb3ugWjzhLLyySTNPh7WHFLNXZc4Dsh46q2DCtRcgRW9YWzkwyU9KKXt5",
  "key30": "ipBfBcbCQBR3MAQfQUjcR6fyTZDRgqKZDDDEMiCVUG8F4FMz15UvRg2qXJfFVALcJxZ1LYctXvBsgMv4gHaDqU3",
  "key31": "65txs1NFMduygKDmgkKkKuJvhtvkn294kfy6nzMa4myppzWuZypxsZC5SBtVPt2xRXNWBmR2gr8WYvqifFNiGkzM",
  "key32": "54A5oqJ8TYMTS12ehyHDH1DMgnzgjoRMBANFvqJ13jkSUUECnkEw61zdc95o322ocNaBNcn2am5dCH6B6FvTLKxf",
  "key33": "31c1jo8izojJYBhXGB9zSw5WnZUzcD2pmWPp9RuubiCwUcBDc5V69o1s7vbk26u1y3T45dbrDAzyQiPpSy7gETki",
  "key34": "n5D4aKGn9GaLF1PDDwGYURoQQUUNN6DwVnhUxTjMBDMfjDmYjBq2dLuBNB2msrq2q48CaawQsWsJzBiYXgcGbfq",
  "key35": "sbfp3ACogMf1JQQ2DnLUmDnVrF2MwptWEiyYVEqfJw3XSLbbfQsobZjCNs8w3pydyintJdtEWXMMzFV4GcCPTPP",
  "key36": "655ewbfxHZch6tsJmcYE6KL36VW82xswDUFR7oXgMNnaYYK8QuwkqGLZt8UiWgwArNFTnG33WkEh5jyBFW3coqor",
  "key37": "2zsFWTCGvdxkKb2zAVuMBbsNi8wWP3LiFWK2fpkJJWidVwWVV5qnNTHDh4Y2PAWFUb78h1oDANbcMysYwHe6vuFh",
  "key38": "3JhAnjPUa2PHGnu8eHasHfAYc9mk22miGeuU8xtjrWkjzu7DP37zGN2JmDc3j9p5XG3HLBWyiQ847qqAVguwcjHN",
  "key39": "3B3fL8ur9tCLFiYWnFgSS89DvxBBwXUEusJ21KEjNFu9rjUVGu2gL6apDSEkDM4bcd3KYXE7HMq3HybPQX8qdqax",
  "key40": "67nDGFE5kkfAF9ir1zZb6GeecthLgqbkA53VGABgWX3tmc6VKHKctvTFj2vKijpQ9wSDeHRbLmwR2k3y4WCtjERG",
  "key41": "4R35u7fFPY44NiFi9aGDjkfnAA9ybSWGX2fRt15nHpf1VgWCgsx64pEZ4crZ4ovVHwLKfC1XBg4mb5ZzDQQTC5v6",
  "key42": "5M2vNWhQXGEJP8ybdJxNsQ36HiexGFyY8TtTF2JnqoBHWZfdRxdfJ2uRVFHLQVjqZvsb368AmScW7UcRU5CZFUNg",
  "key43": "w1gLsTW4hHdhZtWKRKRYcTBzTntoyH2txDwqWzNLTLCHyPdsgg4hDDaJXtDfUBZxLtyud4uN42YiAQb5MNAkM59",
  "key44": "5CT1oTGwp7qXfCKd7QpndoBbmk4d3hRcpf7g1afzfdD5RNbwsc6pK5zjw6MdpNEwxpPWe7Db9K3tKqYohMUHvEVG",
  "key45": "64TpoV3yk1n51WWJ9V4jXfbiEuhRYC2Dpgzm95cWqhRYba5GSjA4cGP32rfPcs2cc1rpiCn2a42CqNi9ph43CEhC",
  "key46": "5u9DLcM1MRMDHbrSp8mZnbSwC8KSwXR2qTTspCJsFUYGTqxHBsTySUemcmyajqZznt5CthNSN2e8s2h3znPN5woJ",
  "key47": "vxVXeCKVtVT1N3XXbJSArWT5hcg1imH8T8Xk9pUR4UM3WtHtjDU28Fp29NYv8zfD2vSPPcVaryGVNfLh8MX634e",
  "key48": "4w4CMuUwAGvzVD8X7kZBaBTztTaSTbXvkGGJbeFpHDaewVh9p5MivTJUFLTLAbZKbhuk22fxQaQuPbhACMNGs25A",
  "key49": "3on8XzZKC68fCBCe3sDuXGj5g3Q5hEkgW3wQ5ii3MCLzGCNZcUJynwZsr3D5ViGHfYVzC2UnSV8Pg3LVXD8TJuQ4"
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
