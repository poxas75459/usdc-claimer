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
    "5e5v6mfAAsuS8NsQY7GFBZmpfiMojskgpz1Xy4d1WyLqBQR4LB1DpbvzKJLB356XJbtBgQHgdP4jF4Wv5H6j5eoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nHCHfTnrsYPnpuH6fouMAbvtwceB22GZFYaKSC9spRnUk6Uqih7FgDKuAY8uqa8Uf3S8bLo91UPEH4EaCQrPKzv",
  "key1": "36Qi3ax9KEhxNGsxJE4GKpoMfT7nVp72WtQgUAjYimgxoHTzogEev5eb7w2ytbTY5KEX4DBfP6BbAJXexZPgCzuG",
  "key2": "2biDHZxH1sTGP34RyBYFhwD2N83FvEvMYFwWc6tW398yeVGeTKACYRrcZohaUoJcGzjsD9V6o86LK43eYEfeVUXE",
  "key3": "59B5FXnnjx47BKPKsbHV1ZKWWsNV8k7rhVHGH4wcjbbJc2SdJGjZjvPwwvFzFFWRy7zeduTNc6w5HZ7bpFFmNS9M",
  "key4": "45y4nPJdBuTGs86hsyx6qy4hFJiKJN9ex1s4NavipGM7KK2viXZrxcCamqYG9dhDD9oQw3gRYW7uoMNPhuUSwZj5",
  "key5": "3N5SiuiifuUJ82gEX3W6V1gUWRtDqk1zAU5HVEbNmJeT5JYRt9UxGsSrcf1syzCu9A5DtDvJtx44yYvD3gJ84w59",
  "key6": "3VsGf7PSqxZvjN2HqqkvHeUvkjjxuU5VLRDJo9JxezCVfuXZw5sSL3Zw7HknvdRHftDyqoutaTKPuWWycG4hNkKw",
  "key7": "5tHyMNbF3PSnEiT4wGswc5RvX2agLnQ4HM8wmAZCwSDm7BNqe7aeC9oDZDibp78GyfeMekLsifyoZr4x4vP9hENf",
  "key8": "uptPpPtLykj1Af6LedSHTyxwQJD4125Xuy5gKBuEaUQakSLgpbbkTYK1pPBpFqEG2394bxYJSsFmHSvXEgMA6Di",
  "key9": "5YQeLEqTJnuweHDcG6kXdWKnohqaThomAksrGkQW7EFFZqzLNnQix66br8AanCLNFfF48gthReD63fwje82oKfNh",
  "key10": "4CKJAhiSffgu64g3JtMCaYPuDYBz8NvZh9hsbj47KixJXvwULNhCptUYrWxUSisg8LvmjU4U2XNmn9qfLwfAQftg",
  "key11": "xqWPqAhfSSQNYsYXdrxFNG65Cj9W8AtkATMZMUK1v21apetuzp7KVj5QB9xbygKVB6jYP5G4JqYdUwkLQVmHnug",
  "key12": "2RnznqoaFbZ2QAKwsffyDMK4gHnJURgnCNAT5KZMgGyXnMcodogQkP1eVyA2Nm2iZ4njUGsoMh8u1X6UYhNGvQY6",
  "key13": "5bmm4hme8QBWk8UXsHySRvy2AN5X8Yxxy8F9s1FUDaWJQ5jrMGxG4e2WyrLkSPhQnjGBNiL1mBy3ufuR5qfqGsFK",
  "key14": "4MgKwpmgmPFL3g1EEcipWR5psDnMnA5mwHKQvZefzmr1QrFc2ME1H8uYHXXqRKGxBUiuJLPY9VE7x4f1iBYz564R",
  "key15": "2m4TSYe4Fih3yXjhr58tPdu4wsxrYasNGXEG5JGPuGaEB4ALZT5mFZaEKjnQYQovWgH7Z8WZxqzDMcybngkhgyB6",
  "key16": "5p4P1Jkt4ePbdiLdNrdRYWqS2DsqbvWvBgyfJLHWLXpZcnSnDxAF2ieAQgu9qW3ijyWQu6uAJ8ZtmmVcCE4bGZWZ",
  "key17": "4Yz7ZcgtTG8Dm9LgtJZjUtybR86PYt98FKTUFBHSkVsTT57Lxc5cramib6PGnvpr2ZuDfgLZECzERpj1n39qUyTf",
  "key18": "nQ5pin8wLTFdhshgJfY1a2Gbtm1HReoJcrSBVsTEaqf3ccEGNvVwMzqZm2wGcLRSt4GmAtKiK81mWaE5hgPx7CU",
  "key19": "23aoPK5ZSf5StRrizJgFnJpYuC4ger3Xd8bJYu67yzumPidfe3axtRWMJmTBevN9RYGMtMFHXRjnaPsQzfpuMbns",
  "key20": "4RrzCQF5Qfr5uqHYX5xHU3wwKc3ZqszL1bX2hJLFu8LvPsuua7EDNmWyQNJi5FpjKoMcdbBj2WdtJ7qoyT6wLEHe",
  "key21": "2VKkrqcRDArquehrNvtXpQZVpjiCueg6RZs6cXQXsBDVNr2S9KvSmnfKDLrUqVkfZWLapJmeZH6KuM1nxb7hEXuJ",
  "key22": "2j5qZHyciiFm5Mj22uYA5md1YbDPjaq45KBXXi51gwbeg77eGuX1r3vFXnNgF5XbLsxfzf4xk8CRSqEKWqk1mjEd",
  "key23": "3bgkW9rK3xrmjTLabQGaB9JXrUvqkFLXP1ne7LpZsQKBZ2jj1c5C3UVwGR5HbhQxztG2nQYkscYEYvVnn5E8PTUg",
  "key24": "4cV95cjjZNwmYeN9C6hz7sSoUnn2py4Fwj3D9yXrN66ZBm994xTUFersM872UtdrF7VJ5GjyHDYDPw95MgcXTyUk",
  "key25": "PeB5ZwtpxGgwDCaFSxQZAtisWGsk5wPyo849vrs3HepLZyQmWxDRGR9HtNoqoy5fVA5quzwn5YC9CGbBNCJqHTQ",
  "key26": "2phpND561ed9q5TXZuWM6SR4DiGPi9cYhaYs9eu98hrsNvCr28oZiYHVEWEmgDNwMZzQEAQxAkv9Hkc4yPLjL88f",
  "key27": "4JjSnxxvaateQZ2Ni3TKA7e1xJFA2mQsg8kiVLWDZAk7whBFcAudXbg11F9QFPoHmebyosEP1Mo6M49u9Y8BM4Ap",
  "key28": "23mkg74XCjS93PFVoKyvTdv7LoHinPmMW5WBqNectSwA1FPR4HgF4Cg5xiVAZpzahSUHa6vEqmJG7SgPYrDP2F6f",
  "key29": "39n8aFpW6M4YtBv1Wv8HZXDE7X9jUPkigqaf3REFDTngzkojZesYdnCTkTgxBuxrR7kWf97L2QTBCbef4rLT7s15",
  "key30": "4RSgaUHx6ghzLmmpR6KueXyisRT1Kw5K6Zssw1nKHkHxhJSKoPy2EGBtk8xj6EGdFpbbWpfDPGMs4rYV4SyuJr3F",
  "key31": "5PpcirxukmPuQiMs7hvUfxG7fsEZVtUAbKEiDABKeLBcFkGkpFrw2BR5bzLPgWeTJedAq9kJrNQj7X3DFCEYQS4w",
  "key32": "4jSGxYuskQr3c8Z4rwv6vrEihSyQ6kMSTLqLkLGaqtp273bimvNSrqdpdMWdfHuVmC3ni7aXEmAFyFaKoT2cY15f",
  "key33": "22L4J6hEBjMmfEE5pubBqsRrYfKBSXMzkTFgQUe5ruX1FRe4Je6qzpX3nujRp23AcD8RZwtMjNGcUqe8XQ3WiKA3",
  "key34": "5BZtHnADiY2ouqQGHE25ofqcNxKED3WfyyZv2Z4utLBb16r5p9pdniiiZUtH1a1MhbUFjdyJRwag4LU9AgDGQbMY",
  "key35": "1aPFV7u6cAjxKaiT8HYsqmNeMVQKGQLuHw1wqjHs7NeN1FToxDWkBgt6jpxrhWkw5S2rhuR12W47Zr9SiPEnw8g",
  "key36": "4CFBgFWQKU7fBYTtRtk3jsrURxDXPS1Lkfjtxd8F7dHfT9rUAzNhPR5BgRDtCF2CEzdj9xqvALAhXNN7pzYCsqgd",
  "key37": "RRypdajJEsCdTp96oxNaFLXQAwguf8QTw64FjTYnajabfq36ZyYC1o3G7ZdivK6vYwuSTtrBtt4AGGybFp9EoEu",
  "key38": "MNxUZUYiwwrUhd9cD1moFAX18fvTzLYtXve1JaeRyFXTmb1XpjzrfbRciv9VJYf3b4mjqMnZ78fpEBFNHXSDwAz",
  "key39": "2dKzzqrwr4sfk6V8uWSE18ZAVeq5yVsp2FvrPvEbngRkK2KkkqCp7knE1EtdjspddmK43wQQpk4W8NqmdeQhMEZY",
  "key40": "67BSXzvKXoWj7fe2ybHRAkwL3BFxjA2jFxHNz2a9qASykd4d8FhfZcFTi5of9QSCdo2a47JTV6Tm7yMyMy8CjTkk"
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
