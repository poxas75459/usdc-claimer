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
    "McQDNxqg3vkU4WQQwtWDSXhzyp8WtCj3bwqX6wmw8bXzMggTgU7e7h2wiPwp5NVnwHnMZq8TF7tgA1uzkCwByT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tKnLuV4ymAXiNw1pWwWf4r5K11oLuaQLJpGpZzT2ZNiaTw7EaURSC2rcuZKJz3yrFiw6KC6Ei98eoF8RcU8wdWM",
  "key1": "5mc6UdkvTmYQKNhzBvDZN51J3jpmMzjXYouHJNsSwxZVTkvKikdboA8yWbpCZkvjDEMLWESLHqGqSj3Eai6jmKME",
  "key2": "2nSYs31PEnZ9XeJdbRNMQJsPZnqqKuqQ5jMHgZpGwDG5EJUbjhYEgzQon3GoxHyRJ1UgsgnzR9GAXoYisBPzyMGu",
  "key3": "4LiNcZg6vVBKZEucuiJKGfUzkQCcTrq4b8XeGBG1qBLH2hHBQFHRgH8vNcGvWJfUfr6D5h1S6jTnFodZxmpq1mrY",
  "key4": "4zZxqFPHGxRGM5seF7Zzs78Z31cgb94hUfjZuzF37ytEMfoA5ZgipMzha65fUXT6kjJEKmixCKhDnouYKThzuPLL",
  "key5": "3ZXBa6bxsGNLFG3T8z8SdfRXhksXEgMyeddDkF7fJXHfmaX6sriwghMthAeBCLkM6jyKSXbkWVJ5HBKpM23Btp1V",
  "key6": "rXrX6ZnV5ydE8X3Wt2biWK3jvyJsw96ksrMx2shSKDq9KxThsw4qPB3Uvc3BVEWJ5ynaLnJgkSUzNPhaSYA9vgR",
  "key7": "4FVLFcq43TWZkXTWZ96w1ZgB2A5E91vRbRYzz54EW2Bc2gxUKm1KSxzkotMZjTviEACVZ9XibFp2fTWbEdoKC6Eo",
  "key8": "4Q3zVd4Cs8YopaDFPqBpLy6N6XCWPTSV1pbiZmFxi4REh57pQvfVAk74NE2ezrZNh9SEy2co3KkQcaY9EJACrU88",
  "key9": "2w71fMKsHJSozjPayMChfzsxhB61vsRZRpfZv4U9ZtbYHdwYr8sX5K7YrjJCPRsZvyDbvCPSzvQAPkxVGNtrBfCC",
  "key10": "2fH7eJwWtDwBfzdhLEoNHFh2fi1TUXmDtR1oDhsb3YGCTR1se7QtURTLNUvNtpPtLnSyaXJFTmVKHDLx8tmydRT8",
  "key11": "59kQT6vsafTWFgy1eyRZW8vKxUUAp3b2iDpdaXaaPiLU1jBYfBUKd4LWH8V2RDqijA7Xe34a2K6bhZ5djgtNXtnG",
  "key12": "5WmBonHw6Uw9id6CGCHNjbeRLy4iQTDvyse2vaCyz8DLGNBtXnpjHEVbLht4zjeGtaJPDEVoRoEkcVrHZepj4TPj",
  "key13": "4QtcXLpNZkwi6Qo15MBDLKQ2PPYD8MQecVy8eLBD2bWgdKEe1ysbmnajhRuM5qMEAQLX4BNunAEiEw7Ld3UZwzg2",
  "key14": "4cbHwxwNvJaQdNQ1T1GuWxa4iLoouEeE8QQUhkqqFAivbGstEpp3FojwU2EjZ1DoL3E5kegpnDPKFT1hC58kRdQS",
  "key15": "egCwdmYJk1Ff2QkpGpGxDziLLMa5GR6SptxZjSUyfHcMGrZef8yr7SAE8Mm4hvMK1XGUPxCRScqfmq5dQRJ8vBK",
  "key16": "4T3noZ2bDqPasrR9f1Y2Xm8D41H3GsQvwESLZYStpQ7aHjU9kETnj4GQX3ZDvS6F39UWchMxALV28USGL9JyxwBV",
  "key17": "2imPzeNrptybVdvm9bKXUH4URqRqtvHeyvjmaQi8Q2DYvdR4ERJGghvT9pVutrvtD6k1mNHVZdBJSUPoAdRGJSdo",
  "key18": "KBkRJBcL99LkubV6faq4NwvuWFL9P7bK5yFnznTMu9BvNTPiWBs2ELa7U5ta6RMCj6wHKtBQUxowGkAfiR7qWbc",
  "key19": "4Kmwg7RX5DoTi7Lfb7kx3RgA7YZdrmzqoz4LWiANgoeBSm8ifm7v7NTH6551PBHeqtF2H4kGfKnr9rwZvgXc5j6D",
  "key20": "fn1Crsi32VqXXNW2AcyY4qfNVXWWA7aQeUaCLztUujUg3DUWJoqqkHULUAhAfSQb5mRwv9NGy7R8Zm4G676zZ5T",
  "key21": "4GkjcZsUj72x8HrwzyYNds6LTv2bU9VXhdD3v6aneMTjADuYrUQCM7PFSHaWXjPNTxgZzo5CLiTjJPSfvNjpsZYF",
  "key22": "4hkf3jwN5Dn3NcRBbdNeyKSwfHSTkcYjS7DsDkKBiRi3dcux9sEGgDBvnWjYjhB8RcqqrmXp2fzPcMsAoTuB9dv5",
  "key23": "3JYoRisVpkqZZRNMYJExP4U9bEWRVWDny5XFDZ4bshuCKGo2FLkWUpqdyuupyySS8AMeh4aTqw6wqgJ9dxKJ2um1",
  "key24": "4MhrJyXTsxCPw7gjGPxhmSs6xb4BZ8ZuFxzSjNAG4xvDBBkis3XFk1oGPsyfnXbUcvcvrPbFrCSoZZ6i7EdGf3RQ",
  "key25": "27twNyjWn7vZ5mTDEVaPBKQkQiMsgMeen3d9BCjcfDw6eZHvciEqNGCuFDxFaL9N5UVQnJemNDKx456cd36Wn5GG",
  "key26": "47CzT2K1avhEnaFADdFjwEuseBgeCC4kCUSLz9EkborGXwKoVbHjX2AWPmQKGrN3ZhiCvnfSDtsuyJgZx9zPLsh8",
  "key27": "5QvKXu725UxS4Y26sxTAFQWvYMAC8i7AjHuWxGN7k4dz4pMQHfhBJLxXpX9wemPPnH1fDjmYu78k2i8p17ia16BZ",
  "key28": "5C3CQEhgeAXkR5YcfcptfgAw2CLBGqGTBR1JeTZDLuY6FzdDfoK2d8bKSri8DkqyFXpG8s8T7f7Tz6dxTR7Q2avD",
  "key29": "2oBuyEwW9ww1c5dX47LULypMRJNtHy9Hn1yCMayZbKZxYGHvquNe9QnAHpd6TvzjaV1N1qZ4pQgdyE4ieVGDXmm8",
  "key30": "5LNP9thPPMNf6F469Wkaf8Eu92iydQJpzzVdhHHj5G5UNjuAPazdaknD1WD5dgJehTdZrYu4EeNqYHm3W4P53xtS",
  "key31": "JrjpBTB12CHxGiv2ERCojRtMk5xQADWfZx9jLcvFxzDC4bgdTH99A1gU4ozhWvBCz4jk3ossLPrpEobBKm4fLpH",
  "key32": "3CbiBs5zvN3MUbm7HzzHwEGjSTC6RqZRt4X8SXcSA5biwVowkfnS6R6FoACWS6bDrqwQZEPMwyR4QCKvktsZo6qH",
  "key33": "66Eb3EixXZzGsyyAJgbZqjEB4QtjZFFeLjtYLVrLugMKusHUuzHz8ip9xUQzuuz6RcsSNBGP2qeF3TK7gSJy5bpu",
  "key34": "2tz6AERuUyHoAcp4iYbGBU7WEoEJvAweFtM4ftuaw9mQRa3yrAj8WcfHwdmN6UWysxnAL5EX4UkKyfYGqtsNh1r6",
  "key35": "272P2qbNZrn4onK9JxtzjfhNPKQRnLBNPqTpZrLAPLgZ8S31aqUxMM2brGrJLMvz3i4VfXdAomvjTk1vA2x8nqbX",
  "key36": "3YgiL84encKvvNS9Cf31HysNstFL49wv3iHH9MyZUx4UZeiKYgoQUcboaNSXaXFtMCHyrAaRe6yFDaYyhJBv4Tni",
  "key37": "62AKZY3PrfFDdWn8r7eok9inquEEiV4aMrD2fQhmcTHR2P4sb3t7EsqdhMDadDUikPGL6PmLnJNdyh1XWxVtLaWa",
  "key38": "1UzY9GMqskZ2eBz3XJMX6hMU8jjQRGbDXeirLve45uHJyx7Za2AMdsvtv8mp57h5QLR16yZFmoeN3FjJjhjTotp",
  "key39": "2ir9v5T5QsArn5fWr2XoNZiu47NowYy4asfyzFs8NpqyzqCjGsYuxLvght9gA2PokwPprUK1wMCuDnYZiCGk98XB",
  "key40": "2RQ9ESKoiKrJNdARxrqmZEDUXyWnP2PwbgpDoKX8YuC1iH5SS2fG5XCZHWDsHgnXcBk4EwfH7ypRDw8wbX57D3fd"
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
