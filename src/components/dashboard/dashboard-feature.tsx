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
    "3VjcSh1ogqCoU3k27yoQsNJ9xexStCUHWfMbzve77jrcYkumJjn3gkLXhxEpV4MUNWufaro3qNzormZEtpbr1fw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jz2ufEs6EebGgguCET43xTmKruyFNpMVJxnAg8oQMF4zyrgHaGoSGPoBAVUkKnNg5jbbR57nZuE4pV4ux1N2SRU",
  "key1": "sfNHGLe2ps59qDRTYzJqJrDKifGm7Sfmr5V278jXqQ81xuo9q3BBhmyTVYgm8uJmw1mE24JVQf4jkVopeSSgUk3",
  "key2": "31MW7jAYjQTTpwUaktDMERRnMfPHy5rzX1jvqL9cePYsvZMLHDbBsFgzYQS19Qg5RQ1V2XRawSk7moouFeVhrZqg",
  "key3": "37juUnDEE1sRsNndbG5yFWgzq8JSfmYsT6uuQ2ZouyFyBHDhcb4hBGa3rtDQFbgD27PmpJ4wAmGvgYaCvJDb8AJ5",
  "key4": "29hGBMPj97UtLXCdjsgCRRvgymNMSeSnoNy34tr2yCh58P3m4TDwqdEhf3A3bytfsmaWMA8ev6gaEuFS2ha6ja7M",
  "key5": "59QXBtJUYRsE1XQMCgUdRMcZBc98hN3w1n1afXWai7zVA6C4gjQMafbjFxYpVeYMumwUhWKBXdERiNbxJUx2wVZi",
  "key6": "3fnA6xN4Gws9iT7DWUWiU1KwsY7qpu5LWt2WXhDNbiMShtH2ed3QKNReW2c5yjjNPDGcUyyxh9qZPDe63ZsDPk8u",
  "key7": "31y4co2k9VRE2YpEC64Tj5Z6SiSdytkem34capyFtCMyQjwNbrmsqPRbfBV5c6fqEwMvNdwTMNpzgr76FA9CDcJT",
  "key8": "pUNN8rPyNRPgKf3jhG3tnrpWLrJv7KuHpEy7JPGkwjJu5VcXnEV5LDMtNerKE4L5W6Cp2dbnQX1bjxyzYP16NZ8",
  "key9": "4mjYvvyu5tYz2vR6dSXrc4PkYTqtXaPpLqigo4u25d31cgndV5zwDWsTHTm8MwMTUGwF2X4csdevfYM6csX5e3uY",
  "key10": "2UoHGPFjfK1Dd7RRUotPaisPv3zevNctLow26eoJDdHxc763NHR1Cd1chKM1XCH7A4vauTS4sT3p7RaFZxYrJW9p",
  "key11": "5UFqn8QbGGdAywkPPQNhJ8PbmUUnycBeMe5cDVUuC6vSCM2CGaTz9V71NRPBhi135ofziUmWcPE75wPx3HGYXido",
  "key12": "HEF3tf7UJcqC67hP3yUdVVkctV3rkG6DEPVMSSph25N4M1mf5wnhY2obso7p3myL3GbnBR1FTWj2bs75trGsHnj",
  "key13": "24RbdYSevaVJCz1kijPuBy8V5N65PtDwnQx3TNupDVSrqUGUoKAnucqsLUE5FF4QKsjMc41vr9MfdZ4pRXd8Picn",
  "key14": "y2WTEgfvzW5q2vPkiHu8jxaR6HoYsQbmKsAWPXE79jRU7AFyB58xBY1ofg97YJKunqH1cN54pSuvaYhXVpotP7h",
  "key15": "44yTcMYHLcTKahMQwBEmPuGceongt3XvZDv45nx4oWhfx8yzowaFfa5kXWZ4yc29bWQidr2porXwi4tXSm5bEhy4",
  "key16": "42DvvLFsvey5PsVa2Z4SuTYp2YU16ChieSqixMGjDpV8vkLuwUKtFz238eV1QjYkMabxVxiV1oG6FdXMWieQfuZk",
  "key17": "4dKnXpTQ8cM6uWKfLgNJbEAizdspbZgteVoW2gsejDefPZSnAxmNq3uF6RsvTQRtV2NWQgeH7qGtwj4GmnoEq6vm",
  "key18": "4MoNncFHwCmbb94hsks5TKEvSYDknMv7MAxtLRMBNmSBCvBjtyXuSFLtXxYu9JX3YnBKDfh9wBuR11AdE3ULtJT",
  "key19": "fAgvLkX51hde4NpaYqQjrHnmZ2bBM7HE2PaXRwHFWBBDYXbxsZFR8XxQ8CDDF4XjYdWuXaU8MmqtjX854oL6iPs",
  "key20": "2PR1giuYSUv4AFuNrdwfDyF99G7KsJ9v2WPapPhKo7jubsLidD1GvYExLLvs4xhFZo3rywGA5tnPCnP6w8YxEiNa",
  "key21": "Jwo9QPRR2uYKgCj2gYvJ7gYSw5eUBAHKFJgcrAVhJvNoaDpGH9gUcJqSje9nm4u5wqNXrANFCBxJgehyHHjbjCr",
  "key22": "61JEKbQshqGrWQdq6LGwREKYieUciVxjzsziDRMjCzdZCMQdxmSXnUFt1b2BLErpQsWTZnszQeEursanZCC3aanw",
  "key23": "5jUtka6ZfhGvrFHAb2odqzvFhLJSKuCy1vnVc1dgKVJUN2d95xakNnVPdsSELGT1ZHtwtGE7F6dBpCtQjgRLibwq",
  "key24": "4H4qBEQ3MK9g7PX7Wyhrzirhf2Zqb45ZtSNvtty4NW5waFaQyQezYVCdE1MTx5VH2XD5bZ2M354RXJ4NrGqt8prG",
  "key25": "3Xub9S6uumtpRBqVnSuC7LGBLVnKXN1NJ9AzNPz7WDgwJGceehUj6z3Fbdt44DsmTVs8nAzxQhpxZPbrS8Wp2L2C",
  "key26": "39BRxs3cQd6eBHHFxhkZgKipu9anup7kR6zYio9551cCMwr1FY379m8FSL3aPKvhN4r2YtmHY3BWs1y8d3k1oB6t",
  "key27": "v9FmcoYePTwtgZQ1DgZXXP8BhPFdTU9jnhToeEh8C12X49rMaEnF8A6R1X5T7jwWbqBHraXHvZPDWPEZt7CXtuh",
  "key28": "5aYq8maTkGPKWLCkSncwj23RrkKpeMRpTbvNLh5kDizsg9F1afULkuCjm6w8UAWGePE7X3HtbtoYMTSerT1j6Mpo",
  "key29": "FzqwUZho4YuRhzMMWjcT2MnfgUX5GLTyToWyoJMt7esTKC72Lz7phRoj1qPVgpmQvsoTenRFM2a8g1BnCwuroxV",
  "key30": "2eitHK5YQYwH7LfCoK7wYSrXtGZ4mDyzWY814y8suPPrBzczMoiq3VUALYHvDDD2tz2N8sf8vBHxgUoq41Mo9rZV",
  "key31": "91y8afTioSbbS1UAJov2FsfkjdZNwQEBrRypbAzxTjjqTMWirQPF1XHc1EFJZB4SjcfGoKbEk9ix2gPeMRSmTCL",
  "key32": "4fGZ2WhgiGCjiNr6q2Yw1pREMtvNbBAuzDJhFN3U9v96xWsR6ZDTpbbYvkCTrr7mhyHFEBX1XP7HfUsQBAeKbx1i",
  "key33": "61q1RDY2vL72HHJJ99H6YvG7PstPQwiTvnvthkhb6LeC47kbSyykVLBVUZT5NFQGVVFpgAENYCLgw6TWo57hnNqy",
  "key34": "3y97jc92ejuxwtgLmM58NtkjZxLThUX5wUCuRXFhx38m4FFFjHAdyDDRPxhbRtoJu1qEWwAYZxZz41CHauD9Jdgo",
  "key35": "43phZK2Q9douX4Use66fnH7PQuCh8zg7Z7VRszbxBWLsYDcsXD5tHFJWijf8Tumaqrm1c5wfuMPP1pMHAVZre218",
  "key36": "5ffBo1i5neuHLmZA3sRCkD9iRAik7yBarEAUom2vdwDDxBaxZaqc6CfmEHR7KbCoarRnkpJxdTiB6kfAuPoLGTC8",
  "key37": "4JmtQzc2gYEMSHQd7c4BSNrDjK26WxUV2SDqhUDXKgkTeMY5CEnym3TRWxzYazmwjk46EdZpUhZ65ifHiV5ix2Ch",
  "key38": "2MdkgbUW1z9RxosDY6Ay3hmY6oTyZXZfKY5cWdB2E9fwTyjiXG4g6vWKJdLK11XaiXEbTb6SiamKkiHyhFhsgJMi",
  "key39": "4HDo7yUiZX8gZ4voSQ2wkmHVXJmqTcbLiyu2vkRtX9jfntpVDfKiE91GEDT1WcZYHdE7yxnVVRVfSJPG2ctVFPSF",
  "key40": "eHhLnzR1y9eL7y8iqrDB8CA1dKiPLdCi8SxCneMKerWe2zFbuXtZX4jdxRfKuJAD7AM4TvJTAVkT5LtexFWe3ro",
  "key41": "5BwNdP34JxeBM6xAmD15fXPEdkBgWpUJmDeJTs6Xt3fLBdsB3T4cEpGT5x98WpyWfz8bzCJdf4ramEs23yM4T1aQ",
  "key42": "25yFKkjr8EQaJkkN8HEE5CLtFqnQDCokz71NqyQDEvqf43newRc1pEN3iGAcewSr9pUyuzbG8VjYfBEJLw7zNcct",
  "key43": "4JVQDG4CcdpijYrsSqY1zd3KNkJu9ZSmVjmZ5CPMDo3Ppvop7PxmheyMPeWGUeQcm1eJYMtdbQtCNkxmCxm7nVLg",
  "key44": "5DoHwwsHurfheQDuDm2pw9TSZWN6aiWNTyu7UCfZQiSion2Fxmjg485NgNt8UpHgNbTSpHnxqXmf8k8o7rS3pUu2",
  "key45": "BJs8nnKen1pbtXfQjWTt44P8SLMcKWBgo2E982B38enZ58d1UrCacHU6hWcVUUcFYVJYrDqm2J9y2WUEeoCEs8i",
  "key46": "3emEWfFvdnRzcb1biuLLeDfJTzU4JNagyhxNkVTisW2ERdSJ2GZVReyL6GNPqgy8qALPEPkBENawktSHCWm3nzjg"
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
