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
    "5Mj6xPDZHtUGRZycVtpJbec1cTGatXUJ3thUEM9XVPEgmksv437fqEjDHoUfEcQFqcsFnM5JftLu77iyZyigaXg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SK1YFzUr95Jrupb5SAcnkuomCsYUFxCC8k4nsd2rH2Q97RooMmG5m2i9mRe9QiTZN9rucjvkkUZT1cctCgKHvkt",
  "key1": "5ssc1xHZbuPwyaiefpteEXMYvWjkb391HwkbmexCsDY6VLq4gtgSVniJTPoaMaqLV3CvAqaXqrjdKzT57K3N6c56",
  "key2": "2DLvPomdvoTiHJi1mCe4iB6173P34jj3yF2DFfXFQcjbxsWpoa9pB3CyrPMF29RDztoWL4jvdnkEcWdhEaA6Bt7s",
  "key3": "3PThLCw2sSppBYNK7Kr4VbWr8Fk5uGybKMKkMoP7cko9oxwzTLxTXmFtkHkGoHZLCGacsQefZaU7ThWopYLHXw2U",
  "key4": "3kc1mjdndsg1JV1NaZaCLqgFa8NvSiB7D29tLdw7KszdNhiyJDJYJyWgKqWa9i1gX4ugUFY2FPCA7aAAH4cehvpF",
  "key5": "kqykqVwWwrYMpSo5qPcwSAdpZsFMsiSGBnhx8DqSLJzPhbkUTE5nsPimcZDb6LEK37QZVrwuQhHsUseJHy9jckM",
  "key6": "3ZyCqo4EnU7uqqWBXRHUL1XWnaDqahEzEj72qtsXCqkdPhWX9ZZNp37qQrU9nYyBzPvqTtbj6e9qTpLmRvw1zQP2",
  "key7": "5MY7hByfXGf8GJM3YyF1txhGHNccMuJBoKkXJvgK6b757mYi93yjkvXrCJk4H32HqLqfU2jckXec6qC2hrSTEDZE",
  "key8": "4UVqiLX7GAywVJNgkiXEqBJZyqv16FoCYHMducyDGeduezNa8a4vxYJFSqq17JX3V7NPQWWy8JNJ65EvcpvqMeN6",
  "key9": "4jGbmpFhRKNTtzD7bmTkj1m3axffQduMuwb8M7XwLCseTD8uffK685sR1uEej3pBBpx8pvYZGFpkVUxca1vKgtQD",
  "key10": "5xdm5QCGJqbfGfEbpgkQhWdhxTNGqStbypkkNgN97zhMhwNm4QMKoPC2hSesG2Nv665DxwtmmXEwKQLqrF3wXyDy",
  "key11": "4RtFL5bRhxGR6Ge36J5BJKpqXXrgUVhBQPehx1vfTqGDG3LDEqPzeBQ8cRcvAnhATNLabUa8uwq6vrc1Q5WZyqwe",
  "key12": "25PoLTSjKxn6eB7yZh2NxfjCnGKXpbRNd1YSS4w7oCn36zvvJV33cetcnz1e8ExeFoLHwwWR1QmtrPtH2sd92vKq",
  "key13": "5dxHW3hcxFEoTChVerT7aY9JZfmYLuCPcE7wosqLqscqnXgu1tdge1v4vNmQwnCBR84ycQcc1QtY46YJAEfASz42",
  "key14": "4PGBEmtoqp5wG6S8ahUaox7vEHVcjALPZfSUS5kae44Z9iLcP2NAc1e9JniXndofQiFegppyGd7DzK619y16HGxN",
  "key15": "5YayXeks7apd1qj4DaKjhFS5vb8dDXKo8rUnHL49RyvycdbQartckZQTfTCDaYhY6UB7dtTmbwvcRyjLLKENcqd2",
  "key16": "48LKVDjciMTtHBSQpFBmpyguJfB74XL8wKu6S5zWecGyyBMiW8dPV4NWVGm7NgSX7MGqDHiyMvr1FFGf96GXhEJ4",
  "key17": "2GC43gfuM7vC9kKXCw9JiTsphQHKutZBaGjyvej9z2DDAn2RuseEe9Tm8c3a9X5o693yHXAtoLpfvYijdTViSLBV",
  "key18": "YkxRA5VBtgVJwwe1dy8NFwDVvf7HHxbWij7LtdgFigMrdEmEytD5RGt7hgvcexJ3PLQgFid8T6ZUgAFkhhVU1Ts",
  "key19": "544N1V4SMZfghPMAJkB1Xyp4YEPox1K8ptU4Siw8BwAKWJZpr3Rrg4CoEwtbR9ZpTiTPjsG2niodtgnan9f4EveN",
  "key20": "4VtkSg6xvZoZmRQw7GJPEC8mjY7678KJtUZ45gnUWciH5HZgTby3C9WZjbRZYqrgUvRqDGiMGunbaLBgXhUDXUyK",
  "key21": "2DhV4G32bD6k27iHGnGE86LH9nY74aagrcEUNECVV6C23795YQaAH7Rvdk93iXTkiAX6P2EeA2yohyK7Aw31HspG",
  "key22": "5GsHbUWSK8rvduysjnByVDjwrUnBzwYVgMtCgXEtdSTaKhRD8oRFabGKxvz9EQMG2Yp1CZv8EiiwZTzdKhEHNdwT",
  "key23": "4mm8LWzKny1Kqi2yYUw9FmNKV2u57KSp7Gi1kxrkBxozxkrpkHXCGZvFdbRdDZfeqtr7H61dvZmaCnQpkFasoJBd",
  "key24": "3no9mkgH2GUWpkobzPKcmUhqYEbKXBw3Gv8upWzcoi2YFyYXHaEHfL5e54B2bSncySDQ8gotVWzPv8zrTG2wwsx8",
  "key25": "5WbkW48S7NG5GARQj7HKU2dGCDFST2eW91NbfZP2kD8BEG2rHBx9NPpY3Nqjubft9MK34XvcZ44qtJuSADyaYCaY",
  "key26": "ukLjGZRxRK6Gn8Madq2kJ4u4THx5whsd944jiohMa7E4t4K4UrWcqUNSQdnYQZJQEAzRFDBbuXGD9en4UZuyLQ5",
  "key27": "4hwvqDeJySdfihr7d4TY4swebP73dx8ZkgMa6fmFrbhf4ArxQURBjUvB6JQoxWc1bMyGmBbRdTDsQGV9GvtoUqzu",
  "key28": "2NcPEn4LevA6qsMEckzTZ3KUmjBj5mT1m3p81w3KrhrwXqqKUbh1XqY3exu2FQUopWzJUzRUzAe4GP2xdpY8SEfr",
  "key29": "5VZen5JaYbwMPX5SdzNGdmcNochh9Au8vGMQZavhfJfFJnkZjcxzECKotNHuisRALWZ2RrXNwNgdyVZuQVhAYmoP",
  "key30": "28WqMqDUunuK7gNtcfad5S4T7sJMcXF5i6shNr6eRTMADfgi1ZNuu1UC3mbiXXBW641YZDemKnAqALfLgyPRWfeA",
  "key31": "5qusFK8AYmjYnQggaJ6Nb7MyhXvp3odYQ9JMVv6xHyPq8TAJ5xA18rAh5mueCe6QenqQhQizbze9RhnF3FykXoUm",
  "key32": "4YEqnPiNsmDZRqPEZttKZm4x2ddoW7A7YKr7xGGjWDiUDq6N5PkZrzdsg8JwgNq9CVkCrJQXDEYDW9MgxnyCayqw",
  "key33": "5KALPHhJpBkVhn87VXPiEzRncmvkLbM5R5Vr3bZXnkwciaMnfAu7nT9Xi4AY94VsLycaSXS1fXzcYvp5sZ3eZ3gd",
  "key34": "5oZh9NQQfwoKHE2iHN83zjjgsWARVYw9JUpTrdaJvuAASn9seUCxTwfsEws7Fp2bZTYLcWXKuA3WGAsTcv95M4sD",
  "key35": "5tQRiy9CLnGgKjHNTXYGQrJ442Au3kwY5PRwA7XKAWApHifusfXeDcVuTC9QTvyG3cBPxt8VMSQkaqrt5ssjzoks",
  "key36": "5nCeMEWQqYcDMcmq2928paCjfHJuVX76hBB4KfcBcVsQno68KHCRCJ76nvNuxZitLTbFFzcTGgxBvKA3mtc9hjTD",
  "key37": "4sQ8tarNgLigatjNjixTD7tbNRwkPDd1r36EMCMBjEFa8R9smT1C4di3M8joXqNsxtu1E7S7BtmCMjL5KaVfLpGY",
  "key38": "FCZF7ja4jVQBciC5RWZoGypEt4yqYHo8xJKJqgtikKhjCTZcpwmGdnEzCjqnatiYR51aankNq8RADPcnBTp9EYg",
  "key39": "5a7ssnVTh8afvfHkSt1QiD7owQGmFcf2CsH91tNeykFpr8X6zCSXd9ND49jTFQNG8PNRQu4ZFBFdZWBtaHy19xyu"
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
