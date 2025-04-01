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
    "4SFghusJ2t9fXvrky5KMPFYbX7ey5F469X76uwqevZZ7ogrs4QBPSU78bv4xixDMkJapvCFo4ykMTfXBApZ5ongh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37XZjUjZq1uoVMmxQ1EaTd1TCnNWbroWuUDPJUBSsmApp2UnVhVCjLghXASb8UH1adWegusBMFXbMaSBxaAhNhYv",
  "key1": "5NgbdfYa7ZjiNahsCjPYy3jkB25Vtcpo8RBzjhMFUth2f3JYogDhoAT2S73WQ1e8fVvuqksZ19ipucGSSvRzvFSy",
  "key2": "5aN6bzMqc3oGECatwq9L4aMiDDcWBEaEVhAezqtR7xdwEXkkTEBUCRj4sBoemPbajGeSPjsomVDNTK9Y29ccDtQq",
  "key3": "5nYuCUPUQg136UAi6MTA5xoSb5hL7o7Unax4dpJAFm6d4e7yf5x5oHGwJGdAnbxVMVmJj59nDP8st12CBEKqMe5S",
  "key4": "4wJ3uPHX4rJd32kwfMgKgUdhL58oG37YLNU2pGbxMQQcreAGKfjxpJYwVVnA3EVTWiccHcZT7rgujD8g2WuMbmos",
  "key5": "4AmX1jEKmCPGLtesTFu4zWSvPJEksQwybZY5NF5jSUY14GohTEKuMdit4WX2ND5zUvEuERf4TFXv9LxEKGGDx9R3",
  "key6": "3FeprivJieKLjc2YnwkQBcB8QUcodz5Pv5DKMX53E37QYPzh171BMNs7zJZ8WjfGu7ioAgnDM1i5Y7C2saF2Hi77",
  "key7": "2q6kCTb2X3RLp4jQJu9N68uZF3kUnadEBZKk4BSwbbXycfTUpmVNphytMZ9NZi5Q7kMyoLLoWsvCGMWA4ndPfU8J",
  "key8": "2jRyYj84nYwJuAuNFWULFYvsF7aKMzTouyjjTFb2QuFra4mG51VCWRAq4HVKz9P8r28XVhxiaSW8DgRbxrZ5sfNz",
  "key9": "4WjvkedDYKVJj5pdDkqv8Ee2RipMCyazWy4reoWySGNKgRfeytNDoukSnMxPErHisuZbCG5kji9prXzg7hwDLUXq",
  "key10": "27UFdFfBMrictFebUNrYgAjE9VT2X1njdDj86Q1hcW3cX8yAdkPnvNDmKhj2XcdXZeAo3tBLEC7zS1yJXNe2nCpf",
  "key11": "2bhhKuqye7y8vGVfm6CLmBdKaqr8JhYdSdZQbXMochEM9uxrw1nFeBxZecczZYKvoQKPhdWrZNjiykGbjoHom6ML",
  "key12": "6neWYgiWWGEertykyZBAhsKmRSEtGET7fHNR4EwmBHKYv9WChJMb2Gyk3Ha2GLvMFN3EACP79BbDKP8FaYsxzz7",
  "key13": "fuD5YAyJos8Z2vnouYA2Pp77h89QjBKAE5wL7NDqNBZDbuyWUEkShqc8GVDMbRRF3MQuJ55xc7U4BPKi8NjaYNK",
  "key14": "a7rA3xusCcWkeoQAnkaSJviW3L8gfgwtKZqyZAiSCBdHtXcp8WMFgMYQZ9ZTSiK6trhDouXL7yEF2knG7a5fcjG",
  "key15": "5xC1qi9K3Ncu43kMMyZK9kAPMS6SjHioF19JMK2fWgLXDPoVRdZLNkCgsNEtVCKSgNEAcZBtjU4ovjNFWVFXFMYJ",
  "key16": "491W9cnSxR6F4civ4pCzxQwDtrZ98EtoLy9vDEkAf8CjVaX8FJm3Sobz2XME6QqtjVNAnzBa6bPszxkZ2kmhJWTb",
  "key17": "5SRy3DqnpYEjt94cTz57p2rEv5ByhjXDok3HdcuE7VFgUm9rYhMsTYAqqyr6MRnnxF4WL5fd3Hs2BhqpuGbiU3cs",
  "key18": "3WKBRumiNbEmNFYL5cA56nAvmR2mz6i4rByC6zBXGq8MUF6N26QZBuAc1FqiFfbZQwFj6Nr3jZaMQYr9U6TiuPgS",
  "key19": "AJteAqmfRFnQk1wowPF4hfCBDyBbBQka1uyu1X1k4T4d7eKWnNENtg1PW6uzHokSaryyPivEA4VoxoziyyCFBTe",
  "key20": "DZFqCsfqfRQZ5xDXJXPT5XVufUYwDSdT5JRNW6YybbSAkwiDiGoTbbEmE38BBHggkzSoHwEfdPXNxR4a3kqmD93",
  "key21": "3s4sd5qtqw7mwwYHiEXnfuXHdYb9HxbNzWqysgCEJKDjLEvbRg42nosJg1ncMZG7ACX83jctGnHnVfqX9yy5Ukry",
  "key22": "DAmS32i17c8866epyaUiZprzN2GqkpWc9AMf1wcv6JyomARFwubAHZE3XksASb3ndgHmv4Szof2upZPdgGHzgHU",
  "key23": "2o2wQZhfXHQD2Ps12iSJprFpvU95MjbNHHqq5c88thLEj7Jf7KobVmz3b8wQXnV2jKgNSCRciL3GzPT7uAURNpxz",
  "key24": "4Me2M7w2JctuQj8McH2BznqatnsG4ZZ8EB5xV6ckQgQrsNGi5RBXzr57ugpCGvhEhhHnDo9QeFTyYBPF6PYyK4EE",
  "key25": "3GcRAwkCm5N4ofGPtxsScTxXqV1a4sFRMKUdRM8VoCPkomxiHdVTXkVcAbK9cUfU1aAKR1un399XyQJZ2r4x7HVQ",
  "key26": "zhJu1ukv2DF2t8datJTifeUrEKJYvKKiq2nd3oL54iVRHJkpdNqY9ipEaUbTvQhFJMuJkBdjyV69w5YmSuwmC3b",
  "key27": "MxVY9kWQJhbDEWvsyNhAxgS6MMTyuhN2rEKG7u1M1NaWaKrssNR7K7482jffjUDhf1jaY52tXjW99w4NJij7JMZ",
  "key28": "5P5PwMLAnyXxVNGp1BM7BSvydfLQpS13GddLK1A8QRh6Kq9uiFTduNcSgmb4HQbT34i3cdVsLGmP6UisEBkVxEo7",
  "key29": "4YwCemRi1KWwQe7NZNNsf4kG7UgKEh2WnWXqXp8dSqShPMt2ebfVV6FsGdwUFpFSm3miptVUqJgL7opgKByca9ja",
  "key30": "XD4hiETeUQXYfCnsWLrTzdfdQYBQpjm5bieWR7A1c6kHv4Lv8taGFYZRVEahiMc1ZAhxzwbwSimCFRg3YiaRczF",
  "key31": "5SS7ea4M8Bai8n17F4C9aWapVS9Hub7XWLgvpbdzpXShRodN3RWr8nFitovYWELPiXQ1aF784pRdh4BRuG6X42i9",
  "key32": "5VhPa2QUgjwTnBacq2y4MrJtzqFNZANMQ8LM15VpTyHrJNXNuKT149GZq4QnWVdcvBbqfEz1kBPF9E1eAk3ZSVzG",
  "key33": "2gWCG2fAvHKBXbPtaN1iCNfY3kDo2tfgTDbiBELtup44Hdae3HD5ezfCvkxah2NBXZeHQmaNsRqLFFWYTG51Narw",
  "key34": "4ry3DcuxfP67u4EBYvmCNUNFHAFeZCUixVC8F8r4koPiaJS9o2FovuZMzPVgyhrK6F5DGDjrsfa9QJzhvdZeBekU"
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
