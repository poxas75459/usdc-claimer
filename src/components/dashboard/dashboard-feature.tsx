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
    "2BfF4Cs5y1Kx6KfeD1dWjAjAz21uZSZKDdMzh6uCiCnkbUzQmmqJCav57mZ4Q2ogCJYbEfacLQdUhANWhi8aiApU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z4PCiQd2s3UbPhwCqsgHFJBa3AcXkjvhipTVdM6NU7Bx4C7YRC9HxqxeWgVBvtwPB4HJRLYQQLAGm4qe9AWbr1b",
  "key1": "2mLZ5i1gwyefyLYoMDK2UFKkncny1ZxrWn7xDbnc7q5ntGjNPr9RRE7DBcFDdMBpPX87P4DTXRPUef5DaXdg3Qdi",
  "key2": "5gexqP2VtqSuWUzr2qJ58o4zWVEYMnJAKGKYd1yEfhzKaBf7Uexk8kdurN2P6bWvH6Jd8jiDXWfFnWHcpwxutKVu",
  "key3": "4oitRaji84i719RPqhFRj1yuNmtFqir7YmX95xf3fzy5jNdNnuYwMbN3Zuj2vuyGTc8Pr2pyBhdYmA1gV7h5oVDh",
  "key4": "CnEHbJyHqqCRxKfHaznPbhqBPqksdP42WfkEwRbRut1KNNwamFTfy4Eb4DadkXKVvvYg8yyYrSwH3H1Gj7xjYeW",
  "key5": "58adsNZKHv7mWx2EULuYP65XTN3Xn4Urz45ezEoqj2dpSbzNvzpPCPWVmF5eS3nxp5vt23edgdpAywg9yTv97H2F",
  "key6": "3SAsRuEc6KG7QQy9bo1dAFnGmjsnLETmbTMYrJKWMH6dQvnKf4DbRrYeHwdK7FunTJTo4HHtyr3VDfC9TaofiEch",
  "key7": "6PM1pNeBPottR8bwwcTpZeqGhcxqFJYag6i4yeGXSxf74mjVM7ns66T44yhgcDopC5iLo5mVFW7PC2rE6EitPVN",
  "key8": "38qicpc1vP2DGkpU8TecyDeNeiJVfTssiiNzmG68MHZdfVJzMi5tuqm3PYXrKi3fgaeApc8yy4HwmDi91myGD7ZD",
  "key9": "59T9YhMHiJRwjeHWe6y4XEAWSZxky1C8fJAJ3AwcFRriB43VjC2yFZdLYyxcub3EigE6h35zTnYyLW75NturWTTy",
  "key10": "iVX6nMWdoTqKNmhzCCYDhzyacSRqKVaGtsN9vra3coPw9uevxw36EKMzhB9d5n59fF3oBpDh7x8Ztz7UaCvpgSf",
  "key11": "Jf2zZk8zocjhgUu4fg6vjS42nbV3iqE3MhQsyFkfSPefwG5bzLbX2Ee6Nd7YK12wE74f7T3nrNxNSbeRKtycAys",
  "key12": "26JSBeMVs7zKA3xctoj2wi1YzJoxje9nTvXi7MGCyGKLtoxfDxDuq5ifqLzyY63NJsz44b5wfAFQQMhmjDvxsMhK",
  "key13": "SrfyxPJUExHZ89Uw4TpPgqw1mCCt2NRsbH9Wzyex7AYBjD6pfdrs1VtHkbFd22DREzucG99NpLqn1GoPjnHQx9U",
  "key14": "64Uj7AYeWbQBwTsMUx8JXEpr5J6UmM5XdqHoKmqBQiGRCFneCHpMtBy5B4N4yb4eFbuQ49b1LLCXqd8fFAf5ond1",
  "key15": "4BYJVWo9pAEwzp2pVa5VHA8Pg6H9adYM691ZURFFuboiSm8PpyPqV3bDyVPnftSdEDWeHfV9ee7LBc8RNQZ2snhB",
  "key16": "YRwub1ayYVvSRk67vRbYdXJY19QDqir3YnKaRwJwCrnS68TKDjLh2UqVBos1VtMmqDjHtWWGUDg9aHp91tCEfTr",
  "key17": "4zr2KayzynyKkMe3YyCX7HEnKmoPZf1hBPAPXy3RKpf9QEGcfJidS5xtzba9VJUzxFTQca7ssABkCArGjZNS1LXu",
  "key18": "3d23fuLntfsET1Vc4Jygb7VMyBtQwj6qBKBjDR2wmhW18VFymCgTY21HyAgGMAu7TLAAzhUSmoa3Qf3UB1zPqyGk",
  "key19": "oFi149oYeNwiNdUVdeyVbNyCTM27pqfZPckLvxW9Si3Eb3b8KzhC3N6tFHxWCpNY2vEqgMzMjJStwXphuWhXELy",
  "key20": "3BMXdzf4Xb3T9ZdKgHBu8nGFEoK6ZRmUTgLW59RPJFJoL1jVBDcVFKYhH8GLNKcqCE8iGHGi6GwDRo5hj9wuKyip",
  "key21": "3VvpBUHNgv2nMoxo9Zg66XnLWtBLFWogUgCuDAJoqwUCvKcy6fGszothkxoSLqEHJU2jpMMH5UHck9gv16d8dJCC",
  "key22": "3r6x4uFJKb48mvYEerbP4dn4x5XoeYfe13SLz8oyhaLfQgbEMTbE4Y6MEXnKJpQUKgzBTzLXvKrMWzPJ6U4fEDqH",
  "key23": "5dbAUUupKPfi12yMEkzyRtbuXSzmDVavV9YMvr99GPoGFpUPSB6r7AgREk4fpd5pVaSKG3E5o8H5Q3ze6441VLwH",
  "key24": "2joUYEPYk1yRmaeZimiXrDREPojFxT4R5B7hhLQ9gtqFYyZNwcwGm4ogLvbiJPdbwQCRdaU3By5XabovGURgvD3i",
  "key25": "98KDoW8ziqeEw9N1ZCkRFKKSoWMtQUEnhWpGmbFseyDPVP2J6QoHJR8qwPLT5WTB3E6sNqEAC5tCnhpzh2pVPar",
  "key26": "CJG2yJvwr2LqmETDqnV7vupfyi4bEs1pL8CgEPEs3eXWiUDeqvwbzodCVrPbw1Ra7y61ZxrjodWQzsnp3HgyGzC",
  "key27": "5czqcfSgqJPCVmLGKX3KV2P6iQisqb2RcAGamfPPweLNo1deTrawrrAsTYLepvqLoPjcGDYgsMUQ1PvrBzx45w4f",
  "key28": "4VnGY2E1MyHgWTPpPzDPrvQ18i4rReFxZGR9fBhwUvYMyaai8jYMMWDvxKGdzzoEciqzyP1Y3G2i4q2wjE6mJ9eL",
  "key29": "4ay5QMU6ZJHQmoXy4BNWB7cHBQVBC1nJURy1FVuvZCXyJQJJ8qbVv2AdPC5JgcdRRPckcMDTxNXMrjAqtPYS93n2",
  "key30": "EeB3fAd7MXCBEqFTL89gF62CHTxKVi9RfUu1jd5WhwTmU62dLbqG6RSRAcmDS4YSUCeh612LTDnp1nBaLFocef2",
  "key31": "4ap2M3mGxujaQGP5bXrSfruQ1FEZXZTC4BrSwmzACmkAURiaq3XuP2uvarJb9NAyjFxy8fBRkB9x2QGp19b2f3B1",
  "key32": "sYwHLCmBtJ4cYQCNiCqDwWECB1ZCvSYyMptp34K7ZQ7DmVdLe2JSrUeto47sgktwm1S1gF9XysTz6uBuLpnWhsx",
  "key33": "3BQyHNC4TK7cHuuLaGJPykKNzLBtpdTmMnBhifLN5eZFHdn1kmfBhMQyG9jeUTQyAVvtL7kZ6pxKFz6GoXrEcgQM",
  "key34": "269eEbswdtjrtGdMmsCTNV5SLkKmbhMvhZJ86GvwbGmJpGffzLfRnm1GdAvhsFXEnw1xHJViLeAnwaKaKKC2zuK4",
  "key35": "4WkbXxSaxGkYUy78QYp8dMx4BCq7ntXQiS9QMbHqdRuo8gcyyzzBXEwTCtPW1ceNC7sNY51ELmTsLMKBT1y1CBXS",
  "key36": "5vvjjSTYpjCtd6zQ4fLtFVCKyrFzKNdAYMJtvuBsGJSAcB2pf3JbzmRwTnS8wkQ1ULDFvxjXqwoAU5uQQjSo27d7",
  "key37": "3NLknJSFR5jPoNkqKsMKwKZ4bcTkW3CP3NSBQtK7mhdNk17gUMTYvVs5fZLcK3rk9xJ9VKbEVyRNeiSFr4bhm7ya",
  "key38": "mRqgiXzTtqu4aHFVWpdZj2wJmihLLMbRam943NMEjWuQcrrfBkWiM2AEA2DBQfJz4JKc98NJg19Lw69zhuJefZV",
  "key39": "48cJpBNBkBtpK1MXyqa8PAUXomHWAMBFYitDGa9yfYXkg7na33uLAjv52PmHNxW3fx1VJaeLTHz7NnBr5NBQFVUH",
  "key40": "QC5ezhYkh3NAYJhagT5iJzkSWEvyGMvivvXdPz9nihr14vkxs1d73FzKt4W4JsvUzgo1ce7bn8q6GgBo8yD9hof",
  "key41": "46QboCbL6TTronGNxmVJhTZ7WiUMsfbG9Qbdg6nkqbypwr6Sr11B8bgyJSVcCfpwuqjSWbFmDWJoagJEvm94G6hC",
  "key42": "451HokQ8g2fJBoE53uk4Kkc9F2ii7XmjzyAvcFiqEbJDPsYhwoPPJG2NxBCmEHX95Mqyxq3VtfiTX12KnmtwZ7wG",
  "key43": "4yJb5AsmdmtwQYDL53qGoSWyH13NVjxYsAvZgjwVHfwDX6ermVF6v8DKr8ffs8f6CcvQEy5qkumnf5DweeavZHPd"
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
