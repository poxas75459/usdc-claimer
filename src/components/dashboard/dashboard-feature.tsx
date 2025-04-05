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
    "u8JyxQUQWM2GsA8RZa7kuQSqnucLqH6UkNeNfmXXrpEWFgp43xP1YvsXhG1JiJMYDedYmArpoTPLfSzf5PxAzkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MAxsRahMbJ5roPSk94DwYFgUfczJz5wkQcyBkLNPAXSWeaRZBZQpLFEcJ3tM47ucwQSrDzGvxeVkrNiaWVuhfpA",
  "key1": "2Nuh1Qqmb8Saxqe7vBFKVb9GWcujaW92NZcgEEdmzqNKzmvutX7kbKPq5RuEgU1WGV3W2njfVqpJWgDVRJazNVmV",
  "key2": "2QSHsoYD2gejcaKHqPX6bbEHvdEM6R6ibVUUYCv6apQdpiA7JSmythNy8ev2WG2sfqaxZAxS48pynWg9AsQF2HtH",
  "key3": "Tsg5pA8GgwcAVoG4RLDGkB87vsGvCvgow8MSWfhEkXTYshZxnH2hiAHH1wGkF4QZk1uk15c2yfJ8N4g9jcVksrU",
  "key4": "541Qq5gC26C4CzYUA56rYWcsVx9WvdfgBoQjX2bvTJ6RzrkUKLCpmURJWckBexy6KDnJMR8UCknbjj4PwGAKbZmg",
  "key5": "5vryRA1UKkVtEdAVNpB7ZoZro34WHDiCXWRD8HUX1PbJvsLEZ3MjdES8ThvuRCXQog5vEBzuQKAgketG9j5DYYqQ",
  "key6": "3TLmkm6ymoFsgfbMttdput1uKZq7Q29k3ER9HrZLE6cuuY1e8oYzG3stkmvMdNDXVnRHNEP5ALnPftVVMZm7YZ1",
  "key7": "rZ12Bjfe422RXjjcH9k1kQACTjaJowd9ksiKPaRwe7fjnf5VHLB72Am7h3hsjAtjitNACmXvtWpzRE7MQrrKMqr",
  "key8": "5Zp5jEfCSjZNbjk22tYUvPEMmXHserQ2juVfhVUwFVWw8rLreMBruDx1WQnZN8aTCTfGbMhh4qWtRj5mRJ5FQ6bh",
  "key9": "z5tzjXJEgb7HmXUJCBferZkCjEbmsABhXsHmKsDKiFG2CUb98VhwC84nfKJfEp5CU75Y6gRYQgX3X2MZpJPt1HU",
  "key10": "5Jqhe8Bars9Sk34K24H8JGSfJnXF9DiH2UQNfFujoH1QNcjVEBGn3C7YAnDgsmUZ9hjWzHR2aLRrhQwd9d7Zf7xE",
  "key11": "41jj51FCEHUwcRm4WWa13B1PXiw6JDTAj6PTuvpdS1x4KHp38MJspHAHpAsWFybRgTf1PY3Jdp7faRed4zswtgUN",
  "key12": "58eJqh1x7baLArc22PvavTVTHTLKd9XXbb6n4aAefXj9R82qpub8ywfedSkdDLhKjD9rbk9eExkdv6XE2cqRa7yY",
  "key13": "i8woYBepxueF34ZqzxDs77DfGzKPrYHqzY3CamFe8YiPpPwYgEQobXeTBr6P4QAhMaE9jdkiScYnosGyNRveKeG",
  "key14": "4iqMe4wmaaPoLbfXy9fwMtFukhxP7Z5zyTAXoioHdEy3bxJeqU5avdyMi2uZBCHcWH7zhp63jLcuZxenWtW4HsJG",
  "key15": "3HTEGFtzzAGkjvXa96gYWQovwgNgpKJZujWikicyaZELFMeN8bQWsEQwqrtGXwLpuNBzAah5AoNQD9TobWXt8NeF",
  "key16": "5AvKJYFbN1yQ9UMCiEz7rFQxyN5Yf3ccqBBtKTc6kixPdQfcuxhMcmAQDewtnJnjvYpfmdgPgSwxvSeKUDcgkPBd",
  "key17": "sK5rjffyyVjtnK9uVSK74AnS571QFtyZCPejFzpA2TXrgW7J4LmTzJKmj1nrCj69iFRGojT8bnasVggbUz2cjaM",
  "key18": "2BTcyPEXLjx9uX2MYdk561yyLc6p7tL6MfH8uHb7FmiHRxemH8mDxT8BftjTZkGpmSunHFXLxqWWTkNCjLJ9CeiP",
  "key19": "671hTYPgf1VHx3phtEtgVv3F1MJrNf5gKRoyi1CENea6dXkMeP7cm6eDnpbib1pgENR4BHR8dZ79cy89piVwE8hv",
  "key20": "2r6o2TGNf37tcQek3n2dobbqPxKXukrLdM4LVSVRV56qDyzKuZVxUXDh2jTxt6oFQmNSsLftvoqPbcr6GChfUA8p",
  "key21": "2jpswS1JRfxaWWRjgVsVq16vJgZQT39ixDX2nSpyrzXbNG3pUz6uZcGbAoA7PqBbzWdMjXjLtJq12FQdLBEqsZBH",
  "key22": "3TYKXwHEyyg1PvQRNJNNTRzUUCsAhDFtkzjHdYEmu2AuxyWRjVpmxKtjxhqvs2c53bwCnU8YPEfbCYAs6LFMWuer",
  "key23": "4ZtnY8B1ZuBF6wewvpr4EM4MHX8NyKQL5T2JRdsDDYytCtE8zzrXSZJEwzyj8LpkQKyycmVCAkVoXyNbM7UzKHhF",
  "key24": "RtXjswQHPBvcduPnXvmFhBW4BE4UgFrStvQRmQTsyDxNffZMfdkqyWfga94jvzDNREdVuEDfnTpfok4tU4boPoq",
  "key25": "sWLmWpZqpwzni152b8vJtw3g63JGEPvG2R5L7daU4NiHPiczVXqfTHr3JqbVJcLnr3Ex1gpHPZ9Ny3iffX3VLhf",
  "key26": "63V81o5L6yzhHwzRVFD6q3jr81K9pAmyrj66FG8F2yFWLiNf5nDFJ6dwsPfRBP1ifaHcD1kcYYqi7mCYCNnJafKy",
  "key27": "59PZPqNC2LgacsBrEk8CqHijmeZ3bF4L8RJncHN2mYXHjHBNa1w7XAeXGSdfDdJK451F6832EgrjD82dbwUypsUr",
  "key28": "557MAhLyo9oF4bfu2cdhHcDYk9MnthaUJ55qTA1QTSqqz6T9bmunVQaBdfJyfeXimKap7Q73yKWbzpw2hedByDw7",
  "key29": "SfFDLKKfyktXdzU8BppgWwqx2yFzbaV5vjVmwj1r2RonMVM9VuptSfjfN6f9xYDvD9KnNAH65xuawiEc96CbhbK",
  "key30": "43e9LctYDSmx2tUouA6C75KZw8u4dmRWc3bry4p5yuoJpVZx9W7ZG1kYphZiT1rRKtVfNezu59JswoCdRu9QgixM",
  "key31": "29fbouu2hWmtTE9fzks88NbVYakJhv45xQhpd2MNnECP79wm7kY7x5g9snpsGF9xFB1SYZEoXLZHPSJwJLCVGTn9",
  "key32": "5MeBeWUeDwPo8AKGrkWA588M81qtfSosR3TyAdoeA1MgJmKjaTrXTtDediy1PKoNA8aUAHCw99QPhs7RBYmj1gqk",
  "key33": "4Uv6MR8e9f3X6KtdH5wyqgT9xp6ETd3EjY3Ld3DzCKqfZoHKQ5a98du4bzQfvQCtBtnucXqTAT84MmHTZ93WX8sm",
  "key34": "449xrEf47XiUgX2jsTS3cfFQxkh83CD4kk1vC6QpgyPzRw1iHeuWbF28k7AGhVB8r17nz1YCLjwSyzVWdpqBWcVm",
  "key35": "5ENSGvevks4YBaRojKPjhMETbFu4aH5ejW3kMiMyzeKFjvu6mLrr193MJZpMqiSdnvFLwYauQE42isdiRbrrkp91",
  "key36": "3pr6KSSXLByXGBMVF8Lo2TkvBAHEW1rviusVkyiuEJW4d3Akqc1Leg2E17dm47g8qX39PJ6NPJxRLEXCqgoVh7v5"
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
