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
    "21gsqxbGpUsogYsYBybrsNjEoC1YEH32nepnHbrj6dCzex3RzK1xpNB7gR1Xd31u9CSQGhiQiLw8pfWBGTuytgqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vHEGyK4GBYdG4ZsvJZ64D4hSQELsCaijaNUrsqvYon68yuHgo5FqjSLTXF8iQf3U9JhSxdjNuoNuHEqSjaDYpRK",
  "key1": "iBTWzDMtfCPXBThXwHYBvJUJ2V9ahL1nkQBFsgdzw9yf81x2b25rFfTfA8KBTSxowBQXxpKNv4RDgU1EyN4tX7q",
  "key2": "qnSJ1kHUMa7YibcBX7aECFZHTBctUX5BxKDnZp92VyyqAe8NLQdV98LSTM3L79hQFK5u5UjmGak58EKRePXKAtA",
  "key3": "4jS59dfYkwtJFab2jiLLDWyRof2b1pCtWvEz4nSnpkwk4oCgrNfG27vecX8f3T7FMgirwNRmf3awFKN1TvsGme1D",
  "key4": "5BFogQ9J4U4p8T4KbGn4kZQiUUWujH6S95CAj2LkoKQfPHcnsgwxDWipjoBj5Uusc4YZHiLnovvdy5F18BMgAEQG",
  "key5": "3gEUipCQ4CbU1a2bQGhzxbkyexwAqhN8HwwWi6beQEP2ygEYE19hReAwqvtTw6jQJPhb2zCWr1m8E5oK5oseKkrb",
  "key6": "3Doy7U4jywoEGc7uG5XqHMUx3kR4ZxAANEAtKznW5us8WQ2KV8JvBuw2Bt5WhV1s1FQicZ5ib5cNcpj7RMrxZQ6y",
  "key7": "5uQZyKxF6AWt2Ch7V8GNEAMPnq14PhookKGzJ9j9PLEG8i2fY3RUp3G4ggTRj9iSDgnsAMt6b2SMPnSjgrSRDU2S",
  "key8": "63UJLB7ALPhjHPgdSTg5Ao1pdZnsRDdbQTt1BA8Cjkm7M82gUy1M1vzLU39nJYrV5cUw3CBmpGhLidisLv3LnjyK",
  "key9": "3gYjznbbPWEmmicfje8bn3TujzUKnEpTG55YVZH1kw81BKgT5mKNyFVZsGeoBmaMjpXNecnbP25qagQXhSyyHVXT",
  "key10": "yqDw5ry6r1QnccCYUP8cTjPqMxhZbX9jf45vNXv4F5BtPu4TBqSrGGbHFmY5VceoTk41u7XE9doyWb6wynUFbyc",
  "key11": "JTi1J1QSNTBnadeppfHnTKSpPrJSFWcP3eDV8u6sSXeF89X7Zn2ZNJCiyGUZTUDd9M1tQ4iWhXAcUcCa5DWFMUr",
  "key12": "Rw4jENLu39cmhPWeLPF7VZAWbzQKc1aSviQpqKP1qs3y8Grr6T2U2FTvXGLyGYhus9vLDbtG97NLUgHavu5ZBGs",
  "key13": "31eRpohJ4CFJHpfBJ8LDaV9sfw7rEFMKkBEHSs6htYV9kURRnX49W6fV2h4VyrZNxxsKwK7nivkSBUTm4ShR6odn",
  "key14": "48RjYCkFz5ApnhudG19mfXKUF8UYUVxvowXLdu4kMc7LVgG1sEuFQqt8LzhZgdJYwhixkTuw3Tgqg6KGm3xQCdrU",
  "key15": "31SM6VykJRPRCSaWPEZhHxXDioPGsVmZS2RNnQ5NW1xVanrdXV1nTiWyJfbCvcUBJRB4kVLN75Mwvo1ycxgq3h5a",
  "key16": "4UFzGJQbJcp4sYf6NYA945vkMqyad2dBcEbJEkBnRnDjV7tFqZLcasP8Euzjn4ihbvVrnDLEb4V8GcQxkTR8EqZS",
  "key17": "4LVAS4X9YqGUR6Y78pepYGkatsqGZYEjUAH62kFBdYPK7AoapyakXRvZHAbXGTaujJRH68VhWNJgxnLixpf8vWru",
  "key18": "HVHXFsFSeNo25SiXw8VNFWMddAUAjZQBtbYmizG7rdcrkXihfegVAu4ZR6k8XvZEnWmRBXQvf5KV163tbj4tNuL",
  "key19": "4jNVyCS6gwqbAtnkZcmrXiJRQSEQijb5qRzoh5ZwN1W8Zb7hRBTHYWwguyDNVcPJwqh4opBBxKWUpdd3r81Z6qEh",
  "key20": "ojx1TKnNpqCUmWjotTiZ63pyQEuZ56V8wwqih9xqMAadtg93ZkAx6WbZARrs9qvVqbfs1Ag26EQS333bLTjgXNe",
  "key21": "51QNjvz5MhYBWuxTLWzuhomNWFX1Znjq4bZ7YWTTgHE52NUsyT1EUNDi8dy5opUBnupF1Eb2Z3FYyvE3zM25YgiE",
  "key22": "5FRe7TsS1QXmEYV9XmE2qxaprcgb1sU2JSBwXbsuoGr4pX3K5oJqqeKbvPQn4oZSbh8S4A4RRHJ7RSf97F3Rv7pY",
  "key23": "2UiaNrfuFKkZMPc6jVWs8iCBM2S3oaXn9S944kJWBZKCJVoAw9MiVUzmhJ1Gtxq87ioQJdMSn9S47LE17J4se4Y6",
  "key24": "2t77ETTgM6toSTSZzDVhzdmVQM2W6qntUUaFefoD9cEDoj333LBpxpBDSp6ss1Ku8ZjUz4D3eK68QbQsfChKki7U",
  "key25": "5ooJRn2i1cLb8bYqb4aiVuF98EhgCyPirSaLvcd6hLwo365QKVQGGG4uzf1FkHCNZwQj2fmjNV8UHwXzz8jokKPx",
  "key26": "2U1undtCT19umPQKNwFXe3dSehBPmEwKrWVPJXnWqnfQnQjX1VvZqEmRcncw3SiuiyukLpVubCW18FLG67rNiM7e",
  "key27": "VNJX8Tc6ekQNR6x7U6VCeQSGQxM6HvVwDGysBNdiVTNk8Hd2AV3g2BCsM7g1JQy9GtuR1bd5xFmuy39evgFkFRH",
  "key28": "3qGZWBD8v3o3Qnu1u7wpqrgeBMwzPxMdYhwDPkdddVsNGW43i29STRiKeJb7Xyad3Qxcv4Ji2bxaD72SM6sUb2tX",
  "key29": "4PrWKLCaQohJ3MnsRHnDuSW2c5i7V5Kobw1fmAZ64GThQsJbpbn2iapk4w7QDuc7wGL66wP6JyLhcFBxX4w1igcN",
  "key30": "qkYCaEknB3YkdA6eT1y4uR7zdM74q3RwK8qmEckiyQnbZrFpiEjyfoYvY74qGD5XVzarJnBEFUoTk9DuWrrxve4",
  "key31": "2NDvLNoYkPpL5jnsfa2wE1Tt77THU5Vq6SdhoBLnx95y1eCAvPi62G6sy1ngvkBuhBh7wZAdPEBuwDt53tzUWWtA",
  "key32": "5KwNjtUGubEmAeSzk8fx6mjbxzJCKpuGtVWznAmfk7hrRYarZmF1X1HNaiAF28yJR5QtN6B7dFo4q9J328ufaPbK",
  "key33": "JHTzcPvT4ozHTfw3PcBJ612js3KzdKndAJqgdE3oyKiKo5WdWdZvc3Y5U3TcCfUG4gJ8bL16zfL1f5VrTgxFgrx",
  "key34": "wJ8cYF5d7EHRREhxxSfmjeBNo7wmfknkBQK5vgcd2p8z7kHdKeivqTijdd1wHNskzog8XciqGBoPQdYr8eJ7BGx",
  "key35": "4KW76G6mmUfC8yfyuEGjiYCEuJZ7a7XqnH5UBrhyQnPv6GzWZknFeMvbFMwpc1XTwSGWb3DhvyyKKRWEZmthuigN"
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
