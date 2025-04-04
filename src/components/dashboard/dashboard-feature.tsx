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
    "51RwVxgT3FuqqRE2MvyqQnjNibqqLN2D2v7ALg6Z7WdqoaqtiLZedYyjFwHMQ1LdbRBNQor6MbbvXp4JWLyx94jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29aEAgz4hHfxp6Rj83rGdwaKmTkmY7bLBj3PpnHB5ytYvwu8iFge4fFGi7Ztc7A3zEJyCtviuCWRgC2JocEaFPH2",
  "key1": "4PNZmEGN6K4Gk2w5hLhSbqFwDqfLMGt6sSfaH3Bk8C8bXr83GvRN9ghxp1mo4kG6kgi1TNz9b7fTokNVfp264KuS",
  "key2": "mMah62Bo1t1RmhLtT5Uy5ZxVryTtGYUPAnL4EmDdTvbWbyV6LWXprEEfGAg1yJMHE62oGum5xYXL5UbD3ycVsuc",
  "key3": "4MvksfJTmf2ki3f95NmDV9Gun6TaSBpaw3begp9kRrTNu9dAZszDJ9Md1wAyX456Hg74t4EcNECJWhzZxiiFpYJJ",
  "key4": "2bee76fXfL6rzrcATCobyhaezE4m2kxwTwH6qFbjhZfwJBys2kTbZQ3uDmYwQN2aWY3k4WnbCtEgpZcbQxe9WF2b",
  "key5": "4nZ8Q7Zwo5VmeRP5VdR2RzUjWWbgbL5F3v7AyCSw6XyKAsEMFwrjci47hsLD8u2FEjp5XLKZqW34Fx4my1h6HveY",
  "key6": "uWGnBSqEr1pCkJ5oMEwBJQ5jP3r9283UNF4UcQLBjgmub47cwMwH13q3yNCYhCj8y4hKoweNBK8DGnC4GY2n5DZ",
  "key7": "3uk7NPB437jriAzaRyX1eeZm5gjKCceFoPmjv1GCR2ptzW42CHK82SiXGjYnQgXqgEuA9aa2pE4xuC7JC59jau7f",
  "key8": "5eLCVXjhtxGQnZAxMFpVJ48oDzSyHjumcnyNCHx6dxecCafRDtBnDgQ2W7JkTa2hy6rgu2PCHyKASkC4dEtCrQJG",
  "key9": "2ZADq6ndHRwiwTqTk17PwsFzdXqzZsn6bFSwtk4DNSchb37EXuNc8ojk9HtDR4v1yWtP1tZkKVzgX6F6NE4BBYxs",
  "key10": "33rFbSCLatUxrAkcN1jX8yNDLCM1LGvkFh7tbgcJf4DFdArjRhpb48rsGAxRdm7mwAKBaYQxEpEFpqqDTagCbrp8",
  "key11": "4bL3hiSfPoYFWu5zQcTRwzX3uZ8R3Lnap97hC7kWeE5tudzLgX88P4dSKbYekphwpVLbi81Hbi1qgWskAXT7HB4G",
  "key12": "3zmav64EUYsyQSg28zmqsEr1oHULz29gG9Rqj8viYNdZctsx2qVPo1RJNMxaaBNx6SS8iyD8rxXj14gEU9vz2XxZ",
  "key13": "QfCLwGffcELdv1dwVBSsge9HsB3ZJkzM13yLCTdUAj83JvBUCp4RPoUNNJ1Scah71wErquXCH5wGHKsP6UgRPmV",
  "key14": "4XnT74nuSdMMziPoBJGDyGiAASgCFt65dBKQSsgXKnuPfDfUqQmrXckG2jNtDPMYwv9RY4jBcBduJw7iGjcn7qmT",
  "key15": "4QnFTiAWqrzH4Wp8BCTjf5xywAWfq1PsWoFQhb18ApKGQcrV1je9U5xZGnWuDzP6izZat3Wwi1r99CZXS6qKFaAD",
  "key16": "tpQr56ZrdwCzrchD8XPDbzm3nGvpCezUDrsjPqJWhuLmtiSGbJNyxT5hZp9JaHmavoV8tatLMCCMAhfmBMzuLvH",
  "key17": "3F5j4NDVwkYagAGvfWfwaEGUj3gXNfUTBm3km5kYrS63EyPdVgNNcMbDoD6CBv6xv2Y1Tsts1XPdQfCA3iyrFuiR",
  "key18": "6GjqyGwoAHfquc1DonThx4mABnLYWYAML4JGRfJjrZXdoF9BbT4LoxRFiRwUx4WKrtQhpucYSv2LuUX3Yrd9a2g",
  "key19": "3Hc4ALh6t46E6Q5BYbGW6YoXrXgiCKRgDgk7XtS2jn4faNiCt6Ud4uFq21xywG2ZsxkG1GG4dtXLmN8fQywXsn3t",
  "key20": "dH5A9gQrCdLbM2yGLs2WNsGkFosKBmwcDEXnFAjdqP3276DrrFRADYD99TcPK9rABWdTJhZAth2u28eGGR1n5Fm",
  "key21": "5eTJ6ygmB1gcR3HN74pACtXGwgDn1ujkTeqrSWZAnmXm62EMRdQw2gvMM2QSgqYeaiKsRGf1pQGh5G2f7Erq5bkJ",
  "key22": "5smKxJM7PRSiucLEyeLQUkmzExuyxjuBCL1PpTycpRHj87droXHXLHLTBh5L49Uajmkw5E2c1P61GtsH54bjoTxn",
  "key23": "obVqbvAvnQmj9zNfXKpezHL1EmVagQ31jK6YFim66vFfcC87cuDZ8atnbz5pH2LWC4zgoHgfg9dUvJrv5autA3H",
  "key24": "4hXMEM1CjJYupXAwouFUvG3yGpAzsv6pdwdQViLbX1AVijf8SVp9N4DEb5nwphZ7z3kPh6MFQcfyCko2tr4AVnuw",
  "key25": "3FVN56dWzjY8KY7xmpM4HLqYA6n7Ws2iBrpycHCHHovUL9jRVXGYKCTCfqMHPkkGYtvCv6HLKVR7EdSXafktvLhi",
  "key26": "5JKtcofkAhHtuT5chozeGkr56yhTEv1maViBuBtsongHaomichamaMDDRo1R9tmMNeaRCzSDCPv9ML4BjF6VA85w",
  "key27": "Wthy4wu5C4GiLaqrVHgk58D62FEqb7HDU3wrKozPCVgVbAE5jyG5jW2mwQBneWkarX8QuHC173a1mgWuiuGmyao",
  "key28": "22oQawZZA7ZJZ88g1g1mXxnxMZAwArDijjZHKSdZVAXN4VBLpzPiwxQH5xb4vanmFsdgv5EyyEUBkqPKFEKbBSxR",
  "key29": "ZtJEoH5JmkHFNZLhPnz6SRcJKoE71EETFVZSc6of7jc6qEDmPQ1Ngku1HR1Xcn4yJefMmLZq7NeufYsgZJxdTa7",
  "key30": "3aJjuDPHHEA4sxKT4EjP1rcBtW4fftVeUaFqXVpgt23B99isGJsZQHpmw8oV9peaA5TivLY1ioR7znNX76kUJrjK",
  "key31": "3jVu7mZvqdaFTPkmoTsKFMyToF382Pwd5Q5AboWQkQpGqZ3NVUFokwmqe8Hboe6cvoREgryj6atZmyE2VJ3kpihs",
  "key32": "5XkmBsPqp6uCHjDJugSGgWKPrRojrrVqLGwSkgaP4N6Gdawarvz5nwGVRLgkinsAx3CDK1JpJkCPywDwzHo9ksEM",
  "key33": "FaLpJRpAu16TpZWdfXQb8NZehHqwsm1PYNCP2BPro1Li5Qb8pGew2QP9VdhFVHFGHxfprjGPBhfXv4unFL5pXTw",
  "key34": "4vJRy1A9qBZHaw64HVCUDyZ1hKbqNDL3AEjD6yewoLXBjr7i1jRytmqDqnkJdiQX8u9w3jbhNKGvo6bAJ4rTgFUA",
  "key35": "376Br4Ga6MrsprdNVrte53esqda93ckQNM1g7pmJKA4D8fjLsDsEHT596wFqcv8o3cJk7v7capzjvcVFXqh9Gjk6",
  "key36": "KnvHNH1jsip8baY3ErpgHyM5qveTjeXbi5G7B1LfHi7kKW2wdhuBfM2A9uxEtHLkjhywgbaAj6PfALzZ7RovVzK",
  "key37": "UJcKR5zHN7uXb6V5UC552HK2EwWNPWtnVamq9DFdmMgddeq1reFAB5W84dg1oMXxqTMhvyNcUNgbGKggspkcjLW",
  "key38": "2CNmAQhesamQrtJnZJgDHt5DZqP3JRwJmiDCjWAax2uxpo3gqwsP9g37CY1T9Pwx9eu5BeA3fsQnTKznukDqNa7M",
  "key39": "SjvDeekSfRjf64pJCc5y8rPrXYkLRFLTASaTBBSuABarYbUND7oTVcPtdA3kFF6mh9MayTBh3oSHYdMWeWf1E2p",
  "key40": "5X1QBw1sFpEi9B5Jf2wJz3MFdy6wavKTXeRP6zg48LhaoGtWvuQmCcBdBjF9Yfcfzdh7JqWYRwZJa2wLerTBXX3B",
  "key41": "56qStZJmmuW6Zq7LYL2711BBkk7wYK2EjMoYxaBcrUZZ91ei3PVumi2UVNMXU3RNpQpGqjMHRUGP4G842SvonfsH",
  "key42": "5mKsGBj2AFB2a8prajyL5nXGj5Fq2AwVTekMMFF9cLSzxhA5HPQC5YdZNebo2wsBp58VKooBxbaEfuCaChD64nyi",
  "key43": "4aAhPp2JNQ9mhgMaDPCGX9CPX7YSU9Yxh6uVwfoP5RVoQznEBfTmg44qhQXL5PSu1WkNgLeC5yaw8QYtxeqxP24D",
  "key44": "EXG6DFDN2Wfexsfkvwasvn1szu8u1c2GGCw2mBAqhuPYWnoiaSwNGLWkCeETvFrqrEwgc7ibB36niSE4vDMCxKs",
  "key45": "53qmCANxPcdTrM9vMqLJHqytsqTruMmJscxoxj9AF53wXrUEKa5Pg5htnWkpGBmvsiuTMkLe2EcXbeucbcEu7rC9",
  "key46": "4qbJt85MYjGez7RX7hBcAvjFBLvwgbYWCS5F3TYGKD7X4ZUkyuDV5opi28K3Me5tZ2UtXz2ZLhuGjnsBM4TixQTE",
  "key47": "3ZWbeLN2LxYvFmmqxyfWBrtns9gnypCGWgLZSMDgiTwq2dGahW9Gfv82S8VfPKhfHJ3RWCMrVQ8d77kEL3TYtxkh",
  "key48": "J6FbBdqEPbHiZKR7xjtjziMgsGcBhpADAPHH2bn6mSW1zLYZQDAnF9Q9Jtkf1yNeCNZunkkcZcT9wR8uBRrMQg3"
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
