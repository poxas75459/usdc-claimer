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
    "4kEcD6poR7XHnnXufxEhKHhbHhcJVpjAeH9Rrodri1AXM7UXQihZAvoi9eZ3PoZC8pNRxP8nTKEzttoWWphzPbH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AmS2GHrKjDQrcSRbwPShVForrADtbowv7qAsY3pKvjP8jtvhdK49eBL3T6DH8bh4SQF6c6zNid9KnNDfxXydnZ9",
  "key1": "5ZfBx3huLz5rbepu4RgFGxoJcRz5NBgKDRpDs1ckCVdGSJUG7CWRqHftMyAt12UZjgqo54yUvtFijrpqgrB3jBra",
  "key2": "VKT8YpsppXe9BpGymAUZEc3g32J1h8qJJiMNw39CjxchmaPrzNKHfr4E1TkqDgQVVNb99tYKLwnqXLHZs13CeF6",
  "key3": "3N5JByf5Q7YoQVsTpgAmyeKYUTw3sn5DmAyDUEPXhN1SuVjetKQwKF8XWgX4it6YMrH5SFigoGMfgQFjdFMyxJop",
  "key4": "2KubWw6Bk4UUTQEfQFPxN5gCSMHH1aUkKkjb88fy2Tn8NDjXaEPE6tWoazmsFMgcp8EC3n3uwrqeogFxUv5YteEJ",
  "key5": "5r2fZkE3amEeNc4cNKJ3gZHj2v7aRJXpmchGMbjmJSToEJm7Dawd2aM6zBQGTQ1siCLf99DTg3PUoMJFfnaD25tk",
  "key6": "46DNRuzFTRsWHSHNW3v4WTRAkgQv6WLqdbYqRFAt1cJRtQhc5hn3Bb57PTUWntUzRCK7yidBnw6wkzMaqMyFSYfE",
  "key7": "55fbvJfQRWZWDk5Vh5zPTS7GDyqM9E5BuzBXomSrp59dGapAsfjyuQUeZZ2scnafMPe17szAQ6YQcUCYkmmBxzQS",
  "key8": "21vBbWCW3o4AnzjrxB5nnmPrmymhnLyCTgTMVEVY8g4bTXFvhDH7dwYUZ4htrNZZ2X8rGAY5Mw3RigqoFhUDky3o",
  "key9": "h6T2YAFLxv5jPoXgFX4vh65Rk5e8xVUnk2mqrZ7vCatneJzmneZQUCnwvEpfewo24rBTqiPDSodWxKh61Xs99nA",
  "key10": "44kUsZkPbD4JD5L3AhhuEw5VQYmStrkNKXsn4kYpTnbsaR9bSE3ASMEHgTYtm31hUKVZXXZHgXQVJ5bhvsjKDdiQ",
  "key11": "62Fh6xuyN4okLRSuhVFaQVTKFK1nUvZXqoCAupQ93RvLXjNLEhBwYWN9SNJkcKoUPzafUeRWJVm4Fq54oj33Znb",
  "key12": "wVFdXonnEaS474r9AveCvv6FjqVDeYST2nio2yjUkUxKj8YZh2Lq3Bw3vhd6NwGZe1e9RuV3W9dPxafu4t4sqf6",
  "key13": "3xVEB3etUKoxxrtPzgjYQHz2XedJXTi8EXG2PVySMpiRLEDxVssQqd9Kw3v5qiheqLwcAfBT2jw9L8bFzku3seq8",
  "key14": "2czARVWrt8gVP2uqw1hPRhSDLK4h6DV9mSQtQmv2ck2CVVpebX4wPWcR9UtHSZAHM7XyPhJRa3zC9VD3ti7KN6pW",
  "key15": "3kCEt2bnHi6rEE219SdEfuvMsEGahBT4sAcTvXFQsZX9mVVEuWUDD2WLpZ9e1EeXjYrZSSErgE7eAcax3MDuvXDT",
  "key16": "2k5dVK9T8D1JGuV9NRE6pkLNBf2CzZ4NttsTCbNxqMFW8WaauBDxFFACHMJoaKNkPY8T5omug7xXVvxp1cbNXqLu",
  "key17": "2wbdjRsNe3fgAegLaK88gHecrmfp7QwPcJbQrNL7EFFJg8Jzes6rEqDLvQp7yxpUzyKXeqsrihymEo6nCARZwv4y",
  "key18": "1xcY6DwJCGwMC1Wpu5359BQxyg6hzNebTMG9DNpiRU8cv8YuEp2ZzBgbaNKoCAoVX5gHJjHs4g8A3n7V3MBjeYS",
  "key19": "4t14o5QbZfDneERDoEK8LLwkSgtsHikiBq5us29Zbt45tHaNDsJHZowhVVtEf8pfUGKcyt2dqv1amo4L3hgE8rYa",
  "key20": "2neqfLtTUL3A9vWAs9PQhTt3ByKtJFDYr4XHYUT9qQeiTQinw7swVaJhAu3f8F7oWZHqGpQubBqBmK18oB172Ne9",
  "key21": "4AqiBkw1PkDEjFBJxEdiyGenNvCYHPKu5Ym4U15qsQQz8x5nABbkejkBFLNRfxhEJoPv6ARNRiiCCr4wmDNXKWF5",
  "key22": "5JRuHSUJ44STFpRwchgjeN6izPJoT5xFtKwTrFydLkFM7MoXA1LkhGEMWpBKzphDgzTREH3pASy6K3j8Nkeh7hmA",
  "key23": "52gf1Xi1gL1TJuEQaahWaJQGSmP3Qpj3uBn4PmKBZMAiszNPtb4iAW2ccdCQgPDh8ZGw2mryFK6fSMrq6SF96RA3",
  "key24": "u8Kj3JsCsTL4gA9E63EQGuyWrUPJz3pgpBRSuxgke1zczrSodwYS9SAUF4YnFrZzZ7A7TFreM4y2AuN7tcwso5Q",
  "key25": "3DDmDYEHr7jfHcNr9LZEyZZJL1RT3jRArcvRkXLfRF2MkziBqWyEpn9wR6iQPTmAcT2KpLeHdmpe37VVecVv5d4c",
  "key26": "5uYPEM6dE8qFK637b4EamP9iWrsnU1rwbBws4pPhqhWx29r6KeGYbrdT2dsuW3cqDic6JWJPYiERDcNvMEaZwdyT",
  "key27": "3XvZTSAjacW4zk467pfy5qrjjBFcybyHLpt4GWZoDGh9p7e2dJDhsDEzfHnpSJH3cvHFJd5xvpGc617TTUAPQ5wa",
  "key28": "4bw8B9KGcyG3b2aEXhWerA5Wzrrd3Wov52TeWzhZeqbcf3PiGyMjw1zSvxPXraRZSbWbMg2iURW3Uyh794M8eNx3",
  "key29": "w2MYiageSiQ7AempaY5LWnRyDZ3yq9AC9P8LktCU2H7w56dTa4uK8XPHttx2men2MaM6BxDeZG2KJGypoHh15Tr"
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
