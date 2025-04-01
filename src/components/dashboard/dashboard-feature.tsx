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
    "3m8YHNPo7BMWqprznSWjhJhCrrDEgxAZkbE48FpDvQ8AMmdX1T3YnhTkTcYiqjoETH4hxL3mqPximnwfq7we6QCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DDYy2C33cRTjvNW6oCswQQpq4RvAedMWZP8MgfeRxbuu6BqGkNTPZHTYUmbk2p9aDrS3DnbGBM4hmsojvcg5RmK",
  "key1": "3zyySnMZTX38aGC1cBVSFKSF5iTXrGhEEvoKV6xud2sx8ugfXY6VnQ2e5veDYc4KmuZ6RyvW4S4HRwQAgxme2yVw",
  "key2": "eV4TSoRMF4PGN25Fa4rRTq2VWksh6b7eWArNMubJVXQmWKv4E2i6ZmHwtZ8qmcoNQXTyiN3oBYck3SQ85mTTXMy",
  "key3": "2BL69mYuwNb7xkGWMMkXMVBzeVEcorBiFXJJunm9X2xgkHMwqc4BNKAHiMTC2sWCC4q8pR2bY6vmPoeoyFYQyQAT",
  "key4": "28U1TFzctESG5fdi9ejoL1HggJDmpCmBKQbW2Vm8VcQM1nhyTosK4WRvEWqXHR5fDqL5iEn9PyNuqFWwtnDNg9HG",
  "key5": "3T9yjbTRhk1cakZaWLkiwPrJtQWZxif3sRxH2snvUtRb9q4HtpcVeMKyudNGLYcs5Yto5EHHbcUt1KjU7m5RjhQW",
  "key6": "3q1ERa26qi1RFJsMitukkSB5R8jCLTM47Gwu1y64qUQ2H5Sv9ZNkaUPqwhzp6oK6TpG3i7sSXBJk7EFteNgEKbJj",
  "key7": "2EuC9fZgo9NinLPW8FUWzLyehRXy31ktDat9uC6ov4eVRWLMM7PESL8ram65szFx7HGn6A9ARRKuQnNqX7GcxAdH",
  "key8": "3vQzbjSKuY4raNU3C6eGFY6ApfajvLdSnbTMFxhsJWZb5T8fT5P1Xi9g9tsAvTA5H5QQxSEPHu4WhqASqXWpqKr5",
  "key9": "3rqtrbJAkGgWNehKQXUW6VvTksZ3EHHFPY7LWf2vwxmGBYhSAjvBv8Uq3sGVcB63WQrqUFfWX1mFkAV42MtoyFNZ",
  "key10": "5SmPWoJyQ7KpDZYJVkPAbkfU87yd22GWtwXwmpraQm5bNZw9mbQHH4moYng9q4vQGjV7bhxXaKujNDHUhZAv6fqx",
  "key11": "55Dj4GDfk9vJzUZSB39MkuwpLym9FWsiVrEcWGgUeEvnqzEZjaiikDXL874Z8c8fD4WbrzBw7X1WAfNek3jf7VtL",
  "key12": "4hMmCF6xmrB6jwdVFgprN354Az6UMix72AojpqdRHzDEXXtd8nszxn6H97H1xzuGccgvg9kXsD5Ly3s9xmAVUWJ8",
  "key13": "57GSVMguwJwhRr3x42meTdxrmrobjFTvtbnjKLRP788LajQ7Q9CSNTzNvyMBDktgxYrCxsFXPEPoWn3wyzm67vWF",
  "key14": "4XU5Y2d8hYa3sT7rz9CKLX6JVUpboM6SDWfMWDCMRHnebimjAqrbKufwcy7rt41uyWKwnqfZfZMT972CZ8ENpinL",
  "key15": "sFzxC6i4gxDgGkYH6uy5PacB8ofQZrB4ZgaTnbwbpwBnf98Mi2q4HXsTMxAV2mMyLDLBswTw8FWduunrcPhdYme",
  "key16": "5pcJ1gZNSRP7VSVk7jqHCA5um3LbZgkoCSkxB3DXbzb27iHNSmaiM9KbDCHZ96GgCo2zgWRLGNzL9V96KZopJtSr",
  "key17": "3BsSDqhg3CCFfUMBFxqxkdXRMfnynfcuswxwzBtKu3qz6jMWfLeLRmuRsj8Us7YDzCVHozc4Jjk13exMw4JMRpnp",
  "key18": "2aXK5uH1Di8YvrPTDfj6mJ16wsApWwGtbt8YyHJnp9d48pMPMtpKByWHBhRDqxNprKxtxweEdfzTKN3vr5HwHsJZ",
  "key19": "5h7jXhn5NQztPq7UpLuPpZFyGR2dpvLuAbTJSyYxXdHcQ4XbuSRpVHXyK54S2RzWZFRJSvNz3eFh49qqyvkgyNuA",
  "key20": "3XCvv8YXSmtb4zDtY5XCW79AFbmFHwvzeom31UQPndp3hEWf4g8eETZdH6XiUi5FZCoD1GRA1MCaKQ1msWfC7vwA",
  "key21": "4wXu1urEVwvqisVhfWRBkgfDnoVEiUxGnyYGG5HPyWqD2co1AkRiDH2uftTp1AUHWJLoEWPLEt9YX1EgvewMgDym",
  "key22": "2DLdvbqTNqT7mYgTK9Geo6vCHR2NRngxn6TSYpD59qjXtwXF2btUsj77zh7Dd2DXoxov6xskbpc1L8psL9AKewXE",
  "key23": "ZCHoHR8B7CPVwMRkTNccPU2bi2g1bT4VmkuvFWaFotM2wNWzSTJYw24fftxkHVadVnAtSzmQXWZdoydtU6cZoVL",
  "key24": "5Pks8ZN5X73iLBAERh5YFG7WQ9wtNE4Gb6eHvn7aQFKZJfpXWrkoPWEhwkbhiaCQJrKuwKNT85avnuqyngfXaZ9X",
  "key25": "5m9jWDuk7zA3XM2DyZyBHRVqPxXJX49sSavFJpouqt12VLuVZVipipKy83vSj2y8RAxvqeq5hKVcVcL3XuewR39u",
  "key26": "3GAS3ScZbs1sEFxk3YbaVdHYmZtDFnsd5Sj5Dm9swuaQTqkgZVgKBjVwSzDuabFjQ5ozLpBX7jf2NLSRw9LCJRr",
  "key27": "4gL1nJzyrwfQwRK8w4bZJTLsGks5DPoShpVTTU5NGkbUFD6Sm671jxj9z2f8X7wtvKKp9Fd75cjRZkvfYYACKQu1",
  "key28": "4tZFiqoCeEDhtnpdW8WdG9HnkNHrgv6y8vbF7hnmdiJTjnoxYDaiTTwFkoxF4GYHrDNU2FTA4uR9LiBx1FmfYFDE",
  "key29": "9i3Z6MPbeQDUZ5ea5dtKAaB4dGDmRhVyHsgoS1ZiE5j4vMboLhUn8qct8NEAc17htThAHQMSWVGr1FxJ7DKG8WA",
  "key30": "59WS2LmHkL3gc4sNBMGnB9MMnUJ79yHGA3fDriqgEMfUiZBjRZfJfrYBYXnjcEd1wqU5oqCf1zqhpdDawASdBzZo",
  "key31": "4pbU1JH9NUwsRWVf9mnMpue7Pvk7Lsk7c4weLXDcATpx5BeJQv5cuUJmAAbtCfa6DkyiG46kLtSDKpPa5khpQZZj",
  "key32": "27BvHoAiaftmfhrnZZNn2gQco7zR4Zb3zLdZHQPvfxoDgSqkXVsBMgxAYMpSQtMmBaUv1wUvnfh1Gm63DxK8FoKH",
  "key33": "3eyJqgd6CtmJpewJEFWPooDxM8EcKcxQbW3doXfz3WT5DxVqgkdmcrmmmebMz95DKoYq2KXrpv15LTQP1YZWmNQU",
  "key34": "3k2ZKKkRQYAZBXm1wwDPNZnuSdkKCTunpgiBSBrT6awZLdpkQxHH4NRXddbCJ1hYWitpSaC5QRi1Fw2QwwAhSkFK",
  "key35": "4UQELE4sJPuKdnwdcm3qNc3B4bBmmFhVN13QwefEDAd7MCCRrVZPmv2GqGY3zuyRvF1Vnm96esMEN7MpyACAz1PD",
  "key36": "2EKMePmQVPauqduGHybmiFRUvQp7hngXNVGhAFSZvkx3xTYtAD3kN4xGoxV2uyxYKudtXCsrVJp897hQm1UUPiaB",
  "key37": "2NJ76jCx7GqQFLazXJwoEBqmqSDMDK27mHC2UsMSg29BQ2j9ha8Fp3BAiW6w8KM9ZmbT6Pfn4bQ3gqiAXzNuguA9"
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
