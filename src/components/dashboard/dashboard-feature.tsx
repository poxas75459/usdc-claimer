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
    "32G1FJ9emUJT6tSiNShkGHYUoDGjTKa2LLYR9BiSUVHrZNSV5Hp4xnPtKwofL9Y1JXc7Esi5zSSSGiZZh5WxLmbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmwHMSVGeNYb4oyXN4tvxqjbHztP5DhXg9R7WTbdsQaWggPotJ5GriCCKG6rkM1zpQjGs2wmiXozWNrTBzF5jRa",
  "key1": "2q8mCbBmoZN42iCFzMriiCouJj9rDsrSaM3axpANErv35uQdviPaYBBRuTbVi5jaGj9b9RaZLkGDLht3kkEQmqbm",
  "key2": "4u9ntJvxygiERaKA3Pk4sjLc7eBsUgYjFR2iQ1WvdmNiq4vXCsEQhUuMXvcHn9Fj6KUvgzG3Jb7XvZHRLgm3k2vV",
  "key3": "52VfKw3iuHW1WHxDsEULGdVabyCyJHQF1vvTBHeueYdezAYdpCrGd4EQxWxwXiGHLhqYR8Z4UzoexSVb23Bs1sBh",
  "key4": "2LcRXhd3S6Nf89n5VXZGNQ9RowDbhrobzEsGMz6jyjnoS5bKFCjWDH4PLVVe47cvB64iZjv7g7AiqKLm9HpibWSv",
  "key5": "yBMh1M1FRAzeo782qUJAMb1xspe6CeKT16dHU5WKGRrkbZobu8sUewipxTxHtMkknBZ83QNfv4PUmyaNwNog4t2",
  "key6": "49AR441si6R1Dah37MENVkPyuVpug3CnyojzJaJcMyKq8D73Uzwh7AZJ2gsm58wVSJQr2c2fErHKN4JXMVGWZd6u",
  "key7": "2pD1Wp57BRTECgEAEWzp21TTp8XqwimaGEoz9bA6CLP1XsZFpUfT5SiEQKdqkzfSuvp6qhyYGwZjLLuEwaxdDqMd",
  "key8": "5VZwAA9UcLfyrZz8T8etR9F8e1JpDPV4TSJpxSxJ2A6HU6kYiFJFsmocR7B9vF3SQncoNjWTTDuY1BmTyswjGFTN",
  "key9": "P8dwQpn5hbGVCE1cNsWVEjRAGFggr3U7v9Lr8vDGUWZYbcTz4sEvxEv8VhiURvJQ2FKKgRqx4QoGLViSARm8EUh",
  "key10": "3gH3V2ZysHHYMHcWeh2W9yRxwR98jc1fGfmkQUGJxvTDJXy1F6nzmVkPovQREcx5fTcfFfyESjJSEWKUQnRU8Gyo",
  "key11": "22gUoaA6ymMc4Bt5guAgGij93AetneR1qYnHUCntpUQDX4NBDa4Sso6HTgS35RbwjtPm7PgK4b8W3BETDyqJ3XUy",
  "key12": "3aDY3yGEzhGpxqkKSk2kxoP72vT3fj31nP4u9T9qVCzSeQw1DU24YuuLm4zXtE429gzWN8N85CHf27yf7NimdV16",
  "key13": "riHdiJoxRe8fYDMLMMH8tBxVsPqf1E52E97R8fDB9QuYeLfGC2NGhdjrWMBwaFL6vMkzMPvyX3559CefH95CDNL",
  "key14": "4pzhic3peBxQ2J4nTciNWsASgzBBf7TosYyZm5QkS7VaQb8hYj8ox8JHJjmdrtEw9x9gEStkoE3jeNutYUiyRhi",
  "key15": "2upFCVgiJWpgJiX59U6o1axAq1qNjMRdWMZGuAFLJDsFi2W4e8ZbGAdFq57Mhc6qKd7Hyme8Jam7kJdsdh7EZyyB",
  "key16": "2qCAqPR6SedgmogtCSamdqPcESR3nyvvG9p2C6HFAXV6LJuSRkaD8naoFMzxzpUqP7nXSmmecUbwXDgNWmkTg4ea",
  "key17": "5cAtXWJ8dTLwWe72yMnR7J387TKSyC4mBmoH4Zd9r7sVKQwMMsXVENsCshWFD13RHgZyWyfrqSNvgjH3ECKzD5wj",
  "key18": "3ZUds9xJZ19LH3mTxk4VZDVHYN6z4Wzfy9iLe4kgmeWYvsGFWfKqMPojmDpUQqXLrYsnWJzVTJMQcmx1EwwXsXvs",
  "key19": "4VK1FHr8tSj9deHQhT8HeS6zGBNwp8nNdmXkSHxq62byd8UVRHJPnfAZ927aGkNrk8nLT3ynBKjL3X7HzdF3L9ph",
  "key20": "2BQVy69n8xsqS7QKoA5oBYVHLG7Ff73CRSZ2xR1MZopX8mLa3N2iuLkbZVaB2UN21S8CUnzKW7xRkAAdZFVQZC9y",
  "key21": "3GqYVg8JqQ5JVtWNaP8QyfrwKswRxCZxowTG74j8Mz49wHTRKLGdrvW5uhiVzxnEDQWi6qLMw5Gmzdkm7oxeYzY1",
  "key22": "2nic28cdqo51p1YUih17hSuUbvFY9qPcoJp6EuqEjEjLs46eNrDRJMrPC4EBAr4VGtFirARhXxwTU9LrfByTThqE",
  "key23": "4SbaCXjQpE3XWZRpo9remVdXzuSbpjwq4HjxoCq5H8D9yBcM5gziYvLvfjHcEmqx2jRptxXoyUC7vvjYcAAELvXa",
  "key24": "221iURhbVcpXYeWSWEndgvxk4weyofEzE4j3529FvDxZVgWzjDJjFQMRoKKHdHns5jcUYSMuN6QbXobusUyN9e1m",
  "key25": "2g2SijJ4yEypyTdR2ZMT36cntazwNenXLgK5L1RhxVwmeNyGKkH99ohkYU3Ls2ths5z9dBa5urzPwGduLbr6tCk9",
  "key26": "2rqkcTD69XSzPc4JDUW1zQMJjuTFLdry3bMJTymWHfcY829zgSNksnYq7D7eNgLuVJPszv89rNiDGXH4P1VFu5Kc"
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
