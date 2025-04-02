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
    "4fAo43id4tZJw7pibkTnmPJWxqKrNosFHo55tQ1KZ6LPdkvbcjsfiYFJPWezDtKmrz5NuGqfjmJg3yxCVR3Y6P8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d12oGkrR7zchzFJYByKMRCxBuMgnkJrHu57CzhxFwyvZ7MPW3iJQQ23pQfPQxQdQF8NQw7XBXndD3KeCPnikSzs",
  "key1": "2VdsB597mCCZKrSfka2JCUMB9Yd1EXTpaZum7tU24ZHsWhqVs8r2dJnbTbPUBbhRSLWtXVhQ2GY8xex3xmutY77G",
  "key2": "SLrGCLS4G4fkF3ofhURNPz8jgoNEpBtg9Ww9EPScvcynwygmxvimWycpdYe524GkRHGbef8zkFNMyi93GjVDJui",
  "key3": "5ALJ7LTiddNrWYThy41R4aHKhHtsgiqUtgrZERaSp7qeRuL4TEXCrAK1UyDF7UvcYCR9NAossZvDxUtiHo2UfD3W",
  "key4": "XGNCJNXDDJRKftKkCUn9GXFUHVY2HTVUzvDWMwL2UcSesiULBPqUgNNUjsS7PBsXvLUJo5398mXEm1iSCzui4Ld",
  "key5": "3geMMa7JdayDvvMaVejrVMAFms4r8TDQPFvZXwxNMD1MJ23FcRZsEkwiukvSiKDa6hrVnxhgBDEva8Ph7SaPZtkQ",
  "key6": "2Dr9BZV9GMFiaTjbCkzWh11xbu241ojegtaC5cdVCixUd8Loh2ZAn79vGSgXoTrZnxfSQw8T3gozkN7wRYrwia7a",
  "key7": "5XPZyXTFYWUAziEdr26CMCJu2kxd3qXsJPLc5bRiM9y2LSin4kxXqmFEcP89QfSiR9o1oL6JjBBV43eoVpGQREXw",
  "key8": "45wzxmH2qH7ksUUHtJoZfz9SXhhEPwr6fnWWp4PM1Hp2wCGdT6YHTRz8e7tUb7BmzvNAkGBRrZXHN7AdNnsfBwJi",
  "key9": "5j3yBKwDYaBZSJrzzRDfqwMeVhdWm9dbxECiMnDiqGehkZMryrNcUEWqjvGpSAyxVgRMnoxJnd8SvRedzSHcGfQk",
  "key10": "3GYiPw5pe4iG1EzheALkACNy2SZ9gCqThYd2RRr5ykzSbsL4ozcLLe4WLXYnLnSANuVaYbGSoYBE4PrEvcDR1YHV",
  "key11": "5nCR5EiB3g33bQsZJa1NqBfu8fikVGX7VebcJZ3i1BscB4h8fTZzrKjJJu6JGyhiVckJgzRqwqEab5YHEACX1dUG",
  "key12": "5iXU3bmv3QgC7QKSzdgGwK9BdQcbGpNyhZcDaeBSvoUnBh2BHhqPh6q3enTcGZVXF2jhAfpU87vyVt2N35s4sJv5",
  "key13": "4tdfYPfDjiHmHxB9vuYmjs6cpYMn3Z7nAn88TELx4iRHdiqKSXfWBViMtswaYuoA2urU1cM6Wjs7w4YCZ4SDrkHM",
  "key14": "4o5K9Vzp9wSyqPofs2k4sbyKJp7mCtZkK6X9gMhQQ9iCcgqHqE7ZTWeqnCsBCPX7qRChV7stu1pQxXbYjMKAMtb9",
  "key15": "33GKsh1tJ67PBG8MrpFJDfhg7vc7f96afxpnpUzMkQja1KWsXmvnEi5c2wN87B1Jdx2qsJtyKEiQVT6rHwATR38c",
  "key16": "2R5QTPXS8ZukF8GedAEJotMcwEQccA2L2LGYsms5h6m9DAdbZvamymb3yFv1ijRP8S5ft2oKKdSANGYntBsTgKXJ",
  "key17": "RCRENnR9Y5Le57m2YB4vkMb4tmJdhCt9ohdzQoifunXY47ZpcghRVMqxWcUDyBvCVhwMfUyQvwgGyUr4XMWZMxK",
  "key18": "2DFbqUb9Bw2qhCEDAB7YvASCtHpGP8MfGJeNbqALznVVdVsAtHP1sk8xWRyU8fFzyxWH2Bab5EKEXx6CZL3ziLjH",
  "key19": "wi5ocG3Qg8n1PdEvGrAWJupBDpyB5DRZ8H62yUUeSuaE7cuWs1WoJ387dCjg1biUw5aZCUzG8WXczSZ2xHeUhZC",
  "key20": "5kGnXWdng6ZQ7YvLgJyLrkWD9uxYY7ANZEc6tmRb87mbF1ESBQ2mBhpvyS8Bt5tC44PoVqqfHguyQvsqDgT7BxXh",
  "key21": "2uM8zNoZnDkstkQfWRy3HS7J5jyo2qvjtrhpBP7KSLnqeXPZCpXK4MxjcgQxsP3XSWg3Dwctq7rJknMp3VN5A9Co",
  "key22": "4tEJuKuZhCJtXf1Yh73Baao74a3NVyyGmu61C8cekMSLR5LpPkZZeoVPMn4Eom6g7j2dFYY4S476osKqiCug88EJ",
  "key23": "4qrnHUDmxY3mPaJGsiYARKHSxErZXiuNgG35Rr2Nq5bKjUe5aCoRy2LyG37gK6U6YUecbTJnkwWbsDfjCBznopnd",
  "key24": "3DJhWWLDDeErpN2jwc2YN2fc3KQPkL1uQZuWrd6up6C5ywx7YBzKQyjwgtPH1sSuvxgWhvvDVtWi1ny2AwJzSWCC",
  "key25": "5XBJbfoFiBcQkmhNTs6xfPg5VdW8foiVjT6MT2ondDX1WN4PMLjatqheo2EKPe5iDyU1yKcAQPbR5dp1knh8BrWj",
  "key26": "G8pJ8tCp8R6U8n85JxYp44qUK6DHY8P16JAgDPezQtfQuSXs9akYbTa5FXZpmFuV84gsiJis6SAFy59D5iV4dxF",
  "key27": "51ZXgrACRBMduvZdQktgF3SkX3LWRZqjg7oFcyK3pHhUDV78trEAFigTqUjAkrtRRonZLEgodtyU1Tzr5m56TiA6",
  "key28": "omUnaVkByaP26UqhYTCxtkFgDGay2XtHcmu4LVET7z1j2YMJXxrh3VszSq7BVDpAQJejdfD4kVwKJngGyT9X9sB",
  "key29": "4WTUuUunFMaEzexWPzigrAz75cmaVe6CuzfjekLeLtdLisCD187nQxQT5AgHXvu8gdFAaEP7RcxTJqHctY1ay6ys",
  "key30": "sApMJUNJXrpKNH4eFHcQVfMoqtNxaVuLMBBRV4q3TuSyQC3EDcXoMYDV1PPmqNmYw4brjuujM9cqKz98hcDrfxA",
  "key31": "4vpv2cdQYzhXRkco7idGPnQ9vtBwkwTtQBgdBzbU11HcxaEAtPXxdoyyLs2uBBJct1zNkqjV6dW6WfE4N4GqSpvg",
  "key32": "2kDyETHHZpk38NssWb7YifmtWW1V9MHJ1tyCnoCA4UeCkZCU3enRdbF4J5rYAUNLqJysGXMuERJr8hhQwekeHJD6",
  "key33": "3LcsrPUXpmT7udLdNSyC3sBCw2jhFNdyzdRYpMf5r3PdGTwG6bWoiFfYXkLjHh1U4Uy5QUMPBcmAZAThj3qQmroo",
  "key34": "5qLQW8oEtfwjRwdYtkjEpjyyqKUstGiQbHv1S5bJP47KWb7qZ1dUiskbre7EP85Q78URDWLp8WnbtPv4f33bK5xu",
  "key35": "21URYH1HyZipFjvT8nNXzZASrBARzw8YmBaBijijCcGNe8LodKYpd7SJbD3LCX57YzgxFL35XEFAuivcQphqTmc2",
  "key36": "21cXG5rv7v12VDRjh7mtM1Dbpp8QVd45NBArG4ztfrG8MCAc2dXfBHroKNrxGp6JhbdY9XkmCY9T8PbTBFdBs6t7",
  "key37": "sqhxDhWKLGtyMKZgtLeo9v9giqcrpVB5wYPzZbNkY1RspUuw3UcLNGJZyJKCtBGXJ1xjEfZF6wbudzUfvrh4D3P",
  "key38": "33Ady1WQa9g6NaErc4fCxhDtqJbBUKVh3KjYJinAfChj3Cks1Mt9TJGL4YSKp9FVEUR7qdJTmyUdgX6bRVEPYKWf",
  "key39": "3KGYFVqGkxMUHT76M5HSZPfbYvrE8RpD4QFKhJmdkkBa4K6YjfgtTUDCsRXycXrUEhz1onevjeXT21PiRG7yBjv6",
  "key40": "32ybuJViLzWff6K12DayHSiHDMip8oZAaC4Qh2ptnhwh1Pjqs9BLa5iDBhqECBtWpWBp4EtxEQFfD7mMWspKGFKU"
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
