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
    "4a5ThRPqjttKkcZYJxXXhpRR8FbaGcHqR6uPrpcib2q9sDNDvs25ZtzR4YxJYaeycaBFCSmf1SNBZGDWVEW5jwB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5crRVkeza5fwxsaXEK1zEUYB2EYnMgcrBxk9uVH2gyBez8W1XZYVp3ZrdCXmbSbRSytAfRtyF4Ych25t6xVBsGqZ",
  "key1": "4X7dLqH2bkh6dfEAHFMonQjpvacxMExH99srrdq5Wgp9aEmXnMGbC2FLngPUnUP6MKPcwPZ9SpX7eNU2J5ejZmEx",
  "key2": "54joy11pYppiZjmxB13N8bhjzhtmNHjbPAJA62g2JGox8LkqGABoP2oeU8nxEKjsJH6hmb8WmQC6zxWAF5KHx2f8",
  "key3": "4orwceTrk3vS6BVtWStyGRAUje9r2F2veMAnsjca7e1LboknP41azZ4JjeRrdoKB4AP7GzmRSWpyFNfYVSsN4L36",
  "key4": "46EnunuyBbXEWUZe4jvg6w2GiAEJjKBQJR5f9BNnSKHhq14cY73DmwBn93qq4C3J9Pe59P1bhACdFt4VbUt5CK2z",
  "key5": "4wEn5WYbdGwvAFQURZE1RfpmUbcZNuaD7XygLCqEDum5A66KV7uKr7RwMhiZjoZVCBGmsSaasYr2mhrvPFzoQ44C",
  "key6": "5gmh83u94nnNvKKUVKqW4fSdSQNypQHK9ZvLcT1xxybEEFdqhsDh5R2vrqEM48VJvMM67JFrT4fV7aymcyKeyuKe",
  "key7": "4y1sdMTxDa5ssydzRpvL9L7cVCvWpanfd5KmpyoZ8eqEAq5dZ5AfNa7ErRkhCJ9nFP1AgYfzvhydiD65KsvYjjVT",
  "key8": "5FJ7Dv6pWumQ5ToZSBK1LFKhoXNsfbuDSYB2e2KfvEYbiWSdEX1NUQNL1bwHgV5YaSeKzd12Rzgr4u8UqfiE7jxx",
  "key9": "4E9UMh5dVrqyWhhq9Jv8691gcASAqruxJtrveB8FzCEmapG3AC7DKiXwDmpq59oqKqGpdpsSq6f9n3YZbi7CUW8W",
  "key10": "4XNdhUjTLGQ9pkTKJPuVT3YcyhgwHV2wqzg9MytzeHd2z2sozS4LixUcYb5pYXyHyxsNRegz4Wu2vGHQvJWMXjYp",
  "key11": "o3vFVG2ReQbjXgQc5PDr16t2MEXeQyYXoXzR6K1m3f85zs9qA6dQDskm6Yy5kqAQjve4zsA1aJo5LvSMSK3FDn3",
  "key12": "FToRWgGks5de5SzHBiJgufEWjcUfB7HPuYzXaMB8HvousUur8V2WXHqsbwVWY79a23PQC1HjTVfxVaT2HscqBx9",
  "key13": "4p9Yf8AG136UMso786UnZGMvepWEHVqs21E2ox2Gg2GVFvmFgkNVbVKAF3UoSz6NTkRSeRUcHk763xY2DmPFULm8",
  "key14": "3mVahGwFLAeDUQywgR4U8KkE7mfbUa7px8nTRoXRKJho4XVPZbcQYESHRfiGN1tjdTkE4khmR52GUKmzDxL11LVC",
  "key15": "AaDKnYmcbxacJ5QR4QXV49hYJXGWBM7x8cmRpGuDYDhqHTqpedAK3cAM1zjzjTQEjdrKVoaDAMHwuKDrkSbr277",
  "key16": "4qVbdyeXSQhueAKww79SdxA4YQFFP3jtYBtTcHruSBVqT5BkoPto84Md5VzKHcpa7Pq1tVDpury3WLQosRW16fNy",
  "key17": "4MGbf9WQL22H5JPK1ArvNf3G4sgUNCYCVo8H8zwQJrpJDDoxKZsHKVJa5TN64VVDSqHDU4vCXdovCKVM9wougrH4",
  "key18": "2V2rrGELsojvDN2Rxv4gJPn39buv9jdtGVumBRnSDk4Runskw2UmK3PKBPhPw2uBjeDa2DKWFRmgJ6NM2Cgy31cq",
  "key19": "42fQHgmk8CSaV83NfSMxihL6FQnMdcSGACb7butBKqcDrAYFDBdLdVyPwLtR74hS9kP4c2MzQXFMyktxYtpxLpi8",
  "key20": "5JyQEVzZuWLNXrdpGoaPbqJZw8CYAnfY8z4C2J9chFfNytaoSKPoJu7q41tQ9MHPgBJtP4c7gBZnaa3jNUhTvEpd",
  "key21": "56XorWEWQB6v9oArjLWCmp566sRY4HiSWM23QRLwAhyabHq95Z1JJA3uifyq6xphn9KE3P7M2ARTiE3vETFHXfy",
  "key22": "5xQ6vFHf4PrSJnaadRhcYVSmcDJhGrCnymp1Gf4AQAHxpRCfYkAmV8mMNnbbFFYaUkJ4akbjq5r2GdzYU7uQnoP",
  "key23": "5eD3QzRHDZK9bCTeHjJMcJa6S5jpRzrJM6wnPw7fdehTSpGLVe7pZAGE5gGeXWxrUzptzCpfQenvCAxzVvvzMGYT",
  "key24": "5YRRw6iQ3dkdv4YMya3YRRoVietmy4E216KFFQwbZfdVetjef5DpmwjJjxxGnE2T17uPfQjSayPuZaM3w8mLW5pj",
  "key25": "3Y2LVWZGZSzCFK6E4rtLwqESQocnfWe4NDk2xAA7gZBwS7TLnGfZt6BkiwP56yAcDsuxi6d2CB5AWapbvu2CaMUA",
  "key26": "sLV4H33EzBcahypqvHNkVNxLgs8UMRs5QhFRJywUCTYAuM9AmrWAzyohX6RsbLVP4o8MahdEyJESVdQ6f9mvJZz",
  "key27": "VYEN39eiBkjt7LjJuNo14TwAM5y4yYrUsXoxGJ3DsMD8eQiEtAd6PfWLdvVdeBqt9y7s2vMZFvXBAzVeDHFrKQ6",
  "key28": "2R9RT2KVms8N1xgXTJ2kxrwVtsYmjuff9fkzqCmhRigyJerrqGVfFqxCExN3cvBCCNFbLtiYRxrVncho8Z6Apvhx",
  "key29": "4KQqzB7m2MdfbThVMw7aQRaswfS3WdiCA9hmV1JTR6D1nUM9nkfPu4QcVovpXGex9sdCmYsDma4Q3u4mJ8gXBHHr",
  "key30": "2yRiL2TXc2L2SWRuZyFP277ScZupbxFTukPLeakwhdrqNYqFCbd5KS8eEFyTiFzYSuvFxfQaXr4p9Y2CZ9iE8wJc",
  "key31": "4SuUPhtiUp9aeey1SDhmbRWrt3y81gDE63ddx6nYEemYAJ3KYfy3PNbuHT7ZP8xVjP93jjpNxFCYA39Jos3Pr5cQ",
  "key32": "2waRq7zbw2tnfkkDKEDXSJUNP4uuAuWwCvYBDSPg2upUsj7xKueNpw26gkfHQXwmnd1bvyZa7JoowcZFuB4WAkkh",
  "key33": "Vqh53FMWi4V5jRKBkgKSfo1CRrt7qaef4E1ttJurC7kj9M1oSSP3Smf3hHmyKgWUd9TUMQwstPokTzd4UrwbXbi",
  "key34": "5XBUxqEMcUX4SSq1uMBrrZ9RxCpPYuLyyhQ5c4KjkRXiqcVgozgFMU4MDDvYbFgeu6zDzzFQLpGcZVmrumZrVuR1",
  "key35": "2GtTvqNuiL8mPHu6eoQszWhLjCnfdv5kd7Uug4rd89AefUf6T7FVL6idCPjvjdqjFCRB2CgbUSwGfUJhrScTzp8Z",
  "key36": "nnPW8EqUEkutu9uQmHQRBvPnPjkxR6jsZ6c4fqt5rmZ6oio5PSZgrDgbw1Cgnk8fHJpeSW7MZazwC95JmcVazZ1",
  "key37": "2MfeZR5GW3BNJ4os8x6mzPjyEjnJ4LAvFo99efeykvqVCtpawSxUGj9VtBxmeKh2FLqFhYxGR74tqmwQd3mGWgg4",
  "key38": "TZF1zm4YWBdJ9Hdibxov1MTpn1pcVcxXDtVCkGo8aJHMVhwhDbLPrCbgZtTddRu8L2yQYcS3tYRaBeMutLsrXjp",
  "key39": "3MAC15Mxp9rFE3pgnodvPps3Jn3tkMjrT14aZjrZEV7iRQPpvVwpWWLSNuCP9hjiZYeRxHuHkVQGAaL2dvaAYdq7",
  "key40": "31dUrCvowLEuNJh8d8g5wCPWs66QgZLrFmcqkXrTFEN2x5AfFEQGXJpPju1owq3EGDNc69PxWccpC7VotpnwdPev",
  "key41": "4yET4QmBmtimVroU8Et155VUTY9RpzQCcrSrDXLPSjRs9d9WpSuWdG4dan28X7q9wtMY3Bu2LZMJhnAH7WNBZ5mQ",
  "key42": "eQtZvXUKBV5apPhA9pcZMttwBzAyvRFicdUEVkMq1FQp4HSSurXMBWQT6PZr89Pe67zW6eAogkCm9xgBGEFjvpd"
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
