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
    "3NjN7EEeK6zUPfts3xSC9vxGWPBpnma6B1nvomwPe5Pn3fyvYWgHonjgWeXJ5PE1upwHDbTK55phRyEngPyJgUe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xe1PH94eC7XV6zNzALqob3c2mD3n9GWi66FnWgGHwktinZBn1XwrvBvbu8eSLSvWjqADKTm8DgvwnQsg5aPXBn",
  "key1": "2BoaJXB7EowBWy86YKUrtu9bot1QQGqM3pRpow6eqhDeSmciGMcp4JX1Bj3M3GVrcmfFxacFnieQTnvGajYvE7E6",
  "key2": "65fbAhPxvCuSrJ46Ty6qZerz8AXaQupjGwkQdz9xBwskg9eYuHScQvZn4XCTJ9uB49jksEpxYuX8ekoq5rHYkBbD",
  "key3": "3cuweTPMNjDeTibN8bbWnhadtK6n25d4DTGvewRQU2BZhsJN91LXrg1mPRaPYXfdEfC9n8wCpKkRc3JFBC7t496a",
  "key4": "2ZBA4u5g7z9gFu7LGSHbTJyZtkh1m4mpRftpQUWknpZ7eEWPPeajbFjkchfzwo4vqu1uZzhmoSr9wjWm2WBqruHD",
  "key5": "2oFvB1dMkuz3pEbtUyAaSiV9j5gZi2zaqDNRtcJpAxUSVofTkdojPkiCEjLZrPUEQhCfgXZNQjdH8jBnPqRT3494",
  "key6": "3rXBcVJzFE5e9FtVGdVCDvNoXH8s2Luff4erMnUisr6jRL4F5JU6rHs1RGxgXD5h23wshi72kVHNW6TWZihXvf7H",
  "key7": "2cPjFXTiPnaUZh5jCZbmHvRX5yrtLDfyCq4QUxCJHKtweM5Hqh7UDSzUx611ZTBeGJstkbXmKxHA71PEyr46hUGB",
  "key8": "4VYg139F36QF54HVb6VriEAvdcAA6fS6PBDWFGxfHNCtzVpjfo7FdCBMvtfWKCjnmATtz7qoecDLrM7vpFJvoTAG",
  "key9": "3cFyQTGx4hczFLqtg4Perccks3ke2tVn946EjoSo4Rtsxzor6PZc2N14gwV6NzRh1RDgPzYLoYm6c8SXkBW39T9E",
  "key10": "4MoTe7f3PmUgndK2kJkQLMyuDJa9g1NeWrtZjzjYd2GwPf1RWuMGsZvf6KagdVHra4U34R9JNdpMdYF9qVGH8Fnr",
  "key11": "3nxErhpTRLGwcrCLwNAKXFZoNrtEJ75uJ5US5kLs6Y9NUSx2CTJ6u46EczSo1219qnScwukTAMTKGbfPHpewBeqF",
  "key12": "2eHzGKjgbYwLqTEitXoVcSCpKGiHiZvr3uJ8PkFFkFxcQrYPTkr8Zr4LemcvuZjHzR2acdDS5d4xYCbDJTwebbKC",
  "key13": "2Dnr3ajacV4GY7gohGGh271KzNmfzFS1xf8qi5Qjro7fbGJ6vew1v78ohZR492to3643x6JuUsP1KzkFbStzfaVT",
  "key14": "41W5Eh7dw9mLTyF5FHtJP7cM5f4ptTXiba5Um77nfwHbW4UTpdTe2oRBaVkY1ycVLBLS3pYd1nDXCN38ZDmxZ97y",
  "key15": "3CSpDhSyMCb2Xat7eWXhHYtqAktk17w6H1PNXKv9Xb2DRts6Bg4Szg7XXf6jLJfB1t9ooqwnYFWeTSGAh1Xk95K",
  "key16": "2fTSUbMWv9Sf8Es9pPCPGLiE6SquKLBL452DTMGJfVoKDGCj9ypqmf6rokSXp9RAXdK8LdWRnicfMZkRcLaYzZQx",
  "key17": "51YB2SnHhN77oZCBffXkMFsrW8DCfyY5np87kXgUdVJcXc9AfheC1Tubjgs5VLSn6qiyxkyzBycZhWtizoa7QnKa",
  "key18": "4bwv9FvQ4ukExMU8W6iNFD2cuEbknYByfaaqsAHfj4rEKDsdCPnqtiTsMMGPfnKYr8Y6KvfW8oF1m9kr4Lnq9en1",
  "key19": "3TS1T6vcviWvobcs83FAzsMkwSx7WnpMWaipcSUm8WfUhKFVGWuCeQvJxBMHqzAst5SPF6FRFrXuAdMnz9XtvX1M",
  "key20": "2CojKLCyEZXp47Yz7nCGZDyHf1uymC3b15gkscuQeoBPsk9ddXFsMBicEQjfoFYhXfPRnanKAdLSoAzyP2mVfxY2",
  "key21": "C96s1CjGwycJWUTu4TpvSD2G13tWQJA9yHYieRUnoQetKhWHTMwBPNMghmTMaDsTvfucu4RMxnvtV2y8kcABjGS",
  "key22": "yWAgx8aZmeHy2vXWMMdQTqiXLTQCu8EkKukSWXEucPhGbQFNZrxxDGBHSN4vvNTPhGFd7sLRbF3XLJ61qKjvRLV",
  "key23": "46BjypBMtJ5nNyW6qTHNtr9gsRVHt6NqsYs9KfB4eTX1eLuRKKoTNz3LU38j7SM6SziQzQgReKs5cu1EzgnRB1Xi",
  "key24": "4T2bhoF38qfpECkbWYedg6JkbLCwtbus8CscFEDbWQu8eRwXMtjPdCZ9nXdENWVpmr2fgqKmUcdzVrijiB1ynME7"
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
