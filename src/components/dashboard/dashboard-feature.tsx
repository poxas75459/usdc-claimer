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
    "26q8CXqNcBi9aU1ymjMt5GCP5Wa3pKijrvfCvDNLoEf8rxwxPxeFFTUNuodRT74WDgKXKMd8qzrtpJFfkn4EzCxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47DHRX7Bra5V9TMsibTejT8Ns5XiHNDuPezJ3Gik1VTAhbUrsw7KJ5Ewva3AaBRrgLCy7aqLzcwAd7EHPSCBUXkw",
  "key1": "75xjBmaiDGsVKi8WgHuzAPQfgAXRThuGcMUcuE5oTebmbbN5991Xd2gWaDVDLmcZ5mfos8FwEPjf6soP4CZ1VG3",
  "key2": "4XhCY2dMccrrAx78mFNwjkYsqbiioGUdw4uvgotXJ1kGKJrrMi6CT72GAotGFujvvbwTUri7cksVWS2sUNpHKdur",
  "key3": "C4rn1sdkaidDMjGZsrU8n9CbyQNK7LVMKh5nuJHxr3SXizSUf5B3m8pfUEghnudwkzkNS43sWTwcwxTvayeMATZ",
  "key4": "3qJYi7g6WzP8LGcy3QyFa3BscURu82sN1m483brv9cnyNoErbpw2w9gLRK2JXZg1RAXrhmLwXqPLYvG9gSFoj1mU",
  "key5": "35P748Ke3j72dvUPjVrd8dPMiPdiDbMHQ52wij9CRxAK9t2zHDpTfo3wiocE1nkL3QDMmyQFwvF8YxtpDyJJ5byG",
  "key6": "qtG4w5LKpbbQ2Fj9SWv1RvkZZpbNzydC9zXGLkAeSjsS2bkMpPq8dyZB2cNzjad7v28zD1fWJtRKqgPStP3NwuU",
  "key7": "3CZDB2Eeb6pBApApS5z1effa2vcUdKGKM7uu4C4c12vkJZg7eiG32KE7Pc6XNEjHRa4Ao8jn13T6sFaaHrJGEs5T",
  "key8": "5WgWmRifmzBSkAhBXw7GW1WS1wB5cuk9pn47yt5SXSqyj97FEjZ22w1eKQTG8TxUG2R8Vx85LrKUvp86ApJKmmdy",
  "key9": "BoqQWdn88GJqrGsERhy7BVTYGTpMyZxWq7wZzWRUSm3Rx8ks9g4MnX3Kk4MeGvSS4N5SZEVhM1VpLwHi5sxbDie",
  "key10": "52ATch8pQ9TXKRZPAE9S9FxbT1MZ1zhqsghXmWFvpnybqAYPCMBAGFVaSD2TgLmxQVKRP31Zm8dubEVu3xqsEbBB",
  "key11": "3ywdLBY4R5npdoRk48bvWRRP7mugUhiFNzMzHt9kmXdFXFHtQKoHDDmufueccDgGJdCfNY17x4Ks3gLKpfu7NiSu",
  "key12": "3MTKoy7DFuFWHrB52R5dZ4iyyQegh2E7UzAGvXt79bumGq5jCFeKvk2kJo4CcKxowAaf2ChRV6yPrYytEE5juWpM",
  "key13": "5eEMNU8FGtY7U9TcPWkveuKEA3Z2fchMufV4gEHo23tGAEzk6zRe1AkLeuikb81RWtwwZ3bcS2BLw4N5j3r8ZjKG",
  "key14": "52Xm66DFx5NpdxXLurw8fYHawE4GkHuh8e8rV7oiB8UV8tQ47aqWKX6pCE3wvHHy7k737DfQmZCUSKiJbWh3KFrf",
  "key15": "3XKzztHga4bKKxxWB9TVP7H6MydCEF4AUzLf6RJfhZdqFsJ9xBgHJQmPeC76gv6ns2MR5Lt1r1Z3b39KX9JKkHAZ",
  "key16": "219AvQ61gxm8odiUDg4P9HueCdExMsGyGJCbSbxyvt4YPJTPA2oWrBwewXj6gkQdnTqhfDJCRJ4ymXMwcXx96e5J",
  "key17": "3eMAtDRKpQ1fwTD7jh79SEreTeHyELkBP4K4GRw1UdNb2AEZYxjAhScN9pKHztFsZUAmHDeh9W4JkxjV58J7o8BP",
  "key18": "2qdHzsKgoU2wSH1rrGZdhzXiNf26aJzXd83YjvY1CDMxK6MaSoABfd892zjd9w6r4cta69AEzEp9CHBq8niksSk5",
  "key19": "4SgFacGSoiPNvPfmWg1H1t9tDmPdp7RwvQovzgyCgfdrXmH9SMPmMMcMQovFy6pVafCXWLafpgdg1oD8VuY2susV",
  "key20": "Ninqo8ydneyhMEsSvkNfqH6Ai5gJNNQpCCN82DtjwSzmh3r6LvsQoe3q39vf2eEjabqueBHn3BZti4wcxhtS9cH",
  "key21": "KqsgmYQdRs1Nm8hJg6ySi8RD917CWZBYrWnS6erZszZB9yVDnsVV684SsC5o5rFjAe5AjfAvcGDssLjVfCZY92j",
  "key22": "217TbzmA1uo47by8Nw4ShWs5T2KU4fQ9acnpJJaaFJD6UqSDFkW3C6KYTyE1nvb1GerHBugmNGEmPmJFoADcpQtP",
  "key23": "5upJRXBMG3t56JRrq3ovfGR4z6mjUtbtmqJSHbzTkZUju5txNfFAKzw6ZJtwEiSAEuQWCvQowhqDFcCC2Ucjz7cQ",
  "key24": "4GGkk2jxxGcLf43TV7N1jkoR6qVHfbTut4njnD78y3TxUSUBLCVkYP53s96YXhhUxk6yENTUM9L5MmezbPZc72mY",
  "key25": "4VwtVBnpyaMpceBN4kLaEEfeECCvtyaU1MuatRP6yHmST65mcecuDK6tNQPYo4cxcgZZ8BYVNWKtZ3CC6t9As7mM",
  "key26": "4hRdsnunB8pCyuJwsYgYNjN5RCG1GHC6qdGriwLy8DvKC63ZM25WGS5j3EU91aDeXe6Q3nUmJrMxYTkSSz23iUaQ",
  "key27": "nrpvFvnKUhweMrSv12uXdMEKxxPdnCpymjb8b2mTfdouDVBk9GcNNnGdmtPnHEM1h57y8jzph2a4kHDnaXhkxzH"
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
