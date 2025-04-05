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
    "4YceezUkb9zUm1YGwvV62Kz7hqsYUPzEd2atBM5jfELyNdQt7WsJC6kJaisbpXe1genxG4qf2Uyy5D4GUtX9xEiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zez27rPy1ZxF4UBYN5AYfSztEdEBG5foWbv5ch2qwuVWmhgzfiYb8xsx2HyyjJFvBtACPrVse4cEnFkBYvso7zE",
  "key1": "2UrvAVWBt8sCpneJpPUyauz2zE48PTPtr17a4TSKtARcPVZ8tydA5fcwL8aNoqAhdsycndtziZtKA2nAR31Jinvb",
  "key2": "2G7ozxCZLtXBr9QXvJ6AznNovDEeadW6RN4McCyWLh89bUvdenxmYiwWBGjsxJ1uoaFw7ekbjsq2tn59ZCAXqNBW",
  "key3": "5yRtxgbLGCKNfZ6cwLK9J9deRo1Mxfoe2aPRxu93BzN6YGTbDrEiT9j1VjtycwkUM7WkX57KWdaixPtZ1aTSGyAW",
  "key4": "wSC8M8gUZVX92xkaxoaU9kotjdvJzhwRQ15J38H3dDV29uQsEnaQMXYMzmqCCLck4LsA3Ry5DRUKFeddXoqk69L",
  "key5": "5s9tZQqUKL3seM3Ekg61Hgw2Daxh13Ec8yCDrDtAbLqv4gP2wTwZekVj4fiboyQhXQ4cafniZvGH1UvqL1mzq7JP",
  "key6": "5W151QxFjgAnKAzkjtaejhRiSpnKwnfLPhGQATsPQZLG2UQmhMgd8gjz9Vq8nsNb3EfEeDW5Hm8YyhZV29e6MeJ7",
  "key7": "nVTzGHvFYNhZ56KbKfCFGdDHeCFaw6AfnfTrwCqAJCVXq17hEjuYyq116a1D98qnu4Hu98KxYJsMuQWjSeubELs",
  "key8": "5mGPKHBtqMyExQvUGEQbb6pwsbXJwbxHDpSTf8V1ExmqxcN6xVtWMjycVLFRDokv5dbMzJUR4Uro1rt63vqVsnTp",
  "key9": "5W2bwNCAo22p2WdoGGCgtewy3dNc9EDi1KmxmpXCRezpDKzMCnwk4GkdibsWjdnhDVpePASiD6coRv4HgnyVPjjQ",
  "key10": "2VQ5TNQrssHAo88BHxxCb5QQygwZFAkHRavQ2j2ctA6SQt9uBN6arKo2eke9mnezVr7L9GondtR2HHncrvHseAyt",
  "key11": "3tiH6msSNwj5kMiEWagQExHpsvBMGseh1rtP94QjAKLezGQ2iJoBcFkLvmx6kwx72siBagVG44hhKCJhxUZRhmA3",
  "key12": "3bpnoNn8cx2iHRMcdQCY2uED6S9vytwLjUFsdmk531J5Jqz4mP7WKFTk4dHh6oDdoVEhW7zJZp9tiRMgLiMeMQpY",
  "key13": "WGc1ZsWxVxeqLZDiZnYjNKJCpsd36EbqRr6rJPSmTPSEE79hrRKSQy4fN6kGBBKzYmMye1osovu9m8nNBNmSUaa",
  "key14": "3y4gDU13fzw8aaQKsxHGgwxDrfnNM1DwsSrAsodZhCmBm5FomYNz5CZ5B2ox9oDTuacQTzKPn1XdBYjJ9tyixdBq",
  "key15": "2BSvJYsc3vNqxU37bRb9VzRpWoxyJxQrdpxtmPqFJzGCJ9VrZhaKVAYYAaGvAD3efGF2G73gfrSDPhFegGxoUpRq",
  "key16": "2yqdjyxoNzXjC7knR3wAdr1Lrj24i5TdtDJctEJxkXFbGcpApA1eMo5vpr74oNWnuw8QWirfY47G7nr19xfTPmk3",
  "key17": "35g5UmJv2WS9D35icphSKCm3zKJ6Lj6AQnqhrHVSzneKu3CMxCTtxXZSSUCoki6eFvdWtCSsv7NL9VjKHnZh9sXe",
  "key18": "67fCH7zsqGY3N7EDr78rWwfEqT42xhXndvxybMPDbg26omfw8WTEYYsKxUU5FQ4VygQQAoMHf3zEk8QdWJXX7pSG",
  "key19": "nrN5acUEx543y81psqiKSGj9dD8cjaZiJ1ij95kMSL8CgMkuLNvvxGu6bzPrQeo9vK5zbmfziUhwGyVPjhB1u5w",
  "key20": "38jid4RdbVcbWhzAVzWxT39covGUPozanFuX4MqXwEdnn3EFvchWizLJB8XmeqQw1aTeq3ME5bNDsavfCrrfTXRh",
  "key21": "3oJphnamTaCdm5pQL2LvXpfnP7mdajkdProc9baar9xt44XL7tb5aUufMC9Bhvp5dkj1DDjRy74oy16twxL9Ptp3",
  "key22": "4hWqxoyhg9Vpy1kMdNd9rWTtwqr8SRKKLVJHcvsXVFy8B2E3itKBoyqtX4acHDRxzctMW6L6CH5KCVrY3ffZfc39",
  "key23": "4Q5armLpv34CdGYY4PdPrDUtCW8KqNWvsr4gz5HHj83KXempzViBoJKiKM2vByVzVi8BXSxkTnaJ6FNa7JnbaEQN",
  "key24": "25nFwjDn5i7L6oQXJbQRT9rtC3N6BvXpjSCp39bqv98kpdcNsX9DVDxaJiz5xex66Y4oR1GCRvZjhYvGGVjMNhFe",
  "key25": "3EMQ5q3f9BhYwYthUDg9gZiejKu2r2uGoTGYbm6QUVP78RKCFG5wQAxPqKg7M2RQ8nrRQKvr5FtekMX1R2fSipvb",
  "key26": "2kUg9c9QCdcgNpbUJPacAAkLvNzicsieoeab8BVyQm6tArnSP8byodCRKKhn5snKb4YiouqqKRUtTTdJh4fgbMFf",
  "key27": "5Mk8cgApp7KWox8PuJ7hWdn74hZZb4JwWSfbm7ZcMBveTepVYjPemQEgPBEuoYqp2Vf13GEzAPfHJSbWLELMi7ME",
  "key28": "5bH1LHeLbcsc7U6sE76mdH1Dy2wihsanczRDnYSDqK5gQUWzFdZzDNfTZUjKc5UxrmyzG2dQoiQs3LzYbtSfyivN",
  "key29": "2GEpapP8oZ3Ty4CMXHQnDbcgCdHvB5ccaQYTqCjco5R33vNwAJeztnfhbZP6DL4b56d6jPpNcKxakv5BPrkL68TR",
  "key30": "5NCCWb8UDEcgwn536KpnzpyykKfqEAKxanEAGeo936Z62fzf6v7F7XkoXXpopUkySUdkB65otnCxPdPMJbypNAXo",
  "key31": "2Z9xLXJZU1XA5WCdE1CuqioJWPhntcmJsdwT8iVKwnsvzmkzb2qfU6LZtLe4oMy3KFw7qE82i3S3pFA8jMs8zMGU",
  "key32": "5XHkxa3uXqzS9dB55ZwMgn6kUkmUxXkE3DiRKfuHcXwEwX573g7HEU1M6W95orTMnrnZ3NKDVujntgaW9RhPk3z8",
  "key33": "3KkV3SA5NAdHSwyvBhYF1yyqzi9tbYV3haaHvTFXq1qNdBdKC9QMdXu1wozQrkWyN5SwcJMBLToemfdg6LfypQmh",
  "key34": "5HsxRg2RjMXxdx3oPJB5M2aVe3wPCdLdjvnDkzeT6VqJezxVY1w76kqpc7kWze3B5Up36KkApWhgdJZ25A9cmnep",
  "key35": "3fPSoTED5FqPLurgdQCPNWpsw1PKtdJYVa7djwZUqpdvr6Y1cWR5MQ4M6qT8oeJ8j3WDp9LL7NQmUwFu9ppqRGtT",
  "key36": "gZDFzGgB4iDjy4zLp8TawodyWT2BeW1eo9DaEBitSjMPUU25NgDfBRmGhEZ4cwjAXPVBQA1fJN8J4K9stQqaTKj",
  "key37": "512XZvTcS6zCRNkNsTy1QMMTnB6EYHAuRADdABXyB1qTHg2gucQkG5YRERJaoUmDhKF8uzoaNJBuLQ4LjbqbyWYu",
  "key38": "7xP9MYpoosSe7hujAyDm5jo9kFbLBfAm3Sr6CPAikvaDx7wcDGgJKHMdQ4aH21gJeCPdtTHzeCqbffh2ZxLaijh",
  "key39": "4jgwt1X4gx2YywgrJp2uXqC94AUbRsWarFa3Ahyfxew8yBNDZi1aggtMFEzPZ841x6UdK7pJBYEYoXRh9wPtpNU8",
  "key40": "5YYQxeA2X6n5jPAHFLY3sYDgUB4xV61MXVEWc3efoAqQUM7rDSczq4akdNc5LjSyexv8vmnwo6TY2Mhbct7njCHL",
  "key41": "3BnJCWxbv12f7VzXcGnxWWTyvMMdJPCJNdGhRTKCESqKHzeLPUkVtMkVfDuNSRUAAMFFmBqEHYj1UiXrGX6da94G",
  "key42": "UiiF5ARc2pAY7YPo9NjCkZsgubcFKWjjAqkHvCy7Ymm3FYQ3U2n66QwhBuEx5U4rBYyGyt59mjY9a2HgBM4YVxD",
  "key43": "fDFrnA4Wtf4xDp1qzqRS5NY7oLDRGHRUb8QKLS97jNoRTs6h8oRKmGkKsLM9x3HcXPCsqA3z1VsdzYVgPTd6Hb5"
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
