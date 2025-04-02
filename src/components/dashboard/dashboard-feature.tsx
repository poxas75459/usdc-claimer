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
    "31EMRHAvyfJWnn1xtszoaHaZWQkiBLFzDfx1qGZtitymJ3mxQCuUeGR6DkwWRNKEgt7MH2BVzAXb71y8GHoGcWLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53k8qhGS5drumGpCeDEGXWbsf5BHgkj7x7etmc1Gd38GmSjiKiLRTv11Hogz9unamgnP5wCiVcAtmKQTqiSPmxS3",
  "key1": "41xjtqP8bgBhobfzfuHH52nmbgfxjiPuWqFU9oWiC2PG1oEFpgExu8TKxYQXAzxoqmLfCnAHZErAbnBifMKd5sRt",
  "key2": "54jG9TjHNPdXTbGfG1ZUQ8iiWPwQ3kjrXB8dTFUD7bGrqLanCsLqzTBENxan6cPhJiFiBPRYmpjYsDDjWJ8n5u1m",
  "key3": "P8BHrnZjcinE1TmW9f3Hg453q16fS49iKcurn85Eeh8B37xDgk2zQ3bLHgf3425hf9cDWpC6Qooa1f41Xhp537F",
  "key4": "25A4cs5xMtxHKRanxf6tBKYuP3hdpKwLq9mnsmEbvCtFUuz8kxrYJBCcvUFVjpquL8Y2usqDQfXpQK7sBzbNTf9R",
  "key5": "49hwTuy41NcGMd24P46UxFgEzEFzZyJDm5Y21rhDb4zwA1C7Dym5MQq1yHNpnTMt1Xr2W9oK9eMULJyHUCCzxt6U",
  "key6": "5TQxgmxmit3XqYp1nAvUyLryNh6CCTqKngfEEu4RpNq3frRuPdTgZmcwMQVc1NhU1p8rX1sRm4Z96MLXxAtoJzdN",
  "key7": "26vxgEXaNsYzLPfWYodT7KaJCGpnBuD36j87UKkb7QEyiukvczBy7ai1NT5edg8Yi5aMMV5cnXu6rJFu54mx4xDC",
  "key8": "s76wJNwywABNuiew6SvrtrRrzn6gPYZekGxfhmGpbwztg9JABtGGCkZLm9YHaEKEoXBcF8fww5B6dZNZ1TtogNY",
  "key9": "3uq9MH5YrVE1wpiQc3GqJgdLbBpEL6R9goTGsHx72jwJJGGB2gWhsLzkX7KzmHSSiQRpihEF9jjZ6RCn3WRqXM9k",
  "key10": "5ZUGb6G64Bjyg8n4Xc7uB7e1BYJU6EYJi6X2qyRuhj8xgFqSxPeP492cCv5gEDH1i8tAPxUJhAopadkWJTS8GhMS",
  "key11": "2kQP6FZUoGAw3PViLu99qMES2D39qGEtWqHAJq4Wa6q5Nq4VishESazxDffDFNQn7VZUeTTSjJacBVuj3rmfdiKS",
  "key12": "41cDE51yLb1XEQ3rCUVZDMaAp7Hi6F6ze9ThBSrbm9drtjKJqiH2te5GtR1a2m4izV1srN4Si3zrMEqRGJcU32jf",
  "key13": "4f6VG6gE7d5Tt8KYHFjqk91CLWG9aVv3Gb1y8CgQbCAX3kHNMAWfisEdSNXRPteUR182Y3z9LWdhcjnXsCJpZVjJ",
  "key14": "38X8PnHku9V1bGb9G1uoFFdtXHmSmn2W3vEgtebNhCGQ7mS9FV8GvPPybrMn3TrAahpkx5jY5KEQfDauYavPqarr",
  "key15": "3v5899jjN8FqykcPdnLTUaxGEY93NKmMRcrYG59xiHzZQtPKLuSSmABqkjDoBHZn1BwTb1YytXwqqUMzeNm8PTxp",
  "key16": "31h4j2LtycNtwrPRhLyCcNUhwvXKmemT9ewWKEMVCqiQmWHo74MgTxXiagv1N434eMyubr2xK3grY7eV7ocNNKbQ",
  "key17": "2YxfLgkhqXgWNW8x497SNy4KCGUxDqWgSoqCtzzWWGWTze4SEtW8sLp5NXd3mehYQNoLqHTaXdLuZ2uCxmyd7zeM",
  "key18": "4XpiU73A9HYaZrm2TWnL9pgyB7V6Nt4pE1WrfAteRsTFWxE8KAdmAUnSfDz4VCsPkrTNm8vyZskk94534vMCgudK",
  "key19": "4nuaPf7HtNyJ8rRySqERfJeQniQATfsACCE4jWvcP8RVRPhTgQpaBGUT6y9K2UGzCXdnKDSPf7Z2dSL12oae4Pu2",
  "key20": "3dTXWDUwngo3ASn1XLNKszmhKRD41JLEfN29QmXAp1BNJXYpq4qdGwmt6tDwkbmr7CtSLb8hcuhCjbvWZDssCw96",
  "key21": "2UcverwiE5444RKAYcg1VcX8zbK1ffUXwDaSfE5Z4TqzDx7VTY7uGdW17CKZhknPxm7wnP1HQwMFfjuWm7XztRdZ",
  "key22": "2nreEEfiEbFdSAbhR8hm3X2HTnMpRRKoR8jHfjVUHzhddy3VAs5EFERHcwHqzcAgamEPfCFwMYcUJMQHsoWxB4rc",
  "key23": "4bttQJsrD3FGhFYE3AvSmMP9YXAXbaSPr664xQtqstYXYJv7GNujDNcNpEL3ZcesG5p58qbeWjs5c13trGJLsMrZ",
  "key24": "2LxiMduMKSpq6EWCLtonD9rRkVvNFtqhNWeqGHnoELpRgx9WwkLrBwsCMbse6ddF9SMW4zW4MRRhJNs2bpSS22RV",
  "key25": "4kYRSyr6Q7uZMW7ajyXhWyqALsPFdM6QiWNc559VUQ8dpNdNVyEXVrZHT8WkJeuYTPvfCs72reaCDTbS7XmPPPy1",
  "key26": "5Z7NAgCCh62LRqYVcvbb4mMRZupAe8Z4yqdsqyRDbQnyCYkXuxxXVvxGyk5goa52QeBrAKPuKkbV6ijpedaSmVWk",
  "key27": "2MjXHZ1ttr4gNLHi5AszNWX4VRUfWfgGyXNTaArsDvXvJK18sQa43RdheGeWm8owgGsdw4p75raqW2yXQUFEZzpC",
  "key28": "3JaB2VAqDJtdRm823ZEGXE1YMddppHbdZP15hbw3CnTW6Z9KmymHR2beAHsiKj5T7MUC3H2yUEUqqMX8Gc5KsDUz",
  "key29": "311BnhV2ESsxs55ntRyjL5fMqTjp7QaCJi6eMBKKEmhTh1zrGJy2SpBgsahrKu39RQrxksX49fZgzyJxyHd3FTDQ",
  "key30": "s4NoocZi35vJRoNPYbZsUbMLUDKF4fDKbKNKJBzxSi68T7XbTdA9BRsbsNseC9UQHvyqfvfC5T8Ybk1qai4wgJk",
  "key31": "43vz1cwVBwRiKu6pPP6CsG3aXLSU7YefUvNkVuLVHeMRZBBsoYZne8NGpQuJf84hyATr4XCmkuwaL7XpsX57aZ28",
  "key32": "4jDWUoiuU696UikfLirU1jkK5aGaWrsvCVG8QprWtQa2yXsWwhAcETFf4YbZHPQAtH7Xycnside8RBMtXV9MEEmP",
  "key33": "45PkJiKZzmYF4DzKygyTN2DidetH1SRLtgoXx83oBpAkJV7BySrqQYaXijQvJNa1xfZnQ5XxKhVhjAPAevLMKPmD",
  "key34": "BApxbMM5N1hXicAqfq73KFrrzP8YqtwX7FNBxtupGb68pYiNNto3NPcq6Tk8LCsq83koHbHXXsFmf3p4n1L3HLd",
  "key35": "3FM2UarjPK9axrARG5B6Bx5KZDBKbanUuqsjRK4r4YNKPQRsGkyF3kpu3gBB2JYn83Hq6WsEpqoWDq2vMN9XtZFS",
  "key36": "WFFaNXo2YoA6P2FQbKrP8V2W1xvhVT945ThXG7pGi6ANNckTcXxqWjk5faqbsdgkvhN6tiX8o1rJhQGrbFpfnZH",
  "key37": "64ra9hHNUog7rwypXugNmmgtCJkv3iBLXqZ5abRLWqKXB41h2aeZVJj3SjZcjCTQt1Dihv9sdLyg6YkWMsYBcuYU",
  "key38": "59ZXfBcZCpcj22P3S4cRGsvaeVVJrCPN7w336pNnrCzFbPTsKHUbs7vnbccZ3kLBWHXXJPYw7brmn4v5SGqGsaA1",
  "key39": "4JYTuVwnWL4GKHNCpHDCTC7iLaQrvCzM7AZhA1NK6BdTY5HihbyXE5u23eaiPyHtD5FDniqmV7eKiGBqBsj88onV",
  "key40": "49XsDYiVW3ZH1QrqeVtVhYSCHJwdPPYZZWZhMSdzgjYGTtvCHiYfTyZxzK4zZpPnCgMjr6sTtYmBYJxszcbeCmVd",
  "key41": "2jBzygNZE9i6TsQ6erih72BTZ52B2jpuficJjm8a3Zc1hFCPZni1BUrN2pwd6bcBFzGP5LLXZwbV4ZYSmNUpiMm4",
  "key42": "3GfsNDk2QmjrYawjQi16ppf6fKjQPk6A6T6YGPqoBFqXjXWF75gEpnSJPvVLwqFeLMWtMbJMQHCpwjYwgzXRPikm",
  "key43": "4phevp4E8a2R87NPt7mvQff43KdqpL7aUHgGdkjQCdCBmAcHQYp1gt5BXBosFDVcGpPDcNydcvQzmK74SMDUHCCs"
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
