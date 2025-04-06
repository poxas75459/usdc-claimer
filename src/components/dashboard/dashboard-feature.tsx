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
    "3EAjUyLNvP4NUnDArh4Cf5WeisUJTbH7nDfGemkX8Uejo2r6gWYaD5dJEtUDm5nQxWEwDbyrQHKsB3juZGQE9Nyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QbnHf5GijmP3uEQmRomtoL6FEMZoZu4BnZBQcjXabMHbRoWhStfA41JXjzpYHRfKwhrLiqhyE73mpugiPYenYe2",
  "key1": "4zaRfwota8GCc3RQZMdcGCVh5X18pw1s9GD6pJTzVqzCEgkYnMUNZN3RWhwLii1pbkSMrN4P8FMMPN1p9BawZwVx",
  "key2": "5Mh9UxEKKQEuBSxxDYfqi7q8KSd3ACq86FJbogx1AnhCEXouJ4mQ1sqSrTFRfSnggBQR1L5KbDvW7QipANfE2Jtd",
  "key3": "5n4HnGD6GTH7JL2Ai7vKp9n1tF7dLaFch7fZbmi4csh8m7CVVyNfijy2fLhRjKXmBWVaMNqxCaLxaPpryS4CvHtg",
  "key4": "56pZgHoEegUx2BEvMHuuRT2gUecxy5WeuNKue5u4M11Fq7p98dxMCQe4AHT579qxUmctKoJhJguKbpK3n2cBeTT8",
  "key5": "4bHeEMBm3tsbygWW1oHaSsNkphtM1dmYW8NBMEX3LDJgBqUEGyqLNccEp7QyG6FyRvSoPYg5ESJFBoCCTM7iTuYj",
  "key6": "2rNpJnLrrA8hBsLA381FCzNCmiRCZStghvvYFRDF7kwd4Km54t3niBvy9CY1UbuQCPP28Ab85ESaGRLw5GVKDWmy",
  "key7": "57B8neeLFNS56z2dWcQXexUXuxS2fi8qtAER6bPFUwuiibXDVe5g87FxDkBxqZkAXWN46ZCmRxYJRaDZvLmpaeer",
  "key8": "4gSeVxdDxiJs57aJ8S78Ho654yFkW3W59L119LJskFRoakQsYMtD6LKCUiWctbeoBbsStqxcHRMrx1Kw67pHjMRu",
  "key9": "4rPgUUvT9XfXsTStX6Q44WxyJb94GowgLebG4zsSPkHx59DvThEeDhY1wYJz3GUEcBSaRnhELgxDVBX6s6iGw3S8",
  "key10": "37jAWXUH9LBRUZVoAnh8Qvhq4f2otB2BcyBMYMX7p6GUToT2rGuuAongJE6QPzk5jVumM7xxcrKJ9npHo2M23ZYV",
  "key11": "rmy1NyDSV47zuNsYoQXGPCCjVzPJdro9yeED9VcAEfqBHRAYxHk8yJVHUySji3LfhwzM7ow9uCpztSwivUurEVy",
  "key12": "25bRUSyicGGd4cM6PiRxLBEu8oVCCx69DWzVoVsTwgEEN6QCe2Lpg8eK3nFU8Ho3e1puSBVVRnWsWC93Uh8sRP9Z",
  "key13": "3EY51XbsjmZH2rvzcAh3vfYdn5NGuG7KQLgihoBuKVygDy56AwLBFpJXK55mvY3yzPruzyTcuBXpMvHJ6WM1MXms",
  "key14": "3FUj4W3Ek6W8Dij7qLWzXYqXNHaBDWUhmXCrRoLJxktwUZ24QLuBxo4YcLahdiJzYBCMhyN6KcgN3ejvDD4f73MJ",
  "key15": "3XK3knmGd1f24hKRrXwaSAW7Cz3GKScf9ELCgZgjDhqSgh2mmKVcgDcegVYm2aUFFzYoAtumyA8dHb9Nv4awVF4t",
  "key16": "5NMUsNTEFifX63MgPXcv3rCkZYdZhbjr78qDK3tGZJKmbQisJ8V2nZE1pfRFhJvbvKhMpGw8UxCwcobqyCLhi9LU",
  "key17": "58E1HoMs3aB6HJEoniPK5B5CPX8fj8XA49itRT3hVqJdFLExo63fn2HzaD2hhokS3Gp9oed8PeZ3NXjNxo6LGVMw",
  "key18": "5qHD47uWdb5SkVhrNGNdAcRZ9KVg9LdhsNzgafartMmL1qvwNMMomhEGTsbg6kbMBPKHtUYJNitEAU2U9WzCyMfJ",
  "key19": "m51gPJYKJuuBdXBnR7hbEzFbukkAdoas4bHuMt1khdpQ89YSwAXV1bLSDEdVHJWT3kGfVDTs9bGzu8pPe5WrzeH",
  "key20": "4p2TwhYm8g5UcBWQFUZ4TE3PA5uxrXjxNTSyU26mtjEyrXoKL7uLzgLs7yX8QBfzTfWZeCAUSYiFvSVXcnMgr5UZ",
  "key21": "282R4cuk4zUbzUm5XvSCLwL1gBamZQaCJRv37jHSwzWDRobENXN6q6oQsfXtjzbsZaHMEY96xwJ7uBU3GUgrQgQa",
  "key22": "HJCgF6ckqaV6vnC46k4pbQiHF1KeaXAz3FJ9fmRXT1FeceryY7E4ri1c5i2RWB7E8d5MAKY6wmsyjJgPB2K7p77",
  "key23": "67gAdFywF8zWuokErsLsrNjnu61VQtMZKbyUdjEToGAaNzpk4oDDnUgpLYYQWRtPZdxiGUV7PW6RhtFkFqnGKPVk",
  "key24": "5GqnghSAT6shGyqfdFXSpFdAqLrJoUiGeSuXEP53U8QNcohUHA2Ujkiirp6kmbdjyTXsrHp8WVbpAdhGTj3pHYx2",
  "key25": "4eoaV9ew5zfRrQo4MrBLwJx6GG3wdvzUmAsmVSAdJDdHL3p3fw4xF4zAuB2twc8CSXpf6sN8NXySZqfyD4Pz57EW",
  "key26": "Ux5a2VvWbGf8GyUPm5e88WNaGwYX1ufmzqnReB7VtEiGrT3NyRff1JLYfMwCNAVVoDnuB2djd7q79xPzgspCHp4",
  "key27": "4gek4MQYdMdRsM77LcWtWD9ZN1RySZdwy35YY9z3onGeSHACWr3eEa51cqWQuHSHhiVfKAhiJXutrxqA56nAbfUc",
  "key28": "2FNiYxaYbF5n5nHQGwD6tmnqFcNpCLNfeUWdQMeDjwAspD551maVxwHdDJXNHUW8djT3dYuyrvxRqTvZncUMLWSX",
  "key29": "3ybyg3QCpzLQ2zacPbSgEZdGU2oh1bdMbdvfJDgAv54TFGubyoEwbwYXqzFUBbSrydrZjxfLgkVvfJRXh42RR9kG",
  "key30": "2br4Ckhfo4s53FmLo4R3tfqBF6jCE1WfYzTcHS5RwmLaDZFMCR3HBzAfXm1911qAEBx8fabPBbMwsDN9yM7rh64V",
  "key31": "37Hy9Mc3wsGqNs55Fkc6uRCgr6fTFde1XHn2q8bkei3XkNPGGAL9NWGJf2R4oMkFkKrNMs68bZn5mx8P2g5AqUfH",
  "key32": "2hxsoZwiXqJopYpKPyVnZnPBWZwSgYJdNhhA5zkF6EbjaRdRq5shKcEBb1zRbNpsGqgcuXkSrvbkm787rHiwFJGr",
  "key33": "5wJ6qnKX37Qm9KQqRFsmaAmpwHdX79buCE8HeNj15adSzzeiHvuuJYxoH16Z7qXN8qZcyWj9FFTzyrebLh1y27xe",
  "key34": "5wwALSqvaNfMRu2bt4Ndu1oxSy9fzCRGQWBV6VhZc5k3osRdUqzMp2nt42c5Lv1YnF7aq1G5mZ2Sxg3QZ1gffe75",
  "key35": "45XiBtZaT1ydayR4nU1nWEYMbCvXgA62wQpvqbth45KrLtwjvqUrusXPa1STU5jHjh8vBdp7PKCMtyWThzBjDmLr"
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
