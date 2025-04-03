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
    "5Lpa3AKvYX1uy54mnVkBeSmqgEq4gt6ZQ1wxy5R2NJwwHK9WFSLrsAUYyDJzDfjSZSBwmAXH8gqggp4c3wC8J3p3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HFhNv2xcChFPaVRxRvYPRRnn7kQUpn59hWdg2oYJQR9aL7HsrjXiGLRkYZDbrQM3qdATTQb8WXaf73eX3Z5q9dh",
  "key1": "33ym3hrq5KCscN1SdGVMs9KEMoz4GhfnPaMBnDUMvq7tRMBKphyXtFZmnrMYzUsmiwec2b7xSjU5rTWcgbC6JxHb",
  "key2": "2K9ZUAYDQxbEHzdFVvaVUYAScyupFQDpMjPfTUXkBnnCy7H6FEuJKjLLAVPt7AgTtwocyC6VphuKSgyqHpqUQskj",
  "key3": "31fD93D3AZaMwTQkji2YmFru6G7dxLopYpxwTHxzKK7QbguyRdC7ixxaGWKXDJ5iJWZHo5ckHDcEBLBRqtiL1mmZ",
  "key4": "4QUxqr3bR2uZeeKPKuq19KkU7Hr12vrrRxi2NGhbtrRmWJ363nMaLmmSmpEmn2K97PgCjTK4sWrEu61McXZsFCz4",
  "key5": "3rKdK2Mwvh5nimFUaFetzKZFaFDK5Yxnb7RexASMwVWfJNq5SWS2bSnrQebLHMM2MLnKzkpWkouVt5nuji7HbQzM",
  "key6": "3GAmL2KijLXnFtu4ZwiiZ4YVv3AmyxVfy2UYwoXLGypqqR18TJpxTprRDMQjDk8GtEfCdujpivfiidBtEXJCL9VL",
  "key7": "yv2oCiUEMp3TiqzpmotNk9mWijHWXc7iEkZdTxrkJDjRtM8jUN166XQNeBPN8LCWmz9K9dzVbr8A7cLiCuKrt4W",
  "key8": "4RWSkMHNghg24TvVM8fVu3N4Sc4in78pPArpuHXYK5aRjxwZuMnnV9okZkuATW65kW5iME4Uws7pir2hXGD6xoTX",
  "key9": "5LuzgXLZMJVrnLtsFCBjDxnuTBP96K6jo7sTioQf2THgWtqZzE61ETW37FATTQdrP4w4i5fH8auuJMeeUhByU91s",
  "key10": "V4hJvnFV3oXu45JQJ87TXa4iCqZrJRACNAr6J3UpRB16p1RJ28jr6sRLiVxF6kZGQFyKSympiQ9rinG7GkNiMs8",
  "key11": "5LCB7QD2JC3b4G1rtqedppXDFr2zq3BYwe4i1s1iHKwscCsSPFtXLidgG7m5xK8tqJmgPkfnFc7N7ZHRUHomLFet",
  "key12": "4bR1szeX2RkSds8zQuQbc4pGSzdjHQqoL5V6XMqDBGn6Kd8itHjNsk5oqS84eE1vnqz3utocynHLFUZSPWscCjdQ",
  "key13": "HyPA8Bp79xVWrXgUBZdakFLSHjCYwZjoF1nMjEhRQZqPpsnfvqurRRzgWu8dkQk2qRtaXnUGzE33mZMHgUWMTQP",
  "key14": "3CfUwmNU5DpZwnNUsLxt7jMEjCsweyCRVEic4c6ZZrVaPGc7qDoXjhFSNQb99nH7265jw688wXy5JVoibZ4hEudY",
  "key15": "3m6aWwndYKXFy6VLZ6XdffbkQJBiCBhPvf3PEMZUMtNDCpe35Ph3SHnu1u9ZpnTc9QuC67hrExcr93mZcejYErHF",
  "key16": "2MeKPPKu2118ehzZZErLNo7scoUaCQvtD8fbHy33ufhoKCa7dahBGuHWysZxz8L9HcTfTsLcbCfaMg6BBqN36XVP",
  "key17": "wCwuiV1sop84RC72uzuEVZh1j9rRTXeVAWdqXW5mTiP581pNcxXHRviGsQnpAuY8aLPQzFx5Mspomcyg46TrzEQ",
  "key18": "29RrzRqXwpqAwbHhKKssX2epacUVdSS2fD6XgwBMZscbHkX4jtr3XRgh6ZVLqnLnN1VFt5MTMVsn5McUFaNcTPSo",
  "key19": "3ogLdQ1YrGwidek8zkYWw7WZuFY9wxVhbWK2hVJgfJyrjcSU3cNXbt42KsCGrZDN4e8rrgB4UUEHVbRV8LRVxQZd",
  "key20": "2u6FBWuUWt8wZC8U8SVXP4ZhBWdovZ1Dhc4A6mz3hd2i35QL8RYkBVBWEKF55nfn6xqNPq8MTJcEg74PQ77iNDzf",
  "key21": "3JTH1sc6HynPMR4L5x63m3p9nhgVpu8himqh2wP2cYhvvZiEZzGGGRFDDnsMc27GTbUYsWAK9ygtzrosEQSrPz24",
  "key22": "5H4dZny8zTFT5mawSkhbT68pN92ED7C5HoQfx3QKGutJicqPzYZRMmrXLdEE3w3bDox2jZPvCkz6FC5LF4BfpUpR",
  "key23": "5dSq1c69ooZmcWwd2KzdZgk5sVW7jWHNDkm6yFF3aNRHdajPQKMUGhXLR6BJE6yWgH33AHrPeJnnFmmungcRQnjy",
  "key24": "5C9oXEGjZeC1SQ6MNLQWW4TkPRSVkUC62H9i56xGpsWCCypoiTpvwRzqQjZc91agVGALnvQGbuTikvvQtrotqeWA",
  "key25": "fAxXixHkp8CWGSah4aTTAS5GdTQWsKqvTWkeomHHH5VmVMiMaswrbYTMzpksJs3VJTweWepCbFizT8azqV4xuif",
  "key26": "52su83AfmcKZGwNmPe4N3KS2wdTHWE1pTHPY9nfYsmFrq5oafJrhBe98rMtNDrexhR4WzHMbBeAbxGzYsEJLCAAf",
  "key27": "5hVdDavx72885wKFPaPYyZaz31NQcDF3z8e35jJyBYEYTYV1Zi5hc8g3d6yLCSA7wp37ceqUUBxf7awSNVwG7zeZ",
  "key28": "4B12dnXrf7Jw4G5zQ5k8TSB9stJ3LRwBGDWVm98t2T8JcddLPtrLHHeisHLGHdsrqG7uN2Mog7PrhuhBryDdM1V4",
  "key29": "2DmTCPf6SpGMuFXee9C8FDALb4gVYFJKzycPjnPGGHR1W6YPcUuWL9idSni44GaPKwTJDfZ5eqMcqRXMSrwecZyZ",
  "key30": "4wASgXt8Etc6szjcuhhmkCYdtJ3Ea4ui22Zhs7hY4frBdEhN9YAjvFsdx2aDfXqy74YXu3KzeHnkLaSRSq5ebFMh",
  "key31": "5W9K7hAKwtHehndVkjnWWnR8HmktSZtickQo1wxg3opPrncS7CxPSefizBcq7KEWqTAWMkkPcLyM63NMovBoDAt2",
  "key32": "55yUBYh4782NyZrFsXFgW9Xj3RXz6kFV8UEN2hAv64SvsrDctHnHzJ5YAFrD69eGcq7PTgYmRuAreeaKeDtgXbJs",
  "key33": "4dJNG9QrR4ehF1LHCFMeADGnJGmM8KJqPrLq56nBz5KPnnY5xMwJYrgod1zbWiHowxngD8mqBjNgRVNuZLuJjuWF",
  "key34": "5UKQazDmopSnAegZneCDbpFwxfgxEAWHYiNGZV6uv2574ESouNa6Zm9F7N6tCRZXVzKjLzd628afxiCBAUw5SLdU",
  "key35": "3wyLkvEQgAATGfWk3vUyrZny4eVM88gbzwmEY4fhBpeM2sxbvEmZkU2r3R1Gc5dWk3txi7TSCo95MGrFiCQUbnpC"
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
