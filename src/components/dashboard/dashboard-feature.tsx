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
    "phwgVNpEhM4hHjKpqgQBF4vPCuAViN1gTSaEJEvsyUbZE6boai4iWWvvPo8XFip8wa2Eap6ZmfXSxU8d8yGusKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oQtPpLmbibfCXmn5jjmxj3eWQ2JuzASy8CCHZJDM4dp9fFqkwrtGy9su8ArDKnEAkcS4CGioCRXVQdnefv8kUh7",
  "key1": "5RLZu3anMtYcTycfngJfQzF6HGXAXn5DXxWCx8ucAY7sX4x1kVHJKK3cLqkBXrWVaL5pvHshCVthRcKKbQyJXNGG",
  "key2": "2aKUHzFnawhA35T6723qeYim5wPFpSGtBECd7VcNdBqcfiQww4728t2CmvaEtpR9zzq2mcohsDEVMvktbEUbCxKw",
  "key3": "3DvYFee9eBzXczvsFsRFdwiETZmXh6fQcNDWXN4THMUkmUjhLwoB8EhDgzveqn3WK2FCqQSb3zAosPTJ466exZcf",
  "key4": "5WnJgTo7x1bAqNAnNsUuy2A1feA3oGS3gsJy5fmPYoAACmxytpnA2vC2Dw7oQksnxF2uhwUT3b54ejYcykeKN1mS",
  "key5": "59yd2p5iujJtgEnhpSDucqDwEZJHRJxHbJyFTRT4MHpZjoSiiTqbZ97PvkoS3g8MD6GMwr9eEmX3EEjKKKujnKBs",
  "key6": "3t1UwNtZpceTrJDHWRXmTSqnJgwJvjNaQbgazDy3A3HknxWLxKnLDekcerZeEB51HS91S1dkbE92rHjy84rVGk6R",
  "key7": "4M6k4Wh7nJyuRSu1G5ooQbZVzdQUL59DJFgFexhvVV3NYUgfhzbXDAXToF3LKhLxoNZWqiDnsYvAfAH7UPPRS7vb",
  "key8": "3AoS4gbAWY3i3KhVEjXhRfTGY2RRYodGBpzN2LWDBHWd9k69hcG2GA4UW7M6LuHAYvoBT4A6guqmbzyaSsrXCiQx",
  "key9": "52qeLZnsj9hetGY8PErw3WB3qSXU14VttnpjKAJHas3YVJXtQhXXLUh7tiis9vm5tYLJTBGtyTsngV8PPpyxec9v",
  "key10": "3hwnv7wAsiXU42geyaGPhT9ozDkp9kfhq7UNUjrKMYGysvzTGCT7uCT32Z1EVCB2uGTodfj4EYy4tQxb4oYcXMcA",
  "key11": "3rU5FmJC5f148dwnegacBc574GSSqQyLKxoMhcowH7pna5h9sQxUyBKuHuHKhNFFzkqYpjFdJUcwtyFWyWbMrrqR",
  "key12": "4JXt11unW57mLea5Fkh3kg5ortF3NyV3e1YpdZtM4WaU1jZxSs7DUgEJXj3nUj6KjCigS6FaYYAGm2UFZjHjB3PX",
  "key13": "3JKsGwJpYjFBcYmB1ykGEvRZz5xAgmTA7ThuPF36w67AWYPmv67EXmU655fkgpDMSsLQAbBaQFhZVszZGrBHwW8q",
  "key14": "3KPnhmjqBhUhwg9HPRzmhWDGYJDMQzHtSNGMQHyKKqkVbhe7TMgEyG27ohkZfAait7ERmYdzy2NgeSKmM8WZqwQA",
  "key15": "UcLcwgKv8PMsshuqC3gRhizbcQu1i4cqY29WFhesN7UoaZTidL6bCPxayRvAB6Ut86dnWwGsJDREmeSTC76KinZ",
  "key16": "2ngave3bu33SAY8RwnKx9e1DRBYVQJ8Q3TQ4nUkBkQ3KiGForxojdeLjPqfJxaehX1mw6BycjALx2noZJEC24yL8",
  "key17": "46mvMW1v1tpWWM87uDyXVj73MJ4QUZVCmN9RDtLp6k9JvNqvqFQsYRJCRe5xPoc1bWNveBQdySMGgFCbaFQNknk5",
  "key18": "57duawB1rqm3fQ2cJjb4gWwGaUZriQXwbntxH1mgtUs1gsvNfhTAWiHcyXBSpHFdyP5QJTHsw71RwRPepcsZPdD7",
  "key19": "3bieDJB3wLKXfkwCVEMNA7LfeAHrnhzzHDwp3ULxF7q5GTRY46Q8As4f5XUQQmMqc99kPoQxXHX88aBLgV2zvC2W",
  "key20": "E9WYhDddew6Y3hNBq1d4jSma2SKDLJxBgg4JrTts6TtNggaBUagesGKKzDc5mY9G9NC9JmPpucitYmuEuBhbrYD",
  "key21": "3Woi4fjwxj2aSJ4RBS5hi7cvuG5hnvrh3kZqLX9NayFxAUhcG5m7JGhUNoLJ1eETQ92DFSA8agsZc5Yz8G6oMM8J",
  "key22": "eZUYPa22ZZhYqHDMHYQdGLc8zaznZijSuVYRYKaxb3QnqcuqEhZwDQzcq3MDhDWtQA5bh2NF3q8ZggvVjaXwWg6",
  "key23": "2Z35Z3ct8uVQiyoDbQxtgn4ibAAFcZg3m1Zkay7SE9CuxCV296MsLuuveoiS6CDNuf35UrozxvpJcjmE1RWmtnMF",
  "key24": "4tQ9aFeBLUg9hweYrxi6LBttpRupSB7dTStV4k6zmnG7VN39wW4SyCsFzjoXpHxKChVYkX79KkFhgMfvmiTdigWQ",
  "key25": "5LTB4Hp4GZUEsf4Wxt6zZY9kvANxuKGkR9KTknXRJyh4PjsqWESu8TBL4Uf8RxTQT7nQxfh7Aa9Hd7XRuEZK7adN",
  "key26": "3iyVxMnQrAdMgWJxyvsBC9fG5gEUByB722YiLNnMXwDKC6GQwADbSat3odsu7kimrS729pi5TqGNaNgTG6YPbCp7",
  "key27": "222U7Q1d8bzFbbwMhziavRBnpjk3VNnEDguUfBwigrJu7Z2nj5p8M9eVvffLwe3Q6mcWcgg5oEMEFwBSR9gbNeAV"
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
