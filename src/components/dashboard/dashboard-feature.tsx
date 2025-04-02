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
    "4FXaRTLRvrVbT84tnGUx1ivRtUVmT52DPbKrw8tzBZJQEqg3vbdp6285Ncbr8qG7u8qa4EXxhCD5ibs8FdN7mwFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WJdZMEbTew6C4rCxG2cbqDX83tGXYwM4TQcX8j6iygCZ3FDWF2RK7KVeyT6b3gjPiSNXR1y38uFpsb1xg8YjStA",
  "key1": "4iEtgnGDSfLBLa21hAZPdcGqs6zfuLZFxttrwuyGevJsBtMoRsMraaWeV7tRf7forqixQUAGVWVDoGWJjAmgJ4r6",
  "key2": "5uhz5fzMsPmsw6uCDxu3JcHrEqQZiAEbLFRRa6rqNy6QUnfJkLW6Y7CsypKAPqYPe1ar7aTHTbcqs6eSWBhFg6vm",
  "key3": "5WWtaZveNxTQ6rVgFs5xfV4YFKZTN4FXQtUbQ7gMDnN3XPEnQoxp5cFsBFS7oRntsfBpCf66zrCZT7wpTs7tgd3E",
  "key4": "514TpBeXe8Lnh9UnkTv7SZG67PaeuhYRjtAM9jYPKuAeoKtnS9zES6qsL71oBWGahYnYLXPHHfHv9o1Y6PnsxtQc",
  "key5": "2oN3N8EtRrw8dKw8DHqvpH5595NbBG4jF48MxGo5BqE44J8tXnBhU43pM9Kt7JkgGW7zKAg7WCx4tndJk2oawmgq",
  "key6": "3m16ZAsiqgtHvKjkwdk3fWZc5sY7oraTV3HQqgKYHBJg8CKcUdy2KYpm5HjYQh7vzeztVtHMJeiXcTzwdGU1gdsm",
  "key7": "5juLJ67w2Z3PNuYmB1yCstqed1kTLxKqEu6ifXFC6K1cLuaNgbnfv2K8YCHPPbgY3iGXcK5uyjazc7tcrsCcuWXt",
  "key8": "49HWU7mLK9MqLzoD2VgUGacu8zERvWVAKeN6pCHHLmD4pZdmYXcehJ48h51n1MsArG6966X2NATasJguxyhC1hyf",
  "key9": "4Rrfq2xsuhSJdRLEp9S8jGxT4m3G1GBEWiTScq8snQ81rvRxiME2VizShhmhetdAD1nH9L3Bb9jAJBWGUkPthNPs",
  "key10": "5w3FaFm1AhZEdamAq5LfNoM1BP4BNZ55UfuGsX8UPTpiXCbySoRwvEmERxbyPLmuCBXJmUfzA3nvMthcxu8UhwMR",
  "key11": "63YHnx8fqv2Krm6LPk2gt3kcMUFPTpGTNaXWedCeBKWYRcsg5zmqLtmKbMDUWTQxAoqaQPxjSZPF9MAxyC9eBw8p",
  "key12": "5CrqnqeBNP57qfFj5QkZrdKbnBGpPCniy6181F9iTuV3vu7fXUZeREuQRWAZ283N6iuZXjkQtQ3hwFiKgfEyFwdG",
  "key13": "c59Z6Hpjbw3mXMcbGWgQ98wsep1j83B9tmwNiXqfe6rYSvMSrevPzvNcjVu4Gpwrh5vnkZUggPdL9S7D7WUSbUH",
  "key14": "236yBJBVqdHjVN13Um8XmBK8fwRVNVEnuG1jaqodSjWDFZDyhS1vfBD22qTcREpU1vM9EBGRzNA3cB2QvGDGXdJs",
  "key15": "5tD28erYbhRwax8kRajoT5sztizVJwBGxAdCsAjA2QEJ5w5oNRrmqcKGJEYzTegYhT69nR6yxsH2p3fSfq32D8o7",
  "key16": "3haU4WHwUd1SKABPjCpXDrcnnMCqGxcTZa744EpNNv939yYqsX5HzLgT887S2Feq4GZVhKixYpq1rTWjWzdn2wai",
  "key17": "3vrvJeqB6Hu6eDK1wqP1ht2fMCLDN4siKaeCnncCNB3T1dCoCjPEFXrm73i1iadiLs2bYDwEBwqoiCHMbvhfN3mp",
  "key18": "4GhzcWEi9yrUSYrwLZyL9zB27PWHaQXY249jsKiRKGQJUWGmiyvp7MxjaNHJcKffSDN4Yuw8cyxQxgqDJak6aiUE",
  "key19": "57ZZ2k7RQeQxssrPNBQW8TimbABmMgBeRuw6ZWLKenUkULgLoFDY5DsvmDGzymT6s5ZP23xhM5pT64buqBhQRMqU",
  "key20": "4PBkPJo7z7tkQVcSWH8dpermDmDn9GcQmhMhR5sk5jSuFRwvLxUoUZtSPnCmsdWh99XkhPUtkmtv3G1upg9yVJpp",
  "key21": "2PfeYXtG6XTYs3USSv2grPmsHaMcKEkVKSxgYvKZ29axwVK6CmsvWHSchV28qc3wHJc5pLXmw6ukBsLC4vdsDWTT",
  "key22": "4vDn8syeaVQ6umoZkfe8LzArHrj85QGypXMsX2GFeUjfvdYQMQquDxQULPLvoRYnPCx2AbeKJQ82iwTJ3LPxiC1Z",
  "key23": "3M3VETrQfuv1faUJ4txonp3SVkAiWZfML98NRA9JE3GDM5yu4Ug81dVDhbGjUosiLEMU3vYobws4BqtvsjpGo9He",
  "key24": "3KCW95RJpWtoiE3LVAciJy5UwEH89AiPYb5wwn1VvHvkYQAttv89vkgR8TVdya7wcqRNxsd45DyjGV3Xch5juKBA",
  "key25": "121iU4ou9iYspaN4unQ5V9WHeifNjTKpjxQgztf43oMRiBQBc392dmdeA9ym23RGnYHAnktanKkMfbuiwYaWjzag",
  "key26": "4W4xfApnQZcRH8t8EN2dAyvckomjf6QLTYT6eXxPgpYrt2o8WsJsfz7KJ5wMN1a7W8KGKPCtbYf4tMx5sP45AsaV",
  "key27": "3zFBe38LuuFZtm7uenUAm5KRa4L5F6bcd7qWNNb2PYeeKxYdR9PDpjY8FjsvPWsgHRLYjr7RVZesPnWJp86mYPzE",
  "key28": "zYckUxYS2VhmVJVyz3XHyUrrcMBvwXvVPEmL31229ECePPhKz21yhCoECmHhvZBaTKs38gJFaTzkh4csrEXyjVv",
  "key29": "5fAaNCvuNzPTxDvZ751A7xXf4qAyERDYYHsdk6mW6AEFex2tryFg6iL68NSVmbsxDdVrfoajf1dFgvh4nXvicPP7"
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
