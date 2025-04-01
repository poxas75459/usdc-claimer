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
    "38S5DW2pwZ4WUYHYgQvaNjh5tfWo19ghBc5zjHfZE9GJbL5w7szBZ6h5PntAmiP2UDLrdrWmFwsSYg7hQMnC9K97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RLhnNGFMBhteFf8PY8yA8Kh7KWbHKMbDUqMDdGj44kCWyADTxwbv4PyXmMGYcULq6vWEUbcoLuvnbg15VwE9C2B",
  "key1": "4KSQjyQqruzLApKqBUSG8zPmSh4h6xiTxzP84u5HSd5K4SFqBTERaXyPp7ifU6kW1uAgUvm3VjQpGWDSdD5uMSDs",
  "key2": "5VHxjkWGXdjctAJo3ENcfDxXFYS9wNrRr3XbwT2aNAmVvsSiikE54cYmkmckhN9dqxfkMXnNCbTfgYQiqsEyXEX5",
  "key3": "24xvTgJHigX8C8oyyVwrv7gwu7Y1hDWHP4EhnpDb5YxierpfVv4UYgeffSh72Zg4axVPcjMmrJX5WTjzR7XZFxwr",
  "key4": "TK1hAfPV88sdLRjc12onxqjCbQuAKQaGHCo56FSJR38hcYvXA6xqTuu2sZRevcFS18SRZ2DNX8qQPQgufyAJ5sL",
  "key5": "4zgS9opa74fEgjFqVVFbH7pcVoaqBz5gr6wYBaR9b5wg2kDKhFMK4mUskNWUfuP4JQJin4ZZhheQuCE9CGRSi6Dm",
  "key6": "22A2zLgMRMvp3AWNVhYxbsVXVnJTTTfiez7pxr4G6pdVRrH2EeXid44x7JXbFu6Czo2M6jzahRSpMHLCEeiax2yj",
  "key7": "2RimUXErLGNgrsXu7ZK9TMUPR8x2im7LnQkbjmtQhwuUBgFEVFQVC7cpq57DiBrvxhSntSEzb764QdZyBAuLqTSv",
  "key8": "GanzBftruZ67vUYjUdcwQEtmGMG6XB6PCX44SwQHULXtutZoay1gczoJ7aLYu86cWhy1x5hwjQYVJ2jEXcyfVbL",
  "key9": "2cEiS9h45oWZ3zgRrkMCS2693hhYqXUTkfnVmANha1gSDRwM7yrLovjCFPkATasDamXEJ8hKvMghVVtbcnbnNXMk",
  "key10": "eSSJ6ckSvxbAAywyMB7Xo6WPRjScNt9Udd39bHp8fGjqKt6mkm3R3AHphtRsJ93mqhbpigA2YDpWrTTVMXCkjHk",
  "key11": "3LBts2djAcrwyfh5GNFUF3XCtBPVNqLMWLacf9JbMQzQ3GDqTsdmaoj3uwNM59GWh8ZwghANVMBKMFccDKoshMRT",
  "key12": "fsEJNtUV85QheM9paAGc51i5Ssn13s2pRpEjN19b1fUPWjFYWNAjyPQj3PMZdp4r2fGutefFaZYZFQH9kcPaHSV",
  "key13": "4ZFM4iBAUfcNy2EvmYrZd6mwQPtjKNerrc2Gz3gkhf5QznYrU5Bsyt7haJGgKhAWotmMwxvBAR2ckGjX9mbKyHAd",
  "key14": "9hVjXef1DBA2BCNjHhJhb6Fj6hVCNNTJkzeSHmyznQYDvZSvLA1DsXyyUGTb8ZVNXUnuWNthk598cLLjyDDzfSe",
  "key15": "4Ri1xbBHYjHVQgyp6uABAmciFwis68WJEB5Kum3hJ8e545Ev6RALK2W92mqigFkeMpjtuFHqTdNrTQSdxHScJ8qa",
  "key16": "3DssGtH5dwBpS21AgsJB1W11YrzYJUS8rS1KtLTBfkxyobYmC4Awcq8dbg9kvtQKc1G1EYvrBhvkYsLt5VrXvtLR",
  "key17": "5aPyYYh2RscxcEmKz7JdzX3ZNjBTKVmYTVoe22jQZaxXLnXFqByGKz5G1Nva87HRfPALLmUfasy13JVbirYc5Uga",
  "key18": "2N2pS5oBbqfKDF4VGi6PyyTfT6Zt1TuSKXT6Gv4TCHJY4wGK9tjsQ5m6smfHM5nhjTqCfsAYzYvXS9i7jn961Y2V",
  "key19": "3xPqa1S5Yu1Rifg51x3mTRhFd872Rr8dXVDyWYsiLkWyUrg7dTi8u7wSY6nC4ueyeKKG1YVHBPc4JLczgwkL26Wn",
  "key20": "4GeWrZazyGMW6jLG47XC43Tva3FTUjRd9JD7vq42aMbgP4iwBmuHkmka3PaxokdxbAKbkKpMmBokB5QfwifpZahE",
  "key21": "yXDHb8c41UfC8QM4ejiKwE6S57c7W3YsUHo2VjQopBqxJ61BzqTReugHhaF1bkDAAfJBzm5VPtcfWm9LY1Ma3mf",
  "key22": "3bsJ4EfdvCCinBLnvKnfVtR16RTsbxNVByPZBfGxZ7WPwsY3vDKLeX3vA36GGV6YJ7tzQr8co1Y4xTC4qFJ7GTrk",
  "key23": "3CFtcpMzm5btJYfppUJ2df3MDksG3kJn8TrzuqzQ4HJfPDT6VxFFkMELj7oJF4AzrP3wJvfAV9Lc2LvPiznDCKXH",
  "key24": "65Ve3cB729rq4NCTasvdhQ2NCMS9meEwzMnpVkP351cM5hSBqJVwDWwoVFrjirXmddkrf6J79kUVpNVKe2Cfocvy",
  "key25": "2HqNFsUNAdJ4vBSSyMihg4SAvZRa1T9UXjCueAYQq81aLECyK2hYwPq6gTV4ywX97Z57exWZqosULCW7ztZ9GP6f",
  "key26": "3LGeSoCGSN1uuKPKJZ43rutGCEv24sM71E5vM5n96CABrq2SzBgaC7kcMuhx8GPGV91y2RriHzz4N7TgwC31i9f2",
  "key27": "2Zh6QMdqKaGYLAPh8mSAH1dNbCmHUa5qXJ698KCBndvZ5sVdaRqeNg6UppWsXrETc22KpzXSct5zxaAZjFkc7PUk",
  "key28": "5AJgc3VbhANDGrZDvUon86tN3DGaNWrdtB5aHTedSyiQKJeCp7QnX3dYp6zgjpcECZX7m1hFZSKV9RXgumd8XJyu",
  "key29": "ornqH7bwVP4LRDyFde2j7LG7PwQQ75aY23yLDew6DdWwRaphS74Z53vZzTeyEtswDeucCPbs2besqr91BsULStn",
  "key30": "5oYAc37BeZWsP4dRXdYpCs6Z4HehrHu1kRYoegtwqerhrqP6hQfkTmygQkfiBxfVwpABPZoze6h2hnfY9otYdZMJ",
  "key31": "4y5bnNs6nqqqo5uud33CFgerqvJHmjuPJNsWshWJQtv2vVC7xWYuUTG1WosdDrD9g5jg7KjdEsTCRrZaLDTWAr3L",
  "key32": "3CyYaSpS29fHX5VFtPmw7uA7PZJLAF62mMpbeSoAq2DqBmdCqThTiQmWBZXVWG8BmfCtq9vCHidykKk7UMsgyXZg",
  "key33": "3QxFY3HwwyMJTpcjqXMRgVteZVkanghjh8uYZrFBJqAPFL9Tp1PEKiDSBV2rcCHpVNoeskJxJSoZSr3fefFAbr7G",
  "key34": "3cPtxfx5ekkwHULUeY3gQGBGFsbWabgAxUvTkoaYyNgu585Kd3k5CcBqQiA3DkKtgSK1a8SF9HDXR2Tiud6rG7Bf",
  "key35": "tzXfZh7RczAQXXv5eQhSdNSzQ11AuR7JnvZdTs1NnHE9EeuFomBJ7fWp95DkeC1iaNVeBbyhF2Sufg9DRxtCqN2",
  "key36": "3SRuj2TWa6CeS72eqeenecMaEHj2j5na7kN8BCBcw3mGKrD7FkotfGsMBMLRNe6NuxAiHuo1vJXmPne3co4ZSd8C",
  "key37": "5Zi3w1uKfdJkqifL9gq2db6M4v6EixbuMS4JXMewCf3BjbjSc9F21MRN5Vbys33LmzEY1aN6migZwLaBEjmhtEDG",
  "key38": "3pjkUvYFxuqa21ECJdNJJKQmc8a9j4dhR17dqet7AS6kVJfRjxXQLtDkkfcKW4z9VXWYWeHSHSg3MJwJuqXXiK8i",
  "key39": "3L7gKFaRLNNH94Yc4Kynmf1KUjz3EqmoEZGAJLPVeydbABC2DeGEf2j4DEbrp3rrbyBnM1cNcZtCzrxGrCXFKoCn",
  "key40": "3dBABQzw3NrYRGyoMtwZhpZ2sKLqSPK78wKzkhWUVYXsMM42fj67vAAyKSBrnikHaiTS5Jr5FLqYFiuPFvaULvdY",
  "key41": "3zWeAQctkwr9VRZxmyXyrWRpcjZWafDovWpsysVtLPvdirWsd1BZjXVCvSjMaq29EVcFWVdpuN7b3o81PMgmhk6V",
  "key42": "bJpDuKDxmWN5BMWvQw8Q9rksTURsUsWFyxGahmfshXLLV2mDHoJaq21nUhz1PvGdnn3GhmUT2CcEPXgMy55VFcb",
  "key43": "5C2iB6evwkFSSmqz7ixLR1aQY13BbtcUzQ1X3N62Y2TGyzYh7uSaBki67i3FVNttWbwCMjnXWoba5NcBgxBGfGxf",
  "key44": "3jqLaCN4fTtYQnpNN7a3s6iarkz5dA2pAM7Ywc9GQsqWXdyUN7bEAcSndAeyeXABhcFzeACPq4CwuQ8TecJFp56w",
  "key45": "45DKRNpfuzTjhKYc2Xn3L3VAokfCgZaEr4Yh1Pfmi7xbbuWctzBUhLpA9QfYQ6fdkwvFsssin1K9bwDXA2NHuqPX",
  "key46": "3bMJnC9gCuhxBUcRUdaMVqReArxvs4X4B9XerMeSuUC2mFQFUtcghSwrovewvsbB1LmU6P24LTwVNM8XdxaQdT4M",
  "key47": "2xTMVmnkp5oPkBUrbZiwNpqnEXniu2DNfEmcHmYys9CQxRCoZXqh7eKXKojqVKLFp9hP9Wpry3k38ncYV67QTrkV"
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
