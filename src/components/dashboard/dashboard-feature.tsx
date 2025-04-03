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
    "2kDroSn4wEP5G9vdxkjCbbM6hJ8CqotsK3tm745Q8K1FMALp61K5wbjVJ5XcqnXypVMetcpRpVwXUDUHEmi2GFW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eWupNnw7pC4y5bh3j2Vv53fzSmqA2dL6D1KLC9DaoKA9jZMY1hcspGsv8sWNjULdYTe17Nethc2aGGP5E7tUaiU",
  "key1": "48m6MoVyQcMubhqn24XHBKeaRdzBBmogRUBETQL6jrEJQujaoEEHxA6qpXY92azrsPkXMWmG4jvK7iL77BazWBus",
  "key2": "3ZQfvJccMMxCpKtDx21xAUdX4FDXLEiqTZHhAh62s7dErnqQVKMoFEfwdPY9rKAXNX9U1qoUFZcYuZhmHKdiqYBg",
  "key3": "5W7V8Nc5qKXf2w53tHnX3vMZ5DrUacMwwoT3kBm97t9cr9MEVkhDqA7n3oirsvacyPMQfnEpBXVSkPTdkHGDwQa9",
  "key4": "4anbQHaWdGUrE33pTcqxQxKMw4xiVGVVT64MsXz5cJLwydUmAE2DjnV8XTbfbi88U1QpFUEbEBTLQ63FHTk3bNuU",
  "key5": "EH6JCGKnfxYSDf7ohjB5N7HKptjxgxjwEUZX2ek3o3dhRTYLG29jAZk9GoXf9EBGwZXLy64S9HN2ydVtKXouc5X",
  "key6": "3Pc5bQY88mH6LTp3wbfbbfMWqAHCf6g7b1E95vmrac6ukEBPqvTvwSmhuA1zhQmbTpwocdoGtCPoZuZuUuPMYnDc",
  "key7": "3tgpSR7bH25J9egBxr9ipK2sfZT1x9n18XBKE252CTorrB3x55eXPi5mgbBRdCdP47QPGTga6AW4X7rBg87UuJzL",
  "key8": "osE7WDV5GGhEa25apoDAakcFPYHiqE5gqUixqphQdb8dRUNoxAef8Go4nAW58RdyFhdAwjSevXrdGbu99Red69k",
  "key9": "oFpshVAhX5bUvjbczrJGBqwDnWKSdHi5oxVwjDiKyjS8CoukzDBoH6iMEDxY6R7ZaScoVFjFrUrDMKzUiMjKZ44",
  "key10": "4fwXPmEVeGuJXyTFPCJekmLKaDtQ72CpEPc5apxau9XQhgfXqsZGN7e8aVpYieBAMb3eoTmFrJmVMqJNwDZ1Fxth",
  "key11": "2KuCxgkY4HchjGMvauzPA8xXsx9ZL8YDjR88ny8xMKF5cTHocAsGwVhegxTypdSnQJnAg6M9cfRtTLzn2187i9gb",
  "key12": "Hk9jzCuhQcMMQoRHxPKgaukAkHPYhYn6x7MCwTiHYbXnW1JvjdvnHpmcKe3o7N6yM1yzaX3b2L4CywMxMsSCBad",
  "key13": "TzHk48AZthoFVesPBEavzs4oVXJYkgJahh3ockVFqunHZWM5Cx5WD7WsaSDqpy9ytGqC45QMU5bqSo4hBjfweD3",
  "key14": "3UUmWYYFuRkvHeXjcQ3vwZq7mkNdukNrRp918cG4cH5yx9k1anHF2rB1qaVH6RtHn6o65RW3EJ7FvFhumzV7EdV7",
  "key15": "3TarghCp49BCtdi9DbTKSGLQFaPfmHi1mMTK9MLK9jdKuw5TacUb41Z9WjpXd6QUMpUVWYU2FHshiQAqSQmyFxPb",
  "key16": "55zGoyyWkRha79DywpASo7Nz4eBX82tVuFcyJjqdFACnfi3ruU9QS5dy756bpxf6iDb1iKoqPY64BnGSFzZr7q26",
  "key17": "2DBKPKTmhKQSG2TieXmY2HSkXoenEMCNC68WKFfayZzkyUBUbUpyNhpvBBLe2KXPUoC8jSf45gXVUFXQYm563grD",
  "key18": "4tTjyk1jU9x2MMWwB2qv38XUTyv69pL6f3xKWD3EDFdiHMRAneSNSh5qDcmTqmedfYFSJuiWj9VV66Y5fmE455CD",
  "key19": "5bJ8nvcPgLLnDw5XvddqsV8CsaNCntxRYdMSVY1KAh3ZpdutQLhFHUd4FdHHkc6K32KWGdWaUsDfAQmFT4xhvdMV",
  "key20": "REi738U1V4Bnhms7TaNzy3tL4v5C8ngu8vzECmk6GVKgs3fEkqmh3GegJVZreM54upzGeXDDM3YiUratkjrehwT",
  "key21": "665r1Re5nFpSBgEGTJcR4PsghdttBSNAsUHKzsCAA91X5XsrrF1D4ZRcsLF3jHBZEYt9VFHLiDSpgvsKuRk1oziH",
  "key22": "54CbR7JjxEuS2H8umPF8CVE2SqEzjWZdrAmUPoBZwznifHv1zSDyfL9cqUdfQB6TW9acxVPRjRTaTgJVvVAZMmdo",
  "key23": "9ai4QTjZ7NXD1PbuRJ2fRM1vz4Uc1yytqj6xjS5JgPtccnhJMCZ2H9kD2wiVWVCuZX2kdWA1fitGBm1YW3rRH1i",
  "key24": "2a7wVLM23e14sX1PSka8BhTeovEZJNScGP5RWf2gt5UUuqBw68eWUaaSuvqnn4UKRD7cmnj33yBbXDutM9YJSD1G",
  "key25": "3x7L5WppK6pqonrTJjaYTEXKHGrVGMevnALwcwQc9cMYRPmKU9rnYk6Pp83ECaC3kKkXH8sHDzWo2tCBkzUT5ydg",
  "key26": "2mwEL4WCPGUFYNQGDBVKNtexWQCv4mCpVkWsvGinKaoTR4LVb68QgouLs6yKRhutC3tChvWLsoEg8nV4UaR5Vicf",
  "key27": "4DPit5o5fFP4baMG8nA6agA8xUrZvXJuzPrJcKhw3cwCTxdhojVgfkQQnRxFYXEXerVLBQUy6XSU52gJMmNQBKYH",
  "key28": "3Z7c5G2vu9LSdFoimKoRGBFp1jrMucp25dboPdTyTA7bfYvayrgJ2T9AWBYgQ3KtkMwUr6L6cbno1ng6gfrHqQWP",
  "key29": "3jpn4ZCiW75xscFDxYTHDscHe8m98hXszkWfALCEk8CeCcewXuBuUBHiPLL3sqYAbq2i47ur7nWyUDoJeH654Vue",
  "key30": "2sM2evVgiEL8mk1NGAk5zN52g9umVU2HkpAjVZnH18jHH1vnwYiLHBCXHVvJBBrgKbZSaxctNr4KKLQXrtA9SiEW",
  "key31": "5B1beLbmLuuBsPLuJRxipno47WtkDtnY7s1B4S2sKGeDnoK2LtukBAFb1MxYhz28XVnzCHj87t2ULRkkcLVEZ8RF",
  "key32": "5VXF63waAZg3qgnUE1jf7QhpTYNGHJnyVZ5AzD1cHD1VoHU4SqCpo7g2snLKHRKgjVo33rzwaeKu8f6ZawmhBEzR",
  "key33": "2YAFx3o53TxYNUjwJun88dwNVsse4U5LggfDy94R6guFwbBsYYPzhyzN9894pHQdx5xvCit8RiDL6vzgGn1pSQCp",
  "key34": "37L6FfJudCTgpbEBaV551SRdGxBj6coFKZQS8FTvAHD6nZwZdRoVg99dUEKEVXphfm3Dm96DYkC4YsP9rbftNNHH"
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
