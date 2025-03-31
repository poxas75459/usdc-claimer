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
    "2opAqhn9nE4zET6mnW4RBrCv8qLgSQDq3wRPUTJgBWikfKM14xTRgKJ5csBRnVu9QizpYjNPuDNLZiXoFu1boUDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fdSog9PqRKJShaVjryosH649HWmjH4FzHL535KBrMgKmfdgPnge5FRa5xvUqKbja2p5CuntmV5Njp18wXaaYKZH",
  "key1": "42jbmWKPoiDFDm9nSYiFFkKdiRgZSgCfvBabZFPq2hEX9RMFGaBjfBEEQckp1rsAuXvow3cQkJokXZfGWxv779LH",
  "key2": "4xFpANUR56DWwxWGaojNhVzzDmbvrGyreH6LRgkPGtsHQiwrxEFJHHmVpiW9N4ChV2jviBwLT6XUCfGetEr9iqX8",
  "key3": "4DhJiN1vBKSYVXjaE9Rk6MyaVZZPE4fQiNA48C6QS1WcuGqngq4Ntosv3YNATz4h97fGnqzQ2HAkWi78cU5Xn7WN",
  "key4": "3eQ7ojxjjFoJa377aqQDCAsCxJrAsMsw6Ah1ZvEhovFM99Nvs3iPwNggD8PVWsXv7iqQSKhV2FMjtHxhbtGgEWtg",
  "key5": "2mcefp6ywF7xAi4gywcWbi29ByJRyYU4LDporAWARnBkXKNHNxZErFwXbcTbxiL6ouyiKzncPZR7VZ71iq4qYeFF",
  "key6": "4jrxeKTezAXNcenKMke6hKAR26TEDwebZkB4A6PvqvrAJfCdEfY3dhNgA1iVc2jdT2qSSBXodoR91XNoGDdj92UN",
  "key7": "CxSwshUXTwXzwrgtpPn2tRV5XsMGDtFV54rGQUSvrdWrBEe6gMBYET9TCbz1tJkxBbfkHMpJDwVoD8kH5WGK81A",
  "key8": "2qAfrUndCDT1s1qEPqAmp7p6jXN1JR2XBUacXsuTztDiY3aVEj8nA4JC36HAJyMLwEH4Lf9Rsypkc1ZtSCFau8Uu",
  "key9": "5FRWgqJcA2AqiHBPyQgL3uoW5xkA2YzSiQSo2EKAtraYhknng2CPnWvoAcRzWgimaGnydfochDT4LcKNHSdYipwe",
  "key10": "MT3cq2nQr5zzM8XLbbwqsqVow2C9yJbU9gWiWkyGWuDymFNC7MeHoQqUNLU8uPgZXUZfsBicdk61xwmnz38Xq3N",
  "key11": "5wSPVo33uNbs3ghMDMWvTbNgfE2t4XdjjmoZTHWpds5e5DRLf9LdCXNs9nk5WLpDZaYTYLmo2gDvCmWVvU8r7AN1",
  "key12": "3Drqn7G97BqiNrd5dujM4Z2kgWHZVkJLr6pxBDNkVKLqgiTgFiqg4t9gRbnidnraR2ZS2RahCkEmXuJz7paTRZ7z",
  "key13": "5Mvh76KqiyQeYFXbyDg6LZNCWfEAzJK1oid7Qo8dYMMF8bXDXrVKrix2A35YgYhQiSPrZQrtTgXBkrK5apfFB32G",
  "key14": "53vZ93YMWXc3KxXhoCmAftTJZwpZSNPeXbTK7vgyjL5FR4YfcRKrUhXfJRvmGcvweyGS5SfxUQT7dbB2RSNs6Eii",
  "key15": "cApz4oU5tXDka5SvnidW1pxke78xqcnmT2wM3t1utjZdXCLDnZzQvsQZBMm9VHc3ADE9hR25pg4e4hHQc6ST5oJ",
  "key16": "eRdyt3KtUxsru4MVBBanfPFGzRREmyg4TBsE1XDvVoCzmz4uuSgN92dDn6iKpE564YntyGESFYDEsVtJ6GEVWFp",
  "key17": "57CVYH5QF4MnVntHkba3fEybHr6667Gt9Rf2MxeK5L9C5tEyZyui7ejHDUHFE5v5evz8YnrT9ELMKpiF2xH8bB7S",
  "key18": "2turkDNuwUWfmQRGPbaSGHQ3dRoLxWH9NNnuewxDtEpX66TkTRBsLrmR2844BYu3JFzSGaeKfPSM5v5fSSFgXCWZ",
  "key19": "654DXNqygErNEK9EtDQvCMsDhvR9qivpaULodXCJYPbeCWLNH2sTKVRXzZkibUzBXiMaQ64kC1D2zJs8ESdVv6Uj",
  "key20": "3g3youyHiSLBj1fMrYBSd5GRuM5RU33FfETTMihmt6VxgbwsUJf458N2WEQQatAPzx7PVKG2UtiAqyUHs63ELeBq",
  "key21": "5ufdC3tKZdZxMFA87s67f8fmK8BMKaK4QwWPuiyG9fz2yfyEgK2TMVGyB61ze1ExkUCe4JwKLmibMwhQf16bMmLi",
  "key22": "2qSup1vyebwzzN2xYaYZXkVf5Y4H36hmzrmrpdL9Y5UBx1X8myaB7ZGXzH945Fiv5aVXDgY9SnsEV3LHiPm77A29",
  "key23": "5J2dAFdhYEWHSVswsr7wSM33p4oJY9ZsPpTeNfanhS5RqtHg8reuTcjNegMJxKK1S1Fa4b2apmQvVyKPt2XUZdNN",
  "key24": "4qb6qXEZNc1djUjkpMjorLjnF1eTB6zYMsjfZ7rUDcKLq7LtF1Wv7WKemPPyBHnqLcYfNH2MF5pgvsEbDnjVsseq",
  "key25": "SNzK67rm1rAoVwgUYjVdqsJ7VCGf1o4HyQdxfgP4ancJaZxzsv1JZTRSjub2xXfiioeRLd4a6BBAoMLYVseorXb",
  "key26": "ykPLo9UdGwDr3K7TR43XMo5n2dfK2SZ4P2ch8qqQgUrwaPHV54cD4DLCPMRbZ9fuGPHo8dfVBYrwwh3pCpMqfiL",
  "key27": "mCXsGLeB8NKfWhQvqvFqUxwN1yHYu7iFpeJ2T5EhDcftofHLwqcnoddctpGXkwehHWHZ4HZDmx2pnnuR14QM8Ty",
  "key28": "2FwC5MVcaAhMoUTUeEAGJzj6tuRbx4947f1MsaJu3fXcyhzAGQrFyB8JJKKkDhma4em8FRdAgD55t1cFTuE3cksu",
  "key29": "4shi8GBfyu2VSQpJtVkX4pSj1jW8szVniQTEZrYQyn8Zu4rnJ4dHpdktreDa9Fuv1wCWrBmxKswCne3S7HtVSz5E",
  "key30": "51BqaZRnixqjpW3WF6zuZ3vxBTBQVhq4uGDiJTrsQbgwPtXe4Lye726eWuPz46YbgH8JT6Wa4PS7Qb1fb96Xpqdz",
  "key31": "3zCH2R15jQiZHAPPzh4k1BsLf6pkWuWo3x3o8qAsG13AqzjdzVbnLzps3GaMaNa78LTJv5LWYY5gD8j1yT7auWHr",
  "key32": "45F4TwgoQnxpSJeYfJB7krFWGpHVpYjbQcVxtJYNhDjSN8Cv4XXBrRSji8cu445VSA5o4U1B7GRvmDby7cXb9nse"
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
