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
    "2CjTTjivzomvoZ182MjQfA9t4WXKtiYLQZixuEqoAC5dtAaCfVqZcwwxC7LdiuGG6GHtVdZ7QFUuCSnn9MZxWxrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H3vDg2ECoBdmMTymeDakfjexwZEuM7WR6bqnptA764TLNF2bzoDLVQSKcMyY5ANfvkQe7UabZvPzu6TEDduXb5W",
  "key1": "2MoR2nx2At3C4Z4RSvKaiMAVou5djp6rBFNQTbucUkMZvs6mTRWirojV6CfFg8wNY38HYL8fGJb8CFuXSv8gZncN",
  "key2": "3b5CodJ36bHSCeYNJ9zq9NTxqNeAohujmgCfnTFsaHTYgqE1BCnuP5bBNdbYEMymWUTxJEiFUhcCtssA43SJ22bn",
  "key3": "2nTqPWgmkbNa7uVAwX7KAW2fXT99evSqxRPz2yFV2BTAQ8s2fxPGyL9QFDFM9WmTgrVMZfuJJWsqUGwEGQgjonsg",
  "key4": "5DKGCteV8C4sEFwJM4ZsyRCpZ4WJYD1soeUyKh81X5whWL73UnUzbyytuqwEXM3pVw5kSjy3Lb6m6h8gLpddgFDA",
  "key5": "56hu4qatBnwfrApiaCkTQBGnFNyNrg3aSwhPHy56rSDpDvWKWVHSrP8AEatRRFjFTwhFCJCc4DnkG1g17QiEDF3c",
  "key6": "4Sg3No6J5XmKo2ggGoX8g5LSEnUh84NFnD8Ux9LDGSS9xyLym3i6BCbfBDyfEATWd1SRjgfmUChAN5EfzaLde4Fy",
  "key7": "foqRg2mjiA18UMRVgGbKZ2TdmWLBMJhTdGx5h59bwVD5MbhbXaTqpwjNhivm65HuGFsHMheJ1vcMxQiWAGEibNb",
  "key8": "5J1xEiq5wvuosxDqQ66tJSP4aq61QwCv1PboQbhXe8LE83TmsqJwt4XeCCq2rBkGqmxNyiyMzjS4HmdzE6R1bxH8",
  "key9": "4PtqMTUzBVsKW6uTCmAQcR5nUxz2tDYLxAPqvrFh8iFkYBCRKBPN9pvHQtYfEaSQ5AzB4nvgyiR58LMLvG5zKmAq",
  "key10": "5Hy48biWNcppqCCKHmpHGAwDNS67ixDnN1Wbhprgu9Yr1zAYJAoGippk589EAe43wn3cjFsuYVjZd8R4EF2Jqvts",
  "key11": "2k4wBX77tzmTQZ6fbgY2PCT1uU34a41gQtUxsZbTUeYS7eJANpuULYoPHbxxaxpiHHvFPFmXG5VDQJPvJAZyHiRD",
  "key12": "5sYyxDr9FBvcExzhxpoGtPko2Zy9WzxDALue4HEwzyh127hpv2sFGPTUBJf5HqJUy1WT6Du7tDiqhqHNMNJH93fn",
  "key13": "281sxFQUKExBPLx1d3vTCCx19sgpuwQ7PB4mELV9HyRznXxWSU9AUQr2kWAt4SK4NPSrbV93FsKo7Mcymxo7413t",
  "key14": "31XFvkok3FqVaRWZp1a24WVYAE1LbZYXUsvFHxPtxqDhYqPL6cdJRjQypWZKGAqns36n8wZpPjdWLwU9DSwu5JLS",
  "key15": "34zrUPfXakjRbiRoLNmLmrQJe7kTcH8vT4TSmU4bboAgjp2Cr2a5NVL389zxBhjTDfapw415i6x7CiCgGDfCdT8g",
  "key16": "5oRbjkM4nLHBf6yQkR3F5UNy4pgjtr22mQXS2dva4trxuNnYt5HeAEfdxT4topRaCuBkBVmgbQh4xinPoWrqxNqM",
  "key17": "3vTZaUVy6a286dkAnWqX2ZfGVRZhNpkyRA4n6jTZQCqJta24J5ZYcnPfuHvZr9L5gxEm5kWFUMDDdwpfqNtH31P",
  "key18": "3sG3QJrgJxUjwMmqbkGREi7UWmjbA1XTy15pQ2jhhtWEgLQW7pd4rdY6SWT9TM2K6uyhbRzPGmC424gZyj6oc6Xt",
  "key19": "5gCty8u5roJVacYBqmoYDFuXoSSw5UbM2vqhavi3YiE82HhG3qsjuSZ8HhDxW43pvT53vjCTRtRq6LwmAkQv9tpw",
  "key20": "34S9KhekHKzsk2DEAUkEJhtBPFanqLh1b7FFwbD38NiRud5zVj6G3MhoWsojz5axbuM3jJ6v4XLKXtv5ZU94f1Bx",
  "key21": "3TtRCNgcZbAHaCMNhFh1bM9PtAdvGiFXMETpvj91NcUJvqb8TeYGKkDvrT1MyoU7pkAdR6XWfDsFK7KkqFhH4WVJ",
  "key22": "3CesrSJvAcwtzRPunNHBkSF6U9uYgL8LpBqviEQdgEE7VeefjJL2gist1FQVwaqntY9TbW17TY6dMQBL6DhFvwVU",
  "key23": "aUs7BYUmLXMBF3RDULHNdiQ3gmGFrRoVqXtCN82H8uYE9KS914sTY7dESBm1powML6q2trQT2n5mGQvQp4cSjDu",
  "key24": "5kFeN1x2jZwTNTjpo177Hx7wwKTBvtfSGDS5AjSEwWyymHDA1rWXZoNXC88bycGtaafB6mA6ZvAjmMdfHf9bu1AQ",
  "key25": "4Rc9Su3UkMnwTnxHckP1Z2NEsyw3YoUhtJzgynrcBFAuwhQ5Sn6aXKYrWQcR5sfvc4kz2GhsqnApauESQWWmuehT",
  "key26": "4JfVdBABHd2utPAMdF1VfgM1rPXxyUEfgkvR6RxH1HTBvwS8coQWFQCRnUDKUSNMr25rbk8J3HP4ZMDQ4Z18HqZi",
  "key27": "3z8yETnCgoDWRESwvDUSrz2KAokdRVkqbL36YaucFDEd7kV77ANJoExQSvDxvDWTfu64r8oSL6urYZMDminAJeX2",
  "key28": "2MqUVVmTc527SeA9xZbVYLsp5bpajoPBbGtvcH9dTXtybH8EuwtQ1mQC7MwjF3rFttFgbdXhzAC1DzaZ12WeRpy2",
  "key29": "3mz6T8SGFRe3jt5zCJefkomxT2E8UiZDpxWroffnFH3ryEAnhC8H89VN4o68r4aDM3yieskDJEZYAiSpYFKUadjP",
  "key30": "32i2gCAbkXK3mENvaMdGywrGkrFDWd7SKP6qb9pZyprGEYLTPMVbimMXQR9GC9VLrS1vYfRUSJcPoubYBbeiYmBt",
  "key31": "5arK3RuBnEtmekti47hAUHs8HbWv3yGK4b5zoA7Zu4JDqLJTjwnbQ86AKkm8bx8gmAa2EtQd9NXCXEnzfjaTpc81",
  "key32": "3FbCpDuNRQq2s2CqtooDGbRNWMRCsUY2QMBSGyF6PAoTSJwpcfdB49FDL5HFA3JNoUPddEGgH5U8Dmvt4KEUasC4",
  "key33": "568tynTNvjxKtb142HVwQR8szWvsYYP4BF6HctdJ3GL9fDFBGhJPrn1q6NWYPpDwMRDeeFCUv7Lnugs3AfasHNv6",
  "key34": "65bUfwgAmRhW8iYLXpKNdSbyq9mbZuiBaM7ZvtRDCFYXKhKgJR494iL5Z1oDC2Fwo5oPeN2FpLJi3jsFfhUGk7VY",
  "key35": "4xtTGDwMx1JBXA1mq2CGiuYnaJiY39jJvf3J18kzy2cmMm5wMtWEC3Lmg8xqxg6HDPCtEpevAGnBm7MR9BpzcrZ",
  "key36": "54JirmHiJhUvopiGL8ax4wXxJaA6PQCVU2dRETPRjxvjxv5tXX9HsLPXsaS79F1YsthWEGcNPZCKffS2j5sxkKvx",
  "key37": "58pvYKRimmCB9Yj1peYK68pcR95WFwCqCvFYECgMii4EFfcNgHTFD6WSzHzBhawpFk3bKzPS2jT6zUkECH8aQcTG",
  "key38": "4UuC5qNukrAhh1XQDk9vunTXFN8CxZ4Cm7Dp8Ge8ot8nmsniT5zkbdPRnyJUBtm8Vyt6hmPFB4kUfAv7EDC5wHBW",
  "key39": "5TY9Ng2eEBYs24BW6cZC3JGvGNs6R1fiUpxHTNdiAamiLbdwxJdeg3TL46GQD86gXU9ZH2Cd2n7wC5vdWTmPePiH",
  "key40": "2ZD2xYBshTCrYVzUbKF9qbuBktrQqyypUkCasHUNDKLeiCmhbgB5WnEZcpYADarDyW9QJBQMU4JxKN8ZSH6hc4Fq",
  "key41": "g1MPs7Jb7TDigAMR13tdXKAg9LjncYmKheZS4zQ4dpj6f6WmVAzw2NM5E6CXc5UDoYZqshE5TMJsm5hR8GC6yzq",
  "key42": "2Lj5VTVtCEbRwMmmhN7ZYrCUZ3TgmMFH6xHZQfAYhU1BFznTFTeABkaKxre7jbJZkC92UkaYKY8faJQQe7aeyT7t"
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
