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
    "4iP8MMenwt82LeUfM16sdSW2wJxqbHPavVxNM5q2ckaKu7fdYtSnd9RemtN2vHx2h3Cgfd5XovW1QPP9UbX636um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44AodiGzv6C5HyvuHNJXhHbE51PrsnB5QcgMieLyqPDUf24LegpexAcjnWzbqtwBQPZToCE6a7ARveoVpekCjJtB",
  "key1": "2qjmNGxdzurjNHEHXL3FcuDt2BYGnbRB8ddGyZuebADQ5xAayg9e3F6La6xMnbTBqAC6rFCyYb6zKcJPn4r6exhs",
  "key2": "343mE2zn3Bhv6Ab3cwfehFvsTBnx17LFmKYKwXS2ZLtSFzRrxsMF1hfJGPvGYWpgpnoEsE6pkEEuL4Xmozv9djUN",
  "key3": "5XbK8LiycQbwjcmbXpt45SyosE2BJmjbx1kQ1iHkwAwwGkZHJMHpTaAi8JouurMwELjFNa48YJBCFf5h9K9rP5dd",
  "key4": "3GMxi4jpKPMs3kJJS7ZR2d7rXDbJjzwy5fycKavmTDJGtph93iNkp3U6tu5Y64z85LjvH4AmpZF5nTRnYqEQ7Zgu",
  "key5": "4sfQP1JLpLCSbq9m2MGepScy4khrNBeziLrr2KtcsrFEmGaCN6kx1fn2Tz8hzEqYQ2Wmt7cbV468fW9KHicNfygr",
  "key6": "2LVYu8ZvrWDmNtqybWVbhNABN7rQxvKtiGxgRTCpy2GXf1VaybMroyGYyeq7CV2PgUeN5XKNWx9HAskYLXxLhRxE",
  "key7": "3ZFE6fwD1eujNqhjuFViJfxt1BxTtwd8cwP6ftBznwbthBgmTgsNQt6uo29hAVVPhUR3W4ZWoWFP25oMenEvwVgo",
  "key8": "4RF46T8TCac8n7DyQooRLJ3Y4D5qbepU3QuoSyhyrodj5GNbBypB2xxZ8xaBUnpfCFNnPG84QkqWRCJzpoTiY2nC",
  "key9": "4UpB13uCimQ53KUd5ZLCjHRCX9fgY4PsqowXrTx7rnutCgY3sj2p3547TbnEXuVynkvtmFs5seoSuUCSStqF6r8p",
  "key10": "5NKFiF1CvnMamEHwebQZm5vFHiSEv73DEcEAZS8rHkNn9x3m49a3Re4xTtyaEKegzzg6YVTWW1B8hYa2oc3K7WVR",
  "key11": "2qjHrvJkgSbYGke1Q6aoypzXS8uBrxLWx7HXEENY2Truysx3ax6SwH63VqTJi7ftk3AbYE8ZWhhiwZLijBgi7CjQ",
  "key12": "gMHHcK5pPdB9Po3SMSSwK6vcV4qac6dtzQ6pJCs2NiyemB4rmHZvzpt3UnhEPiNMAX9N84CKbjkWJBExCvWauiP",
  "key13": "2PpvA6yVTo7y9Pku6kaZPv89cyQHKfj7N17cNn9BtvaYxbk7JW5AakJXHyrMVAgLQ3T4YJUgBMgV3wJXnoyXpmPH",
  "key14": "4QxGzFrb5fLp1zU32eqSXA2epARmk4h8najHvsnNpQgzTVFhGq5nwj6kNWKGyHjD8cLbSMwYyBHw39dSMzeNsAr1",
  "key15": "4G8Gu4fygNGQH8BVmZG6J45KSwwAnXfHDAhhN98sxt8wTbtVMuZPd6qHoLEB1HrngrEoozFpjZ3DdRp7LVZiMMmD",
  "key16": "2ZPBSAUaqJxoJTUbhXvj4Cz8V54yvhb2C5qLufEZ2eNU6wen4wLfj8dtYffjM1h1Ewy3ypEPanqhAtt1RbqYxGxR",
  "key17": "GQDG7BeXekdd9JNxAbPuVHzth1irPMXq4UqsCB61oznQQjjPNPuSvGmasJMssz19uAxn3yXhQGKSvjSe5QvJgM2",
  "key18": "2tUujHgWGgQXWAzoaAPyNHB6ngbJFECKYKCLBk6qzgrXTAkrmoBuzEEZjzuo1Z1Xb61VyckuMSrWqATyiLDRQAPC",
  "key19": "3BoSkLFJz68e7pj7XpVAKPfdJnqgJ1uM4tB4kkb6pCeeP9sAhr14ZVrQmt4ieHSa71fBvonh7c36hPBowpQvbppb",
  "key20": "5sPji7AxHyfTpn8edS5Lnhj1Ux9FW8caLATZ2gf5LNxHR2YA3h89rzTWZpWnrVEZvHdufNfALY7MdvcCK63WPeCM",
  "key21": "53YtQQ6AQsqAMsmaG6UdwAUqESRQJQrXDpbHJGfLJUvs4FRPfmxVKy2K7hR8iSn9Q9uhUDjH2S294WVa2RYjmdZe",
  "key22": "ogFGSwFYKTfXTpP2DkN2Jz7jaYjLt8q2fisu2XqmNrFXQCYZtnmjNBsfvxzDzi6sJNxf43H5USpAVFq3ZFAD2QS",
  "key23": "4TP3eVTw94eGgweHNDpaNiLYr3XBaG4EWgfKGpAa81K4jfRKEo8Vq3Amp3gzxEiJiyCZ8Gyv1dWnQizg7frgxmoT",
  "key24": "39tAxVxQYHX6aWH9cCpRxvh9bevhMiATFMbnQB1Z51kzv7jPDnP96vkKBxGirsZFyzAUvVzTr2zrNjZEJrFLnoBr",
  "key25": "22MwUdrS5JBnN7n49Fre1cNLixnDTSooDmL27puvftPyS5mbgs15x3uocJgyZ1YnmViXXdovFWALVxjvph8KRgpt",
  "key26": "3TphCSvfGHqiD6muSdQsH1fN8qWeySokWc3AKimZzJ6FoAUBjpdu7hSLszmHd9SY7iDkXbFKK1kngPZGF6fK4dhp",
  "key27": "5qDxWqTXQTcVNCCHyi88Z4mBnLJSLZUcH3mUKE7G9tc2hXoEfDxMXGER3rPVifXdav2kzZgvHkCxM3Wu3ACw2uki",
  "key28": "38eTLeSUjSMckAiJFW2iCM9E7dk5e9s6zYvfZm2zsjaRapZFJEYVjqnQmpWstXCUQa3PWorceW32y7oFQPQJCqiQ",
  "key29": "5AAAyEDz8zqsSh7GM6H14nar199XXnourzBUwye9Z9yDWHDJ7yKDrrfeWJQtQw43m4GW614H3s27mt17wbrqobqe"
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
