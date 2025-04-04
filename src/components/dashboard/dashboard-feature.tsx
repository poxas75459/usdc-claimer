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
    "2uv4pXmsTEzeyEFzGRzz5usXzqWeaf5w7MXL5LzwYYPhc9nGqKQMTbCiENB4vCySrGAdfaP41fWVsbMzft6davBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uC7eS9cTJ7Z4XY41HccC9BYZrxkeG5R83LWT2F3jD2F2i4w8RmFCyLAdsZ66mKnVutK7oo8hJoeMbfsykci22Kr",
  "key1": "3Eg8iFUQgGSg7Gh7aoWJaZzBL1c7eDdBhT8F6MGHPS19b3EkuQSPvCTAGpamNWhTAp8zGNzzjX6Lf76fKCw3ARRu",
  "key2": "67WYuLzWuNZzzW53RaoYJqGUa7PKKocJBUbj9acvXMTw5Yp5vtbzVjY2psVZ31KjPubk9vKzAxMysHtVob62Hg2j",
  "key3": "oJKdGQZqDbg3Gc6agBZvnqJ3kRBQXVu9PP3ZMt2GM82LUtPzdKko7MzARZGL22VRZkN5WtEFNjwYqiW2T5GsC8K",
  "key4": "n63GCrr2gTrgLiN5Xp5CeXQKb8VxWSCHLgCv3ov9SgBnSg3B7C4TBoJiSXnVBjFbDV7ztmZr4t1RLXP3JoPDS92",
  "key5": "3UuvwFCXxupKp5sPo6yEG5PZowdrfTJD3kwvaz5oqkjaoWKmNrz1pW84ymrfGgg81XeX4cVKzPmDGkyyiRAuUxrg",
  "key6": "2LMmLLsDuBdnLDkUvjWd5NDd4FBzPgwCTm4n4LyPbPJi75VvfDQkrJyTJSzKjcn68AxkMeoMiAh9zyfWaLtrVvm4",
  "key7": "2bpmCPmKZ3ctzgrsrxMpjWM52XGybPQZZ5qgPNbz4KiLo4sQQM9VAyshC8CRWj6mPJmgVQxYxeyHJpWSZgnfaoBt",
  "key8": "4aSZtctDXQMNx34QiZcavm1nV3YrfYEteSVQ3NhsV9UKqrrg7djBNK78kz9xZSgSb4752FpxqjN8BR1sik8x1NSp",
  "key9": "2Mkt8XRCBLNCvxPRUSjG4FRR8dfo8adMSfYzH3DCR2B5faEt4JHPwEvzWo6VGGtwVj2abzHu3LDrKmGfjNnyus5N",
  "key10": "23mfzUfUdFoShJFE7wU7zMq73dRz3cbpXPcnXFyGnugyhoyaQy9AqqW47kzVpxhQGPJ5Ez2SwRp3DRS8DFZZPpdH",
  "key11": "4Q6pfnspzhUUb94wS4d8GueFHqBTqo4AyeFE2oUKipBQt9NnbPN7ceZAnZ4TbyTajPKNVQBaDumK9dkdGH5fS4Am",
  "key12": "wNDCZoB5qoTotogWWatsxVStzhUX8sTHUtikCjeSRRrPweBNjxouda9obTwSKW1czYtmxxTpW3v9x3RHKWReaD9",
  "key13": "dhEUKxKBaMZCFpd2VafS1Zwi1EGjgD2ehP5ZmQMe97D1djg5JZzE7BBiNDfxznGyFZvg91zd7ftQcZJPx2uRu1H",
  "key14": "LytSqbKVzrE6WjD6VoNtssXXxEqZ38iHURR1QCmG4Et15vBiwc77MwiiYNk7YR71wLeiYVeyV79LakThagB1sQ3",
  "key15": "BwR2vxYsjPdTEV3y2nZHXuGwiBgEzyeuPVn92S9HWJ45t94P51qMqdYSD2duRLiqnjPNTMuKqt8y4JxNrY3MJNi",
  "key16": "38nzQ96cmGVJXg9drVK4dgY4ZEDgopHG6nTuWS654aSkoq336yrwn5TqW11APycKr1nKZZRLui9qdrpjsUAkPC96",
  "key17": "DdXVY4kcsDWPPfw9vybeuC7J3U4j94E5iGrFmssYBU1Uz2Zyr1c3U27VwVmmehf5zK66dbH3Kw8FUMU293iDgd3",
  "key18": "5pVHTmhTv1zdqhHZwF1hoL1gJBePoExGV4Hi26N7qK8HBfrE3N5CAzPHLGSBzMze4aYcwbgEjZCoTMc68xT8T6Jn",
  "key19": "653ddtKaNJdVyouQKuLW8uALfk1a1A72fuYpJN3Xqt8XMyUafEZKSNRSijZSAWEFJRJ7LnyNiM78e9waSc5eEwSE",
  "key20": "2Fnk5RcnqLLgUvWV1q1NzDjkmxfaDZ9hoskejJ21FV4nNFN5LN21xmpKdwRNvHzbgagvWVMMPF9bt2r8r1wwfg9u",
  "key21": "48qjfZ1k71rhtQRvS7cLSJHw4nmd7GKdDbMq1ZxcLzMCWRUVFoFqssCXSBmAbxbvSQjqkf9GwmKkTvCppk4zkGuW",
  "key22": "3svVqXJNVdGQmnVh879L5kpffCG9YYPg9gTV23zZ5GfQz1Xi51RJbyhaZKsecH1TxCWwioitrEXKRXiA1e9sorS3",
  "key23": "3beREsCHmTEeyDiytW9GEtGHBBKZz93KAvszWGii5WUuYDZQrqmMPMhUiqEY1MsXLtquvujxEec2bcYEb9UziakJ",
  "key24": "3GFeXYXrKna9rm9u6TGVfe6UVGFfz29yETuGfWgrHa9SsbhH3vFTAN8Y6JDwRfm7SZizQthF2WPBD1vvfgqTzPuk",
  "key25": "4yhkvhDhLz9R7rLdgStP2M6mBoy7JiB2LHzjEmZ8nL3jLgU2SJntwcEuxG9aHChLEJmBAXssqCbujPfpzdMGWgk",
  "key26": "4m9RNzTqbxLowm9H9KAAAqauG8tUkomNsD3sw26xpbrZyKyjxQK7Lmc53obvZfErxtHVpTmM9JXMMWMWyjPKQgUD",
  "key27": "3jftasZUz8woXZgRnDZDBQgLBTBg9CHRhRxZozAhknahogtVxMWoiB88LE3nkwoBKm9Fz1RcfhRj5p1aSydgFo9C",
  "key28": "2CdU8A8JdXSLWbwCWyrgrmWFq3syZEezbSiDpeqcvWRhnSSseBJzNwg3FqFzuZoshnS3N16w1m75H72CysQTYJ7H",
  "key29": "4tmvP9ECYqDE5tpPmLqCWsLWDqScfQPoD6ya4j412AYzfKUHDc7agMc18GRu9fZmahk5MaVvyMKkzdN7oEzeVfg7",
  "key30": "2LmEr8kEdzozhNWAmDNEFxYJB1NmarMvo7VebaTou2mFXVqL68KghbaLCgeCWPgMFZ5iPARpwcKdj9xn4SCwnPeT",
  "key31": "4JB4wSg1cHkSQz1qQHQsNkJhNKjxDiMTwcceoXcXhB3xtZZ7RYVT3PtVxSH28XKnWYL22i8k6gJ4KHzCZLk2MicS",
  "key32": "3eEoBmeKKxNFWxKm2UWYf8U8U4iCx2U9sVbprwkVwKCUJoDmE44xnFyunSt1C1SW73Ga5xLgFbFJm15h4YvHiDR3",
  "key33": "4aj1DEgF4yEeY16mCyYSmrWm43pfo8Wojj4u51cmUoaCUQs3GPatQgm8xExNRWrhpXG4n9fcaH8aPrvRTDLA43Xo",
  "key34": "46WFiv4q1apprfMRymywJEqWZCziSxNXNT9ZfouqDqzbbfMx2H6rFdgim6fv7PZNCWHAJ5jN2MTeUGdCLJhY2gsA",
  "key35": "5bAJ8xHNgcGaNpEzqiVW8azXgpwmhUATXXQMhRhpJiE9PxGEuuDUZeEMF5GDpbwj7xxwk44AtX9X5EKKzSkJQhPs",
  "key36": "5M6fbPkEsdjWnUATw1YgMPNDYuDFPHN3GMvufyDrbz6SRiVYyqTkNqPqD1WTf1VxHAufPSTnbjaAWZHrter19WYs",
  "key37": "4n3HeGB9g3ZspLFbjmHEGUcTuSLpkxHGi3XCCYeaErocXVAbukYUD9maBiQKYzxFJJ4vZh85JUY543UtqQY9wbnx",
  "key38": "VyChyfoiuavHPreCKM4vGm4K9cJdsMJFPihdLR3jp8guzyjDkXiUpcas8x2YJRy4zvJjXBoUsfhzotR8Tcoq3cm",
  "key39": "GLj3smZCViFDGqXZiu1GtZJgoL17E5Q9JKpSSiH8jhD19DDEE5PuDjLkYixXM7wSTRpqUs4gbptmjAiEBAY6o48",
  "key40": "42jMpowpsfkSyFdLjYcco7qN59uWNFGjdbMphFHAkmAK26fkCubZUFDvDUAcYbwYTTcdTQbV6U8J2f2zaD5he122"
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
