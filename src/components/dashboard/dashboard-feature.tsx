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
    "5ZaGFF19Kqigxn5PZbScxapwvSxAECwUKsYPdQEvDDycHXAn6Jiyc3ugYqXmRoywM4kyvC5jMcBf1m5PrvyEQku7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fw36wjnXD2DJzAkvvSF9NHD88LUohXvM3csvQxgQafJsGFsMUxg72zKQNkjkadZhAZjxUYZep2Grzr2csLR9XKt",
  "key1": "4YyVMs1VVM3zzcGvXV3k8TYmsKL6bcf3sDjXqWJymBJc9gDEJRMk8Urk4WgBZJTTVEmtHA7E2PENsvz4FcHH5416",
  "key2": "WoxyQUyJrdxX8yVq9pWRyPtRzu8ZiWr5omkqqrvTWtGtZ2bAWMVHmJxkuQj3qA6BMFm75r45v3tkaTu219h16jC",
  "key3": "twrGRPyWB1ZTJKXrAj9mK7Sv6HV91LwAG7UNZuPPvuGiBkxH8dHXnL4ZnV4ANddXaZBCpxEWrsJBBxsXXhqnv6N",
  "key4": "4GUupeuxztdseicNGLHhRNKD3bNLNcy61Wn92u89gCnhi35TEyuCqpmYd3gVey4yEa9yL4CGyx2w3GgeagyKWsSV",
  "key5": "47dDKAKzgwosysKoMgXwoM7pt8bDWHPFNkcSwTgaGuFS9ibQz7Nrwd2d6kKdNuPyM8nqbmxSQwfeTqFPrLEV2LCW",
  "key6": "4eoxfTzARjRGbF8f21M1VBv81KCrbhLGnGnC1Fp7WjrVT29kGYk8Bm3sSnAfjwT9682mkactKwtb1mRE4Weptqkc",
  "key7": "4kgFaJGeiLmpmJzWQEpxRMCmnMUrZxccVEizoqghcAUKAb69wYjdLzpKqyhyvcYGDimXVhLoxNQ6wS87kTzJSF1E",
  "key8": "2CEvsMvJgG7L3kJRj2qZfQjKcQx6mqLVe5AkeVYcNwtmtyzPP83ThKDPB9Cd8Zs9MFuUJMNaBAbDD9Qi9nmHVRXg",
  "key9": "62QpdGRYS6p7k8KgUt5Nh3eyGQqtoZzjVPCGoTrN5iFmybWYdCjVeGau7ZLSZbW9R3FZNvewnu1FMe6ymp1pbHKn",
  "key10": "FXcmszc5rENzaNVVmvr9ANSi1UeTyjDNtNZbEBsiMBWh3yS85QRFuk7SrtxUvuFHJ9fo6Kwqjw7AfXFAnjXMouB",
  "key11": "5QdStzxRKas6HyfReW2L8GxkTr6jy6Vm3V3Fs52LvzCaeaS2i5xeMyEbhoZyBb4YPt6DGnjxQsiypaMaeVNSVfGq",
  "key12": "5cVC7Hbe6ECY9TPYTyk3UNkrzQaSp9s7TXk49kdjQT688Aw31y1M7SnfeWmXL9GtAZ7hLXkPZMfkTKoKVhtS4hJg",
  "key13": "3DQLSAT8kCvSTMHAjuBQR2bkrSZy4Kt7WZCCu5EXtsY5sZDGMirEB7X3tv3qr5DreWKDGhjxiQYu24Kw4KFc4DzW",
  "key14": "gXKC2sFjaEupcM4t21gevFF72dQzi9pg9ZvEJLEVZahXdWmG8PHPiXG8MR3espmLvzBat1AJwRkvRkw1BqUHtP5",
  "key15": "435DHwGj5sk2CQooUMHvNWgo5SnqA8bcpcE8R5LS6k3uibz6LcHcDsab6JyK6EQYryGbyKizvxqZcDa2aLUVvUkh",
  "key16": "ndgCqZy8Kn1GwRx6nd9v1q56gUuh2BmtotvGzBdC2ezoy5M7yymdkS1kkeKTbTi6eKvndgfLGMFcZaSkxuH3DXc",
  "key17": "4gkSpPTvoJUCgUjUmvx1jwDGHdNvZNpjajCnL1SkGShc7gVVwX2NCiTDdYuoJmD7antCxyfUXiynFPEWN6N2oiRU",
  "key18": "3NNUwvBKhkzEgqYruuTqtAtjKiQAReFU36BR5DJeK6foxFykqfpfb11Ww2nidmjVKcsuCojZ6xVg45xg9JfqGPbB",
  "key19": "2PEoXTGT99XHo2PS3KN3nWbxzGajpKeN2P4d4Ev3sf6aWYLzBVNxbmpJ7QozeyLqNQ4Wfe9kvpjacZbKmhXfVYUa",
  "key20": "2gwGKpAbXGrKdZxRFCFqPk7FpkhHExRajsMPBdBYV3LxHwFXp6PUha9s4uBD1wtKiYoQduRmtHLexc5rH1Vz1bEH",
  "key21": "4sQJ3Jk4sw7xZiiytW8mHVZLZyTLPLUTiCVVsxsk4pGjZwXRf6KK9K4Sermuw2aKboZ8kUJ5WZ2JEUjauJEEzJeY",
  "key22": "58Nv5pHvuWAfDjMBfqZCjXVVCR29exHTsaAwheftRszUqMN7p9TsuEcRXbH9a639DEnbna58XTF3xHrYECUYjo69",
  "key23": "4QvNzkq9RLyTgGiD8dNMrZL3Aa3MMtug7L8AD4Cqs6cD4QQ4AMwJemEVULyxgnaRzmUUqNvTzxH77LkWwmF25qML",
  "key24": "5GrCF7SvvZpGfUTSoL52ySxh9kUvyGZHYaCy8HUqipD3iFmy4hedun5BYLcpTpNuN4t4F2DkwqqSivJR9xF6y7nx",
  "key25": "3soPcCVjfK19jjfzGb2Wrn4WAqQrbuia5F28XfwU215KuAdpS2Tg1K7nJzZSTSiqi2mdhRUmgwviYwHFwGwyuvzW",
  "key26": "3u165DTuHvdBejLVJEivf9mEk62trxK337yCoaxvYeYanNNt39DmASWGHMftKH4VaPLV3Z75pX7Fx54xG334TGoW",
  "key27": "2QpnaQXjbP4rc1BMD4dw2U7DwPQLoz9MSypMU8TCuNFMooePt4Hjwm6dS2Wxag9NxRSvLUNB373qUBfDan7edoDx",
  "key28": "PyGYwRyBx94mFCBeLUV7NRBoUhATBCiFNcAaX9XvrX8PsB5M4rw8MRXYaz4V291J5DBCqoZEjPMFxFg5Yd7eX3H",
  "key29": "3ZHfKwiTLL11HbhRpPsPp7mra1Fp5tDKrAjRsiEL8woYBAopdGpYAwq6qVQWPNf2pS9K7fNUQN5gAsdVV1tAMDK",
  "key30": "5CEW4KMbGKRXTp29PvGVXyANX4RqwfpoofHfQH99EsRAymisyTVNSi1SxnYF3JMYdaKcmDtmzbKvaazDr6L2oXje",
  "key31": "4mfz4d85ntFwKWh8o3vhmrNmwyE6TA4SQmcVVgHdKejLj8k4tUMuhc7mFbfVEa9oHAoE8KnztTA5dQNi4n9vJxQx",
  "key32": "4HDxk5tvisnjvjDz18q3YNSHByeu49fj8WucHaANSPFNQQQAj7HAhk9JjeW5GdTJYYSLBbKtkmaX84k8E4wJzDUA",
  "key33": "46KXwVYwwxb1eDbFRgMfCUizptVmifWz1iVvo2GEiG7od6ukd7Ey2i6MX7ypmx6J2Y5o1da49A19wgarfDrdm4qH",
  "key34": "2pNTEvKq75mTPGuWSbUDznp8bAng2ijSM1iQmkYxcmyNRew3wP3VSdQicX6P6aDv63vhosVifCAVTR67bTCv7Fhg",
  "key35": "2mLTtC7rsBQUnLeCNAF8oS7HFv9PwFzk8XNrm1uhaGiyhG3cgFW3MDQm1sS95yNTHi1F5LhjqzD7FsgfZhSCPPmH",
  "key36": "awDSQdAWpcfgxP84QcbGTqdLhHnxguHmHDwSKXvdu4CsDj54WwYR7jWiXDvoKMgZy9y7GrRmoEXSU3duSBhKYFm",
  "key37": "2Fw3ETzWje9wXrJgkysdzGYZrMf52xR55NjS3REFDdTJDeYcm3qBc7B6e8D3k1NAZCfBpyQCD2AtfLiFvfNS1KcH",
  "key38": "4DaMocucUNHjMDM8fvWoYDr2FVSCZrQxdDt18eN2h9EHqTxD3P6893RjxCttjag7uNRHGYtgVYVZN5yeKCLCvWmH",
  "key39": "efdbjfY7YxtYca1Z73bwJPLR6ZgaxoJ7ZqSZTTXtpeQ9BmnJ9ksX5UNmt3Uey5YVEickeuwJh7qBxBkbVUkdNFj",
  "key40": "3xGPymaaG2zycKeowE2rmopChZ7tiudxXyPXBVtcEidqmy2r2f3REwv726ZLxukTKVxuVqGayVAX9MpNaCipx7oR",
  "key41": "5nSgR1GNYtxSmrmurqDzCcAjfEhuAMKG7E42ASjdhikocFU3PDm3Txtjo95xMezdzkrEos7hr47zw6dFpHv5CC73",
  "key42": "4dDKShRmcSYTJqRZQhx46tHzJvqxvVTHnBMntQZQdJ8qV1j1Nx8yoU2uVRhYLDqkRTiri74Ukn8fhaQjDq8sxvvN",
  "key43": "3fbyPt52TdLXSz5bpkFxrdfPKZZ6k1toEmosAUh5CeQ7yRWxDz5EovH9zMVngWZNpkYcHqiszjEpzuNaoAJdLHr8",
  "key44": "5ot1dBRh9FFK4EwDWCcAscPYbV7CPj2PHrVCDtdCCQBbGHjPUxWKHnNduu6KqhWYBLSnuAKq9MQULCLHza4X5d8t",
  "key45": "5Svsup7eZMNx459CQfW2CiqMTouCLHqcY3hQv8tYCwBhjQ4b7oFFoTS7o4Yoj1hEe2C7vbhoVqmp4WegQGAJKQLs",
  "key46": "5ejQybRaZfjZQ5QvABxh11xGvzZ5hRDbbSdzGBZxuGfRaTYiui8XzbGsSQm3RNB94yxGXsWFrXzfBNYMXBuW2tdd",
  "key47": "KogfgowdT78SWmVaiRAfJLKpigjZ5hyyQZ2CnjmLvnEYyj8ndMzXiAaYpFWf2ovFToyoejR6JHJXvNTCPN3ba8X",
  "key48": "2NEwdcoJtj7kvweCWPCvB8AtXgaddTAWkijRs8v3MFzkMa1GwRLWHYH5EMj3pyBfHEuDKwxWxCH3j5CxUF9Y4fvm",
  "key49": "4KN3u1uezXvmr9281J2hLFCdkKvRd7pK9La7UqpwxUxiGVyKCyiehFi7AbA4Pc2peDjKQy8A18MskZ8ieNhVFSXt"
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
