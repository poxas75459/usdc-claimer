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
    "2oSSE6oRLES3JEzrbsnkBAHLTTBSqkEn7CT5L96igFXmsv1wUdZ4X7jRxpdodkUpXViAjv8NPyNbaxkuAwDdxVE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ekKjpWYVQEXq8VL6FhTyJikZfW7brCfgSuPN9LKxSUKiGHPkPo3aDAa2vf6PzcGQSFgkmwRZPb37GjM8Qw3eYgU",
  "key1": "267qA6bmML7fcAcdKAnPyvhmpFikdMjWHMmhGwyq5FtgZjzStSNy1jEwx1tVPBL2VyGfeZhR1yjbZeRjQAZ2CXtN",
  "key2": "82ZY37T1ULFD3ovLUMxSyDEobEiLPugM2BsRg2fCq9Btin48FT9jzAkqTXTjLu7KCuXk1WsqTpi4cP4bmFaB6kA",
  "key3": "5aqzrK2GYtNoghgNExaMNRENkSjuZhbq7kveKnq8twRJ5Wj3K3UFN1PdN9JeCgzPHM3okuei38yBGBuu2UvcGkFg",
  "key4": "4su12Teggvm86RVbh3hvXT4iht3S95N1ha1EN1EUvLTnx1EUHair95Y6DSq8uxpgqtVzGtQxy7GDY6JFZVhMDZW4",
  "key5": "4CzBEaXcTt2uUXVRrigu41S8vicH3cKBbUuVbbr54xbbfLhp5NrBRjTSqvGNp8K8XP1ogfuKnEfWXVWoFF25oScd",
  "key6": "55WXGomUfW1zSquj2icyJNkM7UnsNGtD42WDtaggv1ruQnbs5Zj8fE4FXpJqpSTQZmos1oqmFhqkky6G6F9sNgRa",
  "key7": "4S8wihCEVeW448HAQPRx4xeSRYPRwdDX2S5GrHHHkpNgb4LtuWhiMxs73csr1Hr8SRCTLMy9QeXQWaQWuxh2RxjC",
  "key8": "3HicFGJZjxLX4ohPL3JkLGtt5wXNnxakbM5KeCgX1QbACpD85yMJsN8QTkqBXwWgQNYahzkgDVmSvMWVeZsZPFCh",
  "key9": "3vrk8mpdKDBEiM9h7itTn69YQuuBTLw678Kz4jZftHj9hFxJoLMDEsAWxvnLz9EGf7BuxVxkDc41vab29gVTXCZZ",
  "key10": "48qu1x3HAQSM6MdDkNRmnPRXR5irVMCVLiiGoYq3UuTvy4rkqTjFikfR6yci5RaSAf6DQzn762HA8kw2XMkkGV5w",
  "key11": "4fG2pjVckuc2DLSa85JRk9zptR2JsnGStCjUKj5g7pTexwwi8qzYofdXkLpMM2xLLJuVt1z8tXsCrGrL2Ex8pfkG",
  "key12": "5uYbtYmG7rvhzWiKnEcRB4FzMbTT3RHiQnhrxDQJifBApFkCJyHzLmfLg1KGHuRB3kJWbKGyujAfkXtRiZwW2k2i",
  "key13": "2EgJHWsbs65WRCexQ3NFGfPWwiv7DDDCo4DiUvD2zNaQqKLcK86YGB5U1umGtBnTLfMXNkeDrnCWnj7zE6r286Pt",
  "key14": "2nCeVkTjVbx5iTGFCrDtyudZ5fMt8yBM8d123Li6NmMHDvSaUi7kPJqEKH1mACcNFQd8u98Ne4qeHT87vyudhGd7",
  "key15": "3tKX7SmBPb933ejpdNz5DiDUWBe4cyc7LcrdVhCqVcAzeMsCSsC7GGarzBu6cdyFFwCgbDFQwhNpRrr3JzdM32bR",
  "key16": "2RvyoTXp9SwN4AMCqvqL9aYGgBwf2ySztGKVCetMa5yEARe6rkJYazoPSzWJzJeJ4Ao6Aq8xXuXCDmMY3NBXfVb1",
  "key17": "PPaKQD8p9Lx3Y7kdeuhcjFZcCBeDJENVHXGSdj2Q8aAPBhsgkNhyiw7sN1XQxACEuLcb2qMmxMkngwpPfesqzPj",
  "key18": "FsNL16DQtnm1v9Whou4UJg8Kqa2PGV3CoREtF2DLMsJUqdCVzPkm4ixLZjoD73CnNkUMkygMe4SDwahHUTURN4a",
  "key19": "3KoHvxgVUG88ACawUrUjoD2EDmsy5643XrydskNmwUnyBJUpjakJm9NRQVJ7NoQ8UzsJbqZ9iVTbtqrupc5oRtbb",
  "key20": "5s38H31fGQjURP5vSLfVjU6HyZY4pJvfzcixGTtRnmF87e3HYRGtGZicCVEmZ5V1hj5q1RyNtAjNJwyHhSNb7Xm5",
  "key21": "4um9BaDEXgzuuxnKVB7xQZAp7urS9kp8mbgvUUD1z4pwuXCiungjkjxcByMTf1bFUHC3UE6VhaVG1su4USCTR3G4",
  "key22": "2W9EmDs7RQXUixf4vNPVUCzcQdX62vFMyrTPVQSeugDbtmhNiSLV1RyqmhiireAJ6g8PudC9MQeM81TR7wfR1DMB",
  "key23": "VV26t2vLvekXdSdjZrAK9W2mGdqUcj2VnfSLZtQ1gYdPTWPTXxEdFLNKNYstRhvvuQCnyyGUfmQcANtbTDLhsaN",
  "key24": "3emFzUD2mRkRpkb4V4nVGCPFXzved4B9MuPp7FPVCc2465QLc21R1DjgVfU5RpTxPKjj3wf2VxuVz4GMwW8so9AL",
  "key25": "2oKF3YZXgbNxxaeFNWVARzZgmCPnW6iA6mnW4BmdbUNLy43vXUsGpKzEk3yFiZH8J2gfEeojSFWLjPV4mUTQmUG1",
  "key26": "2oxZ9Axw6so6MRdkjf9c1x1aLdCuVFSKHdfL6R61vfWBoao3THKAj8KVuNY95xd4gswYkhXTbi3RPYNTdBTFRYW6",
  "key27": "3jMh4KHK9cMugmuzy9NFpr4zBDFgiacrxWNhq9gLUUEWPsYLddz29HGkqMLWh3dGPrGzBCrgLoHGtdKjHEdSk1Pz",
  "key28": "56Kv5U9WCqnaRYUHndKQwBsGCnWRovboo2sJaBPQ4gbiXkx3fYH9ShggWER6MQaQRE9FjKR1zfRrm92hjuzsXhPJ"
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
