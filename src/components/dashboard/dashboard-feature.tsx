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
    "3UH758XbTx1x8xCqYDXTnuHYwE6wG2bcsWRvJMA7TPr6VchBLiAChUWfJrkTA2grSTuyMyUj4BXJZghECGgTp3KD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51t2FKcPcKcC7tKqV1r1WwaHWDrS9VxJcM3RgNGgjRnHdZY8wkoUXB2TrJcuuyLnAdofgVLhZb8Bd8XexaHHTuVA",
  "key1": "4DoVW8xJRPVw7eqoJHFvyFES1rHnmAsP3XMrxC4oFPeZEtbuVQN42d1JeH9Kv4aXuXxVi3dCHdfJzcU8d5gHztuY",
  "key2": "5uqrmDYVMriYZRCEsYo6q684jmrzDYuuACRQyuDaJAEkk1xVhraNJLUBLxKu6CHKoxQKfoMPayvWLuN8LThmuJaa",
  "key3": "5CspMoRyfqnmsGLjeRQyrgPHSZq8eeo4LQY6J394VEdu4ojD3gfDXxxzDEKTWujLfcbXm9SpcdUqRdu71JCihVwJ",
  "key4": "4BnQ9ADcjET4mCkkEJfcPKydtmTZ5tu4EEMaj6yfr2sNLG7zajyYQHgLQfMTuYz1jbF5TCSFxeKRLZCme9xmSriv",
  "key5": "5xEqcSAr6B1guXAkNw1ZH3WvAkrwiNMscThr446LvSUzFidaetZj1KppxUtCJBWi4e1TEDgep6U7mgxfi9kUvpEk",
  "key6": "2VXoqtXirVcoaabT7EjZdY9MWjrRsQpegHfbshSh4d2WWYnWysZcfkV76UaQL7sTVye2QtVGXTfTydUz6FhYr7hv",
  "key7": "57WPRJ894WjmoRseNWaoQ5PmEB9ekJW1X7AzJcjpK84U3oDkMto9Yx3Rfvy7WKxTx7ZS7KB8GEVP9yQgRFCG7GPZ",
  "key8": "5dh2Funio6cQMCtesziBEKhbfcQX8W2HnwufMugJevdkJ9qPcBiEK6scba6fjEAPFWcKzrZHXujbhfVfj3n26DBS",
  "key9": "23wafM7o9aGd6ZC2PmW2pFrvJDkrVb6yiPM2AegMN9rEvpJpqfB6ZfdGjQ9TgzV58Br8p8wvdZNAYnxf34h4kiqH",
  "key10": "4hyFjGRnfHKvWWufRKtuBWjNrT2U9K2KShkY67uuhzkQsSoaeSubXifoZe9n1z7zTD3j6LLnrGppjbni34Umshh2",
  "key11": "5Tspoxg1jRpiUda6NZ2vEVkM2fYbN6GoPbzavndtrJZZ7MLuYc2jpAKsPcYtwKHwue5Vdgw6N1gKYAhcGbihfPgk",
  "key12": "3LPbkQFVJc8cuKPCMh97KtwJEmZKvq2M87wsm9wRP2XaKfJ2VDUAELFsDJt6FHi5bhn5Se7UB8jEfButvVhNp6iB",
  "key13": "4QVW7oUCHE18hNP838kWt9fSUrXCWS8jpmqre3PpaCPiqwFNe4rfc4rfps6hFtKRXSJms6TKVz8DJb8JyYR1nLEV",
  "key14": "5RVAcsL2CTtuuqjgSsWNTapqkK9FNxtjmWmXaxfcuXTZZwzwzYC3YEDb5c9mcNk1r5vV5LxhUL2fZqJN1id12Bg9",
  "key15": "2FdYYPN5skg7UkYnNzLi6Euucss9AUTtLX6cooezXWAFkFaPh3YZPBVAa5d5gDKyLHPVgPoYnCkwcxew9cFz4BAF",
  "key16": "3uvTKokJn57HZiqUQwfEoaG6RvaGVK4XTYMhyEyC17L55K1PJYPxUkX4LojbWrk29ngxt3e1UjxsDFmArbzCpdR3",
  "key17": "3FQE9Nzi7eSDJhRg4xih2feZaKx48wR3PkNKK5jtABfoNpiHRJPrPsQYc8wqF2QQSrM9Lr88DX4jYXibrTekqtm",
  "key18": "5sArdL4yoUMUyH7tuJZjzNsRuE1TAtBG1hh6Hqt9QJ3s6WS9ski4RSZdqq4WWQkbduetWnDhF8ggnb1ed18FCFmE",
  "key19": "p9BirxvGm8QNKecsTL1Z5sVGLQ647Ch9CVDZyFzAgX3B9Ngw5i4y1j7UdCMpKVSXAKfdmGqLKGq1ox8CWnYe7ud",
  "key20": "33MDda14Xp8LnGDZMveSpakDDQvZyXujrSNfss22LxR1HkrZt778ZdD8YkUsX1RWtssECSQFPt9KFxYn9FS94A1",
  "key21": "JVcG887BkjajeFqnZVe56DNheNWWutjvj6qpLyq4yqTguEGZTfx1spDuhkhgbuyCpP8AQAgPamFconpQx18QahE",
  "key22": "2i4NmdMjMsXM4cDAoQfxfP4Pze6NkY4RqzketU1UcT1ztib7LUgm8aTrpRu6hY3siyqTBSZ4bgKebv2riAy8RtF6",
  "key23": "31rjiLYwPvZFJ5WpGk8KYaecCuCsQpey1SZDjvSS5AbQBT3cwM5a1MfKi6SQekfbgsjNTD1WtuP9jS46sevmr2cj",
  "key24": "3KUoSBEqMZtu6K2cmL43aJX1jZeGuhYDFFrnDSPSMX88vjxx4LvCHnGv641TYEAZVRo5T29HmJiJgbdza6o2s6Me",
  "key25": "5SojZhGs9cMQn3cURb9kdtHH1vZZGZJzHCKjAoqgx467RdcjqV66TmaTQgmCPvH8NMMPYf8trhYTDR5tZZS4yii7",
  "key26": "4nFHQZhAaPaEb6pasqJ9qqkNt8xG39LRvopYPXjrMWXCy7Ngjthu8AmoBUzDMaZLsUFwABYne55oM2o3MYDvTS8Q",
  "key27": "LyBjvsYQ49ZX2LRBjRGt18A67Tx9NAQ8pMu12hzogj98dnzdjYpSxKpkBeWcZ6wHxCn2LF74Mvcg2jyasufaYAG",
  "key28": "4ZgR4DEo9SzHENM9kceTuYUeKaM7MrwYofyo2arbDzS38VPKFP9UGWHyFxP1Y2RLxn12fM2ZhxQfUPt94skZ3h4s",
  "key29": "2PvVjxiQQRWGpV4NYEGFFV8hD9mSZHgQESAHTWrr2D7TmZH4joQSJA8vFTthmKaVUBogUtKTuL8P8GXz8ToJ9hXq",
  "key30": "39pWDRY7ht942RPKw7ngVLdUfz1gygP2waMjdggDeHpoyRW7Juc3k5yFN4Ph4oz1kaXGgpQKPAKtkLLaTj3WCrGW",
  "key31": "5J65fbrZBogmQGcHjiTGunisE3wBxRA4KQsDLDXptPB3Y9Cs5WkX6tNC2VggUWtQJGu888MA7gPmiLKD7y5vvjnE",
  "key32": "5KHp8v8giaEUXzRc6FkqCb7zYiFU78FDDgDQCLk9cGoiCSa9irFqwf2MUqa6jid4Pb3fsSTukR7xw3Ug4y6PYha9",
  "key33": "3KrGL2H4osb3zD1sWfZ7UD1msZGzaf41GbtgvPs6qDiW95QgJZnFh1yDz6YtDowmCKMy1rWprBdZRMyVKVrrSLTR",
  "key34": "2kzHCX1tD1FG68cPeFSDi3vnoEuRiAMVLcvAMpe1FwvpFryw5fhgD7sfDhxGfH7LwkXsH6bJ3LJS8C3nSvZBkoQ5",
  "key35": "5rfV7DfwZC1bam1J8Mw1WxnUeFU5WbUc8tgah6jAK5iopDmmQ9yf5d3WZoaVGa7imwPG9Zw7r2e53ccHdgF3T37u",
  "key36": "YawneaXcZ3jUo9pH3BPhmRwyXgFZrPQyfTJwQKoS7QG7fDm1p5rxhBighVnokhWpxjKNF3ssp6a154zyn6qsFzp",
  "key37": "2DFaj7fPUrzcZfzLACq2se4YA9oN9JGPbuD3M4E9QLA1BoN1oiqZZEMT8XbdqEP5BG3neTmVPqyCyahc47xQZAz7",
  "key38": "4dpz9oGn32RNsDBq5q54yAqeyAMrWPzV3CxdKDhXdab9mF8BxZh7kvLFh3nrSBNLJbb1EDzvoVzAtnrUCUhehxh6",
  "key39": "3DurLSwYLeD8JjmGCZMaLsUrHaEEuJoGPJigb4pcfPMHkGJm9iJczu3uGzsLGgwRPk1qfetskcAkASsez3KGgnab",
  "key40": "65FZ5aMnPqckkP8SMsQB6qXVVGkp5sUXRWVMZBLkRjpZRpE65bnAeDYyo2Txgf5pqgu4kCXepq8wEm9twXfoRhAL",
  "key41": "3vk1RTsq1QYdAqLGG2x6L9Ro1pZ9x511TEvcPYcuKG3TTihySPypyBrib8Jx6V2t96JRHrpkTVJEfPdfJEicvHnY",
  "key42": "62pQFgNRA91eraigH9wzHu1w8RbucYgX4xT5y7iUaVkcAvaPFPw4Jr5uSU8SQi5hc6m3GfMS7CMfmcm5bid5L3S8",
  "key43": "4uYX6nCeCMrXywzwFTi4YRWadUFX2wF2DNiWk6nK1mofd4moq75AWzXzzVqom7o379hqEfNUAjmg1brcoJopgBPe",
  "key44": "5UuwjqAJowaAv8WN2pFRjW5JRzaPt8bGn2uadDBWaWcXhuoT9pz7TShpdRhbKotcMYWr9TikzcN6GFRj884xfxUx",
  "key45": "2vMzWLisfeFxbXJmS1HVEjRoWrVDcR8HzsQFLm1DTzzdRAYtkUEdo2qmMRhyraU1p2eUQBc11i5hjUii1abKRvJF",
  "key46": "2JWMTVZEKrz7BiaPNRNj3XmzUaJerRAsy5NCRiCGWDmfxT15Lvjgi9DJxXig9TNttTNcUpVsbjtE85iKEbRPrfcW",
  "key47": "2yaguZXVVJ6wB796n1nASCERb6gyvVZaiuPPciWJdW67pxZQRY5YiDbQqwYYiwkNQzSzYLA5TMdLYPwWpdPam78w"
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
