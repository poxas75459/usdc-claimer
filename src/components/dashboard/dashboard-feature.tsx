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
    "4db3ZxqRsWmeAkDxJWQ5uzRY3apsEtxoMZ443qebxas4B5YxvzHFkrrqbnV8vMFEwQAgsJ9jJacooKoc3nVwcUTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nD2dWQ2TJmPyLgJHtvgCeEsdpzQraBdxcQsMoXSFdhxCkCSY6XaEjCrmHXDEV7nrus7YTfvU9L9k3xTzJGM6VzN",
  "key1": "4RkTvNC2hqKJ571jmoNhrJHVdzq5SKrFAtQyZDDy78NFL5Mphdbv7zjkKHtVKR4UWZTozAPNkgyb44anf6jLBCx5",
  "key2": "66i3fqLxL1UH4E5E8fHVhXFTda5M5c98dhDB2c92Sb55a23xc5QHZDtxMcN6avLBhLiaA294HBemz9LYcyLeS85C",
  "key3": "e2H7dYeq79Jo1X5cErs8oQUZKgThAm9qnfUNzW1D9nB8ej5qUqHj8NSwDLiaPFCS1L9x7sucEy775t9Ue3KR2fc",
  "key4": "2SjX2nWWBbXqjEGRq4qU1ALcspZGV3y9yWWWWtPaEvFYBiviNku9BxBmG6dMhhHsNdrEZyZLy1fyPKPbT9myQZ7x",
  "key5": "41HnKYQv55pAnwxNeT6CAVhbFNsKo3f6FmJjefCK75FDcmW2MW7W3nLV7QW4SkWXdjDib71cEC4XWXCPfXFBa121",
  "key6": "4ABkoTW5KDTGbQZfEfwLY5E2nhMsaeeftgRLKoGbKTRMZwcgMFT2mbEbKvL9kh8uT2WtotT3ebZT9VAKN2QVywCD",
  "key7": "2V4D3ZKEsRSADC3vE1EhyuSin16PvuZotLov765JPBDY6U3hzGGkW2rpvVixJ86ee3reiWqLvrthzL6QhqcqduHB",
  "key8": "omaPzvUtnaRaStayizZSNQjmUY8Xz4wf2fYAERU5TcErqYFHUhmr5rRTr86fymNs4xipC3V5mGFJo8EMs7GiwMN",
  "key9": "65F4EvwycfQn1tasHN34C4nKCHrc3HoepFD8pPCy92Wm1GwmZ1Lu379eDWBiLA2wXPpMneCKbWHSBJ2odjXoc6dM",
  "key10": "5ntJH6HcvQQvkAeNLXCHsP5YAMjSn3NbgUzuMWEVe5P4qq4QcF4Y8PfxDbdvdrTr4omrwMnJjWh8t5wAtdSCCghf",
  "key11": "58PtMAARsBhUyW9o6rRnwLqiQnAhxAvAvoSAcwLagbT3DHzof1SFaKSSKYJLBvSLonb1wuKbxpmUruHgptgeQqsc",
  "key12": "oxDPjpTpqT4rpHFQvb7t7jtrSHsb7y7UGnumQhJrsW7nAGjRPzDMWoK51bs4cX24zCjotkbnwTC3VVZ91uWz3ap",
  "key13": "2B9iHZWh4HVb4fgVJavrbxiUpipaXuoQqchv1iHacg2BgTjtVft4pi8gMBiwQ5zfm3981jEhu2mQniZscMmpjUhx",
  "key14": "hxo8bUMx4M6SYfwu7ivwatSykXcwQNUcunJPnK5d9FMfY6Ugjajayb9zk8NZGLkWytQTMGU85qrgmkTd2HfCssS",
  "key15": "2QnRqNcq2ZYg3tSRZj2XSXFEGTKmqHPawD2cRH7ZsBitvjbwcfJD14JnrpgpekhJJGZWrt4ta1XW8z9uoCxpXmw7",
  "key16": "EHfQ7sZ7MFnjEE3yKjQybJCZd51Gk4P2iovWZ5PbNxcPmLnYv9RErBewj8fCuQ3fynbPT6wbp4bGdcm2b9QRc9j",
  "key17": "3JVCVPAnezjWRdMhwjgrmFxMRmjrTWR6y8QQczys84mkuMFVADAPrXXtrVd24jbmTbZTZ3Uj46BUPJnpEvwkWnPW",
  "key18": "ik4pNFEEGkan9xPugFiwZCH89H4aCGvNno63Mynb3xh5tSxg28tyMTHUUCCws1MLrqNgyzKhNEa69SBBDxCbi9W",
  "key19": "2EEvdG6ge5cUea6uBume5vLqYqZBsXXwLYxtQrZTBVUBMs7LGhdDXaKQQUHNA57sfe39YkNEe5QgbbNLQ4AFaVbP",
  "key20": "3qhtYTyALmbPzy3hsVPc3hsjpiwpQ43eJWagxpawrEGFRExzcUECdijZ7kWn8Covm2iFQZDkAC1q85mYDHnDT9YK",
  "key21": "2UahvANzzAEMKWX3SRu33r3TK3JT5VekegYb1uypqSzUWiffhSSsdvDfK6LbTsAFopVV3iNoQ7LoAwGehyaJvi6R",
  "key22": "o6YZ5ks3PFw84kbGWrM9jG3Kh21LaQWMjzpb332TiRDp5XwB3mq6wkfqa6cGn8gS9nfRxopDDQQL2G22PeLjujd",
  "key23": "2x4ij37jNBMoxpzG4EQ9f8dKFpdKPnUX1VDqiobKY9xtUZSQg3ywKM9owRaFtmaqsiGCUnc5RFPwUEeqX89NZBZj",
  "key24": "67dEGndEXNpouMQHKUnRS7UyhQR33cEEa9zU2VZoU25ZBs1UFt1FbW6UAGsdgyP6ZLW7oFUf9hfsgZnk4bWcqgHp",
  "key25": "5CuUNnsNejgnXv3iYPPtC3fsQUWfqCs8ydiRN1Z2wrj1Qb5kgCRPxfQZCaya9BF3i2GUfu7x1etkrJcLUvwDqCsm",
  "key26": "2jJZsP5AFgydKNovwTfz75Y6sqkxpVFn6ZCS2Bdi4bMMNzi5FLQprUqd5StkhWh6V5WEcPn9dEhJoUwUj8z2mbPz",
  "key27": "511zzYxSaQRumk11bXL1J3uC2gFa3NRCDs2nwWb7kcRUSPZf1Z4mAfd2A2YnwPuavhA1oavLGKhstZognXgTMRNF",
  "key28": "3uPCBUDjcw8CeWPs6cQWzAWJEYZQMpCMzFUtyyKACsA5uatnN57eNNu4QV4DhKQkuuZbyLcFJ2QqQH1te1fVazfx",
  "key29": "3a55jH2UFBCrrXNwVbh9pPemCsfPGVxrBYqW3hmrh9PvQg4ZTpsf9hRnGqhwQ1mgrs46WCDdVx7WmKbUXoRSaNdB",
  "key30": "5aqCvGWP4wBNWtpYsJVojrT3CWWPj2mDxdr6fmG5Kf4k36vHNx27PF6BwKxDu6mKBqjKaSWXiQUFTGFAbxLx6mNz",
  "key31": "4SY6R3SPJiQSKAgpBSxqSEsN9fSMCCNVFC5wcYnNNgkGYY16wryiCAKWtMD9CPfjRz9xSixGHwwQRFSnoXcqyuPh",
  "key32": "2mLgkXX8ABoWLdmmdmYcKLckTowcnj8BY98Z9MnggFvCqcVdeYfz6XPAnVsKrveV9BwpDMLELvwGGhjy5UNfZwsK",
  "key33": "2Gns8WNU1HoFdkW3xfQ9C1smAsCBGd6DtVhB7bSoAGWkPNNFArdiy998HWTnUkJkebE9J2GSRdbvpBakcHjgdDLP",
  "key34": "2DorsSH3HobJSdKAhXZ6TCJU4o8156sJGGKLWmEJnMuEURWVpEKFzJsi3rUVpyCR6usuy4WD3JafwyS4u7U3jH38",
  "key35": "3enD6kt9spPpprymcVQn7Rc7cs4rpxhRTMT1G8p49wSFmrsAEocCMJWbG78bhMheRPFAZJqBzwwYCJ9JEtndfGJ6",
  "key36": "4dCzAWUTEv94DVTxjjNnUfAuKYREMckMMdViqKFWokGZEohBY7KVstEWAL7Sg9egzQ27bpARJWkCRN3FRkQjAzYu",
  "key37": "usBvxAwiKkCyEyAjfZU3mbrBYj4t4zCxjLNHpZqoEd9ME4GbqsNy8DZ8geabqWKQMWWXqcD8Njdivo1mki4qNSY",
  "key38": "5fxPaPen6Cxn7zJ7gPwKyBsh5RMpEtrqDy228D9fiDeEJVaKXQJJGhRethAxFw1BvGzt28ZfyG5jRgpuasTffKG3",
  "key39": "2CTHjJbtQKRzRhfg2V4dZtiPfE78oYNqVcPd7YNwuirxeTDpwt2xKjWS18Z9WVH8CKzzKoz9TjkXWRQBgR8zw3NT",
  "key40": "3rA9Eb8QG5RF78RrAA4FUmWebJTVozK1MYFFjPHeGTejt8NRk3VmxuXtXoPN15qs6phaKZe9bwpLFWftNwSFyG1d",
  "key41": "2nL3XgHvuh8GAxziazmzBKjUELyy1fBFJDzWjpa6dd1L7dLwgvYWG3igDK6tudnaE3FHQKfuDAbVpzQsmNJS9EM3",
  "key42": "4Tzdfa3nEgARXXeWnYc3Er9mC2wE5nY6V54eHYfotWgnH78GEodiHXqZA3dkgLDBFPkB8LLnSjrSSepE631UwVtq"
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
