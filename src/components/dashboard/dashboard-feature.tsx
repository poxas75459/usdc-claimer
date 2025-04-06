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
    "4cu3yr4BqxwyVjMZt37aoNYFB74AkDPhQAAR8juwApgNFCAsEAu3eGCcaC2ADzxCxiHxrBCoYj5f1ZyZtGwCkDTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LUmeyC4xNmc8GHN7uwfzpSAuCvf2xJTZufaBa5gh5UFLQe3VsPb2PoPTvCwToYSiHWcCo42MyyDtijC4QxcmSAg",
  "key1": "4Kw9dfp6zqdDpLJ4z5MntgiwKBmAJhP7cGKEsLoMT6YbhFG5yNzQD5LB5VBsct72vagaURtgpHgcuFncj8StkoCe",
  "key2": "yu6pBfPCVy9rk9ZE6PpZ6afgrCmTXHLioNExeAKU44mz4qDjvR9T1PRb8iFiQ1RQFgFnpzPfbQjpt77Djnc72Ub",
  "key3": "4S5k4vusY46jq5RzY7qJDk1NmQ4Wfy7T3kHDDAtyXKivB5yaetrciZhRLeak4FhBR97o4vWirXrhQ2RezERLpezm",
  "key4": "2xiVV422CdQv5ZsaKySNx6kUti8fJ6qrxuqATy45CHsz8LpRwpdbXr2qAX8JaB7rvgB3F2KdavUsmFfjnGaA5Fb7",
  "key5": "32GVm9pMv8NeyA9Z25Xyo9mRe2WfbHGQ9AL9Vb34sxjyB7PPKb9nbHm3dZPG7q1cYPt1ASVkG2qeUwZ69WMKQSNk",
  "key6": "4iWvcYjSzMUTDQpTkKb6Tt1EMH3Q1q7FvmGGKx1yBpya8cA6PL59wWnBTUF7zU6rYu4LRGi2LTPbi2h73hqEBHdU",
  "key7": "rt7gTYwmBMN65uSUMaNzLfYWY3o2VLZY2AKYD5PA7dYT4SNmqncRCW5QnxGA33JpnpiqZ52HUgnNTszAaEzujD1",
  "key8": "2Fk2YNYs9cHxLtc4dRgJd9tFC3sJhZBkMDxE55v4wNf7wBe7bdyy1WTiamU3R1NEsbRFSaZxYsMB1fiDrLFdCm1g",
  "key9": "4VkqitUqnc3C2Uc9cTSVnXCtteNvnXNfzp11r3ZDyBecotLGozvnqjvxYNcPRHcgtCBSm1XAmkCJu9s4MHsH2URY",
  "key10": "5d43dame18ADJUQQU3YhTYkQYHsT3rniBgN43FChJnMC2KPZA3XaDpXJYVcNWtY1dxAhhSNfJCT2NJ9YxtukHPMr",
  "key11": "mgiCEMHtzfjBtK3wsfhwRfeb217TesLjDeT7kY8VQGmVs5r2QoxPpveQdbK5NotCYD2QhQtV38WoiJyG63pi1tz",
  "key12": "4xBZNQVMbd5WRpsayjNnZgj93MJLToGAj2eq8zAeSuVk33HdcxreKsBTnf2QeFdWmHdLRz6G7Uk6htGRkXQutqiW",
  "key13": "qoe9Zk3BhwVj8Mw3MsZ2uBG6M7ZVqarkdhxdwkE3hJUyw74nWpjW6W3YRsRBz7yEex6TWB3XwohEDBLi7MJYo8a",
  "key14": "5cc4jYhrQkrQdbx6NAywN7FkzPHEA6tDGWCt4jmz2yT9aznZTjUKnk552KAV6F7PaQ943eKnXTBzYFvTiP7V2VJ8",
  "key15": "478FH3piMSrDmVJVM7fcKpPs2YRggsHCSRbuk4PDJWcXexwzRp4cLkXjJbkA4Asj28vXxGs5NVX2j3heu9m1YBHF",
  "key16": "FuYzjx4ykt7xgvhPWBECejDEpNnF8tcTiHpdu8wjpkR2XMfSvBMCmtDZZUcrCyYfSHtMCCsEPyhM1XyyWAHBYZw",
  "key17": "2LTMTokp1vmpC4MCzJduRb9AbWuy6rytDGUS4jhDAPd6BvrN4vZDfS99Qt9NDfZNq5z8h38scZBchBvBb5CU1RNS",
  "key18": "5kxpZ72hScXfW8kPWbYpr6eVj29uPU8ASaybL9bxyv67Nsmnp99EcQPTMRYmZPPaLG3mDQ9wpRgVL4xWXjUZJuTf",
  "key19": "2cxdxY1ZfZoG61B7BpyVC9hE2cA6RNTgskirao2HcJDyzeCqxAqaWW29FZsKoyQckpkXUAg8P1UYx8REia3UXmEV",
  "key20": "41FwNdPGDa1BYF1SfDrgMx8MbL121fShkEPHEJAMVFMZjwC9rFuWv9Go54yGPPB8bm9NanKw4anAHxNALs3nEzzr",
  "key21": "Fqpz5gYEQZ1XmEfn4qJhf1rPAHEKQiXmDnSNn8mBqWFZQ7pEa37dpw5cvVVQJcSyKECCnowxYGVW2JtCmFQSj4N",
  "key22": "38sm9mUyrXYgxZZfZS6EvEL2ggr1fByRHTRjtgQenvkA2NrHcWCXBRR1F9kwTDjTQN36m39eMsThYwwVSxyH8voE",
  "key23": "t9RQgGSapifXVfGP4cMVomDBxj1VGEMzwYYZp2done5AmQuWbDK5p4KhUVbfdhiUENNC1SweTXgwZJAZckGAzG9",
  "key24": "2jhm64WM1jnAkAZnwbnpXfhxvCUMHyEyd7Mk2p2koGygkvY3Rc8tx9dmb64p43opY6Sm1zNizv8rrJfvCrAEq8E2",
  "key25": "jTGye9ftm6iN1mdrNsxrqYQRkdan82XAdUQ8STmpjYD6Qq7bMYTFEaVacagZ4ZHVMA8PGkdj8jbotYv44tuBK8C",
  "key26": "447EHgCCej7GB6TxBeWgShwxJefXjvUk5a1Eo4MhtMJ2YJ2XKBBtdz4ZVnCU3nNs6Epibq858kptRKULHMbHKJqp",
  "key27": "3ct4akp5c3xutv3oLzRsqsUoJnigUc1361VwtDe6Cu19Vn5Ue7JnBnpZEGdfWZEPbnQxdtjKtDRb4jMvs2Ji77ZZ",
  "key28": "3JFoSnjBUAjp2g9rpNcHbboU1HfiDqkSwTUv5YXQg94Mu3PPwHtmWAMcpY7MCmQcvo2yNBQTKbbDCfyAWH1GHjtn",
  "key29": "4kXc4ibAw9Fx6ojq2e8aiDMSgnqZagKo4BKTVoT8HqcXxviLX5CEBHzZvewcAYcHprAkiVktZe2wdxhHtjeT6Q1p",
  "key30": "239gwkctXC67ogig4DGrAXprSuiqiKU3rezCN9QtTW7temNKPdyyEGUwgPwpiYnBQ1SpXvsyoqoCeJa1M5Sz8Dnk",
  "key31": "yLpgT8PSicLYJwceoTLfQnzL1df7Ty4bsnBL5ZzQUZzmZ6J8V3d2z1C5R8UACt65eBoSwJMWQXHNeB2cZpxsxvc",
  "key32": "5SpW6G8MGpDhDonKDs3f5eK5UQwSzvXAcXP3DEEhNynhWzhPu48cwve4FUH8qiy4BCCBv72NMmkWEFpgZk77AsKR"
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
