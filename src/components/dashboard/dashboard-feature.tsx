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
    "cZUUV1md3QLGdj1NcA5b3z9hLUTbkQocnFrdeNpr75z4DZ1QLoxz7fdAWFvBhj56AoPd8CiRx4FDnuoCKVuipwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yWnf812PfeU868iJWuduGG2rCyPJaohkh7TcCD9Givsoo7d5rWhTkcFPQUSdFiTR6FmpZNKVSrHeaSZTdjgwF12",
  "key1": "Brk75shaVuEuFdALtTwXKTgwv1LCmkMwkPU84sGpZfLyuigQNzhb4A8joNudJchcuRBw7vDVyvvRkEDnAzEyE4L",
  "key2": "5iEn1ANJEEogCeVucToMGSRsYNfBhr1dZQVmup4zjEjwdFJLyUbPC38L6hgZzRBYuxvdG41p1UN7jDMeFYD82moB",
  "key3": "2HTPSEDd5tXw2dwY3kGv4ToQEU2DBNnmMwwYp1Cti7uPrj8TirJcedkxGJvSdMrzbbNL72ST6byzSzTYs3Pmd2m4",
  "key4": "3bcJopzzYzTqFHXnFz9VCqjQVeNB2r7sp7iTiUHz8eT9w2AtfYtsskeHduuWH2oApuTpYs8niweFqoqDnZ4gqEXw",
  "key5": "WFYrZmkX5gwNBUXTzMU7Hd3DzEztwhSVbWtUWo7soHBLejtTeinoqDghFmBoXod6bxmmJviKWRV48kuX2nSJ5Tk",
  "key6": "4GvWyzuLFZ28C2crGqep7mRiGM7LWjzQma9aZVZGTZq5A7jmHWpJKxLUyznSjk6BaneQiihp9c4VqaKJXTdFRDab",
  "key7": "2QCikP9HW3NiA2wNykBSYh4RpczRzLUdgzUtAWJyGWi8CyKchq3W7U1wgXTVdmbkezPXXs5oMxm9VuWvYEyZft64",
  "key8": "3xtkAMFMgUftqW29AnUxZuJGhY4JHebbavViP12tX6x9SCobUew7DX1rCPrTtxWpbYqL66fZBmjFkwLM2ee7r8Y6",
  "key9": "2xadi5iNyYhqmuF93Xt7EBBYsvhcsvoxDiqE5QFMZUpzBNfmXPQX9E49pvVdfC9t1Q2p5wwLiiYFnn9TrNKNQD3D",
  "key10": "3sVDfCEdeZRkzKi4Uwmrr5z5UhjLuLqpMfq474ZVQSfRUpPvbBS1qruVugiSCcw42F2SA3p4sj2W9msnUFsdoYCv",
  "key11": "3DBGjxiLbPT9vSr4j2XxrGgq8xgEoBgpsFeTksb1M4RXQtLdh3NgQMNiaaHAEDedetqyykdyXs2REuASwK9JSdbo",
  "key12": "3Z2TJsaLPanJxvBohFyfWrKuuKoQZZvHc8A9rWXXwasxCJwt9LVmucPATMjhhf4LADSGyijuiFKxQKBpy8mQuwWZ",
  "key13": "de7NwYHdmN8FQawyL4RDdsuEvwBegVtYPjWSpngZqcVVx8zQVyjrh6tgAHJ2vCDR1E6Cd7d5ZQLkErf4ME9UR4V",
  "key14": "3ATsmGLxyYJuriFBpcKC1PsoFNYMzEiN9LAkmu8gRsRJb9noCqvg78vCnjR9y2JbWr4ni94W3V5iG8UsygrkNBds",
  "key15": "28FzgFBJJieyzaWCCkUibkSiFXBxtHP6wyc5SsT8YJtUWrScVaQ3STba5jMVaphy9WUvqkWhcv4fVJX3EFHmVn3Q",
  "key16": "n9f9R2RhTp9Jra5VeHb1xM2qsXcFknbrnJQgbTskFpzyhYbzNaN4nb2LjXGbNVfezMb5RN8kuDS1JE3NTsEbfKB",
  "key17": "rP4vSUhutE6xYcFu9pzYRo6LZP4V3yRq7k7ezfKTYUtB37z3umK7LC18ryZnaBKfdJbbq3Y3mnRQBBB2KrGwLYv",
  "key18": "2yzVqfDnY7XWB5RtHuVepf3mfhE6AFVjugbn8hkddj25zR9TMXNr7Ydy5nQzUw7vrno5oUeBsVj4nDK5TfuaWb6Y",
  "key19": "4fdDh6Y1kbuvukHV6vY1qPD1tDrzTLjWDPbfE4PV2E1hrSnaQKikfrSfXs2SwdMvcEP8Y43fRiN5rHVYPdPHsG39",
  "key20": "3m1DnVkTnE4Gg8Lfr3Nwi38sDj58bYVLGPMidj1LsiNEB8sxZUdppuu1FAHboEyPjvNni1sDzrFQui8nCsH1xPgU",
  "key21": "4HQs6TG7iWzZhrqzpyi1qXkzodX1H7HJB63kQaDg6azmjtNRDrRrPJ6UaxwSrFkZWCQukrQZMKjEJmdne8t8oiaz",
  "key22": "4T95FcyUEzZTMsEWsKDZ41ffRp2x8i3ucdofJeC4Lw6WQjYUQoddEDsBuTLvwXpWYBzm28cQEd7e9PGS3gbeXJmh",
  "key23": "5pTbWubYkJ73uepXMJ9gLjjJFwmhA2MxhcHYaafTqVx5TJbejgyd9HQimYcDGu5LoV6PM5Jp9acPTU2oAYG5ZLZm",
  "key24": "3w71mn2fyqhvEpbKviGgd316SPxVjfs7g9S8q7dsJtPtoMCdsqSZnKvwBmD4AFtveAceADLSrL9Lci1WwkWu3zm1",
  "key25": "55HmbPtwzUCL2omtzfKRunXNQ58rDCkL1RLtP8uyGzMZAnBPEPwCDpXP2sVax3F8i28YQ3fwGqqBog6jfz2S6Gxo",
  "key26": "v6434JzBuJgevu52qDALc7vaWrYszBADwtrrkwjjqxnLNeR99xdZYZFuzXmkPA8yUaWgHAgmdfHFj3Ecfg38Hyz",
  "key27": "2bVzNPqGfH5n7BXSRaLKxmxT5GRq1E37nt3WGrEu85VzKKuXxHgubM2WdxvCuCuaAGrpqXWgs7qzt46eA91Mh1rL",
  "key28": "o2yqwujZYavr9Q3kw9cf8xHaAuvLp3NenuMV5L7MWWrSHsTEPYx9vnCzgVNC4tY8yQwJQ82gsGWbeqXECg5sgif",
  "key29": "3ChwjEoeMKT1YRFPXjmoDoLXB9MDyhbd2D4NpjooiKfvByWoSeWr8Eh6oJXw7vubMzYsD21dossgZM3KtLdGyXj6",
  "key30": "BiLznvXFPZrvzSFU3yWqyhAkMuCSKBPmCqN7DnMmqhhkwuZbpgriUWio6hb4VgVnnPwbDWaqytXsNf3jkFFG9mb",
  "key31": "3koZKU2usYdP3hTeszDV7DsBPhZizhgmgJvMiND55ECqpHzRy1eJNjHyEUD19vZCwnjxq3eiz46gqGmZRArgVcgo",
  "key32": "2JJwybkJqxJBgq5HPYZ96mcHfyqQwsFsHyxFCCPtpFC7idUkpsxQcD6LBwtbLFAxffxYdsRy6paCdFPESdyXaoxT",
  "key33": "2AL1NtedFotCf8QcEbQE617UuVsprYxs6DeUgQmHMJnZ9GyR7xCPQt3PjWoMjncKeFUPBiFgvxDFWhWSpJmCDhU",
  "key34": "42meTia9xTzofBcA16PN7ZCScp8DKbygyHwjbUTFByEd1PDRjqRFHeU6CzV1LueanZjKQDXXtuSN1bwvsSBNh5No",
  "key35": "KNUoQwxKNDgTDGE27W5Bsq3nQGDwXdmMw3twS9GqU6vdy8nhyEpQzThtFXqgXykKd9Fup4zntcekNkYPGtcYcQm",
  "key36": "5RRCDWTyiPJP5da2GaQTiQ6zwKEJPszSVbZRtVYQAdNejdfHg4waiuChRqZyoiA1rfovqewoYv3eiYgKGJfDYmJf",
  "key37": "4GA57fzSmvmbQcJKrGJH3CYrPnios6Ru4WJhYE9Wx7mEjvD1c3W3u3G1zjXGkwVE8rxE1sKDsmZ5CjJiKqk42rHF",
  "key38": "3y7fS8dLx4uReg4jt1PAbXVMue3EmZDyYiPs1gYww6drJWr4xVsezNJz3g3dz6sZFewjv7vFxAZ126DFVFu9RGEs",
  "key39": "41duWXftZwTB2Ks8CBJDhHDgo2DfWGJujevsAFbdkg3aeDQ7Ldgnap4XQbQAkG3QVYf9EM1fVRo1XvinMdkaaR5J",
  "key40": "2BBaDzRrRC8xvSoZ7FNhSfosPABBYiM2VjXkvt5ZSTNXYEmuEJ6tmyEMASxj9MQAsg9E6kxw8n44EbmUunUtmvTU",
  "key41": "3yhc1C5SZqcdM3nVy3Nq5SSgetn3ZgdANFef2BUnwL3LaXUfR8AYQVdDmzVTc9GAH6Lu3Kd1Lc4DE7oKWnmUx96Z",
  "key42": "3ivMjPn3eadKVvZ2VbS9STCPsahotqXns2M4fkcvALhDShqeCmrYP6voXQudahtuuenGAdbxthKQ2rYwNiZschB7",
  "key43": "51mYVyKrsAwJHAxqruBFPBpcpKRJVsCtYLQJgETFA3tRYznbzvQ9GAcT3Si4U3Y3AvwKhF2aoCWcWxBFJKJ2LCwx",
  "key44": "5z6PBRLtUm1YMqpwuXdRsZCZWJ78mXALRYcFY6iX1Q8K5i6gPRdaDLHHdDhMZ3gDuyCFhqsQcgP2aGTznR34Y2Hr",
  "key45": "5TJifrcrAhH1MLGFWaR8vAFCW2MmPiWnGApzbdBb7J9PQ5kknAdTNRUKsn5fvGXDLDenGVyUxZJgNr4AY1f1SB2a",
  "key46": "3pwZEgDh44XYXyKTTv2oJorXvs7TxbzmhmxT4LXm5pmJmCYX9AosFrZT6XiW2B2BNeL4mXDEMT5iunVscY7DDqKe",
  "key47": "3R6VDgGBtnjp4Vr6WFNvJM3drkfD7RKmhuh8WhxfxUooMguS9W9Tzx9fhpzeTyz5831DMxJ2HJ4NGB119XmXSXDZ"
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
