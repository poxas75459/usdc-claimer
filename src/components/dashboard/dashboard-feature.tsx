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
    "55BJEY7N8k41Q6voDbMYsEYLG84WTr838Rsic2dCHaiAQiSAku5135cy1t1UzphTMZxpnLHWT2r1b5UfDNaTbF9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t7Lc8gG5HGXR8x57rHmZeZ3kBFL7oqVpe47GGvDhzUrbtRD56mGm9PhScxz5BM2pFFb9ZU8L7DjC7iUjbkcRZBP",
  "key1": "4PFNry26SyXyUzffvQ2mp8GhA4SMj5i5nfN4qkEGrrN7vwnuPEjiA1uF6zenKPjX4vV6gs7etHxnJFqccjxnonh7",
  "key2": "ZRJrTjPZYTTEL5X9TEP3wdsWSTHYnSQexu7dMzjThzCqmxDjrYCoe6srWfYnPeC5CdQD7VUfBQMbMDZ5Xd3rEh6",
  "key3": "2cL699xPR2fZPy2aKPWne4dMUzG3gDrbbGmP2GshRnbjwByY7fWYMii9niuMZrVWbPawJTMMZQHMT2mxuqUdp5VC",
  "key4": "5nknpMsz6cQ1fQxLqFCk6XS4dBa96FbZdnKB35SzQ1eVdaG5Sm6JQrrNEFM4KrCJ3RZ6eLMnKN5V96EdaBTbjzFu",
  "key5": "4WNfkknqG5mBjYhQkmdbtb8Uz1h5G2qxmfe6TofNLUyan5vhJaQYxHxDPYGNyn4WpwctBFQ7QmtFh8tjkvRUyhLh",
  "key6": "5D9fp21rDrqzPBpHJs97SJrwdR9LAX4LBusokiEMHdxiz2BkBnBhdTMcfqExmMv72eSpw7UmDeYpip5oZxybnwvG",
  "key7": "5VhF16NtJb9318c3MQtfvapCm5uSfMjWSA2LY6toyRY1kCMCVfnTDzzs5BxiVuh8T1Gvd5FCAcqtEmtgc4bU2Vfj",
  "key8": "2NXkARxCZcY9mmrz31WnKdYEPf8HBaAjJWoB7DVytVUo5xoiy5DedPAk2EUXPHHAwC8Pxg11teGXTjPL5Qo7q2EQ",
  "key9": "3fxHaastwWBA4Xz3aXBRTT75bENMDfGnn9rJnxdm7DpHhQdW6LsKVFxErmVbBd9ceAp3VVQmyTkgHq1F6yNPMDJb",
  "key10": "4gZmHqGSUswS3XrWaHndZYvHmSy26FjJeRbsNxjmpstd6oRLxw4T2WWW9dUzEJXGVUfURyKentQivfimBqtGbKnk",
  "key11": "2jgYvsawz5HsDQBevted1d6xHSseazbhMo77w9KMir7V1Veiysn6Wke33YcvQ9mtYUCEpU8UCbjcXN1KTvvNSgSJ",
  "key12": "45b9qT31jVmzTU8dpm7C1aMCpaBLvBbHvv95YWNiCAS17YGDTtHEsWRiHkPL8Tq91CyfKbDUiUWSRHomAq3mm2o4",
  "key13": "4ECvmdDRSK38DkHLZwCUUWSQSNTMtkbHYv4rbG1wLt2LsZ25pgjKBj7puSEh5UGUyxJuWSkDirGXG6eDcz4eHGqZ",
  "key14": "KSmzaVMVubPNyk9DYNYmbuzWChBhAvWUZqS15QEQRkQ7wF3stRjPVGAKMxvh8xJjukawdNZa5AhGRcnvMo6mkaE",
  "key15": "2BcLhbaMVEKvRX213APqDsWUrG9VG4n7bLA1Ph6ijbQFegPiXvqUR11HAS4avvt4bwdKSaLs2PdpTfnotKadmwij",
  "key16": "65qGquffXfysie3j8TLN5ZywPWyKcRCteUwwQDzRiji8e5xFfZSn8Y4MmFs6QNKoB68Dhshcr2WkVo3woqPCsWZN",
  "key17": "5tBNRbjeR9mhAf5Z1a5B5P1DVMonopaaJvh6H1HtJakxHCbLL4bjRFom36donMLpa8FLPNYBFj71ZsyEGTvDJgsF",
  "key18": "4jetPuVPN6MSvYrQNjWes5fbuMWukFbrmcRbtFUGyuSbFqL2RaoJRkvGjVgWvJ5hQsqbGDqxcsNeoyggUyccRQox",
  "key19": "4uZBc2XdHaB67a96GFwoBbgmmi6YyNwsAiLxuEAkH8tckknu4khbwDCRnj2uGQUYnhWhQLggEhdJrfgy8x1959DM",
  "key20": "3NabJAo7bkSDPv7d4Nei8oJE9bgSiirUNQEcuGfBhPdYknTNd6QRoUPyckAqwkASpmsaVooSsSvKEeQqrZNkD6wS",
  "key21": "3dgxMP1gm9keEPUf274dRzGXjppfcCtKy5VVYPLCCC4L9ATwbCYSVN6DviUDpkYHHxvnckrgCJBvFbiRuyLQpXum",
  "key22": "4Ff6AxZDbVxMgdssbyf6g26HssY8BQFbzPHjEaWnPm4kxnQGuDJKqVEoZfy58eJhoinabt2FCa1m8vhE2vC3NiEx",
  "key23": "3tB22PRoYMenjuTRZvmUQaN3pvNv16t8FtgJPfCJsoUQoJxWkbSvifzQfqXcpxWGRy3Xh3zpDnFrnFXrjJY5wDAZ",
  "key24": "3TDthhyGAZHdy2Ap8rM3yC3YvXxmv9NqM9YCxRTiFvwFqQxDwZTvKT1ChY9oWeiiF72X33X6978Lawy3DNik25WZ",
  "key25": "2j7hiUNjrD9fnurqieTp3iSgofkviC3bxJCTC8GrqTMjv4wPNiAfmen1SiKBi5VpzxasxWCR6UgL7KBHMB35iMX1",
  "key26": "5j8DQgdBxTDSJjztMZEReLs8iYWfxQKkLEYEoi1z9cUnGaUuL8VtYhhPtAta7JKZhLB1fqPmaDo1NS34AEeebSC9",
  "key27": "28Mrjk6oBGu3tpyNrxpg1Gm9p2XqhAirPgZy44mnX3RAMLRy6Mirkx3Gictg73Cjn8CD7pNQvfsqda1Vg8xzyHEf",
  "key28": "4xU1PZkN9SD2D5JXdjb7MnmDMLvoS6ax3dcofqZki1w1neqgsHJZiR5GC6kPnfFM4fYT915CXjgZG81uWu9A3PpW",
  "key29": "2LriYxmQBCreCRD2fWDJYJXtfvhdjg32ZRTfwpgpuuQ3dxqSFpN1rr4vxp2dLFRPrRLqjNnP4y8uTwLdG8oekkfG",
  "key30": "4E26umnj4sEJNuL9uEiq1W1tUeJ1NDra8WBtReXxZ1TFodHGGm263ZEiNvNMaiWNqCGNTjancXqzZS4p1VRBkyDP",
  "key31": "53VkPf9hW74KsvwoLc2W1dH3s7fKuNjNiUWbH1tTSsv2rusjCzL8VaPhjw98eK6zEYgYBUHsoKCA3qACfPBZCFiM",
  "key32": "yZorAfCQY35nke3ZFagNaYKa59B7oCsJsti8kY3iLGmbQMAJLf2JBbBWCJAVPX6D9tcVKHHXJudUrqiq6MavZqj",
  "key33": "47Rkn1CTrfdc9Z6EAkdPXy5nJ1s4fkQhbmWqC1HyEhRTFMUcxXBTLqPQ7nfgajvbLNqmd8mtbQQFpfYFTZrmYHQY",
  "key34": "61LfpbYaoAeA6XRjf1NrZRGiTCR83hZuj6hfg3qgLp6uzsXBXgFpxoAc3R83b1g6mtSga7qyJSPNoyJFs1gCUZHc",
  "key35": "32YwT7cCxNAnahk8RAjYD9p2BBK3Toh7aDZe4Dvo3fXYHPQZuxNFZfuUjAskFtshWw7Mf1RRKXnnJMk2HaaEMHHy",
  "key36": "uCrQPTTo5iGvCfR1F2UZRwy7ivrWNNSEpYVFmenqCYkCkjmxJQNcrTL61dbG7kxBKMyckJXFm5eTrBVFahLYgCZ",
  "key37": "5tWrkckWegGacRBLX6J9WPYF6HjNGc4PXLKWpndXeskFfN41q2qmU5UXqPAXitoK3aUWkcH1dfhqBZ8H828q6bn5",
  "key38": "4gniqYws26NUeJT2Yf7hnmqyZeZ4ZFMB76GznLyUcpTaWRTpwLfJqkrbdaK7TNLQPAEENUmCWR5tipJi4mMEEZNc",
  "key39": "3evWhv2eAZXX5QS3wn4dV6TPuHHecii52dBmLH2DBk5hLEpa5BWCw3PvdDnt2bWEcfv5VeVoYhzYbpd6kAZFusJb",
  "key40": "294Dy2c1K5puMbbHTBxDkKjpCVdUnKFghkeeAv9BwZeSfF1ZYxrC4NGgTMYrvCP1uEXmnoDcJCtatoWJJTQAw38U",
  "key41": "2AMxhkCs85539mnaTz1YgErJidCrLMffdFSrLcU6zH82ymYE2D9AU5cs8GEvBVY9rSvKwbP4KBn2MxQvC16kt3bg",
  "key42": "32zBppr75cBkYpxH9YL1AJt7jLrG1KaUgU2P5GgVrUq6GmKTqULQDnF255Lwdt7oywXJUiPRYHm1GnQgysZh3SBd",
  "key43": "ypfJmA7Vz7cCQSe7eQndpYfWkbqwQqLuu2PPJYA54KpueFWE3SVQAbkQrS6waiLepneid5s3Vhe1PhJxYKMpxgA",
  "key44": "33NRexhX8PmZN9Ks5mcDAasoqEpeJ4yfRsfv6qsqyfCVYDM95Rgjm1GUPC6CYjTTWQDyND6gwNwtWRKhGXivBEXh",
  "key45": "2NsBaaZHFCKNnMVJKAqrCU5Bi7G7uNx8KK7aPidLcaJnen8htKUvpBkEWiDdUwP7FXzy96HRS6Z4ZVkJHPLRUtHA"
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
