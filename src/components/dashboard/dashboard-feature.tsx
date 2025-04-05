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
    "2g5vZZ6hjUXPu2fTfY46wL5HcUfoB4ztjAmHKeQeGKpACxZaqbb8MfrY9ZpFrqh9GnRM2SqNjpgP9m2R3yxUzdBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sYYfSXrf5CzkJQhawajn9sc7pjpD4s1CPy2ruLDWLndgoZtgP1PKuzCCRC15TDiCY1AV3D9eHwnTu7NaEG2qo9B",
  "key1": "D2wojRgKqCdsWuL8ZDPFGYYiNwhu7nst3ZWfuDixGMFKqzSDynmZiVi1FfGu6LD1FToqNBwGV6vRY5e7qiJdqDN",
  "key2": "65ofrWLTxgUVoUv9neGRaEvWNamhAaT284rSD4x97dJXhfyJNZ9j7K4oxwZBKg6cqmJTUm76yfzqWuUbAQoFqyKn",
  "key3": "2aJhZDAgcCBfL8i1MtohopCjrJvV75oYaff9d5PrnKSsP3enj6VEHZAVM8j8fVQAAPJfFz3NoCVniwYN7nkFwSne",
  "key4": "2yj8xp1p7Wmu2e4rt3tx4RSvTZkPZW3fGsAcwUCVQELjT57tghqgTUiFNT7sVig5xKwvXpsgwmyKoGzP51DHhyL8",
  "key5": "4mQK8R1LuHyiGqEfDv1w85MC8uhRjzT3CoG74c9ChMKLeWhFEJWQL99wMQFtgYX3X9TNKAWcNbR2Fmv6mGEh4phG",
  "key6": "4JepTbmF2aE6hZy2HZ6XJifV87ZgRBuCwdMWj8uMschAMcJr3N4Y76m1YbJsXxR9ZLLnxFch3zn9AUQsmGkp45iP",
  "key7": "3RRQ5R6CTUAZ11Yh1GbvCgWzj16SDwiPDi6WxpKzCobka2kiqiyzSVyrZ2BC6sSo36VJNR766wTxqwRqqv29Yyhp",
  "key8": "A1Q5oSMgVwT651yiS8LZudG8kgunT6ewejrfWLdrke6nUXus4p5jVEv4tDabMJK9CjChMtkbsugqryfpexM9c31",
  "key9": "2a6EucSxJSV8rN5k4mcccoHDujsooABHRU1GTjEmmwsN3tsQWTz9jBR4mcp9PFHEjHcksxDpjDfBUixztK9MftTd",
  "key10": "5H4FoJQvtEdbPuTkxYu2zQSRNLjyTvtBPowh7TgiwgTUPzG3UK5ZC89E6KXRSiQpznhLubpnnZQPuMio7bJ5osgx",
  "key11": "3ngZzbVpKbdYvRrSiuHDLpRd996RkdxzGpfgZjko29gmF6Dx4k2GgaKesTA1rhnpnENRvbTYZAxGko1ycQhF4y45",
  "key12": "3vQ2VoiBoJHRhTyX9SRsBAa17hUhBxGECySUQNdZoWmcoYcMSbqBYvtyjqnYdwur24sFxRVkZDukZ1aUikRhKoFa",
  "key13": "z2JfQLwhzJyJ2MkkJVCD2CGWxQqyJBNwpEjo4ndGLmpV5XHRWEiMfb7qVLrS1hDYyb2z8EEwioZWgCdEr1wqBcP",
  "key14": "wUepmiJcNuk9G6dM8woJXzjnr6xZvVTdZgGgr1c93Lw5uk6vY6iU9P4xKEnCbHAmGC94di9vJWAKqQrHou64WcA",
  "key15": "2mNgJgh854M7DYUdACW3KWbLwgVGi1hiXEgsPpmrSybCWDjuqRkfpmyDrRsBRTWmLVCJi8unkxZ8ybZTc6FWzr4U",
  "key16": "5ys7TyKZgHjZLh3WNvNuB7ccpXkyhBGeULm5kDWDmtqAn8TMWLz1RWGFmkgBMUJ6qj4arXr3zGtXmvozBmb92KP8",
  "key17": "SBu3BTaNjW8HXnU5Tuquj8iYQUsw2D7U3jaX34zkEGz417q3azS6P7nPx4C3WbgSrv3rdNeoo2GvWu24sZWcrXV",
  "key18": "34HecLdskbzYSDGEv26jrcqNdY5og31sHQDWWTn4wkiggNmKgzFDwHMeQJ2iHbn3z3w361aHNFrgktZTSKW3gJmx",
  "key19": "62BczQnp9ZzzC8k1bAn2UKeVoeFtFbAzzxY1HYRzsnsMqR6jM2CWZePjAHR3Lmxs8yVibG68qPtt5YYtS7wKheeg",
  "key20": "2GsYmYRomwurQUe2kjKKMq9q66aXyNrPwuBKC8kZEWn3vMvZ8oWyktLXXaubR6imFLM4Xy4SpaceAJJZshGhs4PN",
  "key21": "2wYZJ8MaCGLckmEWTKiz9MZQNFTMLoAjm6bAaQyFbteeYuxe1BmbacQpjssCNQKK2f16JxxZ8FkZ1wxafMfWhyvn",
  "key22": "2od35yWjxmu53KwWeozW9LP1oK2CsEqBWR4LVAUZpb15RTz4TfG1eZx3y4jqtXVaoCNfvuws8wSqyxuiZZFnhF8g",
  "key23": "3cbJpeBbMMfzbuFvdSRLBzMiqyAL4bLUzCdXua2bJdwX2JDHMMqYHkjb1MKB9bjNZkm9vJmftX28BLzuKKLEFE5m",
  "key24": "5FfiQRLwH2TZkigBzURDZmtTpKwf16eGsisBXnZFsC9aaWrDjZAeJ7nTqV4WptES9fHQKbcLfJ65VYZ1chmhXoJb",
  "key25": "4D1nmDziFeQDEpBPtG6wZ1oEmWt2sbHXNg1UqPCirTw5AXYthY23sDfMXigBbqFNfPXMMxsHxoxVYnZRhTfPNBQi",
  "key26": "38TDrvtWyGehAY15nMoHk1aLNK19yWSqahtdXv8wMuZgXek2YRF9JYe6MSrFYhE7A4xCv7fUiyyjVEMz9BqEnDGz"
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
