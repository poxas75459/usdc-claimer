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
    "NGmzHQZv4ZN724WtsQUN4KCW5SxjFK1hNqS22uzJigacSKSM2m9tzXKdhtjvfYg9y2fAnjUubUW3P5ja4ZA4uCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wnEA53Z3KFBJ32NW21P7vcdzfiUC2bnzUfC3L4kfuLj9TGuj2VR1XBbRHGcZhfZR8Q1mngcp7rPVDMWZ3jCYDDN",
  "key1": "3v6qXkqTd9xDMBntzAYfGXCgvurVL22vaKpFLwYaT7hxt9wUJvgkCv4p8MxjYwjLtCw8T9YyCBe9WRxWaoXoGmy1",
  "key2": "63QkLKaLwAWWo1h2azAkRJKKRd9EvKwH16P9fmf1eVKWyXtXZJaKvHQx5m7R8m8Cgc5crqwAAyMws6cBcNyXiVdV",
  "key3": "4oNo2hbfxi5VqEsjfa8zdsEr9nHoXUfVneWcjeGtkt6j4e78EAWeboQhGby96YVvuKEU7ymx1FyqigzHLgmsg1gx",
  "key4": "3fspHask7ziohoMzQcveArQzqK7qxHTcryH2wFQ8MktksT7sxQZ8NivGPkwgUGiQejRXaxpUdLghge8DiS9jK1nU",
  "key5": "5CgUA8X5de2diG15rQD5wu6KfrSKVWQKDgVE9xgFNpw3TFMQjjRRY43cpwnwfqgCJzfG3xY4azBmXiR8WDRjEUPi",
  "key6": "47JJ3h6MDqdZoCE9b1GekXgjQP4VGB5k9zXYQXUSdhYywD7W1NemN9mKXd2oPdwhyp83cPSDoibg5UGWYmEgu2AB",
  "key7": "2jPsmew4JBVdYrNFqMYjpVsKGP1m4rTsz8D3VUDfkX9SaooLrJJGFiXpsy3noV2DqshiB5vmGEqLp5gWsHQK13pG",
  "key8": "56Uev22JCwhJxYgFfugJUdGNCB7Dxpur2Emmga9deCVppH8fwTxhhae82pbWmUhp9Sd7D7PCBRn7g8UQ3j2nyeoS",
  "key9": "5iRGftgkTbeDGooYiaVvchpEt1CQdJxi2DcqpgAdtiq2RFarePuJ7wdUfZqEULSqkCQeTHa716nknrwf8bijAGSo",
  "key10": "53VLTJ27rTM4gLvbT1qS4DhrLA9W2rKK4GdRqTCUtKcneRAYHftUYgDFCooa2Vaa64QQW9u8R8RMMTZcnNd4wWQP",
  "key11": "5NDnixrBsNSphARGkejserVGGrsEtE52o2xMGmnFsohRcQx5NqaVTeeMA4HXNsM5UNfoHv2xkHoQuMzJPaEYAe53",
  "key12": "4eTa6fNaHw3SNRSM1QjPMN89eH7zvwP8fPdKK6Yi5X1hh63nKoMRtKYz7itYC6dSExGXEf3BziEifGB599L2uSaJ",
  "key13": "4q2SHGxWGHPuods2QYA5FCw98sqCzdL1LW4gAJvA3aL3dtceWKmGXJkPKwk3hzNEAZUXs7PALFMR3yYKh4CFuk9Z",
  "key14": "28koW5scNnpYWzLeKZXTH6UKLgCGjASL7qG3RuCsX1NMrZKTNFzcCxFb6fxvGqNxwu2n3e8WaUSQE4iJ3BjUWPwp",
  "key15": "2ucze7DkSuXdLsGdY7WXBr79AZ4zWdTbvjSpKKAQUhoUxen5GvMscjFwgCsjEZ63DcFinDHGVUTBfiqSDyzggah2",
  "key16": "5DHVb9k9oAYE5ZN34SSKTb6Zbh4zdba2rSTUD7UTJBSM9dSAaQjoFvviiDsS6TE16PWDBkBgjNJFXCH1E7U82QBZ",
  "key17": "63Nxv5ef5aKKeLiRxuD1SN7SYJ3rxDYhpeCsoz5DCNxFZe8Lkb7BPoErvkrC35KHujDeduLo264hVMMuhgUcte8M",
  "key18": "5tdTE2aRr31Yqe3AkDSKAF8G5TN5WN6eMH99sGBdT9L8tS763V9Nhi6XotQYyG6SKZK5zpMCxLNroYtAp1pTEzyZ",
  "key19": "4T6FEpy1qwhTpnU89CPrEhoM6VmsNzQLv4hFvJXrSrLiHLRmCmUHTtPFiF8PekRiQn56PpyvmY5AsR2JeSPZbJJe",
  "key20": "3RtjjP7xzXzW7rdnujMWPPvQ9Rkhih6yb5teE39NkqG3eygEhELbTPsDS6V37i38HRTK2TeD9ETaT9yAeD474gGF",
  "key21": "65qxmDqAM4ACsDCqun8ME498kWamm2SiNtJcTuqmYb6rhWrWqVQ7QzhcFJXgkXpPwKt5z7Mx5Rfcef1abpnDTiJb",
  "key22": "3L47mTSeaaMoZLf7nqV1K5f8jiefC2a3tJDEMMHP9exrsqcU7FBX9V8rLHuXqJij3WoF2Hk7wBTUKLKPYybt69f6",
  "key23": "62nbKkspoxxwRjPTDU2bTatevoKDmVnARQr7u68RxyKJHzs3EV5SLBAGdAddkyCcwDz9jtUHtpPimj4ZouWFgJoB",
  "key24": "642mXikbc3mBiEK97nVADAtJzQzY1ytyEPQfREUXwqpjSzFAcd66WF2sRE1nGprjn8w8hdRds7DexuY7pDpDHF1V",
  "key25": "8V2JEURSnrCXsssphpYYG4Y7gwCMa3jvpm4N1m6os6jyQmSQwXUSP7NJubxyqAN9TcEProuE5XFP4GzggPPdWzU",
  "key26": "2ZVsxDe8w5u7hgJu5fapWX9sBTtJQuDDMRcQKLGQ8eAxXHvjQ4HLGoa5AZh271vpnrD7RALKAovpmbWhrmjpQgkK",
  "key27": "4J31CnHXzdz6jYVFLQFGrXPcm3H9CUXtefaCPbMUhD76LgC7pHjGuiCRa6dvPiP6BbVKGPuiGfYuapExRaB1STFB"
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
