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
    "2z5F1iBYYRxZYbGSeAP4zaoVv1zvLfGfrgHKwbcsWZ9UvpmBSYAZ5NVZsdL8Y7JzfP5rhb5kexshtYradQ3RaRRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rb4qkZiXFCuiCXf8MMWFpjWkRVoQsp982ocxVBsnWSEomGhiqnkNJYgFbyPhySnG8Vdmhwa5sDsacCW5Ns6LsfX",
  "key1": "3geQ2eAdMebGBGX7vA3fEFxGf5o1AhmcLrtPewcDtT4ryihTtbJUBA8PcY2VLvdPa6sqDFLae61omGymMQFuGLYW",
  "key2": "4XxKmoNmriPBachELQJoX2irVSnM8dfw5mTgyLFR93uzc7BQLHowi7HeZSi2WZXT4Niv2RAXC3WdyedbENHx6ZJr",
  "key3": "4fg1fvQwPBKk8UCqHvnoxnyNyvFKZDWkUR1ZKaLb5VmcLixgxZTzp4vSzVDHke9KPjieU75rt3jzRWRSBmgzh5z2",
  "key4": "4JjANDP7pLvPU12zeFdkXYxaaCNwx1Tci7g5hS6Zvcgv4qqr8nigzGHM9W3ujP6CTUvxhcH8opHY3jAY6L7MB2qQ",
  "key5": "2FrdNsvR11wbbnoqSfU3GB7PomM3nmgFRFtbBonB8YG7Rcc8iNh1Ljr5CZebGMpDziwLd43uEn9wZM9KBnLWHL7L",
  "key6": "3xcQ3bo4q3xxUngymkD3CGPEinqmWLezNxvgVrr3gZk3yYjXHzFr81HvrQ8KDTwCUwM7JCqKQ3UpXoqDYoKoYogz",
  "key7": "4NmVSbhSVyjGKUsyYCd16QLSS4btBEnMJ6dbmsyti4nBPWPetXUMZ9SZbaFus9aW4SZAsj9GwvCKivNJupn7E3Yr",
  "key8": "32WXjbrZWHcnfnbNZVvHbARySuff3pVWFA1ATS4tXPtRgXBiRLPqCjdj8ciLng5tWvwTWQVGhgeSSeK32wy8TWeT",
  "key9": "5bAYD7at8GEbhyc9Noifm7AYytAHK6bDT7ZHqiwQXPdXaDiv5Q3q8yT17waxaxvwQaD1RaM6cAyuq56iAXG1F7Lk",
  "key10": "2HWwUnJRjJkuNoMpHrGEiMS8XG4X7tEbxrwgfg6oqv5tT7ZdDnfMurq32N6pNHykiFvQPMZKZtDC6aFkzpn5Dmd9",
  "key11": "2MPzuAgc5wScwMETCJtasmi4rbnUginjGgJwBrKPAcsKUptR6SJFQYhh9T2v6ZSd5fbWxCByURq5Zmqmms58vHnn",
  "key12": "BvVBoFYL1VXjQUs3AavKfr2ak3M8qy26Lts4FQnmKW1GapX1quYT85nMC7zHztxv51jsnA1aB58UfUNQZxkLGYF",
  "key13": "2WerkLXy5H9uWVZekb8tZn1KGLqzk7qto5pHNqrj4mggy6nj37zNiE6KL6JbzfsroVWPsRQcpwNscrmykbMAvrEy",
  "key14": "2bu7akBVwTunLw81LVmgqaWXyRhZnYrKAtkFgXyLgNr65bCfNytCEqeKsGaSASnkfSo7ChFkzP2qVwyDNA24zV2h",
  "key15": "4SNpYe663AbL6TaqwybrPrp37UVUDdsQ3DuvpBufEZYAVKeRW4q1LMd7WtpWikrWmDTPjmMUWVmm9BgCehxPyzEL",
  "key16": "4K4WQn2CwxKdwPDUeFFkcarVm2Aq3ViomMaqmHXcTbEBa4WWsV8KLwSRdxpuXsFqApxgeuNzVJ8j7FDhd7REQ5x8",
  "key17": "4L77mGrHohfuS1AZYQDKkzsT5sU6ghycuifUucMKTvEyA7NyGRHotJSnhCPKqX2HDJad2XeDNEBaeotPwF9AGDgt",
  "key18": "n3M5NCnUQeU4oQiLgi8v36n38ytdHzrZdTnBbf4qHQugsSqsKU3wT53jrwGrcDz89XqnSktF6vdWbDrkNRHGHdz",
  "key19": "4W7dAx1Uajko84SzdjBGgSxX9k8HBM367ET25Z32L6Z5L8pKYvbzwokp6nRLRPEKgWq7nehrtuxvsaStMfqcGyPp",
  "key20": "661L1bXhNMNPs8uer7jsV6EF3cQaJkZ4xvyN7uQRBwk5QiAQWozYdDdFEixZjWCSy1kML2j9FtfMSMh6oStNz1pY",
  "key21": "23hU7EsMVNVdSb3M4ZN3MNCGbSYE4SrAZuFdaaw5FRnoABTd6sa63UiZjwPoYoSvLCDwChHff9rGYTZfWjmbzD3T",
  "key22": "3z4PwC7y67NT3364e1xohtJRxnsQJZGGUPwfbAbhVdonzj3KchRSV2yB7LS1XVEpsQSHRkuAkzv3QRRubv9D6Sbm",
  "key23": "5NRDkoyVjic3xzVN5xEdCr2Jfpv592yNEY6EDyvwLvNn13ShF5uRHbS4XSNDYynVMmEXbfhbx1Lhzc65tCmfFkad",
  "key24": "2PAeDhAV5ACBA2As5LRr6tCmy7AK4ASw2kjZ8UanHM9VD4W4MssxJ1XKDNFjhVVz9HUkLdpv9LjeVJRzGTkpF1wj",
  "key25": "47kxxT4zh3aUwsTW7zW5Sys281Pu6QDyFxZ8jbqJttCKfsxKEgpe3nkKXxnBjdn9cKfvX9ywbZEW19qH1xhwAaJ4",
  "key26": "2WkiV2qMYMzYR8SBXdzc94V3XP4zfmY7pCJs1QvLyx5sXdkbquMHY2AS7BHFrtSD6HFv5JTHsVL2ix6SpHJB12Jw",
  "key27": "k1kHWXrDvTfQScUzfbJe1aaZkPJEfesBvo1HPUJxbMCDf85Eug1B5bWinqN1xVh5Wnrhks2gStD1JvwdNsRABjS",
  "key28": "52YKUV18QXXM4jhmArKxJkNF5eKKnGeEpkR6jBAArvSPnQxfzG2tT7UKwXnTQk1omqR6jXLUbfdwhaBoTm9P9osb",
  "key29": "4oJZK1d8srbgSZDRk78ZD6BNggHBsn7ZmNUSd3VJ5eqqww2DCMtezXGaCnCA3dENeXp4L43k2ZHPRP8B48uPCsF3",
  "key30": "3PrfZzLQ1LFyUpfVjHmJFGSZZdpqhK3fsMGFEgVSGpRqCVu9kFuomhNj7aCKvdvT6QPekdpApqybUWRk8xLhDQbT",
  "key31": "4SZBhRLX36b5zFwo4Ezxxq3itXGtKPHpGy9rAn7gteWk3Krsb2WS6sVpt3KDgE5Yncx5DrQEdRvjfnpxVWZFbrfk",
  "key32": "29CyMmBiUYmTico7umcYJQT1yG17jyi7GRPPxfyvKRVz5h8VQ3iTRFYgiWhyAvhEa954fCZFWNHkK2UCarJmNJE6",
  "key33": "2qse4jmREJ9TMj8mhrY1dBxcMQEe7EnqJaPPwcpr88SDHcm19uBQqabg5ugGPhJRAazSrmas8jUjZTG5t7s9Ro8w",
  "key34": "jnXexW9irsDa7FaXPAyxp1W11KXu4aEMC9H3Yz65Qm6kZrn4DfsWSasZRL1uKUU17Ea6jJhKaMDWAaqw7jSYhPq",
  "key35": "2DNAn9YaRbVH38MrupBrD3bQNkv1JXBGWUr6KYF6vq6CP1i6qmTsZ8UGDfdyToeoDw6pdbfHQfyLayYwvTB2Hn4Z",
  "key36": "36VBfHwjRpg3fPJn7HErJtHaS27FDyLME5dCmn2Dbz2Gd6rK33VvcKKGBmzHAiaRgowCRHEBzuxA3dvDHqrYfvTn",
  "key37": "5SmpTJAKxgnmUqt4y3Tk5r5ELvXKiKyXcx1X7tyBpJ7xrLKYXkh5hYWsTQGWK5DVpZBCdM5Ny3GXgQGF6YiMtuAg",
  "key38": "56j2VC6zXLw2zFd5axPPdaPdj7ARRDQm8BJ3ToF4KfJepkjHkCDXVfPn3FCjYoFCevmc1Vicv2s9xgvcdnAWXHi1",
  "key39": "vPWeef2GnyQVKpbnKB49GYi2CgSdVqqCB4D9M9UQNJH85uv55aRCsJrqoSdYHUdH5cSodctv5ekLji7SrYhTwJ1",
  "key40": "5NpCNF8BqCK6ZiNEMX7DnSRGTue5Kb7yAKbCCqzaZpQYsRnubteNFEza5U8WcTu1fNoQiJkaoN1zN7PSDaY7g1mX",
  "key41": "2B3hoKN3gLf6it8Fmvx6HbnJ9Ee1rBwd1HKGE2cuL95c5JqW3sM7iGiLUkusSHyiaxr83wSDEW54WMGMUNvuyk6N",
  "key42": "xJrumQY2nQko8Nrfx5BywEU92xZKVLVxQRAyR2v1pR6aWpRKKKre9AisnXEpCBibEWc1RLLcf6EFSnes8b1yqoj"
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
