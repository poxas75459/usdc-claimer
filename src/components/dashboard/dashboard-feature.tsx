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
    "2UU1TbDzQAENYQdqahjv1FHfExkwpzw6aKe974pizBuv83Q6vVcpSYviPackFiXCHjAkGXFgzf8xxabivKiLNNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kzksvXZqtAdMwQ24HCmhXZV9dU7zesnUDFpTYgUQVf25HfUGddF7gwAn6BizMqVmUHpsj8YfCGcNgTr26U6b14u",
  "key1": "4zdJ6HwJivrsU9M1Gu1MMHkUVaHLthx2oDr4UqtvdyfdSpedgKGLHRbCY1LyYreZFXjmM3xyFqdXfSzsKBr9N9v2",
  "key2": "2MsQhwjti1mh2CvEWjcnufbXj6tzZ1KFoig4aohwiLNGxo3yLWTbF4g4kDywRcfpmw67G2E22vo6ehe7jagXtNeq",
  "key3": "4wAKSoygR9irRmqcgPHDp9z9vvRXDYuj8PsR5rSMcZX31VPxdBmCqLJmLStpedEdsiRQKGSPg68tEZ4Sg2qiieVm",
  "key4": "VCD3pZwHtkr2bcabmLkZjvuwPxyP1NQKUyMnCCQ9DmEj1rNezDYSR3JZ49qburBD3D32gm7ec9Pv9HQkc8814NX",
  "key5": "4cmHEe6m1iyEi1XyztCDCNSedstAjwNgHCDucX8sj36fnxg17WagLm5CqXFGWrAWjnKXDJDjMtgeohgzf5iwMDak",
  "key6": "31pA6wqRgoZDG6BVKzKtufo35AB49ATXZQZh27aVesDHrETbUwubaoewJHbB4s6agAUPjAyRN31pAg25HdkFCtMs",
  "key7": "4JwcZPEGicb9NNQiDDK6JkzV4m1TMu2eFxUWLb6hVZfQGQH2PSWmFvV3BRZULAdvwAjiy4ryuiRqgWFc217eWUEQ",
  "key8": "4AE8bddXWDWYpdaH84R9fVtSrmQe4sZJ8sBaaqiNWs1VdnQ17dVu1iMUhphdqhyxZTpYsfmJGu5ShTxRJXnM9sHW",
  "key9": "2ycH27Eiws8ghcijjAZGBaSD3VHwJM6BHJba7KWjT3rhfZrMm6jvJLQWuFuwV2rrc9kkJpmU9oiYF6XLYpwVEphG",
  "key10": "2Y2qDPMS4K5BhAzGjrj3ZXVvo92hNw5D6dToE7fDz6U1DsycCPGpNFG3swspgrxC4qfBYWBtVjh7SFAVsLsKE38V",
  "key11": "3h4B4ePZigDd9fhsXAoH8udHQ1Av934QamJgu3aYWFapnTUnoL16vhyYRLuZSVMvNxg2pFNLCB1kJoDSsz42FLcT",
  "key12": "57eopzSty43bgHj4ahvtmCkGDVVAov9BwCagnF2NrMaSzpF4GGduveycpsrAZzFT1qm9FGowgtq7YLj1XdTUSAo2",
  "key13": "4yUFSYxPgHH9FYM8hTmtPNpFgJWMqr1srg32eSSXgR6X4SUiD4BxtwGs12Wzxnh4e9D9sBCDPvsLTPunBucGsJLt",
  "key14": "q1kT3CTk2eL243w24ezZJ5SwX7gDVNgu4MXfbrHV5GgM7Kreqk4UH5N63fKPkdyfcydveBxDWm8jybnr8FLjx7X",
  "key15": "BBbGh7D3s1TpZRwMCkzLWXowwt96k6bcQK2vUiHnn51rj4nLARTnXiEWgD4nKoGStY8jkeqAaRTAVYG1qt9xh8R",
  "key16": "5zhPXX5971NGstYzmZWickaXPTXEn7n6BuQf2iUehAZZ9M713cbQHnh2BztnhaTAHvvZo27CQ3aS4XCbAx41CKRx",
  "key17": "3j5piMUDceSUuft8arRoEHq7Vq9uXhFJozWnaQzuTu8eLLGp7Y1xr5fmiGehJMSCpEoydtrMAxtAJ1ao7K9imH5",
  "key18": "2JubitnirGSovM4aihzBRZQcx1pgTaA6FDZ6Kyj5RnpQY1ZkvCFAYjFQHLfErc6o6Za1bRUa76Vgc7DTSeh2TtUz",
  "key19": "4YJ6F3kFD1be8PTbu9V4BYrmdCtFHUep4MKVrnvQKfCh71sk2aUwbRAsc4AvAWDyNSzCpHWnZYPjcbqtx71J7Q7U",
  "key20": "3LGUcoarFgBNuKdrrsQoxZci8CuJZMduBapzU4iQDs32YFnCVJCXuA8h4b7SCEjmY4KfBRrsgxUfZ6wsuBykp1fn",
  "key21": "3duBwjm3ZTHBTdMNHhLCQBGNuu3nrjLM4447Khs9bszW17env9hnpfwPpS8FEuLJw7EsGEFW65gaUqPpSTyawaRS",
  "key22": "qhtbgujcNtH4hvPUjoX9AT4HyMpj782eNJnmAoBAZcASXvLkjfhE2TvAmcr1ZiCmvo4AGvZDW7sgYoLBLSWz6CF",
  "key23": "4fiTSVS3PiQikGv75nhoEMBR1TYnJzGi1HBW9yN9riJHHZxM1a3ad39eg26AVUfv67mBigJwCUgZbCAgq1uUvNAE",
  "key24": "4ZjPnbJRgzSSGGMuoDbqH5gt8nikTQ8y3reR4pdPU4EVEa9Z9Sj8MKPjpzJT5G6VkGvp92Mrv3LA1qcQUUqYa94p",
  "key25": "4iViHTfvKfkruMAQ2Yff5utQacbRTPFbFUgh18Cge9Rm6qnkRHZ8k4R9ncdRRD6PBJxVDi1kYjTRMRSJteH6iznD",
  "key26": "2wSPNGJsiDCPYNtruQTVThwwrUJLpJmery1LCCXnZ41wPSC5MvSrsUFUY8NAzJYNQbLZzoZecF9ABm8H4FtDx3dX",
  "key27": "4nNGBtVwyrpfFowdGqw2Dj7q41qsAg15uDBdYoG5oTEWCFvpWTHjRSR87oRCPcCdXHtW3JkN6sgmtwqZWYVqLYPK",
  "key28": "H4LTLiuTFgPeHX342Uwj4vg94L5eBnHUTS6BtSdpfqPMd2h7raYaswRQkEqdZQGM7DrA2z8NqLqrme2eBY357E4",
  "key29": "5FReWTHdUfcJ1bN2bcPgikmkpyAP6QQC6Gfa2N9CBnKLvdJxsj5RqPuFju4CPJvm4giFnqKW9Pnc9bUaBxLHD1nR",
  "key30": "3jRdTv5bRz7gUv9K6VovK4a3Hc5zZcfKqzJ3ex88iGpjJm9WYR5bbKRbaoWHNqDFJLZ8H9zhS7Zdxxz8HJFG5Jhq",
  "key31": "22KHwqEeqaXZwcP7HCQQx16xZhKC5pyGt8FbDFpMVQ67VmcmAGij5KNEXwYnsEeVv76fc6GqDishbLSrxU3LRhLB",
  "key32": "4CHx5X3FGyHZxoYwH68PLmjx5ngppRheCeB698ei6KudFe4RwFFruaETi85JsgeMbWA9b4CgAfRE42V5F3LvXAXV",
  "key33": "3uStknK3PAKsNcdecqNcPtrahJEMCMsEfSZRSrW3rtrFS7KveWj4wTgs43HyFYVhvjytZ45JGH1pMGwXy9atWao7",
  "key34": "2opLLieXiSbV7LiAjoqEXcYyxr2mM9JJoRga2uPnozmd5CMHDMG2ua3GWrXHNvV3j7Gztmf3fvUCtyuKt6QRddBn",
  "key35": "4ZdKXsBCQK3LaV7qx5Tzw3wMm6ntcLRSoWn4wDc5QpJiXUzGNgX587kDpXiJv6a6dgSgo61Y9wZUjPRpA7bwc5Cw",
  "key36": "3Cxne7YN31nUyfmR8Cf8JPzgj1grMtX4UqBXTi85Cn4cKNttCfzQ38fBNsbYVzExfUkK2yf3SDRezt1rjeLujH8Q",
  "key37": "3jQNNanZ9rU9bkCGNwmHowj65GJQBdTD3tAQyFAJLV3a8uDKjyvpAYnnNP3AxK7SmqFpwBorjeuR6pfYC7erMM9E",
  "key38": "42r8AyegDus1uQEWMQ7YvNZY1z2wiFpbvxa8ZDLuPzP3N65oFZMtZsBYJwBjGYBfsD13mcZe7UuYKJmgMCrq5epr",
  "key39": "KpQFDa8D8wCzesDQUutMZFQpwDhXpCwehEtQh1wCSUkQagKySQzLtJSHf26sd4dZsRPC4vZBeMosQ5E57QC2m6m",
  "key40": "3h2rRkpuE8FSxnkwfBHb3C7vNLHtrCLSZtGsvBagRfRjtXJPXRueYpznZ1LgA5ZByGy4bDynp4tbJfK3HSWcNbTq"
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
