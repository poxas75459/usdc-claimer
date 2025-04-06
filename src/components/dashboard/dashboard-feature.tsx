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
    "8HhjfB92R86MtFSXiHE3ciYX6hfXVTXR7SjGeg2wfrKk8X6vzZq5m21VFE59cgCWMC3tpeR75PYSwb1QuUP5cTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7KeWzmK3KnAagjEA5vrV72NurXq3cwbx2YzQA2w4AcZvqaP55e9UT2V8o7onCJPXeGZGX6P4qLCSdf9m3vrUHkT",
  "key1": "4UeTkVUdTix4ub9HAUGAdfTCeMzL6RJjez8kjoPN1BdBp6PEFaSWqqDXYtYZgvHAr2SuANyxxCxVyWcxGugHvxzM",
  "key2": "2QKmZHQt89kzbUvmUn6NxmmtBv9UKttfDtqFTQkiJRprBtu36nmgxXeL6bEdUrNqc75HysVth6z9xFavPdWQdLdU",
  "key3": "57JSA7Uqs216ArQf3Xe9ChjXZfeB19NjHc28NkiRSAev3WfySe5eD4xDDLAzgGppgMrtxqmss2afHomPxk4L8hi7",
  "key4": "5z4dHWVGEf1nbvRgdydroAw4dNjccSVmCBSpVw66gAKsUweMiUh5yqSnL7cJioEb9gVgXDRTN7w5ZKibt3epkvvR",
  "key5": "2dyFN897kLrSv7RsHYws6dEVd6k95PpQ65yUWHgcdmLxJVp3o7MYjhY8KpAwMXCXJF3LyhUygci7iMwQ2Qd23BXE",
  "key6": "5ncVb56tVVwSTtV6XtS2MALM4N1fU4ktzXGpGrxt7fNq3tuSn495GJmy4s1wms8vp3hKWiqhvK5QiksrmzFBep5z",
  "key7": "prBtDepyebm1ChBfSVx4JDgaCGzGAy9qWJMgKKhtCM6msmrTgRZC7LcU4uKNjYGLxwYR2VZrPMtkC2r3856ziST",
  "key8": "2wZKamXaMLQz3u62gtUYZsEuLMW7hPy3K7MvdYFxGpKpJf65F6SHtoAwQFuggMmcg8u5K7HUvyY6Xb9ErUeHrkQg",
  "key9": "4bBq3BuUAmD2ivmjQ8Y7CHmC7mC1FfNXa99xH8akLw2ATaMBSqr2BXT8JL3M4bnMn7UqUSipLAZW9YnAdMwyYzYS",
  "key10": "27gExj8orRjmJwuz64YaKiRxgC479Pb2rh7UeeBGoN4VDH7H68Lym611EC6LZxHE3kVA8KdfAiD9EBDQAw1UPaoc",
  "key11": "4C81E6LiLihmxnvCXzMSLVuXC4u4y9RPW5YBc9g2mb5TZphb1CNoMvNZZxYEvkYRVh34jGXN5rDEuweYPwwYhFXo",
  "key12": "44xgfRuhaPSkx1SmJe9zWwaaUwCXBg71kV4FnHyGZ8hTztmDzaLFLx1yduS44fqZECgbjovyi8HKYrM7W39Cu4ip",
  "key13": "5ZsXc8fV4A1s9PFWuAR4oxWao9XHayKYsuB7GXL72ZiWRizQEjFhpZXxo6sLuNkTB9TDK4AcujsgQ5UjitX8p6eK",
  "key14": "58ydUa54qktTFyqSy5XEbrq1peKdFtS6gnWCYVNeU4vcaJpTfkSbbzbbJU9pv2PCyvpDcs6f87a9Yj9QDSjPGFE7",
  "key15": "2vae6kbBMwoG4dGc1SsLTKXo2py4Qhw3KjKWuyJoXdYxGP7tuzuarBPCM1vM9Q5u9yBKs2UBVuzJBeH2TiKifV8d",
  "key16": "CqaaZKWEevTFEymKb1NMh7bc3hUWDwuGuVdBEGEfACzQZ2S2vZwu66VhJEFpxP4LUobw14uynWQREEpGxZW24VR",
  "key17": "2U5xwtxkAm1qXd8wQmr4XZGcVSNFHLUJqoye1uxxpuVPVWVyFcBRq1XAaeD1TgrvePTXYMNzjWoG776NKCaFUrGG",
  "key18": "o6qXBdFRXpbBkHvjoN3bBB6VL21yZZ5QrpEBGc84gU2jnfamjdnp69CRq1vu5PwvEUtwQAEMRX1s9fD91AtC6G5",
  "key19": "awC4Nnc1PjngsM73VCoYWsaFzW1qkf5MzwecbuTw795VBEmztvUG6Qts4d9MX16LuXzgq3WZgz5urthWhHn8JoR",
  "key20": "49Gt3TghxfDwqcn22M9pj5rzsmZSeQP7QR2D7Dwr4TT9mjV2Fv614R8NkkNF9PemBExaddsDqMyzZFDAiZXPcPLc",
  "key21": "346NiVmBooicoY1f17FUcCUYve5wnoQV29DFjEdHKjd9nc9fQC2xAaohNCby8Svkn8DWWQnz5vEsekk2bjH68d8",
  "key22": "3mrNmG1D6WSxmeSHUyME4RhqnEZjpnFo71W8iB1EBh4fH7uB8icBzrLvAzx6bb18bcxWoonxhuGgW2h7Rxo162Dq",
  "key23": "3S4wB4z4wjFvf9eE3HvJuZ8egApkUDpVqck7v2kUd9LBETnURgnmJ1kuCcPsLshhx39rDAYeUYoiPEDnsZVuUoU3",
  "key24": "3EUSE6XHT678zwML69yJU1sgnazHRYjEHvjBEJ5ZJU3LE9Etm8Gmwnu7gmxqyxLd82dDgD1269rEeRHXN7k4A5AJ",
  "key25": "3nwKhz8H7yEwHwXvHEKmMfsMCTkqpuMnSKLghg4ndoR4NdDumRVdZ3mte5RojsSHaMGc6FMYERER3hD1LtKj2RHe",
  "key26": "5ET151aw8cJWwT7gtWZqn1KXaGin7YZFWsHhe3fCa2mSv534Z66r9bM2gagb1Lk37ULVbC8zBtqSZNAnyBLssE6r",
  "key27": "2pT7EfY8bUcPrheaxRT1rmxLn8PTSnKtvguwFHVwi2Zn5HEAASn1jN75tzkgdLe9myxbskyRGWa2B4LqoiHjYmVj",
  "key28": "59kDqLmqmVQ7GfhRsdeutUMWN7TArSHmJMMHJvJPzV2Vj9NZCVfs6q8RYXqPQ3vwUWedZ3YjMoS3w2GhVALKjrrG",
  "key29": "3dxhmyNXos6saEQ968znRKudPWuaz44Xd4WVXqU9B4CzPJy43AxtByx28awg1t9ZHwRsqWnsd3RZPSZXb17EeAua",
  "key30": "4Z8h5e22WHF3GqzDxZpsHPBpXFjj96SnCQ1Tky6E4eDtHbyMzCg3DvrwkwfvcwaeRJEn7PoVAPT7pMvVgGevXLMu",
  "key31": "5XNmwk9Tiu1XrRCDiM9Qz6YRLF43BwnvjjifSk4qe3rS31NTefHEpMp7tr2FgtPmFgDPX56YqapoFBJ6cDur2Jga",
  "key32": "5JVcCmiVAdTt3GnMXKmcB6RAccigyirPjpZQA9nP6zzez5cgfgiCh7ab1MNUgSwhmwWtNXv9HUxvPx8LDCK2ZQ42"
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
