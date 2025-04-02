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
    "xtfY3L2YRGzAFW5gUsLrfWdxtec5vZY955uvnLbWM46KdjdoBxoBtAfnB2sPUFdbGYpMaUMtjxuBTypgiNDCh2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K79nQUY5wrh4UB5GyJXK9AftgEgLGhxGk87EnyQXDbe5gRt34jco7P9BoFDfcVWj7CiKYyyzDiwA7tv3AzdecJJ",
  "key1": "2F6gxDhscttDz8QTVLY7BWu5cx7hA5r8QWNgjGzdhcN6JxJ7cmgpF8DGVQu19E4eTiSjSB4sPMoUcN1qAu5kBjvz",
  "key2": "NvoYNoB1YkVLQLXYiN3GW6CcrrdCg8693VdRNhfEfBKk5HjGQ2xmHdc6Yg8ZCVuAW4Z4n8qkYcw2R4sTaX6fxXW",
  "key3": "4q65xHFEk98EesW9bHjhKTKx9UZhPKmfEbQQLVCag9Go7gj34t4a4sPNmZ66C29pAm9fJM1h7T6zR7AvfgkwHfyP",
  "key4": "3wELEX84aaZREYejLPqvWDk6dsPBTZvSENyggQHt2MsxqmewSHys5LJsiZs3iJGVinbiMzMhGehACnH36TUMZTKE",
  "key5": "4TEthCxtPftfUwUkGNm1WFL4j3tkRbiiz8GEaJn36FP5fXFFC4A8Kcdt9bo9GjCisNwsEuRniuXFiHxN5BfvoUWi",
  "key6": "2n5fk8GpoBVBzbz7DDvLzURqNQmSgkgFL5ZJgqTRZyEQnUzNp89wyfs7LxzATAtPkwVdjgAZjmgqvQKVBiHC2bMk",
  "key7": "5crTUqU9LHGPeybFMF21anrJ5xkc9EeqZzmB922VWzpsW9KUnrijT9ogGWPTKsxe6jTsE1fm23cSGS4uNtrA9Fno",
  "key8": "3Hd6Hz5LSRJzynZ8ZSrqhhZqftzB7jjRd9y2Xpx4JzK5tJYuqtWdXBbJep4WGgkAqj8T9v6s72ArFBsDWDTQtpEv",
  "key9": "4SPEtkG9dGkgz7Qw2HHyBfamvJQL33WrKZTyTYErgPcVzfgEpsiRCziuvNQiLAJsWAygo7y3PFTrzucZnm7h618L",
  "key10": "HMe6uTGtpSnwxCbeX9EcqQndZbd1i6bP2nYDDGWU3ZRntrFiqjnoj6z4jK4ucbbiVCCgUmyAcgBgJTLhYF14Jwm",
  "key11": "3GWQWwM1vhQSqpqoUpW88xpirsSiGhLkCcVpRMWNDQ2dedFbNCeW7uA4KzYurU25dxdYoFMG63j6sUj8FvQRN1hg",
  "key12": "2ke1hZp3QsRx64TodccoWy9haUrDBs7w6pP1u25r46Z7RyjffdnsnzC167ZFR5akK6HLctQdwy38z5XkxEN2dX84",
  "key13": "g6S4A4a98pcRCUApuFyuxPv3RNqP38sfvc78aiwGfjR276rn3P93GHQZP5XqqJ98Jx4tb322EHoAe9Jtn9vc8p3",
  "key14": "4t2TRuSt3PPjTY4VaE666FC7osAqFp66bRHKQNhj1xyoehJMmg3sfLk7JtyHpX2Xji2vhe8MAaQUnGbCCrWfnjXJ",
  "key15": "3MNHtqgPy2P77XvnfYNWk2Zb24V6R2PN7VTmcebTKU32QERhA8npqodnCy7Mt4FtU9ZoP4uFW4NmBNR6iNxgUMTw",
  "key16": "MQesTHfCiZ7HfvEVuXo2gtS6fvoL6XWcDiNBWishMD1ZiA3iPb8uJtQ2J8brKEwrt4Ktd6yCKhez55umUfyBQXk",
  "key17": "2MqcdiFx3K6iNdSBmSHEnFETFTG39AMwHY2wpFtkpkyyhhQApcRL31VfESUt56Pw32U1WpFRLtvTAY2eX4GGdHif",
  "key18": "5o925kFJVX4Vr8gtDn8yCyY6UA8Mc7wJveXq66V4MyCGJYb2mNT6ZcunxbEGFvq5ZU8RN6xgyBioej3jr4G2G6hU",
  "key19": "3bzs2Ev5ce1YDYaidRxayyuWusCH9W7Ms7rXZwAxFv5bQ6LeYd6SJZ6uivr7UubD9wonJHAnchWzwvB5bktwGHcQ",
  "key20": "267JL5ZHCZ6rCY73TKdhe53WHy5w92aosroLbpsayCJWTiL7Be6QjhGUHCT2eSeD759kYgWkrbKaDbBmdvroUURr",
  "key21": "35ESDebGLXawdkYp3iVqiWL8hv5v1HCvW8eqevU2Q9YAwR3XhgY4QMLe5mLs9Tk83jQpHdXtjuG6e6pYcU31D1bg",
  "key22": "dBwX3mGJ5wL5RkA3WDC1vH9av6uiCFmgsRwGNdG3tW3fH3oCNEhrnKLoNyUqumPbgy5As5drLfsXWFidCjBHJ14",
  "key23": "2Su48LHq6Lzh9h3rDZPYCQW4sUmtzaFm3UX5ceH1TDhrct9jjCUJXtY9SK9mp7vdyoW72zJG2b2ftNwhJvBjfp75",
  "key24": "uSX9EFfBzZGtEjTYEqE1RyH7PCAtVSdz54xYDuTreeGCj9outmskSh7qvMUrPNcuYDDqfUoWh1bpbnBzXWzhGZ4",
  "key25": "3esxFj9qkiMkbYeZaFgvusTgG62Hb9xGMkkKpNaiRLU1etqpVnU9Zd9CSF54NNHepiSuJZzPY2budWdsppUm63HP",
  "key26": "4hkLZTKjmspN9WTEoJgKHJWMt7R6SFG7N9E6BS7W6vcdN4UvB9p61JiyrUDpGUY96yNQsDApqnsCDitFPgTjX3Pz",
  "key27": "5EJCir2UhNHDQacxqPL4kehcNMsxjFGMRKbu5cn7iRkdPrcSZip1EzRMysr4S2W2kWwLD9W52akk1jd55fAacxkP",
  "key28": "2Xmp2hAeW9PeayJ4N2uiTSLNQs1k1Xzd4bSpjteaKWsywEkRi2rB171JpfL8uq3ygkRft6t4uxQH5jkLomQWA7Ad",
  "key29": "2YpqsNM1vxHp1YF8d1qysJkF7WvZbAQnh7X1WM3eLih5MTBgE1pomt8mkxPinSjWnQufZLz4KDTwNxZ5j451aK2f",
  "key30": "Z4vdRoDqoBvsNz1QPm6UTsi8fb8fXyBoag3qCWQBEioUofDXnyZqh18NggRzGpoEB7mNBMNUHCK3c8gFK1T8Hmb",
  "key31": "44DUKRJ6Nskm78x6BpHnHKMSWk2eu6ijySvykEoJdreZKTdtRDzzzY6VFBE4VyS66gByispvkorf7KkfYxEToLEh",
  "key32": "4Xw2zAjV84q74zNZNLqVHHPBFY64iAw4Lu8zrUwcZ1tDXpmkXGVFfbsqQ6Pt3efWiJGFn329qSApmQHiNdcppMKK",
  "key33": "5c9aLBj65ADeSd4V2Lx1K2B5FQRnF1mzA3bSn9F9YDQmA9H7CzZ22wJdD9hVMEU8adCEd9VXdRLSYNPEfYZNPvxy",
  "key34": "5dpEsQMJLQBa72YSazYVQXkNTEyU9vrLZcYmAbztsLXSHkh9Xo5JKXj97aVVucCca9X7M8vFPLnrszB3WiYSiTDj",
  "key35": "4CCsmMx5u2SENvhWXEq2Tzzda7U4c1UTcUDEAWVAoxAn8RzUZuhdYL8mWct19iGoAkyTCAWkzEw6zoGeAfyga1sM"
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
