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
    "2nLcmTLaxs6gvRowNEifGG7cgre6tGGUcDdKRdFdryDEyh3UDYqENfZtt5rbqp9nNEkhD5QnDwNco25LPScJxehH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GidDZSndVq1S8Sp6KxxwJxtmHzqiD5wbmeanHz4hmq3orNTVH9Q4o5YwNFP5U3b4oBFvmYr7kmAi4EoxAqtu7Qz",
  "key1": "4DMcxxibMxxUozDePsCt1FFNv6Vt3P4Fh73uHyA5SE62R62g3pPwn3mupgV4pku13QT3op4ug175MrB7xutkBd2s",
  "key2": "5eBX4ttcAQiLebL2MpNtEGLcx8TKTe2wXvhhVKvXwtJbBeS7Hga7jqW5dV8So4PFDs2ea9i9DU5ouwmuPZmZgUQm",
  "key3": "2ajWfjSeaV2fuTucEcm6hwbgqcTGZywbzUNBzvGZsH8uYwM3WnasUcxMUKCzHWpcy9NzV647sYxut5g7wdsbYhys",
  "key4": "2Ep6ZftfvA4SRUUFhDEaANBbXc2VK4cp4p7eq3DGS9UBCEpCLKhpiPiRBb5sgzvwaH5jJwx38HLGb5vtC5yxBqZa",
  "key5": "enuDdrkmqf1TJLugwUmgi16bmQcGWX2w4zEwJhfCFwm986Fz7XBK2rk2YYV9JszNEKckekQdwjYX3JweXTaRZTx",
  "key6": "4Fkne1LXt8CJiJfa1UcTKVF7Mb8zEoT3rhjUZLD9nH9KwpBuY5yLJAZeHL66aSPTesXJCLqVcZ6EkCN4mN3fvrLn",
  "key7": "3X877ccEimj9EweVB9KzLZrKfsEJqtDCXZEP3qPAnphxYrbwFT4MWYoKfS3dpXrKtAvyFpX8GwQQnT3jKPm4cpbL",
  "key8": "2kHFdsr5GpvBsA2JXT1aAsi5NhfUSYn14tMyYLL24g3drqt4SSbrXt3FtypAkLAF8woE3t3B6orAFXYokKUeT2C8",
  "key9": "9Yo7PLaMAumpVs1W3FQKX82mH1WNWxDGiDXwJMpinpS3LZtGZw7RZK94T5TVbeg6oN3AA8s9eZBHH667bpjm9gF",
  "key10": "4ELuoGUxSj3ZWHKvRxdrdXK1NNJGU1SdWGpQP2AhRx7MySUANTmasZgc8xBD424kjmL6jWiRRbV3UZoFBohdCUQf",
  "key11": "2K65ibpN9wrJegAYFqygKtNjgZGXdvRBTUxgBJbKWeA9np42uuLfnPDSJbWR642dyY4Sk7eHEW9E9XHdUsSXM2tM",
  "key12": "LEk8LiGZ8BSzxpSG3e83epxSCuCFmQTxPMJ14XFqcHiq7ja1R6N2Lr1Wd3HAzb4JdTZ5e6toQ8vpdHDR3cdv8xn",
  "key13": "5Dvq3fnoonZQ4PLWJWXLQN7XtJckLnGxfCiH4a2KQXXUbxkj8g36r2PvAz4pvxG5w1xoSWcnr4MZhogXsJ3FWyYc",
  "key14": "5RT6iRast4ezsYQ9FQQHRfXViHzFodGdTszJBg2hKZwxne4g8AbWSUGs4ptvSRMrKuEuJU7TNLFCsHWYdknaS8Nh",
  "key15": "23D7svyhn9WjLfBwmfPjBigsCAE3LR2dvE9UKZXa3bSJfVYvP6RGo5r5CKFt31n3PuR7b5JaWK81cq5BZxhnKwDG",
  "key16": "5SaeG1USa4rFSFKQm3ZtCiASb4KGgzmTVwt4g87vtJK6AmM6Y4g1Fbpbfv2zqENB4HdnMDGymiGRPbMHtXACAxqj",
  "key17": "2vwYL56J8zp8ygNnsaQoNKoeVVC2AwB5eNchdGsaxS5HUCRQTUiMmg12TSipkkAnixCNY4HXfV4EVan4ptm2skLn",
  "key18": "5Ut7GffYn8CsQHHG1M82bc4xGT9sx83DFZNaH3D8rCsAPhHZgSHW7yHGQrQSUm9NZ3BCaJnhiKrNTTMNM6cp58aU",
  "key19": "2D26kZTbDxYkhpT86omwj1trP8W9hsHxmbZugP7uk7W5iu6eH37GAZzxrZn4Rq3k3LuUJgSHqmU5XkgHzD96SQam",
  "key20": "5ZWMcmpwNDre2jiQGvDtycCSXyVMG7B3XCSFrt38fVvbTCBQoiftkoSTCVt2n1US1UUsuhcMXCYSv1mPnZ5f9e7R",
  "key21": "53Zfd82osQ6hm6oUhio4Kr7yoQviJryx164aGsRxekzxjfvqTzaj3HBJgCgQSgHD4Poa3k3T8s291wqfNDhU8zrZ",
  "key22": "4gq9APQCfQiY6HLwuk1cggSHtK9LwWtUersAe5cQv5kvq1jtsGDo4CVWo5Qu2NZiKWedXPPQX1Li9erENx2rZPRZ",
  "key23": "4tgxPpowvciPFQpHgBHMHvpsovjBZDdSmcfKyGUggCRJfDQqfrxDAJbxNX2LhX5goadEvEZXVjoZXqYfgAprDimh",
  "key24": "29GzEQNTzD85iVPsmmzRqRS8NZEkThg9Kzehku7YP5DFHwdCPd6ohp1B4yP7x8NwZdULFj4HpPVXZkyKCTLemuFS",
  "key25": "Sb36vX2Er9Urvf38VtoSQqkajEPGrxTVag7GSJYmv8jFD3dv5qKF1EhwfHD1Az3A5zXNpVPLbZrzxKUYCKFHcK7",
  "key26": "45NRqF1fHJPL5ifhPH9rP9Y1dMMuAFTVp36j4dC7NzhEa8TNV2b1cckaeHn69HGnHf6PUc2GdKDnnvQqN8QFumEK",
  "key27": "3thLjUrGBrKnxQKb3e5vntitjrr8vXDXxHehYrWGXqHXwBjAENHD5oGmadJMwmpn62zFLYUWe8YW4z4wQnKwRx79",
  "key28": "9NAN4PvVvSmtiygtZ4yEgfSLXx1BN5uoEyEF6QqnatNT9naVYkhavcWQjpgYu6fp4JUrpp9cshi69TFHPCc7qgk",
  "key29": "4ob1LvxRy9xAReXsmXYjf9pG2BAgF7DzpGnoAJx4j91sHaS7MMpCeEZVBci4KukKLjxLpjQNdXUhV77wtXLYCk84",
  "key30": "2Ge7nVv573eWYdoBXub3hrhT7dCSHE5uLT5VjfcvEeTnLh9UVZTLDPmAZGhVosPeyaFxSSTXbvj5nBQb751Pp2tZ",
  "key31": "3wcJbDC175tDsrwANdPGVhp5EdoFvmxzSH9eNuGBSJe6UfxDVTfiZxkJrA7k1TrDPU8EcPCFK6zHVQXPj7sbEnWb",
  "key32": "3aTL4oggH3wSYHBJnBFu6NFydzqPEgxetazYYNBZYJfVgbPodkCCqnjiS31D9MGidsCjDyRPW7txzCFXz1VCVJdr",
  "key33": "aH8LEojMJgdXnYntNq779GTXefrDrQiddMioqntNuEwzi1PitX6yE8AXicfpeTw7vTCdgurpm69NjPjLeLh2kKu",
  "key34": "2xJgkGeV89zbq43uatdCAx9HykaUuUN9ig4KgqESQUWw8w7112crUvhxi4y8es9a46EUfM6wzChstahaL5VXmnJN",
  "key35": "vXtNA996o9qCDWRVidjrnvL36f1QPyv3bM3Yryu2AXJi1FcGZrMGk3fdEXEXP5PQCc7htUsruLZRU63rtGegDi2",
  "key36": "555yMhNWijLhgR1DhALWXpxYc2ijJxqpAieRTeoB7JPjWNKxwiJUTvVqcvyM36q85HzGShSJP1DAqyDtByaUngck",
  "key37": "51zWpcLdeEHe4uHsnuWzY7Yjp5mj1MJLiajvTdD6ujd548cQ8hxj22UwtAnos4vv5wPjTsVNCcAZKY2Xmzrg3tgJ",
  "key38": "3Zqrrh9CAHfKxM1py3Njwz4G678jbFMYqTSnSHhfB33Uduf7kBQUfAYUz1VijkSnpiZ4CFTpFEFi3KbvDkzfh83B",
  "key39": "3FBRQw7qkufAEY79jdqbMc58DadsSGtnBGVz4b4yEPLLeGAaSzWtUFM8gSDJSKNMJ7ihivNHzkTNLZjoSEJsDoS5",
  "key40": "2uvYNrcn2kQmWosKLniH4XAu8H5BstD38wofSVYGEehkP6avT69Tocckmubs28KNzhULvdeBZUCG1QpTEyP3vJbG",
  "key41": "31iGeEj96kupiXzL6R9PzpDCWv6HvcZnGvdQUGdwWyuGCngzSX3WqgTT6PzThBykmJZEqS8q269cUEJpdDRW9HVx",
  "key42": "4C6FeajwJkVan6oCQYP93Dd2PqwVabNahLfKhRLgaXo23nhy4LiHZUfvpaFkiXhEMMFymgfpD8RcTx4k9QStpZco",
  "key43": "4c2KoXC26TcHMEQ3T8M6j1yiabK85NwpnCmxPccE6rvKBQs3kTpKHi5stw7MZJ7k4FmgUHtE5UBND6d9LZTCMK4j",
  "key44": "3Y2hASj6AB2DxmtFSZaWJZW4w9RMZF61gyHU4C9e8t4t1PbbnvX5njvsxNZXGEviXsNxstkpnZMGK4oYSxTUkZFu",
  "key45": "2HKEHE6BsnVHaxU9U93DUWFRUTPdRRQuMdFN6cmbsYjVgfdW5bVFfdCMffRJRMJuTA5HV7ZdpGWmWSUDHw8oiQDG",
  "key46": "4ryGiw123E8WpUk2quJWPzKfR9uZmJeU73gpaxz7ZkwQSYGVQK8mkzo4vxEtSV5FuYCFYLuWhGT4cAac7UGyJRHR",
  "key47": "2SeGSbJjSwWzPBeQTKdvK1mg4ye4XwWJxBFJB65FNkpGEFpH8cWka65EsPeZhNkBxUbLzmjPAuoFk7zfRKKF2KE8"
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
