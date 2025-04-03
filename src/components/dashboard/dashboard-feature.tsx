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
    "ueGX6X7bT9q4nmqALMVDfac5rYbEVeBWQ2ZqvdffGbPFaLvfuXF5qw4JUeikuH6i9KEMtbtw8CgSmAre5NEfXn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pNhdJgTFF1Ney1ZKtyhDP1mkEUoMSRND7FterXEdV8CNEX7oUVGzWsKeFtGxCa5R2dEALVm1LZjg9kxMmguPfQF",
  "key1": "5eKXGfcY9pVavHzzZ2QsEtpPP8aTU5LHm7gbx2SDU9wDvV97AUtzeVjHDR4SZnHwTgqFywNHknuYqeLg8MsLBaM1",
  "key2": "2tsCZdKXoj4DvqvvAzt1GjrMJWpMjweCNkJeBMJgEyWWFtipepngGULfs13WaBYsYukyVX63BSc1AN28yWJb3jft",
  "key3": "5aiPAUBLamXNSTAU9D9WkK6EhkggkFdpu8vFm1euKvivJrXE7CbSzSmNZ4JbaPRU5opdkPom65RjZGEFTWRaQECP",
  "key4": "2CdC13Qxf7bYrzDrHAWJzBhnKcPYecTeDokaEhyqWQFkze8KikBktUuAj5MYSsj2N5mTGjyMk73ZyM1RyWQKxJVi",
  "key5": "1v8ykcv4DWxmowvmcXC42VvTFmPpkDRqUA57u1TzksLpMeLn4n7xyc42YXny5b5bge663zz5VN1jJ5E1JJxH2hh",
  "key6": "HAXZUEbWkAGbeM4PTeP7SUsK93kvp2T5WRZc2McxBCnhY64gsiKqD2vHTe4fd5uq6kEeoJ8SkUZbNBKzWKWFZ5Z",
  "key7": "uTubGLMej4a266WPCe4eBLLH9SKzRrYfXVG2THe9iaRjghpMHBqrYUNvNV9JveWhZoCEgo8yFwmashuxDLPg1D2",
  "key8": "2Nta5oQWWhWRxbtYNMvNoqNyoZgEvaMnPWNyvSGuD6EX2sJQwLK9QkxUhoNF7Y6Kybz45oz7MbNL7e3hxQXj1xgo",
  "key9": "bTRDtfPF3Y1QPqJJa1UWMTBv4aw3UgDAVvppKSqpFJSTeoXsGM13Yp2v3N8BsDyqfD1zMwNtz5YPQoxvw2WTSZ3",
  "key10": "2z6UD8KKb6GLPvsrDmDKso2ogwtT9S784edndYZbkkQk9n4xY6UMt5583fg68e6tCg2vKc8P1A4uBGC1BTcvFbyt",
  "key11": "5tBB8ffZtJK6LpDa4Q1QPcVAkHRzuYnzhrzDGJvGm7xg6C8WtsFMnXtU62tciRTQvDdG8EjG8bnMAmydx6zqqEWj",
  "key12": "4kwKKENGrAjfnJDPK5ZAgVwzghxUHCKTfTWXwMtjtH2hHcH4hPYkgs8qmQRgFACLP4edf49PEZXASQJpHYXj9Crr",
  "key13": "56nTpko6GjEwnSZXJxEUXKdMtGaW12iNX1HJA8CDmu1n3vCmS8CAhkiV5e4Xm2cus9X1uLp2D6at2CNbNRWMAwJX",
  "key14": "3NpQb4pJiMBzUeLokWDDhdfz9je6AKLG6tENh2UTtzo77o9FT2btSTLKrHr9vrn1rxrXbKszWNrNPe7XX4MpzJEB",
  "key15": "5dQWbtikEL4L6Z1fJfMommvv7CqF8aeoc8vCeMuF3Xf2cV62c4v7y3avLedATLFzBaqhFWkcnrGxdneyRaVMrjFK",
  "key16": "bYQDCbjMZw5j6TCqxQRxdzYmqGT36DpX62BShneprUcjRqgjaheukfXLkEVpJwFdEUsf7cp4QyY8vr82Fsmk1PP",
  "key17": "3qBFtdR7d1mdtPyMjgLti8ZFJSdSPyRU59ZQCu6LjpirCdCwBpo3sykptfVcWRjcqZo4DgXeAqchPsA5CQytH9uT",
  "key18": "3yxssbgc6UUg69YLYEzVYcqhk4zuXBbGbx1SCFahb7TJSPN14MudMnNjoNVJm84i57YtEnMA27S3jiP3WRNe9ih",
  "key19": "2p8CZC6ptzENgWui21JB4K2uJFnKxSx1JbYag8SSu6oPswU5kcbSoMqzdnUkdVCdq6PgPzrc3vmbReQgszcuevRq",
  "key20": "Lj1GqoJBY5YG4VRwzcz99VFbTgnA6eNXe6y8oWkXVi62PNNXfsBnJRLCyWtY6LKQvcb53HWBS5Ziu1fKZmg6t2D",
  "key21": "24MX62or3EfJJT8Kp8y8ntKUrZAJYMi8he9yJToTJwmd7k4ThikKZJ8cvzrnZsPsuJcoPnFDTPPcMKLfWuXmyDiM",
  "key22": "4Cb4hbk8DA8Few6AuW2fXhmVA769ww5xR8og658KWvV5ZuCKodBCzFNMDSwsEzZqmUpu33MPkgv3V6b2hzErboEQ",
  "key23": "5tDZD8VHfQvy8jkR3obAMQyWJY8CP98LvwhuiLJiFE6mgxFsCXsvvaUpGhyfFNptpegiVdn4sxPEXCCVAC7zMkDf",
  "key24": "3XR41q8WKtU4KzoWviSCVPULrv7PqU9i73Kz7JtaZcULYEFsR51KZDKt4oSBhtuoEQzhEnJsuwhnkMorE6UMGS3w",
  "key25": "65M4y3pBbmgxKzNEbQ2tnZ5sy3RpxNPvtRUMWo53v9DG7KYmMSVkYbfLQ9WHZVFvq22upBEDnWzX8T2x5KF1xsve",
  "key26": "61Xj8Vcea8D8njEbq2ay8PwsRgnoqoLHCsGkSP1x42GToKCQ1EjpSdPHQhqvneM79wXUwPb5RMGrnWtPotV4B23K",
  "key27": "5EPvBSGyqG63dC6XVF7iYkTQfttLgmxS8F1Lu3A4imc8bEwTBbHQRf2yNLpMU2rVvc6v3bPx6Si5Z93QFgSegJoJ",
  "key28": "3MK9egxsq8ukv75eg5YnaUn7tTv82uEXhYdd4F8zH7U8d16cpJmaZV9mqTWTbYzeLFcLbtNnQf1qqoPGfNESfiDL",
  "key29": "2fPRmZv8VyUMgHh8d6QCaPk46e8NWjWRUEK1WctRkwfwRay1rxgbrEYEGu4G8PGnsAwqXCGGz5CXudmvZ9EF5f6J",
  "key30": "3zxv1bbXS99nJ6ue5bcoZGefArp84MEpvy3omGpABjJXthWf7g72nnJA62hSNXUuhVvZ4ajnGvmHinP5MaqGuddz",
  "key31": "5TdY8zAfQNL582DJgCQuPMZwzw2PugiEKyHWkED2THo6ptxcCukDH2r5AExtWAb6XSyZkEUNMC2xtQz5J8Wr2jLL",
  "key32": "5PZMGAiHHGd9TjhXfuVx3ze4PxDVEhSU6ut5DR2Hs8dGDVnKK9HTCZ1VpjCcveuG9dSkeDYPAueWtGGpja3fZj76",
  "key33": "67DX9nychgqSTXXKWzMYv3oRaQ2fBG6cgsiDnKPaJSN4L1zubtXQitaCWTxX1zR13DaRKuN8SST2UU3XT6fqGBBQ",
  "key34": "4cG7GCBfackKGfxhA1jJspaQBkw7XZzqdzaZw7QwzbmZLNCn72HUvPHUcDBBAEJe6b6qpcZB4aenNRZD9ctWGrRb",
  "key35": "5ypgRzPDkvemU7CEEYsUrK4RXFvdq8cMNuc7ozAq4k7Dm4BbWD4DjmFsBDXkfVnU7crXUjjTHbLhmTqs7UJhfxG9",
  "key36": "4MFE2TE2LSmwv2jHzGRtafYh5X84ccbkNNwqUVGdKZ3vLQP8ZRaXJhHxQ1UZJTbwp3eSABoYv6xDw6KimtnNc78p",
  "key37": "3SyVrorA5hwCsa69HrJUpwc4XPmYjveAzVCgWupb4SwUKBzhjhQB4Ydk9ewmwZ3Q7ybpds2R5MPawHwfG4pCSh62",
  "key38": "3kssKtff7nNts7pV75SHSJabg5xn9XhXyjX9LexW2w67KKfaSCq77zMVsWAat6F5tKz9Yb8XCHBMKEar4LQeskVR",
  "key39": "J4f9tGRt21m7qdGoLJJTp7byEj6NRNBg3nQXSCZdYTYhZWMi4XuteEM6orXwnKu2GitXye9rueTgVKQ3f1KsCii",
  "key40": "44b9rA41eoWbni9m3wanC34XSCSBvB69R96C9JcXsA32YU2dkMAbPMrj3eSPDDHXhBoXT7tNwPhKNQaiViwK7HhG",
  "key41": "5p3v46k7FXds1st9LcE8iNMzaJKuqCM1bN3ckgZXsUtXQtSAXuDYBnFYCF1UugvsRzrycpCkpWdetC3GLQ6FwYy5"
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
