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
    "35Euu5299GJAa6iMGhqkoFdKFvuTuTzZnMVrNwffWx325Z9bogRUgPhMVs2xkvHiCnYYUD1nXFZ4rNge39eKSpar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCckKbebDZ2YwX3jJV1bum59FmVEbKmbEyaxWVw7vrR1S43RoAuzuY7fcEpytEMe3tJ3GkD6MFASipJzJN1tbZr",
  "key1": "3QR2Rhc2pJEozpyKAQ1T3JszMhQPkFRHrc28HkdV6JYwHUSzEtimzLCnJC7quMCq1KxDDenzmojreBsuQvLouNie",
  "key2": "2CnhamkaFg3PcGhHQKGDuX6zwaTh9iB4PCuFizPERzXuNwRYuXzW6yp5tPKWQGtCxmpQcAZfcAdMs5KcRpV7CBbW",
  "key3": "2ShHW2kDHK2az1QrpPu6FSMY9xoqjfu52WyJenaigRT58yxhwghnRjnd5NcQnJu7wFt3iHVeFNdGkUXoSsuKLEWi",
  "key4": "2o8WKD9xkwig1NG53hVr5yYyMrTSNMVKn3gHiTTH3ScwdUvpbsbaeybrsqRGxa95o7zZgSZU7gWXWGqX4zsUVFRL",
  "key5": "4PZWoXS9FWvbYpPvQFrREi5B6oMGcpD3tYRPhP2uroGuB6dapQptfTgYMsGg7bk3xm4CBHREKFe7df7C3RdWB54Y",
  "key6": "2b2aCLAB5Wfn1EnTJhsmCe6hKTfByzGYndeXBpDcDG6eqYQ3EWBafQgeDAojGn9u9sCyVUpMkmLfS1nUgGJQPnzZ",
  "key7": "26wmtJhu8NvHB13X5E9ZVqUpNF2YZXQX8shaT54juJeB8CX1rAQDm4j5GpXJscaZiNHJ8V752ia2oB3ReYDvxbPC",
  "key8": "4URTMUS1LpW99JNgk6HZvDr5rW8FW7nU9LPF12LBhYuA2HAxEMgfXc6Nidz7WLiDkCeUph2KwDMNRMpsZPmfYW3a",
  "key9": "29384EkgXfwJNrdfjx1PdjLMXAfJbQGT5pZgD3Ub2AhJgWTSU4ZTKmVkqL6M2eDZpau5Qui5biYohbfk9Hdyq7HR",
  "key10": "3FUyEhAFckRay1gtQmTRJertUv7RozRu9hUjjnuFtEFGCpnFkt25EXBUPUfggCCGLAum4jXbnenP5jHxe9A1Hrgs",
  "key11": "24WHZFC7otBQxvUEqpaRvyRfVNyE5gvR2dKrXxr6SqxQy4vHnU2WmHXQRpLUWf5uJAc39c1vo2zwH6nncYr4DXXK",
  "key12": "4vd4j3EXY2aXXsHLyuaLMWNsP4gzKkdaGBsG3C1hJSLfCZSiHoob2nQoGMV7ow9YK5tPPufFm7Cy6ddxsgWkBuJp",
  "key13": "3Vm2Njb5PK6kj5h2kZYHdpw1P5L69Vy69KcBFfM9ntgNEJcQtoihZuEAKBB4oA8FdwgfzLmXjbUwvsC7QMUxMWaX",
  "key14": "3F2QbT3q8v4bB2414AExEHeZWaHYU5ZWG3WN88wuNaSELvfn2pvexc3B2LcycQBrdgW3QmTmvFQ58ew9qUZbnCvp",
  "key15": "2G9TTTZ7bRhNMwHZt6dfMCcqy78iAAzTj9MaFHvCJr8vEKUpWK8kmXefAhHY9GjkCDRSu75GiWiDB6SCKDJN6rdi",
  "key16": "5WyxqQ3UYmtUGkDeXuv7ycMUDsER3xpKFyZ2y7KsnQ89kNnNrtNStYBGUJqLneYmw6LmVhnWcDnBM8orgRtgQTLb",
  "key17": "ymN95s1WuL7E4yS6UdziaHZNm6Dw3Dkm8H1oEHHPVSa6QH9SJTUnb1LYPibsT3gmSfzPFPXkxhdPK1uBb7eRUNa",
  "key18": "5TjzyyPYDZofoeB1Zm3oRJ5y6ukDbz6atvAvFv8FKRts9t3UPYNbDfGJYX97gtN9B5c389rJdgie4f865K5K8HeZ",
  "key19": "2QQpunmVeSfET9AAmkvzcSyw6g2pUpgMdPUVdtbwgNebPmfz6jPvU3qCEk6K8vJzEuEpYPB3MC9HY1YZxmgyQLpU",
  "key20": "62ZPVH25GezoW9SRAnRPwfrd1g1EChzEUANCtw3jeSWrJV7EWJW47f4U1FismKmUEdTSj8vF29vPoCXmUdHTb5qE",
  "key21": "4Fhe3shRm134TJoncyE1wyzMxskimy3cY9d6A9uTX4VzKPEtsuA7nU7ozDXB6aH3QYdUG4QoAcSbf7KMfLjzVsz4",
  "key22": "FXPFZBw541TZmDxAMWkkqARMtWbjvXdecQf6jtfrqBttuuJRUsrvPNpmHHLVVFHLyzmmvbzKG2QE472DoPFWxMB",
  "key23": "2D4WxxYC5Fih17U5NPkUbPB1hA87T1VeGZAEGRHj7RBfaBq8Cwash2Scz2fdBgMfpTk32GCqBe6EAiCqWVTDc327",
  "key24": "43n76fiKibbV5iWmYYRLyPMqKuBYM7LAmCwsZkDzG2npwNCwYkXDdtkuvezzkZ6pczLCdDvsqA42Ddt99ZuLZgTS",
  "key25": "3V4SRhCmr2dbf8pZAQtV95bbAqZSvS6YNhrfFKeb9upb9umw8rpr6ENHPATZ2tEbzFc17kahpk1G4Mi1ydgBXv22",
  "key26": "5cyKnEYgjUkge4wbpEMpijivLoYCXyDHrEgshxBZnbXUtmh1UvEHXWcUQmJApTDeEx4DSysPzjy4RHDQn8Jg5y78",
  "key27": "5ePrv3eidzHdXnyiBFRaSg1Xq1AfDEHrXCMy4Zrp4wE9aBtqWhGHASgjwEP7ccdRmJBoiY4ZAb66S911ByrEmJGc",
  "key28": "2ZkAdnrej9xckavHCKYpMifxWWUrMuhvKzKmP2sRqhHAgJAgVbqiSq211ssiq4jSHiGZW9A4htcbFyq18xeBgVCt",
  "key29": "4Hp1qiDKooJuCi5eagHmD7U56caEajt6Ed4kC1gmi9GnoSvXGjth3x1FGGy2uiQykZosCcDjfZue1AiHrcer5ZFU",
  "key30": "4jGchvZeWVTUMbpx1r3bJrNAKfDgLNBtCFnRFSPk9AbF21uB61GVUKUXcXs7s8SSdRKuTmfuZESRKq1wuDrXiwZk",
  "key31": "5th9xZpXdV3QbH3tFfZMpx2DWJCPpvu4pq1vqFHrbZ8maTKJfMTmCpmN7Gg59JkQykbLRJAm87bctvo7uwx5e6J1",
  "key32": "tRuyVBxdyRfGbY2ejGjF5TCyWpammWT5Hpw1Fdwf4SrAZhLGsV7jLS7gAXyaSDF5JLXk5Pn9GkYnPfLxSTPnu6v"
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
