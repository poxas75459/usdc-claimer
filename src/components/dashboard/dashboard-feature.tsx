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
    "2txMNeUPZwu1pGkeWbqoDZ2698jzhgUzNAJLNp9unnPpJxcWuxatsNLXnxwmh7TehxaStxC5Smw9iRdyoa9uM6gV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJYYYGREt84VkayywE7dCsPVdcuFgao4sSDqvUMKte8SgammAq92Swwbku74CPdhRbx1nd7mwxvFjsrCj7cFmTn",
  "key1": "5KhgWncQs7v8RubD3tPAiiCsmaUwYSJ5qyRtuY4XxAdtkS22MpEoniouqngY2MCudd2Hrm5yaY14ZmfMRiyQZdDU",
  "key2": "5mB7hga1ea8FHA7iyW89pbaLRBuo7ERKgxqUGtbSVYzYEavdc2ncNPYY3JzkCmsc2EdQnwXTkG5RnKHr9dr8djX1",
  "key3": "cBdUY5RJsniwftS8A8pNuXSKxHuQZfLPWw1TG1MZHBYjzFKf8B3zJFN5i89siRdX6KsVFCdKWzTNRWPwzKd2yR2",
  "key4": "4DJqJ4oC9HAWU9aAo1K4aJV9j3W9aKRkrtnTjk9TymnADLZcsQYDgu4ZhRY5yDgTbFxEskCToAPWG6La8b5dWG4Z",
  "key5": "Tud1GAQm41i1M8GSsLf3MqkNzAgarCYj1WyYCCMDZXiahZVcgxxZ4dKQvKN6vNFDzK4qUDv5Waq3fpeYMu2urGH",
  "key6": "Wp9bddCD1eRxDVQwJuKchyn8dPxsKSuBL2HZDehiMBPAymuEiM37J1EqE75RreMp9e2jDZDtmZ9wsTxJwXgAzLs",
  "key7": "X8LGvTSqD4Y8zWuyLD66HNkBWLsc4m2A3LuKnxWYoSZWRTBt19aVzgTTbzyAYvimWsvPgwDsEsqY7AENrQzLAmX",
  "key8": "5Ej11boZ76Swtm2vXwRTTnRspWFfxoeP3itmtGSk1ERM5c7B4kma4KmJJhqaPLyjQHpvHbo918H8j5gaZYbKXzCc",
  "key9": "qsMwqxN3VTMTD1H1DHAss56E5eAJPF2pVQh1kvYqJxDGa5LcRaNSJtdVguZ8R11kYZFVziRUsnL43KGDuXf2upu",
  "key10": "5dRB3v37bTdntFjx8V2qDTiANo1oq7mXF1LDT445AeSPKtx3a1U9LzhSaHAkL9s8ahYwom7Hm2VBvCkpUweiHgbq",
  "key11": "WfwfeuTnHNM1Z471Yx29Hns9SFRpbhUMc2LvnG2bDb2Xjah1HhjMHRaTtknbPS15TVbhR6qGQkHrYgHV6ih7wjj",
  "key12": "4ivmFNVvs7m7LQyiLzK2oLjLwktmecqiL75ZF14WtfwwQyUK5iMACBeWaUUbKJYPDNgCSQSfqTgUgdWYRTzGjUjk",
  "key13": "612QZrT3CM3GvgwhxcVukhiYK4w2i2YGv7mAWR1TUndTTX3UnwoGAYBbaEvQdhBBLr82js9GZ256tw3qbaqCDj2B",
  "key14": "QWNkxULdfUUgDS41n4aqHLuXfNqTm9YCPY2NTyRTevHBn3ceHqeNAmUZPLJMriPhVQ4XEta2rXwPkRETshhe74K",
  "key15": "3hxWD5rexZT8Am4J9cU639LsdJg5DR7oUQe3uWfTcND4k86G2VQSQQ5uZDa4EwrvhrT1PMEEYKmN2KyMU3HgoMT6",
  "key16": "4VinVxRkAEL4F9peYbPcEyetKHrEsU8fVaEwbXj6a6zWYizFoRvMomQgo6jgq6Z5tCpm9Wbcpu8Jq8SF2paBFBKg",
  "key17": "4QBR6zd4G49pgehJyaDzFxisw4VnGu6PXfmAFuzzoaufDckaYUufGwfxGrHPNWEcM1pd5FiB1XBQRX94RizaTFj7",
  "key18": "2wTPM4Wj7xd4kn7fxExBg5TU3CnHfkYVH5RH15pLaY6nKFF7gZaKSyg4Hyu2BnKXDj4tjbXLqf1svY8E4nXFXt2S",
  "key19": "2MPmBoT3sArhkhgJYkP9aQVjhXvWMygaRowuaRxVWPbkjh7Aq27H4YRi3my1wYbFxiJoyh8bW4HCcsvgbkZDZkST",
  "key20": "2G33a9xtwDL5iX5i8msSmtpV6U1eWW7PaQevdTtB3UMqNzyQGFXq9R59BKMeLPw6cr8znwL1MMxBtF3a4GVrnHuo",
  "key21": "4iWJNweaPjzygEyvm2fZ8J8AQ4TS5MTBQJRQcmcLNE6A6EqZcGxHquFkD9r58kvUhSkG3r13SsRepUjiDKqB6Fec",
  "key22": "WAkRxtnFd7AMd5AUdQC6fpAzxf8pCtb1xbk2ttf1MyeqLZnxKiD84xfjwHsiXAv7LSxGxVaNmk43qESDQwsKR84",
  "key23": "3qY8eCgTQQCUjmzwz8C6nxWuwpzGgfM5Qau1x3srdMpTLs3eMrLwKzzRnx6qPSERV898wbgzMhUAjxiY6cVXd8Qa",
  "key24": "454ygMj25LdChSgqEUC9Z8CmX9nck6zTmUgsT5g5Rs98CECtmdTfMKsVDrGPU6gv2FjtiosNrJcbXCF5yU7CMysc",
  "key25": "39eWrbotjo3qrBiE2UJEgmzBAZkhG9DwoAn4c33SQ5pjKZk7UzsRJEtFayBNSD9esQ7wYc7eprJraWXnVtQaMvrW",
  "key26": "5iuV8sMkfYchnBCoynUHsFsLi95K1AvPFLF5Yx8ZNmgvUe414KerZt41MVThv94ofWZ2MtrkU8gzfZcWtEnR4dr1",
  "key27": "N7u6e6jbS2ZFHWZGdFPdzh86SfCsKuhvJeKaLwJDBimQrryzY7bRF8t7NiM2FptvaD3R2v2vJc2dW2x7FrjV66R"
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
