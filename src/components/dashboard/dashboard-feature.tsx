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
    "3S89PRWmsydKey1RCN8tWSHWZWg7TSTynrSmZRiYxJ2bSai4m5ZYDFBjgmsVouA5J2eFy5moG6xMy8KNtopd531E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DRVQgEfStkiFpJ5SoAg9dvChH2VSYFP6ccizrAXfAMvjKyrMb4AdRXBDq47VKaJACpaoWAZzZHycpJNjWa5LWCk",
  "key1": "4kbbPuda6KvjytuRy9uqsgzg3EGxoiKPUz4eus7XeKFS4x1Y3dsxBrspzP5LAyYmZFnSLnrA2e29VqrqJiNiq7Uh",
  "key2": "35dCwofURJyzbPzgVeySdJRCYCg1gizjXM4Mvt4qWnSbpvmmW2gGZaGc2KrvtUTGJkVwe6UZHTv2ZtzSRSbCcDkw",
  "key3": "2JJGkcj5vHQZXxMNdZDLTCSsoM2Z9E8xWQB1SRz5b8AjPzkfHvFnKdZiudZr5AwGaTK4xJUU4xnpi85XCvVXXv2g",
  "key4": "2CCAexuzXSRT21o9UU4WrfDo4Pi3i2c4nhDUs6YJD6pE9kvcC8aXkvfpUAG6Zydvg9cRYFmTHxnThRc4VSeYH2a1",
  "key5": "4LvU5n7v2KQPraAQn1JVoBuPVEgNBJPhzc8HVN2Zpmp4P5EMscKoxbuZe8MdsSVrytjecc3U5B72Ue9NxxDoECRn",
  "key6": "2MmFG7eawLK8LYTEVpsbpm6iBCoDeRE97aWdiwTrPMTff8ZHMuehbThuvffzexg7ubd5jGgD4PT7YeZPWsMM8sqC",
  "key7": "33h9WqiVMAUMByLyEfpfgeumnRwdXzHv5ZRmwyLeSGGabeuXghCiE58RkVYzScsSQtztuPZdnEvxSKifGBA5yMKp",
  "key8": "2bKuDGRJG4F72nLKwHeyXpYAgqbTLBALKjRwWDZ7Pi1jvRVKd4P3NnQtz9WJsKH7H5FnmVSXmNLvViZprRJM1jN5",
  "key9": "EZrp98uWVXw9HSfZEwYum2m8e88EB3qWTdAPfyfG9La996xLgKVJhqmCPd45oPMn81P8XJAkGZoXZdzboC7ng3g",
  "key10": "5KhZpRfGwaFLC1HjdZTWKbmYFnGsKVah6D3LqoQZj72eCUTcWZFFVRKhgSCsYd3U4XJRsx6Tb5XbWYoS1T3tAz2a",
  "key11": "Yaw6QzGNbQKeu3jRtqrgTM4J3vVPwUHHUQXjkkxoQX7LjSgZLoqQeKiwhSbYgLwddLL1U62wLY8ie3qxWXUiwYh",
  "key12": "5uSeJBTDAdKDVqAGscKRqLNb7NZWw8ZxXtS1hXfjFVsZCf9YCN4oo91M38U6WCYxKzHh7dhVpHmXhnkR39SPgMUR",
  "key13": "4HAyk7Ger7s8poqFzaq4hQ3pF7qR1nAxERVQgCryWS2DZDGsq13Jh7nWpYecDrV5pC2ZdmXVUyZ1oi1XJecmGQNb",
  "key14": "3r9oBFN3mQ5CArkcZJry2Csi6rtrwQbaBQDVQhQ1q5YtJmsMexEdJ2tEdLikxnQJNizwZzt7mV4mPviqBYDADBtX",
  "key15": "321J74id5GpvxReUnJW5AjvSPntVdF5reFb2vXZ1Pcsaouo6N56tvNZ2YVkhSMHfan7MQkCbouJjYQ26oAodVRKY",
  "key16": "4jkiZh6kHjPwNfKxqaUhqg6V3FFa9nNBBvzSc6PTBDR8gcQKSp76A9pM2hTbwFzLXWpqY5r9u9dXS8PagTrZ6K1o",
  "key17": "f6NSRvcux8S9Qjc92L9Bf2gXK3UZjo1dYBqDY11vpaVYNrjeyEoUqnZuY1dSb6JCYRtDyyJCHfYbsAznz4H6qH6",
  "key18": "vfz35mLRcJ47QXMJbRAr5uk3WhUmkncr7AUeEZZ15biH31RcTdCaHgZRjEr6eTLqweoYRCS4bM4wkrhdsYd6k9d",
  "key19": "3MdFzGiHbTaKfzh4qrcUfNB95BqXgy3YEQX7CfNyCDywXMY1xL9LBTBHQBSovVTGuGiqsDAUhndAowvLUGgxiLv4",
  "key20": "2bEHwdmDEwQvUwNFtMvr2dEbApEPXwsrhuURWi3UVDxUDadz6qMXVACCAQAwAXwyUFjF5zWsZLC8t8DGffZQ21CT",
  "key21": "3PcqmQNfZKjjrC7BXMaSuTCkZSpC9cbBS2cWDSqjtiNf9V8P5tZQW6QAmk2BqVQy8KWUZHwVjAx3dL47YJr4abw1",
  "key22": "58sr7M8o3mApWyTYL39pubXRRH4L9xmPNEYLdgmjdj4kSW4xhaGQb7BgE5vYjYBf9fZyVdchyp9e9D8gCtN6Ks1b",
  "key23": "2rFSESf8V8qBnmUpTRLoTx4p9K1H4Mg2NxD1sEqGj7TjFhaCwKKUFXLmaNVT8kbZyqGqrWT4rRrS5oR2x2hkePoH",
  "key24": "3g7SKTbpPaa3Lri53AKfPmn8L4Mwv7tktPgZMNVEMGrq5cfAkQRRd7J5z1KCtuT2jKFXxkPntyD8gt8KFsFLfhbK",
  "key25": "64VJTNRkQ25xas1BJ1JT3t4A5HXpnTznLzDe8kLwseAYYrbTWmCR2mEMH1H14ELhN8jnZv4jzy3eVcXnDETRTxqt",
  "key26": "5HzGeQBTisKUcezD3TvrYGHWV2nnc8aaLpftivV9V5F9cN8QpNDqCeEWMtixYYsQK9m1VtD2vxBEjkZqbCnUptqF",
  "key27": "62UWqmTma9cHUGV8VCcThJ9ioYH9ELgypR2Ae3okukdavwYAJYYJNK9kDh4wqyqdQXdwM99giwM5MCwZUzvy2aXf",
  "key28": "3N6SC9Cg4Ktg25fTskVySytrPW9yN1KSdXhijHrnWaAHd7BE9b2dQq78cGY58Cno9VsgGe3fugLWswqtTgeW9SBq",
  "key29": "VrWKcN5tWocdmDo3rRzh2DYxLHVxBg9vsDo5pJzw7RZ23MjiQGPEHUD3EeeibLygamGoUSB8EU38RcMiEZmFRj1"
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
