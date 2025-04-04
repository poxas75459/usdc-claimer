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
    "484di8cppYUVH7R5XFWe4YUF2UgZB2eYXNVhN96tJubcLSQoEKEq3ZQNaSG5XBqzXmTnzDPpAbJ7sJJRmHaAwgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KMP1Vv6cYYouzYcABVLEq3NJcAnf4RkKYnfgrRSwETJaSMQkshbNeauiwcmQYWYKobuQLY4SfGgNmpU1uuYxoXA",
  "key1": "eBwmNuTUhMMrDNKHGwxMxun8ZPTaC5fLbADeFzoL4rK754kcaA281wV5eDU3C1KKjg2Q1Zyu6GTyr2ki5RqE1SY",
  "key2": "4u4DsDBS3Sxc3ME5XQQtD1wvLZqBhH1QaeATpKyb9JgQap93hTUBAtzV4J5XPKGUJADutxY6YCT2McthTUzuXRHG",
  "key3": "GWjkWjBhU5Tr6WV4GDyhsB8XWhPuFk1G4fiCrCzAmyARpWBQ2zZFqFU9fTDxhw2jVTNnKoB1YRrzdKfezKvhQCz",
  "key4": "2MXYv4NBdgA3tUHn4mBr1W9nh78oRbqthrhXhF4Un6wPhiTgSDzA3mPB6pGvUv3hW6EUQyN4y18X5TE6qNsZUSvU",
  "key5": "4Rgqc9ryJ4mo2rZHzFMyJ7ctvK1mpf5dDrL7rYYX5owJW4QqgFGxMVnWvY9kGrih8CzDtufsX6QvaXX2iXAmNZLV",
  "key6": "5JqWfyY7VuMuHEBLrmEavUo3q7p7VnpJEBScxFJh4Qsz4uhgbNtDqKnWHzJsPitAsF9bt7fst5eiN4um2oJt8urX",
  "key7": "3X2NqAynBQPc1fbB3DyiUSwgyaid1QeR4NYwcNq7droKFL7vRyXTcQb51hcD1fRoA2wjeZZuYJLdWHxxbQKiNV5S",
  "key8": "3yKpD16H5GaTqGX7XajVuHHpkYVcgaG6xbP94b2tbLxzeLK7zT7XvEmWQNzmAbgQ2P7Ur1qCQH2LdVBoG91MEFD6",
  "key9": "2abiwXYbwtt4qhYVGtCAHmEXeDN2Rt2iwwVtLunk3FpCVxZbwLmyZhHQ6nhu54Exq9xsW3aRBKP1Fb6ut6DzfNLK",
  "key10": "3n8F7jiaUXpXCnEH8ZokgyskPxfxCSbxoxZiqyN5YLTQ6thZmFkzT6F8x6w8wWSZsCswv4d2DZYDJkoTqn9bHKYu",
  "key11": "3tnwsr2qDDNWVXcSxbA5FedgscbDmVWq4wXhGVHXeb39PE5zpfWWguzhJHjPihw25by2784gCnAUBJdprRhEkwCP",
  "key12": "EpqR2DywuCrSDa5fcdb3it3hXgwqs7HTD4ocY2Kc5oGXLkwCydGoBDuSbMY8AtP1zxqBn6EoRmtp3PK7DZJL1sG",
  "key13": "3KmrF9yCf3dKAKbMhyRonYMbiQxjyufASQnqBzMYhrsJDLGPAgvWZvJfNyWfhN9hsJqdaj35wDZuNk1e2eueGfsr",
  "key14": "3gU1YxkcqEYUXy4Kt7TP3qVc1KV7oijFM2J6yniBeaRnmFRSZfpnqzXMoabsDq9PTmQWAWJFSArVcxN2MuNF8qhc",
  "key15": "3CaAkvEdqnBqdQpGtZWkrZ53uPspPZQEE8gBsFcWRn3Zb2J8t6Bw6yGykMx4YEwvaWRYv7aAZd4tTdnfpEzvsun5",
  "key16": "2wm9PG6AqcdNKgfZfbtPoMij136yFrB9hysncDSYRQ5XTc5LT4J2boZV9eG4XxirDeHkRZRCSkXjFenRdQpxqS6L",
  "key17": "3aJBtm3dJTUWu8uJn61osmVgkPGnEEPfKmAoSZf6qfLZPs49UuJz9PpeL2H8iiihtXYy2qWjvaMUecUe41YTS1Jp",
  "key18": "67HtVU3DS5pZJH9gYJUN6mN6FUnWfBDiEFFZPKChc7fW7AXpGxZ9qqCua3UQEAoMEZRVTCG9bPYhNz4vNZoMwgC7",
  "key19": "2TE76zxHCFQgXN9ArYBBvrPfZrk2xPHQyonMPPE1bgyNYnubYUBSKFtru9qmSQv7Nms3w5udNVpk9g4bWhVsa3Rx",
  "key20": "2A4cDcKD2ojSTFUEevjzvZzxLk5aBTH4FH6exDN4TQWT1sZzev9kfZpKPJ2ghcXL8rCbPYcskxPanVnsHdArgkC9",
  "key21": "4dTVmAsJ5ruvw4BbP5ZJ79J1w5bc6ezyPXagyKbEt1mHjDpGhtrWzPVPaQ6LjDjnhGWn97FudzoQQ2cZTgSZ7Qi8",
  "key22": "2GAP4vp1yKRboo29pnz1oJT4oHL6Cb9jUCjJt8zMoQN9RUWaoR84indukvmM9khZEjsL7ZTp1pfaXBBDbF2kSi7j",
  "key23": "4NzvNXcry6537ZR7BNsVY7kkHdoiYbx3V7u8yixyqkMRgMf2vYytWR2dY7q5MfPw7unDRp8j72vkPTHh9cyELy55",
  "key24": "3Tkd6fQXTFdXbG2gzBiN9PWLiRweoS83eejTU1CQvSpgaqnH76PdyaZLAGUcVsBqPadMBFQXbWXirRU5LWwrRpi2",
  "key25": "3fb2GgG7SUDFYszFXjtkf72rzoznZ1YysGcQB5cDTX1mpshWJtC6mRVam5BSFBdvqtHSZuYzpHhDNzTmupeDiuCL",
  "key26": "2MCbWZMekvb3pP7WjW5xMaCEQfgS9svEqXMwoHzXpg4pDbHemTopC3t32yn318N7DvJmyLnRFegu9qEDG3Rn6rqK",
  "key27": "2VcspBeDKtfmiXeLc7sVLNkjmje3SXpkbQ23no6nxnbeLNprUYPAL2qk3h8WAP3xWJSz9YJgU9JAoGWEY4fWYsB4",
  "key28": "4bCMVr53j1M8ReTdWPbL3Jdh95dwZH3Cco3mqemytNbmvSnN2uEeM8jwc969BGMKEtQzgAMZ55SKzyoADFQnycJR",
  "key29": "3xBpKCgFnJc1U6z7TFtLuyBxugLVDfjtVY7kd6zNeSet9D66BaqEu7DrM1UbWYeBiE8jweJxsE6mnd7HtWtjM2aL",
  "key30": "3xJyE9Ri3hDVUDzWtKPWuMhHfKa3mXQmEcjK1NCxZnyapXwUURuAhqkfqCbbxrCUnEoDLXW6JQewNuoAjo3qJENc",
  "key31": "2CkE6HZPX98youhd1CmhkFi8j8XLg9cCbti5X6Gbr2JjFrPEx2sxLr9t3RsY31x4TkSdvorfR5g6MBLR24tatQ9R",
  "key32": "jVutMpR5QBbLdBv42LbaNjwb6nQNxHPW2h5FdB9nhDR4w8RV82FVxdy8EyRTAj3N6VouSzfsRmzFFTcxRgJ3dHK",
  "key33": "3TjmBbUGQKCR8bHXJpMmcT9LxXaaT1kYBA5kezeMTv95PiE2bsRbFErNPdg3iSc68oTK3DU82RKQu5uszDjJgUEj",
  "key34": "4NsvYmkupAY4NTaGPU27UCHhMMwSLFjBN4Y148hi68NLCGhihYr6XZ5GG4LLZhNvdV8YqGnoCKxKuAev5XRDUFno",
  "key35": "C8L8jrxM97Q7oRbcuRsj2u6GKYrPzfxMe58VwH1R8cUvy1JRCoRM86wZZSrEh61fsF59uvyqUPyWTeA61shid18",
  "key36": "2qYVjADEHFk6gs9SaPVvSdg9r1RdnVZVfuawbz4g7oZU2DhSYXmjRCJ1NdLF2YipX3RBA6soQDLwqQmCzbWuB4Ao",
  "key37": "4wsBn83QgkvVnFqY1K7smfBPvMCn4PzXUwQGWVMN8DyQ9oN6PJ1igqPCDDFtNQJKvtMd3SDLktQBD9x1NKRz7VX4",
  "key38": "5ftFELrwyZgpNc24vQJKzNargG8mkX2CnXEYaM4aa5bg7NYvtt5W3CM818ujSSPUsT2vV4NifkqdZY4NtLTze5Dt",
  "key39": "4wzNPayefQFdPYPBYUd81Dc74KYFs39NKLKhy8LkmREj6wo9E7WXicc21jabaryv6LLZS2exJtH7yBFNbeurn7Vz",
  "key40": "2BQxYNSWYxBAc6ssZ1DPMunJyW7Hk8dk6gLtGfEHXJ9Sjcmaik5NZ3nhicXB77iB9TuCn1yX6MeJCZUkgXHwEQVP",
  "key41": "5EQ8CzFKTnrL8N4xVTiUMauicVErcxJKa8B5bACZnAAGusGXF7JjfebF2bZjMzHVwYi9UeXbjCmBmf7ZMLqNEvXD",
  "key42": "4MM1Hb8RgTkiFevzvP31DCgEbUJbsGw3p94iThjTdUTawLq7uQBz6wPi4nZqGrXukJcRNTfa6t9LHX1W5pjcTXhy",
  "key43": "57fmhq2X3t5MxVFBJ6wHis8ng8rPEXEq6CuegfdetEXtNUQFR47xcyVMUnBjJSvvoMx1iKRiUpnY1EMus75j4DsE"
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
