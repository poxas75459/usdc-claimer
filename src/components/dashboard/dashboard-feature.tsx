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
    "GAVPXW2PrGe7SYTf5WehHGz2CLf9th8TSCVCQ1ejA2AR62rLX28RSk6FH11acTdg6EMtxkJAX9WyBkX6FV8ZRCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LcNUEs8SMdquQaDhLFXTKCSmC48xEQDKiQGFvv39pk3YXfdaiiMUWyyHvSTMEfU2wq2nby7gPpvGLCXGyvqaeSU",
  "key1": "zFixBeSUhNnSZao5znruhhcQv3KJSph4cMNzruqKftcc9e4hDCNk3VtwxeiMuBfvQwTYor1NEnwpv78G3PakmQj",
  "key2": "5oyNksxviEFer6khn5hHNeaqcneezNqKqjmx1GBAN99Xn8VhfCNufncSoekA9ZyVnLyUffKDaze1NsNMcQdJ3a7Z",
  "key3": "31n3LFwa45dVQLNUfZJ6gpXKZF4SBL43eqjjSHiheWrxhAvhjgsL57t8Q3EH9bxeEjR6eeQSRyGh6PAGUmULPqg9",
  "key4": "4nKTwWGTLi7CRqMToELSjo1VJQGvowriRgRbKuXdsEwsqm5bUUaQTo3FZkJ9pyjziLbZ8tGnino6MFemwTeZEUee",
  "key5": "5ThDUoWXAE9xXG6tUrXbWynVjx112mQ8tmTjVYYQ835akMnDqLFfJjpRYWD4t6YghD4UrcoAXwFP7UZRs9XCfX2A",
  "key6": "4KnpXK5Ur5N5qbxmLotE1KGXgQpbp3RG5aP2KwCCgGenxKM4VwMMZLxNAkVYnEEsj2NugNJMAoFeKPNsCtoCvpW3",
  "key7": "hSgFeKcHrDHgqDmQ6ScL1j2G96a59YJGmrqgaNetTxteMXocXHDFyDHY2rZErqVVQJBp7d46Hy1JTTti6zBvkxH",
  "key8": "CACcE5SP47jMpVpGY2LqmUwdHDphUENAEKgApW435agpCHKniKwUPdtxWt7pB8suVgfpMmAxwixfqgsbnfr9YN1",
  "key9": "3UXUQFMjRSPgWB29LwedkBc7uJ4Dqq2rsA9GSsJhQNTcFmdTA1evxBU9AqG3QGChyZbXdAxCaJ5Vp1eYDvftiFh4",
  "key10": "2SUcLUuxFYb7kqU1L4GbsmHmCgyoKRw78XXUQ98HptzkoE8riLoCd3at8E5cQ6dR9dsxuorynjdvSZYPFVQA3nV6",
  "key11": "2CDcBNkF5Dn6snMAugZQnxBzf4Xzoi4zWCYkFfz4auHweyyHGYFu2Gb8eGVuAwhThCLR9RpLZ6crH1S4Qtd9ij1S",
  "key12": "4moV6SEoq8CDuppTAWknkNcnfPMcHvy1FV9raxcqd6FaTutFT7pveQiEpKFqxYN5VdU3dKkR8iwK4HsUgwsp4DGT",
  "key13": "3BGLm6iZEvgokcvdgE8jj6pMAiPxwysZmXJH2TkH17ZNdGySs6UhGpY8ajjXuuypGodT5RxygNjkui7cTaB7xQzq",
  "key14": "3hz9mVZMdsXgXt7DQyBKAWygPqPZDtwUVdi7KfiGaiXuF9iSaThH2owu8JfTXVpiwnWBvTJmJU3qJaHXaHFt2zs6",
  "key15": "5fgdp4hbva7BE7F8o12BDTHcxSeM9HcXsLyffUFHyC4otg3BR2oidjmPno85NuqyYvpnt92K7xHc4aREAPgHca7B",
  "key16": "4wxV9fNi1Y3DGbQvvhPauro1HZ75HWo4LdZhbUvRe2kmNWhvmanrwG7EPQgB1wC35CrturVtc4uqSFJ2X3kkhCnz",
  "key17": "4cnuBJ1AqXsLeocEiFfkjRZ9rff1fSFYskc3XPutawPCWGAvJJAuZG3ynMacWPjyJpRjdVekPv64PzFCQbP6TfM4",
  "key18": "47oAzPyDcdnfXdGk22KPYtHagnoX8hREP9kZ1P4nGoAD9VQ56LGHrdzCmeghZ3MJ3htgRfRkWGR74eVbrt1CQkvT",
  "key19": "5iNibk2djWw1fYLohVqFAKz4F69vby45mXzTh276hsP9B1a7UAnFXV5B9pAFHy31fXTioSDcdaspdBVqKREgotSF",
  "key20": "4xYyk9od3pjscLnXaajwSXz2XfTQFiw5oueKJsdycBVvCTcQNpkPnG1htCgzKiWdz7gm7JYitj9aBn59nE3DcngW",
  "key21": "2zAtfcEq58Z58wdjHXtHGZta1XgYP8yhZLsfDU4GZQHHr8nRhn9WV2g9tSJEqsG1bAsaZqBLiXG8UpDFtyuR6D9i",
  "key22": "56do7W9pVb8SiBHK55aXYhvtoXdSo5LzS6Tsvn1Ef5EBipWLQ2B7KCAjsoi3QNbbWAZc9e9Lh6QYnmx1p7Ya6Tpc",
  "key23": "4ZCZh6iTWXyB9BX8gYvA6G1CQTSyiwTctP5Pw4g9sjrKcX7cRH1K2eSCKeEm1LSPQGqGVMLVYZygRUscyXEux6FH",
  "key24": "3f5dh1ahSyWrcHzXeV7WLBkFqGwWvHrwAKqfjea4VTFQxP8BVg1YN7sYTwd8DusyrMATznwE9NDM16PF3waLGaLQ",
  "key25": "2knVgcXgqD1gA1sU1qsUYA7zhZrFDonuDRPU43nrojREbGu2TzjXnrnKsdJpe8bre5fQYnmfwJjjMzW4NmQsBfNZ",
  "key26": "3zNVRcg1s1tWWknGKDpGVY1k9Y6adkMpCinBTFvx1nMruitp3ZBTvdyLhD5hMfUztL2QeSfAFmAhGUTrWeDubDpg",
  "key27": "46gpn9LWwC7Sm9pzhL7HEib4dFzMH4VXyR7GX3TEihA8mFd4koi26ASSiFXsDUExG9ep3oWpMrZZhMfC4PY2v7jX",
  "key28": "2DYEzqDSJK14aV55uvZ6qHZhZjPBD6Jha2LdxgDpCfoUnv6QtidRshqhjv4FMrVHHt3fEAjwNbdYyo7HV4uUXQ7g"
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
