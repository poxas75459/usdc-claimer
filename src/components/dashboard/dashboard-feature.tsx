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
    "2j6J48rkXYAVt26ASUfZGAEFqtqshE4jDAPoB3kQZBir7D6GPyhzj68gUYWJCfPZEVmpXttcV5xkJavto33oE4r8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JPTSuXmeFGbqSYfwHZKFfmMBJtSuV4yovekgJ6eFeKZaqhARfp7Pwi6dWts471JvL5WAiEL1ZS8CdKvzuGerhTa",
  "key1": "2K7g7brwzAZnQL8h1TRfSp7gnqKPDvMAyZVKE7MwzNxiugk6PeMVEsraUUjCEDGDmQiNiW6ZVnNZoe3kpxoibqM1",
  "key2": "36goU3YRohAUs4MS8gqqmU96ifrGjHmXxfD4AVTJznnjRMYnp2ptjjBprs23M16KMoBNfCQv99BL62yENau138Re",
  "key3": "f2EhypqtJiXUq5bssvpFGxWfbjPFZfPtBZwhenL63ijoUVaiUmgb6yib9kDemndCWHBmnrWWi3iYmXiou5MyXCx",
  "key4": "3EQsngiLC4BMWPZ5FVBQwezC4hqPxiuMs7Ggxf8wPNmzp6Vuf6dqmrzoCGwAVcgSzVMgkNkS6ZgqCUMqZgTwgeBn",
  "key5": "39ReEggkx1EbE34d3Jx1MPiixwMwoejhHbBdD3dExskPF6sBYpLFHECaftxh7LsVVuKKXWvuTaXb1yrr1MV9rr8C",
  "key6": "mBmqmPQcgoyJEj2ZrCUjPAPjNg733wBaUBDhTRic7YZN61dTj4zMVSENTmLtxAvsGeHh5juC9mCfGgmg9nediAq",
  "key7": "3MYigm2Yo6c6f92mQZpiPpgPpEoTEfASbGZuMHjUZW2uopC1df8YebRKekZwGg3Sb9tppVAgdaFNMvqWKsSGDZo9",
  "key8": "2C66TQc2odWEqi9cPMVs1a88QhFSRQiY6ucJsugx4WDDnkWtDNgzSEMd7yEhLLPz2aA9inEdB65Ee8W8wKzsfNus",
  "key9": "4kUkByCK87PADfRhrRnHcjoj2FVdy1XH8DoAyHfqpiS9YQhN6LyW4PJn9K28SMtVd4HBuz7b6zqLhV7rNz1GcFpy",
  "key10": "5kXx4Ga2oMwduZuZuckX5hPNRFANWwViH5tu7MXugn9wcFiKnLRNMSyrAuXdmktJhJPEMNa1MzY1sNa6xKwEstYr",
  "key11": "5qqxAhvYa6bytKKwnWrGFPeRMq4ruc6oWvn1wq6SyNcRqrcVuWkmzdGDsfWGc6ZRQwE1stUAUgSi26LTnPKuVAko",
  "key12": "7yVcueH1JyKUarUyqgUBouc1nPxbsRXpUGZeEby2WsKJdUHHJkPxEauxcraJ5GBgXVD2gT2ved9xDZsKNbEEB7i",
  "key13": "3TT2ugCsf2wgQ6W41eCKWuMWBW5qrGv7AxbRz7W2NubMoZbecMCP8q1S3yF7AJwhHLcY6Yfe81k1Tiz7i17DQPpG",
  "key14": "Pa84nVsgYkiKBStS8suagX7QWmj9VHxtB6RsrsZWxmudCv6SKptXLNRyake4bfcrFhGjJTKBPkPuFF5KPveNK8J",
  "key15": "38J8xZRii6RngZTva5ttXpJ6ed667q7ekcdCXbZKaaxBBZWq1YoX1P5nQzEFqG8JYFBMXRNWmjBCthPrftme8Hv2",
  "key16": "4E8ffbrcQTzUB7fyyY7zBLQPefK9USSK95Qthan5rU31ysmbSfk4F6BNhYY9Uj6C7DUfJg46KdxWMpWBus5VLt3f",
  "key17": "5nutciscfUkoyht9A9weq89DaGdYa5aJijomHpDeHcHZz5Peo18Udz83GdNwME3pLJzmSimjqTtiHHp9dqaMfHVf",
  "key18": "3oCn7JTXM9DCqZmiKGLCvZUcZKkeBNWjkmajadMEBWyJ9ufZBq7ShGmJ7wskKsGqKcxwMLN6Wc3brUoaHx5WAZxU",
  "key19": "5ZoFnzArzgLGuSPRpuCBvhE64j3Mpc2TkC693FGUPUSYs2ahxR49fgAF8nRmCanBwwLbfd95ruWffbUiurigY6jB",
  "key20": "5mxVwbMzAz6gmApuZf4t32tZQiUkCbb3AV2AnHAyCe4Cm6XCDn8sJsCFCkNZt65rRBBNUGRh7e9vWd9EreBASEox",
  "key21": "5SrNroi1JxeUd9gb8oQfGCHijsUbhrxNE5FCQT8y1534ZqCPbnYG7wG2Bj3Vz4Dydfe377xYUF8Fokuaq5mcZ3A",
  "key22": "uvf2Abz6XBmwAaQF2mzrJRtJJJ1tkpUQvfy2MVmNbHARp1kBZCezXESg9KXdyDjU9QymxybDikQJiajxEpkAzub",
  "key23": "2vsgzBsERXhVnPGCXXkng7qd5S11dqhW7xkhaG5q9bXVsTsmQ3bi1XB1RmnzN9Y1UNxY6qDowPeCAgNdJaZNwaGe",
  "key24": "3dyRDVYf4THiAmNZdNjarMvUqMM6Uii26Vs3oiYFbXTUERPkkZb1d4sa3KqDHYWEq3kB4JTVvszeouPi4U61Xjuf",
  "key25": "3sAvZhKz3ZLwNpgX4F4mgXYhCa47n9MxnhPZqiwZ9aXRV3RHUB4ujA5DPGHaMyEkQTnrms2cpqpy7XkEQHpirhPr",
  "key26": "duvTgci4vEKiSL4aYDQNWtZExQmoiquVgcpCFnvWxAhFRCDDUMz6vQVpD5jyXXwRp5RtrWdXRAFFkZhPKm5uzRR",
  "key27": "3dxjGeCVsn3CCzydDiAmf1R7B5q1uuLoXqb2XxQgPMz4wnzKsj3VBAGV7BwPgwwfMJr4K4UZK8t4jvjVM2ppHziW",
  "key28": "2w7dFDvEq4ZgmxagSpkG6YfNyobu4YJyuHvY8QjGfAnyB7vNHKcKLAN76k8YDGFkvHFBbuUxKL4E81aAWiutVEfn",
  "key29": "35DKJ622gfSBKWBiksa6ykrN46TVuMipesA3mZ87KidsQBdCN9Lmcb4zaKh5sB22EZpC9fC3ZQKdVCNmfUtZJLeb",
  "key30": "5BUsCUxdGk51zZ7A9FojiuvKwZsRhR4aXofcgFxZE1BuNy436fE91X9wfqTw5fL2Ryi4Yzwetx3ZBp34Tc98LMrZ",
  "key31": "2FEbMhLjytiHsEr32q2rkM4q9ma3nJZiQMCjS3DSyRT9twR4vyHciBZv7zHcbS8MrwFeeJpBEshHNb72hBzLdu3Z"
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
