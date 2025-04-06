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
    "4WyTU5T3J3i3SPtGuU9qiFtxiETdFVYn1aXNfa9WSpZNUKs5rozGVvSf5RBmFXbe1QCn6n33NtoLjQXPN8tzT1QV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mPCX2sKm58iaeSf6KZz64UycJg2QNCv5TunzYHLtqq7ZLUYFGeCwZb1FbEprGj9SF2qv8h7JnKcSozVVH6JWsBu",
  "key1": "4xq3ahd2bZonzfJ7gFcWq93mEmhfQ4er21pVagvPmMNQE9rYWynSYVGKTg7PQvqVM9CBNCEHrR5iXXq5gKUfMDkS",
  "key2": "3EsFDa94zcsymSBfedCvwne7wZkQzGbWejxVbxvm77kGp8Nu9ymcPEEJAab72CEzZc4T28S9uoX7FaRZPc8wTAfw",
  "key3": "52BPQLvNvuKr3MzsmmumdDmRXenmAHirutbrCT7AKA3bpY1H2tUj6ReJxrQj6HAiKyVXy4AQBzUn8rQxeUccxdiU",
  "key4": "TyfRkRsNNVBHJpkfwK2Fx4DemvA5qY7TAJeM8rLuejBc49vGzF3hWdC8otJRzZaK8hx2xArZr67VE5sxz2WJkTy",
  "key5": "4wQ7qF1QeNkoVw552bLYmRUkFpvBYfc6j6XjsXVnCjjbLGHoNwBGZnaa6JVdbKn3BcYWnX6KmFXuZ5fj6mG992ah",
  "key6": "31FANeSP3vihJNtq2U84txpZid3FBbcUxherRDqr86hy2yja7UVPxMWf3s65VTeqZHAWFEDEZ9PAdrG9tR1KCRqW",
  "key7": "4HVT22drA5Q2dKXwEZD6g5H74qUGbjm3Si23mWWu4yJZiS1oPT6j5C5LmTymokJCzgCG1TnurZvKtiYJCoM1G5wZ",
  "key8": "457wWeVM73cjC38tNaUdwthunP54XWpTYwNRTmfgawgVYZT5CFfXVqfoZJhh4QhDYabdfBuSnydt31pGmzbJzAM2",
  "key9": "mUZEnyqKvYdWzv8kKm9xWTNMpFa1jkm7NU9yuHNSDc2huJQFKC74BYCg3ZdAMCpaoinC8wVRqRV1GaiQz2iuMA9",
  "key10": "QFGw3YMJT3jVcbCZ4fswixwu8bABBB9gd7DM91WMDxEohE7AgxX9nWWudoDkxbiVmU9BNiNkv7P2xCMV5EJZeA6",
  "key11": "TZnZ29q2Fn7ZmnrnqmXw6UPjvhHYLZXxRC5o6ayZrHiC1kj7u6bU8JRkJNytWEJwaAk3K46ypMnTb432sJeip3r",
  "key12": "JhFAbgrwUd1TuucaKPNZ91FsAxB6LNnaS32UqRy1Cnc9PaRwufm7hrKA2pNxwzaesVCcGXnCFECR2A76GpnKfbj",
  "key13": "wzFjVCUBrQq8jcYUK865EL9i3vLJdTytP6togGA6JXvmRktzTt7zS2jWkZgwXZ2qrH3KZXK3uRWe9Bzb5ivSHf3",
  "key14": "5aDYD6KRBH3XDKa9n3xMDuX3jRdpLRcqAEigwTxZXAu83zSevXF3rkLYczW1wwABeHau3FuP6274S1MNFSw4o58p",
  "key15": "93fPjpSgYsmwQ38YDwh7oEFUopVfuEacH87AkN5jWuUZPPpLqbnK8yxVYaKuhU7PrC4xzoR3WsS1dbNFWcPtFma",
  "key16": "62vM98gbVWYGbGQWLHznwofVdq8ybn25JrGcMJQawDF962E1jNpuCnpUcWF3FH1HMjgU6y9m49T7XwdmL7ZVsxx",
  "key17": "4kNNJj1jLxKkj5NgMRtvSuLGZWUFu4KC53zWKEGW57u1hkev8Xg2MZKBN9ykZGhPK1wbguBPVxryyEt9fecNz1Mx",
  "key18": "3PkYCnbet8Ksd377jAVmN3Hz4aLwSoM3wiDuK28Ys265yAjcmrbpEczawmahWTE32bQmyEMjHJ1cVQDyPmXmRoM3",
  "key19": "5E2LCoRMLT39Khn11CQ5b56bUgmqT229QHxcj3hKE6ADzoUzYm1d8ZeAyNBbLTCpnuKCpygsrWubxj48QyEqPWRW",
  "key20": "2xQ9P6FYDUfZdZAgPoVw3MP63AZrRxyBWHHRvp8NRkJQDdzJp2LLDFVN4U5iqjmxFdphZk4PFQwvmuKf4pdp6VNr",
  "key21": "5w7eUxnZm56dnwcyFGtbfcmic4iknHyPzpga93DPBGVhaEEkM9LHMXDBKMJ5zjC4jWa7XoAZiuwMFskf21TWDgC9",
  "key22": "2Xrbm92nMPNKusF3HPyiRqtg7jCtwzD7fvaRxbQrFBVFtMtSDreQgmusgdkb3bm5RjdT9jAs4bopC1vv2A7Gie6S",
  "key23": "tdnCQHrXyd7NdwfPxcWF7ZBUhLcbuLvBs6QNbbaUAtR8Jz2NesyeFhMrNz7j7uheG32gmoPK4szdXxnTk1sDGJx",
  "key24": "5mmqk2NzPECDsRkpn4cA3VWH8KuUapnWP2vXSPFM8ggUFwibo93ptuVvvZbWSD7gtXBgpNLqBqtM9FKfXvj59BXd",
  "key25": "7rz8v2LbFwmyk4rif65oKnEvo2pxB8QmMQjuEkDaB6iHJiP1eA5vELSFdZyvg5d8YkgJhkzQd7awVyLHnakf5sJ",
  "key26": "53yQsYQ6iBT2Z5PAKuDYh6TPRaK8XkSXFE38UpKvQRzByLuQZ1F4n16kaABSFkmJrPLHwPv19StsC9FGCsx5V5xM",
  "key27": "xugiE1HtLaSDnNQaunBLBjHS9j7Swbo8AZteiVFMCZrmWCWxGLVSrK9VMS7MTrkLtD9qni51A499VSinD1NBjP8",
  "key28": "7Bcf7g8dUEZQL8qtEcgTUWC3m7TgJXbmJFPHtJ2EC5Z4daKeBNrKQ5e4wdnvKtpoSKGN3FLCa7YDQhBP8qjKdRd",
  "key29": "2MmeadxgVt6XsZKBibRz5SBLraWUs6LESrKXwa1FbaDt9CaAYXjVMK4PFB6W4XPhpCUZE3BLeHVVKicy15fyMDyd",
  "key30": "5vkVqHFLRPjzi9sQCxTQfALUiaizPoNrLtbPxqm8fLseer1RSDTCHmFaoxoCosv6bJLDG3NjutugVR7gZyuyfWKQ",
  "key31": "47ZgjXB31PxSrcD2p9wC6gJ95e2JExLdPCDjceLpE3anFkwewMm5d9VkKwfZPeFHaaEBC2sCXqXzEuyBKJiNt8ky",
  "key32": "KX51mF4H2JHqupYr7G3rufpjCGgShDzftb3BSEPPCfSMiwrgYRXMF4LeLgmLjHW7L8Yn8SwH8RyVmKUemm44Deg",
  "key33": "56kxaucT4hzSxZSTvFdcqSStWSBoxGsad7XKv98qovrSRPvyMb65GTDiXRDRtikcAN3pckeE5tbiHZvaG1zLAVJ2"
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
