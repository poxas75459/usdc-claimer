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
    "5p1PB3CQfq5yhvz77LBZdM2wwzsgGAxYSZ1GyVdAiGgv1PkZKb6w3VE9p7PcqXHeVeBMFqvk3PaMLg76424TSYEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ACy8dGV8AzH1gW9tRLvtoKyWcqbadRAB2B4yNcDYUN6NYtSYTYAtTWjbPxSweyBjT8N6MsQ5LADpNEqVCsEpMx",
  "key1": "65BTwveMcvUoExTDckXwwQdcEHRyjzYruFCYFFTUzGd11Q8HwJWonTtzC9iRvZ6r325wkD5ndJcutv2CYoXaDBuD",
  "key2": "2CrFhH2f1a6ExmGDLSWSGBLdaPKqK4nHtDZ8kJco3WEUYyR1yLC5aWTcdny5KECevujs4ZFkyKsoZQhXqHE6jecw",
  "key3": "L7jYk2cHNiK3Jzq8mw4Aa2BXS7uG8rH4Pzca6LySguf1KDVYiCzHNE7xcYpbnN6EghALpQmBbQbmeSBHhm3kcth",
  "key4": "fhwypzzAswmcHmC55g5NRvbqfXhcu9gSpdxv7no3v78EB7S6VYEFaphCFbZvJaSgoY8upgmDZyi2Xdde4ucFxi1",
  "key5": "42RZTjibBa3HoEHoASC44d2c3m2oMcry6vpfsAPsXPNFXa9s58KLonbacLj4Z171EADN87ADuui1khpySsebPzSa",
  "key6": "5nqFtdtL81ueA5YpWMRkvK6V3QaC5NHZNJsweiZvVVuV18m4uN6QTpn7LYmW6F8ZaNuHhjRtdDp38tPXJi4eYAZz",
  "key7": "91ptfYoJRcJ61ekYjNceUQ8XsLchma1iWaNPVZjRbV1vDJ9Qup8yrPJEHhtgn64cDTW3NxPwMhXaM25vRMhK6K8",
  "key8": "3GS52UGupHTMZbKyNWrhvHmfcHtDxv4DufbMyHwD2YSW8dezqJ7HmpWeav8Upw4AjtjLpwsjUR5oPVUHHRfr9oHD",
  "key9": "JHGCNKSkbQTECwitEdcCHHd8G2Toww1bqH1W6mCjc8jtZHGaJD6icT4rAvwSUpoKzfZAJ9rVuaxCDuA52MHL1Di",
  "key10": "5h8rgom4EJtPgFan9zVWhy61uthmb6up2LUzbUzi1ipmtu3BZ6d84MpU3ioz9XVDwMeu19PyuD9XRiBYrEEZ4Fdj",
  "key11": "SLgnqrhjxjza1Jfufs424Gp4pQksconYKLp1oc8oMgUoXHNRPiTqiAwPBuDoGYuxN9AChwF9e3P8Bms2Q6UfoAV",
  "key12": "313SCAvM5KddkGdvRqhQDzBDg6XXZKXJHXh5ij4YCFbjFJRN7fp7FT8cJhZrhvhhDK4FSCUHEERTEYYQeAhWLqWr",
  "key13": "2YtCU7sPuTA4jeTGKXKWvbx4v5uV5YwDzL9MduRdMJKnD45hqxH2WLvNadyxRoRjTonBBPJ32gy55adhXWWg4SZx",
  "key14": "3YQsjasFxxydUpqNphF8BYG3ogwM6xX2ajPkeaqV6fcN4zUQQGY6Rn4RBcaVvL3Kp5oRhKWyeeJ9ig1KH5mWHy2c",
  "key15": "XpcpG439JB5EZWrNUAsNVKrsqiLFy3zDz1RGuxT7ceWynTkBNQWPRUTpBJZ4WfELV1UbjhNyrJLLSkSZ1me1t8d",
  "key16": "46QAak3zvUuBJ1T7Y1rGdFo9ifAkZDVcaUty1csCLubzj4LPMq4VWp6ScTCbGgCDUAYkzQQRr4TVJ1HZ1oGEgAZD",
  "key17": "BcqcrnRdSWnCXz7mqVfjgvbuKMcaGE4RVLLPBzMYhZpNcXYDzE8tsWTbSAgGk7PEdQx7Ywu4eUn5zQqUX7HGbPx",
  "key18": "2fAYcr5XsdNPqbHy7re4AQYU36XxTe9YFD2jX5L6F9DLbiHVvbEDTuefureHyF2TH4Vwzf8FeP52MeWUcBzNnoTF",
  "key19": "5zyyier4uUbzaT5oJmT3fPq1iLzDF1pVzESY3k6UUwgjAFkJfY9s1PrwCmGAFxZiZM3N9a1zmV4jG7gHB1ygpqA8",
  "key20": "4ad9QLn7oTZoDP2puR6Gk77H7U9MLfb77H8gyMBzh5L2cXpxhWrZn93UN6Xt9fudLkob6czA5jVvSHtWxjNcGvZg",
  "key21": "2czy56Zs12nuF29zypw3QHMmHLBPUNtArwkJczpPEXgE3kUBo1HtGWtMckQZ2snqocbdSz7wzMnTSAHX83X5puAB",
  "key22": "DaPsu8JD6Ek9jHBnSdDF9dUPk63FX3srr9BQ73TAUGRjbjiJYPtiVPrRiMqcgAMShAb3ueVCzwPnETnTJjCqTqW",
  "key23": "FEbtTsD2jnHBZG7KfsasfYexsLnXWZfPiRGsPVjj2R3qwu7Dwqoy2NH8cW9RU9keeTn9hr3pSrPhzd9eQzALuiR",
  "key24": "4NZBwQwwoh4n2TdjJDFeXW8rvEcJ6rymFXoY212JeXoT8tXpqAunxF4H1ufXwjwy6DFT9gzg5t1RZjEBWEgCHpKY",
  "key25": "BdgcKfSCymT53AfR7Czcsy85UZLQAuDqVwrLJcPkcHVoyV2A7TSZzJb58fAEjF1aHXPRJzjeycA3fAceMJfaFzg",
  "key26": "2YA8BUzhgK1EASpbyXUX92eacupJhorwswAyszNZ2J5WS7UYVhGsRdMdy69MqGSg5R6nQcEDpoDWRHU6AfDUthou",
  "key27": "4q3DDG9Fn1hWJou85kwK822t8soypNrA3eqCMnVjQ1M1xzTbevS99soDJPPej8N6Cr5vgPGpeP8L8C1fiG1F78CS",
  "key28": "3c15pxVb13d8tJKYKT34jirZiRfZzBa1X9dvZcZpgWLdV7FyvaH568YPnxm5ehWC2eftoLC5WSvzyfGKLczsVvsF",
  "key29": "JcrX7Mmynee54E5ozcMJwBjeuKG1YUaoPa2rnFgGSN4hBa7fsCDcwTpCg1JufdifFrGc9s3nhrFVna6GSkubgkJ",
  "key30": "Ukw2tWwJ9UP7VSkbVuhudjyfiukVcmyy4TCkUoL5kf8VDT58BooxUsPr6R4CcheN573PUFcAUvgmnJCUxmBc2rE",
  "key31": "2q1vMbbLQJ6KrHCoKgPUmfGLNQpb15jJ7SRgaSACxZdc89KfHVh1ixxTxs5bA4xiJsYHKCJSXNxQXzjN4AXKnywb",
  "key32": "3N4v244W6D5fTeL44afGDkESvfwY8wbL2ZMHjdJNv5RLoyzJAAjYkEux9JVcY7gCoh83Uhh5xic2qSStFbr8dq4b",
  "key33": "2e8N5CG43HauTzLZ6AbzSnUnsx2VBsyCy9UJxHgRgRssWH8k47upy8vavuHBZMenMFmYpf9gE8PCLEH4JmiRrsn3",
  "key34": "4rSwQirrko35FX9rpLgtnv3U5wSfioyHrCWqzPQ1HhiSsvpo2qhdKSf7PXS3z9QNSiJXrTqKH4SD7s7KfNEgVQsL",
  "key35": "2ygbdAL2Y73dar1AZ4vz2EHuS8JMkJcPGW5QnzCMfbetUmJngYXtUWicxm9KEbwKin2h8PVYBNjrp3G7NbZgUVsZ",
  "key36": "4Tf8rpfWwMVajMZfFjs2QvgHx291XEn9SytePBvPwoPAcSPibn9RWqbtFGe7kecYF37YK4mPpQsCgtsH4nTzcnQF",
  "key37": "5q3xYDoZqQWXcLk9PWyhLzCRrsxg9MEdCxYa1iDduQsQNSErSj5advezqT6PG4MoRS1cwsR763NPRsJmhKj2kczv",
  "key38": "3GTNoTfzR7nXzawiA8AV8w4pxHbk2kw6So7Rx82QuB2GjVZS1NtrSNE17FMv6eHxgzJwmCrMDM7BDWqF1DQQmf1H",
  "key39": "3WhKzJzBVpu2zuyEXemht3bxLoJxU3U7vrnyPJkNzF1LBQaS3Em6BhRxeExSZgrWCngKDLWHSNKTjcdPqKyJfZT7",
  "key40": "3vrBWdJjRnGuZyHTgc4QKZwfp2RRFTLxT8wdLAxaQ5ejB9RcCASXxwxZqhJVSrV1BgtpX5BAhxTBgCttZupzgu37",
  "key41": "33ktqSg34JvzMFN59qkCzTU3kkWEcUq684PFkhA28HY4TZdo6EEqnSZ7wJyB1PcqR4UPJ7ct7XsoyY8RyjtDhbM6",
  "key42": "KCGoTSmhRAmf6hyufTaPZ8Lrj1SFPZpXwvUZuxuQ1sR2RtoWMxwtuE3SkeYiHWnuqBxh9jkwWc4YQtjf6xYbmmS",
  "key43": "q4Z1zFVe3G7JQmSuF6xiwJixhjv4WPWVTswZ6p368K5QMTJzTKupvZqjpyWcUmAErtaYXrEkGdAvKNV9JAsNphn"
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
