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
    "4oCeTMUUSYiarKYtNzv7DhwQABbFDaRgoxkzG1DWREDLJxzcbXRBPuaohps2uX2FFmBLe8Bkb5uUp5m7hfnYjs4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eKRNik9azZ92AnMPQvdht9SDpFwXC6KFu87HPGomX6NsGD1cxsLkBajPhpHgCs3o8wTikSGs5D7MWXZAW5FAgzJ",
  "key1": "2bCBEwYkfwMCzjHWLmGQr2yu9ahuMEWq9euoU2egBzpEzj4Ut1H4Ybef2DENis5ZjpfMaKXTSYTHq87S3TR19XDW",
  "key2": "3Sufgig4SZ6LwqsTfSUdEBrGt97CS3zzT7QdCjaKpzA1sDnpe6nxRk5sdWxVmEBDxsyXEMHAhQVpioAyopV1Y5Jh",
  "key3": "2ZFRhDZiM8fLeaEGv79BVGcFzDkNVPVPNP9AC3DPjXJ9RGsicxQMgvN4AtX8hiGssnuogxi5ygKJpZtqHRZcRPps",
  "key4": "5awJJ2jW6UePNdWaY5rSj2BeAwbdR2Dg8Mcur6njdLARQJFep7WCm14dPdEKLHfcBDXBP5aFGPZr7HgqJb4WsFxQ",
  "key5": "4L4NpApvhCU33bW4UkXBTAk56aBKCeuDrMvMBEU61qL7Vf3bZuWXgRCPDYmJXeaJqQs5ofWpSG1uNRdkCxVWW7vY",
  "key6": "5ztXxws2oL1Pwj8PMsqcU72GP6SmX4PSXRUqRMzLHNExa5wTgWcBC9Ru9fJe7c9c21up6kAtWa8eHuh58L1ARhSM",
  "key7": "4UfBSq2XoQPSdt1xN11Zw7Ygg55KxCXsniWRw23ZV9PRi7cuaHzH43uLPXb9vXhdjyrtNi4QqwwGZHLUzKEp2ZiT",
  "key8": "5ANdVaAn2oyZLwzSeDJRuKPmc8VjdJNc7ch5tLyhsyvJKTx1qjBdmshLcJ1k8SbdtxfCaaEgR2WFae61CmxTvyhG",
  "key9": "2yZVE39TYKE3hrABuN7KbtEbJSsAV9GjTNRJ6Cj7KEfgNHVYrb3eVWfrow891EASnuqRA3egd3cZksEA2DkSCHgy",
  "key10": "4amY6xsLcvyMHam8DzjPZE2Di3maMSsQv6fk5dNUACQ1dnaRqdBxoSrk1Y8MdEnjpMufPgpCcFFLq8XYiDZ6tC1A",
  "key11": "3dTrEWHMPFyF5n2SMYK4U7k6h7W44YPKux2syXw4Qj2xdFkb1pKDDydJUXDkyULDQaEV5pZjJP5jp6XD38X611hr",
  "key12": "67ShUHYQXwBAjpK5kMjCwEb39XtpmR3nVHiidQuQrtfvK4oUdwTBamHBrJHHWMyX44etWuSzqsPG9QYXzPv2hCfG",
  "key13": "tbj67uK8saDZwsH9qyp6NWjHc3kGeaoqd8oZirkduxnGWvTRo8x2skFAXTUB8CeJ8qgfL4X5WGjRRSteGDDwsmw",
  "key14": "2bHPXbLoj1yiaEyeSxHqB6NXVVRqaHvi7LLqrR2d2ig4J5W3axTkGwV9FUPCtFGrpvyV4DhDF3VUgekfZNeMHciF",
  "key15": "JhHnoUcc7v3fbw5k117Vw14K1fNekefWBEkYyxaSbBAF1yjxKKKwFjHvQgQUYB1zXqvef4yQgytmwDKgSHfFnHc",
  "key16": "4Txpkd7vNKTircrmGTTJAL256LNgF4T6LKKBB2C46scqyNYRUhmU4xgzBS3jv52K995CjGtPKhtC392mq7yGecxT",
  "key17": "32YgymzRQFSkkqFah33JxYjNRPEkaYJey9St7oFXWmp4wWa6ng8sRiURzmDfQKEdjW5KYXJDApbgaJs9DbP6gcYo",
  "key18": "6iN7NSz5dUTpTNSNTB1sspCw6x27tMwXHXbuFMhQWgQrXmZKyaWumFyFC6NmWYrT4bNUnKSJkAwUz73zmaLvznm",
  "key19": "52PcWtb4vB3NXBN1xdGpMinp4MLzWgv8EnBkKfumqziwV7sqbNFxZo8ZCV9PXk2YRN2PuLYP6A5rfxK7qbZn4U2P",
  "key20": "5JvUGqtQctygsqmJf3S7PWSHAPzJ8WwTpaDoPf9HUgacZLP9VANWPvTBg9gNppEcyB1JYTMS658R8vWR4gWJViro",
  "key21": "2TmBqq4PSvfRqv5YMNYGKphciUYbhRvZhS3AnUxCo2hHu9NZXJARfj9bcs25uLjrQKcZ9qdbZEypNTnNDGCoRMWQ",
  "key22": "5ihU2K3zbEn4iVpYnjum79UgeMjgD96zSSm4oZgcT7ZSVcVnBF8qafsr4ps3SSxdkR44oo6BHKuEvXfoXTDDYxoT",
  "key23": "4ZgJaajEyLzoWPUL3kBGFW3zFUfHxDvFbN6NmaHnqaAMzfH45dtiZq4FCKKPYHTvS8mHAuncripRq1UqgFmSSdBv",
  "key24": "2RhjQF1UQpGnm5zFnZNXB2BXgmsZe4qZsDMpimMAV2kSL85WDxppTxv49FAxLkJFDNDTjEdTyRtNN7VSvCokv8uf",
  "key25": "5JSfN7ory19yjPHQ6X7eKtj4Y8ExzAxX7PWRswttrkPwSu6Ec4hGFvhxBEowFKJJLEmPMoPZNWzccxTwfe8RxPgz",
  "key26": "2zMR655AVXPb6kM1g4qMsGjM3q6EkhKStibXaYLtWqbahZcp8t2KCxYADeAyoBDeucroempyHXQ4yZ676sgXB8Gu",
  "key27": "oiM8VhZ5V3mGbrLvYKC61Xu6k6FFSVFJJkGjPZT92aSCRfifETGUX7ZGaByhTB6ocJ4SakZ1j1aaLtzG5PR1YWS",
  "key28": "2BoxHAnmiAYJRUMaQ6H8KoqhYhMDPF9sMpa5Bvbbry4aQWVGVSBCsYQHYTgNSG5zmRjXpmhPKib2TeCjd7BCtvyC",
  "key29": "5wEG7zyYb22sBi7aKLeC8bRGG41Uy8DkiYcgDmZcNWkDFMaZb5Dct7hEhHg1RWhr3y7Bv9URqfb4yhNuieqLSJ7S",
  "key30": "2uds7GuygBkZYmvwM2LvCkXTq8QWb7kBjt2wwQspHVYwUcnDVDTHVNEVQKSX7mmqiQLRociPibNBgMfmnaRj9ojr",
  "key31": "5R5JVkTUd9R7Lz5f4PpzhysMH9Hjiu2Xvb8pdSz2oAxcTcGBH6HsitXuEvT7ix73QUcFFQHMaFEYxadui52p8gsg",
  "key32": "4udeaBkwXdqRh7bvcK5Sxppioih1CPz1GDr3uT93D3RALQizbgN6UmQ5LTEJoTbyak7DBGQZzftpQa4NhkNoFZEF",
  "key33": "45EFBN6faP4RytN4oMw5o3ywBn476AyaFSnNaj9Frx9KARNbesM6zbt53BHm2ERWwcBkbbFdZuczdbax6kwbSmFJ",
  "key34": "42vsnE6apPTEdfX1exZn4JGi7L62xsncTBHhh3U7eAhC3zHcN1Cdx13kRSr4b5PHN2aWf14fdoiUNypQC5DRhL3q",
  "key35": "4WnALms2McB1X3XXSAjXVaWLpe5uoLyAUGcHRknir9B1nAH8PeXw95Cn7vjxcz6qd6NNqEinrLLZ8DV4gZnMdhAb",
  "key36": "3SKrNtEZPYbskzaSmCyNhTMkdtDVwFDq4N8bKvwrxKBnaHa5GCSNv8DUV98Zw8nSsHdR1hFi5nTHjTd5s4Wbx3A9",
  "key37": "FR5V2QR7q2UVvSq7jxNCXPCQY8K6ExFshPDfcjP4nn1ZNpugHRqVGoJ4o1ZhyLdqYMMtDa8C6eGisAZuPtCM8Ne",
  "key38": "5dkNoN4Aj5WfWSUC5d8WDkXfNCju6F9o3wxNRq8xKJRr2H1vM65T9uCX6UXxdfgjRAcNhcWxpunttosDzDf91LtF",
  "key39": "3XJTFoGiwLekMeBt5aAy732gbvyR8teYu5mc1XGmuWaey8ecPXp4yiTHnREF9myeNcuBr9NCSjCDXUT2YDBhj3DH",
  "key40": "3bZqrUBj9zNUkEXCiJJGG4ZDHWtEfcrGZvypBkGBZGq3YMtn166W5jhEMTEXKKwEo7MAuS1fvAUjdNcVssXtaR1Y",
  "key41": "2nJUdPuUrWxCEApRX36WcCd2noeor2wcTyPEFYGoA3uYrSAQA7gpasPcutYZBaKdGynxg1TprVsyQ5p4HWk7vAxu",
  "key42": "3xKF8kf6oGaLyfDxzBuYP3ycREjd6MVbgYojaEx1YWqjqfuKZMLXB8BUBgdQzNBV729iUtAfkF9uPdVTeBHmvivF",
  "key43": "4dJWE2zowcXRbfTNzmNnPnzVncKTeFMnFRW2Eom993FuiQNiYEuFRndgPgGHz7sMK4ast4aXE5v4Ce53ayHWeRMs",
  "key44": "2imyCn2wxAPGcALG6a8QitLtWtc3YRtVWDyr6iEBVuTCDVFHgSFY4wXRKT4g8Y12bLzbpHzReHdwYP8sVoyzfhT8",
  "key45": "2Sdf2FYeyS9S9U65BrCxqn85utdS4PtgczLzRfnsvZNc7WjEvZcsF2F4Chf5pWv2vnX5aaXYRDEktMciLP4qrizy",
  "key46": "5q7hXKKJr4LWb3eNBPhLeazZizwYq4u2xQHnkJ2Qfz4XQqFLmQztNbH4kLDL19LvQtvVh9LrWMQmBr1grW3Pt6CC",
  "key47": "JY4ghhxR7F25pfeXgTo92HZ8uHNmBTMK1AWzTv8cmr2tz8uiiHXF93Tw5as2GVJSf3JtHJYbGaFCNdH39Hk6e8t",
  "key48": "2fw8PwtLUctMeXkY33scDrqgkShdpn6hwDxRNdjD1exPgsRuj9w1377FjhdtXGt2LXdzwupQ81UBDs7jDrjqXDCG"
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
