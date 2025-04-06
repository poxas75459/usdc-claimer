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
    "5yxMuewumNCtS4NPmURWHtCcaEJAzvauYUMrNotc4kfgzmrXSEJQ6mKwkw2TPeuqg32R9V8haVqNZC7m34qQQhxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HPLJFib9aUoCMKdZPysWMFjnUhpSAAoeaGSrL8cspTb6mf5DnvK9qF9iUCkRzmhVgRXRiStR95zeJPQdJ5t53Xu",
  "key1": "3eMWWNEa13mv4n4mA7Cpfu9JmvjrMrLPdMbEUcjFecJLjxvV5gqEz1GU2tteKwJhTRpA3PvH1J1Hhyw1qnzKzPUN",
  "key2": "21zEMfu71dQ1rvbFufPWdRQix8X95GhoArE2f9DWBVn2ZLgAoRhDR2f7wJUwxNPy9YL7uFBUrGwekvtuyHBHvbi5",
  "key3": "3TPnnXh6Mmypz5XdikYsknEAdvaNV7UR77dqkNZscYdvohMmp4E3V3KUkwMUybeSAhpRmAWWaBNAiwEZRouP7zn4",
  "key4": "3ZNiSSPRDCbUEczSBfyxRmghrSEmKP48whisn1Ewa4rsWRXT9Vo5MF6LE2mA4P34zEeCmFhRCua66gaQBMtbN5wq",
  "key5": "4PFKnCkvfeA686tMw5Hj696HNVFt35CMoG9h4CbX3bH84ZFSo6jxM1m5xNgkF4A6D1ZTU1zM1Jcg79pmRwPVAUD6",
  "key6": "2MzFuH7W5NN8rramTD4X9LAkJFdvqH9LYw1AvH7KrzWNYjHasnHQqdrgqgzybK15EeDeqrLGj9emm7WadZUmSyR6",
  "key7": "5gF4f63GozCFBRVCiw5MSmBzePu7CCHmF2VkXUmGPvMhTNxbZjrSNK92JRKAUm8vH9pVeVAwUExY14nsUMBhs1df",
  "key8": "Gvtp32TqeKH5uAz9S4rsAopUQT6za4uGKXmWYnEypL3HVaTktN9S92fbwfrN3xHgguX7BwMvx6VwdmuqFkRSMwZ",
  "key9": "64FFd24PxbzhbCTKQKKCKEgX7ypHh7nnjf5K8EJFub944wHBLdE91Y16HBTvc4h3PjhddxWectGHyimGRccaSDoF",
  "key10": "33TeJED6tnfc2v5zamx2SUi2Bjhyi49f8Vgcze9V6mfnBbSXDF94b5cz1DyicaJf8GHdSay1yPtoVXBYbBvka4JK",
  "key11": "3TEAnvDV7Tmascj4hNoHRbu9xwzpBJDSPqWpoNfWRUboFYATmmgDE4gvNgDRik1MMbLoNb463vAe7KJ1PeYWMNgk",
  "key12": "2im3sBSRrLtjo4UisuWTLcfgyQoCdEghqF4qSEyKTMWWRkaowrvTnTG5vKxnzwUac684RuPrwBXZwXmzi71B2y4L",
  "key13": "4LuFEL8HM67Lf3SNu2qLzJXotYLDHqJegdXzWU2svEU3NjTA7Rn1wS7Bvv2LkfWj4pvARKjgFaYdQdEBStc4nagB",
  "key14": "65yVe1PKcMEiwvZ3WKgGWR6mNHi3wtR7tjngDwzoR8M5FZFwzWUY6kmHLYDfVpE2mpegnNT6AaQwbimhrr5aEM2Y",
  "key15": "tz8qVFGvjWx2b99EogyghQ55gSDQFfGeEiGtXT5YHqXiLCMvcyCGbuzhesK3uMrdns4wz3QApjN7D44Df7kBfWb",
  "key16": "5qpdopZhmGpEqxYRjrYBvMgpW2DCVjnn6qDDRMff4BSEWNya3iPXA2A1z2F8uECpSvUyprVK7UvkKdMNQgRbv2vg",
  "key17": "2SHQaBkn1acnPHjzN45xaNxDh71yhhHfZTgxmZ8UTYwxwkpRK148aG7aFJoddWUmw7GmrK9kArbkaFPHAh2zSMvg",
  "key18": "4NJ3eYNvZbvLwSjQJmpCi5MbtPt2c2XhGvZsnRM6n2k5xKKcjR87R9G3eo8jNQrBaDgQgWnPBemfyGaPLPkoupmy",
  "key19": "2Lov2TqS5zukgVRCRuU59NLtNhssbVgbt5tQwxuQgMwSTaJQ7v2aJeesBW8o1WKgFk6htm24dGeEeARVRbRM8CQN",
  "key20": "5B7iDTu9MdW2PL4YbbB5d5iVaQTxW8sZQWjeLQdqRYXhi4j87ELTsPvHnKog4hRaBaY92sPoJDwm2UMBKz8kpR3Q",
  "key21": "5YgymkcgFZsMnZw1DML7WJuqsJvv8kWjsYyGbFibfcPg4sJdVBfC1BaxeCDbe3TmGFskjsMgGVTPWWZPbzf7W9fH",
  "key22": "2VhkysVG4YLe1qKCdm1eNuLfNhyrm8qe2KnwXUMPGNbftGY4AuoXbBopHoVEfJVYAmpVyAF4J8o7rrQCKNAkGXHZ",
  "key23": "2dFPBnmtuqdhBcaFB4GpZvbdUghZFGmDjWJc3K2at2VryaYECbzUCmUZNkMakJ2ynrSnyVhyfiPGRZPfx81pYEtc",
  "key24": "4MX3LAQ9ZqQziPA6Drjj5hUadU7oDrXrdPY88WWvhQsdR72P91ft45L8vqKv4MKbD67zJkWCbFfnWW9mMUyT2kYm",
  "key25": "2Lj4rZaHYVpwkb2cxKTttfMZb4WxNe3f8KtjNF3SJ1ys1rMGmTSgN6ZWpiErCd1qJ1oWZcMAkyMbX3xer27c8Y5N",
  "key26": "21pdLWu34ff7L9X36gYRJ5J4FZG4TZEu3cwJmDebsGxCpFkBTXouR3FgaTk8ki6TCMd6uFcTE14Uh4gMp31wcXzY",
  "key27": "4YjvWZjEHBZzygXzha4G5YgbL9YaFBuwi5Kj36CN2s7dZHgjSngdvBrJTTfkuhL9qRs4YwARPu22q6uEFgJvc1uZ",
  "key28": "ETiybuyQ2dqGMEkw9wXBmuLmtbamCYouhtYjT5XyPKPgbddYhbMUAtBaVmBT79oCToQeh9h2U7wpbyewPGnbffS",
  "key29": "5uAGkwf7buNVxerw2qAqec7Ejq5zn3VciyPj5LRGfX98NQdShTb2tZti22WiEJnMzh4ywmD3ZsF9LvgXqaSZzSFr",
  "key30": "4ukwMwhLNVRaHn9WAqBveBNbUxJSmndbLGgaBkYY8E1g4H11SPd49GjnGs6EBHsN1KFoHE6791WGsK22WUVkbDc3",
  "key31": "28jtrZeSyAtnyDdicZw3xitKZzeVCwdMSKAbVQveDJAaJTEnwv2dU77H27XYLJ3XEGtpJNtX8TMrWkfn2st7DfFf",
  "key32": "5wWwQhcwVgGkApN3yQjiZzztLfV3yNVa4S1mi9opYMcrhZCBriRbGKsp4DHmYDwGkxai8ZWse8xzcoYvBTnLCafh",
  "key33": "2ed3qPrqhQSg1v6KoXNwWpUACn8WD9ax6TcshiDZ5ps8SmDyVyLvYXQWqoZFSKo6EbDERiNtdUpHQL7uNMot5sNT",
  "key34": "2CmXmhQ5SLFNTsNULxYr9ckKpK137gfERxF4yf8PxsWjQpdsH2x4w8nsMWuX6hub94PRVavNnURWjZDGGoYKfDe",
  "key35": "62wdoCtnb7rdU5MndFJ3aUN7vPAk3Q97npoH4hbSr4Jxk2uccsSXtbDm3JEVJEncqRffhRtsS1R9BnRFTFu7BkRQ",
  "key36": "4apPopmVLqbBUhWxQLvHpELaiWCKEyuwu61bH99toEJZ5kQTBjzgz8FMoB6Xs9Qwwg7yz1eb33ezduuGbLTED7gh",
  "key37": "48TghpQon1YbSZvfqtotVamRgViXVD2mYXV41C7vKvLu4fM93MA9ho1YPHNShxMZjpCruj7MXAErUJ8ieFZMSgxA",
  "key38": "2g1HJr37V1wJpy1AcnUksG4sABoaCpuaVUd25MPxors8mApZhjtr8R3UNCH7jbP9uc2wda6Vi9UMkYqgHmzb9uRM",
  "key39": "3oL8sC6VF1ehVANdQDpPPTgv7NBic3DFmXME7XhYNMQqJSfmvWgQ7Go3FnjhzU9cbNvxkjCQBETvynxoU12qS7vf",
  "key40": "5Ypp4AfWMstN5etxsuRXEBeMQLWqyMSPFFshfeYWjZfG1j9nPkNqUrH5oggeucYNRnJVUz2xmh6vMotgmQinXkfG"
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
