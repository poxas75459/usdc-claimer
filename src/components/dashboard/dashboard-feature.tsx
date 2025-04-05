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
    "2xbJFAhzFi8CeMY9ekrTgLk7VWQyAMcApMQm7DYSfMcCsXSXVqRSP6sAShVRkqptBC9DGsDs3SDNpr1X5wKX7HXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gi2vcc24QrQPJWR9qKNebsyP9iAZ2fXvTzbwTbvS9Q7EdxihWUpPYFJNU537UzQtMmC4FRcfCKmS3QeNgN4RpyB",
  "key1": "5nPe3oP1u8fhjFLrMBPv3ZRou6kfgZmLRuN7coyC6hZJ64kW2P8q1DNfv2e1Sz7MBWUFgUQfAMi1VzGdozHgYVA7",
  "key2": "33DB5D92BV6TB1MVMoruYmtFJrh5UiQCpsfs8JxcEG5awbg6iSRFe8suTvQ2U8Vo9wLxYmbUMp5CeRKwj3vB3LUn",
  "key3": "295in8bfwph6dVQeNjPJuNfrpGuCohvxX2izQtgKB5xJ7ERCViQbZnb7RrV3SuJsQu42R4co1waNNALNgTq6SSUx",
  "key4": "hP55hPwD7MKjiYBenchDoEY9xM3PkSvq6fFa5TWp3pnaWaDweetLiXTzFMVJNA17UnCPPxZeEhfZGGhsTZ96Ajr",
  "key5": "8Dbzxo73XTDF4iTpMoiMtGxmtWJgFeans13XA4uozkGxrCqUpBpoZGv9RBdhV7dBPv9d6jnCHmR4jNjCMrqbU4U",
  "key6": "3hzF419dgDKzRzmBHibGV4gEScCoaJC24T8hxD5d8oSZScQ8hT11hDSN7FAiHSTf3sYeK2X5TWGNR9gZx8KEatWp",
  "key7": "2dzwy3J5h9wT9h1pkUsnTgmR9HqPFqbNnLVxxpJCEWV1a135ouoVR7jfnwwwQ8H16jJH4zGaAHLiseVeDct9RkEC",
  "key8": "3pXd2hkavTAqMozPbgTvGM11QGqygCeJAzK6bREoCt8uN6sauUA3qQq9Gg5LvHgdfmyGP2HZgcWAn3jhz5hF9HtN",
  "key9": "LbPehpefm1LbbvErSMEU7hgpJMsvgGqSqeR2hxwFHd57PBExNFCcL6aRoa9wbUe1pfwCDseDHzwA9wjuaYM7u6W",
  "key10": "6Rs1HKVoh8HZR3U5bpAsCccpKWKdDi4mAV5kNaST2XkipuNgUmkGxZ4VxkRw1R8SR76ajsSna4pP6neonYRTzQ3",
  "key11": "5nzbNwky2t3Z1qmzQjhoqsChyhAocofTgBkGy4EfvE8RXbH1F3TckzexyUCvm4xRQd6RorrBxZV1ffskdBxsn6od",
  "key12": "3LYiCmQgN6SWimrBsgNGJbzVFEYqWJCSXbZZ3bMSmdC6SdvjM1SmBn9pNsZHmm3xQiH9Z7HWHEfKQm1DcHp1UV87",
  "key13": "2bDNX7EvpWc32Hos8uAyvCQ7yxw7UmwbDxfYhjB2gdVqDVGKjkx1LYDbmbXVHYDfx9WB8uPWAutbwx6U5Eai6Fks",
  "key14": "3PwD2FRWGzc7mLtzKTopC4spcTEtuDzUftJd9m6Md3FyricjHKdgMW5WC8Esw3cV12iy1Koo49JDR6YxA1Kxc3aK",
  "key15": "Gj86uGhGgPVKCfLKjiR7rtjZCg6TLzsdB4TYwNEHYgtPrraNudDsuq2Neymh63WCD7911B7Bq8MTJFFhESba4Rd",
  "key16": "3SSKiyepShJ1NfsXj6Lod8VL66kvXjDa6G35KjodXoGe8i88XcbnLaRhgv784Rb4oUKHhmf2J2aCKHDwnYgQtmVZ",
  "key17": "2gGBQfvqnHWaNnZDDgaHwpBZ6J5p5gf32dD8giSX2DFjAk7BPpjPwRwznvK5i3ryj9bndtqZXtMQdEdHNBbVQ2yr",
  "key18": "4nouy4GxqSozS12rNxmbfHHdKZvEn7wrpkC9eQ99ModNb7KrMoApFDRKx1Wsn1JtJQ8VHYiiacCLHkhqtTCqtfTV",
  "key19": "3apU2fXjMnS9RCxjGfcGSZTffAkhshLZNBKpzYTTKn2ikZHK7Bd3yWPx3kbczz2JQG29n18mR2wkVMjYtuzrYZT1",
  "key20": "5uanRjUpcRqBf5tRyZxdFKpGNTWxUBApUaJiuXk2knfXSjS11CSSt3JUspXcJP5ZgygPXDbAy2BUdquryceP43C4",
  "key21": "4oRekCfYFNuAX2fAJ67bTQa7NWWXNguqjvD4sFtZQnU1Wa15nQZ3ho7UKTbXyq24PUgnxbjHAFpQm64gxfKUxVuD",
  "key22": "3xstf599f8Q6b7CyLnSRxYrDoCPgs7oWSA74Am17AN9PNaT5DJFXxy1vXvZ2PWthSBM2CbB8U4kCdGLM3PbPdYW1",
  "key23": "uS7bQdAQLr6gVkx2rVrCE92eM1D92UeKgH69TwBqqjvhLkuqiid5LZxh3bcSgd16AtaW2rURhWfZUn6ugnpXoKN",
  "key24": "vEQY4uihu3mhMr9BcbMv84W1E7vjXj3728FWeipsoQzEXVFzp2hXyuXaG18CAiJdLBAoFnfDqEEc7S13HtLsTDX",
  "key25": "4EQTG5bgEHfFD39tR62ywfhd6pDMv2Y4qQifTohSnCE5vSZn8bidAsKn56koBjNH8qWe7tbSL2Zsg2pMGcrbmoPD",
  "key26": "PpuGPZjqMS34Mmncpd7gRcv6Yh82JZaqGL7mrxgqCBejqviBs6ESoJUrvJrMZZUrAjCaPBpbKQeCaRKqFHajunF",
  "key27": "62nQWhFcRAFtQuBoo8upbXGgHF7HrEfrpCJzEz8Lzf4CrPe1ntfmEixw8HEuaRwGjTKCKgabtH4R7uRhoVLs6AJP",
  "key28": "374QKLAQtBUUD9xiLEgQanjzki6AqGvWYEQxMx4GzgVGm6MCMxctz6pVTwacxfGt6oYkvMNkH6Ge4KK63YVhaDuN",
  "key29": "a5tVDWktsuQGgCVpnmbSYf7vwQtGgUo9skobr9ixVdahR6QBATiePQqWASUyXgDPXMe5u5rvMwpJZpxTr9Xjm3q",
  "key30": "67HSmaMzD4ZsKZwKRckg7Ysmo9T4KNwqfozFEBXczGuVWB8yCcc71SphhS9HXaanwYN8jDRJZMJe3mwMJRpyoQDa",
  "key31": "sYHh6wFtW3kaYDMwTS9eJKAsgoyFbVxt2pBrCgT4Ec9NMXCtpBuTNdgCTCZpMi7WmpcA8mEmceWwgqCuHwWFEb9",
  "key32": "29Tnw7aZXgT7R8A8XntsuuoHc8ttZf8Vne8cE13j7wLcT4oP5UWd6afLDzsi3RiLYmnuWsjUBdbXRhDzcYKj3U1k",
  "key33": "5rXwiwS75xuPjyWxKVv1DizqfY1T9soduTniUAANDMZKrR8piAxghP39Sx7ftM7GNPubQnXJ859qgzjVAL9Q78vV",
  "key34": "YiwsBhMenG1DtPpEBsdd3vYBc189xsWJKLgU43nYEViTuNNnLGWqhccYSwR8rm18TzuG5crW9iWkJuoEt3cZFHQ",
  "key35": "3QpSbxMBPVJe7oZgL12sEaqYgZBVPaUbe1nJ7vRoadLRw6AcYJLzfiDxk4H3kbzR79MfK34DRswi6FS9PGUgBwN7",
  "key36": "4MdyTzeS4zNtXcEvYdmP2oUsrmhSinY2QHxEovco9wBGYK5VU42bpTU8uuhM4jm9vodPxdLLqBsUvesap2LJvcNc",
  "key37": "xnKJsj2EBBpvF5p2ez7T3jR9Gqohe3C8y1SruFfbQEySi7dyyLDU5fRezUriWyrmwxvTK5qV6aXazamKccvxkXg",
  "key38": "4regrSgGzmd2DqkUcKAQBBnEHGcMBPuPechKqwtzvbFgUoCe6L8DAx9LLDXr2FRBtKEmx8SCvaFsUb7vrTFWWQon",
  "key39": "5tJUnwjgtEaShz6jsgg6uywCbyYBUjdCm9Cmufg7PGk2fTwACmzBarQVrmvcUD8A2GXmn9BCrzY6YRcThxG8hjbu",
  "key40": "2zEif643E1ptn3KpXj98NDetYDbDLA4kpk97jQDvnkKiQp9264JRD1pGKMzDu881VXTVLtwabu5acRpUwBrfUxfL",
  "key41": "2bpxUcEZoqUrrAKgSriG8a8MqAkKWUj4XqAnaSiLDxyDeWji2GJPGUVEwg5hkbULipTy8ZTyP5MVFKRFPCqJPycc",
  "key42": "4cKPpHU5gvYJiyqviVrLikpjWVEa14mLvPJMFkY2Ja7zd8btQxRWuNpJjJm7eS7Qu8uyUdmNfmiP6H9zhpDkCmrX",
  "key43": "33yXApTzxah5Asynrb6jgLdZNJ9Crr5ci9EmdmYc7UTcCRU53FAXLSqAiYfdvBJyVJuuX5hxDBQidRAiyneSdbGB",
  "key44": "gSDXHx2PjCtFnSPxykafKTvtcdNXLaX4yYPzMjhKHsckrwmjcjUwMjkoSBeKnEorJKwSEwzfLJRTNedP7YgTNtq",
  "key45": "43QkNCXA4xDpYn1wKdg4a3pN2C21Zw5PjsaJbKXz91Zg7PhRqRcoA76FNkJEFWTqhw4W6EJkDdGhDRg6C6wo5t7A",
  "key46": "5xks4WVrh22fkzCkFJ6iF3Xs86b57Koqto5yhgztRu4s2o8LUNuiec7NngtQ6sv2tzJJ8NApQVkqNxSnpBVLEhX7",
  "key47": "261pfP7MbQVSGgGAKYT6eBNSLd6CREBUfhTdE2S46GH81ozBD68nRDVyUdP7f4jJ7d9d8GRidXSAcU3chdqke8Mg"
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
