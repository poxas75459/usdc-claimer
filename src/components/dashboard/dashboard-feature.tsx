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
    "4gk2wuJmRNDsgQznbir5DsHhSZL96szmzukhjZs9sPm86Mmd7iFoFecCznrs4XnkbUyfcoxiuPUNNWhbWuqpjhYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ivSKJj1EkQiWRjhrZpAFUXWdj5rE6FtfrAZqTmX8QMmPDwaNQT2eURVA14dnjsPGDSZfzRnWGZMsgzU2pLNmU8R",
  "key1": "CfhTFBADc9Sp4HexstyMv7iBzPMDEySYdYd7U68rv8e95PYuPHr7VySL39u7TrJmsfNAMDFRmdCphpsVo5R2DZn",
  "key2": "3wEG4bXbLfij3g2dpAZayYt4J5zfvNNsNf32pKnMqeLcsxCiEYBh19886BCszc4yuaAwCofZvp6N7HnMzJcJfwYP",
  "key3": "2KhhmqiCdtgNGHpts4wHjYDUAcxyfMdqJjki7vW8qiD8CWq5g1B8RsDrmffpB82jKqbzsebLdbrm1CmPtPCV1hGh",
  "key4": "LAymmYhrBFU6i8cU3rrCjbQo8hzaGf4H8TyZDFeK9qmHLzAg3NzBXDSNu4URULVocDaKtmcxWh3bPSyRbe1ZtxP",
  "key5": "dBc3XfJmcWS8X5KoCaWau9KDPNw7cjJrnf8pUr9FhVZnHtNe6bigT5gpXWvftVXo6zp8gae6LjkqzY51k9tc83U",
  "key6": "X74gDddzvbsN8c4hA7cBvexRw93nim2krAnpJAaPDBcJez1Tbywdi6TafmRMo1KZMsxrdmDGcJ2XYqnXeEWUGyD",
  "key7": "3wpu34VJ9yCJbHKhorEDepEyX8UJQZ33tKGQrh6ycNM7Zf82gVNfVHPAb7rpWgtQZ5AQPJvXoupndwgLp1DdsrRq",
  "key8": "1hMScqAjqfZfN8VE8cijnmdJUf96TQ5iuRX8AeYqBMHpsyJfadv4pcKcJPk4LqUR2AoC7CR3UfaYLBHTTSDNVnn",
  "key9": "5U5cmjoAnbNdUCcXVz6K9sBkK1WdQ7SiDCwuNV9WegJoXNW3hMr2fa931eaEVE2RP7fkD1prFQGRdk3yqq87S2GB",
  "key10": "2PA619nMEJyiKfk2mor8sqUKTLporkK7LuEmF2bppMSrNvEFhqsHaNoCMHpFpsuJvoi92MThLSgrQ7Qi5w1ybWbA",
  "key11": "3suUNbMSbdCY4FytdyFDsc3zedLTbocoPAULKhZvU8PkthWb7M1NpNbqkqpyqdgJRYUpWGxecG49hD6m83C5a13M",
  "key12": "3ZdkMWKhyKxmeb7ADVhH1Qta1JqMhrN2jvpgYcZL8jbcVtw7esVoEpCYxhv34QGJbomEA4Fw1xSsmXdPreZATW25",
  "key13": "2JiR4cjivdq5edWVSmAN9RdTpY7C4LFT6WA1s7bmj3s6tw5EcDWM3BG7yJd6S7ASUrRWEXSJnJ5HS1AqxbmFa9ZP",
  "key14": "2bPPiQj3LbRzoTucKgyCXbXm527tA4brnfPmzFVDbSvmjJac8i6tMXEdiUj2WHotHz2LRkir8oDsStxsoaoDPuEM",
  "key15": "S7UFEgFrCWbfRmgBYVeKtieTzLSoWSnvGMHhvMZVWfD5c3kpbxmpjuSHZHG4e3WBDmXV2gXZuwMpisHb1Bby5rj",
  "key16": "4PETZkoSKyp7MUo1aEApSbuQD6cQXhRm43BMtGf5zsMiQHHNYwq9p5S8fN8fuEEKnavu4ETGr4hFATbRUfaAr3Kc",
  "key17": "4RAdBrHXpDmgqhb9Jg2BERWzmoodwBAK1c8jVZ4iF7CehAzUmR52Eu42YA7UGDG2GweEJafdiFDc7r2uQDX7DXAD",
  "key18": "4YHXWLyrQWPJhkbHZfvMPWn4JAb47GpgEEdA3vhSeasgvMk5f9HttNSPKVXDFZqxU1ZqVrzn8g2yNgEdTaATaeXX",
  "key19": "3T2GLzeaZA2PFbDS9dP1Qnh4AvbWr7xWREjq21j1fjnqyxFmZmb7Bp3trNfv6LpiSNBGbHCkXW6xf6PiBUA25C5z",
  "key20": "2jCiM2t5B71Y5a5YuufwC4soiGZFq6yETV4hPG1UKduYQwSJHm3686NoYVHah6qApTbyPGsNzPKtAvMgaonpDrkA",
  "key21": "39ZuKZsbCAefTnhWCfvBG97G3NaYjybtEVXk3uZfwAeUNSuh2p1uNJbUSDLS4if6yfCKVi9yYvtdTPrPmEwZGkZ3",
  "key22": "4keB6Ay9L1MjGfQtExdDQAJoQqw92tsurBPbr6KYBvmreM7VsjbZbDLcSAsY4iAmpgCSEh9EbzuPBT7XTtSH5ix9",
  "key23": "5La4bM7FuLqGAumco3ZzA22dhJNbw7nf158cB3Y8rH5GMtP5kJEhANLSpsNWGZu1TQga7uKFAX711QKDR78D6LTU",
  "key24": "21Si4i3jRhfJ4LbfkvTJup41fLkZxQ6dk3vRsdqFa9puhd6cJGaiZGmm1CqFK8hKxsiCtMb7ibkyPt2MjtyhDGkP",
  "key25": "2FwtWvEoMTuk3RLPeGfD7SvbNKUUhP2aEVVTwnuhNwUkPj8mL5eMedHRpLjeDXBkK1pvzbLfUGxYumHH4urDeSU4",
  "key26": "5EeXG7snscUXzsifeqwUCtQUtZFk3rqyduAh7c8rE7zQm3SSibjU9cPMa4ZBcwxaHdoPaGCtTgLz55VkynzScUJu",
  "key27": "4rLeagwnT6Sret7BoLFbju6MEUt28EqKjwgdKfW3CiQ52GWYc8feSKrmkLB9rCJtvtrecEK8G6v6jc5cLnsL5rnU",
  "key28": "4MfNVRYFgyg3QYoBsi6uzT1XEwwvbNUpET1RY13q8tYof1yiTrwatCzanmgULbxT4soKYRjqjMYnN7CHhc4vfvLj",
  "key29": "3bYzsQzCa2uZY7McrjYY8Ku85WariVCNGRTB929i5mYL5o71DbSbpW44ZUJ3zPwwSofHoypKkmiX5nSV5sKRfXBg",
  "key30": "5yQSrnbbhgcg4cp4wvDgbZtuTbFzHrQYpC7BEosjt2ZvGHsfhPYeCS25SaeA1tZBiZU4s5Yx8Tq2MmZthQKEUWqv",
  "key31": "3twLyvVzgEvWWsU6TrqtzhPeU7SvoTQUB7F6UbUiaUvhq5peCq6MBWXQAUXFRjVRGCbSM3QStPoxyTYbNcXyzvnW",
  "key32": "C7615LVP1mcwnsNE83ovqWZrUWGohxDKLfNyg9RcYLHUFLyseoihkaUVXmPfEysUYRCyMmTPppyyxrUZzRUFf6H",
  "key33": "3jvjgPw1pYJTgCNptWsadah8mi1HHmA231FDvLPuzJyQo5jATCm3umvc3TpauW8Evcx2JmX5NCQW5GPGzCXdcnJM",
  "key34": "2spDai8ABG2vucGwYGXZZvCuscwcmjotWjdd6gQmzpGNFwhCjLMWit5Agqi5nVR1ACiN9YCfN2hYXsPPcahGTzQy",
  "key35": "5aQoYP3MWQnkor1d5FF3q12SdKBDuVLtfsLQXqkBNWpV9kkQFX3SVwUJs3TdKMCNvXRuxyUPb4rrnXjgrRCP32Di",
  "key36": "58xoS7uNfHLUNXnfnhRVb3ijRLRUSgygBwARgyPMQxydxaqS5bfaShVu2mqpGvePGFKjww45r4VXSuuuNVn58XVJ",
  "key37": "5JUZLCzVZ2QQhqUXgyVj1Rd1hocrk5A9DMZ3bvRHScwPWGtkWva3wRTrF1TZYbYfptrnrNSD3ZEX85pQLQTu7m5v",
  "key38": "2dMeFsu4F42qCJZCJDWZEeMfis32oAdxEY1WoHXC9RRuXkEDem4xGj7ESRbP1W9fwctWMHoT8QnANzK5KeU61ZPE",
  "key39": "2x5i4jaisbBbzi1RmEuZcZuVkQGkq4NnWWo7gw8UYYSGZiGPwcSis3ShD4dUmLTLVa3eWSohnpnBecB7JRDpdTA"
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
