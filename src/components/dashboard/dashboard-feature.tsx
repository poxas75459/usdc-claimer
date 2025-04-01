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
    "NrBeTkTrQxn3u3dnwowNkaYYnPgJ6QKkL6VS2LiELbHiqiKDSSyuv4gdV1hgu31UwsT9fBh38pREzA1SNS2VxBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PVF5Tc4gqG5akcLHT1AZgf9YsrbWVaRrM3TvbRmABTWvcC85r4iUW1G6XH8oiji59PyEoQzeiedfMmJ12j7ZAfG",
  "key1": "4SQxLdffHBjHCF4TnyugtPAnScw1X6PDvvqJJnbRBN94nSb43dHgjmGV3hNxc1gSgmyxYttjsukp6ayaet9oHSEm",
  "key2": "57SFgRRu5WbN5uNuWrMo2Eh792VsY5yPWHnD2KqYMAMvgAjs5BdtJAsVXpWJUFmTRLjcwNcicH1fHRvSV6M8KnFR",
  "key3": "3Kiqi97q7wSVG9ekcGDpo25cBFoibXc2aunDMHapoACdf8Vq6WXqcGDEt71woucJe7roqdZgPtiv8xgKYyrBiRuf",
  "key4": "64h1vAeTaBK64bqHm74gbVjGMFHu7Gfx28epD5WurwyZ9JxfiGRjrJcbHgAUKcikqcYC1fBrvHQYzDmPwLVjo2PD",
  "key5": "37u7otnwgrRydW8v8EnaqSrWkbaKLLmzLmx8Whor33PPpRPMD3yDCPyjK3Zy3mcoBUEyETYu6HPYATjag3KKxcYM",
  "key6": "5u6c5MJmW3LnrfTVtSJn5ZUH1NDCMXavgBQ1AHCAourTp5kR9jKT71PFKuJcbMFao1ZyqWDooB1Moh7fSWUNr5sb",
  "key7": "3ndkonzA4zeRKrYCPJ2KcRBvYnJTtYo4Sq31H1Y3714njXJKyjuEPGEJusnSh8EMYxCFfqXYHDnPtfZ5YLuQU5ah",
  "key8": "5WJNVXPuQd4mWfdsTutiw8CYgTkV2p8izfSAHJDPpiz4DxFPYJqtZodZDj7mz5xAQD758ABoB3DMh9TT9uSh4fku",
  "key9": "5a61GEqoZRNA6BUjrHHXiVQHeecJmaSxxDRPVgi3LEFAd7dRvTxceuiAnC7uavuK2jmmebHaQJSGYSvVSMCLAXgq",
  "key10": "5TrgJF7N2unmgmQBpwSoz388dFfYaYk49A9kYVmrMKzqxREGPXmpNXerziLHiH1Nj4Ssjq3DGKqjDDUDZDgz1yyU",
  "key11": "2KxpdzszwZCFn6gL8AfKmQdZTRt3sj2gVgMVnpQZ3ajVhGeDtyMTJ5xAB8bepCoHTrFz8sWcLcTWvTkVsR4iU15e",
  "key12": "3Jh2hfJbrmnRR1cyuAbDoPDUhBzuhuSGsQY4D82uiFXvshuvF7QnBxkqXaUGU5kTFAWLQXz5F2gUkVWBv98UaHAL",
  "key13": "2gnTpQFbb7M6MN5yrtx8gQz2LZF1gz1qBm6RVGG6n6nDkSNfYumVoFyNDYybrKWSfpeuwRK6gF2quEM3C5N8Te3T",
  "key14": "4ECc7xEmDu5eHm9AXriidNHjzQL6b65p5MqfqDKFTpk4dK8zsg4iahN3wNDWHH7AzUJQKkzghYxWETDbVeYMcQBJ",
  "key15": "TSPN3jihq4erCh7geAQcKrKFTeV6cbeVCD6keJE8MeVWauFma1LRCBGk8TmBxnFRjLshtBsJUtUTirkXFdEhh3z",
  "key16": "4rYYxPL7NoXcNmySTqgRc4P2hcTkacAdtArs6cnsxzB66YP47E91DTYWeUwMegrYjBtyf6ThWgpZKutQghdqSUDr",
  "key17": "4Zwf2kfx89f1zwf3QJcEwCDKPXvA8khhD3g8idv4r43kWxBrJ37wiyArDheiA7dHZcZEJnQ75uxsfUuSGu7Pxumx",
  "key18": "4CeCSEPRyE2vAc2AT4nKLQFghE5dWPRZR4qofvd1RtmRt7K7gg72wX7ZsJRRBhm92dBezJRp16CXTjoYYN2XwL3v",
  "key19": "3bL5YLjvFfK4kpFx14FTbpirsFDAX75XcqspPMUnqAPF437ybFxebvd8biR4Sy9brhvzymoY1hx8DEiC333nC1L3",
  "key20": "2WvWoL5DFqFdBsRwQ1ToUefAtaQnMQS4poz8K5F18QTCdhBQgdeC9QugjYd4z58ETKKeiT37RqztYv2KFg6f55De",
  "key21": "3hg2pBQA3N9ypZV1wthRVS6ZMgYd88T21kWJmhLi7HDP1s8dBNQGuid9X3DWSqF4a6qd2qjiB8PLPFCMwU6JTv2D",
  "key22": "2X1n8d2PJabhAvQRdXULLWdx14n84gaTkyxpAfhWiEpaq45rE8zJLteHE1fchnLemgz7PYfrbLjgFZv5EHd7oWLF",
  "key23": "beeQgoQDjkM1548KQgFLWGqXHTDiseHjz2MD1HfJT8vkbqwGJRzXbdD3Tzw7PxacsR5d941CMKbLFtdN8uws5kb",
  "key24": "2qSr3EJaVARWmhSpTUswbxiwdvWNfr156QkkdGL8msjW9Kvs4tQEh9odTdgFCCfyr9nax7ELZ6wfEoBpQj6SC8kk",
  "key25": "EMb2Xzh4UdkUEEeoLQWjUMo8WxbvJ64n5fDXYXGSAiSJAc3tJzgdMoWkjPiZVWCTUZV5UytSZHiV3uw3TXsHtxB",
  "key26": "23Q6kYGjEcu7zdH9RaomXx16svRNyZc1sSZX7FesydLTa4UoZMVWtwYK2sLBhSsTwdjFBqemheAGbKQLy2VCCTtW",
  "key27": "2B9jAtp1wrpmHPnUWg5jn6bCC2qcfEV1k7KcRYGbeL1QuWTZaa1JpmSLE7nJWrWFZAiohueyvi9T92A83rAbdjC1",
  "key28": "65fpsHqyoTWJM5dLb1SdvNXMuZ5mXayg84LWm4i1kES5eyYxSTTaLtZJkJ9Y32bbqk2VpEJYrboyecpRD2HVF3Fp",
  "key29": "5ehn5D28DmJveZy7q2iKjXdrUtNRyY8RghhggUvBB7AgZb683z4NWzCSmB3vSd6Z88mwv1v6jToRKVHyfCyFrouZ",
  "key30": "TMsQVUv84CYqB8dU8gTEC4GzEou6eyDCD8a2g3m5WispjrL413RsAYPXm3YCx2f1nPiFGamLXJFqx2vZZ4dphb5",
  "key31": "65kzx6EfzzzDknzEHdyeB2btF1uzmWUyybWHqe4ecZ9ecfa565ebP2zsMVc4kNZ1H3esp1AHJoZvPgd2Rdiz6KgJ",
  "key32": "3TLQBxkeu5bHtbiyTJJEUyrBTikGiXunKdNSp5bzqz9xrSDL9STHK4uHMsFtC7PwxBr49WzxqsWtMLVnwN21mWRu",
  "key33": "2aR2dy83wZfCJiBQuTDiZKMixGtyA7dq2SxtuL3knYmmx89P5f6nmFTn5Uvm2jUBuWjZLnxb4MARDwJrgXQkgACx",
  "key34": "5kbpkrVccBqUGYA4cKiy8KTdgWVWvMEEhCrekCKbcvh8tgkHkj1zwk9PzUaSGR7sGiT4mPZamDVr9po63PFeSmjk",
  "key35": "4XxVom2RkTf73w9h1sby1BUFVw7AB56Ugg15pHooByh7hKWfRiKXrgevaEbfy3xz5mkZ38koGkoZxkTSiuoawvjB",
  "key36": "53zfgGtpRk8Ez5NBd1nGk1LRW9iFxK5MfXLJTGScdk1ZKtZBdUbPJ5K7xwFWvdnRSXvyv8i4hZvbGxcdSeZMD5Xe",
  "key37": "6e8SXn1h3ZMw5ijFgjD7netkzi29BQFbPg1UsBBFTcRmiidUNCqJqoSaM2TYYfK8qVZF31exwpcEzicAV1vaY3y",
  "key38": "2yAaGUqeLWG73GduCLBSPtfdEUonetHwzkQCUHyfotKCVubc7DpC6GQBdTGhZ93zYVrVL2JraZyVKvMQtkb9Lof1"
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
