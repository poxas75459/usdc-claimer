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
    "4fi55uofmCZ8yC7AegRdXdD69DDVYSxEpvLrEJ8drrFb2HJmWC4ewso7kUpk1rVn89g55gZGA3nEEZZgh5hUGFYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m4gZLJkgYUGrYZd1NjAueUerLdpgDTyUUMToNQmFLkgqKaxnRp7SCiSpqv3MxgJdEdscsFC1mSSEc6tiJBZnbbC",
  "key1": "4yHHrEtDiXAZXg8VxCUSJu7rTj83z523MMCcK9B3HMRV32pKCBLDau95h6kPHmXJ5zxXdvWZnhBVUZdGnS7vqRS8",
  "key2": "2jZsmNPFzcuLHPBm7k2dtFGsX98etYyUmvauWkfNBN928epvmqP5DTw9diG3gSUMVs5RT3iFzaqPA25i7x3RUnnj",
  "key3": "Eq865f8kKyKCYfdKLAFbMsqW4jpvvP46QgRu8BGb4Qpfs3FPHXnViqPff1Spjzz6e5TvL2qQyzbEwhd8WQPXVBz",
  "key4": "2bZsyADEpmwc5dpyMSJh4XFiRsiRkcqHhQXxeuudo2fNvTeVekHTQTdDiAz3HmRJPMKqXrgD32gH21nCQCL8yAb5",
  "key5": "4Wgg1BUEXoBY1tRLwntivswXT2Nm9cXWRSqHSFJbdCSPCro8ymoWxBkXFoPsUx5Gb6Xk5U4EbE2gr7XkBSeK777H",
  "key6": "3KBtDhyvbHqVu2Dvw6hL7MJShueay9YPsu6bYjqGLCPUhtAQzc4Nt6Z1Hu11Ui2gcYkFDsyZPgCfPdce8qEvjhA7",
  "key7": "53XT4QBkcSEHofJbCtA7vEbKnoY1iSjHyGyFKEghakdwMdYL6W8rUsjG8ZQeGZLbL1SeBA4HawCCQzKwLjkNotSZ",
  "key8": "3BZGMb945CiZubCXr23uouPLaWapXzuHLUHEQXJnxAQ7vMHDqQy9aCzScnaYeRKpKZmMRt4Nxi2eT8BGg9jtPiX9",
  "key9": "4nuscr27VeuoUeYimrUAL1U7WDtGWXrgF5BVeVrCTkici5LYopQWKzy86nCy1dMTB3y2AmVH2WCzeNiZjxSNzE8p",
  "key10": "5z77EpZgwP23aSzF6Xa2U1jdbgxQvQG6poNpmLkGPfEp4SGZguAFqC4QAdVkHu1yyUNxZYxvJdTe28DQcVKkm3Z1",
  "key11": "2NSq5qt3ARZDwsTBed1SZQz7aywqE6Srmee1e8xeQohK6C1s7JhT4ahYZt4RsVD2yQr4KHhm1j9U6hcGv3Fxkvcd",
  "key12": "mMLGmsEzn6LsNrmQeuf5Aj9C3Wvcnita7UoBVHGQYy8Ei1E4D5ZxYw823QKys8GVKiVSE25M6DofHXNMCq6E5j8",
  "key13": "2ftoFJ2VQeieUA1fuqDE7s2ApWJFE9hk3zu76tvA1JDN5cPfdGJfmfkaBsTjwwhf5ksPRaEPTH17FySkbABn7fBu",
  "key14": "4GBza2Xa8vuFvcCD5ogmGCTY2CarSqPAixMyeLmWwi9SL5HnvpvNWAyPUzuoEqSLZtqPPUY6EhxJXn6wmV76cDPs",
  "key15": "2Ja5p9kahh4yA7ffqXLiRQt3mnexNsZrGGvbvCax8GC1imgfwHExvYSFF1omHonioh5zb448ikpprVcdGffc2Y7C",
  "key16": "45RHDT11xQLck1iSHZUAxGZb7KEqXERmXeaP5NhbNCvUBD2FQS3u84Qm3KwUctNtXh3hDvEdqjmYu9b2FaofXCTM",
  "key17": "4HE6okK88VwCfSsWVgMUgKBvBA3DU3ceVEXZTEuG31QopFFbRF1GdaQ71cXoUGt2hdLioZQWpcVxczYihvk11rmd",
  "key18": "4dYrPo66G4DPWqpRyZD5Q7Pgfy16NpBQh5HRpidTBbUQEtS3DebuEKA1dEnkADTbuNXPmxQ6mrefR7zZbhGB4LbD",
  "key19": "2bfhBZ2r3WUpXTkX1iWEpm23JzAF7yqKYyQocDbFEs6wo2gFUcgwcFc9z5Udt2P4VDnv3FC3iiEEUvh6b2FMypWg",
  "key20": "269WNSgqpDpyGmQAjNsvpeJAx7ik9bVg2kmuriFZDQt3RTFivkyMFKfUHckmSBcKUfTzE7sV4jGG2DWCyLGzGYUD",
  "key21": "QmjGUhvDyedcDi7Krjr3ydiD48CGM5SAujpXfYNziA5ryL4wZy5dVX2CuDvr8QBqgJyZYwTfNTeJL1LZaZcu9Eu",
  "key22": "WrtwPLXTe3vD1zoFUiw6Lojp9F6eFU2ZFxHVH8TX89Dg8UjCrMMzG3SURLURC1BHUZMRR7hjPAoXjGtHaTKon2L",
  "key23": "3XTaajAThLBGz5JLpg1Y3AKckVMyQpVUwJkyJTQT63GfBBWsa7M4wUh3ofEmWSw7cAEUj76ZFoVvLCnewKo3tZaj",
  "key24": "4X7ribJNzdftk3WU2Bu7jQB8bJhuHDztdSLaZsF4iX2Zv6yiKgPha1cMTkeyR3Bc9ieiacM4CYwHgVRg9eLWuzAe",
  "key25": "51vkVWntRC28qnG7LoioQenSJ95DZ6K3RNUJw6uMCpb4csZasqz6ouhVzSsntmtgEoDbHyEDRUzp9KzmskDgHQLz",
  "key26": "4t3fGei7uyDwcZxehsYv5ncKVUKeYgZhXTbyqcfXSsWJTSF57KpbwUEc1ibSiVmWyyDEHPZx3bwv3qADiey1vL87"
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
