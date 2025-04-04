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
    "4R8Zw9pX6Vcn4RgkY9BLqWhkoCnsoTbbnNf61u9RTqNTbkFPMSVDXaMDwcwfAUfd38UhVM4iizstxAaye3cmid91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yv7A1YW4ibzL5sNrjg2DHPst1QJKtvwXMvTAVwAznnt6EKtpkKmPVUbmf3VCxfeLDNvrNipD1GQhTDN5faTJH45",
  "key1": "2HTu6tjFkHsEn1N5wK1ntzAWhjKUpuj7i6E6wGy1kczD853vm64d84mRG9AmH6XBoLipnyC5uCS4kPoCwW8tDtP4",
  "key2": "46GAusKFBPQ8xpVdBopmhwnjuXmfN59w4k4rzyerGJ9HPZzcpGHxcryXKtW2Qoxkq38aAbJbU6bHVvWKo3VUvZEz",
  "key3": "3HUuhND2cWuowymKbDyui54q5Nnpi9fzT3dMiWzopn3Y71i8omEZLP1DRSCt6ZCvHEzNTPAbFmjvJhW8m1bzHre3",
  "key4": "5jcTADV6amcFnGncv1s1LpC5tfueqJVzoTf9hVmxEku8ih2zKvJupYGeysuzxmAFDqaMC2NxBFUMTE2hRsiAsDDH",
  "key5": "aMoSezuJt5CsguB7UWNBWrpW2nyr1FghckBWdQARLyfDS49vSpmF7fooE8JxoLu4B9STnwwv772Artmw3souZci",
  "key6": "2b3EnZtmSD4KqgyQqUGMgeN5HCLFDhhr5rQro5pVdf1ZPieGxBQABHbu7WB9JrpUuz9dT5f6SgBrZvmqRJuTPkNm",
  "key7": "58LEmpLwW8bWzDwh1W8tq5sTM6rKEGetDKBU8QSdLSYYzM2uQx5Qvc9BnFY9cv7AVStSpLw7ke9hX56jyRa4mEZ5",
  "key8": "46dByTFvuF5hHWcH5H4C6brwWqfRV2w6kJ6SevH4Vv6mpS1Cp6KaBGo9XV7tE3TvWdZAX1qwNwMsVqK77gu9eyFq",
  "key9": "47dDcU6uqHfCyAS82TWk96TEZkJHdubBoiBnQpJfV5jD5aogXVvFb3xToRMgH7CEzcbJoQpDM7Kn6fnus6p1E7LF",
  "key10": "2j8ENMFktgue2ZoHGq6v1CqpwmQZFcqu4p8QcqkBtfZjtsozWF4FG8VGJif1HbDxUyzEPydpXHoUPtGRHtTCfrDc",
  "key11": "3WoCH1gUXjPLPnjWVq5HPyCeDup4G6n1tU4TgwTgcucmijgtAAiAg38vdXBs6FwYrfDL1LSC8SHhJsupocqNfp2E",
  "key12": "2fHuwv43WVCDgyVSv9pXjG8Gdnc7SHNjYpr9p1P66sJz4t37gziJXaDg2g7gd2dpsbTx8JivcED2Pux2V7bUUq5M",
  "key13": "3fBfHxoLygtxUsQWmqo8gopEyqUY6XHs36jQdjPdnS1mtcrVhYbSP7AGwyUatmfHxLMYwpCsMAHNmkn52PuM9uQd",
  "key14": "2jiiWUtXYT4CFUVQDPpQ7SS4GYaLLHr33uv3Csz1xoJKKwA5itxyPBS8rwYshJUphS8F4Epjdo7imBMocDsDWcHu",
  "key15": "3VHQEqRmD5u6SXLTtdjzUy5yewBY6E7aLdDa3NQP3xJB8SzGoeqQ3AMrapzvNFYACwy2rx1XA9LTCGnFN2vqeQmC",
  "key16": "ano99QocaksJrAtCRNcF2kj1D4fwNMNFTrjEbnByP17teoVB9XnsFPctfKYk1K7NJAekfpSkXhvihwRZCq16u9j",
  "key17": "5aKrPd6dBtsoCXiAQyoCtqbqoUjwXop1qfCoTVMFjUx77akozz7AuJWaVpkFHvBNrhPZzzT4wd6Gu6gNg3BazhN",
  "key18": "3Vco9SXQ59nwaXR3mHyaxWLkkxggoLYWXmyesWkCNafvAPZ2py76HoYv8GgWccJFHVp2cMqCjhQVzrnRwsSEcFY9",
  "key19": "3JzDTu9tb9vTV4UMURviRVWpAKAmNJkdqvBUVe3DM5twfFdkpiGuGLPBAo3VBgtw9TWhhwvx2K1Fdr8odPAYUZmT",
  "key20": "46ow6qVdN1sfPFnh2eDrrsi6f4YTji4mRbXMFJnsKe2sAZwmr8cHcVDbX2BKtMfeGycjzS1q6QgSeemMhKJ1oJuV",
  "key21": "2v6x84XkWL9go8bcngJND8K49zhDEq1967N8FNhtVejjbFef3iGEFHg1WB4H73gBmrqKuug6yDQ3uAYKhLxUJxC6",
  "key22": "5bjn2xAiTy3vsuCRfaC8YuQWCxtTip9pHjcXH4uHC9snCMh6TY5syYyWANJb9zmg9BAYU5DZAdPMNCd65NMK9Cbe",
  "key23": "2BoXDvcP6BRzq8dKRB76dENNgXoG7XrfUSzXEeh3CzZsyh65NhdCFM4hsbuaUXMUZwLnfyzaF954DhGuLkJ9ZaTo",
  "key24": "5MLMPRsr2ofdkLXo2vohcAojSn1fP7eRyKWCanAPMJssoRFz7xiHqSmVHHX67aZyj1T8XeToGewypkxNoS5iaMvq",
  "key25": "2GP41Q5AE7mPTj2NcUUJjE6fnmnuJVnHAfU1BchRLqLQA8fC2nqnzm1zJxpwKdYmczy9JSH4wWUnNbrTeXa7WPU3",
  "key26": "2A7BbpGa1gQqnhBreipW4EXhv1d1sRmw8q4MjQxHemzvVpy8qnvMefrx7cDcVpyCrJ644yHnc2NFGfbez3biaQ3X",
  "key27": "2D6boscd3TivMYfNJEAJjjsxvJW1EmaPEKdqrv1QTvvoTHFHZNe84dCTJZuHJHaTUq7RrW9yyzNNdsbJXZNHAzH2",
  "key28": "25TENU5M37LwNbdu17kvhePSvRzxTkKzvpURx9nbSoo9k1djmMCEC9xMgK4WnzGLELqTfsRbcB2LbSL9fxj4r4N4",
  "key29": "YBKQujuappmz1KEtbtnHMgr27VMkjnDA3aXrH2f6jzfHACPTBw6KpnYbiQihXwdJUiwTXvcyGf3U1aqHAssr4N5",
  "key30": "4ggLp5g4kQPhBehibgxwPAKPnM2PMj8zwzmWAUsbVR5sZEQaGqeJ1MZzAVCfnhDjJXgsGncPNqrzN5CP6ZQbetHg",
  "key31": "oYx3qtqDFd4Xtxrcsr6mMjPU769B5cTQS6PMEky6Ss9cCf9vYZVt1Z2ppoaVEVx9WGPYfHbQdAQ1MrDgM579m3Q",
  "key32": "4HycZpVs6y33keQ3DPo8uugYarJJEBa4Ny9GBvCWiUHaLQ2xSrDMKwyWGhjPiedQQ1YDGFkCiNsBThzJAu1CN7e9"
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
