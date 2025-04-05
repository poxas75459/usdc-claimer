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
    "2qjCjf88feL73XcHqJM6Tm5gRcXyE6VGS9h9EzZj1TCFJ2GGg8pHKNo8SvqmwtVDz4BVqe5ufx2iHtunzRQ6aoA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37tM3yd2LU4uzzFrgVFKm7Nv4c7t4i3qPB6z4893bWBjFbys3G2Fu6ag84rPJCSCiPcTu6L8ny2GWSEbhQZsYv4F",
  "key1": "UYU292t8EPczUiSMTvcQASBdAfKGMcxAf6cAnxNbXtoE3cYn3GCNyi65JAwGmjyBpUYEMCzZyoBDY7ibiChe6o9",
  "key2": "3fe4q93ZynqwiLA6eX2YEZWGSztpDHVRerpTfTBvEea8nLEx4dSqkpqd5jVKXNdtD6QuyW1F78gTfNQkTucbtREh",
  "key3": "2ky3yCFUdbCReEfzK4WyjwQ8ZeMUnKLrzyRrko2MP3eFCXkWxF7vG9tinZ5tgVJwKtATFZkAtzjcT1E56WrZR1dk",
  "key4": "WRGrn8yuJnPPajxjymzcBQUNz334xQsdjAuqz6R2drRYNGmczKzLTty4awzJXKnD4QcXHbmKXt894qsTi1eZm7w",
  "key5": "3ErFKMLAnf8HRDrH1pPG72FVs5YGQYpumY83DEWywzWuJD773L4YtjBQycsQbSvLGPmu4Kh2qqJtpkdKJwknfZhD",
  "key6": "2YYDmDzaJzyVo2WvgkSxJP83n24Vv4xJsP38ZgUyCMTVKqLqrn5V9RdL4vW1n18C8n5yp5ze3bBQctTVk8uA9WkP",
  "key7": "Q3ZAzR4TPYjpNgrZ11QZw2CZN8yWiwrYoonsUuiRSnqyY2NR7TWtGL2PbcQKSHdY2M82cATjruJxd8DgVbSYKqR",
  "key8": "PCQxMQiyCouLcZVRD6vYhcevV5u2EoMC2SgnfMsKuxkH6seKSYqzic7crGm8Br4ip7xva1nSWbRB1paN5tM8Xok",
  "key9": "2GzFs15359YNz946PnAEptEbd7oomJzqXZYG8H774g4QMcBCKzEMBYmsFPMF85Xfua1oW35WNqorAsKoghxtE2LE",
  "key10": "2Peb3yX18j8aXgvHw26WLM8gzZcm3pt4tJ48ZoPeQ9MP38ac4iNWmAZHAGqhoX1Sygk2SvHerEe2xUVEY63HXzMR",
  "key11": "SQGKjGE8UEU4PLVttXNw5vZW1ZVfv4LpXupr5B4R9FUQ246pwa8R1LTDh58etkLyRM8nMygPA7mtk1oakZ6NanU",
  "key12": "4jfiq1xTTXPwP5pppPF5QrsqG1fk6jW67erNobK3bV7bvfMVDke2wGbt6yd8SVkCpXjoXv4TmuEywrCnF79R14a6",
  "key13": "jDJR7dz2qL7wxrDXHX6dbbNAaEhEY1W338eKc3GHzLr3KBVMEgiA3KJAWh8GrmRLhtUtz6GFcJuwD26kMzjjLsa",
  "key14": "ph7M7tjALwo1nJTxqEjWC6Lz21JodLdyYo486oWR42MJi7HYxKxsb7XMWdxYwHoF1kV8xYVV9SocproeuTi5f4o",
  "key15": "31sNAzXBQkWVLoiqEvbE1PGMvuHxUmB9j3QH6Y2KktbdLkk9KweSv7rFJmaDdWubPf6ADG9FZne5JorrVTPBipcs",
  "key16": "4nRDiVWfsuRZXxQq8XxeM6ugP4ryt5KACjNdcxv65WtAgKSW2tBkybELKJAewLx3pCViYet6DhAmsDAoHg8FYKqC",
  "key17": "4nLy4fCHda52LNKsCHG7akiLhmhcK1uVNKLKb9bHQUuWyjBWF2mBHBgKW8793M1tjs6z4XWfBWbTuXV8xFjpmVJh",
  "key18": "8JxA5sqYHMxMkceYoCU8r86327HSG7VTH6v8rawemU3ca7rBKaZeYWJ9Zs2Lxza9JQbPofD14Jz7aotKZnbQKuC",
  "key19": "5XZB2UUsEo9Nua7oJGXLFDMzL4ES8gnpZrfy6uX9VeA6qBUqwoV4JmwykEzzv5cFnBW1WrHEzw6fPDeBpq7oHVh3",
  "key20": "3Y8AqJHVWikcFfWeUhgudmoyb4uD4anaY3n2j6qEGriUfrqicqpi3XGLLDUd4HSohQ5Y5MqYfvaA5mzf6SqJwtve",
  "key21": "4Uw6o5LA59Gp9UDyYbDyNtedJ5LES6nitaoS9qYQPKynBxG1x85VT3VL3ZS1iXjUYVYnQeVmQtPgqQosQ4LaoDaT",
  "key22": "4scwap72pJMGLJjMk7m2UWx8DYKs3Fq6iiXXs49Mifx24MQJWb5d9J3Pa9acPBwDuFUS3zsouULtYcWMQQVrkwbc",
  "key23": "2FVGQBEoBBBS2K4so3Ve7LF7Y2d8rwApawS3kykTHxBNP53tXCFURkJDRsvyDc5wmcyWwMy4Fb8hpF9M3B7Uk3Ji",
  "key24": "TqPkr5DP5sQBqukPJor58Sc37hcbLHsSzsWb3cmBBaSaGLAtMuAB1rXUDHw7BjfcMg1HuFk5f6tX113CUWeq65n",
  "key25": "2yhVjLDUm8CpZuMJ6AHTZVFwqJ5spRikoh6m89EsP5R2X8JwyKEVYFR68r8f83U62JRbmBhVUMf6e231NxMDoUrx",
  "key26": "3FLQzYDfFiCQsdyfTsy2TdnqoVogZHwsTa4R8omuJjXW2pkEJi97byAZPF9eT1Hy6V5aXNYcoWMMXNH1J3Me3owr",
  "key27": "2t8YSeFP9xiHGFUPcbUTC9C7Ahc9wox1sYDZgQneUfYGp8ZwosSJPXoVHSbaNKuT3PxXXEN1mgPiCbjrd5TQ2Ddg",
  "key28": "2fLRsawcFKuexooShZ6ohe5kd673gKvJsYid2JKz1T1zpi5YTwS4aKTFVHkbqQpkb4e3U5dbCuTftpNXcA6o1pRx",
  "key29": "42Px3ewtBhrMnreeQqsCRTetaXmvnXMQ79auJqBKqN8XspNhZk2HdLQC7zuhiX6qPQa9sELwWawJTkbqTS5wHkNN",
  "key30": "2kUjmDmo2fDuhip7P3dz4WiPGT36mMA6NT1dsTybV9GdvkjYgfHQwfUyZLYxhMNS5hNeAb95erue791LYwjQduZC",
  "key31": "PWEjfC3pUd8K6CkCe26NfWiuCPuJyJLLqhCNzsNgWaoWuv8HGZ5nBAqpAAai21vTgfvJWjqNgaoU4ZnX4yq83J3",
  "key32": "5gT2pR1Eeq1X1rNbo4oGPBvN1LN6Dgwgx7z9YiqQJHEQGdhoVWgVARv4GqaPzTsiKxpxXh87Db8p5qxLBwoddZwQ",
  "key33": "5pkLmh1dYXZT91GePHoj3pboN9HiqD1eZjDqh2AEvoH6wLJHCYtMfr3WdXcbNKLz5W535TZJ1S9uvDYeG3dGu7ty",
  "key34": "2sFoQejbMLvzVovWgXZfJH2sqeuPxEhgzBcUBaW8DpzifxKMcTNQcUtgmp9WVaFtzb3DkGJZt9Pkh3Uv3aietUw5",
  "key35": "4xLpiPnPefKjFjhtzqgjcAvfAA1sM4WkBpL7QrUvW8D1FyWDcbgVu3RtXAo3udEgXWp3j6k2ct3cTY6q8eAtu8Mj",
  "key36": "4Eb6jzU2AkuC3NfbUe3hmXB8g9tN6tF2WkNbf3vasZHeegwEurLoxc8WJmJ35Ljv7RSHpvkGLPQcbKxXt4TPq7xz",
  "key37": "4xcA4FevNtQ7aQPHPwoSC2fhGRUvaEHHPKb3WX4WAnsCoYvbtEhNyyVPvAtZKppCVyfvBWGPHBfBRVMAVjnT6aFz",
  "key38": "44CJPJBgWBWCGsoMuTD9ksniDMyPnCdWtXay881noPHvgzASBctA2XRZwyBLb2R8y1DfN7h2e6essWo1PK3CwqQp",
  "key39": "2VnNvWMjGSCqsCSmseCJy8N9c4GUzVchGaMK7LjKEmxSDCDx1BRsPQWiC4dC9s1ZuYiCJxkj7sTspNiYAAowMPsG",
  "key40": "2GktUFDYNeym6D7qrDEJJN1yYGsAea7yXvYENPEpjSb9xWJNM5rynxadPpc2ryRSLQ3XZpXQtyAvf1A6LgRif8vQ",
  "key41": "3ojuHcHVb6inxAsop3njDy5uwVq2Uhzjzq5ZeduL9ehENnFBuQV6zknGfqMeWLSbBJYiFb3U42PVuxJsgzTg9mCR",
  "key42": "25CHv8nSyR9Crpuj3uJ9WFvthiBw4wDmpzDgXGWf7RiMVtdUgLWoHQhah2pgtuYfVCY86frEp5rjGLL53Zpjxodb",
  "key43": "GSnhZYQdadtefARFcgQCU6joCQva3thjhvNvYMUSaV7rvsZhbpxgffB9XVZWifhwmmKYBXeoNeKUcVCxRzJLuGW",
  "key44": "3ah2JgdrsjeCzdzUsrLEpf6jNHA52DivLsDxmzXBfJjB16b1e67FZ39Zu4UYvzeLAxv3ZSrNj6m2jaDs2ifszxgK",
  "key45": "sHFf6UAmN65aNRdxXP72RRRJEJviD4u6CRjSdUg2ed3ZnrfMpPrZLwc3tgyKSXJZyV54YGi2c54mfVyCQzQ8Fae",
  "key46": "5EPpqx6iKnEfvBujcBe2GEmMo3ZBxzYee6EcPExBze5yu92ZjUjdFyGkC9ikMcvRix1Q9ptD3bEtdSNmzExrwscp"
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
