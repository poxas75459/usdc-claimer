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
    "2jRR2MfV8xz3ihcxeKe5Ywz3TEBt2Mei4sngFQ1GAYw2bLz4rJxDat6Cw4GX5rWfrW39mBDn5aeGuVkT95s6Z3a2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58LTdrpBaxV6HFnxA9EDmvpir3GGaknv7krxd7zzamHziTyZHYGfLaSBgw7vUppKtnvdurx4diRAh5Mu8SFPYFAn",
  "key1": "4ywQ6RSaMkbYjyc2aXWHCPLmCJ6tJHxVuBBYF57JpWnqtEy4eSKapeoZs68Ns9MhPTd9QqVs8pVng11dVeM6cB8V",
  "key2": "41z5ifmep33gVfhrGSgmLTP838CHUL5Zf4tkoT9C5tJ6msUa8YsrPXY2WDrDUVyskvPeKDU4iQ15VhuyasqvgG62",
  "key3": "42umsN9BFHhsJJdkGmLm4ayuL9FHRpTZpBJnwqBdnHpDayR5gyji79HQN4TL94vD285Bgc6xmTgG6Zds2F448NiH",
  "key4": "5B3BgKkBii4iWZcCnRNSVtK1TaA26owz8arA1mEMDvgYLZBE8XKB4xfZZ7M6d8uJp55LAgajsCes1JLMsehwteng",
  "key5": "2BDZs1ge42d5AKHi96orAmqbcaL9WZzDdFfNWxV4xitAWhZJHKWwff9dano8qAdXXp54pa3sPAbGULvu6A1DZj9U",
  "key6": "RikyDr54H5S2yYdWeWPkJXWFhQqKgEtynP7Veug89PkVSoxGNPkTsFywEGd9Zerc3BaVGYy2FJYRphqFHY3friV",
  "key7": "2PAwttXwK5FYMKF1y7i9tTpUMoVx4kMMD2JRBeKvzDa6c5mqVmDskNqHh8c8EBdzAZ3LESeKtTsX3MX1T7AE3uLC",
  "key8": "3HcRg1VfTPQ3tTLobFd2GjkqKNCBVe9gzWrNPiLeRXj5U6aZQ3Bgey269CywfLiUTuC5T9iWqq1DbTaPcb9bdC5B",
  "key9": "QaqEJewAkhTSLFUq4pNFPyEpfYbt8eLm27AnismiojDN5RkyGvmCsQybGngez18qdoHiRAiFNLsV4k8dzgWZQsr",
  "key10": "GqmuvLknAQ5fXr2xxe8TdYtyvQA3HotiYCgLMroN4n3kUtAsJwQtc7Yd7HzQehPYRNr3o7RCJCMNFvLN48of7qa",
  "key11": "4hXdH9oBgTxUdhJxrGj3koRCii4uoc1bJ68XhF3zyuzGcmnrUp8WGLwr9auWNymra7HLpRFDvUJ7zVrX9k4GhUFH",
  "key12": "225P6i9yFzmHc2tFBnHZbizWA4tk7f8GCSvHFSHZDY8mPFkQnLXxKD6CwsbSs2La5o5rGrRgifTSQ5zgsFdx7MQs",
  "key13": "5Nm86EmTxuov7Rpryoi6HLEEHx1BFaTQ2k1NhkRcyAXMtuijoPEZ4okfiDnS569Qg1WAha6MyKhKrXS988PwpERf",
  "key14": "2tLRKpzYtmSVCpFqjBFW9RtG4HLBtqYD9YgLWJ2AhaHbufBgQoySNDyzeP6vJAxUmYw7WQTKDZLHstihuy1c4K1d",
  "key15": "3jjoUe7au7HceMQU5x8QH7VJewaRoVaBRJBXd8EgRuSUMnpvc5oXBPSdv4cbTtnuMTsEXEXYq6eRngfoUaKk9zJM",
  "key16": "PLGGGw7XYCRDTqRwDeuWcHHecbaA1A9LGVJ1EQ6MgDb6zh4YzSzFFyXvcAwnQxWEGT1dyMjNqiaAWwixDnHAaLg",
  "key17": "gn8F6fVGJtNCKTgs2v2XyFAUhSVbHuBM4BDCj7d4VKxC52kfQS8zZ9pRjH1zJHkRMU9AccgdTX6AfNz5yr33zSg",
  "key18": "2Sb1GZTNfxUSXxwRfUp1YmrM7KV72iXE9cDqpaBnejfrjcRrWvBWBM2HqVFjrwuPZiG5uE4NLr7gx3hYwf39x5We",
  "key19": "cQhZrKozteSR5UZjSEBwgmH3ipaxU4294CNZ8FQRDk2k4mY78NVoBCBUkTVYZgVxC3xdoA5XpVJaZeNJWcPaWsB",
  "key20": "66Li48V8rLkPWCeMCSH6bcNRz22GTBtU3jubdutAopFXAhj6CjxY7dTmkNvzjgseHEemmvqNp8T23Cs1LvDvxT9J",
  "key21": "5JUP9TXJK2AGpDETaaDuTwfZTCeprLhh4jQaZFuFCHjyrwBGN3ururaiRHr9jDHKiWkbGDfwF7iuzCiyYh29FJzU",
  "key22": "4ZEbFTGa9V8Y4EPwpUk3heRMw3VHB4oNwGVKJbRUDBoKMqGroNcEY5HprfGGDdg1Nhj39KJtKLnTAM5a5REjUgRt",
  "key23": "2yhyWLQnRgvpdXzvznfHy26mY5kyaTBQVM2vPJQSHofS1kxfhjcXi4qBfHaZ1xBC2FwgCxEaF5nAHqHb8pUao8aU",
  "key24": "4Zyz2Fo8AMv1dFn7GowH9wScdTGM7k659YvGhGBxgbnFLxKKd3NmdzfhsWYcrztQeDLC72b1oVFEGm25adpsoKxh",
  "key25": "55V394kJZVC4W5kJZdHAsq6xNZnokhRVPqi5WHhDuEpsefsmmiedDL5YLGFi3xv1a3dptcneZgBt2vkumHtBCLAZ",
  "key26": "4USZUDd7qVYu5jLiZw8kkeGjxFYmfyqKRZX9yfG9VUFqob4MLRijm79SRKRNUj6x4h7GqGBZNJG6XueWqApHBZbu",
  "key27": "4gV3MEWNm7DYTBHcTBjkqp42KBmyZWgg43VUTuCs3QPsgAYJWkeFVSvoSVuzEqneX1Y3hQnmj8FZsArMi3buMcrS"
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
