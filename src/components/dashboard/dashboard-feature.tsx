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
    "KX4EDj8scQ2d6ZSp1Uh3A3guYYTtHBmAgQT8XdUQ6psnCat5w1ey9NVABtw3TACwWoKRMsggvpgKENeM8DLaFDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QeW6zhwCxaGpFQCqqiV5PbU2S4hnfevqyfNzJ1whkR7pmduhgXcx2D7LxU1UiWtPkC5rwLZ27FDQt9UV5SUznxN",
  "key1": "kw5rez3zNu3rvSmyLkm4Ae9g7hRXssDCLGAsbHrqonCfwo5QmQwDaHqEPpyyLpsBa5fngLNMZNQLvGs1mbW5pPX",
  "key2": "3SN6MPB1nPTZccwmEHiG6eBAXBKNiCYauFcE1gmyyfDn5Di2JEUVLQwqpTeGt47FdVu1yz4SpLmguYzhjCKYTNgD",
  "key3": "4qnQoeHYiyqTotp1X53TheX8EerP8fuVFKGxMVVTeHn4vPkGSWg8nt4sieJjzoZQQBsvo2GCjbn18gBFiNgfNqYT",
  "key4": "SFf7X8bYufEwDvAbsLkbfXEqgqRPy37fL2HHw3LZVCBtXBsVef5QXBcij3y7aoaCpyWbM1zdgpC6Vv7LWrEES3B",
  "key5": "2uEPHm2A7CrswakKjxyBXPuh8CijGmqy9rvHCw2dc3duFcr1QhaTxyC4VS3aPC9YcDdNRMkZ3ofP2xxBMstEkD2s",
  "key6": "383HyQeAuW6Z9K2F6hyFRXn3oQRP3UEEe4UfapFtWnkEbBTUR8VEdTbwvki5hw2f8GSnJ4uh8vKCq9onqYhgMKim",
  "key7": "3CrfqmBfZpQU2bRKoxFcP9xF2ZBeadsds3uCSzTkj84o6LXaQXStmmrbVi8iaDP2xVQnxT9TfH84pTGrdnGqMg19",
  "key8": "4586u7cPNWZrvV5NtukMDqPun3okMkZYUkrgGAuTKZwNrn2Z4PkYNz92yWB5Y6DwujASa8MmWRv4jUNPbakJEGTV",
  "key9": "5CPy8bfANyXXpdmANHmjg3Zkw9Qy9tsRTDyaPH5NpjQ5e9gdFDXDP4zqPeqyiU65TskWkZGdUNAE2NR3iZagGrih",
  "key10": "2Fz6fBmbTyqvT7UGgf1ApxSL5yboqgyJbrYFqdxr9MtZGg6BGfuQg2Ugdnhvabo7syWgmNpdmNjxKRnKUMULcux7",
  "key11": "4YNLKCXDHAaF716qTvfZDZSuwEuSTPRAmeDy5VK4N9gKjPNa8pWmu7H3hmKGH4wss4aXLypii72YUBpPkZpxq4eY",
  "key12": "2LAJFgHCz7bGbaQtXihSfwjEVcTD4ZVy2TfhvDNybxHu4anwZNwbQvreUHW2neFXd2S1zwQrUcwqMCNvSK8LM3NZ",
  "key13": "3yCMq7PtFNkfy3zioMpZC8M45f3PzRvKFzZEBsQkFUuarnpoyNYd2zPESVtT7RZ7hkrvUXXxeiJH12n6nT3jrDQk",
  "key14": "2ELs5rUEeDeMyuPrpr1nniL1rXNtdpQCkWFsRctgGMukkH3zhEamvhjvzd1WjFWu7J58y2ZQTqUWXve6nJdWoXHH",
  "key15": "DKpBSxWAsV2cwAcCtwRPT4S6hyaph3TNP4zrJNYy1xLapfdhaf7EahtuFhkgwn7a46uY8cNDuFJuWdYcCvRfS9m",
  "key16": "3Fm1fiTxdPntEAHSnczTcx9HSBWP45zh6Jm2b2YXsgVjP3NGSanzQfFPEGuLphaTeFM1WLBPF62nwQkJ8xtdPZzL",
  "key17": "5XmUCmif15W6o9KAYrzMQMbmECrGgJoTQuNnhFGYo41mE1Hq9hu38oCcXnRmuvvFQGk6R15vWvf1QdyERLT6PYxw",
  "key18": "4qbcmoVd3nuszSLNWFKwEtnmpYYiAjoGQ33Uq6jXaEDFHDAfiggUP2Vv4miRAtdszEhsMKdNJ1L1y6H5UdmwBAfQ",
  "key19": "5t5Ct2J356DC5D4GL2ME15F33eE8ut7yByZ2JLhHXKJCoXr78ZXt62r48PV5rqKteGAVMfpDPrQLwUt5Hk3Df85j",
  "key20": "5Cek92tWc4hUBPKuQCRrS895xJgQwWSkfNpi3A8dBCW7UnDngXWNUpeU7RM86eqFGsiLQEhGZnCPVd3h7JCVtUXA",
  "key21": "5jwbffWx4UABZ12q5WPrRkYkwM9DnKQmY8mn4P7oWRzhfMkZ7DFvpLQhTgFEoHNM9PLcSH4wTka4HcgxDXfsGEbW",
  "key22": "3tXifnp35nurxJLsUrT19ud7UNj3UfshdUMPR44dkw9o8yRmWFPQdTwnj8x7ZMkUc5cC1nsoiHu1QyVJTBSbQgKg",
  "key23": "5hSamMQZcHuESXgsJwRo9owoAwVGycTe4qn6ogpDjKr3sKapjy7VsrsQZ8E9SLFoP7KBGe9mnf2YMqxekCrKNBdD",
  "key24": "4wbFTBAcy4xFL7a3gweLykHk64jRK4rxzypDTnMtEuJW7i3vzF5fTWyom2LWU4L4EiG2ykuqGptCT2pKXdoTxhMQ",
  "key25": "297KBHeB39gVWXYh8iDaqUz3VxwLCkLpzUzjL81E9me8gqNEZ8sjcatCaJXaQN7Pvh9hXoga7c993LBizwXtqKVw",
  "key26": "33fvYvdHk8DgVjmmLZPDn85faZVjfpkbJ1MJWsWJcBVbMSDuoi1Gzw7og26Pp9uCo4nJ2tKuWF7x8vH1zHFJFYo7",
  "key27": "3W3WRh4fQrhzf7Cngy8rmnRWwtPp7NfrZaRmcmeRkzt2LfETBY6zuNsQw68dBDovK35BTxLsoWC21xFdZSiu3fTZ",
  "key28": "jdAkGAdLxhiY8cNQa1YwkTDwWezAYg1pATp8ifgwF9Bp4gb57DU5WKiscq1ituyvu3JR6teFJWhS9u1na9G9Jat",
  "key29": "3EFtDjaTNG254ut5nmLF75wbVW66pRWtt8nQBCsnJ69zssrYWeCHZnJTbLPAFFdweuL4FLrWUbJdTViK3fiTEDFt",
  "key30": "3uG2g3eQeShBLVC5c3CFZJUeoBzag6CytMQLfvhQH5yradjp9dzSPCFN6bxc1EJcQADCrDydn94iYDsd3xxjTh2W",
  "key31": "5UYQS2ZYDEGgD27hA4ddSADVqgDh9V8Sc9fDws3mF8TUscxFXqXhFm27f5VBAhTSKAp4C8wUHkMhuchcgQCoqdyB",
  "key32": "2zeH5Em6QhSF15yYGLGinjqhnExnibp2RhMnLzFTzCYGKhbwonnKHigqi1dToZMPE58fRjJsVBKLHfN1YjWRvNkh",
  "key33": "4R7mqe27b6GPGr6xqwWpvUGEcz8R39LdTcXBvSgcNw7VV4wH6qS1Q4bv3sWK6trLy1CDbTSFsBWM8Y4STB4KApbK",
  "key34": "3Fe51Z2m92mV31vGgNokgxWK6pJxQqvGLqPN7iQPrscRjwXJkxTsQf8sbr6wTDonqE8JpdoHmdR6jAPnmwaLWMYy"
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
