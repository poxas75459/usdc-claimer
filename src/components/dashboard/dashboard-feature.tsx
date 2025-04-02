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
    "49UGahLGB3jD6r2f5YUkLSi5GGujgZnEJGSANxrbKB5RmAnFhxZRfR1fDGNSMFKdzYGtzPLsa5qLnPWmJdHVGygg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qUCYWaYPSLwHMwLnoatWj3m8sPSRvFYXsuYfKCdduGs2QsoSJRypXcMv9K11WdsxwMRoyXGVdFfjFyc4KQtvR9P",
  "key1": "3i3FfbVK5bzFkrh2FZdUwZqpsBxDaHdXLu4Xna21C9N6VSqBmJ7yWwpeB87yNFvJSQPgT9kPGz5MiVKydsX3PSRi",
  "key2": "4V6NS3aeGHTWrVT3PNFLK8s1AnHEKhScbXoZt7gYswHkJJ9EmGi4ozkCQLr2iXwsJbkE2DMzLCWztKf2utgxUVRU",
  "key3": "2fb6rnPXW6d3SX4985yabuxYBjmjkJqDKQ6WYQc3eRz33WBpqziENJPWSHJyrWq78bxw4qbpKgMe7nYsEMBhjGxL",
  "key4": "555g96omMxh4gUArsPVPBU1rKBBLeZnr6d7Ug3aDMZ43AChgMq1umjJjbStrYAcPAfLxkMe8JBEKHP3xdsJQizrN",
  "key5": "38XvUF1Y2gGYsq1WTnXiWC3tfTjubo5XfeyqmMzBH27X3ec6ViKzbkAdXCyAXLBJhAFhpda437Nmyp6WP44DiK73",
  "key6": "2sTLwhde3qsKQSm3oCwGYkETJuEZFx8EiYvHzj3xh1a9j3AQqG5ySZFoYhnzK2238JhKHHXYJpxA5MDvfKeqJjF",
  "key7": "33rxNyB4dudRkSoyvinERKuZN1KNruyjKtkyCAnQvEMuoWbWvoeZaCnhwifRMu2o3Tc9guBjnZ4WXPUCngpPhCpw",
  "key8": "5oZq5F6ts5vSxgbdQ88AW7CCB6jA3NiRXV6e9HZ2gCVSCV698UmetnZ2ErvFAkj7hurDxHP7Ueg1xpBp2B5Y1hyF",
  "key9": "63nVV1bqr9TFHzbgJAUnchgS6CgNH8mJT46vb8a7MWKzEYkTnkDMwgLFmzVUZ9zGEA1bBg2D1NQFhQM3zuFNqDCF",
  "key10": "44bjoDF8kUsWMDXogTCGyfE8GWqEkTJHCHN8WexsaMqHw2BFoVujQYP8wk9g63Jedadb7B6esXJDUpGX1t6cR5BT",
  "key11": "5mNuMRWedHe51p4AeCHqVwEC6SJ4mnH7AzHZv3Jqfsx9Xa71fHJuNLtPFz7Wo8TtLC8GWxwtwZWnuJfk4kVf9taY",
  "key12": "Q2Ax9koT7HWJBkcgGFrse5A4TpcyeVMGfR8f75KreX8coFfQEq1vb2LgZp6aQ7cQox28B5eRix9RWAtfMAxQdY2",
  "key13": "44C7mQdhGBNNitskuwsxCfW2E9dhCdaV1qsAzYD9UVqWuQAPxCiARQETW8U6REGEyxeNn3GK3WVbuASRuGCvra9w",
  "key14": "4jxoXxKWyXnJK6xTSNtamQg83E2DBrHZYogoqUpcDuqi1BiSJTDZNZ2Rgi72VFTgWLCymGTAF3V45LkabypVKaCE",
  "key15": "3FiBYaiDzLZqb1BjyynywTgVrYjauwjSSCViimPLKN4azrvTzTeY7MXuKeTKhKwXC319QYgGx3f67C8BkRrPDhMc",
  "key16": "4M5dfooHer1LFa4rxVoJ9zkvp8GH9b3mZrEzzVTxHjmX2jwSTrUSC3v3pyRhWosQUzpKjBA8gUuhEwWw2ksvQD5Y",
  "key17": "5bnaMfiEhmpMpgKdZNCdLnzwX71t32ds63zZKiXpGxVpqw5yD2yzdH91uw6ncNFYPyyCgk5rBMoXSwnKzGG5a9Q7",
  "key18": "3SAPPBHb5vGXAteCBkpAeRYaaryN3VeqQcTM28WiSg8uz2iN12XT6XxT9qoNjYY6JuzuZDBYDArJyZNXxNS8a2C4",
  "key19": "3GHQZ84M4MGmkExiiVih8eZe5izmz9F4xcPz848v2cv74F97Ha5XQ9Ugt7MujQkEMheJh1KuKtWKYCKpoSxgng8A",
  "key20": "4Gb7HV8QmDEasdZzRoSeKjAd6DdQWZ5xoQGRRvS8ZUuYLrcf8T4tZ7b4kMQgyG3DyuYR9oNTmCM8Drn6XzFyWUx6",
  "key21": "4Aqbpaj1wwtvoZxJ4NkhfXejZWp1gmVLGd9DXCZujS2RYdiCKsn8Hw5sefms9rr2wFWtbd7umaDs7zZjxtQo1NEs",
  "key22": "RZaHzocnfY6f8oz6PG8V8j1AcU9fx1pKcAPA2ba9z4iesKxgGRz1hS7bZzZuqpv4Hvy7RBF9QS7XaE1UAa3ZdN1",
  "key23": "3Ak5b57Wcb4aY9zNa22KhmdhUfifRipHNMb8YgMF5ZDPZdMwnHp4M6PdSnWj2sWxMBaH7fBb8E25de8MT617GeQD",
  "key24": "3wLhsWWWS744Tq26ec5E1eY7PzuQeJDretcsyK7VgbwoaHbQCEr95TRpPY33Y9X42GDoPLCJgYbxBMDwzTnALemf",
  "key25": "4Fn27e7AX8Tmay3twv3TUnLptkhEk1CWajffN6soK4nRthN8gYLeLnXwCsPu1p9dURFn6yc1CPYBWpPRtgwGymnj",
  "key26": "5YULoGc1nPg5cgFg9AT4UTxXL34ytoNNsMaKvJNceYiutdJ6Kopgexktr5xQzKCc7GBRPvYNG4EL7ofVCSeMh5cb",
  "key27": "3c8jiJVb15zQMdenx71NYcK9RzapvGs687KNtS3xDhXhTQuDzWa8eJi8QBorKi1RG4vTsL7mS2o6aHUiwXWjQGMV",
  "key28": "4aXPGLUW5VhUjs3dKAMCeZwAwinZS139tnjU9RLb3U8hRhqDWcJ1N8CMDGoTbX7fijs3D9j1BJn5Un64B3pWoPro",
  "key29": "4fzRT5By19k3uYMMwrYD3PLx64HaEyE13HLHGYehpjdG92tN615CqXM9CKDUw6HktLrA295YNspNT4kASfD3XZtE",
  "key30": "4xtdfT8qx8Aw5wsDyQAcgAfhPVcL8LcCJC3g42ytZa9brJUKHeB91su2ky47xiSyWA8BYWRDHhxqQKQBXMqnmRSi",
  "key31": "67qyAZBcfvEa1yCPrELwWtKkMjPdQfVogYvAQvrvSHCNA8ys2MvWJAdyJWzXfDYYBuHyho9qoRSP7eGABbfXrvou"
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
