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
    "3Gn3AvdcDDMduDroo6FFFEebuSZDJ4u44uRNv1GHTcDRpGvPov1ZsGsi5YXNFqgQ9KGmyasxFhYRa25oW88b2HLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tuKYb1BYi5LNokaELxb4yQ4AXtMhR3s2GSXY2moFeD2nUMWaXr28LXiE1hk937DtHMfekGhX6uH8gJDNAEgwPzW",
  "key1": "CHWgXJoAkEELq6PczJunrD9PALREX5JSQaHiARob12y1H4hx3LwQ25vM27vVd6yRBPG24mDLGBjbDzXZRWtvDsX",
  "key2": "AeHGRvsCR7Tw82D9nEArogsywrWCP6oyDQ22f6i6fCybXcfJcZX9mC78NkaxuPVgKNc57trJqtUs4fqRXrjAZQi",
  "key3": "qsLq8WbmK3n5tUrtpte1FSZgJVUAxKcXcQRUhbPbMxbVf9BJ2ZVuqpU6CfPaC21fdvHK6dsdEDdLszxVMxYn3Yv",
  "key4": "3ooTuswukPLEj3uVMscPvXSXDrwybKxed3QftuxRDyQpHhUEwUMmitkgxb2xjZuxkduBH73cCVea8vWY8cJhab6e",
  "key5": "4ueBcF3Po3RbwN4qyVrGo3mznueHtfZTchuz55RvDamTUqcVDqXNZGShXV66mcAhDku7NsgK46P7y4WTEYAGSu1r",
  "key6": "oZoiGJm5cmewHWmXFj6xkdMKSRrWi47ZMcFzhJ4xezkMUBPGqmiR5g4sYrd23FGYtxf6wjf6iCuScrc25YerDEj",
  "key7": "RwUvqSh3NA5KxK9NyCCK4hjjuWiJ1eKG56BRPM7Zzgq3kBNJdzGevxEaitk8UmYMzZ4bEHQGqXbBJbeZBDSo7ad",
  "key8": "MquSkpmDaouDNHw3gxh15SG5Kjcn7WARUmZLpLBKjnQmEhCCncJsfVtBCMDHox3MKLURdVMrF1Kf1L2k8aJceMH",
  "key9": "3hwsPq4L8KXm8Q6LhmxoskmEauXoB6T9VBSim9gLfy3Gh26KFW1FxfaMMxy2ez1xDPkVkH6pD6E95fEe3jMfviiJ",
  "key10": "2s1VSggY6GFsKxNSSbbEejb4jKniKnnEUWN6cb3mzj2KADMZe7CvAyBq2UtmGuoz8fyzuwmooGwKqs8yWk8riCar",
  "key11": "5iVrE8q138ozW3H7dBCQPVcC6tzYmup3VgV56Dd4SNSypU18dbHg2NmGWB2oNopCPDPpRYTFS9zbxXEGy6AqcUyW",
  "key12": "d8QBAPW4ToJEgCgDe2ovtJUiwdM8yrtZYucnSUQNEyrPzG6pjDb9EVDyweeSVvnJA5q1v2Qijahe3ooSMrrbHPQ",
  "key13": "eU4fnkMrU7No1tDiDFZJjCBmkoAv95FJzTh4rm3UptDZPvvEeycTe3CfHEeE1Thfv9n5SgWnfaxnhD3TfDVBFjE",
  "key14": "5zRXHkCBiw39Ddbx3nYUQugks7d3m1GhkNF7Pn6Snr2im6z5dKJe1SW43yoVM6kqxJrcivntiW7Y8ayyJ5ufh6Y6",
  "key15": "3kZshcdZeSvbaXsB8arri7K9NDeeFbkecWUNtFAErD9dqgPJs6eBZ5G3pt4Tbx5chEKeyM8m59CYCYhbrKMBmSbG",
  "key16": "5G3yt39opJT6n9d6bo638jA39fSR2SnC42JLrJgr1kMFsezBYsqmUMaiWyPbzbuMXytFnyaNUzLwsTYTo9DKb3oA",
  "key17": "2brZ8NDXMf5GA9mWnWLzuBBGqAkDjerbjvhJT6FNazAuNuYxK5btdRBYfMa5CuTDDVPjpHrdSFHbBsoyDSyq5n79",
  "key18": "3w8m8Sy3vefgvuEqSjV4irjbJA3onqacCy6A9EzTqPkwapNH3jgmVUmnW4JY4fX2zNGGQoDKBW7hXZw8yJeY7wHf",
  "key19": "5Nn2ZKHQYWGqg9CsNtuWXUnEvBrESJviGPxtc3zU5m1TNTpEXqmJeAQcbBHhPgykb8sJb6Dpcaaq1ncnqxjtPob6",
  "key20": "Z18uCkBe3qmP2QsLXGCo1h7W64hyetfhC1rQizTyfFDckQwg7hX78ch8ewDn6Vw4RZsT4Jy7ihCX151Xmdb1B6V",
  "key21": "3S6RCCARJVcKGcoZ82nbkfwnESUWXbFdBf5n5gFG8jdbF1Y1XuEC5kzPTUBhgXjUZm3qokWjDRs38ioN15BdQCxJ",
  "key22": "3LyUHonYkC76JGEwyYvUzB8o3nzbopT7SoKuJcr25ASnQ22zxXV7cuUU2yskty4J2WaDnF3f431nmcY1PMaG89DU",
  "key23": "427HoUd3bSMmRXrPxSdxMvvyCKjgXK74vwTpZfQZriX4MmycqhMvkk8JwXRDLMzetvVfUBRswoZRobXTQqDLbdxn",
  "key24": "4Ysm5Z2fNuCLGFuqMat9LrVM7couCMTUNFafqRNozVo7JrBqQFt1Q6iAjvqahsUf8qgWXP7wBftJBeGeJe4AHLLV",
  "key25": "2PRbfkSoa6n5uYyk7qWFJvQTPawANViCUKfUuFKyz3Z2vdxmg7bQNfkRRPssr1n4KgFjce63hGAmP4CrCaqhMnvC",
  "key26": "2TH4ebgreiQ1EyKfMCBQZR59xjgRiaYNNf5U7pERGhj5QwiY1CasBFspHzCYbhji3FwnBWLPWJTwBynUGj36CQPM",
  "key27": "2ca5mJXToETFJ9fit2zHBdz8sVmKpLTJw7h9TwsxbMCUmvcBvFqSmyZhMu5VCkYWgmjUtkmMhp67dyJLQL2EFErm",
  "key28": "9FTvihujr2JV25qfmKTtx3HCa7VWmburKATAj4ShBFVMA99rZ8DeTcszx3DaLDAmZPxfninunUphfXwCeZyD7UV",
  "key29": "5nTB1d71TZUiPhp2Dqcb3MM6wuU4PJ22vs6SsVwBuDBErbDsssNZ2fKUnUAXGwtZJf7HH8uizs5pbxktMWHHHGXT",
  "key30": "3quDWpRMdsJ1PhK3mWQNZHkAkuE4YqsgKUcviMHa8G8iopaD1HE8MiqfnDKSMKZvbaFUg4ZPK1DiR9ZvftD3Vnro",
  "key31": "2QecHMsgVsbTS9oTb1ZbmGoXAZR1V1ieUZG5eG7D1rmiash4PsNHnrMQ29qGcguoNKbBLJVPrtzz5LugY34S8qww",
  "key32": "4cqB5mDovap9W12491PfKJfyWFTmHBpw2U6YBo9LD4EsXJbRfjmvg2HK6sazuAQgopdMQhm8w4VAX1mkdCmSqpn",
  "key33": "3ncjfeD2gWdvYxADBgeJswpLyhWXwpL6iSyCBPeKY3fdTeetrRZ2Yj9UAf2yE3hzBbHsS9KmxRAHNJzYP7vxrUMK",
  "key34": "6ZGeBxcUYuhrKrVJ6KShXXD55aMYpRxYr2bzwSQ8kE2GtGk6CCXvJXiBBCaWRugscBBHgDpq77gsGe4MTcMAA2P",
  "key35": "28U3ryCb1kgmjMBr6WJGq467dqhDVEFwe1ieFBrk2WJ88o1cYe9z8mTVBCbqmbKB8khjwUchnGrV3fLfcd1YxgV6",
  "key36": "4zmuMD6fDX1aKteJoE6NvpkB3kmo9dJVgs2FUKgfg7xh6vDStpS3jBTB9mJ5zNo86rXeMZYK854PrHBFS7duZNQ9",
  "key37": "48BoZvErWDicp9cw1sD2a9FgR3xNRXF5BB7uVWQPWkhEqX7i9MkBdmDASQbpcJveQXJmjavGsBERZgnxzD8Ug1YP",
  "key38": "4u5tXs9MpcUaULkr63ujw9KppiUP5kaTNAsST1Rc4kZpZGjUwaZo9RNv8ZA2V99ncZSTWh6dMZqAaGcyvUcDdJHz",
  "key39": "6mcW2grdFkpPfHyeqVjFMzxRetURM5keiehayrvgV8HVR7C3f923z8zE7vyfni3zKL47yyfLFgEPVeBp2Anq3Fb",
  "key40": "2R6gi2SPewxoMcHMVknyDBA5AR83zsFeGVnPwgQYxfDosE6vbTxVmuh6FGbAofV5ZajxNr8a83Ln6ysH8sqmF2E4",
  "key41": "3ws2hA1g1wvJuU1rdKN7byZguRbRDut85LmhcopmbQTuHaxP2SbBjW9r1rebMrWUiZE3Ga6VGpChAc9SLYXrgcPe",
  "key42": "2acNcBvMvBFxpEPqjmPVsJkCTFoDnb5yBoTRKU1wnwJehPfDUJDD1GjH134s9sppeAngeoDHEp1c8Qp4JDiqgUUp",
  "key43": "4FNqXoaCcb8KXaCXibVQiJPhdodXn6eLNfqE99uugRUhXKbXy3vYr1EX5U8GgV6sJBq511mDRPJAq1jZVQBPFE2w",
  "key44": "3qr4jvkJRwgapa7mzgbRiofCz2Uha89oVE9Uf8ECQnHnADrHAuLagBqwv5B9UbxJgx9598QbhearZLHaU6g45mHJ"
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
