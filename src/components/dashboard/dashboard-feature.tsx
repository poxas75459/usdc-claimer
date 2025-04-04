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
    "5r1g7kUkhTRZkWiACyAp3FHWgFQhiK8vZAYkC7mMAfXFnAJUMA4CKjWwQJVWSMGSGVk8ZqaKRuuFSc7HfpNoFDg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gNgxpYbpeh2o7PqFxGstFT5dPGrEDKV3oSgieAyTM5LiQoZsuXXQuxKVE2G3KxKGAp6GqEbYfJ95kcaE58jpFcZ",
  "key1": "67qLFqeJ3h6fogf95LBGvdeRbfFV8ZtQywVooWHdJiQkHLB7a3sNA2y1w2kLUghUWDfCmVchV1tUaFiQ8vUHxkVx",
  "key2": "2mxNjZiPtPsrMV7xMyL5fMDroZ21r5sYDYDpU9DHQzBFtUXkParRfr9Ht4MZJURw7AUWb3aBsGFi4kpB5CFNVDKw",
  "key3": "gRcjdZDgcstWzaGAxq68hRFuwPMjsiJ2LNPnGv1oDQyngY2ozA9QhL525NXFjnAk4DeezpWGe8XShhsdw6dhzB5",
  "key4": "5feQkSr7r6sBQfSEba7V6jsQrPshzNVr73YE9eBscqZ62hVFnsFjszj62pPkyks5e5ZokezVPAWMnUuaNZH1zA6",
  "key5": "2ozF3irtikxegh7SzyatAGCBJBg2jrQpgoVdSBdr3aAbBcJVrpBKvWL1vp2gnd6uNF9Unkc56HWsdHrAkC1Czoe9",
  "key6": "5vScvr1nurQtDgUQGkMb3DegEg3Eh829AxJ3ApTKyBk5kZfqB23abE7kNJ1uk2XXkFYhzze7f2MtiwVjeAkTBkKN",
  "key7": "37XKFK4otNCW7BB8LyoCfUVZTCQcJQTkrmDMA4D2bad5FCmd3hX1X9LM8qWZpBDBNzFqkfvjVcxwDmeBo83jxDNp",
  "key8": "5xbtFYd5CAjnxtQsLWEi8TzdUss7Uzi6hAp1uRFUEAU5XF13kSPBub17zYRbYTb9WgaNTk9shGDhj8Br29uADu6t",
  "key9": "4ME6AcdNyL4xcwiRBTYERRTzCfxjRFvCeo32zazgSSvs3RRRyWY2wRYWsSoa9fHwDp812FrpPDNwW6nvZQRSeUDz",
  "key10": "5Jmfv4wVbx69LAiLMGQrExjF3TgXWsvhmPLfiPBoftrp9ctNCw1NuxBhTtRtRTC1AV66YodSfjbTt2cV4H5qqpbn",
  "key11": "XPdSaKnoFuL5mTmn18RKrhCRPRCy4nKCJ9YYHibwe9REosoy7GFvfowBHsJnBCZGHNm9QNYP1bMuv3sLE6inX99",
  "key12": "3Dz1Mfoz5uAv1xFhaehygX45ugMDAZjN3m5pj6zDBGNJBYc8ktpqL5nTRJQMLzUQRKDXzJTxZNRf4o1DkieTkhs9",
  "key13": "4dn9kZ5QyrMjfsYrQV5FgNECigVqhbCzP89SfFmsMKPX2iS1UMtqCKDkPngfnVLmM8RsRCqPZY9qpGWxtgQVpiv5",
  "key14": "3JDyitgNMGjQKGgGZMNEWWmmLtK4EcMjFbjWZC5TZyReinXanbcswR7V3hc6fq6TTrw5nyfLC2tVEFbVVnFprftn",
  "key15": "4XaL34eLBkU9UmBJd2YUExaV7t8DnLGUFKdWNXhcxzYDDB3D3iH7sHwhjQG7kkKcc3efrhkVfUjjNKqGQ9pKmFXU",
  "key16": "3BsESmYXyG89doNhbuvRQhgMUZJRKR4iPyTraBHMujAwijR7zZD7yVGvKWkBV2K1u8NLF7dcu7RHD6bheG2xVceh",
  "key17": "3HKLUxC81H6iZeEcNkveWQQVNZQsRp4vmEezrJBezhgYWan6XTf8ZEUR1vw78v9pddp3rnThai6q3yQDjvyNjNs2",
  "key18": "5ph8YEvyBquBQMH5HN2HWnTT9AtBMVrUL6XCLswE3JnpiFEf6Ptq2cCbfWPHnXKXKLrtMWSEkWd8PagEVDwTPene",
  "key19": "2tSrtejRHUgfK5vVWY221fC7NZQjjLriCy1j6o4FTzmpRUG1ACX3xyvw8RLmtEQQFpNFFxD3q2VpeN2eJqEGaqy2",
  "key20": "3DdX2EchhkhPhBn8nLbhZkE1NpqVWXHjLasahEXVPbY3tzfMwdBhrszD9jgYQho9Me23MWbL7KZUFtUuaA7F4PkZ",
  "key21": "BqWjXemDxQFAWayrjtrcGgYCeujhudBKVRJB3bhs4mZeTLDBXfjyVdjnFCcaGGeEcxyiYYYMtMqPbLi17pJKjty",
  "key22": "2j4XWwhd75v67bDMigZsWc57QfbstwnH5Twb2RXCu7yM17nobLZobTxxWwfUa9PLAArNK43XSe4pi41vtUyJDaFr",
  "key23": "4Pa1XBm2cUUTiQFShMaDSNYwDmxweHcC5S5BvCNHF4ibmjiyDnMyFgjAN4FnkRBMB2tJBAGZW9cdq88iofCu4Bm3",
  "key24": "8vTuAWUangDa2qQoHK6X9vwsJaRHN9aCcq5RfoRSu13fA9n3tjH4aL5pBb7eN8Q9jS3WqPDv8FDBUuPVfRpWnC5",
  "key25": "i8dq8C5kJemSKQJg6aDYqdbqvdR3Mc5Cim1yTxyAm7Grw75haZHn1NuDZX1Fop63btgJ9E3giyr5fvkVi39KhwR",
  "key26": "5GwMBTnzcLnD39poCDVvwLGE97Ry3Pu5A8nxbGF5GpKmjRmEP1rGbTJb9vpEszUcjDwH3TBtVhXPEVEyTEvjPSQu",
  "key27": "GkBTbPkFAwj8D2zA3b1w8Usmqugf9G6xU5F96CVoWJqHA9mmkBC91u9sHPaTihBY2grtS5XhAWWSfoSS9XmKUUa",
  "key28": "4TNGopx3WsyYK9RgrJQQdNaFBZznaWQmcbg2d4bX8PgZEhq67UkJbKY2AkdHDwdPcjHyHFRmUufALTkPR8GeqBDc",
  "key29": "2nTAnEDgmn3YiPK32bAQ37H8XS9pqKivwLvEi77kNnkBGYVUGak6aKaNS8w85qQNALZWwpmEQSToWrm3vTuubJr6",
  "key30": "3BTJKRYDrKAUgVFgz2CAciELak6t1eqh4L5sD4S6eyCKzhfmAtNyXU6XFBLK8TAx2DWUydKaLiooxqGSJYqCp5Mc",
  "key31": "5CNC1DzdGLCxNGGCBtPg4rihksBGGeZZe9BpjBXo8bFkoYAsaWDdpVgLPyVhgSN2u7n4WLxPCaK7FyCvPEDUai5M",
  "key32": "ZstUfFMP6NwkRoJYKSq5bGJV6Udxetug5vN44uPruYHoL7Brrp28s5p2k7XMUED1US4reqppg7oqtPxadbJUo9R",
  "key33": "NXirQefVyxCXZRXVP3bx1G55N2jdzhxfGeYvQaN8ePZTFfhdiGREbNBkpiNxfBT9eLpMWxfv1PfMHxChbNyVc3X",
  "key34": "3wcTKx1YcWHh3wnewMpjmVKN2GSwZ3p4E9nYcb4hNzjeME2FSuDcK8WcQFFLAgqkeaur3KJw7bna3vq55x5586YB",
  "key35": "qkMmfarv3KHqgECXTmSS2qMAuNuVvJNjUeAPjKsLxzH5ahCwbRxjz6TYEHkpxznyzpEkS869DCmuYLvJr7iS3Ay",
  "key36": "24ZBRuGmRcbktev8N6TFyBrHF2hhzAAvrJJ7JkTtqCDe3SPSSr2EK2uDPBwJHsykhjw1Y7FGYJaSm2ZexpZeDN9J",
  "key37": "3beKgsJsvmDspgxGRfFmK8T5AxkfHAud91jTeb1Erdwba7VqpLdn1E5U9oZovhAmXPZSt2Hw2khddfbcEAoD4te3",
  "key38": "5DNYMKrNLW7JAKLrtUNL2zqwmB8Cd3YF4N4t17ZuvJR9unoYZtyEAVwG6EshGyc2JPJZWYCc9raGbY5H9sR3m8BZ",
  "key39": "5WFysRm9N1FyUmBvEt7B7MieHrkDLwWoo33YHWXDTpcRTQHxVaaEpnuCsraGsAiHptgWfLZBHt7YsczjVuBihtpH",
  "key40": "51AjMKVGRSKbS1fboSy7mTc6DPA8dMxvLVReceZ6YPJZi8cgumosdAZvdWJ5zPCSRKUvB3oxqJSeZr4ckRnku7PF",
  "key41": "4gTJUVNGR4CTRNVN3zuj2YyULfPdaQUcMARQLwZt1osHMVF7RMkBoNeB92K8Nne2aCfDHfVz6AxmnQ3NZkdqFncU",
  "key42": "57u6udBmidthaTvw1ANz97SuoK4o4Yv4qek8kJKPWEtE5PrN8m3A6de9EyrfiATY3QGbQzFBv4uzQDAzGaHm2SB3",
  "key43": "62L6bJ86GBvf3B2ahTfYBiVYgqCMJUS84cHhZB48jQJdih7oGWU7nzoCzu9pCb24ZiZqyB2V98iTJdCrhgQXorEg"
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
