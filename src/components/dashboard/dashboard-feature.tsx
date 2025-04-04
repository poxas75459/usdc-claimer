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
    "3S3o7icw5VxfmiwttiCbTCWtre5t8tmwHQXbNmVB7FrsXEyZP47p4cq9x2K3yA8qW2orrUFN9W4Ri68wZdhHYbNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ZfWHxDkgQ4ctH5rpdyDzffgJ8XRbPrzYEiJoBqUgs6vE2fZqk7kiViZkYfwPacqJeDCbH8crLrtEKxep2MVYh7",
  "key1": "271Ge2EC5rVskKtiodpq5RtRqS2VSt9QFhv3ZUQgRHHgekYQs5cFqg1ELmHfvHijDRHotU2Vvn9tLZaoZB7WvwGi",
  "key2": "4Pw9ApxSh34i6FffohvcYeGk5H7S5MGd78S4DbHHNbkGPXiCnyHXXSQqwPpWZhAHfgdrSokSrYo5q472CDfYeute",
  "key3": "2bXviR2iZ2WfbDmjX2m3dUbq4vc8shfNd7HGoPsMNPGYdqPUzaGgUX9SrHdLmKs9CVjtCosv6Xgws8FDtHXX6fc4",
  "key4": "2F1QBzeGriHpa1YAHDeieyaV1UpyVZF287s5jXqjimVEFuEeURbtLoyw2fbeVWPQRYtpfCof5iCqFEGGQSB8U7qo",
  "key5": "3QUadeyTsDBiKbPTBFxRbdTW17XEzh1a4CSqoaXGDGfrdXboAwxucmBPAbFmQ2qo4xmQ2zahxYxwLM5T1sDEWaQ6",
  "key6": "hcuJomzY9dLq5iHsNkepVxwhJoPECN9FBEdc87XPoJ6CMSRZyNkDqCXoqCvXswfDM2AHYfj9mDduruKRnxAbJXp",
  "key7": "2eMedFkD3dxtmX4rtEfrhV95tEmDjc3bMqKLHaXaENLjdz49PifKGPBPGMjKJvThrUuzG4iHvWH4v8evqm3P3snm",
  "key8": "557Qyv6jwfaEF2CybU9grU9RvwXeK4QqmRcxts3ejipRxNycfT7HeL2QMHiU7o4PQGm8V7U77YUyrFJBFxm2VPEZ",
  "key9": "Ska6hmJWbFApNan8PfxZi1xBnCAjJJpGdgpTzVziZFxwMYYtgzNFftUgk8rfbR7fJh5Wmhezu2Pi43hNFQFbX1V",
  "key10": "2MkNXAc4HkxRfkShbK9dcvtzwP1vaHUYRvm3F4Q3jeXsyqhKyUn85ZLgNxphEG4wBXNzkiZcSX24sfHCitmdW4aj",
  "key11": "3Wspo4MdA6E5B3wN6rMYmBsH2je9D72E8G7L3VKLetLASojnJYi76KcduJGvLKYnKMFbu2pDrW3uc6gKJt5znkRv",
  "key12": "65xdqEwLo9Nx8Ek5eLHbzapM9Wf3oPrVeNFtYVoQhuK7T7nkK7E9XnZZG9ET5djeAnsR5HcH22E1F52WuaJuWhy5",
  "key13": "Yt2ENtVCsGsSkfeHzPNzFqsRU7jyvyxcyXiXafDTbfTYh75KpebFXjWaeQti5kSf5h9ybRdV5LNZzgzHHnaKYAn",
  "key14": "671EFEn5mPJi1AeR4p4YesoP9tGKvRqGeDMogxNyb17G3yf4VnThgXxgn2qW6B5mzdgfwEwjLvCtwrv1nM6tMsw4",
  "key15": "2LYAYmamSt1srA4cuMs2Bmi9dR4JRfgYmcaseNnviLnmaeu9zcMfMo38HRaKHQ5P7StrpAyeen7yAHHjgRc647VA",
  "key16": "3LAow1U3kGc3vvM38u1gkhmkM8BwgGCQEmqxhpqmqBWSBy6ZAdwhPkgKKLJZcmUrSq2u7Zo1TASBksXezswSbQ3v",
  "key17": "2R6MHRpDMayvTKuTPiJtYngkYGF66QwnyyLJwzwWF32Cb2AFoCvvrFK3B32tFWzGwpyqmSjddxs9guaovWnp7ubv",
  "key18": "qfju3JiaBMrwMBDKVaWMTtPHzVxkM4S2BbGTbrfGpDGGnjguoAAhzC6iAsiSJWZmAKCLmffNBB8ctmns6Vwgu7V",
  "key19": "WuXnZ6DzRtNpyz2e8QdvUQMKFe5P2y3f8umvPzMUQf62KYMeR33UACW7pT65PFjsQYsGRiRUD59abEvZmMpRXAP",
  "key20": "5fLbSCACsERBR3d3bAdaDdxEs7oHo1897NstVVoHs9TeYV3rxyL6q7rvyHZoXCdpjV1dJrsTTqP9WdyFCJbH9wG2",
  "key21": "B3vegEhTVBYvrYdYsVyndoDSACfdiBufXCkGF3Vq4T2wpLxJotYFBGNQWr3RkRueFEHDGMSzYsyPxTVo2biXmPY",
  "key22": "5LFfL8SsJXpGxZKUnXbVbrMXB3U5MFucsVvPEARspFvi4DPzMzsFF2VRqJmqBu2NBnjHbbsuNDjDK8aCgVqXHVgg",
  "key23": "3oXVLFXi1gnEnypJW4sjQzi8skQ1GopMsc9Wb1bPv1df4c9w4dyeG2DizN3AXMX2nBfjkJRcFjoFpJbMF83JdL3o",
  "key24": "iHXpwtT8Yqvn1k391qvhSwAreRUuRQrFpFdebbNEkF87ZSabpbMXjopvDs1AkPpxqTgQuTBa8BwCaDBY4WGckwh",
  "key25": "2ic1rF9hbJrDqcDXz35ksDhUDVz89R3NN3ecx3hdwn8GDmmj51nn1pdeP2tY2cR7PYHg3QY4i7rz6FUoHhV6UXSh"
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
