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
    "4FdYbuXJ4zki5mp5WRiCWtGQBxT21KZXbv9YxAMBbnGy4NNLadRMUfcLqazkDUfq5NX9tsbUkyMpFZfPibPHUA57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "577Dnt5PVDm26Y5vM8ifp1FnemHFHT7ZLMaptxn66MLtd5jrucFfNh8kcjaTy8uwo5xhQmoN8n44xKpWfNeHwPL7",
  "key1": "wKxebEY53Y2Tkv9XX91fRzexz4CZGsQHBM7F9fzRH92RtFWtSCM7hEWjrKsUJufGhWC3JEhfLr4f4ZCMTnMYERz",
  "key2": "4s2CPAc9z46ZVy17X3dp5xPYDNZmJeUVa7ambjDkv2HHrfjqw1J6rDPsAysXd2wRsZUAwwqwQo34HcaC1xP9xzQJ",
  "key3": "Z7ZJGe6Euwi5AzLkguKaAj6LiXHcJKposWqUYmXK4PkeX8UFYnZqjaLxsVXZ2t2ZAbkJe7dPQuYfCA1NxjkXEsk",
  "key4": "4rCLHRd9VNX5yM1RieFuHtEafQJdS1onBgZrzPN4C6nXco4oNAiMazD91H46Z7twUxyfHKjBFWbnfWH4zqTFHQg3",
  "key5": "3X64ZAnU5NYaHwC7dXTBnjg3hNYNwkiXmoKPq7PK4cJMxRGgQpRmjCfjJV6tRPPtsh6qmXXVWaoVwJDwohL9GzsN",
  "key6": "2jiJNyVGxXjmBtCcSq3ytQTVtpGgfv22G5Q5jS9FgLXsz6RYWzdcw6eLMpzA7F7RahjJN7T7eJfzaUDtSzGh4iEF",
  "key7": "2JBtipkFYXwGHEhsLy9oamKQiBRu5LNURQMhUBpBmv3DRETDwFvcZJZWMwwdYm4zNgMErwVvW9UVPQNYqmdJGK9n",
  "key8": "2DFnrQtax998nS8FUsqdDAuC9dCCMWL4iRmzau46QS3597br6iY3ngpUw5ud2X3jmrjfQDUfVvBMTW99ydukHrhJ",
  "key9": "2C12ZHFXqGfSLdcZn2XSyfo2BBFf6K28SPLmxbJmohZNoBKDjsZx9QXAZHkBqAr3AFE788727vcFg82wn9ECJEo4",
  "key10": "4VpqmWHRbfGYGuqs4vpWAJwGVn4cHoG4traSopPxjULBJQHoUie4Da1cfJewaQVKVieAobkERTAXR9bYvR96ttDz",
  "key11": "3BfiPK662EaWyUkPBewebZdQj4EG6QpRoxjBM3XbMoPfXHyQzXGNvYGKz4BMz8SVcXvfPAodLmnmbGDq6rqcA7SM",
  "key12": "39ttYx4V2T64nhu8sn6TDpb2tdfUyTeWH1Ybe47bpWPuvy859sQYsjEBfLmGWH3FeiVcGMywhnZLCFHDABqgPMa1",
  "key13": "3HRMcgcEekEQY3FaMSpsSibhfdH1AjiQEVa64meLMMAoEP7bytM3Cd6RhktKKKZSigpJqaTAYYLd2vpa3sCQWLW6",
  "key14": "27pdsQ7ifGkDEdAcBaKP6HbHgB3i7XNr2w8QeFvDQ4m5GkBbdo2HqbMCjiDaBSgx3kPCn1p83Waa6BbEPaSb9eds",
  "key15": "2Sbzqrfr5mWi1Tjao7zCBTZrPXgKSHvtUgrhMr97YemffbDS7ShsYhtfBP1pxAyXLWFBkx9vdJmm3STYCM5gyjjp",
  "key16": "62w7dSbrrbjmFVoEyS3z9xg17scvXDpt9dTGR36EgCtpj4ZR6wqTCBJn4fakPbjLfn4MV54DktYDvUmXrVwGD6Nt",
  "key17": "3eMCHJK72nPPfVShZTqmKJ4hDKcfeBKN9rvSLcWrnY2QVmHz1mhaFyKLCbFAgeoM59CddtXUwmw5pgafGr8G7wu9",
  "key18": "3pffx7PssT4J8p1hiqcUzhu4cfSFZM7XazQcVrLXTTH4aEhWM9fcQ9VqGoMAPaL38D7nBAg14AY2JAMUXLy8KWxd",
  "key19": "3wYaScRnTaxJCoBJhLEk2yDMkqfn2Ga5u9a9pGewByXCGgHaqEWdY5CG4c391q9bwube2SuVm742ejz3vM3ZR3qF",
  "key20": "5uDwJ4pYSDVJxdG7nJik22zLf92PQsrzBMwm2xa7Dt8kxa2fL8z974nEXyfUKHiDWawhovgah547fNRgy2fHLDPU",
  "key21": "52gYgHYn7CHfMCMTDKqQ6xbhDqkCdqQss6udAquBLefFU1CJ6Kq1Vgux2BEEtXkzGdWJVHNAa8SJZF7YzG9oomYd",
  "key22": "RbKCsXFADrgGe1rcHqEbCv2c1TMp6Wyc6oNJ1gzbNa5SjsYDR9cdhxe2smWRkDB1a7Gwo6SsmBok6ywyJwEEt5E",
  "key23": "877wzNbHCD1pJcAuHUpcyo8nUSy1S6GSfybqUzE8nBqzkT8W3qsFgENH5fpemEou2xzyfR5vQRWN1YwxnQDAqEg",
  "key24": "4H1kM5y8BgpjULXJ13C73obf1G9X6zCkSPwEqt6BN8U6EvkAzRy8DH59Cr5bnYMDEBuDA6TiSKepxG6V6AcnYp7r",
  "key25": "3W1MkRmVwuaXJDq5gwBGsKSDyynwon6ed97UCypUeXKAeh6dgtmVSE5zfRQzviPBPnTmNrBN6RPRHPhfbNoAk7so",
  "key26": "4boHaNyZkqtFs9XsJqF1xYE6EZSiK2y8q4CEri5yQTkiczPKwdJAv6fvZtP9YzWdrCTJxRzQLy3wKjDqwxNR2Kg2",
  "key27": "cqwPCUSCp9tvWtMwD3JSDL2sCaRsrnpmrqYM9z8J3KwRvHFpmFAZTdPHs8CuVDgcAoiNCs1YVmzUAbUSMaJftbT",
  "key28": "52HkHB8N4xE3jvahvH3vWxvH6zy7reATijo9D59BkV694gESDvybTmM96mbjDXafeNCg1Cmj6DynjNFjqz1BhB9c",
  "key29": "vMK7Reby3fmUgpK4D4bQRnt8DECbeH3ZEp7ceq9KXorzk3ZHgdZedVtZ9mBH8bc42vgnwBXPynHz9MoD3PdFw71",
  "key30": "5V2PiqBqtdanA24N7rTiCD3zXRon58h3tyM2Bjr9EukhkHex5MsuazU3ukTUfNqJ1rBvXNsSRKwX2WcgAcXGCQkH",
  "key31": "4TaFfoVpSddGC1JDfD83Yd8XDHHzKBaEwXJsWCyRg1aRHrrvUXaXr18g1ygbu49bcPG8cNugfAsnfuiPumYRnVDA",
  "key32": "WxFKb1fcwyvocWqv6pjcmzXphcCGEdcrwST8wSernU1siatGBkXXatbH88VXSgWWiJmtA7PMJhXwGnT9qvZcJrj",
  "key33": "Z8uQHjr3537vr2ZWms3pBQs4Wk2XAN1CVggnjqZbAiWCd3G1pTVX9ZrxKf7oTx18ZhrKALy63e79xbzHYADTKeU",
  "key34": "2b2CP5nsTZWo7NhLgHeH9EL1Tko65z5egzg64hEjkfsyHG3dtiXx8HAyEDJfwPYsq596EmrzEzsCgaBgeJSvP5QL",
  "key35": "3fZduzvUJrTyHFSoYdoHBV5JYnULYLrs9oAFatwQC5uAomKTDkoJbhdEvwNCjGT4rnysZfS8EdJ9njVojo97Jr9s",
  "key36": "53TYaJXeG6mwzL3rsc1SpQt2V3bs3eAQLauBmjZ4KBnjAdjmYTXPmJo6gz6JtL3UnnWWkLNB3cHhxnCQYEBorMjY"
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
