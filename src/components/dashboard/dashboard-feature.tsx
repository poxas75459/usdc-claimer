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
    "2SYsVM6b2HXnnypbSnNGapFU4g36uPA4wzmhTi8rnE4V9qihE6vxa4X6oHtv4ssEEwDbsbtKEn2U2zyEyXWuVP5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29LBtd7FEdzVGc5PkV1vzxeiJJDoyYyUPqjYxi48j5RmGFQAWEhb3aekPhrJ25sAVKqBsLDmZS1yoyhaUaGuSKv9",
  "key1": "3AbTDHien8DLjTDgLj13BsqiGp5jrMBq2H4JUc5UqFARhymJ4FiowsZrt6w1v1zYZYRCR4JGWjJpJrPtCMpfVn6q",
  "key2": "5rfm4pwYBrYRAAsjgk3bHeid2h9uwMS7Ss2PtLgyZjqNMFknP2hXTusEQVyJqd8kCNiG7nPeGv6ebXFkrKbrZb8h",
  "key3": "Agf53Ygft77eqp8j3WwemDk3Hz9g1aixZkx6qFaFFzeHFnvuAzHMpNhukC8QodCbR5RTzMtBCWPU32vtTDcTJKq",
  "key4": "2Z5n6sbHdnA9NufDeRFUZSZx13EE3QhS1i7UA4yxRFx486y8MsZBJVWGV4we68tLJu2MJ8picsUMwYmWXeHRFpjL",
  "key5": "3ojho6KXem3yRS3QnBwYMh1DR64fgpw5RUQm3s2Jjn6S4zZaErgsi32SPM7KnxnHgQJnfnuNEt5Jtd35jCo6D2xT",
  "key6": "Upg9jcYn5uR9Gv9WxpDDR31peH8uwU3wLsUyZgShnkZwAeMRQeaRgC6PjrASoUTCSazFHMCE9wUkQGdFaUSqofa",
  "key7": "4T8hfs6cFzykETiXSGWq3WtatCurroCdcSWfnwZ8iGbzJstuzHpnuANEqFp8n34xuCgDhyctiHHvW3DeAcWMwHFz",
  "key8": "5NwQmuVpc1LDddHYcZ5mf8u2VwFS3oX7hF5A5Jzuw5A3YVvdkULYZEUi1UrBGe1LiVcuAJTj28CFJ9AG24BASw99",
  "key9": "3ftBSJxLcGjFD1g1VLeQ4j8HeSPDgba8mv1YyDKvLkELqaErAtcKAXbyWDTxrciPG9eXQtWRXEJ6faYUS4XxFZUS",
  "key10": "29bGTvNk1xQhpKpw51JbXzUTeF99Q69G2kkxvDDmsfvXCYMvzhvT2xyuvmST6rCnLMeJfDdRHbd1WgWVXQFRb3as",
  "key11": "KW3qAPu3QdjBpi1sVCSarctto4fUXp6NppngFro8uG3SyqYuj9xAde3juzm9ykLiymX2VRYF8sqW6m1riveffWf",
  "key12": "3S3tQqAdQHjSUrsot4PwBrzB5m7sMBDoKL7EQFEYpwXLCGXGpiCQRzfaXpZxHn2957PNBDc9iRhzdLqEvt7TBsF",
  "key13": "3BcKgfvnoRVAKAt2goJSiRYiNobq5JmXJ9nA8hNqEjjFNjk3kxrwQLsas2fddD6pYXC34hwuiAmZDw86nuou4r42",
  "key14": "43trjWgFRhJY3KVHcns4pDxVUcqXojyPMhifrUEMbUgx9paW6Yyyy6LTM5SZe5QCZYATKZmmqkwA9C7Lj6DDTsaJ",
  "key15": "5GhuTUNhnKAwBE8Zvd3Urbtv7neUKZaQeAukEbEuUV5ujnHCRu8G9ze8DK3ELm8C4Ax2TNVJRTNtxVMtGeUJhNXM",
  "key16": "3XKF6a6o26pq5CYV1PKALQ6vaieS5qBLKNR2ZU6VRD9YnKsnLPXotASzwJsTmQ74Wrz5PsWuCnHofcCmTeLKBeru",
  "key17": "vPKVBeY1ky7Yc8MHHoaSJuk31d5e4Wjq6TsWLzr5jhhrhUYuz7jMhYbRynqr9Xffvk4kG7o2bgp2wLNZZNVg2Cx",
  "key18": "2RUjoxrCxz5zMjTEdsCtY33EQUb1jmwacYjCkERXNxfjESHysArBmNAGphEeWdfpSZv6SMAbV2EbygKpTfrq9STp",
  "key19": "2UhvqUgyxPyrzRj9s6RDD9srzFSUA19jtpZA2MziS7j2cRuGxggZXAudYXUJPJR7gDq6GYcTappyrBVLSc2sur3c",
  "key20": "2aAF5JAyHPRDu1reTibvzn4hnqDD37mKRdWjHv33YtPn6yBXfNiMEwvEbeAYUkvvqJodWBayyk8CtHa9mhyKo8Hj",
  "key21": "3NkJVMVYGbAnfvcnVUVXDUqizfpyzWzyxHLJ4MKA5on3eF3XorsgMt7cT7x3uxeesrK7utnvjkoj141qusJyWd7c",
  "key22": "5Bid8SN3EvywfNUKpVYMQGXoPoTJ3BD816TGYJ8JCdP3u5XbCpHpNLeFacvmuMRTQEkrPAB7eMeRseJ4RuuCZts7",
  "key23": "5AvYfFH9qJowiYAVjhWUoy8v4sv1tp5ffVUTYd9zrnZKA8G4FdbQ87YhKLCyqXqt6kUBCnkAtYQUCyAC8ZchfU4y",
  "key24": "2rAvCBsdjZpoefGZidZBKzdM9gebGRVqCb1uk5GfmzPxLUFpn9TDUp2rb4HaEyYeZcpnW23wCbjoupJjWJyavH7S",
  "key25": "5WhkWsSq4fBDR53EoPea5rRC7rnmoz7bSyYu9RcEX7CmLRECrpTgZFfjfjdzwM8KGkmyXhPpb5GXQRob1kKAUSNv",
  "key26": "3Wy8CcQuGUwEWnc5m6sdR2Jgn7yrFvrQ1CyWNwSkVQWaBrxmx12JnNWNBSqGw4yAMrysCXEAua5oB1H9yMyc9i3E",
  "key27": "4bjFGEfrrAe591DKyMHvJHyEgVZPqTGjUftD7JSTrJy6tyPDANpEivbQ5v2EWP6WqwB14M35QgqSoXmRRiffeZqQ",
  "key28": "2K2HiWuuZ4LHQ6NsZnic6agnRq2HM3ntbYCNJgXrUDtwevH8DvzhvMxFwxjUbXRHUwsNgRiLZfEwSp8RQHZiKQoA",
  "key29": "ruN3sqgsQiYdJBqstsEN6ApWiBsLKyZjfp37pFS1rKoa7LtdAtHpzAA3AhY5FP27gAYJXFPKUw3Zdm6nQPnwSHw",
  "key30": "2jzmsvUqgc55M8DaoQuvXXo5xHXeb9BX4xS6ADERJtaXKKrcMYt2ZuZsQyEK7euVNsYoJDUjw64xCoJfkKpjkf6Z",
  "key31": "4xcjjfeHngRGGoWuTsvqvqULpLdLhyzv9XxLN7gWULkEF6MX1m6FjhPHYuxha9xMLhSyW6GgX1JQgEjFZwgSjXiC",
  "key32": "CmdpCjK7fjHTNvbdxWyXtCSnXdMenqgYBBA4o7zTqeJsWfxRtkApNwuMD9y3HJDTMBiNErmPwdegYwGYdMncYVq",
  "key33": "3h72vBbeZtG4gqovvFR5QcEXf8ipNW9gcVD2HoVzGHRUHq3AWbxfsaz4CaRcknc3KTBn98XbRY2ypRMvZNurUFfY",
  "key34": "3e4DYSPcbcj2X2A3DotVNamnUTgXUquAB9EWnbcDeeBiGu3gb148JHwnSZ27jghsWFcgZYDTYdn53NvX4BSHkmnQ",
  "key35": "5DnWU7yenQWbfoWbn2tM9HAxZcwjGPyPTmsWFpdfeaWH9BzSBAvmsiennSWTu4FVCGt9B9WM2bjgVNynbuJmk9ac",
  "key36": "41sofdsqvcUVjm7BN4cVDJgfMrmRgjaEmaRVerafoeYpdiCZwi1SsZdExFzKhxcCKC1NUQWUiUD5WoJzSHkp2Tjx",
  "key37": "2RFH1zqF4xWSjFb4Jo8ska4dAm3f8J4bDcbExiWeuCndvdxjQaK5kEL6NjrfNYAhUaigmDxBfKftDZy9RALg8V3m",
  "key38": "45Yq58eECPNktDnHnARX2EU97ri466V213VH8HP36T7H1JAMygzqDa4ZXM4Bsa6XXivY11yHq4nsaZ39kdCxK5Yv",
  "key39": "26HKPSDxPgWBLsE3fe7gcvdeaAaWHh5nNmAufdA7SSFcrU6t6BZpTPtcgaheKM3KQKBGaQr6JpgsaCEAD2JKawHB",
  "key40": "7w683jsemcBgXqUa9CcbTCLe2fBVog4rQ9ubvxNNUTauPjaHt7K4WbXSMizFANXxW8TnYxMidVLM6RuYB8oxmnz",
  "key41": "2y9gGaWbCysMrBwVihNbfFRGYgJH7HzYZ8PgcydxPhyYS4osYqCYSsbYkr9nt6sPoX5fFhPqrwVZQpT9sPUXDhdo",
  "key42": "5nshczvkcNv2q2ec38iusEsdrsv9UKWHc4WhJPVJHh61GKJfP4V89XCpnLimQ2r3k9yZCtn9bdLtpQuhydZCWkMa",
  "key43": "4kzk7t9mhRzQv1XAmJvbBGbgXvGKtpT9QRNyRU4Ccbxzrdr3CRgwbTohZhdLox6BYBW8TmXbtAK1RZ2LnEVGC4RY",
  "key44": "4bgwJK8SsVBHfkh3ZxJf6xhT4b5rMXfwoAw2yANHVFXPGWpcVwrkrjWwUcSMMaVcPVjbDTi13Y7WzMurv9quWE4c",
  "key45": "3U6kyBHh7GDYEScBzmCiojppomRTX9e1gGqp6DBZAXbfNQFe4w42M8W7W7uFQ8FiUKvgcTAoqmhcHLBreTJt7z5u",
  "key46": "3SWcSJi7BYwGfFKDGr2ZsduECugCci3y2QRKNMDRYZw3bxrNkFsAu12Uy2SXrqzdPjLRomfkGCgz52vtx79VE2fk"
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
