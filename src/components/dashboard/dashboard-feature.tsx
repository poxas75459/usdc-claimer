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
    "2piFqPY4jdGgAsy9XbBbxmxkxKQKKQfTLmAhtm4PTme2m2D4jBVyB2hKvXX6dJQjxoJePteo4DjUjKRoXqGZidrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HpjCfBGLwhNiChnbEZ3agcRKJPwSDDtiiUzdLJSPFeiYjjyG8R8uWrnvZNC1zj1WABWCWdMP26yTLnBiXhcztcS",
  "key1": "3e6oN1PCzbfUUZjmD4rrXH5G7o2AHH1tdJxwGptEUGJpDKVmQ2fxuBM6CXWcTkAHs3sQk2ko9SVZdybjbpwHoUZw",
  "key2": "8iGxR7DJoXUQhupQnZHnfmA5w624ADAEijYBbK3Ho7XHafH5kmcmfwZNEHwbgnJsqAyqqduyeisfRtC8puZifnT",
  "key3": "22ha5C2fjU3gnSQLafE3co8RxESMykbRHgnZfk6x14nG3rme5HUor1j2ERn2VzqS3hUE8Mgk8tqiN9zk5J3eBuxZ",
  "key4": "yBjCaXLALadgJexh7N2PubiEETMkE4TZKGtwXbP88tDMtsDBVmdmKdzFRNfzRf7MmBgUMSGQRci1p56jfBHWFqA",
  "key5": "QqQqegMsvX11YDg9pZDywEW12Bae38TXvA7dmbpq6ouno1u4oNcesuGJ9qr3YFrjBDbSbwktzaGnrDak1DwKhSW",
  "key6": "o6VNkrgxUtkab4z7zjxbtU53rWPkD1Hcu2aKcjCRvMPiK4ogT2KzmkVjTCKcK3tvui3zjjSG5jcugc7yMXvtHst",
  "key7": "5i6rZPprpnVHKsXDWxCb7svopTdRYfUuA8D5qeBMKgsUFfL7XEzFdXVZGNqZLMzKF5DnhESGzyBSD2Kfgi3ZqRjS",
  "key8": "3AQbMreDMf3izeQy5voyBRcUMiMUPw8go41f72Q5mFDwtSCnroEmYsFsJAW9UZPtQ1Vd53qedoctRo4TfLHirZDX",
  "key9": "2weSmc9Z7AELS4dNDmyh6FknkgSzQwjAdzMzoqnBQVQfiVWRw6hRznCk5CXfQygPVrt2ekkG8xU7wRitxxzbtzTN",
  "key10": "5bTM4XT3dJ42WtEFVf7dkhKNoakj39Cr135tvzavtcmEbVuDsRAWq2X4pEnPGPhDXReWmVVu16xaVThmNQDNrb87",
  "key11": "3Pgc9scdRS9im3u1i8kHoYB7wv9CehRBRzCFVgPcFUTVQugjMbADJktQP9GnLhhR7uRAdGSjjVxiDGPRwwKg8MK2",
  "key12": "sMk142TR42yyc9UNLfG7LLWLb5TDJiS3JC5JA1FwaZND57FXGXW5igRKXbN7jA89a1iKt6CtH3ABGBJ7LnvYzLV",
  "key13": "3ZYxrCrHed8DtN8eumkDH9TzxU8bgJJLL1QB2Lfy5vKUs5D9KzgtXa57habhmaaEEKrAPngrV2UZdw6LLMQTLRkA",
  "key14": "2TxkQmJfdxs4qtwuFRJJohkAWSt4FA5nFdmUQryMpP2utcUSGXPYdp1KYnTEJud7rwZTLvdLYcMMA1oQmRrX4Wfk",
  "key15": "3GvMGNf9ooe5aV36QKSvwFSBUmM9McBgh2Y3pKUAg9HAVcTKa4AbBjipxt742c1AGLc5MQiCcGkSrwGurFtig7ky",
  "key16": "4f4cu5mhbTtz46YR2BM6fQke3Sfvt52C8fPcnEuAASDozASd1xC39bQmU46cCVjPVK35PNFDJghKSfL428fnubMd",
  "key17": "i7YYAuGyVtp7H1DBJKKuqV82CcvgcSroqLHGMquC2gbjQUuP7fqB9czwn6X4fBMHH9D7LZfDbjYGbsatxq3yVF8",
  "key18": "3HNimbhmpbNZ1T9FM4UwSjTQ35iQS27DH3yw1kcwgGHfAMY3Y4cbU3b3eaSLST3uECmFwLFVvP1cSNRC8BReeWHB",
  "key19": "2Eisj4R5UMZ5aMPtNvpQV4YUtKzDgy9mShsbWsst66qoe35pTVWKL8eUqVM8iXXzrMr9PRfEi2iAwoq5xJirJy6c",
  "key20": "kHLAzb5jPpNE3Y7YmHnUgsJ9EDPNDEfnJbdN9jjmAtzcRRjNR1KghyX1gaKGegT1HjbCLgRRM99Nb23XF6zVzMR",
  "key21": "251kWfYwWkJmYCdDvoxN1pbBCpb9H8Ct2MhqqLMLLEQ1tPADJEVsQmo4zGZhgae9uiGzK3SXGw779GeQMVKdxPh8",
  "key22": "4zzBVzKPKvdMdLKxxGQoKij4DbgUgY3sn2DkcjaN42aSiMxdNZVsZy23rDdSYSRzLPg524q9kYz14q73HkGuojzm",
  "key23": "4nq2igaFczMabEqajBYzqq79KnehpR1DriRHSB7w1zjcwtATaqaiEKMSEnZLGCCVzo5hYUx3U6RHGZuWrJonX6Wz",
  "key24": "35uPW5fkQkN2V4459nDNfdz3QT34cCmksrSWP2TEpSU4Rj9Mvz6vWGT2mMDS8xkqhArLew2EpzKL7wAPY1mycuQD",
  "key25": "4mZKyaF2jgZ9EHMZMau9ADCzG2ruVFZYNY3AXThfmhFyBFtk7JS4wQz8kB4JWGNDbzLrbTuW5wT3kTEPrTv8mbTC",
  "key26": "3n9eAeZPGhiXMnQPaSRQqSSs5DV6yy5EMHdy2YYwjRdAHYAianjzYFY9BFSYPCvJ6Q9iTSqgeTgKXyg2juTGHKBA"
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
