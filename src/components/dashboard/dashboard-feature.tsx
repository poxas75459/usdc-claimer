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
    "62w4vvK4iH6QVHeV754WY48KpAkyKXED1aHCcUesKZYnqhDQRLQA8uzwK3vuVTw1sTYuvDgcokiMfULYchsaWDP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DRSM8v7Z8Nos7F7emUXZ437MMhhsmBcxLH8CD25fZyP2E9ruZ6eBhr2VgUstXb8rcMttf4FN9vnEhrQyAnFLYym",
  "key1": "5b4mHwfCdEPMd7mm9gPzNZX9Yu4ENbvN7Y6CH8PAkQViToXhZEPL4rNieyk5K4iKnCpEJ3sjPnkrpXc4gpSp56TF",
  "key2": "cEbxoxE8wi5EooMqKJEMrVE5YcJ6kiN9ymANrUDWEzbgTewJKnop7f3ajVikYaspQZ4V4QCXeybbNNcthougLSE",
  "key3": "39RYJBwo2WJS9H1WVRZZZCG959qW14cxokaeh2yMuMjXWS48gSEH9QnA4996RiX4RewKe9WvbT2k6M7JeQc1YaBn",
  "key4": "2Z3MSSUWCViaDL1FDwu4Fpi3F1FbyWEuZGYLZ3KC4U4vCCDjUe5UjxkjCezamWrGTsHCehk973ssnsJRbAPmxEp1",
  "key5": "5Xk9CBMejMtLuMVCHVJLPTLVTeQm7BbnfMehFkq7yHZ441tNYvm17ZEvGM9NyTqUdR3Fr2AK4kDkWKAnhsVHAB3V",
  "key6": "aeWp3WPxL4kF1KSgEi6ZRKddzXVazVy2RE1gJtkn3exjDceda3UbbvucWLTL4f4jmQCbXfSuGjsFvjiZBEH4AZ5",
  "key7": "51p3MQJJ7TS3sWL8icQ6hPK2AvpaXrKKb2x9vHmAKAcarW3yQyWUsXL9PmzwR5uQwL89Fn8zV8bQFGf77HPqWkdt",
  "key8": "2LTLcHpyXTN5QKfRvr3pC4WbotgijHSAaWy2cSLJPExRG2s6jdrDnxKvgVyRsXqC6Dcnm5mEEmft4SFUrXX57XK9",
  "key9": "4VfJJrUcN3GA4Qqa9Hf8oetRiYb2gHvhfAKDmFxsXELsWJiVmCerXUjWjRCkEd6SW8mHjtjsynxnvDTX6XD2eeUK",
  "key10": "2VYPjzzX26AmYsSLjMW3KCZKr45iPttV5XiT2LEqrmQ2ULH9yAMNXx9rQFEgdbsmXk98F4V3xzyR9cioPqwaG88i",
  "key11": "4rWeGGwbrYGgcbcVk4ZfY4UbaVLZHZu34gv7R7FfvyTDsRaCG1qdmFNgrWcYFdvVVTW2CFzKfZBwvY7rim7eTQZx",
  "key12": "3Hmzv9QEtPdzXbWtxWYf8zqP1KSwkLNL9F9jHuNfbaWbwAwcrwPn4UBYyLesWkxWGLvbLMTLGMoP3Zotdv13U6jp",
  "key13": "3joNsSzGvnLnvBQrraC24TDn4SQjUj7Ytq8dNkSscCsLdprVYbjXRkwUEKHKG26ZMURfQoy5mPEWW3EGVPDPbF2K",
  "key14": "3eQzvLttziN2hP3omHsJtHeSoKM4XdwhaEYqpvwcF3akiYssa8EoCVUqr85jWsdsyLC3PEnZ1ichnLZGohJQew5e",
  "key15": "2FMdm8SaYgSi1izsj7Mg56QVjuBKCjyiW4VFWUxjTSWvRppsqrqH223KWgQK71tvBu2AVS8LjtUDfd6uXziMYzJ8",
  "key16": "2we5Y13NBHrx3eB35Dvro9j3N9woZhq5DGjF6RWs8cBzxp8RhrwqUSNw666gkxCsaEMPU66eQrfn3PFHLdgv1vFF",
  "key17": "4V3Q1WFwBt8VgrCEezpSd94Qqa1GEv1PZsK7nBCvFqtjk3Su2GxUJQGe6E1McLAFi9rzbJD6x1aZWdQPBvg3dgAj",
  "key18": "4AY2HucocauzuiZaiyFKw4ArWdPf7cmcELsWhdK3X9kezbdogb98pvsm93LzbvtJruzf59GtyuQ9Xpk1uXf9QdkC",
  "key19": "2hwb6HbdR4h7NCx4DVHKWM9kYhhFWmV6est3pt9Wnhtm3JxqMwHVdt4uh9SGBDjW9u7ibtyZYcNps6yWHerfCKZo",
  "key20": "4GVbKiu1rbCdBEXizFC7tkzU9kC3ghzzk2e6iNoXuVnBBpVpyeejUEfCzj7k464pxND3xWeAHMBugXQj6SVYrohZ",
  "key21": "2BC31UAR7cjKg8oJHrXuZSCSxr8odHsR9MvLFabwgtMtjCPUUxyuasLUMZzvDWYJrsRxPLf9ucYGkLqeneZZUamd",
  "key22": "5a2PEpF9957pKZP5pYKkCntCS8qEzSSw6FMa96RGsRgzP83TZHh8PzY5yu1jNnxjsgwetCXBtB7WjzPo4Lz9PFm3",
  "key23": "3x3ymSQSwUuSWPXstf629mTpCiPr6bcr5xecSEvax4vqTBeDoQoR9YRpx9QESrLTEu8iQQnkMHdXS9SkxcJcC4n5",
  "key24": "EAXvE16UmKhrCXwKHaDm8RXWHEH3nMu8WStWjhFh7U6n2YsKjqaWKiSjqraSyL83HMWQxQRmwT3HBNf4BrZZ22v",
  "key25": "3Rgc3ppYi5hay9upEE2qF33tTApYjWw5JuNmdscdoeGyXtR5hyomkzwYMCKamAVHTExyKKLGmH5F3SRq1tEoYL66",
  "key26": "3AHztsR7mYWKmTM5uTYoqpfXS6x9wmkWd1hr5vmDdj185b5Huv8V9DHvYoEFX1Z45KUHABxYdTVwMc6GMbHy5Znf",
  "key27": "4v89YSNbXHCG7HpCY1So7M3WqHGoL58BWz5m5Dzgrfxqg8U4xbdYG2v3hHisBLMaMSGoC2rQG2rkMAuEHZXDo3sC",
  "key28": "5exrWTfRzVj5EspXgD4uVr7ysM81eVpcFq9oTvvR1MSzWgJDAhX47r8nrkVjSP6SF1JrbyvY5XeQUkb5kA3v5rMB",
  "key29": "2XGFdPvZUi74x5Dw4r4WR9nePQei2H3a6opwixnAaDaz29sCQ894EqpG1BjHC4GY7fWsknvcah5nqnQ6bgis2RnV",
  "key30": "4BXfJ9HLHntSH6F5djkgdSvTzwtGRawmeQyCbwn81HcgMNE1KKDLj7QA8yKbCDo6XHH6c1c2ouhhy3dTgh2gzPt2",
  "key31": "4RM4Bfv2ZaT6dKbjEk8hu5tjXUxfqdLrg7Q8Un6k58bxXDF5JVgYKDkXPSDKZ6EenJFVhLSTKytMpbfZWUoQQEkP",
  "key32": "pDwRFQphanxG8LpK52jXD95aUJBcQKmNgBKJrEvvZrEUK4cPpfEc8J6keFAVKuzMyLqEpjPrkreKT5b9vu9NUbA",
  "key33": "3zgwcKXQrKUHYQvDhiee3AJAuS9BqMUSQ25TEBwUPTCRM9DSR1RwVGb3DYmMaGiparDyQnUC7Mw1X2h7oR8jbC47",
  "key34": "24Ejhg4a7h9ZQ3YfvQCNspSpSk3MDG1N31Bb28dZtNyacHVpgfGVNF59r4aCgKZZx2tDtx9Q7d3Rk3a5syzPdSoz",
  "key35": "5bVZwcdDekX6WvnUFQX9cGkEM1vYLnkKuUHfwy86GkGsS89Dr2NoJZu1YhbAP1DpTPwn477RnYwh3nqezbXufB2c",
  "key36": "4LK2CMKWmhJSL6AMLxA2Sf6KQaqNMHpxZnuD9Cxqz8JAZihzWKkybLY2tA5NzEv3U1UWwY1mrHZ3ttFF2gyiSsbJ",
  "key37": "ntRjgsn9yVoWyZnmYCRQ3gLofuZh17aDoictUyLfrz8Cia2u1ssm2gkCdFnNMYYCL6pmfQJphwi92cCjtqxYn2k",
  "key38": "2Sm5KQjUSJ2dSqCJ7Jog85T4dDeTjXqKhnHiDcpXHdU2f3dkKzyTRL2umfJ3pq43wVvss7LRuHMjgZjNPtvW89TH",
  "key39": "2UiuJXNiu3C2qziW3Hs14LV3bU83X7SnDDzuWHEf24Dzw2aog1aAsGatdLx8EQiTM3eVgZGrMqAcfueqCvksVbZQ",
  "key40": "21N6R1AKBZkADcqP3Wwa5hQwmMrRqKvugw35ea2QDvFSU1dZzTVafHhd2YbjxZ8f2auvCjGDmMCtxkZg37pynrkt"
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
