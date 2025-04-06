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
    "7v5tR3zTUdoqh9ZjRT8vnJLNo4pg4Ld6EUReuwh5rETjHZuJ2cnSFKXiffRT6NRTVor3WCP6RCiCKQJwj1xmjJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MyTKimPcno7vAMfxSKrFJgJdstiUAJ15VMzsbdatERpc2zvsMT3xtyejUHKowNPfdqhBsD5Jg1XAajnxRbHfEDE",
  "key1": "2fpsyVXryMugSG53wBQ9r6FDrisNnEG8HLDQFK3D9N9QNy5gVTYvEvUwwbRdQnEDT6Y6CaYwSXeMmn5BA8dhatni",
  "key2": "5LzyepKiUYGmHFkMJhyNv42zEUnkXCRs6Js3Fyaox9jCPDZ5tjHWy4DLyuwzS9waoUmF9AL1ishMTcUhFDwdrVv8",
  "key3": "NbJYhH1XCCSjQP3fhKXeckvwj7opj2uBBTbFRor3mab8HEBh9GrG7KZfUCskUxJebD1QYpeML9zDfZCwZ9SLP6G",
  "key4": "5CbVx7uhunLJh2WqvvYaZKxxRGc4s57GPxLjyRYQ972xVewrcxnCARy5QRSS2vbZoZTmufNh3vzA7Yg1SfRmQweg",
  "key5": "2zDi7nj9NNKGppUeNkYwhpgztTnf92AE6B5Q7x64YueYwAqSQyBdqEoqxrHjwEnhd8ESrVC8ru2usqtV7X7RjAcD",
  "key6": "4C2MDtANRcFo2ykybQQdxMwAvT8BXTAmxcJG4uf3QGF678nstfZeFm2JNLX8NbLcvHiRPcaKEdm4UnE3PFt5wsmX",
  "key7": "2wwiRMpHnRPFtgaW7vh5221vHMoGUDxQMvK6n7F7NovUXrv75TaV1uWN6cxZtJpsWtjxpx7k9cd6GbN3CUPK4LTK",
  "key8": "3gbhTPtihpY2jn3ScgYtzozHG6zTtrmKm2hvnuEuDi2WuA6PojZkAgqrqBGEGDTo3jwgsWMGyepxHRfecMXUxX65",
  "key9": "3keqtK5TY6M8MUSYKtePWsysMcbcHDSCJBTs5x4TbUzgaFbwYucp2BqXZppSqGBRJQMrdCT39qoyBPndmtkGpgxz",
  "key10": "49LAR9YPi2uyYSZ8iJNMx7mX9SeUuApKF4qiBJZj3FWdFjwdcyVhqx7Dupz82MgfYSHyc5jJxCk1WAN3L5UG3VoR",
  "key11": "3noYuUuQ54RpZN435isMCfaUqejEd4KwmKjoDUXxWKKeXyjvxVNhGgGnvhEYbozCyDvgNSCo9RoM8QxyX8XmuNzP",
  "key12": "K5nsY37tu8nWtd6ERKjSfnHapQeuQB5b16invSVRngJqx82vLRGCWtanPLMqF6FUTj4FxxpU5hokMH3dqUjc9qu",
  "key13": "4hJ3b2tT9TDQ16G2LS2c7Qm7y9ZX1vxmjD865JKBKDhdaagUwdK5xNfCsm29jLi4oWhqTuDoz6y32GnK792nFNjm",
  "key14": "46uEZ3wKgnKxRNwHwCQ28fE2sBBWMqVvQnAjrJapKedeCrqW1HBiRWqEqaDtrwHM4PH3Qf8bTNogoW5TZPua3Xxg",
  "key15": "2ph7hdSSjsoLBBAHMvkgwq7obydsAqhsJ4sMU7992uCchfyDCvRbJRP72c1pNSKo8Xbo4Vzci3mKsjQQwVxu6wWr",
  "key16": "3exN5GTiv6ont6kewGtKHaEYL5viA43vhB9GmJro9F1fYwp5trtmMfee2sS6kkYaKWfBzyzNKG1XXWu1AwdAcYu4",
  "key17": "5uNkKTK5RdKv3UnTzfopbCfghgjwVyXwuVHsVta3zZWson6zFsGGd4KGqY3ficwFr48tXg2C8mWmUTZA8tJH2vQj",
  "key18": "5EbESYCPYwrmEpG1gp2fboMfmR6WsFcrZkH5Z1DGS1k6YtWeWWnQcsaDupkeSVkXQUQY6CUTDqmpFhC1MzbWu7Si",
  "key19": "WDrDej9XGuszeRN5sKdcPYQnJUcXGT62AS2z9pyZ9gZYS7bsQZSbX6PUb63iUoXJEZkShitdtuF2A3gTPiSLt2y",
  "key20": "2BCFJyYAMiYzVGmFQkonDsakyaCcMxyxECZtPjZ83LHRpEobsFrgGgQRxDnjQucnrgNyAyMbqRuBx6QSczt5G35A",
  "key21": "jLLBFBJjVa16yFSsBPmoyEPoxSbDKbY3dFbT7GMqJA3v8MJEZBfc6tRKyxb7sg6p4uvin4K2HMFZxwfx5yPEWfM",
  "key22": "45QXFBpu44qC3s2ASpe5CaEaz6d7kK6xiKL3mUBCWcM41AaL6GtPbSLryNFRJXnBuaru5CrVGQj5Scdhzj63Eopf",
  "key23": "4cdKRp5VQMu3wDUrGguVijNHT3DwRtFEBCdV5BybTp4XJXokdzVMQh8LAxaDiBJ1edjRfeFyreX89NoLzwMkfNwX",
  "key24": "37GeGDJo1VTQ91mopDjk7wcA8Qt7rQ3q5DgmH9DmGJihjAqxx2PKTVwp5xQTiF3zd6wQK2G8zsesh5bpVjCsQKSD",
  "key25": "4fst24w6BiQFXjSoaWThMBfJU74xsy8uE3RXGT2X61Tf3uvR2nU9sto8PHa9bnhQFn8rYmGU9aDPNqAV4VJSgcs9",
  "key26": "5oT37BuG429SXinQCPUhrS7CMW38eLhgSNZX7fSajD6NfAmq2ehG2m2DiNXCZTtsCpRDgsxjYUK14uNJx4H7Tmyh",
  "key27": "3CX1M9usjacCnTWCX6FmdxRKNs6yuLc8HpKsd7f9aGPLZivhY4a91JnK183fGTVRxANgW8aNu1B79JB8ijkxTmVp",
  "key28": "5zbk9CfkKUHwGMNAhurghoR1dV86wiuDVYKUBgiFAsP8vsTgjGu95peeU3pFJdHy6okKDNgFj2JQy2FFqxSxWr1D",
  "key29": "54FmwtAYEZKkStUU7B8HFSkKsiBfSZaEzRN8yRXV3EkYnwqJz9BJzHuokd8E6Sp27aVYQ8TNcJGdAtqXzi95gopX",
  "key30": "47dETaLogbCdzJKVj3y9tbhLPyvrW941jPhKHLgfBBaxx3xq9ZJsvPVsjRpvTyd3Qg9KHvPrdui8cMqdx2Lxhjnm",
  "key31": "aSbbwUroMf988kAYMnZU4vg9A146nhyCxArFoQU7nq3Yf2L1A5bVzdwJwb4s6zwhHrzAPAsiPep35ifqnDDDqax",
  "key32": "5nqHGDfdG6s2713G6fu4mS9DLDnAhVdf12v7qAm1cr2LfoXUnBgUqeh59SNKt9poEiYe4PMz8fYQ1LU7r3ruaNJo",
  "key33": "4fUxR8u3otnAU8X7uN5uiZmQjiptEiaPd4FdsaHrdRuos6ajxzxSn75AoHRbLDXH3StnS6kTZ7QC5wjYhA4ns32W",
  "key34": "4KYn156KJafVkw9XeKAVfs8QyirpZVPvY3cLv3Pw9hgXwjD833adgaj2T4inBXjmQN5AS8w8wEm1hPpnihxbJNbw",
  "key35": "38fnVqim4RbaWhSguZszGnWxW9jXzF9scbDhTWW5gC3LSnhkKBxti6SERFUvErxivvRXSHD4uRzckkvoE9dFMsGt",
  "key36": "2NPi1HtfUvUFPTSLTsAMuxUZh5om44Lr2QnpNLW119ZsGES4QSps1Q2Aq2XE9mbXdQnvAjFGeVNLSeEwFx3qKUB3"
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
