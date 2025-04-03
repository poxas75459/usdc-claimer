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
    "34e4wGHMmtggsBh2yDkQVjUoSzNvvCaTHUwzyk9sHGw1LMxSpzxzpE4w4CEXKXi1uiufiu19xNfrcvUHpJxE9wjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bkBT3WTuCeqgJc9CgDTPLzQ5TEP65tvr4sJojE13Lut8StKVH27ok6XXYNhKyiRZCiB4Q5FbGYQDhWjiryktGcc",
  "key1": "qQau9BSEhfyjCVrqfTYATeafSbcqMBMY1pWYrmxrYZz2Grfu78PBgdN5fiqJCU69RNyjBcrSEo6QUQf9oFBuGNU",
  "key2": "BHataxX4m7vvhgX5bJJn73WkTeznRMNdq8XK54oss9GZ4PxMiEezcS61PF1BgteXju9DSsHLicvacvrVCqPzUdW",
  "key3": "4fJUYzv4fnV6QQhc4R5oXfrgX48RCUx1bjxRSu4N2V3UvqH8Bx6WUfcQSeWKtHZegZoHbrLYKivhPudTJse5zUbr",
  "key4": "2geEEu34wvsjsoiGwKCRafq7QBR2VzBLk7QjCTgikpkzUVgLn8Vc2PfxmJTqPJdCKYbtZqrerbN2p3d3yKwuot8F",
  "key5": "3xhzHDBigJQjhXMhaomrzJTBMedkwZkiKZEPUTnEBmAb6HYp5vUxya4RG7vaKhRHVdteAwjk3oEfogJ94YKXDUjk",
  "key6": "5WkuW5tiq4SJMBfErHX2VQqN66MaTH2UCCQhZh51XDaet7FwwY2z19tCzuyx5uwbsJkumJGDwzSz13jhWCxLuWoT",
  "key7": "5F1zj6MrSX3L2m45u7woYim5p5xtAmkQLq6KpZC6pZebyvDt15w7n5erXZVg4bKTuy6e2iHYQbzvD4VbXrFLmbMm",
  "key8": "2Le8MwvVnjkcDJ4zeNP3f9r8K1WVDu5xvLhx28cFjjFbqDp9cnFZQ6dWST2aYNWgErsrVb5saQ1iLQJmaZandDx2",
  "key9": "3fff53tpCcJWKWumuCScgbt2oJncVMPo4iguGNEyBDv4rgAvuDvGN4mP9LHZs1pUtw4iHekceP4MSrpDPHjzULRr",
  "key10": "31hnVomsu4m5nF3AVtojc7gZAmDPgAiVTa5GK82gpTVV5YM1t14VoWL2gVuBHfAtgp2m5XPuYscoNtZ4AV3tfXqX",
  "key11": "5P7mqZBbnJcDWYJVoQM44s2NNFbtykapKGsHwCLdocmP2WodPE2j8m2nvzLuCNC3ef6ywA33yY6kHxUyxHUbmady",
  "key12": "3AQ8xCm4KJuEoqdrwwFdQwKaeGvAnQVFVdEnQwt5LnujW24XPJ2L3sh4RvAunabQ2SC3suCzk48XggiBdD3KaSd2",
  "key13": "4L6R5Svkz4sp3t7KqbNRDpYTDohPsWxNne3YmBvuPW3sUMmkVnHSKDrQVbdeP12K4r4rMpWwxxRLXG9uKg6RWg7G",
  "key14": "kRdw5hjkgVT52avjSyCqvdzwZRmJdEjw7GmQrJ6mbQb2jqPRXrCS4dvhm3v2gywq1gvWDSyiqnL1m5x1RL1UuR3",
  "key15": "2hbmxWpz7FXpeHi1a1Rmh1XiKnFrRiZqheykZBVYpRBk2RoEY5Wr57CebKCLJsRgzQvJvjpqfTed6xP1znfvFVoC",
  "key16": "5mYhhAkzU8WNDj1fCrDoArcHF7pyeboq7LpRSMv6ZQe4m92sTYLcn7e5htdNqX3Uo68M4pjMeRQxhjot8YXxwHok",
  "key17": "njAXWGo7LQmx7rY366vZm3pyh4UNG5Y6KWBr9bB2zUFdseRqUHtwmzu39ejgq2WHHfFMQcYwaex1UFEY8jrf7k8",
  "key18": "5ZCv6wW4mnFF5vujWTmJhr2CbayLvXkVv3k6ZydRCWL88dQ4LCK46xhGjGGXqTotodwPSZB3H9dLP6gjegqKArxN",
  "key19": "2DkyaXnRwTAzUr9ivUpfjmpd7VTFCgnnCJKSPSdvUd3hFAFHjYQAP9X4TQqEQtKt4vKQzttJr91qdfqLvoX44L4a",
  "key20": "2vei6jYw8CdJ6qqfMuUYYGRQsM74WCKRjn1Qvom1wmoFMXFB28Hp9XbKuMv3afqxMZAt7wEEDvcj1Uutdr7FX7sX",
  "key21": "4rw8gn915L7Yhd5WhNSTHwSnxtw7PqbZYXFMndzMxKLNahzU2KDwd8cW1zPxyAkrLiDdLDLj7c4SGq2wpjM2sq6Q",
  "key22": "4J7vkp79uYeCSCZVzsxZsA8tJ9WQExcXyb56q4wsUt2mae74ZPfv1U35QHzF6Q4AJsDSjWRuzgqFkMuJZvR9hJyD",
  "key23": "RRoBJJmHAZBcmsavTCC1xu2tXLrFhvY9rRzwN5MN2xRh9FrXu5LL7SHG3yjfE9fbbeNmYpen1zx6EE2Bt8LbjdC",
  "key24": "31UqSx4872s5cjE7YfLQwdfRW1XuCEMvSyzbcJhoMwySLeoviwCLan1xQwSozBpqQuksaM2HPV9vbZw27PhNEWcp",
  "key25": "U1E5CPcSN8xM9xEWtxSotimJqcbrq8mzjs8sAFN3vdAGnaCgUacLfcEfMkzsJQQHAgm4AASrEGS8PEEwkWdiL8K",
  "key26": "5fE7V8UTcyfuESYeDkvojfJq7hEEBEFxyLSPcYe6ihh1rsutDEg7TnHebY6PqapT8eiPnjaV6cZ55HUdqtSt6XTn",
  "key27": "2TqvrRRdQ8huj5XJSXX8f1VFBppbCMe9p32MxAo1iGGb2T1WGMDPcQ1xvRDLa85xjXEi317W8W6GoM5mwhGhHypk",
  "key28": "57xS6UxB9DtbmWduaUE2HguTKFGb4Lcyq6gykrQsuMw8UB6ZWSmy7mNVdzqvMmfqB4ayohWRbjj6C9FcNoo6WRJM",
  "key29": "4BxL315k3K1nxkQtEtVzfKqaPAXVuKWL9qLq929EYpDQeridGCm9KFH2KBV4B5dLRaRrD9xtzSeBYGBb5vhbH8ry",
  "key30": "3CdqEj9MFqm9LJZWKrH5nXMszdJjxwxozSaeW1vtZvL5zWxrxVnnrU8vB5F7pGXhz6EVNjt4sUtcqkZmqKA95hNM",
  "key31": "fogpALT6ZWLR5pYpCDNiQQBiR8oLLr1SsQGKdtKaVWG94ACCPKEmVFM8XV6h22MEKoSnJMxehYNfQj4CCExoALT",
  "key32": "5qG5Yq5EqP3zPcqPM5xKQaV8sJGiyop4deEn7C1A1VF2E9V71ycgt71yz8oAEnPhLjgztToH4CPzhWiwm7pGP2Qz",
  "key33": "2f9YhPPLNqAF4QiSSazrBeF8m94Ghm6h8VashvZLjmRDMMjTeV4zMnkk2Fnan5mfSLVGLySkUKppG6mtuooHKt4e",
  "key34": "3AEV69EgQ9Nx2mp5RiPP4qd4AKsWwye4v91vM11PQD4udBeFimsjHmwP8vnvSqRJPwEifJsx8RjV7VMM331d9VP2"
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
