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
    "2MniSJBviXnehWw2WJmgzzXeetyFeTtFkswjfYHmn3XFsAGAGoXeoJ8ayjwVjMsjTRQCzaHoeSQmo7C2pbpovKrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z9aUpGUYhRgwWSvG1z2pnBifz6UweiByBmG4NLeQVtYfjZ6SizGsaLpZ3aAYJsJ6Lsb9F8U9o2NZu3myRKf7xP8",
  "key1": "5RvZSpjEJjvuF56YrTrPHiyuk47h1rkmn81mNxQccdj1rfSN4mqmCEjxNjHdu7E2L2KNujr9raDjCYeuQG4viwUn",
  "key2": "43WWy3vWNbcSdXd9XNyNX4oo1QoMUFBizZEQcdH8bvFWd4UQi5FgH87MtyExcMpiLBDxKzqH1Yi91RxsotRU5aqj",
  "key3": "62qav4ufGX4itc8PcxvSf6e69YRa4Cmj5wFxHe5MbcMF9ntfdv5hKyaeHhJXH2eWaNzKCYv2rpWUFb98hPNcsNGZ",
  "key4": "pXXegYub8b6Pt1xXj2mt6zyUzUwgdrTJ1pPtK5P3wH7sBdTE9KT4sX2CLuaDV4FAhUF125NbpXiY7BFZF73CLJD",
  "key5": "4mi7jN42FsuWmBqDKxkKAVah1Gy59h9ixgRoP3SA65T4mekYgvi6FBhPCtqus7uUnpGn3nKYgHRUD6qaFMJqM3EG",
  "key6": "662G37rrRzwxY1MoEMZRzsSQLfFoTfvaiHteRDwP4prkmfqeE1MiT13S74UXtozibS1ND2gYJfJQkruSVX3adDSo",
  "key7": "vrv2iQEU8YJsuydLhdURr9QKEHQiLFW55Bq2mDyP5GWF31sPtzdPwFnr6oPmzb2GxXaffbagyL6WNymmeHa5yfj",
  "key8": "EyMScv93Bbo12E4x14RXDUekwCVNDdLCF9iDoBbU5vatkbvAu7zr9EujgTdNLm1LFkoR5EF4YZzduHRGuScjyuQ",
  "key9": "2dqyU7zUwxSoSgh2WPACn6SAsovWjWWW4Ny8AJmt9jr7jDR2gDuyoC1KZnmC3epAPe8m19thRgcrG3d2pGNBgh49",
  "key10": "4jtRzx8VAn3Ng1M6yMncYvY2KTQ3LuimQYjcY6CVDZH3Khprj51h5ARiBs3qvj1YAzHcwGGnWcCjqY7nKc9dSUir",
  "key11": "3MxehmonhgeuNjXTkxpMJsam17Y4fiCqDZN2R5UhLS4rkVntC1YM8pfnMTZ59Px12yMmp2y4EPqmDToEh4uPn5eT",
  "key12": "5rkL7XFM77CugUJH2HRBM4uVD2dQwHNAgRCtnUHPFtTKHpBQS2W1UiB6xpUEKbFNvWCeEVtz1DhGhj91WAeJDzX",
  "key13": "67hjT7Zqnzmo4g8fW2qKoK4xujrt5but5JPr8ytRn63HTD9bMnQQwtFavZPt5Y22W4XsaBYByRRRW5mcyCsU7gPe",
  "key14": "4zwZRQ3kpfKqAFrym9R6WHxDmXvDCs8k5jUNAqK1H6WFxrpVkXr5dw22b3EzgguYfBjt61TVVRSJHPFnFmYxuZzW",
  "key15": "5NWFTug4i55EVmJVrBvLr66KrsufH1V7ChRXbETgifAhDjoiPSrFz1qq9yqa1hCMMDVhAy2s13Hr1UU3EHgw5DgC",
  "key16": "244K9Y17WfpMWgqL13hdY57X6cJXqEzSLNpygDzRue7jiEmD43Pr2mRgcF3HH7ThXswTzr5bfZokcFi1KwHvPCQD",
  "key17": "331LUPAv8xgxc3cZ7KN7o9NtigbbARmBT3QDAmgW95tHySG9z7TayEQrTxHt7ky6i7aTHJBmob8PYkwc5gVM2oow",
  "key18": "4f4XFbU6azEG6MireFZ71YUN3317zcSE2NiBgtuwFsXhg6gMwSAaQAAcAdeJhjMDgAGE4JGEKPSojEvB7DZ1BECW",
  "key19": "2383ie2n2yk26BoHJPxUjPt7A9NmbR5uZwmB6uSaRqdtnzDiLaxGGwXARyE39EqczTxhEApRJr5yEULgTQnw7Ky4",
  "key20": "3UMnWQH9X7H4KDkMAjGZBPBRPdNGZnPjq3qKtErFNUDGVbh7bSfLFoCYSLbbH4NFUWQF4D2YS93tBdpcJtY997jE",
  "key21": "3n6oDAxyMasokHHR5tMNBjGNy7C6464xiPLTdGaMnon6BeVmiPYMJkrDNokbAmdVjXxSBh8B2ebzmAeFCEuUmsjt",
  "key22": "2LxfDanCPEUH3thyNt4YrfXnPQ2bS45zfBP2R7WP4JwhYpgQBJwRhqnCncA8rftAZTnLx6tVLitWJGR8jVgpJr3w",
  "key23": "2Zwr8hwubtuPJN6GTUvpT8rcfysgzNtmQt6YWKgnLYPUQ61oxf9JL1Q7nkiQJ9GoiqCcNeDYBvFAmSV1M53z7eNC",
  "key24": "2eRHidahJrSZCPgMTiCncxC7cNCmsN8NLibfMVDrG6fyZuhkb4RPtSanfRQL29HYAobjjHQGGsUPykYyFaZNG4sc",
  "key25": "52Nkogr9wXTiKgb8y9wkEdpjyzo7RBG3hTQUK5RmJSn93YWEbZH6LcFC3ER7wLsgR4TwHaYtyct5HnroNwp5Hobu"
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
