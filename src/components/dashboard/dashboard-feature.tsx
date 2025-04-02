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
    "52dtMrjhyoswXRVhSKJWfiJbEH3QgrJ4tSkXb8rbxcpLgdtuE5tT8Zvs722Z4RPACXQsNSsjAYt3x1QU5YLGTzmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4onMGQgnUpZwAA8QAjaDHLC1Xhn7HCUBTDLFDb8VA4fkWm5x57F9XzG6v2cT45u4XwUfdc3dhDiysZbjUBWXfND8",
  "key1": "KbuwSKNYurRPWDeMBBBCJkFNT6o7rg9YsYrNbZ2xiMcv2GkRWDnT77L4fouBRueshiKgcnWEwZE2rEmQXDpP35s",
  "key2": "uoiHxync2grBQQr8yWQz23gANb5tMQny6cYwyhRiV4Xg2XAHD5gM8KE6N9i15mNuoc4EhLFDBj1XsxD2TmHKs55",
  "key3": "8mon5XzCNS8vtCXahLQEZWBnoC1H1iVuJhZ6hFQmWyrwL5QM2EfgFN6rHPDdFFVfXMjVxS1WZZ7rxwREETEWDfH",
  "key4": "Z5PmBVWoU9zgeoGWwiHeY3Kr8ZHzBXKEHHH8NhVK56EdLDzHcY2s3knh9HqhWGgTv352qnf2RyxWUHAmGXLEgYt",
  "key5": "23T98VDD2nj3iuCd6y24a8CJ5wNC1yB3MzqHjrpjffrwwkSKMQB86TPw4v1rWa54qE5DXQaMjSkjucopoCojjiuA",
  "key6": "4Vv5sZMxYH3i9DJhqzszfNQ91FBev2mTUejayvoThBEW4qSLE8aRn7Ngs6YaqsFnbUkaSk1LqCFhk5nppjTsb7sw",
  "key7": "4yg1Rn3MMF6taKcdErZGuScygmXJ4KFb7L3Ndyui3eHwAg5bfNvE8zkqKZeV3NUBX4PMa47oKoj4pt5SvGJWxcEF",
  "key8": "55NxCapFFufgYQL5oVqJfKQY2kWuZdyiBokog4ScDHzsJVvsJ1ThmLdFdcH8MWoGHNEJPCRn94xDwmMnMDfPnknW",
  "key9": "3BBVKKaEg86hCnV6AVW3DLHcuTzX4hpXzeJLh7MYsZ7Cw37DjbrQhtUEMdww2LdmsQKFqE31ZYeY3HvpKVTUXHnY",
  "key10": "3tA1AwtATw14yoXKT15u5VAV9qFCzbTPAPFCLhD4kGkRx2hFNKLTFiqpMXgbHQZckGxALDJ3nvzgubGK4Cb7ZyUr",
  "key11": "kn8EvjPw9uvGstmU4mFeyUHmYNhUg8mcCeuitecyicK7H2WiLoHXHVLBHr4ZQs5wFCXhn4K4xNJe1pq8vjfCdoQ",
  "key12": "4kGgkizP12ozwuUrQPWKHAM4WNhy1AfRH3RqtVTnP8cZ6UV5Hh3nM2jKuEvLLwmqDpFvpDhJbL7kxeFmPcap2uwv",
  "key13": "5CcroK3S9u9UmX25zxzm7CvHgj9Fbn3UkZXMDu24nCNqb7VDEGXGBJLHyAdFheinypz5jL7jEVqxt6XbS8CyRWBy",
  "key14": "4PL4bi5p4sHYkBBb5f8938gw3bX3rKQ5PnPsZJVB1gM7d4UqwqxVycLdxLXwEvwQ7SgrTXjiHNCzrjdK1c21S72f",
  "key15": "43JRG2AA6HYyTn3gPjYfRCWMTmwet9g1PjQSkU6VyPkPWktAuoyptMM1eDQ293yruPVnYwxZgmycxBdWpcJT2pHE",
  "key16": "2W5S4xfyB2hhfaaUXPUybg6oKMD2Uk6SPV2CpxPk7EYe4gC9wYm8BaN49iY56ELm4zETbGoRxeGu1Fp8W6iE22Ez",
  "key17": "4Lv2K9Vt5vtwCf1yZXutEKdQ1B4gphkHwxsarV4NLfWrNWdFXF336vGBNAHx8MDVBRG3Wg2gV7TqEr4rf5WnDKBG",
  "key18": "uTzUqqXHL12bZtH9VL3xLZqSowwnUUygBnKZ2aACDUzSqd8j7j9mHaQK5z5CznYQx2QdXsLg7uKEu4A2WHchXcZ",
  "key19": "2nFDfjQZrxfpB74jmz5txcVynYjsC3LTXjJDD7Qpfd4aMru48AMLqv5T58QsnATEDQLsH7CZ7SpuTAGXe9zHKP8w",
  "key20": "3QqBaPWBgwcsT5crD7aWd9wZJtQSZgccYivZoFSxGB4L1iHiELtfRKuTjueAbrCSVDnhERDnPQBUB6z6RmhtX5xn",
  "key21": "66Hc1bqhuqGY2nFiwE77CZzj86Ef9r9voMNcecyFxDAURQe15RDmk8t4RUQZkXX1uq41eC5A3ccDCS3enhzyxcoH",
  "key22": "4rPkNkwTN4kTAkP3f6z3p6Htb94FaaAZfAYZgt8YfJEVgzmCAuUwLgtP9JWPW4UmmREjRJ6UThpZkYQm5Q9SNYrz",
  "key23": "5To8uBxw3NCiFDY8x6Wu6VeZWWZR1XbhwzHTyvRdJZG8WUeakB9nt6DjsFqSnEJHNK4AHY6eiRcJSUKAsU69fvvq",
  "key24": "2zGtq1c6vDDPQFS7Gt5BKPyvzzTDwnjMypFTdBt4SC3xYJXrojP4NtP1NJNCDr9g3ezEFqLSGu6cxzKzmALVV941"
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
