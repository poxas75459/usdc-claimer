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
    "4J2t6mxiWudd3E4gngRPzhbhWQn2RtLmPwVp23oTKJJv9iJGMaox55A2Ys13CkoRdHHLpyppGZAnSLtnGKLc983D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GaiSYca6UPMmxyLFaSe28ar9JHzJQGq9EcRY6cZEGbQZ8oZ3YVuDZct7nNMH9FSZXr8j1oQeu2Tb5BZUXN7yebG",
  "key1": "3Dq6QhMLNvf4wWEKGHo4hx1NJTzgt257YPBAFU7EsBhhUPmFsnFwus9XxPcgbUcBGUcmtxpvQZ1uXQeS9kL9c9u2",
  "key2": "3JEPRCXHCXzpPjYnC6PBYGiQAGQiWgzWCVSxofbtzYooQwHVyzeyGnWoX22sDvLa7qRmWwJgK2Moa4P77HQx7Enz",
  "key3": "25TsCmD46KAoCCc3gwqXsHZrDqDukHcKs45Pw2jUWCnKqoxqZjuj5wNFpFpxK3987MGKx75d9DxB76Mnb4Qq48QH",
  "key4": "5QqxwNUmpwScDM2CUU7J5YVGTAWwqwYxSfU42ELgtjxzVuGFGt3k1RF5Utaru8vB5ojCVCTcFmX2v5WtmUXdy8Cr",
  "key5": "5DwJup6Tb3zFNCk26rvfBaJ23CJ7eguozoGaezHV56nQKdaHDULHy6Zid3C8B3gJ9mT4Dp5waDJcatwLpmm3Breu",
  "key6": "27bfAabBPdWeVv6K3fWTPvLbe8ApLamyW2Eycou3jKbVVFmZgiczLQucZGpa53Gm2YHBdt1ELKWbCkjn4ThbAzto",
  "key7": "3DhD74rZGZScPALRNKQxLN98fi1UjnvesNhtSCzn3rTaHNktXbCghzS1nWfMFWUwNEx2WNzhgxX3UoCrND4cKwY3",
  "key8": "3mQZtdnzCNSYsw3sHJtxGYoDMbYcoM68EDppDBP3P6hgjmQ9KetnkzYLLymUdinegEp8zwMqAE6UiwYPuEkxPGar",
  "key9": "3FACyj71b8QLWfN97Q33ZnYpz97f4ngaj8cZLNZeT94efgYLemHSqBsJNZbaKu1aXaiB6cwna8NeaVEbPbctCGdY",
  "key10": "2YsqT6Spm9uzxXVwJHaRNsMBLxNLKJGZQi67FLQH98Z3uwtg7vtsaWFukwyHR7Nzrj5X6o2zsVMw7vhx2tk1atoH",
  "key11": "657nxSkhCurXZhKgeHzScAMu8CNKv1ZYkKYhsWqE9FKMULkhBnzKb1rETC4WvrjYkTXLn38RpRvwoxboC8bYGYFk",
  "key12": "5MGMFykbqwdfNG6WgEzaXfu5icpSVvPg9h7Rid3NPXbkoKxUg6HjQGrTYdrY2xBcATbCnwNgcVkMEY2FnvX1SNX3",
  "key13": "627d59fj8FWQrGTSQzNASLkQJZhQvSLr2KD1DJBghWzk4r7wUwtv7Ymsjw5UVx2LjKQBhDgynFXq9A36gYygBUBk",
  "key14": "3CV3aSWVFxuJQpcMwX8aDSUaY2zvJ7t9kcBW6rWYQ5Jb6ddSfrpd3ptLwKjoX1UG3PXcWCfH7Sbtv6iZHy6k6jFk",
  "key15": "4MigtcfynTYheET5m8wkhJGbXZC3jhphXJAxXDbZ285F49adSt4eK6zL8gga7HbFHXBsRwFf5usu9hC6DQAYWsFS",
  "key16": "6TQhhqvwU7hor9H2TRExEK8pyDfNMMF8zFyUaKswsYWsBBarhASeprAABT2K9zrHHXB7dxKsLi1jBbpmeiCqwLk",
  "key17": "44q21BRb6oW69e71eVowfv4LSV6mQKzdFDQfxJy1M4ihe8eQYvzkxKG7FNiDponnkxLaVeg99yFwFmnLWzxTLNGR",
  "key18": "5Lg8ZzEtdy4Lw3hhNe5shNowxqrnxtEA8bWn1v5NMLyPDAELRYyLzu79qr12vGTzcLUN4tzekSfVJsUchFK6Vbr9",
  "key19": "2zjZrW2gZJJ6DqukJMYN8MJtYVjXKcQoqxfbQQCDMbWqSpv7xRa3wnTfwWTgcNrFBvZAH6mjydQdaNXza4Lfvg3R",
  "key20": "Lu82Y5syjyASK31PS8oYX7FTsrirW7EzMxHXy3gDLUW7Sif13ufoWyhFfcvw1ChbP19Bf8eKKwvkdVoRW7NTitr",
  "key21": "4WPMqfMPR8ihCwxfYDsAoTFkPVHUdrfaJDdQ24JEfyqDG1BZF3wV7wKThFNfgNCfkb35pBrHojkje6nowkcSk5Ah",
  "key22": "poBkS2gHodTuAGSCe5VH6ptuYEar3f7tehLmtgvBiJFiKY4RqiDUUGnoJftB3jNq3hrreg3uWdbBJWhKDJf2aTM",
  "key23": "57S7YtG3XfHvHXE5frvZJQKG4oUWkedXgCWQjEgJXpW7v6AiQnaAE3RJ9ZNYyBWJU9H8UsDgXAMeX189jPMHKBvQ",
  "key24": "36N1tAvXX4Mq7wu7ee3JMwEDvDngSTASGqtF4H4G3WCpSqxZV6LbAZXJfj4zBGkSAo3wmcFrCKaWfABacFBqt1Rd",
  "key25": "HqGSi4rFVkY89zSf944WYNoB2PRpRaap9YphEnez3zuvVUZEetEHosNdRicqWCAPT8y6gPr8SZbGhLncvviAV6m",
  "key26": "4mRM18KQBs3ExmqpPNvPAj4bTMQjN2rrLsFJwbWinJMdwh8Yk1tDYSSXsZ6xfN5ub987552QWLBirYKXPc6PVNRA",
  "key27": "27anb88Dw9cTRrucrjqXM5JLF1j2U2pJ4sQeNLdmBL5JhQNNcY7yS56nUJ6GUSjpMXpwSYtSiy6D7oe32hvezGf4",
  "key28": "5QqdpSKafBcmbApsFiBYbaBWpCvgNSRGneT1Efa1DPQgB8d63dJnWATekJMYy9NcYzAsjBtvVuPyk84DeXy4g9vY",
  "key29": "5odu9AKCmvPdxyYv4reN8M3mi33kAdpNa5s6FuEwLHNFLCgX2c35KfzM77og2ZsVx99pzteFZpPgnBm5mbdbjoEQ",
  "key30": "NPDrfseLqswHTrTiphDtwTYJb5a1ubtAER7zDnmcyJmDo5zrrbjSN5Q6SJf3evQgfvrK2dS2ZZ7zx3n8PSnjAkj",
  "key31": "5jn4Can1ojkMpW2eDvpmPPWfSPjnfwtfF4GTEUWquM4Fh22REcbUU9M2bN8XnB2cY6Xi9ccTw7sG8rscBoYE4Q1j",
  "key32": "aeLwZHhHAPcUPndXs5U3EkRi5KJQf6kbFMQYDgZiGUAzMRxeNasxBPADMmiQB33TEhxfLikC1Tk7DjJnoJZejNW",
  "key33": "4ydtj5CvG4J3N8UDDd15XCReNWoAJJooH9ftcrJUAn9GY4gj1HG2JYiLYVDPRHahUNDqNAu1e4jeUBCp9rfpqrLN",
  "key34": "2Riydqp1CN8dCV3G4mqW6KryRsMHdsGZVLCn4AjFEaFLBfQ5MysJeV3FKPuNR8BxQA7UGEB7NZbLUPFMBmBFR5WN",
  "key35": "4wVyqXqPgfbcmAsKN3HHFD7tik7pfpL5W5jbboPrJsp3rGtnYfFWufRAWzv9kHuVd8vEXyJVScdhSv3Af4JxGD4U",
  "key36": "KLajM47agHyfRf5nVUHtixBKEcn6qJfTbSpurZngVP9roZRRy82BAjYGfMfJXRkQiv4LZNKw9DfHgDNuhcWyC7B",
  "key37": "4Vq77Svw6jTcm349VW15o2fLagD3t1z7d5jTrcod2YWpb1Rwf22HDVUWjVuUS2j2qbcnHxnzdPANzQpvNijhJFFD",
  "key38": "414NqZzYxcZgjUct1oTgviESgy34Tw4Lw1Y1oT2A1XLbLoB6kxtLJFa74mEqCy7oHzJuPiZ4vx4nfFFe3rne3mi1",
  "key39": "NME73VoBDUFzrLBcPJvvydAvZcbqzshj3pWYTeBDxi3PccKpSNVuME7q5arcEBtzJ9tXYKfaHMHKMVCpcaWm3P8",
  "key40": "2S9MyBXs8UsFme8BXS7fuuDGHsPdS7FsofuLQUCae8jToZD9g8K2pCLvg49Gu1Ji9fVAU5VwGUVqyUnUAPT6tfvB",
  "key41": "5EZn8kA4yttrkj1eMKS4fBtpLv4E2q6tdm8dWrodWmRb78iDWUDivomyt5LBcn1nzrbWLUP2QEqixxWj55SeS8gK",
  "key42": "3q8tyREt9zVUgmeeVAnv2R6EpH1At8poXkRjU65PiRknoJ8bEDF1TveJiCYa79smWwTYQANBLFFFCZ5e3FxeoWXD",
  "key43": "3uHSuWke9TihrawHqoMsHQp4CBkTHEW3TuFK7xaKYMGVdttiYbi9wwerEPaFWHju7E3Vy6pbF58a6oHCVzHReaXw",
  "key44": "3yecmQzxfv8HbpLZX4WUhycm96ihMpyTyKjrMrFMr6tDRbX9wpAQ8peztiEQteiNpkcbxM7EZxpEwhwKNHqTWsDc",
  "key45": "2nC5NuwzSw2gfX6naRNALqbUCBe2mr9bg1mw4pio4uPF57LFDyUxi6CGpi3RM5SE79kYqRzPWGPVrLWfnkDpsvPo",
  "key46": "h6YvRppLkgvzXKge4YjWVgiXcnjcKwkG8no4QZGT3aZoPYswedNt6SVA1eufxdhHRsK7BNRFkoAJXhhkYDkaSsf",
  "key47": "4oS881eRuYXyiTACf91XAwMBQ4xuKwm3CESHw1SFcvgaroonPemcg37XicVjQugcDTtSSUaEaiQDSqfqBkdrvMHx"
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
