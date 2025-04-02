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
    "5WQ9jsMg4DbNPHvWn7LLXPodCTvzUQrc64LGvr6gywZB3c3Quo2TKbd3jmJ6Hzn2gbrNQmj6EG7sS4P7TLjYK3ZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yCP1yjzLiQwn1W2wWpZYen5DQxBnFYrBYoymz67YzBeTPAgwpShepCcdpo9r5kCdxzyRNaw6SifZjfAuAKRvstV",
  "key1": "51HPU33DaNwFY3QZfCsxEFzaeQMjxNJaix2goSHu5beQThYebgBJ2wDqYorowSgDoyjuBB3n4Q8NcpUCmeMGKDKi",
  "key2": "nsY2Ko353PD3kKMqZU6UumNLhpUxN9fNNuyQPWRT3t8FBoAuTiJoBZq5UQGZdNrkUQKtj3zGXzcR4GH7c8mcTUf",
  "key3": "2niF4vV3StwEwQ84spVAdVcto8GyqX3e4it9n3JXjy57hrgHFUq8u8KWT6LLyHt87jNs4JD1ia2Sg7bYTdH41E7N",
  "key4": "5XjbTW9wpnTaHEn7fnS7hU2kiFtDcCMwtR6dXZr9ctfv35h8isG1eWEqnEmkcm76VVUWPboNLk6Lvsrwkz6fchzv",
  "key5": "3Q5M6fPrDe3fua27CiUbtg7r72D5g6aiPhBXG9oiLRcNyjwPu4tr5SpdMkPM75MPwXRCMu7WLcNZk1pivFbVeAdB",
  "key6": "3AyrHDtK6XRUp3qKGtdGLHm3mGda2r965ESAMMaBKc94xTjAkywjtwJhcfqro439RLgiJdasveAPVTHvh1dvgUfn",
  "key7": "5KWcZyx1dNk5dAvS1Ep8tA9ftcqZWqjar2sNYbo1soX1NTVnhf3hWv3Q42HJQgJBx3TyMWaFuMzcQhsHk5HPC2Bf",
  "key8": "2oyfq2TDukndDpPoR3TUKWDBgncuRvQKAKbScoyvzb8GgHQrmSwLUjmj5MwjGtcpoPWQZAR5aBTSsSs5xogFYgKP",
  "key9": "3oqWh3kJing8uffdM6rURzpATyUZEP1XjEGdw1S4fB7VJuRy4MffL867sTUnEKAwG5p8guJn3n7R6ErANhGiJaEh",
  "key10": "3uUewDoNkiJVwV5771GK4C551CJMbwvqp9k3qAiszkYoj8ziPccKP43b8PXrY74NVCZjVHGvCZrphanMjBxzWR3K",
  "key11": "4zw8977xqnjwvGijbLzSc5rRiofkEoq9RkWsS8MJwUwDy3rroHaspy4cVFwVKpf62YjT5qK6GAoaFm1u5sEJiZhM",
  "key12": "3pcP2ud2tB1EfYpDLsS9sJV1jK3aLy6WmqnM4grVBzfANTxe7FEitZAn14Scph6YyfZWiCNzf8Xhhg4EfS9QpGDr",
  "key13": "45G5Ba9TDzVUQSr5VCs2va3KnPMyV4bDEdRTzEdL2v6V4mob3Hsf289JNGB5DyBKu9XvErScvoZaEpvbD6o99FtG",
  "key14": "3p7Vh3Wff9jh5At5QV7yNYwRAEQ7v7amCwJFoSjk3ZaACupp7W2NFD9wqEnx3Dj5LUBVizVPu5v1cMTgGsQKVgbe",
  "key15": "61ERTFWSrG4sxyLvdMc2yYfUZEyGdBeykrf64W92zt6MtEJ6fs7fzYwSgXNGiokkK3PDzDze1TCy6vpiSeBYtfwf",
  "key16": "38MbqkBNNppTZRQFn2Gqyc97ZjG8Q9bJCbC3Ry7nEP2iPUEkM2tzDa4qSnWdxp5mZv8duVRY6865pSN7rNFu2emE",
  "key17": "5qtt8M8aWg3niQqR35PUzV6qVPUnNqf4WpaqbRaLgyRBqJE2EVLQhR4Wk9vrmHxuep12vZm81EZc41oAXxcFHXvs",
  "key18": "4MtQrXh58Y9iUz6ZqvoW26nCQ9XycVCQn5hGUWoekybL1NxqaqKcRPdrSU7RwSmLdECmzABiab5LfurP4GZ5zLDb",
  "key19": "44RxRSqUPMEGeyuDVAoxy8qeprQnWYBwS2HT8PEYz55jwoSe33BG1p692cWMHVX9omzcE5mpLJUBXE6J3A2T3usw",
  "key20": "4jwRShVv4Vnq6SSsUNL5E8T7jZ9mjJGUv3jATQmBJQxJTP23mwPr8CdAQXgEpcawuLrHkrgdTEmkD368oxdj2oxD",
  "key21": "2SNBJofx5zRLkdRM9GjPB3jPKWBiY3nPkP37SVRx1sqvFwAo1Bv4hPHfbj8YRMZcNy1megdvceNeLWgsvxbEgTtj",
  "key22": "2kqQGYHXmrmvBCQWWnrAV1XNnLrgwBPUCvVBp3GVUBYP8xqjeL9K6Cit6zTNDX7iWozB6UrBUPzXp2sfsxicixao",
  "key23": "3UMWcV9xfR6gTdf2dXwav3cuWp4w9Lkd6KnJt6mGKAy8v98E1rWhD213TKfYt37mqchDq8BGNo8aZaM4ABQPJ8pr",
  "key24": "66jTT5FKA686Uuu5L2BTLHUTE8s2GthC9uHwtT1wfQPMqfxEekngaeE9fvNi5mtHstDvYowkUEJVhQU9JWGaKB94",
  "key25": "eJuDixNQNeG4oDt4DqoDdPnoMZtU5QZaTSSpL32XA46bD8AMWVWygHFAqVtDkZsuJYzwuzXr7NNBjS4vBpfWphB",
  "key26": "21h68n8nFSizYyRW4gmGu8AxFPVwsrQUSej9NV9M56xK36U4t8tRKPm5MKkwXwZiYKVUbjbUqgU9NeL4hXB5okVX",
  "key27": "5Afq68JEnWwL13M4H2VU8suR6D8HNev5vGnhQR6Yxx4LzgGHTDxt5deneBF2vfsSRKVGv42r2MoL72PjW2G6Ku5b"
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
