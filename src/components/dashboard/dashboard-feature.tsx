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
    "3noBTrgKjwDzEcCRBUGh3EwhDNgqSYpySMG2bc6ZL5NBXgh3h94xJVi18qSRKSzvdA8UwKyCA47w1idxmwkQoaks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5db4iJWEnDKt2D3iMtZz9VWJKfWRuZqeWEhnTyTAztWPFUVsZpAgjgrkXGrz4f5FCRHR3Adsu4FM9mR2bQCPbAXP",
  "key1": "2kpphyD26Gb7YgguAnS8DNcqaFZ91uzPTdHDb7R3pVdxURE6soRbNC79h3J8WXmLzGFnyLgHtB92gf8rqyYutCyr",
  "key2": "4zayHYNzm2eUFRFXXvWth3JGLhqQ41yeUpAykXHSdSj32bnp9nEWUhD8hZRAYbeRkATyxmggJn6iELhiV6BSe5H6",
  "key3": "2jWqCLU9LDSoUuL6dQGHBkhNicKA3ntpzktxwJ5wkrowQrMw2v1D5DveFFaqhS9daQmfywYJeGrbYz2qdYbopGGF",
  "key4": "3n7jqupKEc6dB4JXRGvhWG1zAdgnHvdpeogJVzQVdbmFiC5XhRpGxZ2F4Wvb45UyQiMLMTgraTrF1PNcng1aVudE",
  "key5": "2qZDnbVgw6iHqhEfZANqqiBcw5vunkSPC8Ar8LDqokqY2A5rqd26KiBYxAhNVQfhLFxxt7VBqhLxoQ11TbsNmgf8",
  "key6": "2osh6YR3HxeAa9gevfGLAExjKk26KVkjJKZS4kMSBhoPXDE8kCPYgFk3aC6htFkTyv8b9jVJPB4NXw7q8QWoQrGE",
  "key7": "3JUkimSVCi677dW8rENCPrU3qKUWEgChicUArbK7f98Xu9XscNgdcEKffAmFXAWaRwPr4F8SKZaNy8gZpAEeuGto",
  "key8": "58gZywrn2vtW1bKyZ6mbLfVAkdyJuyNL9QLk9WFnQx1u6iXaJSJaKM9ZM2XP2wXfZEAdRsUvz5UtzbgLasdUNSCK",
  "key9": "2RkTPVoQATTHcMxvtkGdjtzpoiwGBRo91ao46beFQaWEW9RFoN6rVN5ZHUiqb5nNbKep7XNcLxkwrveSQrZGtHuh",
  "key10": "NmzD2hsxsVCQjXWMwvMz1FGLqNuT7B2ShK73hQMDGZJtLev31RXuRJdG66XSYtQn3K6cVWTQQhsn3DFmascNVxG",
  "key11": "z4jytUeohtYUpgZEHbmLKNHYJpS9VuJxKJ2ZEUfzo9Ejwth1txDvWWLSSHqWMtt7UFoyhhocHSkQrh95XuK2kiL",
  "key12": "kuNY6VXjyz9Y7ak7hRiaz8HevZf8ELGbMJxewyGypc3hYHhte87HDKwJGdNMJNBqyuNYFP4HUpTYrkNyaeNjfxp",
  "key13": "Gmb5b9THMHMyTRw8H44RHEwQsJo4FSZ62XfhG3dSezSZRrUNhsq1bcD8KpcxaVg2cXMpWe5aPr9NnAmGEdMrMZb",
  "key14": "2NQtte8yijbjTVWAaVjrv6Hjg391Hm4VFfjppSMMqUCPLxQNJ89WkSveksctYTPg53qv7jd5nvCZuoSFfnbjT6Yr",
  "key15": "2TXmp8arh4gSZksRdr9Njum88qSGYvtfLiSLFKYsMgDjN2Y2XBbXRKZPpSSTRuqchaF6wSjbYxaBwx4NsZGvXApx",
  "key16": "62h39wJh4mwkp4npUUXtCKbuPLGyDWKhmdGo83Rt3XGYme2NtNF7DqU7muCAXDzSkSEsc5WgeiqQxFGDpfZWqpKr",
  "key17": "354Z32an5m4XL7a5yRa4bqihhHtYTsZrqrsUqay34TcE1iKhjgF4f5VogSKKA8RXvhZSG87cyEcr2zoFYWpUqSi9",
  "key18": "3eUt5TicNA4TNAjQipDc4Mq5CWcAp3UkS7XEGcpZsFLb8nZmTk9yXvmF3BQpDWoyYgqJnyoq8xybFpUw5uFh9vt6",
  "key19": "3yShDaGj8STKnfVUKL2m27Dej72pv52tjTx3LN6QkPpcANvDREQu3DFkYSA7ukdSwFnZiaiKkEANyP1cRboyLuhU",
  "key20": "32SSiM5fbWgCkBtjYZcb2PBdfUCMbPkEHBV2kftNc51uNhdarCo4GfJPHEUXornsJi34jiww6X7wp3BX7apFAz6f",
  "key21": "4cYV3MRn3raMGtme4NpZcUFswcrkPrpyidhA63gd7g6MYX93QoPyD8oBwRhSAGm2TUL3MR3jfUWJ8FqUQhBMCHBe",
  "key22": "3ZrvN6fHvDKaWJgf8x6HkAtq2QsWPYovs1sonGFXPPuLWa3hvVk2PhjRJ872mJ5HRWkmzPsiZxAPt5gvqDYfyBjj",
  "key23": "5Dt7eWsQEdsND7hsRMDgYaPVhiX6Hw4atoKzrnEsy2Z5U8R6N7WDPs2qTvyQw9VyJMJbRwbUGyW9SGMcCNcWTDZo",
  "key24": "2azvoYyYTZjwtYqzmVD2mxUDQ64Bgq5atAmhXf2HEa4A6LqcjCLDqj8v1uuJG6GjdAwR4mk37omVHkDRCEtZcaoX",
  "key25": "y5mPk4kGvh7NkcnjMhFSnU84X8jAHsjoVdjnKwj3x4cZcrhqDbQiNPMe19DVhxTXbZ7zD5ZoX2Ux59Atf1UoqUo",
  "key26": "5tT7MEJuagYWwTkc3Do6h8DJzXjAB7HbndbkQf7Bqnhds4AZt8whcXHJABWF4LQvxccXbKFadqNMtbBzQgcaxAuK",
  "key27": "43mPp4dLZU4mYMNUuSquanfK9U5kegELzJVvfJXsrLV9rz4TZiVgD8ECJhS3EcFhnZvWpeSTmxdCaNLALv83vx8G",
  "key28": "4A9NvE2eKpw9m16AVhTFrwPcUpkxDFW8gSLCu63bs7ttWjDjiTL2wD3ybS1ZxytQmdpFiiPzp8LwmmSHEAzEQNVN",
  "key29": "jB8CPikkhpB7boYRnASB7kSaNduiX3CNPcKpiFzx4r5FVmiuBX3bDc6XonNU1bTCWwvLdeUrS6bZ8Hji3tc7q1k",
  "key30": "2ce7EUevBTNSDFxrjFqxYmu7Xm3qPdKof8PTWZ3hs3Df1q2UqAkuyqUQxoMMEFScYWWPbTVQHqPWz9jN4qjwrae2",
  "key31": "3BGHJ74VF6MvemDebuKCYF7bv1Ch3HMTegZG49zHBKs7XchRf3252nET1wECvKaN4kMgTZvVPTnfY3FTJutmY5Fa",
  "key32": "58PMta7nRpYZkaLNsR6tRpxkXS6vnjxMaqAiLzbMz2QXkAwxkshZU6qwkV2CDL6zJxB4v5hWuaRXXoUCzFJkfQCy",
  "key33": "TvgYxGzLcTqXgW7k6pfKoiPduCWaKuoZ1WRVtbYNJKzCPijsrDigVFLno9h5XMTKVYJxto5xDh6x5Y8j5y7HRf1",
  "key34": "2yVbUYV328fK2AsCocRetHZ9HNSpRsaYQ1hVWDjzz6f86fFwgRzNEWUBgY6zurGBJMFfGuKRwWaL9yRk1vc7d632",
  "key35": "33WzDPanPVUvhLZCbokVzVUDKFa8sWjSYPS9x7Ainusmm952hvDwPRpZPd7Yjgs1TrDVKWiRaCjf2gBMn2rM86X9",
  "key36": "5yKw51XDWaEAhEwmYBd5BzCrjhdYwAtVwA7ZyDKKrnEmX2nf6cE1xTK88CTiHJ2CKVbWAgo68Ag1K4be4wM4Kqu9",
  "key37": "5pFX4LHrsMs3QHfwTooSg81x7bnyVd15vfv3CzBpN1huJw6AmQXHpCfaMPm6cbKymYTDLagLWrfZBZMigzFhjEkS",
  "key38": "wwEtWm2RxdF5yBhA2iS9bsWPRFJJaL7bYr8BPitTuBVekQnWKeSRrLV2iHRkYWcZF8jrfxx9Pp9THoWC8aA4q2J",
  "key39": "2C6hHp8aRCr1ehyfd7oyUMEmwkX4zzycRZiDJvX7nSdU5xHuHkZm8shnsHQr7EyVMky4T1cnSxhzAS2S64DzVork",
  "key40": "4vy2mLbJjmrcAtx55rnnDGprsHm1yyKS1H5mHfM28NXFKQeJuJw66sQZNAd3iM9N5offooMGzquvZubsfJ5WAEjR",
  "key41": "3phr5HbSYh67bi6vTAgemPiaEgzDuYuq7GWfPV83o8gPfY86uVSuhebu5iqh6nkfb2k2zAAEXfpuX4MZcNeXy6k3",
  "key42": "2cJBKTgyKS8XfwJ7w6CGGh9Z8rV9Jpt6LQmG6EoyNaa9y5nKn5nxPYSbP38n2B1iY73puBGz59m6FQnMpZZu8x8r",
  "key43": "2nU4256fB6Fk6uiAgD4dEUe3xu4xaR7xpyvueSbEdmEJmc8Su29T4UGkNjLFbP5UjmQqgjFWEz7wUqs1npVxnSnt",
  "key44": "4Lt6fmKoRoyh7Ztibx7yLcFL9r3HKAewjhXTJEiTB5eR8VsrxMpejivSmC8n6f6RaYgaEEgCvE7fUxFtY637tDo6",
  "key45": "3XN1Vx3wtQaTAxVbtcXyj5nzt2FkKBcLtUWyPkshfP3zEW1oWZZmZpULoDchVAgVivbNRK4H2VyojBftad6o5c85",
  "key46": "47KLCuhvkEKPf8m9LpoR2Ahm4P8TmhNGKuMFuFoabXakJWpPE7BPxYzBBHbNULSBBJNN3xW9jtFcNmH7TC59ioY3",
  "key47": "5wGa4nJHV1GRDnjEUNcaqb9YFUE3iuezbTCcirMrhiKVRvHx5HCNnJJVHem83rLDpBbQjzwaG9JyFVfrs2rANfTF",
  "key48": "63HD3tD55XH6wFNRXB1UvT7YyfoGNZq8iqSTEPyTdTPm67UPPZ26y8hZfS82awMzgooRegVG6hU9QCvkKpLKXbD9"
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
