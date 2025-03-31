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
    "3XCKPVvTKv7RJE7PfUEPFjbifGy1wourQ8HMBgXMpBJJF2S2981sxvJGJNv78FNy6bLtMETUgaGqMnUaGWQbPp4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F6Sj2BWXPGimYygKCyCfEYeyW7vYQnXqyWWYVPUQrETbKmuwZXWFQFrqhp4w7MJy9ooPGDjC526wWpBTsn9bkwA",
  "key1": "5UErtxxpx2zcowdCLAyqjbpN8xBBNd6KBqX2sNsEQFFkDFzBCvJoxHJBYHaP94WE9W4Ko5SJmJXyLJNb1FjjMvmb",
  "key2": "qZ33yCGibfABuaFd2orFMkFyzUUGZxkiuW8PjyFHF2vLPt157RgBjfCvVtX5RAfNUvjKFJ6kaJ7NCTTZhaA5Tno",
  "key3": "2pknVD8yzMKo9L1bDfjtSgikQSd79aU9SFRnAdvi5oyN6fz28VMSj9zy2mVeVSS5U4srejhdnGGyHLLYwHdY3Pqe",
  "key4": "4hBA86W4aYbfiqmjWEcCdE232HnepJXiht3aRuBPpANj9xyCn2d4dNfmkXvprYMGZ4r4m4vqEyi7D5eKgjrZnufJ",
  "key5": "4CvvodYuPTKQFnwTT61zDgd4bvu4hnkPkFj5Qrwhi23Qqci5h3iCJnSCuah6JaQYkFYWNt59AQsRhrtEWh5vEosb",
  "key6": "K2cCnZPRAN5jmNpEPEg2VfMRf185iJ6BbF8BLZsf7zCueuNXH9AbGArshMZdL6Bwbz87qZaAb5hC2s3zEEJ5D6o",
  "key7": "5ehkPw9SABZC7WdnWP7rVU4nJZshtHLkNGsR9agQdUtu5VGzbZQzAWWETeHAApHzQ5i5VPXTawmu1CKg7CjAHYQd",
  "key8": "5ApE1Y6KaBsEfoELHEjcFUt46BbwkAUxjHY7bw46qpvTSADAQyoVHnvYKSiFQwyZV5YzARKMGhJreEz76KzRW7if",
  "key9": "YtCo78f9C8n4WkbVFWTpE3y6JRajqbCmhSws7QuXJkEmGbqpQ5C7Gz52GepUiFSF9bN4SEvXX7qCb2Kj3dm3xy5",
  "key10": "4ZwUxN8wAuX6KfxECrWcRuWJesLB1ksUUiDHAnVV3fznBSezn46AHKQLS27AGiK51Lwro17XGaiwztT3hLnG7gXc",
  "key11": "5ArgbuhwWPn2m3fLNYoUmD85EvKv52MJKmKP3cqcpWMUJrtpeGhmsU6HDQL9NDhiHLJFvgBRAHPBw2GpjwYUCBgu",
  "key12": "2rA6aeUqhivnifN7YaJcXJCxBFQ2rpGxSCmrCu3CS3LK8xb6TV3LJd6G5rg3FjATzKWsAibsCbgYyrjgHZyXY8H9",
  "key13": "57nUovMwPUE75vN8kh4ktCjPzQeS1PdvCUGPZiCpDDL79UfPcZZUGK2dNHTkGjSdX5sQsmw5gtmhVeprnLQXaa5",
  "key14": "49mYw2LB2mfmQwg91cvNwruSZLnC6ydtay8LbYp4Fj7DecjJwCMWhJxp9y79CT485dB3oXUF52SqAmZVHBzu6sLL",
  "key15": "2Q9ygj4pauDPwUbmRocCcFbv1X6ieGrY37DGXNDBJuAMD3v9GkQUjiHV9sEqigfeUoWugNh1EX7XKNZ8NR4pyAUH",
  "key16": "2a9SZXQ1EupXx6ndiUZ7vJnUpDb1eLpMveZ1rcHiMHxNHABqpxnZ78mEiC7sFBNtqUqru2cPaJwoHvvZgvcV8MA3",
  "key17": "58xCN9JHxU718Eysh15CmbRiWz974vZCES5ig1qhifPFgGEbSJkh4NznsYteB9W32nG8mmtfKnES39rKH39i49Sg",
  "key18": "4jxS9PcEbzASKdvJRjWjXzp1mWaKN8zEVhUUX6TH7irNugZvfbTNsX1Qk6U2cUHah2mU32Bd3om4GvoiG1j2RXCV",
  "key19": "pDdnyG7vVbJUVQJsTXj8areLcx4LACNoAc5jmBWaj7dsQ39UbXudPPnZBN5Mqd3jJ3apbzGE5kyG22wTzTzupES",
  "key20": "2hpQkMQGK6GzgFGdJKL84bNnR6rHKMESMNmrypZtt9QqTXrQfo9a2AbbyTvFy6GwbMx2PiGY6DMrJow8tR8mBk19",
  "key21": "38BxnakdFxroFu1HjpdahNQd3rEpLz7ZzNDhgHqvfC1qKXq3pWRw4Q4bfaR6R1fSwfqJmQaiE5MfRSXM1hjaNTBA",
  "key22": "3AxqVCLUbtGpysWaE6GpVtt5HaST7Mm1RwoNvkisRbPr86espwU6FVuJa6JXyHfm78ULXtrxdNP3VrSoTBVVNaPh",
  "key23": "48b7NY4kebPq4sFSbCuWUa1Jw3jj1ViadWhY1A1Wf2pvZ4PrEQWFDRkXn1jY5BVfgf6uT4mCXfPJhnC7qiyY818F",
  "key24": "wKdGheMJpKaH5q8oVDHd9aH2mDtKwuuH4JScpiNpKZowyY6ZGzrnPYcPbeSyGqFS5KXzmRL5hLizXXEGmW2Us9Z",
  "key25": "5NwnXH5Me7PHuDiycwMAc7ii2rKzzy4haS7ojYRpBcG1DcMJs7kna1B966D7bhAgbGsTJyCX7Xu597tgg5vbhEth",
  "key26": "5SCx4zhJgrfBuU12TnZSt2kFVMs1aEXGFimm5WPigc4uBSwrCDfzpwZjTHEdv58r6Ge3y1doiZNa8gvxkujJF6UL",
  "key27": "3tokf9xZwQ7vkSmZCnHiQQLomGZa9oGiHd5VQmD9HxiGvchaUCgXiCuKQQHr7pYCcgNaZfqmZR1tEYFFduhuuqeU",
  "key28": "53fJjghtwUSThiM53skQxnZbJrx2F67ZfY5yDKipHA6vVW56Bsh6771WCztprVPDkofD5G9KrQfRcHJYUUpS2a99",
  "key29": "PdDoVdcFmUF6aQv9RLLUSK9jSSNS18UaX8FMCCAFLfwBfxB6PJ4V8gt5RKVPj2G1uYCnKfqt6z6CGAMfUAdCxko",
  "key30": "zRscEF1evUCaNWsiZnA7B2bmdmi8pJsR6mJr9GrDqrb44H9P2HNAkjHksUBPWQfs9fMDhuhdSwneZhawDVSKcnW",
  "key31": "bfJz1hX9ULTiw8Hk47EG4vQGvdcJXuS6Rgp9dgubXy4vWdjceB45vEpoJ2NGhUZoeG672oiHYqU7pVxjNSo8E3m",
  "key32": "3cSPS9gNQwpnViXs3L7quH3oNCSDZJZBZRHj3UJEwgqU3LBmMPpmTQVnpw7En6kx93ujRvqjaWtEAhNJsoLZ1gwt",
  "key33": "23TuHXv7TSVezABJKcgcEad3KWhhqD8GdYLjrYqkZd19HReFm2h3hHLh357yn7Ni85o3StYYaLRxsfif5rCtJoQ6"
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
