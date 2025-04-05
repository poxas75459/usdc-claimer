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
    "5EtSFUSf1ygVBjJRuDyygoCqbZ7Gs4hbXGYVXVcHFhS2a9PEJ9aVyCeknZCPTTFrbD6tALpv56cQLUhkvA8sNXRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Jc2jyt7VDoPkBSuhnUfu9ABiadzZez2cKFyA71J15H2VXeLtc74fgiHTU71chYxH5ff8zjeKBHvw66QbsQf5U4",
  "key1": "48VB4PGqM38V7RkFt8D6ixBmVTG6b1tx2167yTyWb53qPLiyuoGRs6HBUF99FG8GCvK6DW87zaSFVeDxP7xUX5QP",
  "key2": "5V2fVYoRcqxX3N4XM3Z3ayDXLVpiwaByav5uCqXRHWgetRgmTgb4WUh1Lotcv6oda3bbVHb1gQfCvfBzw48paGHr",
  "key3": "4NmhjrA745onSotQufVok3xamdTr7yw8XyfUXo9gHxT4SNm3RrVMnSthnh255CcZTZ93evqyNgQiyDD1h4qvyPTL",
  "key4": "2bPN9Lie7h9H2gzjegz97NgwvQ4Bfg5K3Bj7SpEVLGHmHAbPTeNY1WMNkRCUtGFT41KbCPV97voK4uvQSD6g68zA",
  "key5": "2RJmL5qn4z2QGb56XYH21Svk5oKPdWqSYC6CecWUH63CW5f4K7f8vCKRGkyKXTiBREEHKnMTSDPX3Za82ocWXtWb",
  "key6": "3TE4tz2oNLJVV9xGqqnNJraZx7sRKFPJ6mHC4mCRbfL8e9r6DGVXQh3iE9n9DrQoBw5e7oJAJ4SLpTQx1whzgxCd",
  "key7": "49E1zUx9G51GyzJbAbc37pQz2kf4PgJmh3VKjPmqeharsaMziySN7VFkivfaDGNhq19wVaUJRKen72HXvApqwh4a",
  "key8": "26NwueVNKB1SELBqCPf4zHJB48ncaxCVqFXBJZeJy2U76Sr2dQ7mPq1MWfkMsS6oe6AzdgSbsjrMj6MM3wgvfwPD",
  "key9": "2wPYPP2iY3T44oDxyf9J4oRtA62WLXC5T1LmNMdaqewEbTdAMDFaBnF6JReJqH5J9oEZhWUGwtE81P9A43U2Csmh",
  "key10": "ZqDYicSrD3SabvTqVmoEAhsJhSv5YenXSET4ow4oqJnV1F3wqh4FZPHXeV6QNFtjYTpuM6szPRWQTn3siCEtcbt",
  "key11": "QzAYHECRBFYqdF3KrS37Ro6q3K119P17vVQVoZUgbD3BVHV9jQuMpsGXDb2pDNjKFRQpj8qabgUpu7UbD98bxb9",
  "key12": "3X9vPtaR6HkWw1hqoEUdatPKLs3qcdosbhZ7LJoL2uLmiMC3pAELRpAJTD7P1UiAw469w3DPCRAtVD3hjp5TwZth",
  "key13": "48Pa9br7mM4dZB5Dz3GiRCEzSa6xpUuoFicz7eaVnx8YMntTrHAbFBQjuAU8xKMu8TrxsUDu8PTwWavgvdtis3eC",
  "key14": "5eSeFQQQpToX5St552EaK7qxWBEAFTHz9htx1cWsCSFfTjtsgqwkNSK3T9kyuNoWLr5qMri4AfySfSnMaZL5dWLR",
  "key15": "5DGfjr56cBPvzrc1g7EEGYmn8ihTM7CqFFAngQwtanyh3KZ9rjhXdcyr1ThHNoRuTDMntk1qWUpSf3xZvsaXACC2",
  "key16": "4fbcjNPxRH33pwDsvKauGVFh2axXctRb9mXALt49QWcRwC1PMcnq4h4mtHoquqkJEnEQQDeARALVriv61GiKiMjF",
  "key17": "2N4NoJMsVyrc5huzm31kV8DfCMy4vVxTkfKSXsuQiT3nzNdgw3k8N5yYbLjDaXW1rWbWQhYVodgbREyoe94wiHrh",
  "key18": "4tEYrznzqcUhVvVCdhtpNYX2Y9qLMgBjGmH9pUtvzrFBEKjzFjCi5pazAHbWd7gvbCfhVvwVsu1dJP2RpFgqNzYf",
  "key19": "35Vu1aoEiYm3xzwPo75zYApPELiha4HppQAB1iEFiGpgpEnnyxhJfx5U8EatLziJ1zkp5a1HANvWyt456nWQTFfc",
  "key20": "51V94kexcJxoNju8QV1zQx7P5biXZgHMtQByFNDt5up7Dbaqp3yKeCHnUL91yVq2UgfUYSgLxeV4fRx2fePrRWbR",
  "key21": "BcZeLhZyzFKXKzB7cw9s2Y18snzLfzy6xb6wUxkbyitc1vq7HRGTmabDnD6X8DQKyqs3d6xwJKrEXUSNpCUopDM",
  "key22": "5p2me1Nda6fFMixuUMQ3LAw4wRFurE5m2VSia1ULN6YwhipEDqTr9QvfQWixqvWfTR48ScChLnbWZCmXmiUDQccq",
  "key23": "1ahbVWeNuEYJ14mQVP7jqTNx1eSK7DLzkrNcJqXxuyprvryDgQHj7SF3jtURP28EHqbcpJrBTDCSPWMfzeLmKLM",
  "key24": "3NktU6uFquwwyN1viVark3FoSskQm22HxupZiB6Df1e4PLA5Pvmmns4N7aqZPCfZb3iSw9m1oXmMWLYC8TWk153u",
  "key25": "5XAZNTBiiFfYabwMhqWqLUr3CSboPHC7Yv7KSdBqbfkv3JX67aBy16nEDaqjRicz44PZQXuWeXkWaexbHxcnav3Q",
  "key26": "2JawodcDHG44DgKRBMTKfGyZDn5DguehWoyBXczPLi5S5fphA8wYkT2GktiomHx2ied9sEGS5tcSCEx74PQ3A5XW",
  "key27": "4RkF1LAcAdk1HXBrwS9skzweBHnvcsyQA1tBkPR52pyYoFVQhLKGzBiFRY2vYQ4HEu8hcS6u7swXxUqzcGQz8woN",
  "key28": "4shHRfMwGXQzQtm4nWhg9ZohtPDgXFVtDFYPFAZ2Wzbs3Jz7RbGVumFnDFm8oz7YagYWfY6cVaNfYCL3WV6GPKuP",
  "key29": "568zRTx9Vi9j9JEEgEkU6KFHnqAfcdi33qn3V39wmS1E4hbjnUDZDBr7u6nSqLJHG3XgPjgy6ki5Hjj2ZhWkwRCA",
  "key30": "3U2CYJSct1gta26txiExmj7w41VcHbLj2zckAWdwnxGFPJAb56bUqdsbGTcgYEHBETmCVvdALvJF6Bnkqs7txcVW",
  "key31": "3rAhpHY1syzWj3juGFXT9QWDuPRRoFz1eoo25tXtFaPzzX3hHXqEdZX7MbzqNFz5EftLX7pFtiYvKgXefSBwvh1f",
  "key32": "4bkCuKrbCFc3oQyeWhSvNxY8aCzjz99jQrQsKMsYqhwidBqwHrHMMnWsK9u9hhk7kxpSzpQwUYxBgET3XCfpu3wi",
  "key33": "3pJP3WkKQsi6pUWAiHLpTKYCQ49mwWoCuAcm7e88G5NVWSUZihJSg2gvjvF8hoWit3irb6jHDJZYhtysSAa7Z4vs",
  "key34": "35VYbgqzxM8fZjqx6MjGu28Vxo4fqy8oafwABtCuPSVmWPFjQJw97c4MEiqaZjCHcJRYi9gH81hZcysQS8sd6QXh",
  "key35": "5R37iUMjZzjaZ6Ad1YJNTCGVckRNXrEJHf3UHhyQ1998NPtsVPLcMqzaz6rChUZWHc6AT8j7HVNHhRVP23uATbm6",
  "key36": "4dh6vuHWCJGraGB8hXkvG5wwK37RP7M2RGiNr17zC4EQ3f4FdeAdYPB1SbzKAFW4rbJErDkagpKGAkKzq2Ew4cNB",
  "key37": "4CAWifzAuVubM5qQKXC7nn4GtuoFJZZ1zoyRGoDS6a4eY9zn1RuyUmhoHfmBrN8wZQmYf3AdetQB4nBDZ1PwAnB5",
  "key38": "41kNt18mwkbQ4ZPvfQKdToHjvnXrPqjtQY4owv6ZRaKEEjmJUG9GvrMP2ApxtSSbCwaLGHuXd9ufVk3FumAsS84W",
  "key39": "421w6VpdUTfrCFkMpktCjWw5VmRi7BaLGAbtYvW5mrLSRAhfqVij6RQ3TG97APZznZunNEm6Wa7TU6vyCpX6Ebof"
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
