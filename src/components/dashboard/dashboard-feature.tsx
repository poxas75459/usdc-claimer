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
    "YerJoEz4VVwruHwF8aQ18zCF1hiJe6pEyfcfWHvk9P39iSbH8iC657kgDDsG2szCFKvQLfLpjnUhK5uH3m4Jd8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c2vibKYWX9sThKQPh4UGQfNwk8HWho6TVo5k5KHmvwdmeW3FYnTuid1m7g9QY8fAmSZqZToX8wdiHmVBV6ms3km",
  "key1": "5oaqJ6MUYCiAKoi6g6yuWsZpEdfW4c299uU25dUCNAwYPhUwwvEaTCwp7MDCbtRRKJUxZ8PuBubUFqCtgQmw7cCU",
  "key2": "4vHBghHih9mGjtF5Z9eVhZiePMYmg41YHE4tYSDvjKiCoohJkBhaLcMiViFpFfmb7k8ffHN1TT9hUez1SAUQwaSx",
  "key3": "3Ufs7JGT8w1YxX22JG5j7qXG12rKGyq9E5gx65oSi5DJxX9F1WFQa5pExivT5k886TPXM1yqLUeke1Frn63UEobp",
  "key4": "cfH6ZeyW6RQUQRber1wB7QdqsfRe5Uo9Qo6Bt7hLy38F9qwY3F4wjaVxvvM6LysCiEf4XkVbP9fCTfUSV92YiR4",
  "key5": "3Ry2mZXRauup2bVLuHrAzGSv6yn3yJG7onj6zV8fSqVScKQf946QbJb4b8Ug1HgXDj6unuWbT6XThppRLDYofuvG",
  "key6": "2katLRoR1PGKpaXXZnfHHegT6VqTLTg1Pm5BS5TTswRRJVeengnmyUBxGfjxHVJ2bFnwUZa67TeNpb6AY9Mud4LD",
  "key7": "Nt7B5bZktguKwgKwnYow53t4goCUpdWnGvLcsroQ1xvVvrmeaGLeq7frveMtvAY8Lrz7ygjPtbCSrQj1CgcDAAq",
  "key8": "j6BgnLwVeWuakDzMCKw4rKmFxp57VignxrPWiPLVUemv2eafXiBxaGm9PCUTpWz6N5ygskfPjxQBiXWw2fmmVBa",
  "key9": "3grwKG8bUJJ4cJTBxN88iQjAg43NwvGBr4bnbM3JzBGxtGhCPhsxLtVvEgSFbvxMUD2D92UEJVo5Je2RzwgqTWiu",
  "key10": "2U1KDHhLFGpWVVxx5afLppwAa6xktD3d9NaQ9a5K3GTVVXjuWbJ9BPc8AE3cg9B1srxfgLztg9XgBy1xy7s8XzDE",
  "key11": "61p8eJ4ZM3YsJ4fk24VZF1bEgi7vMqhu4mjso9wERTgXoUEAUHDSMzaGvp69aBLTmdap1EYHdK9WeeSSmskAhft",
  "key12": "5mboUnrom1i5qCsQJupEj8Lg5gv7yFyiLpahVCAtcZVZqbCxP6gMBjY82SVnEqcgj53GkmTNvSeu8S576vtYqRsK",
  "key13": "38AkyYBkDzpUTbKRNZBKoqwEarN3Dwwku9yjendMem7LrGc4oJHsLHTwyF5VW8BZoWV6cc5MsemkhwvadpFhDm9m",
  "key14": "4dWMG4Vjrr6nHM8yKxJMswWsdacQG57y2NzK9Pd2X8focZoER9vgFUyp4cQgg8KZVQcoRRDS3wrw4fvJ2FaXGuqT",
  "key15": "2Mqbc3sv5rgbwywR51Zy2K6vPzyNWh3dbx6o2yJh6nQnfYqev4UvfJnqiijSYHAzkdGyfe35KLetWkQy9LZLVhDm",
  "key16": "3q1MdTAfZLyCV7ARb9zHKE6jWtMuRc6jhPdXjekE629P2ANNs1fQdd5rZ1zWzittF8zKTD6x4voG86GkLAn5iDKw",
  "key17": "5Fwbqm4vgkfNWMGvjcMp3Tf3VZVhmv7rSrTYCRFigsiFC1uy5wHdpKtR2ouAM9wrv8pjvW3RdyuBc6fKmh2okJ9X",
  "key18": "dvWGTiSwP2ncfpX3jgWQBJnsAMwpGXaMZSazy4c2dZbx8XQYCe32YkZLknWqCALAtvx6SVf3ygmhZtArhmQm5a9",
  "key19": "2oAtXwVLdhMLMp9brgRpmZix5rtg36ud9jM6ZM7dB2MX9paeQoCUA7NEPCsgdPBBS8E4xamRRgo2gFYj4GSLAYTb",
  "key20": "reUeMnV9j3vpWP2UUW3g5nUt7BHoKVpjZysgjZrkShESX5xSEAdJNp4XnihRqj2f9bhvcsGwSJ7dNDXQPCeCmeW",
  "key21": "g8Ui2nzn3G5ERNJvW4aCf7BwncWX6fPbyruiN1VVtVxHEC8o367wiqPnTdYgvwktkLngAekxyPrcTbf6T94gg42",
  "key22": "2XdCNYySBT3cVmntswztd3t8ydu9GB3HB1FhGtf1QHLxMLSQN7fmrmKv73M3KswKnSsumNbqJMaC57ZjJ7uXFu5d",
  "key23": "wtKxXcDfto3F7B3hoBfpGcviCceEgJFXjHnLXAPfTesp3YWsjiPYLxXtgz6RAnEedGVQ83DN5oRFjWdGASEu9ic",
  "key24": "2X2AyB6hZ7wSnwbUv1cV6dDseCKRqvhynWvZ1gxVKfeeURXS9PNVSgGc1S8H4z6YQAzuZryZ5PXbeWKENCaKpwT3",
  "key25": "WixwAxpp7iaqUc2t1yjXJxjUd66CkTaDEEBTxGoW8LzKsihodAKK3gHnqgdgStA38yTCGYbGSb3yiHzm2f8M4Pv",
  "key26": "4aeVF24YipXTHmGEreNfT9PcVjVAomRaUxWW3RUetkbPwsCbPY1Hicffg58shBYzL2t5jqStZ1n6s8nTcf5su6VG",
  "key27": "Jj1n13SX29BGcDvUs2jB4kbmB92UzCgMSsD9a8idTiHejs8whrUQxL1RezVcv55EQS3LBstL8cKamoGgvwn7n9k",
  "key28": "5dsJKiD6SJziX11z6EiqJs3gDrRWnyEcTAt5yMewQ4ggcM1PwCM7GsdEi4HSKwxysor1ZZG3syCg7Q3AzNEJTiKB",
  "key29": "UEjFBUnFHZuXrdGy5URrXhuG3hYkE5WKwv5JvDikytRNqRmyYvmP8EANaSf7M7AcwXfGxpVTZQvitcjwcFoFSka",
  "key30": "3URWMLmxMGepeyF9WCmxyEzcqmAdV16Bk8tvDsGu3nhCUaW799EaRPGSKVNxMKd2GeJt6umdrurbWt1xLHYF7KE7",
  "key31": "4iCshWnSpNXD4rnFXVyeR4iuTpBWJAZGKDg7vRVVgeYf9WedCGTcJ5LU1ZUzMtvMKbiuFyA99UzyHBokUJz3zWk6",
  "key32": "XJq2rUEXMcpkJ1E8izGeL3nsm9rvC4ztRvj5S6xv4s2TZbD2Y8RH28x4EYsZZ6C1ZkBs69dDaz7dgNJ2qveHUMj",
  "key33": "2SYBHNPf2i6F5chSNBkZvDt6SvH94bK1sWTdSNdBDmfj3jQg8Hy4n1qqBGmi1dEndL8AiqWpkutmVD7gD8BekST6",
  "key34": "3Bc4ELEBvn9FDuGGWMdZ5gNqUyDVY4fBG8HQaqxmDgPmv2MRxRGd3uFMFKmfciUrT7JZhpWSud9TgGmVFcpZvaTe",
  "key35": "2xikJeUrtcExyXr78oXC8jpkLSxt7RJ8hT83PDBbDn6CR7cdAkLVM1aWjrFjXvhgj8zLmbbtxZhujhYTqVh8YfW6",
  "key36": "47CyLdnspEaGx3ugf6JanpunUjHwT2CrVhJqzNDNGL9TCncA2UuqB9RuoscgFPqcgrJQEgjJvM1TsQw9kGiWgfDg",
  "key37": "5Eb68dWnV8sdKKj4iuP6en44zDEsBAriWmxFdsU75YTxihHjHAnFmJhvRxVgbxcG5tm9smPUMnGs14zfA4TH1ZvR",
  "key38": "p2yM8fShyDU2D8aksaGZqh74t1z5CwwnaFvCNXy8j9KgRn4XvVmH1WsrkdueySBhWwQHh5Dfow8kyxUSKxE1SBU",
  "key39": "4ih4bWMBtJFyWWxdAVqMG65p57VUM3cgMhMQEqAMtuY5gAKJpoVzNZ6yHsynfUYnr59fwykwvvuGoTRaWjZy1MxV"
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
