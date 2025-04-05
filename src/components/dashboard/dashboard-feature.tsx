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
    "39opzrmyk2eswgtDfNYaW2TsSs7vThjSMgPUPrBzVQAsQxTkZCvk9e4gLCGw19WmP3gshPwCJSw4bzEJuNUNeRaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vwJsoPpEsSLpuNfUN9KitdUAhyp5XsqPEnqjJS3wB82gohabWNFCZyHimr1QmpgqW7FrrMyEHwWLE2v7UShDWxU",
  "key1": "4EcAzM63Fd1y8MMSRAD3158jNUVK7TnYR63jpx17UvJT72QhiBHN5XWAFxSkcRY9pmydgHcso7FBpJs6ZWxcLyNQ",
  "key2": "3a72vX1AG7L4P2axuFiC1FZu4rmp41WmrkRvcF4k1jwVgaQnHQWaa93FPYFXKXCctKqu4834uDuHQ8Avo5x2A6g7",
  "key3": "GMwPbsReG5YmZfXpAeosSrdft1wpWh6xVkANdVPn9fNBgQ99BMELDETebFLG8RK1oBjxXKcUCMpNzXWSNnutLcz",
  "key4": "4a2WgJhgxtqrUYnqJo4pS591ioyrR99mKJWxFhWCEmC5JE4v3D9zHq8wBRDJL1mDTgpeKp8uNC1ZyLaXCTGp6MwU",
  "key5": "65xbShdrhojPn5TmzD72r8utKhN3NAfuVBLt77x5Sr3d9CHMBW1JfQcGWxbRxXHyjRwppeqpE4SvLPSXMC3jQjR7",
  "key6": "5xw3jbAP1VuDt6gWgrUnJJy2Np5YhcAVPuGgQupEhVCL3uTa5YTVB5QgSNvDobNzDFLL9tfoQdxgFyoyw145prG7",
  "key7": "iZyoKNBULEN8GpgvSVMzvC6nTepbg986PojEtfcvheNtPKhchPZUjfSiJQQsJpCEHWsncendBU6ogFB6ZcxskMg",
  "key8": "36itZGbbZZebv6T65PyoaJNjwzjPRRZpacfwFFWK4CbwXngtjHP674ccyoTF5hHiq2DaEqfNkvt9BTJqHvX8vcgP",
  "key9": "3WQCGvBgf1ZoCE4z9ZZofwTri7xQCiAHYQ48qVMrf3XmSM8ftuvn6o951nX96RFcKXRfCNowwzZSazeH4pJx6VcM",
  "key10": "2pLnSMLF9YacsVvpLKXU3PnxLGrEGGbj7agY8pMMqKejLF4wSZRoS5iaBXWqn3dCtHXmB9VpTEBREvS1XcRybxvZ",
  "key11": "4xFHCK8SaFrgEVaAw2jnuiYop5QapA9HfctsXS8fjZifRG4onsNcouRTUGzEBoqcbiBZL5A5SH6SrCz57mkqZjHQ",
  "key12": "4KnEVkZZfxnLEVwgXw6f8Ri4KDCKBRaytiPQ4bPHHzzUVX9vtcarMEVeNCjJgjrPMDmAN5PGTkoCysuaZZPyRW23",
  "key13": "3RepPPS4HEikh5cyXuBJtSQ1NnucLJ9whSuvKp6sDpgkptsZbkdfBk46kcwchook3hDgRNNPRbpTVCehwuzCkDqR",
  "key14": "2PkomT6C3MgbzAxWymNjLg1PxZ9DgGwGiygv4GN6ekZ6fKJT9Cp6pyTmG97M87PRcyD4yMkQtpgg8U8wpb7LtiLr",
  "key15": "3KwQE5TXdAqvvTK8u8TZTh9n5amxo1fvFNk9Yb3bqZ3b4mzdAQEknuVun7XevjKRdh47Xx27KqxwzehUBrhJof7C",
  "key16": "2RrbJq6XJRPpEoecuWEqAAbRcg3KaMsYeQTAahMZPLZZATzAC1Zs84wKZbdrU2FkqVLEPMszWs12k9pDY2KWNpt4",
  "key17": "41dCY6aHkV8CMkEmUr7LuTpWVwFPT5nGg2UrXiGBZqimgyyabMrHfWCrSMTKdYo8pGWX7yffixs2VyajTnYvnbpA",
  "key18": "3AumgdswwDTHLyXwiqzPGPzB8WnMXuGonSo3J5dXdgzNyNfnTWfsiH5rtgbvcBJEwMgkEcM9zREpLqF6rUodSg3i",
  "key19": "iPB4yGQ1CmLdEfvsZiKAYzfYNer3fV8PKux7NHRwtAvRqUxLTtMhbEwBGV9Wd3yZPgkMh8r5R5dYFNfZtZMGyDg",
  "key20": "5RN4seVt4oCEKP8SugD1xZtHegrB6HtdGR2nrLuzwxZDzC3zP5Porydv9SeJXCvPfHQ5R6zjxSYEreNfvKuNpcAz",
  "key21": "34WffCov3y7yAH5jjaYgxSkqtaK6ULhrVAE73LuHqsJrr7oPdWvTArxZ9B68p4vPf3grc8vxhQnLgzeYE15UfcSB",
  "key22": "xrkEZVNrHM6GafA7sTL3wJV2pBtGJbqrXML1jRGkQSe55fjnUUFNKobox3UiUqWjFcgKKo7XEL6Gpv6n4tvKhH5",
  "key23": "2YysEPwfZsoX5tDLg9h676KQhy57i9ddGG3jb9vErV7kqtGMBqqipNBdD7nJbJMyL7XmpHbTkfYgWqnmHfsMGMZU",
  "key24": "5YyWo3Km4wepGkoX1v9kNui4ykUGVx44ugFwWSrx2Wp4phZGjUv6yhUypvsFBrxDWGStCMXZm666Ck4mNX6vZkH9",
  "key25": "5vci8VWDRf9pzVQCmbdQYNfzpYk7n5Rj1Bx1Rtwy8nTF2HqKQdu67cYojyDHKcHZXt5QLUorAgiVH58YyG3DF7t5",
  "key26": "Vpc1B422UmH2GehsYgS8jnFoB9G84pcLT1MEoqj2c8qdqRef5g8jNJZq7Qr7rFciYCxPsJcQzZB9JhUXay9dgja",
  "key27": "3mMpyTkXvfQ1Pqg62N9BmtzpENcL4n44TZ4RdpQD5yaAKnNJWr23nLY4QhiZoKEqJiLUxfEZfHkvvnwiEqTsQGCE"
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
