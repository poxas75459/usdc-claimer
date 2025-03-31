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
    "tJHEW8H3W5VahwwJLF9TJo9ZGNzpZmZ1pa765PYGoEYWPnftF3mfArAmbUBFsCZc7VsgHrzqjKJTPGAVX8baUP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SWn1MEGoTc3urFFsmUCrJr92itopkWb9xkmF7Udg9ccmzBcMNjzwVi577s8PXr4Wt7cuyrY6KisevWXX3BAThay",
  "key1": "4b2Ga2kB2U5K4xB7ToQ23yJpVmihcRigonuAPRtMJr6RwyFUjwViWayoSPaXeYrYQC9uQucgAMwAhdPbR5Gd7xCg",
  "key2": "3SE1YwCMb6fPuN5nzQUBxdWj2aMJbpmYvLHY5r2chktqCYsYdysJTmj41FY6mvKo5d6isGR6npuNcg1HaUR87U1A",
  "key3": "5he5N5cPTW6nCYX2A7bxSf5AkkfyWD9kWCVDBzoWAafxZXQvKdsLZ5g94koaXsDGctrNLxfQSCwQhNYC9BHyLZq",
  "key4": "4ssd1Pir2No1sWGkFffWkENUSVZhKYFXnmsdZ2F61c9yJYG4JhR9jj6UNQ22fRCA834YvUjSA1GGtJvDk5Wb99hi",
  "key5": "5xFPhJNSYAnqzB2wzuoYWVs3tzFBGYmsr1S7s4oxgrGsCJn7ekc6dTrCkgSocq4g8ssHpJErCBLEKCPCUAAkJGGy",
  "key6": "5BAfmh7ZGWMTrE1jmvYb9GT3PMiXUwBEYUG6sNyY3aoaunsMcbXqUTtyARdtmzDZWhq59qkd7tJUn8sMHhCe3DA3",
  "key7": "3r3mrEDhJF3cQugvu116SmggnkFoQUKyoDcWmzqibYYrW1nMiCghMntN8ThJy3BRSCozGGE87Ss5hQPZnnpmcJqW",
  "key8": "466hEEG9wJxDjxKrnjc5XiD2oCdw3mCn1ufmA5FJK17FEAFzbNnHqfvXCxZsonuY1TQj9F2YEtoGJSSaM6nqzJA6",
  "key9": "5DU4Up5X9f8qtpGD9zgkAYzPD13msNZsaZSXZyRMRnDt9cd7duJUKyyzNXugjXZMWNRHCdt2v1cB5V5Kgbfe2Xz1",
  "key10": "2VNkvdWinEfKvACTFftL3V82pauz9f9UVukJKX4MCBcQ786bKVwu1SyoaisTiqeHEgCK73cV24ofDJj6opJs5qGn",
  "key11": "fWbQkF5qRn7iy7Nq5HQfMJK1SPp8gjwgMsscRiPZxitnMMfrWYy2VeGdaNLwyLneyv8VKdu8cChSSjRRJuapTDn",
  "key12": "5kZ8DBn12hwdFBHDYHNWrg9jbEoNo14111hDKUf2cepXBFoNgG8boy7dioPkE9pQrFxBNo4mNPoGcxsTkvtTPQjq",
  "key13": "3Dsn5j3yTniYx4NEWjQk3QKSZpaSf3AmRX6EXsxHfxSqRgh3FPLZuafJaao55kGax6oiELwsHMp5vLT1Yi4MUoS1",
  "key14": "3KRUBjKH71mHXCdfJFFPDQUekfbnmejC6UvqgVi2puYXLNADVhssjLJjq6NjqG6NnqKWcoConcbqry3i5jTatkQN",
  "key15": "51sTeawvjCcKo1sNzT53NeFEZkhsFaWkAybGHt34oRYmeVAEXWprDXx3D6qjUrVqFh1C5otK1P9nNcikY64qUPx2",
  "key16": "4odpeUpar2BtEDnPcvR9r7fKiSc9YS6H9MZWBEf1BkVUbgnWKuCMXwo4JUGrrMfGjFstFgBPZEcqCPhPRoU2cGJb",
  "key17": "3VZD5V2znXrtm7X1vbMMRCfnYKCuYtDFTemR69V4GowqWZfSKahB2ZAKgra5qPatcmKZ7wrg6bQ56dcJTYjx2P95",
  "key18": "124joHgSaSQsB5TTb16rTmjuuX8AiaiLoMBHsjsRpD9a1oKBtUSZkL9RqZNQxCaK7HQ88fftBFmbzdsAHxnkZTsc",
  "key19": "xme3W5E43CP2VVmnoVvQA1qmrAVT65nXWKPSDHbRyBvCkxk8btirwSUPRFqwKhwb9bEhuva9ZFJ9ESN7K1TcFhd",
  "key20": "3Adc13ysgkxsyxcZCgCwJaoAg93kH7RLbaC3aXdPFWuY9sdFMw86YRUyJj7AFAXvEuopjjdkpGBYaJntN4dy4HxA",
  "key21": "3AzrjinsnGkfnxM7xGgTVyES3WBpPW84Mz5hxP8LrUcoW1qA53DArPKsJ4uf84HvJDi1gtoKpywpJGCw1sZtoZEk",
  "key22": "AUGFknSJqY5xe3XH7PXqoFRRF1VAUWuC3V9972rTxK31VMm59bJ17j9fpPuVgnwfKZ1KjESZKZ38usvUquao1dB",
  "key23": "3Sv3yHyTxp19YKHMc6r8F6reyJ1qSG4LtMdDQdnbfoA2WEw7gRvBRpUvd4FXLFPa9EBVwBrXHA7wwn5gBpBTWep1",
  "key24": "BXniFjzHF8WwC8g4ffpJ2yAFD9nhgnSLvT1yVRevTxVZ42bfNwCNp4zrw5hzG1XFcH8QoqpHqsMMnANsJSgyMyM",
  "key25": "ZmuyhsVfJrM2xTAuSJUpx2zsijY3VtBuqDPbQG96zzDijo2aC3Ye8kEnd262Q6TWqAg9sETohGD41DPyFu3awyt",
  "key26": "5dyLGbXTurTy3ok1jyC6Bv364fdwbHx9jMK2tEccs2MYKG7423eEe5P5tv23xDp9RRDCrQYE2wRgQGziA9zoZdis",
  "key27": "5WBzWH1pnqJW4kZqf2hbm6R51WHSfQXijzYqgZMNBDfhk1hnfusBjBf5h1L6Dk2QUJcPqUBXNy14UrCYuMB3QzLJ",
  "key28": "f8yuW31U7pFoKTJr4NMVTztE3dyK1TRgzLW6y883cNnScJJUUEf9z7L1LmCcBrFfjAJTyS6f8iM9KwZn1dsj365",
  "key29": "3VBkcYxNXNjbJ25Nh11Ai4XwQPeVmnBAUbAseVVG7dniDx6ZnNEMuFsPids5PF16cRNjCuZrJGV2RiRqBtt3BAHT",
  "key30": "3jT871p9Jqj6wUJARUukNE4opECjgNGPLeFbMKAEzvBC2o1w8iDZh6hWowcX2hBwp55Uwm96U7kuMtuRqL2JFrjV",
  "key31": "2Bp2Ps4XYi1GASkTaFJuyi5gvneepLMMEH4u2CU8d1R9XSN9Dot8xskKt1jSmexEaLUGmvmfkgB1c6uvYJtC2Sw3",
  "key32": "2PVx8YsnRdiNH8rCTkz4i3yFndTu1zqsXEaWR26TKp4sXUUagXA7KMm4H4j6ivyQCHNEKBdGe3ZZuoAgs7kwhmAz",
  "key33": "fD5p7QjTCy3DVJiFFGWtjRKcvW46vQQqAcJa1buHTdrMb1uShqCaKCombcNk4xP5eU44YmLdvVHCg4CPfJZcGGm",
  "key34": "2jqU9VTBpRUAqxViNdEU8o88Mw7A7eGMCz8Xh7fkExgbW45eZV3qAXRYAWr7p1DMvcaYuUjVPqWLhkpTV8T35hZg",
  "key35": "4WrQWVXAd87Xd6GcsrLJPWdysccNq9jkHfBoToGgFq3FpHuRkhJGkkBNqqWsDrDEg2fKNGtj1r1hPzZbTfh35UjN",
  "key36": "5cqsWc1XsLBHPmGZJYubaHtBgPJe8fXmXBzDExxQAu2bapWefTR5S7NogAcnhAZK36YSG1bEXcsbYfBHdVFPRWtf",
  "key37": "5bEGjZRoHT6TWs9sjqYUKYhgunEbLzntTuchoS6u6mgriQoykX61716msgGLpALwMJ1dRj9vtktvLphsDkQjYEQ3",
  "key38": "kJcLgJmg9S4iM4ERqRkvz9rfdrhYZFjurLNyGZRaMU4x4Hk3hfL8rEdBEaLN3ma9XgEJ7AeB6smwzgaYnWgR4BG",
  "key39": "5bh5pAsdwSmeiWk3q6vBZkW8gpNJN7TuPc98JWwib3pU9pqgHaTMA9vEcWSZtsLNyecATTXAzy2vEyqGBcsP5mhB",
  "key40": "49jJWCGzoaD5A4EVTjKGCtToWSWF3V4FQFT5npj4xzzGmyewCXSdtJCAHAh6C5NHghSRKkr2A9m1ueq4e5fstTL2",
  "key41": "5gi28RztBXi7Pk8YkU75BuxRVXkafHBCxzRUTkYiJyfVJam1vScP83z6DFTSTRTJ932ALwof5p5mKzMCjptrxg46",
  "key42": "3Euy2tZZC7EaKnzp3Nu54DAkSAX7WjY68Kvv7ZSe2Z5c2LDvs7zhAAe2bTXKsjdfwCCwmZoxsvG4g6nGHrirfcvN",
  "key43": "3N73iksBzm8qijJtMTXx2pCKfhEVtG7ZE5G1jzmj4Zpd2qMfDn41pCB71jHbhdxLdei5aRe2ucdJ3V8iJRHvmc7s",
  "key44": "5CVZaV7meGWVywprYW8h9iCihmxKYQjt8ohiMLj5X2oudhrsa4SL8U5Yp1fFf4tVXREpJmaZyPGQxtz8W8Z6UNNo",
  "key45": "4srp8wgY7WEgZtisk8dxh7YPvvFTTdNsAvuyDjitrirPQPNy6pJv6zQTy52SvWNuSGVXfNENaeakk73xkbfCuM2i"
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
