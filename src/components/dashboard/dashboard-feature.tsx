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
    "37HLWCPUwTkNciBTquZvE5nLWCRPAAoDG8ToTZy6YXfYs2KWAYE29KTVTnJNYsr32RLUu4CZVnTz5oFasHh1V76m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "334eWK9RsXETua8xnZWb3ANXtqhBhpXNMBqcN7c7e6EJXmMLgrigWK6Qdj5Q4SLyomwZmvepVkoPrWyqBezzBqdM",
  "key1": "4xpLYUqD4mH439raYoxAXS8LemMCrBMh56jxARYUMR6aqwFEGMFN1E9sP1QN5f8jTjcE8LXM7EKj7dD8rhQjkqXS",
  "key2": "5gdpKZGVmLpDS6j7ix1rJXT2vvu6x63MXEqYA7zv2VPngb1Hv2PoQMuFzGncKdFKJ4LPFASLUCCehpDy2MLBuF9i",
  "key3": "2XPcJrB42zu3WRVLjnUFpVBnCJHqs1HTqj6XFASvW6uS3y9Ccjfo8sFWYRWQSByUGuNJWZweMTfWNn3MpYqrV1tb",
  "key4": "3F5fCcGMJr4vMYXndV6PsDXP44YbGTarsuXsQ5iMJgqZumujgb3QsPPtKZEFTT43Zg8YdTun8tR56RHNNQV6d3ou",
  "key5": "njU7fDhimbEyhqfAXgXcops5nGE8hP4Np7AXp8s27omSXy8CWuJ5FT4qfTEqT7rKueBm8QuC469iKHTxhu8Z7ht",
  "key6": "2jfpDaLAZ4eR4AbU84UeGh3yeBTy2TSCEybWeNaGCii45XUsTX7AYSdALAmQvSSJJYnKWQEcCZq6ptmcYmsgGB5v",
  "key7": "3Nv3e56c9wJ6mLmUhjVfks1uwpZ6k68K8Lu3UYTCwfjGNMQ3U1P2KgzBafAT2HVuedeQSqnrCtC2BP8g83RM83uJ",
  "key8": "5XbPNoi6H99aJFhzRUUBzFyCEb5zK7ZUUDLGWjD3mHsqXsdi5fkyiAk7WH9KXDDkx4KEVyvmgKbWw8BdmQXCZKrY",
  "key9": "3roaLEicWLoK2r71oYvFwjewCYWYnz9VQGP6TeovF7JQG49qcsafHNsyusWeRXn4WQxTRynnzCRt96SviLsuhzcx",
  "key10": "4XPSn5V1t8qwzeegmWt3hJyFUBYhecQ4e4wfdr6NL1a9ouwUDugm9yoiw9LL2cuMm8GnVSEMbqccCwARi6DGpJpo",
  "key11": "4SKdDxsaKA8auEp1Q5gapipMk5EV1imULXX9nVJUsxJkTPxcuK9kAUW92pZKmLvx1g1UqHNkbn8dTBS8mB1HVTYj",
  "key12": "4CPRerbNHzSntQm1GDrowiAa5RBF3b41y9qkRH2Af2iFA26fc9yXvVRBgudmrXWEW3Khm11iPEeC3aUZ3D7TrnJ5",
  "key13": "5QYxqV1RBBrpy6buEJPraXt2jZwSJahHfynyRrJMd7znU6ntaVavBHDsXprJqQkWrHi9JxZRAB45FM7fMUBgYhKv",
  "key14": "2rgXCWifrTMyhxFBFy6YwHghFkj7q2E3DUxVrZ73MLDyLC6WyWu5mMuuSTForYCbYJu1EGfMCGthmqPtzay92yJw",
  "key15": "48uJYWGSKLKnpJUDkRPXZRRThJqwTwvafDqkxEfrtihukGe4e5KG1Y64fMj8YzgvxZubfcrv4qfEYimVfgHJXvPw",
  "key16": "3sa6bEUD4vcRQNvRe5f6cF77wev3mA1anMR34cexQHUHEESTfUjUpkkKUxNCXnVy5VYKzRfB36KB3FR5odiHM8Jo",
  "key17": "2JUQQaFv8BLB5JaoKWK8W9LcwT54AN1FeA8744vxsTHupERyouFnDga819J9upELrx5oNvSjsm4aR6V3xMBxr3Rm",
  "key18": "4AmMdMzxtX2Hg1Gc663XDfekZicUCm9z7FHEnUudESNLX8HuFKdVRodAfiYUUvjkaUJnNVoiEzCCYpAbLvEzmz6G",
  "key19": "3pteZvfgBwg6KUC7RjewzdR69NaxbTuLgWAc3pb28kZrKStV1bCmVcgzqHYFoeMq6G5h1wHKCAu34DsAGcPbx11g",
  "key20": "2S6u2fjTx5ucZvuJXcJihVhtJQkL2417rAvG2rbznxjPiwEC31cnf1YqajsJTYLRT3Y9ccuRCfs4JXYofdshjqPu",
  "key21": "5SKfhnn9qcEb5wX34bTZcAMt9dYi6k9xowNTeNpKdukzTf1bKuGepsPbReAwQkRqtaxAf6NEVm7b6rVy6wWgWvxM",
  "key22": "34VAK811Yd5gTzmZptJCsawKo1v1GfiV7CgHdcxSoQbymUSUVWfdYqWTk921FJgGdaLCgUmiyVCMn8bx6KEA3o27",
  "key23": "4Ketnu9C4EjZaCyycWKbp4jt4EZZyr8ixwEzJjL3mc7mSWq1ZXuNkiFv6XdH4QBErWWUe5DTi8nKbgUwVAygSfRK",
  "key24": "233TCh6NnZif8TzobjzBtxUxXwaaBVkaTYFThwFmuK7W3CUi4cE1DYkxDXKPsAokRK1AZMpUmCWzJGa61gds8srh",
  "key25": "yhpPHixp7joXBchJ6yFaE32dFeLGVzZMKkSkkHmWYVCKTtyQFuSqM2PkJd8QvTUPniBP1YaKk8B4qYGxr8wg94h",
  "key26": "BXFoDwVwKzXSCqHHS28bvVUQWY7ub2313scjcHiinxcNNZfyEpZyxaP2rfCBbfnoJz5rS3TbgebTKBE2AGnZBhZ",
  "key27": "4RUEJryTJaYVybRieoqrNny6jnHcms6mX811DGroxD7j111RoDREiuq5yvrGeyCwHzApMLQTBHrVnXzfeU2zi9Tn",
  "key28": "3C6vs7xmPwJT3kAvDBvxgmQhbKw2ngZjSe4NsmioxdQq6wmAa1e5rLBo5pqKgA79jiUTEDn3ziKYHoGNRZLzqjW4",
  "key29": "35Bvdr3mcomxWSB6RTvyccaF3qiy2K397RBuA5sSVzybUcr3B87CP8oW6KVpVWM6SbKYD7JLuogXHwtJy6hbzJud",
  "key30": "5Fd2MxyibmEjaf9CTGhBrj3MHaGAWkev8ov97khRLPSSWGKXXfFxrBiYUDtMueCSxaftqNCivV77jtW7JhBw4MJV",
  "key31": "3EL5d7zUutCeKcrEhEhMtApQrYvsxZF8XzvZbo2zhkoghX25VASx3x9GkizffgDUKZuPeJBR13jPNhfh6SL5XhQy",
  "key32": "2cYdSeBUFwBc69YjgdzCCMFWRF1tHyUesMKQiqPTwhNhHvFANUxgjDtBWaGebxhZcmbRMEA7ZowFUadHGKAAXDh5",
  "key33": "4GwGJmYNrczmMd2TZaviF8jM8NhcqnvnVDfSAgfzJEmcUPLWwMFjMjSUz6xY3oGEFeNsGNDVinNReSk5FmG6ru8i",
  "key34": "m2X6YQwNfWcP9XNHhsR7gbsHwycwT5KysRSJAYpE6LA6zsNXefPc6s8uuZwmzJAxcgPMSQuAp8DGHjEJq7EXP7U",
  "key35": "43kpjoMvjomWyDaMKQNU2WXVLJMkZgCHb3ViLr2qS2CaJxHmCv4RUzrQX1XE1z2MTd5RYuX81PcKS7x9zaZAvKfn",
  "key36": "4r5E2hvknrcXqHdrh4EmNhNz5E52jijn6m34iXnmsVsJsyH8krjNju5KqENVouTMgLg29aBVu1MzpQtr6bmpwJH7",
  "key37": "3AT7wLP2AJvhTpBKKwiu6e44odZgV9Sgqg3XE7G9CdVkuhnGKX24FzdgKTWMnkRanGZ6XvNaTUfvxMZofjswUH11",
  "key38": "yLvEZbKF6XDqBPxU6hRS595ptJZVA8eMDsoTnmzYwUaxLK1etdURTYz1dhoRL4HyTPzhJ7N9qHbNqZeH9JwTFcy",
  "key39": "2roPiSEGQakgjLbGeV8KKXG6tpi828pJ6pyoa2XnLtEiz9DK85BQKcTRmD4HCFmNj88ed7eVc6CPrS5YFWiVuC77",
  "key40": "Ci6c65WmF222KMbo3AnVYr28m4DuruZhrw25St9UcJbnCR4mSDNCRR6FhSbYqgaZpmjzPweGxfdPpMu676jE5Sr",
  "key41": "3hnCa1R6GXmfiXebsYd5HPk8CDB5jSCTdQa7DyRomGWgc3aH5ucUTtN2sywKgsYTpVnzo4kBBoWqGZpHznphLMK4",
  "key42": "3D6VRt3z8Wj8ueb6AK3CzkNG1KsdwMs2PtkikrQ2LjvWdVfMUk4ESSUyyN6cVs7EhpXA3zfMZfpom428mgDEpZB1",
  "key43": "5dLvdAaY41s4azjZu6fEc69sX8bXnURcP6PaMubrEuRd8trbDFspMFa6RHocMs72qFCCKivHNc9tL6dp67DvpzLn",
  "key44": "3KB2nt6VWhi54m2ACYrTTPVkFFGHAtkojnZWJtD4Uqzm64mUeNGipqyD7qNk7V2bKrwx3qY6LdreBRVq6jKXUshj",
  "key45": "4PGpNZebmbiVr2efxeNYtddeGCk1mFzGacFcD2pFXTRXTz1P4rxZfQvRcm3AqaKTTiyqYeXdPPtcDS3pQt2fyNZb",
  "key46": "2iDkdYh6vSmQe5EkD6Ge96itL6w4vSKh1y7hPRN8tV5ShuK1qJQDafFzLHWofGotg19AEMnfxssxDbUSnFMKvTvK",
  "key47": "4eEgTRJ53yBdfu76KjSzFu9fmSW2xAy7ZjJ6vKFFMfbaB5PmjiDxBvGtoUcTucr33D8kn8UrTjRVexBRKxePtWeY"
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
