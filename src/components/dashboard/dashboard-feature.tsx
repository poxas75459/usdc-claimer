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
    "5mycVG3LxiEK97h8w4q38JUvzqWH5hn9owsWeK6KeXT52RjZHB8Dot2FYPZsztsvTQYi56b3JxoixyorJ2PUSa2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aV2zyrFAGVNqg5vNGs23y3FSGmB8pp4SSvEg72QuDAftwtcDc6jeU9i9SZLpb5LUapk7ZbqQ2LKfRw1hEWnpzpp",
  "key1": "52UeuVh3MNPL5ZyGJ5XXmVPhaZUbRzueRNJPiiSFQqNmwYaQ2arP69xkEHc475YvZmVgoPdZbsKcChZVfcPBcTDc",
  "key2": "M6RsfQiDSenxML88Qg5iURbahTyggBnXwp3qTCiAqGapXL85segDFNLBdm2yYRs7PWSm421U8SHkqgX9uJ1qPnq",
  "key3": "4ujZDeA83v6wNxd75raKzgA5inYbzVsiXegdv76Vy26hM4v5RvqtEHDPCM7TXcLjzbe71GYU67tCWscGSMBvM8fa",
  "key4": "2NuTfPZaJFzQmvjPRxWvyj9KPvKrwW79V46RfMRWxinj5tNHnXUnjZ55Wm33m9aaDaHxABWHaptd72BxrWDXQX7w",
  "key5": "465qCgToB9Nvg3uWSYWcM942ae1gHNA1ChF45ZQHzeaYi6YqSbVC73opuRKkjwKNa2Hdf4m5vUwWCLmZ2UEEE7oe",
  "key6": "3GcVrEDFD4dxVZcrdYAg6Q982FfdjRzvVA88gPZjKooF5NCkzCuEhbqxhepHEofemnPrZivUNrTS8LXsf64Npe77",
  "key7": "5PbKMnjdBzZLFBedZAdabKXM3vhCmYHWAAhdZVqTpjUXpyrJQ2fToqaXWUKag1hsPAqJ6MgrZ1RavEUyXooYk1fp",
  "key8": "3JRM55FYLVgt8bq33rcat9HdGDgDEhR89fjZEM6fBBc1sNPFqxrjPYuqb71CBSqH7u13S3fh1pL1Rb5io58K9tJs",
  "key9": "2P14MJ44oXat9gWWb6T58LQ13oCLLChYFzXgkTc1soVmBxN3MmLMWfGjh5pKQdDsHtZtvebtygTvt3veuvTbmH5k",
  "key10": "4KmgH5kWPwQcYt7poQYyQnAy5CUNQq5sgsnEv8inCnZgyPLFGkyPF1dN4fghcToPGKx42BkudiiLvJRV3JG9Exuz",
  "key11": "36p3c3TLNTEtWtZjhwnRia7yywW9fxFSHAYT6Poau3VN1anRzQDSj4L5McTDNE8VSgVBwakpW9q4qQsKwK9PdyUk",
  "key12": "BXtYDqhWBdupzNDTaLyXsG7jp2aVt7ctF2HuhNyk6HwyR5dgpxMRb2X1pceoUTjdvDkyKYUsuRrfVXNKw7n5ySr",
  "key13": "5Yzc2SWh6UiFRYhjj1nqct2bQT2EiRS2jAtKeDYa3uCCMnCRrhC4QeS4GDGVuSWGWU7nAvSGyLavZ3fRRx7bxnS2",
  "key14": "57qRaDL7NdwWuhF42X3Pivrwe5cB5pGiQ7idf8FffhmZ9KNVyLuvpLXJcKmPWZE4FV9JWcDzMUTkLZHsCaFRBy4Q",
  "key15": "48dxzqu28ETWgm8KRo2CCMy37ui3ntWRm3oBWbbLa7Sbsp2zZVVzzmFUFf8nkTJPzEHVb7r8zW7UmSgomSjAPsrw",
  "key16": "4en6FYAZ15HeYGi5eGsWpmbwrp35o3PM98fmsYxNuGdVFXdpJeB6n39sS8ZSw94HjCVRZQ5RdG8DuSfSFJWcNJju",
  "key17": "3d44JUkeZKqJ91ooATE9JKbGR1bGHh3NiyWydPvvEGdgcwmUmfZUxY7UrJ9vrqAJgTn5cxooHWxN23kKEPSTtqR1",
  "key18": "4Pm3TTXdPtD2pZBYRUucCuefsaMQBbrZbxjjxh5J6UcvxzwjbvLPFDFVi5zYVxDsNERrNFr5fQDoc8wJnrJkPnGV",
  "key19": "3pJbAy1NTT1fkNBQRgPAjZDWxw6tSW3hw5VtPTiPPFhCAW2NjLMvE7QX71qE2PHdhMEjxR7TChmpNtGxQK7a693q",
  "key20": "5CKHdSqR2pznRix93ddWGrDwkx9dVexLBEXbEkdWXUdnsTNCxYoSjPsPppJM9ttnamM2v4QTaMuNH6UTzXLWvwRZ",
  "key21": "236RdfSQ9e6WqJWux32ZzxbbPDU9TVz9N7ExMMQztV2PMn1zsUevt3rg6gyuhw1F1tRLGKUuhJcGH5mJmizwRSse",
  "key22": "3cXvpg5xnYSW9ZQ21ELbCUhGvdjNzvXFiFRxu7HoUKvkksLFRWxHyTs8B5CbxWfFGev5JDAsdwSW7Jm8NNQgfNhY",
  "key23": "2BV5TGgMN6eJ2iZCMhV7qA3NRFKvacXSu71VMM5U9MVu9sydRLFE911EEJryAeKYh2aoJuKXN7p1m4YmVzhHFySK",
  "key24": "2TMPKaNRUuzVgdGAn8NRZvJC8hZmdQZWvVLFp5gZjqo5nKJfCkNQVfTu2S1XczhduocT2dt3eXA1QkpvHEwUqEcg",
  "key25": "bM7QWSBv5iraKaqitTN3hmiPJASUCKUdSPZzz7QYPxbFzhBywziQcZrR8Hu1RrpRbxUD3aoGAPZuc758EXZutwv",
  "key26": "2yvw274uSCCLReaJ62B41fuPdfTNPhPj426YsmogzYftj4dKJft7sNxmor2oA35UMbhADLE5J7B16AkZ5odLaXsq",
  "key27": "4wGXjwfxty1zmpyVrfB69HHRJp27GaUY6roXisraXGnjhKySVWLMuXkBMC3XqrPRDLKk7jWyVmV5UAJWJxzoVbDk",
  "key28": "3Yv7cm6kJxAmRHXjxa8Uh8zQhyZB8GVFyvyhZjRxGbfvLCoBzwmTZ7DXeV5KrprutwgsUbbihEeSRUpjfzq8cFA4",
  "key29": "2kZhAQ1caxjUkqecqTEsKLYx2WEQtsKr2kZHQdhwj7Z1vogiSei8tMgRmBoP8NvfuVHfVPuhgjsiWXJcQAFPNHJ1",
  "key30": "2gLnHg1PL6tNKuAivy8nDn9nazthJsmw1taWRen2CVTiGnTkXCHFLpCX8iKRZpyEzNrpyBRHMvGMMDec1i5BZCJq",
  "key31": "2wxbXSqtZ91c21FFKcbhVoVqk3vRc2eNDR2BWmCk1gqCQwSGeVpEoi2kGcVDiwTCU6Jic9C9ktwPPPbUeBjFe5hs",
  "key32": "geHy7vsAR8dB4shzaNpu4pS7vGHnPSSFgwUxHjbq18tHBQc6U4aVSyiy7Hw1VSeH5ToPbh4MxXzwbNCTQcBq3Zo"
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
