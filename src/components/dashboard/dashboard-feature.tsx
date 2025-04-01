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
    "3aBvXWVV8dvit9iMY37MGSBRnBfx2vNPB95v4P68sAQUVw14tWWBM1ZWCmBanqCT9rmPArD9hPbLAD2xoW3FNhqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61WNN66VDFMYC7c1QaVuRf7EGesBAkqUNsTQKVXA7LVBFVgEfFhUhqqCwNaCzRsHXgsLbypingLXcpyDyz3BjW7r",
  "key1": "4u1NnffgAD6saiw3xeFLEDUFVx1aaHq5a7svuCris2V1NSdhc2bi5zQZrFqLWPVPqkfqotbCDtdnMxHQfUQohFqd",
  "key2": "3KhQAJp5ASGLkuNavpSsS83sV1v6bMj6dL2yuAkTqbuPSY8vDZxvYozXXyhFw1NgXD6XJkaxSkUpqZhWH8Z9Jp2P",
  "key3": "2CdTswR4NuTWDBooT3inGVAMsKaK7J4f8Xwe3bFLWFPwF6kbr1AsvS7sFT19tr3WhraJwiwCNHBs3rVgufYEAbxh",
  "key4": "zdrM9CuQLFHoVjQUR31b5BN7EYmSt7Ssa2Dvb6pLKgsYUgx7LuSShQ8J3orz7EL6SHHs9Q6zAA95wBMZ4udirPP",
  "key5": "sFvksJR86cJxUTVUM3PekBDPdjbVcsBD2bZ9hckuNWm16BhhX1ESeJEe22pkE2n2BaeS4YAJJoyKaccxQRfauX9",
  "key6": "ovNhjnNujSLcsdshdpqrYzXuziBccrHgpV4RPY4aW9q2D7p9oKsaVzDrNGidEFVuDk1NPsYWJfJD5W1UeeMMgor",
  "key7": "YrevUMfvQkspHHJwNYWAJfpw7HFBxU9fDuxdZzaj4ccUE3aEeeXsDRyjwrUfBuiSUZzTMRSKPzWPgTUvVQADpKR",
  "key8": "QHMaJ4hbnePQGHbat2E6SzjGGkX3oUJr38X3FVs7bHre6wvW7BEvG7VSKgCTq9ynhTw7tvahnB5ikGHj8bWKaUS",
  "key9": "52RUEfCyPYveqg1VvYgjCTdGrNQtwTDiK3eBnJgm1oBoe5ksFgb1nhy8n51iYzgMpmKLM3x2anaARoUNxhaiaK7d",
  "key10": "2U2AtCgg5s1aARce6b1YaYFWbMG3vo2ggNFJuB4zs8ut4ijq9HYo3uSqfMa11bH4hAzgjZH9BHKYz2wTdSeWRLrd",
  "key11": "2ZVZFZeeV7SBhaZdBSJWD1dEVivDT7ZwZWPyQ6BNCrTh9r7KaftW1oUJrBcGW1uoPr9MiNMiX17oajGTh6Txzmhu",
  "key12": "3poWVirEABqWbSyrgk62GHW21BCUonMof58ktMNXnNmcewcAVqb9xMsUpktMPvNasN6RnB9uPWCZZZx9dRTEHJk2",
  "key13": "65QYCLY3gDMVHfohmZBtj38vVWpqUDA6eihPav3bcZjQAaapc8DGGVPGRVSDYszjb5cHYdCjmVjy4p3tnM3grb5y",
  "key14": "83UDGBZtW2SunWH6tkJG67A73ZmWZeB32b5B8mDEXia4UUJ2d6GQBYcRzHdVNLFGojPJYq5AYxLahcDdEtZjQgB",
  "key15": "5dFPxnJiasPq2ohNWwFkv6Fv3iD3saXVcqPXizDxbs3dQ6e6U88fMhKdDGSwPELsgLUVvDtsEJ5SmCFhgmzd3apU",
  "key16": "4jFZ5CvfHRXvs9rYZfKEdx6MYFt4hwPeFMiBSsqUTaqu5MuyPaU3PGVoc8UQBs8E8PAMJGz8S7HQmhSs69dwnEPQ",
  "key17": "2a87fTk5ZMR3C3PLDZzFXnMY4JdDAvypfH79cJkabJsvpPu5EsPa4xrLn5oi9byxCEVcV8Ttg6yjeXf63UnB8ZPa",
  "key18": "2dETsqrVRKkXCzaUjoDj3Ug9AxwrWSegN9q9wWgZ3xn9jaDj7GRC6W7J1shFNt8jj1mHcJm7rtAXrrDXVyJAe8tJ",
  "key19": "23Pw2Mk3nJ29Nh63EyV7NvWSPutsUCS6fJ646396DgAeir9MRWd7b6HaUEJjhivA6jCi7ghK6gfP9e5pBaYKF9iN",
  "key20": "zm5LVeVw8udfZLMbHomW2Asn1sLgETXmGDe6jLe85unm67oowkmtrZJLzXxm5jPWw3wfya8YVRu4omE7iddPYjf",
  "key21": "3KnEkg8ZYVLZd7sg384dXGnSu6acRoj4Y8yK2JZJmLa1ACL9uWohX23duKZqipMiRRwhtPQXc6Ufyrvitn9S4Fic",
  "key22": "3Yu3Lg63JZkNpmxmpDiq1NqPHR7KyJSo3PFp3oTrsMi7DdhJeaegMQywxdJCDoeb2cpcGG7dgcLfnghTnufpJEko",
  "key23": "2nxmsokGb93FxZPAha2bTQApSZFfvs1R7gujoTrjVAnguCN5nojeE9YvMjPL5njeqX5A4sF1CBJP8KQqhHgDvX8J",
  "key24": "2pqmQDoCCFug8WygY1LrqmqDTW7ykYNVphUD1ddxxGhGKN9Xowutin8iVPsQ4fqySTvwdaJMHRBJHjekCE92MAvd",
  "key25": "2yWgVpAyKp8EPjzHuUE5qgaKma5spKm8C8LQaTFy96g8Tk2hk82wvvez4fKWFvzfc6Ut4xVvfxAH2gGq2MuMtcAo",
  "key26": "Kqoup1fph68jLLW83iesamtQroqJQeRUMzZNBGSYgr5okPH4moc45Db454Dg8J4fLzYFpWqbDLY5bfHZ7w7g36Y",
  "key27": "5GTmwJoFTBhykRgyZdSnFNzA6vixUs2BbM1iSo7NDP6XaZbH2cRzbPGXxMypDK8oLB356f2EtqDQvTJDwQhmPiqC",
  "key28": "5U7WiZLaVg1gpyv5htiQaKmiSq5aJpYApyUuMuFAWsjH65HmEPwufdYufj1DLSbqHFAcSzoganZGBVWhqhCUdLix",
  "key29": "yQJut6opdCNVaNGs6tn31nV7BwAmBB9FQKdPpmcf65JTx8wffR6PKpFDdknm3ffRZMdpSMdcuea8dwFZM1VUwjY",
  "key30": "3WqEYCiy19FAz3SPLJmAkdyYXceDjRaYUA5Uk62XoHDafr9wRt14dTvq4dBm4AMHYghgxypedWRrqCGD2nZLT3gE",
  "key31": "8VbmTUD2s6a6xGzKJqZtkxQ8FzTsv9wju3Axdi6ZbZNHqXpwzgTy2875yb4iLPqHdtF84HHDdKp4tSp7sAigJsX",
  "key32": "4xP5R6ExbZ52qzrmpaCrXvo5i5frRXPGnMfFtax6AtxbQ9Nw7oLxxwFAzHtvzXj75VcxsRQpL3hHDuFoaUc8Azd8",
  "key33": "2oPeoLY7q9nXhes3txS3gh2a3NeFNLSre3M1ggyz49J9K9EDoYCZQQfeco2LVXKWsKVYpn4cfrfjBBbu26JyE5xx",
  "key34": "38Gd3SCHMafJ6xM5Ccmohcw5agqWiDjGNb9Cy1wWQ5xht5VTg8C5umyMfbxyv2RoKe8ksPAzd6N3puAomcQN8qHo",
  "key35": "mL2XHAmtUvoLiWdnPQxrTKhgsuHPTKc36yhkpctVsGD21JpXN5PkdVsWNimSCuUT5cpqmREJM66TXCfnV73KgFg",
  "key36": "3WQ6fFfyZC1bxtEFji8ENht5XmpCDgWi1p6GDCagUP38nMDiVf3bvGUuefNDQ9ArXgEm13Ma5fvqYQfgHKutFKHi",
  "key37": "2VYNovv2cFwSPAfaz2DGRzV4ScXMUh3uffWMDmf5eujWZnx2wyHqwKvsFQ9LWegJfw48MNpif7oVZwVgihUecbLn",
  "key38": "3LK6M5ZF9gSWg1Xt2ye45NA1ApWRLZvm7hiJHA9iUhpaQ466tkNMvuhHxfVa197t5TDhgy8komt7Tnhaxku2jFtz",
  "key39": "2D6tYKFQ5R7cti2Sjkpr6vo4Nn18AP2K81e6MEGGScaoXtL6BfBURsz8D3G5E1bqd7rhwbUL2SZAo7zX5QwdqVgP",
  "key40": "5RBuXqvNCqiN44RZkWwr1iWsxNZ4TfXQ8Mi9REQYc2bcyyCVY3coQKi8MFnw6fX6RV5LXunkPAtf2dAZidK8YEdT",
  "key41": "28h5exeiNhGnfWSSzAgRkB8TzpTn5RinvPDFCAMy63bMUbxvTKAKtFYj74HbeejWpLXLFGbiXhAqqhE4Tt8iHmeF",
  "key42": "yR1pCWZ6MqBtoAncMu3DEWjNQ9vwSKVSwzxoMLHaMBrVhzHtdW1cnqcEyhwxiZ6uE3mvY1pumtFAwxg5ieLEHiu",
  "key43": "3ERhntXZnyck1Ptxb1YXCzdv1chpHnVZfrajcuvKnGVjhgdVK5nbdTFiziJFijhAWvmQL15xrAAJ3Xu3BxT8kGQW",
  "key44": "3PirxEUPfn1Lxivxge8wr5spNYbsGSMovmcTueJWm4UHhD96sn7MdqJjyNYjBDkSBwwBB9yRz8f6ZWardUDPMP5F",
  "key45": "GsW29JwPnoJpmxuAeHvkWevTTWv519prK39q2d92NL18ZU9tqCeFnv8zb3mRDs1WqFjSXKf8FQ7fiBXTakfVt3U",
  "key46": "4GY8HeDcKjBafvzUhUV99eM9xnbV3bDoYki61U3tBbmxWnmvvn3qZQFeKLJFtmhkqauDFuuhLFCCZYzr7Mfnk29z",
  "key47": "4ghxUq28atueeicCiBu6JAXUHbVkAhwf5RchWGhS3sbC1JQ6M4V4BDTEKveqvmdHbZMoJyujFah4Yxtcks3Tf1vh",
  "key48": "4qZb7TmomUGTTuViybA8A6WAVxGuPXqjV824jCf7k9xjfCyZYyvfnF3qhmp93yjnbrnjLPAz7eQFuXPipgEQ7ySv",
  "key49": "z8f6KWEXdzWgqwHvUKKYoDzsQi7FNJgRafj9hrCxsLFZNnAg6oeoE5KR258VVG6JbSGZDUCQecGZ94wFNzc2QQC"
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
