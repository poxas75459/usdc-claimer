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
    "rk9vFqsR8ML8cEaBb63qR4SWfsbrcBs58gVcq153Zpnh46XZn122hZyhn1mGubv4pXfxdpZJ8updyMnBS8yxCZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aBRv3W3UJhmLLosx6J2WnnVPLspv3Pog4VVTskdij7u2j5vb9FoBEyEWZ54ArqFEf5abzxZZnzyjZm3UXcosR9R",
  "key1": "5dtXzZho9yzjC9bAQYwUCpyHQjdUcWhBkkAsSvCE2EXE1H8mLfid8cH31HcP91t9nX2UXwdg8PtezccZXuTyDrm5",
  "key2": "4yCrRYcQWwVf1fpcjWycAx5DW3wGEp7NbxZEC3U99TtSG9bnGCugpaLN7pfQXYRvHiTG6SQf7gEsXSELKvVCQ8kE",
  "key3": "28fcUWXG4tvnK7qeBA8aoqHqrFJYpR6XeiPMgGaTUiyaEs1n7b3Ti3jqfMk8m641o9UTpv8DJGWJZYj7RGxG8ZA5",
  "key4": "545PEt1XGwfgk5x3zegXszJmbARhmVnewudLS3vsNkPLaY1pYc3mdYHjPFs5GuA1jhrJwBGdvW2MjE3bBzJWKEvA",
  "key5": "TbhmJCpbRjdR47g4W11eWHH3EBioXy5f6Ca387zZFdUBkLNJqjnSdnG7m73feTXCGpcgVHjq1zuJH6zeeuFAipQ",
  "key6": "24tw6T5SGhjEJPBd6ri3rwXWsuF14N3r4EmoZFq6hpFMeSKTV2Q9CRyUiVLocNyzhcJNs7sU3fgvmzmmSh2LimZc",
  "key7": "5hKrqeU2VE6AAuUhzMHGqVkbZvUZtRkLnQ3gPVGQvuttgrXD56BvMg896Ycn63UEJ54EM357KPsfJh6AEiQAC9UA",
  "key8": "3xA8tefwT33PQzS3dXnmfYr1SEfiQWsuNe7NJuk4Nqz6JQQbRf9QiXNXNQ8UpUcGnd7nBcAukCTXb3KGs17t1k5U",
  "key9": "5AFjWakTX1ioFBTTnKrhvV3HBP8Hg4vpLbpy2RG2Kss6k22kedoxhHJpEZQ3P2eCqdobhGvnVJm1KAmznBo6fYDD",
  "key10": "gXaseKnfmkn3o6rNCB7JkTC45zpwGR18oTdvuzpeZNJJGLDe2ZPRKGfXwq6utWa39kPmi1W2fZwbFoggrArbcTj",
  "key11": "W5msFoXa5fJmu7xt4mRVtaTnEAsWFhzAMW1bTcXP9R521Sj1PNLMa8MZk15aSWHS1x2TKqAwhpJBuY6fT2zounV",
  "key12": "3mbmAMKx6PmNNCHRhb3j2C7VqJLN3Mpya7Br2r2k7gaBvYiTq1u1bPr4XHDVhexS9kjg2WvYk2paiEwmo9ivm3Zc",
  "key13": "4SAxTtHXRpkpUJgUD3WaXa2Wtgw5h3cwXK4vPniqh9oiRz2qzRTunqDHjgfVV74LR6THje3FJtNdCLwxLbZp64CP",
  "key14": "5yE1gZ6PuzTvFxbtGUjafhSZzRrYK9C7hjzhdWot1o2a51qAUCGKtexqP5xNaq4MaJ7t9eFiZHVsat7qvGYGze2B",
  "key15": "5EGX2nZPHWcirjn3TtJjkdEb4kqGVCPdxLqLnjLatejT1APUqk48oynhWRZZdiM6vYa83DEo76icQqWsvMbnUZQ4",
  "key16": "5DcPiKbiq1Dgq6DVgUTweaJFsP7JG8dxnV7u875wUoZi84TZgnXnizm1p17CAt5NxknXL7rQBpr1AusRkL4padig",
  "key17": "4Xna4x41XKRanekRDSYzZ3BDnMoDo47dfQHCoceFt4D3UJFDgssTq41W3X83BUc9LoiR6jjYeZbh5mawKVyKSgmT",
  "key18": "4YWTw5suUckSxRCHfiqFKd62ZhhDMoTrmWwN4k4bfawP9WGcsiamPt4dKFMyDzSmPWepnDjMmHX8Aew6gRpB4PLp",
  "key19": "2JUgG7xrffYaSssLVqaR6HQ15MXy74BGVih32ep7dUvp9GoQzJR5ePxNYC5NoqziZbhCYo3ivL6AyedqVRKzvzuy",
  "key20": "36fz8xwBohTwixKh2P86JD2RvLhyWNLRcy31FD6sV4ixPUHEwXUmwpCtNkKgqYcd1vxuckSun9uqNZZsED8tz4F8",
  "key21": "Jwofb4TrxKP4VDQtMiczryR2LriEmfQKuGrHDmbvJSSdR1PhvWeDgentGceSu1pufjL45P6nAxUcuukhr1DRr46",
  "key22": "4TdaHyuSPaZTwrJvubpYBjJXH1swFENUHcEVuSWiDUVsRhPA6651jRQ1NHB8JrF3eiAb87QzG6Ts7Q18HqHH56vf",
  "key23": "5fnAByX4BtG58EXjRWHWhYdL6qmLYoWLE56x2Y6Dc86jzvTWpjYC5699fYWhWqZRQDoMW7CbRc5fHgSFMfGW7TYN",
  "key24": "pqeTqxefrV5jgTRxx56pLiGP76ea432JYBNiEH25AHVCBUdcX3jMNUjti72aTZZAgSoEcE9M4NjbvFM5EVQ45Xc",
  "key25": "5Eg6MRd15Fm3bAgsoHGMRxUHC1ZT2R9GAFos4ba2i9vdnibBTfYC5KNpJ52hRhKLyEYySMjK2LgnRiDVeP8jvqYb",
  "key26": "5numDWyKywLhJDzKfUL7JwMGzqkGUX1BmUYeMJBkNyKcjSWvvssrzFKWgLg36HF9rfvtDxABfundsbtoFhSC9rXb",
  "key27": "4s4mdcKKApRS92LzUjJK6vWMQVvuLXeHcTjGaDBWDXrRVvv17NSyVaUgvK6tCvneaNDUoyo8QTbYKeniJNyEJZfB",
  "key28": "QMWtE28fJb7YFNa1coECvkZeewuxeokLNnLgnZUVbsKXYvuwTA4B7Ubg1WFNNSX3NGd4iqStutpF3fsvjd2T9X4",
  "key29": "4u6suX6MKE1n8Qqh2tjLehS1qRaUdU7sCh684NQgrb2nMsLa9pXMp38ffCE9dcYudiA7mpTUQpPD8prB3afX5pdn",
  "key30": "u3cvEwBCkh5MKYoZdVSc8zJJxnxfaS9RF797SgJ6FYhkdaYhvXRG1sBZ4Knd42jceyKsT6dFRj8NsQNKEdeZje6",
  "key31": "5CLPyH1ARAxPCRiULMwgFqTJ7hznxJGgecPtgcUBYbp89SNAi13WQoZjzKK23HYrtWhoEpBNVS9ZebELBErdmmgi",
  "key32": "3ZYojNYtWSwKDcVdvKPuaaxQD9budcbaVBpHUj6ZxN8usgGyPLSFTNTmH4FpQJUdX2BMucgMhuZPgJMeFxiC8r8Q",
  "key33": "3ED13HbnG2m2YybPxC27TKBLGVvDqugD82sQZfUpksYz9rGpzNWsM6pLsmLA7eEzPFcb6o8N2QVnBQKa7zRwb6x1",
  "key34": "3GJ7wCioc8Wn12RLyHWTLX2nwfmk3jcif4ih4N7uHShmxPRjKmvh8862R2KYbzEW7zPPFJHweXMVA7gkXiu9QA7k",
  "key35": "3nMSgviXJhhTTUaM3sDSzVT95kXDjwiccvXi3esJSUvP1wDBP9zYM1bG5cmud6fWhVoaDMwx9gYbrvNr6WfKK6xD",
  "key36": "5aSxrd52VPpf2KXacmqZs8KmXCKRU5yQNP6fKERFxE2GzaYk7NZFJLgVXA9NV4Mu6TgXMZe4JL4QWCboP7EWa1Jw",
  "key37": "2ieiLXcA2ny8kn3f8xVdCkLEXhV87t6ozeYVVofouK2R1aYV9aA38FxR4Ym62hwYpydLWXHVm6wSKy2SoFQqTxi9",
  "key38": "2rDWQh42StkrmkexD5ogwpJzSSzjog19JC2kiB7tDJwy6sQ5GhBdbxNNsMFuRDJCLhCvxgRt13eJbjyy1j2z2NDN",
  "key39": "9geR6PGwvZQERFRCGyEVhDakwj1tVxCBV6vLkwwevoFMN3hUfdguCjHJRZUwmYi2poLvjRG7YnLcuyivHSb1TCP",
  "key40": "4BTn4wreqoHpGRZamscDy5H9XXCnfDjhtFiqRUJMkZQywRnAjk7vs56S2un3adxktCNn9hXYzPshjJMELgZqCLD1",
  "key41": "28nu1DcmKFFMYe68sqk3hgtUe5kUN93mgdWm3YgeWGH7AiFLUhQNf8PoEvkBByBCQR3kcsFCjjEgmFzq18GiNxwt",
  "key42": "23pEKsB4vWo6NvJiy3p9HHStbd4q8cw8zBT2SDT7h1UcpynCUWeRESfZQxqA6nXDbqNLYks6V2aaGEgFKfpM9vLC",
  "key43": "48CcX8b7UHnRoda8V7KSYvXqnu7dWDbwyQ5zG6yfc9Zw9nT8aJ1XyLgXccqbTwqaJWD6UU59mKdiBc53Z8Baj9Fr",
  "key44": "3gdVMsd3jduZNxRkP1YNZCTBoTdqsy8yQ9whMu4uJG1uHdo7xqq1vXmYbj7JuJ1uUtrXrKDK5ZS2XR9YLp5W2rcf",
  "key45": "61NbBTMi46psukMXYz3jcAUjCt8ZDbcFzrqyj4MFY16VDjdxZ1p9texorjnaJFMC37gxfuVM8U6wAAB6T4Xgr4JZ",
  "key46": "2jVwhETteBvaFUm4xq4WKSCNnrYnhkxWNaMYrQNCXJX8y7CmSWP6Nts1W8g7hc4di5WGQgeQjeKifEyTKCLnYfsp",
  "key47": "5VFFRdEMQeZuPdza9R3frRszqjRYwcmynNzDoGXsKMDwb8JzKKrEUTCfKufhTng32EGy9XkE961eAJj68auvGhzv",
  "key48": "W2iVvC5umz8F6AKNSxEJJDGKPZRUvPRRPE7xvCebhjyzkEjphGgSFcKx1XVXYrvZXoZHMp3Hvm1cSAT9XMtYirS"
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
