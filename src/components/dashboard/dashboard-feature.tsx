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
    "4Rpu9FHgESK3mW1Do7mEj7JP3PWWG7Ha7hMF4FiHfFTgKT23rCitmgpRV7wWm8yD83KPYGCKHqyGvMnmpL8xiosc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S9H4wCN2wjHPZ1UosSF1NPRiybZRB8e6rERRyVWiZzD1XFWeWVKwbhcS3pPpvTJe7WmngDCJGWaJwQMMNEkSZid",
  "key1": "5xXfnxiYekjsVxqGo1g6mmSikcEuRtRaj5pQ3mHbuV8nP6t5NsUY5UHDo5L63tw1YaQEtbV7e1ULjoSAFHbkxqTn",
  "key2": "2KX8LDT9JvgeZ1PAg62vmot2io7LfB1tXqw7FTheYNsXvVxeVdBoBr9decTogdh33NAUpNpXVC3pRgVB2CCLdxmR",
  "key3": "4JyP6CDii4S4xMpDteKRCiX8eBPaEEE8M5Z7By78tNbPCgmKHJ4DdztYUrBDjrsmZieGWikmgD27yYDA88JLg3j",
  "key4": "5FuWJ6Q3dFWKoL5C6qhFwBhDSUMtFvehfxHqM1Z9QKWASqNt9Q9bU7mgAnFP2FgBKQzSRxDKCqLT8BWx64VHYTXx",
  "key5": "N2jvgAKPo8UmwdoCDzCZZaUDT17hqUiHmgW7ko3uvJwiRZAKNHmWhChB4Efaq4nSwHs5dPTVNnTggTNCWBWxjoN",
  "key6": "3mGHHGLtjNtMQFViENxfeWKqdgZ7uiFKq8J9dPGwWqrC9frZSJRU9abPuckMupmDr8t5WAtckXBJay2epodhAFmN",
  "key7": "489V9mCCx35pP63N2D9T8LuFs1vLMRytWENkUu5qoHivircJvjepUcBk6nmRhPyiUrR79u8zorofYhZSFDVFCXVA",
  "key8": "5g1BHbaXRGdPFMwDaFTuAoBgwqkhdgkrfwfZeDmiJNu9X4gAzeuJ2TBPqop5LtANkuHpRBXe5EDfadGK6C56rFRK",
  "key9": "3TmT1krjfLpfzKrA6a1TABbj2vq6Zb5GHzPJDY5JVtncfqPcrh74yt81qvimDV3KarnsWTqSbzvUWy36ys9QYb6W",
  "key10": "3D9HyH8NmovpcuR4TvGbLTT5nYsnpzoJ9DRuSsChXTnurmKeegnHDBpcstnjeTJj5z4aPF1SxE1pV8qWDh4ibNDi",
  "key11": "2CQneJfw4Z9NTDEupNpLV5NtaCzQjwVGctQDo8XzGatdj6nU6kNGRFuYfw51R4xKXYMFXNzF9FAPxteSf9kBhkWD",
  "key12": "2XTR3hmvgp7xLxyx6rKVasn2g5zhgteKjcsV6JSqrkPeQh7jcSEkwuq6HgofXTFsy6tFVASWpk2EQr44c3cxoaHq",
  "key13": "5xUoU89mz7DUcjPCM1sCseBWEmALaqNuSaFKaswiawth8JxDSnDSaHtKFDhNVksDHJshcXdViZZnbqChVek1mdKn",
  "key14": "2FsyQEy7rjHBRa3Afm7meYAATix45P2Vn63U6dLvrcyrkkqsMLfj8mM4kMrUdzFicpRzZNqeZhGwzgpi1Sp9RgEY",
  "key15": "2rjFvHpYeXafZxuGNoHZPsPRCeNnjCibW2Q6YaWQpXSRNMod38qjii6z5Hw74x1qGgqJ4s94itFrr35yjHAnx7WC",
  "key16": "3m1cP3DvC17U3roesHRPohxNyz5S8DxCgmpBydoJbQ3oB5V5HQhphb4dkKMDg38zetggwDgrcyBbN5T3t3aVbL1H",
  "key17": "5GoVLW4Qwpxu3cN2GJLBN8cUFBow7EQaVchMJtNHUhF8NvqHVUzZa7ZQec6cMxs1YXX4jGSdXRFFYnNveuxTNHAt",
  "key18": "PXhDFhL6dkBk7nLENb7wmRk527YsHBjRuDGkgW2wKBLLjXL42V91G9Uk8AMdb8U1B5QEXrwo8pyizvgfoDxxMUP",
  "key19": "2KtRZJDM2K2oiJjXZg12ociHy8zfHDGxTqZzm3xwP9LJeT9huRnyuFREGRRjtySxU1mT6h1oe4YQ5V2r3DHyT7f8",
  "key20": "2DEYn5xVVRpVMxgnhjyKYiTEn1QMgPjF1hnQRboAVaUamB2UGgjHBKd2pNgv8PB4yhqFTiqfNKA274verxQa8uK1",
  "key21": "4dPgS3TPM3nmVqUyyrUktybfDoVjSbQcMAgD4UGvvH7w2C7L4JoXq2NwJa2SaAXiUYkfVBpW9vEwoq5nnUUCQ3Wb",
  "key22": "4oRPbC5378QerYhR5yGC3kJQRw6GxWHZ7ow9BEKXAJnBMXPN5YrheqZzmHDm1FfEzxVGp3xVrBC7wffofEBBvJU9",
  "key23": "3SfBirte6zLbxFRJUomYaJfAiUdFeiLn5qCbmQxSqrpE9yWT627Qondy7SXExU2sQtScQfxPKtBdCaR18jNQupCM",
  "key24": "X9oH9nZ4dMzsMtumGF54mVhjw7Eo1X38P7xAnJS5HpBVuqZhyLh6n2vgynVyQgDQcAxFdUJpEhJ9CBwcJQWHBxo",
  "key25": "4kxKBPcHF6JEh2njNnZ93SAfkdLUAP8rMF5zjpbbFgu73e6Hkh4PYjos2fzfJnAYcpMR7UsE5XZYfxefvZWqyBtw",
  "key26": "41nLkTu4r5E7uL6K58Dz1FMqQ62jNjaX6776qYoqdhStvW7qqZixe8JupE7NpJbAwoYz2VFpNm34aTqSr8haJPQQ",
  "key27": "FFWhSeazi1Q6nQ8r4cuZktj5iZFcEEVQu1LB3vesaGqWKYck19reQWSEmpQCngUyhJjJXZSjr8zqXGoMKMsb1Xc",
  "key28": "38EhEjbUSovEMT31KqqoSuZRcVCseLqKxNC9CkAvTDARfEQiPgra7T2UrGyzwEu6nVZpwwHwPRtqqGcrT9Zr8nVM",
  "key29": "5hibFky216LMjMVjn3S7pXD4mutSLGgXWZTryQ56LLfYQUxk3ADBPMq12oVGXmb34acviiDMJinFFQ7fUdKX3E8j",
  "key30": "3iWdVvuCJ6CsRZ2Bn1qUR6ZuzSpvVq81BFYH9SHCUKgG6CRFCQSLPHqL9JfNjWqbJZRREYqtUkThmzuZHbNh8ZT1",
  "key31": "3boQ57c1Pv5KWTDA9ZXjCNzC79B6qQj6M7ggE4Wcs7T7P5F1ewiKgqt5TQ8uFdTGqkPuhbrxW6G3HYgsd9F3Do59",
  "key32": "4bYe9e2gunPWKTSdRMArBgfLG5ecNKVA2BoadPtm7Zxyga7yzA2NJGDW8x7WihdemHt8KF3v5q7kYLpZgmdQTA9G",
  "key33": "K2mKvW5p6d3iQdFb9Bm94Dbneux8GMN9KzJ8Qp5BfmiBBprvQTKYb6L3t8d1uFN38yd7gE9tj1yUMWnEMLsHZnS",
  "key34": "2JjLYV3vQLmjAJjvTDDQEz2TvycCA5889JVQ32wi4x7aVWxSLzy4KiyXL5V6TUYqfKpDoy4eRPGNeo7mf1CkQgzy",
  "key35": "4CWiamg3DRu3pqLJcYNXSvXzNsjssk5Gd4dix7J71Yd53WasWJdcCSjgZKs931ag1xs9LscXWFnRHq18aaWSucmM",
  "key36": "5eXe5AFhrSV7viJS68ZVC4zBTuwDwVUrhHyTYChGsHxu3Uk3tFdLcrwJNkmqt1B4ivXs3xfiC6QrVE8cC9zmnfXN",
  "key37": "7gWLvS6BMvs4M2DK6xmLkSdJRu3URjNxWFxcRYkNdgd3n4vQm3uYraVko7cfZju3HszJqN4YhfPxPK8htBoRcLo",
  "key38": "pHC931VMqgjsyP7qCC6hgZA6WTj9bk2Xo2zJdQ6xP2UC8TdYnbPLpa2e7VsZDNsfeseUEp5y1BxbH8N3nPSbbRk",
  "key39": "2puBbX6xnHFXh6hsPwmLnmNa43nxpzXsakKZ6cPnRoNWhUvMijfKfeCyiJABcfxCBtNCyEqhtvShCfhxwEPvLetv",
  "key40": "5Tf3VAQoCSFyDCqD3cEjMRNtro34RyXAvpJRr2EQdeb6MC1pBH5f1Sg5TZVqoYnJYJXuUM5ayLdGaCvKLaU5GqfX",
  "key41": "2tYZ1DhLTSefFJvQs4b6HRdvTiN9UBPKQYEt4fA7qtUs9Pv8FcPceLCjzmbD6ZT1hXuVJEQXZq2Bo8XZ1GmKHRRM",
  "key42": "3EknxxrUj3YkKHw3CujVDuHvqehJF791U85sTuXkCNwN6EvuVKKwyxRs5X1CrxmP2Lt6phnXUKzAWPFYx8TEfquF",
  "key43": "5upnabbiBfjimBpaYHvt4UAzxHzxFSMAHaBjdMUczxTyL6RthF3kUKext5deVSo2QoyX4dTzmfxm1iMnovvr4kVq",
  "key44": "2q4WW46Enf6h6nBv5mRQDsqrkjmn88SvfBHbPsQgyifN4PuXU2zoBTm89a4rSjHfQW3R8CQs9eWuwbriPRN5no35",
  "key45": "3CGZ27qusiusJDJrc3vbHPf8hJpbpt1iqZWWay5aAhbPn1iT8BNtwMXnpLMNBj2ju1T9vFKJhrwJZfYDfERJQJGR",
  "key46": "Mb2pVNbTaN71hfNwJAKZoS5hmXX2Ab3wvZWZ3VHxk72GT93vPT9ByBQo1zQRnFBZ5UupBucxTifPDV9bwUNdPuQ",
  "key47": "2WDDXYTN9WUrrwmfgVQwZQcMBP9QjNQzjEALKDK8z6rJyZA5c49rDyy7EWUNKs7dbr5RNjuokQF6HyszSMqt69v7",
  "key48": "4RYxjq1vfpohdCQocTr5yUaJ11HNZcBuvmtyHFxViB5dhkNohvkJPatarBB649vyQtfn6w1b7XxyC8QSQHEjtWiS"
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
