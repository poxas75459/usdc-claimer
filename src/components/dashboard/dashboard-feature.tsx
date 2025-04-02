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
    "Fnj5xYpmhy29f74Fa5ydf643kADKLYBHYqQ1woS4QkqQDreGoV6bB6NtmG2bGRrfe3jx44cpXGSiRX5Q4MqWcQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41evufvejxLVeQm5tDtyPJfaq3LeGu158YeQov4KnuUoiDy7xAbi5zZ3crAzUd5u17JjyaifyKuHZdz8oiYVWzsF",
  "key1": "4Gew7pyvfbrTaSru8hCbCzAC9bQwQ77PZQp38mxaaR7rsM4RPtZnRQaVaxWRDLqQAD6NLo2dWumJCjomcJ8q2M1z",
  "key2": "5fjaxXJNmoah1EUBY9aiJ9U5AQUteeQecP43BRiv5FxaHx4ccCqYtKMQEyL76LGEx61JC4WGuqDUMyjRdtwd86Tb",
  "key3": "4gHtwwrJpnRtM7SkbKWRWnjm3yvA4B6qJ13UqB9Hi2HSwXFnTQf2dBhKB8PHjEHWdXWwyF3hnq5ojFoFASXrkkNT",
  "key4": "3wFM45WQnsPEdFHyZTamRawP3yP4pwFUCC4RGzXEEXD13mbiBwqWQudiXDen5mMbgUbGi9zEjQq5RrRoXqmiyCn7",
  "key5": "3ewqLsscDDYBJb1H54ftzoauzgGddB6pbLPd4WSo2azsABQTqvzZ7j3CQsGRMv8KwNYe42shGVqTyvELYvPK5g6Z",
  "key6": "Pw6eQfKXXFFrCLCwZosGrMqx6izPTbDbBEGnhMaQU6xUuHXzz5bp2r7n7r5fmSrdz2C1WVJA5jGCtNTQW9wZwGz",
  "key7": "J8QBBSEv9xpKjhekodgRY5VcrtAsvk14e5fp8HctYyEQiCvhgg2nQQPP4GtvsmLpSU2zoPTpYaNhfTFG4yK6f9m",
  "key8": "52Rs3wPpqZu3xK8RKx5gMeC7Zy4YpDjSvBJtDnmCbDYVK2P2SqHcJYu38fyGgnUrpapnDoS7j8kFSH4PzGoyA2Xf",
  "key9": "2BLak2b7dvEERKjewUynPGY1cJmDvThry9Z6EWjggiXMLUgk5ds4gYoHfkGQ8BLt4v3uypBFD6ivsJPPMRViNc2s",
  "key10": "2BmHKRrQc87hCUCoive9GwDPX4EvGhcqu2W7WfB4X2xcKBMdVUX87xtD5QJuxf7cPCu6uyU1jNtVNhUei3BU7bkT",
  "key11": "2yhyRMR89sHuxBh9wwty5u63gK6dKUqgbDo9ErGZgagkZifLTEDrqPwVTEPA3Tkb9wS6u7v9ZnCs8QJMRCw9i7Co",
  "key12": "358js9TF8ZZ5jRy5s3SNg7fKbQ4CA96F8BeGFdiZFfoYTFS1tjNpByLDX3gD9fynVBEs574XB4SvjUha4FQweUsP",
  "key13": "3ggWXacbamaNs9KaDGAbZ1UvuUPvbWeADX9RxLyHVFHJgvrJNyNZgkhBWe2fisdnoggh7Ltp2VM3PPZZ3ZDp4iXm",
  "key14": "3UrcZMvXExDtBt8WGYasGsWtxjWJaKFncuFHZHG1JrUce3sJ59BLR27NjagbwR3ksLpq389aYWT1ia5UNUdjekU9",
  "key15": "4msXvzQSRqfc7dMt1fUetC27w2AjQf7DdRHz3VEL7ExogAPv9ovpzeyRQ5vwvRxa79Dg3YvP96uaSWgwPt5wS9CU",
  "key16": "5LLZ8aytfYTCVuDy31idnnnw7nZaovsfVFsMqgWyR13gSMjj5e1dxY6eWd6vFy7KbSGrrLtqpqA6wMSbdUk97FDX",
  "key17": "5FdMp2SURxDQvUReVuHgPcSTChCrotBJmBWRdBUY2mzSwPgsXHtwiNeAgrjEoLQCbhFoLmjiX9DjG6LTXPg9mgnr",
  "key18": "Z7bMDojaRgaZeSRCF2WgU6e7TxsSsw5Dds9thYBMME1fK78CeaxFDz5Le6zHEEaqr9pu6WRjaZwbg1ZAmexUf8W",
  "key19": "3vSGoNLbtaScuzaQu5X2exz7Wth3G2v4uDRis4UjNLvuceiR8cDNseeRpiXQFZ7dm1qPMnp8EUmHcF21p4GP6dDm",
  "key20": "25g9Bj3QXRTgh8QGg48sPMx2RtAGEJYqAGizAoesQvQA9b53SvBsiQ5wRvbPWTspyfStaCMXrfFNMKBM9k5eyZjn",
  "key21": "24LZX9exD6w8jFnJktQYGg5Ms39SpKAyHkvVJfgTF5YvCo953k6LuzvQcAydLVXsRycBFrJf5oxT5gmFLByPhBAW",
  "key22": "2NuRzRfFDeXAXQqurVjmuJY8cSyayu9GvwYKkJ75WLTbxU7ALYoyvCSwXkECq9aipqPajELrLiorRzYWAPuy4ewx",
  "key23": "zRnG9Vfpj28pPYcSeCSvuDzC8QRTfUb4ifTJEKzz1ivAp44VrkwLWX3DQcAUhGtWpiGsyexdqwko4e2SGKa8MH6",
  "key24": "2z1J64bPKesh577DgAhfq1AWp4xAYV5Z6zuFiAAM1t8rJAVmWi9M14iYDBrdubopqTpDsC9Na4GWLf3ymoXoyET",
  "key25": "4szuMjG9f1UPPvrwBEna4kr5FT2ZzqahqxU5m3yqgyXVbTtV52nkH2CxNBjYVUqM2kFqpag1wcctGd79xY6Zk2c1",
  "key26": "PR7xHA4u67E5cX7XaU8oatzhrKwNNMTWUqhSex7tAauVU1sz6AKuEduLbQR5Uk1suen449W5D8uqaairHT4BS26",
  "key27": "3aQSMNPzntVqA9Db52g3zcXTAkfqaTjJhmw6FAKLi2sprhPnyREL9RZ21YAdtknfSseoCqHK9ooCr3dcS7sPAvmY",
  "key28": "395d2toEPaSSERZwVjYCpVYVbP8PSNzjmNVyP9DMfRoESkcRDNXDgxxfo14JDkHfyNquZcVm5i8C7i9CtjJcHnbM",
  "key29": "4mX3cRRqxXx6MGKftk4DarqUB6Dwaok1JNv45i4EwM6QvLmJdU5Jsd7HsmHk7dcDxphMSaHXCCNf1Bx9FVLM6bYf",
  "key30": "4mGF3P4YVVc75fu32mxAv8j1byaYxeZw5hxKineqgZtZ2fvDXC9UuKURgRwed3KFEbG9pW9J63DZAvUCNxduuRwN"
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
