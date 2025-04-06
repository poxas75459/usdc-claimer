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
    "5eAvcBFm4GC1GP7gVcmJKEAyTvaXTRHXhPgiLd8RTMVCCSMn1athnPix6KdAk6mJ4k8AMAsWGmWKeTFt6T4K7bty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ukpgTzQMnKSismaSJUbWKWjP5CQertuSmeh5GAW3nn3q9rq1DSRnAtrjL3TqufQJ8MfvLcE5vuuao1nQXExagQu",
  "key1": "3BhEyVHici5FRgS76wMn7thvN8y4iNWEynqzCCBLreoGWJ33zevYYnq8RGQ78NeW1fF66cFPhrDvtf8cCqE79bn",
  "key2": "5zhYZT9KiC52FnKTpkzm8tdtLhPx2Qx9BGHWRnycBct6X9q9tTyJ6iKze5yd1BLHZH6P9XQpXHDrsvkwUd44wfWM",
  "key3": "gWHXRdgNR8jLjzDzY3FuCsz87uvcTEMS9bCEUzSqSzCuLzdDfhtYxih5k2Cc51TmFMg37hwkpDgFB2poLvRDUMo",
  "key4": "5hxmBjQwqu7aou8ASLBzJiPDWq647HBW9Us21Af47nwJFTcPVHeyZwy19WKtvQ8Qdouu9s4sDKZgh61P4E5eMvp8",
  "key5": "datkRQR7nhbkS1zhkDqKVBtYtzgBRYAvHSjheZ28sJGC9SjszKxE8kde9hqv13UwdzJhVvQW6v9W6CDWRyCPuAN",
  "key6": "4r4po7nrD3ZVhaYjZHCMVpmiaoRZ8SjqmYBZo92symj9SRTq9UG5PuAXawbR6jxJqQX6bxc3bwJfUgAojD3pRmm4",
  "key7": "2dWNAWL52fmkM9fvGQDKc44T5Wyzrw62pqpPGYFJCWp2nnt2KFm4YeC5tj4b9DWKeT1M5neJzyBVWRVyRqEhjzxn",
  "key8": "5ZMUgVCbPQaxfJFNuSd9vv9a86ouQ4dCF9hCHrFbUyRL7AHJmBJB4EC2byuyPCEW2QtJaqEu4ECC6UN7LPJr1cXq",
  "key9": "PqLaEHhUmdEJwyHU24jpPA3HFW1ZWetDEgjMDspNcsUre3C6iE4sRVGyT1rRAaG1PGi44SxdHBuw9tcpZq9BEJS",
  "key10": "TpAQG7TMg1pjPJynm1Mn111hS57D94tuMxF2kYxjUoq1T6tt6j3uZ7javgzGVzLsCMZehndL1i5Qh8ySkoW7AbF",
  "key11": "53MPLYjcwTic5dPM7CEPZzyz3fJSHuEnmLnXhzWwhviGV7mhF3RLSzbQ5mC9z7gFbZFWeCxG6JDbMrYAKm7wdGMd",
  "key12": "3iNggywLPNcaccbCJi9ovpmqdN4NLH6LjLpkEab6qTP3NLLF3m6VsmofBSZfihY8wgf11Q7FokQzsj1bwUtn6CuR",
  "key13": "5xzW2neJ2tyUn4RARCSeAxjAroXe7hDyJ5wYrfLPWoV8ZNtx43ifr2cMkFjC9QwjmiSVnsHDDzizmiGFJ91gxhse",
  "key14": "34autosLL7EhoFvZja7zsHFYpj8b74BiRkVJXvn8spX5jNtuBVb6MWCyuss4vXCsqqgBfjiqmyhPAMov8qBMaYq5",
  "key15": "5rYZAjxv9qEpUUyS92PGvx9WMULsYDMiy8egLFeLcyZfNMFvxqNnGJaoYXNcNvCuKo7L9iZhbQBdNeVJZffNjmBb",
  "key16": "51u3eEGUdzLbv4mMfhut13PHEV3hqLDzUHonwReUb58TzwHfaAZkuUYJ3AuKbxJYXBV4RrLURgkYfmCpGUfJ5ib5",
  "key17": "57WXYc5tfVU49Le3AGj2hvugi8JShvL2gUYY4cxGPYnbGXgqDuvxYns9fehz3NnSwb9J4rSfZSirt4JH4TJCFA9c",
  "key18": "24mS5Fg9eawFdtXGFCX8omq3UzMaPxZDQqpGpFre2QarmBBH71gSBgHz2KgzsLXQdCs7qNGiQKmEjJBvh7YxCL2M",
  "key19": "3gm3TMU3mMsTg4ivxuaSHECJzU6kZ21DbwbGvPX1WBL4z42PEsw3joUWo5fxzL4HCvn2rjZ8gFaxvbmphb65XFtU",
  "key20": "48M4Nb9bWcUwjMmfU9bTyLsrqHvxmCP1vg3hkypLsLUyxX4pPiXphwy4QdLgpL55RV1jjvRP4SWYF55mKuTEnCHJ",
  "key21": "UTk8TgUF5uT5xPYyya9KvFy2EfKyAcRYZje83NQvUuij7WgCpXRcYKMAcj6KVqVh5SyUkAqYrmUEsF4374tEFdN",
  "key22": "3MgQ5PymGibaaEPfwfxPNos81xMHHd182Gw1CShy7iP9xYWF4EDqY6sA975FuKFAELTaaqRpBE7aAABXk2ehMkDo",
  "key23": "3BkfPJrXVbEt2NCZgoLa3xAv6vxLq4h84TqEgLr4njW17o9x1GubfBAHYVKByvyvzMTG1DBxn7sadKpN1EYwmC8k",
  "key24": "2En9FzbmF9AEsfQb7xr8DANUFruMRWSELeZT3qArfHoG3Au6MNL23NpJzMSPProHicV6Dgf6vg4U5s6W3XeCFbnk",
  "key25": "5Su9u1yHjw5aeDDHURH3nvsssZqHdo3f8xTLRUdkERKcpRhhTt2ujG2L4hY3AyVLJRQoW4BdzaBDZv7zYRRscBNF",
  "key26": "2em47Dd9bxdAWLinEVH2nSvHUTM2389upYFJN9Rf3Z5F9ZKAKzTW5qe4Ryq4x7jrN51jVSiWeCubryCLCTavrbYD",
  "key27": "34jZLs4abSvd5P9Hv6PBkbBUoqf8Shace9AvYQ12FDezDECvg1vnY23izByL88FRJAmmR9L2MexmddcJsHqXuqW4",
  "key28": "34SQ9pF8tzH2HiSiUPGthFDcjDZ1ZdL8PZqNhGMEa6FM72x6XvkhVdpULtpzbZuBsemjSYUf4T2Dci9TKXYPMcFW",
  "key29": "5zubwregF4wqv6yj9oh85SgNVqaTpNj9kmiAwEJjUcMnhX7NAgkjdDnfxifgyFcVC7Wta41pJniN57ruwVE7KTfZ",
  "key30": "xLSuTUyJuCooR3xtaQBh4oyyTUGFqSwtK74s9si4Nw2j3Hf6PgxkBrF5dTY1qoMUtoZ3PwTtcrC3Wv2tscgBunv",
  "key31": "5qCj4dqyCmTajNmy18x7zV6GVj5N3D2esyVuFrxUzBm31L9qZPtH4fJRP7WbPcrBD2BsrFL4ednEWAXUmb7NgwnU",
  "key32": "48SKFUMrVDw8fS7END292eGjPrvoptWnyuURgpczsSJtTKYf7PSjCPmMbY8KMgJspqdkAJyLo1EhSvwZx2me9heU",
  "key33": "gNMNqPNjU3rCph718hCyQwkMh2Jk1JRYREBF9nsH8jRixG1VLquyDK5pWk51mAk1WBk4r3id43TVTifykXstYjW",
  "key34": "5ZKCWDNCoNWyY1VSciuyMfaUexBXKLDSeMsVBLZdW9im4a4J9xV7HazcrJVaJm1Ca18dbopTdzyYTcH5LBuemUpM",
  "key35": "2gwZdwJAPWgWAtHEpx2NbR4unEbjzCPGsqgtiJz92XiYzZn7NVhtsNgwMUmhX38z2jPSmjZoRUVg1qAhe77tu2pQ"
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
