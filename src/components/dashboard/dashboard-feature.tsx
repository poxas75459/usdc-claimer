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
    "okcxZHPymzkzbeoMEJfHKQz28yWqr1TfwE59SeKfChKNCRA4Bq7Y4UfJAHs3qRQTvoMHs1MGtkzJ5UM5ye4D6rZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KbSETBtb6GeTYDknkn9ezFQhm1N36qtxExiFUhuG1kw4Rd19jdxwFPZBDoxi4Zc7o46hceY98THEjwH2LRRQhMq",
  "key1": "3bS2xBWVRbAzmMagCwse3tsYg8f42tHVEQdxDmbN7Yuat5F7ERzkk7EEnUBh4r92sZij4vg5r6RyJCoWDUkReSc2",
  "key2": "3WEdjRQLDbvGUVa9WDLJbSmAfLNNVPQ2uqGst83tUBWka4kLxZAhhYANVEpHKBDgtw89VGtDfiacvsXqhLvbESrq",
  "key3": "5jLNTtZLqsJzE28dDK9buP4jyaxGgS3Mz9J9kBWjCR2dsCDWmoFD5fRe2tw2AwypHXiDsetKhzigD2KhE8QvMMf6",
  "key4": "4VBNUjP38YNUMD7YcYuTVVNguzyVRLWKjG9cMCfJ3u7HBre26FLuspjq4MUxMc7KBeyeMq9MCqEXoPLzEXBGQXPH",
  "key5": "2CRsz69EGmHjtGv8ERZFCuEeF3cv599yjtyJR1kj1nXj3fyEZyJZUr6MUVep8qW2qnGjsEfDZLfPNJDKb8kEY4GJ",
  "key6": "PhfHupfcgZJHzENZ44M35tM97s7SKY9T8XQSroCLkbzJofwW6H6BxNA6RuASaor7tFPWNjeEwGw7ynPGUqFWD5N",
  "key7": "4AUsDv3EqsBbWoBJet24KKfQw7sBcHEggvynDHmXXBHKVdcco8VAeKW4BSAoPNnHTBDhVL5i2DM8FgHSvXq2TYve",
  "key8": "4o2XUG71jBWcsJ8z6YEP9vjhYJVhBambUPdyVQoLQKN2C4donwh95Ret3gheVAzkVUZ3WQwkUHiKu7cN3NrqsdsX",
  "key9": "4B3W4Dv7XWapPbKqfd31RMW8PVkq3Zn69M6jxqxVDvWTgJrbXr1FnJJzcw136iaqTByWn3E5VHteSRYbFX3Uk1ZH",
  "key10": "4mww8GhhuA1YqLr4wTfuk7EaQ6zNqkXcj3waGSupXUC8UFkX9nPBfYMk5x71LRicruUSdHpfJcZTvMZ4RXCRfFu7",
  "key11": "5tuqV6HU8DMT6Sp3wV5QGCz64928CeKBiBuENDHnMD4pm3GpRjwDnFiMeUaXcZytY7UGgMq5gyRHC4YLJx9Nz27m",
  "key12": "2UotxS9AUjud3aE152wckyd1SMXg2Gcm7yUh8ViHuHRFzMGskHSxUFcZzS25fw2VRAMugcxgyxX4SySS56zcfQNZ",
  "key13": "2ePUuNipFPmoFqNEGc9KF6YhUtZ1qPL7JynU96z2LExyvsbgVazgpg5VzeQNimywbEFP7zryc4NygJogMuVFri3N",
  "key14": "3p4Bgdwgm2VxPXr3beTgsPyRsFB2oiKjh8ecXjHBZMzS6ZLDCoVU17WJpPDQSHoYPJBmSUFf1H4Xv3oQrPjq3o78",
  "key15": "63DtL1BcCB8rWRT2raohCyq6MyQCRFagtukCy4qzF2sipWKcai31T5RHRTXDWDgzXtV41ytrV3AHJcD8kvaEqYq7",
  "key16": "3nRMj8kKCQozvw2s4oGu2qSAzMXztR36wcf98eA8mxdm4pRCnwTwPR9byfdgB864erbLFwErxuwyZjUsiVnhyXGD",
  "key17": "5V2pXrEsBhabAjgmU6B9t12NG82asnAiBNwY4ahbggGhJerGUmSnwHm9qEsSFhFZEarn9CjJtDddbjb4MF9ib2tv",
  "key18": "3f9U6RAqqW9FT6D49ZGy5wc4Hxe8vjRwWVLdPyRzPiGyDrSfkth9TV87Q88y5ZSry7Z8vMFAuiG6bM9K6aXwAz1w",
  "key19": "3rieasMZ1VqXU3fjFxsVzLCj3XySbQa81orU3sGH2E9v7umCQ2NEbtKiM9jm7jefnTFKsBynsBF9bvuupnduFKzP",
  "key20": "66fQxzZxvV9bpfENyHPiKYCd467zjToKX1vWE8SdNd3uanNW2jeDKiuNkLFFwh5NdXLVgyhMp8GMNtmfE1bRAMUZ",
  "key21": "5GVaTfKbEi54qJC4adrgrKs7838bMW6gbDMkQn7oYfYDUZgosW3d93a9SiYcoN8AtUV2xs8if27RNQN9kpEsKgZ1",
  "key22": "UN88BrMoXu4ZqwEtBkUAqDbCRkW6djwRM1CGnf97judLXNYyEJakjVvu7m3N9foy3c9GpFSfDko7KydPHbX2ZVw",
  "key23": "4gDghKcWfXnUn2vZKDxoaSgB9B7g6MGVof6SG78WDVvXZXdFm1xL792caVD63QsCAndvUzAM7D3BZ1ezTcssLYFx",
  "key24": "2mN9gZhifTgMZEKFsKtu5mUZKe5WpfkZkLjXRbzrHmKBNSabQAuwhH3XE43QJNneWG3MfogBrzpgKLramU4AqncZ"
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
