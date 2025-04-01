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
    "ch9V5x9dv2CaN1MNbQNc4r5m5SLKUQLdaXdQmH7FkaTMTZ4SaoS9cZ35a8iNdKvbFtnN3SogMjPD3EFQKScLcb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iFDsGEQp9rB5PsTdJ9LhHYWFBSpTsDZV5gtMvkcM2pnU35pkg9auUhktBgmYD7z9mvuTKLA1vvP7XBcSaQ5KLtB",
  "key1": "3jDWtBiLgYkxcrDdi6euNY5WeCYBdT4cev2gzdPvUS9SF3fTZjRdaYogyP5GDF4Y42Vwr9YFEwXcTSLvoA6KuPa2",
  "key2": "5EUo8k8aeLQg9XSGNQgYWNFemkQDXLxnYJDYghtAPtdxfousUMxVaFaVERMVAu5gUvXYuBda1Yc9RbijxiM9x1RX",
  "key3": "XgJE5afgJGrG6x2tzeNVCCHbB1tfAMrLCmiDZEkSgbWezqumVCsHoi88aGP6VsSx3b9GrV4D3XndEKDT6kiRvr5",
  "key4": "3aVwcUVYRnaG335jo9o6qgNEKbLoACzGzfchk9oJSU6rf5QcjzSrPPidxJb9kuxZnKowDFya5KiaPHMcFtmQr9WM",
  "key5": "4ELQB5mSVw8UAYQyxbhomWjiYyy3WRwASjBXcNsKvbwS9kmAFEYykDNTRyiikAuRHvVYy4cNwEL5hRmAnCcVfecz",
  "key6": "uYtMjBtyf1M75pA1qeRXdxU4dnwQZuURBW8pRM12id1kt3nQHkpRaTjRtEddCTrMVpPeJg9hXFAqwE5fyQ9NBYJ",
  "key7": "2k66XJSGPmn1mwARUPhC5oz72pBVyf3orGdz5dbcurG8V9mtbFZeCkXfcm7xL9Qd4uKCWwa3nKk8Bymw9hRep9e3",
  "key8": "4xeggwqiZeogZaUj8rhgeuCoj7ETZoWhJmYpr38h9DmHoBnYu45ppBDCQ2PvNcZx9pdrKTVyFqyDx7kyQWdgbHTh",
  "key9": "5K1SvCd4bctdZ8uX33VizkE6Ju9gmaQQ5DNjWGsAR7E4th3iH8xi8dfMP2k2HHHkC3xwocKUgEqK3CYsQqWft6vm",
  "key10": "4Q8BY8hciUMcEtnTFXz1GKoh4GASTyC7umagEpYQxBf3KDtHBGjps82Akm5tDLh5yN9FTiXNVRrFGVsMg8wNc6Gc",
  "key11": "3Kw99XCXa9JtwctRmEcnwFHZ2ty8GKq6wBFueGb3N781Uwm3nVYZ28NXymQ3Uw14ajfRcN2Tu3aZF1GVNz1KVqd7",
  "key12": "3FHFbaLxvBnb4bAdnsUE38hx3k4rU4t6HVnQfPsaRXYg7PSSbTG2XaWaFnsJzb5yaJawDdP5ESDk2CEDMc5xoHxa",
  "key13": "2rE26pNAkDVohByXZo7mHK1P79vEevxNxBEj7Vrr32Fcqv2KrLEjj3FHxzUogvAoVVSqxH2q1kFXB6vjvbudokvw",
  "key14": "kxxfcCw3oEYiEPoQq8FXqCA2uV7gY3TK1VnTAjPSupf2JcX8GEjs6pCk1RHzcWueov23exs3unHRV3gwGdF3Lx8",
  "key15": "38qKA6TA1iRyPqzst4hmqJFJwMh24SUNSxhHhHm6aBSNTMdEHULoKbzHfKQQLUPK57hEp55vVBUSzFMHgqy5MSJ2",
  "key16": "5oq1Acsnw5g9a93zqLxfBqXwTwzjgWgUaciLfVisuxE6DMUKGFSYkbtGFze5BWgwx3gVdQM37WGxXb4Znpy8KL5A",
  "key17": "4Nw98bDbxecRGmPdreQJcVr5Dk8RcdhubRbpYEbds85sKWxFb9DWtR2n4ewe5JHw8LHu7VwGS6kVWt3LWkXpFTyo",
  "key18": "39o3hkTv5cwKwPRxp6U7mtcLuKMthMU9YUYyqUMeM5BCLsdbQFrFrSi7Dptu77cYKVfXCgdHH2rP5Dr58nWRXPr7",
  "key19": "5MzfDBWC3Fqm1YouY7gSzUVbF4e17tEXUCyje9ahyuGYugTPEnTwRA5tmrbQNTx1AGrastASbkgguszdbD7LZgHt",
  "key20": "iowZSytkdguVWyp4ypSWCSMaSDtB6vjpm69xBph1jBUHRq6H7JdPHYbphytW3aSemdTKKaJxSCw6p6m4AcZe4km",
  "key21": "3y5G8LXnEiYzuoYDtEVBaEh1jG2sgDZQFVx6mSS3Y2xRa9JrrXwCyubEhaGpw2uzrmbXgvT32XdghnrVUZaJd1YP",
  "key22": "2yKHkhAucgbdiH5cK2dt6jwScj7mrzCqBnFh13gPygmne4f9tCPVwuhaLz8nQ1QNLsxmGfiJCXi3vNQsKGcfg8fv",
  "key23": "MG8LPSjzSnXmTj9JkLuT73d6i7iVwS91zE6AEhdwK6yG6qhxLnZ2oymvAuFiE4pL3iY4agA52m636nyK6cYmjTM",
  "key24": "mpJ2p1YBjQWJY51beNUzxmDcaCt6onhd8eYf7H9PHJYoNzFoWhgGW185nwyTXvAXciWD2kbEJqemxga8MVbytXc",
  "key25": "YsAeSUGTEzDQp7adqjMnkbDHeCPWwXoFnBh39YjMskiTa8XC1kka7QBg2t1fS1XU9oK3NwYnJB1v2fzMbPmeZ4U",
  "key26": "2xxxEPEvZnkfxv4fmKgpor7XV7cS281sqNufxAieWmDDQXydb8pYdhCaygTBqPQJ4uGUecobY1tuogDPAZPR3M1Z",
  "key27": "5bXEq3NJBughUrawHh5BJ9yoyuK5c7MLiPrCi1zdwduShdxXd2RXr1SpbzRGSD72KZhHeJD7cqxgHQ5bE4gcmdTq",
  "key28": "wjuNnu77PuqcYBFiKLrdLcREmrWfjzByrj9tgXyZ1CcwJpTRpEeN1EKrBs4yVZ537wy8nyBzKawZtS4xoGgtjhx",
  "key29": "5BiH2SVP7tq1qDKpYU6R4HaJf2QXJ27U3Vagu14uwrm3eU9Fv4N4ofXsYT8HKAF3ZJnWMJLHFp3wwcx8b2gzXU8i",
  "key30": "cnPJ7hqtxBDAjpn4AUmGwj5qVAowiehe4ptTAcm678MUJnemKuugattToo5rzaRvYCF4DsHCESd1CSPpfGBcMXd",
  "key31": "5Y56Ud4XNWRFyvmiQMhLYieGnstvDJPVvaM1LQiRsAA9cQ4cUin48Hy6rjpkybpvGyhSAoGKQ7rYMq2SDfJx7P6E",
  "key32": "4auJ6R4K3dTbrFjWjhfjryxCmYQ5t4wKJVgPFDXf5f8rsw3eip9Ue8XSVyuccZpdjBitYcvJFtHkj5XaxBfbPrzo",
  "key33": "2rQGcrV6hXLUErpFikUxQb5TkMrdvvSCn1S3zmUJ36J9Gk9tubLRH98RZExo5Fg4Wdtuc9e1juN47WzeN9ZBHYMN",
  "key34": "3A3ta8bcGLxV21E49bwm6yd3nSxuSa9K1dcsWYihCFUjUTm2oUJCCb4r2yvC6cSMdJDQshAg2Rs42AE2FDnB8dpC",
  "key35": "27itLGwR2Qf1SmvK7X9cffVqXvk8sJtHKi5n13PCdaoeGJGuJ9Gz62ucWtPHp7pa4W1nCKAVh9atKUjBG6REJMQJ",
  "key36": "tyqVyQcZzvA2TXHekt9ruXrs6hHQ2WekdrLv5EHcqayXsBagq3Uhxdm9aa7bL7AoUF5d4BQNHqCTRk8EuHbeF68",
  "key37": "5DQXR6gvwbt5iCWisBjsuw9KNEyAQaL4Dpks8u6Q9Mw8jTmT3LEKPcCnz3Rt4iDYtMV8QSRa5Dctde8snzCcXSww",
  "key38": "4GPXjcU1y78E6TcKPyqJxUYJNQCcVmpkRNNmPp5UYWWxBsdYrXVnr4osoqtrTBeNTgtd6pQGjnCBExzcwNN1j62e",
  "key39": "2kWeTHifz4JHsGtdtcR8V75qV3DkjJZea4Uz3SheJ3t9t4U1UrhVuPphpJxdN4nHqEYnr6ZrUjmFy18oBRHA3zuP",
  "key40": "5DcRrR98zyvSgsFiu6R3F5eQoapk78YrCwWk6eijNgAPytNsqfKxWjAh9D14Wd4M4UHeexzNoVj57W6gCU8zeK5e",
  "key41": "kW5cKw6D8A4auiyYfCYCgfPgHnzq8Td3DBT5kwwczm8XkSGWcPqCWgpr2paoAaFzveU1kqJZRtqHtA4eSjK3oMg",
  "key42": "3y4FX1rDHq9HAy8TSwRT49s9HykHUrRVSBkBsA5ZSUqsLyUH23UURndak3Fun5vsdG64KXh1haLNr2bHD6jweMk8",
  "key43": "DuBBoAwAArqjcoPSxcMw5PJL6LHt9qcSbE42X5mZxPaNdkpj8iL1BJsRdjKKWufRVz1Xwno4EMtarALMqZ9FcVF",
  "key44": "3x99CpG7dYLZiZh41g647SXKbDGaKH82UiuGj1Xq7AgcgpuSxqsccq1wXdBNGP7uGx8MdNXZXA4KKkpBo3DiMsgM",
  "key45": "5bxhkTM9w9wYkZQfW2VW8YVQmjLvmNL4rx8vPK6Jafe7FkA5hn23wCdVBkbwzotr6WJSJLk3GzRZGjXsknu8ccjk",
  "key46": "4vqvFB2TYGvXjujy9paoNNwLLZENw89zU6v1QNzLwU5XcWeXF1RNqcEJtRACkXU5mKxbNom69M2bRFjnSJphJYxK"
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
