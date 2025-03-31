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
    "36hy96XDXofMf4oLbWhgwrPLWaktWxRU8Q7PJHD8NroZbW4Wa5ktvLipvVgFM3VaKqR9itzy5JqcAVfRcxvWAqyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Jd6aFh8ShY9gqHQaCDjdnUjqxEVqtp4ykVWTLEZXiFMm54xA41gG5egWcWyCXJvCGU46EbdaE3WHPiKEaPoC7i",
  "key1": "MhcmsKVToVhMs5WDiUWwUktRYrrY1DT9rM8NnViMf8df3Er6ERS1J2jjbLU6Vp4BvefE7DwdU1UtajPtR7KN7tU",
  "key2": "2S4oswcShPaF4SE9bWvJVWTyQc8Xe6pcHyG9XNkjiVfqVrcmP2jz4R6etqGfA9pxrXG4P3wyUijGphFgXHnoUgVT",
  "key3": "5U7tacdDchMvDyrE7Y5uxsfnXN55WR1cKAqMmEm4h5S3tqPe84to5AShk2mbYnxEPVQgPEfK9JHZiRrj4fJH2cQo",
  "key4": "54ELW7RHePPXe2gXRajvr3NfemWySRwgBsbJ8gFsfir1qZnQCp2CbboVbyLrVNz3gS8AtzfhEDou2LLVUnGaKbLS",
  "key5": "23YLBJHWiiRCgsWtro7WmTCyyDde6HDHaQhQXWQeCvjiqPqBFizwWPCHUtx4ttuQKkAwaR3kWKdpR7xayBtFR7mU",
  "key6": "4btAay2UUR9BDpKzAefUKgRN63S9MCXpp5sZxPoX7gd6pZacwWEjAk68neC5N3fwcRup3rRPzkW4VkQ7kBm2mrfR",
  "key7": "5QEuQmi6PnAqc1uf3WA72frXswhLJfKRFW7E6i7kuASV64F9bci2aP8ZPYj9vS355tkM2FPSgJ6FisYF5w6VhFYA",
  "key8": "4ecmJn3A7pL6WiLRdHu5LSC8rbLoMG2ScaJaGXcKhHSsCW77wUcf84E6CjC9xUYiPnhZZtQ9JeLXgwEuY9dewAmh",
  "key9": "QrhFLTnbdYi7fjXerjxsmApo8bPNrbyYz3sXmfTwxiPqvD5TH6c9HT24fE5uW29pd1UeKxMeKmaECbdUMjjvEwv",
  "key10": "4nQqDXFMEUgq3Abqr3YY8RmdTSaJPW363BobV6XGLLFswhXj3C7N83txkUd7tTgnrWEPNxskfyJsem1SrfCsyJJo",
  "key11": "LbHJy9eiAoWpi5mUEQuYsL4vwaC95qFoh7qZJ7u9stiYExvDigqjS3v5Rwdd3yjbi3Jf7u6BMAd1qH4V7MWxc7K",
  "key12": "2AWTzapt2ZXJxRmKoNY6bo6XnjWHnHEQUnECjiyWhiTC4UJaJuVDy1Y59k2AJxK8XEhzbrfW39iAquLDUezQdX7A",
  "key13": "3JCmp8KxKE1SgcwYpVhj2vww6KQZ4Zt2KY4uuatafzpxkSBKoi6Xmwq5jpbMbAqgZXQVgMZ9TmytZG9FaTZp2mU6",
  "key14": "39q6g5rpjhkEr8q6v8v18syrjeELsCVrCjQUddBxoA1Ft8DFc3RkGnDzSUAVHCZoUz5xpm1gu5Z4Jz1AVsjUFHZz",
  "key15": "2oU13ezu472h5RbgAi898ouFCyGFbd3EW242hT7pj2TacQ6W5S8htxGD1Nj4n4vbyEydKpgRGpvBqSuSj1sV7XgE",
  "key16": "3j9XMuet8wT1jQf3k2tRwWHqUQULYHkQ5Tjam9yidK9uSdMSkYTKgaBDuEwGBZ5CMXrfK9asNvYzsAWJ9Q37sDb6",
  "key17": "5jzM6vMxUyJpeGkPY7ktAmj9AopRcJwzThiAJYP5s5Ys5zStiqx5LYQ9dX3J7UoBZ5uE5wjjy4A3QNGgBJnSN36H",
  "key18": "5sx6RPpeZNxNwi4oWVzy5gyhrHcHHcaRDJ9n4BLpXb2TNPDVSPJz8RQagv9yHjb2uZPrQwLNFGAZsb2b9AxAwScC",
  "key19": "3a87tro4Lw7qFUtQwr7Y558UBYpXREfqY1EYjKNvkaeMzdFQaAjUw1LVrUXTobiSEvQh8LFeKVUhWnLEKaFSGcT2",
  "key20": "5AmqfF6CaaivsBa2P8pLiSB2JNa79wqZ1CMZcug7An98aXwxG5AMcnaphyE29namop12eT43ram7FfvNk7NbgDBX",
  "key21": "5fkajAAum65EKus5SVv6qKZVcAieqc3gyJnqQCQy4iLYHweA67KGPBW1BLik7PQzUy23YPNaxsgtpGWNVqouaenX",
  "key22": "3Vz6Lb5eBt1tk5WyCDvL2pABSyZCepENAF9A8AncgQFeqEv5KbkcT1SYLjjvh25kV55u3Lro2ypDVUmUzQfZTGWu",
  "key23": "65BKnVp7VBQrJycmVDc1GywthxPmhM17pGtD5wDdd73bXe5YbCBEDqRNB6DQdjaotQK11f5bgnvsoz5bWd2oAbkv",
  "key24": "3cmUyWTgCjvBcjFaFbauKLXuZz9h9ekk2DmDsgTPNvkAx1vN1ixW55Drs7u8pNqhTeCFVkMTUTVhZ6XfqPZ4pYGd",
  "key25": "2S8dszJgRs24FMiqYAyxq117PU4Dk5tsh6HXt3ux4ohmcEDPAotTwHe4biajMNkituCo5nREBtpPSvRQ2CcnLs4t",
  "key26": "1gV5hpuPzTeTSqnkGNKHy96sE2zQELCdNvBDvnWJZBonE4Lxf8WNRFSNsHq5gi9CoNEkQiYcpDgQLyoqXBioenD",
  "key27": "3oSsSKzHjf4b8vxHZegbtCoRTVpSRqrk5duLD6addacenMkwSuKqGPW86HRmU6zMZGb1DHLgAtZij4oCz1hbvfz2",
  "key28": "4iN7s7BUe1i4c3AwYNqAgTLF7F75Qkct55Kaz1Bhq9BYki2eRpbsErAnEFXYHcvNLgJYSjhfHQLhva1nwXX2ReYY",
  "key29": "3cuPcvXUoaYKE4SNyNNNmQDnTiUnYoMu3ndjYXmKMoMP5Z8gbVYmZQBn4TJutgtFFuBHFeExKh4qcacB1GHQQCqM",
  "key30": "3HhDGXAgHgb4sp8FmpHtbFJmbWgdy19TnRb2DikJGBBpifh5JRnJVE3mevRpLuoZkYLFKvhBVc53QtZQoW376v5T",
  "key31": "mWVeUrsGXV9j8Dbr6Tb7GsgCDpQq2FSTojLitBDiUR7qSkKEpNnXPZCL5iPooyUAXfayR2JutBDsPaSDFQSgS8w",
  "key32": "3vP5iN5QhAWPMaXMR6zC5beTG2LHNEnR8Wmcxc6Naah7GN8jbFT2MZRiC3Gq2BUP6CDAzxs1J8M9PNySLAed4EJx",
  "key33": "3doV9oj4qBHjcfX3MF7XJp9Kcfv9ePQpdKaKoVtPSVDnXsZz9jUah8HJrRavGbPHRshegK9U7uMGuCHeSMRiDVcJ"
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
