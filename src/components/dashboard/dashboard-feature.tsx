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
    "hktWksBrhtM9aSWvKUjEZTEme3N4Rd9z5yyqFCbbCadhzY8YgJZrak9PHEDC1CFFQ9KBSJobGSrZgadYViKBeBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49aarNpSnJz4ZuBAKqKBjaQxyjg6Uop4CXmTyvFXchHNaoyBf9urNx8VGt9uurYGy4szxtLz8x1S5ULfEbjMABXN",
  "key1": "4jckAWq1pHU5PyF43zncKzpytS9LGRhxHhPNgeYrWmuvAMeEizGaqoGLCvvXWHasDP6kTrJJzqAWB87ukhvrCaiX",
  "key2": "5Qe4TPApmMbbsi7FCnXj6DJEs8L5gGSUTxSWj3LwZeRohXaQ8jUpgmjkimgmwF55EikDMnKTT4AY2XqfW11ci6C4",
  "key3": "5ZmiPW8Daxz4xQZYguxuUWwWtJumqvEWvqqskmRqX2ZovhcVKHzivkGjC8LeMmnh3tK5z9iTfbF4ppnnvG2MAh9U",
  "key4": "5jwDh6ZJ2bURqddiNib8rsQBBjQDLaRBP5QLwv24cxzVXqpK9fNSRZMFsSaVrz2YxyphUP6C8vgeT9ZEQzb6M4Z3",
  "key5": "3bMuUjye1S8YQoTpWVPYY7pKxDnF6XfkP3DMiCYxy4QLhDoT8LUGfi7sSQr5B37HbtMXk8JoJhTcskmXBnJ71uV1",
  "key6": "45nA5wpFupdXVb67UcCFBXBgTxsXnuH6DQAoTCLyFsQ5RXxvMoXb4iLcQD3ELwSdxG8sxShssfrc9ycrH1i6kNRw",
  "key7": "37ep8r6igJYiMu4Y1n9MkWUHat8RmvdHWmdjYLKxGxT8K471KvYYSwprJmHJjTCkiB9VYJz2fRncQW6GxmjExS6r",
  "key8": "29Ahs6qfpf6hNjMauyWwCYeRXkxUSsVjmCBfuZUsXNVMPcgfhJGiicX3jTeY62ebPoS4vTELtv6h286JkojVaTv7",
  "key9": "2VanpWSCJ8VF8A6KgG8Nxfk6rRLT5PcYJ2UQwkr3V1j355EdYfPx8FDqH1ygrhxFMazq16vKRTbNjU2AczqmqDLS",
  "key10": "63CpCykaCdfSVtML7grFFppAcf9bWzibgHx9yz64cp1zLDznh2cGxkucR3aMTBYDechPwjdGTGznXHWN8guw5vpA",
  "key11": "4bNAud3gEdhnDCYbMVZbd1KA7AG3XgBnp7vAer2pM4XEtUg8yydMRvR1s6V3hvZKgsXKmtUWxo9a2WECgrSHc4Qo",
  "key12": "3qCKAHcjUSxLcMS1qYM2e2LjYLQx2SsHNhaAazRpkU9oJjXp9WLdvdykVVJQexmxVJE16jVYLoAb3jQxjRamTp92",
  "key13": "3Bua52JeDtrMDp2U9zHARjZGfq7BNV5GCoSLnasi8DkCQWEMCjropYh8sFbS5cNujS94XHBfcj23VbaCUzgXoosE",
  "key14": "5KVVt3b9GDa4v23wL3Xg48zJZwDSq4NmkQVLvX6YMMbAUiKCr2dyMqLWLvMeHkGDiRdML1zoLvXB9pSbg8JWjUmN",
  "key15": "QW1Y8jsG4AEuaZtNKGF4r2rZTGZY8gyhUwiAjJy6Y2uszvMyB2LP5TAVtZZhFFNTtk5HAGq8RT1voiNdvLPiWxC",
  "key16": "2WLAF1HmZiGsnVarmwC5H7m3ANBDBeEUb5LRgqDTHVhhtKCYdbPfuAtRWqWmk23jgttga8KEhN7CGQbXyMtfjvrE",
  "key17": "2bj8GgNWnNAiYtH7rQFaktstLqdkPHsokGFxCbnpVciR6RVZprncSVtPiBmAiYas1xuzUk3dvb8KKzvkAvpmn84q",
  "key18": "4rdMrPMUjTevenLkKT6Nh37iHwVNCXMMxHqzpfryN1vqPDTkCbEJab6M7j2coZWp5Rx9UYXZDZAejKRkt7hVBYQk",
  "key19": "5gDsXu6FDGVfRiVP9xB5qjr8Cx2AeQSMJAsdkparfHbsQkRRtJH7RWLA767tb9sm3bhvBBAMiTXKXh2FsPpsZWCx",
  "key20": "4k8N7ssptrWQ6UrBBSkxxozHcQAgZnsN9YdYf4Z6fKSgyX3YyLM3V6YnrYZxkTHK2tntDfhYzYa3mQ4wujnq82K3",
  "key21": "5ydT7uQZ5iGeA7QoBuYFHyd1jg6o5J1GLbbdXUPj4tUkXptzV27TTFrgw2JUeUFmPjN5ArfVqpBfj6CDHvVQNoHa",
  "key22": "2hyeXD5j2VEd5nU1KXfv9ppw534mP1J36KUg8WZ99gkR5AhdeGu2UGxb7dEib8KJiZdcFS7Sip646rwyA5wweb8m",
  "key23": "5ptB28bAcciZDT6aJ36dCCq5x8TaxB3xeDUeSjv3Uo4Ms5QodnS5uW45zrWUUs2nXyajZeUYBazCce1fqejwBe9Q",
  "key24": "5QxPJGdvLXNVheeNBq9MrDYYSFCbF88by4i3whDkSYHxBmTXw3UzvSpeZk43ryfDGYA6xQVoiMsAZBB7oTqZ621C",
  "key25": "3m64oSyjwGs48NWwppARaY7NkXqkaGd1fyhTZAcPu5Vo6U38DtrezhfxTjNorsjA2fTsuZX1eUAHSG1eh2iNAD1D",
  "key26": "eRnG8woncTAwt12cWs1uW3HRqf1JpfYApmo924AU5Bxs95j3VCdYGWjX25Cxr1sYqSSJxs2F88VRspehWEGGNjq",
  "key27": "4YMh7fXUCMsS3SZHMz1qDg5dQGHT9D5R4yLbRWhDC8wWWFCNNqtBwJQNPNjqNQ17CJKjqisFiK2iZ6Zg5M1jHg2x",
  "key28": "2i5jGN6Boqrw1VjrG8CRapqpS33bJpKqciM3VgUuNQoQ1iXtsLycrGNV4CxWqq9CtnA2d9tveQ5pFsAF7PqWkTAt",
  "key29": "5UmvJ4VvCeypzWQxERdqmp9V4suwS56WvxNLLzDEpi6wVuksSQHc2fjFA6K5Y1hXAghSHSKhSUM6xuCy1H7XTHr6",
  "key30": "KCwBex1yT2jsAuAvLimczgUoJQMj1gaefcbjdKQdMHtAMYPz4MVhbqF6NHkwUrY23jEaFNjMkNkwk1Qtze89jYE"
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
