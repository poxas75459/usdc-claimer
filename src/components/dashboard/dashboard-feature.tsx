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
    "371Lkmv39Yc7f5uJQtXDPTxnFmznVVRswViYme4LtMPXh61Kz8LHZHDqbpe5mU6oEAB6g3EcFKs5hRJc5qHfqsuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cq4QgtRoYv4TjiVsYnvqDMuZq3BYUVDQGB37HsX7y9xhHPv4cTKXCd8aCmUJJBADNa95pkAVhPrzYHoRFuJFdh7",
  "key1": "5wWvrrBkor5GU2GLDVnNghWLxiX4B4mk3sNpnkKfjond9beyftwzaAYHJMpR6jSdHUYXcVNTyVtTT7B7CUdSWXny",
  "key2": "3qFtiUgzntJz67PuhTPLvqo7ByNppQseCE5ADPTzPyY5m3RtKRKgLUH7Pt4XVMwpvgVxsq98wwzr4SFX433Vuhz7",
  "key3": "2SEBmT3fLyEY4MZ43Ji18pQxkbGWss1J8YZ9LYfDHDWB8zFxSzzVZB98UsGHeaPBvR35LD7X3WHPoUjPgFTfzFx4",
  "key4": "i6eJowZiovmZND6A8AbZVDeTb1KbYosCD3jb3PY2XAQw3c5ig8dkDqEBFycD76XDdjSGuqejsAvVHLK3ZMzoLnq",
  "key5": "2ydwL9vQnnuUvsEKrGFXEhJBN5BMdz424eY4r9o4srXn7Ap5Bah5Hf8fhWXJmFAbwb3QiMVhyVcmhRqDihkAZ1AP",
  "key6": "4c9BurDbfjRRT337A5Vje9nsxYW3JCJqbm9me6SfLpZgdV3UakbL7WWmk4V4FJELaDcgiBHzMJv94r5yWNE5ZmHH",
  "key7": "2K2ph9sEmLa6fSMbqcnV8e6meRTAcisaBJvJuDJ7JdfTVQ4ozwAMPSewFtSncCLCMK1323FSQzRcMH7eCCChwUr9",
  "key8": "3Epdo9GZfV1BV3qPeRyWtMnaTroFmVXs1zXgE1HARxKdFvcPAuRunXhY6M1j5sCm8fy2Pk2txNf5iV4BTGeJbSHL",
  "key9": "4jNk1zjBQCraAvVRQk3wPs6Vh7uBB5GnfvLoZ76hYUPhr3CmMY5bWj6VUXjKHGeRB8Qx6y99PCfsgrk3J1QxbYyW",
  "key10": "4fXCzYkkpcTqzMZH2R659GpmNdq4NSwFXexxUXfguZK7ahZUCH2acHagPtxSFMiK3UywFvYc3gvHv8aPwEq19AH2",
  "key11": "3mbbqC3yJ14yDRB4ZN9akp2MguEiYzdJfoZD63vbCtu5p4JMxHxxEBEfffRTno3g9EHCFbB9BRuEyDzToWijq4Nj",
  "key12": "3MVg12kRDU4AD7jrwYjMqyzpWpyfhRzv76oSK1ksfXTaByjrHUzR4CZhajPsbb2Z4U8it2cDgsY75k8fpTt94DQJ",
  "key13": "5RMhjgHdEtbYVHXwWMwfFd3usZe8PMNqETS4thA1UeBgaN9dtsnmFpv2wkAVGnup9YbpzjNVVx2YpEBojT4pGXVP",
  "key14": "2D8NY7tEbA9cvK25pYtp4Q7vTuKzczvuMbBcJ96JgLsR72mpzuKmQezi3Axi6ZezfF7Hfv1D1JEgGN8s8wBAZfbc",
  "key15": "4zoWU4aBtcE5w3Luqot58HUamSpPJdLZWVdm9uLK8Hj2R5krQzj7tNUocAHq3zG7qgPDV6ovRontaSsN3hDdK6Cx",
  "key16": "KgbECfKUmVsakA8LJwv3d8cbfpCYKDXreLnTSpvbfCekC5JiEBC9EbtptTt2XBnEHzwVctCvBB2cKyrjs7sN8qy",
  "key17": "5Z5FuSRuVmR4sktcER9gUafzCqm1YBt87K3wgVJo7XMHVSrgjypuLFZftMjFm643DDVZxkubkvucLpy8mZrNKbUd",
  "key18": "5VQpvbhnVLyp1ap4c6in6aKtFgF92Sm6vwKqu33S5ZKcQVZz2eqQ3QoKBhTrUx84gvnkn5QxzUzcX1EAcsH91CXv",
  "key19": "NgLpuANAPRsgS2h2vcXLPpTpsNNkG2msCqbHb2K5ih9VZSTmk7NMJcnhLHH7YAJTSbVTYaKJVpkkfohDmHZqZYb",
  "key20": "5kQKifVkoHcnNTEZEmB5u8aAY6823K5aGLfVkJE8MD4mvYNx3R8pfeViR9YUhvzmftz8xZoAAVRnysamunkHowhm",
  "key21": "4TvpwmKBGZeFfQrNo4ygLayePPjTvLNpSsQ1xatJG1daf3JmskUz5Nn9xZKzJhLXSXsd7Fn4VNNsFaBYcLRQPVTu",
  "key22": "4Gxn29QeuGv6PGRfRfasGafnvNBfgACoM8AvVVmGTn1abETLdme74hf3d2uq3VU2N2zwHrkdqgxHAP7dZ41ZziED",
  "key23": "38gnHh6ZhnxEk26rXm7c6jqUdbQvTR9Dz3Zi4Fyn136ix75n8cytvtjk3PAEuwaritrCnXQPUqpCnifmYYZJBfdF",
  "key24": "65gCEAzeQvo6YrMwy1SWr9SRM6y449YWbUh8eyQnjAWwhEBQQgoxBCTPmTFaMBaCuj6eDD486eB3Y5cF6rWjx6Gx",
  "key25": "Yy9ZozNjhdp9xvkh2x4s3V49D8gCSHNXZEpcP7NFDMbukfdpd9oiQqcNQyfGoxrKcjUXvyPfM9vbGm58JdGSsHf",
  "key26": "38GsyVGZxu7sPSXCN3PytLBC4TvM3dKgikvN5hzzSdSbRkRVUDGSS6XGSMZhsByFJWNrU4mZCHg81zxDa46wNfna",
  "key27": "3DCuCkmM5g8CkJGymnXd3PAidMinuA8h3vB7q1G2z5M6XoxVV4Va8JcMHKp97yCotyTeMP4xineZDiwFxbTfvw9n",
  "key28": "4hrqgcxsqGfP3xGN7RsFuMgZ3oCkPYKc2UsGduRgzs5kP7sSRHJr3J2opHTMr4PS27moPAfqxBcrGPKvk29zfi1f",
  "key29": "yJTKUHanxX99SwTzq3fgJ89PcY35prBpGZW6jrPukyvqUwxuipEjY56RZYv2fsUCT2sRqf3p2hcSwAgm4gKz5NF",
  "key30": "42EbAdsQER5ynX3NK4fYPpX3JC29rRiDeqr4jmpYB7NuF2eVWXdtjGyt8s5TxRxdE19neCyEEfmY9AzYQQMDRPW3",
  "key31": "619eWT7dKAbrzMRUd7wD82ZJwiGcJZkR6cBWXwFqKddhC9meXSMkiiPpnpsi8qdYmhkQXnK6hwzr5p6KV5JQGRGJ",
  "key32": "5AujPc9yuYckWE46eW6VTqKhULA2biFHvsx8sweDjE5qnPsUdDGwHVtYeziEoBafoEYFFnPo4nfx5Wz7ioNw1YSr",
  "key33": "3znyG45HnPyiWXpu2Phdyw47FrdJeZkgUXn6tUM1EyCg2UCU6Ur1xWQfA26voA6oVZkd8t1UiXHJsYGSLwbbGEv2",
  "key34": "ibu25UBK4abHyxxsiRXJtWS8Ac5YbpqF88QxmyhMKj7YVWzehmaTjd41N9mpL4vrsSrvyVd45akyhK1aQrACQzn",
  "key35": "jjbQwoC1bn4x8MtwQ9iu8q7GSodjyZyfRWbPm5LCiySxiWEzrK8rGeBxfDyw7VVPcuaXvJK3LAdZwYAusKYwvuH",
  "key36": "4afo6N5QfhSsbcDHH7MpG6BwLPgq3Z83usWHnq2a4kF3k7aUqSvwNYjyDnMxbMtrh5nGBY95JXr4pj8JFEBgzqUq",
  "key37": "5WzWUy4ynsBaPoP5GCMxcqKuryyHvLihkREMSNEqQJf8X5mKgtGaxXpQ9HqYgVyZmfMEyBqAyzSowoGTikXY51ah"
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
