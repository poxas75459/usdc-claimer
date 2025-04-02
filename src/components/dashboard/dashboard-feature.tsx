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
    "2hXBB2Ps1AuNURBgSoExrLQaWUj5K74bUiHmfjiAmMJBPbEjss8EVFtCgDBdsdrBZCPuHjDaqrtE1SiQgVx56NeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gg3mpModhEuK7196wjN7Act3SaQ8aMD9YRxnj5fRDTo4kdpezkpcmCLyWjZWLUPHfbGj5X9Zdcb9uNw18ZQnesH",
  "key1": "9LHZF2oaeDyeiNAwhQSaM4SuWo4WDo6aMEBFi6wE2zkgGcXzwtS8ns1aFuSGAGx6axgADAmZSYxCpUAKhThf19V",
  "key2": "64wMREeThzLnuqnCKJx3HPW2XvXuqzzy4uzUoeV85ZUfPbkByoV28rriAYjkxdVNbKe2E2AFWFNfa8iCRqB4BWU9",
  "key3": "2XKMZmByZ1NjX5p4NaPnRNpCfybnXTPyN4Mqd2ugvRY7QmFf4J448rRd3Jh21VSqcpa98DamfvaPMLxPaeMbzKxE",
  "key4": "yny2Z2EsbBp9b7ZSNjEZGCMesHVVjPiTykb55YYTokjSHtnyKg378m9tENemHaJJ8S8LmknySnFUdvJ6unvdBUH",
  "key5": "m1PMNjtNt41ECuV3bzaM4eqAofWikzk4ziSXPYvY4ztJLGDtV4aLS5ypiL5SX6bnkt3EKWvT5LNjsevQroxfxUC",
  "key6": "FLuW53WF9JRKoKBPX6Av1DKamkHMm4PfDgCT574vbX3PAK4QPFZ3r1bwMbrFmp9X43ETepKF6xCdm5NHLyQFdrf",
  "key7": "2Ads3aLePwcZJfNRbFC1Vsu6LkvynB6Znodx9kHvLk6dtg9gPW5DMXmypiRoZThL7oEGmR8TvhAiwwGT4RJka58M",
  "key8": "AZX3yqCnXsoi4FbueXNqD3P5JKFmpupdcHLxHUwT6YJi9uLhuEUQj26ChzYti89GpiTpMhfG9x12e6usJk2Uhgr",
  "key9": "cWfer4V9sTXYuviSgpukWNRwNCRTP9wz6XvPqGVwhv6vyESfuopGdMzmX1AqU7qi1t9vVrvAQtzbaENxZbTNHVj",
  "key10": "upBYZVrB2mQCBTcbXpJ1VACPmVjAxc1eDUJDWmHPRvYx2ZuK7vh7ejQNm9AR1Ye9uEp1ydnp3wKR95rvvCZFbBr",
  "key11": "34AL1q4dWTzW2bWMsu76xL4QdYFSAy1BQNAdnfDeENe7eJuPWGRyQhks252LND25wJaYFjDiuK4PwGQSrjXvr7w1",
  "key12": "3Pvv62YcNTALGM5SrLwSc9EWNsnSTrKvbtzjr4S6tRh1JpkBYTfpyjFEidMF38omK3pmbWuTnSQh9sEkBgnjkLhn",
  "key13": "2aMmWyD19akDq83ykxdjuDoXG6h4CUfmMkYdQEP8wHKqrnaV79wFKPm6VBrJLW41A1yLwHScLChch7GfVhfD1Zr6",
  "key14": "3STgZwzhLKyusTPBf8AnkYeT9SWRhVLtqVFsSWGb2veTkfmoFv4gnevRTS8azk7WDdYfM1gXaefPv3E9QN5oaxra",
  "key15": "prvBJ1pqcPZtzgNhFcW25RDaMvJz1hnGod4kaxfDe4eY6hqGifBedfiPhzyxT2aaStAW9Dsmgsvf5U2LTbCXmcA",
  "key16": "2ieuKYU5egYsg7qvzZoh5vLTZMyDQgTjYERbu21mZ7AL9QS3A3mPKU4hUkNwhfVckq95EibDo2wJc2hQojGLowN6",
  "key17": "5hPPBJg2VQQtBwFy3mT2DHetMjwBaWv8tLXe1f5yBPJXdw42ZU7S5vn9YsQADfyXaAE8phto8YRHn6JBtdYu4QnD",
  "key18": "2ARVjR67ZfwAwW9ge4sh8138bh3gdi3GcuJ5UGyy89nZrpGtxnKvdwe7pfTdjducaUkysP1X4SkV3z3niht4WTkA",
  "key19": "3Pq3TgQ7dXrYArHrEFeWywDWr3gemwxN7UswzMEFAzZjXoh3teqS6N7r4thkSMPbCk8dCPaRzPyi4zETAyYSz5cf",
  "key20": "2d1oTwbdHc9uke3uVNB7oG99bcD54UsEjEMc7bQDBAAPLoxtbunT8AJkMA57PMLQ6vLtHhPeyGDxW828CCnfTsQ",
  "key21": "2KkLTsQtoYkXwxgWraFUVafyPp2EbeXKWLjMRpfjTfWZ4J67aJbYgh2kgg9UzyVGHCbZEskR7yMSuEwG93FGs1xd",
  "key22": "4oQUhm2srihrCUoVUaH34qUvBgUpoTqrtcApLrSjXsq7JNtQpSr8J9zfzPL99CR3sdrSFQQqbTjZhfru4KFNcuDY",
  "key23": "4usUdzX4VvfSdVU58oM149U5thVMueT86QJQtxaAeGxhjtjzsrjMeSSR1eNAqGWab4bi1K8aA8yyaUM721gq71Qb",
  "key24": "5LkcdQ2ypV1enntYjD6jZ4gMcuJevhhJUDnjvhWvTwtmiaY8JycboaL5tYCKyC5GbE2Kgoo59ptTvdHP2RDAvXSG",
  "key25": "xbhA76TnQzj66DznYXP9FpT2S4G7RgqLPS1CYQMoBBo4TLGD9e9NGS4rv1Z1TyQsPFKH8NXYCMkQXEYH97fQ4YL",
  "key26": "2PzpmVPXSG9awSzQadza12GmbQUs4YVJvKvBWCKXGgCDjCaB8VcDt8FsnkRVEXt7fVW9XVTkpgm7NYFTKNvT6qc5",
  "key27": "2SvGyC7bcowF6V9eRYVbHa7wrqgnz3HMqKsdo5LKBZ9nbvVTP9FPLz88rr66xSV9pXVEXp142jbZVobNbSsMsByZ",
  "key28": "61Tvv1yXzFPd2FD2vpLJPjyJNfr1Sat8xYonx7QMwYGzcDT9CNybbrDbrxzRD6U4U737PApKaQ7fSKTmCBFjpXH4",
  "key29": "2njdjat3778EfmbTRUPKFEDnBKHMymsnuiGx1L1NFAxnJLMLPV9k1eTjBKp5bo4qHbVtuUnUxhCiZa63W89QNcCH",
  "key30": "4Bz1tCFP3sAnZEeXFmjPXF8MVY11VSX47osCSF9Qx8kEvH4hXn2MCeZHCXt4uFHHXbjJ94r4BF1e1zyUT9EeUnmr",
  "key31": "2nqa17cM6gwDGDQQmCMoXBi81z1JRRam8QiKE1JdbQUEakmz5H2ZNK4pE7Ws5z2ukG32Z9gHYuY8KWJZaF4pYWEo",
  "key32": "3QeYTnDjWFF2n9n8ixpto5oNAxdZxG3pvAFx6gN2n85ipbFWyoP4Jp15nXiVrv4LnXnLA25wK8qeDAjkoC37tR5r",
  "key33": "5BgCGbuCH4ugnp292kiWiqKVb1eKkvAhgYGeBAnW6mT4fszbMgFRVdntCa4mBvbENNHAqGmhtUyX6H1qfpoPsLLz",
  "key34": "4JewMugCRcYgfMuDfDqjxN3NdaQbrPx1bPhFz7XyYLSw5FK54kyy2buqokagr2XMfqsEMAiqaWCHu78psdrm7Tyx",
  "key35": "4KM9aWPcwh6DJQtwejkC4UgUP1fm6GZkRwf8e1GSMzw4yPa9eYYQfZZwTfmQwiBHqGEf8xdhzSyPrHAytEiiDfh6",
  "key36": "4Yvc44FaEmATPhR1KkxVQ25bUbY1ruom2SrE3WonZX5QkLL9rNtaPnYiBFFJ2p1Bz4voiuVLkVrcgvb2FyaZiXho",
  "key37": "5BoNn7bFb365xPmtzufH7Y4Yi9RNdrzDPHdiddF3VqRCwET7CpgeGyqbGUZ48edqj1MTyYsFzSENLZRqLSx55LTu",
  "key38": "4UtFkyQwSGDJRrguHhe4CfCTrCf8NXwxQWUsgjhhMtJgnnbBZfK3yuXTTgM9xCaW1gXXDZebATWf64QjBXAysu5k",
  "key39": "DhPbhGv1GLz5dEkuz9TvwrsvjmpuMGi7FPR67ZD5YD1agijuFU1yLCqb6kP6Gq7SvFcbiGC3M4mifb6p6yioYaM",
  "key40": "3Cx8LC7Eva95pWPEDj4rHA3JUwuqhewiNiDZcnQLeZYgK8gqdGXYbL3CHoP3SySJDBVVRcH3YEoXGLB1352gQy6u",
  "key41": "5SwnhcpQEKooT5kSRaGtSDwmRkAKXL2WKMyGaVdC1uTPAUanw6K2pkMAiRjPkiDvRb7u76c18SE1Q4xVk7JxFzXP",
  "key42": "2hhYLn8BQ3oFzbQXJmdePTDs7hKAbHnLma4H5fR8GHdKsPLaCDgFPSrtZYiUvwdX5rzGNhCAKT5i8oZ1ezUPfzvR",
  "key43": "373tG9cy8mfDqBLgXaLe4JLTNXijLATrrRg7aqN5RyEB3Z7KPBjt81sJd7SGbNK7gNRq4FqM4F8jEjyw8EA48A5e",
  "key44": "2ewf8WEGp5W5oXTswd2HX2TThUZYqU1boH9aiTLPSTVdXXTyhyZjtyMgjRjFGM89oZvZus2NvZMhGLQk1FuNiHdp"
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
