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
    "5iCnXAgZLFRFpZxhgpvHGV56JrJkfEvtmWC1Qpof3JXkmLsSy7jYiNYzbcrAzZZxKjunvwyNbjiHZCD93QqeekJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HQxU8duWDmxhoqfn3aVKnM6r9b64Cfe4eUfRfkSBHwuRQbF8cxGCAC9rRGBoLqwgi2kwKoh2CrbgaFmJubboJyr",
  "key1": "KkYrhfWSRkitAD5XZdUyR8Vn6HW8TaKH6HpaAc4ccaosigNaiYT2t4PxqnUjX5KfTkwZLdF4R8qstEtEMYuHeop",
  "key2": "6GezadZuwkF5PTzNEkH3unnGK7k5411fewt8TwU6cMqHTV1aGteWHo7y9d8KDqLxKq9HPC8jjofZNvqAj48unrr",
  "key3": "5roJHyD4TmEPUEkMwfPvRsDR32yLfJr6kiafe9v2iUDLKdhyG2wSVkZJGAHnQBRRXsDT8PPN7xhBhGUCJS6nMvVU",
  "key4": "5KRkSNJGgGoPhrACPTkyTquZAc8tT6R5m3Y5VLZXEDzciR8CRh9gzYqiNoMyLnJgZ4Wk9mbDXpnXwPSA2Pfck19r",
  "key5": "4iAtvS2BbaqBLtDj228iE2diabCXbxccenE5CuSkRPDA2Hc7MxxJqXft1czv2U7caMTSGv83nwFANEJNhz9zFpKp",
  "key6": "3hp9US6vXw2yjui9whHG4YrtXdSm6DUTT6hDqGKqxLMME45iJewvpXqKZSsfeK8h2myKm2azaDwy6VuvJSe5ix57",
  "key7": "249ZAjJ7LmDnzMr3DW3LsUHp1mEKQXT2twqDMUAcAkoZrdgXbBaee7u3Hh81mUL7a1XYcCKiopeVc2UddeK1kxj8",
  "key8": "3A3SsY3YNXnYZGa7sty7HB1oTNBd6woY6mfiTgx8cYeMU1NFqtGZ5ggxGp2E11ajoZUrnDhayVhzryaxrZ1CTc9J",
  "key9": "3tL8j6sPzsUMfSkS3GVfnvNfENMeva5HtDAbnVWMb6xhtT9wh9JDDWLNTf8KWLmaZepBwi3PpeCnmjbMadjcZ9dk",
  "key10": "36CZBYZ5EEFWZhcbNKnaz1D5E2RL3Zyw1YujwxPGkTtHMWgh1k7cNxgGC885xHHpzL3ihCtkmvSjMQoohzdnp1jS",
  "key11": "3Gqpac5DtqJPVcDgwudZTXGr6RDTgWDQxt76a6UNXGx4eZJw82UGK14tY6dToDNNKjdmLaJnuX7kq8K1k7aQqYBe",
  "key12": "jUpv1yJnimbYsjQmiG6NL4r9WxvVUCKxMFA7LgcYB2ZqKEikRYsQNPGnVTToo4gLYjeHGREsfvwY3XpM6gquJKx",
  "key13": "2rnUezFbZsJnBcyZtkGUkXz2nNZxE9xZwJxbwmPJKBcoQeMJ1nuV2FvmWG4trPqW6ckHwS8bZNeV1N9Q7vZ4LQq8",
  "key14": "T4wNQHJoy7btzNoX31RbQFPWduaycRhDZoZHLAf1NJiyyYmmW7yTCJP1RXi5g34jKoQfGCeK4BBZqpKc4mVXfgG",
  "key15": "Zsm8JunGkBrsWPMmhghUigyfaedmjc3J3VqZ9wmWzYkwULLXp2i6XuRrCxQTcVMwn35pG1ebtCZ9gwYbs84V3fF",
  "key16": "QPvF7hzKZphzBGixwzmiqyfNLRmv7mdm2JjiVZnebyHocbZHNzQiYTYXETXwtY7hv7cBqw6xyCr5ZSStf2PpMuN",
  "key17": "QXy6UU3vggi16Dsq4a31yn29t2bDTKnQU1gLipRQpCKkFgM55jWNCekB9EUUgooKBuKzhB1bZZCCuXwgdRuWF6b",
  "key18": "5HccEZT9LU6uChLhrJWPQ2yduyeNtDtFKYTSq9reewL7QTNeaCSefiVCM3qxBcim3HFyD9ntVevKutTsdyu2dyuE",
  "key19": "4QbLM6hBTNvg8We4ecAeF54WJFD7HxvxETJYjebSx82D5Eu7TCDBE51JgovR9ey2sFn3qG4JW8721VJaYBKVgeus",
  "key20": "5HNLAPBN2d3peTEt5BPmTfV8aZBfTNWcRpx3AYAzpp1v1sTV8Y2YCyNjcCBec8nUxurTDYzMecVhqfUs1s4THY5C",
  "key21": "27D9EMGrioEsBF7D5kSzo7YvcM6hyhyC8LKTgSqdWSPYK4zFwUuFRipqbWrJqPhbXCXVtWKmxLQFKnDB4CL3dnjU",
  "key22": "HCapxwVQypxJS7Y3tbkvekYScZiUAhsKjMqWj4LQsEoZCumxtBZPDKrX4b9yDFpj1poA74twSAT3C6BEQwUVTrU",
  "key23": "35k4txZZCu412hg1Rxe13VTSL2PTkvzCaj8xVJZCzxH5xiWZa6RkcQfg5WzFKJCY9vK9HwQspgjZz3kXmvWFZrge",
  "key24": "defpEfyRnatmD5dTtZSsNbsQBPwntuaouanakgZTaZFaA2w9LGZc586Kk9wLBfNBQ8uHbqw9X8TjMqEMWojm2Vm",
  "key25": "CGpMNxoSJJsoVhepjNKctFddKGBdrPifhcnC3YDBU8UvU7JJSj2HEgZgqmTDyVGch9KdixJvyNs2KkR5S6zZfHJ",
  "key26": "4dZdQLceZkCh8PHsYDNXNJSMqu339sV16GZkFghwt4ovCL7UjXJo9PxFFaF7FsBXMuDmEXyZKLQAb8hC7A8Q1v8B",
  "key27": "2WSaYvQEo3peqKGZEuK9j3ujh2FE4iP7QwQDx815bR39x8e3QAUFgzJKXbCWrT1LdFJ3PCofUGTY1UzrPNnfYqPM",
  "key28": "4CJwiqhsSfJgCiLAvuysgWy2MpKjZaVYZBDTS248QNaeyPmwBZtKEhnawZrsyNiu9uoHkqSE5WaUuJS7uyvaQDZV",
  "key29": "o2SpFSBNFsLcSnLk9HDmp2pYnRGNi95L3STULxnmaaMfkCqmZqFBoJj7JwDSMfMeQzLhgrCq2133TaWd1VoyjTB",
  "key30": "4ctkpL4wXzykBFKa5qYd1LJM3RM2LxYQtgTF5Dk2HAVwQ2DDLyzGi3VebYuo4PHZNiQW9k2SySXmUfdvnN7fhZ1H",
  "key31": "3g4VCKAxkAZyqjgqyXNpdp8qq4u51PTdTJ4feqwcnyg2VE3TTm6coj9JtL3v3zgam87wes6HUxeQYCVjwYb3Sw87"
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
