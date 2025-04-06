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
    "3YoJ2AtvCq3VjWNTDUZ3N23BfdAchZgwWMxzMmtN3xsdzddo6VC2GbTyqH1Y5v9xKgnnrsnXV2EUQdF7gnmjFFBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45a4jhi7RxjhYecS5qnLk3qeBG4uYLPy9eE4G6Dq3oaupigyx39bmAGjChgFGkFD5DqQfc5jsS2pwT7M9MF797J9",
  "key1": "3sikGSan3ZCc5ChpB9TV5GUMbvkXLi4yu4bjSkWxAdXFrWMT4Bqux3QapsF4PDciaoa3PCMJkWrFtTBZTBQXBSv8",
  "key2": "2CVk42khGEoEFjSWtvfTSYvo3ie3dd1yMScef5WsKcb6aDXukZDAfv2wUVDRZdSXsAChwdKgfYqeWVapRBaneFYi",
  "key3": "u19769oYoCa6KvbiUAQgF9LYxf4B79Ape5YvbiVXaSgefLe9V54LZz13k1BWFbtZ5wABwEYgGAqntvaEd4K6XTM",
  "key4": "StL1WCAzH8mbreL9n18qSrWwuYtfduCzYpWSNC36E9KUsFBj2LzAhrjmS69XzdpWhd89TrPMpMxXXQzE6c1NgPb",
  "key5": "vskwJn3fr7pZrRSJzx5srnGTJ4jNtCm3CBcUDEGYR8ZZCf7x5WRJ9e19Zz4S6ioeN4tWN6PEX5pYMHnVywyDRVx",
  "key6": "2jrtVSomqiybZrQx5rcTaaWUGvTg6fTS6je1RRAK5TNVtB7F1yQAvVxWqCTNoyaSm3Yo1nr2cLCui88BbuwV8rjz",
  "key7": "2svKqD2V7tmSjtFmNrcpzhgFJ8DWAn9CmjR4i5JuRDQq9d5bVANj4Adr6q6EBPwqG45NzEcizNqHxgwL4NceGqRY",
  "key8": "61oS3rDzPHT5qZZY2iieZ63JSP3PBLmkZSDBtU2EtW11ehF1DdPgvERrYacMKJXpkkcP756xdwe9dtftPFM6Z5e7",
  "key9": "664VXXdR76tN7gpkiCZnKn2rxwquP944teRhSD4WmA7FZe342RGxRSXrFmnKXhUX2DwnbVhTz2PTWvSYDXFZMRn8",
  "key10": "2pHatGKmT8GVWb54Hp55ZBdoAVrm11Mfypu7qyV28UM877Ra8RXY8jo5RNswSSMnesB9GYACMikTugP7A4hz9Dmg",
  "key11": "2m4A5LbVDpGWDXvT5PSRcBBmT6qHCEEipfuDwDdgt48u4zfXvw7pNKXEvgEPs9zFMM3n8PosSZXYfRaHriKr9FNU",
  "key12": "4HwBNTCjsT8iG68cxTwN78xXG3ZYP1wxcaHpUX9scpTRKP2zraH12WfrC3gHTfkbxg6Z3nzyyuzdgPhHCJ7TBJcy",
  "key13": "4hRXaVWeerdo2b5JsHG2L7sdZKAeVYFntZgYEiiKeatYqyhifDgjef3mZbMLwiuDeZ8jCucTXjwj6ZSWLRsXJ7xj",
  "key14": "49sFLJ9xytGB8XhQWpbT1Xz3LbbXfxndWzeqmivMCVegKuid65U7JJHoU5N6BgCwCmpXAv1TUzABcWg2gjqMApjc",
  "key15": "2ceg1NQtPgekaVjGENAQjSvVqHEQU2vvBKBfX9t93cTZ4GbnEejuU7cvQg1JuR3UW6WGXXtL8nRXbt4cZhs6B6pj",
  "key16": "2ajsUKk8M3CVdsYpWMTfCfTjAKUjuiUCNG1DXqenq2J11gHGAGjaiFdo6YVaRtDVVFe9V6hh662g7KXP5b9gzESa",
  "key17": "2mkP7cu6xJ2qXbPRwphJf7YLVjsXe9oZUxodRXvtLQbYCVvk8SpUJF82dDJQWq4zmagZjnCc1PqYtPRa1SuHJj9z",
  "key18": "4exqDiSkQu26WVYbjhhHPpMUF56zQwkrqGEPZSPbtj77fdJ8e2oMJzBh5RN7ceKzju6ZhMexbzYBMPdxNzGQArud",
  "key19": "5iFeVvYJrrQDEvizLYGs8DmnB7o78uEdHAZKXWhEEAFWLRHdYLHntyT7UKYntFE2RsJU29YizNQAiK9fsBHrPZdE",
  "key20": "4rP4jY2PHPCVdaPV4FKi5Ys7Qkw5ZTJkEtg9X5jDJDHCMoXyh4S8SEjgiZzQ7bNMwnf3gLTPcCGWZtAvBQWTsZv4",
  "key21": "5uwy17k6qctQEjzm4SFiJpAhkNVccGVg5mVHX5LW8j6CmvBSyQXDUgJQkqDriS9vERmTFnkTrESHmoWeVjChJj2P",
  "key22": "3cvemaZ8hP2MXWQEjoAswe1mJ7UhsX1Z6UPJPPje8x3raMxh2gwN5Hvjz6fFCH1bp7qkPmEGYfUr8ZsLYoTxkgcV",
  "key23": "5gGnqfBLz9yUhnCwfb9YYgXv1CY9pBedcBFRzdJ9nhjKvDVyCeMsvq3mF6NwppbecyK7TiQKp2vGBc6uFo9PSCQn",
  "key24": "2jn3C9Nv1Cs6VFAD9QUogGiYSULHjveKPafhCrDoCdvMW2GWp8xgsxh5urgNbMEMzKNTTKpuFMFhWXWBMba4SDqT",
  "key25": "494FC9fL4uFxLPFfefpLkwdHVYituxyMFhKhB2WD2WDpGpM4avYZAphrgj5u2cPPwZqxJegotYTpgutdPnJWiTsa",
  "key26": "5Q6kb4BeVRy9r4wLRVj1u5g7YQBN2N6b6vjRt93cKPLjFQS44T7YWzAFxFUqXS8cv5rneT2SwUAH1LQKJuREFSnS",
  "key27": "66GNcqmpCMRFUiS8CchsJCnikDu82tFGEKqoLzU9CPVL12BeAp4GeAmoH5QisPajtv8uuc5BzLdkpRfpwgGXd5mp",
  "key28": "oUzeHpWNKW7s1JfGFS8JPiLBWdzPeYw3Xkx2onvzg3ffUc9EC91EcKaknMn9hJA93LGdt5ycp3SDjM4iC93pM69",
  "key29": "3NhsHYBNtg3pJrg1BpPZf8pYJRa2siGWRBJJ1eQa19WAzUdYS9xa1oYTHNjcC8JSxC3H7UVoRYYE5KGn8Wu2ijfS",
  "key30": "rASkr8DqUCZnwSVBNCj2VnNyuGQNNYGdbahd4345Pwnou62aF2giLw9umpTV67CSm6veyKYEx5XMGZBm3WEwTe6",
  "key31": "63K6tpLdYfKmgfZhyPGY5Tt2YohMPikLon3nnBfZrdr265UfSUPixhbRmhkTPsoCeBju23Ww8u9LqrcFyMNCQF4L",
  "key32": "5s1bwAV3evVi3ZZAqFZhqBCyzRFFYfY9b6mfHj5rCnaNQ8XqFtjsh8MCBfJdBEf7hcvLghovxFy4xwzmbUGtcai4",
  "key33": "3THuB5mnQDk2eG7cVESkCDEqZ9eA2xLMpdmgGZo9u9Szz5XGUoL3NQ8W34nDa3jY4XnHqNkCX5cyHogtEnbN6Edr",
  "key34": "4xjHXfVEHL2gdKzPwh6WokqdXPV7q8mLv8WnvqpyNp9Zg4HCPgW4jUY9WHcKDmqdrLLgeMo9uDzhS54uCuw2QY6",
  "key35": "C2BkZdfrEb6ofEvPZNnJjyBbtTDpEyij6bk7LEHViASyJTSNViuSWozRC3ZmRKkpgkWQy27jzvpZaFJTSw37e1W",
  "key36": "49auURXT8pX48JefA1VzkAortnRcUmhdpFVWqL4VsvdkySwVYMihKGbXuSkjyTq1QtmToxJLZEhy6nhTgcHhK1Fn",
  "key37": "5dbHj8bT6yLRtynPSUuGDqmSXMDmwrhax4BTY7X9Rt9m2vdjJJGoyV3jvnkTYzXHTTk1niJPY4E8L5PcAtCCh4Cg",
  "key38": "3kRBRuL3L8LtifYtMhGqjDziZWU2b5bQus7LPBo5WGhtowGACwGu16nZ6inkDMrFBwe44ry4D86ew1zhDpGsr4bB",
  "key39": "5oaLzTz4ywnHszuSjt5LAM17JMBKUpEMeCjhmEtbLLayNZmCFb87VQMXeurtZDDWA4f8osLbKS7duMDzaYJ9c5ta",
  "key40": "3EoMaZZiQNkAFgoe7dYBNXLaUAo35wuGGeKcu9JBFDCkb7PRpFTFyj3iKEs7QzbGRXKWKHWGeSWxXDGmuUiqV33L",
  "key41": "5ee9o3gupDNvgZaHJWpnzcygNLL5c9QSNZtuALa5PCv7tcanySTDUTY8qUw98C8xcp1QVAsw84gUA95ymdpuSgvX",
  "key42": "4UoEGbpmCigicvNv4TMbvVmTqMddPmWCKWmXdLx4AdK42NvD4Sob4gpNQvnXihppq7X4QVB9X5ixKhzCLJ3KmtXD",
  "key43": "5Dmj3Rm7DErkUCB4HJVvLNV9b3FnhWNCYebAyqrUVPVJg3YP4yDdnPwZsar1j5a6TTVmgjdyjtBsgvBiW6Mrnf7o",
  "key44": "2PPp7yoaZorZ9VwKT4fdUno53kFv4X12LRnDGtLMuGMZZ8LBetny2BvC4vJUFLLb4HJkMfujqgiHX6RzXHHhpSvM",
  "key45": "4MAkJSgkLu4SDXz7Z7stAqCurdid6KF4pG3VmYqMNBy3sQqqu2GW4sxPwEVMSLJ1HCPoFvQXok7CitFa7UM9ByUg",
  "key46": "raen61rujBTN7yGEut1fbsKP1C4oZcgsuN7f4G733hZVJ6KqbkztMFLcrV1eqZYCMMqdTJZ9BesRTQxDMj1hzMU",
  "key47": "BHBx3Uqw39HND35TzyWpoPRLHaJfU3QVjFP3TB6NhJQu4mxXhCJQ5GLUCFB2P4APpU3FSYjQAo9JL2Mawk9FawQ",
  "key48": "hMb7oFzewFa3WWX7A2AAgXT5haiCM4xiwbmAYtuei1uuvuvZ3RkuAFDkmpP6PKvFs74UoajHwryhD8SEqefkWqJ",
  "key49": "2vRhKApJBDtZARea7eZH19URMDvvkuA2UpumVUnCDbFKmEUaPApicvaAF6XWSvooShusVvPzcWdbKkodWfWDoLgC"
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
