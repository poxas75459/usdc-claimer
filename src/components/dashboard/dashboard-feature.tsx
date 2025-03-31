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
    "z9oVUvrqSKk1GK9RonT67W8xN8mXzWCwDottZYZuacPaKh6E4WV7yvQWhyZdi8J3tbsfNAoV1KbP9BX3fZBDaq3"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5rfrtF18rwuSf9QEY2VBPMcva1qfaymkEH1X7yp1YBCxiutehZWik5DwYEFPU5kkCJLyyRWkgBVuXPTEz5XNGhbd",
  "decoyKey1": "h9uNHZouL6m4WhY8Jdg15uRUhHYYuxbEWLBfpy4RjN6sbRPWKGa5U44CzGh9DiNuHcE9YFqLqNU38Hnx7EcEriH",
  "decoyKey2": "56HWTDvXifLQGGk5Fw2aypgjUYQKufM2Noq6XZFKiTWF9vnzQeJ2JJ24tRPWUzVWtKFW8PuoEDnyXkYnVdhvZnue",
  "decoyKey3": "4nfXLHSnDya4yBi6QDvMQYr9hrhMMSWEq2qykrDDpVkqWTzPbH27nwzSNZ2CWtAKXqkTfUNe1A38r4TvifchBxd3",
  "decoyKey4": "3R2WKnvmKNpFoC8sZqLuYRM9Mgr36kL1zR6P1unHB5UpzzGmCDmoNtnQDobXcNziCZRjeVJJjq58bdT3QA2a7kHb",
  "decoyKey5": "xaxzwdW7won92mfpUrJTitFrLtDvPWDAHyKjhMR7tWgzBTFfo19MBFXd2DYDpf1wZzEHFsJd43pKoT5rVoH5ijj",
  "decoyKey6": "62akZBdBvT9p335o9n3jSYjmCK2rVfXpEJeeRcipSdjWaHCBnqD1JqqiwCciDksYqkEvFhsRbRuCqLUKBEqbGqao",
  "decoyKey7": "4VoMPWSkZWVMKW5xVwNBxX7BrSsAQ2ZRom9EQHZqpmX2WE3RCyGUdWNqjpABf5hht9i5stHBSLxFthFKea8AsY6e",
  "decoyKey8": "4FCxAPfNhZR8vcQrWZF1dt2KY98xTmRfywBKzKNdMLiAtiDgRR53rDZ4XNdJgAFNg25naufUXWCcKLU37w3sKeWW",
  "decoyKey9": "3cQgTgG9eWA9PBNidKquzXoHS7bY3yXQxxb7VehuXvcEB6MfnFTbf55y62q6N2vD16iEKnRYL1psacM15nAfsEgG",
  "decoyKey10": "62brQTT7mHWkdADoN9Du2a7QbnQuebZB6WRPt3n3VuPZPt43XSrHeNsWoV45JXZCSVL4S9oe3cS23izvgkvqUEQe",
  "decoyKey11": "3npvkhtssBAo5rDPBp8ogLhMmk8xZN3svZH6Cv9PdMuwb1uPF5C9EaAASBJA2KoFNe4m9PDNpSsdaCC8SWJDYb9o",
  "decoyKey12": "kP2yLQ9YNqhLF5QETJZYA4H6Tixm5H74f3jtRnvknk5So1tvJHwZkYZ1mmwmrHgEHuoeAjWkg6uWFUwea4VmDps",
  "decoyKey13": "U3piPKLFUWxFMTQyoxqLZuKnbVPq3CN4R21fdXAbkAbn5H39EcjiK1WNjXRtrnnQ3yJX5HhupwQWUADzsdS8hm4",
  "decoyKey14": "65r9fXC5JApiHTffQWDMjoeur6URm3dGDADsZ3cfywmun7BJBY33xJPFkiraG4x4vEetgHEcSzm5aykLSTTdVS9K",
  "decoyKey15": "31ekcvdUEwHdhHgXpxX4LWob9uFs9XzM86DjYf7fcYieJBctQqakXPpo6nw6ksvt9ic12EfNoF2EmvpNpkQzDoVM",
  "decoyKey16": "2pPCLSqAsDrYKuGzLiEnT1f6jTKNh64te8Rr749BM7CaHY4B9211PncVuZ6EnMqLsUTb4p2XyxrHt2TVcwbvAA42",
  "decoyKey17": "53BK7zTBdSiN7TF296KDHnetbGQG6HTqesZhswWWbqmv2VQ9mPWsGcayfUjGUfq5dagKFs4a3GoRhis692nsnZRZ",
  "decoyKey18": "2eLBWsyD67bKMkkwUy2zDUT9eaHHvcJWPsX4FQy5fbu9QxJM52o91KtFsBzZDDS24k7uC9LryXWGWFRZkNrfbnKT",
  "decoyKey19": "5nRsEmGtXb1hHqNDZyHPVtBiQxtNXBomrE14dibRQjFhkibiKCbp4owjACsFU7WUqs713qFCXf75DWY3NbuPqBrR",
  "decoyKey20": "4HpwL8wSrZqinicztZmAiasvSos7JjtLqCh5w3uYhVvYdVyoP2AEaYDecewNogNtSa2pcXQ7smin3wfmn9YHxCTk",
  "decoyKey21": "21yFxoSevE7tUTn9jDJPE6dRMAT5po461ZotUzRFBK6BANR8yJjRQbPLNBL8JDyXbRB5D7CdnYYatJ3N4n4GD6M8",
  "decoyKey22": "5ZvwUCmUxHyEmbpo1E9W9n7ytGAYGDMFosmLh3BBpFPXN2VTBvyVWNcR8RsKuvNBuBTurLMuKLgts6nnQpmRPCm",
  "decoyKey23": "KQn6spMufnf6Nzs1hpkDopU3efPPNiyrknWve18wx6KQjg6nNKF9UTFKCRRR9gXZD22RB9PuFie8YsMm7PCbuwY",
  "decoyKey24": "3FcE3Jd5p2GjqnzG777VAohN7CQFUVmwx4ScYoThRjcdNEm47tCuwMQzDGDaprUAwMxS2Yg8LjU1oNnwBzLX2muA",
  "decoyKey25": "5KL5yaBesFNQUngdAoVvycknsmXApPTgGwXrJ9PsGFBtV71mjGycKr3UdFsbSbv8GjQnJGWmHQCAv2rKrWnmjDbz",
  "decoyKey26": "EymCPiAkUyzMcLLpeiWoVvFKejxpKtkCsjjpzHVJBd1BvGhzVNFhFxd5nda4zn51eL1J5WjkQ4DjTCrNFVFnSqH",
  "decoyKey27": "5y9pP55nAM6ys4DFYUcBq8eqC3bW7knZsCJRfyVqutqBJob8PbW8KXcdq4hn1tGqekaAamVvMa2ZZjd7tttqDf5x"
};
// DECOY_KEYS_END
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