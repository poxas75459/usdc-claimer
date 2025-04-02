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
    "26KgqSQi2oPferb5ve5seetpbLNbvDyF2BGCi6nin5kh2ejeDZoYKmtnTxz8NG8QWtgFrcvYTDLvL2HGumWnYdPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zaYmKZ8Ss7DqpRPW8K2mnUG5VfhFb2QgtVxZhiYoZBL2Fo1KjdZw2gxfvqg6fgFHPeAx2L8wMtCQAy81gDdsTys",
  "key1": "3vyPoS4vhTopuyhL5Ho1wPZDD85mZtfbQMikwjoqyYUtj7Ye3LCm95QYSoa1GsjRBF2WgaQnQF6nnehoVpaLicz9",
  "key2": "4gYNd2K1WLHnA3ooWPY5N6CYpc4jk3kcptT2CyKtFYkideeT1pu1uy6kZ4AkvyX6nDYt22cbNgEgvDY4RKA5k8sg",
  "key3": "3puBXPctu14JHktXGaLUQe2QusavM8H14EAVyPkX1UjaAabzQmmAvcYKQhrc18QLZdNA8XbEaRzgFgJX1jFCEoWd",
  "key4": "4vmeYg2ey4DzA12QSPmeEJPYSrh9ZEwmH2URyutKWtPMTB3vqQaBcwkJZ4D8WPrz6Y5GxSo4oeQtxYThiGZgLDEH",
  "key5": "3DUPiNwahTZrxhhTeh1vb2ZXTwBrpgqV5JUFX5nkQrj7Tvi2iTqtojTQkXukGyt2f9tqapAJLUgRonVHjGKjKsAY",
  "key6": "3bWeeKCWeGko6TwmJs2khuEnCbLzLWjLT5HdvbQWbXzvSJgYqmjx3ZfGN9K4Eon1dRzkM7V7KH8PXpqxt2JEZ7j3",
  "key7": "2s7eJPv12thR9pqqFPsrmwv89aeRepwxNSbzAnhmx68kmBHUoQe55tRgWBMjKCmXExnVmtDZ2JorG3FVS5ViN2Aa",
  "key8": "4NdWtLBg9sQdY86SewNytBgT37JV1iheWYyc2sZZTdpbHRhgonKjXBnzZgj4U5ffgM8TjbXpDmMgWW3b5jWUBmfV",
  "key9": "5iLCZxzy7usp59jtp1uRcwfV9r1GZADd7LsSQdZzdb15D3f7ctdsiPTKsCs5BRc4wzTFvnWDUAzoZnRnLFw4gBdm",
  "key10": "4ek8ASm2HfRcejgutdBaTUr1gAKjXSPVxNNfR5Dc3442egVYMHP3W1U94XBksXwjqb7Nedj4ynkPcMzgMQand1Af",
  "key11": "5mv6yy4XdT6VPFtNDoNpqe4icEBbifPt2EPNMjCnRWvtAXxuBd1P3ke5WcL4ML7VQt6TB3rJkVV3iLMr6LssX1Fn",
  "key12": "2xCRWUmkt5jv3NPdbzz4ppMsMbYNGZhZskpptDFN3MyoP3DZbxco6WxVndwJe1ZR3S82QdzpqhKkqe7swPrDvJoq",
  "key13": "VZADT8s531RMhcZr1fmsJje6R7upnCCwHEzXemn62UVTQdTHTGK6vMmNTbMHbY538vZraERm9XGL3uAPnmAgANB",
  "key14": "4N8qAHvBHvEJ4zSZVXcL2mniynkpk5NBoFqrTFNZnr6dWQ43LGvftpaK2EXUZMWutLd5m25pKLvHsXMdJPwEEKVy",
  "key15": "57JNHJBMURqYg3K89ecwj2wzdvXaRWw6NqC8TvCD1sBdczAmUfTgnBUJi2Jt1TFvgLSfTnZLXkFijTcpN1WUkN43",
  "key16": "3dkK8zmgzyhE3eTBjvdTDNA3ZpXRw3GUxZ9nAvGgjiCb4WtQrmtVq52mU1rsAaTDEnYgyk7UBd9Cus5eXhmQfsLw",
  "key17": "2opJnQzuPZJkFEXBWwehEQ51kx4wfsvApGgQQJ5Bs1AbFCQET2NWuW2JMT9FYir8rscgtNq6NsxgXFCbLBxtU7AV",
  "key18": "PvDPV2oQbDPkD87v1g1WYASx5RBNQSNXQLxJLnCt6AS24XSYsNotfc2LTfBCYBHeq3RiydNUD9DyigSDoSwSQMj",
  "key19": "5SWbtGPLWDyWjiPdfJMkMjJxef5xDMm4UxEshGa3EBHmLDtq55FYHmJzF68zkx6GHNBCvLcjJWuffnJkGAAnRzYi",
  "key20": "3iUfApuv6w4vs23CEHcQCZsF9jZmFEq6EgWtcHMGuPXeGe3vGrvfG87hsqHNexESpLYaQ4Gb1eorhGCAaxgGtqct",
  "key21": "3MtB3FQTDQDNVibdqmxmHzghDQ63Hojj8fVntrT2wNekCd5cnWewJqGmpgNMkCwEz15WhCW8NFEts6EkoKjqLbgi",
  "key22": "3ftAgodNNqVxbvXq5DzeD3rxUM8LiHTC9zxFaF52vYHKng3pdetWRb2Ki7HTEYQkTR8h4L7oEkGzcoybe2A1tgxB",
  "key23": "BEG3mjM853BAxeNoJUuhrRERqjownYV5ZCJR6t1rGnfJrzFpTVNvoXxTkYsXAvT2XoZ7wyM648FMFvaqqZ2qgKC",
  "key24": "4L43pM9ByePCEErirHcRYkXj7i9ugBr96PJAhtgrdLAdHK98prJifuYZ1K3YaVDQ3HneQkfVzcacbh9muFEVps1n",
  "key25": "h16k1wkUWt1941iqZQsK9zV1eMgBCGYcAK7DK28B11xeWuZ9HbmNTYxKpdCNqbyaHcQCYB8cC76YZDazrXoci3U",
  "key26": "4opFhvTndzL13aZ2wzbKJHAkK9GbdXkGrsPiusfG1QeMgLR4qqpdZt3wzVSWjujhq5w4UGarMB1UrM5mpD8iHiex",
  "key27": "zHxfN89oNPnJ6dSuVkKocVKskYCzq9dqzh6S6bgys9GXzjK1ub52vawcbHMj7MJGYGRWCTzVGHEPFv7uFFwwUH6",
  "key28": "2Tkdvr4TszvPaPRuBFxgLmCwipr37Eu9xQV5mb9K8ntTHh7h6K87GbymXPvGoQjKTuJkYgzxVvfVazYQMyBcpqQs",
  "key29": "HaCmjFyN74SeniQ2tRoJFpTJzKerrY8F9F7v2MfA3mgybLXecVYYqjEqbGRw5FfDv73pA7ZsfDuNXtKDWrD1RNc",
  "key30": "HrRfnZeFVe7UKXd9Ejhj4o2FbE6AU2mKPSQPPHfqAwi2fPNZQzgqJBSeUdksDJk9MY4VbALRiHLQeqNQpJGM5nR",
  "key31": "3bobvH8Ed3hE37BRjWqffJuwxdJqb96eyqeHkvvLNUs1FyYa8Z4WjWsC8YWn3ibHzNCFNRfbQ414kWeUD2ZtyzWY",
  "key32": "2BXPC3gcNRnhbCLJ6fJPPANvTowzrS15GwjqBBEni9F4UjtU7ZmrrBvz3omPS3uMeGxwDZb1wLATLKCKA7amC2gy",
  "key33": "4MyuBDSkxmrjQJgEXof9QVn7Rv5T4nppC3B745vmuXsC3eKavphRjBhvxWSw1TfUF4uaWPWXLTNX28mS58vxibxS",
  "key34": "5hRPiCMczgFa23S2NY6iAo2NEn1uojM5rciTDUc6aStAd6rKLqmdAmfVmWM9r8GXbHpyY4km2eR1F7Ctm4PKrRiy",
  "key35": "e6qfXph56kakYj5iCzNg4SvB1ZaE2Z4AQiRSdggi3tTczwLsKdDnzDCJSXcqQR4CktFqYVNAK9AAnHHiEMj5DVw",
  "key36": "2TajLbdT9C3CpbFkdfwFp5w5xHzFKSGhhNcmcNTSdisSDLy9rfJAYrdZj5ntcrvGS2kudcTPdNjA46wieBAW4Kzg",
  "key37": "3roRwk5BV4pMG2M6rG68NteaBJLbcvEh7HmrFwhepbUDFdFDk31Lder9JmkVARwuFXCbohHFbxQMUcNR78gKZf7f",
  "key38": "wHRKqzh5UhPvvG5Uc9jAc6zvhWWoEBPuzVxDxkRKcG1joHTDAf8xkmvbrGXSCoHyMevLRcTXxuDoncjrbJhn2Ha",
  "key39": "531nXdcqhiRVHP5LxvHgthgcyGXT8nc9AmmUJdopbpvWLJ4XhCyJCy4b6y9DUfPfryGgMytU3tS8av5RnpFNkPd8",
  "key40": "2u6SAx3pCbkCB4xi5Ya8r5Gf4R53w8YxKJMrRSEs7YGZyESUYfbpow9oxDR18ZN6caRsgR4wvmxywQfRLpdLNvFA",
  "key41": "3bTkoqzUQF8mwuxmQ5c6RQeFc9xo1CSHmkRLNzPp2JZGao9SzMmRwYuYcQDCBJjUZtaTGV6d8FHAK4H1kYz7BQRo",
  "key42": "G5JkstCfVR4twKWgPTbTjJtYv4AG6qTyj3xCrLwwPqn6UmQ5gZhQ2wAjnWu7sqjneVKt5fLFXBEQytUEc4M2ydF",
  "key43": "44QtzjsigbVQ88nkJnv9BYvYjw3aPbvUa6qPp2jTFQT4gwjgDu9kgYSwvxLECAad1RNABkQdusWvRfb5jttnb7wH"
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
