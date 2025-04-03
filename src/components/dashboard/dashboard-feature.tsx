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
    "5Dd4dYSRLFwgiswRhFxEXhsBFBrtEoKft3SUtKHwpbucoEqAuq52jixYQZ8FdZeXhhuh7X2Jjy5CxvCKuA1LHqme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ScWXTzsqQERqDFFPVWL1mvk6M6UU2Xp4oeh752o5p6HRFtqXBhFH6cdLUpDAjFbckGDx6payjxi7FcxHmFBk9Z",
  "key1": "3xFsd9X3vU6LS1HGeyd6BrmouFfF8bDhn9oHhg2xfwnLymXxcGQevuuhsLRovWsUeW53egZfYRWxWkjkZpcV8ek6",
  "key2": "5AWDWDqxaaD4icPZt2KnF4gBKoXMqsXFFeq4jGAf4v52k5JMNkJ3SizcytrBQX7VVAsR7Yp3GmDyKE9kDbMgGUV6",
  "key3": "4iNUXE68FoXWVUZ82JuuTjNsuZXD29NEvQ36MM8hZCoyYuKwoA2ytqHrpyx5zVFeFcFvXXgKDjwS2i3jV2BYEsQH",
  "key4": "3LimGwnvjiF9rCG8PFVgcKrTanoDWacQTDsakGjyDXefmNYhT6bYAptFt7Q9v1NKDg8jVr1VffWLRtMwcJtiW2cx",
  "key5": "2C9mKTeESJvqoiWMQSmLAa3wTNCDvetmmXXVAtqUWh3GmywQFLtahKP6oxjh3JZx9knVwpV7PFQGtpRxKzEkhMBg",
  "key6": "4HLSbvm9oiseafFwuiwsiP3XzGKnFVnWH3frbpHeq2LgM3pmhnQJw85eeYGfRyuzitHvvFaCNexnvJLFoikScc12",
  "key7": "5ynrLQ1sgM2Gfqp7GkWXJdgQh47VokL7pnKdQFZZHnSbdhpRRC8AE1YFpiLQveazDxTZYDiQr4WvHB7EfrdVxvW9",
  "key8": "127w29vWWU6G9UoCSfowhqFjVMTTsnRqH4Jx2QLKJsynKpmkmbniYTnSJUTiKH6jeZj2AFCtD5Rnr3GMzbEBsdrg",
  "key9": "5BCek5wTTukc5MTtdS3Pt3ztBcWBtUMsMU6VCNv7aZq3Hp6fHsqXLZ4vrsne4Kq98ryQV257MUjR3TRoz4mXpVwB",
  "key10": "5BozuiqVit8C1mpUeB7uJa62EGxGbB6X4o9YhQ2PGyR1cYPBgZHyP331u5atE3yvuh4vfZAQ9FNTmBGbZC5X39w3",
  "key11": "28BSEXHSFUxPg3FVYPQka3bRno98XwccNjS8fM28RuwzZWDjaqWPeXYh7S62Wa9BfmWBCXbKzwVg9ewjU9fi1b6T",
  "key12": "5szEUsh9biHQfFHr1J9jtZQX8bMYN1aog1KadgGjnRPdPNAhVFmDXKa5mzAHPidnRjLevyF4V124J1jKKbZNCA9t",
  "key13": "4nATCYAYkJgVfWoJKZ9SVt26Lx5RQWR5PFg97tHVKzj8LQBHS4hReWVD7ps2zNnVwhweXfDwN9dknq5sRLtTbw6S",
  "key14": "3YXmry6Gsn8GJk8F97h4fTjezSse9CSyQRizZ2bLcXHvrFPdLeB6VzVfDCKc6Yg5e9yDeg7anxRnvR3aTm1qyzHZ",
  "key15": "64ig6iBp3o2nhHVaEr5okPAL4qGTXFbA84xEdGZpzkBg7RtNMbvMPk8UkNSHBWo4fPKov1TYcyhriRJ4YRGmPkfK",
  "key16": "3niudgof41RWV2CrPsaZ5zvWWV9CiEfmWfrLc1VzNKkWtAuYoK3vB2yJnBrEHHNqRSinGqfyaYyEokeDrTTr1asQ",
  "key17": "3U96TjG6LQzKagpQFfDir4LG6E8nG97CB5NWwaEFFnceqjrfh66NbNCWbJj2w4qbyaqKiY8nJjmLPY5hFHSV7fiB",
  "key18": "31EHdygdxBcBzGKChfbUAcW8EeCGhfZhGtsmdRa5wTrMgB1es4QiD4kTcU9LfaHTwTsowijjhnm5Jn6YqUA3qU3C",
  "key19": "Me5XV6iEKvzWTLem4J18vYsR64TqABcZNrkFjGZQ15s7pYFGmKbHq2XWCxVmyYunrNCAS9PH4gYBen9wgokKMtc",
  "key20": "3gkPo8UAQWJWLw5jCLwPAawjbmtsLhhLMjzMYxeTd1CyUP53KPhGDAdo8tGtkMYsiNp5j73E1DkegJwYVCjxHM9S",
  "key21": "2x69ZKdF1m44YSCJNPDdWPiHxE4jk22i4CGtHyNAn3HByAu7Y4Q61ySfSxMBHynRB7iXjKg4E1RxQV3itVvcH4V5",
  "key22": "3UnjetdYYLNMgocQYao8AfGnkDbt1ut3aKwj5LfgqcUk4XDwcEzaF5dQ5x9BhzoQ97qJfYDfFV1SjuTjzb2YdiZx",
  "key23": "DDQne6Ni3HJQCw6M4mkE6YSeCSq3Mh2BMwFN1ZX78EcVXxoKcszthByCX4tto7LfF9cyfxCWorHTdqWjT1zeNGh",
  "key24": "WKbdEtLLczDf4VW176FkyQmo8DQZVPtu9f4WZBXMpMMTdqhUioZ573ovmHkVWLDtdp229ctfU87aSVvqa5Cehru",
  "key25": "2xknSi5PdC7GYikUZmhfCTmRJK6C75t3mPspV6D7xJmhHSDTrjJV4HT3i6gYu3auhgUccVyvXxw7dcUVsn9L7dyn",
  "key26": "54wnN7qQCZkGHSeDSXQcboEyMHfR8x85pzT4rxb64QiPbANuMCAvuF5x4iTnmhqgjQKPxkTGenMsMUuuNG55zR3u",
  "key27": "5UQJwkcNtyTf3evW13osZifExcSGgqD76QNnm2P71D3Zg42SvzxMsHTu3pcXJvmWGH9B8wXRUqFezo9o5TL879AE",
  "key28": "5wSTkt5zrWw3tktFX7nC3GV31RTWb1ZuNPNG2DB6uRRHCcUSgUXSQZZgfxWmh6dZ7jqD6LT4KCUZDp9mK7xy2eba",
  "key29": "gZ15itZLCYnzf6wKChHhnKY2jfPba8WaawW5XUoWSDsuG9wtpr4XDc9Hp8FySjaida2EY2FgYdZzXQ3x6PhhUTB",
  "key30": "42sPBa8rrwGQTmZG5wcSvgtdpgr8h1Tu915uL1wJFXMgB8dwmP6uPkF1e76e7WEe64ZqQofkZY3vffTP7r8adYLG",
  "key31": "2vx5pe3NudbfGZjGLojSe14stAJL7TkhkP9qYCCyrdzwYHzbCJ5kPfRMrdwdqvmUDpCWn5s2LHHXtfrk7bNtdamB",
  "key32": "3PRxAtGfzeZ7sNKr4aWfrEeFVSZUF8YBfoBwj4LMfUzckcNUJ2rBH5j6mDRVJ6SmaNuGdG7y1o3jzGsB38vbm9Uk",
  "key33": "3JYfz1YFK5UARG8rD3netcSn43Hh8cShPP8euoLMRhnXZgPgkA12fr2EyNKBBxGdUMfeWmXC6ZgLMmFroYGpCpy8",
  "key34": "5nq7S1oACW5woJVDyBhk6uW6jdQthXB6bwo4iu3S85dryXcY4ztetYRqMTtNLpJdjqVAEYmWpVtfzEECouRWTKr9",
  "key35": "2nEZaWSRiZzovT6tPkyDqC7zQFrTQ9VcjFiSiStC93WJQyUMVVB1siWeCW6w5x9X2mYKpYdRwpFCaHNHVoTCF7bD",
  "key36": "4PdTUyNr79ueyyeDR2L1hVKTuNLPxzYnRLT9LaYpqNWwmKkB54cRJLsp97Wgopudew7VPx9gtFpL1jvkpFHwWV4D",
  "key37": "5tPB9gVLhnycmjXSzAZz5Wez7JRPSrD229e4CA4FGuKWYHyKgUzXQadpkTnqtZx6RWiPCnhsXrQtK4D7cNgr2zdj",
  "key38": "3Pnf2u1NEE8PAiYiKB2Rp4YXAxoRtMbsoaQKQPtvN6NhemUqTWYe2CZ6iaVp7ZVsCWSF19hkTGfF8uHUfhipX7r1",
  "key39": "4vGDh2Ff4oxhYJnfPqZshZdw6BzMEHxZBQ7H94f2FXezg8bLwgtvmhsiVGmBAtsb6xMdtKNkAnDYN9yodWSirVd4",
  "key40": "2Ui2j2ertSfYkGnNKFcEteUZgwns3fnzrsSFiZoQNX4eVC3PqXKpFN9p7FeFA884kkjGMxhnvtBy4DER34nAxFy1",
  "key41": "5aPVd657uC8DT4vKGqNbwWVVd1NaDE62U4exXEPkZ8tvzgSvoHvmtHpu74daaAg5ZiWpBzW8WQRHMZCEwG8hCdy5",
  "key42": "3m3BXHZTGHjj9dbLsvrXhm1HxunAHahFjwJ4G2aA2CSWKT67m9eVs3cfVmVWknKxVWaw82oikdxBGFjdidmP1WAF",
  "key43": "2XxdombLsuz7ZkSy4x5NVajWtVi7GDjtyfBLte8GX99VXAV9uyrVQSXgqsiLcMd78Btrk55dXsaWap3UJUUoHWYJ",
  "key44": "5pHjvde75zrWE1qSGUT8VECUhp48DXJjdw9VVTaybgGGnUcw1M2Sh7EgcHCsF33RVcTCVgoErnkUhDFonzBNguPW",
  "key45": "2ArgrfRCxLZ6ZFnJYaW9YVprGadTNaxQJMqypfzkssJAVQKaHuJnu2waKWYofNEnV8KiQVWbvPzcK8PZ29Z1nroC",
  "key46": "D4YPL3dTd7KWEv9ToLomYytVnJgUkJKqsD14T4kXF8q9F62uePrdKgU5tcatBnZMB8hnRsg4aWvUHLRpYdVr9AG",
  "key47": "5uXPRakkmjUgW27jSnZjoj9v4uuyaKuihBHtKK2cGvNAV7hRGAgQDsxG5R38cxz6dycRjuRdmyFR3Y7GBDSXayVD"
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
