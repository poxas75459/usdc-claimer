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
    "5nJenVUiUWoxKEx4x4Dzg5P5c7VNzg3n86q6PrYBwjLNBsZXt4osUAaYgnNNZjRYrzxt9AxNih8ncZ3k6KoFA9yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2usCFHwXCPFUiGSamUiPkAhteShEJ4DbfD1KWhhhVebYE1mdbuVT5T7fXAuEzUjgtWWjwc6rU3fhph7e48pKYWEf",
  "key1": "E4WmDpuKvKAsgvntq1gvLBM1GpiW4yZK7gwCBUxtAZgQYtWQEeYrTiZwPcU3EkTV1or6gjLrAWN7ApiPVmJNfRg",
  "key2": "UPVbxaBh2NG53mRsAjvEV2DbmxypspX7SdDuHkyxLtcmSKYV751qyT9xNEiDUJ47h4gynLQLQEKW2bNobkH6F7s",
  "key3": "wbEiKqvHsWq2SspEVpGEZ4YBRh2kSEeXX1FxoHdfkTRtU6xFiEDoUo8TPGv7H1viyonPB7nRSTPXqxPMiT3vDAe",
  "key4": "5B3r5dufyeAc8Uvs49q2Fu3rzBM3z7os5oHKT4RCQvJcaMjYjVwszTTQRCQdbYk5n7tFcBkTN8DAnxdjmCzZZ5TM",
  "key5": "3JKdgjzFNPDbfPVFUZQ23y63ujqm5oZwqy8jAsiJyJPoA5jrk7Lf4Q8yq3cyLN5V5By1FagCgm2LXCeHg5EjsHx1",
  "key6": "2crQBEpWioM77W27JvytNpGkgesQdxpLjGZdp5jwApgFAoEQ7LNwArCv2NSaViBRwpUabGpqtvmZ6K83WZMJfEdT",
  "key7": "2VkVY75GhTYGXCF7r98nBEJgkNEgqipsFwZRZisfVKE9KKZmrVfEisNUyYqGArcTxq1y2QoZy7Vxk8EenDLMvqwo",
  "key8": "3cuvjn1xH77Yud2iZ9cQr7xgXtZkNTuDiKZAG3rReeHiv28AAgynnnfeiUve31zmuwtMNsqmAiQpjLbhykkKY3D6",
  "key9": "EVnNWA1KKsearR9sVKnuyTNg6mp2Tv2eGQXYci2ELQkUiM7RJ7so7MkM2UGEUVfaYGdz6SgM6tHAtFpy5oThhVQ",
  "key10": "4w74Tbp61JJDj9yNkNU3ZzxDLUQWyDQ1XMzibuWrnhfxSprePpt2nivHZ7tJekKkE7a5sZ7yJK85dARNZerEtQUo",
  "key11": "51ctVZfxHJFLw2cCKyQveKTtJtidaPkx83MJnBGbk9setQHSQc4sqKov2aMZZ36xrE3eib5pypT7gQ98odJBdDY7",
  "key12": "5fnZ5NKiCuoWcSLcMUp8DYPHbxqTf6gRGcwW1Uze6pP9iipTdxyUP8vBpqTYaQk4dkFLpYUhB52SP6ZCyHdiZUJL",
  "key13": "3s4VAjmeyHJivMn41Ux2nBzLW4wNCvTtmfQAu7sfo3c4Q9s2y87wY7b2uPGhukqtJ9rnRL4mbjhyfwctdNU9Ftki",
  "key14": "2ETy8fjTmpFHukcuKAxCy4AbqjzUmoQZ4xS6YY8BdAq6R8omm1nQsGjt4n44GtNRAkmFYvmuHdAqorRSfzQDhkkY",
  "key15": "3iAgzA6XkXkiGU4nQUu3vSoCLA5BCS5bT7nVjhY6VLaZawo1zhg2WseuZhBBamfMwET6JecBDEpZQg1aTXHsj3HX",
  "key16": "28bTPt7RWwnUbzV2hWn5TzXMnNQYEhLR1CHNDE4NCoQ5DwyBzETpB5pPPg1rvE4V7XurX5s78tpbHuR5zrWJcRiL",
  "key17": "aXe1Vuz53uSzQfANKNwzJdqyB4wchocmmf2D81ZZV7FfrfGVPnNM2Tb8tUPqNCfhGpsqEeQNZW1fu99aWHweFk9",
  "key18": "qRh4Ln78RAEkxTF7cQgvEDgzhRq6wxy1yaPWUDsuDvqSwiphSet9bjvqmPr9DF4feVfJvgzwNbN7H9dX5dPqwNj",
  "key19": "uic1A6zBkFCR38SSvZi4aBHCFiKazmBAgc6HWzN3echgKDeUD8wJMwswjnqUYkW3VXJ98hhTUgoyFgtj6msUbk7",
  "key20": "5MP17RttRXUTnhLz1GGzohq4LqwwkTYvU5LAKnBUYQALHi2EzSwAQkJvJGdqvetvYg3Py6rcq5qfQXcqpWNBV7Ve",
  "key21": "4kYFRhAhqXfb8qTmgrtBDpPkWtcrWfdHGnaXrDiY2B7BNjKEztYGsB96d14pwqzHXdxQuSXWh52wUwFQgjhTLWJn",
  "key22": "2NvhaDJuK6H9pBzUY38XqemwT9A2LEmCv6VoHoiL8EKxYuPhecpW1RN9uY49WNK2UCjzTjW8RbG7ePindCy2eF4w",
  "key23": "243x8Avcx9D3QtH94KvXzbzEkzGSCqAJZgrJt4e4NABWtLihfmRvSakE2W18BvYFM8RirRQ29vkw9j2UQbYYnzHz",
  "key24": "5SzF8bj2hRTjQHKVEgHFHEcVKEdR7DsopXbmVyecZsH4kDerFAzeh24QZNUPYi6WNtsreQA4XdEEfFJS22jh5Hfx",
  "key25": "5r4UMXdLW9XQier34Uqqh9do4TCvoXA5NNrWMo9LkGdULn8gSfmvMNz8aXZiFVVKcMwUtvfLKrWC6JF5dyX6ht3a",
  "key26": "4rh8cDZy42RAdfxtB9wziCic3HjJxE9XCueZjS8zMHXtvEBavspEGKih1UzCK1dzL5poGZP3cPgPPAndioWqtZVC",
  "key27": "4LfuNyrmnX4hViEyKFX1NXBsCGrRG32z13WF7wpLTumuzApqr8uqnQ7b2mpHczXAU9HxhTJBHVYZbtao9PVrtKLp",
  "key28": "3rkQALRxDeGyS8Z3DMfzS9UL9YR36vyA1XcaqqcQMxyFrS8YWq5hKubjnx1pdTihRwJWJoU9DapxPj6fYPmh2RKf",
  "key29": "4LNW6pymrgavLR2urd4e4i1LuLTTMeB6LPh6Nvw6LDCWsQgXKVvTjBUt2Pgpk5c9gn9mQNveCJsbtpK9CftedCkS"
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
