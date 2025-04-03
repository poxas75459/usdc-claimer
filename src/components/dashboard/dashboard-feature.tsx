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
    "3Q8S2JHwTqvyMKkwfMzvymxuLQHyTwi4WqrvGJAaxEr5nCuH73VgjCeiyYZywyV3vfaX3B36xVq4CZScjMowVk45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61pJaKcTBpyo4D81msbocopi2aecPg51kTM7tkgVgU6gSKGphAAv9SXhaZziP3rMf3GcKYVLbSasenRNBQtqdkr7",
  "key1": "SwmubxJE8r1ixCX6j7hz1L2vcP8c5eryoYx2gDHtH93MVJ4bm5BYii1GAs4SJ3aCp3pQijRNiX2PQBEVnoG1xhF",
  "key2": "36qSx9XaAt4Zfd9bxeffvVNUi5HjU8pXB7xUFaeb9tv8yaJshQZe1yvD7PJ8BLFkuanRrkaYsgWz1CUv7qeqpL1h",
  "key3": "3PGU4gCcbYcZJZZ4sJP8vGsjG1px4BobMtCXmq6sNPShKcyAvo1d8HeHLEBco53Fm8XNbkf5sdDJjdAFwu8agNx9",
  "key4": "2ByVPLZseXNn17frbeK6bg81L9wHpyBMx4kEcoqFC1aVtJeGBfCVfmhfqoh2GTCEcLRR1o9ZiSehhS9ghawPexVd",
  "key5": "qHmbRWz3JnGeedHynf8FcdHeVVzUiFex7pJK5g8CLSpyTPBvu4CiihCHrA9XGbkjNboiz5VeMRff5A9to9QJ5Ww",
  "key6": "3kwbXhugKPDan2E58K93tnMSFAUUqnmTQrVtHV3rgCb9p8SpHtVARuNXTpi5NGaCJvWhncD3jPveWMJyfk9eMvj8",
  "key7": "4cC4Ef99Np58Di27NBoDy2SoTARgXUWZESK2FeTtpijZ1GT4h1Sb2UE7Kw1BonnMbVA75YoR4BaBTzy7Ja3h5KnB",
  "key8": "5ypD2u1o9wUvDuFvw5UuzcjTyY46EENWPAtYhySYTmFfFT63VLuqYhGiGMyKiEVbf3J7Fx7GaRLdoUtJQaDcYnP4",
  "key9": "8DNpBGThBDXL4vtNPoZdH8YtbaHi419oUNnaoywpd2zJ1fKGQQE9SSD5utNYF6FxCe2Ht55wcLDDuSuGwwLuSAy",
  "key10": "3ffMur4PYF8aY96geooceGWS3dY8cgG43kyUqLXr4u26Twe6Fd3yGKhpxHjCrC4v97B8pSCugmCRVue2AvVDa5yo",
  "key11": "4niHMaMn7fcGsAsMmvbqSZ8aBZBEJuoansqVygSU1yXdrCnLyusEPAg7JUdVr4qFbKF74CkUULMC8y3ku34havFq",
  "key12": "5dYGxRcZwN1LBMvAFn1R1AR1NRfGwfJ4vkztNzWnmUV7tyEY3yJpGpzEtFShqg9U9hwnDbHYiXqK4Ly4RSsj6DTe",
  "key13": "3RnDQKqspJDJfaFSrBdkE1Ym7sc7ELjUufY2GBrR61bsD9chCf18N2wFrnHAwLH882FH6FgBV885JSDkyq3837dD",
  "key14": "35mvrAZNG9GS61ptzgQ5bTdEhwBSymBfBDcQzeApdntp3bdLh1L73pYJvJuQ4HDSA7C5VtSsMXHdz1Y7JT1ip3vJ",
  "key15": "2U4ALee8QaoPG7qMA9G3p9Tv6iiWKzGuTidU2E4gWmVh6dfPANo2Tcv3autEqtvjbRGERND4gw3mYxeveVdTNmGY",
  "key16": "43XjPjtmb8o8iBVmrUk1XxQqNCfg52zpozLqUM7ymGEy5mUXvrBZ5ft1Jo8G97k2gXYUp83simq7UxNzxugs3cvz",
  "key17": "5G5XKJf1C1k315D42g6gd7zcQdNkBStHfqaSXavn8yCtsU31qXwYebj73Jixu2JUE2eLGvgt5iQxp3NCChjmVWU2",
  "key18": "3E7HwDbAnCweN65f9Pcv8B8b44xay1ciybPfUpttBsRePiQkZqcRHM4RxQWsBpeM3zd6YXLiQoS52rRdoVUPYGkg",
  "key19": "MYM8gy2unKPFRYkHgzpoDMLKQYe2Rj3ginq1YbGLnSk6KAwL2h3PfDZaHSHgDGDHLHSfWULsWdxtT2xqNBKi4hx",
  "key20": "23HyExL2f6DWPhYghVrpL1kJ4QwLNThE172TKwhg4VLFXcAK1GTkh2vuHXK6HjJhrPJZQgDyFtcrvZ5gNDdUSp3p",
  "key21": "3i7z3LBrzzght57Y7fPuvox42TruJQnBW8TcEVis4UfFmp4URDqjZF8mkaLCQFNfPYiSkuWdz28jb7UHrZ1dJyaj",
  "key22": "4ZuXnm4YUnz9uzwEsF6Q2669XPJ8ySAinW8i9KUVmEKoSdaGhum9mLtpDVJ2tMd5ET41d9aqay6Xrda3VqULqSrs",
  "key23": "5FHAFJBjxxmZoFDmhiMBV1bjh9U5LmN1t5GkeUNadh1h7hYcSmiVPvvRn3kceJ3vjrU4UsnxUNNea4EcPD7NYnqe",
  "key24": "3DbzHk3JwmD2ptB3Vw4Nb9N85h9ihC8fBCoQKwL3CN8kEFAD6Lka5hpZXfWJrnw7ocLTm8PgZ1uMaLw291UjwPX2",
  "key25": "315yCqojg37k8Dbuo2CW7rfLLH2JZc5ryRyJuG79sXps37JUaNg8cDhyNBYU9w7ZQoZFDkBWQRuA7EUPKpHanCBm",
  "key26": "4Ps935HNqi6tk87wZJViQ996r1aN7h8wN3XhAqVMf8HMLHjXmtRr9LP9hmxCeB6euCyCh2RYXNA89NCpvxJeBUv1",
  "key27": "2X81ZCYwpmNML7ju7ALngVLU89cJ7ZkebZTfxMQiMUxTmgSCzhjM7oZRFEcc6UTMaKaabvVqXLs3oQiWxjW2jb81",
  "key28": "4TTxWs8raWD2wc6YQPYZhrp7V4z7fU1zKyHC8YRUvz8Vb4LBjQQBbnKf3kcfxfeHAmiNCdAdX9gr5aSAHJadmjNN",
  "key29": "3aHPL1gMXodFPFdsyvsngxZj57SnLm9c3c2C34vYFJAbd2fFZ52gpVgcS8CqGHvas5okXn1WxdJwUAS5ezLgts5w",
  "key30": "4aAScrxAphQVaJH5rcnjj15AaT2715q9vySFoPyKKkkdcPyXRGt1ykqRRLwugtwYCFHxaopQGHP2DA6Y3iAabPf",
  "key31": "EHkFk8ANMtZTvJYhRaC9zojoEYHcWmNqAkZRqtH1G2AEjnM89MgXWmMw4pvcdJDR6y8djzA9HCd3Vxpu9ZJ531b",
  "key32": "5TGVhTMYXphrK9EpunyhSMpVa1U2fsGnGbh52N4q1bzKn8TbLKU5VpswQF28pMYXBu6ViC8RvHqqQUFCNGVLg8ve",
  "key33": "4GmqC4j6j8vK6oCYBx6nrXKQmUhq4ipicT5JxE7JwiCjMH3ziiQqW3YqaLGSeXdLNWeUF7b8jcDhtsHFSdT3U3Zf",
  "key34": "VCwQj1bHASJJBr1syPJ49cAAuriTn7EJ8cDXxR1M1r4zdMMgqTZs8vZ8bahsc7JQUF1PywCpsQzkmMpHGR7BVUY",
  "key35": "3qt9NhGodVThWhUQ6abXkHQ1DuLzTgn7XYPKNdBvBBAT5iNnkVbJpHacSoLku7mieLJJtxbitd9ToTopeQbRCUrN",
  "key36": "4SKdLa5ZGUrni1K8FTt1gjDPW5QhXzheNv27ZeXi2dQiQNZCSUw7heFNdJ2gCtdDqMtxNkReeGEfAfQbancoKnCq",
  "key37": "2k5FVqzanihBh8kLQxYShMrBA7wUGPZsB9nAvMKKAFtn8mWA4Ah5wWvkAsDZEA9L5hwXJ24WPELJH3sMW2qgHyie"
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
