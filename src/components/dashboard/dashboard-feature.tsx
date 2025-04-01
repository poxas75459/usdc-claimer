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
    "3MBK1GESkAt4b6XvvimQovhUcYiF7fdzmV5tf6z1VmTQNA4A2daPX5Dm4Zx3p4yZzcHz7FfJ2Bg7NKQwmTSCbCGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TYcCoscEAKYyUMscmyW3hCfBNJvEjpS3HZyp3gz6KPBKN6mXL7Z6TXhgBHG2bLmngZtEWrF4BK5C5nHHa9AWPmg",
  "key1": "3sTDEZW5NThWNzX3jWTHforHkYjkAJF8LiibmqvJAGFZLDCS2EBZJSp88pC18rUx5yN8u1TbA3oShzV2WA3rSNpf",
  "key2": "4RgQUkyg59FTC9Z82RGkZD4SoSxM1nPEKcHyv2k1fNa8fNzWEuNjdFY55Nb1tAEQgsD3oBK2siQoSErzGSzjbGV6",
  "key3": "4SfqStCX4Jo9BjJABiWH6SWnt4ENRSENYt8KtcrhZuUKfH72UcFF59y2ovdhukUZYF2LTnuDqYy9eeceakyW6m8R",
  "key4": "2FM2kYGs4FT5nYujc3uM8ePJoJMJsPE7LuQ3Vsdxg3g8gVy2djsbLfj1xQ5FShBdFTVDxZNEKmxJBzcY1V63VZSd",
  "key5": "29rQFjDJvepELK5R6LQzfreMMPUPaVQhLifPxdfJ5r8cE6aBx6yfd7rShVWDGYwVHfgyRSYwhbZ2G7ktFEQ2egCg",
  "key6": "3ZxmLvov7Ggax2L2FphtFFnkwTEi6NghaPN95rLKHdz7uVDwjST3r4rYtB8kzWkCApdDwUNVrTrs9iTqyWLpH66i",
  "key7": "2xHdxCKyJQk7LCGCf43S5LNRuYaMD8k6yLC6ur3Q2tDekQj7HeJKhALc2wP9bAr4VaLq627y3camKg9ZXYRWHszx",
  "key8": "4gF6yhmDcnZkZahTqajRQqX3XHDwTFHtMM7Txtgi3W45v21hiRZg7PnLJdsSrRgRgsvMhTCVPGsfxF1kccR9ZuMR",
  "key9": "LUQ3qfKi38wCTbTmEPNzHC4QMK4wpSRbkKRkUeFZXF2BCecgRCxJxF2pbkWayvr2W47SUutxpZw6evwvDh2KqUp",
  "key10": "2F6ELAfrpZXN8y7hrpYkMDfXGyhrL7T24Xu2ArDTvEYubA59iyfJMkui6V8MwKo3YJbS6CwM2VhMGkMUpDikud3L",
  "key11": "3oPQjvA3mjLrmjtZ77NRG8prGGyT7kiMmS5MC6wMVGhXUvGK8t8CLconNvMKX6EnibuZ6adnFARGCwBHJEoHn7M9",
  "key12": "4EfN7o68PQz56eTnkLLBpX6H2q7wSvWEVbpgMZRdqc1H6G3CjNVt5dRsMoB4urUMaEdgwzAdR4WqJC3PqSt6hNKA",
  "key13": "3B3emxmZdBMVXKtSBDxnzAp34HfX14FRZ99Ti73KwHmzsfzGmm83RxD3yTTVdRjCzLXLKcte4YKGeVDnEqszqtSd",
  "key14": "4oaRhqiWAFgd7HsrXTb1nejBYCbVMHx12aEA8pkiCucaYRSdgQjnfWYdfqQSKDS7Lca2ShQWcxaAEUq4SRaiKKwD",
  "key15": "4pjJh2q5iBmaraNWAZyEvaftVGhpDBaSqB1epgNNDk8BDzoMURCiTj7weZiA7Xi5HwjqzJFGf4f6zcdMFkFmoonG",
  "key16": "5MezDk4bH9b2oJc9sY1hTUsk92th3FUjScCs7XktULSnpNgkVRzBX2skVb9KAftjcxych5KysJLFWy2x4WEHZ8Z",
  "key17": "4kvcNftLUJJ1vw1682JpaShkRbFBEQY78iES5SonY6s8cQYS4ykDL9pGKHnSt2cDwpH9WUgsHjnXYhSfk1ejrqe2",
  "key18": "65gF5hpu17QYvXYeRZZaWofeTWm8qnDGFHdxr9KGH8ZFXNGTwGXokYQw2VK5bQUDLCU2Ezbp8ceN8oYh91TFy357",
  "key19": "4tAqCo8VmLvfYxKw4s99nFCwnhNZkgP1VMJuzSV8KHpzMC1WGbkrBaXgVreZ8RNqXbc88RUGMsGWxy5Ux8Mc58hg",
  "key20": "2T4SjvrdmTvryExY8n34wxykQLLogKBH1ynL99KBJBkLnYcxY5zfT7eDdnHNbYgXuQkiA384KWYe8ZR2Y7FQNt9U",
  "key21": "3naRMfKcJhkQcgByUEFKUXWzbnMSYw4XCJvYLR2mSTrAetnFaevKcXK6AEPHowvCjtRXt2gJJ1s16rerTBEapCaC",
  "key22": "1MY5kDHSA7gpgcZKbMiSCDa5KudCBiP9EiCYtq67LX3EdgKrhkQZAXgAGLS1X77RKQnfnYk5oCDRhBPQPeE7YLg",
  "key23": "26W1twa7T7Fc23udHESEatFp3BrMdmhtruXbuuTrgtFKvyE1PotXVRmfcqQXQ2eiykZRb89bT1DrR1RQxCLXDNTs",
  "key24": "5HjvddiV3Cf7WvWBBxSJDVJ6VcDdFg63tZide4XD4MD3mcbZUTk2wAxbxM95BUnjseY8ooPWZvGajDSGY2CjNQm4",
  "key25": "39TZW8DbksEtb3i5eNcfkGaFcbPuHDXRwGJor3B2RbHCEUZz6yPBUb9WVmxF1yVCQY4wCnNv2dGMTjgos6s4DCFd",
  "key26": "25D4c1opsVrKT14ikwfMZ9uqysEKGDwCD7eAijKPFASmMEZ9Rdq4LqjCqimu9qhsf8n7TXS6UjcBRDLn6fp8T6cv"
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
