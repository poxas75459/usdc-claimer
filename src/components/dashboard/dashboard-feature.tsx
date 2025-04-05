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
    "PLpXAvyEsMWtBTpJyuYT9LuoRcLRGd5KvAo3i6MuyJKnfANfGMsQvx67hmeSckxZC4MiJA8JxaS1Gg8srghMoXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JQu5X6tMHuMrtRg26aobyiJV2DKsuNoz1NXfhpd6cFfd1mEfWVyEzLgWZah36EgR69C7sb2Gic76MPDUhzdCANZ",
  "key1": "3DimiArKELKboAVmYrD5fin5sucewwNV4dgqGL9LmUb9kpRfh9XqT9RhBZutmKGPa56CMrZjtvBfDRQHyfksL1ap",
  "key2": "2qqh7mBCDxsZ23B9W6jZXXRg2AujBNnm2pwUrxj2NPwYkPFghrXUeRavNGwjWCYBMkHkKDWx43QRaWvk2jqtNZED",
  "key3": "2XNavLV7madffskEc6XhdbnnNykyCQAvDiPnPWAHHAMdFugcitrN4tEucoAf8VzfFaZQXgsjYupYdHSc63nWrZkV",
  "key4": "5dmQip1f1DynkLzWY4R5W1mbNwpgbc8cvbkLGZ8Zty1HT14yteCeS2ngmdm5cEjXTe9uFrXXvBYs3H1JWJSWy9C4",
  "key5": "63NZSoErxvZbntw4nrXD9RfoNWjMLzEiFz8dqA5s3F6M93N4BSxe9tLSkVoYdizKjytkgfHihg7ZDUM52NeGYMTB",
  "key6": "4799pPNTThn7EA4CnFdUEq9aaBEC9tjLj5KJR1Y4y5AaDXecPyuzSidtGZyCaPcvStuy9Cgv1ik46hDaJA6ncr29",
  "key7": "3RD3c1Z6v5Xmg5TF4E86FFFwnz8gcsEwvMBMFUuwuHcrZDyfZeMUPSfskLPNvFASEXfALArknP2DEYQrA1vbCUu1",
  "key8": "5quQjzPVWwb6as8ixvJHtvSy4GgtSRSLV9GtVzgQ5aPMGEaLWBSzrayLhvNzLWnCDWL69eT94fm2QkyiszggAsJL",
  "key9": "5iwVJfaxBe3eGup3WpZvv87bWLBQM2X7iL6kKQBidULSc8oJDqqz7exR5spjrz7G39AQBxt8wmHF8WYgrQmvpjys",
  "key10": "4xYLXfCzoX9wZ72AGQ7DfUPLHLLYhXB5oAk8ggiRctGydb2gEDuc6T2F6ZtxrvEpKLcM3xT9Tdpc58EPBqwCqsNf",
  "key11": "4XkjQvdWzn6kH6e7b5SpsEHcAjW9648GHxJuPB2yZz7N29Kn4rcxeSpfQzA57SowW5KDt7ubFd8xeQJJMbAVbqEn",
  "key12": "43BgBDUBcbrzWeGVtNLUeDnvaK15XnpdJsD7n6N4wH3AHoTayFBrMY1LXraesrD2yDGcXPtubnkY2ijCtevTzJK1",
  "key13": "4fKK3LNL42Qt5VydzNgCgTnxAZ5nR5HeByv3NizTWWY54azuYjAaKkSJMw87srVqG8MaD16kkwC2kM1pvATvEZ7W",
  "key14": "29bBZbnyeEPApQXLzDDmsWUvhZpxfDuJzTQsRAdNQmt9sCmB6GJ1PcJK73HithkN5iRvUpzjTLWXiYfz7BAcAn27",
  "key15": "5nnH8zAS8XPnxBUZRGwRgWBmafFNqhpg8VAWZsZr7VBsuasnpDCNMzSFHgKsSd28GBPX7QPkR2vxwZznSUbhmakA",
  "key16": "oqHJ37Vuid1uKvqR5NGQAARU8KPMi9tL1RRhotV8FwaxkZyMrW58ZvV4fTuFAKERRDEiPjxeMVPPWXLf28o5ddp",
  "key17": "2BnTcay56PpxJTB1xaHQc2NP9ZyP3ho8xGRqTGPFuEAG19cSwtLacneLmudWdND6ERYnXj8XJX9993iMdy3jwG7i",
  "key18": "4TjET5m5ipRbybBXXhYjrYuFdGEDT2ELzdHuVfLr7i8TMtEwq66fKNJcWQbfu9tzNc6A9QWKmZKkJm5UiqnV9EJZ",
  "key19": "2g2VG9Pg4bWz4ezZ8ekdZaWTWtToz1jNJ3MtSSNeKEeoHcggbKByzcz6goSaXSkMFDwJqvNDrLA7Z1uWMnJokh7i",
  "key20": "c1NHPY8iKiNkoCJEmZEGSnopTx9BSommW5izDNCaJVQf53CLF4BnpHjTNcDQESeSDPFeq6kh2XFgTVuEK1HSwao",
  "key21": "4yR1zkibRhCqiJAyskN8YQovkvdcjGVdGgRfeFXadk3m8kVH5ytxJMDN68fJY6RyN5qHnqnjDAYNhJ7aC63HPVFP",
  "key22": "uHLRemX1HMFBMXJbTm6jm9xesdaX97XzmFnPu5ApsxYYwV3wVaPY7xpB5jYWeh5UkJYWKaik83sd2jqqBtNcLVX",
  "key23": "Zd9RYKcjvv5KekkTijVqeZUZuGqNhdr8yy26tcNH8L92PFbF7WBD2hikoVvan4ji4RMhRz3qRsY5vaWS9CG4K5e",
  "key24": "3DMGQV55uMGRUvqgomf4vYe3QN8uzD3YFDvxuhja5U1jiNDkd7n5aCpEtV6BHiaeNcsdRn98Ht9aodB92cWx338x",
  "key25": "4TCZ3iSyWeosjyjCWZB73SRyRfJHa61hyT4BGroqCeCptz1Ktepwf75zKhEt3dh9aGmgdMEJzJSuQqR5VexzhwZL",
  "key26": "2jXAbx4VA4CF7kYRWX4JQZZivn34oMKfsmTCJLqJyR9XmPsB64BgiVJkPumrB97kL1TbMayVzh6DoayvEyhEcGU5",
  "key27": "4xYhbj7He9iQQpQjozYz4WFbUKFMuJFyt5bLrwwgCD6j3Bnz9Nb1fZARL3mF8Azbd6A78HtbuPx8PQmtftGvmScx",
  "key28": "4fXdrw4TFpeo6x7uHZ9YbVPc1Qtciu49aYYRvVhyuQrenoZJbK3bK4WXFtsd198zcdjhfGWdCQLeUtHUxXYi1uxP",
  "key29": "2dtMJ34mGJd9NbbaFBMg6WN16pTbQcqzcULDKNxsistw6y6kCBVk5WqGEAVSBXkDT4qKmAHqo3Txt6whWzKNbauo",
  "key30": "5btYjcmNFdzQQTTPbt6Depf2xDfDajevjxt6jhefJLYYnUzwaUR2jN7wAg4NB5fTBYQuca1tQiLjNrmwxFWuiBfL",
  "key31": "46Wu29gcGxmyxaFewWqTcAYUfN2o7xZXACKZoraj7f9NYRtbEdRQAvNceNUQsUAoBccr7DWeY9sW93UxZ22aiqUM",
  "key32": "5Dya5XwNddks9AapGDSuFc8ZPba4WLUtFdZNBy9UZW1CA8yZJjTUESoCt3Z1mxp2YzQ2AnGfo6VbeWMAqtgRfAPr",
  "key33": "45AnjVQGSgs3CWec3c7sDQKnLKyzV2yGZxYqtZe1YwdBg8FXzoReHtT3fcgE2VkVvwX9ZbUNiyBkM1pv5vexruue",
  "key34": "5GQkGgAVQPx91e5gBWUybNCpwzk4Uxtv4jKEWLK2etSbdntH3DrYouhAQsKQgSR6akbHsBQYnHdsgyvJhLera3y6",
  "key35": "3HvaywnEDA6Q1nrthBsyRHG9SuUsW46n8fqbtaw2SRJSGHvrX4vJaNKfZb5Vo8YYh9FPe3s9tPZ8SvFmbEqT7EDr",
  "key36": "39yp9G3hK6CUCMQiwakhiPcCvefFV4bWM1SGpQJwzB5xKq2fjMQTj1PqBD7dP86NMy8tecqgveiA3kHJhw12G8mE",
  "key37": "45W12k46rZbMuNJXkfoeUe6Y9ALg4vRLtm5oe7ecr5NVy5fF1feF5aoUubatxCbsSDHH4sWFAWUnxGu2qP3KYuh1",
  "key38": "4z75cwRhcEnhaQRjTfAGmtaToFfkVChWCkeQT7jCuprHA9i8gdiHTciiP5WUZaGGryoUa4S5PaS4cGY67FPCKPG3",
  "key39": "sBjSJCd7S7teVRQRjJCDox1bKdu35P5HbsbijW4xQ1DUHFG8467QLptSw2y5tVRPGmUbXYU8YcXSSoCxS73sxqy",
  "key40": "459u4pCCm7SyEJA2rT2Ro29wB3ZBgAFAJwo5fWJyFbupxgHc1utqVzkXuWLxbwWiRQeyausmgh5fNRiVgMgiQ9ZX",
  "key41": "nMJnTGVXmaX2AQ9t8vrqDmEHmVpojKmJcTd34n3UB9g6xGftzpwGKqs8bCduP1mTWPsZrhNNW4YvmwNPxaHbXN3",
  "key42": "4hvRahNnPG22Ja7tNxeMaxqtPBMSX7fzUvNzL7MxAU7igZEX2o5hujKHqDfjuN7zE7mB19ZdUPpRDkJFq7HuYNmb",
  "key43": "5oWBNbmwUCKRccWcSGVFXYWgvSyiCW8VQwqeM4pAWcuSkXZSx6CpAEeYyMMjMUUzQgNf48wG6kYDe2JtrMLHuZFu",
  "key44": "45yXziYQmutjZBrXQzLwKPPppej1qj7rAsmmRZHFxBW2MRoUrdFU7FEU6hSfUyC9GmESB4upjqbm2HUN9SL7ajKv",
  "key45": "5kBEMx1YmYF1Ph87JHsKQGZdDFDXAFML6D23JPkpynQuu4TgBUSC6aWWa6asgEqgLPx6KcS6VmHGExhS2ex1aFgn",
  "key46": "5eqXQyjrEw289qkxJq9WugQFh5TmXEytU8Ke8XTosc7DEn3CdLTa1yFp4XiunnbP5k6wMgsRDi2zdFR8s1zHmyFA",
  "key47": "551Xf6UpwVtboPmd95kJtBE9zY9cJKjRWYHg8ryGKwsgAHCEhJp8sPApqhaXUmWrHniVbRJNUt74XHhzWMD2bZ9v",
  "key48": "wD3Ksr5jYQSk82qUq9pZPDjcFG1WcbfFw7i5DK1fKoMkAkZsE55PDKrxM37nnQj657mNxwn877RgzHcAX29hpSj",
  "key49": "4ySYXH2jyjqtPHu1Ha2MpiR2ad9MNrHArphnZBZtiPCmAjt7HoYZg5KNEKrrPFazjgfLrUWd3MiEffC9yjyuDYz9"
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
