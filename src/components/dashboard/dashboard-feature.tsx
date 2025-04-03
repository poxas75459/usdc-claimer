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
    "3CiLzB8EAf9EJdVjiKzLDphM919qVFv5QoYw4oDLBQgTDa4NBCssG9BYTjtQMYCy3DKXEmodhVfpxfMXZW5GHAtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23p8ENkhSRYxc9gFJeu1vJFFZXAaWvqdmzLwmwRSxtEN7cvG1w9dbHAyzeSGhcPMPqRWmvbCF6kxzD4kooBXJsJB",
  "key1": "5GPUZBvfaQo4PmdZUQSf7ATguZAQwpNjckox5UrFfk1ennYea6q1gpmrJuZRzrKC6JPxRhv6YSM2JD6qvHyQaRfE",
  "key2": "RdJ6dQNSMUvDaDa5dnPtCPUp2vrtigpHb1BuS4gcJbPQaX4TweqUZr6eTTXVXgZeEVfUN1vCBDRVYJMZK3nEQv2",
  "key3": "4hKXSLJJz3pQowkhpssaQkYr9tQnQFTonTNHFCszhEmGxJaf8Fyh82oJBvNzybbYwiHWNNXs6525922TfHk8hNy1",
  "key4": "3Y8ztQn7DhtX9SLyoGwxxRyx1hXUXNhU7hHxWM94carS3aZF9zDCBHRC5Jk2GLRhJKhGEeYywSHD5qpAsQZ53MBX",
  "key5": "5nndgFSSQLw93isZBpd6PbjTqX8K1gXxHDMqQMVQCFfSezpjUSknvQzxRMW49JXFpEYotAsQUb5cYkXRtbXjMjEA",
  "key6": "4p72hcwQdX32AZfCapwg5pyVLw3EHRhR5Eyt8J158TgyRmB8MHwm7ZbYiWw245zdxYHYtTYawK6gtxC2xfhBoNDB",
  "key7": "2SmeCpGMmHGQsyytBW2qyUj5SA8wcN2sikmgwJD3Fdz4bfPdtDSiUf5DXfp4pfeJB5cV3HfKLRiJGFHvdEF5jZM5",
  "key8": "3AEcCRdjxJTQLHzHe9QwRSUestECFMpXuFJ1J9t8hddmaQQjprUwLpd8R4gDiW2ASaSK3NbiStBU7MYeX3bNGJtY",
  "key9": "27kte7ccu9HJN8P6SiBg33p7da6xqb3Q67S8VKJQvvDktxKNXT86PTfQjgncPQQpJMMAZyutfNdoXtwGDsEn6Xtv",
  "key10": "pcm7mkwNC8ivFDde1XYiZtD8awXD6GW9jifd56RQXVXQ2wBYzXRNaQ1yNHVaZexWDWrH8DcjFiUUiPteSiUDkc3",
  "key11": "5o2d5SjwV9oPdaJywQ8VoHm2a4hoEMyDk5HupwjyQccqSdW9XZBnjSuMkjhZTzVik5nSG18tCdtVpWGU1nuHWUFa",
  "key12": "2ht8voWhxLxFkdsfTsmvP2gaArq8LK2t3Nt4HdBr8KDWAT8rzrSVC9vakwp6V8SJNg3bkhwczVLGSNT62V5T18nZ",
  "key13": "2HTcJm3vHk66jsoBBEPTS44wdEud2csYwwvEnETR2WGByFVqbTZygWFB83xG81GhzUGRf5A15dJSQXZdgmfTLBK8",
  "key14": "2q93woJwwJgoRdHjmiZZP9mRURanTPXQHy8YRmrSsAqHXCTJo4FgRjyRRLZ1Yg9uX3Nc7BvjK5Jx1JEawsdb6L3n",
  "key15": "3wLyLeZoQNxs6zcUV9h4zWXjtDbJX4GfVNHvNzoYV2ov2Vsjepj24r8ooHP35qWoDtmNvTLtAkFM9mB46SYETNDH",
  "key16": "623X255CLJJCpPwS2WWyXZiXe7XBgiXXbGsE4C2KARGyBh7FnPbCGAYe1V7co8oxJbf8Cct3N6iQwuJBfPsWNan3",
  "key17": "2mKSvd5ybzCYxHBLtHcaVe1T8CbbENrHWPDrQ5jwmwoNPNCGFwxxWDNSREp4Vcs76DhUvo6YF91q7ByMUfoRzPHB",
  "key18": "5KS5XrM15iM5PnJ7oPSdufKZrfJekJYFqzJiSuqt8pvZYiFH5X4U8Mh32E5YQaw8nwTQp2dqKgpXT8QGbvxiQJhY",
  "key19": "3S1avrmWWYbd9KRk2bjgpKjXtRpaLvG3SFep5dD4Ukdqw2V58Q1dQpVP364Je4w8zHeX8yLjTFCVsacLodG1x7qX",
  "key20": "7hWEY6EXnLdnbJK2Sq6MhQXQfEgycs9eZvMNKnYpHrQWGwUdz3zFb5rbTiMxb8xsfaNGsg9wJLk2KYs86MpwBLU",
  "key21": "53d6QpvufwDq746TYd3y8L8CphxU4adMiAiNjiSWkrQmymuaopv9M7MAKtQL5CTYybGjgznTsAXAWKjPmjWuxpjT",
  "key22": "2tkKsA2fup7NsVXqwZMyFnFNLqHtTiZ2pba7L1i16PJDB3qKriQMhhZYASm2w7qvKwihXq2pke7J79xoVzVWhhLU",
  "key23": "3myeQTn5itPfagybaw5LbBwMysTxQNCenP743KK5Yp5Y91JZ3uNGaqTrU56s3hLTCdCMR3UCvew1EQQPoVqDx8cq",
  "key24": "3gy8bNkr7EHU385WjGVDcM7idZBFWFTofePsriqP6Niw2EKVbJYXLNuH5psbE1PihgNbJ9dasFJghy1h21476uBE",
  "key25": "2Cdk14yyxu9iAc9SLuhtAFF9DxkgeEzEyrAAfAeE6vnEvG2TBFfXMbPa6YcxME2nnsmgJrkuYar8UHYU9XpaFT1T",
  "key26": "2vUb6PeJjozku8EhMhckKU5qfkasqtCLwA3FY7xVJPP2xwpxrGobCqNppzqffB52YnaGemfK4n7JnDQ3PtGdgZY8",
  "key27": "5UJWmBMZB5yHqnrvATdnQYpKnTtMaDZouPBg5FshfT78rasYwDkGVR825hvstTURewXYnSSq2TeTsSyuUhottK5N",
  "key28": "3Ekrh1oTQ2EmnRLgscxB2pHsLy4MQhqFbqj5Szj4CSvH274feYkJUHs3eggeUp8Q4GTZ4eaUuC1DC5Pk4W2PjXht",
  "key29": "2R11P1p7U7mG6dn3ycQuxHb1DuhjSEPiUHyAk2MBjM2Rt6gpWhSRjgyQ6e6fuSPYJKPRM6ydL2oaQw1hM4ptSahv",
  "key30": "4j3e9om7fhY2psTXihDWSV7VHagpHFDGUnF4bQGq9tzadydyzGEhYYvE48wMy2qfinqtunQ7Q41DH4JMWQbsQNx4",
  "key31": "5CjNwuVzQwkRv3r3bacyLNTb2rUhWSBfvUE9a1KnTyE7B4sFcR3Nxse1HSwpAwh7fcK2VXyrJko598TBDvL4MB36",
  "key32": "4T8YpofF5DZddRhjtHYoQNrPRmQAWFqwVkAEXPTLyveM8NhAHsWPS163PvFD8UMZWJAB8HrPfACHJjpumKTneWnZ",
  "key33": "3fVwNypF8DFdnzLj4NQKpbQk2WL59gDu3pSRdYp44jjpJH6WkVRiWwdPnLBuNr7i66f2Dr2v2fo4dnGGxp6X9kpt",
  "key34": "48nP8fx4VCbwSXjrEqfWAJTYF8h4nxsMZDBE3gccnPRbBJvrMsggvzksCnupoAZZjkBUSggZ4NhxrPVsEuDJSpew",
  "key35": "373oaqMn9jgPcBxQ8ADoALqUrBjpDu2NK22W5Kiuh6RFgLxWKEPKDgkoYhVfPbxRR1zgQ3co68rQZ7AqbQvZytMQ",
  "key36": "rMiGrmrZsdCvdbWE73YRUifm8yrFAnnpPqak3QTmgiQ8WRz9DsewH3PyY6uCe5gfqmHz9LJBJpG7n9td62foaGG",
  "key37": "61RWpbMYPqj6LgXGshoUQY9PjYAc9HQEERm3ZfEFkcTYL4TVuDrpZqyJVwNHdtiauvGV2RJB4QNfmaJ1av7RTUe8",
  "key38": "4AQH8yzWu8Pfnp85BDmUGYHLdr5iQHiGpzb5GJCyLSfbPaMV2pqW9JSGwQjxvYhMmYAYoNF7Qt8agrv7GunqgrzR",
  "key39": "zMTesYPtkKVG68RthWXR4zDvuAjaUVxTemvWumyNQSv7F3A4RSiBzizARukeQXZw5tVTbiDs2yfCGYe7EMWwGtN",
  "key40": "KNPuKXKzbBtsXtKDedBW3WXaaPx6AUTNDUKfEHPAVSpuCJLwe8pn9WmmcdEF3vVpG84ohQG9ofmCDjQCQDQzbQq",
  "key41": "24eadxQeP6yVyWzQ1yXzCwnXKrjbQkwEspMaZhTt6bDC9F88M7y775KuCquVaGRvMuVLJhv4kAimCXAJwo7f8GUY",
  "key42": "3gbmn25Jo6LjGXna7tR34c5AW5NkUpvYTyuZ4p36meKpzFRk2vsnThmX6STNeiVsKEgukLb7XiRJLtdLHkUdDcFC",
  "key43": "5w4kDEu7eHV6kZHZKRNjyhWeiuSHV1fDDhR9q8ZMsthgo7mSLGf2xiUMfsbUY2RW56incotVPZP1imAsuzotVWPe",
  "key44": "494Tn4fPdp1M4QmYFyFHGRvyK8snBhcdwTrWBN1LCBbs4rs3WhjZSRbiJKDEnEXG5zAsi3pgYTH7KErpiTvqse4Y",
  "key45": "R5bpLpa9R6xV6wDAYvZMqFR9kJN5Z5txYsbD1hGUurmAeV98vJrXDtBzvnpxu4KtbARcGhYB4ArpVFiYwwP4u3A",
  "key46": "bgFsDEmXhyksCNxiRJeqhSuCMKCiDYMV8t6uoqwZJnswcbx47L9sbeEKA7bGyNNbp99Sor8u3MMNzcJE38CcW2H",
  "key47": "ynpip9wDBaAncN9KctzevAMrErcD1zESCNELYEcYpEH2fpvGp8Ed139J5f2fBCWP19ptYiAzwnEAqRFQZARzRYB",
  "key48": "3ed4sFntuJJiyS7XdqMmumrN9Co5nobPZ9yiy1J7PTEDWeVrV2JhmzMHqJoiPMEqcgV1K6XuKAU9i4QSsoSBbPt8"
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
