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
    "JhEUbZ61AWoZJx7FaM4kBQt4j2W9yMGjYVrMmPMSU7c93dnkrM8EBNarbW762GPxeCPFiz7LbEjjWkJbg1ntHS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aKz9Qvp6dP84KYs8C5fJ81gRyTfYtKFfxovWvyCkCW2TjnsjVE6u8nZc3DPrcF7T5tNMK8TbQ6abV9fKSutJ1hV",
  "key1": "3c7k5Ttk32aZ6baUokydjFNAmeUVFkp71bqb7SCKdeHPgpT7ee9T2hKxe9ALjsLsB2rL6wKu9U7Qk3NVXBSfKTW6",
  "key2": "5YVHcarRw4jqyqPy7gDuLxbFzDckCuwKDJApZAE2TjMi7wSPLEgoL9ZgmVzPiRQXqQCrss26gBUT9aPQs2CCoQfX",
  "key3": "ww4u8dXwf6dqigFmE6tUTz5BxrARydrnhE8VdUbTrRiT8Gbcabfz5sCt5xqrHpqsKhMhXs51BNi9NBWdtZKnhn7",
  "key4": "3nKbjWkJqNo474hEGJbSdbfRfbnmnWVRWrkdNnA1J3dVJao8HJWKRMUz69JDyFBTvb6xqSXBCfMtre3oirDYfA1J",
  "key5": "k4cmMsp581aSPYgjT8MEKvNEqwaUSct7TSaepPsBymStCq37L4kpqMcCMktB4mDccZvkckJz9pmwrhFdVzxM24D",
  "key6": "2WUx2vgKoEYJczWcbrVY5wAFTx25Yu8fQCUGfFkKQMuicxdwTJ9eFaLj4eZWZ6JmMQadPzqyNSXoj5SGZp3Apeub",
  "key7": "5iF2zgDBxHC6PwnYrxB1C348wTpFJvcaLXvke6ESGBau6pidMom3pLBjdAJDzQFy6jVwDTM4u48p7126GaNFX1SJ",
  "key8": "4YoMzbgooChNyGGA9rqpjDuUG157jpjoyxD1L9hvpxpH4rUG7cM2H9BsmBRxe6ydAvAFDuGgh8jAtcny1643b9eV",
  "key9": "65eMGUr5sxaz5XjSMvSSKtmmDRJdjZMep8cXnNzJ3peLTm1ycsodZzzMh6bhQTKYidXcCYH1BHC5zuNYQrKFsvAe",
  "key10": "2RVZwfe4uWFqKPmPB5sETLPwqmXaXBGWMTxHd3d9ZhAkNPLXPA4GjSjPQgPtXrsLaPahuXkqfB78oAaLq5HfEQeL",
  "key11": "56QxcGeDva4mqepLHFk2DLhJaf3dHnu7YR4kfmKH31LEK3KjUKUCxncxmB3sJBQhnMpkqPae5wBPXZyeU7Ckfhsq",
  "key12": "rNTvMwiASpTwKLUYJ8oEWXGzoZEnBuU3ptduDAfLu2byyHybqBe2q3zUtTyhf9sVuMQ5L9gjrjmNffTCGjAQBAw",
  "key13": "EWdvHZ2kjvFGcj92rLQuEZTsGGsGG1Xhp6LAcppVKVCoKZyzXxKqmoVohqCtDU5cXc21LS85nqbyKqXERG1cms7",
  "key14": "ZNnWKLmcM8SsAhFNJQ5h3JzGHJKuvyL2gS4cQmYe5CoLr5dQexT9MTX3M3sr71Pjjud94D4ikR7ssyw3FtF4Sqi",
  "key15": "2f9G3hXLqme9qEyE5ZpTHZ4ksjtD2zK4iyYP4eZe2zn9VBUNtvhrovie7ax1Bh5EWRkKe8pggePAV8hiWjn5s2iD",
  "key16": "4yErEXyBsRktv8BDNoZS36jH7jHjWwKvVjHaENLAMr9QnjgE1xxkF12uduMDNpdpi6vSrqcPuLGRTQ8sQuQo5EhH",
  "key17": "56RRLkBFr5xiuDDQSLSTtqFrPTdpf9WvTCb4k3EeMPEYKsWWNSXmZR2YbV3faYgVoEkaYbBDPLUewoHiar2x7FUv",
  "key18": "qMB1N9z3WQeQCND5jA7dTcevo4ekPHa5sUrb1L7GrKmM8jmHmXViksBTUW8JnYSWVgcPVW5uNuMC6EG1WA1Wmk1",
  "key19": "3wfpPa5AKKKvHMafYVwaFqQRxJiJQM4wAokxCpueoaeanqLCkarSiZYUE8SFLMbCqmbPot8G3ruRKZrPdxDi39VK",
  "key20": "4FpyFmUB1NnRqzS3c6nYa16saLqYGM4KhjS3yjYuVM7DvCsjyDLTpWXmsBZ6ZShqShoC1i6QzP8bpQtQWUZdPVve",
  "key21": "Cu7Ho2QdPHGk1ZjHeQd9nw4ks9pWtrpNJLSV278LLyUWsBauo44NLaSXViFKK2YLWDAb31pcB3VmTeXwxzySDXY",
  "key22": "3LJw6YoGhbZYinsksoe5HoKZefWjcjnzvr9hEnk6W3gA14jGxL3vatnnUYTDaU3X4o3S7Bf8zunNndh1FRXdwoTj",
  "key23": "4gZ7Po5BCDERs9BpPYYwXNGQmkeckrcRnP28WYySU9o9DrZH5Zn4M5BNGTBc7LBTkV349VA6jvNJw8UhVSqQiBQX",
  "key24": "2qgxfZcAGXrJXVXqWZDxPA7nwHbcMChtiHe7apM393pyY8QFujn7FbGWBBv8ETgvJB6DhAJANA52MoM243NQ5JxL",
  "key25": "HxF9hc1DptoZPzaAopRR26tfy6eHgWA6kv8HsrSiAHcgSg5Q2foCRJQDcNVsRiJuJqqaRM2v2ZJP2xzXbe6byed",
  "key26": "5Wv5CL8akSwMUz7DxH9MBQtxusNicvwHJWmEuU8QtMsW6MDhjz4xmVXe5DsvGUixAbVBKXPrDzq1abEx1KACRxAm",
  "key27": "397U9FyaW5FEmBgd1fgq233i8eNy3NwsZL4mL2Suh4UkaVjQf82gLn1EHrJGrwLaVdKnHKtbw65EELEtH2yLiJvV",
  "key28": "3qX5xoxE1cvSP7js12EqVYyrA5N99sFpnBAPXB1zwz5tL5YxyxmD1rCbjMvZPn6dBna1GU7zEHXB5gZw8Eu2R5d6",
  "key29": "65GD8Usf8FqtpMFi7ZPzmPXL2abpEWZwv3UFefvzuUgdmvhqgmTfBrWgcCrQRAEKhteJiWvtSwNMR9HogEasokCP",
  "key30": "61EGNChzQ1BC1uDdbv8fAgGGk7abwuHSpDxLERpmTT94WJW9wLeXetuZ6rgm1uoe6zaCKrjkPFB1fkqeevFzXMT4",
  "key31": "m7HBgLXimUmMLpRn92g5LJEDsEM89979ai6u9L45GoWkjH36RgzA3w9rq1eyBYB8brZBTwgcZo25qsmEiJ2skXT",
  "key32": "5X7TUakSZdyHKz4M8sXFsrTnMhf3RomAQSH8DpDmp5WUMk5cP25gysrPShx6Cd3JTKYdAZzJP4vGkjStgpRVRqxu",
  "key33": "3PhBUkkYQvCxwW81PVzaiyjW9H5i5raNZXhGzenZqLw4HF7sXGFFaFLPmx9y8ZYPFSkxHq3TYKu2uGNYRrFp3WeT",
  "key34": "mqW7KiVaJ969q1g5mcW1mLW7wzFKB3WwCmmNiSav87K36RmAt26nKo9X8kZK4URb3HBASqQ3CxPqFNZS9LUgq8m",
  "key35": "D3QiZRpvd5Z8f6t63zTTpfWVtHm1RdnYwTzht72pXzyTxPxK8tPHVGa65cb5mQV8SswDAcWGDyE5wVxRvP8xr7Y",
  "key36": "2fPhgnF6o2xsSLU14Fz5NdXdZi3wXTkxwSpWfCbdK8n14Pb2LKE3DyiDYtSF24DP8RybQkxVH9gGzpxN1PUCF5gv",
  "key37": "2ppQc2hMtnezi3n6h6CXrvHLRJuKBNo74xM4zeA5h2H118L1HwNuSAHq7W4tSNj4UGjuh2QTAbsU5Q2PMazrF4Fh",
  "key38": "2zYUa1oWFN8bUvqK963bfVG5UdQzMm8Ed1rTiJhqZrgeaTRwXzaQ33sg1xaY55AK4S9C1b2yzt29ApAWJeGo56Jx",
  "key39": "3RLGjUBdYaZdEfBpAci33ERfYV322HeQyoSmN1xySR4LvAteYyqM9ovxEct5KbDf5cqm6p3JKstqJB4iCLMwzEPJ",
  "key40": "UesduE1u6Y5DWQftKPUfT4uticqYh1DWa2bhzowSR3sFa99AvXd81S9iecyC71pnNtfoM9smGgmZtU4tqWUzQHJ"
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
