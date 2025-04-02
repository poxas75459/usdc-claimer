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
    "2H8t8JeBfg1yvUNFmFgAJuCNvSpVyzyQ89XFdS8PcHyHotHqdQfuFMo9sXfA3d2DsM4DFCwpE2PAyHSeHEMK7ZC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GC4MH85N9zkiDPcryFVnNirne99oQbqk5RUcDT7Jp6UassDRqrLyqV1HtfiA7CJ22RkWCvKoKVbNGHJEHGPzac8",
  "key1": "4jUG9z6mjtqWJjBWPad564Hg7qeoA1iLsc9HKYYDbCfs5NUVuBjGAkxxBXBoLedLTVu57bE3kWU5iedoHCCaNCqB",
  "key2": "2rXJjXwV5rxCsa1hhfB2Rx2aXNniPGQ4rWJwJkWSEV9rNUSQs3vqvdc9DY57b5nx4HdpHvGWqGWmmjer3NfyQNYT",
  "key3": "2UQksFb81HcZ8JbaGYGZZpAtBWvaNbEMpW4YN4wGRt5TR63aUbacGeB9VpKqqToRf3Yv2haFduCmoi3tqBMVPD5Q",
  "key4": "XQ5g39wxNqwegaq5hit9EsuBTkdHTNuKsQfAyxK1hXNFRxiWH543RgjmMophaMECumeuYBgX59u4HXvLCXDvjc5",
  "key5": "CdoVcPifDymmzejBbEjRBQfdZvN5VjBE8zS1qod6rVcSmpvkXQTbv45ajzyh9vJEFe2Egi7efN1Z7pxFztqvrxp",
  "key6": "3kmgu2mRxX5QhkUMb2tcEZ6DZ8rAJoTAf65cck6Vge4ocg6ZfM7rATfJB19jJMF3tqKKCPw2iyTk6RDTSAZwM8hP",
  "key7": "5nPG3egpkCNZdSyQ5bEunGKjdjz6qWQY5cKLC3ziPapmLGVXQZvEWUiehFDs9BSPLVhS1zkVcyTHKPwBWEhUysAq",
  "key8": "5YrGuGNyL1bqzsf9Axy5V9ym9jX7EcLgiFx3TaJpoQJBiNx9qVKSvSEjBQzonKhCY4uTzwZ7fBZzy7K1zvuDQhqV",
  "key9": "4jXeoyPvYs4JdeWdjrFcRi9Ax6FF3P42KX4tKGx1CS6jsX71v6HoFTtZj1zLB6hHEnmFgZPSq1Ge2U63PLfN9K1J",
  "key10": "N6xEfSR8Ubjv3yXLfNzxP4u5cUQDm7K9TvuTnrRj1e3N41oN7oURgtgPWpDsKs3o5MihDs5aGVzFaq5GJRSyX7r",
  "key11": "2mpuTm45G6gF2gbKhn5FN4wTwAUPfxaQsEkPxgXsMUcg2tn19nQPCPoMG6QkR175WdfAovsmAPG4VmdrBREQo9Ha",
  "key12": "3UUEiKL1BD1jrPdJDqJaTmmijMUdebL47sVmgVSNuTWsL49H56hxKkrYqwhTW7MNN2mMKkXsaa21fftuvhDoZYs3",
  "key13": "4rQkizq71aPqJNv8Q23RRvcRZMaM8DBEJHyxVHyexiVvp149BaqKuVTtmnKfptLuM98FN5vCWn9d3CEGVYjqPUSk",
  "key14": "2EKPySCb4baGjU3ruB8qSUXP1vmmq611AcsorghPtwfocdMLqEVZFiDUTYgCmabJ2k9Y7RGmpVxcVrqMs4yAUKET",
  "key15": "31xxeihTdxRhDjCTaFF7teoBPm4k1ceJkDfL4LgU2SKa3TcJ1xcMNQ68j7JSFcSGgobxE7wyyW7rFQvGX7FAwqXr",
  "key16": "HHHFZzWYzkoppuYUD1mML9q16fVE2ypHi11vTxA2RTTEpVtj12yZDEHy73vNqy4ExcNHrW2D33udG93v2oVdsWQ",
  "key17": "2LGV9r2gjjRvPCFicudWFpaLNjWgA3M4QLchSgWzsCeoqAPfdRuLdRh3236Xje78UWNktkSD5G1ipUseqDsCJwoZ",
  "key18": "5an3FhWxyWqY4LUTYe2yrRqqTcRtZ32oTThzxreUfWG3Ve5iH8g26Rtf4GJ1uRCCM6jmAZySGSvSpSD4kkKrHx58",
  "key19": "3ZVjvnrDq3mmYyEZMZbwwSCNY2WaoinJA6xbyjXYWj5hmDRCEiHCwXkJTmKDg3HXKH7E4u4E2ccuvfLUZhfbfxJ8",
  "key20": "4WexyUeEbDqmtDQmwsgoAVSa6Hf96fZVmvnT4Xq6dsN6LHSB8RYUS1v7yLQfoNwkfbTh999S8i9y22xRrvTNTtyS",
  "key21": "5PgQ5QbK6mQHqxNeULJrQNfLKa2232bDuMhvVbRLd8gvLM6Zr3S7XHyBJyB73sNQgbDF9Ft6M6Pt15DqcLz43xER",
  "key22": "54xWcUuLE6vJuLytomyFS9VF6cTeT9mtA8u77323ooYzpQDjP6ohaj1A7A6pXe1PGiwfX1Qa9rUNPxwh9eizZx4F",
  "key23": "2PyBxEcopxnfPkeXRUUwiLocK3GVC3FAyytc454qTxFKTBCwLVTizTeq3mXkGFsa4xUXVu2gUaP2gQ9m6YHLHmWX",
  "key24": "3K7gJwGkkCGdpdePgwLmER7kMhSGAgnN5gUSvkk79tiXDgpnpTVmAXuPkR8C3HwCXcohYDP3NMWScyMTgvsbwG2h",
  "key25": "3qavYbS2FJgMYJq5xVbiMQda16CNgkrZzgogQn6br5nWmoC82vCapv84rLbXzCUnZYiBFwKbHHvibAVunaebsDKp",
  "key26": "2dAh38ppdA8QZytwsiKK65ySow9TmDeJtEKYecMhDH2M5CDa1i63qhMR4ikGHgzLE4a3Bu8dsUF7sWVJhHmctw4K",
  "key27": "M2RBtHAiX7yeQ5X6H67ALQR5H75S7rR2SnPKGuemSnZ9R363AZre1g9542KEXJWS89Sg491AhgknqgqGs1vvjtE",
  "key28": "3X6TBj5Ey9QsQteGH9DgGj7QnEJEPHMm2Fgpu4DGWzrUMEmpjGNgvGBbkNLWVxQXvhCqbw7MUpB1YwHK3YwrcGQr",
  "key29": "5SXu2T6sfkASeELQL44msTRpJL9qLSgdBFuujkD1jT6NnhMcMLhT665qjAypvhkcncE7N57AC639WYt6gXarbDG3",
  "key30": "5LTpqBFnTzSSX97cUyjHP9borGJF65r1YysqZJiFh3VmGNKkchmLphb62zwdphKaYkctkmzTBo3PXMXuu2VKz8cg",
  "key31": "29CeVAWXXC3noaXh32ADUusaNUZ3CbsbV777NNRuntjNjcUU1v3Btsm5oq9VSFW8rtCvrSFNuuF3i2LKgPoW7NY5",
  "key32": "5BB38fmjcQ4uy5nPFW5VFZQB8QtCXkhx2WWRzro3QLDAs2YBjDdakPnJdVDPNGyajX2w5w1bqXPxTLDKAESxskk9",
  "key33": "2RXdXKWwFSjvx9Xu11BCN4Wcm9r3ZPY1oTWqT6LMobA3kRR2ryccE4nyat2Vi6ZhVyz27hKDbQANku9SE5hvnmYM",
  "key34": "617pmfaAnoQ7ALnbRVk5ZXUAhXRaBJ6uvRuH7ZZcsaXZ15FHqfhQM28CtsVNMydNjQmEHTVSM5WyDnS3BpkGCSAp",
  "key35": "JYK7K5VHdS7KzJb5RdCNAWz25wFJJNXsb4LXAegWspfL9M6neXiDKPxdj9h3t9vaEGLG35saenXDaAU9WNMrKCU",
  "key36": "3FYZ2hSBaZPoycZHmQGQFFFjeDBkUV1oCPHDTD2fPtznGzqXoJh2bnn9Vn4EEZL3eA6po7YGKqDJoPzVq1oJvdVk",
  "key37": "2p3BWVKg7SVW6ZcHTGJ7kBS4AoEqgcy3tptkzZ2uuCmeykjf1wQG8yovPneAK9WZgoy9jJ1D6Z3GU2Y27tQCdse4",
  "key38": "Vop8ujz4NJ419qZ3Zkuo7nve8eJeLGxktRi2QBRS927Y1CgGvmYXfxyWGmLS8yH1h3DGqUtrvfcTCFEoBTF1zYZ",
  "key39": "ZgXSpt5LTyjaoB1CnavT9TejBiRUh6jfgqqWEM7TquxcYG3oPNKrgRE8qcJDdhJi6E9YT8mwUd1JYzMef6dBCJL",
  "key40": "45uwuQNSDpML5zqnbheDLEZ541Yxnof8MsgNGQCRgf4KU8wAfeoQG6cGtoLRuFERmBCmB1fwm3ua12btTSZnYVAk",
  "key41": "2bLoWDswMtHeBWTDKLU25TrptkrWmsbAyFfRsvukF92Hs5jm8VNdjwRTgpGHkaZvZwfTfbk5F3mXupBzdUmqR1eh",
  "key42": "3tBswEkAFdTqnBTiKs7Q2kM9L44ttDhFkBuVtU88K7ig5h7PsSCYhZxfASTYPQCWiorZcuNjrmrUihKmXFPzmHKv"
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
