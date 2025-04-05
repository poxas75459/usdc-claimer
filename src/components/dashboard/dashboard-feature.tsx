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
    "2NBbJswjSNzKNyd2c8iFvd3uw3b8TY3WYiLXSWjxS1aQYJR1Duf1W3WDPZE3xcMwMZT6Sc2vJkFVeqgeserV8csZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VyBD5Di3YGsJtPuUGQbW3UVw31Gh4Qp8e2QADw1QBGNsVDjzzBWHJmr3y8egTxvznEBUYzsdYWCqku5mEEucDG4",
  "key1": "5hyZoZbG1XuNN2cCjdaQ9frcbDF6DMeF6imyyfc2cSAJscLgooPC3RwQ3qVBUEv8SRqLP7nmBF6TFJ4fbbmGJUoV",
  "key2": "2kaSoTXPnLLo43V26qBuJFBDAaDJkz9K1LgdFoNZf1QeZKQw1NzWLnvz41ppKTFycgPbrn7MjDRP8AoisMmNfSzK",
  "key3": "sNh49KsCYmSeHcsybFxRiuZpMh9C8CerAAFSJEwVzdoFSq8eh9qWVreDAPLcgW6bV4nyKrf69EP4Z2VYKYzpCPt",
  "key4": "3BeMPM3ftXWcHFERpDz1Jr74VdkdiJEMTpnxY3pGLu3NjCEDecjnCDwA3WvqrDLHxYik79jUEHYoAu2WgDWrgfEo",
  "key5": "3ZGcYvTmpBppomZsVBz7ErNKaPuSeAW1egZfsyF84Rq25ppAd9kjXsBvzYS2sQGAkZ52Hiq7c8hcudNS9W3gmVds",
  "key6": "2sJQzL8HYvFAa1eFQN4e3V1v5rfVJyjsgivHoXHnFQJ7KeAvmDnBU5rKQZfQeC4YHkgemQu2NhXYmnHx4dba8QZC",
  "key7": "2GbgooMCvJzUH3m8Ga7YmY69WjkHnXCUGbPiUcD5ADwqgMh8w8XybZ7ihhwgFNWbU3BPJNnw8XtHkyvzhwjGTqHk",
  "key8": "3er2vzrJRT2aQHCwjeQ1KvT5ZihG8Vjz9AhE9KBYfYuubZq2g5TPa61YLwdjLkJUgP7kyFRzWfa9HUF4F81nz6h8",
  "key9": "ezHLJNVSeq5nChcVqnbkEo4eDE4S7vPQpLAxDjxYsLT2zTnt5SVvgffvxKx2HcuphFkqRw4MSHxg74b1dHTtj2j",
  "key10": "bZgv4GBb9fjFo8QxsnK5Di4GuH6kLVtpm9aUXAXF8paoewxpsmSBo8hRx7KaYj8m529LdvXt8toVXtitz6jjfGF",
  "key11": "3m9JFnsTrbTYzESz1m397iAKCxRv7UbRKvw66beBK2kQsf16yBwQQA9WE1ncE3LjbfN4Ecat46qc8Xbq7Ba4d3ii",
  "key12": "3LbVN3k7LaD9qwmAWhnRuAXZXgeZD3adhgbfWX5r9Tp1bRXCBnvzhGPsrkDUAqLghwcSgeuLG4iJXH8gYWNpKR47",
  "key13": "29YEnPjucg4FLktHGGnssgrNhw1ma3R9opWAK9iuFsTUQwX7RksGvAaTSnBeWPNzPt3HnRXL3hJrTbtxrdeRboi7",
  "key14": "3RPegq4dpAxeBMZUnNJCfV1GchfmmHomauKAcEQ3P8dSs1GVkZYGqdpgS37NRsYgicZcDBMMbyyZTiUh6AxKqnxg",
  "key15": "27eRbDtPdc2CSceiz72pNgMKT4eJaJJ5Yn77a7okm5SnzGsNWrQd6khWYQ8wA8GLqPnnLBKjZbYxxzpaWaHUQheZ",
  "key16": "4Dc9A1DxKcGwdSsddaBUHjtbG46HKxDfVQ6kCB724jgR5WnWKdT3VioSqMLe1EeBZLG2EdCB4wUAeMzg4jstYDmM",
  "key17": "2SChBip94V2MVGXxAd74TjWLADsMdi4epjonCipGJ5JmmfV72XgCcGxsC9G1y5ikjoQAMghwh5pwUSXBGw7NYhuo",
  "key18": "WGQQ9SWQKCG7NZTzzdYeYX1rh3HZKtQet5Dz6DwrGbx5sLN4hta4KoxbdFAuB2yj8SXvy4DTMiuHXBsB27dQg5D",
  "key19": "78HDbJWaypWS9iPyRufqKsSmxBCQfTuNSfKqvHjBgKkNJcGvprN3kR5hzgfoDYeAAGfgPMh3UoWZQNYx7qwkmKD",
  "key20": "8BbCeEL9p3ioyyeTBMpqGVmLhr8t3xGTzvK91c5CHWz4VRU9QoZ9vy5bphoGHNvH3SiBi2tEZod7McFmL8ASmFa",
  "key21": "4Ag1ATizBcqo3KoxFW8DpdDFvsTok3F8M5ArPu1DGwHWJ4xkBUps7MHvkkkwPLXWXVqRKx7STueL4Wy6NnGCZmWM",
  "key22": "2mngN8fyddier8TSABv1kuuGZ5pykxM6WeyB8yTsaUCSXSTbASgxZKjupcHazEwLeWfNF33i1G4FUENuMzCGaFJX",
  "key23": "3cSHkwWRyDJUqK3kADqFD7bKxKpYxGJqG7wksrEeT2Gd6v5v3kRZ93DQKJCbLFEjMSNPVUyi5s73SBtYkVp8NFQQ",
  "key24": "5xL9LoPJFgUTq2cAf2Qq18VUGnEuxceaks7SYdQkyei7rRzJh8L9iK7gZGqgzcR9xozSteHHRfqjDRBYkBzkK1LC",
  "key25": "2cvNtcUELJAA39qGMfbnUjhAJtB1XY8tpVkTZ4XUdf4uTVNdUZqrGeQvQuLWrnoymm9TdH1a5noALGtqXif4yyo9",
  "key26": "YvgNiRdCPWpgGXoE2QRQezmFDd7KLKR2wyYTWL8VvBnsWk17VHb7nFGpK6BxC9LFSKJmT7ABWtpC4AbUQJbnWUN",
  "key27": "4yATxx7BmrcXufpQgHxLwHyyxHWb5QuSs242evLk18vQUvMW5BRBq3wsw9ifKZr3hfFQ3ZvsrFMJ7Mrj5Z2VNMY7",
  "key28": "5iXP7134Y7vXbruuz8x9yei2nrrEhV5qgtSWU7Ja8RDvnwAGUXGzePpMqoHpUgQnzYdtfJwhqW9cEkWHnb59N91w",
  "key29": "yi2WKXfpVJnw8YTiY8rZFScsHT7oD1k78Rn4PUGLjPnaNNFmWYKAqRwuJxb3Rfpih33hwZj4PxstPVJMuPQ2Fe8",
  "key30": "2hvxURg66ibhTVFG9TnEvSQKYaNytCDdduWaZ4xYvsL78Yw3H4RwAsTrmMJjj5nH7xCxDsSfDGKJAoAvK71jEZH1",
  "key31": "4wTaJYLFEn4n6RtYKrZ4k4ZeEwBM35YvUebcU7fTDrcP4SPfeBwVXDqQghK9Vn6yJtdSbNHzm6ksiLg6ghnCHREJ",
  "key32": "3t8h1JAf9rMF1kFNExzAx9yALhmy4vXSexFJfSgw2z3jhsDumdLro2SDxVZ5SiHEASkpNnNupSqsX9vo4tfBfSJH",
  "key33": "kS75KJf2gDShEhmEb63nBJvauja473kwSN6pEMEZLHKxThFBS6CG1As1PgcphtunE961eQh9Tco5YD3pgj1seMT",
  "key34": "K6X9p412AmJhmFfWRdrBwaJp2cx5iEszrDqhYkEAcjU86KPKwpnv19gXaUa2G6XC9Wj6N7cGgma98BoS7S3WpRY",
  "key35": "3S85fJSUYDceYh4RJRgQjQ9jcF14kb3JpzN7LEAhRh3vXiBhpx9z4jfzVeeuEYxvcsvjqyQpdLTVZDm57tY9sitc",
  "key36": "3ggHAeJ3c5BkRjgpoMU6okjVXwHatwu5f7Dra6UqdHhMC2wfcVk8RZcVfWN2vFFfryj2L7NuD9hN9qb1w4ZDDnST",
  "key37": "5eyWv9r2Zjq4eZ3ec6ZMKc49QqMdmG26VMKXuEuAr92s7Nuvwxh6WTjCgKYzaHAydQuTQGF3yLT8qJAwGFigx9pm",
  "key38": "3miymy7jFyBkcKmeT3nq2uSyuAS85gXChfM1pMgpb5qGTeiWdyLdoLCF9wzbs3VrRQafHNKMChyrYPBJ92MdMiCt",
  "key39": "4Po1KJGWGh8o3XvsAK13chi1FBGz95TSZ9MJiGNFNbEiGE3qVpzmRiFNGPbKKZYPeyg2czu4XP2zc6rrNbvxMykS",
  "key40": "24LL54KDv2wyYMGghyoepHViSCBPCQVHJyUAnV7Xv6fpd5DnVpMnqKEPvDAwuC2Ud5qVA5tPDhQS2bP8dFrfkXvn",
  "key41": "2k8Amct6sMGWKtYbtQ8VWXXy1No8578A112Hp2W1VouuyQnTHAtfSNUWAsiUgAkz24mCRj1nWux3ykgfDnZdLf2p",
  "key42": "4RYkdpCwHRVyCexJioUHAhsr4B23cbxG1QPogH8sPX7Pn6mzXaYirPovv17Gy1DZ9wqD2ko4fsEHstKTkVrX5NR4",
  "key43": "5dSzHomCCfLPh6yuzQJmQgEwmsuRtmhZL4mzY7eRCwz7RbBCrdwrWfQuQCTf8y2cPDudZLDiz69xrPLen6n3HVkq",
  "key44": "3q6j9tJhkH1KNDiqX7psa51RJUHAVoJzZAsKsSvczYUEnyPpyf3fbTfSjMvYpqERozekoeJYRaUTLYrjjVosfAFS",
  "key45": "5NTp2Jj7eY7vu3nJi82a9ZyqFwBtx44aszEmW6u7PnVo3BKwMu1YQnbPNnLgP2vXtVvr9vXmFfn5Ap5Sx4k2xRH",
  "key46": "5sbNhHxnjgAdjYsMpifkqmUSM7xQ434Ht2zoVocxVgjiGHEyFHfJHcYCKD2HDUNj3jMXAp6NzRCsTDD8mycsPz7z"
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
