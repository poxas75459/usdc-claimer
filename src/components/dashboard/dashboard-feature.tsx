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
    "5UgXiDpRFtQhLwd42jCuuVH9ZFJytS4bBtvFcyqGGDvCSZmYNqbcs4ZS3WsLinHfaR4xuHWJbGBbiquMM6NpcRPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DLFXiAooj3ofQQNHRaK51s6eLmtcANjomprdmzkXJBe3eiJ5Ah3F7DXNZvejnwpLzJEV2jeV1aUJzcH2qqiLAA9",
  "key1": "3w6yUjW84WQHkBmwCBBXmUatJXPRCMzt1rHxkfBoRK92cCgQwdHAHXYok35k3QxyNDQxb3N1cmtZm5gMgXqj3SbX",
  "key2": "aQqTfEgq3c796KWzu1JbFJMSReFdnjTrcLvy9if1HaeywhkTcCMmrUccHGAGKT8mtkmVJbvDGMyJDvwT25MRSDM",
  "key3": "5dvdbE3938dwtVduRVCRG1A5qZJBEK8yZaJvwB7BLi6yLh3DYPgp9apSTU7Pjt1yYFSW1dHyVXGMBh17BRtKdrDi",
  "key4": "5Jed8JAEQwXsHsFinBTyZBZcK8m5bJhsTbpJc9YcqrewpByAFsEmBCKFzFNLuHUJzLyMExi2ULE2zDGNBaqLWDFz",
  "key5": "25v9axKyuQhdAr3dsU38Dnjus4oKu55UysBxyWmACyjGEyV1YpeS9TAzpotWxFe4mH2dsZrWbjAhs6M6X5y1GPr8",
  "key6": "3UN3c1cqD95YFBDMzjGT5qu4PujR4c4EYskg6dzDK2j1WX4482GTYp5st9nXA1NJCK5mwHogAE9BXjo45w35XfTG",
  "key7": "2vEFu1Q7YPEHGctxGji46X5hBkL1FQMMgTb4vsZToWs7GWCqJn4hTucyUZWM936f3zpJfJPncNe5jFTWzRVyMMHW",
  "key8": "59Ur7VWfsgzwRU8AF2P15JBDq7QY6snA7DtsQ2rPJkWEf9Q2a8tzfMgRYCM5kgbvrrqDCVHUymGKUyNJvAvWx411",
  "key9": "2weaxfsZqZKdDEWk14TfzM5baysfUUKrCatWnNi2iiPA3jC9NUNT1wyphRjBXESJwWQJUCacea9h4yNJWYHumJsM",
  "key10": "3dSdEDEuFwYWDDxioikqEBfjA8gqSKDvSNpEaX7e5n47qBBu1SYSntgH8cLSTLwq65rskLJt55YWgQY9bnyW6FHB",
  "key11": "66pmNhqhhcDcf2mQKHg1C39UiPqqn1Zew4kByAsm8Qc8BoWh6KbLyimw11GgibFLSYdpyXvY64CeoJThsp2j1Lwx",
  "key12": "2QLnJm3GMsusUuNYdMsjZbGUkihVFZmzGsxQFf8gvNJo5DroVYSHPsELaaYLESzZ1Lfdabnwcyf4iT2EKEQGfiU9",
  "key13": "tkSayXxwr49R5QmBA69ELoNFcdFyEeUMUgJyvCDFwtaymArBnvZZnTQ8ujDMxfSW8M7h9RJey2iKBDjCBPjGsbJ",
  "key14": "xkMeavjkhBfiDa4BDZvsFfjdiyd4dywKQ2P5ChWMiX8YtgVaMpSMRyHRBNGT4uQJgQ8iRpzNhg49uX82ek7T7an",
  "key15": "92HGqH6GUMmaFe496LLuYKwQuLAZwBHZJL8cgg8GGzozuRAZBRp8wLGyEa99MATWbnBZbijSMoM5cYhboT6Qmip",
  "key16": "BzmFVHHBkSu6q83izbKaiv3tDe1CEDv3w8jurByvMoXeDDvGH25xhoHLuZvXy2dLyQRjnWeQEqihX4rhPVL1ryf",
  "key17": "vA35Acx2k2tJtAv3Umk2TsmWFaGXn8C8d7mbPGaB95mRoynTzcGSpGy8uWHWmkaqgdc21xkMbyGFdTGQciEaKJ4",
  "key18": "3Eq8b3fd1HmDCowNz7CbPAK9gRr3m6ncWz7R2hUoVAYmemFqGmWzqP9robDZiyywv5zBM3dAZJycCH3gFYCLbZ2N",
  "key19": "2rUppAFo3NbgEZULGmYeTfhaERpcPaHd5M5ksnyAYmz6CswS7Ld8uGLtm7yvKnhrYmWnroi9dc8HPE4TarbojLMK",
  "key20": "2Amj1Bq9DDyDyyZw74EzYEkKvchp2R15bUxXzYSbF4jvzjddRZHFAbv44jER6Zw9TVVNTxg9hwRhwxEfgwxk9Pmq",
  "key21": "2cKJZ5G3hL4JuksYNiRKWLm9q7QsunpKhrQjUqBuy6ze5QCCqnUmxi33HHe4G7AUMwUKsn5oEnXfY5gNqxxatDWj",
  "key22": "MBpk7NAKxn1EZy1b7oBbYPZX2YgdpVDffoPMJeVMgqnxC68zxUzLNT13UBsaxJYiWwDURecdJCfzqE9qCP7k6FE",
  "key23": "5RmGocSYceFvBtvbTK4iGoibAA89zLR9pWYpQsskSeCEgjdHriodfm6eouNcGdoT74fx8DMUP1b5ZtNikfNBcxab",
  "key24": "p4v838NHoewq5sNzkQd4zUosxtvkZ5pnZfYX6ZpR9gSb5giZKF2ZXpuyq3817iiRBgWPQbxDe5abtpk4EKVfxAH",
  "key25": "3d8abhRVWgrS76zipUs8btqrNXysbgeQmMxKPWbVU77eMYF8peXMfmSroGLLCsjntdDK6zQkNXR1Dc7v4XCv2Yt9",
  "key26": "4ocXADLGJT2GpbCawQ36JfmLEd1QKEM91e5mLKF738wzKBW9JEztANGqdWKJw2LaWi8bTxPNPRq9Gnwe7VMppTNf",
  "key27": "4jJ7UbvSUXibubhXg8kn9ZiNSBBFCXSvz9XKLZmefbgo3gcbcPjyjci6eRiCKgGiY4fkR4A2qrwrviLA1DFEpTdN",
  "key28": "4NAYmMUDuARDh2djVBRFbD6r7qfQdhYaYKpPTVaAQZsTfDCpA3NNwk66Y3PHpjmqoSyd7Bd7j44pYAaPsD7FLZcT",
  "key29": "556QBVm1EeNjR11YiCBa8SLbjPW6NycBxjzptmmpPcHSw168V97sdZUtzCyhBRHPh2a9738RsWGKEY9hWjse9czF",
  "key30": "5C1cGkYkGSfMMdv2fvVtpyrinc8bKjcN7sP9FqgBpgkkVQKYyXVDxXy4uVfaZ4wh7rPmxQLLkyudkXYYjidpkRBk",
  "key31": "4HKXaKC65KujwZuvbgiZgN1RbJirZ63weQn1whiBHtYGop79fuqmisqE1Pn2Kqu26cv4npevXNS1QVAtcPDW2zin",
  "key32": "W4d1Jwktz5jEHCRPRiZpkWcdBqGjchGReK4wHPPNR1ak5F4FiMJVYCFvzsbbkn2XByNxSprLRt64NBPKXL5Mhr8",
  "key33": "FAP9TgHYgWXUuy2a5RCCWTpvTkMaWtPKL2BGiscCb4FSgF1JvEYu8YFLU8iC5n3kLDYPf7ykkCQ4UnQE6aCK3ds",
  "key34": "zWXcy6UZuH66AeZFLnXiVopeUWB4rbu1jMyR2umBjJe48Cwwi15jgEG6N5Foja8Am8fy3K36yUY1dTS4AKGvAWX",
  "key35": "4JuU1gR572FYjuQQ2UFcwk972u2rTtv3LYSFSHfHMnkqhA9XseJAomiMf32vP1qxz2Ut4qe22dHw6BgTFTkatNAb",
  "key36": "2Sd1ueuXhz5vE2C4usWg1UukpCktcNoUNNqZRsNF55P3ZApxgv3HnP5QdgPnALXTh3hrZeXE1ii9SHLiT7RYubQ3",
  "key37": "5HRVMsjtLmX8cjfRsQskK9NnZGRpjw86xkndLr3DNVBsBpTqABUgoitBXsF7n73en9EWjBgAqKcwqWFzXxRNoywt",
  "key38": "3yUH5soX5PXD84nYzEV94rxHNEhqbknqDZBqjdEde5dSZHycpifRPLkdmJTyd4QEUeXzHA3eE2qRTbYgBNAi9vwh",
  "key39": "kWeoRWrgcNFecBYJCRUpD2WQkuR8AiksJU1ieicY1MVRb6BPJGnZxfSZoGPTrG3CyRGP8DhJXjjvP7NVSKUwiMD",
  "key40": "5BkRSZoKoYe7NcCjbHf35BAusXA5WWkFfUMQAXuH8BHTsbMuJGL4TAKhoe6sFaWJXvJAMVysPJkhWUzCfd1k6wqD"
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
