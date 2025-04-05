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
    "2EcqPZ4XdNQ7rF1WgWyaMZJ2UL2RvYixbBbjw73wxW7PAG3G6mFrW943s1sAwQX76dTRCTPcBC7ThHLEKzem8oHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qxut1qDKBLywmHDkJfh5TGa3595v9LWc4r6G6Kdt48UJuBGz9KwVTa3Qrs9GqAGBcGLu9icKzda367YGpxPii2j",
  "key1": "3Q6MisR3us5LvWAfM2bQupSHmtKd5ASfAvzh1BazHJ9bvThApcTUWW7uQuUKHF2j3rTh3paoddVv5wRyp2ChsHpe",
  "key2": "zMih5CTazSDuapCCK6TCZDpeGuGa27LSV2SyVJU7ppM3zmrgj8pMoZqe4i1rXy6ndDEzzQJYEiUNKK6BEa852gZ",
  "key3": "2PrDsNKh8LKUCL11d9dE3Y5d8kLbEUJbKQyu5vCKcmHAdraoifwfjQFgzLL4W3sr3dmrU32Ldtq6Yp9tu45FF7pe",
  "key4": "25j8FfvaWSQYtcgfCzg4aTRBMD26ZHe2hYhpcSkhQCkJHuY846Xt4uqmih5XPwLKjexLnjtqPbM6VcrvFjzr5LTx",
  "key5": "41UNMNTW3XHT8uGAVpyQh1upwg7aP5SVxbNA33Gsomxynp3gnLpKBcE6xGYhzwUq7hqLarmK5qEWqHMT8TKV7P6s",
  "key6": "44in9QjCoMaSKyXyQ2qMTjFpkEfzjA7GhDsLooRFzgZFrBHPDxojjNuYGFiyDjoTvaJ6uTUoQziK55kcQcpEvnjg",
  "key7": "e69trikWzjWHmvPMxFVEfHSEkFWab6xWFE4mC156zfJYyH38Ka2x1KxMCjofkkgzffoTfzseKLyJkqQgxRMfdYi",
  "key8": "4Cfb8ss2s2nuxAPDVyKpxniwbSfZegxwAogxGDxBh4KZ9k7NcinZmv9oT4JUy69n61rjWZgbhHm1LkxuZEf8CFdS",
  "key9": "3FwK7k9RzzLNGcLRU8d2C8dv7hYnz8b76FCuDkcDs7U3YpEmbGX2cA2NQzoTogy1S3o8wNnup9RgBXn17ZEtGnk6",
  "key10": "3Gtks6b3x3epHpt1qGYzWyHZBWRVVgrwzRT9SqUzumwn1yiiFNL6fFvVgDPAMEY1xN4TXbJi3XDZqHzNVHxwSzfv",
  "key11": "3dZutvJDT4DLjabWaG8VKr5Wr9LPXfVLbj4zAqnGirHBiAQHdQnQT6gUXueJLdNKAj13FRWyaPxEx7jUMjawYjfg",
  "key12": "5iCxnkQeq5mCPaVgDPEM6dkdUzE17hhTk252e9pHgtYYPjmjTDRrtcyWzxr1CfmHzAc77DtFcLyBdVERm2C8gtDh",
  "key13": "4sjfPuxBuyM41QewcKG9A5EVuRXJwroJ8GqenoEKBvYcKeqgwUh3KZ2n7jNa6t9i8ccD1mPXBaqizA8RQJMBP1C5",
  "key14": "39QKwsDsV94TjC2SJUXMX6QcWt1TjhidT3DwjBt1oRmFHWYWccvjBKZmMG68AM45ozkrW7zSSW6YKwoqWSETUwtw",
  "key15": "571QgGwBRyAjYWGNV3by8bavXihKv2dSWdG7tUScS6wHRDPaaz5JJZxgvtUHkgAf35LT424tzJxKonk5eJANQFNG",
  "key16": "4MNniFhaGEuiTkMBy8VtYBLXUf3RfRkt1jY3XtdcEkeUvRvbKS2CbwYhk1tAJ6bgRupT4d94Fc5ZMk5ACNrGZZ7B",
  "key17": "2RiVnLh9wtU2jM8k58FQPADvdnGn5fvsWgCZt4E4p1QuDNFRrnyT9WpVrimRTVzJpafsJmLCtcegDa1D9skrNR6F",
  "key18": "4iBg7PPRVHHWR2WZaZQPd76VsP4yKJq5HoPTjchZEtrkBdDK24xmp7G2EP6bxe4eUhKRXsDsekhLB3dsHhLCDe1D",
  "key19": "5ti55SpNVF6B2hXJhodbtvd2XTfQQBMok1CrisQYzZ2nMSyAK1Fb68QahwXrYeyW1gwTPg2aM5ujNEuswGud2gPE",
  "key20": "aX1fC9zwv356zwAxmPomr6o9hf2MaHc5HYNHn2kYGBKGPY9Fvx9RmA5hpVmt1sKG6yLnVuVLm5Rpe44wgyZgFjZ",
  "key21": "3it1fXwhpWmeLKAsFPa1rnr3itKNQEx5Y3MK7AkUFeRdgm8oMtE6QAiwtw7HGvJvXJySXLYakARV6fzdgVKgnWb2",
  "key22": "hdVbPBczK5Dy14g3pyn6YZHwiwkmp47apfpxfAAQQHYEZwBfkBVTcLJpjJddZcQ1ieSHc71JfrDXJ8pLMEEoiQg",
  "key23": "eyKdKkoqWEwQBnFWEEc8vSar2DeRsCo7B3i6VQzhkgPHBMhwg638gXsKQPVRPEqoRkEQXvzQaxr43egvKoRFiJy",
  "key24": "4s8oMnNj1wBdAMABLmNyVegiF592HWeDXSueNjMgZPCZmNnk4GdRnvcWDAUuw3rEP86RcKz19ykk9AHAQbU8wkNa",
  "key25": "2SGqRNRadrmT3mB45dSsGsvpEYN2zWLcZ4c8gMjKH3JRQp46tJBUynGEKKNGUK5AZ2hp54Bghh1Lr8f4fNxLfLU3",
  "key26": "3MDFNKWenn4zQZAiUcm91z8TSLGo16WERQt5eqN1E8tQsV5mSb89ykpPsSKtp4K1cLVRbCSfysg6ieYfieKNqq71",
  "key27": "5Ht1Ey1ZwALd2W8hBgUhMo55yogMs9qQ3mpNHyVygtzk7QrERUDRuBffSbbcUZcVqTufW7Da2Z9hZuCJpXHiGoxe",
  "key28": "3psFVqUZc56EZ7PwFst5MrFpSJ5PEvRKznNqPQZZQWUT49ATyVNjCWKYwiya3uBDSwQJLJhRDXGpnYWJ3uuJic7n",
  "key29": "4M9ZMqxRBCZwehwzMLoNFE18UDcXhsgKvy8ZGR5RqRVLrmhezEd7AsgZBDz5aVdyBREAfmXEqRbHV5SGD8hYWGa7",
  "key30": "5oP5WQysAvLNUTKNaJCYwE3U5AqA3ZG5iZLfqF3v3vi9jAwMQ7QF4u2Zt33x6HXmrKxNCFAB3uvjk67NfLkqQgDd",
  "key31": "4QLVFD2rEBz3Wts9xxozgr6ANngFBcE8nMKqq2qVWoVWRkRtR3CPm28Q8xFDo4Z2DAosuAfJqfc5Wdv5UbnxYfEb"
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
