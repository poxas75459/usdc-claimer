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
    "2SDyqTDdL18RdEgA4wxJdpqdwtyYru5Dugf5fHBrHYCXkC8Nh6DE1QaXRM84jppj8f9Wa5WNcSDNnW1rrhP486Py"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YU2U4rpMgY7Y8pW5sAe65V37GPs5ayonTYmV6k8ckh7rFUdHkPuNzgDp1pKPeb8zLBxW61qZUDxcE8LmNHvfRrF",
  "key1": "4JaHVzeKSX8SuWifmSS6gJ3RXtmYNiwKGHkAgVBp53VY48jFczFdq3Ks49mQcrFvpCYtJfeCyZCcjP8J7TLjLbsz",
  "key2": "4EeYWSA3TbPifHy7pKh6DFk53fiijdKK2gWtWSvuwGZTaBkB4NA9WXy5c8fay6pADFvzEf2iR33RNJ6MPoYSPzLF",
  "key3": "45cYANFzr6GZD4wqiTfHFjG4jh5yk4Aa6L2NdMKF3D4BAirbTjqhRpvEatUDpMQUnwBSNcdjMfzpPNqCUCE1XpWF",
  "key4": "RbGQsKtWN3zzPPETqKq8CuM2ojv98mwPMGyUHXJMKxvRTQfBu7xq8NdMp68fGdJK4rAFpDH3Jf7vRukfE1uKY32",
  "key5": "5Lx3XcDeqG3G3E4JFn85fbMCvg8MAN5ZKSERYeWtTVyerDs1Q5Pv4AFZQ5wx2v5kRv9BwsL4ZyZWBmcxRp4CdvJv",
  "key6": "5Tx3oBizKqWX7sEZZ7XyCwbpQzSxtyYWqt8j5UhzQHMUFai4X6JgHXnJrjomGYB6wiTawpUyGAS95nCFrQh3qwqJ",
  "key7": "4bHib5yvJR88AR7ZmAq2NXrRctgNccwndge9YPbnPhAiN1P6w7kPg8JzycrL3EYnyFvFWmxciADhbx1mqpZ8uXUj",
  "key8": "2X2q9fxLLm4CpZmMYt8vatyByJaVrA6VhHAJJJtqSkgx5pNn8xc7q1PpfdFMsXRAwpRuoLNS6McFf6T6RuSF6QYF",
  "key9": "3iYzzaKShJbCfSnR2Fo2UfZ8cJrgG7iGfGwGV7vDYxBv31zepQEr4sh6oVxdX1tDjUhuQyVBSD949LUTok3a5Xko",
  "key10": "rKFcev2VpAA2pxFntaMnoymE8BuH62ZqT5PTjKJVp3eLisF6Z1QCjZrttVioN7Ww4NtE3P142ZeajU1aJa2uriK",
  "key11": "5pWZYs2DJxmQGuTMeyNZS2P7fJ2uotVr32cu7sSP7jhr4Y1F4Fa1wPS2D6oFAKfC7DvW93yYRVsSSMFjJFLNnkhh",
  "key12": "3mVLDj45vVSpRTexLaFiSziKxYF8XFPqNV8naCWENRGkFpH8sJs3qiSzzDbKC8A7wnRsKHe6rTenDDGdpaCQ3ie5",
  "key13": "5mjw18LEyJAzKCJwHCyZFsGnBhTYEYUgeMa78mxjXpQPQHYYhjZbw1dDxuBi6WJJ6rbwz6QkXLkxtqihSCGPJUZi",
  "key14": "5wvNyZeeViFD3gaRnU8ciu4qgPi7Da4HbzZ2spktgnQxmu8Spzm9PfzQu9C1xCQxLw97pLUorQGmTimiUraLzKxZ",
  "key15": "5xK98mGnV4JDzfu2yi1js4P2hxwirvEGhgV4hKpmhCu8smjv5p5BK4a7ESwTSBE6KbpWL367osKwEDFunQnqVetx",
  "key16": "4u2tnKqUCsCnyctDv96zgesrisesijHwRP6fgvZuh1KA7b31h14HL9XNjr47fghZD5L8zemH1wCeqHjm2hoarQKH",
  "key17": "3h8wizPv3Ejgna3oi4Xt9HSgtkj4UYRubXBZ5bC2xNrRUy4ikJpt14nreH35kxVA4ZCMC3VpcDEBYsfVBmJEBAhn",
  "key18": "4Vok2jyC5Hxb4KKrDsq6C7QS6JDLe9DkQphtQADTaK2JC6LgH3R9SuNV1gErLq8VMMva6jQ1qXV5c9XNcLeXWpKg",
  "key19": "TosUULYe3iimtczbi2ey4RaqfgnuU58M4wSzyngKzE62Ar4rX2HhFLgYbNL2fmjZRQU3iyZn7fSJ4HMUr5YcxmX",
  "key20": "4m6AFUreSPoZD3yG9tMBm4zREYXkopq3V4guvrNYe45FFnk7JiNkLzPicevQcsvaq8xi6WKMzrcXtSBsi9Y1uEic",
  "key21": "38kpfEiuAoH54uvQeoLK2JLCyCjRxWuZ3kg9s1beHHXxS2qLhZyUhykDHdhbQUWMHPcM4ZWVoW4AsF3wTXKEZy6",
  "key22": "3PorjTdCePVEd1UV6XVG3PviMtnM6n8e7jfKLguwwLPKmn8iXLmkZbh4UQEwRS9mpEeYXU32JFzTKuzYHeBh8Smu",
  "key23": "KABV3An8V2cSHWKpTot2CJ7eQvRn5dxuUCYYgLcufEpdu1tshXAU8RQei31Dh5hetHPsy5iRhGdMD7fawZVJ5Lj",
  "key24": "aTKJNm5z5zjkLUnVzey8MLmFXANWsKQHEQfNYmWn7zpz6DwLPvCiN9BUKFRRUKP14pFDzpBiWpCxiXMA2fCyCTu",
  "key25": "NM116gF7Qpb16XuMLjpmLtsMCjpxsSon2x1iDKTBR62DWGVsWAFmZJ5iS7nSGxfHcfXrHiLVEEx2WCkSC7kkkBC",
  "key26": "2PcZAaUk1xtGr2YwZXu1mkp2Ah6KyUn6gkAtzRTVg8eo9pSTodgMxx58niobeTeQynVN4uin8gEzNeRbC9bW9GM",
  "key27": "EN1jvzBQjUKMeEYeXDCsbN6aKqRe7P5uu9PqGDzTV1GdBxrY1bC4f6HHJ451xCkXE6jTNoVN461GucGJPLtkgUh",
  "key28": "21iQPWmWxvFC1YQ7WfbfKqNuZBCnPUyXSrS5MLVqSkfosUSN8i3F5qZN9LyuZGiF11va46i74wxMtQ6cQKDetHxv"
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
