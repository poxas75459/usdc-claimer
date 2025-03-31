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
    "3azAeTw7o8TLTiUJYaQta3m6mQVtVgHXY44JE3f1QRJxVUcqobkSKAhkvoM9Ut4XiTFDXY24VoeTyjtddTDsVodm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HjPa4sjsdxJz72uKrLuwekMfwPvfRicVtFLEZ69beRG6xZ3196pNYM1Z3qPkazj6qTUc194HXLauBHR7FydPt1k",
  "key1": "2ycYqHJmYXsUY1WHtpoMk54rQzxWqh737THbbZB72tLADbmyeoXRvUJmdkeA2yp8cEsodjHpGRwc9WjSNEhYq4NT",
  "key2": "3mjEWfiTuZWt6qcvLohD5Y4TaEb8GmKSx2orUPWP8ocaij2nBRQJx4gPvGkmyCoU2hHsL8soVdGbaAsNMfPSgwGE",
  "key3": "5tPZsRv9AKvLmukW91Ejsnkb6tRNZE2RAN995WyL6pNddGBwkG8y67hSDZLv9zTJUNDRRcZqkQb9oCj4kAQBi6m2",
  "key4": "4PfketruC89YA2yZNSU89X9fE32axdjiVx2jWg4fDLtN63C7PCcF2LHRnZWVk6LknoSfLqjFubLzHdfbbAKt9Zux",
  "key5": "2uoeVFA8MmvzovraQyRTMWY6YNYZGwSg7z7XNG3ec4q7qT1yQ8i31xmvmkizixE5pfB7fjUVm6RSWssDn42tVqEy",
  "key6": "5AbuPAJoBb1iBDoCL29agR7vEsCou4Yxg1j63w1r9ASpZiUQAc8gHe3gpkCZUy6YMRUgXN6Q72NoNQyAdEdxLaRn",
  "key7": "5UnrB3FXWDobVirVhQw54DhsnstTPSaj2Tzhj4nUamhPQvpH9YTWPM4idfnNMpENBAnKerrHPc5zhmRdspFU9Rhv",
  "key8": "4q9Uknoikz5GAbauTr1qd58gqCqEZo91xwHZ6kxYHpcxC6eAKN2JPYPwzjHfFf39WGgsVfBSW1UwyFgANqGM4Dwx",
  "key9": "5pSNpzp4cmZMQH33cJRX5tZn3YJo4pL7RkS5eEDdjUyyeS7HsMVYArGVxoRSxQZxV9WfTDkSybYaqLX645FxfBqu",
  "key10": "29DVNUvARefaf1yW7LW6v4quGyjxiPv5vkN3TiFxNJp4aZJ8uV6YgR1nfwyQqQNxHbK1K73ZnSPhUnMicpsd3iEi",
  "key11": "2CzaZaaXKEY99Yn3CnUYbLnbgABmf82Tan2tn8NU9F64urpkP4MrJrvb1pwwDKoywq7Xpx2mDGDsndpaBveZ8r2R",
  "key12": "3rSgzLmkqww8618Nkkx1GRJJvWk7it35roDgYEFP1jVuiAiRWHzCiwBn3h1xmHrQQCaydotqRf1cuWp1V5WfdM88",
  "key13": "23GiRNZdMbUBFe4QFJ9n1QyUfAgyuZrtrvaeY4V1cyWUFU6KVAjfZeMX78ZSrNyo38VtNDNB3fYH27WuweuDjDcu",
  "key14": "4oe2SaXZNcV1gGZ8w5u5DG8ALbkfQjm5GTEFHNpmQZsTnRPDmBGQ7StfPLHjZjNfnT8kaBV1p3v9p6HspWJYETvU",
  "key15": "2nyrDPp3kRtN3QpgBzi6Htz7BMbyXYfmWkovkXDprqS5qYxw6RRqsPuXKAJnDfLQ4fyhN3VRqLFLuEGiHgb9vQPg",
  "key16": "56y8hKCe7abAYsBKUJCtY37BiDTwyC8Auhvuc8zAsNWu1xcLCJbtDrgUGcTDdKookcmEr8LTPHNSzN2MC1K4JEkk",
  "key17": "Hu3Yq6Crbg1MNs96o4toopvhgxoDwXEDk6FcdS2mAHiKWX8upgsWTQWy3fWVGXq5p15d7vKGUxyw2yuKcT3U9ru",
  "key18": "h9DzNR8evgiAu6RnYL7N5g21sKPFTYgWwcc4EK5YtLrtEWCNp7r2qZ6g5Hiv6Cmq9yUYsQxCFCHckt69kRfRqHY",
  "key19": "PGyYivR8Qa7aDhFP44P6UskhqWcqdBenkSTBZXRTrz6VugXeYCFve19r6cu7TJgT1SVhPAJL3M1cpkXQxsqZZHp",
  "key20": "3fyacz2AXdz1hZCp1wvUNXUrYTG5GdF2mJHdxFBney9bj1oAb7PyQiZjEkod1MYQsnESUjxWcpGyexEotD9i1248",
  "key21": "4YFJgVF5ajva9c1tHp4H2ojrNcyKtEEXQJgrArYGsfoK9jTTMbrbv39ZgnJfNCZc6BkH9D5FEmVzVRbzMNopLMxj",
  "key22": "5GzbgxMmMhDM92DjeudEvbPpTTWfRVYCYLyzy4RMHCSU54k7ZiLqkamQYfE5nP5j3JNbSUM9Y1M1XNAz8BvKWfVZ",
  "key23": "2aRkWirxtqqwQ1FsGH2cEnwFDFnXYThUsTSMb9onHKMzgzCADfZE5fdEYanP94u6MA863SVmkttdfozWDuft1NW9",
  "key24": "333rsVZ4Z9KmA58qoxsTjyZGcFJztNzcr8A4k6SR1WTEL5DGSSLj7txZy5rRbNZfeANW5YqJKzJkv2F2marqkfJu"
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
