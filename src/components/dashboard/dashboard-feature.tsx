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
    "2Ug1mhiWuGACgycbtbL94WzjavPRJcAzLJfVvbxiNwPQS73ycoEFHjfpsoQPkpNzfx61Xu3GNEUWKf9YeWn9gMP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U7LVmvWD2vrsQPTcD9TcpaTDxdoiT23xnFT1Awek1Y41yhRwkiqqNYSmADvzgcw871pp2tkqRLQLu61K3QCCKxY",
  "key1": "5BNu27UUX8fyyfjC9ZsKpqvuZyN8ey3qxEuMNJmTu3Pmw7VXh5heEKaqzQKSxVPPGXUhoTMXnRpLF8H4ikQ4MxEA",
  "key2": "3awmkLNhp2Rrf6n4kBV65BkTZEVfjcexJcy6NW9kF7PBK8h3rzifZp7t6DZv9t8jX3MKsACAtNg8gchbYnNydPgi",
  "key3": "3173peHP1wWpnWgJrH4CfMpdrweThiNbDvysfZd7xFC8znyrVxJK2TaU1GWE3mKEE6CN8hipnKhWD9P9oSoY9VsS",
  "key4": "5fBHKZUAv3TwiSnEWdtyrHpJvFQV4A9vva5HxdTXVrrgqSoecnFiWR5TfK2oLV9QGqSFd7LSnfztM4qWaxooRWXp",
  "key5": "2E2xgz3Fk1UW7LZUopYaAy2Je1xmYncaRiN9BEAk2XZt2q3T4BU2EMf6oKzZFTvSpE4bN5rbUNzSgGy42Fqbdq7f",
  "key6": "HuwNtsdvKpNQYh6MCQ8LEhdzPPojb5ktNQqkpHLXQB4TxZQ1LUCbNEY3kV3YCj33Z4h2DJYEHGJvaMHJnpgo4Gf",
  "key7": "3S4CBzfVEzDUSzxAN9eZcJ6XLj1wdpaAZZexMj8rRg7RpezawMxym3JkSX1HjqdAcWgBy1S1FWyJJfkWBaHkC3nV",
  "key8": "5QyarVGiUzR614DJWNMa362MP6jLeWLVVtuF9RJfwVxaLExHkq5nmxonxbYzMVkTrN54k3NE5t2peHoFYzUin3CW",
  "key9": "3x4HZLeqd8PZCMfw14cBNVxQY9EPjL3ZADBbNd16znpFu6qcRkhEY4UqEWPLuzxdWwYTyUQDyrZcNtBjZRwvPpAC",
  "key10": "5mSV3rBu3HvUaCCcLjYHvJMsFZLFRmtqvGWz9W2K3raUF5KyE7jSDgziL4tubDHYBdVrbyg7fi2QSDhRN85t2xJw",
  "key11": "3UnQtag15dL7XXXVotcvXFbACTJkXc2iSWHZhXSEz6uk51xeaf18YQAfWXMyZ9ZTzBYdzxYhZRm8ssF85eDVDDTw",
  "key12": "3HQAiHdnHzWt9MFC2bHib1Sk996dhnKYVwq4EiDyX7Ye2uES31PLNsqAoNNNorPBU2xGWKcG47wicvtxdwx26ZAP",
  "key13": "428DNYuFUPF64o2xFDV4FUAZLaKSeKGV72p4CQfXzYEEiKe6gs3ZgszWu3jnTxP4xXv7tgxwhCorstAPbKGF8Euz",
  "key14": "XgnSxwdQ6NtLHXDXfiRqy7z453dLnLnzMqpN7EWsNsMTC5Lvybz4XqZKpAdHhaj79yoX6p1AbqT9uWsbRiTXBDi",
  "key15": "5EchT17DaZ3CV2Jm2qq18xaxWfddHxd44rwsY5HLfv6yF2wJWqfLpmR8x2EJqSp5h7735Re7gZU1SNLdXYCueni8",
  "key16": "NcGkmn2fG8YDMkHxn6Zg3SPjDRZj7oiVV1dtDstoVYA6gCTyegKL6Kcd4aXHvLWoCbUcWY4rHMWcaPXqywNAjzZ",
  "key17": "3AQyfhQsUqea4t8wbreAPNziGVZAHXQahNHuAnFzFmiXcH3SsRPFQs62B6grQVamd8vN2W3MraXFyFZiR8KAoyqV",
  "key18": "5LymxmBVj4cBR3MjP9ETrcBPyp9pi3U9noTAKnAQ2VEC96Zad4v6z6v3Zmqs3bEcLEg5fRjcpcCxGZczoSG21rLS",
  "key19": "3jnzqBhxqbqcqgGYW5LYV6THteTzxQ1fii5qZ7vrKE7GUcwnANN4453AH8cnNPQR6ohWHyszNTpD5dkjE5yXPgHF",
  "key20": "3ECJfTsjLo2VFxMGBsQJ2yKFFnLUR45216h6jXn4CEB5W32nrhefciTihbP9rnm4NGz6K8KJX7uvf3rhXMJ1jS7j",
  "key21": "kjXdy4aY2wuYhNL8sBUz6NpW2EEc4fUGHHB5cXKxoyn6ZwjkjVvb9RZS2EEeCso7KTZdNG2NRcNL3AQi3UmFJsp",
  "key22": "ggKna4UaH1JraiWqnjoGdCb4L8NHKsiAJYhH9PFeE6DBcPkppboTQtxMrLF2WqKDzPqbmvVbbcDqTFH58evdf8a",
  "key23": "5SzDkHivRndHpEcHNAzR5kcMYAt1QH4X6hdZdMMGPGW35GWPdY9mWbWVYSM1X5ivsmv7xbJNjK2bKi3E1hh7812P",
  "key24": "2snVzvcdaCVu2WEzto2Jx3rJvZdCY6euNsmbkSvopfBP31xGf43Xtm64Rc1ahz7x7eCvpEEVRHk8xVEUoHd9usge",
  "key25": "4UbafjLNcsiDvNtEpkL42jehfXSgnN668wRN5r1sams4G1aqMEu4kA8BQiwExoiSYwMWfyZU8wBpaHeMJh6t7xRh",
  "key26": "3YD67Lq55Tz23tyK7V2NyPjo5EY8Eqxm8C2U32g7yEHeNaHVx7LqVecQvrToqHWLsLEsAS5BLFZS5Y8EskMdMoXC",
  "key27": "4DwKu4JePccpZETS5p2Yyt8dtDc3LN4fXUF9AmCnCTWd3uzdpettQdsadHpEJyWK8verZ62nMrEYFBc8XXFrP4z1",
  "key28": "3mBgkv41fYGBJ6dfLHqzfWQQng8QhMfupGFo84fPx8erUdBWwjUnimGshZDy4eQRrxUa5Hn77XCkhgevMp97UWcH",
  "key29": "524WRkqgYPV3h7nggAv1PmcDRUFbHPRUEcymkEC9mxtNPAtvRNQKSP9qE8rhZsqW1rLLwjYW2K61KFg1WbYz7st2",
  "key30": "2F3sLEwhJ1mpdQoB9UrhdFiLZLwWRQod6BSPjqzy7KczarxwSdpNvbWnYwszFL4FkDTTDAgS4gngASJyEi4Ze3AT",
  "key31": "26EtpEaV6qBzCZNdoBEseG26HUuCNEh8nGFyrzUA6HRcUNkU4NBisWjoX1H5C8ZRCbGo4j4V3JxxUvhykLVXr2Mg",
  "key32": "rBGqYffJsqHEP2eroHZyBiYyDSuo2nYkWkjJLunenYcPCt1VFkEaiegS93KENAeBE5oBEBK3vqTEgX26LbYgJV9"
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
