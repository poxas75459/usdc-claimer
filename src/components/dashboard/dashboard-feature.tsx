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
    "28wfKmdoPmDzY9GSiaeGvncckem3SSVHLSyHCRs11Df5QLMnhkbYwbhfTdXa76dpUqiW8svout6AsXZnZNJsybkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PRrrMV2ywFeCTfxUN2JKJRMLRqjf2u1gHmWfAKyA7GZ7rYa2m5kmcCnHvsphELx58rgMH8KYb3nxS38pw496tEp",
  "key1": "4dGZe8DPFQXv34veMdZj8sJPijvnvFsWs2Dfksf2kFdGJC44xbRYmUAmNiJyfbZ7SkYXDegrVUa24FEgCD9Hy1wb",
  "key2": "5Mes94b8YcKA8ZC6fgwFxgBg3gLEFJRZJZYAd6cK3faJVaVimoTcpbQ1YhqHKiEyPvmLanoFo6MpSbsUy46RcMLK",
  "key3": "3itnTFwd79Cpa4JueJhEXN7VE7hq8nUfKz91WfSDzD6EwJj2uZTeU2oSpeQH4BbHhUrk8nZSs7m5bgVicTHxy6sq",
  "key4": "663kZWwhWxnyQgEVUjzDa45p8iSrxWZXdGPBxarM5q8gr13gb6m8DDLaU7moPk5W26qfwvxvzr73RWLMq4jE4UPg",
  "key5": "3hKRboTq7eaJ1emLp9JCJJJPr9ziThayYh1XUVs3D2DvLZGqvBtcAktbRzDWpDPvEh7CKVJ39pWiGCvASBWobQj4",
  "key6": "4gRh2r6H22h27JCq3pbGXjuzto5HN1NEFNoShV6nXP5cAx3m2p1eaf3Yf6c6ydpQ5cqqNo4Ce59TzXR6rPmLFKCB",
  "key7": "5Lx1UJqk848woH312SA6WddELDEn5FETLKJLmrGWo7zSjyBTv5L9eSEEZntjxLpLsMRWsNx5YxQZCGoC7rXPkbtB",
  "key8": "2guoxZT8oheKCTEUiq8Ww62w2z7M1vfh6SpYkpDFopk7ufmG4z8VYhRs1VD1yB1M4htd5xxH27aonTrNKgrsUnsS",
  "key9": "2es8eq8DVyFUAgoFg1JdoF9Ds55362t7ENTrKzCDkUirt6XSZLqGHKHbT3mQwCmRb3EX76FyfZw6pnqbygfQ7AwV",
  "key10": "hoMNx4XyCVgW3R4h2X3bg3W65rg97whdzLZv3gGiFYCaGhVEzQVPbeuUsgN1MP7SajWbzrLwTfHMRRhdCJugRqi",
  "key11": "ZwBe2H53mxKfYMR2sTcgBS2jaV3pooSBQoe62FdFxMes1dQ7QYmNCcKvhpaWmVmeV86iFCjP7Z53XNDSNRbrVNS",
  "key12": "59yfm7bC3vnhw4B6C6Ln61Luy5PP8YwzruoM3QpfAgEdh82Lp19fcyuCbuBJPUu8WmBJCQ6w2wCn7FUQ4LQGWHEQ",
  "key13": "9jzTZ5QqgzXcqfH2vjtvWsSYgzmVYyMWyBuS5BP8EqAbKrwdLh6ikQrsVVL5zc6csqevs426c5uwXA7SVYqKgW5",
  "key14": "3qwLVpL2JHAkMNAfxfC9HfaxJrJUeiRG4FqXhtGKh11EfD4Xs4kGZWjCF3LjBhtvz9zUK9UoEeXs8cWSik7D18ec",
  "key15": "LDnXgNATuxpjTecA4icAqXs6yoJqyxz4swSJeTAJawbiAKuMm7jjzKt3VJQpUgbAWyKkLzPCDAanrFXKsY67dmv",
  "key16": "2Fknc7DsPgQvzY4D9yxYkGGhPaJuUDCihYYjd3rm4bs5U46MwqsnzvGM3d54XJ7tx16CqJvm1TsgwMgshuB1pyN5",
  "key17": "4mWQcGX4Lz5izZNdw1B4iZVfRNVxn53SDxcYvqkcRopTRpw2YpCSjToVNpxQDZSFobABTMrAbnZFC9C7WLieTw79",
  "key18": "48M23NjBMAoAk2WRyCN4fNeDyuxYXd5dHoiSWbmackP9a3jqRBERaofDY2h4NBdJfKrqcbzCt4kf9FjMaVcBzXpT",
  "key19": "5HQ64hkiBmwKZWKUzDVejGbDURrNvAJzmrgSAGv8DeHW8npBixouPfxqFHwTEdbrQL9y7zs4v4mYmLGVKDRZnzBV",
  "key20": "3PE9pyEwQHtQbVF5oWGE9Cbi7ifeaz6hXcSPbKiG9d4sh4v6HcuR3beWUDxRSBBRBHbbMG2aRSBm35GUhmvQiLpv",
  "key21": "27gP2GsD7aEao3dFXBwDCZ1uVAG11HRBqRd94yuxGxe9EqC1vsv42aqEKLtfQrqJFgd8arXZQMdQg55FcaqH3Qn2",
  "key22": "xh8q9J7DWdBWW5U2yJj2kYPBAmnBx7zJKpoZTd3QVjGovzBoirbR6Gb9SRMVNb1CBGX7LnzConzpPnqBq4L1juy",
  "key23": "P99Cy5wfBYXBbBtDBAai6nLaLrLBNFxGyNznYAAQYzrjcmZQVF1At9sQBFubBKSmJ7rQSfyc2tDbMQiwmFhL2LK",
  "key24": "2y6NixM8udwZkq4iwT5DEuXhkk6qhy6bJ85aixCfQAuTPYx1TxpeXqK5YGqqy1QaezgQWHj6mABQYDWGnd86pTYS",
  "key25": "1Bi1XmUiMZoMuDt3KKiEZzdJkvGkqGUCxw48dE5j6V79NmQ9x4j8dw3MkPLiyt1uwFobbMqAFpu3pH4nqXKW4e3",
  "key26": "X4Awz1HqGoqAkHvDGxLxMewXheDopwrczNpHeoY1Az2hb2r6dZs1CGP9pY9JD9GZv8m4R5kXhJH5NBrDN2XPoBQ",
  "key27": "3nFuUFSjWP9FgZtNdZCHBmDhbDC5tPVR2AL4bWJRZm1rD5ntp95Ht8dHNnyimeum6JGRrnTiwLSNZLgKrhQcEBbe",
  "key28": "25nNxMCfCCdAdqpaThUJzChNv94KQzjHYXp67Lph1yR9e94HVEh86CxccYLuDGm8KTmDwxDk4G6GeZLW8XYTf23L",
  "key29": "4ErLaJyVaE8BNqs4sWAxPFQnouGmazwpEuBUxxCmTrDwU5c71nhdoqJr68jcShSTTjmrmimfoe2aHuZGe95p1HK5",
  "key30": "4BvdMEZ6ZiBhajPN3LsBb2Eud7yX1mJs91UqQNR1vC6nKPtvjkuFWAPJWAQQXQZCYDrPtr7x2Hoecj1zThcf7Ddq",
  "key31": "4fVwViaCLuoTumT8sDj56owBshYEkagZqSUaCABX9J15YzvpNCU1dnNSNhJYKqtasbYG2Rx6EDBQUB5ciALEW4FT",
  "key32": "5swowYYJ4vogn1bHgUQgx91HftC4hTaYF1iKzTL32LvZf8sFrACX5jDnBiQJhKKDn2r7Rad4gizeme2KnJC1pk89",
  "key33": "2e69B19uqxVUUPgb8UtKFXuMFwfmdKgDaxy4txC8Eh8t9g1iVrKE7ib7BJyDLZLJzcLddYe26WFwnKLwKC2Lrs5o",
  "key34": "YNkPMVEWMbv7MVCN3mVAUVud5KSkKjCeEe1ra3r4ThbHQXghLFKi4PYbH8RBmxBa4fzLDGnsUthmHLkAf6zFFj6",
  "key35": "3iom7DGxpkHNCisZBKc74T8Dq7ZrJyL27iddR24v3XMeC3bVnYqPzwCvNz63aNYZjJKtDgZVQgM71AoVZFKLJKCN",
  "key36": "2wJ8gWtuRdN3WqGexQ2iirE5LkF4DyXxPQNCQLdCqwkEibXbn4N9d8gSGwAzwYRpjaXXi2ZHegs4V471kdVoh5pE",
  "key37": "2cMpjM2N33zmmhffJgqgB93ZuMdMmwuz7viMimgf671TAMw5Qe5U6M64mPT4tH6FWEbzPfsf9wL1uZo5A12wVhvq"
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
