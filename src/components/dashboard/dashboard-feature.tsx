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
    "N6iP4eCQcVXJvD2htp7RsUSHv4HenJiXeoZ6D4LEHUmL8Lc7cC4KoD7WYfY7bqqXLtt5jz5vkB6m4ppAC4JcmJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SMB8KacR4gBE8Cgb4kowY1zyRJ8Ru4GhHDX59YBBnnQiSjketR24uu4fVoC9WgUK4ZfVxugUa194Va5xX7bGEgi",
  "key1": "5eN1DSR5NMzWrdjFJPpVcMTXukcVWJxrm7sHegUnyYAzM8C85fS5WcWFaPHbFCnVZKjCww9QKGBsWtTuwrnJG6No",
  "key2": "5BeR6UrP2GGn1B56Ypm8kMCtCQuV3SHWFFAZCjGzXc2aRvMWbkufKWBEzL3dHk74kvSvrnUymtabgVBAs8s8f4hy",
  "key3": "5WVDe9DSncpsx3Y1Gm11Ug4fLn7F3JZduxBmGQRYZRmWPEsvBizwmJQomT6NKwJ4d4gKotGdZwXPoVS5UZyNzYKt",
  "key4": "2p4nSZrMSAm9wpsKMsRSkBf5xNHE8bNSuqny3GAAsFkYYp8bejZuS77GsJ6V9Et1zQmXxvgF84NmMjg8YPYeLHiH",
  "key5": "hmevghdFowSEdc8RjJ7c2wtG5jSMatnWHgcdgqh2LUhsntv1EwpgVjmFTLQpJ6SaXWKHhKNaF9scNup8tGUwfs1",
  "key6": "3mq6iL68XwAYpLxyjSWVZqGQzqj8WobY4E7AfihTQLCX4fZeRJd8QJiipePXg2VriiujDdo5EeZu4YX79e5UGvhf",
  "key7": "4RZZzhgf9XSJawGPf3yVnJCbT3peoK2JW4Z1mhLLGSZ1cmqWBtxheLT5sEpfmU1eTEhbfSBDPD96xrpiYAZzV1sy",
  "key8": "3w5rWju7ioueAt2hTY4zLDE479VhQcDrgVHN6Cujc8yCUHC8sCkGJm4m6178BjMyc47y5m71qdiMfLfXCNqvsrdc",
  "key9": "2irzPVwdj7fkbzUXz3M3u4gNYKdBeTwcsWPDBSJtW5xKSn5srLumAPMeod7Q8aeavp87cUYpQGYZMW9wMnAccXB1",
  "key10": "5zqReugmXee5EkbbVdxG77qn3DMqRv4Sgw55C7n7EiuqhjcUkvFuEXay1dj8ySGwjrGN9kjt17ESakbULKMLGJQo",
  "key11": "4VjiCmf6ouD4itW1znXAs4vE6pnx2geom9Qp4T75MjHL8mN3Fm6P4pUxByAsNDJTVXiY3Us6NHEzb57cWP8bEeDS",
  "key12": "65krYwRfhaNPV2vL85yHZv1rs1kQgxfJUaTodjgfKctxk1UqKecMG8JpqUVQsXP1hHszmXiXUxV97uwthJa6wG3J",
  "key13": "3u8drJkZgoEN7keXY7HkJTetG5cXY1snVeUpyN3jnRdBxGcLmqcEGdeK3Rn6J6geXKMjenhHKPiYYg1Twnh5DKYy",
  "key14": "3kdVa3DWuod8NuJyGxtpyrimP8oSawh34vSvuoKXKZ1S8eE89WErzYBMh2uYu94JeiUaVdSN3vELFFNMfMzvNAmx",
  "key15": "64FFeJmnpeM61AaYndbiZGnKxmByh4dH51M9cjbFHMULjv6Y1X9HcCw7ZV7ooaj1MEja4J9F2HFp61Wtfz2JAcwC",
  "key16": "4gX7remy5tqCnQWsasDVWdCgkG7DiMncssp2Wb9JQHL5HQ8bDrrW73QU8WAwJrJqWA8P1AgH5AE8J9QzxFHzcV5k",
  "key17": "aYmD3YorhCxMkm2c1QS8oTFRy42izaWtGUbpNuwp7YjfPpFuHKHCSmtQK75HueNVyqAn32njQML7eQ7gqp5vD7b",
  "key18": "HJEZsipWd2Q15AnNQECZ37iLLdbuUm4yPSettjEXrCPtxev66LZ2M5XDuK1ymgbq32spp3mC2H4Xa6kBj1Lb9gA",
  "key19": "2bS9pScCkthi4yExAUcN3bRPF2ggn3BQ6ZijvmgxFwDrvBXbkSqHdXUoX5ecRN48KqvS22zHg4NjVcnDU9eqU9Fk",
  "key20": "22YUV8fNxbznF1nBftjWT9LzpuW2fVkcW8D9jjyxvdFUmBCG4MwLKpVysJkG3D95cTzHnNfp7KvUw4tzrXGGdbGS",
  "key21": "2f1ZHwmmdFKnDsSMKPAWNQTkVsM1ELNhZJ3HX4DA22pbkSXJr1SZhE3sQmM46kpp96x54tDYWBLUM7qwVWp7z6Ce",
  "key22": "47g7s32tY4KrWqPnDDTXKb5oUUzzJhG2u74zsGamA8JDeCYA3yaw2Vuodva5omdReh8eUJM5DPb83nBcLFWzWhtY",
  "key23": "4PetA4N24yceW69Es9bfwWYk32HmKEyidiVXxxJVVgsnw164MKrvtTo5qdFULgv9ZaGxKrcq8CJfYWtj1g4FbmVp",
  "key24": "3qdKCw55rteytFz3ZKg1a5oWWtZXKVbUA6XhQMHBkBFNuqF1paHLzNGgi76VbY2bqnUJomkh7NKi23Lrg2stMoKv",
  "key25": "4ztNycCC3rgbam6g1GEg81ZgVzoRAQbVVeuvAFdi51GkY2gRwrz1FGQFvW4TenbiSmdm8aL95UJACBZyyg368Svt",
  "key26": "5zsZegBEmMeESScXVMbzzG67qZ7arxfDgeB7VsrP2A9Eq3798QpmqoJhv19T5Hv1yDz61K7FdZ52rPYcQrU5rNo1",
  "key27": "4vRPSsXEdHh1C3MxnaYMhWQd7n4goVaxxQi2Pf9qpTh54BGcWfJmNsZvzaXciwk9KFYLvSutzv5exb9wEzA8isr6",
  "key28": "62273jQeAK4sgB1KSPRhShcyaQgvRUkwS3uDcQRc4Ge4QMNr17bqD3FD2io3uKJJ5rZVJMnE8hLHKpJivNptwgJA",
  "key29": "2icoBhLaaaLKVW1esLZ3qjUgJViNyY9twmcES7jb2W4iAhFKz8p3MYp29bXcedt5oiHgq8sbPLyCSKQTdCrt5zy7",
  "key30": "3Xx68MomGNXg9zKgTxdvSSsD6K8DWPNVMkvo8sVoJsPTwNEHpaQNVW2Jviwi8pZ3dhLXyQ4rtqtSCt2WqMqwKd4g"
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
