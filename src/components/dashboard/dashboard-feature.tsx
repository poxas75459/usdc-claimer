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
    "56nJk9UNRaURt25ZDefA3LqALsg7BaVRkTBWCm4xsYRLFRNPff8eySw1hHwc3mJNjEN4e1GHomYmHiGAUCddaL4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZXP5zwc94kqpapniAS4F2kfrFGQw118i9Q682htK6VJKuqNmTbjnVpJPLhzJyVnrfNnDPqzYVqFZHRFDuNCHEPn",
  "key1": "2cvydaRYsoGXR7fXy9KXb5ndyUS1rLy1QB3VxPvbAWRcXaxEwCxaPoW5CPP4BUe1BF2ZDsyRNUo6wjn6tBguB2zx",
  "key2": "2a9iwCyYCrbNorQDpDfZQBmBz9NvEMS6CmqJ7QDCCoiNiUaLgEJwfcTizxFXbiXGeoywMTVwRArAtd24cSxUFQwF",
  "key3": "2C5gXagQX2jm2PHBP3iu48EKxdxePFhJf8cAu1wexT2UKiLfzoxwPG7TP9AeYLWC2PS2p9MSAFnoi8LNW9gNBiGT",
  "key4": "2Dzo29ktF23W3ri2ZPmgnH3HFMXTy6BsGnVmhLrNaYTGHckG5RXWMLYeCSdnxsZPHcjry3aJALJNZRiD2neeoUsm",
  "key5": "5DCQvabBkdGbhLjRLMCtUYEf366mH1zk6nCSw3huRh1VoTbdyt7SKMTu7DGFosK4tyKX4oXJvNNa1vPYWq6ugTet",
  "key6": "4JREuMghdtUc6StRQawXTx9AULpjVmmkGK7BucGyrZBwtPyFeF3aBmHrVSsNv7xmUr4Tx974hYvZwrEb4AE2Urhk",
  "key7": "DWxPWAuqdgvZtiUAgNTzVd95PjeddB96ZmEn3YiRJQa9Vh9udFfPVhFBCrmXSvNYcYJ8i4WAxF9UfaNvwn3sV9p",
  "key8": "3SQEPfRQgcSzeDbKVF3YH5fcimSMTV2e4Jm2kM5KLV9oQiNroKChvGPwUMsThA7aescpZE3rJy2CVCJABEfGvJvK",
  "key9": "4itLF2D3rQn3FXHM31Rdf7kebnw5XLs19Feg9aMmSNGpMxRkK2U6fR5R35bSiQ14EK9Ws16Hzc9Fs5sWAAf3C8AX",
  "key10": "28kuqaiYq2PFDWgj85EoRZoKiXC5rxnbLJUdh6nzBMCasvvE8R2LqAex3XoSmWU39H3G5x6hTNm3pJy2zfEDhxxd",
  "key11": "5TE8QjPwmMUryGqpoDnqVoM3Z4MeAFoFLRK8tn3Zqzzhux2EruGP8rdgqXvv8rkNMswqLV6U8rD35KLwUnap7gRx",
  "key12": "4nbtW7k3rpfiSQTPTHMULEwCp34E7ULhaUZES7DnNeaWLoNheDRaraarP54J3ECY8BYptkN2NpKTXaaEZsaS42PZ",
  "key13": "ZJsWkfxHg2ArwTMBwGZKcRrQGmdVWtLetkMib1ZLezfT5E4EMMLqgFLn8x1RsStDSMSSvzpN4DWnF3HgPS5pyRw",
  "key14": "3aJdHTzDeZqFHcddFUj2ERwkwcQuMX3Xt7UMDci1eGeXxQCcUZdMuzEbqQgL9UzwUa77povXCw7LRaDjfo8pTLGZ",
  "key15": "2Zuy7WnmuKA3HAnsUmKojQC8PpTCj9FCbwghjZYoctJ3yZnJJn6raHLPVZsR9H3iKjUeXG8hJY5gr2xda6xrnLJC",
  "key16": "5KLFv68CzuLCy3FMRchXzNgzKFF39QfpdhKYzYKBHR4GoZj6NMV8JEwT2rLympupvM6295d74bc1WK8rzQE3JZwX",
  "key17": "44UZwuG7qJkk3E1jwdKFT5aCXX6uBLc16g2kVh4ka3oYs1rc47XcVmGJyUEHbDnD1hY7nVQWcT8Q9tJ5n5CZEowb",
  "key18": "2GwpRFSonfMpyqnmRyDcqvfEhF51Yo8gRkRh6T8XT2nTjNjXQm7HaWuu4cATqSxz8UZ92V3DoqdyPSfs3arNVXaf",
  "key19": "PXYkHHk75Zg5Yb82VamnLqWXzR4hnCqJiQwNLUJbeYfAb1QQZxxL6Zf8mNStNUEJxouR8HyeinHPJwgesDDQeUd",
  "key20": "5V22EeHedQ3t9bi8KESDWMGz4DcoGvXKtFTNYt6uHU6aU5fqiVUDoA1wh6uFtMF2Z4kfpHn6WETyb9kuemTLe8kg",
  "key21": "21ELnpkBjErhFt3BkT1YpGgvuhbFGP81SudnYNY7HhsHo1Mj6RveUtgT1SjNEGyDPxpkitwFJDvjN2azxEUVezmb",
  "key22": "5neDynYUQoDniQqeYaK8VCPPEWKxZ6uHASm6JXh1BcNm7cN7r3h6bzfoHFP6z3rdnuRSPu8NxLZ87wUkAT2bntPp",
  "key23": "5wjbaydydnQHgrLBKLGgDDavmTf75BhEEr2ueLH4LdZKVMXQKoJhmUvuzKRuNZ9LyVa3FJHCcUeAh1BETbxpQnnQ",
  "key24": "5KGQUKKb9hB2j1NDFiK5L4vSHwTYh6UMiMSkoQzQirecWBupFKQCugKdRkqbViQ9AKZpBoka9qtbGQa76X6dRj45",
  "key25": "3bnpXHVnXeT5C2gcXszK4puK3jHKbHFQGLyjT7UpAB8cirid4VuEfoiB1rb4WK6YwA9KCi4UDSyvQPcgbNh7epYU"
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
