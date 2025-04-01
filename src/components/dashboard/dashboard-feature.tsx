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
    "2UtMDi8SD2ZFTie8L9CKkt4sRTS5MgNi6rSMjFbegDBJhRb9TQWFZytbb6s82vAvsaKjyuJj5Kv4LHAjjNt8FS4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xkecp9FfsrAv1Ru7jAeUVYSjRTrTJs4PNLt6iy4B9rAghJJQ7CftoBY8Qswzc2dFgtZwmC8YcUVysm5Tqc5r3bq",
  "key1": "2yNE4xnSB8Y5gDV3S3TouDA1QCVgaB2dMGRFroXdf9QCrphtZYzb5AvVEG3B66VyvPtCxfRsYVFcryZoaLFAgZx3",
  "key2": "5bG8qsD8byUnJRoXUy3iAvjhzH6bcmZMmQoweTxKkYZ3BpPzMegsW1FwZ6e1QUnBFkHCWqUEH6QJALrNjispoWD",
  "key3": "3eGtmnuL2LF3sHMa5ve9mrZRw6fURjPJER1NXejCX45TvP9KD94wrt73z26errSsdYYVfjH8vpXtd6kieND9iDbH",
  "key4": "kqJh1PJPi6GgZDxcvCZC3htySt8b8qNXtFwwgBa8REPpRLnNX5NEReZYzcYGJo2LEWxjvYKNuYnTN8DgYXiU9Jn",
  "key5": "3LWNbxtWcS9HdDifD9h515cQb5YBVkL1Mcw2uhBMwhxPEF22UzVp5MiyQ6ifVLYaWCr7dZho1vrp7Ax5WhQJ8PqH",
  "key6": "2AQmgrCEEPDJeQx2sdF8unw86XXJe4g2kggwVeGNmy3XJpU2RL6NYtDjf5uYG1w8JxC6PWaKadJB4azcaLg6WAHc",
  "key7": "5UC73EKVma2dUfc297zBhsG8wLmAxX4HnbUDLhPQzBgJyJQYsrnxABbAbiycPyMDSTBRTHPiHoV6bHYSpugMmHGL",
  "key8": "5rfMoTXTjEajpD4FABubz1owBceHAiFi3TYP8QrxBujmKieicNiqsXM8YuddYTwEQWR3pEmRG1gPRdhpAqwSyHZD",
  "key9": "66hXiBsGPpmPK3t7WLWjdCPyCH4BfifgqXHMcBKPsugoLKRSSWPUmSgHq4UZg5TDrsHXe99VzKnx7YBoc2MgW37y",
  "key10": "3uD7LL84AJwp1FK77ZpV5XzedJchBT3FUt9hBkTx1PiyJDWnGQoXaVjGSAV11ZtaQzSNryaWKvoxSc5yi33mmZU2",
  "key11": "2vGHowoqgC14DFyh8FYsxH4iq4NQVRyrLPpxwVoGPn2BHRLjrBNCeRbiRecrs1Fypof4QshtjPNMeNq5SybmHNFc",
  "key12": "2h1y6mSoKiqvUShMhnUQCsWymkFVuecBDQj1GooT9FUbFFQwWhNrn9NkYnZtsATaW1hc6vcbK1nEjx9rkAM3aE2Y",
  "key13": "5v5qTKimxTpgiYgezTEbBLkGbGhKdDE6JakrSDRSba7m6EB2S9TB1NKSmEQ8CkzyLCqZp7ZBiemUEVgmsYGW4YHk",
  "key14": "2CuaSb6cYRygxKW2cJeYbaMdQ83iWEC5uhyoL6iymRW6tS85jrCusnarePeUznwcQ8B6q4PTi8c1Vq1Z7iZ895jd",
  "key15": "zQrVwGbekvDsN85K26YpaiZkR3NwvqC6PdWCUH5AsgznMZBCBSms3iw34ZMnbmusN3CJ8gxScxU5Rx6Z4A4Yb6X",
  "key16": "32mBKD8WpAu27sBGkLKii6MWQCdL36jibmuVNLUpMTXLaaa9mBxFTTekgRgUtiakuy8zioXoTNaphN88sMC6TBVt",
  "key17": "DNGU5JgsWNNxtB2dm5iSKih32aLig82oLqRJZiFD2Avbx64NptF8eBjuXZPH3a4wUaxD3HqUHkEeoF3y75JXGRq",
  "key18": "4QtRL9HT31QdSJTWWr1urHPFaDh4hN13VyU5GMuqZHYKSbioLgpaEXvGqtuPCixewV3qGGMfUGg77TYV411xtNSC",
  "key19": "4iKnCL2pAEcQ2PJKMHyTLt83jEK6L5Qsq893tE6YXhy6nkMu4hkQQX76bPCFTABcY5jgFxxNVsw4Nwfpg2REenGn",
  "key20": "4Dvwvb71qHV3EwdrQhathT9qsEQ6JnSnA4yt4FZjYtE47PtKFQjxBw6oqe5u43WHBYuvAmM49o2bvmH4pawDpJSA",
  "key21": "48b8M6a8BNe6yTV2T8PJj7hA9zAdhgtqNzsiZJsENrfnkve9j1UpqcQFw1ma37TQir8qVfnLsRhHST1Lm8WFBaqG",
  "key22": "pvA3VedcLu2hj6TqbMBKagu6iJ6h1PixwUgYXCUYHTVMg3ywdiJU4ZrJzGHUeJmwFVrZ5C2pWSyr2CDyp6J3KBk",
  "key23": "59Mg88dLoMKdvg65f7kHSZnE1as3Nt2ZxJWdYtaVAoup1vkJts66gGGMESCrNpbWdwK4CDf2jY8Sak1paGtm8fXd",
  "key24": "5aEmikgKW1ohoTYGZqyWhdvAdw4xDNJSwmVyySUq9m6o9eSzMwbTRxKJCzEatTdn8zigZkZLY3TkwrLRiVT3BQFS",
  "key25": "3CfGrDzb17Z4Wct7xyw2m4GpUKeqvyvfvLMVCiM8yQQ2p5wYjwZyxxYB3gw2V2Vcteh26evU3xcT7AyVDxopbo8s",
  "key26": "4fbpgxFoa4FnA5pR3RTFZggo2GTuaeDnYsF7ssniSkYGkeAG4sa59p3Q8UeE3g9b94v7nqj4suE4vboJcn35AmGD"
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
