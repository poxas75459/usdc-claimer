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
    "3wpF3TVrjehnkniRJBCKDQ4mjPje5eLpjKmuKEepffhxmMTudSPYdpRWsKEVtyFujw7fEw5oPvbQQyLXrWrGT7g3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "saSeAFeqEns5Na27pAE7n9bHjTFZP4CiVJgcN2QWtVtyJnzFfhwhjEeMxZrhEmaiDjssx22rRQLNrAxaWfcTGaN",
  "key1": "Q1MYPJtL9rM4VPMTytZeS4NmuwJXWTmzhr1MpFDBN1DHW2iwPe8oz3W2ggErwyuRNi5CNGs6qQR9EbvnVnkfYtQ",
  "key2": "3QEEuLhax6BN5uv16JfiHZqBrvDRvBMpqEjk5U91W54LQLqMjsf4zXWSSLgnapd8VpHqYKbUp47mBLoS54zZzZ5J",
  "key3": "5dMHceEQbNgM6j95ydwmWSm4LJ1YkizFUmk3JoWoowmxcGwpXD5nfazYLr2rvFbyvAnBDuLwoSJ2S2iiXxfXuef8",
  "key4": "5NmyKkedctKwjHMvktjHru9u47AyeMKmLsy1m6db3JU8pK8YkFazGkzDKBSnM41w1UJKGKwp3T3T3pxrKNwuGgHC",
  "key5": "3MUt6W78qYeidt1drM87DsN7xpW6nejdBkAqAUxUawbbkXsoUQkZ3YDYuXnC1Mu1FGmkNT76EAbigAH9UUkubQD6",
  "key6": "2azebg41kMi12GGkSSYdT31NnYMNKFYzWYxhqgxpGYgt7tFY4r1JZbMpFJd5dDocgiQLsxzfkvkfsWwxaN8tnuag",
  "key7": "5WGY7acuA8EVsnLzycEnZ9M6ozWctsmQqpyNo5icXmJwYoZm7wxQCi6KqcKrwuRBAdX4xy5LJj1FrUiSeNSvdp8Z",
  "key8": "2bLnGzrxzsk79qVauwwQDnTKLtfs2p4z72Ta4oh2X56w176nVNKaxKNULwWxEt3xxeL5t5CabHNWaKPs3sTBz91N",
  "key9": "28dgdhTH7NjT61jsr9P7RATcDs4wG5cX9dCCeoJHityPNGYgZ7dC3N2C1W7EzYcj3bsyxYKmfSfjpFEoHsQSzz66",
  "key10": "67jrcc3kDyNGBMny3apMgVb9xc1a2DrK4JJcEgxXpKezNtLZNF5HJQFbtECtV5DhnZxPb77h3BW5HWR4c18m4ecR",
  "key11": "5JiWb8ia4x3ichbdXBQ74KxfJpjcBzkhFwwekMD6SPHQiqMHJk4NW9MRSHoy8pj9r9iKMXRex8Jg3WjBjWQwXqie",
  "key12": "5m2JH7JzdPzG3L7r9BgTcaKnogLksF15jLYuybYS5rMWitoJnTqgP4JSy5C9PJ5rQP8ZoVk9C6ADUPbv6eiQM9C5",
  "key13": "3taQRWiwqM5Zpf9BhB7esAZfzGkUZqNMzoWdUEk5mUEdoVErHSjrtoj1Gn25LoEYBsQMDCnSEn4kQnUwP5svVFpi",
  "key14": "2R7bWnwSxXicQpy7TpVrDMbHKmcs5wbuquRzA9rwN3Gqgw31ubnpLZ33a2prqvHgvtvvZW4WFHJdpGDXM4Zbkrbv",
  "key15": "57shD3HTWx5PgPJWavqbocN68NVZeL5G9M3XzzD8sBBFpo937m3pE7EvmivLsbBmmAshgRWbFAZb79SNgfrbETx",
  "key16": "23AKg4cwpD4WM4CWmYk6o4JSjp5W3U9JrQ4nqzn9T2cyiJJDV5X7XSnAwSFEHGNTyYACZ8EkWeRjei36Vg5MAtwQ",
  "key17": "2s1v1FeK9KRk8QrYr5dDH5ioirKfTU8mHjR8NRbvufmb5AAbzU2M2nJ3R2uHnKT7DWwWMyGMtN1LytaGAwSg8n8H",
  "key18": "2XyAA1kZrQHrw5KFYieaaBU17vCmJCwApP2WJMTFw3jb11H9cbEENFKM31BjTWDiEAfvwCiJVPv2APzdhNZUsYov",
  "key19": "3wu9FKiR8A6xh9MVEifn4VvP5JAtbXxQWPAFZZJxwN26n4JEqCnnXax2YQFqii5cCHRpCyCs54DbcmZ7LvdTPPKF",
  "key20": "3WFSQ71d56qFA4ud2rMrwtMTkRDmuumqeuHc5XJ25NPMznexJuqZom5jHmyemBcYUKxpUkqCPtqKanHzZtLRLv84",
  "key21": "74dvYcoqLP5zHC7KpVG3UE4XA6keFCTfBqijKottX2Wd9izqAZLDFtWvtqEys2MYo98XgtsYJWrMbNXFEnECHF6",
  "key22": "33TUZf4WZ7ZTbogGkUgFKLgSyKCWPdafTRSTnzJC1XoTHxPQmbcVUPvLVpNhUZV9qxRPs1j4CSGiTcwz92DVoeHc",
  "key23": "TRykHLe1x6LTSWpfaL6oLpx4cqPzGupBabioFb1tswtkjNe2gwdxtk2EsW6YSnt6z2hACZtrFvk63jNp5kgx2Vh",
  "key24": "VTNCimCKM3X33q3P5XkspFvXHfcSemcpmQ9jMvLbvD2EMYkG2SpJSsiZjNGHCUqNmvjAVYbT7iiqTKXoRzqUdKx"
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
