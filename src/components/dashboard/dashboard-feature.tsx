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
    "284zBnpGwYsG3vTqFBL5a5JegykLQPsEMTABF9LC1Nc5EkfSoNQGzzR9omAYsjes67KNFi6mPisJPr2meYVBGCQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N6K7jasLngqcBWkKfcSzD9L8mFXFKxrsDJjEsrvDg6gh2wD5Gob77Xj4DPKT5ojrauuX12uNmGnJrBKNLzDCYPL",
  "key1": "3zYDsEZgCA6Ee3X8coftfTnw6ywDwgTXQxsM4dGCXbZT1mB53H6kmX6og41PSXnVic2T7G8wYCWjA3DJaVDbHjgU",
  "key2": "24QvnNmCQm5Ye7eHN1S85MspPQR6cE2nWnzs7AwapH6Ez94zcQWVakR5RaFJ6jHYrt8VdRNFoKfZgxeitXnUHGUi",
  "key3": "373VF5YyEjYCcN9Q1HzVDr7XmwAaTjDjT7UfmiTUSrtdTL6rBDpXAv6oZxYr8obUHN6EPUZswVyUQxFrZ65iefYG",
  "key4": "2gc77JYdkeVCTXTUoPDYf4kng1dPRZKG1kVPAWdsD83Sp2EAE2mPqderkK9z9YLiLxZvVqmt2MhNno4P6Ramnip4",
  "key5": "36WhWmvRX9P6nvFvJ8J4ZeVAEw9nK5RhaBUMtsD9WUhR9BMGXUsAnfB89yNAurR3Gbp77pagZBGxvAwn9gh6NLMF",
  "key6": "45Xs1onzseQ9zCPkvbvSBowJmhkJB5jDYFcz85fvb3w6m7CPHRqTCWHiDLNsdNyWMupRE8RJBkbkxSuRBsPy4YpD",
  "key7": "3zw1YhcMKPXrqiguZ3urdz8xVCGdQ1kGwhFbYYGLzMraKNWspWwuwetCjX68d9spbJ4HvHT1bVjydzLMRrdxQyz2",
  "key8": "5yyyR6cFNwCEyHBJ5mvfnbFA5AgC81qLRoyLwE2m4UGtB2qZp2BGtTtDXhd71y53ASChRqbQs8QgQCZF1kSkWdie",
  "key9": "2osZHyVdzuwKYXK1wPTbXm3BqqJH1ddG928fnzm6iXoR3o1TQYnx11jfdLxYbiKJbXVNPAYFVru6xA9r3VStTKXz",
  "key10": "4h4LdF3GEGVTJ5jd61yvPDdHaNoMo8Q1uVAt7ziRJwJbZ7Ppe1BEKXAJa31c51wkcmdicR9mZ1Mo8f9nv2VmkpHg",
  "key11": "a2vRMxf49a3Stso35wAE3MbohXzC6P1FAgg9hVsc2Dv3UcTtAbatJCTjtzAAToA1mdeBG9SpBh73rVTWZ3pBs1J",
  "key12": "HskWNsSxnL8X5zTd6pHJKXuRtJmuJc96gZF7ExjLCZwFo3F6NJAPAeCXPRNPx5RthGsZaij49fW4sq9szB3e6Ro",
  "key13": "4ecD8XdBJGqbdcv7seGXF3GFJ1Xz3c6SSuxfPHsdeAoExMgNeY5UcZzsXjhp1HjamA6nMTt3aA67eqwtFq3kJmqq",
  "key14": "586EzeL3J3eeXepUctzRdKvxTXkryBzXeiHdmLixcatf4627RTLqDyeBr8SAF3Lc8w1u28bSz8XDdpRaskegSnvn",
  "key15": "4UBBLmxaZRvbxggoN4sLeEpoJQwrEGGCy2J97qoDEq7QMpRAqQBu8yUFeiEnNhEDWtChD3GLSxmTNYiyybop8Skf",
  "key16": "36pjoqNAs6UhxUqNCJC1TR9oYDqmY16zUtti3AXyMFuouVzLibqBnXET65sTGpprkbJAjb9EkMVZfLqVg39Wq5kc",
  "key17": "3FEbwLaUzWP2mraN8pRQMUQLgCaebS42q5TrZW6VDTFpEex8XNrn17F8aRAA2tdYZf51ba6CsnCC1GEVsdbkLRun",
  "key18": "5zppuTGnUMi3v8LtJgE6dSeYz3cmUXnDtTviPXPE3YCxANXHyneXZommfrAtL4Yx7ULcPmXkvzEkoVJav2qChVij",
  "key19": "2kJfd472hSE2obJHBYu9iHu2DjQpzTkyjXhzbYjp7ahocHqyrkBJUzbtpvcGSvr2uxvfSGY14AD5M9DtBWHVXpNB",
  "key20": "5Ck3gUArZkGxv76a4vP4pPQkMKNGQVw3tMcgJmQrc8tXzZzH8we8Jf7TesYk1XMmPfRLHQxJ8FkDwVJD6LPM9TBT",
  "key21": "5H1fhruitNm82xQyP2B13jVxRuqBpXqFzb7AcaH2WfJpJEqezhMfZ17LHjKNsv4FJHgnUSP72dwKWKfLfqG7LYXH",
  "key22": "25zuki5Xi19dhWJRbU6GJ2Kkg9UorM5fBXhr43jmtJWJJkd1eF7nbmX3Z564i8vAVqSMLoPxR3qt2of68jv1vdbN",
  "key23": "3JigNNPwBFAYziD2n7yRTTYHjdmUwGUPSzpEs4u7NmHhVzj1LMVAkWPD5DPMkzsLVtYcRH4VE4mkikw5nH8KQodn",
  "key24": "2wWcsUgiC4STNRDD2gbGiLk7pZn5c8GacEFeW7RNaHcWt5r9EUDkRrhFW7wANbwJpFH6taoV9uVaYjz3gQqJcQpe",
  "key25": "34phatvGTV3w9ZyNkydDvnpaYd23b52GhBshHvp2FAHnSDK8TRKZqANBGi7XcUXruTUVEf3y6bpfLBHt8wzK72aG",
  "key26": "gcJrtXTvAtUktxVRKeG6hz9NE4arrz5utpUENTPPmAUt4bcTa6czUW6Kh2LiF2RMuqHZiidX2XaKJvSFeTyUTmq",
  "key27": "5FdCdScqLUC9pcMHzaBfgLYX1txCCak6c2zxmhQVkEFFhULco2AYtxz1qYaMGHyQAypHusFf5jR3R9s8Enp5aHnv",
  "key28": "z8MeksDHV3fErvdijF84rda3nvhXUb8NThEbjL5MeHK1PF3qKNcszTZSQbEn5pUVkLCPSbC5W6Lj4aJrTmPAYfZ",
  "key29": "5opy5TceNKDij6ziGnmoUn4LwhJMhpVd8gcrWzUuLomWULk5WtqFHT16zdyFwsPM1Z44sxAZndCafNgTPgZf62od",
  "key30": "NUkjFA6NoHNAp6hMaEVx9PQZuCv8X5HXqpE25kRaySfRycV5b7mCcPdE2kcrHCf9ASnsc5na6ugoWfWiQ9Dxgdf",
  "key31": "AyEScx9pAPF8CnS2Gvh8VVBQXhQRCrvMhBpqXNC1nbkp8mGDrLhmPiVvCHBfycVYz3kKFNHDoMK2Q9vmCxe72V4",
  "key32": "2gcbi4Ug9kRhh9Xo6EQJ6cCGY77FfMVftPYGvcoLLF29AKjUrUfoRAyfnpR6kV3VURUpkeBPkMGx8m2QnAYguxwd",
  "key33": "3B2NXF6QJA6Amr8pNggragbNeCfFA1kAGsUPUyfgggQshMiSyw1ewbNxAitcyzuQKeeiYGbGZ1CKEeewuS2wTAXL",
  "key34": "3ez9LZwfe6zr41uEcDMtQ5AksQJPBHVKm3d7pEtnvQjTo7gNgnoaNWLLZtDF9jrxchszw9ipZUqRAvbpJZtrqaVx",
  "key35": "2knHUeDQ7G7hDZXzNqQNB4zK4uLYzqxqTMhiVG5oJoJdn8ChZvUtRpREXVVnxiK3cnccvA39ChgTWbv3y6rHqMqq",
  "key36": "4K8f6VmmSKyGLJB5NkGCPWygwHiWL8SPuCDYgHNAivfmouu22PiDA5cPJbUBwAwidAA5CudgQ2vHvNpEBFEjWgY7",
  "key37": "4gTz3DeZ2gPKinXB5afSra4TjZFJP6HeD6XeEBm8iUrV4PRsTjwGsZFBWV5oXi3zc2gQGTe1WriKarjWDfKwiN8X",
  "key38": "UpPZBSwPPJC6XoGS41SAGz1Yzhtdkb3tzW4RJQv3ixuxTze6VWghznUmfJsHC6kS3TYeG4gjj4vN1deHXcFc6Wp",
  "key39": "Gdf3PJZCx7gYPSJUUYZoKERPafvJPhpc958cK2L17j6BapTpXab1Akk3kotnB9pGHFVF976JAv8YL5YGnvj4SZz",
  "key40": "24nc9VxRrVtSkdMfcaF4X3oxoKuj7u3excR5AS1iis9YGcquauWyS4mB5QNseD97srtM7irkCMSK6sWDy5CLEn6v",
  "key41": "2JUraA9x7kK4BnvEhmMVqFCavyCzqH55FApMXXVcbwxmG5hSiYxtoCybSFVDdzSYiY6euwamvxkb6m7tvMbzPkcw",
  "key42": "KLBdFdVC87AVXvVUS7Foyiwx6izLT9vyrF9wGGJGdBAPxNrDJrtq8ZTPJy4m71neFj4BKbBsoUbQScjF96fAtRX",
  "key43": "4LMipbm9JDwNYQCfPSCGtFZcS7ccV4toMpK72MecSyvUG7kgEo1GZA94RQmC4K8pw4YSnJqiBKuZN5t7MmjxqAPf",
  "key44": "3Uos2cURTESsF9N2nLGESPQJ73BwmAFbnn2sZ9TBoYjCSeEn7hY1dkqKuFoC8LBXC4nnvDN8NngEeGNzkW6XpMmp",
  "key45": "U7BmuyDTgfuUbQqpdZNm6ge1C5ZGzLf9RSP7gCa2EcMxGraimTQipyDbjaDrBr8Ex1tRbd8HUmzE9fbcLJEs9gU",
  "key46": "595NKSgjrFVAZxdDZcbeewZnSwZ5U3MwWDemJE71kbKkYK7m2mxaXmDQk8XXh8MjaxGdpD9t95x7Vkgki7WuMg9x",
  "key47": "5VZnLcXyHfAx7g8CrHEm2eyoBefQsgig5UgcAPx1PfzH7RNr9LtfexeDZrZ7FDz3zXYEW8SAHi5esKJTNDpoY9wP"
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
