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
    "4Gdkys7Ed1u3HridVAFidjU8eYDwqQbaZYU6jksdawkMtEAQfmLkenmHPECCuh3EFm7tgXdZTz35dTysQXq92j7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43gvbfu1b1bnJDCd6NRrXNNQaUJvdiEBRSp6DCjWK3MgdtoCwU9bQSY3RkL8bz83LNXXSEAGBrwhzsyrpfj83PCq",
  "key1": "5HdBs1zuFDKmJ6rzUBFAuiJTsw83XLe4imtpkhTzJ5kAuRXFLKQvrXxYsDD1Zf8aBtTmcDudriv6UFeoNQ3q7FL1",
  "key2": "2PjwwwDN8qEwkZusTEnQhDtdULkfcbzQFYrqnDM1umnRTJ5J9YNqQoMN2U3xUjyDsb7ByRmKQJbqHyeDnnxMaLCq",
  "key3": "eu4JPB4oe4QBLbDpoTuWmecsteNaRHdPBTnPhB1DpdaWXgL2pkreF9aNPfmQpc4F35yLuwyLgAAxagRmk8TPfvM",
  "key4": "2D1QcY9idA8oBeeooeeijkdGvg5gSNxUPDdRdewrrwmkukwCwuyBGvUbJF8yFT9tu3qtmyeuA1r4hGqFbCPSitBH",
  "key5": "4anMY1iQafgmwz1NtCdV3mth3xFWanVnremf81eyd2SYrepH9VLLZwsyPz9HshqGGBZ5iVnCgKZgBJG9jE62BuP2",
  "key6": "5sgTr1FFDFKHXyxwWDEYbmbdsMydkKAxnNf7au1VYA52mkhyZ7DCNvSMdpqFtNGjvyd76FXzFwGhzGQgvX7CFf8h",
  "key7": "4rjBdtrnKnPpYtAwvTxPen5u9tU8ddwSxRHW76rGXkzsDhe28fh91nDuTZ6cf4FKSBLc8kRmVcBfe2EoR5LJVQEA",
  "key8": "5iw1ak5aB662idhSKia2XnWrwCffJ7VWNpg9JufVnuiR119jQ7wog6MpRf7H9EofeEQFT5K8be2EEJMd1y6X7WSZ",
  "key9": "pzvyehMkGRPXCo4pihi3XEHs8D1mQYDYFsnQq8BWdf9tuTuf2NS4jBN654cJa6NYr4Gd1xszAWDKZoya4WAq4pr",
  "key10": "3CsUzui2opTTQ9nrUcBpiJRztN6TAzDYhDhgm9RZGhRGGyF9gMPE29rfWFs3hr9LCrG8iYhBM9jgMxGHR2ZEt7Bm",
  "key11": "5GG9aZY8QEFcQhZwcS6Wjh8xEiwBEvjDB43oR7gmVmCTGquF6t1LDsXvGueK8EJpDMtQMmtSra44i6QcXe3JA3DU",
  "key12": "64HPXUG6o6pB9pmSFN8hEjNFn3aJ93qzDH8z2cDo86vDxefZ4tTEB4SyS2D4KuaH7UQhTsTnETZppfkozUymA4RZ",
  "key13": "5npQtXbvpX9Rgz5MCxHqomzr3jtbUSH8owRKbXkCAifpsN6TwCs6d4zTXJPtTrexALkvZ6izNVGg78w5S7CDAWG",
  "key14": "SqhDvUxpVLdjmJtWcAJQxkA3P1sa1UhiiM75NsJbrDon6zGbWbsD3cXG3r9LrovU3LZ3ABd9JmnMjbg9H9iKHeq",
  "key15": "2psNQpE5Er2mpnLQrRF72t1FshhqebCMwYCfuDW82EHC8NaRH1mQPPUFu79azAWENRtiBQuxaL4ajAX1N4yyTk5N",
  "key16": "3hXynziZwRvUAzQvccoxw3p5Hpptpib2LqLdyghf2p8dLaQ5VSVE4J38xWCFhRfXJcUjoBvjuNdGQKZpR6mEGmtr",
  "key17": "3BDh9wnUM6vwQvUPUQFFzqVQLhVCx6vVtEUc1A4iLvzW21GM9nvoEwjg6ztTbp4rvEyTf2SYU7ZX4VUcqWpHbzK8",
  "key18": "3PobMoWGcbREAdkXNm4t8kHtMSB9C9mb2ybMyBQC4hQwcfjXSw4GM5y7BiS1kg22eeZxZQb3fMgaTN3x5LowhHkT",
  "key19": "M7mGiYgvP7qvPNhzfCnU9ADNNVGbk9FHjMaUEeWpEYedyKSzpm2uswSfkVkjsq1iDnbRVMfyFnwrGVLm6ekMuWp",
  "key20": "2hWFH4M45cGDx3wyfH2feY2WxmakTCkJ1R1PaGJ1p1m5xv7wEoEcQafKUZFJDVmPcdAM3bq7nVu3AKafBe9NCqbc",
  "key21": "6awvw6dEzyYUWfXoyoc3Wf4sLif1smce2tF1N8ZuE8SMgCPx97QGfPNzbcysNddBGX7nzGBdCNQMcMJ7AVUQ7Yo",
  "key22": "3gxhHTuNRbvKutSvRMTHK8Ugn1LsxD5xkJWDQKyPzK1DnSTafqXTjs66LGuorXUZEEe4bHbZQ5Fy91q5CJTko15D",
  "key23": "ibC5AHUuAGcSoavGNJG6wtFNF9FXx81tu1xhghgfakFj9ENwWdjf26uTjpLG744p8Ci8FUMXXvBfDnXHx5cHFpr",
  "key24": "3qpeMLs3oB1tTC6X5ybbKsG2EsZ8Kf4CGz2n4egYjhFKd6E6g7ns1TQhiBhvhxcHSquB8RGhocXkPu3dwgVmEo8e",
  "key25": "62kYxHkPbRvSHqMs9GhGAsANuthKCCyZUDj18ADJYsvfFvoNbmAeA55EjKmwsQdRBpeLKn3V86G1tCDMsortgZCb",
  "key26": "xD4vmDYAim8CSi688MR4sx4zMmht4pskGDBdve4wVZHsiA5szdnLaEA9kRJwQtNG6sJRUJYUF6MRkV611uPX5ei",
  "key27": "5ZR86cpBGTPhmit3jFD3upZ1SbzphDviDPd1YV4rpHGUtkxNbSZRtJ9htACVDnTx2Q6VobtLGYcJ88DqySwgWmG9",
  "key28": "Bew17836uK1WWyx6vkiwzx22wzXjZsjtHvxEHVdzF8B4RqzuA2MbPsUdhGqfUCrBE6JUPgw4DpJHCbJhgYj1MLb",
  "key29": "4qzS7GuTgsAWPFw2nXjRkt8vsEVR45LWNNLwjZN85kyXpXHFpECadw58Y13eeiAQGJhgJNXS4gSYxf4pzgKegXfF",
  "key30": "2UX3N4WKkycd7GJcvXvW9esFNs9TJDQacozPWQ3nJQRDeqHnn5FRB5zzTaSQc85DHMG6Nq8agBu26sSsp2ESBpFA",
  "key31": "DEsBfB3tnYW3wS6Zzn6iqzhiZRwVDJyd86VwTBKzViPeb66imaa3nt384as1NAKzSGSfEFP761QCxjBLHsyjNRh",
  "key32": "61chqrZjmEDA65tQYmEbHU8tj9AcwMFNaLETzyfQX6ty4eW2YJA45tamDuKA3atcMc8sAPY7wbJXyi5diBaAerc8",
  "key33": "66ZeM9Q6FqYbTN2sFNg6KEZzVUQ8Kc7PaqRypA1DtWyCq991U6aSEvCVVrQ3KRwdruzUV6aH6odS1PnqVnL6fsMJ",
  "key34": "41yQVvujjTNpsmdD1nudyQbPs2sSRY8Z8Vfokv2KUHAk9Ct5MtnGDDTzsCrqujk5CVRMYvx75uRmeu92nxnRru7H"
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
