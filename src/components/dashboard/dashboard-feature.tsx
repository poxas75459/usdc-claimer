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
    "3U5XbUE8z7ReHmTj4vz9eV4bZAgShJxfSQmVaxnqNdDwongjaB4xdKVjejKdEmMjJDybNHSbfMHFixpmTyEWc2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uGWMMpY5o5wo58qHwbJaxBzXWf1QkUUpat2G8bN4VqbMvDDGQ2W27HzGSPf2RvtfTrRW7jnpQ7qdRBQLRBoBgLo",
  "key1": "3bMsVJnGmqAWivhDJKZf4yqTcMpcsrboXqC9EygmNTLrfvdSH17b62BGKTbzZ15eqvn7uSwinrhWp25cTn5EMyHS",
  "key2": "4bo3Xi7bN9cqkVeJxqY9rb3y3BFX14kLADQQxiazSfNC8Yb5icR5BPGj3wyaVcn6xuSHKwNUpeykr7usLmAGV159",
  "key3": "5p4GYGL1ZvPB52vTHt2JFgv4d83szzuwHyszeQz7RNw4siQoUZSMeB7YFKzrytMSpPtPrGQhUyqkMvshgDEJKQiE",
  "key4": "345ZTpykMe2hB6sYA9DiGWQL9VjxLWGvzFfmYWcEXcPnApNmuKetaF5KifGZiuVyNerMKeTZvvXM9dHYnGLaxAyH",
  "key5": "2LDvBjDnJgc59RvH4U9ZT2WRdrpVBMKhL3WGWmXbJEFoLoCqzt7thzweNdjemTqKjmjXp3dwxP6DhsVVoHbLsqej",
  "key6": "3tccdQEYTaHhxtBKGnU7ydsLv9RZggun1Pr8jSfT7fMr4x1Yz4KcPVGdLU49XpruT8iAu4UhYsSNb7UW6TpxHxbt",
  "key7": "FJgE77gmjUqYxaPQEq1Bug44WajkuZa1e5HNByTPH8rTgSvY6DXvL3KNvMN1vbLH9UZqkHBrGtnqPQSLjdAjcQm",
  "key8": "5C3eQuSesuK1pmEJTT9TNf33KaVWgDbi2Scw4QMj6kFUxKkLDefF6faKjPXAgszzUBLLdi3AG9PZWFSFQNZkK3pu",
  "key9": "4PKM68edXYJKYcPTVJeje1ngxZsAgY4JhBKVUkJNLGCucXxUACuJ4q614EKX2QXGxpxbBvEwthLMevFAUF7yCKQi",
  "key10": "4h7Vj8L69hYhs61V4qiRLAhFwqonAvJFL1r8EZ6oLKpHG5cBuCSzJ5LX3LsKjnwUL4EucmNqDosFtqAYSafwbUK3",
  "key11": "526uDpC8rqwDMjkhFMbXYBEoDdaqcCf8Xsyx2hK83ApGHfZ5zehHarZbsLFhxJS3fKtxQtF3qYCc6srp7wkpWmo4",
  "key12": "3zHPSPNRrnEYLk1CmMFcvQJxF154QUXdq8xaXmWzrNxHpRMHx7rcTshWvLCpvv4jR5DSBj2vw3vQGvrwZedSbTih",
  "key13": "5aZFaJC9gDaFrYwkzYdGaPFp7vG5ZVRs5tUZNcwYaunLuydfboajEGquHnfuxxpjfyoN3DRvGTzWCdmjicKcDQzq",
  "key14": "3saU5FKrtajBfAhBuikaN9L1TtKUXYH6q3vzTVL1XeMkVcNHaewYWNNXzm5wvrhkLLPG3cq5cM37w1FHGXUGT27R",
  "key15": "2WjTjtfYKAkaqdrz7k16VKgKu32JMrcS9x3s3NK4pE8mJe8bcXaMW41MtSEXyATZt1AwMFAYis1quLPpC9jzpLVb",
  "key16": "2FPxc3wTdtnAUTc9kPu84DA4oj9y21b6SV332BTvNKQSfspACQvff6QnWKeuNzw1keFt5dg9boRNbwEb2gq7XNJS",
  "key17": "4U7vQh5joC1BhbUXi2415JXztp7428NX83T76ND1m1pREniWST1pw6bMDnPhoNGBfyEXkNSfi8HLz3J5vjWbivHY",
  "key18": "5yL7G7JjUqK9PUHBM9dLHvoJpLTbFoHfVcXs8EUBxoTeKp92N84deGu9XozrxW2GTNmULvNSC5hkQoVfC2L3iUui",
  "key19": "22m9476e97uE55qWm1r4AbsVJ4qcAVLfTd7YUSHk81qWn3JHA4Gow3gzKZENNDNW4h1r3ZPgZybLbDsMKJTBMkF2",
  "key20": "2Niy8YxARR9aXHUD2FGQU6vYFgobp3QWXq7aetgL67ZDD7HDnhSDss1iiZZNSrSuezaApX5HA3iRFatGLT3WBSpJ",
  "key21": "64jEGqDNvCnqi7aX3bTQHCEDAyyHKAeAyaQK9p8XkJX38BxJGq1Eew39qLrApJgoYQgvDSycVDxGCyYVuCt38ALs",
  "key22": "4iVvaakX8RZTEJSPPu3bX9NhCkotZVTeMEnNmdPh3SM7NNUn5NLNsuqE2mGQg1xy2oTA2XPZ4pdrSWQwzwVy3h19",
  "key23": "5FoRXyZqt8VfC9R8DidmfJu1ewjNeWciRHFUeNZYZ5RgfLfqYcxp6oiXSWBezuGJztqivfLBMMwqnUASGHhd5kuk",
  "key24": "oAQduaYVxruH5cuxQVg27eUxTyj12ERS6jzhopnDF3LYST9TJsqBn73u62KReFihjwtudoGLk6hiYH9vTFrhd36",
  "key25": "4BxBgyXJNFQTYXKB3VvUyYAZvPpyAnPziEZXtNhySKLfL8GPk9mpnqLtdeSEB38uNzbSBrsPWeiMnpCt3utzNgjq",
  "key26": "5r69HzU6YUSTxQqnPS4hBXorcsqnC43UsfpGPn9ZMA9GiRZciyzT7KYsgaFVGorEv4mHvgPxpCaYV4zsDU2seEZh",
  "key27": "55BBtyckkEXMLmhjZPZFgxn4kG1bu3754G6KikdH4FcYDkZ9mvUXyeWz8rpkDbSdw7og2FZkzRzHed8vVYHx6C73",
  "key28": "3WsUqopLDXcJcMaCKeWSzJEb1sremYKsy4YWh5kXJSF1R8LgFZgv2ieWDEZnLkPE8XCx2xcuRsni6xUbu3m5draC",
  "key29": "2zvYmAsZRg9fHTZomkmopSHg3UCHdLsUT3UwghDDLPuBhTVPVy2V5fpo1tw9dj8z6z4yGmp3pa59HYrzkPVXuht6"
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
