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
    "f3mEXDJhKBKHqz9CpFbGM4Fh8kZKFJnuyQrgsPhMggzu2GiAxAuHAchp6U5Fnb1qwN82WYciGqwJcxH91ZrGg7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jHjk1aw1ccTvSFp6w3mrXCmSskav9Wd9aCXPZ46YmckMqYDrXdTjcZMc3EceadKAUVRWRAdBAKAj9bKjgHYLVVu",
  "key1": "3nv6Vzjb3KAyZGhiYjK9KswAAJHeLoUpyJ4cDSv6qT8avoJhmiKSa71uzWZ4QizdeNVeChecUN5oLdbvWaa6kQt9",
  "key2": "3TsJ7hU4XRa5ptk8WD83S7htiZgnUqcNpM5W8JYuUZYDRJcuLSTLUSKmRycp3rh2SS5j65QcQTLLGs9xse4giPVi",
  "key3": "4KvymaZYCtEojvbbdcdyCp7gpbHVZfmwkiefvk68vwykewR1JsV2oe76wpG1GG6ToaWiNnqgCpVoZEMBPmdMS4qJ",
  "key4": "36BX8tdH584ZsCqfWZHDHDMHUHWKEAGrrrXPx7VeM58DrJ2wE9twMyjBLR95zbs97GhpobezDExuoNEM6raSV31e",
  "key5": "3PmJ7aJ2G7WNi9wixZ2aCE1so7FfomF9LvGsPpAD6HoH6rM76dmE2GcL9zq3k34nmw5qnMy2aLDJ1QGXMKRwQNiz",
  "key6": "3oqkHPr3DfzcGTntTPb88XXPeucMUEcBq3VLm2CYppxHKYkGCHtf1fNJicyhZhHdBgcoGXrQ9vYLLM8xXeuZ8be5",
  "key7": "5Wg3xaKQj618kCFvSWtJJgAP8j8M529qcinffy8kJ9g9D2B2BTgLxM3vk3WZW17vHmox9C22WmA35HnsVf6d1HTX",
  "key8": "NpnZCse8KXs9ddr7xTYWTWtBGQK2hGzhotKqQnCcporemwayGT5R7iXWkveLa9MkCypBkkmfFh7ijE2NmqsGSzJ",
  "key9": "5uCu52ME7a8tModcEkomHo1SUYddusU9VkidX6wnfEm3TLHLrAKKqWNwq2VzRYVaYFx7tmZ1gPHJvDLxmbRwpXhm",
  "key10": "21zBCu5NEK9iwxbDBKWdY7kjUTi25sPJCS54n7Tq6mHh7RxgAc5SFny3QhVJ1MxR891sVLyp6p6mP2WmhrRTpT2y",
  "key11": "57vRGxLLbztRT5EYbphynRFND3p2mb3VtKJrEshjvU1XqyFaj5spHtBSnx7YSNqKhFDaDwM1WmS585U9KjgK2Ge4",
  "key12": "59BChRps7NMuWqYUPMQyDvRWFBy4Vm7LX8wXB6JyhcxtCmj8raw9VcF2QeLLoUvfYeYgGJxUNAK82AjCyTAxgjC",
  "key13": "2LBo17F6VSGGPDrBiAP4tdYXu6W6znzxdH7qx3arUEToYqiuK2syXVfowKFi347q9R9ZQYcBADnwQ6qCD5txTv5x",
  "key14": "4d2XPdtwV1hw6vXN6vgyfhezUwoU9FQ33Nc1sqjfTjFhCiSmgQhXXAQDxBNJE5FxSp74Fyv7tvR5ckNg1Cr9zjyU",
  "key15": "2mJhWZWvrMqEHCeQvo5REgWW6UiNRquZitjYKjWHoEdnJRNZa6vgq1Le43vxhwhCFmoFcerFbMjwFzJctUJQ5rPY",
  "key16": "2sbcSfLgmYVXWwtGL42B3tkaecZABHmeG9JunVVkrMHVyT3prcfbZQMmJPsw2rZVzs93MimwvCckzSFNv15QFQxL",
  "key17": "3HSBNZhLYgSwzH73MtpU4E5qkRg1ZCmxA55CKYqNXtKSnMhkK3QAckW6ZCEspjbwaZZXAtrq2XzfQQsHSBfVaWc",
  "key18": "ieFm3KLn9rBLwjjujUU2XMxjf29RBD2zTzrushwbXwFt8HVuByE5iQUGhJu15RTKqJKWyBQjDkfJbbHxDNsZVSm",
  "key19": "3yuvsmnjopUs4fqNnZcA8kYAcUSZ8oXrXUfta2NFKvDyMRZACUfxsW8rVtru7F4jJDhcaeWZJzyWvqwar6g1un9Q",
  "key20": "qQtkDpZtvCvARewDkPMyheYwCMitAF2CxLhvKT9RKt458K5YXp7pqZn5psaFU6ZEbrHNJjKHaEJZxfwez48nkxL",
  "key21": "37wcANgUTf5M6U8gDgmnnLzQfS9KsUEFSeiCGGUH6pZubipU9EoPvnc4W95maYGRHzz623Sv3Z9uqWyXowh16SH6",
  "key22": "3zWFUKzkuX84J2dFbtv7ULbfc9vqxBiEyzJeTf9vbaZuBh56jMJsELfKyyDWj8wMBxCR5wun7nCX5wiCc7P2piFq",
  "key23": "5MN5m1GDRsvn1oDRJiVhJPpEqU9j5kHbKRQaSyZxyT9MYJUrJk4sDLGrz7J1nmyY4VotUenmVvxFEFqkfkAK9E1K",
  "key24": "4yLrKFhPTzyqSBBsdaFCsiSshz9kKrkEXqP3hHVdjBTWkeGiA2FeqrQc73zQnYrPZnWygkWDS94S9fH2vEBXxpVd",
  "key25": "5FZ71Vao8xx3hXPqSYZ42cGRKGyvavxwwskye98k5NbKY8tqXVejZbvW2E7rzgMHnq9rhHV8by4qQ9Y5unXFKBCW",
  "key26": "4AVocr4wMK9bCpAd3raKtczaKc56rDWFiuaiaibiFzF8rGAGzwWqa6TW2fdWBd2BbHG8travUzP6woD7E5NAfdeq",
  "key27": "25fwJYwrJ2hTwU5QpCWpWcarLuKKSCuccu3fZ5MgC6EWRR6XWHDDYLfFc6Pj7px3EkT4QA7Aqcjzs6QmquvMbGSa",
  "key28": "5LT3pef9Pqa2Y2hXxGEagpSf98P8aaw8zMqq6JSK6k6LQE9Zfq8YD36dDWJddJDoLDp2X3TpVNQT6R4uJVvuJZN3",
  "key29": "4zZAJgEt4nV2EB6a374p2jTpzq29yEjERpCrmCqZ8LEzAKroWE7DntNz1RzciNwBKSpyRFr9v4cCA92LfzJtvgBJ",
  "key30": "4x9WAHsdH6mKBqa75vN3n1W6K8eLJjqsTVGcq5gWnz6EAVBDwbBk5C7eJQdXirCBLbMCvgvMKt7KtARWNd8or93d",
  "key31": "4xQK3rsXC29irTZSk8qbv6AdCGKuhbz7qLhb9gLr88HjXtKGjFMBarkwxnNZZrMr2daGSDwJN55MGZCyXEnMGjCj",
  "key32": "3oE5VJrnAroaRoQ8Uv5XGepRU2CT6HJjE2ogUfjA8g2h3fnUNv5jLwfVXjJnFrdtMPE4Fwrm6occYwtUrNDXdZDR",
  "key33": "2tdB9H6epH5sV6vhFi7p5yV2K65gnz7FXDxcTuuFtqPmeFRVvvWchwTxfstyw61SdMNv597eth4EKnn3jvrNtiYt",
  "key34": "421iLpdTS3yRf1iUDMzwAekND51rVySUHUsEi8AcCZe2gDobymKrydoj7TkkrhseRmuqikKic3swUmSAbFZKUe5T",
  "key35": "3UEtzPadqfa7SA23MQi1681EwSUR4ptiNCvu51ra1idAUawCydr7DnsHXbNuN7SbexKEiRyUXXVSDrkBBDLzpaeA",
  "key36": "4GiLBhucd28vZRFDfdNvF4575mQ8pURVMiiZrivZzHVdBeDEKB6WDenCJvZZaJMup3HfQc4ZMp7TStBbrf4J8Nu3",
  "key37": "3UAAoDaYkovTA2Ak5W4K7kfabZu7XZnWVPtruF2jzdq94LSdsjcy1k5PYKccrw3S91MwtqaKk6nkbyik5pmEpMJC",
  "key38": "2rY9PF8XgxvfPgSjBqHWh1oT3ZYYeVDAcdmoTFkE6FmvUwVWQa47chchqk8fP9huoRM2ekLMbS84ztNHbNyVTiFK",
  "key39": "495zodhgVDipfZ1Rr8ySENzPNu9y8jFvVgcJHfn4u5ECWQA2PeympjPyyBUttWpug6LdVcmnpnfpb2KVfkHC3Q82",
  "key40": "28sLCAAYqhd52sAHNyfnCfLLVP7XypBjdDeKBqYd32tSMtfGZHHGvAun6p2FRp7KD55emyespcitAfhKzPDpZHbG",
  "key41": "44yc82r1TLQdVi39ncigSySvL691NMk7tkb1c3ris3ACLSkhX6vxwjGUZ8Q9LoSP4JS9hARMiKECwiVg9puqEWNr",
  "key42": "5Z3ZdPyLvfLaY9oqZiK6uRmEHFug2BDN9vFAP5VW4ts2sV2TuxukXfB46kQP3dHJBsFK3ofHLy1QB7whyQrfib3P",
  "key43": "29Yam1huHMYhB24VFRidt3aJRzadUTcvVriid8Ze1a7jEtinMz9Qghq5DDPZh62Db17uXgvaDHFE2zLt894CmGge",
  "key44": "2XVtFBXWtuJeoxt8hc4t86bkVqgyaKB5kVddMGPXLMJnden8RVcAqSqmhmxfxi51QKWyo778hLWnmt9YNavLD3R7"
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
