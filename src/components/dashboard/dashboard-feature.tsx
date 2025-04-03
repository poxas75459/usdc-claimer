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
    "5aBrNLpsevmfjTtqsfunYEmtxDDg22foLWAspSTED3L3L31HgfdE82ktQbdbpkvk7whyb9P66Dnv9mU6qYky9LJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rZ3UswSCdFowEpWWuS9dVNG1pdUkPNgACp9981tAcbLvXPM9XgVGbqchGVkRyzE5ze9WTBEnAZv2akfELNqQDgk",
  "key1": "6W4KXr19uJGEWvA1AKmMJLuCDXHD4cxAc6zgxTziKEAKWWuvN2SDDcg3Bp7virRP9ja3eL7kDKGQttsuba5hquQ",
  "key2": "3qDtvYktSVkTq5ozr4HYX74qcru5N1AXd2vkUThkD3LtnhYkQcCrBKGY6BbWp3U6As1gKxtH3GPGHiDCUh4S7Rdh",
  "key3": "XMNhpXJ7JFsGbaVXX3TX4trZMhPkNEqhYDbi68YZHSHvjuHGNYRrnepdddsmxSprkAenjrkEvKTEDy3ioQsTrVZ",
  "key4": "3BmNZJMvemcXmvKcxbr37WV31wBYZc1aD5FA7Ks8VJ3fmPod2j4GeJuEeyGCYfizdH4piEENYq6Qnw9aJptLNTUk",
  "key5": "5BuJ5k7pKsUdsSMqRq2VzwZ2TBJM7iz9N1aM7u6V6vZBLiNcThvCaKp5UQN56CkpGzZkE5oD7sv58S4reu84PxGP",
  "key6": "5fjgp4wxixb3UrSow3q2jahpsyf1kMSyig7z2fweGdAV661K4qpcH3SU3rFatj3NEzn3BhaMWezDt3CuJupDyDfD",
  "key7": "2CiBExZoRa9X3KfsiyNoDNLqpjTBgCBxHmaahZm3CS8CGSPyxjBueQeAQCioJ45k39AyKh8bFrDkUEm6hivVNd5N",
  "key8": "4Gx4yT1qohNZb1iu3wn5Yz1jBHQGWMDCHcWysz1KZuFrbz4A5b5iLUiVg4QNpHktwMV1sqifddkW4DLyF9Ger2m",
  "key9": "4eTjCMJDhvBUw6SNRsudamKxRAqgcXu6wJvg4DZArVuQ5zQkRTbkkABS2zTwxDSmARK1Rq69wjyKyPH1eM5xtLgM",
  "key10": "HV9MnGW8aVvp6pxaM3Kqi55eMbma4GFxG7e9mxV12Hp7WERQAjA9YQB8GQeJesNAgLvtyyEg1adNCKtzT49sBR3",
  "key11": "42BfaGE6N1Py2zzLSvu2FtqdrsNN5pNwbuGaFnLnC1UuooCSTjPKomHGnumVFBm2g6vy1EMfUSjvSnHiBS2DrJFk",
  "key12": "3efR4b9RBSAk4eGozo7ErWXFgfACbhfeW152kGjZzSCsF82mycEU4XLHud68JVGFYRXkT7Z7NqvrU7Lx1sHBBbdE",
  "key13": "4dc6JLejyBbyV76wykhTAT2y3fVgug7yeHPV5TCPZ5Cnrc1okDppZzkpqmQWt2SYkXsJA73XdUPSgZuBJj5eYmWC",
  "key14": "rT3S3T2KFaF4zyz64LDxyV6QxALrfVjf8ePe5RfDhPGkkeKY9xev3VprDzZ2i282nG3mLMSCScfM1CKW3xgQwMp",
  "key15": "3b5y9Em8iPhsaxEjj85t4B91tTr6e1qpEz7KzPJ16KG1WcK5vwXqkuQvFABZS5EpBvxGK8pe6xafJRb4AC93yiQM",
  "key16": "49WGFKzaCCRjsxEPvbyRbefSiWWfqGjhw2j2qX8Gjf5yoT7XrheP2nMghf2dnZGxbuNxPg3PcyfsJGkZHn251rhD",
  "key17": "5FZCH4pnnWpZi4U3ES2Dd628SDYNrhGHMqf1a7RQokAKEpD7dn1ZPvKEksKPEEppCQ6PJadraDHwNCW2n6F9eKMu",
  "key18": "vvsuE7Ad4hsEkzLMENmwuDSJzwZHa7G6AGpvNpeK6LXQVNUevsQBxwWQ75zy5LtW4W4mtPt7osVbk687t2A9teb",
  "key19": "5qTqjgBbSTFDP7oqW31GL6F7oMvTGcMSUsTQLRrTQbvhxnpCZnpdn5F11RBxMqYFa2xnf7AxfAjtkKP22xhnMM8j",
  "key20": "5ZuWGYkzZGmeFZePDpj16CD644kY2JexaP1FoumR465noYrf5HcfHtqwxRkrYiHujW45p1UMyJcFwzhyaxY3TX2P",
  "key21": "2QogCmLFPeGq1mCH7NM2SpTZCKCGuZvt7SUjnFCA8ZACkV2ZrCKGTz4STUGdxV7iVkyZ8C51tASiKWsrdxhSAWDu",
  "key22": "5BJ13Nkmpne9jE47v7sW19Y9tYCmhqsTSbTXpiQJWxa8epnTHvRFY6VDxGtFf6QXTYuenTQiTDRBnnpn8aKAUZhh",
  "key23": "5rxZ8AD4SfEUbb5r5jZHG6Fo21buJhBwAuYaHc2AXS9KrVZGU8sceys6CXvBMCNLLd1RA5L5GTUEwhTnYXJmWziA",
  "key24": "2F97Kv9tFehW54sqS6YYKaEmj6PouTTZ8poUugAaKHjFxHueKzQbp7EMZKsJvrBzZQqpKUqznLBDt64isSCqoEHf",
  "key25": "27KEvMrqubLYXfNKg6M5LP43sU5umKTNiRZgEqzfwCvWojQnUyBbW3hoEG5DM8Rf18vbpW5YYHVKrCBXCSzGHZqX",
  "key26": "QSnBTYckQiXeEs8XNwXuJ81MreFksNm6q75eb6qCDibCoGvmoftXaSQGBWU4dJjm4wrDwoFvXPqGYs7FVnLkNrx",
  "key27": "4MKd8Gt6QcGmMcoKmERQiHoZPFcd7Ua5dWumU8ywSBJxyP42jd4Roye7g2SeMZDPbQmvLTNMvw9ji9DQKJpBrMeV",
  "key28": "568iAUKiknxHeo8gsr6C63FoUX7SEEvZ2GD3ThkE7uhLwgKQ1DAv85sToDgPThQkViLYi6WiiBAu9uZ8RcRfmQLH",
  "key29": "4wj5AKwkbFgrA6ecN19vtxaqMEMVBixESRNNg3ak575FTbwkEdsqGLAgsqmidX3Br7ivkiBoU7FfxSNchoVjEEoT",
  "key30": "47tQnrAJqJQHiFFQdbKAoSJhXpkTFAqnypAK3YaUUmq82P8DKYDif8rhgvBNdS9Y2U5yqyzxU76rvuV9Uf9p2Jhk",
  "key31": "22oRvizktVvmd5bz1MTwdqJWaJfTtn9zSAyXusmfmwUxcDDM1QaT7fkb2tqDvp992hVM7uvq2NT5nZaGHQgE4mJm"
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
