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
    "2sTqw1wbKDaz5nE8m7Rg8bYPSYmEvCpZUrKe97aQW1D1Aidu8jp5eEBSQEqcDWViPAdUZxE5ZEBC1KNUZpp8zFL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UpzGnvDTxmnNqewWNhWpMoB5SLTYTZNfggERH76AoEKQPaHzcSXffJZ8J85GuZmk7VihZbHgUqTVy3Pz8Urtefb",
  "key1": "54VpXwvPN6R7DEMLJhbWRhLGdebnNaPSj1EfW1ELHRdccaDUDt3D6D859hLHidGGhc5CyH5FZBp92VY4YRtkEinf",
  "key2": "5NMyQNnpF2vRJGWyTFUEyFYs9GHhzuC4LuVCs7SEYdPDMPFEjsxfRhdGJ2t33wn2GBhK7QtEfLdUm9cZcL2Z96ib",
  "key3": "535mKsvJWSLP6hzLjEaKKjoBhn6tJyGow8XHFH6gd8pkUzkh1nTE5oj9skNxR5ytFd5d7L8zZqtraGnvRpKHxika",
  "key4": "2mrF56MR3ZTifUuf6mN2W5WzWVKFGFcC3zywwW7xsWu2R9akxgcCx6QZc22GQfqU6DZexZzUc5LtRTGqYBNzrJaK",
  "key5": "2azjzSwVMQZNtgUFdE38tyfriPaE5hnbDD6dKHwaUakMzRjqseNHo6MefmRzukHQsRNiQcBzQJz8M3wBjjHc5GTM",
  "key6": "2AXNgw9S2m6TRY4QXboS3HHH9xC5K4oRu43BxMgWHcqY51w3162mstmcSYeuvG3Br9gAMznvkus2LRmNUXLALbd7",
  "key7": "5nnrGvu1sYFXgh1KYYFzHsX5iPjaraevdxJ5BUAYnPaMnrCdnKDNQLg5Nm1sAmwWsKzkaTfrAwsMYsDGVqbRe5dY",
  "key8": "pzr96DSxpSmRGXzhWAguV2argBg2smzT4Cq3FBEwDnEbhpwmv5SY3VFsh86MV3mxspg99dMrNZaHmzCfk6TkhWn",
  "key9": "LZYpBcF1Fys82t9BXixvd2Zn9bJxjpTN3D5mpoZMcF14gH66AN8TSxmHSt9x1nYaeZCC7Kg8muaUnEPfFkzF94g",
  "key10": "weZ9VTPCryc4Bhu4d9Mo21UJSwMXN9oPiqrM7VXqnpdd4wSvyea5tvXG6TKTxd6ntmkSWLmroXbwrxzH5GAnLKk",
  "key11": "Ew6LKEPPF9EPYrhYD99dTTWAKdBfFR5aRo6L6yzh7g6Wn5e4kTVsDKxYV3CjRdHGDi4etLdNVWTgoPbisoCMQ4V",
  "key12": "3h26jY7yVbU8D6pTK3pcg9AUJuXSvErSh2yPndP3grx6pkbmKdKVJ4k9jziGnpoPQk9CqW3QphkYMk6D7nt7C3Vk",
  "key13": "NJdozyyJJx4eUNTDxbBLHHpzm3yu63tULf9LRNDpu3TD45nNW71BBKsS8kJ5jme3fUUgCjbpeDfP6RogX4uKyRp",
  "key14": "4TVp9KcmQPUzjHJYCZsnAJAzqJxAASLdhJvVK2HHCB5Ww3ckUL5n4pbbpo1VLs1pFwEysGRyBaPLrzu6ekDMnZYw",
  "key15": "3uEE5fQpxZHBghj8P4xneY79AcTTZX6ET7LBS1keZoc4wmapukLeNZ3cc6Daah3AE4BpsYvzntkoZBM1UmfTDUjk",
  "key16": "36R4eEQ3aEL84cxRHKucyM8MxqadjZjokrHPR7FLacgsmUjAmxE53ytYMFGeNNxZ9VWqpJ1MzjFqwRUEdQQZoyh2",
  "key17": "3S2vx7DUWLfhptsrHmAsoxa3LZDF39jZvuivKPx4C2o9hmMVxq9TSHb1kvSR6kMvqMnFkTN7YuUcJDZ1XyYMVyF2",
  "key18": "3HMyPmoCGz8ZhieLHAx8Euhjj468ZLtSrd3Ru1FPusb68nD9mgZCwwDz6wvQAFxdJPjWiVQSpTikX3LwAeyDF4s1",
  "key19": "5RQtQ82BiZAYwh3ceNDgAJ8GJkfqi6XUTjs8uKDabnFyDQLGK8TCbZyAxgUTsysW6stdqTpT9K6Zxsc1qBn8RmQV",
  "key20": "5dDb7xdM8GJ5cXBg3Xd7GtDY3jLmyBTmtq5zGQ3AYmbNNaHaMKdBeYpf39tYhP42D2nt5hZABfZWMuExQDcomPVS",
  "key21": "4t5bbnuS9Yitn4sfK5hCeVP1sNNwmYKZGELMeRk79z6msMNQs4gSCeUpTTSg8asGHVt6F2a6tj9gQ5dWAvqmD7J2",
  "key22": "xHAVs8WZy1DeSGvcCRBz5oWB587Js6xHGFHUfG2B5qmbciJUbSr8MW2zfnTAM7qDopenKULy7kNfsieTXLsRj79",
  "key23": "3wuHUkY5ZPgCiPi7UAbfjzyvSkdTUgrvSP7jp6PTU4hg4vnNKMk9CiAU3P7wRf34D1iCYmsK5CNe5umibuNZrrUm",
  "key24": "3KSrU3UWdpeVCQii6NwAhw9xSb3jA7sx2otAtZbiUYYootwJ5aWrfGyVCJ3wELNAexqbaPfpJx5zCS7YTVX3eiEc",
  "key25": "31Aa8jXM9BEvMsRLbiNsAZtmfUek5b1JWf2eyQ54KVftwrKqbuJyhNj493xA9snckhCE4yERk5hVsipLzZuAye8s",
  "key26": "2tpr7UfkxHAL9ETA3vabQSmFxDqHHiC8vTjCsYUTJbqpbymEZGDY5c8wBVx2qnheRjgCySGuR1tEQmpR44558MB8"
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
