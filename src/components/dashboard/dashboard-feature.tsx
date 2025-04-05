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
    "3LMZA58awgoDThf119GoXKGegyWxF6C3DgLsZMVmjUu4FaVykSsvDEHiWrU6fbWKDH64nBQXBzAxkFaJ7ndhGNJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hzKdaTL1V371VzoAV4VFwSyoKeNB5sd2ZVEZqRWDWbz7PSQFKuHHVVwYVEHhra9Mpb3jcy3uW1QZxMAvYoQiT7b",
  "key1": "4Ap2XtvoFMQsBgQJozno6R8Aw3BydNMPMG1fFLZXT9ZM8wh1UhfjtQfemPig9Q8jDvGq87ReEJZYnCo9uNdM4gca",
  "key2": "481fFmsed1i3UVBAazriA8CTDcJvihqVKRWRrXXR6GQiQjLTsmYqjSuaghc24uEBGrbm25KbMEWknYnLbE1ANnre",
  "key3": "3dbD9c3PsubiEQzAtxq6Rcha3hqVzRgsQbXCLkrzHHNXiXuQPRmkrPzpvM6vfyfmFLZbJL2eiBaVo18nVgZHuZks",
  "key4": "3ALAZ8zG8bHAvzn46HPfz1zMMaDXgEiEG4TUyuacJ3NYC5kSBJcv2QuUDnzCVkE4MeaCmPewKxKjAJWhw59G3KLg",
  "key5": "47xxCY3hRgZ7X9U4MjfZPBFY6BnhMha76bidrCsjEXMTb7K9FD32mACyid8PAincyokYq8kBWXvc43XfVkTGfHP2",
  "key6": "384WfQ4iLAz8XcGt4TBkazSCGAvR2SqxHaYhyKRHpqaQ2rKVYE84SrMBARNkhXAJYVkF6y9rYTgLReLFpv96ug36",
  "key7": "25cbzvKAkP8pMYdgqfaWv6JExREXYXkKJmzwkhgYqMDXR8uwZJXBxrWnKxmopVGqQSTKSgFua7Fb4T8viboqjaBA",
  "key8": "55SStwGLrPmES317eoShCZd1F2CARzkCq743hT7vJNsydHBMby8gdyrwxC2wfsJXQiTxHUHwDPEth7a9uTU8ruJW",
  "key9": "jmhW4TzsPGgt4qx9eoNM9ArcXZLziXbChKvwEP3eXt6UCCNNG8iPim8L8o66v8Z5j5djx5tnzHgJR9FmaaoTTDK",
  "key10": "2BGak6LSNEJMxaS4iRddeSvXUDYSr7w92iSDpMJBqgYcBrqLxjSfESjFCJKnAcyLYadbLMpzj9YV5rM7JTWhZWd2",
  "key11": "2ALZjRPXpwevjEAFdm4jWcd5MxuJZUgSrv9X4Y6QP8m725jk97KQdHU9oSJDs4jVQUVdjP2fTvNybdCR2bSRecsz",
  "key12": "5mEk6GhxBUnuYtv3ztuwXyrPvQKg5XQLWKDHjwES3gqmgNShFWPesYX9otd6hFzx2kL75ERxZvLUcL11oBa2PJmN",
  "key13": "4yjRwBQicFSiY5fVY3kEHMjUcn65UY5qbdva8mrTGNo6Z1FTYZgBY8yg7RfSx37W8U7aZtGZ4vFQgZ1ii4GNqDmr",
  "key14": "5k6bSdzrJtS8bjgBYbm7tcj2tioKPqXWDBPoV9AwX1Mwro6quq1MGegcCmo4argfswaFNmmskNfoiRA6DvmULaUP",
  "key15": "STZWuV9z4dcTmZ7chfYZAhV74QJYbh5ds7Ng2SEVdMsFTmhwSNz9VFEMz8Ljcti223MRcv4KPHrsbcde6dovrd6",
  "key16": "5cFH1c1UUBtDiPVmLLnL6uogFiuenezChRGak5LyAx3DjfmHUtmv3miXmYnRGPk791Mwwhe4a2mGdY5oBLyXuN2R",
  "key17": "5TtjogHNtwRN1HJdTztNfDkhSLsLhfkzCY8VAYohE3zVN7XwioHpWR3n4JSqVk3qTzNYLCKNdPNDHXmku6SdMKr5",
  "key18": "3GH79BHBDaYLtdHJuGeqDLk4PE62sLAQQ5VPncwqPgmBgxqTRAvVCHLkMtLAxYxSDxCenWJjRw5aV6M3Wxh9KuED",
  "key19": "4bUhBrBAGVgAsDA97zQyFkzS43QPNGNwBxLKGjVoHTWrh31oGHCJx3hnikQHX2n8ShLkmDiFqQHn2hg6jttvbd7e",
  "key20": "GN73qi23gnPsC8FKU29BnkyujL7JHZfbB3jU6muKt76st9cfkjVCKM1viiPCKqKVFaR8Wpfa48e8kBnrBpA7e8d",
  "key21": "3ioEELux5wjNtL19jQ88f3NuhH2hCAm1QDctAKCC6zaDCwjhGeTpdtJvcJkPMNUsNg7deJAXEEf6SrwBiW9x8LvV",
  "key22": "2JSkP7DHjww2TuzAVsufoD5fd3My3xeHTKTVniFZedtACSi2KNoEfRzhZ9GBsmj7i7xeEwDRvcRppNYoQRda3cRh",
  "key23": "5ST35FkaLMvWLdWhGafRgSZdbVpUVNJVV71Y8ohdMnw8NkDcibjoZdsndNtyU7spsqmSRuoGRrbZaTYtNFuukNWa",
  "key24": "3n16Dh7Cinqq6s9U42zoDKmW4xhfudfZwR6gko4qoK7jrPNNta7H8wLdaAcDjM6suvRtivKLjfJGoPxwWYMNWt6E",
  "key25": "5hHdBrd8gcjtp2aJvGQ5mF1bQZYd7ZibwtApyPUKUrkxRPiejwHM8zh2T4tgEu1pZrfdHoAjtSyZeRQeTZqDHi6A",
  "key26": "244MkFJDcAbPpyS3kja57Fw2HvkUKhUz4uiwP2XpacBtarCACRCzP7cAB8sRco8BePxYaQV5K5XKbmj7Jkbt7XeJ"
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
