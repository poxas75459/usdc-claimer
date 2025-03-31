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
    "3jkPQfzLhxECuDLbjZrzNH1xGFw6esAtg12QQyXsW2JXZrGa8oDq8keszmcQtQ72SnZgrUap1GiYXAP9QTPpLBNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VEC6GD1g5raTwAqnQ8WJyworxDf3avG4DRt4YBwxbjmK9M2BySyHXsFDV2rkCu98noAukgXW2J99hwDzo6hcBEB",
  "key1": "7tB59KdT1ZvNvYfY7feXqBvDSkAA8naktZuHc6LYLdrH2rgxAaWx6Htu5a7rdb9ePvAFY4FNpo5LcT2fRjjW7qo",
  "key2": "sPjzhdwjZtMAsFxF1Y3cHvFtQgkNZjpHUQPu9mSxMXK7BzSpDyBLURunttQBQs9wu9yhkTtPnMp1eXQ1XGu7eL1",
  "key3": "4Ggbjzn8ub4Tw2EHt7k1RbJ7vPayVS72ZPbc6zgXnJn84DKJXfvn62duT51Aw92yZRw91wnXQSku3fx3cTkcyDH9",
  "key4": "56kLGn9BhFxnMyDhwc8ifvhUbJsQjQH7KSRNouoZC7TgWh7AEHFZvZ5sj3xAKuiWXtCmLoLrxUvq15PPNtSpbLhy",
  "key5": "3W2Va5wVcuKbLi7cebc3fstruMMoUQuH83xqkmaj8ph43dXESKtdLWMg9goPjiXcnRqM5WYyEswYZurTGdh2ZSkS",
  "key6": "5rg7ZB19HMdkGzKTyengT18xKrW6JS72xhTK52JuVB3vRTmg5WdqRYfEvBCCSys8NwJEEqHtWF7D9h85SmZP3BvR",
  "key7": "5dCYG6TxaUg9tz46N1YxX4Nk9kyHycv24EV5pQKjwrevPi9tJ5UBv54y7Dngjpa6qmkAMADHv34qERKAKRqahhp8",
  "key8": "q4nVfmAjgiw3nm67QA85LSF8CTLaUC73AGsia3you7cUU5x4KjbbGXJpV8cFfDgf9anJjoMxuJ9so2CJmm6uN7Y",
  "key9": "46vvwPeL7YKK61eRnxehXSUbkCkbTLiG9m8QDUokPd6NnUZkHxgNcHFovUooB4Jm1Ue5tLEXLof63hXeRoQ9dG14",
  "key10": "cM5ZrTfHrNKCsezAC4Ee1GqfUDSddvD8wHLsFq3L4qV29T6RmPjM3xpK3nS67qk7eWeizx7bQzMm9jCmVAhKMvT",
  "key11": "2AJ7bcHXMK3CCYSZ9xuPbet6omGhYecoyav1LYnq7p5U4FNwmTXpKzJwaSra3GPm4evzj9xVpBC87k4nX8WsEFjK",
  "key12": "2KbBsy5LV2sggtK9CD56pNbhU6mWimj69AhvMQiUSqX4jnQ22V5JHvokwpUUDNHdpK7VG3CrE3eQvN8kLVLDj96d",
  "key13": "5qX11q8Sbcqt31jokxsv7v5WK6KaDozPSjkoY3UnhjG6L1bx9D7bBKjJpnDT2ZPkHP56qJLJi5HfGziLo4dLjVrh",
  "key14": "wtgioojPFoabnVqMgE2eeSKdLQU4a7G4dtYHuHX7HrRPCUXwBVCVrtsVhmyoxjFhCgkwdYq8AyH3fWd8hX5kepR",
  "key15": "27Nbqr41zs4hUJBJuaqdEUiWDSs51DKW8jqeR1UDeQMSvDxfX7GwSReNagWpAH71jnwgEtiWdw92JV91byAipCtG",
  "key16": "51fzoYwH4eJkk9f5V5fpBfT9uDVfPuoobfuj1PoVuvjrzTa7DRsbYECGYBp9juKWiEvcvCUSqmCKq27kRb8bvRV1",
  "key17": "5FY5D9DPYKZDQdU1TvhRqmLd1xkiMkhLcvXs2K8Zdk1fVVphAUeEb6KTU1WTFie5gxXKYpAY2vWAkzwbpZsyaPHp",
  "key18": "49EeZhogXhDixwWYjAvqgiWt1Cdx3o4yUt164KJBVoKaVLBUoQxbF9jL94kANb1QM5qfQaHSFgpkCZJ7vh37Xgt3",
  "key19": "2FhMPD8PcrXczkULBr6haM9mdj8922usbUA5tqmhHP5efXF13mggDb8zAcJgQGhvsWa8vK1gtQV4vJK9MQewm6s9",
  "key20": "2iyjuWG741rhqZHio74YG2zJCP4tgevBH82mEijxEXTKVXSK2bhKMgn2Y3Tb8KAFGKvsLKVKGyMA8b2imWsUw4pz",
  "key21": "4GGq5GspVoFzSNhRj6QazxuxVkWRsosBBdM2JnJEUPmDXvdMn9yCgv2zku7aVCTFkx3FH2dzGtdvBv7wkbNMHcPj",
  "key22": "2gzmZ2Yq9bMLcCbVgYsxy6XiU7T7ehGC9B5oq7MDhbiDqfy4mJvCTY36NykxSHU5g4oqjVTzWT82K7dJE88rMBaZ",
  "key23": "2pBKmZpdgDTsoe3sVxV2kfWyFMtz8GWZUYrfbZhbF5D3PpiypZvFsWcirjc7MofxeNemHP1vwcy1HTm53Px2ZMf",
  "key24": "diq42frKzuHVSp7VYdHF9a7TeAeeNh3H9qG6iVQvtE6M2dvJbTfQTEgpkf7TAi5FqXBzgpRqZqR6dSYVzpjUWHS",
  "key25": "2taLXCjrDk6uipxiEVxY1yjayamGrJCNRN22T8k8ht7hsUdoAxzi2bmxVpt7QrQXipyXueqg4AstHii4dfH4m8z5",
  "key26": "2adqduGHkefY3meyrM7s9CwJtHSKc8sjKDNoyFaA9kzZBRKgwehAksnsA3suJvpQj4e2Ui5dfT4rrwLePQHi8CjZ",
  "key27": "4EfiU7QLFPo14r4Sxw9QEkTkWDMhy3qdhGideu8eymAHZ6XHu4nLpSku9qstpiS3bcPyVSRJeNX3ruL4D8MDnHf8"
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
