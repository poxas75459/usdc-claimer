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
    "5auakZ36J88iApnkfUGP9DNkFPmBFxBG2dZtYMjSY435UBDmxoVYGLqVu5YNEnxwhPrQK5FR9LcwLxJr9xjTUQYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EEk7VkLtksKqDLDPGLMm7w8Xe3aSKr1EH5rff3VZveA3a9WQBkiavc4eRrvHHQNkMsUpFqTKbo76GBDdvaU3vNR",
  "key1": "3HuHpQZ2Gg1buvnnFTeUdFtFs1fEiuQC5SxeJog96qCXFkdBBYndL6RhuPuRFqywkzMg3XjGQei5o5wDNgkpsuPt",
  "key2": "4YN8r3Rfo1expoSYWmZrdqQWGesn78ScRZHp1RAwMYsKPCg3rNSoS6wHjeLz5727nsGc9JQYKdnLsqp4CgQym1Jk",
  "key3": "362EshgENomzHSNgM5E17JL6LewZ1wYvzzkyTXK88WcMY8Z5DXMHcA97FkGL6LwJypVeeUHpnKoECSihyJX8zoX",
  "key4": "K9EeVoJA4K9P2yzYhWnVkKZJGF9CmWiopv9FzntsESVg3Yvhuy8SW1oegaM845sVRLCVLx4xiofycCKeZ8Fpdc9",
  "key5": "65CFeUw6FHEeUc5oAk7q63fjoJabnkPzX4B43MAHh9vG5hLsmyzHtMusYJf9JArmJNUse5rUDzj5UAGLAPqZ3tYs",
  "key6": "4tnV6tsq7dhbyJrCfpBMNwtx4PTSQoorhVYSGsKTBCApqPNavGE1Sf8NNtEmhTaqd1CxyKAb1SGb7jjdVaLqeBGd",
  "key7": "hDC33aAGdD1pYWXDf36vdNvYjiRuJckKhmdAQyUMF3FdxTaPLB1Cd7iKFo7qFpt8wqwazj8XusYkoVXAjZaVcjn",
  "key8": "g1S85x8onoSLoBkWsqRfrKSN2CL2njHe7vQAFgZTfqaGpp2EzRqLtKu2rNQiPF4gZSNNJ2WSWUGCVshj9igd9F8",
  "key9": "5D8RnjdoCjs31xFsJ7MubWA57GxtuvooqUJa2NP44CgxhPp8jtEECL6g64KCJKoMQWjDFTHXf53zjoDwkuKdLKrV",
  "key10": "65CKdEo8fSpD8Hy8JhuzHAj3QFWLUNzbeYv8VVrmbt2MqmpTcUQNozRnujQXs8BDQBLXjmiHb9Pc5KRC7uYg8Vu1",
  "key11": "2NuUaczyYeuTqonwNgEnYAubdovnha45x3ZGCJWxNo4CC4e7q4ZqhvHosumobtbPQukB35n5gfiRXLD5WzWodPBv",
  "key12": "4oKCifsDqzssiCHv3jGpiZHeMa8mpjEL1RHJt1saxkFvb2vBnyhuBV8WBoNS92cmXJEqM1A3Gg3y1pDBE8ZBkwcN",
  "key13": "4AefeDS8thcMt722wSBfcYM9kwUfSKB6YvehJbp1bQKWEMbJjTWrW2mxGEQor8QmWftUpYQgC1iHPJzbpz7epkLC",
  "key14": "5BNrTJJ6GtTMFEneJHKVRdKSwKoinSygtF8nCqHF8kLtnvsVZAZUaWUDzCtNH2jnSSvnXveNNH4NxjfPgyNbWnV4",
  "key15": "3AAr1T1EATogaVTqyMYgZpsUPjvo33km5smMRMftAvrudUdm4QfzkVNxuGJgSPjK4DzYC6t78r9S9xyPw25xHwJq",
  "key16": "3jykNxCeDdQTXcGBXCtTB2ewiNjpH7eNC6aM39416rdAzS4mvz7RyusMm7ycXez2ELnz9VCmsNgaWsKbSeWB9d8p",
  "key17": "3nBJzNTf3sFUpj8hX9hHJXSDPdqy63YN96KjuJCXhGUXSYDtVr6T9P6ER6GsuydnFFL3CsWVTA72aBvpqENTCG2C",
  "key18": "2UreY4qMW65M1NuEwdjEfqfpe8Rmv5n9w3hefgGgZyfg7NdjWUJ3LW6tgeaBxUctyuUjnkxtJ9HAtQiFGjfD6HUJ",
  "key19": "4d5G2oET6bwsvKWPeeNBcavW8T1AWzT3JvkVoF6DttpSEriB4ZMrx1Hb6UBjogwwgBhqeyxMN8j77MmWFe3onHTx",
  "key20": "4cPXeoaLF7on6WpKLirVzDY7ooTWUtAN4t35N9sh7VAUnuSBTTozjURVDJ2krCMpuXmfnL67HW9ibmoDrpXo9fiB",
  "key21": "2u4RS5BySwZrZ7awmWUhcdrxzyvwwjSR1hndPC9upf9g2vJDzocG4RNq5R7HRJS6WbDcugV9e11G4jYAoYgfRMVP",
  "key22": "eUPEqmDzR3aDds2wtGPjMWzpoVKJdauUeJZZF3VUPDnaWzDZNfN3wgCVvR8FRtngLrcMsYphdghnuCsHTqpU6Vu",
  "key23": "42PuZjUBiqzPxtWhsFfo8vtHVJ7HVyg9gDsTwDmiSWngrsKXjrxcuH6ka5eJKFPSkRQQVomYjdtuA9rB3X7ePL56",
  "key24": "qMiRYVCdkyBhKwczotxgHnzUkNCJbRY2z74PCCFvhSfWpUXkirkBzqkPNFqTVGykve8VRkz72ZBp5VY3rzWJ6Zd",
  "key25": "3cjkEMfVYhESWGckvEo5BicdTWGSXFRWGMUimq6a2QGu11L9Dxp4Te2vEMBYBnezateGeFQwjWmJsZbsnnC29KVd",
  "key26": "4q1CcEi9bBbph3wzhuf7vdiQKNkemoMvYmk3F5z3KM4tfPVJhkhi8SbPuxmMtkemETXEbR4cbWbEqZxr8psGC7gd",
  "key27": "2aJ7AMM6MWxESoYVhmd2dvN8zXNERStFef8a4Ttj3TT3qNg22JfpfFokCzVAQmy4CHpGYGWoFfPqzXdyTpG282Rm",
  "key28": "5z5FzeAcyadtPRZBzXYBuhShhqjCuVFyubQB5RTzXeD8W1QFkRhCq8ZNY32EsWRvUaSeLyMxtWucoKQXr7C2G1mf",
  "key29": "qfi6WMrATFAxyiqmzP4Ry2qbDc9PPk7afQk66BPirCs3aNBTCFBsTjMJ5dAz7uNHgeZgupKuF37i5dhefNBXLmX",
  "key30": "k6t3c8oQfaZKvH9LiaoQ5rpvM8vk3YKAwefrUqUFui2TC5C64BuFNJqUgwQ91W69GCcdWpPZ1pfzcy8eXAuwNcU",
  "key31": "2FQwjx686AFcqUJApN7uCi3UrKbuTovJZM7wAGRZTY5UUckhPnzos2aFAamJ86N3pbKfBJpH59CqEUc1AvYREFcu",
  "key32": "A7LmV8b44Ew313j6hk9W1NijsJK4wqL2tHim3kw8CuNgcDVLuspd8Rbcwnztq9JiUjFNaoBabd4AJr8ZbqEynhj",
  "key33": "3hNraeasnawjPg9og8cYcrzvXcAQBxto9BecLTvveeLuRR1WeZFwRBALXGaDo8KrvRZSb3tW1Sh6aQtZxnELFESS",
  "key34": "3jzh3G2BNPRWeF4oivEDN7chudayemBEo8fqACc96od8H9KBwVmMeBdk8aoQSWxwpbJt216WnjdT2QtXbrmGZVyG",
  "key35": "4myXPeayHq6huz3DB6XtGHpFmXPx5U25oouoqmd5e5muszKQqGTe4KKahhzgr54YPLkXWVYEfm3Vv5YuRKD3yC1R",
  "key36": "52rFJGMJNqgDWHoqJsfxpjNgUE9NHkhJRGRTWiD3qJX1gFuvHo57doLkhKXsNt1Rqb8CnP2Gph4U8rq8USgiTj9Y",
  "key37": "5rJF52LbyJ9g2WRECfKDEpFFyZXQuaYNQzQ44NBFw9FB1kf3ZQDewSxwjje79nkfz3YTYo4mL4jot223WU5pfDrt",
  "key38": "35Trq143S6QF66PY9fgXmvmJ3at2FUMk6RWPC42r9rjMSUnK9rLikMwEPZS3rPktXvRMFguwjqvSLYvJ7jJx9XRr",
  "key39": "mnRhBvsDV4ZCEotpP6qJ9FmCHDvzWH5Yf4TD74zdRaixBTr1w3xZrc8RMQTPLd8kCdt2FhtUGuh28CzhzkwLPeQ",
  "key40": "3MoTzMZrgcAw3ffuYVQzA63EzVapRTddotB5E8ogXtuZ2JqtGMvXbGnz1vYzQBKicGDCTo7KZQw6LKmycoYhguo2",
  "key41": "4fuqTNaRXoyREe3MzNht3PGVkq5kwACL2iWL4Jqn38oWJ6yCcXN2Mnex7AcdENc6GeGHGitYUDLkPMmUL6EdX4oy",
  "key42": "3aULg79FVtKSDNQuHML8ceeUNvUubW1dVZQrvLXvpQQ6WpvpU1guktAD1zgiKeH3R5EpnmVvkZq2zQc235nHG4Uw",
  "key43": "5eUwgtnDZp7AgaUG9kCN1CXeBBKwEfeL53MjcST2WHUmv4bSC9k7mAxWKujfvUyXoWNFrZG1ffEPnW3bYjoP9gQS",
  "key44": "5FoQPthjjJtbbh94JXk8ocoGQGcLnQbCG5VXiZGB3hU7sBEGSzRbc24u7pwsYvTPzjipQDqeo6S6YGDHQvhg8aax",
  "key45": "3DAwxQa56k4j2JSAsBnAg6eGBLrohRf2WqdjS6pAtWkV89Jn2jqobrgfadQqBTXpzy2aVSiWxbMm3y6S2NGKw74c",
  "key46": "2sUKa27VQn1SfdFBceGnRtnyehBH8oEQjPeweLqsY8mMCo2C5MMWMt7iSjumfcRiPN9zSAx25bYTEMdCCjbMU1Nr",
  "key47": "5SdcwnuBJvje6FF2gmGMQfpzRfDzv3SYWNEjyFLvHm2Wha9rwBatsW5vZiZ6cScJApCwvcWsKKqUDpib9wsvHfuJ"
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
