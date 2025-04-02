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
    "3eNE9WPVxATT9R1xgTX25DyDLkMv5WQZ3j7VZB4uBob3yahqUcV9mbSMzPtA45HN1iESRa6dZx4hkYcLbrXEL38j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nohx79n1ciV3DTAesrv9HMXQxrrtguwnCWb9eeYdtTsUiFVRmV1FyU6mQN62ZUgzdTyBezgDcujMV1cNpVNGEDP",
  "key1": "2FkCHK5D2unS63s4LE7ehqDXct2t71UjhSgrbqVBTGgmFQ4MsYobKB5a64uYc5oP3XNXokYjAfyxwYe1SayYFnPv",
  "key2": "QBrDpyakggPBxvD1v4e3Qg3JCvjoHW5oE49NvTV5zMpQBgFB47J9FMFZBiPwivgRG6W4kB6yaz3ZCSJPpmYukrq",
  "key3": "DM7Za4BtReA6cZtZ9CJoa1UcJHZ3fu2m1oozTxqPbGYBA7ymruHTEo561aoTvTyRatpQJ3tXTNgK7rNWKvDBTWK",
  "key4": "3DTSA3K23d5yTWoGTDSeU9PCmnak2fno7Q6LSGDZZzBwwPBQVs4tdvRW6iwJCqhyT2DA1L29gZSxiskd5XTtSYX3",
  "key5": "5KwnrjZinf8LGwsPGi9qBbBBEoVAryBsyDghfrnesY61fqo9eiNnwkKoYUNNi88yX66jwWhL3UhpvovjGAHpXjtU",
  "key6": "3cbL8UddsZw2ZYfgptTaFyywtFsGT9HiQFtQSkpgofafPiAz8rWWbJxNYVDqKSsijiGMEWkroafJgckb2fNJ1ouu",
  "key7": "2Q3mytS3KTkbErDD4gRR6JVoSwNxvYcieX3kiPcnHE5BpD1Ggazvjh5DwUg2RRAWtvMvDxkaPRMSE1jSgnRU9rwn",
  "key8": "3d9XfDdEyyBJ774cgzc3rsKvAREYzGjCMVsLAUwcdM9dSSpm2Di98DvuUyiihhS8daXEaBsmD5Dzj48btZAhYp9",
  "key9": "4YLaZ3VREh9rJzPe75DbBdnjVFAJjE8GACzTJmJHBbj5CfWMQhM6GzoSvvv1Tk1GsW1YwZw5wuETyEUM8QHoQMUF",
  "key10": "4CzZni3PiQvYrCK8vx1hzdLGi55w5oaPoGVPLSvo7cXushGKiB1BCTJnc5JMXkAszEEYVE5hEpkwv1ByRZmcmnay",
  "key11": "2X94zVSmDitgWNMKFFxuwivcVfebgp5uD7XGhzCfffPUpUB7ZV8Wa2vh8oCEKRGYuCxxji8nPapNaNYyk7SvkReJ",
  "key12": "2PSX4EWQ9WdnxyrhdimWazAnd8rTpgaHe1bBZvpR5a1LHxfWj93Gcpjmoe6D4Ep9XrRdKDNxbTaCBDor1akEMqQz",
  "key13": "5RqD96QNSw5tqAWPXaF3ypuCNDZqgXG3nSyFWmHtZ31GwcW1uFUZBnFSK6mqK2o7cedgkUHJ8xWAe1UhZkpoC2tc",
  "key14": "5Ahhvs24Dcx3sHi5zNvqtBswPmZNiXm5Ga5ZNuTPy8sLcqoQwNefpp2MiM8S9b2JdVvqwRFn98XjBvXaAM1Z5d7B",
  "key15": "4xHk5hLT4SbUcFCtrdwYbZz2YjD1HMgMePBqWuKi4UL8X1TMdxSpqN581UwhvaSrGwtsQmxc9m4Nf7XWX26JBtN6",
  "key16": "4zkY6iX8P4EK47Sta6CEXkvtzn92JZUwfMPhqPF2HVXKeNG9KE2TutxP2JTkDVZcBCEsdfY4gF46KwaHf8WGNbX4",
  "key17": "S3StwBDHag9oRwSQ2Hbdj4GsT4Zr2gNKCDJFiw8MAUFscmGnmodhQi15s6S9rNDJttusWtvAFVTuEvtXeQ5QUbs",
  "key18": "3xCuuRbbBhYccYY5jKGfiesWfJiPrjyJpUNWEK1tGv7m5HkPCt5a35PfVUV3KbZUiUm2CCYjYgU4arwjHy3enudE",
  "key19": "2iv275L4k7pdspdFa8Dtix8uLQ9P9ikN798L6Lrkcp6hAXik4weGB642G1WPWmpcEE2KUWwR1h36DhbbsNc1NHMF",
  "key20": "2dVDm6ep955vMu4tzAxVMgZvmYvtHqUykiUeo9TXJHY6PYoHfB68Rd6UeWPL8XEgmYyh2UoaHF8iAqzPfDC87Qpu",
  "key21": "2D5F3zf2FSSxfTLsyTs9vQ8XYESeVhtDDcJQ6Fd2pVwJSn6domzvtMZfRwCQQPpRnhajzQqV6ZMa1e2gyYWF5Lyd",
  "key22": "3YLWwdEkJmpRGXSNkkFk9v1gyrepHRECprYDtyEAKFaJ1UYjHovjGB1SxpJPPdqdQ7W9AgjS5zbc3LHWV1G2bGEY",
  "key23": "5LnNQEcX3gBoDmFGBmZH6aTAkZzNNB694ED81LxCogeE7tZkenyvroeJrc4hikRcg49FSJFMz9EPJnntx2NtyUpX",
  "key24": "5c7s4vLYK64Akz6vG8c3gaS78QaAXPaFF11GNuvRYb6R1cz7oTMRbWkkev8vXhP7MHC1fDdy2Xh2dse2uQx8Tskk",
  "key25": "4rCJZgJsxJjdqjBZfpay6YJyXchzmTn7mE8sa42pRDiCzb6tpqFKyT5rKuzgTDzzRxeZUQmn2Rv5FJ8i4mEV2URV",
  "key26": "3zPJwTXSGL6Zwf1FdmAwoiCTKEXTo7Cko838FbCnNFnceHkgA9UrbfyQX38BceFHiaXwgWNGdijZwD7ZQzj3B5Ca",
  "key27": "ZQweXjQdPHfbmVSV39zzrZtogF3NVVSutBvJ8metpHQb3NfL36VSiGe2M7gFLeJ4h7ft4Z3nLESCxsQmsFFRyhj",
  "key28": "5pcTTPJvyMUsbiH8tfGBWY4pZ598Brjg6tyPPkA7ShrmYPyG6udzHJHFBYrhA8knuwPm5bhiHbtBQdN8jgN3ENMN",
  "key29": "4vWkEPXHqHeSYxiZaZQHYpa9nL8oc1dKWHXC3veA9RLkim3aNTkkdrD2mnz3J1F9tBmpZhZmC5nnshJ7uCERPDky",
  "key30": "4a9FofNKpdSPGvLzL8P9XCtyrbGPydakT42zUQXosX732qeHantSJDK7c49cTjfX15W8vydgTJ4kqPWQ59kDaUfS",
  "key31": "36PjRuTWhhVQAaNNXEEP2zdiJoukkvtQ1UrN124UQHenbvGGKRQDsccVvCgQjdijfmCo93138R311HZRUh9BTCqw",
  "key32": "4pUtjfCinkg4YgJD6XVkkdwmkb1MSCq8cFAoBEBwTRwSMqCMbkeWY33azMT31uDfrRtGqGaxqeX8qeQ9uJfCW3hj",
  "key33": "53xJGCDv2p16bucAuWvgNVDEZNn7Fr51bxwA2LVXdvGXZgzYJ2WvNrpBAhCooRSvaaDraCuYf9UJk2a3TvWjsUjX",
  "key34": "2R4X8Fgq5jeNYZa4gAtar7p1k1BNmAVVH6Hp3W6aX2ZaWWmBLY7XkcEYFrRQqp5btHY9EY5MTe2geDP2BDjeNANV",
  "key35": "64E3F8tEbXnAsDvdCrRDwtT9s6iV9YbEpyge9uiL812kLLZpDnNdyG9Vr9mhDJFNpXgVQP3QgBgavVQtfDgA5UmL",
  "key36": "5mMMQ5v5CMSE6i7pnZbvrz38PXnxNq41bk35fshKgMkmVzWxcfhts8RrWXMJSrdz8t7T4JzDVTg9uDSnjuqq4tWL",
  "key37": "5dVAsE9xZ8SvzQ1owdv5dF2mmpdUG4sWAvZ1QFmnRC4F2gNrEvGguaovWhJaWwvPbgTGeUa9vmkmHxoynBCaG4TY",
  "key38": "32si5NsWGwNQabY3bybiq1jYfizVYY1CHyNCp6b1c4HYFNazr4osx6xt7qr7wruiwb2Ej3o3DEqMnK3TgstVHosj",
  "key39": "49N8GTRDZx7i1UAuJhj4oShkAn8ytGKEQjbtP4wRrQ49x32rKgUaHJjQjRogC1wv4LKgUEok9xwU7inpCYmEXTd7"
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
