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
    "6tHQG7JxKebv86Yv2JaqfvV62vh7yCVA6xhxdYJ3iW9kUeFQDaXKz1tYMqtD3sGpMCKPKUNkHw7cBccvVzLdgvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XJnVUREU9rDEN1xS8s99VTpZL4bbSjYbcZeV2jPiGWUWiUWPUtgzPL3RrzZckvWjFRamghbcXrJkaAGF8LETFpf",
  "key1": "3dbYLHkWVPhzLtmJysiMCSv3KfbbNgekXuN8kDbkoqxopUeW7EpNFbyr5ewE1jjg2zW2GitSJ6H7heEZVdzEhQtp",
  "key2": "6764GTFRd5srBKWSpVQSmBpc6Src7vWJEJ7WD52nbsQxycXUTZwyc716FN4uDFHXzYrj61DtQLbTJH2w8Cwuig4P",
  "key3": "2b91kyvLtvdRXxyHdJ5HNrx8x31147Fi4nUoVWStR3iPbj2RsVmGioa5BMeGVwNcdypyxk1T49KwvLZFHt4Y9Q1B",
  "key4": "4fYDpYd8J2KHdkXCKUPBUoy6tWwjxiD4rw95gwCp8q2SrtcASVWMgv1P4Pys54RvUeuUmUsZEbSCQDYgWWMPYBax",
  "key5": "4guXJY87j3WS3T6zqPTuZfkXZYtqYEfzs3jE3GDA37DGrWJBT7qYc7F3G1s2M3iBSKHAXPJ7urYpgjzZRuoLBa3D",
  "key6": "5Hm7y2SCPfE27k5DzaFFbC4ZQyXvACByZRvyq7SUwnHK5uNv6dPqSjWSeDDVwQmo7zq128UyRezJtTUHySfbvebc",
  "key7": "2E2VgAHk9f1aHcVu5wRvfmJLYnz4HCm2XatKT2d4ABNPk7LPpMjeSHwsMu4aHmu1wGYV7KBbKboUUfD9GXS4L7dh",
  "key8": "2nrmNL8cGf8AuNv1bTRwFGguTVkxtHwWbdfeqafkV3VSHdYGejdkRzu3cCGGMraXGJo13UxxaWggguFSo8gjgCrR",
  "key9": "bwPZGUouBAq45an349wcTH5FRiHe7k4HaqNhuDbusstV2WEvWsJTSaFy1RkFy3nwZiEWZPDrG9f7VXYywJFHe2r",
  "key10": "3tnmYBYYz3Uz3QyRSoJPDn7FutMUrEUmjU8dJXZbfw3ykcfhogWYr1XWrL5pRd3BS9YSowPprKCpiaB4rLRHwR8V",
  "key11": "5hAGgbuNPBkp8PMQpmrS4dL8tpnjRUVNdbUhbnoeDCGoeACT5tPo8RdUjiVxjSLejTLusAw42m8QaA1Kd3uhpKHL",
  "key12": "5Bzco19rNa4Gj5BEjxyPDtMaYPQuwUYBasf3UBPHAZP5NT7V4ATodFywQ9adQSEdyMvoeQzjQXuSs7WvXH9HFV6s",
  "key13": "4o9aM24tXAxJX2bCaBucMdsSmVmMYc9vBs24E2bDBTnv3MNaXLiKbACJv8Mfy6xpbk5Qgvp7AQuVghDxjWdxFz3u",
  "key14": "4inMYA9v69fPDxKwVBo9qHew8o5djzwfaxZTbmWqrF86k71VqXu3Djqa3XgCuuEic7z2jTa26DUepgMu7vKYAB4K",
  "key15": "5bP2GHy9Rg4mi46CFsjUUmtr8RSBK2RwsENaAgQbBPNtKvJe7x1nNArLCQxVVNeBryGGy6hxozs4gi1SAy9Cqps9",
  "key16": "3ppcm5JiHZmqokWN92upqCDmKMu538edNEUrvGsgNauVy7X4pcy7o2qCunsj5kN7FPn4G3S3pb8xqnxtRQVRQ26P",
  "key17": "2DYYGNEMK9qTX1eaeJsJcXYEH3gPos3P84nRrHgfvjzp4PC85Prkm91JA8B8zsf93qVEmDDxKH9Ykjybbdg38bmg",
  "key18": "ZwrNmihuK1haqHuq6tedeqmFgRS19tSaRrTE4YS6eQpYnDH9SSbMxvMYB2RWU5MXuf68mEwAy9UCjErim3zuAQW",
  "key19": "3rKKAPxxRTFKjUemcZhY9dQ5n99PJ95CiyHazPc69jGdacjC6fX1WjE3emzRidgzF9TGauwuTnrhmftCQBhDSivr",
  "key20": "9ukKiR1QkxxqBG5XK79am1RnvjCFoSRY2YraSUpBxGRFi5RYi6VB6yA6gEbC2RmJDX4zWvY4HjnGEmgndTeSbTZ",
  "key21": "GQfmgimfUksWuKqdZTYnv1PSGjWxEsMwb7kCgFLxFoLnUTyBxRg3wwgHKnKzeviGwBfZ6zEqPFYtfNJi8dqoigy",
  "key22": "5CZJW6JJEuHJhDWR8gFMYemyBqPX4THv9pihk3Vv1poqBWt4V4MFrkHArDV6JuRWsNGeCmhAUrMkUBRHpZSENi83",
  "key23": "3jqSZWpExtTvGk86CqjRS44iEvLcPvKwVg6WauBCAsJYLxae2xbJNS7Q74QjuJSw5BGRAvAhFtxS8fDu3FBzH3eQ",
  "key24": "2fgbEmUrSh6HppA8hC4Ph6UjgPL4ehHQcsTmQGnJvitMifEtmpBXDhQu9sGPHf5pQcJpgYuvBmNR96dJN4reZYEt",
  "key25": "3ivrCq1PbZCRVjveCSd1qNh1vbc8jDHZA3nsKYDe36phyyqXN9yPduWVvBN3GLc5F15MfxAtyy3kkKz4CaUYZysw",
  "key26": "28ubZaeiDbMR4NDsh9NR8efZUF25ovAJFbXH5a7bUxrqe8nFqVVGqNXT8KzofTsHy5bbXGkMmDcCXijnvD9AdyjU",
  "key27": "4bzgMSMXCN7AZFqDFPPQ8YW8XuCPD8sGrGc7x7Uas2idZ4DsDca9q6k1KD67nwGDmgqGFZmJT1aA8NaMWxPb5ukS",
  "key28": "4q8nX22BFRZPGH1N5Q64gigzyDZDoX7TzLvyfmLBbs2MXRRg772uqpUva48MqJfGtLndJ6bSpXUreoBqmLQdRZDa",
  "key29": "5xNK7ymopaocW8G8JYJuMUoEFbcVu8xADDGFaxEeiZdVR7h4q6WZqBHHLPfzZYhFZZbRE8SP8q878w4SaotHpyn6",
  "key30": "3u75Ceh5zqgkm5eBcEePgeFyPhMoP624oGwDYcZSm48s6oXxCCNgBeh1u6HEYQYCn2Ws3bEEfPZqASwbM82qMeu5",
  "key31": "5VnJHMtbFgoFNj2YsZdoqpWsrqpkRKJWh2i5SHsoVwoooprwtKYndiEpTVRHXwyra2AfnJXVgHofAFRubffwxSDF",
  "key32": "4MuGt4DhapLALvjRZCHpgpuF4UbghTp3G7cShusTkooDQS5xSvZnQ9xLuYEQ3NFKUYTRxEjtTNKtWnzCPZYQqVK4",
  "key33": "xRXk72k4UQBS9NhsncdVkFHuH1Ub8pyDJjqYvPKH6t4BpdQFiAUQCAS8EHFDApPJcyZFKoZ361G318DLYMmpKbV",
  "key34": "hfv1632G6TN8NupAdZDHoyHRjfZA9oDAiYiS87rEvHgef5Eks4RchvjbmE2y6hQgzhd62kP1NtK4dPXZ6pGs1is",
  "key35": "4vSW7TEyBFb7yQqhvgxoQohZUC5cu2D7VeZRyjFJSRxAfM2JTpFtYJj8yi5yQDVUM35JnukCfSwwXT82oLZ1Zzy2",
  "key36": "4t4XEbFf4EHqatJtT155d9jHCU2XnMzZM8FM4U6TU9MmWcCioSeJcTgJAMdzXuB274FSUojvLAmY6248d8TRuxsN",
  "key37": "4B7tCcPoZVCZQfS5YRFkVassrRdjfvsVG5fNaVkEfZZ42Wek88hBNozJGgTFDv7x1BsHb6YRDqbnUm6W17WVAVTV",
  "key38": "5qgubWXuPEj14LE8S3U1xRtoZDPaFDRWN4GSKvXeVkCXsEXPZyuCwGzAB2wt15z3W5zutrZPr4TnhwAS6hQ6EvKC",
  "key39": "39482i1sPgRweeaSuEegHDSvyBibaZsmgt3CtzJPkVn9UafeVNpybBrgTiV5iAm8zQawywn8vBRvyPT6jHaqsbM9",
  "key40": "54dLqgkXtkMTgHCvnwxCFR8tFMH29eYShsNxSwYU7VhyEnfqpLqBRrV27mJ9BTob5zuPq9gwukVLh98zwrxeHz9b",
  "key41": "66dRn9qTs192mxUF9DvbkQkPAgPw3c1ZyUeoL75qkUDWn4oLhmvoAUau5EwwkikWd6sCnxk4ga48fmN1JdVc8ME3",
  "key42": "nzkbziP4EDFqT1bRGsyHVPC6ABz94xxxZYCyQ4i9Yz2CKrwo1EiSQkhyNEKwj7QwoLSmEwYR3Ev1kYXYr5CG3id",
  "key43": "2FNiYeJAU2zwUsQP4SLHCkFXEWPW69t8syQNjgo8iMiuoEd7jQQJHd8c9rhoVnFzRgi1BnqmAgnQB8QgzjW7N5cU",
  "key44": "L95oyj2reqGQBC5uknN3UpcSWzZhTZnghvykJHY3mSVmhQp55z4ERnN7UqGMtiTkm9nkvBAmuJfaQ2MaGn9Vhri"
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
