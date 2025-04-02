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
    "3ZLWqfKfocnJ4ZcybqVJxETMNbe3tHVN13tZhprFpZwJ6pBXHGyhCA4E25AD5RynaiSCyBXJ2xDZ6aMp5Xm3ZoPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mGrUPQiChuW8NZXsxw3NUju3Ya9eD3dFnH4uV7mF8y6ntszoqQEFaHctRsrdPbgTppbwaAUzodYMHbqCiLeqRuN",
  "key1": "2sZ4THAfqjuQ6CBc91MVjiquWmiYsVcJqX73Nv7XrZVYvxETjvyLWJJx6NmkSAPwdyFbvjunVQmSeFRPEgUE2xR9",
  "key2": "3axyhcUoifdTd7gCi3CKexJ87rEgwiHVBL9REjKqFJBs3bRmxVqPXun3Fz7jGVH2NjRHroNiUdZ8TzMUsLHyRYJW",
  "key3": "25KqwKPKC4XvAXcCsnkFjfjdPTL98Q949dYXiwCGSANQSVL7oo5CufhMRXKXbyzUB62zZrv71wxd8khQEUhqcjaw",
  "key4": "4i7LPXBAxdKe7oSxHExnTkrCayadZTV9ADiqpR5eJBUas9pLruhJLe6SEggZFhwJ3uMj2neaExGxdhESTie1LPsd",
  "key5": "qkL5WfMXKVXFjNVQumUKzBgnyii1TAzgi4yBJuTLsfX3VXomDzP9HNu9ZTPehJ87yGMzwjDVkwpWjpJppoxzyvN",
  "key6": "3uYbxv1RqQFGbjejrFjrUKtN3N9SgQfAEiNPdteBfWSdZFsAf7S1os6XhsTX9ixBdTz6e1hEWZiUKf8bNV9yzVw4",
  "key7": "3RFFerczQVdVRpy53uLidzsmb8XuU1DK3XHgUbQhv5qHUDuuhKzddWtqqqMYc2Jtfgdsnvu381Vm4wHGTHoF7FZ9",
  "key8": "5HZuP2dohBcDz4ThfHwksgi9CBFHsqwi6ZVkZkgJWJRPQ3dV8Sqk9eVKHdw63owPu3Hia7fgQCPJVpbvX4i3pn3M",
  "key9": "4AyN4wiBVK37Lt1LTopLEvhRk5oPPWNgL3PXH8nV4Qm2qdFoxP21ssvAbGoMVsi6EH9Q1QgTX29Zi6vMPXwTuETK",
  "key10": "4piGdRf6zsEhL7DJt7qMUj9wfsaupkMgkhh92sGwzqKTzWRcKW2AnXaiU36Q9PY1ifuMX2gNgrnxByzhbTk43nug",
  "key11": "2vMfhnXZd6nCkAUKz2KvN3bQZX5FNS1ZuLbk7wBWTNDbizyEoRW22f3iVcuqTuFXa82V13aSrhtZYq8DpnqBkogQ",
  "key12": "9x5oSEcoe63ssa2kGousSnzCaWSa2KFbC9mGU5ksncxC6hZndd1vQkqafLoKSMwDUxBHogqMYZ8fuHRELaNhEq9",
  "key13": "39ZNpQhrYKraAVRjwHhVFRqgdyFkayW3mY8PDBLNHcXyfQZpZpdUzcCjJ2Dta1Jzhq5toM1wpmi82P5pK52oNXKC",
  "key14": "51ZPNUPKjE7c84qi45jHxKMCMHjbcUSBNVUwmxgAfML3i7dPwvjZUsmCj3VWpnNqoJ1naGvpkrHu6SSb48viiZfm",
  "key15": "4Jo5SdTCHydyG9b1uj1Dim4AwWmYsQDPwMRbHBPU8tJRKyGB2sjdijperyzwd2nVxmqjjCu3LbWVF8wcQicRGvjS",
  "key16": "33b9WrfMBjMDxbR954GnNF6XvLF7PsHGHaHWWCDF8pGRDYP2ckdjyVoeJg9HYKHN1Y47EcSfZ8MzguHEajXsdyAr",
  "key17": "4DspD727xUhE4Lz5uGqcgRqQbSwCpS3vsqqpDNKANpH5y4WWDAirnvQnWWN2Q7bm9QxEGtM3jsve9UcuVJQdEwqQ",
  "key18": "4BrkiHyXm227ZS7C29LVRu8VAshq4TFfd9v4gv9UxyFYQZVQihrApwMJcooiQ57U7LaEgtHJBdc4XFydr6SNdMBe",
  "key19": "4nsRBX61zndgTwSi8TgcrionUHSNe7WEWhBZBRd4fEdFW1hA5C3wrgwDrq7qyFZCghcSFBjJDAfhj4QJWHv1XeQp",
  "key20": "5zmJTQNE9K74wJVbhuVTiYa4VyJcgdcvKdi19LovQDUFezyVVNciz9NQRwQjsy1E3FLBgedb8G1pXefUcEY6qK5Q",
  "key21": "5dtfnJGwJXEtUsB1d9JbbCe9ogSbkHbSxftJ78HLjL7XrBLaBfQ8UxYzhkp4D4fSGn7BQTFaaLcPsMyKbTSnuf53",
  "key22": "3qu4HMY68SmkGEWxLwNens8xLNk2ijWdAzJB6AKfCtq5m7D4PiLNujMac79ymhnjFv8jHMr9zHJn1osLUBBNZ1sx",
  "key23": "4RdGhbHN5DQSvJXQJBPqH8VkMSd2j3P25S8otsLYpBK5E9gfsgREZ4JLaJHy1U59TjFzVi9roqkfYkfQywZtFbFe",
  "key24": "66Yot94wsK6r65VJ9Ldsux1wEzBd7rco6RRir25maN85CztWGkpueevtNvJDQ5QMm7BfN519KK39EdjVKegnAbfE",
  "key25": "5p7Drpih2iE2AUQkWbuYqPceqrbLcz5EbVdxacvC7kQjgBu1b9brB7kjmwawi7Xv42p7agzvTvQ7CDrqwKdLoMRa",
  "key26": "3xPMNwhcUpYZ2rLhsZBYS25xDJnkNf2AtndpJPxg9VHRhQdxng4CtWqcUk9WsWQp9uP9Kn6EbtcRGZkvej55Svpz",
  "key27": "36xsftMPgRfdEQUnsU93bny2m4ARz1X3Nnbxkaxp5W91NQuTmrSTsML3Ft2mEKqBR7CEjaFo5YrNoFr3tcFXR2ZE",
  "key28": "4BbsuU3C1m5Ut5CRX4CvvmANuz25ZGxgELJBGj5WMqTkdwf2Jma97fEdDoCHhh8TZfP2mC9hx6tqxDSRegFk83cF",
  "key29": "2V6yV8PmQ2RTBMvVJje1UskdtkTFjZoGJMLBKhTFUnA3C4QiiLw28nwDmNmm8XkaGn13G4utgyioaAd97SKqb3rz",
  "key30": "38TCFvsFAL2PMavg6vvADuKbnEum2EGWLFeRxZkWbZS48FSSoKu5mLAmTi18uxzsFFXvNw8Q8qvPyZjRj19DoeLV"
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
