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
    "5PZgws31CqqgR4eGSPEL2JLUXnyPmehskWUo9qjQf4kzrrRkDuaxBtYZ1BZHqceuFyLa1XMat5Fq6YP9x4xkg1Nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sEHvBpRsmgLZ9Y1J4yFyboyUT2XQDsPu6cAeRJocu3v4PfbRxnqSuwSHNVD9mDmNGEj9zhV4Fy1AGzBknvAHW8G",
  "key1": "24kHj1DYFZiCwgvQeE5VrbQvSyLumxQiZdkgyrHahjQEsGbrAK1DUwjZPvLUtU1MDWKMp6ASwaQyWk3VrgSAitA8",
  "key2": "293BJGs2Hf7c6ttDFDySK7d3yKb3xRBkCpymHFAjrFpE2xVxmR98U3fu1dRKVMjh94ar8ymZijSZQq8etUjSqkyw",
  "key3": "4N2odo1KcJ9P9PEy2bgfTha5BWaHuGPdqrfhKFmEeJ42hxZG1BEj8PGK3BuxqfYLXeetsJjV6hW5Uso4YhwgUvHP",
  "key4": "5VioaKkZWvDg5jc16scS4n1G4oJH6f72djYVj2Zua9P2xtnM86m3HvxzkZEbQrt8QaG8bs3EPaEAYWHuqiPPLn9W",
  "key5": "4ZnoufihX2fX7niw6iMANBbQCvyuLUajo3X6HkZU5YLyJD8UjjKViWiGwniSHTVKy2iBtRcBFT1tidNPuhnpzagN",
  "key6": "K2YeF7JrX4KqBsonF3ipqXYRv2uFtwyQQLYxH1wzFJZAivZkLYazSypxHi4dYhmMiDWQhqBqPXWoaYDJhV4wywi",
  "key7": "2Tcsy3uDUQwvcMN7BtfoNyKNpvAnzKaagpU1qLcC1fExkueqZrGwXmPZQpZpLy4wXadz7aNpnRQfZCtMr11evjYS",
  "key8": "2oLHAR6ppFv8vfiK9RQMpmvhppyyPUPt77cwQy1kBAQt45VcuYy5P6R3w2grHT7kyRg4bKf1JqfB7vcX1rTXoqwL",
  "key9": "3XjZqFboMgE7m8d7bdEcYFrHnyfmwBXvFdVQnXDK1J6XMnzvcX7Dad3M2XnFB7p9ucC3RUToKPCMkkAhx1oVuapp",
  "key10": "3qPzf2ANrZ77tDREJG2zjUgi2vA4dmeKgZMcYU6kXa6Ug9k7dwtEsbg2eKNFE2cjktneBcpoakvqQYh1zWKkXbwK",
  "key11": "2UsPomyeEGHT2ykNDpwr8yrgyEW4MugY3HAexU1HQB8AE9jsPynTrJeyWSyrJH13aE6iK2QcgXb7GWKWoyoGfUw",
  "key12": "2sYwKMaEvKnzfbYeaMmcAccQLuFExNAbv8mieUJYbMYBdmaaEB28u11NahAA3sLio1sbvPhpzBeYYL5XdQJZVpk",
  "key13": "2sZt2WtJbZNrRzQmvkgWrDaxWjdezz28hZQGJUFQSj2663poggXNCfVuKp7YCZr5nENMKqZWqGJGd94fLkXU7TRZ",
  "key14": "3q2u16pkgAuRdWe4KXY6Nj3e6TzcwGSF3i3XMFYWh5Dp2qEtL9MffTRgFbmA81khBkso3BiNgjUiSPEAD7jPevHo",
  "key15": "4WVm3kKDuhD8KufgcYBq8rHMkw1tAdgJ6friLpCKjGX5Vw4BJ1jHZh6YWnGCsWdYUruAW9nwj1jWngH5Rsgb2DZ2",
  "key16": "5qHdjZdanKzhnB4BuyckixLM5ZTXn2kbXfXJegdGyZxdthS5bgqQuoZdpnD4Xw92NZSWcYxmhC1KhVZRaBmhr1kp",
  "key17": "5wtYCQ3TXqmkkt1Cp2ZiWiSNdn6ZA36deMs1HjDcQjTar355s8qVS6wcg2r1XQFniFiGPoJmVP2K4zcLxV77CCzy",
  "key18": "5w6p9Veg1wN4P73w8VYd1qV1HVRRYgC3EssDj9Hn4z7epYB7jMeNqJ9z7zXGsUCMr243i8wHz9H17Ef5T9k9f1h1",
  "key19": "sCtjRVM3ekqprkvLPYLgnojCfASPYZGmKcFSGCRNNS29n52kY3BLNjtpaMDuDLBtTf4KRZYXEQoZ9ATrzRoLPk5",
  "key20": "4E81iXBLPY97xZceYJWawKLhq7vsMwnc4Mi1LV2FgB491thsAPBz4E2o7j3Lk6xS42Ethwcw2h17n7LeodydmCLh",
  "key21": "33N5MGaytvqGQpFKzs6qRFHe6gMD1W12e6dkU2KaVgXTxGRBKRYNhZ7Boseypfmn3ZNRga6w3rpW9iqyXHUd2Mb1",
  "key22": "5c587nr8Pcieyc2a4rRmV9NC3kBRe42Li5eKqVQR2xvnLV3RmAFbjDSDiDnrdDFV3BFbTqrZjcjMnxWFdNx3SsAJ",
  "key23": "214AGdgPSMPJ8KXL19TnRYVsjPEry56bhLsq2nS7rG1kHikaNXjwxaXugBRKbTCFtrEzwDTEerqAGvoxm6aekRnR",
  "key24": "y9yiJvp9w8UMvdgxz4yXrpGGjr1SspahFGAMg2Gf4xxmwB3qe6pvkQjhPMo48ohQU9BWM4towL21imzbcS8Z3GS",
  "key25": "2D5Vok5JKqd5iKVAWnqegfwBVNLktKYHxSVkTEB5f8rqrVus4X4JZF9CvAVe3Kx3reqxqmCSYnduqvbvK7CJMmqG",
  "key26": "3P7c1KRfdvwcbX6TTfHvpXEUqbU75aVvPb5jXpJm6D44qNHBfpVyFT1QRoSPAH44JXCDYVNgiSSyTPfDiEvrYEKr",
  "key27": "4Gh62niMqvXrb8Bpcby5GqCsL7RCvFzKkjzxDSEPYwkhKyjveA9KmgVmvuctSF8PsQX4RoNvQEXVzWrVSqawau2j",
  "key28": "2wHcboJ8PzTEnasfG2CbvR7XFRunMvHedQnmLgJvuaUVN54oMq7yTY87YtD5ce6Ggvr9jk6fJRJLriWMmWQZZJ3U",
  "key29": "5fwVQ6or75sKZLYfU4EYcwzJYz5RewTAsuWBayyS4Y5FDPRxiGADtGdZdRE1ghVRjW7nhEQgT2D8EPvWrNN4aUee",
  "key30": "28Lrofnq9r8fcKv2u9LiycFAuNVwoQHjbsZJRzn99H2KHBqCxVBT13DbpmakFnaKBHRJWX7muCep5fyGZhmp72Ee",
  "key31": "2bDfAP7wA9uxyQ5ZCTKPNg7aFR1qZtKvxEjvBn9n2zJzoohPLycWVm62UUYKuPrCJnpyr5yLMHZFKYEgR3YJcf3N",
  "key32": "3wwTFmMkKo3sa28JS8vWUo37SRDEvkxQkb6mGN7ZoCQRri9d7qowEtmjGpHt8HKZES1FXCVxZFbGAk2SCmqc8ao7",
  "key33": "3TNs9Lei35Zihi1ah4UsMYN7NhFoyEMebYCdu2vYQp8KUaWzAEnU1ivewUkFKQeKhJkGvtrC8PnxS4gWuXfnkL2a",
  "key34": "4CNsWmRQUxufCLm36bD1JGUkoJFqpAdkHCU1FiJwxZoxHqnohp85rRpwp1C9EdrUbZehS87j8dhmn91Z6h8Qmkh3",
  "key35": "4oqoJXVeTLMnZYFCNPsafVAJBMDDgBGxY7zh1FxhDhegae9yRW3hjMeUhvXwE24ZFgWKnQzdHLNBgvDj7mbX4ig9",
  "key36": "33z4tcvdj2pv5Yk5AtgF8GyJ7oUhKKJ7d9JrzBhVAjSfzKnv6uueAfPpQxtgKFp77y8DQog4eLR7qkKSk4B7bzaN",
  "key37": "48ZdkGKhfASHCPTWkCfzctzhTtnWigFDD9SbmZDuur9RFp1uVjcSsJzwFjwBYeoqENnjGSXSDGTKXiK1tw9M95sh",
  "key38": "2bUj5cXyAaQWG4eryKmFRsv5deAqGsVd4zuuJzvkAouZKFY11jnvN4HMSbJ1eHJ9RrCDVFSR63qxu6i35kdmeBox",
  "key39": "46YYQxiYwumXTGui5kszQGdf326iVP9oa4xwWcZQmhiNVqhcFXGFVTdEQBuYS1xex9XEHKnjb77BLnL2LcxygPpG",
  "key40": "2Hgr3oZvPawZtUYgJnkgyVfV2HTWXTPSvxZS8bUQDRKryt9XpeJP8AsLi731FRRjYPkKP6nw5CuF29spTifDFUx9",
  "key41": "3AaMEUoW2pJhRCMAnBHM8b558M1hKfofN75zAkL5vuhqgsUPnbShG24VtafK3LJ8zt8PcFTMFir2irLv4N6rCcEh",
  "key42": "51qk7tKrtHWWhheWLkPPUDs5q8aBn2ULHQVjpPKDDgKebSgy25g6hmEQUcc6myTZFbqVhKZ2WNRxsp8wXsBycoih",
  "key43": "A2S4Txqx4gYJ5Zrqh4GTEEm1J9Rbw8tnQEiDuqPAjpUFCg3beN8LZW5FF8Kvan3AHargKJA5V74uPML3ke8VTWT",
  "key44": "2DJ7rLnw3LaA29xMbXZ3KKVpAVjDPo5jeUHpzCYBk3azuTxTcxrwcRBg2npnWSExThtCAXkGqTvfF6MahDH76BbD",
  "key45": "1S4S3nTB8vVjvE1Q9wau13bXmTRmRfjAtezVrjKYgV7W7TVR2zmSFRNWLUGRBPvGm6G1udPWfp3QoFeBoMVYRVv",
  "key46": "5EG9SfoqPANvAfo7Nyv9ArX6ZzHoRmhUVDLkuJMKRZJvVStF25snABJAk2JKnssoPiXbPdVDG5JK9Dw5LcA7Bfjq"
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
