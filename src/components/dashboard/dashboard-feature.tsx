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
    "4BPH6wAUu13N3R4Ph9NXF5BrsXqisPbe21Yqdvxwx3FAErsfQ6Sw9gRUb3xd1PDEivXk2k4ZRmwiRge1xEcwK9FP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u9W7NRjMBa4gusBgog7nMHDvjT6LUgDHAzYn4kMYcAJ11w5uezuUPW9UXmTyK5PzTYgFfTzBh47DuF5ZgJdsf8u",
  "key1": "5kRPtVQ9hSa7WpaFSrvBazirxiHELtdghu8YPDyfGtnTEtZBPobmr2Z5bLVYT85EfTSULmSYotmgig3ZBGFtGKKc",
  "key2": "54dpujUK62FtJynXDGeZeq6gLGJJPWKf1mUBG4c7dz9Tg3Lpz6dpVoAvncMqmtJ2dcJFz24VDgdJZAVcQD4bshqJ",
  "key3": "gTCfoetUhyGvoQCqxTNFnF7CqJRUpGKFejpuH7s7bcVT9qWG4G5EEi3Yzv97gk1oQovaW3otwacrzfNsNHH2hzr",
  "key4": "5heJUqFaX53QFepgo8xSuDb6aV6WZnZfwb2HDuXae8T2iy6NcACT2Nu152HPErY1QoWyiw6sjFUiJQX1M2JRfBec",
  "key5": "Z96fCv9BH8LHAVjiNr1dnW3BDKjPtakNLqYnsDWejndfyRD7g3qLdVdg26RGmRZi6QwNBPYUoNT533cq1QSRguS",
  "key6": "5Aip2ffobhRbckNLXWhigGzbNYEkVKyGDALL675ZVVp9z8SsQwEprRbsSkoroPoK3gnAyAi8VAR4qcLAyJWnCPYG",
  "key7": "ca6E9E8oW3aCU6o3uAsh6ZuYnEPqku91xXj551dUQxSNhN4JRZt6hQwyy2u3ahy4ncqZq4y2TYFhH1YowdLX3zs",
  "key8": "p9JHeW8npgp3qmsy5a6KF6zq1YCkAm6nMq4pdANaUahDyUpNdDhEUwkh9TJJQJsuwUiJUwB1Ae57VqqfDEVkNq9",
  "key9": "tSXLDTZCZ2vPxFWTCZ925AJMfZqpQBmzRHdEftsAi7FxRKyaCiyGShSKxiFHehb81tFiJbRGAaq9w9g3scf3gUK",
  "key10": "2tMSzoi7LLEYoBj8Vh8koxCBSz7Ec2sGZShuMmVdEu5cJtiXHpWaWSDE8vJVbSxDRRiY5SJ3iz6yR2D2madxb3zh",
  "key11": "5Be5yvabqVA7tgSwDcyLZFvUrJ69q5f3W15W5nMnrEaouFFRs7tzrs9rzWb6yXQpoGP9HP91Py7qgnKTB8gZ7fP8",
  "key12": "FT2QsbzkjhP7moZH3mdBFR6hLxkfcvWVeGn2jPT6WKJsUQBkHUv8maF3M1h8uZtfxbDdvdyw5ka4UVJNyktjndJ",
  "key13": "55bo5hnBB6cS6ZSB2xSNQKkq1avXVD3MJ8qu19dYAjHrfCz4S7q2EfBW8p8c7rTg7uPh7z5uk2xXx9vehkN898En",
  "key14": "2WXsLCL2z5HKtqyuxouf7s86LRFmWiFkqoeiib5AGLVoG2WUbCSYSWz8aDLE2Fras2PbBfR26x93kujWZAF15V9W",
  "key15": "2ttTdNQYVdxRp47hUY5YvoD2FjTeKxWCBu2CHMAVr42YvA3R2HvMog1t5CWwsnkzbXX7nyp4zUD9hNLut1zZtDuF",
  "key16": "5qMjJ14cQe49uxdmPVBU2cVQjkd7JCq2DB34LVAu4MtoAACKQejNhHHNTpyjUKVQKvrWAv6e6waarZGtjUJ5kory",
  "key17": "485MW3eky5queKt3fkFbTUQDyoAksdvf8JFrw43kP6y8CQt8HSzjijfJzdRGgaDdBZhnU5Sb2JEDLBLLsknZ8N5",
  "key18": "5hj3P65abExu7eAWPaSxNWrWv3gSy7KD1im33NUFTgXyDVB4FTEgGNXZm6nenvT6VdTnjsbHKfaa5DePhNBViAf1",
  "key19": "5E9YXGvxM4TsGxJZtEX7qUecXsQbFSbycSFyLUpbgLuA1jsqA7MeUsW1GWEgZ7TQsmwvbsGrq8WTzZ6A2863s1sQ",
  "key20": "5rszepxSv65NwzcCpxxWdASqGE6WaRwXn3v1Fst2yt9UtzqrRXKyXJ2onHcsMHtzNYZYqiiPknhembMoocANgRdG",
  "key21": "48L1uEVejDJcR8yJWes8QkMZQJs8QXXqDKGrmsjzT8Vi7aKk3gdfVYAhvuW3cAvbBMGftDYnS64e4cWfZnS1spQB",
  "key22": "3w29k14ph3HJWFiGKk6aagcQYLu3yFmri9EP41VqQLt8vwyzP4325h3yG6J67his2psto3YXvbPuvvJDcYC6BGBC",
  "key23": "3s2D1WDmdmiPBK3ygoXqKhdpQXjfHNc5YXPSQhGL6uAqqppLjatgD4MhYiRDfDq57X8SET88uQLHYADodPGTCWr7",
  "key24": "23yLioP4C3SsbEVvAsmZCrJBSxZTayFXg7a959bH6j8rrCvbSgh6LYpfyC5r33HTrd7tpd2PTagtF972LUTCWhRv",
  "key25": "5ee5RP1sgvJrN9zNAizSwyEWR9WUqVG762TDXveFSBiSBPTccDKFi6yDzypyXHVUaVV5MjgMUn6reWG7WHbZCbho",
  "key26": "46wzW2vY5bmrmKedf2Qqdz1TT5oCBvbPcb8SY9tF2qKK3sym8smUAc7aBcvEdjByzJuF7cDEzukBviNrWRdFeP6Y",
  "key27": "3rkVRbuTqEMnh4NxpQyadLSAgSEx1rZa6C6Q8fqrr95dsHbvD7Cnwdv7xPQbRZ1p2Tqtf6dCatAiVyDfAFwgrHyF",
  "key28": "4gk8k7EG9QVPvi9SneJ9M6GqzFahjFJnig7X8KDhXGgdrzEEUQoMDvrmJQtbnESpX6THyhGvF7hF1BifgX2BKxvd",
  "key29": "jtioRycGWWyhbALDHY87NeV2T8SyqaGSSqrUH7zQLJsHpiXGbyzRdytU247vbBcwq4UXFTJNR6pGsrwapTRPsZm",
  "key30": "2Nz1oqWerE5dxnh5a2R1brHno4gihC4FXJQgSsBVGnZvCxKUYXNWz97VaftvZqb6PC1xzWfm2Wg9Kcp1M56YepKH",
  "key31": "3Bn2qBpq8WbbgBdWSt1j7fEsuT4ParzwkNvqsPzBLj4CzndFAm1xP2LqWdcPyCLRvvXEPJeUG2hQkNmoKGQtbrr8",
  "key32": "2troWdEgmiPrvd6JTd5mNNvNV9Yefh5cqMeH4RvMAyDwRUBCQp26GnrLUHceCWCe5boEPM6xPKfj4SmkcQY4xVqc",
  "key33": "4bmWyUyE5DfwckN9xuhUxERLYQgYPB2QPEvi9ALMQgFE2B9J7pxNLKcjazkv1GmjpPXx9W94HBDjK6Bc2XTdFf6y",
  "key34": "5tGARN89sn1RWAjB3RY3RHdh4eFNoiVhAin4k68WCSqYxHdS6JrHPLbeY3DoAGrdVyNpnzkAV4vvUU21qEaBz8tv",
  "key35": "5TfS5qEtFCo92tk9tiXBZ7SX4TKYQ3c1x6Xw5cPU8diq61SznVjAWnErDWbHknL4DkLjJFz2sDZBWpW4XmdRLauG",
  "key36": "tTVv14wzpY2nQAU1VYpcgVq2pEzTgK9gfhYr78pjAdasxoik5MmsMrJSB1vMLUxt9gcNyFeEEXRgoT9dDAH1cm5",
  "key37": "24HmEH2cBZxvEx2oUaY6hsbb69gkLeBGuLAdnd8g4FUXiQBPqKi2FYmXFwswKmSX19DadHCKokQp9n5kEzH5pqd7",
  "key38": "2Gv4i1bhFCpZ7UWnst64zcYZW7VPkoKCj6Pf3iLz5Bc1GcFDqffY5sHoM4uSzRLBjGGKFij3ZP1BMfb13C627PAo",
  "key39": "4tXHE2d1EZVVRXytvjNJjzGK1rKzsopcrHwxcH81jaSYbQN6aQ7vZtX3PSRjwn6BUGHW1uMAwqeGf3TXptfHbQRn",
  "key40": "5YToRbhetJKSfdfrfza1Tn8LjqscQ37KgA8rZfNpLdc7Np5iEUkAu9GGSidHbbEk6pwP7qEwENduLjGwuH4FBAwy",
  "key41": "gRsYVVoqwVrJ1EU8e2QZ1czFWYLVooz4x3zdUku8E6QfBH9o2JxwqbsecJz5He7G3w5R4PEciy8WrqczB3d5tS7",
  "key42": "5w3gf9x4kiu6yBnezHoupyxeKhaKdDtdnAoSVmpGWXdFSpM2T8ZQxd7ii6QHHvNDZGug1BqDwWv8MZMA2jvHEmPN",
  "key43": "5YH71m6KBmcgfz1Sy5qbR5R9Yo7zH5LZeB743dfvqoqVoLWYGfLp4d8rBCRd4aDptQaKxxrHeH2NmWBqL2YxuEpd",
  "key44": "5a45iTett74jwuBViB9HbbFUeeu7osZXSnm53tcfeCjgcmiauFUxh56sRpAm5TFArhyxx4kuvr8C6pXi2d6vsScZ",
  "key45": "5iZXKHuHTdPDhfk8rUNDUrcwFxGFroH8GxonYvaXDrF4RQs9tkccUXvpPdEUc4MkddnsueVRLRmATScfhwyZaznH",
  "key46": "2v6LobYBiBVD5SypgqL9dqTaje5dJ4zBCaMdJE3BQoascFZzucZQAhgWFeTDMD4FHjLgXSQZ6CkmCkZA4NqY7BPR"
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
