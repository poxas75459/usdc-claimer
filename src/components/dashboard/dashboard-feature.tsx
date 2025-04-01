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
    "3gFa88HSXrEnjzLzjohA5ZX2FuwWhsyMuQRvbjHkC9fGraZ46HTY6xov1uHQJvbbvrCb9g6uVEUvwwiWYgXuaAqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B2XJz462H3atPmd91n7civ8ayFwsTB2RXUrUmTbgv8nHPtwbvCWMxoFQKqeLMBAV7hqaG9UkBj7sDtK2RGZJQ9r",
  "key1": "DDpm2xqjFPymEBt9mTdpYXdcwENcfqYxPEEBa7YKNZJ46U139fXfhjKkeFTwDLqsPUmngKkoTEqmUqtDEYAhnmy",
  "key2": "65adeRQfKfTxr5o5TLoNpBYR2eHZaw9eCnRue6hYnZnBoVetKEVoxDX1Lg7cSpWzAYkSuY8Ar1r9TSEM8i3uEsGN",
  "key3": "2uW9TrqobkPvjgxxefEctg8VQwRrXXJfHQ1exCgBqvHDb4WGAg8gfi61BApwsPGShdppY3Zqj57eUKxQ9BQpyRz",
  "key4": "43dJEH11Y933N3LTSBhAXCLVXkE9U7dVBENsCjRt9EVDLuksy93RfY2u1tT9WSYp6aHjpt1DsM6XMkkuZ4wrhMm",
  "key5": "51e1BYiKAzfkToh1Tp1yZH7mJM32rag7KA95sRys758rjjG5isn9bzQRrxffzMYMPdus9GWs4wbp373hsc1Pa5KS",
  "key6": "QnhaS4mGxaBsZwHe5zj3Bffxwq234GRhf5PYpKtpQEbMehbBrSaQ5RfFSC9sKGvRNSojy4ikcd7rf5fbR2LA2AZ",
  "key7": "HsabWsyyvQvhN1Ky4h1H9JJJekmGeCQm7UgojMLVZCPEGaWRG7x84k3of7LeQFjRr8qRdVXwfgAFD2ff5C1JoE1",
  "key8": "58QPkpyMDhQYg1atZuieh9hjCd3Sq6DQhiFieYJbe3nEhtfhE3rF6yCXGqibr75pBhrma1AxVTe2792bbvi6vL9v",
  "key9": "2FciMKPyA74tkkuT7RfYE23eUoubi4mE7zN2nQEYoejByGU9YG7GXQQWqQZpMo8nbJ6F4jUvVU9eHw47XhY33xT",
  "key10": "4kBe7jYwcAVAPzAfSK7UYjkYUstrbREDrzJre4544XSTLW2yMu4dmUrU53N6LAFERH3Ff2BtQsy3je5L8Qq9sQjE",
  "key11": "2R5q67t2Fyzt1ybPYLzoT5NNPTW69Ag56f3dKLQPpBZigiQk12tRXk8oFJ439u4HaL6iQY2vDSe1soGnzxHmjYPg",
  "key12": "3Gydaa75FU8gSCZhescuLGx9wJZxn2DoaSQN5NGn9W4BbmdnrZXQub4zSeTTN1C5oB8agnWcBZXRPAb3MKBNpatZ",
  "key13": "RzSqC3wPx39GKcb3gCmwTB8ef5i77WTTVQkoqFuzyTjNz73Z3PAZfFAydfW5JDBiQwwrk2eAbnfcyrNY1VLDd7E",
  "key14": "4TVj5Sm39GDKrLj67b6DaGNABD46jFsMqpEZZBdTBhQdDuEXk9TXdsSF1NC1imQWH6PoJc6gy6zGg2usUK3ApG1o",
  "key15": "HV5MayuHnK7KM5DjMrFWbbx6v2m1ogsMtUTovAMoDKNaHnqTARK2qkZsZgGXmAz7WH8WqVz81uLtocVjS8yAzR1",
  "key16": "3C1q2iafSQtbLUDG1NpY9aBPeCwvYunmhG8X75T2PTq6UXiX3FpvFirNyKYz81tVWnurirPXgKka2LPnRsqQnUhm",
  "key17": "4HZ5XfpjFE8yEt5MghSxKdx82FEPBA5VgfFrapT4apQP9GHXPbcGvFLpxdnY3H68qrKJTv3SGyErWJhPB7KUGc6k",
  "key18": "82WbN1dd7Kwrm4nk7JzWCGriHrTAG1QsMGMQumVHxdLvt5r8zMbmUkZbDTbX955bc4sFSLfUkeLn6XF3PdFx3Fw",
  "key19": "4KK1qe1rkoVzeENEmQRASwm8twoD6Pkf7yTHUFxKoZFejrxpVH1zpiJyWjkmQRpRipJpQjZcG6owhoQs9fpKJYHx",
  "key20": "5Qrd7ns6oPF7z4gzNGSFGZGqSxKMVZkHNs91sdrjwEot8rDvxCYWcQujrtJQCgTCNGgXumQ1JjhRmsvB81fds7R5",
  "key21": "3gfKXBfEJfzK8e4jJeRKzWyRKjTHV9ZzgCQudYQL6mLf6zBbxBqxxPFokeW7XdqgjpZ4F5pmQGE85aboTr6nqUf5",
  "key22": "XKrvb9siDUA4GSbLUkVwC4aDYjmUbHK9YbwhZhs1tqHBof8LJdkYhYVEApNsRxYz6agJQsF3BewS3a8SoVieKTA",
  "key23": "5egoMKpqhMBThRFKWzcjgMSbQ7xjanBKtVbqZVpJKMpG6AopmmyTRL8Fr7NSYY8LYCpaZJuottVb8FQjhuTww6Vi",
  "key24": "3zpe6U1yYnWNRdXBhGFTD4MDBRNKPN1TPnQBAaMoMp8TLFNwmCtnk69cxTBihTnxvqy3fbWYXiDyZZsVN3t3ynNg"
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
