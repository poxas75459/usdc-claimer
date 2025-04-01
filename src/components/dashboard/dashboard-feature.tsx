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
    "573k3pimaKwEUbr6sCzikR7VkgmrNAvTSZa9FtwPeEq1hGcsR9DcBsRvhnBvxr13YvrNE5A3qWcVFrxi26fwuDua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uubTRaFga9QjQdr7FVmw2NDscXn8156MTTkkdF3SiSezA6FoKUfX56DtScQLHWjDm6GKyZKvHqqtUwPnoFriESZ",
  "key1": "3w6teTF1kCzjeJ3ekeCnk5yLPwDoUsVTTPVEMDgvGi8fD4iUC9WvBB6QkcVuvaRyRe9ov5mNB4EziDyxhr7EW6wT",
  "key2": "m4cVqN1qvtE7aySzFbDi2Ukej3dVmbDjUSWh2vjW26qRs3f1GEiFbqLHUnujX5aMAPyT9gbDRYHzMFSa5avScrp",
  "key3": "4vFWjE1CVU5VZxNaBY7GW3aHAJQoyjgCesUWyCR3ihhBmF3WDur74U73PHmGDo4qpmqvgzFu5vcEtGamQ7YuymGZ",
  "key4": "2VVufPZPoXQm7WBimnF1waH5yCjYwoJ1FmgeZjepGpMtRo2ZgwKtBQgZDyty2WKAJ95AZNjBSeYkogMbQ5zP37ST",
  "key5": "NYHDes8aBsGXfZxrQJmMExfukteFTJXD4PRki2oWJAb2bje3K9Mq18kTeL9jhQQpjtssgbKCYmcUbX2ad97y3QG",
  "key6": "2RBMLZWRykggWbtMwcHZec1mPosyntXeX2g6urWBrSTXTgCvhcqwhwjiaj9BmoeGq7KBtQqZkwiZ3a6BJCPeSLZA",
  "key7": "63aLDiXFT8yrH4eUmzqyQQ8479JhtbfAKzVcf2xoymVcU7DMjg9WLUxwKxiCRc3FQ1qxQt4odJV4BnrdBVwA2ntx",
  "key8": "5ZkpApneGDinYVugU6FQZebVveJXdLQWVYA5Hqo4SjELjhpFyGXr4qcs7SdyHsTeP8b4hbffyE5N7kyF4fZ23bDX",
  "key9": "2bMiPGqkAANjnR7YYUGwxQ4ZwzVWTypszFv7UUceTZktiqadgtJ9dtMhbyK8iSfokMwj7N3Rkviaf55jsegH3V81",
  "key10": "2hsY2iqog3M5Pnsqpr1ccDZ5Cie7XDQ8WjF8m6f4jL7SnKZP6zUPAckdvzBMpxxfwLK2XhK1vJoyhqGqg8uwMWQu",
  "key11": "UERC2RsvbrD7GPZHjR4bJYJz9pVBmiSyBEWugteychsZwYm8LvY9hSfQw3gW7h5iSipkNcVoHMEcrYRMeYNk5E4",
  "key12": "89GcEKzchSLdXmNMHnqafgv8bDTaknC6G6YcerTkTL4ac9Y62rVZNH8xfU1Fv3gcpUVvb8BxAdMMWVcy9GoXYLW",
  "key13": "5yyUKYUf9HLgk9uyxkykxZyvxiFTyH1pTyHnDRSCTdAWXDBCf6CeqYm1PJRA4zsJMkPaRH4225qB255gD2ti5Kvk",
  "key14": "3d6YuVDD9RYq1k3e7skpEtibFJfWvDjRwvmXQDKECiYyPgR9YbERSv4WKrCfNip9RV9hLCF3MoCLA7998CJDmLvD",
  "key15": "3pbkJKBf74eCx9kaAECUjz6VjHT3pBo4UqUxpMLrfwC3X5FvjLCnWGS8BSMmRfPc1zuKRmdYjEsYWcQu9jqyb9SM",
  "key16": "3J3hFMyVL5LbqdknTRkJxkSPFzGRueuEfGgs6YAfH5Tobfdr1BQArPBsybw2M96hsGVwqvDZsTB5L9xFWYAypEyn",
  "key17": "4yXGLsfWCfRTPsviEQN8B79mvmkCvphFXUWJ6zzam5RCDh3nk2C1pvtQrhsrUbaNqH8oJhr6fn8tnePEFvRv8tTd",
  "key18": "2vZLzurTAkzeJzGJT83zmXbMf8kBNd2KM9QZY7Ys34m7m6y5NdvVradMy7TodWMZHHCNjbhqMQNyNoHKChDgPQPD",
  "key19": "vB3L3KMcRZfDd1pHeQK6whPfT4abGHjqP3jaj9WQybncFg99UxcL3rgEZsiTAVLegAqm7h8SqXwgSGn7YDYhkrA",
  "key20": "3SdNRNk1AYnj9RPE1zQAB8xF1fziX4K12urg1ccrgaPVcxyViLF3ErARB7cnofhrBp9YJczAPYVjSqw2mqUhyYJe",
  "key21": "47inxaAaGp12ibg48HqShxwWQ2891AZfVVhmLTNG52EmtqHG4KXvrUjKNoD31jeSnWJjewTP5V1KG9N7U2UqcBeN",
  "key22": "chri1BWA5vmNpu9uyAi7Mm3fjshGbe7prt2ZCUDsiNxbZjYQkQzKy9dF57XP6cGPYYL9JUVHQ85XQAw9iW5YXoq",
  "key23": "3cRf9E3XwkDcrVuyddJqJqWjZ33Rto4WxK5hNhQYysQrzVEs7anMpmMDK17ow87K6WBs4tfqKSAspoY4WwixNshS",
  "key24": "3LmScQH71a7jMDTzFWhaztNr4YtF7FBa9Di4GwY7vb7joFFBF3vSeCFHThCDdY3zYrbHfs6NP58pMpdbHZcekhYz"
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
