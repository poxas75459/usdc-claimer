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
    "4uq4XpHtVZNWBan71epi7ZcC2o1TRPeVtFwQ2WdpaFgERFSChkgB8GwKkNi2dKM96NrpmcgeTA2PMsSbrcssMvFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KrkUnk9Jb9WzFahKisxGzHARHCMvf8hueNXHakdiSUmFWYcj9ktkKa8ZByY1mLivBukc4KVAUNPwZdiMTJASkZk",
  "key1": "PkvVXQghCM6SLyTB84bmnm6Lci4oMGudXE12YJcf7mu2DpGEimeRwMp7P5oDAp6oF6hiQ3Kmjw4g76SyfzQ2knL",
  "key2": "5jRniX34NLKbn8JKAVwfzx3ZDNSHASAYZFNzsxPAorYetPEoyXi4NBguPS8Nq1ZNL8ao8dsYgLmxFwiiMvTsDN2R",
  "key3": "25rkYnUWH5WUGGsLVtE9u6iMJbvLLUXfJQLD8VFYHc36FoYYRRDDQ54Qv876feEApFVrZZaQ9rVaLQ8o6rGAKp3D",
  "key4": "2tP2y5EpENWfLqKqSkTn9LmXFwFYecfuNcUUTWYEfsnKopRgME74BRvYn6jCAcV6mjQXDzw9yYFwKkoQ2ndFShSJ",
  "key5": "4XpZs2WjFtf2No59NJn1u14uJ5HbxVP2rvB5djzxmMZdQ3v9osgWvH5voJ1CQJyJLxKCfTHQqUdyD3coY6Bjirzm",
  "key6": "4ZQj4PdzGJjVgikAtY7LXdMqZneT2CqBPHhxEASVyMVfNZjbtwL8mCbPwfvhCzg5d9HyD5zvf8vDomPUnrA1jFd4",
  "key7": "hSXYBC5mu1kyxkGV1zzkinQsLexKyGkNYkAkLaLfrykNmM1eX4XCBxzbcZ1iw3KmvqtXpowEeByWKbLxUKcVhLY",
  "key8": "4mR8rPSEWt4BGP3paqULA6NLbz9BxFjdbKquWeqqrkqgRbArh4vNPNt7B7ZQWJm8bUUgS2zAVppmQgTRuNL6CsN",
  "key9": "5KaaK5UsCwWf5sJfdunvZuCNLn53sS2oB1735VWbVcpkUu28wKKB2tddnW34WJfq3j8TMMHE42qD8eGwuEfwmiVG",
  "key10": "4hHfdsouuPpTpK3aWcvj3tKWZkPZqeC1TNJGvFJRj95wdcouWYCMgsMLbRfXRoxD7tJkRv67pUEKjXqdLpPqFCEf",
  "key11": "2DMMTseiSFRCevfrxk4c9qHEVR5iMpduEj78aT9tM7Y4nJvfx7C3zHvx9YEF96nzx5MXvjD3YerobZYv8WM6Z11D",
  "key12": "4xaDre51vJVBicxY8iEFHsiHDdaFApshDMitpAepGfYMxAEiW7zoMYDZra5ZHnecb2r4KmgV5hLYC9GGfrUP5Lri",
  "key13": "cvG7U5JE7RPr4L4F9avXyAYUEykvW41jv6fmERKA3dkd12u1kwFH2Li85a4BSLckZNEKtZDcp3X3okBii23dVko",
  "key14": "K7FqkrUmYaQQH3vCCjxMtK7BGdSjSisHjY1tPRZuvXEnritTPcQVqwmzsyvEUFLv27yYL2UM8M4fRpCpLXmJhJh",
  "key15": "3aJgh6Hc4WdEnY9H2sqipW2YhWmQSDvBoUVubuQN59xwQ3oDsNeSTcwTrDzoYGAZqdrm5hdcdG9EpQyFjKzRDv8Q",
  "key16": "5u22cBHHxqfetdWS86cyQXW3fsUaGTkZ36fKNys4poEvoUZ46FkULL9q6SDiCgqQd16brvmVKxoLbAyXvwdT9BQu",
  "key17": "2WnvkDxu1s2HsTR7KrSyyq8wPdLaWLQHBbGuKeMBPQ8EmcSjxHaLbodiBsiDmnycSuAZpnqRx3gaKikWqjiqksDN",
  "key18": "2S8Ev7VTrRG5zgrRgSXCzWk66EnxQtGfzBwTk6abz3eKTcYu1QHujmZnbjeANcWCDypfWHvEENuUMij7qyezvRn1",
  "key19": "2QDQX5moiVG9cUzbkPu1rzG6wcZsiTnoop26ZMWJNES6h4N2CRCdyHRahPMEkJDz7K51wK5Scp8wrZUvPPaffp4g",
  "key20": "3Du9JaSCkQUejqFw4rv2egKhQ9UuC5JA6JFGhhZrpRRAfR57a8i5jAUZ4xzopPhjq97Wp934M8w3U7TBN1sLk7Hw",
  "key21": "2ChZtdDHyhWqjL7ZAaA7FXvt7zosTLgwzh5QLVZY61PYAFSEBwYJpd32dm9h5MSnT1ahqawCpfHozU5aLXrWQxi3",
  "key22": "4xPW7LaKiHAHxkqLMJe4K4qoAqaGodYZQShHkvAcvChoD67ymEpSz7HoH1Cr2o3BZ3Ga9FvcYeX56RUBqaSkRt59",
  "key23": "3SKNuva66DLnq6DCHTmbUVtYD4yY8ZgyyhmznCVcvYXLcBgTyU8WYfxEGbfk1ZZptuCvozDu8baGDJ7zFGc5JoHz",
  "key24": "5Zwg62VeeWSLjy5F9F3Hzu4sfdhQxhMKUmmKUQje86DpbYw1zk5pe48Y9epdy4vd5MaigbVFbNaoqPpmxQBWKwiN",
  "key25": "3jRZZ4nwi8tSSgX4bv7W5tQQmDctPvsVsmT7T2Umfc92K6jPFmiRKmhqNnPBpQhd5qwQQ2pLs8bK1CoSeHyUWgJ9",
  "key26": "2X5JdebnfdyvfGLiV8Kcn4BJJZkgK18SM2eLTHwNmP1hpbE7CRyU9BwCuYkbboheDchhGEpPevGKYQFRw2rk6ThS",
  "key27": "5vL7cqgLvhfuqqkqU4LXgUsiMSWSTWyrAzaJrWyrj77sGhyhN5VivbvKrzySHSKjYAwRMhnb5kfj6a6b95KNuChm",
  "key28": "4uoosHW5QMSKMN7byJNFscN8BJE4YufSmrMx3FQY5xWhF8prUBQgu9oBCJ1gkRmPBgPHAFZSV4UyJJahQAjKn1AB",
  "key29": "3FYnt61pMFEd6awJnmx4j39ykgb5v1DXKCQHN2F65fVG6oK2ELsgRcUGpwL9jrMB5sCxZg1DT5TAuKLkJ2NUfbAG",
  "key30": "2ePARpVXhjqAk2n1mA6RERwkRfi4i1mEnDLiGJzzqqP1LNYHTraB6KAZojXsYdWygiydDkqRM5Nshcm3KwrkjcrU",
  "key31": "3tNTfsK2J9pzH7rKmPvdYr8VNx3AvoHrQZEsjA7XsdwWE9SMKHCtfD2qaRPAt8ELhJYNy2nENwLNUpywzsHuxeYM",
  "key32": "2rGJnghjPVaPuYSDzkkXHYSL4j8AFSHDHXHLYz74yapPUDkHLf8Q33XkNRNHrYHQvrLkmf4eCKVP9W8sknTAbrmY",
  "key33": "MhxkMzkBcYzqt9cSdbkZGZcYdDFmSb23zD6GMKw9ELGmtcQETocM6SKLxLidAP6G5vDjuY1yoSMqp4DxzVE3T7s"
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
