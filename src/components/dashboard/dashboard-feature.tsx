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
    "uQkk1HdBw7Y8rB3fUqYswnpDgCVwQ3HoNPKSY7RWt9dRH281ZXJLHtMYcpkZfNzzAzuySjrdJVvHoDn4Y7miV2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLWXUcPf8PvzP4PkPwPbDwWd8ULhgohEJiCQkKaAyVimyjbWJr6Z1cUdjGWFvmx7m1yfxUGvrzE2dRS19GARTPt",
  "key1": "5k6qfKpr8zdYbMaj9BPx5aAjhxF3T7KJvR6hoUgVW6qFuidP9fXNJqTw4uwcLn9cWAMdMJgqrq3AVhLBPrdYVjcd",
  "key2": "5tVzXKRqMY14JJ97hF52uFvGGntHqne4wJZR3XTbjCymJr2PmcY2sWmSDUABWn17HcZq5yGqSUw2zDryRbMgD6Lh",
  "key3": "5iptqejs9Qb7vTfqAgGdNz5QGBoaBWdKBvvmGknMPrE6ijW81v1LC2dj8iYqKKkDjdaQjRqi4V7ZEMwx9bRrWNko",
  "key4": "2SotsVbk5i2d8YtKb8fWmKUW4shvZHqdqXJC3DUDVwLmKSDzmzK556vLgY8wpVyx7iE2MDW84krEx2uT5pDCLRkc",
  "key5": "cizXVAyb1YnbsCbhJXKBtn66woCXNpFFUToLnvycYZfr47RqkVrvzCYKa2ECAcJe93sWhTH4h5sRUBwNuXgKgZt",
  "key6": "26LXVXrzHnNr7wWeWENkCqjv4uEy1RqmrwZidsn4AynMKZGBZPRMvYPx8ZNR41dS2EJibV57Z1TzWuK2PdTpDcNs",
  "key7": "2aEY3M95L8jc9WbaCEvGRmPpS1SU2HAdp8XUetLPJ2K7if6gs14129X2zaVBmQK7NQ4iKuz1ysCrjQ9F5L2qMTDA",
  "key8": "4fUZju32orNpHUsAVVPzAh9iFA7Po7w2URH9Tvi82sUhRb9mNFAA6HrYnFeZkG4TuAMBQhmxA8T7aWdeVbXKCyfx",
  "key9": "3nGpUBFkYvnSeAmSKoaXR7ZsyzrG4E4WiEvb1Fkg5rSeLm9kUTsbByYKX3g11wuNU7i3BBQWtCAkojqRXMN8bEoB",
  "key10": "3KxoxmUyfoCd1AaqbR8FCAh4gyHb5XT1fTK2Kys9nuoMgJ22MwSB4tfwVn2cU7oMfs2f5MHgPdggKwW3qwrTzuU2",
  "key11": "3PEeujAEAwLgZ1qpyBPbCbnkBw9zrBq7DoAPvarbxX7JZAuXtKVXBMGKpwRRExkKDLGU8MH8SbarSqZWPuUizeeP",
  "key12": "2Kb3qu69a1NeHXJfuZ5iBsFPzCg1H7UQqAfuBFmJ4PokVjJffGVBzBAC1ef31YSaCrAL98S2TUUMfmCGPFttQr2e",
  "key13": "3um5jANwtLQY3AttEJfzaLdwEieZJbvqerxfe9GcgtvpcVD1jcqmKSv1GSEqdsj6ctYEuxqbsjRdPN6EnJXfyiR6",
  "key14": "2THtNBGWgYdSr3TpVcgfskCF3iJqGWJxKvLEaE7cPqks4JpnX6Kp1aj99wnJSjgCHRVDmdAS97UQf7dQza7BLNQr",
  "key15": "4ZWf8yr4KBDHadVM4GqFrr9eAhy1imXkx2iQVhbHVzhevL6eEjWq6unMm8CoKnGrBLAKKnaB7PC3HNnTsBBR5H7T",
  "key16": "2iUEGaQLTykUJBuGaphAvneZNBgUzMhbWF8rH9UERDEKMAdUN5yX8gmoZjReoxxyUshefVenL7pZfN9wTPMdf6Tt",
  "key17": "2DBPdqangHE486rLLHxfUsKTgGFgY2BFMFB4Mu4ynSCaEoiCTkq3whm3yWD7gtdX2Y1Dkbc7Km6SSWaUunWvMuoV",
  "key18": "5G87FUJpMizQ6t45gnpT52S2P6t5yNfufdufrkC5fMrQWWCkEk8HwGxcEbXxuFdzKkAtJm7FXPxLh93c17FqtEaK",
  "key19": "5dXCKoDy8zzS1r1AsRkUMZuiATSR1m9SfZiPsjiTv7ko23UEpTrfzspAt6z8Ne4ezmHSj3Qf7Kuiyy1PubCHXa69",
  "key20": "5ZJ9WmzgJHwF9sD1YLy1Yo2R4MEYvBGueqM2Dy2XwNpLK9rDxmSewh2TbrkkXhEjPncn8FfGe4vXaLpwq4GRftDo",
  "key21": "2c4h6EM9PRGhgUnKKYLET6TW2D7Esw3KzY3eF8bjaffanKFMkXXkubT1WDCuWF5r1v8LJqzKonuxvFDnCY484rpn",
  "key22": "5EXrfPyyiwGRJMr7fS4PxDPt2vikTVS3mtYWoMjpmkUhroQbFM6q5gHz6wzsDekFpRhurorD8T1imj977tLcWiSw",
  "key23": "31ywdGiT93pEqrDjvZpUtmtpegvzjLqPhrZh8ewGBso5KmCf2FZzF6svCYqVgCfivGPe7Bi9Ly3fYqH82SeXVG8u",
  "key24": "2Dd7rSTX6UHCJiwV2jrHNzQ5RsgphhHaKHHoekgt8c5wJznkwysjfcbK39itorowkHw2oHBemgBrF9fG1WrjK5Fk",
  "key25": "SarBgiUJNW7M7uz2Xe1DHXj93D9uUzp3BZtBSsPw5kCTextCDaxtixseH6JVPE7BBCaXNbsN55NPCFG9sCsATg1",
  "key26": "2jSYMAbvmHFN6sCSZMBo4VCxspJQVZMh6raz8nYGES3FzRPnadGQtWBb1bvm9V5eZzvqQoa1VZikNiAfniNukQXe",
  "key27": "3nVXT5SeK1jNbegzYhHdKWkFLRszwS4rbofaFUwKjx7BcbpMZutZRBVSv9Dm4TqVJRyGTCYrWKzuJGGm97yfNM4s",
  "key28": "2pWuKdQmUqGT6MTPrQrqHi617KZW6EuGga6r1rhzkGvT1w8VosSjrZXkgEXLh5xEyiZksGhhw7zBFaULaMZQgC77",
  "key29": "5cL2sjWXzGzaSYzv2kKUyuxocXacBT2UTf87UCryhRoXrjAFFVByuS4UAYqnGNPibJjjHCtQwh8sq3ZZmDFyrqPX",
  "key30": "48TdQZkwwFKBRqfKweWnfsAMiYKWuBrrK7Ls1vntBRcR4xQTnY4aB9axHW2Va18x36BtQq2jnqsqAsEr49eLxuPY",
  "key31": "4RwLRRbgFHUkkxZLqhyxk8JAqd5L7W3ozrfW2MZyggxEPBcftJ7UDLW1B4gjc1PKeTvM8apxtgNBrGUJ4zgazF72",
  "key32": "5hxSTRUfhFQoMairxLvZthaHfQEcTQjUwdswdK7E1n5FQwU7bT4hiaQ6zycekYPKGaTjZ75bhLaVgs14XUL8ozmq",
  "key33": "3P1A1zyd1iWpFB2CETs7wkEtGmLEAfw4QYYQmMKjStxPwBdsQNLm4GHYqjeRFh6YVVvoQXtC9Y6hFpy8SVCCLyKR",
  "key34": "23Z6uX1fZbUTiv59dXBNdkYZ29Mba51n5F6ozCbZWSaW5xc2bnr2v7UKZ8TdZPLyVRRwYpqrmqWEpXeWRDQkC3Ld",
  "key35": "3nEhKeJMGTJq7mvajE9zFKhTqG36XKGZMMDGvASRBvEsVm3ok4TwhweRoRpJBayUbAP7fBDtviPEdvEC94ejEsH2",
  "key36": "2kPkUehiQJH8sJSUmDXvxxZECRLARJsrMSwWApKu4gNvBdeY9MfrevxYnNRvaWWGtBAkW8SuGZBCK8H9mzVuqD9J",
  "key37": "2tXgsir2MNXkmybwQkGxkJJg2jyqgT8eDtTwTt9qzhJwmvRPMdYzKSrS1nWiPPpFJaihhJkUTptKdL7WrD2SHpxr",
  "key38": "3jPdrpa5GL3P9aq8Rb2YpN3kyzE9x1TGtTQsoW7kRet1iCMxbqNMwUvErFKWrxQiGnyEEcvHFjksWPg1qw1H6hbn",
  "key39": "4Qmp3j4XN2NBvR2t2HH7RiVFcAizoGaSUavjHAVLn8PaPFjW1Z4yRg6FG2bKcRqvodNFMVRMqJ4YsZs8kXEg4tHJ",
  "key40": "B9Sn5U7jDh7paJjd3PP9RHBpHcroBRgwVwFvP532uuyp5g3QQx12F7NP7AwgSKEPPHT4txi2YSp4ibuPFnJgZp4",
  "key41": "5pWegKdPYZ3JjZ4VuGFBH9rku9Gc9fga95WQevGEtzWrLcouRmuXSQbLQvbzqSEZ4Dwe9NoD8KyuMRhi8mRMs2p5",
  "key42": "6T6rWgzyn9F9SoA6ubRN9nbwTKykdh7iAxwRSPverajcXqyVUXcrLZiAP83Y5A1kuS3pqVD6woWwE5rY6fAJYLF",
  "key43": "4haa1WJJhDL28gHfRjJ5riribWtzAYK5gFrL7T1WguG197xcmAd2qyUpcSMnGCN2cRS6DGTbbjMjF9bVidMNBjms",
  "key44": "21ycmUuXuecsqahxte5Vq7oGdUSe4xGjrGu8cNs1pCZ8Z9KBuy2zbY97bAqhKkDKqT2xTMneRCAuRvWCX76S2m2P",
  "key45": "2SQusTFENXUd77g4V6ojMnXaU616sSxh9nsteTPNBmTXdjY3KMkPpXiLoww8zhc9R7785ThLFjHBwiardoG4NGBX",
  "key46": "5jnd59xD2MxDSCMDhGokxx9mo36rB4feGP6CUcmXBaisR8BpGkUHLKzjbWSidqFpvhPN2xWd9xZH5oykhkgukGyL",
  "key47": "2WrBdrigLyRvTKM7oYfMwKKiQ7FGZzkmEfV8QN6rNopNULHXyMyHp9mSt6EQUEtf5ajAjc5Fo8yWgeyNFPgmv8XN",
  "key48": "5iZFEF9RQwRVRwvTqyiD5wgcFE1CmWY17uNdM8zeqpAL8myzCwUzUmUrSz7bfW5tW3rToQxW32xqm1MWaR8B1MMU",
  "key49": "4oqcf3VjyGkdbHeQPFq6GwoVCMahULpp4bJpyJWzTpTnHCUzQzhpXnwHdw2eEe8vjnEo9AzxvJgjghLQqWatGiUQ"
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
