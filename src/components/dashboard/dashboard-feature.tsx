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
    "5dbzJ1HhJB2HL3M97xHoCwuvLLRPnxWwLyB5iMaobhpQ5WkS95HmCPaTCaAjXNGediuEPA3LEfzhNb5idcQNvAWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SoJdUEC4eWoJ5Z5PbWRPjC3kAHM7XTPpGkZHBeq6ggso1EEK2pae2vJbPVRnbdkVFaNgBi6VyxociJVKMwgnZZ1",
  "key1": "2VHoLWLpGK2Hsv5bbrYjbCXVyfPGoCF8XqVfpYUTTiatzpEEPvyEApLUTCuN7q4DvyWyDnvqsHBK5cHAAXgzYamY",
  "key2": "5QHykZ7oqcivX2k3qBtJAqeHYSJkEkE4PSjj9Ruav2DLVY5uR3tyhrWS4uDaz5SCpDrqk4ASX7km9z1BxTvA8VYC",
  "key3": "4T6Q2Fzb8ezubzfAK763wbNon8DtSuqZCRhwVEYpg2xShkdy7Xnhp1JqfqoL4bCAGtmrdZonmkAQyzz5o8t6YpcG",
  "key4": "2yrXPGewzTLNk1dtc5GAcvQNtkwJuAaxCEvm6cmvmzw9AqqpDEMVUSBsEhvyMQMpSKwnD87KZG6iXywm2XTPeeEA",
  "key5": "FBQ5D98L7fSLH5zAezvUpAuJ15Sz2GdY33VYojWrseDX6CbYvwV4MW9mec3YJipmH4ivFaUdUJRRFjxeB953KpC",
  "key6": "2bPbyUJeX45JZ8HDki7bW3647tkMQ3S4PF8KiHzdp3vCxRbiKCQXLj4b25um9WPAotfmsXyd9uhAEM8gvt2bYk9u",
  "key7": "2qRov24E5cJEC2zU9mv3yRLEnkyUjQQFuGrFSttKZeXKzKBg6Gz5aHDStj6jJemPo7dgDL7PkEuLmTSZr87x136e",
  "key8": "Z4N4H51THFyY33xnRjxoQe9fR4m1Xqn71gX7mwuEfjRnRekpWaKr4L1RfoABgqTYuvV722bY19vPnzrTS3m7Nfj",
  "key9": "4WLNo677uLCrx4jcXLddgVRc1FdTRuqSTdE8RZXagYKTM9sq4Q4EAxnZDhmf9bKyNMk6FT7ZH6etWWFfqd49Pdjp",
  "key10": "4xvrYTmKG6pbFDE9H9NR8tCnBDT4C3yTNZ74UfnP3oS6XX2JTGJPCWVeWC1vz6zrv7NyDurCB3JKqwkQSBtkFVMM",
  "key11": "5sMAok4QR17mFi36Hs4Lp8fh7FCAK1qSXTrCJmbfVwTdBVtn7hSiRuGNac2pqw8dVeKwB1JgtWMwGp9RajrXAGJi",
  "key12": "46t2pXXHDf6PDXcd1wzeo4aYYKem2DuUi5SaSZNaU3aBm33rrkH18FuD52YcaUiYT4aiqUg5Yd5WccSKvT3CAiA2",
  "key13": "3K8tXkVAXu1cMJ6h2NvqhFfYgcdXWxmePxd9ja4GGGXEkXiLKGUjhhw22q4jK7ZUZsHt5uxv866VnS8eMcpseRiC",
  "key14": "2HcAsz6iKqbDmzbzkXUm7hZDZqKPkWb16rfAoPX6kNzVa8U2LjAs1S1KATcsK1UXFVK1q8QKJHPsBZYD8iHbJci9",
  "key15": "4WdFTSAmAFYgPsAFowne4AZiU4W8PzGZGRnJs3GMU2NxL4HjBfL5p92nShadp9wHoHETq97LBXRZM7AzTFC8wiwc",
  "key16": "5CoKGuYDhZv7xyucM99ugRHjJyNY78n9XwnXTK4Fvefnk7mimQMEV94Ec3uQjEUCj9b5LP59GUDyLBSskGcYDs2y",
  "key17": "27qMfjrn93P2CnBNZuMv7AkjfQy6Ji7scfqguwPLS5HV1EBEWoc37h8fHGyZxNcvZYFu4riG5u7MUfreQF5WE1FP",
  "key18": "kzrY47EMPtoFFedSMfWBp76uyWuGY9zSQJi7x9ViKUATQLZC3aW8TfioiH2RLuQFjiiE5SLgduqawRTgNXM45mH",
  "key19": "5ETGCvxPeE4xWpqDMYFisbuE9nPe9ssotbwL9LVLfVHCYhknAD5oTD8LAjgRqeMmWDmZXDi3U3oaWjAvYAFvcCw6",
  "key20": "3YCjDYJKxYgpLcfrzjt2cQLG8ViLEMgHfaY1wkHNHiw7PER56JXvHsipsAZrFtwvzKeiGeTFKUwmxHmkXvNiZC3v",
  "key21": "4Msdkrr1gDz2EEy5yuH7GttEaKzYj7fVR8vpVfe3tvKAkMJWTEQzidLASEg2LG5XkcjgqZCDSSnvHzMboHWqZm8F",
  "key22": "2ypsiAWUXstjU91i53ZBR12xMyR1mM3kSWapjMbeaU3sD8jhnWCT82fyXzUsMKSVEMh4NjimjPWzNvcamBqEKvPY",
  "key23": "389CLqPs62MULRLj2ddYVpuUkbc4QQYVjNY6GG44CMdibXLDDVwMvghMc45pcXrbbQxBNKHggojHwvoNUf4HZJDJ",
  "key24": "2EYvJj3JsthqKbg8cs1C7YwRNf6i2McXbdRkovTza4oNimtPx9pqL1RsNURCnB2YwqEuGKEMvfprpdxw3RC7Yixx",
  "key25": "xzVpHQtQY95mkfmdgG5bTmP45jE2tJ51h2h1ywcaJ2VfDRPvVR82CaxtDxpkrtxQxuLQuLMUtNAgFvXCb1939Zb",
  "key26": "4TVQTGNqKcFWSaij5vczgArQfS6gbu6y9zTAZc8L5HH4uHjvYnr6WJyB22QAq331oG7k9PgWsro13V33XeXhGkb4",
  "key27": "2rL7wimeWKWPDtdJ28vTKiSWNR6inDsNa9KyHHS6f3jmcwSEMcvRNHDDDvRgwmw8E5JgrEFr2MLvgurUX3mjoWX3",
  "key28": "2rXFDhCiNWoVzbTXe5FhTYjTshHFKzikwBBmdG5MPU5nyeAH4YLmR53bQwBFabvYmJ4vJg3fxBrPSbGC5np8cdHL",
  "key29": "483TkYRUtLZgPpN9UtgauEHdVdwbc5vNzz3cNFcT8EdPvyKKRmNHrQ14bwgKVEjpSooMKm9SGmboHz94fNtkeH8Y",
  "key30": "5AFoch5gGQ72VHsFQTSVQjav1XGKGqpBRg6znxc5tRhVoam8Bt9etmHnfz8EneFP3ccEdjhLUa2UgK8SvYC6Apf8",
  "key31": "R39XFRvtEFdpunHMhZN27sXScA5a3EJgRgpjrtKeaV56Yw54b2wntgeQ2gE5E3EPGEDMxQ7hMR9MiboDDhEwgzU",
  "key32": "dybYg4R2e67kTDVr4sNKz4EgC3nFqmoJcXgi4obpqXnUqV74A91rKsEjdtHvNvsAGAMAFFiQMicbpKCyShMzg3N",
  "key33": "2FS4Tg7EYb63E3tcEqdze1QxgUosi7DghN7DmjoeisrseX7dVwoLhazfvRvX1XMAPRzTXx5wPu8RVFy9rsBD5EJR",
  "key34": "4R3v14VesoSPdg4BU1Ygn6mvABHcivRc8abcFaMEwJZ1a2X89vdFVSoRZWru4ZCo4TcwvxVD3xs4n38PwgYdouZP",
  "key35": "2UnMLxE6XYY5uqpt1a2bTzj7HFXyHTp1YzKK41zMgFvPtYFAaHLetaQY64ZnXRCuvw46znbef2M9WtSNiFExJA5F",
  "key36": "jwMfiGMZ6orkXdB7V7QN9Nkw4oJjpLuXLoLDYsJGUnirRtSQHnPi9ZiBApymQR7hgayKKD6oGzrpFjzj7dCYc7H",
  "key37": "2euyYdWQb6uc9LnxBWNXEAJZRzeBvrM3N2oLGnZrsENN39ycNBzPmCBS7EHz71QrsGgBLioaJnrUu76G7UWnvZuX",
  "key38": "126FmX6xc1ByzeW2wLjr4Sq6isVeqN7AfgrBsS7jBUJyAnyPfVkHiP93dcz6A92WJWvA97Eo1JUzJjYEZFquv1go",
  "key39": "2W6PiKRGPYXtd96u3NjHJTYc3YzxqRcww6UZFjcVvB1mcC14Pd61GMyo52tmNXHApTp87Tb31JDChRuzbtkGGZ8i",
  "key40": "4fBarSMDom2D5ZdKL3CfBNc7JjKq3hRnBAn59EYQqRYYjgX34buZjjHai53wQUbxHKo94GEuHYbVjKVEnkyFBjNf",
  "key41": "5Um4UYeBc4ezEtdoGCy13DmJzCRPGAjGQR8F1495NNmfociEDcGgC9yJKASt7xupcmHw1DekK5AH2eh5xxKhVHMZ",
  "key42": "5TL5PEnKJenuih8Q9Q4dAMv6TpFDxP8d9HPvMZayjawz57foYHRpeydsYk9K4WAVZJFpfnK1DCtdEtUvb3PuVAj1",
  "key43": "2s53PDPzL67QyeMnmxJnFggdGevFUNBZ9d1YCoYwwUtrmzRGTrSJcDC4Mgk7KKbzfeF6ixuTBKsrzSS2jgYFYCxB"
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
