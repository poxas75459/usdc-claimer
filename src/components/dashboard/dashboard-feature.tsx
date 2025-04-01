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
    "2T1X8SxV4U3veemXHXPCviKo46UQTEv1cEaAwM1WeWhiaRpuCaCNXyxE3ozg9G6uP1uuvcex449hzLqAM5MUSWNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LzqAXHaVCW1VhPcBTWRDynk9jh5CZ7RikCU6KQwcJEweaoLvBFTzMHnt2NaSgHUk93LnCS9jNcWzdube9rYXHuh",
  "key1": "2Kmo3f1SALYKwNLZk7oiQ9MGZXZCw1LzEfSWaaPo7m6ZUof6A87u4h7CbRrMoQbez2qxwa7AXYf1Emt5M3rJ86HP",
  "key2": "2dZT7hkgomrewzmp3Bci8caMa41FeVvv7YhW3MCECvyowQ2GVSPhZ3KhphKxK3GCNvwER5M1nAiVLTAy1HPtQKPK",
  "key3": "CSjk8JD22x5By9641qLZymMCBRAA8hZs7yZHbTaYfaXHP1QX35sfR9rcwMAsYM5fcgv9YGuMDZptFCLwo6zKaZL",
  "key4": "4VVFo9RzYt4UpWA7zrXNVMm1Bt9WEyHoB7yV7ZQi7gcM5Q25DvrRun2TymGPKFvS7w93oLsEoo7LefKDjvvEHuhv",
  "key5": "2QBL4Gua9qcMGesrdE8wDkUtmUQgCP89foN8ag99kgBYg14Ba7CUrxHi5cswb1TocFU41B7pkkN3Dfo2ZrbWemZK",
  "key6": "5cgHHLjLcwbD2pmw4QkgeyABjmjHHjqXKZM2Rr95FNBsxb3ZLURWXNSE5uEV1oW7wghJ6phDwRq58y5SuU71xeb5",
  "key7": "2owa47BWEew2SPRpkoBGyhAoS5ZzfRGGEm1qXYRvj3NzAQ16Sxn3PvYn7d5CwEzA7jwqycPLCssGytFzpL8Bxw5U",
  "key8": "2kvjGL6RUZ3GKWSMQbemDnqjRKbL8STBKrYY7fnZDyaU8ESuZqjzfaaRReC1AC1EABZookUPmGmZyQpVPUcZakfp",
  "key9": "3BGHTAnZszKwJfnTe18obnzAGGpfLFnxm6F2eefnbYNfGTQCvTn7Mj7BwALtnJwKMqXPce3GosuK9BSS3zsfknrc",
  "key10": "4HWaqm1zvY3xKsKvEZr86jyerqnJEdQqnnBuxWgRPu4jsvxUaKFFE7uY7WmGGJkJ9TWUeB7zGk4AUNP5HxPZpTJB",
  "key11": "5Ssko4b7Qbo1TX3N64b8GJxW2j1BGwgh35uUvYZjopvFERAroBGQwpyetDLVZMyfniF9XkYpnpfmmJU1nnDw53cb",
  "key12": "31qtWUbF6VqdX9RnWsESD13YfeY2yAhb6n9Ri4VYm8XBLV4v1D9rhGDh7RDiYqRyhQQrSkp7HYrgFXHfhVFhSQGd",
  "key13": "2VMCFpKhDptjW9DHVjmgTAjuobNPJiownvNkrzvCVdo8uGx38jp7f8Nn1XKnHMdkRF2UXbYXfvud4Xic8Ly9faAG",
  "key14": "2i6phZdZcR1x69VW4r9jCxwRcRB9NhRYH3rpo4mPTo3bJX27sBBC3TyXLB7fnNN9sYe3tg4zGKJVP94b7ZWpmCP",
  "key15": "3LU3oj1U2rCUm63UKzqpkg5nh7GknaHqbH5gAtqLLbzM4HGSbNgE2MAjMs1ZKUQ9Afrn7TAojkG1ARX9EBUwAwzf",
  "key16": "rtX3RYbfMM65v54FuEmGwcmhpwWPJhWGzNpZtAzCVGQxhTWCm96rvLpTEW9SRmkUSRBuuSpCt9oYBwgqqqsmtD6",
  "key17": "2W7FX855teFHyxJYPa3FkjkCg5CvM75kee1tUSe6vx1eNXHGN9zKMhY8NR7hPa6WFgtjb3ZzssR3tvVGV8SFPwd9",
  "key18": "4p2QN4hh63Crsq9x6UnUcs2FAD6ZR65g2mymAG5mNCDL3dcDFGoGD6dZXo7FBP5VaGN2Pd5gj6t5b35xGEXphiQh",
  "key19": "3vr71zVajHw4DwJSGRdSvXW7HPjCuxQbD7pSjLBRALGwsTLL82mXc9LSCT9BXNTTZXmWnG96yv19JvUDPAv8w2LG",
  "key20": "2gULRZBKvcKUYXi5tGaiZRL5agkozyoNEyUicPsKFhHpMcH5wn9UbY38RNnHxmEdNYnMwEbhSgLaHRz12EGk4EDD",
  "key21": "593c8ogiznGXrw5rb4AJb2E7CDmcmPP6UvQWxNfCTxhGZNrCxNFptGAkP9qxMrs3cKcwJGcB6vahZgvtDB9rBPRC",
  "key22": "3H2gh47VMLX9iTaw1MV98bWcCwJizmoiHqmNwvemrnLw2GGktEEHqm92CRKkGEwQhywTxh6fhTRo3CiX4PnHDuUN",
  "key23": "pdsapzW9jieEMnVUAKz5YdT3PZgtysRgthK3Uif15q1Yj4pvtG79NwDZJCgeoZQzzoFkM2KpcLaAj6KoZ1Aj9Ki",
  "key24": "2rz5nB7Z3DZdSECparwWjzjr4Jvo4zU2odGAbFYvMV4Q2v7KM2vZ9CbijwNyXuCBiRHuUERTdQQE65sLsLD28KwY",
  "key25": "xQ3aBWpJ2ZPUWFidd6NsjwZEADAA5BbyuvFqwDaESthDXMGmDLKeJ4tRxyRygBMKKxZhuuHjfTNYWDexevKecC1",
  "key26": "2dxedYQUzyNhJFPawq8eqYLQmAMMwQrRJFG8yDv8MoL8dScxatycg1eqN9ryzVrVeKsfVHxu5HkhCaSmW3nuFYnx",
  "key27": "2eeYup7vEUj7zkAQ6DTstdBBtKqJuXodhDbveC3J8DA3AibgWnKNh1HDx4gqPYhMoBhTScyE3tKqu45Sv5MZ1iHU",
  "key28": "5fRX1SYxsDm3V3D7sE81EVXsDDKDyR3H6cFvFhzHDhuQrgHRLVp9MsNFqNwkqL3EW6YgiwShSoTnggjHYsxzHLBU",
  "key29": "2vG9YhtEyAaqy8L2kk2xJYwZDJYTgvjVofwJLYfscwSzDZKC9AXdLrSjUNA1uKeg26yojNxS9Fw7YtTR5gHdNVdk",
  "key30": "oXSiqjTj5bS9rNhopqozvM3L3uJ5FFhoW5akLgyPmR5Bw8zJKRPeJPxbn772YKNZN9rch9SaRZQ4dfJB74Dr9Xy",
  "key31": "4nQmoL1xoNhvzr9EgXXbF3tD4hRZrHpLjwbZzQ4M3CLr1KFSk9JReKeQKR6AbswgstoHtovf8vvmUd59TVhVzYgH",
  "key32": "2tCK2G4hF8BtaCCmTVeHx9VwikdZofd7vPZWbqMvCUjDtESLQ7uaPGsy4uWRdYmpmtgQW2Ao8H3NZMBd16Ujp6C5",
  "key33": "5ohcEz2YYD7LTK1pbxdLbpdc6fYD1HsRFrwQxZSPPNvL3S66gK2grDvouB4CenhWG7VpKyR9QDP7mGSVM5uWnruP",
  "key34": "poCqUPMUBvHKj9vbfZGkygu7Ab96s9AL7Azxry1QWtfx6P3a72kNvttYhawyVuzBtg3a5DJiqiKYprRRQZ5YKCu",
  "key35": "5E9hTTzHuUHCaxSpiEQ9zj9btkhhpvidXkFgdN5tfy4PTsdnkKkpeZR2xST1SZMa6AcdxXSHsBY3sP4aedkGdGnU",
  "key36": "5CMnkguiDzoQ4AHDaPbgkR347fJjJY2DwKnauPwomMGSMQGJJHfFhTKvR82Rnmrph9Se1vZfeWar4ugPHUjR1gYJ",
  "key37": "3uiTBdnX2tZojNAKZwaCerVoQ4rDnK2PrdfsPa3DArjF8MjpaSd1rdAB9MU1fL2xJJC18mh3hHBo3v46WK8Qkghj",
  "key38": "QNS2stZTf1khz8Y9j4ZvoN7ft5bLK1GreCuXsNo3H1GXEfgBVMGuw12DV6L2WnvAcA3xQW8aJ3vcYC4LDtTtx6c"
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
