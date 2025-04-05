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
    "5dA4tFgMwF328FUXXk4RTTeBJwvLVuG6ggZ9UvqDY9qsvVLzLHUN1ij3NpwgXnRAwJo7kpH84P44B1GBudVKhcmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jFZ19Jgb39qJvPVcpAdPKz6MQ778yb9QaNPqQp8Z2Q4rXE6bnedyFTaZd5T2rHka9bduGEFoRaJKJfitMdSWQ4i",
  "key1": "cTNiju1MVbo8S4PrBdBeHuiJAAQF3HvBBmpk2bPwWJ1ZXdZnf3eJsW1GyBrJL5QhWz22ZojMWMBwbAJzphiUgiK",
  "key2": "6cKJewFbaqMckZya6dTQixWmBFmHb8u6ECkZBfPSGngAokX7ppzmggbXzeBJDjEWhuxroVVywrMjHkPgCTmooyG",
  "key3": "21gB6Ea4ujWVEA85pmFruu39EstMdYKLu7A6ovmEdNAomA7go2U5xN3EXJTXcrBDKb1nBRn1mJxbbjQrLwA7wQX8",
  "key4": "5LQDC6ApLcqWHhjtuGikvFdCTe8jVBZweP3H84cnsZFpVxJ9n3s6BACYftMTSzguyzCZFqCpoLeBPrdAMGTEyaqB",
  "key5": "64AzpumTfhwaWfZX5PsZLVGRDdEYNpbfHAuw3ubLAEFJHkGsqd9xdLmCSsfTkDb3jcirxuvsPhcTSD2iaT5SJkXU",
  "key6": "4V1pv5UeE6Gg8EUW3k5mCi4nbAuJBDfkcpU65kk2f9JwK7MAnRewS1nfSHB3AZMtrkSoMjyUWSpVxoVC92MbG8JS",
  "key7": "4yKg8s64EBXcWmpPuM47wQDGPF6B54sC5Kf8BpQJTDNyHhu7JGgRxeLgMgCTnkstrw5ysL1jDfxrWm4duX3YqrJM",
  "key8": "4GMVjhuEu6ZiU31JZAPbpbnvzNoCcZjBY9bDxqJ2P9myFeAAVEe6817PMbMPyTwe9jMVHac92HG8aWGEHxm1MSKY",
  "key9": "652J1APUw3oAFEMfAb6jFvpHtm1hYJWvGcugQajBxRAKGy5gN3oFDYpoxRkvPB12etF8Q6ZfawF2DhP6EdCKZRjx",
  "key10": "95aApxpQy6WcHBcHg8nvfvT24rqENrezTjcqimFZFBYnHL6BxbChksXa3uFSWNqJj4YXaD14pddmuFQTuSs9ufT",
  "key11": "5jyXCEFs2xsYcnGmFdroaYUw3JeyjewTyFaRKUr8aTqne5ZwGMsfs7Wpw2uw7mZmeheLS8vd6CmUHNFgEGym1ScV",
  "key12": "rVZhhY8GWUsPkEaUXfmepLzH9K52YcfxAMMMDnKpykG1A16fowYUYNfydCf3APJJBDXRqyBacCqQy9Bb1tkpXbV",
  "key13": "FR271jbzLqrCbAM3WCf5FaNxBAuzJYoP63X3MdDFdFeQV6niZCh6yJfRxjTZBk7UU2XSeHdwdRkWKdZ6dax6iAE",
  "key14": "5jzFF3v5VZUStg3VMFfR2GGiaJuoxLUa5sgnqgmGPjPeS8GTYZEEYeiqcPcCcotbmdFZVpJW4i91nSwKMjm2WL2T",
  "key15": "PJ4LLitWTuUmM7FMUbb3kXFWsKTrZbN8LJ41t4NbE8i19KXAaup6rwJzCNKuiXhURpiVVv4AZ8ybYhn8j2KJ8XS",
  "key16": "4vGpzrXYtXayFV93CN5XvSkuDhpMFjwGfQdB8K81aX6JxZmyHAZKCmoGsF2WA8ravTLrBCqUrXKJyAhMf56dYkMK",
  "key17": "38o8cDVczX8AnHbJkq24ki7wsohW1RXXYbDz1hbkjjSH2ED6oiYM4u7W5cEuuN8H1TUVBQAhQDvDdAPKZXrzVoQk",
  "key18": "E9zgHC8CkCADt5hvtXAWeWMPYzvy2QxVAWSw9pKj7teohuPi478vqWRPsj5hXJ2dYjDsTik3UStQJbop3gXyEKH",
  "key19": "66P8AKxobR5XHQrhYdQvNHXJvcMc4oxvMnpVejejrqcSGzxppej46wycr6gKQygjKrrdTJYL4Zhmx7JAf1uPuNET",
  "key20": "2pP1gvYKStxY3ePrzKE4uxHtEhn45JA2XBuD2JjJfZMqqXW7arM1mXHqBr4VcnqupBUFFUBfipi7UUjCc2wZEZtK",
  "key21": "5HVfvZwrfX282V4bPYXUpaTCKFMSA4PJpHV8s57C9YLVy7TrCTD1VK2hs5j8odCuey56u3ikBxqtUXBBanyJyUuL",
  "key22": "stDRtPsK6psjwWq5vQMNMJhcByJeS6hk5ox2XLfu4to9noTUJU1bkoRGqnc4w3EMNHPHoEvF3o4wZk7u6MeD2Bu",
  "key23": "2Hpg1NtWdVURiYTY6ZvUQPwCVdJjvnxnbbq1Xg7DDoUdNMxa38pBBcKpZwmg2QtUXCmMgxU12bhxLH4WAnDJwofJ",
  "key24": "5w4XLEAUqtDPbDza58xyxrj1zE7PrP51n7HAX6ojPG4aiP136ZR76QzmhU7qJhSjks8qk4hFDZZit4SY6npL34v6",
  "key25": "foSmpcvpfWdL8g7rAee479roWGCueZMnU1wpE14RkhyYj1URMn5PJG8J7chDHtifie5vh6RGLjpNQyyzMWD79Az",
  "key26": "3JPxXqansegXdSqJ5gLqSe5usRd5ZfkaRuHfyyoUTdXDmSKVsAc7YCT5vvXMMwJ4722vbL17CWshPxQuWV7c57nd",
  "key27": "5HWDKQ7bd1jPjUUMqnJTAdWHUoarUhCPSyWbvGjWWjRqmWAXLEP1oxNkQWAypNVc7hQtT7x2VUzXGrXEgv3GCeMU",
  "key28": "4TWUcqxMXCrNWmBWDjXcRZ6SQ1jM8cXmowkRBKNoR3C28kEgnV6zutnRdRLS69UdwTUU6dKa6zuQA4eggof4sDCV",
  "key29": "3pUnh269QgYGBAbS3bxGsRAWftQF5uZg6PheycNNVLwF2SGenexMWg15MsEd2TnhDvn5xL9ejS8ZmJEeeTHYsWUg",
  "key30": "2DonyqXd4M6zc73DtuDejsnPiAKX3b36Wgeyab6Vkd3fxtzKyuapc7Hkbf68H5mukbJvW32fGXjK7jB6y2qtJBFH",
  "key31": "3nmA1EQMpWDwy6ddf29aRV23cQ2jXTwxj7vb24Djjc7CPCgNMedFWXZvRepWADTppBw9thYi1EMJzx5F4ojwgWS8",
  "key32": "5i3FirnHjpJEbCngtrmFXemkQnbSu7BNuHbSdD36V145oW3Nxs36JQHi5wavHibYmpg1ADNnXKA25PWGVetU56YL",
  "key33": "5DwqCzuno1AwC8sVb3CcGcW8X4f9VTswT4ehwUYRFz4uSny2WZztUCKrUpJBWs2vihrpu6BHYHKeHUxoMaJ8TrSK",
  "key34": "29Z6qkdFs5DnMVeLLJJ2f9rYHGLswsTVpa7TXgJrpwKih644zM5qMEDELyRPpzwuk1YKQuz57aDa7PgxAHYTn6Gz",
  "key35": "4TixVgrtGzghYQK8vTWmkn79V1zyjRkcZgd882T42saTXCG4uhvNkSJmUZSVESv6RoaAzG6o6qYn5WEQ9ZPTgYeg",
  "key36": "34LL2XWxiX8RPXc8k8K3kzpeVoCJusrWWuyofPL9wtRcwdbzXh3qTkMGqvYTWZt6Wx3WfDmuMzgkiwq9rXUFhHKg",
  "key37": "5Fr5CaVdgLUxbnxVa5nfHALgbWmgi5w38TyLWaaAARLdc7WyXTcefXFQ3BeSAQTeo2f12My6AvPnZM11uVVe4G8J",
  "key38": "YrvnbpSHbqKakBd7A3zeLPSCBzYCRJhXyyEgmRxoZ73vk1SwmuJcNv922M8n3Dy49ZunZUWrhwUbnZw8xyaznzz",
  "key39": "3vjaBvxbXqS1fz7Un3bpx5t196P4bXhFf1XKsnRfe3PL5qZu7fxdjcUJ63XPSAyAaXpaFmJP5gcLdg8yjGLRd4A",
  "key40": "3xMFk2etdGF3kUy937GjYsN1zbQ536LbD2NFU2VZEhpYsM7G2wGNyCdpK63ex4BFt7dYogzt4brVts9c3LdHapoh",
  "key41": "24VWwENxJYWenjVyhqSDiihAKXTPxb5V4vKdwpLGurorXGC1pJTigjMGNL7LtwEiHxrcg4WycZbPLnp3NscEkJLY",
  "key42": "3bgYVVpMckfijKpW5H3mzw9FvQ5nyZdM7JLjZSaE6BEDmAGmGfiJyjuLWaLX7Nhxq9u8ioq2TGi7naYbd6pDiVir",
  "key43": "5DV1ccBbTo9dX7V9Qrb2smgheyvXoV7hQVtoAiB5AYVmNpx67X6NqogbwHGERu1wVt5BowZ55nC2TZG9Ay7ApQuR",
  "key44": "4kP58xS7pc4sw5Brb9WSYUmxZduXX2dCJYpt7Fw43zthUVCzZML2giTbqSdPnSzTWWVryNBiQNXWrJxu35b7ZkUF",
  "key45": "4TxZsJB8V3qAPbXT7siZzx5WfuGtXCZBkhSuVEHEqW1BULAJRgukVYF8Vq8odakCLKQhgjGfApzLtTvuz6vd8XHh",
  "key46": "2De9bQr1CrtozJT9BB8MyRpr6ikEg8e91MdrEdRkM85yC1TgfLb2CokghvyVocvtMpuD8vNS96YQXyLTcKu8odDH",
  "key47": "4eTu8HyFCSUeR7nLZE6Q3ts4GDGb6buoZwF6WHVjJ3wQMzfktwiCpGMnkERZXJ7VAcASho4dhTsQHJSJNFaGNUrK"
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
