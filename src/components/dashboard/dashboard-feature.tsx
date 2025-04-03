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
    "3YVaNx5sUiGuHmoxMt3hwg72wMpXENL8Sar28SMuiD63tYRgHf4Snaam9dAKEKQAFGi8p33hGNZtE51k9D7GeLPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A9XXZUfjJcEQpcYgaYK5q2keh7kn3jYPQSVz3kzPbvzyvje8wx4UZvW8f4TMJfFC1L9eEpWcV4oFsiKTpKNE3iy",
  "key1": "AKSH3odX61NZjTuQqaHfm41uDvyc8FTbguG89kztWwcpTjnkh3kJ1TqXSPUuXi3zHfStPhJQqCPbso7eJ3jGR5b",
  "key2": "38mBbFVmU4oRR3KhsM5gjAfNRSZwYZLmMEaBuaM7u6cYNqWVLCjYKHNn5MB7knsdW6QqC1ZBQoSkAjv2CmtScKJK",
  "key3": "32jv1wbxseGvhCeKsDr2ZDZCtfzyrmGxErTLkd79mAgeCtAxg6CaazbRopHikxM3R4EdrQKjQffMQhatsopDLk9v",
  "key4": "5pESncTLAK91yuKg4M4TRfCsfneHmb4DGgh19phCHEMbtFEgXnuXqE9P6SxEPZjUHtJymfU2xeZdkNvGreackQW6",
  "key5": "4bEGAw6ms62eNLLpfjsVXTgfUBUSXq1f4QbuBWudc3ruJPCvTpwrJTGWuFQAWowZzB4gyeAeqyhnygw9iqsaVQbR",
  "key6": "2qFHwhKuSBTfGFouZBiyRYQYDRQJtosi8JQydZ2wyQb22dNeorwTwpfAewqXMDg8SVmSZebozG2jkg3uLgDjY5sD",
  "key7": "3zs6ja5yn34LEy9kZJ4aN3Fx9Su7xy3q2GVMZh4TWwvPH3pHM2UAjdfvRq5UjoHeLvYAhEj5Gkk3Bfzvhub8ecfs",
  "key8": "66mfdoRmuHaru99JK7HRDSk3c84Mo5fLJRtA2JvYGhNEDdaWmjVT9Q6Pm8L23djopbWw2dz76CW7Ucp2FSPTH6T4",
  "key9": "2hKxKygb73dtaRRuifnajxQTg67NHNuawPh731E3vcxhLFWXTz4DhnBtGvB7n8tjCLFKhZub2sGVf6UBSv2EXwBm",
  "key10": "49qg63FQp4LxDyTyyH8u1gntbfrp6Foxbeh7HRA13XL8yQPtZWtAYdhWNy6VFR8sS2pQzgswtFEvuLTdzHgFxvc8",
  "key11": "4RYSn88u2d3WXYpDbfkUHjyv5ULz2RgGgTr4UAguMx2S5rYo9SNfwXGpFCYQWBhF7BqbcuvtwbSW1A3hEsvwGwcY",
  "key12": "4tLrD8REzV8jyxM89cDWnLi4UdfUb68tB7LDLwYfJbU1vi4uwijQvDQjEWoRWBt3ubmK7oMRi2UNdEt38dHMtSMz",
  "key13": "5uZWkE5n7h7EDEnzgSB5oKo7FC4c1qVX1zXaWEqJnNQ98bV1g8J2HKkk3q6A4vTfQwaNpJPKBbzDJUWTRgUUdsJJ",
  "key14": "4cgBaASLu5iSe3tGUGxhucZAqj9nat4yHm3FQ43aKf51E5VT1L7nnPCPwa9ArqF6d9naUFQDsNjK7LDGZFABHyws",
  "key15": "4uvae1GKGUEQiqb2pSkxS9gqW2HCg6VoFe4sG4FjfAmZaQqMcF2wJj27YwSdJuQYu7U27KbFproLnr2eKB42dGuP",
  "key16": "5xNvgxak65GC2i4xnkW6t2tR9GzGGDD2HnYPLJ8N2ua3Fer1L5FoZn7xve7RgH7eKweN25qRtKwAm5c66Ed2fRjQ",
  "key17": "3J5aLc2ZS9GCZpvMFbG6o2GDhevDLxEkGCJf1nwfRpY8NfWgLgqBESqutR49CXjBUxkRMG1CDntfeqJjBC9QjBRS",
  "key18": "5dwauQUqfDid7RLw96aX1gfEoaih5thuEqRsCG9uVuCkxfFx3vodFuwP6AW9juoAAugrfVD68yn9pLrWnsEd4Xx6",
  "key19": "3jmWaTRfqotyAtpcK2wdP4E1SXijYGjPuBX6ukWgnYk5kT2cWMradxDuPnV6TdNZtRzAtmGect8gwDVuheG5CteB",
  "key20": "29gpAeKhHmdtYahRiXmdxby9jDmb4PfNiC3fMjBkPDgUww1hp3nAi8ZaAeSouP7X6tYuidPb4MvNYsRnskxmRt7C",
  "key21": "aw15ydKNiWuiL8AxJC71AAhdvboTeG5rD1XUfsZjh7vWv6Q7gCqGT41cJWyyQysnm4BXw3e6Q4S5D7cEnx2R8kF",
  "key22": "6UzzNU9wizsWapquT9Gf8cd8BXkTAxheN3Zhcn1RSUW5WnVPRmp7ZLGKP4pnJretN3cJVJGRRq3KpBGW2HbqDzb",
  "key23": "5GpppL1xwKNCRvUw1BgBjSCktg5seBE258B5dcZJgfHTuuimKnTiN7Hfj7ZK98yKbA3Mkt89VPJtesVPxmNhgYiT",
  "key24": "2jHhtcPMu5TTQwS518ARqwriyAHB3L21e5FGjsZ24yrtWGRaJjaorFQxN3w9LvC9aiATHWDd5LunBqFKierFErxD"
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
