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
    "3q3uV553XGVW8zousUMzo9xaFFUKDLV2WzPxMdEaWDtoWApBubZsAZQqxDjB9KUJs96bijsWcWhmMN7Ggg7pacm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64auB8ksM5qu54hdTvPMfkAWjE7qHufYvDB8V5hToGiHbeHsjzr8fVm8gMtrgB7Aq4YMrc36xkkty9sZ65KRq7tT",
  "key1": "KaJfqrEqU7LzmA8aMYGH12u1WQLZwg945vJtkSaKiGX7A7RjoU25TYCo76YZRchvvmfravTHxyj78V1b2VQ7YQW",
  "key2": "3xtuLtQxmS3KoJZS5ZDbZdpivHwmCiAC3bbr2TkxwsasuERFDLnE1CXGMak4ecNF8BLgYYMZfTJRCpZWAYyPP1be",
  "key3": "66QjBaNzY8gcJASnxxcZSqFUH4sMvqeMfZxuynwxqxbK5ffHQ8TiUbnQWADWPGp3vvpndQ9pKfVLN3K4aRqcpQtA",
  "key4": "2RB4pws6zWSpX34n5jTxSbxtAgtABZbqhixfipTsnkndoBAXFMosBZWYzGwZq2bFUy2Vk4rTYewhwDtoPvV3U52T",
  "key5": "CuBMbXP2tPqBHRD6Nax8JhoVSXcF6A1MqCEk3KZ7pz8M1RM5P2aQazkYvbbQ3xz5qkyH3SAZRa6Vtk2zSXz875e",
  "key6": "c8GSn2LScMS7HVbve6D4i3JWFpmWqXd7DcTmSaTR93bHKNECDhTMZCREzbUvmxM93p5RJztKC9QZ4mUVHuSK7h4",
  "key7": "CfVePuvNXY5aPCgFMj8ZNhJ9fqcue3vtnTFmmyfU94L8gaY8JhcKwjZMXyjgVKMhXknCoPorupJFYv1KiRWntAq",
  "key8": "4kT3QSudGumVuyxHnRFELi86d993WVABvT4A6iciaN2FfmAxpHuNDVnMceybGPuKLsEviDKH3deh8wr7iqPdErSA",
  "key9": "4rqxd2JATv7y9uMpce2e2Qmyh2V4uicEpewCqnwsScyXfCbGhHR6czENLeqWKkhGzjtsLJkf83qUdz8NRuzS8RBg",
  "key10": "3nZWeCPYxjxhT4RQgGUsx1dZSXjXjBMNQCNReL6FuBpvZFK8dBJd5FHYBtPdVNpZQTXgDtCHyGjkAtk7uWey671W",
  "key11": "3uCyLdhVAZQUbiVQ2S4hxzBp8LWCptfroVG8kZwxtWjHZYhZ3FU1GB1cbxawkun1rvnSfQSS8mKUAHP6Gvi3V4sK",
  "key12": "4syWSxP3qbW2uNhu2fsWbjFWphCiZ8Kk2GTcpMYNKM6tjKzKaujH5ydxDvJ7Qszg8tbvz8WaEXq9ZUTRktqPZdcj",
  "key13": "4cdRNdYBcuMF7QwSQBGNH2oQGH5HZwRFdPDN5GEw5pah67mye9HtoN4hfwpphCkEsdnwcAnePKU9CdBtSVAWs5qo",
  "key14": "63xJR76F1Ygb2ZNKfQRedXVayFJCYE94LXkMYvhor2TKPc1wq6YHnxTMUHkiK5j8ifz8YwrN1EPjWMqYo15nBtvG",
  "key15": "3yW9B9vVGhYh7Q2PTh3sQftm5WNwaas857Mq9QS523m9pDGsUrcLQtyioar1uvH7fn2L6tKz8nyHkYB7jHU4imeE",
  "key16": "2ieoKR4FbgJa4QxdS2p8Jjqw7Lia9Ka7vuZfQa46LAZ4Aq6s7JnjzKq7LYYDc8CpnVnVU6EWFBnpPR5sUQaVPaXu",
  "key17": "2kmvGrkKrm47QRauNSNuxPX2NkRbFe4sjjrwifz6vWXXst6WxzVeqjt6o4tLm3Pa44sQqTqS83bGU6btKNyDut9M",
  "key18": "4AWVQjQdLi5ifoDFAquSqt9BKdQGFjf7DTgUnMTka9gQ1NTaMaJEhBczbHN2MGB3bewq1kSAgBZTGvy4ut1TBY44",
  "key19": "6NP56KkZEGQpSpo1zdWQNVQKW2XhG2wbubU1kxAuUAZ7Eegko4v48h9tDGNSEQhFXmTLgSveKt7GDYbzuW2yLuA",
  "key20": "5hauGr49z1Y3RPYWL7cSLSGRAT2k4CA9NM8GbQTrJxy7aPZEpdFkzKytBvr7jgoCS8pRiqxZ2unwx1QbW3Ropykq",
  "key21": "2q9awJndBeERZVD51FfQSzSoVmmVPwY9X8Cu1j91Q9kH2sM9MUUdcJDtTAL9WjVchawWiRbVoWmw16rFPQJJnmhK",
  "key22": "5F7sPtsBfb21Rf6x6kKBNnQ1xmUbp9M2EAVTnfs7LyLe3Mp9tUp23LE4wv3iNKHdhEax3B8QTAnUQshLT7Pw6UUf",
  "key23": "2gZTbJbRoYJthQqahpBSdX8MWtsugG2fzXSgUHFLS7ukohCaELjBgouMqY5kBjYKotX8K1UAAVnuYFSrYMPrLbAs",
  "key24": "2Un8VsXFkHVBb1WWK1GZ9ofSoSrFGNYFtJ8ZnXuCxiDP4s8VumXrPBcPrpARrAA1RPCQNKpSkmtsewdN5QLQ875Z",
  "key25": "2Yg8pcK85XtNGi9eNkp9SzMBEqt1bDW6c3NJ26ihSGa6aQPSWBMpAxtHcvfUpMoGjf2nPFtB5Kvq3JgDcwCekJ2W"
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
