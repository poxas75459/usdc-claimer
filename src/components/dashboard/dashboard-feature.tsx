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
    "2VVPKA1bc7ZacosCmLNvBmQ7mGRcf3F3RjxLM5Wxw2Lza3n15ap327Kcrs1i9cFdYMXGj1NBscq3Vzdt3RCb8UxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aLgAtJ3yYuVcF9d5PhaPBwk9c8ea97pTzKdM6MAHD8gtSAnQY3k1MkNMS2EHYNftoVyRYUemY9pkuMc5v1FTM8A",
  "key1": "35FHEfs7DLtPuuQj9vHZEth6uodhUT2aPVMjeUgD6XSz8RG67RDvcTvVDjJLYTwidkWmQ9QH48WmdDPBNrxsDVDr",
  "key2": "J5mbsN6XW7yVuhnAiTtYHUCHWGVG6nVhG8eRUf8dvKmZLJTpcc14xC1m9nDxaCea5ALUo4vzbRyf7vdyRMASgKR",
  "key3": "3Qc3WwTZ1JrbvTT53HUyf9Q1L5FhW6SxyBB8bGGzy2KRsoLcd5TQS6zEBmNwju7A59twXKf6Sq8NwumLW4FwVMm4",
  "key4": "pCJen2btHXMGhnUu9AL4v9Zv12Lr64xEUFkSSzVuBJ4MySDJLjJcmpKKm1dT6zDsXPPffL5Y5H4CqdyYm6VQTn3",
  "key5": "ZAbqoYD5ZeFzbk6eMmWFSXfnrL1FRstHPj1BkoE8Lrr4fhcvVt2Kcnpr3tRoEcb1TRH1axShQXGraruXDn4Q2NX",
  "key6": "5wZesvtjL5wWiaTi7nJidHhPhe7j7pk9fWNtUt379xfz9mzASW3MEAJNTdpuq2JzncuYDCdoipsB6o1UuCFcKt9h",
  "key7": "cksC3DQP6rzHVpf7KMYHyEntyRAysvEwzuL4xwfCrnhn7aFkYtVg6v5BwQ4qHVDx2ngge9R9WNEeBTBNVcAyRib",
  "key8": "pycyeX2vX4L8mUJwSj3RHpAXzqE1qibiGpLZ2xttjsJsD8fUvnUu4omUbKa3HHkmRFdMjBkCqkNDGyp22LBo7T3",
  "key9": "5KgAmHuxdxJ6aKZ7c6dqoAjb3UNWrpwoF8UAR3XYGtVhKRwywW1TnpC9UKFQRB1BHuhP8Ufc2Mdo7nGP7rKBEeqd",
  "key10": "3JBvsuoCMBdpFdmN8gdJhfCjFqJkVFV4DmBJ2ZTXd2KBLQGz5pHufdU2KEAb4bcr626MQnxNcrScRqdc689g69ey",
  "key11": "61TBASa9vTUrsMAXVtUVu6DyvHsBUNdTfsUiGmXJr8Pwr4aPet6gABdLvFJ13Ck64ddG633wjVqEBwjXZcpNyrUc",
  "key12": "4oeX1RaR6YxoVhiKYbhKdiCfVAyUt9Ynbik2jUo7aQfVQ6gERUHvvLuvsyHaBoc5LYTuuHM1C9qAGFxmxv8EGfh6",
  "key13": "4uX1JVE6rbDQkEdoFNq27rxM9h5G48sWhkK13GYysEcZCfSnamaqGrNggUCM5w8ksrYMDmNRkQPfgzwgzVnfdQNH",
  "key14": "5ghuj7hV78etPBiKtqDRc8MAt8a83m1acMUD18yw9v4Jk7g3ww6wYtcWjtpXmgHDFNsqGpEBxpR66Ji6WxvruAZh",
  "key15": "2M4XkcBrmdrDHXhfEmWrEd9TD8tMczbyrkPrkocTJKgDmFyMemxbsGny32zzXDcLvU4URYhutruNi2SUwC5R3VnK",
  "key16": "4EZXCJf6RmkhQJimfEui3FSCD2EhbBn1MjB4kuZscGuVDKPVMDH6DUJbkrbTWNkNsWTpxXggv7847gX5tVNyDg1W",
  "key17": "2Bb9qimyUshDqkSaJZdqPC9mRpznnrNk1J7LBxsufsRKWiP8aJvCu6ZNojacniSE39UHLBfm3QBxudrmAoSCtyaz",
  "key18": "5nwesxUmQJxDR9cNeAGtYPE3JkL6kgqeByfBnSR4VxnMMZZSNCqNLBQ3kKgJKpj43eZGPQ3yMNbGvC2gEPN3Evdr",
  "key19": "48cCugg4AZwvYoEf9CJaFf9Wq94TD5bcnegcWyeeC442HohMqyd3chpCmV1ajYe5d168RsMBRFaLfr7mJmcPy9HP",
  "key20": "5uiCj7cuJvtzZNjV4xVEcudZTERs9NLoZajQZoccQxyBgQQiL2WC14SunbTLnepJ7W2kvRgfJo1PBdYNtz6fY1vZ",
  "key21": "3HRh12Px4jyzEujRd3kPYhpoJSATTwNMxAjAQDtoTJDe3Zjd7j6qqgF5bRHFmxUJMzxppRJDaAtraFuTkBJrcxZr",
  "key22": "3C2eNctPM3hFG3LLieqA818LbrL27ZDtELA2ZEqVPZbEUaWZAhP4sQGYbkBf5rvhKtznvQTni7WabY73WRod8k1w",
  "key23": "4f4KKDgsa1cox7uKR59JGTKGXHtdwU3RBonyNsAyU1mzASFcXcU9x54ra1qFLXtWSeau94KeuqkCbku1dfK3X1Mt",
  "key24": "5nMTSLn7QSyUWKSJJWNkKAw8hxy5Rtao4GbE1Lecfriq8QXT9rPtshQAq7WbAnQNKB1BXdTEdpoZNsQZeWXNNdiM",
  "key25": "3YJ1nh2Xs6eDBF3rX4V9zrowE9MnTP4PLeGQBq21xyh2qY9WCi36JprKh7gzFfYqS7nQ2Mu7jsqHARk6HAMjRbPU",
  "key26": "2LGYh3v4Vk74TDGsPayaviP2qSGxaFbt1MnX3S4J2PcagPTh6JZJ67FZbGkKLK1dvovAKGFs88caEmym6CVKhnK1",
  "key27": "4Vfg9ME7j9cLxiBhKRzX3VReayDQ312QFzf5SaEMYjqRho7ZC18SgDGPDWWbEo87cXo2AP2Ws6oTygD8p9Pb4drz",
  "key28": "4zwFneSWNmUmFgmDhnVPuRQMrBaX3QhsZLKMgtN5DjWqxKMAv7L5Nr9WE7ZMiwkuh2S4bUCMnsPbPPsB3US1TxSz",
  "key29": "3cJ8H8q1rC6fDHQHWU344NhM31CuBLRENWtS9yv3GnqhtGk6KW8s6b7S9K5cWoL4fj8bysXSWjfXano1HnXvNGL2",
  "key30": "5tfB4eK3PVtM4xLtWnFCNzwR1uxrLj6JhkvHnKSiCvfiBbdAjXughCPV1B1y1YpRESjDnDMXww5XyUeYuMuBtbTt",
  "key31": "2i3bstLfdaFNMcQPVV56nbLdLN7xdxQAsEeEYTuCcHhWN2RjHheBLtXbPCHWfc5xsRKKrXFKLReDP8GPSvRYucng",
  "key32": "hoPCXdpRaRL1qjcZpwZ2iNu9QB2Jzs38iojsVuRtNTQiS4PZbaTboEbUctYCTfXNv4yuMMidkrEuxiFBZ4TaDAS",
  "key33": "ANdbcQpUSkqeDCs7DGd6hLeKmQsjbva5C29zFNGtfRiNfudvc2L1MZLRDGNb56vg3BbErWKg7jd41c6ymvoghpb",
  "key34": "5cUzw6Cm5UhdF1mcnLMmrSH5Siqm2FJQrF2CferJmHNuQhFNAciAFJ9A3g8zw8zRRZeMVxq3ffArHsEUufQ8Xf32",
  "key35": "33j2hZjW12mNBtpv2rehKZXidVAwNQrD2yG4n3QHSyXxniiMddqvVDrJJ5vDo6kHU2hokc3qfdpCL5e4pu6YHC9J"
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
