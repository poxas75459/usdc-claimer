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
    "G75xY12HDxjScML9MsaPs2JdjyK1okUPqpXqKMtqJBSqrA8VoVApce9vo5muQZyAJ3fRNi1ETbjNzHhwbcQ1PUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qp6ZHwi8QjNBbZRk7gMuGja9Gg3yhDZbduLXgVDzYczTxJz4tF2eBXSko4iUhcJAKQm553w1DpfYe6h1z8Mxvp3",
  "key1": "5djRVRzafTTxzkeY9azR6QS5DD1SGA4QZcP8KJZyyTpDC8VSVhohVZNxRizRfRazQdbP9YamsqGeAqM1651Kf7Jr",
  "key2": "5kix1pqrS3KD5fLwm4rMvG1uLE3TysR4FKPHbAivp2fFds3SE8nG1qqiGcpSULr6QKPWUU1n4QeHSzMR4zHELiFN",
  "key3": "4AqPjyzZadpRxfY4kQqSXVka81qfNTdmssy68g29opfSfYWWVhYrDcUXTCC2NPhUn75CS7HpeekpjNtq2usXf4aE",
  "key4": "4H9FbgNANhYX8347ayVrsn4gKWhoiwt69TiyqAZxkUnsv3W67vVfbfnW4md6pS7y1EBjPJZRuBFP1LjQwszbfrwB",
  "key5": "278MhtQmNdSGamtPisgJGdS4hUpBiVNGf8qw9nKqEBvkXxLbJMtRdKd2czMAbh8K1CG3YYi6CfpzzV9bFNnPvxTY",
  "key6": "BKBUWPkutYn8dgMAv4Cw3QRJvM2xkuhtSURPwv1r44Ezx6jL4SNbNJ1in2Sej7RaRAndGHz9LPkvnt6euFKWiDE",
  "key7": "2UiEq9EKWSE59qVBexs2UEnsLa1gp8GR1nDB11yfWKBeg2mY67TtzxDB8zWdcWCtLroEfYQ4u4UoFn3ne9XECSVw",
  "key8": "5t5W2B4VVZBT5hhfkDqsifwwMm4u4GAQr3RVNeMWhXSo6nQzhsJZAefgCwDs1bURMnwt5NUsQM4C5qUsaA2yLCJu",
  "key9": "4Ag39fB1e5LJ8VG2XFy9bnwy231ZCpqEGvnrKhxq8hKC9Fmyo6Swy7YkNDbKkVTBpF2scLME66bTrJVf5SihH6iJ",
  "key10": "XFteUw4P3sRsrpVxgqQdGPTZtMnG5xbDja369f5Ej6icTN7jv9AnbXvzKPDsFkVuWeRDWM9Wr7MWDxzhKnnnaby",
  "key11": "2A3irZon7aZV1gVLiP9UywHQUrrQk66uamZ5ipioJNmKfdmd3TN2uysjeh9ucyrr46hJapihpM5zDSkQoi3bGFGC",
  "key12": "2pKX9jaHbruPD3ntCdjJAcUY54MuKsQSP7G1omFrdKrDhdwj7nZu81c731zDpQSL88azEzKRMjPrfVXxWKstXJGM",
  "key13": "3f3QatXLdPG2oskHdNTVdwze7uyuUa4GUeB4JcUGvtCh7RQc492FQ1sNYPPJETYUvDtNrqzG2mSYGdG3ed7dkzCA",
  "key14": "Gx7BMo9jmm4pT8VUyCVWHJPJea1FQ3FSYsX4mvo45vrvJRo1ubx4TLzuenaUZfihq9HvW8GkXGfnnfpEkYiK6mR",
  "key15": "5Rsh6tsvhkoDNhC6oZyrf2CuiDuQsYvrJTfdrS1oRpvfZEumyQB3tJ5iWJBT72AePNBPKk8TQ8pkj1EHLAzvDppy",
  "key16": "4RBLmf6YLYyne7vFd8n9fgW3MFxFMq6LzsNUmC7N12DjEB17imSz2joRddfYh4Z5CFNvBjfJmzGMuRcgAxUvwfPC",
  "key17": "27RmTAmKVpdHFcgfhyaDHpidzBoJXDiBMKxgcYqPDgTLe9hyfrAHWPXinwazjKA5Xj9U5YzWe36vdQYk9AhqiF2J",
  "key18": "4P7LEcWWVFhCbnzBkvpDTji7zjXDPvdBCMLQqV3Y3eKNtMcKnkgCwmk4JLwGJDLBJAh2Nt42oUe79z9uyC8uCpoX",
  "key19": "yJCGrtQmFbJpzMxFgjWdCpGkvRqfwXHwr7Gfy38EKjFfdCYxVifoikv1r6Ns5Vze1BpdY9kSXfAVYC6o2Yr9rzz",
  "key20": "4e5LyVDz9F2bK5qfaeEJBzvuk7BtbZjPLgUtumGgKMpm5Ppv3LYaZN8y5qmQaXNBP4LtsVqUW8TSuPRsAMzNmbHw",
  "key21": "4JaVtTGr6Mx1gHFNkiWesXmRLvfSeDYP55HMBN6thRCY1TrX4LBoWoamwh3uec96xuHFqUQaWPxH68xrpDJybefu",
  "key22": "2hg263zZR2gBAqH7Q6k2W7vZaETtWLDNSmZirpuNB6QC17E29Ak5GMvHHPP14vFtXfGV7zyhBAJvGKgN5FoHmjXu",
  "key23": "2fcyD4iZGfRvgHzZrgrWU6dP8v7f8y1rx6o5tz4MBaMFdj3UmimzkxKoePDdmfggLcYvMsTnUJknx47VCAuzqANw",
  "key24": "3cbqWwzdHwe8z4Hi7JVL23qU2Zs9f3FJhc5KJQ6jbgwKjGEvohknj6ZiN1qT63LDswBZFvoUdMDQoJtxYHH1QppD",
  "key25": "3zpwJYzP7CLk4gxXeDFmPHKtKRCyThaMsjZcnVvptUh8AMup8dULR81Y6iBzCWssgrSrS1ZY2WVPtYGwFuueVSCm",
  "key26": "5LXaLjNVF4Z9F8hUTwgvRKr9jiQgHtEF4AFXPcTY9vAFMMDoVkjna8oAXhx2yctSeLqPyonRM9QKX3Q472XRzGYq",
  "key27": "2ZmuS8KCSKigQzHG2349bpB7sJnfWcVuZg4XPAH7hR7eDgYncchsVBfTKDQZq8pLa4X2W7fatJ5wUhEohfrdL7Nf",
  "key28": "5sSdwcp7Ygna5WwdgZnHA9c6RLtz27cEizDQvUh7okWwX2XzPnTN5rBSQRg3XWG2VVnwmFJZg4cposiPJF4DkZ5K",
  "key29": "4aWjZ3teDwvBNnD5ScVfxHtr3qBcLEZWVkRcDTFukh2NP8CYjdNLfhT5iuaMkR9CW7EFoYeyeKtRmbLT9F6fUwaw",
  "key30": "3k5LPSv5gXe6thJxK427u2hY1cxUefw5KY2YmwdZikJKXPWU7QwFoW9r1s3BYVE3hus5zNaUAPTatMSEGzoG6nTc",
  "key31": "53vzBxrYgWEf2DM8QGq9hBEU88YZvtvu1jMf2tWrUnkqihbhhi7GNnernYSfKgm9M1ViAfwQie1CbCFY44NMrmor",
  "key32": "5nzWhSn3mhNXU5YznuNS1YHKWos9GGuBtEEBgwNMSb6WpkP4yA1JyNqcjBE9E7CwEdJwNHm9A4CKoz8GpWUdoWhx",
  "key33": "cjxT26aoxx4kGTnKPiKmMaRHdzrG7pW9jd2t4YEeckjWdSuVpdThLBKxfx5sHfzJeKipkKHpQRthMR3ACf9cGsU",
  "key34": "3JzreDsX3YxSFH7F3DMkTmXyXAgF3CSNr2tPCiXoRhb1eL2jgNvfsJ8RrGcUqsai76NVNUbVVRSxLUhAChkfSnMC",
  "key35": "2fkyP6jnBJBbRWi6VzvGHhQJLUv9J99zmqpAumV74UEPUueYqTH97SeUSwRechCNYdJ3wBBpRNNmBExsyNBkRfRf",
  "key36": "cUdJ5FrQLhUHaASg2bM5k7MkesNJEonyCnptmUhKY3cgrfmtDZvhYLsY1x8pGxE887ZaVtYzDXHqgSUbFG58MUH",
  "key37": "YEDFwYeGkLtTvoy7AGBbSaZh4q2zztUSfYhK11kruCV22AcexB8iN5696k8kCuyBHrh7tRsuQS8uZcuZJrXA9Cx",
  "key38": "3LnTiaxhJTo9tGSGTUjvv5fkwa4Um6vrxAu54UcNdWqqQ1uQ4dUCeniBB3NQASiMLemonpK4QNdDNZDQCMMBukib",
  "key39": "4rwDqzAS6BJ8JbVdAe9qji55mARxrnn9YinjBDtHqbjXdrw3vc8e2GiXtduRRM8wjzmxFwmcJw49wfaR3zUXii6m",
  "key40": "2iGvcPoEnpwtDUmtwYSJAaqTbrBwALLh8wVMjffpkLbxAJAj75RWvR7VxF2PPsi9LKAXM9m64a2rp4EnBHbN2ovK",
  "key41": "3m8A5gRSdey3KD5ibfq61ZxyVPA9ZHmRnUeVcLVBW4juBke8B5gr9nm59q6wuNia9Bp3wytNCqqm4b2ZPYtsLhJu",
  "key42": "4EhJHp9iMUpRJPfDuuwB2xpx2yLNoBRgPAhzbiowUhLaX7rrF8sivHAPv1xhJg6iWysfPBVh427z5KPHSMA2LNv4",
  "key43": "4ASbw7haF97pkiHH75Qw3wAbZhuoVqDGbxknRxW63Pk4ntfDNFndTbyPUUT1AkchMPQpzkfKnTYoFEGnDhUetJs9",
  "key44": "2wojDVMdi4DkiZ6iZM7qtK5icWXnRxR69PYwiVDwEmfQyFnC5UWCaK5iVpjKc5CuymsJ6u77RyZ2G5K17L7URHmV",
  "key45": "oZehPtdG59Di22kjeUEuAMsQPCqtVfSApyBRvCGWyPmVPzxAUjzbjpDwphCnhjZXZcpsBVsPKC7u385NH3e2PcR",
  "key46": "2ocJCY3DMZ2RPEn88myv5dSpRZ7436GnNxpShogM1owfxeRyphDivjoDhuH9woPE3NYJPK3zriN8hV4yGvBaNZtm",
  "key47": "3jukrHyKuPHJd3DfkMU8XnaTN2MmsYii7EKY9CEXtaHcffUfCr9etb7gfV2ZJRJC7oLSmUt97RT1EeZhP1zniDSq"
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
