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
    "63C52TGQvPwJiW9hRJrzjV6MJgsB8Lut6oqfrwcgQK2LdsVA19JZTdHhoFi6nzyxPPcJzz6cPfxKxcDu4bEYN4m1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JG1ECwdH8eDMQdK7Bip4rkWRS7HwcMVwegFTv8DBZHeVmZi8FbH3xJ2NFomDcV22kjytxMB6SEVeX5AoJgJf2oo",
  "key1": "3RcbFtgbq2nZkdarKagwcepw9vHLhruv5HxMjKDJ1LGQkfTNyqBaLAZ8F9qZJg6rK7qVooXqL2qFtUmA3DJeg47S",
  "key2": "34zEGG497p5Ga9dGH9xkCwQzuhhQY7owANQApscy5NnW1PvoQQ5pAAK9oD112UttbLCnEbXi8xeXnE4ddghWf4mB",
  "key3": "57D8W3Y64N8Xd11CA7SaCG9C7ytq6P527dSjL4Vp7f3tW27pgsEwUpMkT8gtZDiBm51e1fzvVCk2PcDZCyobahYY",
  "key4": "6tFHsdu6Drm4UWX3RHrkHXAHf7xVojNvoaGsKBkEhtSRVe3qmzsm39aY1MbCZxUrrnZpN4v5iuNtRNucUQyoaVP",
  "key5": "3SHQVhjcZERFRaLmb1pAEakXWPfnUe5tZNJiL3HFgC5zea4fm9bZLBfMKj3Ka9HpshpjYWUzSbE5Nq4wStYFYqMT",
  "key6": "3FNmjpH9w7ojURWPgzaGcFhb4qc6n93PFevhRgnWjTjVzDoAxzP1dck1AigFxW1ZbcRKgU2wU6eoAdRkmbFm2Xe",
  "key7": "34fimnnKHdst1bpr7JqPitjuaDi7TtbWDoDBnCkwx1GmspqzgrZcYCePC2QpzBAGYxU3nUNwnkBWZzAWxh7xboYe",
  "key8": "3xBorvxNqoNbWaKMAFy1QvaZjoEnSQF2AHVMpizZmA1RqbdyfbivhSecrMcnZMXstGJr1oFAt14XLztNnb5t6CXd",
  "key9": "5ag5ZRAdSKU1p7uciQktbVSbLCVTiAczAMsBTdAFAXt4v54eVdfxeuYu1hVHrTuYKFx5GwqRBPBPcHsvvbQAJ41P",
  "key10": "2Aged8aj3EHJpBg4LBZ88SC1MKfPWxVChzMBQG5gBFDndsxcbxvSwUxYUdsvScqkgBYKn2VdpukvTrKniQ7REEFm",
  "key11": "5FxEhuzkQXjuJaVnsJKqoG2o7HikSAVC8sEytoBXK6T4o65JEcctsFAE2Mp4Rtwp7D5Dq9NNQ1ughz4bQQZoeGvo",
  "key12": "56yAyHviGgakWMBbKzpmYT8nyv7TfGSsroWSd4CfUB7KY2H8e2ay9n2Sz4ajyaJZ8X9oZ3uiDZH3RfykSGy4AC6J",
  "key13": "21eXMJHYmguZKfPdjZ6nUSf3DhY4Rnd1pWpbNEZVQsvWfEeTaRp6gdzYwoMG2awrzLCQvSxFFyKZoU3wd2Bpy3xd",
  "key14": "3ri6KFw8EkTZ3yysrv1cGFxxFUC229vyEBjiXiBoTKunYecEKDUAKbPutpsXV7LMXEbRFnfGLwepyfnRMdHeQBpb",
  "key15": "4FuS7oLaN4TyMUARQsqEJcFNFGDKa3RHSThavSBUW5ibn9FwyHeEof2J9DospD7KrZ7uYzJfZSXLKt3yikXZ2WW6",
  "key16": "2NyRENiB8HDDSoke6q4w9b6AyiBJciUksyPMPka5YjLQgtb76kXGvTEEPKsHe5PJTs8QSFNtZ3WKXFJbKYmLP5sL",
  "key17": "5KX5tC2zjVA4bgNJ4C1e644YaFPzuyFTMZuh8JafjEynADpqPVbiPUzG9jsUE4EfaTMKcpHrXEZwgH2zXNgrticD",
  "key18": "FHRjgiK4ZVNjYvpVdxbyZfisCExsnWCiLNY7AWxaZmPN3XnyQAZp5L8bieX7ZxrNSbgBbUmpbNNgrepKe9uc9J7",
  "key19": "3BWkQtqMyveppzEMDPeCpj2D6RdeS6uh85bNZ6PB5dorVeb2jscoJMKHXHUfofQduUJmTbnWFKWqUSZmvHAAoMpM",
  "key20": "3HWrPSDKZCiREy4pJhFtRzpVLhwBQRCc1QhB5rcNiydb6579Ws1WHN9pegoeNL2wgLAsn956mezAwqDct7MuFvg6",
  "key21": "4cwzPC8M2CSe13t66T65TnptFRJGYLCAnpDuJnDmWSUei69EM4BsLMsJhZ3dXp1c55swRYxkovVRgJQr4h8cB4HF",
  "key22": "b72XzfiLYbjF7rFVJKDzos1zSuTYFHTg95wVxq4QCg4zeoXGYJ5Q5P4Sgynsjby88xMtagTc2UrbNBMRDWWspvx",
  "key23": "5QkcrziaoA2mjMrWx2zGXR9Te7WN2zGZ8QbCmyeAC825buUpL8gGiP8EMq4PE9wgdJa3PAprj5Uvymn1wnQKKgEW",
  "key24": "5pvgb2VdEMV46RMe4b2K6oJ6Ta4pFpaX2M2sC6pCoKVBueLJPfESGgpYLeZbnBLPNBc79tTRQQDU6JaJDprzbizu",
  "key25": "Lm5ZgnpgKdZmtPjU9DQY2T7wwmSGmUPzj7dZdYR9pB73GnYsSv2j8ZUSu9f41GyRzkwWpmrfHNyMNXLwHz3SZ5B",
  "key26": "5UXXmcHBKRzFMp4qiorVRzapGE9qD14DfcdfyeL5rnn86JdqLQVghQnYKtuuP3RKbpRt2oUu17ona412rteKECDE",
  "key27": "3H1R8cR43KjhMhjLUYrS9UCQN9JfdE6Hqzw7qVKbwekZCjPrKbDPNL2F5CF5o19aSFpvXAQwQ5Q6cgq9dTkSP9Fs",
  "key28": "56urRiG5Nc8eyxiF99cuRhgm9g1JrvGDrt2fQ8JNZfw8kMXy5PVoUFER3Pan6b8ZL8paMXVphdmKCN5ywZa9hXii",
  "key29": "3rBtvg3eM5hKBHaA8g2LimwRxCYW7T4pgy5fqPESC5c15sG67Qkk9xmxmGFb1G4AH7tGwR8SCwqHxLTjg6JbS8zv",
  "key30": "376PF2RXMTDiz8K8n5rhcLPpxEsubCMNcUvhpFGdawNkdirJqrQBxDyet2VUgBFFSoMNNymmNKAVRn7M7Cjhm4rz",
  "key31": "2mtc98MVKcjAsRJczTgyQmy9pzH8Zuk8mYaN8LBi4NngwJpQUgS9spBCqxRetcSKGAR4cqjgk3SnN8UWArPddE4n",
  "key32": "5fERE4kxrcni4U7j725BPAhzwCdhbGCCfWzazui7cyhCViKoWjMNjukYE1yPoxPqTatfGNKyWGJvPUd5sMPv2jfJ",
  "key33": "3AcEQ76Hp2XGQqsiJC1CuqHqkmFWzpzukEVbxUC6z4HAXJ6yYQhvnuoc5FmktGee16DxzSaQcEhe2cA5QSK9XpEt",
  "key34": "21VcZZfEQfgXvVnq4nEgnyTkhMR9kqdYkrpMU9jeiT8GqB3A72bYRB2qi9wrXRE2yYrecKhAXgq5526Dn4dpghwh",
  "key35": "5eSCTM5W37xBrBK7FJz23M9zqVfxqXbUKz4LXNfvdNVBu42HmWAvmo2VJRwqGBn3NcYzLCXAJZS4j3b3eLigStoP",
  "key36": "4EVf2TT768q5ocyxsoRU3UXiQdnsmKwCKR1gKTeHo5R4pepk22VpUdHKXxLtgQuvFxeo9yJo7rdxKsSEVc2qXEXs",
  "key37": "pDHBsg7pQrNL1XcXeRtjS347V1DziwJYC5WYGU8mHqtrRVRhXC44CTWyJzM8f3C2uk9oauTLKfAs4xoeiL8H9Ka",
  "key38": "FHJQSFCLr6wvffyGhG2KrEjLCUr6SjHmnruFxxzoLZ6QiyWfT1WPS2qtEhKUP4nkNSiHa3HRrHzgTsfdXBkNrp9",
  "key39": "5HeEYKdWqYeiLGmCDwDMVLwMivL9DQS38otTckyKCKMWq5BdY2iW24H2Q1FzCbXX3ADJJHSjdrF5vLB2jMVXRZcJ",
  "key40": "5kqr5QX9UedTmLAJUdmsXs1hZnNDyRZsirdL2psoUp5jA7tGYckd6EQXtfshxK1V24F2Qu7hzigHZ1EUQCaYtFSj",
  "key41": "3hN83bu13ryihVaoRq98vsgZKgBvdudvYPETFhxrsghsCqL2pqTJDSu5ESeuhcshKy9h3hjEYju4PtFsdDxoSnoj",
  "key42": "pmGHYycLdXJBsQFSeRqpxLg2EgUQ3SNDZaXGFnc1so5nbs8CVM3Wy8DjKK5BDbQfDVEwSGq8XURmCAjnwYvUppn",
  "key43": "5ZNjrfvCPEudEbmERjEmvSTdnMw28QRkigRbnvBQV8D5wiYvmhDJnNcKuBWy9xQ8bn2c5Y3tu2A3F3NwTuqu8vk",
  "key44": "2ag7jHfGkTxtZR1QJXnm84WET2VkWyL2k2wz6f9hWQPhF6EwR29mzsPcduUR9sBwnjwEvRFk1AEN88KML3Zu1vrA",
  "key45": "59Ggh8uGFiez3kD4SAH127pq1PgpxuGQzLobJXyJxusffQSECPnduLd3D7NRDavQSq5cU6bjC1PwSSwxttm4adKF",
  "key46": "3SY1cWrQMZ1qZx8sQinZrh778JXXo5Ki79eoBWLoPaLcx7kKsWqRhopqMxrdHGCJ3PH6MMjUz2bNTHWiv36MZRdz",
  "key47": "EXmzcQu7fGNTqhejhoKq5zRwd9hnB8vEL1Rf6S6caB6ZHxxcPctHecynXQGcARMnr37JYhACWsVv2GT9RhohzCw",
  "key48": "4SRq5CVs9RgrMRfNcYZ4t71Ky91hcig5D1Ve9nSL5ZBHasBo8STqTn4LogyCy2QQT4p5Y7BRKRqn8xwgwqKwQbRe"
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
