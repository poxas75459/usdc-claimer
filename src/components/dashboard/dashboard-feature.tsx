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
    "4aeervWP3FLdBiRugQsV5MsT5snVYffZTKVChiAf8ykuuimxqLJaVhfreDd2k5AsnzVvhFyAB6CKFNDdBThHMJG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tGws4havTvtJWWhbXuT5Zgy12Hmd72tejVWJHmErQJALYH8AKKsQthsCGAgCbEToJFeUA3s8X5mDADBJpwxzPKF",
  "key1": "2J4Tor9wc2VTeeMAHcvkxYoZsv2yPRv4i9qwzgsyUBp4toJQvrrNM2Bp5g4xJns9WUWbw7kq14MmZpJMfvKXGNQi",
  "key2": "4FtdNKFC4jzZohHP1ML2rqr3UsXLQT8Bu93rcBnyUQZcKDN5xfCA56tF1sJFWHExXokcNQ8JcGHmegGFvzX4hyNK",
  "key3": "5QJqBjkg14pqCF1SdDYy9DPsyu5wPUxxaenvqtnTfesVbNNqQVH6wAsdrQ2ALYPv74naE1jeJrmGFhHGWiQCN1B9",
  "key4": "4ERLFp6nj3VWxP2spStLx5qaSXMjQKnv5zKDugSkVjXtj852rtcfhD3JdKUQ8x7AN6UWSwP98TTZUrTU6dWd7MJ6",
  "key5": "59TE9m54ACUYZFq2QHiworX3srrq3ePVogooWRpGh9xMVBAf6aaVb2wTzjMJCXSQEvmEMx51uFKn1kLWkBmdNu7P",
  "key6": "2mHsUsvT1kMd8oQexfniKftZVXZwd6TPPH1bEvZ3st8SkfeHWhCfpYRSBrtuDR8Aif1PBTRGHYgV64XeLFGQRZgV",
  "key7": "3boEtcgpNrhvJcnDyMmDGSzgsM4xM4b7vde7pRFxxCNYadpdkSZ3h3Qs9XKuhgyrx4yxiteaBydmbRmC6vo19Fft",
  "key8": "4xFRdXBEWwaPvvyfcHKzcjDDvrV3nA9DrzfcvqLr34GRToT4gaXdv6HpzfHtCYTqZb7KmfhnPqYW5RyjTk2yBJTd",
  "key9": "4exjwMQLLMW53xSMJEy7hKeUzCEMbTA4bZBaQEE4VDTnvNcHmcxGsfdng3Qr9jjp7QbkUZzNAR2gHsZDJrPBSVnb",
  "key10": "5aJYvYnCh51zxar7sPN7AGixkA2J2ReTWaUt8U69CX4VcP9LjKmrU18nKzvnfn4c9zGuVHwHxbfsVcxrtikU8y9Q",
  "key11": "33yNjS1VAmteQNwhQ6KP4YAKeRAk9EGr644J6odHztH1BxrC7LcpACztLvtXe8rbE8d143FL6isa63k5Q79N33pG",
  "key12": "53hLhPjWgyzm7LcMVqntgVsfQEwty9NUAaFcZseUcz3yTE7yk4d8gru5yCWCBGhaSEoapnuvYC2gB5despEsa1C1",
  "key13": "55y3ccAqjANNgZUcbAEV1bSC8GhU3Mo1ppxi34PZTiomuGCjRbNA26RaEiS6PDote4RGige3ztvd6Sr4KkQSTtif",
  "key14": "3d9EmAG5NMPQZ22aktaRxr66VsukebjbDCC5vCXM4E4BjSgkbxYjBWjv9BBvNDdrPfEfNyB2cqCcpGH5ordLo5bD",
  "key15": "3RLEeCgeHntJB7rHCAr1dFGoUaJ9JqVckCxsUNLBfkHJAtMw2PS4eKszrMvpcEnTnFtAeTTPikF57G9z8QfALB4v",
  "key16": "5HSRVEjU1dLz8kyFSPJry7GfH92kKfPSbTX6KDfAgWCHeTXqrvNWSdHJNyNUUkwX6grFF6qAVjgdH7UNoX3V7vfA",
  "key17": "vHTqnq2wUnCbzhNNs9LC59BzvadTUxdGyRjrTFu8dL7UNx6kwc2wBVntbD4Rj1T8syFvkbs7HU7GeS3cR1BSXyE",
  "key18": "4eUZAwKe9L7ha4DJddGcpvuAYpBRKKYJ3EwicPYqjoVnsszuToF4kipGDE9AqbV6wweptAgnktHyLsMUprQaWQkp",
  "key19": "3mWervq8DwqD7ExKtQU9mk1ue36XW9592kHk8fmFSY1cvmCRCGqJmjeY9UyB85gyo8eJN2GJ99u7b36k5smbKh2k",
  "key20": "42sCsJeMRQNfUFY96kef8dUKCCcNUi8BnyMAcgXLbzetxkzU8EGXRmvbZuzW1u5Bw3xp8ZYhs7NcrLW51uUVXR3W",
  "key21": "627Bmxhv6225vKczDKEusfAmGQuhVcoRceeBHUT6dQmkMYfzjzSezLg4D8xzx8Smg12WfAgbVrKVqvvhUgo7qXoq",
  "key22": "GMeWJ7uSSYfRw1FYA6d5PBJr5NzQwtHCbVAjLAEbibE2UtiEfXaLn8ijLE9v12VT2JLoDRrW3e8rgggsg9Aeg5j",
  "key23": "4VpfETXwNTxHFBvefjmjiiNAsEoqjEanqER2zoZNwYpdvxeH9QJaqWVS2PLF3nWdHJeF6SLEFKGdkrDANtxH7xtV",
  "key24": "3a9iYy2nWYBWsB3K8j5cxTPPvHkkG5kvCXdzdx7tRWZ24fqLa5qKnJncBQGrsTYY2ErBdhYeF7eVPwqARKXqS9g6",
  "key25": "2u5CaxJBXW93LRVykmHv8EPphiMdApaL8dLjJFD56Sy3DFwt8i6QEKqWvuxKBSxvpW8uch9DbNT8SgP1XbcgenjK",
  "key26": "5yjoTpbGY3QXWwqkGXx5mikVt2WDQAb28QknSifpxEAhcucyjtTR46rC9U2ZBGXuzLSSkirWaYiC9npef3GqLFr5",
  "key27": "DEWDNXokeqdjeZVqMc5omz8KQdTQmfWFoyW9tiCQDp9BSLReJ5htf5HnU3nCBmfYkgVYqnJ5JFS7RrAaYVeHQx8",
  "key28": "3tAaCArYdAeppxt5wQqEUgKLxaV2PRHUdSR7Qu229hen5WmgJW6qStEdBsvcHDdS96wkgwYoofzxtkwtPGnMzWLV",
  "key29": "2RTWLAmPPuBRyv7qid46tQsSryjG3ccTGtXncZot5M7fiGKNVDHsRrZasbMdTfh8qEosJ8aH1W8pNV1cmpMGURSL",
  "key30": "561aKARo35M2kCaDsdYcGP6Cpcw1Kpq4Vp1DvqU9EXVX1BhF7Y2nwo7H5qk7jEAPy8mcEUTmTu5hV9u7FgBpNL16",
  "key31": "6gRip9xNjVw56uZ9BFCG8hSwuqd7AxHviJ2yNWsKoGTtwtphnhtQwDYx66EZa7i6p7otM9JodUP9oj4JH7AyKpp",
  "key32": "32HU6B3T3eexcTZp4rqhve1v6tzAHAYSp1nS3DvtDnJrPrivSd2C3wxnNWTzGtxrXxaVrVMeshpWR7UGzaQnvtBy",
  "key33": "4cRb1BCFLjjbMkqQzdzcRzDqNXresNfv3kx4ghT8N52CfshQECxGX4Qs3D9o8wKg2sH8doPFKxKvzrDJMuqSqzpj",
  "key34": "2zRDQAx2N19BBpADdBxjTTYn1s22VwNjYm3ZcMRzNpRAGtavbqG7HuUFsqu33psdZcYBZV5wVPde1fDLNwBBnbUT",
  "key35": "DhyjX9Lo7nZjdcvgQNNDyDJrQCYVZCW7D8To8vnWEVzMyykFQ8RriV5t1j5GdU9uoUrxwNVHEqdMG3qSjSuNDcD",
  "key36": "357TtMvzmnqx8VoHekNBJZYxGy2sk3NNKZTx5EWabYve6HA9yCZ2nAPqdibKYXNQbeTCg2ZfUdkQQpZwePYQQnRF",
  "key37": "3Lb4U6GUezBjQ2MhhMJ7hrQon6L6W773avYm1oS5YhKJLAY8o8Lx8VqFWCmHpU64MELQS7m75QHYaTX77hS2bcwF",
  "key38": "2LF6cqaZRqGZc2xMyJxTKXGEqYLjuckbYD4cA5pkTCb96x12znqw2P94Chwowqm5aDqnciDZxkLusnJe3pUX3Fqd",
  "key39": "3KsHkX55ipXQD1p7zXMUvpEC1N7jNMyMiaWSsdJMpxYwpUCwV2TTZ9gWeDsQ9Sd9Ca9LMX93t5sdzeZVtQv6z2xi",
  "key40": "3PCDNfibrjcrWL3r5XA4pMdbA9EbpgBHPN3brmRd6uKBDVhwmkwLAUUcyFG4iEDSeCYPBN4iABj9xiaHynmV7usS",
  "key41": "5gTenvknWiii34sSTVy124QbUn3LiSboRs44V38jUvHp6sLCW45EngYUsCQkJmhtYbEqPC72nTkTk1L12QCT1r3"
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
