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
    "5Q9mCMVNxRjkLVQd6HNWKaz7Z66Ms2vxLtmsmtXEAgUpNGRTx4Ks3cK3QvsuDreZViPBVMMM8AKU1UnpJMnkbrzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hxVFsUxSm6ff3FkC6ofR6qVZKJWKTPySoVUi6i9zc2ttZEjWwXWtm5Aiv5rCmquAviyo74Rg3pCNcnUL13AipRV",
  "key1": "2N49XF9M8SM4t2DtxsBiNvAEtSxRHA3cx4tExYyu5efxSxGriAxnTdb2SY343gFxZRrrCM7FETSorjzSch7X8u6Y",
  "key2": "3iShVJaAQ6tfLdJQiu155GXRSsoDaDUkt19EtWEKCW4SznTwcrcn5yVo93WyTPUBkVAw7r9CP1dYNrMB2c91R2c2",
  "key3": "58ZHtC377NoY2RWsxWWF2fzh2jZ7kLL9QngWmj3U3Q5stR71wqzrFyFhk6DzEz6woqSXu4a7xt1UGpgxZcTm9ouU",
  "key4": "3GrM5fPrGjLcaidS4GczoC89uDmQ63z7AJUMZ13Mh5xaNFp4dxicoiiaZWWgxhD6jvjzqBWRBcrmi7rmgyy2sFSm",
  "key5": "4bkNzVZFwMm6zPbCQs26cumxuQ5ikA7uthuDXxnHGv4updtt2S5ViME6YTnfKVweCJo2Hprk1SuYh64sPketaJBS",
  "key6": "HthdT93USy6tVdYUALmvMtMCsiuw61UKhag9jjar3BQTYWz61iKSpD2BZ5dxnWkVReQz94M7yYAnjz2upGy6ErQ",
  "key7": "3REVGfDfy7anVeRvtxRs97Fx8zcK9Br4h87WtvPv9aL1AKougP9F89sijXe4ZRgX24Jn8kJ9U6cgWDREHULSJHJx",
  "key8": "2wkFFiHDhasZeU43bp3UGL2pxMaQrxZBVhJGbEWJMfpoLGBUmrz7ghhvY4R7ZmdGwPzceNR2ZZvF3J3JemdL6hho",
  "key9": "YaLYS3iKSLaCCuA5i1XwZc7dnH9hGfkdWUtGHyzCN1GGti3jFpSRWXMZ84v7qEtc586CYU6b36HzZDUn1zkV2Cm",
  "key10": "2YWFPTSiMzVZk9nUzg1ctF1jYo8nQ54LhAFDEfhgK5UwoCqh91MBAeKZiQngHqkRdmgvkXRZCyUEeN9QqWVXGVrt",
  "key11": "5CJPfKRoWXD8EtACNyWFEG1qd8PsownhGX1dKkgZgKXXgbmKFDKwhZJzbh7y41Vd9E9RVgdP928Jv8uA7Ypkfagx",
  "key12": "4ET1G1MYsb9hqHyLwPi82cojMoQfzpdqsZ7cM23yTBsLqn1rZnrictyy9U26zS9FgZ8VscqYR6iUXXS4WDpct4ES",
  "key13": "2coQWHFMyNZkZrwH3U9zXogz9bG3Qm5ajxx92uP73XLjaZv8tJR7rc9iP3P3g6dLvsfnmQEz15WivJZAXHAvPuA9",
  "key14": "5bkDdYL6rGzq3sHfPCgue2zY6HuG5WKtMehCLcps6TkdGCiySuhEtNZsbdyHrkFvQv2YUd3J6e2PSCZV5mQhK7Gq",
  "key15": "5WSv9v7x6dKnLTVB83JQxJ655FkiWiSuVo2PKK3m7MUXTgXHBNhR3cmsLbkULfE7RM9AudhATZreRQN7p4HedprQ",
  "key16": "4bFnoVLEkuTN7w6u4GmYiG2ifqPCNSEohGxVYTVrsGGAmUqAH1w4Yn6BHx2GoVFn1Lcm1kNf6uSm7tpd8xwEgE27",
  "key17": "2Yvvhu9CTQX89mbjDHAyif52pr5oU8QeGS8u5K2sVpDR4bu6vSSk3qRQXgvXV3APwEBt5UBFfBMmDpDRVbes56BB",
  "key18": "4ZzC1iXEDveGgqmTQwdnqNXRjBDCjuV1uSbQJXG4vZEdJt1cKBtXZ3m8NssvinJYjVJAHTK5wCRN1TaeNHnZTs5J",
  "key19": "4i1NbEfEnpGTjygKkXYphVkeu8a3WXXKpNtVgFyo7Sj1ypmFVbFbmg4MszqMYzWUqNg222eWnG58UjzmQeww23Au",
  "key20": "5C8eEJEUi1tPHrXqAfa6pC1zAN374PRnNWbQjc52N9BTS8TdiRFdRcK2qv1e8dwfhZoYTfDUWM18FYmNNEyehanY",
  "key21": "5dZWoWkosU789fH336wmREFh159w56GhdgtApjUwEniXU3m7L2QY7ud3vaBPVJbNFjS47n6fQzwpFToEjTig7GZZ",
  "key22": "iUZBZpKBPe5HojG77E9Ki3uCRXrYPcayePpTcnazmDjzVVcjgDoc9JF5Vv9p6c2cgfTqRy5GXi3Cw2oC89z1UyZ",
  "key23": "2mrehjii2cJqynZSqr67SX6ngeeQzpbFnAmEqvjWo2Ba32Q7dpfuBHYVVRmKbPsbw5wVRSfPJyR3qHcJJPManngC",
  "key24": "iZiAuq386FLBwGARbX2XoHBPk9K3s5PmahHD63PWGCfVhFCTTv6UrBtyYqABZ1zDmQhp5hFqAZqoVL9AJwD7rDR",
  "key25": "33aEeeUhQuyM6Ezs1pY82t8PaJmsCgKsEDZMAjRBepVQahMjgiBE5RsuNpj76aagrCeH7vMchZJ63ke5Jb3rjyca",
  "key26": "2X4yPzaeSufRXUf6LEG5ANm7v9VP5jRgca6gZWV2iMqtBmQUG6KGzbUXFWCdusXdXp5m9DdTDnoPZTE56EZt1P7c",
  "key27": "5waywYWYkRhMehRzfLJGqVkDMDQhZR5y199SmmCDB8vnty4Nxvo4MHZfnEJBpvidvx7km71sn6spsKFJqVGnw3rL",
  "key28": "2fs3jKovLoWFuQXbYy3vHGRgWJh3Ehp1cPQ7DQbfh8JBZiKP9JDXFDnSCcGf2LEEzf1Huq4ayeADwAznwST38DJJ",
  "key29": "2Kn3Lvx8TQd8mwDDDBWv7c5EJaXucP19rPJsZmkiEq4vYrVxzgsodc75KXsnFVTC8KGLPfcbbgYPG2gH1YviVyAK",
  "key30": "4aWRmV9ECnCECsjuL39qAs8zz6adxHEsE5pEU49vjxeebkiSpQGjmzMKT9TXpZxRWRzxMdkBA1nFwuVwiarqigfq",
  "key31": "343v6vaX3Bg6cd8skkYAYmx5xCQ3zYe7kAUKU4U9imPG1DZXfa9p7VHaiYmhrk2WZwLGGrhtF2ccQfSkCBqHFPKi"
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
