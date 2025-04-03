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
    "5vhKmu4enJRW6Pi1AQXeo9RPF5AuRMYC4AgnY9G4dawaKWUrE4hnyepwpEsqzTvbJENwqU1v2d5DzTwe2qkTkr8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3frLQ6jijGUjxWPSjRxaEWCNq8mqehKuKH8UXn2DMgRbKvVgYWpNkidxMJY5ZDbtNNDJjP1ZN87fMWTA4nbxnezr",
  "key1": "4iYi3Qj7aKstkMstncvpRLjMF299STKx3pFdRdAmQgWKy98rViH334MP2TFKeee2E88j9o7fc7jBr9PCQnZ1Wt8h",
  "key2": "4TZH9bknuxDxBa52xxQVFYWsdQ2rPGumxNw2ovHGeqs51zn9Xr8bhYaiKuPLwtYPzQmZY2VgCe1zC9QR1UBNhZyL",
  "key3": "645RY6r4ZTGVZE4Y4TQGRYdPrrbqrtp1qKpc2Qfga7zzYy3vvJ4oLS4TjrEJqSotju9Z2YM4UmvMoPTseS17LqS9",
  "key4": "3Nsfze1qPdgGMCgyNJ3U8nPPr9hAJBJ8bo7jiijFF7EqdZvNshfVfmT4MtKhbVSUXrZ6YXEUM6v1tgKSnsH3Msi5",
  "key5": "3UMDMjn1LArM5ZKhpiLQwpbbyBNLdHngZoUXPhgqCZ8NbHLTmRBcG6uHWrEQM7Zbeat36hZEdcp9cptVV2c8H8wK",
  "key6": "zWPn7S8JKv1TkyRScDijXJ8BAMaYmnV582Axk3wRAobtnkBEaHuJhceJN72AFKGVZG5kTqp3MpzEUF4NZD8avwV",
  "key7": "3pPSaRegFtjNYX4ZegmrfsMFBXEi792T9r3EorQhJKWmSQmKrf65cEQfxZ7avmSbVntCzME7gHLGSSJczVc4gWom",
  "key8": "3TTFLwY7Eq4NU3wqqSBvV15kGknpMVuG9THSwATbonge98EgaG5U2U9Q67ewrikXZxG5TYgMehTHHpY23qJStMP6",
  "key9": "QtttaZZwM3gCpSPWNfZDWixRJKGTQpztVd1QGDsBth1TPHsBe2QJdftn9yb1CQcxJGQ8im9d46ZoLneJvLFjsMH",
  "key10": "41j4D5kSxy2FpSyStHCSoAQ93cYT3Aay4xjX2BQvJKnr9h8UuoeLxADfRMqBhF2EgqSPBnmBtysCtY6nveeBiJoF",
  "key11": "rfeTtxca9Xb3w7BJcNVHSEdXUqfPS3ZPfiQC8MUS6TQoqRNF46f8oQATBcCzh8zBveFr3wD9XkyeFpLejnehpwN",
  "key12": "UW9sptr8kxN3rTDn5T3VnQqAd5igUEmFLYzwhmZVwe29rbvUhyAc6V6agpt9xQvWdvw2oaxtRJTegGnTxnVoqnY",
  "key13": "jtUxQHbHPMj1XNV6SEdw5sDuHYmj1ZLZRT93iSV9gPr5aaBe7d1x8MLmyaY619xdTKoeatjs2oqN77Rw5BbrxkZ",
  "key14": "3ZptSYGaQ6G62jSedmWhkrNtxqHKYwCQyBEtsYAnBEG3ZG5HqSKXYmHBuGPsuQNcEDTYRmj4PZstcojLMYcC1bUa",
  "key15": "4H4ciwC5pgjH5xLt76SWVkGvCBfdmRXYxApjdBLFmNYE4cPNVq6H6u8JLVeX3ReN4T8NU4ZF1uExUPvkftBrnXaA",
  "key16": "22wFcx3hsM9GyqvFPVxR54dmBJdwb6ZYuatjvBGRV8AmwCdtEzuS8JCF4okZPM1rYbDJKp4QfUH2LXCha4h4dwY4",
  "key17": "1S8MkS8hKxckAkHks8Cd94TgMhSJYUAfCTjQ3YETgPR4LNyVF75zagWczxFiFvvFZrYYNvd7R4Qyp4VRwaQeihv",
  "key18": "ZomGR18y976vUacqykBBvAwZg8pWHgkaEe2VvdD4GKqYfF6wf9TssmuBk2gEZzi6xB3hx9pUXG7NHifwXZKhXAi",
  "key19": "4Z9Kvm8M2J9ahCgCALeWgzj9mQ2soJ6ojWqhNabyW8dp2dNDFaxNWRqFzy4WJuT41bgYiXBiBKDDXdm2fofHJFQW",
  "key20": "6159CXMwUsakuzMi6jWB83zJAQ1PGAgfTzj1XwtZzPCm5U8vPMrrMh7wufdKDmnwnYJbpcYWB8MWttXmr1tkz5jR",
  "key21": "35nMNuqw4qHgbZkAK4AurfsWuCZC4HGtgkLtF9HWS2mRHxR6SRrN9xvJq35d7hp6hLGPkQnHkyRDdNqS2iCD3YX6",
  "key22": "DKFucgPULC7vSm84R35GLJSBNi9PBXbGFVxT1JzDov7Pa6fJeFahjSRGJC4qv6TrHfnqqs1Hut9xvjoyEdaQ5vi",
  "key23": "2VTei3iwN9xjrXXA9n3ReeENvdpqD9eUmPbAziXLHMiHWnektaVrBBuxSsmM9BKPm9zSpELa5SA4iyn18zjSbisC",
  "key24": "3qNBurMGdQM9pTgijLZTGx4zb417DoPbSnvNFTgwn9eVhSJZgZhGcGEhWyGDfJvVL3qL4csJLVRVvcESbJ6SwBTM",
  "key25": "22PNcAtDDJFzmtFFrvEi1Z3qS5T8hP4vJnubaitzp8krCevA5hu1mkoNZ7JJQmNJDbqG6vPxGVAkDBe9DmbZWDMR",
  "key26": "59fU35jEKJTbVvC7cynCYMJx61uJibBPUvpBrJrVodsZ5jAdEjKHLNZJPXpH8xrNyz9upNXAwYxGCzx7mvBbUNvk",
  "key27": "5d6Jb78FkEvW4gWi4EwrwKR51NNoS786Foya4aMnv7WCPbeuyYpooP4mpPBFUFaJGsCHRYr1n6PJVmUMWssKrmn5"
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
