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
    "4Rf63rFvrBNFPdTbtAiG29wXUmGjtt3UUMabh7kHKZhjqPWR6z4m9xQYXUfZB2RHNbVrZR95YBhbQeA6t8kyRhd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "384y8ZsFx7NnhpruByzVbioRDqLEZgNKFrfDP1U7Fkw32fVwyKzBocGMM1j2NZxtEasjmgnyp9GC5NpvNWCbcbqD",
  "key1": "3tidKEqkRBpUqt88N8C4t5XmdaGEkXxp2EcQdwEK6bVZ2P6wf29EzwyE4gBU7oiYd8WiBAbMzZREarTVs9HcQWYp",
  "key2": "5bkTzRBKMw31op6nd3JxCYxnYuaAqQeq1FedWdCfhUdYtCcoY2DfUGwR3VtszEHQ9xDkqE1jvxHtJjRDE9b6Mfx9",
  "key3": "56MkGUaP9hEQ3KCJvZrgt45R83y46EizpuJT1qwSimWYBSMeV2KidDtL4pTmFvFUqY6tWvCBkLRExzhLNgEAHKmb",
  "key4": "5qSsCsXWKYYbiCY9ffkTQumbQsmBBNcUTDsi6T4WHJq5yMTVH7YWpPh6DEb877YWDM73wx8VKCEnNs1rKByFW6z5",
  "key5": "PNS3rU3KootZ384f4g13zcNaexQfmHMFmhEtCAz3n4HjseVvRJAHvxHhxLQ6yjhtUgzzuvvMmAkPUBKZQGokS7e",
  "key6": "A3mfgVreCvcqfZyhNPgDQVBncWouMD88He8K9DCaWmrajqR2oFW3tk6BcVE7ffv5jBL8A4aEj7Q9xyin7oWvNJ8",
  "key7": "36BEzHPouzxwRTcy6ESbiaxwf1PkrmXaFhYtqJR8CJxpV4B21C1UXXj2StbfUiqCopP5oS7ebJWB73qAkzXKAqSv",
  "key8": "23ugfEwFLPJmqysaJLQRq13bV3mnwgod1DYzh27k1mFm6uYfbfssMQgUExCvLPgbZoDkFKXQabK5EqWwTnTbdVbp",
  "key9": "37J2YNaGNRLU6JiDJpxiBddzgBDELaM2BuSdGtHYVKUhWdZwG5Y4ksJ69144W1WkMnhHXL9TUUDQJTNFVrA3yaf1",
  "key10": "47RWmXjyzxG65sktZu6Ns7UGjKUFrY9PwgyhGXQ98rVxXBdYaDW1hacsYQ4FQ2UK9LqToQMKLPDxyJrhLAwP43TH",
  "key11": "3GtQy67wNJJ8VrPXNx4ym7174YQ5TVixUd6jgdiH6kregs7or14LFHsc5HCMGqU2U5GiBSQzW5yDdTQATqeUZnXm",
  "key12": "2ZRFHc42SUKbE5QyKAJL7LYg7Avyeksu2rHTkekTJmHrMqEfuX6tXZFLVJm9uxALJTqTztQu7qHJk1kgKMYNU983",
  "key13": "4XfJKds8f39XonT7LjbLnvVmAK6tnPB46yTsMm7vB6XdSJnzXP9j6WqiWwbmTLy2QHAdA3sbZi3dqFm4fq1DUSid",
  "key14": "5yNr7hNJ8WWpidU2FP47dmxYWo9Bkh9n88vCgHc71jfkwuGVgJ9BAa9Exmi9iBqUmcs12cmTt5R3zZ7yG4K5y3o",
  "key15": "5AJzvM4AdUifoauD9VEeFDKxoKuXCyfBkpBmyVWVNdRsywRG8wosCFFFJFhSa1c9c3dcJy1xKvVu527bbCH1ZfVu",
  "key16": "3YyiSvCJhz6qbPBzTBwA73nrJuCABj2N2hMSob7RzZ9Gf9TfgMivaLWvYP5S2oNWfruiER7BJQVHvij4s3H5Y6FU",
  "key17": "3pK6RUvw3ccMVGgMeDSPRgr8q2X4cPgQMYhqs94B7jQiimp9Z6v5pDYu4ebJLzkdwk7EkuNYdh6Rj8sbY4NZkgS1",
  "key18": "2VVonCwqvwQH4xQih6pNVzuTy1bc72GuirxmVrtQpo8oo8yyFF89kmwc2o8rcLd9MNpvmtQkLdiY8SJm6ptL6xcN",
  "key19": "G9frgQY3w4JwarpALuEkxsdV3AnTRaVvYC3Vvs384MRSAMJTE6AGHSKRfsmqWTUB5dwd5xSYj9piiCzP811BoVA",
  "key20": "3Li5Pi2VUpVvatH11oj2vcBBZfdsx5vMjdGtdfPJbjgqXfNAX7msQHeXvvRCKD4hdL31WmfkGFvLEJx7V9rBGZBf",
  "key21": "2R5XgJCr8YntJ8VzCMH2t4hycpsmSJ5PY2dvPt5DZfgr77exafuHJZq7TqL89wT7t4Yqma242X2sDAf9GpuZjNrc",
  "key22": "4mmm3A6DNJKiNwCfW4aeRgZ2RkNpcWF7LzJXZ95fPCBjRctwsreNDpyzF46hrMA4CUd3L6ixQm3XVE7PeDXfnx3m",
  "key23": "uEGiAgaS3ePckZmBDv2d9FcWdALewzpBByrq4ZPMNeDBf3nbegKnraacEDJBnvp7pDXTfn9AyfVeBTuPiw9xuys",
  "key24": "3Fk9r5U76SH1REmB5pkEY5KNDJcWQXDhtjbbK1cy3Bkdm1VUAJYD4RawLLSjqHiwp5GM5jPVN5j4dzE7Q8dLS6Mf",
  "key25": "4U8uUZg8VMKQixeKGpa5fgcq45FYUrcwA9UYNi2DdhiaZGyKg7KVqJRf8mUzjWpoj5epQ9hxHJWoBAp5TnM4MqQk",
  "key26": "2pbq6FKYBe2L8DjZh5V6tkWPfnaYL87eRKyxSCsRbFt8fEVCt2cDiyRNhfjqVmPVByiu79Q96zxNDjFLonAvPJrE",
  "key27": "66FNbgkwGWENWVzmtUTLywiYacTgbWCTbnSdUaLnvZ5Sk97saYEy5ikAWkrUV79zpjxQFBVVeJ7ksPq9fPXHFLtv",
  "key28": "3oBjnPqmzwA6zDJS8gZpbkRcR1vLktFbrdRPzuSNVuE6UpmELamqfGUMdGmNHoLcALHnNUwSYnXoupHWyZQWdF5J",
  "key29": "398DuE19anRbN5ANDNCLwVPCiSPxo2bkKqAD2x1Ka5tEKnoe68x3oB4tmn2TySYAsnyjKCHtCXFWS1X7wnoV9CWL",
  "key30": "5smbHYXx61Ea8PmiBxXg6ferYz1niyLm5vtoLuEGMWGLpQPSEbzjouRQU5FBUzbqQxU3K1UsBunG13Wxn5R69jjV",
  "key31": "9XPLBtobNXokKNdUP7nwgfPA7RmsUU7Csr5FYZDQPBqAsVF4ex9Lb2rb4ZmR2z7Rni1N8Lj1T5ek9wi66ADZvjv",
  "key32": "2JqGm9a4dAgx3ojTrjKkqfG5jeqsJJ5z3ed2rKCySLr9i7MbV5PRUSMmPfwm49zV8QnfpmCLNVdwf6CyYuz2yQWM",
  "key33": "5foPwQ2VUqyR9eGWJP1AtWn7dEzQeetxadf4MpbowSRiSZXWQ8Ybg7qPff9uqa3LUaKdihkxkwuSjfgG4jDbu4Fr",
  "key34": "5xTdiNh6qZqdWjTZuW87rYy5GQfVmepEzhcUBcwt67H4V3RRZSfY24GjZr8VSqQqNHEsszy8QysGWTqQFPQWMmtg",
  "key35": "5tfzWmJ5fxwWSaASEVNyynYNW5oy4ZdRdKZuJg6maH4a4BxQj6xRoZPYij3RnRbe7ArjKUfboq888F1o4H8uRjGb",
  "key36": "2cMypzHvRdziw49K8bxu5Z1ZNfJru3MAaTBmnB8tExUHkG1E5a9jsEbfQfNTyTz18hjx2uFF1KRWSGCVYed3V4qr",
  "key37": "4Bi7jEYgmE5yPN2NXLXP6CpFswGUPGsBzgfwd1SC8jYSfNm5X83pkMzJQimr5MXP42w22aFvWg5w8o2X1BF1eVry",
  "key38": "4bbRWnPe4jaR8uuATTiwxYxYnXKkdDZCSPH1eEWLGJbCs7fD9XxJYYgGQq5tsjicAxyMfk98ahyqCTW4LuFkyqYm",
  "key39": "4pvh3YicKk43x1HWyCqQmRaqYYV2JfcJnyq9pxQkvEnMDcymHCF63chpUKC11HAsCCertc5JjAReSiPXmBSgAFG",
  "key40": "Pg2JoDDxsC2Lzdy6u8hz65ZdNhUSZYh3bTLZ6qpLoFdb1Q68Cy9KkmcHsxvkqcrZYA4QTCXBiV6V2j2NaGfVAFX",
  "key41": "3XATgYicz7AG96Z1eGDnfWi4V34DN7yEbSfFbTvQccp6APAS7f31dSPiPPBZCBaTBGXonYkq3CnM9Qx5EMEMByPA",
  "key42": "ZrkuJHBgLVHWvdmAZEq3a2DTbfUQd2LVuqdf7FGCgQDBbcV63pmjKw6tfqfZce3XnAGG1pZ2iZ865heyRFymssJ",
  "key43": "4AzMVGCdu19DRJewGq4qzgPhvdaCpU1kPTj8jCK1Q4Mr8AZho55N1SNMvu5TRpYRwWD3Ezk4NioyxNXFqPcExWas",
  "key44": "5GKKQkcmQXEbgoeMRRQorADTfpGwvZ2DkHW3hkckTELyd5ZfQZo3wm8arJKHw8cTks21MihvHN4PKpeP9vi9vbp1",
  "key45": "4kba5eopNM6FvbydcsZnLWHL3DBrK4NJa7pP3uYuKFnQwxxWEMQMrm34mVoB1da28ND6hQEYKUio5YBXQS6NH6Y7",
  "key46": "21H6agzjPCestJdHu8mAdnefZpRzrpJL6sWFVwax8bKj4pJEGaERtqi7JMNt77MuHyu41ATafbCgVmeKbdTPhMRU",
  "key47": "5u8xmQUG2crUa43C1ckDFiCz7ecym2wvrsAer5AjTdruw9g6iSxAYcsCJ6adjHE6rDgsLd4ayhBvYrVxuK9XhzKD",
  "key48": "46ArX7FBmaWWUdaS9Ey9Wjs4oFY4NmBX9mtwAAvi2yinPyoUBCcwRq5ztdopuXoUmnPHWMz9eYHXR6krQgoG5Jri"
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
