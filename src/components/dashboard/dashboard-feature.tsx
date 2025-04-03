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
    "2nnJriyRYrJJRgZuAEDyHsf9TZ96tXEb4HSwa73UvitjWrSQQb6kUNmR935squJEf1qYXDoSFf7mjqpmYNUufCcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gtf2Nv3QmfghraoWFuuSrGWJr8ehM418FWuN64z28Da9Qd2cbR3TkuJJyb9yxMT9qLSkxc5eKtjEjceAp5v5iUF",
  "key1": "27RECaeAEpu4WMRxSaph7EP2kU5akD6HE3C7BZ9yaPVCiKHb42wYhPPH9nnpybnj4L82dGfNgNcEupBAcxBsC2dK",
  "key2": "FQJk1pN27W7e96kPxV2YWo5fU9gB1WHofrMGffr7DY6DN8Rs7W22LDz7JHX4gEiKEY2EfUCQXpN6AY6CPc5Dh9c",
  "key3": "2K3eAD4TRnPKwES7WiEAFBRwhSiYrN24qy7RUyyxB2a7w3Bv8xb4WqxSbm5Jvkv9SXgXoW84zkWY3F5xtkuw5gw6",
  "key4": "5SEgjwQSuZSDfX5vWZd2FfPp19sKyQVbWEun893QuWdyz9VkszMdpqnQwmuJXQCmWjxM3BfVsvcEvXDaLZMKLWue",
  "key5": "39B7aJh56eqoA74a5DmH3GTA6vCYFJa928bFkZkvKeiNJyVqwK2KzpSMzrPpsZAoCs6E384uMT7QcxswVKDw5BMo",
  "key6": "bJJH8hsj4gDXWZxbAAqXzNYjdBoBZXk3vAYAhQhB8mkFmxZGmyo4oAPmSEvuQfkyiBoFothkr1dwff98qWnEhDV",
  "key7": "fA39Mv3PPV53EWx9WNJPJFncMWKb7jUHCvarB8LZwk46UoB7pcrqN4ftAdnjNaKzsdLL9EBWpPU3dQMVeCqcoej",
  "key8": "2LxiqwWS9ge2gLjTtWgig8KKiqJb2K2uN9VsCH3gTmGRCwMq2PE8VL4cSkDhjqdXkdxMknEGvL8EcbbABaJVpTxe",
  "key9": "5RJXMprMtCFyuLsgsXHrXAjHZ5hianMGAwSeg5Rnvg1BtL7vrRMJbBHBcsgoxHojGviHBZ8AS31GjSeDmX7ACxdn",
  "key10": "2hwiMk1anqziDLhCA5YJ33HDDJTNd2Eq3r59gsRmHshqiGdJhnpzV7rvYg7Eg7iXcioFqSs3AamvDtT534jT1g2N",
  "key11": "5SYfcmnxKGBo2PsaMGwTPZX59pAyp27pKKfsTar4VWFwEoVT28LG5rJ6nL42GZz1aEfZgdjtgFraVeujmrSLRcaL",
  "key12": "2NeU5bQKmgFJdbjaVcPLLbRrg4z1NFZEcHM7vbcmSLoADNdCuh6JBPivsFpK7K7smaThETBwxyWzqzHKbrUbuPac",
  "key13": "4s6QKxwNErFR2h4XmBf6mRCxbeUTLW2HZK1AgtQX62xdu8C3Xyx92DciMU6kA1SAUFVGr2zCbgXwKkKzaqwSatoq",
  "key14": "2CYFB1wr1q82Ryxk12zCwvDxqG96QjEfVbJ2cLxVukWPvGBLcMD4pTwtLxo6LcCVyJqGbGxf1M6RtuZAZ4p1mevZ",
  "key15": "3Ps1kswozvqWZJYAcCj2MyDssNMxBEDjJDev2Q2CByhzZthmoHDqqRSLvMxA1o5RNfuUrUeHLfXsKYdWYg5758bQ",
  "key16": "4wGbsNP3sFAiyUPBk85VTtucUdPB8UDQHP4Y1F7UoWeGCtc98TUJtk5saqZKKap6HP8jiYzcrrYh5NgSn1J8ZTxo",
  "key17": "3WPmumsz6NJzUc2JXHEZ34UymbBCrknDrKX46K3CKSVxUUwgnQVbBdgyfXJ3hRdp6xNau61QaPhmemAGfDYkd2Y1",
  "key18": "5yqfSWMXK3hCUH3RAZxXAyTSF3F6592oYP4XBSFacBndk3EV8XDwYkgBhpj26fTz1KiS8z3iXjpyCu7z1YpwRm9J",
  "key19": "2haxhdHozttU5bammvTBqENWrnw8JW9CkNcMiMUUTwQm65mJWMK6aPRFokcZbDr9v7pysACqWZpm81ZpnRSARjs4",
  "key20": "22DszecMp8ckX1ZHW288tUAhPbQHYz9YZUCuRjW5KrfRCsiW9P5ewxPra24RHi6QLsKUB4yTujudG6xwxRS1DGBv",
  "key21": "BRy5bDb1zN7ajrvpj9zcWazdTjfyp4AExQy9chBsyUdcPJQuQVkLzWpB8rhrY7qJ55pa81t68iP7MSUPNZafqPH",
  "key22": "5Mtj16X9Uxsahqa77Nr8BPWe2aK6Q86Gj9bEtcFoGxWAye2Wm5aydDQNnPyym8YZuPPtGZtgL4XH7wF3x897PgQF",
  "key23": "4RbAVhZw8euJQqstbwqdvwbxCdnc6axHojaM7fMKnEj5pTGoDxb4ShRy3EePyftMZbkbPP2AETuwayXAR6CZrg1T",
  "key24": "4VpMyQ6LHm4Z5JRLdBuThUpcXQGSU4eLyQdTJJSPhQjP6c6xfVQ6Xee7fEv3GPdAQwGwqNzDpoDiJRb5dci9ZJX9",
  "key25": "vBL5WLUBoRDYdoAZRijwJM4bXCLrBqw6fP5EULr4rhr3DHUwgfBS3fgj479dCrdmrCmhszPwbaMibe5mducX9U2",
  "key26": "46yu3xT7CcWnGzWBMhBBEgenc8Jp3ZM8yMjeLe51gGqcBMRhoAgDnsHpAHKJj7uMocZP7ZGHUpjdLvdgHV4SsHPG",
  "key27": "5t8PzuFGuJiRHrZe6TyPfPtwjv4uHHD96htd5T5bhdkXQqyaxGhBzcTMZjofeEwnUmAmzcrUhJEE1w2Mr6ujN6nY",
  "key28": "5zzTZeZgBx6Kd4iuvMWQo6ktnJNC3RfxQtFgLNQx2CxKiCj37mJNnebAntR1hjHMMAB31Y91bR9CPNdFTzfKXkeb",
  "key29": "5rqc62xPdDYaaog7odRTLEVSTLHejKHBvLKeLgisGAzDwdgirxsQw8TBzsZbCvP6eWLNxE4WaNxpR4F1zWd9L9Xi",
  "key30": "4cd66yeajXSRpmnARuPgx8yWZgcVDPRjQErKTaDQGxyP9u1mm4QGje8Krf3gTtfMm1jQEpGHujbxMFh2cU45zaA3",
  "key31": "4Ke4d66ZQMZ5xsq1SrhhFoL6EV458AEyfVJ7EdP8vaYwdstwB6qJQVnGBETAmgCzy13sGNA8LJhAFi3T9XGYjw6Y",
  "key32": "317tD84SJsoYXxbJhqqx7BVW9zh4sAjWSFMQ4CvR278eCCDN9QHkeVWkFXRCKe1hYU4LqhfGFWFTb8K7nY76hnmb",
  "key33": "5b8yVt5KqctwJujymrh4kFYtdT7WgEh6qh5QgfiWzEdkhGXPBT9NZJN94qm2XyMQopEpQAhjPWhLCXozxVKcv9my",
  "key34": "4aWCkLbr6T56ooZ2LdnfTLscVP6PbgWUddGssbkNpJEhwdry8gQf1cjNqtCG7j2a2kPRSxhdkPFn1g1M6XU3aV1V",
  "key35": "5yv92qXJwD4eiGtmpXSoCcLCLZpEK6VPbYELxKwZHcLWAwcUaPiEa5aJve6ATsapS3UX4LBhBVX3SrHeMSXdsX7X",
  "key36": "34iQDTWSWaKAEKiy2uSAz7PPPVngdXhahC5zeav9SJzNu7q1bABNsbm7t1hKCgmqRNxfZY6F6uvgDg9v1FzqGovN",
  "key37": "GUmfnWR5NtEmpvxgKEXmyA9awq6D9mH1o5Sz73o8b2FosLbKvjGoN7XDKcGwWLKJtyPPb1zw4KxGPR8KjKdAny8"
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
