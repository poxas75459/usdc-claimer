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
    "36TjxmWFH1nqwbF3W5CgnTsva8xgiZ8wJQ7wK6Spc82Q4tfvXjAmNVwPNkEhpNrn8iQf2vmGcG7YpAajXMnRESyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tzP8qmKfGWCYfriv8aFACqwwnwqC4EE9R4avndPnsDtyPk2rxaXg824ggTPySrBiGDVZuN3QoXbFm4Nsj5drBwX",
  "key1": "3aZgibuhim3s9VTgBEUeLftut1pmWqAUKeLDVhJ5FxMgSebKrBr5xjmy6TnqfCRs34PiBfCk32hXYvVFTwaL5ChN",
  "key2": "4HMTdyx8ZNkZoHcXTj4q61JHjNKPNDZU1iMZhb5HqPqSYB1swc1DJptDp5ESANxNbMb4SuxEWGSK5qHFxaJbWHiW",
  "key3": "3u5zNXTDqEmuBqvcKVWWbXXyPn9JSJQH4XXQZLDrPjTZvLTtafPQjqMs9fuWaU1ZFEUEW1bR5ojhgYDFgzL5D2Xz",
  "key4": "5QjmX6eTC4rdAYAx92cTpK2zMgHnFAsw1VDAHgBJEknVUHCeRFjTPd27JuFeLahtdQUB2NznD1v8pwjT97jSSeDJ",
  "key5": "3CRxt6Y6mqBbQV9K82wmpVCcMerQ9d8KjHY8xAgVdhys3CHAoSzJxzVX2gPdDa4yNBY3NaCC9cJnnXcZsZ3XkVUK",
  "key6": "tYK97x77ifqgtUEE2N5tqWBC89dJ87AH3qDQEjsGhRC6A7LzGrhLneyPoxovThNTt9oXPsUS37xHSUR9N3ZFNYr",
  "key7": "cxgqncV111Xefh1Nete4xFQ3ceZz6CjHCZfNCSiCibAeNsrbcAfwiVSp7vNBwJndMnUu8NiEHjxdvVuUGx5vRNx",
  "key8": "sBuwe3PuVGgef2pNUmqqrh2h2kgThhjU1nKFLbJofL6CuXhXT2vLoJmBUmnfQMX8EuibuM1PSVkGzXUGsLFjtRm",
  "key9": "5Rgum2uM615RVNjETFXS5THEGNcjV4JtxD7b3AmRF3ybogZUxC4RsBBo1wRfY8Fn8BcoSJtNvZ8qEGiTYwTujx1g",
  "key10": "2wokLQENjsApCjSg1kQrfiFqNRyP5wK9NycZWX5NmkNe8QejW4Z9GyWn7F4d2PPWRT4d1mT1xUgUfoCJsuRRaL3v",
  "key11": "VaEKwxEp4yYoVu7KDg4amLrd6aNiqqCrGuPqrKyggiJrvqTtQtqFwqHaSFTRCkdvZGiERh14LWSQgKH531qGckx",
  "key12": "3LNDpQe9qRTUJS3vhtWwfKeBNDFv4K6k9hsnv9srE95ZztxQgcEHvJMwk8n1fTgJryrDTeDHPYgdhvBncBiPGGs3",
  "key13": "62wNg1kqhL8vws47a7M8QVTkqMn1GmruQyKZPeqfgSEU7CqaJpLc4xAw4PAr1VdgT2y1cYk1tM1RMC9EJHKiHe4L",
  "key14": "4Ty35rCDWY4sm1tgHAEoM49bxGxWncHj8KeHYLC2vhdpDQXXmCYJe6Q11hYbT4q9Gv5T9cm5hWaupiVK7CXVW2oD",
  "key15": "XuB2SeX76sHbpdvtQycMjvgLL8sMcZHWxxKKdoyY8VsjAduvaoRHxzV3TiqbzWWLa1TFjusatirRDTLtFVuu9iV",
  "key16": "3unP4gVF7oK4HY2bk1yXoTiHzzTo1Bixftu5yqk7hHBJA8qnTYHXtFRUUv4V1yJ9AbuFHNRhLTaKcbArAUyFyZpq",
  "key17": "4YWtptkVKq1Kf5HV9oTCZkQzudmTFi7nY1FjcvusGRXFxFsMr2EwDBJMnR67whms6jEsCTtYMbsCme981SbmbxAB",
  "key18": "2V1rh2HDJjQD9kyYwhZsqPoGHFxL6N3btSxjQf7XiKi91vFtPGfhBqB9BcFHBTeFa3fSmGs3rx7sM8nzXfipbAVc",
  "key19": "2hrzf6xKjGvYxshDpxN1mZAWvc7WF9yTcK6RhJw7wxxRbk2TNcewBTxXe7fBk3wtonaMjTxEnVeBWLPSviyhKPbb",
  "key20": "37wNbXrjiJNshQddXdAFKm9GbXNgw5ndQ4dVwHnVsjaDBcx2sFWtxiSe1sNZneGGW2iBWgfxFVfXGGA5MArLtuBS",
  "key21": "1peYnHjyWrF5GGYu7Z63MYnfdnELQcKLbK5a99hPnpFrV6RM2KkKRZV41FetkrsVi1NsKrgqYyESZMtKxRUDXhh",
  "key22": "65m8k3sc8tPpDVr1abeawbnr6k6pRVGsgvUGxeGtJrKoF8DP9Vctqcxt3hdgtoWVcm5CtWCS1bEGjav5wV1LYDkj",
  "key23": "2oJFvTMNP7ZK7n9dn5oJbAp7UYb69nVBgVfbFU8pYUqTfLUg9PKMCwvRiTKr4EXaTPqhrMn1DstyqjjxkrAjsCDD",
  "key24": "2K1HAyFddXHyZRkAMH2wWpo48zBpqjfvvbF81d9qGPQWBP787oWYsWY1hTEJAbimD5w4VVYzBrxNUbNDub7qGE3X",
  "key25": "5cpiXgoY1hyVJjjF6BVSeEVCvSs9MxnM2tGX3x3aLcyUH2zkVtuRS6SSavTyW4Lijq2pUHdSUGY2YcJAoVjFLu9H",
  "key26": "3ogs1bBhYp9o6hGdzymgqLZwxh4rBX91pgw743vNdEhZsSFaAEXyufYypPPupkzvvVXMARuRFYp3rGdo7VrXQCLC",
  "key27": "48V3agVMoDnBywhdgGS8j1a1oGPWJ5FbQzC6jQA2hqoPszfJT6MReFZNZxBLptBmMh3vxWQABsEdmsQwkZV375rS",
  "key28": "UPMogaw3gyT9GAiFfjosEsa4Wgy9fw6kePofzi8oTZ7EnUVYAHY3aDnpxRA6v7mN3MbtiktGwSikskGrb26WK8L",
  "key29": "oy1krGpjJ71CMdy9HZZeBE235BxAwEVtLUgJyKJkGBoyJ4FpkSe2JTs5zNz1zsEi3b8YMXGyabtVNHHwFEmNaG2",
  "key30": "3ZENwSWahZXqrAqjuBVzFsbru7LiHZHnFAxHuscPRUbhwv5QKKfq3MYAucf7arLW3cfQyD934v1tFHcoD7weFeRc",
  "key31": "2LCrF5PHNj8FWuvgnJ7FQKMKyfmrmU8emCb7QcEkbSD5H3uxXYwBi7f3WYeifD1S53HtKBvzvGyu2EJ1WAAtes89",
  "key32": "4pM9Wj6PGbXTgoMwpDpsA54cKR1WZkp1fs2ifwmsXewT3KYt5HAv6y1yrnatmQRLb91DVoBhHXgMSH4oVT4qtPKr",
  "key33": "VcjpwrqD7NoGAdv9rmM5CiqYWCDH4wiCwUyrpQeWsmADYvg7vBeLWXvAvxRoTFonMuEdEMHWGhvwuiHNJEcbwBq",
  "key34": "61oGWP6kdgJ1VBZ97wSmcocyHhDvEmP7isePiqk9poyZkhQe6k9WfQQVasUUUrNPHei2a1TJjoZESmsnnKSBkmGb",
  "key35": "4W8dY5oTo9ZwxmoGrUbHuQELNkgwm9yVpwtmSeSoc6swj96N2qo3ANoQEX1FUPsuRNe3vupZt43xG1oMb9z3KQRg",
  "key36": "eAzYYMJXjZLzKCdEy21RmY5BRChUJmGKHUJ4XD67dprC6tjvhuBeLnBTk1zHPs1GmdA2Mh2fw3TE4kwbZWf42Nn",
  "key37": "4mGsTC2SATcF26TfKnhC9vVi2Vqp1yfAC2yA5YBrkUFhZEd4VwF2yyjbS5mUwz22eHC8ecGojTbP6k284SidLLyz",
  "key38": "3rJ9A6XpfvbA58WGY7dgkhaRUUb97DVpaYzjGUr4EyBBRMxZttZP9t433LzLFWj8emam9dmC8MoxMc2Bkv89i8dh",
  "key39": "Dg3MzBMGEDm89ixXzbgTrDF5voL8hkCcAKZCzDFhcrGZBJrqLpd6hrRSvqSKpqpfjChZYRqhQFvCtTmY5bzmcWc"
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
