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
    "RjdNZSkeNczA9C8uGHxALetz1FQ4rfQPynLWT1UuA4KGb37FRbaYVLmSkbympKMjp5MhgmuKdn31YonsnZskic2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kHz6KB5Ue8WMLeyxAvCTKW8ZVKPbauVSavtEaUUtbpWe8jDX5CauzPdgx8sD9hQttndZuXY6VPTRgay3GiW1nEf",
  "key1": "ggXAqn4Rei8c7szMh6oqb6TDHRewL3NBx75iwS3ngWVLMP8A64w971UhHLuQBBN9Vmm7MdfTVEucEUzYn6JLcEe",
  "key2": "5nTeXo6EbjeEFwvqg4VzVZ48BHspjqd47sgk7uLhp8AKkjQdpV5fpfmt6aYsWzEkBCMjMAYxuHkNhUgLqQynQDii",
  "key3": "37LNpBVjC89C9DZviayA7SXPAanBXw34mfnPo4Q2CgTa5FUrwNtAr123AhywzKfDFm18Dgtq7Yo8rY8jG5DCpjos",
  "key4": "2SYGUg3yqdem61FGJXFjNDxEaFdezQ49SuRzVG1A4yPZT4beDZKFM18TmmQGgvbVtrBs2pwyFTMrNLNJfoAiEQKd",
  "key5": "2DaWBBqkZyAHW9XqcFkapPyfDW8C3VweNpjTDAtwPAhxLibky9TdU2zGppo2ZD1LtwFbQ9AisqrDFiLewFqyFajE",
  "key6": "4xZ5FVioYxTLRmPdFtHD6XwBLYcW7VNc8p7EjUL3EXZVS5WGj12FdB3Z5m5TigPwdCHULzSuVxerwr1RbXPSXpNY",
  "key7": "vxYh49p6xuvgjhQNU7T2AUQ7rAJpSCptggrZFQcvqW8v3kPo5toa9oMs28zmyzaxG3HWSU6n9rMbRg1oetFXbXo",
  "key8": "2vAHHUE8fmnPXTfPsL6qJPKTDVyUm8CKntd6Ep5EytNoZs8CDQiTkUver7EUwFpRBdAuXMisH5wtMLUxv6E5jTgQ",
  "key9": "322EAAV8jWLDtiu9PrdKk5XUZgqf56tma3xv7ekryN8zYDouTUS9UPSsuBiZssRjyQoLRrXKaPa4CnbuiZDdbBER",
  "key10": "5KQZxFSSyCj92N5bVBq9JAtB6aH5M2aEVBWh1YYEMa6JFKFqGm8qgv4mvc7H6N5yL3dQgDtPeJtF6yrJFw3KtnLt",
  "key11": "AWEGBAfZaj2Ho56ShJ8bepQsDZtmAyLL5huupyDpyUnu58hf4MoaUC5StCh5xRq5nUv89dcUtUWZvffPep3UL8a",
  "key12": "34uBVFmJ66VXiBwQiRv4E13EFJaQvD8zwQTpz3L5eyGgKzaw92Rx7JQpmVBaTVqB1SLGZXuTcw2HknhS6iSmmFsL",
  "key13": "5dp57r8CzhPWjUXufUQbd2RorjhgRMoGWqjby1KqW1KTRzAcRhBqJxB7NP1wET4Kf7qmpF8dTacqFMN2RmvoHYXc",
  "key14": "38iBycSRjPMkDJyJ7Q9DWEcqJAvadwGNc3udzJBqfaDmHGEXPiJgH3hhs7MuvN7ugcYzb7dyGESSrEDF4KsbHt8y",
  "key15": "63RG18pKm5D9ejCXqjdzY1DLY4NNFGc2R8gMPYrxKDGAqD5crvUqeeWb7dVF2iBwPubN2h8aPXiUP8NRVCs9JrCh",
  "key16": "5eGYmniujoLmPNFpZdQREQfujPUJakDUoNNB95A6moT4MBarLVJMuBda8QN1CcZ2uCBEgt9wQCf1AGacwqoe4jXJ",
  "key17": "qcJgSWS1A9BnMdye3HZoH1zJUnHkKrMAFevkzRt5sDMv1bLQNCTH5KSayRqT7u4YdxhZ8acvDr5D76pczL9d7kh",
  "key18": "4QayDhsdWGJfif5ZQErdM1VXN2twHUTAqjNq3Nnh1apPMAgZA6fMeBXJxqf4GHJXW2f3yCySEqvrzmbx2RDSBf7A",
  "key19": "2AheEyhC7pAmXjiGgHudLkxAWZWCQkAFRbvDQRwcYVrBQhUXp7TdbkyhuLfKBpEtcb3CQydaN9Dcf2wSJNh845ov",
  "key20": "xNhp6gB6C96Qnq9NQvEgoXBxkxm2UQs3HpusWpz5ZDN2bUQeniv9uc316rMGRFAs23Y6M3arucgGvvHxkdpsLVG",
  "key21": "ZqR7hoUFmFxonCXMFMXv9VG8NqWMwvnpi4j7tAd49jgwQCxKN4UDfwc8DddHpG2cF7J4b5vYXftfYWyB5pXERxc",
  "key22": "33F67KGw3QNrzYxZuZg6nmwVocREvjZ5KTqsmLA8sDgjeswdfFdxv3A3XRe5oboAPd1kpHLqdupQMy4qCK1kcf4K",
  "key23": "4N17XWFbbTrN4WzGcdohn9zQXvPXvLhm95FYtTopFjLrnMkuwUAnCqmYx4wMmQLoDYTusaHk6zJdJBkMWwAdGrhq",
  "key24": "3osnTGw2qRq43pdQKFknoof1S9a2X54nbqYUBsGH1fQucUTt5Ex1aNVAZht9msdhyYzerNe3ECMw1pkEqXBaTuSx",
  "key25": "24MVcocfkYgFccWw51pDBffUzDqqduJFVw3kHpQ4qF6q633WUv8qBbZjLpH38J5n1ser83jMm1eJDYV987zr6WDy",
  "key26": "2fp2XUTQJwXiAPEz127dkrh3yPnmis2SM2BYH5uYwNqqWHpetJfBA2aDXCbjKQbSzQCJ5EoyhsyFpayW1PWcaWoR",
  "key27": "PWeMvWkBfNA4UjeM6TU5Q6VAU9TSiUTNgVd9tMbTpzDYhBa9wmCGpaJEcVEv4Za4uG78tsnaW6HKdFB3pBjBy7T",
  "key28": "3hJg18CtYGvyGeg2Fxj5rTnLZu6sgycQoQAwqN9Nxs5o8XiLZf5tpFVDd9eD27kw6g7P8QgsVMVHmVPrthGnXdh2",
  "key29": "3AQq7hDWJUYQpzA4xcqBL3y6oEXjdXtiwwBnaqWqBjTyDqmENQCkW9prMUHj1sBijJGaJEoHsvnUAbEKB4KoPYL1",
  "key30": "AUMk2fCEwmVfAfMtN8RiWswyDXKUsLGjJP2N57bavCDtn1kR6Q6rwNRWeNw4WSy1Gb4P2XJ1Jb6jXXUQcZwhMrS",
  "key31": "3uQDwYBMG8eA5trGiAkdxC9G78dcVMMPyAWyr3KXYSp3cPaZoyEDGut4SDtmSifgLwvtitC3c6AFMDUZZv7biuyt",
  "key32": "3iWgiEDEotJnK9dWi1aYUX8j867KRbpLGvZRbk65mBR1P2r1q21MzQyhK1VpAfKDv4x37GhqpdSzGvmFN5PfG4HJ",
  "key33": "3da5sMvvY5mhTxnyoKEiDTg4oXpqp4JHkk7FELzrEmUhJQTddAa58tZuf4p3PfBo4r1TEG7eaEsrh5A7PMkCDnaY",
  "key34": "2shjFigHDQdjS8PPyVnK1HLUg9UNW91XD1W4Z8P9nPzmVe3H88SkU9TofsZTN8RysQZgrFrSo6Frca3CVVrmaJkm",
  "key35": "3Ng8StpN6tt9JXfAm5YdGGxUpYkv9rLrim7wWuyoUvvh1UFuATduxngBv1i6Akh2gnZvV6vHyekAidGULj7Ypvb6"
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
