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
    "2bYZALzPWXZ4TMQb8Qfdto7yHmDdCTCaLEpAMg3eZieUeBWfuk4tkXC4zwTQVsEtL6w3SRtDC8Hy5BkYApWWa9jN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SLkfnWDLomWypb7vTr8vX7nXJTRodhDi5FCfYGbT9VBPTzz9E6mvz8cPkL9WFqxsavHXwTK7tJKj1nU3o173oQW",
  "key1": "4GHHckXMefYorCWEDZa9r1NEErWDH9whUXAthRP2vpjXuKiSE28or4S2bU3T9mbW5RWD5nSmewbU8HpvFiww3qRk",
  "key2": "3pu3eqe6J5Cw3KByCRbncT8qUMB6nHrHrQPW8EiV3A8jAG13n4aBniTCLiQsVMwSgYxjCsrDis2uZA8FABbiZNUc",
  "key3": "3sFsCV8fsE33H1SzHUqdCFCW6eVzEdNf2Sg4zHFMoeH8qehcXkCaiCgR8RVtAtRe49snkunXzCpaNjYAm5AbuQCb",
  "key4": "3oakb83djtyxWmbaCAZYG334uecYJ9ymQQbFtsC5fWpfMzyF2ShgW6ngdWufeEHChP6567hpJsGhhEnvXibmCuiP",
  "key5": "2mPtNqTyKugQ7mA1u5BNRLESB9cPZKHMxpioWWtMwp76uxZ5HAymXpVyPdMfqSqL6dUZ2562i7B6EFkdniuKix6h",
  "key6": "5HsDVf7aAVuX9c894nDTvBtoETqPC4X1skaLSTr6uKL99VWtbWTMsMUAULFt2tg323vPNBWxWhGiGroXwJxRYRpi",
  "key7": "M4jdk4XKhESEcA2M3LFKyUWrqfyhF6VmpwGrU5svSi5GRnRUK753oUwTsYAncvJNRo8qtgh4KEb2bN7GNy7mYCD",
  "key8": "A52SWb2pKWYg883TQA8TVkMy8844J7fkBma4UryEwoyDrjrE1Mqy69ZL2bbP8G31FHpdit92D2apoFW4oJVLPWg",
  "key9": "5xn5aMgYAFPmtZZVDtuEgWvwV9AhHLYTB6LMTLoKuFf68aUhM9zDayooRpuKeMmSJpxnq5Z3HUftQJ6s3h188vsb",
  "key10": "2bhbVkftj2bR3CbJx8YupTBR5jydi1nPf3fvXhePbHsUoqg9xu4XCQ9W2QGwyF8AoKKXSgcR5a1VVgoao6YbERNz",
  "key11": "3n4SufQzZZBRqgjM5r6g5Bqr2kZD32Tmoo4pphHL8evZFMMc9yMk11mmrV9crHyiwa3mARwFEn7qvqVLeR49QanB",
  "key12": "4pA24gfF8pHQP1Z9QnRsNHsemkSnZhsjepJfC6dXZXjq5e2ZqhNKaPeUSt8nKxTcWGBWcp5qwwVNi9aKYHYuBrkR",
  "key13": "3ULtSsGTW63V3HZdAHk8MiyokzFvGFgQjVLeHDpuPerGNu9JL7qAmUV94UBzFFGTGQ1FZR6LVrv7dc4rc2D6v7Cv",
  "key14": "M5US23nnHvDLMpVKc2mnKhqnLTLzkKbYyWaVQXaLrpxsWVkFRC5y8SDCztX8ivRLBi38u47GU9eHegaMP6ThqGt",
  "key15": "5xVPBxz68wFVv896o2vvXxCbsrNmNPVEzfibzvaNi2AggDBB6MTqHa3EDS2cq2PNkXsFGBpgDd7ER4qKRAZczQ8t",
  "key16": "2tc3Xd52sF1zXP8sMnaCuFMSbLhwDTrL5PEU4H5FFeNu42ES8VAbjPSQUuMuPchD9krRCX1wMswvZn4ECJkShexA",
  "key17": "55j1H7YwttLcg96xpXieJXxdgopvNdKFsv2Rr4VvpcAWGNkAgTpcaxCRoquHXggdoS7N4vz9BJ86WzZMtLeMytQM",
  "key18": "2UGLWCjRpCPjuEP2XSu1SutFpxyseL9wowE9uDU8WHKNKrxY9L3SXuLZyEJ4caYF3fypwZ9xjLDoWS4CHFDTj1J7",
  "key19": "5JJsiQPcGbjv96LdDDeqdvWyyYE1paBRskuLUgrgC1xd3garoNFiRaekcptXvQFMDVv7K6jiHHxq49syFMuLij6B",
  "key20": "4m8XkbYFc4TKssj33bCugsX47YffcuheUtWcftXkHABVUpdGw5REMaAg8ADoiRpysM6QAd3bnd3Agh35MDkbJAHj",
  "key21": "4aGig1dvmaz17yX3H5hvhNmkpmhCBEnFUg55HbF29C44hJVebM5zbWNLPz3GEykXT5f8uUg2Br7yVoHqhDjrJEC",
  "key22": "3dUUrtPKwLzi1sqyewXu4MAY9hCX4LiaaXz5G9AWGEXSYNeu8co1nx55nqV7ukxaoZwdF6hJMcmJVALS15VKoJpU",
  "key23": "5bXXRVayYc3DQVkXkitEqbUQhenPLi9b1cVTvfU6EKfyaEkGcWuzLRSpmpLmXge4SYT1B4r39RaCAEzKJu9zmAZ2",
  "key24": "3tJJmvtS6CqkRDafreFE7UKxCd78HgXTvzcUrtQ3Z2DiPjW4BDtxTpQeYrcfDuoJ6DSMUF8GJ2cZzeLvdPrdkPXY",
  "key25": "QJho8hRBTxknmjaFP56YYhxgSs3NVADquSFss6xkTgM2KKA8N7RusbgRGqSzfL77Jg1ZoBwrNPCYEdHA6aoMEft",
  "key26": "CEfT1SmjJxg6EGjbymeXSBccTK51w9RxTk32NXZ8DhzpDRP535xzLpvZA18zryr1RxykWB3ntwNcchPrh9FvHqY",
  "key27": "3MiCZcELVKxJPEgabhqfyMY2o4ToazeFH38UySPTk9Xu8dCq9hRF3B1u7i2QkupbY9qbm18Pujbd2bCMNKgSTHRs",
  "key28": "35AY9ioJwDrin2v9cqgN9hPdE68EawB4UDBmoNYagnGsHioT4tqt9uWDctxTxiV4BUmhEye3SvLCWW5Y7aPGs57w",
  "key29": "3ovAYmUw3EHGZxEvmoFvDMSw8aQp2RrmhATUSCkA1vWHpLoey41xHHhCZoX54PStUsU8iRVQeEeERkhMGj2nu7KX",
  "key30": "2vAHxLuTyfgH27aAELPaWUFiyEuiQdELXYZtqyxpTnc1zn7Vd4DF6grAe3h2iF4hPJ8JBAxLsNwdKBmFeAK2UVfH",
  "key31": "5oser7o6MqxnHnJTbApWJU3voFHV7taE6PtoWoZdzriUS4dvArfmtykLh811X5Z4GoZug8RuYPeakPiPStrhBSVp",
  "key32": "65UtLi3q1cgvvU2Tf9pib6pv2B4dfvM3k3nhjCb4vf2nMkCuHp7axQq3LrFeFxej3tiv2pQgwjb2He1sRySVwMiU",
  "key33": "55cEjWF1yjbmVqWYBzw9i7zdip3jnvHoAGYC8dhC9yoqsFciFZsWF1H8aCTSj9FqzEAFFvXw23e4GsCnk3ue3eYs",
  "key34": "2dtsnyjS7jy518S123m58gCRGvg8EQ3fk9krbJeoiom3WJYZreXRHj9KM1iWjzyyH6N144wQbhcnKBXSV5Lt5sgG",
  "key35": "4FgfQb7d2SW4R1ExEZvKona4Z1dt9dToyXdrTk8GFiqsBra1WmDarSLuY3jrZityxPARu2TBGGHef92o1ViyXyst",
  "key36": "3wWyZSLZ4Kek6K6Ejj1AMB33EV1M1EGhDdCQsjc76m1nZ3mxf55Lye4huPuLY1QiuCFVW2B6T2QcVhbJtw9QZ8Dn",
  "key37": "3YayLqX2ppb2jkR2zAb3z7mRiTb7WFeEk6pjzzhPMwJC3o3SCap7kJyCxzop1fL1JaUSqiHYdr55vyvux8smxbkX",
  "key38": "4LtWUJTf2FywJWLTt96cDek6bZZXwh3KxE2gSswV2e4hrD6ijYJPeKYMeVArJEvdPZwNovZ8xPL1MLLgdQAWitz8",
  "key39": "3vcJUiQRivZ4PBNBEpAi3A5HacU2yau8zX1EptAwtwedHnmdiQieQCu16HfYvGnpd8n2R3WL1aZdNA2yo23znZfY",
  "key40": "3kYYX4eoxfVMe3fzvGXPAsE5XmheTPpY3kwKNLuYZvZjoPeorxRL6dgG8Jp8GAxbeSSArUwvwTtErxuWF5qHVaqX",
  "key41": "22afKUwDQKvnnfXeUtVrT3gSxzo7GmenXShbmYeVuSyFmNYSrSrsrtoUicsWCf5sjtzuG6My4XHUPTUZNqSgbuXi",
  "key42": "3rpkf5NMDaRji3DMsMiJDCyRyVTV9thCVVPu8bykGVb8Bjkp8Tee5H7noqvUWd2M1udYTkoYMqDB5m6SCRAFyPQT",
  "key43": "2FTouLJEPkge2LUbEP1YzhdQHThMHDeEDdDa83i8hwRu8BGaKK1veFxzUtzLCFnMJmoWZXFe4Ep9p7fFggTCAVP9"
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
