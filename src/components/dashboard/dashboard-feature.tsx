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
    "2bp6hnnFxm2cyhAE5wZUzNZ4CPjpuxY5LgqtWA8RmKJbPKTcDCELbCYbNaxvg3hwPFN6rhSBQeRDf2HQMdZ1unBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M2iYK8U3PRLAAh7Ge4myZ9WKkWVrrReHmwEu6nzNUjkLdPauXkjQHVH7qbSHwcn9TewJcdZDbeFohUtSPPzVFWF",
  "key1": "xmbhGJs4hey9xaay3Uzt3FM2SW59PEuDq8SbfSWyMa5Y6chnqq4aHP3AKJovMZ39ZHsaTTPgfApkuCHj2pkCWH3",
  "key2": "2Q7xrJsTTD5A2rniDHriFEjP893u1qGnYKgSaAtk6fBgbzekaUHAe3JNDw9mUaEZ23PGoJpfzLSsMULTU2rivNDs",
  "key3": "3JcAheMnuMGm836R5dYPiBnTGJeAoi1S5VMB9LZ43R9x1Hsv6aoa8KkkT1ZFg4jVhSPnnhCmTRvswyC712vuRofg",
  "key4": "EDso65VALtie45EsZMXSmERovWmoDgvqbQ4wytU6gevnSEsT3Gm2MsN3cDhC6txkcdfWLLB57wPkpdDSn5HS8Dg",
  "key5": "3DLYu1hYbaQEhiuUZP9QKNjQV5EkbKdJh72iyoqYzBz75q6k8UcvJaqFYkFxpq3YN2pM6RSgJZ2awf5ewD3gVqcg",
  "key6": "2tkfKLFRzYsQRsTWkaGnzPnQU2cPxhzV4ru7i5yVUbb3J3jjYYYpt1J94W7xeRskSMfoFvnRKiDVoix4dkrb1KkJ",
  "key7": "2jaeNReqRQkPcaomSBjLSt1uX2Br3jXn7X4nrf21qcorvB41EPtkEvSe1bGHK67c4vyDqqqzHP1Vx1SQny3RkyfU",
  "key8": "29eABzZCRHa2JUSYioP7Tb3L75gEBExYeWm7eqsKz3bzVB1a3weyHLa7KELGWt826fxrTyKbyqqM3e89YKsdD8QV",
  "key9": "275dmEhFF3N7R6Wup2rkkzzuN47rPXhCPuFXvjioJu4PHmyb6pAjuRzfz8KanZVRXmeBUfUWFGrHPDHDnhbhHUAF",
  "key10": "39mdocUcQJ8WoRDWUEFGL85Z8bwXrf91jAG7qdFP35j8yfUG53sonGFW6xNJqbasw5RVA6zmsMeZ1nrc5r4oaK9i",
  "key11": "2Yh3wbcMs8eLeUHucsTCZDM6VrJs4Zq3H5YDbx3oupptV6T1XFvpUepuf5iZGcQWf1iaXnBsGvGpFnxEarVcUyvZ",
  "key12": "4h4asCz2ygWmDqsKB3oDaSaBqKv15rynvvPAZ9cSqUVdcNaH6ZmjwQJjxzmvT1gDckpmsPZ18TDKSuRXcc8Zfiov",
  "key13": "353PzwuyNwFeqG531kukrBHbaSbc34SA2NG6uS6SqxUxdJczFZvpiY9nvrSuMp3Yj1JaBPGDDwPHnZnkgvfh4Mzw",
  "key14": "5xc2RJVmbk6iqPW413MoegjsmP289BUCxFPMtK9CNhFkkc9QraUkpGbqDPuh7yBUQqPgc2GoCnd24dn54GSz46Mv",
  "key15": "3YkQwTpCuDcskHKJHZPAVfjjRs7ZASNFxwppU7mR2oxkpT9igT5f3q5KQcfWcaUc1SBY9dq3rGHHFD81vA46fu56",
  "key16": "5h8o8jqvGP4NgwXX9H19DTQ6HVndNGmJieCC5sRVSKA3mhwsJ7ok2ZzB1roGsfMQFzWHCwbneeWj6qMksiJF8dsn",
  "key17": "4SQ3maQU2xwEY7bbNmU6AQUQC6H16GAE6zMZHfJi3voQVo8Viy4AFsqnxf19bRaHKyCwmjy6LDjRUQJkjDmCWrRM",
  "key18": "sUJcnEg3d6nHxnw8mb65ML5ZSm8XPq2g5kRcfohap2M4tTd28RL4Ne9mKHwN8DBx7nJhKzuwp8Rc1C536pmFtzg",
  "key19": "US67Ay5J5ZQpiPoUxJKqHCwhHasJ7eGVdspodkX9k7vTRcawFZvy176bFQw3Lo4QGau9A1LHoL3qyvxdpSiZmwo",
  "key20": "4ieq1c5uSjqQifFJM5vQEcNaE7nGQFt8TELB6aYN2o132tFWgwkw3cje8rBJCAbWdjdnPvJAzwpqMxNUu8WreY1M",
  "key21": "4K6kzxc6LcdFNUMbo1dBpwtzVA6efUQGaKttFv7A3vbBWhBgzxCq7Hsp6ou2m3Su3Vv9PcaT7dPjrpUiQEG7JiDc",
  "key22": "32cJEZXiHriiwPZNKwFtuv2JKkySEtgCM58K7Z2Ai4JPRVWdSiRq4jDrKvi1Pic76Ffz1ScLFtw85D1eprNrFU3H",
  "key23": "iWfony5ZZrKtHrYqkq9nFivFkt4wYgH5BM1MhxG8A9z5214vbPcqHJ7s4PzPadMcb88184VuWsbgFEY638QK3Pj",
  "key24": "xeJs8HCU4BxBGXqv7BHugNEiUv1Ldr9dpgoZQHZKE5iUUBjZyHttwmqWKSpD8QKzj2mDgGv7THVxPCP1vNympRR",
  "key25": "5sXWFtktsTTQjNXaeh6Cj2B1r72xq6WjJ514Gpsti75stD5mBMJgnVDvf1WEQVHSL8b5s88Y2txwUnBy36hUhigR",
  "key26": "5Mce99TVw9ixdQfFjbXVVTXoMh6AjbTavbmTCMNNkwTdqhH1dkKQMitUev6bZ6FDwS6iUDuvnkRyJmk9QUW6wzbm",
  "key27": "znn43b1Xa4C1VWQFAMFGxEspbKz7L9WCsBSbQCcVG5PwhhhobAsgev5TFDuHNW85Wo4mkcgaARQ1BvAR6onwTQT",
  "key28": "3Ke5vGRQhxwRtcrzV53DARoY5YTvt5rNamYgWV9BDAEG9ZfbqLZ8C3hNUxngK6iSBNDbExT5esxxFz8XvZNhsdMp",
  "key29": "2uuvKtdQXxUDhUzCMQjAswiJbJJ19PcNhgsYxbRHb4xa4tNZMPgeKCsgDySHsqyS7GWYTrkzi5PzTCpCdau1efCc",
  "key30": "3KCXzoRrFo7xmZhMRRCCxJiWMzyi83tk5psurQ7NdAHcaBQo373oV4xWKiVqBE1goNWVMfcck8c3d4ZfmUXq1xRY",
  "key31": "3M9xv3fV3Rf9sqZ3XLTpEwjDYhdUniUy7VwWCbMfx3xxNhL4E1JrpuVBEhiD9S1uBbjLRPXdHHBqh3jYWaQCtTTH",
  "key32": "3wrGnoeijsh28W46pGwPhWiWjKY5REqVZ3Sn3JKMx4ae9Aaj3sZQTf77pCwkmm764FJDbPcSjnM6pYVv91RxR25x",
  "key33": "4zaaTdifynhRedxdChQCoEtePA2mcL2qNPaPmCyqwa1LzA7B8qjiQ81c6zRqE58isn2vZrHsbt3WyXnmW34S5Hf",
  "key34": "4WBwBbQsFDUo5cBbL9RKbdD69PF7XYB9odDbU48hQQkXE7V6kdUcoAuCrNN8CjHNUWaf2obxcpNMcCVuuh9v9mRh",
  "key35": "5pbj1qCWbPGZcHHj2a2LrReBpeo6bRFz5C4rKhPyCCMxwWmk4zxZMyK2TFv4MtadVgXBYYebYjQnHhYQ4DbM95nP",
  "key36": "2u5XPBAWxbnfhwqUk7BiaYzaHxUjHAW7EmhgzPwVLW5MmbtSCaVbeRAeKqi6okwfStPwfUyjZuXMHmzwmH8iqNv3"
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
