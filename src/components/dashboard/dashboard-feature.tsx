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
    "52FqZz6JxjFtAvCP8Nw8wvvgsKrstRjXtmhjYirtCHgSX2dJ2zKstU9CoemfTkPMsye9ukSMciZGHLfw5ARZZwmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qZFdigraV7xnJXaSpXt8i2MVWq6fE7k77YKfXL7Ziu3um8Kpy1UMcs67tXduVxRqZQFrMXWNGtnUfag5KkZcLaV",
  "key1": "3T5rLuoHGYHNNA8QdiLecXn5mtA62fa3SwnaqxyLcAPa7JXzZM2hTt9gvvHsiaE7kH5VH5vi8fJRk7Czbaqt5mg",
  "key2": "BKpFHpFDN12aJFhrtAwD5npLhWdVfmvMkfV9KPn9c8gAhbFnJ4ywveuaMxjpzWTYi7Wq8XsGm7VQ6B3ePjyYkH7",
  "key3": "5K74kUnFP6EMWd8qJbx99rUTHrX2isDGQD4TAfcMg5JU7ogdpeFoobyt7E2DdtRpszdbCiSJfFnVuq7LVTWpwj79",
  "key4": "2rPZUdq6jzJqFWwSYrCZZwSUdUifgXbpNFNmCze9PZVtMj8X35SmGqXkkbsuScMfS7ya1mcgNQFnkdGCi4zD2GAd",
  "key5": "57qq6KtcbtbE4Za1jwe6oaZLXy8zN2k1UXnYbjHYZuPE4JefUekLkPgEaN23e7yE1ADJVeizu5q4W8m2F2Fgtw2H",
  "key6": "4wrZ4SCSVo8jpWFgKGu39gzNnFQohE9uaadc5GnNd2mkgNZH3QcKy6b2GTxDdSk75RajfPXEe3w7vw9szJr96vHE",
  "key7": "3cedMRHAMxw6wQLTqJ3coznt4BbUZMSF21pADr2mZB32QH7f6Q9mZYqunVyow9Ppb9v4Peu7G3mUxxvXu4SedNET",
  "key8": "5FJC6fxvDfiLuaTkMMyQhcoxtPquu3maRPftW7rouLxJ9HT2ELZMU6jWmDB23oTs9hCrjuw3LuGmyDws5TLVRMqu",
  "key9": "3dqRmFPYf1jKWGv3J5TCTgwWRNPRTD4Avru8jnzn5a1QwoexzJz2NAcXoPpPcpte3hr65mBc1pmKJ4nN5CJ42ne1",
  "key10": "B5vga2Y74Ki4a664r3V6zQ7CAwKsBrsb5tF5771SLAkAgiUExQ523dKGA6u3LS7U58KqUZpk6D77DFqDmrD6pzT",
  "key11": "3CWnNYsNsnvgcFVycVFPSUkTBWQLgzxcLpvGRfJDH7Z6zF59Vr4sbvdtBrJeSvjhhk3m8fv7qWU9bhRVz6GgqU7A",
  "key12": "4hGevg1K7DZTFZJaxnmxxetiZZ7sQYKLwdqfpxShTqYh4B2WAQUvGFKVmJeJ9E3uU1L7M7HRuiT8yD99mmqzoZ2i",
  "key13": "2eAk8vu5EPWUYKa8FWrTsigHLBtJtiV1GjwGe22SvZLX9NCWzRHLja2zizRUdMrxuLYsR46qowfiJTQx1tMi4wAS",
  "key14": "58jqexfX2Ryz5jVEiSF2t9uwmVrRqpf2Dawr37S821S5uVeXGfK4Lx3ZconRHVC7Sf4WVYUHQLb7WhNpbZtbB6dk",
  "key15": "2SUJzF2NdndDFbXGaKfpPYc2fS6Cqveb7dzDwLEmQz1iA8G5hXi1kZsiFt1dqS1SeQUot97WnctXmJQZzCiaDoRY",
  "key16": "eDYuQ76g5GY8eURLWixxbdoBfhjvW7TrceEovXUz7J35GySP6TEWND1JigsDGYiK7DzFKE1gCsCceisezBDqPma",
  "key17": "23cgtcHyTdy7DBMpqXGpMVFzf8mWETfRdc93DzgM2aKgCWoQN43C53uajUWwwS5EXKVntxtSxx4XVrUPDxofVKJp",
  "key18": "3SRqiYiME2vxiCA828Gn4MdpT1oEwVC8TBWZjP8SUCcn3CAHUpqdjDHeg1pPHEBNJfJJRfP5HsUeTA3Hom7sa5Fz",
  "key19": "2ZAuDZkpYqE1yCLt5gevKgtE11GhDokd7Eg5J2C7bzzw6mXg6efv9ZHcSDiRgcA2w2AEa9pYFZKhJSvV2W48PdnZ",
  "key20": "3rM3TH3XnY5FmdQHXR9vbMuYfGJ5R7hSpir6r6YJ78F1aybvNiiwruodrfBUDMdok1sJVcng9yqFapwMLiPjmgi7",
  "key21": "4VzV4ys1X67Gu1pQPaQCA6DivAFZNiNrhBjHzfQMW6CGNbaqv9ZW5c41QDfXezWwNb5E3xmLZ8Ag2c486rqysdAq",
  "key22": "CoCyAGwzodeVKkUf6hu73epUdLrWoSwR2WCccJuJyaEodfYxBEUCgv9WwuJ6XroVz8YV9jBMxPzFHZShj9mfiQr",
  "key23": "2buKnw3VfTZW8ZHvnoQ87BWSWkZT8PcYHEnNt8W3wf6558sEQqPUF6iVgFUiGxtrbXTtXyJHbfqmHDFRidUvZAfz",
  "key24": "4Xtj2RGp7ea9ai5xTiKGuwaihrxTCHSi7V5riBLhwXM6hiTX1zk4ZxgLkUSvFw2G155HYtP2P2az6d4uKw93NkAA",
  "key25": "5abvdqkk618PgZL3xNa35NNi12VifcwXgnj2EVPo4iaN7Gq3hqvqVRTNtZAYSdTH6PbCw8QSmAsvsdoM1SBA4emk",
  "key26": "49zZnmWXDrBHpk27dSdNeQmJ8SEpMezbhGZVckgigNAsdB72yEJ99iKksrLLf62RbVWsUUvwDER716mDEM3HiStQ",
  "key27": "4ETqXQN2cKQHKFJrLexa9LxhksukYmqHTwmoJvXbSe8JVMo3iYHApenPE68FjPHeJ4Hq5T24QMfi4NFNYMDwF8g8",
  "key28": "TaAEfV6rVmSvbwLmYuEMz7me7ePNu4ZXSSnUQrCGBqf4EASq9xyX4kG6fmCLfSJ8VmroCwgEBbcE6BPBLtPgLZx",
  "key29": "5m7coVGazqASyVZKXDUigoZigZYprtQtXUR8Q712g4U9gAVMrNdGX6BGHKtB8YZRY4RJFuiVbLDgQoV8TSNvwchN",
  "key30": "5voU9hienoKEDRRL3YPjKBJw6gjc7DgL49xRwLXf69DxSatiEAsBo2wzwGQWA5Md5bcavmfny3dnmHFBSSekd6Yp",
  "key31": "3ZHKqQJbq3RGXM4j8atJr5WoDAhuqRNBLbP61houiFz26jjgFHLfBRuYXggJdSh9SNzYruZ5g6P6GYtM4VFYLZN4",
  "key32": "3nJr3sd88r8VBWRPbtbnbgfYwuxnVzs22heydWeD8zpvScY42R7nobg3i2Vo9WWPF3n76zy6jnYQaP5KhJ2TUNB6",
  "key33": "36muDAcEDMeawfuj8Kn5kEFvUyrLBG9VsVwBJUbEWraPK5RRxhNVtf9PJa2udMZitmUGp2YQyxYQgZFXdc65nUBo",
  "key34": "2oR2sRzKpkJJwM3HgnVQHxb3N2RVKFquSXx2yQr5Gud4TiHDxFzqXJrby8zNBK1UDr2vjSbbLLBwc6DVyHAmasn4",
  "key35": "Zd5jzR71GsVbDHemiQGFnisQDcmvNjXghNRGFviWR2J5GHDzDanYxygbVREBjDrprDYrjpa2XDpUTLvPU9CmAVC",
  "key36": "5DBHaWzYStSWipQkTx4hConaFcctqfNTUcqhPT3BkCxoeQQAPHVHnfwWPNEuVFWVFrmGS3DXbb7LqQHWAbrcSNpX",
  "key37": "5rgsetpcvkVEA1ro7aSNzjJVZF4sKHFrRMAj97ymQ6Dcodn3dxrZeXYQb6rcUE5m6fabLKmChuE7czHDh5QQU2b6",
  "key38": "4LGHU6paFRBZeBK1G6Yn6DxkFDQgBKo7og9tgDwu24s2AvUtTWtQn2a39S4DuDv5w6hiTkbQXUbvVAKbCJCoAdVZ",
  "key39": "7UXHGhMpMhPivzfLDHNHyT84BCYuptcUV3KmBykUXEXTiysEhK2VLbEQ5wcVtVb3kqXYm3Rvsh6a1sUiJGjMtJ2",
  "key40": "4KqFsrDKQeES63HNBDJbuidu3SRLgVWVo22njZCPptrJTSFioXvAUnaGWmyrA5rqrKNmj7moTfM5ZRBMNM6StooA",
  "key41": "4mKscvsDTpKdVeMJWt86bfqDPRxqcRxksiUprBa4Y6Vi76wF5ZS2VGGensf8tUfptDQ7E23tJWcsBoAiFCGgbYDL",
  "key42": "54eWvCzYQ7oxDkFbNEF1jvTfMdyXMXN1rAzgdZtc4s6K3xLeGYb25Ardz1gWsfmBvTRuERHWRiStAJk5JYFitEB8"
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
