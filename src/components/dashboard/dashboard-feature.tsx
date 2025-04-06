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
    "3jJLbuQLiaiz3yEypT7Xo7y9TVr96EbazB4edAcED9GupHamCDojcrqtF8Y4EXsUdDTYv7fiN7mPR7wcSzXAUUn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ctcSzniE88EzY86naasooyTr6h1Z7ob93vCzMURjEpxPrZKgJ7fJDuLLpeGZ3eA8BikqMLN1rFUCUzgB6M82hnL",
  "key1": "twQVkReALtLmvgSoSh5Uu5J5BPZzSxF77JgVQy48jfRjpvtiEUMzYz52SfAiBg965p2pw8h416wskzMT1hRMs2G",
  "key2": "3pZgjTYiwqSxnNFvNt8Aqeci6zoVJ8Thk4Xkr9qP8qGUZjGGamQ1w8Zuo5Lu1a6dfAzdwyVf73cGErGrd6Hy91UR",
  "key3": "21YajeUxcr16jHmnxPF36QVEdYASJh1n5GBPiqSZAkbxPHzFvYwQxo3iYTSSaGZLz2AVxSGXg8CTcpWzVxR1pwNN",
  "key4": "52pY7dqrRHmgubtviWLsTudRqb6VG1G6ADEm3E5JL3mrxy31E6hmXc2ms73nL2jdCRnGbvUUMhyBF3AUxoxpUpn1",
  "key5": "5SyvYJ7SCuvc1Zmv2AgHAMRUzGhnuRFDbFwGj7AveVzq2xyDNm6DNf1HTrSf4FZM3rKDJrLBJS3j5qvfb62KuWX",
  "key6": "VxcYGMhDh9B25uDWMTSNhiA4b3ocmiP6cJHosTLmcCpeHessHMSxhY5xZoZytiYtBrdGSju6P2JtPpXx1L7zjiZ",
  "key7": "3HvaT99KSYkbCHQvJWqdw3PXepz2ns7M6SuyTLEEyRWW4EpBdZnEpK4Q74866xQ4MgMrpHckjZ27PmU2cLibEFb6",
  "key8": "36AcMq6CaCFCQxZRc1FmBavE8RAJyQPkYNrZKDee39SPaHiYQrS6uGY5zpNXbiAGXiheWcMjgJHAywsgNBiUZ1ts",
  "key9": "4oW72NW7gj1zSydhQhRH31fzDhkxmL7VvUgdy4j84FiHvEWiNiJBWeU81qprM6cxZTnz4XqnRv4EyLb6YHAbYKz7",
  "key10": "4M7MCTBQUGtWxU8hm2Q5xFMgMZQaE6BJXEtbN8GNK6nFexri8ydTKRedHWMiiNLVfBhfYNdk3dgV6pvkdHESASYr",
  "key11": "5HLuNC8dKjD7R7v7525JyVQ2bzi5L9BtkKFm8DMwbDvZkesmykZadKe2McfpHC2v7GBLJQhDHQUD9FFXNji6FL3U",
  "key12": "4UmMtPriWcKAGtxTuZZb68JjUKBDXXYo7DV9PXvb2gVasGW3xTLovmKgUipvH8QrtLbPJVJK7gUVCzeCRLCp2jMx",
  "key13": "zEd679BmfBUXPZMiUrdYo7vjJ6h6n7FdnAA9kATYHzdTkJGnG2CbdUwc5UGUPvnfiMMPRs6nBYYWq3p7Mj9AM7M",
  "key14": "5RyeUUjKJvmWJJqQ3EdcxEuKRtaHHuj1UJZf398dtSC9jRp4oJXXKCZkjJzQjpyRohKRzXbsyfwpti7WmhW5KWrR",
  "key15": "5DKJ4yUGcvuY6jksv4MtBphbFMgJ9KctsNP3z69kH23L98kFCufTTT5uctMjBsRZYSDzDQsgUbmH4yAu7mXEEzRj",
  "key16": "2aWJzwHUZW4MELfG7ftk6PZNNme5p394MEsphNW1P42gSXDaUYXznJnonkAY9gDkwN82qnBm5oFNeGZsfXiZVqjD",
  "key17": "3UFVPjCcKa9ebG69PErouyDPURdxN49g3WqeAXkgbk5muWUkv6MMeqvbsHQmGdxmoKM7VC92AjXjbtnTudp6nEkM",
  "key18": "guxqVc7nzLBPgM3t1Tss3T7JtXYM9AkgJNWAjGQURvHzyzSNAwcnK2Yq41n7oqfuGqtm1Pwt6dd2eaqvzEHf4nk",
  "key19": "4hnS9XNbRnKSnDaYyvEwUqCsfUmijcUxDMxwMCEmDxTKMo6QeTcCNom4egu126tMhrSbZ12QCMzs9tVVmpZ4yp5S",
  "key20": "4HEkXC4BtyAhuHHhiXcEQKgYpzRxrzKzypcwNtEeBQE2Zc52xmWua57rHXbb9Ae9GhDt4QJEqxUgLjHGiev9Mbsh",
  "key21": "3Fgv8WC8APNpcjD3MnVgi2am4VVyzzSD1FLciGzD4X61qMm8qAKpqXqwYZaFffsH5iYYUvSxVar9nD2APLzR2vA8",
  "key22": "2uZcEKnu8VpKPaS6W3d5GboXPM3Y3v3YAujimx61eosGm2aZcL1AfwYMUzscoMeNw3AwE6ZSMtDC5FtnmW7Gj1s5",
  "key23": "3sb7oBANaaQJD4R8UDytXn9mrYmodiKPMe7kAtcWc1Pgs3QYtBncuCyprcaYhYz6asD8Hrpv9cxF1S2QECR7cDo8",
  "key24": "2AM8JS54nA4nuuJJZaeEDDRcg8w85vyGDnXvCkBNs8tYP7SJ7zCRRLtdTX4BpsWWZ9GcDNQsNYdj54H2jHVuSTNc",
  "key25": "5BAt2MxqoCBEap1YKAo3VsWo4fMhWfAEgFXFvqjEFyYJqUsKjF2zKy6tNjNxr43Q1tXvwA1rB86HUDxn8qiXXcpH",
  "key26": "5oLrq4rKNpToNTs9LoB4ukVQ8C4MyTV5zb31fprzhdNggX4n8yNHYt8xTMR16N2v5kJpRUpGQ7aii9PtvZXiq8EZ",
  "key27": "59hNXEfzSdQbdEsZqL7PCkiFhfKTtrVoNyXnYajwHxA7UTvxU9CPkheFJtUBFMYHcRMJ1PTiFTKFWRbHknSbScq6",
  "key28": "26CwwnSDzqoib1JQSHvTxB3vH2kCcmQgNv7bJmmMFBZNgkRSvbSQatEHG14WpU6KVLB9kGD7vnLXL6riXK1jmTEC",
  "key29": "5q93bmwDeactysZFHSTjpX3TWsbqhtsnkpA5EYacfKSDp1fopY6W3dyk9fwNxLTBwFD7yLLfi9vxQsU4hinnZtHb",
  "key30": "3226bidAavF3Nx8Z5tnxMyMCHhoptqUuh3ha2wMurjvoJLdWEjT3bMzcDv8fpoqBUBjFDqbMQaxKKdHHoXTjooTh",
  "key31": "4171geuDeguKAZzi9wBk5CTUgdBato61FbaWmKe17q9tNTrNpB7WoS5Hj4SYDuSb2xTggjGHA9hLtWp652Lqudep",
  "key32": "3Q7wWksoGdTKy86vnktWhcXWpjmgthPCLYet1fWCH7vWLuhb6BEdfVzciQLopyKhqsMht621g94HvK7NuYGY1vhe",
  "key33": "5fWPGkzh2toPJ9wJWutQwfhfk1FmpyeC12JYuag37EwGf23Y3jMZKWSubmqM98VsyofWUYroxQGYgzD354AEjbno",
  "key34": "5vEVAT8UQs52tEwxjCPiRRYJwgAg3wLS6wa5MabSZi83ijocpzQ8BJqRQuT6qbjEzYLGhxFwtjfQXupqwufvAGwi",
  "key35": "5ESYBMB1WnspyeLqgv1aW2JDmGfoYW7wE95AVg2mo7GpHFLiMKieeCj3NXuxCitXcEEgFzr4KzUeTMBB7DpawL7F",
  "key36": "5Jeutwba5ZukBka1SjfUfNTv27dpoaKxbktAWG6tjNmqAbstmEuq7PyDR6WgGXsLBuK9wWHf5infCs8UhvWmPtUj",
  "key37": "Tv7MjorMa1MvMzpQJDCEr5Tm8PVyw7F9mzVvPporTedYn7SKpaWEW9xT2EDGZgrxeYs9B5qTHvwbsb37eLZQG82",
  "key38": "31XJQ8Ckho4oA6Jkrnv6BMgxFyuUSK9dxqjAFrWKApDfySueEir6Lue6Y3kx8ugkPavmec86nim4MvQ6561m4jq7",
  "key39": "5AqQG7sEPxuryLvQJznH2EL491Hocpa95LkSFcPRXgUV5vnhphaMb1QstjixwEo4LpCggTta5wBKTXJkTu86CQqy",
  "key40": "3gLphzRxKH1n71F7MBZFHJ13AE91hUYTTqeudN6p9hJ3Vum59XwcMYCodejUmdnM4uutFH8cUxzkhJGWcEdg2q7T",
  "key41": "zFNsFzdj3vg4RgtqVuk3LFZLoArG3AWMsJDe9tq7ri5txr1wCWyY6oMf86LhtrNnyet8jueBBHq9GSkFaDr9CYF",
  "key42": "3akrXRkToeDq48o16AG8XwYeNaGLtB1wChKRNBmcco7NQ9EMqEqDU1oLeH2KbpKm8NzYDNn56AR9MV2RbFAfvyet",
  "key43": "4ykbe1VYCupyMhv9M9onSBPjYDtYeDHBoAjSHeo6SscDgrHUENMwYevJ8mYWDNAEhTNf2Lb7BKN4vThktaLwWhJW",
  "key44": "4jt7dtCGcC9xDK5AYWkyALjEjm1zt1C9UcUzUy21FoQR3PPLo51n7AGanoYf5QB3PJnxwKKThxKEEsZuFYJhUNVB",
  "key45": "5JyhbGjCVUFbJyzzexWt4Acbhas55DytftY2evKNhdo6zYuRDNTF53aG75q5kMVEbSeUvpNZwvdZ1SQ2TS7stNuw",
  "key46": "tufwocwVU8Vg8LG3p7ydgSkuja4KXG6Ri1ZJDrhqQiQ4qgc2qbJXKtTYJucxUgd6LGRaJX623phS2vY84zadzLG",
  "key47": "2VQJyAeE7eV29dyToqGH77yVS8A1363bQr2YR4sta8CnCgEjrCbsJRFC8VZSm2NevyUvWqLW3XSr6kEMZ9nLcyGX"
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
