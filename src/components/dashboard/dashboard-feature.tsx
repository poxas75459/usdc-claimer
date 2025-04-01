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
    "5M51TGRcNm4ZX4Jb171ZZkFQbj1LvDLRvaX3SXTju7pMnPyQpidZVDAu4rJhCnV5KtPXFkaSaKFedZEH6kAVkgah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FeC9miWruGJiAAP362ZkzekMk3fE2ueaaP7HmycaJ6H2JJ4EHVmQ5ibE4Q99pnkBRTcaoV2mjbnV2ffGtuYqVDu",
  "key1": "2Q8TftXCrkYETPxFgFRiEGntJqzxK7j9W1hKdiXFTLaEgUZnTatkAWF2BhrtnjrVJe7K9UiuMx365FmeyDLJi76z",
  "key2": "47nyHSPCVzbKT1evPY1vE4ane5xYC5RC8Ly7JF5qD2qHsRuBjD6fLQLc8nS4CPkgvVG6sGmcZq7zNHCpCDJw1Zd6",
  "key3": "wdkYZVUHCmjHGw5ZE81u5jKudDeG9z7iSxRP892f5HCBa24mKoMax3Dn4wJ9susUxv2nbRphtjdZYkJCib4tUeN",
  "key4": "4Jy6FruiRpMaDhrrik6EaYMSvbksEFBZkuspqEzDvp73jJt5DadgBspGFMfwvcXQNPuKuqULFCimsPskCw32pUdQ",
  "key5": "4BjYZCUiEwhP23QVe8cen7apvkiQabVjBoY49Z6JFRPK3xowGv3JfVTdi9szBike6vrdUzaVsCCKtEDBCH9UBCib",
  "key6": "41vSebD8HpvAPSqKhZYxrqWfPCskEuVuQ411giUEhGeeg1JBBJeR5SWTqMKAHrawwtTTaGrcte8dyaJXkDyiNgHo",
  "key7": "5idWVP2GDaTrEWBntTzxCKLJwzKh3K9JngVecfB7Rc3b9qTTA72ZJbm8saALy8XjxKwE7UqH7bQfoPM6Az7GGiey",
  "key8": "2cwg1b23vYf3F59F9wnjfxEKnq6ke6BnwtH8GgN5h3uZYkiBeZ5yodmWzXoC8VTBh7GbsTDLipzRhymqZgkS4BuJ",
  "key9": "3Uy3hRREid5hk2aUJr5ysHaKRU96fm3APiYy69NxUncmKifJWs1NupHyzNxiHVqVu1zGjQQrrTj2f6F5vGrnfQG3",
  "key10": "5mU1SqnqddcsrLDPnxQZzq9Eb3hUo78rnHGNDbW8HnFaBX8GuY2nBYuZA5jW6DdrK7mdDCJegB3rN8kxK8MGt35Q",
  "key11": "4hd86RJpMeTZoLWrCEBJyrw6oo7oPqSQrSpmwSRCjaj5eTX42NDMWYKcfngoJZzNzUvDpz5FeQpgdLATWyS4Q91k",
  "key12": "4WqdcsqTr7szsRKWTCpNeXJDAQvrwhLkjMP8v2forNbhrCA13xSsYWtvb4rJvfMsyabpyUa5nYBEjNGMnTj52YAC",
  "key13": "2R6AJXkZ3em4nRuH6FzaDwam8Li8PeroQ8EvJT8gL99MXrk3Y7Mk37v48HCWjA8h2nTxpxM4XUkomKycrkTCAsv4",
  "key14": "5VN6rih1k9J1DtjECA3inCbxtaSqBaqVyB3XdJKUR7S8xoLjtutt9sAjuTtZCrUP3gZ1Qiy1SeLyezdwwc6NaEm4",
  "key15": "42H3kJQLm8yGmTUFugNCEDF32YBuPURDB6GJJJidon2csHvzTEjJ2P1USwHPdAzxDsxyo2XmyEBHXXKAvCykxD2z",
  "key16": "5hNgabKtdPrkZM5zi5RxDEqBxY53aDTJnAxPdoowJ5d8hdC2mZC7woWPVXDtXMoitM3H6QKsScFkiDkmExr5Kqzr",
  "key17": "2Gmh8JpiNMy2zTdfg5wsYmPUCw9aqmbxieYMNiyxauHAyZu5NTBnxWkgQSYm1RK48eCRWoQJr5TT19J8dzvby9ew",
  "key18": "5nbDcGnadhPK6D2vsXCQHSKgt7ByGcs7NxdhwirsvSwarcrEFdscMfiYwEUq9ozvkKYBgdcnCpm1tLCF2zhaGRA5",
  "key19": "CkKyL1Rhx7qhhdprVKrCq4Q9s4Tnx7MBn5ULhyetCSH4HGvNjWgj3bbNnLJrQFDiFonZRpVnuPFTEPNHdL13Ai3",
  "key20": "5s8U5YFufdrtgwvoSS2JCj7M9LG4GJ7CTfs4ZDtXdRUhQY99aHC4RiynvmaiHSdKNLg2EJ5u3V7L32rvSiATFPsn",
  "key21": "VoXa4xabZSKo3h5MyJzcMuCTcvZcp5oGR2mXrRJX2dkaWtxWgYp3QJaGrQaTegkSPagAzyjsNBMk83GLU97zoXD",
  "key22": "5EFSXFMMesyRBDo7NeP1k7XbcXo8PS8nTcBBuWMGpgb1XKrcU1BHNnhoAEikayZ5NhmK62Ytn7Zq9QPxqmXWw5PW",
  "key23": "5cZsoCZvz46g5WgZreVaRXt8KVkH8X2ffp62pr3S6mBiy28Y7SYC9JUDKZbRa79zqHuTiqJvjHTjjeMjPr6vGFpG",
  "key24": "4bCAjEA2skNPgYmDs4Dyd9bGTaEFHy5xknjFEtkEX1Ak17AzTw5Xsndi8i5Nx7jksuwpJFDyewgNEbnyUrFEkoEs",
  "key25": "2bpthPEZAm6wFqUtxgWy2bukbWtq3huASJr9fiPYvdideighzo5Ff8GoTFKTxdyde5NuvAwuzQe8BfWmn5UjduY",
  "key26": "2UgZNGa9SrtEJ1xbhYiXMSTDtQdNQ8eH91ze1tCvJYBjXT5gxpqGUrmboxuisma5kH4dnFiWn93PfMdB2yTVBKBv",
  "key27": "2VunYTHVGFDdsdGUkWBYa26Qzwsk4dsjLEDrgRxYvKyvbV1ZHadMc4ro4eutjnyFtw9h7J26j3dLvQm1VYgZHVMz",
  "key28": "3MuW52MuuN6TLRo2r5djz3jqqry2hkHVkKf5FB47k4VYPs3CtdZeDwdCMbbpj6LFCJmjEk2xfZW4DJ7p9zY9RBUV",
  "key29": "NJNTv4EnE9X2xrzJKmkBvPCdvumfbf4XKqyzqsiga8zSdVyhrS3WgnzQ9pHh4MZ7gm8me7QwDS8QHHu3FW73GUU",
  "key30": "1vqzjrc6MPxKs3SUMPpLvdQQoBXeqcBVkAxPNc5mCcEDfd8To9of8swHqyh1nZPqPrnCFsaSj5JvSyL6UWDEYyv",
  "key31": "5CZYHop3BiAmoiFn2fRNrNrzPEDQjxUK1DQxhd9mHsw8eWZSoHKmardFbt28xvEBciuqTdFfFMa43nv8WsvEJjp3",
  "key32": "4RZkRvhjAnpSgpuyQFKkEu6qzxxdwdSmKTis9bjEBg5suNUGhJGex9KsGEVXc4jq21ocHt3xSQG6u3kyEs9kNdaV"
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
