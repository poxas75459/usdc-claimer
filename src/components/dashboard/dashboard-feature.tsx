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
    "27xW3kxEPa6SJjeqofarjK6uhqqJ4mvSDYmZ61PuCUAgs5jhSc82VWZMPDYhxiLuVseEhb4Y2nCdc2YZAd7up9oD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZGfT5JhjW97SNE4mgdFsBmtJpkjwyk2JqJEmM5u5bdWXXSxSDJf64AUhUgCsX66dZdzjQWPeSA57pZCiikCJdBT",
  "key1": "36KqCsVmysJhtVu7xhe1A1CQa15LSDTNcr3g2VmCr46Kk9Zqye3RkxQRZqKTwUBdddSVVTEDNvGhLczo4q1zMUw6",
  "key2": "FK6S8ecbVZ8niAuGdQ9U2YwsQpwcGKN5rfuFoseA6MsP989Qs6nPQQKxs2gmeehigCD4qXDAEzXxsv2gAzcae2i",
  "key3": "2Ug6goEUnbwwqAWYF39nVKb8w3BargR3m3kaR5CDFiQx6XciwwFgXmEN2HiLzzysqZCmU1L2v6msjkWptTmJRXuG",
  "key4": "2jMQqYeCEoCp5dzg6wwyHngRnhpAWK22uuwf59BCQnhcXeBkpR8bzGq7zP9yYxQ9MGitjxRxQXkxRHTgQx4djmdn",
  "key5": "2mAWa2NZEgbLAmcVHPSYJ2CBGJsLLbArgzH2nEQCWwNnPM6FGiTPmnGe2CFfD9CjbaGX1tcRBbdSSJerTWRMMYiK",
  "key6": "2RGMFaTDgWFwTCDJmaFWEKaxLyHcjaUGmcVgnsP4H5591RbUyugRne9VhXfvEs28DSkS1EjrhQNBjSmRBs2yaJ6m",
  "key7": "5W6pWrYVMqg4R8vKkRaVHH3NwJF8XTeA8ECwQ9tzpEbakrgZihYvhQMLkabDXAqCJT6aMKfEEmCmcHDnMrq21Usc",
  "key8": "5DNvG21p33vA8prZbbBQuiDz4XfcNnCgL2r3t8Zq42rhJFW2LudVHTuAAzGxfgQM74nvGXFBMDs7dtiA8GooqD62",
  "key9": "2rvuareTeL8N2yToDtig4yJVypbgFd5fknn5Y2BDcsq9XvsW9gZHUbG5GdTptyUxYAn3j8m4GsMhqW7jMj9euked",
  "key10": "4xJdSa36MJBpHyzUGUF56f7rChNCxPXKBakTti8BC2aqAniNy5RJMj4sTDKFxqHnvCrCXoj7hse2mP51KBpRJPbL",
  "key11": "2RqHWMwabat6Zr8qm2VVa3TXvW6QL83y9YDtdDPU6MiR8Mdz5StskZNK4S4Vx7TJYALa3JrKNQ79yEGTUjgZdSQa",
  "key12": "5StRSx8PMw42KgxupuAYmPW2JqAMga2822prUYZd9Qe4kb7pmcHJoThF8Vr1mfExEsMghyvVkRDbB4CGc9WAoGJf",
  "key13": "4btnTMJ8Bx3SshQngrfa7iPRuQLX92jzzE7PV4mW3QWs92erVxvafB3D5SaU19LpbXrwh2uQXB7ofhoUX7HnasnY",
  "key14": "2Xc3BcnXb6eRmw2eCmGArzfqZ3362N2WpEw34kAaaaDgRhtcQrprrbuzM8nRbFVzm5aFgt5DxZHsEwRiwVKAz5X4",
  "key15": "xLQ5KdgkTe584TrYXY9MUnZxiQ4EWtm4aeqpBKr9UZxmf2NmogaJPdgQH7mndzYkfzEsZrUnN2TTyVsPYWDaw1u",
  "key16": "37PrHBYpHwbh9wgZ9Q66NGWxSkdAsZSJRwEkJWPq4zyvETKwomDW5viPNYBNzzHobZzapy3aawFdFX2fKUYDU2PX",
  "key17": "2qvv93LT85vVRyTNWXJvha523Kp9DpNUbV2VWT2u1eph3iH9YYsxcRdpYi5tYLAdZPgL6dY9ornEz4SjsaXWJR59",
  "key18": "5VztBSSwh4x4wGk1dA63z6epbMdm9fPt5EgPL7yL16xeHWhAhgUUKR8YrsoK6jb7GDMqy5UvvYD65gmq6Zi6mD6U",
  "key19": "5xj2qaPxkoXriAPKpEL4t3kyssmgnsbDHjuv42eLUZGsiT4mN7qinohFoyTYwDYhK7irCJNvvMK1PPQg5Zkcsvkn",
  "key20": "4JZgVyjxpchgHV1XWsPEe44reHQSjSEaegjtbFsxQZw3ujSdifBYuXH8Puq7sn7Wm8uXK1N3PXuBvvHGbmSrrh4g",
  "key21": "59LkTbaGRe9kRSPXY5FbngjnFecqmNmFMh8wycxpioqhYtXhRUKkdwq43bbaKwj4LmfA6in2V9iHvGEBggvXcpt2",
  "key22": "58gsxAgu13QFMqyhj42angVzWB6Kpb2XkEMeGnQ2KQxFJWr4UYvR7roWHoyZieUaM5n1NT48Gw5kaNvLTLhNVUZL",
  "key23": "2S1rXJgwEu2BogPrVgWvzDWTFeBe5Po3vojYHZa4C9r3VdF8FPnUnu196YbACWxB6ZJR812ZXcbhteDjfv42cWZ5",
  "key24": "2iViXxvShm4qvRLxcwPo42s8BwwXypMdbM1iNwWEcw7fkZLH6xsMu2wHEgZD1zrVaepq8ot5zMEeooe6dGPnFKyV",
  "key25": "F21C1n9E9uVjobbFWXRkt7PGMDHFXLYhforSkhhxUobspcMg7n6cshouDPHp59wrHcdEGUKDdnUcGH8KvSkbBC2",
  "key26": "4Ub5MnjoPW7u3njvpM99haGtYKxpxWHeYtjFtSSJ29kujJZtcLSwpCLBqBpAXKqiqypy9eJGmX9cptSrSy3vQVVo",
  "key27": "4vLBjn89pFChbkHSjs2e3dEtKBWHfVHBackdvmZLkfeiSyHaApfhAyZvNwsQCww3brBizVbDLTgaGZaWZMdgDrLj",
  "key28": "5DRt8ZxTgyJeXoZdihJ1cwj6kYj8sw1LKSMTJL7CjUMVFu9U1wumsjNrTcGSZsMXnXSZuJVmCxRNMQdLj5tfKJQE",
  "key29": "2qFYdNnq4ZQntkjr8QXWUkJjqR9Rrqh2mFFWpA6WFMZRd7T2QXE1gtf9JemRviw1M9ec8WYDue3zBZatDCtUKPPf",
  "key30": "4hYfyK7SVhxBwpAzmBxpB9uSyA45PnT2dBzb3ZCdxMDy1zkbK1bBWqAMvBepXqn3Q4fL3ZmGTHjQZzNekK7pqZka",
  "key31": "tVsX68Sqi9ZDi1nxrc2LCV6vXdAs6mNjsGJRnMzULTUi1zqQY7zabK8WCjNcK4iJL54oJM3mFuqngDZmg8h32qs",
  "key32": "2nnRgPtDGM1onBja38H72q1x5HibDfzugFJzMRQfvEppHSmt7xyJh7jntPyTMmaxySejYygg5h94opStyNDaPfqV",
  "key33": "3FLHmJBSbfH8TZRvAikYPGf72BsqaNqLyLrU7NyAbXw2MNtmECFmdEkMaPipMyEW8orfHhCsJUYs7cRhfC4oVjhE",
  "key34": "2KcT4SiiWMeZa5okUSwpsHXghzipR625E9Xsd1dhfZkG1p9TSHSKTXpbL91FYpccmGvBbJf8C74UcvVDY2UHUv8P",
  "key35": "4KwsETAKv1KvrCW3d3aPfBp5d6GzGucQWZhMWGXrsBiHhXWbMFzkUviqASpo3oHxjMN2Lum1UEQC7DgV2pwMcmbZ",
  "key36": "5PiDskvutJiFAbTdZyTRDeMn2PVjjyLKsvhQ5ho4LB5Xmpn1MeR9Pqrm4uSHNAsVgjmv5FAw9wCxGooNHsaAgW8E",
  "key37": "5j99r6r3euRNWchL7pND88dQCXidJyN8AdAZ8baX3bfajiUU5qhFr6QpgFixtfNGSt2PBMn7pwvXCqkQM6GAiwiz",
  "key38": "sj6zcDSEhrvvCxmRV8vHy7gn6yooTsbudvB9fFuxhqpveUV6UMK2ZztSrv3oSREh4jUAFpjN3RdEPswoRxRCNd8",
  "key39": "oj4m1XVnTSJKvuvfchnpwUNYM8BQ9hSAgiucAAo19j6gvnyHNtCbRpEo3G719BVsx9BAaqGid9igJx5a2Vm1Gn5",
  "key40": "Lw8rHtmmefKCaSn7Ap1J8gd5DsjmdJV4SR4dHv8AKzctLktKXEq96Hf79hJdTKMP2a43wjjBuZHVx3WwN6U3wPF",
  "key41": "34svf7ThtPsvL1u6R6E7eaS7wzBb6cpxGSx2bU8xivrnY6ZHXbDJJgStfNKaiQYgz6UbKnX2sGzEEDikpFD9KFrT",
  "key42": "e7w5ETSyaCfsuoR5GqsTT4w1rsTaStkWeNK9CqeW3eCNHg5vjEMK3kkpCzwTUMJDsAEsySwckE4iZP5JTioenXD",
  "key43": "2xcYQEKeBnc1x1m117iybVvAPfbDa9XjuSjpmUaYYcfCmD9kgoDfRYKyyi4iA5VGuFPAgj2cfiq4TKi9E826tVx9",
  "key44": "3izrE3WwySrKq1vhbnm7VRTMAhSinp7Q7NQTGpeNX3ns28kuPe27g2BtQK7NLbTPCvdhUAqCrgobw9Q793UPzyEQ",
  "key45": "4tKnA14UFoZJdcagP5n4d9HQYtpQwt9UYqV3iNy4ACVrYDdZKYGseAiaQ6xCDsxxQTXcGzsNmMx7NVXjiQSgaZ3m",
  "key46": "hHKTJZLN1j8s9Z8u19c6speiV6yVY28BfBxfwmVNC2jioiQgbLKpReBs8RCfd2ybxn69vhtVw35ZYH2cjWTDzvr",
  "key47": "4hYK9ZzA6RDyEaCAeyMqh69JMsgyMEC7ugJ2KvDiMYKcoeqoyWmmqPSQqQ6xYBnPUkAp7Brx4sK3vtw7cx4CVjaT",
  "key48": "5njHPJpwP59CNcM7HzziBjUJyR94PNVQtTKR69SBef7FoFSvKjyMHVzL8ANMTYNXvo9wBLwo76nCXp61ouzmN5dL"
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
