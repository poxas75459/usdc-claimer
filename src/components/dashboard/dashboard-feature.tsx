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
    "5s2QCxAeMoAmm6W5yz1ZJ3JSrV9zunCgTeNomUtpDywrD3sTKKixv55AdT1FhhpTf3gfPPmT6aNPjgvPepeUKoKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ehWHrVnQe6BwLugMYRAQpXMEA9aHKQag9yhrgMetuzdCqGUz4wy16pteCdLpMGxhkDAaRC2HthwFLLDN2yecBVJ",
  "key1": "2Qa4Vc7LKrs33XPrSrcGnSSNwNCJyLTgHCve97x7VKJ2LXMxnhKPCVwmTyCmN1s1Qdwhfmp3zfhDXmDmZCLkVUeN",
  "key2": "2Ve9MnDbEe6VMBU8m2gLZ5Ku7ZW9oDqvHQehNAfLgUsiqHw6oZN3KCpYEW5kJZY5JHnkhgxMFFRDrY8oV4vqC7mW",
  "key3": "v2P5STsGVboHsCPty6mWSrWrNrRRSHzzcJ1FJ48XbHMmtAYaRSXDB2p66iYEdm6hWSYeHQXrBMkBDA9sSaaAWkd",
  "key4": "1637rjoVtvqyFWsfyXvuhHw5jGpwLSdYrENCXrGNj8heRBWeD1xcWNcA7YFsBHWAuz8iN2od5snUT6jZJVdowEK",
  "key5": "2h9fB936n1zTfTtG63NzZ2KkBFoJF2W1agDV1eNfmMCLkRfQFhN5AdGQXga5Uv5NmNzeXAarsEBcjdoEQemKdFpH",
  "key6": "3hLgaEoeEezWqLTaudNZWBxEcFmNSBotXW85Fa4WvdiBezqZVDp5Q1N6zZE2aScGMG2YxBMaSfWeRqMsXudWDhxq",
  "key7": "2B3TFoV3cYvYoNJgEmqji8pctVkxZa8Vt1S67oJK4oHEGvxzhSUiSxMB3WtKL9DXfpxX5bZZxhokSAS7jxvw4ZMQ",
  "key8": "2tj2vSyS8QkSsZKnBknDoJHMBLjCG8N8zxaLjGS6MY9DmUKQ8QJf7MzbMYw3o1Nzxj58ngojtehkbheg8rTZduBe",
  "key9": "53mCrj7JNaysH6dz6CzsZikHEuUVsqYr1nuFD2DDSZkdh3VzizEQPV2yMh1U7ghuoQdG7k6mdG9PjRtk6rKdvWQj",
  "key10": "4XZ27cvsB4eiRiEM61Bv2DHvHTc1unRKWTfCC5qSbG8ScfjL2v8pkVkZ2MWFT7n1tBh9ar9xMtLRm715ZbDeUmvC",
  "key11": "UTq5VWmewpBs8GP7onDSPrfSuFTFNpzwhkN8rKMjBPYMm1Ayz9dzjYhDNqv9f4QQU7dvPERnjgd9ZZaQ9w1QFRf",
  "key12": "3m5eFAqVWmrUDcXUU3vPPJLzEjaFMnCJyPxG5ssxZtvjow3rJXMBSVqMzPPn11RjcP3vixPweGrwQDeGkKnjS9WQ",
  "key13": "P5tFxeX8e6dWU5xMsXZobEt338ts4P3rXEKcmmHeatrVFqHPhzzDr61ExPLGUcv23CcqH9L8KvdULyndtTXP2bS",
  "key14": "36xVk5MqkeFpts9hJSAJwRivG71CsjCKqKfyxRLrAvqxPsnqzwxRwiFPKRt7Mi1QaY94UK3iqBE7KrqFB35YGdbB",
  "key15": "3Wn981AWoJrf518r59uBiRiWTw9TKFr7t7CYJJucLYaccgKYspns81vB9CZ6rnAYWt9or2pChKkaNggoEJ7DDs8w",
  "key16": "4nrgrCD8PAuHAe3tJfcnfPaSZmLxo2afoemd9Z5ePtgaPKz6kVAKVbSuKwTRUWnVCG8hsEAkZUw2ramVVSCd5Ddk",
  "key17": "5ZbZSb7ZjQMvUAvMZFjbDbDBYManBs14SMdznYA4tLGeLWTZSH5BnKtKpFyETqiBzi28zmEWwWfxy6GoWuVPwMCS",
  "key18": "2QQMTkiXEYEPwrrF9B7MpU57XWh61jdBGVgKkCCvzdy4DFewFoWieyRFBu5Qnv3EuRXtDtkdop6aP41E65ZimgyK",
  "key19": "4VnHJjHDEV59y2epK1wmVmarxjXH1vSCRuVZ51zVpJUPJAVSABCKYcgvuqVjr4XYVf9m2Tpp7zCbmezLdPGNp83g",
  "key20": "2aY5m2Nav3dG2GtjgDiYpKA4hwoAguKTt6ueEYuRTJi5eo7pXKyYXnK8UqLNBT23gTev7ucdUnjLZ1dnr5SRpwLw",
  "key21": "3nXS1xgG78tydHkvaHA7e2VYhLyPFJH7b2ANV1B4swM4DZGzmz3AEGi5krwdFvqkCP5mYufJsHekihun89AuvSDe",
  "key22": "35FA57BNUj9WLD1BpxkQiTezfddWebD49YbUvG8wz8w5vpsPyUNEzoVathAqqNQmYim9HVbUmxxkFQAcPyQXn3sz",
  "key23": "4rDKgo1LBd9rhypsENGWn8nCQL6q3bFqBP6aUDMbZTYP1GYaGBrFAWX9eF6qXmfTuNqfjeHNTMgWmydKxonSeJtV",
  "key24": "4kBeoaEAyWWMXtGvXskdCkEmcNrDqJPpjYqYTWfPVgmCH12CEJCx3t1cdQFCeswuv4oJkfq39FVV7wi4kBQmt5wo",
  "key25": "3tLfv6TBHpAiJ4WVgNa1RnFuBnQoe4bYJzxfHTAhPP3y4cCmAcedKAHHAaFK5vXd8A8sucszM813UX5qqLfFpPyU",
  "key26": "GwjNMUjxVqoVyUVn5thMVM8uTYkb4xDLehsJeQVrJ6pneCc7kV61TUUoJJo3HngDJJEAQhS4HS8FCL2HYZJ2gr5",
  "key27": "5jkWuaykckpqLWGDHbFWb4TpSkNFM5jjvhNnRW2d9WdgLr2pY5tnzq6qGmunS9F8Us3SgcTZAXAcof1Sj3vEwSNX",
  "key28": "4ii1UipDeLWvf2ryJgNeCfcP3Et1MexhTH2sLWVXPbSoVViuV2XNoA6Jfezkqc6roZ4DkAbcHfMvCC7A5fAiPvJT",
  "key29": "2jrEtYhAyYgux5Gk2SL2wrToPWRCgu8QTgGJar5T3ECZvwcr5wJy8YFX8urhgR3arLoJVxLuN3uM21skc5Ldtek",
  "key30": "4uqpZb9vABiVPUZhQPHbTGuxTX7RFkUh4FBYzLZKr1RbEC3XDi2Pf7ycvT2Wf379pcYDftpNen5aMPiEhiPBWF5v",
  "key31": "53VQngUwmTEne78BnyzS7xBhVCUns8d45crp9XUDh2RccpQijrWYXPVi5u7PPoq9mbeFaSo6jCLrnS4uLL73wpNa",
  "key32": "2wYXTm3WwYdYkqNV5JSq5TK4hJuh3CZpuSuns3wZzQrzCfeteHXJJioT1Fgjo1gFcKoex38NW8rQxzyDegTPCo86",
  "key33": "24gAPjNfpUchjCcnU9HAwWGMxqqv436qjZKWTebp5CW1hjxgnkiKMVo6wnYTDMPgarTrA7wcNHnMqcrnj4bch5x1",
  "key34": "464H5L96SvdZ3RE9NwTDytQLNoDB8v67EgjVDiUgm8RDn2saF5sywukW7gYDqk8HdXoam4i4aJHfo18Ct5pQgPX8",
  "key35": "3die4kswwJxR1BsMvPyterMNu1fikQNwE37E2BDDnuF5GyUU26iwGVi8R8NeokTsszEQHcT53KKGy1Qnr2PaTsgW",
  "key36": "2gpva78tyYLgXmFbJRgg7n5WmpYsWnXHJxn3L9aqU1bpPd3aRk74MVBZjdT5bDvgacGKYUifai1aL9nUiiXGb1zm",
  "key37": "5QCevQA24EF1npbooUgBmZZV33mNJysiKK91BS1KZs5oorzsuCqcVPz9poC8qcRUqCzQ3XvRx2uJ9um1A1MMdtXb",
  "key38": "3zSz4EgLFUL6zRAZxhcfG57f3Uzzptz2AfTQdSHjjv8FHBBiuRWrqd6Ga5fANUBGktUDL8Pkh6E2wK1qBXGARUad",
  "key39": "fmTxBrNuyTa5hkUsvRKDc6XmfygCpQhJWk8qCKdL26Nt5vbW2ew7gv9gDZRZW6Pn7SLDkzvZZuhTsdpaRui3rTs",
  "key40": "jEdnHxacJj9mEHmDma2MKUdpanS8KzHrchzjdAVycyTyTQp9bAADqefg2GBB8CbedZHk3Fnq5S1Xw1t1sFuoCzC",
  "key41": "qRbACD6WXR1xewJKiwzLkFgUgwZwhBptW5nsATenEvrRU7UZkqeSFKeJ1gBnsS1khw82rJj25zvzKbsLrKtrv8C",
  "key42": "2xA8S1aeFeqhLtr33oaMF34eG5LAe1qgCFLbXUb6eKebWnFBGgLoJB2cBbdhUCG8r3KDRRkr9WgrBaUBm59SBh9R",
  "key43": "nAB1yL5Vy3Fuqn7ak1xS4NrqxLxLyA2DuQvDkEyNCXFhcUUQBrkm5YwXzAXb1HjyyQBn5UrCvBRG9XBacoxPTVo",
  "key44": "3kReVEnkmVFaFU4SDNhhiRMrE3ygN6ybRiz22TH23JcDdQZpR4hriQ7Y6XgxshGSEjzaVpcjqVJtTfWqN92YK3FC",
  "key45": "zXu5jndsGvSJqPLEjAt7ykrsXxoxV5GoGc6oQapRfGgRaFYzcTjSGV5CAZYThEG9Me3RoGbraLSxxwrd4uKH3PL",
  "key46": "3sBzzpMM9UaBq8ZRkgtY6KTbHxY8pmvgBA4bM6hG4q9msFmzDsM7dewEWahna61N9wivC6KTcw6L3g4KxbL2nXVy",
  "key47": "4fihS9wStk5nHgAbQEByZgNxtkQdVnS1TnfMvxk4D6d4azQ5QmTkLwFFossNvfPKBJwMQn2qagHJypPhmoRrGm84"
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
