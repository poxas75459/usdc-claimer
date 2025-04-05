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
    "2VgSmhKGN5nfPXiGdpehbbR7SetLczoRytetud7fYbSzNUDFZuVwXTT2oav6P4nv3KFWD5ffQ3TPDfvGfCUJHkG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ap58TUEE1PSGibyUhH9d9jsSoGYZ89oEEgRZKiNFmxz1gy2SeLY4jjHFQSpBMaiDqHkfj3mjCjF87XNWWFLqt3u",
  "key1": "2Dr9E8kP3Cknvssa1QopsadZDDB7GaQHtHKrNTZjuaAQgEttMers3eZcLY8HGRsc88VuNV26Swfc94RDrvnTSGKi",
  "key2": "4XfCA7dED7q7cjRd2LnGKN5vX7fGKbFqyjgHRMMLoGZ8CtEnyjVT8GzowMS8kwpH2GBCBpWQd3B2y3uUJ32D1zMX",
  "key3": "Ms6vnm7Qo9fMnTBJMphqdMT6smfcukEtoxQBgDPC8FiHysD4RQ3b1ME2LW3QCXpnGnkjmLHw1acLwj7nxGzQSth",
  "key4": "5ZABid5RjENn2Wk99o1s4WCBnucZG7D6E4YTW8FTkZM2812g1PuWmGESxrpHEYq6Dzhs5oHg6iV6BniQ87XpY8qG",
  "key5": "1JN44uyGUy7uoMTzJp4e1V1Q7jP1HQ96H75HsmVZYryacji1aXyVJzeQK5viuuzHqFKKY92BzwDtmF4VkH4DUJ7",
  "key6": "4WL3JJFs1gXexn4HyqZkWA8K8i3PgkYK7mw1BcbDyEe96bMCgfBnRELFDM998YdRpRJythrvpzPHTgtzk8vyAVwU",
  "key7": "2bWSGaZhtjgf6utRfWJNX2KjpQDFwwafKCdM1iT34jAZKnEeXjFa5AHVJGfP2DrePDvKEMALprXbm1yJudZawSLE",
  "key8": "2DxFiyWxMdZ8MTnV1T12Ufy1DB8myX75FjnZr1zLS291srBw3vCcVsNzDxaTatu5hJ8NCYTLtSqu2bhPbaAnKT5V",
  "key9": "qP6cTgMSPZMSVeNfDnKnFDYqgtoXc85gxRFLiSpXDxgBKPEktX27aKNMFDhF1ZNWWUmVsz76FSH7RC8v8GVA7dN",
  "key10": "2dGGAanboa3Cw1xLvfBxgHNUTHLgQesrRcUzkTocnjMXnbs4UBHh4SmPTeHjhhdV4K8guuGKusRRCL9geY9rAdDR",
  "key11": "4xrhfBBknv3282Pmswxkm3tro8nnh46DbkikUoBNnR1L1nbRN2Lofwkz8HfeRY96CofUKe4fwmAnn61TsaUr6gB1",
  "key12": "3y6AgLo4PwxqSEnM4TgE3kdTLW9qvabdiATT4Co4PRZsr8nN9GbEYvp6FTak7WDYSaT2yWpwVm3dTifWApdECkyx",
  "key13": "4cVKmxGay46n54eZXjErhxJT1XtE31YWPaCsQ9hEG3o2m26HVQKmYQjNQHfW4zrvht8mhbK73fjGRB8gAjtv3f8U",
  "key14": "3nRC8P5XwSjLq2JY6CrBEWzcyWhhmdaHidjsnBbDskxTC3zh5Mk3Lo8N84vKmihji9seYcaHowKickHyQahfj7eS",
  "key15": "14TBceN69CVBNjbsfvcgHrF6WvFnjiDQ7eBqtEKZVtWL92u2xQPdGZv8YrPcgbe1hZrq1NjPKeo7Nf9b3U8j9Ee",
  "key16": "5bJ1g2QCnwgjfQT9g71TDQs4j1VXzZ6FkaoLzdFRuVz4bWuYfQxFQYeBNsAf6ZX9GRSP7ACbBjBDBhpFe4EcN8mn",
  "key17": "29wcBhnLjqhf6F28Zz6QgqrHhLh3QUtCG8ZNtFos26QYgX2Db6A3VDuyLL8LVbicPbEKTvcURzatAF7ncVU8vVbU",
  "key18": "5iQpjvqzbHschhYkqCxR5cSjKRPzRpfyBpLf8vReKZ33LRxfF7d34dWXAMcaZfLKiFNPRXP64jMMEabxe8Rv44yD",
  "key19": "3H6AZFA8vtCKruD2SrG37uRGtVxdZFrYovyFb5jXtkiw9bXyEheUhZtocN3kgh1UQokSoauswfMsHi3sjChEsDmt",
  "key20": "4fZZehznZJsJtKHbCL64XfBAytt4vpBjA5ncXCSLQYA83Ec9a1MHN5ekvMiqs19QLpCF5EztxwMXprywE1rPHLtB",
  "key21": "4VhXbeYWEFyJfmwU5fRZorNVByL2isDiFLZ7dWHZSCiTQkwpXbhGGySnQRi4po7zZJVRiBBbw43gFELr764ESxu3",
  "key22": "2WMT25uLB7tKFexCXnSKYPKQukPYMJoqZgP5WJMD7f6bEzLBmLxtYZBhhCw1m1rgdH5otctG9vLsa3FvpW63pPrN",
  "key23": "3o6WYqLEyXntvvoeyZriwDrSSZGgTSJeDcZNax7KJJhko1CTPRoHPScw3q3CbtxabKtyYGoLrdb7Nf5NrzLi2FKG",
  "key24": "53eE6V3idV4tkCzyZKGmqdfwc2cTHp422wxBAmCfvArpkZDmVKqTnT79pNe77sa2t52HSKeViUqSatXvWj74zDhu",
  "key25": "5WVsfSSeJbsUPaDJFTffsmhqXYac7nyrbxMoFoCTziRadtMVQSXtdLxMoXNpS5yNcKHYjmXj4nTnuWwXrevdZJXv",
  "key26": "5tkFj3icpttVg43sgf8W5x5fniL85PEwPjgMcpcL3vgBg9MqCxPtkz1dussZxrmL6f4RKiF3E6DakCxmL6ugPLwv",
  "key27": "67j1xNyp2Ae55zud7ADQAaH7axcgaBmJh557HYNCzCW2C9hWqjuhsij2MB4rH8FCoYgskJWXp5pLwatUc6cK7v83"
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
