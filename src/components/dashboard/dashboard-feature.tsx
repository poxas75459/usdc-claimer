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
    "2iEhkLb7UXjYd5kdcDCG9frt4iVUW52vVzMmwfUprZThQygmj7z51ugQE8cBPs4UU1ftJVGFgtQr7STcWKc5yqyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29tFedr35cYNQRkCKJRRcgGfpTaZKKeKDKXvZFVT1beW83i1S5s5tnSL8PeK7YiyHzfkMuuNo6ZXHR53VJFuWxa7",
  "key1": "38fdMK7zWghvE7LGRGDztoSnLPKt6tmBQHLyvhXo3GrxNPdnH2gBxt9oY4AkwsJX9QEVbmT2SvuUS9aoN15HsE6d",
  "key2": "4jbahW2TRTZeCo8pdmcReggpdeBcej9xVmqmcN79FCfPDpcTozPqyaR8RbaY1aTJer6KGnoSHaRP1XCmbCRZs6iK",
  "key3": "4P7hWEJ5zN2uGN4yMm79eqftNP4RPku9QFz981HfUfsKH3F6HgZJufPSVjBYP1bn2Cp646YggscyyeZceHaNPTJy",
  "key4": "n4QyCEzyEdH5eih5rs7MBoG4BGNc1hRiEp77JkPd4VCZ12QpYxaofKAhPDKBndnKtm2tNdVpFgXK3iqqqr1xyEK",
  "key5": "5UFhZphceS8iPnFtXLDjBimEmVSxH87mAcJQtcmZPuudqvARW1tAzSwX9WUHgjJhUsdAAf5rc6Mo27zDHwNy76US",
  "key6": "5PEGb8MeAowAHGcoytyqxFAQo5ZiXWk6msWcPQKsCY3L44SR7izyLY7syQoyRQfPGeLsiuZHHr3H1jyG1UyWEzRw",
  "key7": "3AFbj5xqGY3iXXaedh8b3mzZHpAFpjp2EP7rrTqY7QNhuJwwtDk4A5yQYvitzae3ZYUexsBCpyhwVm6s8iNhDPXM",
  "key8": "52Hk7pxEb1TYuxcQafRX71CfE9iuvBGPALGSaV3ZjHRGshb8CEdDst5NsWXxETnr6fhc65Rwre1jQujeoxtQDiak",
  "key9": "2PHpmS5eBYkTfhbs1fpi1j6kY31ajKB5bvik9RoXmHjaWnq6qrTvgGWv5cCWTbFYG6rTje6M62dcpKgbc9vxPhCG",
  "key10": "2LPFfY42rbzUFTrbSXybuHpyRa4GdK6ZxeqYbU2e74U54fGm9YrvPQv5DA85L4s5UFebDxYAVSRZWjD73XufsMVL",
  "key11": "5kp1FumFrSEiQ5CBwkGfHCiydaJpjGLPz1if9fhsA1umE8ENA8egTQPNSF4SCyRJMk3yHDBRxuw5D8B91ou86dte",
  "key12": "2q18b6yQ5ZxamBXfy42BmnGMjtfPWGVzoiJgB7UoGnECMG19r74ujdAx6xzz1HsERvUy9BKAEe5XhE2mVB46C3Qc",
  "key13": "5gtH1GaHoQ93uyAEmA7SHNXwepxhkr56mCunLk69SNEEE8qbTnGgGARW4aZWSGPPkK3JdG1FbrTfE2q8TG4PvF8D",
  "key14": "3UPWRrFNWyzdWHBgrFhfKJM7HgJDJtRLrzMicTyd1seRxSZMbDkxx6583QL7GJXfBX4D21Kk7yuwYPuuk2HcBw4N",
  "key15": "3WQTFZC887BEn2gwXw4JpVCgjMtgPzUuXEn4x89nzgkRF2rC6kcPzafSLETXqpMg5JPg138GVrbbTPNTUF5Q1rgA",
  "key16": "3cimFCY3RtFyMH9o4m7uNLx4ApCLPcTvuU8JVzP4jEAQfRXzfqUPd6ToNCjdijicPP1bworamVHoaTsjJzaKdZUf",
  "key17": "3onsX4PGAxJp3qUmZMGXTfRFzNnEzt1Y45G3i1zVdocKD5tXvTa9yEkLCunDMH6xXBc652FVC49j4mLxfo3r7Atv",
  "key18": "4PSH7j4ikgszjL2sab1gs83S4y1d4trNd919jysUSrdsVM8mA1MnJYADjKZSrcAEfKJw9fmuCTffsKCgRFgahXXu",
  "key19": "Zx5au3gPJVnprPsU6oSccYDU5UESD9xVBFDWxmSMh9fi1oryZ8N3vAy6sD6HCbnwYdBaunDhoi2cw5p3guZGrGX",
  "key20": "FNnknYNyXS37BL6cCwzk2f5zVfLCgpBUFbA65knQWEqnxnZpEKbuQJiANsYL5cXhAWEK1uydpRKm44oGcJJQUTY",
  "key21": "2BKmDoHqLeZzTzksX63sZK778YkCngArupBTEC3d3ehTj7TMxXDqpADhBfT4LXZrXPCVmwp964LasWne1FnroXye",
  "key22": "2GCiHskCakZMDLDtE8onjdBmYsyBAcVhc3DghnknAJAtJJA3NHdfYGAUPPf1qiJzPYmPfW8pLv3op1X97DEpJ34e",
  "key23": "5AxwJgUAAq12RXv7v5j7xsTaejPErA2RyUg4Rinnws69vRMh3jT6EQAriGPLj6KUM1Uf9z37AmvAtQW6sVus2H9C",
  "key24": "3nK24dUhq8mrtvYJkFQvxjPEwWgQJoD16HSe95se9J4orCxeHJGNLkLTub91afpPzN7gjeXqGZkCuT3v99MYVFwr",
  "key25": "51N58LmeMTAbYBkATTwvUajxSZxqPsR54NVmCpb75uq4sqyrAQkbnvpF6tHydMsd7zGNEi5gCeEn2wt852QZiZHs",
  "key26": "WXuvSahjpwKtjUey1VBaA9DVk84LCKSHG3vWqkhLGp3qNZbFbFWR2wjtYozdKb6UArEJGRRiH22tsKSmajeMo3K",
  "key27": "5e4vb3SUw6XHiSfz6mFbqy69E6jrKafTCApKjiNcjb6Bv6kL2c1Hc1qwcrM89hL4nqEyT3pa73riSuEmktC228S9",
  "key28": "4EFVw39sDt4iJWbTZXhRHq43Mfq91geDzkgMzVb8HqbZT5A1DWJGLKX5j98neEwkAFcX6JN93EAE1caU1EfxLnbF",
  "key29": "5QDYZSZ1UYLLdRbKoS8eHU6d5JX2pHkdgo17Nygmw6t2GhEVNy7HyT9jvZisRihUFmXycEiM5qj4rHGXSKngx6Ty",
  "key30": "5gCLVktHogYaaLM4sMAHMA6uo1CPtpoJGSAPF4a7DMKUW7fYNutMzCMxF9agqAB3y23yLe3GdNiHgUMXzSkwhgUt",
  "key31": "2ZeW62G2xGeNXfBNZLMnLUbD9wRknFegsQsdE7TMJAva1z5Hemk8gqCXdjMWsXKo3HhLDdD4Wd4Xymm2rsmxbKuW",
  "key32": "oNx5cYN5A3myRmRHmpSKyBbDMsKsZ1icuMbAATdQJae4RxkbkMY3SnSbZK9nrWjpDP9sQetHN9zLAyyUbZYtKWz",
  "key33": "4d3FNNgdw2Yqj75bv6kuMmd9fRSgWcyujFSFhvmttG2a2fb95qDqveeFt9sL4LTe6CRqku33Cueuvz3sUCMVrBCN",
  "key34": "4KtY1tfNVGecSwBmoPu884mYmj9McYezoNrDW4gocvVUEijq2wDqdQ594o7XyUXKeYNp9GwhKi14HcpDyBuJGTkB",
  "key35": "9RD4n9T13XXkBdwrqzvk8uYFhrvEDFVqkEhvVCj8rve9PhnyQF5KwPyMiQRss9qMgt53utb1FhTWTWvfz5V8PmW",
  "key36": "51JaY1jFx833G6LSrXsF5gdr1M7dU85BPuXMPQ5fX5DWbQzhWKVKAiPqXKxR53bU1msyU4Joso1qDhcXNSM5c194",
  "key37": "2V9eaUSE7SpGvREQLqft9YvBdguChYynVz46cDWDjj64fuyq3mYvUzJzmdNjKsr5Wx6AbNkv97Nhsow1G9q8kNNN",
  "key38": "28aShcj86FG98mkKtme5MDzcv1aBzSBG9n3Lgz8ki6y641uwCivN99F6R5Kd2jhzgd7dMfdHYPeA76qsrzUUgbaT",
  "key39": "2oMhE8dvphaLBXWTvzHRokFFZUG8SFmthPCFXQC4b8fTjS6uYcfYJzSCJJP24c1dRnLfwVwBtnj97vtpNw4zUcXj",
  "key40": "2PArn7xgMHRQTxP2bogyNudDr3nMrxtqcDz75iTtGELJ5q3BtJ17ZiuWPoBZpVMcsWS8w5a7FwB5JMBFAmPjg4zh",
  "key41": "3BxWxifrLERmkvW3MH1hwpPjK38mYUdDwWx7RCk33TSKb2e5f9E7778xjH5C5dkJ4TP85rLEeMLkvzhYJuhmCkpt",
  "key42": "4uAeX44X6xRQW2DdQVKqzmrmhhg1ddQvRieM4S2yij2my3AqW3VLRFpBSH9cCRFgAcNApHXDh3VSCJt1Gkp11Mst",
  "key43": "5osq7dx3yMxxqJxPjMzcf6kJvz22q6qxrAt3LRU26UkwS23xexYGHL6Du9T5dC8xFzME4XGP2wK8DQTpX1a6uSw4",
  "key44": "31scwgRGTbpydm3DfDBWfvaZ9m3mEVtLA3G6MeMDXzhHk3eYDQcFkaEag5NB4zJypdPVsAGUeRFGtfisGPnyMWtc",
  "key45": "3r7gnY98v1Xpt94TDYBhLX6ovtoGZ9U8jDpzuqMY9nAvQSYk9bAjphmTZJJ8PNz2WU32mDj5MyJ6XtA8ruC3a95e",
  "key46": "4usqUpdJNPWL1Jf7XqNiFMgPFx7dByCjt76aCsGVNEksoNX4hf1brPy29VSuX8oY5QboL6eguWH8wvT3A1r4tBe4"
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
