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
    "2L3n7qUU6nEpZ9vv5uyrHhdRtKUTyximWHJLdxm3NVbX9TGEsChwTcHYmGAEHftNccNnDXukYqgXJcg47LQwcQeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T85j4WA4AJ8eQAgvUCXnLg8gUjJLaXxEoQPGmJvv5dq6d5GTs1mNFwEAJX1m5niEVMnvL2BVjqYiDvtxHxryJrC",
  "key1": "3adjHbP4WMeiSFDQi8SnZJcnmDqUETJyQX2PaRj8piJggqm6Q4VvLabFKweuC6xziwqBj4z8FuKeUnoZRu8wDxcy",
  "key2": "5SmnrNYoLbiJDRHw3LscMpSSTUFBR3a3nmg1jSTiSAhDrLe5Ti81Rd9BmZrnVexUfZ48JrnpQbfYBvQMg9fAKtJd",
  "key3": "4K2TRRguQEokDFC6gtVYi8FFdJc5HcAoeDrcv2h7bf79n5sArzhqJ7A2m3B6kKNe449uekfRsRXsdXynuYMAettE",
  "key4": "47FwxSUrY9raQ2JfLvt8PSbWBMA9GYZrY7G7dieNAWFH7xRaSbLguYHFJXrzELj6ofa6xeBxqDKBtcE6Nq3o1x9",
  "key5": "5XbEYd5qnNx6AJKakm8GPwZGexbp3NUMY5XVm7CzgQP4wiSUbv1HN5KTKcFyNtXj3JQrBFHrVbRXzmVAVZsmqL88",
  "key6": "5bXCuA4wZV11GMDDnYMMePLa8USayUmCDRdEZnhXPErmxGTi7HxFEwbPvvSUk7cmbbHVdhffMeN3m6Agd8speay7",
  "key7": "2GDeWwBd8ceNGWgGRWR2DKAvDaucavL98P9su8q9yQLsvr14MMLrhdGeLcRHgVnv6UKkaSUi1yof5rZVTLkD1kgM",
  "key8": "azPWhm7yEUf2veXGEiSQYyknjMhu5PqGBAgacRkaM8QveD5BggMkE8EmaoAJW94eU4ZQWYAHQBWTi831gHMMyT7",
  "key9": "cEkuypTpdw5dy1dAXJjDddFWRsVzFyQmaJyQSQtp78XzfY35RuNX3A9HttMbwccko2nvH6HQ2QRiCRJs6hHCh4k",
  "key10": "nEmcWKnDvh58SZTiiznnQnjVStXNLEHdKyvZwq585yu3CSgHyDDFrgeAQuRG7WzPQWLfU1Dxj7ZfUA1h2f3Mc78",
  "key11": "5zYdrzz3QSBGMifCNoB8dVhx1cRJ78oZN6GBDBwzXLk1bhrE2cGL9TNrviZNxFcN7QA7uDdBLXQpa7i6kuPUnBUF",
  "key12": "4LiCcJ9ooPxVbdpniuGg6CPTYNZwSNB6koK4cCXWpaezQQ1s6uYQ6ATyh4F9CVvCGM2SbNE6tA6e285E1irWfRU6",
  "key13": "3ifRKcKcMXMGMbjmpK533RgB8tRotBbSdZo6HsJbZjvGAeghUn6qm4qphh2UgLWaoDhEAicBxLZYw8JFRB7RvodW",
  "key14": "3uBz94UJR2H9DtgutnYaUWdJuJfJoRrPQqWeQkEcR7PPMZHV4TASM3tvsHvDgybAVPfyXf5cjoFMqX68UhtJKqg7",
  "key15": "2JtAYAHqP4B3prxUgLgEjpqttxw4TRHXxfYUa1Qa5vSUwnM27ALmpt33zNG6RHK7AN9YAgHF4458yqcQR8R83a5s",
  "key16": "4tCWKBEvQfVg1e9EWhncBtQrGZdBfPgCmAgG2HPzENMTMEk8jkYEmeJf3s47wHqFrryqbzeZAWFCBKeratFiENfT",
  "key17": "bhsUemjny35Ejv5GSQcs6vJeTHCiwGuofLncsGhonvaJFMmvtyRDbkJvTgMZTfUH41fU7mA3wfWiqdBcVPMphyQ",
  "key18": "4dRRBBBqHLQ6cGEZs6FgbBiDUdedwx92x9FyeaSLAiq5YBNGEtho3WdQpRUJpnBNvZKaJTiUxMHg4fkncLod95cH",
  "key19": "5Nm2HP4Qkt3uGeCMvVWCUc79TRYdvQKgkQi3SjbHpRjsQU1ZkEjxfDwbLyoNY4CyCAWPQrqZT9D87XGfE2Nux9LL",
  "key20": "5w6iW2oXJJRaEEzFfLXfwv4ti7pWpgwx7CvRjmjofAiMFMheeWKpXu7bVVTfVFe8PnTLK3NNUt2tJpmgqB2DGyds",
  "key21": "hMu2rLdnq2XGYup6omd5ysA3s2Jj6egJXFRnegHMCh71hV5V3KVRoLEh38Yz5hZrXCovAbHwFAGudJc23i2KL4s",
  "key22": "65btiVAP5JccebA94yWqUCbJ1QRq1jdZ2EC1Ebn7Zb3KwFrkpLiF6nLjXg35QdWR6WbUv4g2CvbGVRrxtkr1q1hN",
  "key23": "2NTpKAzqbcWPau4uzi7q1CavR7k2wb4Maz1XUH4hH8GZbWmBffQEcjKWWvoSjQu5HPMJ1N6d5oT2uqKPbjjHtcBb",
  "key24": "eHiGGYfLrJxpj8FCpYZrdqxAZSRwZERtYwR8Uqa6777r3Nmr5PzJnMnFUYTGfvMaPBJV8hXkiPnfSEN1nzznMsh",
  "key25": "247mQhyawnF3Rq4sxtNGsQmxa41cvtk7dLWJnvUTVLmM9EHCvpHqU6ep6gNXonvWhZ7mrAkKS7jh2s8E9SDYdBEP",
  "key26": "2N65NveroD55xjQFFh5hLN2wyjGbcPEp8ZaTF1CiNCLzdQxrnSZw4ekNjfpVWvNZAi91ZhAaF1P3W2aNAyhFJPhM",
  "key27": "5c6hqG49rEo2p1imeqahD41wpjQyriXkRtxh2jERARkBJyJoTi4dokNdHrkHF672GhtJdEy5amnjiDL7uZ6oSn5M",
  "key28": "5edAs5KVXpCA9yUZu6rQMuLXPRvbatW46qwA7NzUS1XUttVyeMcf7YSxEECjsxfnKDJgzS4bKB7NKWPR7tuenk6r",
  "key29": "WasME1aBwtZcx3uzoBHu3HwomGCD3g3cqFtPAKye3bwJ2UovkrKPmF5BxFZYrniEofYsmNbmoAj5AEkrzfpLfDr",
  "key30": "3bCPjxz1SQmuyVExMjSXVYc9qK3dFVwVQewoQJ7CWTbToyEbq5KPzZ1VoZZConkwxFdec7g273LRGzvbfa7EHbiN"
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
