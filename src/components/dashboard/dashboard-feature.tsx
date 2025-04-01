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
    "5awdciSTk1AsefsVZPVKJXhDFp26p16qjXJLki6cQTMSHH5zNYjZ87YNmATXqXavAKKbyNba3h7E32Zoan6RGVoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wjNpHmSeuCzRSVwjVZqyjEFMXKqzF2L11VTsFxpnDWaTvExcLRyuEkiWC5rPAMsU8QTawd7wueUcvBeDaYKKo25",
  "key1": "5x6AkuMsuFxaS9uUDmzXRJyqFLLmLWGXinCsUdftxsnKS1CcgxCdjdgFPBo4QSEa74zarKV5PcwfpNqYokes39yP",
  "key2": "3nkA57vdeD2bs4mi23FQZJWW88PcYByHmdW5x2KFvGQYyNQzqAK5HdeQF5xkbfLuGvMdjydvSz7tvfhAygnLNLX3",
  "key3": "H9oM5XCYF5HDzMwq5x3bbnE9rpjpPRrNQfxMJPwkDQHovzCKPShbbvUy7uz2TgsvmTF2sXN2M6xoFA69RNvXSUj",
  "key4": "2fcFoXckvnV41weBGYZEUm3StKvtRF6XGMD7Xr3EDpaXL9PLEt7pStDPTqybEXawmAxnVQHyZrj7PqUqcZaPUsUp",
  "key5": "4D8NLwRzWohe8cySTXs7D2V2JJse5VGeV8F1dz3uckEYvuYE9jgzNF5D5S7SJ3TryD6WJBCVC2tucSrAAjPXS5H6",
  "key6": "2pYe4HYor5CAJWfUTujoPth6NjCuhae31LMuw9xEtHK5SNmUfEdbPY3cxowWXKd5QvASVqLFz7w28pxTUGqGzCJz",
  "key7": "4W5Q9MyD6pZ9PnBxkpDwJQDR6jc4ekgowS48mmj4A99ic2tfESbfD7sRRLYejfSR14stHDhxVitiw4ijPHr5VSDh",
  "key8": "5Wd4mwaf2QCabJUPzghSMHMMt65YZD1YNgq7t9PsPsFVjQBrjSWJBywXLnWR4QMMEWcwM52oLdrDPgWBeqwJQvsF",
  "key9": "2fVhZHSJdLWRoJ1iTmJGMyqnWevUP2ehBGBpSGo7fQvoXG5944DnmsaS1mtTXA8ji5tvfSwH2ictbkBdE38LQPto",
  "key10": "t6vk3tsMpnZne5QKGivNAF47LiGhn7rEYrCNNjb5tJh75hzHRctxjBUbTMCmeen2ZWTATCbDxJTSTVUf3wnRBVC",
  "key11": "2NsM44Mgu2oQWjqGHrJaF9kevTN3t7qyFzHnWhfbbFwLBgrzisqHs8D5WXipZ8T3XvaKRPeorPbkhT4eAaNWJ9Qq",
  "key12": "MVerYMDpW45Bbwid66Gsx2Xv1WRXPYrBxFPQEn9R1aYZrS4RLczatXFYErWRRv3JJBJxQps2Xvf853yB7ZbWyis",
  "key13": "2wAcNd42Na5LJ5A96PkCMBNPBRSUsLktRmRd8bzdyLKSGFsxzjic2HTMM6HzdRoPhkGt1tvGFFHsDdjVZdNa2PWr",
  "key14": "3HEd5sx6DE4CzEkCAkAQxzLfQLx7ashqpAi9ko2DzUn4d5RxQYXqJWgS4ggpAPsbtiQxMBUa7bFnUgZ71nxftETs",
  "key15": "2qN1JA6AocdjXVkEVxRJ1b8sztxHS7otJa38NM3QGyeWam11TyhQtdbdte8Wb5U1JRjenYTnW9nYE76MTtAyssqC",
  "key16": "4BaHvvJg78QMS6C9KXmu68Ee3W71UTsSpbPgLysNu2xrLaaDpjrBSV55Q4ieBgNXiUXfQML2mqeNgBcB4H33585B",
  "key17": "32tyrh9nBQ7dCwPJtFXnkVwM2K8jzHAVXQpm7UKGpTaAnkHiZmNJQ5hw9jCeD8AzeHcyAmRUxM5quud2SjYFJR7y",
  "key18": "tUZw4ptbhmieQEBompa5put79wPuwZjnXTke4z2pAGFtYisdefmWUwCWbijyQU423JizHQS9XG98Nx1SkzceJLX",
  "key19": "2T3C6LwyWMXuL9LWS5xKPWiWra4EuhmujNJZZxVMSMKtpcy7iYEcYQ8q5sa6VZxfKeUNjKBr3wEArjb2gfHCR3cP",
  "key20": "9fBFUndLcMGysJ4fQCNx1iW6SgscneTGH33dMNiJcRgPdcCsV5YQP7q6eVbfNfcXTMfGuma9f73niY9AWfSDqfa",
  "key21": "jhEM8ocoyT2R9yLpCCBKToYHfC8STNFaJWfV1yg9Q3Anm9CGWU9PiVqrtwGKNLgukNcfQ765Uwp7kq86jUMiBCN",
  "key22": "6Jo2es3SicyXKDAsmEnqGjYGKm9JFGd8xN3pUQuyfJhMd6Bk3Ype8baK81cyUZueDqrFCMEiH3S4JeiGosBK7Ts",
  "key23": "4EzjRvVJjYsaCgrBDDCTrac5yz3GMYcUP8MvertUPeW9jfumrjd59EFMkow6qsbpwMDfCkbVbx5HH2pFnzqMsaAW",
  "key24": "4fyiDnqB5PSkG46jbQNtaFiDcGrsNUyqiVbZrh3Vect2DNLZ7SAwbYigQdd4iT12n51dJvFfzLMkK7ivtS9LEw8M",
  "key25": "3t2NSNP6eNUunGe9C8527DHF4VkrFuFq9Z9ZNM1DjaYXJ9fupEPXQrvJDRX9Fmp6tgF7tjFeusfrengJNhavjS2p",
  "key26": "46xvDikbzeFHTyb2u1JYe1xev4ELwj4kEqUX5YqQEyWuvvAotUt6XwVG3ty9ZwoCRa7GQwTKAVvu7evvD2GDor5b",
  "key27": "3c56VNWzYMcG4AsUDJsZk8ZsGVzyojuphTpm53NFZjdLapxTBaFDNkWcyVcFsLwniSb3mg1R5Br16jTvSbWXRBam",
  "key28": "25pWczDtYsGYpdKkNfYCeKshcLZsUaqVhTD6pWo6R9yQJykCgfD563yg6boM55KTmqrJrbvn1WzGbFph98eoda13",
  "key29": "4uXh1qavEiXqoWxfTcNDAMz3j6oqyKXcAAmyi853JnL4rUDbUiXDddauNCkp4bLqMvj7ssBfJEYY5TwNaBuTjJnQ",
  "key30": "5vRvXjXzLku9h2saJLoPQPKabZTpYwjLUAThbD2MMk2EbxRPEd3chFHb5Qvh5hwJdM5gZeW1BB2EH2CHVN4uoVQ5",
  "key31": "2VayHymZ3WbUDySPHbwRmr2eUvBfVmUQ4VNE5ugp7JiYR5CzTzT1SAVF2DW14Vjkb55WqokpctwF8gm7wy1wqtkG",
  "key32": "53oxhih183qfpnT3nEzDDsQradAE4nx8CegyDsWxejRxtikT37PXxZnGbmMfVJ3AyA5WDo2qyJpnZBcUjRwy2hzd",
  "key33": "zHbrrMEQoBpguxXsJUaPgJhhVfdjWaY5U46wot8ojCQBEWTQArpig9rfK198W7XTyG2FC7Nb62iqfA5wYtcycBH",
  "key34": "E7Rjn2HwQ6hgYCUL5bfuBrvSXmfa1zqFri9BkgjZF779mpkYcZgTpK1nLrdV1YcXM5hmgYjjFj3Vrdci9rDmVX1",
  "key35": "2GQeJN85xjUUM3Fj3S2tabKhQrULKyCXmvuYtVLdA1MjLj7SXkhJVPVCd8U7qkmhxmpQFLSKk8VcGYTk3CRy17z2",
  "key36": "2uM5jbXVPKbLXcmyMjnxE2v3jQuaSNj3KU18HNUQerUL3hjFZeVpKwXtfogoXq4Hd3qixy6f6xSK5xf657YZdsWZ",
  "key37": "w3CYmmxtJZxHYZyuUBqzSYDHvUFZwHHA593NjRe4aWirw6UjNsTwsQNuM3ihGTy956F753nhG9C2PXSnErKzvEk",
  "key38": "2izj2qnEF3pJPKTBUKyYNfvkHMd56gzooU3wjRngv5TZZueABKa65aA8zVhVdT61EuwbuC42j2nN1zdiPYYTcVL3",
  "key39": "276LfmCLys17nPFZi15VtHqFMgrvNZkgme3ZCzKq6qGUESMkWPvm86E3ioXsCfL6DT2joUCivWUoz5W4t6eKGgv7",
  "key40": "4hnji1UypZqkW5foSgMf74FjiozGCwAekqgJbu3ueoCgCnd8vdB688qpBaGNWpc2mrM5qDvxxjwgaEaPSJKQYass",
  "key41": "te7gUkCsaeiBmVtX8YCC46raVBZ7sptq4EbT3NHxX5eDfzreJf92fdNg5o6rBBqqSwnVirs43YhyxPMG5CuMx9z",
  "key42": "5i7EMBuKBL49dnhXqJXabCbD2ewx3rBDxiSCzbRhYHe8dcNr387T5hcTfoPxiv5JXJzrg76xwJDiYf8WUudZJiAA",
  "key43": "5HUeP7mfYxN9ygY8gwizPR47qYRC1v2tMVMqv2oSmxS1ZuwT1iqxvEDJDpiGorTk7De7M3hjqLUJ6chVb87t9RAo"
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
