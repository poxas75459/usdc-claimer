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
    "38NaKd7kWyfcd12a3KNBZW3ksePvkz7Mr4y4bKL34VzcYgqt7n3GA6qBBGnyUfP5opRLhqBshQe1a8251SJdNFeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42T8WERUAqrKKAaQGDeNKzb4gEgfEihiJM7hCKdrqdFtZjyQMMCRLwGqoE3PA6aQWfg1jkkMqAX7XY1cKuDE56vn",
  "key1": "31Jy4XgSsfq2heBLbza5i8fFNtbyBLDr5iyLVkPv1UeJ4wc7632ovy3fLCn2VLz7nGW4abjD5mbP7xPXX983hMud",
  "key2": "5vNCFu3cMvPaNH1BCkWwFwnQ9BqLhjk8FtE49DDJPPeRu7W8uG5KFGt92g87gBLb8ksMqdk4t5TCnAgaesFpRUtQ",
  "key3": "44nfPYo8j5YGC1QKmkezYEKBwLBeb8DhM5qjcUNdoVJexYackKwUYTM8haNQ46iCrQTeJJKCjvpZQRDDqJjiSbCw",
  "key4": "53f8SWs1oLo9Fb8sampS2fzr2u3VeY7UBskaoa8AS1dCuHUWF8wWpQGkxp9GGofWTbPggbt1xSyPZKsozDSb8rGJ",
  "key5": "4dt79aoaikKjfaqdbsrde9LgwANaZ28QKeoZDwRmFoTn8JsWX4bBdFcA64HJZEAHoXZZAZp4FVHhqrBsibN61rRA",
  "key6": "5Ek2Wkp7wBwJt6QbXhQR1awEtWr2dWt68iBtkgaM4hzErrNsAjup5rENVQp8g1x5aP7MNUeGKYMa6vS8pRKnNYc2",
  "key7": "3jWFXjbkPdTKbD5N8LNdhmnM8TNd1bnP6HZWmBaZVsoEH3BhCTokXCkwhwD2ym4HXSeiacsuPriMSh9vKRNGcZVm",
  "key8": "2LGkusanAEpvpKz3yGitasq2KWTvyCBgi4H5xPNXCASrZEGn9z8g9Yo2bZg6AkebZxGumLBKcVQtxKzYXyET9Xb1",
  "key9": "YJy1HiNyuo7L4sRV9Zd5jf93RhCnh4nYSENEAVypdm6FzVjeWHH8uZvg11JxDFCCMbRZNUS3jDZDDjSE8wVGKjk",
  "key10": "2FJ5eVVxSqK3MnE9aUd2L3hZjRwsqV4uMz27G9JP1V88pqaytuarhfLn2qjttd3oWgWvwv6fx7MsLivTAo1hm92C",
  "key11": "1KUZx1b7As8BZX5F9FQ4wBXiwTuFwhEc4emPNX82C6vThZrLpZrRDdUbsKJ2KtmSXdWc7eDoDMYyMyq5A21J5zD",
  "key12": "5sSRLHF2afAwyEg2gh8hAonLzVpew36ju4nypfbcm6FG6AVjfUN5p4jCbcxPjoKG6YCp4YKeC8RqKKTTXriGCr7r",
  "key13": "3ENNxWs177ux4AiNbDzTBeszmoBgB47C15a8ovkArjqfs8c1i1QBQA5zf2x2jynyFNF2LmMWZ5zPtfkieDbHcL7a",
  "key14": "2Pf626Lj94NDLH995EpwziiX8ZXbPvGt3t5GKm1uLif5Aw6ziHEggejYEAppDipJ8EajmwEdeX2z5TYAxvkqgJeJ",
  "key15": "2VoSJLBZBUjTFwLkCMX46fUxYtBTETLKFA8dL4UdQQERGdpktUVR4HvKMFspR4aEGk7MqUWDFfTTPu6ewzAQihpL",
  "key16": "59tto4kDiSfo8ty8gKL5ZwhavTGy1vkce1ys2YmtarPWG3gR4T3ru9WXHmYCkBRvCdnX7JFZXxbp18ercrBE3Zhq",
  "key17": "i4tY7hWHzthph5MkkMCQgdrdk4BWXUt7yPobuwhccBGujTJ5sGC3ifR5D32LVkFKMjG5kbFDxWm5DWrWMNzywcb",
  "key18": "5VLe4ZEvkBsD985Mz3aNHhb5cgtdQ9sL2vJsbMGiZDfS1p2EmMXdXUW1RsVPpJ4C5PbRQV2YmQ9uH1dTBnRmu4U1",
  "key19": "5uQc1y6p5UnGkEXte4aEVnJwZuMCpCq2p2v8JJ9r1772skRamL2DQMq2ALwb1rUHohufXxUwGLukJENGTYKe9DeH",
  "key20": "5LnYnexANiVPAbptscJabAwvfkdejECAsKY5Pbr3EWeFBfLZnBfe2NongAKZ2DKc2En3J94LkokohEQkkM2i4JkL",
  "key21": "8hjw7bpRdBhJ1TS4HsqFmQL49hVpAEAiRMGLqGH614vRRu1C9VkqBXcsL5rymfdikD76i6GQk93QhEb2z1ftVji",
  "key22": "3Mo5uhjE8WagY3Du6Ct6tmsDAoz8RSUn6WZfkHi1RPz52o7sVjQ3wp7XNFdRv6kEmrRFCPdSCevigAZcMiKjsEkL",
  "key23": "SFDFfoKDjLZpcnsQDZYtF5eZGde6wccWURMGvjjm9RzvVnN7zTVDwqFKd1key71KYohpqF7FNBikppza464Rqdu",
  "key24": "4RCWHdiYaj7gLqeeZQYfNi8wYqa7DQHhyfEdH2TSYSWyiACmt3ox5A7TKhxiinhqUxgtgAzvhH5jWdEe5m7GfYsL",
  "key25": "5ubrWBZAcgpmC4M6x6kXYHmFaT3p748jGGLVptzwWp5Z2F8Eg6UeiUnBxUrSTUNNTyFA9LXeFX1t7c3zbHKLcYzw",
  "key26": "38kaEaJefWS4b7GjfS93WQ8ocSbJMAMVBqFoj5z5YnLk1qT28TGEnPjM3XZc9zuDUnDMia9pqtJFxts5mpHzAuLa",
  "key27": "2ooKvseodkCoSZdWAMZYTUCYJAHRo7ZpGPwUv6FXeAGWAm7LQkVkf4vBHqLE2xfNnTAsdDVUKhc3caV5L9yJP719",
  "key28": "2i5AAM11dPMzD5pdW6PULoqyyATdvpQUoE5G2DcPmr625EX3N7MUP8yYd6HJjf5ZgxwtY6dD3RvJLPHeGBjUD1Kw",
  "key29": "55PxGHprgmk1WoMzCh1wmk4tPkGBUJvkSd71ACwLFYF5aWVtNk1fP4fp5qWv5VehDCD2EHxmu2D3sf17Rf83ggF9",
  "key30": "2ymx2AmNwp6wpCiwNbthAAi3FLjt5h6FsnSHN1Cn9ipKSsWX55S8vvZZNTdSb81o2Wd3xzBEsjkbFjwpGjhRxuX9",
  "key31": "5kXwxioNySGqwYtb1jy7HiQ2hhJuWNU1ajDzDh65u2cmS9ZzsZbgSpj3CzaPM6ryYUcPq1BuRB3YRj5ow4otdpji",
  "key32": "1NFHkrGRaMZ326qNSDa15grbMf3XnDuGvcymHrRPWX1P2Hm6HFhcrCb8bMRsaQuSPyVNUwPfSEBsczqbEK4mKqK"
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
