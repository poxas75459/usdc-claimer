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
    "Bht2CHDE8zkj9qzfYKowp8vfJdQJKAmrk4ziRLHQxAyXuMsedCoNXJWzC9sodq3LVUrcCc9eQk8XXqwYugeMSN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dTbXcnhjsJrRrHQR79171cScSBdA2MRM1EMLqD9pcwEx9DSXLWKpqUvpMfMFnmFWViokNdabzctEfpc1EMJhodb",
  "key1": "kF7W6oPXCPrTyCfc74Tvr5Qs6CbQpN1cYFYbf5hxmksPFVFE7Ek8T1f4qPJEpUhkLuhE5W4J7DmLTSB8aEn8s6a",
  "key2": "4qxV3w2D2biT2SNaDLRu63Wcy1RYAAL7yu6Evt42EzpE5V8Zn7cpnEsxcFpVcRKLzYHqJwK21FbXgPhwcF5Qriv3",
  "key3": "pGam7R5GSBs817q3RkqicLBfUbVjf2gVegwb2Zc2qUdtrN33gaieQPMEi3J48WVaHfpNmJqy8rHDFC2EotZPa9P",
  "key4": "2WGePy6FHjYwkzzUdxWJZWeskWRxQecXQMmSdiQ5YxeXUg3C22v7nF9fRB67rtkuWbnsFakoF4GUTn5t38fLpV9p",
  "key5": "U5Mqw2vR3gGYiPcEBhFCQMEYavahCfnTkKEbxB3pSEawGaFxZhHTfrBW5bTsfZgFUfK5ZKVnXzia4ifjowmGCQH",
  "key6": "4DLe8egjP8eoY4pYqmCmqCcrbMrB5vjbyCtFCXzQNzjAjfzUZjx23PDBUWs3EDSxBDyoZENHLUi9Yc8H5679PwTz",
  "key7": "4ysXzrFncF5oNuz3NbmT3MuoLqGkaTrhtJX69Xgy9JNdz11FkMcnb1ogfSCurTk912pyjJDVTV4HSsT7x3q8dRQu",
  "key8": "4LWb66iQAyW54kTA2MRLJ8LDbHRkwkNEYouAqFKUypjQApQaqy3eHBLvrED4pPuuZfNRhfBMRrpRv99HVAymrmQR",
  "key9": "3G422xcfS8NDu7ZUsRNSMzbHDSp3wmmKhHuoK9gmMjncsedfjeuQmC7JC1ffyC1LDPxt2578XsGym56bHmWNLa1n",
  "key10": "3SkNLLqde1AjTdkadQFQ7vU5nWA65Ty4uGY1sCSmpJHjw8ZVXKcfwEL4QWDk7UncvFbLuchD6Eo8mgFr7T7ngBjC",
  "key11": "4cdTPBGrn9TxXTm9adgA6VNYXTq61QJkv9kEV6DHPcCnNxMtkbCqYjwcxjV38YENqTaqaRhFCb1VwtoLmMMsjzJ2",
  "key12": "4heL39JNXwtxP3mVz4vSz4UK3NGGMtbCagpmpSSPktxZWg7EsGXwqjHiwh2dvKe7Jr45t6RwfR34XeHs7T72MGZC",
  "key13": "34cWpM3xcaKov5D5aF8KwYwUkeuiFAtY7f7xCp1GBFbU2EALSu84Gx8ieYd6MiCFHPrf7ce1LC8dctCZ3adnc22X",
  "key14": "5vgkfkxF3BzAsbk6NNtYszDwLX8UKTA952fHKVaD6kEKTaBbWYoP5FUE6TgUzZRp9fWQADuCRiTdTBkGoHVL3pnS",
  "key15": "2Q7r5fJAVt1nfuUboCj4eDyBGLY9yWEaWoqx8bQicitm7vsBVM8HBfDhgqsxxGXkDdTr2DzxbB8L7Qyd9sWGTRTP",
  "key16": "2EJu3vcGizmdUmY4CvWghRKtHmE1PzxnjapJqqxCq7HdxjDCQD9CZ3RwGLRzbENwrYrZdc1jYYnFABaC3HXw8o4d",
  "key17": "4VRY3aPwXZSGajUbwsgniPuH8pAHryj5Xmc9J6q8UT8utJbdyHMdAaTQsUidS8sgAh6SwkN4eTf73D1cVqLdzJqd",
  "key18": "My639hej7Ljp3AiAzvBKr2q5zy9EHfnbDD7kcCBxg7n1NsyBr2fkwm4GP2jMt5wdDRNeykPA2zXbfE2ZiWyNhwP",
  "key19": "W7jjeh8FFRZCU7VDGdgdAc9T1w84mWsafh1pNnyKvGti3vb1nJw5oTM9DboW9CcTgR3t46G6Eop2HmiFTj6AzRq",
  "key20": "5k55y24iPrToicELb7ToKgah7g3sgeWZV7qFydFSBXdV2VAJLchhJWz1eP92VEZp2DtmGX11NgWEj8dvq6H8aNwi",
  "key21": "5x11DtYPncSF6e4dUCnWJvCARbB27X65mVnoPzjMfBm128jqQsUBKtdavgXT5YnhnyaRc8cTD5cGUBJLsiDn1Yva",
  "key22": "5Z5vrA8m3gpynBdRs9ESqxTv52aaHyZmGKNF8yzKTXLiARBnMcTTwDzGNvigqLmjJF39oSubtWkDwboxabDkyANs",
  "key23": "5rn1XP1cH98gV7FvUBpBGhMKXtRENbtTQZy8bEkLh12wMwWZxVBvuoi5qtbV5YrsXFvBH3xz6U4KzXzd72oDE5nH",
  "key24": "6rynoFrmwN9w2Z6i5BjpeYoYUBiQpN83ndJZTm4hunsmt5Gm3bYNWTYR8TKjBrmjnM5tsyw3MULiFbGmPuh4xUK",
  "key25": "3UZcVKZX5DuPNiNMzsA2ihSC24ifFFETaE8ZReCQDqR15Vr5hKQdLKz6T7PU7NtpFXmxshgY27dBFmKRPjd5PDpz",
  "key26": "4F8MRe3s5d8ohLyUb3QLK1EGQ3mQnhw8MvKAu4TrxhtN1AhcbhibFWHxuDz1EDDJfvGFLGLNcfW2QiAHBWbKJMkS",
  "key27": "3YHXqqmzLPDyeYKXgLxAfq9xPzRpEdhr62eqwLPgkjgQ67EF92Z9gMim32dXYSd1yYJoyQ3ixWkx5ppRpPRcrr8F",
  "key28": "NgZcuiV7MFSddNKtsPWXyeoyri1ZcskgefBxoQqre5fRf1DmdXqQFnQDy2FVpnV3j3QTRsTyjAUbm4DoJ9yqiHg",
  "key29": "5T9DouE9tr9Z454fHbD9HAJekHHq6VASAppTxZwayauDKkWPhQr9fDe7AUTEpKBuwPNrKzHZhfPikmECzPEXQgbB",
  "key30": "51Rk2rDTF7kMkNwE1SmD34EkKtaNiTfVThKwzy8E3WYuRqDMBqknZoxuJUkHjYXWe5ZNAnpuj8bD6Qbf7urtQAPR",
  "key31": "2YLZ2ihW2UZe3gZmj5H1aQEQbcaYea3szpS7wEPxaTzEQmkP1zRhS1qdGExfDtHqeT1V9h4NhC8kyRaVddD8TgeT",
  "key32": "34ArmYFwJrZU33DLrtXkuUzJcuGGdivHA3ZAkFYwV9LqfNZo1zJzKKKqVGCgHUTmZAsUXmi6QWT1Vcb7eu27uWZM",
  "key33": "2zUNz8DgzwkDrJmaXg9jqumDgovVgjNHuRj9ZBRC7BpkPebZLTGvbfcVJNhnXurinfazjPddRbVPHi3ihr1JWRBz",
  "key34": "4VetRYYsSTRVDGz7fDDoPhuPV5hc962mg3eoU8K7YAJBoBaaFffmdmnNNk57NgUeNue89A3Shc74pKpowg9FyApF",
  "key35": "4oU4vgYjv18vgsbifibfjpHa56LV872e8q85SCSZyzGDyMsu7mT7yGJSsaSQzCnCZ3mRRmtF6gdLQuENjqES7RE8",
  "key36": "37dhChZgek6o7jj4iS8LjyFtvBmWJqw2eRoxDUnwC6oVYrLVR2V5yiGZYyVnsxsQ44hugp4qb5njxdC6ZcfnJpEK"
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
