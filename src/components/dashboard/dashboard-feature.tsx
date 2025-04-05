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
    "5txdJWbsE2uXdqmQgiryQ2UFFx3PPSTkwr61vzjt8YYCBPvCaNAAJjofdKq22ZeF7LDpf1RGVQLN8vq3hZXTE6yv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NeLHyo4v8FYDrevwVDJ3RTQFyDeMc9GpEvCUhy7aJTqL3k1ffjPg8E76xyL4DBExY1VYKvoBbWkd1QiA6GB8ReU",
  "key1": "5NP5rNkLjZYcs2DtmDdfZcLGRDuLv9GLxNrRWsoRW1GfMBAhUvVTMv6Vt1H27brMgF8KtyC3FsmCssRUqxcyNMwq",
  "key2": "4k5C2Q9pwAAjjnceA3fGMrWg8FKgviatjJ4kstDzbRAe7hUwYyYkn3uPYCgB2oBssoLKu4w3MpgdFJbPYgFmXqDg",
  "key3": "2hBMLWApyHi9C6mKdUQQFCqF3fDmeCs4ngHjP2vutu1iSaWLFgTByXsMfyGERGNJ6MZjMUqtRFquHM6pSKXUEgm3",
  "key4": "3TbAWrDq8RxYGCUHznBrjLAfSvZq2gqX9UFfjxTqDHKFStxzQJDGt6fv7EEJFhyNXbGHJgLpcShABQ25MXPhdusx",
  "key5": "LqFuyefn8tjqJrizLK5Mbuz4CtfkaxiEYsiv3i1L4ftXx5LCnEJR4dWPRTa2yx5zmvRA7bnBjeGzFASeSzfvCeX",
  "key6": "3VsFHWBcMnGy8k5fD4H3dUEC15fxeqxXYUuRsGL3F6ut2Lf7korLuezDqsSCRjEakbSXbkGhZVS6R1b1cgPW7viB",
  "key7": "8VqDA2JBxt25GCEzdi93vkh6TFoTdvdDoUoqV3CjHp7UMC9FVS497gaN7LkrNKcRqZ5S8SKjfP6f4jNcAXezJ2J",
  "key8": "27ZZPBacM4icwCjcYZoMQo2fYHxa9tTQ3U3J1qPEcpURsdz5rm4icP9nfxvyBkJPC5HivPYGhuyA9ep2SoWhTpQz",
  "key9": "9gMmkEbPX8CqhCRa5v7ekjbMaPiH7rPqLFfusfREBxPN2AdNvhUkV44W6CR5rbUFwSoDC42aFC1XhWHBJqnfhcf",
  "key10": "3z1gX3ztQWqVSRCdFuYJZaGtfp6pQm7rbVmEdvu6fGoWzmNyhNroid5Z4WQX3rvfRGe8yrSHMejfpYFBnJP7qsBU",
  "key11": "5L2Wga8rbYbWHxvsG6HuzhLb95t6SqDEc5nyXaviPqVak6M2TnmD6xPEBXyuFJQ3MCazD5GpxmCWbbxgVTnk7KLq",
  "key12": "2uz4Jp7ewHb5GAT2UG2G75euLAk65kj4bLuXgbB5F4dtQoTuef8QGhqQouX1RWbgD6rv3KcwrBdWHQnwb897BRCc",
  "key13": "4BU4TwLZf4naBdpL1d4cq81X2PJZSGuDu7bFhLmxJGQccm5YnEXwhxz8vcLz8M76QfxgbyoTAQLjW6ns1AqyviTE",
  "key14": "5vFzZ65RqawcgujfuhJicm47wzTUxZDDM1MsJx97ArcSkBESCdWpSHMQMb3nCyeTtJqNLQwNoK1naxbCbVZ6rkGy",
  "key15": "2oJm7YhMGYpz8xubEuKAhtE1xXicStoMfhk8eCbcWrGGbbpgYe73ddJxot7LBo4WX4CM2r6JvR14qzfdx2zXWpER",
  "key16": "4TCvXEuJLZZiHzE3Z7rvkFdYRzJYhT3TdYXMUvXedhjReb8WWgdBbXfLRZpq481G4t3fU3KyzyuiTKJ84nRRQu7h",
  "key17": "3PVihTgz3Mk5VqFAMthBeYgmntd42FkYDSqaKGfRFuB6BByHoWhy9q8ncwC55dMGa8trv44E3cquHA9jG4uhUHkL",
  "key18": "JjPAn1heCtAi9CbLzrAymvrXA9sfFfyjrZz5uE9jKov2wLDUCdXnXjsNSNm588DC5cfoK1ckoYBUSGEyXSmFg6n",
  "key19": "XSBb4Bu9rv19HGrM9JDWE2Gst4QxFZ14wbJBTVwrAUjwEFMTPCgGyu7UNitN15iXAwmnEaHdr4znUy6vuEvx7RA",
  "key20": "3iauS9Duvgf1Gm43u5c78nSyRcGVoBXGdhbPwyqDacc5PYyDqGJHtpYwJDWGdQBfSDFRQxXsfF1X4B34GprLqCth",
  "key21": "4ttz7aFiWfDTUMtDmMXWZEkqf1nULfxP3uey45ANPG1Ahb57bRmVZSbZAGgEGtF7zhvYAXzn5syBH9n7dgs6Rb5c",
  "key22": "59t2RP8dM4gsgkKqWwGos1boaL5mtUx72Lp63zHWPYiktY7QzViukbJMJsuWJNqr4UmDvAf3pWkUvTgq214EYAqj",
  "key23": "3a4DeHuUBextFGB3nMFkKqfPU51teQETaN93AhcUDGRs2w1KRV9W41kTkoGCsq27LwqtMWEHBDeJghhc875LhVwq",
  "key24": "G1n6Mc2Sdni988jncesMuC1x3sFWBX2FyrmMxiSdQqSzNQ6b7w7fYmFJH2nTmes7yKkuoBDHyPisLZpMwmasqJh",
  "key25": "2Qatq9NJ35PWdUEnuKG2d5kHhW2snDx12NXEP3cR6gR4ewECkJKDveoQa8WwJSH6Advccua2PJT5hv5jphq1HQPj",
  "key26": "5mo8Mi59DpeUEbdkGE5HDF67NCbkVP3LBRNEcwhSpqeZdCUgUNV9ND3hCv1SAFcWWoGBm9cWvc2BqWcRy7ooVNJj",
  "key27": "n1zQHKpLdKYcGtW9H42sgbqacwwAptehd8exxps4MNBMHRrv1Z31nqHDLit74Vsgufni7A8hARtfTQg7Lteyby1",
  "key28": "5hwXzqprwPDBhJyLstxxrWrHkUpSe5sa3Bcm72giagk4XNLKSctqkMATKdCPMJP2fGSZJJkS9xvr2fK6mDdcxWYg",
  "key29": "3xEWQfjggEymaesoQGcn8Lo7PZy6kfFwDYKfd3CJyxPkNRtVo6CMBd6we5y4aTbH6rFwkojUESY4WFRxqG7Aatcy",
  "key30": "5tzkdeWHbEABKHarmCBB2cGZwRRWcJTpf3CZwh7Yydkc2vvvza2okbjE7r9zegqhmVPkfs7ikNQkqNnmwEEjPwwX",
  "key31": "5nwHbfXimZ1fCkqb5qsmWLUy2XRsRU7qqL8gDAvLVNrEFA4pLubXLBtRj4uLnN4WuXxQAr9AxAq1tj4qRTfTP4Ba",
  "key32": "3bjjnbAbU3GzbFwTKohYdEW83p5jU87vkkfhmxaPdhmV5ewLVn1qv6r4BazfpyBMYeyAVPMhPQY2o63N7BbUTFHU",
  "key33": "2f1pEgnYjkfqW3BpYsffKdpQV31wpL4NLpM7JrwPuGpq1CxTA7P5ubc7aQgSCJTTJW7gav6b97QjDRnqnTVoRFgB",
  "key34": "2ccURsHFM6T3diMupMDwXmjntykC7Mninf1KRRTR2UVGF2p8ouFRMNjuZPAcmDuDYDXLYx8wQj1qRSCARhrYZwEM",
  "key35": "2G3yonjiB4SQYMEq9sB78hq2gtvViaQNu864mQWL2Z95RSXmYwQhRWruARBziYxgmgowH1nSxgiSU1oebXe36CxF",
  "key36": "2pGeA4e1gfLoPGZaKCNDwsUxKpuFqSMJRiP5EURjzeDNMeECtjE2u8xojf5WMZsdDDqkPpnP74CaWErXeW2UhTxH",
  "key37": "5H2rUa9EHr5qdUzXQJ7AthdKq4PGbdDtnbquKMbiaQbmRvhqjN4TXSCgiD5cRELJDNM6iDAtjnDdZ3yCK6srKCeF",
  "key38": "3cWC2C1g9v88oYeKTLPrRmphKqtySyZHegk6f4dF6ustfjnJ4y23jr881J3iPpVpfvQYxLqTPWGSHyvfMeCxMxR6",
  "key39": "567xWe12xb9HXUfwxya2PTw8TBbCo1fkPoV7bWmCCdx4qGwMkoXWGMmKMQrZmjxmxs2R9byM7yPQRM4vnSkmYbgM",
  "key40": "mz7MYjijFXoLrKwKzj5yUVjLfWb8iyCzqeBWy6bQtgvHCMxva3tLdwhGy6EixizpzhSirxYbzguBj6spFCEAdrW",
  "key41": "5Cz3G736KmzbGLiUKEYTkivbrjmAPtGs4B6CDum2SDKrJT36RKBeRcncuftA2sXZTUcPiuJiELvLydMtRqq13wC9",
  "key42": "4aYNCFcRhYwBCfYEe7QvVzcxoapLkvLyMZFFcFmGDd3DyvATVXMas8HPqp62AVMd6DZbmvg6n19bQmemNRtMkGEv",
  "key43": "vssaq7Jehx1uNM1Gr3gaCPYqX9inyVvjNLyPB926jN6SrzxhrbYZdr6ruiYPgP7SZFkPAXXeuALAiWSYrdGgnVJ",
  "key44": "4HXwik99eiMLGbsWhqHeYAC4kBEsmUub5QPBFAEWRfVxQgGsP3aGvJcqYYJ13NHz4T7nyCdYvadrLZdVDUH45zM3",
  "key45": "64qhKYxEAYFz15hAeMZe5cwtBn18CBmKXYD4BWFPbBAUL1ZUTHLik7WdNCm78fvXUahyJbBb5a9DJjmgsLBbELW1",
  "key46": "sNVChP5MvjRkzjvXqPC65jq72GyznCWezzyWUKV5a8RTEEUAhcaX19NfFfauiEMp5nsz2cQf9qjcnguKgdgST27",
  "key47": "3b8owNo5Bn8s7sM6FPeWzQTPnpMAV3eBoNqpj9KM26ct3oAHPecoEt6H7hsJy5xQMoGmdghnhRyhuujpyhWt9ohF"
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
