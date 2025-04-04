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
    "3fXpCwWKGq7fcWNS5ySGuEQvKFAuz89SH6TH9Lkky79Vbo4XrVwt7TqUSk1LhqwKoEotZZGJGfW5LLPfiuhuK9Lh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67qtg8tqTBUuAprgqR17CK4u3TxRwGxthFAn4hhP5UuKTpaS7WU7soazhFvzrZWUe7sT8JEbb4uceUmRa8szEshe",
  "key1": "3sjfD54xYRDCS2G3sMuBn9xGGadvQXfxhmQ3oc7SDsooJc5wyPbVSq7PWfdRc1nHStAsMAFsDvnkUzWqYWQ3CTPt",
  "key2": "2VeaCkofBfk71cY49G4ZpnrNDZ77ktf9dkyJhTDQFnH89CPgA1ApQysHzqCfuzi2xKESZVpdqaSxizQCKWiiyhm5",
  "key3": "2VCqWx32jAbWMdRbo2dpQsiYxZCGop4NozRs2yjMT22cG3iban58QWvh4fcUP88R1CHAgazcJvAWi1gUrYzVuCm3",
  "key4": "5BkjYUeDMmVFNCrwbqbstAE8aa9S3eQEEoemc2MAxcveGp9jTvtc5JknZLJVjkKwMmFZ4AkiaAGgqqiJigHhnUDu",
  "key5": "3cgzqNT3GEwkDSnBC6MKAGDqb4vh97eVpp8dfqQGncNpcts5NKLV2F9eogF1kY9K6v5XkTPiUNtwXx7YQ88DBzTf",
  "key6": "orA7nBhHejnotaLnM7R1hhd5pH6YsspXT7x8qiJPNyTcQvSLTGFJUdyTUYYAjiFF6cV2QXo3ts427LxYMp31KCe",
  "key7": "Fxb3tGvCczDW19mgbdNrFiVsis1yismaJbekGYzigo9cLvPmLXA7Gp4E38vc5fLAiLKUQQ9qTNJDmvM6t1Z84xb",
  "key8": "5Qf6USN969KACQQeHYAQdTujAkZkX7JWqdZr7gXumky6caWiRqBcBcCgopaMkb4AYQqdVxZXjoXzySN4miXAj8jK",
  "key9": "3tuTH3ePCbvxsk4r7jpd9Lj5jZ7ggWrG4gCj3jhjKQxY38z9DoxRp64tz3CyBEeD9XuPXDxAu2xYAGi9hmJtxtiu",
  "key10": "WXDehFBgxYyJx2J6qAYCs7W1x7Ez2pEB8Pb1BB5KNoCBcTNofwFUXKMDfgvDFc399CBhbH8ChLjoTqAzTe1cmT8",
  "key11": "GwYmhBPRE2pNCW2u48HmyYQDQ6Jb7XVzE6j2uu4m8kuYuzDUrHor8i2nCbyK5SY8CG1aGKSrSrTRu3MJN5vDEi7",
  "key12": "3JjWujmxgPiHo6iy1BEBBQv6WuqeC7SorkdtJ3uQKLCMTCjZSDqGzaKwAjgjso2WLEPD7KRFLaLXQ8YG9ZV4ATxK",
  "key13": "cSRoTCCBNbaw6PePmVeTZGdNmWZ7cMSz6pRhV5HqVy63bryCYgKzy2pV8GZU5m2C1d8kya7qPjRCFhwiBeuW8dq",
  "key14": "5KdQeCB3wM13xQbWRSQdu6GvdK6v4767SLaJ27MCTPt2p97axA1xT12uzVWrcD9qazAYkw7YXfxZh3MjmmoaYFWt",
  "key15": "4U4zMYjd48ntoaUDgNSbGgVfB1cUj21YRcBmAkPhV7ft4wyWqXoVuZoE9WdzHtEkSQ9XmCNQ3wdsdmyu1zNH6nin",
  "key16": "5kqedVjsnNdQ7Gv7XDpr4wCzXgpjahMvYJxHFGLegZ8A9WvTts1rocWemhStau6tW5CLSQJG6EuukQFoFaSS1bEe",
  "key17": "3ts3U9wGw2aLdPtV8cC5Sn9YmP8eBeCwYgWgRDy2xnPVJfVAkAbWmNPZy5rdkpN3CHQyVkWSfmLQN2ZHNpUNi1uo",
  "key18": "58XyWHs1Na23PK1APqVDthXFF3K68x1uxZWC8XNtxUdrDJL3izHvXrNh2wGKNVqEaajzDxAF6iEhmfL9VzG2k6qh",
  "key19": "63cbQurvvaHDhbedzRs6AoZq5iGbsuaNszZCFNVkTgDdknqMEKEpb6hebtngKmWY6kGinH3ZdQg727XL6oNu2UUr",
  "key20": "3emmyT4CJTNKvw62X2XihXJBjLqiac2PgVqTm2zi3CDZ95DEmDPLEiof1mDWvAFk2vVHJmqKbQkCi46Wm27yAibV",
  "key21": "2KeLnLk9msDGT1Mox6znpdJhQ2YxMEmmwNhfgpzdAT9DA3Vw8aXhpbbi5MRUHpEAxstmBJrd64vwnjPUk8LyAXWd",
  "key22": "XuNBUfw2HFkchbtG7Cw6ftTZwDxyvM9wVUq4BjwDSjibmcfpZLipwjWDaYvBCVrc9vwaVNJ9Mw5j8GYKYEtBR8W",
  "key23": "5e5R4wsP8zgkTSTTEJZF6kC3g9hp4eyfZVVun1qdfj5RtLpr81dPzaXkD7WD1znp5a8W9MEZZB66EHa77D94npbL",
  "key24": "mXNt6Nie9o6SZGiPUsLM6GbewoPmk577YppfkRCAfFNKfFbcDbb1JEbRWN9WvgFmrF1GE8NLP1ontiQbzeQbdsz",
  "key25": "2voW6iwFPki8xn7MUoWZs6nqmoFJuqezmznxx4qbF8rLxKMkCX8Fy6W84CKrA1ZjoeMoBnWdMuib3Gf5zaC14xEi",
  "key26": "3vybc66PeGvMGhs9ZhraK3a8zG13XEQRLv9bNBGNkgzQy3caF9Bmj3Zc9UCK7nbgw5VjqD6qnUWZjiJyQwZatpCz",
  "key27": "48LLF2fEbtju7Q9axsnQm2xnRMJqdum8qh6WU7YeX96Qdin6NhR2kF4HaukSfVcU1bzHDwUwxs1bGybvN8BBkEau",
  "key28": "4T3c1xDcQtwgR1cJekd7KFH1z8SW1JQhyRaFXRcXBXY292DDqKPXhsJRspTt7TRdaymTAD6bWQZZxnvZky2uHSSi",
  "key29": "3qwJbNjXiGACfciQ1PVZT1t134mKBb85Gwqj8Suvr8QXZXGGRWgvPX8vtCjAnLUHZFZB5vScA5osgidYqZifu4DD",
  "key30": "1vYHJbC3JnCt3Y4yQj53PVvgJTt61Yoyyva6Tu55qj4oHHDivrcnWer2LCWSmhVrgpcoq6Vpx4PsPhCyyCvaTz3",
  "key31": "3ZJ2DDTYDHRWfHH6FZEbG62u62TykUgbuCnkdNC5BWTLzm2ZHCa5wQm1htBdkLudRfMuK8JFczcLkxNATLo6GZky",
  "key32": "3FmDmPWsAoRbmfgbn3F7BG1ERvLv1j7PCQvy61ho1unqgffYVdRSupNWGqpLKcWqSCVaSFrjuBtDhq6ohMTMY65r",
  "key33": "48nqP8xHsvXF39RXKcMjFsGQEPbZYd3vhvuGLrEvPeA5MNZYYsB2KnzoWYmNVU6upknmQJo2jpav7TwH4QyzeuNo",
  "key34": "5C8TboGnLswXWeaDWanq5C9nREMknoQbmtWVzJfrH4Fn3tF718Vof1nX3g4jtX7zxjRr14XiwuhkdMGn8yR4p1oz",
  "key35": "5gtvyyThzwjqnYw5uwwXwUNGAzUW6a2bRrRhswpMdSnes2JVVPjDdHCbyiz2qXUpFAqW7PfH5G9WiG6VQuC7WS7g",
  "key36": "5fLNu5CdLG8bZf17BoZG7jXW5AAY55jk32trbgoBvs45XizBDw1r9o5pSE5M41shH3SuP7pGVEs4na3bVN6EjZju",
  "key37": "2MZrgWEEiosFi1vRBPHX1yBLKFfjq3msWQBRRxfDCcpfzyMXPozGTbF6Ujs1hwWsRgonE3K7PLYdxzvk4AJkrbfc",
  "key38": "4YpgEa2oy2xLrYnj1J5Ng7ZF7zrUtQtB4EMkphH3K1A4HXJ8KWUTYTZ2B1xdkHM1EvhXZ9nqGgZSpjtsBo8iWPBA",
  "key39": "Ug9YuosG9izpxrEC74Srd1zC1TpnvRK9ed2vKkRBGvwvJfSNn1npeRPCrK6kkFJE1ng12KLaWh4GxBtQcDY3mBK",
  "key40": "zTgitTTdVov6QWDRLPDapjWyWT5M11abNyjsjE7SzZkKsuAK99ykNQkNzhRWwJ2UE29oAjmr3snFjGRek5utt5W",
  "key41": "TVFJzXW2vSjvj8iCrJxZpQ14togUWW8vSUnGowjGRD7d2mGt2YDrTb5teBFBwoqDzh2RvKfPa25Citd9KLKbSaL"
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
