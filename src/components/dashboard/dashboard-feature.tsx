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
    "2iB74UGJ5biHoEgKi4iwTPu6zRhePXgNHdAYujAf7tBHuYHE2zjdyHTrckaQwTF6yRYmWF8cn7Smr9cbaHPWR84y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y6CDCTAP2sruCH7HUaMgkYNSQM6Wh3ui759ebSXbXrKcNrkmfZmdeiXKfXca8EzGMnBx5m96Z4v1U5qXm7yZuFJ",
  "key1": "4ZuEhWNkeEnEsamm8eMQ7qi6jB5WdJHteoT7gJKVHf4L3oHFZoDvFHNYAL7GY2qcEBT43TbffMsgzE2qQYKzb4rB",
  "key2": "62Rrxh89QhaSHiir63V8LDPMtxaK4jMG3mQeiDAQy7jexdzTCmGbyGD4cXpUTPLbC1iwbeoDQtr3js8BWCdj3bys",
  "key3": "2GtjTv8pHCE1DzksTw9x7Ytem3yBHXMb5r1bp9dZHFWFaLNzA9UfGyTSMubrJd9bmmidJDNJYbNLXh6gUFphoySb",
  "key4": "u6Tedq3sJKHgxqVcyzyVpmNWB3q6TjEK8y3ZQxh5PMyQiq3KzGRPs4tTUkoqeGSFmaxDtQgHGvNsZ1G82W5zn8A",
  "key5": "WPbF1UnE5hoq4QHJPHgcFNHxnkbhvy9DA6V3pdqVLHZdxT13odTdMjKqo4WCNhagxWMov4F85xFWnTBEAHwtdoj",
  "key6": "2ycxQWihsRRytFqwgHDB6Ux9fvbMqnq7a6SrfwZ57LVmGA5pi4V8WycNBs17SRteQW1qeyjZzDueqdFuSBsLJXPp",
  "key7": "574d6pREbF3ZUQSo1DXkpKDP8CeChD7HnxJdEZzyve9HH5CWmPWE7mF6iRKt5guqqjov8ep48myXdHxCe5RFJ363",
  "key8": "5rYbHGgpTiB4cg7K5MLbQqVaKDAtAUgiLmeUvtRQWsHzNhvTC5pnfFofzC18gPcVb7tdnbVuNte8hPoZXSz9EVbt",
  "key9": "2pvTRLhHCEJb3Kw5fo6SAvcFAzuH5LDtFpBii6aFtSe9uT1ch2QvqHUhVGjxStMLoX6waRYCer6jAvmkWREUYoPy",
  "key10": "4wEz5xez9w7TdRxh5qJdgxQk8woNFXHJtwacJp5j5cFDnFkPdhqvPrNisq38HQ63KosfEufeBWnrJAh7v4b1KG8f",
  "key11": "33ZfCEW71KSrAJao9fU4G1pLMNXh1BM1d71d2hMwxeskxUybPc6mAHaYuXAuD3ohLoCzHtkci47Tdn2DtxzMd8BQ",
  "key12": "33nsSTA9m3Ei5DNPV7wFqbeFN5AtPqdyzRQ1PMB8isgzoLAgGSm4aMbNkfeAZbMNJMB1KkgybjbFzGAXe9pzTkCA",
  "key13": "3tx8cWqHkdLeYgFi7BS2zN5pSXhNMXAfDbdFbusFEMGMoa25gms2FBnBbuTPKEYCg31hUUU5GCkFHXL1yUtdRnXA",
  "key14": "eaHsur1zrbC4Tip3GSaWojyWDXdarZ9hGDAeLDG3afPLf1ZAWdHJwfeEqkfRPR5xzkc9GQ3fLcwfEtqHcKRfSm7",
  "key15": "FMVsByyHV5eKdcrnzVc5gob8sPq1rafq8HtAx2RQUrXsdhPdCQN1J73LHHyktj1G7EfjiJcMmDMAjm2aNtP8KKy",
  "key16": "27HEvwCushUh14aYgQAMZ2CPsp3ZbquUHioEoQX9oBAdNR3TTaXEDZxsjgtbnRAYZNgreePXH6FqjPuq8rkDqfzR",
  "key17": "5tyFG5H4A2pFohAE5PkEY6CrNnoV8DAhHvytg6J16jtrnCVQCfd11V9o1nfUgULHRWhE3ABfayW6kz9zkn1nSMJP",
  "key18": "3NSuoWKdeZs5vJ6JnnFiXo3KizZkuNUd2HJAEovNvGnW6jVfhqHtgrJt7ZFKpEcQiTbN6aXTdvZMhBeG1ZifKBL7",
  "key19": "5pv5k1YbVPBbjwuQBaUYDtYWv8uEDtAhRzuQENJU8jXSLwZosnPZHFZp1pF8YTCSGfdznmCb48r1QLpBi7chLfVU",
  "key20": "4eByMNKMRG3EJYkhozaiaEH6qNV8eLdyYUP4S2o8NjcHyf4m2hSxzVEQkx7bjmfTop5cPNFvcCfDf66qPXGisJFY",
  "key21": "66BL1qStrqUJ11NwhkYnmsFYTtGEiZAt8Uo5ikQgvpGuV76ZscQoeSeJgSRvSZW7Dw5F7fd1qpd19c3ppZivT8yX",
  "key22": "tXuyyfLgjQJJoyQ64hH73U6rRy17hkXzsUN581c8wKB4Rgd3MbN3myUVBx1ACT2L3AgYuSsU7vsZhYPYAKXkBkj",
  "key23": "4nR3VdQBpjUu9bu71MBzabMrZXqnjtbRdKrnVaYjnLeXwVwmKFG61rngn8wGcsz98VX8fdNx2LV1rLZWnroZCpJM",
  "key24": "5ryowt8o9WGz1A99gYnEpncNyyCmRCQB1qQFcjj32q99NzNBkYTrm4EW6XmFNsMpSq6foBdFiZMTn626PHSvXNj8",
  "key25": "61LoZPxP25CbJdr8hJ36pJ1TzHCfjS62NnZgqhrCJUQoDdRk26EbXD5jHb88HGRux26E4m6GVkvatmQ2vFa46i2b",
  "key26": "39A2vGW765MNYmtEcvibJwYiehWuX3qtL2h1XgcPZczCwyz2xwqYpNuq2SzwTccGWBdUfPhArAs5B9Xf3ZZsPjz9",
  "key27": "2cQL9a3w1e6pMSf1PkZzJgKg1syjPiBzZ1nHmi6LymFCFRmY2uUXotwdw5W2i8vq7YNoJv5H3XxoNmhnxE6nKs15",
  "key28": "5cUULLFnZ2B6H9gh68FFMqJ5Z5b3A6utQEZPVzaaoHziS2CwvnVVWZsfMRf4vUL88Mbhmim3ipmB6yS4AosMZC4r",
  "key29": "3FcpYUZJydVJa9VRJDsGhL5546N6R2fFzpbPykyu7Y1gExxAG6nUKZJ6xHZQLFo7Y3VZoXXc82nPdRpbNB73jNz5",
  "key30": "4zvm8cWMBmP7ihUuGtRYR2DkkUJXP3NnLc1ArQwHEC8RCcH8wafD4w74fFe96h5TQzJnLpRqBN6GZfHf3XGYUHmj",
  "key31": "neZ38oWf8uWmGwebXYsSq96eNarjLjQMWERERZMmMFvfza9gTPUgM5grk4CfUiKdG1LUXdNVT5cLP3U2YJgFAam",
  "key32": "5nGvdxj3JB6kHW3PSdArSVMAgY2AdrUgexi6g6mbNZ61eAd2xLkSEwwcC5G5VcdwifBbWEYeTVGcveSGneqHEr6b",
  "key33": "27SsKVvzdUYDTzHWxdjHbNg834Y6UC4KBcryugYqNbKEBkUK72rST9N8iSvJ98CgwwFA7KBmTXLq2NGNJU6NckpT",
  "key34": "4WzkWaYCuhVYBhxY1LSHucqUUFK3KPdVdw6dRPM1UZ9LN7nsCe3mEPTbV2kXaXtos9Zhjpc5g6ypDyC23qAt4AXK",
  "key35": "qdsvEx9WTZtRKPWaNRVEtdWwSDwgXZAhfDgo5bB3iosT4VUCjLak9gMqPq7QD5btte62LVDYT4qcaJLXHNqYhpN",
  "key36": "2bN4imuyS1spQNiouqscK8XQLP2rmHjpt563Tyfjichb1hWsgx34VYBXkRpqcZS9QvwDywvLEZPj9i2ENc9E4CGm",
  "key37": "8oH5QjFR66aFr9gTh93bfDxLuvtTxdB5gEDBmpq2wspeweGpiJc62R1Tm7WKAUADXRLJcXw2c5yoruR6JsxWEYm",
  "key38": "27nQz3udKP2ccEnzyXg1HGX4edqBVMQMHGhLadbfpCQKRCdubLmVw4pqar3p6jZsmahdDaT2YNST6k15fyx6Nciw",
  "key39": "3iv3uNt7QRVDG4jLKxqDF6xxkM9Uidhv8vBSnKZ57mTC46KRGG6q8QHqEbVB8KkBGGahA8ToenvLgz3CqkDA454y",
  "key40": "3nURPiqpZ66VVynKZdyeJ2MU2Q6CT1fekihU7sge3umWy8wYT2s919uTNqsHFeNjPC5XR96A57DddXL9TiHXgWGm"
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
