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
    "3fVnAKPMNKY5Y2BYgnUXTAcJEcXUGwdGJg8GU1hzEGtjLqmpNsh9HNAgBrD61xZQB3Cy5tBtFE1GpHb5S9zvzGnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QKCMoRcxKRwFSLz2morNKUJGDDDWzRUA3RGsBDNextHkw2K9KatZ2nJhTazBchvRkfCD3ic6JzQTfaePDRmFCT1",
  "key1": "5mtK1j3Ezk5CzFdxgBXsfoeZQEWjFepuj9yn2gf6vZxGq73DDRYbXmTZU9ZXXX3ZrGr4uxBaFC1d7Rrr6fboM6fx",
  "key2": "nE3YVfK6QrqoV6PWMa4Ww5xe15YoTDHmrDN9CgqvYdfjNYfADELSuMdrSXS2hGfwRZmXZZRn5jdmKra2F7dveeZ",
  "key3": "651oGxbajPkuUxhGEstagAtiHKFghoGyPVKVgfC3fBBMygwbgqrEsMzcmQxJet47Fbh4n71Fp5hu7XfnQKpcid8",
  "key4": "2m7iwLw58Wh9cLX1dxiHNDGFHBxrbHfhHXQGUtT6QuDe8FLWm2c6nEenz27e89TfF4k6JDdWRr1DhvxJE83tpKue",
  "key5": "587Ja8ucez5EA4tRtXY3Sp6sHj38zzLCmp9rKNCP9dmv8Jiq9NnvzBN7e4Xh236qypEZ7ze5Pv7LY6Tb7rTeCuX6",
  "key6": "bCunEVMUbrZ6qUegndScCzSnoXcB9fVutgL9AxuDMMEVaTXpS8iUYDNkpWmRE8kZcHxyGQ9pbGieujdrSEmHNYT",
  "key7": "4qRC3kQtqbg3EeSTGdjEX3HNaKYsoxZQdazDDaVABaZZysSgw6fZD5pC1ZXVytUbnQ79pNG7EN7KxxCbD68gUYhf",
  "key8": "kxSAScuFQM3TrzArs4oNSSbc6FuJTcbak5VUBq156gFSjhAAdiBuqLX43woiGgqvEnMPiSh9GmXyTiRnESxiuFn",
  "key9": "5zh6YD55NXCyssAoPZzCBFfekaLdqLiY7r5hqQf8SNuGih28uvQaytF39RmuH1Td19WRtqvoYfZWaW7PUPUJ6UEU",
  "key10": "2FUqQ3dKvPc2YFcjzytkPjB6C1nnCkaKPBNvfFn6rvMedEzziQMmQHo97zffE3SrTibdvM8j4S4KoQuL2WiQkyiw",
  "key11": "2dLLZ6pK5aFU9GiFDSJjXXfXP4aVWwiYbxfB6Rry4gkh838zhbUKhymdTZFX6s6ENppq8sCeLzTqFo6D7K55JDiA",
  "key12": "5XapmsG1E2piL3znLdZCHS62KcqEcxS9XNKoiQBYmLKtKGyeBug2qQqhrYYZFzAFckaSFCiNEc2FeXBkk4FxcsYS",
  "key13": "5AXZiCeva8ubDcvQi4wR871kDSuRgSLKRgdgUim6gNQisEA5HPepweu5kgsrMs2CFBhnKqdEuhvtWV7WWArXXJ6H",
  "key14": "jC5NWAKvSxdS3HMzNkuUPKYF9fHN2QzfXb8jBqcrqg9HQL6NtBS1ZHXjH23bcXDqzMWMEpg99mMxN8nvdxwVJhC",
  "key15": "5gwaiCjYqgxWZqUAHLCuc36SQ3ajHVy95DdHbB8B8QwnTis2ZykqzSLB5MsodmoYi37im3roWSQQcQZ6x4ErR6Jg",
  "key16": "2GqejNKD6BrmxMWqjCYLbtKZZ6TAbGHteDQoosYsbJbEXg5tKSCxV7K72WiPvrXZKAmSbuTwhNVu2ra1zjiTRTcz",
  "key17": "4gwr7ruYnoVkJWpXbzwMrHEbT5tuadnj2wmT5cvmqBVU5xKbTzEDyz9feyzKrdXwyaRT4XDwVAewcTx8YDhtmpZv",
  "key18": "cx5fxsCbgUuxQ7sozWHhnjReiCmnCNAitVVsihChdnuxYh8YZxon6FQi6v69St5Ygy8Wzu4DeZYviXyQaCiWAne",
  "key19": "5Nc3T5VQuGYgdiBSCwVCUzjNk8cpkrcHYn8y7zwCoaG7dKTpR7YwFepK655gXFxEPP2YKSNLwb2wjouubvUJK1Vj",
  "key20": "61mfMMxN8L7L1uQqBi8kpQzZ2ZkL1e4Aa1AXYhCDARA5urzecRHkn4axsWPe2ioG8kh1zfRYGkJKGgXZP1WHzqS7",
  "key21": "5eFCqTCjPoLv6D6D4AYJ285K9FXeNdYVPxA94Rw16KHYWb1e36uc9bzriU6BGoWivkAMJJPKZCep1UUrWJ56Xzt7",
  "key22": "2KAjzRNrLuo2yFi4uQcsCvLQ4iGGn6nuNnmq8oKB9fuvEtLryvEJf6XquRfs7Tts9MYWhxFC7EH8kLhfpj9Av2XK",
  "key23": "9CH2FEvZi5CVJKywhEi5gqUaYEx735NgKUFpq9oJWkzn9rEEc9ykUdP4fCuWQZTgcfSR3w8E79oVvzkfnh6ks8x",
  "key24": "54PNhDkYJCmfVbDt17NLwu3NM5hTq8EuuQFmXwi3Y7VDe1BTyJaJuGNdHZjoPJASNzn7LAHA3ehUtUjStC449fxs",
  "key25": "3KHtmPAc6D8Z5BhHtiqQK3CveiRrtiY88sNwsrcyZHyDg3Giw3BJRWj85rRXV3AnVHT4Z5TDfAVGuQSUoFdCwpPT",
  "key26": "X6Y2QMdNQ7CBjueSZbfQKwHUU7EmsXDK2NMyvvFPRQFSPbBd5R5cZJ2nDemvFubzsn4cX1v9EQ5KUpEpNvNmaDa",
  "key27": "3rmqsAv4u7MmbvrjGXeNMvjRV5BA3Sx7R8Ds3K1P2qFrAEdRVFQQ1nvSinCf6UiRzowGhzkUEhafhKvp1tMHseV",
  "key28": "4GmL3Nvqc47RaPBJPXbdLNgLqg6QcuLBRyXcT7RTShGhYeC9FRvYfXN9BSnzyggbYsT9zasXoyiXEct7nFC4892i",
  "key29": "3vEKQGbU93shDkyE337fHc7Hk9etQ8yUKe3fLnWCmwBhh6wPmickwfzpABua8pbGJEhLnH8ui1WyLq9JtiYfB5PW",
  "key30": "2pWrc9JQgZFQ6eQBeYdb3yP2GdDaTrDLRRQXQo4s7NQ7q6o7zNQ4bAsFHXyvXHiHb7rbce1TJm5weqfDcTVQ8g7Q"
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
