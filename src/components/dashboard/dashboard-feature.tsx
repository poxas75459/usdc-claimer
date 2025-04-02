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
    "8RMH5u38W5fgyLwZsZevWd3Q6f7BUuAE9VYka3mnF2njwXPSnyvm8E8HNBk4QiTxc9fgEJqLfVTEoEjXMUi6Ea7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BDLxzESuu7DgF6E8WozaDCpuN2ka38r7xvKthEBvzr4UgJC2SZACJK4xnRUr4noGymaYy2zXBepk22UZ2KGpxPg",
  "key1": "2FmQBqxe6T26bHRQgsrfK2ejYvTBo1tcon5kZPSgyhYbNCGHCe9rt6oZB145FgwpjJL6BaEDybbxSigjJfJk9473",
  "key2": "358XDFkhVMWsyjQzJu4XHHbfmu42RJMFDWBqNN6mJKeq3gSRYv9ETMqxjZumU3stJ33DmDDbV23aziqHj95dm5Hh",
  "key3": "2ceQfJSQb7UXJFicxE2b26aSqufd6gK598ZoFRafz6GZdo9P6EckE3ZvxjazYQLRLCsqi38YpSQnDqVVUZT8GYLP",
  "key4": "5G62A9yM81kFaBWDrKyFD8MaTeJczkWBDqXD9eYJfGY8uffEqzdfM8jm68USGKH9q1iu4ToPfqH1badL9Gg2esNW",
  "key5": "buKC4zPMmGyTT2QSrb7pBzy7emnCJyYDND4hA8J28tQ8dnCKpNhJXzu4yyGDAU8SyXAdHeRqW9bFWZkXuWshE17",
  "key6": "udUaCkf4FC4CZLSRpJ5XH1MEnrabFAmVx2bkLzgqGkPf9vTja6jY9bwTxBZ1Z3XZRXEgc8vJZtDKb24hq56o4uH",
  "key7": "4ctHSAHJgGQUaEn3bVFRM1cBuNSZrb2B24GQpgwMbkLGLCf5quu6KCLehdAA7ezDdEVB1DBLWxJxeDfkFGk5xxuT",
  "key8": "612kd9M2TCqH96ZAhLGJjPeXb8ZucjdK5yqhDAero41847hsUFCBPCMwDAhxfS21rfuHdYXkmQxKzB2FmzdRjJrW",
  "key9": "3JrjagijCZsk3Ng843sx5g68wevWPGJBGB3gMhaBC6dxH3EpijXGZJBJJTNfx1SEK34oJ7pEjgMy5EYDBtnaj7PZ",
  "key10": "3Jv3YaSxXLFTPC1Ab8xjTYc4uH519aHsCqNwWWFBKcufaEU2My4UEtBYU6PceaJNbk7rq7EWC3mu16NtFwRUfVro",
  "key11": "38FBaBYFK4D2x9fimkvg1Ugqvuv3YSG2xWfLJW7KMpe6vBp987VymyGTzSgZSMhzHh7W99CjHAtyAfoRqwoDTzuk",
  "key12": "3M7DTqbiuc9z3tKBUzdQBhzTXQCF3gMVhopDERCzYaN5mD3mwNWTJAM6mwyqjxgswYmGsTqYoo7LpVtAKR2BepcT",
  "key13": "3bNNqchdmQDu4omGFagBW42TLqxr5qeXacRu9xh3UNmqru3BVq4aA7fc5JyxDc9aUGBQT7GG3dNhY1xotFSDW27A",
  "key14": "4NZk9otMZicW6jfZaLh2xB8AmRBhrG6ziifjyHwmmEjNd6Lg8BSTWGhdYHcEM3abWRkex4TaVkQHjNEMmR5vgkK6",
  "key15": "2XqkqMnpeWiTWiEvTkkDofeTwLazRM6KAFHqtGcEKwDtJMrANi3EFZ9696bhHWLf2a3yoaBFNFWcUuLKaaXzcNJY",
  "key16": "41QRz1hiG1nZtzrLMwp6R4kq3njkoDuwcdB338mMk9j1bjrK8gR94izXkzuTLwb9a2WFayGuGSpU47LvSsMgm4nk",
  "key17": "Eh5ffb8VJ3DGuzo8W4FvLoftCBC4iGZFTzAyg5D2MczKj4LDVeDuLrHM27cNEK3MyAxf5oLjLgb3tW1Qh95ZSdJ",
  "key18": "2TmSx6dzA36qgD9TJ4vQQ9g7EiMxmYbAbNEcVNMuc4rd99KTTwTJD17cYjpyctkR6M6x1fvSx9TWWPgfERhqz5V5",
  "key19": "456RiPbDvzPwgizynvSFxyiQ3dzDtBBPZdmvRRL1oteBckXaPAKDyTYyyBgET2xKUHNXXUZnzGVSQEGfZ41T92J1",
  "key20": "5oPJ5gcMwoAKse2r3SjuiGf6WtYDMfHvJtoPEWgT5NF4FNyCvkoQ1hXbnAG7aM952JW8vCiPD9prf8GnuFETfThC",
  "key21": "3A8EJrFqueE81BK3JAhog91BVG4LGfDn5ujhLbmjdDSPnFzamhWcBFQmBonZLd1SEGX9HZjBdJn8kiFcruGyBAuj",
  "key22": "4RNUGK8E4iuiVDfkqf8tHMCAAXZiehr8cjDRPbDbpAGKmMm9dSupQqqWZjbGkCyaBEqGHpmCxC6qqi8iJVSTegfn",
  "key23": "4hqxa2kHzkvTz6XQ1W9UfDmECffLbRv4XvVoc2URAHjSfRrteGfVwU55ygkngJMzGeGuaDSiwEeNkpiE7h25AzbJ",
  "key24": "3gvTUPuFtzaERVcyfo1k4pbJEZcbVDnCMKmzF2Wxv5sCexf5uqhvvLXJAQCVHjrHJJSkx5pGQcanmgmGjySx5VSz",
  "key25": "2P2xWDhQwbzEZb5Sfy6iY68uQoG63jm62uYu2aVirVYY48t13tmtvmQLnxcADmZMjJ8fi3ZUuuU8pMmpi6C2ASET",
  "key26": "56Sfuvzgz1tBe4Z2EvZqn3PVVe8esBaXNUMPkMz5vZeoTt7WEWTxxQkW3UpdeZkodDsC8fTy9RcYvVxhy7SURaww",
  "key27": "2EpwUCLatB75uSBHEoP8eahy99hhocfmPzZzJurCGThgFy1kiFXDw5fNXrdGvNTZCm4MCqNW9JLUV3aEdCwXkLQ5",
  "key28": "3JT5JGkjMPJNfz1PpwGcrDNshPt48KncA6Sm9vNgcFnAmYHiC3MQdDVttLHe9dAYqX9nRZpy7qAbPpEe92RfEwVJ",
  "key29": "52i6B3Dh1tk2B4xTynihHTMXGYQrR6ocQN7b8mMWDhNEesjSyngUXz5TAxQrxzdGZy4qycPcDg8WwF1mUWLQ6iLj",
  "key30": "3DmpRs2k6mw9drubiEGp32k71U5mcqLaVtiBxU9oJGK3tW7viJzn7gWpPmf414Lvs4eFHRdUUE29cxQmyoNpsTpA",
  "key31": "4oLZGhURDozcKyJmnBBk42tY3iLTKpurnun69YFCArCiAgutaELaBgCi5fbwHUhiDb4k4GmtrQ9V68VaaFARhses",
  "key32": "22NZjg3gBJdK6L5CoZNYCRB2qjcwYU2iAhrYAHjprqxLvMwsuXd23ZyS8DY2SnyZQK7nhmDtsaVaKb1EgHhkLwkW",
  "key33": "Ye6Td4ysBtbhcmM6MHktDQG18aiSYGBjTarTLoS5tLVski6FhFofR2KXRGa9pqC21vvxE4wrBzhJCKsJSTHuWgR",
  "key34": "5cD5ebNxtEwV9h29eprQpn5UbLTBWa8UT8RSsG6hZhTZ45wL29TsUBcexjCsMtp15doK4oLV7mkxVsBBDLih8vri",
  "key35": "8Dg5MWwdr49Woe3a21XNd2T1sY1xsxTRsNMJw2M85mpNiUAH2y1nhtDGYZYUshXA57yFisqDTGMj4Q2tb5KU8dL",
  "key36": "3U5r3Kc92mswKA645oiB4CJknqjdppJW3QshtqJY6y62tyg8tzNmmwrECZiMoYMSS2KFWem27R2Ka7FMBDQB6kvy",
  "key37": "246zsmkC2UtwPSbBb8mytSjgcrGcYEAvHYgbe99PvZSFtNK6vLaqxuxQRLYddntKtfLmsiR8HdyfXhDmxzsdsv8w",
  "key38": "4P9atijvjRrsSRnghB8nzrMNqhZBohLWqT9hbW2gUBkA39u8BgUvdPDddrgP9ap7S7JSYJgSVhHH9yQJyv4mpRWn",
  "key39": "94rB4dM1ZE4HH9ke57zFjvKQnR87Pi5XWJNCBX3JZ4mG5eMvUjABzN2prqD4wkJcz1niQHb29b8zaEdBzp4pyWS",
  "key40": "4iLNwJXGgkNns5rapJ2nr5CniUtgNXs4riPoscz19bLWs1DWXFYR48BkSPUsALoMkvnnbXm3pDek3qWVxs387cdX",
  "key41": "3TR21WghXD67vtLCY8pJhHG8eqXt45RqPgj3yBq6WQRaMQRqfVSemvHBLSJWnJcURhfbKjJRUjBrfgcW8f7jUWer"
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
