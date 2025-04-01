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
    "56v38eAD6MdJHduPeB49XSk7v7HFWaRGMyiMpqHWkBZgBLJPgJcr3y5iPfRGPTGFMy8ZtQb1BNuNev7JVh19YRpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64cfK4qC3NkNV1q4J9c8DSayaw22RMGtvc4eK9aHhhRwEQLX6PeJDDPE3Tq2jaLLSqnZCRkfcLpNDk8bLcQ8nyuK",
  "key1": "5dSyVeZbFW8uhwXwH1MWhewx7VE5KP1ChS53QDGxGAduh71U9KBbY4h2vXcbpyvNAjx6pBEuNNZikCwPJ6doDY6W",
  "key2": "2bkd5PeaviEy8GiXfiDdyuAodH19AnZFMK3jA2fLUhMPNoRSjHBXE6gc2dckJPSFcZadn8BGKoLEGe8JKy1NaHeX",
  "key3": "2xfrJMdFA16zQuKsrhsVAPFKoQeRvCReR75XwNZMWwcFtQ9NsFifSWXTPQccWfLFnSb9EEjhvoCjuXw6u4MSFAz2",
  "key4": "5UxsgsN8RwtCke5uZorsu32DDdQvm4sfQSJZhLeLPm7gXcckis12dKKJdsY36bxPHt7p42v7XQ6BEoxqzYfh3RE1",
  "key5": "31hjPWDXJU6Xyur4q7Ps8rPYfULnmK2a5TaepjY4s7yjQaSrrPzDzBUrs3iUcLcLfYqJzoV1CUbQdZrGfpJSxAiV",
  "key6": "4JpGSYYanzEvvBSooUhJUWhXdH8MaaYk4hgM9DkM7Zf5LgDokq6Zbp9EF4NxMeirr7MQ4q9YfTQ4GBUwA7FG53V7",
  "key7": "51jkD93sEMr84VteYK3R3NJDuLDQt6fhacjTQhbRRHVLpY5AToj1AYt3MtAgqmYfYYXixHxE6r8qQaM2HNvSNmVk",
  "key8": "5BcisCmKPWqWbFrdXWCEB2MThDD8KoasPRVCWpigimuWNhtMEfw6HxxxN9XoVqS1vae3jH9TUbSAbpCo6vnwG6jB",
  "key9": "5CSA2QKuaPeeNRBEqXbuPBzty7cr696du2kjpovgoFGyu1xY99j5qNy9iJ6HtqP1izMZCWpvAjEgqMZhRAJHc153",
  "key10": "5y6w7KTsCbFMBcxFsBC6o7qVucSQHRbUMjTsZXUrj6JvE5ASe2qAu8AEoERd2LZhKfrp6VJRWUM4NovXNoYVX77K",
  "key11": "5kkAbHP4nFkooQeNGgZ2UoAAoYgjkahF8XgTVkpKk6p5yN9pwMN1qYB5G7w7e2gLEEZy5JhGKYx2xVb7TR9N6gcK",
  "key12": "uM4z2di3CpTuPdnBUj3R4TuLe3KZxrm1N2wDMnMkjBjyates6EQqbqbRYRtSBGTT3QHiea6kMMBonJN7ijKMw6R",
  "key13": "49YtR7Jy33mM77aCRxSEcwkNZgioUQKshQP2hFi7deNgCkyCDtx9Mk2ugVBGB5mRdSeRZGVgz6JY4xzD7amQBEDB",
  "key14": "23Vs8tDn3BQWD6WYptXdB43a8ddKw2ezC5CbD6UqzkV1tBQKQRjyeXW1NYf3N8T4gsRwkKN8qiVx6NYCYPKVkbXW",
  "key15": "dpnaA8nWk9zdSixCL6Xz19Z1gZHor8277iaoekJX7MHp5Kmu4uzTPG7bxc19wvzAWtA5wFn8jFzFaEfiJHUKkHS",
  "key16": "55pKEcAoLsRnkNz16icjCYLWbxDRfqsNCiMTY9XxgCqyEoSUbKiC64zXW4W6cznKau19ZfijLpmgXYspwat6Ehm3",
  "key17": "N6GPQpn5NajTfTubVmC48Wb9wgFYt8a51KkFNjgThnLQXbs2AgwCpvJZ7wxNFCnUQjkxitFrQRVSDV3Gfvajntw",
  "key18": "2aqdWSh3foJcBT4JjAWWjWHhn2Hr8zVnhncj6o6uD4ghcwNwkkCVSkE3NmtgatqMtJq7xkaWtpVkaAzagaWqkqTB",
  "key19": "DJaEiZCYSj8eUcvcBUmzi2LktRrAoM8GtAaStLFVUCLebyjX3FpEBYY2HSHDsPeJ1YmydRZv2SaHgkGfgWfA3TC",
  "key20": "652Jet7dKRriv1eE7MUNdnCfmwbWCx8afhEDDtCumxzLovo1EDxBdVjhrfMUibz5ZNMdjmV1BTMr6rAE5QHSq4W6",
  "key21": "3T8cS4LJ54q3xWo7SozPDVmAbuZ48dTbbs2ouVKS5tmK2BVFF7JHBkUjWHkBu45NgJX52ft97PAgWQpihR4etCuz",
  "key22": "5mfzCbW5aKDKNThBfJ2cBrhzzwWos2i1gKTNsEuwJ5TLryQLivu715Q5qSj68QEr7n872pkyZ52TBLTkV8hDCyvz",
  "key23": "2SVLGV9NWrh3siZfyFfYyQ15RPPCUnZ2zfk3WqYzH5SN4bJEidRuUqqegheAeRgCjmvq8RYGqLM2EtT9ueegM9vg",
  "key24": "49Qy3QXcuDCD1AcQ3hiLcHw56KMB3UrcxWyrKtVJPjy82EnR21YBeKT1BMV8V5ySXxg3uWBDMr8LQ4TqUPbRDEoX",
  "key25": "3uD3YPBgopFGXYfCGn8BrDsT7zsxGZ8B2dFtPvbzD8eQenexAQK1aDomH3FGDpi6pgQe7BEUAmxaMJ6Rtjy7VgcD",
  "key26": "3wUxhqesTcwPuKfxCAaX4mmHu1ZmKDuhzSttaRzCxXA33QGFP2bJPnQXpcEVJQ5wwWow33knsicP73iMU8rHDXBt",
  "key27": "2bg2k1eXw5kgxDKJpPafR6ZdJ9H4T3omMuptgqwPuFR5GuuTAGdGe26CRmrUXHYT6VYgtmabxHAEJkaEjEHZeXKH",
  "key28": "3gd217ButLxtPJGPJPH4SsEEREMGFrMcBNKx2wneXvyApoNnNBiTJ8vF9wcrQa93GS7dL6tW2JA2xUQiXLDwqwZR",
  "key29": "5BTfDmpDJAhDMskX1a4N9oAvMF2kFh9snbgtG5J4J1PFhkeb77UdyQZm3oSQ9j9Q4bCBcbECaaVTkZqZXKqgQo5j",
  "key30": "4oHkG6dp51V9QcAuJ9dJ65314kRMqcMznvPHqhRo4aMuTxR2J8oCrcJSRDw3Mh9wPqnozNkSmcZjUUWCtpnwozqb",
  "key31": "BfPE6ost75yLLtesjKeoEkyUWe5m37w2mokDbQoVS4emVRzqXA9ULaUv9HSj4dYcdWSAb7uzKuPeWKK2emdoPs7",
  "key32": "4n9C5A1bz8MTCHAki5GnN3o5QdtdZmJhvzJzTGQUVn82ssFdHYLEKhED9HZwuMXzQeYP9jnbcEeM9PK51aLauU8k",
  "key33": "37v2G1DGbTKzHLEeveji8upkGCA66b939TfQibY76YwjKBDMDeTy8hnFmeL8ykWjVJNfpK93YPF7fJc2EqS3DpUQ",
  "key34": "5UynjZWZY7tDUDLhaGt7AUNEn4cYf1ftb6nq9QW9UeocNVaJQgDwiBYKXiPK9J58UVbn31ctBaQqbSaL61b7uqgd",
  "key35": "2Awfg9xqcok355Hey8YpdvM9BDk3PUUefxyyYJV4wHxyDRxHJtGQ8fB5iEs3xPfqp7X19XjxydtTgRnjfnHhspG",
  "key36": "2Sqt8qBexbcGmVNvrQMxA2LQ3ZDHYyb5eSzhEkwGqFJt6tjwxfdP5oiRN7pmMsh31zq9gkPiTfyYQhSf72fveW5C",
  "key37": "5Aeop9ppFJ68LwoGaX5itvW691USEXQxGb2w2gBTKRawK94UvAD1PHFyJ6k6tkVfpEWABWuPPWUfCKhXLZMs9JjX",
  "key38": "2Qm1uehf5A3dcRwmS92nxUDoPJbS4tc4JoY8o4m2WgMFR71BWFkx9qZLMiP8eg6RMKFhYjzee1wR6EmS1chEQup1",
  "key39": "3RGHmYquxyced9FZKGNV8NvRawVWY4NWRjFhPBpPvgk8pGCewwpmdDPogDSh6cBoTiTJcFRG2kzCYHZ3UeGFN3VV",
  "key40": "3na1MEoen3H3kLgXAHJ5wTinu8bCWXvJtHQxb3hFVPdjKsyo2hEBKDZ2GDfyUqsCeNndZZhrehPLhMXn7CciShZt",
  "key41": "3tRoCAi4GYBjXQBEefcdbFiTMnqUR2DGuusJLu8dUpcVUNNXf4aTEz7RNjekqQqP1HysxBp7mKktnkYTiPtYxY9i",
  "key42": "2jX697qwWvQjLVEQwaZWWbFpanj7ZPtQAidaJDqBBQFEScmAM5AVd6FRTjiNkMkmxS8HcyQToAkVZnoWWbtgVBLo",
  "key43": "3GT4NEFsm5o3ZQvpvCUXwJVYynAeNJRtN9TDTx7ToefqwnZft9YKGiMFbWjg1Gu1s7u61hWbcWzHTwuQDxcJWnhq",
  "key44": "4Jtx5N5xn9Mefu4vZQRM7QD9fJ32oyQqRGaPFprAj3RnXUCwmrHAVBSW4FVyQkEJuzLNFTk2rXhEzDgBLAWLgM45",
  "key45": "4uKmsnF348kYUNjP3BpAMEJp1BdPaFQDuhKVyjJTboVGeT6SsVTrntFtw2zt3ftcRHiVLT9hcs2BowMNSMgSptFo",
  "key46": "4Z82dPpVkXkJdjaHSRdTSE9p1n7xydgV28KPtsyHxmJsTLgvVN12K5PrKLx5Su1NFKWZRoisjVik9fvqS3yr1NEw"
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
