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
    "pptUDKkebfa5jPVGLgGAQguNv79eeRqv1GcJgxQYU34bCWbSWjWQZ16T9dU4ibtM9jPjaYHsUkmtrXndbJ3vGTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jSRuRETfF6i3cE5nh5Tkf4RqJWrEPbbJgamZDFEDipmArmkUUrvMtgWisHBJ9P7btSuo6zGScRnN7N8n4AyFGpN",
  "key1": "4VAT9uMdPsf5cYqddoKZ36xD5c8AoBmrDqVUqcoByRbf4mEvcDxePV9z1RcZVKC3v9J82aTk41YcpXHpFLfq6byB",
  "key2": "5br8VY5M6ZtEbg8NEdruCv8pwnt6qUujyanBU2ZNpaeXQskjjhqxGVF9SwLdAQz6EDXoZj1wz72E27WizNHyQAsK",
  "key3": "4uGZz8FisZ5CXohkawCqbZB1kienBKq6QYnme9mPnTZohs64ER5sSuZmLENVfsrRwqkeaxkbkH8463mpcsaiq7st",
  "key4": "29Wkgd7bSkQWp8FW2LnJjuapjTJdahQxFkCi8x9mx9fzyUhLpRdeeqGRq4TjKMjK42PyeoTtRxCKPVAZJun8CoYK",
  "key5": "uToyVZm8QLcpAygQCeiR1376ox4aZ853pG7tPHqiRdM5YDAv2gWNcqj2euHvntCYAyoZmyj3VpXBAErVQ24wta9",
  "key6": "3xvkiLcwK9GEpLhRcNZG5rkwf1DFBXHzCdAiLt7ZWVcg2i6qaUShSUHsiZttyTNqwrNtsxusqcPeLXpEdeDWXfEX",
  "key7": "64DWqzQXay6mrXuiyN6aHYHfBBwrWjZUU7c46YKo92KPGfR6uX6t4nBdVJHydnoWo1FZRVPupynh9j5BsJsb5H18",
  "key8": "67piYmpUd3ug2KACcfvPG9eampj8XBKXZKurwL8PX1zQByooH4eGuACZjL3v84MWSzgywQ2A8og6iQSgc3MPmgFb",
  "key9": "3zHkCNnWYWN9W7MqpTW8hg98PBM9JbcLtUupVfaigmskyMHy5Q4X4BysLYf1MgTDs8uo3Csw5FRkTpmTSyippJnc",
  "key10": "5tjCCjEue6K73FkTPZF5FD8tkR4jGi95aH49h3PmtS8KcNCg85FfUcgtp5pT476gKa5Je4T63JwtdggoiQJyfsnN",
  "key11": "3i5sHzK9FdSmemHcN1rf8mxarJbDyhLCwUzkN8CiMZot8NJEtTmBgVHFPcTJbsFrrW36HGeh4C8cZgQnyxhos2kB",
  "key12": "5uvG3XYgW4Lx8WckZLg4V3NgsCk76EgKQCUdK426tpGLXUGsBDuUffGNTGGRRZuL3BUGu1NXaK3ou3KtiqdiFf83",
  "key13": "2cF6im3BdSeH7tZUU1zW9wA5VcwDV7FgSrRRV1H9G9ikepD7tcaQkR8nruDAFC3gigW1AkkJmfA4UYiPqCnXWwRx",
  "key14": "NC1X4LDd9sdCoLFEoz9sjscXs5aUkvV6iM9q18GAXhAoDrR8fwKjP9QmuTTPDATWpRFPcZKVcmMkP8Qbc74pshM",
  "key15": "jJmssGkwHU8KrMB1hXq7HXTB6bX6Mm4E19qBySN85ncqhLpzFsCwBfpaNY8xwaCweWx9FmoVhUQBRNAvyc7Uok9",
  "key16": "3t6JtKkG6JKoY8F6kZoDuaCpJLmFfGCzi93Fsh3cqHgNrpAh7tL8EjQKNDFKT2XXYjPiKSGqa6thWYiBxoVZ8wVQ",
  "key17": "uDo8tvfhc8hNNXKZFjcTfYLeFUVkQL8XaCw9h3tu5bip5Pb4QtfbeGAdNchDQFun8hf6NmjjPMUj2jj4ZT92ubw",
  "key18": "5DsZvJM4xDex1cm663ooiosfkAVYbPfoEP7Xb4rde2KVq6XLnZX3vSjgFvBcpPR4nDCdAnqmxJPjfi4d2ZDPSeio",
  "key19": "4LTicDx5FJxWW1SbyEFPQkAx1C4TLniogo3r4FHUgsG1K1fCbD2vyURX1sHeSZRPvtQKJWgrXFURcTr2WFbZPhBz",
  "key20": "2C1WNyQz1expii8SXYniZNn9xXKF1xoWgRgd1FeGXD1zZtGb53hLNCRCofVoeGVe9CKJ5tt3S3s18BxoGu5DDfn7",
  "key21": "3EdEQ3Sk2Lpui5CEWQpkZVgH4UET1ssrHs8EB2sTRHPDNcn7xSq71S8RYDxvwCDpUEPUts68sYVGjbFfkSjo1Gpx",
  "key22": "4xZPXZqs8szthhJNQjBPPSEh31pUvboxqzUr1SA13um1afETaevwXefZMck7CUYqohnTpoxZZxL9FqszGGPAD6by",
  "key23": "3yC6PhbZvCoWpTfiriGPgA5EMV5xGSnCNV8CxEVehXVZdwKsLkGJub7Yp9M6FfTsAq4Vpdn8DtcABqq61eRJUuMi",
  "key24": "XrNVfzLWAJJ3G7fXGeJ4ZhGuC3o5S5HvXnCnry15Hzhkzj1evGiG8EBNG66Bx1YHhon2pGyRuMMpc6WtTjBXDMX",
  "key25": "2jhE2UAFKc68KipEqq1ABsMYdebigeQwg4wo25me1ZhdVsXGtAcNYeu1jvc2sxGjhcWanockccaddAKHweUo4rPB",
  "key26": "3tv7D49oPP5VMkM4kv5AB21kbc9ueZcjMeF2PGYFFEnjMQHFbaHPtKA5jAoZZVUpvMVBBWKGJawMdC3aswZpKzUC",
  "key27": "4Ear8cd4SpBYvAvepEhjqmnFEHQcWvCee1P63DCvv57roSvQJq6rLoX4bSwd1QVAxeNiVxbxBQidDnGVXQ6mB8Pt",
  "key28": "2L5s7rbbX95UVoMqamViZmtr9rdMCo53e8aTL1beiaqSjU9CfHnPBVv5XRgFCt1MbtqhTaawAMK2eQHf2kC3Evtd",
  "key29": "3LLX3EF99Q1Si1XQatRdv5wB92Awb8B9g3SoZZcKZdBhCjGD1YgsN7X3g2wuw6c51EzApfZRe9TAH7Ujx9hHtfTz",
  "key30": "5tEcpafKv4P89NNMorY5fK11JqAwdi7FQBVmHsAyfZ5tEDuqC4QNDzZHmcLzLdfcuWU4vhUj7bQKkZ5J9QXPJZLp",
  "key31": "4rNXAnak6UNELZULDdLxuwkYfxydtN8pAsgFAyJWoA8rhskz8BoF7f3QJfwMK21qwXQYCdMBpcnLsT38CiGiHFVW",
  "key32": "3ZRH3AqmwbqrgEW79X8btXb97QjddsRp9Ropd3CBdduhaDY3aCxpCANzxYM5qMAPESUaEXBNbM3yS1eFc5ECw1iG",
  "key33": "3kPtz9RbW3JE7yyvaX1fbR2u2ofmTaaSR1zMKCYkmB9cJd5Y6hTD8dwggLW7caFSnbc6GDSfh5jEyo1N6i4J3zvk",
  "key34": "3R69cen5hxERxv3SeYGUXsRF7B5PUnMyU8k6XhzmW2n5WHAQAvrXxcZE5pjuqvkDxC4iYQLHnHPMK64N5KD6yswm",
  "key35": "4Yw9Vq2NbFqTeHJnfVemBHJMJCjCy1qHuXpr2p1xcgMzss5FRhFdt7h3Kfd2K6zKaZy6Dd1vZFwxXngpq7CgJLTh",
  "key36": "MGV8k7gH6caftjieMfZR69o4H7GYE7upDaEM3HCTarq6njpywcwwwkaMCF1wzpcbcQxmLnTcAwY81uN3hWVKGHY",
  "key37": "3A8Em3QEU8C5TaoYrRR8ujceo4H6ve6Zc1K1TXRrxCiRqEow7BQJetL8Zeuqgp2f6Qhz3Zbs4Z4ypjGfG41VigjU",
  "key38": "w46WQeYKMTSQPoE7KY7UiXREYjjtgt1qhTgJVVMRKcmnsz5bdmeYmzoy9TY3sJ9VHDKDfZGXkBnt5w2jHjgMffd",
  "key39": "25kchSM2Fmz7VKYB3LCCx85sC4rg37ewVxYSYZGcgjDYdoF4bJonifk2CFNkYRMoRks5PqL9EKSrCzfvspPT94Qb",
  "key40": "3ge1w4oRKojxCAdSy5vvBGoQQPx5TTQcfWjsNkdqGzvEXBQXKKJk8UgVU2PXX37RvxJ7zqisGer4TPeVXBtKMAna",
  "key41": "2hjgv9KknBsgLF94vNZmLooCtV1L7dmrLVTRJtruto7b2m13UVtCxxEKGcgpa7mN6RkXbBS8xWnRefUCZksiCpto",
  "key42": "2BuLBbgirPubGWbYCdDpFAFGuYZAXDYDeiBNM1R2wgJtXoBLXfaBkb1x16k6AnQc9H1AQEsBGktcY3b8HqAARaHd",
  "key43": "4MHDdQpAriWrrZugU3kXfVbesbngqNqeKUHKxJqLoNaqBMuFVsQ46g8XT2szxFZLygczA6JMfQGLDk9DBUbBGuPY"
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
