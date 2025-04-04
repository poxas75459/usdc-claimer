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
    "H1i7VWuRPvF3s7TPNULs2CWnhvY9CANDLYiPXE6FjezFg36FimLmBQAwLX87Aty3x5Wv8YnD5gJd3KxN6GGR8fk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WBU6DeQ6p4Hd9hv6iZSkb2YK1Nn3uLVeuLv9KWaeKNMBoezkcHZGVtKSXNBcF5ELAQNp5kGCdzXFfuYEEAysNx7",
  "key1": "27JxSHykUpjMVqRAxWvE3nFjAYfyFHepLVJ1SNDerSNcNwiXd2VGgfsTcujjrsVDh4yDopwcAoPoYskoKGkxzXmP",
  "key2": "5a1LJV1jk6srnsfARXZkkfV1g6MfnBTnogkKGcvdfXK5qjqaQdQTR9Nuy8acMqrYMtGExb2CPtJih5w1KaZvzgN8",
  "key3": "4ncUs1Gfk2bxvGyDG4FuG7uyUsGemjPaFQtUnHHfKTKPP8cXU75kzMnBJhrWotrJ2vrrUfoLL6PK3M6LeSfwEYbD",
  "key4": "39LcxbBayehWwbZVtf7wYfJHdoM21c9WBT4wm7osQ5YMvU2MLhtg4Bzy4iDCNYSVnXdo7GRo3PZVs4T3VkNTcDdK",
  "key5": "5WVjkrhwrvnmAbMmw22Micd4gehEWQorMeJpxpDAk6iqx1bKoroakUeMzdUYsVD4QYoHy3cPvFzszx17z8nzJiXG",
  "key6": "SNBhfqWhiQeRyoviNuY1Y4UxNbMWHfYfbduVQ5YwhEwpyR564uUYUHHgLjAgqXAcvw2RkU1wLsqLFtL1qJX5ZjY",
  "key7": "3NaYw73ueoMmX5KkjQi73Xr5yM4jRXiemA7sNA1KFZZNjXfVS1QqEVC8KYQ12Qfh7pXPEo76kNZCbzGBT8drRRrG",
  "key8": "4VvhoRUb7H8BSFZ25uctJH9HRbXCDtagocTuVCGG3jK9a26qUT3ERWUwn6u8t9RnYBZ9rXULGg2WcWEF5oYFXn5x",
  "key9": "2duShSARaCeXXXxFRn4YzarKpSEcrUQaeUPx4mcr2E9n3eVKUxTpMs7siMXaYFkDKP7HdHpUk83oFiDhJwvNA1se",
  "key10": "4eRoMdPVPM5pZEttfWDo7gS7mxjbUVzT99tkG67xZaxXLqG6goXeNWywFbhpCagsint28disXK666setkbHyXEpx",
  "key11": "4ZdGCZcAyDJ8S9yHqfNVRUkkWE3foY68e1JB6Szu1i1kcKAjtHMDFzCQk26SK9v2mknKJUjRh6P6Lfsbq42aC8pK",
  "key12": "2du1pTQh5LADxu83TK1xaFR1B824byYLc3zq4XDczcnUCnCFYuYAR8UsYnUSfo1jd83voM93JVHBEpWgmsRpQ3uJ",
  "key13": "mGZoK1oeHLa4vfZiJrnBBuXAYMmEnYhp2jpFhXgupccGvohHGKnQQ7GMS9mdYaoBNCuYTMhjbUkEBPxeUiNKPvN",
  "key14": "2KbTMVQesCzgHMJS9nv51GHEvEWV9tjH8bgf9ccZPxf1xJyHvJuBPokyHRqdgSeJAuCJoTAjqH3kzwEWZymTV3cU",
  "key15": "5Xrx9cQ2XdWutXMmFvwGTSnR82mSCjDycRHXKtF2xy9Z91fHFBostb8BAEvZfh6jbHM7bBkvgps42u7LgoPczN8z",
  "key16": "5aFB81PgKLJqgKVLmv78PskpMDDKWbXGT334EtsnF7w7CCxFe6oGT6XLd8n4yUnCG5rR8444juUga9ATzzUSWRJp",
  "key17": "2KzozBUU3py2vN5sN3meLXPCHmqM718jtUuQypxy4g6gpNnPzCQs82HZba331QcGVrYyYCxu4UaNAKpZpdGiFHPA",
  "key18": "iUXLxBqfUB6ceMuzCgwBMu9XQUAL8JRMGmNdXN93h5r6wBpwC7qEnjoaQDtL9vq4DjSjrs6MJz93z5CzfvvJPNK",
  "key19": "2n29zo73egtejtmweamMxt4nwemFy4dM2cu7bhcbwyPhcmUt3tKjCofQrD8exKjoccDfQKbA6sr8EF66EHW6XwWD",
  "key20": "3DHAp2AWJUYp43aqDSQU6VXcLWFzk4RrmhxuLrg2GX9FxzViTyX8j4xCGAuUM2cXof7bFdTtdSsUJmyCoar3r2QB",
  "key21": "57DKfDpWMAGy4J1a8dg6WgBuXdjbypVQLPvfDFXSPyuqHq6RA5zbfPYhu7ntaJfwbCrZhasS8ikmWjUnr5xKSgb4",
  "key22": "4U8hv6bwG7cejgyHvfhe7mHZ9MeMQdrE38DdLfAmXjLghYSjWP3CF55mNhsvaKL24TzeHGNHWAtjcznBiGC7qHr4",
  "key23": "B4C6EN4FrVgwdohb76qoUSWtGfNRzkAW4ZB2Wp3AAoRNssXxGDXcdXo7BBmLzr5A5LCTugvnUUfwzUBEQfEcQcw",
  "key24": "1jCVgdBaCudPeQQ93QC46oKcVpd5SqzaP7134nK5QSHE4QmpRVJZfRDbAs3uXVybUCTv5v1Kibbe43iN7YPgdAd",
  "key25": "5J2ixGsR2kAvLKfmfMo5QoAcqpjT3Thj5bCZ3h7oJuG1YZzzsFcQjCf387XtusxoKr3YVovXYkhsbCwHjgGDgU98",
  "key26": "4vkzrrUijWcBB8qXd1y9sXNg6PyVdH4dPvuz7zawnNTzyc9zRZQ8jNB8fmd1qFtb6X5oB8vAMZEHMUNiNAW4nVHQ",
  "key27": "61hUGiybgzy7cQKQgucgQSCbPCTeGPbFHVAzWRFzG35FjNzsCEDiuEwJKHK7Fwb8jZqApEcoWRkch2BPHojHPH86",
  "key28": "TMvCfNYKdkZK18cfJmFPYihZYEeBmC158XCWDLAXE7t5aWFSG9qYWyp7Q7rfjJTGLgV9BHFX4Fn4gaUqUDGLq13",
  "key29": "zF6uTJWjWMt8tVxXUFLuYQGALq19gfeGVGCgTVex1afy3yFbTAM2nwnkS6oJNHVmoCQgWibcShG5r9zLweXmV2M",
  "key30": "21mnbhWKZimg1Soryu2jMBGjDeuXLBh5ChU76GR26tovgYZeAnQKvUM8e1MecatTCGPBHGFPHu9WVASuZUSBnCmW",
  "key31": "4pGJM3PuBGAZ6WUvprH3NaAzq36ypqdT2YU77GaeVLbJ1zEiP1GqwzTx8zPqAfnZCdcjoyoasWwvEVPBZQQNQew6",
  "key32": "4sMZe7YdMnnqgtBCg1YNuoKP7LjdQsqp7bPkaUMJoi1Fmq8hTCLagR88kMsbnaVfY2YupQNmfmyDVD7QHhMpEP6U",
  "key33": "2hY45C93bKaA1UoskFas5CWaTTuFVECckVJ94dEkcT9x7vNh36JBuUzHtjbFXtdEW2EPmHSjCeuKX6V4fFJhKG6o",
  "key34": "KYekvGzC6yjZDPJW73pFoCrSY6QsSYyA87iNBwhotkjkvYp3UUFcZjAQTM2zJoDkYrgB1Qh7yu1Ru2NT4bvgbWr",
  "key35": "5JCnZrvYZpjWXzWrH1ewCiKb9FYv5ZorqECQNU1e1o11B9JQMeURPmi9F5hNnc7ojSo8XfPgN4rNzfss9MKhcnKk",
  "key36": "5qtvMb6WRb2Z3PdPocBKtEH4nVYYQuDiUDSpYby2v7nnVJKkfBPCutyYcfA5AF7YHamDfcrhRFBRCqMpjCtGUvWU"
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
