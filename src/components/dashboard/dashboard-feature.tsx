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
    "26Y9pVDQ7cfau5Vo5MNbTnaYh5BwGzJPZcFj9XAMEx6jEWy1wnEFnYp2FH2SWuN7HRm8U2e5EAAZ8R9MdbXuWfmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V56opMQGqKomn2YC8MLyKtZPz84HtdLgdFSrmphjR68z2QbpCUE7vZ77aV8UNCRvjxPvPRddjBu6ZnJZeuotZj5",
  "key1": "4do7jjoWW8ZxsPWa5yJDTXfiqqLJdqgVdFicgNCc19PaqPwR3xYQ8qbY8WCxPQZawqR5dYaU4uXSLYTDavbpJWzo",
  "key2": "4wP2qTyELqyMsVceAmcX62dTWpn3DFKi9mwu6wZVEhDWQJPDscSbX214EG3Xm9yHSqFKB6Kx2Bx3riRzYVYNuYv",
  "key3": "48qx2gDMATd1nT3CwuZYUfHxLLBwCq4dh2SS3f13twHGSn8tJ4itGifu5RR7Brw35ewLgXCBgwRtzQvNagzamv28",
  "key4": "rVTFhg5T68Z9FfXsrX8z4CieESFSRRoEPtHiJ731UsBcUEtHZ54hm9fX7o2nyjbKN8Fb6LqEpUtZF8KHZKFY9q3",
  "key5": "5iPqFAkhYoGH48LNVw1Xivv1fdYHoHyufdL1c1diJxBpzFiGg1fRfBkJBtNtg7n3zkJkNdiLhuDrGB7jdnUZwug2",
  "key6": "2NV9xedFKi85fE5Sx4tPQxcqNX7ZbskQ1Sz6CxoMbyrdQqqJDuL7zhz1sf8JRPWrUCCyGVhHSVt3LqhmB3GLFzpF",
  "key7": "4PtSVq7qXrH62GWHovuFpgX1zXQLxBzCtXjwEUNBjjudAHLrfEqWCkXpykRzbicPh6uPuEmHGUJZdqUhVYs4enmY",
  "key8": "2aLuVVgPVDjff6BWgWb9ZZXkDbf58oc3rdpFY7xitkfGbs5A6bJvSpRCtXhLNj643fCyyAZTemarQgBXh2dgo61P",
  "key9": "57iZ8h2pY8KMis4X77hgcURUEJ4ziMo5ztnsRXqTZC7P6pXwYmQXL9V1MVoT6svwES56iuwb8S51B5Eo1Mcnrax3",
  "key10": "2SHF42GvVLpi38obzbQt82xWdCRppwxpfHzTy4toRpQwwiy1ncrK6JV8d9YX29cXNDuF3EzNaSK8rJ5if7Qx6qAm",
  "key11": "3BxXugVaCMyA6snakaKsexr4APDve7CAfmpNy1QHgoopuTRQswWEZHx4ve1cemUdX3si8Q31wBTRYwAjh4YaNnz8",
  "key12": "3MbwbJPNzuu6tv81kdRH3zETYVxEGSDMbQ8dK7JVjpvzP6cUGAxNPxGhwzxPWHxYvvgVPgyhQeMg4HwViUjWhWxT",
  "key13": "5GgLbg1mzHqLCkdennBtP5ifJC3se7tQQRDAbrU9F4AZnQ17Ys4riRavRkLjBxpBwcKnyNC3E6seZ85QyHxh1Jme",
  "key14": "5nzNTiUb28ZCvd1rAZViExkx3xmV1Hc8T2SFQcwX2sy59gMNmVUMWPC2TwrcdEpHnd5moL3GMmDYZv88i7iamM52",
  "key15": "3fY43iNEBdQqenWQ1MahePDEQuVcDydJeZ32rAhYeAYtCbxgsFpaT4w8y3xNmsThdsDndP2kPh7ppa6j7jqvABDJ",
  "key16": "qxTvcqsrXFr6EdasHFg6yiMdMj6iPPhsohXcmWhKYyj9DcgZr1CrupqoMziFrPy6dtkYUgzmSzi1o6NoD5Wj225",
  "key17": "2XTogZVMbsBCszYE43fHY1NxpECeeGm4xJYmCt8z56D71H29chRqqHZpXWDkdy2ZpfDWQjhpGEBphanAQSM3doK7",
  "key18": "65WSxvT66SpRxGtEjKyTRVfK3wz9AcgXezDXswAnDovVDgvjDhne4nLXTbz6dhxjgbVDsVqR2sgwtLvozG2xcXh7",
  "key19": "4pez5Y5mfw9JBzWvHL6zotTeQXyx9ZpVhteRJRMGg6TAaRb6F1Zz4ZJ6hovrF6scq8EU8sw6uhjS2pDYi8MP4d2s",
  "key20": "4d4Jb8MnSDtoqtshGNWbS3eSvrg3VCCRCeBuMJSX4h19yYEpZU9bmAFncXVvsFAf1cNkf5HZKLcmVTdFQABgZHq5",
  "key21": "Q5Bb7CmtWfziTqbaDBrcMzx5j26ffU4pkiP5hDyrt3Y1dPuri2Yeu13hXU5AMtpfwS2caVc6kMwHVq3JZT2QgUT",
  "key22": "5fp52ptLc7H9q75aVMGmXtiFMBPmAaKc9okdDEYTu7hq9i9fxJcFXZ5VQL3G8hDSDCWwYx3KATcDUPVn4NdSMzRm",
  "key23": "LSTShgjqD3AhHVUB6S2uPZzBExnWj9BxfpZtM3DThKV4Q17pKvdkkXXvJcQ3vf65suhKQpcNFJ5Kaygn2KhLMXx",
  "key24": "5KryvbQdwoSnA9KknGmRaw1Wm5XN9hBAnh9fDvPrEbUeNR4MsmsTkxTLFGLxGZHXy3vNQ4FrLeu1DfhU8kVt9UxL",
  "key25": "4NCe59zdy25rJ1a6ab6XG1cLg9YJanGgJaPoDMW28fWD41C1MHBiq3wu8ypwFP9bTqN7JQKoZkTYnHsxxBkc5beq",
  "key26": "4AH5bpkkqiTfbbm7dez7dtdSr5JgCAUgWycSBDLchyDgB2k7Mmf3az8EdTb46UZVMqFB5G2wD8YjB5Tpd4u2WZR6",
  "key27": "65KKZnnP6Syxzxt5mFwhri3xaQJ1oHmHBgSWV6SDZ8z3dNkTHK9x4s7kxhe1KRHZjSnHVoLQEQpf6d72qSgbYNkj",
  "key28": "3pUC3Y6MLxio9cxszaSzhXBpAeV5YnVKUWYhF3D2v6tSnLvTRHQ5Mf3Dut6iZPJ6bewi4Gh4shDLi2aXjuhHKeDG",
  "key29": "ywaRzgeT5pBKtuNfLyL3sgCHp9sBSVjFnp2PgkNjftTxKoJCqorh7UKRvzhg7vhXzBzwSTskNkpczvghDErVqEn",
  "key30": "3msm97xP5mCpearDyYbhTPiM4cNLRenvTiSLMH8oqFpQbcyKQDipAk7AMGPepfZdHaHHTs6ZieC5ZPcAZW2jAW8b",
  "key31": "4yo5L15NPWPDzidiide4YiGv2w2bJfEU7VUrm7eBgaBxwwuJEL2YLr6VSBFasEwDWFhYkWusKgWYNeycXGvVH6io",
  "key32": "3dpXNmvUrh8JENXGqmL4jJx1z3zGcxEq1mKTYBhNv5Ei5JVfLo9NNUZENGypMnktEkTbHk9BDf9NFS8ZqePVNBrb",
  "key33": "4b616ZjyUNuMsnE6F75WMYA6QH5YQUwhq589reniKpcSyhxFttei3t8tYjn6pJ45HG9gJtq179Qox2cX5EG28ASS",
  "key34": "4ycxNUfwhjpg9oraqw5J7AMRGcdBHUaAJzA6Sxyujwe6ensmiwX8xpSePTGuHqAYerA77ZyhFrPykZfYLRBDcqLi",
  "key35": "3VjXSnWPJgFY8FTANhovdGcMUcuN81FzCojx3x7e8Urhd2WAYxGxpDcXJ39q9G7Xp74k6oYUvw528v2qsrJNYZ2H",
  "key36": "4NvFSiYHS42rftKEAVquRoRU7he2ZyA6aC7zvUH9cGCtGhDEcjdAHaMpXKhe13pnkh5nQy9DCoD9LWLZJMKAntv7",
  "key37": "4FFgcokjEZZtMRaJsQ8SKThFjT3wcyyNMRCGE7GMHQCb3xrvKxLZuJAJx15erfWKDBZ6iPKPBpDftPSFSWEAPmjq",
  "key38": "3ehdNsPygg2jq9Zz4LHsrkvD5YnrQ7e14cYVmx5c1hyu4uXxtTZGsUTuD6eV8emqDqe8n3zcK6UXhAJiS2L66HRQ",
  "key39": "4cmSanqtnDxnKgoEdtjLsCVuf3SqvEajyQLeWCWRYdYLTUSD5gGJcsG2DJhgqGcYnKDqyoTnryQRoESVQSUWcZ1d",
  "key40": "2iyP2Pfge1wGPprSZAkHXnuxQAKTqsjTAWjASwrfzxAgErHrqjRenfW6G6p3tuo5xEq2cb4qpjpQf8UDz4AgcjWD",
  "key41": "5eunCc6prT4zogfu6LuQhNEV5LXG8oWFGiVumsJ3jYAp8WgiU6w6q3fDNFBnvC2YjetMDTR8TQgdyqghJG3MWDFQ",
  "key42": "2WCRJxefFa5otRmFxQKpBgdNK3b3Le9FjoKkRP6rJUzrwZFuzJGawAA3MkJejz4epJUHUjFQQz3tLAGhhbgfvVcu",
  "key43": "WjyoJkZEHJKcqmV7rm1wZwRj2BN3WzAbqRXTaZiCeM9DRBjVrkuqQmn31n3AxEYKZeMuv8pJcN1mRFMjxT6XGq8",
  "key44": "fm54fnxdHykaeCuogYRyCMwC83mNnRSHHmuhshWha6uzUCYHiMM4euJVujW3339dyGhV4p4q3gT6ar8ULYN975g",
  "key45": "49ATVjbJJRg9CiRfXBw9HVg1bmFCU4WAQo1TRz1LtcXoN4iZY9KMu9BW7gkQoBvY54iFgAVsH9NxXznZnFktd4P1",
  "key46": "7Zcw8HSrUmJiCgwz3xRyfvFMSgbJ2j8susLAd4H3L6rUcqQNfyKzYh7J6F6ahEkNkFZDPFceJrCRtBDABJPBssv",
  "key47": "2dEnjTvjufVgN7RbFsn5EzQhWmDgkCPYckbcLAht9bAW8CH6wMrjrGECQjn24Vt3obcq1MrSbpyqyLxPYP4sDEVM",
  "key48": "2aPiBWZnTAdVAg7VXdkBqsihNSLibcCgaQd4x4BUW7vyNXc663c7vyLa7CZbTLB6ZcHJyGTzJaoCYzbgvHAEgPQS",
  "key49": "QoQRiW7GWioX2UNM6X5V7NdGA1JFGBtPfsNYNKB8V2PAFqn5HJHh6F7zQADLdLrQqTV6N5WokBkvfD8YhyeeTXZ"
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
