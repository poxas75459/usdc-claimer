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
    "2mF2quJ7grvnuzBiQU3CstkBtM4t2g9vuW2asi7UhuTuLxRqvrsTwtu9oRbWDzT1FssgxeRJHcc9hYjRN1W8jAwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmkUvp79bfvWUbM2VtVNheJbN9CJjnfdUDYbhgSMk4HVmWpCBcwkYGCYRZEsgpY89mh55BT3tPMmhkxke22VVrp",
  "key1": "24nAqUKybF6nGoXnPwc2jpxF5HeGGvCFt8t7wiBg2UhwGhPfj4mUv5xrQXwBZLkR1mND6ww5JojHsrCvaBZhDdQe",
  "key2": "54wHM6h9iRBcb285dxHv3iikNqM6qxcFFzRsf92NVUceaCYqDJRpqQahMs6m1DfEyFHkdfJEaUVC5BymsrJaDFRS",
  "key3": "3kHjbMvrcueudDL4vUGC3v4uBh7G9VtNMh2GG6kXe8V3d58rmxg8N8vSsruMxgQiiuoJDVp45UCuJZB5BxAdNHaX",
  "key4": "r47rbekPLLSZrcKZ4hPxvwvwrUyu2zMLCD16DqF9uDLmonAdLWw1BJqgWXW2cXhwvNn7cFEfpTPh8ez9ESzTM1K",
  "key5": "2uEc81nHhYgwhr61ZjpanK6of4Htn4icLJHwWwy8oNrAyAFkaPnLSUUkon5WZnUjWc9e5oXtfBNSB37ejU9RiVVd",
  "key6": "3K2aoN1ere1HXWi16TABhsaCuWjRkePuc5yLbwAViw4c3J2Cmtrw6qbz9mFCEvRcRrEEuFRrqb7vzsFG6KtrvQy9",
  "key7": "TRBHpG3ChxyWpVrT7rX9SR23FwrSazmKbwdPDHoq7WsCxu6TQ8hGfKovjCgrEWRvBaEkhiKAuW64uq69tUppxCa",
  "key8": "4DdobZ9UMc4ASKEGYmCGhiMYRRHwAjvvaCmVL8oW1rnxXGvScGe77ryDvQToShbDDSmw4schgooi6qhHS2RAJmpR",
  "key9": "3r7Qeq2eTcckpqDrmszf3Wax3y1B4PEyW7W4QU9KZKrHSjG2zbUbKc2TgCn3D23PBZF1V4iayS1fBdTHP9C5R1jn",
  "key10": "4aTBHUr8XwuwHtXjLcxLEVrQ35Lfy9AUjKeUg1S9R6McvRk4TuPPz917R87QkFtLfxuhZY6U3UPm6gnpUZ477WbG",
  "key11": "2bp2YGoXXSeKbpUNAkR5w8nUDqRcixWsMrdeka4gpL5t7qcUktgs19WrQfYwZp8dxxskb9fDKMKunZfBWaeEKUqH",
  "key12": "3STPFyaqYL4uppoboUeRWYXz8z4jQjZHt2i9CG9DFjfBrDAsaZk9n4KJ8J6M82bUu3B4kyo9sQKZEqYghBArMWdk",
  "key13": "hAPH8eHSuUfjzXawEoFTRf8G5Vm3N27JgqHxFWYF6GweDwWXNRVgVBgNW5ewCtwgG4zoczTAAe1BdiFsVRVqkiw",
  "key14": "3EmJdbqSpvjCB6HabzxaPjvJP7AUn1Wbz7GSQdAtkvS6gMdEkPbt3E9ePGnMatGABf4iwbEn9Y3Zjsnao3cYiwpw",
  "key15": "xpMzkszcMESGo2y5zupcerGHcdc7XABvoF3oCswFJk8tT8j7HuVqt4gMBZNbGdjHhdjfpB99Li1RLWZLwDzX1vq",
  "key16": "41r4rG6rUjRyDVVpZjjJvyPPfAGmzZj7rf1FtmiWSqd7kg7mn8kK7VFubyMNQTpL8eWmvLFgzCYCtoEfPKC12pAS",
  "key17": "2ugc32ndpz1WBV5TRRvpTBcfsYsHwSQPhHxr93QUVuBhBX3x8RWTxPSYUnNpUfnPhRGEBY62b3xHUMbk4wwKkNhW",
  "key18": "5pY6usYn1er4FV1gikxXZ25uoE57gsstYuu7csa7kN8FHQdKkZXf48iF4Sb9kE2GKzxkdCJTjpo5uS9WGUod76Df",
  "key19": "5UAKJCfQt84J4jvmdPRpPZkr2DtEvk2pvxcSJwMY88yZbLgcQrTyW3fAANALP2Z1nge1DxANQSzrxfnK7bnxSZcT",
  "key20": "5xaBrnm5ZWUGSLoHRbX9oijLCTREVwKGGFRqjy4di7P7CJDuZJPTEafhBfBCgCPdL4eHhYAMw7Gkrx4iTzhf5nRs",
  "key21": "5s3dJZiAniP1KWQnV1L4QStqyiTQAqxPKLdX7xzkNdRiuuMBR4EdFeey53HTXCGhp3ugkbbbsviDTzGxvtYNbmph",
  "key22": "5sprgTzEAywr5jqv7y5x7Sfmq5t91r7KigSo7o6obMt1qCeCThBTTv9CZSGGzcocvizMWLPye86iz5Tp3pHF9tcM",
  "key23": "3AmCXkzYUz4GixpriZ3Jxs54EqWtphFxH1rs5amzT6V46ZPm3oQqmT7jFnHU1VU7fw76DCbVyA2XkCCAYsKhXLqq",
  "key24": "5eZg5A5cbYjYETdw3UVNT9nMQ3A3EY7WoqPh34B86Ap9hNsYvxUYNEosVJcSqUdrCw7vwFmpMqHWN5kToqp5z11e",
  "key25": "54sVmzqFNG4ChfgCA6xrpV5WFn2m5swn9DQtWSqbZBaj7XRHY5qcJMnP5KYnve2m3WjZ3eKycfxfEuJnKpu2RXtx",
  "key26": "3e7Mf3TQkKJ31hDCP3oyEvnVxcUsN6ZmpdPyu4WDaAK5PciYhy5TAgCTjuuLd6ojm2viLHTgNeK56xCHVE2ZTzcq",
  "key27": "3fWWMtCEsCANEsUU8dPkouzjAg1BV4roVmFnY3oxSHo2TKJtHsh4ktvQSdZEaduBtcZKwhomZqsyDNFBUWnXPZ3j",
  "key28": "5GKZ1mxeXkUgPLybecf5JggkwTs8EJf7VPAR66ezX8UL5C2a9e5aCvJhnNwj1Y1PvbcWCZAkh8vo7oKLvjyxRrbL",
  "key29": "a3qdxcyDUxA28cUBfqu3LbeNcRsRyEjyZG7CiP3w4NFFyxQ8MxMt9Yp6omuv33g5eKAx2bUokdvmLGrJDfkSxQr"
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
