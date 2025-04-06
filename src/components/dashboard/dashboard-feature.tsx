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
    "4aCMkAF9EgVMZvv5CVZAMTQ6kbUdXX2aoiMqZrjMaNxLMsn4QsWKAo4kkY1qiVwDjLnm6117dxrinV9YceN4Hmcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7viVbEa1x9QBgAaAE2YPAuiXTfRjFnPX9rfmziS4fMRGDQe64Zre9RhUMog4TiF2DvPh81JgDL5dCkMM6TGiR7K",
  "key1": "4FmxkX7gTVL2xF4f5aoj1xfiiBiifwMMEYEysofbSGY27h5JpqPenhLYsS9n6dicyMBQwyHS21DgJeoDABgL4kKp",
  "key2": "5Hjuvr3Sy6s2ghyhLwTvwti2aAj3sMKijGdinqWKMmLGwVe16eEsU7dbwnmk3A5jMaX5gLKKeawYrrhDez9r3RR8",
  "key3": "rDHE46Ab9tfBKrkQ2jk47AbTMR13SaKSquu8SAhyHsVc9iJBzpg5EzLPD2NQWsJVUAdeoZKR8vosJt6BVyH4kQR",
  "key4": "4unGdbe7TWRNQH2X71nNLF4LyB5ciAkdEe3hhSDjT5Vv8pndxe4UxdQiaGYyNUZp5MGxQXnp1BoGFhnfT4po4KEM",
  "key5": "3YMUNTk5aR9s8bK7hf1uafaGmPFYvUeCbA9ai1Xt5kWpWLTtLbAnnRvz6a359kcn1GV7weLb91CeCH5qeGPXEX1N",
  "key6": "3EyBy9txhB6nzjQZ63HdSi1dxxa3QdEicQwmNVCXyms8Jc9fLbBFoZXEWTLKiYuBaKePoJxhKxx7M5yocHYMcUsG",
  "key7": "55dNZ9MdQcJy7QXaLURVZWGRfubxZZHTMTzGe9M929SBQRWBiTPceujwuV7cAHcdCBewDHH5rtrHt3FAsQPaHRqY",
  "key8": "6HfroCJ1kF4APxahfPPipXvNULjTUaX9kbtJCp4e8dpV8h6JgnoNJJB58yCctxRHA34X93KqyKC9c7XDAmMDaLp",
  "key9": "kRdwaDm6fjvjn5gnogVoctKGXjiQCU9qKW917eg3jwg4otNYvsmYBaWPC8kjMX5cmhheZX1i6rwcJJo787x3MJK",
  "key10": "2qdRQ36s3fFreFSJd94evPvMBqwnJju2GhE6wjmawxDUNTxhuDTN9HdcHpAJukMyoMGStNyuqqmF3u1kc19pXy1x",
  "key11": "4DSdhVmkKTGPotELrByB3iD5vCg1UBkKEVGCfWw6LP2FCJnrSs13fb5BuA7M3D9tmcNH55wsUdXqTqmuEiBA9PDC",
  "key12": "25CVweRw2na3NyqNBFDvW1WHDwKq1NsqibBzvZa7YwF8tGaFzKL98AkjQVhA5bw8QWmezfadMKrDPHbz6wu8r4Fu",
  "key13": "4L34Wkb8Y7gWgkW5dzEAfjCbmKsCAiuGg1FA26AZpjMNycye9dv3DodxJN7re1qLped9ghVF4deSQ25ssNg1kpBB",
  "key14": "3HkuBozEHg5qHJkPoF47VxDqMJGddjfvjgpJ49gC3xDQRhTDRTZ99M3FHLnCJir3pFfqtTVvvPx9yAyysYBe1LGw",
  "key15": "2yKvXsez6VL6o7o3myEyzZps4vhYukBGddupJgrw8P3JjZ6nYMXxQE6GAYDGSJ6eMMoBahaWVQ1QbwtCk92oF1t2",
  "key16": "2pKxh18q8Ejz8vBDkXYb4zNJPzZjKWTjjAXFJnuuaoAmAwSyNCZXmqVUkE5WiFwQhACmCH6aNC4zs5kU86cCRAV6",
  "key17": "3bYcYq9yYZHMJkGUSoyKuNWkLm1TZyiHJxS4mEb8muiJU2KUEXHEsZvZZdCvGQKFDqnJh7Zr9seMD3tNzwo1gmpG",
  "key18": "4Wnts46mkJrREVWuJZ6fgnYTRvtqfMqAbTKesmLyTLfTLLwy1QpmE2cv8AkQXpg6ZoAPHcabjbZ4rM5S2dZuBXn9",
  "key19": "31NMBkikTemonqAMMnRTEf9dvC1oANSKU2FgyQnatR8MbbE9kAwp6UWx5Hm34NVDD8s4ozvnfwYpkoKk7g4jJm3U",
  "key20": "sVAyJb8PKthVdyDGTAHX8S6md9H3KRoM46x9ioooMvb5WaNgr1TMxSbRDipmxYCeq1RJUg2yDMXj4V45giDkTPV",
  "key21": "4XH62iAcHCD53K3mvuxpRoS91zBakb69ScEr5FMbkGM4Am7jsxPyHXshFqEQq7g6GQEMxSpAj9w8pHeq4nApetx6",
  "key22": "37wTtQfENvtHmSj9YqdKuhfanhHg3zkSTK9Qvbbvvjxw5CjKrnQWpmjTyVhSqM9392CpPhSQLhW5f1FhnPbArVQp",
  "key23": "3yXdJGnds4Gk64gqvAvC5bUBfJjM42mikp4QVafgm5rFBBVp1nt7ytgvpLq2XpmSXieHBAXafE2whvaiFLZnFMZp",
  "key24": "2jYuHJMaNHUrRxcemLX2DHrisn8sBpZP5nxeF29RzZnoMe28kcUQtSvMcCJWBMBQM9EkvFKM6FzKDoCcxhjSzqBN",
  "key25": "b81R8kkATmZo2icKbDzSHoZdX4ivLyHZV8mA6xg8u3QGbtAFEd8YFBEZaxC1fXhN1WZaJesM2KuTGEAXcZRAPV4",
  "key26": "2CMzQZ4jNwoPARU6XWsmVdLPw8AztHS6qE9pz4yZBTDziJ5R4ESG34Ze28W8H5JK65nR3quaNGDrrauACJYJzP2D",
  "key27": "3uuaSevhisBCYQ2B1WzHk5ZkKDzGfEfL8TmfBumap9okVaraYtNgYwZRY5oxrh15sDrczsPUCbbMBtjrSrrvsScD",
  "key28": "3xUT5MgKeKFozBuqPyLvai4muU2DeLiFgn3P4TDhHX2durD2xEEYnWJvhwVL1UTDJBcKHMmyLWLJ8Y9qQNxKCkXB"
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
