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
    "4hjCJ56D1838tjhwiLK7U9knAyN4LpARSZLWnWPJeEneXpsdfe68WJUsk4P6Hr1ShgSLVWYMy5LMuXQM2rTX99cW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52owjCcG9b8KU785C1pBqYWqFh8RzbbSUWMJDMC3P5uKYVqkWhEUEU1eTRgJn6kDXJQ2BmPgFWqi7mHfQ1XAxENp",
  "key1": "4ihM3DtRCd8a5JoeCrpKSRKsGZwFZkvtxHg5jjUQh74qP6p3y2irEo8MxpLnAyKkXrikrxnt9xbfgtN7Y9jTQBcc",
  "key2": "4ac7ReQxEDrsgwPFpydxRs5tvDXieQB7M74YPN1FU4aErKxdRopEkuxTWiLPctbcbTx4jNoyTnxUA2Z9pLsuV2DC",
  "key3": "3SZxxSrVpfb4sxWSNNDEiA79NrJpHwEoMGZvDuzFXBxdwuQfJaosi5zLB5VGqaDywYBsCbFACbJZXk3KoCYXR1Jx",
  "key4": "vyykkHiQh3y9VGG9GRzvJSPXF4vd7iN2L51h8mDLf2XH5S3pZ8KsPfg7BMSiWeqqd2aqT5gAop8mKtHYdrmxeAA",
  "key5": "4JwXiQyGkKfU3ZWCJshFWjMHcTssTArsjccruAR13sp5QS9zr7U2u1FuWfPMVm1osXm9SPb72oTY1jjmth8myau",
  "key6": "2Hk8VcQjRdeoc7QehevrKTYfr666EK5K7E7K7Rjn9jWEokQftWezJq3y3WbXJLhtrYtq3pz4j5j5ikHsjG7UMkht",
  "key7": "2aSt68zwvfVPEFddrCYRAXoF3tnzPsv4jBX7gszUf5Y2hRpQigLxs7PEd82L5ckQzpiPWi8yeDR4d9PL2ujBtKMQ",
  "key8": "4YY8xEyVPv58D8TtSWwQ7KYfzuLpYt6Ybi5YkCfkZsjSnsGRQ5fFd8pp8irLcFcxchH4yrG48gQUgndPe1APFL55",
  "key9": "5SSLDVHK7LwKDxaV845HnEkYnYdLgjiJFRuq6EqkfTKJBHKVFgfB73cNJZBxae5z2Psd7AhVAsbzo7EV5h3r7jHv",
  "key10": "47QdwSC1wWfrRNDw197F5GvukhuYpEMhf3SVGvLTHsJEXFDWSkoiEv6dyJ4Wx89RWysoHZbTrMSjQNZzA7N9Hi7k",
  "key11": "rGWx7NS6MXpfwnymWTwHNBHcy7xbHusy6y1t5ENKWPjC5GfSHMGN3adZWR8CJCL8eRWoEYp4aWpCuhqWoG1Y7e3",
  "key12": "2N618CkBsgz4ppu8wi1xuF57e2j9Lay6o7FH1oSB1wAAuRZjx7g1jnrHnVKDqa7TveaQyGTLQzmXPTcYWVaMxYAr",
  "key13": "3wFnitXkPHijv2xhdb3oho8PY4CYzMDBWysKtas8E9nendJ7Guz5mtmJNGFz8vt9Dwx5kWE5r7eRaPY1d3GJvW1m",
  "key14": "bGtotxpP4HLbD5MHQcghiW67wopzTY7JBpZN6BcGJqA2K7t7UsyMvdRUxUKBQrDxjEKLySZFHZWgzwFNXdhXoAm",
  "key15": "59MSuoc7qK7kwmy18zrnFaRXW6oUtqGxMQLNkt6fpEeizF45VGj4y1BeLNvRbzBbr8xJrnhbqzCkWQeb7HS9iva2",
  "key16": "4zYNzEowiZf61EpY3GNRA6SPnWCJrnJiXJRH9uZMZ4UQMBVzkK3aLctFbVy13iqagoQDzHepDm8E7VT2VYJiZBfD",
  "key17": "3y4uVyXbUkKdy95YcXLDzgS8eSDMNZQCJCmGicweZnLgzSTnsLQyFJR3rSDo3T3emmSuNEHVCMMZsoWEmhCdgfRe",
  "key18": "24Wrx58YNX5MbD2BMvyipxM2ZVhusLaP8hHfLoHCjp1VHakE8WBjhm6PTyy9qwMgAUkgkQFqhVidciJv5WmzD1xd",
  "key19": "XpvFZWrhnYGnmCd1ju7PLPouBEXF2uf5rJCRU7NtHU1zwF1fRgL5813m7j2w3pZRHf2Pt4h3VskcRxvMqSTxApn",
  "key20": "4ZDMi4irwiweqh3HKuFHyC9Y9xpznNzGXgTmJY2huKbgoKnyniSQMKh3b2McEjhmQFrJiEAsuCciDvCJBNC1ScKN",
  "key21": "5FTrePhiz5Fzdv9BGj5pR5js3ahR2Pzr4XrFZ5wRf4A1gVU47MTinUh2HsVEEjC6YNfAeL1Kgg22PPH9Z6VVhb7W",
  "key22": "V79XZjNT53iwHGGga9gQpkMoobxpB6UEXXcKKYYftpE7YQkrwVjLasCVg2MDf3JWWqbqyD1ZWGySaGh4iETabQj",
  "key23": "21EY4DuJcSDtgBwtFFCcutL8V3mKuFDTPDjBq28QemXqa2mTcRrSzn2NrRedgeAmX7WQFCU2BNCLDVvo6izaMV1E",
  "key24": "1XJXYqAzKaZVJmdQhM99WeXnc4A6FTF38NH8A7e2EFDtrDpaaQgzYcPXtLXQc2jM6iUbrXK8ro5nbaLkqjeUP5S",
  "key25": "3PQraqmHmSKv17UdQKGu1Zu9QrwNhrurTnVDBwKkYF5wRB37NtpiLkqk8SiHsAEx1XHiobYCz16aCANC87yqXBzD",
  "key26": "2kj8byjjsN4j8vqGyz4WMCPKi8DDb6VF6Qe2Sy621iBTkmTi8i76oGXkX629huDoSu3641ojf2tcbgq8ZtqdCbN3",
  "key27": "2FAueRgzoXc77SrAP6GQ5mRfwhEBqnbu1HAaW6TRWW9Jy6CHT4hQwGmk2NVJ1df49xFhFe8NBTE9gQgCRfRohKat",
  "key28": "CAaB2aFGwT6GRUW2nz5G5xbeXSCH6mRR7WaHWaz2QUxEau4NXe5pnnx1FTfrTcoCZwJ3gDkFWeHzDgntq87pzH4",
  "key29": "4UgCA1VKnSDvmtjvJBjiJFiXN5H3cQq8hUMvXpHNpv1T7xrcxwHbfzNYPn7nJzwx2U5QfwGZrJJiyZjJWVXtM4Wz",
  "key30": "EvrXnFkeUVMv34JiYsQQw2pCDmH72Ci65ebkJRQXEXaFEtHjnBW12Dg8afPqExHcMC2LWLJT1VKcQgurMPZc8b2",
  "key31": "2uBb6CrvvLvmCaefTbLkAQYNpY3vXYMJR9iPHNnhuLzFwfxGMM2mmKhkghwQRL4xkLxkkMEpVmuWa5WbLCU57DN5",
  "key32": "3rZwzocD3nPcfUP463qF3ZGqffdwvHTGfKdJHXFjGQNQYsds9u2BBmN5orKnNrF8AjFHG6HXjNTV9AWhRKrypY96",
  "key33": "2uxcRjCkEgQPPoQid85WYT2vxQVZp9B7RNqoswhLEGJYnceMGr9fJQWz5jLaSynfmJ2F4iAvboJw5HsDPqVxA1vF",
  "key34": "2Ni6tPdG5BUiVebC9imDRUZvUuRZhBjxSdiam276psNqZ4cZUdh6jyGP8MEM7gjcSKNH6tjW9HkM1kyu4t2xdMER",
  "key35": "2qYnAKYsbZQBajN9Xkpa8k34sRdnFxEy3VYHfN5v3HKsbvk23fiuNz3xtwDU5xmFhGFQctD27GSCNe2bKgG2BPcs",
  "key36": "gtohPRrmezSyGwbReEUFXaqFHrp9VUAkwdshDA2SCbfCuhKnbgyZX9wff9MgKKiLfMYSTG84HvqY5Pg6FN7Tuq2",
  "key37": "5E5iWWVvqXyA6pgAJceQRPBkfn4LG6Wis4JJgTTacuYDPWHLB4MD2SwYqVQJwWgM2URNd7e3ff9tUVkqsBspkAZR",
  "key38": "2MBJJrYc5u1mAcfEUHz2wWAdgZjvkpyyEfRkqfHNK8c6iaFPVkQ2pNY4HZJBPtUMfxYsgj9PjRAbKpJKF15nissV",
  "key39": "XcWz8oGjKxmpbf2xKgGerpbeF3MtcXUTJYxJY4mX8C51JALWaBPzVZZmYQbEA4Mbif21tmK1UU8J4xcRSbvRnM3",
  "key40": "58bCEcmFnEYTXCs8A1ufp6qhv1ichWn7H3qRsPRUSPb2JEa2oF92DsBCyGAD5EsWQhKLkoqgMYJknaRMq6hNwTBo",
  "key41": "njYmmJ1nYfSUrwVUhHW7rG1WzxArjZvYTQUfRhJhBTZFYQGxyUftYDFGfT9i7occB8kxjv9sEiHqvFWLUGfvDXB",
  "key42": "67ToYtKvWeZ7K1CYpqziNRVnAs2Y44ww715JGhP43S4Nube9aBpNUyJXURa9qvei4ovzqVZztSyRf4VXEmRTJU2X",
  "key43": "QrxRcN9TbDbey725dfojYFpQPsTkjQMUmaGqyNdSSXWeuHGttMWmEggn8fdaknB6ku6keLa7WpDVtk24bX9BM55",
  "key44": "5pW4H8umpsxbNszeAANzqMSu5Gt9EbhHXmtj7E4hwURLVb36v3oHZbhz5dRAYEcGNJ9hoWSV9JLosSvS26vxjn5i",
  "key45": "52DeTVHb2TSa7ebspWD5gDzBK7GFHS8rywbJTn5bXuiyHtYBPnVRqB2jKDDn8yYM9afDmWYsX8BS1Sax2ikDkRMR",
  "key46": "5p6vmxhrxjSiPKPLBp5JMDGbotw9JVfWw1p5MfRfF5f7LAxXRGxeuZysZ4NcH6cyFw3YdiB3U1WoV41uR5z53zws",
  "key47": "3ESjAUMKMf4LkeWU25Bfx4Z1gmm2WMSiir42xZFRniaN4t2moxRMB1CfjdDgKeU5wu81mfc51DG5xpvRXY5TzE33"
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
