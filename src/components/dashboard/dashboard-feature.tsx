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
    "65EgZgHC1XiZqvZxC4gSXJ7HWHdRM5Q3G7bJSniJBqGi8gsocrdAwu3uuj89sLjHbsZMruYZ4acDQ92E9ao8n9MZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QoAeectYVmaWkeHs3gpTfMT9J1fi4WqojbAW3J13ochgaXkXEdhv7ehZzsWvWgsRv7C33cwEB9PX8NNeAbGXiw3",
  "key1": "4FUgkHoFW5ZvpXaJzLSV2qg82yc6PZGxF1mJDRMXwtVS1SUczLEPLjkA8TCCNopMgHUBbii2K85KjXpJhEiEnBjd",
  "key2": "3iZpjrfYHEZSg4hA1xKbrCR1TsoESFfaMGoqxpq1Lc3G3CyibZM86otAXGZGGbLyvwiEbunLzoygpHqD581ytxCc",
  "key3": "61qpbGPvkFShVNavp2Qamsbxdzc1oh1CX6RD5mYbQnmBj7A7fZDnfBUGtqBWBgiKPENoZVQhChynsCt5QyGyBejY",
  "key4": "L2kmpfN8Rkxx2iDcMtQFdkp78rJHkc5c6i67wTqF9wAPbWcGGNTzCws78AFpbRckQpLt9f1k97ZSMatmYMaNw7R",
  "key5": "3RRcA3zxe5QwS1JeHxFoZc6Zw5MrdbSQ9j1rqj35vRbt98HcvTeAypk4xiCRi7ZyE4skWXpcZZQ4SmrXChzNsiYb",
  "key6": "WHYU5m3GdTrPA6nrPaC528Jvuq22Bwk6Qz2MQiCkv5cUzHY1Dss7F1iDZH23uo7Dq8vXEQ3QfvheiLpK6ng7nCM",
  "key7": "274Vyqj1zoDPfM6yCazasvC7gFtDwEqMXnHjejqGLfkuhqYZVjRJ3tmPVsLfopZQwtFhLBrdF4zydbsihpLP1wDQ",
  "key8": "413B1V19hJn9vJCcgtgXq5z59ej2DygnMCgfky8TPaJXsAhXCDJhydMSfQKpDWJfRLL1qGxuiNKKxd5YduACcSvC",
  "key9": "2KvLLNGuf7pkVPdYZpwtnc9ydtcoc1WDWFFwyxYkRSC4a44m3WTfcgm3dbNuSzPFTXh1PkXsrp1sp7dH5dnJZDCM",
  "key10": "5Rruu5UStrmajQ9FZS9PoH3mGcXXMMr4UpWzPDqY37zazPboB7DbB3QHCQm4dKLXKvZHsMVA8Yd4ZnqXyxYQmBdv",
  "key11": "swrKvmxSUgsQdo5KXuZAYGmkQe4ABAi1BExtcGCddmLBs1BEKXtBP9iijRG4eHXgtQXJbzKmor2g6kX64TYdn7m",
  "key12": "4QHWo2kH3MNGzXcfaNHCkrWXmmECgkxhnfcJwk5modumsEBryP2oUCfSBXjpn8zTKJrbMqkb7Q3ges5CHGEUU7zh",
  "key13": "4LG6csWyi9Q9xdQquHZEkaSJ6ofBvTiCxFFcS2YanCUdqQ8Fe9sREw7yLRnQfT19C6wqK2Kd9K2SBEBAWyxJ74jT",
  "key14": "2L324QxAc5RtzM5knijAFejMF4p9Qtb2CFweccDCriiL692PtDnzLqVXT36mBQMHS6LHMUhJmqwHwsh9CVCPvHL7",
  "key15": "2PtjBGCRC5bMyHnsZHkAhtsBVPF9Gceah6QEE66q8Vk9YbweuBj8wLDcUZiXCdwGcsJ63fH8TrWsaV3Hy5nxoJMJ",
  "key16": "5t8eArPPZXc979B2yidQztNX6ZVYBHUqpak6acRDHK9kLAmoyXbpg4CoKwEGMA3zd3gM1ghpnBSoAvtins6gbQJp",
  "key17": "34v5rgt9bETzGtNXe8hBZCjqtdd5XUrhQ3hWDUPyFw3PiKRvu3Z6bMw4hspY8SbcbwDFWAFaJjEa7cNBKazXvZS6",
  "key18": "5ApDHwGpKeY5Xpaw9qYLRgnYAFGZw8pC9wcaeYhwG8QAuK4Hcv9kdUznnofySmqqTzZYxu8P6VSfhGNE71V56zh9",
  "key19": "uDTq1MBKqjsxctcreUZ8ejQzp7LeVrk4Njus4zi7aGmDpGKdbedabuhzeGsd1TKGUeQVoPGrgdSiVEBjiZej9WT",
  "key20": "3Dr2PkGhgvXdQBKm9PEYuqBnFzHugPmzDxvARK5W3Vk1tQpohYAUCWmudRBUA9iobyJM2ZKhBbBC1JxWyRqdwUsT",
  "key21": "5HLvnuXzJB6sXcpgWMZDHMy67i447ns2QZjuLL2yBjSWNyAGB1pkXdE5kKiYPS1pd3van7bBf4ZrazpabDnjptCf",
  "key22": "4LzUydTWVbDm9aJNkWE3GqFvbe86bYyzkepWC5cvVa7baFqEvD6DnAToua2M87Udh4sqZjT63HSP6o3YLaURbEhA",
  "key23": "31sBZ3E9kc1uvvLvQ1wqF96uf3ENnPNnaRBPBteUPrmysFHwtvDFAQMfqqvJUTHdginh67MFDFicy6ue5TzgdXys",
  "key24": "hYsJLPfLGdkMX7stCBiZMD9gJdQXqqvJmvWmGKG4dBQZP7PFBnBDyWxjgNRRuTi1BXpGNY556zfEMeqveqpf6RA",
  "key25": "5DRVnXuoobPqU7zx84dV5W8qGLwSPszge97x9mSfgGwrUPXAtaA1fabn7T4fCgGhVoqegCGJnJQu1ZQ3d3wCLUMq",
  "key26": "3mzLx9sHgANwxAdRW8pdDemDUS19hAoTU7yydsp7CDHqY5LoycHUAoNsZig8ngNhjBU3nN5EYx9ZgnKQduqrvZhu",
  "key27": "4Tm5fFkFgf414zdSYLinL2pPRBWn22hXyi6DBAQy2iyPuCMgFD1zaTeqcfv2bTqMjrLdqf9tEiAucdjCdLp79wcy",
  "key28": "9XCakr3hD46BGytSYMhTSXabUY3nooC8mfFxfxvhBzE8kB7Q5rm9H9PEMb2smBJHuKd1pmxRnm4NJSkBDsjPd2o",
  "key29": "25zXnb2W2Pb7kyPJpBBjsYMyh7tSh1ndFp6SXaukDqeGhEX3BXyAQqfQ7EozjYvwTTdc7d5i8c4SZ4zNHibpgHwk",
  "key30": "39gMgnU1jsc2Nkh2cNiCJ53QmeYaK6wYTodXRweS2Xbu8H25X56fGE6tZQj7wgucDBv6PK45QBGnABJrx4HaFQhn",
  "key31": "EqgEZdPH6FEv6ij214s8G9Y9rN85gcsaRsDG6LHpYw3VvRSLZ1BVfCqhja9XR1mFzMXjnUmngzonBWfNSgkvgdd",
  "key32": "2aNWdn15a6iQav7RuESBqR6yZVse8mEYFbgZEppmCuaVqJUx1BaVGfcvWNymtAngQvpxjcmzq531mBGpPmdSAYhQ",
  "key33": "wxfe5GvCDXkTPrwCJr9FTQX9EhomVJLxU5QKkePhgoEkA4XvDrJy4gacETW5CuGQre2oqeWgKMtx6rTH4y6ErCU",
  "key34": "5UVKMhLAQGdVVw2ed3m7jUbuxVrDnddiZSpLpFZ1rKv7MBoyuyxKoWv3QouMcWja8aUfReqSKbPAw2HJoX9MSkfb",
  "key35": "2YKzz7syjsxmTQUP5J6ohtZdinbv4NspiadRv9XhHxzkFydwJqB89pN2eVGW1pSEJNa33BovUhC8LyomAWqZ5fCQ",
  "key36": "4AKmbXYdjZ8aDLUjFWT8hj3UAx939wyUBxa2K3VPgcAzFQwzLhGHJ4cykepKqxtxu4BwiP6AEA8366N4GTa4Suxv",
  "key37": "4uRz1hMSJGoVHV5hGzp7PWGy5ivaotH4DFBFAxdX7WaHXeh6PdRaJ7kFTVy7dcirAC6QZUmgeKDM9vcvvYQ2VNsR",
  "key38": "3kgV2NGfsscrnTnon8a5VmaEHHhvA44EQDATfRHNWJ3UsWieL7YfLZE7UeJ2CFahFh793CJeuaNcgs83WTayTK3x",
  "key39": "5NrvcrtqJehhKnGEf626ktFbijHjTRWKvRnSySXbcbdysau1TFqpepEC86jS4yiXHdqas2fk7ZkrXrcmSn7ayXom"
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
