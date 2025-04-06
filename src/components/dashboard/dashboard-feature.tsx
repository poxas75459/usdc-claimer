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
    "3UhSQnoXfv5AVESsAmEYtF7ty7Ln8F75fFtfRWcuqK1YmjVGkgNaaJA8dXcDwzCPrFp3xmDP5tYDQaTJxMtY8La3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25EuNhJrFBsF9e1kmrL5sPpgve1D4YpYhNZZgmpvR57k6niLrrTfqrUF8qHHUQkQ4NrcnG4zdS7tSLGo25ZNaZTX",
  "key1": "3WMxB9HESsfZJa6baAbFRPKcEKQGfEZTtXTCEVNHe1r9rfr1ZpxbjoSW1BWuK8csjVbF4HmHXDY4ev6oGA5Pgun5",
  "key2": "3yCTP7sXKX121KJgW4EBdqMfVToAvEM8oHtXZqTqSr8cXYQobwtfcAyDZmeYTTVCtwRu6EYysuVysAnEz1odYTZm",
  "key3": "2MLE1CWm26ePZLxZr25y5SEEUvwKxBukd94sVMHgewJse8FrggjARY2U1QHTyqJRFZXtFEFrhxcmU7KDsjTwXDcR",
  "key4": "2Aa3STQ356WecYeGTVoiscJDHjdn7V7NCWtkfvEUueYe89bomdwmJaxxFgrWEYwz2fE2X7wEJKNQ7SFi9Sb6oqbv",
  "key5": "2Lyqy3efhaTZd272AvuqzGyFFvm2hW5QF5QZKv4b9vjLNCSvTUCFATZMop223KAEKKTMrNHsRwLNgiVyyowgwPXy",
  "key6": "4WhpTajUKB89siLuDWar1AL4xsBXH5gu8RGkDasx2vhzW8GyxeSNL8mijbwGhwG4MDrvx3eD6XPwQTVnGXRTKgPQ",
  "key7": "299nEUaGyMoZpW5Dooj1tH7awXznwurtHUuRbBJnLSXRaMGXAfXBCjRKuX1SwTudscwhWyNLkbMiL9kZBxQgncGq",
  "key8": "2fkNjKfmFc1p4ry2BxaEuFuwszuRdb1FUfR8Leg7k5Ufgs4mjUJwPPNfF2Y3sUvZ6nnEwipgGiBjGq3wfDMfh7za",
  "key9": "2Xh4kMhVVBrtU8aaqWg9ukx7zXcmajGzhtW7vrW5KiGHoTe13akHSpF91nbytx9Bc5xz6gd6ysPtG9xsS89cgwPi",
  "key10": "2Sw3Sb9HP4s1Qna93axNfduG59ezU5a7x45pcYu7fw2a25y7uWe3S6Qax1e3NTxF6gzaakhnZfs8ZdLS9bTJt8r3",
  "key11": "3isyop3oKDNKy2SCfzco5MxvoYdXCCdrmHQx3b9GEqU2uNeyrDVdQucvsvtRdaqUCBzmZNNzipyNyi11MfnADzD",
  "key12": "4idKSPoFuFmNaNt5zRXJwdf5xhvitbrr9ZfQVQBUBKwZTTMxmELXY4yswMBDpFtbTqQaEu81YdM9DeRkcLS8Yusm",
  "key13": "3Kiw6zn6TmugP9fycKPjyRZ367o9VHbT5v5DRnZ9vwZi2vkPWZohhiAEtTSHbViKJ6Q776GMs278a9KytmdidC5d",
  "key14": "5xcJJH8UhQUTZPyjWcDTrX23wbsMDrqF4nq1ShMiVULszjb3TAMtb5Q3HwePYkAcNECfRhmsxoTcF7GLLSWopapp",
  "key15": "LqK5TGWmUF18NqQrY67bAJVUyW3LZrH2Hn5dpBWjdw9pjWavqz3ae4crKs4aGp7wRvGM3yG5k3R54ZWzHMSg7SD",
  "key16": "3PLLCFybJmtp3mVsjA2QEqjkymT4TcMqRPqp1cP2EFzfj4a3aYcUNmwvoWvCyaaLv1gipQdsyoo7GgbXnCSvDUpN",
  "key17": "4XhvSszTbs9pDxG6nNn8hY2vErfRT9VyLcvEn8HnyYR5KJ8rKaCSHM3iE6PZobQSnBpTQmpqEYxASrn6bUbpuVjL",
  "key18": "63ERUQwD4NzQNPgRyux3axUD1NZfHWhFVJvuJ2vN4B1NDGiPrScCHAzPRNkLHvVmaqTd8o4i7pxhCTTQn8uPVMsr",
  "key19": "5FABGNKsdyVsEASESDnmz8exdXvyJ2dXtw4gqXxhP4TegVUSnPkyehYn8vuVJs2qSkFs1h1DTdR7pXTzzR7maDBW",
  "key20": "5qanWANQwYYLcgcfeqRg1sokfc6ray33Yfu2YwRZJ15YvjXuT6mezpoS1Tkd6fu54yLTEQowtRFQKHNhsn6PQy6T",
  "key21": "4CX75Z9ykWhata42BBmw8jYd4HBQ5tzcYXSZED6FMGZs9i6r63oxG1wfY4kiBAkLEopSHxHfQERWhkenxeVZoapd",
  "key22": "E9dWztEi6vKteCempstn97vn2fraPe5JoRDSKaUJe4HJeqdyaGWs3DfwC8JRm4hzT94dijJwsnvfCp3Y7wHsXuJ",
  "key23": "2CZe36sMzGyZuNeZAPe9fiAm3uXKU3qViuvKZbaC2TWUZxZ75UioXFq2BLEYuHSqok8g5VBxC4gkFrhrxu8FHSZB",
  "key24": "2qBqEGYNag2Geyt5mEz7fSG3R1MxYy3bzti6jzh7bWDEAfFhiqC1v4wf1Zne5j6nrXNCmYCgk4orAXM2FKr4CJAJ",
  "key25": "3YaTC1NU7mNqwaFYbC24VbegXT2o2gkYEHgLisjFuD5JMVEzU5JhWWmasN7BshBPwAGv5dRRsKo53BV1AWtMgp3r",
  "key26": "2r8gUSEnNenGcTaXaw1tiQLkw1JCWreghR2Auy4JBPGHyNi7rKHQEM6gRQ213BztfLamaVGMVFnEsebQqPobD3Ef",
  "key27": "1YZvcLLUW3jGgzittrgX5f4RraPM9m8Qz7kEHwksUsr4AcTnRGafzJMiQzP44VQdedZc2GB9ActRfh3LvCA6HaT",
  "key28": "3KfS1n8CseNgzMvD15GHTLsa4YUs116yhyEKUyKgmyRWzRX2yvdtxHKCTqNRP9VatQD7SjcBBQ3sbH9YkEMEXeVf",
  "key29": "2ypQAHUNoPxGeekWRrUB1czaL2m7WuL4SVGmt6ftznctb3gk6RC6jZ8DWYmhZSfsjSp88jqgEKa1LinsALawN2a7",
  "key30": "2DTsQmQPw63GXvYHhx752yobdEd3aHHVpZp5ipgQgox4MVc2888Gw4CpQEhfC7pxmyKvAuc6pbxA3oPzEB6gi3Un",
  "key31": "3an4Kcv4m2jFv6LA7Y2xEyonNQt5UgMw66dizY4GjqhVgNcYtMtEh1FuyikMPxzKQJ7rQsjRbKvTpdLBmPkwq75s",
  "key32": "MGoNofXd1eoxSKyxxK9ZfK5wuCehoYmwzeMfoG6DANCQtudbqZz6SsEEr1JA2ZnjtvSuxR169FmhJ8bfaPyMubX",
  "key33": "EAN6mdwatDDXg8WPN1ipg7B9oYvgxZ9p8mwbtx9wbVixcae2ESHSKmN9SQ7GtYRLP8QMLupKb5Qvk7V3zoa1qdX",
  "key34": "4cWzwFEFp4YU4AjwtygU9biK3wh6pfAU3bdaBKA4rSrj47gTKeAzvtADxNS4hWaa1UQVyyasehJVNbqRi9T5tDV",
  "key35": "4FwqoBp3oLNFxHzNJCpYbYQ4LBnQVqSVuxCDrEsfc7osaUcpPZ6Eb4QeMJdgTRQHrXDBxyRKrD4za7sC2Dqo6Zgr",
  "key36": "39jZkbhXTTCBok2t3fxkRZuvBhZn3XeVc18Hzw9BTG2hwQjZr3CHCdRjftQ2h6njfH5PM3kAknecgR1dgbxnEKrF"
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
