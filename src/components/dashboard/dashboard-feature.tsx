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
    "3DLXBVYivjTD8ctZnzCwq2MER5zZyHyNb8bk9GxkvG5dNuAW2xWJBvqi82sEM8Kg7Qk3aJCzo6o5LeJ6bqTywmX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25yGssEe3ZtMNo4mt3QkijGvqQoxC66EgtDqoqBpBMtYZNRGSh4y9A4dFC25H2NSq17cYrqepe3pjMgnYPGD3CSp",
  "key1": "AigaUQeZ8TXCS3MDc9uV2kjdFwu4XABEqcmm7qJPKvWhc4YKPLUGBkDxLMXyJryfq9evbP8i57SVfzLZJZYKYMx",
  "key2": "5Z4cx8mxypf7g8e77j7vVaoLSJDpbvyzzxVgByadaRKH2L6sc8PTvy1wo2utqqe3R12WypvppzWqk374idbd2qEB",
  "key3": "24hyR8hNCkkXLmpfVreseLyNsxftdSudg6ZSbLu5pRot5DEYBJLCQZYJciVVmyy72uEp3N4Ur1ssRo8Df2JTqSaB",
  "key4": "4tLeE4TdLXhdbdjk5wjwvJMmtGNBSP27tSoEHw966fXM3hLNoDJwyZQsR14fgBKrXuyFm8apGgfBsLR3GGZcQiKU",
  "key5": "2ewbppAo51svBtTb18rfFWGfD7ronbqkmvdpfxvvDptnfUHZNzhUfmY6aCn6NPUU2p7uKLcKBzfLwj6UCcys2zzB",
  "key6": "5w9pFx1AVFQHm8ynAS91DPqfCo61VtBiA4KG8xWYBnY5rSa5VcLSvQPHkwWsSv8EbKVveKZ1zjv1xSpPaPf5835v",
  "key7": "3v64AQio5D6FajVqpuBUHrtVggPViXL2iB85QxGk6xan49xaZbhygpJEwPv1eFKnosyqVfcJSAqEbmP8YFaNFuEM",
  "key8": "4sTeS6NwyWsznjVgpwLvkEcwboMFrvqoBEsWNJx4KkARotXdifc6HPXxPjAwgFjAreRgmXnk3WAwDg1q2n7nc8Tn",
  "key9": "3czc9jDxGYJH6QtnKGrx1NTo5ucbYmVL6Wt87SqEebvpafntBPZkDQ9WHpQ2z2rnW3iGp682twhd7hh4ujso6A2n",
  "key10": "5VdxLk3QMFYus9qngh7CfkJeP2D9Btxiq9N2cqcG2zPTZ8y32yw5qFXaWVBRmAbqgeGBL8c92gCH8esTPYUr3Lhp",
  "key11": "2Ub5JcubDAh7s39fqrEC9AsR24Bkz2ApSLQekr8YxGnJWTuqVhqGcPzJDQZSQYYJUMYmA5MdfMMoWbTESE6joVpF",
  "key12": "2KwUb2LdhnrfU1ax5KHtPs6eQgMjrMgwXoxAanDrqPuHM9vhaJbEDr5FuijyrJKmnXMsyyJnac63MkEHSsn83TtD",
  "key13": "2QSBuYHWnsJDPrHVSeFVr5ecsTpi3YLhMeL1HzJajX5mnykEXuaxmttT5W27Fi4JHys6pwFHDi8fig2epZM2FpqK",
  "key14": "4AkdGQqmkJMdnWwGUchnrnX652PhUR7DfVKkEE6zn6GQ9TmDEutUDMh2rnF3X47eKgQVihrdPhrNbLLTSjWH8cJV",
  "key15": "DoNs2yrDFFLfgV3BV8s8nZasKSHZAEQEJirKiHRRp79T9uJ1Cs3XfivWiwd9ZiqV9PrDtMSqWBrzQKg6BrmmDXu",
  "key16": "sMx9zNwFrWKrJuDqD4WY81yzfgNbhHQmYbmcr3psfnNrpNCMFTmrsJVmxv2dd9EK6aYatkv7pt6iLiTbLUZGXQ5",
  "key17": "23SuvibiLLfysfFFhXCEV6wfYSMTYacyus5Hqp2obgE3s1cu4FqPDaduzSJNqsfjvQuVjRSmhMWNTxxUCyhRVChG",
  "key18": "MdRZTE9zMHkSSdPnGfnWuJiFwb6jgvdz13WRd1jH8g9J1N2sscteSJSFWDYmmkzXWSepLF3A5XXt2d2mnrK6t2h",
  "key19": "mrGcU3kTDWiHg3H8GVYSDQKwXfd3JvAY2NpmGsqsqDMKDeYYdno17yTqJK82A2iR1arHaQtiE4jMuTQmaZCaXw6",
  "key20": "5cc6Cm2cqmM2eBtyUWW2cTvK84xDBcY4g9QerF5AGXi9ukj7RahGu9xeQyZ7wVaCgmG8VstyYx1Trxq3cmAiGp53",
  "key21": "5BS3ESQ59vUP7PHVyegh3oBzJSF7SU7iMW7eCbwL5F5Kr3GqvdDmSW4JcSeocrhMcLRJfdVr5EXQLehUmk1WHD2H",
  "key22": "4kWUzPE8geW4dgFaGBWWVFQQbk6Gvcmqib6Ao99wgiTe2FPXCb3skX1CmysAq33wAswqepS7pNrmMdcDqWAwBWri",
  "key23": "2Kqe1Xe7RFxe5zCoSYcbURhXBCYwrLULYeKSSK6EvtkhHspNHStdWYAykJKuVYfzPWzvjxewmCup6BFcbKmt8LJc",
  "key24": "htQSykE5yqYFXT2Fk2BDFpbmvFGuzisauv48N2rqTLd6THDs4o9C5Y6gqjatu9GKj8ZrrQMfkrmQatD833aToBm",
  "key25": "4uejvJkxGvGsfztPEgDeAod3sBYSsmQMxvVVCYfEEJj5cWF2BEDkxgjKFcrqKnJnD3y4YNMJFDYhAugLrRvSga28",
  "key26": "4nHQkGCj1ABESFM2w9qWqNV9RQdv441YmfMfYTjsQyt3RvqKcK689VStQCNTZM7RUMyooSk468VE7ZGTTdaGHUZi"
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
