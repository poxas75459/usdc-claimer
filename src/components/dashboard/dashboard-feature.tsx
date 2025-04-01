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
    "3ZdBRv1azQdiRCnPFacghwN9VK7JoWSDLQrb4cTeMatqmQZ8FHsw4aiViRZntaqqNnDGJkbhHdHrpzcEwAFu3aEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eo6BwMg7z3SdrrJ18kbRkyzWSiDnZ47p7XB8jdGv5ieuFEYerAGzuz3uEMi2dHf2gwJpAAfRKs4ux1KtkmQhRMo",
  "key1": "2YGgmTW4nujTVRv3nhse9g1YkvpDrCGGfKSNF4eNqdzVTzqTmNFv6VDR9Y8qPXxZ1ZKkUSDB9i4niECuEueDKyty",
  "key2": "4Pt4aVpFCqyYsvEDTcYPe3aCWfGyiWNADn9eQkbbtBK7KaUzDvgvVJMh79VN6hwXw7DffTrbbj915eaxJurPUF6N",
  "key3": "3kcRtKXpopkNJCyDxZmfG7BdPVZwz938EhtJu2BP8ZtU1rT9GMLztmK1N6GZzrTx2SfgjR1FqVpyMDVmxNsZSVtS",
  "key4": "fT4G7vCKthMNR1ahGaQuGzuiMuHNdBRe12JvvKYBT2K4Pzs6vy2FoCpwTSgcyHPFEAYjpdtVJ9rP3RsXJsHiEDd",
  "key5": "vpwKD3Frovufoa4MHHMoNhZKBUYdmdJn972vkFerYedHpTZVcwqjRTzGoCjc8nxkySUDMGqUSxXE4me8J5eFEkX",
  "key6": "Ht5hRL8BUcKi9WSM7p6djYwiNGRiyQRcP9fyFqEFnZkRoprcfcp3Dzk2HyxEMYytfCiqPP94N4CBGPoTTWeziec",
  "key7": "2vpjVTLYbHXcRpxxBVNzscpyUAW9shAtVgQXzPXkts7vqzWTHdf2DorDLAtPuPKnsdEYjXEGwvvDRMSoJy1dgzBD",
  "key8": "4442SoNSEty5XEpLvT4jjEfQifoJaPe9vN3xearLWCYXxpaTjeKbktPJn6Q7KUinK5s3C9JhSTLqbLFym2BJFx9Z",
  "key9": "9Bdsk5k8N13XZHR76bXrJQipxQebg13WP6qYxjgKBsA99KJGna2P1rGGtvKq9qsVJhuoBiECtKaiH3mJwpKhSG9",
  "key10": "55p8nJZRnPfZBLppKYwz8fq2amsWgxGL2HZpcroSSBx58ZMe1BYebxh8654t4avm6Ga5bb6b8WXM1cTKowgRqVsE",
  "key11": "5mNBvskUoitiHQpy2KjQfxA3999T2YExgHDjrT3UdTEjxCd8M5F5twExwMpDjMK9bES2jcU55zNuQY8BjrdxUBu2",
  "key12": "z5JWpjfBWVJAWyp5CRY2e9V7cHAWdaEPCNqoNVsGcaYiw27beqYX84jRWmPWcsEbdVRXT5vWVpDB65CamgzBLjr",
  "key13": "PQq8hDUWdcZrPXBUfHz1qT97ptfc18itFvLD8irP87VkguCa4T2o1E1bGBLSbnBv78ChZbugNi6R6KudEcTbxYu",
  "key14": "Dou62tequBUU1X9MoQrvLddSxqLoGJQPRcqGwqJxDducVt2pxHavuw9zRnxVpnSVPGbd5eAxmNVP7xC4p2SSykU",
  "key15": "4CUDVLxQTb31j2f4M6TNNXZr1S7ecJ6VNQSHmUCR3UbfVavGeS2k6V9Whnby15ctFCUAiJ4AvKek9xHFksjmssJT",
  "key16": "D5mxjM5kwyjPHXsHoxJ48T2GV29SrGUJ7b3PZvMN24s8ehaeTU7ikq2Yi9wxnsuE6S5Ufu2npSQHL3YQN3igzi9",
  "key17": "22G28d929nDTjvQaXQEcuFoqmKEtqG7WCt2iwEJLHHUAKfiK6U57wwK6jAtKvaKVkskGE4QKXqqMvo4rMwNfvUKS",
  "key18": "2UjnaRsf9KskWsb3oq4dBVXTc69VYubyfGEGPR64pjLADcZwigrUa7YSycD1KLYanwz81eeCxR6T9etmqzPmwQ4n",
  "key19": "2hDJXVKayMK3URRsxmKRayesxFVLYJwjSjSbMnyCULqasnYDkSBatK87yHS1jfCMvpkstTz7YSZyWvyQuRUEFVVT",
  "key20": "48N27ivwdZE1pDJLXN5hLuc7Xh4E4XgHfddkGGDRBGKbfFs3Ya9kNEtVb14JiNx5LVatksQEQZEwJ3DxWr7LXqYA",
  "key21": "4F5uEcxzKKeDVUYAgkcKABSZXbMEUE8tzVAjQ1DKZH96knnzHYCHrW5wN1WaxU227gJ2BWAdnfjdBg527xkCPRwC",
  "key22": "459GK7zQ8n9bumzbZmnkKneMYnsPgUSRW79Z8UvV1ftgbhFPu1FhzD1CAqHMn6M6P5D63nQQ3Wi8vVK1erhH95XR",
  "key23": "iu63pnoJ47bJH1pkai4FCFAdPqdQoKSnY3UmY2DTEWuKcu4Bm1VUjG51qzrAPd2h1BJz4bufr4spux7Jni6JWqM",
  "key24": "2n5RK6Q4Y7M33rChAKHv8kKrWaL32XqHgHYeCAdWQ3SwtrB353DqjC18r7qbrNJy3WaV1HuJWpftbddRp1eR86Nk",
  "key25": "5ruhUA9JTWmqC6U2ucAPNdCi3tidBuE4sFoQ2EHvajpkGnhwRcwk4EWTbHwdwdsPEMAcdf4XyhRbDhaNA8sxxJt3"
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
