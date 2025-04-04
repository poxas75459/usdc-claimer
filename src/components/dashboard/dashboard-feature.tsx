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
    "37iGupj16Fec2qx5G2DDf3MESs9MSyYGriMA1hFGPH4hB2Jk3UN1stYzGKmA9jTuHz4kVu3NgirDDCZdwD6fJuyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PR66ZT4M3ESMccmDS9Pt8Er5cm4BenNc4wfduxhMsfmkv7YdyniNMmJEu1ayRx2WmwaPyiQg4YEPpkzjHzestnN",
  "key1": "582ssssqtzFD1g9JjoPyHsM4cAXHGAZE6GwntBWXQvpMYncScguSZbNX7TyHGoZUsiriYN36vBvGsosY6qopw8rC",
  "key2": "4pvemcXxbX6UwnFSMvj5PocS52d92FVJXNDvP6yqrjCrn8fJXMueNsD1gRAYx2833t7ZVRtBYnWscqDioT693qZp",
  "key3": "425LtmUYDsTuWnrPefPNWxmJjGukmgcRQb3d1AqaAnDL1Cw5aTAMNQBJWJJXK7qB8wQhm3Xrd5qrQnj4Gv2erSqx",
  "key4": "2mmZ6c9dzTkYBZBcBpaWouvZyk2tBeNRq2cUHwEPhQVonr7bX6S2G2wH2gfFLfsuA1BNczJG7WwHJFgsKjhV9TJN",
  "key5": "228fsqfozigrsT16KFfazWmc9pUUPTG7kStRHzBSdc74qKQzG8v4MVpSYjaFPZAvT3CTnHfqEJgishGAyfh2U3nz",
  "key6": "3iU8ZKHn45imo9bpPMXYcyY8gnsS94WMzuuLMtyyPhVxgMGYoMcgnJ8z1xJmuxN93R53q8zPFC6S2qEA8a259J6z",
  "key7": "5UjreBRsVqwiWDhyfLqitefUzHByGaHbYj2V93aPuL1wngc7o1xVyL3rPt9iwesMwCZUewoiySngcPb1493DRrwC",
  "key8": "3vk7Xqh8ivRj4oFx1MgW3oC5HGUb7S2ua4V2mS5ek6fhBoYNkwRjxuY2mmKscFeSpWFL7uxxTmpjyF3d5Kh67tre",
  "key9": "4QkSYTVRonzEkhAQng9xMeNLArPvEzod8mT7kvBu3YiA4Hyh5BAysD3GQJWJX7J1n7LxFbw1SMsiNEVdMu9ZpZa",
  "key10": "3sVvNUb36GAs2aj9Ggh4tCaSHKeq35BCyiDLb1xu6v9B5WJy3CFYjvX2iKGSgrVYRSQBcfvc7jD2bQ1eaoFdKk1P",
  "key11": "3QBZowAHsS8V6t1Ve27NREGSU3ZLeQCZmasjXnDoE2xe4AwZeasZiB4eYrm2iBi378y3AqiWxc7rR5Th9DNn8Kw9",
  "key12": "xTuTeTtDBPjG431vkDtyyYa5VLj3HTekRW8CEEtV96MXEwU4LaHdXRhuZs5U3fMCPArT56ShqihTysDVrJkmTJy",
  "key13": "3wuDHygHuH1iHG8vLHRi5RcZhgcKPcT9x9aV3t5omGzLAJU3anGycdztZWb5wvPWEUW2yiDamUd4147HnXrdffoC",
  "key14": "Q8ongiBQmQZwmnZkpLippUXY69oPTsevrsgfDacrcSBh9waRUmn7sL4B9Z2aaQHKGQKkAQr2Fn9iasj2qvukEF7",
  "key15": "4MR7UjDXVhf3sopf5BinwNQGrECZmC2heV1muK83rv3oqwQMC41SgDwhx7YtsRHsL5bxrYKjLDsKX4mQDc2Qd2aD",
  "key16": "2JFQv8g4izpUxSu4HGe5FQ3LF8ssyYWdjdPp6vmbV8ZRnhJnHVy66ykRgUw5mJsFVC5hfgiNdRaLDBM4GQAvjST9",
  "key17": "4moZZZWNgZ5XjoFHLPCPaMvNFS5E5R9jH2vmY6hU8XP6hphevGf4sz7PN2xHcjmvCEiwrABXZ9tcZSZh4XhTMHfC",
  "key18": "3PC6BkwkgyZ7vfcRUZds4jymxWxMerevv8j9ZowVqaFsUBcdjGEnBZ4iUicDNHKUqoGBRvA6JV4hqz2iuXuRKDRA",
  "key19": "z1pLXARCHRsYhPE2zp5DW6wDzYEquuDAG8cRQQGfsvsVTM8VoEyzjuiyziCsLFCKtkWHcSkC2X39GXFoLYdpDv2",
  "key20": "3BmSsfVniyChNDqVpds6eTmRnyBEHC5Juetot6pumSzLHAbbQUkDMSWkpnUaGjZPPust4LbyHjV1xMMxKfjZqfc1",
  "key21": "3H8ToiTtB5EyseHMDnrBq5MUYwZrhAEjyXgQ9keJuzxvu4ZTjrWeeG9mZNrjYY95PVqJMAMJr7UaXuw61Hkkfj5b",
  "key22": "21G8WkK8zXWTTy7qYfHv55vdE1x9dteiWNFfuRLMoFrrWSiixvp6x67FHmyhcjTQcn64muyQgvHy46crGoFVaNxZ",
  "key23": "4y1crPUZZtdmULM6qYkwjQFbTBp9NR3MMBDNcRXhAGoTMCGvMkWbeZC7g7VeRD5qKFBuAFUerQbPHDobDHztb4F8",
  "key24": "kE1BPod48WQhMBLRhvWK7BE56gGodz1SUszaJKBUQrKwf5Nw4k4szJeP9L26zwYZiCD5j2k2UWj64Ldm21gufKH",
  "key25": "4JQvNPvdjFKBxbpcH6mwZFZYJxn3kXERcXrXcmd8JEJJbbaAVf4tr6APZm9REyzg1A8knG3YLBwSm7uD9XxRfQhg",
  "key26": "2gcqSig13xDRnzLZBxyAvvvuEs3jvsoQrdkpnTeWL8ZQo4rJPWE2oqnpy8GuDvwvn2eFDhtQJyf9WJN3L5pkThJC",
  "key27": "4ZwepMaPTMYDf93mqka34KkWUytY8AEHeKMxsY8BGZ9G85Z4F9WXnb5jbmk8anuCmxjtiutLpwp1sT9DU7pJW1mg",
  "key28": "5azvEVNriauMjqPYTEyphEBSHuqCaJ7Q86Km8bFpn4WDrUd3FqvFiyJchXto9hDWSKkc7z8LJavCR4YrM7d9Eo2c",
  "key29": "5vtYXKDecjCJQqRfoc24KZoriUaNWRMrn3pFWrwN38cVLcBmyPgPrSz7CAdaVkj4USVMufjBKU7vUHW8AHGKmdiW",
  "key30": "5WLubV71pBWeEPcKfm4SMcmAeTDddkJN8wiLWL5q9XUP6dok32LEcV26C5AWLfZ9pJ3xKnDm8azgufxptByMVp28",
  "key31": "5MaACcp5546xLPrMnxFugDkZTVS2Vo2QnAGfLrcg6mxjv248wkfXqNw9VwnzDWzYaiT45uMtioiE2Sr1PHgBTQob",
  "key32": "3ZgcjHyzHbkXQVmUMmHUqnHB4mkXzLNqpzhSvPuRx5zGKtcvnbBVrhUFK8rQe64iyiXuw3nsnEUcT9PgC1kjuWyT",
  "key33": "Lm2BnhDbACsuSYaR7vCqKa33zFq5ukTuZ2viUXtGdxrk3vXPBEtsLbSERJinumUzsBoGinRMU6neegLH14tU1n4",
  "key34": "4ogZCcZjzteh67e1xjK653gJr4iVeTERZjFBNuR22M87BF2bELLEie2r8LxHp6gzXeA5xjHnu2AmR8C8Umi5ez9R",
  "key35": "48TerjYNT2rfomjeiz3uoCKNTni61tBj6qqrErueweiH9byqZVm3tE6wcHFbCdb3sxZ8aSTRgoxjY5ee1JnPpxey",
  "key36": "2eZ4yAABTdev4YrzoPq1JrshUu5JHjc1LHe9mmD84bRfssDTvnQNzaujMh2Vb3wtXPRkWWdwgWiJ59gYBTZzPTZW",
  "key37": "2HqFce9YaTMQNUq79XSkVz76exqijYB8xSpBNT8hZCtxhNDn4vytwRShfxQ4dn4k6gcPAEfGf9Crreeh7J1oP5QT",
  "key38": "3om7TB9NDaSs6W457HkYVhH1JtSxPqwCtJVo2GJWZ1a12aDcSiqoaaGFg9nFmbLshd4expGUdedBXyMLCNcsRbs5",
  "key39": "5dTBWHCuSeZUNmYhwSFmLaDKAmj3wXUvChZyaWmR52nBm3N7Fz6rgeuBMhvsJ1ThSnLJQX6CqEDm91VABmPzTAhJ"
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
