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
    "4MYvwemryponeyHMAtqNbE1YG3Fak4bNWogVKRS8UMA5oTENgCMdrGB59gjCtpM1sxw1sFQuB6XsM7D78ngLT3J8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y9ar5C8qNUBK4VFLscAbqwqyLv9yYBMUiqm3pWoJiaGPKVXuCnCYv66jpB855hQgBvg3omeYQmLRmsnziQTRqKi",
  "key1": "5cjv2gcwTo3VWRxKd2zM8s3ytwZo8HKVPcyKsheeRkwrEEhJDKYb21285DjayZHVJYbPa8XaSuxAKN7vSBCSoiuK",
  "key2": "2B9S4s8esf371vkjrMhjP4tSRasKrChmxmeAG3qa3Np2WMVgEtZ7mvuWJJ5DRhVjQeZRCbUSMJxCxgVsHJEQfvd9",
  "key3": "3GAkPLARRhR3ghbrimyyBKYXLAU6soE4vvfCco3tRWYqVKApydT1uabur4C6QdHFad5QJArwNLTeW9SPT2Nv9Lzm",
  "key4": "WBjPYUCG6DeDvjccCzMXmGdARbX9AU2ASVrGFeafNkaBPJtVTCwMXJ8oMDPFjGrdtmh6N4CUqW6DkYjFdnoCdgq",
  "key5": "4wdZDPv66JJrVeXCiSUWxmGdrbBE1LBAKQBAjo8Q55eGdqENS8UPiv1VaEofndtPZGP2FFXdUcLbgTgP33TpdQ2s",
  "key6": "2fWSHd5LH7zRBzw8xppr6tvg8YsAvFgZm91bYsRjg5VB7twhEkFZtdA1edc8jwDqiKJvZsVUkrwGCmRw6KYyWfdp",
  "key7": "2cCoef8LRpQyE7dfNYJrx6yujrNKv6jvo4ggGnkCqaAq43QPaY812KzmvM3SkN32FnGAY5T2dwxCKNdyqDmdmKvX",
  "key8": "5Kk9kcqfdQogK5NYTB6uQo7bmJwezVLkzTxACU2qrsADsgqV4XgzunqQ48kUmFEyv9n3t6ZHoW172YRZQbhbUbrQ",
  "key9": "4kQa5TsGDeJpjqncxbfSC84EB1uEXCRYuQgXHoqyPkUqPzYtvx6EVbMbPAAHbNwa6tWPdMs8nyyaVY4v1fgmN5Ty",
  "key10": "swhW3NUPMm5yAKgxyvBazCKhkKguS5vvzWkzFrLsJjCKmZSL56s7qwdQ1bbfEb271ft9ZnPdwEvXcbihtNMePL7",
  "key11": "3SfVACEbv5QchLY9s9m7YnYT2E6DkDcvPZGgpssxeDwfBK9unXve9LrfskeLNGZo6MiUNcGPmaSeyCFaR3AE7E6C",
  "key12": "4TV5LTLFsf8TEnBDCu3JF2wWnDHReRdgPCoodMMd5dMuE2wGKLjRSSbzdCZ6vZh17YZ8vUjKGWbobBbTG1gv1UPX",
  "key13": "GBfE28NVyh1ECLUTdezjzpofiEYskhXJLrZt4tX7fgyr292AZ3nCxqZeNwuc7VJZJCssLAjdmarAHNZSb8DRXPt",
  "key14": "2AoS4ZokiWGHx9FnsL9aUALe9sM1zZhEGcqgHB8XvAS5Rqp7rHfdCJ9evcgGCctESA9kXkiDasVjrt1tickKAe2h",
  "key15": "4EUW8RhiyAsmwCTQ7Pa65xafw3wNY3YLvt7MEaCVHEFcMzdhJaV8ZQgS8bPZcdSD6u3EdcxajahprubCJBFn2cVf",
  "key16": "N1q2NG7WcMXGYVoKbss9xwkQUFo2kxbPg9mGCJChXCCYx9WUycyyvEpYc3h3FjmvS61XFQ4pdSzH6zwwL7NYANf",
  "key17": "5goQygFmfRPYNfEG4uyvmhJH4Xt1X4ueC2DMhC3uRZrRb6zesCewWzd6ZVNry3Goe2X2Hs9vQcooYsLjPFyxUWbN",
  "key18": "3YrSrs92Y3VNRv2NQNyeLCEANysaZGa3ajvPRpcLmKwoHueQ7WbwYdPGVby7FxXNVhwkFbHhPwTA81hGdQQjkNCE",
  "key19": "3KmmHgEe1SjGvbQn7vbM5f6BDwbBunzDWoRnxnwJE3FZahmMcA4L7PgTwnDeSUjSVNEhd8ZMcptBTLo1s4XAHXHB",
  "key20": "4ajcNUue8GHQqFJoFeJZugKVGNKQYJKTTSY5mCzC6NYgqin53YbBLnuzpFoWKhw7VwoxSoY89JARnvCUMBEN462A",
  "key21": "3XDhoaAYTWRmeajUoaKAPmsPU3CoFaPbLAhyoEgdbgqWzQNmGH1og2m2DF43uEUjb2g5nkMM6kYH4UZfRUUXWUmF",
  "key22": "5Uye4VQSVnArjsaD2nCZENqT4o4PfxYtTGnzQmgrxpWNqHbEDvzZmyBcBWNKLnLnJUx5biCSY1yZ1viQao598SR6",
  "key23": "5SSF7ZyFQw6dJPEk6SweMZ1gZ6FZu1dm9RPgct1pJTYjCE2qm4HdUnYHpUQ52ktdyBmsTWcDJRECbPHXaC8rZWPM",
  "key24": "29iuXmFgtYhUqwxrBBhAzm8yJjgPWWSnWzoWGSPrVeud6uJ1PDS99bGq7RGwcLTKApvee2YPUuVApV4TLR7VEPA6",
  "key25": "5xaZTBYCwRiACPuQv9Jjb8U57kzjpCTRoTreCzQEUC6b44QzSSBpxWEj4qM629CMGr8Aeho7BdKm4MpU8NUU4RsU",
  "key26": "4DGTh86zF2Mxnrho4pJoEUf3uAjzDV4UkH2DGw9y3cFmJVQTHHKWhRPfAgcioUQUjQ78uAfmgmH9acXPspPJBY6y"
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
