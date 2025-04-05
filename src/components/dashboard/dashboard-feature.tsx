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
    "44gYhUKCfvWwLHwahNot2LfB8wDpBSWmFVGRysjE6CZJLsdenayYKZT7KWFWXQeLSMuH7b9gPcEGc9boHtGNpGTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gma3SqwJkUP69NRH4yxid37V4r32FcPWbXBRHXhsmmyW8rmEaWJ9TGexFGfCwx14Hj4NyaTbDsrBPgVbCxdKCZm",
  "key1": "EyrPryVGEmXkPt6P4Qb3HLh1mQvpJcTw7bVZJkxxErF99joqpuLzq8bNN6cZKMeHUBJWAxPJ1dgvGcGMBwe7vPu",
  "key2": "2KrH9tQ94whAGe4Q6kB9yLaUkBuUJ5DCtJapoJNWCRS8JRTUfANvP5XVs52vro4vCV9ZcAYgXQqwiH7WbxHuXwW1",
  "key3": "29cMDtnMipBei7P39yxDBFTMtFT5EkdgJMEFxeB5fnu9dJpnNjUNgT6mt2GfRVEb63cH3aqve9AUmsjqvkAnT2jU",
  "key4": "5zzHaqSso5cfJ6KJmH35PWjiY72wxNS4a5GaG9oF1Rs3mhW2zHv1fMPcAVMERWTin4Da38yCec1A8W1UYQYYGmas",
  "key5": "5cLiaMkKnKVcuEmvDWV9dtTUYHq7AaB9NcGpyzdgkUcztBLGJhegyaraA4mCfUX1ZeyQR4i6BQSqZSXqZiBW4H1",
  "key6": "3UPmPMZZKfwuUJ8oyER1Vf5Xp5DKwb18Erzityvo3QrJUoyTbXPc1cvyfHBKE3ujnjPMzoiaLeXC7Ef7ic2b75Cy",
  "key7": "4Ffib3rCsAzVtLQ9zA7G4mUFMdmPjZHs6DVE1MCYV6gEQeVN4JWf9CJUWZzmtEo6gP25XA5Q2PrVh813jDmFhicD",
  "key8": "3a1rTz58fPeD3TBWZCFtDxRqPhNyiCazLxoFAtixaB25nR8F2tYTCKXA4jnhREXXdBdVDgcckcZorWHyeCXByu7T",
  "key9": "hULtUxcJEtDEfvADAZFuBNtWPLZwkWeDCqwY2FrrmzvptuVtM8inVxWBebm2ovjq65X7397K7JF6DdZYPE8j34Y",
  "key10": "5645gV13XTXfH42VL6ZULaPqJLAK9Yr8VM6NXetBAnRsPHZdVDYD4zHgnfohvgN8WAbR8dugQMtoFe8hFKT18cPz",
  "key11": "3dqhGAeLe7HCB3MUrFyoE6i3bWvnYEe1RXbhbNi37n7qizMvAqSrUucWNiF8b4qTZn5QTBnKecx2GTTqovnreevS",
  "key12": "4cmx5pqXUSHRaJYwmuVcBL9dUXZojVjc65XPnEnLJ1cLP2oQwsujxKxtCZiLW1jg3qKcs4gdh6ShzujBWkxX5VcL",
  "key13": "53fm6otnxQtM9a8gSDH7rJhu92mf4jv3TF5egBY3zBHZVhhMfcr9ECP7EG5z6apa9bKiHHnFwGFjkvomRDQF5Hkr",
  "key14": "5Ntyp9ayZEz2pYP6ZkoFXaXhR7YbwbqSg7tPoPJJFWrCY7JuZG93uZ4nroJkEC9YbcgeLvwJcRf6oL2W7SxY4Rqq",
  "key15": "CSBDxqnoYu9HWbw8PsgnhcJGbd1dWCfaEo3B6icazejJ4FHfy33fnysaJzTGGjg1buMwHqeCyxuAeLsfVc4PhEp",
  "key16": "4jXahQ7L8wSdGJVSQ5vTt4R5TrFr925Nioum8vZWgKMR9QddCgLazeBw9TgJpbWXYXyfCNMz4sQPkviFNFKCBBSr",
  "key17": "Zpf33DYweDco9Fgr4EqBBDyS6gwVhjFZP355dA5G4p3etkpA7zuLxaa9j77dReVrENZ8MM6gC8KEEhaXvCDhduP",
  "key18": "CvyBGi26zGy462Z914m7kEBPDLKNZUQ5AKezf9NAmi5r78vEQCMX4ZKm7AmQ745zUXAuMh2TrY6tfcefydQm2AJ",
  "key19": "5TzDjtmjA9STB7uWdKDutMUwS1hVKthHkZrW9vEFMWKYsEXBB7b1KAyERn7y9BwbDw2kW9jcJLWH5NroZXdXa8TU",
  "key20": "3RjCEN9cvuHepqHED2GFziMuVgBV4a35mGy5c1p7DZMXL9CwRDc2k1dcavBmVTvxnKmTigFFZEcRzu6rUgAiaaFb",
  "key21": "wgp54oUZZHHAu1x9kMzYjRsekeyHtDpmfDZ2KkTxMNbZagWm3oCzhMRfkyS8uMG2Xwxye5oxmPu8UijhvzZG2GX",
  "key22": "5GvWJ1cn43XJJxJCYsvPTyAoXyeBJDF3YtKrkds9h6wzTi9NvxgMPoVJeMhgQAAYLNSgKMzWMAduuD3e5fgbxSDq",
  "key23": "565mHGzk5v6ue9wNP2reu8UwhoYbHifeVNbM1chjPEg1kCUJDSghJzZgPZDWPLj6W3MHUXKtejC8rLL3JtHfa56F",
  "key24": "3GoZCoejWgi982MrN4egn55TU315hVjYU3WQ4FLbkeoKywwZsZvnW7gdyjVgzQ2YTArstxJRXEMU2hhmLQybyjax",
  "key25": "3qYcUzwonMzebQzZbcHvuCNiQyFv8uGS7YFZ4jYKXwGsqMYnXQNQscWHig9yRuVE6gHqgbVMUmttLKm8NDQx7w2",
  "key26": "5jXw3UdMwq1wte9H2geEx2ghuvzvBVzuZ68ydo1oU5Tn8FA2iaNaDaRbqeJ6sKUASCNeninomfiJ8X4VAXmCXuTy",
  "key27": "5vuUSMqs5b6tSKS5Fe1gqcWTWfxQ54cxDydwqwgU7NVjWy8cne48wqhPCLpptbDtXFo6daZ2FGjGQR6TSid9biy3",
  "key28": "3cnWRgLw2VxYX1WsyrWqofwW4AMX7aaf7FAvbWmPCxuPa7e2XDuthxCCN9Y6mQ1nP38YzKfPL22ahpZP5JP3MYu4",
  "key29": "5Xxs7BpA5PJssrMbnoTVJe8gL8fBAW2yuypynF17ovHZ1NTua4gvM8ko2mbd3wfnkhyqT1QhknwwQhpiUpYCAD9X",
  "key30": "488vkbGpLLSKAUVQzj6ePvxNETwooykDveLwhnymcSX4yvw1YWA2RL3ziqs56WPzbaEmyJjizj5gNJD8hVCDuPVx",
  "key31": "4z8wT9yUBh79WrjZLfDq7B6LTzL22mNxGd89YsYbWCc1x1BLpPRj4exp5u81wwWQstYM4MbQoDKvoRN95VaLWnSZ",
  "key32": "3X81aHZSHriwzAAbbb5FdJeJWcPVYJZYyg9VVrfP1j7aGpPgZuuZHiaEHcqM98RhXj2ox2L55K5QaRYWQ6G375RR",
  "key33": "4QK3jgKFivaqkrd5zDeXMdCLAumVhTe6msvZ7UbvwuHQHB94A86TuxuoATMd54cb57kWvFEbrhkRySkHVgS8mXYs",
  "key34": "3Eb6h89Jom2xPdUiLStczNE4HNsNmuwCkQo5JgzZ3mWpF21yLSDLXzPqnJDMBzvkpmdF2b1hhPUbMVcQcc2sqSpV",
  "key35": "2G9AjqLQNYdYMhJjjtaBpMRCedy54Fw4zrxe1Mar6eDTXkjMKQnJK8pnDND9yEbYkuM9CL7jzUCcGPYkx8QiHXMK",
  "key36": "5PBGqu43yWByCLDWddL7TMZyU3diuWbtTVdBX73jim5byQ7soDW82ueu8DSYjQ1vG9aTCdZfjyyXZ9WEucf2jfNK",
  "key37": "3DJM4jAenvMRdJupwUVDAnAdA912h2rt1EXpBdKF1MMwv6nLyF4isKk629NapmBgZsjH3bYvuDdobcS16rkubFgb"
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
