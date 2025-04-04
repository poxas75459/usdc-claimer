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
    "GhMiX6nGRcCsTwicS3W6kTHmpZJgL5xomxad86Z9NDMM6EtkhcZpfaoCgm9o6mRaMYx49WGKQ838rd9GeyjwDJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cW9mj8FXbZMP5KXydwMzo9B4eZLFkRzoFehZQn1d44BDSkSLivoRe6AsvXeevU8Tv3No6JUHKDaodagytyDyGcm",
  "key1": "6nN4c24YPqkAQCGmAktaVoaCr4e8t2xTgLeSXbeFae3LAX8r4GsPBGSPefR9DjDR5zfUiLHEcMWcTqx4TYmtrpk",
  "key2": "b92TmoqYtjDQ2Y11xrHaRPxcqcbnnC2Go4FMurpRKMLRbtn4JELjbLscexwqyK3T1MSCfGY3z5PJmSvMvaXtjeQ",
  "key3": "4yhtA1pXUhStCCtDr5eJNxz3ZtYKrNkkGDwokyihAiT3gBwScbPzPYGy5uBQQgTLojB8mRt8DeSxJYeLnryxYtEe",
  "key4": "5TPjyDfXYntGaAWgUyaCA5pT1RqqMhb57faDkKEJpr2KL1umVRHHaAnVACGeWDwVeRuiZ3dJSW38ARecr4RU8gwK",
  "key5": "2GSwBQDsznebDxGE8Ne9CkTDMJ5Urjiw13NGE8VVgohFpCrd94UXM1mDiimXVcsdmxqjmSUicJK4KuvugxobKoEW",
  "key6": "qmscSpSGm6mstNvPm89JdK9TauEFZuXbpdUSwcwsdyn3cPiP3qSPy2WjSTpeSgMjqpkau8D8jBsr6knMon7wQ7D",
  "key7": "4Rfe22Bpm54p9YQUaFnASCxs1WwiA7RgUMtdF7M8D4kHuZ896VCJ6Z8ayKDR9L5TsYFaWgCkGBkLUpMS7QSxSNLn",
  "key8": "hFEm9qqeaw1oESXNyuAPc6TF3bjKyNsjpNeLQdGPpPnGXhzsLyjPiAn6RURVUCUUfacMjdvML1nC9MLvqwzGXHi",
  "key9": "5vy4P18CittS3skVmdWjoj5NHMHh48wkzpW36FW9PgoXJ62HBJ9uwr67w5kzgd6FqV3ePAxZcSrtWzUYLcyX6d8g",
  "key10": "Fpgjj1855DDWXzd15efr3RVqfdDBERo1N8Qm8e2EeiFthn12i7aosADVsy9ucAsYBB3ZwgVfkaLrjncujT6T9uT",
  "key11": "2meqGUhBDxfELEk2fjk4CuRQ9V34BBdfUZJ49aBTobp1QskaYaFETpwxcyMUnqEGszmRbs8MXwp7meH6zVVzxigy",
  "key12": "2Kbva3WLm13jTDdY1fHVAvTMuyDoi6zvuCwbHNAozBD77Y2MbPyPjsManafa3tk6P99U1NtCmsionyAM6gaSA153",
  "key13": "5JAGsonnzFhdkrQYfUsBss2hNsEJD2CJBtmX5wFXnjNPCZcLfbJutPgwwaS9UoNr4dMXK9fxwAuAVv4dm7ZcT6nW",
  "key14": "4WS2UzsUzz2WArWVTER77xYpotsXCnsbwMD9t99Du2FFuG3voR6MxFkxVhyqy29CdEpiFhTCuqnzBxdBkrETYBo3",
  "key15": "aB1FJqo9e2rtcjwtru76TTaStyCJcifEPQUrGvxyAksNAHckqNCdvty1Gq9spfVFzTudNbNMziiSC6zxmAXt4Ty",
  "key16": "5RzkLkWTyypjcJa6zh8QkZjRpEkUXLFeufnAkX7oncuU5kwjy92RAF5KXHby4gb2gjeurfu2LNBtLaP6JhWTbfDM",
  "key17": "QDESDRP4KizAK32JHpMrD9S98RaVzSpSBuTwFta64CGp1mewsXC6rDx6EBvB8HKiEGqSCmbK35jSETDtdwnzqRo",
  "key18": "26bVDtkfyKD7CZZN1wi5mB4G2GNtFbEDRMEtwKppkKsfeKEPmxTACHmhqxcU3Ku4KFJia8yeNxao1ijrLFUotFrA",
  "key19": "aoT19hYmyvnjJnXuY6Jme3x331FYbykBfo3muZZFE6mhPfyXPY6Ci4YaRRED1okzAZUYNkRTi1QMvgFkS1fyefF",
  "key20": "2w1PTbHMkyXo2yqkSV6BAc5mdh4Zmk1y3abxZsyncUWdBmW3dD9yuGRMoMbTcWHPgRSUXPGLAuAPrQuVUxcnXy9L",
  "key21": "5ANPMnEcwgzMKRAdDQL3i4Mth16k23VCKP2ypKQeDnX76edkuC5itcnVXB3KgpFA8QzVhYfvz5pbVqk35bdbNL79",
  "key22": "jYsYPCYzq4hdQyDsv2X7qzZwtZR9MrUK34MXtLk8a9Gb6P3YhPhoSnWCjqqRL2PwiSTYgE9kuDgTtpjwY5J5FNY",
  "key23": "2oLDDSE2jeC8aBy11xKvZpmQkkHCkqZ1j4W5oyShZC95C8Ppyq8KPRced3QmxE8yb8kBExajbHRrwSuKEo4ZaQoZ",
  "key24": "2y1ds8DsAvoKKuXwXDXZnhnzxm9G9TFJJvyYthhdUmzPEau6oo84EdJbeoDqhRZMdN66YrBhrKr3u7kw8m496xri",
  "key25": "4W9oK4SQRR4hGSXzhuHbM9vaCQ8xpyid2oFxu1R2P9NMkwN72AU1yeDAViLrnWGuVFXWnYdHFRFrusHu8Cpfr7DY",
  "key26": "5PWYWqtYK5yXoHwZSTRmfLBr4E22UQyUwJGveXFn3aSaGsK3UAJcLvhJqFUxb6oH7JzNWRdpy1BR6gPwYWaT1KL2",
  "key27": "2EUGWumVBkG8DDG12SM59nUTkcM1HvhBcm644zPZzzE1kbHaEm6q8knmMFAM8wqZ4PF9PFLDrKht6wfAgfzwob6C",
  "key28": "3ueeRKwi43hyxT4Lj3zShG31cW2u9Bx32oYi7MvqzXYXoW3HRucgiSczKJD1eR6JoM12NBgtEVM4XLBaxNJWTGgS",
  "key29": "2YBvETJaW8DSB51QBXjK74iZjPCHqakMcPusqzofowBewnpi1W6oocNQusXWWjHANm9yjM8ZWfi4JtsJzgYE2i49",
  "key30": "3RVCbPkp2wjrouz5EB7KVYmco7JPs8S7164YApaggKPAyLimoNAhaiSbtAj8hkTETUdJXMLxbHLVjQ7FJ2J6cXu9",
  "key31": "5wZLpVH1KgBA6Rc5WtUFMgx3P1GxshyMQQ8BXRuhm4hu8gu1aUGEzope7AwQdEqjtWQtB3iXdqcqdxFG7h5wHPeC",
  "key32": "4Cu1eXSqkko4iZshbNTerM1qjeLMuiMZy7R7duDEfUwL6f5dftcc8kXTTTGYh9qZj4sb76DerTEu5qDmsDde3pvv",
  "key33": "3ce592sbQQhVWGZ5ZdYVUTNYembapbZF5TvPzzeoYf33fU77DMECWspFDbYv2QHPsZAyYWTJALqXSspzkra9Ui7q",
  "key34": "48u3DzPgKvuxD4Kye4WZrk4gtYekwaqSGyGLaGvBmD73unYjPnviE98GkRBqaNWfhVts7zPAnvJ5gtEoZvSWSusQ",
  "key35": "3GtsaJF1hKwoHbqB2etK2VW6SeSsBPTXhnkjnSoRdsNbYyGzpiA5Mn2NuSxaqV9XhRxPs2jVinwNp2HJTmQd6WhJ",
  "key36": "2y47i7caQjYUHtJMxqA2VvMsuPkLYs3HQqEiXmdriDtM6YG6giVDkABkNoqaZ25v97XbZXcuVZCuxGZur8WJS3nq",
  "key37": "63275egVhRnnL3sBLi9z3aBoeheZetUEk3VVw1KubxdsgxZabn9pU8EySiwzDusxRWaCR4zbKZFeLe49HEotytyM",
  "key38": "2XqA4PxhL8kagnhEdA2xTXAUTbdVtADsf1mt7Qh57tTNdHHgCVDLLBqUGkbZkSBGK5snHoXnDYB4jAWkGnWpnirC",
  "key39": "5r3N6WNpNScVUXiYMpT9UxEw9MxC6zjV3AZi4EiszJG6gFjD7WUfZxvUWUfoPBHNTTJQm1xyPr9pmYvuGekfgAZU",
  "key40": "4iUyiLzkqfBktg2AnGdjfMgsAdveZECZCN2NbUss1qkT7GgjxSTdKq1zFyWYRxFStG3YrbCh2paEsxVHQM1gfgFh",
  "key41": "qxYkn7raQX84Vs92dswTTsoE5NN1FvZC8syLEjKNAfqFeuhC5NPtkEtXLzhkhKWpsLC36M7KfkCn3ms2SjaUGaV",
  "key42": "4uerecQhQHWib2fFr1HvGjHnVi2RMD2aC9eqFa9YfbbL8886CwoM8xddHMHt2Rjd83Bqat5GVEPpC6RDHbKNvxzr",
  "key43": "24HGopSPyPdMD1HY7zwQYpQxSNigiQBRmrh8gmyYXY4rZyEZsbbD7ng48sBTmridiV7sFxJPLnf7pXref6ubaErx",
  "key44": "4zCPRpgrxNp1XZTqhiBbe7mtYCeHZ8sC78HEtGu6LidybJLxsdGPn34WN1dMRjtnnCfzFuSqNML36RJBb62Dy5Z5",
  "key45": "5sFtU5CPRi5cjqp9VS8uBuBkGDmDSSAtcNRoBU1aqNe2xEbDpwkZZVLiw7ceEDWMtY2dk79Bwjrff7AJs4orgfu3",
  "key46": "2pwivAFq91NkJ8XrUanPiM9Kq8geFVPCtFJ3kjRvYEiEG3HrJgbnc3BJzqgAGpN1EjuYq7C85KmDic8ys6MZiLNX",
  "key47": "dDsdV5VN1MU5txhNuYFZTyH7e9TXqNGhjuC9LdxATaTmSh4NGo2NsckaSUDoDpfnD3pFdm4RZa2Q8zDK3LpYgRh"
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
