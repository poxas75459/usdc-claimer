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
    "4xqC28q3LuXPgCKXT94XzyoWJhsa2Vcj8VqXDQEZyZhE5mHKzdTZCFS6Nsqzd9cqXLPB8DNuGR4FXPVk53uwWVGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YQYWGkLNMfULybn4AMHji5LMUMkHkRxMCMvc2fm3XqTXv4ucaB5XicFAFngQ6cLMxHM98r8C6mmMUXJqCngz1u6",
  "key1": "24bQzoJL5zA4YqFAQAdy2x96o1hmUQ6ojbfig8DMTjPPxra5Jhu3Wp7z8YEFBRYCqNWSpFy2fJ2oyCfHFLUsj2KG",
  "key2": "5i9T7KjhwQjxrhsyYrXEaLSbh22ZEAD9i8u9Hxob3tPDqVuwfJD6scSE4y2H8fg6aSv7QJEhqfKuppB4Sd59D4Hv",
  "key3": "5y75vQmCAKpW1sJjXmorzwzyHtN5XJYyoQqFZGX46rM3YYsp4VTchpeaBaPkvyMmbgF2mYDJnNXfzMpgk6h1PvdY",
  "key4": "gxyGpTPnx6zBineXX4LZLHihjrvSNwTH2t2pt9kWEanZQbHrE9X5VYLcrJ2gfzxZNhxywn7s1KvB11XocchoY6i",
  "key5": "3eLfVDjURVrvr2vCeWHr6CrY9AWXffUbDqhdp3fMRtJgbqrS9k9KgHEhwVbNzLqfj1zdGrdgQPcm5VN4Xoe5NxnH",
  "key6": "tTjsysz7n13PWizHU5uDW6kZ2ntqpiMNxNKkNzfNRada6WeWhp53wLjD6jRQZ38dVLdoTMfwhfJgLvtwya1p7dX",
  "key7": "4HDc4VBVN3rNUSwQyZXj4x5PrhNAiiHtq6V4Xf9TMfG5fNeU3MTAZTx3GeQpQaaPcPDeTzSLapBfWzAt2HXh6Pbo",
  "key8": "21CZrTAFxPmkVg3F5YaDFiESc5QwKQMjfJVud2mvCvFNepJ9MWTYn8fDrZR9WumbmPEG88mR8TYEkPx5PpSR3j4a",
  "key9": "3vsN2xbic9Eo4Go8edh3nsjc17LHsp5n2ybsxeQ2trXz7EzTQs74woax9VwF427jgXV6YrgM7tHMBnQL12fRchro",
  "key10": "2H7Db989jQU7kidCsWx8aEX5fcJC3unvKVU7h7gACBXcc2kDN7DiJvHkw2BA9z4g5TfVPb1Qo6ALBGKCZJuHWXGK",
  "key11": "3u1Ls349sqfjDeV8DoJUo8p5Rm72xpirFVPK9KRJYTSUofkWSukCnumbJxF511JdAMsRd9FkzQo4Yea6ffBC7qhP",
  "key12": "5fJSyJ736eksVYXY2aiLefaXKSStDM7ETpn6SaNVbEXP7XCWnbJmLchUrZJBrbkmBbENJyHUqhvAG9DAFriifk7s",
  "key13": "XxUG4m47ZaNnv3u6WmLURwALJYrNsdUcgii7NSfDLw6AiwG4sFbzmGtzsbF51jNxZJ7PqHjFLQaHTkY4JoqRo8b",
  "key14": "343TXvXhZaK11VQFcx5vm5ERLYX9A6XcFs1Cy7eEiwGfsxKTs31qSB6gq5aAL8dNA5ViNXERHDfaj8cxCQjVFUKx",
  "key15": "2QAWB1GcChsGVowVEwx57RhmmkG517Gck69MjsAu1LEWDzLBbdyCxwW4BQSRZX51XYRrJXrJbXAYQtAKmhrMTqeZ",
  "key16": "5rLDyFQfEwQnoceCgUXVywLUFixB2wPz1wXMLNLRR2yRUJgMXgfsgj8VxtbjZoc2X1n3uR7WgaLSthKiHGXBNZwV",
  "key17": "NofbQAHZxYqJ49gx8VQcwxt3j9SrWC2rnuthrB27ZbVZMdS4fhAAvSmaHxyEMFTPYu4oyJZCcfzBNw1T6K6sjam",
  "key18": "2n1dbaEwuVq6E1XfTyAD7GM4QgHG22nhAY12ECaRyKrDqmADQntzZwj9xYgjRtTE6MDSTsThy41LSJaFUBtmuA2e",
  "key19": "5hBEPRBnrgEYx7FJEorxsjK6arzkAazkVtqpDk6hE2S2oaASUZkegAExQEv5h3XxfXPxzFmsHRzyq3CsivqpEf62",
  "key20": "2CdSM2eV3hczeNqEYmfK7TG12axQh6T1L3XbA9yRoBnWVMjPNkDT8nmTf37w4k6HJjdWYLR1XB8zEjZSqfhJfzSp",
  "key21": "5o6YJ8LXCE2baPQvG2YbuJ3N3NkUku9eZRYPR2GAK1e3WCdPHPXVUH9nPeMsp9QubBGk3y6eRBExRJ1o9JGs7Wk",
  "key22": "3utc98WoDBsP7mUcApWRvKFsRA5tnjzpcBiMb6PodpiGCbq6xhNTNDfSTcEvCeczsZWx4t4XwmHmp4Mi9gvrzsX5",
  "key23": "42Dud1N8dSdKcKPPKyBwhqzh7SgLCNhh5UQbCZoF5bxsLeXJkj6Bh4B3ZSKWtJEqghEcjBX25USxcNrMzJ2uCLnN",
  "key24": "4JmzgPF3ERTb9jCNtaRXSMxjx6Lpa3kcXw6Vb2oWQ3kW3Dd6g9DDupDJ4F4bYYYvrdMy1RDPtTWujGcjRC12fkZi",
  "key25": "5suaiYu8yxDvu5uNZAnsjSJvaHpMCZXZbLNQm88PHL92ithiwCVTJFGySPhAiiBAa4H4pyPXGnbGF8XCehJknytv",
  "key26": "4KPGEDyTj8Za3CGr16PtBWKgKu6JreWy3K5FmrSLarafkfivzXUobCzgAEpU4XtcYqMnD5n9JmHbH4VWu4S3kT3M",
  "key27": "3RpTsu6MvimDhqeCaTFFKEdwpiEnMZKZKLPTCtTbMkrRukz3AcguCUSUmW9EsrXvVjFXUBW4ur86YmPp2Q5HMo5e",
  "key28": "2vC52CByhC1hbPy8XgLTcjdEhFR7BgRPvwEeNgxohsPBWNTnCr9vP3nQdA6C65812LNmHZwgvJzm1EjWJnjKV93Z",
  "key29": "4TvzdGUFYCR6uq4j1ZXNRWsngbeUZVVCr3Yq2aQWBS8kj6oS2DjjLVapbWgwp2Fjywm25uHUAJy9AAqK2gRiwRTZ",
  "key30": "57Ph29iLJboHsLhNkEUKYMwgNdYMXXTqjzMCnt78hFe4rrXUE1hQjbioTjjbyGb9qazCxBTZAXctaWUAYww2XY8e",
  "key31": "3ZbNbzD7YQFjiJSucPb9PVPKwXoKdGh9eiKB7iXzYmqum3ZuM4vV3uQ5DQynVmbSvN5vaSNN4kSTFyLUradsnpQV",
  "key32": "2Hd7XGviKXhPTWf2MwKFpiKgnFYi3QBk13UGcChBef4gkUNgCy2mPJFiYX1tsuHsRF2BxmZTYQwezMCFcnEEBcs2",
  "key33": "55q2aSrsKfpmh8Y6ChV8Wp3wW3eNhNci3n516MGcqu4xiDzCqUCuVG8hjDdN7prUBJndCh4uy1egW8DeMn7tvZEY",
  "key34": "2Bhom4U2s3B2ktE94AwaAChPoTSzAzQ75o9Y1QEEk22giFAsAus1kyuyZpHD1nrDGXV77CxWddt2pXBjc8KZpHxP",
  "key35": "2HsruTXz9HxgJQm1fEZMAKYJ4d4oiAuzN7YktZ7UU6fc9bGu99oMz79kwhGMdHiXkokpgPKbQxpz82KzCU3zwzFx",
  "key36": "YoCAySAn4S8fmQG5cj1VukrWn3j7P39RE7G1fT69LwAd455eYCps57qDANbPXFsMPEeGkrt24ALMxNh5kUfKJw8",
  "key37": "4Vepbzgj9zPmi1GMjNjHBU6u98eKAQ5AWfeuzGMY1mzHx3mgFeVSuyD9Zk8S9VePxSVX1vUf3X1FRkzSL3nJ3T6C",
  "key38": "RMzmMNFgbbzYtfzETZ3pXYdqSCFgMkyxuXVpp29TpfgJw2XeT2BG6B4TUYyUQh6Xi1YwS8dtcFbceue6hD8xAbS",
  "key39": "3pUJowFSQs2PEMVBMoAHk2GEyKkPAakvJMsCtS7AXJ3H5TgvELAnbB4FzXfvRZAXqw7fKgRNCZKfpV4zUwbzwBhr",
  "key40": "2kWJxHnqKETYUik6hbyZmXmi6bmD44Mpq9D5zZR732XuNciBt2QoLJAEwfupJAsGZeVtJCqw7f6zapdPRY9XeyqP",
  "key41": "5KfpdbaHJDfNBTyAbREPKebQQAt6fk1wRWmNELxEnhTjhknhvDiQ9WSrm2XbTK9csZofpDUTBbP4DLEWTCPgbHYp",
  "key42": "3uiKixs6rKexC26FsijauyKg2X6ZGz2AqkKeHG1mVE8XKDYVziwTqTd2HXhuTZh6Gd33A3D2qzbQqjoLSXsFczhM",
  "key43": "4D6x99AbQvcbhbBkbsPNMAa4qQDphSqRFeYdPzTL87qNccrmHyc6WqKUyrXXby89uAWgb6st4t6cMpX8MZX3Ktiy",
  "key44": "2t4RAm35Zr6bLfNE66EDwt36Yh2JY5HAeKgAuQeq4tunkWXahWbMR2pHab2nyPVDrFzUvjtnSyGBS9vzooxoqkND",
  "key45": "5yQCu7t6n3MHNHEvQ4ZLgTzp7b491nmBp3ErTzhiuh8AycBTkLi1Un47cxwSj1MxUg1mBTQ2AV38K4t4iJKf9Rie"
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
