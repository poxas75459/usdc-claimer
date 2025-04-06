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
    "4JT32S9aUUEzm1uLN34HGNj2d5WisqqhQJxHz1sUhjuBfxJ7Ume5sbpvyfF9CNTDdmtSNcRgkdAa4nFwm2PPXE7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "353hQFsX99q4U9eGEd5r35hSsnEhvpWtpYo5iPf2eob4HGwkkwtkP3Aawz7J6LXWUKQv6KgfmQstporCKieUidGq",
  "key1": "3FSW1vg76SpcGZVkbfQoFXFE8ZNG8osiukQqVAbGFXqrg3TPdfPer8yoKWPFYZe4APxdu1ibZLpnfeezXCG8YoV2",
  "key2": "4het4y2LK6AiPLx3mhyqwbU3KgrCs81X49Mcw6UZeeLxjWfy9bmk5dHMGH3fqeP4uJonXfnozf4WGrG8ktKr5Rcz",
  "key3": "3e6sZsoMSFwEtWvrTeNaeHPf9WrJUyo8zusR8Q5sjEErVs6C4pWRrD9EQVUsywV6HsuM2SnUGuEnkL3qJ2Jxfmib",
  "key4": "65pZgFY1DPqhGjgZ3TCo8ouiRtbwkmi2DWbBcNy8pLY3eVXq9o9WjVrgYZZz4UnBVBeGphxkyZEz9CzKDpbXGGKN",
  "key5": "4azXpWbPJFsTcVe6az9aGCaQ3fFNQE9zA6nCFCpyHVt1zftpaxigiWJs4PZQJFpp8YP7GHhBYaMJyjEQosL6Yuoj",
  "key6": "67AwoQF6SaF8fEWG8U62uXWupQywVhKGakwii5iDYezEHq2wDPH4hFZ39NUzmZj3SfomPDAu8gGkBiZC9vpMC6Cd",
  "key7": "5W7wM4WzWtmi2ib2nVaAjwCwWKzyYkPvaAtUMEV91B2jZ2ViG6Tswe1d5v5Q99oC76f8qAw7EMtb53anLcqcYNsC",
  "key8": "5jDfYGrRx4TYPQVBy5r33VnGY6dqGFMnJCQhz86ZS9G2o2pTdYCKAL6Mxpqr2hZ1xcBAbuurGDQdTcKe92g6SEWC",
  "key9": "5pMtPDmnmLBG6NGxbnFGKxHr3dJb4bNcLpUBDuvSvw2jbdaSq3BZsmp26cGCi1LMcA5LfpSWZVib49jA5a4NLefR",
  "key10": "L4f4tJ7cdEZ75b6Bp21osbmmtnd84YMHtBUSQL2seTdARNV9LDmx4smwAou6RicPW7Apjr6LqcrzPnTVhrLpWPo",
  "key11": "4PQwt4VHbdVW19wNa6pexeKQLRoQVbaizvuuuVcLj54NSxjupFsVMEWbicgDRTzGK515CumSbnkZPpDy4JkgMBbL",
  "key12": "5uPiK2Jx2NpuDRn8WrRzZvKYNSj6U5WGjJ1MaoaEQqJBtpY6EzQPVAGxG64GJRYPqRwkCSnPt16k2ZjQyASsvNAT",
  "key13": "3Jzc2PA6hn9yyErxZAMQUoB3dmpsjNK38zHVuWqPGKvDpX5VUDtpKivhjzLW2y55fmd8e4WbTZzEEgrAh24KMSie",
  "key14": "2iAop5JktDC76D9CyuUAPgqnTX18C6wEswSDBrcAyfxvvgkUKAgLJLbpePqTwciy5THABKKXuAUQjvCM2hVStDuF",
  "key15": "2gxUme4RvrUizGiwtjAVqp9a2rSmX1HincRVcFQg1dK2mfyY2yzvBabuYXVA6Kj82sGrExE4dXTeFXmYXEqFtLAn",
  "key16": "4Lrphh1bZ9sX9zRfY5Lche39PTYzhACSZADPzBLmWXbRpndpcA2sR4avhQfj7hfCeZZoFSFx2RiVumDGHv5DWfaz",
  "key17": "3noZVS4V4eqyZshY7nwmpU9F8kGZFJQ79vUzuYtxZ1TV4hwsBM8hg1jeC3ck8MDMXtmCdGGVFJQtqjL2c6dH2znu",
  "key18": "3jHPgNEPPbzdTh5U8qZZmyCU49KHVaJU2AByqZmsYoRASosgfnUt3Rfti1jPpfZRo81PZy2uH3HE8EPwuKvZoakV",
  "key19": "4p1pb4vdiv37YmuuHw7GZkVTydoB1KTmyfQbaNFxbsMe2ddhWzpgQEWaoXtpY4tyca4mMLPYGgHHMzrs26wExx4m",
  "key20": "4x1GXSEQNfZDwbv2eQ68QnKPhpNk3uXoMs6hDhzq5hcGNtK9dfaWMnhCLYCzanMCjW7t1Jmipsm7KT3g9J18QsfP",
  "key21": "huFKZdDUL4Wh7ZbpYj4bQqxg7FiDXvcPSYiFXAdhcPHWjAX9r8vmCvZTpNi2pqh164pY8jwtAHWk1nQXQvaScF9",
  "key22": "4iKb8Mxoam7cSrFvtcbUWpXBNpVw2v3D4iRPP2cPZjKKFAY7QSVrKQvGffusH9QitnPCxcJvecgE5zEfMyxDEXt5",
  "key23": "33jLBbos4emwAuqHc1QWph9U52Nx9BWDWJovGJyyzGRhwdCGmsZ6BSpmruH7NMmNgXqLFnfpGoVZmUzsFLVn9Yj8",
  "key24": "FWaHsWuqrwmXGQ6qtU5FXmqFURQnitERrzYAU6fe91Tenece2LB7kUhK9pjXgkL9ukLLf1U2y2EVcpK9phJQujT",
  "key25": "32DNuFVnqibr8TpivoLkmwqm8Phh4Mha9MRJCMJATuxnw9WGcy5ELvvvzw6HHV1ptsZzZKcz7Ab1pPrVaR55toid",
  "key26": "27t9xqnq26JX3KbebPyka1fBsMY9ieojXFCS4DKFSAJMi64vGT5i5UEQ8691EJS4hkrBsN7Rc7JN2mY8cWtJwuq5",
  "key27": "2jp2isvLFQaV4TrkaeZRxX8qq3YMEpw1WZqtp8PLBTp1wT2Dkyq5g9VcFUquPFcnJXh1khnSBjVPY3wq49BtNKKJ",
  "key28": "4PP6kRbSsWTgbM8FHJTTj9RVUhQaZDvQMiPcYfrxCG1yC7einmVWRGxTHhfuk1EyewkrkoraommtAuSdjVpnAb8A",
  "key29": "iBopmhyADDLMqNVscH86EZeTTKsgZo2mAFzG6zbGevDKCXEP7Ljr5TS52uSP5hXnY8WjhpEvz39SzXoUSTVs4c1",
  "key30": "6gQooXLcBnLGT76FVAfLNHejjyHPtxxC3bW2rAJkBeTL6pxi9zGLHho5DoPvPR8zNgMDea76LhGZyLLxvsA9Hs6",
  "key31": "W7XNSkpkhfCheo99RSRaLXD81ZDXzJTAoF8NUwyyoafwqH4PATkTBmExywFSwHRwuLyWT92nMBNcCFP5jugQ6RH"
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
