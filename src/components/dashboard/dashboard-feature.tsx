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
    "58jmDLRxAkc3t4F6iqS3K27ByvuELbLJ2X5MCowbeYR6yYmogbMCfaAShbVVF1v6GzMfghBiWELa4WqFwFhurRrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WU9qQeB1iuyzRhnH7krnFnxaZcMCBqpJH45ftcN5yyeBeVAFQnrcJKHDRXV14L4paMrQ5ieAPTV6FKGsHPUVdCs",
  "key1": "2W6n4QxZ9ot4wZckYbtsCip2WQntuKe2MMh4GVseTaaNwY3tVgRex38iFERTHBcsUPKYbLVJx5oPtmvvtfdbQeqx",
  "key2": "2ycrifTpzkcRG55JrVcnpfPxYHp8FgCzsDBb6wxGYYfPJ5E7hhPHfkHRYDuw43AvKdyw8GUSCgg2gcNFc48QKPWv",
  "key3": "275SSwRKJz4fg1GwfFUUuY76mDuTYvRXQGfq1aKrsZb7FMHFEbNcboCp8Tqd9CPsZH7tGgdyR5WMpUfiZDF22Xmi",
  "key4": "47qVa9Fkv6c63vWgTJvqFixF92z9drpotHkvKLSB93YRaxVLuESQawrUs8MkN3WtLd68dedCBiijhdkJWz61Hohp",
  "key5": "4EvwAuh13B7z6hW7Dorapz64QGpm3Urw1qQj72ihWLpcMsMcsXZVvcv1KBAxvvMk83p6UihUT62xJ4sbvqqZtgjK",
  "key6": "5MBWbtEikkcNE97LVsfvmMMy8gk3fLPaNmhU628o7wyDxm31AgdXAFddfWwV4dk4urjaiPyT5tW82Xkd8UZMoEEt",
  "key7": "4ygxr7Jn1cccByX88LmfaXaRV2L73tjvjdgGvWn6pHcnRyEikzfayDdvMkCX7Eb85TYSnwCCxwkUziXu17d1um8Z",
  "key8": "3dfoDbJpdSevvr67M2bd3xphfTCrfE1GeefPNfYUUKBWZ3TsLHKf42QQi6eZCaktrnfdSGenAGLszdKMG3B2dBs1",
  "key9": "48MiREq6hPCznF1nAorb8PFa5txxBiPXDjTgq4LFT1t2qpDuG7pNdimrM4HzgkeyvWrZL8ajv1fGwH3UAyMhzNAq",
  "key10": "P75qydmTYpfAY4JENcMiEd1qc1Wt9UgaQmuGngRk61JkXN9bommTcZgghJt4B76muA8kssyGokASa1yJXsekgMU",
  "key11": "3o89JHdUs1ZgEi2xmX7ff9yTSkjFMnRXmg3YktEPocc894RvazFaGr3A9Yn8SdoFCiaX3mMS2tVJAQZNYKFjb1HD",
  "key12": "3dtfvYpCsTmNCt8eckqmcG4P55PJUGesgGGGLaVLJdQKCnCTyf8315UkcpgwX69hiRZU7RWsFTMthZngMmWEZnNs",
  "key13": "fpstGfeUvXN7gBM9CkPATz6VMfC5PHGVoyMfAHJkW78PapHSbbPvGvPhjYhGqgH14hsCYfwivVpHQ2wAYqwk2vY",
  "key14": "44712WFR3aLXNxqc1URkLqrefSnwsFF7W7vgJuyCiKfxxwHLj3aXwUWGCi9EJPVUgGKUicJFMSwG2zSfPzVvyjaT",
  "key15": "35UHWvja3bDFZ4DYQ3XjoCGi2AXyWG6qsyV8daSG2ipU7ag1ppktowrtX5WZ6KPryecwCiX3DDpd5GAgxNmqZ7t2",
  "key16": "54CxyYzsBh1Q9HLeSpBrjuQBS6vNCMEMyRFBcbREhGMyYnmxqDPxLRnnypbfZHLSQrLp6pA5eivuSgqGoWytarcx",
  "key17": "4BuD9ffHeex1huoKnHvYW8S1v49a4UbHH9tc5ScmTkMQno6wx33u9oM6r1aZ6TDkihYxJeG3V54MC6265wi8uW5N",
  "key18": "wRHw8eLJa8qKM2BoheNxDZDzmL44KkdQPwYZ7PP9fgnHBdFSwwozpHg7N2dpyER8zGg67KtaStpbphh4XpRCafA",
  "key19": "rss2A5wXZ3PVJ2CJ3GieUcAZ7T2ekbXy9cmBSHTz9YxxWAsTVnkitwJ9bkFRVRWYavXMSV7wtHPp3UV8Fp4iEAs",
  "key20": "3evt6ZEENNQafzqfu9QUfUEeKeorYiUujiUcYY1nyVsi3SDzjoAFkMuS5T2K6FcwNq9ismXxLGFsvWb8B9ZYQ6d8",
  "key21": "4oZMdjNYK4ew5K7B7mbBjNKCVGcaPtPS9joMBwwMdXAV5YVW1LrsnBnakinZniWW1Ajx2C8Ci68BmNasBJHtkm9T",
  "key22": "4d8s4dPggVBDm2F4iKNBmhJwBhFscE4HoaFFG1JpdsBGdCUGpUCYbUHsmAPn8r8JvLhdgQMVtRY4epsnYbfAKC6c",
  "key23": "4PTmefJPgrovvFRQoDpUQ8XE31gQUAWMRz3wJYUdDZgwJy9NAuTbrCK3yGTrT4viJuJWy7A6Caph5t7qMUSP3j9P",
  "key24": "3Tm8SAP63W2rt2mTvkZ5x1yRU6wKbLQ4o11L56ZVrv6yv1PL7MheC9s8w59WWF6TVtLsefP5Xf4awutYYdWGfrGq",
  "key25": "EYZt7y1NTfMvtcLKokLN5MFxJjVYCvq6rEnrXkWu12kx3vkh1mQREtJVXUtV3UxkoBKFqmtkLmhJZxAJN1rDXNe",
  "key26": "5NZUUMFybLVBxwJJAjnwet5SjCNkJZ2Gs9Tw32RXGMSReqvyPeSvcrBDFqoE845m2h8g7auLxogMhYHaUFhgNeA4",
  "key27": "3QaqgpQjD9YpxG8zMSo1SpyMopThGenK8cLoeK92bbSos9fVgTm5kJSjqJzghLKAwuAyxRs6334CiAQHXGwRbgEn",
  "key28": "2nmB9W8ZTqva2VVUDDbp6CAxBUhoGvzKXGh3Vy7CbGnwpA69vxg9CYhhN6b8yo5zeLkhqJmo9inSABH51ATQ8j7n",
  "key29": "BEXZh3Qi7MXc4JfBuYkX3XUdTrPVv1y3TjAguWRG6Qm6S5V1iRFXbD1NoB1kTsVrcJZN2ro9SDAywMNp4pBDw6j",
  "key30": "64XrpToHVqg1XEvYMbrXSy6gzfh8jKz7GdHPciQW4bZYN4vPcwEiMMaXCFv2t2v99hS3yxsLaVGWB7RcRc384Mwg",
  "key31": "51KcfVg7WZXF7EwuKjMA4pYYiEoRjP6zSKfA1HRDpNqsdy57NbBbxJb71AMRgJqfVkAWBEvvmAELv4d4AphTS3bF",
  "key32": "3LHsCxb2kJ55NW7NzFPZPMSnYeK5hnvgtKinRqVgw18xcUetLAZrtMsxBQihMibQ65rYmX2QWvaZk9m7fFEWtoJL",
  "key33": "3QKy9v2KFixzs2jceUGhbZxe4hsev8mtDUP4HYq83ypoh4EGTZymd76LmQ2zMqyDBjQDQW1vZzDK3F5ek5EicvP8",
  "key34": "vswbbiKZPKt7v54RCbp2ZXrNubx2uVuA2xEUMncBdRHjcTULkQsnStR4EM8f5iCdXDzSqTxUzH4Kh65UtZMPFHG",
  "key35": "J7zErnvgRZboxT3KCpWn6vsicUtPCuML88xy4vCJzpVjvqDTKxqqnNR9ag4A4JWygkiXNt7Z9DtRihxRvwPnqvx",
  "key36": "rd2eCWa4n8e6vFeRpeCi9Fk8mv9R1Wv8psDA8CfdbzxFegRLAXLnKwrutBAXNrNny5eZy84p1nJbyKShvQVWxSr",
  "key37": "5PS3GSTqubvPhGobHQdaoVey45MWaBrfvtvUK7pDpTfL8TFHQsDCSxpg7DzYmPA4G6soMaguxQpNcUn4CRdumrxE",
  "key38": "rXpRFabxNucP9cFxNXdvjjBdf3WdyK1cUGE2azSHev6ssLvHmZEU73BbB6adobXNy5K6dyLVcnLpBP9kfUMRvVD",
  "key39": "5ZinbrRLuCkjFczNGyxGHZJMkHkdeJgVDV82nLfyz3iNc3o4ewDCCyiJDgZ2idHqwwoxb5z7xDvZTadSM43LjSCk",
  "key40": "2jw1yRxMnvp3ctXuYx33TAVTL4SPkqCaXvKzJpVdmbAq2R3gtU8owdhpAMyNyPJU9cuH5FbwDa5uXBW6yRQyaHBe",
  "key41": "371wYWuuEzVF1Jy9V9Vd7eLsHfGR46euuqnguEotTb3XDoxnpAqNrhJtmrTkt5NG5rzLK7h69fjxrTWNLXhHtPiX"
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
