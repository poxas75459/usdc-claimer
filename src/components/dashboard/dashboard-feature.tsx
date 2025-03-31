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
    "636wHBLyDTMuLN2hpnFmWXoiNX643SLoPFhsgGbpVYqXuQSZjJVbwUuWNyxkPsPadyxXd8Zj7h6wSHmsm2HXJx6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mVMn1qZEGzMsSdDWrDnMgVaf8UEm92KX48PXZgBwkTHAYBRzeNSzuJccQftAoSCb7zBd7UKNwdbTygMM54yW3Zn",
  "key1": "2XfkYu5Qx2cHRwFBCq6WQUSmo5vTuudXGahWed6Ccoy73tM5F26iRhrBJpiMRBS3E4hih87AkeF3NG8RNN1rXRMy",
  "key2": "3djZ7xh2ZmSfJc9WDy5DLrz6hWpZKM1ujrUvTwujzUtMezW4pqxL8zWYmY4JT61s25e8KHUW2TwRhwhEs9VsWBtf",
  "key3": "2hLpwT18p3HqwdrGXQ6PRZLQZxtTeLLqNMEd5EL3DgUnoCxrKjQDE3f5W76uPnx5hBooAYeQdaNA4dcBaAUpfdCE",
  "key4": "UE78nta5gFUyVBQmAoq1sPngDZuWZkRLGfKXjt8Pi2Q7C4hPJ4NVa9RajfUXFQ4YX6MpC6hjev61jec7PXgiPAT",
  "key5": "3RNeujT4kXqzi3hRty29mFNuDriuSP8njXegiSK6t4WH9To8jbHa34LmuNAozUoJ7iAG5trvjXNQghCoHYnP5wrw",
  "key6": "Kg9XHmZtMUxRhsZEut2eW7ZmmBEib7NLfbyPtRuhjc11Yt2d4HS7LYQFaGaRerLP3kM3Qqa5HZ9kBfiLzmJtwmh",
  "key7": "47MqwbY4oNPoWD5vJZikR6hWZAJUYPraErNBMJYbU5vnJccSRKKKFhzC7gmxfeXRpudwQVjYMx7eSRvivYBFWgun",
  "key8": "3pF7Z99dTzk5GB7SKpmyRQ6Vu8WkbMMhBaAUAWcFDhngysJdEQU5RNCBNAEa2r65seB4eNzC8WZsrVaYih9sWGLr",
  "key9": "ZrU7hkdBbMviTpQcLi1EYD8xED62NZH2NhhoT8wUHFajjqzs4LDv4nTyskVa7c844sWHmstx7wic6ohdnsxowy1",
  "key10": "3FXnabnawPpFKK9Dk16J6UGCRxjKyWzpgG7jsVdtStNbd8mnuTLnR3ES5upiXb6k1N3YL4f19bGjEH5FwnQAT5Pf",
  "key11": "2JFFgRWv7o7nFbBMt9FkBwKMhvyKsYEjAM64oHA5p1rxPSUFPsxLG1Abopcm2MKdvxLqtSm4fHPUgGj5CTTCkwg4",
  "key12": "EcJaf7AyNzaX2QrLFyRFtnxAaKJtziphLmknUPtVEVYgGjktJCXxySZc5m4QdjZJu6JUQ59qw4vbq3uvXLwZfwX",
  "key13": "3pC95LnMyEjDeLQtbtsqNqWhcVt5WFWpXuutyVyFjfGdhT7rz5dFQ3iwX4L3MAqVrPeDnTQEjDV4VepjLKPisQdF",
  "key14": "4ttNMMGynWjSwHjBX7WPwi4KZYHkxaH6ony5zGRnkPkxZ3w6FUCjgAVs93cpzmbpk6cxaRUe9iQfJzeUhk3NRtnt",
  "key15": "5H44xvSpo9ed7NorHg3MiJRJ9Xzc4SGwJHdrgcUrTgsiFR3UU1mumPvT1Vjb2bQDSiRGJkewzpN2R1MmLk22jYQ5",
  "key16": "mQMwmUqSnnAggBFDFiTUgxt6dKEem52gTLH3EbqUxkAp2RiCDKnuCMEURA6nRvdYZRBeNvd5VVNLQ78drRdW6qB",
  "key17": "2yW52G1GoiA2cseXrXHbrwPW84QKFkGjaLdLMLTo41THFqoU1V6BSKGymL2jWmcix67YJdTjbqhTu26ZPMzzz8Sv",
  "key18": "24juhs51Jg7fC4b3vZtmVVtAUudzxUFvp7ExVhmvuztPbmdfmuwRgfZDAx5Uzu4AHrLLFum862Ynjt5c946JPzob",
  "key19": "XvJRf6tHM9ALfARQsYJrQ8gbEqewZKuoK3pBpZngm9hYySgznyYWDgrcNXorr6tgBy1kfbW4UgPkXU7Z1GLTxWa",
  "key20": "4ssMNRqngiAuYXBnznf9uPruKvfHwZ1bJ9B8QDDVYh867J8fw4eyBMwPCfL8bN1QbS6LzAuqwQmsWoW816XEA13Y",
  "key21": "6HRLLUHw91aznYPiwitdKzwhWoRmsiPrDfVnEAsabYfmKVdpZ82GtyNa7PrLJQt4NiWqPfpKNZN5Pg8y3RcdeGD",
  "key22": "4gWm83R2RtjCvtL1ofaouMuQpTUamq5emRj3HuziorGfpRLMMp6hav6nURuv6VpUAayWW2PsSEQAENwuKTnEwW7j",
  "key23": "5iiocxxFuimGuyTGX6jnzZqPoPViqS5rAGNRv1SgYwRAwZUwUScX4KCEQiRY4ySxkfiuphAfb1ETE3UxiokLpxoU",
  "key24": "5mtPEL9tQZxVwRJCYshpZhXhW9MMNfBZ5Y62rPpb4uL67sJWYwR6VzbUJ25Ym1WXY5gQuPS2XTVPytBsFVQCFTLi",
  "key25": "RmjitApL64vS1cAhRT8kV5g2EMJPU2kUHwWJr8nJc3WCAgeARfpjXs5fgdXwzf1NJvqhDmMXDZZPVo4JUCLfcMk",
  "key26": "rSZBJDRBGkofBnCtXwiXKFC2C5A74Yp4dnj1mri7hTUTRWbrWorDBfky98DjvKWqZ1DgiDDqhFtmnZqpErvKf8C",
  "key27": "4wKpGoXNCCDpfpdWKStqthpuVJR1cR8WjbMzg5oDEqS28nj531qV9H3PFNKnZzNJS71AuecZP3gwSdy9UszHig7M",
  "key28": "3Gvc5DHHiyfYECZcATd73FptsZ9zuuD5fPtPnkEC5ERnaB1yv4HyD2yVxWfmwHYTAP3MYrx3LUHPCZixh167eSQg",
  "key29": "3it5GTxwND9ShB1AV2CmPq4m3it4g6uAHYnmt4DHU1UMYiGPMDvdeEJdZA2JewMdU6vY2e6Y5asW1gJdjaXJhkMR",
  "key30": "3zd5hHYJU87zeAVoVJJrtDR55sBPQgbc2GLh2715j1ktcNFtVzWg5c23LxDL3KmTT94r5N9P7q6d2u4fuasL25gJ",
  "key31": "3feWtbeWJBUFvu68Q9HWPjGjF3gHuZrRzWg8qn2oBJcL3w3eQU49AeiHa6CrhKiycbZgeo2pnPekgyodS3yU2HvA",
  "key32": "2G98C79UFuD6jr2dYyghh1peMSdfMsoGPyhSjWUmaEhTr4pXpDuSPmT4oyYwLCDtiuSyaMc2L1Ppx9kAadrxPHgH",
  "key33": "4mJD8GVdUTUARCW6Wjv9fJ2KhdQUXUfwnCuuTKnGJnZ9eZZZ6WJgQR5nRHi4hvF5epxgGJF2cLjYqCmtHEBh3i8B"
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
