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
    "3bj6b7SsqFfw4FPiAvTYdLBxJ7oS14jv7RKstxQPLvaC3fkxEb9x2ZQANaSGvHJh8JeVfCa3EknEyYduFyBPZkhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tBrfj5bNJV8oenj2kefd8SroqKKUnvXzvAwx21JSxQQAGhPXD5htc9wT6hXPbVxfhRihLfRcybqrtPgsZjfyARU",
  "key1": "2kMxJrPSoavbtmXQsbe7PCknXCWteCePtbEcFBiVnW9KgBTBMxByi7Pwk2V4jrFU8P1xCs8saSCKfTEg2dyG1ngZ",
  "key2": "2GpxBDEGdnEpRiQ9cNyrpdaLTd2Nd5MxtnEzhxjnYirhcGCcg6yvsJdqR6jvHgNB1TQFpmjvJZ4GcPEztWFFE18N",
  "key3": "N7j1YSNsY1e7GAGbjCxj6pFzvgRKq9gT2QQ9791yEPF8KtatCBzvsAXrcEez1bgcMQJQaW3Tsd7M8MaiQQNuyoS",
  "key4": "5HJFkSQaZ5F8DbJrSzN8kRafebVb9UV39apEpScnxTDAhiFDq3B8dhzKVz5NeqUUeNfGYtszAbgp2Dr93xLFeKNv",
  "key5": "5qrxiVLp4iv7wByKBfz7oKcgLwC6aKbwE3WQ5FXpDr5wGfmTzeoUXkTFNHaziDnGUJB612yuQin51ZiMxyMyVCCX",
  "key6": "3KTdjXWBfrmsRPYPcsF6WRQBSBZGvJxTdn2hfXtMC8RPkkB5YorpusJ75XFdqiR1bp2vyKERVr1BezoTifFtmQB3",
  "key7": "4wtCWSXpSGNQAtN5y9ZcZcWt4rZcfrsfbg6TpyNNxcJmyfpDETTvDuQswqfAyFsQke1RNHT7t8pLdJ78jLTSseYx",
  "key8": "3s5AMKwDjvYLcg8f9BMDvYSvUxhW6eUSfjnfzaSTw2WHd3f62B21QzTyjvgYp5DELvcV2GTHuk6GxXUaDFCkAzBj",
  "key9": "4kEqUfCF66vyawaA16MFrphSGkwRXoF4uPYzs6CWcsRz1vG3v8CqyQ5pTDBoUfuukjkCu2pGSEw2sEAj1kQy5KHs",
  "key10": "mPqe7yJ9Xt72Bifh8AorzbWqRZv6YgEW84oPcVaXqEP7FvLAZxcEXkHxo62brZKeyxDjfAxMiwd26Pp9uRFKbJd",
  "key11": "253SN4TDQZHPhcwd7be14qh3bMKR9RkQ35gbhTsbBeTCMzGeAobGbGUGmPC6z3E8xecVziXRC5cGJPhm9Dy43iSm",
  "key12": "58Wkrb7ucJiy2qYjNKK9jKQsdQqTU8PU6CMhMY7pyTSG1VEKeggVYin5BMRofrr3HsJniCwPR5YRDitdZosULiCi",
  "key13": "3GefJ5JEauTPFZ1CzMmyEe1rAAgWfFoeoS5mVCCocL8ySvFpsyrFosKMBc5ky5JTZE4wt7ZqkefVoikiCq8j5ynd",
  "key14": "57K9a15YS49PfMZR1dALPhwpfU1vXNfXP84RhnPeadz9qNg3cWJ3TE5exEvWodSuo9aL8Qpu8JCcDLrCSzyWgGsb",
  "key15": "3BoPycRARc71rWhndLGTLfiaY6BWo1jDRnL6TAuhUe3EngbPqeC6CPu1i481uF1zAqTBrnnzmDD3ravfrfzPtqXa",
  "key16": "5vXdnB4dUH7B8YGDgDLBbhR8V7ga7zeespNPCpwYg7umPM9pSgLBQ8YDmz9gKsM5sJQHDu4z5kv79Dhb58r49how",
  "key17": "fyaukArum2fT92NWJUbrgnMBq4zYbuPaxUqR7MLoLq4pMNcsfx6H3RfBEgJGTBJnJcTyvdHGXSG6DDW3YGe55wC",
  "key18": "2hBWVeNKYeuCYSnfq9AqMccem1Hd2sC2f7HNbNZZmd8CfzPdNywGtAz9RBCR6RoxVqY9g9n3B4fU4APHxkJMgS3i",
  "key19": "3sP22K9rrDfoRsS6s9cH4bSR8ioZmqsxS8sP2ZjHtiEjEoM7w7ag8fAMQbySUyhDd6rQLgtWFSGDVg6W2jayzMby",
  "key20": "38UnkSsayCyGQA3jfX5QUex8CM4BrEBSTikuqZ3prhophfTu9CY3TZJxsd6pzhrixRXYT2Ma7mAvCAeasbvgVfMh",
  "key21": "1WBFfqWBuHUg7bp4PWVQxSbApmb5dwMJgwZuDgRRbGcDyNQ8qtndt7hFJwnQi3XzNLTxD14mFvEBEWRPjhgZ4VQ",
  "key22": "5uYzb4VXPwyRrs9HPremeTkbL7F3C3u1ijA47eHfyCehVZoBeQ8WNevm6MdV1jyZtq5Mu6qmUhHrpTDtdQBuQ8EE",
  "key23": "4jAmPZ8cS6epfpE3hYCjqqUsV5ye8iC2SgnwAHGgxwa9cpnJD8VUQ6sWMiGXVpjUW8wAS4NfgqJecn9UNFnCF7Ae",
  "key24": "2as4DFmwaqJ1d4fZkEhKn8JFjE926kFFniYjdTRE7ZWX5isVQ22JJmpPUpczptpR9KBLDXjRs2BX1tRNP8B3NUMW",
  "key25": "3R4AuDx4k3mr6C5Qg8zM4JXqaMB2sfkhkd9ndH3hwNhYsWvPxJ39kzt5HaogCiVtJGCNYXcFY3zzmESYk1KuD16C",
  "key26": "2bzryy2ScJQX6DkStihvFEKzhShXiZEVxMZBtjspoCH84UM3hbAHHCSxz8zukNTP3SQDkyQsfTS9ajqEgBB2nZtY",
  "key27": "28yR9YrNQz8KUSviRKFe1f2nxaJYTqAAW5NFHQDowoesZAKUC5pEhcPWzHa3yJX8MrQ6URsARtbtdpKBoMkXTG5m",
  "key28": "2qUkC9jpnCub2LTF96x53ZCgwJp7dZawmAKVeDXhucEYSnbuCSahnJXaZUs8ADzdT1tcK662keWkuY94PhUzTsWQ",
  "key29": "3yAds8xhCDj2WXBDTWGVSqEvsMchiv9opqXEoQKFAf7wjR2Bq9NEL9aLu1o3kCwgV9ugUyi8AZg1YNG2ZndUgBy9",
  "key30": "TC48zG5vrEREkcqLZXHrkhD5XXWKWLGFHJeVG45f3BSSWFXnLHjfZQEDWWCcYaE4Dt8wkn8HCbfoo8z4EeHsTHs",
  "key31": "4wGRT4msjF7cKytyovGxsAYMtJX3KwqHgsSd1M6suXuSUZqJv7t5UBqTdfgsyX5V3BkTdcq4MAmZRoD1oqL6dGd7",
  "key32": "4GXpgkEBFrSrME9XPRd9BQThvAHmShL1XVhBZ5d9k7SDH6GDc9ammSofMhgBe17bhKskSyCCCprc5j6qBYBRF48X",
  "key33": "4EnkzENaBqLtyPMVbD98kngDiXgVtxpGLKX2mKkGPD4emaiwJ8JTTuvSMTFkJ8go3yzLPDFRzSJSSZTGNTH3hzSQ",
  "key34": "497sxRpDM1hnverRWNSykPm8NeH3WVU5SR9QUTYJkjQsxn6m89LhjhV7R2D4m4pTZUeyVopEtvCZA4pVcL3PGoW6",
  "key35": "3s9jpSbw7uYsdys3WNWrVHcMj27yN1sKFmGJDkiGrgBgrMNpuRvB1zA83SQvdbCzmioHSYdReThxVdsGGwYq2kqN",
  "key36": "3PVREWVL5H4FSqNfr7pctKewQdAfWV3YzRn6tAsDkerkrb4TUAQJapYijsjJmbY2UcWTF4pnPbX3bxV7qjmEZrV2",
  "key37": "51z9t4YJJBauG44XRQ7qTDz7hJH2o7WnU1npsJnFQhapLaxygVpxUzWYTW8f4W7XinH7dQvnAJBydeBzwb2i5miU"
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
