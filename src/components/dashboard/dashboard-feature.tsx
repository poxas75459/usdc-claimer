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
    "aprqiFxnGta843RU2vTFTjEmaUVkRbLD5Kxeh1q9U9S9aCgY6nrNavTDbEVwgG5qvADZCEbTp5C6TsMcnr1BCen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KyBRaaeGcUekQrWyoXRv9BU6Np7DHuTeyPupQcsK9FicToc7TSbWpTjXG449gGZzeB9nyn38awt1M7bGXzktMqw",
  "key1": "2WSS1HyqVs5Eo7iDD8e2ibi5JH6YyFTDmtiWFUbg32owWE5hm5QZy86DXXL49UWdC7rrFLzFc3LsMrFzcAY1DAHp",
  "key2": "26q7WfdWcyUZFhkAfaCrgtAS8oZbz41QBk5KhqgjsyHHFqbs8pWiY1cNnaib1Ujct5DWL2axeAEeFk6LxPFqPijA",
  "key3": "3HUvmxCE91zt33ta8bfnCdquPxbEs6NeKT5i7BRu5NZ7C9itb1T9nnX5QperdtDdb8bSLzv4KcXyqPYFbVq5FNC1",
  "key4": "24XMi7kWUwE6BaXkwzSAi4guKe5iPA3xJnJoQPtBZAto91h5nuorJxLJdBPqEeHF91BbwVtFRqFzhZgn1jpW2FoM",
  "key5": "3NAL62UnkNbTTWSyJukb3AhtfNWfNDAxb5NEY9pSYsT1nNpbxKqVWc2ywSJXETiC93cT9uYDHQTHC4YRtsCLyJf7",
  "key6": "4i81k1GV1seL7zoxQ9LsyAXCYcJ4wzSasgcCHupPdmaF1r6iPmSRATc3EiAM3ygsM7MB83JHGAhwyFbVGVwrx7mu",
  "key7": "2sxCvjHQrsbFQGivG9e9FcNoV1vXAWWU8TY4KFbZyLsXAyw7QP6nbGeKMkDVrMvjP8c7iGoBAXD7UBXFrHTJzmRu",
  "key8": "3Nh1BNTwEvSYJVvUpPStgdHrw6k5fiqCUXrvXE6mYX7f5ogcgojiaBA1tvAodGJ5BDXTAwLbhBWgh6dM33PSbz6p",
  "key9": "2Rd73ijzRZFevaRLS16UmCbAiYUM1gS6h3p4oCJ41GgkV75M4hAuNxNztWYajLfaGiD54CgPynVZAC1y1KbAsXHH",
  "key10": "5oJWkwwrvKp2FKcPwK4FtjHW4Ybu7B9ik4vtvFC3SeoNpQRQV8svwTvQm2P8joX1AS4PFDHK31SPAWeCkZ7PmA2u",
  "key11": "2ddhvvtVgJxvHHjsj2ggSa1k8Xg4WFCX3uk4j5uqSrPveUXfLQwVnUHzGh1fYQU4UGKDgxPtiyVrRCiSMwkEF7nb",
  "key12": "4kFP3hFgWYvkz46bKbNGDCgbXsDKh7qPjqLow5G1yND1r5xL1VAYJaJpv66FWiZWKZuK1YM7QYRErABdWJ8wnXNd",
  "key13": "39YvhNVLG7W8ymZAGuJ5h5WWDXy8kHY14HWYR7KQD8KUuFtpXoEqhK7MafseJeDqaHai9Mhj5veU2YjGn5wJmQJa",
  "key14": "sP6qeSz3osf2Dqx78CmwkzdeLn2RMMY44ozTJYyCYZeLBxMJ2GYmvCKVteBev5ZWY9fi3wUvnYQb4sELWPvqKwN",
  "key15": "58y9KnKqwsRrxDnGi5UbCRTrQnYorqzKbvsM8pgEpbMNLXXDtkYEz5sNtMuMWoUTxgHVWM2R7sKDmyNSTrG8orgV",
  "key16": "3EQS1DViwS7ys2V73iFXERrj6RGAghjq4NbrkbCUfMcYvm3F7piPjt1rz9UzhBzgDAqqGJZykeo3PxJW3X61QZEq",
  "key17": "2En6uaB7Rpf5PBQwF36bHrXZNNaGt5Q6iW7NZDy68eNnN1yDALuWsQh2pV6ghyDcCKgxFLnf9S95dhZJRqqVS79g",
  "key18": "ZiH3xGMDw5owiXi3nMNXDZBLHYe8PNoqRuYj86uB9MoqRqVwmNgXNKpJ3c2nWn9kPn3z43KcQNrwb9obT5J4z7o",
  "key19": "42xWoyugQgPM9E6uQfpVVARhCjCQt6hC2sSXZLxE4S1H7YB7fJoHney6RZeYBGe8pwSFTm6qTzpeuxWPpvDmSZPA",
  "key20": "2KGyw8FeDFUUKwY5vwK1VF1cUmhVgRj89hbpTamhRoTp5gDcqRCpVffHUp1wmgEzzHib2ho4XGs2CrNjjWwEp2Ea",
  "key21": "3Eb47LSpSW8DUbi1UWzTVpU3ng8vgRE9KTPxoYXg1yg2i36unuz8oCHtWcCa29sTKUcPxeMZA4GejTbLdsjYcm1E",
  "key22": "Ps8cSsgebRprxwZBxUsM5mZ5cL2fvSJC8xWqRHtR4ZoEotYZTtf4JaZN3sMihyaD9jbqDzipEh6BSGF3XZERK16",
  "key23": "3ogjySpRZBfJ8tnYxHoBLz8gPiqDupCcSqWZoR9PLMukdM7hwniTmZ5FDQfiVsidYhj6YJ5JATCDyE1CRKS7yEgj",
  "key24": "5PswX7e1FQqYXoEruczWHtArNjbEYLDD41wDNnMz9haXR1SrUsPPm81aMyUKy7pw2Dx7gnvcBz7LsWRbQdsyKy6L",
  "key25": "4hX9itexUyJqfJ8Qmz2kkbAP3vvZNfgTrA7ruDoGorBtyv3EJpYgLK3yMgUP1tRJ6WzT9GL9CevuvZzYNPve7JcW",
  "key26": "2QfKTa5SVHeYozBbSnqse8XF6hfRiNifoWSd6qbiDhCbPXTsCAdbm1pcdWimYhXkc9ue5TzJYeeHKiNL9SXZUBMZ",
  "key27": "pzLtrj3xYhaS4wYztSyAKEKyQpxEuNB9U7Jg3jqmLbD3Vexk6g4gWoXEjgu7hUPqgH9pNimosxuJtz6VxKPs2cF",
  "key28": "4gciktHFuz318WzghhX4fWKkWCripyg1f24AwGcpsG51uZYxqJ1oWUqbtA8Xk7TRU6JiVVSNFiyqa2x8jCMNAm7B"
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
