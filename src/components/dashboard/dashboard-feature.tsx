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
    "5VxiGGQzMQn7TA1fgHDxhz9FLB9EgKNCaLWVSrGPf2D816rRXkWXxB1ekTtmCeS3s8x62wayP6opvetNscAfoAmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6MRYSaTaf2UEn3LqKgnrHX79e8FB13fPWqz4vdJUEnETtESjr3UHijBxcA3bU8FYvLvmxKT6f7X4wadLtE6sWw",
  "key1": "5yXh5H276Z15eK5r24s6kFUnPf3deYc9yTvwEsreo9TtwRLM2ghynwKpoBnJHQqJkeKiSymUGj81XpBV7WvkNXis",
  "key2": "5ZbEruAdMuT6KADyrfQrtf2r7nGXya2AsESyJxEPqvfE8nc3Yn567SAPfvxqKLzecdE49U69aa9MYT6cdGDDHc52",
  "key3": "ZQiKgrJ4AEBWASQa97whYRytV3TpGSZV6V2YQgzvoDhjQxE62kRxhGLJdAdtTJ8hxd6NHfXpZfQfB6d5GuvFuwR",
  "key4": "2bhhcFazBKomH9ErFCGydYVTzpu3wQTP1zmY6YBBsdEXByBrE71jVtmAWoJ6aCEbEH6J5fhsaSQx9CSuPbhUBFaH",
  "key5": "4R9ocv3mq9SMDSkHXaveM6Xe2eAqUV2sH2Tb6ngQqZMbspUFLHBE2bqLRantVM6T1Ly5MBDq2f5AtFJ7sXQtVJfY",
  "key6": "KxuQu3rfix1qQBFGUAkXL2TSe7kngacA41mQxDNFzchLEwDv2wAEoztxYVuHhgRpeRdg8iKmktiusJPE3oB9ZmH",
  "key7": "3qA9zuDgCr1B82Yg7bBdiMfy4A6C26Jq7QHk6LyLxhgywLq3AGNqF1tYHNiqWUheTjvpvxdSH8EojUU2G7ph6ffG",
  "key8": "2j1xMANZQkTLX5Bz6UhRNknjmBkZRVoRVuQVTrpJ9ECZhfFj9m9Cw19emuAQKEidwiB6zkYxjJq3tDJLEAkHKiY2",
  "key9": "RpxfhNTdBBFSJTk3BEZxS1QfC7u8WsFcTpWzdbMSDwcfbptnRUARSZxNK3MuBBbS7tGtYUwnJ9XCXvPdbzkwbng",
  "key10": "4ryipLAXeLvMtoJcmj4i5SkHmpoP1umFFCaYdSKZRz3v9QmNPsZeqEy2FvxYWF38Zo2Z1zku4YJ9rVCfVn7NDCxX",
  "key11": "4WahcQbzktmqcDhhEokzUCj1Zts1qnwgMDZW65HsEPXUU6WYXmTXinekUnxqBfEe1aAYZjzUZGyS2qkncS4VqcZX",
  "key12": "5AKDWUEQdAP5ZJtcp7BrVuGLPMZu6yxVKbFsVF755HqjEcFKMg56Lf7dx2FGj3kpUWdP7Uzj4ji8Es8HPCNrksEL",
  "key13": "5FEfN7kLcSh4Pj5unmidygjDTy4r3AobsvnXg9P9ianXaW9BUmD6fvzVhDwddmw1mZDeN4UEn2BRfvoZLAHxsjrs",
  "key14": "2dwZW9eVJzQ44Z6DhsiYLz4qfXrFNUWK4duhnHVcpfejZ77Rt5Y8QuvnyG6marXK5f6EXtkuWL7pq3Ed26daWUNH",
  "key15": "5LymSFYnzg81qD5v4v1o1ZeA8FgZPE5vECZDFAhjzN4nzyPSeACuyLviVjA8SqjbtNV2XaxXmEkoJ6CGimMH7oK2",
  "key16": "rAz4VFbBGhveSiTmRUWy8Rcv3xTCSRBENnr2jkqxkGxiA2NNW8NtuFuEg8HS54eNrHkTBYFQrSbmp2eBTKaB7NL",
  "key17": "2Y8uFpGPnGKDUP2SaFv5h8WeE3M6YhjfLWkJhKRbUdCSvVkYdZZarpEXLXtBLdDTYqroq6pzNurRCxnG1nw3m48G",
  "key18": "293ixPkLTG66xRRuLfYSA9ZmJNJwtfpAQbuS6Z93yLqLMgmEjWRZ7fDXMw7rUgN4vtvuEU9D1kx8EbSPGfrSvVfU",
  "key19": "51cDzE4uLvJi6EdV6cEPbgHTk7x5wmSf6jvVaiZZBUiVjTUGB85qYbaUvrrxPUj6PCcMaYHKHJrudnxzLHBKWd8G",
  "key20": "5RgdMRWC9gq7T4cfnRpc4C23LDPmczhGMqbUvHdZWehXvogBCTdygSovYuk4MApZGaxoKzEhtzESK2GeKwr8m9Yk",
  "key21": "5yLeUE5xjs33ptozdwXSiZMqkUQCkbXFVU1ydPrRWLCeiAoeVAspbVkVsoYcMYncQ5DLkVzdWNY9E1SntmPTCAdR",
  "key22": "4uPs7YrbPMz5no8bxau8qb1zS3f2Qgrhuj22SLArsPTE4rifHwWnQxAVnz2JoXTHQL4YrKUWUmkmzsZnsX8trbky",
  "key23": "McdroCajczfja1A6TfTUVrvwQZQfdDbhpn7srFRdVPNTruWGMDfPM9WoHmTKWcZg2aJhevF2VRCraXU6i4WkHhS",
  "key24": "BqTnWJFALmBwTwPuuA8vtczeMeEQKJ8a61V4jYy5QRCFLWqFAo6p9uoKVhbvuEi1HebwaQW4B9i1SeniwiUUutZ",
  "key25": "pq4q5CLbLSKzXHMbd1JsbD1QSTM5DzufcgZ2dtZRF8tPek7eiFNFd66p4bFKHBrF5jNfpRf4mYkHtRkUkhCiHmy",
  "key26": "4q4vcGmumAA4v8ZkGj6aWAdkHCDn3eZmGxe9LdLEv1tp5Zfu1hrAen7hL3wfGoKPXsenWYUXipkTjXVfDGtvzGEr",
  "key27": "4ZuJhySWcDAZodcbN6DPNAcJEwmzHYHzDeae9nEwHQpqrxVub8bNLhXGkmBVm8hU4JjnCN9agw2erHWmVV65b2jb",
  "key28": "4UcHdtEVrfoTtX8Btg2y8bKBAtF9BWbc15qNMkstnvfvzX32UyFSgndDkFQ79YJnAsDBwk61U6SETMpEvCihsyWW",
  "key29": "44rmySDLALV3NbEusxrnZQmXipRmUqB4rdmwLAiNuS9cUCHRS6dtAiVMfBtQAjdfvJZ7nnQn9mD69HQNLN1JP6yb",
  "key30": "9FoimnNeS2rokxAimzU4VuDk4LZw6LhNjx7K28vnQjgi7mZEnWV77QXyKVS61UW1cQ3mowcg3MZzvbdjNTmavQa"
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
