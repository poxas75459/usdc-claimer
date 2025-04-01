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
    "5upbF7Ld5LLkNTnet7R8EzPuGeaZaSJGXgQ4wM1Py23E7ALXVCbxW7wtS5haVLbjoaWz7g6ndUbWaDJt51r47HDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqgzPW7oaAHriiFDjMKhyh9ZqWnVJN6BZbB1J9DKE5Hn5NPeyy7FPNFLF1msi7rxjBqrtvkcqmxEGfJjztrgn3m",
  "key1": "3kXmeiokXQvEE1jdvCguSBH9SJLhYMCbDUYHSvAUBUEkitutrAiWJvtEPREUvJnx2QgCd94GCaWKHiSyYfv3LVB7",
  "key2": "2nvcABCUyJbxz1DKngiYU9pdmCXhLyUgX49J4fX94D1njyAX2qUnZFkqrVdRQkLHmGaDrRovFRRdQXxkK8qd3WYL",
  "key3": "5oL82kCndiJzjBcq15V1WDn6PGGT29CWZKULUUGBzB4i9JBbpMn6eSzWh8YVXGm4rqirdNYUDrmxx6krTBjFUY8W",
  "key4": "2Mi3qZAMRrERymq52Vj9swrNmZLz9j97BN87gEd3cKnntUveH49QMuTitkbxMV8u6kVJeWxd7xbfRJthjtWcGp9y",
  "key5": "5CBoexeg2ux5G3s5s9Vbzt1gmHPG8p69zN8d1X1S23zqXXeFoqXFQfM5qDfmwfSJLWAFBcrK3JZ9V8U9B7cWm4AR",
  "key6": "49LSsmiUiQeQkRfTVFjn6pegvrZeELGwamE2K6uxBzuEC4972Z2eR7DaFarFv5HTaYvzt5i7hmrSMF9GfnYpJRQq",
  "key7": "2Kf9ySuVRoDYTVBtpBqFUKYZSDUb1nDXnqm85nDJXuDwnuM65ppLqx3Zj2HHLaDpZQ6ZiULbLWU7KSX6PHGCrFSL",
  "key8": "vBkrYtHarZRgjR3tJyKsoLmbomJ3XRWQ5XjHC5Gb5rtfvnxu4E5zrkrDsTEpsi37tub3K6jFudxBD3BdjpXn5Cs",
  "key9": "5ByX46tLnUZbYoLkUzfBQSaybTfTH3yMEkCVBv6eEboKSvLjTeuQKrGGXgLd64yjsH2huZUyrZ7UDpz75DeAkdnU",
  "key10": "JFBCha6VApokJNHWY2e7JpP1meC2nH7fuo9AJoM2ip62yBwjAnYgsk5aiurfporyPGftQzkqhKuLux6s5615fvd",
  "key11": "2oVRCdJDPbBmwKL2nBHxaBwXCqwNbdgKsPMrddvzjansZ59ekDRaNvYYL6zvHrX5BzabruUTc6qaQdUEdfDY3qzR",
  "key12": "3Ti92GRpny1EZjN47brgCJk2ZaB3yPFXZUNtLu2rMhfXinQf7ngKB6Be1eBiDx51ZzWtoCTnnqBjDDfBnA2CgMAV",
  "key13": "i1DzW7qbqRTAxGXiKDCWm4opZPb4Pv9rbsXpeRoAf8FnLnKRiXAWRLpJWhrkwzWB2Q4JchYvgDExKDCQj3fQBQE",
  "key14": "2mMrZoM8KY1UHq5tLMDijdPzFehjTcpUEYKKwiGuJkxmea3q74anot2pZPRAiLLfktyn2QwdAsR37oApMXjq2DnR",
  "key15": "4NidoesiLHgDn21jhQ7FeQr5FhwvRgbZLy1WGWfBvU5iSievFFrohdFLvSuMwAFk5ccrGzy5TTRkE8uug6SN1Dk9",
  "key16": "257vNZJUKJNf5m9m6nBcZC1UwLgkQLqzFEvAPTQcYH79PRZpmyD47Ugi1cbiTayUdCLtTFLEPL4xhthpzZMsTaPA",
  "key17": "3yAk64xGKhKKqxpUxU3fY96YoZMAohKhoN5vsnnz9TQFpx1WcxJPzQbuzf8czrCdvR3EJ89Z9JMpJZTNMXydKLos",
  "key18": "4peJZckpG3Vf4CYR61oR9nHVfFrTkeBW3hQvyxUaVdNgTwwcsvPe4nBSCmGkYnWBsxDdsCehg7MXR2qQVbFtjvPN",
  "key19": "44nK9Z818WtRHhgRj4fpSVwPxFW965x486kRKKC5VF2sYhxqQeVLYVzZbrDLupGKQ8k22JRuhFYFEDE2NiGAJAfL",
  "key20": "VGBztrYjN6xhfqSUMhxSDLo6h6CXWPSsnPGGh9GjStSRWgXxP61kqyexE47y11NgNbjpN78ud6LcF8VVH6h82Jr",
  "key21": "5feerFBeF4zfivvJEGXT8DhkX1V44wFWB78czTNUnnoieQiFqtsbCXXUYbR76LaC7Fxo241RNzFwHuGkqxy66MzJ",
  "key22": "tPtwgkB9pe4Gk5pmWCPZReZ9gbyyLMDa48oGPEiHWAUhg2xFFK9i2FVBUm6BNPTX49Srqd2suG6Ur41NpkabB3r",
  "key23": "58BiNPEV1GhLNszFskE7bdvvqSrfKwGkHuXZBJQxNJdrpH8qtaJFuhBoptenhKu77AmqrrrqeYkZUAuxnCkY4BdK",
  "key24": "51krFVnFdZa1UN6hczyd6Kd6YqRNwYcatbWHuRewE7NYoD9aqPfQdYBSPbAscW7UrJNV21ZDrgzEFU3QKnF8uWc9",
  "key25": "QxEA7q4iNBGRYvKj8AH8Xgpd1nJbL3G9cCcLy5HYTiJ64Tw3NonuRKLGCYmrPC5umGRJDvhy9tuD2JzTaNCVXRT",
  "key26": "2KiJE7kN1Hr7FV6ZPmhgdpUYjzTBn1CvuRidvGB8CtC6DTrUhKB4GrokpSCEuhrkvHLq8NXFvfMmE3X6mk38QUzJ",
  "key27": "2hLEAaTn9qZkSz2eUCkgyggELs4CQAS7ep6xbExnV1YL1h2f4GADrHGpGbzAdxF7AvRyXbMoMaMZrVqsoo39YqBf",
  "key28": "2uT7QguoF6m26EarrTUNCrxP8TWHb4r5cCKXS3LtG8cmWgWbSYutNqrYLwRukfcBYDsgXSqV5nXj9Sr5gx5VBVxq",
  "key29": "3RatFvk7TTv65BVYoyfs1Rp5gLg3RvFWzUwL1vtP9hSj1Ts99B4oAqEA2YpaUVZfQ3NmbANXebqFofcCvMPDrZhf",
  "key30": "3wpi3EVoL9dVyUwcBrjsx6DA74cbjjy767q2VioaLWWt3A5F5qH8P4mRHzfmm6BEe8asPhgVv4jeGtKmhhETf6mR",
  "key31": "Cuv44peUWQmUqoHxvWuPQeGD1ZCA7aENMwk7i3bxWV9bhnropk2nisPRqikpnetcaUoGCGJFd8PD1YVfUGtdytA",
  "key32": "5DDdTUo4AwaUcAQBABjvXA1ETAHvEjCCtZypAZT1gQmRBixQUc2XfSVdy6QP81ssG7WA1oeFqsdcgBC2oMusiJz5",
  "key33": "2AdXrpqnJHsctudVY7CUhrhYJFAdETSDBQiTaLrSHHWSExApm9Mgw8kBgMkgvbvi2Kssuu7pa2BJAmnKvQ6Szrq2",
  "key34": "3yv6H3msyD4ki9UEkJEMk9GUbXD96oT8L7CnAismjiYE3rsNhCX4FCCRtejyaTGiCEFmia8hjZhjTB1pR2B97voz",
  "key35": "rzcwVPFTLiRqXxqV9DhAydNoCiky8f7k8xwf31vFsx55RwEeUqLfKWZBYWUGQiwoH8ZUniJzBpYnQZsHEHY1s17",
  "key36": "4KVqYYVPUbsvD2PQTF7f1uqoQcW2o6GEL7FYRpFTsJx1YFRj2MrQRWD6LUPuRFcCQzvxmKnZ6Pfsk8XrhbJFWgFc",
  "key37": "5s8B36BL2n8T9EWcb1CzgFK6GzmWRaex7k4NgHTNMrk7RzVL3cFYyPpp6AfSFLstryZGbJsq8PasNfnepq1Spizg",
  "key38": "3VJMVisNDkr9SckX6fpGVBXH4yRX41r9baFhcSvzQxcX4v2GNELWh2NsYvPuHxakKVWjHqvaAsbCDFGkBDhPDdGA",
  "key39": "597yFgzA5fBAWVwLatttxoEWPNUoyDBHwaaXtbJfMDTHXknWptcpqqCSjoDWXsLjC8UajHaoubXEsHqBcGkSF9js",
  "key40": "CARrrJ1zyhFvA5TJ8pQPsSCnvUH4YAtY2KTiY9e9rkhSdV54XegFNXLsQvBvk8uK6aufcoK5kDzGhs99peNyNnZ",
  "key41": "2BywyHHZSvhSJrrPEGc2sLQpyKuioD5mnmNFagKuW1Xxg1hQeRTeqXJoc4X9nu7v5kqDK8qxj1zDvid1cuugb3MH",
  "key42": "4YUQGWCZPfePMtuA6DjnnKkGW172QfYMWCCKLATi35NVScMsEg3yeATM8Wae5GeSN4F4RQUVUx8AcCuA94pErRuf",
  "key43": "2K6tdWkzkBBMFS2fcD3wXJgULkzSqi4W5Uj1yN1bXKQYVyz3G8F4kXqxnZTCLE9nh7uAy32pqVmSxy99Yn82YneY",
  "key44": "3zSbDRK3EEXQpfehTMf8YXgHkpFsMfmpEvTawV2a14ESLH5JwEVvrSLVLBMA7acoUPFNa5mcY18omrmTevhzb67b",
  "key45": "5fG9fRxjUJgznuQPMP5TPgQJPBmJJUopXm6QHDXPC9bbUscJAdX7Zx4dbs3Ub3g217oGvEPs8BGx8HSJUQFZ8SDv",
  "key46": "2w3FD39QeycgmTXZzU38Gt7ESgP8fRF7gV7DoWgG27bsnRjFwHTFdzVZEQn8TiN5VBvN1i6JtD7LW3bAjj83g8hx",
  "key47": "2YvgUZxpt7Qq7Go9ZwBpnY2wPrecRwbE1qHP6rzkWZRNQZ1GCbacTNv362VaZ8jz5RNv8kQU5DjQS1d5QzmVi7FF",
  "key48": "3gqFq5ygatbHYWtHs98WanqypR4nUxdec83XL1moHPpDmprRX1rsVSC6tE8cLJjFzv59mtFmNRLPRwi1KNj5M4df"
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
