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
    "2iPWb5rt58oCAS4PXxXyhzqtQiGcqmbLUaHtwQQvvSaKtuYmLSK8k5P8tbqaUbHmtMr3Bf37WVu7agZ2ec5UDorP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aXkWwnBnMRqy1rQPHcjMKQyVBS2qyccqH4GSMCYJ7FWee2RGDMb9arrZjs8Xu5g24RLy5Ays3okqtNvKnKfgqrz",
  "key1": "8e7wXN19KBVNaskUgoP8aooEKCyTbqe1TvTMXf4S69TgwGavJFpDUXAeZn1DpdH49h2cfJAFQ5XdLvx5BMECSca",
  "key2": "aVv2aAQGVrc9x9fwbEsPKJLpYEt4jAcu5wwxsGMnrVZHh684UXQAmLyDgK31hxJXs5wdND2o2oeRE6Z82ehXgyC",
  "key3": "pEjgdHWpGdi1u2oqryabBLndPNYqexENEDnhuNtaacsqLNVgDne1W669cHxsVk6B7JmXFn8HRtL6ZzRasRVPmDX",
  "key4": "5dz62Mkogm3wBTQRPgSduqKKa7grvR3tJGyc7M9MLZa5CnHZGJkAHEQkuaS1XZN5dRT2Jby9BvaosTrNCZxaBxqE",
  "key5": "3G7sEV24FXDNfPeGZLCwmPcWHKsX2wJkhYBgPGzyvcyzayXzgjboc6UwmUCGPskvYPViUrGapc5w4AD85ByCiwnV",
  "key6": "25AAmg3tiL8g9KcYwpbnKpPnHRySrfoyMDdDc8gmPo1E3jrMe1zC5vYUCKWXuekTqwYU15TBEm5jeRFXSto2ppUR",
  "key7": "4SvStjTn3zy8vSYnxNK4gutJADvteQjBefQAAaNzQcDWueLuWYk3FFMsatKpc96ho84AnwK1mUbkcDie5DzpXK9o",
  "key8": "2fErmVXbqisSakk8avH4zaYogap1SRBosFAsrNtQoyJqt7xDVBc51eucPvL688ZM3CJasWDyMtsiRqSvL9pQpeeV",
  "key9": "5RkhPvE5mMUio6mPo3mQ8nPs6SJDqEwrygaeUAR28Ua2vqn4wQTFtgssf2fiLNahLKA7vdk4CGekhjpthVbqiCXb",
  "key10": "XmwejGGsD24MZnhuYBsFc2utbbTQLBcsAj1aCifQJUT7NnhvUY551j7sxq4Xx2qYfVA9AF77xzGJN5psGANPX6Q",
  "key11": "5jEb6DP8FRPQbV3KdSWtzEtiEt47QTT71Y45FYdntFQmgFiEfqaoFTPMcjou4ht2e9qtzdiamzCNwmuDBXMimefd",
  "key12": "2rdx76q68LL5bmz9wRxH522QznoWWMmivv77FEgfVsMtJh5YLVNqEBgcpZmsxHwTNFMR12sPfFzB9BpQLK382Y1n",
  "key13": "5oUBgAtAviq9BM5CxnUWZKp6kZ56XNiJzXDgrkFisS9eXhoJhnFvWrU1kV5c65meeL7rUi798wtzsD7avVGYranS",
  "key14": "4K92cBaUBVFJSm7GzK9RbeAYbPFbfxD7BuGBytYbeaqh52UZzUNmmoG6MSoLrQ6mhQQFkSkjxaw24nxb8yarkC1B",
  "key15": "oQAmKB43X2Fq4orCN7MUxYQ9B7jnav9xzvUUuDutz8mfCqgRkeR5TPYPcMUysvuWz1ZaVsqzDgiMpeZ46mMnBnc",
  "key16": "3ZSkgdmVi8XLNQnZUEAPP9yxsXsvGDjdX2aPgLPbtQhvaeCFMjRdkZJLNpLEiXUHb5mCTJvu4CT5sVWvoeLDG5qC",
  "key17": "2ox3iBe5d2482Ta7TsgDy7KtP8yRR8rExVB1z7qc4AkLSPWHK4QQNMw1EcxqBFr5teSseiL3kKYTV1U1qqLSYHmD",
  "key18": "5fDbUNRqov7MEmbsLVVzDACJy9VcxqwzQZfKiHaAQjDmvWW4mcdvCgTE7soyuTm6YSDNtmmYnXLqMnwgHzqHvQpj",
  "key19": "38w9JuMwENfooGLZYu2qkTkftMN2txzGfHkFmmqk8kpyPmQCsy8ZgKpnM87scXuxZwt5sGJw675q5Bzxan56Keus",
  "key20": "3a1gZjKoGjW6qbSuEZPosAHUZ1Lw2QCVuDLxTPrLW6aveLz9a71Kxpzv8pZw14onCWZj76xwakWPaUgaxX63PiG4",
  "key21": "4t8z3QWNyH3MUeCxUZJYuU9TLKsN3einM3sQWKj27K8YgEVeKrSShwYEHXacSvjaCtSF86C3x4U1WvzxYa9fzWtN",
  "key22": "WzCntEcJdcSo9DhhDQJTxtZgz1pymAevdsJNqV5VuHj7YAepzchMk9VPjUxgbmf8TDfXAMYZxFErUQLHxp4Qh5a",
  "key23": "w87dtywSP3ftCsrqMuEkUJdKin9XmPy9e6jWJtBDgLPPKobGnSsa2VZpUcjQF7vqh7WJeGF9ytjFkFqcoz4dWQM",
  "key24": "p2ZLtjZ3rWqh4gvdt4UymJWkaYFhCFtyVmjbVceiC7T19nMH4ojbxJqViBNgoEDVcxCyxEe6HwTRjP7Z2Zrhcmv",
  "key25": "3MtZzdCUgqCjnhbGa7jDaYHrCe3wuSYARbSS9uwxvJJZqQHCHbSefMSJRSgf9YqDJW93qRNW8oZvF53QL7Sw8e2F",
  "key26": "23BaaSmrvFQEQvDaPkvtXxFRALmAweAWU4dqZKkWxoy2qwCXCe8XRA3JC5xMueo6dy49Svgen5YqWccSVsfAWphS",
  "key27": "2FKzL9QGmjTr9hBtphrdTst495okkvqs6XWro2si6hn2uknnPRvYHgykxz1eStWoBux9uFtdsKiNNWuy7HZkwS9G",
  "key28": "41VdJZQkAuphJq5xEGEcLD1u2V8wSSgUkQT14niysNVYshikfbGYAwG6pfJzc9Sphy7NXjMYPW5reZqk2EJ93XWV",
  "key29": "2MeXpXsy2Uq15tmXAqJKfrDnEUuiMx6zCtwT3br9kJBcFiaCg6hv7MNC5rwMk8CDRx9zcUCaXThcjVgVxuGTYg37",
  "key30": "4XA2t3F4dh7e7U87QKfgfsebgrfwThdY5VTjhdyL9pQaSg5s8JBbB9zBYDRGtuorcedJEjMFESPV5BChpsytuKN1",
  "key31": "4MGRimezfppJeD5ACrdaKn1CCEfKZerMxTzjEPCqSZkuAeDvvWBevCSEoWF63YajqwQqGctGPykwJLgnsqKQxKtb"
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
