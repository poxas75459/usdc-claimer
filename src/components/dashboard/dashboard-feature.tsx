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
    "64nnXpJNt2P4CweevpPobuJ8GQZp4Ezri2xeYULG1oJeaiNLBqWQMMgCWGKthwcXt91EmGJD6pVDcMn8vfmAHhCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y63CFFksUXP7TThoXmxMWhquzqtXfXJZqAAeDU3h16fNVhk5X1TCxtMkzmnTZe7gPiUWc1KGhsRiuKvLwvmFjXj",
  "key1": "4iuDX8UMeGoMDbV7Q9najWThFjLbUohR4jS5rw6z6BXn285c9kK3dDdpjcCakc4R9icsKP47QbnVidZNbu1sZ9eq",
  "key2": "kjHb5q6X6xSw27qhWAFYuRsPjE6U2iUcyEK3j8Lkk442MhUZ1Qqc2BBUmLGfN5n4N2gSzFcby6Yd8TLyVvzXDTY",
  "key3": "2rJqCPP5jRAZ7WWSiQd8QRN6qk7Ys8mitQwvaZCzYnNZXqMSFfCpfTQttGxLTiWMhmtWEGnGVSDmzcMa6ZVyp8xX",
  "key4": "3V7X8Admf5hYyWwXEYjKKkqbHpLnkN1ydh3y231vsDEh29J7QiJhDYeXC6v1aTMn98LvjbvNL8phGsRaPMTm4GAA",
  "key5": "4JcmyfDgjX7TY9aswT3MZaax1hUW5yPiDRSVsY4ieZYS9TAhyTBSHeQqdcxQ2zKdckw2yhKE1LT971Cb6puuuJaA",
  "key6": "67cnDJ2pcF74FUeCw4gnrboz8ibff223z37bEWGYW1NtWDx6hqqJSrf9QPJF3SWS12SgNQVpRPVyfDY1GAjzNSJC",
  "key7": "hmtw2ocYfkmwHZHUhe1Q9pAJmMUTgdjaSuvaXoG1HWLkzJd3So5JyJcooM5NoG26vKRdv4CJd4AuAtej9LZhYiT",
  "key8": "WMq9rJZCf2hPoucCo26mQRVQnf6QEmd7QqDX6yCbhQxbGcJZyHfVXQTBBq9AsS1oLG33NQhQq8S4999vgF6DkE8",
  "key9": "G9PbyQpcfqHKaYCjSvG15FvLvcJPxrtu4WfPPx9MqfsG7AQPkfT5G2Vf3gx9FqZvN9j8FqPuSFwQRj48GthE3bz",
  "key10": "5coHStcmh29AVot2pthb5pBLvoT3U722JdR61jJDi1cePEGCZbD5NUj85iYekBSQf3buxm4rTWsH9N5RnJFs5JT",
  "key11": "4kcdqpby5vjymtYUpVUn6xRjiAg1GHod989SCpmVFNrZLxNrddNT9qPpTQahSj5nL3MUzP5HZ1oQQu9KVJaAvFbi",
  "key12": "4Rau4v2CSA99i16Aq2U8s6MLFU5tJnfbrnPHn2VZif62hVPRVHh6uhq6LAFZZhC5pNHNxGdER3b3MFJcycdJJzfj",
  "key13": "5gV7gzdtr7TxT1ddisnNDNTj3whL5usQv2qnKzMtE1umRgrQ64cWHiYNgWQmRQjyTf8Pya6r6Y7H6dHNSE3AKJME",
  "key14": "eir3A5p1b2PZEGRARqQsm15FPkQdiEHmwouhijZYZLdRFdb9SCDHb52mNvS816MZLQXkFRFtSDU25c4eLbveAdC",
  "key15": "oiTBGx4FexhWm55uzGfjpgm9XR9F1G57n5wbdp22LjTHrPWdVsmgM3DFyDyfnBwhaPLZuuBZ4GZNYwvcWnDvfTQ",
  "key16": "5wCgrnr2RTHbfAphdGjwSSFboyta2bWL281dqHzcwN9w1XVYLkCU33ej3FAuxeLfLAKrHqrQdMdEDEHaSxk2PVjZ",
  "key17": "CpA48AMWdUbZf1m5zxT93HZLVgPLXXyYDKjBkDKaCnPGAw7KQGsjnrHogZpN5mz7nQQyRQDTh2J77NAC1s7whfD",
  "key18": "2q5NHXD1uwwWj5BBYYRufBQa6hZUM2Vyza4KTYpRUp9D7e3wuRW9R3wPiGE11wyzr7zWNFyKW1pdYBzaiEoW2nEw",
  "key19": "3WVn8Pv4FaMrgsYSLRr8c6CKhTWJy5f92MjpCk1Zx4MJa2ArGS3M9nyfGbFHyAc3vWpXGXVBKbbyEWKQJxkckD4U",
  "key20": "2Uz54eti2a2xy2w5cp3MF8cAgRPruNi3FPu67a2pgEJVDPdDM1yfyrkVNuUVuogZMCsgNXE73jkkU1dMRW7WqmVK",
  "key21": "2hhELco7ufEmdpzRhjd3ykUWqCfyuwvLbJY6qLd9rpd7qQBM1hvFRo37aCRkvtfj4myynvLURj5xdSB5EVfRWS9w",
  "key22": "2jKcYHVAaVy5gsE21XgkfSX8wWauahfgP2jtTvnEc8peEr3oTWBXdTvjgbbcgxN1ALFP1dqoV7z6syan8LS61n8c",
  "key23": "4bwpowLYgpcdkE2pc2PPQkR3zGFumYf9UAnkPq158Srvw4mPxYS7FNgj4YLqtiyKgW5AvMm3apGNG4ED6rLsawEk",
  "key24": "3FmybcnZjuRpGB2T2TovyrFhky3riU3uAvwy2AjmZY4tUkYHQtfDT98fWCc5wGNEXSW7YpiKE2VoHwm1Wcpv6FfT",
  "key25": "5KYfGqBzezE9hqtYLAMxtJ3gHrCHRerpz7bnvTjgV6Czj14DoMwNN1fZgFmMD3UkMyxyNXgxCsHtsroyqZ3BuVqk",
  "key26": "5auaYrYbd22EKoJQ7tfvhWnHqMUnsVa2ymLnjhF9GGDcR21nnrBqnUBiBfqxJkjJ8j1ajMSzF59LbFaJwBapxjuQ",
  "key27": "335UXQJBpfjaX5Jy1G3j6wK6TTptt8m39cwsXkjWroEPnwNSzduQJ5KgFAYK3Ay8heKz6FMoL6z39CJow73LEw3h",
  "key28": "5eXorc5wdRNq9VjwTRicXz8uYNcsvZHgoEt2st9Z6NkHSZAyKt11vu7mWDEY9kwzwkgV66q2E4ePPRuND5gvfMZY",
  "key29": "5BfzRHcYfFMR3GF3QgL3eAwa9WkSwgTd1sMpgN6CAQPkiDwyCLpeZXyaBtCPWcY3YH71DsggbfH6LUERxRMyWri2",
  "key30": "39SyzCkcDQfRHLCBcmxhXazNFWDfyRsmfgkDkWUPK66CbhRjdQSgMwLKXpqGCoCHDauvYS2SrB2Prq9PqLpbnCv",
  "key31": "21waQpfv63qdK34f8YAohshoneGCTs2LmMMUEGw3smGfRbfXYot8bgGys5MfvQjuBPmLX2fSpouV4xXmhNgD6UQs",
  "key32": "4YK5DSfZ4SwcbXB1kEGkH8iTKJFy9zv4iQH4JR1pyDgVHPrHjnwKX3BiAoHndNz6RN1VzAP4HCUz5u9Zxq3bF1aP"
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
