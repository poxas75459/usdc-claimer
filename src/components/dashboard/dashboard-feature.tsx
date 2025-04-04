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
    "5gD8y99iZEpUZY3VaHsyNH56GWQrCaXekKSwUEs37jDRHL83JBbKNbiCmJfCJp2paVZRBkFRY2druMXLZXe7n8mK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eNC3kbfaPSFxCuEs9CsuvkpYfLGBPqSvhWhaaZjKcKdJfo4ncm2u6GVcHLSqq3HFREnZUojdQuKXKB73EH11d5x",
  "key1": "NUobrczaTNULMd1sFNMraTYX871sA2B5nEzjHw8e335iXSxvk1ag5WgP66XZasPoJsZsfb469HHRMbrBrXZ7UHH",
  "key2": "5yBHLE1meEwXGfp1UC785fiQ6WiaLrqKWrCa8KoDxyfjvZvytFA3iUfWFt1w6BjVejaQkkH73LcsMMLeK31GWrwc",
  "key3": "39AXL26ZLf8961amaeKdigdf7zvY6m5EYqw7aEVVGmthGnsGA4rer2hQBQnMGkpnuFWTd2whGkm6MCfJyUJTEbqv",
  "key4": "61EoRQRNetgxKFqUUTVJnyCb325hKqv355KG4zoyU3M3zEPz6VhM52zcG5WRpw2npw3FGWAb1N9wWNygzXJju8nj",
  "key5": "2NaD3RTqLmGMvXkUy4sCSStwQkP2LBvhdyQ3VEgd8FLX1jXLWPPspKzVQdrN4KwvXAHCgmPmmPsVvMxpcs2EQX9k",
  "key6": "2TF4kgejAyJA1rSMT8dVArTCGbKeaniPnAac9nUJaKoBwQCR918s1MqqGsxrKho47zvkbba6rtLnaQBcH4G8Ma4b",
  "key7": "4hVkS7wajN1aaSJCYiPzC3653pF5DFLq4DVtfo4aELomm5PoakiNh9WxbRVcQzcFHwBGnWDXEfC3dZ8KAVBMaRXS",
  "key8": "38gxZr7ifNiAXE9TnUAM5W5A5wbXAw5VAtPhM3Ka863SQpJAUMeBebxYfdUq1Rqc2xS7ZhmqrX69od4NvDp115bK",
  "key9": "4K5RTMWXrEQWScG7DN4phJk1oD9C9xwf6cREUagUxPhuNWx3tGeXbkyRZ4Lxjaba9u84x715Fw9bxEUzHW2HDNs2",
  "key10": "2Q19gJRzQBw1n8YoqQvH88fRJ5B6VEfCw5Vj4cjAoWFHnTcNrKQtK5Yc2F4PSkjV4eDPZdhDSggUNJDUPSvoeSki",
  "key11": "2PrTTDNiYFmbUXxK4dSbMfWwLxC3rHxSKgsSXYgLnM9ngyjLiqzsKZyMjmeNtB2QW2xqZ7q54QNQ7ZmQd32hxJi9",
  "key12": "zMLA7HebgRryJfmqHk4Gfa1VSN9GAx6toxfbk6WWTFbtaF7dfZebY67DbXQMYcWdXDh2HHppbQZKWcD4FQZAyzn",
  "key13": "4TKryiriPWYLA3u6rEZpMcPXjf6Jgn93PrDQj2qe4fEew4X3WETfeAhErNLgaG9EuKEEGnD1Z6qyarkEShVUE5H5",
  "key14": "4XYwk1N2UAcUZYaefbw15dAnq2GBynjYzZsyGrPLs2dSgPUjdy4K3U6SVWdzUGKnXtzvN5jousLmTgqfNwE1qGxb",
  "key15": "7iTyUwfYyu3hsUU5kQgkNRXJecdSFzmTPsGjYjmiVDg7uCHD9K7bgT4n2ebU4NecEnDPxYiSPqifKKpxgK3SzcS",
  "key16": "5Vc1uUF76EVAF887qC9tBTCUYpDFgbQaC3TJjyj69cZVKTafVt6pTKuT12mPpovh71bmAhvJA2tRJNEwAzwWo3fe",
  "key17": "3izGSEetAgWPHJC7SWXiHCmZDtDDr15jp7Y8qgmkMc4P8CXq3quZo2C3z1sBgm9rNT7ff83Vo2dpq71t8iKs59A1",
  "key18": "4pj1tKQczhY4YHpcfBNPSXSyHxyQz5p1DVesUqE9ZQJ82Mzto6od5Z2QiHrKA3ZSN9p1HWjz3vnAjUT2vn3NkYpW",
  "key19": "5nvdWCyZNFxGioydxeAxrUHRbwobMsdMF3By25j23D1xKwrxHBSe8KEMh8dqmn75d2rWXsNXd9EjLDjpkMphquV5",
  "key20": "5DmtcmJq6JXcy5Whoaq9zPSHnz4J5wHosHUoSVLWteGHTufEWmzcvrWu4XvbZYXMQGdxDApDEA2QgUu9ComUcfWC",
  "key21": "62MTuY37EQknZg9i6REdpxmDiswnSUjRpiGCFBZTgsEW5U542PJsmKhvVW4ExKTDfwc6Ye14j6cSxsqAhkGbAGCJ",
  "key22": "3J18yip8FJmyPRxrA8e4BEDiotGNspVZNqfiHS7qVSTsCL4M8bQhQRA96mspDo5cSia41CEHfZEGpotTWeKiHJvf",
  "key23": "3Ws8sSFuaBe18D3RRceMq1xCaHiQhcuiQKxTXU33XJvsAMhx1hWGbhCnTbNgnDLHHrijW4eTi5LG8qEYKS53BHwn",
  "key24": "dzAzinxD2sQhm9d7xDpR2KukQVZTAibe26QEHF3ej7XDKBpjX1eKTwDxXnCukrD25cM1mEbZ8GueLwUxKHWQVuf",
  "key25": "s7NMzWACQQSfbzn8zvymgVNcBD4qwswK9EZPDKmE8XNSHWFnqLKD2RMqmxpf2wmFC7KdPTkgzzgsVTr4mdvuKQj",
  "key26": "3gJD7neda12VdEugDBHKJ74SihNLES4wYeVzAPcnqYPbM29GACRRtTT5EizyqGpgYgR3Ur1EH1YWABFUmNC96Dah",
  "key27": "3NGZQBsHU1suN82jsNXQYEhmengL2SWp8Ns2FoUDm7ApyjXtWMRAWG27DcibTZQt9jj5RopHYrLHVkyfKTiq7AkX",
  "key28": "222SVxB6UWTUPwvNETvWvEfYUyrhrDzF1x6aU5H1fLjFgChhYCyVEcWsbY7NbbZro4kxbpkkbDPGCSwVmesrosuZ",
  "key29": "FVuDHMRh8GWLqky7LknQBnmvLzGCihkZCEFGvfvCjsaonXh2cd8fwjrbLUFtwEdrASddF8JwX6am5NqNfK2zhBt",
  "key30": "4rToSpHcsXxkFFLJijfdavgbLHADbFuVRqo6q4E5xQ7VP2TkvBbrsBJrkzJ7pWsgr6vKKypyn7sxNTr7oBGSZRq5",
  "key31": "5rGxHjav41dbYoP85snEtgBAkZcRKvsLQ1dDV85A971ytXUfkQJuagtLh4BUodQiqLrgXK9i4B1pthcgA9vUmDGm",
  "key32": "R7W14uLCpCak4HkAy3GSNFDdx5uoSHPTrK3vdTXb7agQ4mJ2rjxuaL4Jk2CygTU14jemWPWQuFyW2C1LP5SCWcx",
  "key33": "T85KtWA2MnYXECAnueqkvZdRwuADiML2BzUcmWQRPEPdEBc5SeDZtWsvbSqduKYAGJUSinAakoFAgush2Nzo3HC",
  "key34": "3uFBPj4rwYzbCyWtgJcy2ELyvxm1i3cwmTSdzrWPbjTJJn4QwKLFomTJiLr3s52deVMFeAYyjejFmoATebjFpbP8",
  "key35": "57nJVXx9WwjVUPmGSmHLE6k456zF1u94GDcFLDa57jtsjqb8Y1CA7ttqSsBm6JntNTtJ7xK5S246UQTeWbdKW7tp",
  "key36": "5YWdhi5i9yahURyzreDqcLZ2Q9ge4aijZT6quCHWyy4SicUTGpb42o2p9uWcphcAKH9jZPhxcSqLMRR69LNLeJ6p",
  "key37": "5ckZR3Vw3iKcJ9n7YoFWZWXsgu6FZHP4HK2njM1a1XBNoujtQAzj15Rt7Y6Za64bEvd3SaT588g3rLT71C4ovNkq",
  "key38": "2to8Ds4j3bTbVcz3j7AdiBsz6qKEhXea1qv3mm5qnS1uMpDxj7gqh9Q2wzmA7UjW2jCyX5Q2bRVek9WecABPdgAe",
  "key39": "2KdoB6dUpJSshRVxb2atF9Cm4HQS2rDyHuaBFfZCfW6AFuZ9LKANod3ofLmVbuvV2PSgcmFUnAmv8ZvmLCi9SMpM",
  "key40": "4KrjDgTb1CXqcrBgtGKjdWyEGotg6hScBNU2SVf4UHzJDX4tv1h4X9yiceKgmSUbxztyjCjVifYiBdXWLQRTNseU",
  "key41": "36NvC2YnyFRwQsgaXZxs49pfLYNnvPTTYJuEtkekJs13UGt4KdqTVboFmTnswtijV8Ua4vmHuZgYtmSSJuJmya95",
  "key42": "5YZRM6UbLMadhD9cUsFDFxvQm1yyi8x26tpdiMFZ1NqcRSPruM4kRj7QVmHKDb587Epb84PbCd9GMNEjynpA7C9J"
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
