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
    "2epu72W89YVcR6KjpmEb8i6kkweujxengqVNdG27yddSANMGxikCnBhKLoSNRABwbL7xFCHv9Eohg3xaiMb77fr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fs2V1kBo91rUcm214cpYNLMV9vPyYbPwpUikVUM6k1mqtTRMPkykDFPajGv5fWGeVF58UcU5aWK81GGjmjf42ng",
  "key1": "4n8LrQHPtDpeBc5bf2RKu9dNXHpXGi3HcP5ijy7ypco7En5izzVi8RG5KJe1AMnTPEt9xAr3Go21S2MnKqfgwt1Y",
  "key2": "2Cuoo9GGCV6v38ovfeEmeMdgHjd34T7SP9BB6NLTWbeTih1Ck768niNNd6KCZLTfkesWJjPsuQEVXcsLsuHknLdS",
  "key3": "63Dxtjiyk7s5eE8vpfLUg9QFaLFwps1KgYX7Asde7jfH8B8nTQGu3knfvCBxmdLZxsZxU2PkA45DsWHF2mZ7W8iN",
  "key4": "22aCn6cNFdN6b2BFvwNoX1Ni1RTJVVrcDAEWwKnckawcj8ReMnMn3qsSPiwoSxucyJ6hhk22Ry9QEDYjUkSmetoN",
  "key5": "4YQok8RNuampF7y1P7MjueUC9RLEW6yJvSc2HAk2iNpuPJGguAh9UiB1etyjwjEimuzVCTCpnGP5KVjEjsw19tok",
  "key6": "3WTPJwUfzNvDRyurpe6YVJw339mLLSb5iFW1DKHFowg3BerEKkPEDXrZD26iDWy4dYY9UzN5rM8tWnzqnBcZTMN3",
  "key7": "2FmdBrAJKtpaaaatiABH1M7RvqJn8x7jX8QAghicSMHCy1DNAZiELva7Sm85FmrmyDUnip6t54sTCyhrwjWpyXgZ",
  "key8": "5pTMjc1Vdu1kBGgYG93ssQARGo6QPERHtY636yDYLTjSdWhkpqq93dzaKwjpHb2kXyE8YVwtagqsfbJLpqMwLccQ",
  "key9": "KiqBEPQo1LiytYK4fBxsKZeEPJ8ThkW1uFEu1pGRXxHdLWhx5scDkdreZ5yU7E3DN9GBEQVTxDpbvFFP86ZhvXh",
  "key10": "3acQ69xvDFHaoMgqf4ECtVTPMSbWhJ4qcCYujD1G7BETZpftS6YPUvp7uoBnyV2SWT7msWKVn5CdiiMGT7DNrEiC",
  "key11": "4Y7HFuogJ2tjCeoNR94681dTrPRBBYVSmcgZVETWPjGbdP6nr5ESFdCCGVhrCoEFjhru7fGKjYxroT4j6jiy6fB8",
  "key12": "3Tw7mG12RPuEfBCPhDcfsQaYzRPRLUyPedHyVcvXs1irP8KcJ2rVSVWRePC5wfHRdGwytSBezRieaj4oTwwoPDAd",
  "key13": "DaoUroMtqgBRebxYBg27xx4UKU2qeS4KPYQ4JSdh3ZmWq21LSW27bEmcbY2Kj4EwU1zHYdYqKfeU79oKkp5TNng",
  "key14": "5UbcWHXUjgBYbFxh49on1tM7gSppbpbapfxFPnnYq9hV3rovGNxGfpCPvsZWSV9kpP7GcpYMW71eMS54KMX7bk5n",
  "key15": "MENWUpAddCbdQjN6gXhpb4r6dYCzRSYuwmAVxREQaGthXjXwocWUp9KDU9dQ4SLMBMqYS7sBikT64FK9YYuqXBM",
  "key16": "2GvngrpdB2XThffbroWPxH7YkaxaT2UQa8TBxbgFZwPkTpmxu98xEmkifQRQEVUR1wWh4Mv2UvE6vctjcwn2PRPa",
  "key17": "2sipALQRBftPjfQTiNLoQErBEAMR22iB3PaLCTFUemy4aHHPJJxoeMxbXVJJpLqu7PeabHD6bmDPh8jMCtXxSCDY",
  "key18": "5CjkFCB8cbPD7Qw2dbz7ABnu4K4vqRY7jLXkiAYAkMegwbpVxyCk6nnY7zwRjYhf6rwRX4h5XACK9ajwDzXCwqqK",
  "key19": "3UjgFgkd8kHG2H9dqRcqCQQrrwJ9dHdCYrJBrWMtghsFKUmLJDRxdgrfjJXLPW2SPA8hZjiqKw14dwXkxcUA2YY1",
  "key20": "4f3GSrpCSRNEgWMsNUfbEvCWFrnXFH9Ju5KG3WoH3opCdkazCsf1VYWSjtkRV2pSNZ9zFRPbhKaRYyuhTAgdrXT1",
  "key21": "4h9h7Eg1RpErDJiQ2eFiDg26LES997n3vgdMrtJ2s61gj2xoZGxWdDdWDcKa5fGhTQbst41jT1j8hyYRM8P92mdT",
  "key22": "ER6qTQK3mAb97nAnuGSNShXNmgomHpYiouQFD1Mdzi37osHLpbwQivmtg8PaESaiutDnYezJVkfeVxCqpPQiGRB",
  "key23": "61uw74qwCR3EUru1EY7XcTtJLQvCLkWhY8yzodmsZLkNHJ7fpz1sazHwfuXqT8UdX13WC8hP6yNtkthDnn3n5tE4",
  "key24": "VgpHDTMGoetDsKVJGLFzmaNAjSfGBYdvtbu1wrE3aaVcEUHjk9yjJgSf85Le8hXApmZCgHqfUfEUYxjSBNn4PLe",
  "key25": "4FWsi4UGTWhGbwuQ6R8VtU86Xfgqaw12ZMaJPH694P1ypg6pMPTeNkTE9NbgDAFb2628gNki3kLW1skjhiwZuvYN",
  "key26": "P9XVjsQZdPzYcc1dcRfxn6g8Tcu1doqGPD1pWbzSvrtPRqqyHK4AEJp6kY6cJP6q4uMHte3iwWujBzGuzpZAPQG",
  "key27": "5ssyyaLEfLXxLnidEfrR5FGmoLCCYqqJ6Ud2vnE16oWsNsYh8ei9uV7DHJXwtA5cyGuAG9UAmCmXdhxaCaUvPXeH",
  "key28": "3dXBf5mtvQ6iUJzqt9WrQMReAxt3MVBK4woLjkRTettrycbj4NWQvYcxMYfs9H2W42XBSzxczHWkbHg6Y9KiBWvV"
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
