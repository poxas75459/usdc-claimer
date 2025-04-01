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
    "3q4GTbBYuoSmEmh2WKC1eSkjzjfyhTfQGs44jsrmyU7UAeyBzJbtNmExgpjXCLU1nwEHjZjWJH8mMApoiwkb3bab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Bi5ZQWMoUGJyAb9DtZYin6hQ1FdYWxP7ES1GbpRSgStpZwGySgqxSnXGf6hXJqwSk8WYL8obgCuy9oUPxaKdn7",
  "key1": "2T5pMjsnZszKt3nKgV7GczQm4mntF8LJdVo7efT94k15g2fiAR6PaQwQKMN8cYC2eccvDGuPQYcVQta2G9xX99JM",
  "key2": "2mMSNEWHgZfZLpUmSpTdQxhqScYym4ekW335zKNavHAYSBccBrP92guQrGEyVe12FQp6nGwQbasv8n2uUXhHr3ro",
  "key3": "39EjqLAx4DwPahRbprC9rTy12zwHvBTDvrCGwEmzLXEFT8VwoYnh99mnXiXgfLhyaEwK8sbizqipLuKNGhx75g7q",
  "key4": "3Cws2F2F8y1Th5Y2Y1nozuE6u7dzWjYiBygHiLkQg7tw59Ka79bQeCR262soLXxt6dDEa3Lce6fkiTipAcBPZn53",
  "key5": "5WycZzVP9kjaizv6HCuhAfCn8naY6S92RcYRNWe2NG4fzZDMn9MajVFpgvTes7ryQzZZSezMffLTxDFN7nDF6a5A",
  "key6": "3ksxpVTzkBioB9RooqjGHg9dSb229TbPqdhow8e6qzmbg7hepBfP6n5tpfpGaYZT8jNBdfzNWfJzfMb8pnoxNbtH",
  "key7": "3axAGkfNgT8RcJKbE8Bs1wAttKNvnCA8LjA2VCuGLvrkqJFubunMSyUQUtMo3QarcE4etwhab6qr639w8sBefufu",
  "key8": "NRHMo3hSomUo4AQz4g4Ev4CknebMyhn2dY4S3wuYe9AdKKwKDBYp4qdWKGZ2YhYAq89KPrhKUEFzdQR9BZvaqxW",
  "key9": "3DmbVxu5u5hMP1TRgPAEGvzLHpjnCu1EKyXu7qYHYZT1ynvMt54qcVsiJpWEL5DUpmxAbW7c3RJs1G2nL78RMVon",
  "key10": "2daVBPoW9y864XsNfbuUJqE7UJFAGjD1piURggwKDFjtfSrVVa24EuBcCGaWieuKm9ZkDQksjbqDfJmZ7GCVkJa5",
  "key11": "4amNWPYWqJMarNSJAoupa96LXSKGdREz8vqTavpMxcDofkP1HebezmCdbzsRoPRga5NSLaEFz1nU4gi8SkjrEAwr",
  "key12": "3HwEtHXEQ3h7ECQ5c3sDowEXG7wRjgnpuTQziP6VTzE3Ljz3MmHH9RBAY6XdXBqP2b2mpBhyDmgNDUSKZYkV8JpT",
  "key13": "4bsa6bXz1k3ivT7kTDm8yoM3hYa5sq3PnXwxi277o5qKGLmow1J4MJDT6DxpkgLmnaLv9Ch1ara9qYSCFhM5L9i8",
  "key14": "5PbkeLjc92euEMuUeSWv1KWq1GjRt6MFAxphtEnPb2SnVagPixgvybiBqwwaLuT48j6GcmpcjymeEebBjWbmbmtH",
  "key15": "5XgosKwUkYCc6jZYytcNetyE4bXoHCs9F7bTJQCeJmH1Ww1CLGVAwdp2ty11QbdgwsjSdMMcVo3LCq6C2nok82vK",
  "key16": "33f5HZtmAWeQArM2A88xEgcbPioRtG9EeZvugWaiRx1o1LMRckgoWN57YUQkgcZid1WT7MUMjiQs9jxrxohAYs8g",
  "key17": "54JKA2tC19L6YdDgt3aw9ream4HAfyvPCrfgGPzySARX9gmqvkmgMpU9rVuspSwmW3kt3aFZiQNBhSmD6GgQJ6ji",
  "key18": "41LJtAaFtFA55Ng4HZzJaUoKrqm4xu3pj3dZXFbaHZe2xrBfiRWqicNjcXojupECemniKe3K3pMN5itLvRqVAFyY",
  "key19": "3ciGNwS1bAicDminCEsc3AqbGqpUFqAGrSUALrene1amm6G5DN2cY9BYg6TydeHLRnZ8sBxHYPd7qdnKyydWtmo6",
  "key20": "xgJQTZk2hWvjdX18EMXDUZUpcjpD5S3qzAUfkoLVthjiqNTCmk9wZGcKZXZATjXXbqipkX4mcV42dzpgr8WbuUK",
  "key21": "3XohWmP84RwgmgoodJJ9VdqpXrWd4VDpNkL4Tvi5KuE5sJpLrQW5c91b4j41ebUKt1tz2DBGHjuTnFFog8sDre5D",
  "key22": "3hzX9T9bmcNLCYw8YucWcFgo9qVzTqwNErq3rF2jXRv1fPaL9xmys1NV8sj77iSQyjELQQN8nDi1roz3X6W1awZu",
  "key23": "3cg9gpu44mTxmjVkSkZPHaUqGnA3WoderASsuzsC9G1a4wpfuxaCTD4s6Uia7hJypqjXkvchwkxVESvBwXtm1153",
  "key24": "5SFaqW6pkSaYshH3moaFJJ6uziujM5Mqg8ZzRkW7ZTYp1mZVGZFV95xuvv8yQ5NqumGtMyaRJ3GGZUaimLF96Kgw",
  "key25": "5x8EuhiYbkquj1Pnbhj5U6PQUryB4Mz6DzudqFzx8RxY5RJiq5156P82tc5hw2zB6uMheY6YAqjxXGM47Z6dVoYt",
  "key26": "38ng4wfHuqNQTSCDzfGJ9rsnvsveqJ1ia1vA2CLGF4iogENcpRg3Hifky98T4WiVWNmuLsU9MnAkQpcQE19RA4ZL",
  "key27": "581qEEK8gRgeKbujTsZgxmXA77jX3K4A2jyevR362yUtHjwVMicZdu4UArVb9uP6nsVoygfRVn3gjpApiEp56uQv",
  "key28": "2L6PtKMDkXGmpnhxHePQjwzu174qXxMceF6JTUgpWVyziKVZntZtePZHBm7p4Nigzt57i2HMGftmVc14ks49UKDQ",
  "key29": "PFW15pLGaRjGSckamyA4tu34gWtSfZ72K8uAhrHbftTQQzWssXa2ToHGFRhJZzTHKfNr6NewdqXqR7MEeimjqie",
  "key30": "538CLftaCDXHnrrQw2WaSFMqwFoWPEiexiJ4ZY65MyjDRnyFx3H89pUyWMvtqXJ9rVnptx5PB7NCPmTFmRkevJXD",
  "key31": "3mYHJKUfsCgM8bairyJdi6DPaozxhbFwK99gAJ4WcoTUY6ALhPeQEa1xb1XZdhJH11aY8gtbnRhgAg8L3oPMkg5F",
  "key32": "2EEmc9UNLvp2JtZGh29mpUhmUKfYDfTEWkWUwuYTqnDcMurpZhaHEn6cfNJmXX2dSb84QfkzH9zkTNGzJgdAV7GT",
  "key33": "4n4myJNHXHakviPjvHGTBJwhCeuMDDY5Y3wjUg2xJY9dC4fs6mA8UsgL5kD6d1aA8LXDb3EzG89ew9rks785Dedc",
  "key34": "mT3uwacgVWgdWt743uBzUftwMDTsQaRJ4UuYYBXQBaaSRRv7sUhZmjgX6MkniagK7uM8pmkJTK5SS4TJ8z2ah1X",
  "key35": "3pmHj9AqU1KEcpyou4tWmkZ4XEFB54NZoRrzVyQsDSyxAxTrxfWdoPxXAKhpvdc8VNdbXuwXHZDXWfzpbcDBSwLb",
  "key36": "eodhUUx8W61toSk6vA2pc58a87JNP1LQCRexoipmXP6GJ1ouWM3ZNR8riDxAqXTW16xkvbeVmJPDnoq7koyJ7FR",
  "key37": "kCp15xnQDsSmX5KEC8obtP5kKakMnMWCWd6ySFdmAv9N1WKToEeCaHcecuMjxkMzenkXn5KYKBk7Tn12mA8DhiP",
  "key38": "647Xczm1hRpTeKeD1eaefLUqpaa4TozxYXBriUGX9PgGGHzyi3SVy3FKsncahXBFNAVaJcR7gdtL7uYnLwd2QZLx",
  "key39": "2BufwXTT9SpJHT72pL2wbUpdCUhaYNfMDZocAZ3NffLTWWH7ep4sXxN2qgSELwPeU9241ZUQcx4thnLxCegZuc2i"
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
