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
    "DADDAkRmF2PSFLUAwkWkXVQPXM1Piisxd1z7GYa3r1P6ePHHsTqcRUdceAShhwLhM8VeQ7V7yhTvkKteBkQh57H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MK3q5MA5t6gv6CCj9ZGYFinrc7fmTRrGne7551kFyJWT9STtMsz17EMHwGLA4WurGoxzM7QDb5ciofdzAie2L9f",
  "key1": "4LR4FTEkHoHST2wZreK1jqs64QDHZKZqcsW7kc4P1hHx3UjqmE4wAsR3aXrwhVs5icTA7sGVUTKrpfS4PPq8NetT",
  "key2": "4z217tz1tt7YZ8TK7kxKuhXhPCWVTKQ5zhEBd4uSVUVSYAKpd5kToko4sU37yPzXAnUgQWVWcx6pyi9k98CxtJqu",
  "key3": "4CpuLkT3MfYRrye6wy1nrQAtdX8cbQ73zdsF4kgGWpzV6T3T4oBAqP79sEH9YamNHj6M1k6PcAAYFw13D4bEgVbD",
  "key4": "55wPP9NkgL3pcp2iUywfWYvjgLufQHT6LDL7xytLxaLnQxzYEL8bN69qPiB6NZDMBPyuoSu3L16cpy47ethHu5Zu",
  "key5": "4RWxAYG9gDKEnvdZg2darobHJeQ8psf99CJUDdA2YZt7qQEZ1Xorr3yiwjTsRVivJiJqKs4uTrTJesf3ujPhpHNz",
  "key6": "2C3CK3J7Uy6qp2oG5X48AKSZcs2t3WBpp4m3EAdMV5cmr39bER1Po7wuuCLGm5TSVDvA8joFPLuuqXwfX4oSyCaz",
  "key7": "5VdQbUwWvnxHy2BPBDs1PAxqhdtUaP4GNNHqg5dCjYQk4bA2JsvE7bKCV4fTHozy21kZhwvLu9czqCuhNFWJgMJY",
  "key8": "2iLZsGki6H4dfSYYPGQc79rhnDm5sPqZsTmpewDAdpm9a3UvNHhjqfiUogWHeGofv3niyheRgiGJmLoMkrHq9mbK",
  "key9": "5Wq3MZ7PksFiY1qYQyGRZLApQxqdKc38gqTViKcb3UUgrAc2TmyKynP4CN9gXsySbYSgsSccCEQowVgzc4n9TkGh",
  "key10": "5RKmybC12TpKrJGYVoyL7yTzC9Aesn7paVK2jTWJ4N5F4gm98g7HKx1jw4tdo7wKjb3Cip7YtgJqhmGBZmYVNvQ1",
  "key11": "2c6nuc1hKgznmgQbYa7i3PYCQ7ZMYqqFHvGet4VPVvXbh6eFTEXjai6BXbyS3mhHbjDWfktyQMQGNs5SGaaSeiJ5",
  "key12": "4Zvxcg5KwD8P1bhKUFhqGCgPnJHc5vgCL1RhzaMHYQKeTs4UVhTfuCWNYmbCLDVep5WJtajmu2pL17gkXkuhcgaT",
  "key13": "4aTKo6PK4jZKFHBVvsqT3AnDDTU2t3TcycQtbyKhRgrMf5ivg5djvnbQaCu72PeXm6pRFoyuWcxLDc6mWzgJgbw1",
  "key14": "4MdpE6Ru5jCfreEiw7fept8CYqWzhTCQer9coXPNA1HZAdY7YVcrDStQwM14bk5uFTUbNMCjCybna4vD8stQNDfw",
  "key15": "2bDzzzXgjB1uMo6cvzDn27nMy73JMeCS2c7gYxSoLZvH4n3iJqZQSH2gCGbyFeCcN5YFwwbRBum3rxLX6vfPJdjf",
  "key16": "PG6TWFEyzYPN97ETbbWUqMn8Q2zKoKurQvg5z7uYRZxCaSdQfteyAuzLQDmRbodnUdcZ93Pwkdwv9vfKmaGgWCg",
  "key17": "2kPKtfs8YjQVvKFa6ipapBComu1JDJUVAvviGBZUayyH3ivahEm5MH7Gf4AyD15cnqPTTuDeceG84HnuY47G6yFu",
  "key18": "QjiPrS3xVeT72aTAr4nDeyFordFBR9JvPNQ5vzMouApNXGqPKak7Xeo8b3PeZtGwRdM9H4nyrPgeKw9mrM6X79W",
  "key19": "3csgTDcjKWJXUcLwhyyvDruyt9TRFjKhrLn5FktGbxEqwuRKieUG4sHioQLCnvRnDSfKwMF4HQgnVBNX4CRKVoRd",
  "key20": "5A9KwSQnJRTfuY58pPha6ygv6FFFGhKd4nb1ACXmoKmcR6E39F4yfNJLBG4h3n31asprYU1PQWKy7NMaYwkGmxG5",
  "key21": "3zdUXyzdJNm1W2itTzrA3mUyNFYY9VC8LphnzZTNrBe5fyTxcUr6xrLSy7SaGJ8RiKb3YFt3wBBoPYPf3tzYfP8p",
  "key22": "4TuhCCkvEi3E4dBr6ffD3vmam241CsHXF1BiZAMAFjkEFK14MsNNGM73UP46RixVMiHz3w99dnjCQxH2z4ttb4Pk",
  "key23": "buNFSfMYxEdvPGhCCsxLLNHkxnU7krS9W7VDeyCos2cWN9veyjyFm2GU3zsek5yPsTpu3rRbHTNvZjN5jydhssz",
  "key24": "5uAEkh38KD5iEpEjkrT8HcUaheRW72VBjsRjZA8jDVWvw29gH5N1c5oPaSxD5icFMDqJv7UchYYH2VbzkHapto7K",
  "key25": "2fuvBKSvfjf5wFGdFK4NbH3rZmgNKgTKTEKFNBbZBMLqcTtk1HrndYrkF5cjXk9tEgJH3txHAjuuGHth5Hq4pgoL",
  "key26": "dX3z8VsmpKTinzT4KzUpcWhGMEfDm2DHbPymS2KhQCT2UDkwho4YG9mLDkFhwwA9e83vdyHRcHsfkEcpHKKAgGT",
  "key27": "39Bu8bHmkRDCiA1hfMD5ik6u8XscvASiSkQ5UpsjSa9VtbnQDjzVBUGujiw1FcQj8TFUtw4Qv8VdoXkk7L1vASQ3",
  "key28": "NkqY9a9VKR6kTweb7DNZXveXpPMfrgdDFPX273K1SPs75NJJYgGbJjBBgU1L4Kruaj2rtPkJPt5i9fDKxi3ejFY",
  "key29": "awiBN8EDKEjHPvUVsiWVRDp6NLLNfwpwo896cFZjVbiJkXWnDGdMPCtRUGjJUjJwsh9E86MRpPY5Gei6urEzref",
  "key30": "673MWSuYNWGM2r3QRkRS1CKerjtWs29Ydwa4H5bHJAkYmNxXspRXw5WVwCdahqeq5VWPDtmqiEEDCWAkE9SL2Tte",
  "key31": "2KEa31Hi8yD6qeqywBouD85AFjWn3mERGELy9JyrR4LCgducQ8wjy7EziBdZ4q8dLWcPexH9fm1STvsbsfLrsZAJ",
  "key32": "xL42V35UQoAEJVi7iQXDLMkyuBcYyXkQZoZbMXEYLhVjLZRKRxAkyZoeJBccRZPPRKhbhL6ViiNCMAww4GUt6aV",
  "key33": "mH8BDqy7fUhME97hSBffQge5RQ9TFQmXMzQ6CDShW3xDSYPPVjw6i4hAGVbYYxjQMdKaT3SvS4YdLk8xsyjH7Ju",
  "key34": "4kJxERHeKToaBLTfPYw7FvQVwefr4QTRWJKCLh7M64kjKvLzRWUneruztyK9gxCVPMESkPgBhyDgMuDttuSzYkET",
  "key35": "EPegoWoecKAGPZT47VGR5hFS2AJTfiSDXnULLSMFzSiJnFXc5dDqFkWathJzm1SoPJcPVEVAjKYMnyrU6pKKUD1",
  "key36": "4YMGD3qroW4MNNMzeUEnDQmNhnZaBJ1GpsuGNH4nY1cUi8PAsNRbmER23Uuz5GYb6Nb5AWgcJ3vZwsNktzzpHQ53",
  "key37": "3XdZ9khpjoG2PhhKKb9JV7dosa7dk8zdFQdJ7J1rMoepKZ5edpGqV98bRELNVTHGD47JJuNToQMqWxHWPjqagma8",
  "key38": "52BHnS3fMRVzS8XeX9Agj4Q52gFrDeJ953gSkMVvRPGLRFmDCE1A67h2wbLqrGEMKPpDZ2npMgiYiFMLQKeucw5D",
  "key39": "2tKT21Evx8BKt72LEQ2ZdFwPNeyqi393oqm2WqkMQGTVL2RT6ZB3Z167o2RTu4qi1vhkwd7KEmAJQrB5hg9Z5HG2",
  "key40": "LV74CzJpEsCwdLwEU6xhPhAL8V5aoRqp9Ej3i63cKYL9TLY8VFCdrsMkzUTYoJDhwBwenj2WpT11qRpabK3FXVu",
  "key41": "tyYRmEPDeP6tcYqgKP1j3SPTYgJzSuonXwChnxGhPSCtq2teQwAqX24j8CEHhtzaG74mwGdrq5Jyjxf7HGWcXRQ",
  "key42": "2qLdZfiy86cduKzFWRYbCGZgBh4DGQaf5HCEN6df3RxxbKrRocZsMfFcZNfP8DR8tFrud8E7xA8MsD3tVuK1ZydX"
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
