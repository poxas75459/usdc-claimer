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
    "5pnXcofzZFZpTMTw9CmoQj8BH9iPqMAMSMbh3kEEXdJZ75YpituNSyCcWqNMEoZKwz5ToQnZRGu2Dggikke1LX34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2izK3mnsX81R5xj8zJvZp25X9ZSWaj695DdoZnwTFg9NPGcHTdMchqa6J6rFPovV42ZbzuWs5KdhafPDA13GthTh",
  "key1": "316KRFsGLfCVNoJgJLyFim1gspbpWGHtGSGam625aQdsHAjzR4WRZ2E9rH8rwkg3Tk55qNdMc2P4i8Vj8AEQKUMG",
  "key2": "5zv7tqiXJhUA9mN7HocSP9F5ZYWFMDiEUtn3z5EeJJPRFQZENexCzbVv4DNkRX5SJBFT64cTjYLvcfo2UJMW6U2q",
  "key3": "2y97VxSHPreeRo23xNQHsiSLQek9px7fvEXC1x1hb89zwdQdv27RXNqsS4jpKhhWhLA7N2rPhrtL9kunfZUqi6F8",
  "key4": "3pkNAS37JB5BWALitePVxbjFQLc1Fz2EiJiFsAJFN7sviWUSNPncysnxbEtxqUyKPPswmgXgvBsneqiKJTQpwacR",
  "key5": "3rpRJtceRbGgjtNNR3WwJvswjSswd5Xm1RMPw1jfFfWGHFsAukKjPz668zNdXNQupC9BwMrLhwkkUEPU7HpwijyA",
  "key6": "55yQ5jNDigtTyiQzB27cL2LqFFkrxfgGXe2CrX4Tg86hD5GpkgSdXPyT1pWeErDR2kexQyfAiMQeH1fUTq5aWKsQ",
  "key7": "4wSzbh2xTofRSR9nNqdxn4kMtYc3ZrXPAH9wJZ48HAkunTf9B4wy2347oMGPsQcmCSWykRsbowgkF19hM2p2okXV",
  "key8": "4yd9Ky2omkvAZWBTXDvmu7pjXLJZWyDYM7yKtACuFwsKjTrViHYdWdJb8G6nyKB7XXgM25us422KRabHEtCuepts",
  "key9": "3mn9CnU5hiHsPyBXWhsgKAZ1CaNvH4p8kYP4SJ2RLMNWDyJjARw2PWRyrb3dLx8nPV7gwVnAcMHnPX4dUtBRMJBr",
  "key10": "2mB9NFLVqGTf65dnDTy2QZbgqJdzR36egtPMGddh3vxDc1ySXwetdNTsdjEpY9gJSLstUXGap2uWGTi4z5SNkbb4",
  "key11": "zLA3jKMsS8qzpheFoQSQgWfGWQK5cMCYV374A1Tisp8bHLyHFVA9DSgQdQrzqeDF32tTybpRSe5gR92oZMddSiV",
  "key12": "E3ozGKTjWYmnVqYDap4b4R6KK3DSv5FrxRQbvxffQkvTJhkE4Dc4V7SgjR1tuYvzoaMbM1hpX9gikRaEf4M7g8C",
  "key13": "4ecgFM5xPQN5f1oAXRFEipgW8776KtcMthKkHGEwhvwqkCnxhtRaQSBvkYWjo3JVwXDWuRftEs1AkwNe25ig21W5",
  "key14": "2s46cWoPeKM4psGkGfQY11jHCndgfSY8kNhZ9B4FhcCjwttoL6QfxTUWEFEZkRQMECcFpxmMiScXQK6XNibJkk6v",
  "key15": "2HfTfkbgYv6kjxQy7jVC7ar9fcg4j4ubY1UbmkgkssyX6ae2CRmhRDqtiq6nuZncAD3iWKGe1fnbk3Fur4Ayfr8v",
  "key16": "5p7Vns6AR1CDFPpXWB2hXrYCX3ao2N7tVhbeHmrAULdJAUBaEom7b9y1xNj338Y9m8xWWdKmjkFpXeeaMTscQrts",
  "key17": "4d3yAxR1dNVQfpquZ84eQgASMnBr6oDZoCncHtMm4dQ9X3XcedjheifkMpeguya9Tw9xigpCprLPstWT4NFFj8kR",
  "key18": "4w7EhUrNgjYv51Vr9ksxKDtamvcpZBcpEZxsAEZsEyqudMrawuj9yJeMSjdtg7RKNYaMn4o6sSM4fa4d3xiTvkMz",
  "key19": "2RQRVN55S64AYF6ziXUEjobhzkzupnMemcV9sBH1PVGoZ9dHMeT2M4sWfAt4XsbJ1waoyTwU4pZ2yBmX6Xh1MciD",
  "key20": "2AFkmHf9esKa5hhmHJt522gyN8H3DA8kLgWeJ5U5Ng19yxgCLBAAcCKcECbGZEhMventp1VcDtHmzag98uR2Vqih",
  "key21": "3A7KWpCgxvyDgEuYryW6Z3Phmvo8b2HLgNP9rJ7pbEZFVCH8TDbRU2yj7B1BGgPc8eznTmMsrNvxrQhtPBwKSdTi",
  "key22": "5FdgX8rHG5iRnLHB9JyWsUqJMNxDB7z2pg9pP2mxdcXo194MfDaisu6T2NmuMfhGBQnLgqHYMAsMmFdNoMKHJVmf",
  "key23": "3KCPHXPRQTZhM6ejVWLxjju8NCcZTx3y8NBmV7t5EevZh1kLgZrb3F7PeDnuyYpkafDwC4vjcDHAUGZsK3iqJUS1",
  "key24": "3mEomkcTYcEJn2DHng4k4gRhYLrsQtckaJkUJnUA7b8Daat17kKQJLLCecJbpWRXTDss31GBSJLCeBUDLozxPtn7",
  "key25": "2cnVL4VtouTCmY3M4zs9APNmTT6JGK2mCDXXxGR2P7MWBLjA1QDggtjAo9UnYy5fMQT4MXXEJWznCcp8f2Ctms6",
  "key26": "SrKkNp8X7CYrREGzq7JS3fd8VaqFoqDCg1sMvu7UpDjGPjYX81Fh7XDEfVoQYwheNDXc4ep2PUZ2RAVanPvsNQr",
  "key27": "65jgFSn3Evm5E1NiKHcdMzGbFDX5hbWpTpngLyinomDWUrxJpZSkUT7JjDjexZX5pWwBjGYg84V6dekNw5dEuhPq",
  "key28": "2EcAH3NktrxDNCZfvZ2BhDfPHEk2LFNU7odERboY5XMuGXymqgPrJ1RoMskLSFfbFkqBwX2f88mgQUzG6mJ8gZ9M",
  "key29": "2tUanPVZm93CPRikGMYo2woytws4C9tUdB97ouQxQdwek9aJ13XHY4yrBuzQajYCcNk8pXHewY7j2ee9ckLXrF5C",
  "key30": "5wc1897thzDpghWqGiGNzi8CQaaov4EoAd1AE7sndiSGneXe8VpUPZM6XwWNRaDqdoooh8CufBjLUvn2zExdis5L",
  "key31": "5CxB7jXf511CFwyQjVL7dVbTdagddXntWE6bK1GBK16iUJaukzZFJDoMPhkZFY44GsRBeJMnvSS1hD8GYVHzwu3X",
  "key32": "iGddLKhjq7G9vYRJVWfP9fhBAoKmwFH8NmnoW2kA5LU1aYGXVNw8CZStZUqxiVYMUrgtyAswPJLMWgp17m6ikR4",
  "key33": "4X86NstKxzw9wpuoEETfNTHbXytDXeX1ceqqoMcyx4XHiXwGkXL4TKXWfXMFFCazEdTTnNfvPbwdRUP36SJ4vbvr",
  "key34": "2Ap3SnQpSxVTooVfwwtvWDHW6f2u3wHjevrUanZ6APg2RmbTtGmmBi4bWZuUQBKaADmz5TmJdwQz46oE4aMiY7ow",
  "key35": "3uKfBUQryAMhWoNexpvG7pZmrKoy12vawE91qwdeSTQqqeXwqpKttcFXHQSyS7iezzbF6WygjZGc8i3GGDuXa7H1",
  "key36": "3zFfH8KMHhCRYixCZNNzzRHNgKs4t1VPfSHJKFCyDbefYrYYLqRqAdsX2BhmxwNNCPwWEeSxkJoEDSxiSZWxWcPn",
  "key37": "3Sxv25qyApyBeKUee4nrfKTHdmLdjC14NY1kgJii85nNKCxkd7FDtEkPFBoS7jFpG5qk7N6DkRL1UtwqFUGByQqm",
  "key38": "4rcAwDJ6wnzKF5ErxqQDRRX9uxkXG9jpdQfevy1n9hMFXYvCUZhtTWiqrNBu9F9kkd7dq7i92d3fAG4kG69RfjBE",
  "key39": "3N9tdVVMjrzWLEK3F4BateKosab7KdqtQSAUNidtxP8U71brEB5cX7nkJuRxiTYxZzRwbCs8CRuDgXffE2TxJ7J4",
  "key40": "3pR6hWKgM5GnxLDsWiW4uLz5BCANBKE6PYFU88b5dPxUSnfMUirUFLxiA4Mt38LCETvZReLbqPEzEWqrW7zh25eb",
  "key41": "kCMdRpx9eUtLTG6v37Y2fA6k1m7Pj3ThbqBfoRm4QBLsCWnRhmqt9kA31gwLxQmHhQMvTfvUngc2DS59ngvSfEY"
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
