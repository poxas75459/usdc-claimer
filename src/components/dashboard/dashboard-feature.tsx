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
    "4mrfCfWZrmTo4DQPcnBEAJ1GZbRJcKxdeb6Y7X9eZNdS3Bhm7ds7hY6oLzjuhAKpqBtB25p22XD2RcK8zCEWHhtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fpoBXp6jJDZ2MJ5b24WU26THaNpt4MGiBP7GHhSrFioLHSMsjSi8UitkBoChA4ahKdD5oV5hT8nPnjh3ePZjAud",
  "key1": "2mgvxdoVY7jjmawL5k9JbHLuxYRzXkThCtw2uspBxXpXQV7jwGCpihLuuyCV7qWAUKj8Dwt8TYrSpVGtyf3PQgTT",
  "key2": "3Phfr9oUq53fVsGeMQfzWRhkxAFh3duQpUzxwjMmbdkRpPQuNLQbqSFrdpZqYSp9oMnuwQm9yWvm1bYoitG3FEL1",
  "key3": "5K4YDDXAAJZgFzUhsKf1JLK7diPVeXFVSw6VyvSGh5qiz94jKRJ8aTbFCy5NRgL6hFRsZ3tddA9HF7JMc5VCrYP2",
  "key4": "36atRDvMWehjUtWVsZdNkvERcMGqNjiVnfARBJctag4ZfuWSJrHMeuaFq4L1Ca4pAdKFUgdiTmTQDZwrRd3KwNdq",
  "key5": "2w6MoGnByBty3YuaiBqPsiixEXyc3wTX88tmNRrDyGnRA5uwbihYQynkUcnF4MbJPu4ERn7oidzibq1CPgRqi5ar",
  "key6": "4tbrbbcPm59JJcSMf7QDkRugweNmSConcoD4hxrv8xaAmMfQPeFW1vUvLpUzw4hB5d5gWRzF3CQpPEC898gcMJH6",
  "key7": "2g4qnPBYk9SwyQSfpBsXy45M8DPNyX8hn2fWK78KrjXscR69wbNB7bXo22dXdqdsPYfHRpAK2hRbcok8NNAhezHK",
  "key8": "PukTh8AQaUdjvxdr3Mmx2VD7Zb2SWSrR8LC6ZzaSyLAYBa5QYyZAzVM89MgjyUrPBZgctp16i7yFbcC4gVEF8D5",
  "key9": "3347iPRbp2aYdJJDR6JKYvBwSEiXRB2zrazGhM3uRbe6Dsh7huBfMZz7KLFNYxLUuaiJZXqxZrpRocgBSaw7RQYq",
  "key10": "oJTbzjP2bsDe5MUuE62mQ3XcimVdqx3DFUn1zZT76SL7kPNkgfXaa6nP43H4LduXvxHsosA7RW2mkrKC4e98Ndt",
  "key11": "3SmE8PnzBpEoAxQ24sWpBC3oucUZcFvUKXfUW5ALS2QRcNkxQsm4Ai5ym5TpUrfgqE4ikZEiCoTemTyygEy8Rvii",
  "key12": "9xSS77qCrD47ottGHRvTXPih68UbRGV2WgtmiFSFHhewj4XCyg7QkXMJCD3pLLSUg1sCeMt8vZUkYzF2nbeB8ER",
  "key13": "4E9RfogqiSbfvwfJCWVRcWfwb9bfBWSR5wRUCWt4BSBXdB9bxG5kxdJ4hfU8on39Vt5tKb2aHsA4A6cyChnQesky",
  "key14": "26cc6CVGyQvTJ2NGzWgnJY9PkarHHNznZhvFAKWZxirGk4mpt9MaT2hy3FgV5Qt54LmQFKhRCJcfzxTMc1QaoqM5",
  "key15": "4JQroYcFcm9urAN7u9QdqZQ67kYTcqyD1mD2Mg87iPznhuDuECrXPUcWDDXhPFjc27aqeDRnLFD39twjhNDd3RKU",
  "key16": "3fPQYe7pS4CmisE2v9m6oVDSb3G1ddt7UdodhZnNAjwS6jEyFgNNbMXkHNXid2XiRdZQEB4EBFf6fDnYDs7A8sSY",
  "key17": "2jfLZQGYBVHso44VvTtqJ6sryRdkVnq5CXAE9LyVhE78TQLACLQY1UB2tQgUF85eG8d6x5ecBeBjRtMxny6pATYn",
  "key18": "2CG2HgmH7anB22euHjkRps9ukFHgaYzyjdNerq5dXRRBBQEWBHddX6LqEBNMYn1sPR73ngAsJb81mmYnpMKNP8Xm",
  "key19": "zDhoztyo8v81wHRafQyQvxLtKErVyfqVD74ywTF18GkERZWB5z5xWp4aVJktgpzhE85kevjm6iFtSPtPU9jGwun",
  "key20": "2546tapfbG2d749wfsnm2GjHFbCo2REyz39ZPSF7gQw1g8AtLT65UMgttT95Gz5sgn6w3Shyv1UL6fGTzxeX9VcE",
  "key21": "5MNwss84zufY8TUnQV5RD8bieQ6g58kgRohTfURAighHm6b23VZvFfsu5u9ZHf51kcFtv7CTHeXcaGmEn7J41L2F",
  "key22": "4C8ivrJCb5Tq72VDtczsZdFGmeME5SLTnjzJsghLddsh4HiMN9xy5q8x3L3Qz5g6BjkHivFnF9otw6i2EHjrNhoo",
  "key23": "DCvBSBZp6svqA5Q2nKgox9M9k1KM9mQyTh2iX9e9f86EFaVmWjcvuMT341w3EERJpAYWw918V1yBHpUjKLZir31",
  "key24": "36vnJPgnk3BaQ8uX1D6mVqAXZ7RbAwZzFnBHFsvWFWdPYraWXWyVQFPSDeQeqySY24EvfKFzs9pPKaD96Kvp68Mi",
  "key25": "3BnFp3Ny7yd6wTEsASfNqBGuxUcPZeunocEgX51DNMbMEw2YowoxakFGNvLG5nzpC61rMVAciTQ2UgkM7sxza6Cc"
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
