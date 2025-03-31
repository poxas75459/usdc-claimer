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
    "ysH1iMBj398y2KTGqHdYCbKmKTLE7R9jW74ixZiKfzmRPmEGYSgFiPZ2JpTCiqiNzUWc8xNG3iqvkroA18szJMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TLdnignSabX12ayTZ4bYozUjLgJGsrnGjkanYDh7cL4qy6AMkWzwujcmrEsjnTo6tiKDSKqH4k3yLnqSQbMcy5j",
  "key1": "5GSPtM1WWa73qhBTaeehafQ4k6qCEec1YN7MXexhNt98tn9wbuyzV7KWAGxC83sDYX5FsT3cCr46kEHJvCzTbrxy",
  "key2": "3TDD2xskoMzGuFRgJYXJjTwSbHvEHxkgEgEfKWiBKyhqdCGY8FkrxSWVA1pz5oYAW9k9EewwyR61ez2qSSni1L2V",
  "key3": "2jV8Hm4hdvgWmLofWE1wwjyVhACiDFnLPBASTxk6aB1yBvQoPKxZcLj6qzPKv8ikiv5hrjgCKYyN6PiHkBCoPoFm",
  "key4": "26EY4LLR396KqLa981hoesErRK1Jvddy1mXud7LB9f5GP1edKBTsNKgckYB1pQd6PAm7TMTQ6LoCABnB81cHtroA",
  "key5": "3kXgqpfTSBDLn4Qu2VM3Ba9mNZ6RRsAp9H7tqrPW9gt9Yn4ia4GPopxBNjnnkrPfWaERDWdsoZoJce16gXkiJuPe",
  "key6": "2LP3746KEpyy9E8DF8ZFGxTYu7t7DhC68vg2k3kafjZBy4UAQCKV6f1NTNHrUXn78vA5XdR4MrEta4tojMnUdSL",
  "key7": "zTGSYkLt7ypjGC9DEbuqZhKJUWqd6t4t3beGv9GbrSSNvL9Su5JAcSwU3Ji9GKFGxZ3iBRzVBQToh7CXzSzcM4C",
  "key8": "4Hyg428cEBAaY22yTw6efqBGbdu2r5MqxHF2jAwZh14TW2crZxsSSJGxK73ZMwnDmScwTJwJmBuP4xdPY5c2Af3J",
  "key9": "2tohDMzsj1wb7TVAhv8dTUTTT6ZsZMcnfy7wL2bhUjxp919sGFdY9iYkvz8NZ33puyXpFkeGRkfKK4w9F818yuNA",
  "key10": "5zUM3BsYxgeCPMG9zYDmjD1sK4ojdQzG3J7V8tKrrwYDbiAHtsoH3ApQu7v2hUrkUijWD5DwZdRk8MC2gbsHXdzw",
  "key11": "62vs8B57aRcf9JNu5C2yaT5rBfa87zUqPFnpYtMRGSsw15ZgGpnSU1C1SkkX3JuzsZYjExv47e476YXbBjdipcTu",
  "key12": "5TWDhnGVwa6T3jm6VQ7LujCbq8U75bDFcJQpJk7KZMb2Hj5HtqRAYcoKdaeA3SQEGNcXhGNxVwY8XhqPXRRLe88d",
  "key13": "2Kjj6NqKsNXjYm67wPEJXuRAqRBoj21yh2vbPmHwGRcmT3JsZbhqPZUK1EqfNzgf8SH6MamCmQBzXGzRVJGfYDph",
  "key14": "3f8PcuYv8t1ihtCf4Bvwzt8rAK7Z57wkbsCywqdBP9a6Wc2bUVXMiYrbhPdbCMyiQEE1vNKMhNaJvBfeCUSTnNRD",
  "key15": "5hMNyRcuDiWzi5fg3wRREy2YNi3nHUWRnWvBNYKsrBPxvHAnCif3QDUeHNADZ8mN8j43nUgAakytaqLtL8LkKoYG",
  "key16": "3q9txoayp2wZRJskgKjaFnLL6Pjd6Ry6iSAMz1yiRW2DfvzTnsgyX5Yh353Er1FZKhhyV7N3ehaLnoQUY2TRN7oA",
  "key17": "2D3jnFXS6iDptbT8QU9fn3Vx3sHzQLbiiJ9vq77RHY3YBJ9DTJN7jsfDxTE9BMBoG2nNkwCUzs6Z6jYVpD7nVrs5",
  "key18": "3saYZiAHLJxjPMdkSWc9uhUr36aMeuDv4wjWxGwnmHsi8rRSoQ68dD657ptwDBFKzLMVYFyJQEyjajFqdPzgmKQR",
  "key19": "2kdY88TJ98U5e1pbbEHESFXYbeuxGwBaDB1ZiJLqCA9YmrCvEUQMEd5JPcNRgnKwqVR1VJUbxQyKQ6zCMETWteNH",
  "key20": "CreDPdvszWndMEN3LEDRHWxAUb3u9q2STgmzv6pwRgxL8DrVEvWx71GFiM2TQkZYSCsq7Tqi5xNZei1mRYEDGKN",
  "key21": "56zf3pzM6LrL6VmRxmL5vFL2LQaKA49aDqChda6uWnkj5AdqX4BvNdVYzarHCy6bK91PoAvsCbbLL5gW3rJLuuAE",
  "key22": "29uowidBd1URZxbVBxamXUkGGT46EUq2XrPyoVQGKqJtCjPz7D2A55fiwdqtjJWc4Fxezs3gWmGBoU1Dyvq3jCpT",
  "key23": "QDEYWMvKsZ4n5TgDtrVfgggG6Pgf8YwGwhRSDA6skwNABn844nKA9W4HquZaagrJcopyPYdnQYWkZmrEYmHmpUB",
  "key24": "2FZiHEJMGVoUoSvVvRLVLd9jBcq4vUy3ko7jG1mFnEfLsbjMm4m8JkBwaMBdLRUrzHvtShpwStvKeiWMkPkW5ahV",
  "key25": "3da6S2GCq1HLv82qsprqWrjbUTt1PU5rxg5pGVeUbSz8gWNzgqRcCGnGbVM3rW3G8vZ3EXWaUTG3YEGpAQDsq1kc"
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
