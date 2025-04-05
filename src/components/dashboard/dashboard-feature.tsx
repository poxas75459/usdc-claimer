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
    "2jQi8dsxWG6hYzFyx8KxC3Na8M54AXcRBQVVtF6ok64MAWJWxM6qr16qP27o9Koh4mNJEqAM93agHvPWANqkKGJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zLL5jgbPu3DMJcyN2pqHkQVhhczxxdNBGho5YP2Q5Pi5arBXrYozZ3r6GQ5KazKm65VkVu9Mj8xUpUuq2swnjd1",
  "key1": "5q21eUwzTBnRB8TDgjUGsQkU9bZzJMeQMErvWRRKN2wKCLZgtjDPy2wAjSCDRhyqDurxk1uYXtTY2vPXyv6XzBM2",
  "key2": "PUKtJSPYQYF77QjaUgN19XZknTV25JZFM84grg7b1AmqRuRtRGJnePxWSqJEXW7jYjqpVHEGXLSe3JMKKfT6GCf",
  "key3": "q2S3xdsLr6cY1QgwQbEyp1ogFHL1cyAdXTPwWYSXZLDQpbumSAh6C8mzCLhKaFZCwMYcksXEe9RSrSTMG8L2DNm",
  "key4": "oKFjeB8zzgufegZQECUEkmy65Hc5iSyCKhA6YFjWk3NVKqzkRdUtJT8oKBEKK1G1jsfF8yJ3JszbU79v3HBPHaL",
  "key5": "sDK9acRjo1WcmN2iEMuZQyD2ikHh7UU1QcjGd9Uqq3dJnBkhuCYTqJJgutddJaJx46BNVArQigg4vKrvBq1foh1",
  "key6": "5w2uVfXdHpXhiZKwK99wCMuXjYVpy8391ZLz2H4WJXp3nWQRG73BmUSVg6UYfgK7R4kBUNweimrbGfGV6s8GNfcg",
  "key7": "5ykYuD8WFTuE6MhFM1HKCcNLJs7Ybav3yrPaKYrYdQyz4K1bQcQ6YffTgG6j3v7HDFUAzM7E7Y9KomM16rWmrCjY",
  "key8": "RP9bxKsWHjvZTAAUgomZ54ikarXf1StyDwd9bJ3RLU7aozQQv2A1gTxGsrJxfZMErYcajnJwak6fFxd6FoyHPzz",
  "key9": "2t3LukNXd2nsmdyH6WHX5eTHpUSuoT2XkMdAg5q8XaVmVED4ePbVAhcwKQrJXLxgZ1HdTyZpPrvfYXazUBn1igou",
  "key10": "3cQ46eXbe19qRZSDwYhqWdHMFAD5zq9cwgEVtTKCvL1c1UTUX1jYoaPgRt9GJUzL3TxBfVUe1N2NEVzRw3jsvVLH",
  "key11": "5VxBs5RiDZw8bN43gC75Lfh4AcXby8Y28XFRT1aWNSha8jsXpaT9FpNWsRdCQbT8PVLtYHeSg1FdsxZpXkbu31eB",
  "key12": "LgxDj3HqfumsuZzyhnUbLXNQM2ATJBBbeo6DXkUjk5DrpHoAhTDukUnfti1akfq5GT6cCvdsKF6oxdUZWZrxK68",
  "key13": "2cippLxmggawbKoHqx8y9tKrF2P2oTjKGUtoZhQ8sxiFg86BVRJADnjQ8eQfkXFxETMGPgTSHdfTQ16NZkeecGVb",
  "key14": "5rNLTyUpDPMjsTutdGKEn8x1kPAyr5VxNKD5FyXxMVEi1qHTRCDbqhm8AQMkFfEbSJHFzPbfu4NfaANuAj748dzC",
  "key15": "3WQexQ9PdCdcH2AVe6NUusADMhEp3oqfxmYxX26gnYsmU2qEUtvLUGtNfHGNEQZhnnswYzfBEDD9E4QijjwLehFH",
  "key16": "NgYmCbuH26XDfp5WdFkfCtZQLn3oWMF15QLc6wpA1jnafSqiFJoFj8fDWVG5xTcnSU44JH4TZuzX6bpUTttojiP",
  "key17": "2cY6aPWG8VjHdYBmqvmopk7GwquFnoNFUB5hNrDCEUAyTD3PL9MVjFa5uLWXNEFUKRdweVcNvABp89z8DoZQthug",
  "key18": "4PSd7ra7F3sacNoz3hLA1YH2Ck4YmoTowVgHzQCb9AJ8Za2Tk5mcMaxH93oGiDaN2aX5SENam2w3vnVD7LDXgAqz",
  "key19": "3TMp2Xbpi1YgS65cJKy7oeN8eFx9psudE42caEjjSWdx9KY9NCmmjWWuM8k1aoWwYzdJjd5Dkqo897BtRTfsZfob",
  "key20": "2qLiSW8Xt7QXC37j8SSNEPRqJ8ihA7WZfaYtfC8bXh6k5LDZeBNBTaVn1boYxceQLp2yHdgLHtLMeXVnWDLzFW7p",
  "key21": "4QR3v6bzymUoWP2jYcurx9n177jZ8vohUM1L1K5FZVsZbMdZybyNcWQW36Bbt2KcbFcDkaYLXBqG9X1vj5CmwqNJ",
  "key22": "WFr3oXtjxKo7MdDXEsDpgLE1jVkbiPDj7ao9TZz6JeZVoiQmai8ciTPwMfsDVuHDL36QqGpf21isnwR1ckZepau",
  "key23": "2V8QNBDV2faG15uzZrW5dUqGETgydgwAH3FtMetHUF9pastGqk2BzMvnPW2WmZyYfZJUXwQY2TDFihoqHt6bZxJW",
  "key24": "2CSFCqBJAh55cUas9i3Pkaj54wqcCfUavXUy86N9mkipE5coBKw56zH63TX4x1zikz5fudPnz3rW3HmAqn87MzpF",
  "key25": "3F1KzF3ymyQ6jY3XMrkRzMFAzQbo1WgqBnhAhBtF7Kz6GR8MhQjqt5fm1FsACHJPoKruzEp8aiDFfV8JzjbwHsUm",
  "key26": "3g24az4simF5yRdhJWZNvGw7nCoGgyyVszC353LGXyRGsvZFYbHbfuHy8Z3FvufPpy4sYjcVEs3BdbznLm2Y5eKu",
  "key27": "zENWzgo9zreLV6gnSfCet1cGr3H1vpFn3rmhR2sevRhEp7ZAHo8cSwZvczW4StfPPFXzCsZBbFvbsXEC5UxbQm6",
  "key28": "38Bb1ybn42hL43RRVVyivQmokReRYa1F2uRDEJ15Vv7yf9nBE1Cw84wMNaETU5a5aGTceuGWdv1fWQ9LXKbGJzr3",
  "key29": "2uLUf8SE9TsU6dmhbYwTGaCzWPT8r6yKAMP35hjxMaLVR3rGXS5wYgTbwFXXNK6WABPH8v9UHviGD4d2ybQccb2T",
  "key30": "3QQaduSxExXGVrM9ABht2B2716d16wCaNLj6rnpn1M8FRKQrgt1A7R36dEqv2vxSUMrkRL1Pi8TvZMrKBSUt9fjj",
  "key31": "4J82CGvPtTC92xP9T63inxjR9CwSj26tYhriEXvcz5ykCjaiUNEMyRjBvym9zRt12sqMfD3eYEd2taRnragvKt9t"
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
