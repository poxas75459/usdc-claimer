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
    "3AKwJNBs8SkP63cu68bMTBgF5i8ExXt7SYLJrYMerXsog2EbhYNS7CcNmjDw7KgGpbKYpjhZzJAEgtoZ4UrtUYpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sv9F2kgdHd966Bi1AKaUnd4qwM1vPo8nX37fmu7tnb7YAxg6UPYXf6imiJegun2ss6nq2yBYLGUEEHhfxaBjca5",
  "key1": "3kGYjeNE884s4MwpS5Jk3d7N5ey31QqCBei4PXJT18F9rMvBuNKpzs4R4KLTqMWxUn3MzYSZR4RyAHALb8ui35c6",
  "key2": "4Nh6V53nw1r6c7XrUXMtPh3JzCbj6tYcEj8oghAysWW2xRdTtfTRX8ndomkwwu8Y1ujmswUL2eBV6zqjozzxHva1",
  "key3": "5JM6UQSUZeB3RMhRGJr7zAZN6Zz3gh4FHYFt9RdpgTVaj4wcapqHPZ5efvR69YqUj97Y3HZ1fjDTAGbJFzYoVfDG",
  "key4": "4n7mLbbMDgLz7sfSfygmoPWVEmP3gkCnwSDahQNwFoydPrR8WNfJmGxRrEo2HBrUjp7vUtaMHPpZyAv15z9cf3Pa",
  "key5": "26xMNkv8UvmNPco2297C3U9DinL8G1sunJqEcRjjJvaoyrrj9NKRLFR16QQU5767LvnugjbwUb5qLER7JSqEAw3X",
  "key6": "3WwP2HmhGGMfJoE2Uo9917QjShF4mibdAEeG8TPn1SCmmvBPLFnYQBpa4796zwATynJTifKaEzAAw7r19ftut4Pr",
  "key7": "4K8myHecywr3UyoswhkAFTRMfjGg1xPz5dUAWrci5dJq48kpMrdsZFPewtVjZJ6WkckF3JkNzghHENbJ1n8Ld7R9",
  "key8": "3ASDcVePfWyEq7NPe4ufhsmuD7hU23GTggpMf8wSu2q7tAKAQJL4fkr8jbaiqgExCpkBoFRwbuSmRaNotD2V8mvr",
  "key9": "5ouxUePpj82E4mfejzrHh2S5ravVHgpQUNusy2oxztykSbdH7HagFr1SKXa4emYB29yuysRdUGkEkcs3zKQbamDL",
  "key10": "VXL2oqyx3mkinrCLkk7ssvJmjWpTxS1BSzPwGA3ShmDHLZt8QjxXVyxy7C1Fx3cRqJNLE6JoFk6UD3eFwkiar26",
  "key11": "29SBuK5zPRFT2yf4DhmAHwNvCksvbDrzbz8geRZZZbwTrW6mPa2ZRfP2r4h8wS4Sz7SXVspX17Z5r72JWpAe3b7o",
  "key12": "jd5VwbM8EVkaofckoztCuKTXC2LiTcoVzbHonF8my7794PPANicXEHHZcobHdvqsV2KJiC1e29yoqzxaUxpVpTh",
  "key13": "2H2WBsGStsTUTVnxqL6gvuPsex7hc3VFZcw4ShRWXbSN5Di7aeQxxBSauCXr992jpXwTPWJaqP5rAXjAKDVughAm",
  "key14": "7P6ThQPVPb4EMwMmoxPBKiDkbqRLAMGbm6v8Zp9ZG27e9N11Tx81SV6BP2AKtcrYrAk6arLHnT91iqZaAASaffW",
  "key15": "361it8129zVWqbzSzATggdC5Dba9qsMQBJdNQTJDBtM5crVFozTT49beLwyHFZfCyPZTDZn4Dj13BxPPNgPivP5Y",
  "key16": "3cG1mebWjD8CcXgCssHYANSn1nn2o3eRtCzbCKTMkjHnLHySitXbUxwKN9qC9oXq6TVUSnAcCBAhtd3kfXhoxLK6",
  "key17": "UeSEUbYFzsoRxvSgTnAGAAW9H2719HWfNC4LLe4WsfjqNASDtPw7giKQGrAkz6bWZyzpuBFLaVuwuzVa1NB3FVv",
  "key18": "AKMg6kp2aHQekJCdeBy1Sm5egbuYf3EKyUR5uUEeaUnoEiHx3mC5AdMptdEm2J6MEsSSfWsxa9BYH52q2k1Cno5",
  "key19": "5FTA9xUinxBfjhEFPSC7Q3HepcwJxRtTcSwmTgtYGXXkCZJ1eGeu2BZmTTn3p1u1qaiS8C66VpjNasXaXG9R6SJA",
  "key20": "3AYdgFnwMpejqhxmXQzpX39LgELR92FUYr9eWK6e67fq3wBwZ8NfuQjCAipaUQgPRMvseFcGFx9SspT7fh1VRuqk",
  "key21": "5cdy2SeeyudWvobd6Fpm5d27WMPzMjj2XNFbKxJVVWwbrLWc2CRXQ4M285PSM2FaXVmFUFX3uAK5xAtddATbmGdY",
  "key22": "4Bb33HjdU26DWooUCDJ8QKFfBompk9TtH2WNdMZwMFzsNr1gu4kMu5HCPMD3NR3dQ8hFYhQMd4MuSMfVkdpaqtr2",
  "key23": "5gTXzKqy3CbQq4G78ZmZoXDChUin82JhMBHewUJ5qUNyubQiqADmzNSE2tZ76akp8A6caDH5SqjzKFvTy99YKzNH",
  "key24": "2dm35qzbdCZ2fHEZ18PrYvLee5epeSL3tijtVbYcQm7UkfupGTCkhqGk8zXnGQvtFwrQYbQamGhvRGyKhqKBQSco",
  "key25": "99NgPnM7avvrLyEZK5fpxcduuufu4Boz4w7sy4FLvRqRD7cRKY9Yixkhk8ZuDxyqshxEBF2z9Xr9yKpxcmyq1Jr",
  "key26": "4K9nSmFR72ftvWFzP4QLhwDEGNNjDRRjYLtuZojEcDFdkQ95PjoaRKoZXAPWtrsJbM44s6n2TtWbxkdKcUApZJzB",
  "key27": "M3T1w5Hz9TtdnKzvydFi8cYr47BRKutzifDiHPMuWy3P3KjJqrWSJ7qbVqv4KSJ4JHRX3nKNMpxajb2uogdFYcy",
  "key28": "1UN8XjR4Ty7KfHh8RUtgXvybugzVomBrzQfyG9ovyf45aMbbJhm8eHrwozfF1CtWWqap7L6cLGa1wU1rGfFoJR2",
  "key29": "TtAFSp2wi3hDVUHbjT4ppZbb3KKZM2sog8Kpwzxj9cxfjSxxofsegBya6JwUQRpfwn6MmEQsJAfh2HUZrgfzCGV",
  "key30": "2zTC9QdisbNGV6pxYJxA5MEueL9TNX1i5jvkPTW5X25BVNpFURV3BTJafgzUYGCc9Sr8SAk7peUhMCGn1N34RoCW",
  "key31": "5ykbpEcakLu4iVeLpZwJk2qPQKYE9nd6M2uvwNNJKFGHQ4synw6Z8PFufLqdSQnznBTBJ1LYfmGA5dRs56nGAppr",
  "key32": "2jCjRK6SxonpG37oZ4MmCubT7HDS27mu8vKC6gMvR28bpa1ZQ7on6ZhyNKtDgo24wpmSDLwH7NN2WPY3AiMmZ5rB",
  "key33": "2aUeTSqgVdipvMjCLwL6sV6F98NZggrLVa2GRXNLPxvsrHun3FDZipnzogpem7udQVcNFebmXnfcBWFVmdQvYbQ",
  "key34": "37JHLC6Nwdrh7uNFfrECMsWCKWNLs7iM3xdZhpcN3ywxpEaCGACq2JvcPaLaJBSVDV4ccq2MpGtbsnvETMysDYT2",
  "key35": "4TS76FiNLHMDg3p2Bj7L2FNExdPRus1sWgYfsW5UH1rZtrT117va3Uo5jEgcLYKnKGMAZJFJDVhK1VUw84jygt8W",
  "key36": "EABMLv4npXsfVEVLPQ1naW2HXctPwDKMpWCSZQMrfH5RvSFj2Ut1DWRzYMArZcMMDmzHbihJqFtWDrmqGtupqLh"
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
