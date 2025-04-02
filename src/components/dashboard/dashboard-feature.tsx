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
    "65yUSWwMUJkaFpi8SGpVZqySLt89MS1st5UfXfavmJSRSW3GCJWoXot8H7yiJdzF94buCM4KTHV7dJzr7sqJAJE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BmCDRj4AZvkqBwJ2PjfNroVkQ8Sj13ERXq7X8cDezbMSKSv7gFNAY8S7eZmgDDWAmiRyk35FrrCL9YPb5mcS2iX",
  "key1": "2QQwzGVHKVZ6SB3ZZ8TUhr5v3KBYMC5NBjGjwy4FUkZf36nP2twNcVL1TBjwusJh4p6E667fMKX77a1ZeE1MGbZG",
  "key2": "3RDPUpGtaJRzxHxEE3BHP9dHJP5gExzTGsD3GdeDB9qS4a6XYhquqyEtnDUxPuEeXaSWa2ezH7gsnQv3K87JhK7R",
  "key3": "4NHXJf1MGy4rECvh4E3gb3mJ7qmTHbjnY3jgcYUSJCNGyFXY6VtM6LJcfrdAUr9HZWdAabCLV6FrKa24cmj78Vwf",
  "key4": "23VztHmex48SqYb5hhffCvm261G2zCswL36r4ELf6Kg5QTejYYrAdLtQvyZUPUmomuatA2S661cF54NJTt4rWNUs",
  "key5": "2jHHMfrqfFeQMFaKFw4iCPMCQC4mcvPiRD6AURkoQTZBFuaYzBiaAAVWGZFZExAT7vxebJgy3W4KjtwxJCWHnUfY",
  "key6": "3uPESzYto3ukUirbKSoPXqR4g3V2LG5zwGaAMWKp9EWTwQuaSGKAWwuR8A5BJA1jSkMDkhiE3hbCpYjfZcirbaE5",
  "key7": "2RQ9RK5iMiuLdfpRNjn95GdC7uvLucS8ZTbPKvvmxw5TuXGMpKmovB7XLbSSJZjUT714QkTrQj5Z2QWHhf4PmTt7",
  "key8": "4dB6fY11A7KC6FrejUPa2TkyThxPoDFuSUmv1GArs41mwERXo5eFELtMgw9GTPig4Md9nwFYU6tLu3Pruvgmv8v3",
  "key9": "2E8rJnSyfhgmthGDsMnRMEXkzD8AzFRowZkGJZUYPUHVX3Mu9BzmhSjPAH5H3tKU3Nvt2rRCtcSVXoaasxgwsmQM",
  "key10": "LQZSun6LGgmBoBr3stRrnBRr1SzXSJaKZE5jJEWNq7yZxvDw2ZtSJaRSKR1r1TXBYroJfvhCA1h6VG6mV1LXjAp",
  "key11": "1BRxS7WwFRAghtTMnRMkwQ5HcVYacgp4Tc89zuMNsJMVBkjKmb31FsngCuX2oYWoLVUT5WAaE9u8o95PAbtoD3k",
  "key12": "sGqbs3P8G1HHQx64Mw6h4Ticgs28JUxCv2AH3KKVrUMez92EzxLqzhb7TrHwmQTky6GfqfThetdbxZgeV9rinEY",
  "key13": "58A8w3tKpo7iU14Qm7N9qabj9iKfGXxg1M7gBnR268zerXjr3web9suUVBTGe3iszbiN2koHYH6U5N4BoA1yh44P",
  "key14": "3xd9irZ6xHUTgTmV4XkKBZ9r9Td8E681tWZMjjCbuY4nHgMyiDXdjekutk1vnnWoRTfNuqNZh6GSmyN4K38ojkTx",
  "key15": "3c7hVKjCM5iGJnhzZtV5QN5usAz1fPXc6LwDuUBVHq6Wp3RqRzCNf87SCdGjCxAjB9sjN1R19crWyp2JK2S6UzY1",
  "key16": "ufGLHMnof5USzmTKffP79eCnKe8MazaGZzZHVgc46RD7Y2vatN8PjBVdHH5EP4qvXjMonTDvKnXY6bXDhAWktjE",
  "key17": "5E5hUhKKyDPwQYUm2Na5Nz9JKZ22GVhe19RckuDB6nk6EwNAmpFCrb3hsWj94nLPEFZUnSCEj6QEc6To2bZ1KTAa",
  "key18": "Adf2C5wYgRqrKNkNvk6ATK4bqhhPjDsxUE6QHkDAPGQJT7FeiMFHHqFdWj5BAGdQQE23EGmm7hTRo6tzHTXd7wd",
  "key19": "4yPHh3ZiG5GkgtDRY2njziu4GwEYSS4RGGkfNGxKoufvuSzLU1GSwfedKA3CVhMAsbDtyfkC7eh8JbbZxU1HVpay",
  "key20": "5jk2SRvqbPY11iZzZywYLwUEL4D3NZPNRbpEYaTMZvMqAu5JnZJbbUL93NNjzcnRgWnpdW6MHwXouzPwaaU1bZQU",
  "key21": "2SeVYGZxqcyUsdGgQyif6WY6M3JmJMBv8VEhxXeGHWMdvy1DSomi8L1xA9FAiaumPG6poqBH3Z7JWNM5Hqs6YM7K",
  "key22": "Sef3GpmTd7JDxN8ZTGz38Zn7T3ksnCWDDQin6yq6n7ppPb8PzVM2U8jMgnq94pZunGULvRm3mWCe5eJazLiDg57",
  "key23": "216QAB8fiwZWEqyBF5YfZ8tDKPqUU7GQMQiJj3JG2MoEuJXnAn9YjLn5e6ZdDdRWhTPcN7G5Q32EkxhW7kPdLb11",
  "key24": "5b4W2SnJfx7GSXrPrB2zWogswqor6X2DCsaDMU1sz2Nb3LXAFRe7ddARVKAygE6gJQFgB7hkpreqcZh95QbQgYJP",
  "key25": "BuZqKe8WCt5e71a8CUzUm3GXmstPSdfqdhkSVNDxCDVZuvfYJEsRh6TPC1VZPRighvVXjMK94BL63XgBergkWUP",
  "key26": "3qBagQpKqPHEu2CS4dsnxPxacnrzLbxcPCe3ZWGfx3ehFLdeFs2z9jxhkWzP5fTB989MAGHGsmWKQHP5hSD4QYka",
  "key27": "2htkjyfjW7kQnaUkqULCg3FeAKr1AW1qVboj7XdsDjRfQeapevq48kLB7Vreo74pgyx8nn6jyFonsUe3hX3Rad8r",
  "key28": "2DEcHz4pbQ9ukyfUaVmarCEDvEjmDJGC1vVvj9s9qYCn9is6PyeYnhdvhiSkXwtfADWnWQLKQqKWoAPhnHojZKxi",
  "key29": "2U1tW3JV2gDBzxTPh5u4MZPLYrXA6n4V9jzWk7y158qVNvgfCJQpu5yXSqu2XCoCacdernajhhopXWgp3CX2LJa2",
  "key30": "4XMegQdbLfE6LxMxMcgqFiC88t4rNwEzVBk9juiPweLPBTA69rWKVjGRJk5Nj6xfAHBkhJZrYsczMDRuQnB2cENP",
  "key31": "5jH2nkHNLgwo2EBrTkfSmmSeiiq9E6qSX4psNoPAXcduHoV4VzCJhzRYBjQiuy4m2FkNniYBHwZtgVpabi8efyV1",
  "key32": "48e6TfR8MRosedjiK4LnS5DqxLRJAgzvmfzPXdarsMUGeoUWWWCb4P6SPAzHQk2synTbziU3H1j4sNq8YsFCHJQS",
  "key33": "35Grzi4oiLDoQHbGv4h4YWbz3B4HFGK3e7EnxZ6Wnf1b4YBSy5q6b3uDbSPLsVMzHZviWKq7uXioKJe1SA2yJQe7",
  "key34": "a395ocYctnHg5AmFCxmoaxqyba2XaqhAkKLBjEqFEXeTcr9FanyaAGKck64YUhVNAwbCrxQQosKrJ9JEKrJDPbQ",
  "key35": "2PwBeVH3accSsNXjraY6bYZ151RF5Wyy3XWfbSTJM3Eo2b7FDcmTuRp5JpQ6rnNBN45uo4MqUjHqQRGKk5kYe23R",
  "key36": "27zbmqeyCGYEifGbF5sVgTXsDY2HP5U3aqHRMpcrza6MhZcJaxrAk4jwXbvBJgZthWQKF8FDQ4gMiakHsaFxiKuE",
  "key37": "5csL4FnDSJE3oXcobYDC9MqVZCpTykv5XqYFBMvUn8wjyvKxBtP6Bmjk7wx64TKQD53Qh171Zv3Nx4Jz7WMBL6Qu",
  "key38": "QyD7SHxHfsivLvPqwovTGUkXuRX99TQbnhjwxvjmYjqMEfdMVg1fRA2Nku3sqG9x4iArCbFAxHG92bxKvF3hgUn",
  "key39": "2ipzkmGDDxFC1udDb98GwD2BUqgq9CmhgCMQWLVFi2PapKRE5yZoGB6x96Ym8VhMdHe3qnrBAWaUVYgwU21Dsh5g",
  "key40": "2XK6Vwg8m43Ym7LFyT7syTYe2vE1VLUxBHQgGwJuh6ZS8cmUWuX7J2cwb1D1kqTd2Kkn6nu6Yj7VJJ1YWXJtCWxW",
  "key41": "4959sP4GxTfZqTrDdykHpDbbsxvxYVfXDtbtmhuNyRvaoskbpyUWaucXK3mzfkUDUjmMUZyjzNY32Hd5mUu9262e",
  "key42": "3gHNKVBHvrkXXn1YPWq9QxgujDgVgEKYVyzD1GDDLtN8xeDQzh8rnXbKMtfraGdwUY8i7MBNvk6x9gVhjcBVc2CA",
  "key43": "4QCRwv7TaeiHsmF9GUSWojPqoBn22FzQ3up3FUzZuVKQPCGpDZmwtfLrQ7bc4X4tQRgAApwqqGjtLy5Yh3iPU7rh",
  "key44": "RnDpbKbHBDyMCotT2cnys6YinMkTNDpSphtwkffF9f4NQWY8Z1eYmBWi4JutMrFhSpo3uBMbPLFDK8EJmetKo4X",
  "key45": "2TXHNCvutMMyRwjpMWfV98aUyabKSduSpyBHpCxGKd8bZGNqYiWvy1Zd8D8f9zBxBMpTgmyHWcApgRYqNj3qF4KG",
  "key46": "2u6CzXzPwRYYrE7HhJUJrcrjYLZx4W1xEWcFeXF1WfRp7V7WK6UYRBxcAvce9jjk4TVZZtKW2AsBNkxMQhcLP4LW",
  "key47": "5ojDg7RAGQQqBo71qzuREYk5BH5hZTfB9SthatF9NN2H2FG1KzVA6prBLffBgWZbJNZrDYYyhQkqHY6LW9XAZCWb",
  "key48": "5Nm5QPZTWcKo71CdWL37xwgvjLgXSTk3JCgS6VsDcheZT5c5q2yvkdTpLoA8e8ERSrgRGbHFz5tFxANoaDYKCc9c"
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
