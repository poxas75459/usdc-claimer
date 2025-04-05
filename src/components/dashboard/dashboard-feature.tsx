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
    "24T38MuX9W3fDft5tK7VmBQFv6Nyb1HyJWaMEHHNPx1vrMQiTFx8fF2enXTPskp9nvD4zmeDWrs1JJHDt1PQupW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63X8YErMKQPs7mc8xC5uo8vUES3F22Dqa9W8sYDaLu4ePTYX9rFEiKGBFmtKAcm9MuDKzRevJ3k8n4DAkRoxsb9j",
  "key1": "43saKQjVXAC9iVenu7R9g7pRLno5VSqo4zcj9topXfCfheiYjcfzT5QiFbDRBTdqWV7g6M8YAuTzgdnc3xr3iBHs",
  "key2": "TnJWHnvqxNDwQ2pNk26oFmGFsq3qRuBuZNY6TMJ8feNPooUH7kGgdMr6ApsNWbFaEQR2oaTYh32pMaQ3brZzQB4",
  "key3": "Cge1nQ1LL77B7ioFj4SsvdrwJueQYVpsjV7f2sqWvCNSb3x3THC27pUhXhxuvrYj7RWLHN2jAUCRAz6dBbqepSd",
  "key4": "5WMj8AA4hFYSfoawhckwKyvgYFZvZ51kdNsC24BLzf647ZRhY2Xbf4yFXkb5dWNYUJg1sSrBugJWCroEX6SgbkJ2",
  "key5": "2FMFezK2GeA5mdw23tqZTE6Wr51i399rNx9RZKrp9ktYNTRGtZprGeB7J6HhM5k9HJYrDz74pw9LCkT4U4Xd5Ees",
  "key6": "5H1zLSX8NjLkAg3UQxeW3fiivYDL2tVhrR5Erff5YdbAediJ1ns6Me6tkxbjm1r7dn21vDXU8fCrnbt8cfq2voR2",
  "key7": "3jrvr9bWTHP6s3H3U4hd7vAebmJQeSYPFvz7XEUSwKhfKBAGbTvEn5DooDtd5G3BY6BqfuFVacFQPZPLF4aqKnAG",
  "key8": "5ZRywAx1392hfkknDA4buWagbdkdeMyRdoyc4QbdCb8F6rYPGDpsmaMzvbqMjFFX7AiTYMxRrY4iRq698X6TpBne",
  "key9": "5Ga9oiZPHjbn8HBAH9s7u8GqwXg3ih9ZpWJ46fmNUV42vh4FUv4nBBiCko5mfa1tvaCPhLUik3a5c79dksGNyJGw",
  "key10": "2a7tWskTzNAj7LkrXdA6MX6nsQWRTfxAboytjeWwCRpbH3GVREFaCfy8edKUAAuW1udYPfEjm8zBwnVe6QWbiXt7",
  "key11": "rzBNwGHNBcxHcK8cYjSGkwJstSr8bokeRB3abV7WqzEf4rvvYUFZS3MAD73huAAGWyegvYTNy14kN2ZhKR31scm",
  "key12": "2hqGo3Bsp29G9xcJocKeN9MGWdWhjDhP1QogBGQgPibZ6VS7TeA5XvUQYiFgPjQ1DiNT6k17WSDqVXGs2dqPxUyB",
  "key13": "4JA9F2UcFSCifbm2rhhchPykV5vXuKX6pJ59wnsV1L71Kqh8esVk8kAQTAC43JffhcWw922q7wp1XUceQNEcSBr",
  "key14": "367MhtNmojoHg6BcUd2WZEBwyiKLq7Wp9zEvNbMWkKm6GSxFTWotohpNCbDwjcpYeHyZ1wkYKmNcTrVPoyZrZ4QJ",
  "key15": "3mt6n8qMe7qnpoLHPJ4p6H7xvSYBerkryr85uJAhp9Mv8QbGG9BNrwUixvTasoetYdKymB3LEt1Q1drXqE1vKE3u",
  "key16": "3acJXQrxpgCK8U3yUhVuD8FCWixNAxrzcoAUxMTHr5amg1B6TArPJ1SxdbwYTfPmDAZFu6fTM9RVwCeyFcxYsL7n",
  "key17": "2R2LBabUYjafqABuiHR9yMDLXxw1CatE9x5c96QSXgcHdEdtVBye7bMckF7FaE4e7zV3VXME9kELqsHFMf62tEiZ",
  "key18": "6Vb5oSS7t2jYZStaggK1SVrQ1Y1UeABDSStUAESoYsGxJ34fRuzybgTDWuWhtAC1hc7hX3p2KP3NVaVFdNGtjte",
  "key19": "4kNfB16q2J8NySBVALs25w8i8bhixborqfEG1YufMqCAciSBAcyHggDC2jR8BGm36rWgTQJyEf8MekfSsBmJ9H1J",
  "key20": "SPYBdtMbvx6ezKz3ffVKDgW9SZLyEmCF5FeEVGueQ9FSbGoE4pzVK74988GAcoERhFqj1hNePGqQPitvhMc5prU",
  "key21": "3kxPvcjnXp8qNe67Rkxtf4soKx7FsLoHC5NbyRDCNhWm4CLU6d9bni4D3o4CrAWUbotd6PkwCAhDLX8FkAcU7Rs6",
  "key22": "2EbPbGSxPwgwaNZbyztP7sUstDDvLAkb7Kqkx4hrEbTrpW1n6qiW4zu3wEVBfJ7otUuwdrAj4Aorv1CCzq4hqcGh",
  "key23": "578WB2L5ix6CG6Ya4SehptiJLbyzYjS2azAB9S84KJVBo2jeet9BeM4cf6zmdXDKr7tM41r4LHZxMDrDUgWynu91",
  "key24": "2jp9hXvJrXGoKNkfSfVvAEtBmBBCqVrzKXgghJRjLpqGJ97JyKsmiiVWmtroRCgNGio563xWqQ9gUmHHkhbndcQY",
  "key25": "NXAby4PpAp2emyaaFsRPTi3WgK1SXNaYVEj1BDXxjG8rj9c8vjprF9QPZxFZ7eSJ53hprjDRaRxe19vFsgbwZwG",
  "key26": "3fSd6NAzwkchTrpxrgGP6kwJDiaTeE8AhQC5sk9gqXcD31iYyRcLjKbdaVC3A3ciA8w17t5pSbQL8XPD6hv7Prsg",
  "key27": "3yyfLucZV4PCahq91ouR7k2PJjeV31evXaMjUvsFsyMcKSuP7fvPtG8w9ThzBkABZjxVAF75yy2esA7nD4NAsa2g",
  "key28": "4X2vvu53CXDFehMya3g4v8GjgDNNfEJWHdBxuS9YgY3DnNUuGBxCXhq4SGU6f59F1UNvdKqA5gdgDh2XS7yHxX5o",
  "key29": "3hmrsDsEeu9x4CTRLND4LSkj5qoZGwwNxRhq1PDgBx7QCVZBpoo2EmDFLnJ3sLipG5jUDCxMHxHWadD9g5R8z3NL",
  "key30": "5JoTzS4mu4qQXCt1qKVuS9rpoMdx6Na7T1gur3QdZGYGtSwjxjLWf2K7j5NX6TZzGi2eXkuEJrfsWZoVSEQ4ixV"
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
