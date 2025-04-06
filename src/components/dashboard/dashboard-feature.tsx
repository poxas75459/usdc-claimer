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
    "4gKaiyPXM3DvBAsFv8ECrKG81JR75pUDrmQE2W4xBva6mtkMWdDhTWhfuWkQS3tjSxfuXvemLC7voYjUqXVPULDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AMzRiErFBeU3ktuUxgJubbqmFzAqfoz1kJ5HYhrJzNbzJtLwAjyyFqjHperSJg1mAAQ6zMcNCwqZcBw177GZoVv",
  "key1": "3gecN23sJwPzHxG6WCHK4n2yTTDBCDE3qCDe54geeATUNkpopxHzTYGzGxZsxrBjFzHfU6MDxpAhfZ6asfVTZdNB",
  "key2": "4bwMr9FaPsarrFTCPpQHPi3uzW9HU7EkUpF7WpPjgWHncb4cXaruo13i2aAhDt4wY49cHviMM3bd8SjEWD4H2yEm",
  "key3": "ZfFin5NYiQ4NUdZxnaAQTsquVXyGr9s55TGfhNvyZgMGwmqbijiyMHSscBD4yhf2MNoPbDYvdCrPkXcxXPzu8tE",
  "key4": "2ELBhCtcsZsuezv67xaRQ7mBmhKWx3B8Zsp6KnXEFpUWabdBxGAoTyMWA2DiSx9e5U1njb2DbGmUUmFb3GdzsUcM",
  "key5": "26dwq6iTjKThUDf4thgm4KyWVAZXKLz5hkjYbc7ArSgMVi2KRbQikKStEY2x3ZPkRwar1ForrY8fAJkeampcQAqs",
  "key6": "3uLt3vppW4sy1UBFZwXPuwFEFeCcmoH5rsAhAaL5Bsr8zo2DMotGkx2o3BJSAwgxdN7uLmuaT4LuHZ8gsWpzQWM2",
  "key7": "2sJ1SvyM4dGPbqDd37uui7q6BUj54sM75cAVg4FvVB847p9RPzx1BDcpFvekEsA5C5GnMZaRnXBD2qhr6k58ac5J",
  "key8": "65WC6Hb7op2j2HAHJWNse7rJF3qFnpTPdxZCmWysHw7ycugydWaNYHwVjmG2nQ9MtHGp8riEGH4D2mTKSsmmfQ14",
  "key9": "5NUz2SWesxEv8KVwHX6uknd7Y2eu8pRB3qzL2bgvkuN3s6gLhvqEZN9Rco8n6q3RgoSubMSZCTJUbjjtTDF4xrUa",
  "key10": "3ZfS8noh3RNZ4o62SSjHYqszdsNHELLcnpZWpP4JEuRLgxZyEpa8hzgVHudAyJ6nnD5uT37rNprTUQQWLe87F8NU",
  "key11": "3CaZQd8ULegSEU5vYdYAmXbwR5AR4GdcCxpXR5dzRAHHYWMTrdFxNxMLPjby3xwmkVJGv5QRq32Kkh9soqGnAd4H",
  "key12": "3t23UxGMtLbvqhuqh32YP2HZL4Pie346FKRybh6tBUxrsCaHSnbQGzsD7WDXMj4mDJbfnWwEMtzFmCiHKpVLRzpF",
  "key13": "3Sf8Njj75vega7yHy8E3ofun49HTaKVX39psP44gdw1t5R5hHy2yC7gsmqUthmdfGJQJVxcLcjYBhfuKTsq5vm7D",
  "key14": "4Y43jvxVG7bWuuxPXQF91aF5Q8SC63EVzpqh9Nbiqi3NvaESK4hgAsDjHiwtDwz5ERm5FCbamv3srjEepbRtKyn8",
  "key15": "2QMR6EPBRuAJ4cwuFtN3WtC7ZBdboiqyPSBYhdnjN6P4VcbXVKxGeEoAduzq23o9Mwy2DZput8h6RHX3gQEVFKSX",
  "key16": "4BCdYXRwHFiMspbXvaz3D2YrhscoHr1JS628idvRUAqpszMx8FtQDSJNwe5YKVCW2hsM39w5S5YYAwg8JbngFDzt",
  "key17": "4QjzeS5VLY9h6kEELS4F7A9JM4NfRG8DHHcLBDegjCQ1VcmJBCKLt8ZurP7xVycczAnA54JiMurVTAnVy2NwGzwz",
  "key18": "3dotwjLAwUg5x2P5UTAw4MaJ9C2gVqocKqDETEfypJVPRiFawCFgbc5MK8R5wULxQv7VfvSEEg3Wc4HBHFbcydQG",
  "key19": "2j97Q3wiwn88RCSwb2CWEZezLMqbPSp8NiDo4J1fPRCAoHoWZPBR36p8a5h3zd8cuo7SXV3H1DKQ6MN99SKb2rDa",
  "key20": "hCJke6nxHizoikbkSTqK1Rest6ibPoNz8VqVMZ9UpaqkpQpRDXkcm5fEnohwBMH6jTNodo1PX9gyR7o7amdJKPJ",
  "key21": "3o5v28yjX1TCp6d4jCkRAZwZ2StDwmoCjZQ3Jw1xHPmZTyZWMTj4L4AP4JLE73D867Gj9i3wrMgPngwFjdTweqhQ",
  "key22": "5LQ5ggV6j7u47n7iKDs7Cu2Za6GwbMUM2isnRfy4zZCJVau5E49cBTSGPDGABisgKKFUmwNWD2F2wAwWXXPdtacz",
  "key23": "2DfjJboYaEY6JJUVJWYC4yMHRij8SiGW4BR98b6HzbUq9Um4Jz5FZwVxicvL1oTBSTB3RtPMWu4kYNFuCkUKWMBo",
  "key24": "4JB9STc4bNjKaexRXJkiR4roLh9p3FcPa4UvwJyfutXkuFg3gxf4spi546D3xzNmhjusApSJZedZ81hUmWGHtE5Z",
  "key25": "2q8QGee5gQUY7bzNHZe1HN5TLXmeqd1x1w8ym65mgoCn9MpSV36vwxbjSJopDAWCAUtY8zErfxfoWXoRtPkRoEof",
  "key26": "2EBGtd3MsXmjumcmRjNn3ubApQvud59XkZmok9tMt2nYhzR2Xng3JqBRcU4KAR85EETgdEnURZh3QJ4u2dAZyD7c",
  "key27": "4tNgRbi63YJRjxyLPzjAv56ge9xWFXV7gAAHpsK1ZZTSUieySpUd5uRjDbsk2bTdd9cCJCT8Wi8NEMavqcxmfBPu",
  "key28": "3BsqRo3qaQoAWbNHX6MGKD6i5YobDCoWvuEZNpxcoP5nsMxg39Ewix7vDPBtkbRW6ox85WLgkeDn4VQeyTLHRY4v",
  "key29": "4PA2ibHiiMKYLVudW3c2n6NKEy5cKiwMhVrHZk32yUUnPYWXHvBTZf4rPYbzqxVxef5Qh7skw7sNUi5BGccbyU73",
  "key30": "2Nw2W8D5cAeivyqWuFG8Y2MHemqfRc3vEkGjxNcHsTqzgpt1DCd4r5C4KTufnrCvaqj5VKWT1AwCeNH6nVCtxgLM",
  "key31": "4LSR2jP7KEwaBGPAbsLbtMF25yDt4SrjSmyTKdSTqCb61Kdtyfk7Je6mfzk7WU9nQZHtr7UDi2bXd23C9e6m6aBu",
  "key32": "48Pn6RPJka9QqPFowMHGTKoNhBX5KxDEm4pHfuaQ4Kh539tnXd8NPRf4smbvcCXRdahKTko5M57nddW4XzooL7nu",
  "key33": "3YWQSy6D7hw9ibPS7wdGzVgWPaTjtJxDYwEpyR4BErRiYpLvwgEYXX7du5u3KGGuQd8tjo5YH7XUNMbbPqdFibDS",
  "key34": "2evZftWSEQ63K3RJ4tkfPmkFnxfQCf9zAC6P4ZFQ32gcaFuTiFYjkQjprGnhAyoYFpSyP35AJ4t6fmAZxjFoBLQR",
  "key35": "25gpoLTeunCD5QQeVvfsk1EY59Z6yBzCVPEtgGjguahYDCaNkf5tbYcRdE1m1rdE8hB3KgXoMMPLtx2hqSABPNXr"
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
