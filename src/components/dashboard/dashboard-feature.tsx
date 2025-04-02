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
    "32J33wgn2oA38zt8mL92wFgMQJ5u5UouWj3yFDFUkkWuiL5ZMWGPDkmXquBzitL9zkcHkr6MyAbxg6KsUxN7SexR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52i7gmwsvLnHuW76xic6STbsD5mVdYfFHHEuFzuZ8czZyfkezKmYZ6AkHyisHfvENsWTvWDwVSttTjavw1hTYtTH",
  "key1": "5bJZ6t5pWoizMYo62Sc42d93ixkfjfxgV9T8iR7ZHxj3fE111GRahjewfb2c6mm76JrohPrDsBEtmNeEepKgPip",
  "key2": "416nUGW4zr2Bhax2869r18ANFzM43hgqqrUFadD9JeRAab8FUKmZp4SKTeWsVA2uSFoFs88bNNU4Q71VZawfexdy",
  "key3": "5LvT6me9o4PheQCsh1FTGupQ3gkFPzc9cw5ysJ2BgPagdH7ZELC5PC1s25SJYNoDaQmPCvkGyumgdjBY9dGx21Rt",
  "key4": "64uRPBuiHfGPuzuCqVD5h7eEfxWQa1BV2u3gZYmRN7EF2H4fgafRyNjnppGVbMvkZN2UVSwMdB2vgnyD2n6Kpb2o",
  "key5": "3Kegz6BxcWZhu42nbWCt8Y7M9x18cdce4CExJa8k55LRDyc4MyVkczrAtzDW8re1dyC3ZsPfQS4KqozS87XPyU8E",
  "key6": "2wHvi4mR4uhorYPpFJJGsu9MRr9TaAjQ7v3g93PiSM4PUUCb7DPV9m4yRrky2owMqxhTS6zSvuLmNUz4w36aT62q",
  "key7": "2kLff2DqbV1bsTYWNYZBc7EZ2oFR8RKtYbiBmsGF9AJkpswiXN3DfU8mFL95VZEkTAj2zMk3XJ6G2u3yBJDd71uW",
  "key8": "5Tj1VszXik8m6QWFqhrH3Puu79D3wvAAEW3vYKrXQpd2nrKQ1Pe3ABn1RBfHcHZyDTD14PzQbtp5Ur1pDX8JGcA5",
  "key9": "45G1GNKdFNmUB2coTNeF8BShXvrYB8DAN4qQPjbA2qcDbk3kQ2yS9uWWVouNUkLFAM6249hGEqyi38F3odpECyXA",
  "key10": "3A4utDQEsLG1DSHoziv646qbcApdqcoXVdcJR7zuZe7R6NiPChbY6GPbhsZNoyJNLchWMhgH8Vj53tyeSTZHwRdF",
  "key11": "4KAkfzcCoCnXzBXdfr7PQfpA7Ruf8qqrSv4bQ9ZooSLtAAm846WBRqdXPHibUH3A9r9bCJcCG3UFBnSWJQZtdur",
  "key12": "3bkUbanxH7U15vNbytMmAbARu2r9XdkuQ7T1rM8iXqjyMoKNt3kwyQhLKYryzKZAessA4tRohouuMriwnGgEgACE",
  "key13": "5cj9aQXLCtU3T1b4QEKVs4wLzC8hGydy7D3S3W6R38YNpZydSRT8icTZ8Cjtt3jHf5LYu283pwwgoGJFPifdDhSh",
  "key14": "Q2YRwcUR5LT1z6ogN4bNDzboRBdqfB57GmkeYPgwiYDUEa4knS2XpyZ61mgGBgxafFzSFHPyBWbRVxVjHfLYn2w",
  "key15": "2ZYzEpihv9N4qDD36Q1xCmjF39d48k5AdBzMVUUczm4jBwDhvfHx397Mva9UMQSSscE1JQYWBjU1zdNhrjqfC1T2",
  "key16": "4ZyQZZE2aYGLqbURMCJAhLPC2p5AWRTFEVErvQc4wrj1bodWkiphEt66CXpG8hHPQEMYVPDhJCtL9P7GMCP7X6au",
  "key17": "4wcS9ETdJt4TTrCeMLKbndXfK9bYS38vszHkQLZYHFGXcGCrFBRneTaQcMAPCoqqnGrqia521byizCceeDLNxEkv",
  "key18": "2MsTwpkGb6Jw5Dah2UNJCdZxhEKcbLg3MSBLkkJT56jJR393yTwM5XM6Au9QUcSVWVgX2BwkDusr3gXWXwuotatc",
  "key19": "4g1hVZGYBXhyTAEvnGnhphdF2tFPFZtvuEcoLE67stvm4voBePPbdStwuUtL6TQpEWjSgPpvhmbRa9R4FhZz5jDc",
  "key20": "8ZVFbxGNnBFzWjeKGXe92UmgMT6LcPZNmnzkjFNQR3JWWC5Vx3z87oEE4AhUvfBkyujnUcMyeEJwowqhoDPJQUq",
  "key21": "2Ltw3VvdxrYeSfyi3KFkaKGwhBRyEAYTUe6DM8fpzZGDJ7uETUPyMkrp7ZVana9BQLTX5DTcvHmTMT9nRNrCoB77",
  "key22": "265jjcWTEdzAj8erUCuN9GU5p1H9iRxU4p4jRgay3Dsr1AHdgM1Ls4tJwJaXCsMb7361FqDaZ1XxSyuZqhtPx9aJ",
  "key23": "5SiGMNkqiUTaSyoAXyzMtbd9ra84e464muiyqKU7rFgSTSyD3MmKeQcdFWv448MJ2T8pjXRkKJWePvqi5pYUV3wD",
  "key24": "3wfayQ7cy6VjmmtFJqdfsXhh6Ke8cx6Fuhb6Ke3t3VqGWPUGa9Vh97dqotHu64oA1ZhQnmSLyrBm8cFswWBxWfd1",
  "key25": "2W3rBPE1mRocPrdTnuLgwy75cWn92c3gjq5Vuw2sKk2Tj84jhBfdRj4Pighf6BjLh1pwdZyaadDogL7Movydtq1Y",
  "key26": "MnHQi7jeDir63Kc6W2BFpaKMXBqcNL9FKAohLQoh78FToYcqZUBdkNjLM9FMQqPnp5Zo6yX82cyFrNbuT1nBwhx",
  "key27": "3tTDaeBC4dSzE9ysiTh7EmmW8akKCTFDc9vg2WMXsQMdgafuxKekg77XCtDrFLez6oVVuRZQjSjRQQh57XjbZg3V",
  "key28": "2j7ohvT2AwV79BPzaJC4azjDoaQWKEZkiYFd9KosXtt7BC1efLLf3GRMExA6ZEkyg9MYhvFUDkEDYkNUgDAX9zxK",
  "key29": "XHMdQsH5Mb368pXet4GnvpLDWpKFnMwK6PBpuyjWkyJApehddfSTi6XWZipUzsjKEoZEzJhQSe88XCGdYSht31d",
  "key30": "wXnVvD3cvD4XNBqypT3UGYGNdZn3MKhdR3nMoHTYd4jfPRMBqfspp2eyLTFUGqgu9GY2GsHQotoFNv62DT3Es8Z",
  "key31": "iHJzr4jnGHcF4tCRnK7LzZQJzPEpgzg9onURZVRxj3dvhtQUNBAyFm8ZZqymw2FtrJ2Tf75wfMw6jxeQfBqHvBA",
  "key32": "2nncEa4n8Y2ekWemZ5d39NUGk6tqYjKonFt6sGVSZxk4mUbJ5iGhnVyPzoiDcHSJQcMY9eVgFJFPkpcykRjjhKYG",
  "key33": "3kaZMSD4biTqG6dy4psPgP8w3LXUzPU8RQszYGPKGKwRRaJAbUBZDDybYQM6o3ogGJqPZmS1iCeLNSPc7KAFK5dU",
  "key34": "56Ki75bUqnbqfRyeQzdssX1gFgSCC8bbVnv7Mz6pw3JAP2RLaDPYCJGFJ1N2CzxsHxG2PZunXEzQPBYkUVm7Sb7h"
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
