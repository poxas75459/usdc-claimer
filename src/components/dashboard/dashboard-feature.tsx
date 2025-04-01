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
    "3BrhKZt8kk6T35oa7M4uYqLst4H8SwaC5Q79XT348QHFwdznH2EuG6KkGdVmbNihEKQmXqTFU1XscCqVWGhPsLGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "swnYsBqQ8x9RsAVJVYFVmPq5tHjkFajGSFVCb3n9THiT7eUEf7fHPkgBR4uEpDXjYTWXAqGdmz3wwqmhZWcpfmR",
  "key1": "9tDCMyRstL6VAn89G1Q5sfrp47kzCzo77JF1T7V5xqvvmrrqYYjRyG8Z9478XPtT9uWYbnRSPeULM9puWk2pmQu",
  "key2": "2FeBCo7CgG163L68RKZZQgqo6fVZuSoAMhaoSyiZrKh2etTSPhNjfw32joDSpaKviRjdyzHozdrtBvwGFt9SB49h",
  "key3": "2Jt5EVTXiZS5RGHTb51eC3cxpQRvxywXwEfx5ivS8FbaLm57Qm1i3Tgx8kpbkx8f7ApMMCQAzpWbSKtKVPrY6UQ3",
  "key4": "3ABCnRk58PF77tWuhaLqhSqV7PLBVZehZ5yBaZbqeJ6PZrfsRg3qKvCvSuTTJGxhXQkRKK3yKbgPcmWwe2rva6TK",
  "key5": "4oMKWDraJjDKnAcvog13CsvULCvcLqPFdMHgYHHSNFnPUX9K3DxuwgfHJqywQwNVJrr7W7J44JAsoePVL8QMfGTV",
  "key6": "5LMhMiheBVUoB9E3T9VAuPvBrwbpoVyFc1kypgayFi6Coybzwfx16QgyWrU9thJPPF5v75UXs5FJj9A2v831gK2A",
  "key7": "31uMMYaEiayFFoQwSxjSbpup5BU7Se7NmmePdnd8s79rUeDeTSckTYiPeDBTsQhPnCdYaoDfTEUX8mENqpQexwuE",
  "key8": "44SwqkQYf3RWnqcgU47xsids9gppUDhxmWBY2iriezzcJpRn6nivNYe4ar9iwggPKg7fu1Lg6Kp2jjJJs6tsLvej",
  "key9": "4Zr3yPMPwHzC3wRznLuEEsJN4AKyu6AaFeou2JrPzc6ehyX3RnH4X2nGKy24Aqea3b8VPg96WeovBxzSvox5qeV7",
  "key10": "VRCQNGUJQwZZEAiHH1VdZmFFJiP584A5fx3Ghhk7WjzJvZY8hoc9gvdxF8vPVCZcxySj7P3G4QzDD48Y2en79aa",
  "key11": "5ym6PGDBqyqq4Lgc8Uj2GyWJ6kb7pRqRCrQ6eu2B7NbfMsvAmmELQpYQM1ijLc6X4bYUNmmJNjLcQVaTrPQhGVW6",
  "key12": "2eyZReCFfcW1zWzSWG5cKQ8LbrcAADVee9s8ndK64aK8CJW5ydhF4BxJXY59YAR5cy8aYyk7VuDYcGrDvtLya3Fy",
  "key13": "5XmQWrbcWtwhkgmDqxYzC4ndW7nSmEpX2TDfwBFJfuTLCcYp8wehhwsUMYSXHwNyfntBTLQ7FydwzgvtLXNWTgxq",
  "key14": "67L3gQscaavfQHx2nf6HiMdSwkiu6atXUNSYMjHzcJsPfexe5gUVFFoo2DLxG8tLVXzbHsvhaspgW1pvPmNtS3sW",
  "key15": "46kNAZRfg1tKY765cNwQDbunfDUvfR3WzyiDV4tsCTaJoFn2fYrSVtTaytzvC9Lwg83MBYmY2iiAFdgUMeYd2ySx",
  "key16": "4LPE6xYvu5TukXMjVfwu52Nkdex8hU6RGbhLUjzgDJvE7RbScZD3E7vHq1JTifAhjv8PAHQ2vP19MNHbBtTvyhiQ",
  "key17": "5Vpm4KNimzoaNhJytaitNkdQhbcsdczX7c2CBfK4YRszKQbEHmkaX7QryCAPwqtWosQJUUaPgsEYjAhskw9mkvBx",
  "key18": "FjN5TtzTzs93j5zhsdtYux8DGViGXAkhAWWq452udrWSEaSXXXrxEy4aPEimWRJpZT6PBcMiTAA4ka9ciCn89w8",
  "key19": "otiMXpiRHWeW6WpuSXaniFjc7ZaVPPzd9LadZPPtTK2SmY2rECkUeDwZJuNoY59s156d2J7ieYFcLLhU48yDNRa",
  "key20": "5MnAuaLRoexFhhc78YAuUFc6nhGpj5NtFvRX2jjfGSFGM8yyHE2LiKTrjeJsxkKgWkmA9bLP3oWs56dQcNs8MUvC",
  "key21": "33xd8TLkVnxMvhyBXyYFzBMn85w6qs5isQmZWt1rixjwonXY6kVhhHzyFZU8XraPHobRQWt4WHDSKLCk6wUoiGuZ",
  "key22": "3ed1MgxmGm8wPEyXiaWyGQPfkjY6ZcHYvC66BhD73ZqN9BXsr2ErNGRmwDHYLSZJDoTcaCm1nwC9SfQAA2vX76DW",
  "key23": "4nJBAWZSF8isYRsRa2XUSqs393xTJRqQAHX2wJBF74NFRsiNXWxeoZvu1MdYSQTRB7FN8hL1wrPrB57JQy5Zw1Sr",
  "key24": "2Q3TgsAbiobbbNNies5abhmx1vko4qFhTjEyevgy3jfkatGjHRVWYpjRFv3XwXzWCUb2JbTxiK9eU7fcicdQFbjC",
  "key25": "iabqeZZwSRzo4G1GPBStHathPyprzgaBJ9P21xaYdP53g2cZQTfrkbwiZPhQ6uBrjwmxrUQ4HwZU4msTuzUgy8e",
  "key26": "2FApoHs44qe8eCJ83diKna25AUj1dXKzHJVhmrDc2vij9JVWyp9p3aLXwpV9ftmM5vf5tUgS83nBAD7KoAVK1x2o",
  "key27": "aCi5Trjb4wPJ73uTHr5U34yfkP9KHMsS4JCJNbNAmK7bF9bhEoqWqQvU5UNEMQb1NaWvdvxp4XoXaVo43L9ueo2",
  "key28": "3ECcDrv6qeR8RiL8Yca4B8do17nBtZPLnN3qejnguEi4qR4WVxWWtFdG54zME9GsKmUqztWGsdRHwTPWiyiiF7D6",
  "key29": "3jKaLKpYCGxmmaPsq9dcqrhijZ98mnbShEB7gFPREX6B96RkxWcTUwc7yJiY5XPT2mZ7Cv19wNvgDrSyY8dk7FHW",
  "key30": "3RphFaebJqzj93sJhDYmNx5QUcuThWYLsitFmNDmWUUWNB4cqi1YWcAZNWsGGjNJuX213UU2kcvverjYBRejUWmH",
  "key31": "4xWDb3ddheBdeALPuqaWZqs2EmMecrFQJyLiNQtdU1ffiPNhhPuxbCk79ZMwJVMcMLmJmrypUziSLFL6iYYJcqhz",
  "key32": "TsvgLEcfmhaCsquY14ow5VAhygJL39gpg3ok8uGG33y3QMT6ECHEkxYZedcXd8gUkv2zKxCTiiUVktNsuwGv3Gc",
  "key33": "5JEDmQQneVBsi22VMR7ZrWSrhwen2HcH6egtzJPkphU9x1ozBeUuhEy85RKCzZZpLeP6TZZoQStQ47FGTQnu8Krj",
  "key34": "4SY4VQAqqGSRWk23jXeHB4gFggVq5xtoBt4VqjmNgK4evHHCNNbFrEEXjYS93RvEtmc3vxA6Vbd2WoRhjJ61TcPC",
  "key35": "2WbJfREJeyyvTXZW9Tq3j8Pq77M2XD1UyyJmxgzGHzKmb4bpedv5ni9ZpE1HYbFEP55WivrCVrtQFyZHB3fkLyXx",
  "key36": "2sgkKprSFJEcaxkooEC9yTrX7wGWDTK5GwDGcYmXcMs6M6rWDwgqe7TdLNvnZaYrmbyFUrmvMaxYAZHG2eaZVA4Z",
  "key37": "4vrYWLZs1KGaJxrAgYZpnMaB1QJx69b17MdB85ye6kpSkne1rWr44gfkcP3pqrFnSpnLV12EPBNbensRt7YX58My",
  "key38": "5oXy3upJ7ZkYfy4eXuXMGEkGXWNkwmWJ6UvizvvuAPErSBe5nvRrxb8cQac9My8182uFuoiRkEL4daaiAxdya7mB",
  "key39": "2fiNmFfdtCmnnbb9vJGJHGWni9QhsF6efeR9zE25iT7E4nW2cd3MDdUHrmSQxixWLaeyoN9m3wkGc9NnifBuKMHp",
  "key40": "2PoMd7K2my12ptNJ6XWUA6ShAZDrFc18Did2CJXdJFaQaNGVGo5PEEhj1KcWurYwjNYyDNiZJUNqdj8eBtWzb8xj",
  "key41": "2vapBM9F7jCm6x9mWgyVDyNvkZkK3DPSCxqhZBr56BFpGEregkjcJycTvxAJaAKbCYaUqh9dkWAdghW3r5hUMqqh",
  "key42": "4pCxVgbV6PQueYYcSfNGAznhQxNQ2cY7RbnBBcZyvU2EifS5raZh2nT8RLQqq8R3TPyyg8YR3VHkZmgjP9aKNKgB",
  "key43": "5RQAbGsjR1eMdm3dH2pPdRRYvsX7geMHZFPBNkzjZmzRB8Jckvrf1WV3EsVKGFKaibnhhsFiqNXmQyFXTi7F8fMZ",
  "key44": "2BmQSA7k6Jq6qRDiANHdcCSezTvQxy5VDEbskdNPU4h9cTkYPVWtCbKMoci5J4EbQtVPD1pev17cF1HSMi455M2f",
  "key45": "2EeEJiRTrSpP39hRg3shTpJR9LTizrYHY97NxfExJ9vcJvfRU15kEusj5fHUPYFGaPY3aGKwiZXiRhKvguYVUHvj",
  "key46": "PzA1hqnMf1sXcinKoh5WoEa1fzXmtKfZhJDDXvJhutbcEy6Zha8zragaoEPk2QRcp8zPXmXpU5K25DP8eCRr7oS"
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
