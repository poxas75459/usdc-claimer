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
    "4c59s7AF4JBsDc4ZE1MaVT9mRmKZozEkJvqpiE5kr4y8gZu2Ae7FyZnZQ9Ww8vqaHzawjsXp2mksUxPp4b4LWacK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4brfJJWVx2nLgAPHH97wFaaa4n4tZmynvgTdmo39MnSko7J4wVTyA9gVVAhZE4TyFaNRZLaTqy2p3iGXWAfXcRQz",
  "key1": "651eFUwnxL3Lf9ZVK2HcgT5gqaggDaf1PcWse7uH5Kp2cdS7yS2VvXJxxYFiJ2FtmuCHJfWXVUfLzNBwrgsZu7uE",
  "key2": "3uurvYwh3eXpAhpm5d4fXPmXpnGwxA1NdegUW25e1sksuY9SA2WCtMDsGg3U2jXWTAiyCFwo1UGDRRJ8FcmsYoh6",
  "key3": "21Ct8DuLqkarDciF5pTP3u2wm271XvCAsAugB1DPPfg6WQ6WJN4SwVwFcZLeeEbtBffALFsq8kjkb1BLxJHTT6fK",
  "key4": "2fYzvp41gyfBFGJrzeUXpDvATEUL31AYfNKsdgtGq4WnRF3g32pkoPVivc5HPm4MbYDQ5htTrcJrDxopiiaNF6y",
  "key5": "5VJsxvfMuFZEG9ig4f6F734S712urYvyLom2sC5oBiFQRQ1Bwc3h7KvV7m4pJpXeHjDw5N1eNA4vDgGXWbPzEHzg",
  "key6": "2vdv2xW6pXQLL9kmzhHdPaHpG5FcRRJqshBc1Zn2usdH7jmBPwF2aLwP3vc9U2vrm6qMrwb4F1Xc4jrBcW5HYYjb",
  "key7": "2UTg7ELuUiY3KuYzpnZ4sfpdYuvXmQpkosDVktMGU1K4ERE27NnX4PMgKDVPogmzNTmWozBo9mLqY2iJR9AMZKMt",
  "key8": "5MaHRoNuqWGGEx65TjEkAzRxB18FYpXPmmAL4z6nQGWWvR3n9R4BPTVJDE5bd2HuSadGaxkYWVipQCBAVZVbmRXx",
  "key9": "3Yu44WQjpWn76zmv69fGDacg5D3UsTPGwrSEAJoLk7idFRiNzqNmaZFtfiP3FeLvdhtaZbAPPzWq8AM8sp12Bpx",
  "key10": "5duutiheTE4mN1VH6kY7teGb2PUGqdqJf7phRPaHAYf6yYxJ3TE3UpmQnNS94fbv6zuWiN8MoUpTVbZWn2zQE32F",
  "key11": "4aucjRKzPrv2jRNN66oAa2mTH4P7GmSdyiyv89YnShL9ZUaNDPY258Fi7AtrsoPnid5dHwz9kne3gqzC7goZzKa8",
  "key12": "3tFxYE9LPqGM99KNNrNWyRhX7MhZzwTVe7n1wQ12JxTowa5YNg4ewHtwnuYeziUon1VdDh5M6VHab2hQ2uVyJt31",
  "key13": "46WwrxwDm2z8xCLaDqDdeTG6eMqhYz7oBYXeCPgNt6v9czi8YsruQCveTstYT32wv6p4yf8jeh71azeLrhyKvkMm",
  "key14": "ddSFB39EJ3RwvA6BPqgdPFqd3Kaa3Co58iopf82q4RkyynSyjsNi2WFmBg7Ks5uafMpSfUa5CRCdDrZSdkP2jiS",
  "key15": "3ZHhYfbQZC9cdDTiYWG2FUBAoejde4xDFpN7sbPTtQrUygoEumGrmrU2eTCgcbXH3xjbc6hTRY1Po2t86HBmAu5Z",
  "key16": "2v8sG1DPWpHt6wdnms9kcG1jCNHid6Z7A5xSQiEjoya7zzFzS2kyphEMpZDZUkAR4f5E6wUYBZXNjSfn43Jmmb5x",
  "key17": "3Qk4rwJXKS7TjtppfqJp2CVByj7VkmtchTTTQa37Y9cHUEzkZCzGjBPrGdB2mr8tMRAAJmauwpZY9GpKxVkceFLx",
  "key18": "2Uz4DaeMWeNcsVYZ343xLFgXct7hgvvC1deN5QGXs9kPPgYt36yzzUmR6pyJDWteUFTcv3ARmdyhYqHb1uHD1cr",
  "key19": "29fFsJVXTLURfStTGCdww1BZnCpPnyZtLhTFNZ1CmuAD75C1jdqDV1Ez4EwezACJSxcAETVseKTKNzvdJ83duzSh",
  "key20": "23KST4Hq61rBXLBWKrSTwptNwFDGe3baFLQ83jn6feY6YuzreVvVvfsXzW8Nw2E7avEJPMrDJZekz4Nz4CpRtnnp",
  "key21": "3ahtRzFbASKfFq9oP3Bb6cZjqJwAkzu32N4Eeztdmx8Rh5FDo6187rjKqoYgBCoa84DhyYjAd3ed9XdUFau5KX6Z",
  "key22": "2tn4Lo4g4rn3i4XqdW1NRGV7W1V6FYvCUBmG6Cp5EEGXzKPhuxR6oMSV9WcwUK6dMoYD4kvhsnstGXXixyoJRcyW",
  "key23": "GuxNNpwbDHYruigRPgbxoYhU5PaHbYYDfAEKAE8xuJ83JShVFNQERM7P8cYxa5AbGjhFzY1GntNBxLCAXSY77Pa",
  "key24": "4bNvkiEcT94qc5sGFCW4bDV8mtXbBGQJAUi3d85jTX8c7wER71M88kTG3aPcbcvrKrokUghmCpde6GoHr2fiBcj9",
  "key25": "5TiFnqAhBRE9peMiCGRNKKCxe79jB43wYAjRopdWyWaankSkT2eAAVgmkrPzYczeao9rAmCTvuFVhKHAeZiYFqMW",
  "key26": "623gcbLAbUkmWzy9pTNrtYTKJyi6rxiBmVuv11iVdtjqnb6ag5qEMGEVdQ9RdodCdkwb91Mmb7zc7caEfBRDJxXn",
  "key27": "31yW8cQWcTXUZXx75FcmyZ78FxeFtE9vbDUe85B23eR3s4pa39KgKukqeqGi5xSq8XkcjXtRZmQxq34dxjJi6KrY",
  "key28": "5nEgJLmxudoe11A3SwFMKc3e1xLCxF3tUMubdXBJh3oCQCoAgJXS8YzpGHYRPbNEk4xyzwnLrRVjdDZFGPXRT7Ta",
  "key29": "3XG7cPLGfD5XmN1wffDypGTJxGGRNMGjxCjdsXuz8Utz1DhGe1Ji2K2vnVuWfS6Vm7USrGtTS8hxAQTeNfoPcxVM",
  "key30": "5RXoidSHQe4SD8CE6VT37udmQkCcRzewG2txyrqjwhJLQsanCxsBbeJHi2UTtDtksnDSjzv8QDW1Wu1fqh8E5uKP",
  "key31": "4dRW3pbGMQUeNPQMVYZtjNVhRWckP9ptjvNG8BdjETuuiRHTFMihBaDZELwDi7woP1jnSKiN38mYbR4xdoN5sVVS",
  "key32": "56h3LtV6XiAVJH14ztN1GJLRvDSmxUZYipcr261ZyXEwZNmHm2dg3x4hTF8J6ZygLb7tu23h6DcFCWZiaPU3npK6",
  "key33": "5PE2p84idJNDBQ8bLfNU5K3Mdrsgvf84YLxFsdzcMseJCnQ5D4WczRAXjyPR3NeWmzDvwSEcTu97QGZG48j5J68u",
  "key34": "5VMyyXm6sqswJ3HB72fvnkJzYwmVPvM5vT4TiWuDaYTgZsy88WzigrrCyEPtoSJ3PmnxMdyHn2KmErJ99NXGgYPK",
  "key35": "2qniwhzZu6pNdBpRScUQkW7mjYSsTg8ZSX4iUVkfNx5S2Ldpj2qAkLFxiastCUYfHbPou8HJMrighmzn6LB3UwTj",
  "key36": "4hibYAfqtWkVLx8JRZbBpr7ZnZSFT92vHQJjdjp5nHCdHKpwjH5UazNDMxW64yFvP3RGKCwrxkbtPitFAMZ41JMb",
  "key37": "39EBcmrTLMXPZKVA16GFAPcXuqHJbCUA1UDBgqT6gzkGrirL4z4KKWBkHP8UqF1VHas5Jf9yUn1p2s14gAodmqZv",
  "key38": "2vc9EhUWW62APaFJ5xZrP7BiwAVPJnxWywDYL82k1rhu332vpeEUEoo1qneQCPZF1yVr7D2LjamzA86ar9LTiQip",
  "key39": "2B38bSYBwHxChmfkAA7os2W2dzDsCH2p8FPkpBxk3mC8Y21T4CBBNgwptkEk7Vnrxu2a1w1824PW3iTPXrpevEJw",
  "key40": "5YJhGmTVZcVVQ3hRiXgWhbKEntAXn7tQ9vS8jJXdnxLx6vKa4XkbJNt2j43EsJto9q28xdph4kwZk6WsKF3mTtC5",
  "key41": "65s2LUxEGaQKphRdYPSCFk8a4TALdx3PFzktgQZF71raMVET5zGmdC6bMLckvGJjKmEfcsRHr1LiqQvRnP1mBvmU",
  "key42": "2Q74kyqeSsigTypXCPQZZBLCknx9MUHGARmiJ4ZxjgqWBm3usce1if9wBfC9iJo34jymhLeNeinpn3Pb9RYfEKfs",
  "key43": "2vzXsiA5hiEEB5uvHRhYP5JJVTuAbqYDEynaHWM3yJW4LMDb53mb4QQfSJDvZ57wn3iBE8yHTaSEcoao5VnPDtQu",
  "key44": "2x9uTnadSGXSje9syNRcXFujZH6KiQCK6qtSKXF3j78fnSvPqeASs2QfVkcMi4Uh9deF9ibcTnNQbGr1qENpCZPb",
  "key45": "5N2MZJ9VAsjTfxHzdz2pkX7EacFmM6KLrAfu89FsuuThrNeijEmKCybwPDRz4R9zvnDHdJUFhE3EzYjHbv6WHj6F"
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
