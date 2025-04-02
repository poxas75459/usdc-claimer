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
    "37T3pfgShdJLfR149a8kK2iUkYySRHS9j2qfsYaTeVUb1pRXrTxHPte3RsGsQmA4PeMAcdwVGoZ6gskFq2zA2T8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kANNksMZ9PkLQWUgKUce81t69CAriyhmn4UNPUT3gkdEFXuq8Sjtod5m6BG3FkZL9AiMwXCTqgYEVoG8vRPkAtN",
  "key1": "2Ptiuz46vVcwW9SWRkfPKeTxxiHthP9mV5tJRSs5aUJpSjLFHFiyhsx3jhmVVQgr5HhsuEDAs4ucLSfe3RQUVscn",
  "key2": "9iyHiL9jDFr47eruvEQk5iuhTg2GyEKJ9AjDxFm9NQWSiRFMCcDNdb4BwvRsgUpTiRLGjeyweoEoYPMmpsg7TV1",
  "key3": "cqjsARvQVbwM3xmzL8NdZtFE1DR1pLnJzoxbdGCMB7cZGyaeSTBdmsa14CpZezbjNYhsh9svE4xeKU2pXUZ1Bt7",
  "key4": "2y4VwKchkE7UpMGHjypvyoX8wwV6fHMWNpGkZuAXddYbrnW9h36o5egWkVGqqWtbefXyRuY8Xxgh5uPFoi8hmZyz",
  "key5": "2BrF8otNQ6PfJtkMNG2Wyjzd4gfZKyQRBC4tPbz3NDUvoxJVj1zoLHV8yofrVhPpoQEZU321vCnZbTnuPRiiGaDD",
  "key6": "277z9MLZ9f5AwSdkoGHqsyGTwtXQ5gedFPJc1r3Qh6KvVufoRgG1y2mMYcLgaqm9qgWQ7eGaWxxG93GTJQGMpgXx",
  "key7": "5jNsL2UiGNbYYJ2DJcghhgs5xdbzHp3vk4RJXoFZnS2AKLHohvB4osUh5E4JDetK2TDzncA9LQqgE3oA17oo6C6X",
  "key8": "2eqcA8JHuEXUagjNzTEzqS1bciYBbBgsNNhvKWsvrxEhMNaYxqrypk5Fi2jse3zkAYEnUDCUSWKmQGed56MSDQ8C",
  "key9": "5tX2zrAnzWWsnyf6mtVdV744qKz4JtALHzXz9skxXXH1dWTraXoUX62H9VQpQ1bH2BVxLFTDdcRtydeXyNcs4hc1",
  "key10": "3ixWB9XcQttNncCZB4ERgovA26bdYHBi2xaMdesyDVCGK4QRS2phjjcur8xuCLnxMReNv2MR7Ukoh44LnBps7hh1",
  "key11": "2K3GgMoAwHAYRrKxKUh33kh2xG4R5iXthANi83KM1Uuai8UXU9ZJDB2jkDVfwuG9dCKoeof7p9BKpB6zfEjGZmUB",
  "key12": "3sLQUnkCDyoCVAmMzfXHzsiFBw2nt1JKwHWjTP4h7jYqHiFfGiZeyHzUn3R2h1zwvXEepeTfsuAhRnvFHr2cMNSW",
  "key13": "T7aPMP2z6TgtxdDj3s9dvcduspimksbmyHLMaRfhXwgZKE6hmvRUi9JQyvhcdVx1QGMqnrpjBb4eD94naSwq5kV",
  "key14": "5JJ8oZU4F5QKKJWDceawS4wnswZYVGQVkzwrNpRDwaxf7biVdcKnzfVmjDm6eggUwzwesqMx39hiZ2poBaSen2rM",
  "key15": "5dWPxLvPcEmZkVC281ZsWZDbXwVp4ikih3F3TnCa7x4fJjeMtpDZThZzoSUemFfsNKuhxohJTKGyJcshoDSqYtM6",
  "key16": "3bzhizifhRSgpgjHTEwX97HHoXvftg1zjjBnf2d5jpELpdFFMg8FXtBxt4KBuBZDYiCvhJm1NqPzXRUKPGuZuN3y",
  "key17": "5m1x4yimkMS62TLxi1fc2Y62PZ8xQ53Ywf64sHLneQLkiL5wD9bdrtgtBpEh4LksZBQ9KGiS2WqPcB1Gj5KVHeaG",
  "key18": "2PaoMjvGCcigWhnMCZBR8PTVyPpG84RQHAHd1LnUJ6XNWfUPHh3fG7ZbdZcL5x9Aoju7SMUFyXTmXxbKZZedjyYV",
  "key19": "51G7PALpeFtfeEXXQKNXez98AJZzzNm72oKCP2oRkVKFGYyBXfKgwLkvw4X3SVBuaBgKmQ9H93kpidrjvgAGQnDa",
  "key20": "5vmMat6ijBDA1nBr2VoLQ3Jpqwt66Bg1p15e3Qzy2H5ySyaWmpK4vvmbsdS2tev9AxvXSNTM1KyxP1jSN4iV3Sp1",
  "key21": "4MnbZMwDWDp1jziY3yu2GzGM7vDvJeyYZGaTnzzvESLTS2rE5MgUtcFS51T1BSLUE96NZ2Jia49AX41dr6wmug3p",
  "key22": "isyZxqrrb1t83xCWKtv9di8YYeNBdpRpoUFR2V6dGQmLruz7EoBvoMe4KM2CaFhGpr5e1k6UNt1BLt7H2bkVasL",
  "key23": "3zZaXKcEdBtLfDomwZmdXSBdpi9wYur1422KvJAxFaGBS1khRh4NsFKVFHC3KqiGCnW5Ab9DvgQzm8uLP1ZAjsQu",
  "key24": "46Rg3KFD1YS9DRsqsw1xTAnDJDrcYwiw3BrimG5mZov7ezPopUwNEiCzpa3vVeKyG868yyV4aSh72EQmVa2xWVQM",
  "key25": "5desuSnWEHrq14oYtXyfmhhCqjr8itLwASXwX5L6R3AZCLqpt1VEheEwLYqtjkcozKkAAdVqvdSA7HrnXr1bUiXA",
  "key26": "53iDt78pWkVKcirg1FNNksoda8Uvyhj4rctG2HGMFGca8U6HTu7Gj4hghAmiwiKMcKQxYrc7KcqN2WyseKdVsELB",
  "key27": "2VJotd2Nwy41q4CbNWRCi5HM86B6VYwCACPYshr69ptPNLzPxG9MKXmjLs7nmZzKLbbVVipfiFLDA4ENocrf3i2C",
  "key28": "2W9YvVDjHd8Ek8TZrDGfrX7JpUppiuo5RYRtAFyTZCRXiMvu9NySAkcPzwLLAZgEFfUyWWydkpV28qVGmXq7KYYp",
  "key29": "3C7KzGRzmecbcoEvFsV8SNTBZjpaBN2dMNmqAWWcxhuGQD9paZb9j3C2w8hKDbWFtHoGHqTV1QwNChWJwUjtUovS",
  "key30": "4J9hiHavA6MXaAcuecrW1uAbs6VAcR5yVKyTaf8xExXGGYWxok7cmCtPg5Sowukb2Qf2VCsGfWRULEs7uwc4min",
  "key31": "WimvZmsrWutJ29vtaJ92symAhH99Kt3m9FBQvpwiaSBVpCHmRmeTCP7McQXZDbjQPo7umMTm1gh6UktZ7JMc3zr",
  "key32": "3VxWuvEFYgywdnUvPT8CDyzSrkQZdewxvwZt7nhqos3bMRhTEMAUX3BofsNLMj2KGJDPeBq3W6wAxzVPRXf1JDmU",
  "key33": "m3mT2fdaF2gWGJVPsme2n9qc7C2xhGE2cuP4R1jfoitZPJbxWu62LQq7J37uTHWy2K7PspPLnXdQTod5VeGy9aT",
  "key34": "2s25CWjVAUBo3K2t268NZ93Et8bLMusj6xXUyCjGUFoEiJgJbYbuLffrJJCXzh6MbAiQWtpXZHAHKvungXhoC7vJ"
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
