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
    "5ZjtNVNtnZWBJXKawwCw2LA8E4ZN9QZrosxZkRXmhhtLdEL8medSjFgv4BB2nqFRWdqBecLn8uzRMFV7nwRRiCo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zeuznqik64Zx2R9eLSHUQnZLCNzJ7E9QABQLcxGS9s9GZtTqB8FMnwssmCv8BEvcAYrnrfFmB5vMWz3WkvPaf7B",
  "key1": "3MPukQdA1Fvk6kUVR7VgHMSdhfYsmVx9dBC83DcyJwKS8wqa8knBDe5GJSoybnGudMEfPiaLYpDVTr3z7ctFWtuC",
  "key2": "3z1HjJTRMC8js8z46M5bqkiUrh7oApGfxaFgcviypywC7sx3jKXxPwcw1yZHKeMZNcPCHtyerRUDbZHB7VYPQofF",
  "key3": "4uXgn5jrkT4CcsVLKaHZY6b1pvHegSQ12SY1FVaZfz7bqAueZkmbbugi5LwQpVLHeBJgSy3Xndx1jJqrMwX19dAB",
  "key4": "5jJShNWCAom765rkt31hzUhRxgqvAsgMT4pk5YmHgLCdgnEdXQnvNasB5sZQGThvsSWD4bND5ywQLcPuTwRs1YvY",
  "key5": "4doqqDvrj5BWktpe59wqq3BPLcXNpx14hqsMsGZt2TVQVaHvhUvJBidxPGgiFRSNyP4vqgheoX1G8Qu2GtPH3ibq",
  "key6": "4HodgcNTKsRaZudp7N2E3GpXvtBW7m3dDWx2ccVGGda84KHUND7j4ttLjugWAkivhMywAPTukHXSeiKSQQVzhprd",
  "key7": "DKb7FGadcNF4BeGGf4xRSjSEyeq2zQb6rLPqmiDvvcFgkSQDNapLJxvBHWz3nu6oW9WgPsKRqa46ozN6zRweaHy",
  "key8": "24u4RgscdWk1CHzQMQ3h2vqkBLo1B4ag9AgLVnRN4KCZH8RMDjobMqcYWnAaGaHstEjmLpVJL5xBJfibrqZeyw4y",
  "key9": "61pFBPLpnUMbw9rcQ2i3cbQiSEwyDPs1xpe585YH7YBcXa9bc9jy6xUxZXcS8nhs2ywd7Gj41SkQLwsXGaYveUra",
  "key10": "55c4hiCs13zGNLm95ojttT2TJqow8RM5im1t9MHjwrRF81awiKujQa1HjaFrSazDeYfr9UD3FwzAFjvkBw4SGxdv",
  "key11": "5WQ3d2eARX9ubeAJh3vKauuqmEhmCeRranPye1BdGiCmFWLg2ij5S3vgxmXUbnpLnLCpBhsXoBjRG3n5Y9s1LfmQ",
  "key12": "5B4xbzA2pkxuwuECKrTo4F8pW15iiUGZZXa1Y6hguDN2EjCxnBWMZg3EeXaMeRzWmR8RDUF4duVjpY3JMRexQeZz",
  "key13": "3CYtnHbrMmujWV2EoRAgEbbeCumnQYAu5NGn6Mo3s9em9jTFyZ2PJWpfyEUKBfHTeCmfH8rF5XJi8tF91V1QkcFY",
  "key14": "G33DfkykEJ4UKXRY7hRqEBWTHoV5SHd36h3A4RYvF63VKTN5GdcidiNkBoStTb51jpAHRCEMUELAmUpNNRiDnre",
  "key15": "45vYThgnwxe1S6P6PBrBvBySt7RTqkzNCwusJZt3ctQcGhdprbJ2Kow52VXdY4rLNe51d2EpiQFcaoCRnpCVZ7F9",
  "key16": "5g4Y91Za87ZTz78TE4Cws2GhQ7mi9kS7KqgrR6FiywUE7eDvotAjYdHMwRA3u5FL4G8qGbG3zBhSo9hXG9yMB2r2",
  "key17": "4fTqVM5bA79nCBoy37pnRGEa5ixgiW1eFS63hGPiNu7M7WuSbJes4aFRwh7xacemJ7yPZzkAB7n5Mjf6z9TqiNkq",
  "key18": "4zuAmmWmbvUUZfwVG4n7YezjeLhyDF7EVMKBcoRizABqfgPUhjbGTHpr5Um6989whzvPFL3occqYxyVnokfuQGN",
  "key19": "5JdZYTdaoVB1reYPoFaqdyhUQtkMMtBzqiUZa7cXaekatqQQXaQedcMFrRLb7tNbfPX6iV1xFHEKc1pzLU7iCM1d",
  "key20": "2umhSB3tw7aTsKrLwbegyqbUwrQJfqc3KSvdkYS6GmohvnKTs79H2M8BZ4Tw5BmZnBnnGqYFnMFzSeRuBAqSiTCy",
  "key21": "671FGarydX8DVnbcpVf9vTdw2ET8HRDcmFQCJaKLei4kLK39EETKfndCn3Px7XK9SxQ3wo5Wmyf4dZYXVGiUoyVR",
  "key22": "3XPDyZBgbK757R6vTfK3gbyTGLwGojjvfQWJWU4dePrQGJDnhq662FJERasTP8fynM7s95CStM22xW9WbQoYDxNF",
  "key23": "JEvSe1uJUE9HFnHFxnPiEk28KjRR9G1xbzwh8zVnpTSiu34NCagQUTjEFNgRkqNUuLfdqn3bVyWprC3gUu5yfvm",
  "key24": "3HKaxGhhtMNuieqACh8AUHDgZ66ZQjoJMYMyPgmhGBpUrutCu3hgzowxHnD8mkAXctxu4snwRGdC56fPNhsYQQwn",
  "key25": "3Y1TM86ExMrUPD8brPytfyEvn91FazfAEVtHEWgX6AD13LM7ALB6m35ArGmz7iT1hKDfPjA1VygVM2xf3eqt9Dir",
  "key26": "4AEUP4JSSZpG1ML5NED3vbYiN7JWn6JFfYuKTBjF98ibZ9xx1zfAznxaahWYtSP4BBHJD5vkubZL38WV71TLP1Ky",
  "key27": "5qRhRr4aHjuqJ6w5GPoXHzfpqhU4JA6RfrQnEw6wsokJojNbFuRtBoGBbBJvJQnk1mxbrcoUJs2HibvsqNETy1c7",
  "key28": "5xNBFXcKxMu9ByTjjbbHrNXnFUWz9TP7PzZ8nzdfcPVy3SjLZQXAGhKvN4Acaf7gBR7HDE2PC8wtowpRgYySF28z",
  "key29": "3XM3n7D5QRfxWgBqsS4eHSbZVHYVREzd54Mce1kNUfDqkgdMBqWuVcUCo2UKVjxox9Pubxbe2eA8bK7iQ7Ledo82",
  "key30": "4D49jbK3aAZzWqMrnjYFvZ6BUH7mqEw9zDLK26gJzxnAhHrx7YzpQGPxMef8hyn9SnD2E3rpXVXCg4buRCzYS7YD",
  "key31": "BykQLNyvm1bMrvuXR2jSFfT9Bc9MdaaPhhy8uLaJ3LHCBEtJpbLBUqejkT7LaZhL8nzab4cxUMMvFzoLnwc2UWX",
  "key32": "3w2fwKZwmQgctt34sJS6TLPPXCZZuYs3ykKEDQbaHMn8H43fxMFxdSFQ91vhfApbyBAiY7xitDxTBWj78fh3PFwU",
  "key33": "4KhuMTgRiwLL7KtXUthQfLWxVEnR3nmXbWJ3cfAtDLrmQPqFv3yYK6w1mQ66wvMtRrGC1c8LCxY92NUE9SndyrKn",
  "key34": "58G1sjvELPm9H9ohWFEPLt8PN6McgkN8L7okYe4iQvmvfL5j2VyzRBMNb498v4TX2GeHgrGMaPQwYe9CNCxboNti",
  "key35": "4NVFLvXfTvZKRRtMdTHt1nCa5j3NRpEUYhygcwpSNMvMuvrNxDGJ1YgTZfzw789ERzevXJCanRcQJTpNQVJjaAxz",
  "key36": "2w9G9t123QkmoWcgSyDFjXowyMtsifufSyEHN6FC414o7sXZPPVUdAStEoWMaDLzp9UWEzHjNAZ12mnmETZ8ZUSd",
  "key37": "4BmQHHzfvmoRcssfR5PwXTFQBtW86oqDRjJA8HRqVWLzeBpseE3mqaPUAb66umkp5tsnqTbytevHFEg4t7eraprz",
  "key38": "2Yqena6rLYAM8p2A8nmRtcZq8u3UV8baimCQ6foPnMZqJjfNSv5r784cN2fUjFG4qGjJxbR81LxF2mDXxqsLfuVi",
  "key39": "Cek1xcv6e9kQjnxCPXSN3DVaSeNNJVzu3oGnB2vvmNBkMYpWAWt4gcS5q2inNMqNdWNgezQGBq9auWiKRNoh1mL",
  "key40": "RSnQpaVt5sFTR4BKjNiuGemGQo2sxtJNufguZNWMcCudSRSDEGNiaa6w2ydYanyjm8KrUNRXS9h18vgxq5ui67J",
  "key41": "2qDbizPai2d6UiZzWvcVDjUBVC48aqsbc5Qd6jCU3mKHghthDVQzjkfuH2fCfQggi7dpGFZSkZXuw3JsLTQWi7Nn"
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
